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
  - '[[Getting Started with WordPress]]'
prev_courses:
  - '[[JavaScript Essential Training]]'
next_courses:
  - '[[Troubleshoot and Repair Your WordPress Website]]'
path_nav: '[{"path":"Getting Started with WordPress","position":9,"total":10,"prev":"JavaScript Essential Training","next":"Troubleshoot and Repair Your WordPress Website"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/staging-to-live
  - skill/wordpress-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/WordPress-%20Staging%20a%20Site.md)

![WordPress: Staging a Site](https://media.licdn.com/dms/image/v2/C560DAQF5achG5lqJSg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1646680400511?e=2147483647&amp;v=beta&amp;t=ge3URsuajV5fWmMo9tqRLzHBxClATHqwk_P6mF9FRHc)

# WordPress: Staging a Site

> Using a staging site is typical for more high-level WordPress users, but not as common for beginners. However, learning how to use one from the beginning of your journey with WordPress can mean a smoother process overall, and is a big step on the path from a beginner to an intermediate WordPress user. In this course, Allie Nimmons covers why, how, and when to use a staging site. Allie focuses on t

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site) | 48m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (1 videos)
- **[[#2. 1. What Is a WordPress Staging Site?]]** (3 videos)
- **[[#3. 2. How to Create a WordPress Staging Site with Plug-Ins]]** (4 videos)
- **[[#4. 3. How to Create a WordPress Staging Site with Local Tools]]** (2 videos)
- **[[#5. 4. How to Create a Staging Site with Hosting]]** (3 videos)
- **[[#6. 5. How to Manually Create a Staging Site]]** (2 videos)
- **[[#7. 6. Using a Staging Site]]** (5 videos)
- **[[#8. 7. Troubleshooting Common Issues with Staging Sites]]** (3 videos)
- **[[#9. Conclusion]]** (1 videos)

### 1. Introduction

#### Curtain call for WordPress: Why staging your site matters
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980&t=0)** - WordPress is one of the fastest growing CMS platforms on the web.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980&t=4)** It's amazing how many websites are created with WordPress every single day, but what you may not know is that in order for a WordPress site to be truly successful, having a staging site is crucial.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980&t=16)** So together, we're going to learn about staging sites, the key to a smooth website launch and safe website maintenance.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980&t=24)** We'll cover everything from what a staging site is, how to create one, how to use one to keep your site up to date, and everything in between.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980&t=33)** The goal is to make sure that you can dive into your WordPress build or maintenance journey with confidence.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980&t=39)** I'm Allie Nimmons, and I've been working with WordPress since 2015.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-staging-a-site/curtain-call-for-wordpress-why-staging-your-site-matters-25337663?u=76281980&t=43)** If you're ready to get started building a successful staging website, let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** cms (1)
> **Speakers:** - wordpress (1)


### 2. 1. What Is a WordPress Staging Site?

#### Defining a staging site
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=0)** - [Instructor] In order to learn how to set up and use a staging site, we should first fully understand what a staging site is.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=7)** A staging site is a clone or copy of your website.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=11)** It's identical to how it looks and how it works, although some live features like payment processing might not work on the staging site for security reasons.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=20)** Some people use a staging site to build their site before launching it.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=25)** Then they'll copy it and publish the copy live to their audience.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=29)** You might make a copy of your live site and use it as a staging site after it's published.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=34)** Either way, a staging site is identical to your live site, and it's where you test changes or fix bugs.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=42)** If you have ever been nervous about editing your site because you don't want visitors to see what you're doing, a staging site is a perfect solution.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=50)** It can also be called a test site or a dev site.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=54)** The entire site, meaning the site files and database, might be called the staging or dev environment.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-staging-a-site/defining-a-staging-site?u=76281980&t=61)** Anyone can build and operate a staging site, from marketers and content managers to developers and software engineers.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Pros of using a staging site
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=0)** - [Instructor] There are so many benefits to using a staging site with WordPress.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=4)** In my opinion, the pros far outweigh the cons.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=8)** If you update your website consistently with new changes, a staging site is perfect.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=14)** You may want to add a new content section, or an entirely new page.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=18)** Maybe you want to publish a new blog post with a specific layout.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=22)** You can use the staging site to view content changes and make sure they're perfect before publishing them live.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=29)** People can still browse your site and not see areas that are under construction or pieces that are moving around unexpectedly.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=36)** Testing updates is a prime example of why you'd want to use a staging site.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=41)** When updating WordPress core software, plugins, or themes, sometimes, things can go wrong.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=48)** Maybe it's something as simple as a broken short code, or maybe it's something as major as a plugin conflict that crashes the site.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=55)** When you use a staging site to perform updates first, you can anticipate or prevent those kinds of conflicts all together.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=63)** Since your staging site is identical in almost every way to the live site, you can feel more than prepared when performing updates and never worry about crashing a live site.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=75)** If you notice a problem on your live site, use a staging site to work on a fix.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=80)** You can troubleshoot on your staging site confidently because if for some reason in the course of troubleshooting, you make things worse, this won't happen on your live site.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=90)** Personally, when I build a new website, I prefer to build it on a staging site.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=95)** This is a pro for me, because I can build a landing page or a splash page on the real URL while working on the site somewhere else.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=104)** Staging sites are especially helpful for redesigns.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=107)** There is nothing worse than needing to take down your site when you know people still want to visit it.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=112)** If you use a staging site for a redesign, you can take your time building your new site, and still conduct business through your live site.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-staging-a-site/pros-of-using-a-staging-site?u=76281980&t=121)** And then when you're ready, you can make the switch and lose on almost no time.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** else. (1), switch (1)
> **Definitions:** is a  (2)
> **Env Vars:** url (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Cons of using a staging site
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=0)** - [Instructor] There are a few challenges you might face when setting up or using your WordPress staging site.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=6)** Don't let these challenges deter you from using one, but instead, use this information to prepare.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=13)** Overall, there are three basic drawbacks to using a staging site.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=18)** It'll take you longer to perform updates and changes, since you'll need to do them on a staging site first, and then sync those changes.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=26)** It can be faster to just update a live site.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=29)** Number two is cost.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=31)** Some hosts or website managers will charge an extra fee for a staging site service, especially if you have a very large site.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=39)** A staging site can take up a lot of space on a server, which you might need to pay extra for.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=45)** And third is the fact that staging sites are not always perfect.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-staging-a-site/cons-of-using-a-staging-site?u=76281980&t=48)** Due to caching or other settings, a staging site might not always be a perfect copy of your live site, and as a result, your testing might not always be flawless.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), for. (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. 2. How to Create a WordPress Staging Site with Plug-Ins

