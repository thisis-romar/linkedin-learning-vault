---
type: course
slug: linux-files-and-permissions-14025387
url: "https://www.linkedin.com/learning/linux-files-and-permissions-14025387"
duration_minutes: 177
duration: 2h 57m
level: Intermediate
updated: 6/29/2022
learners: 23412
skills:
  - Linux
exercise_files: true
tags:
  - course
  - topic/network-and-system-administration
  - skill/linux
status: not-started
created: 2026-04-17
---

# Linux: Files and Permissions

> When it comes to managing Linux servers securely, permissions and access control are crucial. In this course, computer science instructor and Linux enthusiast Grant McWilliams explains how to manage files and directories, create links, and set permissions in Enterprise Linux  8. Grant covers how to maintain access control to files through the standard Linux permission system and access control lis

> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387) | 2h 57m | Intermediate | 23K learners

## Instructor

- [[Grant McWilliams]]

## Resources

- Exercise files available

## Skills Covered

- Linux

## Table of Contents

### Introduction

#### Manage files and permissions in Linux
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=0)** - [Grant] Linux service manage some of the largest file archives in the world.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=4)** Permissions and access controller and necessity and managing file and cloud storage servers.
>
> **[0:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=9)** What is a file in Linux?
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=12)** Everything is a file.
>
> **[0:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=13)** The text output from commands, magic files full of data but having no size, hardware devices, and of course, traditional files like photos and documents.
>
> **[0:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=22)** In this course, you will learn about Linux is fascinating and unique philosophy concerning files and how to manage them.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=29)** You will learn to use advanced extended globs to match files with a power of regular expressions.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=35)** Later, we'll take the mystery out of Linux permissions and you will learn how to grant access to users for resources they need.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=42)** We'll also skip to the future and use file access control lists to break through the limitations imposed by legacy permissions.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=49)** We'll also configure inheritance.
>
> **[0:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=50)** So users have automatic access to files that will be created in the future.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=55)** You will finish the course knowing how to save the permissions of every file in your computer and restore those permissions in a single key press.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=63)** Welcome to Linux Files and Permissions.
>
> **[1:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=65)** I am Grant McWilliams.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=66)** Computer science instructor and Linux enthusiast.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=70)** I'm excited to remove the veil of mystery from an amazing operating system.
>
> **[1:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-files-and-permissions-in-linux?u=76281980&t=73)** So if you're ready, let's begin.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [grant] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=0)** - [Instructor] In this course you'll learn how to use Enterprise Linux version eight.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=4)** If you have access to Red Hat Enterprise Linux version eight, that would be fine, but it's not necessary to complete this course.
>
> **[0:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=10)** You can also use a clone of Red Hat Enterprise Linux, such as CentOS Linux, Rocky Linux, AlmaLinux OS, or any other clone of Red Hat.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=18)** When I refer to Enterprise Linux in this course, I mean any Red Hat Enterprise Linux version eight clone.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=24)** In fact, most tutorials will also work on Fedora Linux with very little modification due to its similarity to Red Hat Enterprise Linux.
>
> **[0:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=32)** In this course, we'll continue to use the Linux installation that we created in the foundation course in this series, Linux Overview and Installation.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=40)** If you have not taken that course yet, I recommend doing so before continuing with this one.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=44)** In that course, we installed VirtualBox on both Windows and Linux hosts, created and optimized a virtual machine, installed Enterprise Linux version eight, and then installed VirtualBox Guest Additions and customized the Linux desktop to make our workflow faster and more efficient.
>
> **[1:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=60)** If you created your VM in the Linux Overview and Installation course, then you can be sure that you have the necessary resources.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=66)** If you did not, then you can double check 'em now.
>
> **[1:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=69)** For the purpose of running virtual machines, you'll need an Intel or AMD 64-bit CPU with virtualization support.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=76)** Intel CPUs with virtualization support will be advertised as having VT-x and AMD calls it AMD-V.
>
> **[1:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=83)** Be sure you have virtualization support turned on in your BIOS.
>
> **[1:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=87)** For this course, you may also want to have high-speed internet for doing Linux operating system software updates.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=92)** This is also handy for downloading large operating system ISO images.
>
> **[1:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=97)** You'll also want 30 to 40 gigabytes of free space minimum on your host computer's hard drive to give your VM room to operate.
>
> **[1:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=104)** To run more than one VM at a time on a Linux host, you'll need to have at least four gigabytes of free system memory, but eight will work much better.
>
> **[1:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=111)** If you're using Windows as your host OS, you may need 8 to 16 gigabytes of free system memory.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=117)** If you have more, then it will allow you to run more complex configurations with multiple virtual machines operating at the same time.
>
> **[2:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-you-should-know-14945159?u=76281980&t=124)** This is useful, for example, when you want to learn networking or server client configuration.

> [!info]- Semantic Content
>
> **Env Vars:** amd (3), cpu (1), bios (1), iso (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Code Keywords:** continue (1)
> **Speakers:** - [instructor] (1)

#### Get help with commands
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=0)** - [Instructor] Knowing how to get information about commands in Linux is paramount to understanding such a powerful operating system.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=7)** You can use the methods in this video to gather information about any command I use in this course or any other course.
>
> **[0:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=13)** Let's start by using the dash dash help option built into most commands.
>
> **[0:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=17)** Open a terminal by putting your mouse pointer in the top left-hand corner and typing terminal.
>
> **[0:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=25)** You can drag this to your application bar if you haven't already done so.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=31)** From this point on, you can go into overview mode and click on the terminal icon.
>
> **[0:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=37)** Now let's get the help information for the grep command.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=40)** The grep command is a very useful tool for searching through text and is perhaps my favorite command.
>
> **[0:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=46)** Type in grep space dash dash help and hit enter.
>
> **[0:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=51)** The dash dash help information is built into almost all Linux commands, so you can usually count on it being there.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=57)** If the output is too long, use the scroll bar or press shift page up to scroll up.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=63)** At the top of the output, it shows the command syntax or usage followed by all of the options.
>
> **[1:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=69)** Some commands may not have the dash dash help option.
>
> **[1:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=72)** We can also use the help command to get the syntax.
>
> **[1:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=75)** Let's use the help command to get information on the CD command.
>
> **[1:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=78)** We'll use CD because the help command has no information on grep.
>
> **[1:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=83)** Type in help, space, CD, and hit enter.
>
> **[1:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=88)** Between the dash dash help option and the help command, we should be able to get help on most any command, even though that information may be brief.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=96)** Most commands have a more in-depth manual written for them and we can access those manual pages using the man command.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=103)** To get the manual page for grep let's first type in clear, to clear our screen, and then type in man space grep and hit enter.
>
> **[1:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=112)** Most man pages are structured in a certain manner.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=115)** They start with a name and a short description.
>
> **[1:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=118)** Then they show the command usage followed by an in-depth description of the command.
>
> **[2:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=123)** Sometimes the options to the command are included in the description, but other times there may be a specific options section.
>
> **[2:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=129)** This is where I spend most of my time after I've noted the syntax.
>
> **[2:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=134)** the sections after the options can vary but take note of the see also section near the bottom.
>
> **[2:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=139)** This can be very useful when learning Linux as viewing the man page of a command similar to what you need may contain a clue on the right command for the job in the see also section.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=148)** This can be invaluable for learning new commands related to your current task.
>
> **[2:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=153)** Some man pages have examples near the bottom which I think should be the standard practice.
>
> **[2:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=158)** The quality of man pages vary depending on the specific project creating them.
>
> **[2:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=161)** All man pages reside in man page sections.
>
> **[2:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=166)** We can see that our grep man page is in section one by looking at the text on the top line.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=172)** Now press Q to quit the grep man page.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=175)** To see the man page sections, we can view the man page or man pages.
>
> **[2:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=179)** Type in man space, man, dash pages and hit enter.
>
> **[3:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=183)** Section one is for programs.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=185)** Section five is for file formats and configurations and so on.
>
> **[3:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=189)** If you want more information on any man page section you can just check the man page for the section itself.
>
> **[3:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=195)** Press Q to quit and then type in man space one space intro, and hit enter.
>
> **[3:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=200)** And man will tell you about the first section.
>
> **[3:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=203)** Here it says that section one of the manual describes user commands and tools.
>
> **[3:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=207)** Press Q to quit.
>
> **[3:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=209)** There may be more than one man page for a command.
>
> **[3:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=212)** We can search through the man pages but first we need to create a search database.
>
> **[3:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=216)** We will need to elevate privileges for this, so type in sudo, space, mandb, and hit enter and then type your password in.
>
> **[3:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=226)** It may take a moment to create the manual database.
>
> **[3:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=228)** Once that's done, let's find the man pages with the name crontab.
>
> **[3:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=232)** We'll use the find option by typing in clear and then type in man space dash F space crontab, and hit enter.
>
> **[4:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=240)** We can see that crontab has three man pages and sections one, one P, and five.
>
> **[4:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=245)** Section one is for commands.
>
> **[4:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=248)** Section one P is for POSIX compliant commands.
>
> **[4:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=251)** POSIX being the standard that defines the Unix-like operating systems.
>
> **[4:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=254)** In many cases, Linux may have a POSIX compliant command as well as in non-POSIX complaint command.
>
> **[4:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=260)** And lastly, section five is for file formats.
>
> **[4:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=262)** Or in this case, the crontab configuration file.
>
> **[4:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=266)** You can specify a man page section on the command line to get the right man page.
>
> **[4:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=270)** For the crontab man page in section five, type in man space five space crontab and hit enter.
>
> **[4:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=279)** And then press Q to quit this man page.
>
> **[4:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=281)** If you want to do a more exhaustive search through the man pages, you can use man-K.
>
> **[4:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=286)** Let's search for crontab again.
>
> **[4:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=288)** Type in man space dash K space crontab, and hit enter.
>
> **[4:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=293)** Now we see we have five man pages including one for something called Anacron tab.
>
> **[4:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=298)** Now, you know how to get help for commands on the command lane.
>
> **[5:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=302)** I recommend as you go through this course and others, you look up the commands with the dash dash help option as well as use the help and man commands.
>
> **[5:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/get-help-with-commands?u=76281980&t=309)** It may also be helpful to create a list of commands that we cover, and add to it in each course.

> [!info]- Semantic Content
>
> **CLI Commands:** grep (8), cd (3), find (2), sudo (1)
> **Documentation:** man page (13)
> **Code Keywords:** let (6), this, (1), case, (1)
> **Env Vars:** posix (4)
> **Tools:** terminal (3), command line (1)
> **UI Navigation:** click on (1), scroll up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=0)** - [Instructor] I've included an Exercise Files ZIP Archive for this course.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=4)** To use this archive, you'll want to download it onto your virtual machine.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=7)** Browse to the course using Firefox in your VM and download the Exercise Files ZIP Archive.
>
> **[0:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=13)** Once that's downloaded, click on Library, and then Downloads, and Show Downloads Folder.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=21)** The file manager will appear showing the Downloads directory.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=24)** Then double-click the Exercise Files ZIP Archive and click on Extract.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=29)** When prompted for a destination, choose Home and then click on Extract again.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=35)** Now you should have a folder in your Home directory named Exercise Files.
>
> **[0:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=41)** We'll need to go to this directory using the command line.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=44)** To do so, close your windows and then open a terminal.
>
> **[0:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=50)** Now, type cd ~/ExerciseFiles and hit Enter.
>
> **[0:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=56)** The tilde is a shortcut to our home directory so we don't have to type in the entire path.
>
> **[1:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=61)** You can see your entire path by running print working directory.
>
> **[1:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=64)** To do so type in PWD and hit Enter.
>
> **[1:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=67)** Once you're in the Exercise Files directory, verify its contents by typing in LS.
>
> **[1:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-the-exercise-files?u=76281980&t=72)** You should see a directory for each chapter of the course that has exercise files.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise files (6), download the (1)
> **UI Navigation:** click on (3), double-click (1), go to (1)
> **Env Vars:** zip (3), pwd (1)
> **Tools:** firefox (1), command line (1), terminal (1)
> **CLI Commands:** cd (1), ls (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Reconfigure or migrate CentOS
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=0)** - [Instructor] It's important to note that Red Hat ended support for CentOS 8 on December 31st, 2021.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=6)** Part of the process involved changing the software repository URLs from [centos.org](https://centos.org) to vault.[centos.org](https://centos.org).
>
> **[0:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=13)** If you have a CentOS installation and it cannot install software from its repositories, execute these steps.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=19)** If you're using Rocky Linux or Alma Linux OS, you can skip this video.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=23)** First make sure your networking is turned on by clicking on your top right hand menu and clicking wired off.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=29)** Now click on wired settings, click on the gear icon next to the wired connection and click on connect automatically, now click apply and click the slider gadget to turn it on.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=42)** Now, to fix the repositories in a terminal type in cd space /etc/yum.repos.d/ and hit enter, now comment out all mirrorlist lines by typing in sudo space sed space dash i space single quote s forward slash for the delimiter mirrorlist forward slash hash mirrorlist forward slash g for global single quote space capital C lowercase e n t uppercase OS dash asterisk and hit enter and type in your user's password.
>
> **[1:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=82)** Now, change the CentOS mirror URL to vault.[centos.org](https://centos.org).
>
> **[1:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=86)** We'll need to use the pipe symbol for the sed delimiter because the URLs have forward slashes in them, type in sudo space sed space dash i space single quote s for substitute again, this time type in a pipe symbol for the delimiter hash baseurl equals http colon slash slash mirror.[centos.org](https://centos.org) pipe symbol
>
> **[1:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=116)** baseurl equals http colon slash slash vault.[centos.org](https://centos.org)
>
> **[2:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=127)** pipe g single quote space capital C lowercase e n t capital OS dash asterisk and hit enter.
>
> **[2:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=137)** Now update your system by typing in sudo space dnf space update and hit enter.
>
> **[2:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=144)** Note that this makes your CentOS installation functional again, since this version is no longer supported there will not be any more software updates for it but you will be able to install current software from the repositories, for now this may be fine, especially for the purpose of learning.
>
> **[2:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=160)** However, in the future, it may become a problem when trying to install newer versions of software.
>
> **[2:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=168)** Once the update has been done, reboot your VM by typing in reboot and hit enter.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=175)** To be able to update your CentOS system with new versions of software and security patches you'll need to migrate it.
>
> **[3:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=181)** A couple of options include migrating to Rocky Linux or Alma Linux OS.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=185)** I will outline both processes in this video, you can do either both, for educational purposes or choose one.
>
> **[3:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=191)** Log back in and then before making any changes to your VM, you should take a snapshot by pressing the host key plus T, name the snapshot pre-migration and hit enter.
>
> **[3:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=205)** To migrate CentOS 8 to Alma Linux OS, point your web browser to [almalinux.org](https://almalinux.org) and then click on the migrate button.
>
> **[3:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=216)** This will take you to their GitHub page, about halfway down the page there is an almalinx-deploy.sh link, click on it and then click on raw and then right click and select save page as, choose your downloads directory and click on save.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=239)** Once that's downloaded, go to your terminal and change the downloads directory, type in cd space tilde slash Downloads with a capital D and hit enter.
>
> **[4:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=249)** Now run the script by typing a sudo space bash space almalinux-deploy.sh and hit enter again and enter your password.
>
> **[4:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=260)** Once the migration is done, reboot into Alma Linux OS.
>
> **[4:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=266)** Another option is to migrate to Rocky Linux, to do so you'll need to revert your VM back to the pre-migration snapshot again.
>
> **[4:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=274)** Click the VM close gadget, select power off the machine and select restore current snapshot 'pre-migration' and hit okay.
>
> **[4:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=283)** Now click on start to start your VM back up.
>
> **[4:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=286)** Once it's powered back up, bring up a web browser and browse to [rockylinux.org](https://rockylinux.org) and click on migrate.
>
> **[4:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=299)** This page contains the documentation concerning migration from CentOS, partway down the page is a link for the GitHub project page for the migrate2rocky script, click on that.
>
> **[5:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=312)** Now click on migrate2rocky.sh and then click on raw and right click and click save page as and save it to your downloads directory.
>
> **[5:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=327)** Open a terminal and cd to your downloads directory, type in cd space tilde slash Downloads with a capital D and hit enter, and then run the script.
>
> **[5:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=335)** Type in sudo space bash space migrate2rocky.sh space dash r and hit enter and enter your password.
>
> **[5:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/reconfigure-or-migrate-centos?u=76281980&t=347)** Once the migration process has finished, reboot into Rocky Linux, the differences between Rocky Linux and Alma Linux OS are minor and comprised boot images and backdrops at this point, both of these are nearly identical to CentOS 8 and all receive all future software updates, use whichever one you wish.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (5), cd (4), sed (3), make (1), yum (1)
> **UI Navigation:** click on (12), go to (1)
> **URLs:** [centos.org](https://centos.org) (5), [almalinux.org](https://almalinux.org) (1), [rockylinux.org](https://rockylinux.org) (1)
> **Tools:** terminal (3), github (2), bash (2)
> **Prerequisites:** install (3), you'll need (2)
> **File Paths:** migrate2rocky.sh (2), almalinx-deploy.sh (1), almalinux-deploy.sh (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** url (1)


### Linux Files

#### What is a file?
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=0)** - Every operating system since the beginning of computing has had the concept of a file.
>
> **[0:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=5)** A file is a chunk of data that contains information such as text or binary data, like graphics and audio files.
>
> **[0:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=11)** There are many different formats of files for various types of data.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=15)** To handle these files, an operating system will have a file system.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=19)** This allows users to structure their data in a way that makes it easier to find their files.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=23)** This concept is pretty standard across all modern operating systems, Linux, however, inherited the Unix philosophy that everything is a file, including physical devices, the computer screen, and so on.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=35)** This might seem like a crazy idea so let's get into it.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=38)** The first type of file we'll talk about is a regular data file.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=42)** This type of file can be binary or text, it's saved onto a storage device, and can be read and written to given the user has the appropriate permissions.
>
> **[0:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=50)** It also has metadata describing the file to let the operating system know what type of file it is, who has access to it, how big the file is, when it was created, and so on.
>
> **[1:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=60)** Metadata is data that describes other data.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=63)** In the case of a file, it describes the contents of the file.
>
> **[1:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=68)** A second type of file that we'll talk about is a directory.
>
> **[1:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=71)** A directory is a list of other files.
>
> **[1:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=74)** It helps us organize our system so it's easier to find our files.
>
> **[1:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=78)** We can create, move and delete directories just like other files.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=81)** When we read a directory, we read the list of file names since that's what a directory is, a list.
>
> **[1:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=87)** The directory associates data blocks with file names.
>
> **[1:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=90)** So far, this sounds a lot like other operating systems so let me give you an example that is not.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=96)** In most operating systems, you have device drivers to access physical resources such as printers.
>
> **[1:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=101)** You would configure your printer software to use a certain driver, which sends data out to the printer or USB port to the physical printer.
>
> **[1:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=107)** Linux sees things differently.
>
> **[1:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=109)** In Linux, everything is a file, including printers.
>
> **[1:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=113)** I'll get back to that in a moment.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=115)** A storage device, such as a solid state disc will also act as a file.
>
> **[1:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=119)** This sort of files called a block device file.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=122)** A block device file is a physical device that appears as a file.
>
> **[2:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=126)** If we write data to the file, we'll be saving it to the hard disk.
>
> **[2:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=129)** When a read data from the file, we'll be reading the data off the disk.
>
> **[2:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=132)** For example, this allows us to read the ones and zeros from the drive for doing computer forensics.
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=138)** As I mentioned, in Linux the printer device is a file.
>
> **[2:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=142)** You can save data to it using the same tools that we use to save data to a regular file.
>
> **[2:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=146)** When that data is saved to the printer file, it's sent to the printer.
>
> **[2:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=150)** This allows us to use simple, commonplace tools to print files.
>
> **[2:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=154)** A printer is a kind of character device file.
>
> **[2:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=157)** Character device files are unique because they can be virtual in that they might not represent a real physical device.
>
> **[2:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=163)** We have a character device file called zero, that when read gives us an endless supply of zeros.
>
> **[2:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=169)** You might be struggling to imagine a practical application for an endless supply of zeros, but I promise you it's useful.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=175)** For instance, if you want to wipe out all data on a hard drive and all you need is an endless of zeros, you can read them from the zero file.
>
> **[3:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=182)** As long as you're reading from the zero file, the zeros will keep coming.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=185)** There'll be created by the operating system forever if necessary.
>
> **[3:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=189)** We have a character device file called null that swallows everything that is written to it so that it disappears.
>
> **[3:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=195)** This is useful when you don't want the output of a command to show on the screen, we just send the character output to null.
>
> **[3:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=201)** There are many other examples of character device files.
>
> **[3:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=204)** Our screen is that character device file as well.
>
> **[3:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=207)** Network sockets are also files, writing data to a network socket can send it across the network.
>
> **[3:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=213)** They may also be used to send data between programs on a local computer.
>
> **[3:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=217)** Linux also has virtual files.
>
> **[3:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=219)** These are files that don't really exist anywhere and have no size, but you can still read and write to them.
>
> **[3:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=224)** For instance, there's a virtual file called CPU info that when you read from it, it shows you information about your CPU.
>
> **[3:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=231)** This file has data in it, but it has a size of zero bytes because the operating system creates the data instantly when it's being read.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=239)** Linux takes the idea of everything being a file so far that even the output of an application is considered a file that has not been saved yet.
>
> **[4:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=247)** Another type of file is it pipe file.
>
> **[4:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=249)** You can think of a pipe file as a physical tube or pipe from one application to another.
>
> **[4:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=254)** If one application is writing to the pipe file, then another completely unrelated application can be reading from it.
>
> **[4:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=260)** In this way, data is being passed between two programs without needing to be saved on a physical storage device, which means it can be very fast.
>
> **[4:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=267)** You might be wondering what the advantage of all of this is considering other operating systems don't operate this way.
>
> **[4:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=273)** The idea of everything being a file allows us to view important system information and write data to physical devices with simple tools.
>
> **[4:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=280)** It allows us to read block devices and the output of commands using simple text viewers.
>
> **[4:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=285)** It allows us to have one command communicate with another without any special software, which allows us to combine multiple simple commands to solve complex problems.
>
> **[4:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/what-is-a-file?u=76281980&t=293)** The concept of everything being a file sets Linux apart from other operating systems and proves to be very powerful indeed.

> [!info]- Semantic Content
>
> **Definitions:** is a  (9), is an  (1)
> **Analogies:** such as (2), for instance (2), just like (1), for example (1), imagine (1)
> **Code Keywords:** let (3), delete (1)
> **Env Vars:** cpu (2), usb (1)
> **CLI Commands:** find (2)
> **Prerequisites:** configure (1)
> **Speakers:** - every (1)

