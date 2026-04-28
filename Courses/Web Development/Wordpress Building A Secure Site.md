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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Wordpress%20Building%20A%20Secure%20Site.md)

![Wordpress Building A Secure Site](https://media.licdn.com/dms/image/v2/D560DAQFPY5XAoOMO4g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1690838117691?e=2147483647&amp;v=beta&amp;t=1iYoKbkOSfocRkAgbW8risB9CtZHZMLKhmg1aMJTlak)

# Wordpress Building A Secure Site

> Building a secure website is a required skill for anyone who develops websites. In this course, instructor Allie Nimmons walks you through how to build and launch a secure website with WordPress. Allie explains what to look for when you are shopping for a secure hosting provider for your website. She points out what practices are most important to protect your site from WordPress vulnerabilities, 

> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site) | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (1 videos)
- **2. 1. WordPress Structure and Vulnerabilities** (3 videos)
- **3. 2. WordPress User Accounts** (3 videos)
- **4. 3. SSL Certificates** (3 videos)
- **5. 4. WordPress Plugins and Themes** (4 videos)
- **6. 5. Comment Spam** (3 videos)
- **7. 6. Website File and Database Backups** (2 videos)
- **8. 7. Firewalls** (2 videos)
- **9. 8. Ecommerce Site Security** (2 videos)
- **10. 9. Editing WordPress Files** (5 videos)
- **11. Conclusion** (1 videos)

### 1. Introduction

#### Building a secure WordPress website
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980&t=0)** - These days, website visitors rely on the internet more than ever so your site needs to be as secure as possible in order to make sure that users have an optimal experience.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980&t=11)** In this course, we take a no code approach to WordPress site security.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980&t=16)** I'll explain how to choose and maintain plugins and themes, how to optimize firewalls and maintain SSL certificates, and we'll take a look at what extra steps you can take to protect e-commerce sites.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980&t=29)** I'll give you some of my personal recommendations for free and paid tools to look into.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980&t=34)** And in the final chapter, I'll provide some optional code snippets that I can recommend for an extra layer of security.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980&t=41)** My name is Ally Nimmons, and I've been working with WordPress since 2015.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980&t=45)** If you're ready to get started building a more secure WordPress website, join me.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-building-a-secure-site/building-a-secure-wordpress-website-25356037?u=76281980&t=50)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** ssl (1)
> **Speakers:** - these (1)


### 2. 1. WordPress Structure and Vulnerabilities

#### How to choose a secure WordPress hosting provider
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=0)** - [Instructor] The first step in launching a secure WordPress site is choosing a secure hosting provider.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=6)** The security of your host can largely affect how secure your site is and how secure it will remain.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=13)** Hosting is 100% required to launch a website and it's what your site is built on top of so it's not a place to skimp or cut corners.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=22)** Remember that all websites are made up of nothing but files.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=27)** Those files are full of code, which is just a long list of specific instructions that are delivered to your browser, Google Chrome, Safari, Firefox, et cetera.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=37)** These instructions tell your browser what to show like photos and texts and how to interact with a user, like what to do if a user clicks on a photo or submits information through a form.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=49)** All those files need to physically live somewhere.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=53)** Just like your photos from your last vacation may be stored on your smartphone.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=57)** If you lose or damage the phone you lose or damage the files.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=62)** Website files live on a server.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=64)** When you buy a website hosting you're buying space for your files on a server as well as any other bundled services or support.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=73)** When shopping for website hosting, keep in mind how that hosting provider services and support will keep your files safe and secure and impact the speed and performance of your website overall.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=86)** There are quite a few different types of hosting.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=88)** I personally recommend looking for managed hosting for WordPress websites which as of today is a fairly new concept.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=96)** But what is managed hosting?
>
> **[1:39](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=99)** Managed hosting means that the hosting package is optimized to suit the unique needs of your site type be it WordPress or WordPress with WooCommerce, et cetera.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=110)** With managed hosting the resources, tools and support you receive are focused on what that site needs.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=117)** And that includes focus on safety and security.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=119)** So for example managed WooCommerce hosting will provide extra features and support that are specifically designed for how WooCommerce works and how it might become vulnerable.
>
> **[2:11](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=131)** So there's also the idea of shared hosting or dedicated hosting.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=136)** These types of hosting are pretty much on their way out and are not very popular anymore but it's still pretty important to note the difference because one is definitely more secure than the other.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=147)** So think of shared hosting, like living in an apartment building, other people also live in that building so if they throw a loud party, or start a fire or flood their bathroom you very well may reap the consequences.
>
> **[2:40](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=160)** Large amounts of traffic or malware on a website that is on your shared server can negatively affect your site.
>
> **[2:48](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=168)** Dedicated hosting is more like living in a house.
>
> **[2:52](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=172)** You have your own space on your own server and all of those resources belong to you.
>
> **[2:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=177)** What happens on someone else's server is not going to affect you and vice versa.
>
> **[3:01](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=181)** Just remember that these plans are typically more expensive than shared hosting is going to be.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=187)** A lot of the decisions you make when shopping for hosting depends on the size and complexity of your website.
>
> **[3:13](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=193)** If you're starting a personal blog or a basic brochure website you probably won't need as many resources but if you're starting an e-Commerce website, an application, a large database site, something like that you'll need to look more deeply into security options.
>
> **[3:29](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=209)** The more information you take through a website the larger the risk, and so the more resources are needed.
>
> **[3:36](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=216)** Regardless of what type of plan you choose, there are some things that you need to check off your shopping list when looking for hosting.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=222)** We'll go into more details about many of these items later, but for now just know that they are hosting must haves for a secure site.
>
> **[3:50](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=230)** An SSL certificate is essential, especially if you're taking information of any kind from your visitors.
>
> **[3:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=237)** A CDN provides cloud security which can help stop a DDOS attack before it reaches your websites data center, firewalls will block attacks and viruses from affecting your site.
>
> **[4:09](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=249)** Many hosts provide spam filters that protect your emails and your comment section and security monitoring is definitely a must have in order to catch any problems early.
>
> **[4:20](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-a-secure-wordpress-hosting-provider?u=76281980&t=260)** Remember that this is not a complete list but all of these things are good to look for.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (1), cdn (1), ddos (1)
> **Code Keywords:** throw (1), for. (1)
> **Tools:** safari (1), firefox (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** just like (1), for example (1)
> **Prerequisites:** required to (1), you'll need (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)

#### Overview of the WordPress structure
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=0)** - [Instructor] So let's talk a little bit about what WordPress actually is and how it's structured.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=5)** This is going to help us understand how WordPress sites become vulnerable and subsequently how we can protect them.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=12)** WordPress is a content management system, which means it's a system for helping manage your content.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=20)** Other CMS include Drupal, Joomla, and Magneto, as well as things like Squarespace and Wix, which you may have heard of.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=27)** They all basically do the same thing but in different ways.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=32)** A WordPress website is made up of a couple of different areas through which your content can be accessed.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=37)** First you have your WordPress files.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=40)** Downloading the files that make up WordPress is completely free.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=44)** It includes the WP content folder where your content goes, WP admin folder, which is where your administrator settings go, and so on.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=53)** A WordPress website also contains a database.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=55)** The database stores dynamic data.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=58)** When you do something on your site, that activity is stored in the database.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=64)** So the files and the database reference and talk to each other in order to make the site work, and together they create the dashboard, which allows you to make edits to your site without having to directly look at or manipulate the code that makes up the files and the database.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=80)** This is what makes WordPress so powerful.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=83)** You don't have to know JavaScript or PHP to edit the JavaScript and PHP which makes changes to the site.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=90)** The dashboard puts it all in plain terms for you to understand and customize.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=95)** When you take backups, you have to take backups of the files and the database in order to get a full backup of your website.
>
> **[1:43](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=103)** Both the files and the database live on and can be accessed through your server.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=108)** Your dashboard can be accessed through the browser with a username and a password.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=113)** Remember that if a hacker gains access to your server, they can access basically all of the information that makes up your website.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=121)** But if a hacker gains access to just the dashboard, they'll have more limited access.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=126)** At the same time, they can still do a lot of damage.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-building-a-secure-site/overview-of-the-wordpress-structure?u=76281980&t=129)** So both are worth protecting.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), php (2)
> **Env Vars:** php (2), cms (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### How WordPress sites become vulnerable
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=0)** - [Instructor] WordPress is one of the most popular CMS platforms in the world, in large part due to how inherently secure it is.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=8)** But since it's the most popular CMS in the world that also means it's the most targeted.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=14)** A study done by Sucuri in 2020, shows us that 94% of websites that were infected with malware in 2019 were WordPress websites.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=24)** According to the study, most of the hacks were due to vulnerabilities with plugins and themes, configuration problems, and a lack of maintenance and updates.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=35)** Another report done in 2019, showed that out of a testing pool of 2,837 vulnerabilities were caused by plugins 75% of the time, WordPress core 14% of the time, and themes 11% of the time.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=53)** Remember that WordPress is open source which means that anyone, anywhere, can contribute code to the files that make up WordPress and to the plugins and themes that help make WordPress work.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=65)** There are a lot of review processes and guidelines and rules that go into this code before it's published.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=72)** And when it's discovered that any WordPress related software is vulnerable or unsafe, there are people all over the world who jump to reporting it and, or fixing it.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-wordpress-sites-become-vulnerable?u=76281980&t=83)** So this means that keeping your software updated, whether it be WordPress core software, plugins or themes, can help you prevent the grand majority of vulnerabilities.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** cms (2)
> **Definitions:** means that (2)
> **Speakers:** - [instructor] (1)


