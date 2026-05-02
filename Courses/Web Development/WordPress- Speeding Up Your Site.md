---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: wordpress-speeding-up-your-site
url: "https://www.linkedin.com/learning/wordpress-speeding-up-your-site"
duration_minutes: 83
duration: 1h 23m
level: Advanced
updated: 6/22/2021
learners: 5709
skills:
  - WordPress
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFXFyOqFxWwOA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1624037453312?e=2147483647&amp;v=beta&amp;t=8vIT4vD4Iw3T6IolXE5rD60uL9GM6hGGII9wstF8aqs"
linkedin_topic: Web Development
learning_paths:
  - '[[Build Your WordPress Ecommerce Skills]]'
prev_courses:
  - '[[WordPress- SEO]]'
next_courses:
  - '[[Building a WordPress Membership Site with Ecommerce]]'
path_nav: '[{"path":"Build Your WordPress Ecommerce Skills","position":5,"total":6,"prev":"WordPress- SEO","next":"Building a WordPress Membership Site with Ecommerce"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/wordpress
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/WordPress-%20Speeding%20Up%20Your%20Site.md)

![WordPress: Speeding Up Your Site](https://media.licdn.com/dms/image/v2/C560DAQFXFyOqFxWwOA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1624037453312?e=2147483647&amp;v=beta&amp;t=8vIT4vD4Iw3T6IolXE5rD60uL9GM6hGGII9wstF8aqs)

# WordPress: Speeding Up Your Site

> Slow loading speeds equal lost customers. In this course, instructor Patrick Rauland walks through steps you can take to make a typical WordPress site lightning fast. Patrick explains why speed is so important, then shows you how to check and monitor your speed. He describes how websites slow down and how to identify static and dynamic WordPress sites. Patrick goes into hosting and all the ways a 

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-speeding-up-your-site) | 1h 23m | Advanced | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Make your WordPress website lightning fast](#make-your-wordpress-website-lightning-fast)
  - [What you should know](#what-you-should-know)
- [**1. Fundamentals of Performance**](#1-fundamentals-of-performance) (4 videos)
  - [Why speed is important for websites](#why-speed-is-important-for-websites)
  - [How to check and monitor your speed](#how-to-check-and-monitor-your-speed)
  - [How websites slow down](#how-websites-slow-down)
  - [Static vs. dynamic sites](#static-vs-dynamic-sites)
- [**2. Hosting**](#2-hosting) (3 videos)
  - [Why hosting matters](#why-hosting-matters)
  - [PHP versions](#php-versions)
  - [Server location](#server-location)
- [**3. Media**](#3-media) (5 videos)
  - [Optimize images](#optimize-images)
  - [Install an image optimizing plug-in](#install-an-image-optimizing-plug-in)
  - [Use a content delivery network (CDN)](#use-a-content-delivery-network-cdn)
  - [Offload audio and video files](#offload-audio-and-video-files)
  - [Use lazy loading](#use-lazy-loading)
- [**4. Plugins and Themes**](#4-plugins-and-themes) (3 videos)
  - [Your theme matters](#your-theme-matters)
  - [Plugins: Quality over quantity](#plugins-quality-over-quantity)
  - [Concatenate and minify scripts and styles](#concatenate-and-minify-scripts-and-styles)
- [**5. Database**](#5-database) (3 videos)
  - [WordPress database structure](#wordpress-database-structure)
  - [Custom database tables](#custom-database-tables)
  - [Limit post revisions](#limit-post-revisions)
- [**6. Caching**](#6-caching) (3 videos)
  - [What is caching?](#what-is-caching)
  - [Configuring caching plugins](#configuring-caching-plugins)
  - [Cache busting](#cache-busting)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Make your WordPress website lightning fast](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=0)** - [Patrick] [[WordPress]] makes creating and maintaining a website easy.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=4)** That's why over 40% of websites on the internet use WordPress.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=9)** It's by far the most popular [[Content Management]] system in the world.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=14)** But the same features that make WordPress easy to maintain don't necessarily make it fast.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=20)** And nowadays, no one wants to wait.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=23)** If your website takes more than three seconds to load, people abandon ship and bounce out of your site, fewer people will convert, and because search engines know consumers don't like to wait, they take speed into consideration for your search engine ranking.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=38)** I'm going to show you how to improve the speed and performance of your WordPress website.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=44)** We'll look into plugins, themes, optimizing images, using CDNs, manage WordPress hosts, and the right way to test and measure the speed of your website on a weekly basis.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=55)** I'm Patrick Rauland, and I've been building WordPress websites professionally for over a decade.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=60)** I've built sites for clients, created custom themes, developed plugins, designed software, and worked with WordPress hosts.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=67)** If you're ready to take your WordPress site to the next level, then come join me in my [[LinkedIn]] Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (8), [[Content Management]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - [patrick] (1)

#### [What you should know](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=0)** - [Narrator] Before we dive in, let's go over what you should know.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=4)** First, you should be very comfortable with [[WordPress]].
>
> **[0:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=7)** That means knowing how to find and install plugins, how to select and customize themes and how to use the WordPress admin interface.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=16)** Next, it'll be helpful if you're familiar with [[HTML]], CSS and [[JavaScript]].
>
> **[0:21](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=21)** A lot of the optimization in this course focuses on these front end technologies.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=27)** Next you'll need to know a little bit about how WordPress hosting works.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=31)** You won't need to know the details about server optimization, but some basics about how servers work will help with a lot of the backend optimization.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=40)** And finally, you should be open to exploring.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=43)** Some of the things I will show you will not work on your site.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=46)** And some of them will work better than the example on screen.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=49)** So come prepared with an open mind knowing that your results will vary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** html (1), css (1)
> **Prerequisites:** install (1), you'll need (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)


### 1. Fundamentals of Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Why speed is important for websites](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=0)** - [Instructor] Before we get into the nitty-gritty of speeding up your website, it's important to understand why speed is important in the first place.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=8)** The one-sentence summary is no one wants to wait.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=12)** The less time people have to wait, the more time they have to browse your site and convert, whether that means filling out a [[Lead Generation]] form or checking out on your [[E-Commerce]] store.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=24)** Numerous studies show that as page speed goes up, so does the bounce rate.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=29)** People either leave before your page finishes loading or they're so frustrated they don't take any action when it does load.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=35)** Whatever the reason, a high bounce rate is bad news.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=39)** Similarly, the slower the website, the fewer pages visitors read.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=44)** If things are snappy, someone might read nine pages.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=48)** But if pages take forever to load, the same person might only read three pages.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=53)** People just don't want to wait.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=56)** The bounce rate and number of pages are only two elements affected by your website speed.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=62)** Numerous case studies show that A/B testing to optimize website speed almost always corresponds with an increased sales and revenue.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=70)** In this case, the sped-up version of a website increased the company's orders by a massive 16 1/2%.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=78)** When you're working on optimization and your goal is to increase conversions, here's a rule of thumb.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=83)** A one-second delay decreases conversions by 7%.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=88)** If your site loads in four seconds and you can reduce it to three seconds, you could see a 7% increase in conversions.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=97)** The other big reason to increase your website speed is to improve your [[Search Engine Optimization (SEO)|search engine optimization]], or SEO.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=104)** Search engines know that people don't want to wait.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=107)** So they rank fast websites more highly than slow websites.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=111)** [[Google]] started using speed as a factor for PageRank way back in 2010, since their Core Web Vitals initiative began.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=119)** It's only become more relevant in recent years.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=123)** If you want a rule of thumb for load time, then shoot for less than three seconds.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=128)** If your website can go faster, then go faster.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=131)** It'll only help your site.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=133)** But three seconds is a great initial goal if your load time is slower than that.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=139)** These three benefits make speeding up a website easy to sell to your stakeholders.
>
> **[2:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=143)** Number one, the lower bounce rate, number two, increased conversions, and number three, better search engine ranking.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=152)** If you're a web developer, you can tell your boss exactly how a faster website will make the company more money.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=158)** And if you work for a [[Web Development]] agency, you can offer the added value of website optimization as a service or include it as part of your website build.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=168)** Speed is incredibly important if you actually want users to visit and interact on your website.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=174)** Now let's see if we can help you find a starting point for your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Lead Generation]] (1), [[E-Commerce]] (1), [[Search Engine Optimization (SEO)|Search engine optimization]] (1), [[Google]] (1), [[Web Development]] (1)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** rule of thumb (2)
> **Env Vars:** seo (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How to check and monitor your speed](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=0)** - [Instructor] There's a great quote, which applies to this whole course and especially this lesson.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=5)** "What gets measured gets improved."
>
> **[0:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=7)** Lucky for us, website speed is easy to measure, break down and analyze and this is important because what works for one site might not work for another.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=17)** I've seen some sites try to implement speed improvements and actually slow down because they broke some other aspect of their site.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=25)** So we always want to measure and confirm that our sites are getting faster.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=30)** So let's take a quick tour of the tools that we can use to measure our site speed.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=35)** [[Google]] PageSpeed Insights is a great tool and since one of our main reasons we're improving the speed of our site is to rank better, we should at least occasionally check our site against the official Google tool.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=46)** One of the things I like about the Google tool is it gives you scores for desktop and mobile.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=52)** It's very common to see a much lower score for mobile.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=55)** Don't worry if you see that really low number because this is just a starting point.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=61)** KeyCDN has a few tools and they give you a helpful list of things to improve.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=66)** They also let you choose a server as the test location so you can see how the site loads for someone who is close to your server, compared against someone who lives far away.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=77)** My favorite tool is GTmetrix.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=79)** To give you an idea of what a full report looks like, type your website into the text field.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=86)** I've already done this and loaded my personal blog.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=90)** So we can scroll down and see they have their own grades.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=93)** They use the same web vitals that Google uses.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=97)** They also have a speed visualization tool so you can see what a browser is rendering at each second.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=106)** The Performance tab shows you the web vitals and if you want to learn more about them, you can click on the helpful links.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=113)** The Structure tab will list suggestions ordered by how big of an impact they'll make.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=119)** As you can see here, this site is pretty well optimized already.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=125)** The Waterfall tab is perhaps my favorite part.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=127)** It shows you how each element in an [[HTML]] page loads.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=133)** We'll talk about this waterfall in future videos but if you see a large item, it could be blocking all of the items behind it, so one of the things we'll do in this course is find large blockers and either reduce their size, remove them entirely or lazy load them at the end.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=149)** We actually haven't seen the killer feature in GTmetrix and it's so simple.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=154)** With a free account, we can monitor your website and get a daily, weekly or monthly email, summarizing their page speeds and the reason this is super important is that [[WordPress]] websites are always changing.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=167)** The typical site owner is constantly adding and removing plugins, changing the theme's look and feel and uploading images.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=175)** Numerous times in the last year, I've received an email from GTmetrix and noticed that my score dropped, which likely means some plugin, theme or setting I changed in the last week is the culprit.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=187)** So make sure to click monitor and set up a recurring email.
>
> **[3:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=191)** Throughout this course, we're going to optimize this test site.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=194)** This is a copy of my real live Laid Back Games website that sells this actual physical product.
>
> **[3:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=200)** I've already optimized the live site, so I recreated it for this course so we can optimize it together.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=207)** I'll copy the URL here, let's go to GTmetrix and we can paste it in and click Analyze.
>
> **[3:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=219)** We're going to use this report as a baseline throughout the course.
>
> **[3:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=223)** I strongly recommend that you pause this video right now to take a speed test yourself for your own website.
>
> **[3:50](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=230)** This way you'll have a concrete starting point.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=234)** As you can see, with this site, we're doing okay but we can do much better.
>
> **[3:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=239)** Some of these numbers, like First Contentful Paint, looks okay but the fully loaded time of five seconds looks a little rough.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=246)** Now let's start diagnosing what can actually go wrong with the site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[HTML]] (1), [[WordPress]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** scroll down (1), click on (1), go to (1)
> **Env Vars:** html (1), url (1)
> **Cross-References:** in the last (2)
> **Definitions:** is a  (2)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)

#### [How websites slow down](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=0)** - [Instructor] Before we get into more tactical techniques to speed up your site, let's focus on the process of building and rendering a webpage, because each part can be done quick and easy or slow and hard.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=13)** When someone visits your website, their browser requests a webpage from a server first.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=18)** In our example, if someone wants to visit lay back games, they'll request a webpage from the server.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=25)** Then the server uses [[WordPress]] to assemble the page.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=28)** It turns a bunch of [[PHP]] files into a single [[HTML]] file which is returned to the visitor's browser.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=36)** The time this process takes is called the time to first byte or TTFB.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=41)** This isn't one of the official lighthouse [[Performance Metrics]] search engines like [[Google]] use, but it is still very helpful to know.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=48)** A good goal for time to first byte is less than 200 milliseconds.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=53)** If it's higher than that, it's very likely a server or WordPress issue.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=58)** If the time to first byte is lower than 200 milliseconds, you can focus on optimizing the front end of your site.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=65)** To decrease the time to first byte and increase your website speed, start by optimizing the server's location.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=72)** If most of your customers are in a specific geographic region, try to put a server close to them.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=78)** You can also lower the TTFB by changing how the server assembles the HTML file.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=83)** In this course, we'll look at how to do that with WordPress.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=87)** A slower TTFB could be due to how fast your server parses PHP, how many plugins you have, what your plugins are doing, what theme you use, how many templates you have and how many template parts WordPress has to stitch together.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=101)** Once the visitor's browser has the HTML page, it reads the HTML and loads assets, including images, CSS, and [[JavaScript]] files.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=110)** We've all heard about HTTP, that's the protocol your browser uses to download files.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=116)** And for decades, we've primarily used HTTP 1.1.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=121)** HTTP/2 is a new protocol.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=124)** And if your server and the client's browser both support it, then you can download assets in a new fashion called multiplexing.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=132)** With HTTP/1, you download one file at a time.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=136)** With HTTP/2 and multiplexing, you can download multiple files at the same time.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=142)** This sounds like a minor feature, but it's actually huge.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=146)** Imagine needing to send separate emails for each part of a birthday party invite, one for the image, one for the music and one for the text, and you can only send the second email after you've received a response to the first.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=159)** With HTTP/2, your browser sends the equivalent of one request or based on our analogy, one email for everything, image, music and copy.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=168)** The server can respond to your request with all the files that has available and you will get your assets much faster.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=175)** If you have a huge file, for instance, a large uncropped photograph, the other files won't get stuck behind it slowing down the load time for the [[Representational State Transfer (REST)|rest]] of the website.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=186)** Once the browser has a few assets, it starts rendering them.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=189)** The first couple of colors are called the first paint.
>
> **[3:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=192)** Once you start adding content, this is called the First Contentful Paint or FCP, and it's one of the main signals search engines use to measure the speed of your site.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=203)** Here's what Google says about First Contentful Paint.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=206)** The FCP measures how long it takes the browser to render the first piece of DOM content after user navigates to your page.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=215)** The DOM is the [[Document Object Model (DOM)|document object model]].
>
> **[3:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=217)** It's the way that the browser processes in HTML page.
>
> **[3:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=220)** You don't need to know what it is and for our purposes right now, it basically means HTML page.
>
> **[3:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=226)** I like to think of FCP as content with CSS for colors and styles.
>
> **[3:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=232)** You want your FCP to be 0.9 seconds or less.
>
> **[3:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=236)** Users expect to start to see your website's content loading quickly.
>
> **[4:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=242)** If you have a good time to first byte and the First Contentful Paint it takes too long, then your assets are likely the culprit.
>
> **[4:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=249)** To improve your FCP, reduce the size of your assets.
>
> **[4:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=253)** Start by optimizing your images, make sure your server can handle HTTP/2 and concatenate files.
>
> **[4:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=259)** When you can catenate, you download one medium file instead of a dozen tiny files.
>
> **[4:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=264)** We'll be covering all of these techniques later in the course.
>
> **[4:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=268)** After First Contentful Paint, your browser continues loading and rendering images, new style sheets, and JavaScript files.
>
> **[4:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=276)** Then it gets to the largest piece of content which is usually an image or video.
>
> **[4:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=281)** This is called the Largest Contentful Paint or LCP.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=286)** You want your LCP to happen in 1.2 seconds or less.
>
> **[4:50](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=290)** The LCP should load quickly because Google assumes it's important and they want the largest and most likely important content to load quickly.
>
> **[4:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=298)** With WordPress, there are ways to make sure that the LCP loads early.
>
> **[5:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=303)** Just make sure that your time to first byte and First Contentful Paint are already hitting their targets.
>
> **[5:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=309)** After the Largest Contentful Paint, your browser keeps adding the remaining assets until the page is fully loaded.
>
> **[5:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=315)** The time it takes to get the whole page loaded isn't a major indicator for search engines anymore, but that doesn't mean your users won't get frustrated.
>
> **[5:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=323)** As a goal, your website should load completely within three seconds.
>
> **[5:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=328)** As you can see, there are a lot of ways to slow down your website with inefficient loading processes.
>
> **[5:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=334)** As we go through this course, and start improving the major metrics like time to first byte, First Contentful Paint and Largest Contentful Paint, remember that there are loads more.
>
> **[5:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=344)** About half of these metrics are going to encourage you to return that first byte faster or to load an important piece of content faster.
>
> **[5:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=352)** And the other half of these metrics are going to be about loading fewer assets and loading them quicker.
>
> **[5:57](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=357)** We're going to use a combination of techniques to improve all of these metrics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6), [[WordPress]] (5), [[Google]] (3), [[PHP]] (2), [[JavaScript]] (2)
> **Env Vars:** http (7), html (6), fcp (5), lcp (4), ttfb (3)
> **CLI Commands:** make (3), php (2)
> **Definitions:** is called (3), is a  (1), basically means (1)
> **Versions:** 1.1 (1), 0.9 (1), 1.2 (1)
> **Analogies:** imagine (1), for instance (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Static vs. dynamic sites](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=0)** - [Instructor] Before we start trying to optimize our site, let's cover one final concept, and that is the drastic differences between static and dynamic websites.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=11)** A static website has content that rarely changes.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=14)** Think about a simple brochure website with a homepage and about page, a services page and a contact page.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=20)** Information sites can also be static, even incredibly large ones like new sites.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=26)** A dynamic website has content that changes often.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=30)** Some dynamic websites even look different to every single user.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=34)** Think about [[E-Commerce]] websites where each visitor has their own cart or membership sites where users see different content based on their membership level or even based on what content they've already consumed.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=46)** Many techniques we'll cover in this course will work for both types of websites, but there is one particular technique that works very well with static websites and doesn't work well for dynamic websites and that is caching.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=61)** There are many different types of caching and we're going to cover them later in this course, but let's look at one type of caching to highlight how it works and why it works better for some websites than others.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=72)** With server caching, the web server processes the page, assembles all the different pieces and saves the [[HTML]] output.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=80)** Then the next person who visits that page gets the saved copy, which saves a ton of processing time.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=87)** Caching can be an incredibly powerful tool for static websites.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=90)** The very first user to visit a blog post will trigger the server to assemble that web page.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=95)** The server caches it and returns it to the user.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=98)** Every future visit uses the cached version of that blog post which saves your server so much processing time and it saves your user's loading time, but it's a lot more limited for dynamic websites because you can't cache the whole page.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=111)** Be aware of what kind of website you have.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=114)** If you try to use techniques that speed up a static brochure website, you'll be disappointed when they don't work as well on dynamic e-commerce websites or possibly even slow down a dynamic e-commerce website.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=127)** For this course, we're going to focus on speeding up a dynamic website.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=131)** As you're following along, you can optimize any type of site.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=135)** Just keep in mind that certain techniques will be more or less effective depending on the type of site that you're optimizing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (3), [[HTML]] (1)
> **Warnings:** be aware (1), keep in mind (1)
> **Env Vars:** html (1)
> **Cross-References:** later in (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)


