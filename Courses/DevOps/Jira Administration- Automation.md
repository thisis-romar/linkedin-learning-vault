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
created: 2026-05-02
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

#### Automating common Jira activities
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/automating-common-jira-activities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/automating-common-jira-activities?u=76281980&t=0)** - Automation is the most fun part of Jira administration.
>
> **[0:04](https://www.linkedin.com/learning/jira-administration-automation/automating-common-jira-activities?u=76281980&t=4)** It's easy to build rules, so you and your users can focus on more important tasks instead.
>
> **[0:11](https://www.linkedin.com/learning/jira-administration-automation/automating-common-jira-activities?u=76281980&t=11)** With Atlassian's no-code engine and low-code apps from the marketplace, you can accomplish work faster, with less human error.
>
> **[0:19](https://www.linkedin.com/learning/jira-administration-automation/automating-common-jira-activities?u=76281980&t=19)** In this course, you'll learn how to automate common Jira tasks to reduce manual work and human error, build custom rules that perform conditional actions, extend abilities with placeholders called smart values, leverage built-in automation capabilities, and leverage features provided by third-party apps from the Atlassian Marketplace.
>
> **[0:42](https://www.linkedin.com/learning/jira-administration-automation/automating-common-jira-activities?u=76281980&t=42)** Hi, I'm Rachel Wright.
>
> **[0:44](https://www.linkedin.com/learning/jira-administration-automation/automating-common-jira-activities?u=76281980&t=44)** Join my LinkedIn learning course to learn how to save time and effort by automating common activities and reducing clicks in Jira.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Automation]] (2), [[Atlassian]] (2), [[LinkedIn]] (1)
> **Tools:** jira (3)
> **Speakers:** - automation (1)

#### Who is this course for?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=0)** - [Instructor] This course helps new and experienced Jira application administrators and project admins build and test custom automation rules.
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=9)** It's also useful for anyone interested in improving team and process efficiency like project managers, leaders, and business analysts.
>
> **[0:19](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=19)** The needs of the organization are best achieved when administrators and business leaders work together.
>
> **[0:27](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=27)** We'll mainly focus on the built-in automation capabilities in Jira Cloud.
>
> **[0:33](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=33)** Here's an example of a Jira cloud automation rule.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=37)** Now don't worry if your application looks different than mine.
>
> **[0:40](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=40)** You might have different colors, a different layout and customization specific to your company, your application type or deployment type.
>
> **[0:51](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=51)** We'll also discuss adding automation capabilities using apps from the Atlassian marketplace.
>
> **[0:57](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=57)** If you have Jira server, data center, or automation provided by a third party app, the concepts in this course will still apply to you.
>
> **[1:07](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=67)** But the user interface, specific capabilities, and implementation methods may differ slightly.
>
> **[1:14](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=74)** If you're new to Jira administration, take my basic and advanced administration courses here on LinkedIn first.
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=82)** This course assumes you already know how to create, configure, and manage Jira projects and settings.
>
> **[1:29](https://www.linkedin.com/learning/jira-administration-automation/who-is-this-course-for?u=76281980&t=89)** This course only focuses on automation concepts and rule building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Automation]] (6), application (3), business (2), cloud (2)
> **Tools:** jira (6)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### What do you need for this course?
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=0)** - Ideally, you've been using Jira for a while and have experience managing Jira projects and working with issues.
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=8)** All you need for this course is application level or project level administration access to a Jira application.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=16)** It's helpful to have a test environment so you can manage changes without impacting production.
>
> **[0:22](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=22)** A test environment is the safest way to experiment and explore features without impacting real data.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=30)** Your organization might already have a Sandbox environment that you can use.
>
> **[0:34](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=34)** If you have Jira Cloud Premium or Enterprise, Sandbox functionality is already built in.
>
> **[0:41](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=41)** Access it from the products tab at admin.[atlassian.com](https://atlassian.com).
>
> **[0:47](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=47)** If there's no existing test environment, sign up for your own free version of Jira Cloud.
>
> **[0:53](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=53)** When you're done with this course, you can keep the free version for future testing, or use it for personal projects like building a shed or cataloging your rock collection.
>
> **[1:06](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=66)** Additionally, there's a great website to try out automations without impacting your Jira application.
>
> **[1:12](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=72)** It's called the Automation Playground.
>
> **[1:14](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=74)** It's a great way to get new ideas and see examples.
>
> **[1:19](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=79)** Visit the Sandbox website at the URL shown.
>
> **[1:23](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=83)** Next, I wanted to mention that it's really hard to keep up with software changes.
>
> **[1:27](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=87)** New features are added, moved, or changed all the time.
>
> **[1:32](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=92)** Existing features or even entire products are renamed, and links that worked yesterday are broken today.
>
> **[1:40](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=100)** That's why I've set up a special place on my website where you can get the latest course information.
>
> **[1:46](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=106)** When something impactful to the course changes, I'll post that information at the URL shown.
>
> **[1:52](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=112)** Now's a good time to bookmark that location.
>
> **[1:55](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=115)** Go ahead. I'll wait.
>
> **[1:58](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=118)** Oh, and one last thing.
>
> **[1:59](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=119)** For some of you, I speak too slowly and for others, I speak too fast.
>
> **[2:05](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=125)** Luckily, the LinkedIn video player has some useful features to help you move at your own pace.
>
> **[2:11](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=131)** On the bottom left, use the skip back icon to rewind 10 seconds and hear information again.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=138)** On the bottom right, use the 1x icon to increase or decrease the speed.
>
> **[2:25](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=145)** Also consider using the captions feature if that's helpful.
>
> **[2:30](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=150)** I also recommend opening your test application in a separate browser window so you can follow along with me.
>
> **[2:37](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=157)** Just pause the video, explore the same area in your application, and come on back.
>
> **[2:43](https://www.linkedin.com/learning/jira-administration-automation/what-do-you-need-for-this-course?u=76281980&t=163)** In the next section, we'll define the important terms so you can best utilize the content in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), application (5), cloud (2), [[Microsoft Products|Products]] (2), next (2)
> **Tools:** jira (6)
> **Env Vars:** url (2)
> **URLs:** [atlassian.com](https://atlassian.com) (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - ideally (1)

#### Important terms and definitions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=0)** - [Instructor] Before we get started, I wanted to refresh your memory of some terms from previous courses and introduce some new terms for this course.
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=9)** An issue is an individual item in Jira.
>
> **[0:13](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=13)** Each time you create an item, you're creating a new issue with a unique key to identify it.
>
> **[0:20](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=20)** A project is a collection of issues.
>
> **[0:23](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=23)** Now, the word project in Jira is different than an initiative your team is working on outside of Jira.
>
> **[0:29](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=29)** Think of a Jira project as a container for all your team's initiatives, tasks, and to do items.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=37)** In this course, I'll try to say project when talking about Jira and initiative when talking about work outside of Jira.
>
> **[0:46](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=46)** The cloud project types are called business, software, Jira service Management, and Jira Product Discovery.
>
> **[0:54](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=54)** In server and data center, they're called software, service and business.
>
> **[1:01](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=61)** Jira Cloud products also have plans.
>
> **[1:05](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=65)** Now, this is important because plans have different monthly rule execution limits.
>
> **[1:10](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=70)** We'll talk more about what this means and ways to manage it later in the course.
>
> **[1:16](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=76)** A workflow is a visual representation of a process.
>
> **[1:20](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=80)** It contains a sequence of standard steps called statuses that each issue must go through to be completed.
>
> **[1:30](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=90)** A field in Jira represents a place to elect and store information.
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=95)** The example shows an issue creation screen, which contains multiple fields.
>
> **[1:40](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=100)** The first field named summary is always required.
>
> **[1:46](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=106)** Jira comes with multiple built-in standard fields like summary, description, priority, comments, and others.
>
> **[1:56](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=116)** Additional custom fields specific to your organization can also be created by administrators, users, or third party apps.
>
> **[2:05](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=125)** In the example, I've created two custom number fields that we'll use later in an example automation.
>
> **[2:13](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=133)** Automation is making equipment, a process or a system operate automatically.
>
> **[2:20](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=140)** For example, set the coffee maker to automatically start brewing a new pot of coffee At 9:00 A.M on weekdays.
>
> **[2:29](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=149)** Automations are configured using rules.
>
> **[2:32](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=152)** Rules store the criteria for when and how actions are performed.
>
> **[2:37](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=157)** For example, each time an issue is created, check to see if it's part of an epic.
>
> **[2:43](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=163)** If an epic exists, then edit the assignee field.
>
> **[2:48](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=168)** The first instruction in every rule is a trigger.
>
> **[2:52](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=172)** Trigger specify when a rule is run, like after an issue is created, after an issue is assigned, when a version is deleted and more.
>
> **[3:03](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=183)** Conditions determine the scope of a rule and how much data is impacted.
>
> **[3:08](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=188)** The amount of data could be determined by a JQL statement, with an if or else clause or by a specific value in an issue field and more.
>
> **[3:19](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=199)** Actions determine what is done or performed.
>
> **[3:22](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=202)** Like editing an issue, sending an email message, transitioning an issue, releasing a version, and more.
>
> **[3:31](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=211)** branches apply conditions and actions to related issues or objects.
>
> **[3:37](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=217)** For example, a branch can close all subtasks of the issue that triggered the rule or perform an action on multiple comments in an issue.
>
> **[3:48](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=228)** Smart values are a low tech way to access, substitute and manipulate issue data.
>
> **[3:55](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=235)** Instead of hard coding a Jira issue key in an automation rule, you can use the format, issue.key enclosed in double curly brackets to insert it as a placeholder.
>
> **[4:08](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=248)** JSON stands for JavaScript object notation.
>
> **[4:12](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=252)** It's a lightweight, universal way to store and transmit data in web applications.
>
> **[4:17](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=257)** You can use it in automation rules, and it's the format used when automation rules are exported.
>
> **[4:24](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=264)** And don't worry if you're not used to reading data like this.
>
> **[4:27](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=267)** I'll walk you through it in the import and export section of the course.
>
> **[4:32](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=272)** And finally, apps are extensions or modules that provide additional Jira functionality.
>
> **[4:39](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=279)** There are hundreds of free and paid apps in the Atlassian marketplace to add automation capabilities in Jira and between Jira and other applications.
>
> **[4:50](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=290)** This course contains a lot of Jira specific terminology.
>
> **[4:54](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=294)** I've made a glossary to help you with it for now and for later when navigating the Atlassian ecosystem.
>
> **[5:01](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=301)** Download my handout from the exercise files area in LinkedIn learning.
>
> **[5:06](https://www.linkedin.com/learning/jira-administration-automation/important-terms-and-definitions?u=76281980&t=306)** In the next section, we'll discuss the different types of automation, the benefits of using it and its capabilities in Jira.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (17), [[Automation]] (7), data (6), cloud (2), business (2)
> **Tools:** jira (17)
> **Definitions:** is a  (3), is an  (1), stands for (1)
> **Cross-References:** later in (2), in the next (1)
> **Analogies:** for example (3)
> **Env Vars:** jql (1), json (1)
> **Ports:** :00 (1)
> **Exercise Files:** exercise files (1)


### 1. What Is Automation?

[↑ Back to Table of Contents](#table-of-contents)

#### Levels of automation
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=0)** - In this section, we'll discuss automating work and the different levels of automation based on your organization's Lifecycle.
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=8)** Automation means making a process or a system operate automatically, and you probably use automation every day without thinking about it.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=17)** My truck tells me when I need an oil change, my smoke detector beeps when its batteries are low, and I receive text messages when packages arrive at my front door.
>
> **[0:28](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=28)** I no longer need to check these things manually.
>
> **[0:31](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=31)** Through the power of technology, I'm automatically notified.
>
> **[0:35](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=35)** These basic examples save time, so I can focus on other tasks.
>
> **[0:40](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=40)** Automation means different things to different people, and all of us are likely at different stages in our Jira journey.
>
> **[0:48](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=48)** If you were previously using paper forms or emails to request things in your organization, then adopting Jira might've been the first step in automating your processes.
>
> **[1:00](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=60)** After using Jira for a while, you likely explored built-in time-saving features, like component auto-assignment, workflow behaviors, like triggers, conditions, validators, and post functions, and custom notification events.
>
> **[1:17](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=77)** Then, you may have wanted to extend Jira past its standard capabilities with apps, integrations or scripting.
>
> **[1:25](https://www.linkedin.com/learning/jira-administration-automation/levels-of-automation?u=76281980&t=85)** This course mainly focuses on the third level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (4), [[Jira]] (4), power (1), [[Forms]] (1), [[Scripting]] (1)
> **Tools:** jira (4)
> **Speakers:** - in (1)

#### Automation benefits
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=0)** - [Presenter] Other industries like manufacturing, finance, and healthcare have all automated standard processes to accomplish things faster and with less human error.
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=12)** We all have an endless list of Jira issues to work, transition, and update.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=17)** So it's time for us to benefit from automation capabilities so we can focus more on doing and less on tracking what we're doing.
>
> **[0:27](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=27)** The role of automation in Jira is to improve efficiency by making tracking work faster and easier.
>
> **[0:35](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=35)** Instead of making a phone call when a critical system is down, let Jira create an incident and send an alert to the support technician on call.
>
> **[0:45](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=45)** We can use automation to reduce manual work and eliminate tasks we do over and over.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=52)** For example, when all child tasks are complete, automatically close the parent task.
>
> **[0:59](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=59)** Or when it's time to do a quarterly audit, automatically create all the tasks and remind the compliance team to start the process.
>
> **[1:09](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=69)** Finally, software can help improve data quality and reduce human error.
>
> **[1:14](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=74)** I'm horrible at math, so I have Jira automatically sum up the travel expenses for accurate travel reimbursement requests.
>
> **[1:24](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=84)** Now, automating everything might seem like a great idea at first, but as your list of rules expands, you'll find that actions are harder to control and maintain, or worse, one rule conflicts with another.
>
> **[1:38](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=98)** This situation is often hard to troubleshoot, may impact the integrity of Jira data, and certainly confuses users in the process.
>
> **[1:47](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=107)** Too many rules creates a bigger mess to manage.
>
> **[1:51](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=111)** Instead, do these three things when deciding what to automate.
>
> **[1:56](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=116)** First, make a list of potential actions to automate, then record the business benefits of each.
>
> **[2:04](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=124)** I try to focus on actions that save time or money, deliver value, or increase productivity.
>
> **[2:12](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=132)** Finally, consider any risks, potential conflicts, or undesired outcomes.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=138)** If an automation is highly conditional, relies on data outside of Jira, or needs human involvement, it might not be a strong automation candidate.
>
> **[2:30](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=150)** When considering the possibilities, only implement the very best ideas.
>
> **[2:35](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=155)** Start small and you can always expand later.
>
> **[2:40](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=160)** What is something you really dread doing in Jira?
>
> **[2:44](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=164)** When making your to-automate list, think of things that you personally don't like to do or things that your team members frequently forget to do.
>
> **[2:54](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=174)** As I mentioned, I'm bad at calculating numbers or dates.
>
> **[2:58](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=178)** I also don't enjoy endlessly reminding my team members to update or transition their Jira issues, and I doubt they like it either.
>
> **[3:07](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=187)** Luckily, I can use Jira to do things like this for me.
>
> **[3:11](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=191)** Napoleon Bonaparte, a French military leader in the 1800's, famously said, "If you want a thing done well, do it yourself."
>
> **[3:21](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=201)** Well, yes, but that doesn't scale very well.
>
> **[3:25](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=205)** John McKiernan from Atlassian updated the quote at the Team 2021 user confluence.
>
> **[3:32](https://www.linkedin.com/learning/jira-administration-automation/automation-benefits?u=76281980&t=212)** John said, "If you want a thing done well, let automation do it."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Automation]] (6), data (3), business (1), [[Atlassian]] (1)
> **Tools:** jira (9), confluence (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [presenter] (1)

#### Capabilities in Jira
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=0)** - Before we move on, it's good to know that automation capabilities differ based on your application type, deployment type, and plan.
>
> **[0:10](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=10)** In cloud, Jira has built-in automation.
>
> **[0:14](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=14)** The screenshot shows the built-in feature, additionally, you can use a variety of marketplace apps.
>
> **[0:22](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=22)** Jira Service Management also has built-in automation, plus some legacy capabilities that will one day be decommissioned, at that time, Atlassian will automatically migrate any rules from the Legacy version to the new version for you.
>
> **[0:38](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=38)** You'll only see Legacy automation features if your cloud site was created before August 30th, 2021.
>
> **[0:46](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=46)** Cloud applications are subject to different rule execution limits depending on the plan.
>
> **[0:53](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=53)** Now, there's no limit to the number of rules you can create, but there are limits on how many times rules are run.
>
> **[1:01](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=61)** If you have the premium plan, the limit is per user and per month, that means if there are 100 users, you'll have 100,000 executions per month pooled across all users.
>
> **[1:16](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=76)** The current limits are shown, but be sure to check the official documentation because the numbers have changed over the years.
>
> **[1:24](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=84)** We'll talk more about monitoring execution limits later in the course.
>
> **[1:30](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=90)** In Data Center, Jira has built-in automation as pictured, you can also use a variety of marketplace apps.
>
> **[1:40](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=100)** Jira Service Management also has built-in automation features and of course you can always add an app too.
>
> **[1:48](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=108)** If you previously upgraded from Server to Data Center, you may still see some references to older automation features.
>
> **[1:56](https://www.linkedin.com/learning/jira-administration-automation/capabilities-in-jira?u=76281980&t=116)** Since you are managing server performance, there's no rule execution limits in Data Center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (7), [[Jira]] (4), cloud (3), data (3), management (2)
> **Tools:** jira (4)
> **Cross-References:** later in (1)
> **Speakers:** - before (1)


### 2. Jira Automation Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### Using automation
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=0)** - Now let's take a high level tour of the built-in automation areas in Jira Cloud.
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=6)** I'll show you the most important things to know so you can navigate to the right areas and get built in quickly.
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=12)** If you don't use Jira Cloud's built-in features, just pay attention to the concepts for now.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=17)** I'll show you some automation examples built with marketplace apps later in the course.
>
> **[0:24](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=24)** There are two ways to access automation rules.
>
> **[0:28](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=28)** The first is from an individual Jira project.
>
> **[0:31](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=31)** Log in as the Jira project or application admin and select a project.
>
> **[0:36](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=36)** Then go to the project settings area and click the automation link in the left sidebar.
>
> **[0:42](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=42)** This page shows any rules specific to the project and all other automation settings.
>
> **[0:49](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=49)** The rules tab is selected by default.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=52)** Filter the rules list by typing a keyword in the search box.
>
> **[0:56](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=56)** You can use a word in a rules name or description.
>
> **[1:00](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=60)** To see global rules that apply to all projects, click the scope button.
>
> **[1:06](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=66)** You can also filter by what the rule does.
>
> **[1:09](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=69)** For example, filter by rules that edit issues.
>
> **[1:13](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=73)** Finally, you can also filter by labels.
>
> **[1:16](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=76)** I use labels to categorize the intent of my rules, and you can use them any way you want.
>
> **[1:23](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=83)** A rule can have one, multiple, or zero labels.
>
> **[1:28](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=88)** To create a new label, click inside the labels column and start typing.
>
> **[1:33](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=93)** To manage labels and label colors, click the edit labels link.
>
> **[1:40](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=100)** In the middle of the page are the rules.
>
> **[1:42](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=102)** I try to name my rules in a way that explains how the rule is used or what it does.
>
> **[1:49](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=109)** Each rule has a unique ID in the Jira database.
>
> **[1:52](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=112)** I always record the unique ID and include it in any rule documentation.
>
> **[1:58](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=118)** You can also use the rules description field to provide helpful use and configuration details.
>
> **[2:05](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=125)** Rules with descriptions are noted with an icon.
>
> **[2:09](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=129)** Click the rule name to read the description or access rule settings.
>
> **[2:14](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=134)** Sometimes I name rules with helpful terms like Slack reminder.
>
> **[2:19](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=139)** This way I know the rule sends an alert to my team's chat room without needing to open the rule and review its settings.
>
> **[2:27](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=147)** Sometimes I create example rules to use as templates that can be copied.
>
> **[2:32](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=152)** I name those with an X, so they appear at the bottom of the list alphabetically.
>
> **[2:38](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=158)** If a rule wasn't properly executed last time it was run, you'll see an icon alerting you to that condition.
>
> **[2:45](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=165)** You'll want to open any failed rules, troubleshoot the problem using the audit log, and make any needed fixes.
>
> **[2:54](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=174)** To enable or disable rules, click the toggle icon at the right side of the table.
>
> **[3:00](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=180)** I usually leave my example rules disabled so they don't execute.
>
> **[3:05](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=185)** Finally, use the actions menu to copy, delete, or export an individual rule in JSON format.
>
> **[3:14](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=194)** The other place to access automation rules is from the system admin area.
>
> **[3:20](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=200)** Log in as an application administrator and click the global administration link at the top right.
>
> **[3:27](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=207)** From other areas of Jira, click the gray cog or gear icon and select the system option.
>
> **[3:34](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=214)** Then click the global administration link in the left sidebar.
>
> **[3:39](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=219)** This page shows all rules in the application, including single project, multi-project, project type, and global rules.
>
> **[3:49](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=229)** Just like in the project area, you can search for and filter the rules to find what you're looking for.
>
> **[3:56](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=236)** This area also has additional features like the ability to export all rules or transfer ownership of rules from one user to another.
>
> **[4:06](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=246)** Next, let's examine a sample rule.
>
> **[4:09](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=249)** Click on a rule's name to open it and see its settings.
>
> **[4:14](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=254)** On the left are the rule's instructions.
>
> **[4:17](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=257)** This is a very simple example that sets an assignee when an issue of highest priority is created.
>
> **[4:24](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=264)** We'll talk about specific rule instructions later in this section.
>
> **[4:29](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=269)** For now, let's focus on the rule details on the right side of the screen.
>
> **[4:36](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=276)** Each rule has a name, an optional description, and a required scope, owner, and actor.
>
> **[4:45](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=285)** There are four scope options, which are global, single project, multiple projects, and project type.
>
> **[4:55](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=295)** Project level administrators can only create single project rules.
>
> **[5:00](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=300)** Application level admins can create multi-project rules however.
>
> **[5:05](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=305)** The ability to manage rules is configurable.
>
> **[5:08](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=308)** The default is to allow all project admins to manage them.
>
> **[5:13](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=313)** Application administrators can check the setting from the global automation page in the system admin area.
>
> **[5:21](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=321)** Get to the page using the ellipsis menu at the top right.
>
> **[5:25](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=325)** See the Atlassian documentation for more information about automation permissions.
>
> **[5:32](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=332)** Application admins are also able to extend rules to all projects of a certain type, like all service management projects, or to all projects in the entire application.
>
> **[5:44](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=344)** Of course, you'll want to test all new rules using a single project first in a test environment or a test project before increasing rule scope.
>
> **[5:56](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=356)** The rule owner is a single Jira user.
>
> **[5:59](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=359)** This represents the user responsible for maintaining rule settings.
>
> **[6:04](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=364)** This user will receive an email when a rule fails if that's selected in the notify on error field below.
>
> **[6:13](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=373)** The rule actor is also a single Jira user.
>
> **[6:17](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=377)** The actor is who the action is attributed to in an issue's history.
>
> **[6:22](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=382)** Here's the activity for an example issue.
>
> **[6:25](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=385)** I created the issue so that action is attributed to me.
>
> **[6:29](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=389)** The automation changed the assignee however, so that second action is attributed to a user named automation for Jira.
>
> **[6:38](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=398)** Any in-app or email notification sent will also show the change was made by the selected actor.
>
> **[6:47](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=407)** Before Jira Automation had the actor feature, it always looked like I personally made changes to issues when it was actually done by an automation rule.
>
> **[6:56](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=416)** I always got questions from users about why I was changing their issues.
>
> **[7:00](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=420)** Now, this was a waste of time for both of us.
>
> **[7:03](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=423)** Now it's clear that a change was made through automation, so I suggest attributing automation actions to a service account for an accurate audit trail.
>
> **[7:13](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=433)** The default actor is the automation for Jira user.
>
> **[7:17](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=437)** This is a built-in user.
>
> **[7:19](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=439)** It doesn't have any properties to manage, doesn't need any special permissions, and you won't find it listed in the user admin area.
>
> **[7:28](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=448)** Anyone with permission to edit a rule can change the rule actor.
>
> **[7:33](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=453)** The next rule detail setting is notify on error.
>
> **[7:37](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=457)** The default is to send an email to the rules owner once after a failure.
>
> **[7:42](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=462)** You can also choose to receive notifications for every failure or disable notifications altogether.
>
> **[7:50](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=470)** Here's an example of a rule failure notification.
>
> **[7:55](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=475)** These messages are easy to flag in your email client because they always have the same format and are sent from an email address in the format automation@ your site's URL.
>
> **[8:08](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=488)** The next rule setting is who can edit this rule?
>
> **[8:12](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=492)** The options are just you, selected administrators, or all administrators.
>
> **[8:18](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=498)** The default setting is all admins.
>
> **[8:22](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=502)** The last rule setting is a checkbox.
>
> **[8:25](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=505)** This allows a rule to be invoked by an event triggered by another rule.
>
> **[8:30](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=510)** It's unchecked by default.
>
> **[8:33](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=513)** Finally, let's look at how rules manifest in individual Jira issues.
>
> **[8:39](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=519)** Click the actions button at the top right to see any automations you can manually execute.
>
> **[8:46](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=526)** Create a new automation scope to the project or view a log of all automation executions in the project.
>
> **[8:54](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=534)** Next, expand the automations panel at the bottom of the right sidebar to see any recent rule runs.
>
> **[9:02](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=542)** You may need to click the refresh button.
>
> **[9:06](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=546)** Hover over the icons to see the status of any rule runs.
>
> **[9:11](https://www.linkedin.com/learning/jira-administration-automation/using-automation?u=76281980&t=551)** Orange means there were some errors, gray means the rule ran but no actions were performed, and green means the rule ran successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (18), [[Jira]] (12), application (7), next (4), cloud (2)
> **Tools:** jira (12), slack (1)
> **UI Navigation:** navigate to (1), go to (1), open the (1), toggle (1), select the (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** json (1), url (1)
> **Cross-References:** later in (2)
> **Analogies:** for example (1), just like (1)

#### Using and creating templates
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=0)** - Jira comes with automation templates to get you started.
>
> **[0:03](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=3)** I'll show you how to use them and find others.
>
> **[0:07](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=7)** In a previous section, we explored the features in the rules menu at the top of the Automation area.
>
> **[0:14](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=14)** Now let's click on the Templates menu.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=17)** Jira comes with some example rules to get you started.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=21)** Let's choose one simple one to explore.
>
> **[0:24](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=24)** I'll choose the template called Close duplicate issues.
>
> **[0:28](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=28)** Jira automatically adds the minimum settings, which can be customized as desired.
>
> **[0:34](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=34)** The default instructions for this rule are, when an issue is linked as a duplicate of another issue and the issue status is not done, then transition the issue to the done status.
>
> **[0:49](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=49)** The final instruction also sets a resolution of duplicate.
>
> **[0:54](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=54)** To save this rule, including any changes made, click the Turn on rule button at the top right.
>
> **[1:01](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=61)** To go back and explore other templates, click the Return to templates link.
>
> **[1:06](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=66)** Another place to find templates is in Atlassian's automation template library.
>
> **[1:12](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=72)** There are hundreds of examples, so you don't have to start from scratch.
>
> **[1:16](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=76)** Atlassian also has an automation playground, and you can use it to try out examples without impacting your own application.
>
> **[1:25](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=85)** Again, let's choose a sample automation to explore.
>
> **[1:29](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=89)** I'll choose the one called "When an issue is created, copy assignee from Epic."
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=95)** The rule instructions are, when an issue is created and is related to an Epic, then copy the assignee from the Epic to the issue.
>
> **[1:45](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=105)** There's currently no way to import the playground examples into your own application.
>
> **[1:51](https://www.linkedin.com/learning/jira-administration-automation/using-and-creating-templates?u=76281980&t=111)** Instead, recreate them using these settings as a guide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (5), [[Jira]] (3), [[Atlassian]] (2), application (2)
> **Tools:** jira (3)
> **CLI Commands:** find (2)
> **Exercise Files:** template (2)
> **UI Navigation:** click on (1)
> **Speakers:** - jira (1)

#### Creating custom rules
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=0)** - In addition to creating rules from templates, examples, or copying existing rules, you can also create your own custom rules.
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=9)** To create a new rule in any Jira project, use the Create Rule button at the top right of the page.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=16)** If you create a rule here, it will automatically be scoped to the specific project.
>
> **[0:22](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=22)** For example, the rule shown only apply to issues in the development project.
>
> **[0:28](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=28)** After a rule is created, a Jira administrator can increase the scope to include additional projects if needed.
>
> **[0:36](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=36)** The rule creation procedure is the same in the global automation area.
>
> **[0:42](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=42)** Rules created in this area will automatically be global, meaning they apply to issues in all Jira projects.
>
> **[0:49](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=49)** If needed, change the rule scope by visiting the rules details page.
>
> **[0:55](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=55)** If you navigate away from the details area, you can get back to it by clicking the rule details link at the top right.
>
> **[1:03](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=63)** Before we build a custom rule, we need to discuss rule instructions, which include triggers, conditions, branches, and actions.
>
> **[1:13](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=73)** Atlassian calls these instructions components.
>
> **[1:17](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=77)** Now, the word component is also used to describe categorization and auto-assignment into Jira projects, and a categorization feature in Atlassian's Compass product.
>
> **[1:28](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=88)** The use of component in this context just means different parts of an automation rule.
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=96)** It's easy to add rule instructions.
>
> **[1:39](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=99)** This rule already has some, but you can add more by clicking the Add Component button at the bottom.
>
> **[1:45](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=105)** For example, I'll add another action and specify its settings on the right.
>
> **[1:52](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=112)** To reorder components, simply drag them up and down in the diagram area on the left.
>
> **[1:58](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=118)** Click any component to edit its settings.
>
> **[2:01](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=121)** You can also copy it or delete it using the icon shown.
>
> **[2:06](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=126)** Don't forget to save any changes using the Update button at the top right.
>
> **[2:14](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=134)** Next, let's build a custom rule so we can try out each component.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=138)** We'll add a new component in each upcoming course section until our rule is ready to test.
>
> **[2:24](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=144)** Here's an example use case for our custom rule.
>
> **[2:28](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=148)** The rule instructions are: In the human resources project, when an issue is completed and the resolution is done, add a comment to any linked issues.
>
> **[2:40](https://www.linkedin.com/learning/jira-administration-automation/creating-custom-rules?u=76281980&t=160)** We'll start our creation process with a trigger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Automation]] (2), [[Atlassian]] (2), [[Microsoft Word|Word]] (1), feature (1)
> **Tools:** jira (4)
> **Analogies:** for example (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - in (1)

#### Triggering rules
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=0)** - [Instructor] The first component or instruction in every rule is a trigger.
>
> **[0:05](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=5)** Triggers specify when a rule is run.
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=8)** For example, run a rule when an issue is created, when an issue is assigned manually or on a set schedule.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=17)** There are many, many triggers to choose from based on what you want Jira to listen for.
>
> **[0:23](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=23)** A trigger is always required and a rule can only have one.
>
> **[0:28](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=28)** See the documentation for some example trigger use cases.
>
> **[0:32](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=32)** Here's our use case again.
>
> **[0:35](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=35)** Let's translate this sentence into Jira requirements.
>
> **[0:40](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=40)** The scope of the rule is the Human Resources project.
>
> **[0:45](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=45)** The trigger is when the issue is completed.
>
> **[0:49](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=49)** In Jira terms, that means we'll need to use the Issue transitioned trigger and set it to apply to issues transitioned to the Done status.
>
> **[0:58](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=58)** First, I'll go to the Human Resources project and create the automation rule from there.
>
> **[1:05](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=65)** Click the Create rule button and add the Issue transitioned trigger.
>
> **[1:10](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=70)** Next, select which status to listen for.
>
> **[1:13](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=73)** I don't care what status the issue starts in, so I'll leave the From status field blank.
>
> **[1:19](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=79)** For the two status, I'll select Done.
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/triggering-rules?u=76281980&t=82)** After the trigger is configured, click the form submission button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Human Resources (HR)|Human resources]] (2), [[Automation]] (1), next (1)
> **Tools:** jira (3)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Adding conditions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=0)** - [Instructor] Conditions determine the scope of a rule and how much data is impacted.
>
> **[0:05](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=5)** The amount of data could be determined by a JQL statement, with an if or else clause, by a specific value in an issue field, and more.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=16)** Here's the list of condition options.
>
> **[0:19](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=19)** A rule can have one, many, or no conditions.
>
> **[0:23](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=23)** See the documentation for some example condition use cases.
>
> **[0:28](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=28)** The condition is the resolution equals Done.
>
> **[0:31](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=31)** In Jira terms, that means we'll need to use the Issue fields condition and set it to apply to issues with the Done resolution.
>
> **[0:40](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=40)** We've already added the trigger, so now let's add the condition.
>
> **[0:45](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=45)** I'll select the Issue fields condition, and choose the Resolution field in the first menu.
>
> **[0:51](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=51)** Next, choose the equals condition, then choose the Done value.
>
> **[0:57](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=57)** You might be wondering why I need to check for the Done resolution if the issue is already in the Done status.
>
> **[1:03](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=63)** The reason is I don't want to update issues that were resolved as duplicates or cannot reproduce, for example.
>
> **[1:11](https://www.linkedin.com/learning/jira-administration-automation/adding-conditions?u=76281980&t=71)** After the condition is configured, click the form submission button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Jira]] (1), next (1)
> **Env Vars:** jql (1)
> **Documentation:** the documentation (1)
> **Tools:** jira (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using branches
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=0)** - [Instructor] Branches apply conditions and actions to related issues or objects.
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=6)** Most rules follow a linear path, where one instruction is executed after the next.
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=12)** Branching enables rules to extend in multiple directions.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=17)** For example, use a branch to close all sub-tasks of the issue that triggered the rule, or perform an action on multiple comments in an issue.
>
> **[0:28](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=28)** Here's the list of branch options.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=30)** Branches are optional.
>
> **[0:32](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=32)** See the documentation for some example branch use cases.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=37)** To add a comment to any linked issues, we'll use the branch called branch rule/related issues.
>
> **[0:45](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=45)** Since I want to impact related issues, I need to add a branch.
>
> **[0:50](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=50)** In the Type of Related Issues field, I'll select Linked Issues.
>
> **[0:54](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=54)** You can further refine which linked issues to target by using the Link Types field.
>
> **[1:00](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=60)** I'll select Relates To.
>
> **[1:03](https://www.linkedin.com/learning/jira-administration-automation/using-branches?u=76281980&t=63)** After the branch is configured, click the Form Submission button.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Leveraging actions
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=0)** - Actions determine what is done or performed, like editing an issue, sending an email message, transitioning an issue, releasing a version, and more.
>
> **[0:11](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=11)** A rule must have at least one action, otherwise, the rule doesn't have anything to do.
>
> **[0:18](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=18)** Here's the list of the action options.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=21)** See the documentation for some example action use cases.
>
> **[0:26](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=26)** The action is to add a comment.
>
> **[0:29](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=29)** In Jira terms, that means we'll need to use the Comment on issue action and specify the comment copy.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=37)** Now let's add the action.
>
> **[0:39](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=39)** I'll select comment on issue and enter the comment copy.
>
> **[0:44](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=44)** I've specified a placeholder called the smart Value to include the issue ID of the trigger issue.
>
> **[0:51](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=51)** We'll talk more about smart values later.
>
> **[0:54](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=54)** After the action is configured, click the form submission button.
>
> **[0:59](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=59)** Finally, I need to turn on the rule and set some basic rule details.
>
> **[1:04](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=64)** Click the Turn on rule button at the top right and enter a name for the rule.
>
> **[1:10](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=70)** Additionally, I can select other rule settings by clicking the Rule details link.
>
> **[1:15](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=75)** Our custom rule is now built and ready to test.
>
> **[1:19](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=79)** Anytime I create a new rule, I immediately disable it.
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/leveraging-actions?u=76281980&t=82)** I'll tell you why in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1), next (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Tools:** jira (1)
> **Speakers:** - actions (1)