#### Getting information about files
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=0)** - [Instructor] Data that describes other data is called metadata.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=4)** This data is associated with a file.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=6)** Note that a file will contain its own data, for instance a photo will contain photo information, plus the operating system associates additional metadata about the file as well.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=15)** This metadata allows us to know about the attributes of our files.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=19)** It's important to be able to view these attributes.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=21)** These attributes may include the file name, its size, permissions, ownership, and access time, among other things.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=29)** For the exercises in this chapter you'll want to be logged into your virtual machine as user1.
>
> **[0:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=34)** The quickest way to get information about a file is by doing a long list of the file.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=38)** In a terminal type in LS space dash L space slash ETC slash P A S S W D and hit enter.
>
> **[0:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=45)** This will give us a long list of the ETC password file using the LS command which lists files and the dash L option which shows us additional information.
>
> **[0:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=54)** Let's take a look at this information.
>
> **[0:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=56)** In the first column is the file type.
>
> **[0:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=58)** In our example, the ETC password file has a hyphen, so it's a regular data file.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=63)** This field can also be a B for block device, C for character device, D for a directory, L for a symbolic link, N for a network file, P for a FIFO or pipe, or an S for a socket file.
>
> **[1:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=78)** The next three characters are the user-owner's permissions.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=81)** The possible options are, R for read, W for write, and X for execute.
>
> **[1:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=86)** The user-owner is the third column from the left.
>
> **[1:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=88)** In our case, the user-owner is root, the super-user or administrator.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=92)** In this file we can see that the user-owner can read from it and write to it.
>
> **[1:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=97)** The next three characters are the group-owner's permissions.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=100)** Every file is owned by one user-owner, in our case the root user, and one group-owner.
>
> **[1:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=105)** The group-owner is the fourth column from the left.
>
> **[1:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=107)** The group-owner of the file is the root group and its members can only read this file.
>
> **[1:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=113)** The last group of three characters in the first column are permissions for other.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=117)** Other is not an actual group but rather a way of expressing anyone who is not specified.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=121)** Other contains anyone who's not the user-owner or the group-owner.
>
> **[2:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=125)** Other in this example has read-only access.
>
> **[2:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=128)** We are logged in as user1.
>
> **[2:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=129)** Since user1 is not the root user and does not belong to the root group, then our permissions would come under the other definition so we could read this file, but not write to it.
>
> **[2:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=139)** The next character is the number of index nodes or inodes that the file uses.
>
> **[2:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=143)** An inode it stores the metadata about the file as well as a pointer to the location of the data blocks on the disc.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=148)** Interestingly, the inode of a file does not contain the name.
>
> **[2:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=152)** The file's name was not stored in the files inode.
>
> **[2:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=155)** We need a directory inode for that.
>
> **[2:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=157)** What a stored in directory inodes is not file data, but directory data.
>
> **[2:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=162)** That data is simply a list of names and inode numbers matching the file inode to the file's name.
>
> **[2:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=168)** The fifth column is the size of the file in bytes.
>
> **[2:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=171)** The sixth, seventh, and eighth columns make up the last modified date and time.
>
> **[2:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=176)** The ninth column is the name of the file.
>
> **[2:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=179)** You may have noticed that nowhere in the metadata was there a flag to signify that a file is a hidden file.
>
> **[3:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=184)** In Linux a file name is only hidden if the first character of its name is a dot.
>
> **[3:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=188)** In a terminal, let's view hidden files by typing in LS space dash L for a long list plus an A for all and hit enter.
>
> **[3:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=196)** Notice that you can place as both options together.
>
> **[3:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=198)** We could also type LS space dash L space dash A and get the same results, but typing both options together is shorter.
>
> **[3:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=206)** Here we can see hidden files and directories.
>
> **[3:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=208)** If you ever want to make a file or director hidden, you just rename it and prepend a dot.
>
> **[3:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=213)** We've seen that the output of LS shows us permissions, user and group ownership, and the size of a file.
>
> **[3:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=218)** To see the file type, we'll use the file command.
>
> **[3:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=221)** Type in clear, and then type in file space slash ETC slash PASSWD and hit enter.
>
> **[3:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=227)** We can see that the ETC password file is ASCII text.
>
> **[3:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=231)** The file command looks at the bits of the file to determine which type it is.
>
> **[3:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=234)** This is different from other operating systems which use the name extension to determine the type.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=239)** You can rename a JPEG photo as photo.txt and the file command will not be fooled.
>
> **[4:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=245)** You have another command that shows you metadata about a file.
>
> **[4:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=248)** That is the stat command.
>
> **[4:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=249)** Type in stat space slash ETC slash PASSWD and hit enter.
>
> **[4:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=255)** And let's look at the output.
>
> **[4:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=257)** Stat shows us the name of the file, the size in bytes, the number of file system blocks, the size of the IO Block, which means the size in bytes of every block, the type of file, the device number, and the inode number.
>
> **[4:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=271)** It's important to know that each drive uses the same numbers for inodes, so two files on two drives can have the same inode number.
>
> **[4:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=278)** However, the device number in combination with the inode number makes a unique address.
>
> **[4:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=283)** The number of hard links, permissions, ID number of the user-owner, ID number of the group-owner and the SELinux security context.
>
> **[4:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=292)** We won't get into SELinux in this course, but just for now know it's a powerful, mandatory, access control system.
>
> **[4:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=299)** It also has the last access time, just like the LS dash L command, as well as the last time the content was modified.
>
> **[5:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=305)** And the last time the file attribute or the content was modified.
>
> **[5:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=310)** For instance the metadata would update if we changed ownership or permissions, but the file data's not changed.
>
> **[5:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=316)** And lastly, the creation time.
>
> **[5:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=318)** This last item came from Unix and is not supported on Linux.
>
> **[5:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-information-about-files?u=76281980&t=323)** By using the LS, file, and stack commands, you can gather useful information about files in Linux.

> [!info]- Semantic Content
>
> **Env Vars:** etc (6), passwd (2), fifo (1), ascii (1), jpeg (1)
> **CLI Commands:** ls (7), make (2)
> **Code Keywords:** let (3), type. (2), case, (1), super (1), type, (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for instance (2), just like (1)
> **Tools:** terminal (2)
> **File Paths:** photo.txt (1)
> **Warnings:** note that (1)

#### About extended attributes
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=0)** - [Instructor] Files in Linux have standard attributes such as the user owner, group owner, permissions, and so on.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=6)** We can get these attributes using the LS file and stack commands.
>
> **[0:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=10)** Files can also have extended attributes if the file system supports it which most do.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=15)** Extended attributes or extensions to the normal file attributes.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=19)** Just like normal attributes, extended attributes are stored with files on the disk.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=24)** There are three major types of extended attributes, extended system attributes, extended security attributes, and extended user attributes.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=33)** Let's take a closer look at each.
>
> **[0:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=36)** First, let's look at extended system attributes which store access control lists or ACL's.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=42)** ACL's provide an additional layer of discretionary access control for Linux making Linux permissions more powerful and easier to manage.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=49)** With discretionary access control, access to the file is that the discretion of the owner.
>
> **[0:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=54)** The owner sets permissions on their own files.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=57)** With file ACL's permissions can be set for multiple users and groups on a file.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=62)** Normally Linux permissions only allow access control to be set for one user and one group.
>
> **[1:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=68)** File ACL's also provide inheritance for user group permissions so newly created files can inherit permissions from the parent directory.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=76)** With file ACL's you can back up and restore permissions easily.
>
> **[1:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=80)** These capabilities are beyond what standard Linux permissions can do and I encourage you to learn them.
>
> **[1:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=85)** Now let's talk about extended security attributes which provides space for SELinux security context.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=92)** SELinux is a complex subject so I will only provide an overview of what it is now.
>
> **[1:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=97)** SELinux is a mandatory access control system that's layered over the top of Linux discretionary access control.
>
> **[1:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=105)** Discretionary access control means the owner of the file gets to decide who can access it.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=110)** With mandatory access control, there are system wide rules granting or denying access for all users, including root.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=117)** It is an incredibly powerful but also very complex way of managing access control.
>
> **[2:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=123)** SELinux has several different modes, it provides a multi-level security system that mimics a government security levels.
>
> **[2:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=130)** For instance, if someone has level three security clearance they can access certain resources that someone with a lower level cannot.
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=138)** It also supports role-based access control.
>
> **[2:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=141)** So administrators can set security conducts based on the user's role, such as admin as opposed to who they really are.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=148)** Lastly SELinux supports type enforcement which is what enterprise Linux mostly uses to enforce security policy.
>
> **[2:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=155)** With type enforcement all files, processes and users are tagged with a type and rules are written allowing some types to act on other types.
>
> **[2:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=164)** For instance, a user might be able to read a file if there's an SELinux rule allowing that users type to read the files type.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=172)** I won't be spending any more time discussing the complexity of SELinux, but I will point out the security context when we view files.
>
> **[3:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=180)** Extended user attributes store additional flags on files, aptly named extended attributes.
>
> **[3:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=187)** These flags include append only so we can add data to a file, but not overwrite the original.
>
> **[3:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=193)** Files can have the compress attributes set so they were compressed and decompressed automatically.
>
> **[3:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=199)** The immutable flag on a file means it cannot be modified, it cannot be deleted or renamed and no data can be written to the file.
>
> **[3:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=206)** This is true even for the root user, however, the root user can remove the immutable flag if they understand why they're being restricted.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=214)** When the backup flag is set and a file is deleted, the date is backed up so we can undelete it later.
>
> **[3:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=220)** Normally this is not the case for Linux.
>
> **[3:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=223)** Not all file systems or operating systems support all extended attributes.
>
> **[3:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-extended-attributes?u=76281980&t=228)** All of these extended attributes add layers of security to a Linux system in different ways.

> [!info]- Semantic Content
>
> **Env Vars:** acl (5)
> **Analogies:** such as (2), for instance (2), just like (1)
> **Code Keywords:** let (3), type. (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** ls (1)
> **Speakers:** - [instructor] (1)

#### Getting extended attributes
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=0)** - Just as you can use the ls file and stack commands to get file attributes, you can use additional tools and or options to gather information on extended attributes.
>
> **[0:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=9)** For this exercise you want to log in as user1 and open a terminal.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=15)** To show what ACLs look like, we need a file with them.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=18)** We haven't created a file with an ACL yet, so let's do it now using the touch command.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=23)** The touch command's job is to change the time stamp of a file, otherwise known as touching the file.
>
> **[0:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=28)** However, if you specify a file that doesn't exist, then it will create an empty file for you.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=33)** We're not really using the touch command for its intended purpose, but it works for creating new empty files.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=38)** Also take note that I will cover standard Linux permissions and access control list in other videos.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=44)** I just want to focus on getting information about files on this one.
>
> **[0:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=48)** In the terminal, type touch Space aclfile.txt and hit Enter.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=55)** Let's take a look at the permissions on this file using a long list.
>
> **[0:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=58)** Type in ls Space Dash l Space aclfile.txt and hit Enter.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=63)** We'll contrast this output with another listing of it in a moment.
>
> **[1:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=68)** Now let's set an acl on using the setfacl command.
>
> **[1:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=71)** Type in setfacl Space Dash m for modify Space user Colon, and for user name we'll type in root Colon and for permissions rwx Space aclfile.txt and hit Enter.
>
> **[1:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=87)** Now that we have a file as an acl, we can list it using the getfacl command.
>
> **[1:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=93)** Type in getfacl Space Dash t Space aclfile.txt and hit Enter.
>
> **[1:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=99)** The getfacl command shows standard Linux permissions and ownership.
>
> **[1:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=102)** It also shows the additional ACL for the root user.
>
> **[1:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=106)** Let's also look at the output of ls again.
>
> **[1:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=108)** Type in ls Space Dash l Space aclfile.txt and hit Enter.
>
> **[1:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=114)** The ls command cannot display the access control list, however, note that there is now a Plus symbol where there used to be a dot.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=121)** This clue tells you that there's an acl set and that you need to use the getfacl command to see it.
>
> **[2:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=127)** SELinux is very complex and beyond the scope of this course.
>
> **[2:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=131)** However, I think it's important to know how to gather the SELinux security context.
>
> **[2:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=135)** For this purpose, we'll use the ls command with a Dash capital Z option.
>
> **[2:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=140)** First, clear your screen by typing in clear and then type in ls Space Dash capital Z Space aclfile.txt and hit Enter.
>
> **[2:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=149)** We can see the security context in the first four columns.
>
> **[2:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=153)** Reading from left to right, user is unconfined, the role is object, and the type for type enforcement, is user Underscore home Underscore t.
>
> **[2:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=163)** The security level in column four is zero.
>
> **[2:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=165)** Note that we didn't add this context, it was automatic based on rules in the SELinux Policy Database.
>
> **[2:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=173)** Now let's talk about extended user attributes.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=175)** Since we don't have a file with an extended user attribute, let's add an attribute now to aclfile.txt.
>
> **[3:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=182)** We'll need to elevate privileges to set the attribute, so we'll prefix the command with a sudo command.
>
> **[3:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=187)** Type in sudo Space C-H-A-T-T-R Space Plus i Space aclfile.txt and hit Enter.
>
> **[3:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=195)** Now enter your password.
>
> **[3:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=197)** Now that you have a file with an extended attribute, you can retrieve it using the lsattr command.
>
> **[3:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=203)** Type in lsattr Space aclfile.txt and hit Enter.
>
> **[3:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=208)** Viewing the extended attribute with the lsattr shows the immutable flag that we just set.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=214)** We can also provide the Dash l option for more verbosity.
>
> **[3:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=217)** Bring your line back by pressing the Up Arrow key and then insert Dash l between lsattr and the file name and hit Enter.
>
> **[3:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=226)** In summary, if you want to verify the existence of an ACL, use the ls Dash l command.
>
> **[3:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=232)** If you want to view the Access Control List itself, use the getfacl command.
>
> **[3:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=236)** If you want to view the SELinux security context, then use the -Z option with many commands including ls.
>
> **[4:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=243)** If you want to view the extended attribute, use the lsattr command.
>
> **[4:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/getting-extended-attributes?u=76281980&t=249)** You can use these commands and options to gather extended attribute information for your files.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (9), sudo (2)
> **File Paths:** aclfile.txt (9)
> **Code Keywords:** let (6)
> **Env Vars:** acl (3)
> **Warnings:** note that (3)
> **Tools:** terminal (2)
> **Definitions:** known as (1)
> **Speakers:** - just (1)

#### About file globs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=0)** - [Narrator] One of the reasons that manipulating files on the command line can be faster and more efficient than the GUI is file globbing.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=7)** File globbing uses patterns containing wildcards to match files based on their names.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=12)** For instance, if you wanted to list all file names starting with the word file followed by any extension, you could use L-S space file asterisk.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=21)** This glob can be used with any command, as the globbing is handled by the shell itself.
>
> **[0:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=26)** You can practice the globs in this video using the files I've provided in this chapter's directory of the exercise files archive.
>
> **[0:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=34)** The first wild card we'll cover is the asterisk.
>
> **[0:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=37)** An asterisk matches zero or more of any type of character.
>
> **[0:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=41)** It matches everything and nothing.
>
> **[0:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=43)** Let me explain.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=44)** In this example, I'm using a glob of file asterisk.
>
> **[0:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=48)** The asterisk would match the letters .txt, .jpg, and .tar.gz.
>
> **[0:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=54)** But it would also match a file named file.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=57)** The reason for this is that file doesn't have any trailing characters, so the asterisk is matching zero characters in this position.
>
> **[1:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=64)** This can be tricky.
>
> **[1:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=65)** It matches the pattern that we specify, but also matches nothing.
>
> **[1:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=69)** Let me give you another example.
>
> **[1:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=71)** Placing the asterisk in the middle of the pattern will match a file name starting with file and ending with .txt.
>
> **[1:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=77)** It will match nothing or anything in the middle.
>
> **[1:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=80)** As such, it will match file.txt, which is zero occurrences of a character.
>
> **[1:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=85)** It will match filea.txt which is one occurrence.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=89)** And file123.txt, which is multiple occurrences.
>
> **[1:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=93)** It will match zero or more characters in the middle of the file name.
>
> **[1:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=97)** The asterisk isn't our only glob.
>
> **[1:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=99)** A question mark matches any type of character, just like the asterisk, but only matches one of them.
>
> **[1:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=105)** This makes it more strict than the asterisk wildcard.
>
> **[1:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=108)** If we use the glob of file?.txt, it would match file1.txt and filea.txt.
>
> **[1:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=116)** It would not match file.txt because it matches exactly one character.
>
> **[2:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=120)** That character can be anything, but it needs to exist.
>
> **[2:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=125)** If you wanted to match file00.txt through file99.txt, you'd need more than one question mark.
>
> **[2:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=132)** This would match file00.txt and file99.txt just as we want.
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=138)** But it would also match fileab.txt because each question mark matches exactly one of any character.
>
> **[2:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=145)** If you want to be more specific about which character to match, you can provide a list by using a character set.
>
> **[2:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=151)** A character set matches just one character, just like the question mark.
>
> **[2:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=155)** But it can only be one of the characters listed inside the set.
>
> **[2:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=159)** To use a character set, you enclose the desired characters to match in square brackets.
>
> **[2:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=164)** For instance, to match file one, file two, and file three, but not file five, we can place one, two, three in between the square brackets.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=172)** This matches file1.txt, file2.txt, and file3.txt.
>
> **[2:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=178)** Note that this only matches one character, So it would not match file123.txt, even though it might seem like it should.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=185)** Although this character set is a list of numbers, they effectively make up a range because they're contiguous.
>
> **[3:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=192)** There's an easier way of specifying a range which can be done by placing a hyphen between the start and ending characters.
>
> **[3:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=198)** This matches file1, file2, and file3, just like the list did.
>
> **[3:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=202)** Ranges work for both numbers and letters.
>
> **[3:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=204)** Here we're matching only lowercase letters between a and Z.
>
> **[3:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=208)** To match uppercase letters, we just replace the a through z with uppercase versions.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=214)** In the past, you could combine the lowercase and uppercase ranges into one range, but I caution you not to do this.
>
> **[3:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=220)** Depending on the language and locale settings of your Linux installation, this may not get you what you want.
>
> **[3:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=226)** In many cases, lower and uppercase letters are not in the order you expect them to be in in the character map.
>
> **[3:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=232)** Even if you only specify uppercase or lowercase, you might get a mixture.
>
> **[3:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=237)** This index may not even work on a newer operating system, so I do not recommend it.
>
> **[4:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=242)** A better solution is to include both a lowercase range and an uppercase range in the same character set.
>
> **[4:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=248)** We can also combine ranges with lists.
>
> **[4:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=250)** For instance, to match file0 through file 9, plus filea, b, or c, we could combine them in one character set.
>
> **[4:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=258)** Notice that we've been using a hyphen in our ranges.
>
> **[4:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=262)** If you want to match the hyphen itself, then you need to include the hyphen at the beginning or end of the list of characters in the set.
>
> **[4:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=268)** This would match file.txt through file9.txt just like before.
>
> **[4:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=274)** But also it would match file-.txt.
>
> **[4:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=277)** We can negate characters to match by placing an exclamation mark or caret inside the set.
>
> **[4:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=283)** For instance, to not match a number between zero and nine, we'd place !0-9 in the set.
>
> **[4:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=290)** This would match filea, fileb, and filec, but not file1 or file9 because we negated the numeric match.
>
> **[4:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=299)** If you want more information about globbing, read the manual page for globbing in the seventh section of the manual.
>
> **[5:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/about-file-globs?u=76281980&t=305)** In a terminal, type "man 7 glob."

> [!info]- Semantic Content
>
> **File Paths:** file.txt (3), filea.txt (2), file123.txt (2), file1.txt (2), file00.txt (2)
> **Analogies:** for instance (4), just like (4)
> **Code Keywords:** let (2), match, (1), this. (1), match. (1)
> **CLI Commands:** tar (1), make (1)
> **Tools:** command line (1), terminal (1)
> **Warnings:** note that (1), caution (1)
> **Env Vars:** gui (1)
> **Exercise Files:** exercise files (1)

#### Using character classes
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=0)** - Linux also provides a mechanism for matching certain character classes.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=4)** A character class is a grouping of light characters.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=7)** For instance, letters, numbers, punctuation, and so on.
>
> **[0:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=11)** There is support for various character classes at Bash, so let's get into it.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=15)** Instead of including all characters you want to match, you could use a class.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=19)** To match whole numbers, use the digit character class.
>
> **[0:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=22)** This would be equivalent to using a range of zero through nine.
>
> **[0:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=25)** Sometimes the syntax is more complex using character classes, but they're ultimately more powerful and reliable than character sets alone, so I do recommend using them.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=35)** To match uppercase characters, we can use the upper class.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=38)** This is equivalent to uppercase A through Z.
>
> **[0:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=41)** For lowercase letters, use the lower class, which is equivalent to lowercase A through Z.
>
> **[0:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=47)** If you want to match both upper and lower case characters, use the alpha character class, which would be equivalent of lowercase A through Z and uppercase A through Z combined.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=57)** To match uppercase, lowercase, and digits, use the alphanumeric class, alnum.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=62)** This is equivalent to three ranges, lowercase A through Z, uppercase A through Z, and zero through nine.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=70)** These next examples are more complex to do without character classes.
>
> **[1:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=74)** To match all white spaces such as spaces, tabs, and new lines, use the space character class.
>
> **[1:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=80)** For printable characters, not including spaces, use the graph character class.
>
> **[1:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=84)** For printable characters, including spaces, use the print character class.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=89)** To match only punctuation, use the punct character class.
>
> **[1:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=93)** Notice how complex the character set equivalent is.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=96)** Using the punct class is just easier.
>
> **[1:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=99)** We can even match non-printable characters using the cntrl character class.
>
> **[1:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=104)** And lastly, to match hexadecimal characters, use xdigit.
>
> **[1:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=108)** To use character classes, we need to place them inside a character set.
>
> **[1:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=112)** As I said earlier, the equivalent of A through Z is the lower character class.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=117)** To use it, you'd actually type the character set and then put the class inside of it.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=122)** To match more than one character class, just include all desired classes inside the character set.
>
> **[2:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=127)** For example, to match both digits and spaces, we could place both the digit and space character classes inside a character set.
>
> **[2:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=135)** We can also negate a class just like you can with characters inside of a set.
>
> **[2:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=140)** To negate a character class, we need to place the negation character between the class and the character set.
>
> **[2:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=145)** For instance, if you wanted to match anything but numbers, you'd place an exclamation mark between the outer square brackets of the set and the inner scrub brackets of the digit character class.
>
> **[2:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=156)** Note that the exclamation point inside the outer square brackets negates everything in them.
>
> **[2:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=161)** For example, this line will match a filename starting with the word file followed by one character which cannot be a number or white space such as filea.txt and fileb.txt, because we're matching anything that's not a number or space.
>
> **[2:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=177)** If you want to read the manual page that describes globbing, you'll need to specify the glob man page in the seventh section.
>
> **[3:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-character-classes?u=76281980&t=183)** In a terminal, type in man 7 glob.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (10), class, (5), let (1), match, (1)
> **Analogies:** for instance (2), such as (2), for example (2), just like (1)
> **File Paths:** filea.txt (1), fileb.txt (1)
> **Tools:** bash (1), terminal (1)
> **Documentation:** man page (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)