#### WP Staging
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=0)** - The WP STAGING WordPress plugin is an automated backup solution that has a built-in staging feature.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=7)** If you need a robust plugin to help you set up your staging environment, WP STAGING is a great option.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=13)** It's easy to start using, has a centralized dashboard, is a very beginner friendly, and offers personalized support.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=21)** So let's talk about how to create a staging environment with WP STAGING.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=28)** On the plugins page, search for WP STAGING.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=32)** When you find it, install and activate the plugin.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=37)** You'll be redirected to the main staging sites page.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=41)** You can get started immediately with creating the staging environment.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=44)** Choose the button that reads Create New Staging Site.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=49)** The plugin automatically selects all files and database tables.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=53)** It's best to leave these settings as they are.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=56)** Choose Start Cloning, and wait until the progress bar completes.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=61)** Now you can access the staging site using the same credentials as your live site.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=66)** When you choose open staging site you'll see a bright orange bar at the top of the dashboard.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=72)** Make sure you see this when working to ensure that you're actually making changes to the staging site and not the live site.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=80)** If you're unable to properly access the staging site, WP STAGING has an excellent knowledge base you can check for help.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=87)** Let's open up the staging site and add a new post.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=91)** Now, when we want to push this change to the live site, what do we do?
>
> **[1:36](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=96)** Go back to your live site.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=98)** Notice there's no orange bar at the top, On the WP STAGING staging site's page, find the update that you just made.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=107)** It will always be at the top.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=109)** Choose Actions, then push changes.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-staging?u=76281980&t=113)** You can also use this menu to open the staging site, update it, meaning make it match the live site, reset it and delete it.

> [!info]- Semantic Content
>
> **Env Vars:** staging (6)
> **CLI Commands:** find (2), make (2)
> **Code Keywords:** let (2), delete (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** set up (1), install (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Best Practices:** it's best to (1)

#### WPVivid Backup
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=0)** - [Instructor] The WPvivid WordPress plugin is a free backup plugin that also has a staging feature.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=7)** So if you're looking for a beginner-friendly and easy to use plugin for creating staging sites, look to WPvivid.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=14)** Let's talk about how to create a staging site environment with WPvivid.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=19)** Remember that it's free to create a staging site with this plugin, but you'll need to upgrade to their Pro plan in order to push changes from staging to live.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=30)** On the Plugins page, search for WPvivid.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=34)** When you find it, Install and Activate the plugin, then go to the Staging sub-page within the WPvivid Backup menu option.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=44)** You'll have two main options.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=45)** One is to Create a Staging Site or a copy of your existing site with the content you already have.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=53)** You can also create a Fresh empty WordPress install for your staging site.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=58)** This second option might be better if you're planning a redesign and you want to start from scratch.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=63)** For now, let's look at the first option.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=66)** Click the Create a Staging Site button.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=69)** Unless you have a good reason and feel comfortable changing them, leave all the settings as they are, then choose Create Now.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=79)** Confirm within the browser, and let the plugin do its thing.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=83)** Once it's done, you'll find that the page has updated to show you information about your new staging site.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=90)** Tap the staging site URL, and login using the same credentials you used for the live site.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=97)** When logged in, you'll find there's a big orange bar across the top, which is meant to remind you that this is the staging site, not the live site.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=107)** Now you can start making changes.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=110)** Once you're happy with your changes and want to push live, go back to the WPvivid Backup staging page in the live site, remember, no orange bar.
>
> **[2:00](https://www.linkedin.com/learning/wordpress-staging-a-site/wpvivid-backup?u=76281980&t=120)** Choose Copy the Staging Site to Live, again, you'll need Pro for this, and your content will swap over.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **Prerequisites:** you'll need (2), install (2)
> **CLI Commands:** find (3)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### All-in-One WP Migration plug-in
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=0)** - [Instructor] The All-In-One Migration WordPress Plugin is a migration plugin that enables you to create a staging site as well.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=7)** It's a slightly more complex option that requires a little more technical knowledge.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=13)** It's a free plugin, and you can completely export your website files and database, and the tool uses a drag and drop interface, which can be very easy to learn.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=25)** Let's talk about how to create a staging environment with All-In-One Migration.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=29)** So this method is a little bit different from the previous options.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=33)** There is no automatic staging site option, but we can still use this plugin to create a staging site.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=40)** Go to your backups and make one.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=44)** Download the backup to your computer.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=47)** Now go to your hosting account, go to Domain, and then Subdomains to create a subdomain.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=56)** You can use something like staging or testing or whatever you want at the beginning of your root URL.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=64)** Launch a new WordPress install by choosing Create with that subdomain.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=69)** And now, once you have the new WordPress install, install the All-In-One WP Migration Plugin to that site.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=77)** Then visit the Import Page within the plugins sub menu.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=82)** Drag and drop the backup that you just made into this designated area.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=88)** Now you have a staging site that you can use to make changes based on your previous website.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=94)** When you're happy with the updates, do this process again, but in reverse.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=100)** Make a backup of the staging site, then import it onto the live URL.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-staging-a-site/all-in-one-wp-migration-25339676?u=76281980&t=107)** This is a more roundabout, less automatic way to create a staging website.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), drag and drop (2)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Prerequisites:** install (3)
> **Code Keywords:** interface (1), let (1)
> **Env Vars:** url (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Duplicator
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=0)** - The Duplicator Pro WordPress plugin is a great paid option for making a quick copy or duplicate of your WordPress website which can then be saved as a backup, or used to create a staging website.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=12)** To get started, search for the Duplicator Plugin on your plugin screen.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=17)** Install it and activate it.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=20)** Go to packages, then create new.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=24)** This will create a new package, which is really just a copy of your site and its files and database.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=31)** Name the package.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=32)** It's a good idea to use the date and maybe some kind of descriptor.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=37)** For example, maybe you're doing a big summer overhaul of your website.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=41)** Indicate in the title what the purpose of this package is.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=45)** Click next and Duplicator will scan your site to make sure that it's ready to be duplicated.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=52)** The next page will show you the results of your scanned website.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=56)** You may see an error or some kind of notice.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=59)** In some cases you can proceed, but some errors may cause an issue.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=64)** So if you see an error or a notice, decide whether or not you want to resolve it or just go ahead with the build process.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=71)** Here, I'll go ahead.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=73)** Click yes, then click build.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=78)** After a few moments of building, Duplicator will show you the package you've just built.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=84)** Click one click download to download the site to your local environment.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=89)** Duplicate requires something called an installer script, which you'll be prompted to download this first time.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=95)** And once it's downloaded, you can go ahead and install the package.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=100)** Congrats, you now have a copy of your site.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=103)** So to add it or staging environment, create that new environment on your host or locally on your machine, access the new sites files, and then go to the public _HTML folder.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=118)** Within that folder upload the installer and the site files that you just downloaded.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=124)** It should look something like.
>
> **[2:07](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=127)** Go to your website's URL, then add slash /installer.php.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=135)** There will be a handy wizard here to help you add the old site files to your new install.
>
> **[2:21](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=141)** Next, add the database credentials, then run deployment.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=146)** Wait a few minutes, then run the update for the site URLs.
>
> **[2:31](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=151)** Once completed click test site to see the site in its entirety.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=157)** Now that you're done, you will have one version of your site, which you can work with that won't affect your main site.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-staging-a-site/duplicator?u=76281980&t=163)** If you run into any issues with the Duplicator Pro plugin, contact their support or visit their documentation.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3)
> **Prerequisites:** install (3)
> **CLI Commands:** make (1), php (1)
> **Code Keywords:** new. (1), public (1)
> **File Paths:** installer.php (1)
> **Env Vars:** url (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)