### 3. 2. WordPress User Accounts

#### How to create a secure WordPress user account
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=0)** - [Instructor] So let's talk now about how to create a secure WordPress user account.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=5)** Your username and password combination is an easy access point to your website.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=10)** Think of it like your user account is a master key to your dashboard and therefore your website.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=17)** Your user account information should be strong and secure and difficult to guess or duplicate.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=23)** WordPress website hacks are very often caused by compromised passwords.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=27)** So it's important to set up strong and secure user accounts from the very beginning of setting up your website, even if you haven't officially launched the site yet.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=37)** We'll begin with the username.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=39)** One of the most common usernames for WordPress websites is Admin.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=43)** I remember when I first started using WordPress, that was kind of the default username for your main administrative login account.
>
> **[0:50](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=50)** At the company where I worked, we used admin for all of our client sites.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=54)** But because it's so common, it's easy to guess.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=57)** It's become more and more advisable to not use Admin but something else instead.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=63)** Consider using your own name or just use your email address.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=67)** If you have multiple users that need to gain access to the site, try a combination of their first and last name.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=74)** Next you're going to want to set a secure password.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=78)** This password is best created by using a randomly generated string of letters and numbers and symbols.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=84)** It's a very good idea to change your password frequently.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=88)** You might be wondering how am I going to remember this password every time I need to log into my site?
>
> **[1:34](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=94)** Use password manager to encrypt and save your password and username.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=99)** This is very handy if you have more than one website that you need to log into.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=104)** This will help you log in perfectly every single time and every time you change your password, you can change it in your password manager.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=111)** It's important to be familiar with user account types and their associated roles.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=117)** If you have multiple people working on a website, for example, content writers, designers, developers, interns.
>
> **[2:03](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=123)** You can set particular access for particular users based on what it is they need to do.
>
> **[2:09](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=129)** The administrator is going to have the highest level of access to the website through the dashboard.
>
> **[2:16](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=136)** Essentially they have the master key.
>
> **[2:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=138)** You can also give someone access to just the posts or just the pages, or maybe just their posts or just their pages.
>
> **[2:27](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-create-a-secure-wordpress-user-account?u=76281980&t=147)** Limiting your user accounts to just one or two administrators drastically reduces the risk of a hack or a major security breach.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** think of it like (1), for example (1)
> **Code Keywords:** let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Best practices for keeping WordPress user accounts secure
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=0)** - [Instructor] So let's talk about keeping WordPress user accounts that you created secure moving forward.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=6)** There are some best practices to remember to ensure the security of these accounts over time.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=12)** Let's be honest, not everyone needs access to your WordPress website.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=16)** If you're working with a team, really consider whether or not somebody needs their own login information to the site in order to do their job.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=25)** For example, a content writer or a graphic designer should probably just send you documents and files that you or a content manager can upload directly to the website.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=36)** Make sure that as soon as somebody leaves your team, or leaves your company, you remove their account entirely.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=43)** And you can do this pretty quickly, directly from the WordPress dashboard.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=49)** Changing the password to lock them out won't always help because any user can reset their password if they want to as long as they have access to the email address associated with that user account.
>
> **[1:01](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=61)** You can also keep your login accounts more secure by changing the URL of the login page.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=68)** Every single WordPress website has a login page which will be your URL /WP-admin or WP-login.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=78)** They both redirect to the same thing.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=81)** Hackers know that this is essentially your front porch where your front door is, and if they have the right key, they can get in.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=88)** So if you can change this URL with a plugin to something more unique, like URL /letsbegin or URL /teamaccess you make it that much more complicated for somebody to try to gain access to that website.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-user-accounts-secure?u=76281980&t=104)** If they can't find the front porch, then they can't find to the door.

