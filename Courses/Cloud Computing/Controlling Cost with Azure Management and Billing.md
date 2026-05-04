---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: controlling-cost-with-azure-management-and-billing
url: "https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing"
duration_minutes: 49
duration: 49m
level: Intermediate
updated: 6/20/2023
learners: 4424
skills:
  - Cost Management
  - Microsoft Azure
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGqGEF_98p6ZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686855323962?e=2147483647&amp;v=beta&amp;t=pKzASYM1u1Xy5jgdQA8SYhzbit8zjoirz1V_gexZS4w"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals](../../Paths/Cloud%20Computing/Learning%20Paths/Infrastructure%20Management%20on%20Microsoft%20Azure-%20Top%20Skills%20for%20IT%20Professionals.md)'
prev_courses:
  - '[Manage Storage in Azure](Manage%20Storage%20in%20Azure.md)'
path_nav: '[{"path":"Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals","position":8,"total":8,"prev":"Manage Storage in Azure","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - skill/cost-management
  - skill/microsoft-azure
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Controlling%20Cost%20with%20Azure%20Management%20and%20Billing.md)

![Controlling Cost with Azure Management and Billing](https://media.licdn.com/dms/image/v2/D560DAQGqGEF_98p6ZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1686855323962?e=2147483647&amp;v=beta&amp;t=pKzASYM1u1Xy5jgdQA8SYhzbit8zjoirz1V_gexZS4w)

# Controlling Cost with Azure Management and Billing

> Migrating to the cloud offers many advantages, but it can be an extremely expensive process. You’ll get more in terms of overall management and savings benefits; however, without proper monitoring, the costs can be downright prohibitive. In this course, instructor James Millar covers important considerations for monitoring and managing cloud costs using Azure Cost Management and Billing.Examine a 

> [LinkedIn Learning](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing) | 49m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Control costs with Azure management and billing](#control-costs-with-azure-management-and-billing)
- [**1. Introduction to Cost Management**](#1-introduction-to-cost-management) (3 videos)
  - [Introducing the scenario](#introducing-the-scenario)
  - [Understanding cost management and billing](#understanding-cost-management-and-billing)
  - [The cost management methodology](#the-cost-management-methodology)
- [**2. Managing Costs with Budgets**](#2-managing-costs-with-budgets) (4 videos)
  - [Introducing budgets](#introducing-budgets)
  - [Creating a budget](#creating-a-budget)
  - [Automating actions with budgets](#automating-actions-with-budgets)
  - [Cost management best practices](#cost-management-best-practices)
- [**3. Analyzing Costs with Reporting**](#3-analyzing-costs-with-reporting) (5 videos)
  - [Introducing billing](#introducing-billing)
  - [Downloading billing data](#downloading-billing-data)
  - [Understanding your billing data](#understanding-your-billing-data)
  - [Understanding scope](#understanding-scope)
  - [Analyze costs with built-in views](#analyze-costs-with-built-in-views)
- [**4. Reducing Costs with Reservations**](#4-reducing-costs-with-reservations) (3 videos)
  - [Introducing reservations](#introducing-reservations)
  - [Understanding reservation recommendations](#understanding-reservation-recommendations)
  - [Creating reservations](#creating-reservations)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next with Azure management?](#whats-next-with-azure-management)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Control costs with Azure management and billing](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/control-costs-with-azure-management-and-billing?u=76281980&t=0)** - [James] Do you want to reduce the cost of running your services in [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md)? Do you sometimes worry that your cloud costs are out of control? If so, then this course is for you. Hey, my name's James Millar, and over the last decade, I've been helping companies large and small move their services to Microsoft Azure. In this course, I'll be showing you some simple techniques that you can adopt to reduce your cloud spend. We'll also be exploring the tools and features of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) specifically designed to help you budget and plan for effective [Cost Management](../../Skills/Software%20Development/Cost%20Management.md). This course will give you the knowledge and tools that you need to effectively manage the cost of your Azure [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services. Let's jump right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Speakers:** - [james] (1)


### 1. Introduction to Cost Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing the scenario](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=0)** - [Instructor] Okay, so let's start things off by looking at [Cost Management](../../Skills/Software%20Development/Cost%20Management.md). Now I guess you can imagine why cost management is important. Nobody likes to receive an unexpected bill, and costs on any cloud platform can quickly grow, leaving you with a nasty surprise at the end of the month. Now to help us understand this more, we're going to be looking at a case study, H+ Sport. Let's take a look. Now, if you've seen any of my other [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) courses, then you'll already be familiar with H+ Sport. We followed them from the early stages of their Azure migration project. Now H+ are a small-to-medium-sized company making sports supplements and active wear, and they've been trading for nearly 15 years. Recently, they migrated many of their software and services to the Azure Cloud platform. H+ have several subscriptions and lots of different resources that are used by all aspects of the business. Now one of the main motivations for migrating to Azure was to make sure that the business was more competitive. And part of this was a desire to drive down the excessive costs of running their own IT infrastructure. But there's a problem. Unfortunately, H+ have just received their monthly billing statements and the costs are quite a lot more than they were expecting. Jane, who is the IT infrastructure manager at H+, has been asked by her CIO to investigate how they can better manage their costs. To help answer that question, let's first look at the two main causes of excessive costs. A common reason for high costs is that you simply have resources deployed that just aren't used anymore. [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) and storage services like [SQL](../../Skills/Data%20Science/SQL.md) Azure
>
> **[1:36](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-the-scenario?u=76281980&t=96)** typically incur charges regardless of whether they're used or not. Overprovisioned services are also a common problem. And what I mean by this is services that are deployed at a higher pricing tier than is really needed. Here you're paying for performance or functionality that you don't actually need. Now these are just two examples of things that can increase your costs, but there are more. Thankfully, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) has provided a range of features and services within Azure that can help you mitigate and manage these issues. So let's take a look at those next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (2), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** cio (1), sql (1)
> **CLI Commands:** make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Understanding cost management and billing](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=0)** - [Instructor] Okay, so let's dive straight in and explore the tools available to us within [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) that we can use to help us manage the costs of our [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). Azure [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) and Billing is a service provided within [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) that helps users to manage their [Cloud Computing](../../Topics/Cloud%20Computing.md) costs by providing visibility and control over their Azure spending. It allows users to monitor, allocate, and optimize their usage and costs by providing insights into their spending, enabling them to identify and eliminate waste and facilitating cost planning and budgeting. It also provides tools for setting up and managing billing accounts, invoicing, and payment options. Used properly, Cost Management and Billing should help you to minimize your cloud computing costs and allow you to make informed decisions about your Azure usage. Now, a good way to think about this is to imagine the lights in your home. When you go out for the day, do you leave all the lights on? What about the bulbs? Could you use more energy efficient bulbs to reduce your energy usage? Do you have more lights in your rooms than you really need? You can apply a similar thought process to your resources in the cloud, and that's where Cost Management and Billing comes in. With Azure [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services, you typically only pay for what you use. So as you create and use Azure resources, you're starting to incur costs. Your app might start with a simple database, an Azure app service, but before long,
>
> **[1:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-cost-management-and-billing?u=76281980&t=95)** you're adding in load balancer and key vault, and a whole host of other services. All the time, the costs are creeping up, Now, because it's easy to create and deploy new services within Azure, your costs can jump significantly, and if you haven't put the correct analysis and monitoring in place, then you're going to be in for a nasty surprise. So let's look at what Cost Management and Billing actually allows you to do. Well, for starters, it allows you to perform all of the administrative tasks that we need to do, such as actually paying our bill. It's where we can manage our payment methods and that sort of thing. It's also where we go to download our cost and usage data. This is the data that's used to generate our monthly invoice. It's comprehensive and shows all of the usage details for all of our services. Now, because there's so much data here, it also helpfully gives us some data analysis tools that we can use to drill into the data to help us understand it more. Setting spending limits and budgets helps us to manage our spend, and we can even use Cost Management and Billing to help identify opportunities to reduce costs. Now we're going to explore all of these options and features throughout the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (8), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (5), [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Analogies:** imagine (1), such as (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The cost management methodology](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=0)** - [Instructor] So now I'd like to share with you a simple methodology which you can use to optimize the costs of your [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). In fact, as you'll see, you can use this to help manage costs in all parts of your organization. Now, the first thing to understand is that [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) is an organizational problem and it isn't unique to [Cloud Computing](../../Topics/Cloud%20Computing.md). You will have to manage costs across all areas of your business. Now, to successfully manage costs, there are a few key things that you need to do to guarantee success. First, it's important to recognize that cost management is an ongoing process. This isn't something that we do just once and then forget about. We have to embed it in our processes and we have to do this early. You should be thinking about this way before you spend a single penny on cloud resources, so make sure you start early. You also need to be prepared with the proper tools for success. In our case, that's the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) cost management and billing tools that we'll find in the Azure portal. [Accountability](../../Skills/Data%20Science/Accountability.md) is also important. If you have a plan to manage your costs, then it's important that you or someone else in your organization is accountable for this action and takes responsibility for it. Finally, once we have a plan as to how we're going to manage our costs, we have to actually action it. Now, as I said, this is an organizational problem so it's critical that the key groups within your company are aligned. In most organizations, there are really three key teams or types of team that we need to engage with.
>
> **[1:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=95)** First up, we have the finance team. The finance team are usually responsible for approving budget requests across the organization based on spending forecasts. These are the people that will actually pay the bill and assign costs to appropriate cost centers. The management team are the key business decision makers and they need to understand what's being spent and why. Usually these stakeholders are concerned with the business value, and they may be quite customer focused. Finally, we have the development and infrastructure teams. Here we have the engineers and developers managing the actual cloud resources on a day-to-day basis, developing services to meet the organization's need. Now, these teams need the flexibility to be able to deliver and to create and deploy the infrastructure that they need in order to deliver the most business value, all within their defined budgets of course. Now, to get the most out of cost management and billing, in Azure there are really four phases. First, we have to have comprehensive upfront planning. This allows us to tailor our cloud usage to specific business requirements. Here we need to be asking ourselves questions like what business problem am I solving? What usage patterns do I expect from my resources? The answer to these questions will help us select the right [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services within Azure. We also need visibility. People need to be informed about the Azure costs that they're responsible for and for the money that they have spent. The tools in Azure give us this insight and visibility
>
> **[3:09](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/the-cost-management-methodology?u=76281980&t=189)** and they can help us to find resources that are underused, remove waste and maximize cost saving opportunities to fully understand your organization's Azure spending you should organize your resources to maximize insight. Good organization helps to manage and reduce costs and hold people accountable for efficient spending in your organization. We also need to make the most of the insights and visibility that we get from the cost management and billing tools to help us optimize our resources and drive down costs. We might consider purchase and licensing optimizations or resizing resources to ensure that we're getting the best value for money. Everyone in the organization must engage in this cost management lifecycle. Be rigorous about this iterative process and make it a key tenant of responsible cloud governance in your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (7), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (6), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1)
> **CLI Commands:** make (3), find (2)
> **Definitions:** is an  (3)
> **Tools:** azure portal (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 2. Managing Costs with Budgets

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing budgets](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=0)** - [Instructor] So one of the best tools we have available to us for managing costs is something called budgets. Budgets allow us to set target costs for our infrastructure. Not only that, but they allow us to perform actions and trigger alerts based on any conditions that we define. In [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) and Billing, a budget is a way to track and manage your cloud spending by setting cost limits or thresholds for your resources. You can use budgets to set cost limits for specific services, resource groups, or subscriptions and receive email alerts when your spending approaches or exceeds those limits. Budgets help you to monitor your cloud costs and avoid unexpected charges while also providing insights into how much you're spending and where you can optimize costs. There are five key parts to defining a budget in Azure. The first thing you need to decide is the scope. Now, if you've seen any of my other courses, then you'll be familiar with scope. It's a little like a filter, and really just determines at what level of the hierarchy the budget is defined. Now, there are three main levels in Azure, but we are only really interested in three of them: the subscription, the resource group, and the resource. You could, for example, create a budget at the subscription level. This would include all of the costs for all of the resources within the subscription. Alternatively, you might want to apply it at the resource group level. Here, you are creating a budget just for that resource group
>
> **[1:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-budgets?u=76281980&t=93)** and the resources that it contains. You could even set the scope to the resource level. In fact, there are lots of options for setting scope, and you can get as granular as you like. In reality, you are likely going to want to create budgets at multiple levels, and at a minimum, I'd certainly recommend creating subscription scopes budgets as well as budgets for individual resource groups. Having said that, it really does depend on how your resources are structured within Azure and your company's goals. After you've set the scope of your budget, you need to decide over what time period the budget runs. Is it per month, per quarter, or per year? Does it reset monthly? And how long does the budget run for? Next, you need to give the budget a value. How much are you expecting or wishing to spend? Now, this is enough to create a budget, but there are two additional options that you have. You can create alerts. That is, you'll receive an email or notification if your budget amount matches a predefined value or rule. Perhaps you want to be notified when you've spent 75% of your budgeted value. Finally, you can create something called action groups. Now, these are really quite cool, and we'll look at these later on but essentially, they allow you to trigger some action based on a predefined rule, such as calling a Logic app or a web service. You can even invoke a runbook to perform automations within your Azure environment, and this is a great way to turn off or scale down resources to save money.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating a budget](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=0)** - [Instructor] So, in this demo, we are going to walk through the steps involved in creating a budget. If you want to follow along, then you're going to need an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) subscription, and you can do that by heading to [azure.com](https://azure.com) and signing up for an account. Okay, so let's switch over to the Azure portal and create our first budget. So, once we're signed into the Azure portal, we need to head to "[Cost Management](../../Skills/Software%20Development/Cost%20Management.md) and Billing." Now, the best way to do that is to just search for it here in the search bar. Select "Cost Management and Billing" from the results. On the left-hand menu, select Cost Management. This is where we're going to be spending most of our time during this course. In the left-hand menu under Cost Management, select Budgets. Now here, you will see a list of all the budgets that you've created. There's nothing here at the moment, but once we've created our budget, it will appear in this list. Now, we need to tell Azure which level of scope that we want to work with, so let's select Scope here at the top and select the subscription that we're interested in. Now, if you want to, you can filter down to individual resource groups. I'm going to leave that at the subscription level. So, with our scope selected, let's just click Add in the toolbar at the top. Now, we've obviously selected our scope on the previous screen, but we can add a filter here as well to narrow the scope of our budget. This means we have more granular control over what's included or excluded from the budget.
>
> **[1:36](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-a-budget?u=76281980&t=96)** There are lots of options here, and perhaps you just want to look at certain types of resources, or resources with specific tags. Let's leave this for the time being and just create our budget with the current scope. Next, we need to give our budget a name and select the reset period, that's essentially the time the budget is calculated over, and here, you can select between calendar periods and billing periods, either monthly, quarterly, or yearly. I'm going to leave this as a monthly budget. Next, we can select the creation date and the expiry date. Again, I'm going to leave these as they are, and this budget is going to run for two years. Finally, we need to set the budget amount. Interestingly, we get a, you are given a suggested amount based on the consumption of your resources, but I'm going to set this at 50 pounds. Click Next to move to the next screen. Now, we need to set our alert preferences. Now, I want to be alerted if my forecasted spend hits 50% of my budget, and this will give me the time I need to make any changes to my spending before things get out of hand. Make sure you enter the correct email address, and that's all you need to create a simple budget, and then you should then see the budget in the budget list.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (4)
> **UI Navigation:** select the (3), in the toolbar (1)
> **CLI Commands:** make (2)
> **Tools:** azure portal (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Speakers:** - [instructor] (1)

#### [Automating actions with budgets](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=0)** - [Instructor] So now you've seen how easy it is to create a budget. Let's look now at how we can trigger automatic actions. Log into your [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) portal and go to the [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) and billing page. Click the budget option on the left hand menu and then select the budget that we created earlier. Click edit budget in the toolbar, and then click set alerts. Now this budget is already configured to send an email alert when we hit 50% of our forecasted budget. But what if we wanted to perform some additional actions? Well, this is where action groups come in. Let's create an action group now. To create an action group, select manage action groups. Now, as we don't have any action groups defined so let's click create action group. Now we need to provide a subscription and resource group and give our action group a name. I'm going to call this HPlus Action. Then click next. Now we can have Azure notify us when the action group is run. I'm going to select email from the notification type. Select the email checkbox and then provide my email address. I also need to give this notification a name. You could also get notified by SMS via the Azure mobile app or even by a voice call. Click next and we now get to configure our actions. Now, if you select the action type dropdown, you'll see that there are several different action types that we can run.
>
> **[1:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=93)** For this example, I'm going to select the Azure Logic app. Again, I need to give this action a name. In the pane that slides out from the right hand side, I also need to make sure that my Logic app is selected. Click okay, and that's it. As this is a group of actions, I could include other actions as well but I'm going to keep this just with the Logic app. Finally, click review and create, and then click Create. Back on our budget screen, we can now use the action group that we've created. Next to our forecasted 50% alert condition, select the HPlus action from the dropdown. Finally, with that done, simply click save. So let's make sure we're clear on what we mean by actions by running through a common scenario. Let's say we've created a budget to keep track of costs of the [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) in one of our subscriptions and let's imagine that we've set this budget at a hundred dollars. Now we can configure this budget to trigger an action group when certain conditions are met. Perhaps when we've hit 75% of our budget amounts. This action group can be set up to perform various different actions, such as calling and Azure Logic app or Azure function. It can even call an automation runbook which allows you to perform very advanced tasks such as deploying new resources. It could also call webhooks, which are web URLs exposed as part of an API. We could use this action group
>
> **[3:06](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/automating-actions-with-budgets?u=76281980&t=186)** to shut down our virtual machines and stop our costs increasing. Now, an important thing to point out here is an action groups are only supported for subscription and resource groups scopes so won't work if your budget is created at the resource level. Now, I'm not expecting you to know how to do any of this complicated automation stuff which is why I've kept this example quite simple and we've not gone into what happens when those actions are executed. Just know that you can create actions based on your budgets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1)
> **UI Navigation:** select the (5), dropdown (2), go to (1), in the toolbar (1), checkbox (1)
> **Analogies:** such as (2), imagine (1)
> **Prerequisites:** configure (2), set up (1)
> **CLI Commands:** make (2)
> **Env Vars:** sms (1), api (1)
> **Definitions:** is a  (1), is an  (1)
> **Tools:** azure portal (1)

#### [Cost management best practices](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=0)** - [Instructor] We've now seen how we can create budgets and use them to perform actions. Now is probably a good time to look at some best practice guidance that you can use to ensure that you get off to a good start on your [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) journey. Cost management is a big area, so I really want to focus here on a few key things that you really need to focus on. The first thing we need to do is talk about planning. You need to make sure that when you're planning your infrastructure and services, that you consider any cost implications. Is the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) subscription offer correct for your solution? There are different offers available, ranging from pay-as-you-go through to enterprise agreements, or offers available through [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) partners. The offer you have can have a big impact on the price you pay for resources. What about the resources you're planning on using? Often in Azure, there are many different resource types that can be used to achieve the same goal. Choosing wisely here can help you keep costs down. As an example, CosmosDB, which is a globally distributed database, can be expensive, whereas an Azure storage account is relatively cheap and could, in the right circumstances, achieve the same thing. How you organize your resources can greatly improve your ability to monitor and report over their costs. As we've seen already, our budgets, like many other things in Azure, are managed by resource scope, so it's important that we structure our subscriptions and resources correctly,
>
> **[1:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/cost-management-best-practices?u=76281980&t=93)** as it makes it easier to manage and report over. This means we're likely to going to need multiple subscriptions. H+ Sport have several subscriptions, one for development, one for testing, and one for production. You can make use of dev test subscription offers that offer a reduced cost for development workflows, although these workflows can't be used for production. Now not all resources fit into a neat bucket, and it's common to have shared resources that are used by different teams or cost centers. Or maybe get used across multiple subscriptions, perhaps [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) or an email service would fall into this category. You can tag these resources and mark them as shared, which helps you identify these on the invoice and apportion the costs appropriately. Finally, make sure you size your [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) correctly. This is where most people go wrong and end up incurring significant additional costs. You should continually review your virtual machines to make sure that they are deployed at the right size to meet the needs of your workload and make sure that they're turned off when they're not needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (2), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (2)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)


### 3. Analyzing Costs with Reporting

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing billing](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=0)** - [Instructor] Let's look now at how you can analyze your costs and report over the [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) data within [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). Ultimately, when you receive an invoice at the end of the month, somebody needs to pay that. And if you're like most organizations, that cost is going to have to be attributed to different teams, or cost centers within the organization, and that's the focus of this section. Let's start by talking about billing and the relationship between your invoice, or invoices, and the Azure subscription that you have in your accounts. When you first create an Azure subscription, a billing account is created. A billing account provides a centralized and comprehensive view of your organization's Azure spending, making it easier to manage and optimize your cloud costs. You use this billing account to manage invoices, make payments, and track your spending. You might have access to multiple billing accounts, depending on how your company manages their Azure [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md). Perhaps you have a personal subscription, as well as access to Azure through your organization's enterprise agreements, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Customer Agreement, or Microsoft Partner Agreement. For each of these scenarios, you would have a separate billing account. Let's take a look at how this works by using a Microsoft Customer Agreement as an example. We're using the Microsoft Customer Agreement here, as it's the most common scenario. While this may differ for other account types, the principles here remain the same. So right at the top we, have the billing account.
>
> **[1:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=95)** Now, your billing account might contain one, or more billing profiles. These profiles let you manage your invoices and payment methods. Now, each billing profile contains one, or more invoice sections, and these let you organize costs on the billing profile's invoice. If you have different subscriptions, perhaps for different teams in your organization, then you can use this billing profile to separate, or isolate costs for a particular cost center within your organization. So we use a billing profile to manage invoices and payment methods. A monthly invoice is generated at the beginning of the month for each billing profile in your account. This invoice contains charges for all Azure subscriptions and other purchases from the previous month. Now, a billing profile is automatically created for your billing account when you create your first Azure subscription, and it contains a single invoice section. You can of course create additional sections to easily track and organize costs based on your needs. Perhaps you want to split costs out by project, department, or development environment. You'll see these sections on the billing profile's invoice reflecting the usage of each subscription and purchases you've assigned to it. So each billing profile creates a monthly invoice, and that of course needs to be paid. With that, each profile can have a different payment method, and Azure supports three different payment methods. Firstly, we have Azure credits.
>
> **[3:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-billing?u=76281980&t=191)** Some Azure offers include free credits. These are automatically applied to any eligible charges on your invoice, reducing the amount that you need to pay. Some accounts are approved for payment through bank transfer. This probably applies more to enterprise agreements, and this will be subject to a credit check. If this payment method is available to you, then the instructions for payment are given on the invoice. Finally, the most common payment method is credit card, and if you sign up for your subscription through the Azure website, then this is the payment method that you will use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (12), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (4), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Downloading billing data](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=0)** - [Instructor] So in this demo we're going to be looking at how you actually download all of your important billing data. When it comes to billing data, there are two things that you have access to. Firstly, you have your [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) invoice. That's key for your own financial records. Alongside this, you have the Azure uses and charges file. Now, this is a detailed breakdown of your Azure charges on what's used to calculate your invoice totals. This is very useful in identifying areas where you can optimize costs, but it's important to have this file to validate and ensure that the charges on your invoice are correct. And in this demo, I'm going to show you where you can get these files. So here we are in the Azure Portal in the [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) + Billing section. On the left hand side, under Billing, select Invoices. On this screen, you can see your Default Payment Method, details of your next billing cycle and a list of invoices, typically for the last 12 months. Now, this is where things get a little interesting for us. You'll notice that while I do have invoices, they are all for zero or very small amounts, and this is because I have an Azure subscription that includes free credits and I generally don't incur any charges. So looking at these invoices isn't going to be that helpful to us. Now, fortunately I can show you some sample invoices, helpfully provided by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), and we'll look at those shortly.
>
> **[1:33](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/downloading-billing-data?u=76281980&t=93)** Okay, so this list shows all of the invoices and we can filter this list by subscription, status, or dates. Now, you're probably going to want copies of your invoices sent directly to your finance team. And to do that, you click Receive Invoice by Email in the toolbar. Here, just select the subscription that you are interested in, change the status to true and enter an email, or some additional recipients. Click Save and then your invoices will be automatically emailed each month. You can also download this list of invoices as a CSV file by clicking the Export to CSV button. If you want to download multiple invoices, just select them in the list and then click Download in the toolbar. If you select an individual invoice in the list then you get an invoice overview screen. And here, we have a few more options. We can download the invoice by selecting the Download link, or we can retrieve our usage file by clicking Prepare Azure Usage File. After a few seconds, we get the option to download the file. This is a large file with a lot of data, so it can be quite difficult to make sense of. So let's look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **UI Navigation:** in the toolbar (2), select the (1)
> **Env Vars:** csv (2)
> **Exercise Files:** download the (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Understanding your billing data](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=0)** - [Instructor] Okay, so we've seen where we can download our invoices and our usage and charges files, but if you've looked at these files, you'll see they're a little complicated. Let's dive into them a little more and see if we can understand them a little better. Let's start first by looking at the invoice. Now, this is a sample invoice provided by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). At the top of this first page, we have the account information section, and this shows information about your profile and subscription. Here is where you'll find the invoice number, invoice date, and payment, and method details, all pretty standard stuff for an invoice. Next up, we have the invoice summary, which lists the total transaction amounts since you last billing period and your current usage charges. This example shows the total cost for this period for a subscription called Production Storage. We can see the previous balance, details of any payments made, as well as any adjustments. Finally, at the bottom of the invoice, we have the usage charges section, and you can think of this as the line items of the invoice, as it gives you the breakdown of your total cost. As your services are metered, this means you pay for every unit that you consume. That could be units of time, volume of storage, or some other measure. Some services include a free amount. This section shows all of this information and offers a good high level view of your spend. If you want to dig deeper into these charges, then we need to look at the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) charges usage file that we downloaded, as this contains all of the data that goes to make up this invoice.
>
> **[1:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-your-billing-data?u=76281980&t=94)** So here we are in [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) and I've opened the usage file for one of my invoices. Now, straight away you can see that this file contains a lot of data. On the left hand side, we have details such as the billing period and the subscription details. Over to the right hand side, we have details of the resource, such as resource ID, resource name, and resource group. If you wanted to, you could easily filter this data to see how much you're spending on a particular resource, and you could use this file to identify where you could save cost. However, that's not really what this file is about. We really want this file as a way to validate and check the data on our invoice. If you look at columns T, U, and V, they show us the units used, the price per unit, and the total cost. So if we were to add up all of the values in the total cost column, this should exactly match what is shown on our invoice. If you wanted to, you could then filter this file in different ways to check each individual line item. If all of the numbers match with your invoice, then great, but if not, you should really contact Microsoft for guidance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding scope](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=0)** - [Instructor] Most organizations have multiple [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) subscriptions, so we need a way to be able to limit our reporting so that we're focusing only on the relevant parts of our data, and for that, we use something called scope. Scope is the level at which we can view and manage costs for our Azure resources. We've already talked about scope in this course, but I want to go into it in a little more detail to make sure that we really understand it. Azure resources can be organized into different scopes, which can be thought of as levels of hierarchy. The scopes available in Azure [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) include management group scope. This is the highest level of hierarchy in Azure. It represents a collection of subscriptions that share a common set of policies, governance, and access control. We have subscription scope. This represents a container for Azure resources and is used to separate and manage costs for different workloads, projects, or departments within an organization. And resource group scope. This represents a single resource within a subscription such as a virtual machine or a storage account. Let's jump back to H+ Sports and look at how their environment is structured. So H+ have a single Azure tenant. They use a management group to manage all of their Azure subscriptions. If you've watched my course on Azure policy, you'll already be familiar with this. The management group is the top level of our scope hierarchy. Now within the management group,
>
> **[1:32](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-scope?u=76281980&t=92)** they have two subscriptions, a test subscription and a production subscription. And these subscriptions contain our resource groups. And this is where our individual resources live. When viewing costs in Azure cost management, you can choose to view costs at any of these levels of scope. For example, we could set our scope at the management group level, in which case we would be reporting over the data for all subscriptions and all resources across the organization. Alternatively, we could set the scope at the subscription level. Then we would of course only see data from within that subscription. The same applies to the resource groups and resources themselves, further limiting the scope of the data that we can see. By managing costs at the appropriate scope, you can gain more detailed insights into your spending and optimize costs more efficiently. For example, you might identify a particular subscription or resource group that is consuming a large portion of your budget and take steps to reduce costs in that area.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (10), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (2)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Analyze costs with built-in views](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=0)** - [Instructor] [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) and billing provides us a way to analyze and monitor our costs with something called built-in views. Let's take a look at that next. So here we are in the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) portal and I'm already in the Cost Management section. On the left-hand side, select Cost Analysis. Now you'll notice that there's also a preview version of this tool available, which offers more advanced features, but it's not considered generally available at the moment. So if you're following along, you should now see a screen similar to this. We have a filter bar across the top with several colorful charts underneath. This is showing the accumulated costs for the current billing period. Now again, I'm not incurring any actual costs, but that doesn't matter much at the moment. So you can see these accumulated costs give me some indication of what I can expect as a forecasted cost on my next invoice. Now I could also change the time period. If I select here, I can select from a range of options, including previous invoices for Azure services, previous invoices for marketplace and spot instances, and various relative calendar dates. Now if I select the View dropdown, these are the built-in views that we have available. There are five built-in views available: Accumulated Costs, Cost by Resource, Daily Cost, Cost by Service and Invoice Details. There are also some Preview views available as well.
>
> **[1:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/analyze-costs-with-built-in-views?u=76281980&t=94)** Now if I select Cost by Service as an example, the view now changes, and these graphs show me the breakdown of cost across my various different services. I have Azure DNS, Storage Services, Logic Apps and Bandwidth Charges. Now all of this is highly customizable. I can change the chart type and adjust the granularity. I can also add filters to really drill into the detail of the data. Now you can take these built-in views, customize them and save them as personal views. Once you have the data in the shape that you like it, click Save As in the toolbar, give the view a name and then click Save. You'll notice now that your new view is saved in the views dropdown. Now one of my favorite features is to set up an email subscription. Make sure the view is selected and then click the Subscribe button in the toolbar. Fill in the required recipient's email address and set your schedule and then everyone on the list will receive an email with this view's data. This is a great way to keep everyone aware of what the current forecasted spend is and helps keep everybody accountable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (2)
> **UI Navigation:** dropdown (2), in the toolbar (2), select the (1)
> **CLI Commands:** make (1)
> **Env Vars:** dns (1)
> **Tools:** azure portal (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)


### 4. Reducing Costs with Reservations

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing reservations](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=0)** - [Instructor] So you've now received your invoice, know how to download your charging files, now you want to reduce your costs. One of the best ways we have of doing that in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) is taking advantage of a feature called Reservations. Reservations offer us a way to save money by pre-purchasing Azure services. Now, in order to do this, we need to commit to a one or three year plan for multiple [products](../../Skills/Software%20Development/Microsoft%20Products.md). Committing like this allows you to get a discount on the resources that you use and this can lead to a reduction in costs of up to 80% compared to pay-as-you go prices. Now obviously that depends on the type of resource that we're talking about. Now it's important to understand that a reservation is just a billing discount and it has no effect on the actual resources themselves. After you've purchased a reservation, the discount then automatically applies to all eligible resources. Now you can pay for a reservation upfront or monthly and the total cost for upfront or monthly payments is the same. You don't get charged any extra fees for paying monthly. So which resources are supported by reservations? And how much can you really save? Well, the resource types that can be reserved are subject to change, but at the moment, you can reserve about 26 different types of resource. There are some common resource types here as well as some more specialized services. Reservations for [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) can save you up to 80% compared to the normal pay-as-you-go rates.
>
> **[1:37](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/introducing-reservations?u=76281980&t=97)** There are also many Azure Storage services that can be reserved, such as [SQL](../../Skills/Data%20Science/SQL.md), Storage Accounts, Cosmos DB and [Redis](../../Skills/Software%20Development/Redis.md) Cache. The amount you save changes depending on the resources, but as an example, an Azure SQL Reservation can save a whopping 80% and you can save at least 65% on your Cosmos DB costs. App Service is also available for reservation. Now App Service is a service that can get really quite expensive quite quickly, especially when you have multiple instances, so reserving these can reduce costs by up to 55%. By carefully selecting reservations, you can drastically reduce your overall Azure expenditure. You just need to commit to a one year or a three year deal. But how do you know which services to reserve? Let's look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Redis](../../Skills/Software%20Development/Redis.md) (1)
> **Env Vars:** sql (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Understanding reservation recommendations](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=0)** - [Instructor] There are two ways that we could use to work out which reservation to purchase. We could manually analyze all of our usage data, looking at what services we spend our money on. We could then compare that with the cost of reserved instances. Now, while that's possible, it's going to be quite labor intensive, and very difficult to get right. Alternatively, we could let [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) do the work with a feature called reservation recommendations. These recommendations are automatically created by [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) based on your resource usage. Microsoft is actively monitoring our usage, and looking for ways to save us money. Now, these recommendations are available in several different places for virtual machine recommendations. These are available in Azure Advisor. We can also see and purchase reservation recommendations in the reservation purchase experience in the Azure portal. We can view recommendations in the [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) [Power BI](../../Skills/Data%20Science/Microsoft%20Power%20BI.md) app, although that's not something we'll cover in this course, and we can also see these in Azure API. So let's look at how Azure creates these recommendations. Now, the first thing that happens is that the recommendations engine looks at the hourly usage for all of our Azure resources over the last seven, 30 and 60 days. And based on this data, the engine then simulates the cost of running these resources without reservations. This gives a forecasted cost based on our actual usage.
>
> **[1:35](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=95)** It then reruns this process, but with the reservations pricing model applied to work out how much you might save, it also simulates using different quantities of resource to try and identify the best recommendations to minimize cost. Now, this is all done using advanced machine learning, and this model eventually generates some recommendations, which are what we see in the portal. Now, this process is ongoing, but it's important to realize that if your resources are shut down regularly, then these [Simulation](../../Skills/Hardware/Simulation.md) won't have enough usage data to work with and as a result, it won't generate any recommendations for that resource type. It can also take some time before Azure generates recommendations for you. So if you don't see any yet, don't panic. Now, let's look in Azure at where we can find these recommendations. So here we are in the Azure portal. Now, the easiest way to find reservation recommendations is by using Azure Advisor. Just type advisor into the search bar, and select Azure Advisor from the list. Select Cost in the left-hand menu to see the cost recommendations. Now, I'm not going to be able to show you any actual recommendations from this screen. The reason for this is simply that there aren't any. I'm already following all of the cost recommendations for my account and there aren't any recommendations
>
> **[3:11](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/understanding-reservation-recommendations?u=76281980&t=191)** for me to purchase. If there were some recommendations, then I would expect them to look like this. This screen shows me three recommendations that impact a total of six resources. And as you can see, by following these recommendations, I could save several thousand pounds every year. If I were to select the middle recommendation here, I would see a screen like this. From here, I can set each individual recommendation. Here, it's recommending that I purchase a reservation, so it would take me to the reservation system where I can complete that purchase. We're going to look at reservations more in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (11), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (1), [Power bi](../../Skills/Data%20Science/Microsoft%20Power%20BI.md) (1), [Simulation](../../Skills/Hardware/Simulation.md) (1)
> **CLI Commands:** find (2)
> **Tools:** azure portal (2)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Creating reservations](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=0)** - [Instructor] Let's look now at how we can create reservations. Now, in this demo, we're going to be looking at how you create reservations in the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) portal. But while we're not covering it specifically, it's important to understand that you can also create them using Azure [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md), the Azure [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), or the Azure API. Now, these tools provide much more flexibility and automation for managing reservations at scale. So, here we are in the Azure portal. So, let's navigate to the Reservations page. Now, you can do this by clicking on the Reservations link in the left-hand menu, or if it's not there, searching for reservations in the search bar. Now, if you have any existing reservations, then you'll see those listed on this screen. To add a new reservation, click the Add button in the toolbar. Now we just need to select the type of reservation that we want to create. Now, Azure offers reservations for [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), [SQL](../../Skills/Data%20Science/SQL.md) [Databases](../../Skills/Software%20Development/Databases.md), Cosmos DB, and much, much more. So, choose the type of reservation that best fits your need. I'm going to choose App Service for this example. We then need to choose the subscription that the reservation will be associated with. If you have multiple subscriptions, make sure you select the correct one here. Now, you can't use a reservation across multiple subscriptions, so it only gets applied to resources in the subscription that you select at this point.
>
> **[1:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=94)** Select the scope of the reservation next. This is where you choose which resources the reservation will apply to. Most of the time, you'll want to leave this as it is. You could, though, choose to apply the reservation at the subscription level, resource group level, or individual resource level. Note that the available scope options may vary depending on the type of reservation that you are creating. Next, choose the term of the reservation that you want to see. This is how long the reservation will last, and Azure offers one-year and three-year reservation terms. This filters the list to show only your applicable options. We can also search by region and by billing frequency.
>
> **[2:23](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/creating-reservations?u=76281980&t=143)** Once you've selected the reservation that you want to purchase, just click Add to Cart. In the cart, you can now change the billing frequency, if you need to, and adjust the quantity of reservations that you want to make. Review the reservation details and make sure everything is correct. If everything looks good, click the Buy button to complete the reservation purchase. I'm not actually going to buy this, but once the reservation is created, it will be listed on the Reservations page. You can view details about the reservations such as the coverage start and end dates, the quantity of reservations, and the scope of the reservations. Overall, reservations in Azure provide a powerful way to manage costs and optimize your resource usage. By taking advantage of reservations, you can ensure that you have the capacity you need to run your workloads while also saving money on your Azure bills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (9), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **UI Navigation:** select the (3), navigate to (1), in the toolbar (1)
> **CLI Commands:** make (3)
> **Env Vars:** cli (1), api (1), sql (1)
> **Tools:** azure portal (2), powershell (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next with Azure management?](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=0)** - [Instructor] Managing costs is an everyday part of running a successful business, with [Cloud Computing](../../Topics/Cloud%20Computing.md), this can sometimes feel daunting as costs can be difficult to identify and monitor. As your [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) and billing helps us solve this challenge but it's not an easy tool to master. Before we talk about your next steps let's quickly review what we've covered in this course. We started off by looking at the cost management methodology. Cost management is an ongoing iterative process that aims to solve this challenging organizational problem. This is not something that can be solved by you alone and it will acquire input and commitment from all areas of your business. We then looked at budgets. Budgets are the first place to start when trying to manage your costs, as they clearly define your expectation what you are willing to spend on particular resources or services. Now, alongside these budgets, we use action groups and alerts to drive automations and notifications. These letters respond quickly as certain financial triggers are hit. And finally, we looked at reservations. Reservations allow us to pre-purchase [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) services at a discounted rate. [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) automatically makes reservation recommendations for us based on our usage but to take advantage of them, you need to be proactive. So what about next steps? To get the most out of cost management and billing, it's really important to make sure that your resources are structured in a logical way. Try and isolate different cost centers in their own subscriptions. You can have as many subscriptions as you need
>
> **[1:34](https://www.linkedin.com/learning/controlling-cost-with-azure-management-and-billing/what-s-next-with-azure-management?u=76281980&t=94)** and each subscription will receive its own invoice. Make use of tags. You can tag resources and resource groups with helpful identifiers or cost center codes. Again, this will make things more easily identifiable in the reporting. You should set up your own reporting views in cost management analytics to view the data in a way that makes sense to you. You can use this to help identify areas where costs are increasing. And finally, you should work with the development teams in your company to reduce waste. This can include turning off unused resources or scaling down over provision services. And remember there is no one size fits all solution here that is going to help you drive down your Azure costs but the data is there to help you make the right decisions. We've only just skimmed the surface of what's available within cost management. But I hope you've seen enough to make your first steps and I wish you luck on the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cost Management](../../Skills/Software%20Development/Cost%20Management.md) (6), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** make (5)
> **Definitions:** is an  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [James Millar](../../Instructors/Cloud%20Computing/James%20Millar.md)

## Skills Covered

- Cost Management
- Microsoft Azure

## Path Context

### In [Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals](../../Paths/Cloud%20Computing/Learning%20Paths/Infrastructure%20Management%20on%20Microsoft%20Azure-%20Top%20Skills%20for%20IT%20Professionals.md)
← [Manage Storage in Azure](Manage%20Storage%20in%20Azure.md) | **8 of 8**

## Appears In

- [Infrastructure Management on Microsoft Azure- Top Skills for IT Professionals](../../Paths/Cloud%20Computing/Learning%20Paths/Infrastructure%20Management%20on%20Microsoft%20Azure-%20Top%20Skills%20for%20IT%20Professionals.md)

## Related Courses

_Courses sharing skills:_

- [Blockchain for Developers- Hyperledger Fabric on Azure](../Cybersecurity/Blockchain%20for%20Developers-%20Hyperledger%20Fabric%20on%20Azure.md) — Microsoft Azure
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Microsoft Azure
- [AI Pricing and ROI- A Technical Breakdown](../Artificial%20Intelligence%20(AI)/AI%20Pricing%20and%20ROI-%20A%20Technical%20Breakdown.md) — Cost Management
- [Azure DevOps for Beginners](Azure%20DevOps%20for%20Beginners.md) — Microsoft Azure
- [Azure Storage Essential Training (2021)](Azure%20Storage%20Essential%20Training%20(2021).md) — Microsoft Azure

---

[↑ Back to top](#)