### 2. Hosting

[↑ Back to Table of Contents](#table-of-contents)

#### [Why hosting matters](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=0)** - [Instructor] When people talk about optimization, they usually focus on the front end.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=4)** That means digging into the [[HTML]] code, combining CSS files, differing [[JavaScript]] files, and optimizing images.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=12)** These are all very useful techniques but they're also the easiest techniques to implement.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=17)** And they only affect your speed after the visitor's browser receives that initial HTML page.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=23)** It's important to remember that web hosting directly affects your initial page load and it's worth investigating, even if switching hosts could be time-consuming or expensive.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=34)** I just performed a speed test on my personal blog and I'm using my blog instead of the laid back game site to show you a simpler static site for this example.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=43)** If we take a look at the homepage we can see that the page loaded in 1.5 seconds, which is a very good time.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=52)** Keep in mind, the rule of thumb is 3 seconds or less.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=55)** So what part of this overall speed test is controlled by your hosting or is mostly affected by hosting.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=63)** For a [[WordPress]] website, a user visits the page, your server processes all the [[PHP]] files, creates the HTML page, and then returns it to the user.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=72)** Your hosting settings directly affect this part.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=77)** If you have more RAM, faster CPU, or more PHP workers your server constituents PHP files together faster and return them to the user faster.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=88)** So if you have a slow time to first byte, that's this number right here that could be affected by your hosting, it could be very low CPU, or it could be only one PHP worker, but there are other factors.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=102)** The time to first byte is also affected by your theme, plugins and settings, in addition to the raw hosting power.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=109)** If you have a horribly slow plugin your time to first byte could be 5 seconds, even on the best hosting on the planet.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=117)** Luckily there is a trick you can do to test just the hosting aspect of your site.
>
> **[2:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=122)** Instead of testing an actual page on your site, which is affected by plugins, settings, and themes test the already generated HTML read me file which WordPress installs by default at [yoursite.com/readme.html](https://yoursite.com/readme.html).
>
> **[2:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=137)** You can see that page right here.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=139)** This will test how fast a server can receive your request routed to the right place and return a file.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=146)** Some hosts might not install this read me or it might be blocked.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=151)** If that happens reach out to your host so they can test that read me file, or create a simple HTML file yourself and upload it.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=159)** I've gone ahead and I've speed tested this HTML read me file.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=162)** You can see that loading the read me file takes a total of 519 milliseconds, and the important time to first byte is 229 milliseconds, which is a pretty good time.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=175)** I like to think of this number this 229 milliseconds as the baseline number.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=180)** This is an already assembled HTML file that your web server is just sending to a user.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=185)** And if you use caching, which we'll talk about later in this series this is the absolute fastest your web server could deliver a cached page to a user.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=194)** This trick helps you see how fast your web server can return a file.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=198)** But there is still processing time that you have to consider for dynamic content.
>
> **[3:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=202)** This is where you can compare these speed tests.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=206)** With our homepage, we can see that the time to first byte is 344 milliseconds and the read me is 229.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=215)** The difference between these two numbers is how much time our server spends processing and putting all the PHP files together.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=222)** For my site, it takes the server an extra 115 milliseconds of processing time to assemble the homepage over a static read me file, this is a very good time.
>
> **[3:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=232)** If you have a lot of plugins or a complex theme or a slow server, this could take a lot longer.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=238)** And if you're unhappy with this number, the [[Representational State Transfer (REST)|rest]] of the series will improve other aspects of your site but we can't improve this number.
>
> **[4:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=245)** That's why we're starting here.
>
> **[4:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=247)** If it takes your server 300, 400 or 500 milliseconds just a process, a blog post homepage you should probably look into getting better or close your hosting.
>
> **[4:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=258)** And when it comes to hosting you generally get what you pay for.
>
> **[4:21](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=261)** If you want to get $5 a month hosting it's probably not going to be very speedy.
>
> **[4:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=266)** There's a lot of information you could consider for your website host.
>
> **[4:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=270)** Rather than spending hours or days researching how fast each host will likely work for your particular website, you might want to try free trials to see which host actually works best for your particular site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (8), [[PHP]] (5), [[WordPress]] (2), [[JavaScript]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** html (7), php (5), cpu (2), css (1), ram (1)
> **CLI Commands:** php (5)
> **Definitions:** is a  (4), is an  (1)
> **File Paths:** yoursite.com/readme.html (1)
> **URLs:** [yoursite.com](https://yoursite.com) (1)
> **Versions:** 1.5 (1)
> **Cross-References:** later in (1)

#### [PHP versions](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=0)** - [Narrator] One of the best ways to improve your website's hosting performance is to run the latest version of [[PHP]].
>
> **[0:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=6)** Which is 7.0 or higher.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=9)** There's a lot of data about this.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=10)** And if you compare the old version of PHP, PHP 5.6, to the newest version, PHP seven, that PHP seven works about 1.8 times faster than PHP 5.6.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=24)** And there are some tests with specific applications in this case, [[Drupal]] [[WordPress]] and PHPBB.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=32)** And we can see that with WordPress specifically, it's over two times as fast.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=37)** So how do you know if you're running PHP seven?
>
> **[0:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=40)** We can go to our site, and then we can scroll down to tools, site health, click on info, and then scroll down to server.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=55)** And under server, we can see PHP version, in my case 7.4, which is the latest.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=61)** Now, if you don't see this for some reason, you can also find it in your hosting panel.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=66)** So I'm going to go over to my hosting panel.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=68)** And in my case, I'm using nexcess, which is a managed WordPress host.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=72)** Your host will likely look a little bit different, but there should be some similarities here.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=77)** I'll scroll down to environment.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=80)** And over here I can see version 7.4.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=84)** And then they'll usually give you an option to upgrade to the latest version.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=90)** When you do this, please make sure you make a backup.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=93)** I ran this upgrade a few weeks ago and there were some minor problems upgrading between 7.3 and 7.4.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=100)** So always make sure you have a backup before upgrading.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=104)** Once you're on a version of PHP 7.0 or higher, you should be processing PHP files much faster.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=111)** Go ahead and take a speed test and you should see an improvement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (10), [[WordPress]] (3), [[Drupal]] (1)
> **CLI Commands:** php (10), make (3), find (1)
> **Env Vars:** php (10), phpbb (1)
> **Versions:** php 5 (2), 7.4 (2), 7.0 (1), 1.8 (1), version 7 (1)
> **UI Navigation:** scroll down (3), go to (1), click on (1)
> **Definitions:** is a  (1)
> **Best Practices:** always make sure (1)
> **Prerequisites:** make sure you have (1)