> [!info]- Semantic Content
>
> **Env Vars:** url (5)
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** let (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Tools for securing your WordPress login screen
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=0)** - [Instructor] So let's talk about tools that help you secure your WordPress login screen.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=5)** WordPress site security always begins with best practices but luckily there are also a lot of tools that can help you keep your site even more secure.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=13)** Think of them as extra padlocks on your front door.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=17)** One plugin you can use is called Limit Login Attempts.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=21)** What this does is shut down your WordPress login form if someone tries to log in and fails too many times.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=29)** Oftentimes the way that WordPress websites become vulnerable is through a bot, which will try tons and tons of different password combinations very quickly until it gets us the right one, this is called a brute force attack.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=43)** But if you lock your login screen after three attempts automatically that bot has no chance of getting in.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=49)** You may have seen this yourself when you forget a password and then have to wait a while before trying again.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=55)** It can be annoying but it's a great way to keep your site secure.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=60)** Consider using a Two-Factor Authentication plugin.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=63)** You may have encountered this before too.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=66)** You try to log in and it'll send you a text message or an email and you use it to click a link and verify your identity.
>
> **[1:14](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=74)** You can set that up on your WordPress login page as well.
>
> **[1:17](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=77)** So this is a great idea if you have some really sensitive data on the site and you cannot risk strangers logging in.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=84)** Even if someone finds a password from someone else's account, if they can't verify with a phone number or email they won't gain access.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=93)** Basically if someone is logged into your site for a long time and they're idle or not really doing anything on the site, or maybe they log onto a public computer and forget to log out they will automatically get logged out after a certain amount of time and have to log back in again if they want to access the website.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-securing-your-wordpress-login-screen?u=76281980&t=111)** Basically it makes sure that they shut and lock the door behind them and no one else can just wander in.

> [!info]- Semantic Content
>
> **Definitions:** is called (2), is a  (1)
> **Code Keywords:** let (1), public (1)
> **Speakers:** - [instructor] (1)


### 4. 3. SSL Certificates

#### How an SSL certificate keeps WordPress sites secure
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=0)** - [Instructor] Let's talk a little bit about SSL certificates.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=4)** This encryption is key if you accept any kinds of information from your users through your website.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=11)** This used to apply mainly for personal, private, or sensitive information, like credit cards or addresses, but these days, an SSL certificate is pretty compulsory.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=23)** They're so low cost and easy to install and Google prefers that sites have them.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=29)** Most hosting providers will install one for you, sometimes even for free.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=34)** The SSL certificate is a piece of code that you install on your web server.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=39)** It creates encryption on all the files that make up your website so that when those files are sent from the server to your browser, the browser and your server have to do sort of a secret handshake in order to confirm that all of the data is encrypted.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=55)** A hacker who doesn't know the secret handshake will be unable to access important data, and this is essential for making sure that highly-sensitive information, like credit cards or addresses, any personal or private information at all is more secure.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=71)** Even if someone sends their name and email through a contact form and that's it, that information will be protected.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=79)** Think of it like sealing a letter tight in an envelope before sending it through the mail.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=84)** Anyone who encounters that letter in between your home and its destination won't be able to read it.
>
> **[1:30](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=90)** SSL certificates are so important that Google will actually penalize your website if you don't have one.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-an-ssl-certificate-keeps-wordpress-sites-secure?u=76281980&t=98)** They prioritize sites that are as safe and secure as possible, so even if you don't run an e-commerce website, installing an SSL certificate should be a priority.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (5)
> **Code Keywords:** private (2), let (1), protected (1)
> **Prerequisites:** install (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** think of it like (1)
> **Speakers:** - [instructor] (1)

#### How to troubleshoot an SSL installation
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=0)** - [Instructor] Sometimes installing an SSL certificate can go wrong.
>
> **[0:04](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=4)** But it is absolutely possible to troubleshoot it.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=8)** If you're not seeing the little padlock by your URL or if you're seeing HTTP instead of HTTPS, check the database and make sure that the URL has been updated everywhere.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=22)** Let's walk through how to do that now together.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=25)** In your hosting account, go to PHP My admin, that page should look somewhat like this.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=33)** Find your website along the left-hand side and choose Options.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=37)** One of the top items is your site URL and home URL.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=42)** Edit both to contain the HTTPS prefix instead of HTTP.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=49)** If that doesn't work, or if those values both already show HTTPS, log into your WordPress website and go to Settings, you'll see two fields, WordPress address URL, and site address URL.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=65)** Make sure that both of these have HTTPS instead of HTTP.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=71)** Once you save, you'll probably have to log back into the WordPress website but now the proper SSL indicator will appear by your URL.
>
> **[1:20](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=80)** Another common issue in setting up an SSL certificate is getting a mixed content warning.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=86)** This can affect your ability to take certain kinds of information like payments.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=91)** Basically what this means, is that one of the pieces of content on your pages or on your site, is not being properly encrypted.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=101)** I think of an SSL certificate almost like setting up blocks on every single door and window in your home.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=108)** Mixed content means, you forgot one of those windows.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=111)** And since that one is unlocked, it means the entire house is now vulnerable.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=117)** In order to fix the mixed content message, you need to make sure that the URL the element is running over HTTPS.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=126)** If it's an image, you can remove and re upload that piece of content over a secure HTTPS connection instead.
>
> **[2:14](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=134)** Or, you can use a plugin to force SSL across the whole site.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=139)** This is really helpful if you're not exactly sure which element is causing the problem.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-troubleshoot-an-ssl-installation?u=76281980&t=144)** Our next video, we'll actually talk about the specific SSL troubleshooting plugins that I recommend.