### 4. 3. How to Create a WordPress Staging Site with Local Tools

#### Local by Flywheel
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=0)** - [Narrator] Local by Flywheel is a free local tool, which means it lives on your computer rather than on your website or on your server.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=9)** And it allows you to set up a staging site with just one click.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=13)** You can work on your staging site offline on your computer whenever you want.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=18)** This is a great option if you just need an area in which to test things.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=22)** If you use Flywheel or WP Engine hosting, you can push your staging site built with Local to a live environment that exists on one of those hosts.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=32)** I use Local by Flywheel quite a lot, and it's personally my favorite way to work with a staging site.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=39)** So let's talk a little bit about how to create a staging environment with Local by Flywheel.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=45)** After downloading Local from Flywheel's website, open up the application.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=50)** It'll look somewhat like this.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=53)** Click the large plus icon at the bottom left of your screen to create a new website, or the CREATE A NEW SITE button in the center of the screen.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=62)** You can name the site whatever you like.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=65)** If this is the first time that you're creating a site, use the preferred environment settings.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=70)** If you need to use a specific PHP version, web server, or database option, you can add those in the custom area.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=79)** Set the username, password, and email address that you'd like to use for the administrator account.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=85)** Just make sure that you save this information in a safe place so that you can remember it later.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=91)** Flywheel will get to work building the site right away.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=94)** You might be asked to authenticate the user account on your computer.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=99)** Once the site is done, you should see a screen that looks something like this.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=104)** Now, to start editing or building the site, choose ADMIN.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-staging-a-site/local-by-flywheel?u=76281980&t=108)** Use the logins that you just created, and you can get started editing your site.

