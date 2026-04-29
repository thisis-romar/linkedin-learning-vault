---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-a-headless-wordpress-site-with-gatsby-15801541
url: "https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541"
duration_minutes: 151
duration: 2h 31m
level: Intermediate
updated: 3/23/2022
learners: 5709
skills:
  - Wordpress Development
  - GatsbyJS
exercise_files: true
github: "https://github.com/LinkedInLearning/headless-wordpress-gatsby-3022691"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHfCK_-CVNrTw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647886030952?e=2147483647&amp;v=beta&amp;t=9ZTxNHE0CK1_q_WHOnJbnP-kUEVpp221YMw6JYpalI4"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Advance Your Skills in WordPress]]'
prev_courses:
  - '[[WordPress- REST API]]'
path_nav: '[{"path":"Advance Your Skills in WordPress","position":8,"total":8,"prev":"WordPress- REST API","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/web-development
  - skill/wordpress-development
  - skill/gatsbyjs
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Building%20a%20Headless%20WordPress%20Site%20with%20Gatsby.md)

![Building a Headless WordPress Site with Gatsby](https://media.licdn.com/dms/image/v2/C4E0DAQHfCK_-CVNrTw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1647886030952?e=2147483647&amp;v=beta&amp;t=9ZTxNHE0CK1_q_WHOnJbnP-kUEVpp221YMw6JYpalI4)

# Building a Headless WordPress Site with Gatsby

> View Morten's LinkedIn NewsletterWordPress, the powerful publishing platform, powers much of the web. Gatsby allows developers to build performance-focused, modern websites and applications with React. In this course, discover how to combine this dynamic duo to get a web publishing powerhouse. Join instructor Morten Rand-Hendriksen as he explains how to use WordPress to populate a Gatsby site. He 

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541) | 2h 31m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Setting Up]]** (3 videos)
- **[[#2. WordPress as a Gatsby Data Resource]]** (2 videos)
- **[[#3. Working with Pages]]** (6 videos)
- **[[#4. Custom Menus]]** (6 videos)
- **[[#5. Working with Posts]]** (7 videos)
- **[[#6. Categories and Tags]]** (5 videos)
- **[[#7. Custom Post Types and Taxonomies]]** (2 videos)
- **[[#8. Considerations When Using WordPress and Gatsby]]** (1 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### WordPress and Gatsby working hand in hand
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/wordpress-and-gatsby-working-hand-in-hand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/wordpress-and-gatsby-working-hand-in-hand?u=76281980&t=0)** - [Morten] The modern web runs on JavaScript, and JavaScript frameworks like React are quickly evolving our understanding of what websites and applications are, and how they work.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/wordpress-and-gatsby-working-hand-in-hand?u=76281980&t=8)** While WordPress forged the way for self-publishing online and today powers a sizable portion of the web, It's becoming increasingly long in the tooth.
>
> **[0:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/wordpress-and-gatsby-working-hand-in-hand?u=76281980&t=15)** Enter Gatsby, a react-based site building framework that consumes data through GraphQL and outputs blazing fast modern web applications.
>
> **[0:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/wordpress-and-gatsby-working-hand-in-hand?u=76281980&t=24)** This course picks up where the course Learning Gatsby leaves off, and assumes you're already familiar with both Gatsby and WordPress.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/wordpress-and-gatsby-working-hand-in-hand?u=76281980&t=31)** Gatsby makes it easy to build modern websites and applications with React, and WordPress makes it easy to write and manage content for the web.
>
> **[0:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/wordpress-and-gatsby-working-hand-in-hand?u=76281980&t=38)** Combining the two gives you a modern web publishing power house, and I'm here to show you how to get it right.
>
> **[0:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/wordpress-and-gatsby-working-hand-in-hand?u=76281980&t=43)** So let's get cracking.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1), let (1)
> **Speakers:** - [morten] (1)

#### What will be covered in this course
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=0)** - [Instructor] As we get started I want you to know what to expect from this course.
>
> **[0:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=3)** So here's a short breakdown of what will be covered and what you need to know before you start.
>
> **[0:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=7)** In this course we'll take a deep dive into how to use WordPress as a data resource for Gatsby.
>
> **[0:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=12)** We're not simply building a Gatsby front end to a WordPress site.
>
> **[0:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=15)** We're laying the foundations for WordPress to become one of many data sources for a Gatsby site.
>
> **[0:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=20)** We'll start by giving WordPress a GraphQL interface for modern data access and management and explore the vast data sets made available from WordPress to Gatsby through GraphQL.
>
> **[0:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=30)** Then we'll turn WordPress into a data source for a Gatsby site and we'll look at how to generate content and pages from WordPress data, including pages, menus, posts, indexes, tag and category archives and custom post types and taxonomies.
>
> **[0:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=44)** And finally, we'll briefly discuss what to do about WordPress blocks, AKA Gutenberg blocks.
>
> **[0:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=50)** This course assumes you're already familiar with how to build a Gatsby site and how to manage data from various GraphQL sources.
>
> **[0:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=56)** So if this is the first time you're building a Gatsby site I strongly recommend watching the course Learning Gatsby first as this content is prerequisite to understand what's happening in this course you're watching right now.
>
> **[1:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=67)** I won't be covering any Gatsby basics in this course.
>
> **[1:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=70)** You also need an in-depth knowledge on how to build and run a WordPress site including how to create pages, posts and navigation menus.
>
> **[1:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-will-be-covered-in-this-course?u=76281980&t=77)** All of this and more is covered in our course, [[WordPress Essential Training]].

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), finally, (1)
> **Env Vars:** aka (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Set up WordPress to work with Gatsby
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=0)** - [Instructor] The goal and purpose of this course is to explore how we can use WordPress as a data source for Gatsby.
>
> **[0:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=5)** So it's self-evident, we need a WordPress site with some content to work with.
>
> **[0:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=9)** If you're following along with the exercise files for this course, I recommend setting up a WordPress site locally on your computer and use this URL for the WordPress site mywpsite.local.
>
> **[0:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=20)** Here's why.
>
> **[0:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=21)** If you're using the exercise files and you use a different URL for your WordPress site, you'll have to go in and manually change that URL every time you check out a new branch in the exercise files for each movie.
>
> **[0:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=33)** But if you use this URL, you'll be able to just work with the exercise files throughout.
>
> **[0:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=37)** So it's a lot easier that way.
>
> **[0:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=39)** I'm using local to run my local WordPress site on my computer.
>
> **[0:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=43)** You can use any tool.
>
> **[0:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=44)** Just make sure you set the URL to mywpsite.local to make everything work properly with the exercise files.
>
> **[0:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=51)** Once you're done with the course and you want to create your own WordPress and Gatsby site, you can use any tool you want and any site you want.
>
> **[0:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=59)** I recommend you always keep a local version of the site on your computer so you have full control over your WordPress sites and your Gatsby site as you're developing.
>
> **[1:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=67)** Then once you're ready to launch your site to the world, you can either move the WordPress site online to a live host on the web, or you can connect Gatsby to a live host on the web that already has a WordPress site and pull content from there.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=79)** Now, once you have a WordPress site set up on a computer, you need some content on that WordPress site.
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=84)** Here you can write your own content if you want to or if you just need some dummy content, you can go grab the Theme Unit Test data from the WordPress codex.
>
> **[1:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=93)** If you go to the page, you can download the Theme Unit Test right here, then go to WordPress, go to tools and import and import the Theme Unit Test data in.
>
> **[1:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=103)** The good thing about using the Theme Unit Test data is it gives you all the types of content WordPress might want to display to Gatsby.
>
> **[1:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=110)** So if I jump to the front-end here, you'll see I have a fairly built out menu.
>
> **[1:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=114)** I have posts and pages and images and categories and tags and types, everything that WordPress might want to send to Gatsby.
>
> **[2:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=123)** So it's a good idea to use this data to test your Gatsby site against.
>
> **[2:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=127)** All right, with WordPress setup and some content to work with, we need to do one more thing.
>
> **[2:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=132)** We need to install two plugins.
>
> **[2:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=134)** These plugins allow Gatsby to talk to WordPress and both of these plugins are available from the WordPress plugin directory, meaning you can install them directly from within WordPress.
>
> **[2:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=144)** Go to plugins, add new, and the first plugin you want to install is called WPGraphQL.
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=154)** This plugin adds a GraphQL interface to WordPress.
>
> **[2:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=158)** That way, Gatsby can talk directly to GraphQL and pull data from WordPress.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=163)** Now, when you activate WPGraphQL, you get a new icon up here in the WordPress toolbar called Graphical IDE.
>
> **[2:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=170)** Click on that and you'll go to a graphical representation or interface for GraphQL in WordPress.
>
> **[2:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=177)** Now, we're not going to use this particular interface in the rest of the course because this is the GraphQL implementation for WordPress itself.
>
> **[3:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=185)** Gatsby uses a custom implementation of GraphQL just for Gatsby, and that's done using a second plugin.
>
> **[3:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=192)** So again, go to plugins, add new, and this time search for WPGatsby.
>
> **[3:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=202)** This plugin does exactly what it sounds like.
>
> **[3:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=204)** It makes it easy for Gatsby and WordPress to talk to each other.
>
> **[3:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=208)** Once you install and activate this plugin, WPGatsby will sit on top of WPGraphQL and create a Gatsby-specific GraphQL interface for WordPress that's much easier for WordPress to work with and for you to understand as you're working through the of data inside of WordPress.
>
> **[3:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=223)** The final step we need to do now is just make sure this interface works.
>
> **[3:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=227)** For that, we'll go to the front-end of the site, so just mywpsite.local and then type in /graphql.
>
> **[3:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=236)** When you run this in Firefox like I'm doing, Firefox recognizes that this return is in the JSON format so it gives you a JSON interface to read the data.
>
> **[4:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=245)** If you're doing this in Chrome, you'll just get the text without any formatting, but it's the same text.
>
> **[4:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=250)** And what you notice right away is the very first thing it says is errors.
>
> **[4:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=254)** GraphQL request must include at least one of these two parameters query or queryid.
>
> **[4:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=260)** So even though this looks like an error, it actually tells us that the WPGraphQL and the WPGatsby are working properly and providing a GraphQL interface for us.
>
> **[4:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=269)** This is what we want from Gatsby.
>
> **[4:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-wordpress-to-work-with-gatsby?u=76281980&t=271)** And when we have this, we can start building out Gatsby and pull data from WordPress.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (7), new, (2), self (1), this, (1)
> **Env Vars:** url (5), json (2), ide (1)
> **UI Navigation:** go to (7), click on (1)
> **Exercise Files:** exercise files (5), download the (1)
> **Prerequisites:** install (4), set up (1), setup (1)
> **CLI Commands:** make (3)
> **Tools:** firefox (2)
> **Definitions:** is called (1)

#### Set up a Gatsby site using a starter
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=0)** - [Instructor] Working with Gatsby and WordPress, you can go down one of two paths.
>
> **[0:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=4)** The first path is to use Gatsby as a decoupled headless front-end to WordPress.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=8)** That means you're basically using Gatsby to create the front-end of WordPress.
>
> **[0:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=12)** This way, anything that happens in WordPress also happens in your Gatsby site, and only what happens in WordPress happens in your Gatsby site.
>
> **[0:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=20)** That way you can take full advantage of all the features that Gatsby and React have to offer on the front-end of your WordPress site, but still manage all your content and work with your WordPress site the way you would in any other WordPress site.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=31)** If you want to go down this path, you can pick up a Gatsby Starter for WordPress, and it's available directly from Gatsby.
>
> **[0:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=38)** Go to [gatsbyjs.com/starters](https://gatsbyjs.com/starters), and then I just type in WordPress, and you'll find whatever Gatsby Starters for WordPress are available.
>
> **[0:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=46)** Just install it, run it, link it up to your WordPress site, and you're good to go.
>
> **[0:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=50)** But this path is fairly limiting.
>
> **[0:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=53)** It also doesn't take full advantage of what Gatsby has to offer.
>
> **[0:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=57)** The whole point of Gatsby is what's known as the content mesh, where we pull data from different sources and then use Gatsby to collate all that data and present it to the user in one cohesive site.
>
> **[1:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=70)** That's the path we'll go down in this course.
>
> **[1:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=72)** And for that, we don't need a WordPress Gatsby starter.
>
> **[1:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=75)** We actually don't need a starter at all.
>
> **[1:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=78)** We're going to do this from scratch.
>
> **[1:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=80)** It all starts in your code editor.
>
> **[1:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=82)** I've chosen VS Code.
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=84)** Here I've navigated to an empty folder, and I'm going to open my terminal.
>
> **[1:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=88)** From terminal, I'll simply type in gatsby new.
>
> **[1:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=92)** Now I can do this because I've already installed the Gatsby CLI.
>
> **[1:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=95)** If you haven't done that before, and if you haven't worked with Gatsby before, I recommend you go watch the "Learning Gatsby" course to get familiar with how Gatsby works before you jump into this.
>
> **[1:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=105)** All right, so I'll run gatsby new.
>
> **[1:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=108)** This triggers a wizard of sorts that walks me through a bunch of questions and lets me set up my site.
>
> **[1:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=113)** So down here at the bottom it says, "What would you like to call your site?"
>
> **[1:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=116)** I'll call this one Gatsby and WordPress, okay.
>
> **[2:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=123)** "What would you like like to name the folder "where your site will be created?"
>
> **[2:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=126)** So the wizard will create a new folder under the current folder I'm logged into.
>
> **[2:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=130)** So I'll just call it Gatsby and WordPress, like this.
>
> **[2:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=135)** Then it asks, "Will you be using a CMS?"
>
> **[2:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=138)** And in this case I will.
>
> **[2:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=139)** So I'll navigate down to WordPress, and select Yes.
>
> **[2:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=143)** "Would you like to an install a styling system?"
>
> **[2:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=145)** So here you can choose between Emotion, PostCSS, Sass, styled-components, and Theme UI.
>
> **[2:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=150)** I'll say PostCSS.
>
> **[2:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=152)** "Would you like to install additional features "with other plug-ins?"
>
> **[2:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=155)** Let's see here.
>
> **[2:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=156)** Google Analytics, no.
>
> **[2:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=158)** Responsive images, yes.
>
> **[2:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=160)** So I'll hit Space bar to mark that.
>
> **[2:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=162)** Page meta tags with React Helmet, yes.
>
> **[2:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=166)** Automatic site map, yes.
>
> **[2:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=167)** Generate a manifest file, yes.
>
> **[2:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=170)** Markdown and MDX support, yes, and Done.
>
> **[2:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=175)** And now it says, "Configure the WordPress plugin."
>
> **[2:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=177)** And if you look at the very bottom, this should be the full URL to your GraphQL Endpoint set up by WPGraphQL.
>
> **[3:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=185)** Remember how we tested that in the previous movies?
>
> **[3:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=187)** So we have mywpsite.local/graphQL.
>
> **[3:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=190)** This is the URL it's looking for.
>
> **[3:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=192)** So I'll copy that and paste it in, [http://mywpsite.local/graphql](http://mywpsite.local/graphql), Return.
>
> **[3:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=200)** Now it lists all the configurations, and says, "Shall we do this?"
>
> **[3:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=204)** I say, "Yes."
>
> **[3:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=205)** And now Gatsby New will go on to the internet, pull down Gatsby itself, all of these plugins, all dependencies, and do the full install.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=214)** So this will take a while because there's a lot of data that's being downloaded and installed into your computer.
>
> **[3:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=219)** Once it's done, you'll have a fully functioning Gatsby site already connected to WordPress and ready for your development.
>
> **[3:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=226)** All right, the installation is done.
>
> **[3:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=228)** Now in the instructions it says, "Now you can navigate cd gatsby-and-wordPress, and then npm run and develop.
>
> **[3:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=234)** What I do when I work with Gatsby is the second I've installed Gatsby, I actually reopen VS Code in that folder so I don't have to navigate in through the terminal.
>
> **[4:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=243)** So let's do that first.
>
> **[4:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=244)** I'll go to File, Open folder, and then I'll open it directly inside WPGatsby here and Gatsby and WordPress.
>
> **[4:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=253)** That way my new Gatsby project is at the root.
>
> **[4:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=256)** From here, I can boot up the Gatsby development process and check to make sure everything is working properly.
>
> **[4:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=262)** To do that, in terminal I simply type out gatsby develop and hit Return.
>
> **[4:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=267)** Now the Gatsby develop process starts up, and an entire new Gatsby site is built out with connection to WordPress, meaning Gatsby will now go and try to pull content from WordPress.
>
> **[4:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=278)** You can actually see it here in the terminal if I scroll up a bit.
>
> **[4:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=281)** You see, gatsby source WordPress.
>
> **[4:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=283)** It's pulling in content type, menu item, category, comment, menu, post feature, page, taxonomy, user, et cetera, et cetera.
>
> **[4:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=290)** So you can see Gatsby is going into GraphQL, pulling data out of my active WordPress site and putting it into Gatsby.
>
> **[4:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=298)** Now, of course, right now, nothing really happens to that data because we don't have any templates so we're not really building anything, but Gatsby has access to all that information.
>
> **[5:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=307)** And that means when I go to this URL here, local host 8,000 underscore underscore underscore GraphQL, so I'll hit Command and click to get to that.
>
> **[5:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=319)** We have access to GraphiQL, and on the Explorer side here, if I zoom in a bit, you see, we have all these entries that say "allWP."
>
> **[5:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=328)** So this is all the WordPress content that Gatsby has been able to pull out of WordPress.
>
> **[5:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=333)** That means Gatsby is talking to WordPress through GraphQL, and we're able to treat the data from WordPress just like any other data source inside Gatsby.
>
> **[5:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/set-up-a-gatsby-site-using-a-starter?u=76281980&t=343)** This is where the true site development begins.

> [!info]- Semantic Content
>
> **Code Keywords:** new. (2), this. (2), let (2), return. (2), for. (1)
> **Tools:** terminal (5), vs code (2)
> **Prerequisites:** install (4), set up (2), configure (1)
> **Env Vars:** url (3), cli (1), cms (1), mdx (1)
> **CLI Commands:** find (1), cd (1), npm (1), make (1)
> **UI Navigation:** go to (3), scroll up (1)
> **Code Identifiers:** graphql (1), wordpress (1), allwp (1)
> **URLs:** [gatsbyjs.com](https://gatsbyjs.com) (1), [http://mywpsite.local/graphql](http://mywpsite.local/graphql) (1)

#### Use the exercise files on GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=0)** - [Instructor] Now that you know how to boot up a Gatsby project from scratch, let me show you how to use the exercise files for this course so you can follow along with me 'cause it's a bit different.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=8)** The exercise files for the course are in a GitHub repo.
>
> **[0:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=11)** Here you'll find branches for each movie and the branches are named for the chapter and movie number.
>
> **[0:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=16)** So if you're watching chapter number two, movie number two, you're looking for 02_02.
>
> **[0:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=22)** You'll also notice that for many movies there are two branches, one with the suffix B and one with the suffix E.
>
> **[0:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=28)** In this case the B is the beginning state of the code.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=31)** The E is the end state of the code.
>
> **[0:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=33)** So if you want to code along with me, you check out the B branch and then code along with me.
>
> **[0:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=37)** And then you can compare your code to my code in the E branch later on.
>
> **[0:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=42)** You'll also notice that for many movies like this one, 03_01, there's only a B branch.
>
> **[0:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=47)** That means I'm not changing any code in that movie.
>
> **[0:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=50)** So you can just open up the branch and look at the code and follow along with me.
>
> **[0:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=53)** For everything to work properly and for you to be able to follow along, you need to bring this GitHub repository into your computer and work with it as your Gatsby project.
>
> **[1:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=62)** To do so, start by copying the uri for the GitHub project.
>
> **[1:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=66)** Then go to VS Code and navigate to whatever folder you want to place the project inside.
>
> **[1:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=71)** So here I've navigated to a folder called wpgatsby.
>
> **[1:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=74)** It doesn't matter if there's something else in the folder 'cause you're going to create a new folder for your project.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=79)** Just make sure you're not dumping a new project into an existing Gatsby project.
>
> **[1:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=83)** So you should see a tree like this where there may be other folders but there's no actual project going on.
>
> **[1:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=88)** From here we'll run Gatsby new.
>
> **[1:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=91)** So we'll say gatsby new, then name the folder we want to place the new project into.
>
> **[1:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=96)** So I'll call it exfiles and then paste in the uri for the GitHub repository with the exercise files.
>
> **[1:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=103)** Run this command and now Gatsby new will do the same thing it did before.
>
> **[1:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=107)** So it'll set up a new Gatsby project for you, pull down all the dependencies and make everything work together except it'll use the exercise files GitHub repository as the baseline.
>
> **[1:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=118)** So that way you get all of my code into the project along with all the goodness of Gatsby.
>
> **[2:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=124)** Now you can navigate into the exfiles folder and here you'll see the entire Gatsby project.
>
> **[2:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=129)** My preference at this point is to reopen VS Code in this exfiles folder so that I'm working inside the folder at all times and I don't have to navigate into it.
>
> **[2:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=137)** So I'm going to do just that.
>
> **[2:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=138)** I'll go file, open folder and navigate a wpgatsby and exfiles.
>
> **[2:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=144)** Doing this means when I open terminal, I'm already in the exfiles folder and I don't have to navigate into it.
>
> **[2:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=150)** All right, these are the exercise files we'll be working with throughout the entire course.
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=154)** This however is the main branch of the repository but we need access to old sub branches so you can go in and see the code at different stages of the process.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=163)** That requires adding the exercise for GitHub repo as an upstream source and then fetching all the different branches from that repository.
>
> **[2:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=171)** Here's how to do that.
>
> **[2:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=172)** First I'll go into terminal and make sure I'm sitting in the exfiles folder.
>
> **[2:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=176)** You can see that right here.
>
> **[2:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=177)** Then I'll type in git remote add upstream and paste in the uri for the GitHub repository again.
>
> **[3:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=186)** When I run this command, I'm telling my local version of the code that hey, the original version of the code is sitting on GitHub and I want you to connect to it and be able to pull data down from it.
>
> **[3:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=197)** Once I've done this, I can run another command, git fetch upstream.
>
> **[3:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=202)** This will pull down every single branch from the GitHub repository on the web.
>
> **[3:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=207)** And that means from this point onwards, I can now check out any of these branches.
>
> **[3:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=212)** So for example, if I want to check out say branch 06_01b, I can simply say git checkout 06_01b, hit return.
>
> **[3:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=224)** A new branch is created in my local repository.
>
> **[3:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=227)** You noticed the code changed and now you're working with the exact same code I had when I started the movie 06_01.
>
> **[3:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=235)** That's it.
>
> **[3:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-the-exercise-files-on-github?u=76281980&t=235)** Now you have the exercise file set up on your computer and you're ready to start working along with me.