> [!info]- Semantic Content
>
> **Env Vars:** url (8), ssl (6), https (6), http (3), php (1)
> **CLI Commands:** make (3), php (1), find (1)
> **Code Keywords:** let (1), this. (1)
> **UI Navigation:** go to (2)
> **Warnings:** troubleshoot (1), warning (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Tools for setting up an SSL certificate
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-an-ssl-certificate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-an-ssl-certificate?u=76281980&t=0)** - [Instructor] In addition to asking your host to set up your SSL certificate for you and setting it up manually through your hosting account, there are also plugins that can help you with your SSL install.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-an-ssl-certificate?u=76281980&t=12)** My favorites are Really Simple SSL and WP Force SSL and HTTPS Redirect.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-an-ssl-certificate?u=76281980&t=20)** Both plugins will configure your site to run over HTTPS with minimal work on your end.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-an-ssl-certificate?u=76281980&t=27)** They work with one click and ensure that the SSL certificate installed on your server works across the entire website.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-an-ssl-certificate?u=76281980&t=35)** They are great options if your SSL certificate was working well before but you need to troubleshoot mixed content.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (6), https (2)
> **Prerequisites:** set up (1), install (1), configure (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


### 5. 4. WordPress Plugins and Themes

#### How to choose secure WordPress plugins
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=0)** - [Instructor] Choosing secure plugins can be a challenge but is completely possible.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=6)** Plugins are one of the most important, complex interesting and powerful parts of a WordPress website.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=12)** Plugins are also one of the most common ways that WordPress websites are made vulnerable.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=19)** Basically a WordPress plugin is very similar to an app on your phone.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=23)** It's a piece of third party software that you can choose to install or uninstall on your website in order to receive some extra functionality of some kind.
>
> **[0:34](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=34)** As of recording this, there are over 55,000 plugins in the WordPress repository and that doesn't include the one sold independently.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=43)** When choosing plugins, we have to make sure that we're choosing secure ones.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=48)** And I have a few tips for making sure that any plugin you use is safe.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=53)** Number one, try to limit the plugins you download to ones in the WordPress repository.
>
> **[0:59](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=59)** All this means is that the plugin has been vetted by a team of people who understand deeply how WordPress works.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=66)** When they make the cut they're accepted into the repository.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=69)** There are some exceptions to this such as if a plugin company provides a way for you to purchase or download a plugin directly from their website instead.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=78)** These will usually be paid plugins.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=81)** You do not have to pay for any plugin in the repository.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=85)** Plugins in the repo will almost always have a way for you to find support, documentation and reviews.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=92)** You can easily see whether or not a plugin has been updated and what people are saying about it.
>
> **[1:38](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=98)** Many premium plugins may require you to download them via another website, like I said before.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=104)** Whereas the free version will be available in the repository.
>
> **[1:47](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=107)** Keep in mind, you can more than get by with nothing but free plugins.
>
> **[1:52](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=112)** A paid plugin is not inherently better than a free one.
>
> **[1:56](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=116)** Downloading a plugin from the repository is also important because unfortunately there are people out there who will resell or redistribute bootleg plugins.
>
> **[2:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=126)** They download and repackage the plugin files but cannot offer support or updates for those plugins.
>
> **[2:13](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=133)** There are often offering older versions without necessary performance or security patches.
>
> **[2:19](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=139)** That's why it's important to always buy directly from the plugin developer.
>
> **[2:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=144)** Tip number two, is to only ever download plugins that have been recently updated.
>
> **[2:30](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=150)** Quote, unquote recently updated is somewhat subjective but a good rule of thumb is making sure that the plugin has been updated within the last few weeks.
>
> **[2:39](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=159)** That indicates that someone will probably be available to answer support tickets and that updates have or will include security patches.
>
> **[2:47](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=167)** Code has to evolve with the internet especially when you are installing plugins with WordPress and WordPress itself consistently changes, those plugins need to change along with it.
>
> **[3:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=180)** If there's no team that is updating and supporting that plugin, who knows maybe the company who made it shut down or the developer just moved on to new things.
>
> **[3:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=190)** When something goes wrong you're putting yourself more at risk if there's no one there to update and support the plugin.
>
> **[3:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=198)** Tip number three, look for the indication that this plugin is compatible with the most recently released version of WordPress.
>
> **[3:26](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=206)** If it's been tested with the newest core version but has not exactly been updated, you should be okay.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=214)** WordPress core updates come up fairly frequently.
>
> **[3:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=217)** And it's a good idea to use a plugin that has been tested with that base software.
>
> **[3:42](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=222)** And the final tip, just like when you're shopping for anything, check the reviews.
>
> **[3:47](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-plugins?u=76281980&t=227)** This can be tricky if it's a new plugin that doesn't have a lot of reviews at but if a plugin has tons and tons of downloads like in the thousands and lots and lots of good reviews you can tell that it's probably a safe bet to use.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Code Keywords:** this, (1), require (1)
> **Analogies:** such as (1), just like (1)
> **Best Practices:** rule of thumb (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Best practices for keeping WordPress plugins secure
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=0)** - [Narrator] So, now that we know how to find good plugins to use and download, we want to make sure that we're following some best practices to keep them secure over time.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=12)** In 2023, Patchstack reported almost 6,000 new vulnerabilities.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=17)** 97% of the time, plugins were responsible.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=21)** 3% of those vulnerabilities were due to themes and only 0.2% were found in the core WordPress software.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=29)** When you log into your WordPress website, check the left hand navigation menu.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=35)** If there's a number beside the word "plugins," that's the number of plugins that have an update ready for you to grab.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=42)** These updates typically mean that there is either a new feature in that new version, or, there's a patch or a fix to a problem from a previous version.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=52)** It's not a great idea to set plugins to update automatically, or to update them immediately when they drop.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=60)** It's a good idea to wait a day or two and make sure that the new version doesn't have something wrong with it.
>
> **[1:07](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=67)** Sometimes, a new version has a flaw that isn't discovered until many people have updated it.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=73)** This is called a zero-day vulnerability.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=76)** Developers usually cannot provide a patch on the very same day, which is why it's good to wait a little bit just to make sure.
>
> **[1:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=83)** That way, the version that you update to is the best possible version.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=88)** Check sites like [WordFence.com](https://WordFence.com), who report on widespread problems and zero-day vulnerabilities.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=97)** Another best practice for making sure that your plugins don't cause a problem on your WordPress website is to remove any inactive plugins.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=105)** Plugins should either be active or deleted.
>
> **[1:48](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-plugins-secure-25359020?u=76281980&t=108)** Inactive plugins don't add the functionality to your site, but they are still code that exists on your server and can pose a vulnerability if they become out of date.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **URLs:** [wordfence.com](https://wordfence.com) (1)
> **Versions:** 0.2 (1)
> **Definitions:** is called (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### How to choose secure WordPress themes
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=0)** - [Instructor] Now let's shift the conversation to talk about WordPress themes.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=5)** Like plug-ins, there are free and premium ones available, both available through the repository and third parties.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=13)** Unlike plug-ins, I would personally say that it's a better idea to pay for a premium theme rather than find a free one in the repo.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=23)** There are definitely exceptions to this, like the WordPress default themes, but paid themes often offer much better features and better support.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=33)** Themes don't just add some specific functionality or set of functionalities like plug-ins do, but they affect how your site looks overall.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=42)** If plug-ins are apps on your phone, think of your theme as your wallpapers or widgets.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=49)** My recommendations for choosing themes are very similar, almost identical, to choosing plug-ins.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=55)** Only ever download from the repository or from well-known and highly-vetted companies, like Elegant Themes, WooThemes, or TemplateMonster.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=65)** Only ever download themes that have been recently updated.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=68)** Again, recently updated, somewhat subjective, but a good rule of thumb is looking for an update within the last few weeks or months.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=76)** That indicates that someone will probably be available to answer any support tickets you might have, as well as to push out updates and security patches.
>
> **[1:25](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=85)** What the theme does and what it looks like, that's entirely up to you, but keep safety in mind as the number one factor.
>
> **[1:34](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=94)** A secure theme doesn't include any known vulnerabilities, it's constantly updated by the theme developer, it meets acceptable code standards, and it's compatible with your version of WordPress as well as any other plug-ins that you might have installed.
>
> **[1:51](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=111)** If you're like most people and you're not adept at manually reviewing the code of a theme to see if it meets standards, there are definitely other ways to make sure.
>
> **[2:01](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=121)** My personal recommendation?
>
> **[2:03](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=123)** The theme check plug-in, which can help you learn if a theme you found passes WordPress's official review standards.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-choose-secure-wordpress-themes?u=76281980&t=130)** You can also check sites like Wordfence to learn if the theme has a record of vulnerabilities or mass attacks.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (1), this, (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Best practices for keeping WordPress themes secure
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980&t=0)** - [Instructor] So now that we know how to find secure themes, let's review some best practices for keeping them secure over the life of your WordPress website.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980&t=10)** The best practices for making sure your secure theme remains that way are basically the same as for plugins, update consistently and remove inactive themes when you no longer need them.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980&t=23)** I do recommend having one inactive theme installed at all times.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980&t=28)** If something goes wrong with your main theme, it's handy to be able to deactivate that theme and swap over to a default one temporarily.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980&t=38)** I like to use one of the WordPress default themes, for example, Twenty Twenty, Twenty Twenty-One, because I know that they look good.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980&t=47)** Just make sure to update both of those themes whenever updates are available.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980&t=53)** The theme you chose may recommend certain plugins to use alongside it.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-keeping-wordpress-themes-secure?u=76281980&t=58)** It's a good idea to opt for those since the theme developer has intended for those plugins and your theme to work together.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Comment Spam