#### [Server location](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=0)** - [Instructor] The internet feels like a place where your location doesn't matter.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=4)** We're used to seeing content and interacting with people from around the world.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=8)** Wherever you are online, every site is one click away.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=12)** But you might be surprised to learn that your web server's location does matter.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=17)** I live in Denver, Colorado, so I can access a web server in the United States much faster than a server in Europe, South America, or Asia.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=26)** Let's play a game called speed tests around the world.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=30)** Now my web server is in Michigan, which is the central part of the United States, and we're going to run a speed test to see how fast my site loads from different locations.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=39)** I'll be using the KeyCDN Speed Test since they make it really easy to test different locations.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=45)** So I'll copy my URL here, drop it into KeyCDN, and let's start with New York, since that's probably the closest.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=56)** We'll click Test and we get 1.37 seconds.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=62)** Let's give a go with London.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=67)** That grows all the way to 2.1 seconds.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=71)** Let's try something around the world, so we'll try Bangalore, which is three seconds.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=78)** It's not as bad as I thought it would be.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=82)** And lastly, let's try Tokyo.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=87)** And we get just under three seconds.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=91)** So the lowest time was New York at 1.37 seconds and the highest was Tokyo at 2.9 seconds.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=97)** That is more than twice the time.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=99)** So when someone is close to my web server, New York to Michigan, it's only 1.37 seconds, London, which is a half continent away, is 2.1 seconds, and all the way around the world is almost three seconds.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=112)** So what have we learned here?
>
> **[1:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=114)** You want to make sure that your web server is located in the same continent to your audience, or at least the largest chunk of your audience.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=123)** You probably don't know this, but board games are very popular in the United States or in Europe so I definitely want to have my board game website in one of those two places.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=133)** If you don't know where your server is located, you can find out with one of two methods.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=137)** Number one is to contact your web host.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=140)** This is probably the easiest method.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=142)** I did it just before this video and it took about four minutes.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=146)** The other way is to use online tools.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=150)** You can use an online website like this one.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=152)** They use a technology called Traceroute and plot the locations onto a map for you.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=158)** And you're looking for the final location on this map.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=162)** Since my website caters to a U.S. audience, I'm very happy with where my server lives, but if you want to move your server, ask your host if they have a location closer to your customers.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=172)** It's much easier to move between data centers than to set up a brand new hosting account.