#### Using globs to match files
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=0)** - [Instructor] For this exercise, we'll be using the globfiles directory that's included in this chapter's exercise files.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=6)** You'll want to change into that directory in the command line.
>
> **[0:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=9)** I extracted my exercise files into my home directory, so I'd type cd space tilde /ExerciseFiles/Chapter 1, Ch01,
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=21)** /globfiles and hit Enter.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=24)** Before we get started matching files, let's get a listing of this directory by typing in ls -1 and hit Enter.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=31)** This will list the files and only display one file per line.
>
> **[0:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=34)** We can see that we have a lot of files with various naming conventions.
>
> **[0:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=39)** We have files that start with the word photo, followed by a four-digit sequence number.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=44)** Then the date that includes the month, day and year and then followed by an extension of either .png, or .jpg.
>
> **[0:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=53)** We also have files that start with the word video, are followed by a sequence number, the date and end with .mpg.
>
> **[1:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=60)** You may also notice that some photo files are spelled with an uppercase P.
>
> **[1:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=64)** There are also some files with an exclamation mark in the name.
>
> **[1:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=67)** Note that these are not actually photo and video files but rather empty files that I created for this course.
>
> **[1:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=73)** Now let's use globs to match certain types.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=76)** First, let's use the asterisk to match all JPEG files named photo.
>
> **[1:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=80)** Type in clear and then type in ls photo*.jpg and hit Enter.
>
> **[1:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=87)** This matches any name that begins with photo, has any number of any characters in the middle and ends with .jpg.
>
> **[1:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=94)** Let's make the match a bit more precise.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=96)** For this example, we'll focus on files that start with the word photo, have a sequence number between 1,000 and 1,029 and end in .jpg.
>
> **[1:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=106)** Type in clear and then type in ls photo*10 left square bracket, 0-2, right square bracket.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=117)** Left square bracket, 0-9, right square bracket, *.jpg and hit Enter.
>
> **[2:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=125)** We can see that we're matching files 1,000 through 1,029.
>
> **[2:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=128)** Although we are missing the files that are spelled with an uppercase P.
>
> **[2:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=132)** Let's modify our glob to fix this.
>
> **[2:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=135)** Bring your line back by pressing the up arrow key and change the lowercase P to left square bracket, lowercase p, uppercase P, right square bracket and hit Enter again.
>
> **[2:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=149)** Now we're listing all files that start with photo with either a lower or uppercase P, have a sequence number between 1,000 and 1,029 and end with .jpg.
>
> **[2:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=160)** Now let's do something interesting.
>
> **[2:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=163)** Let's list photo or movie files from January 13th, 2021.
>
> **[2:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=168)** First, we'll address the name.
>
> **[2:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=169)** Since we have different names, we'll just use an asterisk.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=172)** Then we'll enter the date.
>
> **[2:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=174)** Type in clear, then type in ls * for the name and then for the date, 01-13.
>
> **[3:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=182)** Now we want to match .png, .jpg and .mpg files, so we'll use a couple of character sets.
>
> **[3:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=191)** Add asterisk, dot left square bracket, mpg, right square bracket.
>
> **[3:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=197)** Left square bracket, png, right square bracket, g and hit Enter.
>
> **[3:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=204)** This glob might look like gibberish, so let's take a look at how it works.
>
> **[3:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=209)** The first character set matches either m, j or p.
>
> **[3:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=213)** The second character set matches either p or n and the g matches g.
>
> **[3:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=219)** So this will match mpg, this will match jpg and this will match png.
>
> **[3:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=225)** Due to the limitations of standard file globs, it will also match ppg, mng and jng, which is probably not what we want.
>
> **[3:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=235)** To get a more precise match, you'll have to use other technologies, which we'll cover later in this course.
>
> **[4:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=241)** Let's talk for a moment about character classes.
>
> **[4:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=243)** I've included a couple of files in this directory that are easiest to match using character classes.
>
> **[4:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=248)** To exemplify this, type in ls photo, left square bracket, left square bracket, :punct for punctuation, colon, right square bracket, right square bracket, underscore asterisk and hit Enter.
>
> **[4:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=265)** This will list all files that start with photo and are followed immediately by a punctuation and then underscore followed by anything.
>
> **[4:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=273)** Here's another example.
>
> **[4:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=274)** Type in ls * left square bracket, left square bracket, :space: right square bracket, right square bracket, asterisk and hit Enter.
>
> **[4:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=287)** This lists files that have a space in their name.
>
> **[4:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=290)** Remember that we can also invert this match by including the exclamation point just inside the outer square brackets.
>
> **[4:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=297)** Bring your line back by pressing the up arrow key and add the exclamation point between the two left square brackets.
>
> **[5:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=308)** This will list all files that do not have a space in the name.
>
> **[5:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=311)** You can also use a caret instead of the exclamation point as well.
>
> **[5:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=315)** If you wanted to ignore the files that have the exclamation point in them and you try to use the same method, you may be surprised by the results.
>
> **[5:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=323)** Type in clear and then type in ls * left square bracket, exclamation point for negating the search and exclamation point to match, right square bracket, asterisk and hit Enter.
>
> **[5:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=338)** This doesn't work because the exclamation point is a special character, so it gets translated when we run it.
>
> **[5:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=343)** Putting quotes around the exclamation point that we want to match makes it work.
>
> **[5:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=347)** Type in ls space asterisk, left square bracket, exclamation for negating, single quote, exclamation for matching, single quote, right square bracket, asterisk and hit Enter.
>
> **[6:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=361)** This shows files without an exclamation point in the name.
>
> **[6:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=365)** Using globs on the command line is one of the greatest advantages over using a GUI, which at best has limited support for pattern matching.
>
> **[6:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=373)** The best way to become proficient at globs is to use them often.
>
> **[6:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=376)** In time, you'll be able to type them out as fast as you think about what you want to list.
>
> **[6:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=380)** Also keep in mind, globs work with all commands on the command line.
>
> **[6:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=384)** You can use them for copying, moving or deleting files.
>
> **[6:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=387)** You can use them to send certain files to an application for processing.
>
> **[6:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=391)** You can also use them to back up certain files.
>
> **[6:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=394)** The possibilities are almost endless.
>
> **[6:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/using-globs-to-match-files?u=76281980&t=397)** Standard globs do have their limitations but we'll address those in other videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), match, (2), this. (1), match . (1), this, (1)
> **CLI Commands:** ls (8), cd (1), make (1)
> **Tools:** command line (3)
> **Env Vars:** jpeg (1), gui (1)
> **Exercise Files:** exercise files (2)
> **Warnings:** note that (1), keep in mind (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)

#### Matching with brace expansion
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=0)** - [Instructor] We can match most files using standard globs but sometimes it gets a bit messy because we can only match one character at a time.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=7)** For instance, a character set with jm in it followed by pg will match both JPG and MPG.
>
> **[0:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=14)** That's simple enough.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=15)** However, if you want to match JPG and PNG, it's gets more complex and less precise.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=21)** We can use two character sets, one with jp and the other was pn followed by a lone g.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=27)** This will match JPG and PNG, but also JNG and PPG, which is not as precise as we'd like.
>
> **[0:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=36)** The Bash shell provides another technology called brace expansion that is not technically globbing but we can use it to our advantage.
>
> **[0:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=43)** Globbing is referred to as pattern matching.
>
> **[0:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=45)** When we use a glob, the shell looks for files that match the pattern in the file system.
>
> **[0:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=50)** Brace expansion is pattern creation because it expands to create a pattern as if we'd typed it in.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=55)** For instance, echo space left curly brace 1..10 right curly brace would print one through 10 on the screen.
>
> **[1:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=64)** It's not looking for files named one through 10, it just expands the text as if we'd written it out.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=70)** When we use brace expansion, it's creating a list whereas when we use a glob, it's searching the file system for matches.
>
> **[1:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=77)** Using brace expansion in conjunction with globs, we can solve our earlier extension problem.
>
> **[1:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=83)** Our glob was getting us results that we didn't want.
>
> **[1:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=86)** Using brace expansion, we can match .JPG and .PNG files easily.
>
> **[1:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=91)** What is happening is the shell is expanding the braces and passing the results to the ls command.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=96)** So, what gets processed is ls space *.JPG space *.PNG as if we'd typed it in.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=103)** Notice that the braces get processed first and the result is two globs, which then gets processed next.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=110)** To show a shortcoming of standard globs, let's revisit the example from earlier.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=115)** To show all files that start with a word photo and then a sequence number between 1000 and 1029 and then any number of characters and then ending with .JPG, we'd use this glob, which works perfectly fine.
>
> **[2:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=128)** Now, pause this video and modify the line to match files from 1000 to 1025.
>
> **[2:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=134)** After attempting it, resume this video and we'll talk about the results.
>
> **[2:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=139)** If you change the second character set to zero dash five, you will have noticed that it doesn't give you files 1000 through 1025.
>
> **[2:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=147)** In fact, 10 files are missing.
>
> **[2:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=150)** This is because it matches 1000 to 1005 and then 1010 to 1015, and then 1020 to 1025.
>
> **[2:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=160)** Clearly a glob alone won't work in this case because we have to use two character sets to match a double digit number and matching all of the zeros and all of the 10s but only half of the 20s is not possible using the method we tried.
>
> **[2:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=173)** Let's look at a solution using brace expansion.
>
> **[2:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=177)** By using brace expansion, the range expands zero zero to 25 directly, resulting in being able to match the numbers 1000 to 1025.
>
> **[3:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=187)** It recognizes double digit numbers, whereas character sets only match one number.
>
> **[3:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=191)** In fact, we could have put 1000..1025 in the braces and it would have still worked.
>
> **[3:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=199)** Another interesting feature of brace expansion is an increment number for sequences.
>
> **[3:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=203)** If you wanted to list every seventh JPEG file in this directory, you could provide an increment number.
>
> **[3:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=209)** The first photo 1000 would be listed and then because of the increment of seven the next photo listed would be 1007 and then 1014, 1021 and so on.
>
> **[3:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=220)** This is not possible with globs alone.
>
> **[3:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=223)** This would be useful for instance, in the case of listing system backup files created every Sunday.
>
> **[3:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=228)** Another example is, if you only wanted files that were even or odd numbered.
>
> **[3:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=233)** Although, we're currently talking about how to use patterns to match files, I'm going to give you a quick introduction into the power of brace expansion so you understand why you want to learn it.
>
> **[4:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=242)** Brace expansion differs from globs and that you can use them to create files.
>
> **[4:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=246)** For this exercise, let's make a directory.
>
> **[4:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=249)** Type in mkdir space bracefiles and hit Enter.
>
> **[4:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=254)** And then change into the directory by typing in cd space bracefiles, and hit Enter again.
>
> **[4:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=259)** Let's create five files named textfile1.txt through textfile5.txt.
>
> **[4:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=265)** We can't use a glob for this because globs only match what already exists.
>
> **[4:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=269)** Type in touch space textfile left curly brace 1..5 right curly brace dot txt, and hit Enter and then type in ls to list the files.
>
> **[4:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=282)** We can see that with brace expansion, we were able to create five files quickly.
>
> **[4:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=286)** We could use a glob to match them by typing in ls space textfile left square bracket one dash five right square bracket dot txt, and hit Enter.
>
> **[4:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=297)** Or we can just bring our touch line back and change touch to ls.
>
> **[5:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=305)** And use the brace expansion to match them.
>
> **[5:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=308)** In this way, brace expansion is acting like a glob.
>
> **[5:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=312)** Let me give you one more example.
>
> **[5:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=314)** If you want it to make directories for every year and month for the next decade very quickly, you can with brace expansion.
>
> **[5:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=321)** Type in clear and then type in mkdir space dash p, which makes the parent directors, if they don't exist, 20 left curly brace to 21..31 right curly brace forward slash left curly brace 01..12 right curly brace, and hit Enter.
>
> **[5:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=343)** Now, we'll view this structure with a tree command.
>
> **[5:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=345)** If it's not installed, you want to install it now.
>
> **[5:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=347)** To run it type in tree and hit Enter.
>
> **[5:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=350)** You should see a somewhat visual representation of the directory structure.
>
> **[5:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=355)** Although brace expansion is not pattern matching like globbing is we can often use it in the same manner or if we combine it with globbing, we can make pattern matching with globs even more powerful.
>
> **[6:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-with-brace-expansion?u=76281980&t=365)** I highly recommend that you learn brace expansion as it will allow you to work faster than ever.

> [!info]- Semantic Content
>
> **Env Vars:** jpg (6), png (4), mpg (1), jng (1), ppg (1)
> **CLI Commands:** ls (5), make (3), mkdir (2), cd (1)
> **Code Keywords:** let (5), match . (1)
> **Analogies:** for instance (3)
> **File Paths:** textfile1.txt (1), textfile5.txt (1)
> **Tools:** bash (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)

#### The Magic of extended globs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=0)** - [Instructor] Standard Globs handle the majority of common file matching needs.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=4)** However, there are times when more pattern matching power is necessary.
>
> **[0:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=8)** We might want to match more than one character at a time.
>
> **[0:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=11)** We may want to group patterns and specify how many occurrences of a pattern or group to match.
>
> **[0:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=17)** We might want to match this group or that group.
>
> **[0:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=20)** We may even want to invert a group and match everything that is not listed in the pattern.
>
> **[0:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=25)** For more powerful file globing Bash includes Extended Globs.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=31)** Extended Globs have been part of the Bash shell for more than 20 years and yet many experienced Linux's admins are unaware of their power and are quite surprised when they see them used.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=40)** As such, I have named this video, the Magic of Extended Globs.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=44)** One reason that Extended Globs may fly under the radar is that in some distributions they need to be enabled manually before you can use them.
>
> **[0:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=52)** Extended Globs, give you file Globing power similar to what regular expressions do for matching texts.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=57)** The syntax of Extended Globs is similar to regular expressions.
>
> **[1:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=61)** I want you to learn Extended Globs now so you can integrate them into your workflow and utilize the power they provide instead of learning workarounds that will need to be changed later.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=70)** It's important to learn the correct tool for the job from day one.
>
> **[1:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=75)** Here's how they work.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=76)** Extended Globs give you file Globing power similar to what regular expressions do for matching text.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=81)** As I go through the different Extended Glob operators, I will also reference the same function in regular expressions to show the similarities.
>
> **[1:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=88)** It isn't the purpose of this course to teach regular expressions but you will no doubt learn them later if you don't know them already.
>
> **[1:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=95)** Extended Globs are purposely similar to regular expressions and knowing one will help you learn the other.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=100)** So let's get into it.
>
> **[1:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=102)** To group together multiple characters into one pattern place parentheses around them.
>
> **[1:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=106)** For instance, to match abc, just place those letters between parentheses.
>
> **[1:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=112)** This functionality is the same with regular expressions.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=115)** To match multiple patterns, separate them by a pipe symbol, this is also the same was regular expressions.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=122)** We can also invert the match by prepending the pattern with an exclamation mark.
>
> **[2:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=127)** This will match anything but abc, many tools that use regular expressions, such as Grep have an invert function that matches the opposite of the pattern so there isn't a direct equivalent in regular expressions.
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=138)** Once you've decided what you want to match, then decide how many times you want to match it.
>
> **[2:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=143)** Extended Globs and Bash have some limitations in this area that are important for you to understand.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=148)** If you want to match zero or one occurrence of the pattern, then place a question mark before the parentheses, with a regular expression we'd placed a question mark after the group.
>
> **[2:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=158)** If you want to match exactly one occurrence of the pattern plays an at symbol before the parentheses.
>
> **[2:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=163)** This is similar to a character set in Extended Globs, but unlike the character set, we can match multiple characters.
>
> **[2:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=169)** In this case, we're matching exactly one occurrence of abc, with a regular expression, we don't need to specify exactly one match because this is the default.
>
> **[2:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=179)** To match one or more occurrences, plus before the apprentices, this will match one, two or more occurrences of ABC but not zero occurrences.
>
> **[3:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=187)** With a regular expression, we place a plus symbol after the group.
>
> **[3:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=192)** We can also combine the question mark, which is zero or one occurrence with a plus, which is one or more and match zero or more occurrences.
>
> **[3:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=200)** In Extended Glob we'd use an asterisk and we do an Extended Glob as well.
>
> **[3:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=204)** This'll match any number of occurrences of abc or zero currencies as well.
>
> **[3:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=209)** With regular expressions, we place the asterisk after the group, Let's walk through some examples of the power of Extended Globs.
>
> **[3:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=217)** In this example, we are matching files that start with the word photo followed by zero or more of any characters and ending in either .jpg or .png.
>
> **[3:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=226)** We're specifying the at symbol which matches exactly one occurrence of the pattern.
>
> **[3:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=231)** This means each file name will either end with .jpg or .png but not both, it will match exactly one.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=239)** To match zero or more occurrences, we want to use an asterisk.
>
> **[4:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=242)** In this example, it will match any line that starts with photo, has zero or more occurrences of the pattern of abc and ends in .jpg.
>
> **[4:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=251)** So it would match photo.jpg, which is zero occurrences of the pattern, photo abc.jpg, which is one occurrence and photoabcabc.jpg, which is multiple occurrences and so on, this matches zero or more occurrences of abc.
>
> **[4:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=269)** We can also invert the match by using the exclamation point before the parentheses.
>
> **[4:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=274)** This example will list all files that do not end in .jpg or .png including file.txt, photo.gif and archive.tar.gz.
>
> **[4:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=285)** Notice that I've moved the asterisk inside the pattern.
>
> **[4:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=288)** If I had placed the asterisk before the exclamation mark then it would match all files and the pattern would do nothing.
>
> **[4:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=295)** Keep an eye out for this behavior.
>
> **[4:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=297)** One more thing we can do with the Extended Globs is group patterns inside of other groups to create more complex logic.
>
> **[5:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=304)** This pattern looks a lot more cryptic, so let's break it down.
>
> **[5:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=308)** For the first group I'm matching any file that starts with the word photo with a lowercase or uppercase P.
>
> **[5:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=314)** I've prepended it with an at symbol to specify exactly what occurrence.
>
> **[5:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=318)** This pattern is followed by an asterisk which is a standard glob that matches any number of characters.
>
> **[5:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=323)** The second pattern matches a file ending either by .jpg or .png I have specified the at symbol here as well, so there can only be one or the other extension, not both.
>
> **[5:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=336)** I've grouped the entire pattern inside an additional set of parentheses and I've inverted the entire Extended Glob with an exclamation mark.
>
> **[5:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=344)** This will list any file that does not start with photo or end with .jpg or .png.
>
> **[5:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=349)** This lists all non-photo files in the directory.
>
> **[5:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=352)** In summary, I've gone down the Extended Glob rabbit hole, so you can have the tools necessary to match whichever files you want on the command line.
>
> **[6:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=360)** As a beginning learner of Linux, it may also give you an advantage against veteran Linux CIS admins who are unaware of this incredible functionality and have never integrated it into their workflow.
>
> **[6:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=371)** I encourage you to spend time with Extended Globs, so you become proficient in their use.
>
> **[6:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/the-magic-of-extended-globs?u=76281980&t=376)** Also remember that Globs raise expansion and Extended Globs work with any command on the command line, however, double-check that Extended Globs are enabled.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), match. (1), match, (1), case, (1)
> **Analogies:** similar to (5), for instance (1), such as (1)
> **Tools:** bash (3), command line (2)
> **CLI Commands:** grep (1), tar (1)
> **Env Vars:** abc (1), cis (1)
> **File Paths:** file.txt (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Matching files with extended globs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=0)** - [Instructor] For this exercise, be sure that you're in your globfiles directory.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=4)** For me, this path is slash home, slash user1, slash exercisefiles, slash ch01 for this chapter, slash globfiles.
>
> **[0:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=13)** You can see your paths by typing in pwd.
>
> **[0:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=17)** Extended globs may have to be turned on in your version of Linux.
>
> **[0:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=20)** To check if they're turned on, type into a terminal, shopt and hit enter.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=24)** Now look for the extglob shell option.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=27)** If extglob is not turned on, then type in shopt, space dash S, space extglob and hit enter.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=35)** To make this persistent, you need to put this line in your bashrc startup file.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=40)** Let's start exploring extended globs in a simple manner.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=44)** Type in clear and then type in ls space photo, at symbol, left parentheses and a pattern of abc, right parentheses dot jpg.
>
> **[0:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=56)** The at symbol says to match only one occurrence of abc which results in it matching photoabc.jpg.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=63)** Now let's change it to match zero or one occurrence of abc.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=66)** Bring your line back by pressing your up arrow key and change the at symbol to a question mark.
>
> **[1:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=72)** This matches one occurrence just like the at symbol but also matches zero occurrences.
>
> **[1:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=77)** The result is photoabc.jpg like before, as well as photo.jpg.
>
> **[1:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=84)** The next step is to loosen up the matches a bit more.
>
> **[1:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=87)** Let's change the question mark, which matches zero or one, to the plus symbol, which matches one or more.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=96)** The result is photoabc.jpg, like both of our previous examples as the plus matches one occurrence but it also matches photoabcabc.jpg because it matches multiple occurrences.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=110)** Now we'll loosen it up even more.
>
> **[1:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=112)** Replace the plus symbol with an asterisk symbol.
>
> **[1:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=116)** This should match zero or more occurrences so we should see all three files, which it does.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=121)** Now, let's invert the match by replacing the asterisk with an exclamation mark.
>
> **[2:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=127)** This matches all files that start with photo and end with dot JPG that do not have 1abc in their name.
>
> **[2:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/matching-files-with-extended-globs?u=76281980&t=135)** These are pretty simple examples but it's important to understand all five operators before we move on to more complex examples.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **CLI Commands:** make (1), ls (1)
> **Env Vars:** jpg (1)
> **Tools:** terminal (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Advanced extended globs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=0)** - [Instructor] We'll be running these commands in our globfiles directory again.
>
> **[0:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=3)** For me, that is in /home/user1/ExerciseFiles/ Ch01 for chapter one, /globfiles.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=12)** Let's do something standard globs can't do.
>
> **[0:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=14)** Let's create two patterns matching the beginning and the end of a file name, and then group that together and invert it.
>
> **[0:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=20)** Type in ls -d !, left parentheses, @, left parentheses, photo|video, right parentheses *@, left parentheses.jpg|.png, right parentheses, right parentheses.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=42)** Take a moment to visualize what this will show.
>
> **[0:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=45)** When done, press Enter.
>
> **[0:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=47)** Is the output what you expected?
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=49)** At first glance, it may look like this would not list any files that start with photo or video, or in with .jpg or .png, but we see files in our output that start with video and photo, so what's going on?
>
> **[1:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=61)** Let's analyze this extended glob.
>
> **[1:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=64)** Our first pattern matches the word photo or the word video and specifies that exactly one has to be present.
>
> **[1:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=71)** The second pattern matches .jpg or .png, and once again, specifies exactly one has to be present.
>
> **[1:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=78)** Then we group together both patterns and invert the match with the outer parentheses and exclamation mark, also, we have to specify the -d directory option to stay in the current directory and not recurse into others.
>
> **[1:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=90)** This extended glob is smarter than it appears, because we grouped both patterns into one, it is looking at the whole pattern.
>
> **[1:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=97)** So it is matching any files that start with photo and end with .jpg or .png, but it's also looking for any files that start with video and end with .jpg or .png.
>
> **[1:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=108)** The files in our output start with video and end with the mpg, so they don't match the pattern and thus are not suppressed.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=115)** We also have files that start with photo with an uppercase P with .jpg, so they also don't match and are shown in the output.
>
> **[2:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=123)** Let me show you another example of what extended globs can do that regular globs can not.
>
> **[2:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=128)** I will revisit an earlier example where standard globs failed.
>
> **[2:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=132)** If we want to list all JPEG photo files with sequence numbers between 1000 and 1025 using a standard glob, it might look like this.
>
> **[2:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=140)** The problem is that this will get files numbered 1000 through 1005, 1010 through 1015, and 1020 through 1025.
>
> **[2:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=150)** We're missing files in the middle.
>
> **[2:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=151)** I've discussed this problem in depth in another video so I won't spend more time on it.
>
> **[2:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=156)** Let's create an extended glob to get us what we want.
>
> **[2:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=159)** For this, we'll create three different patterns and place them in a group separated by pipe symbols.
>
> **[2:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=164)** For the first pattern we'll match zero and then a character set with a range of zero through nine, this matches 1000 through 1009.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=172)** The second pattern will match one and a character set with a range of zero through nine, this mattress files 1010 to 1019.
>
> **[3:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=180)** For the third pattern will match a two and a character set with a range of zero through five, this will match files 1020 to 1025.
>
> **[3:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=188)** Now, since we only want to match one of these patterns, we'll use an at symbol as the occurrence operator.
>
> **[3:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=193)** Let's try it out.
>
> **[3:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=196)** In your terminal type in clear, and then type in ls -1, we'll use the -1 option of ls, so it lists one file per line, photo_10@, left parentheses, 0[0-9], that's the first pattern, |1[0-9], that's the second pattern |2[0-5], that's the third pattern, right parentheses, *.jpg.
>
> **[3:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=231)** When you're done typing in the extended glob, hit Enter.
>
> **[3:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=235)** We can see that this worked.
>
> **[3:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=236)** With an extended glob, we were able to match JPEG photo files with sequence numbers between 1000 and 1025.
>
> **[4:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=243)** Don't worry if it takes time to create more complex globs, the important part is that you know they exist and that in time you will be able to whip out these globs without a problem.
>
> **[4:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/advanced-extended-globs?u=76281980&t=253)** I do think extended gloves are worth the effort to learn, and they'll give you a head start when you learn regular expressions due to their similarity to that method of pattern matching text.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (1), this, (1)
> **CLI Commands:** ls (3)
> **Env Vars:** jpeg (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### Manage Linux Files

#### Understanding filesystem paths
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=0)** - [Instructor] Files in a computer are organized in a hierarchical directory tree, in Linux the base of this tree is called the root and is represented by the forward slash, I often refer to this directory as slash or the top level directory to avoid confusion with the user named root.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=15)** Under slash or the other directories in the operating system including bin, boot dev, etc and home among others.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=23)** I discuss all of the Linux directory tree in depth in another course, for this course I will just cover how to get around the file system and to know where you are.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=33)** It's difficult to visualize where you are in a file system, when you're using the command line, however, there is a command that can assist you called tree.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=40)** Type in tree + space slash etc, and hit Enter.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=44)** By default tree recurses in the directories and gives us a nice directory tree to look at.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=49)** Tree is not a replacement for ls as it doesn't give us colors or file details but it can be a handy tool to visualize the directory structure.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=57)** To navigate the file system, we use the change directory command.
>
> **[1:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=61)** Let's change directory to slash our top level directory.
>
> **[1:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=64)** First type in clear, then hit Enter.
>
> **[1:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=67)** In Linux, all files are in slash as this is the root of the directory tree, type in cd + space forward slash and hit Enter.
>
> **[1:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=75)** Type pwd to print your working directory.
>
> **[1:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=79)** Pwd always tells you where you are.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=81)** Your working directory is also called your current path.
>
> **[1:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=86)** There are a few path shortcuts we can use with cd and other commands, type in cd + space + Tilde and hit Enter, and then type in pwd to see where you are.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=96)** You can see that this takes you back to your home directory, now type in cd + Space dot dot and hit Enter.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=103)** And once again, type in pwd, this takes you up one level to the parent directory.
>
> **[1:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=108)** For instance I was just in slash home slash user1 and I typed cd space dot dot and it took me back to slash home, dot dot is your parent directory, now type in cd + space + hyphen and hit Enter.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=122)** This takes you back to the previous directory that you were just in.
>
> **[2:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=126)** I find this a very useful feature and perhaps underutilized by Linux users.
>
> **[2:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=131)** It lets me bounce between two directories as needed.
>
> **[2:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=134)** For instance I can be in the web server configuration directory, editing server config files, and then quickly jump to my web service HTML file location.
>
> **[2:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=142)** When I want to go back to the config directory, I just type in cd + space + hyphen.
>
> **[2:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=147)** When I went to edit HTML files, I type in cd + space + hyphen again, this saves a lot of time.
>
> **[2:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=153)** One last the thing we have to discuss is absolute and relative paths.
>
> **[2:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=158)** An absolute path always starts with a forward slash and absolutely describes where something is.
>
> **[2:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=163)** For instance, the absolute path through the child directory is slash home, slash user1, slash newdir, slash parent, slash child.
>
> **[2:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=171)** If I wanted to change to this directory from anywhere using the absolute path, I'd type cd + space slash home, slash user1, slash newdir, slash parent, slash child.
>
> **[3:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=182)** The absolute path works every single time you use it, no matter where you are, but can involve a lot of typing.
>
> **[3:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=188)** A relative path is relative to where you are.
>
> **[3:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=191)** A relative path never starts with a forward slash, if I'm loading as user1, then I'll be in slash home slash user1.
>
> **[3:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=198)** If I then wanted to change to the child directory, I could just type in the portion the absolute path that is left.
>
> **[3:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=204)** In this case I'd type cd + space newdir slash parent, slash child.
>
> **[3:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=211)** This path is relative to where I am.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=214)** If I were in a different directory and I typed the same, it wouldn't work, the relative path changes depending on where you are the absolute path does not.
>
> **[3:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=223)** You always have two choices of paths when changing directories, the absolute which always works, but is longer to type and the relative which can sometimes be confusing, but is much shorter.
>
> **[3:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=234)** If you have trouble deciding if you should start the path with a slash or not just type in ls, if you see the directory in front of you, then you don't need a slash.
>
> **[4:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=244)** We will use the commands in this video, more than any other in this course.
>
> **[4:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=248)** So it's important to be comfortable with understanding absolute and relative paths.
>
> **[4:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/understanding-filesystem-paths?u=76281980&t=252)** Also be sure to memorize the paths shortcuts as they cut down on your typing quite a lot.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (10), ls (2), find (1)
> **Analogies:** for instance (3)
> **Env Vars:** html (2)
> **Definitions:** is called (1), is a  (1)
> **Code Keywords:** let (1)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### Creating files and dirs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=0)** - It's difficult to use an operating system for very long before you need to create files and directories.
>
> **[0:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=5)** We're going to start out creating directories and then move on to files.
>
> **[0:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=9)** To create a directory or folder, we'll use the "mkdir" command.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=12)** Type in "mkdir ~/newdir" and hit enter.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=18)** And then verify by typing in "ls - l ~" and hit enter again. Tilde is the shortcut to your home directory. You can see the new "Dir" directory in the output. To keep this exercise contained, let's change into our new directory before making any more files or directories.
>
> **[0:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=36)** Type in "cd ~/newdir/" and hit enter.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=40)** If you see a trailing "slash" from a command line, it means I'm doing a shortcut and hitting my tab key, and the shell fills out the line for me.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=49)** You can always double check your path by typing in "PWD" and hit enter.
>
> **[0:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=54)** You can always double check your paths by typing in PWD which gives you the absolute path from the top level directory.
>
> **[1:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=61)** The "MK DIR" command can create multiple directories but if we try to create an entire directory tree and some of the path doesn't exist, MK DIR will complain.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=70)** Let's create a directory inside of another directory type in "clear" then type in "mkdir parent/child" and hit enter. The reason this gives an error is that the parent directory doesn't exist yet, so mkdir cannot meet the child directory inside of it. notice that we did not provide a path to the parent directory.
>
> **[1:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=90)** This means we're using the relative path and we intend on creating "parent" inside the directory we're IN.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=96)** "mkdir" does have an option to create parent rectories though, type in "mkdir - p (for parent) parent/child" and hit enter And to verify we'll use the tree command. Type in "tree", and we can see our new nested directory tree.
>
> **[1:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=114)** You can use braise expansion outlined in another video of this course to create multiple files or directories at one time.
>
> **[2:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=120)** Type in "mkdir (dir 1,dir2,dir3)"
>
> **[2:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=130)** and hit enter.
>
> **[2:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=132)** Now verify with "LS", type in "ls -d dir?"
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=138)** I use the "-D" option to get LS to show directory metadata instead of showing the directory contents.
>
> **[2:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=144)** Notice that I used a question mark glob for the last digit. I could have also used a character set such as "left square bracket zero dash nine, right square bracket".
>
> **[2:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=153)** We can use applications like text editors, such as "VIM or Gedit" to create files just the same as we would on other operating systems. I'll use VIM for this exercise.
>
> **[2:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=164)** In a terminal type in "clear", and then type in "vim.textfile.txt" and hit enter.
>
> **[2:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=171)** "VIM" is a command line editor. we're in VIM and notice the bottom line says it's a new file and that the name is "textfile.txt".
>
> **[3:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=180)** We can add text by going into the "insert mode" by pressing the "insert" key or the "I" key.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=185)** Notice your bottom line now says insert.
>
> **[3:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=188)** You can start typing.
>
> **[3:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=193)** to saving quit press escape, colon, "w" for writing, and "q" for quit.
>
> **[3:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=201)** To verify that we have a file type in "ls -l" and hit enter.
>
> **[3:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=206)** Listing with LS will display the contents of my current directory, including the attributes of this file. For a simple text files, we can create them easier using a redirect. Type in "echo "A new line" >> textfile.txt"
>
> **[3:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=228)** and hit enter.
>
> **[3:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=229)** This will append the text a new line to the end of the text file That TXT file.
>
> **[3:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=234)** Had I used one "greater than symbol" instead of two, it would have overwritten the file. Using two "greater than" symbols allows us to append to the end of the file.
>
> **[4:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=243)** You can verify this by using the cat command to view the file.
>
> **[4:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=247)** Type in "cat textfile.txt" and hit enter.
>
> **[4:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=252)** If all we want is an empty file, we can use the "touch" command.
>
> **[4:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=255)** Type in "touch.emptyfile.txt" and hit enter.
>
> **[4:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=260)** Now verify by typing in "ls -l" and hit enter again.
>
> **[4:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=265)** We can see that we have a file called "emptyfile.txt" and then it has a size of zero bytes since there's nothing in it.
>
> **[4:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-files-and-dirs?u=76281980&t=271)** The touch commands real job was to update the timestamp of a file, but as a file doesn't exist, it creates it.