> [!info]- Semantic Content
>
> **Tools:** github (9), vs code (2), terminal (2)
> **Exercise Files:** exercise files (5), github repo (2), exercise file (1)
> **CLI Commands:** make (3), git (3), find (1)
> **Code Keywords:** let (1), new. (1), new, (1), this, (1), return. (1)
> **UI Navigation:** go to (1), navigate to (1)
> **Prerequisites:** set up (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. WordPress as a Gatsby Data Resource

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Explore the WordPress GraphQL tree
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=0)** - [Instructor] Working with WordPress in Gatsby is no different from working with any other GraphQL data source.
>
> **[0:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=5)** We send requests to GraphQL.
>
> **[0:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=7)** GraphQL returns the data to us and then we do whatever we want with it inside of Gatsby.
>
> **[0:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=12)** The difference is now that data is generated by WordPress and we can take advantage of all the data creation features in WordPress by creating posts and pages and categories and tags and custom pulse types and custom fields and custom menus, anything we want inside WordPress and then pull that data into Gatsby and manipulate it to display it on the front end.
>
> **[0:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=34)** This entire process starts by running Gatsby develops.
>
> **[0:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=37)** So inside my Gatsby site I'll open my terminal and type in gatsby develop.
>
> **[0:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=43)** As Gatsby boots up it now queries WordPress through GraphQL for all available data.
>
> **[0:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=49)** All that data is pulled into Gatsby and made available as a data source.
>
> **[0:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=54)** And we can now explore that data source using GraphiQL.
>
> **[0:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=57)** When Gatsby develop has fully booted up, you get two links, one to local host, which is the live Gatsby site, another to localhost:8000/__graphql.
>
> **[1:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=69)** And this is what we want to look at.
>
> **[1:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=70)** From here you can hit Command or Control + click to open the URL.
>
> **[1:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=75)** It'll open in your browser.
>
> **[1:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=77)** And here we have full access to all the data GraphQL has available to us through Gatsby.
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=84)** Under the Explorer, you can see all of that data.
>
> **[1:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=86)** And what you see right away is we have two different sets of data from WordPress.
>
> **[1:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=90)** You have all these nodes, prefixed allWp and then further down you have another set of nodes, prefixed wp.
>
> **[1:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=98)** The difference here is allWP gives you access to all the information.
>
> **[1:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=102)** So for example, all your pages or all your posts or all your categories, whereas down here in the wp for prefix, you get one item, a singular item.
>
> **[1:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=112)** So one category or one comment or one page or one post.
>
> **[1:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=116)** So let's see what type of data we can pull out of GraphQL right now.
>
> **[2:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=120)** For example, can we get the name of the site?
>
> **[2:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=124)** So this name here, MYWPSITE is developed that's defined inside WordPress.
>
> **[2:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=129)** To do that, we'll go into the singular item here.
>
> **[2:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=132)** So I'll say wp and here I have a bunch of things.
>
> **[2:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=136)** So let's see.
>
> **[2:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=137)** How about general settings?
>
> **[2:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=139)** So under general settings, I have title.
>
> **[2:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=143)** Let's just try that.
>
> **[2:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=144)** Run the query and see what we get.
>
> **[2:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=147)** Title mywpsite.
>
> **[2:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=149)** Oh, so this is the title for the site.
>
> **[2:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=151)** All right.
>
> **[2:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=151)** Can I get something else?
>
> **[2:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=152)** Can I maybe get the description?
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=154)** Over here the description is just another WordPress site.
>
> **[2:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=157)** If I run the query, we get just another WordPress site.
>
> **[2:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=160)** Cool. I can also get the URL for the site.
>
> **[2:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=164)** Here it is, mywpsite.local.
>
> **[2:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=167)** So here you see the power of GraphQL right away.
>
> **[2:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=169)** We can go in and query specific data from the WordPress database and every piece of data that sits inside the WordPress database is now available to us through GraphQL.
>
> **[2:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=179)** All right.
>
> **[3:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=180)** So let's clear this query and look for something else.
>
> **[3:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=183)** Let's say I want a list of all the posts on the site.
>
> **[3:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=186)** For that I can go into allWp posts then I need to look for the actual posts.
>
> **[3:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=194)** So I'll say, give me all the nodes and we need to some information from each of the posts.
>
> **[3:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=199)** So let's see, we want the post title which would be down here and maybe the slug, let's see no, the uri to the post.
>
> **[3:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=209)** So that would be the, uri you would use to access the post.
>
> **[3:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=213)** What else do we want?
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=214)** Maybe the date that it was created.
>
> **[3:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=217)** Okay. So let's run that query and see what we get.
>
> **[3:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=219)** So now we get an array of nodes.
>
> **[3:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=222)** Each of them is a singular post.
>
> **[3:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=223)** So here we have the first post called hello title.
>
> **[3:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=226)** I don't know, hello world.
>
> **[3:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=227)** And then we have block-button post and block-cover and block-image and so on.
>
> **[3:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=232)** And here you see there's a huge list of all available posts.
>
> **[3:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=235)** All right.
>
> **[3:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=236)** But what if I want to get a single post?
>
> **[3:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=239)** If we go back and look at the data we have for each of these nodes you'll quickly see we have two different types of IDs.
>
> **[4:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=245)** We have this one called databaseId.
>
> **[4:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=248)** I'll take data away just to reduce the amount of data we have here.
>
> **[4:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=252)** And then scrolling further down we also have another one just called id.
>
> **[4:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=255)** So what is the difference between databaseId and id?
>
> **[4:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=260)** Run this query and you see the databaseId is a number.
>
> **[4:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=263)** So number one for the first post then number 1785 for the second post, 1784.
>
> **[4:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=271)** So these are the database ID numbers inside the WordPress database.
>
> **[4:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=275)** The other field, the one called id is the ID GraphQL has given to each of these items.
>
> **[4:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=281)** So that's an autogenerated ID generated by GraphQL to help us find items if we don't have a databaseId.
>
> **[4:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=289)** So that means if you want to query a single post you can either query it using the databaseId or you can use the id itself.
>
> **[4:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=297)** And in this course, we'll do both.
>
> **[4:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=299)** But the good rule of thumb here anytime you're acquiring some WordPress content you should use the WordPress information so we'll use the databaseId.
>
> **[5:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=308)** So let's say we want just this one post here, the one with a databaseId 1785.
>
> **[5:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=313)** I'll copy that number.
>
> **[5:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=315)** Then I'll clear out my query here by just closing allWpPost and scroll down wpPost.
>
> **[5:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=322)** So this is a singular post.
>
> **[5:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=325)** Then I want to find just one post.
>
> **[5:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=327)** So I'll go to the databaseId entry here and set it equal to and then paste in my number.
>
> **[5:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=333)** Now I'm saying, give me only the post with this ID here, databaseId equals 1785.
>
> **[5:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=340)** Then I want some information from this post.
>
> **[5:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=342)** So I want the, let's see, the author name probably.
>
> **[5:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=347)** So the author node and then the nice name, the username, no nickname or nice name.
>
> **[5:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=357)** And then I want the dates and I want the title here.
>
> **[6:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=365)** Run this query.
>
> **[6:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=366)** Now we get a single post.
>
> **[6:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=368)** He has no, this author has no nice name, okay?
>
> **[6:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=371)** So we can go back up and say, what if we do first name instead?
>
> **[6:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=377)** Do we get something then?
>
> **[6:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=378)** Hm, oh, interesting.
>
> **[6:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=379)** Oh yeah, right. This is the theme unit test data.
>
> **[6:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=381)** That's why we get weird names.
>
> **[6:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=383)** But here you can see we are querying a single post and we're getting all the information from that single post.
>
> **[6:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=389)** It gets even more interesting though, because you know that in WordPress you'll have posts that have categories or tags attached to them.
>
> **[6:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=397)** So how do you know which categories or tags are attached to a post?
>
> **[6:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=400)** Well, if we go and inspect the data here, so I'll collapse author and then we can go down to categories.
>
> **[6:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=406)** You'll notice when I open categories we get a new series of nodes.
>
> **[6:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=410)** Inside these nodes we now have a list of all the available categories.
>
> **[6:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=414)** So here we can say for each of the nodes, I want the name of the category and the link to the category.
>
> **[7:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=421)** Run the query again nd now we get a list.
>
> **[7:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=423)** So here it says that this post is filed under the category called block.
>
> **[7:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=428)** And the link is to /category/block.
>
> **[7:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=432)** If we go and look at the actual post, it's this block button one here, it's under the category block and it's also tagged content and something in Greek.
>
> **[7:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=443)** So we can go back up here and say, do we have tags anywhere?
>
> **[7:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=447)** Let's see tags do the same thing.
>
> **[7:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=450)** We look for all the nodes.
>
> **[7:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=452)** And then for each of the nodes we want the name and the link.
>
> **[7:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=456)** Run the query again.
>
> **[7:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=458)** We now get a list of all the tags.
>
> **[7:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=459)** So here we have name content and something Greek and then /tag/content.
>
> **[7:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=465)** So that means any data that sits in WordPress is available to us through GraphQL.
>
> **[7:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/explore-the-wordpress-graphql-tree?u=76281980&t=470)** And it's just a matter of creating the query in GraphiQL, pull out the data we want and then parse it in JavaScript inside Gatsby.

> [!info]- Semantic Content
>
> **Code Identifiers:** databaseid (9), allwp (3), allwppost (1), wppost (1)
> **Code Keywords:** let (11), else. (1)
> **CLI Commands:** find (2), node (1)
> **Env Vars:** url (2), mywpsite (1)
> **UI Navigation:** open the (1), scroll down (1), go to (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **URLs:** [localhost:8000](https://localhost:8000) (1)

#### Use WordPress site data in Gatsby
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=0)** - [Instructor] The quickest path to understanding how we can work with WordPress data through GraphQL is to see a really simple bare bones example.
>
> **[0:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=7)** And that's what we'll do in this movie.
>
> **[0:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=9)** If you boot up your Gatsby site right now and go to localhost:8000, you'll get this page.
>
> **[0:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=14)** And at the very top, it says Gatsby and WordPress Demo Starter.
>
> **[0:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=17)** This is the current site title, but this is being generated by Gatsby through information that's sitting inside Gatsby.
>
> **[0:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=25)** What I want to be able to do is go to WordPress and change the site title in WordPress and then have that new site title reflected on the Gatsby site.
>
> **[0:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=34)** For that to happen, we first need to figure out how the site title is getting to the Gatsby page to begin with.
>
> **[0:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=39)** Now, the title is actually defined here in gatsby-config.js at the very top.
>
> **[0:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=45)** There's this siteMetadata section.
>
> **[0:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=47)** And here we have a defaultTitle that says Gatsby and WordPress Demo Starter, which is the same thing we're seeing at the top here.
>
> **[0:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=53)** So that's the data source we're currently working with.
>
> **[0:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=56)** That's an internal data source for Gatsby.
>
> **[0:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=58)** Now we want to pull it from WordPress instead.
>
> **[1:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=61)** And to do that, need to figure out where we should place this data.
>
> **[1:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=64)** So the site title is normally placed in the header.
>
> **[1:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=67)** Meaning if I go to the source folder inside Gatsby, go to components, I should be able to find a header.
>
> **[1:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=73)** And here we have it Header.js.
>
> **[1:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=75)** So at the very top of Header.js, it says const Header.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=79)** So this is the header component and it imports this property siteTitle, and then down here, it use the siteTitle to output.
>
> **[1:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=89)** So that means this is where the site title is being displayed, but this is not where we're getting the site title from.
>
> **[1:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=95)** Now, header is called by Layout.js.
>
> **[1:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=98)** And if we go into Layout.js, you can see here, we're calling the Header component.
>
> **[1:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=103)** And here, if we scroll down, this is where the Header component is used.
>
> **[1:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=107)** And this is where the siteTitle is displayed.
>
> **[1:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=110)** So the siteTitle property is being passed into the component here.
>
> **[1:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=113)** And it's currently populated with data.site.siteMetadata.defaultTitle, which is what you saw in gatsby-config.
>
> **[2:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=121)** Now, this data is being queried using a static query in GraphQL, right here at the very top.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=128)** It's a SiteTitleQuery, then it's querie's site, siteMetadata, and defaultTitle.
>
> **[2:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=133)** And that's what you're seeing down here.
>
> **[2:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=135)** This is a great way of having a fallback.
>
> **[2:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=137)** So you can say, if something goes wrong on the WordPress end, the site can still have a title and will pull it directly from Gatsby.
>
> **[2:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=144)** But it's also not what we want.
>
> **[2:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=146)** We want to be able to display the WordPress site title.
>
> **[2:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=149)** For that, we need to go to GraphQL.
>
> **[2:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=151)** And you'll remember, we already did this once, but I'll do it again.
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=154)** I'll go into wp, then say, I want general settings, so here.
>
> **[2:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=160)** And then from generalSettings, I want the title.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=163)** So this should gimme the title.
>
> **[2:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=164)** Yes, it does. mywpsite.
>
> **[2:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=166)** So this is the title I want.
>
> **[2:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=167)** That means this is the query I want.
>
> **[2:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=169)** wp, generalSettings, and title.
>
> **[2:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=172)** Just for simplicity sake, I've already added that query in.
>
> **[2:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=175)** So you can see, we are running multiple queries here.
>
> **[2:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=177)** One for the internal data inside Gatsby and one for WordPress.
>
> **[3:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=181)** So wp, generalSettings, title.
>
> **[3:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=183)** That also means I should be able to display that data down here.
>
> **[3:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=186)** So what I'll do is set up a conditional statement that says if we have the WordPress data, then use the WordPress data.
>
> **[3:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=193)** Otherwise, use the default title.
>
> **[3:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=194)** So in front of data.site.siteMetadata.defaultTitle, I'll put in two pipes.
>
> **[3:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=201)** And then in front of that, I'll say data.wp.generalSettings.title.
>
> **[3:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=210)** That's wp.generalSettings.title.
>
> **[3:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=213)** Data being the object that contains all this information.
>
> **[3:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=216)** So now, if we get a result from WordPress, that's the title that's displayed.
>
> **[3:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=221)** Otherwise, we display the default title.
>
> **[3:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=225)** Save the file.
>
> **[3:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=225)** Gatsby will now try to regenerate the content.
>
> **[3:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=228)** You can see that down here.
>
> **[3:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=230)** There's a bunch of stuff that's happened.
>
> **[3:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=232)** And if I go back to the frontend, the site title is now mywpsite.
>
> **[3:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=236)** Very cool. All right.
>
> **[3:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=238)** So what happens if I go into WordPress and try to change the site title.
>
> **[4:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=241)** So I'll go in here, go to Settings, General.
>
> **[4:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=244)** Here we have the site titles.
>
> **[4:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=246)** I'll call it My WordPress and Gatsby Site.
>
> **[4:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=253)** Update that by saving the changes, go back to the homepage, reload the homepage, and look at that.
>
> **[4:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=259)** My WordPress and Gatsby Site.
>
> **[4:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/use-wordpress-site-data-in-gatsby?u=76281980&t=261)** So now, the site title is being generated by WordPress, then sent via GraphQL into my Gatsby site, and because I'm running gatsby develop right now, it's automatically updated in the browser.

> [!info]- Semantic Content
>
> **Code Identifiers:** generalsettings (5), sitemetadata (4), defaulttitle (4), sitetitle (4)
> **UI Navigation:** go to (6), scroll down (1)
> **File Paths:** header.js (2), layout.js (2), gatsby-config.js (1)
> **Code Keywords:** const (1), from. (1), static (1)
> **Cross-References:** go back to (2)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** find (1)
> **URLs:** [localhost:8000](https://localhost:8000) (1)


### 3. Working with Pages

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Query pages in GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=0)** - [Instructor] WordPress has two main types of content: pages and posts.
>
> **[0:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=4)** They're separate in the WordPress backend and they behave slightly differently.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=8)** Pages are meant to be static pages of content.
>
> **[0:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=11)** That would be things like the about page or the contact page on a website or anything that doesn't really change.
>
> **[0:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=17)** A good rule of thumb here is if you're going to put something on the main menu and you can click on it to go directly to that item, it's usually a page, it's not a post.
>
> **[0:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=27)** The idea is when you make pages, you're making something sort of permanent that goes on the site forever, or at least is unlikely to change.
>
> **[0:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=35)** Whereas a post is something more ephemeral, like a news item or a blog post or an article.
>
> **[0:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=40)** When we work with Gatsby in WordPress, we can choose how we want to handle both posts and pages and they can be handled completely separately, completely independently.
>
> **[0:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=48)** It's a good idea to stick with the formatting that WordPress already imposes on this content and use pages as static or relatively unchanging content and posts for more news type content or blog posts or whatever you want to call it.
>
> **[1:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=62)** In this chapter, I want to focus on pages to show you how you can create pages in WordPress and then get them to display in Gatsby and use all the features of pages in WordPress in your Gatsby site.
>
> **[1:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=74)** We start, as we always do, in graphical.
>
> **[1:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=77)** This is our interface for all the data that comes out of WordPress.
>
> **[1:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=80)** And since we're now talking about pages, we're either dealing with all WP page or just WP page, depending on whether we want all pages or just a single page.
>
> **[1:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=90)** So let's look at all WP page and see what information we can get out of it.
>
> **[1:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=95)** I'll open all WP page.
>
> **[1:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=97)** Here we can choose how we want to organize the pages.
>
> **[1:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=100)** So we can go for the edges.
>
> **[1:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=102)** If you open edges, you'll see we have the node itself and then we have the next and previous.
>
> **[1:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=107)** This makes a lot of sense if you're working with posts and we will use these features later, but it doesn't really make any sense in pages because pages are not posted in a chronological order and the order in which they were created isn't relevant.
>
> **[1:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=119)** So we're going to ignore edges.
>
> **[2:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=121)** You can also create custom groups of pages if you want to and this may be important if you have these parent/child relationships between pages, but we're not going to do that here.
>
> **[2:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=131)** Instead we'll just go directly to the nodes.
>
> **[2:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=133)** So these are the pages themselves.
>
> **[2:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=135)** For each of the pages, we now have a ton of data.
>
> **[2:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=138)** We have the author, then we have the author database ID, we have the children of the pages if the page is a parent and has children, we have comments for the pages, we have the date and the database ID, and all the other information that's stored in the WordPress database.
>
> **[2:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=153)** So if we're looking for a page, we probably want the title, we probably want the URL, and we also want some of the content.
>
> **[2:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=160)** So here, I'll say let's just do content and see what happens.
>
> **[2:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=166)** So we'll run this query and here on the output, we get all WP page nodes and then we get the first page called sample page with the URI/sample-page and then this is the content of that page.
>
> **[2:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=179)** Then we get the next page, which is in Greek.
>
> **[3:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=182)** So here we have some Greek letters.
>
> **[3:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=184)** We have a very complicated URL because this is a Greek letter URI.
>
> **[3:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=189)** Then we have null content, so there's nothing inside this post.
>
> **[3:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=192)** And then we can keep scrolling down and you see we have a full list of all the pages with all the content.
>
> **[3:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=198)** Well, this is useful if we want a list of pages, but we very rarely want a list of pages.
>
> **[3:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=204)** Instead, we want to find a specific page.
>
> **[3:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=206)** And this is what's really neat about GraphQL.
>
> **[3:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=208)** You can query for anything.
>
> **[3:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=210)** So for example, if I want to get this page and I know what it's called, I know that the title is page markup and formatting, I can actually query for the title.
>
> **[3:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=220)** So instead of going into all WP page, I'll go down here to just WP page to get a singular page.
>
> **[3:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=227)** And instead of querying for the database ID that we did before, I'll query for the title.
>
> **[3:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=233)** So I'll go down here to title and I'll say equal to and then just paste in the title.
>
> **[3:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=239)** Now we have page markup and formatting.
>
> **[4:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=242)** Then, I want the same information as before.
>
> **[4:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=244)** So I want the content, I want the title, and I want the URI.
>
> **[4:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=252)** Run that query and now I just get that single page.
>
> **[4:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=256)** Now notice I didn't use the database ID to get this information.
>
> **[4:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=261)** Instead, I use the title of the page.
>
> **[4:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=263)** And that means if you know any content within any item, you are actually able to query for that item as long as there aren't two things that have the same name.
>
> **[4:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-pages-in-graphql?u=76281980&t=272)** So using the title like this is risky because you may have multiple things, but in the case, for example, with pages where you're unlikely to have multiple pages with the same name, you can, if you want to, query for the page name instead of query for the page ID.