> [!info]- Semantic Content
>
> **Versions:** 1.37 (3), 2.1 (2), 2.9 (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Media

[↑ Back to Table of Contents](#table-of-contents)

#### [Optimize images](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=0)** - [Instructor] We've come to one of the most crucial parts of speeding up your site.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=4)** And that's optimizing your images.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=7)** And according to [[Google]], images can account for 60% of a page's total weight.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=12)** So if you could only work on one aspect to speed up your site, I would encourage you to optimize your images.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=20)** There are three things we're going to look at in this lesson.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=23)** Different file types, file quality, and how to automatically optimize images in [[WordPress]].
>
> **[0:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=30)** Which of these images do you think is the largest file?
>
> **[0:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=33)** I saved all the images in the same image editing program.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=36)** The left is the original, the two in the middle, are JPGs at different qualities.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=40)** And the last, is a PNG file.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=43)** Now to my naked eye, they're all very high quality.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=46)** And I can't tell the differences between them.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=49)** In this case, the JPG files are much smaller than the PNG file.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=53)** And the different quality levels, make a big difference.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=57)** The point of this example is to demonstrate how drastically you can improve speed just by saving images as the right file type and the right file quality.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=66)** Let's take a look at another example.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=68)** Which of these files do you think is larger?
>
> **[1:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=71)** Left is JPG and the right is PNG.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=74)** How many of you expected the JPG to be lowest again?
>
> **[1:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=78)** JPGs and PNG files store pixel data in a completely different way.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=82)** So they're very good at different things.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=85)** And you want to save some types of media in one format and other media in a different format.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=91)** JPGs are really great for photographs because they can handle lots of different colors.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=97)** They're also very small in general and they do have an adjustable compression rate.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=102)** So, you can choose the quality level when you export.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=106)** PNG files are great for illustrations and graphics because they can handle few colors very well.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=112)** They also support transparency, but you can't choose different quality levels.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=118)** You may have also heard about a different file type called a Scalable Vector Graphic or an SVG.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=124)** SVGs use shapes, numbers and coordinates rather than a giant list of pixels to render graphics.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=131)** This means, they're very easy to scale and they're very small.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=135)** Generally speaking, simple illustrations will work well in SVG or PNG formats.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=141)** So if you want to experiment with SVGs and you have a graphic editor program like Photoshop, go ahead and export your logo as an SVG.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=150)** If you like creating them and they're efficient for you, go ahead and keep using them.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=154)** Just make sure that a PNG isn't smaller.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=157)** In my case, the SVG file of my logo, was about 50% bigger than the PNG file.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=163)** So I'm going to stick with that PNG file.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=167)** So the first lesson is to choose the right file type depending on the type of asset that you're creating.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=173)** Let's go back to the Fry Thief example.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=176)** Most image editing tools have a quality setting for JPGs and you can often export at a lower quality, say 60 or 70%.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=184)** And it's usually not noticeable at all.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=187)** In this example, we went from 7.1 megabytes down to 1.2 megabytes at 60% quality.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=194)** And it still looks great.
>
> **[3:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=197)** If we want to reduce this further, we could also reduce the size of the image meaning we could shrink it from 4,000 pixels down to 1000 pixels at the same quality.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=207)** And that would shrink the image down to 634 kilobytes which saves about 50% of the space.
>
> **[3:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=213)** And we could shrink this even further.
>
> **[3:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=216)** Lucky for us, WordPress will automatically resize images when we upload them.
>
> **[3:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=221)** So unless you want an image to be a very specific size, you shouldn't have to resize them manually.
>
> **[3:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=228)** When I'm working on my own site, I can export images from an image editing program and upload them directly.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=234)** But WordPress is great because it can be used by anyone including people that don't have image editing programs.
>
> **[4:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=241)** So you really want to install a plugin that will automatically optimize images upon upload.
>
> **[4:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=247)** This is different than automatically resizing images which WordPress does by default.
>
> **[4:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=252)** Optimizing images means reducing the file size similar to those JPG quality levels.
>
> **[4:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=258)** And there are a number of plugins and services that you can use.
>
> **[4:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=262)** Compress JPEG and PNG images is created by TinyPNG.
>
> **[4:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=267)** They have a free tier where you can optimize about 100 images a month.
>
> **[4:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=273)** Imagify also has their own plugin which lets you optimize 20 megabytes of images every month for free.
>
> **[4:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=279)** And they have paid plans for more images.
>
> **[4:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=282)** These are just a couple of plugins and services that you could use.
>
> **[4:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=285)** And there are probably dozens of other examples that I could show you.
>
> **[4:50](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=290)** When you're selecting a plugin that'll optimize images, you want to make sure that they can retain the original full-size image as a backup, just in case.
>
> **[4:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=299)** They also, should automatically optimize images upon upload and a feature you don't need right now, but you might want in the future, is a new image format called WebP.
>
> **[5:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=309)** This isn't supported in all browsers yet.
>
> **[5:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=311)** So you don't want to create an upload WebP images, but they are a more modern format and about 25% smaller than PNGs and JPGs.
>
> **[5:21](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=321)** So, if your image optimization plugin can handle this, you're ahead of the curve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4), [[Google]] (1)
> **Env Vars:** png (10), jpg (4), svg (4), jpeg (1)
> **CLI Commands:** make (3)
> **Versions:** 7.1 (1), 1.2 (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Install an image optimizing plug-in](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=0)** - [Instructor] I have an account with ShortPixel, so I'm going to show you how to set this up on my own laid back game site.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=8)** I'll go to my admin.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=11)** We'll add a new plugin.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=18)** Let's find and install ShortPixel and activate it.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=24)** And here we can add our API key, so I'll scroll down.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=29)** I'll paste in my API key.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=35)** Once you have your API key, we can configure this.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=38)** We can resize images, we can remove extra image data, and if we wanted, we could get rid of our image backups.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=45)** I'm going to keep all these settings as the default, click save, and go to bulk process.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=53)** You can see here I have 16 original images and [[WordPress]] has created 101 thumbnails.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=58)** Let's go ahead and click also create WebP versions of the images for free and start optimizing.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=67)** This process may take a while depending on how many images you have.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=71)** So go ahead, start the process, and then go out to lunch or get a cup of coffee.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=76)** And it looks like we're done.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=78)** The media library has been optimized, saving about 73%.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=84)** Now I took a speed test right before, and we can see some interesting data here.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=88)** Let's go ahead and take a speed test right after.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=100)** Almost instantly, we went from a 88% performance and 83% structure to 99 and 91.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=108)** The Largest Contentful Paint went from 1.5 seconds down to 762 milliseconds.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=116)** And the Fully Loaded Time went from 5.2 seconds down to 3.6 seconds.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=124)** As you can see, optimizing images can do a lot to speed up your site.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=129)** They're often 60% of the page load.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=132)** So make sure you optimize your images, choose the right image format, and configure your plugins to automatically optimize images for people who can't export them directly out of a graphics program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1)
> **Env Vars:** api (3)
> **Versions:** 1.5 (1), 5.2 (1), 3.6 (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Prerequisites:** configure (2), install (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Use a content delivery network (CDN)](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=0)** - [Instructor] A common piece of advice to speed up your site is to use a content delivery network or a CDN.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=6)** A content delivery network is similar to a web server but there are two key differences.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=13)** The first is that CDNs store static assets, like images, CSS files, and [[JavaScript]] files.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=20)** They don't process web pages.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=23)** Second, most medium websites have a single web server but they can have dozens or hundreds of CDN locations around the world.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=31)** And CDNs use geolocation to send visitors to the closest CDN.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=38)** Static assets like images, CSS and JavaScript files might be responsible for half of the total page load time even on an optimized site.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=48)** So if you have a CDN with locations around the world, it's like you always have a web server close to your customers, at least for those static files.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=58)** This will drastically help the page load for those people.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=62)** A CDN is a specialist.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=64)** They specialize in storing and retrieving files.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=68)** A web server is also a specialist and they specialize in processing and assembling web pages.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=75)** And generally, my rule of thumb is that by using two specialists, you'll see speed gains over using a generalist for two jobs.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=83)** I like to think of it as having a writer and editor work on the same book compared to a writer which edits their own content.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=89)** There's nothing wrong with that but it might take a little bit longer.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=93)** So if I've convinced you, there are a number of options for CDNs.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=98)** Some managed [[WordPress]] hosts have a CDN built in.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=101)** WP engine has a CDN built into their hosting plans as does Kinsta as well as Nexcess.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=118)** And if your website host has this, I strongly recommend you use it, primarily, because you'll have easy access to support if something ever goes wrong.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=128)** If your host doesn't offer a CDN, there are tons of CDN services out there, and they usually use a free WordPress plugin like CDN Enabler.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=136)** And some of these CDNs also provide other services.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=140)** Cloudflare is a really popular option that can also protect you from DDoS attacks, common spam, and they have an upsell to be a CDN for video content in addition to images, CSS, and JavaScript.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=154)** If you're on a budget, and your host doesn't have a CDN, then I strongly recommend the CDN feature built into Jetpack.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=160)** It's really easy to turn on, and all you have to do is connect your site to [wordpress.com](https://wordpress.com) with the free account.
>
> **[2:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=169)** To set this up on my own site, I could configure the CDN built into my hosting account which is what I'd recommend for most people.
>
> **[2:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=178)** But since most don't have this hosting account, I'm going to show you how to do it with the Jetpack CDN.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=185)** So I'm going to go over to my main site here.
>
> **[3:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=188)** I already have Jetpack installed.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=189)** If not, you can install it for free from [wordpress.org](https://wordpress.org), and I can scroll down and under Performance, you'll see something called Image Accelerator.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=203)** Let's go ahead and turn this on.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=207)** The CDN is now active.
>
> **[3:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=212)** Here's the speed test I took right before this video.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=214)** Let's go ahead and do it again now that the CDN is active.
>
> **[3:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=224)** I'll enter the URL and my location, and let's give it a test.
>
> **[3:51](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=231)** And here are the results.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=233)** It looks like it takes about 2.7 seconds to load with the CDN and 2.8 seconds to load without the CDN.
>
> **[4:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=240)** And we didn't have to do anything to our site other than check one check box.
>
> **[4:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=245)** We can see a 0.1 second increase in speed.
>
> **[4:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=249)** That's not a massive increase, but there are a couple of other factors.
>
> **[4:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=252)** We only have one large image on our homepage and the Jetpack CDN only applies to images.
>
> **[4:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=258)** So our CSS and JavaScript files aren't sped up via the CDN.
>
> **[4:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=264)** If you have more images, you'll likely see bigger speed gains.
>
> **[4:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=267)** And if you use a CDN that works with JavaScript and CSS, you'll also likely see bigger speed gains.
>
> **[4:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=274)** There's a CDN option for each website and budget.
>
> **[4:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=277)** The important point isn't to stress about finding the perfect CDN, but instead just sign up for one of them because it will help people all over the world access your site and it reduces some of the strain on your web server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (5), [[WordPress]] (4)
> **Env Vars:** cdn (24), css (5), url (1)
> **Versions:** 2.7 (1), 2.8 (1), 0.1 (1)
> **Analogies:** similar to (1), it's like (1), think of it as (1)
> **URLs:** [wordpress.com](https://wordpress.com) (1), [wordpress.org](https://wordpress.org) (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1), install (1)
> **UI Navigation:** scroll down (1)

#### [Offload audio and video files](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=0)** - [Instructor] There are a ton of tools to deliver [[JavaScript]], CSS, and images like CDNs, but there are also a few other types of media you might have on your site, namely audio and video files.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=12)** And just like JavaScript, CSS, and images, we want to offload audio and video files to external services to reduce the load on your web server and to have locations around the world to serve these locations from the closest location to the user.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=28)** First, let's talk about audio because there's very straightforward ways to offload those files.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=34)** I run a podcast for board game designers and each individual post includes the podcast audio.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=40)** You could upload all these audio files to your own web server, and you can run a podcast directly from your own [[WordPress]] site.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=46)** While this might sound great, it will eventually fill up all of your web hosting, and your site will slow down when hundreds or thousands of people download the new podcast all at the same time.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=58)** The straightforward solution is to use a separate service for hosting audio files, and there's already an industry built around this.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=66)** Both Libsyn and Blubrry have fantastic podcast hosting services, where for a small monthly fee you can upload as much audio as you want.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=75)** Podcast hosting services are great if you have new audio files every month.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=80)** But if you have a one-off file, you might want to look into a service like SoundCloud.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=84)** That will let you upload three hours of audio for free.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=87)** Most of these services will cost a little bit of money each month, but they completely solve the problem by offloading the audio to a separate service.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=96)** Again, this reduces the load on your own server, and they'll be distributed around the world.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=102)** This is one of those cases where a little bit of money can solve the problem entirely.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=108)** All of the things we just said about audio are also true for video.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=111)** You definitely want to use a service instead of hosting the video on your own web server because video files can be quite large.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=118)** And in recent years we've been spoiled with options.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=121)** We have to start with YouTube, which is entirely free to use and upload video.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=126)** When you embed a YouTube video on a page or post, WordPress knows exactly what to do.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=131)** It'll include a thumbnail for the video.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=133)** It's fully responsive, so it'll fit any browser size.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=137)** And only after someone clicks the video will it start loading and playing.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=142)** YouTube is great for most users, but you may also want to check out Vimeo, which is a paid service.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=149)** They have slightly better compression, meaning your video be a bit smaller on their service.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=153)** They also have prestige because it's a paid service.
>
> **[2:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=155)** And they have less strict content moderation, as well as the option to customize the video player itself.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=162)** Video hosting is great, but there is a tiny cost.
>
> **[2:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=165)** Both YouTube and Vimeo don't start loading the video itself right away, which is a great thing, but they do include some JavaScript and CSS files, which are necessary to play the video.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=176)** So even though the video itself isn't loaded, there are some small costs to having a video included on a page.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=182)** And if you have multiple videos, it's best to pick one video service, so you only need to download those CSS and JavaScript files once.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[WordPress]] (2)
> **Env Vars:** css (4)
> **Definitions:** is a  (3)
> **Exercise Files:** download the (1)
> **Analogies:** just like (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Use lazy loading](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=0)** - Most people consider being lazy a vice, something that you have to overcome to achieve your goals.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=6)** But in [[Web Development]], lazy loading can be a very powerful tool.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=11)** According to Mozilla, lazy loading is a strategy to identify resources as nonblocking and load these only when needed.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=19)** It's a way to shorten the length of critical rendering, which translates into a reduced page load.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=25)** Basically, you don't load an asset until you need it.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=29)** That generally means you're going to load all of the assets above the fold, and any static files like images below the fold, you can load as the user starts to scroll down, and you can do this in order.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=43)** There are a couple of advantages to this method.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=45)** The first is you improve the initial page load.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=48)** Because you're loading fewer assets, initially, the total page load time should be much faster.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=54)** And there's a decrease in the resource consumption, because many people don't scroll down either because they bounce or they click to another page, there are many assets that would never be seen and it's inefficient to send them.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=66)** So we're only sending files that people will actually see, which makes sense.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=70)** This reduces the load on our servers and CDNs keeping them faster for the people who do need them.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=77)** There are a few different plugins that can lazy load images for you.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=80)** In our case, I'm going to show you the easiest option to use.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=84)** Jetpack has lazy loading built-in.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=86)** Right now, this is included in the main Jetpack plugin, but I want to give you a heads up that it might be moved into a separate plugin.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=95)** There's a new plugin called Jetpack Boost that includes a lot of performance features.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=101)** The plugin is currently in alpha and not ready for production sites, but pay attention to it because eventually performance features might move here.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=109)** So for right now, let's go ahead and install Jetpack.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=114)** Go to my site, log into the back ends.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=121)** Let's add a new plugin.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=125)** It looks like I already have Jetpack, so let's update it.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=130)** We'll go to the Jetpack settings, click on the performance tab, and turn on lazy loading for images.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=144)** And if you haven't already set up a CDN, you can do that here.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=147)** But for right now lazy loading images is on.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=150)** Let's go ahead and run a speed test.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=153)** I'll copy the URL.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=160)** And let's analyze it.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=167)** Here's the performance test before lazy loading.
>
> **[2:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=169)** I got a B, 91 on performance, Largest Contentful Paint in 1.5 seconds, and fully loaded in 4.7 seconds.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=179)** And it looks like our performance has gone up quite a bit.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=182)** Largest Contentful Paint dropped by 0.4 seconds, and fully loaded time down to 4.1 seconds.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=189)** And if we scroll down, we can see we've loaded 1.01 megabytes of images.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=198)** And after lazy loading, we're only loading 892 kilobytes of images.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=203)** So we saved a 100 kilobytes just by loading those images only when users scroll down.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=209)** As you can see, lazy loading can give you a pretty impressive speed boost for just a couple of clicks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Development]] (1)
> **UI Navigation:** scroll down (4), go to (2), click on (1)
> **Versions:** 1.5 (1), 4.7 (1), 0.4 (1), 4.1 (1), 1.01 (1)
> **Env Vars:** cdn (1), url (1)
> **Prerequisites:** install (1), set up (1)
> **Definitions:** is a  (1)
> **Warnings:** heads up (1)
> **Speakers:** - most (1)


