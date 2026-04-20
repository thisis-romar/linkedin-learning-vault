---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: powershell-automating-it-administration
url: "https://www.linkedin.com/learning/powershell-automating-it-administration"
duration_minutes: 202
duration: 3h 22m
level: Intermediate
updated: 8/21/2023
learners: 5479
skills:
  - Powershell
  - IT Automation
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEOJ1jz7OFisA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692300887654?e=2147483647&amp;v=beta&amp;t=tiv2FqKIfPekseFzWZkEalm_THkCjGtWLiDsK8ew37g"
linkedin_topic: Network and System Administration
learning_paths:
  - Powershell- Automate IT Tasks and Microsoft 365 Administration
  - Networking and Administration Fundamentals
path_count: 2
tags:
  - course
  - topic/network-and-system-administration
  - topic/cloud-computing
  - topic/security
  - skill/powershell
  - skill/it-automation
status: not-started
created: 2026-04-20
---

![PowerShell: Automating IT Administration](https://media.licdn.com/dms/image/v2/D560DAQEOJ1jz7OFisA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692300887654?e=2147483647&amp;v=beta&amp;t=tiv2FqKIfPekseFzWZkEalm_THkCjGtWLiDsK8ew37g)

# PowerShell: Automating IT Administration

> Learn how to automate routine IT tasks and free up more time for complex troubleshooting and innovation. Join instructor Liam Cleary as he covers next-level scripting using prebuilt PowerShell modules, conditional logic, and loops.
Liam shows how to handle errors, enable delegated and remote administration, and run jobs in the background. Plus, learn how to schedule tasks and jobs so you don't hav

> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration) | 3h 22m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Liam Cleary]]

## Resources

- Exercise files available

## Skills Covered

- Powershell
- IT Automation

## Table of Contents

### Introduction