> [!info]- Semantic Content
>
> **Env Vars:** create (1), site (1), php (1), admin (1)
> **Code Keywords:** this. (2), let (1)
> **CLI Commands:** php (1), make (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### DevKinsta
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=0)** - [Instructor] DevKinsta is a new, free local WordPress development suite that works for free on your local machine.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=8)** This is a great option if you already host your website with Kinsta.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=12)** So let's talk about how to create a staging environment with DevKinsta.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=18)** After downloading the tool from Kinsta's website, open up the application, it should look something like this.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=25)** If you're just starting to build, choose to create a brand new WordPress site.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=31)** You can also import from Kinsta, which is a good option if you've already built a site that is hosted with Kinsta and you want to add a staging version.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=41)** Or you can create a custom site.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=44)** We don't really need to worry about that option right now.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=47)** First let's create a new WordPress site.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=50)** We need to name it.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=52)** I'll use staging website and we need to enter a secure admin username and password.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=57)** DevKinsta might take a moment or two, but when it's done, you'll have a fresh WordPress install.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=65)** Open the site or go to the WordPress admin to begin building.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=71)** Once the site is built to your liking, come back to the screen and select push to staging.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=77)** This will create a staging environment with your new changes.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=81)** Log in using your Kinsta hosting credentials.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=84)** DevKinsta will will push the local version of your site onto your staging environment on your host.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=91)** You'll then need to use my Kinsta in your browser to push the staging version live.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=98)** Probably the biggest benefit of using my Kinsta versus just your in browser staging environment is that you can work offline without an internet connection.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=108)** When you connect to the internet again, you can push those changes to the staging site that exists on your host.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=115)** Say you already have a Kinsta website.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=118)** You can go back to the home screen and select import from Kinsta instead.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=124)** Log into your existing Kinsta account and select the site that you want to pull onto your local environment.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-staging-a-site/devkinsta?u=76281980&t=130)** It's as easy as that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), new, (1), this. (1)
> **UI Navigation:** open the (1), go to (1), select the (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 5. 4. How to Create a Staging Site with Hosting

#### SiteGround
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=0)** - [Instructor] SiteGround hosting allows you to set up a staging environment using their built-in tools.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=6)** If you already use SiteGround to host your site, this is a great option.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=11)** Once logged in, navigate to the site tools area of your account and it should look something like this.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=17)** Go to WordPress and then Staging.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=21)** Add a staging name, it should be something very clear, but concise like staging or testing.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=28)** If you're making the staging site for a very specific purpose, like to test a specific functionality or for a redesign, name the copy appropriately.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=37)** You might end up with more than one copy of your site, and it will help to have descriptive names.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=43)** Wait a moment, and SiteGround will create the staging account for you.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=48)** Click on the name of the site when it appears, and you'll be taken to the staging site.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=53)** Notice the new URL at the top.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=56)** Add WP admin to log in using the same logins you would use for the live site.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=61)** You can also click the Login button in the site tools to be logged in automatically.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=66)** SiteGround gives you some options as well.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=69)** After making changes to your staging site, you can choose Full Deploy, this will replace your live site with a copy of your staging site.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=78)** You can also choose Custom Deploy, which will give you options of which files to copy over to the live version.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-staging-a-site/siteground-25333732?u=76281980&t=85)** You can choose to destroy the staging site entirely, replicate it, or make a second staging site directly from this one, or just rename it.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (1), go to (1), click on (1)
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Bluehost
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=0)** - [Instructor] Bluehost hosting accounts allow you to set up staging environments using their built-in tools.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=6)** If you already use Bluehost to host your site, this is a great option.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=10)** If you host somewhere else, chances are there's a staging option for you there.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=15)** Just ask your support team.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=17)** Begin by opening up your WordPress site that's hosted with Bluehost.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=21)** Select the Bluehost menu, then Staging.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=25)** Create a staging site using the button on this page.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=28)** Wait a few moments and Bluehost will build your staging environment for you.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=33)** If you make changes to your live site and want to update the staging one to match, choose Clone to Staging.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=40)** Work on your staging site by selecting it.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=43)** You'll know it's the staging site and not the live site by the red label at the top of your dashboard.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-staging-a-site/bluehost?u=76281980&t=49)** After you've made changes, select Deploy all Changes in order to push those changes to your live site.

> [!info]- Semantic Content
>
> **Code Keywords:** else, (1), match, (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### WP Engine
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=0)** - [Instructor] WP Engine hosting accounts allow you to set up staging environments using their built-in tools.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=6)** If you already use WP Engine to host your site, this is a great option.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=12)** You'll start in the WP Engine dashboard.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=15)** You'll need to create your production site and staging site from this dashboard.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=19)** Choose Add site, choose Start with blank site, then, choose Production site, and name it.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=31)** Now, do the same thing over again, but select Staging site this time.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=41)** It may take a few moments for your environments to finish being built.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=46)** When they're complete, you'll get an email with the URL, admin login, and username.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=52)** Go to the site page in your WP Engine dashboard, and you'll see both sites listed.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=58)** Select your staging site's name, then choose WP Admin.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=63)** Begin building out your site from here.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=65)** When you want to push your staging changes live, go back to the sites list, and select staging.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=72)** Select the copy environment button in the top right hand corner.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=76)** Make sure that you select Staging first, then Production.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=82)** And when you want to sync the production site to the staging site, you'll swap the order.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=88)** Click Review, and then confirm.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-staging-a-site/wp-engine?u=76281980&t=92)** You'll get another email when that process is complete.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), select the (1)
> **Prerequisites:** set up (1), you'll need (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. 5. How to Manually Create a Staging Site