#### Testing rules
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=0)** - When testing, make sure to isolate rule impact as much as possible.
>
> **[0:05](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=5)** Testing with a very small dataset can help avoid undesired outcomes.
>
> **[0:10](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=10)** Now, has this ever happened to you?
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=12)** I thought the rule I just built would only impact three issues, but instead it impacted 3,000.
>
> **[0:19](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=19)** Oops. That's a costly mistake to clean up.
>
> **[0:23](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=23)** In this section, I'll share my strategies for safely testing rules while avoiding unintended consequences.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=30)** Always test new or updated rules in a sandbox environment first.
>
> **[0:36](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=36)** If you don't have a test environment, at least create a test Jira project in your production application.
>
> **[0:42](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=42)** Next, limit the scope as much as possible in the beginning.
>
> **[0:47](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=47)** That might mean restricting the rule to a single project or using a condition so only a small set of issues are impacted.
>
> **[0:56](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=56)** Make sure the rule works perfectly for a few issues before testing it with many.
>
> **[1:02](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=62)** Sometimes I use a JQL condition and hard code an issue ID or two so only a small number of issues are impacted.
>
> **[1:12](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=72)** While we're talking about the JQL condition, always make sure to validate any JQL statements.
>
> **[1:19](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=79)** Use the validate query function shown or paste the query into a Jira search to make sure the syntax is correct.
>
> **[1:28](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=88)** Also, make sure that the number of issues returned makes logical sense.
>
> **[1:33](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=93)** If this example returned more than two results, I'd know something is wrong with the JQL.
>
> **[1:39](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=99)** When there are more results than expected, it usually means an order of operations type of problem, like parentheses are in the wrong place.
>
> **[1:49](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=109)** You can also stack multiple conditions to limit the testing risk.
>
> **[1:54](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=114)** Once testing is complete, simply remove any guardrails you created by clicking the trashcan icon pictured.
>
> **[2:02](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=122)** Next, I recommend testing with a manual trigger instead of an automatic one.
>
> **[2:08](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=128)** My favorite automation trigger is actually the manual one.
>
> **[2:12](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=132)** I use it to test new automations, exactly one I want, and usually just on a single issue.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=138)** Once the rule is ready to use, I simply change the manual trigger to an automated one.
>
> **[2:25](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=145)** In addition to testing or debugging a rule, there are plenty of other use cases for the manual trigger, like when not enough data exists to automatically trigger a rule, when a human needs to make a decision whether a rule should be run, or when information needs to be entered first.
>
> **[2:45](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=165)** Here's an example of collecting data from the user before manually running a rule.
>
> **[2:52](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=172)** When a rule is executed, an overlay appears to collect expense reimbursement information.
>
> **[2:57](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=177)** This is a really useful feature of the manual trigger.
>
> **[3:01](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=181)** Now, let's test the custom rule we built in the previous sections.
>
> **[3:05](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=185)** The first thing I do after creating a new rule is disable it and make a copy.
>
> **[3:11](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=191)** By copying the rule, I can make slight adjustments during the test process while preserving the original settings.
>
> **[3:19](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=199)** Next, in the copy, I delete the automatic trigger and add a manual trigger instead.
>
> **[3:25](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=205)** A manual trigger means the rule will only run when I physically click a button.
>
> **[3:31](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=211)** I always execute a rule manually before attempting an automatic execution.
>
> **[3:36](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=216)** This way, I can better control when the rule is run and avoid unintended consequences.
>
> **[3:43](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=223)** I also restrict who can execute the rule so end users don't see it while I'm testing.
>
> **[3:49](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=229)** Finally, publish the copy and make sure it is enabled.
>
> **[3:54](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=234)** Here's an example issue and the HR project.
>
> **[3:58](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=238)** It had a status of done and a resolution of done.
>
> **[4:02](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=242)** Now let's look at the issue links area.
>
> **[4:05](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=245)** The issue depends on another HR issue and is related to two other issues.
>
> **[4:11](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=251)** I'm expecting the automation to add a comment to the two related issues only.
>
> **[4:16](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=256)** Let's test it and see what happens.
>
> **[4:19](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=259)** Trigger any manual rules from the actions menu at the top of the right sidebar.
>
> **[4:25](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=265)** I'll click the rule copy and wait for the results.
>
> **[4:29](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=269)** Before I check the linked issues, I like to check the automation panel on the right sidebar.
>
> **[4:35](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=275)** Scroll down and expand the automation section to see recent rule runs.
>
> **[4:41](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=281)** You may need to click the refresh icon.
>
> **[4:44](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=284)** Okay, great.
>
> **[4:45](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=285)** The automation at least ran successfully, but we still need to check and see if it did what we expect.
>
> **[4:53](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=293)** I'll open one of the related issues and check the comment section.
>
> **[4:57](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=297)** Perfect.
>
> **[4:58](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=298)** The comment with a dynamic issue ID is present.
>
> **[5:03](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=303)** The comment is shown as added by the automation for Jira user, which is configurable.
>
> **[5:08](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=308)** The last thing we should do in our testing procedure is check the rules audit log, open the rule from an issues automation panel or from the global or project automation admin area.
>
> **[5:22](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=322)** Then click the audit log link at the top right.
>
> **[5:25](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=325)** This page lists any rule runs or configuration changes.
>
> **[5:30](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=330)** Expand any line item for more details.
>
> **[5:33](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=333)** The left side shows exactly what occurred and if there are any problems to address.
>
> **[5:39](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=339)** The right side shows the trigger issue and any issues that were impacted.
>
> **[5:44](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=344)** Since there are no logged problems and the result is as expected, I'll delete the rule copy with the manual trigger and test the original rule with the automatic trigger.
>
> **[5:57](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=357)** Here's a recap of my rule testing tips.
>
> **[6:00](https://www.linkedin.com/learning/jira-administration-automation/testing-rules?u=76281980&t=360)** In the next section, you'll create and test a custom rule in your sandbox application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (8), next (4), [[Jira]] (3), application (2), data (2)
> **CLI Commands:** make (9)
> **Env Vars:** jql (4)
> **Tools:** jira (3)
> **UI Navigation:** scroll down (1), open the (1)
> **Best Practices:** make sure to (1), always make sure (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Challenge: Create a common rule
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980&t=0)** (bright uptempo music)
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980&t=6)** - [Instructor] Here's your challenge.
>
> **[0:07](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980&t=7)** Create a manual rule that finds all issues in a Jira project that contain any specific term that you choose.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980&t=16)** Then automatically assign those issues to yourself.
>
> **[0:19](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980&t=19)** You'll need a manual trigger, an if or else condition, and an assign issue action in that order.
>
> **[0:27](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-common-rule?u=76281980&t=27)** Finally, test the rule and make sure it operates as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **CLI Commands:** make (1)
> **Tools:** jira (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright uptempo music) (1)