> [!info]- Semantic Content
>
> **CLI Commands:** mkdir (7), ls (7), cat (2), cd (1)
> **Env Vars:** vim (4), pwd (2), dir (2), txt (1)
> **Tools:** vim (5), command line (2), terminal (1)
> **File Paths:** textfile.txt (3), vim.textfile.txt (1), touch.emptyfile.txt (1), emptyfile.txt (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **Speakers:** - it (1)

#### Copying files and dirs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=0)** - [Instructor] Everyday file management requires us to copy files and directories.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=4)** We can do these tasks from the GUI but they're usually faster on the command line.
>
> **[0:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=9)** Let's look at the syntax of the copy command.
>
> **[0:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=11)** The command name is cp.
>
> **[0:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=13)** The options can take the form of single letters, proceeded by a hyphen or complete words proceeded by two hyphens.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=19)** If they are a single letters, they can be combined into one sequence, for instance, dash pf.
>
> **[0:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=25)** The source path is the path to the file you want to make a copy of.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=29)** The paths can either be absolute or relative.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=31)** In this example, I've used the relative path with the tilde shortcut to my home directory.
>
> **[0:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=36)** If you want a copy of multiple files just separate them with spaces.
>
> **[0:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=39)** You can also use file globbing or brace expansion covered in this course to match multiple files.
>
> **[0:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=46)** The destination path is where you want the file copied to.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=49)** Just like the source path, this can either be absolute or relative.
>
> **[0:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=53)** In fact, you can combine relative and absolute paths for source and destination files.
>
> **[0:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=59)** However, there can only be one destination file.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=62)** In my example, I'm copying the file named document.txt to my usbdrive, I'm naming the copy doc-copy.txt.
>
> **[1:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=71)** If however, I wanted to keep the name the same, I wouldn't need to provide it in the destination path and would just copy it to the directory.
>
> **[1:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=79)** In a terminal, let's create a directory to create files inside using the mkdir command.
>
> **[1:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=84)** Type in mkdir space tilde slash copyexercise, and hit Enter.
>
> **[1:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=90)** Now, change into it.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=92)** Type in cd space tilde slash copyexercise.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=96)** A nice shortcut is to type in tilde slash cop and hit your Tab key.
>
> **[1:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=101)** The shell will fill out the line for you.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=103)** This is why my lines end with a slash.
>
> **[1:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=106)** You can verify your path using the print working directory command.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=110)** Now, let's create some files to copy using touch.
>
> **[1:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=113)** Touch's job is to change at the timestamps but if the file we want to change doesn't exist, it creates an empty file.
>
> **[1:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=119)** That is all we need for this exercise.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=122)** Type in touch space file.txt, and hit Enter.
>
> **[2:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=126)** Now, let's make a copy of this file by typing at cp space file.txt space file-copy.txt and hit Enter.
>
> **[2:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=136)** Verify using ls space dash l.
>
> **[2:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=141)** We should see that we have both file.txt and file-copy.txt.
>
> **[2:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=147)** We can specify a directory as a destination as well.
>
> **[2:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=150)** Let's make a director using mkdir.
>
> **[2:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=152)** Type in mkdir space archive and hit Enter.
>
> **[2:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=156)** Now, let's a copy file.txt to archive.
>
> **[2:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=159)** Type in cp space file.txt space archive and hit Enter, and verify with tree.
>
> **[2:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=167)** We can see that a copy of file.txt is in the archive directory because we did not specify the name, the copy kept the original name of file.txt.
>
> **[2:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=176)** You could change the name while copying, let's specify it.
>
> **[3:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=181)** Bring your copy line back and add to the end of it, file-copy.txt and hit Enter, and verify it with tree.
>
> **[3:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=191)** If we run the same command line again, it will overwrite the destination file without a warning.
>
> **[3:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=197)** Use your up-arrow key to get your previous line back and hit Enter.
>
> **[3:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=202)** If you want Linux to warn you, you can add the dash i option, bring your line back again, and between cp and file, type in dash i space and hit Enter.
>
> **[3:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=212)** Now, it will warn you if it's going to overwrite a file.
>
> **[3:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=216)** When it comes to copying a directory, things are a bit different.
>
> **[3:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=220)** Let's make a copy of the archive directory and call it backup.
>
> **[3:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=223)** Type in clear, then type in cp space archive space backup and hit Enter.
>
> **[3:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=231)** We get an error message saying that cp is omitting archive.
>
> **[3:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=235)** This is not a very helpful message.
>
> **[3:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=237)** But what it's saying, is that we didn't tell cp to enter the directory and copy the contents.
>
> **[4:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=242)** To do so, add the recursive option.
>
> **[4:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=245)** Bring your line back and add between cp and archive, dash capital R space, and hit Enter.
>
> **[4:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=252)** And once again, verify with tree.
>
> **[4:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=256)** I'm not going to cover every option of the cp command but a couple of options that I use are dash a for archive, which preserves all metadata, dash u to only copy files if the newer than the destination, and dash capital R copies recursive.
>
> **[4:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=270)** This is necessary for directories.
>
> **[4:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/copying-files-and-dirs?u=76281980&t=273)** For more information, check the man page for cp, by typing in man space cp.

> [!info]- Semantic Content
>
> **CLI Commands:** cp (11), make (4), mkdir (4), cd (1), ls (1)
> **File Paths:** file.txt (7), file-copy.txt (3), document.txt (1), doc-copy.txt (1)
> **Code Keywords:** let (8)
> **Tools:** command line (2), terminal (1)
> **Analogies:** for instance (1), just like (1)
> **Env Vars:** gui (1)
> **Documentation:** man page (1)
> **Warnings:** warning (1)

#### Moving and renaming files and dirs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=0)** - [Instructor] The syntax for the move command is mv, which is the command name, followed by options.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=6)** The options can take the form of single letters, proceeded by a hyphen, or complete words proceeded by two hyphens.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=12)** If they are single letters, they can be combined into one sequence.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=15)** For instance, -uf.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=18)** The source file is the path of the file you want to move.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=21)** The path can be either absolute or relative.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=24)** In this example, I've used a relative path with until the shortcut to my home directory.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=29)** If you want to move multiple files, just separate them with spaces.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=33)** You can also use file globbing or brace expansion covered in this course to match multiple files.
>
> **[0:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=39)** The destination path is where you want to move the file to.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=42)** Just like the source path, this can be an absolute or relative path.
>
> **[0:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=46)** In fact, you can combine relative and absolute paths for source and destination files.
>
> **[0:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=52)** However, they're going to only be one destination path.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=55)** In my example, I'm moving the file named "document.txt" to my USB drive at /media/usbdrive.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=62)** So far, this has been nearly identical to the copy command but there are some important differences that we need to talk about.
>
> **[1:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=69)** When Linux copies a file to a new location, it copies the file data blocks to the new location on the disk.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=76)** When moving a file from one file system to another, for instance, from the OS drive to a USB drive, Linux copies the data blocks to the new location, just like before.
>
> **[1:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=86)** And then deletes the original data blocks.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=89)** If however, the source and destination are on the same file system, Linux treats the file differently.
>
> **[1:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=95)** If we want to move a file from /home/user1 to /home/user2, the operation would happen instantaneously.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=103)** Since both of these locations are on the same hard drive, Linux just updates the file location in the file system metadata.
>
> **[1:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=111)** The file takes up exactly the same data blocks and has the same index number.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=115)** You just access it from a new path.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=117)** This is very fast because no data is actually been moved on the disk.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=122)** In my example, I moved the document.txt file to the USB drive, but did not specify a file name, thus the name will not change.
>
> **[2:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=131)** If I want to move the file to a new location and change the name, then I just specify the new name such as doc-jan.txt.
>
> **[2:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=140)** What is interesting about this, is that we can also move a file from a directory to the same directory by leaving off the source and destination paths.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=148)** This works as long as we specify a different name.
>
> **[2:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=151)** It effectively renames the file.
>
> **[2:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=153)** As such, in Linux, we use the mv command to rename files.
>
> **[2:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=159)** Let's put this to use.
>
> **[2:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=160)** In a terminal, let's make a directory to create files in using the *mkdir command.
>
> **[2:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=165)** Type in mkdir -/moveexercise, and hit enter.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=172)** And then change into it by typing in CD space
>
> **[2:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=174)** - /moveexercise/ and hit enter again.
>
> **[2:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=179)** Now let's create a file and a directory haven't touched space file.txt and then for the direct rate type in mkdir space filedir and hit enter and now move the file into the directory, type in MV space file.txt space filedir and hit enter.
>
> **[3:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=200)** Verify with tree.
>
> **[3:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=203)** We can see that file.txt is now inside of filedir.
>
> **[3:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=208)** To rename a file, The source and destination paths are the same.
>
> **[3:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=211)** Let's create another file using touch.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=214)** Haven't touched space, newfile.txt and then rename it type in mv space newfile that's the source space and the destination will be renamed file.txt and hit enter.
>
> **[3:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=230)** In contrast to the CP command, we don't have to specify recursive to move whole directories with mv, just type in mv space, filedir space new filedir and hit enter, and then use LS to verify.
>
> **[4:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/moving-and-renaming-files-and-dirs?u=76281980&t=245)** For more information on the mv command, check the man page by typing in man space mv.

> [!info]- Semantic Content
>
> **CLI Commands:** mv (8), mkdir (3), make (1), cd (1), cp (1)
> **File Paths:** file.txt (4), document.txt (2), doc-jan.txt (1), newfile.txt (1)
> **Code Keywords:** let (4), this, (1)
> **Analogies:** for instance (2), just like (2), such as (1)
> **Env Vars:** usb (3)
> **Documentation:** man page (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Deleting files and dirs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=0)** - We have a couple of commands dedicated to removing files and directories, namely rm and rmdir.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=7)** You may want to note that on the command line, Linux does not have a recycle bin.
>
> **[0:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=11)** If you delete a file, it is for all practical purposes, deleted.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=15)** Be careful.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=15)** Recovering files requires extra work.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=18)** Let's create a directory for this exercise.
>
> **[0:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=20)** Type in "mkdir ~/rmexercise" and hit enter.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=27)** Now let's change into it by typing in "cd ~/rmexercise" and hit enter again.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=33)** You can verify your path by typing in "pwd."
>
> **[0:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=36)** Now that we have a directory and we've changed into it, let's create some files.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=40)** Type in "mkdir dir {1,2}" and hit enter.
>
> **[0:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=48)** Now, type in "touch dir1/file1.txt" and hit enter.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=55)** And lastly, type in "touch file { a, b, c, d} .txt and hit enter.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=66)** Here, I'm using brace expansion to create dir1 and dir2, as well as file a, file B, file C, and file D .txt.
>
> **[1:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=75)** We can verify the directory structure by typing in "tree."
>
> **[1:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=79)** We see two directories and about five files.
>
> **[1:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=82)** Let's begin by removing "filea.txt," using rm.
>
> **[1:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=86)** First, type in "clear" and then type in "rm filea.txt" and hit enter.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=92)** If it doesn't prompt you, then interactivity is turned off.
>
> **[1:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=95)** To turn it on, use the dash I flag.
>
> **[1:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=98)** Type in "rm -i fileb.txt" and hit enter.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=103)** Now we have to enter why to remove fileb.txt.
>
> **[1:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=107)** In another video in this course, we discuss how to turn on interactivity by default for destructive operations.
>
> **[1:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=113)** I'd recommend doing this because un-deleting files on Linux can be difficult.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=117)** Press "Y" and hit enter.
>
> **[1:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=119)** To delete a directory, we can use rm dir.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=121)** Type in "rmdir dir2" and hit enter.
>
> **[2:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=126)** Now delete dir1.
>
> **[2:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=127)** Type in "rmdir dir1" and hit enter.
>
> **[2:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=132)** We get an error message when using rmdir and dir1.
>
> **[2:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=135)** The reason for this is rmdir only deletes empty directories.
>
> **[2:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=139)** I recommend always trying to delete a directory with rmdir first.
>
> **[2:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=143)** Given it's not empty, it will warn you and give you a second chance to save your files.
>
> **[2:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=147)** Also, remember that hidden files in the directory will keep rmdir from removing it.
>
> **[2:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=153)** To delete a directory with files in it, we have to use rm with a recursive option.
>
> **[2:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=157)** Let's also turn on interactivity so we can see what's going on.
>
> **[2:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=161)** Type in "clear" then type in "rm - RI dir1" and hit enter.
>
> **[2:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=167)** It's prompting us to descend into the directory named dir1.
>
> **[2:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=170)** Type "Y" and hit enter.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=172)** Now it's prompting us to remove file1.txt.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=175)** Press "Y" and hit enter again.
>
> **[2:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=177)** And lastly, it's prompting us to remove the now empty dir1.
>
> **[3:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=181)** Press "Y" and hit enter.
>
> **[3:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=184)** Let's do a directory list to see which files we have left.
>
> **[3:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=187)** To delete the remaining two files, we could use an asterisk wildcard such as "rm *."
>
> **[3:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=193)** I really don't recommend doing this especially with interactivity turned off as it will delete all files in the current directory.
>
> **[3:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=199)** If you accidentally did this in slash, it would delete your entire operating system if you ran it as route.
>
> **[3:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=205)** I recommend making your pattern matching more precise.
>
> **[3:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=208)** Type in "rm file[Cd] .txt and hit enter.
>
> **[3:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=215)** Now the specific files were deleted.
>
> **[3:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/deleting-files-and-dirs?u=76281980&t=218)** For more information on the rm command, see the man page by typing in "man rm."