#### Warnings and precautions
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=0)** - [Instructor] Creating a staging environment manually without the help of a plugin or hosting tools is absolutely possible with a bit of knowhow and practice.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=10)** But as is the case with manipulating code there are a few things to be wary of when doing so.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=18)** Let's touch on some warnings and precautions so that you can build your staging site from scratch confidently.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=24)** Take a full backup of your live site before you do anything and make sure that you know how to restore it.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=30)** Mistakes do happen even to highly experienced developers.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=34)** So it's a good idea to have a backup plan.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=37)** Make a list of all the changes that you want to make.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=39)** So you only have to do this once.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=42)** It would be a huge pain to forget something, finish the entire process, and then have to spend the time to do it all over again.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=50)** Know that throughout the walkthrough, your screen might look different than mine and that's okay.
>
> **[0:56](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=56)** Some interfaces and tools might become outdated but all the options should still be available to you if you look around.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-staging-a-site/warnings-and-precautions?u=76281980&t=63)** If you get stuck and can't find a certain area or setting, contact your hosting support team.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Walk-through
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=0)** - [Instructor] All right, so now that we are armed with all those warnings, we can walk through the steps to manually create a staging site.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=7)** This option is best for someone who is already somewhat familiar with editing code files, but if you want to learn how to do this and you have minimal coding experience, I fully believe that you can do it.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=20)** I fully believe you can do it.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=22)** No matter what hosting account you use, you should have the ability to set up a staging environment using a subdomain.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=28)** I recommend this method if you really don't want to use a plugin but want to complete the process manually instead.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=35)** First, create a subdomain through your cPanel or site tools.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=39)** Log into your hosting account and navigate to one of those areas.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=42)** This is my site tools area.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=45)** Find the subdomain section and then name your subdomain.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=52)** It should be something clear like staging or something like testing is good too.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=57)** If you're making the staging site for a specific purpose, like to test a specific functionality or for a redesign, name the copy appropriately.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=65)** You may end up with more than one copy of your site, and it'll help if you have descriptive names.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=72)** Once you've chosen your name and clicked Create, we now need to create an FTP account for the subdomain we just made.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=79)** This step ensures that the files for this site have their own designated place to live on the server, and they won't get mixed up with another site.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=86)** So find the FTP Accounts section and then enter account details as you're asked.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=92)** So I'll use the same thing, testing, and add a password, and then choose Create.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=99)** Make sure to save this information in a secure place before you move on.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=104)** Now, we just have to upload the WordPress files to the staging site.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=110)** You can do this by going to [wordpress.org](https://wordpress.org) and downloading the latest available version of WordPress.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=118)** Now you'll need to use the account details from the last step in order to log into FTP.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=124)** You can do this using a free file manager tool like FileZilla, which is my personal favorite, but there are lots of other options out there.
>
> **[2:12](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=132)** Once you've got that application open, it should look something like this.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=137)** Log in with the FTP credentials you created in the previous step.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=140)** On one side, you'll see your computer files.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=144)** Find the WordPress folder you just downloaded.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=147)** On the other side, you'll see the staging folder you just made within your host.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=152)** Upload the WordPress files to your staging site.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=157)** Now, we need to make sure that the staging site is a true copy of the live site.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=162)** This is optional.
>
> **[2:44](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=164)** If you're creating a staging site without having a live site first, you can skip this step, as well as the next one.
>
> **[2:51](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=171)** On the host side, find your live website, navigate to the wp-contents folder.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=177)** Inside it, grab the uploads, themes, and plugins folder, and add them to your computer.
>
> **[3:05](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=185)** Go back to your staging environment folder, find the wp-contents folder there, and put those folders that you just grabbed back into that site.
>
> **[3:16](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=196)** It may take some time to update, so be patient.
>
> **[3:20](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=200)** Our next step is to export and import to the live site database.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=205)** Again, you can skip this step if you're creating a brand new environment with no live site to base it on.
>
> **[3:31](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=211)** Log into your live site and go to the Plugins page.
>
> **[3:35](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=215)** Go to Add New, and search for WP Migrate DB.
>
> **[3:40](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=220)** Install and activate the plugin.
>
> **[3:43](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=223)** Then, go to Tools, Migrate DB.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=227)** Go to the Migrate tab.
>
> **[3:49](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=229)** It's very important to make sure the links are accurate to the environments you created.
>
> **[3:54](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=234)** When this matches up, choose Export.
>
> **[3:57](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=237)** This will download a file to your computer, and once that's done, you want to go back to your host, choose MySQL and Create a Database.
>
> **[4:10](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=250)** Now, create a user.
>
> **[4:14](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=254)** Make sure to save the database name, the username and this password in a secure place before moving on.
>
> **[4:23](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=263)** Next, add the user to the database by selecting this little icon, choosing the database that we just made, and then choosing Confirm.
>
> **[4:34](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=274)** Finally, go to phpMyAdmin, and on the left-hand side, you should see the database that we just made.
>
> **[4:45](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=285)** Next, add the user to the database by selecting each one and clicking Add.
>
> **[4:51](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=291)** Now, go to phpMyAdmin, and on the left, you'll see the database you just made.
>
> **[4:59](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=299)** Find Import.
>
> **[5:01](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=301)** Then click Choose File.
>
> **[5:03](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=303)** Find the file on your computer that you just downloaded from your live site via that plugin, and upload it.
>
> **[5:10](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=310)** Click Go, and we're done with this step.
>
> **[5:14](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=314)** We're almost finished.
>
> **[5:16](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=316)** The next step is to edit the wp-config file to point to the new database.
>
> **[5:22](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=322)** Back in FTP, open up the wp-config file that exists in your staging site.
>
> **[5:28](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=328)** Add the database details and username.
>
> **[5:31](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=331)** Then save the file.
>
> **[5:34](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=334)** The final step is to log in and restrict access to your staging site.
>
> **[5:40](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=340)** You should be able to go to your staging site URL and log in with the exact same credentials that you would use on the live site.
>
> **[5:47](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=347)** If you can't, move ahead in this course to the Troubleshooting Steps.
>
> **[5:50](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=350)** But if it does work, you need to restrict access to this website by going to Settings and then Reading.
>
> **[5:58](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=358)** Make sure that the Discourage search engines from indexing this site option is checked.
>
> **[6:04](https://www.linkedin.com/learning/wordpress-staging-a-site/walk-through-25341522?u=76281980&t=364)** That way, if someone searches for your site or your business on Google, Google won't list this staging site as a result.

> [!info]- Semantic Content
>
> **CLI Commands:** find (7), make (5), mysql (1)
> **UI Navigation:** go to (7), navigate to (2)
> **Env Vars:** ftp (5), url (1)
> **Code Keywords:** this. (1), new, (1), export. (1), finally, (1), import. (1)
> **Code Identifiers:** phpmyadmin (2), cpanel (1)
> **Prerequisites:** set up (1), you'll need (1), install (1)
> **Cross-References:** go back to (2)
> **Best Practices:** make sure to (2)


### 7. 6. Using a Staging Site

#### Staging site best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=0)** - [Instructor] Now that you know how to create a staging site, we're going to talk about how to use it in the long term.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=6)** We'll start with some best practices.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=8)** Keep these things in mind and teach them to anyone who will be updating your website using that staging environment in the future.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=15)** Number one, take backups.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=18)** Always take full backups before making changes and before deploying staging changes.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=24)** That means you back up WordPress core files, theme and plugin files, media files, and database files to a safe location.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=33)** There are tons of low-cost tools out there to help you with this.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=37)** Plugins like UpdraftPlus or third party tools like ManageWP are popular options.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=43)** Two, don't push the staging database.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=48)** Don't push the staging database to your live site.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=51)** This could overwrite or wipe your production data, and this means losing tons of potentially vital information for your website.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=58)** For example, if you have an E-commerce store, accounts and purchase data are going to be stored in the database, and this is not information you want to compromise.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=68)** Three, disable emails.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=71)** Always make sure to disable emails when you're working in a staging site.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=75)** There are various ways that you can do this in order to prevent flooding your inbox or your client's inbox with unnecessary messages.
>
> **[1:22](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=82)** Use the free disable emails plugin by WebAware to stop the site from sending emails.
>
> **[1:27](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=87)** If you need to test email notifications as a part of your staging site activities, use the free email log plugin by Sudar.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=96)** The emails will still be blocked from going out, but at the same time, the email log plugin will track what emails would have gone out.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=104)** Four, restrict access.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=107)** Do not give any public access to the staging environment.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=110)** The staging environment is a private sandbox just for you and your team to work in.
>
> **[1:55](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=115)** Make sure you've blocked search engines from indexing the staging site detailed out in the previous video, and don't give access to the staging site to anyone who does not need it.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=126)** Five, disable the cache.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=129)** While making changes in staging, remember to disable your cache.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=134)** Caching is a process that stores information to a user's browser so that the site can load more quickly.
>
> **[2:20](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=140)** It can help with site performance, but it can also hinder certain changes from appearing when you're testing or updating.
>
> **[2:26](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=146)** Staging sites don't need to be 100% optimized since visitors aren't going to be using them.
>
> **[2:32](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=152)** Use a caching plugin to disable caching while making changes.
>
> **[2:37](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=157)** Then re-enable caching if you're doing performance or conflict testing.
>
> **[2:42](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=162)** Six, disable any auto updates.
>
> **[2:46](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=166)** WordPress allows you to enable automatic updates for themes and for plugins.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=172)** While this can come in handy sometimes, it's important to make sure that auto updates are disabled when using a staging site.
>
> **[2:59](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=179)** One of the benefits of having a staging site is using it to test updates before performing them on a live site.
>
> **[3:06](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=186)** Automatically updating software on your staging or live site is going to make that whole process pointless.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=194)** And finally, seven, keep a log.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=198)** If you use your staging site to test or push changes only every once in a while, then this step might not be necessary.
>
> **[3:25](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=205)** But if you're using it frequently and for lots of different reasons, keep a simple log somewhere.
>
> **[3:31](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=211)** This log should include the date and time that you changed or deployed your staging site.
>
> **[3:37](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=217)** It should include a rough summary of the things that you did, and if any problems occurred, log that too.
>
> **[3:45](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-site-best-practices?u=76281980&t=225)** Having this kind of record on hand can help you keep track of changes, share information with your team, and potentially track back any mistakes made any versions ago.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), public (1), private (1), finally, (1), while, (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Best Practices:** always make sure (1), remember to (1)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Preflight checklist
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=0)** - [Instructor] We're almost there.
>
> **[0:02](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=2)** In order to make the process as simple and as smooth as possible, let's go over a checklist of tasks that you can do before you use your staging site.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=12)** These steps are going to ensure that you minimize the risk of something going wrong.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=16)** When you sync content or switch from staging to production, maybe make a note of things on this checklist, keep it handy and share it with your team to review before making changes.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=27)** I've said it before, and I'll say it again, and probably a few more times.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=32)** Take a full backup of the entire site.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=35)** That means files and database before making changes to staging or live sites.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=41)** This is especially important before you push changes from one to another.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=46)** Update your log with the changes that you've made.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=49)** This way, if something does go wrong, you'll have a quick reference of what you've done.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=53)** You may want to update your team, especially if this is a large push or something that will change the way the site works.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-staging-a-site/preflight-checklist?u=76281980&t=60)** If you're doing this for the first time, it might be good to make sure that you have a developer on hand to call, just in case you need their help with troubleshooting.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (1), switch (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Syncing content
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=0)** - [Instructor] It's possible that while you were working on your staging site, changes were made to your live or production site.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=8)** It's important that the two sites remain in sync as much as possible.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=12)** If not, you could push changes from staging to live and accidentally overwrite important changes that were made to the live site.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=20)** So for example, say your live site is an eCommerce shop.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=25)** As new sales come in, the live site will be updated with that new sale information and customer information.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=31)** You don't want to overwrite that data, when you update your plugins, so it's important that you have automatic synchronization for when those kinds of changes occur.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=40)** You can sync your live site with the staging site in a few ways.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=44)** Probably the best option for beginners is to use a plugin.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=48)** There are tons of good plugins out there, like Snapshot Pro, WP Migrate DB Pro, WP Sync DB, VersionPress, and more.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=58)** They all basically do the same thing, but in slightly different ways.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=61)** Do some research, read some reviews to determine which plugin will work best for you.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=66)** If you're already using a plugin for your staging site, chances are that plugin can already help you with synchronization.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=74)** You can also utilize MySQL synchronization tools.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=78)** Find a good MySQL database management tool that offers database import, export, and or synchronization facilities.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-staging-a-site/syncing-content?u=76281980&t=86)** Examples include MySQL workbench, Symmetric's DS or MySQL Replication.