#### Why spam comments are dangerous for WordPress sites
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=0)** - [Instructor] As blogs became more popular in the early 2000's, hackers and spammers found ways to take advantage.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=8)** WordPress is at its core a blogging platform.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=12)** So even if you don't utilize posts, and only use pages, it's still possible to accumulate harmful spam.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=20)** Not all spam comments are dangerous.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=22)** In fact, most aren't.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=24)** But they can be annoying, ugly, inappropriate, and put your readers at risk.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=29)** Many spam comments contain malicious links designed to trick visitors into giving away personal information.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=37)** These links can also be used to transmit viruses and inject malicious code onto your server or computer.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=44)** This is called an SQL injection attack.
>
> **[0:48](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=48)** We spoke in a previous video about the relationship between website files and the servers and databases.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=54)** Hackers can use spam comments to inject and execute malicious SQL statements on your database.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=60)** And these injections can bypass security measures, circumvent authentication and authorization procedures, and add, modify, or delete records in your database.
>
> **[1:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/why-spam-comments-are-dangerous-for-wordpress-sites?u=76281980&t=70)** All in all causing a nightmare for you and your website users.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2)
> **Code Keywords:** delete (1)
> **Cross-References:** previous video (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### How to prevent WordPress spam comments
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=0)** - [Instructor] Preventing WordPress spam comments is possible in a few primary ways.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=5)** Your hosting provider may be able to provide additional resources and tools, but here are the two easiest methods that I recommend you start with.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=15)** Not all WordPress sites need to utilize a blog.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=18)** Even WordPress sites that have blogs don't need to utilize the commenting feature.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=24)** You can prevent spam comments from being posted to your site entirely by turning off commenting, or adding extra authentication to the commenting process.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=33)** If you don't mind eliminating comments, you can turn off commenting by going to your WordPress dashboard, then settings, then discussion.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=44)** Deselect the option to allow people to submit comments on new posts.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=49)** If you still want commenting, you can use some additional settings on this page to minimize the risk of spam comments.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=55)** So, for example, a lot of the worst spam comments contain malicious links.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=60)** You can block comments that contain links at all if you want to.
>
> **[1:04](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=64)** You can also require that comments are manually approved before they're posted, or require the commenter to be logged into your site before they can register a comment.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=76)** In addition to, or instead of these settings, you can provide a layer of authentication to prevent spam from being posted in the first place.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=84)** Add a CAPTCHA with a plugin or another authentication tool.
>
> **[1:28](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=88)** Spam comments are left pretty exclusively by bots and not real human beings.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=92)** If you force the commenter to confirm their identity and humanity, you can prevent spam.
>
> **[1:39](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=99)** You can do this by installing the free CAPTCHA in WP comments form plugin.
>
> **[1:45](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-prevent-wordpress-spam-comments-25351048?u=76281980&t=105)** After activating the plugin, go to settings, reCAPTCHA in comments to configure the settings.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2)
> **Env Vars:** captcha (2)
> **Code Identifiers:** recaptcha (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### How to remove WordPress spam comments
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=0)** - [Instructor] Preventing spam altogether is going to be your best bet but you can also use a plugin to consistently review comments and then screen out and remove the spammy ones automatically.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=12)** I highly recommend Akismet, which is a fantastic and highly-rated plugin that does exactly this.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=18)** Once installed, you should see a screen looking somewhat like this.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=22)** Select Set up your Akismet account.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=25)** You'll be redirected to the Akismet site.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=28)** Click on the same button again.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=30)** Use the personal option and pay what you can if this is a personal website.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=35)** If you have ads on your site, promote a business or sell products and services through the site, you'll need to invest in a higher plan option.
>
> **[0:44](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=44)** Add your email address and select the appropriate settings for your site.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=49)** Verify the account with the confirmation code sent to your email address.
>
> **[0:54](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=54)** You'll get an API which you can enter manually back on your WordPress dashboard by going to Plugins, Akismet, Settings, Manually enter API key, and finally Connect.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=68)** Now, you can configure some of the settings.
>
> **[1:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=72)** You can have Akismet remove the worst spam or hold spam comments for your review.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=78)** You can opt to display a privacy notice or not.
>
> **[1:21](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-remove-wordpress-spam-comments?u=76281980&t=81)** And you can also now use the Check for spam button on the comments page and it will grab any comments that it deems suspicious and toss them right into the spam folder for you.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (1), you'll need (1), configure (1)
> **Code Keywords:** this. (2)
> **Env Vars:** api (2)
> **UI Navigation:** click on (1), select the (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 7. 6. Website File and Database Backups

#### How to make secure WordPress website backups
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980&t=0)** - [Instructor] Setting up a process for automatic backups of your website is a key security step.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980&t=6)** A backup is just a copy of your website and all of its files as well as the database.
>
> **[0:12](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980&t=12)** If anything happens to your website, you can scrap it and put up a backup copy that was taken before.
>
> **[0:19](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980&t=19)** Backups are cost-effective, easy to take and to automate and in most cases, easy to restore.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980&t=27)** It's important to remember to backup your website consistently as you're building it just before launch and on an ongoing basis after launch.
>
> **[0:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980&t=37)** Here's some recommended tools that you can research that automate the backup and restore process for you., GoDaddy Pro, UpdraftPlus, BackupBuddy and BlogVault.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980&t=49)** These are just a few of my favorites.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-secure-wordpress-website-backups?u=76281980&t=52)** Look into each one of these, look at their features and price points to see which one is the best fit for you.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Best practices for taking WordPress website backups
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=0)** - [Instructor] There's some important things to remember when you go about choosing a backup tool, as well as when you go ahead and set up your backups.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=7)** Make sure that when you're taking a WordPress website backup it includes the files and the database.
>
> **[0:13](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=13)** Sometimes you'll see the option to back up one or the other.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=17)** It's always a good idea to take backups of both since the files or the database could be compromised.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=24)** It would be pretty awful to have database backups only where the issue happened in a file.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=30)** If you use any form of malware scanning, make sure that it can scan your backups as well.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=35)** If malware takes your site down you need to know exactly when it was added so that you don't restore a backup that was also infected.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=42)** Some hosting providers will offer you free server backups.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=46)** This is a great option, but you should always store your backups in a place other than your server.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=51)** If someone gets into your server or the server goes down, you want to have a safe copy someplace else that is not affected.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-taking-wordpress-website-backups?u=76281980&t=58)** You can store backups on your computer in a Dropbox or Google Drive folder or in another cloud storage system.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Best Practices:** you should always (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Firewalls

