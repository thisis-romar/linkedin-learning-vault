---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: jira-administration-automation
url: "https://www.linkedin.com/learning/jira-administration-automation"
duration_minutes: 117
duration: 1h 57m
level: Advanced
updated: 10/30/2024
learners: 31200
skills:
  - Jira
  - Automation
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQF4RCJpNVFiUg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729015553323?e=2147483647&amp;v=beta&amp;t=KCk5B6KpJmrLdmUXeWewhgUirGf7X2x4sOa7T7Q0K-8"
linkedin_topic: DevOps
learning_paths:
  - '[[Mastering Jira Administration]]'
prev_courses:
  - '[[Jira- Managing Custom Workflows]]'
next_courses:
  - '[[Increasing Efficiency with Jira and Confluence Integrations]]'
path_nav: '[{"path":"Mastering Jira Administration","position":6,"total":7,"prev":"Jira- Managing Custom Workflows","next":"Increasing Efficiency with Jira and Confluence Integrations"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/jira
  - skill/automation
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Jira%20Administration-%20Automation.md)

![Jira Administration: Automation](https://media.licdn.com/dms/image/v2/D560DAQF4RCJpNVFiUg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729015553323?e=2147483647&amp;v=beta&amp;t=KCk5B6KpJmrLdmUXeWewhgUirGf7X2x4sOa7T7Q0K-8)

# Jira Administration: Automation

> Automation is the most fun part of Jira administration! It’s easy to build simple and complex rules so you can focus on more important admin tasks instead. In this course, instructor Rachel Wright shows you how to use automation to communicate and update information, effortlessly repeat frequent tasks, sync information between issues, perform routine maintenance, calculate values, and automaticall

> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation) | 1h 57m | Advanced | 31K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Automating common Jira activities](#automating-common-jira-activities)
  - [Who is this course for?](#who-is-this-course-for)
  - [What do you need for this course?](#what-do-you-need-for-this-course)
  - [Important terms and definitions](#important-terms-and-definitions)
- [**1. What Is Automation?**](#1-what-is-automation) (3 videos)
  - [Levels of automation](#levels-of-automation)
  - [Automation benefits](#automation-benefits)
  - [Capabilities in Jira](#capabilities-in-jira)
- [**2. Jira Automation Concepts**](#2-jira-automation-concepts) (10 videos)
  - [Using automation](#using-automation)
  - [Using and creating templates](#using-and-creating-templates)
  - [Creating custom rules](#creating-custom-rules)
  - [Triggering rules](#triggering-rules)
  - [Adding conditions](#adding-conditions)
  - [Using branches](#using-branches)
  - [Leveraging actions](#leveraging-actions)
  - [Testing rules](#testing-rules)
  - [Challenge: Create a common rule](#challenge-create-a-common-rule)
  - [Solution: Create a common rule](#solution-create-a-common-rule)
- [**3. Managing Automation Rules**](#3-managing-automation-rules) (7 videos)
  - [Maintaining rules](#maintaining-rules)
  - [Importing and exporting rules](#importing-and-exporting-rules)
  - [Documenting rules](#documenting-rules)
  - [Monitoring usage](#monitoring-usage)
  - [Troubleshooting errors](#troubleshooting-errors)
  - [Challenge: Back up a rule](#challenge-back-up-a-rule)
  - [Solution: Back up a rule](#solution-back-up-a-rule)
- [**4. Extending Capabilities with Smart Values**](#4-extending-capabilities-with-smart-values) (8 videos)
  - [Using smart values](#using-smart-values)
  - [Accessing project and issue data](#accessing-project-and-issue-data)
  - [Working with user properties](#working-with-user-properties)
  - [Leveraging dates and times](#leveraging-dates-and-times)
  - [Using conditional logic](#using-conditional-logic)
  - [Performing calculations](#performing-calculations)
  - [Challenge: Create a rule with smart values](#challenge-create-a-rule-with-smart-values)
  - [Solution: Create a rule with smart values](#solution-create-a-rule-with-smart-values)
- [**5. Use Cases and Examples**](#5-use-cases-and-examples) (9 videos)
  - [Communicating information](#communicating-information)
  - [Updating information](#updating-information)
  - [Repeating frequent tasks](#repeating-frequent-tasks)
  - [Syncing information](#syncing-information)
  - [Performing maintenance](#performing-maintenance)
  - [Sending alerts](#sending-alerts)
  - [Calculating information](#calculating-information)
  - [Challenge: Create an advanced rule](#challenge-create-an-advanced-rule)
  - [Solution: Create an advanced rule](#solution-create-an-advanced-rule)
- [**6. Automation with Apps**](#6-automation-with-apps) (5 videos)
  - [Post functions with JMWE](#post-functions-with-jmwe)
  - [Scheduled actions with JMWE](#scheduled-actions-with-jmwe)
  - [Event-based actions with JMWE](#event-based-actions-with-jmwe)
  - [Monitoring config changes with Salto](#monitoring-config-changes-with-salto)
  - [Test management with Katalon](#test-management-with-katalon)
- [**Conclusion**](#conclusion) (1 videos)
  - [Additional resources for Jira learning](#additional-resources-for-jira-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Automating common Jira activities](https://www.linkedin.com/learning/jira-administration-automation/automating-common-jira-activities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/automating-common-jira-activities?u=76281980&t=0)** - Automation is the most fun part of [[Jira]] administration. It's easy to build rules, so you and your users can focus on more important tasks instead. With [[Atlassian]]'s no-code engine and low-code apps from the marketplace, you can accomplish work faster, with less human error. In this course, you'll learn how to automate common Jira tasks to reduce manual work and human error, build custom rules that perform conditional actions, extend abilities with placeholders called smart values, leverage built-in automation capabilities, and leverage features provided by third-party apps from the Atlassian Marketplace. Hi, I'm Rachel Wright. Join my [[LinkedIn]] learning course to learn how to save time and effort by automating common activities and reducing clicks in Jira.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Atlassian]] (2), [[LinkedIn]] (1)
> **Tools:** jira (3)
> **Speakers:** - automation (1)

#### [Who is this course for?](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=0)** - [Instructor] This course helps new and experienced [[Jira]] application administrators and project admins build and test custom automation rules. It's also useful for anyone interested in improving team and process efficiency like project managers, leaders, and business analysts. The needs of the organization are best achieved when administrators and business leaders work together. We'll mainly focus on the built-in automation capabilities in Jira Cloud. Here's an example of a Jira cloud automation rule. Now don't worry if your application looks different than mine. You might have different colors, a different layout and customization specific to your company, your application type or deployment type. We'll also discuss adding automation capabilities using apps from the [[Atlassian]] marketplace. If you have Jira server, data center, or automation provided by a third party app, the concepts in this course will still apply to you. But the user interface, specific capabilities, and implementation methods may differ slightly. If you're new to Jira administration, take my basic and advanced administration courses here on [[LinkedIn]] first. This course assumes you already know how to create, configure, and manage Jira projects and settings. This course only focuses on automation concepts and rule building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Atlassian]] (1), [[LinkedIn]] (1)
> **Tools:** jira (6)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [What do you need for this course?](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=0)** - Ideally, you've been using [[Jira]] for a while and have experience managing Jira projects and working with issues. All you need for this course is application level or project level administration access to a Jira application. It's helpful to have a test environment so you can manage changes without impacting production. A test environment is the safest way to experiment and explore features without impacting real data. Your organization might already have a Sandbox environment that you can use. If you have Jira Cloud Premium or Enterprise, Sandbox functionality is already built in. Access it from the [[Microsoft Products|products]] tab at admin.[atlassian.com](https://atlassian.com). If there's no existing test environment, sign up for your own free version of Jira Cloud. When you're done with this course, you can keep the free version for future testing, or use it for personal projects like building a shed or cataloging your rock collection. Additionally, there's a great website to try out automations without impacting your Jira application. It's called the Automation Playground. It's a great way to get new ideas and see examples. Visit the Sandbox website at the URL shown. Next, I wanted to mention that it's really hard to keep up with software changes. New features are added, moved, or changed all the time. Existing features or even entire products are renamed,
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=96)** and links that worked yesterday are broken today. That's why I've set up a special place on my website where you can get the latest course information. When something impactful to the course changes, I'll post that information at the URL shown. Now's a good time to bookmark that location. Go ahead. I'll wait. Oh, and one last thing. For some of you, I speak too slowly and for others, I speak too fast. Luckily, the [[LinkedIn]] video player has some useful features to help you move at your own pace. On the bottom left, use the skip back icon to rewind 10 seconds and hear information again. On the bottom right, use the 1x icon to increase or decrease the speed. Also consider using the captions feature if that's helpful. I also recommend opening your test application in a separate browser window so you can follow along with me. Just pause the video, explore the same area in your application, and come on back. In the next section, we'll define the important terms so you can best utilize the content in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Microsoft Products|Products]] (2), [[Atlassian]] (1), [[LinkedIn]] (1)
> **Tools:** jira (6)
> **Env Vars:** url (2)
> **URLs:** [atlassian.com](https://atlassian.com) (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - ideally (1)

#### [Important terms and definitions](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=0)** - [Instructor] Before we get started, I wanted to refresh your memory of some terms from previous courses and introduce some new terms for this course. An issue is an individual item in [[Jira]]. Each time you create an item, you're creating a new issue with a unique key to identify it. A project is a collection of issues. Now, the [[Microsoft Word|word]] project in Jira is different than an initiative your team is working on outside of Jira. Think of a Jira project as a container for all your team's initiatives, tasks, and to do items. In this course, I'll try to say project when talking about Jira and initiative when talking about work outside of Jira. The cloud project types are called business, software, Jira service Management, and Jira Product Discovery. In server and data center, they're called software, service and business. Jira Cloud [[Microsoft Products|products]] also have plans. Now, this is important because plans have different monthly rule execution limits. We'll talk more about what this means and ways to manage it later in the course. A workflow is a visual representation of a process. It contains a sequence of standard steps called statuses that each issue must go through to be completed. A field in Jira represents a place to elect and store information.
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=95)** The example shows an issue creation screen, which contains multiple fields. The first field named summary is always required. Jira comes with multiple built-in standard fields like summary, description, priority, comments, and others. Additional custom fields specific to your organization can also be created by administrators, users, or third party apps. In the example, I've created two custom number fields that we'll use later in an example automation. Automation is making equipment, a process or a system operate automatically. For example, set the coffee maker to automatically start brewing a new pot of coffee At 9:00 A.M on weekdays. Automations are configured using rules. Rules store the criteria for when and how actions are performed. For example, each time an issue is created, check to see if it's part of an epic. If an epic exists, then edit the assignee field. The first instruction in every rule is a trigger. Trigger specify when a rule is run, like after an issue is created, after an issue is assigned, when a version is deleted and more. Conditions determine the scope of a rule and how much data is impacted.
>
> **[3:08](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=188)** The amount of data could be determined by a JQL statement, with an if or else clause or by a specific value in an issue field and more. Actions determine what is done or performed. Like editing an issue, sending an email message, transitioning an issue, releasing a version, and more. branches apply conditions and actions to related issues or objects. For example, a branch can close all subtasks of the issue that triggered the rule or perform an action on multiple comments in an issue. Smart values are a low tech way to access, substitute and manipulate issue data. Instead of hard coding a Jira issue key in an automation rule, you can use the format, issue.key enclosed in double curly brackets to insert it as a placeholder. [[JSON]] stands for [[JavaScript]] object notation. It's a lightweight, universal way to store and transmit data in web applications. You can use it in automation rules, and it's the format used when automation rules are exported. And don't worry if you're not used to reading data like this. I'll walk you through it in the import and export section of the course. And finally, apps are extensions or modules that provide additional Jira functionality. There are hundreds of free
>
> **[4:40](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=280)** and paid apps in the [[Atlassian]] marketplace to add automation capabilities in Jira and between Jira and other applications. This course contains a lot of Jira specific terminology. I've made a glossary to help you with it for now and for later when navigating the Atlassian ecosystem. Download my handout from the exercise files area in [[LinkedIn]] learning. In the next section, we'll discuss the different types of automation, the benefits of using it and its capabilities in Jira.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (17), [[Atlassian]] (2), [[Microsoft Word|Word]] (1), [[Microsoft Products|Products]] (1), [[JSON]] (1)
> **Tools:** jira (17)
> **Definitions:** is a  (3), is an  (1), stands for (1)
> **Cross-References:** later in (2), in the next (1)
> **Analogies:** for example (3)
> **Env Vars:** jql (1), json (1)
> **Ports:** :00 (1)
> **Exercise Files:** exercise files (1)


### 1. What Is Automation?

[↑ Back to Table of Contents](#table-of-contents)

#### [Levels of automation](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=0)** - In this section, we'll discuss automating work and the different levels of automation based on your organization's Lifecycle. Automation means making a process or a system operate automatically, and you probably use automation every day without thinking about it. My truck tells me when I need an oil change, my smoke detector beeps when its batteries are low, and I receive text messages when packages arrive at my front door. I no longer need to check these things manually. Through the power of technology, I'm automatically notified. These basic examples save time, so I can focus on other tasks. Automation means different things to different people, and all of us are likely at different stages in our [[Jira]] journey. If you were previously using paper [[Forms]] or emails to request things in your organization, then adopting Jira might've been the first step in automating your processes. After using Jira for a while, you likely explored built-in time-saving features, like component auto-assignment, workflow behaviors, like triggers, conditions, validators, and post functions, and custom notification events. Then, you may have wanted to extend Jira past its standard capabilities with apps, integrations or scripting. This course mainly focuses on the third level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Forms]] (1)
> **Tools:** jira (4)
> **Speakers:** - in (1)

#### [Automation benefits](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=0)** - [Presenter] Other industries like manufacturing, finance, and healthcare have all automated standard processes to accomplish things faster and with less human error. We all have an endless list of [[Jira]] issues to work, transition, and update. So it's time for us to benefit from automation capabilities so we can focus more on doing and less on tracking what we're doing. The role of automation in Jira is to improve efficiency by making tracking work faster and easier. Instead of making a phone call when a critical system is down, let Jira create an incident and send an alert to the support technician on call. We can use automation to reduce manual work and eliminate tasks we do over and over. For example, when all child tasks are complete, automatically close the parent task. Or when it's time to do a quarterly audit, automatically create all the tasks and remind the compliance team to start the process. Finally, software can help improve [[Data Quality]] and reduce human error. I'm horrible at math, so I have Jira automatically sum up the travel expenses for accurate travel reimbursement requests. Now, automating everything might seem like a great idea at first, but as your list of rules expands, you'll find that actions are harder to control and maintain,
>
> **[1:34](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=94)** or worse, one rule conflicts with another. This situation is often hard to troubleshoot, may impact the integrity of Jira data, and certainly confuses users in the process. Too many rules creates a bigger mess to manage. Instead, do these three things when deciding what to automate. First, make a list of potential actions to automate, then record the business benefits of each. I try to focus on actions that save time or money, deliver value, or increase productivity. Finally, consider any risks, potential conflicts, or undesired outcomes. If an automation is highly conditional, relies on data outside of Jira, or needs human involvement, it might not be a strong automation candidate. When considering the possibilities, only implement the very best ideas. Start small and you can always expand later. What is something you really dread doing in Jira? When making your to-automate list, think of things that you personally don't like to do or things that your team members frequently forget to do. As I mentioned, I'm bad at calculating numbers or dates. I also don't enjoy endlessly reminding my team members to update or transition their Jira issues, and I doubt they like it either.
>
> **[3:07](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=187)** Luckily, I can use Jira to do things like this for me. Napoleon Bonaparte, a French military leader in the 1800's, famously said, "If you want a thing done well, do it yourself." Well, yes, but that doesn't scale very well. [[John the Ripper|John]] McKiernan from [[Atlassian]] updated the quote at the Team 2021 user [[Confluence]]. John said, "If you want a thing done well, let automation do it."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[John the Ripper|John]] (2), [[Data Quality]] (1), [[Atlassian]] (1), [[Confluence]] (1)
> **Tools:** jira (9), confluence (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [presenter] (1)

#### [Capabilities in Jira](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=0)** - Before we move on, it's good to know that automation capabilities differ based on your application type, deployment type, and plan. In cloud, [[Jira]] has built-in automation. The screenshot shows the built-in feature, additionally, you can use a variety of marketplace apps. Jira Service Management also has built-in automation, plus some legacy capabilities that will one day be decommissioned, at that time, [[Atlassian]] will automatically migrate any rules from the Legacy version to the new version for you. You'll only see Legacy automation features if your cloud site was created before August 30th, 2021. Cloud applications are subject to different rule execution limits depending on the plan. Now, there's no limit to the number of rules you can create, but there are limits on how many times rules are run. If you have the premium plan, the limit is per user and per month, that means if there are 100 users, you'll have 100,000 executions per month pooled across all users. The current limits are shown, but be sure to check the official documentation because the numbers have changed over the years. We'll talk more about monitoring execution limits later in the course. In Data Center, Jira has built-in automation as pictured,
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=96)** you can also use a variety of marketplace apps. Jira Service Management also has built-in automation features and of course you can always add an app too. If you previously upgraded from Server to Data Center, you may still see some references to older automation features. Since you are managing server performance, there's no rule execution limits in Data Center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Atlassian]] (1)
> **Tools:** jira (4)
> **Cross-References:** later in (1)
> **Speakers:** - before (1)


### 2. Jira Automation Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Using automation](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=0)** - Now let's take a high level tour of the built-in automation areas in [[Jira]] Cloud. I'll show you the most important things to know so you can navigate to the right areas and get built in quickly. If you don't use Jira Cloud's built-in features, just pay attention to the concepts for now. I'll show you some automation examples built with marketplace apps later in the course. There are two ways to access automation rules. The first is from an individual Jira project. Log in as the Jira project or application admin and select a project. Then go to the project settings area and click the automation link in the left sidebar. This page shows any rules specific to the project and all other automation settings. The rules tab is selected by default. Filter the rules list by typing a keyword in the search box. You can use a [[Microsoft Word|word]] in a rules name or description. To see global rules that apply to all projects, click the scope button. You can also filter by what the rule does. For example, filter by rules that edit issues. Finally, you can also filter by labels. I use labels to categorize the intent of my rules, and you can use them any way you want. A rule can have one, multiple, or zero labels. To create a new label, click inside the labels column and start typing. To manage labels and label colors,
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=96)** click the edit labels link. In the middle of the page are the rules. I try to name my rules in a way that explains how the rule is used or what it does. Each rule has a unique ID in the Jira database. I always record the unique ID and include it in any rule documentation. You can also use the rules description field to provide helpful use and configuration details. Rules with descriptions are noted with an icon. Click the rule name to read the description or access rule settings. Sometimes I name rules with helpful terms like [[Slack]] reminder. This way I know the rule sends an alert to my team's chat room without needing to open the rule and review its settings. Sometimes I create example rules to use as templates that can be copied. I name those with an X, so they appear at the bottom of the list alphabetically. If a rule wasn't properly executed last time it was run, you'll see an icon alerting you to that condition. You'll want to open any failed rules, troubleshoot the problem using the audit log, and make any needed fixes. To enable or disable rules, click the toggle icon at the right side of the table. I usually leave my example rules disabled so they don't execute. Finally, use the actions menu to copy, delete, or export an individual rule
>
> **[3:12](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=192)** in [[JSON]] format. The other place to access automation rules is from the system admin area. Log in as an application administrator and click the global administration link at the top right. From other areas of Jira, click the gray cog or gear icon and select the system option. Then click the global administration link in the left sidebar. This page shows all rules in the application, including single project, multi-project, project type, and global rules. Just like in the project area, you can search for and filter the rules to find what you're looking for. This area also has additional features like the ability to export all rules or transfer ownership of rules from one user to another. Next, let's examine a sample rule. Click on a rule's name to open it and see its settings. On the left are the rule's instructions. This is a very simple example that sets an assignee when an issue of highest priority is created. We'll talk about specific rule instructions later in this section. For now, let's focus on the rule details on the right side of the screen. Each rule has a name, an optional description, and a required scope, owner, and actor. There are four scope options,
>
> **[4:47](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=287)** which are global, single project, multiple projects, and project type. Project level administrators can only create single project rules. Application level admins can create multi-project rules however. The ability to manage rules is configurable. The default is to allow all project admins to manage them. Application administrators can check the setting from the global automation page in the system admin area. Get to the page using the ellipsis menu at the top right. See the [[Atlassian]] documentation for more information about automation permissions. Application admins are also able to extend rules to all projects of a certain type, like all service management projects, or to all projects in the entire application. Of course, you'll want to test all new rules using a single project first in a test environment or a test project before increasing rule scope. The rule owner is a single Jira user. This represents the user responsible for maintaining rule settings. This user will receive an email when a rule fails if that's selected in the notify on error field below. The rule actor is also a single Jira user. The actor is who the action is attributed to in an issue's history.
>
> **[6:22](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=382)** Here's the activity for an example issue. I created the issue so that action is attributed to me. The automation changed the assignee however, so that second action is attributed to a user named automation for Jira. Any in-app or email notification sent will also show the change was made by the selected actor. Before Jira Automation had the actor feature, it always looked like I personally made changes to issues when it was actually done by an automation rule. I always got questions from users about why I was changing their issues. Now, this was a waste of time for both of us. Now it's clear that a change was made through automation, so I suggest attributing automation actions to a service account for an accurate audit trail. The default actor is the automation for Jira user. This is a built-in user. It doesn't have any properties to manage, doesn't need any special permissions, and you won't find it listed in the user admin area. Anyone with permission to edit a rule can change the rule actor. The next rule detail setting is notify on error. The default is to send an email to the rules owner once after a failure. You can also choose to receive notifications for every failure or disable notifications altogether. Here's an example of a rule failure notification. These messages are easy to flag in your email client
>
> **[7:58](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=478)** because they always have the same format and are sent from an email address in the format automation@ your site's URL. The next rule setting is who can edit this rule? The options are just you, selected administrators, or all administrators. The default setting is all admins. The last rule setting is a checkbox. This allows a rule to be invoked by an event triggered by another rule. It's unchecked by default. Finally, let's look at how rules manifest in individual Jira issues. Click the actions button at the top right to see any automations you can manually execute. Create a new automation scope to the project or view a log of all automation executions in the project. Next, expand the automations panel at the bottom of the right sidebar to see any recent rule runs. You may need to click the refresh button. Hover over the icons to see the status of any rule runs. Orange means there were some errors, gray means the rule ran but no actions were performed, and green means the rule ran successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (12), [[Microsoft Word|Word]] (1), [[Slack]] (1), [[JSON]] (1), [[Atlassian]] (1)
> **Tools:** jira (12), slack (1)
> **UI Navigation:** navigate to (1), go to (1), open the (1), toggle (1), select the (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** json (1), url (1)
> **Cross-References:** later in (2)
> **Analogies:** for example (1), just like (1)

#### [Using and creating templates](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=0)** - [[Jira]] comes with automation templates to get you started. I'll show you how to use them and find others. In a previous section, we explored the features in the rules menu at the top of the Automation area. Now let's click on the Templates menu. Jira comes with some example rules to get you started. Let's choose one simple one to explore. I'll choose the template called Close duplicate issues. Jira automatically adds the minimum settings, which can be customized as desired. The default instructions for this rule are, when an issue is linked as a duplicate of another issue and the issue status is not done, then transition the issue to the done status. The final instruction also sets a resolution of duplicate. To save this rule, including any changes made, click the Turn on rule button at the top right. To go back and explore other templates, click the Return to templates link. Another place to find templates is in [[Atlassian]]'s automation template library. There are hundreds of examples, so you don't have to start from scratch. Atlassian also has an automation playground, and you can use it to try out examples without impacting your own application. Again, let's choose a sample automation to explore. I'll choose the one called "When an issue is created,
>
> **[1:33](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=93)** copy assignee from Epic." The rule instructions are, when an issue is created and is related to an Epic, then copy the assignee from the Epic to the issue. There's currently no way to import the playground examples into your own application. Instead, recreate them using these settings as a guide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Atlassian]] (2)
> **Tools:** jira (3)
> **CLI Commands:** find (2)
> **Exercise Files:** template (2)
> **UI Navigation:** click on (1)
> **Speakers:** - jira (1)

#### [Creating custom rules](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=0)** - In addition to creating rules from templates, examples, or copying existing rules, you can also create your own custom rules. To create a new rule in any [[Jira]] project, use the Create Rule button at the top right of the page. If you create a rule here, it will automatically be scoped to the specific project. For example, the rule shown only apply to issues in the development project. After a rule is created, a Jira administrator can increase the scope to include additional projects if needed. The rule creation procedure is the same in the global automation area. Rules created in this area will automatically be global, meaning they apply to issues in all Jira projects. If needed, change the rule scope by visiting the rules details page. If you navigate away from the details area, you can get back to it by clicking the rule details link at the top right. Before we build a custom rule, we need to discuss rule instructions, which include triggers, conditions, branches, and actions. [[Atlassian]] calls these instructions components. Now, the [[Microsoft Word|word]] component is also used to describe categorization and auto-assignment into Jira projects, and a categorization feature in Atlassian's Compass product. The use of component in this context just means different parts of an automation rule.
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=96)** It's easy to add rule instructions. This rule already has some, but you can add more by clicking the Add Component button at the bottom. For example, I'll add another action and specify its settings on the right. To reorder components, simply drag them up and down in the diagram area on the left. Click any component to edit its settings. You can also copy it or delete it using the icon shown. Don't forget to save any changes using the Update button at the top right. Next, let's build a custom rule so we can try out each component. We'll add a new component in each upcoming course section until our rule is ready to test. Here's an example use case for our custom rule. The rule instructions are: In the [[Human Resources (HR)|human resources]] project, when an issue is completed and the resolution is done, add a comment to any linked issues. We'll start our creation process with a trigger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Atlassian]] (2), [[Microsoft Word|Word]] (1), [[Human Resources (HR)|Human resources]] (1)
> **Tools:** jira (4)
> **Analogies:** for example (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - in (1)

#### [Triggering rules](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=0)** - [Instructor] The first component or instruction in every rule is a trigger. Triggers specify when a rule is run. For example, run a rule when an issue is created, when an issue is assigned manually or on a set schedule. There are many, many triggers to choose from based on what you want [[Jira]] to listen for. A trigger is always required and a rule can only have one. See the documentation for some example trigger use cases. Here's our use case again. Let's translate this sentence into Jira requirements. The scope of the rule is the [[Human Resources (HR)|Human Resources]] project. The trigger is when the issue is completed. In Jira terms, that means we'll need to use the Issue transitioned trigger and set it to apply to issues transitioned to the Done status. First, I'll go to the Human Resources project and create the automation rule from there. Click the Create rule button and add the Issue transitioned trigger. Next, select which status to listen for. I don't care what status the issue starts in, so I'll leave the From status field blank. For the two status, I'll select Done. After the trigger is configured, click the form submission button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Human Resources (HR)|Human resources]] (2)
> **Tools:** jira (3)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Adding conditions](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=0)** - [Instructor] Conditions determine the scope of a rule and how much data is impacted. The amount of data could be determined by a JQL statement, with an if or else clause, by a specific value in an issue field, and more. Here's the list of condition options. A rule can have one, many, or no conditions. See the documentation for some example condition use cases. The condition is the resolution equals Done. In [[Jira]] terms, that means we'll need to use the Issue fields condition and set it to apply to issues with the Done resolution. We've already added the trigger, so now let's add the condition. I'll select the Issue fields condition, and choose the Resolution field in the first menu. Next, choose the equals condition, then choose the Done value. You might be wondering why I need to check for the Done resolution if the issue is already in the Done status. The reason is I don't want to update issues that were resolved as duplicates or cannot reproduce, for example. After the condition is configured, click the form submission button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Env Vars:** jql (1)
> **Documentation:** the documentation (1)
> **Tools:** jira (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using branches](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=0)** - [Instructor] Branches apply conditions and actions to related issues or objects. Most rules follow a linear path, where one instruction is executed after the next. Branching enables rules to extend in multiple directions. For example, use a branch to close all sub-tasks of the issue that triggered the rule, or perform an action on multiple comments in an issue. Here's the list of branch options. Branches are optional. See the documentation for some example branch use cases. To add a comment to any linked issues, we'll use the branch called branch rule/related issues. Since I want to impact related issues, I need to add a branch. In the Type of Related Issues field, I'll select Linked Issues. You can further refine which linked issues to target by using the Link Types field. I'll select Relates To. After the branch is configured, click the Form Submission button.

> [!info]- Semantic Content
>
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging actions](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=0)** - Actions determine what is done or performed, like editing an issue, sending an email message, transitioning an issue, releasing a version, and more. A rule must have at least one action, otherwise, the rule doesn't have anything to do. Here's the list of the action options. See the documentation for some example action use cases. The action is to add a comment. In [[Jira]] terms, that means we'll need to use the Comment on issue action and specify the comment copy. Now let's add the action. I'll select comment on issue and enter the comment copy. I've specified a placeholder called the smart Value to include the issue ID of the trigger issue. We'll talk more about smart values later. After the action is configured, click the form submission button. Finally, I need to turn on the rule and set some basic rule details. Click the Turn on rule button at the top right and enter a name for the rule. Additionally, I can select other rule settings by clicking the Rule details link. Our custom rule is now built and ready to test. Anytime I create a new rule, I immediately disable it. I'll tell you why in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Tools:** jira (1)
> **Speakers:** - actions (1)

#### [Testing rules](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=0)** - When testing, make sure to isolate rule impact as much as possible. Testing with a very small dataset can help avoid undesired outcomes. Now, has this ever happened to you? I thought the rule I just built would only impact three issues, but instead it impacted 3,000. Oops. That's a costly mistake to clean up. In this section, I'll share my strategies for safely testing rules while avoiding unintended consequences. Always test new or updated rules in a sandbox environment first. If you don't have a test environment, at least create a test [[Jira]] project in your production application. Next, limit the scope as much as possible in the beginning. That might mean restricting the rule to a single project or using a condition so only a small set of issues are impacted. Make sure the rule works perfectly for a few issues before testing it with many. Sometimes I use a JQL condition and hard code an issue ID or two so only a small number of issues are impacted. While we're talking about the JQL condition, always make sure to validate any JQL statements. Use the validate query function shown or paste the query into a Jira search to make sure the syntax is correct. Also, make sure that the number of issues returned makes logical sense.
>
> **[1:33](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=93)** If this example returned more than two results, I'd know something is wrong with the JQL. When there are more results than expected, it usually means an order of operations type of problem, like parentheses are in the wrong place. You can also stack multiple conditions to limit the testing risk. Once testing is complete, simply remove any guardrails you created by clicking the trashcan icon pictured. Next, I recommend testing with a manual trigger instead of an automatic one. My favorite automation trigger is actually the manual one. I use it to test new automations, exactly one I want, and usually just on a single issue. Once the rule is ready to use, I simply change the manual trigger to an automated one. In addition to testing or debugging a rule, there are plenty of other use cases for the manual trigger, like when not enough data exists to automatically trigger a rule, when a human needs to make a decision whether a rule should be run, or when information needs to be entered first. Here's an example of collecting data from the user before manually running a rule. When a rule is executed, an overlay appears to collect expense reimbursement information. This is a really useful feature of the manual trigger. Now, let's test the custom rule we built in the previous sections. The first thing I do after creating a new rule
>
> **[3:08](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=188)** is disable it and make a copy. By copying the rule, I can make slight adjustments during the test process while preserving the original settings. Next, in the copy, I delete the automatic trigger and add a manual trigger instead. A manual trigger means the rule will only run when I physically click a button. I always execute a rule manually before attempting an automatic execution. This way, I can better control when the rule is run and avoid unintended consequences. I also restrict who can execute the rule so end users don't see it while I'm testing. Finally, publish the copy and make sure it is enabled. Here's an example issue and the HR project. It had a status of done and a resolution of done. Now let's look at the issue links area. The issue depends on another HR issue and is related to two other issues. I'm expecting the automation to add a comment to the two related issues only. Let's test it and see what happens. Trigger any manual rules from the actions menu at the top of the right sidebar. I'll click the rule copy and wait for the results. Before I check the linked issues, I like to check the automation panel on the right sidebar. Scroll down and expand the automation section to see recent rule runs.
>
> **[4:41](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=281)** You may need to click the refresh icon. Okay, great. The automation at least ran successfully, but we still need to check and see if it did what we expect. I'll open one of the related issues and check the comment section. Perfect. The comment with a dynamic issue ID is present. The comment is shown as added by the automation for Jira user, which is configurable. The last thing we should do in our testing procedure is check the rules audit log, open the rule from an issues automation panel or from the global or project automation admin area. Then click the audit log link at the top right. This page lists any rule runs or configuration changes. Expand any line item for more details. The left side shows exactly what occurred and if there are any problems to address. The right side shows the trigger issue and any issues that were impacted. Since there are no logged problems and the result is as expected, I'll delete the rule copy with the manual trigger and test the original rule with the automatic trigger. Here's a recap of my rule testing tips. In the next section, you'll create and test a custom rule in your sandbox application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3)
> **CLI Commands:** make (9)
> **Env Vars:** jql (4)
> **Tools:** jira (3)
> **UI Navigation:** scroll down (1), open the (1)
> **Best Practices:** make sure to (1), always make sure (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### [Challenge: Create a common rule](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980&t=0)** (bright uptempo music)
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980&t=6)** - [Instructor] Here's your challenge. Create a manual rule that finds all issues in a [[Jira]] project that contain any specific term that you choose. Then automatically assign those issues to yourself. You'll need a manual trigger, an if or else condition, and an assign issue action in that order. Finally, test the rule and make sure it operates as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **CLI Commands:** make (1)
> **Tools:** jira (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright uptempo music) (1)

#### [Solution: Create a common rule](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=5)** - [Instructor] Were you able to build the sample automation rule? Here's how I configured mine. First, I added a manual trigger and restricted the rule to users in the Administrator's Group, then I added an if or else condition. In the Condition Settings, I specified that all provided conditions must match, and I added a JQL statement to find issues with the [[Microsoft Word|word]] intranet in the Summary, Body or Comment section. Finally, I added an Assign issue action, and selected my username. Now we'll test the issue by manually triggering it. The rule updated the Assignee field as expected. Now let's check the Automation Panel and Audit Log. In both places, it shows that the rule executed successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** jql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)


### 3. Managing Automation Rules

[↑ Back to Table of Contents](#table-of-contents)

#### [Maintaining rules](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=0)** - When I only had a few automation rules, they were pretty easy to maintain. But now, I have over 90, which can be a challenge. I'm always looking for a specific rule and sometimes it takes a long time to find it. Here are some tips for effectively managing your rule library. Just like with other [[Jira]] schemes and settings, it's important to have a classification and naming strategy. In my Jira application, I like to use the labels feature to answer the question, what does the rule do? Next, I use the rule's name to describe how a rule achieves a result. Let's use this simple rule as an example. The instructions are, when an issue is created and the priority equals highest, then set the assignee field to a specific user. So what are the important keywords to focus on? I'd say they are priority, highest, set, and assignee. So I might name this rule highest-priority assignment. Now, the order of the words matter. I made a mistake and originally named this rule assign highest priority. That slight change incorrectly explains what the rule does. Do you see the difference? The first name suggests the issue is assigned based on priority, which is accurate. The second name suggests a priority is being assigned, which is incorrect. Next, I'll add the term set as a label.
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=95)** Set implies that the field was previously empty, and that's likely because this rule was run when an issue was created. If this rule is run later, I'd add a label named update instead. It's a small distinction, but accuracy matters when there are many rules. Here's another example. The instructions are, when a comment is added and the initiator is a customer and the status is waiting on customer, then transition the issue to the waiting for support status. So what are the key words to focus on? I'd say they are comment, customer, status, and transition. I might name this rule, change status after customer comment. Since this rule only applies to Jira service management projects, I've added a label named service. I also added a label named SLA. Now, while this issue doesn't directly set or change a service level agreement, the status change does impact how SLA time is calculated. So by using this label, I can search for rules that directly or indirectly impact SLAs. So why didn't I add a label name transition? You can already filter issues by rules using the transition issue action. While I could add it, I try not to duplicate information available elsewhere, and that's a good Jira-wide recommendation as well. Finally, sometimes I append
>
> **[3:10](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=190)** or prepend keywords so I can alphabetically group rules. All the rules intended to alert users are together at the top of the list and the examples are at the bottom. My final recommendation is creating your own search strategy. While the automation area has powerful keyword search, filter, and sort features, there's no way to search within rule components. That's where the export feature and your own documentation come in. We'll discuss those topics next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4)
> **Tools:** jira (4)
> **Env Vars:** sla (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - when (1)

#### [Importing and exporting rules](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=0)** - Next we'll discuss using [[Jira]]'s import and export feature to move, backup, and search within rule settings. The import feature allows you to move rules to other cloud environments, like a sandbox. The export feature allows you to save rule configurations in [[JSON]] format. Exporting is a great way to keep a local backup. Additionally, you can open the JSON file and search the components for keywords or object IDs. Exporting also gives you a headstart on documenting rule components. In February, 2024, [[Atlassian]] reported that automation rules were losing configuration data. As a result, rule runs were failing and Jira admins were left either waiting for a vendor fix or trying to manually restore their configuration settings. Even Atlassian reported that they had to fix some rules manually. Now, outages and mistakes happen, it's a fact of life. But our job as Jira administrators should be to anticipate and plan for problems so they are less impactful to our organizations. I, for one, wouldn't want to be stuck waiting for someone else to restore my data and hope that it's correct. I would much rather have my own backups and documentation to reference. Let's do a quick export and import to see how it works. First, log into Jira as an application administrator. I like to export from the global administration area,
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=96)** which allows you to export a single rule or all rules at once. To export a single rule, click the ellipsis on the table, select export, and save the file to your local computer. To export all rules in a single JSON file, click the ellipsis at the top right of the page. Then select export rules. On the next page, click the next button, and wait for the export process to complete. Then click the done button and save the file to your local computer. Let's explore the contents of a JSON file for a single rule. I open the exported file in a text editor and pasted the contents into [[Confluence]] so I could take advantage of the automatic color coding feature. You don't need to be a programmer to benefit from the information in this file. First, you'll notice that the information is organized in key value pairs. For example, line five shows the rules ID. The ID matches what is embedded in the rules Jira, URL. Line seven shows the rule's name, and line eight shows the rule status. A rule can be in enabled, disabled, or draft status. Draft means there are unpublished changes. By looking at the screenshot, we can see that the rule contains the issue-created trigger. That information is found on line 23 in the JSON file. Comparing the file to a screenshot
>
> **[3:12](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=192)** is a great way to learn how to read the export information, and the format is always predictable. The file always starts with general rule details, then trigger details, then component details. The components start on line 32. Now here's where this gets useful. The rule contains an action to set the issues assignee, so I'll search the JSON file for the keyword assignee. On line 77, the JSON shows the ID of the user assigned. Now, that information would only be available if I went digging through the rules component settings in Jira. It's much faster to find it here. Further, wouldn't it be nice to see if other rules were referencing the same user? There's no way to do that in Jira, but it's easy to search the JSON files for this information. Next, let's import a rule exported from a different Jira application. Log in as an application administrator and go to the global automation page in the system admin area. Click the ellipsis on the top right and select the import rules option. Next, upload a single or multi-rule JSON file. The file limit is five megabytes. Then use the wizard to select the rules to import and any settings. After the import process is complete, review the rule settings and make any additional corrections. For example, you may need to update some JQL,
>
> **[4:46](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=286)** or mappings for values that exist in the source application, but not the destination. After, enable the rule and test the results. For more information about the import and export process, see Atlassian's documentation page shown. Additionally, if your organization is subject to FedRAMP compliance in the United States, there's a specific documentation page about handling incompatible components. While it's possible to make changes directly in a JSON file and then import it, I don't recommend it. That's a good way to break things. I would import the rule first and then make any needed changes in Jira.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (10), [[Jira]] (9), [[Atlassian]] (3), [[Confluence]] (1)
> **Env Vars:** json (10), url (1), jql (1)
> **Tools:** jira (9), confluence (1)
> **UI Navigation:** open the (2), select the (2), go to (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Best Practices:** general rule (1)

#### [Documenting rules](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=0)** - In this section, we'll discuss reasons to document automation rules and ways to do it. I find I learn more by writing my own documentation, but you can also get started quickly using AI. Now, you might think that documenting automation rules is a waste of time. But ask yourself, how much time would it take to rebuild a rule that another admin accidentally deleted? Rebuilding isn't the hard part. Remembering what the rule did and all of its settings is. Here are the reasons I document automation rules. First, it's the best way to make sure I understand what's going on in the background. The documentation provides a useful reference for when I forget all the important details in a few months. Next, if you ever need to rebuild a rule, you'll be glad to know what the specific configuration settings were. Also, the documentation creates a searchable library of rule settings. That's really helpful when I'm looking for a rule, but don't remember what I called it. And finally, documentation serves as a historical and legal record of what was done and why. Your documentation strategy should answer the following questions. What are the important details to know? Which triggers, conditions, branches, and actions are used? And what are each component's individual options and settings? Additionally, I try to provide additional information when it applies.
>
> **[1:32](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=92)** Details like why a rule was built, how or where it's used, and any complexities to be aware of are really helpful to have. Also, make sure any terms you might want to search with in the future are included. Here's a documentation example. At the top are all the rule details, like the rule's ID, a link to the rule settings in [[Jira]], and the Jira issue requesting the functionality. Next, I attach a screenshot of the rule instructions which shows a high-level overview of the steps. I also attach or paste in the rule's [[JSON]] code. Next, I list each component in the order they appear and any related settings. For this example, the rule uses the edit issue action. I've recorded that the action sets the assignee field to my user account and that the value is hard coded. Next, I provide any other details that will be useful reminders in the future or help someone else understand what the rule does. For example, it's good to know that this rule only runs on the create action, and not later, if the priority value is changed during the workflow. I also included the assignee's user ID in Jira Cloud. I might want to search for instances of this ID one day. Sometimes, there are multiple ways to achieve the same thing. Why you selected a certain implementation method would also be good information to include.
>
> **[3:08](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=188)** I've created a version of this documentation that you can use to craft your own. Download my handout from the exercise files area in [[LinkedIn]] Learning. Finally, I wanted to share some exciting capabilities coming our way through [[Artificial Intelligence (AI)|artificial intelligence]]. [[Atlassian]] and app developers are creating exciting new ways to build and document automation rules. Here's a brief example. This is the Salto Configuration Manager for Jira app. It helps you find, deploy, back up, and automate changes to your Jira configuration. By connecting my Jira software and Jira service management applications, I can see a list of all my configuration settings, including automation rules. I'll search for and open the highest priority assignment rule that we've been using as an example. Not only are all the settings displayed here in an easy-to-understand language, there's also an interesting Explain this element feature I wanted to show you. Clicking this creates an AI-generated version describing the rule. Neat! I'm excited to see all the great new AI capabilities from Atlassian and marketplace vendors. Atlassian has introduced the ability to create issues with AI. For example, type a description of what you want to automate in natural language, and Atlassian intelligence will build the rule for you. Read more about the current capabilities at the URL shown.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (7), [[Atlassian]] (4), [[JSON]] (1), [[LinkedIn]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Tools:** jira (7)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** json (1), url (1)
> **Documentation:** the documentation (2)
> **Analogies:** for example (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Monitoring usage](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=0)** - What happens when you hit the rule execution threshold? In this section, I'll show you how to view, monitor, and manage your application's limit. We previously discussed that the different [[Jira]] cloud plans have different automation execution limits. Here are the limits in the different Jira software plans. There's no limit to the number of rules you can create, but there are limits on how many times rules are executed. It's important to know the limits and regularly check your application usage. To view usage reports, log into Jira as an Application Administrator, and go to the Global automation section in the System admin area. Then click the Usage tab at the top of the page. Keep in mind this is a test application, so there's not much activity to show. The first table shows the current month [[Statistics]], including executions used and remaining. Any rule that performs at least one successful action is counted as an execution. Rules that simply log in action, create a variable, or create a lookup table, don't count against the limits. The next area shows usage trends over multiple months. Finally, the bottom of the page shows the most active automations. If certain rules are consuming a lot of executions, you may be able to simplify them so they run less often. When introducing new rules, it's important to monitor their impact both to your issue data
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=96)** and to the application's execution count. I create a Jira issue in my application support project for all my recurring Jira maintenance activities. Then I create a subtask to remind me to periodically check on rule behavior. Anytime I create a new rule, I check on its impact to the usage limit. I check every two weeks because if I hit the limit, rules will stop running until the count resets the next month. If your application is constantly exceeding execution limits, there are some things you can do. First, try decreasing rule scope. In a rules details area, change the project scope from global to a specific set of projects. Next, try decreasing issue scope by adding a JQL condition. Adding conditions early in a rule can decrease its impact dramatically. Next, you can combine multiple rules so they only count as one execution, or upgrade your Jira Cloud plan to a tier with higher execution limits. You can also consider changing the trigger from automatic to manual so rules run less often. Or disable rules that are less valuable or require less work to accomplish manually. Finally, also consider leveraging marketplace apps, which may not have rule execution limits. See [[Atlassian]]'s documentation
>
> **[3:08](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=188)** for additional reduction methods and advice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Statistics]] (1), [[Atlassian]] (1)
> **Tools:** jira (6)
> **Env Vars:** jql (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - what (1)

#### [Troubleshooting errors](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=0)** - There are multiple ways to detect automation rule errors. In this section, we'll discuss where to look and what to do when you encounter them. I previously mentioned that you can see the status of each rule run from an impacted [[Jira]] issue. The example shows that there were some errors the last time the rule was run for this issue. You can also request Jira to send an email when a rule fails. That's a per rule setting that you can select on a rule's detail page. In addition to these detection methods, there's an automation log. There are three ways to view log details. Look for the Audit log tab in the Global automation area or in a specific project's Automation area. You can also go to an individual rule and access its specific log entries. Look for the Audit log link next to Rule Details. Let's take a look at some entries in the Global automation log. Each entry has a timestamp, a unique ID, and a run status. Scroll down to the bottom of the page and expand the What do the different statuses mean section to see the different run statuses and their definitions. To see additional run details, click the Show more link in the Operations column. Let's examine a few examples. For the SUCCESS status, the steps the rule went through are shown on the left.
>
> **[1:34](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=94)** The impacted issue is shown on the right and clickable. For the CONFIG CHANGE status, Jira attempts to show what was changed. Some change records have helpful details, but others just indicate that a change was made. I recommend updating your documentation when rules are edited instead of relying on log information. The NO ACTIONS PERFORMED status indicates that the rule ran successfully, but no issues were changed. In this example, AS-6 did not meet the required criteria. Specifically, the issue created didn't have the specified priority level. In addition to checking usage limits for new rules, I also periodically check the automation audit log to make sure existing rule settings are still valid. This is especially important after making potentially impactful configuration changes like setting removals or name changes. Just because rules are running doesn't guarantee they're behaving as desired.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3)
> **Env Vars:** success (1), config (1), change (1), actions (1), performed (1)
> **Tools:** jira (3)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** make (1)
> **Speakers:** - there (1)

#### [Challenge: Back up a rule](https://www.linkedin.com/learning/jira-administration-automation/challenge-back-up-a-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/challenge-back-up-a-rule?u=76281980&t=0)** (cool upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/challenge-back-up-a-rule?u=76281980&t=6)** - [Speaker] Here's your challenge for this section. Pick an automation rule to back up. Use the export feature and save the [[JSON]] file in a safe place. Then document the rules, details, and components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** json (1)
> **Speakers:** - [speaker] (1)
> **Non-Speech:** (cool upbeat music) (1)

#### [Solution: Back up a rule](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=0)** (gentle music)
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=6)** - [Instructor] Were you able to back up a single rule? Here's how to do it. Go to the global automation or project automation area. In the rule list, click the ellipsis icon on the right and select the Export link. Then download the file and save it to your local computer with your documentation or check it into your code repository. Finally, document the material rule details, components, and their settings. This is the example from the earlier Documenting Rules course section. And of course, it's available as a downloadable handout.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), select the (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle music) (1)


### 4. Extending Capabilities with Smart Values

[↑ Back to Table of Contents](#table-of-contents)

#### [Using smart values](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=0)** - So far, all the example rules have been pretty simple, using predefined components in the rules engine. Now it's time to really have some fun. In this section, we'll explore enhancing rule abilities using smart values. Smart values are a low-tech way to access, substitute, and manipulate issue data. And don't worry, no programming experience is required. Smart values are simply placeholders for variable information. As an example, let's say you need to send your customers license information after they purchase your product. Instead of manually sending multiple individual emails, you can create one message, and use placeholders to insert specific information for each customer. In the example, the highlighted areas are all variables. You can use the same substitution concept in [[Jira]] for customizing comment and notification copy, setting and copying field values, formatting and calculating totals and dates, and more. Jira stores a ton of data, so it's great to be able to use all of that info in a dynamic way. Smart values are enclosed in double curly brackets. In their simplest form, they include a parent element, followed by a period, and a child element. The smart value {{issue.key}} returns a Jira issue ID, like ISSUE-123.
>
> **[1:37](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=97)** Simply add a smart value to a line of copy to dynamically customize the output. Here's a comment on an issue action from an earlier automation example. When an issue is closed, this rule adds a comment to any linked issues. I used the smart value {{triggerissue.key}} to add the related issue ID to the comment. Smart value syntax is based on a template library called Mustache. It's named for the curly brackets that resemble facial hair. For more information on Mustache tags, see the URL shown. But don't worry, you don't need any coding experience to use smart values. You simply just need to use the specified format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3)
> **Tools:** jira (3)
> **Env Vars:** issue (1), url (1)
> **Exercise Files:** template (1)
> **Speakers:** - so (1)

#### [Accessing project and issue data](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=0)** - In this section, I'll share some easy ways to determine smart value capabilities to access [[Jira]] project and issue data. First, try this URL format for an easy way to get issue configuration information like custom field names. You don't need any programming skills to access this information. Just make sure you're logged into Jira and paste the URL displayed in your browser's address bar. For example, if I'm looking for a field or value used in issue service 14, I can simply embed that ID in the [[Representational State Transfer (REST)|REST]] API URL to see all the available data. More information about finding smart values is available in the documentation. Here's the page for cloud, and here's the page for data center. Next, there's a great helper feature right in the rule builder. In the example, click the curly bracket icon in the comment box on the right. In the overlay, use the search box, use the tabs or scroll through the recommendations list for examples and usage tips. Finally, [[Atlassian]] has completed a list of smart values in their documentation. Visit the URL shown for example, values, formats, and examples. I compiled a list of my own of some of my favorite and most used smart values.
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=96)** I'll share those with you next. There's no need to write down the upcoming examples though. Just download my handout so you can cut and paste them in your test application. Here's a tip, copy the syntax in the handout to create your own smart value library. I store frequently used values and functions in [[Confluence]] or in a disabled automation rule, so they're easy to repurpose. All right, onto some Jira project and issue smart value examples. On the left are some project smart values that I use often. On the right is an example of using them in the rule builder and the result as a Jira comment. I use project name and project key when sending Jira data via email or to other applications. Sometimes I use project ID as a quick way to get the project's unique number without having to look it up in the REST API. Here are some issue smart values that I use frequently and how they look in a comment. In the comment screenshot notice that the issue key smart value includes the issue types icon key summary and status. Now, that's a function of using an issue key in a comment. Jira provides that functionality. It doesn't have anything to do with using a value. If you use the issue key smart value elsewhere, only the actual key is returned in text format. Next, notice that the issue priority smart tag
>
> **[3:12](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=192)** contains an additional name element. Without it, Jira returns the priorities ID number instead. As you'll see, some smart values require extra elements or formatting to get them to display the data that you're after. Also good to know, the issue URL is only linked because Jira hyperlinks URLs in comment fields. In other places or applications, it might be shown in text format. Here's how to turn URLs into hyperlinks in other areas. In [[HTML]], embed the issue URL smart value in href tag and use the issue key smart value as the clickable text. In Wiki markup surround the issue key and issue URL in single square brackets. Don't forget to include the pipe symbol in the middle to separate the two values. Simply replace the orange areas with smart values like in the examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (8), [[Representational State Transfer (REST)|Rest]] (2), [[Atlassian]] (1), [[Confluence]] (1), [[HTML]] (1)
> **Env Vars:** url (7), rest (2), api (2), html (1)
> **Tools:** jira (8), confluence (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Best Practices:** don't forget (1)

#### [Working with user properties](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=0)** - In this section, we'll cover user specific smart values and some example uses. First, it's important to know how user data is stored. In Cloud, usernames are a long stream of letters and numbers. They're set by [[Atlassian]] and there's no way to change them. This value is used across Cloud sites and [[Microsoft Products|products]]. To find a username in Cloud, visit a user's profile and look for their unique ID in the browser's address bar. You'll find it just after the [[Microsoft Word|word]] users. Once you have the ID, you can use it in rules or to access other user profile details. Just plug it into the example URL as shown. In server and data center, usernames are created by [[Jira]] administrators. They're generally in the format first.last, flast, or sometimes they're an email address. In server and data center, usernames are easy to find. They're listed on the [[User Management]] admin page. Here's the URL format to retrieve user profile information in server and data center. Okay, onto the examples. Here are some frequently used smart values for users. As you know, assignee returns a user's long username in Jira Cloud. If you want the format to be first and last name, use assignee.displayName instead. In addition to assignee, some other important participants
>
> **[1:38](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=98)** are reporter, creator, and initiator. It's good to know that a reporter and a creator are different concepts. A creator is a value stored in the Jira database that records who actually created the issue. It's not shown in the front end, and it's not changeable, making it a useful value for auditing purposes. A reporter is the user currently listed in an issues reporter field. If enabled in a project's permission scheme, users can change the reporter to a different user. This ability is useful for many reasons, like when a user leaves the organization or when filing a request on behalf of another person. You can also access an initiator with smart values. An initiator is the user who triggered the rule. In the example, I'm retrieving the user's locale. I could also retrieve their time zone or any other information available for user smart values. Then I can use this information in conditions. For example, if the locale is US, do X. If the locale is UK, do Y. Finally, to mention a user in a comment, description, or other supported field, embed the user's ID in square brackets as shown. Jira will translate that information into the format @username, which will tag the user and send them an email notification. Here's a tip about fields like select lists or watchers,
>
> **[3:12](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=192)** which can return multiple values. Smart tags that return information in a list format are formatted differently. The example has a pound sign, which tells Jira to iterate or loop through the field until all the values are returned. The next special character is not required, but I used an asterisk to create a bulleted list. You could also use a dash for a similar effect. Don't worry if this syntax doesn't make a ton of sense, just follow the format and if multiple values are present in the field, they'll be returned in list format. See more information about lists in the smart value documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Atlassian]] (1), [[Microsoft Products|Products]] (1), [[Microsoft Word|Word]] (1), [[User Management]] (1)
> **Tools:** jira (5)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** url (2)
> **Code Identifiers:** displayname (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### [Leveraging dates and times](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=0)** - Now, let's talk about some common date and time related smart values. Here are some useful date smart values to try out in your test application. The now smart value returns the current date and time in UTC format as shown. UTC means Universal Time Coordinated, and it's the global standard for communicating time across various time zones. It's easy to convert this format to a more user-friendly version. For example, I've added the .mediumDate element to the format to result in a three letter month, two digit date, and four digit year. See all the date and time formatting options at the URL shown. The next example returns the first day of the current month. In addition to startOfMonth, you can also use options like endOfMonth or firstBusinessDayOfMonth and more. I generally use this information to calculate goal dates or due dates. For example, set the due date to X days from the creation date. Here are two more date examples. To get a past date, use now with the minusDays element and specify the number of days in parentheses. I formatted the result using the long date value so you can see the difference. The second example shows how to add days to an issues creation date. This example uses jiraDate, which produces the format
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=95)** year-month-day. Now, let's examine some time examples. Just like we formatted dates, there are built-in functions to format time. I used longTime in the example. You can also use custom formatting. In the second example, I used the letter m to return only the minute of the current hour. The pattern syntax to use is detailed in the [[Java]] documentation on Oracle's website. Finally, you can convert dates using the convert to time zone element. In the example, it's 3:03 PM in UTC time. That means it's just after midnight in Tokyo and just after 4:00 PM in London. Get the exact values to use for different time zones from the Olson database at the URL shown. If time zones are confusing like they are to me, I recommend the free website [timeanddate.com](https://timeanddate.com). I use their meeting planner page to enter my customer's time zone locations and bookmark the URL produced. Then I can add and remove locations by simply modifying the parameters in the URL. The highlighted parameter is for the UTC time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1)
> **Env Vars:** utc (4), url (4)
> **Code Identifiers:** mediumdate (1), startofmonth (1), endofmonth (1), firstbusinessdayofmonth (1), minusdays (1)
> **Analogies:** for example (2), just like (1)
> **Ports:** :03 (1), :00 (1)
> **URLs:** [timeanddate.com](https://timeanddate.com) (1)
> **Speakers:** - now (1)

#### [Using conditional logic](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980&t=0)** - In addition to conditions in the rule engine, smart values also support conditional logic. Here's how to use it. In this conditional example, I'm checking to see if a field has a value using not and isEmpty. If the priority field is not empty, [[Jira]] adds a supplied copy to the comment. In this example, I'm using equals to check for a specific value. If the issue status is to do, then add the due date and priority to the comment. Finally, in this example, I'm checking whether the issue has subtasks. If any are present, then their details are added to the comment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Code Identifiers:** isempty (1)
> **Tools:** jira (1)
> **Speakers:** - in (1)

#### [Performing calculations](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=0)** - Finally, let's explore smart value calculations so you can leverage dynamic data. Here are some calculation examples. To use a math expression, use the pound and an equals sign enclosed in double curly brackets, like shown. The first example shows the ROUND function. It takes a number in a custom field and rounds it up to the next whole number. For example, if the value 10.55 is present in a custom number field called Mileage, [[Jira]] rounds it to 11. The next example shows simple multiplication. I'm multiplying the value of a Jira custom number field called Total Expenses by 1.2. If the custom field's value is 100, 100 times 1.2 is 120. In this example, the multiplier is hard coded, but it could also be a value stored in a different issue field. The next example shows currency in U.S. format. The asCurrency function formats the value in the Transportation custom number field, with a dollar sign, commas, and a decimal point with two digits. The second example shows a custom number format. It only adds the dollar sign and commas. These final examples show calculations using worklogs. The first example shows the sum function, which returns the sum of all time logged in seconds. To convert seconds to minutes,
>
> **[1:32](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=92)** simply divide the sum by 60, as shown in the second example. Here's a tip. If you ever want to test a smart value or calculation, there's no need to impact an issue or increase your rule execution count. Instead, use the Log Action capacity in the Actions list. Here's an example. In the screenshot, I've added a manual trigger and hidden the rule from users by restricting it to the administrator's group. Then I added the log action, pasted in a smart value to test and ran the rule on any issue. After the rule runs, go to the Audit log to see if the smart value or calculation executed properly. The result is printed to the log as shown on the left. No changes were made to the Jira issue that triggered the rule. And again, only rules that perform an action are counted towards automation execution limits. Rules that log an action, create a variable, or create a lookup table aren't counted. As a reminder, all these smart value examples are available as a downloadable handout. To see additional examples, see [[Atlassian]]'s documentation at the URL shown.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Atlassian]] (1)
> **Versions:** 1.2 (2), 10.55 (1)
> **Tools:** jira (3)
> **Env Vars:** round (1), url (1)
> **Code Identifiers:** ascurrency (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - finally (1)

#### [Challenge: Create a rule with smart values](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-rule-with-smart-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-rule-with-smart-values?u=76281980&t=0)** - Your challenge for this section is to create a rule that sends an email message that utilizes smart values. Now, these requirements are intentionally loose so you don't mess up your [[Jira]] configuration building a specific use case. For smart values, just use fields you already have in your application, like summary, assignee, due date, and priority to dynamically populate issue data in an email message. In the next section, I'll mess up my Jira application to show you a more complex example and don't skip the solution video because I made some mistakes and I have some troubleshooting insights to share.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2)
> **Tools:** jira (2)
> **Cross-References:** in the next (1)
> **Speakers:** - your (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create a rule with smart values](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=0)** - Were you able to create an automation rule using smart values? Here's a use case I built to solve a purchasing challenge for a customer. Consider this scenario. The customer uses [[Jira]] to collect purchase requests, but not all their vendors have online ordering. Instead, the purchase manager calls or emails the supplier to order items. We were able to automate that step by having Jira send the request email. Here's how. Here's a request to the procurement department for new equipment. When the request is approved, the procurement manager enters the order details, including the email address of the supplier to send the request to. Then the manager transitions the issue to the next status in the workflow. Now, here's an automation rule using the send email action with smart values. This rule uses an If transition trigger to only send an email when the issue reaches a specific status. Next, there's an If condition to make sure the Supplier Email field has a value before trying to send an email. Next, the Send Email action is used to send the order details to the supplier. The message contains smart values to substitute the Send To email address, the vendor's name, and additional order details stored in custom fields.
>
> **[1:34](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=94)** The message also contains some [[HTML]] line breaks for spacing. Finally, an Add Comment action records the information sent, so there's a record and a timestamp. Now let's trigger the rule to see the result. First, I'll transition the issue to the Purchase status. Next, I'll check on the comment and make sure all the details were posted correctly. Now, let's check the email received. I want to make sure all the smart values in the configuration on the left made it into the email result on the right. Finally, also, let's check the Audit log. Hmm, now that's a lot of config change and error records. I definitely had some trouble with some of the placeholders. Here's what I encountered and how to fix it. My first challenge was a user interface issue. The To field for the Send Email action is both a text entry field and a dropdown list. And I find that sometimes when I type a smart value, it doesn't stay in the field. So be sure to type the enter key after entering the smart value. You'll know it's entered correctly if the text has a gray background, like in the screenshot. Next, I was not receiving the email message and the audit log was showing the following error. First, I double checked that the field wasn't empty and that it had a correctly formatted email address. After staring at the field for at least five minutes,
>
> **[3:10](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=190)** I realized the problem was user error. The custom field name is plural. I named the custom field Supplier Email Addresses with the intent of potentially collecting multiple email addresses. The Send Email automation action supports multiple addresses if they're separated by commas. I mistyped the custom field name and that was the cause of the problem. I needed to correct the spelling or use the custom field's ID in the format shown. I decided to use the ID, which is less error prone and won't break if the custom field name changes in the future. Next, I noticed that the smart value for the Approx. Cost wasn't coming through in the comment or in the email, so of course, I started by checking for typos. Next, I checked the custom fields admin page, and bingo, I found the problem. There are two custom fields called Cost. Yuck. Whose Jira application is this, anyway? Since there are two fields with the same name, Jira doesn't know which to use, the fix is to use the customfield ID instead of the name. Finally, I wanted the Approx. Cost field to be shown as currency, but I couldn't get the asCurrency function to work. Unfortunately, the cost field in this Jira project was a text field instead of a number field. Yuck again. Since I couldn't use the asCurrency function
>
> **[4:45](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=285)** and all the amounts are expressed in US dollars, the easiest workaround was to hard code a dollar sign before the smart value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[HTML]] (1)
> **Tools:** jira (5)
> **CLI Commands:** make (3), find (1)
> **Code Identifiers:** ascurrency (2)
> **Env Vars:** html (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - were (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Use Cases and Examples

[↑ Back to Table of Contents](#table-of-contents)

#### [Communicating information](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=0)** - In this section, I'll show some example rules in different use case categories. Use these samples to get ideas to build your own use case library. As usual, I have a downloadable handout so you can experiment with smart values without having to type them. Here are some ideas for communicating information. You can send or post additional notifications. Create separate issues as reminders. Automatically link to related information inside or outside [[Jira]], and more. Just be careful not to duplicate existing functionality. Jira already has standard and custom notifications, notification schemes, and you could use a filter subscription to send issue lists as digests. Don't use up rule executions for things Jira already does. All right, here's an example of communicating information. This example notifies customer service when there's an outage, so they can be ready to address trouble reports. The rule runs when an issue is created. Then a JQL condition checks for a specific request type and does a fuzzy search for certain keywords in the issue's summary, description, or comment fields. Then a comment is added to the issue. The first line of the comment contains a user account ID. Now that ID is for a service account. That account has a distribution email address, which includes members of the customer service team.
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=95)** The syntax shown inserts an at mention for that user into the comment. The second line includes a smart value that gets the names of any components selected in the issue. The third line includes a hyperlink and the ID of the specific issue. Now let's review the result. Here's a system problem where the summary contains the [[Microsoft Word|word]] outage. The issue has multiple components selected. The comment area shows a notification posted by the Automation for Jira user. The customer service team service account is tagged, the components are included, and a link to the issue is included for users who receive the information notification via email.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Microsoft Word|Word]] (1)
> **Tools:** jira (4)
> **Env Vars:** jql (1)
> **Warnings:** be careful (1)
> **Speakers:** - in (1)

#### [Updating information](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=0)** - [Instructor] Here are some ideas for updating information. You can conditionally update issues based on certain criteria, automatically transition issues, sum or increment a number field each time an event occurs, and more. Here's an example of one of those ideas. This example tracks how many times a bug fails testing. In the bug's workflow, there's a pass and a fail transition. If the bug fails, it goes back to the TO DO status for the development team to take another look at. Let's examine the trigger first. The rule runs when an issue is transitioned from the In Testing status back to the TO DO status. Then, a condition makes sure the automation only applies to bug issues. Finally, there's an Edit issues action with a little bit of [[JSON]] code. The code updates a specific custom field by incrementing its value. Now let's review the result. Here's a bug issue in the In Testing status. On the Fix details tab is a custom number field called Failure count. If I select the fail workflow transition, the issue moves back to the TO DO status, and the failure count increases by one. Now I have some bug failure stats and I can use them to improve the development team and testing process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** json (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Repeating frequent tasks](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=0)** - [Instructor] Here are some ideas for managing repetitive tasks. You can automatically create issues for quarterly audits or monthly maintenance, create reminder issues for other teams, create related issues so important process steps aren't missed, and more. Here's an example of one of these ideas. This example shows a monthly reminder to create an invoice. The rule runs on a schedule, which is set to the first day of each month at 9:00 A.M. Then the Create issue action creates an issue with the summary, description, and due date automatically set. The summary contains smart values for a dynamic date. The due date contains a function to get the last business day of the month. Now let's review the result. Here's an example recurring issue. The summary contains the current year and month, and the due date is set to the last business day of the month. Now the finance team has a reminder to create a monthly invoice.

> [!info]- Semantic Content
>
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)

#### [Syncing information](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=0)** - [Instructor] Sometimes, you need to keep information up to date in multiple places. Now, this is a challenge, because ideally, you only want one single source of truth. Storing the same data in multiple places could be a maintenance nightmare, unless you have automation to keep it all in sync, of course. Automation can update related issues, pass information between issues, or sync data with other tools and more. Here's an example of one of those ideas. This example looks for a [[Jira]] issue ID in a comment and automatically links that issue to the other issue. The rule runs when a new comment is added, then a smart values condition is used to look for an issue ID in the comment's copy. The regular expression looks for a project key followed by a dash, followed by any digit, then a link issues action sets the type of link. Another smart value is used to pass Jira the issue ID. Now let's review the result. Here's an issue with a comment. The comment contains a Jira issue ID. The rule noticed the ID and added it as a related issue in the Linked issues area.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3)
> **Tools:** jira (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Performing maintenance](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=0)** - [Instructor] Here are some ideas for maintaining lists of [[Jira]] issues. Ideally, each Jira project has a lead that helps spot and address these issues, but automation can help lessen the burden. Automation can remove old data, close old issues, manage dupes, and more. Here's an example of one of these ideas. This example closes issues awaiting customer action for more than a specified number of hours. The rule runs daily using the schedule trigger. In addition to run settings, the trigger includes a JQL statement. The rule only applies to issues in the waiting for customer status that haven't been updated in the last 72 hours. Then, a transition issue action moves the issue to the resolved status and sets the issue's resolution to done. Finally, a comment on issue action provides a message to the customer. The reporter.displayName smart tag is used to customize the message's greeting. The comment's visibility is set to share with customer, so the customer can see it in the Jira Service Management portal. Now let's review the result. Here's the support request in the JSM customer portal. The issue was previously in the waiting for customer status and 72 hours had passed without customer comment. The issue is now in the resolved status, and the automation added a comment for the customer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3)
> **Tools:** jira (3)
> **Env Vars:** jql (1), jsm (1)
> **Code Identifiers:** displayname (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Sending alerts](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=0)** - [Instructor] Here are some ideas for sending alerts, for meeting deadlines, managing missing issue data, and catching undesired behavior, like user's about to miss a completion deadline. Again, make sure you're providing additional value and not duplicating built-in [[Jira]] notification capabilities. Here's an example of one of these ideas. This example sends an email to the assignee when a support request from a VIP is about to breach an SLA deadline. We don't want to make the CEO wait a long time for support. The rule runs 30 minutes before the time to first response service level agreement deadline. Then, an issue fields condition limits the rule to only service requests. Next, an additional JQL condition limits the rule to users in the Executives global group. Finally, the send email action sends a reminder message to the assignee. A few smart values are used to customize the message copy and provide a link to the request. Now let's review the result. Here's a service request issue that was in danger of breaching its time to first response SLA goal. The CEO would not have been happy. Here's the resulting email message with all the smart values noted. Luckily, I received this alert, and was able to update the issue and assist them before the deadline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Env Vars:** sla (2), ceo (2), vip (1), jql (1)
> **CLI Commands:** make (2)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)

#### [Calculating information](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=0)** - [Instructor] Here are some ideas for calculating information. You can calculate goals or risks based on values in other fields, estimate deadlines based on dates, sum or count occurrences to measure performance, and more. Here's an example of one of those ideas. Here's a rule that's run periodically when needed. It only runs when manually triggered by a user. Then a JQL condition checks for issues, where the total risk field is empty but other related fields have a value. Then an Edit issue action sums the risk fields and updates the total risk field. Now let's review the result. In this issue, risk values are entered, but the total is empty. I'll trigger the manual automation to calculate the total. If you need some additional inspiration, here's my list of 65 ways you can use automation to make your [[Jira]] life easier. You can accomplish all of the ideas with built-in automation, workflow extensions, and scheduling apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** jql (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create an advanced rule](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980&t=0)** - [Instructor] In earlier challenges, you created a basic rule and experimented with smart values. Let's put it all together and create a more advanced rule. Here's your challenge. Create an automation rule that finds issues which have changed priority from low to high. Then send an email notification to any users watching the issue. In the email notification, include smart values for the issue's key, summary, and URL. Also, include a list of watchers the message was sent to. Build your rule, run it in a test environment, and compare it to my implementation in the next section.

> [!info]- Semantic Content
>
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create an advanced rule](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=0)** - Were you able to build the rule? Here's how I did it. First, I used the field value changed trigger to listen for changes to the priority field. For the change type, I selected, Any changes to the field value. Then I limited the trigger scope to the edit action. Next, I added a JQL condition to find issues that once had a priority of low, but currently have a priority of high. And of course, I validated the query for syntax and the expected number of results. Finally, I added a send mail action. The two line includes the smart value for watch your email addresses. This time I remembered to hit the Enter key after typing the smart value, so the information was saved in the text field. Next, I use smart values in the email subject line and content fields. The content field supports [[HTML]], so I added a hyperlink and some basic formatting. Finally, I added a function to display the names of the watchers as a list. Here's the issue I tested the rule with. On the right sidebar there's one watcher, the current priority is high, and the automation panel shows multiple runs. I tested the rule multiple times by changing the priority from high to low and back again. Here's the resulting email message with all the smart values noted. Can you think of a use case I should have tested?
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=96)** My example only has one watcher, but it would be a good idea to test with multiple to make sure they appear in list format at the bottom of the message. Can you think of any ways to improve the rule? How about limiting the JQL query to exclude statuses like done where the priority value is unlikely to change. Or checking that the watcher's field has a value before trying to send an email message. Next, the message copy doesn't tell the user why the notification matters or what action they should take, so that can definitely be improved. I might also try to exclude the reporter and assignee if they're in the watcher's list because they're likely getting many issue change messages already. I'm sure you can think of some other potential improvements too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** jql (2), html (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - were (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Automation with Apps

[↑ Back to Table of Contents](#table-of-contents)

#### [Post functions with JMWE](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=0)** - In addition to built-in capabilities, you can also add automation functionality through third-party apps in the [[Atlassian]] Marketplace. Apps allow all sorts of additional features through workflow behaviors, scheduled or event-based actions, triggered alerts and more. You can even use apps to automate [[Jira]] configuration changes and the testing process. Next, let's explore some automation capabilities provided by third-party apps. For the first example, we'll automatically sync some information at a specific step in a workflow. We'll trigger the automation using a transition post function. The default post functions for every transition are shown. Post functions are additional rules or actions that occur after a workflow transition. They only execute if the transition succeeds. For this example, I'll use one of my favorite Jira apps called Jira Miscellaneous Workflow Extensions or JMWE for short. It's one of the first apps I used back in 2011, and its usefulness is still unmatched today. It's available for cloud and data center. Jira comes with some built-in post functions, but just look at all the additional highlighted ones that JMWE adds. Here's a common use case I've experienced. There's a large story for the development team. It's broken down into subtasks, so it's easier to manage
>
> **[1:33](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=93)** and work can be assigned to multiple developers, but sometimes the developers forget to check the parent story for important comments. One solution is to copy the important information from the parent issue down to the child issues. This is easy to do with JMWE's copy comments to related issues post function. Here's a simple workflow used by the story and subtask issue types in a development Jira project. The backlog status has a transition called Move To To Do, which simply changes an issue status. The second transition called Move To To Do and copy comments also changes the issue status, but has an additional post function that copies the comments and the parent issue to any child issues. The post function has many different abilities and settings to consider. I can choose where to copy the comments, which comments to copy, and even use custom code to copy certain comments, but not others. I can also select how to handle images and attachments, who can see the comments, and select other useful settings. Now let's see the rule in action. It's a post function, meaning its trigger is a specific workflow transition. I'll transition this issue using the Move To To Do and copy comments option. This issue has one comment. After the transition, that comment is automatically copied down to the issue subtasks. The additional information is communicated to the developers
>
> **[3:08](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=188)** without any manual cut and paste action from the product manager. This is a simple example, but as you can see, there's so much that just this one post function can do, and you can also build your own scripted conditions, validators, and post functions. The possibilities for workflow automation are endless.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Atlassian]] (1)
> **Tools:** jira (5)
> **Env Vars:** jmwe (3)
> **Definitions:** is a  (2)
> **Speakers:** - in (1)

#### [Scheduled actions with JMWE](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=0)** - [Speaker] Next, let's look at scheduled actions in JMWE. A schedule action is one or more post-functions run on issues in a JQL query on a recurring schedule. Here's this example's use case. At one company, external users call-in to report problems. The customer service team files bugs in [[Jira]] on their behalf, but because the callers aren't Jira users, they can't access the issue to view their status or receive email updates. Luckily, the JMWE app can send email notifications to any email address. Here's a rule I created to send an email update to an external user once a day. As you can see, the user interface is similar to the Jira Cloud Rule Builder. First, select the run frequency. This rule is scheduled to run once a day at 5:00 PM Eastern. You can trigger rules to run as often as every 10 minutes. Next, select the scope of the issues to include using JQL. Since Jira data is leaving the organization and going to external email accounts, I should be really careful here. For now, I've hard-coded specific issue IDs. In the future, I might make the query more dynamic, but still error on the side of caution by requiring a certain piece of data to be present like a specific label. Next, select the rules actor or user to run as. Finally, configure the rules action.
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=95)** There are many built-in options to use. This rule uses the email issues action. Here are the specific settings. First, select the issues to include, then enter the email subject line and content for the text and [[HTML]] messages. You can use placeholders here, which are similar in format to smart values. Then set a recipient email address and select any other desired settings. Here's the result. Updates for the two issues in scope were emailed as expected. I've underlined the placeholders in the example on the right. The content that appears under the custom message is all determined by Jira, not something that I added.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[HTML]] (1)
> **Env Vars:** jmwe (2), jql (2), html (1)
> **Tools:** jira (5)
> **UI Navigation:** select the (4)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Warnings:** caution (1)
> **Prerequisites:** configure (1)

#### [Event-based actions with JMWE](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=0)** - Here's one more JMWE example showing event-based actions. These actions run when something specific happens in a [[Jira]] issue, like an edit or transition. In the "Updating Information" section of this course, I showed you how to create an automation that counts how many times testing failed. This was accomplished by incrementing a custom number field. For this example, I built the exact same use case in JMWE so you can compare it to the implementation in Jira Cloud's automation. The JMWE app is on the left and the cloud rule you've already seen is on the right. The trigger for both rules is an issue transitioned from one status to another. JMWE has a couple extra settings to prevent infinite loops caused by other automated actions. Next, the scope is set on the left by selecting a Jira project and an issue type. On the right, the issue type is set by an issue fields condition. And the project is selected in the rule details area. Both options support scoping with JQL statements and code. Finally, the action is to increment a value in a custom number field. On the left, this was accomplished using a built-in increased field value function, and you can also do it with code. On the right, this was accomplished with a smart value within [[JSON]] code. Both methods achieve the same result of incrementing a custom field
>
> **[1:34](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=94)** when an issue is transitioned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[JSON]] (1)
> **Env Vars:** jmwe (4), jql (1), json (1)
> **Tools:** jira (3)
> **Definitions:** is an  (1)
> **Speakers:** - here (1)

#### [Monitoring config changes with Salto](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=0)** - Now, let's examine a different kind of automation. As a [[Jira]] admin, I want to know when other admins make certain changes to the application's configuration settings. Now, my application already has too many custom fields, and I don't want anymore if I can help it. Jira Cloud's built in automation detects changes in Jira issues, but not changes in the configuration. Luckily, there's an app that can do it. Salto provides automated [[Configuration Management]] for enterprise applications. Their solution automatically extracts the configs of different business applications like Jira, Salesforce, and NetSuite. So you can search the configuration, manage change, and copy changes between test and production applications. One of the features of the Salto configuration manager for Jira app is it sends alerts for Jira configuration changes. This way, you can identify unauthorized or unplanned modifications quickly. Here are a few examples. I'll use Salto to send me an alert via email if a new custom field is created, if a user is added to a security level in an issue security scheme, or if a project role is modified in any way. Salto can also send [[Slack]] messages. Here's the Salto app, which runs on its own website. You simply connect it to your Jira cloud or data center application and [[Fetch]] the configuration settings. Again, we're not talking about managing issue data. We're talking about Jira's global options,
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=95)** schemes and settings. The first alert I've created is to catch new custom field creations. Salto can listen for modifications, additions, deletions, or all three. Simply select or enter the name of the element to watch for. I've selected elements that match a pattern using Salto's query language. Then, select how to be notified and any additional options. In the next example, I'm monitoring for a change to users in issue security schemes. My most sensitive issues are protected with issue security, so I wouldn't want the wrong users added in the wrong place. In the final example, I'm interested in any modification, addition, or deletion of a project role. I've selected elements using Salto simple selection method. As you can see, it's easy to select which changes produce alerts. Here's the alert message as an email. It even includes a handy PDF attachment to save for your records. It shows that a project role named Execs was added. The Jira application already has a global group with the same name, so I should check with my fellow admins to see why this was added and if it's really needed. Also, I should remind them to provide more useful descriptions for Jira objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), [[Configuration Management]] (1), [[Slack]] (1), [[Fetch]] (1)
> **Tools:** jira (10), slack (1)
> **CLI Commands:** make (1)
> **Env Vars:** pdf (1)
> **Cross-References:** in the next (1)
> **Speakers:** - now (1)

#### [Test management with Katalon](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=0)** - Finally, let's demo an automated testing process using Katalon Studio, which integrates with [[Jira]] through a Marketplace app. As a Jira administrator, I need to verify standard application functions anytime we do configuration cleanups, routine maintenance, app installations or removals, upgrades, or conduct quarterly audits. I created 40 test cases to test Jira. After years of perfecting and streamlining the test cases, it still took a few hours to run them and document the results. Now, a few hours might not sound like much, until you add up all the activities that triggered the need for this testing. I estimated that I was spending 80 hours a year just making sure Jira was functioning as expected. That's crazy. So, I started looking for ways to automate repeated maintenance tasks. The tool I like best is Katalon Studio, and I've used it to automate my 40 Jira application test cases. What once took me hours to complete manually runs in under three minutes. Katalon has both free and paid versions. It includes a desktop application, a web component on their website, and an app in the [[Atlassian]] Marketplace to connect test cases to Jira issues. As a very simple sample, I'll show you a test case that simply checks the custom field count so I can make sure no one was sneaky and added new fields overnight. I'll also show you how that test case is connected to a Companion Jira issue.
>
> **[1:34](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=94)** I built a very simple example test case in the Katalon Desktop app. When I run the test case, it automatically launches a browser, enters my login credentials, and navigates to the Custom Fields page in the Issues Admin area. Then, it looks for the field count displayed on the page. If the count is the number expected, the test passes. Katalon closes the browser, logs a custom message to the desktop client, and sends an email report with success or failure details. As you can see in the console, the test passed and took less than a minute to run. Here's the Test Suite Results email notification. I could also forward this data to record it in Jira if desired. Finally, here's a brief look at the Jira integration piece. From the Katalon Studio website, I'll click on Tests to access my test cases. This example test case is linked to its Companion Jira issue. Live [[Statistics]] about test case runs are displayed. From here, I'll open the linked Jira issue. Additional information is displayed in a panel on the right sidebar labeled Katalon Platform. The examples in this section are super simple, and, in no way, do any of these applications any justice. They all do so much more and each could easily have their own course. The point is to encourage you to consider different types of automation options from Jira, the Atlassian Marketplace, or other third party software. In the next section, I'll share some helpful resources,
>
> **[3:10](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=190)** so you can further experiment and continue learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (12), [[Atlassian]] (2), [[Statistics]] (1)
> **Tools:** jira (12)
> **UI Navigation:** click on (1), open the (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - finally (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Additional resources for Jira learning](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=0)** - Congrats on completing the course. I hope you're excited to try automation or enhance some existing rules in your test application. You should now be able to build custom rules to reduce manual work and human error, extend capabilities with smart values and placeholder variables, and leverage built-in capabilities or automation apps from the [[Atlassian]] marketplace. Here are some additional resources so you can continue learning. For cloud, visit this documentation area to learn more and access the list of available smart values. The documentation area for data center is available at [[Confluence]].[atlassian.com/automation](https://atlassian.com/automation). Don't forget to download all the course handouts from the exercise file area in [[LinkedIn]] learning. As a reminder, here's the special area of my website where I'll post corrections, updates, and new information for this course. Next, there's always more to learn and new features are added all the time. You'll find many admin learning resources in the "9 Ways to Learn [[Jira]] Administration" article on my website. To learn more about the strategy of configuring your application, check out my books. The Jira Strategy Admin Workbook saves time, money, and frustration. Now, this book is different. It's not documentation, it's recommendations from years of cleaning up horrible Jira configurations. It's about what you should do, shouldn't do, and why. Get books, worksheets,
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=95)** and additional materials at [jirastrategy.com](https://jirastrategy.com). Also, check out my other Jira and Confluence courses for users and admins right here on LinkedIn. If you like this course, you'll love managing custom workflows. It's a deep dive into building smart workflows that your [[Business Development]] and support teams will actually use. If you have questions, I'd love to hear from you. Use the Q and A feature, email me directly, or connect in social media. I hope you've enjoyed this Jira automation course as much as I've enjoyed creating it. Now it's time to get your course completion certificate. When you share your certificate, tag me so I can celebrate your accomplishment and share it with my network too. Good luck with your Jira journey, and I'll see you online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Atlassian]] (2), [[Confluence]] (2), [[LinkedIn]] (2), [[Business Development]] (1)
> **Tools:** jira (6), confluence (2)
> **URLs:** [atlassian.com](https://atlassian.com) (1), [jirastrategy.com](https://jirastrategy.com) (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise file (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - congrats (1)


## Instructor

- [[Rachel Wright]]

## Resources

- Exercise files available

## Skills Covered

- Jira
- Automation

## Path Context

### In [[Mastering Jira Administration]]
← [[Jira- Managing Custom Workflows]] | **6 of 7** | [[Increasing Efficiency with Jira and Confluence Integrations]] →

## Appears In

- [[Mastering Jira Administration]]

## Related Courses

_Courses sharing skills:_

- [[Learning Playwright]] — Automation
- [[Jira- Managing Custom Workflows]] — Jira
- [[Jira- Advanced Administration]] — Jira
- [[Jira Service Management- Administration]] — Jira
- [[Jira- Basic Administration]] — Jira

---

[↑ Back to top](#)