> [!info]- Semantic Content
>
> **CLI Commands:** mysql (4), find (1)
> **Code Keywords:** import, (1), export, (1)
> **Code Identifiers:** ecommerce (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Switching from staging to production
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=0)** - [Instructor] The activity that you'll probably be performing most often is moving content from your staging site to your production site.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=8)** When you've tested a new update or designed a new page and everything looks good to go, it's time to go live with those changes.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=15)** As we discussed in chapters two, three, and four, switching from staging to production can be as simple as pushing a button.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=23)** In most cases, the fastest and safest way to do it is utilizing a plugin, or your built-in site tools, even if you built your staging environment manually.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=34)** But let's say you want to cut back on plugins and do it all yourself.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=38)** How do you update your live site if you don't have an automated tool?
>
> **[0:42](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=42)** This could get a little tricky, so make sure you take backups of both your live and staging site before you begin.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=50)** Remember, a WordPress site is made up of two sets of files, your WordPress files and your database files.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=57)** We need to download the staging versions of both so that we can upload them onto the live environment.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=63)** Step one is to download the WordPress files from your staging site, either through your cPanel, or through an FTP client.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=71)** Wait a few minutes for the WordPress files to be downloaded to your local environment.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=76)** Step two is to download the WordPress database.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=80)** Log into your hosting account and find phpMyAdmin.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=85)** There will be a menu on the left-hand side that lists the databases of sites on your host.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=90)** You should see both your staging and live site databases here.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=95)** Click on the staging database to select it.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=97)** Select export, quick, go.
>
> **[1:42](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=102)** This downloads your database for the staging site and saves it onto your computer.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=107)** Step three is to point your wp-config file to the live database.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=113)** Open the public HTML folder you downloaded as a part of the staging WordPress files, and locate the wp-config file.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=121)** Open it up in a file editor.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=124)** Find the database name, user, and password.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=128)** Replace them with the name, user, and password that applies to your live site database, and save those changes.
>
> **[2:15](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=135)** Step four is to upload the staging files to your host.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=139)** In your hosting account, open up phpMyAdmin again.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=142)** Find and select the live site database this time from the left-hand side.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=147)** Select import, and upload the staging database that you just saved to your computer.
>
> **[2:33](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=153)** Now we have to upload the staging WordPress files to the live hosting environment.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=159)** You can choose to do this again through your site tools, or through FTP.
>
> **[2:43](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=163)** With either option, navigate to the public HTML folder for the live site.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=168)** Remove any existing WordPress files, and then upload your staging WordPress files.
>
> **[2:54](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=174)** And that's it.
>
> **[2:55](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=175)** Your WordPress files are now updated.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=177)** The final step here is to make sure that the staging URL is changed to the old one.
>
> **[3:03](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=183)** Chances are you used a subdomain for your staging site, and we need to make sure that when someone visits the live site, they see this new staging content.
>
> **[3:13](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=193)** This is easily done with a plugin.
>
> **[3:16](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=196)** Go to the plugins page, and install this plugin called Better Search and Replace.
>
> **[3:21](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=201)** Select tools, Better Search and Replace.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=206)** Next, in the search for option, write down the staging URL and in the replace with option, write down the live one.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=214)** Scroll down and click run search and replace.
>
> **[3:38](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=218)** And that's it.
>
> **[3:39](https://www.linkedin.com/learning/wordpress-staging-a-site/switching-from-staging-to-production?u=76281980&t=219)** You have successfully migrated your WordPress sites to a new hosting account, and you've moved your old domain to a new one.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (3)
> **Env Vars:** ftp (2), html (2), url (2)
> **UI Navigation:** click on (1), open the (1), select the (1), navigate to (1), go to (1)
> **Code Keywords:** public (2), let (1), export, (1), import, (1)
> **Code Identifiers:** phpmyadmin (2), cpanel (1)
> **Exercise Files:** download the (3)
> **Prerequisites:** before you begin (1), install (1)
> **Cross-References:** we discussed (1)

#### Post-switch checklist
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=0)** - [Instructor] We aren't done quite yet.
>
> **[0:02](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=2)** Now that you've used the staging site to implement your changes, we need to make sure that everything went off without a hitch.
>
> **[0:09](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=9)** Mistakes and unexpected results can sometimes occur, no matter how closely you follow directions.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=16)** So let's go over a simple checklist of tasks to do after using your staging site.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=22)** If you encountered any large errors and you noticed those right away, head on over to chapter 7.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=28)** These steps we go through now are good for making sure that if something did go wrong that isn't immediately obvious.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=35)** You can find and address it as soon as possible.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=38)** Make a note of this checklist, keep it handy and share it with your team to review after making changes.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=45)** First crawl, both the staging and live sites to make sure that all the pages look right and are functioning properly.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=52)** Click around, make sure that, while you're on the staging site, all the links are linking to the right pages and the same for the live site.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=60)** Test out any conversion paths on the live site to make sure that nothing broke.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=66)** This might include signing up for something, running out a test purchase, or filling out a form.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=71)** Next, test any third party integrations that are important for your site.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=76)** So for example, a Zapier or payment or a tracking integrations should all still be working after going live.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=84)** When you're satisfied that the staging push has gone well, make a backup of the live and staging sites, just in case.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-staging-a-site/post-switch-checklist?u=76281980&t=91)** Now, pat yourself on the back you have successfully pushed your staging site to live.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), find (1)
> **Code Keywords:** let (1), case. (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Troubleshooting Common Issues with Staging Sites

#### Caching issues
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=0)** - [Instructor] Issues can sometimes occur when pushing your staging changes to your live site.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=6)** Let's go over what caching issues look like and how you can troubleshoot them.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=10)** Caching is the process by which static information about a website is saved, especially a website you visit often.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=18)** Caching can happen on your site, on the browser, or on the server, depending on what kind of tools you have in place.
>
> **[0:26](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=26)** Caching says, well, this font is always the same, and these colors here are always the same, so I'll remember that information and I won't waste time asking the server for that information next time the site is loaded.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=40)** Caching is awesome for site speed, but it can mean issues when pushing changes live.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=46)** Perhaps after going live with a change, your browser is still remembering the old static information.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=52)** If your site is missing CSS styles or images after launch, maybe some of your pages updated, maybe some didn't.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=59)** All of this means you should try to clear your cache.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=63)** In order to clear the browser cache, make sure to check your live site on all browsers that you have access to because not all browsers will cache the same things.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=74)** When you've isolated which browser is caching the wrong information, find the setting that allows you to clear the cache.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=81)** So for example, in Google Chrome, I can do this by going to history, then clear browsing data.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=89)** I select the cache options and let it run.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=94)** If this doesn't resolve the issue, purge your site cache.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=99)** Some staging plugins will allow you to easily clear the site cache after a launch.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=104)** So check your staging plugin settings for that option.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=108)** If you don't have a staging plugin, check to see if you have a caching plugin that's already installed.
>
> **[1:54](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=114)** There are a ton of great free options in the plugin repository, and if someone else built your site for you, it's very possible that they added one for you in order to help with performance.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=126)** Find the plugin settings and purge your cache there.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=130)** If that doesn't resolve your issue, it's possible that you have caching enabled on your server.
>
> **[2:17](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=137)** Log into your site hosting tools, then look for any areas that mention speed or caching.
>
> **[2:22](https://www.linkedin.com/learning/wordpress-staging-a-site/caching-issues-25339675?u=76281980&t=142)** So for example, on my SiteGround account, I can go to speed, caching, dynamic cache, and then once there, I can choose to flush the cache for my website.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), static (2)
> **CLI Commands:** find (2), make (1)
> **UI Navigation:** select the (1), go to (1)
> **Analogies:** for example (2)
> **Env Vars:** css (1)
> **Best Practices:** make sure to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Error page when viewing staging site
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=0)** - [Instructor] One of the most frustrating things that can happen when pushing a staging site live is discovering a page not found error, also called a 404 page, within your site that you didn't expect to find.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=12)** What happened to the page and all its content?
>
> **[0:15](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=15)** Not to worry, there are a few things that we can do to fix this error page pretty quickly.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=21)** If you're using a staging plugin or hosting tools, check their FAQ or customer support.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=27)** This is not an uncommon problem, and chances are you can find a solution there pretty quickly.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=33)** If you can't find help there or if you set up your process manually, here's what to do.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=40)** Go to WP admin, settings, permalinks.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=46)** Make sure that the permalinks here match across both sites.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=51)** Click two times on the save changes button; this will force WordPress to recreate all the links on your site just in case they got stuck on the wrong option.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=61)** If this does not work, it's possible you have a CDN enabled that's causing the issue.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=67)** Clean the CDN's cache and disable optimization settings.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=71)** I can do this here in SiteGround by going to speed and then CDN.
>
> **[1:15](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=75)** And if my CDN was active, I would be able to go ahead and clear that cache and disable the optimization settings.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=83)** If this doesn't help, test to see if any of your installed plugins could be causing a conflict.
>
> **[1:29](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=89)** Sometimes plugin settings can affect how URLs function or appear on your site, so deactivate all the third-party plugins that you have installed and see if the problem still persists.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-staging-a-site/error-page-when-viewing-staging-site-25336645?u=76281980&t=101)** If it doesn't, now you can narrow down which of the plugins is responsible by reactivating them one at a time.