### 4. Plugins and Themes

[↑ Back to Table of Contents](#table-of-contents)

#### [Your theme matters](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=0)** - [Presenter] In the [[WordPress]] world it's common to hear that your theme should control the look and feel of your site and plugins should control the functionality.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=9)** That's always been a best practice in WordPress but it's even more important when you start considering speed.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=14)** You really want to make sure that your theme is doing as little as possible outside of the look and feel.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=20)** With WordPress, you must use a theme and then you can add plugins on top of that.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=27)** So if you have a theme that's really slow, no amount of plugins will be able to speed up your site.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=32)** WordPress with a theme is a baseline which you can't get away from.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=37)** When you start considering themes, you want to consider the number of files, it has to process as well as any assets that the theme has to load.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=45)** Some themes have a lot of template parts with conditional logic that WordPress has to process and other themes have images or large style sheets that they automatically include.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=55)** A very rough way to understand how much your theme is adding is to compare the total size of the theme against other themes.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=63)** I downloaded some of the most common themes and you can see that some of them are around one megabyte and some of them almost hit four megabytes.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=71)** So there's a lot of variation with themes.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=74)** The easiest way to discover which theme works best for your site is to try out a few different themes.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=80)** Since WordPress has such a clear separation between content and layout, it'll only take you a few minutes to test each theme.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=87)** I'm going to go to my site, go to appearance and themes.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=92)** I've been using Astra for over a year which is really fast but we're going to test a few others just to make sure.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=98)** Let's start with OceanWP.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=101)** But before we get going, we're going to do a speed test.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=105)** Paste in my URL.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=108)** Let's analyze the site.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=111)** The largest Contentful paint is 1.8 seconds.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=114)** Fully loaded is 3.9 seconds.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=118)** If we go to the Waterfall, we can see 56 requests, downloading 1.8 megabytes.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=125)** So this is our baseline.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=127)** Let's go back to our site, will activate OceanWP
>
> **[2:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=136)** and let's retest the same site.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=144)** Our largest Contentful paint is 1.2 seconds that's pretty darn good.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=150)** Fully loaded is 4.7 seconds.
>
> **[2:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=154)** And if we go to the waterfall, we can see 89 requests downloading two megabytes.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=162)** Besides the largest Contentful paint, this theme loads a little bit slower.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=166)** Let's test another one.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=168)** Let's go ahead and test storefront.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=170)** So I'll activate it and retest.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=177)** Largest Contentful paint is two seconds.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=180)** Fully loaded is 3.7 seconds.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=185)** And if you go to the Waterfall 66 requests and two megabytes.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=190)** Let's task one more and then we'll evaluate.
>
> **[3:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=196)** I'll activate generate press.
>
> **[3:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=200)** Back to GT metrics and give it a test.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=206)** Largest contentful paint is 1.1 second, fully loaded 3.4 seconds and 54 requests downloading 1.8 megabytes.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=218)** Based on the speed test we just performed, I put all of the data into a table.
>
> **[3:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=223)** Based on this data, I'm going to be switching to the generate press theme.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=227)** It has the lowest first Contentful paint, the lowest fully loaded time as well as the fewest number of requests and it's tied for downloading the least amount of data.
>
> **[3:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=236)** So this is the theme I'm going to use.
>
> **[3:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=239)** If you're looking for really fast themes, do a little research and you'll find articles like these that help you decide on the top two or three themes then do your own testing.
>
> **[4:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=249)** Literally, activate each theme.
>
> **[4:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=251)** Spend a minute or two customizing them and then send it through the speed test.
>
> **[4:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=255)** And if you want really accurate results, you can do multiple speed tests and use the best numbers.
>
> **[4:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=260)** Since there's always a little variation with tests.
>
> **[4:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=263)** Your theme is the baseline for your entire site.
>
> **[4:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=266)** So it's worth spending the time finding a fast theme that works for your industry.
>
> **[4:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=270)** If you find the perfect theme and it's a little slower than the fastest theme that's probably fine because you want to balance the look and feel of your site with the experience of a fast website.
>
> **[4:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=281)** But do make sure you aren't installing one of those themes that adds three seconds to your load time.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=286)** This is one of those situations where it's more about not picking the wrong theme than about picking the perfect theme.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (6)
> **Versions:** 1.8 (3), 3.9 (1), 1.2 (1), 4.7 (1), 3.7 (1)
> **CLI Commands:** make (3), find (2)
> **UI Navigation:** go to (5)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)