#### How firewalls make your site more secure
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=0)** - [Instructor] When preparing to launch your WordPress website look at firewall options.
>
> **[0:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=5)** You can go with third-party tools or firewall options provided by your host.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=10)** A firewall is a digital layer of protection that filters out threats it can find based on specific rules.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=17)** It protects the server and the WordPress installation.
>
> **[0:21](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=21)** Think of a bouncer outside a party with a list.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=24)** They know not to let anyone in who doesn't meet the set criteria or who appears on the list.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=31)** When someone tries to access your website, a firewall will evaluate them based on what it knows about existing security threats and then determines whether or not to deny or approve access.
>
> **[0:43](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=43)** Firewalls can do wonders to protect your site against a brute force attack.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=47)** The rules of the firewall dictate how many times someone should try to log into your WordPress website before being blocked.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-firewalls-make-your-site-more-secure?u=76281980&t=55)** Given that brute force attacks can involve hundreds or even thousands of logging attempts, a firewall is smart enough to recognize them and block them.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Tools for setting up a WordPress firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=0)** - [Instructor] Many good WordPress site hosts will provide you with the choice to enable a firewall directly on the server.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=7)** There are also tons of plugins as well as full of third-party tools that allow you to set up a firewall.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=14)** A few of my personal favorite options include Sucuri, iThemes Security Pro, Wordfence, and MalCare.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=23)** These are good places to start when doing research on which security tool you'd like to use to build your firewall.
>
> **[0:31](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=31)** The security firewall is a third party tool that you can purchase.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=35)** It can instantly block hackers, virtually patch and harden its filters, protect your brand reputation, and prevent zero day exploits from affecting your website.
>
> **[0:47](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=47)** iThemes Security Pro is a plugin you can install on your WordPress website.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=52)** It's combined with continuous site monitoring and can actually show you what the firewall was able to block at any given time.
>
> **[1:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=60)** The Wordfence firewall is a great option which defends against SQL injections.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=66)** Remember that from the spam comments video?
>
> **[1:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=68)** Cross-site scripting, malicious file uploads and much more.
>
> **[1:13](https://www.linkedin.com/learning/wordpress-building-a-secure-site/tools-for-setting-up-a-wordpress-firewall?u=76281980&t=73)** MalCare is a firewall plugin that keeps bots and hackers at bay, analyzes IP requests, analyzes brute force attacks, and it can even anticipate from other attacks what IP addresses to block, so it's always learning how to protect your site more efficiently.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **Code Identifiers:** ithemes (2)
> **Prerequisites:** set up (1), install (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)


### 9. 8. Ecommerce Site Security

#### How to make your ecommerce site more secure
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=0)** - [Instructor] If your website is an e-commerce website built with WordPress, there are definitely some additional security measures that you should make sure you have in place.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=10)** In addition to all of the other things mentioned in this course, you're going to want to look into a reputable and strong tool that allows you to take payments.
>
> **[0:20](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=20)** My first recommendation would be WooCommerce.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=23)** WooCommerce is built specifically for taking payments through a WordPress website.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=29)** WooCommerce is a fantastic option because the code is secure.
>
> **[0:33](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=33)** They're consistently coming out with updates to make it safer and better performing.
>
> **[0:38](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=38)** WooCommerce makes sure that your site does not store the credit card information and WooCommerce has a dedicated support team.
>
> **[0:45](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=45)** So if you're using WooCommerce, you can also look into specific hosting options, like Managed WordPress for WooCommerce.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=52)** Basically what this means is that your hosting support team is going to be extremely knowledgeable and optimize your site for e-commerce website security.
>
> **[1:03](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=63)** In addition to using something like WooCommerce, you also want to make sure that your website is PCI compliant.
>
> **[1:09](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=69)** PCI compliance means that your website, whether it processes, stores, or transmits credit card information, maintains a secure environment.
>
> **[1:19](https://www.linkedin.com/learning/wordpress-building-a-secure-site/how-to-make-your-ecommerce-site-more-secure?u=76281980&t=79)** Check out this course on LinkedIn Learning that goes through all of the steps to lock down PCI compliance.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** pci (3)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### Best practices for securing an ecommerce site
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=0)** - [Instructor] Best practices for securing an Ecommerce website include all of the things already mentioned previously in this course.
>
> **[0:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=8)** But there are a couple of additional steps that you should take for an Ecommerce website.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=14)** Consider an extended validation CSS certificate.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=18)** This special SSL certificate is intended to give users much more confidence in who you are and that you control and own the website that they're on.
>
> **[0:28](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=28)** The extended validation SSL certificate assures users that they're really viewing your website and that they're giving their credit card information to your business not an imposter site that looks like yours that could be stealing their data.
>
> **[0:42](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=42)** An SSL certificate is great, definitely a must have, but an extended validations SSL certificate is the highest level of confidence that a company can inspire in its website visitors.
>
> **[0:53](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=53)** It is more expensive, but it's definitely worth it.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=57)** If you're using something like WooCommerce, remember that WooCommerce itself does not actually process the payments.
>
> **[1:05](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=65)** It just creates products, pages, functionalities, interfaces and reporting so that your users can move through the process of making a purchase and you can more easily build out your store.
>
> **[1:16](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=76)** Also, when you're accepting credit card payments through your Ecommerce website, make sure that you're using a secured payment gateway.
>
> **[1:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=84)** A gateway is what connects with WooCommerce and then connects with the buyer's bank in order to collect that money.
>
> **[1:31](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=91)** WooCommerce acts like a middleman between your website and the companies that accept the payments.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=97)** Examples of a payment gateway would be something like PayPal, Stripe, [authorize.net](https://authorize.net) and so on.
>
> **[1:44](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=104)** Depending on the country that you're in, these payment gateways may need to change.
>
> **[1:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=109)** Do some good deep research about exactly which payment gateway is best for you and the people using your site.
>
> **[1:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=117)** Shop around like you would with any other product.
>
> **[1:59](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=119)** Look at reviews, look at how long the company has been in business and so on.
>
> **[2:04](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=124)** A good secure payment gateway relies on data encryption as their main security method.
>
> **[2:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/best-practices-for-securing-an-ecommerce-site?u=76281980&t=130)** Once a customer enters their credit card details into the payment gateway, those details get encrypted through a public key and this information could only be decrypted by the payment gateway's private key, and that is how we make sure that online payments are always secure.

> [!info]- Semantic Content
>
> **Env Vars:** ssl (4), css (1)
> **CLI Commands:** make (2)
> **Code Keywords:** public (1), private (1)
> **URLs:** [authorize.net](https://authorize.net) (1)
> **Speakers:** - [instructor] (1)


### 10. 9. Editing WordPress Files

#### Secure your WordPress site by tweaking the wp-config file
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=0)** - [Narrator] Arguably, the most important file in the WordPress file structure is the WP Config file.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=6)** This is the very first file that any web user has to access in order to get connected to your database and make WordPress run properly.
>
> **[0:15](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=15)** There are a couple of things that we can do to the WP Config file to strengthen it and make it more secure.
>
> **[0:22](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=22)** When you first open up the WP Config file, you should be able to find salt keys and authentication keys, and they look something like this.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=32)** It's a good idea to change these two different unique phrases.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=36)** You can generate these phrases using this link.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=40)** You can change these at any point in time to invalidate all existing cookies, and this will force all users to have to log into your website over again.
>
> **[0:49](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=49)** This is a great option if you have a membership site or a blog site where people are able to log in on a regular basis.
>
> **[0:57](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=57)** In the WordPress backend, there's a File Editor available in case you wanted to add, remove, or edit code directly from the WordPress dashboard.
>
> **[1:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=66)** It can be handy, but it also poses a pretty large security risk.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=71)** If someone accesses your dashboard, they immediately have access to all of your site files.
>
> **[1:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=78)** You can turn this feature off pretty entirely by copying this line of code and pasting it into your WP Config file.
>
> **[1:26](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=86)** Secure your WordPress site even further by changing what's called the database prefix.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=92)** By default, WordPress uses WP_ as the prefix for all tables in your WordPress database.
>
> **[1:41](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=101)** If your site is using the default prefix, it makes it easier for hackers to guess what your table name is because they already know the first three characters.
>
> **[1:50](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=110)** You can change it by following these steps.
>
> **[1:53](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=113)** Go to the WordPress Route Directory and open up the WP Config file.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=118)** Find this line of code that establishes the table prefix, change it to something else, whatever you want, and then save your changes.
>
> **[2:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tweaking-the-wp-config-file-25357043?u=76281980&t=128)** Finally, in your hosting account, go to PHP My Admin and change all of the table names to match.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2), php (1)
> **Code Keywords:** this. (1), default, (1), else, (1), finally, (1), match. (1)
> **Env Vars:** wp_ (1), php (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Secure your WordPress site by disabling XML-RPC
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-xml-rpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-xml-rpc?u=76281980&t=0)** - [Instructor] You can further secure your WordPress site by disabling XML-RPC.
>
> **[0:06](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-xml-rpc?u=76281980&t=6)** And what does that mean?
>
> **[0:07](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-xml-rpc?u=76281980&t=7)** XML-RPC is a procedure that allows you to post on your blog remotely using web blog clients like Windows Live Writer or the WordPress mobile app.
>
> **[0:18](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-xml-rpc?u=76281980&t=18)** It used to be disabled by default, but in recent versions of WordPress it's enabled by default.
>
> **[0:24](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-xml-rpc?u=76281980&t=24)** To disable it yourself, you can use the Disable CML-RPC plugin.
>
> **[0:30](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-xml-rpc?u=76281980&t=30)** Or you can paste this chunk of code into your .htaccess file.

