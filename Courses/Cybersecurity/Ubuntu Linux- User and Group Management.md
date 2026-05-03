---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ubuntu-linux-user-and-group-management
url: "https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management"
duration_minutes: 59
duration: 59m
level: Intermediate
updated: 8/30/2017
learners: 7015
skills:
  - Linux System Administration
  - Ubuntu
  - User Management
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHWtw6_GGyO_Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669524687?e=2147483647&amp;v=beta&amp;t=3hDsELRr-8QbZ0aMN2K9AEyJ7vm_7n6VXu6_aiEBc0I"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Ubuntu Linux Professional Certificate by Canonical]]'
prev_courses:
  - '[[Ubuntu Linux- Storage Management]]'
path_nav: '[{"path":"Ubuntu Linux Professional Certificate by Canonical","position":4,"total":4,"prev":"Ubuntu Linux- Storage Management","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/it-help-desk
  - topic/network-and-system-administration
  - topic/web-development
  - skill/linux-system-administration
  - skill/ubuntu
  - skill/user-management
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ubuntu%20Linux-%20User%20and%20Group%20Management.md)

![Ubuntu Linux: User and Group Management](https://media.licdn.com/dms/image/v2/C4E0DAQHWtw6_GGyO_Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568669524687?e=2147483647&amp;v=beta&amp;t=3hDsELRr-8QbZ0aMN2K9AEyJ7vm_7n6VXu6_aiEBc0I)

# Ubuntu Linux: User and Group Management

> It's important for aspiring system administrators to have a handle on how to work with users accounts and groups to manage access to information. In this course, learn essential user and group management techniques and concepts involved in Linux administration, using Ubuntu. Instructor Scott Simpson explains how to create and modify user accounts and groups, configure and deploy pluggable authenti

> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management) | 59m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome](#welcome)
  - [Users and groups](#users-and-groups)
  - [Environment setup](#environment-setup)
- [**1. Local Users and Groups**](#1-local-users-and-groups) (7 videos)
  - [Create user accounts](#create-user-accounts)
  - [Modify and delete user accounts](#modify-and-delete-user-accounts)
  - [Create and modify groups](#create-and-modify-groups)
  - [Home folder templating and global environment configuration](#home-folder-templating-and-global-environment-configuration)
  - [Configure and monitor user resources](#configure-and-monitor-user-resources)
  - [Configure permissions to allow group collaboration](#configure-permissions-to-allow-group-collaboration)
  - [Granting users and groups sudo access](#granting-users-and-groups-sudo-access)
- [**2. Authentication Tools**](#2-authentication-tools) (3 videos)
  - [Explore pluggable authentication modules (PAM)](#explore-pluggable-authentication-modules-pam)
  - [Use LDAP for user authentication](#use-ldap-for-user-authentication)
  - [Authenticate clients with Kerberos](#authenticate-clients-with-kerberos)
- [**Conclusion**](#conclusion) (2 videos)
  - [Tools for exploring user logins](#tools-for-exploring-user-logins)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/welcome?u=76281980&t=0)** - [Scott] On a [[Linux]] system we make use of users and groups to manage access, and to secure information for humans and software alike. I'm Scott Simpson, and in this course I'll show you how to create and modify users and groups, and how to manage access to the superuser privileges. Then I'll show you how to manage resources for individual users, and I'll show you how to configure a folder so that a group of users can collaborate on files within it. After that, I'll introduce you to PAM, a modular authentication system that many Linux programs use. I'll give you an overview of how to connect a client machine to an LDAP server, and to a Kerberos key distribution center to allow central management of user information. As an aspiring system administrator having a good handle on [[User Management]] is an important skill to have. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[User Management]] (1)
> **Env Vars:** pam (1), ldap (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [scott] (1)

#### [Users and groups](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/users-and-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/users-and-groups?u=76281980&t=0)** - [Instructor] On a [[Linux]] system we can create users and groups in order to more precisely control access to files and resources. A user corresponds to a human that will use the system or a servicer application that needs its own entity to run as. A group is a collection of users defined for a specific purpose. We can specify whether these users and groups can login to the system or how much storage they can consume or whether they are able to use the super user privileges to make changes to the system. We can set where their data is stored, what shell they use when they login and whether they need to change their password. Users and groups are at the heart of security in a multi user system. Even on a cleanly installed system, you'll notice when you start looking around that there are a handful of users and groups that already exist on your system. These are created by the system or by installed software in order to scope access to particular things rather than having everything running as the root user which would be insecure and messy. While our users and groups have human, readable names, the system keeps track of them as numbers with UID's, or User IDs, and GIDs, or Group IDs. When we create a user it becomes the only member of a group with the same name and we can add the user to other groups as well depending on what we want that user to have access to. The list of users is maintained in the etc/password file and the groups are maintained in the etc/group file. We don't edit these directly, but instead we have a selection of tools that let us create, modify and delete users and groups and find out information about them.
>
> **[1:32](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/users-and-groups?u=76281980&t=92)** But let's take a look at the format of these files so we know what they represent and then we'll take a look at making changes to users and groups. In the etc/password file here, which is readable by everyone in the system but only writeable by root, there are seven fields for each user and they're separated by colons. For my user here, it looks like this. The first field is the username, what I'd type to login and that can be up to 32 characters long with no spaces. The second field, which shows up as an X, represents the fact that the user's password is stored in the shadow file. Shadow is only readable by root and members of the shadow group and only root can write to it. We'll take a look at the shadow file in a moment. The third field in the password file is the UID, or User ID. The numeric representation of the user. Typically, normal users start at number 1,000 and go up from there as you add more users. They used to start at 500. The root user has user ID zero and system accounts start from there. So, generally speaking, a user ID less than 1,000 is a system account or an account for some software that was installed. And 1,000 or over are users created by the administrator for people or for some other purpose. The fourth field is the numeric group ID, or GID, of the user's primary group. A user can be a member of more than one group but the primary group is listed here. And the others are listed in the group file that we'll see in just a moment. The fifth field here is a description or comment field. Usually this is where a human friendly name is stored like a full first and last name
>
> **[3:06](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/users-and-groups?u=76281980&t=186)** and it can also contain information like an [[Microsoft Office|office]] or phone number depending on how the standards of your system are set up. That's called GECOS and we'll get into that more later on. You may see some commas separating empty fields if you're not using them. For users added by the system or by software, this field will often have a little bit more descriptive text to help you know what the account it for. The sixth field shows the path to the user's home directory where their stuff is stored and where they'll start out when they log into the system at the command line. And the seventh field is the user's default shell. Usually it'll be set to bash but for some accounts that aren't permitted to login it'll be set to no login, which refuses to let the user enter commands. Or to false, which according to the manual does nothing unsuccessfully which, depending on how you look at it is either kind of inspirational or somewhat depressing. Both of these commands help to prevent users from getting to an interactive shell if they're not supposed to login. The shadow file that I mentioned earlier is the file where the encrypted passwords for users are stored. Let's take a look at some entries here. The entries in this file have nine fields though only two of them are really required. There's more detail about these fields in the manual page for shadow so I'll just go over the high points here. The first field, the login name, is the name of the user on a system for which the password corresponds. The second field is the encrypted password, which is hard to reverse engineer but not impossible. That's why it's important to ensure that this file doesn't get lax permissions set on it. If an account is locked
>
> **[4:37](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/users-and-groups?u=76281980&t=277)** the string will start with an exclamation mark. A star or asterisk in this field means that there's no password set and that user can't login directly. The third field is the date of the last password change expressed in days since January 1st, 1970. That's the beginning of time in the Unix world called, The Unix Epoch, and while we normally see epoch times in seconds since January 1st, 1970, in this case it's days. If this is set to zero it means that the user will be prompted to change their password on the next login. If it's empty, that means that the features that keep track of how old the password is are disabled. The fourth field is the minimum password age and the fifth is the maximum password age. Empty fields here mean there are no minimum or maximums. In my case here, the maximum is 99,999 days or almost 300 years, which effectively is no limit on the age of the password. If you plan to live longer than that be sure to mark your calendar so you don't forget to change your password. The sixth and seventh fields here are the password warning period and inactivity period, and again, if they're empty it means there isn't a limit set. I have seven here in my sixth field, the warning field, so seven days before my password expires I'll start to get a warning that it's expiring when I login. The eighth field here is the account expiration date in days since January 1st, 1970. If it's blank the account won't expire. If a value is set, the system won't let the user login after the date of expiration. And the final field here, number nine, is considered reserved for future use. The group file is where the system keeps track
>
> **[6:12](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/users-and-groups?u=76281980&t=372)** of membership in groups. Users can be a member of more than one group and groups are helpful when we're working with permissions or want to specify access to more than one user at a time. The group file has lines with four fields. The first field is the group name and then the group password in an encrypted fashion if there's one set. Group passwords aren't very widely used but the functionality does exist. The third field is the numeric group ID and the fourth field is a comma separated list of users that are members in the group. We can explore the group membership of a user with the groups command and if we want to see the user and group IDs as well, we can use the ID command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Microsoft Office|Office]] (1)
> **Definitions:** is a  (4), means that (3)
> **Env Vars:** uid (2), gid (1), gecos (1)
> **Warnings:** warning (3)
> **CLI Commands:** make (1), find (1)
> **Tools:** command line (1), bash (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** set up (1)

#### [Environment setup](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/environment-setup?u=76281980&t=0)** - [Instructor] In this course, I'll be using an [[Ubuntu]] virtual machine in VirtualBox. If you already have a VM or a [[Linux]] machine ready to go, you should be able to use it without any trouble. The changes that we'll make in this course do require superuser access and we'll be adding and modifying users and groups. As always, be sure you're not learning on a production system where a configuration change could break something or cause a security problem. If you don't have a Linux machine handy or you don't have a VM already installed and ready to go, take some time to get that set up before you continue. We have many courses that cover the process in detail, so I won't go through the process here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Ubuntu]] (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Local Users and Groups

[↑ Back to Table of Contents](#table-of-contents)

#### [Create user accounts](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/create-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/create-user-accounts?u=76281980&t=0)** - We can add a user to the system with the adduser command. Adduser is a front-end for another command, called useradd. And while you can use that directly if you'd like, in this video I'll focus on the adduser command. Adduser lets us specify some parameters for adding a user account. And it also reads a configuration file, /etc/add.user.conf for these default settings like the shell and where home folders are located. We can override these, but it's convenient to have them pre-set if we don't want to have to write them out every time we create a user. This file sets out the path that home folders will be created in. And if you have a lot of users, you can choose to create a sub folder with the first letter of the user name to help keep things a little bit more organized. And you can specify what's called the skeleton for the home folder. If you want to populate some things into the home folders of new users automatically. That can be helpful for giving people a welcome document, or some links to shared resources, or something like that. There are other options in here about the directory mode and ranges for group and user IDs. But we'll leave those alone for now. Let's take look at the man page, and see what options are available for adduser. Here we can see there are two primary ways of using adduser to add a regular user or a system user. And some options about adding groups, and adding a user to a group, which we'll get into in the video about groups. Let's add a regular user to the system here.
>
> **[1:35](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/create-user-accounts?u=76281980&t=95)** I'll quit out of the man page, and then I'll use the adduser command. And then I'll set a user name. With just this, I'm creating a user, and then adduser is taking care of setting up the user themself with ID 1001, the user's group, also 1001, and the user's home folder. The path to this home folder, the /home portion, we saw earlier in the adduser.conf file. And now I'm being prompted for a password. I'll set that. And confirm it. The user can reset that later if they want to. And now I'm asked for the full name, which I'll add. And some other information. A room number, and some phone numbers. I'll leave these blank. These are the fields that show up with commas in the fifth field of the ETC password file; the description. This is called GECOS information; G-E-C-O-S, for General Electric Comprehensive Operating Supervisor. A system that used information in this format. And the format stuck around. I'll confirm that the information's correct. And now I have a user. They've got a home folder, and I can switch over to using that user with su, or s-u, and log in. CD will take me to this user's home directory. And there we go.
>
> **[3:09](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/create-user-accounts?u=76281980&t=189)** I'll exit back to my other user. That user is a normal user, intended for a human to use. So it has a UID of over 1,000. And it has a primary group. We can also create system users with UIDs less than 1,000, which have no group. And they're intended for more service account type things, like daemons and other automated processes. To create a system user, we'd use adduser --system. And let's call this one botuser. I see that the UID is below 1,000. In this case it's 122. In that range reserved for system users. It has a group of nogroup, and we're not prompted for a password. Lots of system accounts don't have passwords because they don't need to log in. The system can just start up processes as that user to keep things separate and secure. If I take a look at the information for this user, I can double check that it's user ID is a system user ID, and that it's group ID and its group membership are set to nogroup. The system users also have their shell set to false, preventing them from logging in.

> [!info]- Semantic Content
>
> **Env Vars:** uid (2), etc (1), gecos (1)
> **Definitions:** is a  (3), is called (1)
> **Documentation:** man page (2)
> **CLI Commands:** cd (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - we (1)

#### [Modify and delete user accounts](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/modify-and-delete-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/modify-and-delete-user-accounts?u=76281980&t=0)** - [Instructor] We can change some of the attributes of a user account after it's been created. We set the password already, but it's a good idea for the user to change it to something they know. And they can do that with the password command. I'll switch over to the user that I just created with switch user and the username. And I'll type in the password that I set. Now as the user, I can use the password command, passwd. I'll need to type in my current password and then I'm prompted to enter a new UNIX password. This is something that the administrator won't know. If the password's long enough, complex enough, and if you verify it correctly the password will be updated. I'll exit back to my other user here. As the administrator, I can change the user's password as well in case they forget also with the password command. I don't need to type in their current password. This is helpful if a user forgets their login password and needs it to be reset. The user or the administrator can change the account's shell too with the CHSH command. I'll switch back to my user here and use the CSHS command. Authenticate, and here I can set which shell I want to use. By default, here on this system, it's bash,
>
> **[1:37](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/modify-and-delete-user-accounts?u=76281980&t=97)** as specified in the ETC ad user comp file. But if your users prefer a different shell, they can change it. Or you can change it to bin false if you don't want the account to be able to log in. I'll just press enter for now. I'll exit out of this user back to my user. The administrator can also change the full name for a user and the information in the GECOS field with the CHFN command. I'll write sudo chfn Alex. If they change names, or change their phone number or a room this is how you would update the record here. I've changed the user's full name. We can't change the short username this way though. We'll use a different command for that called usermod. Usermod has a few options that you can use to make changes, and we'll take a look at a few here. We'll rename the user and move their home folder. First, let's rename the user. We've seen how to change the full name, but in order to be thorough, we should change the login name as well. To do that, I can use the dash l option. I'll write usermod dash lowercase l and the new username, in this case I'll set it to ajohnson and the old username, Alex. This changes the short name but keeps the same user ID number and group information. We can also change the home folder path to reflect the new username with the dash d and dash m options. I'll write usermod dash d and the path
>
> **[3:15](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/modify-and-delete-user-accounts?u=76281980&t=195)** to where the new home folder will be. In this case, ajohnson and then dash m and the username ajohnson. Dash d sets the home folder for an account and dash m moves an existing home folder for a user. So we need to use them together in this case. M doesn't work by itself. And now, if I take a look at the home folder I can see that Alex is gone but ajohnson has replaced him. Usermod has a few other options that you can use if need be. And we'll see usermod more when we work with groups as well. If a user leaves or their account is no longer needed, we can delete the user from the system. It's not a good idea to leave unused accounts sitting around so be sure to audit access and clean up your systems every now and then. The deluser command can either just delete a user or you can use some of its options to back up user data or delete user data.

> [!info]- Semantic Content
>
> **Env Vars:** unix (1), chsh (1), cshs (1), etc (1), gecos (1)
> **CLI Commands:** sudo (1), make (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### [Create and modify groups](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/create-and-modify-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/create-and-modify-groups?u=76281980&t=0)** - Groups help us organize users into collections, or units, that we can use to control permissions, quotas and other aspects of the system. Every regular user has a primary group, and users can also have supplementary groups. Normal users have a primary group that corresponds with their username, but we can grant access to other groups that already exist, like the administration group, or groups we create, like a group for the finance department so they can access a certain folder on the file share. To add a group to the system, we can use the addgroup command, and, just like with adding users, we can create either a regular group, or a system group. We can also add a user that exists to a group that already exists. We'll look at how to do both of these. First, I'll create a group called finance with addgroup finance. And I'll create another one called sales with addgroup sales. And then we need some users to put in those groups. I have one user already, and I'll create two more with adduser taylor
>
> **[1:18](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/create-and-modify-groups?u=76281980&t=78)** and adduser pat.
>
> **[1:31](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/create-and-modify-groups?u=76281980&t=91)** Each of these users have their primary group set to their own group. I can see that with the id command. I'll write id taylor, and id pat. Let's set their supplementary groups to some combination of the groups that we just created. To do that, I can use adduser, and the username, and the group name. I'll write adduser, taylor, sales. Or, I can use usermod dash a, dash G. Dash a to append, rather than replace groups, and dash capital G to give a list of the groups to add the user to. In this case, to the finance group, I'll add pat. We can keep an eye on what's changing with the id or groups commands. I'll write id taylor, and here I can see that taylor is in their primary group, and also in the sales group. And id pat. Here, pat is in their own group, and in the finance group. So now if I were to set the group ownership on a file with see each own or see each group, the user's group membership would come into play in determining whether they had access to the file. Groups are also helpful for quotas and ACLs. In order to more easily apply these settings to large numbers of users at once, if you set up a number of groups, you can modify the ETC adduser.con file to apply those groups to users that you create.
>
> **[3:06](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/create-and-modify-groups?u=76281980&t=186)** We can modify groups, just like users. The groupmod command lets us change the numeric group id, and the name of the group, if we need to do so. And, as with users, we can delete a group with the delgroup command. It doesn't really come with many options, so it's pretty straightforward to use. If you're not using a group anymore, delgroup, and the group name, will remove it from the system and remove membership from any users that were part of it.

> [!info]- Semantic Content
>
> **Analogies:** just like (2)
> **Env Vars:** etc (1)
> **Prerequisites:** set up (1)
> **Speakers:** - groups (1)

#### [Home folder templating and global environment configuration](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/home-folder-templating-and-global-environment-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/home-folder-templating-and-global-environment-configuration?u=76281980&t=0)** - [Instructor] If you're deploying many users and need to have a standard or templated setup for them. There are a few ways you can make that happen. You can define what's called a skeleton home folder, to include any files, links, or folders that you want users to have in their own space from the beginning. You can also configure the environment system wide in case you need to provide a certain tool or library in the path or if you want to modify the shell in some way. We've already seen how to predefine the shell itself. And which group new users are added to in the ETC and user comp file. So lets dig into the skeleton home folder and the system wide environment settings. The skeleton home folder, which the add user command copies into the home folder of any new user, is located at etc/skel. You can put pretty much anything in this folder but let's create a little text file to welcome our users. My skel folder is empty so lets add a documents folder. And inside that we'll create a text file.
>
> **[1:18](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/home-folder-templating-and-global-environment-configuration?u=76281980&t=78)** I'll add some text here. I'll save this and exit. Alright, when I create a new user, this will get copied into their home folder with appropriate permissions for them and they'll be able to see our message. Let's also explore setting up the environment a little bit for our users. There's a few files where we can do that. In the etc profile script. And in the etc/profile.d folder where there are scripts that are run by profile when an interactive shell starts up. In fact, in etc profile, we can see the definition for when the prompt changes when we're acting as root or a different user. You can make changes here if you want to. But it's generally recommended to make a file in the profile.d folder. And let the script execute it to keep your changes more organized and modular. So let's do that. I'll switch to the profile.d folder and let's look around. We can see there's a few shell files here. So I'll create a shell file. I'll call it myfile.sh. Let's alias the command l to ls-lh instead of just the regular ls. And I'll save this and I'll quit. Users can still set their own bash rc or profile settings as well. We've made two changes to this system so see how the skeleton folder and the global environment settings work. So let's create a brand new user. And log into it to see those changes take effect.
>
> **[2:53](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/home-folder-templating-and-global-environment-configuration?u=76281980&t=173)** I'll make a user named Mike. And go through the process.
>
> **[3:07](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/home-folder-templating-and-global-environment-configuration?u=76281980&t=187)** And I'll user control+alt+F3 to switch over to a different terminal. I'll log in with my new user. And let's use that alias to take a look around. I'll type l and there's the long listing that I'm looking for. I can see that my documents folder made it over here from the skeleton as well. Well let's take a look in there. And there's my welcome.txt file with the ownership changed to be correct. Let's take a look at the text file. What a polite reminder. That's a basic example but you can see how powerful this is to be able to pre-populate home folders and to set environment wide variables.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), ls (2)
> **File Paths:** myfile.sh (1), welcome.txt (1)
> **Tools:** bash (1), terminal (1)
> **Prerequisites:** setup (1), configure (1)
> **Env Vars:** etc (1)
> **UI Navigation:** switch to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Configure and monitor user resources](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-and-monitor-user-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-and-monitor-user-resources?u=76281980&t=0)** - [Instructor] A system has limited resources and the more users you have, the greater the chances that they'll be competing for those resources. But luckily, we can monitor and manage how many resources an individual user is consuming. First, let's take a look at seeing how to determine what resources are being used by individual people. I'll switch over to one of my users here, and I'll start up a CPU-intensive process using the yes command, which types the letter Y and Enter as quickly as it can, redirected to dev/null and I'll send it to the background. And then I'll go back to my other user here with exit. We can use the top command to see what's going on with the system. And up here at the top, consuming the majority of the CPU resources is the command that that user started. I'll press Q to quit top. I can use top with -u and a username to see only information about that user's processes, which is helpful to keep an eye on one user's activity without having to dig through all of the processes on the system. We can also check out the processes that a user has started with the ps command and the -u option to isolate an individual user. Let's get rid of that process by killing it by its process ID. While it's helpful to see what resources are being used,
>
> **[1:34](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-and-monitor-user-resources?u=76281980&t=94)** we can also be a little bit more proactive about resources and set limits on what users and groups can actually consume. The etc/security/limits.conf file, part of the PAM or pluggable authentication modules, serves as a place where you can limit the amount of memory, processor time, open files, process priority, and other resources by user or by group. The file itself and the man pages for limits.conf list all of the things that can be limited in the file. Let's take a look at the file man editing. The format that we need to add items in is a user or group name or a wild card, and then whether the limit is hard or soft. That is, whether the system will cut off activity or just warn about it. And then, the item we're limiting and the value of the limit. Let's scroll to the bottom, and we'll prevent the user Pat from creating files over 100 megabytes in size. So I'll write pat, and this is a hard limit, and I'll use the fsize directive for file size, and set a limit of 100,000 kilobytes. I'll save that and I'll exit, and now if I switch over to that user, and start to create some files, we can see the limit be enforced. These limits won't apply to users that are currently logged in. They'll be applied the next time the user logs in or starts an interactive shell. All right, fallocate -l 10M,
>
> **[3:11](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-and-monitor-user-resources?u=76281980&t=191)** and create a 10 megabyte file called 10mfile. So far so good. Now I'll use fallocate -l to create 100 megabyte file called 100mfile. And there, when I try to create 100 megabyte file, the system prevents me from doing so. I'll exit that user. You want to think through limits that you impose to make sure you're not making the system unusable for some reason or other.
>
> **[3:49](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-and-monitor-user-resources?u=76281980&t=229)** I'll remove this restriction from limits.conf for now.
>
> **[3:59](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-and-monitor-user-resources?u=76281980&t=239)** We can also limit the total amount of space that users and groups can consume on a given file system with quotas. The software for interacting with quotas is available in a package called quota, so you may need to install it if that's not already been set up. I'll switch to my root shell and install quota.
>
> **[4:27](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-and-monitor-user-resources?u=76281980&t=267)** Once that's installed, we can set up a quota on any connected file system by remounting it with support for either user or group quotas. We'd need to edit the fstab to include that and restart if we're setting quotas on the root file system. As a quick example here, I'll create a loop file system, which is a regular file that contains a file system to explore how quotas work. I'll make a file with fallocate -l and we'll make it 100 megabytes and we'll put it at the root of the drive called myfilesystem. And then I'll create a file system inside it with mkfs.ext4 and the path of the file system. Then I'll create a mount point for it. I'll write mkdir, mnt and we'll call this one myfs. And then, I'll mount it with the quota option usrquota, and the path to the device, and the mount point. And then, we can create the quota files on the file system that has quota support, with quotacheck -c and the path to the file system. Now we can use edquota to set up a particular limit for a user or group. Let's pick on Pat again and set their limit on this file system. We can add a path to the file system we want
>
> **[5:59](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-and-monitor-user-resources?u=76281980&t=359)** to enforce quotas on, in this case, my loop device, and then add the number of blocks or a size notation for how much the user is allowed to use. The hard limit is the one that really matters, that's the one that will cut a user off. Let's set that to 20 megabytes here. All right, I'll save that and I'll quit, and I'll make sure my user can write to that file system.
>
> **[6:29](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-and-monitor-user-resources?u=76281980&t=389)** Then, I'll run quotaon and the path of the file system to make sure that the quota is enabled. Now, I'll switch users. I'll go to that file system, and I'll create some files, and I'll switch to the file system. There's nothing here, so I'll create a few files with fallocate -l. And let's start out small, with 15 megabytes. So far so good. Let's try again with another 15 megabyte file, and there's the limit. This user can't consume any more space on this file system, but they could still write to other places they have access to. While they're logged in, they can use the quota command to see what their quota limitations are on each file system. I'll exit back to my root shell, and as an administrator, I can run the repquota -a command to see a summary or report of the quota status on my file systems. Quotas help to limit intentional or unintentional overruns on storage, making sure that your users are good citizens on the system. Just remember that file systems where you want to use quotas need to be mounted with the quota option. Otherwise, the limits won't be enforced.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), mkdir (1)
> **Prerequisites:** set up (3), install (2)
> **Env Vars:** cpu (2), pam (1)
> **UI Navigation:** switch to (2), go to (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Configure permissions to allow group collaboration](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-permissions-to-allow-group-collaboration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-permissions-to-allow-group-collaboration?u=76281980&t=0)** - [Instructor] If we have a folder where we want collaboration to happen, the permissions can get tricky. As users create documents, they become the owners. And depending on the permission setup, others may not have access to edit them. We can resolve this somewhat by setting very open permissions on all the files as they're created. But, there's a better way. We can configure a folder to give files created inside of it the same group designation as the parent folder, making sure that anyone editing files in the folder, as long as they have access to it, can work on the same files without having specifically setup the group permissions for every file. I'll create a folder here at the root of my drive called Shared with mkdir shared, and I'll set the group on it to finance with chgroup finance shared. I'll set the permissions for the group so group members can write to the folder with chmod group plus write and shared. Now we need to find a few users that are in our finance group. So let's take a look at etc group, and I can see here Pat is in the finance group. Let's add Mike to the finance group as well with user mod A capital G finance Mike and check out that group file again. Now, both Pat and Mike are in the finance group. I'll switch over to the Mike user
>
> **[1:35](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-permissions-to-allow-group-collaboration?u=76281980&t=95)** and move to my shared folder. Now if I create a file, I'll say touch file one and take a look at it, I can see that my user has the user ownership and the group ownership of this file. So other people, like people in the finance group, wouldn't be able to edit this file. I go back to my root user and I'll write chmod G+S and the path to the shared folder. It'll turn on said GID or said group ID. And now anything created in that folder will have the group of the folder rather than of the user that created it. If I were using opToPermissions, I could use a two to represent said GID and follow that with permissions that I wanted the folder to have. But the symbolic way let's me add said GID without affecting the other permissions. I'll switch back to the Mike user and again go back to the shared folder and I'll test this out like before. I'll write touch file two. And let's take a look. And in this case, this file has the group of finance. And because we set group write in this whole folder, anyone that's in the finance group would be able to read and write this file. Let's test that out. I'll switch to the Pat user. Looks like that this user can create a file with touch file three. That worked. And as the Pat user, let's try to
>
> **[3:09](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/configure-permissions-to-allow-group-collaboration?u=76281980&t=189)** edit Mike's file with nano file two. It looks like we can make changes. We can see that said GID is configured for this folder by taking a look at the listing for the folder, in this case LS dash LH and the root. And here in the group section for shared, I can see there's an S.

> [!info]- Semantic Content
>
> **CLI Commands:** chmod (2), mkdir (1), find (1), make (1), ls (1)
> **Env Vars:** gid (4)
> **Prerequisites:** setup (2), configure (1)
> **Cross-References:** go back to (2)
> **Code Identifiers:** optopermissions (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Granting users and groups sudo access](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/granting-users-and-groups-sudo-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/granting-users-and-groups-sudo-access?u=76281980&t=0)** - [Instructor] If we want some of our users to be able to do things or run commands by switching users or as the super user we can grant access to the sudo command on a user by user basis or by group. While adding individual users to the sudoers file lets you keep close track of each user allowed to harness the power of the super user, it can get tedious to manage a long list of individual users, especially across more than one system. In order to solve that, we can grant access by group and then make sure the users who need access are members of the group given access to use sudo. Here in Ubunto, we have a group called sudo that's granted access to use sudo and in other systems, you may see an admin group fulfilling this same role. I'm back in my root user and if we open up the etc/sudoers file with visudo, we can see group membership reflected here. The percent sign at the beginning of the string means that it's a group name rather than a user name. And the privileges here mean that this group can connect from all host names, that one is usually left, ALL, and that they can use sudo to emulate all users and all groups. That's these two ALLs here in the parenthesis. The field before the colon is a list of user names and after the colon is a list of groups. And then the last ALL here represents that the user or group can use sudo to run all commands. This could be a list of full paths to commands if you want to limit them to just a few. So when we add users to the system
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/granting-users-and-groups-sudo-access?u=76281980&t=93)** that we want to have sudo access, we don't need to deal with this file at all. We can just add them to the appropriate group and they'll have access. You can add them to the systems admin group or create your own group to manage separately.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (7), make (1)
> **Definitions:** is a  (2), means that (1)
> **Speakers:** - [instructor] (1)


### 2. Authentication Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore pluggable authentication modules (PAM)](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/explore-pluggable-authentication-modules-pam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/explore-pluggable-authentication-modules-pam?u=76281980&t=0)** - [Narrator] PAM, or the Pluggable Authentication Modules, are a system for providing an easy to use authentication system for various services. Rather than requiring tools to manage their own [[Authentication Systems]], PAM gives us a modular system with which to configure authentication for these tools. The system is built on a series of files for applications that support PAM authentication, and a series of .so files, or shared objects, that return a success or failure message after handling credentials from a user in some way or other. Some modules only check a condition, like whether the user is root. And others can look in different places for authentication information, such as the system's password and shadow files, or an LDAP directory, or a Cerberus Server. In the etc/pam.d folder, we see the files for tools that will use PAM, and the files that are referenced in common, to handle standard system authentication. Those are the ones that start with "common." These files are made up of lines that specify a condition and a module. And the system goes down each file, line by line, when it's called. So if a user were to use the chsh command to change their shell, PAM would use the chsh file here to determine how to proceed. Let's take a look at it. I'll write, "cat chsh." The first lines here are a comment about what this file does. And then there's some commentary about what the actual first line accomplishes. We are using the auth service for authentication.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/explore-pluggable-authentication-modules-pam?u=76281980&t=93)** There are also password, account, and session policy types. This line is calling the pam_shells.so module. Which, as we can see here, or from its PAM page, checks whether the user's current shell is listed in /etc/shells. If it is, it returns a success statement. If not, it returns a failure. This field here is for the control. And, this file is using the required control. So, whether this fails or succeeds, we keep evaluating rules, carrying along that status. And the failure will only show up at the end. This is to prevent attackers from knowing in which module a failure happened, so they can't as effectively figure out why they're being prevented access. There's another control, called requisite, that would end the evaluation of the rules immediately. And grant access if was returned a success, and end evaluation and deny access, if it received a failure. The next module that we come across here, is pam_rootok, which returns a success if the user is root, or UID 0. That one is sufficient, which means that if it's true, the propagation stops, and PAM says, yes, you can change your shell. If that returns a failure, it doesn't really matter and we keep going, in this case, to the common files, which are included at the bottom of the file. Let's take a look at common-auth. With cat common-auth. This is where the standard authentication stuff happens. There's a lot of comments, and first actual line here,
>
> **[3:08](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/explore-pluggable-authentication-modules-pam?u=76281980&t=188)** the auth to pam_unix.so, is where we first check the credentials against the system's password files, /etc/password, /etc/shadow, and /etc/group. This file and the other common files are managed by a tool called pam-auth-update. And, as we add more modules, we can use that tool to enable or disable them. The notation here, where we'd usually see a control like requisite, required, or sufficient, means that if we succeed with pam unix, to skip one line and carry on. If we fail, we just ignore this line and move onto the next line, which only returns a failure, with pam_deny, effectively blocking our access to use the chsh tool. Had we skipped this, we'd move onto the PAM permit module, which always returns a success, making our overall status a success. The other common files work like this. And, with our success in hand, in this case because we appear in the password file and typed our password correctly, we'll continue through them, being evaluated against the group and session criteria. PAM can be very complex, but once you understand how the pieces fit together, you can troubleshoot and write your profiles, if you need to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Authentication Systems]] (1)
> **Env Vars:** pam (9), ldap (1), uid (1)
> **Code Identifiers:** pam_shells (1), pam_rootok (1), pam_unix (1), pam_deny (1)
> **CLI Commands:** cat (2)
> **Definitions:** means that (2)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** configure (1)

#### [Use LDAP for user authentication](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/use-ldap-for-user-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/use-ldap-for-user-authentication?u=76281980&t=0)** - [Instructor] Rather than configuring the same users on many different machines, we keep a central list or a directory of users on a server and configure clients to use that list to allow logins. This is called LDAP, or lightweight directory access protocol. In order to work, LDAP needs two components, a server and a client. These can be on the same machine as I'll show you here, but in a production setup, you would have one server and then configure all of your clients to use it. During the setup of the client, we'll also need to reconfigure PAM, the pluggable authentication module system to allow LDAP to be an approved method of authenticating on the system. To set up the server, I'll first install two packages that we need. LDAP utils and slapd. LDAP utils has some tools that we'll use for interacting with LDAP. And the slapd package is the actual LDAP server. I'll write apt install ldap utils and slapd. While we go through the installation which is triggered automatically when I install and can be run again with d package reconfigure slapd, I'll first enter an administrator password for the admin user in my LDAP directory. I'll confirm that. And the installation will continue. To continue the installation I'll type d package dash reconfigure slapd. I'll continue through this process
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/use-ldap-for-user-authentication?u=76281980&t=96)** and I'll choose no for this prompt. I'll set the name of my domain to [example.com](https://example.com). In production, you'd want this to match up with your fully qualified domain name. And for the [[Representational State Transfer (REST)|rest]] of these I'll put in appropriate values. It's asking me for the administrator password again so I'll put that back in. And I'll choose MDB, I'll choose no, I'll choose yes, I'll chose no to not allow the LDAPv2 protocol. And that's configured. Managing the server side of this is a little beyond the scope of this course. Directory services are not a trivial thing and need to be set up very carefully for production use. So ideally you'll already have a server set up to bind clients to. But to make things easier on us to get started here, I'll install and configure a popular web tool for managing the server called [[PHP]] LDAP admin. We can interact with the server through the command line as well but it gets pretty tricky and for an example server this tool will be easier to work with. If you start managing the directory more frequently, you can look into the LDAP modify tool and see how to use it at the command line or how to feed it large properly formatted data files. I'll write apt install phpldapadmin. And that will go through and install w web server and PHP and the tool that we'll use to manage the directory. And then I'll open this up in the browser at my host address/phpLDAPadmin.
>
> **[3:12](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/use-ldap-for-user-authentication?u=76281980&t=192)** And I'll login with the password that I set for admin earlier. And here I can manage my directory. I'll add a group or an OU, an organizational unit called people and that will contain my users. I'll commit that. I'll choose people and then choose to create a child entry. That'll be a generic user account. I'll set the common name to Mary, the first name is Mary. And then I'll choose to put them in the people group. For the home directory I'll just use home slash users and for the last name I'll put in green. I'll set a password, and I'll confirm it. And it's important to note here that the user ID is 1,000. 1,000 is the same as the first user on my system, so I don't want this user to have the same ID. That would cause all sorts of security problems, but I can't edit it here. We'll have to change that later. I'll take note of the user ID, mgreen, and I could change this if I wanted to. And then I'll choose create object. I'll scroll down and choose commit. And now I can see that in my people group I have a user.
>
> **[4:46](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/use-ldap-for-user-authentication?u=76281980&t=286)** I'll choose the user and I'll scroll down and we need to change the UID number. I'll set this one to say 10,001 so it doesn't conflict with the UIDs that exist for my local users. This issue highlights something that you need to consider when you're setting up LDAP access. You can't necessarily just layer LDAP on top of an existing system where there are already users and groups on individual machines. You'll have all kinds of conflicts and security issues. You need to decide which users to move to LDAP and work on your systems to set their user IDs to be consistent, and you need to decide how to set the user ID range on your system for new local accounts so they don't conflict with the range that LDAP is using. You can do this with a user mod dash u command. To set up the LDAP software on a client, I'll need to install a few packages. I'll write apt install nscd and ldap auth client. During the configuration, I am asked for the uniform resource identifier or URI of the LDAP server. And that'll be LDAP colon slash slash and in this case it's the local host. I'm asked for the distinguished name of the search base which is our domain in this notation. DC here stands for domain component. So for [example.com](https://example.com), I would write dc equals example comma dc equals equals com. We'll choose LDAP version three
>
> **[6:21](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/use-ldap-for-user-authentication?u=76281980&t=381)** and I'll enable this option here. Here I'll choose no and for the LDAP root account I'll add my administrator user. CN equals admin, DC equals example, DC equals com.
>
> **[6:40](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/use-ldap-for-user-authentication?u=76281980&t=400)** I'll enter the password for the admin user on the LDAP server and the installation continues. This adds some configuration to the system's PAM files so we don't have to do it manually and gives us an interface to set up some information that the system needs to connect to the LDAP server and check user information. If I need to go through the configuration process again I can write d package reconfigure ldap auth config, but I won't do that right now. Then I need to edit the nsswitch.conf file for a name service switch which contains information about where the system should look for password and group information. I'll write nano, etc nsswitch.conf. We're interested in these three lines at the top for password group and shadow. Right now they're set to compat which means compatibility mode and that directs NSS to look for the files on disk when it needs to find out about a user. So it looks at ETC password, ETC group, and ETC shadow when the user tries to login. We need to add LDAP here as well because we want our users to be looked up there, not in the local database on the machine. I'll add it after compat here because we want the system to look in its [[Databases]] first. If LDAP comes first and the LDAP server isn't running, it can cause the system to hang a boot as it looks up the users it needs to start services in a system that doesn't exist yet. I'll save the file. As I mentioned earlier the libpam LDAP package set up PAM for LDAP for us
>
> **[8:14](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/use-ldap-for-user-authentication?u=76281980&t=494)** and we can take a look at where it scattered references to LDAP in the PAM files. With grep ldap etc pam.d. Oops, I need a slash star there. These files are managed by the PAM auth update tool. So I'll open that up and see that yep, LDAP is enables here. An there's an option for home directories which is helpful but it didn't configure the system to create a home folder with our skeleton home folder. That's the one that has a friendly welcome message in it. And we want our LDAP users to have the same experience as our local users. So I'll enable this and choose okay. I'll open up the session settings here with nano etc pam.d common session. And I'll find the home directory line where pam is calling the make home directory shared object. I'll add the skeleton folder path here with skel equals etc skel. Great, now I'll save this and restart the NSCD.
>
> **[9:24](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/use-ldap-for-user-authentication?u=76281980&t=564)** The name service caching demon with those changes. And now we're ready to try out our user. I'll switch to another terminal with control alt F4. And I'll login as my LDAP user. Their name was mgreen and I'll type their password. Cool, and with the ID command I can see that the user ID is in fact 10,001 and the system's created a home directory for me. If I were to take a look at the password file, I'd see that this user is not defined locally. But I'm logged in, that's pretty handy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Databases]] (1)
> **Env Vars:** ldap (30), pam (5), etc (3), php (2), mdb (1)
> **Prerequisites:** install (8), set up (6), configure (4), setup (2)
> **CLI Commands:** apt (3), make (2), php (2), find (2), grep (1)
> **Tools:** command line (2), terminal (1)
> **UI Navigation:** scroll down (2), switch to (1)
> **Definitions:** is called (1), is a  (1), stands for (1)
> **URLs:** [example.com](https://example.com) (2)

#### [Authenticate clients with Kerberos](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/authenticate-clients-with-kerberos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/authenticate-clients-with-kerberos?u=76281980&t=0)** - [Instructor] Kerberos, named for the three-headed dog that guarded the underworld in Greek mythology, is an authentication system that allows centralized management and is often used for single sign-on applications, because it grants users a ticket that can be used to authenticate supported services, rather than requiring a password to log in all the time. As with LDAP, a correct Kerberos setup takes a lot of planning and preparation, and that's a topic for a different course. In this video, we'll set up a Kerberos server, or KDC, a key distribution center, using very basic settings so we can then use a client to connect to it, and then we'll see how to use Kerberos to allow users to log into machines. First, we'll give ourselves a host name, which in a production setup you'd want to do with your DNS servers, but here we'll just take care of that in the Hosts file, with nano etc hosts. And I'll add 127.0.0.1, and we'll call our server kdc.[example.com](https://example.com). And then I'll install the software that we need to run and administer a KDC, with apt install krb5-kdc and krb5-admin-server.
>
> **[1:19](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/authenticate-clients-with-kerberos?u=76281980&t=79)** During the configuration, I need to specify the realm, and in this case it's going to be [EXAMPLE.COM](https://EXAMPLE.COM). The name of the Kerberos realm needs to be in capital letters. Then, I'll enter the name of the server, kdc.[example.com](https://example.com). Again, I'll put in kdc.[example.com](https://example.com), and then I'll choose OK. Then, I'll run krb5 underscore newrealm to create our [EXAMPLE.COM](https://EXAMPLE.COM) realm. I'll enter a master key for the KDC database. Next, I'll use the kadmin.local command here in the KDC server to add a user that I want to manage centrally. I'll use the command addprinc, and type the name Pat. Users and services that we create information for in Kerberos are called principles. I'll set a password for this user, and re-enter it. And I'll exit kadmin. Okay, I've made a principle and set a password. Again, this is a really bare-bones example. Normally, you might have hundreds or thousands of principles in the database for a KDC, or you might import them or store them in something like LDAP. But we have a principle set up, and KDC is running, so let's configure what a client needs to connect to it. Usually, a Kerberos client will be a separate machine
>
> **[2:52](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/authenticate-clients-with-kerberos?u=76281980&t=172)** from the KDC, but it doesn't have to be. Let's add the client software and configuration here with apt install krb5-user and krb5-config,
>
> **[3:05](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/authenticate-clients-with-kerberos?u=76281980&t=185)** if they're not already installed. And then we'll go through the setup process, with d package reconfigure krb5-config. Here on the client, I'll need to specify the Kerberos realm, in my case, [EXAMPLE.COM](https://EXAMPLE.COM). And this creates the file etc krb5.conf, which depending on your setup may need some minor changes. Or if you're deploying many systems with some automation tools, you can generate and push this file with those tools to configure many machines at the same time. Let's check that we can communicate with the KDC with kinit dash p for principle, and then our user, pat@[EXAMPLE.COM](https://EXAMPLE.COM). I'll type this principle's password, which initializes the Kerberos session. It reaches out to the server and asks for a TGT, or a ticket granting ticket, which is used to refresh the Kerberos ticket periodically. That worked, and I can list out the details of my ticket with klist. We can log into the server, but there's a few more steps we need to take to allow Kerberos principles to log into the local system. First, we need a user on the system that corresponds with the Kerberos principle, or on an LDAP setup, I'd need to create a user in LDAP. You could do that with adduser pat, but on my system, this user already exists. In order to let someone log in, the system needs an account for them to use. But our password and the activation of the user's account
>
> **[4:38](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/authenticate-clients-with-kerberos?u=76281980&t=278)** will be managed by Kerberos. That user will map onto the local user when they log in, and then we need to add support for PAM and our Kerberized user with apt install libpam-krb5.
>
> **[4:56](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/authenticate-clients-with-kerberos?u=76281980&t=296)** Which, as we can see, adds Kerberos into our PAM files so we don't have to do it manually. I'll switch to a new console with Control Alt F4, and I'll log in as our Kerberized user. There we go. And I can take a look at my ticket and see that it's valid. As long as the Kerberos server is running and says we can log in, then we can log in. And if this user changes their password, it changes the Kerberos password, so they would be able to use the same password on any system that's set up for your KDC. Of course, there are other considerations you need to plan for in an environment like that. You may want to set up users with server-based home folders over NFS or something, and you may want to look into caching credentials in case users are on mobile or your KDC is, for whatever reason, not always available. You can do that with the libpam dash ccreds package. If you're interested in Kerberos, I encourage you to learn more about it and experiment with it in the lab setting.

> [!info]- Semantic Content
>
> **Env Vars:** kdc (10), ldap (4), example (4), com (4), pam (2)
> **Prerequisites:** setup (5), set up (4), install (4), configure (2)
> **URLs:** [example.com](https://example.com) (7)
> **CLI Commands:** apt (3)
> **Definitions:** is an  (1), is a  (1)
> **Versions:** 127.0.0 (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Tools for exploring user logins](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/tools-for-exploring-user-logins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/tools-for-exploring-user-logins?u=76281980&t=0)** - [Instructor] We've seen how to create and modify users and before we wrap up, I want to show you a few ways to see some information about the activity of users. The who command shows us who is currently logged into the system, on which terminal, and from where. We can see the username, the terminal, in this case, TTY2, and if they're connected using SSH instead, we'd see PTS, the pseudoterminal slave. And then there's the date and time when they logged in and if they're connected remotely, we'll see their source IP address here. But, in this case, it shows that I'm using display one. When someone logs out or disconnects, they'll be removed from this list, so the who command is useful for seeing who is logged in at the present time. The last command shows a historical list of users logging into the system. Again, with their username, the terminal that they connected to, and the source. We also see the date and time and duration of their visit. If you need to dig deeper into the details of the last command, check out the man page for it. You can specify ranges to look between and other various options that could be useful for your use cases. This information comes from the var run UTMP and var log WTMP files which are binary files that we can't read directly so it's nice to have these utilities that parse that information for us. One last command that I want to show you is last log which shows a listing of users known to the system and when they last logged in, if ever.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/tools-for-exploring-user-logins?u=76281980&t=93)** Most of these system users have never logged in but we can see a few of the regular users here have a last login time and, as with the other commands, we can see which terminal they used and what their remote address was, if any.

> [!info]- Semantic Content
>
> **Env Vars:** tty2 (1), ssh (1), pts (1), utmp (1), wtmp (1)
> **Tools:** terminal (4)
> **CLI Commands:** ssh (1)
> **Documentation:** man page (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-user-and-group-management/next-steps?u=76281980&t=0)** - [Scott] That's been a look at managing users and groups on [[Ubuntu]]. I encourage you to continue practicing with creating users and groups in different configurations. And maybe try to anticipate some user concerns that might come in. I've forgotten my password. I can't save changes to the file, and so on. And if you're feeling extra adventurous, set up a few [[Virtual Machines]] and explore Kerberos and LDAP in a larger setting. With an understanding of user and group management, you're one step closer to being a well rounded system administrator. Keep learning and practicing. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (1), [[Virtual Machines]] (1)
> **Env Vars:** ldap (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [scott] (1)


## Instructor

- [[Scott Simpson]]

## Skills Covered

- Linux System Administration
- Ubuntu
- User Management

## Path Context

### In [[Ubuntu Linux Professional Certificate by Canonical]]
← [[Ubuntu Linux- Storage Management]] | **4 of 4**

## Part of

- [[Ubuntu Linux Professional Certificate by Canonical]]

## Appears In

- [[Ubuntu Linux Professional Certificate by Canonical]]

## Related Courses

_Courses sharing skills:_

- [[Ubuntu Linux- Storage Management]] — Linux System Administration, Ubuntu
- [[Ubuntu Linux- Operating System Basics]] — Linux System Administration, Ubuntu
- [[LPIC-1 Exam 102 (Version 5.0) Cert Prep]] — Linux System Administration
- [[Lpic 1 Exam 101 Version 5 0 Cert Prep]] — Linux System Administration
- [[Red Hat Certified System Administrator (EX200) Cert Prep- 2 File Access, Storage, and Security]] — Linux System Administration

---

[↑ Back to top](#)