> [!info]- Semantic Content
>
> **Env Vars:** cdn (4), faq (1)
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** function (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Staging redirects to live site
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=1)** - [Instructor] Sometimes your staging site may redirect to your live site, which is quite a problem, since it prevents you from making changes to the proper environment.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=11)** So let's go over what we can do to fix it.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=15)** First, let's get the obvious out of the way and make sure that you don't have any redirect plugins enabled.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=22)** Redirect plugins are popular for tons of different reasons but they could be messing up your staging and production process.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=29)** Look over your plugins page and disable any redirection plugin that you see to see if it resolves the issue.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=36)** Next let's make sure that the URLs in WordPress are correct.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=41)** Go to settings, general, and ensure that the WordPress address and site address are both correct.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=50)** If you need to change them, but you can't do so, or if you change them and it doesn't update, go to your WP config file through your file manager.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=61)** Find the lines that look like this and edit them to be correct.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=67)** If that doesn't help, check your HT access file for any redirects.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=72)** In FTP or your host site tools, open up your site files and find the HT access file.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=79)** Open it up and look for any redirects that could be causing this issue.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=84)** When building out your site, it's a good idea to use relative links, which look like this, instead of like this.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=93)** When you use absolute links, the site will honor that exact link, no matter what.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-staging-a-site/staging-redirects-to-live-site?u=76281980&t=98)** But a relative link is going to plug in whatever the domain name is on this particular site.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), this. (1)
> **CLI Commands:** make (2), find (2)
> **UI Navigation:** go to (2)
> **Env Vars:** ftp (1)
> **Speakers:** - [instructor] (1)