#### IT automation with PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/it-automation-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/it-automation-with-powershell?u=76281980&t=0)** - [Liam] This course is going to take you on a journey to help you understand core PowerShell Constructs and Syntax, specifically for working with system information, as well as retrieving that information from clients and servers.
>
> **[0:13](https://www.linkedin.com/learning/powershell-automating-it-administration/it-automation-with-powershell?u=76281980&t=13)** You will understand the importance of security controls and restrictions by using just enough administration along with custom roles and capabilities.
>
> **[0:21](https://www.linkedin.com/learning/powershell-automating-it-administration/it-automation-with-powershell?u=76281980&t=21)** You'll then lastly, find out how to create custom background jobs as well as scheduled jobs and also scheduled tasks.
>
> **[0:28](https://www.linkedin.com/learning/powershell-automating-it-administration/it-automation-with-powershell?u=76281980&t=28)** Hi, I'm Liam, join me for the rest of this course to understand how to use PowerShell for Automating IT Administration tasks.

> [!info]- Semantic Content
>
> **Tools:** powershell (2)
> **CLI Commands:** find (1)
> **Speakers:** - [liam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/what-you-should-know?u=76281980&t=0)** - [Instructor] To be successful with PowerShell it is crucial to possess fundamental skills in networking and operating systems, as they form the foundation for understanding how devices communicate and how operating systems function.
>
> **[0:14](https://www.linkedin.com/learning/powershell-automating-it-administration/what-you-should-know?u=76281980&t=14)** A basic understanding of PowerShell, the scripting language is necessary due to its widespread use in this course, especially for managing Windows-based servers.
>
> **[0:24](https://www.linkedin.com/learning/powershell-automating-it-administration/what-you-should-know?u=76281980&t=24)** A lab environment is also helpful consisting of both client and a server, and a must have for your own hands-on experience and testing.
>
> **[0:32](https://www.linkedin.com/learning/powershell-automating-it-administration/what-you-should-know?u=76281980&t=32)** It also provides a safe space for you to learn, make mistakes, and master those new skills.
>
> **[0:38](https://www.linkedin.com/learning/powershell-automating-it-administration/what-you-should-know?u=76281980&t=38)** Please note that while we'll utilize PowerShell extensively, this course won't cover all the basic syntax of PowerShell.
>
> **[0:45](https://www.linkedin.com/learning/powershell-automating-it-administration/what-you-should-know?u=76281980&t=45)** Therefore, a preliminary understanding is beneficial to fully grasp all of this content.

> [!info]- Semantic Content
>
> **Tools:** powershell (4)
> **CLI Commands:** make (1)
> **Code Keywords:** function (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 1. Creating Reusable Code Using PowerShell

#### Why automate IT administration tasks?
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=0)** - [Narrator] Why should we automate IT administration tasks?
>
> **[0:04](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=4)** It's really important for us to consider automating IT administration tasks because first off, it will save us time and effort.
>
> **[0:12](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=12)** Automating repetitive and time consuming tasks allows IT administrators to focus on higher value activities that require more input and expertise.
>
> **[0:24](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=24)** It will also help reduce errors.
>
> **[0:26](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=26)** Automating tasks reduces the likelihood of me making an error.
>
> **[0:31](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=31)** It will help improve the overall reliability and stability of our IT systems.
>
> **[0:37](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=37)** And then from a consistency perspective, automation ensures that tasks are performed consistently and according to predefined rules, reducing the risk of configuration drift and other inconsistencies.
>
> **[0:51](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=51)** We should also consider the fact that it's a scalable option.
>
> **[0:55](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=55)** Automation makes it easier to manage larger and more complex IT environments as it allows for efficient management of a large number of systems and devices, often at the same time.
>
> **[1:07](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=67)** From a compliance perspective, automation can help you as an organization comply with industry and regulatory requirements by enforcing standard operating procedures and ensuring that policies are consistently applied.
>
> **[1:22](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=82)** And then of course, it always comes down to money, cost savings.
>
> **[1:25](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=85)** Automating your IT administration tasks can lead to cost savings by reducing the need for manual labor, minimizing downtime and improving the overall efficiency of IT operations.
>
> **[1:38](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=98)** The benefits of using PowerShell for automating IT administration tasks instead of other scripting languages really come down to these three.
>
> **[1:47](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=107)** The first one is it's built for Windows.
>
> **[1:50](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=110)** PowerShell is a native Windows automation tool that is specifically designed for Windows-based environments.
>
> **[1:57](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=117)** This means that it integrates seamlessly with Microsoft products and services making it an ideal tool for automating tasks in a Windows environment.
>
> **[2:07](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=127)** There's also a wide range of functionality.
>
> **[2:10](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=130)** PowerShell offers automation for IT, including command line interfaces, scripting and automation frameworks.
>
> **[2:19](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=139)** It also supports a variety of data formats such as XML JSON, and CSV, making it a versatile tool for automating your tasks.
>
> **[2:29](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=149)** And of course, it's fairly easy to learn and use.
>
> **[2:33](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=153)** PowerShell has a user-friendly syntax and it's easy to learn and use, even for IT administrators who have little or no programming experience.
>
> **[2:42](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=162)** It also includes extensive documentation and a large number of users who share tips, tricks and best practices within the community.
>
> **[2:51](https://www.linkedin.com/learning/powershell-automating-it-administration/why-automate-it-administration-tasks?u=76281980&t=171)** This makes it an accessible and great tool for you as an IT administrator who want to automate your daily tasks but may not have that programming background and be concerned about that.

> [!info]- Semantic Content
>
> **Tools:** powershell (4), command line (1)
> **Env Vars:** xml (1), json (1), csv (1)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** require (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### What are PowerShell modules, and why are they useful?
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=0)** - [Instructor] What are PowerShell modules, and why are they useful?
>
> **[0:03](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=3)** Well, PowerShell modules are self-contained packages of PowerShell commands, functions, and scripts that provide additional functionality to PowerShell.
>
> **[0:12](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=12)** These modules are designed to make it easier for IT administrators and developers to manage, reuse, and share PowerShell code.
>
> **[0:22](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=22)** By organizing code into smaller, more manageable pieces, modules help to reduce duplication and streamline the development workflow.
>
> **[0:30](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=30)** Additionally, modules can be easily shared with others either through a private repository or via public repositories, such as the PowerShell Gallery or GitHub.
>
> **[0:41](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=41)** This makes it easier for IT administrators and developers to collaborate and build on each other's work, ultimately leading to more efficient and effective PowerShell based automation solutions.
>
> **[0:53](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=53)** PowerShell modules offer several benefits to you as an IT administrator and developer.
>
> **[0:59](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=59)** They help to organize code into smaller, more manageable pieces, making it easier to maintain and reuse code in different scripts and projects.
>
> **[1:09](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=69)** By promoting code reusability, modules can be used across different PowerShell sessions and projects, reducing the need to rewrite code.
>
> **[1:18](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=78)** Additionally, modules can be easily shared with others either through a private repository or public repositories.
>
> **[1:25](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=85)** Finally, modules can be versioned, allowing users to specify which version of a module they want to use and ensure compatibility with other code that relies on that module.
>
> **[1:37](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=97)** PowerShell modules can be classified into three types, standard, third party, and custom.
>
> **[1:45](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=105)** Standard modules are pre-installed with PowerShell, or with Windows Server, and provide core functionality for managing Windows based systems.
>
> **[1:53](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=113)** They contain commandments and functions that enable you as an IT administrator to perform common tasks, such as managing files, directories, and system settings.
>
> **[2:04](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=124)** Third party modules, on the other hand, are developed by third party vendors or community members to provide additional functionality not found in those standard modules.
>
> **[2:14](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=134)** Finally, custom modules are developed in-house by you or developers to meet specific needs within the organization.
>
> **[2:23](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=143)** These modules can be shared within the organization or with other organizations depending on their intended use.
>
> **[2:30](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=150)** PowerShell modules are easy to install and manage.
>
> **[2:34](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=154)** They can be installed from different sources, such as the PowerShell Gallery, a file share, or even a local directory.
>
> **[2:41](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=161)** Once installed, a module can be imported into a PowerShell session using the Import Module command.
>
> **[2:48](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=168)** This makes the commandlets and functions in the module available for use.
>
> **[2:54](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=174)** Updating modules to newer versions is also a simple process using the update module commandlet.
>
> **[3:01](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=181)** Finally, when a module is no longer needed, it can be removed from the system using the Remove-Module command.
>
> **[3:09](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=189)** This straightforward installation importing, updating, and removal process allows you as an IT administrator and developer to efficiently manage your PowerShell modules and ensure the automation solution stays up to date.
>
> **[3:23](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=203)** Now, when we wish to utilize a PowerShell module, we first need to install the module by name.
>
> **[3:30](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=210)** So in this instance, we are going to install a module by name from a PowerShell gallery.
>
> **[3:35](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=215)** If we then wish to utilize that module within the current PowerShell session, we need to import the module by name into that PowerShell session.
>
> **[3:46](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=226)** If we then wish to update the module, we then use that Update-Module by name, and then, of course, we can remove the module.
>
> **[3:54](https://www.linkedin.com/learning/powershell-automating-it-administration/what-are-powershell-modules-and-why-are-they-useful?u=76281980&t=234)** Removing the module will remove it from the current PowerShell session, not necessarily remove it from the machine that we are on.

> [!info]- Semantic Content
>
> **Code Keywords:** module (17), finally, (3), private (2), public (2), self (1)
> **Tools:** powershell (20), github (1)
> **Analogies:** such as (3)
> **Prerequisites:** install (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Using conditional statements and comparisons
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=0)** - [Instructor] So, here we are on a Windows 11 machine.
>
> **[0:03](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=3)** And first off, there's a couple of things that have been installed.
>
> **[0:06](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=6)** If I click into the PowerShell here, as it's Windows 11, we have the Windows terminal installed.
>
> **[0:12](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=12)** And so I've installed PowerShell 7.
>
> **[0:14](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=14)** If I'd use the drop down, you can see I have Windows PowerShell, and I also have PowerShell.
>
> **[0:18](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=18)** That means I've installed Windows 7 PowerShell.
>
> **[0:22](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=22)** Secondly, I've also installed Visual Studio Code purely based on the fact that I have some files I wish to utilize.
>
> **[0:29](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=29)** And so it's easier as an editor to be able to go through and see them.
>
> **[0:33](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=33)** So now that we've got that, let's focus on understanding conditional statements and comparison.
>
> **[0:40](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=40)** Now, PowerShell provides a platform for us to be able to do some kind of logic that will say, "Hey, if this is this, do that."
>
> **[0:48](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=48)** And to make it more complicated too.
>
> **[0:50](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=50)** So as a simple example here, in our first one, we've defined a variable.
>
> **[0:55](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=55)** The variable here is called number.
>
> **[0:57](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=57)** And then of course I've populated that with a value.
>
> **[1:00](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=60)** Now, in order for me to execute this within Visual Studio Code, I've also installed the Visual Studio PowerShell extension, which means I can then right click on the object here and say Run Selection, and it will be populated here at the bottom.
>
> **[1:13](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=73)** If I want to see what that value is, then press Number.
>
> **[1:17](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=77)** You can see it's populated with the number five.
>
> **[1:20](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=80)** Now, when we use conditional statements in comparisons, one of our first options is an if statement, a very simple piece of logic that says if whatever the variable is and then some comparison to a value.
>
> **[1:33](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=93)** So, for example here it says if, the number variable, or the number five in this instance, is greater than three, then it's going to give me a specific value.
>
> **[1:44](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=104)** So, I'm going to select this object here, go and say Run Selection.
>
> **[1:48](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=108)** And it will come back and say if the number is greater than three, it's going to write out a value, which it did.
>
> **[1:53](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=113)** It said here the number is greater than three.
>
> **[1:56](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=116)** We can also make sure that it's actually running the actual text that we want it to.
>
> **[2:01](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=121)** I can say, "Hey, let's make that dark yellow."
>
> **[2:04](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=124)** Let's rerun that again, right click, and say Run Selection.
>
> **[2:06](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=126)** And sure enough, it is meeting that piece of logic.
>
> **[2:10](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=130)** So, let me just clear this section here.
>
> **[2:12](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=132)** Now of course, if we want to change whatever the value is and, say, set that as number one, I can repopulate, rerun that command here, like so, and this time I don't get any message.
>
> **[2:24](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=144)** I do get the code written out purely because I've selected it, but I don't get the output.
>
> **[2:30](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=150)** So when we use a singular if statement, we are just checking for a value.
>
> **[2:35](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=155)** So, what about if we had multiple values?
>
> **[2:38](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=158)** So in this instance here, we're using what's called if else.
>
> **[2:42](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=162)** So if it's this, do that, else, do something else.
>
> **[2:45](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=165)** So in this example, I'm using the word weather.
>
> **[2:48](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=168)** So first off, let me clear this bottom section here.
>
> **[2:51](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=171)** I'm going to right click Weather and choose Run.
>
> **[2:54](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=174)** Then I can say, "What is in the weather?"
>
> **[2:56](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=176)** And sure enough, it says rainy.
>
> **[2:58](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=178)** So, now my statement is, if the weather or the text value or the number, whatever it would be, is equal to the word sunny, then I need to write the word, "It's sunny today".
>
> **[3:11](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=191)** Otherwise, it's something else.
>
> **[3:13](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=193)** So, what we'll do, we'll just do some foreground colors here.
>
> **[3:16](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=196)** And we'll set that as green.
>
> **[3:18](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=198)** And then if it's not the right value, I'm going to set it as red.
>
> **[3:22](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=202)** So, these are just properties for commandlets that exist.
>
> **[3:25](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=205)** So, let me just select this here, right click the whole thing and choose Run.
>
> **[3:29](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=209)** And we get the, "It's not sunny today" because it didn't match the initial value.
>
> **[3:35](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=215)** So from a very simplistic view, we have this if logic type statement.
>
> **[3:40](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=220)** Now of course, if I wanted to go through and change that value to actually be sunny, I'm going to right click here, choose Run Selection.
>
> **[3:48](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=228)** And I'll tell you what we'll do.
>
> **[3:49](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=229)** We'll just clear this bottom bit here, right click the whole thing, choose Run Selection.
>
> **[3:53](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=233)** And this time we get the green value, it's sunny today.
>
> **[3:57](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=237)** So, single if, we'll just have one return, multiple if else, can have multiple returns that come in.
>
> **[4:04](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=244)** Now based on that, what about if we wanted to do what's called if else, if else?
>
> **[4:10](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=250)** So, maybe we're going to do some other logics, so we have more than two values we wish to check.
>
> **[4:15](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=255)** So, let me clear this bottom section again, and I'm going to set my temperature variable to 35 and just click Run Selection.
>
> **[4:23](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=263)** Obviously, as you can tell by my accent, we are going to be talking Celsius here.
>
> **[4:28](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=268)** So, what we've got here is I'm checking the value, and what I'm going to do is actually just remove this check here and then press that.
>
> **[4:36](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=276)** And you'll see that we get a list of values that we can choose.
>
> **[4:41](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=281)** If I'm just going to scroll here, you can see if it's equal to, if it's not like, is, like, match, not equal to, not like, this is your comparison option that is available to you.
>
> **[4:53](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=293)** I'm just going to say LT, which means it's going to be less than.
>
> **[4:56](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=296)** And so I'm going to say if the temperature which is currently 35 is less than 32 then I'm going to write a value.
>
> **[5:05](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=305)** Then I actually want to do some kind of range between.
>
> **[5:08](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=308)** So if it's greater than 32 so obviously anything more than that, but it's less than 50 then I'm going to say it's cold.
>
> **[5:18](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=318)** And then the other one is I've got a default output of if it doesn't match any of those, then say it's warm.
>
> **[5:24](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=324)** So let's see what this comes back with.
>
> **[5:25](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=325)** Remember, our value is 35.
>
> **[5:28](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=328)** So if I do run, it's going to come back and say it's cold because it meets line 25.
>
> **[5:34](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=334)** If the temperature is greater than 32 but less than this, that's where it goes.
>
> **[5:38](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=338)** If I now change that to be 15, for example go back to the temperature, choose run selection and then select that.
>
> **[5:46](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=346)** We'll just clear this bottom to make it easier to read right click here, choose run selection.
>
> **[5:51](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=351)** It now says it's freezing because it meets that logic.
>
> **[5:54](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=354)** Now it's really important to understand this for PowerShell that as we are building logic into PowerShell there'll be times where we need to handle if statements.
>
> **[6:04](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=364)** So another option in between kind of if statements and comparisons is really what's called a switch statement.
>
> **[6:12](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=372)** Now a switch statement is a little bit different.
>
> **[6:14](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=374)** What it does is it takes the value that we wish to check and then looks for that value and then does something.
>
> **[6:21](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=381)** So in my code here I have day of the week I'm going to right click this one and choose Run and then I can check that it is Monday.
>
> **[6:29](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=389)** Sure enough it is, I'm going to clear that.
>
> **[6:31](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=391)** And then the switch statement says take this value, this variable day of week and if the value in there matches any one of these other options, then do something.
>
> **[6:43](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=403)** And if it doesn't, do something based on the default.
>
> **[6:47](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=407)** So what should happen here is it should say go to the day of the week, find out the value is Monday hit the Monday option and write this value out, saying today is Monday.
>
> **[6:56](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=416)** So let's select that whole switch statement.
>
> **[6:59](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=419)** We can run this here and it should say today is Monday.
>
> **[7:02](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=422)** Perfect.
>
> **[7:03](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=423)** Now I'm just writing a value out.
>
> **[7:05](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=425)** But if you are building some logic here, maybe you would say if the name of the PC that you found on the network or if name of the process that's executing on the machine equals a certain thing then do some specific type of logic.
>
> **[7:19](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=439)** I'm using a simplistic example here of just being able to pick days to be able to do that.
>
> **[7:24](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=444)** We can then also start to do comparisons between various things.
>
> **[7:28](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=448)** So I'm going to scroll a bit further here so we can see the whole thing.
>
> **[7:32](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=452)** And what we'll see is we have two variables this time I've just called them A and B, A is 10, B is 20.
>
> **[7:39](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=459)** So I'm going to populate those just to make sure we have them set.
>
> **[7:42](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=462)** And then I'll clear this and make this a little bit bigger.
>
> **[7:44](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=464)** And then we're going to have some logic.
>
> **[7:46](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=466)** So we've got a couple of different if statements.
>
> **[7:49](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=469)** So if A is equal to B then it's going to write some value that says A is equal to B.
>
> **[7:55](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=475)** And if it doesn't, it's going to say A is not equal to B because we are using the not equal option.
>
> **[8:01](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=481)** If we scroll a bit further down here, a second option would be, well, if A is greater than B, then write this value.
>
> **[8:09](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=489)** But if it's less than B, then do that too.
>
> **[8:12](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=492)** And then of course we can go greater than equal to or less than equal to.
>
> **[8:18](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=498)** So we have a couple of different options.
>
> **[8:19](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=499)** So let's take our first one here, which is going to be if it's equal to or not equal to.
>
> **[8:25](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=505)** And we get A is not equal to B because A is 10, B is 20.
>
> **[8:30](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=510)** If we now clear this one out here, let me scroll a bit further up and I'll just drag this above here.
>
> **[8:36](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=516)** If we try the second comparison, which is about greater than or less than it now says, well A is less than B, which it is because 10 is less than 20.
>
> **[8:46](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=526)** And our last option here is if it's greater than or equal to.
>
> **[8:50](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=530)** So if I run this one it comes back and says A is less than or equal to, which it is.
>
> **[8:56](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=536)** And of course if A was 20 and B was 20 we would get a specific value.
>
> **[9:00](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=540)** So when we are looking at these if statements and switch statements it's all about comparison and flow that you want to do.
>
> **[9:07](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=547)** Now as we start to delve a little bit deeper here this is where we really start to want to find information and do things.
>
> **[9:14](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=554)** So I'm going to introduce here something called get content.
>
> **[9:17](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=557)** Get content is going to import something as a JSON object.
>
> **[9:21](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=561)** I'm going to go to my files here open my assets one and click computer assets and then I'll just close this back out.
>
> **[9:28](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=568)** And what you'll see is this is a JSON file.
>
> **[9:32](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=572)** I'm going to scroll this here where it just contains a whole host of computer machines with information.
>
> **[9:38](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=578)** Are they domain joined?
>
> **[9:39](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=579)** How much RAM do they have, what IP addresses do they have?
>
> **[9:42](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=582)** So something that you would potentially have to hand when working in your network environment.
>
> **[9:49](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=589)** So what I want to do here is actually want to go ahead and import that into a variable.
>
> **[9:53](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=593)** So I create a JSON data variable.
>
> **[9:56](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=596)** I then say get content choose the path that I'm looking for and then I'm going to say Convert from JSON.
>
> **[10:02](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=602)** So let me select this whole object here right click, choose run selection.
>
> **[10:06](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=606)** And then when I say JSON data, you'll see it gives me a whole host of information.
>
> **[10:12](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=612)** If I say JSONdata.vendors and then I get Dell, HP, Lenovo and I get all of the details about the machines.
>
> **[10:22](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=622)** Now that's great, I have some data but what do we do with that?
>
> **[10:25](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=625)** How do we go through the content and start doing things?
>
> **[10:29](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=629)** Now, I'm not going to focus too much on how we're doing that but we're going to utilize what's called a for each statement which we'll discuss a little bit later.
>
> **[10:36](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=636)** The for each object allows me to say, "Go through this data iterate through based on something."
>
> **[10:43](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=643)** I'm then going to write a value out that says what's the vendor name?
>
> **[10:46](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=646)** And then I'm going to go into the list of computers which you'll see in this other property here.
>
> **[10:51](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=651)** So remember we did JSON vendors.
>
> **[10:54](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=654)** So if I do jsonvendors. let me go back here and look for the word computers, like so.
>
> **[11:06](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=666)** Then it lists me all of the computers here.
>
> **[11:09](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=669)** So you, I'm iterating through various variables to be able to get those values.
>
> **[11:14](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=674)** So what it will then do is say, well, hey, go into each of the computers, write the name of the computer down and then we're going to do some logic.
>
> **[11:23](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=683)** And this is where our if statements come in, which say if the computer operating system is this, then write that value.
>
> **[11:30](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=690)** If it's that, write that value, then I'm going to go and check if it's domain joined because that's another property that's available to me.
>
> **[11:37](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=697)** And I can then start to check that.
>
> **[11:39](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=699)** Then I can use a switch statement and say, well hey I want to do a wild card check on the computer processor and let me know the computer processor.
>
> **[11:48](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=708)** If it's a Ryzen five, then write down it's a Ryzen five, or if it's a core i9, write that too.
>
> **[11:55](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=715)** So let me go up to here and we'll select this whole block of code right here, and I'm going to go to the bottom section and just clear this out.
>
> **[12:05](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=725)** I need a bit more space and then we'll right click here and say Run selection.
>
> **[12:10](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=730)** And there we go.
>
> **[12:11](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=731)** It now writes out all of our values.
>
> **[12:13](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=733)** You can see it picks my first computer, which is a Dell.
>
> **[12:16](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=736)** It gives me the computer name.
>
> **[12:18](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=738)** It goes through the IF process and says, this is Windows 10 this is Domain joined, and this is an i5.
>
> **[12:25](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=745)** This one is Windows 11 and it's not domain joined and it has an i7 and we can loop down and see all of these machines.
>
> **[12:32](https://www.linkedin.com/learning/powershell-automating-it-administration/using-conditional-statements-and-comparisons?u=76281980&t=752)** So reading data is a powerful piece of PowerShell but also combining that with the conditional statements and comparisons allows us to take what looks like just a whole blob of data and make it look useful and be useful for what we want it to do.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), switch (6), this, (4), else. (3), else, (3)
> **Tools:** powershell (10), visual studio (3), windows terminal (1)
> **CLI Commands:** make (7), find (2)
> **Env Vars:** json (6), ram (1)
> **Definitions:** is a  (4), is an  (2), is called (1)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)

#### Looping constructs for data manipulation
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=0)** - [Instructor] Now, another function that's really important inside PowerShell is the ability for you to loop content.
>
> **[0:07](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=7)** Now, in one of our previous examples, we touched on it by using a foreach statement to be able to iterate through the data that we imported and we didn't focus on it too much.
>
> **[0:17](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=17)** So I wanted to go back and talk about looping constructs.
>
> **[0:21](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=21)** So first off, our very first one is for.
>
> **[0:23](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=23)** It's a for loop.
>
> **[0:25](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=25)** This is basically where we iterate until we basically tell it to do something.
>
> **[0:30](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=30)** So if we take this line six, for example, here, we're creating a variable called $i and giving it a start number of one, which means it will begin there and then get to a specific number that we tell it.
>
> **[0:43](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=43)** So we also then have a second section here, which is $i is less than or equal to 10.
>
> **[0:50](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=50)** That's going to be our point that we stop.
>
> **[0:53](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=53)** So we're going to say start at one and as long as the number is less than or equal to 10, then keep going.
>
> **[1:00](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=60)** And then to make sure that we add an increment, we use what's called $i++ that will add a singular digit to that one.
>
> **[1:09](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=69)** And then we tell it to write the values out.
>
> **[1:11](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=71)** So let's select the for option here.
>
> **[1:13](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=73)** We'll right click and choose run selection.
>
> **[1:15](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=75)** And sure enough, it writes 1, 2, 3, 4, 5, 6, 7, 8, 9, all the way to 10.
>
> **[1:20](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=80)** If I changed this value here from 10 to something else like 20, it would then write one to 20.
>
> **[1:29](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=89)** So a for loop effectively says, start me here, end me over here based on some type of logic, an increment based on whatever syntax you decide to choose.
>
> **[1:40](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=100)** The second option that we actually did use previously is the foreach.
>
> **[1:46](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=106)** Now the foreach is a little bit different.
>
> **[1:48](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=108)** The foreach takes a variable of values or something.
>
> **[1:53](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=113)** In our previous example, remember, we imported the computer assets list, which was a JSON file, which was loaded into a variable, exactly the same as here, into an array object.
>
> **[2:03](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=123)** And in our example here, we have fruits, apple, banana, orange, and grape.
>
> **[2:08](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=128)** I'm going to select this variable here, right click and choose run selection.
>
> **[2:12](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=132)** And if I say fruits and just press enter, sure enough, it lists me apple, banana, orange, and grape.
>
> **[2:18](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=138)** What I'm then going to do is loop that by using a foreach.
>
> **[2:22](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=142)** The foreach statement is basically saying for each object in whatever the variable or the data that we've got, think of the example from before where we used the computer list, it was going through and saying, for each of the computers, go and get these values.
>
> **[2:36](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=156)** In this instance, we just say go and get the fruit.
>
> **[2:39](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=159)** Now, you may wonder where the variable fruit comes from and that's because we just dynamically create that variable on the flow.
>
> **[2:46](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=166)** We give it a name.
>
> **[2:47](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=167)** And because of the each, the foreach statement, it goes into the fruits, grabs the first one, populates the fruit object, and then writes the values out.
>
> **[2:56](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=176)** So what we should now see is a list of all the fruits in blue, and sure enough we do, apple, banana, orange, grape.
>
> **[3:02](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=182)** Now, think, we could enhance this slightly by adding some extra logic.
>
> **[3:07](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=187)** So let me clear this.
>
> **[3:09](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=189)** Let's add a quick piece of logic.
>
> **[3:11](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=191)** So we could say if $fruit and then we could say equals.
>
> **[3:17](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=197)** And then I can pick, for example, banana here as the value.
>
> **[3:23](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=203)** Then we can go here and I'll say else 'cause we've also looked at else before.
>
> **[3:28](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=208)** I'm going to get rid of this extra piece that Visual Studio Code puts in.
>
> **[3:32](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=212)** I'm going to take my host of writing the banana.
>
> **[3:35](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=215)** Let me just drag this down a little bit further here.
>
> **[3:38](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=218)** And I'm going to put this back here and then I'm going to put this back here.
>
> **[3:41](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=221)** But this time, my foregroundColor, I'm going to go and say yellow.
>
> **[3:48](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=228)** So if the fruit object or the value is banana, then I want you to write out yellow but everything else, I would like you to keep as blue.
>
> **[3:59](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=239)** So I'm going to select this object here, choose run selection.
>
> **[4:02](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=242)** And sure enough, we get the yellow color.
>
> **[4:04](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=244)** Doesn't quite look like a yellow in the theme that I'm using for PowerShell.
>
> **[4:08](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=248)** It kind of makes the colors all muted.
>
> **[4:10](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=250)** But you see what we did here.
>
> **[4:12](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=252)** We combined a foreach with an if for comparison.
>
> **[4:16](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=256)** So fairly straightforward.
>
> **[4:18](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=258)** So let's go a little bit further down.
>
> **[4:20](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=260)** Our next one is what's called a while loop.
>
> **[4:23](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=263)** The while loop is very much like the for loop where we say while this specific value is something to this value, go.
>
> **[4:34](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=274)** It's just a different format.
>
> **[4:35](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=275)** So we have a variable here called count, which is set to zero.
>
> **[4:39](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=279)** So I'm going to run that selection, and then we'll clear this bottom one.
>
> **[4:42](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=282)** And then I'm saying while the count value is less than 20, just keep writing the value out and then add another number to it.
>
> **[4:52](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=292)** So if we select this, we should see a certain number of options.
>
> **[4:56](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=296)** So sure enough, we get zero.
>
> **[4:58](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=298)** That was our starting one.
>
> **[4:59](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=299)** We add one to it every time and then we stop at 19.
>
> **[5:03](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=303)** We never get to 20 because the syntax is less than 20.
>
> **[5:08](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=308)** Now, of course, if I change that, and let's say we go to L and do less than or equal to 20, let me clear that screen and run that one again.
>
> **[5:19](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=319)** You can say run selection, you'll see it now says 20.
>
> **[5:25](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=325)** So we get that same kind of option.
>
> **[5:27](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=327)** It reaches that value.
>
> **[5:29](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=329)** So it's important to understand that when we are counting or using the while loop that you may not get the numbers that you expect to retrieve.
>
> **[5:39](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=339)** The second one is a combination of the while loop with what's called a do.
>
> **[5:45](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=345)** So it's a joining of those two things.
>
> **[5:47](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=347)** So we say, here's my beginning value and then the do is write out the value as part of the count.
>
> **[5:54](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=354)** And then the while is while it's this specific value.
>
> **[5:59](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=359)** So if I select all of that here, let me just clear this bottom section, and drag it a bit higher up so we've got a bit more space to see, like so, I'm going to right click here, choose run selection and I get 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 'cause, of course, it's got to be less than 10.
>
> **[6:17](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=377)** So a very similar thing but it also means we can add some more advanced logic.
>
> **[6:22](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=382)** So we're saying well, do this and this is the logic I want done while, and this is the logic.
>
> **[6:28](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=388)** Let me clear this bottom section again.
>
> **[6:30](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=390)** We also have another example of a do where I'm going to ask for some value.
>
> **[6:35](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=395)** So the do doesn't have to be a static value, it can be something dynamically.
>
> **[6:40](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=400)** So when I run this in a second, it will prompt me for a number that's greater than 10.
>
> **[6:45](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=405)** And then while the number is less or equal to 10, then it's going to do something.
>
> **[6:53](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=413)** So let me select this option here.
>
> **[6:55](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=415)** We'll right click run selection.
>
> **[6:57](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=417)** It will say Enter a number greater than 10, so let's do 16.
>
> **[7:01](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=421)** And then it will say you entered 16.
>
> **[7:03](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=423)** And of course, it will only do that while certain things are going on.
>
> **[7:09](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=429)** Now, of course, if that logic was changed, then it will return a different value.
>
> **[7:14](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=434)** So we have this kind of do while functionality that loops backwards and forwards.
>
> **[7:19](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=439)** We also have some built-in capabilities.
>
> **[7:22](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=442)** So for example, we have what's called a For-Each-Object loop, but it's built into a property or a cmdlet that we can peg onto the end of something else.
>
> **[7:32](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=452)** So this is maybe new syntax for you where we're calling an existing cmdlet called Get-ChildItem.
>
> **[7:40](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=460)** Get-ChildItem iterates all of the files and objects in a container.
>
> **[7:45](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=465)** I'm telling it to go and look at the assets folder.
>
> **[7:47](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=467)** And then once we've retrieved all of that, I'm then saying, well, let's run ForEach-Object.
>
> **[7:54](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=474)** And then whatever was passed to it, see this little pipe option that's right here?
>
> **[7:59](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=479)** So everything on the left as an object is passed to the ForEach-Object and then it loops automatically.
>
> **[8:06](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=486)** So it means I don't actually have to write, populate a variable and then do foreach and then loop through each thing.
>
> **[8:13](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=493)** So first off, let's have a look at what Get-ChildItem assets would return.
>
> **[8:17](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=497)** So as you can see, in the assets folder, I have some JSON and CSV files.
>
> **[8:22](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=502)** So this would be the standard return, but I'm piping it into the ForEach-Object and telling it to write the name.
>
> **[8:29](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=509)** So let's right click on here and choose run selection.
>
> **[8:32](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=512)** And this time, it just gives me all of the names because I'm not using the default function that's there.
>
> **[8:37](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=517)** I'm saying take this value, throw it over here and then loop it using the ForEach-Object.
>
> **[8:44](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=524)** Now, of course, we can do lots and lots with looping of values.
>
> **[8:49](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=529)** So if I just scroll a bit further here.
>
> **[8:51](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=531)** So this one's a bit more of a complicated example, but I wanted to kind of walk through how this would be.
>
> **[8:57](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=537)** So let me just do view here.
>
> **[8:59](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=539)** Word wrap.
>
> **[9:00](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=540)** There we go.
>
> **[9:01](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=541)** So I'm on word wrap.
>
> **[9:02](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=542)** So we've got a variable called colors, Black, DarkBlue, Green, Yellow, White.
>
> **[9:07](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=547)** So I'm going to populate this.
>
> **[9:08](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=548)** This is just a variable, and so if I say $Colors, it'll list all the colors out for me.
>
> **[9:15](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=555)** I then have what's called syslog entries, which is retrieving information from this syslog asset.
>
> **[9:22](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=562)** So let's go back to our assets folder and we'll look for the Syslog-Assets.json and then I'll just close that here.
>
> **[9:28](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=568)** As you can see, it's a big, long file, timestamp, ports, protocols, IP addresses, specific things that have happened.
>
> **[9:36](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=576)** So we have some syslog entries, which could come from your firewall or could come from anywhere.
>
> **[9:41](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=581)** So this is just data for us to manipulate and we obviously load that into this variable.
>
> **[9:46](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=586)** So I'm going to say run selection and then I'll select the variable here and choose run selection again.
>
> **[9:51](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=591)** And sure enough, it iterated through all of our options.
>
> **[9:55](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=595)** So we have a list of syslog entries that we would've identified from the network.
>
> **[10:00](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=600)** What we're then doing is going through and saying, well, actually, for each entry in the syslog, go ahead and loop.
>
> **[10:07](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=607)** So remember, $entry is a variable that we're just creating on the fly.
>
> **[10:13](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=613)** Syslog entries is the one that contains all the values.
>
> **[10:17](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=617)** What I'm then doing is randomly setting the colors of each of the rows.
>
> **[10:21](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=621)** So normally what happens when we do a Write-Host, and we want to write values out, you normally pick a specific color and that's what they get.
>
> **[10:29](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=629)** In this instance, I wanted to randomly color each row so they don't look like anything else.
>
> **[10:36](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=636)** So what I'm going to do here is we're going to say go and get me colors.
>
> **[10:40](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=640)** And then if the color is contained in that Colors variable, so as long as the color matches one of these, then go ahead and write the values out and then color each line separately.
>
> **[10:52](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=652)** So I'm going to go and say foreach, we're going to go to the bottom here and clear this out.
>
> **[10:56](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=656)** And I'm going to right click and say run selection.
>
> **[10:59](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=659)** Okay. You can see different colors.
>
> **[11:01](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=661)** Green, yellow, blue, yellow, blue, green.
>
> **[11:05](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=665)** They can see they just randomly selected pink color for each of the rows in there.
>
> **[11:10](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=670)** So the foreach statement is now combined with various sets of data.
>
> **[11:15](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=675)** So just like the ForEach-Object one that we looked at for iterating files in a folder, this one obviously goes through and can iterate syslog entries.
>
> **[11:25](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=685)** Now, we can also use the for loop to do exactly the same thing.
>
> **[11:28](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=688)** Each of the options that we've looked at will do the same thing.
>
> **[11:32](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=692)** The difference being here is remember that the for loop is utilizing a starting value and then an ending value.
>
> **[11:40](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=700)** Now, of course, in the first example, we set that to a number 10 and said this is as far as we need to go.
>
> **[11:45](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=705)** What we're doing here is going and getting the syslog entry count.
>
> **[11:49](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=709)** So if I select this variable and the count and use run selection, that means that number is 30 but I didn't have to hard code that, it takes a dynamic value.
>
> **[12:00](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=720)** So same thing again, we'll select this option.
>
> **[12:02](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=722)** I'm going to scroll this a bit further up here and then I'll clear that out and we'll right click and say run selection.
>
> **[12:09](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=729)** Sure enough, same thing again.
>
> **[12:11](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=731)** Randomly selected colors for each of those rows.
>
> **[12:15](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=735)** If we wanted to repeat the process using the while loop, we're not going to execute these but we can see the syntax here.
>
> **[12:21](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=741)** Same thing again, our value of the less than is going to be the count.
>
> **[12:27](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=747)** Same principle again.
>
> **[12:28](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=748)** If we go to the do while, we're using the same thing, syslogentries.Count and we write in the values.
>
> **[12:35](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=755)** If we go down to the do, until we have the same principle, again, it's looking for the count and then adding and looping through as well.
>
> **[12:44](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=764)** And then of course, our foreach is the most common one that we would use where we take the variable, we populate that into the foreach using the pipe command and then we do the same thing again and write those values out.
>
> **[12:56](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=776)** Now, one of the last things that we can do here is we can go through and take those values that we've generated and we could, for example, output all of that into some type of grid view.
>
> **[13:08](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=788)** So first off, let's have a look at what this is going to be like.
>
> **[13:11](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=791)** We'll run selection.
>
> **[13:13](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=793)** You can see we've got all of my values right here.
>
> **[13:17](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=797)** What we can do is we can then go, for example, here and say Out-GridView.
>
> **[13:25](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=805)** Now, what this will do is take all of this stuff that we've just done here and output it into a grid view.
>
> **[13:32](https://www.linkedin.com/learning/powershell-automating-it-administration/looping-constructs-for-data-manipulation?u=76281980&t=812)** So let me do run selection, and then what we should have is a grid view that gets rendered for us.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), function (2), this. (2), while, (2), else. (2)
> **Definitions:** is a  (5), means that (1)
> **Analogies:** for example (5), just like (1)
> **UI Navigation:** select the (2), go to (2), click on (1)
> **Env Vars:** json (2), csv (1)
> **Tools:** powershell (2), visual studio (1)
> **File Paths:** syslog-assets.json (1)
> **CLI Commands:** make (1)

#### Manipulating data with logic tests and loops
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=1)** - [Instructor] Now in our previous examples, we looked at conditional statements and comparisons.
>
> **[0:05](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=5)** We then looped through content just for viewing purposes.
>
> **[0:09](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=9)** But of course, as we are going and working with PowerShell, there'll be times where we need to manipulate the data.
>
> **[0:15](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=15)** So let's have a look at what this might be.
>
> **[0:17](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=17)** And I'm not talking about changing the data but just looking at the data in a different way.
>
> **[0:22](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=22)** So remember that we ran this statement last time which is get child item path assets.
>
> **[0:27](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=27)** If I choose to run this one it will list me my files in that directory.
>
> **[0:32](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=32)** Now what about if I didn't want to see them all?
>
> **[0:34](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=34)** I only wanted to see specific types I could then use the pipe command which we touched on this last time but the pipe command joins one piece to another.
>
> **[0:45](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=45)** So basically the output of the get child item command is then automatically passed over to the wear object.
>
> **[0:51](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=51)** So my where object, I'm saying extension is equal to CSV.
>
> **[0:56](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=56)** So let me grab this object here right click choose Run Selection.
>
> **[1:00](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=60)** And sure enough, it limits down that big list to just the two.
>
> **[1:05](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=65)** Now, we could also go a little bit further and not filter it out.
>
> **[1:09](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=69)** We could actually say we'll get the assets and I'm going to use a different command called Sort Object.
>
> **[1:14](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=74)** So let me right click here and sort, and it sorts it by the length, which is obviously the size of the file.
>
> **[1:19](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=79)** And sure enough it's in smaller to large.
>
> **[1:22](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=82)** We could also go one step further and say, well I only want to see the CSV files and I would like to go through and sort them by when they were modified last.
>
> **[1:32](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=92)** So I can go through here, right click choose Run Selection and sure enough, it puts them in the right order.
>
> **[1:39](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=99)** So you can see it's in order of when they were last modified as in the oldest to the newest.
>
> **[1:44](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=104)** So that helps us to manipulate the data or at least the view of the data that we get.
>
> **[1:50](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=110)** Now what we can do is we can also manipulate values.
>
> **[1:54](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=114)** So let's say we've retrieved some numbers here, which we do.
>
> **[1:57](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=117)** We have a numbers variable.
>
> **[1:58](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=118)** I'm going to right click, Choose Numbers.
>
> **[2:00](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=120)** And then in here I'm going to say numbers.
>
> **[2:03](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=123)** And you'll see 100, 25, 30, 400, 55 just numbers in array.
>
> **[2:09](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=129)** It could be numbers that come from anywhere.
>
> **[2:11](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=131)** It could be another PowerShell command that gets them or it could be a bunch of data that we've got from a database.
>
> **[2:16](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=136)** What I want to do here is I want to take all of those values and just add them all together.
>
> **[2:21](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=141)** Now of course the problem is they're in a variable.
>
> **[2:23](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=143)** How do I take a variable and just add them all together?
>
> **[2:26](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=146)** Well, what we can do here is we can say, well here's the variable numbers.
>
> **[2:30](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=150)** Pipe the values out into what's called measure object.
>
> **[2:33](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=153)** And then I want to sum all of the objects together.
>
> **[2:37](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=157)** So let me select this here, right click and choose Run Selection.
>
> **[2:40](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=160)** And then our last statement is Write Host.
>
> **[2:43](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=163)** And there we go, it comes back and says 610.
>
> **[2:46](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=166)** Whereas if we hadn't used something like the measure object and the sum property, we would've had to have looped every item and kind of added them together.
>
> **[2:56](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=176)** But there are ways in PowerShell to not have to do extensive calculations.
>
> **[3:01](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=181)** Now, we did spend a bit of time touching on looping so I'm just going to run this command here.
>
> **[3:06](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=186)** We don't need to explain this one.
>
> **[3:07](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=187)** This is just loading our content as before.
>
> **[3:10](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=190)** And we did touch on going through and using a for each object.
>
> **[3:15](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=195)** Now the difference here is we're looping all the syslogentries and then we're writing the values out.
>
> **[3:21](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=201)** But what I want to do is I want to change the color of the connection status.
>
> **[3:26](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=206)** So we're using a switch statement.
>
> **[3:28](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=208)** So a switch statement which we looked at before takes a specific value, which in this instance will be the connection status converted to uppercase.
>
> **[3:37](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=217)** And then I'm checking the value of success, closed, open and failed and matching it to colors that I wish to use.
>
> **[3:44](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=224)** And then setting the default to yellow.
>
> **[3:47](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=227)** So what does this look like?
>
> **[3:48](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=228)** Well, let's select all the items here.
>
> **[3:50](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=230)** We'll scroll up.
>
> **[3:52](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=232)** I'll clear this bottom section so we can see it.
>
> **[3:53](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=233)** We'll right click choose Run Selection.
>
> **[3:56](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=236)** And sure enough, blue is closed.
>
> **[3:59](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=239)** We've got like another blue that's open.
>
> **[4:00](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=240)** A success is green.
>
> **[4:02](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=242)** And if we go a bit further, we have a red that's failed.
>
> **[4:05](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=245)** It lets me set colors and statuses a little bit differently to make it easier to review.
>
> **[4:12](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=252)** So let me clear this section here.
>
> **[4:15](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=255)** Now introduced into newer versions of PowerShell is what's referred to as a ternary operator.
>
> **[4:21](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=261)** Now the ternary operator was about reducing the amount of code that we had to write.
>
> **[4:25](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=265)** So once again, we have our for each statement that's looping through.
>
> **[4:29](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=269)** And then this section is what's changed.
>
> **[4:31](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=271)** The first thing you'll notice is that we're creating a variable called color, and then we're typing in the sets of colors that we want to use.
>
> **[4:41](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=281)** So we're saying, well, if we set the success property to be green and the close to blue and the open to sign and the failed to red, and we are basically defining those and then we're saying, well, when we've got that configuration, I want you to go and check the status in uppercase.
>
> **[5:00](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=300)** And then this little kind of double question mark here is the ternary operator that basically is going to say if you happen to find the word success, make it green.
>
> **[5:09](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=309)** If it's failed, make it red otherwise.
>
> **[5:12](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=312)** And there's a kind of otherwise option which is yellow.
>
> **[5:16](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=316)** So what does this look like?
>
> **[5:17](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=317)** Well, let's scroll and select all of our code.
>
> **[5:21](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=321)** Right click here, choose run selection.
>
> **[5:23](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=323)** And sure enough, it looks exactly the same as we did last time where it writes those values out to green.
>
> **[5:29](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=329)** So there were different ways of doing the same thing.
>
> **[5:31](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=331)** Now of course, we can do this the more complicated route where we use a for each object combined with a where object.
>
> **[5:39](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=339)** So once again, we're iterating, we have colors like we did before.
>
> **[5:44](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=344)** And then what we're doing here is we're saying well go and get me the status.
>
> **[5:47](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=347)** This time, we are not comparing the status to anything yet.
>
> **[5:49](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=349)** We're just populating it in a variable.
>
> **[5:52](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=352)** And then we are saying well go to the colors that we've got.
>
> **[5:56](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=356)** If we think of the colors which is here, success, closed, open, failed, and enumerate those go and retrieve the status which would be whatever that status that name is equal to the status.
>
> **[6:09](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=369)** So the name would be success and the status would be whatever that is.
>
> **[6:15](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=375)** If it is matching, then go and get the value which would be the color.
>
> **[6:20](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=380)** And then we're going to check the color and making sure it's not yellow.
>
> **[6:25](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=385)** And then we're going to write that color out.
>
> **[6:27](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=387)** So a bit more complicated.
>
> **[6:28](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=388)** You can see we're using a lot more variables and using different options to go through and check how that would work.
>
> **[6:35](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=395)** So let's go through and select all of my code again and we'll right click here and Run Selection.
>
> **[6:42](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=402)** And the same thing again a different approach to the same thing.
>
> **[6:45](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=405)** We are now enumerating this value using where object and selecting object which is a new one we haven't used yet which will select a specific value or field from somewhere.
>
> **[6:57](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=417)** So let's go to one of our other options now.
>
> **[6:59](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=419)** So let's say we wanted to use our syslogentries which we are.
>
> **[7:03](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=423)** We could potentially go for each object get the color of yellow, check the status and then we can use if else, which is the old school way of doing it, and then write the values.
>
> **[7:15](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=435)** And this one works perfectly fine.
>
> **[7:17](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=437)** So there are multiple approaches that we can use for retrieving information, interrogating that information and then writing out specific values.
>
> **[7:26](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=446)** So if we go back to syslogentries here, select the code we'll go to the bottom and clear this out, right click here, choose Run Selection.
>
> **[7:34](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=454)** We get the exact same output.
>
> **[7:37](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=457)** So when we want to manipulate data and loop data and perform logic tests, we can use any of the above.
>
> **[7:45](https://www.linkedin.com/learning/powershell-automating-it-administration/manipulating-data-with-logic-tests-and-loops?u=76281980&t=465)** The ternary operator, the if statements, the switch statements, all of those come together to help us figure out what we want the data to actually look like when we are rendering the information out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), switch (3), else, (1)
> **UI Navigation:** go to (3), scroll up (1), select the (1)
> **CLI Commands:** make (3), find (1)
> **Tools:** powershell (4)
> **Env Vars:** csv (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Working with arrays and hash tables
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=0)** - [Instructor] In the past few examples, we've imported data, we've created variables and populated them with numbers as well as text values.
>
> **[0:07](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=7)** So I wanted to work through understanding arrays and hash tables, which are used for population of data.
>
> **[0:14](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=14)** It can be small amounts or large, it really makes no difference.
>
> **[0:17](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=17)** In a simple example here, we're creating a variable called numbers.
>
> **[0:21](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=21)** I'm going to click run selection.
>
> **[0:23](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=23)** And when I actually say numbers, it renders those numbers out.
>
> **[0:27](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=27)** So a standard variable or array variable is going to return sets of information really based on what we put in there, and it'll comma separated.
>
> **[0:37](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=37)** Now, what about if we wanted to select a specific value from that array?
>
> **[0:42](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=42)** Now, in this example here, where we're using the numbers 1, 2, 3, 4, 5, you would potentially have to go through a for each statement to be able to pull out the one that you wanted to and say, "If this was equal to that, then do this."
>
> **[0:55](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=55)** However, what we do have is the ability to query directly into it, and this is done by using this type of syntax where we write numbers, and then in square brackets, we write the one that we're after.
>
> **[1:07](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=67)** So if I type numbers three, you'll see it gives me the number four, and you might be thinking, "Why is it giving me four?"
>
> **[1:14](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=74)** And that's because when we count the numbers 1, 2, 3, it gives me that next one that's there.
>
> **[1:20](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=80)** If I was to choose one, I would get the number two.
>
> **[1:25](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=85)** If I was to choose zero, I would get the number one, because the count begins at zero.
>
> **[1:31](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=91)** So if I just clear this out, so when I say second and I run this one here and then I use the write host command just to write that value out, it will give me the second element is number two, which, in actual fact, the second element isn't necessarily number two because it starts at zero and works its way up, which is the second element, but doesn't make any sense with the numbers.
>
> **[1:53](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=113)** So you can see what I mean here.
>
> **[1:54](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=114)** It can be a little bit confusing when you don't understand that it counts from zero and works its way up.
>
> **[2:00](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=120)** So it's important to understand that.
>
> **[2:02](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=122)** Now, what about if we're using text values?
>
> **[2:04](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=124)** Now we've done this before, so let's go in and say run selection names, and then if I say names and enter, we get those four names, or three names, even.
>
> **[2:14](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=134)** And then we can say for each.
>
> **[2:16](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=136)** I'm going to say for each and loop, and it'll say, "Hello John, Sarah, Mike."
>
> **[2:19](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=139)** So we were able to iterate through each of those values, and we've done this in the past.
>
> **[2:25](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=145)** Now, one thing we did touch on a little bit ago was we created what was called a hash table.
>
> **[2:31](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=151)** It was in our last example where we're using colors, where we basically said if the status is this, then match this color.
>
> **[2:40](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=160)** A hash table is effectively a key-value pair, so it's going to be some identifier and then some property.
>
> **[2:47](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=167)** So for example, in ages here, I have John is 30, Sarah is 25, and Mike is 40.
>
> **[2:53](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=173)** If I run that here and then just say ages, I now get this key-value pair, so a name and a value.
>
> **[3:02](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=182)** Now, if I wish to access those, I can do it in a simple view.
>
> **[3:06](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=186)** I can say ages, and then like we did with the numbers, I can use the square brackets and look for that specific value.
>
> **[3:14](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=194)** So if I say John age is a variable and do it, it'll say John's age is 30, and sure enough, it is, because I was looking for John.
>
> **[3:24](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=204)** If I change that to Mike, and then let's just, "Mike's age is", I'm going to keep the variables the same name just to be confusing, we'll run that one.
>
> **[3:33](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=213)** It'll say Mike's age is 40, which is correct.
>
> **[3:37](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=217)** So we can access this specifically from a value.
>
> **[3:42](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=222)** Now, what about if we wanted to iterate all of the values?
>
> **[3:46](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=226)** Now, we know that we can do this.
>
> **[3:47](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=227)** We've looked at the for each option and we did touch on some of the other values, so let me just make sure we load our ages option here.
>
> **[3:54](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=234)** And what we can do is we can use what's called get enumerator.
>
> **[3:58](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=238)** So get enumerator is a standard function that's built into various types of objects.
>
> **[4:04](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=244)** Not everything will let you put get enumerator on the end, but we're using a for each, so the for each one is going to say go in, and for each of the items in here, go ahead and iterate through them one by one.
>
> **[4:19](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=259)** So you can see what I'm doing here is saying, "Create me a new person variable by going to the ages and get me the enumerator., and then I want to get the key and the value."
>
> **[4:29](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=269)** And this is great, because you can see that they are referred to as the key and the value.
>
> **[4:34](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=274)** So let me perform this task here.
>
> **[4:36](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=276)** We'll run selection, and it will say "Mike is 30 years old", which is correct.
>
> **[4:41](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=281)** Sorry, John is, Mike is 40 and Sarah is 25.
>
> **[4:44](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=284)** And that's because it enumerates each of the values and then lets me open up and get the key-value pair.
>
> **[4:51](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=291)** Now, we can do it a little bit differently as well.
>
> **[4:54](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=294)** We can actually rewrite the PowerShell the other way around and say, "Actually, I've got my list of ages and then I want to get an enumerator, and then instead of using a for each to the enumerator, we can get the enumerator first and then iterate each object."
>
> **[5:11](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=311)** Remember, we use the pipe command.
>
> **[5:13](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=313)** So I'm going to select this one here.
>
> **[5:14](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=314)** Run selection.
>
> **[5:15](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=315)** It'll do exactly the same thing.
>
> **[5:17](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=317)** So what does this ages get enumerated do?
>
> **[5:20](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=320)** Well, if we run it, it returns this object that is then able to be iterated over by using a for each object.
>
> **[5:29](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=329)** So let's make it a bit more realistic.
>
> **[5:31](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=331)** What are we trying to do?
>
> **[5:32](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=332)** Well, if I'm managing my environment, I'm managing my network and my Windows machines, et cetera, then there's going to be times where I need to go ahead and retrieve information.
>
> **[5:44](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=344)** So we're going to use a standard PowerShell command.
>
> **[5:46](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=346)** I'm first going to clear this bottom section called get process.
>
> **[5:50](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=350)** Get process, if I just execute it on its own, will go ahead and list all of the processes running on the Windows machine.
>
> **[5:57](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=357)** It's exactly the same as when I say Task Manager, and when this launches, I'll make it full screen here, and here's all the processes.
>
> **[6:04](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=364)** It's exactly the same as that, but it's the PowerShell version.
>
> **[6:07](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=367)** So I'm going to go ahead and load a variable with all of these values, so let me clear this bottom section.
>
> **[6:13](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=373)** I'm going to say go and get all of the processes for this machine that's running, and to make sure that it's worked, I can say processes, and sure enough, they're all listed.
>
> **[6:23](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=383)** So now I have them.
>
> **[6:24](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=384)** What I want to then do is look for processes that are running pretty big.
>
> **[6:30](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=390)** So let me launch Task Manager for a second.
>
> **[6:33](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=393)** So let's go and have a look here, and you'll see I've got some processes where the memory is pretty intensive, so 200 meg, 400 meg, whatever else, all different levels.
>
> **[6:43](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=403)** So what I want to do here is look for processes where the property called WorkingSet64 is greater than 100 meg.
>
> **[6:50](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=410)** So that's going to limit down the processes to begin with.
>
> **[6:54](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=414)** Once I've populated that one called largeProcesses, I then want to sort those processes, but not the default way, which would be ascending.
>
> **[7:03](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=423)** I want to flick it the other way to be descending.
>
> **[7:05](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=425)** So we can see that we're taking the large processes option and then piping it into the sort command and descending.
>
> **[7:12](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=432)** Then I'm going to iterate through the processes, and I'm going to say, "Get the process name, get the memory, and then write out the values."
>
> **[7:21](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=441)** And we'll touch on what this one does in a minute.
>
> **[7:24](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=444)** So let me go and select the whole thing and we'll say run selection, and sure enough, if I just scroll a bit more here, you can see I've got my list.
>
> **[7:33](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=453)** Now, hold on.
>
> **[7:34](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=454)** 1, 2, 3, 4, 5, 6, 7, 8, 9.
>
> **[7:39](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=459)** So without me having to explain what that does, the naught to nine or the zero to nine is only retrieving nine objects.
>
> **[7:47](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=467)** If I change that to 20 and then go back and re-run that process again, what I should now get is a little bit more.
>
> **[7:55](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=475)** I should get 20, and it starts here and goes all the way down there.
>
> **[7:58](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=478)** So we have more items.
>
> **[7:59](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=479)** So this is just limiting how many we get back.
>
> **[8:02](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=482)** That's a very cool way of doing it.
>
> **[8:03](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=483)** We can say, "Go and get this variable the value, and then from zero, just count up to where I want to go."
>
> **[8:09](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=489)** So that returns the memory that's running for those processes.
>
> **[8:13](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=493)** So a really easy PowerShell command to be able to find out on a machine what's happening.
>
> **[8:20](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=500)** Now, let's say I wanted to retrieve my assets again.
>
> **[8:22](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=502)** Now, we've done this before, so I'm going to go and say run selection.
>
> **[8:26](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=506)** I'm going to check that my JSON data is now loaded, which it will be and you can see it goes that way.
>
> **[8:32](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=512)** And if you remember how we were doing this before, JSON data, and I can then say vendors, and it gives me the vendors, and then I can add computers, and I get the list of computers.
>
> **[8:44](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=524)** So remember how we traverse that variable.
>
> **[8:47](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=527)** So the first thing I'm going to do is I've got this variable called data by vendor, which I'm creating an array.
>
> **[8:53](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=533)** It's an empty array because I want to add values to this.
>
> **[8:58](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=538)** What I'm then going to do is go into the vendors, and for each object in the vendors list, so what does the vendors list look like?
>
> **[9:05](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=545)** Well, let's just run this here.
>
> **[9:07](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=547)** It's Dell, HP, and Lenovo.
>
> **[9:09](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=549)** So I have three vendors.
>
> **[9:11](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=551)** It's going to populate some variables called vendorName and computer, and then it's going to say data by vendor, and it's going to have the vendor name that's going to go in there and then it's going to be loaded by the list of computers.
>
> **[9:24](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=564)** So I'm creating this data by vendor, taking all of these objects over here, and loading them into a specific variable.
>
> **[9:34](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=574)** What I'm then going to do is iterate that entire thing by using the get enumerator, which we've done in the past, and then sorting them by the key, looping all the way through, and then what we should get is it should write out vendor, let's say Dell, and then underneath it will be the list of the machines, and it will have these values listed out.
>
> **[9:53](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=593)** So it's taking what effectively is this very strange-looking variable at the bottom, if I just select it here, all of these, and making it look a little bit more useful.
>
> **[10:03](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=603)** So let's scroll up to here and select everything as we go.
>
> **[10:08](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=608)** Okay, and then I'm going to come to the bottom section, just clear this out, make this a fraction bigger, and then right click and say run selection.
>
> **[10:19](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=619)** And sure enough, we can see we've got our computer details.
>
> **[10:22](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=622)** So this is Lenovo, Lenovo, Lenovo, and there we have it.
>
> **[10:26](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=626)** Vendor section called Lenovo.
>
> **[10:28](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=628)** If I go up, this'll be HP, and if I go a bit further, it should say vendor HP.
>
> **[10:33](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=633)** If I go a bit further, it should say vendor Dell.
>
> **[10:36](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=636)** So we're taking effectively a very detailed structured file and making it function a little bit differently.
>
> **[10:43](https://www.linkedin.com/learning/powershell-automating-it-administration/working-with-arrays-and-hash-tables?u=76281980&t=643)** So using arrays and hash tables combined with logic tests, looping conditional statements and for statements and for each, et cetera, we can take what effectively, if we go back to our assets folder here and click on my computer assets and come back out, and then we'll just move this down, something that looks quite complicated to iterate through becomes really, really easy for us to loop using PowerShell.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (3), function (2), this, (1), else, (1)
> **CLI Commands:** make (6), find (1)
> **Tools:** powershell (5)
> **UI Navigation:** select the (1), scroll up (1), click on (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** largeprocesses (1), vendorname (1)
> **Env Vars:** json (2)
> **Cross-References:** go back to (1)

#### Understanding PowerShell error handling
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-error-handling?u=76281980)


### 2. Remote and Delegated Administration

#### Understanding delegated administration in PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=0)** - [Instructor] So let's understand delegated administration in PowerShell.
>
> **[0:05](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=5)** So first off, what is delegated administration?
>
> **[0:09](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=9)** Well, delegated administration using PowerShell refers to the ability for you to grant specific administrative privileges and permissions to non-administrative users or groups allowing them to perform certain tasks without having full administration control over the system or the entire system they're using.
>
> **[0:30](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=30)** This feature enables organizations to delegate tasks and responsibilities to different individuals or teams making it easier to manage resources and maintain that system security.
>
> **[0:42](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=42)** PowerShell provides a range of tools and techniques that allow you as an administrator to delegate specific tasks, roles or permissions, yet still maintain control.
>
> **[0:54](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=54)** So one of the benefits of using delegated administration, well, delegated administration using PowerShell offers multiple benefits including increased efficiency, enhanced security and improved productivity among the teams.
>
> **[1:09](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=69)** By delegating certain tasks and permissions to specific users, user administrator can reduce the workload you have and streamline the admin process.
>
> **[1:18](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=78)** Additionally, by granting only the necessary permissions to perform specific tasks, the risk of accidental or intentional damage to the system is minimized.
>
> **[1:30](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=90)** It also improves the overall security of that system.
>
> **[1:34](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=94)** Delegated administration also encourages collaboration and cross-functional communication between the teams as permissions can be granted to specific team members or groups for tasks, ensuring that everyone has access to the tools they need to perform that job effectively.
>
> **[1:50](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=110)** Finally, by using PowerShell to delegate administrative tasks you can take advantage of the flexibility and automation capabilities of the language to improve efficiency and productivity.
>
> **[2:05](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=125)** Now, what is role-based access control?
>
> **[2:08](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=128)** Role? Role-based access control in PowerShell is a security model that enables administrators to control access to resources and system functionality based on a user's job function within the organization.
>
> **[2:22](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=142)** With role-based access control, administrators can assign specific permissions and access rights to roles and then assign those roles to individual users or groups.
>
> **[2:32](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=152)** This approach provides a more streamlined and scalable way to manage user access, reducing the complexity and maintenance overhead associated with managing access on a user by user basis.
>
> **[2:44](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=164)** In PowerShell, role-based access control is implemented using various tools and techniques, including security groups, active directory and built-in PowerShell commands and modules.
>
> **[2:56](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=176)** Now, when we talk about custom roles, then of course creating custom roles for PowerShell allows you to define precisely the permission that you as the administrator would need to perform specific tasks.
>
> **[3:09](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=189)** Custom roles can be used to grant permissions to users, groups, or applications, and can be restricted to a specific set of cmdlets or functions.
>
> **[3:20](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=200)** And by creating custom roles, you can ensure that the administrators only have the necessary privileges to perform their jobs and minimize risk of security breaches caused by excessive permissions.
>
> **[3:32](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=212)** Additionally, custom roles can make it easier to manage and audit permissions, reducing the risk of errors or unauthorized changes to the system.
>
> **[3:42](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=222)** So how do we manage the role assignments?
>
> **[3:45](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=225)** Well, there are six PowerShell cmdlets that are available to us.
>
> **[3:49](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=229)** The first one is the new role capability file.
>
> **[3:52](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=232)** This will create a file that defines a custom role and then the cmdlets or functions that it can access.
>
> **[3:58](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=238)** Then we have the role assignment policy which will create the role assignment policy determining which users or groups can be assigned to a custom role.
>
> **[4:09](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=249)** Then of course, we have the management role assignment which assigns a custom role to a user or a group.
>
> **[4:15](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=255)** We can then use the two get commands which are available to retrieve information about a custom role, including the cmdlets or functions it can access as well as the role assignments that are currently in effect.
>
> **[4:27](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=267)** And then if we need to, we can also back out of this and we can remove a custom role assignment from a user or group.
>
> **[4:34](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=274)** So let's have a look at a simple example of what we need to create.
>
> **[4:38](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=278)** In this example here, we are creating the limiting file.
>
> **[4:42](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=282)** So we'll be creating a new file called config.pssc and this we are using new PS session configuration file.
>
> **[4:50](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=290)** Now what this file does is this will be connected to the PowerShell session.
>
> **[4:56](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=296)** Now, to create the rest of it, we would need to create the capability file, which is the truly limiting file where you can see we give it a name, we tell it the modules it can have access to as well as the cmdlets it can use and then any functions it's able to access.
>
> **[5:12](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=312)** We can then use the import role capability file to import that into the current session and then of course we have what's called add role member where we can assign the role member to do this.
>
> **[5:23](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-delegated-administration-in-powershell?u=76281980&t=323)** So that's just an example of what the PowerShell could look like if we wanted to implement this type of protection.

> [!info]- Semantic Content
>
> **Tools:** powershell (12)
> **Code Keywords:** let (2), finally, (1), function (1), this. (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Configuring remote access settings
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=0)** - [Instructor] Okay, so we just talked about delegated administration.
>
> **[0:04](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=4)** We touched on this idea of roles and capabilities.
>
> **[0:08](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=8)** Now, when we create roles and capabilities they're done using very specific PowerShell cmdlets and then we have to connect the PowerShell session that we are in or that we wish to create to that capability and role configuration.
>
> **[0:24](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=24)** So the first thing we're going to do here is we're going to create a new PowerShell directory.
>
> **[0:28](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=28)** So I've got my delegated folder which we've used in the past.
>
> **[0:31](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=31)** I'm just going to say new item and then create a folder called JEA, which is going to be called Just Enough Access, which is what this is referred to in PowerShell.
>
> **[0:41](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=41)** So I'm going to right click here, choose run selection.
>
> **[0:43](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=43)** If I go to my folder structure here you'll see I've got my JEA blocking option that's been created for me.
>
> **[0:50](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=50)** What I'm then going to do is create another folder with inside that called role capabilities.
>
> **[0:56](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=56)** Now the role capabilities folder will contain a file that we'll create in a moment with the specific capabilities we wish to allow.
>
> **[1:04](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=64)** So let me first create that folder.
>
> **[1:07](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=67)** Okay, if I go back to my structure here, you can see that I've now got delegated JEA blocking role capabilities.
>
> **[1:15](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=75)** Now, the role capability itself is really straightforward.
>
> **[1:18](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=78)** It's simply a file which we can create here using new PS role capability file.
>
> **[1:24](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=84)** And that PowerShell command effectively takes the path of the file you wish to create which has a different extension.
>
> **[1:30](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=90)** It's called a PSRC file.
>
> **[1:32](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=92)** And then I'm using one of the properties which is called visibility cmdlets.
>
> **[1:37](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=97)** If I actually do this one here you've got cmdlets to export, nested modules.
>
> **[1:41](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=101)** There's a whole list of different things that we can utilize.
>
> **[1:46](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=106)** But I'm going to use visible cmdlets.
>
> **[1:49](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=109)** And the only two cmdlets that I want to allow within this configuration is going to be get-service and get-process.
>
> **[1:57](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=117)** So the idea here is that when you provide the connection with PowerShell using something like a capability file and a session configuration that that's the only commands that are available to you.
>
> **[2:11](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=131)** So think of the security advantage to this, which is somebody tries to connect with PowerShell, if they don't have capability and role restrictions then they can use any PowerShell cmdlet or function that's available.
>
> **[2:23](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=143)** We can even go a little bit further as well.
>
> **[2:26](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=146)** So for example I could say I want to use get service, but I only want to allow specific parameters to be available.
>
> **[2:33](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=153)** So maybe just the name or something else.
>
> **[2:36](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=156)** So we can really limit down exactly what happens.
>
> **[2:39](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=159)** So let me go into here and we'll right click and choose run selection.
>
> **[2:43](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=163)** And then if you expand here, you'll see my capability file.
>
> **[2:46](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=166)** If I click into it, has been created, you'll see it has some base information and then all of the properties that are available you can now see.
>
> **[2:55](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=175)** So are there specific modules we'd like to import?
>
> **[2:58](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=178)** Are there aliases we'd like to use?
>
> **[3:00](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=180)** You can see that my visible cmdlets option is available.
>
> **[3:03](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=183)** Now we've got functions, external commands, providers.
>
> **[3:07](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=187)** Are there scripts that we'd like to allow, et cetera?
>
> **[3:09](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=189)** So we can define all of this inside this capability file.
>
> **[3:14](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=194)** Remember, the logic here is to control and limit what people can do.
>
> **[3:19](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=199)** Now, once we have the capability role file we then need to create a session configuration file.
>
> **[3:24](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=204)** So let me just go over here and the session configuration file connects to this JEA blocking folder or file that's been created.
>
> **[3:35](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=215)** It's going to create a what's called a PSSC file.
>
> **[3:40](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=220)** And then it's going to connect those two together when we do the registration of that.
>
> **[3:44](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=224)** But this command itself has a series of properties as well.
>
> **[3:48](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=228)** So the first is going to be the name, it's going to be given and then of course the second will be what kind of session type that we'd like to call it.
>
> **[3:56](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=236)** So it's going to be remote.
>
> **[4:02](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=242)** Let me delete this out for a second so I can show you the options that are available.
>
> **[4:07](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=247)** So you've got empty, default and restricted remote server.
>
> **[4:10](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=250)** So that's the option that I want to use.
>
> **[4:12](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=252)** And then of course we've got are we going to run it as a virtual account, which we are.
>
> **[4:16](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=256)** And then we've got the role definitions.
>
> **[4:18](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=258)** And the role definitions are really the security groups or accounts that we wish to use.
>
> **[4:24](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=264)** Remember it's role-based access control.
>
> **[4:26](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=266)** So in my domain controller I've created a group called Delegated Admin Group.
>
> **[4:31](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=271)** And in there I've added my account.
>
> **[4:33](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=273)** And then what I'm going to say is, in this role definition for the configuration of the session I want to make sure that the user is a member of this group.
>
> **[4:42](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=282)** And if they are, then they get these specific capabilities and it will be this capability file that we just created.
>
> **[4:49](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=289)** So let me just make sure I've got all my paths correct.
>
> **[4:53](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=293)** So let me go delegated JEA blocking and I'm just going to go into there, just going to update my paths a little bit so they all match.
>
> **[5:06](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=306)** And then I'll select this here and then say run selection.
>
> **[5:11](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=311)** Okay, so if we go back over here you'll now see I've got a JEA blocking file.
>
> **[5:16](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=316)** Once again, it looks very similar to the capability one, but it obviously has the session type, it has all those properties that we just talked about.
>
> **[5:23](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=323)** There's my security group and capabilities.
>
> **[5:26](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=326)** So we've created this kind of flat file structure.
>
> **[5:29](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=329)** Now what I need to do is I need to go through and update here in my path, 'cause I'm going to register this.
>
> **[5:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=338)** So let me just do that.
>
> **[5:39](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=339)** So now we're going to register what we just created.
>
> **[5:42](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=342)** So I'm going to create a session configuration, which means it'll be available now, called JEA blocking.
>
> **[5:49](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=349)** And it's using this path that we just created.
>
> **[5:52](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=352)** So I'm going to say run selection.
>
> **[5:56](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=356)** Now, notice what happens here.
>
> **[5:58](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=358)** It comes back and it says, okay, the WIN RM plugin is missing for PowerShell, please run enable PS remoting and then retry the command.
>
> **[6:07](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=367)** And that's okay, because as we go through the configuration we do need to make sure that things like enable PS remoting is configured, because we are effectively managing the remote access.
>
> **[6:21](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=381)** So if I do PS remoting and then if we say force I can right click here and say run selection.
>
> **[6:29](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=389)** It's going to go through and complete this.
>
> **[6:31](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=391)** And of course you will see this message that says, hey, we may need to go through and restart a specific service.
>
> **[6:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=398)** And that's okay.
>
> **[6:40](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=400)** So if I go back to my services here.
>
> **[6:43](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=403)** Services.
>
> **[6:46](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=406)** Scroll all the way down to the list of services that are available.
>
> **[6:50](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=410)** And right towards the bottom remember we have the Windows remote management.
>
> **[6:54](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=414)** I'm just going to say restart.
>
> **[6:56](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=416)** So this will just ensure that the WIN RM has the latest configuration.
>
> **[7:00](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=420)** So we'll close that down here.
>
> **[7:01](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=421)** I'm going to go all the way back to my register session, right click here, choose run selection.
>
> **[7:06](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=426)** And then of course it now creates and you can see it's got a container with keys and a name.
>
> **[7:11](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=431)** So that's being created.
>
> **[7:12](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=432)** Now, if I flick to a different PowerShell window what I can actually do now is say go and get me PS session configuration.
>
> **[7:20](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=440)** And you'll see it lists all of the PS configuration options that are there by default which Microsoft provide.
>
> **[7:26](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=446)** However, it does now include my JEA blocking.
>
> **[7:30](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=450)** So that was successfully created as an option and that was in a different PowerShell window.
>
> **[7:35](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=455)** So once it's registered, it's then available.
>
> **[7:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=458)** Now, the last step here, well, the last couple is really to go ahead and create this as a module.
>
> **[7:44](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=464)** Now, I don't have to do this.
>
> **[7:46](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=466)** I could actually just use the session configuration that was created and utilize that.
>
> **[7:51](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=471)** But actually what's nice is to be able to go and convert that to a module, putting it into the module directory on Windows PowerShell on the machine, and then it's being available across the board.
>
> **[8:02](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=482)** So this syntax is very similar to the rest.
>
> **[8:05](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=485)** We're going to say this is the path that we wish to create.
>
> **[8:09](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=489)** Then the name of the root module, what are the required assemblies, what's the nested module, which in this instance is all going to be the same name, and then the cmdlets that we wish to export or expose in the definition.
>
> **[8:21](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=501)** So I'm going to select this option here, right click and say run.
>
> **[8:26](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=506)** That's going to create me a new module manifest.
>
> **[8:29](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=509)** If I go back to my delegated, you'll see my PSD one is here and sure enough it gives me all the values that looks very similar again to the rest.
>
> **[8:37](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=517)** But you can see there's a few other options available such as what kind of processor, how much, kind of modules do you need, what's the .NET framework, et cetera, the version of PowerShell.
>
> **[8:47](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=527)** So I've created that module.
>
> **[8:49](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=529)** Now, in order for this to be successful and to work we need to kind of try connecting to something.
>
> **[8:55](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=535)** So let me just clear this bottom section here.
>
> **[8:58](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=538)** And what I'm going to do is just say credentials and I'm going to create a credentials container.
>
> **[9:03](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=543)** So my credential that I'm going to use is just a domain admin account.
>
> **[9:09](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=549)** Administrator and then put my password in.
>
> **[9:14](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=554)** And then if I just say credentials you'll see that I've got a secure set of credentials now.
>
> **[9:20](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=560)** Now what we're going to do to just test this is we're going to connect to the same machine, like to itself.
>
> **[9:26](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=566)** And I'm going to use enter PS session.
>
> **[9:28](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=568)** I'm going to say this is the computer name, this is my local host.
>
> **[9:32](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=572)** My configuration name is going to be JEA blocking and I already have credentials.
>
> **[9:37](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=577)** So let me just select this option here, right click and choose run selection.
>
> **[9:42](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=582)** Now, do you notice it comes back and it says hold on a minute, it doesn't work.
>
> **[9:46](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=586)** I couldn't find the role capability file within the role capabilities directory within the module path.
>
> **[9:54](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=594)** So the question would be is what is the module path?
>
> **[9:57](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=597)** Well, we can actually say environment, module path, split and then get a list of all the module paths that are available.
>
> **[10:04](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=604)** And you can see these are the module paths.
>
> **[10:07](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=607)** So clearly my location, which is something delegated JEA blocking doesn't exist in here.
>
> **[10:13](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=613)** So hence it can't load the one that's there.
>
> **[10:16](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=616)** So how do we resolve that?
>
> **[10:17](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=617)** Well, in a simplistic view, we can come into here into my JA blocking, I'm going to copy this folder.
>
> **[10:24](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=624)** And then the path that we would normally go to, program files, Windows PowerShell modules, I can just paste that into here.
>
> **[10:33](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=633)** And my JEA blocking then becomes a module inside PowerShell.
>
> **[10:37](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=637)** So now if we clear that and I go back and re-execute that, say Run Selection, it'll now come back and say, the syntax is not supported by this run space.
>
> **[10:49](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=649)** And that's okay because that is an issue to do with Visual Studio code.
>
> **[10:53](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=653)** So the good news is I can take this and then we can truly test it by coming into here, saying create some credentials, like we did before.
>
> **[11:08](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=668)** Okay, so I've got my credential object.
>
> **[11:09](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=669)** Let me flick back here and now I'm going to connect to the system using the same syntax.
>
> **[11:15](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=675)** I'm going to paste it here and then you'll see we're now at the local host.
>
> **[11:20](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=680)** Now what I should be able to do, for example, is use something like get net IP adapter.
>
> **[11:27](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=687)** But as I'm typing it I'm not able to tab through anything.
>
> **[11:30](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=690)** I can't connect through anything.
>
> **[11:32](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=692)** If I say PS session configuration it comes back and says, hold on a minute, that doesn't exist.
>
> **[11:42](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=702)** I'm not able to find that anywhere.
>
> **[11:43](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=703)** So let's be a little bit better and let's try and use one of the commands that was actually available to us.
>
> **[11:51](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=711)** And sure enough that works.
>
> **[11:52](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=712)** If I say get process, that works too.
>
> **[11:56](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=716)** But if I say get child item, that one fails too.
>
> **[12:02](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=722)** So you can see that the JEA controls are now working as expected, because I'm able to restrict to the list of commands that I can use by using that capability.
>
> **[12:15](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=735)** Now, if I just exit this session here I suppose the question would be is what would be the impact if, for example, I was not a member of that security group within active directory.
>
> **[12:31](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=751)** So right now I'm a member of the security group for delegation.
>
> **[12:35](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=755)** So if I was to rerun this one, let's just look back through my commands here and say go ahead and connect.
>
> **[12:42](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=762)** It works perfectly fine because I'm an administrator and I'm able to connect to that.
>
> **[12:47](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=767)** Now, if I remove myself from the delegated group and then obviously wait for the WIN RM service to catch up, then the next time I try to instantiate a connection instead of it returning this, it would come back and say you don't have access.
>
> **[13:04](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=784)** You'd get access denied.
>
> **[13:06](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=786)** So it's definitely an option to utilize when you are trying to automate specific types of tasks or even hand off specific configurations or tasks to other members of the team.
>
> **[13:19](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=799)** But you want to limit what they can do so they don't cause any damage or break anything or inadvertently restart a service when they shouldn't.
>
> **[13:28](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-access-settings?u=76281980&t=808)** That's the advantage to using the just enough administration capabilities to control that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), module (13), this. (3), this, (2), export, (1)
> **Env Vars:** jea (12), win (3), psrc (1), pssc (1), psd (1)
> **Tools:** powershell (15), visual studio (1)
> **CLI Commands:** make (3), rm (3), find (2)
> **Analogies:** for example (3), similar to (2), such as (1)
> **Cross-References:** go back to (3)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **UI Navigation:** go to (2)

#### Configuring remote management settings
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=0)** - [Instructor] Now we just touched on configuration for remote access.
>
> **[0:04](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=4)** We even tested just connecting locally, but really the focus was on roles and capability restrictions.
>
> **[0:10](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=10)** So limiting what someone can do when they connect in a session.
>
> **[0:14](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=14)** Now one of the advantages of using PowerShell is that it does provide remote access, remote access to Windows machines by default.
>
> **[0:22](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=22)** And then of course we can, with newer versions of PowerShell, connect to others such as Linux, Mac OS, et cetera.
>
> **[0:30](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=30)** Now if we're using a Windows machine to do our connection then of course we do need to go through the configuration that says I want to allow this machine to be the remoting machine.
>
> **[0:42](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=42)** What I mean by that is is I'm going to initiate my connections from here.
>
> **[0:47](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=47)** So to do this first, we've already run this one previously but I'm going to run it again just so we can see what happens.
>
> **[0:52](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=52)** We click Run Selection, which is Enable-PSRemoting, and this goes ahead and makes sure that the winRM configuration is set.
>
> **[1:00](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=60)** I don't have to do anything else.
>
> **[1:02](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=62)** I've already run this once.
>
> **[1:03](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=63)** I can then also have a separate rule underneath here for the firewall, which I'm going to run.
>
> **[1:07](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=67)** I already have this in there but it will make sure it's enabled anyway and that will allow the remote management capabilities to come over HDP and TCP.
>
> **[1:17](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=77)** And then what you may find is the machine that you're on, Windows 11 is actually better, but you may need to install the OpenSSH client.
>
> **[1:25](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=85)** So I'm going to Run Selection here.
>
> **[1:27](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=87)** This will use what's called AddWindowsCapability PowerShell and we'll install the application for me.
>
> **[1:33](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=93)** What that means is that when I'm here in a regular window I can type SSH and it then will allow me to run SSH commands.
>
> **[1:42](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=102)** So just a tool that you might need.
>
> **[1:45](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=105)** Now all this configuration is really just to set up the Windows machine or device to connect outwards to other devices.
>
> **[1:53](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=113)** So what we have here is we want to connect to a Linux machine because why would we not?
>
> **[1:57](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=117)** Because obviously our environments are often a mix from Windows machines to Linux machines to even Mac devices.
>
> **[2:05](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=125)** So what I'm going to do is, I've got two variables here.
>
> **[2:07](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=127)** One is the username, one is the IP address of my Ubuntu Linux machine.
>
> **[2:11](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=131)** So I'm going to just populate those.
>
> **[2:13](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=133)** And then what I can do, I have two different approaches.
>
> **[2:16](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=136)** I could either try to remotely do this by using SSH, which isn't a PowerShell capability, so I can still remote if needed to.
>
> **[2:25](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=145)** So for example, if I just wanted to select this option here and say SSH and then do Run, this is going to try and SSH to the machine.
>
> **[2:34](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=154)** And you'll see it came back and it went, oh, hold on a minute.
>
> **[2:36](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=156)** It failed its connection.
>
> **[2:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=158)** And that's because I didn't pass a password and a few other bits and pieces.
>
> **[2:41](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=161)** So sometimes it doesn't always work the way that's expected.
>
> **[2:45](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=165)** So let's go onto our Ubuntu Linux machine and then we'll do the configuration there.
>
> **[2:55](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=175)** So we're on our Linux machine and you've got the same PowerShell script here which I'm not going to execute.
>
> **[3:01](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=181)** But what I'm going to do here is I just want to copy the commands.
>
> **[3:04](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=184)** So we're going to take the wget option.
>
> **[3:06](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=186)** So first off, I'm going to go into my terminal and just make sure I've got wget.
>
> **[3:10](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=190)** And of course the first thing is it says, hey, it's missing the URL so we know it's enabled.
>
> **[3:15](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=195)** So let me just clear this and then go back to here.
>
> **[3:19](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=199)** I'm going to go from wget and I'm going to scroll all the way along where first off, it's going to download a specific package which is going to be a package from Microsoft.
>
> **[3:28](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=208)** And then of course you can see we've got this open the package up here and then we're going to use what's called sudo and start to install everything to do with PowerShell.
>
> **[3:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=218)** So I'm just going to get all of this here like so, and then go there and then I'll paste everything into here.
>
> **[3:47](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=227)** So there's my entire package.
>
> **[3:48](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=228)** I'm just going to make sure that I've got rid of all the extra characters 'cause sometimes when we copy and paste from some places it adds other bits and pieces.
>
> **[3:55](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=235)** So you can see I've got some extra parameters here and I'm going to press Enter.
>
> **[4:00](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=240)** It's now going to ask me for the password because obviously I'm going to do this as sudo which means a more administrative access.
>
> **[4:08](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=248)** So it's now going to go ahead, download the files, get the right package, read the list, add in the components.
>
> **[4:14](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=254)** I'm going to press Enter.
>
> **[4:15](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=255)** It's going to carry on looking for updates.
>
> **[4:17](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=257)** And then what it will do once it's done that, it will start going through and adding in all the bits and pieces that you can see, it's preparing and unpacking PowerShell and then it will go through and complete.
>
> **[4:28](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=268)** Okay, so it now says that that's done.
>
> **[4:31](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=271)** So let's go back to our Visual Studio code.
>
> **[4:34](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=274)** So the next thing we have to do is to go and install the openssh-server because I need it to be utilized as part of my connection because one of the advantages we have with PowerShell is that we can actually connect to the machine using PowerShell, but using SSH instead of using standard WIN RMM, which really is part of Windows, not Linux or any other operating system.
>
> **[4:59](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=299)** So I'm going to do Enter here, it's going to go ahead and find the open SSH server.
>
> **[5:04](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=304)** We'll wait for that to complete.
>
> **[5:06](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=306)** While that's doing that, let's flick back to our code.
>
> **[5:08](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=308)** And then of course I've got another option here which is going to go ahead and set that SSH service to be enabled and start.
>
> **[5:16](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=316)** So I'm going to copy that too.
>
> **[5:18](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=318)** This is now completed.
>
> **[5:19](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=319)** So let's clear that, and then I'm going to come into here and just paste.
>
> **[5:25](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=325)** Okay, so that's been updated.
>
> **[5:27](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=327)** So what we've now done is we've added PowerShell to this device here and we've gone through and installed open SSH server and then enabled everything to work as expected.
>
> **[5:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=338)** Now what does that look like?
>
> **[5:39](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=339)** Well actually if I am in here in the command itself, I should then be able to type pwsh, which will then convert me into PowerShell.
>
> **[5:49](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=349)** So by installing PowerShell, I'm able to drop into it and of course it's the latest release, and I can then execute some of those standard commands.
>
> **[5:57](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=357)** So that's how we configure the Ubuntu machine ready for me to connect into that device.
>
> **[6:04](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=364)** So let's go back to our Windows 11 machine and we'll look at how we connect back remotely using Windows 11.
>
> **[6:11](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=371)** So back here in Windows 11.
>
> **[6:14](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=374)** So now what we need to do is just populate our variables a little bit here.
>
> **[6:17](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=377)** So we're going to use our trainer account and then my IP address here, which is 192168147.
>
> **[6:27](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=387)** And then my password, which is super, super secure for this, which is Pass@word1.
>
> **[6:34](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=394)** Okay, so let me clear this out here.
>
> **[6:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=398)** And what I can then do is start to load all of my variables.
>
> **[6:41](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=401)** So I can say Run Selection and then I can say I need to get the password and make that secure.
>
> **[6:47](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=407)** So Run Selection and then I'm going to right click here and create a credential object.
>
> **[6:52](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=412)** Okay, so what does that credential object contain?
>
> **[6:54](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=414)** It should be, if I do Run Selection, there we go, trainer is the username and then a secure string, same as you've done in the past.
>
> **[7:02](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=422)** So let me clear that out.
>
> **[7:03](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=423)** Now what I should be able to do here is say enter the PowerShell session like we did previously and go to the Ubuntu IP address with the specific username and the credential.
>
> **[7:14](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=434)** So let me right click here, Run Selection.
>
> **[7:17](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=437)** And it comes back and it says, okay, one cannot be resolved, insufficient number of parameters.
>
> **[7:22](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=442)** So we have some parameters that may be missing and we need to adjust.
>
> **[7:27](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=447)** So how do we resolve this?
>
> **[7:29](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=449)** Well, let's take a look at this command a little bit and make sure we have this right.
>
> **[7:32](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=452)** This is important.
>
> **[7:33](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=453)** I always like to go through the PowerShell sometimes to try and run something, watch it fail, and then figure out what's missing.
>
> **[7:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=458)** Now when we're actually doing Enter-PSSession, when it's a Windows machine we can obviously pass credentials but you'll notice I also have username which kind of is against the whole thing.
>
> **[7:49](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=469)** Now we know that the credential object can obviously be used against Windows.
>
> **[7:53](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=473)** So if we just remove that one and just say, let's do enter Enter-PSSession, so we can say Run Selection.
>
> **[8:00](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=480)** Now you'll notice what happens.
>
> **[8:01](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=481)** What was happening is it was trying to pass a credential like I would in Windows and Windows would authenticate it, but we're not connecting to Windows, we're connecting to Linux.
>
> **[8:09](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=489)** So we need to remove that just past the username.
>
> **[8:12](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=492)** And then you'll see, hold on a minute, we can't establish a connection because we need to obviously have some type of fingerprint.
>
> **[8:19](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=499)** So I'm going to say yes, I would like to continue.
>
> **[8:24](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=504)** Let me just click into here.
>
> **[8:25](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=505)** Yes, and there we go.
>
> **[8:28](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=508)** We are now asking for the password, like so, and then it'll come back and it says, oh hey, this has been permanently added to the list of known that are there.
>
> **[8:40](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=520)** We've put the password in and of course it's come back and said, hey, there's a channel failure, and that's okay.
>
> **[8:44](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=524)** That might just be that it's been created.
>
> **[8:47](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=527)** Now we may just need to re-execute that.
>
> **[8:49](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=529)** Sometimes we have some odd issues ever so often.
>
> **[8:52](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=532)** So I click Enter here.
>
> **[8:56](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=536)** And it could also be that the Linux subsystem is not responding properly.
>
> **[9:01](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=541)** I may need to reboot because the PowerShell was only recently installed, or I may need to reboot and make sure that the SSH service is working correctly.
>
> **[9:09](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=549)** And it could also be on the Windows side.
>
> **[9:11](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=551)** So how do we diagnose that?
>
> **[9:12](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=552)** Well, first off, let's just give the Ubuntu machine a bit of a reboot, and I can do that remotely.
>
> **[9:18](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=558)** So we'll just say restart the machine.
>
> **[9:22](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=562)** Once that's restarted then we can issue that same command again and see if the subsystem request is going to be successful this time.
>
> **[9:31](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=571)** So the machine has rebooted on this side.
>
> **[9:33](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=573)** So let me just clear this out and what we'll do is we'll try issuing that same connection again.
>
> **[9:39](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=579)** So we'll say Run Selection.
>
> **[9:40](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=580)** put the password in like so, and do Enter.
>
> **[9:44](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=584)** And the same thing happens again.
>
> **[9:45](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=585)** So it's clearly some configuration on the Ubuntu side.
>
> **[9:50](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=590)** So let's hop back to our Ubuntu server and have a look.
>
> **[9:55](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=595)** Okay, so we are back in here.
>
> **[9:57](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=597)** So I'm going to launch a terminal and I'm just going to zoom this in.
>
> **[10:01](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=601)** Okay, and the first thing we're going to do is we're going to look at a specific configuration file.
>
> **[10:08](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=608)** And what this is, this is our SSH file that contains some of the config that's available.
>
> **[10:18](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=618)** So remember we installed PowerShell and then the SSH piece that we want to use, we want to kind of tell it that, hey, when you connect, we want the subsystem to be returned as PowerShell over that SSH.
>
> **[10:32](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=632)** So what we need to do here is one step that we didn't do is we didn't add this to this file.
>
> **[10:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=638)** So when a connection is made, nothing happens, it just kind of connects and then says I've got nothing to return back to you.
>
> **[10:46](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=646)** So you can see where it says subsystem right here.
>
> **[10:49](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=649)** So I'm going to say subsystem and then I can say PowerShell like so, and then the location to this is in the usr, it's in the bin, and it's pwsh.
>
> **[11:03](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=663)** And then what I can then do is I can then say, let me not make it that far, I can say sshs.
>
> **[11:11](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=671)** Okay, so fairly straightforward.
>
> **[11:13](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=673)** I'm going to say exit and save and write the name to it.
>
> **[11:16](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=676)** And then what I'm going to do is just get the service to actually be restarted like so.
>
> **[11:23](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=683)** So this will restart the SSH service.
>
> **[11:26](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=686)** Okay, so that was a quick change.
>
> **[11:28](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=688)** We're just telling it to return over PowerShell when you go with SSH to the machine.
>
> **[11:33](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=693)** Okay, so let's go back to our Windows 11 machine.
>
> **[11:38](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=698)** Okay, so we're back here.
>
> **[11:39](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=699)** So let me just clear this bottom section.
>
> **[11:42](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=702)** And now let's issue that same command, right click, Run Selection.
>
> **[11:46](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=706)** It's going to ask us for the password like so, and Enter.
>
> **[11:51](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=711)** So we've got a bit of an error back, but that's okay.
>
> **[11:53](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=713)** Let me just clear.
>
> **[11:54](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=714)** That could have been just because we're waiting for it to reset.
>
> **[11:57](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=717)** So let's just select and Run Selection.
>
> **[12:01](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=721)** It's going to ask me for the password and then we are connected.
>
> **[12:07](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=727)** So we can see that we are now connected to the Linux machine.
>
> **[12:10](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=730)** And if I wanted to type commands such as whoami.
>
> **[12:14](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=734)** It says I am a trainer, which is over there, I can type in HostName and you can see it says Ubuntu.
>
> **[12:21](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=741)** And then I get access to configuration that I can retrieve from that Ubuntu by running regular PowerShell commands.
>
> **[12:31](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=751)** So it's as simple as that, albeit we went through a few little steps to try and figure out some of the things that go wrong but that's okay because it happens quite frequently.
>
> **[12:39](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=759)** Getting remoting to work correctly on Windows machines, Linux machines, and even Mac machines can often be quite complicated.
>
> **[12:47](https://www.linkedin.com/learning/powershell-automating-it-administration/configuring-remote-management-settings?u=76281980&t=767)** So there are steps that need to be done and we walked through those just to see how easy and sometimes complicated it can be.

> [!info]- Semantic Content
>
> **Code Keywords:** let (21), pass (4), super (2), default. (1), else. (1)
> **CLI Commands:** ssh (15), make (7), wget (3), find (2), sudo (2)
> **Tools:** powershell (20), terminal (2), visual studio (1)
> **Env Vars:** ssh (15), hdp (1), tcp (1), url (1), win (1)
> **Prerequisites:** install (4), set up (1), configure (1)
> **Cross-References:** go back to (4)
> **Analogies:** such as (2), for example (1)
> **UI Navigation:** open the (1), go to (1)

#### Managing remote sessions and connections
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=0)** - [Instructor] So once we have remoting configured just as we did on the Linux machine, obviously a slightly different process on a Windows server or a client, we can then start to manage the types of connections that we create.
>
> **[0:13](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=13)** So what we're going to do here is we're going to first connect to my Windows server.
>
> **[0:17](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=17)** So I'm going to create a credentials object like we did before and I'll continue using my training administrator account.
>
> **[0:25](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=25)** Now, of course it doesn't have to be the administrator, but for the purposes of this it makes life a little bit easier.
>
> **[0:30](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=30)** So I have my new credential that's been created and then I've got the name of my remote server, which is server.training.int.
>
> **[0:38](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=38)** I'm going to click run selection to populate there.
>
> **[0:41](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=41)** And then what I'm going to do is use this new PS session.
>
> **[0:44](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=44)** Now, previously we used enter PS session, which means it's going to create an interactive session that's connected directly to that machine.
>
> **[0:51](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=51)** It doesn't create a session necessarily on here.
>
> **[0:55](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=55)** The advantage of using new PS session is that it retains that session for later.
>
> **[1:01](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=61)** So what it does, it instantiates the sessions and adds a brand new one and says, hey, let's create a brand new one.
>
> **[1:07](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=67)** So you could have multiple sessions to multiple machines at any one point.
>
> **[1:12](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=72)** Now, of course, what we're going to do is populate this into a variable and the reason for that is so that we can call that session a little bit later.
>
> **[1:19](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=79)** So I'm going to select my whole line here and just say run selection.
>
> **[1:24](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=84)** So now if I say $session, not the secure password but session, you can see that I have a session connected.
>
> **[1:34](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=94)** So it's an ID of seven and it's a WSMan transport one.
>
> **[1:38](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=98)** So the standard instrumentation for management, the name of the server, it's opened and it's using PowerShell as the configuration name.
>
> **[1:47](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=107)** Now, of course, remember when we connected using the JEA restrictions, the configuration name would've been different even though it incorporates PowerShell.
>
> **[1:57](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=117)** So now that we have that connected, how do we issue commands against that?
>
> **[2:02](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=122)** Well, first off, we have the session, but if you notice in this bottom section, I'm not really in the session, I am just connected to my machine.
>
> **[2:11](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=131)** So what I can do is I can say enter PS session and then I can loop through the session options.
>
> **[2:22](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=142)** So what I'm going to do here is just say session and do enter.
>
> **[2:27](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=147)** And then of course I'm now entering the session that I originally created.
>
> **[2:31](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=151)** My session doesn't go away until I delete the session.
>
> **[2:35](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=155)** However, if I don't create a session and I just use enter PS session to begin with, it will create the session and then as soon as I come out, it then clears that session out.
>
> **[2:45](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=165)** So I'm now connected.
>
> **[2:46](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=166)** So we can check this by just typing host name and you can see surely I'm on the server itself.
>
> **[2:52](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=172)** So let me come out and exit there.
>
> **[2:54](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=174)** Now, what I can do is I can also do get PS session And the get PS session will list me the available sessions that I want to go into or maybe want to clear out if I needed to.
>
> **[3:07](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=187)** So we can also remove a session.
>
> **[3:10](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=190)** Now, what we also have is a command called invoke command.
>
> **[3:13](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=193)** So think of the logic here.
>
> **[3:14](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=194)** You have a bunch of machines on the network, you've got PowerShell remoting enabled by default.
>
> **[3:19](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=199)** And what you want to do is to be able to go and get process information for example, or service information from those machines.
>
> **[3:26](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=206)** So what I can do is I can utilize a command like this that says invoke command.
>
> **[3:32](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=212)** So fairly straightforward.
>
> **[3:34](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=214)** Go and run this command and throw it down this session.
>
> **[3:38](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=218)** And this is the session that I have created.
>
> **[3:41](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=221)** Now, of course if I'd created a new PS session to the Ubuntu server I would also have that one listed as well.
>
> **[3:47](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=227)** So I would have to choose the session that I wanted to use, but I can pass the session 'cause we have one.
>
> **[3:53](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=233)** And then I have this new property called script block which says within the squiggly brackets go and execute this command.
>
> **[4:00](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=240)** So first off, let's just do a check.
>
> **[4:02](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=242)** So if I say get service and run that here this is going to run all of the services and show me them that are listed on this current machine.
>
> **[4:11](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=251)** So this is my Windows 11 machine.
>
> **[4:15](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=255)** So let me just clear that out.
>
> **[4:17](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=257)** If I execute this command, the invoke command, it's going to run down that session.
>
> **[4:22](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=262)** And when I do run select it's now going to go ahead and return me the list of services.
>
> **[4:27](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=267)** And you can see that 'cause it puts the name of the machine here from that machine remotely.
>
> **[4:33](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=273)** Now, you may be wondering what advantage does this have?
>
> **[4:36](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=276)** Well, if you notice my cursor where it's sitting didn't change into a session.
>
> **[4:42](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=282)** So you remember we ran enter PS session.
>
> **[4:44](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=284)** And when I go into it, it changes the context.
>
> **[4:47](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=287)** So right now I'm only in the context of the server console itself, which means if I have things I want to execute, PowerShell scripts, I have to make sure I copy those over to that machine into a location that this console can actually get into.
>
> **[5:04](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=304)** Whereas if I'm running it using this invoke command option up here, then if those files or those commands exist I can push those out through this session instead of having to go and do things on that machine itself.
>
> **[5:20](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=320)** Now, what we can do is we can start to join things together.
>
> **[5:23](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=323)** Now, the advantages here of using Windows is that it has all of the frameworks and the providers and the modules that we would expect.
>
> **[5:31](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=331)** So I'm going to use something called get WMI object.
>
> **[5:34](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=334)** I'm actually going to change it maybe to get SIM object instead.
>
> **[5:38](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=338)** So SIM is the more modern.
>
> **[5:39](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=339)** So what we can do here is we can say invoke command, go down that same session.
>
> **[5:44](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=344)** And then for my script block I want to put some things together.
>
> **[5:47](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=347)** And you'll see actually what we're doing is populating a variable, another variable and then creating a new custom object with those values in.
>
> **[5:56](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=356)** So this is about adding multiple things together in the same thing.
>
> **[6:01](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=361)** So this will help you understand, for example let's say I want to run a script nightly on all of the remote machines that returns back information about applications installed, amount of memory that was used, et cetera.
>
> **[6:14](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=374)** This is how we would tie all those things together.
>
> **[6:16](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=376)** So let's select the whole object here.
>
> **[6:19](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=379)** We'll right click and say run selection.
>
> **[6:21](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=381)** And then what do we get?
>
> **[6:22](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=382)** If we just scroll this up here you'll get the name of the operating system, which comes from the WMI object, which is great.
>
> **[6:29](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=389)** If we're going to do this with the new version we'd use SIM instance.
>
> **[6:33](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=393)** Then we've got system information that we're retrieving.
>
> **[6:36](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=396)** And then what we're doing is creating a custom object, which has operating system, manufacturer and model.
>
> **[6:42](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=402)** And it goes and retrieve.
>
> **[6:43](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=403)** You can see I'm using VMware and this is a virtual machine which is a server 2022.
>
> **[6:48](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=408)** So I can retrieve that.
>
> **[6:50](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=410)** I just tell it to go down that session and get me the information that's needed.
>
> **[6:55](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=415)** Now, we can also import commands from other servers, so into the session that we wish to use.
>
> **[7:04](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=424)** So let's just try this, okay?
>
> **[7:05](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=425)** So I'm on Windows 11 and I want to say get AD user.
>
> **[7:12](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=432)** Okay, get AD user is active directory.
>
> **[7:15](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=435)** It's got nothing to do with Windows 11, unless I've installed the management pack and I have the modules in there, but I can't actually run get AD user, 'cause what I would like to do is see a list of all the users in the active directory.
>
> **[7:28](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=448)** So let's go back and look at what we could do.
>
> **[7:30](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=450)** Well, what we can do here is we can import a session.
>
> **[7:35](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=455)** Now, so far we've just entered a session and we've created a brand new session but we haven't imported anything from a session.
>
> **[7:43](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=463)** So let's first go into, let me do this one down here.
>
> **[7:48](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=468)** So we can just enter.
>
> **[7:49](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=469)** Let's just enter into the PS session here.
>
> **[7:52](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=472)** And then while I'm in here I can say get AD user.
>
> **[7:58](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=478)** Now, of course notice it does work.
>
> **[8:01](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=481)** It comes back and says, oh wait a minute, you need some kind of filter, which is perfectly okay.
>
> **[8:06](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=486)** I'm not going to change anything at the moment, so I'll just cancel that.
>
> **[8:10](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=490)** But it means that that is functioning.
>
> **[8:13](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=493)** If I now choose get module and you'll see the modules that are loaded into the PowerShell window or the session on the remote server.
>
> **[8:23](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=503)** So you can see the active directory one is loaded on the server.
>
> **[8:29](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=509)** As it should be, 'cause it's a domain controller.
>
> **[8:31](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=511)** So let's come out of this session.
>
> **[8:34](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=514)** Now, bear in mind I was not able to execute any of those commands because I obviously don't have active directory installed.
>
> **[8:42](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=522)** So I'm going to say import PS session, this specific session and I want to get a module.
>
> **[8:47](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=527)** So I'm going to say run selection.
>
> **[8:50](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=530)** Now, see what happened here?
>
> **[8:51](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=531)** It kind of added something in for me and it brought down a script and it gave me a random name.
>
> **[8:58](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=538)** And then there's a bunch of exported commands.
>
> **[9:00](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=540)** So now let's see what I can do.
>
> **[9:03](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=543)** I can say get AD user and you'll see what we did there.
>
> **[9:07](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=547)** I was able to import a PowerShell module remotely from an existing session on the other machine and bring that module down, albeit temporarily.
>
> **[9:17](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=557)** So if I say get module you'll see I've got all my list of regular modules.
>
> **[9:22](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=562)** And then this funny one at the bottom here, which is classed as a script has all of those cmdlets available to me and you can see add AD computer, add AD central.
>
> **[9:33](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=573)** So it's going to be all the active directory commands.
>
> **[9:36](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=576)** So this allows me to import those directly into the session or into at least my PowerShell window without actually having to go and install it.
>
> **[9:45](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=585)** Now, of course it doesn't stay there forever and it can get removed because it's not obviously a base one that's there, but it's a way of using them if we don't know where they are.
>
> **[9:55](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=595)** Now, of course we can also execute against multiple machines if we wanted to.
>
> **[9:59](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=599)** I'm not going to execute this one because we know what this one looks like, but if I had three machines, remote PC one, PC two, PC three, I could actually go ahead and run that against them and that would execute the same get process command against the machines.
>
> **[10:16](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=616)** Then of course we also have gone through and touched on connecting to Linux as well.
>
> **[10:21](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=621)** Now, what I want to touch on here is obviously what we do with the sessions when we're finished.
>
> **[10:27](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=627)** So if I go back to here and say PS session I've now got two PS session options available to me.
>
> **[10:35](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=635)** One is the run space, which is the first one we connected and one is a local one connected, which is all about bringing down that kind of PowerShell.
>
> **[10:44](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=644)** Now, what we can do is we can say remove PS session and then from the session option I can then say I want session nine to go.
>
> **[10:57](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=657)** And that is what happened.
>
> **[10:58](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=658)** It's not actually the session that we need to close down.
>
> **[11:02](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=662)** If I go back and tab through you'll see we can loop and it says instance ID or ID.
>
> **[11:08](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=668)** So we are not deleting a session by a session name.
>
> **[11:11](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=671)** Unless you have a variable with that in we're going to delete it by the number.
>
> **[11:15](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=675)** So I'm going to say ID nine and then I'll say seven and then we'll clear that out and then I'll reissue get PS session.
>
> **[11:24](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=684)** And now I have no sessions whatsoever.
>
> **[11:26](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=686)** If I now do get module and run the get module you'll see that that funny script one has now gone because it was only loaded by there being a session that's there.
>
> **[11:36](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=696)** So this hopefully helps us understand how we can manage and connect to sessions on other machines without actually physically needing to be on them.
>
> **[11:47](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=707)** And even more so without actually having to interact with the specific sessions itself or being in them like we did when we did the Ubuntu machine.
>
> **[11:56](https://www.linkedin.com/learning/powershell-automating-it-administration/managing-remote-sessions-and-connections?u=76281980&t=716)** And of course, what's great here is the ability for us to bring down modules into the current session that we're in from another machine.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), module (7), delete (2), continue (1), default. (1)
> **Tools:** powershell (8)
> **Env Vars:** sim (3), wmi (2), jea (1)
> **Definitions:** is a  (4), means that (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)

#### Connecting to Windows Servers remotely and performing tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=0)** - [Instructor] So now that we've remotely connected to Linux and also to a Windows server, now let's touch on some of the things that we can do remotely.
>
> **[0:09](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=9)** So first off, we obviously have our remote server name and our credential.
>
> **[0:13](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=13)** So let me just set the remote server here and then let me just double check that I have a credential object, which I do.
>
> **[0:20](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=20)** So we can still utilize that.
>
> **[0:21](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=21)** And then of course, I'm going to initiate my session here.
>
> **[0:25](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=25)** So we're going to say run selection session.
>
> **[0:27](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=27)** Okay, it came back, the user password is incorrect.
>
> **[0:30](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=30)** So that was obviously a different credential.
>
> **[0:31](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=31)** So that's okay, so let's do run selection.
>
> **[0:34](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=34)** We'll set the training administrator and the password for that one and then we'll just clear this bottom section and then we'll reissue that session.
>
> **[0:46](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=46)** Okay, perfect, so let me just double check, make sure I've got a session and sure enough I do.
>
> **[0:50](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=50)** So I'm now connected and of course we could then say enter PS session to make sure.
>
> **[0:55](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=55)** So I'm going to say enter PS session and sure enough, we're on the server itself.
>
> **[1:00](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=60)** Okay, perfect, so let's come out of that and let's clear that.
>
> **[1:03](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=63)** Now let's talk about installing specific roles and features because of course one of the advantages of PowerShell on Windows is that we can hook into its ability to install specific things and remove things and make configuration adjustments.
>
> **[1:18](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=78)** So let's say you wanted to build a new machine, you've got the server built, the network team gave it to you, you can then just simply come in and say, hey, connect to the server, invoke command, run selection, and this one's going to go ahead and install the web server.
>
> **[1:33](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=93)** Now I've already installed the web server here otherwise we'd be sitting here watching it install for quite some time.
>
> **[1:38](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=98)** But if it needed to, it would've installed the Windows IAS web server capabilities.
>
> **[1:45](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=105)** Now what we can do is add other things together as well.
>
> **[1:49](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=109)** So we can go through and say, well actually, I want to go and add new users as part of this process.
>
> **[1:56](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=116)** So you can see I'm using new local user, just a regular one.
>
> **[2:00](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=120)** I've called it new user, created a password for it, the full name and the description and then I'm going to add it to a group.
>
> **[2:06](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=126)** So let's click this option here.
>
> **[2:08](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=128)** So run selection, and it comes back and it says "Add local group member, group users was not found."
>
> **[2:15](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=135)** So obviously we don't have a group called that.
>
> **[2:18](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=138)** Now what did that do though?
>
> **[2:20](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=140)** So did that go and connect?
>
> **[2:23](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=143)** So let's do enter PS session.
>
> **[2:25](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=145)** So this is where you would need to interact with.
>
> **[2:28](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=148)** So I can say get local user and you can see I've got my administrator and I've got my new user.
>
> **[2:36](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=156)** So it does exist, it did create, and I can say get local group.
>
> **[2:42](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=162)** And you can see I don't have a group called users.
>
> **[2:46](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=166)** And so it is correct, it didn't know what to do with that one.
>
> **[2:49](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=169)** So I can't add a member to a group that doesn't actually exist.
>
> **[2:53](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=173)** So what we could do is say new local group and I can then say name, let's call it users and press enter.
>
> **[3:03](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=183)** And of course it comes back and says, "No, hold on a minute.
>
> **[3:05](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=185)** The group does exist," and this is okay, this is because it's now part of a domain controller.
>
> **[3:12](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=192)** So it converts it from what it would be as a local group to just a group.
>
> **[3:17](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=197)** So it just means I have to adjust my PowerShell but that's okay.
>
> **[3:20](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=200)** In reality, you wouldn't be necessarily creating local users on a server unless the server wasn't part of a domain, but that's okay.
>
> **[3:27](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=207)** So we could actually change that syntax to be add group member instead.
>
> **[3:32](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=212)** Another option that we've got, let's say, maybe we wanted to set the IP address of the machine and set the default gateway and things like that.
>
> **[3:42](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=222)** I'm not going to execute this because this will change my network configuration but if I just scroll down to here, you can see if I scroll to the side what we're doing.
>
> **[3:51](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=231)** So I can say, "Go and get me the network adapter where the status is up."
>
> **[3:57](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=237)** Then I'm going to say new network IP address and then set what the IP address is going to be with the prefixed length and the gateway.
>
> **[4:04](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=244)** And then I can also go ahead and set the DNS information as well.
>
> **[4:08](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=248)** Now obviously if I run this one, it will update my network connection and then I'll lose connection to the other machine.
>
> **[4:14](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=254)** But what we can do is if I just copy this one out here and say, "Hey, just go and get me the interfaces," then I'm going to just select here and do run and it will go ahead and connect.
>
> **[4:29](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=269)** Now notice what happens here.
>
> **[4:32](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=272)** I get nothing, I get no output, no nothing whatsoever.
>
> **[4:37](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=277)** So maybe let's do write host and do interface and then we'll try that one again.
>
> **[4:45](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=285)** So we're going to send this down a session.
>
> **[4:47](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=287)** So I'm going to say run selection and you'll see now I get some information coming back but of course I have to tell it to do that otherwise nothing is returned.
>
> **[4:56](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=296)** So you can see it came back and said, "This is my network adapter where the status is set to up," so we can retrieve updates back from something that was executed on the other side.
>
> **[5:09](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=309)** So that's a nice thing to know.
>
> **[5:11](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=311)** Now of course, we can also configure firewall rules.
>
> **[5:13](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=313)** We did this previously and obviously I can say invoke the crest, go in and say create a remote desktop user mode, enable it.
>
> **[5:20](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=320)** So I'm going to say run selection, it's going to go ahead and create me a firewall rule.
>
> **[5:24](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=324)** And that firewall rule gets updated on the other side and we'll hop across and have a look at that momentarily.
>
> **[5:31](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=331)** We can also then perform other tasks like we can reboot machines and we can start machines.
>
> **[5:37](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=337)** We could configure all pieces of a machine that are available within PowerShell.
>
> **[5:43](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=343)** So let's just go over and have a look at these changes to make sure that these are made.
>
> **[5:47](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=347)** So let's hop over to our server.
>
> **[5:51](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=351)** So this is the Windows server.
>
> **[5:52](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=352)** So if we just go in and type firewall, let's do firewall and protection, and then we'll click advanced settings here.
>
> **[6:00](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=360)** What I'm looking for is that firewall rule to have been added.
>
> **[6:05](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=365)** So if we scroll across here, it's not the easiest to see, but if we scroll all the way down, we should have some kind of rule that was created around remote desktop that will have been created in here to allow that traffic to come in.
>
> **[6:19](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=379)** And then of course from outbound, if we configured any outbound ones, then that would also be listed here as well.
>
> **[6:27](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=387)** So it does allow us to make adjustments to that as well.
>
> **[6:31](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=391)** And of course, if I click into here admin tools, go to Active Directory Users and Computers and just go into users, you can see that my new user exists right here with those property values as expected.
>
> **[6:45](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=405)** And of course if I'm looking at the groups, I've got various groups that list here, but of course, there's not really a user's group necessarily because every Active Directory account or local account is added to the user's group anyway because of that's how it creates.
>
> **[7:00](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=420)** So you can see the changes were immediate and they were done remotely from the Windows 11 machine.
>
> **[7:07](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=427)** So let's flick back to our Windows client.
>
> **[7:10](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=430)** Okay, so back here again, let me clear this out.
>
> **[7:14](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=434)** And then what we'll do is I'm going to say, what we'll do, we'll actually issue this one here, which is a restart.
>
> **[7:21](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=441)** We'll choose run selection.
>
> **[7:23](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=443)** And then what I'll do is I'll say ping server and you can see it's got no response at all and it just says request timed out.
>
> **[7:33](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=453)** Now, eventually that will come back because the server itself is currently being rebooted.
>
> **[7:38](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=458)** Oh, there we go, reply and it starts to come back.
>
> **[7:41](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=461)** So I can force the server to restart remotely using PowerShell.
>
> **[7:47](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=467)** So it's so powerful to be able to connect to the machine remotely very quickly from your machine and just be, "Hey, I need to make this adjustment, this change," whatever it would be.
>
> **[7:58](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=478)** And then we are able to then go and reconnect.
>
> **[8:01](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=481)** Now of course if I go and say get PS session and just select this option here, you can see that there's a PS session still here.
>
> **[8:12](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=492)** Now remember I rebooted the session and of course this is what happens once you've rebooted that one, it doesn't then kind of work again.
>
> **[8:21](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=501)** So you can retrieve the remote session again by using the command that's listed there, which is get PS session and get the instant ID again, or we can remove that session and then create another session.
>
> **[8:34](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=514)** But it won't let us go back into the original session.
>
> **[8:38](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=518)** So at that point, we would then come into here and say, remove the PS session.
>
> **[8:43](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=523)** Like so that would get rid of it.
>
> **[8:45](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=525)** If I say get PS session, there should be nothing.
>
> **[8:48](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=528)** And then I can then go back to the top here where we did the original connection and say, create me a new session.
>
> **[8:56](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=536)** And then I can say, here's my session.
>
> **[8:58](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=538)** I can say, go and check if the session exists.
>
> **[9:01](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=541)** And sure enough, it does.
>
> **[9:02](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=542)** So just remember that when you do certain tasks like rebooting or resetting network, your session may time out and not function.
>
> **[9:09](https://www.linkedin.com/learning/powershell-automating-it-administration/connecting-to-windows-servers-remotely-and-performing-tasks?u=76281980&t=549)** But that's how we can manage and kind of connect to those other servers remotely and perform some basic tasks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), interface (1), function (1)
> **CLI Commands:** make (6)
> **Prerequisites:** install (3), configure (2)
> **Tools:** powershell (4)
> **Env Vars:** ias (1), dns (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Performing remote administration tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=0)** - [Instructor] Now, the last part of this is being able to actually interact with the specific remote machine.
>
> **[0:07](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=7)** So it's all good and well that we want to obviously go in and you know, run something and get something back, but sometimes you just need to be physically on the machine, or at least have a session that's enabled.
>
> **[0:17](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=17)** So I'm actually going to say enter PS session, 'cause I want to interact directly with the machine.
>
> **[0:23](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=23)** So here we are, I am now connected to my Windows server.
>
> **[0:27](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=27)** And the first thing we might want to do is get some system information.
>
> **[0:30](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=30)** So I'm going to select my command here, and we'll paste into this bottom section, 'cause I want to see what it looks like when it's laid out.
>
> **[0:37](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=37)** So you can see we're going to go and get some counters.
>
> **[0:39](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=39)** So get counter is all about memory information that we can get.
>
> **[0:43](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=43)** So I'm going to get the processor time, I'm going to get the available bytes, and the free space.
>
> **[0:48](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=48)** So when I click enter here it's going to run it against the other machine, and you can see it returns back the timestamp of today.
>
> **[0:54](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=54)** And then gives me the free space the available megabytes and the processor time.
>
> **[0:59](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=59)** So I'm interacting with the machine.
>
> **[1:02](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=62)** Now, I could get this information and return it back if I wanted to, but this allows me to see it dynamically that's there.
>
> **[1:09](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=69)** If I also wanted to perhaps run Windows updates I could do that as well.
>
> **[1:14](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=74)** I'm actually just going to do accept all, and not the auto reboot, and I'll say run selection.
>
> **[1:20](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=80)** And so what this will do is this says, "Oh, hold on a minute.
>
> **[1:24](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=84)** this one doesn't quite work the way that I was expecting."
>
> **[1:26](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=86)** Because what's it trying to do when I execute it here.
>
> **[1:29](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=89)** So let me try and copy this command, and paste it directly into here, and say Install.
>
> **[1:35](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=95)** And it says, "I don't understand what install Windows update is."
>
> **[1:40](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=100)** So how do we fix that?
>
> **[1:41](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=101)** How do we somehow try and find what the install Windows Update one is all about?
>
> **[1:48](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=108)** And that's where we need to know the module that things like install Windows Update actually resides in.
>
> **[1:56](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=116)** Now luckily for us, it's really straightforward.
>
> **[1:58](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=118)** It's going to be in a module called PSWindowsUpdate.
>
> **[2:02](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=122)** So let me clear this bottom section here, and then what we're going to do is we'll say get-module, and I just want to see what's been loaded.
>
> **[2:11](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=131)** So directly in this session we have PowerShell Diagnostics Utility and PSS Edit.
>
> **[2:17](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=137)** So I need to import a specific module into this session.
>
> **[2:22](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=142)** So I'm going to say PSWindowsUpdate, and do Enter and it's going to come back and say, "Okay, I can't import it because I dunno what to do with that one."
>
> **[2:32](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=152)** So if I can't import the module, then there must be an install option.
>
> **[2:39](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=159)** So I need to install that module first.
>
> **[2:42](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=162)** So I'm going to say install-module.
>
> **[2:45](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=165)** This is going to now go and have a look across the internet to the Parashell Gallery and look for PSWindowsUpdate.
>
> **[2:51](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=171)** And the first thing it does when it comes back is it says, "Okay, you haven't installed anything from here before."
>
> **[2:56](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=176)** So we need to get the new Get provider.
>
> **[2:58](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=178)** So I'm going to say yes, that's going to go ahead and update the new get provider, to be able to find the package that we need it to.
>
> **[3:06](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=186)** And then it will say "Do you want to put PowerShell get?"
>
> **[3:08](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=188)** Which I do.
>
> **[3:09](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=189)** And then of course I do want to trust the PowerShell Gallery it's the Microsoft Gallery.
>
> **[3:13](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=193)** So why would I not want to trust it?
>
> **[3:15](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=195)** Okay, so that's done that now.
>
> **[3:17](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=197)** So now what I can do is go and highlight this section again, and say Run selection, and notice this time it'll confirm and do that.
>
> **[3:26](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=206)** It will say in-store Windows update, look for the Microsoft updates, and then accept them all.
>
> **[3:31](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=211)** I'm not going to have your auto reboot.
>
> **[3:33](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=213)** There's no need for that.
>
> **[3:35](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=215)** And then it goes ahead and it says, "Okay hold on a minute."
>
> **[3:37](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=217)** There's a few here.
>
> **[3:38](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=218)** It says "There's some Windows malicious cumulative updates," et cetera.
>
> **[3:42](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=222)** And it says access is denied.
>
> **[3:43](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=223)** And that's okay because I'm trying to run it from within the context of Visual Studio Code.
>
> **[3:48](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=228)** And sometimes, in this bottom section using the PowerShell extension, it doesn't necessarily function as expected.
>
> **[3:55](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=235)** So what we can do is flick back into the standard one here where it says get-module inside the regular PowerShell window.
>
> **[4:03](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=243)** And I can say install-module, PSWindowsUpdate.
>
> **[4:11](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=251)** This is going to install the same module.
>
> **[4:13](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=253)** But this time, you have noticed, hopefully by now, that just because I'm in Visual Studio Code doesn't mean that my modules get installed into the actual console that I happen to have open.
>
> **[4:25](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=265)** So it's installed.
>
> **[4:26](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=266)** So to check that we can say get-module, and sure enough it now says Parashell, get Parashell management, PS read, package management, you know, we've got this extra kind of piece that's in here.
>
> **[4:40](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=280)** So now I'm going to say import-module, PSWindowsUpdate.
>
> **[4:49](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=289)** Okay, if I now say get-module, you can now see PSWindowsUpdate is now been added because obviously it wasn't showing previously, because I'd only installed it, not gone through the process of adding it in.
>
> **[5:02](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=302)** I'm now going to select my code from previous, paste it into here, and then do the same thing and leave it doing its thing.
>
> **[5:10](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=310)** Now it may come back as access denied, and that's okay.
>
> **[5:12](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=312)** It'll be just because I'm logged in with a different account.
>
> **[5:15](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=315)** But we'll come back to that and check that in a minute.
>
> **[5:17](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=317)** Now another task you might want to do is do a backup.
>
> **[5:20](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=320)** You may want to create a backup of a specific folder, for example, and store it somewhere if you wanted to.
>
> **[5:27](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=327)** So let me create a folder here.
>
> **[5:29](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=329)** Let me go into my C drive on the machine and we'll say new folder and we'll call it important data.
>
> **[5:39](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=339)** And then what I'll do is I'll also create a folder called backups on the C drive as well, just so I have somewhere to put this.
>
> **[5:51](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=351)** Backups.
>
> **[5:52](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=352)** And then in the import and data, I'll just say new text file.
>
> **[5:57](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=357)** Like so.
>
> **[5:59](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=359)** And we'll say text, close that down, click save and we're done.
>
> **[6:06](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=366)** Okay, so I can say backup file, I'm going to say Run selection and it's going to come back and it says, "Oh, hold on a minute.
>
> **[6:12](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=372)** The term backup file isn't recognized."
>
> **[6:16](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=376)** So once again you can see this kind of battle that we play when we try to remotely connect.
>
> **[6:21](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=381)** Because we don't necessarily know what modules have been loaded, what's available in the session.
>
> **[6:27](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=387)** For example, in the current one, the get-module, this is all I have access to.
>
> **[6:31](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=391)** I don't have anything else.
>
> **[6:33](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=393)** For example, you know, creating a backup of something or you know, managing active directory or things like that.
>
> **[6:42](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=402)** So I need to know where to get that specific from.
>
> **[6:47](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=407)** This will come from a module that I need to import in order for me to create that specific backup.
>
> **[6:54](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=414)** So now I just need to know which module that is from.
>
> **[7:00](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=420)** So, how do we identify the module that it sits in?
>
> **[7:03](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=423)** Well, we can say get-command, and then we can pass that command that we wish to use.
>
> **[7:10](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=430)** So I can say get-command, backup file.
>
> **[7:13](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=433)** And it'll come back and say "No, that's not correct."
>
> **[7:16](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=436)** And that's okay because often we come up with ideas for commands, and we write them, and we think they're right, and we can't find where they are.
>
> **[7:23](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=443)** But actually we can use get-command to identify if that is an actual command.
>
> **[7:29](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=449)** So backup-file isn't a real one and it won't let you back anything up either.
>
> **[7:34](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=454)** So we need to do that a different way.
>
> **[7:36](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=456)** And so we can use PowerShell to do that one.
>
> **[7:39](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=459)** We can then go through and say, well, if I go through here and say get-command and then maybe say backup, like so, it'll come back and you can see every command available that has the word backup built into it.
>
> **[7:55](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=475)** So backup group policy, backup web configuration, et cetera.
>
> **[7:58](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=478)** But there's nothing around files.
>
> **[8:00](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=480)** So we could change that and say file and do the same search.
>
> **[8:05](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=485)** And then you'll see we get some options available to us that contain the word file as well.
>
> **[8:11](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=491)** So it's always helpful to be able to, if you're not sure where something comes from is to come in and do a get-command and it will tell you the module that those things reside in.
>
> **[8:22](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=502)** So a helpful way of trying to understand why this looks perfectly normal, but why it wouldn't work.
>
> **[8:28](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=508)** Now of course we already looked at installing the web server, et cetera, but what about if we wanted to go through and create a new petition and assign a drive letter or maybe we wanted to, you know, set the static IP address of something, we could do that too.
>
> **[8:43](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=523)** Or maybe we could just change the profile of the firewall itself for the machine.
>
> **[8:48](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=528)** We can simply run any of these commands.
>
> **[8:51](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=531)** We can even run this, we could change the registry by going through and saying, "Go and set this value and enable remote desktop."
>
> **[9:00](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=540)** Or one of the things that I like looking at is obviously going through and looking at the event logs, and this one's quite helpful.
>
> **[9:05](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=545)** So if I say get-WinEvent LogName system, get a hundred events and look for errors.
>
> **[9:10](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=550)** So I'm going to say run selection, it's going to go ahead and run it.
>
> **[9:14](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=554)** Now, what happened?
>
> **[9:16](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=556)** Not a lot, really.
>
> **[9:18](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=558)** It didn't give anything.
>
> **[9:19](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=559)** So if I say get-WinEvent and just run that one, WinEvent will go ahead and run those.
>
> **[9:26](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=566)** So what that means is there was either nothing that was flagged as an error, or it didn't understand what I wanted to do.
>
> **[9:32](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=572)** So we can select just a section of it and choose run.
>
> **[9:35](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=575)** And sure enough, it does work, so we don't have any errors.
>
> **[9:39](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=579)** But it's a great way of being able to look at the event log without having to log into the machine remotely over remote desktop open event viewer and then start trawling through them.
>
> **[9:48](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=588)** We can simply go all the way through and build this.
>
> **[9:52](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=592)** Now of course what we can do is, if we can't find the information that we're doing, we can always pipe things out and then I can say out file, and then of course I've got a file path that I can utilize.
>
> **[10:04](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=604)** And maybe what I want to do here is go in and say I want to create a file as the output to store these values.
>
> **[10:15](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=615)** So, if I go to my folder structure here, go back to my course, and then we'll go into delegation.
>
> **[10:23](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=623)** This folder here, I'm going to copy that, and I'm going to say system dot log, like so.
>
> **[10:32](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=632)** I can then go into here and say Run selection.
>
> **[10:35](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=635)** And of course it tells me it can't find a certain piece of it, and that's okay.
>
> **[10:41](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=641)** It can't find some section to do with my path, which is there, which will probably be because the file itself didn't get created.
>
> **[10:52](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=652)** But let's think about this.
>
> **[10:53](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=653)** Is it really an issue?
>
> **[10:56](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=656)** Where is it trying to store that information?
>
> **[10:59](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=659)** So think it through.
>
> **[11:00](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=660)** You may have already figured it out, but that directory structure doesn't exist on the server.
>
> **[11:07](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=667)** So when the output is being created, it can't find a course folder, it can't find remote and delegated administration folder, because it doesn't exist on the server itself.
>
> **[11:20](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=680)** So this is one of the things that we need to be careful of is that just because we can output values, and store them in files and move them around doesn't necessarily mean that it's going to get that information, and somehow magically save it back to your machine when you are in context of a session.
>
> **[11:40](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=700)** So let's change this a little bit.
>
> **[11:42](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=702)** Let's come out of the current session.
>
> **[11:44](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=704)** And what we can then do is we can then go through and remember we can do invoke-command session dollar session.
>
> **[11:57](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=717)** And then we've got our script block that we wish to execute which would be all of this syntax here.
>
> **[12:04](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=724)** So let's scroll across to the end.
>
> **[12:06](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=726)** And then we'll wrap the script block up.
>
> **[12:09](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=729)** So you can see that we could write this, something like this, and run the selection.
>
> **[12:13](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=733)** It's still going to complain just because I'm using the same out file to go where here.
>
> **[12:18](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=738)** Whereas what it's doing is it's still retrieving all the information, it's doing it over the remote, and then I need to do something with the values that come back.
>
> **[12:29](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=749)** In actual fact, what we would do is if I get this over here, like so, make it so the script block is just that, I'm going to then say results equals that.
>
> **[12:44](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=764)** If we just do this, run selection, and then type the word results, you'll see I get all of my results come back.
>
> **[12:52](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=772)** They are now available to me locally, which means I can then do this.
>
> **[12:57](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=777)** So let me get rid of that.
>
> **[12:58](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=778)** I can then say I want to take the results, and then drop them out.
>
> **[13:02](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=782)** Run selection, system log.
>
> **[13:04](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=784)** If I go into here you'll see the system log is now listed with all the values.
>
> **[13:09](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=789)** So, there are always ways around it.
>
> **[13:12](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=792)** Sometimes we just either can or can't retrieve the values directly from the other machine and stream them back the other way.
>
> **[13:18](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=798)** There are ways of doing that, but often the easiest approach is to load the information from the remote command into a variable, and then you can then process.
>
> **[13:29](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=809)** And that was something that we talked about really early on about manipulation of data and using loop statements and things like that.
>
> **[13:35](https://www.linkedin.com/learning/powershell-automating-it-administration/performing-remote-administration-tasks?u=76281980&t=815)** This all kind of comes together at this point when you're trying to remotely retrieve information from other machines.

> [!info]- Semantic Content
>
> **Code Keywords:** module (18), let (10), this. (4), this, (4), from. (2)
> **CLI Commands:** find (8), make (1)
> **Prerequisites:** install (9)
> **Tools:** powershell (6), visual studio (2)
> **Analogies:** for example (3)
> **Cross-References:** go back to (1), we talked about (1)
> **Env Vars:** pss (1)
> **UI Navigation:** go to (1)


### 3. Creating and Scheduling Tasks and Jobs

#### Understanding PowerShell background jobs
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=0)** - [Instructor] What are background jobs?
>
> **[0:02](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=2)** Background jobs are tasks that are performed in the background of an application or system without the user needing to actively monitor or manage them.
>
> **[0:13](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=13)** They're typically used for tasks that are too time-consuming or resource-intensive to be performed in real time such as large data processing jobs, file uploads, or even sending emails.
>
> **[0:26](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=26)** The purpose of the background job is to allow the user to continue working on other tasks while the job is running in the background.
>
> **[0:35](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=35)** PowerShell background jobs offer several benefits that can significantly improve workflow and efficiency.
>
> **[0:42](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=42)** Firstly, they can improve system performance and increase productivity by allowing users to delegate long-running or resource-intensive tasks to the background, freeing up time for other work.
>
> **[0:54](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=54)** Secondly, background jobs offer enhanced error handling and logging capabilities, ensuring the reliability of the job and simplifying troubleshooting in case of any issues.
>
> **[1:06](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=66)** Thirdly, they simplify management and automation of tasks, allowing users to automate tasks that are often manual and repetitive.
>
> **[1:14](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=74)** Finally, PowerShell background jobs can perform tasks remotely, eliminating the need for direct access to a remote computer and making remote task execution much more straightforward.
>
> **[1:28](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=88)** There are several types of background jobs that can be used depending on the nature of the task.
>
> **[1:33](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=93)** The first would be an asynchronous job, which allows multiple jobs to run simultaneously without blocking the main PowerShell session.
>
> **[1:42](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=102)** Second is a scheduled job.
>
> **[1:43](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=103)** These jobs are scheduled to run at specific times or intervals, such as backups or, often, system updates.
>
> **[1:50](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=110)** Persistent jobs are those jobs that persist across PowerShell sessions and can be resumed or queried at any time.
>
> **[1:59](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=119)** And then we have one-time jobs.
>
> **[2:01](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=121)** These jobs are created and executed once and then automatically deleted after completion.
>
> **[2:08](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=128)** We also have remote jobs, jobs that can be started on a remote computer or a server for remote task execution.
>
> **[2:16](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=136)** We then have thread jobs, jobs that use multi-threading capabilities of PowerShell to improve performance and execution speed.
>
> **[2:25](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=145)** Then we have event-based jobs that are triggered by specific events or conditions such as file system changes or performance thresholds.
>
> **[2:34](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=154)** And then we have workflow jobs that execute a series of steps in a specific order, allowing for complex and multi-step task automation.
>
> **[2:44](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=164)** Now, when creating and managing background jobs, security is an important consideration.
>
> **[2:49](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=169)** Background jobs can be a potential vulnerability in the system if they're not properly secured.
>
> **[2:54](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=174)** This can include ensuring that only authorized users have access to run or manage jobs and implementing security measures to prevent any type of injection attacks, as well as encrypting sensitive data that's being used or processed in the background.
>
> **[3:09](https://www.linkedin.com/learning/powershell-automating-it-administration/understanding-powershell-background-jobs?u=76281980&t=189)** Some considerations might be access control, limit access to PowerShell background jobs by only granting permission to authorize users, secure credential storage, storing the credentials that you might be using securely such as PowerShell Secure String or Credential Manager, encrypting sensitive data that's being passed between machines or stored in files during the job, digitally signing the PowerShell code to prevent the malicious code execution during the job, and then of course, always running in least privilege, run the jobs with the lowest level of privilege possible to limit the potential impact of a security breach.

> [!info]- Semantic Content
>
> **Tools:** powershell (8)
> **Analogies:** such as (4)
> **Code Keywords:** continue (1), finally, (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### Creating and managing background jobs
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=0)** - [Instructor] Now some standard functionality that you will likely want to use when trying to automate tasks is this idea of creating jobs.
>
> **[0:09](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=9)** Jobs obviously as we discussed, run in the background and don't interfere with the user interface.
>
> **[0:15](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=15)** So it allows us to kind of move forward.
>
> **[0:17](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=17)** So let's have a look at how this works.
>
> **[0:19](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=19)** Now I've changed my structure around a little bit here.
>
> **[0:23](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=23)** So what we can see is I've got my PowerShell window on the left and I've got my visual studio code on the right hand side.
>
> **[0:30](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=30)** It's just easier to kind of split it this way for longer pieces of code.
>
> **[0:34](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=34)** So I'm going to take this first one here and I'm just going to go and paste over here.
>
> **[0:39](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=39)** And what this will do if I say job is it's going to give me the job and you can see that the job is actually currently running and the job itself is just performing that get process.
>
> **[0:51](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=51)** Now if I say Get-Job, then it will return.
>
> **[0:55](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=55)** If I just make this wider, it will return that job.
>
> **[1:00](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=60)** Most importantly, it returns the status of the job obviously where it's connected and then obviously some process or whatever the command was that was executed.
>
> **[1:10](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=70)** Now an interesting field here is called HasMoreData.
>
> **[1:13](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=73)** HasMoreData means that there's something in that job that maybe we need to have a look at.
>
> **[1:19](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=79)** But we'll look at that in a second.
>
> **[1:20](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=80)** So let me go back to my visual studio code and what we'll do is we'll look at a different command where right now we executed that job and it went off on its own.
>
> **[1:30](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=90)** It didn't impact anything we could have carried on typing.
>
> **[1:33](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=93)** But what about if we do want to lock the interface?
>
> **[1:36](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=96)** So let me select these two lines.
>
> **[1:38](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=98)** I'm going to go ahead and create a new job.
>
> **[1:40](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=100)** Then I'm going to use something called wait job.
>
> **[1:42](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=102)** So if I paste this here and then click wait.
>
> **[1:45](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=105)** Now what it's going to do is you'll see I have no way of doing anything in the user interface.
>
> **[1:50](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=110)** It's now going to wait for that job to complete and then when it's done it'll return back to me a status of that job.
>
> **[1:59](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=119)** Now the downside to that, there you go, finished, is if it was a longer job you could be sitting here for a while.
>
> **[2:04](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=124)** So it's not the ideal thing to use if you're trying to utilize jobs to obviously lock the interface up.
>
> **[2:11](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=131)** Now what we can do is we can also do this idea of starting a job and then removing a job right away.
>
> **[2:17](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=137)** So maybe it's just a singular event, we don't need to do anything.
>
> **[2:20](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=140)** We can just say go ahead and run the job and then get rid of it.
>
> **[2:24](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=144)** So same thing again, we're going to say job like so and then I can do the remove job.
>
> **[2:32](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=152)** Now of course, do you see what happens when it runs right away?
>
> **[2:35](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=155)** It actually fails because the job is clearly running.
>
> **[2:38](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=158)** So if I click Get-Job you'll see sure enough it's actually running.
>
> **[2:42](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=162)** So of course I can't delete the job that's there, it's still going.
>
> **[2:47](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=167)** So how do we fix this?
>
> **[2:48](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=168)** Well this is where we can start to combine things together.
>
> **[2:51](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=171)** So let's go back to our wait, we'll get the remove option and then what we'll do is we'll pipe this out and we'll put the pipe here and then say Remove-Job to that same syntax.
>
> **[3:04](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=184)** So what we're doing here is creating the job, running the process, waiting for it to finish and then we can remove it.
>
> **[3:11](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=191)** So I'm going to copy that over here.
>
> **[3:13](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=193)** Let me just say get job and see if those are finished.
>
> **[3:15](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=195)** Sure enough it has.
>
> **[3:16](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=196)** So let's do this and then it's going to wait.
>
> **[3:19](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=199)** Now of course we know this works 'cause we just run this a moment ago.
>
> **[3:23](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=203)** It's going to wait for the job to complete and then because it has a pipe in the middle it's going to take the output of the wait job which will be the return results and then remove that job.
>
> **[3:33](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=213)** Now we shouldn't have any other job in here other than one, three and five.
>
> **[3:38](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=218)** So if I say job one, three and five because it automatically removed that job.
>
> **[3:43](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=223)** So that's very helpful sometimes when we need to run jobs and we just want to kind of get it done and then come back and see what's there.
>
> **[3:50](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=230)** Now you'll notice that I've been going through the process of using Get-Job that will list me the jobs that are there.
>
> **[3:57](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=237)** Then of course what I can do here is I can start to use other properties to kind of find a job.
>
> **[4:03](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=243)** So if I say Get-Job ID 1 I can retrieve just the details of the first one or if I do two it's going to come back and say, "Oh hold on a minute, there's a job that was there."
>
> **[4:13](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=253)** And if I say six it's going to go back and, "Hey wait a minute, one, three and five don't seem to match."
>
> **[4:19](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=259)** That's one, two and six.
>
> **[4:21](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=261)** So if I keep going backwards and forward you'll see what it does is it keeps like a history in the background of jobs that have been executed and there are jobs that you don't see here that have already been ran.
>
> **[4:31](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=271)** So that can be a little bit confusing but it's a way of it storing it in memory.
>
> **[4:35](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=275)** Now we can persist that also if required.
>
> **[4:39](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=279)** So let's go back to here and let's have a look at clearing out the list of jobs.
>
> **[4:42](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=282)** So I'm going to say get job over here.
>
> **[4:45](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=285)** I'm going to say dash Remove-Job.
>
> **[4:47](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=287)** And then when I say Get-Job now they should have no jobs.
>
> **[4:52](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=292)** Okay, so I've cleared those.
>
> **[4:53](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=293)** Now just be aware, a job that gets created is only available for the duration of the session that you have open.
>
> **[5:00](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=300)** Now I'm going to take this script block over here and we'll paste it in so we can see what it does.
>
> **[5:06](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=306)** And the script block itself is going to go and get the network adapter from whatever machine we decide to write it with and then Select-Object, the name, the interface description, the status and the MacAddress.
>
> **[5:17](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=317)** And then I want it to return this information in that script block.
>
> **[5:22](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=322)** So if I say ScriptBlock enter, that's what it's going to return for me but the network information will be populated.
>
> **[5:31](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=331)** So let's go back here.
>
> **[5:32](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=332)** I'm now going to start a job, a brand new job, and this time I'm going to say start job with a ScriptBlock of that ScriptBlock.
>
> **[5:43](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=343)** So I'm going to press enter.
>
> **[5:44](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=344)** So the job begins.
>
> **[5:47](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=347)** If I do job you can see it's now being completed.
>
> **[5:49](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=349)** Now how do I get to see the information that's there?
>
> **[5:55](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=355)** Well that's part of a different command that is called Receive-Job
>
> **[6:06](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=366)** and we'll touch a bit more on this later.
>
> **[6:08](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=368)** But when I do Receive-Job from the job ID I get the information back that I was expected.
>
> **[6:14](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=374)** So I get name, interface description, I get status, I get MacAddress.
>
> **[6:19](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=379)** And then this run space ID is the job space that it actually ran in.
>
> **[6:22](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=382)** But we'll talk more about that a little bit later.
>
> **[6:25](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=385)** Now when we're creating these types of jobs we can use all kinds of different things inside this job.
>
> **[6:32](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=392)** So let's say I wanted to create a function.
>
> **[6:35](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=395)** Okay, so I've got a function here.
>
> **[6:37](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=397)** Let me just paste this function into here so we can see it.
>
> **[6:39](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=399)** It's called get double and then it's going to have a parameter.
>
> **[6:45](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=405)** So let's say 10 and then I can press enter and it gives me 20.
>
> **[6:49](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=409)** It basically just doubles the number that's in there.
>
> **[6:52](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=412)** So it's that number times two.
>
> **[6:54](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=414)** So nothing spectacular.
>
> **[6:57](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=417)** What I can now do is say ScriptBlock and do this.
>
> **[7:03](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=423)** Now what does that ScriptBlock look like?
>
> **[7:06](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=426)** Well it looks like it's trying to call some function called Get-Doubleps1.
>
> **[7:11](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=431)** Now bear in mind I don't have a Get-Doubleps1.
>
> **[7:14](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=434)** Then it's calling that function Get-Double and the passing a number of seven.
>
> **[7:19](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=439)** So what does that do?
>
> **[7:21](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=441)** So let me say job, go into here, paste it there and ScriptBlock.
>
> **[7:27](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=447)** And when I go to the job it says it's been completed.
>
> **[7:30](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=450)** It executed the right command but did it actually do what I wanted it to do?
>
> **[7:35](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=455)** So let's go over here, we can say receive.
>
> **[7:38](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=458)** And of course it comes back and says, I don't know what Get-Double is.
>
> **[7:41](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=461)** And that's perfect because I actually haven't created that file.
>
> **[7:44](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=464)** But notice it didn't really give me an error, it didn't give me anything.
>
> **[7:47](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=467)** And I want us to remember that 'cause we'll talk about that a little bit later, about how to capture some of those errors.
>
> **[7:53](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=473)** But really to fix this I would need to create a Get-Doubleps1.
>
> **[7:58](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=478)** So this file here, I would need to create that.
>
> **[8:01](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=481)** So if we go back into our PowerShell here and if I just say Get-Doubleps1 and then if I go back into my previous one and take that function that's right here and then drop that into my Get-Double like so and then I can close my get double.
>
> **[8:24](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=504)** And then if I go back over this side, what I should be able to do at that point is say start the job.
>
> **[8:32](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=512)** Job it'll say it's completed and then I should be able to receive it.
>
> **[8:36](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=516)** And of course the path is still wrong, it's dot dash but you get the gist of what we're trying do.
>
> **[8:41](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=521)** I don't want to go through and fix all of this.
>
> **[8:43](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=523)** For doing something as simple as this you would probably move the ps1 file to a central location.
>
> **[8:48](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=528)** Especially if you're trying to perform an action onto multiple machines.
>
> **[8:54](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=534)** It would be a UNC path that you would want to use where it's going to retrieve that and then executing it as part of a job.
>
> **[9:00](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=540)** But yes, so fairly straightforward to go through.
>
> **[9:03](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=543)** Now obviously what we've looked at is the ability for you to create a job.
>
> **[9:10](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=550)** To see the jobs, to find out what the jobs have executed.
>
> **[9:14](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=554)** So for example, if I want to say get job and if I say ID and if I choose nine I can then do select star and this will give me more details about it than what gets returned in the default.
>
> **[9:28](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=568)** But it's just using standard PowerShell.
>
> **[9:30](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=570)** But the job gets executed and then it will do something either locally or another machine and then there'll be a return of information that comes back.
>
> **[9:41](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=581)** And of course we looked at using the Receive-Job as that option but it's fairly straightforward to create these jobs to do all kinds of different things.
>
> **[9:50](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-and-managing-background-jobs?u=76281980&t=590)** And of course, bear in mind you have to get the pass right in order to be able to go and have that PowerShell function to execute.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (7), interface (6), this. (2), return. (1)
> **Tools:** powershell (4), visual studio (2)
> **Cross-References:** go back to (3), we discussed (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is called (2), means that (1)
> **Env Vars:** unc (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Monitoring and retrieving results of background jobs
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=0)** - [Instructor] So we just touched on creating jobs, managing jobs, removing them, and then we touched on a little bit about this idea of receiving information from a background job.
>
> **[0:10](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=10)** So let's just recap a little bit here.
>
> **[0:12](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=12)** If I take this command and say start the job and then I'm going to say receive job, we'll start to get information about the specific job.
>
> **[0:22](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=22)** You can see it's still running so I could still go back and say receive job information and it's still loading, and then eventually it will finish as it gets all the values back, and sure enough, it's now completed.
>
> **[0:33](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=33)** So if I say get job, there you can see it's all completed and I have no more information to retrieve.
>
> **[0:41](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=41)** Now the interesting thing is once the job completes how do I get information about each job?
>
> **[0:48](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=48)** Well, what about if we did what we expect to do?
>
> **[0:51](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=51)** So I can say get job and then receive job.
>
> **[0:55](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=55)** Notice, nothing returns.
>
> **[0:57](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=57)** I don't get anything because the information that was coming back from the job has now disappeared because you have to think of the logic here.
>
> **[1:05](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=65)** If you've got get process running across 10 servers and it's bringing back a full list of all the processes and memory and allocations from each server, that's a lot of information and so it destroys that information as part of the comeback eventually, so you only have a short space of time where you can retrieve that information.
>
> **[1:24](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=84)** So normally you tie everything together.
>
> **[1:26](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=86)** So you'll say, "Hey, wait for the job to finish and then receive the information that comes back."
>
> **[1:33](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=93)** So let's have a look at how that would work.
>
> **[1:36](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=96)** So if I go back and do a new job, and then I'm going to go to here and say, "Wait job."
>
> **[1:47](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=107)** And then when that job's completed, then receive the information.
>
> **[1:51](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=111)** So it works, it works perfectly fine.
>
> **[1:53](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=113)** If I go back and now try to receive the job, there's no information to come back because at that point it's been terminated.
>
> **[1:59](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=119)** So it does make sense.
>
> **[2:01](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=121)** It just means you have to cater for that when we start building jobs to do things.
>
> **[2:05](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=125)** Now of course, what we can do is we can wait for jobs, we can receive the jobs, and then we can output the information.
>
> **[2:13](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=133)** So you can see that's what we did.
>
> **[2:15](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=135)** We went through and waited for the job.
>
> **[2:17](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=137)** I didn't populate the information into a variable, but we could because then the variable makes it persist because at that point we have another container with that same information in.
>
> **[2:27](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=147)** Now what we can do is we can retrieve information from specific jobs by ID.
>
> **[2:34](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=154)** So if we take this example, we can go into here and say start the job and then receive it by the job ID.
>
> **[2:41](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=161)** And of course eventually this will finish and then I'll get nothing because it's now been completely finished, same as before.
>
> **[2:48](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=168)** So you don't have to use an ID.
>
> **[2:49](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=169)** You don't have to, you can just use the job or you can just say receive job right after you've executed it and in the context of the one that's there, it will know what to do with it.
>
> **[3:00](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=180)** Now of course, we can also go through and retrieve the results of the job and then automatically remove the job after that, which we've looked at previously.
>
> **[3:07](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=187)** We can use remove job or there's a property actually called auto remove job, which we could use.
>
> **[3:13](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=193)** The one I want to look at though is this idea of keep.
>
> **[3:17](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=197)** So the idea is I want to keep the results around.
>
> **[3:20](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=200)** So let me run the process here.
>
> **[3:23](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=203)** I'm going to say job and kick it off and then I'm going to say receive the job, so we'll do wait job, and then we'll say receive it and keep it.
>
> **[3:36](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=216)** So we're going to wait for the job to finish, receive all that information by the job ID, and then that little property says keep.
>
> **[3:43](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=223)** Now, notice what happens.
>
> **[3:45](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=225)** It says the input object cannot be bound to a parameter so something isn't quite right about that job and that's because we're trying to pipeline everything, so when we do that, we then get the information back because of course, if we think about it, we didn't need to have job ID because we're piping the value from here to here.
>
> **[4:04](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=244)** Now, what we can do now, remember we can now retrieve these values whenever we need to because obviously I can go back and get that job ID and it keeps it around for me to access, but not forever.
>
> **[4:19](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=259)** The best approach here is to then go ahead and put that into a variable and to utilize it.
>
> **[4:26](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=266)** Now often what's important is if we say get-job, we just get a list of all the jobs and this is kind of the basic information that we get.
>
> **[4:35](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=275)** But what might be useful is just to shorten that down.
>
> **[4:38](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=278)** I just want the ID name and title and we get a short table.
>
> **[4:41](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=281)** Or what we could do is we can get rid of all of this here from the format table, we can say select star, and then we get all of the detailed information for every single job.
>
> **[4:54](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=294)** The most critical one is obviously this, the PSS begin and the end time so we know how long that job has taken.
>
> **[5:00](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=300)** So let's go back here.
>
> **[5:03](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=303)** Now, how do we handle an error?
>
> **[5:06](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=306)** 'Cause remember, think about this.
>
> **[5:07](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=307)** We run a job, the job is running in the background and I don't really have any interaction with it because it's a job, so how do I handle a specific error?
>
> **[5:17](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=317)** So let's just make this a fraction wider here so we can see.
>
> **[5:21](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=321)** And what I'm going to do is kick off a new job and this time I want it to stop a process, which is quite a standard thing for IT automation task is to have something stop or restart something as part of a flow.
>
> **[5:33](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=333)** So I'm going to have a job, start the job, and in the script block I'm going to say stop process and I'm going to give it a name of non-existent process, so just non-existent.
>
> **[5:44](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=344)** Then importantly, I'm going to put an error action because I'm calling a specific method here or a cmdlet, I do have access to the error action stop.
>
> **[5:54](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=354)** So I'm going to select this one here, go back to my window and paste that in.
>
> **[6:00](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=360)** So that's going to give me my job.
>
> **[6:02](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=362)** Now, my job, if I say job, come back and says failed, so the state is failed.
>
> **[6:11](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=371)** So what does that mean?
>
> **[6:12](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=372)** Well, does it have any information that I can get to?
>
> **[6:16](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=376)** The job's already finished.
>
> **[6:17](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=377)** Can I access job information?
>
> **[6:19](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=379)** So maybe if I take job and child jobs and look for the zero one here, it's just going to give me the same information.
>
> **[6:27](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=387)** If I go back and say, "Is there a message or a reason why it's failed?"
>
> **[6:32](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=392)** Let's paste that into there.
>
> **[6:33](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=393)** And sure enough, it says, "Cannot find a process with the name non-existing process."
>
> **[6:38](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=398)** So it captured it for us, but didn't capture it all in one go and that's because I didn't execute everything in one flow.
>
> **[6:45](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=405)** So if we were to take all of this together, you'll see it's going to start the job, it'll fail, it'll wait for the job to fail, then it will go and retrieve the error message and then print the error message out on the screen.
>
> **[6:57](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=417)** So let's do all of this in one go, paste it in, wait and error message done, all in one simple flow.
>
> **[7:03](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=423)** Now of course, you've got all my comments in there too, which obviously we would take that out if this was an actual job.
>
> **[7:08](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=428)** So it's a way of us capturing errors that may happen when these jobs are, for example, executing somewhere different.
>
> **[7:17](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=437)** Now a different approach, obviously, I've just been running jobs locally on my machine.
>
> **[7:22](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=442)** What about if we wanted to run it by a specific computer name?
>
> **[7:25](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=445)** So I'm going to run it locally again, but I'm going to use the name client.training or I could use the server.
>
> **[7:31](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=451)** So I'll tell you what, let's use server.
>
> **[7:32](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=452)** Let's change that to say server and I want to create a job and a script block of get process.
>
> **[7:40](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=460)** Notice I'm not using star job.
>
> **[7:43](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=463)** I'm using an invoke command, passing in the computer name, and then I've got this little flag right here called as job.
>
> **[7:51](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=471)** As job will tell it to take this command and convert that into a job.
>
> **[7:56](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=476)** Now before we do anything, let's have a look.
>
> **[7:58](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=478)** How many jobs we have?
>
> **[7:59](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=479)** We have quite a few, so let's just remove the jobs.
>
> **[8:06](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=486)** And how many have we got now?
>
> **[8:07](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=487)** None, okay, perfect.
>
> **[8:08](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=488)** So I'm going to come into here and do this and then go back to job and sure enough, you can see we now have a remote job being executed and it's running on that specific machine.
>
> **[8:20](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=500)** So we can kick them after run locally or remotely as needed.
>
> **[8:25](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=505)** So I'm going to leave that going and then what I'm going to do is I'm going to copy this one here which will get me the results that's running so let me just see if my job has completed, which it has.
>
> **[8:34](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=514)** Let me paste in the results.
>
> **[8:36](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=516)** And then dollar, results, I get the information from the server so I can execute these jobs on different machines without having to physically connect to those machines by remote desktop.
>
> **[8:51](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=531)** Same thing as running just remote scripting, but we can drop all of that into a job.
>
> **[8:57](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=537)** Now of course, the issue is when we have lots of machines and we want to execute something is we have lots and lots of jobs running at the same time and we don't know if the local resources on the machine that's executing it will cause a problem or if they'll overlap as far as network traffic goes.
>
> **[9:16](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=556)** So what we can do as an example here is we can define the maximum jobs that need to run.
>
> **[9:23](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=563)** So you'll see I've got this property here called max jobs and then I've got a script block which is going to use get SIM instance, which will go and retrieve information about each machine using the Win32 Operating System one, which will basically get me some base information.
>
> **[9:39](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=579)** I've then got a list of computers, so I've got five of them here that I want to execute this on.
>
> **[9:44](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=584)** And then what I'm going to do is say for each of the computers in this list, I want you to wait while the jobs are running get the job where the state is equal to running, and then make sure the count is greater or equal to the maximum number of jobs.
>
> **[10:00](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=600)** So if I try to issue five and the maximum's two, it should only issue two, and then once it's finished, it should then do the rest.
>
> **[10:08](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=608)** And then it will sleep and wait and keep looping until it reaches that and then when it's successfully done the two, it will then start the jobs of the next ones.
>
> **[10:16](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=616)** And then what I can do is I can then wait for those jobs and then receive the job information.
>
> **[10:22](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=622)** So I'm going to select all of this in one go as kind of a real world example here, so let me just select all of these.
>
> **[10:30](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=630)** So remember what this is going to do, this is going to go ahead and set the maximum jobs to two, use a script block to each of these five machines, wait for the count to be two, and then stop, and then wait for the next two and then stop, and then execute it against the rest and then receive all the information back.
>
> **[10:49](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=649)** So let's see what this will look like when we paste everything in together.
>
> **[10:53](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=653)** So here we go.
>
> **[10:54](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=654)** Notice two, four, five already done, receive the job and there's all the information.
>
> **[11:00](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=660)** So that was really quick because of course it's just connecting back out, but you notice that small window of where it ran the job, ran two jobs, and then suddenly two more jobs, and then the last one.
>
> **[11:11](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=671)** So we can throttle the jobs as we need to from going out and kind of blasting the network or causing issues on the machine.
>
> **[11:19](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=679)** For example, I mean I could have ran it against 1,000 machines, but eventually my PowerShell would probably break if I tried to issue that many commands in one go.
>
> **[11:28](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=688)** So this is a way to control how that works.
>
> **[11:30](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=690)** So if you're performing an automation task, maybe it's a registry setting change, maybe it's a configuration update, maybe it's a patch, an installation of software using PowerShell, if we control it with the number of threads and wait for the responses, then you'll be able to come back and say, "Hey, all these jobs completed successfully."
>
> **[11:49](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=709)** And if you combine it with error handling, then any errors would be captured for the rows that have problems.
>
> **[11:54](https://www.linkedin.com/learning/powershell-automating-it-administration/monitoring-and-retrieving-results-of-background-jobs?u=76281980&t=714)** So it's just a nice clean way of being able to manage all of our scripts that we may run remotely using jobs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), this, (1), this. (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** pss (1), sim (1)
> **Cross-References:** go back to (2)
> **Tools:** powershell (2)
> **Analogies:** for example (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Automating administrative tasks with scheduled jobs
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=0)** - So let's talk about automating the admin tasks using scheduled jobs, and we'll also touch on tasks as well.
>
> **[0:08](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=8)** So I suppose the question is, why should we schedule tasks and jobs, especially when we're looking at automating, IT kind of tasks?
>
> **[0:16](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=16)** Well, first off, it's about automation of routine tasks.
>
> **[0:20](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=20)** So by scheduling tasks and jobs, you as an administrator can automate those repetitive and routine tasks.
>
> **[0:27](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=27)** For example, System Updates, Cleanup Operations, or even things like Data Backups.
>
> **[0:33](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=33)** This not only increases efficiency, but also ensures these tasks are performed consistently, and then reducing the risk of any human error.
>
> **[0:42](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=42)** The second is Resource Optimization.
>
> **[0:44](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=44)** Some tasks can be resource intensive if ran during peak business hours.
>
> **[0:50](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=50)** Scheduling these tasks for off peak hours can optimize resource usage and maintain system performance during the times of high demand.
>
> **[0:58](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=58)** With PowerShell, you can precisely control when these tasks are run, down to the minute and even the second.
>
> **[1:05](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=65)** And then it's about Asynchronous Operations and Multitasking.
>
> **[1:09](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=69)** PowerShell jobs run in the background, allowing for asynchronous operations.
>
> **[1:14](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=74)** This means lengthy tasks won't block the session that you have or interfere with other tasks.
>
> **[1:20](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=80)** In a multitasking environment, this can be greatly useful and enhance productivity by allowing you, as an admin, to schedule multiple jobs simultaneously without having to wait for one to complete before another one starts.
>
> **[1:35](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=95)** Now, the fundamental difference between Powershell's scheduled jobs and scheduled tasks lies in the management system and the context of execution.
>
> **[1:45](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=105)** A Powershell scheduled job is managed within the Powershell environment.
>
> **[1:49](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=109)** It's a background job that runs a command or script in the background within a separate concurrent session of PowerShell.
>
> **[1:57](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=117)** On the other hand, a PowerShell scheduled task is a task scheduled through the Windows Task Scheduler, which is a more comprehensive system-wide service.
>
> **[2:07](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=127)** It can be any executable file, script, or command-line instruction, and is not limited to just running Powershell commands or scripts.
>
> **[2:16](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=136)** The key difference is that scheduled jobs are Powershell specific and managed within Powershell, while scheduled tasks are system-wide, and can involve any executable tasks, not just Powershell.
>
> **[2:30](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=150)** Now, of course, one of the key cmdlets available to us is Register a Scheduled Job.
>
> **[2:36](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=156)** This cmdlet is used to create a new scheduled job and then register it to the local computer.
>
> **[2:42](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=162)** The created job is actually a Windows PowerShell Job, which means it runs within a PowerShell environment.
>
> **[2:49](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=169)** It's convenient for running PowerShell scripts or commands at scheduled times, especially if the script is complex and involves using PowerShell specific features.
>
> **[2:59](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=179)** You can use all the standard PowerShell job commandments to manage the job created from using the Register-ScheduledJob such as, Get-Job, Receive-Job, Stop-Job, et cetera.
>
> **[3:11](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=191)** These tasks are executed in the context of a separate isolated PowerShell session, which means they don't have access to the variables, functions, and modules from the session in which you initially kicked that job off, or the session where the job was created.
>
> **[3:28](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=208)** Now, to go through and Create a Scheduled Job, you first need to define a script block.
>
> **[3:34](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=214)** A script block is the collection of either singular or multiple statements or expressions that you want to use in that job.
>
> **[3:41](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=221)** Then you define the trigger, which is when the job will start.
>
> **[3:45](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=225)** You can set the trigger to start the job at a specific time or after a specific event.
>
> **[3:50](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=230)** And then we execute the Register command to register the Scheduled Job, which will then create and register it within the local computer.
>
> **[3:59](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=239)** Once the job is registered, it's automatically enabled and will run according to that defined trigger.
>
> **[4:06](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=246)** You can see the status of the job with the Get-ScheduledJob, and you can stop it with the Unregister-ScheduledJob And then of course, you can also start it by using the Start-Job command.
>
> **[4:17](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=257)** Remember that the Register-ScheduledJobCommander requires elevated permission, so you have to run Powershell as an administrator when you're using that cmdlet.
>
> **[4:28](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=268)** Now, the second one is, Register-ScheduledTask.
>
> **[4:31](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=271)** This cmdlet is used to register a defined scheduled task that will be available within the Task Scheduler of Windows.
>
> **[4:40](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=280)** The created task is a Window-ScheduledTask and it can run a variety of actions, not just PowerShell scripts such as, launching applications and running scripts in other languages.
>
> **[4:49](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=289)** For example, Python.
>
> **[4:52](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=292)** The task created by the Register-ScheduledTasks are managed through the Task Scheduler, which is a Window Service that's more robust and has more options than just the PowerShell Jobs.
>
> **[5:05](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=305)** The tasks themselves are not even bound to a PowerShell environment.
>
> **[5:09](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=309)** It can be any executable with appropriate arguments.
>
> **[5:14](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=314)** Now, creating a scheduled task in PowerShell using the Register-ScheduledTask cmdlet involves defining a few different pieces.
>
> **[5:22](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=322)** The first is, we define the action.
>
> **[5:25](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=325)** Using the New-ScheduledTaskAction cmdlet, this can create an object that contains the properties of a Task Action, which defines the work that the task is supposed to do.
>
> **[5:36](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=336)** Then we need to set the trigger by using the New-ScheduledTaskTrigger, which creates, and returns a New-ScheduledTaskTrigger object.
>
> **[5:44](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=344)** This is the object that will specify when the task is supposed to start.
>
> **[5:49](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=349)** We then need to define the principle.
>
> **[5:52](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=352)** The New-ScheduledTaskPrincipal cmdlet creates a scheduled task principle object.
>
> **[5:58](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=358)** The principle is the security context that the task is supposed to run under.
>
> **[6:04](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=364)** Then we define any settings using New-ScheduledTaskSettingsSet, which creates an object containing any of the settings that you need to have for that scheduled task.
>
> **[6:13](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=373)** And then lastly, we register the task itself, which will then add that to Windows.
>
> **[6:19](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=379)** Remember that you may need to run PowerShell as an administrator again when using these cmdlets.
>
> **[6:24](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=384)** Also, you might need to adjust the path and other parameters to include any modules, et cetera, or things that you might need.
>
> **[6:32](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=392)** Now of course, both of these options had triggers.
>
> **[6:35](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=395)** Now, of course, triggers for scheduled jobs determine when the job will start.
>
> **[6:41](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=401)** They allow you to automate the running of jobs at specific times or in response to a certain event.
>
> **[6:47](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=407)** So for example, we can use the Daily or the Weekly Trigger.
>
> **[6:51](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=411)** This type of trigger starts the job either once a day at the specific time, or throughout the week at a specific time.
>
> **[6:58](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=418)** We can also create singular ones where the trigger starts a job once at a specific date and time, and that's it.
>
> **[7:06](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=426)** We also have Startup Triggers where, when the computer turns on and it starts up, this job will then execute.
>
> **[7:13](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=433)** The same as the Logon option where, when the user logs in to the computer, then that job will begin.
>
> **[7:19](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=439)** And then we also have an Idle Trigger where, when the computer becomes idle this will then kick off and execute.
>
> **[7:26](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=446)** Each of these triggers can be passed to the Register-ScheduledJob cmdlet to define when the job will start.
>
> **[7:33](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=453)** You can also specify advanced options such as, the delay time before the trigger starts the job, and the duration of time during which the job can start.
>
> **[7:43](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=463)** Now, if we're using scheduled tasks, triggers for those determine when the task will start.
>
> **[7:48](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=468)** They allow you to automate the running of tasks at a specific time again, and in response to certain events.
>
> **[7:55](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=475)** Very similar, we can use Daily and Weekly, which will be, it starts once a day at a specific point and then loops through each week.
>
> **[8:04](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=484)** We also have the One Time Event where we can say a specific task starts once at a specific start and date time.
>
> **[8:12](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=492)** Then we have the Startup Trigger when the computer starts.
>
> **[8:16](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=496)** We have the Logon option when the user logs in.
>
> **[8:18](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=498)** And we also have the Idle when the computer becomes idle.
>
> **[8:22](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=502)** And then, we also have an Event Trigger.
>
> **[8:24](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=504)** This trigger starts a task in response to an event, for example, within the Event Log.
>
> **[8:30](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=510)** Each of these triggers can be passed to the Register-ScheduledTask Commander to define when the task will start.
>
> **[8:36](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=516)** You can also specify advanced options such as, delay time, the repetition interval, and the duration of the time during which the task can actually start.
>
> **[8:47](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=527)** Both of these options will work well using either the job or the task.
>
> **[8:53](https://www.linkedin.com/learning/powershell-automating-it-administration/automating-administrative-tasks-with-scheduled-jobs?u=76281980&t=533)** So let's go and have a look at how these work.

> [!info]- Semantic Content
>
> **Tools:** powershell (23)
> **Analogies:** for example (4), such as (4)
> **Definitions:** is a  (4)
> **Code Keywords:** let (2)
> **CLI Commands:** python (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - so (1)

#### Creating scheduled tasks within Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/creating-scheduled-tasks-within-windows?u=76281980)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=0)** - [Liam] I hope you've enjoyed this course as much as I've enjoyed being able to put it together for you, and then walk you through using PowerShell for automating IT administration tasks.
>
> **[0:09](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=9)** I recommend that your next steps are create a lab environment that includes a client and a server and also include some non-Windows environments, such as Linux or even macOS.
>
> **[0:20](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=20)** Second, review the PowerShell Documentation.
>
> **[0:23](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=23)** There are many, many scripts available and samples available either on the GitHub for PowerShell, or you can go to the PowerShell Gallery, or you can go to the PowerShell Documentation for Microsoft.
>
> **[0:34](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=34)** Practice the commands within the lab environment, so if you want to test remoting from a client to a server and vice versa, do it in the safety of the lab environment.
>
> **[0:43](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=43)** And then you can also practice scheduling tasks and retrieving data, et cetera.
>
> **[0:48](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=48)** And then lastly, take some other PowerShell courses here on LinkedIn Learning.
>
> **[0:52](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=52)** Regardless of where you go from here with PowerShell, I encourage you to dig deeper and deeper into how it can benefit you.
>
> **[0:59](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=59)** With PowerShell, the next logical step is for you to begin writing custom scripts and then automate tasks within a real corporate environment.
>
> **[1:08](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=68)** Most of all, enjoy the process of using PowerShell.
>
> **[1:12](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=72)** It is a core part of what I do each day and has played a big part in my overall IT career, especially when working with organizations.
>
> **[1:21](https://www.linkedin.com/learning/powershell-automating-it-administration/next-steps?u=76281980&t=81)** I wish you the best of luck as you utilize PowerShell to automate your IT administration tasks.

> [!info]- Semantic Content
>
> **Tools:** powershell (10), github (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** macos (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [liam] (1)


## Path Context

### In [[Powershell- Automate IT Tasks and Microsoft 365 Administration]]
← [[Powershell 7 Essential Training]] | **2 of 3** | [[PowerShell for Microsoft 365 Administration]] →

### In [[Networking and Administration Fundamentals]]
← [[Learning PowerShell]] | **9 of 10** | [[Azure Administration Essential Training]] →

## Appears In

- [[Powershell- Automate IT Tasks and Microsoft 365 Administration]]
- [[Networking and Administration Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[Learning PowerShell]] — Powershell
- [[Learning Apache Airflow]] — IT Automation
- [[PowerShell for Microsoft 365 Administration]] — Powershell
- [[Powershell 7 Essential Training]] — Powershell
- [[Exploring AIOps]] — IT Automation

---

[↑ Back to top](#)