#### Solution: Create a common rule
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=5)** - [Instructor] Were you able to build the sample automation rule?
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=9)** Here's how I configured mine.
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=12)** First, I added a manual trigger and restricted the rule to users in the Administrator's Group, then I added an if or else condition.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=21)** In the Condition Settings, I specified that all provided conditions must match, and I added a JQL statement to find issues with the word intranet in the Summary, Body or Comment section.
>
> **[0:35](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=35)** Finally, I added an Assign issue action, and selected my username.
>
> **[0:41](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=41)** Now we'll test the issue by manually triggering it.
>
> **[0:45](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=45)** The rule updated the Assignee field as expected.
>
> **[0:49](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=49)** Now let's check the Automation Panel and Audit Log.
>
> **[0:53](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-common-rule?u=76281980&t=53)** In both places, it shows that the rule executed successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** jql (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)


### 3. Managing Automation Rules

[↑ Back to Table of Contents](#table-of-contents)

#### Maintaining rules
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=0)** - When I only had a few automation rules, they were pretty easy to maintain.
>
> **[0:05](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=5)** But now, I have over 90, which can be a challenge.
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=8)** I'm always looking for a specific rule and sometimes it takes a long time to find it.
>
> **[0:13](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=13)** Here are some tips for effectively managing your rule library.
>
> **[0:18](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=18)** Just like with other Jira schemes and settings, it's important to have a classification and naming strategy.
>
> **[0:25](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=25)** In my Jira application, I like to use the labels feature to answer the question, what does the rule do?
>
> **[0:32](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=32)** Next, I use the rule's name to describe how a rule achieves a result.
>
> **[0:39](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=39)** Let's use this simple rule as an example.
>
> **[0:42](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=42)** The instructions are, when an issue is created and the priority equals highest, then set the assignee field to a specific user.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=52)** So what are the important keywords to focus on?
>
> **[0:55](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=55)** I'd say they are priority, highest, set, and assignee.
>
> **[1:01](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=61)** So I might name this rule highest-priority assignment.
>
> **[1:06](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=66)** Now, the order of the words matter.
>
> **[1:09](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=69)** I made a mistake and originally named this rule assign highest priority.
>
> **[1:14](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=74)** That slight change incorrectly explains what the rule does.
>
> **[1:18](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=78)** Do you see the difference?
>
> **[1:20](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=80)** The first name suggests the issue is assigned based on priority, which is accurate.
>
> **[1:26](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=86)** The second name suggests a priority is being assigned, which is incorrect.
>
> **[1:32](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=92)** Next, I'll add the term set as a label.
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=95)** Set implies that the field was previously empty, and that's likely because this rule was run when an issue was created.
>
> **[1:44](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=104)** If this rule is run later, I'd add a label named update instead.
>
> **[1:49](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=109)** It's a small distinction, but accuracy matters when there are many rules.
>
> **[1:54](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=114)** Here's another example.
>
> **[1:56](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=116)** The instructions are, when a comment is added and the initiator is a customer and the status is waiting on customer, then transition the issue to the waiting for support status.
>
> **[2:09](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=129)** So what are the key words to focus on?
>
> **[2:12](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=132)** I'd say they are comment, customer, status, and transition.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=138)** I might name this rule, change status after customer comment.
>
> **[2:23](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=143)** Since this rule only applies to Jira service management projects, I've added a label named service.
>
> **[2:30](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=150)** I also added a label named SLA.
>
> **[2:33](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=153)** Now, while this issue doesn't directly set or change a service level agreement, the status change does impact how SLA time is calculated.
>
> **[2:42](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=162)** So by using this label, I can search for rules that directly or indirectly impact SLAs.
>
> **[2:50](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=170)** So why didn't I add a label name transition?
>
> **[2:53](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=173)** You can already filter issues by rules using the transition issue action.
>
> **[2:59](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=179)** While I could add it, I try not to duplicate information available elsewhere, and that's a good Jira-wide recommendation as well.
>
> **[3:08](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=188)** Finally, sometimes I append or prepend keywords so I can alphabetically group rules.
>
> **[3:15](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=195)** All the rules intended to alert users are together at the top of the list and the examples are at the bottom.
>
> **[3:23](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=203)** My final recommendation is creating your own search strategy.
>
> **[3:28](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=208)** While the automation area has powerful keyword search, filter, and sort features, there's no way to search within rule components.
>
> **[3:38](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=218)** That's where the export feature and your own documentation come in.
>
> **[3:43](https://www.linkedin.com/learning/jira-administration-automation/maintaining-rules?u=76281980&t=223)** We'll discuss those topics next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Search]] (4), next (3), [[Automation]] (2), feature (2)
> **Tools:** jira (4)
> **Env Vars:** sla (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - when (1)

#### Importing and exporting rules
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=0)** - Next we'll discuss using Jira's import and export feature to move, backup, and search within rule settings.
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=9)** The import feature allows you to move rules to other cloud environments, like a sandbox.
>
> **[0:15](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=15)** The export feature allows you to save rule configurations in JSON format.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=21)** Exporting is a great way to keep a local backup.
>
> **[0:25](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=25)** Additionally, you can open the JSON file and search the components for keywords or object IDs.
>
> **[0:32](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=32)** Exporting also gives you a headstart on documenting rule components.
>
> **[0:38](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=38)** In February, 2024, Atlassian reported that automation rules were losing configuration data.
>
> **[0:45](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=45)** As a result, rule runs were failing and Jira admins were left either waiting for a vendor fix or trying to manually restore their configuration settings.
>
> **[0:55](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=55)** Even Atlassian reported that they had to fix some rules manually.
>
> **[0:59](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=59)** Now, outages and mistakes happen, it's a fact of life.
>
> **[1:03](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=63)** But our job as Jira administrators should be to anticipate and plan for problems so they are less impactful to our organizations.
>
> **[1:13](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=73)** I, for one, wouldn't want to be stuck waiting for someone else to restore my data and hope that it's correct.
>
> **[1:19](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=79)** I would much rather have my own backups and documentation to reference.
>
> **[1:24](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=84)** Let's do a quick export and import to see how it works.
>
> **[1:29](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=89)** First, log into Jira as an application administrator.
>
> **[1:33](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=93)** I like to export from the global administration area, which allows you to export a single rule or all rules at once.
>
> **[1:41](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=101)** To export a single rule, click the ellipsis on the table, select export, and save the file to your local computer.
>
> **[1:50](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=110)** To export all rules in a single JSON file, click the ellipsis at the top right of the page.
>
> **[1:56](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=116)** Then select export rules.
>
> **[1:59](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=119)** On the next page, click the next button, and wait for the export process to complete.
>
> **[2:05](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=125)** Then click the done button and save the file to your local computer.
>
> **[2:10](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=130)** Let's explore the contents of a JSON file for a single rule.
>
> **[2:14](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=134)** I open the exported file in a text editor and pasted the contents into Confluence so I could take advantage of the automatic color coding feature.
>
> **[2:24](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=144)** You don't need to be a programmer to benefit from the information in this file.
>
> **[2:29](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=149)** First, you'll notice that the information is organized in key value pairs.
>
> **[2:35](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=155)** For example, line five shows the rules ID.
>
> **[2:39](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=159)** The ID matches what is embedded in the rules Jira, URL.
>
> **[2:44](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=164)** Line seven shows the rule's name, and line eight shows the rule status.
>
> **[2:49](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=169)** A rule can be in enabled, disabled, or draft status.
>
> **[2:55](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=175)** Draft means there are unpublished changes.
>
> **[2:58](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=178)** By looking at the screenshot, we can see that the rule contains the issue-created trigger.
>
> **[3:05](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=185)** That information is found on line 23 in the JSON file.
>
> **[3:09](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=189)** Comparing the file to a screenshot is a great way to learn how to read the export information, and the format is always predictable.
>
> **[3:18](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=198)** The file always starts with general rule details, then trigger details, then component details.
>
> **[3:26](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=206)** The components start on line 32.
>
> **[3:29](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=209)** Now here's where this gets useful.
>
> **[3:31](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=211)** The rule contains an action to set the issues assignee, so I'll search the JSON file for the keyword assignee.
>
> **[3:40](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=220)** On line 77, the JSON shows the ID of the user assigned.
>
> **[3:45](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=225)** Now, that information would only be available if I went digging through the rules component settings in Jira.
>
> **[3:52](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=232)** It's much faster to find it here.
>
> **[3:55](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=235)** Further, wouldn't it be nice to see if other rules were referencing the same user?
>
> **[4:00](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=240)** There's no way to do that in Jira, but it's easy to search the JSON files for this information.
>
> **[4:07](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=247)** Next, let's import a rule exported from a different Jira application.
>
> **[4:12](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=252)** Log in as an application administrator and go to the global automation page in the system admin area.
>
> **[4:19](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=259)** Click the ellipsis on the top right and select the import rules option.
>
> **[4:24](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=264)** Next, upload a single or multi-rule JSON file.
>
> **[4:28](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=268)** The file limit is five megabytes.
>
> **[4:31](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=271)** Then use the wizard to select the rules to import and any settings.
>
> **[4:36](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=276)** After the import process is complete, review the rule settings and make any additional corrections.
>
> **[4:43](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=283)** For example, you may need to update some JQL, or mappings for values that exist in the source application, but not the destination.
>
> **[4:53](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=293)** After, enable the rule and test the results.
>
> **[4:57](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=297)** For more information about the import and export process, see Atlassian's documentation page shown.
>
> **[5:07](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=307)** Additionally, if your organization is subject to FedRAMP compliance in the United States, there's a specific documentation page about handling incompatible components.
>
> **[5:19](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=319)** While it's possible to make changes directly in a JSON file and then import it, I don't recommend it.
>
> **[5:25](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=325)** That's a good way to break things.
>
> **[5:27](https://www.linkedin.com/learning/jira-administration-automation/importing-and-exporting-rules?u=76281980&t=327)** I would import the rule first and then make any needed changes in Jira.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (10), [[Jira]] (9), next (5), feature (4), [[Search]] (4)
> **Env Vars:** json (10), url (1), jql (1)
> **Tools:** jira (9), confluence (1)
> **UI Navigation:** open the (2), select the (2), go to (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Best Practices:** general rule (1)

#### Documenting rules
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=0)** - In this section, we'll discuss reasons to document automation rules and ways to do it.
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=6)** I find I learn more by writing my own documentation, but you can also get started quickly using AI.
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=12)** Now, you might think that documenting automation rules is a waste of time.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=16)** But ask yourself, how much time would it take to rebuild a rule that another admin accidentally deleted?
>
> **[0:23](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=23)** Rebuilding isn't the hard part.
>
> **[0:25](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=25)** Remembering what the rule did and all of its settings is.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=30)** Here are the reasons I document automation rules.
>
> **[0:34](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=34)** First, it's the best way to make sure I understand what's going on in the background.
>
> **[0:39](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=39)** The documentation provides a useful reference for when I forget all the important details in a few months.
>
> **[0:46](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=46)** Next, if you ever need to rebuild a rule, you'll be glad to know what the specific configuration settings were.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=52)** Also, the documentation creates a searchable library of rule settings.
>
> **[0:57](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=57)** That's really helpful when I'm looking for a rule, but don't remember what I called it.
>
> **[1:03](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=63)** And finally, documentation serves as a historical and legal record of what was done and why.
>
> **[1:10](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=70)** Your documentation strategy should answer the following questions.
>
> **[1:15](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=75)** What are the important details to know?
>
> **[1:17](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=77)** Which triggers, conditions, branches, and actions are used?
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=82)** And what are each component's individual options and settings?
>
> **[1:27](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=87)** Additionally, I try to provide additional information when it applies.
>
> **[1:32](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=92)** Details like why a rule was built, how or where it's used, and any complexities to be aware of are really helpful to have.
>
> **[1:42](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=102)** Also, make sure any terms you might want to search with in the future are included.
>
> **[1:47](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=107)** Here's a documentation example.
>
> **[1:50](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=110)** At the top are all the rule details, like the rule's ID, a link to the rule settings in Jira, and the Jira issue requesting the functionality.
>
> **[2:00](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=120)** Next, I attach a screenshot of the rule instructions which shows a high-level overview of the steps.
>
> **[2:07](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=127)** I also attach or paste in the rule's JSON code.
>
> **[2:12](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=132)** Next, I list each component in the order they appear and any related settings.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=138)** For this example, the rule uses the edit issue action.
>
> **[2:23](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=143)** I've recorded that the action sets the assignee field to my user account and that the value is hard coded.
>
> **[2:30](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=150)** Next, I provide any other details that will be useful reminders in the future or help someone else understand what the rule does.
>
> **[2:39](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=159)** For example, it's good to know that this rule only runs on the create action, and not later, if the priority value is changed during the workflow.
>
> **[2:50](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=170)** I also included the assignee's user ID in Jira Cloud.
>
> **[2:54](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=174)** I might want to search for instances of this ID one day.
>
> **[2:58](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=178)** Sometimes, there are multiple ways to achieve the same thing.
>
> **[3:02](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=182)** Why you selected a certain implementation method would also be good information to include.
>
> **[3:08](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=188)** I've created a version of this documentation that you can use to craft your own.
>
> **[3:13](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=193)** Download my handout from the exercise files area in LinkedIn Learning.
>
> **[3:18](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=198)** Finally, I wanted to share some exciting capabilities coming our way through artificial intelligence.
>
> **[3:24](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=204)** Atlassian and app developers are creating exciting new ways to build and document automation rules.
>
> **[3:31](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=211)** Here's a brief example.
>
> **[3:33](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=213)** This is the Salto Configuration Manager for Jira app.
>
> **[3:37](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=217)** It helps you find, deploy, back up, and automate changes to your Jira configuration.
>
> **[3:43](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=223)** By connecting my Jira software and Jira service management applications, I can see a list of all my configuration settings, including automation rules.
>
> **[3:53](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=233)** I'll search for and open the highest priority assignment rule that we've been using as an example.
>
> **[4:00](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=240)** Not only are all the settings displayed here in an easy-to-understand language, there's also an interesting Explain this element feature I wanted to show you.
>
> **[4:10](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=250)** Clicking this creates an AI-generated version describing the rule.
>
> **[4:14](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=254)** Neat!
>
> **[4:16](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=256)** I'm excited to see all the great new AI capabilities from Atlassian and marketplace vendors.
>
> **[4:22](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=262)** Atlassian has introduced the ability to create issues with AI.
>
> **[4:27](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=267)** For example, type a description of what you want to automate in natural language, and Atlassian intelligence will build the rule for you.
>
> **[4:36](https://www.linkedin.com/learning/jira-administration-automation/documenting-rules?u=76281980&t=276)** Read more about the current capabilities at the URL shown.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (7), [[Automation]] (5), ai (4), next (4), [[Atlassian]] (4)
> **Tools:** jira (7)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** json (1), url (1)
> **Documentation:** the documentation (2)
> **Analogies:** for example (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Monitoring usage
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=0)** - What happens when you hit the rule execution threshold?
>
> **[0:03](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=3)** In this section, I'll show you how to view, monitor, and manage your application's limit.
>
> **[0:10](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=10)** We previously discussed that the different Jira cloud plans have different automation execution limits.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=17)** Here are the limits in the different Jira software plans.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=21)** There's no limit to the number of rules you can create, but there are limits on how many times rules are executed.
>
> **[0:27](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=27)** It's important to know the limits and regularly check your application usage.
>
> **[0:33](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=33)** To view usage reports, log into Jira as an Application Administrator, and go to the Global automation section in the System admin area.
>
> **[0:43](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=43)** Then click the Usage tab at the top of the page.
>
> **[0:46](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=46)** Keep in mind this is a test application, so there's not much activity to show.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=52)** The first table shows the current month statistics, including executions used and remaining.
>
> **[0:58](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=58)** Any rule that performs at least one successful action is counted as an execution.
>
> **[1:05](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=65)** Rules that simply log in action, create a variable, or create a lookup table, don't count against the limits.
>
> **[1:13](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=73)** The next area shows usage trends over multiple months.
>
> **[1:17](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=77)** Finally, the bottom of the page shows the most active automations.
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=82)** If certain rules are consuming a lot of executions, you may be able to simplify them so they run less often.
>
> **[1:30](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=90)** When introducing new rules, it's important to monitor their impact both to your issue data and to the application's execution count.
>
> **[1:39](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=99)** I create a Jira issue in my application support project for all my recurring Jira maintenance activities.
>
> **[1:46](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=106)** Then I create a subtask to remind me to periodically check on rule behavior.
>
> **[1:52](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=112)** Anytime I create a new rule, I check on its impact to the usage limit.
>
> **[1:57](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=117)** I check every two weeks because if I hit the limit, rules will stop running until the count resets the next month.
>
> **[2:06](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=126)** If your application is constantly exceeding execution limits, there are some things you can do.
>
> **[2:12](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=132)** First, try decreasing rule scope.
>
> **[2:15](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=135)** In a rules details area, change the project scope from global to a specific set of projects.
>
> **[2:23](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=143)** Next, try decreasing issue scope by adding a JQL condition.
>
> **[2:28](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=148)** Adding conditions early in a rule can decrease its impact dramatically.
>
> **[2:35](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=155)** Next, you can combine multiple rules so they only count as one execution, or upgrade your Jira Cloud plan to a tier with higher execution limits.
>
> **[2:47](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=167)** You can also consider changing the trigger from automatic to manual so rules run less often.
>
> **[2:53](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=173)** Or disable rules that are less valuable or require less work to accomplish manually.
>
> **[3:00](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=180)** Finally, also consider leveraging marketplace apps, which may not have rule execution limits.
>
> **[3:07](https://www.linkedin.com/learning/jira-administration-automation/monitoring-usage?u=76281980&t=187)** See Atlassian's documentation for additional reduction methods and advice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (7), [[Jira]] (6), next (4), hit (2), cloud (2)
> **Tools:** jira (6)
> **Env Vars:** jql (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - what (1)

#### Troubleshooting errors
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=0)** - There are multiple ways to detect automation rule errors.
>
> **[0:04](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=4)** In this section, we'll discuss where to look and what to do when you encounter them.
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=9)** I previously mentioned that you can see the status of each rule run from an impacted Jira issue.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=16)** The example shows that there were some errors the last time the rule was run for this issue.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=21)** You can also request Jira to send an email when a rule fails.
>
> **[0:25](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=25)** That's a per rule setting that you can select on a rule's detail page.
>
> **[0:31](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=31)** In addition to these detection methods, there's an automation log.
>
> **[0:35](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=35)** There are three ways to view log details.
>
> **[0:38](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=38)** Look for the Audit log tab in the Global automation area or in a specific project's Automation area.
>
> **[0:46](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=46)** You can also go to an individual rule and access its specific log entries.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=52)** Look for the Audit log link next to Rule Details.
>
> **[0:57](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=57)** Let's take a look at some entries in the Global automation log.
>
> **[1:02](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=62)** Each entry has a timestamp, a unique ID, and a run status.
>
> **[1:08](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=68)** Scroll down to the bottom of the page and expand the What do the different statuses mean section to see the different run statuses and their definitions.
>
> **[1:20](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=80)** To see additional run details, click the Show more link in the Operations column.
>
> **[1:26](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=86)** Let's examine a few examples.
>
> **[1:29](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=89)** For the SUCCESS status, the steps the rule went through are shown on the left.
>
> **[1:34](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=94)** The impacted issue is shown on the right and clickable.
>
> **[1:40](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=100)** For the CONFIG CHANGE status, Jira attempts to show what was changed.
>
> **[1:46](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=106)** Some change records have helpful details, but others just indicate that a change was made.
>
> **[1:53](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=113)** I recommend updating your documentation when rules are edited instead of relying on log information.
>
> **[2:00](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=120)** The NO ACTIONS PERFORMED status indicates that the rule ran successfully, but no issues were changed.
>
> **[2:08](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=128)** In this example, AS-6 did not meet the required criteria.
>
> **[2:13](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=133)** Specifically, the issue created didn't have the specified priority level.
>
> **[2:20](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=140)** In addition to checking usage limits for new rules, I also periodically check the automation audit log to make sure existing rule settings are still valid.
>
> **[2:30](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=150)** This is especially important after making potentially impactful configuration changes like setting removals or name changes.
>
> **[2:39](https://www.linkedin.com/learning/jira-administration-automation/troubleshooting-errors?u=76281980&t=159)** Just because rules are running doesn't guarantee they're behaving as desired.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (6), [[Jira]] (3), next (1)
> **Env Vars:** success (1), config (1), change (1), actions (1), performed (1)
> **Tools:** jira (3)
> **UI Navigation:** go to (1), scroll down (1)
> **CLI Commands:** make (1)
> **Speakers:** - there (1)

#### Challenge: Back up a rule
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/challenge-back-up-a-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/challenge-back-up-a-rule?u=76281980&t=0)** (cool upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/challenge-back-up-a-rule?u=76281980&t=6)** - [Speaker] Here's your challenge for this section.
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/challenge-back-up-a-rule?u=76281980&t=8)** Pick an automation rule to back up.
>
> **[0:11](https://www.linkedin.com/learning/jira-administration-automation/challenge-back-up-a-rule?u=76281980&t=11)** Use the export feature and save the JSON file in a safe place.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/challenge-back-up-a-rule?u=76281980&t=16)** Then document the rules, details, and components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (1), feature (1), [[JSON]] (1)
> **Env Vars:** json (1)
> **Speakers:** - [speaker] (1)
> **Non-Speech:** (cool upbeat music) (1)

#### Solution: Back up a rule
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=0)** (gentle music)
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=6)** - [Instructor] Were you able to back up a single rule?
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=8)** Here's how to do it.
>
> **[0:10](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=10)** Go to the global automation or project automation area.
>
> **[0:14](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=14)** In the rule list, click the ellipsis icon on the right and select the Export link.
>
> **[0:20](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=20)** Then download the file and save it to your local computer with your documentation or check it into your code repository.
>
> **[0:29](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=29)** Finally, document the material rule details, components, and their settings.
>
> **[0:35](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=35)** This is the example from the earlier Documenting Rules course section.
>
> **[0:39](https://www.linkedin.com/learning/jira-administration-automation/solution-back-up-a-rule?u=76281980&t=39)** And of course, it's available as a downloadable handout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (2)
> **UI Navigation:** go to (1), select the (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle music) (1)


### 4. Extending Capabilities with Smart Values

[↑ Back to Table of Contents](#table-of-contents)

#### Using smart values
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=0)** - So far, all the example rules have been pretty simple, using predefined components in the rules engine.
>
> **[0:07](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=7)** Now it's time to really have some fun.
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=9)** In this section, we'll explore enhancing rule abilities using smart values.
>
> **[0:15](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=15)** Smart values are a low-tech way to access, substitute, and manipulate issue data.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=21)** And don't worry, no programming experience is required.
>
> **[0:25](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=25)** Smart values are simply placeholders for variable information.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=30)** As an example, let's say you need to send your customers license information after they purchase your product.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=37)** Instead of manually sending multiple individual emails, you can create one message, and use placeholders to insert specific information for each customer.
>
> **[0:48](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=48)** In the example, the highlighted areas are all variables.
>
> **[0:53](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=53)** You can use the same substitution concept in Jira for customizing comment and notification copy, setting and copying field values, formatting and calculating totals and dates, and more.
>
> **[1:08](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=68)** Jira stores a ton of data, so it's great to be able to use all of that info in a dynamic way.
>
> **[1:15](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=75)** Smart values are enclosed in double curly brackets.
>
> **[1:19](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=79)** In their simplest form, they include a parent element, followed by a period, and a child element.
>
> **[1:28](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=88)** The smart value {{issue.key}} returns a Jira issue ID, like ISSUE-123.
>
> **[1:37](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=97)** Simply add a smart value to a line of copy to dynamically customize the output.
>
> **[1:44](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=104)** Here's a comment on an issue action from an earlier automation example.
>
> **[1:49](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=109)** When an issue is closed, this rule adds a comment to any linked issues.
>
> **[1:55](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=115)** I used the smart value {{triggerissue.key}} to add the related issue ID to the comment.
>
> **[2:03](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=123)** Smart value syntax is based on a template library called Mustache.
>
> **[2:08](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=128)** It's named for the curly brackets that resemble facial hair.
>
> **[2:11](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=131)** For more information on Mustache tags, see the URL shown.
>
> **[2:17](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=137)** But don't worry, you don't need any coding experience to use smart values.
>
> **[2:22](https://www.linkedin.com/learning/jira-administration-automation/using-smart-values?u=76281980&t=142)** You simply just need to use the specified format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), data (2), [[Programming]] (1), product (1), [[Automation]] (1)
> **Tools:** jira (3)
> **Env Vars:** issue (1), url (1)
> **Exercise Files:** template (1)
> **Speakers:** - so (1)

#### Accessing project and issue data
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=0)** - In this section, I'll share some easy ways to determine smart value capabilities to access Jira project and issue data.
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=9)** First, try this URL format for an easy way to get issue configuration information like custom field names.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=17)** You don't need any programming skills to access this information.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=21)** Just make sure you're logged into Jira and paste the URL displayed in your browser's address bar.
>
> **[0:28](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=28)** For example, if I'm looking for a field or value used in issue service 14, I can simply embed that ID in the REST API URL to see all the available data.
>
> **[0:42](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=42)** More information about finding smart values is available in the documentation.
>
> **[0:47](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=47)** Here's the page for cloud, and here's the page for data center.
>
> **[0:55](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=55)** Next, there's a great helper feature right in the rule builder.
>
> **[0:59](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=59)** In the example, click the curly bracket icon in the comment box on the right.
>
> **[1:06](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=66)** In the overlay, use the search box, use the tabs or scroll through the recommendations list for examples and usage tips.
>
> **[1:16](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=76)** Finally, Atlassian has completed a list of smart values in their documentation.
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=82)** Visit the URL shown for example, values, formats, and examples.
>
> **[1:29](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=89)** I compiled a list of my own of some of my favorite and most used smart values.
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=96)** I'll share those with you next.
>
> **[1:38](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=98)** There's no need to write down the upcoming examples though.
>
> **[1:41](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=101)** Just download my handout so you can cut and paste them in your test application.
>
> **[1:47](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=107)** Here's a tip, copy the syntax in the handout to create your own smart value library.
>
> **[1:53](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=113)** I store frequently used values and functions in Confluence or in a disabled automation rule, so they're easy to repurpose.
>
> **[2:02](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=122)** All right, onto some Jira project and issue smart value examples.
>
> **[2:08](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=128)** On the left are some project smart values that I use often.
>
> **[2:12](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=132)** On the right is an example of using them in the rule builder and the result as a Jira comment.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=138)** I use project name and project key when sending Jira data via email or to other applications.
>
> **[2:26](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=146)** Sometimes I use project ID as a quick way to get the project's unique number without having to look it up in the REST API.
>
> **[2:35](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=155)** Here are some issue smart values that I use frequently and how they look in a comment.
>
> **[2:41](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=161)** In the comment screenshot notice that the issue key smart value includes the issue types icon key summary and status.
>
> **[2:51](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=171)** Now, that's a function of using an issue key in a comment.
>
> **[2:55](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=175)** Jira provides that functionality.
>
> **[2:57](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=177)** It doesn't have anything to do with using a value.
>
> **[3:00](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=180)** If you use the issue key smart value elsewhere, only the actual key is returned in text format.
>
> **[3:08](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=188)** Next, notice that the issue priority smart tag contains an additional name element.
>
> **[3:15](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=195)** Without it, Jira returns the priorities ID number instead.
>
> **[3:20](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=200)** As you'll see, some smart values require extra elements or formatting to get them to display the data that you're after.
>
> **[3:29](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=209)** Also good to know, the issue URL is only linked because Jira hyperlinks URLs in comment fields.
>
> **[3:36](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=216)** In other places or applications, it might be shown in text format.
>
> **[3:42](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=222)** Here's how to turn URLs into hyperlinks in other areas.
>
> **[3:47](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=227)** In HTML, embed the issue URL smart value in href tag and use the issue key smart value as the clickable text.
>
> **[3:57](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=237)** In Wiki markup surround the issue key and issue URL in single square brackets.
>
> **[4:04](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=244)** Don't forget to include the pipe symbol in the middle to separate the two values.
>
> **[4:09](https://www.linkedin.com/learning/jira-administration-automation/accessing-project-and-issue-data?u=76281980&t=249)** Simply replace the orange areas with smart values like in the examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (8), data (5), next (3), [[Representational State Transfer (REST)|Rest]] (2), api (2)
> **Env Vars:** url (7), rest (2), api (2), html (1)
> **Tools:** jira (8), confluence (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Best Practices:** don't forget (1)

#### Working with user properties
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=0)** - In this section, we'll cover user specific smart values and some example uses.
>
> **[0:07](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=7)** First, it's important to know how user data is stored.
>
> **[0:10](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=10)** In Cloud, usernames are a long stream of letters and numbers.
>
> **[0:15](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=15)** They're set by Atlassian and there's no way to change them.
>
> **[0:19](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=19)** This value is used across Cloud sites and products.
>
> **[0:23](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=23)** To find a username in Cloud, visit a user's profile and look for their unique ID in the browser's address bar.
>
> **[0:31](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=31)** You'll find it just after the word users.
>
> **[0:35](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=35)** Once you have the ID, you can use it in rules or to access other user profile details.
>
> **[0:41](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=41)** Just plug it into the example URL as shown.
>
> **[0:45](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=45)** In server and data center, usernames are created by Jira administrators.
>
> **[0:50](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=50)** They're generally in the format first.last, flast, or sometimes they're an email address.
>
> **[0:58](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=58)** In server and data center, usernames are easy to find.
>
> **[1:02](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=62)** They're listed on the user management admin page.
>
> **[1:07](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=67)** Here's the URL format to retrieve user profile information in server and data center.
>
> **[1:14](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=74)** Okay, onto the examples.
>
> **[1:16](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=76)** Here are some frequently used smart values for users.
>
> **[1:20](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=80)** As you know, assignee returns a user's long username in Jira Cloud.
>
> **[1:26](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=86)** If you want the format to be first and last name, use assignee.displayName instead.
>
> **[1:34](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=94)** In addition to assignee, some other important participants are reporter, creator, and initiator.
>
> **[1:42](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=102)** It's good to know that a reporter and a creator are different concepts.
>
> **[1:47](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=107)** A creator is a value stored in the Jira database that records who actually created the issue.
>
> **[1:54](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=114)** It's not shown in the front end, and it's not changeable, making it a useful value for auditing purposes.
>
> **[2:01](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=121)** A reporter is the user currently listed in an issues reporter field.
>
> **[2:06](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=126)** If enabled in a project's permission scheme, users can change the reporter to a different user.
>
> **[2:12](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=132)** This ability is useful for many reasons, like when a user leaves the organization or when filing a request on behalf of another person.
>
> **[2:22](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=142)** You can also access an initiator with smart values.
>
> **[2:25](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=145)** An initiator is the user who triggered the rule.
>
> **[2:29](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=149)** In the example, I'm retrieving the user's locale.
>
> **[2:33](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=153)** I could also retrieve their time zone or any other information available for user smart values.
>
> **[2:39](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=159)** Then I can use this information in conditions.
>
> **[2:42](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=162)** For example, if the locale is US, do X.
>
> **[2:46](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=166)** If the locale is UK, do Y.
>
> **[2:50](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=170)** Finally, to mention a user in a comment, description, or other supported field, embed the user's ID in square brackets as shown.
>
> **[3:00](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=180)** Jira will translate that information into the format @username, which will tag the user and send them an email notification.
>
> **[3:09](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=189)** Here's a tip about fields like select lists or watchers, which can return multiple values.
>
> **[3:16](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=196)** Smart tags that return information in a list format are formatted differently.
>
> **[3:22](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=202)** The example has a pound sign, which tells Jira to iterate or loop through the field until all the values are returned.
>
> **[3:30](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=210)** The next special character is not required, but I used an asterisk to create a bulleted list.
>
> **[3:36](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=216)** You could also use a dash for a similar effect.
>
> **[3:40](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=220)** Don't worry if this syntax doesn't make a ton of sense, just follow the format and if multiple values are present in the field, they'll be returned in list format.
>
> **[3:50](https://www.linkedin.com/learning/jira-administration-automation/working-with-user-properties?u=76281980&t=230)** See more information about lists in the smart value documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), data (4), cloud (4), [[Atlassian]] (1), [[Microsoft Products|Products]] (1)
> **Tools:** jira (5)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** url (2)
> **Code Identifiers:** displayname (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### Leveraging dates and times
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=0)** - Now, let's talk about some common date and time related smart values.
>
> **[0:05](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=5)** Here are some useful date smart values to try out in your test application.
>
> **[0:10](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=10)** The now smart value returns the current date and time in UTC format as shown.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=17)** UTC means Universal Time Coordinated, and it's the global standard for communicating time across various time zones.
>
> **[0:26](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=26)** It's easy to convert this format to a more user-friendly version.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=30)** For example, I've added the .mediumDate element to the format to result in a three letter month, two digit date, and four digit year.
>
> **[0:41](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=41)** See all the date and time formatting options at the URL shown.
>
> **[0:47](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=47)** The next example returns the first day of the current month.
>
> **[0:51](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=51)** In addition to startOfMonth, you can also use options like endOfMonth or firstBusinessDayOfMonth and more.
>
> **[1:00](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=60)** I generally use this information to calculate goal dates or due dates.
>
> **[1:04](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=64)** For example, set the due date to X days from the creation date.
>
> **[1:10](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=70)** Here are two more date examples.
>
> **[1:13](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=73)** To get a past date, use now with the minusDays element and specify the number of days in parentheses.
>
> **[1:21](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=81)** I formatted the result using the long date value so you can see the difference.
>
> **[1:26](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=86)** The second example shows how to add days to an issues creation date.
>
> **[1:31](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=91)** This example uses jiraDate, which produces the format year-month-day.
>
> **[1:39](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=99)** Now, let's examine some time examples.
>
> **[1:42](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=102)** Just like we formatted dates, there are built-in functions to format time.
>
> **[1:47](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=107)** I used longTime in the example.
>
> **[1:50](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=110)** You can also use custom formatting.
>
> **[1:52](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=112)** In the second example, I used the letter m to return only the minute of the current hour.
>
> **[2:00](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=120)** The pattern syntax to use is detailed in the Java documentation on Oracle's website.
>
> **[2:07](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=127)** Finally, you can convert dates using the convert to time zone element.
>
> **[2:12](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=132)** In the example, it's 3:03 PM in UTC time.
>
> **[2:16](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=136)** That means it's just after midnight in Tokyo and just after 4:00 PM in London.
>
> **[2:21](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=141)** Get the exact values to use for different time zones from the Olson database at the URL shown.
>
> **[2:30](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=150)** If time zones are confusing like they are to me, I recommend the free website [timeanddate.com](https://timeanddate.com).
>
> **[2:37](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=157)** I use their meeting planner page to enter my customer's time zone locations and bookmark the URL produced.
>
> **[2:44](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=164)** Then I can add and remove locations by simply modifying the parameters in the URL.
>
> **[2:50](https://www.linkedin.com/learning/jira-administration-automation/leveraging-dates-and-times?u=76281980&t=170)** The highlighted parameter is for the UTC time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** application (1), next (1), [[Java]] (1), database (1)
> **Env Vars:** utc (4), url (4)
> **Code Identifiers:** mediumdate (1), startofmonth (1), endofmonth (1), firstbusinessdayofmonth (1), minusdays (1)
> **Analogies:** for example (2), just like (1)
> **Ports:** :03 (1), :00 (1)
> **URLs:** [timeanddate.com](https://timeanddate.com) (1)
> **Speakers:** - now (1)

#### Using conditional logic
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980&t=0)** - In addition to conditions in the rule engine, smart values also support conditional logic.
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980&t=6)** Here's how to use it.
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980&t=8)** In this conditional example, I'm checking to see if a field has a value using not and isEmpty.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980&t=16)** If the priority field is not empty, Jira adds a supplied copy to the comment.
>
> **[0:22](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980&t=22)** In this example, I'm using equals to check for a specific value.
>
> **[0:26](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980&t=26)** If the issue status is to do, then add the due date and priority to the comment.
>
> **[0:32](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980&t=32)** Finally, in this example, I'm checking whether the issue has subtasks.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/using-conditional-logic?u=76281980&t=37)** If any are present, then their details are added to the comment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Code Identifiers:** isempty (1)
> **Tools:** jira (1)
> **Speakers:** - in (1)

#### Performing calculations
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=0)** - Finally, let's explore smart value calculations so you can leverage dynamic data.
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=6)** Here are some calculation examples.
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=9)** To use a math expression, use the pound and an equals sign enclosed in double curly brackets, like shown.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=17)** The first example shows the ROUND function.
>
> **[0:20](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=20)** It takes a number in a custom field and rounds it up to the next whole number.
>
> **[0:25](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=25)** For example, if the value 10.55 is present in a custom number field called Mileage, Jira rounds it to 11.
>
> **[0:34](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=34)** The next example shows simple multiplication.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=37)** I'm multiplying the value of a Jira custom number field called Total Expenses by 1.2.
>
> **[0:44](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=44)** If the custom field's value is 100, 100 times 1.2 is 120.
>
> **[0:50](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=50)** In this example, the multiplier is hard coded, but it could also be a value stored in a different issue field.
>
> **[0:57](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=57)** The next example shows currency in U.S. format.
>
> **[1:01](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=61)** The asCurrency function formats the value in the Transportation custom number field, with a dollar sign, commas, and a decimal point with two digits.
>
> **[1:12](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=72)** The second example shows a custom number format.
>
> **[1:15](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=75)** It only adds the dollar sign and commas.
>
> **[1:19](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=79)** These final examples show calculations using worklogs.
>
> **[1:23](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=83)** The first example shows the sum function, which returns the sum of all time logged in seconds.
>
> **[1:30](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=90)** To convert seconds to minutes, simply divide the sum by 60, as shown in the second example.
>
> **[1:37](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=97)** Here's a tip.
>
> **[1:38](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=98)** If you ever want to test a smart value or calculation, there's no need to impact an issue or increase your rule execution count.
>
> **[1:47](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=107)** Instead, use the Log Action capacity in the Actions list.
>
> **[1:52](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=112)** Here's an example.
>
> **[1:54](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=114)** In the screenshot, I've added a manual trigger and hidden the rule from users by restricting it to the administrator's group.
>
> **[2:02](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=122)** Then I added the log action, pasted in a smart value to test and ran the rule on any issue.
>
> **[2:11](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=131)** After the rule runs, go to the Audit log to see if the smart value or calculation executed properly.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=138)** The result is printed to the log as shown on the left.
>
> **[2:21](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=141)** No changes were made to the Jira issue that triggered the rule.
>
> **[2:26](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=146)** And again, only rules that perform an action are counted towards automation execution limits.
>
> **[2:32](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=152)** Rules that log an action, create a variable, or create a lookup table aren't counted.
>
> **[2:39](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=159)** As a reminder, all these smart value examples are available as a downloadable handout.
>
> **[2:45](https://www.linkedin.com/learning/jira-administration-automation/performing-calculations?u=76281980&t=165)** To see additional examples, see Atlassian's documentation at the URL shown.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), [[Jira]] (3), data (1), [[Automation]] (1), [[Atlassian]] (1)
> **Versions:** 1.2 (2), 10.55 (1)
> **Tools:** jira (3)
> **Env Vars:** round (1), url (1)
> **Code Identifiers:** ascurrency (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - finally (1)

#### Challenge: Create a rule with smart values
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-rule-with-smart-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-rule-with-smart-values?u=76281980&t=0)** - Your challenge for this section is to create a rule that sends an email message that utilizes smart values.
>
> **[0:13](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-rule-with-smart-values?u=76281980&t=13)** Now, these requirements are intentionally loose so you don't mess up your Jira configuration building a specific use case.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-rule-with-smart-values?u=76281980&t=21)** For smart values, just use fields you already have in your application, like summary, assignee, due date, and priority to dynamically populate issue data in an email message.
>
> **[0:34](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-a-rule-with-smart-values?u=76281980&t=34)** In the next section, I'll mess up my Jira application to show you a more complex example and don't skip the solution video because I made some mistakes and I have some troubleshooting insights to share.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), application (2), data (1), next (1), [[Troubleshooting]] (1)
> **Tools:** jira (2)
> **Cross-References:** in the next (1)
> **Speakers:** - your (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a rule with smart values
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=0)** - Were you able to create an automation rule using smart values?
>
> **[0:11](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=11)** Here's a use case I built to solve a purchasing challenge for a customer.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=16)** Consider this scenario.
>
> **[0:18](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=18)** The customer uses Jira to collect purchase requests, but not all their vendors have online ordering.
>
> **[0:24](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=24)** Instead, the purchase manager calls or emails the supplier to order items.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=30)** We were able to automate that step by having Jira send the request email.
>
> **[0:35](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=35)** Here's how.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=37)** Here's a request to the procurement department for new equipment.
>
> **[0:41](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=41)** When the request is approved, the procurement manager enters the order details, including the email address of the supplier to send the request to.
>
> **[0:51](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=51)** Then the manager transitions the issue to the next status in the workflow.
>
> **[0:56](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=56)** Now, here's an automation rule using the send email action with smart values.
>
> **[1:02](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=62)** This rule uses an If transition trigger to only send an email when the issue reaches a specific status.
>
> **[1:09](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=69)** Next, there's an If condition to make sure the Supplier Email field has a value before trying to send an email.
>
> **[1:18](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=78)** Next, the Send Email action is used to send the order details to the supplier.
>
> **[1:23](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=83)** The message contains smart values to substitute the Send To email address, the vendor's name, and additional order details stored in custom fields.
>
> **[1:34](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=94)** The message also contains some HTML line breaks for spacing.
>
> **[1:39](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=99)** Finally, an Add Comment action records the information sent, so there's a record and a timestamp.
>
> **[1:46](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=106)** Now let's trigger the rule to see the result.
>
> **[1:50](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=110)** First, I'll transition the issue to the Purchase status.
>
> **[1:54](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=114)** Next, I'll check on the comment and make sure all the details were posted correctly.
>
> **[2:01](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=121)** Now, let's check the email received.
>
> **[2:04](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=124)** I want to make sure all the smart values in the configuration on the left made it into the email result on the right.
>
> **[2:11](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=131)** Finally, also, let's check the Audit log.
>
> **[2:14](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=134)** Hmm, now that's a lot of config change and error records.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=138)** I definitely had some trouble with some of the placeholders.
>
> **[2:22](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=142)** Here's what I encountered and how to fix it.
>
> **[2:26](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=146)** My first challenge was a user interface issue.
>
> **[2:30](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=150)** The To field for the Send Email action is both a text entry field and a dropdown list.
>
> **[2:37](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=157)** And I find that sometimes when I type a smart value, it doesn't stay in the field.
>
> **[2:42](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=162)** So be sure to type the enter key after entering the smart value.
>
> **[2:46](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=166)** You'll know it's entered correctly if the text has a gray background, like in the screenshot.
>
> **[2:52](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=172)** Next, I was not receiving the email message and the audit log was showing the following error.
>
> **[2:59](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=179)** First, I double checked that the field wasn't empty and that it had a correctly formatted email address.
>
> **[3:06](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=186)** After staring at the field for at least five minutes, I realized the problem was user error.
>
> **[3:13](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=193)** The custom field name is plural.
>
> **[3:16](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=196)** I named the custom field Supplier Email Addresses with the intent of potentially collecting multiple email addresses.
>
> **[3:25](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=205)** The Send Email automation action supports multiple addresses if they're separated by commas.
>
> **[3:32](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=212)** I mistyped the custom field name and that was the cause of the problem.
>
> **[3:36](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=216)** I needed to correct the spelling or use the custom field's ID in the format shown.
>
> **[3:42](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=222)** I decided to use the ID, which is less error prone and won't break if the custom field name changes in the future.
>
> **[3:50](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=230)** Next, I noticed that the smart value for the Approx. Cost wasn't coming through in the comment or in the email, so of course, I started by checking for typos.
>
> **[4:01](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=241)** Next, I checked the custom fields admin page, and bingo, I found the problem.
>
> **[4:06](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=246)** There are two custom fields called Cost. Yuck.
>
> **[4:10](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=250)** Whose Jira application is this, anyway?
>
> **[4:14](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=254)** Since there are two fields with the same name, Jira doesn't know which to use, the fix is to use the customfield ID instead of the name.
>
> **[4:24](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=264)** Finally, I wanted the Approx. Cost field to be shown as currency, but I couldn't get the asCurrency function to work.
>
> **[4:32](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=272)** Unfortunately, the cost field in this Jira project was a text field instead of a number field.
>
> **[4:39](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=279)** Yuck again.
>
> **[4:42](https://www.linkedin.com/learning/jira-administration-automation/solution-create-a-rule-with-smart-values?u=76281980&t=282)** Since I couldn't use the asCurrency function and all the amounts are expressed in US dollars, the easiest workaround was to hard code a dollar sign before the smart value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (7), [[Jira]] (5), [[Automation]] (3), [[HTML]] (1), application (1)
> **Tools:** jira (5)
> **CLI Commands:** make (3), find (1)
> **Code Identifiers:** ascurrency (2)
> **Env Vars:** html (1)
> **UI Navigation:** dropdown (1)
> **Speakers:** - were (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Use Cases and Examples

[↑ Back to Table of Contents](#table-of-contents)

#### Communicating information
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=0)** - In this section, I'll show some example rules in different use case categories.
>
> **[0:06](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=6)** Use these samples to get ideas to build your own use case library.
>
> **[0:11](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=11)** As usual, I have a downloadable handout so you can experiment with smart values without having to type them.
>
> **[0:18](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=18)** Here are some ideas for communicating information.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=21)** You can send or post additional notifications.
>
> **[0:24](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=24)** Create separate issues as reminders.
>
> **[0:27](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=27)** Automatically link to related information inside or outside Jira, and more.
>
> **[0:33](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=33)** Just be careful not to duplicate existing functionality.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=37)** Jira already has standard and custom notifications, notification schemes, and you could use a filter subscription to send issue lists as digests.
>
> **[0:48](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=48)** Don't use up rule executions for things Jira already does.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=52)** All right, here's an example of communicating information.
>
> **[0:56](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=56)** This example notifies customer service when there's an outage, so they can be ready to address trouble reports.
>
> **[1:04](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=64)** The rule runs when an issue is created.
>
> **[1:07](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=67)** Then a JQL condition checks for a specific request type and does a fuzzy search for certain keywords in the issue's summary, description, or comment fields.
>
> **[1:19](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=79)** Then a comment is added to the issue.
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=82)** The first line of the comment contains a user account ID.
>
> **[1:26](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=86)** Now that ID is for a service account.
>
> **[1:29](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=89)** That account has a distribution email address, which includes members of the customer service team.
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=95)** The syntax shown inserts an at mention for that user into the comment.
>
> **[1:40](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=100)** The second line includes a smart value that gets the names of any components selected in the issue.
>
> **[1:47](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=107)** The third line includes a hyperlink and the ID of the specific issue.
>
> **[1:53](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=113)** Now let's review the result.
>
> **[1:55](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=115)** Here's a system problem where the summary contains the word outage.
>
> **[1:59](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=119)** The issue has multiple components selected.
>
> **[2:02](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=122)** The comment area shows a notification posted by the Automation for Jira user.
>
> **[2:08](https://www.linkedin.com/learning/jira-administration-automation/communicating-information?u=76281980&t=128)** The customer service team service account is tagged, the components are included, and a link to the issue is included for users who receive the information notification via email.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Search]] (1), [[Microsoft Word|Word]] (1), [[Automation]] (1)
> **Tools:** jira (4)
> **Env Vars:** jql (1)
> **Warnings:** be careful (1)
> **Speakers:** - in (1)

#### Updating information
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=0)** - [Instructor] Here are some ideas for updating information.
>
> **[0:03](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=3)** You can conditionally update issues based on certain criteria, automatically transition issues, sum or increment a number field each time an event occurs, and more.
>
> **[0:15](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=15)** Here's an example of one of those ideas.
>
> **[0:18](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=18)** This example tracks how many times a bug fails testing.
>
> **[0:22](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=22)** In the bug's workflow, there's a pass and a fail transition.
>
> **[0:26](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=26)** If the bug fails, it goes back to the TO DO status for the development team to take another look at.
>
> **[0:33](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=33)** Let's examine the trigger first.
>
> **[0:35](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=35)** The rule runs when an issue is transitioned from the In Testing status back to the TO DO status.
>
> **[0:42](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=42)** Then, a condition makes sure the automation only applies to bug issues.
>
> **[0:47](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=47)** Finally, there's an Edit issues action with a little bit of JSON code.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=52)** The code updates a specific custom field by incrementing its value.
>
> **[0:58](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=58)** Now let's review the result.
>
> **[1:00](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=60)** Here's a bug issue in the In Testing status.
>
> **[1:03](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=63)** On the Fix details tab is a custom number field called Failure count.
>
> **[1:09](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=69)** If I select the fail workflow transition, the issue moves back to the TO DO status, and the failure count increases by one.
>
> **[1:17](https://www.linkedin.com/learning/jira-administration-automation/updating-information?u=76281980&t=77)** Now I have some bug failure stats and I can use them to improve the development team and testing process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (1), [[JSON]] (1)
> **Env Vars:** json (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Repeating frequent tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=0)** - [Instructor] Here are some ideas for managing repetitive tasks.
>
> **[0:04](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=4)** You can automatically create issues for quarterly audits or monthly maintenance, create reminder issues for other teams, create related issues so important process steps aren't missed, and more.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=17)** Here's an example of one of these ideas.
>
> **[0:20](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=20)** This example shows a monthly reminder to create an invoice.
>
> **[0:24](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=24)** The rule runs on a schedule, which is set to the first day of each month at 9:00 A.M.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=30)** Then the Create issue action creates an issue with the summary, description, and due date automatically set.
>
> **[0:38](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=38)** The summary contains smart values for a dynamic date.
>
> **[0:42](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=42)** The due date contains a function to get the last business day of the month.
>
> **[0:47](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=47)** Now let's review the result.
>
> **[0:49](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=49)** Here's an example recurring issue.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=52)** The summary contains the current year and month, and the due date is set to the last business day of the month.
>
> **[0:58](https://www.linkedin.com/learning/jira-administration-automation/repeating-frequent-tasks?u=76281980&t=58)** Now the finance team has a reminder to create a monthly invoice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** business (2), teams (1)
> **Ports:** :00 (1)
> **Speakers:** - [instructor] (1)

#### Syncing information
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=0)** - [Instructor] Sometimes, you need to keep information up to date in multiple places.
>
> **[0:05](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=5)** Now, this is a challenge, because ideally, you only want one single source of truth.
>
> **[0:10](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=10)** Storing the same data in multiple places could be a maintenance nightmare, unless you have automation to keep it all in sync, of course.
>
> **[0:19](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=19)** Automation can update related issues, pass information between issues, or sync data with other tools and more.
>
> **[0:27](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=27)** Here's an example of one of those ideas.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=30)** This example looks for a Jira issue ID in a comment and automatically links that issue to the other issue.
>
> **[0:38](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=38)** The rule runs when a new comment is added, then a smart values condition is used to look for an issue ID in the comment's copy.
>
> **[0:48](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=48)** The regular expression looks for a project key followed by a dash, followed by any digit, then a link issues action sets the type of link.
>
> **[0:58](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=58)** Another smart value is used to pass Jira the issue ID.
>
> **[1:03](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=63)** Now let's review the result.
>
> **[1:06](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=66)** Here's an issue with a comment.
>
> **[1:08](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=68)** The comment contains a Jira issue ID.
>
> **[1:11](https://www.linkedin.com/learning/jira-administration-automation/syncing-information?u=76281980&t=71)** The rule noticed the ID and added it as a related issue in the Linked issues area.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), data (2), [[Automation]] (2)
> **Tools:** jira (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Performing maintenance
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=0)** - [Instructor] Here are some ideas for maintaining lists of Jira issues.
>
> **[0:04](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=4)** Ideally, each Jira project has a lead that helps spot and address these issues, but automation can help lessen the burden.
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=12)** Automation can remove old data, close old issues, manage dupes, and more.
>
> **[0:18](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=18)** Here's an example of one of these ideas.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=21)** This example closes issues awaiting customer action for more than a specified number of hours.
>
> **[0:28](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=28)** The rule runs daily using the schedule trigger.
>
> **[0:31](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=31)** In addition to run settings, the trigger includes a JQL statement.
>
> **[0:36](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=36)** The rule only applies to issues in the waiting for customer status that haven't been updated in the last 72 hours.
>
> **[0:44](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=44)** Then, a transition issue action moves the issue to the resolved status and sets the issue's resolution to done.
>
> **[0:53](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=53)** Finally, a comment on issue action provides a message to the customer.
>
> **[0:58](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=58)** The reporter.displayName smart tag is used to customize the message's greeting.
>
> **[1:04](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=64)** The comment's visibility is set to share with customer, so the customer can see it in the Jira Service Management portal.
>
> **[1:11](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=71)** Now let's review the result.
>
> **[1:13](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=73)** Here's the support request in the JSM customer portal.
>
> **[1:17](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=77)** The issue was previously in the waiting for customer status and 72 hours had passed without customer comment.
>
> **[1:25](https://www.linkedin.com/learning/jira-administration-automation/performing-maintenance?u=76281980&t=85)** The issue is now in the resolved status, and the automation added a comment for the customer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Automation]] (3), data (1), management (1)
> **Tools:** jira (3)
> **Env Vars:** jql (1), jsm (1)
> **Code Identifiers:** displayname (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Sending alerts
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=0)** - [Instructor] Here are some ideas for sending alerts, for meeting deadlines, managing missing issue data, and catching undesired behavior, like user's about to miss a completion deadline.
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=12)** Again, make sure you're providing additional value and not duplicating built-in Jira notification capabilities.
>
> **[0:19](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=19)** Here's an example of one of these ideas.
>
> **[0:21](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=21)** This example sends an email to the assignee when a support request from a VIP is about to breach an SLA deadline.
>
> **[0:29](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=29)** We don't want to make the CEO wait a long time for support.
>
> **[0:33](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=33)** The rule runs 30 minutes before the time to first response service level agreement deadline.
>
> **[0:39](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=39)** Then, an issue fields condition limits the rule to only service requests.
>
> **[0:45](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=45)** Next, an additional JQL condition limits the rule to users in the Executives global group.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=52)** Finally, the send email action sends a reminder message to the assignee.
>
> **[0:58](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=58)** A few smart values are used to customize the message copy and provide a link to the request.
>
> **[1:05](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=65)** Now let's review the result.
>
> **[1:08](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=68)** Here's a service request issue that was in danger of breaching its time to first response SLA goal.
>
> **[1:14](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=74)** The CEO would not have been happy.
>
> **[1:17](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=77)** Here's the resulting email message with all the smart values noted.
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/sending-alerts?u=76281980&t=82)** Luckily, I received this alert, and was able to update the issue and assist them before the deadline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (1), [[Jira]] (1), next (1)
> **Env Vars:** sla (2), ceo (2), vip (1), jql (1)
> **CLI Commands:** make (2)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)

