---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: jira-managing-custom-workflows
url: "https://www.linkedin.com/learning/jira-managing-custom-workflows"
duration_minutes: 101
duration: 1h 41m
level: Beginner
updated: 1/19/2024
learners: 21693
skills:
  - Workflow Management
  - Jira
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGJQsMwQ2WQqQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705541045172?e=2147483647&amp;v=beta&amp;t=u5IghhJ488z95uTS70PBPZCwQYfjRa-Zq9j8OqfcDFQ"
linkedin_topic: DevOps
learning_paths:
  - '[[Mastering Jira Administration]]'
prev_courses:
  - '[[Jira- Advanced Administration]]'
next_courses:
  - '[[Jira Administration- Automation]]'
path_nav: '[{"path":"Mastering Jira Administration","position":5,"total":7,"prev":"Jira- Advanced Administration","next":"Jira Administration- Automation"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/network-and-system-administration
  - skill/workflow-management
  - skill/jira
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Jira-%20Managing%20Custom%20Workflows.md)

![Jira: Managing Custom Workflows](https://media.licdn.com/dms/image/v2/D560DAQGJQsMwQ2WQqQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1705541045172?e=2147483647&amp;v=beta&amp;t=u5IghhJ488z95uTS70PBPZCwQYfjRa-Zq9j8OqfcDFQ)

# Jira: Managing Custom Workflows

> In this course, you’ll learn how to create smart workflows that your business, development, and support teams will love to use with the popular project management tool Jira. Find out how a well-designed Jira workflow can—and should—complement a team’s process, not dictate it.Instructor Rachel Wright provides an in-depth overview of the skills required to design, plan, and build workflows as both a

> [LinkedIn Learning](https://www.linkedin.com/learning/jira-managing-custom-workflows) | 1h 41m | Beginner | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Custom workflows in Jira](#custom-workflows-in-jira)
  - [Who is this course for?](#who-is-this-course-for)
  - [What do you need for this course?](#what-do-you-need-for-this-course)
- [**1. Using Custom Workflows**](#1-using-custom-workflows) (6 videos)
  - [Important terms and definitions](#important-terms-and-definitions)
  - [Important workflow concepts](#important-workflow-concepts)
  - [Types of workflows](#types-of-workflows)
  - [Workflow relationships](#workflow-relationships)
  - [Challenge: Configure a workflow relationship](#challenge-configure-a-workflow-relationship)
  - [Solution: Configure a workflow relationship](#solution-configure-a-workflow-relationship)
- [**2. Planning Custom Workflows**](#2-planning-custom-workflows) (7 videos)
  - [Using a phased approach](#using-a-phased-approach)
  - [Conducting a workflow interview](#conducting-a-workflow-interview)
  - [Determining statuses](#determining-statuses)
  - [Adding transitions](#adding-transitions)
  - [Designing a custom workflow](#designing-a-custom-workflow)
  - [Challenge: Workflow interview and design](#challenge-workflow-interview-and-design)
  - [Solution: Workflow interview and design](#solution-workflow-interview-and-design)
- [**3. Building Custom Workflows**](#3-building-custom-workflows) (5 videos)
  - [Translating requirements](#translating-requirements)
  - [Creating new workflows](#creating-new-workflows)
  - [Importing, exporting, and backing up](#importing-exporting-and-backing-up)
  - [Challenge: Reconstruct this workflow](#challenge-reconstruct-this-workflow)
  - [Solution: Reconstruct this workflow](#solution-reconstruct-this-workflow)
- [**4. Extending Workflow Capabilities**](#4-extending-workflow-capabilities) (7 videos)
  - [Using triggers, conditions, validators, and post functions](#using-triggers-conditions-validators-and-post-functions)
  - [Requiring approval](#requiring-approval)
  - [Leveraging automation](#leveraging-automation)
  - [Expanding with apps](#expanding-with-apps)
  - [Using properties](#using-properties)
  - [Challenge: Enhance this workflow](#challenge-enhance-this-workflow)
  - [Solution: Enhance this workflow](#solution-enhance-this-workflow)
- [**5. Best Practices**](#5-best-practices) (3 videos)
  - [Workflow recommendations](#workflow-recommendations)
  - [Challenge: Workflow scavenger hunt](#challenge-workflow-scavenger-hunt)
  - [Solution: Workflow scavenger hunt](#solution-workflow-scavenger-hunt)
- [**Conclusion**](#conclusion) (1 videos)
  - [Additional resources for Jira learning](#additional-resources-for-jira-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Custom workflows in Jira](https://www.linkedin.com/learning/jira-managing-custom-workflows/custom-workflows-in-jira?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/custom-workflows-in-jira?u=76281980&t=0)** As a [[Jira]] administrator and consultant, I've seen plenty of horrendous workflows. When workflows are too complex, too customized, and don't accurately reflect a team's real-life process, people hate using Jira. In this course, you'll learn how to design smart processes and translate them into Jira workflows, build custom workflows that support an organization's specific needs, understand key workflow settings and what Jira is doing in the background, save time and effort using triggers, conditions, validators, and post functions, keep work flowing with transitions screens, approvals, and properties, extend capabilities with automation and apps, and more. Hi, I'm Rachel Wright, certified Jira administrator and author of the Jira Strategy Admin Workbook. Join my [[LinkedIn]] Learning course to learn how to build smart workflows that your [[Business Development]] and support teams love to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6), [[LinkedIn]] (1), [[Business Development]] (1)
> **Tools:** jira (6)

#### [Who is this course for?](https://www.linkedin.com/learning/jira-managing-custom-workflows/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/who-is-this-course-for?u=76281980&t=0)** This course helps new and experienced [[Jira]] administrators design, build, and maintain custom processes and workflows. It's also useful for anyone who's interested in improving team efficiency, fostering cross-team communication, managing business pipelines, passing audits, smoothing handoffs between users and teams, or improving time to market. The needs of the organization are best achieved when application administrators and business managers work together. The content in this course applies to Jira Work Management, Jira Software, Jira Service Management, and Jira Product Discovery. While the application types have different workflow capabilities, the building and management concepts are the same. I'll point out any major feature differences along the way. For example, Jira Service Management has additional built-in approval capabilities. The content also applies whether you have Jira cloud, server, or data center. Just be aware that there are slight feature terminology and user interface differences between the deployment types. Now don't worry if your application looks different than mine. You might have different colors, a different layout and customization specific to your company. If you're new to Jira administration, take my basic and advanced administration courses first. This course builds on those courses and assumes you already
>
> **[1:35](https://www.linkedin.com/learning/jira-managing-custom-workflows/who-is-this-course-for?u=76281980&t=95)** know how to configure Jira-specific application settings and all the standard schemes in Jira projects. This course provides a comprehensive guide for custom workflow features, functions, and strategies for creating, extending, and maintaining them. Also, sometimes administrators are new to end-user concepts as well. If you're an infrequent Jira user or want to learn more about what your end users experience, take my end-user courses as well. There's a version of learning Jira for cloud and another version for server and data center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (12)
> **Tools:** jira (12)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)

#### [What do you need for this course?](https://www.linkedin.com/learning/jira-managing-custom-workflows/what-do-you-need-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/what-do-you-need-for-this-course?u=76281980&t=0)** Ideally, you've been managing [[Jira]] for a while and have experience creating projects, configuring existing schemes, and creating new custom schemes when necessary. All you need for this course is admin access to a Jira application. It's also helpful to have a test environment so you can make changes without impacting production. The test environment options are detailed in Section 3 of my Jira Basic Administration course. It's really hard to keep up with software changes, especially with cloud software. New features are added, moved, or changed all the time. Existing features or even entire [[Microsoft Products|products]] are renamed, and links that worked yesterday are broken today. That's why I've set up a special place on my website where you can get the latest course information. When something impactful to the course changes, I'll post that information at the URL shown. Now's a good time to bookmark that location. Go ahead. I'll wait. Oh, and one last thing. For some of you, I speak too slowly, and for others I speak too fast. Luckily, the [[LinkedIn]] video player has some useful features to help you move at your own pace. On the bottom left, use the skip-back icon to rewind 10 seconds and hear information again. On the bottom right, use the 1x icon to increase or decrease the speed. Also, consider using the captions feature if that's helpful.
>
> **[1:35](https://www.linkedin.com/learning/jira-managing-custom-workflows/what-do-you-need-for-this-course?u=76281980&t=95)** Finally, I also recommend opening your test application in a separate browser window so you can follow along with me. Just pause the video, explore the same area in your application and come on back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (3), [[Microsoft Products|Products]] (1), [[LinkedIn]] (1)
> **Tools:** jira (3)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Prerequisites:** set up (1)


### 1. Using Custom Workflows

[↑ Back to Table of Contents](#table-of-contents)

#### [Important terms and definitions](https://www.linkedin.com/learning/jira-managing-custom-workflows/important-terms-and-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/important-terms-and-definitions?u=76281980&t=0)** Before we get started, I wanted to refresh your memory of some terms from previous courses and introduce some new terms for this course. An issue is an individual item in [[Jira]]. Each time you create an item, you're creating a new issue with a unique key to identify it. A project is a collection of issues. Now the [[Microsoft Word|word]] project in Jira is different than an initiative your team is working on outside of Jira. Think of a Jira project as a container for all your team's initiatives, tasks, and To-Do items. The Jira service management application type has requests. Requests are how Jira issues are represented on the self-service portal to customers or end users. In other words, a request is a simplified view of issue data. Here's an example trouble report for a problem with the mail server. On the left is the issue view in Jira, and on the right is the request view in JSM. It's important to note that both views represent the exact same trouble report. There's only one unique record in the database for it. An issue type is a classification of issues in a Jira project. Each Jira project can have its own set of issue types based on the type of work done. Issue types give the ability for different issues to have different workflows. We'll talk more about this capability later in the course. A scheme is a configuration or collection of settings.
>
> **[1:36](https://www.linkedin.com/learning/jira-managing-custom-workflows/important-terms-and-definitions?u=76281980&t=96)** A scheme allows you to use settings differently in the same Jira project, or share settings between multiple projects. Schemes only apply to company-managed projects in cloud and all projects in server and data center. Team-managed projects in cloud are schemeless. A workflow is a visual representation of a process. It contains a sequence of standard steps that each issue must go through to be completed. Each step of the process is represented by a status which describes an issue's current state. Transitions are used to move issues forward or backward in the process. And finally, workflow transitions have what I call behaviors. [[Atlassian]] sometimes calls these rules or workflow extensions. These specify what happens in the background when issues transition from one status to another. This course contains a lot of Jira-specific terminology. I've made a glossary to help you with it for this course and when navigating the Atlassian ecosystem. Download my handout from the exercise files area in [[LinkedIn]] Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (11), [[Atlassian]] (2), [[Microsoft Word|Word]] (1), [[LinkedIn]] (1)
> **Tools:** jira (11)
> **Definitions:** is a  (5), is an  (1), in other words (1)
> **Env Vars:** jsm (1)
> **Cross-References:** later in (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)

#### [Important workflow concepts](https://www.linkedin.com/learning/jira-managing-custom-workflows/important-workflow-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/important-workflow-concepts?u=76281980&t=0)** In the Basic Administration course, we discussed some high-level workflow concepts like active, inactive, and draft workflows, and the diagram and text workflow editors. Feel free to jump back to Section 6 of that course for a refresher. [[Jira]] cloud has two project administration types; company-managed and team-managed. Company-managed projects use schemes that are managed by Jira administrators. Team-managed projects are schemeless and are managed by regular users. The user and admin interface is slightly different between the two options. The biggest difference is the workflow editor. Let's take a quick tour of the visual and functional differences. The company-managed editor has both a visual and a text mode. In text mode, add statuses using the Add New Step form at the bottom of the page. Click a transition to add behaviors like triggers, conditions, validators, and post functions. There are over 50 behaviors and you can install third-party apps to get more. You can also manage statuses and transitions in diagram mode. For example, add a screen during a transition. The team-managed workflow builder has a simplified interface. Click the buttons at the top to add statuses, transitions, and built-in rules to automate repetitive actions.
>
> **[1:37](https://www.linkedin.com/learning/jira-managing-custom-workflows/important-workflow-concepts?u=76281980&t=97)** Statuses added here are local to the workflow. They are not added as global statuses to share with other workflows. This type of workflow only has seven behaviors to control workflow actions. The settings are simple, and end users can manage workflows and other settings in team-managed projects. Again, these types of projects don't have schemes. Finally, let's compare what the end user sees. The first example is an issue and a company-managed project. The second example is an issue in a team-managed project. In company-managed projects in cloud and all project types and server and data center, project-level abilities are controlled in permission schemes. The administer projects permission grants abilities to manage components, versions, users, and some project details. Server and data center has an extra permission scheme setting called Extended Project Administration. This gives project-level admins the ability to edit workflows and screens under certain conditions. The conditions for limited workflow editing are: The workflow cannot be shared with other Jira projects or be a default system workflow. Project admins can add a status to the workflow, but the status must already exist in Jira. Only application administrators can create or edit statuses. Project admins can remove a status,
>
> **[3:10](https://www.linkedin.com/learning/jira-managing-custom-workflows/important-workflow-concepts?u=76281980&t=190)** but only if it isn't used by any project issues. Finally, the project admin can create, edit, and delete transitions, but they can't select or change transition screens, edit transition properties, or edit behaviors like conditions, validators, or post functions. Let's take a quick look at the project admin area. When the extended project administration is enabled, a project-level admin sees an edit button when viewing a project's workflow. Project admins can add statuses that exist in Jira and add, edit, or remove transitions. In this example, I added the pending global status and one incoming transition. In this example, the project admin cannot edit the workflow because it's already used by multiple projects. In this example, the project admin can't edit the workflow because the extended project administration ability is not enabled in the permissions scheme. This project admin sees a read-only tag. So assuming extended project administration is enabled, which of these workflows will a project administrator be able to edit? The first example is a default system workflow. No one, not even application administrators can edit it. The next workflow is used by multiple schemes, meaning it's shared with multiple Jira projects. Project-level admins cannot edit shared workflows.
>
> **[4:46](https://www.linkedin.com/learning/jira-managing-custom-workflows/important-workflow-concepts?u=76281980&t=286)** The final example is not a system workflow, and it's not shared with multiple projects. A project-level admin can modify this workflow using the extended project administration feature in server and data center.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6)
> **Tools:** jira (6)
> **Definitions:** is an  (2), is a  (1)
> **Cross-References:** we discussed (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)

#### [Types of workflows](https://www.linkedin.com/learning/jira-managing-custom-workflows/types-of-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/types-of-workflows?u=76281980&t=0)** All application types come with templates to help quickly build new [[Jira]] projects. Here are some examples in cloud. There are many project templates to choose from, and you should pick the one that most closely represents how the project will be used or who's using it. Who this template is for and what it contains is shown on the right sidebar. It's important to choose a template with settings and workflows close to a team's real-life process. This makes configuring and customizing the project easier for you. When a project is created, Jira automatically creates new schemes and settings for it. This template has a workflow status called concepting. Now this is not a default Jira status, so if I choose this template, Jira creates it. Some templates create custom issue types and custom fields too. Now that's great if you plan to use all those values, but if you don't, it's unnecessary configuration data to clean up later. To understand the specifics of each template, I create sample projects in my test environment. Then I can try out different templates and see their configuration impact before deciding. In previous courses, we looked at some simple task, bug tracking, and development build workflows. In this course, let's explore some different and more complex examples from built-in templates. And since my Jira focus is always about strategy, I have some opinions to share.
>
> **[1:33](https://www.linkedin.com/learning/jira-managing-custom-workflows/types-of-workflows?u=76281980&t=93)** We'll see if you agree or not. In this first example, there's a status called reopened. There are many ways to accomplish things in Jira. I find that issues sometimes get stuck in a status called reopened, because everyone's focused on issues in the initial open status. Instead of a dedicated status, you could use a workflow post function or an automation to instead fill in a custom field, or maybe add a label to issues that were reopened. I'll show you how to do this later in the course. At one company, I incremented account in a number field to track how many times an issue was reopened. Now that might be overkill for your situation. The method you use to handle reopened issues depends on how frequently it occurs and whether re-open issues represent a problem at your organization. I also noticed that the work in progress status is misaligned, causing a crooked transition arrow above and below it. This doesn't impact the workflow functionality at all, but it drives me crazy when the lines aren't straight. To fix them, simply edit the workflow and republish it. I'm viewing a read-only version of the workflow, so any changes here aren't saved. Next, let's look at some service management workflows. Here's an [[IT Service Management]] customer portal. I'll select the "Get IT help" option, which is a simple catch-all type of request form. This form only has a few fields and should be very easy for the
>
> **[3:10](https://www.linkedin.com/learning/jira-managing-custom-workflows/types-of-workflows?u=76281980&t=190)** user to make their request. Now let's go look at this request form's workflow. This is a team-managed project. Notice that the path to reach the workflow is different than the last example. Since there's no workflow scheme, go to the request type to access its workflow. Wow. Did you expect the default workflow for this simple request to be so complex? Well, I didn't. As a Jira admin, my next task would be to determine if this workflow can be streamlined, if I should create a different workflow, or if it's all right the way it is. As always, you need to balance what's right for the needs of your users and the long-term health of the Jira application. Now let's look at a workflow from a work management template. This workflow is for employee onboarding. At first glance, it looks just fine, but I have some observations to share. When an issue was created, it's in a custom status called Signed Offer. Now I'm wondering what the value of the wording signed offer brings that the standard, to-do, or any other standard initial workflow status brings. I try to only create statuses that are generic enough to be used by other teams. So my first question is, why does the status exist and what application or business value does it bring? The next two statuses are awfully specific too. I'm wondering if those tasks could be done concurrently,
>
> **[4:47](https://www.linkedin.com/learning/jira-managing-custom-workflows/types-of-workflows?u=76281980&t=287)** or if IT provisioning can only start after the employee documentation step is complete. Additionally, I'm wondering if there are other onboarding tasks that don't fall into the categories of documents or provisioning. So, for example, what if a new [[Microsoft Office|office]] chair or a company credit card or security badge for the on-site gym is needed for this new hire? Where's the status to represent those actions? Instead of a million statuses for all the possibilities, you might consider combining those two steps and using subtasks to track all the things that might be needed for the user. Using this strategy, you could represent those middle statuses using the standard in-progress status. For the final status, again, what's the value in creating a custom-worded status? Why wouldn't the standard done suffice? Also, what happens if the employee starts the onboarding process but is on onboarded? Now, maybe that would never happen at your company, but it's your job as a Jira admin to think of all the alternate scenarios and make sure the workflow supports those possibilities. And of course, the inconsistent visual spacing between the statuses bothers me, so I'd fix that next time the workflow needed a modification. Now let's look at some workflow templates in server and data center. The workflow has four green final statuses;
>
> **[6:19](https://www.linkedin.com/learning/jira-managing-custom-workflows/types-of-workflows?u=76281980&t=379)** canceled, rejected, approved, and done. As a reminder, in all types of Jira, statuses are classified into one of three categories; to-do, in progress, or done. The category names and colors are not customizable. These categories help visually communicate where issues are in their life cycle. Issues in a to-do status category or at the beginning of the workflow, issues in an in-progress status category or in the middle, and issues in a done status category or towards the end. I personally, I don't like multiple green statuses in a single workflow. I believe there should be only one final status that indicates all work is done. I've found that once issues reach a green status, users forget that they exist. Will users remember to move issues in the approved status to the done status? Sometimes, but not always. Instead of multiple green statuses, I'd use Jira's built-in resolution feature to collect the reason why or how an issue is in its final status. In this example, the resolution choices would be approved, rejected, or canceled. Well, that seems cleaner to me, but do what's best for your situation. If you use multiple green statuses, you'll need to train people to use the right JQL. For example, if the statement is status = done, only one issue is returned,
>
> **[7:54](https://www.linkedin.com/learning/jira-managing-custom-workflows/types-of-workflows?u=76281980&t=474)** even though there are more issues that have reached the end of their life cycle. Reports using this type of query are misleading. Instead, it's safer to use the status category = done JQL, which returns all issues in a green status. Do you see any other potential problems with this workflow? I see an issue with PROC-4. If an issue is in the rejected status, there's no resolution collected or set in the background. There's no more work for the user to do for PROC-4, yet from Jira's perspective, the issue is unresolved and is likely to languish in that state. Again, this leads to inaccurate reporting. One last opinion about this workflow. And as you know by now, these transition lines drive me crazy. I know my perfectionist ways may sound ridiculous, but put yourself in the shoes of an end user. Here's the original workflow, and here's the exact same workflow with small spacing and transition-line improvements. Which diagram is less intimidating? Which is easier to read? I think my version at the bottom is better, and I'll use any tricks I can to make use and adoption easier for end users. While we're talking about diagrams and transition lines, it's good to know that you can draw these any way you'd like, but regardless of how you do it, it's smart to develop a standard and stick to it.
>
> **[9:26](https://www.linkedin.com/learning/jira-managing-custom-workflows/types-of-workflows?u=76281980&t=566)** It makes diagrams easier for you and your user to decipher. For a vertical diagram like in the example, I like to draw all four transitions right down the middle of the statuses. Then I place all backward transitions to the left of the diagram. And for alternate transitions like skips, I place those to the right. This standard helps me and I encourage you to develop your own. Let's look at another workflow example. Here's a change request in Jira server or data center. The length of the peer review/ change manager approval status stands out to me. We can see all the characters in the workflow diagram, but let's see what this looks like to the end user. The status name is truncated in the issue and likely in additional areas of Jira. You'll need to hover over it to see the whole name. Instead, maybe there's a shorter name we could use. I'd probably change the status name to something like review, approval, or even review/approval. You can define who needs to do the work as part of your process, rather than try to embed it in a Jira status name. Plus, generic statuses increase the likelihood that statuses can be shared with other Jira projects or teams with similar processes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (16), [[IT Service Management]] (1), [[Microsoft Office|Office]] (1)
> **Tools:** jira (16)
> **Exercise Files:** template (6)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** jql (2), proc (2)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)

#### [Workflow relationships](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-relationships?u=76281980&t=0)** In company-managed projects in [[Jira]] Cloud and all projects in server and data center, the workflow to issue type relationship is managed by a workflow scheme. A scheme is simply a collection of settings. This example scheme shows the project has two different workflows. The workflow for parent tasks has steps for planning, approval, and other common lifecycle needs. Child tasks don't require the same complexity, so they have a very simple workflow. This one simple and one complex workflow model is very common, but it's not the only option. Let's explore the choices. Workflows can be assigned to single-issue types or multiple-issue types in a project. A Jira project can have a single workflow. That means that all issue types in the project share this one workflow, and it's the simplest of all the possibilities. A Jira project can also have multiple workflows. For example, there can be one workflow per issue type. This means the task workflow can have more steps, but the subtask workflow can stay simple or some issue types can use one workflow, while other issue types use another. Schemes give you the flexibility to develop the workflow to issue type mapping any way that you'd like. Jira projects only have one workflow scheme, but the scheme can be shared with multiple projects. In this example, all tasks and subtasks in the legal,
>
> **[1:34](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-relationships?u=76281980&t=94)** HR, and marketing project share the same workflow. Issue types can also have different workflows within multiple Jira projects. As you can see, schemes are very powerful, but they can also become unmanageable quickly. You probably don't need a different workflow for each issue type. You definitely don't need a different workflow for each issue type in each Jira project. Keep your settings simple until there's a real business need to introduce additional complexity. Let's review an example workflow scheme and its associated workflows. When I'm in a Jira project settings area, I like to start on the summary page to get a high-level overview of the project's configuration. Under the workflows header is the name of the workflow scheme and the names of the workflows it includes. Click the name of the scheme for additional details. This screen shows which issue types in the project use which workflows. To add a workflow, click the "Add Workflow" button at the top. In the overlay, choose the workflow and one or more issue types in the project. Now the task and subtask types use a different workflow. On this page, you can also edit a workflow or remove a workflow from the scheme. Don't forget to publish any workflow or scheme changes before you leave the page. You can also change the scheme powering the project by clicking
>
> **[3:09](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-relationships?u=76281980&t=189)** the "Switch Scheme" button. There's another interesting way to view the project scheme association I wanted to mention. Go back to the Project Summary page and click the name of the issue type scheme. This page shows a nice table view of each issue type's workflow, field configuration, and screen scheme. Let's discuss how workflows are shared between issue types in team-managed projects in Jira Cloud. Here's a simple business project. This company tracks staff in Jira instead of an external employee management system. The employee and task issue types share the same workflow. Let's make a workflow change and decouple the issue types while we're in the editor. Sometimes employees leave the company and end up coming right back, or their contract expires and they need to be re-onboarded. I'll add a rehire transition to the inactive status. I'll fix the transmission lines, and I'll use a rule to add a label so I can segment rehired employees. Then I'll click "Update workflow" to save my changes. In the overlay, I'll remove task so only the employee issue type uses this changed workflow. See the [[Atlassian]] documentation to learn more about managing workflows in team-managed projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Atlassian]] (1)
> **Tools:** jira (9)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Best Practices:** don't forget (1)

#### [Challenge: Configure a workflow relationship](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-configure-a-workflow-relationship?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-configure-a-workflow-relationship?u=76281980&t=5)** In this challenge, you'll create a new custom workflow scheme, add one or more new or existing workflows to it, and apply it to a company-managed development project. Go try this out in your test environment, then compare your implementation to my solution in the next section.

#### [Solution: Configure a workflow relationship](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-configure-a-workflow-relationship?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-configure-a-workflow-relationship?u=76281980&t=5)** Were you able to configure the workflow scheme and apply it to a [[Jira]] project? Here's how to do it. Go to the application admin area and create a new custom workflow scheme. Then add one or more workflows and associate them with the
>
> **[0:28](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-configure-a-workflow-relationship?u=76281980&t=28)** desired issue types. Next, select a development project and go to the project
>
> **[0:41](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-configure-a-workflow-relationship?u=76281980&t=41)** settings area. Go to the workflows area and use the Switch Scheme button to select the new scheme you created. If the project has existing issues, Jira will help you associate them with their new workflows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2)
> **UI Navigation:** go to (3)
> **Tools:** jira (2)
> **Prerequisites:** configure (1)


### 2. Planning Custom Workflows

[↑ Back to Table of Contents](#table-of-contents)

#### [Using a phased approach](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-a-phased-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-a-phased-approach?u=76281980&t=0)** Let's talk about the planning you should do before you create a custom workflow in the [[Jira]] application. That's right, log out of Jira, because building a custom workflow should always start on paper. Let's imagine your company is signing a partnership agreement with another company. It's a predictable process that requires a review of the contract by both parties and potential edits before final execution. Even though executing a partnership agreement is a standard activity, the legal team is likely doing many things in the background. This may be reviewing documents, researching previous contracts, internal policies or other legal topics, communicating with internal and external parties, negotiating terms with the external company, and more. But not all of those steps need to be represented in a Jira workflow. Instead, I used a phased approach. Simply break your process up into high-level phases that represent a collection of smaller steps. The phases represent key decision points. An issue can't be moved to another phase until the requirements of that phase have been satisfied. That way, each phase represents a status in Jira, and all the small steps in a phase don't also need to be statuses. In the initial new status, the team is preparing, researching, and doing whatever needs to happen so the legal team can start work. In the review status, the legal team is reviewing documents, carefully considering all the terms, and
>
> **[1:36](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-a-phased-approach?u=76281980&t=96)** communicating with internal and external stakeholders. Now here's a tip. A generically named status like review is better than a legal specific status name like contract review. This way, other Jira projects can use the generic status regardless of what thing needs to be reviewed. You want to share settings and schemes between projects as much as possible. In the modify status, the legal team is clarifying, negotiating, and updating terms until all partners are satisfied. In the sign status, the CEO is finding their favorite signing pen, both companies are trading paperwork, and the legal team is entering the final documents into their contract's database. In the final done status, there's nothing more to do in Jira except fulfill the agreement and maintain the relationship with the partner. So what do you think? Is it useful to create a status for every step that occurs in the contract's process? Do you need to track how many times the contract was modified during the review process? Do you need to track which parties have signed the agreement so far? If the answer is no, a phased approach may be more useful. And if you do need to track signatures, custom fields might be more useful than a status. But only create those fields if you're going to report on that piece of information. And one more tip, if you're not going to query for all issues in a certain status, that's a clue that that status may
>
> **[3:11](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-a-phased-approach?u=76281980&t=191)** not be necessary or useful either. Remember that complex workflow we reviewed in a previous section? Well, it's certainly possible to capture every little step in your workflow process and build that into a complex and long Jira workflow. But I don't recommend it. I once built a 20-step workflow, everyone hated it, and they probably hated me too. I learned very quickly that people were simply clicking through all the statuses as fast as they could, just to quickly get to the end. So those statuses provided no value at all. Now I know I showed you this diagram in my Jira Advanced Administration course, but it's just so horrible that I couldn't resist reminding you. Here's the longest workflow I've seen. And no, I did not build this one. There are 39 statuses and 1,700 transitions. This is a development workflow and it was used by all issue types and every project in their Jira application. The status names are blurry in this screenshot, but they were equally hard to read in Jira as well. This workflow is impossible to follow and hard to read, both for admins and users. The status names are long and truncated, and there are five statuses in the green category. It's just awful and I recommend you avoid this in your application. I worked with this customer and we were able to get this workflow down to seven statuses and 19 transitions. Their users and admins are much happier now and the company didn't
>
> **[4:46](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-a-phased-approach?u=76281980&t=286)** sacrifice participation or visibility.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10)
> **Tools:** jira (10)
> **Env Vars:** ceo (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)

#### [Conducting a workflow interview](https://www.linkedin.com/learning/jira-managing-custom-workflows/conducting-a-workflow-interview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/conducting-a-workflow-interview?u=76281980&t=0)** Before creating a new custom workflow, meet with your team member or client and have them explain their real-life process to you. I call this a workflow interview. This doesn't have to be super structured, just have a conversation and try to listen more than you talk. Here's an example. Well, hello. What do you have there? Oh, this is cranberry hibiscus tea. I grow the plant in my garden, then harvest the leaves, dry them, and the result is this wonderful and healthy tea. That sounds great. I love cranberry flavor. It is. I'll have to send you some. So tell me a little bit about your garden. How do you choose what plants to grow? Well, I'm new at this and I'm still learning. There are so many things that I want to grow, but the reality is that I need to narrow down my wish list to the current season and the plants that grow well in my area. So I need to do a lot of research before I plant anything. What happens after you've decided on the right plant? Then I decide where it will go in the garden based on space, light, and water needs. And sometimes I need to gather supplies like organic fertilizer or build a trellis for it to grow on. When do you plant the seeds? Once I have all my supplies, I can either start seeds or cuttings in the ground or in containers. I like containers because it's easier to control all the
>
> **[1:34](https://www.linkedin.com/learning/jira-managing-custom-workflows/conducting-a-workflow-interview?u=76281980&t=94)** variables like soil and the amount of water, and I can also move containers around to adjust for sun and temperature. What's the hardest part of the process? After the plants have grown, it's time to harvest them to propagate or make other [[Microsoft Products|products]] out of. So right now I just grow them for myself, but I might want to expand in the future. I've tested out a few farmers markets to see if there's interest in buying or trading them in the community. Do you do all your own labeling and printing? Yes, but it's only necessary if I give the plants away to friends, or if I decide to sell them in the future. Then what happens? There's always some sort of quality verification needed. Like for this tea, I made sure the leaves were cleaned before drying them and all the stems were removed. If I'm taking a plant to a farmer's market, I make sure it's trimmed, labeled, and it looks its best. Okay, so you've grown the plant, packaged it, and tested the product, now what? Right now I have a consulting job that I really like, so I use the plant myself or give it to friends and family. But in the future, I might sell them in the community or wholesale them to a local restaurant or farm. At this point, the process is done for the current plant. Now it's time to start it all over again, either with the same plant or a different one. That sounds like a lot of work. I'm really looking forward to helping you better manage this in [[Jira]]. Me too. Thanks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Jira]] (1)
> **CLI Commands:** make (2)
> **Tools:** jira (1)

#### [Determining statuses](https://www.linkedin.com/learning/jira-managing-custom-workflows/determining-statuses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/determining-statuses?u=76281980&t=0)** As a reminder, each status has a unique name, an optional description, and a status category. Statuses are global elements and are shared between workflows. Each step of the process is represented by a status which describes an issue's current state. The status, name, and color tells you whether an issue is at the beginning, middle, or end of its life cycle. In this section, we'll determine what workflow statuses are needed to represent our example process. After the workflow interview, write out the process in words. Here's a simplified narrative based on the info shared. Read this back to your colleague to make sure you've captured all the details. This can uncover additional steps they may have omitted or neglected to consider. Next, split the process narrative into logical phases to determine the statuses. Just like we did in a previous section, identify the high-level phases an issue must go through in its lifecycle. Every workflow needs an initial status. Since the user has research to do before work can begin, I'll recommend starting the workflow in the standard backlog status. After you've identified the first high-level step, look for the next one in the narrative. Phases often start or end when the type of work or the person performing it changes. In this example, the work shifts from initial research in the backlog status to planning or preparation work.
>
> **[1:36](https://www.linkedin.com/learning/jira-managing-custom-workflows/determining-statuses?u=76281980&t=96)** That logical change is a good place for a status change. When I'm breaking up a process into phases, I'm also thinking about future opportunities to collect data, automate a step, or how the process might impact other issues. Record any ideas now for when you build the workflow later. The next major phase change is when it's time to grow the plants. The custom status I'm suggesting is very specific to this type of work. Any time you create a custom status, make sure there isn't already an existing status that may work. For example, with the existing standard in progress status suffice, it's up to you to consider all the factors and decide. In this phase, I've identified an opportunity to collect additional plant data. It would be nice to report on whether seeds or cuttings have produced better plants, for example. Additionally, if seeds are planted, maybe there's an opportunity to reflect that information wherever seed counts are stored. This could be as simple as triggering an email reminder to update the inventory database, or to order more seeds, or maybe an integration can automatically update the inventory counts. Now this is overkill for this simple example, but it's good to think about how a workflow can help automate manual or repetitive tasks. The next phase shift is to harvest the plant. If you remember from the interview, the gardener has a full-time consulting job,
>
> **[3:09](https://www.linkedin.com/learning/jira-managing-custom-workflows/determining-statuses?u=76281980&t=189)** so this is a hobby. But since there's potential to expand the operation in the future, it's a good idea to plan for that now. The easiest way to handle this conditional step in the process is to allow the user to skip the status when it doesn't apply. Every configuration decision you make in [[Jira]] should consider today's needs and future needs for both users and the application. Whether it's gardening, [[Software Development]] or [[Customer Support]], most processes have some kind of validation or testing phase. Look through your application's existing statuses to see what similarly named options already exist. You may have options like under review, in testing, in review, or other options to reuse. Here's another example of a conditional step in the workflow. The user isn't ready for this phase now, but expects to use it one day in the future. Every workflow needs a final status to indicate no additional work is needed. Sometimes it makes sense to build the ability to reopen issues that have reached the end of their lifecycle. For example, if a bug wasn't properly fixed, reopen it and try again. In high-compliance environments, it might be appropriate to prevent changes to closed issues using workflow property. For this workflow, I think it makes sense to create new issues for new plants and use Jira's issue linking feature to link similar plants together.
>
> **[4:44](https://www.linkedin.com/learning/jira-managing-custom-workflows/determining-statuses?u=76281980&t=284)** This way, the gardener can treat each plant as its own entity, and over time, this data will show trends so the gardener can determine what variables and actions led to the most success. Here's our example process broken up into phases. The first half of the diagram contains all the steps from plant selection through harvest. The second half contains steps from packaging through completion. Next, we'll consider each phase a status and determine the needed transitions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[Software Development]] (1), [[Customer Support]] (1)
> **Analogies:** for example (3), just like (1)
> **CLI Commands:** make (3)
> **Tools:** jira (2)
> **Definitions:** is a  (2)

#### [Adding transitions](https://www.linkedin.com/learning/jira-managing-custom-workflows/adding-transitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/adding-transitions?u=76281980&t=0)** As a reminder, transitions are used to move issues between workflow statuses. In [[Jira]], transitions are represented by arrows to, from, or between statuses. Transitions to a status are called incoming, and transitions from a status are called outgoing. For the reopen status, the incoming transition is called start progress. The outgoing transitions are pending and reopen issue. There are multiple transition types. A single forward transition moves issues to the next workflow status towards the final status. A single backward transition moves issues to a previous workflow status towards the initial status. A global transition is shared between multiple statuses. That means any status can transition to any other status. With a global status, there's no requirement to transition between statuses in any specific order. In Jira, global statuses are represented by the all or any status label. Next are what I call alternate transitions. These are used to skip statuses or transition issues in less common ways. For example, if an issue does not require testing, allow the user to skip the verification step. Finally are what I call administrative transitions. These are used to perform special functions, often in the background.
>
> **[1:33](https://www.linkedin.com/learning/jira-managing-custom-workflows/adding-transitions?u=76281980&t=93)** For example, use a looping transition to update data in a custom field without forcing a status change. Or allow team leads to skip from step 1 to 5, but hide this ability from regular users. In the next section, we'll combine statuses and transitions to create a custom workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2)
> **Tools:** jira (2)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)

#### [Designing a custom workflow](https://www.linkedin.com/learning/jira-managing-custom-workflows/designing-a-custom-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/designing-a-custom-workflow?u=76281980&t=0)** Now that we've collected process information, written a process narrative, and identified high-level phases, let's design a custom workflow on paper. It's infinitely easier to make changes and address potential problems outside of [[Jira]], so I always start there. Don't think of this as a waste of time, think of it as getting a jump on writing your Jira documentation. Here's our list of phase-based statuses again. We'll start by drawing them in a flowchart format. For this example, I'll draw one forward transition for each status. I'll name all the forward transitions with an action [[Microsoft Word|word]] or phrase that describes what happens next in the workflow. Next, I'll draw a backwards transition for every status. I like to name these back to and the status name, so it's perfectly clear where the transition leads. Sometimes user's progress issues and error, so I always like to provide backward transitions so they can correct their own mistakes. In this drawing, we have sequential transitions in both directions. As such, there's no need for global transitions, so we'll skip those. The last type of transitions I want to add are alternate transitions. If you remember, there were two statuses that the user isn't ready for yet, but might need in the future. Those were package and distribute. I'll create two transitions called skip to and then the status name to skip those two steps.
>
> **[1:32](https://www.linkedin.com/learning/jira-managing-custom-workflows/designing-a-custom-workflow?u=76281980&t=92)** I've created a template to make it easy for you to determine, design, and document custom workflows. Download this handout from the Exercise Files area in [[LinkedIn]] Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[Microsoft Word|Word]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (2)
> **Tools:** jira (2)
> **Exercise Files:** template (1), exercise files (1)
> **Analogies:** think of it as (1)

#### [Challenge: Workflow interview and design](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-workflow-interview-and-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-workflow-interview-and-design?u=76281980&t=5)** In this challenge, you'll conduct a workflow interview with one of your colleagues. Ask someone in your organization to describe their real-world process so you can determine the needed [[Jira]] statuses, transitions, rules, and behaviors. Don't have a willing participant to interview? Here's a simple example that you can use to discover and collect workflow details.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Tools:** jira (1)

#### [Solution: Workflow interview and design](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-workflow-interview-and-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-workflow-interview-and-design?u=76281980&t=5)** How did your workflow interview go? Here's what I created based on the example. First, I broke the narrative up into high-level phases. Then I determined five statuses, one for each phase. Next, I considered whether to create sequential forward and backward statuses or if global statuses would be better. The nature of this process is that issues could go back and forth in the workflow multiple times, especially around the proposal phase. I chose global transitions, so issues in any status can easily transition to any other status. With global transitions, there's no need for alternate transitions unless you're trying to perform an action like updating data in the background.


### 3. Building Custom Workflows

[↑ Back to Table of Contents](#table-of-contents)

#### [Translating requirements](https://www.linkedin.com/learning/jira-managing-custom-workflows/translating-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/translating-requirements?u=76281980&t=0)** Now it's time to translate all the requirements info we've collected into settings that [[Jira]] understands. Let's map the flowcharts we've drawn into Jira Speak. Let's go back to our gardening process example. We'll use the first phase to illustrate the mapping and documentation process in this section. After we've determined our phases, we select a standard or custom Jira status for each. For the first phase, I chose the existing backlog status. Then we considered the type of transitions needed to best support the process. For this workflow, I chose to use forward, backward, and alternate transitions instead of global. By the way, there's no reason to use all transition types in a single workflow. Just like in other areas of Jira, use the minimum number of features needed to accomplish the goal. Since this is the first status, there's no incoming transition. To move forward to the next status, I created an outgoing transition called Start Prep. This transition moves the issue from the initial backlog status to prep. I go through this same process for all phases until I have all the requirements documented for the entire process. I want to understand the entire scope of what I'm building before I start. Now we're almost ready to build the workflow in Jira, but first, I recommend one last requirements review. It's much easier to make changes on paper,
>
> **[1:35](https://www.linkedin.com/learning/jira-managing-custom-workflows/translating-requirements?u=76281980&t=95)** so now is the best time to make any last-minute adjustments. I've compiled all the settings information for our entire example process into one document. Download it so you have all the details when we build the workflow in the next section. The handout is available in the Exercise Files area in [[LinkedIn]] Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[LinkedIn]] (1)
> **Tools:** jira (5)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1), in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)

#### [Creating new workflows](https://www.linkedin.com/learning/jira-managing-custom-workflows/creating-new-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/creating-new-workflows?u=76281980&t=0)** Now we're ready to build the workflow in [[Jira]]. In this section, we'll build the statuses and transitions for an initial workflow. The result should resemble this screenshot. Later, in the next section, we'll extend the workflow capabilities with additional features like behaviors and properties. First, we'll need to add any custom statuses that don't already exist. I've already added most of them, but I still need to add grow, so I'll do that now. While it's possible to add statuses while you're building the workflow, you'll have to exit and re-enter the editor page, which is annoying. After I've added the new custom status, we'll create the new custom workflow. First, I'll add all the statuses in text mode. I'd like to add them in their lifecycle order so the table is easiest to read. There's no easy way to reorder statuses later.
>
> **[1:02](https://www.linkedin.com/learning/jira-managing-custom-workflows/creating-new-workflows?u=76281980&t=62)** Then I'll add all the transitions. I'll create all the forward transitions first, then the backwards ones, then any alternate ones. But from Jira's perspective, the order doesn't matter, but ordering them now is the easiest way for me to read through the table later. Ordering transitions for end users is a different topic, however. I'll show you how to do that later in the property section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2)
> **Cross-References:** in the next (1), later in (1)
> **Tools:** jira (2)
> **Definitions:** is a  (1)

#### [Importing, exporting, and backing up](https://www.linkedin.com/learning/jira-managing-custom-workflows/importing-exporting-and-backing-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/importing-exporting-and-backing-up?u=76281980&t=0)** Let's take a break from workflow building so we can back up what we've created so far. Now there's no such thing as too many backups. I'm constantly backing up and exporting [[Jira]] settings so I can have a copy for safekeeping, or to import into another Jira application. In Jira server or data center, there's a specific function to import single workflows. Access it from the workflows page in the application admin area. You can import workflows in [[Atlassian]] proprietary JWB format or in XML format. There is no similar import function for Jira Cloud, but you can import public workflows from the Atlassian marketplace. Access this option from the workflows page in the application admin area. I'll select the first item in the list as an example. The Import Wizard collects a custom workflow name and asks me to map workflow statuses to statuses in my application. If a suitable status doesn't exist, Jira can create new ones through this import process. Jira will also automatically create any embedded transition screens. Now, it's not always clear what you're getting when importing one of these workflows. I highly recommend importing them into a sandbox or test environment first. This workflow has 16 statuses, 76 transitions, and six custom transition screens. That's a lot to clean up if you determine not to use the workflow. Next, let's export a workflow to create a local backup.
>
> **[1:39](https://www.linkedin.com/learning/jira-managing-custom-workflows/importing-exporting-and-backing-up?u=76281980&t=99)** The process is the same in cloud, server, and data center. From the workflows admin area, choose a workflow and open it in the editor. Click the "Export" button and select from the available options. I like the XML format because I can see all the statuses, transitions, behaviors, and their IDs. It makes it easy to search for a specific rule, group, or screen I'm looking for. It's the most complete export format. Let's take a quick look. Here's a two-step workflow in cloud. And here's that same workflow in XML format. XML means Extensible Markup Language, and it's a way to encode information in a format that's readable by both humans and machines. Knowing just a little bit about XML helps you understand functions and find common settings between multiple workflows. For example, here's the XML that defines the statuses. The unique ID for the to-do global status is 10019. Now that information is helpful to know. I can use it in automations or scripts, for example. Here's the XML for the done transition between the to-do and done statuses. This shows the screen ID three is shown during the transition. Now I can go to the screen's admin area and see what fields are on screen 3. Now this is a simple example, but there's a lot of great info embedded in workflow XML files.
>
> **[3:15](https://www.linkedin.com/learning/jira-managing-custom-workflows/importing-exporting-and-backing-up?u=76281980&t=195)** The other export format is JWB. It's good to know that this method removes some standard behaviors and features provided by apps. This workflow includes a post function to clear the resolution field if an issue is reopened. Now this is a standard post function, but this export format strips it out. If you use this format, I recommend copying this information and saving it in a text file. Next, let's address backup capabilities. In cloud, there's a built-in backup function, but it's a full-site backup. There's no single workflow or configuration-only backup. The only real options are copying a workflow and keeping it in the inactive section, copying a workflow to a sandbox or test environment, exporting a workflow to a file or a database export in server and data center. And of course, when you open an active workflow in edit mode, you have the option to save a copy of the previous version, which is a form of a backup. I also take a screenshot of the workflow in text mode and in diagram mode, then I carefully document all the settings so I'm able to rebuild the workflow from scratch if needed. You'd be surprised how many times I've needed to rebuild workflows without proper backup materials available. One final option is using apps from the Atlassian marketplace. Visit marketplace.[atlassian.com](https://atlassian.com) and search for the [[Microsoft Word|word]] configuration.
>
> **[4:47](https://www.linkedin.com/learning/jira-managing-custom-workflows/importing-exporting-and-backing-up?u=76281980&t=287)** There are apps that help you analyze, compare, and manage change to the Jira configuration. I personally use and love Configuration Manager for Jira and Salto Configuration Manager for Jira.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Atlassian]] (4), [[Microsoft Word|Word]] (1)
> **Env Vars:** xml (8), jwb (2)
> **Tools:** jira (9)
> **Definitions:** is a  (3)
> **UI Navigation:** select the (1), go to (1)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **URLs:** [atlassian.com](https://atlassian.com) (1)

#### [Challenge: Reconstruct this workflow](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-reconstruct-this-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-reconstruct-this-workflow?u=76281980&t=5)** Earlier in this section, we created a custom workflow from a list of requirements. In this challenge, you'll do the opposite. Pretend you need to reconstruct a workflow, and the only backup you have is the screenshot. As a [[Jira]] administrator, I've had to do this when workflows stop working or when configuration settings were accidentally removed. Breakage is often caused by user error, uninstalling an app, or simple application bugs. Review the workflow and document the statuses, transitions, transition types, and any other helpful observations you notice along the way. Here's another look at the workflow to recreate. In the next section, I'll show you how I'd reconstruct the initial waiting for support step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Cross-References:** earlier in (1), in the next (1)
> **Tools:** jira (1)

#### [Solution: Reconstruct this workflow](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-reconstruct-this-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-reconstruct-this-workflow?u=76281980&t=5)** Were you able to recreate some of the workflow from a screenshot? Here's how to do it. First is the easy part. Write down the statuses and see if there are any that need to be created in your [[Jira]] application. Next, we need to analyze each step to see what we can learn. I'll use the waiting for support status as an example. You can tell the waiting for support status is in the in-progress category because of its color. In cloud, in progress statuses are light blue, and in server and data center, they are bright blue. You can tell waiting for support is the initial status because of the circle above it. The circle represents the create action, and there's only one of those in a workflow. I'll check off each setting as I consider it so I can track what's left to analyze. It looks like there are two transition lines going into the status. And it looks like there are five transmission lines going out. All the transitions are either forward or backward, except for one global transition at the bottom to the closed status. The next step is to take all the information gathered and try to build it similarly in Jira. This is obviously not a perfect process. Sometimes transition lines overlap, and it's hard to tell how many there are or which way they go. And of course, a screenshot won't show anything that might be going on in the background, like transition screens, behaviors, or properties. When you find yourself in this situation,
>
> **[1:38](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-reconstruct-this-workflow?u=76281980&t=98)** just do the best you can with the info available. The goal is to honor the workflow's intent, even if the settings aren't exactly the same as before. And of course, good workflow documentation will help you avoid this situation and any guessing next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2)
> **Tools:** jira (2)
> **CLI Commands:** find (1)


### 4. Extending Workflow Capabilities

[↑ Back to Table of Contents](#table-of-contents)

#### [Using triggers, conditions, validators, and post functions](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-triggers-conditions-validators-and-post-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-triggers-conditions-validators-and-post-functions?u=76281980&t=0)** [[Jira]] comes with built-in triggers, conditions, validators, and post functions so you can stretch workflow capabilities. I call these abilities behaviors for lack of a better term. Sometimes [[Atlassian]] calls them rules or workflow extensions. Let's review some examples of each. To access behaviors, open a workflow and click on a transition. All the options are shown in tabs, starting with triggers. Before we explore each tab, you'll notice there's a count at the top of each. The default counts are zero triggers, zero conditions, zero validators, and five post functions. You can tell from here that this transition has a custom condition added. The only other place to find this type of information is in an XML workflow export, the database in server and data center, or using an app from the Atlassian marketplace. We'll discuss triggers first. Triggers listen for events in other development tools like [[Bitbucket]], FishEye, Crucible, and [[GitHub]]. They can automatically transition Jira issues and execute built-in rules. This reduces manual work and keeps Jira issue status in sync with reality. For example, if a [[Code Review]] is rejected in Crucible, automatically transition the issue back to the to-do status and notify the developer that there's a problem. Or if a code branch is created in Bitbucket,
>
> **[1:34](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-triggers-conditions-validators-and-post-functions?u=76281980&t=94)** automatically transition the issue from the to-do status to the in-progress status. There are no triggers created by default. To add them, you must connect Jira to another application first, then click the "Add Trigger" button. A condition checks whether a transition should be performed by a user. If the condition is true, a user sees the transition button. If the condition is false, the transition button is hidden. As such, a user may encounter an issue with no transition buttons available to them. In this example, a user must either be in the QA team Jira Group, or an administrator in the Jira project to see the transition. Make sure to include all conditions in your workflow documentation so users know why they don't see certain transition buttons and who can see them. By default, all conditions must be true to perform the transition. I've changed this to any of the following conditions. There are conditions to limit by assignee or reporter, by subtask status, by group or role, and much more. Add conditions by clicking the link on the right. Here's how this looks to the user. In the "In Review" status, the done transition is hidden because I'm not a member of the QA team group or an admin in this project. All I'm able to do is put the issue on hold or move it back to a previous status.
>
> **[3:06](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-triggers-conditions-validators-and-post-functions?u=76281980&t=186)** I'll quickly add myself as a project admin so I can see the transition and test that the condition is working as expected. The next tab is validators. A validator checks whether certain data exists before a transition occurs. If a validator is true, the transition succeeds. If a validator is false, the issue does not transition until the data is updated and returns true. Here's an example of the field required validator. The transition is only successful if an original estimate and a due date are present in the issue. There are validators to check permissions, compare dates, require fields, and more. Add validators by clicking the link on the right. Here's how this looks to the user. In the to-do status, the start progress transition is hidden because the issue lacks a due date and an estimate. I'll add this information, making the transition available. Another more elegant way to require fields during a workflow is to use a transition screen. In this example, the same two validators are already in place, but I've added a transition screen. The screen contains the due date field and the time tracking field, which includes fields like original estimate and remaining estimate. This time when I try to transition the issue,
>
> **[4:39](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-triggers-conditions-validators-and-post-functions?u=76281980&t=279)** the transition screen gives me the opportunity to add or update the information and continue the transition process. Conditions and validators are often confused. Here's what you need to know. When an issue does not meet a certain condition, the user does not see the transition option. The condition check happens before the transition options are loaded. When an issue does not pass a certain validation, however, the transition shows, but the user receives an error message. The transition fails and does not move the issue in the workflow. That's because the validity check happens just after the transition is clicked. Here's an example of the error message the user sees when a validator fails. The final tab is for post functions. Post functions are additional rules or actions that occur after the transition. They only execute if the transition succeeds. Here are five default post functions built into every transition. The first four are required by Jira and can't be edited or removed. Item 5 is the default post function, but this one is edible. The post function determines which email notification is sent. The generic event message is the default, but you can also specify a different one like the application's issue closed or issue-assigned notification, for example. I recommend changing the event in a test environment or test project
>
> **[6:13](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-triggers-conditions-validators-and-post-functions?u=76281980&t=373)** to see how the notification messages differ. It's a small change, but sometimes it's useful, especially when users want to filter messages in their mailbox. There are post functions for updating fields, clearing fields, copying field values from one issue to another, triggering webhooks, and lots of other actions. This transition is called reopen, and it moves an issue from the final done status back to its initial news status. If an issue is reopened, its original due date and resolution are no longer valid. So on lines 1 and 2, I used a clear field value post function to remove them. On line 4, I added a function to automatically assign the issue to a leader. Now the terminology here is misleading. The assigned to lead developer function simply assigns the issue to the Jira project's default assignee, or a component lead. That could be any Jira user, not specifically a developer. Finally, on line 7, I changed the default generic event to an issue reopened event. Now the notification message is tailored to that specific action. Add other post functions by clicking the link on the right. Here's how this looks to the user. Notice the issue is in the done status, has a resolution of done, is unassigned, and has a due date. Next, I'll click the "Reopen" transition. As you can see, the status changed,
>
> **[7:46](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-triggers-conditions-validators-and-post-functions?u=76281980&t=466)** the resolution was cleared, the issue was assigned, and the due date was cleared as well. It's so nice to be able to make these updates in the background and save manual work for users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (9), [[Atlassian]] (2), [[Bitbucket]] (2), [[GitHub]] (1), [[Code Review]] (1)
> **Tools:** jira (9), bitbucket (2), github (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2)
> **Env Vars:** xml (1)
> **Definitions:** is called (1)
> **Best Practices:** make sure to (1)

#### [Requiring approval](https://www.linkedin.com/learning/jira-managing-custom-workflows/requiring-approval?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/requiring-approval?u=76281980&t=0)** There are multiple ways to create approval functionality in workflows. We can use an approval status, a special transition, or built-in functionality in [[Jira]] Service Management. Let's start with an easy example and move towards a more complex example scenario. First, we can simply add a status that communicates approval is needed. This example includes a status called awaiting approval. If someone transitions the issue forward from the status, it's assumed that they provided or at least sought approval consistent with the organization's procedures. This simple implementation also assumes that approval is never denied. If an issue is beyond the approval status in the workflow, one can assume it was approved. Here's how this looks to the user. Jira records the name of the user who clicked the transition and the timestamp in the Activity section. If the wrong user is transitioning under the wrong conditions, try to address that with user education before building a bunch of bottlenecks. Next, let's say your organization has compliance guidelines to meet. You must limit who can approve and also provide a way to deny a request. We can easily do this with transitions and behaviors. This time, though awaiting approval status contains an approve option which transitions the issue to the next workflow status, I'll add a user is in group condition, so only users in the executive Jira group can see the transition.
>
> **[1:37](https://www.linkedin.com/learning/jira-managing-custom-workflows/requiring-approval?u=76281980&t=97)** We'll talk more about conditions in the next section. The awaiting approval status also contains a deny option, which transitions the issue to the final workflow status. Here's how this looks to the user. I don't see the approved transition because I'm not part of the executive Jira group. My only option is deny, which transitions the issue to the done status. Next, let's review the built-in approval features and service management Jira projects. Here's the default workflow for a change request in JSM. I cleaned up the transmission lines a little because, well, you know, I can't stand messy workflow arrows. This workflow has two approval transitions, one between the peer review and planning status, and another between the waiting CAB approval and awaiting implementation status. By default, approvals are not forced, meaning anyone can click the transition buttons to signify approval. But when this workflow is applied to a service management project, new options appear to force the approval. Click on a status and look for the checkbox labeled Include Approval Step. You'll only see the option if there are at least two outgoing workflow transitions. You need one transition to approve and another to decline. You can name them anything you like, however. In the overlay, select how many users must approve and where the list of approvers is stored.
>
> **[3:12](https://www.linkedin.com/learning/jira-managing-custom-workflows/requiring-approval?u=76281980&t=192)** You can choose between standard fields like approvers, the change advisory board, or change managers. These fields define who can approve on a per-issue basis. On the next screen, select the transition to indicate approval and indicate denial. You can also exclude the assignee and reporter from the approver's list if desired. That way, users don't approve issues they created. Here's how this looks to the user. The top right shows the request is awaiting approval and one approval is required. Lower on the right, the Change Managers field contains the names of users who can approve. The right side shows the same information with a simpler user interface for the portal audience. See the documentation page titled "Set Up Approval Steps" for more details about this feature. There are many ways to determine who can approve. First, you can set specific approvers for a certain request type. You can create a hidden field and set a default list of approvers. Next, if using the [[IT Service Management]] Project template and [[Bitbucket]], you can define approvers based on the service impacted. JSM will pull any change approvers from the affected services field. If you have a CAB or Change Advisory Board, you can specify board members as approvers. You can require approval from individual CAB members or from the group as a whole.
>
> **[4:46](https://www.linkedin.com/learning/jira-managing-custom-workflows/requiring-approval?u=76281980&t=286)** Now how to do it depends on how often CAB membership changes, whether other users can also approve, and other governance factors at your organization. Finally, customers or agents can specify approvers. For example, an employee can add their manager's name, or an agent can add a system owner's name to the approvers field. Approvers don't need a JSM license, they just need to be customers of the service management project. You can also create custom fields for approvals too. For more information on these methods, see the approval documentation. The Jira issue, and the request in the customer portal looks different depending on the approval state. When an issue is awaiting your approval, you'll see a big approval and decline button on the top right. Here's how that looks in the Jira issue. And here's how our request awaiting your approval looks in the customer portal. Here's how a Jira issue looks when it's awaiting approval from someone else. And here's how that same condition looks in the customer portal. And finally, here's how an issue looks if an approval is needed, but an approval of user or group is not specified. Fix this condition by adding one or more names to the approval source specified in the workflow. Here's what a missing approver looks like in the customer portal. Now we'll take a quick look at the built-in approval feature in team-managed service projects in Jira Cloud.
>
> **[6:20](https://www.linkedin.com/learning/jira-managing-custom-workflows/requiring-approval?u=76281980&t=380)** The concepts are similar to company-managed projects. The UI is just a bit different. One difference is the approve and decline transitions are identified with icons, making them easier to see. Click a status and look for the checkbox labeled approval. Click the button below the approval header to see or modify the settings. The overlay settings specify an approval transition and a decline transition. On the next screen, specify who selects the approvers. The choices are the customer, the agent, or the Jira project admin. Then select the field containing the approver list and select how many users must approve. Here's how this looks to the user. Just like in the previous example, there are approval and decline buttons at the top right. The view in the customer portal is the same as in the company-managed example. Check out the specific documentation for team-managed projects for additional details. You can also manage approvals using apps from the [[Atlassian]] marketplace. I have an implementation example in the verify approval and a Jira workflow article on my website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (11), [[IT Service Management]] (1), [[Bitbucket]] (1), [[Atlassian]] (1)
> **Tools:** jira (11), bitbucket (1)
> **Env Vars:** cab (4), jsm (3)
> **UI Navigation:** checkbox (2), select the (2), click on (1)
> **Analogies:** for example (1), similar to (1), just like (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** template (1)

#### [Leveraging automation](https://www.linkedin.com/learning/jira-managing-custom-workflows/leveraging-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/leveraging-automation?u=76281980&t=0)** Automation is so awesome. It's definitely the most fun [[Jira]] feature. There are built-in capabilities, and of course, you can extend abilities with apps from the [[Atlassian]] marketplace. In this section, we'll explore ways to automate repeated and manual tasks in Jira. Automation in workflows helps users reduce manual work, improve [[Data Quality]], and reduce human error. For example, when all stories are complete, automatically close the associated epic. Or when it's time to do regression testing, automatically create all the test cases and kick off the tests. Let's discuss ways to automate work in the different Jira types and deployment methods. In cloud, Jira Work Management, Jira Software, and Jira Product Discovery have built-in automation capabilities, or you can use a variety of marketplace apps. Jira Service Management also has built-in automation. Some capabilities are labeled legacy and will one day be decommissioned. But don't worry, Atlassian will automatically migrate any legacy rules to the new rule format for you. In server and data center, Jira Software doesn't come with automation, but you can add it with an app. Jira Service Management does have some built-in automation features, however. In a previous section, we use post functions to clear field values when re-opening issues. Next, let's use automation to create ways to detect
>
> **[1:34](https://www.linkedin.com/learning/jira-managing-custom-workflows/leveraging-automation?u=76281980&t=94)** reopened issues. I'll use the built-in automation feature in Jira Cloud. I'll add an issue transition trigger that looks for issues that move from the final done status back to the initial new status. Then I'll add an action to send an email anytime that happens. I'll also add a second action to add a label named reopened. Users can query for that label, further research why issues keep getting reopened, and see if there are process or user education improvements to make. Finally, I'll limit the automation scope to issues in the behaviors project. It's always best to limit the scope of automations, behaviors, and JQL as much as possible. A smaller scope is faster and safer too. Here's how this looks to the user. Transitioning the issue adds a reopened label. And here's the email notification. Using automation, I could also send a message to my team's chatroom, add a comment, send a request to a URL, create a software branch, create a [[Confluence]] page, and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (10), [[Atlassian]] (2), [[Data Quality]] (1), [[Confluence]] (1)
> **Tools:** jira (10), confluence (1)
> **Env Vars:** jql (1), url (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)

#### [Expanding with apps](https://www.linkedin.com/learning/jira-managing-custom-workflows/expanding-with-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/expanding-with-apps?u=76281980&t=0)** If you can't find a way to do something in [[Jira]], there's probably a marketplace app to provide that functionality. In this section, we'll explore one of the popular apps for extending workflow capabilities. It's no secret that my favorite Jira app is Jira Miscellaneous Workflow Extensions, or JMWE for short. It's one of the first apps I used back in 2011, and its usefulness is still unmatched today. I think it's one of the few apps that's even better in cloud than it was in server. Here's an example of how this app supercharges workflow capabilities. The JMWE app doubles the number of available conditions, validators, post functions, and adds the ability to script your own behaviors. It also supports scheduled actions and event-based actions. Here's an example. Remember I said sometimes users forget to transition their issues back to their final status. I created a rule to find issues in a green status category and periodically transition them to the closed status. I've set this behavior to run on the first day of each month at seven o'clock. I've limited the rule scope with a JQL query. Then I added a post function to automatically transition any applicable issues and add a comment. Now I'll run the rule and check the result. The log shows when the scheduled action started running and what it did.
>
> **[1:33](https://www.linkedin.com/learning/jira-managing-custom-workflows/expanding-with-apps?u=76281980&t=93)** This log shows which issues were impacted and in which ways. I wish other areas of Jira had great logs like this. This is a very simple example and this app is capable of so much more. But hopefully, I've inspired you to try out some additional functionality from the [[Atlassian]] marketplace, in your test application, of course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (4), [[Atlassian]] (1)
> **Tools:** jira (4)
> **Env Vars:** jmwe (2), jql (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)

#### [Using properties](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-properties?u=76281980&t=0)** Finally, let's discuss workflow properties. Now this section comes with a warning. The documentation warns that properties can be, well, unpredictable. So just keep this in mind when you're building and testing. A property is a key-value pair used to further customize statuses and transition behavior. Let's explore the three that I use the most. The first is [[Jira]].issue.editable. In the screenshot, I've applied jira.issue.editable to the final workflow status and set the value to false. This means information in issues in the done status cannot be changed. This is sometimes useful in a highly regulated environment. jira.issue.editable works in server and data center. For cloud, use the jira.permission.edit.denied property instead. Next is jira.field.resolution. include. In the screenshot, I've applied this property to the done transition. The property values 10000, 10001, and 10002 represent the standard done, won't do, and duplicate resolutions. You can see the ID of each resolution in your browser status bar by hovering over the edit link on the right. Now here's a tip, don't add spaces between the comma-separated resolution IDs in the property value field. This breaks the selection list.
>
> **[1:33](https://www.linkedin.com/learning/jira-managing-custom-workflows/using-properties?u=76281980&t=93)** Adding this property means that other resolutions like cannot reproduce and declined will not appear in the list of selectable options. This is a useful way to filter out global resolutions that just don't apply to this workflows use case. The final property I wanted to mention is opsbar-sequence. Let's take a look. As you see, transitions aren't always shown in the best order. I like to order mine to show the most likely option first and the least likely option like a backwards transition last. You can modify the display order using a transition property. Simply open each transition in a status, add the opsbar-sequence property, and give it a sequential integer value. You'll need each transition in the status to have a property with a unique number value. Then publish the workflow and go back to the Jira issue. Now the transitions are listed in the desired order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (6)
> **Tools:** jira (6)
> **Definitions:** is a  (2), means that (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Warnings:** warning (1)
> **Prerequisites:** you'll need (1)

#### [Challenge: Enhance this workflow](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-enhance-this-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-enhance-this-workflow?u=76281980&t=5)** Remember our gardening process workflow? In this challenge, you'll enhance it with your choice of behaviors. Open the workflow in [[Jira]] and add a condition, validator, and a post function that makes sense for the use case. I'll show you the behaviors I added in the next section. Here's a tip, revisit the "Determining Statuses" section for some workflow notes that include opportunities to use behaviors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **Cross-References:** in the next (1)
> **Tools:** jira (1)
> **UI Navigation:** open the (1)

#### [Solution: Enhance this workflow](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-enhance-this-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-enhance-this-workflow?u=76281980&t=5)** Were you able to enhance the workflow with behaviors? Here's what I did. In the Ready to Grow transition, I required custom fields with a validator, and I created a transition screen to collect that information. Next, I added opsbar-sequence properties so the backwards transition appears last. In the Ready to Harvest transition, I added a post function provided by third-party app. The post function automatically creates a subtask reminding me to update the count in my seed inventory database. You can also automatically create issues with other apps and the built-in automation feature in [[Jira]] Cloud. Finally, in the done and Skip to Done transitions, I added a condition to make sure any subtasks are in their final status before this parent reaches its final status. I also added a property to determine which resolution options appear and a transition screen to collect the resolution. Here's a tip: If a transition screen contains the resolution field, it will automatically require the user to enter a value. There's no need to create a special validator for the resolution field. I also changed the generic notification event to an issue-closed event. Here's how this looks to the user. First, I'll transition the issue to the prep status. In the prep status, the transition options are ordered as specified using the opsbar-sequence property.
>
> **[1:39](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-enhance-this-workflow?u=76281980&t=99)** Once all the preparation is complete, I'll click the "Ready to Grow" transition. I'll need to complete any required fields before I continue. Next, I'll transition to the harvest status. A subtask was automatically created as a reminder to update the seed inventory database. Next, I'll skip to the verify status. There should be a shortcut to close the issue, but it's hidden by a subtask blocking condition. I'll mark the subtask done and go back to the transition list. The Skip to Done transition is now available. Finally, I'll select a resolution from the abbreviated list of global options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Tools:** jira (1)


### 5. Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Workflow recommendations](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-recommendations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-recommendations?u=76281980&t=0)** In this section, we'll discuss best practices and do's and don'ts for workflow building, naming, customization, and maintenance. And don't forget the workflow Scavenger Hunt is coming up. Don't skip the next challenge. Let's start with some good things to do. Naming is very important in [[Jira]]. Smart naming of workflows, statuses, and transitions ensure concepts are clear for your users and things are easy to find for your fellow administrators. You should name your workflow to describe the type of lifecycle process it supports, not the Jira project that uses it. For example, the name task lifecycle or onboarding is better than HR workflow. You'll want to create workflows that are shareable, not one workflow per Jira project. Once a workflow is applied to a project, it can't be renamed. To rename a workflow, create a copy, rename the copy, and then apply the new workflow to the applicable workflow scheme. Status name should be short and reflect a current state and time. Long multi-[[Microsoft Word|word]] names are harder to query and may be truncated on certain screens. Good status names immediately tell a user what's occurring and where they are in the process. Good status examples are pending review, in review, or awaiting approval. A transition name should also be short and reflect an action taken. Good transition names immediately tell a user what action to perform
>
> **[1:37](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-recommendations?u=76281980&t=97)** to progress an issue. For an issue transitioning to the awaiting approval status, a good incoming transition name is Request Approval. Bad transition names confuse the user about how to move forward. A bad transition name is a word like review. A transition button should signify the start or end of an action, but the word review is ambiguous. If a user clicks review, does that mean they should start a review or that the review has already occurred? Well, I don't know, and your users won't know either. Have you ever worked on an initiative that didn't go as planned? Have you ever had to stop work and start over again? Be sure to factor those occurrences into your workflows. Give users options to abandon or stop progress on issues at appropriate times. For example, if a request is no longer needed, give users the ability to jump all the way to the final status. Don't make them click through every step in the workflow to close an issue. Give users appropriate options to fix improperly transitioned issues too. I like to include a reopen transition in the final status to fix issues that were accidentally or improperly closed. It's also useful for admins when testing workflow changes. Next, use transition restrictions sparingly. Do you really need to restrict who can do what? Jira records who clicked what transition and when. In most cases, this is enough of an audit trail.
>
> **[3:12](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-recommendations?u=76281980&t=192)** No need to make it more complicated. But if you do need to restrict an action, always use project roles or groups. In the screenshot example, this transition can only be clicked by an application admin or administrators in the Jira project. Using roles and groups makes your workflow more maintainable in the future. Avoid specifying names of individual users in transition behaviors. In the beginning, keep workflows as simple as possible until you uncovered a deficiency or process step that needs special attention. And now here are some things not to do. Don't use more statuses or transitions than are needed. Only add workflow steps for statuses that will be queried or reported on. Not every little thing to do needs a status in the workflow. Remember, phases are your friend. Here's a real-life example I've encountered. At one company, they had a status called "Done" and "Done Done". Yuck! My advice, don't use the closed or done status before an issue is in its final state. The final state should indicate that no work is needed. The implementation shown is just confusing and, of course, it skews reporting results. Also don't create duplicate statuses that also mean closed. The default closed or the business-friendly done status is just fine.
>
> **[4:44](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-recommendations?u=76281980&t=284)** You don't also need to create a completed or a finished status too. Don't create statuses like abandoned or rejected. Instead, use the resolution field to indicate how or why an issue reached its final status. Don't create temporary or dead statuses where issues are likely to sit for an indefinite amount of time. One example I see often is hold or pending. A status like this is only useful if someone regularly reviews issues in that state. I'm sure you and I do, but what about your users? Don't create ultra-specific status names or use the wrong word tense. For example, don't use "Pending Review by Marketing" or "Pending Review by [[John the Ripper|John]]". These are too specific and make workflows hard to maintain and share between Jira projects. Another bad example is a status in a past tense. This example shows a status called Reviewed. When an issue arrives in this status, it sounds like the review has already occurred. Whomever did the work in the previous status must have also done the review work too, or did they? I find this confusing and error-prone. I call this a dead-end status because it doesn't tell the user what needs to happen next. A status called review, in review, or under review is much easier to understand. Finally, avoid creating illogical workflows. Consider the example pictured. At one company,
>
> **[6:20](https://www.linkedin.com/learning/jira-managing-custom-workflows/workflow-recommendations?u=76281980&t=380)** their first status was in progress. This told the reporter that the minute their issue was created, someone was working on it. Of course, that wasn't true. Normally, issues need to be triaged, prioritized, approved, or even reviewed for understanding before work starts. Instead, the first status should be open, to-do, new, backlog, or something similar. The first status should signify that the issue was received, but no action has been taken yet. In case you didn't get it from my Jira Advanced Administration course, I've provided my workflow checklist here too. I use this checklist when planning and documenting custom workflows to make sure all needed elements are in place. Even after a decade of workflow building, I always seem to forget something on my list. Download this handout from the Exercise Files area in [[LinkedIn]] Learning. For more workflow tips, see the best practices for creating a custom workflow article on my website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (7), [[Microsoft Word|Word]] (4), [[John the Ripper|John]] (1), [[LinkedIn]] (1)
> **Tools:** jira (7)
> **CLI Commands:** make (4), find (2)
> **Analogies:** for example (3)
> **Definitions:** is a  (2)
> **Cross-References:** coming up (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** don't forget (1)

#### [Challenge: Workflow scavenger hunt](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-workflow-scavenger-hunt?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/challenge-workflow-scavenger-hunt?u=76281980&t=5)** At last, it's time for the workflow scavenger hunt. In this challenge, you'll review an example workflow and record the problems you detect. Problems may be omissions, inconsistencies, bad practices, philosophy issues, technical errors, things to improve, and more. The example uses only built-in [[Jira]] features. No third-party apps or special capabilities are required for this challenge. Start by downloading the worksheet, answer key, and example workflow materials from the Exercise Files area in [[LinkedIn]] Learning. If you have server or data center, you can import the example workflow using the import function in the workflow's admin area. At least one new custom status is created, so you'll want to do this import in a sandbox or test application. There's no similar import function for Jira Cloud, so for cloud users, use the document showing the example workflow in text and diagram mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[LinkedIn]] (1)
> **Tools:** jira (2)
> **Exercise Files:** exercise files (1)

#### [Solution: Workflow scavenger hunt](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-workflow-scavenger-hunt?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-workflow-scavenger-hunt?u=76281980&t=5)** How many workflow problems did you detect in the workflow scavenger hunt? There are over 20. Let's explore them and recommended improvements. First, I'll import the example workflow in a test server application. I'll use the provided JWB file, which is [[Atlassian]] proprietary workflow format. Here are the issues I detected. Number one, the initial status is missing. The first status is in progress, which sets an incorrect expectation that an issue is immediately worked after it's created. Our review, prioritization, or scheduling process is missing. Number two, the status name, peer review/change manager approval is really long. Long status names are often truncated. My recommendation, change the status name to pending review, in review, awaiting review, or something short. Number three, the status name canceled is misspelled. There's three Ls. Check that all statuses and transitions have the correct spelling and no grammar mistakes. In the U.S., a common spelling is one L. The British spelling is two. Number four, the canceled status should be a resolution. Use the resolution field to indicate how or why an issue is in its final status. My recommendation, add canceled to the resolution standard field instead.
>
> **[1:37](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-workflow-scavenger-hunt?u=76281980&t=97)** Number five, the diagram status order doesn't match the likely life cycle. Out-of-order steps make workflows hard to follow. Fix the order by remaking the workflow or editing the XML if you have server or data center. Number six, the transition to the closed status is also named closed. Use words describing the action the user is performing. My recommendation is to change the closed transition name to close. By default, [[Jira]] names global transitions with the same name as the incoming status name, but you can improve them. Number seven, no resolution is collected or set. Make sure a resolution is collected with a transition screen, or at least set one with a post function at the appropriate workflow step. The JQL resolution is empty, should always return no issues. Number eight, the resolution is not cleared when issue transitions to the "on hold" status. If an issue moves back to a status before a resolution was set, remove the resolution value. My recommendation, use a post function to clear the resolution field automatically. Number nine, the resolution is not cleared when the issue is reopened, same as number eight. Number 10,
>
> **[3:10](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-workflow-scavenger-hunt?u=76281980&t=190)** outgoing transmission is missing for the "on hold" or canceled status. Always add outgoing transitions. Issues should be able to move into and out of every status. Number 11, the "Put On Ice" transition is an idiom. Avoid idioms, euphemisms, and terminology that doesn't translate well for current and future users. Number 12, the opsbar_sequence transition property has a typo. The proper parameter format is opsbar-sequence, not an underscore. Number 13, there's only one opsbar-sequence property. All transitions in a status need a property for the ordering to properly occur. Number 14, the jira.issue.editable property is in the wrong place. The property should be within the closed status, not in a transition. Number 15, all event triggers are generic. I changed the generic event to an issue closed event or an issue reopened event as needed. Number 16, the workflow diagram is not readable. Edit the drawing so that no statuses overlap and all transition labels are readable. Number 17, the Only Reporter condition may be incorrect for the "Ready for Joe to Review" transition. The only assigning condition is more appropriate.
>
> **[4:46](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-workflow-scavenger-hunt?u=76281980&t=286)** 18, the Ready for Joe to Review transition name is way too specific. Use short descriptive and generic transition naming. My recommendation, rename the transition to Ready to Review, or Start Review, or something similar. Item 19, the Assign the Issue to the Reporter post function is not appropriate. This action is only useful in situations where the reporter is always the user doing the work. And in my experience, that's not common. My recommendation, use a transition screen to collect an assignee instead. Item 20, the Click Me transition doesn't actually do anything. The looping transitions are useful for administrative activities provided they actually perform an action in the background. Item 21, the step is named backlog, but the link status is named on hold. This is just confusing. Use consistent step and status naming to avoid this confusion. Number 22, there are two transitions to the closed status. Either use a global transition or an individual transition, but there's no need for both. Number 23, the Cerrado transition is in Spanish. Naming consistency is important. Please pick a language and stick with it. Number 24, there's no workflow description. I recommend using the description field to link to workflow
>
> **[6:22](https://www.linkedin.com/learning/jira-managing-custom-workflows/solution-workflow-scavenger-hunt?u=76281980&t=382)** documentation so the user can understand more about what you build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (2), [[Atlassian]] (1)
> **CLI Commands:** make (2), ls (1)
> **Env Vars:** jwb (1), xml (1), jql (1)
> **Tools:** jira (2)
> **Code Identifiers:** opsbar_sequence (1)
> **Definitions:** is an  (1)
> **Best Practices:** recommended (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Additional resources for Jira learning](https://www.linkedin.com/learning/jira-managing-custom-workflows/additional-resources-for-jira-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/jira-managing-custom-workflows/additional-resources-for-jira-learning?u=76281980&t=0)** Congrats on completing the course! By now, you've experienced the entire process of determining, creating, and enhancing a custom workflow. You should now be able to conduct a workflow interview and collect requirements, translate requirements into well-built custom workflows, utilize special features like transition screens, approvals, and properties, extend capabilities with automation and apps, and more. Even if you're a workflow's expert, there's always more to learn, and [[Atlassian]] adds new features all the time. Check out the list of admin learning resources in the "9 Ways to Learn [[Jira]] Administration" article on my website. Oh, and don't forget to download the course handouts from the Exercise Files area in [[LinkedIn]] Learning. As a reminder, here's the special area of my website where I'll post corrections, updates, and new information related to this course. And don't miss my other Jira and [[Confluence]] courses for users and admins right here on LinkedIn. I hope you've enjoyed this Jira Workflows course as much as I enjoyed creating it. Now it's time to get your course completion certificate. When you share your certificate, tag me so I can celebrate your accomplishment and share it with my network too. If you have Jira questions, I'd love to hear from you. Use the Q&A feature, email me directly, or connect in social media. Good luck with your Jira journey, and I'll see you online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jira]] (5), [[LinkedIn]] (2), [[Atlassian]] (1), [[Confluence]] (1)
> **Tools:** jira (5), confluence (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Best Practices:** don't forget (1)


## Instructor

- [[Rachel Wright]]

## Resources

- Exercise files available

## Skills Covered

- Workflow Management
- Jira

## Path Context

### In [[Mastering Jira Administration]]
← [[Jira- Advanced Administration]] | **5 of 7** | [[Jira Administration- Automation]] →

## Appears In

- [[Mastering Jira Administration]]

## Related Courses

_Courses sharing skills:_

- [[Jira Administration- Automation]] — Jira
- [[Jira- Advanced Administration]] — Jira
- [[Jira Service Management- Administration]] — Jira
- [[Jira- Basic Administration]] — Jira
- [[Increasing Efficiency with Jira and Confluence Integrations]] — Jira

---

[↑ Back to top](#)