> [!info]- Semantic Content
>
> **CLI Commands:** rm (11), mkdir (2), cd (2)
> **Code Keywords:** delete (8), let (6)
> **File Paths:** filea.txt (2), fileb.txt (2), dir1/file1.txt (1), file1.txt (1)
> **Warnings:** note that (1), be careful (1)
> **Documentation:** man page (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Speakers:** - we (1)

#### Creating links to files and dirs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=0)** - [Instructor] When organizing your workspace, it can be advantageous to create links or shortcuts to your files and directories.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=6)** For instance, you could have a link in your home directory called Netdrive, that points to a network drive that's at /media/network/servers/user1/files.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=15)** This saves time browsing to it as it's a shortcut right in your home directory.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=19)** You could also have a link in your home directory called Photos that points to a photo directory, deep within the operating system.
>
> **[0:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=26)** We have two different kinds of links, symbolic links and hard links.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=29)** We'll start out by creating hard links.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=31)** In a terminal, let's create a directory for this exercise by typing in mkdir space tilde slash lnexercise and hit Enter.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=40)** Now, change into it by typing in cd space tilde slash lnexercise and hit Enter again, and verify your path with pwd.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=49)** Now, let's create a file by typing in touch space file.txt, and a directory by typing in mkdir space archive.
>
> **[0:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=59)** Now, type clear and verify with ls space dash l.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=63)** Now, let's create a hard link to file.txt and name the hard link filelink.txt.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=70)** Type in ln space file.txt space filelink.txt.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=76)** The syntax is ln space, what you're linking to, space, what you want to call the link, so in our case, what we're linking to is file.txt and the link name is filelink.txt, hit Enter and then verify with ls space dash l.
>
> **[1:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=93)** You'll notice that all attributes are exactly the same between file.txt and filelink.txt, even the timestamp.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=100)** The reason for this is that file.txt and filelink.txt are the same file.
>
> **[1:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=106)** When we create a hard linked, it creates another name that points to the same data blocks that even have the same index node or inode number.
>
> **[1:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=113)** It looks like we have two files but in fact, we have one file with two different paths.
>
> **[1:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=118)** The advantages of hard links are that hard links take virtually no space on the disk and are completely transferred it to the operating system and applications.
>
> **[2:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=127)** If you delete a hard-link file, it doesn't leave behind a broken link.
>
> **[2:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=131)** There isn't any speed degradation using hard links because accessing the file as either name takes exactly the same amount of time.
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=138)** There are also disadvantages to using hard links.
>
> **[2:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=142)** You can only hard-link files and not directories because hard linking relies on creating a new path to the same data.
>
> **[2:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=149)** You cannot hard link across files system boundaries, such as different drives or partitions.
>
> **[2:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=154)** Hard links are also transparent, which is good for the most part.
>
> **[2:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=158)** They're so transparent in fact that they're more difficult to identify.
>
> **[2:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=162)** In order to free the data blocks to a file, you have to remove all inodes pointing to it.
>
> **[2:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=167)** In the case of hard links, you have to remove all hard links before the data of blocks are freed.
>
> **[2:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=173)** You may have noticed that both file.txt and filelink.txt have two inodes in the second column.
>
> **[2:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=179)** Normally files have one inode, so this is your hint that it has a hard link.
>
> **[3:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=183)** We can verify this with the stack command.
>
> **[3:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=186)** Let's run the stack command on both files.
>
> **[3:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=188)** Type in stat space file.txt and stat space filelink.txt and hit Enter.
>
> **[3:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=196)** Stat shows up they both have two links, meaning two inodes and that the inode for both is exactly the same number.
>
> **[3:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=202)** This tells us that these files are hard linked.
>
> **[3:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=205)** The second type of link is a symbolic link.
>
> **[3:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=208)** This is a file that points to another file.
>
> **[3:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=210)** Let's create a symbolic link that points to file.txt, first type in clear and type an ln space dash s for symbolic, file.txt and we'll name the link filesymlink.txt, and hit Enter.
>
> **[3:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=225)** Now, let's verify with a long list by typing in ls space dash l and hit Enter again.
>
> **[3:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=231)** We can see that the long list shows what the symbolic link points to.
>
> **[3:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=235)** Also the symbolic link has a size that's different from the original file.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=239)** Its permissions are also drastically different at read, write execute, read, write, execute and read, write, execute.
>
> **[4:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=246)** This just means that when you access the link it passes onto the real file and the permissions on the real file are enforced.
>
> **[4:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=252)** Now, let's delete the original file and see what happens.
>
> **[4:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=256)** Type in rm space file.txt, and hit Enter and verify with ls space dash l.
>
> **[4:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=264)** Notice that the symbolic link is broken and has turned red but the hard link still looks fine.
>
> **[4:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=270)** You may also notice that the inode number on the hard link has gone to one.
>
> **[4:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=273)** Let's remove the broken link.
>
> **[4:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=275)** Type in rm space filesymlink.txt and hit Enter.
>
> **[4:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=281)** There are a few advantages to symbolic links.
>
> **[4:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=283)** You can link across file systems.
>
> **[4:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=286)** This means you can create symbolic links or shortcuts to network drives or even files on different partitions.
>
> **[4:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=291)** You can link to directories, which I find very useful.
>
> **[4:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=294)** Whenever I'm working on a project and the directory is deep in the file system, I created symbolic link in my home directory.
>
> **[4:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=299)** This allows me to access my project quickly.
>
> **[5:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=302)** When I moved to a different project, I just changed the link.
>
> **[5:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=305)** Symbolic links are also easy to identify using ls space dash l.
>
> **[5:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=310)** The disadvantages of symbolic links include the fact that they take up a small amount of disk space.
>
> **[5:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=315)** It really is minuscule and probably not a big deal but you should know.
>
> **[5:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=319)** They break if the target is deleted.
>
> **[5:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=321)** You will know because the link becomes red.
>
> **[5:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=324)** Also symbolic links are not seamless.
>
> **[5:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=327)** There are times when commands act differently when dealing with the symbolic link.
>
> **[5:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=331)** There's one more tip I want to give you, all throughout this course I've been using my Tab key to complete my line.
>
> **[5:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=336)** When I type a few characters and I hit the Tab key, the shell fills the line out for me.
>
> **[5:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=341)** For a directories it depends a forward slash, normally this is not a problem but for links it can be.
>
> **[5:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=347)** Let's create a symbolic link to the archive directory.
>
> **[5:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=350)** We'll name the link dirlink.
>
> **[5:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=352)** Type in ls space dash s space archive space dirlink, and hit Enter.
>
> **[5:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=359)** Now, verify with ls space dash l.
>
> **[6:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=362)** If I want to delete dirlink and I type in rm space d-i-r-l, and hit my Tab key, it completes the line but notice it out of the forward slash on the end because it knows the link points to a directory.
>
> **[6:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=375)** This can be problematic.
>
> **[6:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=377)** If I hit Enter, it will delete the directory, not the link.
>
> **[6:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/creating-links-to-files-and-dirs?u=76281980&t=380)** The solution is to remove the trailing slash and then hit Enter.

> [!info]- Semantic Content
>
> **File Paths:** file.txt (11), filelink.txt (7), filesymlink.txt (2)
> **CLI Commands:** ls (7), rm (3), mkdir (2), cd (1), node (1)
> **Code Keywords:** let (9), delete (4), case, (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** for instance (1), such as (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Making file manipulation safe
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=0)** - [Tutor] In many Linux systems, the default behaviors do not warn the user when carrying out destructive operations.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=6)** On the command line, we can pass the dash I option to cp, mv and rm to turn on interactivity which asks for confirmation before doing anything destructive.
>
> **[0:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=16)** To make this behavior persist across reboots you need to place an alias in your shell startup file.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=21)** If you want to edit your hidden dot bashrc file with an editor.
>
> **[0:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=25)** I'm going to use Vim, but you can use the graphical Gedit if you'd like.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=29)** Type in vim space tilde slash dot bashrc and hit enter.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=35)** Go into insert mode by pressing the I key or the insert key and go to the end of the file.
>
> **[0:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=43)** Now, add these lines.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=44)** Alias space cp equals single quote cp space dash i single quote.
>
> **[0:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=51)** New line, alias mv equals single quote, mv space dash i single quote.
>
> **[0:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=59)** New line, alias rm equals single quote rm space dash i single quote.
>
> **[1:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=68)** What this does is create an alias.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=70)** So when you type in cp, the shell runs cp dash i, turning interactivity on.
>
> **[1:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=75)** We've done this for three of the file management commands.
>
> **[1:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=77)** You can add aliases like this for other commands too.
>
> **[1:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=80)** Save and exit by pressing your escape key colon w for write and q for quit and hit enter.
>
> **[1:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=88)** To make this active immediately, you need to source it.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=92)** Type in source space tilde slash dot bashrc, and hit enter.
>
> **[1:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=98)** This will process the lines immediately.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=100)** Otherwise they won't be active until the next time you log in.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=103)** You can verify all of your aliases by typing in alias and hit enter.
>
> **[1:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=108)** And we can see our aliases that we made.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=110)** Now let's test it.
>
> **[1:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=111)** Type in clear and let's create a file called test.txt.
>
> **[1:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=116)** Type in touch space test dot txt, and hit enter.
>
> **[2:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=120)** And now remove it with rm.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=122)** Type in rm space test dot txt, and hit enter.
>
> **[2:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=126)** It should prompt you for confirmation.
>
> **[2:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/making-file-manipulation-safe?u=76281980&t=128)** Interactivity is now turned on and should be whenever you log in.

> [!info]- Semantic Content
>
> **CLI Commands:** cp (5), rm (5), mv (3), make (2)
> **Code Keywords:** let (2), pass (1)
> **Tools:** vim (2), command line (1)
> **File Paths:** test.txt (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [tutor] (1)

#### Challenge: Linux files
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=5)** - [Instructor] You've now come to the end of the Linux files chapter.
>
> **[0:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=8)** This challenge will test your knowledge and understanding of what you've learned.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=12)** This challenge will focus on creating files and directories and listing them using various forms of pattern creation and pattern matching.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=19)** Let's give this challenge a real-world scenario.
>
> **[0:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=22)** You're managing the files in a 24-hour security camera.
>
> **[0:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=26)** It saves a JPEG photo every minute, and it saves an MPEG video file every 10 minutes.
>
> **[0:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=32)** It has seven days of storage on the camera and then overwrites the previous week's files.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=38)** This challenge comes in two parts.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=40)** Part one, you need to create the directories and files for 24 hours a day for seven days.
>
> **[0:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=45)** Part two, you need to create a pattern to list every 10th photo and every video.
>
> **[0:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=50)** You'll use this pattern with the LS command, but it could be used with the CP, MV or RM commands as well so you could back up or archive these files using the same pattern.
>
> **[1:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=61)** For part one, I want you to create the directory structure of the security camera using mkdir.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=66)** There are directories for each day of the week named Sun through Sat, and inside of those directories are directories for each hour of the day starting from one and going up to 24.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=76)** I also want you to create the files in the directories using Touch just as we have in this course.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=81)** There should be a JPEG file for every minute named Photo, with a capital P, and numbered one to 60, and an MPEG file for every 10 minutes named Video, with a capital V, and numbered 10 through 60.
>
> **[1:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=93)** Of course, these are not real photo and video files.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=96)** They're just empty files created by Touch for this exercise.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=100)** For part one, you'll use the mkdir space dash P command to make directories and the Touch command for creating files as well as Brace expansion for the magic.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=110)** You should be able to do part one with three commands.
>
> **[1:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=113)** Don't make it more complex than it needs to be.
>
> **[1:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=116)** For part two, I want you to create a pattern that can be used with LS, CP, MV and RM that lists every 10th file that starts with Photo and ends with .jpg, and also, list every file that starts with Video and ends with .mpg.
>
> **[2:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=131)** The technologies needed for part two include the LS command with the dash one option for one file per line, dash v for numeric sort and dash upper case R for recursive.
>
> **[2:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=142)** You will also need to use character sets, brace expansion and extended globs.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=148)** This challenge ties together everything we did in chapter one and two of this course.
>
> **[2:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=153)** When you're working, you can use tree space dash v to see if you're on the right track.
>
> **[2:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=157)** The output using LS space dash capital one v upper case R, when you're done with your pattern, should look like this.
>
> **[2:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=164)** Don't worry too much if you don't know the solution right away.
>
> **[2:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=167)** The purpose of this challenge is to give you a chance to work through the problem and solve it using the skills you've learned.
>
> **[2:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=173)** The process of solving problems is more useful for learning than listening to me describe these tools.
>
> **[2:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=178)** Before you try to solve the challenge, I recommend creating a VM snapshot by pressing your host key plus t.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=185)** This way, if you need to start over, you can roll back to the snapshot to start from scratch.
>
> **[3:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-linux-files?u=76281980&t=190)** Also remember that any pattern used to create files can be used to delete the same files in case you need to undo something, and with that, have fun with this challenge and good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (4), cp (2), mv (2), rm (2), mkdir (2)
> **Env Vars:** jpeg (2), mpeg (2)
> **Code Keywords:** let (1), this. (1), delete (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Linux files
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=0)** - [Instructor] And now for the Linux file solution.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=7)** First, let's recap what is needed for this challenge.
>
> **[0:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=10)** You need directories for each day of the week and nested inside are directories for each hour.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=15)** Inside the hourly directories should be JPEG photo files for every minute starting at number 1 and MPEG video files for every 10 minutes starting at number 10.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=23)** You can pause the video and type in each stage of my solution as I talk about it, if you want.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=29)** Let's talk about creating the directory structure first.
>
> **[0:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=32)** We want to use "mkdir -p" because it creates parent directories if they don't exist.
>
> **[0:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=37)** Then we use brace expansion to create directories for Sunday, Monday, Tuesday, and so on.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=42)** Then we provide a slash to separate the directories and another set of braces for the hours numbered 1 through 24.
>
> **[0:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=48)** We will be using the same group of brace expansions over and over again so be sure that it makes sense.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=55)** You can use "tree -v" to view these directories.
>
> **[0:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=58)** Now let's create the JPEG files.
>
> **[1:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=60)** We'll use "touch" for this since we're just making empty files.
>
> **[1:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=64)** We use the exact same set of braces that we used to create the directories.
>
> **[1:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=67)** You can just bring your line back and replace mkdir with touch, and now append the file portion.
>
> **[1:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=72)** For that we'll start the name as "Photo-" and provide braces for files 1 through 60 and add .JPG extension.
>
> **[1:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=80)** For the MPEG files, it's nearly identical but since we're numbered 10 to 60, we need an increment operator.
>
> **[1:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=88)** First, we'll start out with "Video-" and then for the braces we'll start them at 10, go to 60, and increment every 10.
>
> **[1:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=95)** The result would be 10, 20, 30, and so on.
>
> **[1:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=98)** Finally, we'll follow it up with the .MPG extension.
>
> **[1:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=102)** Now that we have the directory structure, let's list it with "ls -1vR" as I specified in the challenge.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=110)** The -1 shows one file per line.
>
> **[1:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=112)** The -v does a numeric ordering so the number 10 follows 9 instead of following number 1.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=117)** Then we add -R for recursive mode so we'll show all files in all directories.
>
> **[2:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=123)** We will, once again, reuse the braces that we use to create the directory structure.
>
> **[2:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=127)** You can honestly keep bringing your previous line back, changing the command and the file pattern for each of these steps.
>
> **[2:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=133)** Reusing the braces from earlier will allow us to focus on pattern matching of the files.
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=138)** This is probably the most complex part of the challenge.
>
> **[2:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=141)** I've specified listing every 10th photo file numbered 10, 20, 30, and so on.
>
> **[2:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=146)** We also want to list all video files.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=148)** Don't overthink this.
>
> **[2:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=149)** The video files are only saved every 10 minutes already so you'll probably don't have to do anything special.
>
> **[2:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=155)** If you're gathering every 10th photo file then you're probably also gathering every video file.
>
> **[2:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=161)** For the file name pattern, we'll use an extended glob that specifies exactly one of, photo or video.
>
> **[2:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=167)** This is followed by a dash which is just a text match and brace expansion that counts from 10 to 60, skipping every 10.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=175)** If you start your range from 00, 01 or just 1, you will get interesting results that will require a lot more complex extended glob.
>
> **[3:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=183)** Starting from 10 solves this need.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=185)** If you're curious, change the starting number to 00, 01 or 1, run it and then scroll up to the beginning where it shows failed commands to see the problem.
>
> **[3:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=195)** Lastly, as a character set, matching both JPG and MPG.
>
> **[3:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=200)** I've typed this into a terminal and I'll run it so you can see what the output looks like.
>
> **[3:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=205)** I've tried giving this challenge a real-world feel but in reality, you will use these exact same technologies and methods for many, many different situations.
>
> **[3:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=213)** I hope you were able to solve this challenge.
>
> **[3:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=215)** And if not, I encourage you to work through it again.
>
> **[3:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=217)** The secret to pattern matching is to be proficient so you don't have to think too hard about it.
>
> **[3:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-linux-files?u=76281980&t=222)** The best path to proficiency is practice.

> [!info]- Semantic Content
>
> **Env Vars:** jpeg (2), mpeg (2), jpg (2), mpg (2)
> **Code Keywords:** let (4), finally, (1), this. (1), require (1)
> **CLI Commands:** mkdir (2), ls (1)
> **UI Navigation:** go to (1), scroll up (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Linux Permissions

#### Standard Linux permissions overview
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=0)** - [Instructor] The standard Linux permission system came from Unix and was created 40 years ago.
>
> **[0:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=5)** It is a tried and true system and works for most situations.
>
> **[0:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=9)** The Linux permission system supports the following items.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=12)** Users can belong to multiple groups.
>
> **[0:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=14)** Groups can not, however, contain other groups.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=18)** Files and directories have one user owner.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=21)** Files and directories have one group owner.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=23)** Permissions can be set for the user owner, group owner, and other, other being people who are not the user owner and don't belong to the group owner.
>
> **[0:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=32)** For files, users can read, write, or execute.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=35)** For directories, users can list items contained in directories, create new files, and traverse directories.
>
> **[0:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=41)** The permission system supports privilege escalation to the user owner or group owner of the file and supports group owner inheritance.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=49)** This means that files and directories can inherit the parent directory's group owner.
>
> **[0:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=53)** They also support default file permissions that can be different for each user.
>
> **[0:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=58)** Linux permissions aren't perfect, though.
>
> **[1:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=60)** Here are the shortcomings.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=62)** Later in this course, we'll talk about access control lists which will remedy most of these issues.
>
> **[1:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=67)** Files and directories can only belong to one user.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=70)** Files and directories can only belong to one group.
>
> **[1:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=73)** These become an issue if you want to assign permissions to more than one user or more than one group.
>
> **[1:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=79)** Inheritance only supports group ownership and not permissions.
>
> **[1:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=83)** A tiled file or directory can inherit the parent directory's group owner, but not its permissions.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=89)** Permissions set for other are not concise.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=92)** We don't know who other is.
>
> **[1:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=94)** We just know that they're not the user owner or the group owner.
>
> **[1:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=97)** Other is literally everyone else.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=100)** There's no way to backup and restore permissions.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=103)** And lastly, there's no easy way to temporarily restrict permissions.
>
> **[1:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/standard-linux-permissions-overview?u=76281980&t=107)** Even with these limitations, the Linux permission system handles most situations well.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** else. (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### File and directory modes
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=0)** - [Instructor] Standard Linux permissions support three different modes.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=4)** Read, write, and execute.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=7)** These three modes provide different functionality for files and directories.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=12)** For files read access means a user can open and read the contents of a file.
>
> **[0:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=17)** When a user has write access to a file they can write or modify the contents.
>
> **[0:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=22)** When a user has execute permissions on a file it means that the file can be run as an application.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=27)** Commands like LS and applications like Firefox would have their execute bit set.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=33)** What happens when a command is executed is it's loaded into memory and run until told to stop.
>
> **[0:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=39)** These same three modes act differently on a directory.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=44)** If a user has read access to a directory it means they can list the contents of the directory which includes the metadata about the files and directories in it.
>
> **[0:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=51)** If a user doesn't have read access and they type LS inside the directory they will see a lot of question marks where the metadata should be.
>
> **[0:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=58)** If a user has write access to a directory it allows them to write to the directory.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=63)** Writing to the directory means creating new files in it.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=66)** Execute permissions on a directory are a bit odd.
>
> **[1:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=69)** You're not going to run a directory like you would a command.
>
> **[1:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-and-directory-modes?u=76281980&t=72)** Execute permissions means that you can enter or traverse the directory.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (2)
> **Definitions:** means that (2)
> **Tools:** firefox (1)
> **Speakers:** - [instructor] (1)

#### File ownership
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=0)** - [Instructor] Before we talk about setting permissions, we need to talk about file ownership.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=4)** A file is owned by exactly one user and one group.
>
> **[0:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=8)** If we do an ls -l on a file, we'll see that the long listing includes the file's owners.
>
> **[0:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=13)** I'm using a fictitious file named file.txt as an example.
>
> **[0:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=16)** You can do a long list on any file in your operating system to see similar data.
>
> **[0:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=20)** The user owner is the third column from the left.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=23)** The group owner is the fourth column.
>
> **[0:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=25)** The command that we use to change the ownership of a file is chown.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=29)** The syntax is chown space options space username colon group name space file name.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=35)** To set the user owner, we'd just use one name, for instance, chown space user1 space file.txt, which would change the user owner to user1.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=44)** Keep in mind that in order to change the ownership of a file, you need to be root or elevate privileges with sudo.
>
> **[0:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=50)** To set the group owner, the syntax would be chown space :group space file.txt.
>
> **[0:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=56)** To set both the user and group owners of the files, separate them with either a colon or a period.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=62)** Note that the users and groups have to exist before we can change ownership to them.
>
> **[1:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=67)** You can get a list of existing users by viewing /etc/passwd file and existing groups by viewing the /etc/group file.
>
> **[1:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=74)** For more information about creating users and groups, see my course in the course library titled, "Linux: User and Group Management" where we cover this topic in depth.
>
> **[1:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=82)** We haven't used any options with chown yet.
>
> **[1:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=85)** The one I use the most is recursive.
>
> **[1:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=87)** On occasion, I want to ensure that all files in a user's home directory are owned by the user, and their primary group.
>
> **[1:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=93)** To do this I type in chown space -R, space, the user name, colon, the user's primary group, space, /home/, the user's name.
>
> **[1:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=104)** Let's experience at changing ownership firsthand by going to a terminal.
>
> **[1:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=107)** We'll start off by creating a directory for this exercise using mkdir, and then changing into it.
>
> **[1:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=112)** Type in mkdir space ownexercise, and hit enter, and then cd into it by typing in cd space ownexercise, and hit enter again.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=121)** We can verify our path by typing in pwd.
>
> **[2:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=124)** Let's create a new file using touch.
>
> **[2:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=126)** Type in touch space file.txt, and hit enter.
>
> **[2:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=131)** Before we changed the ownership, we'll create a new user with useradd.
>
> **[2:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=134)** We'll need to elevate privileges using sudo to create a user.
>
> **[2:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=137)** Type in sudo space useradd space testuser, and hit enter.
>
> **[2:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=142)** Type in your password if prompted.
>
> **[2:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=144)** You can verify this by viewing the /etc/passwd file.
>
> **[2:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=146)** Type in cat space /etc/passwd, and hit enter.
>
> **[2:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=151)** And you can see on the last line our new user.
>
> **[2:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=154)** Now let's create a group using groupadd.
>
> **[2:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=156)** Type in clear, then type in sudo space groupadd space testgroup, and hit enter again.
>
> **[2:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=161)** Now verify by viewing the /etc/group file.
>
> **[2:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=164)** Type in cat space /etc/group, and hit enter.
>
> **[2:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=167)** And once again, it's the last line in the file.
>
> **[2:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=170)** Now let's assign ownership to our file.
>
> **[2:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=173)** Type in clear and then type in sudo space chown space testuser:testgroup space file.txt, and hit enter, and verify with ls space -l, and hit enter again.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=185)** Here we can see our user owner and group owner have been changed.
>
> **[3:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/file-ownership?u=76281980&t=189)** For more information view the man page for chown by typing in man space chown, and hit enter.

