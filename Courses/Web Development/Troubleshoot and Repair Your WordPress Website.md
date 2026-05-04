---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: troubleshoot-and-repair-your-wordpress-website
url: "https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website"
duration_minutes: 75
duration: 1h 15m
level: Intermediate
updated: 4/21/2022
learners: 5709
skills:
  - WordPress
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHkdEfwub_Faw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1650382200989?e=2147483647&amp;v=beta&amp;t=r2T6KuLmFnaau9HXf3XcDN64iPOgpfR62imJNwjfbj8"
linkedin_topic: Web Development
learning_paths:
  - '[Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)'
prev_courses:
  - '[WordPress- Staging a Site](WordPress-%20Staging%20a%20Site.md)'
path_nav: '[{"path":"Getting Started with WordPress","position":10,"total":10,"prev":"WordPress- Staging a Site","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/wordpress
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Troubleshoot%20and%20Repair%20Your%20WordPress%20Website.md)

![Troubleshoot and Repair Your WordPress Website](https://media.licdn.com/dms/image/v2/C560DAQHkdEfwub_Faw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1650382200989?e=2147483647&amp;v=beta&amp;t=r2T6KuLmFnaau9HXf3XcDN64iPOgpfR62imJNwjfbj8)

# Troubleshoot and Repair Your WordPress Website

> WordPress is an incredibly powerful and convenient platform CMS for anything you want, from a blog to a full-on ecommerce shop. But owning your platform also comes with a few drawbacks—mainly, if something breaks, you're on the hook to find a fix yourself. In this course, WordPress expert Joe Casabona shares his repair manual for addressing problems with your site. He starts with preventative meas

> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website) | 1h 15m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [The pros and cons of running a WordPress site](#the-pros-and-cons-of-running-a-wordpress-site)
  - [What you should know](#what-you-should-know)
  - [How the course works](#how-the-course-works)
- [**1. Getting Ahead of Problems**](#1-getting-ahead-of-problems) (6 videos)
  - [Preparing your WordPress site for problems](#preparing-your-wordpress-site-for-problems)
  - [Find the right hosting](#find-the-right-hosting)
  - [Backing up your site](#backing-up-your-site)
  - [Securing your site](#securing-your-site)
  - [Automatic updates](#automatic-updates)
  - [Testing your site with a staging server](#testing-your-site-with-a-staging-server)
- [**2. Common Troubleshooting Steps**](#2-common-troubleshooting-steps) (6 videos)
  - [Disabling plugins to find the problem](#disabling-plugins-to-find-the-problem)
  - [Moving to a default theme](#moving-to-a-default-theme)
  - [How to use recovery mode](#how-to-use-recovery-mode)
  - [Down for everyone, or just me?](#down-for-everyone-or-just-me)
  - [Reverting updates with WP Rollback](#reverting-updates-with-wp-rollback)
  - [Testing with a different WordPress install or server](#testing-with-a-different-wordpress-install-or-server)
- [**3. Common Problems and Solutions**](#3-common-problems-and-solutions) (7 videos)
  - [The dreaded white screen of death](#the-dreaded-white-screen-of-death)
  - [Stuck in maintenance mode](#stuck-in-maintenance-mode)
  - [Issues with file uploads](#issues-with-file-uploads)
  - [Pretty URLs not working properly and other random 404 errors](#pretty-urls-not-working-properly-and-other-random-404-errors)
  - [Using a redirect plugin for actually broken links](#using-a-redirect-plugin-for-actually-broken-links)
  - [Recovering lost changes with Revision History](#recovering-lost-changes-with-revision-history)
  - [Why do blocks keep needing to be recovered?](#why-do-blocks-keep-needing-to-be-recovered)
- [**4. Problems That Require Working with Your Server**](#4-problems-that-require-working-with-your-server) (6 videos)
  - [General web server errors: the 400s](#general-web-server-errors-the-400s)
  - [General web server errors: the 500s](#general-web-server-errors-the-500s)
  - [How to fix the "site insecure" error with an SSL certificate](#how-to-fix-the-site-insecure-error-with-an-ssl-certificate)
  - [How to fix mixed content errors](#how-to-fix-mixed-content-errors)
  - [Error establishing a database connection](#error-establishing-a-database-connection)
  - [Unable to write to a directory, or update themes/plugins](#unable-to-write-to-a-directory-or-update-themesplugins)
- [**5. Advanced Problems**](#5-advanced-problems) (6 videos)
  - [Unable to deliver emails/emails going to spam](#unable-to-deliver-emailsemails-going-to-spam)
  - [General caching issues (types of cache)](#general-caching-issues-types-of-cache)
  - [Cannot modify header error](#cannot-modify-header-error)
  - [Site running out of memory](#site-running-out-of-memory)
  - [Execution limit exceeded](#execution-limit-exceeded)
  - [Using WP-CLI to solve your WordPress problems](#using-wp-cli-to-solve-your-wordpress-problems)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The pros and cons of running a WordPress site](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/the-pros-and-cons-of-running-a-wordpress-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/the-pros-and-cons-of-running-a-wordpress-site?u=76281980&t=0)** - [Joe] [WordPress](../../Skills/Web%20Development/WordPress.md) is an incredibly powerful platform that allows you to turn a simple CMS into anything you want. From a blog to a full on [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) shop. But owning your own platform also comes with a few drawbacks. I like to think of it as renting a home versus buying a home. When you rent, you don't get to customize anything. But when something breaks, the landlord has to fix it. When you own a home, it's yours to do whatever you want with. But if the heater breaks, you need to get a new one or hire a professional. WordPress is a bit the same way. And much like a house, there are a lot of things that can go wrong. Most are things you can fix on your own. So, you can think of this course as the repair manual for your WordPress installation. It will cover the most common issues with WordPress websites and how to fix them. Hi, I'm Joe Casabona, a front-end web developer and educator, who's been using [PHP](../../Skills/Software%20Development/PHP.md) since 2003 and WordPress since 2004. So, join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course, where I will show you some of the most common WordPress problems and how to fix them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (6), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** cms (1), php (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** php (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [joe] (1)

#### [What you should know](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is geared towards [WordPress](../../Skills/Web%20Development/WordPress.md) novices who are trying to troubleshoot and fix their website. That said, there are a few things you should know. First, we're working strictly with self hosted WordPress. That means your WordPress site isn't on [wordpress.com](https://wordpress.com). You've either purchased separate hosting or you've installed it yourself. Second, while we won't be writing a lot of code per se, we will be exploring [PHP](../../Skills/Software%20Development/PHP.md) files and working on the server in later chapters. That means you should also be comfortable with a code editor like VS Code and familiar with FTP. However, this is very much an episodic course not a linear one, which means if you want to skip those videos until later you can. That's the other thing that you should know. This is definitely a resource for knowing what to expect, as well as a manual for when you experience problems in real time. So be sure to bookmark this course for later use as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Env Vars:** php (1), ftp (1)
> **CLI Commands:** php (1)
> **URLs:** [wordpress.com](https://wordpress.com) (1)
> **Tools:** vs code (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [How the course works](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-the-course-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-the-course-works?u=76281980&t=0)** - [Instructor] There are lots of possibilities when it comes to troubleshooting [WordPress](../../Skills/Web%20Development/WordPress.md). So here's a rundown of how we'll tackle the topic. We'll run through several major topics starting with prevention. After all, the best way to fix a problem is by not having it at all. From there, we'll look at common fixes for just about everything. Think of this as the turning it off and then back on again section. After that, each chapter will cover increasingly complex types of problems, from all I see is a white screen, to my site is running out of memory. For most solutions, you won't need to know code or even leave the WordPress dashboard, but for some, you may need to access the server and server files through FTP. If you need to brush up on that, check out the Learning SFTP course in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. All right, now let's get to fixing that WordPress site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** ftp (1), sftp (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Ahead of Problems

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing your WordPress site for problems](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/preparing-your-wordpress-site-for-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/preparing-your-wordpress-site-for-problems?u=76281980&t=0)** - [Instructor] You will invariably run into issues with your site no matter how much you try to prevent it. So before we get into the troubleshooting, let's talk about some of the preventative measures you can take for when trouble strikes. We'll deep dive into these topics in different videos, so you can think of this as a checklist or overview. First, in preparing your site, you want to make sure it's on a good foundation. We won't go over what hosting is good or bad, that's for you to decide, but you will learn what to look for when it comes to good hosting. You also want to make sure you have a backup plan in place. Good backups mean even if your site becomes unfixable, all is not lost. Backing up your files in your database someplace besides your server is a must. Having some security in place will protect your site from bad actors. You want to use best practices when it comes to passwords and site checks as well. And part of good security is automatic updates. These days, updating your themes, plugins, and even [WordPress](../../Skills/Web%20Development/WordPress.md) core automatically is easier than ever. And so is rolling it back if something goes wrong. Of course, you'll want to have a proper environment in place too. You'll want to stand up a staging server to test on. You might also want to have a local site so you can do things just on your computer in a more controlled environment. This will allow you to ensure that any changes you make don't break your site.
>
> **[1:34](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/preparing-your-wordpress-site-for-problems?u=76281980&t=94)** If they do, hold off on those changes or make the fixes, then push them to production. We'll cover most of this in the course, but if you're interested in a more in depth look at all of this, check out my WordPress Workflows course in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [Find the right hosting](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/find-the-right-hosting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/find-the-right-hosting?u=76281980&t=0)** - [Instructor] Ask 10 people, what hosting you should use and you'll get 14 answers, but still, having the good or really the right, hosting will save a lot of headache when it comes to troubleshooting and fixing and even resource allocation. It's also the core of keeping a site running smoothly, nearly everything from backups and security to testing can be handled with the right host. So what do you look for? Well, first, you want to make sure it's [WordPress](../../Skills/Web%20Development/WordPress.md) compatible. And while that feels like a given these days, WordPress does have some requirements. You can find them at [wordpress.org/about/requirements](https://wordpress.org/about/requirements). And here's what they recommend. Note that this may have changed from the time of this recording, but you should have [PHP](../../Skills/Software%20Development/PHP.md) version 7.4 or greater, [MySQL](../../Skills/Software%20Development/MySQL.md) version 5.7 or greater, or MariaDB version 10.2 or greater, and you should have HTTPS support. They also recommend Apache or NGINX, which is what most hosts offer. They even provide a nifty email towards the bottom of the page that you can send to potential hosts. Now hosts generally advertise if they support WordPress or not, more often than not touting their WordPress managed hosting. So how do you choose? I recommend looking at these criteria. Can you talk to a person?
>
> **[1:33](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/find-the-right-hosting?u=76281980&t=93)** If you're going to be setting up and supporting your own website, you should make sure the hosting company you go with has good support. Great documentation and videos are fine, but chat and phone support are incredibly important as well. As a matter of fact, as problems come up, you may need to work with hosting and their support because there's nothing more that you can do. You'll also want to ask if your site will scale. It seems like putting the cart before the horse, but the earlier you think about your site getting hit with a lot of traffic, the better. Does your host offer the ability to easily grow your site or quickly switch plans in case your blog or [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) store makes it big? Will there be automatic backups? This isn't a deal breaker as far as choosing a plan, but it's important to know if you will need to bring your own solution, more on that in a later video, or if they will handle it for you, or you can do what I do, which is both. Will they help make your site secure? This can come in many [Forms](../../Skills/Web%20Development/Forms.md). There's site monitoring, easy and free secure sites with SSL, and even mitigating hack websites. At the very least, you should be able to install a free Let's Encrypt SSL certificate. Finally, do they have restrictions on what plugins you can use? If you have a plugin you absolutely need for your site, you should make sure you'll be able to use it on whatever host you choose. Usually, the answer is yes,
>
> **[3:07](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/find-the-right-hosting?u=76281980&t=187)** but if there's a mission critical plugin and no alternative possibility, you should double check before committing to a hosting provider. I will also add that good managed hosting has become more affordable in recent years. What used to cost hundreds of dollars a month can now be purchased for less than $20 a month. We're not in the business of recommending hosting companies around here, but do a quick search for managed WordPress hosting and it will uncover a lot of options for you to evaluate based on the criteria we outlined here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (6), [PHP](../../Skills/Software%20Development/PHP.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** make (4), find (1), php (1), mysql (1), apache (1)
> **Env Vars:** ssl (2), php (1), https (1), nginx (1)
> **Versions:** version 7 (1), version 5 (1), version 10 (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Backing up your site](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/backing-up-your-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/backing-up-your-site?u=76281980&t=0)** - [Instructor] Backing up your website is a crucial step in the process of protection and pre-troubleshooting because let's face it, if your website is in bad enough shape, restoring a backup is the only solution. So what should you back up? You should back up both the files and the database. And the most important aspects of the backup are any customizations you've made. So this could be a custom plugin or theme, the active plugins and themes, and the media you've uploaded. Anything that comes with core can be easily replaced so this could be the WP admin or WP includes folders. You can easily download these again from [WordPress.org](https://WordPress.org). What is irreplaceable is the database, especially as more customizations live there now. If you're using the block editor, full site editing, or a fully customizable theme like Astra or Cadence, nearly everything is stored in the database so backing this up is crucial. It's also worth at least considering the three, two, one method for backups. This means you want three copies on two different mediums and one offsite. You also want your backups to be current. And in all fairness, two different mediums may be excessive unless you're a Fortune 500 company. This means that you will store it on disc and either on a CD or a separate cold storage drive. But multiple copies and one being off of the server
>
> **[1:35](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/backing-up-your-site?u=76281980&t=95)** your site is hosted on is really important. If the server crashes, you don't want your backup to be in the same place as your main site. One way to take backups is to do them manually. You can use an FTP program to download your files regularly and then you can use a plugin like WP Migrate DB, which is free in the [WordPress](../../Skills/Web%20Development/WordPress.md) plugin repository, to download the [SQL](../../Skills/Data%20Science/SQL.md) file for your database. And while this would certainly satisfy the criteria of multiple copies in a separate location, the backup might not be current. Hosting companies that take backups automatically are hugely helpful here because they have a script that runs regularly to backup your site. They will likely also store it someplace besides your own server. There are also plugins that'll do the job for you. I recommend BackupBuddy from iThemes which takes backups on a schedule you create and stores them offsite. I personally use BackupBuddy on all of my sites. UpdraftPlus is also hugely popular. This is a free backup plugin in the WordPress repository that's worth checking out because that free version does a whole lot and can be installed right from your WordPress plugins dashboard. No matter what you choose, taking multiple backups that are current is incredibly important especially if your website gets to a state
>
> **[3:08](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/backing-up-your-site?u=76281980&t=188)** where a backup is the only way to fix it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Definitions:** is a  (2), means that (1)
> **Env Vars:** ftp (1), sql (1)
> **CLI Commands:** cd (1)
> **Code Identifiers:** ithemes (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Securing your site](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/securing-your-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/securing-your-site?u=76281980&t=0)** - [Instructor] You want to make sure your site is ready if and when it gets attacked. Some estimate that 40% of site hacks happen to small sites because they are most often left vulnerable. So what can we do to make our [WordPress](../../Skills/Web%20Development/WordPress.md) sites more secure? First, we should make sure our sites are up to date. We'll cover automatic updates in a different video but WordPress core themes and plugins all need to stay updated. Speaking of update, you should also make sure your host keeps [PHP](../../Skills/Software%20Development/PHP.md) updated. Old versions can leave your site vulnerable, even if you keep WordPress up to date. You should also make your site is using an SSL certificate so that all data sent to and from your site, including passwords, are encrypted. Most hosting companies offer Let's Encrypt SSL certificates for free. On the WordPress level, you should make sure your username is something other than admin and that your password is secure. This is something that WordPress checks for you now and that you are limiting login attempts. Having a firewall and routine malware scans are also strongly recommended and can be done on the hosting level. But there are a few plugins that can help. Sucuri is a well-respected brand in the WordPress space, and their plugin offers fantastic scanning and hardening your website. iThemes Security Pro plugin offers 30 plus ways
>
> **[1:35](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/securing-your-site?u=76281980&t=95)** to secure your site, including much of what we spoke about earlier in this video. Here, you can see a wide range of features that you have access to with their plugin. And both Sucuri and iThemes offer free versions as well as paid versions of their plugin. No matter what you choose, keeping your site up to date using best practices for usernames and passwords and doing regular scans will ensure your site is safe and sound.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (6), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** make (6), php (1)
> **Env Vars:** ssl (2), php (1)
> **Code Identifiers:** ithemes (2)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Automatic updates](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/automatic-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/automatic-updates?u=76281980&t=0)** - [Instructor] Automatic updates by and large are a safe way to keep your website up-to-date and secure. Here's how to enable them, pitfalls, and what some hosts are doing to help you. While [WordPress](../../Skills/Web%20Development/WordPress.md) usually gets automatic security and maintenance updates, unless you or your host has turned them off, since WordPress 5.6, you can automatically update major releases of Core as well. This is usually 5.9.6, which is a minor release versus 5.9, which is a major release. The caveat is that there's no way to do this in Core itself without code. You'd have to open up your wp-config.[PHP](../../Skills/Software%20Development/PHP.md) file and then add this line. Define, parenthesis, 'wp_auto_update_core', true.
>
> **[0:59](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/automatic-updates?u=76281980&t=59)** This will tell WordPress to automatically update Core. Luckily there is a plugin that could help us. It's called Advanced Automatic Updates. If we click Install and then Activate, a new section will be added under Settings. And you could see here that we can keep minor and security versions on, we can also turn on major versions, as well as update plug-ins and themes automatically. We can even have the plug-in notify us. If you want more granular control over plug-ins and themes, you can do that right from within Core itself. For plugins go to Plugins. And then you can either disable or enable automatic updates. Note that this may not work for all premium plugins who may need to enable that from within their code. For themes, if you go to Appearance, you can click on the theme details and then turn on or off automatic updates here. It's also worth noting at this point that you should go in regularly and delete themes that you are no longer using. The same thing goes for plugins. One pitfall of automatic updates is that they could break something. And because of that, folks are weary to do those automatic updates. While this is true,
>
> **[2:30](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/automatic-updates?u=76281980&t=150)** it's up to you what you want to update and when. Testing is super important as are backups. Some hosting companies offer a visual comparison tool where they'll take screenshots before and after updates and roll back changes that seem to break something. It's a really cool feature and something that you might consider adding to your hosting checklist. Later we'll learn how to roll back updates if they do break something. When it comes to updates, I like to keep minor Core updates on as well as themes and plugins that I think are generally safe. For bigger sites, I recommend you do some testing before automatic updates. And do what I do. Use host that has visual comparison.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Versions:** 5.6 (1), 5.9.6 (1), 5.9 (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (3)
> **Warnings:** caveat (1), note that (1), pitfall (1)
> **File Paths:** wp-config.php (1)
> **CLI Commands:** php (1)
> **Code Identifiers:** wp_auto_update_core (1)

#### [Testing your site with a staging server](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/testing-your-site-with-a-staging-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/testing-your-site-with-a-staging-server?u=76281980&t=0)** - [Instructor] Your production site or live site has people actively visiting it so you don't want to risk doing something to break it. Managing websites is hard enough. Instead you should have a staging server. This is a private duplicate of the live server. All of the content files and code will be synced between this site and the live site. Here you can review and test updates, new features, and more. Then, when you're ready to deploy new content and code, you can swap or fully push the staging site and the live site. In many modern hosting environments, this is achieved with the push of a button. There are a few things to note about your staging site. It should be an exact environment copy of your live site. You want the same version of [PHP](../../Skills/Software%20Development/PHP.md), the same version of [MySQL](../../Skills/Software%20Development/MySQL.md), and any other server settings. We want the test site to be as close to the live site as possible. It should also be easy to copy from production to staging. At any given moment, you should be able to make a copy of your live site for testing purposes. This might not be the case going the other way. Depending on the complexity of the site, doing a hot swap of a staging site for a live site could cause problems, especially if you have active users. But for the purposes of this course, as long as you could test and verify everything works, you can duplicate the actions on your live site.
>
> **[1:36](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/testing-your-site-with-a-staging-server?u=76281980&t=96)** Setting up a staging site could look different depending on your hosting environment. So I encourage you to see what your host does. And if you want to learn more about working professionally in [WordPress](../../Skills/Web%20Development/WordPress.md), I recommend my WordPress Workflows course right here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. And if at any point you do need to work on the live site, you could always use a plugin like WP Maintenance Mode, which will show logged-out users a temporary landing page. That plugin is free from the WordPress repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** php (1), mysql (1), make (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Common Troubleshooting Steps

[↑ Back to Table of Contents](#table-of-contents)

#### [Disabling plugins to find the problem](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/disabling-plugins-to-find-the-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/disabling-plugins-to-find-the-problem?u=76281980&t=0)** - [Instructor] One of the easiest ways to eliminate possible problem areas, is to disable your plugins and then enable them one by one to see where the problem is coming from. The idea here is that when you disable all plugins, you're starting from as fresh in install as possible. Then, you can bring them back one by one to see where the problem happens. I would take this one step further. And once you find the problem plugin, disable all the other plugins to make sure that there's no conflict, and that this plugin is the only one causing issues. Once you find the problem, you can roll back to a previous update, more on that later. Or, reach out to the developer to see if they have a fix. It's also worth noting that you should make sure you have that plugin up to date. If not, there could be a fix waiting for you already. If you need this plugin and can't fix it yourself, hang tight to see what the developer recommends. Otherwise, you can search for a new plugin in the [WordPress](../../Skills/Web%20Development/WordPress.md) plugin repository. And one more thing, I have only seen this happen with a small number of plugins where it needs to be replaced. There can be a number of reasons for it, though. One plugin I use doesn't work with a specific managed WordPress host, and another wasn't updated for the version of [PHP](../../Skills/Software%20Development/PHP.md) I was on.
>
> **[1:36](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/disabling-plugins-to-find-the-problem?u=76281980&t=96)** While usually the resolution isn't jump ship, this is a good first test to find the problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** find (3), make (2), php (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Moving to a default theme](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/moving-to-a-default-theme?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/moving-to-a-default-theme?u=76281980&t=0)** - [Instructor] Moving to a default [WordPress](../../Skills/Web%20Development/WordPress.md) team is a great way to make sure your theme doesn't create conflicts with other plugins. But there are a few things to watch out for, especially with full site editing. First, make sure you have a current backup, like right now, before you do anything else. Backup plugins generally let you take on demand backups. The reason is once you disable the current theme and revert to a different theme, you could lose widget areas, navigation settings, or with full site editing, full layouts. You may not, but it's always good to be prepared. Once you do that, switch to the default theme, which usually matches the year. If you're still seeing problems, try disabling plugins if you haven't. If you're not coding, these acts are really more of a fact-finding mission. You're trying to figure out where the problem is coming from so that the developer, whether it's someone on your team or whoever made the theme or plugin, can better recreate and fix the problem. Luckily, problems at this level are less common, but could happen especially with custom developed themes just for your site. After all, most themes that are freely and commercially available have been tested by hundreds or even thousands of sites. The one just for you has one user, just you. Unfortunately, if you're not a developer, the solution here is to hang tight
>
> **[1:33](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/moving-to-a-default-theme?u=76281980&t=93)** and wait for the developer to make a fix or find a new theme.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Warnings:** watch out (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [How to use recovery mode](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-to-use-recovery-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-to-use-recovery-mode?u=76281980&t=0)** - [Instructor] Sometimes you'll get an error that's so bad that it actually breaks your whole site including the admin, meaning you can't log in to try to fix it. Luckily, when that happens in later versions of [WordPress](../../Skills/Web%20Development/WordPress.md), it will actually send you an email to access the admin in what's called recovery mode. Allowing you to log in and investigate the issue even when there is something completely broken. When that happens, you'll be brought to an area labeled as a recovery mode, where you can figure out what the issue is. And usually WordPress will give you some clues as to what's causing the issue. Then you can go ahead and disable that theme or a plugin, and go ahead with your fix. Once you do make the fix, you can exit recovery mode and make sure everything is working properly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Down for everyone, or just me?](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/down-for-everyone-or-just-me?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/down-for-everyone-or-just-me?u=76281980&t=0)** - [Instructor] Nothing is scarier than trying to visit your own website and seeing that it's not loading. But before you panic, take a breath. One of the first things you can do when your site is experiencing loading issues is make sure it's not down through the use of a few helpful tools. The first one I'll use is [downforeveryoneorjustme.com](https://downforeveryoneorjustme.com). You go there, you type in your site's URL, and then you click or just me. It will let you know if a site is down, or if you're just experiencing issues. So with this site, it actually is down. If I check my personal site, we'll see that it's up. If your site is down, reach out to your hosting company, or check their status page to see if they're having issues. If it's just you, you can check a different device, disconnect from your [wifi](../../Glossary/Standard/Wi-Fi.md), or try a VPN to see if the problem is with your internet service provider. But at this point, it is likely an internet issue on your end. There are also monitoring services that will let you know when your site is down by automatically checking for you. Perhaps the most well known is Pingdom, but there are other modern free and affordable options. One is [betteruptime.com](https://betteruptime.com), which will do three minute check for you and will have email alerts when a site is detected as down. All of this for free. Another is [updown.io](https://updown.io), which charges per request.
>
> **[1:37](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/down-for-everyone-or-just-me?u=76281980&t=97)** Fantastic if you just want to monitor during important times of the year, like big sales. Services like this will save you a step, or even worse, a message from a potential visitor, and let you know as soon as your site is down for everyone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (1)
> **URLs:** [downforeveryoneorjustme.com](https://downforeveryoneorjustme.com) (1), [betteruptime.com](https://betteruptime.com) (1), [updown.io](https://updown.io) (1)
> **Env Vars:** url (1), vpn (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Reverting updates with WP Rollback](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/reverting-updates-with-wp-rollback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/reverting-updates-with-wp-rollback?u=76281980&t=0)** - [Instructor] Sometimes an update can be the cause of the problem, and I've been there. Seems like a small update, the plugin author says it works so you just click Update and, bam, broken site. Sometimes it's obvious, like when there's a syntax error that sends a 500 error, or some other coding error right on the front page. Sometimes it takes a few days to realize because it's not an obvious bug. But luckily, there's a plugin that will help you revert these updates and test, it's called WP Rollback. So let's go to Plugins, Add New. We'll search for WP Rollback in the search bar. And then, it will come up with WP Rollback by [GiveWP.com](https://GiveWP.com). We'll click Install, and then Activate. Once we do that, you'll see that there's a new option added to the plugin entries on the Plugins page called Rollback. So let's pick on Gutenberg here, I'll click Rollback, and then you could see that there is a list of versions that we can revert to. You select the one that you want to go back to and then click Rollback. Then, the older version will get installed, replacing the current version. You can then activate the plugin again. But it's not just plugins, WP Rollback works with themes too The only caveat, if you made changes
>
> **[1:38](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/reverting-updates-with-wp-rollback?u=76281980&t=98)** to the theme itself instead of making a child theme, which you should not do, those changes are lost. So you'd need a backup to get those changes. WP Rollback could be a great temporary fix until the problem in a plugin, or theme is patched. Be sure to test future updates before applying them to your site to make sure.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), select the (1)
> **CLI Commands:** make (1)
> **URLs:** [givewp.com](https://givewp.com) (1)
> **Definitions:** is a  (1)
> **Warnings:** caveat (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Testing with a different WordPress install or server](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/testing-with-a-different-wordpress-install-or-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/testing-with-a-different-wordpress-install-or-server?u=76281980&t=0)** - [Instructor] If you're working through a problem, you may want to also rule out that exact [WordPress](../../Skills/Web%20Development/WordPress.md) installation you're working with, including the server environment. In order to do that, there are a few steps you can take with a staging or local server. If your host allows, you can try changing the [PHP](../../Skills/Software%20Development/PHP.md) version, for example. But a better way that may or may not be less technical is to create a local copy on your computer. I'm a big fan of Local over at [localwp.com](https://localwp.com), and if you use WP Engine or Flywheel, you can even connect Local to your account to pull down and push up sites. The same thing goes for DevKinsta, their local environment, and Kinsta Hosting. But if you're using a different host, the best way to do this is by using WP Migrate DB Pro. While this is a paid plugin, you can easily pull down entire sites locally without having to do any exporting or finding and replacing. Make sure that WP Migrate DB Pro, WP Migrate DB Pro media files, and WP Migrate DB Pro theme and plugin files are all installed. This will allow you to get the full copy of your website, database, and files. Once they are installed, you can go to Tools, Migrate DB Pro, and then grab the connection info. Then you would want to pull down
>
> **[1:37](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/testing-with-a-different-wordpress-install-or-server?u=76281980&t=97)** the contents from the live site. You should pull everything so that the site is an exact copy, just on a different local environment. Once you do that, you can see if the problem still persists locally, as well as get detailed log files and even error messages that your live site may be suppressing. This will give you a better idea and better insight into where the problem lies, which is going to be important as you troubleshoot the actual a problem. If you want to learn more about multiple environments and WP Migrate DB Pro, I cover both of those topics extensively in the WordPress Workflows course in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** php (1), make (1)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [localwp.com](https://localwp.com) (1)
> **Env Vars:** php (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)


### 3. Common Problems and Solutions

[↑ Back to Table of Contents](#table-of-contents)

#### [The dreaded white screen of death](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/the-dreaded-white-screen-of-death?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/the-dreaded-white-screen-of-death?u=76281980&t=0)** - [Instructor] One of the most frustrating errors in [WordPress](../../Skills/Web%20Development/WordPress.md) is the dreaded white screen of death. It's a plain white screen instead of your website or admin. What makes it so frustrating is that just about anything can cause it from a broken plugin to errant code, to a bad call to the database. So how can you troubleshoot this? Well, luckily, a lot of what you can do was covered in previous videos, as long as you can access your admin screen. The white screen of death can look different depending on the browser. You'll get an actual white screen in some browsers and a 500 error in others. No matter what you see though this usually means the front end of your site is down but the admin is still accessible. You can double check this by going to your site slash WP admin. If you can't access the admin you can always enter recovery mode as we covered in a previous video. You should have an email in your inbox from your WordPress site with the URL to access that. Assuming you can access the admin, you can do some of the common checks like disable the plugins and bring them back one by one, change the default theme, and update your plugins and core. You can also clear the site cache, something that we'll cover in a later video. Usually this is a plugin or hosting dependent but you can often find a clear cache button in the admin area.
>
> **[1:34](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/the-dreaded-white-screen-of-death?u=76281980&t=94)** If your admin is not accessible, simply disabling plugins and themes don't work, and for some reason you can't access recovery mode, you can use an FTP program to temporarily rename the plugins and theme folders. If your site comes back, one of those plugins or theme is the culprit. Sometimes the white screen of death occurs when there's a code error that's not being displayed. For security purposes, WordPress and web hosts usually suppress debugging messages in production environments. And there are a few light code changes you can make to help with this. The first is turning on debugging with this line, define WP debug and then true. If it's already set to false, you can simply change false to true. If it's not there, you can add this entire line as long as it's above the that's all stop editing comment. If you do this, save and then refresh your site and see error messages, you know where the problem is to start fixing it. The other thing you can do is increase your [PHP](../../Skills/Software%20Development/PHP.md) memory limit. You can do that by typing define WP memory limit and then trying something like 64M. Again, if this line is already in your WP config file you can change the value. If you have two entries with this, it's going to cause a different error. One heavy caveat here is that both of these
>
> **[3:09](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/the-dreaded-white-screen-of-death?u=76281980&t=189)** depend on your hosting environment. So if these don't work be sure to reach out to your hosting company. If all else fails, you can restore from a backup to get the site up and running. Having a staging site is perfect for this because you can continue to debug there with your production site back up using some of the more advanced techniques we'll be covering in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** find (1), make (1), php (1)
> **Env Vars:** url (1), ftp (1), php (1)
> **Cross-References:** we covered (1), previous video (1)
> **Warnings:** troubleshoot (1), caveat (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Stuck in maintenance mode](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/stuck-in-maintenance-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/stuck-in-maintenance-mode?u=76281980&t=0)** - [Instructor] If you've seen the message that your site is briefly unavailable for scheduled maintenance or it's stuck in maintenance mode, it might give you pause. What exactly is this maintenance mode? This can happen when core plugin or theme updates get interrupted or if multiple updates conflict with each other. Now, usually this will resolve by itself, but if it doesn't there is a fix that is simply deleting a file if you have an FTP program. Using your FTP program you'll want to go to the root directory for [WordPress](../../Skills/Web%20Development/WordPress.md). This is the same directory that your WP config file is in. You'll see a file called .maintenance. If we click on that and then delete it, or move to trash, whatever your FTP program says. Removing it from the directory. Now, if we go back to our maintenance site and refresh, we can access our dashboard again. The best way to avoid conflicts like this is by using WordPress's built in mass update feature. So if we go to updates and then we can select all, click update plugins, and then let the update run without doing anything else. The updates will run and then we'll get a message that they're complete and our website will no longer be stuck in maintenance mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **Env Vars:** ftp (3)
> **UI Navigation:** go to (2), click on (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Issues with file uploads](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/issues-with-file-uploads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/issues-with-file-uploads?u=76281980&t=0)** - [Instructor] Sometimes you'll try to upload a file and it won't work. These types of errors can be tricky because they can depend heavily on the environment. But there are often three ways to fix these errors. The first possible error is that you're trying to upload a file type that isn't allowed by [WordPress](../../Skills/Web%20Development/WordPress.md). You can find a list of what is accepted in the WordPress Codex. Generally it's images, specific types of documents and specific media files. When you run into this error, there are two ways to fix it. The first is to add a line to your WP config file. define( 'ALLOW_UNFILTERED_UPLOADS')
>
> **[0:52](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/issues-with-file-uploads?u=76281980&t=52)** and then set that to true. You should take note however, that this will allow any file to be uploaded. A more surgical way to do it would be to allow specific file types. And while you could do that using the upload mimes filter in your own custom plugin, a better way to do it would be the WP extra file types plugin which is free in the WordPress repository. This plugin has a long list of file types to choose from. And when you get to the bottom of this page you can even add your own file types. If it's not the file type, it could be the file size. From the upload screen you could see a max file size often set by the hosting company. To change this you used to be able to change the WP config file, however that no longer works. Instead, there's another free plugin that could help. WP maximum upload file size. This will allow you to choose the maximum upload file size from 16 megabytes up to about 2 gigabytes. And you can also set a maximum execution time. If you prefer code you can also use the upload size limit filter. In both cases, you may be subject to hosting limitations.
>
> **[2:29](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/issues-with-file-uploads?u=76281980&t=149)** So if these solutions don't work reach out to your hosting company. The last common file upload problem is a lack of permissions and you can actually see it in action on the maximum upload file size plugin. The upload folder does not have the writeable permission. Basically the uploads folder on your website isn't allowing WordPress to add files to it. To fix that you would need to use your FTP program again. To get to the uploads folder in your FTP program click on wp-content, and then you'll see the uploads folder. If you click on the uploads folder, in transmit, you'll see it. You may need to right click and then view permissions, depending on the program that you're using. But then you'll want to change the octal to 744. This allows users to read, write, and execute on the folder. Then we want to make sure to apply it to enclosed, and that is enclosed directories, but not files. This should fix the problem. If not, as always, be sure to reach out to your hosting company. One more thing I will double check is file names. Really long file names or names of special characters might not work. So try renaming them and uploading them again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4)
> **Env Vars:** ftp (2), allow_unfiltered_uploads (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Pretty URLs not working properly and other random 404 errors](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/pretty-urls-not-working-properly-and-other-random-404-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/pretty-urls-not-working-properly-and-other-random-404-errors?u=76281980&t=0)** - [Instructor] Whether you updated your link structure, installed a new plugin, or created a new custom post type, sometimes you'll hit an issue where your pretty links or permalinks are not working. Assuming these are pages that were just working and not actual 404 errors, you likely have a problem with your permalinks where you need flush the rewrite rules. Because [WordPress](../../Skills/Web%20Development/WordPress.md) is designed to work on different hosting environments, it has created its own way of adding URL rewrites, taking something like [yoursite.com/?p=123](https://yoursite.com/?p=123) and turning it into [yoursite.com/blog-post](https://yoursite.com/blog-post). To improve the performance of these rules, they're cached so that they're not constantly being regenerated but that means that when there's a change they need to be flushed. Luckily, all you have to do to flush the rewrite rules is from your WordPress dashboard, go to settings, permalinks, and then click save changes. If they're was a rewrite rule issue your pretty links /404s should be resolved. If you are still experiencing a 404 error, you should check to make sure that the page has been properly published and that there are no typos in the URLs both in the browser and in the post settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **URLs:** [yoursite.com](https://yoursite.com) (2)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Using a redirect plugin for actually broken links](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/using-a-redirect-plugin-for-actually-broken-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/using-a-redirect-plugin-for-actually-broken-links?u=76281980&t=0)** - [Instructor] When you actually do have a broken link, you definitely want to get it fixed. It creates a bad [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) and can hurt your SEO. Here are a couple of ways to mitigate broken links, or 404 errors. The first thing you want to make sure to do is have a good 404 page. [WordPress](../../Skills/Web%20Development/WordPress.md) allows you to customize this a few ways. If you are a theme developer, you can create a 404.[PHP](../../Skills/Software%20Development/PHP.md) template. If you are not, don't worry. Starting in WordPress 5.9., if you're using a block theme, you'll see the site editor section. You can modify the 404 template using full site editing and blocks. If you are not using a block theme, your theme may provide a way to replace the 404 page from the admin. You can also use the free plugin 404page to redirect 404 errors to a custom page of your choice. Or you can use a premium plugin, like SeedProd, to allow you to build a custom 404 page with their page builder. Once you have your 404 page squared away, it's best to resolve those errors. And you can do that with a redirect plugin. Redirection is a popular free plugin that allows you to easily create WordPress redirects. But even going beyond that, it will track 404 errors
>
> **[1:35](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/using-a-redirect-plugin-for-actually-broken-links?u=76281980&t=95)** and generate redirects to a page of your choice. So after installing and activating Redirection, complete the Redirection setup, and then click Start Setup. Click monitor permalink changes in WordPress posts and pages and click keep a log of all redirects and 404 errors. You can skip storing the IP information. Then click Continue Setup. It'll test the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API, and then click Finish Setup. Once it goes through setting up Redirection, click Finished, and now you have an area for creating and viewing redirects. Under the 404s error, you will get a log of 404s. And once that starts to happen, you can look at the list and click Add Redirect, redirecting that 404 to a page you prefer. This can be helpful, not only for common typos, but if you are deleting or changing a post.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Prerequisites:** setup (4)
> **CLI Commands:** make (1), php (1)
> **Env Vars:** seo (1), api (1)
> **Exercise Files:** template (2)
> **Best Practices:** make sure to (1), it's best to (1)
> **File Paths:** 404.php (1)
> **Versions:** 5.9 (1)

#### [Recovering lost changes with Revision History](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/recovering-lost-changes-with-revision-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/recovering-lost-changes-with-revision-history?u=76281980&t=0)** - [Instructor] If you're anything like me, you've accidentally saved or overwritten a post or a page when you didn't mean to. Revision history is perfect for those situations. Revision history is a way for [WordPress](../../Skills/Web%20Development/WordPress.md) to store older versions of posts and pages so you can easily restore them if something goes wrong. This should be on by default. You should see a revision section in the right panel under the Publish area. If you don't see that, it may have been disabled by your hosting provider or another plugin. You can turn it on by looking in your wp-config file for the WP_POST_REVISIONS constant and changing that to either true or a specific number of revisions you want to keep. Just a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) here that the more revisions you keep, the more bloated your database could get, so be mindful of that, especially if you're on budget hosting. I'll set this to true for now, and once you do that, revisions will begin to be stored in your database. To restore a revision, go to an already published page or post and click on Revisions. Here you'll see a timeline of all of the saved changes. Below that, you'll see a comparison of what's been removed and what's been added. What's been removed would be in red, what's added would be in green. And we can move backwards to compare various versions of a page.
>
> **[1:34](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/recovering-lost-changes-with-revision-history?u=76281980&t=94)** Once you find the page you like, click Restore Revision. And now you have the previous version restored. Generally, if I know I want to keep something from the current version, I will copy that block, but it's worth noting that when you do restore an old version, the current version becomes part of the revision history and you can go and copy those blocks as needed. While not necessarily troubleshooting, overwriting content can be a big problem and revision history is a great way to solve that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Env Vars:** wp_post_revisions (1)
> **Speakers:** - [instructor] (1)

#### [Why do blocks keep needing to be recovered?](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/why-do-blocks-keep-needing-to-be-recovered?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/why-do-blocks-keep-needing-to-be-recovered?u=76281980&t=0)** - [Instructor] Sometimes you will open the Block Editor and see that a block needs to be recovered. What does that mean and how can you fix it? Generally, this means that there's some unexpected code or content that was generated either accidentally or purposefully. This has confused the Block Editor. Thankfully, Attempt Block Recovery usually works restoring blocks to their proper form. Further, they won't likely affect the front end if you haven't manually changed any more code. If a block continues to require recovery, it's most likely a third party block and I'd recommend reaching out to the plug-in developer to get it resolved. But [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) assured, most of time your content will remain intact even with the errors in the Block Editor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** open the (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 4. Problems That Require Working with Your Server

[↑ Back to Table of Contents](#table-of-contents)

#### [General web server errors: the 400s](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/general-web-server-errors-the-400s?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/general-web-server-errors-the-400s?u=76281980&t=0)** - [Instructor] The web end servers have a ton of codes, but the most common is the 400 code class. These are client errors. These are the ones that your visitors will see when something goes wrong from some action either they took or you took, and they are the ones that you'll likely be able to fix without a server admin. While there are lots of 400 class codes, here are the ones that you and your visitors are most likely to see with most websites, including [WordPress](../../Skills/Web%20Development/WordPress.md). These codes and definitions come from [W3.org](https://W3.org). The first is a 400 error. The request could not be understood by the server due to malformed syntax. This usually means there's a unrecognized character in the URL that the server doesn't know what to do with. You can fake this by going to your URL slash, and then the percent sign. 401 is the request requires user authentication. This will happen when a directory is password protected by HT access and the user puts in the wrong username and password until they click cancel. 403 is the server understood the request, but is refusing to fulfill it. The requested file is likely present, but the server isn't sending it to the client. And this is probably due to permission-setting where world or everyone is not set to read. 404, the server has not found anything matching the request URI.
>
> **[1:32](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/general-web-server-errors-the-400s?u=76281980&t=92)** Perhaps the most common error, the server can't find anything that matches what you've typed in the URL. And finally, 408, the request has timed out. This is generally due to a very slow connection from your user and not related to the performance of your website. There are lots more all outlined at [W3.org](https://W3.org), but the ones covered here are the ones that you, or more accurately your users, are likely to see.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** url (3), uri (1)
> **URLs:** [w3.org](https://w3.org) (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Warnings:** common error (1)
> **Speakers:** - [instructor] (1)

#### [General web server errors: the 500s](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/general-web-server-errors-the-500s?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/general-web-server-errors-the-500s?u=76281980&t=0)** - [Instructor] While 400 codes are common and problematic, 500 errors are even more severe. Knowing what they mean will help you mitigate and potentially fix big problems with your site. The good news is you can usually fix these errors with what we cover throughout this course. The bad news is that it could sometimes be hard to figure out what's causing the error, just that something has gone wrong on your server. The worst news is that sometimes it will take your hosting company to fix this error. But no matter what, being able to see and report these errors will help you and the hosting company understand what's happening. These errors and the definitions will come from [w3.org](https://w3.org) and the first is a 500 or Internal Server Error. The server encountered an unexpected condition which prevented it from fulfilling its request. This can be caused by any number of things from errand code to a missing database connection. 502 is a Bad Gateway. The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request. This could be caused by a DNS issue or your entire server temporarily being down. 503 Service Unavailable. The server is currently an able to handle the request due to a temporary overloading or maintenance of the server. [WordPress](../../Skills/Web%20Development/WordPress.md) can actually throw this error when it's updating but you can also see it
>
> **[1:32](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/general-web-server-errors-the-500s?u=76281980&t=92)** if your site's getting hit with a ton of traffic. And 504 Gateway Timeout. The server while acting as a gateway or proxy, did not receive a timely response from the upstream server. In other words, some resource on the server is taking too long to respond. In each of these cases, it's best to try refreshing the page first or trying it on a different device. This could be a temporary issue, or if that doesn't work, you could always check [downforeveryoneorjustme.com](https://downforeveryoneorjustme.com) if the site is down, then it's time to troubleshoot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Definitions:** is a  (2), in other words (1)
> **URLs:** [w3.org](https://w3.org) (1), [downforeveryoneorjustme.com](https://downforeveryoneorjustme.com) (1)
> **Env Vars:** dns (1)
> **Best Practices:** it's best to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [How to fix the "site insecure" error with an SSL certificate](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-to-fix-the-site-insecure-error-with-an-ssl-certificate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-to-fix-the-site-insecure-error-with-an-ssl-certificate?u=76281980&t=0)** - [Instructor] Have you ever seen a not secure or this site is not secure error from your browser? This is because you're not using an SSL certificate, and there's an easy fix for it. The process varies from hosting company to hosting company and sometimes they'll automatically install it. Sometimes you'll have to do it yourself. And on a shrinking number of hosts, you'll need to pay for it. In order to set up an SSL certificate, you'll need to make sure your domain is pointing to the server. This is likely done if you have a working site, but there are a couple of courses in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library that cover this more in depth. These courses will also talk about why it's important to have SSL certificates, but they will protect your data including usernames and passwords. Once your domain is pointing to the server, you'll want to see how to install a Let's Encrypt SSL certificate on your site. I'll be doing this on SiteGround , but the basics are the same. You'll want to go to your site manager. This might look different, especially, if you're using cPanel, but there will be a place for SSL certificates. Then you'll want to select the domain you want to create an SSL certificate for, and then select the SSL certificate. If you are doing it for just the domain specified, you can choose Let's Encrypt, but if you want to have sub domains then you might want to do the Let's Encrypt Wildcard. Again, Let's Encrypt SSL certificates are free
>
> **[1:34](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-to-fix-the-site-insecure-error-with-an-ssl-certificate?u=76281980&t=94)** and you should not be charged for them. Once you do that, click Get, and your host will create a new Let's Encrypt SSL certificate and install it for you. But that's not the last step we need to take. Over on your [WordPress](../../Skills/Web%20Development/WordPress.md) site in your dashboard, if you go to Settings General, you'll need to update the URL to include HTTPS. So we want to make sure to generate the SSL certificate first and test that it's working, because if it's not and you change this setting, you will get locked out of your site. So make those changes and then click Save. In some cases, you will need to force your server to use HTTPS, SiteGround offers a setting right from their hosting panel. So I try to look for a similar setting if you're using a different host. At the very least, there's likely some documentation on how to do it for your host. And now your site should be fully secure using SSL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** ssl (11), https (2), url (1)
> **Prerequisites:** install (3), you'll need (3), set up (1)
> **UI Navigation:** go to (2), select the (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** cpanel (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [How to fix mixed content errors](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-to-fix-mixed-content-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-to-fix-mixed-content-errors?u=76281980&t=0)** - [Instructor] If you do have an SSL certificate you may see mixed content errors or more lately just warnings about potential security risks. Which means that your site's secure but you're serving up insecure content. There's a few ways to fix this in [WordPress](../../Skills/Web%20Development/WordPress.md). A very popular plugin that's recommended less days is really simple SSL. It's great but it requires you to keep it installed long term which is not necessary to fix these issues. And since you're not going to remove your SSL certificate. Your first step, if you're using WordPress 5.7 or later, is to try the native migration. WordPress will detect if you're using SSL using the site health tool. And it'll make the switch for you if it can. However, this might not solve the issue and that's because there could be some lingering HTTP references in your database. The first plugin I recommend installing is SSL Insecure Content Fixer. This is a free plugin available in the plugin repo. And when you install and then activate,
>
> **[1:22](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-to-fix-mixed-content-errors?u=76281980&t=82)** you can go to the new SSL tests under tools and it will run some tests for you. Then you can go under settings and have it run some simple checks to make sure that everything is working properly. I recommend the simple checks at first because it is the least destructive moving forward but you could always take a backup and move up from there. The other action that you could take is running a search and replace on your database. So there's another free plugin for that called Better Search Replace. And if we install that and then activate it, under tools we'll see Better Search Replace. We'd want to search for http:// and then our domain, which is repair.local. And we will replace it with [https://repair.local](https://repair.local). We can select all of the tables and then we can do a dry run first to make sure that we are changing the appropriate number of records. So eight were found that need to be updated. So let's uncheck this and then run it again. Once that's done, you can check the site
>
> **[2:55](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/how-to-fix-mixed-content-errors?u=76281980&t=175)** to see if you're still getting those mixed content errors. If you are, it could be the case that there is a http:// hard coded in a plugin or theme that you're using which is against proper coding standards. You can use the browser developer tool to see exactly what's causing the issue and reach out to the developer. But more often than not, the two plugins mentioned here, should solve those mixed content errors for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **Env Vars:** ssl (6), http (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), means that (1)
> **Prerequisites:** install (2)
> **URLs:** [https://repair.local](https://repair.local) (1)
> **Versions:** 5.7 (1)
> **UI Navigation:** go to (1)

#### [Error establishing a database connection](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/error-establishing-a-database-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/error-establishing-a-database-connection?u=76281980&t=0)** - [Instructor] Everything in [WordPress](../../Skills/Web%20Development/WordPress.md) runs off a database, but what happens when you can't connect? There's likely a common problem, but there are a couple of other solutions too. The most likely solution is that your credentials are incorrect in the wp-config file. So, if you open that up, you can double check those credentials. If you need to find them, you can go to your hosting environment and there will either be a [Databases](../../Skills/Software%20Development/Databases.md) or [MySQL](../../Skills/Software%20Development/MySQL.md) section where you can check the name, host, username, and password. Once you confirm those, you want to make sure they're all matching what you see in your hosting environment. And then making that change should bring the site back. However, it's not always the case that this will work. So if those look good, the next thing you'll want to try is a database repair to what might be a corrupt database. Once again, in your wp-config file, you'll want to add this constant define WP_ALLOW_REPAIR, and set that to true. Once that's set to true, you can visit your URL, /wp-admin/maint, that's M-A-I-N-T, /repair.[PHP](../../Skills/Software%20Development/PHP.md). You'll be given two options.
>
> **[1:32](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/error-establishing-a-database-connection?u=76281980&t=92)** I recommend you choose repair database first, 'cause this will be faster. But if that doesn't work after you visit the site again, then you could always go back and repair and optimize. Once you run the repair, you'll want to go back and remove that line so that another repair or repair and optimize can't accidentally be run. If neither of those work, you might try replacing all of the WordPress files in your file directory except for wp-content, since it has all of your custom files there, just in case it corrupt file is causing the issue. You'll also want to make sure you keep your wp-content file, as that has the database connection information. If all of that fails, I recommend restoring the most recent working backup and reaching out to your hosting company to see what, if anything, is going on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** make (2), find (1), mysql (1), php (1)
> **Env Vars:** wp_allow_repair (1), url (1)
> **File Paths:** repair.php (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Unable to write to a directory, or update themes/plugins](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/unable-to-write-to-a-directory-or-update-themes-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/unable-to-write-to-a-directory-or-update-themes-plugins?u=76281980&t=0)** - [Instructor] Automatic updates and being able to install plugins and themes right from the [WordPress](../../Skills/Web%20Development/WordPress.md) Admin are great, but what happens if you get an error when you try to do that? You likely have a permissions problem. Now, this error may manifest itself in different ways. For example, when I try to install a plugin, I get installation failed, could not create directory. And this means that WordPress cannot write to the Uploads, Plugins, or Themes folders, because those folders aren't writeable by the public. To fix that, open up your FTP program and go to your root directory for your website. Locate the WP Contents folder, and then we'll check the permissions for plugins, themes, and uploads. So uploads, it looks like that's good. Themes, looks good. 755 is what we want. And plugins, it looks like has 600, which means it's only readable and writeable by the user, which is generally a single user on the server. In order for WordPress to be able to write to it, we'll need to allow for read and execute for both group and world. So we can check those off where we allow read, write, and execute for user, and then read and execute for both group and world. Or you can change the octal to 755. Then you'll want to apply to the folder and apply to the enclosed. In other FTP programs,
>
> **[1:33](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/unable-to-write-to-a-directory-or-update-themes-plugins?u=76281980&t=93)** this might be applied to sub-directories, but the ideas that you want to make sure that these permissions get applied to the plugin folder and then any subsequent folders. After that, if we try to install, it looks like we don't get an error, and then we can activate the plugin. If that doesn't work, repeat the process for both WP admin and WP includes, then you should be good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **Prerequisites:** install (3)
> **Env Vars:** ftp (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Advanced Problems

[↑ Back to Table of Contents](#table-of-contents)

#### [Unable to deliver emails/emails going to spam](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/unable-to-deliver-emails-emails-going-to-spam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/unable-to-deliver-emails-emails-going-to-spam?u=76281980&t=0)** - [Instructor] A common problem that plagues [WordPress](../../Skills/Web%20Development/WordPress.md) sites, especially shops that rely on sending emails, is that sometimes email goes right to spam. Email deliverability is a complicated fix and harder to spot if you don't know what to look for, but luckily some plugins make it easier. First, it's important to understand why this happens. With [PHP](../../Skills/Software%20Development/PHP.md) and other languages, it's really easy to send emails with a single line of code. And because of that, it's also easy to send spam. To combat this, email service providers like Gmail have gone through great lengths to try to detect when an email is legitimate and when it's not. To do this, you need to verify your domain, assure that the sending server is allowed to send email on your behalf, and usually update some records. This is a somewhat complicated process that varies depending on the host, your domain's reputation, email service provider, and even the form plugin you're using. That said, there are a few general resources to make it easier. The first is a free plugin with a paid upgrade, called WP Mail SMTP by WPForms. Though it's made by WPForms, it will work with any form plugin or no form plugin at all. Once you install it, you can walk through the wizard.
>
> **[1:34](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/unable-to-deliver-emails-emails-going-to-spam?u=76281980&t=94)** It will ask you how you are sending email, giving you a bunch of different mailers, including [Google](../../Glossary/Service/Google.md) and 365. And then once you select your mailer, it will tell you how it works and then walk you through the process of verifying your domain. If you are using a specific form plugin like Gravity [Forms](../../Skills/Web%20Development/Forms.md), you can likely find instructions from them as well. There are also two services designed to send email for you, leveraging their servers and reputation. The first is SendWP and the second is SendGrid. Both of these have monthly charges, but they'll connect to your WordPress site and handle sending email for you, completely removing your hosting company from the equation. This can be especially useful if you're on shared hosting. Email delivery issues can hurt your reputation, as well as your business, so you definitely want to get this resolved. While the process can be a little bit complicated and different, depending on what you're using, understanding the right tools and what to look for will help greatly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** make (2), php (1), find (1)
> **Definitions:** is a  (3)
> **Env Vars:** php (1), smtp (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [General caching issues (types of cache)](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/general-caching-issues-types-of-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/general-caching-issues-types-of-cache?u=76281980&t=0)** - [Instructor] There's nothing worse than updating your site and then not seeing the updates. This is likely a caching problem, but there are lots of types of cache. So what are they and how do you fix them? First, there are a lot of performance benefits to using cache. It will speed up your site by storing various aspects on the user's computer, on closer servers, or by pre-rendering areas of the site. But that also means when you do update the site, cache needs to be updated as well. And this is not always automatic, nor immediate. There are also different types of cache which can complicate where and what needs to be updated. The first is browser cache. The user's browser will store parts of a website that are unlikely to change. This could be images and other media assets, [JavaScript](../../Skills/Software%20Development/JavaScript.md) libraries, or CSS. The user's browser handles this. Then there's page cache. This works best for dynamic webpages like ones that you find with [WordPress](../../Skills/Web%20Development/WordPress.md). A server will build a page once processing all of the [PHP](../../Skills/Software%20Development/PHP.md) code and [Database Queries](../../Skills/Software%20Development/Database%20Queries.md), then store the final product on the server. This usually is implemented by your hosting company or by a plugin like WP Rocket. There are also several types of server cache. This can be caching on the server to reduce the amount of PHP code executed, storing portions of a website to serve more quickly, or in the case of object caching, storing the results of database queries.
>
> **[1:35](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/general-caching-issues-types-of-cache?u=76281980&t=95)** Like, for example, all of the posts in the news category. This is usually implemented by your hosting company. Clearing cache is a slightly different process as well. Though, luckily, just the push of a button, except for browser cache. Since browser cache is controlled by the user's browser, you will need to signal to the browser that a file has changed, usually by adding a different query argument to the end of the file. Something like you see here, .css?ver=5.9.1. Luckily, most caching plugins will take care of this for you. As for page and server cache, most plugins will have their own implementation for it. On SiteGround, they have a whole caching section in their plugin, and then they have the ability to purge SiteGround cache right from the WordPress admin. Over on Nexcess, they use a couple of different plugins. So you can see that if I visit a page, I can clear that page cache. I can also clear the entire site cache. Or under the Nexcess menu, I could flush object cache. Clearing these caches and refreshing your browser should do the trick most of the time. But note, there are some plugins like page builders that may create their own cache that is in need of clearing. So be sure to check those plugin settings if your site still doesn't look right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** php (2), find (1)
> **Env Vars:** php (2), css (1)
> **Versions:** 5.9.1 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Cannot modify header error](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/cannot-modify-header-error?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/cannot-modify-header-error?u=76281980&t=0)** - [Instructor] One of the most cryptic errors to non-[PHP](../../Skills/Software%20Development/PHP.md) developers is that you cannot modify header info. If you know what you're looking for, it's not as daunting, but it might require some coding. We get this error when the PHP header function is called after there's output printed on the page. This function needs to send its data, a raw HTTP call, before anything else. While [HTML](../../Skills/Web%20Development/HTML.md) tags or basic text is visible, one hidden way this error can be thrown is if there's any white space characters new lines or non breaking spaces, before the opening PHP tag or after the closing PHP tag as we see here. The good news is, as long as you're not getting a white screen of death, you should get a general idea of where the error is happening. We usually get a file and line number with this error. But the bad news is, it could be [WordPress](../../Skills/Web%20Development/WordPress.md)' generic plugable .PHP or some other core file where the error eventually happens. So what do you do? For code within your control, you want to make sure that there's no random white spaces. So you'll want to delete white spaces between PHP tags as well as at the beginning of any files. You'll want to do the same thing for WP config and the other theme or customization that you've made. If that doesn't work then it's time to do the basic troubleshooting steps. Disable your plugins and bring them back one by one
>
> **[1:36](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/cannot-modify-header-error?u=76281980&t=96)** and do the same thing for your current active theme. Bringing them back one by one should reveal which plugin is causing the error. Then you could reach out to the developer and ask for a fix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (6), [HTML](../../Skills/Web%20Development/HTML.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** php (6), http (1), html (1)
> **CLI Commands:** php (6), make (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Site running out of memory](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/site-running-out-of-memory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/site-running-out-of-memory?u=76281980&t=0)** - [Instructor] [WordPress](../../Skills/Web%20Development/WordPress.md) sites are super powerful these days, sometimes more powerful than the servers that run it. Running code takes memory, and servers set a maximum amount of memory that your code can use. Most of the time, this limit is much larger than you should need, but if you're doing something intense, or you're on cheap hosting, your site might run out of memory. To see how much memory your site is using, if you're using WordPress 5.2 or higher, you can go to Tools, Site Health, and then to Info, and check the server. Here, you'll see the [PHP](../../Skills/Software%20Development/PHP.md) memory limit, and what it's set to. If it's low, or you're routinely seeing the running out of memory error, you will want to increase the memory. You can do that by modifying your wpconfig file. Open it up and then write define wp_memory_limit
>
> **[1:09](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/site-running-out-of-memory?u=76281980&t=69)** and then set a new limit. Usually 256 megabytes, or 256M, is enough for most people. It's important to know that you will likely be constrained by your hosting company, if this works at all. Some hosts lock this down completely. If you are still getting the error, then you can try increasing the limit again, generally by powers of two, so we'll type in 512 here. But after a couple of times, you may be running against the limit of your current hosting plan, meaning that unfortunately, you'll need to upgrade.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** php (1)
> **Code Identifiers:** wp_memory_limit (1)
> **Env Vars:** php (1)
> **Versions:** 5.2 (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Execution limit exceeded](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/execution-limit-exceeded?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/execution-limit-exceeded?u=76281980&t=0)** - [Instructor] While you might not have memory issues, some scripts might take a long time to run. But in order to prevent one site from taking all of the resources for a long time, [PHP](../../Skills/Software%20Development/PHP.md) has a runtime limit. If you hit that, there's a couple of things you can do to fix it. Unlike memory limit an execution time limit doesn't necessarily use more resources all at once. But it does continue to hog the same resources for longer. And, usually, the default limit for execution is 30 seconds. After that, the server kills the script, and throws a fatal error. This is for good reason, long running scripts could eventually eat more resources and crash the site. There are four ways to solve the execution limit error. The first way you can do it is with a plugin. There's one called WP Maximum Execution Time Exceeded. You can install and activate that, and it will increase the execution time from 30 seconds to 300 seconds, no settings or configuration needed. Now, if you'd rather not use a plugin there are a few ways you can do it with code. The first which is effectively the same thing as the plugin would be in your wp-config file to add this line set_time_limit and then (300), meaning 300 seconds. The other two solutions are server specific
>
> **[1:38](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/execution-limit-exceeded?u=76281980&t=98)** and may not work depending on your hosting company. The first is to modify the htaccess file in your root [WordPress](../../Skills/Web%20Development/WordPress.md) directory to add this line. php_value space max_execution_time 300.
>
> **[2:01](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/execution-limit-exceeded?u=76281980&t=121)** The other thing that you could do, the last way to modify is with the php.ini file, which is basically a set of instructions for how PHP should run on your server. This requires some know-how, a server restart, and access to a file that you don't always have access to. If you can find the PHP file in your FTP program, or access it in your hosting panel, you can add this line, max_execution_time = 300. Of course your hosting company may limit this too. So reach out to them, if you are still having trouble.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (4), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** php (4), find (1)
> **Code Identifiers:** max_execution_time (2), set_time_limit (1), php_value (1)
> **Env Vars:** php (3), ftp (1)
> **File Paths:** php.ini (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Using WP-CLI to solve your WordPress problems](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/using-wp-cli-to-solve-your-wordpress-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/using-wp-cli-to-solve-your-wordpress-problems?u=76281980&t=0)** - [Instructor] While not related to a specific problem, sometimes fixing [WordPress](../../Skills/Web%20Development/WordPress.md) is best done from outside the dashboard. That's where WP-[CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) comes in. So here's how it works. WP-CLI is a command line interface to work directly with your WordPress installation. Sometimes errors will lock you out of your dashboard or solutions won't run as efficiently, but because WP-CLI isn't bogged down by a GUI, it can perform certain tasks more efficiently. I once had to delete millions of spam comments but the dashboard kept crashing. I was able to do it thanks to WP-CLI. So what can you do with WP-CLI? Anything you can do with the WordPress dashboard and more. This could be update or disabled plugins, delete spam, update the WP Config file, and much, much more. When you are stuck outside the dashboard, it might be worth trying to use WP-CLI to solve your problems. If you want to learn more, you can check out my course all about WP-CLI in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (7), [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** cli (7), gui (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshoot-and-repair-your-wordpress-website/next-steps?u=76281980&t=0)** - Congratulations, you've gotten a clear overview of some common [WordPress](../../Skills/Web%20Development/WordPress.md) issues and how to solve them. I recommend you bookmark this course and revisit it for when you experience these issues in the real world. If you want to continue your WordPress journey you should check out the Become a WordPress Developer learning path. You can all also check out the Learning [PHP](../../Skills/Software%20Development/PHP.md) course to get a deeper understanding of PHP, if you'd like. Finally, I'd love to hear from you about how you're using WordPress. You can always find me on Twitter, @jcasabona. If you'd like to learn more from small business owners and creators, check out my podcast, How I Built It over at howibuilt.it. Thanks so much for watching. And until next time, get out there and build something.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [PHP](../../Skills/Software%20Development/PHP.md) (2)
> **CLI Commands:** php (2), find (1)
> **Env Vars:** php (2)
> **Speakers:** - congratulations (1)


## Instructor

- [Joe Casabona](../../Instructors/Web%20Development/Joe%20Casabona.md)

## Skills Covered

- WordPress

## Path Context

### In [Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)
← [WordPress- Staging a Site](WordPress-%20Staging%20a%20Site.md) | **10 of 10**

## Appears In

- [Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)

## Related Courses

_Courses sharing skills:_

- [WordPress- Accessibility](WordPress-%20Accessibility.md) — WordPress
- [WordPress- Speeding Up Your Site](WordPress-%20Speeding%20Up%20Your%20Site.md) — WordPress
- [WordPress- SEO](WordPress-%20SEO.md) — WordPress
- [Wordpress Ecommerce](Wordpress%20Ecommerce.md) — WordPress
- [WordPress- REST API](../Cybersecurity/WordPress-%20REST%20API.md) — WordPress

---

[↑ Back to top](#)