> [!info]- Semantic Content
>
> **Code Keywords:** static (2), let (2), interface (1), case, (1)
> **Env Vars:** uri (3), url (2)
> **CLI Commands:** make (2), node (1), find (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **UI Navigation:** click on (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Generate pages automatically
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=0)** - [Instructor] Knowing I can gain access to all the pages on the WordPress site using GraphQL, I now want to set up Gatsby to auto-generate a page for each of the WordPress pages.
>
> **[0:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=9)** That way, if I add a new page on WordPress, it'll automatically appears in my Gatsby site as well.
>
> **[0:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=14)** In doing so, I want to preserve as much of the WordPress functionality as possible, and that includes the permalink for the page itself, and also the overall structure and content of the page.
>
> **[0:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=26)** I start this with a very basic query to give me all the pages in WordPress, all the nodes within those pages, and then I want the URI that is the WordPress-generated permalink and also the database ID so I can query each individual page.
>
> **[0:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=40)** This gives me a list of all the available pages.
>
> **[0:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=43)** Now I somehow have to tell Gatsby, "Hey, here's a list of all the available pages from WordPress.
>
> **[0:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=48)** Can you please go grab each of the pages and then generate a new page for that inside Gatsby for me?"
>
> **[0:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=55)** To do this, I need to write a node script.
>
> **[0:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=58)** This is done in a file called gatsby-node.
>
> **[1:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=61)** A node script allows Gatsby to perform some function over and over again, kind of outside of Gatsby and then instruct Gatsby on what to do with the output of that function.
>
> **[1:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=70)** And that's what we need to do here.
>
> **[1:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=72)** Tell Gatsby that here's a bunch of data from WordPress I want you to generate a page based on this list of pages.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=79)** Now, when we make changes to a node script, we have to turn off gatsby develop because gatsby develop kind of gets stuck in these changes since gatsby-node sits sort of on the outside of the Gatsby functionality.
>
> **[1:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=90)** So I'll go into my terminal here and hit Control + C to just terminate gatsby develop.
>
> **[1:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=96)** Then I'll open up gatsby-node and we can take a look at what's here.
>
> **[1:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=100)** Just to save a lot of time, I've already written out the script, and it's already available in the exercise files for this movie.
>
> **[1:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=106)** It's just been commented out.
>
> **[1:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=108)** So now I can uncomment the comments, and that way you can see what's going on.
>
> **[1:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=113)** It's all sitting here under this comment called Generate pages.
>
> **[1:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=117)** So if I just highlight all the text here and hit Command or Control + \ then it's uncommented.
>
> **[2:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=124)** All right.
>
> **[2:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=125)** At the very top, we invoke createPages and run an async function on it that pulls out actions, graphql, and a reporter.
>
> **[2:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=132)** Then from actions, we pull out this method here, createPage.
>
> **[2:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=137)** And the createPage method is surprise, surprise, the function that actually creates pages inside Gatsby.
>
> **[2:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=144)** Then we pass a query to GraphQL and that query is allWpPage, nodes, databaseId and uri.
>
> **[2:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=152)** That's the same query you saw in GraphiQL.
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=154)** This is the query that will give us an array of all the available pages from WordPress.
>
> **[2:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=159)** If there are no errors, then we go down to this createPage function.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=163)** So what I've done here is say, create a new constant called pages, that is the query result for data, pageQuery and nodes.
>
> **[2:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=171)** So that will give us this list of each of the nodes from allWpPage.
>
> **[2:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=176)** Then we set up a forEach loop on pages that generates a new page per item in that array.
>
> **[3:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=184)** So here we have createPage, then we grab the path for the page, that would be the page.uri, that's URI WordPress generates.
>
> **[3:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=191)** Then we use a component inside Gatsby to actually generate the page.
>
> **[3:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=195)** We'll look at that in a second.
>
> **[3:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=196)** And then we pass context.
>
> **[3:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=198)** This is data we can pass from node to the template to use later.
>
> **[3:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=202)** And the context we're passing is the database ID.
>
> **[3:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=205)** That way we can tell the page template, "Okay, here's the ID for a page.
>
> **[3:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=209)** Please go query the content of the page and generate the actual page."
>
> **[3:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=213)** So that's gatsby-node.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=214)** I'll save this file now that I've uncommented this section.
>
> **[3:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=217)** And gatsby-node calls this file here, /src/templates/page.js that I've also added.
>
> **[3:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=223)** So I'll go into src, templates and page.js.
>
> **[3:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=227)** This is a bare bones template right now 'cause I wanted to show you how it works before we build it out.
>
> **[3:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=232)** So what's happening here is we start off at the very bottom by sending a query to GraphQL.
>
> **[3:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=237)** This query receives the database ID.
>
> **[4:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=240)** This is that context we passed.
>
> **[4:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=243)** The database ID that we got from our GraphQL query up here.
>
> **[4:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=247)** Then it says, "Okay, based on this database query, we go to wpPage, databaseId equal to this databaseId we just got passed.
>
> **[4:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=256)** And then pull out two items, the title and the content.
>
> **[4:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=260)** Then we pass this data up to the component, which sits here.
>
> **[4:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=264)** It receives the data.
>
> **[4:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=265)** And then we create a new page that just sets up an article, sets page.title, and then page.content.
>
> **[4:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=272)** You'll also notice I'm using this crazy parameter here, dangerouslySetInnerHTML.
>
> **[4:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=278)** This is because the page content that WordPress is passing is pure HTML.
>
> **[4:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=284)** And in the React world, you should never, ever, under any circumstances, display pure unsanitized HTML, except for this circumstance where we already know that WordPress has sanitized that data for us and we're simply redisplaying what WordPress says is secure.
>
> **[5:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=301)** But this will not work, unless you set up dangerouslySetInnerHTML It's a quirk when you're working with two different systems that are both trying to protect you, they will sometimes try to protect you against themselves.
>
> **[5:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=313)** That's what's happening here.
>
> **[5:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=315)** All right, if we now run, gatsby develop again, gatsby-node we'll bring out a list of all the available pages and this page template will then generate all the pages for us.
>
> **[5:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=324)** So let's see if it works.
>
> **[5:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=326)** Open terminal, just clear it here and then say gatsby develop.
>
> **[5:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=332)** Now because I've made changes to gatsby-node, Gatsby will likely say, "Oh, I need to clear my cache and do everything all over again."
>
> **[5:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=340)** So it'll go on refetch everything from WordPress then regenerate all the content and generate our new pages so that we can see them on the front end.
>
> **[5:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=348)** So this might take a little while to finish.
>
> **[5:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=351)** Once the build is done, we can go back to the live version of our site and try to find the pages.
>
> **[5:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=356)** And this is kind of interesting because now we have pages, but there's no navigation, there's no tools here for us to actually find the pages.
>
> **[6:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=364)** But there's a trick.
>
> **[6:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=366)** If you just go and put in some garbage URL that goes nowhere, you'll get an error page.
>
> **[6:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=372)** And the error page will give you a list of all the pages that are available on the site.
>
> **[6:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=376)** So you see all the pages that were generated.
>
> **[6:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=378)** So here we have the Front Page.
>
> **[6:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=380)** We have the About Page.
>
> **[6:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=383)** Let's see, we have Page B.
>
> **[6:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=384)** We have, let's see, the Greek page with Greek content.
>
> **[6:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=388)** All the pages that were generated from WordPress now exists inside our Gatsby site.
>
> **[6:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=393)** They're just not readily available.
>
> **[6:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=395)** And also, because I'm not using a proper template, they just look like plain old HTML pages.
>
> **[6:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=400)** There's no layout, there's no design, there's no header, nothing.
>
> **[6:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-pages-automatically?u=76281980&t=404)** But what we're seeing is, thanks to gatsby-node and this simple page template, we're now auto-generating pages based on what is available inside WordPress.

> [!info]- Semantic Content
>
> **CLI Commands:** node (12), find (2), make (1)
> **Code Identifiers:** createpage (4), databaseid (3), allwppage (2), dangerouslysetinnerhtml (2), createpages (1)
> **Code Keywords:** function (5), pass (4), let (3), this, (1), async (1)
> **Exercise Files:** template (6), exercise files (1)
> **Env Vars:** html (3), uri (2), url (1)
> **Prerequisites:** set up (3)
> **File Paths:** src/templates/page.js (1), page.js (1)
> **Tools:** terminal (2)

#### Create a page template
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=0)** - [Instructor] At this point, Gatsby is auto generating a new Gatsby page for every WordPress page, which is great.
>
> **[0:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=6)** However, as in this example, the pages that are being generated are plain HTML documents.
>
> **[0:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=11)** There's no header, there's no style, there's no formatting.
>
> **[0:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=15)** So we have some more work to do here.
>
> **[0:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=17)** On the front page of the Gatsby site, there's already a stylistic template applied to the site.
>
> **[0:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=21)** And I want to carry that over into my page templates as well.
>
> **[0:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=25)** I want the header, the footer, and these margins on the side that prevent the content from spanning the full view port with.
>
> **[0:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=33)** So let's see how we can move these stylistic elements over from the Gatsby page to the auto generated WordPress pages.
>
> **[0:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=41)** This is one of the great things about working in Gatsby or any other template based system.
>
> **[0:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=46)** Once you have the data connections in place and you're able to get the data you want onto the right page and in the right context, you can start building out the display of that content in any way you want.
>
> **[0:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=57)** So what we'll do here is borrow some components from an existing page that we know work and place them into the new page template.
>
> **[1:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=65)** The page in question is a static Gatsby page and those are always found under the source folder and a folder called pages.
>
> **[1:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=72)** I'm looking for the index page.
>
> **[1:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=74)** And if I scroll down here, you see in the component, we have two components that are being used, the layout component and the SEO component.
>
> **[1:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=82)** Just for reference, in Gatsby, you typically use a layout component to wrap around all content and templates.
>
> **[1:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=88)** The layout component is what calls in the header, the footer, the sidebar, the actual content, and anything else that goes on the page.
>
> **[1:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=94)** It's just a good wrapper to place around everything.
>
> **[1:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=97)** So to use the layout component and the SEO component in our page, we need to first import them.
>
> **[1:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=102)** We do that by copying these two import calls at the top here so I'll just paste them in.
>
> **[1:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=108)** They automatically get grayed out in VS Code because we're not using them yet.
>
> **[1:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=112)** So they're just sitting there being imported.
>
> **[1:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=115)** Next, we need to actually use them.
>
> **[1:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=116)** So I'll copy the call to layout here at the top, and then go to the return in my page component and paste them in.
>
> **[2:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=124)** I need to close the layout component.
>
> **[2:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=126)** I do that at the bottom here.
>
> **[2:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=130)** And now we have valid HTML.
>
> **[2:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=132)** Then we can take a look at the output.
>
> **[2:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=134)** So now we are wrapping everything in the layout component and I'm just going to make a guess that that will give us the header and the footer.
>
> **[2:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=141)** Then we also have this SEO component which populates the head tag inside the HTML document.
>
> **[2:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=147)** And right now it has a bunch of properties defined.
>
> **[2:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=149)** Title, description, image, and path name.
>
> **[2:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=152)** These are all optional, and we can either let them be the default or we can change them into something else.
>
> **[2:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=157)** So in this case, I want to change the title and we already have the page title down here.
>
> **[2:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=162)** So I'll just put in the page title.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=163)** That's coming from Graph QL.
>
> **[2:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=166)** I'm going to remove the description.
>
> **[2:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=168)** We don't need it for this particular template.
>
> **[2:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=170)** And I also want the path name.
>
> **[2:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=172)** Now I don't have the path name yet but if I go and change my Graph QL query, I can put in URI and that will give me the path name and then I can call it in up here.
>
> **[3:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=182)** So I'll again, say page dot and then this time, URI, and that should give us the path name.
>
> **[3:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=189)** Finally, we have a Boolean indicating whether this is an article or not.
>
> **[3:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=193)** Meaning, is this an index of articles or is this a singular item?
>
> **[3:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=197)** And since this is a singular item, I'll uncomment this so it becomes an article.
>
> **[3:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=202)** This is again for SEO purposes.
>
> **[3:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=204)** Now I can save page dot JS.
>
> **[3:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=207)** If I open my console, you'll see all the pages are now regenerated.
>
> **[3:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=212)** And if I jump back to my browser, we now have the header, the margins on the right and left, and at the very bottom, the footer.
>
> **[3:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=220)** So now all the stylistic components have been added in thanks to the layout component.
>
> **[3:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=225)** That's cool.
>
> **[3:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=226)** But what if I want to apply some custom CSS just to this page template?
>
> **[3:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=231)** Well, in Gatsby and in React, there's several approaches to this.
>
> **[3:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=234)** The one I like the most is CSS modules because it allows me to write standard CSS documents and then append them to individual templates.
>
> **[4:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=242)** And that's what we'll do here.
>
> **[4:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=243)** We already have an example of CSS modules in the index page.
>
> **[4:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=247)** You can see it right here.
>
> **[4:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=248)** It says import asterisk as styles from and then a CSS module.
>
> **[4:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=254)** So I'll copy that line and paste it in and then change the call here.
>
> **[4:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=262)** So import all the styles as the name styles from a file.
>
> **[4:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=267)** So in this case, I'll call it page dot module dot CSS.
>
> **[4:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=271)** Then in the templates folder, I'll make a new file.
>
> **[4:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=275)** Call it page dot module dot CSS.
>
> **[4:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=279)** And in page dot module dot CSS, I'll just create a simple rule.
>
> **[4:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=282)** I'll say, article.
>
> **[4:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=284)** Notice, this is a class, and sets the background color to pink.
>
> **[4:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=290)** That's just so we can see what's happening.
>
> **[4:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=292)** All right, now I can show you how this works.
>
> **[4:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=295)** So what we're doing is saying import anything inside the page module's file as styles and then we can pull each individual class out and use them in our markup.
>
> **[5:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=306)** So to use the markup, I say class name, this will transform into just class, is just in JavaScript, the word class is a keyword that's protected.
>
> **[5:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=316)** So we need to say class name anytime we refer to class in JavaScript.
>
> **[5:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=320)** It's just a JS idiosyncrasy.
>
> **[5:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=322)** Then curly bracket styles.
>
> **[5:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=324)** That's the container that holds all of our styles.
>
> **[5:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=327)** And then article, that's the style I just created.
>
> **[5:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=330)** Save that, jump back in the browser, and look, now it has a pink background.
>
> **[5:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-page-template?u=76281980&t=334)** Now of course, this is not the look I'm aiming for but it shows you in a very simple and practical way how we can use CSS modules to inject custom CSS into individual templates.

> [!info]- Semantic Content
>
> **Env Vars:** css (10), seo (4), html (3), uri (2)
> **Code Keywords:** module (5), let (2), case, (2), class, (2), static (1)
> **Exercise Files:** template (5)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)

#### Work with featured images
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=0)** - [Instructor] One of the many features WordPress offers for both pages and posts is the ability to add a featured image.
>
> **[0:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=6)** That's an image that's appended to the post that can be pulled in out of context and displayed wherever you want.
>
> **[0:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=12)** That's exactly what I've done here for this page.
>
> **[0:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=15)** It's called Page Markup And Formatting, and I've added a giant featured image at the top.
>
> **[0:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=19)** Now I want it to somehow transport this featured image over into my Gatsby page.
>
> **[0:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=24)** Right now, the Gatsby page has no featured image.
>
> **[0:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=27)** I somehow need to grab that image and place it into this template.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=31)** And I have to do it conditionally because I don't know if each page will have a featured image or not and I don't want to populate the page with empty markup.
>
> **[0:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=39)** This is an opportunity to look at one of the really interesting things about how Gatsby handles WordPress content.
>
> **[0:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=46)** You see, when you run Gatsby Develop, everything, including all media assets like images, is imported and cached in the Gatsby project.
>
> **[0:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=55)** That means we can treat any image or other media asset from WordPress as a proper Gatsby media asset.
>
> **[1:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=61)** We don't have to reference them and pull them in from WordPress.
>
> **[1:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=64)** They're actually sitting inside our Gatsby project and we can use Gatsby's image handling to process those images.
>
> **[1:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=71)** For that, we use this plugin here, gatsby-plugin-image.
>
> **[1:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=75)** This plugin was installed when we originally set up WordPress and Gatsby.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=79)** You may remember in the wizard it asked, "Do you want to set up responsive images?"
>
> **[1:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=83)** If you say yes to that, you get gatsby-plugin-image and all its associated plugins installed automatically.
>
> **[1:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=90)** You can see them if you go to package.json.
>
> **[1:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=93)** Here we have gatsby-plugin-image.
>
> **[1:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=94)** We also have gatsby-plugin-sharp and we have gatsby-transformer-sharp.
>
> **[1:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=98)** And these are the three plugins that will allow us to treat the images as native Gatsby objects.
>
> **[1:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=103)** Okay. So how do we do this?
>
> **[1:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=105)** In gatsby-plugin-image, there are actually two different types of images.
>
> **[1:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=108)** We have static images and dynamic images.
>
> **[1:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=111)** Dynamic images are used any time we don't know anything about the image when it's coming in, which is exactly what we have here.
>
> **[1:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=118)** We know there may be images.
>
> **[2:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=120)** We don't know how they're going to be presented and we don't have any control over them.
>
> **[2:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=124)** So let's look at the dynamic images example.
>
> **[2:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=126)** We need to do the two standard things.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=128)** First, send a query through GraphQL and then display the image in a component.
>
> **[2:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=132)** So here is an example of how you would do that.
>
> **[2:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=135)** You send a query to the blog post and then you say for the avatar, grab the childImageSharp and then the gatsbyImageData from the image and then you can set up properties about how you want that image displayed.
>
> **[2:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=146)** For example, the width, how you want the placeholder to be displayed, and also the format.
>
> **[2:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=152)** All right, so let's do just that.
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=154)** The first thing I need to do is find my page.
>
> **[2:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=157)** And for that, I'll go and say allWpPage and then just query all the pages for database ID and title.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=163)** That will give list of everything.
>
> **[2:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=165)** And I should be able to find my page sitting down here.
>
> **[2:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=168)** Page markup and formatting and ID is 1134.
>
> **[2:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=171)** So I'll copy 1134, then I'll close AllWpPage and instead look for just wpPage.
>
> **[2:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=179)** In wpPage, I am going to filter for the database ID.
>
> **[3:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=184)** It would be equal to what I just picked up, 1134.
>
> **[3:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=187)** Then for the page, I need to find the featured image.
>
> **[3:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=191)** If I scroll down and look at the nodes here, there is a node called featuredImage and inside we have the full node.
>
> **[3:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=196)** That's because in WordPress, each image that's uploaded to WordPress becomes its own post with all the information you would get from a post.
>
> **[3:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=203)** So among other things, we have the alt text for the image, which I need, and then we have the actual file.
>
> **[3:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=209)** So that's sitting here in the localFile.
>
> **[3:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=211)** Now, you can think back to what we saw in the code example.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=214)** I want childImageSharp, I want gatsbyImageData.
>
> **[3:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=218)** And here you have all the configuration options you may want to use.
>
> **[3:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=222)** So I can set the width.
>
> **[3:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=224)** I'll set that to 1360.
>
> **[3:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=226)** I can set the placeholder.
>
> **[3:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=228)** So we'll set that to blurred.
>
> **[3:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=231)** I can also set the height, if I want to, the JPEG options.
>
> **[3:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=234)** In this case, I just want to set formats to auto.
>
> **[3:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=237)** And that gives me the complete query for the featured image.
>
> **[4:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=240)** So I'll copy that query out and go to my query here in the page template and just paste it in.
>
> **[4:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=248)** Then I'm actually going to make one small change here.
>
> **[4:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=250)** I'll change the format to an array and say AUTO comma WEBP comma AVIF, so I'm using all the modern formats if the browser supports them.
>
> **[4:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=262)** All right, now that we have the query, we have the data we need, then we need to figure out how to display it.
>
> **[4:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=267)** And that's also described here.
>
> **[4:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=269)** To display the image, we import some content from gatsby-plugin-image.
>
> **[4:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=273)** In particular, we import GatsbyImage, this is a component.
>
> **[4:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=276)** And also the method getImage, which pulls image information out of the return from GraphQL.
>
> **[4:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=284)** So I'll copy that, paste it in at the very top here.
>
> **[4:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=289)** Then we need to actually use the component and get image.
>
> **[4:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=292)** Here's a code example of that.
>
> **[4:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=295)** So I'll place that where I want to image to appear inside the article.
>
> **[4:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=298)** Now we have the GatsbyImage component calling for an image and then some alt text.
>
> **[5:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=303)** This is where we use that other thing, the getImage method.
>
> **[5:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=307)** So we apply the getImage method to the image data.
>
> **[5:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=311)** Looks like this.
>
> **[5:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=312)** So I'll say getImage, parentheses.
>
> **[5:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=316)** And then inside the parentheses, I will now say page, that's our current page data, featuredImage, node, and localFile.
>
> **[5:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=329)** That's the item that contains the image information and getImage will now pull out the actual image and display it in the component.
>
> **[5:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=337)** Then I also need to set up my alt text, so I'll just copy this string here.
>
> **[5:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=341)** Say page.featuredImage.node and altText, so that we get the alt text and save it so that it's easier to read.
>
> **[5:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=349)** And then, because I know that this is going to display weird, I'm also going to apply a figure to wrap around it and set the class name for the figure to styles and then featimg.
>
> **[6:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=365)** Close my figure and paste it in here.
>
> **[6:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=370)** Then finally, I need to go to page.module and set up my styles so it'll look like this.
>
> **[6:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=379)** And here I want to set the margin-block-start to 3rem,
>
> **[6:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=389)** margin-inline-end to -2rem, and margin-inline-start to -2rem, just to line things up because it's now an article.
>
> **[6:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=403)** All right.
>
> **[6:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=404)** If we go back to the browser now and look at the page, you'll see here we have the featured image and it's working properly.
>
> **[6:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=410)** However, this markup assumes the page always has a featured image and that's not always the case.
>
> **[6:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=415)** So we need to add a conditional statement around this to make sure it only displays if there is a featured image, otherwise we'll get errors.
>
> **[7:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=422)** So I'll set up a conditional statement here and say page.featuredImage and and, and then parentheses.
>
> **[7:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=432)** What I'm saying here is if page.featuredImage is true, meaning we have a featured image, then do whatever is inside the parentheses.
>
> **[7:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=438)** And what's inside the parentheses is this figure.
>
> **[7:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=441)** So we'll paste in the figure.
>
> **[7:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/work-with-featured-images?u=76281980&t=443)** Now we have a conditional statement that will display a figure with a featured image inside when there is a featured image and nothing when there's no featured image.