#### Calculating information
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=0)** - [Instructor] Here are some ideas for calculating information.
>
> **[0:04](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=4)** You can calculate goals or risks based on values in other fields, estimate deadlines based on dates, sum or count occurrences to measure performance, and more.
>
> **[0:16](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=16)** Here's an example of one of those ideas.
>
> **[0:19](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=19)** Here's a rule that's run periodically when needed.
>
> **[0:22](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=22)** It only runs when manually triggered by a user.
>
> **[0:26](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=26)** Then a JQL condition checks for issues, where the total risk field is empty but other related fields have a value.
>
> **[0:34](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=34)** Then an Edit issue action sums the risk fields and updates the total risk field.
>
> **[0:41](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=41)** Now let's review the result.
>
> **[0:43](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=43)** In this issue, risk values are entered, but the total is empty.
>
> **[0:48](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=48)** I'll trigger the manual automation to calculate the total.
>
> **[0:53](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=53)** If you need some additional inspiration, here's my list of 65 ways you can use automation to make your Jira life easier.
>
> **[1:01](https://www.linkedin.com/learning/jira-administration-automation/calculating-information?u=76281980&t=61)** You can accomplish all of the ideas with built-in automation, workflow extensions, and scheduling apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (3), [[Jira]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** jql (1)
> **Tools:** jira (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create an advanced rule
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980&t=0)** - [Instructor] In earlier challenges, you created a basic rule and experimented with smart values.
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980&t=12)** Let's put it all together and create a more advanced rule.
>
> **[0:15](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980&t=15)** Here's your challenge.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980&t=17)** Create an automation rule that finds issues which have changed priority from low to high.
>
> **[0:23](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980&t=23)** Then send an email notification to any users watching the issue.
>
> **[0:29](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980&t=29)** In the email notification, include smart values for the issue's key, summary, and URL.
>
> **[0:36](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980&t=36)** Also, include a list of watchers the message was sent to.
>
> **[0:40](https://www.linkedin.com/learning/jira-administration-automation/challenge-create-an-advanced-rule?u=76281980&t=40)** Build your rule, run it in a test environment, and compare it to my implementation in the next section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Automation]] (1), next (1)
> **Env Vars:** url (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create an advanced rule
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=0)** - Were you able to build the rule?
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=8)** Here's how I did it.
>
> **[0:10](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=10)** First, I used the field value changed trigger to listen for changes to the priority field.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=17)** For the change type, I selected, Any changes to the field value.
>
> **[0:22](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=22)** Then I limited the trigger scope to the edit action.
>
> **[0:26](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=26)** Next, I added a JQL condition to find issues that once had a priority of low, but currently have a priority of high.
>
> **[0:34](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=34)** And of course, I validated the query for syntax and the expected number of results.
>
> **[0:40](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=40)** Finally, I added a send mail action.
>
> **[0:44](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=44)** The two line includes the smart value for watch your email addresses.
>
> **[0:48](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=48)** This time I remembered to hit the Enter key after typing the smart value, so the information was saved in the text field.
>
> **[0:55](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=55)** Next, I use smart values in the email subject line and content fields.
>
> **[1:00](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=60)** The content field supports HTML, so I added a hyperlink and some basic formatting.
>
> **[1:05](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=65)** Finally, I added a function to display the names of the watchers as a list.
>
> **[1:11](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=71)** Here's the issue I tested the rule with.
>
> **[1:14](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=74)** On the right sidebar there's one watcher, the current priority is high, and the automation panel shows multiple runs.
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=82)** I tested the rule multiple times by changing the priority from high to low and back again.
>
> **[1:28](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=88)** Here's the resulting email message with all the smart values noted.
>
> **[1:33](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=93)** Can you think of a use case I should have tested?
>
> **[1:36](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=96)** My example only has one watcher, but it would be a good idea to test with multiple to make sure they appear in list format at the bottom of the message.
>
> **[1:47](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=107)** Can you think of any ways to improve the rule?
>
> **[1:51](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=111)** How about limiting the JQL query to exclude statuses like done where the priority value is unlikely to change.
>
> **[1:59](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=119)** Or checking that the watcher's field has a value before trying to send an email message.
>
> **[2:05](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=125)** Next, the message copy doesn't tell the user why the notification matters or what action they should take, so that can definitely be improved.
>
> **[2:14](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=134)** I might also try to exclude the reporter and assignee if they're in the watcher's list because they're likely getting many issue change messages already.
>
> **[2:24](https://www.linkedin.com/learning/jira-administration-automation/solution-create-an-advanced-rule?u=76281980&t=144)** I'm sure you can think of some other potential improvements too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (3), hit (1), [[HTML]] (1), [[Automation]] (1)
> **Env Vars:** jql (2), html (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - were (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Automation with Apps

[↑ Back to Table of Contents](#table-of-contents)

#### Post functions with JMWE
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=0)** - In addition to built-in capabilities, you can also add automation functionality through third-party apps in the Atlassian Marketplace.
>
> **[0:09](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=9)** Apps allow all sorts of additional features through workflow behaviors, scheduled or event-based actions, triggered alerts and more.
>
> **[0:18](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=18)** You can even use apps to automate Jira configuration changes and the testing process.
>
> **[0:24](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=24)** Next, let's explore some automation capabilities provided by third-party apps.
>
> **[0:31](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=31)** For the first example, we'll automatically sync some information at a specific step in a workflow.
>
> **[0:38](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=38)** We'll trigger the automation using a transition post function.
>
> **[0:42](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=42)** The default post functions for every transition are shown.
>
> **[0:46](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=46)** Post functions are additional rules or actions that occur after a workflow transition.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=52)** They only execute if the transition succeeds.
>
> **[0:56](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=56)** For this example, I'll use one of my favorite Jira apps called Jira Miscellaneous Workflow Extensions or JMWE for short.
>
> **[1:06](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=66)** It's one of the first apps I used back in 2011, and its usefulness is still unmatched today.
>
> **[1:13](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=73)** It's available for cloud and data center.
>
> **[1:16](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=76)** Jira comes with some built-in post functions, but just look at all the additional highlighted ones that JMWE adds.
>
> **[1:24](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=84)** Here's a common use case I've experienced.
>
> **[1:27](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=87)** There's a large story for the development team.
>
> **[1:30](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=90)** It's broken down into subtasks, so it's easier to manage and work can be assigned to multiple developers, but sometimes the developers forget to check the parent story for important comments.
>
> **[1:43](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=103)** One solution is to copy the important information from the parent issue down to the child issues.
>
> **[1:50](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=110)** This is easy to do with JMWE's copy comments to related issues post function.
>
> **[1:56](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=116)** Here's a simple workflow used by the story and subtask issue types in a development Jira project.
>
> **[2:03](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=123)** The backlog status has a transition called Move To To Do, which simply changes an issue status.
>
> **[2:09](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=129)** The second transition called Move To To Do and copy comments also changes the issue status, but has an additional post function that copies the comments and the parent issue to any child issues.
>
> **[2:23](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=143)** The post function has many different abilities and settings to consider.
>
> **[2:27](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=147)** I can choose where to copy the comments, which comments to copy, and even use custom code to copy certain comments, but not others.
>
> **[2:36](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=156)** I can also select how to handle images and attachments, who can see the comments, and select other useful settings.
>
> **[2:44](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=164)** Now let's see the rule in action.
>
> **[2:46](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=166)** It's a post function, meaning its trigger is a specific workflow transition.
>
> **[2:51](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=171)** I'll transition this issue using the Move To To Do and copy comments option.
>
> **[2:57](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=177)** This issue has one comment.
>
> **[2:59](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=179)** After the transition, that comment is automatically copied down to the issue subtasks.
>
> **[3:05](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=185)** The additional information is communicated to the developers without any manual cut and paste action from the product manager.
>
> **[3:12](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=192)** This is a simple example, but as you can see, there's so much that just this one post function can do, and you can also build your own scripted conditions, validators, and post functions.
>
> **[3:24](https://www.linkedin.com/learning/jira-administration-automation/post-functions-with-jmwe?u=76281980&t=204)** The possibilities for workflow automation are endless.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[Automation]] (4), [[Atlassian]] (1), next (1), cloud (1)
> **Tools:** jira (5)
> **Env Vars:** jmwe (3)
> **Definitions:** is a  (2)
> **Speakers:** - in (1)

#### Scheduled actions with JMWE
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=0)** - [Speaker] Next, let's look at scheduled actions in JMWE.
>
> **[0:04](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=4)** A schedule action is one or more post-functions run on issues in a JQL query on a recurring schedule.
>
> **[0:13](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=13)** Here's this example's use case.
>
> **[0:15](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=15)** At one company, external users call-in to report problems.
>
> **[0:20](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=20)** The customer service team files bugs in Jira on their behalf, but because the callers aren't Jira users, they can't access the issue to view their status or receive email updates.
>
> **[0:32](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=32)** Luckily, the JMWE app can send email notifications to any email address.
>
> **[0:38](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=38)** Here's a rule I created to send an email update to an external user once a day.
>
> **[0:43](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=43)** As you can see, the user interface is similar to the Jira Cloud Rule Builder.
>
> **[0:49](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=49)** First, select the run frequency.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=52)** This rule is scheduled to run once a day at 5:00 PM Eastern.
>
> **[0:56](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=56)** You can trigger rules to run as often as every 10 minutes.
>
> **[1:00](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=60)** Next, select the scope of the issues to include using JQL.
>
> **[1:05](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=65)** Since Jira data is leaving the organization and going to external email accounts, I should be really careful here.
>
> **[1:12](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=72)** For now, I've hard-coded specific issue IDs.
>
> **[1:16](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=76)** In the future, I might make the query more dynamic, but still error on the side of caution by requiring a certain piece of data to be present like a specific label.
>
> **[1:28](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=88)** Next, select the rules actor or user to run as.
>
> **[1:32](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=92)** Finally, configure the rules action.
>
> **[1:35](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=95)** There are many built-in options to use.
>
> **[1:38](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=98)** This rule uses the email issues action.
>
> **[1:42](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=102)** Here are the specific settings.
>
> **[1:44](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=104)** First, select the issues to include, then enter the email subject line and content for the text and HTML messages.
>
> **[1:53](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=113)** You can use placeholders here, which are similar in format to smart values.
>
> **[1:58](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=118)** Then set a recipient email address and select any other desired settings.
>
> **[2:04](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=124)** Here's the result.
>
> **[2:06](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=126)** Updates for the two issues in scope were emailed as expected.
>
> **[2:10](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=130)** I've underlined the placeholders in the example on the right.
>
> **[2:14](https://www.linkedin.com/learning/jira-administration-automation/scheduled-actions-with-jmwe?u=76281980&t=134)** The content that appears under the custom message is all determined by Jira, not something that I added.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), next (3), data (2), cloud (1), [[HTML]] (1)
> **Env Vars:** jmwe (2), jql (2), html (1)
> **Tools:** jira (5)
> **UI Navigation:** select the (4)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Warnings:** caution (1)
> **Prerequisites:** configure (1)

#### Event-based actions with JMWE
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=0)** - Here's one more JMWE example showing event-based actions.
>
> **[0:05](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=5)** These actions run when something specific happens in a Jira issue, like an edit or transition.
>
> **[0:12](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=12)** In the "Updating Information" section of this course, I showed you how to create an automation that counts how many times testing failed.
>
> **[0:20](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=20)** This was accomplished by incrementing a custom number field.
>
> **[0:24](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=24)** For this example, I built the exact same use case in JMWE so you can compare it to the implementation in Jira Cloud's automation.
>
> **[0:34](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=34)** The JMWE app is on the left and the cloud rule you've already seen is on the right.
>
> **[0:40](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=40)** The trigger for both rules is an issue transitioned from one status to another.
>
> **[0:45](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=45)** JMWE has a couple extra settings to prevent infinite loops caused by other automated actions.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=52)** Next, the scope is set on the left by selecting a Jira project and an issue type.
>
> **[0:58](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=58)** On the right, the issue type is set by an issue fields condition.
>
> **[1:02](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=62)** And the project is selected in the rule details area.
>
> **[1:06](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=66)** Both options support scoping with JQL statements and code.
>
> **[1:12](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=72)** Finally, the action is to increment a value in a custom number field.
>
> **[1:16](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=76)** On the left, this was accomplished using a built-in increased field value function, and you can also do it with code.
>
> **[1:24](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=84)** On the right, this was accomplished with a smart value within JSON code.
>
> **[1:29](https://www.linkedin.com/learning/jira-administration-automation/event-based-actions-with-jmwe?u=76281980&t=89)** Both methods achieve the same result of incrementing a custom field when an issue is transitioned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Automation]] (2), cloud (2), next (1), [[JSON]] (1)
> **Env Vars:** jmwe (4), jql (1), json (1)
> **Tools:** jira (3)
> **Definitions:** is an  (1)
> **Speakers:** - here (1)

#### Monitoring config changes with Salto
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=0)** - Now, let's examine a different kind of automation.
>
> **[0:04](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=4)** As a Jira admin, I want to know when other admins make certain changes to the application's configuration settings.
>
> **[0:11](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=11)** Now, my application already has too many custom fields, and I don't want anymore if I can help it.
>
> **[0:17](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=17)** Jira Cloud's built in automation detects changes in Jira issues, but not changes in the configuration.
>
> **[0:24](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=24)** Luckily, there's an app that can do it.
>
> **[0:27](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=27)** Salto provides automated configuration management for enterprise applications.
>
> **[0:33](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=33)** Their solution automatically extracts the configs of different business applications like Jira, Salesforce, and NetSuite.
>
> **[0:40](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=40)** So you can search the configuration, manage change, and copy changes between test and production applications.
>
> **[0:48](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=48)** One of the features of the Salto configuration manager for Jira app is it sends alerts for Jira configuration changes.
>
> **[0:56](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=56)** This way, you can identify unauthorized or unplanned modifications quickly.
>
> **[1:01](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=61)** Here are a few examples.
>
> **[1:03](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=63)** I'll use Salto to send me an alert via email if a new custom field is created, if a user is added to a security level in an issue security scheme, or if a project role is modified in any way.
>
> **[1:17](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=77)** Salto can also send Slack messages.
>
> **[1:20](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=80)** Here's the Salto app, which runs on its own website.
>
> **[1:23](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=83)** You simply connect it to your Jira cloud or data center application and fetch the configuration settings.
>
> **[1:30](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=90)** Again, we're not talking about managing issue data.
>
> **[1:33](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=93)** We're talking about Jira's global options, schemes and settings.
>
> **[1:38](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=98)** The first alert I've created is to catch new custom field creations.
>
> **[1:42](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=102)** Salto can listen for modifications, additions, deletions, or all three.
>
> **[1:48](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=108)** Simply select or enter the name of the element to watch for.
>
> **[1:52](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=112)** I've selected elements that match a pattern using Salto's query language.
>
> **[1:57](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=117)** Then, select how to be notified and any additional options.
>
> **[2:02](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=122)** In the next example, I'm monitoring for a change to users in issue security schemes.
>
> **[2:08](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=128)** My most sensitive issues are protected with issue security, so I wouldn't want the wrong users added in the wrong place.
>
> **[2:16](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=136)** In the final example, I'm interested in any modification, addition, or deletion of a project role.
>
> **[2:23](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=143)** I've selected elements using Salto simple selection method.
>
> **[2:28](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=148)** As you can see, it's easy to select which changes produce alerts.
>
> **[2:32](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=152)** Here's the alert message as an email.
>
> **[2:35](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=155)** It even includes a handy PDF attachment to save for your records.
>
> **[2:39](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=159)** It shows that a project role named Execs was added.
>
> **[2:43](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=163)** The Jira application already has a global group with the same name, so I should check with my fellow admins to see why this was added and if it's really needed.
>
> **[2:52](https://www.linkedin.com/learning/jira-administration-automation/monitoring-config-changes-with-salto?u=76281980&t=172)** Also, I should remind them to provide more useful descriptions for Jira objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), application (4), [[Security]] (4), [[Automation]] (2), cloud (2)
> **Tools:** jira (10), slack (1)
> **CLI Commands:** make (1)
> **Env Vars:** pdf (1)
> **Cross-References:** in the next (1)
> **Speakers:** - now (1)

#### Test management with Katalon
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=0)** - Finally, let's demo an automated testing process using Katalon Studio, which integrates with Jira through a Marketplace app.
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=8)** As a Jira administrator, I need to verify standard application functions anytime we do configuration cleanups, routine maintenance, app installations or removals, upgrades, or conduct quarterly audits.
>
> **[0:22](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=22)** I created 40 test cases to test Jira.
>
> **[0:25](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=25)** After years of perfecting and streamlining the test cases, it still took a few hours to run them and document the results.
>
> **[0:33](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=33)** Now, a few hours might not sound like much, until you add up all the activities that triggered the need for this testing.
>
> **[0:40](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=40)** I estimated that I was spending 80 hours a year just making sure Jira was functioning as expected.
>
> **[0:46](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=46)** That's crazy.
>
> **[0:47](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=47)** So, I started looking for ways to automate repeated maintenance tasks.
>
> **[0:52](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=52)** The tool I like best is Katalon Studio, and I've used it to automate my 40 Jira application test cases.
>
> **[1:00](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=60)** What once took me hours to complete manually runs in under three minutes.
>
> **[1:05](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=65)** Katalon has both free and paid versions.
>
> **[1:08](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=68)** It includes a desktop application, a web component on their website, and an app in the Atlassian Marketplace to connect test cases to Jira issues.
>
> **[1:19](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=79)** As a very simple sample, I'll show you a test case that simply checks the custom field count so I can make sure no one was sneaky and added new fields overnight.
>
> **[1:29](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=89)** I'll also show you how that test case is connected to a Companion Jira issue.
>
> **[1:34](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=94)** I built a very simple example test case in the Katalon Desktop app.
>
> **[1:39](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=99)** When I run the test case, it automatically launches a browser, enters my login credentials, and navigates to the Custom Fields page in the Issues Admin area.
>
> **[1:49](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=109)** Then, it looks for the field count displayed on the page.
>
> **[1:53](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=113)** If the count is the number expected, the test passes.
>
> **[1:57](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=117)** Katalon closes the browser, logs a custom message to the desktop client, and sends an email report with success or failure details.
>
> **[2:06](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=126)** As you can see in the console, the test passed and took less than a minute to run.
>
> **[2:11](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=131)** Here's the Test Suite Results email notification.
>
> **[2:14](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=134)** I could also forward this data to record it in Jira if desired.
>
> **[2:18](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=138)** Finally, here's a brief look at the Jira integration piece.
>
> **[2:22](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=142)** From the Katalon Studio website, I'll click on Tests to access my test cases.
>
> **[2:27](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=147)** This example test case is linked to its Companion Jira issue.
>
> **[2:32](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=152)** Live statistics about test case runs are displayed.
>
> **[2:35](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=155)** From here, I'll open the linked Jira issue.
>
> **[2:38](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=158)** Additional information is displayed in a panel on the right sidebar labeled Katalon Platform.
>
> **[2:44](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=164)** The examples in this section are super simple, and, in no way, do any of these applications any justice.
>
> **[2:52](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=172)** They all do so much more and each could easily have their own course.
>
> **[2:56](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=176)** The point is to encourage you to consider different types of automation options from Jira, the Atlassian Marketplace, or other third party software.
>
> **[3:06](https://www.linkedin.com/learning/jira-administration-automation/test-management-with-katalon?u=76281980&t=186)** In the next section, I'll share some helpful resources, so you can further experiment and continue learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (12), application (3), [[Atlassian]] (2), web (1), data (1)
> **Tools:** jira (12)
> **UI Navigation:** click on (1), open the (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - finally (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Additional resources for Jira learning
> [LinkedIn Learning](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=0)** - Congrats on completing the course.
>
> **[0:02](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=2)** I hope you're excited to try automation or enhance some existing rules in your test application.
>
> **[0:08](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=8)** You should now be able to build custom rules to reduce manual work and human error, extend capabilities with smart values and placeholder variables, and leverage built-in capabilities or automation apps from the Atlassian marketplace.
>
> **[0:25](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=25)** Here are some additional resources so you can continue learning.
>
> **[0:30](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=30)** For cloud, visit this documentation area to learn more and access the list of available smart values.
>
> **[0:37](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=37)** The documentation area for data center is available at confluence.[atlassian.com/automation](https://atlassian.com/automation).
>
> **[0:44](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=44)** Don't forget to download all the course handouts from the exercise file area in LinkedIn learning.
>
> **[0:51](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=51)** As a reminder, here's the special area of my website where I'll post corrections, updates, and new information for this course.
>
> **[0:59](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=59)** Next, there's always more to learn and new features are added all the time.
>
> **[1:03](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=63)** You'll find many admin learning resources in the "9 Ways to Learn Jira Administration" article on my website.
>
> **[1:11](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=71)** To learn more about the strategy of configuring your application, check out my books.
>
> **[1:17](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=77)** The Jira Strategy Admin Workbook saves time, money, and frustration.
>
> **[1:22](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=82)** Now, this book is different. It's not documentation, it's recommendations from years of cleaning up horrible Jira configurations.
>
> **[1:30](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=90)** It's about what you should do, shouldn't do, and why.
>
> **[1:33](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=93)** Get books, worksheets, and additional materials at [jirastrategy.com](https://jirastrategy.com).
>
> **[1:40](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=100)** Also, check out my other Jira and Confluence courses for users and admins right here on LinkedIn.
>
> **[1:47](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=107)** If you like this course, you'll love managing custom workflows.
>
> **[1:51](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=111)** It's a deep dive into building smart workflows that your business development and support teams will actually use.
>
> **[2:00](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=120)** If you have questions, I'd love to hear from you.
>
> **[2:02](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=122)** Use the Q and A feature, email me directly, or connect in social media.
>
> **[2:08](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=128)** I hope you've enjoyed this Jira automation course as much as I've enjoyed creating it.
>
> **[2:14](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=134)** Now it's time to get your course completion certificate.
>
> **[2:17](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=137)** When you share your certificate, tag me so I can celebrate your accomplishment and share it with my network too.
>
> **[2:24](https://www.linkedin.com/learning/jira-administration-automation/additional-resources-for-jira-learning?u=76281980&t=144)** Good luck with your Jira journey, and I'll see you online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[Automation]] (4), application (2), [[Atlassian]] (2), [[Confluence]] (2)
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