#### [Plugins: Quality over quantity](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=0)** - [Instructor] When I worked at Nexus we had a 15 day performance challenge.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=4)** Where we take your site, optimize it for you on Nexus servers and then show you the results.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=11)** One of the surprising things we found was the number of plugins that did very similar things.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=16)** For example, we'd see contact form seven, gravity [[Forms]] and ninja forms all on the same site.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=23)** Or we'd see multiple SEO plugins.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=26)** Or probably the worst example is multiple caching plugins which is sort of like zipping up an already zipped up file.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=34)** And the reason this happens is because websites are always changing.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=37)** They're always being edited, updated and improved.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=40)** So even if you launch a website with one contact form plugin eventually someone might add a second one to handle an edge case.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=47)** Or they just weren't aware that there was a plugin that could handle that functionality that was already installed.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=53)** The first thing you should do is remove any plugins with duplicate functionality.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=57)** In addition to making it easier to manage all of your forms, it also reduces the number of files that a user has to download.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=64)** The next thing you should do is remove any plugins that are disabled.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=67)** They likely aren't slowing down your site, but it's a good practice to remove unused plugins and they'll give you a little bit more space on your web server.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=75)** And if you have any plugins that aren't updated, update them immediately.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=79)** It's good for security and oftentimes plugins will have large updates focused on speed and performance.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=84)** So you could be missing out on a speed boost just by keeping things up to date.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=89)** We're going to talk briefly about finding high-quality plugins.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=92)** Because if you find a high quality plugin, it's likely going to be efficient and speedy.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=97)** And when you're on [[[WordPress]].org](https://wordpress.org), you want to look for high star ratings, lots of ratings and responses on the support forum.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=104)** Just doing this little bit of research and using only four star and above plugins or four and a half star and above plugins that have good reviews and good support will very likely mean that they're efficient and fast.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=116)** Now let's look for qualities that you want to see in a plugin.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=120)** You want to make sure that plugins only load scripts and styles on the page where they're active.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=125)** So if you have a contact form and it's only visible on the contact page, make sure that the scripts and styles only load on that page.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=133)** If you're using a plugin that limits where there assets are loaded, even if they add let's say a half a second to your load time.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=140)** Which is a lot for one plugin.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=142)** If your site is generally fast and a contact page is a little slower, that's okay.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=148)** There are some plugins that do need to load on every page.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=151)** As an example, [[WooCommerce]] loads the Cart [[JavaScript]] files on every page.
>
> **[2:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=156)** So what you can do is look for plugins or techniques which restrict what pages these scripts and styles will load.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=164)** There's already a plugin for WooCommerce called disabled Cart Fragments that you could install and this removes some of those performance issues.
>
> **[2:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=173)** There's also plugins like perfmatters which is a general performance plugin.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=177)** Which includes the functionality above.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=179)** We'll configure this in if future video.
>
> **[3:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=184)** If you're okay, spending a few hours digging into the details with your plugins, you can watch for slow front-tend POST admin-[[AJAX]].[[PHP]] requests.
>
> **[3:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=193)** You can find those admin-ajax.PHP requests by checking on the waterfall on your site using GTmetrix or some other speed testing tool.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=203)** I took a speed test right before this video.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=205)** And if we scroll down to the waterfall, you can see all sorts of different requests.
>
> **[3:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=211)** Let's look for one that's a little long.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=215)** This one seems a little bit long.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=218)** And we can see this is the WooCommerce-ajax get refreshed fragments.
>
> **[3:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=224)** So this is WooCommerce trying to get Cart details.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=227)** And it's taking almost a full second here, 955 milliseconds.
>
> **[3:53](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=233)** Because this JavaScript is non-blocking, it won't affect things like largest Contentful paint, but it will affect the total time it takes to load a webpage.
>
> **[4:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=243)** So, I'll go to my site.
>
> **[4:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=246)** I've already installed the plugin, disabled Cart Fragments.
>
> **[4:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=249)** Let's activate it.
>
> **[4:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=252)** I'll come back to GTmetrix.
>
> **[4:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=254)** And we're going to try to see if we can remove this request.
>
> **[4:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=262)** Let's scroll down and we'll go to the waterfall.
>
> **[4:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=266)** If we search for the post admin-ajax request, we won't find it.
>
> **[4:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=271)** The file was removed by the third-party plugin because it wasn't needed on this page.
>
> **[4:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=276)** We saved an unnecessary file from loading.
>
> **[4:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=279)** It reduces the worker server is doing and it should also speed up the fully loaded time for our site.
>
> **[4:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=286)** One note for viewers who want to test this themselves, I did have some problems with caching with this particular plugin with my host.
>
> **[4:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=295)** So if you don't see any changes, clear your cache or wait a day or two and then test again.
>
> **[5:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=301)** This is another reason why you should setup weekly speed tests for your sites.
>
> **[5:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=305)** So if something is cached or doesn't work immediately you will still see the benefit or the slowdown a week later at the next speed test.
>
> **[5:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=314)** If you do like getting into the nitty-gritty and optimizing individual files, you can do further digging with Query Monitor or New Relic.
>
> **[5:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=324)** To recap.
>
> **[5:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=325)** Don't use plugins which solve the same problem.
>
> **[5:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=328)** We see this all the time.
>
> **[5:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=330)** Go ahead and delete unused plugins and update your existing plugins regularly.
>
> **[5:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=335)** Try to find high quality plugins that only load assets on the pages they're used.
>
> **[5:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=340)** For plugins that do need to load assets on each page, you can try to find plugins or settings that adjust this functionality.
>
> **[5:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=348)** You can also use general performance plugins which can limit other plugins or you can custom code your own solutions.
>
> **[5:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=355)** And the best way to find high-quality plugins is to use the reviews and star ratings on [wordpress.org](https://wordpress.org).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (4), [[AJAX]] (4), [[Forms]] (3), [[WordPress]] (2), [[JavaScript]] (2)
> **CLI Commands:** find (6), make (2), php (2)
> **Env Vars:** php (2), seo (1), post (1)
> **UI Navigation:** scroll down (2), go to (2)
> **Definitions:** is a  (3)
> **Prerequisites:** install (1), configure (1), setup (1)
> **File Paths:** admin-ajax.php (2)
> **URLs:** [wordpress.org](https://wordpress.org) (2)

#### [Concatenate and minify scripts and styles](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=0)** - [Instructor] Years ago, when I started writing CSS, I used to have a lot of small files to help keep things organized.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=7)** So I'd have a header.css for my header, a footer dot.css for the footer, sidebar for the sidebar and special pages like the contact form page would have their own CSS file.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=18)** And while this is good for my own organization, it's not great for speed.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=22)** I like to think of the process of [[Web Servers]], sending data to browsers, like a very fast version of our mail system.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=29)** When I want you to send me some information, is it going to be easier and faster to send 50 separate small packages, or one large package?
>
> **[0:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=40)** When you send files between a browser and a web server, there's overhead.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=43)** You have to create a TCP connection, which takes a little bit of time.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=47)** And even though it's a very tiny amount of time, you want to make as few new connections as possible, and send larger files.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=55)** So on the theme side, you want to combine all of your CSS files into one larger CSS file, and combine all of your [[JavaScript]] files into one larger JavaScript file.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=65)** This is called concatenation.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=67)** But your theme is only the start.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=69)** Most plugins have JavaScript and CSS files.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=73)** So if you have your theme and 20 plugins, you might have 16 CSS and 24 JavaScript files to download.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=80)** We can concatenate those two with plugins.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=83)** So we'll go to my site. I'll go to "add plugins".
>
> **[1:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=87)** I'll look for "auto optimize".
>
> **[1:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=91)** I'll go ahead and install it, and activate it.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=97)** And let's go to settings, auto optimize.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=104)** We'll go ahead and turn on "optimize JavaScript code".
>
> **[1:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=108)** You can see here, we're aggregating or concatenating all the JavaScript files.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=114)** Let's go down to "optimize CSS code", and we'll make sure the same option is checked.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=119)** When you check "optimize CSS code" and "optimize JavaScript code", it also minifies your scripts and styles.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=126)** This removes a lot of the white space and formatting which computers don't need.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=130)** So in addition to combining files so you have fewer requests, your files will also be a little bit smaller, which makes the page faster.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=139)** And let's save changes and empty cache.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=144)** Now I've taken a speed test right before I started this video, and we have some pretty good numbers.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=149)** And if we scroll down, we can see there's 54 requests, downloading 1.8 megabytes.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=157)** Let's go ahead and do another speed test.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=159)** I'll open this in a new tab.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=162)** I'll copy the URL.
>
> **[2:50](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=170)** And let's click "analyze".
>
> **[2:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=175)** We got a slightly lower score. Let's scroll down.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=180)** You can see we're sending 0.01, because files have been minified, which we'll talk about in a moment.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=187)** But more importantly, instead of 54 requests, we've now combined them into 35 requests.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=194)** And this should help optimize your site.
>
> **[3:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=197)** I do want to put up a warning.
>
> **[3:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=199)** I love concatenating files, but it is something that can easily break.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=203)** And here's why.
>
> **[3:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=204)** You will likely build your perfect site, optimize it, including concatenating files.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=209)** And then a month later, you have to add a new plugin, or delete a new plugin.
>
> **[3:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=213)** And either the new files aren't concatenated, or you delete a plugin, and in the concatenated CSS and JavaScript files, those old plugin files that were deleted are still in there.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=222)** So you're making the file larger unnecessarily.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=225)** We haven't covered caching yet, but if something breaks on your website relating to speed and performance, it's very likely either caching or concatenation.
>
> **[3:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=235)** Concatenation is a fragile process that can easily break.
>
> **[3:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=238)** So only concatenate files if you're willing to spend the time debugging your site if something goes wrong.
>
> **[4:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=244)** For my personal hobby sites that don't make money, I don't concatenate files.
>
> **[4:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=248)** The small speed boost isn't worth my time on a site that doesn't make me money.
>
> **[4:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=253)** And if you want to concatenate files, there are extra options on the auto optimized settings page.
>
> **[4:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=258)** You can exclude specific scripts and styles from concatenation.
>
> **[4:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=262)** You can load JavaScript files early.
>
> **[4:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=264)** You can inline CSS styles, and a lot more.
>
> **[4:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=268)** Auto optimize is an incredibly powerful plugin.
>
> **[4:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=271)** But you want to research any of these options before turning them on, to make sure they work for your site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (9), [[Web Servers]] (1)
> **Env Vars:** css (10), tcp (1), url (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (3), scroll down (2)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **File Paths:** header.css (1), dot.css (1)
> **Versions:** 1.8 (1), 0.01 (1)
> **Warnings:** warning (1)


### 5. Database

[↑ Back to Table of Contents](#table-of-contents)

#### [WordPress database structure](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=0)** - [Instructor] We've talked a lot about processing [[PHP]] files and how to make it easier and faster to load assets, but we haven't really talked about the database where the content of your site comes from.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=11)** Let's dive in to how the [[WordPress]] database works because the more you know, the more you can improve it.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=18)** WordPress uses a relational database.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=21)** If you don't understand that term, no worries.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=24)** If you want to dive deep into how [[Databases]] work, we have [[[[Programming Foundations]] Databases]] in the library.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=31)** And if not, we'll cover it at a high level right now.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=35)** First, let's look at the database's main tables.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=38)** We'll use the official WordPress documentation so you can dig in to the many links and related pages if you want to further explore these concepts.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=46)** The main tables for WordPress are wp_posts and wp_postmeta.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=54)** When you save a page or post, WordPress saves that information in the database into these two tables.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=61)** In wp_posts, you'll see information like the title of the post, the content of the post, the date, the status, and the excerpt, and any extra information goes into the wp_postmeta table, so that might be SEO keywords and descriptions from a plugin or extra image information or the page layout from your theme or oEmbed information, as well as breadcrumb information.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=86)** Really, any extra information goes into this table.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=90)** If you've never designed a database before, you might not realize how the structure makes it easier for plugins to add their own data, but might not be the best for speed.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=99)** So when WordPress saves information this way, a plugin doesn't have to create a new database table to store the information.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=105)** It can store everything in this separate postmeta table.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=109)** WordPress created a very flexible database.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=112)** That's why there are thousands and thousands of free plugins.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=116)** Unfortunately, WordPress' flexible database structure is not efficient for speed.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=121)** As an example, let's go to my site.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=124)** I'm in my hosting account right now and I'll go to [[MySQL]] and launch phpMyAdmin which lets me browse my database.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=133)** Depending on what hose you use, you'll see an interface similar to this or maybe something entirely different.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=139)** We can see over on the left all of the tables for my WordPress database.
>
> **[2:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=145)** And we can see posts as well as postmeta.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=148)** Let's take a look at postmeta so I'll click on it and you can see all the different postmeta information and what posts they're associated with.
>
> **[2:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=156)** So as an example, all of this postmeta information is associated with post ID 11.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=163)** As an example, let's take a look at the postmeta information for the homepage of my site.
>
> **[2:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=169)** I'll go to search and then down by post ID, I happen to know that the post ID is 20, so I'll type in 20 and this will find all the postmeta information related to that post.
>
> **[3:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=182)** As you can see here, there are 28 pieces of information related to my homepage.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=187)** When WordPress pulls this information out of the database, it takes more time to pull out 28 separate rows of data instead of one larger row of data.
>
> **[3:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=197)** WordPress also cramps a ton of information into the wp_posts and wp_postmeta tables.
>
> **[3:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=203)** Even entire [[WooCommerce]] orders are stored in these tables.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=207)** I've loaded the live version of my database and here's an actual real life order and this real life order has 62 pieces of postmeta information.
>
> **[3:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=217)** There are ways to streamline your WordPress database.
>
> **[3:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=220)** I'll show you how to limit the data that goes into the database and how to optimize its structure.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=225)** But for now, you've seen how the WordPress' flexible database is amazing for developers, but not so great for maximizing speed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (13), [[Databases]] (2), [[PHP]] (1), [[Programming Foundations]] (1), [[MySQL]] (1)
> **Code Identifiers:** wp_posts (3), wp_postmeta (3), oembed (1), phpmyadmin (1)
> **CLI Commands:** php (1), make (1), mysql (1), find (1)
> **UI Navigation:** go to (3), click on (1)
> **Env Vars:** php (1), seo (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Custom database tables](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=0)** - The very flexible database structure [[WordPress]] creates, is why we have so many plugins, but as previously mentioned, it's not great for optimization.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=9)** In the previous lesson, I showed an order in my own database that has 62 pieces of postmeta information.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=16)** If I get 10 orders a day for a whole year, I'll have 226,300 rows of postmeta information.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=24)** That is a lot of data.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=26)** And over the course of a couple months or years, it might slow down your site.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=30)** The easiest solution is to use plugins that have their own database tables.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=34)** A lot of contact form plugins already do this.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=37)** They store their contact form submissions into their own tables.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=41)** I like to think of database tables as file cabinets.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=45)** By having a few file cabinets, it's much easier to find information than if there's one master cabinet.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=51)** For specific plugins, you might find extra plugins that help with optimization.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=57)** This plugin, for example, created by LiquidWeb, will hopefully be merged into [[WooCommerce]] Core one day.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=63)** And it creates a separate table for the WooCommerce orders.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=67)** It's not just a separate table, but it's a table optimized for orders.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=71)** So you can save more data per entry.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=73)** That means it's much easier for your web server to save new orders as well as to pull existing order data out of the database.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=81)** This project is in alpha mode.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=83)** It's not meant for live sites.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=85)** It's used on some live sites, but very few.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=88)** If you have a WooCommerce store, that's a bit slow, run this on a test site to see if it even helps speed up your site.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=96)** It might not be the right solution until it gets merged into WooCommerce Core.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=101)** I don't know what the biggest slowdowns are for your site, because every site has different critical plugins.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=107)** But if you have a feature that you use every day, like a contact form, a membership plugin, or a calendar, make sure that you reach out to the developer, and ask them how much data is added to the database, and if there are any ways to optimize the database.
>
> **[2:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=122)** And if they have a separate database table, you're probably fine.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=125)** But if they use custom post types, as WooCommerce does, then they'll likely add all their information to the main WP posts and WP postmeta table.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=135)** And there might be ways to optimize it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (5), [[WordPress]] (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### [Limit post revisions](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=0)** - [Instructor] In today's world, saving is such a no-brainer feature that we don't give it much thought.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=5)** But the way [[WordPress]] saves posts means that each time you press the Save button, it saves a copy of your post.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=12)** So if you're like me and you press the Save button often, you can have dozens of revisions for each published page or post on your site.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=20)** If that's the case, it's worth pruning from time to time to keep the database humming along.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=26)** Let's take a look at my database.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=28)** I'll go back into my hosting environment, go down to [[MySQL]], which will open up phpMyAdmin.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=39)** I'll open up the database.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=41)** I'll scroll down to WP_posts.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=44)** I'll search this table by clicking Search.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=50)** I'm going to scroll down to post_type and then type in revision and click Go.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=59)** And we can see in my test site that I have 13 revisions.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=63)** For most hosting environments this is negligible, but if you see if you hundred or a few thousand, then it might be worth deleting those revisions.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=73)** And we can do that with a little database magic.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=76)** I'll go to [[SQL]] and we're going to type in, DELETE from the name of the table, WP_posts, where post_type is equal to revision.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=93)** With this one SQL command we can delete all the revisions in the database.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=97)** I'm a huge fan of SQL commands because they're very powerful.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=101)** But anytime you do something in the database, make sure to create a backup first.
>
> **[1:46](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=106)** One wrong character and we could inadvertently delete essential data.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=111)** So make sure you make a backup before executing any SQL statements.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=115)** Let's go ahead and click Go.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=119)** And it deleted 13 rows.
>
> **[2:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=122)** If you have a few hundred or thousand revisions, deleting them can be useful, but how can we prevent a ton of revisions from filling up our database in the first place?
>
> **[2:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=133)** There are a number of plugins that either turn off revisions or limit how many your site will save.
>
> **[2:18](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=138)** I'm a big fan of limiting revisions.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=141)** That way, if you accidentally save something, you can recover an older version.
>
> **[2:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=145)** But you're not saving hundreds of revisions for each post.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=149)** Let's install and configure this plugin.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=152)** But before we do check and make sure your host hasn't already installed something like this.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=158)** Some managed hosts, like WP Engine, already have plugins that limit post revisions.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=163)** And since we don't need two plugins doing the exact same job, do a quick scan of your plugins before you install it.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=171)** I'll go to my site.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=174)** We'll go down to Plugins and click Add New.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=180)** Let's type in WP revisions control and install it and activate it.
>
> **[3:12](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=192)** And now under Settings, Writing, we can control the number of revisions for posts, pages, and custom CSS, as well as any other custom post_types you have installed.
>
> **[3:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=207)** So for Pages, let's say 3 revisions.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=209)** And for blog Posts, let's say 5.
>
> **[3:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=212)** Click Save Changes.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=214)** We've configured our site to limit how much data we save to the database.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=218)** We're still saving some data, but it's not going to get out of control.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=222)** That's a great place to be for a site administrator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (4), [[WordPress]] (1), [[MySQL]] (1)
> **Env Vars:** sql (4), delete (1), css (1)
> **CLI Commands:** make (4), mysql (1)
> **Code Identifiers:** post_type (2), mysql (1), phpmyadmin (1), post_types (1)
> **UI Navigation:** scroll down (2), go to (2)
> **Prerequisites:** install (3), configure (1)
> **API Endpoints:** delete  (1)
> **Definitions:** means that (1)


