---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wordpress-building-a-secure-site
url: "https://www.linkedin.com/learning/wordpress-building-a-secure-site"
level: Intermediate
updated: 4/16/2025
learners: 5709
skills:
  - Web Application Security
  - WordPress
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFPY5XAoOMO4g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690838117691?e=2147483647&amp;v=beta&amp;t=1iYoKbkOSfocRkAgbW8risB9CtZHZMLKhmg1aMJTlak"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills in WordPress]]'
  - '[[Build Your WordPress Ecommerce Skills]]'
prev_courses:
  - null
  - '[[WordPress Ecommerce- WooCommerce]]'
next_courses:
  - '[[WordPress- Internationalization]]'
  - '[[WordPress- SEO]]'
path_nav: '[{"path":"Advance Your Skills in WordPress","position":1,"total":8,"prev":null,"next":"WordPress- Internationalization"},{"path":"Build Your WordPress Ecommerce Skills","position":3,"total":6,"prev":"WordPress Ecommerce- WooCommerce","next":"WordPress- SEO"}]'
path_count: 2
tags:
  - course
  - topic/security
  - topic/web-development
  - skill/web-application-security
  - skill/wordpress
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Wordpress%20Building%20A%20Secure%20Site.md)

![Wordpress Building A Secure Site](https://media.licdn.com/dms/image/v2/D560DAQFPY5XAoOMO4g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690838117691?e=2147483647&amp;v=beta&amp;t=1iYoKbkOSfocRkAgbW8risB9CtZHZMLKhmg1aMJTlak)

# Wordpress Building A Secure Site

> Building a secure website is a required skill for anyone who develops websites. In this course, instructor Allie Nimmons walks you through how to build and launch a secure website with WordPress. Allie explains what to look for when you are shopping for a secure hosting provider for your website. She points out what practices are most important to protect your site from WordPress vulnerabilities, 

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site) | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Building a secure WordPress website](#building-a-secure-wordpress-website)
- [**1. WordPress Structure and Vulnerabilities**](#1-wordpress-structure-and-vulnerabilities) (3 videos)
  - [How to choose a secure WordPress hosting provider](#how-to-choose-a-secure-wordpress-hosting-provider)
  - [Overview of the WordPress structure](#overview-of-the-wordpress-structure)
  - [How WordPress sites become vulnerable](#how-wordpress-sites-become-vulnerable)
- [**2. WordPress User Accounts**](#2-wordpress-user-accounts) (3 videos)
  - [How to create a secure WordPress user account](#how-to-create-a-secure-wordpress-user-account)
  - [Best practices for keeping WordPress user accounts secure](#best-practices-for-keeping-wordpress-user-accounts-secure)
  - [Tools for securing your WordPress login screen](#tools-for-securing-your-wordpress-login-screen)
- [**3. SSL Certificates**](#3-ssl-certificates) (3 videos)
  - [How an SSL certificate keeps WordPress sites secure](#how-an-ssl-certificate-keeps-wordpress-sites-secure)
  - [How to troubleshoot an SSL installation](#how-to-troubleshoot-an-ssl-installation)
  - [Tools for setting up an SSL certificate](#tools-for-setting-up-an-ssl-certificate)
- [**4. WordPress Plugins and Themes**](#4-wordpress-plugins-and-themes) (4 videos)
  - [How to choose secure WordPress plugins](#how-to-choose-secure-wordpress-plugins)
  - [Best practices for keeping WordPress plugins secure](#best-practices-for-keeping-wordpress-plugins-secure)
  - [How to choose secure WordPress themes](#how-to-choose-secure-wordpress-themes)
  - [Best practices for keeping WordPress themes secure](#best-practices-for-keeping-wordpress-themes-secure)
- [**5. Comment Spam**](#5-comment-spam) (3 videos)
  - [Why spam comments are dangerous for WordPress sites](#why-spam-comments-are-dangerous-for-wordpress-sites)
  - [How to prevent WordPress spam comments](#how-to-prevent-wordpress-spam-comments)
  - [How to remove WordPress spam comments](#how-to-remove-wordpress-spam-comments)
- [**6. Website File and Database Backups**](#6-website-file-and-database-backups) (2 videos)
  - [How to make secure WordPress website backups](#how-to-make-secure-wordpress-website-backups)
  - [Best practices for taking WordPress website backups](#best-practices-for-taking-wordpress-website-backups)
- [**7. Firewalls**](#7-firewalls) (2 videos)
  - [How firewalls make your site more secure](#how-firewalls-make-your-site-more-secure)
  - [Tools for setting up a WordPress firewall](#tools-for-setting-up-a-wordpress-firewall)
- [**8. Ecommerce Site Security**](#8-ecommerce-site-security) (2 videos)
  - [How to make your ecommerce site more secure](#how-to-make-your-ecommerce-site-more-secure)
  - [Best practices for securing an ecommerce site](#best-practices-for-securing-an-ecommerce-site)
- [**9. Editing WordPress Files**](#9-editing-wordpress-files) (5 videos)
  - [Secure your WordPress site by tweaking the wp-config file](#secure-your-wordpress-site-by-tweaking-the-wp-config-file)
  - [Secure your WordPress site by disabling XML-RPC](#secure-your-wordpress-site-by-disabling-xml-rpc)
  - [Secure your WordPress site by disabling PHP executions](#secure-your-wordpress-site-by-disabling-php-executions)
  - [Secure your WordPress site by disabling directory indexing and browsing](#secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing)
  - [Secure your WordPress site by tightening file/folder permissions](#secure-your-wordpress-site-by-tightening-filefolder-permissions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a secure WordPress website](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980&t=0)** - These days, website visitors rely on the internet more than ever so your site needs to be as secure as possible in order to make sure that users have an optimal experience. In this course, we take a no code approach to [[WordPress]] site security. I'll explain how to choose and maintain plugins and themes, how to optimize firewalls and maintain SSL certificates, and we'll take a look at what extra steps you can take to protect [[E-Commerce]] sites. I'll give you some of my personal recommendations for free and paid tools to look into. And in the final chapter, I'll provide some optional code snippets that I can recommend for an extra layer of security. My name is Ally Nimmons, and I've been working with WordPress since 2015. If you're ready to get started building a more secure WordPress website, join me. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[E-Commerce]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** ssl (1)
> **Speakers:** - these (1)


### 1. WordPress Structure and Vulnerabilities

[↑ Back to Table of Contents](#table-of-contents)

#### [How to choose a secure WordPress hosting provider](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=0)** - [Instructor] The first step in launching a secure [[WordPress]] site is choosing a secure hosting provider. The security of your host can largely affect how secure your site is and how secure it will remain. Hosting is 100% required to launch a website and it's what your site is built on top of so it's not a place to skimp or cut corners. Remember that all websites are made up of nothing but files. Those files are full of code, which is just a long list of specific instructions that are delivered to your browser, [[Google]] Chrome, Safari, Firefox, et cetera. These instructions tell your browser what to show like photos and texts and how to interact with a user, like what to do if a user clicks on a photo or submits information through a form. All those files need to physically live somewhere. Just like your photos from your last vacation may be stored on your smartphone. If you lose or damage the phone you lose or damage the files. Website files live on a server. When you buy a website hosting you're buying space for your files on a server as well as any other bundled services or support. When shopping for website hosting, keep in mind how that hosting provider services and support will keep your files safe and secure and impact the speed and performance of your website overall. There are quite a few different types of hosting. I personally recommend looking for managed hosting for WordPress websites
>
> **[1:33](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=93)** which as of today is a fairly new concept. But what is managed hosting? Managed hosting means that the hosting package is optimized to suit the unique needs of your site type be it WordPress or WordPress with [[WooCommerce]], et cetera. With managed hosting the resources, tools and support you receive are focused on what that site needs. And that includes focus on safety and security. So for example managed WooCommerce hosting will provide extra features and support that are specifically designed for how WooCommerce works and how it might become vulnerable. So there's also the idea of shared hosting or dedicated hosting. These types of hosting are pretty much on their way out and are not very popular anymore but it's still pretty important to note the difference because one is definitely more secure than the other. So think of shared hosting, like living in an apartment building, other people also live in that building so if they throw a loud party, or start a fire or flood their bathroom you very well may reap the consequences. Large amounts of traffic or malware on a website that is on your shared server can negatively affect your site. Dedicated hosting is more like living in a house. You have your own space on your own server and all of those resources belong to you. What happens on someone else's server is not going to affect you and vice versa. Just remember that these plans are typically more expensive than shared hosting is going to be.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=187)** A lot of the decisions you make when shopping for hosting depends on the size and complexity of your website. If you're starting a personal blog or a basic brochure website you probably won't need as many resources but if you're starting an [[E-Commerce]] website, an application, a large database site, something like that you'll need to look more deeply into security options. The more information you take through a website the larger the risk, and so the more resources are needed. Regardless of what type of plan you choose, there are some things that you need to check off your shopping list when looking for hosting. We'll go into more details about many of these items later, but for now just know that they are hosting must haves for a secure site. An SSL certificate is essential, especially if you're taking information of any kind from your visitors. A CDN provides [[Cloud Security]] which can help stop a DDOS attack before it reaches your websites data center, firewalls will block attacks and viruses from affecting your site. Many hosts provide spam filters that protect your emails and your comment section and security monitoring is definitely a must have in order to catch any problems early. Remember that this is not a complete list but all of these things are good to look for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4), [[WooCommerce]] (3), [[Google]] (1), [[E-Commerce]] (1), [[Cloud Security]] (1)
> **Env Vars:** ssl (1), cdn (1), ddos (1)
> **Tools:** safari (1), firefox (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** just like (1), for example (1)
> **Prerequisites:** required to (1), you'll need (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)

#### [Overview of the WordPress structure](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=0)** - [Instructor] So let's talk a little bit about what [[WordPress]] actually is and how it's structured. This is going to help us understand how WordPress sites become vulnerable and subsequently how we can protect them. WordPress is a [[Content Management]] system, which means it's a system for helping manage your content. Other CMS include [[Drupal]], Joomla, and Magneto, as well as things like Squarespace and Wix, which you may have heard of. They all basically do the same thing but in different ways. A WordPress website is made up of a couple of different areas through which your content can be accessed. First you have your WordPress files. Downloading the files that make up WordPress is completely free. It includes the WP content folder where your content goes, WP admin folder, which is where your administrator settings go, and so on. A WordPress website also contains a database. The database stores dynamic data. When you do something on your site, that activity is stored in the database. So the files and the database reference and talk to each other in order to make the site work, and together they create the dashboard, which allows you to make edits to your site without having to directly look at or manipulate the code that makes up the files and the database. This is what makes WordPress so powerful. You don't have to know [[JavaScript]] or [[PHP]] to edit the JavaScript and PHP which makes changes to the site. The dashboard puts it all in plain terms
>
> **[1:32](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=92)** for you to understand and customize. When you take backups, you have to take backups of the files and the database in order to get a full backup of your website. Both the files and the database live on and can be accessed through your server. Your dashboard can be accessed through the browser with a username and a password. Remember that if a hacker gains access to your server, they can access basically all of the information that makes up your website. But if a hacker gains access to just the dashboard, they'll have more limited access. At the same time, they can still do a lot of damage. So both are worth protecting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (8), [[JavaScript]] (2), [[PHP]] (2), [[Content Management]] (1), [[Drupal]] (1)
> **CLI Commands:** make (3), php (2)
> **Env Vars:** php (2), cms (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How WordPress sites become vulnerable](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=0)** - [Instructor] [[WordPress]] is one of the most popular CMS platforms in the world, in large part due to how inherently secure it is. But since it's the most popular CMS in the world that also means it's the most targeted. A study done by Sucuri in 2020, shows us that 94% of websites that were infected with malware in 2019 were WordPress websites. According to the study, most of the hacks were due to vulnerabilities with plugins and themes, configuration problems, and a lack of maintenance and updates. Another report done in 2019, showed that out of a testing pool of 2,837 vulnerabilities were caused by plugins 75% of the time, WordPress core 14% of the time, and themes 11% of the time. Remember that WordPress is open source which means that anyone, anywhere, can contribute code to the files that make up WordPress and to the plugins and themes that help make WordPress work. There are a lot of review processes and guidelines and rules that go into this code before it's published. And when it's discovered that any WordPress related software is vulnerable or unsafe, there are people all over the world who jump to reporting it and, or fixing it. So this means that keeping your software updated, whether it be WordPress core software, plugins or themes, can help you prevent the grand majority of vulnerabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (8)
> **CLI Commands:** make (2)
> **Env Vars:** cms (2)
> **Definitions:** means that (2)
> **Speakers:** - [instructor] (1)


### 2. WordPress User Accounts

[↑ Back to Table of Contents](#table-of-contents)

#### [How to create a secure WordPress user account](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=0)** - [Instructor] So let's talk now about how to create a secure [[WordPress]] user account. Your username and password combination is an easy access point to your website. Think of it like your user account is a master key to your dashboard and therefore your website. Your user account information should be strong and secure and difficult to guess or duplicate. WordPress website hacks are very often caused by compromised passwords. So it's important to set up strong and secure user accounts from the very beginning of setting up your website, even if you haven't officially launched the site yet. We'll begin with the username. One of the most common usernames for WordPress websites is Admin. I remember when I first started using WordPress, that was kind of the default username for your main administrative login account. At the company where I worked, we used admin for all of our client sites. But because it's so common, it's easy to guess. It's become more and more advisable to not use Admin but something else instead. Consider using your own name or just use your email address. If you have multiple users that need to gain access to the site, try a combination of their first and last name. Next you're going to want to set a secure password. This password is best created by using a randomly generated string of letters and numbers and symbols. It's a very good idea to change your password frequently. You might be wondering how am I going to remember this password every time I need to log into my site?
>
> **[1:34](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=94)** Use password manager to encrypt and save your password and username. This is very handy if you have more than one website that you need to log into. This will help you log in perfectly every single time and every time you change your password, you can change it in your password manager. It's important to be familiar with user account types and their associated roles. If you have multiple people working on a website, for example, content writers, designers, developers, interns. You can set particular access for particular users based on what it is they need to do. The administrator is going to have the highest level of access to the website through the dashboard. Essentially they have the master key. You can also give someone access to just the posts or just the pages, or maybe just their posts or just their pages. Limiting your user accounts to just one or two administrators drastically reduces the risk of a hack or a major security breach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** think of it like (1), for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for keeping WordPress user accounts secure](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=0)** - [Instructor] So let's talk about keeping [[WordPress]] user accounts that you created secure moving forward. There are some best practices to remember to ensure the security of these accounts over time. Let's be honest, not everyone needs access to your WordPress website. If you're working with a team, really consider whether or not somebody needs their own login information to the site in order to do their job. For example, a content writer or a graphic designer should probably just send you documents and files that you or a content manager can upload directly to the website. Make sure that as soon as somebody leaves your team, or leaves your company, you remove their account entirely. And you can do this pretty quickly, directly from the WordPress dashboard. Changing the password to lock them out won't always help because any user can reset their password if they want to as long as they have access to the email address associated with that user account. You can also keep your login accounts more secure by changing the URL of the login page. Every single WordPress website has a login page which will be your URL /WP-admin or WP-login. They both redirect to the same thing. Hackers know that this is essentially your front porch where your front door is, and if they have the right key, they can get in. So if you can change this URL with a plugin to something more unique,
>
> **[1:32](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=92)** like URL /letsbegin or URL /teamaccess you make it that much more complicated for somebody to try to gain access to that website. If they can't find the front porch, then they can't find to the door.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4)
> **Env Vars:** url (5)
> **CLI Commands:** make (2), find (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Tools for securing your WordPress login screen](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=0)** - [Instructor] So let's talk about tools that help you secure your [[WordPress]] login screen. WordPress site security always begins with best practices but luckily there are also a lot of tools that can help you keep your site even more secure. Think of them as extra padlocks on your front door. One plugin you can use is called Limit Login Attempts. What this does is shut down your WordPress login form if someone tries to log in and fails too many times. Oftentimes the way that WordPress websites become vulnerable is through a bot, which will try tons and tons of different password combinations very quickly until it gets us the right one, this is called a brute force attack. But if you lock your login screen after three attempts automatically that bot has no chance of getting in. You may have seen this yourself when you forget a password and then have to wait a while before trying again. It can be annoying but it's a great way to keep your site secure. Consider using a Two-Factor Authentication plugin. You may have encountered this before too. You try to log in and it'll send you a text message or an email and you use it to click a link and verify your identity. You can set that up on your WordPress login page as well. So this is a great idea if you have some really sensitive data on the site and you cannot risk strangers logging in. Even if someone finds a password from someone else's account, if they can't verify with a phone number or email they won't gain access.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=93)** Basically if someone is logged into your site for a long time and they're idle or not really doing anything on the site, or maybe they log onto a public computer and forget to log out they will automatically get logged out after a certain amount of time and have to log back in again if they want to access the website. Basically it makes sure that they shut and lock the door behind them and no one else can just wander in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (5)
> **Definitions:** is called (2), is a  (1)
> **Speakers:** - [instructor] (1)


### 3. SSL Certificates

[↑ Back to Table of Contents](#table-of-contents)

#### [How an SSL certificate keeps WordPress sites secure](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=0)** - [Instructor] Let's talk a little bit about SSL certificates. This encryption is key if you accept any kinds of information from your users through your website. This used to apply mainly for personal, private, or sensitive information, like credit cards or addresses, but these days, an SSL certificate is pretty compulsory. They're so low cost and easy to install and [[Google]] prefers that sites have them. Most hosting providers will install one for you, sometimes even for free. The SSL certificate is a piece of code that you install on your web server. It creates encryption on all the files that make up your website so that when those files are sent from the server to your browser, the browser and your server have to do sort of a secret handshake in order to confirm that all of the data is encrypted. A hacker who doesn't know the secret handshake will be unable to access important data, and this is essential for making sure that highly-sensitive information, like credit cards or addresses, any personal or private information at all is more secure. Even if someone sends their name and email through a contact form and that's it, that information will be protected. Think of it like sealing a letter tight in an envelope before sending it through the mail. Anyone who encounters that letter in between your home and its destination won't be able to read it. SSL certificates are so important
>
> **[1:33](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=93)** that Google will actually penalize your website if you don't have one. They prioritize sites that are as safe and secure as possible, so even if you don't run an [[E-Commerce]] website, installing an SSL certificate should be a priority.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[E-Commerce]] (1)
> **Env Vars:** ssl (5)
> **Prerequisites:** install (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** think of it like (1)
> **Speakers:** - [instructor] (1)

#### [How to troubleshoot an SSL installation](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=0)** - [Instructor] Sometimes installing an SSL certificate can go wrong. But it is absolutely possible to troubleshoot it. If you're not seeing the little padlock by your URL or if you're seeing HTTP instead of HTTPS, check the database and make sure that the URL has been updated everywhere. Let's walk through how to do that now together. In your hosting account, go to [[PHP]] My admin, that page should look somewhat like this. Find your website along the left-hand side and choose Options. One of the top items is your site URL and home URL. Edit both to contain the HTTPS prefix instead of HTTP. If that doesn't work, or if those values both already show HTTPS, log into your [[WordPress]] website and go to Settings, you'll see two fields, WordPress address URL, and site address URL. Make sure that both of these have HTTPS instead of HTTP. Once you save, you'll probably have to log back into the WordPress website but now the proper SSL indicator will appear by your URL. Another common issue in setting up an SSL certificate is getting a mixed content warning. This can affect your ability to take certain kinds of information like payments. Basically what this means,
>
> **[1:33](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=93)** is that one of the pieces of content on your pages or on your site, is not being properly encrypted. I think of an SSL certificate almost like setting up blocks on every single door and window in your home. Mixed content means, you forgot one of those [[Windows]]. And since that one is unlocked, it means the entire house is now vulnerable. In order to fix the mixed content message, you need to make sure that the URL the element is running over HTTPS. If it's an image, you can remove and re upload that piece of content over a secure HTTPS connection instead. Or, you can use a plugin to force SSL across the whole site. This is really helpful if you're not exactly sure which element is causing the problem. Our next video, we'll actually talk about the specific SSL troubleshooting plugins that I recommend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[PHP]] (1), [[Windows]] (1)
> **Env Vars:** url (8), ssl (6), https (6), http (3), php (1)
> **CLI Commands:** make (3), php (1), find (1)
> **UI Navigation:** go to (2)
> **Warnings:** troubleshoot (1), warning (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Tools for setting up an SSL certificate](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-an-ssl-certificate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-an-ssl-certificate?u=76281980&t=0)** - [Instructor] In addition to asking your host to set up your SSL certificate for you and setting it up manually through your hosting account, there are also plugins that can help you with your SSL install. My favorites are Really Simple SSL and WP Force SSL and HTTPS Redirect. Both plugins will configure your site to run over HTTPS with minimal work on your end. They work with one click and ensure that the SSL certificate installed on your server works across the entire website. They are great options if your SSL certificate was working well before but you need to troubleshoot mixed content.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (6), https (2)
> **Prerequisites:** set up (1), install (1), configure (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


### 4. WordPress Plugins and Themes

[↑ Back to Table of Contents](#table-of-contents)

#### [How to choose secure WordPress plugins](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=0)** - [Instructor] Choosing secure plugins can be a challenge but is completely possible. Plugins are one of the most important, complex interesting and powerful parts of a [[WordPress]] website. Plugins are also one of the most common ways that WordPress websites are made vulnerable. Basically a WordPress plugin is very similar to an app on your phone. It's a piece of third party software that you can choose to install or uninstall on your website in order to receive some extra functionality of some kind. As of recording this, there are over 55,000 plugins in the WordPress repository and that doesn't include the one sold independently. When choosing plugins, we have to make sure that we're choosing secure ones. And I have a few tips for making sure that any plugin you use is safe. Number one, try to limit the plugins you download to ones in the WordPress repository. All this means is that the plugin has been vetted by a team of people who understand deeply how WordPress works. When they make the cut they're accepted into the repository. There are some exceptions to this such as if a plugin company provides a way for you to purchase or download a plugin directly from their website instead. These will usually be paid plugins. You do not have to pay for any plugin in the repository. Plugins in the repo will almost always have a way for you to find support, documentation and reviews. You can easily see whether or not a plugin has been updated
>
> **[1:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=95)** and what people are saying about it. Many premium plugins may require you to download them via another website, like I said before. Whereas the free version will be available in the repository. Keep in mind, you can more than get by with nothing but free plugins. A paid plugin is not inherently better than a free one. Downloading a plugin from the repository is also important because unfortunately there are people out there who will resell or redistribute bootleg plugins. They download and repackage the plugin files but cannot offer support or updates for those plugins. There are often offering older versions without necessary performance or security patches. That's why it's important to always buy directly from the plugin developer. Tip number two, is to only ever download plugins that have been recently updated. Quote, unquote recently updated is somewhat subjective but a good rule of thumb is making sure that the plugin has been updated within the last few weeks. That indicates that someone will probably be available to answer support tickets and that updates have or will include security patches. Code has to evolve with the internet especially when you are installing plugins with WordPress and WordPress itself consistently changes, those plugins need to change along with it. If there's no team that is updating and supporting that plugin, who knows maybe the company who made it shut down or the developer just moved on to new things.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=190)** When something goes wrong you're putting yourself more at risk if there's no one there to update and support the plugin. Tip number three, look for the indication that this plugin is compatible with the most recently released version of WordPress. If it's been tested with the newest core version but has not exactly been updated, you should be okay. WordPress core updates come up fairly frequently. And it's a good idea to use a plugin that has been tested with that base software. And the final tip, just like when you're shopping for anything, check the reviews. This can be tricky if it's a new plugin that doesn't have a lot of reviews at but if a plugin has tons and tons of downloads like in the thousands and lots and lots of good reviews you can tell that it's probably a safe bet to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (10)
> **CLI Commands:** make (2), find (1)
> **Analogies:** such as (1), just like (1)
> **Best Practices:** rule of thumb (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for keeping WordPress plugins secure](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=0)** - [Narrator] So, now that we know how to find good plugins to use and download, we want to make sure that we're following some best practices to keep them secure over time. In 2023, Patchstack reported almost 6,000 new vulnerabilities. 97% of the time, plugins were responsible. 3% of those vulnerabilities were due to themes and only 0.2% were found in the core [[WordPress]] software. When you log into your WordPress website, check the left hand navigation menu. If there's a number beside the [[Microsoft Word|word]] "plugins," that's the number of plugins that have an update ready for you to grab. These updates typically mean that there is either a new feature in that new version, or, there's a patch or a fix to a problem from a previous version. It's not a great idea to set plugins to update automatically, or to update them immediately when they drop. It's a good idea to wait a day or two and make sure that the new version doesn't have something wrong with it. Sometimes, a new version has a flaw that isn't discovered until many people have updated it. This is called a zero-day vulnerability. Developers usually cannot provide a patch on the very same day, which is why it's good to wait a little bit just to make sure. That way, the version that you update to is the best possible version. Check sites like [WordFence.com](https://WordFence.com), who report on widespread problems
>
> **[1:34](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=94)** and zero-day vulnerabilities. Another best practice for making sure that your plugins don't cause a problem on your WordPress website is to remove any inactive plugins. Plugins should either be active or deleted. Inactive plugins don't add the functionality to your site, but they are still code that exists on your server and can pose a vulnerability if they become out of date.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (3), find (1)
> **URLs:** [wordfence.com](https://wordfence.com) (1)
> **Versions:** 0.2 (1)
> **Definitions:** is called (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### [How to choose secure WordPress themes](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=0)** - [Instructor] Now let's shift the conversation to talk about [[WordPress]] themes. Like plug-ins, there are free and premium ones available, both available through the repository and third parties. Unlike plug-ins, I would personally say that it's a better idea to pay for a premium theme rather than find a free one in the repo. There are definitely exceptions to this, like the WordPress default themes, but paid themes often offer much better features and better support. Themes don't just add some specific functionality or set of functionalities like plug-ins do, but they affect how your site looks overall. If plug-ins are apps on your phone, think of your theme as your wallpapers or widgets. My recommendations for choosing themes are very similar, almost identical, to choosing plug-ins. Only ever download from the repository or from well-known and highly-vetted companies, like Elegant Themes, WooThemes, or TemplateMonster. Only ever download themes that have been recently updated. Again, recently updated, somewhat subjective, but a good rule of thumb is looking for an update within the last few weeks or months. That indicates that someone will probably be available to answer any support tickets you might have, as well as to push out updates and security patches. What the theme does and what it looks like, that's entirely up to you, but keep safety in mind as the number one factor. A secure theme doesn't include any known vulnerabilities,
>
> **[1:38](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=98)** it's constantly updated by the theme developer, it meets acceptable code standards, and it's compatible with your version of WordPress as well as any other plug-ins that you might have installed. If you're like most people and you're not adept at manually reviewing the code of a theme to see if it meets standards, there are definitely other ways to make sure. My personal recommendation? The theme check plug-in, which can help you learn if a theme you found passes WordPress's official review standards. You can also check sites like Wordfence to learn if the theme has a record of vulnerabilities or mass attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for keeping WordPress themes secure](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980&t=0)** - [Instructor] So now that we know how to find secure themes, let's review some best practices for keeping them secure over the life of your [[WordPress]] website. The best practices for making sure your secure theme remains that way are basically the same as for plugins, update consistently and remove inactive themes when you no longer need them. I do recommend having one inactive theme installed at all times. If something goes wrong with your main theme, it's handy to be able to deactivate that theme and swap over to a default one temporarily. I like to use one of the WordPress default themes, for example, Twenty Twenty, Twenty Twenty-One, because I know that they look good. Just make sure to update both of those themes whenever updates are available. The theme you chose may recommend certain plugins to use alongside it. It's a good idea to opt for those since the theme developer has intended for those plugins and your theme to work together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 5. Comment Spam

[↑ Back to Table of Contents](#table-of-contents)

#### [Why spam comments are dangerous for WordPress sites](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=0)** - [Instructor] As blogs became more popular in the early 2000's, hackers and spammers found ways to take advantage. [[WordPress]] is at its core a blogging platform. So even if you don't utilize posts, and only use pages, it's still possible to accumulate harmful spam. Not all spam comments are dangerous. In fact, most aren't. But they can be annoying, ugly, inappropriate, and put your readers at risk. Many spam comments contain malicious links designed to trick visitors into giving away personal information. These links can also be used to transmit viruses and inject malicious code onto your server or computer. This is called an [[SQL]] injection attack. We spoke in a previous video about the relationship between website files and the servers and [[Databases]]. Hackers can use spam comments to inject and execute malicious SQL statements on your database. And these injections can bypass security measures, circumvent authentication and authorization procedures, and add, modify, or delete records in your database. All in all causing a nightmare for you and your website users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[WordPress]] (1), [[Databases]] (1)
> **Env Vars:** sql (2)
> **Cross-References:** previous video (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [How to prevent WordPress spam comments](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=0)** - [Instructor] Preventing [[WordPress]] spam comments is possible in a few primary ways. Your hosting provider may be able to provide additional resources and tools, but here are the two easiest methods that I recommend you start with. Not all WordPress sites need to utilize a blog. Even WordPress sites that have blogs don't need to utilize the commenting feature. You can prevent spam comments from being posted to your site entirely by turning off commenting, or adding extra authentication to the commenting process. If you don't mind eliminating comments, you can turn off commenting by going to your WordPress dashboard, then settings, then discussion. Deselect the option to allow people to submit comments on new posts. If you still want commenting, you can use some additional settings on this page to minimize the risk of spam comments. So, for example, a lot of the worst spam comments contain malicious links. You can block comments that contain links at all if you want to. You can also require that comments are manually approved before they're posted, or require the commenter to be logged into your site before they can register a comment. In addition to, or instead of these settings, you can provide a layer of authentication to prevent spam from being posted in the first place. Add a CAPTCHA with a plugin or another authentication tool. Spam comments are left pretty exclusively by bots and not real human beings.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=92)** If you force the commenter to confirm their identity and humanity, you can prevent spam. You can do this by installing the free CAPTCHA in WP comments form plugin. After activating the plugin, go to settings, reCAPTCHA in comments to configure the settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4)
> **Env Vars:** captcha (2)
> **Code Identifiers:** recaptcha (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [How to remove WordPress spam comments](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=0)** - [Instructor] Preventing spam altogether is going to be your best bet but you can also use a plugin to consistently review comments and then screen out and remove the spammy ones automatically. I highly recommend Akismet, which is a fantastic and highly-rated plugin that does exactly this. Once installed, you should see a screen looking somewhat like this. Select Set up your Akismet account. You'll be redirected to the Akismet site. Click on the same button again. Use the personal option and pay what you can if this is a personal website. If you have ads on your site, promote a business or sell [[Microsoft Products|products]] and services through the site, you'll need to invest in a higher plan option. Add your email address and select the appropriate settings for your site. Verify the account with the confirmation code sent to your email address. You'll get an API which you can enter manually back on your [[WordPress]] dashboard by going to Plugins, Akismet, Settings, Manually enter API key, and finally Connect. Now, you can configure some of the settings. You can have Akismet remove the worst spam or hold spam comments for your review. You can opt to display a [[Privacy]] notice or not. And you can also now use the Check for spam button on the comments page and it will grab any comments that it deems suspicious and toss them right into the spam folder for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[WordPress]] (1), [[Privacy]] (1)
> **Prerequisites:** set up (1), you'll need (1), configure (1)
> **Env Vars:** api (2)
> **UI Navigation:** click on (1), select the (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 6. Website File and Database Backups

[↑ Back to Table of Contents](#table-of-contents)

#### [How to make secure WordPress website backups](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980&t=0)** - [Instructor] Setting up a process for automatic backups of your website is a key security step. A backup is just a copy of your website and all of its files as well as the database. If anything happens to your website, you can scrap it and put up a backup copy that was taken before. Backups are cost-effective, easy to take and to automate and in most cases, easy to restore. It's important to remember to backup your website consistently as you're building it just before launch and on an ongoing basis after launch. Here's some recommended tools that you can research that automate the backup and restore process for you., GoDaddy Pro, UpdraftPlus, BackupBuddy and BlogVault. These are just a few of my favorites. Look into each one of these, look at their features and price points to see which one is the best fit for you.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for taking WordPress website backups](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=0)** - [Instructor] There's some important things to remember when you go about choosing a backup tool, as well as when you go ahead and set up your backups. Make sure that when you're taking a [[WordPress]] website backup it includes the files and the database. Sometimes you'll see the option to back up one or the other. It's always a good idea to take backups of both since the files or the database could be compromised. It would be pretty awful to have database backups only where the issue happened in a file. If you use any form of malware scanning, make sure that it can scan your backups as well. If malware takes your site down you need to know exactly when it was added so that you don't restore a backup that was also infected. Some hosting providers will offer you free server backups. This is a great option, but you should always store your backups in a place other than your server. If someone gets into your server or the server goes down, you want to have a safe copy someplace else that is not affected. You can store backups on your computer in a Dropbox or [[Google Drive]] folder or in another [[Cloud Storage]] system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1), [[Google Drive]] (1), [[Cloud Storage]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 7. Firewalls

[↑ Back to Table of Contents](#table-of-contents)

#### [How firewalls make your site more secure](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=0)** - [Instructor] When preparing to launch your [[WordPress]] website look at firewall options. You can go with third-party tools or firewall options provided by your host. A firewall is a digital layer of protection that filters out threats it can find based on specific rules. It protects the server and the WordPress installation. Think of a bouncer outside a party with a list. They know not to let anyone in who doesn't meet the set criteria or who appears on the list. When someone tries to access your website, a firewall will evaluate them based on what it knows about existing security threats and then determines whether or not to deny or approve access. Firewalls can do wonders to protect your site against a brute force attack. The rules of the firewall dictate how many times someone should try to log into your WordPress website before being blocked. Given that brute force attacks can involve hundreds or even thousands of logging attempts, a firewall is smart enough to recognize them and block them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Tools for setting up a WordPress firewall](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=0)** - [Instructor] Many good [[WordPress]] site hosts will provide you with the choice to enable a firewall directly on the server. There are also tons of plugins as well as full of third-party tools that allow you to set up a firewall. A few of my personal favorite options include Sucuri, iThemes Security Pro, Wordfence, and MalCare. These are good places to start when doing research on which security tool you'd like to use to build your firewall. The security firewall is a third party tool that you can purchase. It can instantly block hackers, virtually patch and harden its filters, protect your brand reputation, and prevent zero day exploits from affecting your website. iThemes Security Pro is a plugin you can install on your WordPress website. It's combined with continuous site monitoring and can actually show you what the firewall was able to block at any given time. The Wordfence firewall is a great option which defends against [[SQL]] injections. Remember that from the spam comments video? Cross-site scripting, malicious file uploads and much more. MalCare is a firewall plugin that keeps bots and hackers at bay, analyzes IP requests, analyzes brute force attacks, and it can even anticipate from other attacks what IP addresses to block, so it's always learning how to protect your site more efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[SQL]] (1)
> **Definitions:** is a  (4)
> **Code Identifiers:** ithemes (2)
> **Prerequisites:** set up (1), install (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 8. Ecommerce Site Security

[↑ Back to Table of Contents](#table-of-contents)

#### [How to make your ecommerce site more secure](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=0)** - [Instructor] If your website is an [[E-Commerce]] website built with [[WordPress]], there are definitely some additional security measures that you should make sure you have in place. In addition to all of the other things mentioned in this course, you're going to want to look into a reputable and strong tool that allows you to take payments. My first recommendation would be [[WooCommerce]]. WooCommerce is built specifically for taking payments through a WordPress website. WooCommerce is a fantastic option because the code is secure. They're consistently coming out with updates to make it safer and better performing. WooCommerce makes sure that your site does not store the credit card information and WooCommerce has a dedicated support team. So if you're using WooCommerce, you can also look into specific hosting options, like Managed WordPress for WooCommerce. Basically what this means is that your hosting support team is going to be extremely knowledgeable and optimize your site for e-commerce website security. In addition to using something like WooCommerce, you also want to make sure that your website is PCI compliant. PCI compliance means that your website, whether it processes, stores, or transmits credit card information, maintains a secure environment. Check out this course on [[LinkedIn]] Learning that goes through all of the steps to lock down PCI compliance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (8), [[WordPress]] (3), [[E-Commerce]] (2), [[LinkedIn]] (1)
> **CLI Commands:** make (3)
> **Env Vars:** pci (3)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for securing an ecommerce site](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=0)** - [Instructor] Best practices for securing an Ecommerce website include all of the things already mentioned previously in this course. But there are a couple of additional steps that you should take for an Ecommerce website. Consider an extended validation CSS certificate. This special SSL certificate is intended to give users much more confidence in who you are and that you control and own the website that they're on. The extended validation SSL certificate assures users that they're really viewing your website and that they're giving their credit card information to your business not an imposter site that looks like yours that could be stealing their data. An SSL certificate is great, definitely a must have, but an extended validations SSL certificate is the highest level of confidence that a company can inspire in its website visitors. It is more expensive, but it's definitely worth it. If you're using something like [[WooCommerce]], remember that WooCommerce itself does not actually process the payments. It just creates [[Microsoft Products|products]], pages, functionalities, interfaces and reporting so that your users can move through the process of making a purchase and you can more easily build out your store. Also, when you're accepting credit card payments through your Ecommerce website, make sure that you're using a secured payment gateway. A gateway is what connects with WooCommerce and then connects with the buyer's bank in order to collect that money. WooCommerce acts like a middleman between your website
>
> **[1:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=95)** and the companies that accept the payments. Examples of a payment gateway would be something like PayPal, Stripe, [authorize.net](https://authorize.net) and so on. Depending on the country that you're in, these payment gateways may need to change. Do some good deep research about exactly which payment gateway is best for you and the people using your site. Shop around like you would with any other product. Look at reviews, look at how long the company has been in business and so on. A good secure payment gateway relies on data encryption as their main security method. Once a customer enters their credit card details into the payment gateway, those details get encrypted through a public key and this information could only be decrypted by the payment gateway's private key, and that is how we make sure that online payments are always secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WooCommerce]] (4), [[Microsoft Products|Products]] (1)
> **Env Vars:** ssl (4), css (1)
> **CLI Commands:** make (2)
> **URLs:** [authorize.net](https://authorize.net) (1)
> **Speakers:** - [instructor] (1)


### 9. Editing WordPress Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure your WordPress site by tweaking the wp-config file](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=0)** - [Narrator] Arguably, the most important file in the [[WordPress]] file structure is the WP Config file. This is the very first file that any web user has to access in order to get connected to your database and make WordPress run properly. There are a couple of things that we can do to the WP Config file to strengthen it and make it more secure. When you first open up the WP Config file, you should be able to find salt keys and authentication keys, and they look something like this. It's a good idea to change these two different unique phrases. You can generate these phrases using this link. You can change these at any point in time to invalidate all existing cookies, and this will force all users to have to log into your website over again. This is a great option if you have a membership site or a blog site where people are able to log in on a regular basis. In the WordPress backend, there's a File Editor available in case you wanted to add, remove, or edit code directly from the WordPress dashboard. It can be handy, but it also poses a pretty large [[Security Risk]]. If someone accesses your dashboard, they immediately have access to all of your site files. You can turn this feature off pretty entirely by copying this line of code and pasting it into your WP Config file. Secure your WordPress site even further by changing what's called the database prefix. By default, WordPress uses WP_ as the prefix
>
> **[1:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=97)** for all tables in your WordPress database. If your site is using the default prefix, it makes it easier for hackers to guess what your table name is because they already know the first three characters. You can change it by following these steps. Go to the WordPress Route Directory and open up the WP Config file. Find this line of code that establishes the table prefix, change it to something else, whatever you want, and then save your changes. Finally, in your hosting account, go to [[PHP]] My Admin and change all of the table names to match.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (8), [[Security Risk]] (1), [[PHP]] (1)
> **CLI Commands:** make (2), find (2), php (1)
> **Env Vars:** wp_ (1), php (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Secure your WordPress site by disabling XML-RPC](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-xml-rpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-xml-rpc?u=76281980&t=0)** - [Instructor] You can further secure your [[WordPress]] site by disabling XML-RPC. And what does that mean? XML-RPC is a procedure that allows you to post on your blog remotely using web blog clients like [[Windows]] Live Writer or the WordPress mobile app. It used to be disabled by default, but in recent versions of WordPress it's enabled by default. To disable it yourself, you can use the Disable CML-RPC plugin. Or you can paste this chunk of code into your .htaccess file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (3), [[Windows]] (1)
> **Env Vars:** rpc (3), xml (2), cml (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Secure your WordPress site by disabling PHP executions](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=0)** - [Instructor] In order for users to easily upload themes, plugins, images and videos onto your site, [[WordPress]] makes certain directories writable automatically. When a directory is writeable, that basically just means it can be edited. This is handy for the usability of your site as you can make certain things writable for certain users, et cetera but it can open up a backdoor access to hackers who want to upload malware to the site. One way to prevent this is to disable [[PHP]] execution in some directories via the htaccess file. To start this process, download your htaccess file. Open it up. Copy and paste this code into the file and then save it. Upload this newly edited file into your wp-includes folder. Then go to the wp-content folder and open up the uploads folder, which is nested inside. Add the newly edited htaccess file to this folder as well. Doing this will prevent new malicious PHP files from being added in these places.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[WordPress]] (1)
> **CLI Commands:** php (2), make (1)
> **Env Vars:** php (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Secure your WordPress site by disabling directory indexing and browsing](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980&t=0)** - [Instructor] Directory browsing can be used by hackers to find out if you have any files with known vulnerabilities so that they can take advantage of those files to gain access to the website. They can view your files, copy images, find out your directory structure and more. This is why it's highly recommended that you turn off directory indexing and browsing. The way to do this is fairly straightforward. Find the htaccess file in your website's root directory. After that, all you need to do is add the following line at the end of the htaccess file. Save the file and you are done.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Secure your WordPress site by tightening file/folder permissions](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=0)** - [Instructor] Remember all your website is is a series of specifically coded and named and organized files and folders. You want to make sure that only certain people have access to change, remove, or add to the files and folders that make up your website. Securing your [[WordPress]] site by tightening file and folder permissions, it's a very good idea and it's a pretty easy to do. First, locate the directory or file you want to set permissions for. Right-click on it and choose File Permissions. In the popup screen that appears, select the permissions that you want. And the pop-up might look something like this. There's also another method. You can log into your cPanel within your hosting account and go to the File Manager. Select the directory or file you want to manage and click Change Permissions. Some suggested settings are as follows. All files in the root folder should be writeable by only you; wp-admin, wp-includes, wp-content/themes, and wp-content/plugins. It's a good idea to make all of these only writeable by you. Make those changes, save, and you are done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1)
> **CLI Commands:** make (4)
> **UI Navigation:** select the (2), right-click (1), go to (1)
> **Code Identifiers:** cpanel (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/wordpress-building-a-secure-site/next-steps-25357044?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/next-steps-25357044?u=76281980&t=0)** - Congratulations, you've completed this course and have more than enough information to secure your [[WordPress]] website, but the journey does not end here. I'd encourage you to search [[LinkedIn]] Learnings library of courses if you want to learn more about plugins, themes, firewalls, [[E-Commerce]] websites, hosting, or any other topic that we touched on. I'm so excited for all the amazing things that you are going to build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (1), [[LinkedIn]] (1), [[E-Commerce]] (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Allie Nimmons]]

## Skills Covered

- Web Application Security
- WordPress

## Path Context

### In [[Advance Your Skills in WordPress]]
**1 of 8** | [[WordPress- Internationalization]] →

### In [[Build Your WordPress Ecommerce Skills]]
← [[WordPress Ecommerce- WooCommerce]] | **3 of 6** | [[WordPress- SEO]] →

## Appears In

- [[Advance Your Skills in WordPress]]
- [[Build Your WordPress Ecommerce Skills]]

## Related Courses

_Courses sharing skills:_

- [[Troubleshoot and Repair Your WordPress Website]] — WordPress
- [[WordPress- Accessibility]] — WordPress
- [[WordPress- Speeding Up Your Site]] — WordPress
- [[WordPress- SEO]] — WordPress
- [[Wordpress Ecommerce]] — WordPress

---

[↑ Back to top](#)