> [!info]- Semantic Content
>
> **Env Vars:** rpc (3), xml (2), cml (1)
> **Code Keywords:** default, (1), default. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Secure your WordPress site by disabling PHP executions
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=0)** - [Instructor] In order for users to easily upload themes, plugins, images and videos onto your site, WordPress makes certain directories writable automatically.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=10)** When a directory is writeable, that basically just means it can be edited.
>
> **[0:14](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=14)** This is handy for the usability of your site as you can make certain things writable for certain users, et cetera but it can open up a backdoor access to hackers who want to upload malware to the site.
>
> **[0:27](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=27)** One way to prevent this is to disable PHP execution in some directories via the htaccess file.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=35)** To start this process, download your htaccess file.
>
> **[0:40](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=40)** Open it up.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=41)** Copy and paste this code into the file and then save it.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=46)** Upload this newly edited file into your wp-includes folder.
>
> **[0:51](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=51)** Then go to the wp-content folder and open up the uploads folder, which is nested inside.
>
> **[0:58](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=58)** Add the newly edited htaccess file to this folder as well.
>
> **[1:02](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-php-executions?u=76281980&t=62)** Doing this will prevent new malicious PHP files from being added in these places.

> [!info]- Semantic Content
>
> **CLI Commands:** php (2), make (1)
> **Env Vars:** php (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Secure your WordPress site by disabling directory indexing and browsing
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980&t=0)** - [Instructor] Directory browsing can be used by hackers to find out if you have any files with known vulnerabilities so that they can take advantage of those files to gain access to the website.
>
> **[0:11](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980&t=11)** They can view your files, copy images, find out your directory structure and more.
>
> **[0:16](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980&t=16)** This is why it's highly recommended that you turn off directory indexing and browsing.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980&t=23)** The way to do this is fairly straightforward.
>
> **[0:25](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980&t=25)** Find the htaccess file in your website's root directory.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980&t=29)** After that, all you need to do is add the following line at the end of the htaccess file.
>
> **[0:35](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-disabling-directory-indexing-and-browsing?u=76281980&t=35)** Save the file and you are done.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Secure your WordPress site by tightening file/folder permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=0)** - [Instructor] Remember all your website is is a series of specifically coded and named and organized files and folders.
>
> **[0:07](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=7)** You want to make sure that only certain people have access to change, remove, or add to the files and folders that make up your website.
>
> **[0:17](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=17)** Securing your WordPress site by tightening file and folder permissions, it's a very good idea and it's a pretty easy to do.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=23)** First, locate the directory or file you want to set permissions for.
>
> **[0:29](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=29)** Right-click on it and choose File Permissions.
>
> **[0:32](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=32)** In the popup screen that appears, select the permissions that you want.
>
> **[0:36](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=36)** And the pop-up might look something like this.
>
> **[0:39](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=39)** There's also another method.
>
> **[0:41](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=41)** You can log into your cPanel within your hosting account and go to the File Manager.
>
> **[0:46](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=46)** Select the directory or file you want to manage and click Change Permissions.
>
> **[0:52](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=52)** Some suggested settings are as follows.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=55)** All files in the root folder should be writeable by only you; wp-admin, wp-includes, wp-content/themes, and wp-content/plugins.
>
> **[1:08](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=68)** It's a good idea to make all of these only writeable by you.
>
> **[1:11](https://www.linkedin.com/learning/wordpress-building-a-secure-site/secure-your-wordpress-site-by-tightening-file-folder-permissions?u=76281980&t=71)** Make those changes, save, and you are done.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **UI Navigation:** select the (2), right-click (1), go to (1)
> **Code Keywords:** for. (1), this. (1)
> **Code Identifiers:** cpanel (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 11. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/wordpress-building-a-secure-site/next-steps-25357044?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-building-a-secure-site/next-steps-25357044?u=76281980&t=0)** - Congratulations, you've completed this course and have more than enough information to secure your WordPress website, but the journey does not end here.
>
> **[0:10](https://www.linkedin.com/learning/wordpress-building-a-secure-site/next-steps-25357044?u=76281980&t=10)** I'd encourage you to search LinkedIn Learnings library of courses if you want to learn more about plugins, themes, firewalls, e-commerce websites, hosting, or any other topic that we touched on.
>
> **[0:23](https://www.linkedin.com/learning/wordpress-building-a-secure-site/next-steps-25357044?u=76281980&t=23)** I'm so excited for all the amazing things that you are going to build.

> [!info]- Semantic Content
>
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