> [!info]- Semantic Content
>
> **Code Identifiers:** featuredimage (5), getimage (5), childimagesharp (2), gatsbyimagedata (2), wppage (2)
> **CLI Commands:** node (4), find (3), make (2)
> **Code Keywords:** let (2), this. (2), static (1), case, (1), finally, (1)
> **Definitions:** is a  (4), is an  (2)
> **Prerequisites:** set up (6)
> **Env Vars:** jpeg (1), auto (1), webp (1), avif (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Exercise Files:** template (2)

#### Challenge: Add metadata to the page template
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-add-metadata-to-the-page-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-add-metadata-to-the-page-template?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-add-metadata-to-the-page-template?u=76281980&t=8)** - [Instructor] Time for your first challenge.
>
> **[0:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-add-metadata-to-the-page-template?u=76281980&t=9)** In this challenge, I want you to add metadata to the page template.
>
> **[0:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-add-metadata-to-the-page-template?u=76281980&t=13)** Starting with the exercise files for this movie, I want you to extend the GraphQL query to include the date and the author name.
>
> **[0:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-add-metadata-to-the-page-template?u=76281980&t=19)** And then I want you to display that date and author name below the title in the template.
>
> **[0:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-add-metadata-to-the-page-template?u=76281980&t=24)** This challenge should take you no more than 10 minutes.
>
> **[0:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-add-metadata-to-the-page-template?u=76281980&t=26)** Once the 10 minutes are up, or once you've finished the challenge, go to the next movie and see how I solve the same challenge.

> [!info]- Semantic Content
>
> **Exercise Files:** template (2), exercise files (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Add metadata to the page template
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=0)** - [Narrator] Welcome back.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=8)** Let me show you how I solve this challenge.
>
> **[0:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=10)** My goal is to display the page author and publishing date down here, directly below the page title.
>
> **[0:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=17)** Now, anytime I'm working with data, I always start in GraphiQL.
>
> **[0:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=22)** That way I can dig through the GraphQL tree and find the information I'm looking for first, so I know I have a solid query to use.
>
> **[0:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=30)** In this case, I'm looking for two pieces of data, and the first one is the author.
>
> **[0:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=34)** So if I go into the page, there's the single page.
>
> **[0:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=38)** We're just filtering for the current page we're working with.
>
> **[0:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=40)** So wpPage, and then go look for the author node.
>
> **[0:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=44)** You'll see, inside here, I have a bunch of information about the author.
>
> **[0:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=48)** So what I want in this case is just the name of the author.
>
> **[0:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=51)** So, I'll say author, node, name.
>
> **[0:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=54)** That gives me the name of the author.
>
> **[0:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=56)** Then I also need the publishing date.
>
> **[0:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=58)** So here, there's an option called dates.
>
> **[1:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=61)** You'll notice there's actually two, there's date and then there's date GMT.
>
> **[1:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=65)** So if you want the date justified for Greenwich Mean Time or Global Medium Time, then that's an option but I actually want a date, so I'll just say date.
>
> **[1:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=73)** Now I have a query, so I'll test it.
>
> **[1:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=75)** And here you see, we have an author name, Theme Buster, and we have a date.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=79)** Now this is not a human readable date right now.
>
> **[1:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=81)** Well, it is but it's not what I want to display but I can use JavaScript to convert this into a nice looking date.
>
> **[1:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=88)** So the query is correct, and I'll copy out the new pieces of my query here.
>
> **[1:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=93)** Then I'll go into my page template and down here we already have title, content, uri and featured image.
>
> **[1:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=99)** So I'll just paste these in before there.
>
> **[1:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=101)** So I'll say author and date.
>
> **[1:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=103)** All right, now I need to use this data somewhere.
>
> **[1:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=106)** So first I need to figure out where I want to place it.
>
> **[1:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=109)** So here we have the page title and that means I can place it directly after the page title.
>
> **[1:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=114)** Then inside here, I'll start by setting up some just plain text.
>
> **[1:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=119)** I'll say by and then the author name.
>
> **[2:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=122)** So that would be page.author.node.name.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=128)** Right?
>
> **[2:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=130)** Page, author, node, name.
>
> **[2:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=133)** Okay, that should be easy enough.
>
> **[2:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=135)** And then dot, so punctuation mark, and then published on.
>
> **[2:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=141)** Now I want a space here, but because I'm going to break the line and then write some JavaScript, there's a chance that JavaScript will truncate it.
>
> **[2:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=148)** So I'll actually put in a space like this.
>
> **[2:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=151)** That way I ensure there is going to be a space between published on and the date.
>
> **[2:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=156)** And the reason I'm doing that, is I now need to use JavaScript to convert that very long weird date string into a human readable date.
>
> **[2:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=164)** And I'll do that by using a new date object.
>
> **[2:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=167)** So I'll say new, date, then I'll grab our date, so that would be page.date.
>
> **[2:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=173)** That's the date object we got from GraphQL.
>
> **[2:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=176)** Then I'll use a method on the date object called toLocaleDateString.
>
> **[3:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=182)** And here I need to define my locale.
>
> **[3:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=184)** So that would be en-US 'cause I'm in Canada, well, America, something like that.
>
> **[3:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=191)** And then inside I can pass properties and options toLocaleDateString.
>
> **[3:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=195)** So I'll say month:long.
>
> **[3:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=200)** So that is the whole month name, then day:numeric and finally year:numeric.
>
> **[3:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=220)** All right.
>
> **[3:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=221)** Now I'll save page.js, jump back to my browser and here directly under the title, it now says by Theme Buster published on March 15th, 2013.
>
> **[3:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-add-metadata-to-the-page-template?u=76281980&t=232)** That means everything is working properly and I've completed my challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), find (1)
> **Code Keywords:** let (1), case, (1), this. (1), new, (1), pass (1)
> **Code Identifiers:** tolocaledatestring (2), wppage (1)
> **File Paths:** page.js (1)
> **Env Vars:** gmt (1)
> **Exercise Files:** template (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Custom Menus

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Query custom menus in GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=0)** - [Instructor] Now that our Gatsby site has pages, we need to give the user some way of getting to those pages because right now, unless they either know the URL to the page or they go to the 404 page and get a list of everything on the site, there's really no way to navigate to anything on our site.
>
> **[0:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=15)** The easiest way of creating links to anything within a site is to create a navigation menu.
>
> **[0:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=19)** And in WordPress, we have have a really powerful tool for creating as many navigation menus as we like.
>
> **[0:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=25)** You find it in the back end of WordPress under appearance and menus.
>
> **[0:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=28)** From here, you can create as many menus as you like.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=31)** And under each menu, you can set up as many menu items as you like.
>
> **[0:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=34)** They can be in hierarchical order.
>
> **[0:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=36)** You can reorganize them by just dragging and dropping the menu items and you can link to anything, either inside WordPress, so posts, pages, categories, tags, et cetera or outside of WordPress using custom links.
>
> **[0:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=48)** If you have a link, you can add a link to a custom menu inside WordPress.
>
> **[0:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=52)** Now in WordPress, each of these menus is assigned to a menu location.
>
> **[0:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=57)** So on the front end, you would typically have maybe one or two menu locations in the current active theme I have.
>
> **[1:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=62)** We have a primary menu location that goes at the top and we also have a secondary menu location that goes somewhere else in the site.
>
> **[1:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=68)** This depends on the current theme you're using and this will become important in a few minutes.
>
> **[1:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=73)** But first the key question, can we use these custom menus from WordPress in our Gatsby site?
>
> **[1:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=78)** The answer is yes.
>
> **[1:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=80)** And like with everything else in Gatsby, we start going to GraphiQL to see if we can query the information.
>
> **[1:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=85)** In GraphiQL, if we look at the Explorer, you'll see we have two entries here: allWpMenu and allWpMenuItem.
>
> **[1:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=92)** This first one, allWpMenu, points at the menu containers.
>
> **[1:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=96)** So if you create four different menus inside WordPress, you can query those four different menus but that only gives you the menu itself, not what goes inside.
>
> **[1:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=105)** So in most cases, we will be looking at allWpMenu item cause we're looking for the actual menu items, the links that we are going to display.
>
> **[1:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=112)** So let's see what happens if we query allWpMenu item.
>
> **[1:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=116)** I'll open it up, go to nodes and then get some information.
>
> **[1:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=119)** So let's get the let's see database ID for each menu item, maybe the parent's database ID if they are in some sort of hierarchical order and also the URL and the label.
>
> **[2:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=131)** The label is what you see as the menu text.
>
> **[2:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=134)** So let's run this query and as a result we get nothing.
>
> **[2:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=139)** Okay, this is an idiosyncrasy in WordPress.
>
> **[2:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=143)** You see, we have a set of menus defined.
>
> **[2:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=145)** In fact, in the theme unit test data, there's a bunch of different menus defined.
>
> **[2:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=149)** But because none of these menus are assigned to the front end, meaning assigned to a theme location, they're all private to WordPress.
>
> **[2:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=158)** You can see them if you log into the backend of WordPress but they do not exist outside of the backend.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=163)** To make any of these menus public, we have to assign them to a theme location.
>
> **[2:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=168)** That can be done either by going into the menu itself, going down to the bottom to display location and select a location here or you can go to the managed locations option and then assign a menu for each location.
>
> **[3:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=180)** And this is important because if in your Gatsby site you want to have let's say three menus, you then need to find a theme that has three menu locations so that you can actually display them on the front end of WordPress and they become available to Gatsby.
>
> **[3:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=194)** In our example, I'll set all pages as a primary menu and the social menu as the secondary menus just so that we get a bunch of menu items.
>
> **[3:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=202)** Now I'll save this change in WordPress, go back to GraphiQL and you would expect the menu items to appear now that I've run GraphiQL again, right?
>
> **[3:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=212)** But when I do, again nothing happens.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=214)** So what's happening now?
>
> **[3:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=216)** This has to do with how Gatsby talks to WordPress and what WordPress tells Gatsby about what's going on.
>
> **[3:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=222)** In this particular circumstance, the change I made in WordPress is not being monitored by Gatsby.
>
> **[3:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=227)** So even though I changed the status of these menus, Gatsby doesn't know so it can't update anything.
>
> **[3:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=233)** In fact, to get this change to be validated inside Gatsby, I need to first stop Gatsby develop then run Gatsby clean to clear out the entire cache and delete everything Gatsby knows about WordPress and then run Gatsby develop again.
>
> **[4:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=251)** Now, when Gatsby goes and re-queries all the data from WordPress, it'll discover, oh there's a change about the menus.
>
> **[4:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=258)** I better map out all the menu items.
>
> **[4:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=260)** You can actually see it here.
>
> **[4:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=261)** Fetched 23 menu items.
>
> **[4:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=263)** And from there, we can now query the menu items.
>
> **[4:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=266)** This is actually something you need to do every time you make a change to the display of the menus.
>
> **[4:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=272)** So now you can go and remap the menus in WordPress and that will take effect.
>
> **[4:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=275)** But if you want to say make a menu private again or make another menu public, you have to go back, stop Gatsby develop, run Gatsby clean and then rerun this entire process.
>
> **[4:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=287)** All right, now that Gatsby knows about the menu items, we can run the query again and we get a list of menu items.
>
> **[4:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=294)** Cool right?
>
> **[4:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=295)** Okay, the problem now is we get all the menu items regardless of which menu they belong to and you'll notice that they're in one stacked order.
>
> **[5:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=303)** So there's no nesting going on here.
>
> **[5:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=305)** They're just all listed together.
>
> **[5:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=307)** We'll talk about the nesting part later on in the course.
>
> **[5:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=310)** For now, we'll talk about how to get the menu items from just one menu.
>
> **[5:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=314)** What we need to do here is filter the allWpMenuItem based on which menu each it sits in.
>
> **[5:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=321)** And we can do that using the filter option in GraphiQL Under allWpMenuItem, we go to filter.
>
> **[5:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=328)** Then we choose what we want to filter for.
>
> **[5:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=330)** In this case, we want to filter based on the menu, that is the menu container.
>
> **[5:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=335)** Then under here, we want to grab the node, so each of the menus and say we want to filter based on the slug.
>
> **[5:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=340)** The slug is the name of the menu itself.
>
> **[5:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=344)** So what is the slug of the menu?
>
> **[5:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=345)** In WordPress, the slug of the menu is the name of the menu itself with just dashes where the spaces are.
>
> **[5:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=352)** So if for example I want to filter for social menu, meaning social-menu, the slug should be equal to social-menu.
>
> **[6:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=361)** Run this query again and over here, I now only get the menu items from the social-menu.
>
> **[6:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-menus-in-graphql?u=76281980&t=367)** That means I can now query all the menu items that are public from WordPress and I can filter based on which menu they are sitting under.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), public (3), private (2), delete (1), for. (1)
> **CLI Commands:** make (4), find (2), node (1)
> **Code Identifiers:** allwpmenu (4), allwpmenuitem (3)
> **UI Navigation:** go to (4), navigate to (1)
> **Env Vars:** url (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### How WordPress manages menu items
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=0)** - [Narrator] Before we start working with these WordPress menus in Gatsby, Let me briefly explain how WordPress itself handles the menus.
>
> **[0:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=7)** When we look at a menu like this one called All Pages, you can see there are hierarchical relationships between the different menu items.
>
> **[0:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=14)** We have the All The Tests menu item, and then underneath we have Page Alignment, and these other items.
>
> **[0:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=20)** And you can manage this by simply grabbing an item and pulling it to the side.
>
> **[0:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=23)** You can see here now I made three levels and you can pull them in and out, and then you can change the order.
>
> **[0:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=29)** What's actually happening when I do this, in the database is there's an ID attached to each of the menu items, and then there's a possible parent ID attached to each menu item.
>
> **[0:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=40)** So when I create these hierarchical relationships what I'm really doing is just adding a number to the parent ID field for each menu item.
>
> **[0:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=48)** This is important when we start querying the menus from Gatsby through GraphQL because when we send a query to say, All Pages, what we get is a flat structure.
>
> **[0:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=59)** All the menu items are just listed, one after the other in one response, we don't get nested hierarchies here.
>
> **[1:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=66)** There is no array, within array, within array.
>
> **[1:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=68)** It's just one big array with all menu items.
>
> **[1:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=71)** So if we want to preserve the hierarchy, we need to go find out which menu item is a parent of which other menu item.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=79)** And we can do that using these two fields here.
>
> **[1:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=82)** Database ID, which is the ID for the current menu item, and parent database ID, which is the ID for the parent item.
>
> **[1:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=89)** if there is hierarchical structure.
>
> **[1:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=91)** What you see on the list I currently have here is these items that have parent database ID zero are first level on the menu.
>
> **[1:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=99)** So they are the roots level of the menu.
>
> **[1:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=102)** But if we scroll down, here we have one item, with the ID 1770 it has parents database ID zero, and then below we have a series of items where parent database ID is set to 1770.
>
> **[1:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=114)** Meaning these items are the children of this item up here.
>
> **[1:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=118)** However, like I said, in the structure we're getting from WordPress, they're all sitting in one array.
>
> **[2:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=125)** It's a flat array.
>
> **[2:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=126)** There is no nesting going on.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=128)** So if we want to create the nesting, we have to run a function to convert this data into nested data.
>
> **[2:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/how-wordpress-manages-menu-items?u=76281980&t=134)** We will cover this later on in the course, but it's important to know upfront, because it explains how we query data, and also showcases how we need to work with the data we get from WordPress, to alter it into what we need for our purposes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), function (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)

#### Create a flat menu in Gatsby
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=0)** - [Instructor] Let's start by building a flat, single-level menu that will go across the top here in the layout.
>
> **[0:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=6)** That menu will be based off this menu here inside WordPress that actually is a hierarchical menu with subitems, so I somehow need to filter out those subitems for now and then maybe add them in later on.
>
> **[0:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=17)** Also note, I've added one custom link to my menu.
>
> **[0:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=19)** It just points to LinkedIn Learning.
>
> **[0:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=21)** This is to show you how we can co-mingle links to the internal site with links from external sources into one single menu.
>
> **[0:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=29)** The first step is to figure out how to filter out these menu items so I only get the main menu items the first level of the menu.
>
> **[0:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=36)** You see right now when I'm sending this query here, I'm getting all the menu items, including the child items.
>
> **[0:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=42)** The key here is to filter not only based on the name of the menu itself but also based on the parentDatabaseId of the menu items.
>
> **[0:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=50)** So here, I'll go in and say I want to filter based on parentDatabaseId, and I want to set that equal to 0.
>
> **[1:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=60)** It's a little hard to see over here, but what we can see is we're filtering based on menu, node, slug, equals all pages, and then also parentDatabaseId equals 0.
>
> **[1:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=70)** If I run this query now, you'll see that this huge list of menu items is reduced to a list of just six or seven menu items which is much better.
>
> **[1:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=80)** This is what I want to work with.
>
> **[1:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=81)** All right, so now that I have a query that works that's giving me the results I want, I need to carry that query over into some component inside my Gatsby site.
>
> **[1:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=91)** Just to save some time, I already built out this component for you, and you can find it in the Exercise Files.
>
> **[1:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=96)** It sits here under the components folder.
>
> **[1:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=98)** It's called MainNav.
>
> **[1:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=99)** There's also a MainNav module for CSS for this component with some basic styling.
>
> **[1:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=104)** Let's look at the MainNav component.
>
> **[1:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=106)** Off the top here, in the component itself, you'll see I'm using a static query.
>
> **[1:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=111)** This static query is different from the regular query we were using when we were building out the pages because this is a component, and components can't use page queries.
>
> **[1:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=119)** You'll also notice, because we're using a static query, the query is sitting inside the component, whereas when we were doing a page query, it was sitting on the outside of the component.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=128)** This is a Gatsby-specific thing.
>
> **[2:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=130)** If you want to learn more about it, just go check out the Learning Gatsby course, and it's all explained.
>
> **[2:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=135)** The query in question is the same query we had in graphical.
>
> **[2:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=138)** We are filtering the result based on the all-pages menu.
>
> **[2:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=142)** Then we are also filtering out only the menu items that have the parentDatabaseId set to 0.
>
> **[2:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=147)** And I'm using the sort here just to sort the order based on the field order in ascending order.
>
> **[2:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=153)** Then for each of the menu items, I'm pulling out two pieces of data: the label which is the name, the text that's displayed in the menu, and the path which is the URL.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=163)** Now, notice I'm remapping the label to the word title here.
>
> **[2:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=166)** That's just so that it's easier to understand in the code because I find that the term label sounds like a label appended to something, but it's actually the title that is in the menu item.
>
> **[2:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=176)** So this is just a remapping done in GraphQL.
>
> **[2:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=178)** It doesn't actually change the data.
>
> **[3:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=180)** It just changes the property name of the data.
>
> **[3:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=183)** Then once we have the results, we place it in a constant.
>
> **[3:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=186)** We grab wpMenu item and then allWpMenuItems and nodes.
>
> **[3:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=190)** This gives us the array of all the menu items.
>
> **[3:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=193)** Then we output in the return a nav with a className mainnav.
>
> **[3:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=198)** Inside the nav, there's a ul.
>
> **[3:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=199)** And then we used a map function to map through all the menu items, grabbing each menu item, giving it an index number, and then returning an li with the index as the key.
>
> **[3:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=209)** This is a requirement from React so that we can target individual items later.
>
> **[3:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=213)** And then we use this component here, UniversalLink, to grab the menuItem.path, that is the link, and also the menuItem.title, the text that goes inside the menu item.
>
> **[3:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=224)** And finally, there's this piece here: activeClassName equals current-page.
>
> **[3:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=230)** This is a really fancy function inside the Gatsby Link component that automatically applies a className to the link if we are on the page the link is pointing at.
>
> **[4:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=240)** All you need to do is add this in: activeClassName, current-page.
>
> **[4:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=244)** And when you are on the page that a menu item is pointing to, you'll get a class called current-page appended to that link which is really fancy and really easy to work with.
>
> **[4:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=254)** The question you probably have right now is what is UniversalLink?
>
> **[4:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=258)** That's a new component I've added to the utilities folder.
>
> **[4:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=260)** It's found here.
>
> **[4:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=261)** This component is a standard component that's often used if we have links and we don't know if they are internal links to the Gatsby site or external links to some other source.
>
> **[4:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=270)** So the component I just borrowed from someone else's work, it basically just goes in and says if the link is internal to the Gatsby site, then I'll put a standard Link component with all the information.
>
> **[4:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=281)** If, on the other hand, if it's pointing somewhere else on the web, then I'll put a standard a with an href that points to the same link.
>
> **[4:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=289)** This allows us to manage both internal links and external links.
>
> **[4:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=293)** Okay, so this is the MainNav component that does all the work.
>
> **[4:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=297)** Now we need to see how we can display the MainNav component on the front end.
>
> **[5:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=301)** That would be done somewhere in the site.
>
> **[5:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=303)** So I'm just going to pull it, place it in the header.
>
> **[5:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=305)** Here, all I need to do is import the MainNav from MainNav and then place it somewhere within my layout.
>
> **[5:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=314)** So I'll go down to the bottom of the return here and place it here.
>
> **[5:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=318)** Now, the MainNav component is self-contained.
>
> **[5:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=320)** This does all the work so I don't need to do any settings or change anything.
>
> **[5:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=324)** I'll just save this file, jump to my browser, and I might have to reload the browser page, and here is the menu, flat-level menu based on the structure that's in WordPress.
>
> **[5:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=334)** And if I click on any of these links, I'm automatically taken to the internal page for that link.
>
> **[5:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=339)** And if I click on LinkedIn Learning, I'm taken outside to LinkedIn Learning.
>
> **[5:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=343)** So now everything is working properly.
>
> **[5:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-flat-menu-in-gatsby?u=76281980&t=345)** And this menu here is now controlled from WordPress, meaning if I go in and change the layout here, I may have to go and restart gatsby develop, but once I do, those changes will also take effect inside my Gatsby site.

