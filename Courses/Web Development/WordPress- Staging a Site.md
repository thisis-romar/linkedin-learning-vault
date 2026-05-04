---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wordpress-staging-a-site
url: "https://www.linkedin.com/learning/wordpress-staging-a-site"
duration_minutes: 48
duration: 48m
level: Intermediate
updated: 4/4/2025
learners: 4573
skills:
  - Staging to Live
  - Wordpress Development
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF5achG5lqJSg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1646680400511?e=2147483647&amp;v=beta&amp;t=ge3URsuajV5fWmMo9tqRLzHBxClATHqwk_P6mF9FRHc"
linkedin_topic: Web Development
learning_paths:
  - '[Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)'
prev_courses:
  - '[JavaScript Essential Training](../Software%20Development/JavaScript%20Essential%20Training.md)'
next_courses:
  - '[Troubleshoot and Repair Your WordPress Website](Troubleshoot%20and%20Repair%20Your%20WordPress%20Website.md)'
path_nav: '[{"path":"Getting Started with WordPress","position":9,"total":10,"prev":"JavaScript Essential Training","next":"Troubleshoot and Repair Your WordPress Website"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/staging-to-live
  - skill/wordpress-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/WordPress-%20Staging%20a%20Site.md)

![WordPress: Staging a Site](https://media.licdn.com/dms/image/v2/C560DAQF5achG5lqJSg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1646680400511?e=2147483647&amp;v=beta&amp;t=ge3URsuajV5fWmMo9tqRLzHBxClATHqwk_P6mF9FRHc)

# WordPress: Staging a Site

> Using a staging site is typical for more high-level WordPress users, but not as common for beginners. However, learning how to use one from the beginning of your journey with WordPress can mean a smoother process overall, and is a big step on the path from a beginner to an intermediate WordPress user. In this course, Allie Nimmons covers why, how, and when to use a staging site. Allie focuses on t

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site) | 48m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Curtain call for WordPress: Why staging your site matters](#curtain-call-for-wordpress-why-staging-your-site-matters)
- [**1. What Is a WordPress Staging Site?**](#1-what-is-a-wordpress-staging-site) (3 videos)
  - [Defining a staging site](#defining-a-staging-site)
  - [Pros of using a staging site](#pros-of-using-a-staging-site)
  - [Cons of using a staging site](#cons-of-using-a-staging-site)
- [**2. How to Create a WordPress Staging Site with Plug-Ins**](#2-how-to-create-a-wordpress-staging-site-with-plug-ins) (4 videos)
  - [WP Staging](#wp-staging)
  - [WPVivid Backup](#wpvivid-backup)
  - [All-in-One WP Migration plug-in](#all-in-one-wp-migration-plug-in)
  - [Duplicator](#duplicator)
- [**3. How to Create a WordPress Staging Site with Local Tools**](#3-how-to-create-a-wordpress-staging-site-with-local-tools) (2 videos)
  - [Local by Flywheel](#local-by-flywheel)
  - [DevKinsta](#devkinsta)
- [**4. How to Create a Staging Site with Hosting**](#4-how-to-create-a-staging-site-with-hosting) (3 videos)
  - [SiteGround](#siteground)
  - [Bluehost](#bluehost)
  - [WP Engine](#wp-engine)
- [**5. How to Manually Create a Staging Site**](#5-how-to-manually-create-a-staging-site) (2 videos)
  - [Warnings and precautions](#warnings-and-precautions)
  - [Walk-through](#walk-through)
- [**6. Using a Staging Site**](#6-using-a-staging-site) (5 videos)
  - [Staging site best practices](#staging-site-best-practices)
  - [Preflight checklist](#preflight-checklist)
  - [Syncing content](#syncing-content)
  - [Switching from staging to production](#switching-from-staging-to-production)
  - [Post-switch checklist](#post-switch-checklist)
- [**7. Troubleshooting Common Issues with Staging Sites**](#7-troubleshooting-common-issues-with-staging-sites) (3 videos)
  - [Caching issues](#caching-issues)
  - [Error page when viewing staging site](#error-page-when-viewing-staging-site)
  - [Staging redirects to live site](#staging-redirects-to-live-site)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Curtain call for WordPress: Why staging your site matters](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980&t=0)** - [WordPress](../../Skills/Web%20Development/WordPress.md) is one of the fastest growing CMS platforms on the web. It's amazing how many websites are created with WordPress every single day, but what you may not know is that in order for a WordPress site to be truly successful, having a staging site is crucial. So together, we're going to learn about staging sites, the key to a smooth website launch and safe website maintenance. We'll cover everything from what a staging site is, how to create one, how to use one to keep your site up to date, and everything in between. The goal is to make sure that you can dive into your WordPress build or maintenance journey with confidence. I'm Allie Nimmons, and I've been working with WordPress since 2015. If you're ready to get started building a successful staging website, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (5)
> **CLI Commands:** make (1)
> **Env Vars:** cms (1)
> **Speakers:** - wordpress (1)


### 1. What Is a WordPress Staging Site?

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining a staging site](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=0)** - [Instructor] In order to learn how to set up and use a staging site, we should first fully understand what a staging site is. A staging site is a clone or copy of your website. It's identical to how it looks and how it works, although some live features like payment processing might not work on the staging site for security reasons. Some people use a staging site to build their site before launching it. Then they'll copy it and publish the copy live to their audience. You might make a copy of your live site and use it as a staging site after it's published. Either way, a staging site is identical to your live site, and it's where you test changes or fix bugs. If you have ever been nervous about editing your site because you don't want visitors to see what you're doing, a staging site is a perfect solution. It can also be called a test site or a dev site. The entire site, meaning the site files and database, might be called the staging or dev environment. Anyone can build and operate a staging site, from marketers and content managers to developers and software engineers.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Pros of using a staging site](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=0)** - [Instructor] There are so many benefits to using a staging site with [WordPress](../../Skills/Web%20Development/WordPress.md). In my opinion, the pros far outweigh the cons. If you update your website consistently with new changes, a staging site is perfect. You may want to add a new content section, or an entirely new page. Maybe you want to publish a new blog post with a specific layout. You can use the staging site to view content changes and make sure they're perfect before publishing them live. People can still browse your site and not see areas that are under construction or pieces that are moving around unexpectedly. Testing updates is a prime example of why you'd want to use a staging site. When updating WordPress core software, plugins, or themes, sometimes, things can go wrong. Maybe it's something as simple as a broken short code, or maybe it's something as major as a plugin conflict that crashes the site. When you use a staging site to perform updates first, you can anticipate or prevent those kinds of conflicts all together. Since your staging site is identical in almost every way to the live site, you can feel more than prepared when performing updates and never worry about crashing a live site. If you notice a problem on your live site, use a staging site to work on a fix. You can troubleshoot on your staging site confidently because if for some reason in the course of troubleshooting, you make things worse, this won't happen on your live site. Personally, when I build a new website, I prefer to build it on a staging site.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=95)** This is a pro for me, because I can build a landing page or a splash page on the real URL while working on the site somewhere else. Staging sites are especially helpful for redesigns. There is nothing worse than needing to take down your site when you know people still want to visit it. If you use a staging site for a redesign, you can take your time building your new site, and still conduct business through your live site. And then when you're ready, you can make the switch and lose on almost no time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Env Vars:** url (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Cons of using a staging site](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=0)** - [Instructor] There are a few challenges you might face when setting up or using your [WordPress](../../Skills/Web%20Development/WordPress.md) staging site. Don't let these challenges deter you from using one, but instead, use this information to prepare. Overall, there are three basic drawbacks to using a staging site. It'll take you longer to perform updates and changes, since you'll need to do them on a staging site first, and then sync those changes. It can be faster to just update a live site. Number two is cost. Some hosts or website managers will charge an extra fee for a staging site service, especially if you have a very large site. A staging site can take up a lot of space on a server, which you might need to pay extra for. And third is the fact that staging sites are not always perfect. Due to caching or other settings, a staging site might not always be a perfect copy of your live site, and as a result, your testing might not always be flawless.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 2. How to Create a WordPress Staging Site with Plug-Ins

[↑ Back to Table of Contents](#table-of-contents)

#### [WP Staging](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=0)** - The WP STAGING [WordPress](../../Skills/Web%20Development/WordPress.md) plugin is an automated backup solution that has a built-in staging feature. If you need a robust plugin to help you set up your staging environment, WP STAGING is a great option. It's easy to start using, has a centralized dashboard, is a very beginner friendly, and offers personalized support. So let's talk about how to create a staging environment with WP STAGING. On the plugins page, search for WP STAGING. When you find it, install and activate the plugin. You'll be redirected to the main staging sites page. You can get started immediately with creating the staging environment. Choose the button that reads Create New Staging Site. The plugin automatically selects all files and database tables. It's best to leave these settings as they are. Choose Start Cloning, and wait until the progress bar completes. Now you can access the staging site using the same credentials as your live site. When you choose open staging site you'll see a bright orange bar at the top of the dashboard. Make sure you see this when working to ensure that you're actually making changes to the staging site and not the live site. If you're unable to properly access the staging site, WP STAGING has an excellent knowledge base you can check for help. Let's open up the staging site and add a new post. Now, when we want to push this change
>
> **[1:33](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=93)** to the live site, what do we do? Go back to your live site. Notice there's no orange bar at the top, On the WP STAGING staging site's page, find the update that you just made. It will always be at the top. Choose Actions, then push changes. You can also use this menu to open the staging site, update it, meaning make it match the live site, reset it and delete it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** staging (6)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** set up (1), install (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Best Practices:** it's best to (1)

#### [WPVivid Backup](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=0)** - [Instructor] The WPvivid [WordPress](../../Skills/Web%20Development/WordPress.md) plugin is a free backup plugin that also has a staging feature. So if you're looking for a beginner-friendly and easy to use plugin for creating staging sites, look to WPvivid. Let's talk about how to create a staging site environment with WPvivid. Remember that it's free to create a staging site with this plugin, but you'll need to upgrade to their Pro plan in order to push changes from [Staging to Live](../../Skills/Web%20Development/Staging%20to%20Live.md). On the Plugins page, search for WPvivid. When you find it, Install and Activate the plugin, then go to the Staging sub-page within the WPvivid Backup menu option. You'll have two main options. One is to Create a Staging Site or a copy of your existing site with the content you already have. You can also create a Fresh empty WordPress install for your staging site. This second option might be better if you're planning a redesign and you want to start from scratch. For now, let's look at the first option. Click the Create a Staging Site button. Unless you have a good reason and feel comfortable changing them, leave all the settings as they are, then choose Create Now. Confirm within the browser, and let the plugin do its thing. Once it's done, you'll find that the page has updated to show you information about your new staging site. Tap the staging site URL, and login using the same credentials you used for the live site.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=97)** When logged in, you'll find there's a big orange bar across the top, which is meant to remind you that this is the staging site, not the live site. Now you can start making changes. Once you're happy with your changes and want to push live, go back to the WPvivid Backup staging page in the live site, remember, no orange bar. Choose Copy the Staging Site to Live, again, you'll need Pro for this, and your content will swap over.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Staging to Live](../../Skills/Web%20Development/Staging%20to%20Live.md) (1)
> **Prerequisites:** you'll need (2), install (2)
> **CLI Commands:** find (3)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [All-in-One WP Migration plug-in](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=0)** - [Instructor] The All-In-One Migration [WordPress](../../Skills/Web%20Development/WordPress.md) Plugin is a migration plugin that enables you to create a staging site as well. It's a slightly more complex option that requires a little more technical knowledge. It's a free plugin, and you can completely export your website files and database, and the tool uses a drag and drop interface, which can be very easy to learn. Let's talk about how to create a staging environment with All-In-One Migration. So this method is a little bit different from the previous options. There is no automatic staging site option, but we can still use this plugin to create a staging site. Go to your backups and make one. Download the backup to your computer. Now go to your hosting account, go to Domain, and then Subdomains to create a subdomain. You can use something like staging or testing or whatever you want at the beginning of your root URL. Launch a new WordPress install by choosing Create with that subdomain. And now, once you have the new WordPress install, install the All-In-One WP Migration Plugin to that site. Then visit the Import Page within the plugins sub menu. Drag and drop the backup that you just made into this designated area. Now you have a staging site that you can use to make changes based on your previous website.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=94)** When you're happy with the updates, do this process again, but in reverse. Make a backup of the staging site, then import it onto the live URL. This is a more roundabout, less automatic way to create a staging website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **UI Navigation:** go to (3), drag and drop (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Prerequisites:** install (3)
> **Env Vars:** url (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Duplicator](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=0)** - The Duplicator Pro [WordPress](../../Skills/Web%20Development/WordPress.md) plugin is a great paid option for making a quick copy or duplicate of your WordPress website which can then be saved as a backup, or used to create a staging website. To get started, search for the Duplicator Plugin on your plugin screen. Install it and activate it. Go to packages, then create new. This will create a new package, which is really just a copy of your site and its files and database. Name the package. It's a good idea to use the date and maybe some kind of descriptor. For example, maybe you're doing a big summer overhaul of your website. Indicate in the title what the purpose of this package is. Click next and Duplicator will scan your site to make sure that it's ready to be duplicated. The next page will show you the results of your scanned website. You may see an error or some kind of notice. In some cases you can proceed, but some errors may cause an issue. So if you see an error or a notice, decide whether or not you want to resolve it or just go ahead with the build process. Here, I'll go ahead. Click yes, then click build. After a few moments of building, Duplicator will show you the package you've just built. Click one click download to download the site to your local environment. Duplicate requires something called an installer script, which you'll be prompted to download this first time.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=95)** And once it's downloaded, you can go ahead and install the package. Congrats, you now have a copy of your site. So to add it or staging environment, create that new environment on your host or locally on your machine, access the new sites files, and then go to the public _HTML folder. Within that folder upload the installer and the site files that you just downloaded. It should look something like. Go to your website's URL, then add slash /installer.[PHP](../../Skills/Software%20Development/PHP.md). There will be a handy wizard here to help you add the old site files to your new install. Next, add the database credentials, then run deployment. Wait a few minutes, then run the update for the site URLs. Once completed click test site to see the site in its entirety. Now that you're done, you will have one version of your site, which you can work with that won't affect your main site. If you run into any issues with the Duplicator Pro plugin, contact their support or visit their documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **UI Navigation:** go to (3)
> **Prerequisites:** install (3)
> **CLI Commands:** make (1), php (1)
> **File Paths:** installer.php (1)
> **Env Vars:** url (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)


### 3. How to Create a WordPress Staging Site with Local Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Local by Flywheel](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=0)** - [Narrator] Local by Flywheel is a free local tool, which means it lives on your computer rather than on your website or on your server. And it allows you to set up a staging site with just one click. You can work on your staging site offline on your computer whenever you want. This is a great option if you just need an area in which to test things. If you use Flywheel or WP Engine hosting, you can push your staging site built with Local to a live environment that exists on one of those hosts. I use Local by Flywheel quite a lot, and it's personally my favorite way to work with a staging site. So let's talk a little bit about how to create a staging environment with Local by Flywheel. After downloading Local from Flywheel's website, open up the application. It'll look somewhat like this. Click the large plus icon at the bottom left of your screen to create a new website, or the CREATE A NEW SITE button in the center of the screen. You can name the site whatever you like. If this is the first time that you're creating a site, use the preferred environment settings. If you need to use a specific [PHP](../../Skills/Software%20Development/PHP.md) version, web server, or database option, you can add those in the custom area. Set the username, password, and email address that you'd like to use for the administrator account. Just make sure that you save this information in a safe place so that you can remember it later. Flywheel will get to work building the site right away.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=94)** You might be asked to authenticate the user account on your computer. Once the site is done, you should see a screen that looks something like this. Now, to start editing or building the site, choose ADMIN. Use the logins that you just created, and you can get started editing your site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Env Vars:** create (1), site (1), php (1), admin (1)
> **CLI Commands:** php (1), make (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [DevKinsta](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=0)** - [Instructor] DevKinsta is a new, free local [Wordpress Development](../../Skills/Web%20Development/Wordpress%20Development.md) suite that works for free on your local machine. This is a great option if you already host your website with Kinsta. So let's talk about how to create a staging environment with DevKinsta. After downloading the tool from Kinsta's website, open up the application, it should look something like this. If you're just starting to build, choose to create a brand new [WordPress](../../Skills/Web%20Development/WordPress.md) site. You can also import from Kinsta, which is a good option if you've already built a site that is hosted with Kinsta and you want to add a staging version. Or you can create a custom site. We don't really need to worry about that option right now. First let's create a new WordPress site. We need to name it. I'll use staging website and we need to enter a secure admin username and password. DevKinsta might take a moment or two, but when it's done, you'll have a fresh WordPress install. Open the site or go to the WordPress admin to begin building. Once the site is built to your liking, come back to the screen and select push to staging. This will create a staging environment with your new changes. Log in using your Kinsta hosting credentials. DevKinsta will will push the local version of your site onto your staging environment on your host. You'll then need to use my Kinsta
>
> **[1:33](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=93)** in your browser to push the staging version live. Probably the biggest benefit of using my Kinsta versus just your in browser staging environment is that you can work offline without an internet connection. When you connect to the internet again, you can push those changes to the staging site that exists on your host. Say you already have a Kinsta website. You can go back to the home screen and select import from Kinsta instead. Log into your existing Kinsta account and select the site that you want to pull onto your local environment. It's as easy as that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [Wordpress Development](../../Skills/Web%20Development/Wordpress%20Development.md) (1)
> **UI Navigation:** open the (1), go to (1), select the (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 4. How to Create a Staging Site with Hosting

[↑ Back to Table of Contents](#table-of-contents)

#### [SiteGround](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=0)** - [Instructor] SiteGround hosting allows you to set up a staging environment using their built-in tools. If you already use SiteGround to host your site, this is a great option. Once logged in, navigate to the site tools area of your account and it should look something like this. Go to [WordPress](../../Skills/Web%20Development/WordPress.md) and then Staging. Add a staging name, it should be something very clear, but concise like staging or testing. If you're making the staging site for a very specific purpose, like to test a specific functionality or for a redesign, name the copy appropriately. You might end up with more than one copy of your site, and it will help to have descriptive names. Wait a moment, and SiteGround will create the staging account for you. Click on the name of the site when it appears, and you'll be taken to the staging site. Notice the new URL at the top. Add WP admin to log in using the same logins you would use for the live site. You can also click the Login button in the site tools to be logged in automatically. SiteGround gives you some options as well. After making changes to your staging site, you can choose Full Deploy, this will replace your live site with a copy of your staging site. You can also choose Custom Deploy, which will give you options of which files to copy over to the live version. You can choose to destroy the staging site entirely, replicate it, or make a second staging site directly from this one, or just rename it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **UI Navigation:** navigate to (1), go to (1), click on (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Bluehost](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=0)** - [Instructor] Bluehost hosting accounts allow you to set up staging environments using their built-in tools. If you already use Bluehost to host your site, this is a great option. If you host somewhere else, chances are there's a staging option for you there. Just ask your support team. Begin by opening up your [WordPress](../../Skills/Web%20Development/WordPress.md) site that's hosted with Bluehost. Select the Bluehost menu, then Staging. Create a staging site using the button on this page. Wait a few moments and Bluehost will build your staging environment for you. If you make changes to your live site and want to update the staging one to match, choose Clone to Staging. Work on your staging site by selecting it. You'll know it's the staging site and not the live site by the red label at the top of your dashboard. After you've made changes, select Deploy all Changes in order to push those changes to your live site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [WP Engine](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=0)** - [Instructor] WP Engine hosting accounts allow you to set up staging environments using their built-in tools. If you already use WP Engine to host your site, this is a great option. You'll start in the WP Engine dashboard. You'll need to create your production site and staging site from this dashboard. Choose Add site, choose Start with blank site, then, choose Production site, and name it. Now, do the same thing over again, but select Staging site this time. It may take a few moments for your environments to finish being built. When they're complete, you'll get an email with the URL, admin login, and username. Go to the site page in your WP Engine dashboard, and you'll see both sites listed. Select your staging site's name, then choose WP Admin. Begin building out your site from here. When you want to push your staging changes live, go back to the sites list, and select staging. Select the copy environment button in the top right hand corner. Make sure that you select Staging first, then Production. And when you want to sync the production site to the staging site, you'll swap the order. Click Review, and then confirm. You'll get another email
>
> **[1:33](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=93)** when that process is complete.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), select the (1)
> **Prerequisites:** set up (1), you'll need (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. How to Manually Create a Staging Site

[↑ Back to Table of Contents](#table-of-contents)

#### [Warnings and precautions](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=0)** - [Instructor] Creating a staging environment manually without the help of a plugin or hosting tools is absolutely possible with a bit of knowhow and practice. But as is the case with manipulating code there are a few things to be wary of when doing so. Let's touch on some warnings and precautions so that you can build your staging site from scratch confidently. Take a full backup of your live site before you do anything and make sure that you know how to restore it. Mistakes do happen even to highly experienced developers. So it's a good idea to have a backup plan. Make a list of all the changes that you want to make. So you only have to do this once. It would be a huge pain to forget something, finish the entire process, and then have to spend the time to do it all over again. Know that throughout the walkthrough, your screen might look different than mine and that's okay. Some interfaces and tools might become outdated but all the options should still be available to you if you look around. If you get stuck and can't find a certain area or setting, contact your hosting support team.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Speakers:** - [instructor] (1)

#### [Walk-through](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=0)** - [Instructor] All right, so now that we are armed with all those warnings, we can walk through the steps to manually create a staging site. This option is best for someone who is already somewhat familiar with editing code files, but if you want to learn how to do this and you have minimal coding experience, I fully believe that you can do it. I fully believe you can do it. No matter what hosting account you use, you should have the ability to set up a staging environment using a subdomain. I recommend this method if you really don't want to use a plugin but want to complete the process manually instead. First, create a subdomain through your cPanel or site tools. Log into your hosting account and navigate to one of those areas. This is my site tools area. Find the subdomain section and then name your subdomain. It should be something clear like staging or something like testing is good too. If you're making the staging site for a specific purpose, like to test a specific functionality or for a redesign, name the copy appropriately. You may end up with more than one copy of your site, and it'll help if you have descriptive names. Once you've chosen your name and clicked Create, we now need to create an FTP account for the subdomain we just made. This step ensures that the files for this site have their own designated place to live on the server, and they won't get mixed up with another site. So find the FTP Accounts section and then enter account details as you're asked. So I'll use the same thing, testing, and add a password,
>
> **[1:37](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=97)** and then choose Create. Make sure to save this information in a secure place before you move on. Now, we just have to upload the [WordPress](../../Skills/Web%20Development/WordPress.md) files to the staging site. You can do this by going to [wordpress.org](https://wordpress.org) and downloading the latest available version of WordPress. Now you'll need to use the account details from the last step in order to log into FTP. You can do this using a free file manager tool like FileZilla, which is my personal favorite, but there are lots of other options out there. Once you've got that application open, it should look something like this. Log in with the FTP credentials you created in the previous step. On one side, you'll see your computer files. Find the WordPress folder you just downloaded. On the other side, you'll see the staging folder you just made within your host. Upload the WordPress files to your staging site. Now, we need to make sure that the staging site is a true copy of the live site. This is optional. If you're creating a staging site without having a live site first, you can skip this step, as well as the next one. On the host side, find your live website, navigate to the wp-contents folder. Inside it, grab the uploads, themes, and plugins folder, and add them to your computer. Go back to your staging environment folder, find the wp-contents folder there,
>
> **[3:11](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=191)** and put those folders that you just grabbed back into that site. It may take some time to update, so be patient. Our next step is to export and import to the live site database. Again, you can skip this step if you're creating a brand new environment with no live site to base it on. Log into your live site and go to the Plugins page. Go to Add New, and search for WP Migrate DB. Install and activate the plugin. Then, go to Tools, Migrate DB. Go to the Migrate tab. It's very important to make sure the links are accurate to the environments you created. When this matches up, choose Export. This will download a file to your computer, and once that's done, you want to go back to your host, choose [MySQL](../../Skills/Software%20Development/MySQL.md) and Create a Database. Now, create a user. Make sure to save the database name, the username and this password in a secure place before moving on. Next, add the user to the database by selecting this little icon, choosing the database that we just made, and then choosing Confirm. Finally, go to phpMyAdmin, and on the left-hand side, you should see the database that we just made. Next, add the user to the database
>
> **[4:48](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=288)** by selecting each one and clicking Add. Now, go to phpMyAdmin, and on the left, you'll see the database you just made. Find Import. Then click Choose File. Find the file on your computer that you just downloaded from your live site via that plugin, and upload it. Click Go, and we're done with this step. We're almost finished. The next step is to edit the wp-config file to point to the new database. Back in FTP, open up the wp-config file that exists in your staging site. Add the database details and username. Then save the file. The final step is to log in and restrict access to your staging site. You should be able to go to your staging site URL and log in with the exact same credentials that you would use on the live site. If you can't, move ahead in this course to the Troubleshooting Steps. But if it does work, you need to restrict access to this website by going to Settings and then Reading. Make sure that the Discourage search engines from indexing this site option is checked. That way, if someone searches for your site or your business on [Google](../../Glossary/Service/Google.md), Google won't list this staging site as a result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (5), [Google](../../Glossary/Service/Google.md) (2), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **CLI Commands:** find (7), make (5), mysql (1)
> **UI Navigation:** go to (7), navigate to (2)
> **Env Vars:** ftp (5), url (1)
> **Code Identifiers:** phpmyadmin (2), cpanel (1)
> **Prerequisites:** set up (1), you'll need (1), install (1)
> **Cross-References:** go back to (2)
> **Best Practices:** make sure to (2)


### 6. Using a Staging Site

[↑ Back to Table of Contents](#table-of-contents)

#### [Staging site best practices](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=0)** - [Instructor] Now that you know how to create a staging site, we're going to talk about how to use it in the long term. We'll start with some best practices. Keep these things in mind and teach them to anyone who will be updating your website using that staging environment in the future. Number one, take backups. Always take full backups before making changes and before deploying staging changes. That means you back up [WordPress](../../Skills/Web%20Development/WordPress.md) core files, theme and plugin files, media files, and database files to a safe location. There are tons of low-cost tools out there to help you with this. Plugins like UpdraftPlus or third party tools like ManageWP are popular options. Two, don't push the staging database. Don't push the staging database to your live site. This could overwrite or wipe your production data, and this means losing tons of potentially vital information for your website. For example, if you have an [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) store, accounts and purchase data are going to be stored in the database, and this is not information you want to compromise. Three, disable emails. Always make sure to disable emails when you're working in a staging site. There are various ways that you can do this in order to prevent flooding your inbox or your client's inbox with unnecessary messages. Use the free disable emails plugin by WebAware to stop the site from sending emails. If you need to test email notifications as a part of your staging site activities, use the free email log plugin by Sudar.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=96)** The emails will still be blocked from going out, but at the same time, the email log plugin will track what emails would have gone out. Four, restrict access. Do not give any public access to the staging environment. The staging environment is a private sandbox just for you and your team to work in. Make sure you've blocked search engines from indexing the staging site detailed out in the previous video, and don't give access to the staging site to anyone who does not need it. Five, disable the cache. While making changes in staging, remember to disable your cache. Caching is a process that stores information to a user's browser so that the site can load more quickly. It can help with site performance, but it can also hinder certain changes from appearing when you're testing or updating. Staging sites don't need to be 100% optimized since visitors aren't going to be using them. Use a caching plugin to disable caching while making changes. Then re-enable caching if you're doing performance or conflict testing. Six, disable any auto updates. WordPress allows you to enable automatic updates for themes and for plugins. While this can come in handy sometimes, it's important to make sure that auto updates are disabled when using a staging site. One of the benefits of having a staging site is using it to test updates before performing them on a live site. Automatically updating software on your staging
>
> **[3:09](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=189)** or live site is going to make that whole process pointless. And finally, seven, keep a log. If you use your staging site to test or push changes only every once in a while, then this step might not be necessary. But if you're using it frequently and for lots of different reasons, keep a simple log somewhere. This log should include the date and time that you changed or deployed your staging site. It should include a rough summary of the things that you did, and if any problems occurred, log that too. Having this kind of record on hand can help you keep track of changes, share information with your team, and potentially track back any mistakes made any versions ago.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Best Practices:** always make sure (1), remember to (1)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Preflight checklist](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=0)** - [Instructor] We're almost there. In order to make the process as simple and as smooth as possible, let's go over a checklist of tasks that you can do before you use your staging site. These steps are going to ensure that you minimize the risk of something going wrong. When you sync content or switch from staging to production, maybe make a note of things on this checklist, keep it handy and share it with your team to review before making changes. I've said it before, and I'll say it again, and probably a few more times. Take a full backup of the entire site. That means files and database before making changes to staging or live sites. This is especially important before you push changes from one to another. Update your log with the changes that you've made. This way, if something does go wrong, you'll have a quick reference of what you've done. You may want to update your team, especially if this is a large push or something that will change the way the site works. If you're doing this for the first time, it might be good to make sure that you have a developer on hand to call, just in case you need their help with troubleshooting.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Syncing content](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=0)** - [Instructor] It's possible that while you were working on your staging site, changes were made to your live or production site. It's important that the two sites remain in sync as much as possible. If not, you could push changes from [Staging to Live](../../Skills/Web%20Development/Staging%20to%20Live.md) and accidentally overwrite important changes that were made to the live site. So for example, say your live site is an eCommerce shop. As new sales come in, the live site will be updated with that new sale information and customer information. You don't want to overwrite that data, when you update your plugins, so it's important that you have automatic synchronization for when those kinds of changes occur. You can sync your live site with the staging site in a few ways. Probably the best option for beginners is to use a plugin. There are tons of good plugins out there, like Snapshot Pro, WP Migrate DB Pro, WP Sync DB, VersionPress, and more. They all basically do the same thing, but in slightly different ways. Do some research, read some reviews to determine which plugin will work best for you. If you're already using a plugin for your staging site, chances are that plugin can already help you with synchronization. You can also utilize [MySQL](../../Skills/Software%20Development/MySQL.md) synchronization tools. Find a good MySQL [Database Management](../../Topics/Database%20Management.md) tool that offers database import, export, and or synchronization facilities. Examples include MySQL workbench, Symmetric's DS or MySQL Replication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MySQL](../../Skills/Software%20Development/MySQL.md) (4), [Staging to Live](../../Skills/Web%20Development/Staging%20to%20Live.md) (1), [Database Management](../../Topics/Database%20Management.md) (1)
> **CLI Commands:** mysql (4), find (1)
> **Code Identifiers:** ecommerce (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Switching from staging to production](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=0)** - [Instructor] The activity that you'll probably be performing most often is moving content from your staging site to your production site. When you've tested a new update or designed a new page and everything looks good to go, it's time to go live with those changes. As we discussed in chapters two, three, and four, switching from staging to production can be as simple as pushing a button. In most cases, the fastest and safest way to do it is utilizing a plugin, or your built-in site tools, even if you built your staging environment manually. But let's say you want to cut back on plugins and do it all yourself. How do you update your live site if you don't have an automated tool? This could get a little tricky, so make sure you take backups of both your live and staging site before you begin. Remember, a [WordPress](../../Skills/Web%20Development/WordPress.md) site is made up of two sets of files, your WordPress files and your database files. We need to download the staging versions of both so that we can upload them onto the live environment. Step one is to download the WordPress files from your staging site, either through your cPanel, or through an FTP client. Wait a few minutes for the WordPress files to be downloaded to your local environment. Step two is to download the WordPress database. Log into your hosting account and find phpMyAdmin. There will be a menu on the left-hand side that lists the [Databases](../../Skills/Software%20Development/Databases.md) of sites on your host. You should see both your staging
>
> **[1:31](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=91)** and live site databases here. Click on the staging database to select it. Select export, quick, go. This downloads your database for the staging site and saves it onto your computer. Step three is to point your wp-config file to the live database. Open the public [HTML](../../Skills/Web%20Development/HTML.md) folder you downloaded as a part of the staging WordPress files, and locate the wp-config file. Open it up in a file editor. Find the database name, user, and password. Replace them with the name, user, and password that applies to your live site database, and save those changes. Step four is to upload the staging files to your host. In your hosting account, open up phpMyAdmin again. Find and select the live site database this time from the left-hand side. Select import, and upload the staging database that you just saved to your computer. Now we have to upload the staging WordPress files to the live hosting environment. You can choose to do this again through your site tools, or through FTP. With either option, navigate to the public HTML folder for the live site. Remove any existing WordPress files, and then upload your staging WordPress files. And that's it. Your WordPress files are now updated. The final step here is to make sure that the staging URL is changed to the old one. Chances are you used a subdomain for your staging site,
>
> **[3:07](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=187)** and we need to make sure that when someone visits the live site, they see this new staging content. This is easily done with a plugin. Go to the plugins page, and install this plugin called Better Search and Replace. Select tools, Better Search and Replace. Next, in the search for option, write down the staging URL and in the replace with option, write down the live one. Scroll down and click run search and replace. And that's it. You have successfully migrated your WordPress sites to a new hosting account, and you've moved your old domain to a new one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (11), [Databases](../../Skills/Software%20Development/Databases.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **CLI Commands:** make (3), find (3)
> **Env Vars:** ftp (2), html (2), url (2)
> **UI Navigation:** click on (1), open the (1), select the (1), navigate to (1), go to (1)
> **Code Identifiers:** phpmyadmin (2), cpanel (1)
> **Exercise Files:** download the (3)
> **Prerequisites:** before you begin (1), install (1)
> **Cross-References:** we discussed (1)

#### [Post-switch checklist](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=0)** - [Instructor] We aren't done quite yet. Now that you've used the staging site to implement your changes, we need to make sure that everything went off without a hitch. Mistakes and unexpected results can sometimes occur, no matter how closely you follow directions. So let's go over a simple checklist of tasks to do after using your staging site. If you encountered any large errors and you noticed those right away, head on over to chapter 7. These steps we go through now are good for making sure that if something did go wrong that isn't immediately obvious. You can find and address it as soon as possible. Make a note of this checklist, keep it handy and share it with your team to review after making changes. First crawl, both the staging and live sites to make sure that all the pages look right and are functioning properly. Click around, make sure that, while you're on the staging site, all the links are linking to the right pages and the same for the live site. Test out any conversion paths on the live site to make sure that nothing broke. This might include signing up for something, running out a test purchase, or filling out a form. Next, test any third party integrations that are important for your site. So for example, a Zapier or payment or a tracking integrations should all still be working after going live. When you're satisfied that the staging push has gone well, make a backup of the live and staging sites, just in case. Now, pat yourself on the back
>
> **[1:33](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=93)** you have successfully pushed your staging site to live.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 7. Troubleshooting Common Issues with Staging Sites

[↑ Back to Table of Contents](#table-of-contents)

#### [Caching issues](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=0)** - [Instructor] Issues can sometimes occur when pushing your staging changes to your live site. Let's go over what caching issues look like and how you can troubleshoot them. Caching is the process by which static information about a website is saved, especially a website you visit often. Caching can happen on your site, on the browser, or on the server, depending on what kind of tools you have in place. Caching says, well, this font is always the same, and these colors here are always the same, so I'll remember that information and I won't waste time asking the server for that information next time the site is loaded. Caching is awesome for site speed, but it can mean issues when pushing changes live. Perhaps after going live with a change, your browser is still remembering the old static information. If your site is missing CSS styles or images after launch, maybe some of your pages updated, maybe some didn't. All of this means you should try to clear your cache. In order to clear the browser cache, make sure to check your live site on all browsers that you have access to because not all browsers will cache the same things. When you've isolated which browser is caching the wrong information, find the setting that allows you to clear the cache. So for example, in [Google](../../Glossary/Service/Google.md) Chrome, I can do this by going to history, then clear browsing data. I select the cache options and let it run. If this doesn't resolve the issue,
>
> **[1:37](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=97)** purge your site cache. Some staging plugins will allow you to easily clear the site cache after a launch. So check your staging plugin settings for that option. If you don't have a staging plugin, check to see if you have a caching plugin that's already installed. There are a ton of great free options in the plugin repository, and if someone else built your site for you, it's very possible that they added one for you in order to help with performance. Find the plugin settings and purge your cache there. If that doesn't resolve your issue, it's possible that you have caching enabled on your server. Log into your site hosting tools, then look for any areas that mention speed or caching. So for example, on my SiteGround account, I can go to speed, caching, dynamic cache, and then once there, I can choose to flush the cache for my website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** select the (1), go to (1)
> **Analogies:** for example (2)
> **Env Vars:** css (1)
> **Best Practices:** make sure to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Error page when viewing staging site](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=0)** - [Instructor] One of the most frustrating things that can happen when pushing a staging site live is discovering a page not found error, also called a 404 page, within your site that you didn't expect to find. What happened to the page and all its content? Not to worry, there are a few things that we can do to fix this error page pretty quickly. If you're using a staging plugin or hosting tools, check their FAQ or [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md). This is not an uncommon problem, and chances are you can find a solution there pretty quickly. If you can't find help there or if you set up your process manually, here's what to do. Go to WP admin, settings, permalinks. Make sure that the permalinks here match across both sites. Click two times on the save changes button; this will force [WordPress](../../Skills/Web%20Development/WordPress.md) to recreate all the links on your site just in case they got stuck on the wrong option. If this does not work, it's possible you have a CDN enabled that's causing the issue. Clean the CDN's cache and disable optimization settings. I can do this here in SiteGround by going to speed and then CDN. And if my CDN was active, I would be able to go ahead and clear that cache and disable the optimization settings. If this doesn't help, test to see if any of your installed plugins could be causing a conflict. Sometimes plugin settings can affect how URLs function or appear on your site,
>
> **[1:34](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=94)** so deactivate all the third-party plugins that you have installed and see if the problem still persists. If it doesn't, now you can narrow down which of the plugins is responsible by reactivating them one at a time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Customer Support](../../Skills/IT%20Help%20Desk/Customer%20Support.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** cdn (4), faq (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Staging redirects to live site](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=1)** - [Instructor] Sometimes your staging site may redirect to your live site, which is quite a problem, since it prevents you from making changes to the proper environment. So let's go over what we can do to fix it. First, let's get the obvious out of the way and make sure that you don't have any redirect plugins enabled. Redirect plugins are popular for tons of different reasons but they could be messing up your staging and production process. Look over your plugins page and disable any redirection plugin that you see to see if it resolves the issue. Next let's make sure that the URLs in [WordPress](../../Skills/Web%20Development/WordPress.md) are correct. Go to settings, general, and ensure that the WordPress address and site address are both correct. If you need to change them, but you can't do so, or if you change them and it doesn't update, go to your WP config file through your file manager. Find the lines that look like this and edit them to be correct. If that doesn't help, check your HT access file for any redirects. In FTP or your host site tools, open up your site files and find the HT access file. Open it up and look for any redirects that could be causing this issue. When building out your site, it's a good idea to use relative links, which look like this, instead of like this. When you use absolute links,
>
> **[1:35](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=95)** the site will honor that exact link, no matter what. But a relative link is going to plug in whatever the domain name is on this particular site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **CLI Commands:** make (2), find (2)
> **UI Navigation:** go to (2)
> **Env Vars:** ftp (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/wordpress-staging-a-site/next-steps-25334693?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/next-steps-25334693?u=76281980&t=0)** - Great job. We've reached the end. Thank you so much for going through this course with me. Now, you should be able to create your own staging site and begin using it to support your website goals. If you're interested in learning more about [WordPress](../../Skills/Web%20Development/WordPress.md), check out my "[WordPress Essential Training](WordPress%20Essential%20Training.md)" course. There is so much to learn and accomplish when it comes to WordPress, and your journey has only just begun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **Speakers:** - great (1)


## Instructor

- [Allie Nimmons](../../Instructors/Web%20Development/Allie%20Nimmons.md)

## Skills Covered

- Staging to Live
- Wordpress Development

## Path Context

### In [Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)
← [JavaScript Essential Training](../Software%20Development/JavaScript%20Essential%20Training.md) | **9 of 10** | [Troubleshoot and Repair Your WordPress Website](Troubleshoot%20and%20Repair%20Your%20WordPress%20Website.md) →

## Appears In

- [Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)

## Related Courses

_Courses sharing skills:_

- [Creating Block Patterns in WordPress](Creating%20Block%20Patterns%20in%20WordPress.md) — Wordpress Development
- [Building a WordPress Membership Site with Ecommerce](Building%20a%20WordPress%20Membership%20Site%20with%20Ecommerce.md) — Wordpress Development
- [Building a Headless WordPress Site with Gatsby](../Cybersecurity/Building%20a%20Headless%20WordPress%20Site%20with%20Gatsby.md) — Wordpress Development
- [WordPress- Everything about Plugins](../Cybersecurity/WordPress-%20Everything%20about%20Plugins.md) — Wordpress Development
- [WordPress Essential Training](WordPress%20Essential%20Training.md) — Wordpress Development

---

[↑ Back to top](#)