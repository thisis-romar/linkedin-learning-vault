---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-pen-testing-techniques-for-active-directory
url: "https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory"
duration_minutes: 101
duration: 1h 41m
level: Advanced
updated: 8/10/2023
learners: 13696
skills:
  - Penetration Testing
  - Active Directory
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGusBmcgYvmig/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647026759098?e=2147483647&amp;v=beta&amp;t=LuccBGNQTv1RKy8rPBA3MNnjFsIzFe-Vx0nv3IM70Qo"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become a Penetration Tester]]'
prev_courses:
  - '[[Penetration Testing Web Apps with Kali and Burp Suite]]'
next_courses:
  - '[[Burp Suite Essential Training]]'
path_nav: '[{"path":"Become a Penetration Tester","position":6,"total":8,"prev":"Penetration Testing Web Apps with Kali and Burp Suite","next":"Burp Suite Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/penetration-testing
  - skill/active-directory
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Advanced%20Pen%20Testing%20Techniques%20for%20Active%20Directory.md)

![Advanced Pen Testing Techniques for Active Directory](https://media.licdn.com/dms/image/v2/C560DAQGusBmcgYvmig/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647026759098?e=2147483647&amp;v=beta&amp;t=LuccBGNQTv1RKy8rPBA3MNnjFsIzFe-Vx0nv3IM70Qo)

# Advanced Pen Testing Techniques for Active Directory

> As a security professional, one of your most important jobs is to make sure that only authorized users have access to your system. Most often, this is achieved via credential-based access control, where credentials are stored in central directories like Microsoft Active Directory (AD). But are you really ready to handle an unexpected cyberattack?In this course, instructor Malcolm Shore gives you a

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory) | 1h 41m | Advanced | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Understand and test the security of identity providers](#understand-and-test-the-security-of-identity-providers)
  - [What you should know](#what-you-should-know)
  - [Disclaimer](#disclaimer)
- [**1. Introduction to Identities**](#1-introduction-to-identities) (9 videos)
  - [Understand Active Directory's role in security](#understand-active-directorys-role-in-security)
  - [The LDAP protocol](#the-ldap-protocol)
  - [Interact with LDAP at the command line](#interact-with-ldap-at-the-command-line)
  - [The LDAPAdmin tool](#the-ldapadmin-tool)
  - [What is Active Directory?](#what-is-active-directory)
  - [Interact with Active Directory at the command line](#interact-with-active-directory-at-the-command-line)
  - [Access LDAP services with a GUI client](#access-ldap-services-with-a-gui-client)
  - [Add users and computers to a domain](#add-users-and-computers-to-a-domain)
  - [Active Directory security audit](#active-directory-security-audit)
- [**2. Testing Active Directory**](#2-testing-active-directory) (7 videos)
  - [Set up for testing](#set-up-for-testing)
  - [Extract the AD hashes](#extract-the-ad-hashes)
  - [Password spraying Active Directory](#password-spraying-active-directory)
  - [Kerberos brute-forcing attacks](#kerberos-brute-forcing-attacks)
  - [Use CrackMapExec to access and enumerate AD](#use-crackmapexec-to-access-and-enumerate-ad)
  - [Investigate the SYSVOL share](#investigate-the-sysvol-share)
  - [Take advantage of legacy data](#take-advantage-of-legacy-data)
- [**3. Advanced Penetration Testing**](#3-advanced-penetration-testing) (10 videos)
  - [Specific Active Directory attacks](#specific-active-directory-attacks)
  - [Remote extraction of AD hashes](#remote-extraction-of-ad-hashes)
  - [Carry out a Kerberos roasting](#carry-out-a-kerberos-roasting)
  - [Run a no-preauthentication attack](#run-a-no-preauthentication-attack)
  - [Forge a golden ticket](#forge-a-golden-ticket)
  - [Running a shadow attack](#running-a-shadow-attack)
  - [Using rubeus to take over the domain](#using-rubeus-to-take-over-the-domain)
  - [Relaying attacks to get a certificate](#relaying-attacks-to-get-a-certificate)
  - [Using smartcards to gain privileged access](#using-smartcards-to-gain-privileged-access)
  - [Set the BloodHound loose](#set-the-bloodhound-loose)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand and test the security of identity providers](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/understand-and-test-the-security-of-identity-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/understand-and-test-the-security-of-identity-providers?u=76281980&t=0)** - [Malcolm] It's important to ensure that only authorized users can gain access to your systems and information. And the security mechanism for that is typically credential based-access control. Enterprise credentials are stored using central directories, often, [[Microsoft]]'s [[Active Directory]]. So we have to be doubly sure that these identity stores are secure. I'm Malcolm Shore, and I've spent a career helping governments and businesses protect their systems. I'd like to invite you to take this course and learn about how attackers try to access our active directory systems, and the ways we can secure them. Now let's get started with [[Penetration Testing]] Active Directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (3), [[Microsoft]] (1), [[Penetration Testing]] (1)
> **Speakers:** - [malcolm] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course and we'll be using [[Kali Linux]]-based tools to do testing. And we'll be targeting servers on both our VirtualBox test network, which we set up in Learning Kali Linux, and on the [[HackTheBox|Hack-the-Box]] testing lab. You'll need to have a good working knowledge of Kali Linux and it would be useful to have some experience with pen testing in general. If you've taken the Advanced Kali Linux and [[Penetration Testing]] Essentials courses, that would be an advantage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (4), [[HackTheBox|Hack-the-box]] (1), [[Penetration Testing]] (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/disclaimer?u=76281980&t=0)** - [Malcolm] This is one of a series of advanced [[Penetration Testing]] courses, and in addition to [[Kali Linux]], it uses some third party testing software. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers, and we can't provide any assurance that these sites might not be compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware, and may raise antivirus alerts when you visit them. The testing tools we use are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise antivirus alerts when you try to download them. Again, we can't provide assurance that the software hasn't been compromised when you download it, and so as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system. The testing is mostly carried out inside a virtual environment to contain any unplanned effects of testing tools. And in the unlikely event that you do download malware, this will also help contain any impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (1), [[Kali Linux]] (1)
> **Speakers:** - [malcolm] (1)


### 1. Introduction to Identities

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand Active Directory's role in security](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/understand-active-directory-s-role-in-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/understand-active-directory-s-role-in-security?u=76281980&t=0)** - [Instructor] An enterprise is an organization consisting of many business units and lots of people using a large number of workstations, servers, printers, and other devices that are connected into a technology infrastructure. Each user and every device has a unique identity. And we often need to confirm that the identity of that user or device is authentic. We also need to be able to control access to the enterprise's technology resources such as workstations, servers, and applications, making sure that any access is authorized before we allow it. Managing all of this is the purpose of what is known as the enterprise Identity and Access Management, or IAM system. This is a key infrastructure component of any enterprise and typically is around half the workload for the enterprise chief information security officer. IAM issues, particularly with weak credentials and excessive privileges are the cause of most of the security incidents we have to deal with. There are five basic components in an Identity and Access Management system. These are a directory, which holds the details associated with the organization and its individual entities. This is the core of the IAM system; a management tool for adding, modifying, and deleting directory information; a mechanism to regulate and then force user access; and a mechanism to regulate and manage privileges; and an auditing and reporting system. The director has been part of many computer operating systems
>
> **[1:33](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/understand-active-directory-s-role-in-security?u=76281980&t=93)** starting with the early mainframes. And today, pretty much every computer maintains a local directory holding user identities and their credentials. In [[Linux]], it's the slash cetera slash password file, together with the shadow file for password hashes. And in [[Windows]], it's the Windows Security Account Manager, or SAM subsystem. For enterprise solutions, identities tend to be centrally managed through commercial identity management solutions. A simple solution we may encounter is the Open Source LDAP server, but the most common directory is the Windows-based [[Active Directory]]. We'll also come across third party [[Microsoft Products|products]] such as Shibboleth, Okta, Oracle Identity, and so on, all of which provide value added services on top of basic identities. The main use of a directory is to manage the logical ownership of users and computers within the enterprise organizational structure. A directory may also be used to map them across the physical perspective of geographically dispersed business sites. While we can manage Active Directory using Server Manager via the console, we'll often want to use a remote client interface to manage it. [[Microsoft]] provides the remote server administration tool, which can configured as a standard feature on a Windows workstation. And there's also [[Powershell]], which enables command line, power [[User Management]]. We can access the LDAP service on Active Directory and on Linux LDAP servers using third party tools, such as LDAPAdmin and Jxplorer.
>
> **[3:09](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/understand-active-directory-s-role-in-security?u=76281980&t=189)** The traditional credentials used to authenticate an identity and authorize access to a resource is the user ID and password. Passwords are typically stored as password hashes so that the plain text password is not at risk. Active Directory stores its password hashes in the Windows SAM file. Unfortunately, many of the breaches we've seen and continue to see are due to passwords being easily guessed or the password hashes being cracked using a dictionary attack tool such as [[Hydra]] or [[John the Ripper]], In an effort to make passwords secure, The security industry has moved towards the use of complex passwords, but this often makes the problem worse, not better. Fortunately, we are now seeing the increased use of a second layer of authentication through one-time codes. This has evolved is now a mainstream approach known as multifactor authentication, often implemented through the use of a smartphone app. While not perfect, this is finally providing an effective solution to managing access. Directory Auditing is the process of collecting data about the directory objects and their attributes and then analyzing them to determine the overall health of the directory. An audit will help identify what improvements may be required to secure the directory from attackers who are after credentials and to ensure access to technology systems work smoothly in support of the business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Active Directory]] (4), [[Linux]] (2), [[Microsoft Products|Products]] (1), [[Microsoft]] (1)
> **Env Vars:** iam (3), ldap (3), sam (2)
> **Definitions:** known as (2), is an  (1), is a  (1)
> **Analogies:** such as (4)
> **Tools:** powershell (1), command line (1)
> **CLI Commands:** make (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [The LDAP protocol](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/the-ldap-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/the-ldap-protocol?u=76281980&t=0)** - [Instructor] LDAP is the Lightweight Directory Access Protocol and is used extensively in various [[Forms]] of enterprise servers. It provides a standard way of accessing an X 500 compliant directory. LDAP is a TCP IP branch of the original OSI directory access protocol. And by default, communicates using ports 389 for LDAP and 636 for LDAPS. X 500 defines a tree structured repository for managing items in an organization. The tree consists of the root directory, which is broken down into countries. Each of which breaks down into organizations, which branch out to one or more levels of organizational units, divisions, departments, and so forth. And then individual entities, such as people, files, printers, and so on. An LDAP directory can be distributed amongst many servers, each having a replicated version of the total directory and each being synchronized periodically. An LDAP server that receives a request from a user takes a responsibility for the request, passing it to other servers as necessary, but ensuring a single coordinated response goes back to the user. LDAP isn't a plain text protocol. So we can't just use a telnet style client. We have to use a specific protocol client to interact with LDAP. Here we can see the format of an LDAP message. In this case, a search request for the directory tree, starting at the tree route. The message content has three components.
>
> **[1:34](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/the-ldap-protocol?u=76281980&t=94)** The message ID, the protocol operation, and a controls field, which in this case, is the associated global unique identifier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Env Vars:** ldap (8), tcp (1), osi (1), ldaps (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Interact with LDAP at the command line](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-ldap-at-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-ldap-at-the-command-line?u=76281980&t=0)** - [Instructor] Let's see how we interact with a simple LDAP service. I've set up an OpenLDAP server on my [[Ubuntu]] system at IP address 10.0.2.23 and populated it with a small number of demonstration entries. We won't spend much time on OpenLDAP, but if you do want to do more, you can find all you need to know in Grant MC Williams, [[Linux]] OpenLDAP course here on [[LinkedIn]] Learning. We can enumerate LDAP directory information at the Carly terminal using Nmaps, LDAP search script, and for an OpenLDAP server, we'd expect to be able to gain anonymous access. In other words, we don't need to authenticate with credentials. We do this with [[Nmap]] minus p389 10.0.2.23
>
> **[0:48](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-ldap-at-the-command-line?u=76281980&t=48)** minus minus script equals LDAP search. This connects to the server, confirms port 389 is open and enumerate the whole database using anonymous access. Nmap has returned the directory objects starting with the organizational root record for cybex.nz, the directory administrator account admin. And then defined the users and groups containers and the user accounts. Another tool we can use to enumerate LDAP is LDAP Search which comes a standard in Carly. This works in a similar way to Nmap, but we need to specify the X 500 domain using its representation in the standard minus DC string form. And we do that with LDAP search minus x minus b and dc equals cybex, dc equals nz minus H
>
> **[1:52](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-ldap-at-the-command-line?u=76281980&t=112)** and the server is LDAP://10.0.2.23.
>
> **[2:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-ldap-at-the-command-line?u=76281980&t=120)** LDAP Search list the directory objects for cybex.nz. And in this case, it's the complete directory as it holds only cybex.nz objects. If we look at the fields in the user record that we've retrieved, we can see that we haven't received a password field, even though OpenLDAP stores this in its database. Let's SSH into the server using an administration account. SSH malcolm@10.0.2.23.
>
> **[2:35](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-ldap-at-the-command-line?u=76281980&t=155)** We're now logged into the LDAP server, and we can run slap cat to dump all the database fields, sudo slapcat. And we can see that the user password field is shown as an obfuscated value. This however is just a base 64 encoding so we can retrieve the plain text easily. Echo minus n YWtodGFy
>
> **[3:12](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-ldap-at-the-command-line?u=76281980&t=192)** and we'll pipe that into base 64 for minus minus decode. And we get out the password which is the same as the username, akhtar. Even though OpenLDAP doesn't allow passwords to be extracted remotely, command line tools such as these can be useful when we're testing identity directories. It's worth investing a bit of time in becoming familiar with them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (3), [[Ubuntu]] (1), [[Linux]] (1), [[LinkedIn]] (1)
> **Env Vars:** ldap (10), ssh (2)
> **CLI Commands:** ssh (2), find (1), cat (1), sudo (1)
> **Versions:** 10.0.2 (4)
> **Tools:** terminal (1), command line (1)
> **Ports:** port 389 (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)

#### [The LDAPAdmin tool](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/the-ldapadmin-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/the-ldapadmin-tool?u=76281980&t=0)** - [Instructor] It's sometimes easier to use a visual tool for managing directory information. We can download a free LDAP Administration Client from Source Forge as shown here. If we go into the files tab, LDAP Admin, 1.8.3
>
> **[0:19](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/the-ldapadmin-tool?u=76281980&t=19)** and we can download the LdapAdminExe zip file. I've already done that. So let's go and have a look at it. Let's start, connect, new connection and we'll call it Cybex and the host is 10.0.2.23 and we'll make sure anonymous connection is checked and we'll [[Fetch]] DNS. And very quickly we find that LDAP Admin has identified cybex.nz as our domain. So we now have a new connection. So let's double click to open it. We can see the LDAP structure for the cybex.nz domain on the left and the schema at the right. We two organizational units showing users and groups and we've got an admin account. If we open groups, we can see development in sales and in users, we can see our users. When we click on Jane, we can see her details in the right hand pane. What we don't get returned of course are any passwords.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** ldap (4), dns (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 1.8.3 (1), 10.0.2 (1)
> **Exercise Files:** download the (1), zip file (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [What is Active Directory?](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/what-is-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/what-is-active-directory?u=76281980&t=0)** - [Malcolm] [[Microsoft]] provides an LDAP-compliant identity provider called [[Active Directory]] as an optional feature in its server range. So when we purchase a [[Windows Server]], we've also got a latent Active Directory waiting to be activated. However, with Microsoft, we get much more than just an LDAP directory. The full name of the Microsoft identity provider is Active Directory Domain Services, and it not only provides identities, but is usually deployed as a complete domain management system. Let's take a look at Windows Server 2019. The server manager provides the options for us to add roles and features. If we go to server selection and server roles, we see five Active Directory features we can turn on. We can see that Active Directory Domain Services is checked. I've already set the server up as an Active Directory Domain Server. As we can see, we could set up Windows Server 2019 to provide just the lightweight directory services by checking Active Directory Lightweight Directory Services. And we'd have an LDAP service. But Active Directory Domain Services provides an LDAP service and much more, and is the usual way in which Active Directory is deployed. So what do we get when we switch on Active Directory Domain Services? We get a directory where we can store identity-related items, which we can refer to more properly as AD objects. There are many objects such as users, computers, policies
>
> **[1:36](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/what-is-active-directory?u=76281980&t=96)** and so on. We get what is known as a schema that defines the AD objects and their attributes and relationships. We get a catalog, which is arranged as a hierarchy of containers in which the AD objects are put, allowing them to be browsed and searched. We get Group Policy Objects, or GPOs, which enable central management to the configuration of computers and user accounts. There's also a replication service for distributing directory data on the network so that we can run multiple synchronized directories. And last but not least, Active Directory provides a central security system to authenticate identities and control access by users and services to systems in the Active Directory domain. I won't go into the details of how we set up and manage active directories, but you can check out the Active Directory courses from Ed Lieberman if you want to delve further into this. However, in summary, to set up an Active Directory, we first install a Windows server. And once this is running, we can use the Server Manager to configure its role as being an Active Directory using Active Directory Domain Services. Following that, we can upgrade what is now an Active Directory server to become an Active Directory Domain Controller. We can then set up our organizational structure, users, and devices on the directory. We can think of an enterprise as a single domain, holding a set of users and a set of computers. However, it's not that simple in the real world.
>
> **[3:09](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/what-is-active-directory?u=76281980&t=189)** When we look at the Active Directory hierarchy, we see it starts with what's known as a realm, which is the full scope of everything in the enterprise. Within that, Active Directory allows a number of independent groups of domains, each having their own security boundary. These are known as forests. There may be just one Active Directory forest in an organization, or there could be multiple forests. For example, to support independently operating businesses within a conglomerate. Then within the forest, we have one or more Active Directory domains, and these are used to separate groups of AD objects in whatever way makes sense to the business. And then, we can also create subdomains of an Active Directory domain, sub-subdomains, and so on. How this is done, of course, is decided by the organization's unique structure and of operating model. The structure of our Active Directory tree isn't just internal to Active Directory. It reflects how the enterprise is visible in the real world. Let's get a glimpse of what this looks like. We can run a tool that comes with [[Kali Linux]] called DMitry, which retrieves public information on an organization. I'll run this against [yahoo.com](https://yahoo.com). DMitry on [yahoo.com](https://yahoo.com). Okay, we can see here that DMitry has gathered subdomain information for [yahoo.com](https://yahoo.com). So [yahoo.com](https://yahoo.com) is the domain, and calendar.[yahoo.com](https://yahoo.com), uk.[yahoo.com](https://yahoo.com), and so on are all subdomains.
>
> **[4:45](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/what-is-active-directory?u=76281980&t=285)** And they, of course, may have internal subdomains themselves. There's also a subhierarchy within Active Directory which is relevant to domain controllers, and this is to do more with the network topology and group policies than the business model as such. This hierarchy starts with the domain, and breaks down to sites. And within sites, we can have users and devices. This is important when we start planning replication of directory information, and need to understand how domain controllers talk to each other. It also affects the application of policy settings, with domains taking precedence over sites, over local machines. There's an other Active Directory concept which comes into play here also, and that's trust relationships between domain controllers. These need to be in place to enable exchange of information between domains for replication, but also to support access for users to query directory information from a domain outside of their own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (27), [[Windows Server]] (4), [[Microsoft]] (3), [[Kali Linux]] (1)
> **URLs:** [yahoo.com](https://yahoo.com) (6)
> **Prerequisites:** set up (4), install (1), configure (1)
> **Env Vars:** ldap (4)
> **Definitions:** known as (3)
> **Analogies:** such as (1), for example (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)

#### [Interact with Active Directory at the command line](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-active-directory-at-the-command-line?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-active-directory-at-the-command-line?u=76281980&t=0)** - [Instructor] We can use command line tools to query [[Active Directory]] through its LDAP service, as we did for OpenLDAP, as they both present a standard LDAP service. I've got an active directory server running on IP address 192.168.1.199 and managing the [cybex.com](https://cybex.com) domain. So let's use [[Nmap]] to dump out the LDAP database using the LDAP search script. However, a standard active directory doesn't allow unauthenticated access. So we need to be authenticated as a domain user for this to work. We'll put into the request the user ID, Adam, and his password, which is BlueMarble22. Nmap minus P 389 192.168.1.199 minus minus script
>
> **[0:56](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-active-directory-at-the-command-line?u=76281980&t=56)** equals LDAP-search, and we need minus minus script-args, the arguments for the script, to be LDAP.username equals cybex\Adam
>
> **[1:21](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-active-directory-at-the-command-line?u=76281980&t=81)** LDAP.password is BlueMarble22,
>
> **[1:32](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/interact-with-active-directory-at-the-command-line?u=76281980&t=92)** and for our results, we'll actually put a filter in Q filter equals users and we'll do a minus Pn to make sure that we get a response from the server. Okay, here we have a similar result to running Mmap against OpenLDAP. We've retrieved the directory contents. In this case, we've used a slightly more sophisticated search and limited the results to just the users in active directory by using the QFilter clause.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Nmap]] (2)
> **Env Vars:** ldap (7)
> **Versions:** 192.168.1 (2)
> **CLI Commands:** make (1)
> **URLs:** [cybex.com](https://cybex.com) (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Access LDAP services with a GUI client](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=0)** - [Instructor] We've already looked at LDAP Admin to provide a GUI interface to LDAP, and there's another open source tool worth looking at called JXplorer, the [[Java]]-based LDAP Explorer tool. This doesn't come as standard in Kali, so we need to install it using APT. Sudo apt install jxplorer.
>
> **[0:27](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=27)** Okay, that's all we need to do. So, now we can start up the JXplorer tool. Jxplorer. Let's take a first look at [[Active Directory]]'s LDAP service, using JXplorer. At the main screen, we click on the connect icon, and put in the host, 192.168.1.199. And we'll change the level to user ID and password. And the user DN is aadama31@[cybex.com](https://cybex.com).
>
> **[1:12](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=72)** And the password is bluemarble22.
>
> **[1:22](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=82)** We now get the LDAP tree displayed in the pane on the left, with its top level entry of [cybex.com](https://cybex.com), and its three subordinate entries of Configuration, DomainDnsZones, and ForestDnsZones. In Configuration, we can expand the schema entry, and we get a warning that only 1000 entries are returned; it's a large schema. Opening the domain DNS zones isn't quite so daunting, with just four entries. If we expand [[Microsoft]] DNS, we see that [cybex.com](https://cybex.com) is our DNS entry, and we can expand that, and we see the various networking entries for our domain. Then the entry, DESKTOP-11RRJVH, which is our one token work station in the domain at the moment. Active directory is a complex product, and finding data in the tree is no simple matter. Manually walking the tree is a long process. So, let's use JXplorer's search capability. We'll highlight cybex, and we'll enter cn=*, and we'll click quick search; and we get 243 entries. We can see the standard active directory entries together with the domain specific entries for organizational units and users of Cybex. If we want to clearer a view of the organization,
>
> **[2:55](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=175)** we can do the search again. This time, changing cn to ou,
>
> **[3:07](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=187)** and clicking quick search; and we get 11 entries. And now we get the organizational tree for the [cybex.com](https://cybex.com) domain. We've got Finance, IT, Personnel, and Sales, with their sub-organizational user accounts. When we look at Admins, we can see it's an organizationalUnit record. In this view, to see the actual users, we need to click on the IT Admin organizationalUnit, and select search, and in the text filter, enter cn=*, and search.
>
> **[3:50](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=230)** And we get the two IT admins. Let's click on the entry, "Akhtar Katt", and we see the detailed record in the right hand pane. Note that we don't get the user password hash as part of a normal remote query. We can switch the display from [[HTML]] View to Table Editor View using the top tab, and that shows a much more complete view of the active directory record. Let's run a more involved query. Firstly, let's set our search attributes. From the search menu, let's select Return Attributes. And then, in the dialogue box, set the name to UserRef to refer to this output format. And select the attributes, sAMAccountName,
>
> **[4:48](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=288)** userPrincipleName, and memberOf.
>
> **[4:59](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=299)** And we can save this. Okay. We'll then highlight the domain cybex in the tree on the left, and right click, and search.
>
> **[5:20](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=320)** We'll set the information to retrieve as UserRef, and we'll build a filter by setting the field to adminCount Equal To 1.
>
> **[5:41](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/access-ldap-services-with-a-gui-client?u=76281980&t=341)** And we can click search, and we get 18 entries. When we click search, we get a list of all accounts which have adminCount set to 1. At the top, We see Administrator, and if we scroll down, we can see jdoe76, aadama31, and akatt42; from Cybex. Note also, the various groups, such as print and backup operators also have their adminCount set to 1. AdminCount doesn't necessarily mean an account has administrative privileges, but the behavior and processes associated with these accounts is complex and worth investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Java]] (1), [[Microsoft]] (1), [[HTML]] (1)
> **Env Vars:** ldap (5), dns (3), gui (1), apt (1), desktop (1)
> **Code Identifiers:** admincount (3), organizationalunit (2), samaccountname (1), userprinciplename (1), memberof (1)
> **UI Navigation:** click on (3), select the (1), scroll down (1)
> **URLs:** [cybex.com](https://cybex.com) (4)
> **CLI Commands:** apt (2), sudo (1)
> **Definitions:** is a  (2)
> **Warnings:** warning (1), note that (1)

#### [Add users and computers to a domain](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/add-users-and-computers-to-a-domain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/add-users-and-computers-to-a-domain?u=76281980&t=0)** - [Instructor] Let's have a brief look at how we set-up users in our [[Active Directory]] server. We're logged into the Active Directory. And we can select Tools, Active Directory Users and Computers. Here we can see the [cybex.com](https://cybex.com) domain with its folders, including the default top-level Computers and Users folders. And there are also the top-level organizational units. And we'll be adding a new user into the Finance unit. To add this domain account, all we need to do is expand Finance, right-click Users and say New, User. So we'll enter the first name as Peter. The last name as Walker. The logon name is pwalker55. We can now put in his password. Let's put in an initial password. Changeme-gen22. And again, changeme-gen22.
>
> **[1:18](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/add-users-and-computers-to-a-domain?u=76281980&t=78)** There are, of course, very good reasons not to use predictable passwords in a production environment, but nevertheless, it's not an unusual approach.
>
> **[1:32](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/add-users-and-computers-to-a-domain?u=76281980&t=92)** We can now select the account. And if we check Member Of, we find this account has been added as a standard domain user. And we can update the account information with more details if we wish. Let's have a look at how we connect the computer to the domain. We're on a newly deployed [[Windows 10]] desktop. And we want to connect this Cybex domain. The first thing we'll do is select Control Panel, Network and Sharing Center, we'll click on Ethernet, and select Properties, IP version four, Properties.
>
> **[2:22](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/add-users-and-computers-to-a-domain?u=76281980&t=142)** And in the DNS section, we'll set the preferred DNS server to our Active Directory, 192.168.1.199. And we can close these [[Windows]]. Now, let's select Control Panel, System,
>
> **[2:53](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/add-users-and-computers-to-a-domain?u=76281980&t=173)** Advanced System Settings; we'll select Computer Name, Network ID. "This computer is part of a business network." "My company uses a network with a domain." We can now enter our domain administrator name, and password, and the domain Cybex. Administrator, and the password, and the domain name Cybex. We'll enter the computer name as DESKTOP-11RRPVZ and the domain as [cybex.com](https://cybex.com).
>
> **[3:50](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/add-users-and-computers-to-a-domain?u=76281980&t=230)** We'll also enter our credentials again. Administrator, Password, and the domain Cybex.
>
> **[4:13](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/add-users-and-computers-to-a-domain?u=76281980&t=253)** And the Cybex administrator will be administrator. We've connected to the domain. We'll need to reboot. And Windows will restart the desktop as a domain computer. And we can sign in with our domain credentials.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Windows]] (2), [[Windows 10]] (1)
> **Env Vars:** dns (2), desktop (1)
> **UI Navigation:** right-click (1), select the (1), click on (1)
> **URLs:** [cybex.com](https://cybex.com) (2)
> **CLI Commands:** find (1)
> **Versions:** 192.168.1 (1)
> **Speakers:** - [instructor] (1)

#### [Active Directory security audit](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/active-directory-security-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/active-directory-security-audit?u=76281980&t=0)** - [Instructor] Before we get into deep testing of [[Active Directory]], we can usually take a more defensive approach and run a security audit across our domain. We can do this by browsing the Active Directory but this is a long and difficult road to take. There are a number of advanced commercial auditing packages, including Lepide's AD Auditor. Lepide do provide an open source simple tool to allow a domain administrator to check for admin privileges. As a demonstrator of their commercial Active Directory auditor, we can download this by registering with Lepide, which I've done. I'm on my domain workstation, so let's run the tool against our [cybex.com](https://cybex.com) domain. The tool's actually called users, AD users with admin privileges.exe but I've renamed it to Lepide.exe. So, we run Lepide and we'll enter [cybex.com](https://cybex.com) So, we run Lepide and we'll enter [cybex.com](https://cybex.com) and our administrative credentials, administrator, and our administrative credentials, administrator, and our admin password. And we'll scan. We immediately get a report showing all users with administrative privileges. We can see we've not only got Administrator but also aadama31 and akatt42. Understanding who are your administrators is a good start. But as we'll see as we proceed through testing,
>
> **[1:35](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/active-directory-security-audit?u=76281980&t=95)** there are other privileges which we need to be concerned about in an audit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (3)
> **URLs:** [cybex.com](https://cybex.com) (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 2. Testing Active Directory

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up for testing](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-up-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-up-for-testing?u=76281980&t=0)** - [Instructor] We've done a little hands on work so far, so let's take a look at what we need for the full testing lab corrective directory. This course is about [[Active Directory]] and so it's a minimum, we need a Carly testing workstation and an active directory running on a [[Windows Server]]. It's useful to also have at least one domain workstation. And this is going to make virtual box a little bit sluggish. I'll be using these systems on a Proxmox virtualization server, rather than my normal virtual box lab. Proxmox is open source and for serious active directory work I'd recommend using it. You can set up a very respectable lab on a secondhand server for just a hundred dollars or so. If you want to install active directory and follow along, then you can download and install the 180 day free version of [[Microsoft]] server 2019 from the Microsoft site shown here and configure it for the active directory domain server role. We've already lugged the 10 map and L DAP admin and we've installed J Explorer. There are our five additional tools we'll be using during the course, and these are useful additions to our testing toolkit. We'll be using [[Powershell]] on the active directory itself to carry out testing, and we'll extend active directories built-in capabilities with a package shown here, called DS internals. We can load DS internals directly from an administrative PowerShell by entering set execution, policy Unrestricted
>
> **[1:40](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-up-for-testing?u=76281980&t=100)** Install module Minus name, DS internals, and we'll confirm. And we'll confirm again. And we've now installed a DS internals module together with the Nuget package. The second tool we'll use is the Impacket library and its sample [[Python (Programming Language)|Python]] scripts. We can install them on our Carly workstation with the command sudo apt install Python three, impacket. Okay. The third tool we'll need is bloodhound. This comes in two parts the main bloodhound analysis engine, which is based on the Neo four J graph tool and the bloodhound Python data collector. Bloodhound isn't installed as standard in Carly. So we need to install it. Sudo apt install bloodhound. And this'll take a little while. So let's come back when it's finished. Okay. The second part of getting this tool ready is to install the Python agent. And we do that with pip install bloodhound.
>
> **[3:14](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-up-for-testing?u=76281980&t=194)** Okay, we'll leave this here now and we'll come back to it when we are ready to use it on our active directory target. Kerbrute is a Kerberos protocol based tool which can be used for testing active directory accounts. We can download Kerbrute from the ropnop [[GitHub]] site. Okay, I've downloaded that with the file name Kerbrute. So let's set it to be executable. chmod plus X kerbrute. Another tool which we can install is crack map exec shown here. This is a useful multi-protocol testing tool. We install this using apt, sudo apt install crack map exec.
>
> **[4:14](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-up-for-testing?u=76281980&t=254)** - Okay. We've set up the main testing tools. So let's go do some testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (8), [[Python (Programming Language)|Python]] (4), [[Microsoft]] (2), [[Powershell]] (2), [[Windows Server]] (1)
> **Prerequisites:** install (12), set up (2), configure (1)
> **CLI Commands:** python (4), apt (4), sudo (3), make (1), pip (1)
> **Tools:** powershell (2), github (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1), - okay (1)
> **Env Vars:** dap (1)

#### [Extract the AD hashes](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=0)** - [[Windows]] provides command line tools for administrators to make an accessible copy of the [[Active Directory]] database ntds.dit. The first file we need is HKLM System from the registry. I've already created a temp folder, so we'll put it there. We need to have an administrative command show open. And we can copy out the registry extract with the command reg SAVE HKLM/system
>
> **[0:33](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=33)** and we'll save it to c:/temp/sys. To copy the active directory we use the VSS admin tool. Sometimes we might have to fix it after we copy it out. So we'll run the fix utility anyway and we do this as follows at the Windows command line. VSSadmin, create shadow /for=c:
>
> **[1:12](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=72)** Okay, and we can now copy \\?\GLOBAL\Device\Harddiskvolume
>
> **[1:44](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=104)** ShadowCopy1\Windows\NTDS\ntds.dit
>
> **[2:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=120)** and we'll copy that to C:\tem\dit.
>
> **[2:12](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=132)** Global root device. And we'll run the fix utility SNTUTL /p
>
> **[2:29](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=149)** c:\temp\dit /1024 /8 /0 .
>
> **[2:53](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=173)** We now have the files with we need, and we can use the DS internals tool. Get ADDB account to extract the information. We can do that here, or we can take the files away and do it out of sight of the target. Firstly, we extract the boot key from the sys file and then we use it to extract the active directory information. $Key= Get Boot Key -System Hive File path c:\temp/sys.
>
> **[3:41](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=221)** - And Get ADDB Account.
>
> **[3:49](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=229)** Might as well get all the hashes out of the active directory.
>
> **[3:54](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=234)** - BootKey that we've collected is $Key -DBPAth is c:\temp\dit.
>
> **[4:14](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/extract-the-ad-hashes?u=76281980&t=254)** - We now have a dump of the account information and can select from this all the users and their NT hash values. We can then use these in order to pass the hash or we can crack them to obtain the plain text credentials.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Windows]] (3)
> **Env Vars:** hklm (2), addb (2), save (1), vss (1), global (1)
> **Speakers:** - windows (1), - and (1), - bootkey (1), - we (1)
> **Tools:** command line (2)
> **CLI Commands:** make (1)

#### [Password spraying Active Directory](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/password-spraying-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/password-spraying-active-directory?u=76281980&t=0)** - A common way to retrieve credentials from [[Active Directory]] is to spray all accessible accounts with a guest or known password or a list of passwords. There's a number of tools we can use to do this. Let's have a look at the domain password spray [[Powershell]] script from Dafthack. I've downloaded the domain password spray script from the [[GitHub]] site onto my domain workstation and I'm logged in as the domain user Sam Spade. I can now import the script and run it in PowerShell. We'll get a few warnings, but we can ignore them for the purposes of the course. Import-Module, and I've got that loaded at c:/tools/dafthack/DomainPasswordSpray.ps1.
>
> **[0:55](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/password-spraying-active-directory?u=76281980&t=55)** Okay, now let's try it with a password guess. Invoke-DomainPasswordSpray -Password
>
> **[1:13](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/password-spraying-active-directory?u=76281980&t=73)** and we'll try the password kitty-kat on all our accounts. And yes, we want to spray that. And we find akatt42 is using this password. We can also run against a dictionary file but this takes a while. Invoke-DomainPasswordSpray -PasswordList.
>
> **[1:41](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/password-spraying-active-directory?u=76281980&t=101)** And I have a list set up at tools\dafthack\adpass.txt.
>
> **[1:56](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/password-spraying-active-directory?u=76281980&t=116)** And confirm. Okay, that's running along merrily. Given that we'd expect around 30% of an enterprise's passwords to be weak, a password spray attack can be very effective. However, much depends on the quality of the password file and the amount of time we have. With a big password file and hundreds of users, an attack like this can take a while. Okay, we've got an early hit with Mary Kaminski but we can see that a dictionary attack like this, which uses timing pauses to avoid lockout, is very slow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (2), [[Active Directory]] (1), [[GitHub]] (1)
> **Tools:** powershell (2), github (1)
> **File Paths:** adpass.txt (1)
> **CLI Commands:** find (1)
> **Prerequisites:** set up (1)
> **Speakers:** - a (1)

#### [Kerberos brute-forcing attacks](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/kerberos-brute-forcing-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/kerberos-brute-forcing-attacks?u=76281980&t=0)** - [Tutor] Kerbrute is a tool we can use for bruteforce enumeration. It has four main commands. Bruteforce, which attempts to find a user password, with a known user account. Bruteuser, which attempts to validate username and password combinations. Userenum, which attempts to find valid user account names. And Passwordspray, which will attempt to validate a specific password, for a set of user accounts. We've downloaded this, so let's start by doing an unauthenticated enumeration of [[Active Directory]]. We need to give Kerbrute to file a potential user account names. When we're doing this, it's useful to have some knowledge of the naming conventions. For example, knowing the user ID format is an initial and the first five characters of the surname, followed by two numerics. Can be useful in creating the dictionary. If we can also get a business internal directory, we have a great start point, for identifying valid usernames. Knowing the format of the Cybex accounts, I've prepared a file called Kulist, which has each candidate name with the suffix ranging from 00 to 99. Kerbrute, will run a Kerberos query against the active directory. Using each name in the file, to check whether they're valid. Kerbrute Userenum -d [cybex.com](https://cybex.com)
>
> **[1:33](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/kerberos-brute-forcing-attacks?u=76281980&t=93)** - -dc 192.168.1.199 kulist. And we quickly get one result. Let's leave Kerbrute to it, and come back when it's complete. Now we have a set of user accounts that are active in the domain, let's try to guess their passwords. I've set up the list in a file called Kuhits. Knowing how the organization sets up new user accounts, can help us. Let's run a passwordspray attack, across all the user accounts we have. With a predictable first log on password, changemejanuary22, and see if anyone forgotten to change it. Kerbrute passwordspray -d [cybex.com](https://cybex.com)
>
> **[2:28](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/kerberos-brute-forcing-attacks?u=76281980&t=148)** - -dc 192.168.1.199 kuhits,
>
> **[2:37](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/kerberos-brute-forcing-attacks?u=76281980&t=157)** and the password, changeme-Jan22. And indeed we find that pwalke55's password is still set, to changemeJan22. We now have a domain account, that we can use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2)
> **CLI Commands:** find (3)
> **URLs:** [cybex.com](https://cybex.com) (2)
> **Versions:** 192.168.1 (2)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** changemejan22 (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### [Use CrackMapExec to access and enumerate AD](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/use-crackmapexec-to-access-and-enumerate-ad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/use-crackmapexec-to-access-and-enumerate-ad?u=76281980&t=0)** - [Instructor] Another tool we can use to enumerate, and gain access to [[Active Directory]] is CrackMapExec. CrackMapExec can scan a subnet to identify access points using SSH, SMB, LDAP, WinRM and MSSQL. When running an SMB scan across a sub domain without credentials, CrackMapExec can identify which targets are able to be accessed, and identify the domain. We've already installed CrackMapExec in our Kali testing workstation. So let's run this across our local domain. CrackMapExec, (keyboard typing) and we'll use it's SMB capability, 192.168.1.0/24 across the whole subnet. Running this returns a number of entries, including non domain systems, domain works stations, and 192.168.1.199 which is the domain controller for [cybex.com](https://cybex.com). If we have a password hash, and we haven't been able to crack it, we can use CrackMapExec to access the domain using the hash. For example, we've extracted a cap 42's password hash. So we can sign in using CrackMapExec SMB 192.168.1.199,
>
> **[1:24](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/use-crackmapexec-to-access-and-enumerate-ad?u=76281980&t=84)** which is our domain controller minus U, akatt42, minus H, (keyboard typing)
>
> **[1:38](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/use-crackmapexec-to-access-and-enumerate-ad?u=76281980&t=98)** CrackMapExec has confirmed that we've achieved access. And in fact, that the access has administrative privileges by annotating the access with the note Pwn3d! It's also possible to use CrackMapExec to carry out a diction search in order to try to find a password. Let's run a dictionary check against the user Mkamin12, and use the adpass.text file. CrackMapExec MB 192.168.1.199, minus U, mkamin 12,
>
> **[2:18](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/use-crackmapexec-to-access-and-enumerate-ad?u=76281980&t=138)** minus p adpass.text. And we can see the password was found in the password file, and CrackMapExec indicates that we have access. With its ability to test using SMB, LDAP, and WinRM, CrackMapExec is a useful tool for active directory testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2)
> **Env Vars:** smb (5), ldap (2), ssh (1), mssql (1)
> **Versions:** 192.168.1 (4)
> **CLI Commands:** ssh (1), find (1)
> **Non-Speech:** (keyboard typing) (2)
> **URLs:** [cybex.com](https://cybex.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Investigate the SYSVOL share](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/investigate-the-sysvol-share?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/investigate-the-sysvol-share?u=76281980&t=0)** - [Instructor] [[Active Directory]] maintains a domain wide SYSVOL share, to which all domain users have read access. This contains logon scripts, group policy data, under the domain wide information. While our access is read only, these files can sometimes provide a useful source of passwords, password hashes, and other sensitive information. Let's see how we access SYSVOL on our active directory. We can do this from Kali using the SMB client tool. SMB, client... 192.168.1.199, and we are looking for the SYSVOL share. And we'll use a domain user account, in this case, Jdoe76. And Jdoe password. And we now get an SMB prompt, and we can use all of the standard SMB commands. Firstly, let's list the file and folders in the share, by using, dlr. There's two folders. And the one we want to look at is [cybex.com](https://cybex.com). Let's see what's in that. Dlr, [cybex.com](https://cybex.com)\* And we can see there's DFSR Private, policies, scripts, and Starter GPOs. Let's check scripts. Scripts\*
>
> **[1:34](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/investigate-the-sysvol-share?u=76281980&t=94)** And we find a login script. Let's display that script and see whether it's of interest. And we'll get [cybex.com](https://cybex.com)\scripts\login.ps1
>
> **[1:54](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/investigate-the-sysvol-share?u=76281980&t=114)** and we'll display that with /dev/tty. And we see this includes a plain text password for setting up an admin share. This could be of use to us, as we continue our enumeration of the enterprise. Let's take a look at active directory and see where we'd find the share folder. We'll open File Explorer, Local Disc, [[Windows]], and we'll go down to, SYSVOL, SYSVOL, and here we can see the [cybex.com](https://cybex.com) and OGB folders that we saw before. This folder is writable from within active directory. So it's also a useful exfiltration point for malware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Windows]] (1)
> **Env Vars:** sysvol (5), smb (4), dfsr (1), ogb (1)
> **URLs:** [cybex.com](https://cybex.com) (4)
> **CLI Commands:** find (2)
> **Versions:** 192.168.1 (1)
> **Speakers:** - [instructor] (1)

#### [Take advantage of legacy data](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/take-advantage-of-legacy-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/take-advantage-of-legacy-data?u=76281980&t=0)** - [Instructor] It's worth checking the full user details returned from [[Active Directory]] as it's not unknown to find legacy passwords stored, often using either simple obfuscation or a reversible form of encryption. Such information may be used to hold application or service-specific passwords. Let's start up JXplorer. And we'll connect to 192.168.1.199
>
> **[0:33](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/take-advantage-of-legacy-data?u=76281980&t=33)** with the user ID and password and we'll use cyberx/samspade01. And his password. Okay. And let's find our organization details.
>
> **[1:05](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/take-advantage-of-legacy-data?u=76281980&t=65)** And let's look at the details for Akhtar. And if we have a look at the Table Editor, we can see there's a field called Info with a suspicious looking base64 value of V2lsZENhdA.
>
> **[1:23](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/take-advantage-of-legacy-data?u=76281980&t=83)** We can recover that quite easily using Base64.
>
> **[1:34](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/take-advantage-of-legacy-data?u=76281980&t=94)** Let's copy that. Echo that to base64 -d
>
> **[1:52](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/take-advantage-of-legacy-data?u=76281980&t=112)** and we can see the password is WildCat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1)
> **CLI Commands:** find (2)
> **Versions:** 192.168.1 (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Penetration Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Specific Active Directory attacks](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/specific-active-directory-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/specific-active-directory-attacks?u=76281980&t=0)** - [Instructor] In a pen test, we may be taking the role of a remote unauthenticated user or a malicious employee or contractor that's been given standard user credentials. We've seen how we can enumerate [[Active Directory]] by taking advantage of the default access we have and by trying brute force attacks. This is a pretty standard way of testing any system. Let's now take a look at some other ways in which attackers can abuse Active Directory by taking advantage of specific characteristics of Active Directory accounts and of the services such as Kerberos which support Active Directory. We'll be looking specifically at the way we can leverage the account replication privilege, the Kerberos no pre-authentication setting, the Service Principal name alias. We'll also look at how we retain ongoing access to Active Directory, including the use of Golden Tickets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (5)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Remote extraction of AD hashes](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/remote-extraction-of-ad-hashes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/remote-extraction-of-ad-hashes?u=76281980&t=0)** - [Instructor] We don't need to be on the [[Active Directory]] target to be able to extract password hashes, we can do it remotely. We don't need to be a domain administrator. We just need to know the credentials of one account with the replicating directory changes all permission. With this it's possible to remotely extract password hashes from a domain controller. I'm logged onto our new [[Windows]] domain workstation, as a domain user called Sam Spade. I'll load up [[Powershell]]. I've already installed the DSinternals toolkit. So I'll start by importing it. Import module. DSinternals. In order to access the remote server, we need to send credentials across. So we'll set them up and then use the get ADReplAccount module to extract to use a hash. Dollar cred equals get Credential.
>
> **[1:14](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/remote-extraction-of-ad-hashes?u=76281980&t=74)** And we can now enter the account which has the replicating directory changes or permission. And that's jdoe76 And the password is JDPASS2021. Okay, so we can now call, get ADReplAccount to replicate the account details for minus Sam Account name And the victim is going to be akatt42 Minus Server 192.168.1.199 Minus Credential Dollar cred minus Protocol TCP.
>
> **[2:24](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/remote-extraction-of-ad-hashes?u=76281980&t=144)** We now get back the full dump of Akhtar's active directory account and we can extract the NT hash and we can do with it what we will. Again, we can either crack it or use it for passing the hash.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2), [[Windows]] (1), [[Powershell]] (1)
> **Env Vars:** jdpass2021 (1), tcp (1)
> **Versions:** 192.168.1 (1)
> **Tools:** powershell (1)
> **Speakers:** - [instructor] (1)

#### [Carry out a Kerberos roasting](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/carry-out-a-kerberos-roasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/carry-out-a-kerberos-roasting?u=76281980&t=0)** - [Instructor] One of the account options in [[Active Directory]] does not require Kerberos pre-authentication. If this is set, we can use the impacket exploit get NP users to extract the authentication details. We can run this even without domain access. We've got impacket installed already, So let's run this against our active directory server and see if anyone has this attribute set. CD/user/share/doc /python3-impacket /examples and we'll run python3 GetNPUsers.py and our domain is cybex DC-IP is 192.168.1.199. Users file I've set up in my home directory in a file called "unames" and we'll produce that file in [[Hashcat]] format. Minus format hashcat. And we very quickly get instovo seven's password hash return. I've already stored that in a file called "nhash." So let's run that through [[John the Ripper]]. Back to my home directory
>
> **[1:34](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/carry-out-a-kerberos-roasting?u=76281980&t=94)** and [[John the Ripper|John]] nhash minus, minus [[Microsoft Word|word]] list equals /user/share /wordlists/rockyou.txt Now we very quickly get instovo seven's password of password01.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2), [[Hashcat]] (2), [[John the Ripper]] (1), [[John the Ripper|John]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** python3 (2), cd (1)
> **File Paths:** getnpusers.py (1), wordlists/rockyou.txt (1)
> **Versions:** 192.168.1 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Run a no-preauthentication attack](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/run-a-no-preauthentication-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/run-a-no-preauthentication-attack?u=76281980&t=0)** - A service principal name is a unique identifier of a service instance, which is used by Kerberos. It's used as an alias for an [[Active Directory]] object which can be a service account, a user account or a computer object. It lets other active directory resources know which services are running under which accounts and creates associations between them in active directory. SPNs provide a shortcut for the service to authenticate an account. If service accounts have been created with user SPNs, these can be potentially attacked using the Impacket Get User SPNs Kerberoasting tool. Let's set up a service account called sendai. We'll select tools, active directory users and computers,
>
> **[0:51](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/run-a-no-preauthentication-attack?u=76281980&t=51)** users, new user. We'll set up sendai, logon name sendai. And we'll set the password. And we'll set it to never expire. Okay. Creating a user SPN is done using the set SPN command line tool. Setspn -S and the service we're going to associate it with is HTTP/sendai.[service.com](https://service.com)
>
> **[1:40](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/run-a-no-preauthentication-attack?u=76281980&t=100)** and the account inactive directory is sendai. Okay, we've registered the correct AD object for the HTTP service we've specified. This updates the object by setting the user SPN for the sendai service account. Let's check the sendai account in active directory. If we select properties, attributes editor, and go down to service principal name, we can see the HTTP service we specified. We can now run an authenticated Kerberos roasting attack from our Kali workstation using the Get User SPNs Impacket tool. We'll use the [[John the Ripper|John]] Doe standard domain account. So if we'll go to usr/share/doc/python3-ipacket/examples.
>
> **[2:47](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/run-a-no-preauthentication-attack?u=76281980&t=167)** And we can run the attack by saying python3 GetUserSPNs.py [cybex.com/jdoe76:JDPass2021](https://cybex.com/jdoe76:JDPass2021)
>
> **[3:08](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/run-a-no-preauthentication-attack?u=76281980&t=188)** which is its password, -dc-ip 192.168.1.199
>
> **[3:18](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/run-a-no-preauthentication-attack?u=76281980&t=198)** and we'll do a -request. And here we have our Kerberos ticket with password hash for the sendai account. We can run this again and save the hash into our home folder and get John to crack it. So we do that and save it into our home folder, /sphash,
>
> **[3:46](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/run-a-no-preauthentication-attack?u=76281980&t=226)** john sphash --wordlist=/usr/share/wordlists/rockyou.txt.
>
> **[4:08](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/run-a-no-preauthentication-attack?u=76281980&t=248)** And we very quickly get the password, password02.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (5), [[John the Ripper|John]] (3)
> **Env Vars:** spn (3), http (3)
> **File Paths:** getuserspns.py (1), usr/share/wordlists/rockyou.txt (1)
> **CLI Commands:** python3 (2)
> **URLs:** [service.com](https://service.com) (1), [cybex.com](https://cybex.com) (1)
> **Prerequisites:** set up (2)
> **Versions:** 192.168.1 (1)
> **Tools:** command line (1)

#### [Forge a golden ticket](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/forge-a-golden-ticket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/forge-a-golden-ticket?u=76281980&t=0)** - [Lecturer] Even if we've only achieved Local Administrator we might be able to secure longer term access to [[Active Directory]]. Golden Tickets are the key to the Active Directory kingdom as they enable us to gain unlimited access to any machine in the domain for as long as the ticket is valid. However, this is a post exploitation attack, as we need to be Local Administrator and Active Directory in order to gain the information we need to create the Golden Ticket. Furthermore, the attack only works when running against a server which has antivirus turned off. The file that's created to enable a remote execution, will be detected by [[Windows]] [[Microsoft Defender|Defender]] antivirus and quarantined, and the exploit will hang at the point it tries to start the service. I've turned off antivirus for this demonstration. We can create a Golden Ticket for an existing user and this will avoid risk of an administrator detecting a newly created user account. There are two pieces of information we need to forge a Golden Ticket. The Cerberus ticket granting ticket, NT Hash, Which is held on the Active Directory domain controller, and the domain SID. Let's see how we use Impacket to get these. To get the NT Hash of the Cerberus ticket granting ticket, we can run the Impacket secrets dump script. We do that with sudo python3 secretsdump.py and we'll use [cybex.com/aadama31](https://cybex.com/aadama31)
>
> **[1:41](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/forge-a-golden-ticket?u=76281980&t=101)** and BlueMarble22 is an administrator on the Active Directory. @192.168.1.99 We need to copy the NT Hash for the KRB TGT entry. Which is the string starting 218E. Also, let's take a note of the computer name, which is WIN-5CSFE0MBBIU we'll use that later on. Now let's extract the domain SID by using the lookup SID tool. sudo python3 lookupsid.py [cyberx.com/aadama31:BlueMarble22](https://cyberx.com/aadama31:BlueMarble22)
>
> **[2:42](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/forge-a-golden-ticket?u=76281980&t=162)** @192.168.1.99
>
> **[2:50](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/forge-a-golden-ticket?u=76281980&t=170)** Okay, we can see the domain SID, which starts S-1-5. We have what we need. So let's forge our path to long term control. We can do this using Impacket's ticketer tool to forge a Golden Ticket for akatt42. sudo python3 ticketer.py -nthash
>
> **[3:12](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/forge-a-golden-ticket?u=76281980&t=192)** - domain-sid and the domain and the username that we're going to create a ticket for. Okay, we've now got our Golden Ticket which has been stored in the file akatt42.ccache. Whenever we want to access the system, we can now use this ticket with Impacket's psexec tool. Let's do that. First of all, we need to set the local environment variable for Impacket. And we export KRB5CCNAME to the name of our ticket cache. We can now run psexec.py to get access using the computer name we identified earlier. In this case, we're accessing the domain controller but we can access any computer on the domain using this ticket. sudo python3 psexec.py [cybex.com/akatt42@WIN-5CSFE0MBBIU](https://cybex.com/akatt42@WIN-5CSFE0MBBIU)
>
> **[4:28](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/forge-a-golden-ticket?u=76281980&t=268)** - target -ip 192.168.1.199
>
> **[4:37](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/forge-a-golden-ticket?u=76281980&t=277)** - dc-ip 192.168.1.199 and we'll give it to -no-pass -k for Cerberus, no password access. Okay, we have shell access. And we have full administrator access using the Golden Ticket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (5), [[Windows]] (1), [[Microsoft Defender|Defender]] (1)
> **Env Vars:** sid (4), win (2), krb (1), tgt (1), krb5ccname (1)
> **CLI Commands:** sudo (4), python3 (4)
> **File Paths:** psexec.py (2), secretsdump.py (1), lookupsid.py (1), ticketer.py (1)
> **Versions:** 192.168.1 (4)
> **Speakers:** - [lecturer] (1), - domain (1), - target (1), - dc (1)
> **URLs:** [cybex.com](https://cybex.com) (2), [cyberx.com](https://cyberx.com) (1)
> **Definitions:** is a  (1), is an  (1)

#### [Running a shadow attack](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/running-a-shadow-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/running-a-shadow-attack?u=76281980&t=0)** - [[Microsoft]] uses public key [[Cryptography]] as an underlying mechanism for access through the Kerberos protocol and provides an [[Active Directory]] component called "AD Certificate Services" to manage the public key certificates. We want to avoid attackers escalating or gaining long-term access to active directory once they've been able to compromise a domain user account. In addition to attacks on the accounts themselves, we want to defeat any attacks on this certificate infrastructure. There's a number of potential ways of exploiting Active Directory Certificate Services which have been documented by Will Schroeder and Lee Christensen in their paper entitled "Certified Pre-Owned". This provides numerous ways to attack specific configurations of Active Directory Certificate Services through theft or technical attack to achieve lateral movement, privilege escalation, and persistence. Testing AD Certificate Services is of course in its own right but let's just take a quick look at some of these issues. I've installed a domain controller and a certificate server that we can use for testing. So, let's see how an attacker might compromise AD Certificate Services to gain access to targets in our infrastructure. One of the ways this can happen is if one of our user accounts which has delegated control over other active directory user accounts is compromised. We're in the domain controller's active directory users and computers console
>
> **[1:32](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/running-a-shadow-attack?u=76281980&t=92)** and we'll be looking at some advanced techniques. So, let's select "View" and click on "Advanced Features". (mouse clicks) If we right click on the user's folder, we can see there's an option to delegate control over user accounts. This is often used to distribute the work of managing accounts in active directory. Now let's take a look at Adam Adamant's domain account. Let's select "Properties" and click on the "Security" tab. And we can see there's an entry in the top panel for Sam Spade. To see the permissions that he has on Adam's account, we can select "Advanced".
>
> **[2:32](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/running-a-shadow-attack?u=76281980&t=152)** (mouse clicks) And we find that he has a permission called "Descendant msDS-Key Credentials Link", which is one of the permissions associated with key management. While this might be a legitimate permission for Sam to have, the misuse of msDS-Key Credentials Link is one of the attacks identified in the "Certified Pre-Owned" paper. It can be used to achieve lateral movement and potentially privilege escalation via the Active Directory Certificate Service for an attacker who's been able to gain access to Sam Spade's credentials. To run this demonstration, we'll use the Certipy tool, which is available from the website shown here. To use Certipy, we need to make sure it's installed. And we can do that with "sudo pip3 install certipy-ad".
>
> **[3:35](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/running-a-shadow-attack?u=76281980&t=215)** (keyboard clicks) Okay, we've got this installed already so let's run the shadow attack against the domain controller on 192.168.1.5 using Sam Spade's credentials. (keyboard clicks)
>
> **[4:04](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/running-a-shadow-attack?u=76281980&t=244)** The attack runs and we can see that a key credential has been successfully added to Adam Adamant's account and this has been used to authenticate and obtain a Kerberos ticket granting ticket. From there, we were able to use the ticket to obtain the password hash for Adam Adamant's account. We can now crack the hash to obtain a password or use a pass the hash technique to run commands under Adam's account name. We'll pass the hash that we've been given using "crackmapexec winrm"
>
> **[4:42](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/running-a-shadow-attack?u=76281980&t=282)** using the account "adamant" and the hash. And we'll run the commands "hostname" and "whoami".
>
> **[4:59](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/running-a-shadow-attack?u=76281980&t=299)** And we're able to run the commands as Adam on the domain controller DC01.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (8), [[Microsoft]] (1), [[Cryptography]] (1)
> **CLI Commands:** find (1), make (1), sudo (1), pip3 (1)
> **UI Navigation:** click on (3)
> **Code Identifiers:** msds (2)
> **Env Vars:** dc01 (1)
> **Versions:** 192.168.1 (1)
> **Prerequisites:** install (1)
> **Speakers:** - microsoft (1)

#### [Using rubeus to take over the domain](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=0)** - [Instructor] In 2022, CVE-2022-26923 was issued which described the means of compromising AD certificate services. In his blog posting, Lsec describes how this vulnerability can be exploited. Let's run this on our domain workstation and check it out. This is a privilege escalation, so we assume that we've gained access to a domain workstation. The tools we're going to use will be detected by [[Microsoft]]'s [[Microsoft Defender|Defender]]. So a second assumption is that we've been able to switch off or otherwise circumvent the anti-malware service. We are logged in as the unprivileged user, Sam Spade, and the first thing we need to do is identify a vulnerable certificate template. We can do this using the Certify tool, which we've already got loaded in our temp folder.
>
> **[0:55](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=55)** Certify find /vulnerable.
>
> **[1:06](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=66)** This shows us that the power user certificate is vulnerable to attack as it allows enrollment and authentication, and we can provide an alternative subject name. Let's get Sam Spade to request a certificate, but to do so with the domain administrator as the alternative name. Certify request /ca:CA01.[cybex.com](https://cybex.com)\cybex-CA01.
>
> **[1:47](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=107)** And the template we want is PowerUser and the alt name is Administrator.
>
> **[2:14](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=134)** Okay, this runs and retrieves the certificate which we can copy and paste into a file. Let's copy the lines from BEGIN RSA PRIVATE KEY
>
> **[2:32](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=152)** to END CERTIFICATE.
>
> **[2:41](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=161)** And we're given instructions on how to use OpenSSL to convert this from a PEM file into a PFX file.
>
> **[2:55](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=175)** And we'll save this as admin.pem.
>
> **[3:21](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=201)** I've copied admin.pem across to my Cali workstation so let's run the open SSL command that Certify provided.
>
> **[3:33](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=213)** We've requested a PFX certificate into which we export our private key or in fact the private key of the administrator in this case, we're not putting a password on the file so we can just skip these prompts. Okay, let's take this PFX file back to our [[Windows]] workstation. And here we have the PFX format certificates on our Windows workstation. Now that we have a certificate, we can ask for a ticket which will allow us to take action as the administrator. For this, we'll use a tool called Rubeus. Again, we have this already loaded in our tools folder. Okay, so we'll run Rubeus Ask for a ticket granting tickets and the user is administrator. And the certificate that we're going to provide to authorize this is Admin.pfx. And keep a copy of our ticket that we get because we can use that for the life of the ticket. And the outfile will be admin.tkt.
>
> **[4:55](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=295)** And we're going to ask Rubeus to run a past the ticket exploit so that we escalate our privileges in our session that we're running.
>
> **[5:14](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=314)** Okay, so this command does two things. First, it gets the ticket we requested which we can use to take action but it also runs the past the ticket attack and it's escalated our access to domain admin. One of the actions we can take with Rubeus is to change the domain admin password on our domain controller. And we can do this with a Command Rubeus change password/new
>
> **[5:43](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=343)** and we'll call, we'll make our password. BaronDielm4. BaronDielm4. Date the domain controller is DC01.[cybex.com](https://cybex.com)
>
> **[6:02](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=362)** and the target user is [cybex.com/administrator](https://cybex.com/administrator).
>
> **[6:17](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=377)** And our ticket that gives us the power to do this is Admin.tkt.
>
> **[6:37](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=397)** BaronDielm4. Okay, we've successfully changed the domain administrator's password. We can now log in with this password.
>
> **[6:53](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=413)** As our administrator with BaronDielm4
>
> **[7:05](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-rubeus-to-take-over-the-domain?u=76281980&t=425)** we now have full control of our [[Active Directory]] domain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Microsoft]] (1), [[Microsoft Defender|Defender]] (1), [[Active Directory]] (1)
> **Env Vars:** pfx (4), ca01 (2), cve (1), begin (1), rsa (1)
> **URLs:** [cybex.com](https://cybex.com) (3)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Relaying attacks to get a certificate](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/relaying-attacks-to-get-a-certificate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/relaying-attacks-to-get-a-certificate?u=76281980&t=0)** - [Instructor] Another form of attack identified in the SpecterOps paper is achieved through a technique known as NTLM Relay or man in the middle. We do this by tricking one of the internal RPC endpoints in the domain controller to request a certificate. There are many different services that we can trick to do this, but let's look at one called DFSCoerce as shown in the GitLab site here. To start this attack, we need to set up a man in the middle relay server. We can do this using the Impacket tools. This Impacket script sets up a set of listeners which will relay what they received to the ASP script on our certificate server. We're expecting a request for the domain controller template. I've already cloned this repository, so we can now run the DFSCoerce attack pointing firstly to our listener and then to the domain controller, cd DFSCoerce and python3 dfscoerce.py.
>
> **[1:18](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/relaying-attacks-to-get-a-certificate?u=76281980&t=78)** And we're pointing to our listener on 192.168.1.249
>
> **[1:27](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/relaying-attacks-to-get-a-certificate?u=76281980&t=87)** and our domain controller on 192.168.1.5. And we put the password in for Sam Spade, and we get an error, bad network path. However, checking back to our man in the middle listener, we can see that we got a connection on SMB and the domain controller has successfully authenticated against the certificate server. The certificate server generated and we received the domain controller's machine certificate, which has been dumped out in base64 form. We can copy this.
>
> **[2:30](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/relaying-attacks-to-get-a-certificate?u=76281980&t=150)** And let's put it into a file. Nano cert64.
>
> **[2:43](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/relaying-attacks-to-get-a-certificate?u=76281980&t=163)** We can now unbase64 this and recover the PFX certificate. Cat cert64 to base64 -d. And we'll store that in dco1.pfx. We can now use Certipy to extract the private key hash from this certificate. Certipy, auth, and our PFX file, dco1.pfx. With our domain controller on 192.168.1.5. And we recover the hash for our domain controller.

> [!info]- Semantic Content
>
> **Env Vars:** pfx (2), ntlm (1), rpc (1), asp (1), smb (1)
> **CLI Commands:** cd (1), python3 (1), cat (1)
> **Versions:** 192.168.1 (3)
> **File Paths:** dfscoerce.py (1)
> **Tools:** gitlab (1)
> **Exercise Files:** template (1)
> **Definitions:** known as (1)
> **Prerequisites:** set up (1)

#### [Using smartcards to gain privileged access](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980&t=0)** - [Instructor] While using user ID and password access via the main [[Windows]] log on screen is the normal way of accessing a workstation, there are other ways we can use. On legacy systems, we might have used a physical Smart Card reader and use Smart Card access, but with modern systems we can achieve the same thing and gain the benefit of remote access by using a Virtual Smart Card. System administrators can create a Virtual Smart Card to use on Windows workstations using the TPM Virtual Smart Card manager tool. Let's see how that works. I'm in an administrative session on my Windows 11 domain workstation and I'll create a Smart Card called Sam VSC. TPM, VSC, Manager, (keys clicking) and we'll create the Smart Card and we'll give it a name, Sam VSC and we'll get the manager to just issue the default PIN, which is 1, 2, 3, 4, 5, 6, 7, 8. (keys clicking) And we'll have a random key to protect the data. So let's generate it. Okay, we now have a Smart Card available and installed on the workstation with the default PIN of 1, 2, 3, 4, 5, 6, 7, 8. PoshADCS is a tool to create
>
> **[1:34](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980&t=94)** a Smart Card with administrative access. For this exploit to work, we need to have a Virtual Smart Card and also have write access to a certificate template, but we don't need to be an administrator. We'll use the Power User template, which has write enabled for domain users. We'll be using the PoshADCS [[Powershell]] script and also the PowerView script, which are both in your exercise folder. The PowerView script is a set of cmdlets, which allow us just to check our access control levels. Know that we've turned off virus protection so that these tools aren't detected. In real life, we'd modify these scripts so as not to trigger a virus alert. We are now in the workstation as Sam Spade, a domain user. We firstly need to execute the two scripts, which we can do in PowerShell. Cat minus raw, (keys clicking) PowerView dot ps1, (keys clicking) and execute that. Cat minus raw, ADCS, or PoshADCS, PowerShell script, and we'll execute that. Let's check what access we have to the Power User certificate by checking its access control list using our PowerView,
>
> **[3:11](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980&t=191)** cmdlet get ADCS template, ACL. (keys clicking)
>
> **[3:25](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980&t=205)** And we'll give it the name PowerUser and we'll get tabular output, including ACE Qualified Identity
>
> **[3:51](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980&t=231)** and [[Active Directory]] Rights. Okay, that's useful, cmdlet shows us that the domain users indeed have write access, so we're all set to go. As a domain user, Sam Spade, we can now request a Smart Card certificate for a domain admin. We'll use an account called offsec, which belongs to a user called Penelope D. Fender. Get Smart Card certificate (keys clicking)
>
> **[4:32](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980&t=272)** from our ADCS script minus template Power User,
>
> **[4:40](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980&t=280)** which we can write into. And the identity we want is called offsec.
>
> **[4:52](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980&t=292)** We need to put a PIN in to use our Virtual Smart Card and we know that's 1, 2, 3, 4, 5, 6, 7, 8. (click) Okay, we've had a certificate provisioned. At this point, let's check our Virtual Smart Card and what certificates it contains using a tool called Certutil. Certutil minus SC info. And we need to put in the PIN. (keys clicking) And again.
>
> **[5:49](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/using-smartcards-to-gain-privileged-access?u=76281980&t=349)** Okay, we can see we have one Smart Card reader and it's available for use. We can see the first certificate, which has been issued on the Power User template. Let's now log out and log back into our workstation. We now have sign-in options showing, and if we click that we can click on the security device, which is our Virtual Smart Card, and enter the PIN 1, 2, 3, 4, 5, 6, 7, 8. And we can see that offsec@[cybex.com](https://cybex.com) is shown on the screen under our Sam Spade name. And here we're being logged in as Penelope D. Fender, our domain admin account. So we open a command shell, and we find we're logged in as offsec. Indeed, this is our domain administrator. Because we could write to a certificate template, we've been able to escalate our privileges to take over the domain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Powershell]] (3), [[Active Directory]] (1)
> **Env Vars:** pin (5), vsc (3), adcs (3), tpm (2), acl (1)
> **Non-Speech:** (keys clicking) (7)
> **Exercise Files:** template (6)
> **CLI Commands:** cat (2), find (1)
> **Tools:** powershell (3)
> **Definitions:** is a  (2), is called (1)
> **URLs:** [cybex.com](https://cybex.com) (1)

#### [Set the BloodHound loose](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-the-bloodhound-loose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-the-bloodhound-loose?u=76281980&t=0)** - [Instructor] Once we've got a member account, which we can use to work with [[Active Directory]], we'll need to start working towards escalating our access to domain administrator. One of the useful tools for doing this is BloodHound. BloodHound analyzes the Active Directory contents and works out the paths that are available to escalate a user account, based on the privileges of those user accounts. Let's see what it makes of our Active Directory. BloodHound works offline in our Kali system. So before we start working with BloodHound, we'll need to extract data from our Active Directory server. We've already loaded the BloodHound [[Python (Programming Language)|Python]] collector, so let's run that. To use the BloodHound Python system, we'll need to have a domain user account that we've obtained in some way. We'll be using the account for [[John the Ripper|John]] Doe with the username John Doe, jdoe76 and a password of JDPass2021. To collect the data, all we need to do is .local/bin/bloodhound-python,
>
> **[1:05](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-the-bloodhound-loose?u=76281980&t=65)** give it the username jdoe76 and the password JDPass2021 for our domain user and the name server 192.168.1.199. The domain, [cybex.com](https://cybex.com). And we're going to collect all. The collector very quickly detects the domain and collects the data from it. It creates a set of four [[JSON]] files. Let's start BloodHound now and go and look at the data. We have to start the [[Neo4j]] server first. So let's open a new terminal for that. And we'll enter sudo neo4j console.
>
> **[2:02](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-the-bloodhound-loose?u=76281980&t=122)** We need to change our initial Neo4j credentials and we that by browsing to 127.0.0.1 7474. And we'll enter our initial Neo4j credentials
>
> **[2:32](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-the-bloodhound-loose?u=76281980&t=152)** and connect. And we'll put our new password in, and we'll say bloodhound and repeat that.
>
> **[2:52](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-the-bloodhound-loose?u=76281980&t=172)** Okay. Now we can run BloodHound. And log in using the credentials neo4j, bloodHound. neo4j, bloodhound. The first thing we'll do is to select Upload Data from the icons on the right. And select our four JSON files. Okay. Now these are uploaded. We can open up the panel on the left and we can see the database has been populated. We have three tabs, Database, Node Info, and Analysis. And above that, a set of three icons. The left hand icon is for pathfinding. Let's use that and look for a path from the start node NSTOVE07 to DOMAIN ADMINS@CYBEX. And we find there's no data returned from that query. We can look at a path from AKATT42
>
> **[4:34](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-the-bloodhound-loose?u=76281980&t=274)** to DOMAIN ADMINS and we find there is a path with AKATT42 being a member of DOMAIN ADMINS. We can do this for each user account, but that takes time. BloodHound can do a lot of the work for us. Let's select Analysis. We can now select one of the built-in analytics. An immediate analysis of interest is to list all Domain Admins. We have an account called ADMINSTRATOR, the normal [[Windows]] admin account. However, we can also see that AADAMA31 and AKATT42 are also domain administrators, so their accounts will be wanting to exploit if we can. Let's run the analytic List All Kerberoastable accounts.
>
> **[5:39](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-the-bloodhound-loose?u=76281980&t=339)** Here we find the Kerberoast Ticket account, but also another service account called SENDAI. This is a good pointer to another possible step towards achieving escalated privileges. Another useful analytic to run is Find AS-REP Roastable Users.
>
> **[6:02](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/set-the-bloodhound-loose?u=76281980&t=362)** Here we see NSTOVE07 doesn't require pre-authentication, so this account can be exploited as we work through our escalation to Domain Admin. Now we've seen how we can identify possible paths forward. We're will placed to start looking at privilege escalations. BloodHound is a powerful tool and it works well in large Active Directory scenarios. We've only scratched the surface here, but you should spend time getting familiar with this tool as you progress as an Active Directory pen tester.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (6), [[Neo4j]] (6), [[Python (Programming Language)|Python]] (3), [[John the Ripper|John]] (2), [[JSON]] (2)
> **Env Vars:** domain (3), admins (3), akatt42 (3), json (2), nstove07 (2)
> **CLI Commands:** find (4), python (3), node (2), sudo (1)
> **Definitions:** is a  (3)
> **Versions:** 192.168.1 (1), 127.0.0 (1)
> **Code Identifiers:** bloodhound (1)
> **URLs:** [cybex.com](https://cybex.com) (1)
> **Tools:** terminal (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-pen-testing-techniques-for-active-directory/next-steps?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this [[LinkedIn]] Learning course. I hope you enjoyed learning about [[Penetration Testing]] [[Active Directory]]. In this course, you've gained a good understanding of the basics of Active Directory and you know how to test for weaknesses in an Active Directory Domain Controller. That's a great foundation for helping an enterprise protect one of their technology crown jewels. There's always something new to learn about testing systems, And this course is just one of a number of LinkedIn Learning courses that will help you develop your skills. Check out the library for more courses on penetration testing and [[Cybersecurity]] in general. I'd also like to invite you to go to my author page, where you can find my courses on cloud, cybersecurity, [[Ethical Hacking]], and programming. Thanks again for joining me on this course And I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (3), [[LinkedIn]] (2), [[Penetration Testing]] (2), [[Cybersecurity]] (2), [[Ethical Hacking]] (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [[Malcolm Shore]]

## Skills Covered

- Penetration Testing
- Active Directory

## Path Context

### In [[Become a Penetration Tester]]
← [[Penetration Testing Web Apps with Kali and Burp Suite]] | **6 of 8** | [[Burp Suite Essential Training]] →

## Appears In

- [[Become a Penetration Tester]]

## Related Courses

_Courses sharing skills:_

- [[Windows Server 2022- Install and Configure Active Directory]] — Active Directory
- [[Windows Server 2019- Install and Configure Active Directory]] — Active Directory
- [[Penetration Testing Essential Training]] — Penetration Testing
- [[Stealth Penetration Testing with Advanced Enumeration]] — Penetration Testing
- [[Burp Suite Essential Training]] — Penetration Testing

---

[↑ Back to top](#)