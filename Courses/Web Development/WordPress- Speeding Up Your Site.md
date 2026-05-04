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
  - '[Build Your WordPress Ecommerce Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20WordPress%20Ecommerce%20Skills.md)'
prev_courses:
  - '[WordPress- SEO](WordPress-%20SEO.md)'
next_courses:
  - '[Building a WordPress Membership Site with Ecommerce](Building%20a%20WordPress%20Membership%20Site%20with%20Ecommerce.md)'
path_nav: '[{"path":"Build Your WordPress Ecommerce Skills","position":5,"total":6,"prev":"WordPress- SEO","next":"Building a WordPress Membership Site with Ecommerce"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/wordpress
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/make-your-wordpress-website-lightning-fast?u=76281980&t=0)** - [Patrick] [WordPress](../../Skills/Web%20Development/WordPress.md) makes creating and maintaining a website easy. That's why over 40% of websites on the internet use WordPress. It's by far the most popular [Content Management](../../Skills/Web%20Development/Content%20Management.md) system in the world. But the same features that make WordPress easy to maintain don't necessarily make it fast. And nowadays, no one wants to wait. If your website takes more than three seconds to load, people abandon ship and bounce out of your site, fewer people will convert, and because search engines know consumers don't like to wait, they take speed into consideration for your search engine ranking. I'm going to show you how to improve the speed and performance of your WordPress website. We'll look into plugins, themes, optimizing images, using CDNs, manage WordPress hosts, and the right way to test and measure the speed of your website on a weekly basis. I'm Patrick Rauland, and I've been building WordPress websites professionally for over a decade. I've built sites for clients, created custom themes, developed plugins, designed software, and worked with WordPress hosts. If you're ready to take your WordPress site to the next level, then come join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (8), [Content Management](../../Skills/Web%20Development/Content%20Management.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (2)
> **Speakers:** - [patrick] (1)

#### [What you should know](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-you-should-know?u=76281980&t=0)** - [Narrator] Before we dive in, let's go over what you should know. First, you should be very comfortable with [WordPress](../../Skills/Web%20Development/WordPress.md). That means knowing how to find and install plugins, how to select and customize themes and how to use the WordPress admin interface. Next, it'll be helpful if you're familiar with [HTML](../../Skills/Web%20Development/HTML.md), CSS and [JavaScript](../../Skills/Software%20Development/JavaScript.md). A lot of the optimization in this course focuses on these front end technologies. Next you'll need to know a little bit about how WordPress hosting works. You won't need to know the details about server optimization, but some basics about how servers work will help with a lot of the backend optimization. And finally, you should be open to exploring. Some of the things I will show you will not work on your site. And some of them will work better than the example on screen. So come prepared with an open mind knowing that your results will vary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** html (1), css (1)
> **Prerequisites:** install (1), you'll need (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)


### 1. Fundamentals of Performance

[↑ Back to Table of Contents](#table-of-contents)

#### [Why speed is important for websites](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=0)** - [Instructor] Before we get into the nitty-gritty of speeding up your website, it's important to understand why speed is important in the first place. The one-sentence summary is no one wants to wait. The less time people have to wait, the more time they have to browse your site and convert, whether that means filling out a [Lead Generation](../../Skills/Cloud%20Computing/Lead%20Generation.md) form or checking out on your [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) store. Numerous studies show that as page speed goes up, so does the bounce rate. People either leave before your page finishes loading or they're so frustrated they don't take any action when it does load. Whatever the reason, a high bounce rate is bad news. Similarly, the slower the website, the fewer pages visitors read. If things are snappy, someone might read nine pages. But if pages take forever to load, the same person might only read three pages. People just don't want to wait. The bounce rate and number of pages are only two elements affected by your website speed. Numerous case studies show that A/B testing to optimize website speed almost always corresponds with an increased sales and revenue. In this case, the sped-up version of a website increased the company's orders by a massive 16 1/2%. When you're working on optimization and your goal is to increase conversions, here's a rule of thumb. A one-second delay decreases conversions by 7%. If your site loads in four seconds and you can reduce it to three seconds,
>
> **[1:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-speed-is-important-for-websites?u=76281980&t=92)** you could see a 7% increase in conversions. The other big reason to increase your website speed is to improve your [search engine optimization](../../Skills/Data%20Science/Search%20Engine%20Optimization%20(SEO).md), or SEO. Search engines know that people don't want to wait. So they rank fast websites more highly than slow websites. [Google](../../Glossary/Service/Google.md) started using speed as a factor for PageRank way back in 2010, since their Core Web Vitals initiative began. It's only become more relevant in recent years. If you want a rule of thumb for load time, then shoot for less than three seconds. If your website can go faster, then go faster. It'll only help your site. But three seconds is a great initial goal if your load time is slower than that. These three benefits make speeding up a website easy to sell to your stakeholders. Number one, the lower bounce rate, number two, increased conversions, and number three, better search engine ranking. If you're a web developer, you can tell your boss exactly how a faster website will make the company more money. And if you work for a [Web Development](../../Topics/Web%20Development.md) agency, you can offer the added value of website optimization as a service or include it as part of your website build. Speed is incredibly important if you actually want users to visit and interact on your website. Now let's see if we can help you find a starting point for your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Lead Generation](../../Skills/Cloud%20Computing/Lead%20Generation.md) (1), [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (1), [Search engine optimization](../../Skills/Data%20Science/Search%20Engine%20Optimization%20(SEO).md) (1), [Google](../../Glossary/Service/Google.md) (1), [Web Development](../../Topics/Web%20Development.md) (1)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** rule of thumb (2)
> **Env Vars:** seo (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How to check and monitor your speed](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=0)** - [Instructor] There's a great quote, which applies to this whole course and especially this lesson. "What gets measured gets improved." Lucky for us, website speed is easy to measure, break down and analyze and this is important because what works for one site might not work for another. I've seen some sites try to implement speed improvements and actually slow down because they broke some other aspect of their site. So we always want to measure and confirm that our sites are getting faster. So let's take a quick tour of the tools that we can use to measure our site speed. [Google](../../Glossary/Service/Google.md) PageSpeed Insights is a great tool and since one of our main reasons we're improving the speed of our site is to rank better, we should at least occasionally check our site against the official Google tool. One of the things I like about the Google tool is it gives you scores for desktop and mobile. It's very common to see a much lower score for mobile. Don't worry if you see that really low number because this is just a starting point. KeyCDN has a few tools and they give you a helpful list of things to improve. They also let you choose a server as the test location so you can see how the site loads for someone who is close to your server, compared against someone who lives far away. My favorite tool is GTmetrix. To give you an idea of what a full report looks like, type your website into the text field. I've already done this and loaded my personal blog. So we can scroll down and see they have their own grades.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=93)** They use the same web vitals that Google uses. They also have a speed visualization tool so you can see what a browser is rendering at each second. The Performance tab shows you the web vitals and if you want to learn more about them, you can click on the helpful links. The Structure tab will list suggestions ordered by how big of an impact they'll make. As you can see here, this site is pretty well optimized already. The Waterfall tab is perhaps my favorite part. It shows you how each element in an [HTML](../../Skills/Web%20Development/HTML.md) page loads. We'll talk about this waterfall in future videos but if you see a large item, it could be blocking all of the items behind it, so one of the things we'll do in this course is find large blockers and either reduce their size, remove them entirely or lazy load them at the end. We actually haven't seen the killer feature in GTmetrix and it's so simple. With a free account, we can monitor your website and get a daily, weekly or monthly email, summarizing their page speeds and the reason this is super important is that [WordPress](../../Skills/Web%20Development/WordPress.md) websites are always changing. The typical site owner is constantly adding and removing plugins, changing the theme's look and feel and uploading images. Numerous times in the last year, I've received an email from GTmetrix and noticed that my score dropped, which likely means some plugin, theme or setting I changed in the last week is the culprit. So make sure to click monitor
>
> **[3:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-to-check-and-monitor-your-speed?u=76281980&t=188)** and set up a recurring email. Throughout this course, we're going to optimize this test site. This is a copy of my real live Laid Back Games website that sells this actual physical product. I've already optimized the live site, so I recreated it for this course so we can optimize it together. I'll copy the URL here, let's go to GTmetrix and we can paste it in and click Analyze. We're going to use this report as a baseline throughout the course. I strongly recommend that you pause this video right now to take a speed test yourself for your own website. This way you'll have a concrete starting point. As you can see, with this site, we're doing okay but we can do much better. Some of these numbers, like First Contentful Paint, looks okay but the fully loaded time of five seconds looks a little rough. Now let's start diagnosing what can actually go wrong with the site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=0)** - [Instructor] Before we get into more tactical techniques to speed up your site, let's focus on the process of building and rendering a webpage, because each part can be done quick and easy or slow and hard. When someone visits your website, their browser requests a webpage from a server first. In our example, if someone wants to visit lay back games, they'll request a webpage from the server. Then the server uses [WordPress](../../Skills/Web%20Development/WordPress.md) to assemble the page. It turns a bunch of [PHP](../../Skills/Software%20Development/PHP.md) files into a single [HTML](../../Skills/Web%20Development/HTML.md) file which is returned to the visitor's browser. The time this process takes is called the time to first byte or TTFB. This isn't one of the official lighthouse [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) search engines like [Google](../../Glossary/Service/Google.md) use, but it is still very helpful to know. A good goal for time to first byte is less than 200 milliseconds. If it's higher than that, it's very likely a server or WordPress issue. If the time to first byte is lower than 200 milliseconds, you can focus on optimizing the front end of your site. To decrease the time to first byte and increase your website speed, start by optimizing the server's location. If most of your customers are in a specific geographic region, try to put a server close to them. You can also lower the TTFB by changing how the server assembles the HTML file. In this course, we'll look at how to do that with WordPress. A slower TTFB could be due to how fast your server parses PHP, how many plugins you have,
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=93)** what your plugins are doing, what theme you use, how many templates you have and how many template parts WordPress has to stitch together. Once the visitor's browser has the HTML page, it reads the HTML and loads assets, including images, CSS, and [JavaScript](../../Skills/Software%20Development/JavaScript.md) files. We've all heard about HTTP, that's the protocol your browser uses to download files. And for decades, we've primarily used HTTP 1.1. HTTP/2 is a new protocol. And if your server and the client's browser both support it, then you can download assets in a new fashion called multiplexing. With HTTP/1, you download one file at a time. With HTTP/2 and multiplexing, you can download multiple files at the same time. This sounds like a minor feature, but it's actually huge. Imagine needing to send separate emails for each part of a birthday party invite, one for the image, one for the music and one for the text, and you can only send the second email after you've received a response to the first. With HTTP/2, your browser sends the equivalent of one request or based on our analogy, one email for everything, image, music and copy. The server can respond to your request with all the files that has available and you will get your assets much faster. If you have a huge file, for instance, a large uncropped photograph, the other files won't get stuck behind it slowing down the load time for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the website. Once the browser has a few assets,
>
> **[3:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=187)** it starts rendering them. The first couple of colors are called the first paint. Once you start adding content, this is called the First Contentful Paint or FCP, and it's one of the main signals search engines use to measure the speed of your site. Here's what Google says about First Contentful Paint. The FCP measures how long it takes the browser to render the first piece of DOM content after user navigates to your page. The DOM is the [document object model](../../Skills/Web%20Development/Document%20Object%20Model%20(DOM).md). It's the way that the browser processes in HTML page. You don't need to know what it is and for our purposes right now, it basically means HTML page. I like to think of FCP as content with CSS for colors and styles. You want your FCP to be 0.9 seconds or less. Users expect to start to see your website's content loading quickly. If you have a good time to first byte and the First Contentful Paint it takes too long, then your assets are likely the culprit. To improve your FCP, reduce the size of your assets. Start by optimizing your images, make sure your server can handle HTTP/2 and concatenate files. When you can catenate, you download one medium file instead of a dozen tiny files. We'll be covering all of these techniques later in the course. After First Contentful Paint, your browser continues loading and rendering images, new style sheets, and JavaScript files. Then it gets to the largest piece of content which is usually an image or video.
>
> **[4:41](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/how-websites-slow-down?u=76281980&t=281)** This is called the Largest Contentful Paint or LCP. You want your LCP to happen in 1.2 seconds or less. The LCP should load quickly because Google assumes it's important and they want the largest and most likely important content to load quickly. With WordPress, there are ways to make sure that the LCP loads early. Just make sure that your time to first byte and First Contentful Paint are already hitting their targets. After the Largest Contentful Paint, your browser keeps adding the remaining assets until the page is fully loaded. The time it takes to get the whole page loaded isn't a major indicator for search engines anymore, but that doesn't mean your users won't get frustrated. As a goal, your website should load completely within three seconds. As you can see, there are a lot of ways to slow down your website with inefficient loading processes. As we go through this course, and start improving the major metrics like time to first byte, First Contentful Paint and Largest Contentful Paint, remember that there are loads more. About half of these metrics are going to encourage you to return that first byte faster or to load an important piece of content faster. And the other half of these metrics are going to be about loading fewer assets and loading them quicker. We're going to use a combination of techniques to improve all of these metrics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6), [WordPress](../../Skills/Web%20Development/WordPress.md) (5), [Google](../../Glossary/Service/Google.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=0)** - [Instructor] Before we start trying to optimize our site, let's cover one final concept, and that is the drastic differences between static and dynamic websites. A static website has content that rarely changes. Think about a simple brochure website with a homepage and about page, a services page and a contact page. Information sites can also be static, even incredibly large ones like new sites. A dynamic website has content that changes often. Some dynamic websites even look different to every single user. Think about [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) websites where each visitor has their own cart or membership sites where users see different content based on their membership level or even based on what content they've already consumed. Many techniques we'll cover in this course will work for both types of websites, but there is one particular technique that works very well with static websites and doesn't work well for dynamic websites and that is caching. There are many different types of caching and we're going to cover them later in this course, but let's look at one type of caching to highlight how it works and why it works better for some websites than others. With server caching, the web server processes the page, assembles all the different pieces and saves the [HTML](../../Skills/Web%20Development/HTML.md) output. Then the next person who visits that page gets the saved copy, which saves a ton of processing time. Caching can be an incredibly powerful tool for static websites. The very first user to visit a blog post will trigger the server to assemble that web page.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/static-vs-dynamic-sites?u=76281980&t=95)** The server caches it and returns it to the user. Every future visit uses the cached version of that blog post which saves your server so much processing time and it saves your user's loading time, but it's a lot more limited for dynamic websites because you can't cache the whole page. Be aware of what kind of website you have. If you try to use techniques that speed up a static brochure website, you'll be disappointed when they don't work as well on dynamic e-commerce websites or possibly even slow down a dynamic e-commerce website. For this course, we're going to focus on speeding up a dynamic website. As you're following along, you can optimize any type of site. Just keep in mind that certain techniques will be more or less effective depending on the type of site that you're optimizing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [E-Commerce](../../Skills/Web%20Development/E-Commerce.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=0)** - [Instructor] When people talk about optimization, they usually focus on the front end. That means digging into the [HTML](../../Skills/Web%20Development/HTML.md) code, combining CSS files, differing [JavaScript](../../Skills/Software%20Development/JavaScript.md) files, and optimizing images. These are all very useful techniques but they're also the easiest techniques to implement. And they only affect your speed after the visitor's browser receives that initial HTML page. It's important to remember that web hosting directly affects your initial page load and it's worth investigating, even if switching hosts could be time-consuming or expensive. I just performed a speed test on my personal blog and I'm using my blog instead of the laid back game site to show you a simpler static site for this example. If we take a look at the homepage we can see that the page loaded in 1.5 seconds, which is a very good time. Keep in mind, the rule of thumb is 3 seconds or less. So what part of this overall speed test is controlled by your hosting or is mostly affected by hosting. For a [WordPress](../../Skills/Web%20Development/WordPress.md) website, a user visits the page, your server processes all the [PHP](../../Skills/Software%20Development/PHP.md) files, creates the HTML page, and then returns it to the user. Your hosting settings directly affect this part. If you have more RAM, faster CPU, or more PHP workers your server constituents PHP files together faster and return them to the user faster. So if you have a slow time to first byte, that's this number right here
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=93)** that could be affected by your hosting, it could be very low CPU, or it could be only one PHP worker, but there are other factors. The time to first byte is also affected by your theme, plugins and settings, in addition to the raw hosting power. If you have a horribly slow plugin your time to first byte could be 5 seconds, even on the best hosting on the planet. Luckily there is a trick you can do to test just the hosting aspect of your site. Instead of testing an actual page on your site, which is affected by plugins, settings, and themes test the already generated HTML read me file which WordPress installs by default at [yoursite.com/readme.html](https://yoursite.com/readme.html). You can see that page right here. This will test how fast a server can receive your request routed to the right place and return a file. Some hosts might not install this read me or it might be blocked. If that happens reach out to your host so they can test that read me file, or create a simple HTML file yourself and upload it. I've gone ahead and I've speed tested this HTML read me file. You can see that loading the read me file takes a total of 519 milliseconds, and the important time to first byte is 229 milliseconds, which is a pretty good time. I like to think of this number this 229 milliseconds as the baseline number. This is an already assembled HTML file that your web server is just sending to a user. And if you use caching,
>
> **[3:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=186)** which we'll talk about later in this series this is the absolute fastest your web server could deliver a cached page to a user. This trick helps you see how fast your web server can return a file. But there is still processing time that you have to consider for dynamic content. This is where you can compare these speed tests. With our homepage, we can see that the time to first byte is 344 milliseconds and the read me is 229. The difference between these two numbers is how much time our server spends processing and putting all the PHP files together. For my site, it takes the server an extra 115 milliseconds of processing time to assemble the homepage over a static read me file, this is a very good time. If you have a lot of plugins or a complex theme or a slow server, this could take a lot longer. And if you're unhappy with this number, the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the series will improve other aspects of your site but we can't improve this number. That's why we're starting here. If it takes your server 300, 400 or 500 milliseconds just a process, a blog post homepage you should probably look into getting better or close your hosting. And when it comes to hosting you generally get what you pay for. If you want to get $5 a month hosting it's probably not going to be very speedy. There's a lot of information you could consider for your website host. Rather than spending hours or days researching how fast each host will likely work for your particular website, you might want to try free trials to see which host actually works best
>
> **[4:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/why-hosting-matters?u=76281980&t=280)** for your particular site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (8), [PHP](../../Skills/Software%20Development/PHP.md) (5), [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=0)** - [Narrator] One of the best ways to improve your website's hosting performance is to run the latest version of [PHP](../../Skills/Software%20Development/PHP.md). Which is 7.0 or higher. There's a lot of data about this. And if you compare the old version of PHP, PHP 5.6, to the newest version, PHP seven, that PHP seven works about 1.8 times faster than PHP 5.6. And there are some tests with specific applications in this case, [Drupal](../../Skills/Web%20Development/Drupal.md) [WordPress](../../Skills/Web%20Development/WordPress.md) and PHPBB. And we can see that with WordPress specifically, it's over two times as fast. So how do you know if you're running PHP seven? We can go to our site, and then we can scroll down to tools, site health, click on info, and then scroll down to server.
>
> **[0:55](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/php-versions?u=76281980&t=55)** And under server, we can see PHP version, in my case 7.4, which is the latest. Now, if you don't see this for some reason, you can also find it in your hosting panel. So I'm going to go over to my hosting panel. And in my case, I'm using nexcess, which is a managed WordPress host. Your host will likely look a little bit different, but there should be some similarities here. I'll scroll down to environment. And over here I can see version 7.4. And then they'll usually give you an option to upgrade to the latest version. When you do this, please make sure you make a backup. I ran this upgrade a few weeks ago and there were some minor problems upgrading between 7.3 and 7.4. So always make sure you have a backup before upgrading. Once you're on a version of PHP 7.0 or higher, you should be processing PHP files much faster. Go ahead and take a speed test and you should see an improvement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (10), [WordPress](../../Skills/Web%20Development/WordPress.md) (3), [Drupal](../../Skills/Web%20Development/Drupal.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=0)** - [Instructor] The internet feels like a place where your location doesn't matter. We're used to seeing content and interacting with people from around the world. Wherever you are online, every site is one click away. But you might be surprised to learn that your web server's location does matter. I live in Denver, Colorado, so I can access a web server in the United States much faster than a server in Europe, South America, or Asia. Let's play a game called speed tests around the world. Now my web server is in Michigan, which is the central part of the United States, and we're going to run a speed test to see how fast my site loads from different locations. I'll be using the KeyCDN Speed Test since they make it really easy to test different locations. So I'll copy my URL here, drop it into KeyCDN, and let's start with New York, since that's probably the closest. We'll click Test and we get 1.37 seconds. Let's give a go with London. That grows all the way to 2.1 seconds. Let's try something around the world, so we'll try Bangalore, which is three seconds. It's not as bad as I thought it would be. And lastly, let's try Tokyo. And we get just under three seconds. So the lowest time was New York at 1.37 seconds
>
> **[1:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/server-location?u=76281980&t=94)** and the highest was Tokyo at 2.9 seconds. That is more than twice the time. So when someone is close to my web server, New York to Michigan, it's only 1.37 seconds, London, which is a half continent away, is 2.1 seconds, and all the way around the world is almost three seconds. So what have we learned here? You want to make sure that your web server is located in the same continent to your audience, or at least the largest chunk of your audience. You probably don't know this, but board games are very popular in the United States or in Europe so I definitely want to have my board game website in one of those two places. If you don't know where your server is located, you can find out with one of two methods. Number one is to contact your web host. This is probably the easiest method. I did it just before this video and it took about four minutes. The other way is to use online tools. You can use an online website like this one. They use a technology called Traceroute and plot the locations onto a map for you. And you're looking for the final location on this map. Since my website caters to a U.S. audience, I'm very happy with where my server lives, but if you want to move your server, ask your host if they have a location closer to your customers. It's much easier to move between data centers than to set up a brand new hosting account.

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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=0)** - [Instructor] We've come to one of the most crucial parts of speeding up your site. And that's optimizing your images. And according to [Google](../../Glossary/Service/Google.md), images can account for 60% of a page's total weight. So if you could only work on one aspect to speed up your site, I would encourage you to optimize your images. There are three things we're going to look at in this lesson. Different file types, file quality, and how to automatically optimize images in [WordPress](../../Skills/Web%20Development/WordPress.md). Which of these images do you think is the largest file? I saved all the images in the same image editing program. The left is the original, the two in the middle, are JPGs at different qualities. And the last, is a PNG file. Now to my naked eye, they're all very high quality. And I can't tell the differences between them. In this case, the JPG files are much smaller than the PNG file. And the different quality levels, make a big difference. The point of this example is to demonstrate how drastically you can improve speed just by saving images as the right file type and the right file quality. Let's take a look at another example. Which of these files do you think is larger? Left is JPG and the right is PNG. How many of you expected the JPG to be lowest again? JPGs and PNG files store pixel data in a completely different way. So they're very good at different things. And you want to save some types of media in one format and other media in a different format. JPGs are really great for photographs
>
> **[1:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=94)** because they can handle lots of different colors. They're also very small in general and they do have an adjustable compression rate. So, you can choose the quality level when you export. PNG files are great for illustrations and graphics because they can handle few colors very well. They also support transparency, but you can't choose different quality levels. You may have also heard about a different file type called a Scalable Vector Graphic or an SVG. SVGs use shapes, numbers and coordinates rather than a giant list of pixels to render graphics. This means, they're very easy to scale and they're very small. Generally speaking, simple illustrations will work well in SVG or PNG formats. So if you want to experiment with SVGs and you have a graphic editor program like Photoshop, go ahead and export your logo as an SVG. If you like creating them and they're efficient for you, go ahead and keep using them. Just make sure that a PNG isn't smaller. In my case, the SVG file of my logo, was about 50% bigger than the PNG file. So I'm going to stick with that PNG file. So the first lesson is to choose the right file type depending on the type of asset that you're creating. Let's go back to the Fry Thief example. Most image editing tools have a quality setting for JPGs and you can often export at a lower quality, say 60 or 70%. And it's usually not noticeable at all.
>
> **[3:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=187)** In this example, we went from 7.1 megabytes down to 1.2 megabytes at 60% quality. And it still looks great. If we want to reduce this further, we could also reduce the size of the image meaning we could shrink it from 4,000 pixels down to 1000 pixels at the same quality. And that would shrink the image down to 634 kilobytes which saves about 50% of the space. And we could shrink this even further. Lucky for us, WordPress will automatically resize images when we upload them. So unless you want an image to be a very specific size, you shouldn't have to resize them manually. When I'm working on my own site, I can export images from an image editing program and upload them directly. But WordPress is great because it can be used by anyone including people that don't have image editing programs. So you really want to install a plugin that will automatically optimize images upon upload. This is different than automatically resizing images which WordPress does by default. Optimizing images means reducing the file size similar to those JPG quality levels. And there are a number of plugins and services that you can use. Compress JPEG and PNG images is created by TinyPNG. They have a free tier where you can optimize about 100 images a month. Imagify also has their own plugin which lets you optimize 20 megabytes of images every month for free.
>
> **[4:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/optimize-images?u=76281980&t=279)** And they have paid plans for more images. These are just a couple of plugins and services that you could use. And there are probably dozens of other examples that I could show you. When you're selecting a plugin that'll optimize images, you want to make sure that they can retain the original full-size image as a backup, just in case. They also, should automatically optimize images upon upload and a feature you don't need right now, but you might want in the future, is a new image format called WebP. This isn't supported in all browsers yet. So you don't want to create an upload WebP images, but they are a more modern format and about 25% smaller than PNGs and JPGs. So, if your image optimization plugin can handle this, you're ahead of the curve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [Google](../../Glossary/Service/Google.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=0)** - [Instructor] I have an account with ShortPixel, so I'm going to show you how to set this up on my own laid back game site. I'll go to my admin. We'll add a new plugin. Let's find and install ShortPixel and activate it. And here we can add our API key, so I'll scroll down. I'll paste in my API key. Once you have your API key, we can configure this. We can resize images, we can remove extra image data, and if we wanted, we could get rid of our image backups. I'm going to keep all these settings as the default, click save, and go to bulk process. You can see here I have 16 original images and [WordPress](../../Skills/Web%20Development/WordPress.md) has created 101 thumbnails. Let's go ahead and click also create WebP versions of the images for free and start optimizing. This process may take a while depending on how many images you have. So go ahead, start the process, and then go out to lunch or get a cup of coffee. And it looks like we're done. The media library has been optimized, saving about 73%. Now I took a speed test right before, and we can see some interesting data here. Let's go ahead and take a speed test right after.
>
> **[1:40](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/install-an-image-optimizing-plug-in?u=76281980&t=100)** Almost instantly, we went from a 88% performance and 83% structure to 99 and 91. The Largest Contentful Paint went from 1.5 seconds down to 762 milliseconds. And the Fully Loaded Time went from 5.2 seconds down to 3.6 seconds. As you can see, optimizing images can do a lot to speed up your site. They're often 60% of the page load. So make sure you optimize your images, choose the right image format, and configure your plugins to automatically optimize images for people who can't export them directly out of a graphics program.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** api (3)
> **Versions:** 1.5 (1), 5.2 (1), 3.6 (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Prerequisites:** configure (2), install (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Use a content delivery network (CDN)](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=0)** - [Instructor] A common piece of advice to speed up your site is to use a content delivery network or a CDN. A content delivery network is similar to a web server but there are two key differences. The first is that CDNs store static assets, like images, CSS files, and [JavaScript](../../Skills/Software%20Development/JavaScript.md) files. They don't process web pages. Second, most medium websites have a single web server but they can have dozens or hundreds of CDN locations around the world. And CDNs use geolocation to send visitors to the closest CDN. Static assets like images, CSS and JavaScript files might be responsible for half of the total page load time even on an optimized site. So if you have a CDN with locations around the world, it's like you always have a web server close to your customers, at least for those static files. This will drastically help the page load for those people. A CDN is a specialist. They specialize in storing and retrieving files. A web server is also a specialist and they specialize in processing and assembling web pages. And generally, my rule of thumb is that by using two specialists, you'll see speed gains over using a generalist for two jobs. I like to think of it as having a writer and editor work on the same book compared to a writer which edits their own content. There's nothing wrong with that but it might take a little bit longer.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=93)** So if I've convinced you, there are a number of options for CDNs. Some managed [WordPress](../../Skills/Web%20Development/WordPress.md) hosts have a CDN built in. WP engine has a CDN built into their hosting plans as does Kinsta as well as Nexcess.
>
> **[1:58](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=118)** And if your website host has this, I strongly recommend you use it, primarily, because you'll have easy access to support if something ever goes wrong. If your host doesn't offer a CDN, there are tons of CDN services out there, and they usually use a free WordPress plugin like CDN Enabler. And some of these CDNs also provide other services. Cloudflare is a really popular option that can also protect you from DDoS attacks, common spam, and they have an upsell to be a CDN for video content in addition to images, CSS, and JavaScript. If you're on a budget, and your host doesn't have a CDN, then I strongly recommend the CDN feature built into Jetpack. It's really easy to turn on, and all you have to do is connect your site to [wordpress.com](https://wordpress.com) with the free account. To set this up on my own site, I could configure the CDN built into my hosting account which is what I'd recommend for most people. But since most don't have this hosting account, I'm going to show you how to do it with the Jetpack CDN. So I'm going to go over to my main site here. I already have Jetpack installed. If not, you can install it for free from [wordpress.org](https://wordpress.org), and I can scroll down and under Performance, you'll see something called Image Accelerator. Let's go ahead and turn this on. The CDN is now active. Here's the speed test I took right before this video.
>
> **[3:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-a-content-delivery-network-cdn?u=76281980&t=214)** Let's go ahead and do it again now that the CDN is active. I'll enter the URL and my location, and let's give it a test. And here are the results. It looks like it takes about 2.7 seconds to load with the CDN and 2.8 seconds to load without the CDN. And we didn't have to do anything to our site other than check one check box. We can see a 0.1 second increase in speed. That's not a massive increase, but there are a couple of other factors. We only have one large image on our homepage and the Jetpack CDN only applies to images. So our CSS and JavaScript files aren't sped up via the CDN. If you have more images, you'll likely see bigger speed gains. And if you use a CDN that works with JavaScript and CSS, you'll also likely see bigger speed gains. There's a CDN option for each website and budget. The important point isn't to stress about finding the perfect CDN, but instead just sign up for one of them because it will help people all over the world access your site and it reduces some of the strain on your web server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [WordPress](../../Skills/Web%20Development/WordPress.md) (4)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=0)** - [Instructor] There are a ton of tools to deliver [JavaScript](../../Skills/Software%20Development/JavaScript.md), CSS, and images like CDNs, but there are also a few other types of media you might have on your site, namely audio and video files. And just like JavaScript, CSS, and images, we want to offload audio and video files to external services to reduce the load on your web server and to have locations around the world to serve these locations from the closest location to the user. First, let's talk about audio because there's very straightforward ways to offload those files. I run a podcast for board game designers and each individual post includes the podcast audio. You could upload all these audio files to your own web server, and you can run a podcast directly from your own [WordPress](../../Skills/Web%20Development/WordPress.md) site. While this might sound great, it will eventually fill up all of your web hosting, and your site will slow down when hundreds or thousands of people download the new podcast all at the same time. The straightforward solution is to use a separate service for hosting audio files, and there's already an industry built around this. Both Libsyn and Blubrry have fantastic podcast hosting services, where for a small monthly fee you can upload as much audio as you want. Podcast hosting services are great if you have new audio files every month. But if you have a one-off file, you might want to look into a service like SoundCloud. That will let you upload three hours of audio for free. Most of these services will cost a little bit of money each month, but they completely solve the problem by offloading the audio to a separate service.
>
> **[1:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=96)** Again, this reduces the load on your own server, and they'll be distributed around the world. This is one of those cases where a little bit of money can solve the problem entirely. All of the things we just said about audio are also true for video. You definitely want to use a service instead of hosting the video on your own web server because video files can be quite large. And in recent years we've been spoiled with options. We have to start with YouTube, which is entirely free to use and upload video. When you embed a YouTube video on a page or post, WordPress knows exactly what to do. It'll include a thumbnail for the video. It's fully responsive, so it'll fit any browser size. And only after someone clicks the video will it start loading and playing. YouTube is great for most users, but you may also want to check out Vimeo, which is a paid service. They have slightly better compression, meaning your video be a bit smaller on their service. They also have prestige because it's a paid service. And they have less strict content moderation, as well as the option to customize the video player itself. Video hosting is great, but there is a tiny cost. Both YouTube and Vimeo don't start loading the video itself right away, which is a great thing, but they do include some JavaScript and CSS files, which are necessary to play the video. So even though the video itself isn't loaded, there are some small costs to having a video included on a page. And if you have multiple videos, it's best to pick one video service, so you only need to download
>
> **[3:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/offload-audio-and-video-files?u=76281980&t=187)** those CSS and JavaScript files once.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **Env Vars:** css (4)
> **Definitions:** is a  (3)
> **Exercise Files:** download the (1)
> **Analogies:** just like (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Use lazy loading](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=0)** - Most people consider being lazy a vice, something that you have to overcome to achieve your goals. But in [Web Development](../../Topics/Web%20Development.md), lazy loading can be a very powerful tool. According to Mozilla, lazy loading is a strategy to identify resources as nonblocking and load these only when needed. It's a way to shorten the length of critical rendering, which translates into a reduced page load. Basically, you don't load an asset until you need it. That generally means you're going to load all of the assets above the fold, and any static files like images below the fold, you can load as the user starts to scroll down, and you can do this in order. There are a couple of advantages to this method. The first is you improve the initial page load. Because you're loading fewer assets, initially, the total page load time should be much faster. And there's a decrease in the resource consumption, because many people don't scroll down either because they bounce or they click to another page, there are many assets that would never be seen and it's inefficient to send them. So we're only sending files that people will actually see, which makes sense. This reduces the load on our servers and CDNs keeping them faster for the people who do need them. There are a few different plugins that can lazy load images for you. In our case, I'm going to show you the easiest option to use. Jetpack has lazy loading built-in. Right now, this is included in the main Jetpack plugin, but I want to give you a heads up that it might be moved into a separate plugin.
>
> **[1:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=95)** There's a new plugin called Jetpack Boost that includes a lot of performance features. The plugin is currently in alpha and not ready for production sites, but pay attention to it because eventually performance features might move here. So for right now, let's go ahead and install Jetpack. Go to my site, log into the back ends. Let's add a new plugin. It looks like I already have Jetpack, so let's update it. We'll go to the Jetpack settings, click on the performance tab, and turn on lazy loading for images. And if you haven't already set up a CDN, you can do that here. But for right now lazy loading images is on. Let's go ahead and run a speed test. I'll copy the URL. And let's analyze it. Here's the performance test before lazy loading. I got a B, 91 on performance, Largest Contentful Paint in 1.5 seconds, and fully loaded in 4.7 seconds. And it looks like our performance has gone up quite a bit. Largest Contentful Paint dropped by 0.4 seconds, and fully loaded time down to 4.1 seconds.
>
> **[3:09](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/use-lazy-loading?u=76281980&t=189)** And if we scroll down, we can see we've loaded 1.01 megabytes of images. And after lazy loading, we're only loading 892 kilobytes of images. So we saved a 100 kilobytes just by loading those images only when users scroll down. As you can see, lazy loading can give you a pretty impressive speed boost for just a couple of clicks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Development](../../Topics/Web%20Development.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=0)** - [Presenter] In the [WordPress](../../Skills/Web%20Development/WordPress.md) world it's common to hear that your theme should control the look and feel of your site and plugins should control the functionality. That's always been a best practice in WordPress but it's even more important when you start considering speed. You really want to make sure that your theme is doing as little as possible outside of the look and feel. With WordPress, you must use a theme and then you can add plugins on top of that. So if you have a theme that's really slow, no amount of plugins will be able to speed up your site. WordPress with a theme is a baseline which you can't get away from. When you start considering themes, you want to consider the number of files, it has to process as well as any assets that the theme has to load. Some themes have a lot of template parts with conditional logic that WordPress has to process and other themes have images or large style sheets that they automatically include. A very rough way to understand how much your theme is adding is to compare the total size of the theme against other themes. I downloaded some of the most common themes and you can see that some of them are around one megabyte and some of them almost hit four megabytes. So there's a lot of variation with themes. The easiest way to discover which theme works best for your site is to try out a few different themes. Since WordPress has such a clear separation between content and layout, it'll only take you a few minutes to test each theme. I'm going to go to my site, go to appearance and themes. I've been using Astra for over a year which is really fast
>
> **[1:36](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=96)** but we're going to test a few others just to make sure. Let's start with OceanWP. But before we get going, we're going to do a speed test. Paste in my URL. Let's analyze the site. The largest Contentful paint is 1.8 seconds. Fully loaded is 3.9 seconds. If we go to the Waterfall, we can see 56 requests, downloading 1.8 megabytes. So this is our baseline. Let's go back to our site, will activate OceanWP
>
> **[2:16](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=136)** and let's retest the same site. Our largest Contentful paint is 1.2 seconds that's pretty darn good. Fully loaded is 4.7 seconds. And if we go to the waterfall, we can see 89 requests downloading two megabytes. Besides the largest Contentful paint, this theme loads a little bit slower. Let's test another one. Let's go ahead and test storefront. So I'll activate it and retest. Largest Contentful paint is two seconds. Fully loaded is 3.7 seconds. And if you go to the Waterfall 66 requests and two megabytes. Let's task one more and then we'll evaluate. I'll activate generate press. Back to GT metrics and give it a test. Largest contentful paint is 1.1 second, fully loaded 3.4 seconds and 54 requests downloading 1.8 megabytes. Based on the speed test we just performed, I put all of the data into a table. Based on this data, I'm going to be switching to the generate press theme. It has the lowest first Contentful paint,
>
> **[3:49](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/your-theme-matters?u=76281980&t=229)** the lowest fully loaded time as well as the fewest number of requests and it's tied for downloading the least amount of data. So this is the theme I'm going to use. If you're looking for really fast themes, do a little research and you'll find articles like these that help you decide on the top two or three themes then do your own testing. Literally, activate each theme. Spend a minute or two customizing them and then send it through the speed test. And if you want really accurate results, you can do multiple speed tests and use the best numbers. Since there's always a little variation with tests. Your theme is the baseline for your entire site. So it's worth spending the time finding a fast theme that works for your industry. If you find the perfect theme and it's a little slower than the fastest theme that's probably fine because you want to balance the look and feel of your site with the experience of a fast website. But do make sure you aren't installing one of those themes that adds three seconds to your load time. This is one of those situations where it's more about not picking the wrong theme than about picking the perfect theme.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (6)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=0)** - [Instructor] When I worked at Nexus we had a 15 day performance challenge. Where we take your site, optimize it for you on Nexus servers and then show you the results. One of the surprising things we found was the number of plugins that did very similar things. For example, we'd see contact form seven, gravity [Forms](../../Skills/Web%20Development/Forms.md) and ninja forms all on the same site. Or we'd see multiple SEO plugins. Or probably the worst example is multiple caching plugins which is sort of like zipping up an already zipped up file. And the reason this happens is because websites are always changing. They're always being edited, updated and improved. So even if you launch a website with one contact form plugin eventually someone might add a second one to handle an edge case. Or they just weren't aware that there was a plugin that could handle that functionality that was already installed. The first thing you should do is remove any plugins with duplicate functionality. In addition to making it easier to manage all of your forms, it also reduces the number of files that a user has to download. The next thing you should do is remove any plugins that are disabled. They likely aren't slowing down your site, but it's a good practice to remove unused plugins and they'll give you a little bit more space on your web server. And if you have any plugins that aren't updated, update them immediately. It's good for security and oftentimes plugins will have large updates focused on speed and performance. So you could be missing out on a speed boost just by keeping things up to date. We're going to talk briefly about finding high-quality plugins.
>
> **[1:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=92)** Because if you find a high quality plugin, it's likely going to be efficient and speedy. And when you're on [wordpress.org](https://wordpress.org), you want to look for high star ratings, lots of ratings and responses on the support forum. Just doing this little bit of research and using only four star and above plugins or four and a half star and above plugins that have good reviews and good support will very likely mean that they're efficient and fast. Now let's look for qualities that you want to see in a plugin. You want to make sure that plugins only load scripts and styles on the page where they're active. So if you have a contact form and it's only visible on the contact page, make sure that the scripts and styles only load on that page. If you're using a plugin that limits where there assets are loaded, even if they add let's say a half a second to your load time. Which is a lot for one plugin. If your site is generally fast and a contact page is a little slower, that's okay. There are some plugins that do need to load on every page. As an example, [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) loads the Cart [JavaScript](../../Skills/Software%20Development/JavaScript.md) files on every page. So what you can do is look for plugins or techniques which restrict what pages these scripts and styles will load. There's already a plugin for WooCommerce called disabled Cart Fragments that you could install and this removes some of those performance issues. There's also plugins like perfmatters which is a general performance plugin. Which includes the functionality above. We'll configure this in if future video. If you're okay, spending a few hours
>
> **[3:06](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=186)** digging into the details with your plugins, you can watch for slow front-tend POST admin-[AJAX](../../Skills/Web%20Development/AJAX.md).[PHP](../../Skills/Software%20Development/PHP.md) requests. You can find those admin-ajax.PHP requests by checking on the waterfall on your site using GTmetrix or some other speed testing tool. I took a speed test right before this video. And if we scroll down to the waterfall, you can see all sorts of different requests. Let's look for one that's a little long. This one seems a little bit long. And we can see this is the WooCommerce-ajax get refreshed fragments. So this is WooCommerce trying to get Cart details. And it's taking almost a full second here, 955 milliseconds. Because this JavaScript is non-blocking, it won't affect things like largest Contentful paint, but it will affect the total time it takes to load a webpage. So, I'll go to my site. I've already installed the plugin, disabled Cart Fragments. Let's activate it. I'll come back to GTmetrix. And we're going to try to see if we can remove this request. Let's scroll down and we'll go to the waterfall. If we search for the post admin-ajax request, we won't find it. The file was removed by the third-party plugin because it wasn't needed on this page. We saved an unnecessary file from loading.
>
> **[4:39](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/plugins-quality-over-quantity?u=76281980&t=279)** It reduces the worker server is doing and it should also speed up the fully loaded time for our site. One note for viewers who want to test this themselves, I did have some problems with caching with this particular plugin with my host. So if you don't see any changes, clear your cache or wait a day or two and then test again. This is another reason why you should setup weekly speed tests for your sites. So if something is cached or doesn't work immediately you will still see the benefit or the slowdown a week later at the next speed test. If you do like getting into the nitty-gritty and optimizing individual files, you can do further digging with Query Monitor or New Relic. To recap. Don't use plugins which solve the same problem. We see this all the time. Go ahead and delete unused plugins and update your existing plugins regularly. Try to find high quality plugins that only load assets on the pages they're used. For plugins that do need to load assets on each page, you can try to find plugins or settings that adjust this functionality. You can also use general performance plugins which can limit other plugins or you can custom code your own solutions. And the best way to find high-quality plugins is to use the reviews and star ratings on [wordpress.org](https://wordpress.org).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) (4), [AJAX](../../Skills/Web%20Development/AJAX.md) (4), [Forms](../../Skills/Web%20Development/Forms.md) (3), [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=0)** - [Instructor] Years ago, when I started writing CSS, I used to have a lot of small files to help keep things organized. So I'd have a header.css for my header, a footer dot.css for the footer, sidebar for the sidebar and special pages like the contact form page would have their own CSS file. And while this is good for my own organization, it's not great for speed. I like to think of the process of [Web Servers](../../Skills/Web%20Development/Web%20Servers.md), sending data to browsers, like a very fast version of our mail system. When I want you to send me some information, is it going to be easier and faster to send 50 separate small packages, or one large package? When you send files between a browser and a web server, there's overhead. You have to create a TCP connection, which takes a little bit of time. And even though it's a very tiny amount of time, you want to make as few new connections as possible, and send larger files. So on the theme side, you want to combine all of your CSS files into one larger CSS file, and combine all of your [JavaScript](../../Skills/Software%20Development/JavaScript.md) files into one larger JavaScript file. This is called concatenation. But your theme is only the start. Most plugins have JavaScript and CSS files. So if you have your theme and 20 plugins, you might have 16 CSS and 24 JavaScript files to download. We can concatenate those two with plugins. So we'll go to my site. I'll go to "add plugins". I'll look for "auto optimize". I'll go ahead and install it, and activate it.
>
> **[1:37](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=97)** And let's go to settings, auto optimize. We'll go ahead and turn on "optimize JavaScript code". You can see here, we're aggregating or concatenating all the JavaScript files. Let's go down to "optimize CSS code", and we'll make sure the same option is checked. When you check "optimize CSS code" and "optimize JavaScript code", it also minifies your scripts and styles. This removes a lot of the white space and formatting which computers don't need. So in addition to combining files so you have fewer requests, your files will also be a little bit smaller, which makes the page faster. And let's save changes and empty cache. Now I've taken a speed test right before I started this video, and we have some pretty good numbers. And if we scroll down, we can see there's 54 requests, downloading 1.8 megabytes. Let's go ahead and do another speed test. I'll open this in a new tab. I'll copy the URL. And let's click "analyze". We got a slightly lower score. Let's scroll down. You can see we're sending 0.01, because files have been minified, which we'll talk about in a moment. But more importantly, instead of 54 requests, we've now combined them into 35 requests.
>
> **[3:14](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/concatenate-and-minify-scripts-and-styles?u=76281980&t=194)** And this should help optimize your site. I do want to put up a warning. I love concatenating files, but it is something that can easily break. And here's why. You will likely build your perfect site, optimize it, including concatenating files. And then a month later, you have to add a new plugin, or delete a new plugin. And either the new files aren't concatenated, or you delete a plugin, and in the concatenated CSS and JavaScript files, those old plugin files that were deleted are still in there. So you're making the file larger unnecessarily. We haven't covered caching yet, but if something breaks on your website relating to speed and performance, it's very likely either caching or concatenation. Concatenation is a fragile process that can easily break. So only concatenate files if you're willing to spend the time debugging your site if something goes wrong. For my personal hobby sites that don't make money, I don't concatenate files. The small speed boost isn't worth my time on a site that doesn't make me money. And if you want to concatenate files, there are extra options on the auto optimized settings page. You can exclude specific scripts and styles from concatenation. You can load JavaScript files early. You can inline CSS styles, and a lot more. Auto optimize is an incredibly powerful plugin. But you want to research any of these options before turning them on, to make sure they work for your site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (9), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=0)** - [Instructor] We've talked a lot about processing [PHP](../../Skills/Software%20Development/PHP.md) files and how to make it easier and faster to load assets, but we haven't really talked about the database where the content of your site comes from. Let's dive in to how the [WordPress](../../Skills/Web%20Development/WordPress.md) database works because the more you know, the more you can improve it. WordPress uses a relational database. If you don't understand that term, no worries. If you want to dive deep into how [Databases](../../Skills/Software%20Development/Databases.md) work, we have [Programming Foundations Databases](../Software%20Development/Programming%20Foundations%20Databases.md) in the library. And if not, we'll cover it at a high level right now. First, let's look at the database's main tables. We'll use the official WordPress documentation so you can dig in to the many links and related pages if you want to further explore these concepts. The main tables for WordPress are wp_posts and wp_postmeta. When you save a page or post, WordPress saves that information in the database into these two tables. In wp_posts, you'll see information like the title of the post, the content of the post, the date, the status, and the excerpt, and any extra information goes into the wp_postmeta table, so that might be SEO keywords and descriptions from a plugin or extra image information or the page layout from your theme or oEmbed information, as well as breadcrumb information. Really, any extra information goes into this table. If you've never designed a database before,
>
> **[1:32](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=92)** you might not realize how the structure makes it easier for plugins to add their own data, but might not be the best for speed. So when WordPress saves information this way, a plugin doesn't have to create a new database table to store the information. It can store everything in this separate postmeta table. WordPress created a very flexible database. That's why there are thousands and thousands of free plugins. Unfortunately, WordPress' flexible database structure is not efficient for speed. As an example, let's go to my site. I'm in my hosting account right now and I'll go to [MySQL](../../Skills/Software%20Development/MySQL.md) and launch phpMyAdmin which lets me browse my database. Depending on what hose you use, you'll see an interface similar to this or maybe something entirely different. We can see over on the left all of the tables for my WordPress database. And we can see posts as well as postmeta. Let's take a look at postmeta so I'll click on it and you can see all the different postmeta information and what posts they're associated with. So as an example, all of this postmeta information is associated with post ID 11. As an example, let's take a look at the postmeta information for the homepage of my site. I'll go to search and then down by post ID, I happen to know that the post ID is 20, so I'll type in 20 and this will find all the postmeta information related to that post. As you can see here,
>
> **[3:03](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/wordpress-database-structure?u=76281980&t=183)** there are 28 pieces of information related to my homepage. When WordPress pulls this information out of the database, it takes more time to pull out 28 separate rows of data instead of one larger row of data. WordPress also cramps a ton of information into the wp_posts and wp_postmeta tables. Even entire [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) orders are stored in these tables. I've loaded the live version of my database and here's an actual real life order and this real life order has 62 pieces of postmeta information. There are ways to streamline your WordPress database. I'll show you how to limit the data that goes into the database and how to optimize its structure. But for now, you've seen how the WordPress' flexible database is amazing for developers, but not so great for maximizing speed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (13), [Databases](../../Skills/Software%20Development/Databases.md) (2), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Programming Foundations](../../Skills/Software%20Development/Programming%20Foundations.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
> **Code Identifiers:** wp_posts (3), wp_postmeta (3), oembed (1), phpmyadmin (1)
> **CLI Commands:** php (1), make (1), mysql (1), find (1)
> **UI Navigation:** go to (3), click on (1)
> **Env Vars:** php (1), seo (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Custom database tables](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=0)** - The very flexible database structure [WordPress](../../Skills/Web%20Development/WordPress.md) creates, is why we have so many plugins, but as previously mentioned, it's not great for optimization. In the previous lesson, I showed an order in my own database that has 62 pieces of postmeta information. If I get 10 orders a day for a whole year, I'll have 226,300 rows of postmeta information. That is a lot of data. And over the course of a couple months or years, it might slow down your site. The easiest solution is to use plugins that have their own database tables. A lot of contact form plugins already do this. They store their contact form submissions into their own tables. I like to think of database tables as file cabinets. By having a few file cabinets, it's much easier to find information than if there's one master cabinet. For specific plugins, you might find extra plugins that help with optimization. This plugin, for example, created by LiquidWeb, will hopefully be merged into [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) Core one day. And it creates a separate table for the WooCommerce orders. It's not just a separate table, but it's a table optimized for orders. So you can save more data per entry. That means it's much easier for your web server to save new orders as well as to pull existing order data out of the database. This project is in alpha mode. It's not meant for live sites. It's used on some live sites, but very few. If you have a WooCommerce store, that's a bit slow, run this on a test site
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/custom-database-tables?u=76281980&t=93)** to see if it even helps speed up your site. It might not be the right solution until it gets merged into WooCommerce Core. I don't know what the biggest slowdowns are for your site, because every site has different critical plugins. But if you have a feature that you use every day, like a contact form, a membership plugin, or a calendar, make sure that you reach out to the developer, and ask them how much data is added to the database, and if there are any ways to optimize the database. And if they have a separate database table, you're probably fine. But if they use custom post types, as WooCommerce does, then they'll likely add all their information to the main WP posts and WP postmeta table. And there might be ways to optimize it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WooCommerce](../../Skills/Web%20Development/WooCommerce.md) (5), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - the (1)