> [!info]- Semantic Content
>
> **CLI Commands:** chown (9), sudo (5), ls (2), mkdir (2), cd (2)
> **File Paths:** file.txt (5)
> **Code Keywords:** let (4)
> **Warnings:** keep in mind (1), note that (1)
> **Documentation:** man page (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Permissions using numeric notation
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=0)** - [Instructor] There are two different methods of setting permissions in Linux, numeric and symbolic.
>
> **[0:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=5)** Let's talk about numeric mode now.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=7)** When we do a long listing with ls, we see several things.
>
> **[0:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=10)** We see the permissions, ownership, timestamp, filename, and a few other smaller bits, such as size.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=18)** There are 10 characters on the left-hand side of the listing.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=21)** The first character shows the type.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=23)** If it's a dash, it's a file.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=24)** If it were a directory, it would be the letter d.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=27)** if it were a symbolic link, it would be an l.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=29)** If it were a character device, a c.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=31)** A p for a pipe and a b for a block device.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=35)** The next nine characters are divided up into groups of three.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=38)** The first group is the user owner of the file.
>
> **[0:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=41)** The user owner in this case is user1.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=44)** The user owner has read, write, and execute permissions.
>
> **[0:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=48)** The second group of three is for the group owner.
>
> **[0:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=50)** The group owner in this case is accounting.
>
> **[0:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=53)** The accounting group has read and execute permissions.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=57)** The last group of three is for everyone that is not the user owner or that doesn't belong to the group.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=62)** These are the permissions for the rest of the entire known universe.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=66)** Other in this case has no permissions.
>
> **[1:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=68)** To set permissions in numeric mode, we have to know the values of read, write, and execute.
>
> **[1:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=73)** Read has a value of 4.
>
> **[1:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=75)** Write has a value of 2.
>
> **[1:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=77)** And execute has a value of 1.
>
> **[1:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=79)** To set read, write, and execute for the user owner, we'd add 4, 2, and 1 for a total of 7.
>
> **[1:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=85)** To set read and execute for the group owner, we'd add 4 and 1 for a total of 5.
>
> **[1:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=90)** And lastly, other there doesn't have any permissions, so we'd set it to 0.
>
> **[1:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=94)** To set the user group and other permissions for this file, we'd use a numeric value of 750.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=100)** The command we use to set permissions is chmod, or change mode.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=103)** The syntax for chmod is chmod space options space permissions space filename.
>
> **[1:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=108)** To set the permissions to 750, we'd type chmod space 750 space file.txt.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=115)** Let's go to a terminal and create a directory for this exercise.
>
> **[1:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=118)** In a terminal, type in mkdir space permexercise and hit enter, and then cd into it.
>
> **[2:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=124)** Type in cd space permexercise and hit enter again.
>
> **[2:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=128)** Now let's create a file using touch.
>
> **[2:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=130)** Type in touch space file.txt and hit enter, and verify with ls space -l.
>
> **[2:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=136)** Initial permissions are assigned to new files based on the value of the umask, which we will cover in another video this course.
>
> **[2:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=142)** Let's use the chmod command to give the user owner read, write, and execute, the group owner read and execute, and other will get no permissions.
>
> **[2:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=150)** Read, write, and execute adds up to 7, read and execute adds up to 5 and no permissions for other equates to 0.
>
> **[2:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=157)** So type in chmod space 750 space file.txt, and hit enter, and then verify with ls space -l, and hit enter again.
>
> **[2:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=166)** We can also set permissions recursively by specifying the -R option.
>
> **[2:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=171)** However, I can't think of a practical application for using chmod recursively with numeric mode.
>
> **[2:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-numeric-notation?u=76281980&t=177)** There is a use case for recursive with symbolic mode that we'll cover in another video.

> [!info]- Semantic Content
>
> **CLI Commands:** chmod (7), ls (3), cd (2), mkdir (1)
> **Code Keywords:** let (4), type. (1)
> **File Paths:** file.txt (3)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Permissions using symbolic notation
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=0)** - [Narrator] There are two different methods of setting permissions in Linux: numeric and symbolic.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=4)** For this video, let's talk about symbolic mode.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=7)** When we do a long list with LS, we see several things.
>
> **[0:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=10)** We see the permissions, ownership, timestamp, file name, and a few other smaller bits such as size.
>
> **[0:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=17)** There are 10 characters on the left-hand side of the listing.
>
> **[0:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=20)** The first character shows the type.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=21)** If it's a hash, it's a file.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=23)** If it were a director, it would be a letter D.
>
> **[0:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=25)** If it were a symbolic link, it would be an L.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=27)** If it were a character device, a C.
>
> **[0:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=30)** A P for a pipe, and a B for a block device.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=33)** The next nine characters are divided into groups of three.
>
> **[0:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=36)** The first group is the user owner of the file.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=38)** The user owner in this case is user1.
>
> **[0:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=41)** The user owner has read, write, and execute.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=44)** The second group of three is for the group owner.
>
> **[0:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=47)** The group owner in this case is accounting.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=49)** The accounting group has read and execute.
>
> **[0:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=52)** The last group of three is for everyone that is not the user owner, or that doesn't belong to the group.
>
> **[0:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=58)** These are the permissions for the rest of the known universe.
>
> **[1:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=60)** Other, in our case, has no permissions.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=63)** In symbolic mode, we assign a value to each position using a symbolic representation of the desired permissions.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=70)** Unlike numeric mode, there is no math involved.
>
> **[1:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=73)** To set read, write, and execute for the user owner, we just specify u=rwx.
>
> **[1:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=79)** To set read and execute for the group owner, we'd use g=rx.
>
> **[1:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=85)** To set permissions to nothing for other, just use o=, with nothing after it.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=89)** To set permissions for multiple positions at once, just separate them with a comma.
>
> **[1:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=94)** With symbolic method, we can also add permissions by changing the equal sign to a plus.
>
> **[1:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=99)** To add rwx to a user, use u+rwx.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=103)** To subtract permissions, replace the equals with a minus sign.
>
> **[1:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=107)** For instance, to take execute permissions away from other, we'd type o-x.
>
> **[1:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=112)** The command we use to set permissions is chmod, or change mode.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=115)** The syntax for chmod is chmod, space, options, space, permissions, space, file name.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=121)** Let's go to a terminal and create a director for this exercise.
>
> **[2:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=124)** In the terminal type in mkdir, space, perm, sym, exercise, and hit enter.
>
> **[2:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=130)** Now change into it.
>
> **[2:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=131)** Type in cd, space, perm, sym, exercise, and hit enter again.
>
> **[2:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=135)** Now let's create a file using touch.
>
> **[2:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=137)** Type in touch, space, file, dot, txt, and hit enter, and verify with ls, space, dash, L.
>
> **[2:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=143)** Default permissions are assigned to new files based on the value of the UMass.
>
> **[2:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=147)** In another video of this course, we cover using Umass.
>
> **[2:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=151)** To change permissions, we'll use the chmod command.
>
> **[2:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=153)** I'm going to give the user owner read, write, and execute, the group owner read and execute, and other will get no permissions.
>
> **[2:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=160)** Type in clear, and type in chmod, space, u=rwx, comma, g=rx, comma, o= with nothing after it,
>
> **[2:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=173)** space, file, dot, txt, and hit enter.
>
> **[2:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=176)** Verify this with LS, space, dash, L, and hit enter again.
>
> **[3:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=180)** Symbolic mode often requires more typing, but some think it's easier to understand.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=185)** One of the major advantages to symbolic mode is that you can add or subtract permissions.
>
> **[3:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=190)** The reason this is so useful is that we don't have to know the current permissions to add or take away.
>
> **[3:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=195)** With numeric mode, we'd have to get the current permissions, and then recalculate the desired permissions.
>
> **[3:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=200)** Let's take execute permissions away from the group.
>
> **[3:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=203)** Type in clear, and type in chmod, space, g-x, space, file, dot, txt, and hit enter.
>
> **[3:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=209)** And verify with LS, space, dash, L.
>
> **[3:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=212)** You can also group the positions.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=214)** For instance, if we wanted to take away execute for user group and other, we could type in chmod, space, U G O, dash, X, space, file, dot, txt, and hit enter.
>
> **[3:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=226)** We can also specify A for all positions, which would include user owner, group owner, and other.
>
> **[3:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=232)** Type in chmod, space, a-x, space, file, dot, txt, and hit enter.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=239)** We can also set permissions recursively by specifying the dash capital R option.
>
> **[4:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=244)** This is useful with symbolic mode because we can add or subtract permissions.
>
> **[4:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=249)** To set this up, let's create a user named Bob.
>
> **[4:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=252)** Type in clear, and type in sudu, space, useradd, space, Bob, and hit enter.
>
> **[4:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=256)** Type in your password if prompted.
>
> **[4:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=258)** If we wanted to remove all execute permissions for every file in slash home slash Bob, we'd type in cd, space, chmod, space, dash capital R, space, a-x, space, slash home, slash Bob, and hit enter.
>
> **[4:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=273)** We have to elevate privileges using sudu because we're changing another user's permissions.
>
> **[4:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/permissions-using-symbolic-notation?u=76281980&t=278)** For more information about the chmod command, check out the man page by typing in man, space, chmod, and hit enter.

> [!info]- Semantic Content
>
> **CLI Commands:** chmod (11), ls (4), cd (2), mkdir (1)
> **Code Keywords:** let (5), type. (1), case, (1)
> **Analogies:** for instance (2), such as (1)
> **Tools:** terminal (2)
> **Documentation:** man page (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Initial permissions using umask
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=0)** - [Instructor] When files are created, initial permissions are applied automatically.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=4)** These permissions are calculated based on a bit mask called umask.
>
> **[0:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=8)** To see your umask, type into a terminal, umask, and hit enter.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=12)** We can also view the umask in symbolic notation by using the -S option.
>
> **[0:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=17)** Type in umask -S and hit enter.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=21)** The umask can have either three characters or four.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=24)** Feel free to add the leading zero or leave it off for standard permissions.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=27)** Notice that the umask isn't the same format as numeric permission, such as 754 is actually upside down, since it's a mask.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=35)** To calculate initial permissions we'll have to subtract the umask from maximum allowed initial permissions, based on whether the item is a file or a directory.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=44)** For directories our maximum initial permission are 777, since having execute on a directory does not create a security risk.
>
> **[0:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=51)** Let's use a umask of 022.
>
> **[0:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=54)** Now let's subtract the umask from the maximum initial permissions of a directory.
>
> **[0:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=58)** 777 - 022 = 755, or in symbolic mode, rwxr-xr-x.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=66)** Let's verify this by going to a terminal and creating a directory.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=70)** Type in, mkdir space umaskdir and hit enter, and verify with ls space -l.
>
> **[1:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=77)** Note that the permissions on our new directory are rwxr-xr-x, or 755, just as our calculations would show.
>
> **[1:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=85)** The maximum initial permissions for a file are different than for a directory.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=89)** For security reasons, we don't allow execute permissions on files by default.
>
> **[1:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=93)** So the maximum initial permission mode on a file is 666, or RW for the user, group, and other.
>
> **[1:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=99)** Having execute turned off by default keeps files from being automatically executable after being copied from one place to another.
>
> **[1:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=106)** This includes files downloaded from the internet.
>
> **[1:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=109)** We will use a mask of 022 again.
>
> **[1:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=112)** To get the initial permissions for files, subtract the right three digits of the umask from 666.
>
> **[1:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=118)** 666 - 022 = 644, or in symbolic mode, rw-r--r--.
>
> **[2:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=126)** Let's verify this by going to a terminal and creating a file.
>
> **[2:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=129)** Type in clear and then type in touch space, umaskfile.txt and hit enter, and then verify with ls space -l.
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=138)** Notice that the permissions on our new file are rw-r--r--, or 644, just as our calculations would show, so we can temporarily change our umask by using the umask command.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=148)** Type in clear and then type in umask space, 0002, and hit enter.
>
> **[2:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=154)** And we can verify by typing in umask and hitting enter again.
>
> **[2:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=157)** A umask of 0002 would give default directory permissions of RWX for the user, RWX for the group owner, and RX for other, for files that would give RW for the user owner, RW for the group owner, and R for other.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=172)** This only works for our current login session.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=175)** If a user wants to change their umask they can add it to their bash start-up file using an editor.
>
> **[2:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=179)** Type in vi space ~/.bashrc and hit enter.
>
> **[3:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=184)** In this file, going into insert mode, and in this file, we could add umask space 0002, and save and exit by pressing escape colon x! and hitting enter.
>
> **[3:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=196)** I'm going to quit without saving by pressing escape colon q! and hitting enter.
>
> **[3:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=202)** If an administrator wants to change the system wide umask they can add it to a file on /etc/profile.d Let's create a new file here named umask.sh using vi.
>
> **[3:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=211)** We'll need to elevate privileges using sudo.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=214)** Type in sudo space vi space /etc/profile.d/umask.sh and hit enter, type in your password if prompted.
>
> **[3:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=224)** Go into insert mode by pressing the I key.
>
> **[3:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=227)** We could just add a line here that says umask space 0002 but it's customary to have a different umask for root and other users, so we'll add a condition.
>
> **[3:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=237)** Type in if space [ space, " $ uppercase UID " space -ge for greater than or equal to, space 1000 space ] space ; then, new line tab umask space 0002, new line, fi.
>
> **[4:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=260)** This only overrides the system umask if the user's ID number is 1000 or greater.
>
> **[4:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/initial-permissions-using-umask?u=76281980&t=265)** If you save and exit this won't take effect until you log in again.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default. (1)
> **CLI Commands:** ls (2), sudo (2), mkdir (1)
> **Tools:** terminal (3), bash (1)
> **File Paths:** umaskfile.txt (1), umask.sh (1), etc/profile.d/umask.sh (1)
> **Env Vars:** rwx (2), uid (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)

#### Special file bits: SUID and SGID
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=0)** - [Instructor] There are additional special bits for privilege escalation on executable files.
>
> **[0:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=5)** The first is called set user ID or SUID, is which instructs Linux to run the executable file as the user owner of the file.
>
> **[0:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=13)** We also have set group ID or SGID which instructs Linux to run the executable file as the group owner of the file.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=21)** And lastly, sticky, historically in Unix if you set the sticky bit on a program it would remain in swap making it execute faster the next time it is run.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=31)** Some versions of Unix and BSD still maintain this functionality but it has never existed in Linux.
>
> **[0:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=37)** Linux cache is all executables for faster execution anyway so there's a little need for a sticky bit.
>
> **[0:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=43)** In a terminal, let's do a long list on the SU command by typing in LS space dash L space slash USR slash bin slash SU and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=52)** The first thing you should notice is that the file is bright red, this tells you something special is happening here.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=57)** Let's take a look at the permissions, the permissions for the user owner are RWS.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=62)** The S in the user owners execute position means that we have SUID bit set.
>
> **[1:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=68)** If the S is lowercase then the underlying execute bit is also set.
>
> **[1:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=72)** If the S is upper case then the execute permissions are not set.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=76)** The case of the letter S is the easiest way of telling if the execute bit is set or not.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=81)** When the S exists in the group owner permissions then the SGID bit is set.
>
> **[1:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=86)** The lowercase S again, in the case of the execute permissions are also set.
>
> **[1:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=90)** Just like before if the S is uppercase then underlying execute permissions are not set.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=96)** When the SUID bit is set and a regular users such as user one executes the command their privileges get elevated to that of the user owners.
>
> **[1:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=104)** In our example user one would be executing the SU command as root.
>
> **[1:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=109)** This means this command would have all of the power of the root user, this is all because of the SUID bit.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=115)** Let's talk about how to set the SUID bit, first, let's look at the standard permissions.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=121)** For the user owner read permissions are set which is equal to four, write Permissions are set which is equal to two and execute is set.
>
> **[2:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=129)** We know this because the S is lowercase, as such execute is equal to one.
>
> **[2:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=134)** Combined the user owner permissions and numeric mode are equal to seven.
>
> **[2:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=139)** For the group owner we have read, which is equal to four and execute which is equal to one for a total of five, the same goes for the permissions for other.
>
> **[2:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=146)** Our total permissions in numeric mode are 7 5 5, just like read, write and execute with standard permissions SUID, SGID and sticky have values.
>
> **[2:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=157)** SUID is worth four, SGID is worth two and sticky is worth one.
>
> **[2:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=163)** Keep in mind that sticky has no effect on files on Linux.
>
> **[2:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=166)** To set the SUID bit we just prefixed the permissions with the extra digit.
>
> **[2:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=171)** Our standard permissions are 7 5 5.
>
> **[2:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=174)** We have an S in the user owners permissions so we add a four for SUID.
>
> **[2:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=179)** We do not have any special bits in the group owner or other positions, added up the result is for.
>
> **[3:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=185)** Our total permissions in numeric mode with SUID set are 4 7 5 5.
>
> **[3:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=191)** To set these permissions using numeric mode you would type sudo space chmod space 4755 space slash USR slash bin slash SU.
>
> **[3:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=200)** We can also use symbolic mode as well by typing sudo space chmod space U, for user, plus S space slash USR slash bin slash SU.
>
> **[3:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=211)** The SGID bit is very similar to SUID, when we have SGID set the S resides in the execute position of the group owners permissions.
>
> **[3:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=221)** When a regular user such as user one executes a command with SGID set it runs with the privileges of the group owner of the file, in this case the screen group.
>
> **[3:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=231)** To add the SGID bit to a file we prefixed the permissions with a two, for the screen command the permissions would be 2 7 5 5.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=239)** So we'd set SGID with sudo space chmod space 2755 space slash USR slash bin slash screen.
>
> **[4:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=248)** We can also set this with symbolic mode if we use sudo space chmod space G, for group, plus S space slash USR slash bin slash screen.
>
> **[4:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=258)** Because these commands allow privilege escalation without prompting for a password it may be advantageous to know where in the file system they are for security reasons.
>
> **[4:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=267)** We can use the find command to locate SUID and SGID files, type into a terminal sudo space find space slash that'll be where we're looking the entire operating system, space dash perm space dash 4,000 and hit enter.
>
> **[4:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=283)** And type in your password if prompted, this will find all files with the SUID bit set.
>
> **[4:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=288)** To find files with the SGID bit set we'll change the line slightly.
>
> **[4:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-file-bits-suid-and-sgid?u=76281980&t=292)** Type it clear then bring your line back and change 4,000 to 2000 and hit enter.

> [!info]- Semantic Content
>
> **Env Vars:** suid (13), sgid (11), usr (5), bsd (1), rws (1)
> **CLI Commands:** sudo (5), chmod (4), find (4), ls (1)
> **Code Keywords:** let (4), for. (1)
> **Analogies:** just like (2), such as (2), similar to (1)
> **Tools:** terminal (2)
> **Definitions:** is called (1), means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Special directory bits: SGID and Sticky
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=0)** - [Instructor] We can apply special bits to directories just like we can do files.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=4)** However, the behavior is different for directories.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=6)** Set user ID, or SUID, has no effect on directories.
>
> **[0:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=11)** Set group ID, or SGID, provides group inheritance for files and directories created inside the directory.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=18)** Unlike with executables, the sticky bit works on directories in Linux.
>
> **[0:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=22)** When the sticky bit is set for a directory, only the owners of the files can delete them.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=27)** It might be easier to show you how SGID works on directories rather than try to explain it.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=31)** After I've shown you, we can talk about it.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=33)** In a terminal, let's create a directory in /home for this exercise using mkdir.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=38)** Type in cd space /home, and hit Enter.
>
> **[0:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=41)** Be sure that you are in /home and not your user's home directory.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=44)** You can verify with pwd.
>
> **[0:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=46)** Now type sudo space mkdir space accounting, and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=52)** Now let's verify it again with ls space -l, and hit Enter.
>
> **[0:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=56)** You can see that since we created it using sudo, it's owned by the root user and the root group.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=62)** The permissions for the user owner are rwx, the group owner, rx, and other, rx.
>
> **[1:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=68)** Now let's create a group called accounting.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=70)** If you already have this group, you can skip this step.
>
> **[1:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=73)** If not, type in clear, then type in sudo space groupadd space accounting, and hit Enter.
>
> **[1:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=79)** And now change the ownership of your accounting directory to the accounting group.
>
> **[1:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=83)** Type in sudo space chown space :accounting, which is the group name, space, and then the directory name, which is accounting, and hit Enter.
>
> **[1:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=93)** Now let's add the SGID bit as well as write permissions for the group owner.
>
> **[1:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=97)** Type in sudo space chmod space 2 for SGID, 770 space accounting, and hit Enter, and verify with ls space -l.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=110)** This should give us rwx for the root user, rwx for the accounting group, and no permissions for other, plus, SGID, as you can see by the letter s in the group execute position.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=122)** Now that we have our directory and group set up, let's talk about how SGID bits affect directories.
>
> **[2:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=127)** SGID bits on directories represent the only inheritance standard Linux permissions and ownership.
>
> **[2:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=133)** All files and directories created inside of your accounting directory will inherit the group owner, which in our case is the accounting group.
>
> **[2:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=139)** If user1 creates a file in the accounting directory, it will be owned by user1 and the accounting group.
>
> **[2:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=145)** If ted creates a file, it would be owned by ted and the accounting group and so on.
>
> **[2:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=150)** This allows us to create a directory for group collaboration.
>
> **[2:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=153)** Note that for our setup, all users creating files in this directory would need to belong to the accounting group in order for them to have write access.
>
> **[2:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=162)** Let's see this in action.
>
> **[2:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=163)** In a terminal, let's create a new user.
>
> **[2:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=165)** Type in clear, then type in sudo space useradd space -G for supplemental group space accounting space ted, and hit Enter.
>
> **[2:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=176)** Give ted a password by typing in sudo space passwd space ted, and enter his password twice.
>
> **[3:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=183)** This will create a username ted who also belongs to the accounting group.
>
> **[3:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=188)** We can verify this by viewing the /etc/group file.
>
> **[3:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=190)** Type in cat space /etc/group, and hit Enter, and you should see the accounting group at the bottom, and ted should be in it.
>
> **[3:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=197)** Now let's change to this user and cd into the accounting directory.
>
> **[3:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=201)** Type in clear, and then type in su space hyphen space ted, and hit Enter, and enter ted's password.
>
> **[3:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=208)** Now cd to the accounting directory.
>
> **[3:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=209)** Type in cd space /home/accounting, and hit Enter.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=214)** Verify your path with pwd.
>
> **[3:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=216)** Now let's create a file and list that using ls -l.
>
> **[3:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=219)** Type in touch space file.txt, and then list it by typing ls space -l.
>
> **[3:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=226)** You can see that our file is owned by ted and the accounting group.
>
> **[3:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=229)** Now type in exit to go back to your previous user.
>
> **[3:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=232)** Another special bit is the sticky bit.
>
> **[3:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=235)** We set the sticky bit by adding a one to the left of the permissions.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=239)** Let's create a directory and place the sticky bit on it.
>
> **[4:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=241)** Type in clear, then type in cd space /home, and hit Enter.
>
> **[4:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=246)** Now make a directory by typing sudo space mkdir space stickydir, and hit Enter again.
>
> **[4:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=252)** We'll give all permissions to all people plus the sticky bit.
>
> **[4:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=255)** Type in sudo space chmod space 1777 space stickydir, and hit Enter, and verify with ls space -l.
>
> **[4:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=263)** We should see that our directory has a t in the execute position of the permissions of other.
>
> **[4:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=268)** It will be a lowercase t if execute for other is set.
>
> **[4:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=272)** Otherwise, it will be an uppercase T.
>
> **[4:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=274)** The purpose of the sticky bit on a directory is to keep users from deleting or moving each other's files.
>
> **[4:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=279)** Let's try this.
>
> **[4:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=280)** As you are user1, change into the sticky directory and create a file.
>
> **[4:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=285)** Type in clear, then type in cd space /home/stickydir, and hit Enter, then type in touch space file.txt, and hit Enter again.
>
> **[4:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=293)** Now give rwx permissions to everyone by typing in chmod space 777 space file.txt, and hit Enter again, and verify by typing in ls space -l.
>
> **[5:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=305)** Now su to ted.
>
> **[5:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=306)** Type in su space hyphen space ted, and hit Enter, and enter ted's password.
>
> **[5:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=312)** Change into the stickydir by typing in cd space /home/stickydir, and hit Enter.
>
> **[5:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=318)** Now get a long list of the files by typing ls space -l.
>
> **[5:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=321)** We can see that file.txt has rwx for user, group, and other.
>
> **[5:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=326)** This means we have full access to it, including delete.
>
> **[5:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=329)** Now type in rm space file.txt, and hit Enter, and we should get an error message.
>
> **[5:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=334)** Even though ted has rwx permissions on the file, he still can't remove it.
>
> **[5:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=339)** The sticky bit is used mainly for world-writable shared directories like /tmp.
>
> **[5:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=344)** Type in ls space -ld for directory space /tmp, and hit Enter.
>
> **[5:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/special-directory-bits-sgid-and-sticky?u=76281980&t=349)** You should see the t in the other permissions section.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (9), ls (8), cd (7), mkdir (3), chmod (3)
> **Code Keywords:** let (11), delete (2), this. (1)
> **Env Vars:** sgid (7), suid (1)
> **File Paths:** file.txt (5)
> **Tools:** terminal (2)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)