> [!info]- Semantic Content
>
> **Code Identifiers:** parentdatabaseid (4), classname (2), menuitem (2), activeclassname (2), wpmenu (1)
> **Code Keywords:** static (3), let (2), function (2), module (1), finally, (1)
> **Definitions:** is a  (6)
> **UI Navigation:** in the menu (2), click on (2)
> **CLI Commands:** find (2), node (1)
> **Env Vars:** css (1), url (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Create a nested menu in Gatsby
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=0)** - [Instructor] Single-level flat menus are easy to work with, but they're not always what we need.
>
> **[0:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=5)** In many cases, we need a hierarchical menu either as a dropdown or just a straight up hierarchical list so that we can show the relationships between different menu items.
>
> **[0:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=13)** Now, WordPress makes it easy to create hierarchical menus.
>
> **[0:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=16)** As you've seen inside the menu builder, you can simply add a menu item and then pull it aside to make it a hierarchical menu item that is a child of another menu item.
>
> **[0:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=26)** And you can do this in as many levels as you want.
>
> **[0:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=28)** So in this example, we have three separate levels.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=31)** Now we need to somehow translate this hierarchical information into Gatsby.
>
> **[0:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=36)** That's challenging, because as you've seen, when you query the menu items in Gatsby through GraphQL, all you get is a single-level array.
>
> **[0:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=45)** There is no hierarchies here.
>
> **[0:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=47)** Instead, we have these parentDatabaseId entries on some of the items that point to a previous item.
>
> **[0:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=53)** And that's what's telling us there's a hierarchy going on here.
>
> **[0:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=56)** So to output the content in Gatsby, we need to somehow parse this data and reformat this flat array into a multidimensional array, a hierarchical array, so that we can see the relationships.
>
> **[1:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=68)** The good news is this is a known problem with WordPress and working in Gatsby, so there is a solution.
>
> **[1:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=75)** The people who built WPGraphQL created a function that takes a flat array and turns it into a hierarchical array based on this information.
>
> **[1:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=83)** The function takes three values: the idKey that you can pass in as any key, the parentKey which you can pass in as any other key and then the childrenKey which is the name that you apply to the new arrays that are created.
>
> **[1:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=96)** In the exercise files for this movie, I've added that function in as a new component in our project, and it sits under the utils folder as the component FlatListToHierarchical.
>
> **[1:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=106)** This is pretty much exactly the same quote example.
>
> **[1:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=109)** I've made some very, very minute changes just to make it work properly.
>
> **[1:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=112)** And as you can see, it's grabbing an idKey, a parentKey and a childrenKey, and then saying for each item, is your parentId zero?
>
> **[2:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=121)** If so, do nothing.
>
> **[2:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=122)** If it has any other value, then creates this hierarchical array and sort the items under.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=128)** This is just some really fancy JavaScript that basically turns a flat array into hierarchical array, just like the name suggests.
>
> **[2:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=135)** Now that we have the component, we can use it in MainNav.
>
> **[2:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=138)** So let me show you what's going on here.
>
> **[2:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=139)** Again, I've updated the example a little bit to add in the new functionality, so we don't have to write out all the code by hand.
>
> **[2:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=145)** The first thing I've changed is up here in the query.
>
> **[2:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=148)** I've taken out the filter that said only give me the first level, 'cause we now want the whole level.
>
> **[2:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=153)** And I also added in the parentId in my query so that I not only have the current ID for the current item, but also its parentId.
>
> **[2:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=160)** Now you'll notice that I'm querying id and parentId, not databaseId and parentDatabaseId.
>
> **[2:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=167)** It doesn't matter.
>
> **[2:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=168)** You can do either or, just be consistent.
>
> **[2:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=169)** So either do id and parentId or databaseId and parentDatabaseId.
>
> **[2:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=175)** It'll work exactly the same way.
>
> **[2:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=177)** This produces our flat array.
>
> **[2:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=178)** And I'm outputting that down here in the console log just so we can see that there is a flat array.
>
> **[3:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=183)** Then I create a new constant called headerMenu.
>
> **[3:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=187)** This constant is filled with FlatListToHierarchical, my component and I'm passing in this flat array.
>
> **[3:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=195)** In addition, I'm also telling FlatListToHierarchical what I want to use as data here.
>
> **[3:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=199)** And I want to use the id as the idKey.
>
> **[3:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=202)** I want the child menus to be called children.
>
> **[3:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=206)** And I want the parentKey to be parentId.
>
> **[3:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=209)** So now the flat array goes into the component and comes back out again as a hierarchical array.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=214)** And I capture that here by console logging out the headerMenu constant.
>
> **[3:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=219)** This headerMenu constant is now our hierarchical array.
>
> **[3:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=222)** We can take a look at this in the browser in the console right now.
>
> **[3:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=225)** So I'll go into my post, Inspect, open a console.
>
> **[3:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=230)** And here, if I reload to just clean it up, you'll see we have two arrays.
>
> **[3:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=233)** We have the raw data.
>
> **[3:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=234)** This is the array with 19 items.
>
> **[3:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=237)** This is the flat array.
>
> **[3:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=238)** And then below, we have another one called headerMenu.
>
> **[4:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=241)** This one only has eight entries.
>
> **[4:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=243)** That's because the top level is just eight items.
>
> **[4:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=246)** And if we go into a sub item here, you'll see this one for example has children.
>
> **[4:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=250)** And the array here is five, so there are five children inside.
>
> **[4:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=253)** And if there were further sub menus, each of these items could have its own set of sub menus, also called children, et cetera, et cetera.
>
> **[4:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=260)** So now we have a hierarchical array to work with.
>
> **[4:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=263)** Then we need to somehow output that data up here in the menu.
>
> **[4:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=267)** And that's done using this new component called MenuLoop.
>
> **[4:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=269)** So what I've done here in the return is I've simplified our return by saying create the nav as before, then check, does headerMenu have items in it?
>
> **[4:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=279)** So is the headerMenu length more than zero?
>
> **[4:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=281)** If so, run MenuLoop on headerMenu.
>
> **[4:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=285)** MenuLoop is a component that sits all the way up here at the top.
>
> **[4:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=288)** And inside MenuLoop, we set up our unordered list.
>
> **[4:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=291)** And then we do what we did before, which is iterate through each the item to say, for each item, create a new list item.
>
> **[4:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=297)** Then for each list item, we give it a key.
>
> **[5:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=300)** And we also query to see, if the menuItem's children is longer than zero, then also add has-submenu, otherwise do nothing.
>
> **[5:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=308)** Then we set up the UniversalLink for the item, and we close our list item, and then we close our unordered list.
>
> **[5:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=315)** But what about the sub items?
>
> **[5:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=316)** Well, this is where that kicks in, and this is also why I've created a separate component for it.
>
> **[5:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=321)** We are going to make this component recursive so that it uses itself to generate new menu items.
>
> **[5:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=327)** Let me show you.
>
> **[5:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=328)** If we have new menu items, we want those new menu items to appear as a new unordered list inside the current list item, right?
>
> **[5:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=335)** That's how we get the valid HTML.
>
> **[5:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=338)** So what I'll do here is say, if we have menuItem.children.length is bigger than zero, meaning this current list item has children, then I want to recursively call MenuLoop again.
>
> **[5:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=358)** So I'll say MenuLoop, so that's the same component we are currently inside, and set menuItems equal to the current menuItem.children
>
> **[6:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=373)** and close MenuLoop.
>
> **[6:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=375)** So what happens now is, if there are children, we go back and start a new MenuLoop that outputs a new unordered list that maps through all the items within that new unordered list, outputs to content, does the same check, are there children here?
>
> **[6:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=389)** If so, boot up MenuLoop again.
>
> **[6:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=391)** And we get this nice recursive loop using this single component that will output our hierarchical lists for us.
>
> **[6:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=398)** Save this.
>
> **[6:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=399)** Check this in the browser.
>
> **[6:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=400)** And you'll now see we have a properly structured, multilevel HTML list.
>
> **[6:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=405)** Here we have all the top level items.
>
> **[6:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=407)** And if there are sub items, they are listed under the correct item.
>
> **[6:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=411)** That way we have our multidimensional menu, and everything is working properly.
>
> **[6:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=415)** Now, granted, it doesn't look great right now.
>
> **[6:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=417)** There's some CSS missing.
>
> **[6:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-nested-menu-in-gatsby?u=76281980&t=419)** But the overall functionality works, and that's the whole point.

> [!info]- Semantic Content
>
> **Code Identifiers:** headermenu (7), parentid (6), parentdatabaseid (3), idkey (3), parentkey (3)
> **Code Keywords:** function (3), pass (2), let (2), this. (1)
> **Definitions:** is a  (6)
> **CLI Commands:** make (3)
> **Env Vars:** html (2), css (1)
> **UI Navigation:** dropdown (1), in the menu (1)
> **Analogies:** just like (1), for example (1)
> **Prerequisites:** set up (2)

#### Challenge: Create a footer menu
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980&t=0)** (upbeat intro music)
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980&t=8)** - [Narrator] Time for another challenge.
>
> **[0:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980&t=9)** In this challenge, I want you to create a footer menu based on one of the menus in your WordPress site.
>
> **[0:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980&t=14)** To start off, take the exercise files for this movie and augment the header menu so it only displays the top-level menu items.
>
> **[0:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980&t=21)** You don't need the drop-downs, just the top-level.
>
> **[0:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980&t=23)** Next, create a footer menu component.
>
> **[0:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980&t=26)** And in that footer menu component, create a GraphQL query to display all the menu items for one of the menus in a hierarchical bullet list in the footer.
>
> **[0:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980&t=34)** Take 10 minutes to solve this challenge.
>
> **[0:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-footer-menu?u=76281980&t=36)** Once the 10 minutes are up, or you solve the challenge, go to the next movie and see how I solved it.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat intro music) (1)

#### Solution: Create a footer menu
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=7)** - [Instructor] Welcome back.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=8)** Let me show you how I solve this challenge.
>
> **[0:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=10)** Actually first, let me just clean up this header menu 'cause it takes up a lot of space right now and I'm not going to spend the time to add the CSS and JavaScript necessary to make a proper responsive, accessible dropdown menu in this course.
>
> **[0:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=23)** So I'm just going to reduce this down to a single level menu again.
>
> **[0:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=27)** The easiest way to do that is just to modify our GraphQL query.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=31)** That way, we retain all the code we wrote and we just choose whether or not we want to display the sub items or not.
>
> **[0:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=37)** You'll remember previously I added a filter for the parent database ID and set it equal to zero so I'll just add that back in here, parentDatabaseId: { eq: 0 }.
>
> **[0:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=56)** That way we only get the top level menu items and we're back to a flat structure menu.
>
> **[1:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=61)** All right, now for the challenge.
>
> **[1:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=63)** We want to add a navigation menu in the footer that displays all the links.
>
> **[1:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=68)** Anytime I try to create something new in any project, I try to be as lazy as possible because in many cases, if you've already built something, you can probably just copy that thing and make some small modifications to it to make it do what you want in the new instance and that's exactly what's going to happen here.
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=84)** So I already have MainNav and MainNav is fairly generic in how it works.
>
> **[1:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=91)** It's just outputting a nav with an unordered list inside and then some hierarchical output.
>
> **[1:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=97)** So I should be able to use pretty much the same code to output my footer menu as well.
>
> **[1:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=102)** Let's try that.
>
> **[1:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=103)** So I'll grab MainNav here and copy it and then just paste it back in again so I get a new file called MainNav copy.
>
> **[1:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=111)** Then I'll rename that one FooterNav because my naming convention is extremely literal.
>
> **[1:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=119)** Now that I have FooterNav.js, I'm going to close MainNav so I don't accidentally start working on it.
>
> **[2:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=125)** Here inside FooterNav, I need to make some naming changes.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=128)** So we have the name of the component, MainNav here, and if I hit shift + command + L or shift + control + L, I can then change any instance or any occurrence of that name in the entire file.
>
> **[2:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=139)** So I'll change it to FooterNav.
>
> **[2:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=142)** So now we have a new component called FooterNav.
>
> **[2:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=145)** In addition, for the FooterNav, I don't want to have a separate style sheet so I'm going to remove the reference to the style sheet here and also up at the top because you now see it's grayed out since we're not using it, I'll take that out.
>
> **[2:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=158)** And then finally, I'll take out this parent database reference because I actually want to see all the menu items.
>
> **[2:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=164)** That's all I'm going to do.
>
> **[2:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=165)** That is the totality of my new component.
>
> **[2:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=167)** In fact, after doing this, I'm standing here looking at it thinking I should probably have made a more generic menu component and then just pass in the queries I want to do.
>
> **[2:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=179)** But that's for later.
>
> **[3:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=181)** The whole point here is to show you once you do something once, you can probably just repeat the same thing over and over and over again, which is what I'm doing.
>
> **[3:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=187)** So we have the FooterNav component.
>
> **[3:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=189)** Now we need to use it somewhere and the obvious place to use this is in the footer.
>
> **[3:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=193)** So I'll go to the footer and import the component, import FooterNav from "./FooterNav".
>
> **[3:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=201)** And then we need to use it and here we have a footer and then a div with some information so we should probably use it right before the footer.
>
> **[3:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=209)** So we'll put in the FooterNav here.
>
> **[3:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=212)** Save Footer.js, jump back in the browser.
>
> **[3:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=215)** You may have to reload it and when you scroll to the bottom, look at that.
>
> **[3:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=219)** Here's the full hierarchical menu.
>
> **[3:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=222)** It looks kind of strange though.
>
> **[3:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=223)** It's center aligned.
>
> **[3:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=224)** That's not what I want.
>
> **[3:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=226)** So we need to add some CSS.
>
> **[3:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=228)** So we could of course, create a new style sheet for this but since all I want to do is left align the text, I'm going to perform a minor web standards crime here and just inject some inline CSS.
>
> **[4:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=241)** So I'll do that through JavaScript, style equals, two curly brackets and then say text align, colon left.
>
> **[4:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=255)** That adds the inline style to the menu itself.
>
> **[4:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=259)** And look at that.
>
> **[4:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=259)** We now have a left aligned menu.
>
> **[4:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=261)** Very cool.
>
> **[4:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=263)** Now just a caveat, if you saw this and thought, hey, but we have logical properties now.
>
> **[4:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=268)** Can't you use logical properties instead?
>
> **[4:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=271)** Technically you can.
>
> **[4:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=272)** Or you should be able to do it.
>
> **[4:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=274)** So if I put in inline start here, it should work, technically, but it doesn't work in reality because the parser that is running through all my content doesn't yet support inline start which is why I end up using left instead.
>
> **[4:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=291)** So that will change in the future but for now, it's not supported and it will be treated as incorrect code and not output.
>
> **[4:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=298)** So therefore, now we have it using old CSS.
>
> **[5:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=302)** That's it.
>
> **[5:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-footer-menu?u=76281980&t=302)** That's the solution to this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1), this, (1), pass (1)
> **CLI Commands:** make (4)
> **Env Vars:** css (4)
> **File Paths:** footernav.js (1), footer.js (1)
> **UI Navigation:** dropdown (1), go to (1)
> **Code Identifiers:** parentdatabaseid (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)


### 5. Working with Posts

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Query posts in GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=0)** - [Narrator] Posts are the main content type in WordPress.
>
> **[0:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=3)** Usually when you go to a WordPress site, you're looking at the post, or the post index from that WordPress site.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=8)** And when you use WordPress data in Gatsby there's a good chance you'll want to use posts and all of their features in your Gatsby site as well.
>
> **[0:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=16)** So if I go through a post here, let's say this one, Template: Sticky, I get the post title, I get the post content, there's navigation below here to the previous post, or the next post.
>
> **[0:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=25)** And I can also see which categories and tags are applied to this post.
>
> **[0:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=30)** All of this information is information I may want to use in my Gatsby site as well.
>
> **[0:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=35)** In this chapter and in the next chapter, we'll look at how to make all of this work.
>
> **[0:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=39)** As you made your way through this course, I hope you've started noticing a pattern in how the GraphQL data is set up for WordPress.
>
> **[0:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=46)** Every time we're looking for a new content type we always have the same structure.
>
> **[0:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=50)** So for example, we have All WP Page, and we have the singular WP Page.
>
> **[0:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=56)** We had all WP menu and all WP menu item, and then below we have WP menu and WP menu item.
>
> **[1:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=63)** And the same thing goes for all other content types, including posts.
>
> **[1:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=67)** So here we have all WP post and further down we have WP post, which gives us either the list of all available posts, or a singular post based on the ID.
>
> **[1:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=77)** So let's take a look at the post object we can get from GraphQL.
>
> **[1:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=81)** If I open all WP post and go down to nodes, I get all the information about each post, and I mean all the information.
>
> **[1:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=89)** From here, we not only get the database ID, the dates and the title, we also get the contents, the URI, the comments, the categories, the author information, the tags, and any other information associated with this post.
>
> **[1:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=103)** When I run a query, all nodes, I get a list of all available posts on the site.
>
> **[1:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=108)** And as you can see, there's quite a lot of posts here to choose from.
>
> **[1:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=111)** And I can now structure my data to pull out exactly the information I want, and only the information I want.
>
> **[1:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=116)** But on the WordPress site I showed you, it's very common in a WordPress site to be able to navigate to the previous or next post.
>
> **[2:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=123)** If you go through the list of information here you'll quickly notice there is no information about the previous or next post.
>
> **[2:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=130)** So how is that done?
>
> **[2:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=131)** The first thing you may think of is, "Well, you just grab the database ID for the current post and you either subtract, or add one, and then you should get the previous or next post."
>
> **[2:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=140)** But that's not always the case, because the database stores all information, posts, pages, menu items, images, anything else, so you don't really know what the previous or next database ID is going to be.
>
> **[2:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=151)** Instead, WordPress needs to tell you what is the previous or next post.
>
> **[2:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=156)** It doesn't do that in the nodes, but it does give you this information in GraphQL if you go to edges instead.
>
> **[2:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=162)** Take a look at this.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=163)** If I open edges, you'll see in addition to the node, which is the current post, we also have next and previous.
>
> **[2:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=170)** And if I open next and previous, you'll see inside here sits the full post object for the previous or next post, the exact same information, and all of the information for this post.
>
> **[3:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=183)** That means if you use the edges entry point you can not only display the information for the current post, but also provide information from the previous and next post, that could be either navigation, or it could be actual content like the featured image, the title synopsis, the full text, whatever you want.
>
> **[3:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=201)** This gives you the ability to create navigation between posts without having to go through a menu, or go through a category or something else.
>
> **[3:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=210)** And like I said, all the information is contained within this post object.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=214)** You can go in and find the author, and the link to the author archive.
>
> **[3:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=218)** You can go in and find the categories, every single category and all the information about each category you can go in and find the tags, the featured image, anything else you want, it's all stored here.
>
> **[3:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=230)** So moving forward, when we are working with indexes, we'll be working with edges, because this gives us access not only to the current post, but also to the next and previous posts.
>
> **[3:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=239)** But if we're working with individual posts, we'll still be working with WP posts.
>
> **[4:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=243)** In this chapter we'll look at how to auto-generate pages for each of the posts in your WordPress site, how to add categories and tags through these individual posts, how to create index templates for posts, so that you can get a list of all available posts and then navigate into individual posts.
>
> **[4:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=258)** And I'll give you a challenge on how to create post navigation for each individual post.
>
> **[4:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=264)** Then in the next chapter, we'll look at how to create category and tag indexes, so you can actually navigate through the content in different ways on the site.
>
> **[4:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-posts-in-graphql?u=76281980&t=273)** All right, let's get cracking.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), from. (1), case, (1), else, (1), this. (1)
> **CLI Commands:** find (3), make (1), node (1)
> **Cross-References:** in the next (2)
> **UI Navigation:** go to (2)
> **Env Vars:** uri (1)
> **Exercise Files:** template (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)