#### [Limit post revisions](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=0)** - [Instructor] In today's world, saving is such a no-brainer feature that we don't give it much thought. But the way [WordPress](../../Skills/Web%20Development/WordPress.md) saves posts means that each time you press the Save button, it saves a copy of your post. So if you're like me and you press the Save button often, you can have dozens of revisions for each published page or post on your site. If that's the case, it's worth pruning from time to time to keep the database humming along. Let's take a look at my database. I'll go back into my hosting environment, go down to [MySQL](../../Skills/Software%20Development/MySQL.md), which will open up phpMyAdmin. I'll open up the database. I'll scroll down to WP_posts. I'll search this table by clicking Search. I'm going to scroll down to post_type and then type in revision and click Go. And we can see in my test site that I have 13 revisions. For most hosting environments this is negligible, but if you see if you hundred or a few thousand, then it might be worth deleting those revisions. And we can do that with a little database magic. I'll go to [SQL](../../Skills/Data%20Science/SQL.md) and we're going to type in, DELETE from the name of the table, WP_posts, where post_type is equal to revision.
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=93)** With this one SQL command we can delete all the revisions in the database. I'm a huge fan of SQL commands because they're very powerful. But anytime you do something in the database, make sure to create a backup first. One wrong character and we could inadvertently delete essential data. So make sure you make a backup before executing any SQL statements. Let's go ahead and click Go. And it deleted 13 rows. If you have a few hundred or thousand revisions, deleting them can be useful, but how can we prevent a ton of revisions from filling up our database in the first place? There are a number of plugins that either turn off revisions or limit how many your site will save. I'm a big fan of limiting revisions. That way, if you accidentally save something, you can recover an older version. But you're not saving hundreds of revisions for each post. Let's install and configure this plugin. But before we do check and make sure your host hasn't already installed something like this. Some managed hosts, like WP Engine, already have plugins that limit post revisions. And since we don't need two plugins doing the exact same job, do a quick scan of your plugins before you install it. I'll go to my site. We'll go down to Plugins and click Add New. Let's type in WP revisions control and install it
>
> **[3:08](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/limit-post-revisions?u=76281980&t=188)** and activate it. And now under Settings, Writing, we can control the number of revisions for posts, pages, and custom CSS, as well as any other custom post_types you have installed. So for Pages, let's say 3 revisions. And for blog Posts, let's say 5. Click Save Changes. We've configured our site to limit how much data we save to the database. We're still saving some data, but it's not going to get out of control. That's a great place to be for a site administrator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (4), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [MySQL](../../Skills/Software%20Development/MySQL.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=0)** - [Instructor] In this course, we've talked about caching a few times, so let's do a quick review of exactly how it works. A user will start by visiting your site. [WordPress](../../Skills/Web%20Development/WordPress.md) will then process [PHP](../../Skills/Software%20Development/PHP.md) and send requests to the database. Once WordPress gets that data, it finishes processing the PHP files and creates an [HTML](../../Skills/Web%20Development/HTML.md) page. Then that HTML page is saved into the server cache and returned to the user. Voila, the user sees a webpage. Then when the next user wants to visit the same page, WordPress can skip the whole PHP and database process, since the HTML page is already stored in the cache. Boom, the web page is already ready to go. Caching is one of the most popular solutions for speeding up your site for good reason. You can drastically improve your website's speed with easy to configure caching plugins, or your managed WordPress host might have it built in. But caching is only one technique. It's a mistake to stop there. If you want a site that is truly optimized for speed, it's better to take a multi-faceted approach. I recommend you develop a toolbox of strategies to speed up your website so you have ways to fix any issues that are slowing you down. The problem with caching is it makes every other issue harder to diagnose. Not only do you have to disable caching to try to discover the problem, you also have to make sure your solution still works once the cache is re-enabled. It's incredibly frustrating to fix a problem only to find
>
> **[1:35](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=95)** that problem still persists in the cache. Caching is an incredibly powerful tool, but my advice is to save it for last. First, use all the previous strategies I outlined in this course to speed up your site. Then if your site is still loading slowly, move on to caching. Caching is simple to set up initially, but it requires constant tweaking and testing, especially after you add new posts, update a file, or upload a new image. Let's talk about the different types of caching for your server. There's page caching, database query caching, and object-based caching. Page caching is what it described at the beginning of this lesson. And some managed hosts like WP Engine will automatically handle page caching for you. It's one of the most effective [Forms](../../Skills/Web%20Development/Forms.md) of caching because it saves an entire page. If you have a static site that doesn't change often, page caching is a fantastic tool. Database caching is helpful for sites with large [Databases](../../Skills/Software%20Development/Databases.md) or sites which rely heavily on [Database Queries](../../Skills/Software%20Development/Database%20Queries.md). Instead of saving an entire page, you'll save the result of a few queries. WordPress still has to process PHP files, but the data is already saved. Object caching doesn't really apply to end users, but if you're a developer it's helpful to know that WordPress is object caching functionality is baked in. When you're writing code, you can cache objects so other PHP files can interact with them. The caching we just covered relates to servers because the website administrator sets it up
>
> **[3:07](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/what-is-caching?u=76281980&t=187)** for their users on the server. There is also local caching which is automatically handled by browsers. When you visit a website, the browser downloads CSS, [JavaScript](../../Skills/Software%20Development/JavaScript.md), images, and other static files. It saves these to your local browser cache. So if you visit the same site five minutes or five days later, the files are already saved to your machine, and that website will load much faster. There isn't much to do here since browser caching is automatic, but it's useful to remember that files are being cached all the time, and technology is constantly trying to help websites load faster. Next up, let's configure a caching plugin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (6), [PHP](../../Skills/Software%20Development/PHP.md) (5), [HTML](../../Skills/Web%20Development/HTML.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** php (5), html (3), css (1)
> **CLI Commands:** php (5), make (1), find (1)
> **Prerequisites:** configure (2), set up (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configuring caching plugins](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=0)** - [Instructor] There are a lot of caching plugins for [WordPress](../../Skills/Web%20Development/WordPress.md), and some of them have been around for many years and have a pretty good reputation, like W3 Total Cache or WP Super Cache. And most of these can be found for free [wordpress.org](https://wordpress.org). For this course, I want to show a premium option called WP Rocket that costs about $50 a year for a single site. To give you an idea of what a caching plugin can do, here are some of the features in WP Rocket. Page caching is what we talked about in a previous lesson. GZIP compression so you can make files smaller for transit. Cache preloading so you don't need that first person to go through an uncached page. eCommerce optimization so it doesn't break the cart or a checkout. And a lot more. And many other caching plugins have similar features, so there's a lot of really useful optimizations in these plugins. I've already bought this plugin and uploaded it to my site. Let's go ahead and activate the plugin. One of the best things about this plugin is that it makes really smart default decisions. Just turning on the plugin should speed up your site. Let's take a look at these settings. We can see they already preloaded some pages for us. And here we can see the different options. There's the dashboard with the important "Clear Cache" button, which we'll talk about later. Different caching options, file optimization,
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/configuring-caching-plugins?u=76281980&t=93)** which we've done in previous lessons. Lazy loading, which we've done in previous lessons. As well as database, CDN, Heartbeat, and a whole lot more. Without tweaking any of the settings, let's go ahead and do a speed test. Here's the speed test I took right before this video. Largest Contentful Paint in about two seconds. Total page size: 1.8 megabytes, and 35 different requests. And let's go ahead and test it now that we have WP Rocket enabled. As you can see, caching plugins like WP Rocket can give you stellar results. This whole course, we've been hovering between an A and a B grade, and for the first time, we hit a 100% performance score. And our Largest Contentful Paint dropped from two seconds down to a little bit less than 0.7 seconds. Our fully loaded time is 3.2 seconds, our total page size is about the same, and our total page requests dropped a little bit. So if you haven't optimized your website as much as you'd like, and you've already followed the other pieces of advice in this course, now is the time for you to install a caching plugin. You can choose from one of the many free plugins or use the paid plugin, which has really great defaults.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=0)** - [Instructor] If you use caching to speed up your site, you have to know how to disable, clear or bust the cache. Let me give you an example. You can upload an image today, and at three months, you might want to update that image. Depending on how you update that image in [WordPress](../../Skills/Web%20Development/WordPress.md), along with your settings, determines who will see that image. If you aggressively cache your site, you could be in a situation where you see the new image and your users see the old image. I actually had this experience while making this course. I over-optimized these two images and they looked a little blurry, so I re-optimized the image. But even after it was re-optimized, I couldn't see that new image because it was cached somewhere, and I had to troubleshoot the issue to clear the cache so I could see the updated image. When this happens, there are a few steps that you can take. Start by emptying or purging any cache system. In the last video, we saw a clear cache button in the WP Rocket settings page. Your host may also have caching and may have a clear cache button, as well as your CDN. If this doesn't work, start disabling your plugins, specifically with the caching plugin first, and then disable your CDN, and if neither of those work, it's time to look into versioning your files. This tricks the browser into thinking that it's a new file so it downloads it. Finally, clear your own browser cache. This is the last step because it only solves the issue for your browser. If anyone else has this issue, it won't solve it for them
>
> **[1:34](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/cache-busting?u=76281980&t=94)** and they'll see old content. If you're a developer, I've always been a fan of versioning your files, and there's a few different ways to do this. You conversion the file name, something like style.v2.css or style-v2.css, you conversion the file, path /v2/your file name, or you can add it as a query string, so style.css?v=2. Because the file name or path look different, your browser thinks it's a new file and downloads it. This is a fantastic way to make sure that no one sees old content. Many CDNs and cache systems will work with any of these versioning formats, but sometimes, you will run into issues with query strings, so keep an eye out for that, and this will work for any assets, images, [JavaScript](../../Skills/Software%20Development/JavaScript.md) or CSS files. Using caching can really speed up a site, but it can also conceal problems. That's why you want to get really good at busting your own cache to make sure that all of your visitors are experiencing the latest version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=0)** - [Patrick] Speeding up your website and keeping it fast creates the ideal experience for users. The faster the site, the more likely people are going to convert and get through your checkout or submit a form, and the better you'll do in search engine result pages. We covered some basic strategies in this course. Keep in mind, the larger and more complex the site, the more time you'll have to spend optimizing. And remember that each website is different. Some of the strategies we took a look at in this course might not work at all for your site. Just one strategy might be responsible for 90% of the speed gains. Your mileage will vary. If you want to get really good at running a fast website, follow the best practices when it comes to building [WordPress](../../Skills/Web%20Development/WordPress.md) sites, including customizing your theme and coding plug-ins. And you can do that with a ton of great courses in the library. Follow managed WordPress hosts who tend to care a lot about speed. And follow plugins that also focus on speed, like caching plugins. They often have great advice outside of caching to help you speed up your site. If you're a developer, you can also watch Learning Gatsby in the library. It's slowly becoming the go-to strategy for developers to speed up the front end of their site. Finally, keep experimenting and learning because each website is different and you have to learn what works for your site. I write about WordPress, including speeding up your site on my programming blog [SpeakingInBytes.com](https://SpeakingInBytes.com). Optimizing your site can be frustrating
>
> **[1:33](https://www.linkedin.com/learning/wordpress-speeding-up-your-site/next-steps?u=76281980&t=93)** and overwhelming at first. But once you learn what strategies work for you and your sites, it becomes a really enjoyable challenge. So get out there and speed up your sites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (3)
> **URLs:** [speakinginbytes.com](https://speakinginbytes.com) (1)
> **Cross-References:** we covered (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [patrick] (1)


## Instructor

- [Patrick Rauland](../../Instructors/Web%20Development/Patrick%20Rauland.md)

## Skills Covered

- WordPress

## Path Context

### In [Build Your WordPress Ecommerce Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20WordPress%20Ecommerce%20Skills.md)
← [WordPress- SEO](WordPress-%20SEO.md) | **5 of 6** | [Building a WordPress Membership Site with Ecommerce](Building%20a%20WordPress%20Membership%20Site%20with%20Ecommerce.md) →

## Appears In

- [Build Your WordPress Ecommerce Skills](../../Paths/Web%20Development/Learning%20Paths/Build%20Your%20WordPress%20Ecommerce%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Troubleshoot and Repair Your WordPress Website](Troubleshoot%20and%20Repair%20Your%20WordPress%20Website.md) — WordPress
- [WordPress- Accessibility](WordPress-%20Accessibility.md) — WordPress
- [WordPress- SEO](WordPress-%20SEO.md) — WordPress
- [Wordpress Ecommerce](Wordpress%20Ecommerce.md) — WordPress
- [WordPress- REST API](../Cybersecurity/WordPress-%20REST%20API.md) — WordPress

---

[↑ Back to top](#)