### 6. Caching

[↑ Back to Table of Contents](#table-of-contents)

#### [What is caching?](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=0)** - [Instructor] In this course, we've talked about caching a few times, so let's do a quick review of exactly how it works.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=7)** A user will start by visiting your site.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=10)** [[WordPress]] will then process [[PHP]] and send requests to the database.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=15)** Once WordPress gets that data, it finishes processing the PHP files and creates an [[HTML]] page.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=22)** Then that HTML page is saved into the server cache and returned to the user.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=27)** Voila, the user sees a webpage.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=30)** Then when the next user wants to visit the same page, WordPress can skip the whole PHP and database process, since the HTML page is already stored in the cache.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=41)** Boom, the web page is already ready to go.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=45)** Caching is one of the most popular solutions for speeding up your site for good reason.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=50)** You can drastically improve your website's speed with easy to configure caching plugins, or your managed WordPress host might have it built in.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=60)** But caching is only one technique.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=62)** It's a mistake to stop there.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=64)** If you want a site that is truly optimized for speed, it's better to take a multi-faceted approach.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=70)** I recommend you develop a toolbox of strategies to speed up your website so you have ways to fix any issues that are slowing you down.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=79)** The problem with caching is it makes every other issue harder to diagnose.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=83)** Not only do you have to disable caching to try to discover the problem, you also have to make sure your solution still works once the cache is re-enabled.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=91)** It's incredibly frustrating to fix a problem only to find that problem still persists in the cache.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=99)** Caching is an incredibly powerful tool, but my advice is to save it for last.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=104)** First, use all the previous strategies I outlined in this course to speed up your site.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=109)** Then if your site is still loading slowly, move on to caching.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=114)** Caching is simple to set up initially, but it requires constant tweaking and testing, especially after you add new posts, update a file, or upload a new image.
>
> **[2:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=125)** Let's talk about the different types of caching for your server.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=128)** There's page caching, database query caching, and object-based caching.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=133)** Page caching is what it described at the beginning of this lesson.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=137)** And some managed hosts like WP Engine will automatically handle page caching for you.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=142)** It's one of the most effective [[Forms]] of caching because it saves an entire page.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=147)** If you have a static site that doesn't change often, page caching is a fantastic tool.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=152)** Database caching is helpful for sites with large [[Databases]] or sites which rely heavily on [[Database Queries]].
>
> **[2:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=159)** Instead of saving an entire page, you'll save the result of a few queries.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=163)** WordPress still has to process PHP files, but the data is already saved.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=168)** Object caching doesn't really apply to end users, but if you're a developer it's helpful to know that WordPress is object caching functionality is baked in.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=177)** When you're writing code, you can cache objects so other PHP files can interact with them.
>
> **[3:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=183)** The caching we just covered relates to servers because the website administrator sets it up for their users on the server.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=189)** There is also local caching which is automatically handled by browsers.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=194)** When you visit a website, the browser downloads CSS, [[JavaScript]], images, and other static files.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=201)** It saves these to your local browser cache.
>
> **[3:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=204)** So if you visit the same site five minutes or five days later, the files are already saved to your machine, and that website will load much faster.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=214)** There isn't much to do here since browser caching is automatic, but it's useful to remember that files are being cached all the time, and technology is constantly trying to help websites load faster.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=225)** Next up, let's configure a caching plugin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (6), [[PHP]] (5), [[HTML]] (3), [[Forms]] (1), [[Databases]] (1)
> **Env Vars:** php (5), html (3), css (1)
> **CLI Commands:** php (5), make (1), find (1)
> **Prerequisites:** configure (2), set up (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configuring caching plugins](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=0)** - [Instructor] There are a lot of caching plugins for [[WordPress]], and some of them have been around for many years and have a pretty good reputation, like W3 Total Cache or WP Super Cache.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=10)** And most of these can be found for free [wordpress.org](https://wordpress.org).
>
> **[0:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=14)** For this course, I want to show a premium option called WP Rocket that costs about $50 a year for a single site.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=22)** To give you an idea of what a caching plugin can do, here are some of the features in WP Rocket.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=29)** Page caching is what we talked about in a previous lesson.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=32)** GZIP compression so you can make files smaller for transit.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=36)** Cache preloading so you don't need that first person to go through an uncached page.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=41)** eCommerce optimization so it doesn't break the cart or a checkout.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=45)** And a lot more.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=47)** And many other caching plugins have similar features, so there's a lot of really useful optimizations in these plugins.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=55)** I've already bought this plugin and uploaded it to my site.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=59)** Let's go ahead and activate the plugin.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=61)** One of the best things about this plugin is that it makes really smart default decisions.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=67)** Just turning on the plugin should speed up your site.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=73)** Let's take a look at these settings.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=75)** We can see they already preloaded some pages for us.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=80)** And here we can see the different options.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=84)** There's the dashboard with the important "Clear Cache" button, which we'll talk about later.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=90)** Different caching options, file optimization, which we've done in previous lessons.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=95)** Lazy loading, which we've done in previous lessons.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=99)** As well as database, CDN, Heartbeat, and a whole lot more.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=105)** Without tweaking any of the settings, let's go ahead and do a speed test.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=110)** Here's the speed test I took right before this video.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=114)** Largest Contentful Paint in about two seconds.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=120)** Total page size: 1.8 megabytes, and 35 different requests.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=127)** And let's go ahead and test it now that we have WP Rocket enabled.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=136)** As you can see, caching plugins like WP Rocket can give you stellar results.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=142)** This whole course, we've been hovering between an A and a B grade, and for the first time, we hit a 100% performance score.
>
> **[2:29](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=149)** And our Largest Contentful Paint dropped from two seconds down to a little bit less than 0.7 seconds.
>
> **[2:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=158)** Our fully loaded time is 3.2 seconds, our total page size is about the same, and our total page requests dropped a little bit.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=167)** So if you haven't optimized your website as much as you'd like, and you've already followed the other pieces of advice in this course, now is the time for you to install a caching plugin.
>
> **[2:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=176)** You can choose from one of the many free plugins or use the paid plugin, which has really great defaults.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2)
> **Versions:** 1.8 (1), 0.7 (1), 3.2 (1)
> **Env Vars:** gzip (1), cdn (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ecommerce (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Cross-References:** we talked about (1)
> **Prerequisites:** install (1)

#### [Cache busting](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=0)** - [Instructor] If you use caching to speed up your site, you have to know how to disable, clear or bust the cache.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=7)** Let me give you an example.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=8)** You can upload an image today, and at three months, you might want to update that image.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=13)** Depending on how you update that image in [[WordPress]], along with your settings, determines who will see that image.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=20)** If you aggressively cache your site, you could be in a situation where you see the new image and your users see the old image.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=27)** I actually had this experience while making this course.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=31)** I over-optimized these two images and they looked a little blurry, so I re-optimized the image.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=38)** But even after it was re-optimized, I couldn't see that new image because it was cached somewhere, and I had to troubleshoot the issue to clear the cache so I could see the updated image.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=49)** When this happens, there are a few steps that you can take.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=52)** Start by emptying or purging any cache system.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=56)** In the last video, we saw a clear cache button in the WP Rocket settings page.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=61)** Your host may also have caching and may have a clear cache button, as well as your CDN.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=67)** If this doesn't work, start disabling your plugins, specifically with the caching plugin first, and then disable your CDN, and if neither of those work, it's time to look into versioning your files.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=79)** This tricks the browser into thinking that it's a new file so it downloads it.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=84)** Finally, clear your own browser cache.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=87)** This is the last step because it only solves the issue for your browser.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=91)** If anyone else has this issue, it won't solve it for them and they'll see old content.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=97)** If you're a developer, I've always been a fan of versioning your files, and there's a few different ways to do this.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=102)** You conversion the file name, something like style.v2.css or style-v2.css, you conversion the file, path /v2/your file name, or you can add it as a query string, so style.css?v=2.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=123)** Because the file name or path look different, your browser thinks it's a new file and downloads it.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=129)** This is a fantastic way to make sure that no one sees old content.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=133)** Many CDNs and cache systems will work with any of these versioning formats, but sometimes, you will run into issues with query strings, so keep an eye out for that, and this will work for any assets, images, [[JavaScript]] or CSS files.
>
> **[2:28](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=148)** Using caching can really speed up a site, but it can also conceal problems.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=152)** That's why you want to get really good at busting your own cache to make sure that all of your visitors are experiencing the latest version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1), [[JavaScript]] (1)
> **File Paths:** style.v2.css (1), style-v2.css (1), style.css (1)
> **Env Vars:** cdn (2), css (1)
> **CLI Commands:** make (2)
> **API Endpoints:** /v2/your (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=0)** - [Patrick] Speeding up your website and keeping it fast creates the ideal experience for users.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=5)** The faster the site, the more likely people are going to convert and get through your checkout or submit a form, and the better you'll do in search engine result pages.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=14)** We covered some basic strategies in this course.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=17)** Keep in mind, the larger and more complex the site, the more time you'll have to spend optimizing.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=23)** And remember that each website is different.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=26)** Some of the strategies we took a look at in this course might not work at all for your site.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=30)** Just one strategy might be responsible for 90% of the speed gains.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=35)** Your mileage will vary.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=38)** If you want to get really good at running a fast website, follow the best practices when it comes to building [[WordPress]] sites, including customizing your theme and coding plug-ins.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=49)** And you can do that with a ton of great courses in the library.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=52)** Follow managed WordPress hosts who tend to care a lot about speed.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=57)** And follow plugins that also focus on speed, like caching plugins.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=61)** They often have great advice outside of caching to help you speed up your site.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=66)** If you're a developer, you can also watch Learning Gatsby in the library.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=71)** It's slowly becoming the go-to strategy for developers to speed up the front end of their site.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=76)** Finally, keep experimenting and learning because each website is different and you have to learn what works for your site.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=85)** I write about WordPress, including speeding up your site on my programming blog [SpeakingInBytes.com](https://SpeakingInBytes.com).
>
> **[1:31](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=91)** Optimizing your site can be frustrating and overwhelming at first.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=95)** But once you learn what strategies work for you and your sites, it becomes a really enjoyable challenge.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=101)** So get out there and speed up your sites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3)
> **URLs:** [speakinginbytes.com](https://speakinginbytes.com) (1)
> **Cross-References:** we covered (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [patrick] (1)


## Instructor

- [[Patrick Rauland]]

## Skills Covered

- WordPress

## Path Context

### In [[Build Your WordPress Ecommerce Skills]]
← [[WordPress- SEO]] | **5 of 6** | [[Building a WordPress Membership Site with Ecommerce]] →

## Appears In

- [[Build Your WordPress Ecommerce Skills]]

## Related Courses

_Courses sharing skills:_

- [[Troubleshoot and Repair Your WordPress Website]] — WordPress
- [[WordPress- Accessibility]] — WordPress
- [[WordPress- SEO]] — WordPress
- [[Wordpress Ecommerce]] — WordPress
- [[WordPress- REST API]] — WordPress

---

[↑ Back to top](#)