#### Generate posts automatically
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=0)** - [Instructor] In the context of Gatsby, WordPress is just another GraphQL data resource.
>
> **[0:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=4)** And that means once we have a model for pulling one type of data and we wanted to pull a different type of data that looks pretty much the same, we can use that same model again.
>
> **[0:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=12)** Case in point, earlier in the course, we set up functionality to pull out all the pages from the WordPress site and generate new pages in the Gatsby site.
>
> **[0:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=19)** Now we want to do the same thing with posts, and the process is pretty much identical.
>
> **[0:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=23)** In the exercise files for this course, I've made some small changes to the page.js file, and then I copied the file and created a new file called post.js, which is pretty much identical.
>
> **[0:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=34)** The only real difference is I've changed the name of the component from page to post.
>
> **[0:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=39)** I've also changed every reference to the data from page to post.
>
> **[0:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=42)** And if we scroll down to the bottom, you'll see here, instead of querying wpPage, I'm querying wpPost.
>
> **[0:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=49)** All the data that's being pulled out is the same as the data we've worked with before, and the only other main difference is I've changed the style sheet we were referring to earlier from page.module.css to single.module.css, and expanded in a bit, so we now have a little more style, and I've used one single style sheet to apply to both pages and post.
>
> **[1:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=70)** Everything else is exactly the same as it was before.
>
> **[1:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=73)** Now we need to use this template to generate new posts, and that's done using a GraphQL query.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=79)** The query is a little bit different from what we had with pages, because posts are structured differently.
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=84)** So here I'm querying allWpPost, and then I'm sorting the result based on the date, and I'm ordering it in descending order.
>
> **[1:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=92)** That way we get the latest post first, and then all the posts are listed in reverse chronological order.
>
> **[1:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=97)** This is what you expect anytime you're working with blog posts.
>
> **[1:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=100)** Then, instead of querying the nodes directly, I'm querying the edges.
>
> **[1:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=104)** That way, later on when we add navigation to the previous and next post, we have that information available inside the edges.
>
> **[1:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=110)** You'll remember here we have the next and previous posts.
>
> **[1:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=113)** Alright, to start this process, I'll copy this entire query, and then go to Gatsby-node.
>
> **[1:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=119)** Here, we already have a page query fragment, so I'll create a new fragment for posts, and call it postQuery.
>
> **[2:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=127)** Then I'll paste in my query here.
>
> **[2:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=129)** That means we have all the data we need.
>
> **[2:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=132)** Then we set up the function to generate the pages.
>
> **[2:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=134)** So here I'll copy the existing function for generating pages, paste in the copy, and then change all the references from page to post.
>
> **[2:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=150)** Once I'm finished that process, I need to change some of the functionality here.
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=154)** You'll remember we are now querying the edges, not the nodes.
>
> **[2:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=158)** So that means we need to look for queryResults, data, postQuery, and edges.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=163)** That also means down here in the createPage, it's not enough to refer to the post, 'cause the post now holds the edges and I need the nodes inside each of these edges.
>
> **[2:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=172)** So that means I need to say the path is post.node.uri.
>
> **[3:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=180)** Same down here, post.node.databaseId.
>
> **[3:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=185)** And there's one more thing I need to do.
>
> **[3:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=187)** If we go back and look at the results from this query, you'll notice the URI for the posts starts with a slash and then is the post name.
>
> **[3:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=195)** Now, that means, since we already generated pages, there is a small chance that a page and a post might end up with the same URI, and that will cause a collision inside Gatsby and it will not work.
>
> **[3:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=205)** So we need to put a prefix in front of the posts to make sure that there's never a collision between pages and posts.
>
> **[3:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=211)** The easiest way to do that is to create a string here, and then turn post node into a template literal.
>
> **[3:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=218)** So I'll say the string should be posts, and then we put in the template literal, and that way each of the URIs will be posts and then /hello-world, or /block-image, or slash whatever the post URI is.
>
> **[3:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=231)** That way there's a clear separation between pages and posts.
>
> **[3:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=235)** Okay, this is all we have to do to generate the posts.
>
> **[3:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=239)** I can save node.js, go into the terminal and stop Gatsby develop because we've now made changes to node.js.
>
> **[4:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=247)** Just for safety, I'm also going to clear all the Gatsby cache at this point.
>
> **[4:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=252)** So I'll say Gatsby clean.
>
> **[4:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=257)** Once that process is done, I'll rerun Gatsby develop.
>
> **[4:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=262)** Now, because I cleared out the cache, this may take a while, depending on how big the site is and because Gatsby's now generating a whole slew of new pages.
>
> **[4:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=270)** Once the Gatsby site is spun up we can now jump back to the browser, and, like with pages, we currently don't have links to any of these posts, so the easiest way to get to the posts is to just enter a garbage URL.
>
> **[4:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=281)** This will give us a list of all available pages in the Gatsby site.
>
> **[4:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=283)** So here we have all our regular pages, and then below we now have a new list of all the posts.
>
> **[4:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=288)** And here you also see why I use the WordPress theme unit test data.
>
> **[4:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=292)** It gives me all types of data that I can then experiment with.
>
> **[4:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=295)** So for example, here we have posts/markup-html-tags-and-formatting, where I can check that all the HTML tags and formatting are styled in correctly.
>
> **[5:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=302)** If I go searching for image, I can also find image posts.
>
> **[5:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=307)** So here's a posts called block-image, and if I go there, you can see images.
>
> **[5:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=312)** And there are all sorts of other data that you can test.
>
> **[5:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-posts-automatically?u=76281980&t=315)** But what's important is now Gatsby is generating a page for every single post, and they're all placed under this posts folder.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), make (1), find (1)
> **Code Identifiers:** postquery (2), wppage (1), wppost (1), allwppost (1), queryresults (1)
> **File Paths:** node.js (2), page.js (1), post.js (1), page.module.css (1), single.module.css (1)
> **Code Keywords:** module (2), function (2), while, (1)
> **Env Vars:** uri (3), url (1), html (1)
> **Exercise Files:** template (3), exercise files (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** is a  (2)

#### Add category and tag info
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=0)** - [Instructor] One of the key differences between posts and pages is posts are organized using categories and tags.
>
> **[0:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=6)** The post edge case, many categories from the WordPress theme unit test data, serves as a great example of this.
>
> **[0:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=12)** By applying categories and tags to posts, a user can come to a single post like this one and see what categories and tags it's organized under then click on any one of the these categories or tags to go to an index for all posts under that category or tag and see related content.
>
> **[0:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=26)** Now, right now, none of this information is being displayed in our post template.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=31)** So we need to change the template to carry over that information.
>
> **[0:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=34)** Category and tag information for each post is available through GraphQL, we just have to ask for it.
>
> **[0:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=39)** So if we go to grab a single post like this one, 1152 which is educates many categories, in addition to requesting the standard information, like the title and database ID and the content, we can also scroll down and find other information like categories.
>
> **[0:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=54)** Here, there's a separate set of categories with a separate set of nodes.
>
> **[0:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=58)** And from each of these nodes, we can then pull, for instance, the link and the name.
>
> **[1:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=62)** I can do the same for tags as well, scroll down and find tags.
>
> **[1:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=65)** Again, under nodes, request the link and the name.
>
> **[1:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=69)** When I run this query you'll see this post is associated with a lot of categories and a couple of tags.
>
> **[1:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=75)** So in addition to our title and database ID, we now have a categories object with a nodes array containing all of the categories associated with this post.
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=84)** And inside each node, we have a link and a name we can use.
>
> **[1:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=87)** Same thing for tags, scroll all the way to the bottom.
>
> **[1:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=89)** And you'll find a tags object with a nodes array with each of the tags.
>
> **[1:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=94)** Now we can carry this information over into our template using the query and then display it on the front end.
>
> **[1:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=99)** To do that, I'll copy out the query.
>
> **[1:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=102)** So categories and tags.
>
> **[1:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=104)** Find the query inside post.JS.
>
> **[1:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=107)** And here I'm going to add the categories and tags directly under the author.
>
> **[1:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=110)** You can place it anywhere you want it doesn't matter for how you're working with the data, is just structurally easier to look at this way because of this giant featureImage thing at the bottom.
>
> **[1:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=119)** Now we have the categories and tags and we can iterate through the data to pull the data we want.
>
> **[2:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=124)** Now of course, the challenge is both categories and tags.
>
> **[2:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=127)** There are many of them.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=128)** So we need to map through this object and output each individual category in each individual tag.
>
> **[2:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=133)** So let me show you how that's done using the tags first.
>
> **[2:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=136)** The first step is to figure out where to place it.
>
> **[2:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=139)** So I'll put it at the very end here right before the end of the article.
>
> **[2:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=142)** I'll set up a new div, inside this div I'll just put out some texts, I'll say tagged colon and then to make sure there's an actual space afterwards, I'll put a space here like that.
>
> **[2:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=153)** Then I need to grab the post object, the tags and the nodes inside that post object, and then map through each of them in turn to output the link and the name.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=163)** So I'll set up curly brackets and say post.tags.nodes.
>
> **[2:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=170)** So that brings us into each node.
>
> **[2:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=172)** And then I need to loop through those nodes, and for that, I'll use the map method.
>
> **[2:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=176)** Inside the map method, I will grab each tag and I'll also apply an index name to each tag so that I can reference them in react later if I want to.
>
> **[3:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=186)** And I'll set up an arrow function Inside the arrow function we're now working with a single tag and we already know we have two pieces of information for a tag, link and name so we can use the link component in Gatsby to output an actual link.
>
> **[3:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=202)** And to do that, I first need to add the link component.
>
> **[3:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=204)** So I'll import a link component from Gatsby.
>
> **[3:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=208)** Then I can use it down here.
>
> **[3:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=210)** So I'll say here, link, the link component takes two values.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=214)** First key.
>
> **[3:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=217)** This is so react is able to find element again later if you want to do some sort of transform on it and it's mandatory for this to work.
>
> **[3:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=223)** So I'll set the key to the index.
>
> **[3:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=225)** Then it takes a two property and that's the target of the link.
>
> **[3:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=229)** So since we have our tag object, the individual tag, we can just say link and this will give us the link to that tag.
>
> **[3:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=236)** Then we need to output what's going to go on the frontend, the text inside the link and that will be the name.
>
> **[4:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=241)** So again, tag.name.
>
> **[4:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=244)** All right, let's save this and go to the browser and see what it looks like.
>
> **[4:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=246)** Down here, we now have tagged, categoriesedge.case.
>
> **[4:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=251)** All right, there's no space between each of these items.
>
> **[4:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=255)** Okay, so we need to add space between these items.
>
> **[4:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=257)** Now, there are different ways of doing this.
>
> **[4:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=258)** I found a really clever way of doing this by reading a bunch of tutorials online.
>
> **[4:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=263)** So in place of this parentheses here that contains our function, I'm going to put in a square bracket that makes it an array.
>
> **[4:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=270)** Then in the array, I'll provide two values.
>
> **[4:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=273)** First, a function that puts a comma between each item and then the actual output.
>
> **[4:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=279)** So it looks like this, I say index.
>
> **[4:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=282)** So that gives us the current index of the item, that will be either zero or one, or two, or three, or however many items we have.
>
> **[4:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=288)** And as long as the index is larger than zero, meaning from the second item onwards, then output comma space.
>
> **[4:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=299)** That way for the first item that has index number zero, we just output the link as is.
>
> **[5:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=304)** For the second item, which has index one, so it's bigger than zero, we output comma space and then the item.
>
> **[5:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=310)** Save this.
>
> **[5:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=312)** Back in the browser and look at that.
>
> **[5:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=313)** Now we have categories comma edge case.
>
> **[5:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=316)** Very cool, right?
>
> **[5:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=317)** All right, so it works for tags.
>
> **[5:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=320)** Then we need to do the same thing with categories.
>
> **[5:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=322)** I'll to save you the trouble of watching me do this exact same thing a second time, I've already created a component for it.
>
> **[5:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=328)** It sits right here, It's called catlist.
>
> **[5:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=330)** It does the exact same thing just with categories instead, it receives the post object as its property and then parses all the data based on that.
>
> **[5:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=339)** So now all we need to do is import this component into our post template, and then we're able to use it.
>
> **[5:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=344)** So pulse.JS at the very top.
>
> **[5:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=348)** Here, I'll import a component.
>
> **[5:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=349)** So import catlist from components catlist.
>
> **[5:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=354)** Then I can use the catlist anywhere I want.
>
> **[5:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=357)** So I will place the catlist let's see right before h1 here.
>
> **[6:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=363)** So I'll say catlist and the property is called postObject.
>
> **[6:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=368)** And then inside postObject, I'll just pass the entire post.
>
> **[6:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=371)** So that's all the data and that data will include the category data and that's what will be parsed out, okay?
>
> **[6:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=377)** So now we have the catlist component in place.
>
> **[6:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=380)** I'll save this one more time.
>
> **[6:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=381)** The pages get rerendered and look at that.
>
> **[6:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=384)** We now have the categories at the top here.
>
> **[6:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-category-and-tag-info?u=76281980&t=386)** Now of course, clicking on any of these categories takes you nowhere because we haven't built the category indexes yet but the functionality is there and we're getting the correct information in the template.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), this. (3), let (3), case. (2), case, (1)
> **CLI Commands:** find (5), node (2), make (1)
> **UI Navigation:** go to (3), scroll down (2), click on (1)
> **Exercise Files:** template (5)
> **Code Identifiers:** postobject (2), featureimage (1)
> **Prerequisites:** set up (3)
> **File Paths:** post.js (1), pulse.js (1)
> **Definitions:** is called (1)

#### Create an index template
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=0)** - [Narrator] We've successfully migrated each post from the WordPress site to the Gatsby site.
>
> **[0:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=4)** Now we need to create some form of interface for the user to be able to navigate through the posts themselves.
>
> **[0:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=9)** Now in a WordPress site, this is traditionally done by having indexes.
>
> **[0:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=13)** So when you go to the blog page of a WordPress site you get a reverse chronological index showing a number of posts, usually 10 or 12.
>
> **[0:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=20)** And then you navigate down to the bottom of this list to go to the previous post or the older posts or the newer posts or maybe even a paginated index to find the posts that were published in the past.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=31)** We want to duplicate this behavior in Gatsby.
>
> **[0:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=33)** The challenge here is we're working with static pages.
>
> **[0:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=37)** So that means we need to generate new static pages, one for each 10 or 12 or 14 or 4 or whatever number you want to display of posts in an index and then create these static index pages individually, hopefully automatically, so we don't have to manually put all this stuff in.
>
> **[0:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=53)** To do this, we'll use some additional features inside all WP posts in GraphQL.
>
> **[0:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=58)** In particular, we want to use these two fields at the top here called limit and skip.
>
> **[1:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=63)** So let me explain those.
>
> **[1:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=64)** Limit allows us to say how many items we want returned.
>
> **[1:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=68)** So if we set the limit to say 10, then you only get 10 returns, instead of all available returns.
>
> **[1:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=74)** That would give us the first 10 posts based on our order.
>
> **[1:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=77)** However, if we want to be able to skip to the next 10 we then need an additional feature, and that is skip.
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=84)** So if you set the skip value to zero, it means gimme the first 10 items.
>
> **[1:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=89)** If you set the skip value to 10, you're saying gimme the next 10 items.
>
> **[1:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=93)** And if you set it to 20, you're giving the next 10 items after the 21st items and so on and so forth.
>
> **[1:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=100)** So if you automate the input of the skip value and set the limit you're able to create multiple different pages showing different sets of pulls based on these two values.
>
> **[1:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=112)** This is the feature we're going to use when we auto-generate the pages.
>
> **[1:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=115)** But before we can do that, we need to set up the page templates and get all the functionality working.
>
> **[2:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=120)** *So, in the exercise files for this movie I've added two new files.
>
> **[2:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=123)** The first one is found under templates.
>
> **[2:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=125)** It's called posts index.
>
> **[2:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=127)** As the name suggests, this is the index page for posts.
>
> **[2:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=131)** This is a built out version of the post template.
>
> **[2:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=135)** So it has a little more functionality in it since we're iterating through several different posts, and we also need to include some links and other stuff to make it work.
>
> **[2:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=143)** If you scroll down to the bottom and look at the query, you'll see the query is the same query we've been using before.
>
> **[2:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=148)** We're querying the same amount of data and outputting the same amount of data.
>
> **[2:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=151)** But up here at the top you're seeing in addition to sorting it by the date we're also using the skip and limit functions.
>
> **[2:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=160)** Now these values for skip and limit are variables that are passed in from node.
>
> **[2:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=164)** And this is done using a function we'll build in the next movie.
>
> **[2:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=167)** So just for now, assume that skip and limit will be populated, and that's how we get the correct posts.
>
> **[2:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=172)** Then, scrolling up to the top, you'll notice there are a couple of differences here.
>
> **[2:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=176)** First of all, we're passing in the page context 'cause we need some information about the current page we're working on, then down here because we are displaying a list of posts instead of a single post, we have to map through the array of posts that comes to us.
>
> **[3:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=190)** So here we have posts, all the posts and then map through each post.
>
> **[3:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=194)** Scrolling further down, you'll also notice that the featured image has a link wrapped around it.
>
> **[3:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=198)** So when you click on the featured image, you go to the individual post and the title has been changed from an h1 to an h2.
>
> **[3:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=205)** And then, there's also a link wrapping around the title, so if you click on the title, you go to the post.
>
> **[3:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=211)** Finally, scrolling down a little further, you'll notice instead of using the content for the post displaying the entire content of the post, I'm using the excerpt of the post.
>
> **[3:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=220)** So that is just a short version.
>
> **[3:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=222)** This is a stylistic option I've made for the index page.
>
> **[3:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=225)** Of course, you can choose to display the whole content if you want to.
>
> **[3:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=228)** In fact, you can display whatever you want on the index page, and this template allows you to display whatever you want.
>
> **[3:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=234)** Then, if you scroll all the way to the bottom you find this new component called pagination and this is where page context comes in.
>
> **[4:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=241)** So the page context is information about where we are in the stack.
>
> **[4:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=245)** So what is going to be the previous page and the next page in the index.
>
> **[4:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=249)** The pagination component is the other file I've added.
>
> **[4:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=252)** It sits here.
>
> **[4:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=253)** It receives the page context, which includes information about the previous page and the next page, and then it outputs a simple navigation section that has a link to the previous page and a link to the next page, or newer posts and older posts.
>
> **[4:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=268)** So that's all the pieces that fit together to output these index pages.
>
> **[4:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-an-index-template?u=76281980&t=272)** In the next movie, we'll look at how to auto-generate the index pages.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3), interface (1), this, (1), let (1), function (1)
> **UI Navigation:** go to (4), click on (2), scroll down (1)
> **CLI Commands:** find (2), make (1), node (1)
> **Exercise Files:** template (2), exercise files (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Generate index pages automatically
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=0)** - [Instructor] Writing the scripts necessary to auto-generate paginated index pages in Gatsby would be a lot of work, but fortunately, this process is so common, there's a plugin for Gatsby to do all of this work for us.
>
> **[0:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=11)** That plugin is aptly named, Awesome Pagination for Gatsby because it's pretty awesome.
>
> **[0:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=16)** So let's use this plugin to generate the paginated index pages for us.
>
> **[0:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=20)** The first thing we need to do is install it into our Gatsby project.
>
> **[0:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=23)** So I'll open my terminal, terminate any process that's currently running, and type in npm install, save Gatsby awesome pagination.
>
> **[0:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=38)** While that install process is running, we can set up the plugin in Gatsby node.
>
> **[0:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=42)** To do that, we start by importing the plugin.
>
> **[0:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=44)** Now, the code example here can't actually be used in our project because this is a node project and I'm using ES6.
>
> **[0:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=50)** So instead of the code example, I'm going to set up a new constant, and then I'll destructure the data that comes out from Gatsby Awesome Pagination to grab only the paginate function.
>
> **[1:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=62)** So I'll say paginate equals require, and Gatsby awesome pagination.
>
> **[1:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=73)** Now, we have the paginate function available to us, and I'm going to use that paginate function all the way at the bottom of my file.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=79)** There's an example of how this function works further down in the documentation for the plugin.
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=84)** So in the example, we first generate the blog post.
>
> **[1:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=87)** So this will be an array of posts.
>
> **[1:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=89)** And then we use the paginate function to create a page, then grab the blog post items, set the number of items we want per page, give them a page prefix, and point at some template to generate the content.
>
> **[1:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=100)** That's exactly what I want to do here.
>
> **[1:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=101)** So I'll just copy this piece of the code out, and paste it down here directly below where we generated the posts.
>
> **[1:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=109)** Okay, so we want to paginate the blog posts.
>
> **[1:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=112)** And if you remember, earlier we created a new post query for all WP posts.
>
> **[1:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=117)** So we already have an object that contains all the available posts on the site.
>
> **[2:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=121)** That object has been turned into a constant here.
>
> **[2:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=124)** So we're saying, constant post, and then query results for data post query and edges.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=128)** So this posts constant holds the information we need.
>
> **[2:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=132)** So I'll create pages based on the items in posts.
>
> **[2:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=137)** That's the constant that was created earlier.
>
> **[2:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=139)** Then I decide how many items I want per page.
>
> **[2:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=141)** And just to create more pages, I'll say four.
>
> **[2:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=144)** The path prefix will be the URL we go to, to go to this index.
>
> **[2:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=149)** And since I've already defined posts as the prefix for the individual posts, I should use that same prefix here.
>
> **[2:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=156)** So posts.
>
> **[2:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=157)** And finally, I need to point to the component we'll use to resolve each of the pages.
>
> **[2:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=161)** That will be the component we're using as the template, which is this one here, posts-index.
>
> **[2:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=167)** So I'll say ./src/templates/posts-index.js.
>
> **[2:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=179)** Okay, save this.
>
> **[3:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=181)** Go back in terminal and run Gatsby develop.
>
> **[3:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=185)** And while this process runs, let me explain what happens now.
>
> **[3:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=189)** The paginate function is really smart and does a lot of things.
>
> **[3:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=192)** So it creates new pages based on the information we've given.
>
> **[3:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=195)** So now, it'll create a new page for every four posts we have and using post slash posts, and then post slash two, three, four for however many pages are generated.
>
> **[3:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=205)** Now, this paginate function will then pass information over to the template we're using.
>
> **[3:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=210)** That information is captured here.
>
> **[3:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=212)** So we're capturing the skip and limit information that's generated from this value, items per page.
>
> **[3:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=217)** So skip and limit will be populated by the function we just installed, and then populated into the query.
>
> **[3:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=223)** So we're getting the right number of posts for each individual page that's generated.
>
> **[3:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=226)** And it also passes over something called page context.
>
> **[3:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=229)** And within this page context object sits two important pieces of information, previous page path, and next page path.
>
> **[3:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=237)** And that's what's used inside this pagination component to output those links to the previous or next post.
>
> **[4:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=244)** So all of this work is done by the plugin automatically, and we don't have to wire it all together.
>
> **[4:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=249)** We simply provide the components necessary, and all the work is done for us.
>
> **[4:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=253)** If you want to know more about exactly how this is all wired together, it's all documented in the plugin information.
>
> **[4:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=258)** So here we have an example of the skip and limits components.
>
> **[4:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=262)** And here we have an example of that navigation from the previous or next index.
>
> **[4:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=267)** So the plugin solves the problems for us, and if there are no errors in my code right now, we should be able to go to our local host slash posts and see the index.
>
> **[4:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=279)** Look at that, posts index.
>
> **[4:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=281)** Here's the first post, the second post, the third post, the fourth post, and then older posts.
>
> **[4:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=287)** Navigate to that.
>
> **[4:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=288)** Keep going through the content.
>
> **[4:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-index-pages-automatically?u=76281980&t=290)** If I click on any of these, I go into the individual post.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (2), require (1), finally, (1), this. (1)
> **Prerequisites:** install (3), set up (2)
> **UI Navigation:** go to (2), navigate to (1), click on (1)
> **CLI Commands:** node (2), npm (1)
> **Exercise Files:** template (3)
> **Env Vars:** es6 (1), url (1)
> **Tools:** terminal (2)
> **File Paths:** src/templates/posts-index.js (1)

#### Challenge: Create a post navigation component
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=0)** - [Instructor] Up for another challenge?
>
> **[0:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=9)** Here, I want you to really test what you've learned so far by creating a post-navigation component.
>
> **[0:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=15)** This is a component that sits at the bottom of each individual post page to say, navigate to the previous or next post.
>
> **[0:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=21)** In this challenge, you need to first augment the GraphQL query to get the previous and next post objects.
>
> **[0:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=28)** This query might not be in the post's template.
>
> **[0:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=31)** It might sit somewhere else.
>
> **[0:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=33)** Then you need to get the title and URL for the previous and next post, create a component to display the previous and next post navigation, and then put that component below all the other content in the single post template.
>
> **[0:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=45)** Here's a challenge tip.
>
> **[0:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=46)** The post query in Gatsby-node.js is querying allWpPost.edges.
>
> **[0:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=52)** This is a vital piece of information to solve this challenge.
>
> **[0:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=55)** This challenge is more difficult than the previous challenges, so give yourself up to 20 minutes to solve it.
>
> **[1:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-a-post-navigation-component?u=76281980&t=60)** Once the 20 minutes are up, or you've solved the challenge, go to the next movie and see how I solve the same challenge.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (1), go to (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **File Paths:** gatsby-node.js (1)
> **CLI Commands:** node (1)
> **Code Keywords:** else. (1)
> **Code Identifiers:** allwppost (1)
> **Env Vars:** url (1)