#### Challenge: Permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=0)** - You've now come to the end of the Linux Permissions Chapter.
>
> **[0:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=8)** In this chapter, you learned about standard Linux permissions.
>
> **[0:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=11)** This challenge will focus on granting access to the users and groups that need it, using standard Linux permissions.
>
> **[0:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=17)** Plus, SUID, SGID, and sticky beds.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=21)** Let's create a scenario with a fictitious company.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=24)** This company is an engineering company that makes products and sells them to consumers.
>
> **[0:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=28)** The engineers create technical drawings and documents, and the marketing department needs access to those items to create marketing material.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=35)** There will be a shared director at slash home, slash engineering, where the engineers place their documents.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=40)** All engineers can enter, read and write to those files.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=44)** Engineers need to be able to read and write to newly created files, as well.
>
> **[0:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=48)** Users cannot delete files, not created by themselves.
>
> **[0:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=53)** You will need Bob, Ted, and Sally users.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=55)** Bob and Ted will need to be in the engineering group.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=57)** Sally is in marketing.
>
> **[0:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=59)** Lastly, the people in marketing need read access to the engineering directory.
>
> **[1:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=64)** This course isn't aimed at managing users, but in order to set up permissions and ownership, you will need users.
>
> **[1:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=69)** So I will cover a few commands.
>
> **[1:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=71)** To create a new user, type in sudo, space, useradd, space, the username.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=76)** In order to log in as that user to test the permissions, the account will need a password.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=81)** To give the user a password, type sudo, space, P-A-S-S-W-D, space, the username, and hit enter, and then enter the password twice.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=89)** You can verify the user's existence by viewing the etc password file using Cat.
>
> **[1:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=94)** You'll also need groups. To create a group, type in sudo, space, groupadd, space, the group name.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=100)** To add a user to the group, use the group password command.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=103)** Type sudo, space, G-P-A-S-S-W-D, space, dash A for add, space, the username, space, the group name.
>
> **[1:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=111)** To verify that the user is in the group, view the etc group file, with Cat and look near the bottom.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=117)** This challenge will need to be done using standard Linux permissions.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=121)** That means you can use RWX permissions for user group and other.
>
> **[2:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=124)** SUID, SGID, and sticky bits.
>
> **[2:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=128)** Before you try to solve the challenge, I recommend creating a VM snapshot.
>
> **[2:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-permissions?u=76281980&t=132)** This way, if you need to start over, you can just roll back to the snapshot.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (4), cat (2)
> **Env Vars:** suid (2), sgid (2), rwx (1)
> **Code Keywords:** let (1), delete (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - you (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=0)** - For the standard Linux permissions challenge, we need to create a directory at /home/engineering.
>
> **[0:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=10)** Engineers need to be able to enter, read and write files in the engineering directory.
>
> **[0:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=14)** Newly created files need to belong to the engineering group.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=18)** Users should not be able to delete files that they didn't create.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=21)** Bob and Ted need to belong to the engineering group.
>
> **[0:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=25)** Sally needs to belong to the marketing group.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=27)** The marketing group needs read only access to the engineering directory.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=31)** So let's get to solving this problem.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=33)** First, let's make our users.
>
> **[0:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=34)** Type in sudo space useradd space Bob and hit enter.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=38)** Then bring your line back and change Bob to Ted and hit enter again, and then bring your line back and change Ted to Sally and hit enter again.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=49)** Now let's give them all passwords so we can log in as them and test our solution.
>
> **[0:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=53)** Type in sudo space PASSWD space Bob and hit enter, and then type in Bob's password twice.
>
> **[1:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=61)** Now bring your line back and change Bob to Ted and hit enter, and then enter Ted's password twice.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=70)** Bring your line back again, change Ted to Sally and do the same.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=76)** Now let's make our engineering group.
>
> **[1:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=78)** Type in sudo space groupadd space engineering, and hit enter, and then add Bob and Ted to it.
>
> **[1:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=88)** Type in sudo space GPASSWD space dash a for add space Bob space engineering.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=96)** Now bring your line back and change Bob to Ted and hit enter again.
>
> **[1:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=102)** Now let's create a marketing group and add Sally to it.
>
> **[1:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=104)** Type in sudo space groupadd space marketing, and hit enter.
>
> **[1:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=111)** Now add Sally to it by typing sudo space GPASSWD, space dash a space Sally, space marketing, and hit enter.
>
> **[2:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=120)** Now let's create the engineering directory.
>
> **[2:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=123)** Type in sudo space mkdir space/home/engineering, and hit enter.
>
> **[2:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=130)** Now we need to assign ownership to it.
>
> **[2:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=132)** We will make root the user owner and make the engineering group, the group owner.
>
> **[2:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=136)** Type in sudo space chown space root:engineering, that's the engineering group, space/home/engineering and hit enter.
>
> **[2:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=146)** Now let's set permissions.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=148)** The engineering group, which is the group owner needs to be able to enter the directory as well as reading and writing files.
>
> **[2:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=154)** Let's set the permissions.
>
> **[2:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=155)** Type in sudo space chmod space group plus RWX space/home/engineering, and hit enter.
>
> **[2:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=166)** Now the users in the engineering group have read, write and execute permissions.
>
> **[2:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=170)** Let's also set up inheritance so all future files are owned by the engineering group.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=175)** For this, we'll use the SGID bit.
>
> **[2:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=178)** Type in sudo space chmod space G+S space/home/engineering
>
> **[3:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=186)** and hit enter.
>
> **[3:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=188)** This will set the SGID bit.
>
> **[3:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=189)** I've also specified that user should not be able to delete files that were not created by them.
>
> **[3:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=193)** This is the sticky bit, let's set that.
>
> **[3:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=195)** Type in sudo space chmod space O+T space/home/engineering,
>
> **[3:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=204)** and hit enter.
>
> **[3:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=205)** That sets the sticky bit.
>
> **[3:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=207)** Now let's deal with marketing.
>
> **[3:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=208)** Marketing needs to have access to files in /home/engineering.
>
> **[3:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=212)** Here we have a problem because we can only assign permissions to one group on a file or directory.
>
> **[3:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=217)** Since Sally is the only one in marketing, we could consider giving her user ownership, but then she could grant herself right access.
>
> **[3:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=224)** This is not ideal.
>
> **[3:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=225)** Our only choice with Standard Linux Permissions is to use the permissions in the other section for marketing.
>
> **[3:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=230)** This is also not a deal as it allows everyone to read the files in /home/engineering, not just a marketing group, but unfortunately it's all we can do.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=239)** Type in sudo space chmod space O, for other equals RX, for read and execute space/home/engineering, and hit enter.
>
> **[4:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=249)** That should take care of it.
>
> **[4:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=250)** Notice the limitations with Standard Linux Permissions.
>
> **[4:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-permissions?u=76281980&t=253)** There's only so much you can do with three possible owner positions and limited permissions.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (12), make (4), chmod (4), mkdir (1), chown (1)
> **Code Keywords:** let (11), delete (2), this, (1)
> **Env Vars:** gpasswd (2), sgid (2), passwd (1), rwx (1)
> **Prerequisites:** set up (1)
> **Speakers:** - for (1)
> **Non-Speech:** (upbeat music) (1)


### Access Control Lists

#### ACL overview
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=0)** - [Narrator] There are limitations to the standard Linux permission system.
>
> **[0:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=3)** Briefly, these are the issues.
>
> **[0:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=5)** Files and directories can only belong to one user, files and directories can only belong to one group, permissions for other are not concise.
>
> **[0:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=14)** Inheritance only supports group ownership.
>
> **[0:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=18)** There's no easy way to back up and restore permissions.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=21)** There's no easy way to temporarily restrict permissions.
>
> **[0:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=26)** Let me give you an example of the limitations of standard Linux permissions.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=29)** Let's say we have a directory where the accounting group needs read, write and execute permissions.
>
> **[0:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=34)** In addition, the marketing group would need read and execute.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=38)** This is not that complex of a scenario nor is it unrealistic.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=42)** The closest we can get to satisfying these objectives using standard Linux permissions is to make the accounting group the group owner, and set her permissions to be rwx which has read, write and execute.
>
> **[0:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=54)** Since a directory can only be owned by one group, we have no other choice but to have the marketing group access to directory using other permissions.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=62)** We would give other rx or read and execute permissions.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=66)** The problem is that everyone would be able to access the directory, not just the marketing group.
>
> **[1:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=71)** Also, if we needed to set permissions for any other groups, we're stuck.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=76)** Access control lists or ACLs are layered onto Linux permissions and extend them in new ways.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=81)** With ACLs permissions can be set for multiple users on a file or directory.
>
> **[1:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=86)** Permissions can also be set for multiple groups on a file or a directory.
>
> **[1:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=90)** User and group permissions can be inherited ACL support easy backup, and restoration of permissions and easy temporary restriction of permissions.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=100)** ACLs are not perfect though.
>
> **[1:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=102)** They're not always installed, they're not built into Linux, they can be disabled by the system administrator and require additional possibly unfamiliar commands to manage them.
>
> **[1:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=113)** The ACL solution to the problem listed earlier would look like this.
>
> **[1:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=117)** The top three lines are the file name, user owner and group owner.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=121)** The next two lines are the user and group owner permissions.
>
> **[2:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=124)** In this case the user owner is root and has rwx permissions.
>
> **[2:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=129)** The group owner is the root group which also has rwx permissions.
>
> **[2:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=134)** Other has zero permissions.
>
> **[2:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=136)** What is important to note here, is if ACLs were disabled or this drive was moved to a system that didn't use ACLs then only root would be able to access this directory.
>
> **[2:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=146)** This is a pretty safe baseline for permissions with ACLs.
>
> **[2:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=150)** Now there's an ACL given the accounting group rwx permissions and the marketing group rx permissions.
>
> **[2:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=158)** There's also a default ACL for inheritance any file or directory created in the reports directory would also inherit the group ACLs listed above.
>
> **[2:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=167)** The accounting group would have rwx access to future files and the marketing group would have rx access to future files.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=175)** The mask is the maximum allowed permissions.
>
> **[2:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=178)** If an administrator wanted to temporarily limit access they could just take permissions away from the mask.
>
> **[3:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=184)** Doing so squashes the rest of the permissions and when the mask is restored then the permissions go back to normal.
>
> **[3:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=190)** ACLs are not built into Linux but they are turned on by default in enterprise Linux eight.
>
> **[3:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=195)** They also require us to learn some new commands.
>
> **[3:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=198)** However, I do think they're worth the effort to learn and I recommend you spend the time.
>
> **[3:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-overview?u=76281980&t=203)** They make administering permissions on Linux very simple with ACLs you spend very little time creating convoluted permission strategies and more time getting work done.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), require (2), this. (1)
> **Env Vars:** acl (4)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Read ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=0)** - [Instructor] Because ACLs are layered onto standard Linux permissions, we can't use standard tools such as LS to list them.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=6)** With ACLs comes a suite of new tools.
>
> **[0:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=8)** Let's take a look.
>
> **[0:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=10)** Go to a terminal and create a directory using the mkdir command by typing mkdir ~/aclexercise and hit enter, and change into it by typing in cd ~/aclexercise and hit enter again.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=27)** You can check your path with PWD.
>
> **[0:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=30)** Now let's create a file and place in ACL on it.
>
> **[0:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=32)** Type in touch aclfile and hit enter.
>
> **[0:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=36)** Verify the file with LS -l.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=40)** In order to read the ACLs on a file, we'll use the get file aclcommand.
>
> **[0:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=45)** Get facls installed by default and enterprise Linux, but if you're using another distribution, you may have to install ACL support before proceeding.
>
> **[0:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=52)** If ACLs are not installed, you'll get an error message saying they are not supported.
>
> **[0:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=57)** Once they're installed, you'll need to mount the file system with ACLs turned on.
>
> **[1:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=61)** I will leave that exercise for you to research if you find it necessary.
>
> **[1:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=66)** Now type in getfacl aclfile and hit enter.
>
> **[1:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=72)** This lists the name of the file, the user owner, the group owner, and the permissions for user group and other.
>
> **[1:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=78)** Basically this list standard Linux permissions.
>
> **[1:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=82)** You can also view the same data in tabular format by passing the -t option to get facl.
>
> **[1:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=87)** Type in getfacl -t aclfile and hit enter.
>
> **[1:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=94)** Tabular format makes it a bit easier to see which permissions belong to which user.
>
> **[1:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=98)** Now let's set an ACL using setfacl.
>
> **[1:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=102)** Type in clear and the type in setfacl -m user: and we'll specify the root user :n for permissions rwx aclfile and hit enter.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=115)** This sets an ACL for the root user.
>
> **[1:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=118)** We cover setting ACLs in detail in another video of this course.
>
> **[2:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=121)** Let's list this file again using LS -l You may notice that the character after the permissions is now a plus symbol.
>
> **[2:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=130)** This tells you an ACL exists.
>
> **[2:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=133)** Let's use getfacl to list the ACLs in tabular format.
>
> **[2:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=137)** Type and getfacl -t aclfile and hit enter.
>
> **[2:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=143)** Here we can see our ACL for the root user that we just set.
>
> **[2:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=146)** Notice that the ACL user is lowercase whereas the standard Linux permissions users are uppercase.
>
> **[2:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=152)** We can also list ACLs and permissions recursively using getfacl and store this for later.
>
> **[2:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=157)** Permissions can be restored from this file.
>
> **[2:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=160)** Type in clear and then type in getfacl -R For recursive, space /home > home -perms.txt.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=172)** This will store the permissions in the home-perms file.
>
> **[2:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=175)** It may look like there's been an error message, but what does it telling you is that the permissions were stored without the leading forward slash.
>
> **[3:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=182)** This means none of the permissions are stored with an absolute path name.
>
> **[3:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=186)** To restore them, you'd need to go back to this exact directory before running the restore command.
>
> **[3:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=192)** Now let's look at the file with cat.
>
> **[3:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=194)** Type in cat home-perms.txt and hit enter.
>
> **[3:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=199)** This file contains the permissions and ownership for all files in /home.
>
> **[3:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/read-acls?u=76281980&t=203)** For more information on reading ACLs on files, see the getfacl man paid by typing in man getfacl and hitting enter.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (3), mkdir (2), cat (2), cd (1), find (1)
> **Env Vars:** acl (7), pwd (1)
> **Code Keywords:** let (6)
> **File Paths:** perms.txt (1), home-perms.txt (1)
> **Prerequisites:** install (1), you'll need (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)

#### Setting ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=0)** - [Instructor] Different distributions have different levels of support for ACLs.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=4)** If you're using a different system, you may want to ensure ACL support is installed and active.
>
> **[0:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=9)** To do so you'd mount the file system with the ACL option, and older versions of enterprise Linux, ACLs were turned on automatically for the root partition but not for additional drives.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=19)** ACLs are installed and turned on fully by default in Enterprise Linux 8, however, they may not be in other distributions.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=27)** I very much recommend adopting ACLs for your Linux systems.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=31)** In comparison to being creative with standard permissions along with special bits and custom UMass to solve your problems, ACLs are downright easy to implement.
>
> **[0:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=40)** With ACLs you just give the right people in groups the access they need, and you're done.
>
> **[0:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=45)** The command we use to assign file ACLs is setfacl.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=49)** The syntax is setfaclt -m for modify, user: to specify the user, and then the username: followed by the permissions in a simple symbolic notation, and lastly, the file or files to add the ACL to.
>
> **[1:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=65)** For example, if we wanted to set rwx permissions for the username named user1 on /home/file.txt, we'd type setfacl -m user:user1:rwx /home/file.text.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=81)** You can also use the shorter form and replace user colon with u colon.
>
> **[1:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=85)** It may save you a few characters even if it's not as readable.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=89)** Let's go to the terminal to use a setfacl command.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=92)** For this exercise, we'll use the ACL exercise directory that we created in a previous video.
>
> **[1:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=97)** Let's change into it now.
>
> **[1:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=98)** Type in cd ~/aclexercise and hit Enter.
>
> **[1:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=103)** Now that we're in it, let's create a file, type in touch datafile.txt and hit Enter.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=110)** Now let's create a user and two groups.
>
> **[1:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=112)** We'll need to elevate privileges with a sudo command for these operations.
>
> **[1:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=115)** Type in sudo useradd bob and hit Enter, and now enter your password.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=122)** Now let's add a couple of groups, type in sudo groupadd accounting, and hit Enter.
>
> **[2:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=130)** And then bring your line back and change accounting to marketing.
>
> **[2:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=136)** We can verify users by viewing the /etc/password file with cat, type in cat /etc/passwd and hit Enter.
>
> **[2:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=146)** At the bottom you should see the new user named Bob.
>
> **[2:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=149)** We can also verify the groups by viewing the etc group file again using cat.
>
> **[2:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=154)** Type in cat /etc/group and hit Enter.
>
> **[2:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=158)** Once again, you should see your new groups near the bottom.
>
> **[2:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=161)** Let's clear our screen and set some ACLs.
>
> **[2:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=164)** Let's add an ACL of rwx for Bob on datafiles.txt.
>
> **[2:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=169)** Type in set facl -m for modify user:Bob:rwx datafile.txt and hit Enter.
>
> **[3:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=182)** Now let's look at the ACL using get facl.
>
> **[3:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=184)** Type in getfacl -t for tabular datafile.txt and hit Enter.
>
> **[3:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=191)** In the output of get facl, we see the file name of datafile.txt, the user owner, which in my case is user 1, and the group owner, which is again, user 1.
>
> **[3:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=201)** The most interesting part is the ACL for the username Bob.
>
> **[3:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=204)** Here we are granting rwx to Bob.
>
> **[3:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=207)** To set a group ACL, we use setfacl again, but specify the word group instead of user, and specify the group name instead of the username.
>
> **[3:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=216)** Note, the group has to exist or it will give you a strange error message where the error starts near character 7.
>
> **[3:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=222)** Your hint is that character 7 is the first letter of the group name.
>
> **[3:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=226)** This tells you there's something wrong with that name.
>
> **[3:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=230)** We can set more than one ACL at the same time by specifying them separated by commas, type in clear and then type in setfacl -m for modify user:bob:rwx,group:accounting:rx datafile.txt and hit Enter.
>
> **[4:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=253)** This has the user ACL as well as the group ACL.
>
> **[4:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=256)** This is getting a bit long though, so let's shorten it a bit.
>
> **[4:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=259)** Bring your line back and change user to u and change the group to g and hit Enter again.
>
> **[4:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=269)** Note that if we set a user ACL and do not specify the user it sets the standard permissions for the user owner.
>
> **[4:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=276)** For instance, setfacl -m user::rwx datafile.txt
>
> **[4:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=285)** is the same as chmod u=rwx datafile.txt, using standard Linux permissions tools.
>
> **[4:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=294)** You can set the user owner permissions, group owner permissions and other using the same method using setfacl.
>
> **[5:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=302)** You can also set ACLs recursively using the dash capital R option.
>
> **[5:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=307)** for instance type in clear and then type in sudo setfacl -R for recursive -m for modify user:bob:rwx /home/bob.
>
> **[5:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=323)** We have to elevate privileges because we're setting ACLs on someone else's files.
>
> **[5:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=327)** This would set an ACL for Bob on all files in /home/bob.
>
> **[5:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/setting-acls?u=76281980&t=332)** For more information about setfacl check out the man page by typing in man setfacl and hit Enter.

> [!info]- Semantic Content
>
> **Env Vars:** acl (13)
> **CLI Commands:** sudo (4), cat (4), cd (1), chmod (1)
> **File Paths:** datafile.txt (7), home/file.txt (1), datafiles.txt (1)
> **Code Keywords:** let (9)
> **Analogies:** for instance (2), for example (1)
> **Cross-References:** previous video (1)
> **Documentation:** man page (1)
> **Tools:** terminal (1)