### 9. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-staging-a-site/next-steps-25334693?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-staging-a-site/next-steps-25334693?u=76281980&t=0)** - Great job. We've reached the end.
>
> **[0:03](https://www.linkedin.com/learning/wordpress-staging-a-site/next-steps-25334693?u=76281980&t=3)** Thank you so much for going through this course with me.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-staging-a-site/next-steps-25334693?u=76281980&t=6)** Now, you should be able to create your own staging site and begin using it to support your website goals.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-staging-a-site/next-steps-25334693?u=76281980&t=13)** If you're interested in learning more about WordPress, check out my "[[WordPress Essential Training]]" course.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-staging-a-site/next-steps-25334693?u=76281980&t=18)** There is so much to learn and accomplish when it comes to WordPress, and your journey has only just begun.

> [!info]- Semantic Content
>
> **Speakers:** - great (1)


## Instructor

- [[Allie Nimmons]]

## Skills Covered

- Staging to Live
- Wordpress Development

## Path Context

### In [[Getting Started with WordPress]]
← [[JavaScript Essential Training]] | **9 of 10** | [[Troubleshoot and Repair Your WordPress Website]] →

## Appears In

- [[Getting Started with WordPress]]

## Related Courses

_Courses sharing skills:_

- [[Creating Block Patterns in WordPress]] — Wordpress Development
- [[Building a WordPress Membership Site with Ecommerce]] — Wordpress Development
- [[Building a Headless WordPress Site with Gatsby]] — Wordpress Development
- [[WordPress- Everything about Plugins]] — Wordpress Development
- [[WordPress Essential Training]] — Wordpress Development

---

[↑ Back to top](#)