#### Solution: Create a post navigation component
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=7)** - [Instructor] Welcome back.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=8)** Let me walk you through how I solve this challenge.
>
> **[0:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=10)** In the exercise files for this movie, I've added all the necessary code so you can compare your solution to mine.
>
> **[0:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=15)** And here I'll walk you through all the steps and show you how everything is wired together.
>
> **[0:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=20)** The end result is what you see in my browser right now.
>
> **[0:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=23)** When I go into a single post, I have navigation at the bottom saying previous post and next post.
>
> **[0:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=28)** And if I click on either of those navigation items, I'm going to the post in question.
>
> **[0:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=32)** As you can see, each of the navigation items will have the text previous or next post follow by the title of the post in question and the link pointing to that post.
>
> **[0:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=42)** The key to solving this challenge is figuring out where to get the information about what the previous and next post is.
>
> **[0:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=49)** And I've alluded to this in the past.
>
> **[0:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=51)** If we use the edges point on all WP post, we not only get the current note, the current post, but we also get the next and previous post.
>
> **[0:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=59)** So if I go in here and say next, and then go look for database ID and URI, you'll see database ID and URI, and then scroll all the way down and find previous and do the same thing, database ID and URI and then run the query for each of the posts.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=79)** We now have the note itself followed by the next and on the previous post.
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=84)** In this result, it's very important to notice that if the previous post is nothing, meaning you're looking at the first post, or the next post is nothing, meaning you're looking at the last post, the value of the other one will be null.
>
> **[1:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=98)** This will become essential to our solution.
>
> **[1:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=102)** All right. So how do we use this data?
>
> **[1:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=104)** Well, the first step is to go into Gatsby node and alter our all WP post query because now we're not only looking for the current node but we're also looking for the next and previous nodes.
>
> **[1:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=114)** So as you can see in my post query, I'm now querying the node and next and previous, and for next and previous, all I'm gathering is the database ID.
>
> **[2:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=123)** Once I have the database ID, I'll be able to later on, query that database ID for more information.
>
> **[2:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=129)** Now we need to do something with that data.
>
> **[2:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=131)** And that happens down here where we create the pages.
>
> **[2:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=134)** So under create page, we have this section called context where we can pass information from node into the template.
>
> **[2:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=140)** And before we just passed the database ID for a current post, now we're also going to pass the database ID for the next and previous post.
>
> **[2:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=148)** And remember how I said, if there is no post, we get a return of null.
>
> **[2:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=153)** Well, if we try to pass the next ID and just say post next and post next equals null, node will stop working.
>
> **[2:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=159)** That's an error.
>
> **[2:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=161)** So to fix that problem, I've set up this conditional query here that says if post next has a value, then pass post next database ID.
>
> **[2:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=170)** On the other hand, if it has no value, then pass the value null, so that everything doesn't fail.
>
> **[2:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=176)** So this will pass either an ID or null, depending on whether or not there's a previous or next post available.
>
> **[3:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=183)** This information is then captured in post JS down here in the query.
>
> **[3:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=187)** I've extended the query to receive not only the database ID for the current post, but also the next ID and the previous ID.
>
> **[3:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=194)** And look closely here and you'll see the database ID for the current post has bang at the end of it.
>
> **[3:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=199)** It says the result is an integer and a bang means it has to be an integer.
>
> **[3:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=204)** Whereas the next ID and the previous ID do not have that bag at the end because it could either be a number or it could be null.
>
> **[3:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=211)** And that's important because if you put that bang here and you pass in null, then the query will fail.
>
> **[3:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=217)** Next ID and previous ID are then used in a new fragment at the bottom here.
>
> **[3:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=222)** So we have two new fragments, next post, that goes to WP post for the database ID of next ID and then pulls out the title and URI.
>
> **[3:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=230)** And then for previous post, again, go to WP post, pull out the previous ID and title and URI.
>
> **[3:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=235)** This is one way of solving the problem.
>
> **[3:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=238)** You could also do this in Gatsby Node but I find it cleaner to do it in post.
>
> **[4:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=243)** Once we have these two pieces of data, so previous and next post, we then use it up here in the output section.
>
> **[4:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=250)** I've created a new component called post nav and I'm passing in data previous post and data next post.
>
> **[4:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=257)** So that is the data that contains title and URI for the previous and next post.
>
> **[4:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=262)** Post nav sits over here.
>
> **[4:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=263)** It's a new component.
>
> **[4:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=265)** It receives previous post and next post.
>
> **[4:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=267)** And then it takes the information from these two and outputs it.
>
> **[4:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=270)** So for each of them, we output a link to either the previous post URI with the previous post title or the next post URI with the next post title.
>
> **[4:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=279)** And I've wrapped them both in conditional statements saying only if we actually have a previous post, are we going to output this link.
>
> **[4:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=286)** And only if we have a next post, are we going to output this link.
>
> **[4:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=289)** So again, there might be a null value.
>
> **[4:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=291)** I create a null value to pass it through the system to ensure that we don't output garbage content.
>
> **[4:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=296)** And also to ensure that we don't get any errors.
>
> **[4:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=299)** So send a query from Gatsby Node, pass the query data over to post and post passes the data over to post nav.
>
> **[5:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=308)** And that's how we get the navigation.
>
> **[5:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=310)** Run this in the browser.
>
> **[5:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-a-post-navigation-component?u=76281980&t=311)** You'll see this navigation at the bottom and it'll work across all your posts.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (9), let (1)
> **CLI Commands:** node (7), find (2)
> **Env Vars:** uri (8)
> **UI Navigation:** click on (1), go to (1)
> **Exercise Files:** exercise files (1), template (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 6. Categories and Tags

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Query categories and tags
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=0)** - [Instructor] All right. At this point, we have pages, we have custom menus, we have posts, and we have post indexes, but there's still some pieces missing.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=8)** If I go to one of my posts and then click on one of the category links here, I get to the 404 page.
>
> **[0:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=15)** That's because we have yet to generate the category index pages.
>
> **[0:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=18)** But that's a bit challenging because unlike the index page where we just say give me all the posts and then list them in reverse chronological order, for the categories, we need to generate a separate category index page, or maybe a set of category index pages per category.
>
> **[0:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=35)** So we somehow have to query the database and say, "Hey, can you give me all the posts that are under this Grandchild Category, and then make an index based on just that category?"
>
> **[0:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=45)** And also keep in mind that different posts may be filed under multiple different categories.
>
> **[0:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=51)** So how do we do all this?
>
> **[0:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=53)** Well, the answer, as with pretty much everything else, is GraphQL solves this problem for us if we just know where to look.
>
> **[1:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=61)** So let's do a query for a category.
>
> **[1:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=63)** I'll go and say allWpCategory that gives me every single category.
>
> **[1:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=67)** Then give me the nodes.
>
> **[1:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=70)** And here I want the databaseID for the category, the name of the category, and the link to the category.
>
> **[1:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=76)** So run this query and we get a list of all the available categories on the site with the databaseID, the name, and the link.
>
> **[1:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=83)** All right, that's great, but it doesn't really solve the problem of posts, which posts belong under each category, or does it?
>
> **[1:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=92)** Look closely here, and under the category option in GraphQL, there's one called posts.
>
> **[1:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=97)** And if I open this one and open the nodes, here we have a post object.
>
> **[1:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=102)** And from here, we can then say, give me the databaseID for the post, the link to the post, and the title to the post, and run the query again.
>
> **[1:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=113)** And watch what happens.
>
> **[1:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=115)** Now, for each of my categories, so aciform, we have a list of posts, and these will be all the posts that are stored under this category.
>
> **[2:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=124)** So here there's just one.
>
> **[2:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=125)** Down here, there's just one.
>
> **[2:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=128)** But if we scroll further down, you'll find that some of these categories have a lot of posts under them.
>
> **[2:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=132)** So this one, databaseID 6 called block has a series of posts.
>
> **[2:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=136)** And that means we can run a query on the category with that databaseID 6 and say, make an index based on all the posts that are inside this category.
>
> **[2:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=147)** And all the posts will be directly available to us.
>
> **[2:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=149)** And because we are working with GraphQL, when I say the post is directly available to us, I mean the entire post object is available to us.
>
> **[2:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=157)** So we can go in here and pull out whatever information we want about that post.
>
> **[2:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=161)** The featured image, the author name, the other categories, the title, whatever we want, it's all available to us.
>
> **[2:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=168)** So in this way, GraphQL is kind of like a nested doll where the same item can be queried from multiple different locations.
>
> **[2:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=175)** So this is how categories work.
>
> **[2:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=177)** Tags work the exact same way.
>
> **[2:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=179)** The only difference is, instead of requesting allWpCategory, we just request allWpTag.
>
> **[3:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=187)** Run the query again.
>
> **[3:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=188)** We get the exact same kind of result, except this time it's for tags.
>
> **[3:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=191)** This is what we're going to do in the rest of this chapter.
>
> **[3:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-categories-and-tags?u=76281980&t=194)** Build out indexes for every single category and every single tag.

> [!info]- Semantic Content
>
> **Code Identifiers:** databaseid (5), allwpcategory (2), allwptag (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1), click on (1), open the (1)
> **Code Keywords:** else, (1), let (1)
> **Analogies:** kind of like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Generate category indexes automatically
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=0)** - [Instructor] Creating category indexes works much the same as when we created an index for all the posts.
>
> **[0:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=6)** The main difference is we're now working with a series of indexes instead of just one giant index.
>
> **[0:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=11)** We need one index per category.
>
> **[0:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=14)** So that means we need to create a loop to say for every available category, go count out the number of posts in that category and then create index pages for that category, then move on to the next category and do the same thing.
>
> **[0:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=26)** The key to getting this to work is to send the right query to GraphQL, and this is what that query looks like.
>
> **[0:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=32)** We'll go to allWpCategory to get all our categories.
>
> **[0:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=36)** Each of these categories is captured in a node.
>
> **[0:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=38)** And for that node, so each category, we get the databaseId, the uri, and the name of the category.
>
> **[0:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=44)** Then, for each of these nodes, so each of the categories, we also request the posts, the nodes, and then some value, in this case, databaseId.
>
> **[0:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=53)** It's not important exactly what data we're pulling out for this node, because we're not going to use that data.
>
> **[0:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=59)** The only reason we're requesting it is we need to know how many posts are under this particular category.
>
> **[1:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=65)** Okay, so let's set all this up.
>
> **[1:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=66)** I'll start by copying out this query and going to gatsby-node.js.
>
> **[1:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=72)** Here, we already have two fragments set up, pageQuery, which we use to query pages, and postQuery for posts.
>
> **[1:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=78)** So now we're going to make a third fragment for catQuery and set that equal to the query I just set up.
>
> **[1:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=85)** So now we have all the categories as nodes, and inside each node, we have all the posts.
>
> **[1:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=90)** Then we need to generate the index pages, and we can do that by copying the existing paginate function we created for the general index pages.
>
> **[1:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=98)** So I'll copy this code in its entirety, paste it in below, then change the description, Create your paginated category indexes.
>
> **[1:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=109)** And now we need to do some thinking because unlike the original pagination function, where we had a list of posts, and we just created index pages for it, here, we have a list of categories.
>
> **[2:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=120)** And then for each category, we have a list of posts.
>
> **[2:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=123)** So we need to create a loop here to say grab each category, then run the pagination function on that category, then go to the next category and run the pagination function again.
>
> **[2:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=132)** So let's take a look at the data we have right now.
>
> **[2:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=135)** In our query, we have this catQuery that returns a series of nodes, an array of nodes, and each of those is a category.
>
> **[2:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=142)** So if we go down here, I'll say const to create a new constant called categories and set that constant equal to the query result for the catQuery.
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=154)** So queryResult.data, so that's all the data, .catQuery, that's our fragment, .nodes.
>
> **[2:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=165)** This will return an array of all the available categories.
>
> **[2:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=168)** Then, I can take that array and map through it, so we get each category, and then pull out the posts from each category, so categories.map.
>
> **[2:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=178)** Inside the map, we'll set up categories, category, so that's the individual category, and an arrow function.
>
> **[3:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=186)** And inside the arrow function, I'll now paste this pagination function.
>
> **[3:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=193)** So that way, we are looping through each category, grabbing each category in turn, and then running pagination on that category.
>
> **[3:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=199)** Okay, now I can set up the pagination function.
>
> **[3:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=202)** So we are creating a page.
>
> **[3:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=204)** Then the items we are working with now will be category, that's the current category, .posts.node.
>
> **[3:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=215)** Remember, in our query here, posts, nodes, and then the databaseId, that's why we're asking for this value.
>
> **[3:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=222)** We're not actually going to use it, but now we have a list of nodes.
>
> **[3:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=227)** I still want four items per page.
>
> **[3:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=230)** As for the pathPrefix, I now need to have a path prefix that matches the category name.
>
> **[3:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=234)** And that's why I queried for the uri to the individual category nodes, 'cause then I already have a uri that's generated by WordPress, and I can use that uri to match it.
>
> **[4:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=244)** So down here, instead of saying posts, which is a string, I'll say category.uri.
>
> **[4:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=255)** Now we need to point at a template.
>
> **[4:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=256)** We haven't built that template yet, but we're going to in the next movie.
>
> **[4:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=259)** So for now, I'll just say categories here.
>
> **[4:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=263)** And then finally, I want to pass some additional information to that template.
>
> **[4:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=267)** Specifically, I want to pass the category ID so that we can run a query on the data in the template.
>
> **[4:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=273)** And I also want to pass the category name, so we can display the name outside of the query.
>
> **[4:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=277)** To do that, I can use the context property inside the paginate function.
>
> **[4:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=284)** Context allows me to pass on an object with whatever information I want.
>
> **[4:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=288)** So in this case, I want to pass on catId, set that to category.databaseId, and I want to pass on catName and set that to category.name.
>
> **[5:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=302)** Okay, save that.
>
> **[5:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=304)** Don't run gatsby develop yet because we're missing this category's template.
>
> **[5:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=307)** So if you run it right now, everything will collapse.
>
> **[5:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/generate-category-indexes-automatically?u=76281980&t=310)** But this is the functionality that will eventually allow us to autogenerate these posts.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), pass (6), case, (2), let (2), const (1)
> **Code Identifiers:** databaseid (4), catquery (4), allwpcategory (1), pagequery (1), postquery (1)
> **CLI Commands:** node (6), make (1)
> **Exercise Files:** template (5)
> **Prerequisites:** set up (4)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **File Paths:** gatsby-node.js (1)

#### Create a category index template
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=0)** - [Instructor] The function to generate page-native category index pages is in place.
>
> **[0:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=3)** So now we need to build the category template, so we can actually output it to Gatsby and generate the pages themselves.
>
> **[0:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=10)** For this, I'll use my favorite development technique again, and it's still called being lazy.
>
> **[0:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=16)** I already have an index template in my project.
>
> **[0:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=19)** It's this one here, posts-index.js.
>
> **[0:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=23)** And because I'm now outputting a different kind of index, but I want the same kind of information, and also because I want consistency between the different index pages, I'm going to make a copy of this file and then just make some slight changes to it to make it output category information instead of all post information.
>
> **[0:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=39)** So I'll copy this and then just paste it back into the same folder and rename this file categories so that it matches with what we're calling in Gatsby Node here, templates/categories.js.
>
> **[0:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=54)** Then I'll close posts-index, so I don't accidentally make any changes.
>
> **[0:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=58)** Now I need to first update the component name, so I'll go Shift + Control or Command + L to change all instances and call this one CategoryIndex.
>
> **[1:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=70)** Then, I'll scroll down to my query.
>
> **[1:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=73)** Now, here, I need to modify my query so that instead of querying all posts, I'm only querying the posts that belong in a specific category.
>
> **[1:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=82)** Now, we already know the ID for that specific category because I passed it in through context here, and that means we can use it in my query.
>
> **[1:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=90)** But first we need to capture this catId value.
>
> **[1:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=94)** That's done by going up here in the top of the query and setting up a new variable.
>
> **[1:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=98)** That's done by going to the query and setting up a new variable, so $ and then the name of the variable.
>
> **[1:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=104)** And this variable will be an integer.
>
> **[1:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=106)** And I want it to be always an integer, so I'll put a bang at the end.
>
> **[1:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=109)** Now we have the catId variable, which is the value we passed over from here, the databaseId for the current category.
>
> **[1:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=117)** And that means we can filter based on it.
>
> **[2:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=120)** How do we do that?
>
> **[2:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=121)** Well, if you go to allWpPost and open filter, you can go to categories and nodes and element match and databaseId and set it equal to whatever you want.
>
> **[2:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=130)** And it looks like this.
>
> **[2:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=131)** So I'll copy all this out here, everything in between the parentheses, and then I'll paste it in directly after limit.
>
> **[2:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=140)** So we are passing sort, skip, limit, comma, and then filter.
>
> **[2:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=145)** And I'll save this, and then it'll get nice and structured, so you can read it.
>
> **[2:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=148)** So we're sorting based on date.
>
> **[2:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=150)** We skip and limit based on the values that are passed in from the pagination function.
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=154)** And then we filter based on catId.
>
> **[2:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=157)** So here I'll grab catId and place it over here in place of 10.
>
> **[2:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=161)** So now we're saying give me only the posts that belong to this category, and the category matches the databaseId, catId.
>
> **[2:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=170)** All right, the rest of it stays the same because we have all the information we need.
>
> **[2:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=174)** Now we need to change the output, and that's done up in the component itself.
>
> **[2:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=178)** The first thing I want to do is change the name of the page, 'cause right now it says Posts, but we need it to say instead Category and then the category name.
>
> **[3:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=186)** So I'll change this to say Category, and then I need the category name.
>
> **[3:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=191)** Now, again, I'm passing that over in the context here.
>
> **[3:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=194)** Remember, category name is passed over as the value called catName.
>
> **[3:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=199)** So that page context is already inside my component, right here, so I can destructure it and say constant and then say catName = pageContext.
>
> **[3:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=212)** And that way, I have the catName.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=214)** And then I can just place the catName here, so catName, and it'll output Category: and then the name of the current category.
>
> **[3:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=222)** I also want to do this up in the Seo title.
>
> **[3:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=225)** So here, I'll set up template literal, and then say Category: $ and then catName.
>
> **[3:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=237)** Everything else in this template stays the same because the template is still outputting in the same way that it was before.
>
> **[4:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=243)** So the only changes really are the title here and to make sure the query only gives us the posts we're looking for.
>
> **[4:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=249)** Now I can save that, make sure that everything is in place, and run gatsby develop.
>
> **[4:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=258)** Build is complete, go back to the browser.
>
> **[4:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=260)** Here, we have have our post with many categories, and now I can go to any one of these categories, let's say category disinfection, and get a list of all the posts under that category.
>
> **[4:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=269)** Now, this category and many of the categories in the theme unit test data only have one post, but I know there's a category called block.
>
> **[4:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=277)** So if I go to category/block, you'll see here, we have a bunch of posts.
>
> **[4:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=282)** And at the bottom, we have navigation.
>
> **[4:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=284)** So I can now click on older posts and get to, oh, that didn't work.
>
> **[4:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=289)** Why is that?
>
> **[4:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=290)** Look at the URL.
>
> **[4:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=292)** You see it says block//2?
>
> **[4:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=295)** This is an interesting problem.
>
> **[4:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=297)** Let me show you what's going on here.
>
> **[4:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=298)** So if we go back to Gatsby Node and look closely at the documentation, it says here pathPrefix creates pages like blog, so /blog, no slash, but this category.uri outputs a URL that ends with a forward slash.
>
> **[5:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=317)** So I need to get rid of that forward slash.
>
> **[5:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=320)** The good news is that's really easy to do.
>
> **[5:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=322)** All I need to do is go in and just slice it off.
>
> **[5:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=324)** So I'll say slice 0 and -1.
>
> **[5:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=327)** So that just takes the whole string and cuts off the last letter, which in this case is the errant forward slash, save Gatsby Node.
>
> **[5:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=334)** Of course, this means I need to restart gatsby develop.
>
> **[5:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=338)** So I'll stop and restart gatsby develop and wait for the whole set to be regenerated one more time.
>
> **[5:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=345)** Once that's done, I can go back to my browser, reload this page, and then I'll go back to the block page that I know worked, scroll to the bottom, find older posts, click, and look at that, block/2.
>
> **[5:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/create-a-category-index-template?u=76281980&t=359)** Everything is now working properly, and we have category indexes for every single category.

> [!info]- Semantic Content
>
> **Code Identifiers:** catname (6), catid (5), databaseid (3), allwppost (1), pagecontext (1)
> **CLI Commands:** make (6), node (3), find (1)
> **Code Keywords:** function (2), this, (2), let (2), this. (1), for. (1)
> **UI Navigation:** go to (4), scroll down (1), click on (1)
> **Exercise Files:** template (5)
> **Cross-References:** go back to (4)
> **File Paths:** posts-index.js (1), templates/categories.js (1)
> **Env Vars:** url (2)