#### Manage Default ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=0)** - [Instructor] Standard Linux permissions only have one type of inheritance in the form of the SGID bit on directories.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=6)** In that case, the files and directories created inside inherit the group owner of the parent directory which there can only be one of.
>
> **[0:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=13)** For instance, if a user named Bob creates files in the directory named datadir, the user owner would be Bob, but the group owner would be accounting due to the SGID bit.
>
> **[0:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=23)** Keep in mind that the only thing being inherited is the group owner of the parent directory and not their permissions.
>
> **[0:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=30)** ACLs go much further as they let files and directories inherit any number of user or group permissions.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=35)** These ACLs are called default ACLs.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=38)** If you want to allow a user to access a directory, you set a regular file ACL on the directory.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=44)** If however, you want that user to access all files and directories created in the future inside of the directory, then set a default ACL.
>
> **[0:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=52)** Usually, you'll need to do both of these operations.
>
> **[0:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=56)** For this exercise, we'll continue to use the ACL exercise directory that we created in a previous video.
>
> **[1:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=62)** Change into it by typing in cd tilda/acl exercise and hit Enter.
>
> **[1:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=69)** Now that we're in the directory, let's create a new director called data.
>
> **[1:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=72)** Type in mkdir data and hit enter.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=76)** Now let's make a few files.
>
> **[1:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=77)** Type in touched data/file.txt and hit enter.
>
> **[1:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=83)** Now type in touch data/photo.jpg, and hit enter.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=89)** Now let's set an ACL for the username Bob.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=92)** We can verify that we have a Bob user by viewing the se password file with cat.
>
> **[1:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=96)** Type in cat /etc/passwd, and hit enter.
>
> **[1:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=102)** If you don't see a username Bob on your password file, then you can revisit the other videos in this chapter, or you can add him by typing in sudo useradd bob.
>
> **[1:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=113)** Now let's set an ACL to let Bob have access to a directory named data.
>
> **[1:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=118)** Type in clear, and then type in setfacl - m for modify, space user:bob:rwx data and hit enter, and verify by typing in getfacl -t for tabular, space, data and hit enter.
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=138)** Now the user Bob can access the data directory.
>
> **[2:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=141)** If there are files in the directory already, you will need to use recursive mode.
>
> **[2:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=146)** Bring your lines back and insert -R between setfacl and -m, and hit enter.
>
> **[2:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=154)** Now all files in the data directory should have the ACL for Bob, including any files and directories that may reside inside.
>
> **[2:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=160)** The previous step ensure that Bob has read, write and execute permissions on the directory.
>
> **[2:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=165)** They also ensure that all files that currently exist in the directory are accessible to Bob as well.
>
> **[2:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=171)** Let's create a default ACL for any future files that will be created in the directory.
>
> **[2:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=176)** Type in setfacl, space, -d default, space, -m for modify, space, user:bob:rwx data, and hit enter.
>
> **[3:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=189)** We can test a default ACL by creating a file in data as any other user.
>
> **[3:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=195)** I'm still logged in as user one, so I'll use that user.
>
> **[3:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=199)** Which user you use doesn't matter as long as you're not Bob.
>
> **[3:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=202)** Type in cd data and hit enter.
>
> **[3:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=205)** Now let's create a file.
>
> **[3:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=206)** Type in touch aclfile.txt and hit enter.
>
> **[3:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=211)** Now view the ACLs again, using getfacl.
>
> **[3:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=215)** Type in getfacl -t aclfile.txt.
>
> **[3:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=220)** Note the ACLs have been created already ensuring Bob will have access to this file.
>
> **[3:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=225)** If you create a directory, the ACL will look exactly the same.
>
> **[3:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=229)** Remember that an ACL and a directory will grant a user access to files assigned.
>
> **[3:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=233)** A default ACL, however, will ensure they have access to all files created in the directory in the future.
>
> **[3:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/manage-default-acls?u=76281980&t=239)** You will need to set both.

> [!info]- Semantic Content
>
> **Env Vars:** acl (11), sgid (2)
> **Code Keywords:** let (8), case, (1), continue (1), default, (1)
> **CLI Commands:** cd (2), cat (2), mkdir (1), make (1), sudo (1)
> **File Paths:** aclfile.txt (2), data/file.txt (1)
> **Cross-References:** previous video (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)

#### Delete ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=0)** - [ Instructor] Due to the added complexity of ACLs, there are three different ways of deleting ACLs on a file or directory.
>
> **[0:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=6)** For this exercise, you'll want to be in your ACL exercise directory that we created in a previous video.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=12)** To do so, type in cd -/aclexercise and hit Enter.
>
> **[0:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=17)** Let's create a directory to set ACLs on.
>
> **[0:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=20)** Type in mkdir acldir and hit Enter.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=24)** Now, let's add a couple of ACLs.
>
> **[0:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=26)** Type in setfacl -m user:root:rwx acldir and hit Enter.
>
> **[0:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=37)** Now bringing a line back and change user to group and hit Enter again.
>
> **[0:45](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=45)** Bringing a line back one more time, and change root to audio and hit Enter.
>
> **[0:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=53)** We'll also set a default ACL.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=55)** Type in setfacl -d, for default, space -m user:root:rwx acldir and hit Enter.
>
> **[1:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=70)** Now let's verify them with getfacl.
>
> **[1:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=73)** Type in getfacl acldir and hit Enter.
>
> **[1:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=77)** We should see our user ACL, group ACL's and a default ACL as well.
>
> **[1:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=82)** To delete ACL's we'll use the setfacl command again.
>
> **[1:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=86)** There are three different options for deleting ACLs.
>
> **[1:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=88)** Dash x deletes a specific user or group ACLs, dash k deletes all default ACL's, dash b deletes all ACL's.
>
> **[1:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=99)** To delete a specific ACL, specify the type in names such as user:route or group:audio.
>
> **[1:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=107)** If you just specify the name that the ACL is set on, then setfacl will assume it as a user ACL and attempt to delete it.
>
> **[1:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=114)** To delete a specific default ACL just specify default: the type:name, for instance, default:user:root.
>
> **[2:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=125)** To delete all default ACLs use the -k option.
>
> **[2:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=129)** To delete all ACL's, including user group and default, use the -b option.
>
> **[2:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=135)** Let's go back to our terminal and delete some ACLs.
>
> **[2:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=138)** First let's look at the ACL's on the directory.
>
> **[2:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=140)** Type in getfacl acldir and hit Enter.
>
> **[2:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=145)** Now let's delete the ACL for the root group.
>
> **[2:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=148)** Type in setfacl -x group:root acldir and hit Enter
>
> **[2:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=157)** and verify with getfacl.
>
> **[2:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=161)** Type in getfacl acldir and hit Enter.
>
> **[2:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=166)** We can see the root group ACL is gone.
>
> **[2:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=168)** Now let's just specify the username.
>
> **[2:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=172)** Type in clear and type in setfacl -x root acldir and hit Enter.
>
> **[3:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=180)** This will assume we mean a user ACL and delete the only one that matches.
>
> **[3:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=184)** Verify with getfacl.
>
> **[3:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=187)** Type in getfacl acldir and hit Enter.
>
> **[3:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=193)** Now let's delete all default ACL's.
>
> **[3:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=196)** Type in setfacl -k acldir and hit Enter, and, once again, verify with getfacl.
>
> **[3:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=205)** Type in getfacl acldir and hit Enter.
>
> **[3:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=209)** To delete any remaining ACL's we can use -b.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=214)** Type in clear and then type in setfacl -b acldir and hit Enter, and verify with getfacl.
>
> **[3:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=223)** Type in getfacl acldir and hit Enter again.
>
> **[3:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=228)** We can see, at this point, we've removed all ACL's.
>
> **[3:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=232)** If you wanted to remove all ACL's from all files in a directory tree we can use recursive mode.
>
> **[3:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=238)** Type in setfacl -capital R -b acldir and hit Enter.
>
> **[4:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/delete-acls?u=76281980&t=245)** This one recurs into acldir and remove ACLs from any files inside it, as well as the ACLs on the acldir itself.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (11), let (8), default, (2), default: (2), type: (1)
> **Env Vars:** acl (21)
> **CLI Commands:** cd (1), mkdir (1)
> **Cross-References:** previous video (1), go back to (1)
> **Analogies:** such as (1), for instance (1)
> **Tools:** terminal (1)

#### ACL tricks
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=0)** - [Instructor] It's very apparent that ACLs are an important addition to Linux permissions.
>
> **[0:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=4)** However, there are some other neat tricks that we can do with them.
>
> **[0:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=7)** They're slightly random but altogether, still very useful.
>
> **[0:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=11)** For this exercise, we will continue using our ACL exercise directory.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=15)** Change to it by typing in the cd tilde /aclexercise, and hit Enter.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=21)** And you can verify your path with pwd.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=24)** Now, let's create a directory and some files.
>
> **[0:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=26)** For expediency, I'll use brace expansion.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=29)** Type in mkdir space dir1 and hit Enter.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=33)** And then type touch space dir1/file{1,2}.txt, and hit Enter.
>
> **[0:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=44)** This is easier to visualize if we use the tree command.
>
> **[0:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=47)** Type in tree and hit Enter.
>
> **[0:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=49)** Now, let's add an ACL.
>
> **[0:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=51)** Type in setfacl space dash m for modify space user:root:rwx space dir1/file1.txt, and hit Enter.
>
> **[1:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=65)** This will add an ACL for root to file1.txt.
>
> **[1:09](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=69)** Verify with getfacl dash capital R space dir1.
>
> **[1:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=74)** This will list all ACLs and all files in dir1.
>
> **[1:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=78)** Now, that we have our exercise set up, let's learn some tricks.
>
> **[1:20](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=80)** First, type in clear.
>
> **[1:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=82)** If you want to copy an ACL from one file to another, we can read the ACL with getfacl and then pipe it to setfacl.
>
> **[1:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=89)** Type in cd space dir1 and hit Enter.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=92)** Now, type in getfacl space file1.txt space pipe space setfacl space --set-file equals hyphen
>
> **[1:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=107)** space file2.txt and hit Enter.
>
> **[1:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=111)** This reads the ACL on file1.txt and pipes it to the setfacl command, which then sets the ACL on file2.txt.
>
> **[1:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=119)** Verify this with getfacl.
>
> **[2:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=120)** Type in getfacl space file2.txt.
>
> **[2:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=125)** You should see that file2 now has the same ACL that we set on file1.
>
> **[2:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=130)** To save an ACL to a file, use getfacl-c.
>
> **[2:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=134)** Type in getfacl space dash c space file1.txt space greater than space acls.txt and hit Enter.
>
> **[2:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=145)** This omits the header, so we just have ACL data and redirects it to a file named acls.txt.
>
> **[2:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=152)** To set ACLs from this acls.txt file, we will use the dash capital M option with setfacl.
>
> **[2:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=160)** Type in setfacl space dash capital M space acls.txt space file1.txt and hit Enter.
>
> **[2:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=170)** This takes to save the ACLs from the acls.txt file and applies them to the appropriate files.
>
> **[2:57](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=177)** We can recursively get all ACLs and store them in a file as well.
>
> **[3:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=180)** For this exercise, let's cd back to the parent directory.
>
> **[3:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=184)** Type in cd space dot dot and hit Enter.
>
> **[3:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=187)** Now, type in getfacl space dash capital R for recursive space dir1 space greater than space dir1tree.facl and hit Enter.
>
> **[3:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=201)** The name of the file is irrelevant, you can name yours anything you want.
>
> **[3:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=204)** To restore the entire ACL tree, use setfacl with a dash dash restore option.
>
> **[3:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=208)** Type in setfacl space dash dash restore space dir1tree.facl
>
> **[3:39](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=219)** and hit Enter.
>
> **[3:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=221)** If we have an ACL set and we like it to be inherited, we just need a copy to the default ACL.
>
> **[3:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=227)** Type in getfacl space dir1 space pipe space setfacl space dash d for default, space dash capital M hyphen space dir1 and hit Enter.
>
> **[4:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=242)** There's getfacl and then pipes to setfacl dash d, which sets the default ACL.
>
> **[4:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=247)** You want to squash all user access rights without destroying their ACLs, we can use a mask.
>
> **[4:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=253)** Let's get the ACLs first with getfacl.
>
> **[4:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=256)** Type in clear then type in getfacl space dir1 and hit Enter.
>
> **[4:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=261)** Then set the mask by typing it setfacl space dash m for modify space mask colon colon hyphen space dir1 and hit Enter and verify again with getfacl.
>
> **[4:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=277)** Type in getfacl space dir1 and hit Enter.
>
> **[4:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=281)** We can see that the ACLs are still there but the effective permissions are nothing.
>
> **[4:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=286)** To lift the restriction, just use the mask back to rwx.
>
> **[4:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=290)** Bring your line back and change the hyphen to rwx and hit Enter and then use getfacl again to verify.
>
> **[4:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=299)** If you want to preserve ACLs when you copy files, you want to specify the dash p option for cp.
>
> **[5:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=305)** Another choice is to specify the dash a option, which is archive.
>
> **[5:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=311)** Type in clear then type in cp space dash p space dir1/file1.txt space file3.txt and hit Enter.
>
> **[5:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=322)** This makes a copy of dir1/file1.txt and names it file3.txt.
>
> **[5:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=328)** Because we passed the dash p option, it also saves the ACL data.
>
> **[5:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=332)** Verify with getfacl.
>
> **[5:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=335)** Type in getfacl space file3.txt and hit Enter and we can see our ACL.
>
> **[5:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=341)** When we backup files with ACLs, we want to retain this data.
>
> **[5:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=346)** Type in tar space dash dash acls space dash c for compress, z for zip, v for verbose, p for permissions, and f for file space dir1.tar.gz space dir1.
>
> **[6:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=364)** This takes all of the files in dir1 and puts them in the dir1.tar.gz archive and saves the ACLs.
>
> **[6:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/acl-tricks?u=76281980&t=372)** Now, we have a backup of our dir1 directory with saved ownership, permissions, and that ACLs.

> [!info]- Semantic Content
>
> **File Paths:** file1.txt (5), acls.txt (5), dir1/file1.txt (3), file2.txt (3), file3.txt (3)
> **Env Vars:** acl (16)
> **CLI Commands:** cd (4), tar (3), cp (2), mkdir (1)
> **Code Keywords:** let (5), continue (1), default, (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=5)** - [Instructor] You've now come to the end of the Linux access control list chapter.
>
> **[0:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=8)** This challenge will test your knowledge and understanding of what you've learned.
>
> **[0:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=12)** In this chapter, you learned about file access control lists.
>
> **[0:15](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=15)** This challenge will focus on granting access to users and groups that need it using ACL's.
>
> **[0:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=21)** We're going to use the same scenario that we did in the standard Linux permissions challenge.
>
> **[0:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=24)** I've changed the names of it to keep from conflicting with the previous challenge.
>
> **[0:28](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=28)** We have a fictitious engineering company that makes products and sells them to consumers.
>
> **[0:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=33)** The developers create technical drawings and documents and the sales department needs access to those items to create marketing material.
>
> **[0:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=41)** Just to keep things separate from our previous challenge, we'll use a shared directory at /home/development where the developers placed their documents.
>
> **[0:48](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=48)** All developers can enter, read and write files.
>
> **[0:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=52)** Newly created files will be accessible to the developers group.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=55)** You may notice a difference in wording there.
>
> **[0:58](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=58)** Users can not delete files not created by themselves.
>
> **[1:01](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=61)** You will need users named Steve, Pam and Mark.
>
> **[1:04](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=64)** Steve and Pam will need to be in the developers group.
>
> **[1:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=67)** Mark is in sales.
>
> **[1:08](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=68)** The sales group needs read access to the developers directory.
>
> **[1:12](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=72)** You will need to create users and groups as well as place users in groups.
>
> **[1:16](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=76)** Briefly, here are the commands to do so.
>
> **[1:18](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=78)** To create a new user type in sudo space useradd space the username.
>
> **[1:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=83)** In order to log in as that user to test their permissions, they will need a password.
>
> **[1:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=87)** To give the user a password, type in sudo space passwd space username and enter the password twice.
>
> **[1:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=94)** You can verify the user's existence by viewing the etc password file and going to the bottom.
>
> **[1:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=100)** You will also need groups.
>
> **[1:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=101)** To create a group type in sudo space groupadd space the group name and hit enter.
>
> **[1:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=106)** To add a user to the group, use the group password command.
>
> **[1:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=109)** Type in sudo space gpasswd space dash a space the username space the group name.
>
> **[1:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=116)** To verify that the user is in the group, view the etc group file, and again, go to the bottom.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=122)** This challenge will need to be done using file access control lists and the sticky bit.
>
> **[2:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=126)** Before you try to solve the challenge, I recommend creating a VM snapshot.
>
> **[2:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=130)** This way, if you need to start over, you can roll back to the snapshot.
>
> **[2:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/challenge-acls?u=76281980&t=133)** Have fun with this challenge and good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (4)
> **Code Keywords:** delete (1)
> **Env Vars:** acl (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: ACLs
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=0)** - [Instructor] For the Access Control List challenge, we needed to create a directory of /home/development.
>
> **[0:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=10)** Developers need to be able to enter and read and write files in the development directory.
>
> **[0:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=14)** Newly created files need to be accessible to the developers group, notice the change in wording.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=19)** With ACLs, we have more inheritance than just group ownership.
>
> **[0:22](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=22)** Users should not be able to delete files that they didn't create.
>
> **[0:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=26)** Steve and Pam need to belong to the developers group.
>
> **[0:29](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=29)** Mark needs to belong to the sales group.
>
> **[0:31](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=31)** The sales group needs read only access to the development directory.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=35)** So let's get to solving this problem.
>
> **[0:37](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=37)** First, let's make our users.
>
> **[0:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=38)** Type in sudo space useradd space Steve and hit enter.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=42)** Type in your password if prompted.
>
> **[0:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=46)** Bring your line back and change Steve to Pam and hit enter again.
>
> **[0:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=50)** And then bring your line back and change Pam to Mark and hit enter again.
>
> **[0:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=55)** Now let's give them all passwords, so we can log in as them and test our solution.
>
> **[0:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=59)** Type in sudo space P A S S W D space Steve and hit enter.
>
> **[1:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=63)** And type in Steve's password twice.
>
> **[1:07](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=67)** Bring your line back and change Steve to Pam and do it again.
>
> **[1:13](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=73)** And then bring your line back and change Pam to Mark and do it one last time.
>
> **[1:21](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=81)** Now let's make our developers group.
>
> **[1:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=83)** Type in sudo space groupadd space developers and hit enter.
>
> **[1:30](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=90)** And let's add Steve and Pam to it.
>
> **[1:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=92)** Type in sudo space G P A S S W D space -a space Steve space developers and hit enter.
>
> **[1:41](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=101)** Now bring your line back and change Steve to Pam and hit enter again.
>
> **[1:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=107)** Now let's create a sales group and add Mark to it.
>
> **[1:50](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=110)** Type in sudo space groupadd space sales and hit enter.
>
> **[1:54](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=114)** And then add Mark by typing in sudo space G P A S S W D space -a for add space Mark space sales and hit enter again.
>
> **[2:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=122)** Now let's create the development directory.
>
> **[2:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=126)** Type in sudo space mkdir space /home/development and hit enter and we'll assign ownership to it.
>
> **[2:14](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=134)** We could make root the user owner and the developers group the group owner, but we don't have to with access control lists.
>
> **[2:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=139)** Let's restrict all non-ACL permissions by making root the user and group owner.
>
> **[2:25](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=145)** Type in sudo space chown space root:root space /home/development and hit enter.
>
> **[2:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=152)** This means that only root can access this directory unless an ACL allows it.
>
> **[2:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=156)** The development group needs to be able to enter the directory as well as reading and writing files.
>
> **[2:40](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=160)** Let's set the permissions.
>
> **[2:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=162)** Here's where this challenge starts to differ from the standard Linux permissions challenge.
>
> **[2:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=166)** Type in sudo space setfacl space -m for modify space group:developers:rwx space /home/development and hit enter.
>
> **[3:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=183)** Now the users in the developers group have read, write, and execute permissions.
>
> **[3:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=186)** Let's also set inheritance, so all future files are accessible to the developers group.
>
> **[3:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=191)** Bring your line back and insert a -d between setfacl and -m and hit enter.
>
> **[3:17](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=197)** It's as easy as that.
>
> **[3:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=199)** I've also specified that users should not be able to delete files that were not created by them.
>
> **[3:23](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=203)** This is the sticky bit, so let's set that as well.
>
> **[3:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=206)** Type in sudo space chmod space O + T space /home/development.
>
> **[3:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=213)** Now let's deal with sales.
>
> **[3:34](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=214)** Sales needs to have access to files and /home/development.
>
> **[3:38](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=218)** With standard Linux permissions, we had a problem, because we can only assign permissions to one group on a file or directory.
>
> **[3:43](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=223)** However, this is where access control lists shine.
>
> **[3:46](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=226)** It doesn't matter if Mark is the only one in sales.
>
> **[3:49](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=229)** There could be a thousand people in sales.
>
> **[3:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=231)** There could be multiple different sales groups.
>
> **[3:53](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=233)** It's irrelevant with access control lists.
>
> **[3:55](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=235)** Our only choice with standard Linux permissions was to use the permissions in the other section.
>
> **[4:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=240)** This was not ideal as it allowed everyone to read the files in the shared directory.
>
> **[4:03](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=243)** However, with ACLs, we have a lot more power.
>
> **[4:06](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=246)** Let's set an ACL for the sales group, granting them read and execute permissions.
>
> **[4:11](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=251)** Type in sudo space setfacl space -m space group:sales:rx
>
> **[4:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=259)** space /home/development and hit enter and that's it.
>
> **[4:24](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=264)** Much easier than standard Linux permissions.
>
> **[4:26](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=266)** We could go as far as setting a default ACL for sales, so they will continue to have access to newly created files in this directory.
>
> **[4:33](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=273)** This was not even possible with standard Linux permissions.
>
> **[4:36](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=276)** Bring your line back and insert a -d between setfacl and -m and hit enter.
>
> **[4:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=282)** That should take care of it.
>
> **[4:44](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=284)** Notice how much easier it is to set permissions with access control lists.
>
> **[4:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=287)** With ACLs, there's no reason to twist your permission system to cope with normal problems.
>
> **[4:52](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=292)** With ACLs, you just think of who needs what access and you set it.
>
> **[4:56](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=296)** If they need it in the future, then also set a default ACL.
>
> **[4:59](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/solution-acls?u=76281980&t=299)** It's so easy that I recommend using it all the time.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (11), make (3), mkdir (1), chown (1), chmod (1)
> **Code Keywords:** let (13), delete (2), continue (1)
> **Env Vars:** acl (5)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=0)** - [Grant] Thank you for joining me in this course.
>
> **[0:02](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=2)** In this course, we covered how to gather information about Linux files, including file types, ownership, and permissions, as well as how to manage files themselves.
>
> **[0:10](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=10)** We learned about globbing for files, pattern creation using brace expansion, and the magic of extended globs, which brings the power of regular expressions to file matching.
>
> **[0:19](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=19)** We learned about the standard Linux permission system and its limitations and moved on to using access control lists to solve those limitations.
>
> **[0:27](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=27)** We learned about ACL inheritance and neat tricks like backing up permissions to make our lives easier.
>
> **[0:32](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=32)** This isn't the end, and I encourage you to keep learning.
>
> **[0:35](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=35)** The next course in this series covers Linux shells and processes where I teach you tips and tricks on being faster and more efficient on the command line.
>
> **[0:42](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=42)** I'd like to recommend that you go to my author page and check out my other Linux courses in the library.
>
> **[0:47](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=47)** Also, look at the other courses in the Linux system administrator learning path.
>
> **[0:51](https://www.linkedin.com/learning/linux-files-and-permissions-14025387/next-steps?u=76281980&t=51)** My name is Grant McWilliams, and thank you for watching.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** acl (1)
> **Cross-References:** we covered (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [grant] (1)


## Path Context

### In [[Getting Started with Linux]]
← [[Linux- Overview and Installation]] | **3 of 3**

## Appears In

- [[Getting Started with Linux]]

## Related Courses

_Courses sharing skills:_

- [[Linux- Overview and Installation]] — Linux
- [[Introduction to Linux (2021)]] — Linux
