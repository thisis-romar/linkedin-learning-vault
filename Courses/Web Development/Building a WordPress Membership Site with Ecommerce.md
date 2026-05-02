---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-a-wordpress-membership-site-with-ecommerce
url: "https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce"
duration_minutes: 66
duration: 1h 6m
level: Intermediate
updated: 10/21/2021
learners: 5709
skills:
  - Wordpress Development
  - E-Commerce
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFroQDxzN6Mlw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634664278629?e=2147483647&amp;v=beta&amp;t=TY3BNIwe-2O9fJINBROE6FeejvCZ7DxjvpMRk1hjGSk"
linkedin_topic: Web Development
learning_paths:
  - '[[Build Your WordPress Ecommerce Skills]]'
prev_courses:
  - '[[WordPress- Speeding Up Your Site]]'
path_nav: '[{"path":"Build Your WordPress Ecommerce Skills","position":6,"total":6,"prev":"WordPress- Speeding Up Your Site","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/wordpress-development
  - skill/e-commerce
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20a%20WordPress%20Membership%20Site%20with%20Ecommerce.md)

![Building a WordPress Membership Site with Ecommerce](https://media.licdn.com/dms/image/v2/C560DAQFroQDxzN6Mlw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634664278629?e=2147483647&amp;v=beta&amp;t=TY3BNIwe-2O9fJINBROE6FeejvCZ7DxjvpMRk1hjGSk)

# Building a WordPress Membership Site with Ecommerce

> Do you need to implement a membership and ecommerce solution for yourself or a client? Are you looking for guidance on tools you can use to build such a solution? This course from experienced developer and blogger Carrie Dils is just what you need. Carrie gives you an overview of what you will need for this course and the demo project you’ll be building, then defines paid membership sites and proj

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce) | 1h 6m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Build a paid membership website](#build-a-paid-membership-website)
  - [What you need](#what-you-need)
  - [Demo project overview](#demo-project-overview)
- [**1. Getting Started**](#1-getting-started) (5 videos)
  - [What is a paid membership site?](#what-is-a-paid-membership-site)
  - [Define project requirements](#define-project-requirements)
  - [Why WooCommerce?](#why-woocommerce)
  - [Why WooCommerce Memberships?](#why-woocommerce-memberships)
  - [Set up your site](#set-up-your-site)
- [**2. Setting Up Your Store**](#2-setting-up-your-store) (2 videos)
  - [Installing WooCommerce](#installing-woocommerce)
  - [Importing demo products](#importing-demo-products)
- [**3. Setting Up Your Memberships**](#3-setting-up-your-memberships) (6 videos)
  - [Get and install WooCommerce Memberships](#get-and-install-woocommerce-memberships)
  - [Setup and configuration](#setup-and-configuration)
  - [Create products for memberships](#create-products-for-memberships)
  - [Create a membership plan](#create-a-membership-plan)
  - [Add custom profile fields](#add-custom-profile-fields)
  - [Create member discounts](#create-member-discounts)
- [**4. Restricting Content and Products**](#4-restricting-content-and-products) (4 videos)
  - [Understanding restriction rules](#understanding-restriction-rules)
  - [Restrict content to members](#restrict-content-to-members)
  - [Restrict products to members](#restrict-products-to-members)
  - [Dripping content](#dripping-content)
- [**5. Managing Members**](#5-managing-members) (3 videos)
  - [Set up member account area](#set-up-member-account-area)
  - [Manual member management](#manual-member-management)
  - [Customize email content](#customize-email-content)
- [**6. Before You Launch**](#6-before-you-launch) (3 videos)
  - [Test registration and payments](#test-registration-and-payments)
  - [Test access to content](#test-access-to-content)
  - [Test email deliverability](#test-email-deliverability)
- [**Conclusion**](#conclusion) (2 videos)
  - [Additional integrations](#additional-integrations)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build a paid membership website](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/build-a-paid-membership-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/build-a-paid-membership-website?u=76281980&t=0)** - [Instructor] Membership websites are an incredibly popular way to earn money online in exchange for providing valuable content.
>
> **[0:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/build-a-paid-membership-website?u=76281980&t=7)** Maybe you've thought about building one for yourself, or want to be able to offer that service to clients.
>
> **[0:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/build-a-paid-membership-website?u=76281980&t=12)** With the evolution of [[WordPress]], [[E-Commerce]], and membership plugins, building a paid membership site is more approachable than ever.
>
> **[0:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/build-a-paid-membership-website?u=76281980&t=20)** Starting with a fresh WordPress install and minimal cost, I'll show you how to create an online store and sell paid memberships.
>
> **[0:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/build-a-paid-membership-website?u=76281980&t=28)** My name is Carrie Dils, and I've been building WordPress sites for the better part of a decade.
>
> **[0:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/build-a-paid-membership-website?u=76281980&t=33)** If you want to build on your WordPress skills and walk away with the ability to create a paid membership site for yourself or for your clients, then you're in exactly the right spot.
>
> **[0:43](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/build-a-paid-membership-website?u=76281980&t=43)** Saddle up your horses and let's hit the trail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4), [[E-Commerce]] (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [What you need](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=0)** - [Instructor] To get the most out of this course, you should have a solid knowledge of working with [[WordPress]], both as a user and a site administrator.
>
> **[0:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=7)** If you're new to WordPress, I suggest you start with [[WordPress Essential Training]].
>
> **[0:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=12)** It's also helpful if you have a basic understanding of the role membership plugins play in WordPress.
>
> **[0:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=17)** If you'd like a quick overview of what membership plugins are and the options available for WordPress, I created this course for you.
>
> **[0:25](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=25)** Additionally, in this course, we'll be working a lot with [[WooCommerce]].
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=29)** WooCommerce is an incredibly robust [[E-Commerce]] solution, and this course assumes you already have a basic working knowledge.
>
> **[0:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=35)** If that's not the case, I recommend checking out this WooCommerce course in addition to this course.
>
> **[0:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=41)** Additionally, you should note that I'm using a paid plugin in this course, WooCommerce Memberships.
>
> **[0:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=47)** You absolutely do not have to buy the plugin to take this course, but if you want to follow along and build the project I'm building, you'll want access to that plugin.
>
> **[0:56](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=56)** Other than that, the only other thing you need to succeed is a desire to learn.
>
> **[1:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-you-need?u=76281980&t=60)** If that's you, let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5), [[WooCommerce]] (4), [[E-Commerce]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Demo project overview](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/demo-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/demo-project-overview?u=76281980&t=0)** - [Instructor] In this course, I'll be working with a fictitious brand called Two Trees Olive Oil.
>
> **[0:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/demo-project-overview?u=76281980&t=5)** It's an [[E-Commerce]] website for a family-owned business that's been farming olives and making olive oil for decades.
>
> **[0:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/demo-project-overview?u=76281980&t=12)** They wanted to offer a paid membership option that would enable customers to get scheduled allotments of olive oil and access to special perks, like on-site tours and tastings.
>
> **[0:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/demo-project-overview?u=76281980&t=22)** I start the project with a fresh [[WordPress]] install and walk you through the process of installing and configuring both the [[WooCommerce]] and WooCommerce membership plugins.
>
> **[0:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/demo-project-overview?u=76281980&t=32)** I also show you how to set up a membership plan, sell it as a WooCommerce product, and restrict content to members.
>
> **[0:39](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/demo-project-overview?u=76281980&t=39)** You're welcome to follow along and create your own site, or sit back and take it in to learn how it all works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (3), [[E-Commerce]] (1), [[WordPress]] (1)
> **Prerequisites:** install (1), set up (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a paid membership site?](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=0)** - [Instructor] A membership site is any type of site that requires you to sign up for an account and log in in order to view members-only content or have access to members-only features.
>
> **[0:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=10)** A paid membership site is exactly what it sounds like.
>
> **[0:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=14)** You pay money to gain access to members-only features, or since you're taking this course to learn how to build a paid membership site, maybe other people are paying you to access gated content.
>
> **[0:25](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=25)** You can apply the idea behind a paid membership website to a lot of different scenarios.
>
> **[0:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=30)** Things like building a community or exclusive access to [[Microsoft Products|products]], activities, information, or even opportunities.
>
> **[0:38](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=38)** Instead of talking in theory, let me show you an example of some popular and successful paid membership sites in the wild.
>
> **[0:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=45)** First, there's Food Blogger Pro.
>
> **[0:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=47)** This is a site full of resources aimed specifically at helping food bloggers grow and monetize their sites.
>
> **[0:53](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=53)** The information behind this walled garden includes everything from getting started in branding your food blog to strategies for growing traffic, monetization options, and helping you decide on the technologies to bring it all together.
>
> **[1:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=67)** If you're passionate about food, blogging and want to make some money doing it, then you could see the value behind joining this sort of community.
>
> **[1:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=75)** Next, let's talk about a very different sort of membership site.
>
> **[1:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=79)** This is AppSumo, they've been around for ages and what they do is offer deals on various software products.
>
> **[1:25](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=85)** Their site is free to use, but they also augment their platform with AppSumoPlus, which basically brings people additional savings and access to exclusive deals.
>
> **[1:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=95)** The selling point here, if you're going to be spending money on plugins or software, et cetera, for your business, you can spend less money as an AppSumoPlus member.
>
> **[1:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=104)** One more we'll take a look at, and this one you should already be familiar with, that's right, [[LinkedIn]] Learning.
>
> **[1:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=111)** The very platform you're using to take this course on.
>
> **[1:54](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=114)** If you've been around a while, you might've even started back when it was [lynda.com](https://lynda.com).
>
> **[1:58](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=118)** Of course, the purpose of this site is education.
>
> **[2:01](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=121)** These days you can purchase classes, al a cart, but the most popular way to use the platform is via membership.
>
> **[2:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=128)** For a monthly fee you get all you can eat access to the full library of learning paths and courses.
>
> **[2:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=134)** So these are just a few examples of paid membership sites.
>
> **[2:18](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=138)** Food Blogger Pro helps a specific niche build an online business.
>
> **[2:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=143)** AppSumoPlus facilitates great deals on popular software and tools.
>
> **[2:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=148)** And LinkedIn Learning is arming you with the knowledge you need to succeed.
>
> **[2:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=152)** Beyond charging a fee for exclusive access, a common selling point for most paid membership sites is that you'll earn back the money you spent on membership many times over when you implement the tools, training, and knowledge that you gained via that membership.
>
> **[2:48](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/what-is-a-paid-membership-site?u=76281980&t=168)** Now that you've seen a handful of examples of paying membership sites out there, let's get down to the nitty gritty of planning what we want for the membership site we're building in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[LinkedIn]] (2)
> **CLI Commands:** make (1)
> **URLs:** [lynda.com](https://lynda.com) (1)
> **Definitions:** is a  (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Define project requirements](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980&t=0)** - [Instructor] If you've built a website with me in one of my other courses, you know that I like to start off with a little planning.
>
> **[0:06](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980&t=6)** For me, and maybe you, the planning stage isn't necessarily as fun as the building part, but it is absolutely critical for the success of a project.
>
> **[0:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980&t=15)** There are a lot of ways you can go about creating a paid membership site.
>
> **[0:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980&t=19)** And the only way to know which option is best for you is to have some clearly defined project requirements.
>
> **[0:25](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980&t=25)** And those requirements will help inform the solution that you ultimately pick.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980&t=29)** In this course, we're building a website for a fictional company called Two Trees Olive Oil.
>
> **[0:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980&t=34)** Let's say I've already got a [[WordPress]] site for this company, just the basic stuff, like some information about the company, a blog and some contact info, but now the owners want to sell [[Microsoft Products|products]] online and offer a special membership club.
>
> **[0:48](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980&t=48)** To make that happen, here are some things that we know we'll need: product photography and details, a way to sell products, a secure website for processing payments, a theme that works well with our [[E-Commerce]] solution, a way to create members, and restrict content and products, a way for customers and members alike to manage their accounts, and finally, a way to send emails to customers and members regarding orders, payments, membership renewals, et cetera.
>
> **[1:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/define-project-requirements?u=76281980&t=75)** Your specific project requirements may differ from mine, and that's totally okay, but as we move through this course, selecting the theme and plugins to use, et cetera, I'll be focusing on making sure my finished site meets these requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3), [[WordPress]] (1), [[E-Commerce]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Why WooCommerce?](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=0)** - [Instructor] There are a lot of [[E-Commerce]] solutions out there.
>
> **[0:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=3)** Even if you just narrow it down to e-commerce solutions for [[WordPress]], there's still a variety of options to choose from.
>
> **[0:09](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=9)** So why did I pick [[WooCommerce]] for this project?
>
> **[0:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=12)** Well, WooCommerce happens to be the most popular e-commerce solution in the world.
>
> **[0:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=17)** It's been around for well over a decade, so it's stable and mature and it supports an entire ecosystem of WooCommerce-specific extensions, services, and even specialized hosting.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=29)** It's not going anywhere anytime soon, which makes it an attractive option for building e-commerce sites that will stand the test of time.
>
> **[0:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=37)** Here are some specific advantages of using WooCommerce.
>
> **[0:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=40)** There's a large number of add-ons, extensions, and themes available, which make it easier for shop owners to add new features or customizations to their store.
>
> **[0:49](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=49)** The wide variety of themes also means there's a ton of flexibility when it comes to choosing your site's design and layout.
>
> **[0:56](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=56)** WooCommerce also supports the sale of both digital and physical goods.
>
> **[1:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=60)** As for the digital goods, think things like eBooks, music, software, and, you guessed it, memberships.
>
> **[1:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=68)** WooCommerce has built-in support for popular payment gateways.
>
> **[1:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=72)** It can also calculate shipping and taxes and be used for inventory and order management.
>
> **[1:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=77)** In other words, it's incredibly robust out of the box, not to mention all of the other ways you can extend it to meet specific use cases.
>
> **[1:25](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=85)** It's also scalable.
>
> **[1:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=86)** Whether you're a family-owned store selling a few bottles of olive oil a day or a retail behemoth selling hundreds of [[Microsoft Products|products]] a minute on Black Friday, WooCommerce can handle it.
>
> **[1:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=96)** Finally, there's an active developer community behind it.
>
> **[1:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=100)** Between that and the excellent support and documentation available, you'll have access to help when you need it.
>
> **[1:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce?u=76281980&t=106)** While WooCommerce certainly isn't the only option when it comes to e-commerce and WordPress, it's the right choice for the project I'm building in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (8), [[E-Commerce]] (5), [[WordPress]] (2), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ebooks (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Why WooCommerce Memberships?](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=0)** - [Instructor] In addition to choosing [[WooCommerce]] as the [[E-Commerce]] plugin for this project, I've also opted to use WooCommerce Memberships to handle the membership aspects that we need.
>
> **[0:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=10)** Just as with e-commerce, there are lots of options when it comes to choosing membership plugins.
>
> **[0:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=15)** I highlighted the most popular of these options in the course on getting started with a [[WordPress]] membership site.
>
> **[0:21](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=21)** For the project we're building in this course, I chose WooCommerce Memberships for a few specific reasons.
>
> **[0:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=27)** First, the site isn't just about memberships.
>
> **[0:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=30)** It's a functional e-commerce website with a membership component.
>
> **[0:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=34)** Since we've decided that WooCommerce is the best option for this project, it makes sense to choose a plugin that will integrate seamlessly, and that's what WooCommerce Memberships does.
>
> **[0:43](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=43)** Next, I need a solution that lets me restrict content to members based on their membership level.
>
> **[0:49](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=49)** And I also need a solution that lets me integrate member perks within my store, such as access to members-only [[Microsoft Products|products]], enhanced shipping options or special discounts.
>
> **[1:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=60)** WooCommerce Memberships plugin checks all of these boxes.
>
> **[1:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=63)** Additionally, I know the team behind the plugin, SkyVerge, and their commitment to excellence.
>
> **[1:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=68)** I know that this is a well-documented and supported plugin.
>
> **[1:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=72)** Now, it is a paid add-on to WooCommerce.
>
> **[1:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=75)** You don't have to buy the plugin to follow this course.
>
> **[1:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=77)** However, if you want to build a site like the project I'll be building, you will need access to the plugin.
>
> **[1:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/why-woocommerce-memberships?u=76281980&t=83)** That said, considering how much work it would take to build this sort of solution from scratch, the price tag is well worth what you get.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (7), [[E-Commerce]] (3), [[WordPress]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Set up your site](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=0)** - [Instructor] Okay, let's get started.
>
> **[0:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=2)** First things first, I'm going to start with a clean [[WordPress]] install.
>
> **[0:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=5)** I've created a site on my machine using Local.
>
> **[0:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=8)** It's available for free at [localwp.com](https://localwp.com) and it's a great way to get started with local [[Wordpress Development]].
>
> **[0:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=15)** Of course, you can use whatever you want to follow along.
>
> **[0:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=17)** I just wanted to show you what I'm using.
>
> **[0:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=19)** So this is a clean WordPress install.
>
> **[0:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=22)** If I click on Posts, I can see I've just got that default Hello world post.
>
> **[0:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=27)** Same thing for pages.
>
> **[0:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=30)** I've got no plugins and I'm currently running the default 2021 theme.
>
> **[0:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=36)** To get started here, I'm going to install a free theme by Automatic and [[WooCommerce]] called Storefront.
>
> **[0:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=44)** Okay, this is the one.
>
> **[0:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=47)** Now, this is a basic WordPress theme that has full support for WooCommerce.
>
> **[0:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=51)** That means all the styles and options, et cetera are geared toward WooCommerce sites, which makes this a great starting point.
>
> **[0:58](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=58)** So I'm going to go ahead and install it.
>
> **[1:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=60)** And activate it.
>
> **[1:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=63)** Let's click Customize and I'm going to change just a few things to get it set up for my fictitious client, Two Tree Olive Oils.
>
> **[1:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=71)** Now, if you're new to working with a Customizer and get this message, you can explore that or just say no thanks.
>
> **[1:18](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=78)** So the first thing I want to do is go to site identity, and I'm going to change the title.
>
> **[1:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=83)** Two Tree Olive Oils, and I'm going to select a logo.
>
> **[1:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=92)** Okay.
>
> **[1:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=93)** And the logo's got some white in it and you can't really see it with this white background.
>
> **[1:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=97)** So let's go ahead and make a couple of changes, and I'll start by going to the header, and let's pick a new background color.
>
> **[1:50](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=110)** There we go.
>
> **[1:52](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=112)** And we'll change the text color to white so that we can see it, and the link color as well.
>
> **[1:59](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=119)** There we go.
>
> **[2:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=122)** So from here, you can see that we get a ton of options for configuring colors for the header, the footer, [[Typography]], buttons, layout et cetera.
>
> **[2:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=131)** I'm not going to spend a ton of time on design here since that's not the focus of this course but I will modify a few things just to make it look a little more ambient.
>
> **[2:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=146)** We'll give a custom heading color.
>
> **[2:31](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=151)** A text color.
>
> **[2:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=153)** And let's change our link color.
>
> **[2:39](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=159)** All right, and I'll click Publish.
>
> **[2:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=161)** So with just a few customizations in place, let's go ahead and add some content to get us started.
>
> **[2:48](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=168)** Now, just so you don't have to watch me painstakingly add pages and post, I'm going to import some that I already have.
>
> **[2:55](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=175)** To do that, I'll go to this tools, import, and I'm going to select this WordPress, install now.
>
> **[3:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=184)** And then click the run importer.
>
> **[3:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=188)** I'm going to go ahead and choose the file that I've got on my hard drive.
>
> **[3:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=199)** And start that import process.
>
> **[3:21](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=201)** And now if I go back to pages, I can see that I've got some pages, oh, I've got a couple of duplicates here.
>
> **[3:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=209)** We'll just get rid of those.
>
> **[3:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=212)** And if I go to posts, you can see that I've got a few sample blog posts.
>
> **[3:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=217)** Perfect.
>
> **[3:38](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=218)** By the way, if you ever need to move some content between sites, using WordPress' built-in import/export feature is really handy.
>
> **[3:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=225)** So now that I've got some core content, I'm going to go to Settings, Reading, and I'm going to select a static page from my home page.
>
> **[3:54](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=234)** We'll just say Sample Page for now.
>
> **[3:56](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=236)** And for the posts page, I'll select blog.
>
> **[4:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=240)** And we'll save the changes.
>
> **[4:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=242)** And lastly, let's create a navigation menu.
>
> **[4:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=244)** So I'll go to Appearance, Menus.
>
> **[4:09](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=249)** Oh, and it looks like when I did that import for posts and pages, it also brought in a menu.
>
> **[4:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=254)** So that's perfect.
>
> **[4:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=257)** Let's make sure this is assigned to the primary menu area, and click Save.
>
> **[4:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-your-site?u=76281980&t=263)** Now if we go look at our site, we've got the basic scaffolding in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5), [[WooCommerce]] (3), [[Wordpress Development]] (1), [[Typography]] (1)
> **UI Navigation:** go to (5), click on (1)
> **Prerequisites:** install (5), set up (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **URLs:** [localwp.com](https://localwp.com) (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up Your Store

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing WooCommerce](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=0)** - [Instructor] Previously, I've done some basic site setup.
>
> **[0:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=3)** Other than adding the Storefront theme that works great with [[WooCommerce]], I haven't done anything to the site regarding [[E-Commerce]] or memberships.
>
> **[0:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=11)** I just wanted to show you what I've done so far in case you're following along using your own brand's assets.
>
> **[0:18](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=18)** Now, because I installed Storefront, I get this handy notice to install WooCommerce or learn more.
>
> **[0:24](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=24)** You're welcome to install directly from there.
>
> **[0:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=27)** But in case you're using a different theme or maybe don't see this message, we'll just install it directly from the [[WordPress]] plugin repository.
>
> **[0:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=35)** Plugins, add new, and search for WooCommerce.
>
> **[0:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=40)** And here it is, created by Automatic and with over five million active installations.
>
> **[0:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=46)** Yowza.
>
> **[0:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=47)** I'm going to click Install Now.
>
> **[0:49](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=49)** And Activate.
>
> **[0:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=51)** So once activated, I'm automatically routed to this store setup wizard.
>
> **[0:55](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=55)** Now, if you're ready to proceed with these details, go ahead with the process.
>
> **[0:59](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=59)** If not, you can say skip setup store details and come back to this process later.
>
> **[1:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=65)** But note, while you don't have to do this setup right at this minute, you will not be able to sell until this is complete.
>
> **[1:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=71)** That's because this is where you set up information about your store, such as your business address, configure payment gateways and sales tax.
>
> **[1:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=80)** I'm going to go ahead and skip it for now.
>
> **[1:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=82)** If you get this popup about sharing data, that's about whether you want to anonymously share data about your store and transactions.
>
> **[1:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=89)** Sharing this data helps the developers understand how WooCommerce is being used in the real world, and passes along errors if you get any.
>
> **[1:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=97)** Basically, it's an easy way to contribute to making this open source software better.
>
> **[1:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=101)** If you're not comfortable with that for any reason, opt out and you're good to go.
>
> **[1:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=107)** Now, WooCommerce has a lot of in-admin onboarding info.
>
> **[1:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=111)** And depending on whether you're comfortable with WooCommerce or if this is your first time, feel free to either dismiss these notices or follow along with them to learn more.
>
> **[2:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=122)** So I want to point out that when we activated WooCommerce, we got several new menu items.
>
> **[2:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=127)** WooCommerce, that's where we can get back to all those store setup details.
>
> **[2:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=131)** It's where you manage orders, customers, view reports or even browse extensions.
>
> **[2:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=139)** Extensions are integrations that work with WooCommerce.
>
> **[2:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=142)** We also get this [[Microsoft Products|products]] menu, which is where you can add and manage products.
>
> **[2:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=147)** We'll look at that more in the next lesson.
>
> **[2:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=149)** Then there's this Analytics tab, and that's where you can deep dive into all sorts of stats and reports for the store.
>
> **[2:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=155)** Obviously, right now, it's not looking too interesting.
>
> **[2:38](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=158)** Lastly, we've got this marketing tab.
>
> **[2:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=160)** And among other things, you can create coupons here.
>
> **[2:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=164)** I won't spent a lot more time here on the WooCommerce setup because I want to move forward with the guts of this course, which is creating a paid membership site.
>
> **[2:53](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=173)** WooCommerce is just part of the foundation for that.
>
> **[2:55](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=175)** Now, if you want to deep dive into any aspect of setting up a store with WooCommerce, check out this course in the library.
>
> **[3:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/installing-woocommerce?u=76281980&t=182)** You can watch the whole thing or just browse the contents and pick the lessons most relevant to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (12), [[Microsoft Products|Products]] (2), [[E-Commerce]] (1), [[WordPress]] (1)
> **Prerequisites:** setup (6), install (4), set up (1), configure (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Importing demo products](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=0)** - [Instructor] In order to get the full feel of working with [[E-Commerce]], we need some [[Microsoft Products|products]].
>
> **[0:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=4)** I've got a handful of products I'll be using for this project that I uploaded when you weren't looking.
>
> **[0:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=10)** In case you don't have products for your site yet, but you're ready to move forward with getting a working cart set up, I'm going to walk you through the process of importing demo products.
>
> **[0:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=20)** Now, sample data for [[WooCommerce]] is located in a file either called sample_products.csv or sample_products.xml and these are located in the WooCommerce plugin folder in WooCommerce, Sample Data.
>
> **[0:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=35)** And you can get this in two ways.
>
> **[0:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=37)** You could re-download WooCommerce from [[[WordPress]].org](https://wordpress.org), open up that ZIP and find the files in the folder, or go to your existing WordPress install, which is what I'm doing, and find it from there.
>
> **[0:50](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=50)** There are a couple of ways to import products.
>
> **[0:53](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=53)** Now, the first is when you're going through that initial setup wizard in WooCommerce, which you can get back to by going to WooCommerce Home and here's the link to add products.
>
> **[1:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=64)** The second is from the products page.
>
> **[1:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=67)** This gives you an option to merge data to your store and to map fields, which is cool.
>
> **[1:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=72)** Let's go ahead and do this.
>
> **[1:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=74)** I'll start by clicking Import, choose file, so I'm going to go to my local install.
>
> **[1:21](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=81)** Here's the WooCommerce plugin.
>
> **[1:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=83)** And if I go to that Sample Data folder, I'm going to select the sample_products.csv.
>
> **[1:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=89)** I'll open it up and click Continue.
>
> **[1:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=92)** Here, we've got the option to map our columns to specific fields.
>
> **[1:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=97)** And this can be really handy if you're importing products from another WooCommerce install and you may need to do some custom mapping.
>
> **[1:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=106)** I'm just going to leave these defaults.
>
> **[1:48](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=108)** From there, I'm going to say Run the Importer.
>
> **[1:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=111)** Cool, so let's go back and view products.
>
> **[1:55](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=115)** And here I can see I get a bunch of demo products.
>
> **[1:59](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=119)** Pretty cool.
>
> **[2:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=124)** So let's go look at my store.
>
> **[2:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=127)** And here I can see some of my olive oil products mixed in with these demo products from WooCommerce.
>
> **[2:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=134)** So you can see that if you don't have any products to work with yet, this is a really handy way to just sort of visualize what the setup is.
>
> **[2:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=146)** I'm going to go ahead and delete those products because I have the actual products in my store and you can do the same.
>
> **[2:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=152)** Whenever you've got your products ready, you can add them one at a time via the add new product, or you can import a bunch of them like we just saw.
>
> **[2:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/importing-demo-products?u=76281980&t=161)** And now we've got some products to work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (17), [[WooCommerce]] (9), [[WordPress]] (2), [[E-Commerce]] (1)
> **Prerequisites:** install (3), setup (2), set up (1)
> **UI Navigation:** go to (3), select the (1)
> **File Paths:** sample_products.csv (2), sample_products.xml (1)
> **Code Identifiers:** sample_products (3)
> **CLI Commands:** find (2)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Env Vars:** zip (1)


### 3. Setting Up Your Memberships

[↑ Back to Table of Contents](#table-of-contents)

#### [Get and install WooCommerce Memberships](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=0)** - [Instructor] Now it's time to get started with membership.
>
> **[0:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=2)** I've already got a copy of [[WooCommerce]] Memberships.
>
> **[0:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=5)** And if you want to follow along exactly, you'll need to grab a copy, too.
>
> **[0:09](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=9)** Of course, if you don't have a copy and just want to watch to see how things work, that's totally fine.
>
> **[0:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=15)** So I'm going to go back to my site admin.
>
> **[0:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=17)** And from my plugins, I'm going to say Add New, Upload Plugin, and I'll select the ZIP file from my hard drive.
>
> **[0:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=26)** We'll go ahead and install it.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=29)** And activate.
>
> **[0:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=30)** And here from the Plugins page, we can see we've got links to set up the plugin, go through documentation, support, et cetera.
>
> **[0:38](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=38)** Additionally, if I go back to this WooCommerce menu, I can see that a Memberships tab has been added.
>
> **[0:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=46)** This is where you can manage members and membership plans.
>
> **[0:49](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=49)** You can also import or export members and add custom profile fields, which are helpful for storing additional details for individual members.
>
> **[0:58](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=58)** We'll look more at this area later.
>
> **[1:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=60)** And then if we go down here and click on WooCommerce Settings, we can also see an extra tab for membership here.
>
> **[1:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=68)** And that's where we'll do the setup and configuration.
>
> **[1:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/get-and-install-woocommerce-memberships?u=76281980&t=71)** Onto that in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (3)
> **Prerequisites:** you'll need (1), install (1), set up (1), setup (1)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** select the (1), click on (1)
> **Env Vars:** zip (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)

#### [Setup and configuration](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=0)** - [Instructor] You can set up [[WooCommerce]] memberships by either going to this WooCommerce menu, Settings and looking for that Membership tab or from the Plugins page by clicking this set up link under WooCommerce Memberships.
>
> **[0:13](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=13)** This launches a setup wizard that looks similar to what we saw for WooCommerce.
>
> **[0:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=17)** Now, before we walk through this wizard, I should note that anything you configure here can always be modified later.
>
> **[0:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=23)** So don't worry about setting up something wrong here.
>
> **[0:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=26)** You may want to experiment a bit.
>
> **[0:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=28)** Okay, so the first settings has to do with how restricted content looks for non-members.
>
> **[0:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=34)** You can hide it completely so non-members see a content not found or 404 page.
>
> **[0:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=40)** You can hide only restricted content so non-members can see a content restricted notice or you can redirect non-members to a landing page when they try to view restricted content.
>
> **[0:52](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=52)** I'm going to leave it at hide content only.
>
> **[0:55](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=55)** There's also this checkbox for whether we want to show excerpts of restricted content to non-members in search engines.
>
> **[1:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=62)** Now, this is an important thing to consider.
>
> **[1:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=64)** When it comes to restricted content, if non-members can't see it, then neither can search engines.
>
> **[1:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=70)** By showing an excerpt or a preview of restricted content, you can give non-members a tease of what the content is and give search engines something to index.
>
> **[1:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=80)** Obviously, it's an optional setting but something to think about.
>
> **[1:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=83)** For example, if 90% of your website is gated content, you may have difficulty generating organic search traffic.
>
> **[1:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=92)** Next, we're invited to create our first membership plan.
>
> **[1:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=95)** You can give the membership plan a name, determine how customers become members.
>
> **[1:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=100)** You can manually assign them, they can become members when they register an account or when they purchase a particular product.
>
> **[1:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=107)** And then you can set the timeframe for the membership.
>
> **[1:50](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=110)** And definitely a specific length of time or through a selected date range.
>
> **[1:56](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=116)** I'm going to skip this section for now, along with the membership perks section, and spend more time on [[Microsoft Products|products]] and plans in the coming lessons.
>
> **[2:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=125)** Next, we get to choose what we want to email members.
>
> **[2:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=128)** For instance, we can toggle on an email reminder that the membership is ending soon.
>
> **[2:13](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=133)** Let's go ahead and do that.
>
> **[2:16](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=136)** We'll also send an email when a membership expires.
>
> **[2:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=140)** And let's set this renewal reminder to on so that maybe we can encourage an expired membership to re-up.
>
> **[2:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=147)** You can also specify how many days before the membership ends or after the membership ends respectively before you want to trigger that email.
>
> **[2:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=156)** WooCommerce Memberships comes with existing templates for each of each of these emails.
>
> **[2:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=160)** I'm going to show you in just a second where to manage those but let's finish this wizard.
>
> **[2:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=164)** The final step here just gives us an overview of what we've got so far and where we can go to continue setting up.
>
> **[2:53](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=173)** And all of these are things that we can find again.
>
> **[2:55](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=175)** So I'm going to go ahead, return to the [[WordPress]] dashboard, and here we are in WooCommerce settings, membership, I'm going to go ahead and dismiss these notices just to clean up the screen a little bit.
>
> **[3:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=190)** Okay, and here under this membership tabs, we also have a few links.
>
> **[3:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=194)** So here's our general settings.
>
> **[3:16](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=196)** We've got some settings for products and then also messages.
>
> **[3:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=200)** And these are where you can make adjustments to everything that we just saw in that setup wizard.
>
> **[3:25](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=205)** Now, I told you I'd show you about managing emails.
>
> **[3:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=208)** If I go to WooCommerce, Settings and the Emails tab, here's a list of emails automatically generated with WooCommerce.
>
> **[3:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=217)** And if I scroll to the bottom, I see a list of emails automatically generated with WooCommerce Memberships.
>
> **[3:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=225)** Now, you can go to any of these and click the Manage button to enable or disable the email.
>
> **[3:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=231)** You can specify when it triggers and customize the subject and message, et cetera.
>
> **[3:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=237)** If you're a developer and want to overwrite the template entirely, here's a note telling you which template file to copy.
>
> **[4:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=244)** The store templates you add to your theme will override those in the plugin.
>
> **[4:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=248)** So that's where you can manage all system emails coming from WooCommerce or any of its extensions, including Memberships.
>
> **[4:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=255)** So far, I'm pretty much just going with the plugin defaults.
>
> **[4:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/setup-and-configuration?u=76281980&t=259)** In the next lesson, we'll take a look at adding some members-only products.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (10), [[Microsoft Products|Products]] (3), [[WordPress]] (1)
> **UI Navigation:** go to (3), checkbox (1), toggle (1)
> **Prerequisites:** set up (2), setup (2), configure (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** template (2)
> **Analogies:** for example (1), for instance (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)

#### [Create products for memberships](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=0)** - [Instructor] Fun fact, memberships are not a specific type of [[WooCommerce]] product.
>
> **[0:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=5)** You can create almost any type of WooCommerce product and then tie it into a membership plan.
>
> **[0:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=10)** Now, I've already got a bunch of [[Microsoft Products|products]] for my store, and you may be following along with your own products, or you may have imported demo products earlier in this course, or you may just be watching along.
>
> **[0:21](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=21)** It doesn't matter, we're going to go ahead and create a new product, and this is going to be the product we use to sell a membership club.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=29)** I'm going to call it the Oil Lover's Club.
>
> **[0:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=33)** I've got a description ready to go ahead and paste in here.
>
> **[0:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=37)** I'm going to assign this to the Oil Lover's Club.
>
> **[0:42](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=42)** We'll select a product image, and there we go.
>
> **[0:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=46)** And for the product type, I'm just going to go ahead and keep it a Simple product.
>
> **[0:50](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=50)** If you wanted to tie this to membership tiers, you could go with a Variable product, but we're just going to keep it simple.
>
> **[0:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=57)** We'll set a price, and we'll pop in a short description.
>
> **[1:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=64)** And there we go so, so far we've just done all the normal things you would do to add a WooCommerce product.
>
> **[1:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=70)** If we scroll to the bottom, here's this membership meta box WooCommerce memberships gives you several options for associating products with memberships.
>
> **[1:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=79)** You can manage that here on the individual product page, or you could manage it from the Memberships area.
>
> **[1:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=86)** And we're going to do that in the next lesson.
>
> **[1:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=88)** So, I'm not going to mess with this right now.
>
> **[1:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=90)** So, let's go ahead and click Publish, view product, and voila, here is a product called the Oil Lover's Club.
>
> **[1:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-products-for-memberships?u=76281980&t=100)** Next step, let's make it a membership.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (4), [[Microsoft Products|Products]] (4)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Create a membership plan](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=0)** - [Instructor] Membership plans and [[Microsoft Products|products]] are created independently from each other.
>
> **[0:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=4)** And this gives you maximum flexibility for how you grant access to a membership.
>
> **[0:09](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=9)** So you can assign almost any type of product to a membership plan and that supports several types of memberships.
>
> **[0:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=15)** First, you can sell a membership as a standalone product.
>
> **[0:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=19)** You can create a product for the membership, like we did in that last lesson, and then tie a membership plan to that product.
>
> **[0:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=26)** You could also grant access to a membership as part of a product purchase.
>
> **[0:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=30)** For example, maybe somebody buys a subscription for a monthly bottle of olive oil and they also get access to a recipe section of the blog for free.
>
> **[0:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=41)** You could grant access to the same membership from several products, for example, you could have a yearly purchase or a monthly subscription, and then you can assign memberships manually for an invite-only membership experience.
>
> **[0:55](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=55)** Let's explore what this actually looks like.
>
> **[0:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=57)** We'll go to [[WooCommerce]], Memberships, and click on Membership Plans.
>
> **[1:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=63)** So we've got this VIP membership that was created as a draft when we set up the membership plugin.
>
> **[1:09](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=69)** Well, I'll go ahead and delete that.
>
> **[1:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=71)** And let's start with a fresh plan.
>
> **[1:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=74)** We'll give it a name, and let's look at our options here.
>
> **[1:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=82)** The first is how customers will gain access to this plan.
>
> **[1:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=86)** You could say manual assignment, which means a site administrator would manually assign a member, or user account registration.
>
> **[1:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=95)** This would be a great option if you offer free membership or there's products purchased.
>
> **[1:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=100)** And that's what we'll pick here.
>
> **[1:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=101)** That brings up this product box and lets me search all of my products.
>
> **[1:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=107)** We'll start with Oil Lover's Club, there it is, Oil Lover's Club, and now we can select a length of membership.
>
> **[1:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=117)** In this case, I want a member to get a year of membership from whatever date they sign up.
>
> **[2:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=123)** So I'm going to opt for specific length and one year.
>
> **[2:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=127)** With that, let's go ahead and publish our membership plan.
>
> **[2:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=130)** So I'm going to circle back around in future lessons to take a look at some of these other settings, but for now, I just want to show you the process of connecting a product to a membership plan, and that's what we've done.
>
> **[2:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=142)** Let's go ahead now and make sure this works.
>
> **[2:25](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=145)** Since I don't have any payment gateway set up for WooCommerce yet to actually go through with the checkout process, I'm going to go back to my Oil Lover's Club product and let's just change the price to $0.
>
> **[2:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=164)** Okay, so let's view that product.
>
> **[2:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=166)** I'm going to go ahead and add it to my cart, view the cart.
>
> **[2:54](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=174)** Let's proceed to checkout.
>
> **[2:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=177)** And even though it's a $0 checkout, it's still going to make me enter some information here, so let me do that real quickly.
>
> **[3:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=185)** Okay, so I'll fill out those billing details and go ahead and place the order.
>
> **[3:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=190)** Fantastic, so now if we head back into our [[WordPress]] admin, go to WooCommerce, Memberships, and under this Member's tab here, I see that I've got a new member that happens to be me and that is a direct result of me purchasing that product.
>
> **[3:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=210)** So fantastic, it works as expected.
>
> **[3:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=213)** So stay tuned for the next lesson.
>
> **[3:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-a-membership-plan?u=76281980&t=215)** I'm going to show you how to work with custom profile fields.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[WooCommerce]] (3), [[WordPress]] (1)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Prerequisites:** set up (2)
> **Env Vars:** vip (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [Add custom profile fields](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=0)** - [Instructor] Custom profile fields are a great way to capture information about your customers that goes beyond the standard information that [[WooCommerce]] collects, like your name or email address, et cetera.
>
> **[0:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=11)** In terms of memberships, this is a great way to capture things like customer preferences.
>
> **[0:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=17)** Let's say that as part of the Oil Lover's Club membership, I'll be periodically shipping bottles of olive oil.
>
> **[0:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=23)** And I want to know whether a customer prefers regular extra virgin olive oil, known as EVOO, or infused oils.
>
> **[0:31](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=31)** Let's add a profile field to capture that.
>
> **[0:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=34)** So I'll start by just saying, add profile field.
>
> **[0:39](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=39)** We'll give it a name.
>
> **[0:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=41)** I'll just say oil preferences.
>
> **[0:43](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=43)** And you get the field type here.
>
> **[0:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=45)** Oops, I guess I could spell preferences correctly.
>
> **[0:48](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=48)** You get a field type here.
>
> **[0:49](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=49)** So standard form fields.
>
> **[0:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=51)** And in this case, I want to offer them two options and I only want them to pick one.
>
> **[0:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=57)** So I'll click a radio.
>
> **[0:58](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=58)** So I'll go to field options and add an option for EVOOs, and another option for infused oils.
>
> **[1:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=68)** Perfect.
>
> **[1:09](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=69)** And then if I go back to this General tab, I want to associate this with the Oil Lover's membership.
>
> **[1:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=75)** Next, we can select if we want this profile field to be editable just on the admin side or by members and admins.
>
> **[1:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=83)** So, an example of admin only profile fields, these might be things that you don't necessarily want the customer to see, but could be additional information you store about customer interactions, support calls, that sort of thing.
>
> **[1:39](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=99)** In this case, I want members to be able to set this preference when they purchase the product and membership.
>
> **[1:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=105)** So I'll say, show field on product page.
>
> **[1:49](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=109)** You could alternatively show it on a member account page.
>
> **[1:52](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=112)** We're going to take a look at that later in the course.
>
> **[1:54](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=114)** So for now, I'll select product page.
>
> **[1:58](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=118)** We'll add a label.
>
> **[2:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=124)** And you also have the option to set this as a required field or not required.
>
> **[2:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=130)** I'm going to go ahead and say required, because this is information I need to know as part of their membership.
>
> **[2:16](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=136)** Oops, and let's give this profile field a name.
>
> **[2:21](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=141)** All right, let's go ahead and click Create.
>
> **[2:24](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=144)** So if we go to our [[Microsoft Products|products]], and look at this Oil Lover's Club.
>
> **[2:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=154)** Hm, I don't see those options added here.
>
> **[2:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=156)** So let's figure out what I did wrong.
>
> **[2:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=165)** We'll go back to Memberships, Profile Fields.
>
> **[2:53](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=173)** And it actually looks like everything is set up correctly here.
>
> **[2:58](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=178)** So let's go back to that product and maybe we've got a caching issue going on.
>
> **[3:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=184)** So I'll say view and do a hard browser refresh.
>
> **[3:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=190)** Ah, you know what?
>
> **[3:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=192)** I am currently logged in using the same email address that I used to purchase this product a moment ago.
>
> **[3:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=199)** So let me go ahead and try logging out.
>
> **[3:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=202)** See if that solves the problem.
>
> **[3:24](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=204)** Okay, we're going to go back to the website.
>
> **[3:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=208)** Back to our Oil Lover's Club product.
>
> **[3:31](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=211)** There's those custom profile fields.
>
> **[3:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=213)** Okay, so now when someone goes to purchase this product, they can choose whichever their preference and they would go through the process we just saw.
>
> **[3:42](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=222)** Now, if we go to the back end, and I need to log in again to do that.
>
> **[3:49](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=229)** So I'm going to go to WP admin.
>
> **[3:52](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=232)** Log in with my super secret username and password.
>
> **[3:56](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=236)** We'll go to WooCommerce, Memberships.
>
> **[4:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=240)** So we looked at how you could see the profile field on the product page, but since members and admins can edit it, let's go back to our members.
>
> **[4:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=251)** Now, here we are in the admin view.
>
> **[4:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=252)** I'm going to click Edit on this member.
>
> **[4:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=257)** And there we go.
>
> **[4:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=259)** You can see those custom profile fields right here.
>
> **[4:21](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=261)** So you can edit it as an administrator if for some reason your member didn't fill out a field.
>
> **[4:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=267)** So there you go.
>
> **[4:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/add-custom-profile-fields?u=76281980&t=268)** That's how you can use profile fields to capture additional information about your members or their preferences for membership plans.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (2), [[Microsoft Products|Products]] (1)
> **Cross-References:** go back to (5), later in (1)
> **UI Navigation:** go to (5)
> **Definitions:** is a  (1), known as (1)
> **Env Vars:** evoo (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create member discounts](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=0)** - [Instructor] There's one more thing I'd like to show you about adding memberships before we move on, and that is member discounts.
>
> **[0:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=7)** Now, [[WooCommerce]] comes with a built-in way to create coupons for customers, but that's actually different from what I'm talking about here.
>
> **[0:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=14)** As a perk or a bonus for your members, you can offer members-only discounts.
>
> **[0:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=19)** So here we are back at our Membership Plans area, and I'm going to click on the name of my membership, or I could just click this Edit button, and that brings up the edit screen.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=29)** And from here, I'll click on the tab that says Purchasing Discounts.
>
> **[0:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=33)** I'm going to go ahead and say Add New.
>
> **[0:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=35)** And here, you can select whether you want to apply the discount to a specific product, or you could even broadly apply it to a category of [[Microsoft Products|products]].
>
> **[0:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=46)** I'll select Product Discounts.
>
> **[0:48](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=48)** And you could search for a specific product, or you could just leave this blank and it'll apply to all products.
>
> **[0:56](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=56)** Let's go ahead and do that.
>
> **[0:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=57)** And you can set it as a dollar amount off or a percentage.
>
> **[1:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=62)** I'm going to select percentage, 10% off all products.
>
> **[1:06](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=66)** And I want to make sure this is active.
>
> **[1:09](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=69)** Now, you could go ahead and add multiple discounts.
>
> **[1:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=72)** I'm going to just leave this one and click Update.
>
> **[1:16](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=76)** Now, this has given me a little warning that I'm just opening up a discount for members for a whole lot of products, but that's okay, that's what I meant to do, so I'll say OK.
>
> **[1:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=86)** All right, so we've updated that.
>
> **[1:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=88)** So in theory, since I am logged in as Carrie, who has already made a purchase, if we go back to the store and click on the shop, here, we can see that it's showing me that 10% discount for each product.
>
> **[1:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=104)** So I don't even have to have a coupon.
>
> **[1:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=107)** The discount is just automatically applied for members.
>
> **[1:50](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=110)** Very cool.
>
> **[1:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=111)** And now, just to make sure this is only showing for members and not for the world, I'm going to go to Log Out.
>
> **[2:01](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=121)** We'll go back to our shop.
>
> **[2:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=124)** And there, we can see the original price applied.
>
> **[2:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=128)** So now you know how to add a discount based on a membership plan.
>
> **[2:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/create-member-discounts?u=76281980&t=131)** This is a really great way to provide an extra incentive for your existing members to keep coming back and shopping.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4), [[WooCommerce]] (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 4. Restricting Content and Products

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding restriction rules](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=0)** - [Instructor] Rules are what allow us to restrict or control access to certain content or [[Microsoft Products|products]].
>
> **[0:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=5)** They can be applied to a specific membership plan via these Restrict Content and Restrict Products tabs, or you can also apply a rule to a specific piece of content or a product.
>
> **[0:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=17)** For instance, let's go edit a post.
>
> **[0:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=22)** Now, if we scroll down to the bottom of the post, we can see some options for restricting this piece of content.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=29)** You can add a rule.
>
> **[0:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=30)** And let's say we only want people from the Oil Lovers membership to access this content.
>
> **[0:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=36)** And maybe it's available immediately once they're a member, or maybe you want to have some sort of a delay on the content.
>
> **[0:43](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=43)** Either way, that's how you can set rules on a specific piece of content.
>
> **[0:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=47)** Now, if you don't see this memberships meta box, for some reason, head up to the right part of your screen, there's this little three dots or ellipsis, and click that.
>
> **[0:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=57)** And from there, scroll down to Preferences.
>
> **[1:01](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=61)** And here are some preferences for viewing the editor screen.
>
> **[1:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=65)** And if you click under Panels, just make sure that Memberships is toggled on.
>
> **[1:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=72)** Now, let's say that you've got a site with a lot of rules set up, and some of them at the membership plan level and other rules may be on a per post basis.
>
> **[1:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=82)** And there are situations where these restriction rules could overlap.
>
> **[1:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=87)** When this occurs, the Memberships plugin always defers to the more specific rule.
>
> **[1:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=92)** Let's take a look.
>
> **[1:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=93)** Rules that restrict an entire content type, such as all blog posts, are put into effect first.
>
> **[1:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=100)** Those can be overridden by more specific rules.
>
> **[1:43](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=103)** You could restrict all blog posts, but then set rules for categories or single posts.
>
> **[1:48](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=108)** A rule for a single blog post or a group of posts will override rules for an entire content type, as this rule is the most specific.
>
> **[1:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=117)** Now, what about if two rules are of equal specificity?
>
> **[2:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=122)** The rule that grants access first, that's the one that'll be followed.
>
> **[2:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=125)** So for example, let's say we've got a post and it's in both the recipes and salad categories.
>
> **[2:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=132)** Rules could be applied to both of these categories that conflict.
>
> **[2:16](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=136)** Let's say recipes is accessible after one week of membership, but posts in the salad category are accessible after one day.
>
> **[2:24](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=144)** Well, then, the post is going to be accessible in one day.
>
> **[2:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=148)** The rule that grants the earliest access wins.
>
> **[2:31](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=151)** So that's the rule of hierarchy in a nutshell.
>
> **[2:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=154)** Now, one important thing to call out here.
>
> **[2:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/understanding-restriction-rules?u=76281980&t=156)** If you don't apply any rules to a piece of content or a product, then that content and/or product is publicly accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2)
> **Analogies:** for instance (1), such as (1), for example (1)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Restrict content to members](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=0)** - [Instructor] Now that we've got a membership plan set up, let's take a look at how we can restrict content based on that membership.
>
> **[0:06](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=6)** [[WooCommerce]] Memberships provide several methods for accomplishing this.
>
> **[0:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=10)** You can restrict content while creating or editing a membership plan by adding rules from the membership's meta box while creating or editing content, via shortcodes, and, finally, by using special blocks.
>
> **[0:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=23)** In this lesson, we'll take a look at each of these.
>
> **[0:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=26)** Let's start by restricting content from within a membership plan.
>
> **[0:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=30)** I'm going to go ahead and edit this existing plan and click this Restrict Content tab.
>
> **[0:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=36)** And here, we have the option to add some rules.
>
> **[0:39](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=39)** I'm going to start by adding a rule that applies to a post category.
>
> **[0:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=45)** Let's say that only members of this plan can access the recipes category of posts.
>
> **[0:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=51)** I can also specify whether I want that access to be immediate or after a specific amount of time.
>
> **[0:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=57)** We'll just leave this with immediate for now.
>
> **[1:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=60)** I'll click Update.
>
> **[1:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=62)** I'll confirm that I do, indeed, want to update this.
>
> **[1:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=65)** And now, if we go view the post category of recipes, we can see it totally fine.
>
> **[1:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=75)** But what about if I am logged out or in an incognito window?
>
> **[1:21](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=81)** Let's open up an incognito window, paste in that URL.
>
> **[1:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=86)** And now, I see these messages that this category can only be viewed by members.
>
> **[1:31](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=91)** And to view that category, I need to sign up by purchasing the Oil Lover's Club, cool.
>
> **[1:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=97)** We'll close this out.
>
> **[1:38](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=98)** So that's the first way we can restrict content, is by going directly from the membership plan.
>
> **[1:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=106)** The second way to implement content restriction is to go straight to the page or post in question.
>
> **[1:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=111)** I'm going to go to a page I have created called Tours & Tastings.
>
> **[1:56](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=116)** I can restrict this entire page to members.
>
> **[1:59](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=119)** So if a non-member were to hit this page, it would show a default message that this is restricted content.
>
> **[2:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=125)** Let me show you that.
>
> **[2:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=127)** Let's scroll to the bottom of the page, and we'll see this memberships meta box.
>
> **[2:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=132)** And again, if you don't see this, for some reason, just head up to that little ellipsis on the right side of the screen for options, go down to Preferences, Panels, and make sure that Memberships is toggled on.
>
> **[2:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=147)** Okay, so we're going to add a new rule.
>
> **[2:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=150)** And we only have the one membership, so we'll say this Oil Lover's membership.
>
> **[2:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=154)** I want this page to be accessible immediately after somebody joins.
>
> **[2:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=160)** We'll click Update, and let's view the page.
>
> **[2:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=164)** And we can view the whole thing, because, of course, I am logged in as a member.
>
> **[2:49](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=169)** So I'm going to open this up in an incognito window.
>
> **[2:53](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=173)** And there we see this default message for non-members.
>
> **[2:58](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=178)** Now, if you to customize the message, we could do that.
>
> **[3:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=182)** We'll go back and edit the page.
>
> **[3:06](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=186)** And just below where we add this rule, there's a checkbox that if you want to customize the restriction message, you could do that here.
>
> **[3:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=194)** Now, let me show you another way that we can customize the content based on membership.
>
> **[3:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=199)** I'm going to go ahead and uncheck this, and let's delete this rule.
>
> **[3:25](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=205)** And now I'm going to show you shortcodes.
>
> **[3:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=208)** If we go to the documentation for WooCommerce Memberships plugins, we can see that we've got a shortcode here for members, as well as a shortcode specifically for non-members.
>
> **[3:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=225)** Okay, so let's see this in action.
>
> **[3:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=227)** I'm going to go ahead and just copy this shortcode for members.
>
> **[3:54](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=234)** And we'll use that with this wcm_restrict shortcode.
>
> **[3:59](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=239)** So I'm going to go back to my page.
>
> **[4:01](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=241)** And let's say that I want a non-member to be able to see this top part, but I only want a member to be able to see the form.
>
> **[4:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=248)** So I could go and insert a block before the form.
>
> **[4:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=254)** Let's use the shortcode block.
>
> **[4:18](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=258)** And there's the opening shortcode.
>
> **[4:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=260)** And below the form, we'll add another block.
>
> **[4:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=269)** And this'll be our closing shortcode.
>
> **[4:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=272)** Let me make sure I've got the syntax right.
>
> **[4:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=276)** I'll just copy it, and we'll paste it.
>
> **[4:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=280)** Okay, so now, if we update the page and view it, this is the member view.
>
> **[4:48](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=288)** Let's go view the non-member view.
>
> **[4:52](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=292)** And there you go.
>
> **[4:53](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=293)** You can see that it just completely hid that content from a non-member.
>
> **[4:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=297)** And, of course, we could do just the opposite using that non-member shortcode.
>
> **[5:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=303)** There's one more way I want to show you how to display or hide content, and that's using blocks.
>
> **[5:09](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=309)** Now, as the block editor has continued to evolve, you might have noticed a decrease in the use of shortcodes in favor of using blocks.
>
> **[5:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=317)** Shortcodes are still around for backwards compatibility, but I think you'll find it easier to work with blocks.
>
> **[5:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=322)** Let me show you.
>
> **[5:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=323)** Let's go and start a new page.
>
> **[5:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=328)** We'll call it Test with Blocks.
>
> **[5:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=330)** And using the block inserter, I'm going to to do a search for member, and that brings up these two blocks, member content and non-member content.
>
> **[5:39](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=339)** So think of these blocks as a replacement for shortcodes.
>
> **[5:43](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=343)** So for example, I'm going to drop in a member block.
>
> **[5:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=346)** And now, any blocks that I use inside here are only available for members.
>
> **[5:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=357)** Okay, so there's a message for members.
>
> **[5:59](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=359)** And let's add another block below it.
>
> **[6:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=363)** And this time, we'll use the non-member content block.
>
> **[6:06](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=366)** And so just the same, any content that goes within this block will be only viewable to non-members.
>
> **[6:16](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=376)** So we'll add a message to say.
>
> **[6:24](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=384)** We'll add a message specifically for non-members.
>
> **[6:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=387)** So let's publish this.
>
> **[6:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=390)** And if we view it in logged in mode, here we see, hey, yay, you're a member.
>
> **[6:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=395)** And let's copy this URL and check it out in logged out mode.
>
> **[6:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=400)** And whoa, you are not a member, you need to become one.
>
> **[6:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=404)** So that's using the member and non-member blocks.
>
> **[6:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=407)** Instead of sandwiching content between two shortcode blocks, I can just drop in a single block, and anything inside of it behaves accordingly.
>
> **[6:56](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=416)** So using blocks instead of shortcodes is less work.
>
> **[6:59](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=419)** So one, you don't have to remember the shortcodes.
>
> **[7:02](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=422)** And two, you don't have to worry about adding a starting and ending shortcode.
>
> **[7:06](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=426)** Just use the blocks.
>
> **[7:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-content-to-members?u=76281980&t=427)** So now you've seen multiple ways you can restrict entire categories and single pages to members, as well as show or hide portions of pages with shortcodes or blocks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (2)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (2), checkbox (1)
> **Env Vars:** url (2)
> **Code Identifiers:** wcm_restrict (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Analogies:** for example (1)

#### [Restrict products to members](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=0)** - [Instructor] Product restriction is a little different than content restriction and that you can use either viewing or purchasing restrictions.
>
> **[0:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=8)** To demonstrate this, I've got five [[Microsoft Products|products]] that I only want to make available for members to purchase.
>
> **[0:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=14)** So I'm going to add all of these to a special category and I'll call it the Oil Lover's Club Exclusives, and let's go ahead and publish these.
>
> **[0:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=30)** Okay.
>
> **[0:31](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=31)** So the first way I can restrict these products is by going to the membership plan, just like we saw with restricting content.
>
> **[0:38](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=38)** And here I can add rules for specific products or blanket rules to apply to entire product categories.
>
> **[0:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=45)** I'm going to start by restricting the entire Oil Lover's Club Exclusives category, and I want to say only members can purchase.
>
> **[0:54](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=54)** In other words, I want these products to be exclusively available to members, but I want non-members to see them.
>
> **[1:01](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=61)** Maybe it'll make them want to join the club.
>
> **[1:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=65)** So let's go ahead and update that rule and take a look on the front end of our site.
>
> **[1:11](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=71)** So if I go to shop, I've got a tab here for my Oil Lover's Club Exclusives products, and I am logged in here as a member, so I can see that each of these I can go ahead and add to cart.
>
> **[1:24](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=84)** Pretty cool.
>
> **[1:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=86)** So let's go ahead and copy this URL and check it out to see what a non-member would see.
>
> **[1:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=92)** So here I can still see the products, but instead of getting that add to cart, I get this read more for each product.
>
> **[1:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=100)** And then I get a couple of messages.
>
> **[1:42](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=102)** One is the discount that we applied earlier for members.
>
> **[1:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=106)** So this message says, if you want a discount become a member, and then the second message that says the product can only be purchased by members.
>
> **[1:54](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=114)** So that's a way that you could restrict a product to be available for everyone to view, but only for members to purchase.
>
> **[2:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=123)** So heading back to our [[WordPress]] dashboard, let's go ahead and look at a second way that we can manage product restrictions and that's from the actual product itself.
>
> **[2:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=135)** So for instance, let's edit this organic olive oil tasters gift set, and I can see that it's part of the Oil Lover's Exclusives Club category.
>
> **[2:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=147)** So if I scroll down, I can see this category level restriction that we just set.
>
> **[2:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=154)** Now I can override that restriction or any other restrictions altogether by checking this disabled restrictions box, or I could add a new rule to override this category level role.
>
> **[2:49](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=169)** We could say that only members can even view this product.
>
> **[2:53](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=173)** And just like we saw with content restriction, you can also create custom messages to display to non-members.
>
> **[3:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/restrict-products-to-members?u=76281980&t=180)** So that's product restriction in a nutshell, whether you want to restrict entire categories of products or single products, the [[WooCommerce]] memberships plugin gives you a way to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (8), [[WordPress]] (1), [[WooCommerce]] (1)
> **Analogies:** just like (2), for instance (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Dripping content](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=0)** - [Instructor] The [[WooCommerce]] Memberships plugin enables you to schedule when members have access to content or [[Microsoft Products|products]], for that matter.
>
> **[0:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=7)** Now, we've already seen this when setting content or product level restrictions, but we haven't talked too much about it.
>
> **[0:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=14)** Your options are to either make content immediately available when someone becomes a member, or you can delay it by a specific amount of time, say, a day a week, a month, a year, et cetera.
>
> **[0:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=26)** Just like you can manage content restrictions from the membership plan, a single poster page, or even using short codes or blocks, the same is true when it comes to when a member can access content.
>
> **[0:38](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=38)** You can edit it from all of those places.
>
> **[0:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=41)** For instance, let's say that we want to release a new recipe each week for non-members.
>
> **[0:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=46)** We could edit an individual post.
>
> **[0:50](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=50)** Let's say this simple steak recipe.
>
> **[0:54](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=54)** There's already a category level rule applied here, but I can add a new rule and say, I want this recipe to be available after one week.
>
> **[1:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=63)** I could then go to another recipe and set it to be available after two weeks of membership, et cetera.
>
> **[1:09](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=69)** Another approach might be to drip access to a specific portion of a post or a page.
>
> **[1:15](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=75)** So we'll create a new post.
>
> **[1:18](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=78)** And let's look at the member block that we looked at previously in this chapter.
>
> **[1:24](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=84)** So we know that anything that we add into this block container is restricted to members.
>
> **[1:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=90)** And if I open up this block configuration panel by using this little gear icon, I can see there are also options to delay the access to what's inside of that member block.
>
> **[1:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=100)** I could set it to display immediately, after being a member for a specific amount of time, or after a specific date.
>
> **[1:50](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=110)** Now, if dripping content is a major focus of your membership site, there are other membership plugins that handle this aspect a little more elegantly.
>
> **[1:59](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/dripping-content?u=76281980&t=119)** But as you've seen, it's definitely possible with WooCommerce Memberships.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (2), [[Microsoft Products|Products]] (1)
> **Analogies:** just like (1), for instance (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Managing Members

[↑ Back to Table of Contents](#table-of-contents)

#### [Set up member account area](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=0)** - [Instructor] If you've ever signed up for a membership or subscription online, you know that the vast majority of time, you have some sort of an area where you can manage your account, things like your email address, your password, product licenses, et cetera.
>
> **[0:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=14)** [[WooCommerce]] makes it really simple to set up a membership area for your site.
>
> **[0:18](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=18)** And WooCommerce Memberships also adds a few features that you can use.
>
> **[0:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=22)** Let's take a look.
>
> **[0:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=23)** If we go to Pages, note that when you installed and activated WooCommerce, some pages were automatically added to your site, things like the cart page, the checkout and my account.
>
> **[0:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=35)** If you don't have these default pages for some reason, you can go to WooCommerce, Status, Tools, and you'll see an option to create the default WooCommerce pages.
>
> **[0:54](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=54)** Now, each of those default pages works right out of the box with no extra work, but if you don't want to use those defaults for any reasons, you could create a new page and then go to WooCommerce, Settings, and the Advanced tab and remap those pages here.
>
> **[1:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=72)** So let's go back to that My Account page, we'll click Edit and let's see what's happening behind the scenes.
>
> **[1:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=80)** Lo and behold, all we have here is a simple shortcode provided by WooCommerce.
>
> **[1:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=86)** Let's go preview this and see what it looks like.
>
> **[1:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=89)** All of this was generated by that shortcode, so the dashboard, I could access orders, information about my membership, downloads, my address, account details, et cetera.
>
> **[1:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=101)** Now let me show you what WooCommerce Memberships brings to the party.
>
> **[1:45](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=105)** We'll navigate back to our membership plan and this Oil Lovers Membership.
>
> **[1:52](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=112)** And earlier, I showed you these custom profile fields that you can add.
>
> **[1:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=117)** And you also have the ability to specify whether a member can view and edit these fields, or if it's just for internal member management.
>
> **[2:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=125)** So earlier, when we made this oil preferences custom field, we set it to show on the [[Microsoft Products|products]] page.
>
> **[2:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=132)** Let's say we also want to show this field on the account page.
>
> **[2:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=137)** I'll update that and now if I go look at the My Account Page again, I get a new tab here called Account Details.
>
> **[2:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=150)** And that is not it.
>
> **[2:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=153)** Oh, there it is under my profile.
>
> **[2:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=155)** So here, we could edit any custom profile fields added.
>
> **[2:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=160)** So this is pretty cool, just with that one WooCommerce shortcode, and then if you have custom profile fields, make sure that a member can edit those, and that's all you need for a member to manage their profile.
>
> **[2:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/set-up-member-account-area?u=76281980&t=171)** The only other thing you might want to do is add a link to your site so that members can navigate directly to their account page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (9), [[Microsoft Products|Products]] (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Manual member management](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=0)** - [Instructor] When you create a membership plan, you can specify how someone joins this plan.
>
> **[0:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=5)** Do you manually assign a member, or does it happen automatically on account registration, or is it tied to the purchase of a product?
>
> **[0:13](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=13)** In this lesson, let's take a look at manually creating and managing a member, as well as assigning them to a membership plan.
>
> **[0:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=20)** I'm going to start by adding a new user.
>
> **[0:27](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=27)** And here, I've got the default [[WordPress]] user roles and then some extra added by [[WooCommerce]].
>
> **[0:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=34)** I'm going to go ahead and select Customer.
>
> **[0:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=36)** And I guess we do need to enter an email address, there we go.
>
> **[0:41](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=41)** Now, let's say, Add New User.
>
> **[0:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=44)** So, once created, if I go back and edit this user and scroll all the way down to the bottom, I see this option to Add a membership manually.
>
> **[0:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=57)** Let's click it and here, from this screen, I can select the membership that I want this user to have.
>
> **[1:06](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=66)** We'll go ahead and save that and note that, now, you can manage this member directly from the Memberships tab under WooCommerce.
>
> **[1:16](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=76)** I also want to point out that I can make membership notes and opt whether to share that note with the member via email.
>
> **[1:23](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=83)** For instance, if a member called and said they wanted to pick up their oil allotment in person instead of shipping it, I could add that note to the account and make sure that the member is notified.
>
> **[1:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=94)** Alternatively, maybe there's an interaction with a member and you want to make a note of it on the account, but you don't want to necessarily notify the member, you can do that too.
>
> **[1:43](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=103)** One other really cool feature that I want to point out here about memberships, and that's the ability to transfer a membership plan.
>
> **[1:51](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=111)** You can transfer the membership to another user, or you can create a new user to transfer this membership to.
>
> **[1:58](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=118)** There are a lot of scenarios where that could be really useful.
>
> **[2:03](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/manual-member-management?u=76281980&t=123)** So, there you have it, now you know how to manually create a customer, and then add them to a membership plan and manage their account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (2), [[WordPress]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** select the (1)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Customize email content](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=0)** - [Instructor] Just like there are default pages that come with [[WooCommerce]], there are also default emails, and you can find these under WooCommerce, Settings, and the Emails tab.
>
> **[0:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=10)** They're the kind of default communications that you would expect.
>
> **[0:13](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=13)** An email that's triggered when a new order is placed, an email that fires when a password is changed, et cetera.
>
> **[0:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=19)** Now, when you install and activate WooCommerce memberships, there are some additional email templates added: membership notes, membership ending soon, et cetera.
>
> **[0:28](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=28)** Unlike the default WooCommerce emails, the WooCommerce membership emails are not automatically enabled.
>
> **[0:34](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=34)** That's something you can manually manage.
>
> **[0:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=36)** So for example, let's click this Manage button on this membership ending soon.
>
> **[0:42](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=42)** You can enable or disable it.
>
> **[0:44](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=44)** You can specify when the email is sent.
>
> **[0:47](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=47)** You can customize the subject line, the message header and the body of the email.
>
> **[0:52](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=52)** You can also select the email format that you want to use.
>
> **[0:56](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=56)** We also get a note here on which template file controls this email.
>
> **[1:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=60)** We can view the template with this button and automatically copy this file to our theme if we wanted to edit that.
>
> **[1:08](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=68)** Now, keep in mind that managing the email here means that it would apply to all membership plans.
>
> **[1:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=74)** If you wanted to customize the emails on a per plan basis, you could go to the plan in question, Oil Lovers Membership in this case, and go to the Email Content tab and you could edit the email content directly from any of these.
>
> **[1:31](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=91)** You also have access to these merge tags.
>
> **[1:33](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/customize-email-content?u=76281980&t=93)** You can drop in if you want to add dynamic content to your membership plan emails.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (5)
> **UI Navigation:** go to (2), select the (1)
> **Exercise Files:** template (2)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)


### 6. Before You Launch

[↑ Back to Table of Contents](#table-of-contents)

#### [Test registration and payments](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=0)** - [Instructor] Before you release your site to the world you'll want to make a checklist of things to test or double-check prior to launch.
>
> **[0:06](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=6)** There are a few specific items for paid membership websites, and that's what I want to cover in this chapter.
>
> **[0:13](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=13)** First things first.
>
> **[0:14](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=14)** You want to make sure that your registration process works and payments are going through as expected.
>
> **[0:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=20)** [[WooCommerce]] provides a free plugin specifically for testing payments.
>
> **[0:24](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=24)** You can download this plugin here, or you can install it from the [[WordPress]] plugin repository.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=29)** Now, a note here on Dev Mode.
>
> **[0:32](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=32)** In order to fully process payments, even fake ones, you need to have your WooCommerce store fully configured, and that involves setting up business data like a bank account or business ID.
>
> **[0:43](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=43)** If you're creating a site for a real company you'll want the store owner to provide those details as part of the store's setup.
>
> **[0:50](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=50)** On the other hand, if this is just a learning experience for you and the site you're creating will never need to process real payments, then you can enable something called Dev Mode, and this article walks you through how to do that.
>
> **[1:04](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=64)** It does take a tiny bit of programming know-how.
>
> **[1:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=67)** So once you're set with either Dev Mode or a fully configured store you can use the WooCommerce payments plugin to enable Test Mode on your site.
>
> **[1:16](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=76)** After that you will go to your store, add the product to your cart, in this instance you'll want to add a product that's tied to a membership plan, and then you would go through the checkout process.
>
> **[1:30](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=90)** Going back to the documentation, you'll see there are a variety of test card numbers that you can use.
>
> **[1:36](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=96)** And that's it.
>
> **[1:37](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-registration-and-payments?u=76281980&t=97)** Just don't forget to disable Test Mode when you're ready to start accepting real payments or to view real transactions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (3), [[WordPress]] (1)
> **Prerequisites:** install (1), you need to have (1), setup (1)
> **CLI Commands:** make (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Test access to content](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980&t=0)** - [Instructor] In this course, you've seen me log in and out or use an incognito browser window to check my content restrictions, but I'll show you an easier way, and that's the User Switching plugin.
>
> **[0:12](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980&t=12)** This allows you to quickly swap between user accounts in [[WordPress]] at the click of a button.
>
> **[0:17](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980&t=17)** You'll be instantly logged out and logged in as your desired user.
>
> **[0:20](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980&t=20)** This is really handy for test environments where you regularly log in and out between different accounts, or for administrators who need to switch between accounts.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980&t=29)** And of course, it's absolutely perfect for checking if your content restrictions are working as expected.
>
> **[0:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980&t=35)** Now, if it seems like they're not working and you've double-checked that your content restrictions are set up correctly, well, caching or optimization plugins can sometimes cause content restrictions to appear as though they're not working.
>
> **[0:48](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980&t=48)** Now, I don't have any installed on my site, but if you do, temporarily disable those types of plugins to see if the issue disappears.
>
> **[0:57](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980&t=57)** And that can help you determine if that might be the culprit.
>
> **[1:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-access-to-content?u=76281980&t=60)** If so, a lot of caching plugins will allow you to exclude certain pages from caching, so you might be able to exclude your memberships content to resolve the issue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Test email deliverability](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-email-deliverability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-email-deliverability?u=76281980&t=0)** - [Instructor] Last but not least, before making your site live, you'll want to test that transactional emails related to orders and memberships, et cetera, are being sent.
>
> **[0:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-email-deliverability?u=76281980&t=10)** If you're not seeing emails, first make sure that they're enabled here under [[WooCommerce]], Settings, Emails.
>
> **[0:18](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-email-deliverability?u=76281980&t=18)** And if you see a check, it indicates that an email is enabled.
>
> **[0:22](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-email-deliverability?u=76281980&t=22)** If you see the X, it is not, and you can go to Manage and simply toggle that email notification on.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-email-deliverability?u=76281980&t=29)** Now, if they're configured correctly and you're still not seeing them, you may want to check with your web host to make sure they support transactional emails.
>
> **[0:38](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-email-deliverability?u=76281980&t=38)** If they don't, don't panic.
>
> **[0:40](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/test-email-deliverability?u=76281980&t=40)** You might just need to use an email deliverability plugin, of which there are multiple options in the [[WordPress]] plugin repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (1), [[WordPress]] (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1), toggle (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Additional integrations](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=0)** - [Instructor] I mentioned it at the top of this course, but one of the great things about [[WooCommerce]] is its flexibility when it comes to integrations.
>
> **[0:07](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=7)** And WooCommerce memberships is a great example of that.
>
> **[0:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=10)** While WooCommerce memberships works very well on its own to help you sell set linked memberships, it's very tightly integrated with WooCommerce subscriptions.
>
> **[0:19](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=19)** This lets you sell recurring memberships, as well as take advantage of some additional features that subscriptions provide.
>
> **[0:26](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=26)** Next, there's WooCommerce product vendors.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=29)** Imagine that you have a multi-vendor marketplace with multiple vendors, [[Microsoft Products|products]] and payout settings.
>
> **[0:35](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=35)** You can use WooCommerce memberships to integrate with that marketplace to restrict access to vendor products.
>
> **[0:42](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=42)** Interested in adding discussion forums to your WooCommerce membership site?
>
> **[0:46](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=46)** There's a basic integration with bbPress that lets you restrict forums, topics and/or topic tags.
>
> **[0:52](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=52)** It's not the world's most robust integration, but there is support, and then there's integration with Sensei LMS, or Learning Management System.
>
> **[1:01](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=61)** You can use memberships to control access to courses.
>
> **[1:05](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/additional-integrations?u=76281980&t=65)** While those are some integrations that work specifically with WooCommerce memberships, WooCommerce itself has a vast library of extensions that help you integrate with a variety of payment gateways, shipping options, advanced store management tools and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (9), [[Microsoft Products|Products]] (2)
> **Code Identifiers:** bbpress (1)
> **Env Vars:** lms (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/next-steps?u=76281980&t=0)** - Thank you so much for joining me in this course, It's always a pleasure to have you and before we sign off, I want to recommend some resources for continuing your learning journey.
>
> **[0:10](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/next-steps?u=76281980&t=10)** If you want to dive in more on [[WooCommerce]], specifically, there are several courses in the library to help round out your knowledge and depending on your skill level as a web developer with [[WordPress]], there are learning paths available for junior WordPress developers and advanced WordPress developers and with that, I think that's enough to keep you busy for now.
>
> **[0:29](https://www.linkedin.com/learning/building-a-wordpress-membership-site-with-ecommerce/next-steps?u=76281980&t=29)** I hope to see you in another course soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[WooCommerce]] (1)
> **Speakers:** - thank (1)


## Instructor

- [[Carrie Dils]]

## Skills Covered

- Wordpress Development
- E-Commerce

## Path Context

### In [[Build Your WordPress Ecommerce Skills]]
← [[WordPress- Speeding Up Your Site]] | **6 of 6**

## Appears In

- [[Build Your WordPress Ecommerce Skills]]

## Related Courses

_Courses sharing skills:_

- [[WordPress- Staging a Site]] — Wordpress Development
- [[Creating Block Patterns in WordPress]] — Wordpress Development
- [[Building a Headless WordPress Site with Gatsby]] — Wordpress Development
- [[WordPress- Everything about Plugins]] — Wordpress Development
- [[WordPress Essential Training]] — Wordpress Development

---

[↑ Back to top](#)