#### Challenge: Create tag indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=0)** (bright music)
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=8)** - [Instructor] All right, time for one final challenge.
>
> **[0:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=10)** Here, I want you to create a tag index for your site.
>
> **[0:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=13)** First, create a GraphQL query to retrieve all the tags and their posts.
>
> **[0:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=18)** Then build a function to output paginated tag index pages for all the tags.
>
> **[0:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=23)** And finally, build a template to display these paginated tag index pages.
>
> **[0:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=28)** In this challenge, it's very important to remember my primary development tool, being lazy, because a lot of this work has already been done for you.
>
> **[0:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=36)** You may just need to copy some existing work and just change a couple of phrases to solve this challenge.
>
> **[0:42](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=42)** For this reason, the lazy part, give yourself only 10 minutes to solve this challenge.
>
> **[0:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/challenge-create-tag-indexes?u=76281980&t=47)** Once the 10 minutes are up or you solve the challenge, go to the next movie and see how I solved the same challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), finally, (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Create tag indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=8)** Hopefully, you are successful in solving this challenge.
>
> **[0:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=11)** Now, let me show you how I solve the same challenge.
>
> **[0:13](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=13)** The key here is we already solved this challenge previously.
>
> **[0:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=17)** We already built the category indexes, and the tag indexes are exactly the same.
>
> **[0:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=23)** The only difference is we're querying tags instead of categories.
>
> **[0:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=27)** Let me show you what I mean.
>
> **[0:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=28)** In GraphiQL, I've set up the query we're using to pull out all the categories and all the posts inside them.
>
> **[0:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=34)** We're querying allWpCategory and then providing a bunch of information.
>
> **[0:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=37)** Now, if I just change this query from allWpCategory to allWpTag, and run the exact same query, we get the exact same type of data in the exact same structure.
>
> **[0:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=47)** Meaning we can take the original code we brought for categories, duplicate it, and just make it point at tags instead, and the challenge is solved.
>
> **[0:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=55)** So let's do just that.
>
> **[0:57](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=57)** Start off by stopping gatsby develop 'cause we don't need it to run right now.
>
> **[1:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=63)** Then, I'll go into gatsby-node and find my catQuery.
>
> **[1:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=66)** It's right here.
>
> **[1:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=67)** I'll copy the entire catQuery, and just paste it back in below, and rename it to tagQuery.
>
> **[1:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=76)** Then, I'll query allWpTag, instead of category.
>
> **[1:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=79)** And that gives me all the data I need.
>
> **[1:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=81)** Then, I'll scroll to the bottom and find where I created the paginated category pages, and just copy that entire function.
>
> **[1:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=87)** Again, paste it in below and change the naming.
>
> **[1:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=90)** So paginated tag indexes.
>
> **[1:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=93)** And here, I need to change every reference to categories or category to tag instead.
>
> **[1:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=99)** So make sure you change all of them.
>
> **[1:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=101)** I keep forgetting to change some of them and then everything breaks.
>
> **[1:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=104)** And there's a key point here.
>
> **[1:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=105)** Don't use the Shift + Command + L function here because then you'll also change the function above, and you don't want to do that.
>
> **[1:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=112)** So here, I'm just going to do this manually.
>
> **[1:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=116)** tags, tagQuery, tags, tag,
>
> **[2:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=126)** and here tag, here tag, here tag, tagID, tagName, tag, and tag.
>
> **[2:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=143)** So now, if I highlight category up here, there shouldn't be any, well, there's that one.
>
> **[2:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=148)** Let's make that tag indexes and that's it.
>
> **[2:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=151)** So now, there's no reference to categories, everything is tags here.
>
> **[2:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=156)** Good. Then, I need to build a template for this.
>
> **[2:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=159)** And since I already have the categories template, I can simply copy the categories template.
>
> **[2:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=163)** Paste it back into the same folder.
>
> **[2:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=166)** Then rename this template, tags, so that it matches with the name I referenced here.
>
> **[2:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=173)** And then inside the tags, I am going to rename the component to TagIndex.
>
> **[3:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=181)** Then I'll rename any place I use catName.
>
> **[3:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=183)** So again, Shift + Command or Control + L to tagName.
>
> **[3:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=189)** And there it says category here.
>
> **[3:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=192)** So I need to change that to tag.
>
> **[3:15](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=195)** And down here to tag.
>
> **[3:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=198)** And then scroll to the bottom, find my query.
>
> **[3:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=200)** Here, catID needs to be changed to tagID.
>
> **[3:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=206)** And we are filtering for tags, not categories.
>
> **[3:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=210)** So that should actually be it.
>
> **[3:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=212)** So I'll save this and boot up gatsby develop again.
>
> **[3:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=215)** Everything worked correctly.
>
> **[3:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=216)** That means I can go back to my posts.
>
> **[3:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=218)** Here, I'll go look for that old post that we've been looking at many times before, the one that's called Edge Case: Many Categories.
>
> **[3:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=224)** Because next to that one is one called Edge Case: Many Tags.
>
> **[3:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=228)** And here we have a bunch of tags.
>
> **[3:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=230)** So now we can go in and check to make sure that the tag indexes work.
>
> **[3:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=233)** And look, they do.
>
> **[3:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=234)** Everything is working the way it's supposed to.
>
> **[3:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=236)** We even have navigation, if that's necessary.
>
> **[3:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/solution-create-tag-indexes?u=76281980&t=238)** And we now have both category indexes, tag indexes, and post indexes.

> [!info]- Semantic Content
>
> **Code Identifiers:** allwpcategory (2), allwptag (2), catquery (2), tagquery (2), tagid (2)
> **Code Keywords:** let (4), function (3), case: (2), this. (1)
> **CLI Commands:** make (4), find (3), node (1)
> **Exercise Files:** template (4)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Custom Post Types and Taxonomies

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Add custom post types and taxonomies
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=0)** - [Instructor] In advanced WordPress development, it's common to extend the functionality of WordPress by adding new Custom Post Types, and custom taxonomies, and custom fields, and custom forms, and eCommerce features, and a lot of other things.
>
> **[0:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=12)** And all of this data can be exposed through the GraphQL API as long as we tell the GraphQL API that the data exists in the first place.
>
> **[0:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=20)** In this chapter, I want to briefly touch on how this works so you can see how, once you get it working, it works the same way as all the other data inside WordPress.
>
> **[0:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=29)** In this example, I've created a new Custom Post Type called Books and populated with three books.
>
> **[0:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=34)** The Book's Custom Post Type has two custom taxonomies called Genre and Writers, and for each book we can apply as many Genres and as many Writers as we want.
>
> **[0:45](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=45)** I've set this all up using the popular Custom Post Type UI plugin.
>
> **[0:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=50)** This plugin allows you to set up a Custom Post Type internally in WordPress without writing any code.
>
> **[0:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=54)** The output of this plugin is exactly the same as if you wrote a custom plugin for adding your Custom Post Types.
>
> **[1:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=61)** So, in the end, the data looks the same, it's just a question of whether you build it inside WordPress or you build it in code on the outside.
>
> **[1:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=68)** But here's the thing.
>
> **[1:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=69)** If I go to GraphiQL now and scroll through the Explorer, you'll see, even though I have a new Custom Post Type and two new custom taxonomies, they're not featured here in the list under the Explorer.
>
> **[1:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=80)** There's no way for me to use GraphiQL to gain access to any of this data yet.
>
> **[1:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=86)** That's because, even though the Custom Post Types exist, we haven't told WordPress that we want to expose them to the GraphQL interface yet.
>
> **[1:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=94)** If you've created your Custom Post Types and taxonomies from scratch in your own code, you can easily expose them to GraphQL by simply setting the show_in_graphql option to true and then providing the graphql_single_name and graphql_plural_name.
>
> **[1:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=107)** This is very similar to how you would expose content to the REST API inside WordPress.
>
> **[1:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=112)** If, on the other hand, you're using a plugin like the Custom Post Type UI plugin, there's a good chance that this feature's already built-in or that there's a second plugin you can install to add this feature on.
>
> **[2:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=123)** In the case of Custom Post Types UI, they've now added in this feature.
>
> **[2:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=127)** So if I go in to edit my existing Post Types here, you'll see this is the Books Post Type, and if I scroll all the way to the bottom of this page you'll see, right here, the Custom Post Types UI plugin is interacting with the WPGraphQL plugin to give us this option, Show in GraphQL.
>
> **[2:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=145)** So I'll set that to True, then I get to choose the GraphQL Single Name and Plural Names.
>
> **[2:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=151)** These are what's going to be featured in the Explorer in GraphiQL.
>
> **[2:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=154)** I'll just leave them at default and click Save Post Type.
>
> **[2:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=158)** Then I'll do the same with my taxonomies.
>
> **[2:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=160)** Go into each taxonomy, first Genres, scroll to the bottom, Show in GraphQL, set to True, and accept the default names, Save.
>
> **[2:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=170)** And then Writers, same thing, scroll to the bottom, set to True, accept the default names, Save Taxonomy.
>
> **[2:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=179)** So now the data is exposed through GraphQL, but I still can't see it in my Explorer because we have to get Gatsby to update all its data.
>
> **[3:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=187)** So I'll stop gatsby develop, then run gatsby clean.
>
> **[3:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=192)** I do this anytime I change the data inside WordPress to ensure we get a fresh new set of data.
>
> **[3:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=197)** And then, finally, I'll run gatsby develop again, and this will pull in all the new data including my new Book Post Type and the new taxonomies.
>
> **[3:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=206)** That will make them available inside the GraphQL interface.
>
> **[3:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=210)** When the process is complete, and I go back to GraphiQL, you'll see I now have new entries, allWpBook for all books.
>
> **[3:38](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=218)** Scrolling further down, wpBook for the single books, allWpGenre, and allWpWriter, and wpGenre and wpWriter for the two taxonomies.
>
> **[3:49](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=229)** That means I now have the same type of access to this content as I did to any other content on the site.
>
> **[3:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=235)** I can go into allWpBook, go to the edges, go to the nodes, see all the same information we saw for Posts, and I can do the same thing for our new custom taxonomies.
>
> **[4:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/add-custom-post-types-and-taxonomies?u=76281980&t=246)** New content Types inside WordPress, new content Types in GraphQL, meaning new content Types in Gatsby.

> [!info]- Semantic Content
>
> **Code Identifiers:** allwpbook (2), ecommerce (1), show_in_graphql (1), graphql_single_name (1), graphql_plural_name (1)
> **Code Keywords:** interface (2), if, (1), type, (1), type. (1), finally, (1)
> **Env Vars:** api (3), rest (1)
> **UI Navigation:** go to (3)
> **Prerequisites:** set up (1), install (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)

#### Query custom post types and taxonomies in GraphQL
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=0)** - [Instructor] You can probably guess what I'm about to say now because I've repeated it several times already.
>
> **[0:04](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=4)** In the context of Gatsby, WordPress is just another GraphQL data source.
>
> **[0:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=9)** And the content that comes from WordPress is structured and formatted in a specific way to make it easy and consistent to access.
>
> **[0:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=17)** Earlier in the course, we queried posts and pages in detail and now that we've created a new custom post type, that custom post type matches the content model of those posts and pages.
>
> **[0:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=28)** Let me show you what I mean.
>
> **[0:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=29)** Here we have a standard query for allWpPost.
>
> **[0:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=32)** We go into the edges, get the node, and then look for the database ID and the title for the post and out we get a list of all the available posts on the site.
>
> **[0:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=41)** We can go into the Explorer, find allWpBook and make the exact same query, edges node databaseId and title.
>
> **[0:53](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=53)** When we run this query we first get a list of all the posts with structured data.
>
> **[0:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=59)** Then scrolling far enough down, we get a list of all the books with the same structured data.
>
> **[1:06](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=66)** And here you see the data structure is identical between the two.
>
> **[1:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=71)** That's because when you build a new custom post type you're saying, hey, take the existing custom post type and build a new version of it.
>
> **[1:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=78)** And then you can toggle on or off all the features within it.
>
> **[1:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=81)** So you can say should this custom post type have a featured image or not?
>
> **[1:24](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=84)** Should it have categories or not?
>
> **[1:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=86)** Should it have tags or not?
>
> **[1:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=87)** Should it have comments?
>
> **[1:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=88)** And all of these things dictate what the data is when it gets stored and what data is available to us through GraphQL.
>
> **[1:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=95)** But the structure of the data matches what we've worked with previously.
>
> **[1:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=100)** And that means once you have a new custom post type and new taxonomies, creating pages for the custom post type, creating indexes for the custom post type, creating pages and indexes for those taxonomies works exactly the same way it did with posts, pages and categories and tags.
>
> **[1:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=118)** The only thing that changes is the type of data you're querying.
>
> **[2:02](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=122)** So instead of creating an index for all posts by querying allWpPost, you can make an index for all books by querying allWpBook.
>
> **[2:11](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=131)** The rest of the code stays almost identical depending on the data that's available.
>
> **[2:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=136)** And that is the core premise of all the work we've been doing so far.
>
> **[2:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/query-custom-post-types-and-taxonomies-in-graphql?u=76281980&t=140)** Once you understand how to pull data from WordPress into GraphQL and then from GraphQL into Gatsby, the consistency of the data models allows us to do the same operation on pretty much any kind of data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), node (2), find (1)
> **Code Identifiers:** allwppost (2), allwpbook (2), databaseid (1)
> **Code Keywords:** type, (3), let (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** toggle (1)
> **Speakers:** - [instructor] (1)


### 8. Considerations When Using WordPress and Gatsby

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What to do about Blocks (Gutenberg)
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=0)** - [Instructor] Working with WordPress content in Gatsby, we have to address the block-sized elephant in the room, the block editor, also known as Gutenberg.
>
> **[0:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=7)** When we create content in WordPress, blog posts, pages, custom post types or anything else, we're using the block editor and the block editor allows the creator to impose stylistic choices onto each individual block of content within that overall content.
>
> **[0:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=21)** You can see an example of this in this post, block category common.
>
> **[0:25](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=25)** If we scroll down here, we have a piece of text that's right aligned.
>
> **[0:27](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=27)** Then we have a piece of text that has a drop cap, then a central line piece of text.
>
> **[0:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=32)** We have some bigger texts, some much bigger texts, some texts with a colored background.
>
> **[0:36](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=36)** There's some layout blocks being used here to create a grid of images.
>
> **[0:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=39)** The list goes on.
>
> **[0:41](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=41)** All this block information is stored in the HTML for each individual post or page and you can see that on the back end of WordPress by switching the editor from visual editor to code editor.
>
> **[0:51](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=51)** Here, each block starts and ends with a comment that specifies what block it is and some of these comments will have additional stylistic information.
>
> **[0:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=58)** For example, align right, which translates into a class, has text align right.
>
> **[1:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=63)** Here, the size.
>
> **[1:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=65)** So drop cap true and font size medium translates to has drop cap, has medium font size.
>
> **[1:10](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=70)** And if we scroll further down, if there's custom sizing for example, we get style typography, font size 46 which translates to style font size 46.
>
> **[1:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=81)** Now here's the thing.
>
> **[1:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=82)** When this content is queried from Gatsby, we don't get these comments.
>
> **[1:26](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=86)** Instead, we just get the rendered HTML.
>
> **[1:29](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=89)** So here you see the text itself.
>
> **[1:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=91)** You see the classes, has text align right.
>
> **[1:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=94)** You see the inline styling, for example, down here, font size 46 pixels, but much of the information has been lost.
>
> **[1:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=100)** There is no information telling you, hey, this is a block.
>
> **[1:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=103)** This is a type of block and this is what should happen to that block.
>
> **[1:46](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=106)** As a result, when we look at the same post in Gatsby, the styling is mainly lost and we don't have these features that we expect.
>
> **[1:54](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=114)** This italic paragraph is not right aligned.
>
> **[1:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=116)** This paragraph is not centered.
>
> **[1:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=118)** The text spacing here is all wrong.
>
> **[2:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=120)** This piece of text is not bigger than the rest of the text.
>
> **[2:03](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=123)** Scrolling through, you'll see things are not looking the way you expect.
>
> **[2:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=127)** Bottom line, the things you do in the WordPress block editor do not automatically carry over into Gatsby, mainly because of the weird way WordPress makes us this style and block data into the HTML content.
>
> **[2:18](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=138)** So how do we deal with this?
>
> **[2:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=140)** The unfortunate answer is there's no clean, straightforward solution here.
>
> **[2:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=143)** That's mainly because WordPress doesn't have a proper API for integrating with blocks.
>
> **[2:28](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=148)** And while that may be coming sometime in the future, it is not here yet and work that is ongoing has not born any kind of meaningful fruit yet.
>
> **[2:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=157)** So we need to find a different solution.
>
> **[2:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=159)** Now one possible solution is the work that's being done in WP GraphQL to extended tools to include a block editor.
>
> **[2:47](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=167)** That means when you query a post or a page or something that has blocks, you'd be able to also query the blocks individually, effectively get an array of all the available blocks in the current post and then you can render out the properties, the styles or any other information for each of those blocks, then apply a separate component to each of them and render it all out, inside your Gatsby application.
>
> **[3:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=187)** But this adds an enormous level of complexity because you're no longer working with a content blob.
>
> **[3:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=192)** You're working with individual blocks that all have to be treated separately for things to work.
>
> **[3:17](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=197)** So while this might alleviate some of the pain, it'll also add a lot of complexity to your work.
>
> **[3:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=203)** So yeah, even with this WP GraphQL block editor, you have to be very aware of these limitations, use blocks in a conservative way and avoid creating situations for the Gatsby front end.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=214)** That's it.
>
> **[3:34](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=214)** There is one thing you can do to, if not alleviate, then at least reduce this friction.
>
> **[3:39](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=219)** WordPress ships with default CSS for blocks and you can import that CSS into your Gatsby site so the expected styling applied to blocks carries over.
>
> **[3:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=228)** Here's how you do that.
>
> **[3:50](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=230)** That CSS sits inside a giant JavaScript library called @wordpress/block-library.
>
> **[3:56](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=236)** This is actually a library for building Gutenberg blocks or building WordPress blocks and our purposes are not that at all, but it contains the default CSS we need to use.
>
> **[4:07](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=247)** And because Gatsby renders all the content before we publish it, it's okay to download this giant library and just use a small part of it.
>
> **[4:14](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=254)** So that's what we're going to do.
>
> **[4:16](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=256)** I'll copy out the name of the library.
>
> **[4:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=259)** Then I'll stop my build process.
>
> **[4:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=263)** And here, I'll say npm install --save and then paste in wordpress/block-library.
>
> **[4:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=270)** This is the giant library so it'll take a long time to install.
>
> **[4:32](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=272)** I'm just going to close my terminal in between.
>
> **[4:35](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=275)** Now that we have the library installed, we're going to use it in the layout component.
>
> **[4:40](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=280)** And all we're doing here is importing a style sheet.
>
> **[4:43](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=283)** So where I'm already importing some styles here, I'll say import and then @wordpress/block-library/build-style/style.css.
>
> **[4:59](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=299)** Save that, reopen the terminal and run Gatsby Develop.
>
> **[5:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=305)** This new style library we're using includes all these custom styles that WordPress has created like has text align right.
>
> **[5:12](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=312)** And that means when we render this out in Gatsby again, some of this stylistic information is now translated properly.
>
> **[5:19](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=319)** This paragraph is right aligned.
>
> **[5:21](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=321)** We have a drop cap.
>
> **[5:22](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=322)** This paragraph is centered.
>
> **[5:23](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=323)** Some of the text is bigger than it was before but you can see there are still major gaps in the styling here that we need to address separately.
>
> **[5:31](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=331)** So you can import the WordPress styles.
>
> **[5:33](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/what-to-do-about-blocks-gutenberg?u=76281980&t=333)** That gives you a starting point, but you still have to go through and test all the default components to make sure everything is working properly and that the blocks and how they are presented in the WordPress backend, translate to how they're presented in your Gatsby front end.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), html (3), api (1)
> **CLI Commands:** find (1), npm (1), make (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** for example (3)
> **Code Keywords:** else, (1), class, (1)
> **Tools:** terminal (2)
> **Prerequisites:** install (2)
> **File Paths:** wordpress/block-library/build-style/style.css (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=0)** - [Morten] That's it, you reached the end of this course, and the beginning of your own journey with Gatsby and WordPress.
>
> **[0:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=5)** Before you go, here are a few important websites and resources to keep in mind as you get started.
>
> **[0:09](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=9)** First, for information on Gatsby, including starters, plug-ins, documentation, webinars, conferences, community, anything Gatsby related, check out [gatsbyjs.com](https://gatsbyjs.com).
>
> **[0:20](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=20)** For information of about WP GraphQL, including in-depth tutorials, documentation, and explanations on how to use and extend this interface, check out [wpgraphql.com](https://wpgraphql.com).
>
> **[0:30](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=30)** It may also be a good idea to join the WPGraphQL Slack channel to connect with other developers using WordPress and Gatsby in combination.
>
> **[0:37](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=37)** For information about how to use Gatsby source WordPress, check out the dedicated tutorials at the plugin page and in the plugin repository.
>
> **[0:44](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=44)** And finally, because Gatsby is built on React, it can do anything React can do.
>
> **[0:48](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=48)** To learn more about React, we have a long list of courses in our library.
>
> **[0:52](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=52)** All you have to do is search for React and get started learning.
>
> **[0:55](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=55)** I love hearing from you about how you use what you've learned in my courses.
>
> **[0:58](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=58)** You can find me on Twitter @mor10, 'cause that's my name.
>
> **[1:01](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=61)** And I'm all also on LinkedIn sharing content information and useful links all the time.
>
> **[1:05](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=65)** Now, all that's left for me to say is (indistinct).
>
> **[1:08](https://www.linkedin.com/learning/building-a-headless-wordpress-site-with-gatsby-15801541/next-steps?u=76281980&t=68)** Go build some amazing sites using WordPress and Gatsby, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), go build (1)
> **Code Keywords:** interface (1), finally, (1)
> **URLs:** [gatsbyjs.com](https://gatsbyjs.com) (1), [wpgraphql.com](https://wpgraphql.com) (1)
> **Cross-References:** in the next (1)
> **Tools:** slack (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [morten] (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/headless-wordpress-gatsby-3022691)

## Skills Covered

- Wordpress Development
- GatsbyJS

## Path Context

### In [[Advance Your Skills in WordPress]]
← [[WordPress- REST API]] | **8 of 8**

## Appears In

- [[Advance Your Skills in WordPress]]

## Related Courses

_Courses sharing skills:_

- [[WordPress- Staging a Site]] — Wordpress Development
- [[Creating Block Patterns in WordPress]] — Wordpress Development
- [[Building a WordPress Membership Site with Ecommerce]] — Wordpress Development
- [[WordPress- Everything about Plugins]] — Wordpress Development
- [[WordPress Essential Training]] — Wordpress Development

---

[↑ Back to top](#)