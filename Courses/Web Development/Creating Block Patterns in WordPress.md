---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: creating-block-patterns-in-wordpress
url: "https://www.linkedin.com/learning/creating-block-patterns-in-wordpress"
duration_minutes: 93
duration: 1h 33m
level: Beginner
updated: 10/22/2021
learners: 5709
skills:
  - Wordpress Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFrRk553AGgPQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634752427940?e=2147483647&amp;v=beta&amp;t=WKd07130_YEU3-0xbrfcsYRfWMOFLp0Vws6XIPq7Fpg"
linkedin_topic: Web Development
learning_paths:
  - '[Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)'
prev_courses:
  - '[HTML Essential Training](HTML%20Essential%20Training.md)'
next_courses:
  - '[WordPress- Accessibility](WordPress-%20Accessibility.md)'
path_nav: '[{"path":"Getting Started with WordPress","position":6,"total":10,"prev":"HTML Essential Training","next":"WordPress- Accessibility"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/wordpress-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Creating%20Block%20Patterns%20in%20WordPress.md)

![Creating Block Patterns in WordPress](https://media.licdn.com/dms/image/v2/C560DAQFrRk553AGgPQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1634752427940?e=2147483647&amp;v=beta&amp;t=WKd07130_YEU3-0xbrfcsYRfWMOFLp0Vws6XIPq7Fpg)

# Creating Block Patterns in WordPress

> WordPress theme development is changing, and block patterns are at the heart of it. With the block editor and full site editing, there will be less reliance on coded templates and more focus on flexible layouts. That's where block patterns come in. In this course, experienced course developer Joe Casabona shows you how to take advantage of block patterns to create more flexible WordPress without n

> [LinkedIn Learning](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress) | 1h 33m | Beginner | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [What are block patterns and why are they important?](#what-are-block-patterns-and-why-are-they-important)
  - [What you should know](#what-you-should-know)
  - [How this course works](#how-this-course-works)
- [**1. How to Make Block Patterns**](#1-how-to-make-block-patterns) (8 videos)
  - [Block patterns vs. reusable blocks](#block-patterns-vs-reusable-blocks)
  - [Adding block patterns to WordPress sites](#adding-block-patterns-to-wordpress-sites)
  - [Making block patterns without code](#making-block-patterns-without-code)
  - [Coding block patterns overview](#coding-block-patterns-overview)
  - [What is a JSON encoder?](#what-is-a-json-encoder)
  - [How to style block patterns with CSS](#how-to-style-block-patterns-with-css)
  - [Block pattern categories](#block-pattern-categories)
  - [Setting up the block pattern plugin](#setting-up-the-block-pattern-plugin)
- [**2. The Block Patterns Cookbook**](#2-the-block-patterns-cookbook) (10 videos)
  - [Call to action](#call-to-action)
  - [Pricing table](#pricing-table)
  - [Styling the pricing table](#styling-the-pricing-table)
  - [Author bio box](#author-bio-box)
  - [Contact info card](#contact-info-card)
  - [Posts listing with Query block](#posts-listing-with-query-block)
  - [Website masthead](#website-masthead)
  - [Currently Listening To widget](#currently-listening-to-widget)
  - [Hero section](#hero-section)
  - [Content upgrade](#content-upgrade)
- [**3. Refactoring**](#3-refactoring) (2 videos)
  - [Adding your own block pattern category](#adding-your-own-block-pattern-category)
  - [A slightly clever refactor](#a-slightly-clever-refactor)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What are block patterns and why are they important?](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/what-are-block-patterns-and-why-are-they-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/what-are-block-patterns-and-why-are-they-important?u=76281980&t=0)** - [Joe] A major feature that has come to the [WordPress](../../Skills/Web%20Development/WordPress.md) Block Editor is block patterns. This feature allows theme and plugin developers to create pre-designed sets of blocks so that you can change the content. Think of these as templates for the block editor. The real power of these block patterns is that there's a little to no code required and they could be added via the themes, plugins, or the block patterns directory. There are lots of new features designed to reduce the amount of code needed to customize a WordPress website coming in the next few years. Block patterns will be at the center of these because they are flexible and portable. Understanding how to use and make block patterns will allow you to create great content consistently. And that's what we'll cover in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [joe] (1)

#### [What you should know](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/what-you-should-know?u=76281980&t=0)** - [Instructor] When it comes to block patterns, there are a few things you need to know. The first is how to use [WordPress](../../Skills/Web%20Development/WordPress.md) and the block editor. We'll be working primarily with the WordPress block editor. If you're unfamiliar, you can check out the WordPress Essentials course in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. However, to create block patterns, you still need to add a bit of code. While we won't go super deep, you should know a small amount of [PHP](../../Skills/Software%20Development/PHP.md). My PHP for WordPress course should do the trick. We might also use some CSS to style some of the blocks and that's about it. Everything else will be covered in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [PHP](../../Skills/Software%20Development/PHP.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** php (2), css (1)
> **CLI Commands:** php (2)
> **Speakers:** - [instructor] (1)

#### [How this course works](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/how-this-course-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/how-this-course-works?u=76281980&t=0)** - [Instructor] This course is broken up into three parts. The first part covers how to create block patterns with and without code. We'll also go over what they are and important information about things like block pattern categories. The second part of this course is a cookbook-style section where we create and add block patterns to our plugin. Finally, we'll improve and refactor the plugin so that it's ready for prime time. Some other important info, we'll be working exclusively with core blocks in [WordPress](../../Skills/Web%20Development/WordPress.md). No ad-ons or additional packs. However, since this is our own plugin, adding CSS to style the blocks isn't off the table. In fact, we will be adding CSS to style some of our block patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **Env Vars:** css (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. How to Make Block Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Block patterns vs. reusable blocks](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/block-patterns-vs-reusable-blocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/block-patterns-vs-reusable-blocks?u=76281980&t=0)** - [Instructor] If you're at all familiar with the block editor you'll know there's already a feature similar to block patterns called reusable blocks. So, what's the difference? Well, reusable blocks can be created using the block editor and then, saved by the user. These blocks are much more content driven than design driven, plus reusable blocks are essentially global blocks. When you change a reusable block in one place, it will change everywhere. So, you might have a Meet the Author block. You'd save this as a reusable block. And then, when you change it in one place, it will change everywhere. It has a headshot, a bio, and social links. So, when the bio or headshot changes, you'd want that to change everywhere, so that you don't have to manually change it on every page. Block patterns are focused much more on the design than the actual content. When you add a block pattern to a page it's because you want that content laid out in a certain way. Block patterns are much more like templates. You use them for the layout, but not the actual content. It's also worth noting that users can add them without some code or an additional plugin. So, let's say, you want a recipe block pattern. You always want this information laid out the same way, but you wouldn't want the same information every time. And you wouldn't want a change on one recipe
>
> **[1:37](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/block-patterns-vs-reusable-blocks?u=76281980&t=97)** to force the change on another recipe. Finally, block patterns can also be used for reusable blocks, so you start with a block pattern, change the content, and then create a reusable block. This is not the case the other way around.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Adding block patterns to WordPress sites](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/adding-block-patterns-to-wordpress-sites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/adding-block-patterns-to-wordpress-sites?u=76281980&t=0)** - [Instructor] When it comes to adding your own blocks to [WordPress](../../Skills/Web%20Development/WordPress.md) sites, there are a couple of ways to do it, and both involve code. The first is through your own theme. You can create block patterns to bundle with the theme. The big benefit here is you can leverage your own theme's CSS to really make those block patterns stand out. Since you're familiar with the styles, you can create blocks that lend themselves well to templates you've created. Both Twenty Twenty-One and [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) do this very well. The second method is through a plugin. If you're creating your own block patterns pack that you want decoupled from a theme, and therefore more portable to be used with any theme, this is the way to go. There are a couple of things to be mindful of. You don't want to create dependencies on blocks that a user might not have installed or create your own styles that override default fonts and colors, though some CSS is fine. Your goal here is to make sure your block patterns look good with most themes. We will be building a custom plugin in this course. One more thing. These methods focus fully on adding your own block patterns to WordPress websites. There is one more method for you to get block patterns and that's the official Block Patterns Directory. You can select, copy, and then paste. This is also a good place to find inspiration. So in the Block Patterns Directory
>
> **[1:36](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/adding-block-patterns-to-wordpress-sites?u=76281980&t=96)** over at [wordpress.org/patterns](https://wordpress.org/patterns), you can find a block pattern that you like, click the copy button, and then paste it directly into your WordPress Editor. The pattern will come over perfectly and then you can make modifications to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** css (2)
> **URLs:** [wordpress.org](https://wordpress.org) (1)
> **Speakers:** - [instructor] (1)

#### [Making block patterns without code](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/making-block-patterns-without-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/making-block-patterns-without-code?u=76281980&t=0)** - [Narrator] Before we jump into creating our own block patterns, there is a way you can make block patterns without writing any code. And that's using a plugin. There's a plugin called Block Pattern Builder. Well, there's actually two that function virtually the same way, except one allows you to categorize the block patterns. So that's the one we'll go with. From your [WordPress](../../Skills/Web%20Development/WordPress.md) Dashboard, go to plugins, add new, then search for Block Pattern Builder. Once the search results come back, we're going to want the Block Pattern Builder plugin, built by BlockMeister, we'll click install, then activate. When we do that, you'll see a new area of the Dashboard menu called Block Patterns, and we can go to add new, and this will give us the ability to create our own block patterns. So let's create a simple podcast episode Embed We'll call it Podcast Episode Embed, and then we'll first start with a group block. We'll add a spacer so that we have some padding. Then we'll add the Spotify Embed and here we'll need to enter a URL. So I'll just grab one of my more recent episodes. You can see in the Spotify web player, If I do a search for how I built it, my show will come up and there is the trailer episode. So if we click the three dots here, we can click share, then copy episode link,
>
> **[1:37](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/making-block-patterns-without-code?u=76281980&t=97)** and then we can paste that link in the embed area. And the episode is embedded. Next, we'll add some buttons for subscribe. Now we won't actually add the links. We will just add the text. So we'll say Apple Podcasts, Spotify, Overcast, and RSS. And then finally, we'll add one more spacer and then we'll go up to the group. We'll add a background color. We will make it wide. And then we will add the categories. Now we'll learn about category soon, but this is buttons. So we'll select that one. And then we'll click publish. Once we do that, we can go back to posts, add new. And if we click the blue block, insert button here and go under patterns and then buttons, you'll see our new block pattern has been added to the patterns inserter. And when we click it, it will automatically get added to our editor. Now you might be wondering why we don't just use this to create all block patterns.
>
> **[3:10](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/making-block-patterns-without-code?u=76281980&t=190)** And that's a great question. The main reason is we're building a dependency on a third party plugin for important design elements. If that plugin ever goes away or changes, it might impact our patterns. And while that seems unlikely, we want to make sure we're reducing the amount of dependencies we have, especially if we're building this for our own themes or we intend to make commercial use of patterns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** make (4)
> **Env Vars:** url (1), rss (1)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Coding block patterns overview](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/coding-block-patterns-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/coding-block-patterns-overview?u=76281980&t=0)** - [Instructor] When it comes to creating your own block patterns, there are a few steps to the process. We'll outline them here, then build our own plugin. First, as noted earlier, there are two places you can add block patterns, in the theme and in the plugin. If you are adding your block patterns to the theme, I like the format of the default [WordPress](../../Skills/Web%20Development/WordPress.md) theme. You create an inc or inc folder. And in that have a block-patterns.[PHP](../../Skills/Software%20Development/PHP.md) file where all of your block patterns will live. In the functions.php file of your theme, use require_once to include the block-pattern.php file. And then enqueue any pattern-specific CSS files that might not already be in your theme CSS. If you're approaching this through a plugin, like we are, I'd recommend a very similar approach. Now you might want a separate file to define the patterns, depending on how many patterns you have. And we'll explore all of the setup when we create and then refactor the plugin. But aside from that, there is a process to creating each pattern that we'll dive deeper into. First, you'll want to create the block pattern inside the block editor, then select all the block patterns that are part of the pattern and copy them. You can do this by selecting right-clicking
>
> **[1:33](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/coding-block-patterns-overview?u=76281980&t=93)** and then choosing Copy from the menu or by pressing command-C or control-C depending on your operating system. Once you select the blocks that are part of the pattern, you're going to want to use a [JSON](../../Skills/Web%20Development/JSON.md) encoder to convert the markup to a PHP-friendly format. We'll look at that in another video. And then you'll use the register_block_pattern function to register the block pattern. Save your block pattern and your files and repeat for each block pattern you create. Now you can also register your own categories using the register_block_pattern_category function, and we'll do that in our plugin as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (4), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** php (4)
> **Env Vars:** css (2), json (1), php (1)
> **File Paths:** block-patterns.php (1), functions.php (1), block-pattern.php (1)
> **Code Identifiers:** require_once (1), register_block_pattern (1), register_block_pattern_category (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)

#### [What is a JSON encoder?](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/what-is-a-json-encoder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/what-is-a-json-encoder?u=76281980&t=0)** - [Instructor] One crucial step in the process of creating our own block patterns is the [JSON](../../Skills/Web%20Development/JSON.md) Encoder. So, let's take a quick look at what that is and why it's so important. JSON Encoding is a way of taking a block of text and removing or replacing characters that could cause our code to break. Most commonly in our block patterns, this will be new lines and double quotes, but it's not just limited to those. A great tool for JSON Encoding can be found at [jsonformatters.org/json-escape](https://jsonformatters.org/json-escape). If we use the block pattern from a previous video, we can click on the group, then click on the Options icon. Select Copy, and then go to the JSON Formatter. We can paste that block code into the left side then, click Escape. You can see, in the side by side, that all of the spaces have been replaced with a \n, like we see here, and the double quotes have been replaced by a \". Now the block pattern code is ready to be used in [PHP](../../Skills/Software%20Development/PHP.md), or any other programming language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Env Vars:** json (4), php (1)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** php (1)
> **URLs:** [jsonformatters.org](https://jsonformatters.org) (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [How to style block patterns with CSS](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/how-to-style-block-patterns-with-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/how-to-style-block-patterns-with-css?u=76281980&t=0)** - When it comes to styling elements added to [WordPress](../../Skills/Web%20Development/WordPress.md), you likely have to do some diving into the code to see what classes and styles are already being applied. As we build out our block patterns, the cleanest way to style them is a two-pronged approach. We can group all of the blocks together using some grouping block. This could be the group block itself or columns, or even the cover block. Each of these encapsulate multiple blocks into a single area. Then we can apply a custom CSS class to that entire group. We can target that using the grouping blocks class. So if we use the group block, that would be WP-block-group. whatever the class we applied is. So let's look at a quick demo. Here you can see we have our podcast block pattern. This is already in a group, so if I click the cog icon, I can go down to advanced and apply in additional CSS class. We'll call this podcast embed. Then we can publish this page and view the post. Now in order for us to style this, we can add the CSS to the customizer. So I'll click customize and then click additional CSS. And just to confirm our classes are being applied appropriately I'm going to use [Google](../../Glossary/Service/Google.md) Chrome's web developer tools, specifically the inspector.
>
> **[1:32](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/how-to-style-block-patterns-with-css?u=76281980&t=92)** By right clicking on the pattern, then clicking inspect. You can see that our div, our block pattern has the WP block group class and it also has the podcast embed class. So to target this, we would write .WP-block-group and then .podcastembed to make it more specific. And then we can add a, let's say, padding or margin. So we could say padding, 40 pixels, margin, 100 pixels, just to make it obvious that we are targeting this. If we really want to change the background color, we would need to do something like background red, but let's not do that. And we can also target elements inside the block pattern. So if I click on this button, I'll click inspect. This is a block button, it looks like, in the block buttons div. So let's see if we could just target block button first. I will grab our main class and then WP block button. Maybe we want some uniformity here. And we can say background blue. It looks like we are not being specific enough here.
>
> **[3:06](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/how-to-style-block-patterns-with-css?u=76281980&t=186)** So we probably need the anchor class here. I'll just copy and paste that. And then if we really want to see how the styles are being applied we can look at the styles. So it looks like we have this full class here, very specific and then background color is the property being applied. So if we wanted to style this, we would probably need the important tag. Again, we want to be a little judicious here. We can change the colors of the buttons in the block pattern but this is one example of targeting inside elements. So I'll get rid of this. I will be happy with the padding and margin we've added to our player and I will click publish. This will be our approach moving forward for each block pattern we create, regardless of if we add styles now or not. This will make our patterns easier to manage and easier to style for us or anyone using them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** css (4)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **UI Navigation:** click on (1)
> **Speakers:** - when (1)

#### [Block pattern categories](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/block-pattern-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/block-pattern-categories?u=76281980&t=0)** - [Instructor] Another important aspect of block patterns is the categories. This is how block patterns will be organized both in the block editor and on the block pattern directory. So understanding which default categories exist should help you find patterns and organize your own. The default categories are buttons. This could be any pattern that includes a button from the podcast embed example to social media buttons. Columns, which again can be any pattern broken into columns. Gallery, which is generally how images are laid out. Header, which are big heading sections. This could be specifically, styling a heading tag or creating a cover block with a heading and text in it. Text, which is anything with text in it. And query, which are patterns that use the query loop or post template block to layout posts. It's also worth noting that patterns can be in multiple categories. So if you have a columns block, that includes buttons that can go in the buttons and columns categories. You can also add your own categories using the register block pattern category function in [WordPress](../../Skills/Web%20Development/WordPress.md). This could be useful when you want to group theme or plugin block patterns together like is done in 2021 and [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md), but I wouldn't recommend inventing a bunch of new categories for one-off blocks.
>
> **[1:34](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/block-pattern-categories?u=76281980&t=94)** This could make finding blocks even more confusing. However, some categories like hero, for hero sections, do seem to be popular. Categories are definitely the best way to sort block patterns, so be sure to think about and pick the right ones.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the block pattern plugin](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/setting-up-the-block-pattern-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/setting-up-the-block-pattern-plugin?u=76281980&t=0)** - [Instructor] Let's set up our plugin. Here we have it loosely defined and the file structure is created, but we will add some important aspects to it. So first let's go through the structure real quick, we have a directory called LIL for [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning dash block dash patterns. This will be the folder our plugin lives in. We have an ink folder and inside that ink folder is LIL dash BP dash styles dot CSS. This is where our block pattern CSS will live, then we have patterns dot [PHP](../../Skills/Software%20Development/PHP.md), this is where all of our patterns will be. Then we have outside of the ink folder, the blocked dash patterns dot PHP file. This is where our plugin is defined. I've included some starter code here, which you can find in the exercise files. So we have our plugin name, creating block patterns, a URI description, version, author, name, URI, and then license and URI. We also have a set of lines here to make sure that this file is not called directly. We want this to only be called within the framework of [WordPress](../../Skills/Web%20Development/WordPress.md). We have a current plugin version, our prefix for our plugin will be LIL underscore BP or LIL dash BP, depending on the context and then we have the full plugin URL, including the trailing slash to make it easier to call some of our files.
>
> **[1:35](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/setting-up-the-block-pattern-plugin?u=76281980&t=95)** So now, let's go about defining and prepping our plugin. So here on line 28, I'm going to first add a function to enqueue our styles so, all right function, LIL underscore BP underscore add underscore styles. Parentheses, curly braces, and then I'll call WP enqueue style. We'll call this LIL dash BP dash styles and then the URL is LIL underscore BP underscore URL
>
> **[2:23](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/setting-up-the-block-pattern-plugin?u=76281980&t=143)** dot cause we need to call the actual file name, Inc slash LIL dash BP dash styles dot CSS. Now this isn't going to have any dependencies on any of the other CSS so this is the only definition we need and then we need to add the action so that our style actually gets in queued, so we'll do add underscore action, parentheses, WP and Q scripts, and then the function name LIL BP add style, so I'll just copy that here, single quote, paste and now our styles are enqueued though that file is currently empty. We will also grab our patterns file, so we'll do require once Inc slash patterns dot PHP.
>
> **[3:26](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/setting-up-the-block-pattern-plugin?u=76281980&t=206)** We'll save that, so now our plugin is ready to actually accept patterns, we can add this to our WordPress site, you can do that by zipping up the code or coding it directly on your local machine, I'll let you decide that. But if we added to our WordPress site, I created a zip file and I'm uploading it through the WordPress interface, so I'll click install now and activate, and there are no errors, but there's also nothing to see cause we haven't really added anything to the plugin yet, so we just know that so far, so good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (4), [PHP](../../Skills/Software%20Development/PHP.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** lil (9), css (4), php (3), uri (3), url (3)
> **CLI Commands:** php (3), make (2), find (1)
> **Exercise Files:** starter code (1), exercise files (1), zip file (1)
> **Prerequisites:** set up (1), install (1)
> **Speakers:** - [instructor] (1)


### 2. The Block Patterns Cookbook

[↑ Back to Table of Contents](#table-of-contents)

#### [Call to action](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/call-to-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/call-to-action?u=76281980&t=0)** - [Instructor] One of the most common elements for websites is a clear call to action. While the call to action can stay the same across every page of every website, sometimes they'll change based on the content, so having a block pattern that you can easily change the call to action to would save for a lot of time. Let's go ahead and build one out now. You can see I am in the editor here and we're going to build out a simple call to action with two columns, on the left it'll have some text, on the right it will have a button, we'll add the class and then we'll go through the process of adding it to our plugin. So the first block I'll add is the Group block, and then inside that, I'll add a Spacer so we can get some top and bottom spacing. In fact, I will duplicate that block now so that we have the two blocks here, and then right in-between, I'll add the columns block. I'll make this two columns with a 70 30 split, and inside the first column, we'll add a heading, ready to get started, click the button to schedule your free 30 minute consult,
>
> **[1:21](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/call-to-action?u=76281980&t=81)** and then on the right, we'll get a button. Schedule now. And now let's go up to our group, we'll set this as wide, and we'll do the same thing for the columns just so we have a little extra room to work with here. So wide. We'll set the vertical alignment to middle, and then we're going to want to add some styling to the group, so we'll open up our cog here, we'll set the background color, and we'll set it to a gradient just to make it stand out a little bit, so we'll pick one of the gradients just to get started, we'll make it a little bit darker, so I'll add a black point here, and actually I'll add a black point here, and then we'll add right in the middle, maybe something a little bit lighter, just to add a little bit of a glow. And then we'll need to set the text color as well, so text, set that to white and we need to change the button color. So we'll change the background of the button color so it stands out, we'll set that to white, text to black. So now we've got our simple call to action here, and we will copy this. You can see I've already created a file here
>
> **[2:55](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/call-to-action?u=76281980&t=175)** called 02-01-cta, paste that and save it, and then we'll go to the [JSON](../../Skills/Web%20Development/JSON.md) formatter, paste that same text, click Escape, copy it, and then go to our plugin code. So we'll add a new variable here called cta, we'll paste our encoded text, and then we will copy our register_block_pattern function, paste it here on line 17, and then we'll just change some of the information. So cta, the title will be Call to Action, we'll change the description to a 2-column CTA with button,
>
> **[3:40](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/call-to-action?u=76281980&t=220)** the content, we'll change to cta, the categories, we'll set to buttons and columns, and then we'll also add the keywords argument. So keywords, arrow, array, cta, call to action, and content upgrade. Now we'll save this and it's time to test. And then if we go to Patterns under Buttons, we have our call to action, it should also be under columns. Perfect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Env Vars:** json (1), cta (1)
> **Code Identifiers:** register_block_pattern (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Pricing table](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/pricing-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/pricing-table?u=76281980&t=0)** - [Instructor] A pricing table is another common pattern for sites that offer multiple payment options. We'll use the columns block and a few others to build a nice-looking pricing-table block pattern. Then we'll add some CSS. Let's get started. So the first thing I'm going to do is add the columns block. We're not going to create a group out of this one because columns are technically a grouping block, so we can style the entirety of the columns. I want these to be three equal-width columns. So I'll pick the 33/33/33. And right off the bat, I'll make sure that this is a wide width and that everything aligns to the top. So, for the first column, I'm going to add a spacer. I want to create some space here. And then we'll add the price. So I'll add some text. Maybe we'll make this a header as well. And we'll make it an H4. And this will be $29 a year. We'll call this the Basics. We'll convert this to a heading as well. This'll be the H2. We'll center-align it, and we'll bold it. And then we'll add the benefits as a bulleted list. First, we'll add a separator. So we'll want this to be Full Width. And then looking at the options here, we can change the thickness, or if it's dots.
>
> **[1:36](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/pricing-table?u=76281980&t=96)** Maybe dots will look nice here. We can also change the color if we'd like, but we'll keep it the way it is. And then we'll add the benefits. So Access to Community, Monthly Q&A Sessions,
>
> **[1:54](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/pricing-table?u=76281980&t=114)** One Private Session per Quarter. You can imagine that this is a price table for coaching. And then maybe they'll get an exclusive member's coin. All right. So we have the benefits. Then we'll add the button. Register Today. And we don't need to include a link there because there's no link to include. We'll set this to Justify Items Center. And then we will copy all of these blocks. I'll press control + C, and then inside the next column, I'll make sure to select a paragraph block, and then I'll paste. And all of this information is copied. Now, for some reason, it copied twice. We'll just delete this and the spacer as well. And then we'll make this $99 a year, and we'll call this the Growth package. Access to Community. Fix our typo here. This will be weekly Q&A sessions, one private session per month, exclusive member coin, and monthly giveaways.
>
> **[3:18](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/pricing-table?u=76281980&t=198)** And then we'll add our button again, Register Today. Again, we'll make sure that this is justified center and now we have our Growth package. And then once again, we'll copy these blocks, paste them in here. For some reason, the text keeps getting copied twice. That's okay. All right. So we have our $99 a year. Get rid of that, so everything lines up. Add our spacer back in. All right. There we go. And then we'll call this $299 a year, and we'll call this the Pro package. Access to community, weekly Q&A sessions, one private session per week, exclusive membership coin, and private [Slack](../../Skills/Software%20Development/Slack.md) channel for Pros only. Register today. Okay. So we have our columns here. This will take some finesse in the CSS, but one thing I do want to do is I think the Growth column will be the one that we want to stand out, so we will change the background color here to black. You'll notice that at least 2021
>
> **[4:50](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/pricing-table?u=76281980&t=290)** automatically changes the color of the text. We'll change the dots here, too, and the button. We want this to stand out a little bit more, so we can make it white like that. And now we have our columns. So I'll copy this, I'll add it to our raw directory,
>
> **[5:20](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/pricing-table?u=76281980&t=320)** and then we'll do the process. So we'll go to [JSON](../../Skills/Web%20Development/JSON.md) Formatter, paste the text, escape it, and then copy it, then go back to our plugin. Click Patterns. We'll add the pricing_table variable, paste our encoded pattern, and then we will copy our function again. Call this pricing-table. Add the title. "A 3-column pricing table with buttons." The content will be pricing table. That categories can be the same. And then keywords, we can actually keep CTA, call to action. We'll add pricing table. We'll save this. And now that it's added to our plugin, we're going to style it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Slack](../../Skills/Software%20Development/Slack.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** make (7)
> **Env Vars:** css (2), json (1), cta (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** pricing_table (1)
> **Cross-References:** go back to (1)
> **Tools:** slack (1)
> **UI Navigation:** go to (1)

#### [Styling the pricing table](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/styling-the-pricing-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/styling-the-pricing-table?u=76281980&t=0)** - [Narrator] With our pricing table created. Let's go ahead and add the styles. And there's one thing that we haven't done yet, and that is add a custom class to our pricing table. So let's make that the first thing we do and then update our pattern. With the column selected, we'll click the cog icon, go to advanced and we'll add the CSS class pricing dash table. We will then copy this and we'll get it encoded. And then we just need to replace the variable on line six of our plugin. So we'll save that and now let's add the styles. So we'll click publish on this. We'll go to the front end. And what we're going to do is use the customizer and then copy that CSS into our plugin. So I'll click customize, and then under additional CSS, first we'll check the block editor class. So we have WP blocks columns, and then we have our custom pricing table. So we'll start with that, WP block columns dot pricing table. And then for each individual column,
>
> **[1:36](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/styling-the-pricing-table?u=76281980&t=96)** it'll be WP block column. So we'll keep that in mind, but let's make a little more room here and let's first target the elements inside of our pricing table. So for example, each column should have a border around it to make it clearer. So WP block column, border one pixel solid, and we'll make it black. You can see that these are also set apart. They probably have some margin or padding, so maybe we want them to be a little bit closer together. So let's see, if we look at one of our columns here, it looks like the columns have a margin left to them. So, we'll say margin left zero. And now they're all a little bit closer together. We might want to add some padding to the bottom of each column as well. We could have done this with a spacer, but let's just say padding bottom 40 pixels. And now let's make our benefits a little nicer. So again, we want to double check the style here. We've got the separator,
>
> **[3:09](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/styling-the-pricing-table?u=76281980&t=189)** but this is just a standard unordered list. So we can target that using the selectors we've already written, so we'll say UL here, list style type, none. And then we'll target each list item. Maybe we'll say border bottom on PX, solid black, and then we'll get rid of any margin and we'll check the padding just by zeroing it all out. And it looks like there is no padding either. So let's go ahead and actually add some margin here, margin of 10 pixels all around, and we probably want to get rid of the margin on the unordered list and the padding on the unordered list. There we go. That looks a lot more even, so we can add maybe 20 pixels of padding on the benefits and then because our black border doesn't show up in our black column here, let's target the column. And then we'll say we use the Nth child selector child two border color and we'll make that white. So we've added a little bit more structure. It looks a little bit better, a couple of things to be mindful here as we style our blocks
>
> **[4:45](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/styling-the-pricing-table?u=76281980&t=285)** throughout this course is that these blocks are now going to have to be overridden by the theme developer. So again, we want to be a little mindful of the block patterns we're adding. We could also in our plugin have some default dials that can be overridden by CSS variables, but that's a little beyond the scope of this course. So we'll just add some default styles that could be overridden if the website owner wants to. So let's copy the styles we wrote here, get them out. We didn't use that, so we'll click publish, and then we'll go back to our plugin to the LILBP styles dot CSS file. Paste that in there and save it. And now we have a styled block pattern. Let's go ahead and test this to see how we did. Okay, so back in our editor, let's get rid of the one that we made manually. We'll update the page and refresh. And then in the patterns and columns, we see our pricing table. The styles are not being applied here, but if we click update and go back out to the front end, our styles have been applied.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Env Vars:** css (5), lilbp (1)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Author bio box](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/author-bio-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/author-bio-box?u=76281980&t=0)** - [Narrator] Having a great bio box that stands out can help people get to know the author of the post or website. It can also help others connect on social media or even get readers to know the author better. Here's how to make an author bio box using columns and a little CSS. So the first thing we're going to do is create a group and inside that group, which we'll set too wide right off the bat, we'll also add the CSS class right off the bat, which we'll call bio box, inside that group, we'll add two columns and we will do a 50/50 split, we'll set those columns to wide as well.
>
> **[0:51](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/author-bio-box?u=76281980&t=51)** And in the first column, we will add an image that is a headshot of the author. Now, something important to note here is that if you are going to distribute these block patterns commercially you'll need someplace that these images are publicly available like a CDN, or you can bundle them in the plugin and then have them added to the media uploader later. Again, that's a little outside the scope of this course, but it's just something to be mindful of. If you're going to create block patterns, that reference images that aren't going to be on the user's site. So we'll set this and then we will look at the styles, we'll set it to rounded. We also want this to be a bit smaller, maybe even medium, we'll center it. And then we'll add some social icons here. So we'll search for the social icons pattern. And then the way this works is that we click a plus to add each one, so I will search for Twitter. Again, we don't have to add the links to these right now. We can if we want to, but I'll just get the buttons added, [Instagram](../../Glossary/Service/Instagram.md), YouTube, [GitHub](../../Skills/Software%20Development/GitHub.md),
>
> **[2:22](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/author-bio-box?u=76281980&t=142)** and then an RSS feed for dealer's choice.
>
> **[2:30](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/author-bio-box?u=76281980&t=150)** All right, again, we'll set these buttons to center underneath the author photo, and then in the right column, we'll add a heading, we'll add a little intro. Hi, I'm Joe Casabona and then we'll add a bio. Okay, so now we have our bio, let's make sure we get rid of any errant blocks here. And now let's add some styles to this block. So let's go up to the group level. And again, we'll add a background color. We'll make this a gradient as well. And you know, our last gradient was kind of dark. So let's add some color to this, though I do like the effect that we got. So we'll do that same thing here where we kind of have a middle, different color middle. Now it looks like probably a lighter color works better here, so let's try it. Absolutely does, okay. And then we are getting a little bit of a clash here, right? With the text in the multicolor background. So I'm going to select this column only, and I am going to set the background color to white, and we can now add padding to specific columns. So we'll do that.
>
> **[4:07](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/author-bio-box?u=76281980&t=247)** And let's see if we could do that for the full group count, so we can, so I'm going to add a 40 pixel padding around all of this, and then we probably don't need any CSS after this. So not bad, I'll copy this. So from here on out, we won't add the raw pattern in the plugin, but you will be able to find the raw pattern for each of these in the exercise files. So with that, let's just go straight to encoding this, paste it in Jason formater, escape, copy it, and then go back to our code and then we'll add our next variable here. So this is bio box, paste our pattern, and then we'll copy our function, make the changes we need to, bio box, change the title.
>
> **[5:08](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/author-bio-box?u=76281980&t=308)** And this is a two column author bio box with social icons, change this to bio box categories,
>
> **[5:25](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/author-bio-box?u=76281980&t=325)** buttons, columns. Good, and then for the keywords bio, author, social, all right, let's go ahead and save this and we'll see how it looks on our website. Okay, so back on our website, let's remove this block. We'll click update and then refresh the page. And if we go to the block inserter under patterns, look at buttons, we have our bio box and under columns, again, we have our bio box. Now it is worth noting here that I added apostrophe for hi I'm and the escape character made it in here. So we'll just remove the slash here and everything looks good. Again, we don't have to add any CSS because newer versions of the block editor do allow us to add padding to those containing or grouping blocks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Instagram](../../Glossary/Service/Instagram.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** css (4), cdn (1), rss (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### [Contact info card](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/contact-info-card?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/contact-info-card?u=76281980&t=0)** - [Instructor] Similar to an author box, having a contact card with address, phone, and social media links can be valuable when strategically placed on the home, about, or contact page or even in the sidebar or widget areas. Since they are so similar, we are going to start with one of our block patterns, the author box block pattern. So I'll go to the columns category and I will grab the bio box here. Hide this. And now we'll make some modifications. First we'll change the class. So I'll go to advanced and instead of bio box, I'll call this contact card. Next, we'll change the background color. So instead of the gradients, since this is a contact card, we'll set it to a white background color. And just so we're not creating more markup than we need, I'll remove the background color from the column. Now the headshot and social icons can actually remain the same and we are going to change and then style the right column. So I'll change the headline to contact me. And then we will add several paragraphs with information. Address, 123 [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Lane, San Demas, California 91724.
>
> **[1:34](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/contact-info-card?u=76281980&t=94)** This is all made up information, of course. Then we'll bold the address. Next, phone number, and our phone number (909) 680-3443. And then email Joe@SDHSFootball.rules.
>
> **[1:58](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/contact-info-card?u=76281980&t=118)** Again, all made up. So here is our basic contact card. And again, we're going to add some custom CSS to this. So first let's copy it, full encode it. Then in our patterns.[PHP](../../Skills/Software%20Development/PHP.md) file we'll create a contact card variable, and then we will copy the previous register block pattern function call, call this one contact card, change the title, change the content. This could stay in the same two categories. And instead of author, we'll write contact and contact info. Or maybe address, phone, and email. Okay, so now that we are a little bit familiar with the CSS classes, we also don't need to do the customizer and inspect elements. We can just add our CSS. And so let's make these a little bit clearer. This is for the pricing table, and then this is for the contact card.
>
> **[3:35](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/contact-info-card?u=76281980&t=215)** So first of all, we use groups for this. So we'll do WP-block-group.contact-card, and we'll just add a simple one pixel border, border one pixel, solid, and we'll make it a light gray.
>
> **[3:57](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/contact-info-card?u=76281980&t=237)** I guess that's a darkish gray. And then we will target the paragraphs. And so we want no padding, no margin, and a dotted line across the bottom of each one. So we'll do border bottom, one PX dotted. This gives it that more printed card feel, I think, in a slightly lighter gray. So now we'll save this and let's go ahead and test it. Okay. So we're starting with a blank canvas here again. We'll go to patterns. We'll go to columns. We'll scroll down and we see our contact card. So let's just add that as is. We'll click update and when we go out to the front end, we have our styles applied. But it looks like our social icons are not showing up for some reason. So let's go back and see why. It's likely because we haven't added any URLs here. So it looks like the block editor cleverly hides buttons that don't have a URL associated with them. So just to test it here, add a couple. Okay, so we've added three of the five. So if we save here and click view, you'll see those buttons are showing up. It is worth noting, however, that even if they aren't showing up on the front end,
>
> **[5:30](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/contact-info-card?u=76281980&t=330)** because the social icons are coded into the block pattern, they will always show up in the block editor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **UI Navigation:** go to (4), in the sidebar (1), scroll down (1)
> **Env Vars:** css (3), php (1), url (1)
> **CLI Commands:** make (3), php (1)
> **File Paths:** patterns.php (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Posts listing with Query block](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/posts-listing-with-query-block?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/posts-listing-with-query-block?u=76281980&t=0)** - [Instructor] With Full Site Editing, we're given access to some powerful blocks, like the query loop or post template block. This allows us to create our own custom post listing without needing to write any code or fuss with the quote, unquote loop, template parts or any of that. Let's create a nice post listing layout now. So the first thing we're going to do is add the query loop block. We don't need to add a containing block because the query loop is its own container. And you can see that I've pre-populated my [WordPress](../../Skills/Web%20Development/WordPress.md) installation with a few posts. So we are going to first set this to wide, and then add the custom class of lil-posts.
>
> **[0:54](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/posts-listing-with-query-block?u=76281980&t=54)** And then we'll click Start Blank. And when we choose Start Blank, we have a few options that aren't really blank. It just gives us a unopinionated starting point. So we'll do the image, date and title starting point. Right, you can see that we now have a list of our posts. And first, we can choose if we want a list view or a grid view. So let's do a grid view here, and again, we want this to be as wide as possible. So we'll make sure our query loop is set to wide. Next, I always like to display the category next to the date but the way that the block editor currently works is each piece of the loop is its own block. So we can add discrete pieces of text next to each other. What we can do is insert a column block. So I'll do two 50/50 columns. You can see that when I add it on one of the posts, it gets added to all of the posts. And then I will drag the date into one column and I will add the categories. We can see post categories here in the other column. So now we have our post categories here.
>
> **[2:29](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/posts-listing-with-query-block?u=76281980&t=149)** We've got our titles and then I would also like to add the excerpt. So we'll do post excerpt. And you can see we've got some text here, and then we can add the Read More text as well. I'll bold this text just so it stands out a little bit. If we wanted other styling options, we can change the text color or we can add CSS. If we look at the options for the query loop, we can make the title a link if we want but that's about all we can do, aside from changing the [Typography](../../Skills/Data%20Science/Typography.md). Again, if we go up to the full loop, we don't have much there. And again, if we go to the post excerpt, we can change the background colors but we can't really control the Read More beyond that. That's okay, we have our query loop now. It's a simple three-column loop but I think the big change that we did was add this two-column layout with the post [Metadata](../../Skills/Web%20Development/Metadata.md) in it. And if we want it to stand out, again we could always add a custom background color here. We could also make some other changes
>
> **[4:04](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/posts-listing-with-query-block?u=76281980&t=244)** but again, I think we'll keep it at that. So with that, let's make sure that we have fully selected our query loop block here. We'll copy this and then we'll go to encode it. You can see that it's not as long as some of our other block patterns as far as markup goes because when WordPress see the query, it knows exactly what to do and how many times to repeat it. So we'll escape this. We'll copy it and we'll go to our patterns. Add the new variable. We're going to call this one query. And then we will repeat this. Now, if you'll recall, there is a category called query, and we'll make use of that here. So call this query. And we'll actually title it something more user friendly, like 3 Column Posts. A 3-column post layout. The content is query. For the array, we'll do query and columns. And then for the keywords, we'll do posts, query, post layout. So we'll save this and if you wanted to style this, I'm not going to in this video,
>
> **[5:40](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/posts-listing-with-query-block?u=76281980&t=340)** but if you wanted to, you could target it by using wp-block-query.lil-posts.
>
> **[5:50](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/posts-listing-with-query-block?u=76281980&t=350)** Each post itself is an unordered list or a list item with flex applied so you can target those specifically as well. But let's go ahead and see how well this worked. Okay, so we're back on our blank canvas. Let's go to the block inserter, to patterns. Under query we have our three columns posts. And everything looks good, just like we laid it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [Typography](../../Skills/Data%20Science/Typography.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (4)
> **Exercise Files:** template (2)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** css (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Website masthead](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/website-masthead?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/website-masthead?u=76281980&t=0)** - [Instructor] With full site editing coming to core, we also have blocks with site info, like title, tagline and icon, and we'll use those to create a custom masthead pattern. Now I'll say right up front that I want this mass head to be pretty opinionated. So we'll be making use of CSS and the important tag though, I wouldn't generally recommend that on production sites. So in our block editor, the first thing I'm going to do is create a group. I'll make sure this group is full width and we'll add the additional CSS class right off the bat. We'll call it lil-masthead. Inside this group, I'm going to create three columns that are 25, 50, 25. And we're going to make sure that those three columns are also set to full width. In the middle column we're going to add two blocks. One is going to be the site logo. Now the site logo you can set from the customizer, or you can change it directly from this block I have set it up to one of my podcasting logos we'll center this and then right under it, we'll add the site title. Now the site title automatically gets added as an h1, we'll center this as well, but we can change the font size. So if we don't want it to be gigantic, as the name suggests, we can set it to huge, or we can create a custom size.
>
> **[1:41](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/website-masthead?u=76281980&t=101)** So I'll set it to 75. We can also change the spacing and the color if we'd like. So that is the center column. Let's go ahead and add the tagline to the left. Again, the tagline is going to be the default, but we can also change it right in line. So instead of just another [WordPress](../../Skills/Web%20Development/WordPress.md) site, we'll say, "build your block canvas." And then on the right, we can add a couple of links. Now this could be plain text or buttons. There is no navigation block at the time of this recording. So we're just going to do a standard paragraph and we'll add about and contact. Again, we don't actually have pages for these. So when we set the anchor tag, I'm just going to use a pound or hash sign and the same thing for contact, pound or hash sign. And then I'm going to write align these, same thing I want to make sure this is left aligned. Now with respect to the full columns, let's make everything is aligned to the bottom. And again, for the columns, I think we need a little bit more room for our center column. So let's set this width to 70 and then the width of the other two columns
>
> **[3:17](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/website-masthead?u=76281980&t=197)** to 15% respectively. 15, 15 and 70 in the middle here. And we'll make this a little bit snappier, build your canvas. So now we have our masthead. I think the last thing that we'll do is we'll set a background color on the full block and that's going to be white. And you know what, I'm actually going to do, I'm going to give us just a little bit more room. One of the limitations of the block editor is that it's not super responsive friendly yet. So this is going to be a desktop style masthead.
>
> **[4:17](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/website-masthead?u=76281980&t=257)** And okay, so now we have our masthead. Let's go ahead and copy this. We'll get it encoded, We'll copy it into our plugin. So we'll create a variable masthead paste that, and then we will copy the latest register_block_pattern function, call this masthead, same name for the title, a three column. And then we'll say header layout for this. So this is going to be columns and header the category we haven't used yet. And then the key words will be masthead 'header',
>
> **[5:15](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/website-masthead?u=76281980&t=315)** 'site info.' So let's save this and then the next thing we'll do is add our styles. So we'll go to our style file. I will add a new comment here from masthead. And again, we're going to target this and we are just to set the font. We are going to use the important tag. Again, I would only recommend you use the important tag if you absolutely need to. With full site editing and options in most theme customizers, we could set this at the theme level or the user could set this at the theme level. So we don't always need to go this route, but for the purposes of education and display, I'm willing to use it here. So this is a wp-block-group and the class attached to it is masthead lil-masthead. So first we'll say a top border, border-top, 2px solid, black, and then we'll set the same border on the bottom. This is going to give it a little bit of a newspaper feel, that's where mastheads have come from, a lot of padding of 10 pixels. Again, this is something that we can do in the block editor now. And for font family, we'll do Garamond and then if Garamond is not available,
>
> **[6:51](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/website-masthead?u=76281980&t=411)** we'll just use a standard serif font and we'll add the important tag. And then we also just to be safe, we'll target the h1 as well with the same font family. So we'll save this and let's now test it in our theme. So we're here on our blank canvas. Let's click the block insert or go to patterns and then go to headers and you can see, we have our masthead here. If we update this page and then view it, you can see we have our masthead with the borders and the serif font.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (3)
> **Env Vars:** css (2)
> **Code Identifiers:** register_block_pattern (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Currently Listening To widget](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/currently-listening-to-widget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/currently-listening-to-widget?u=76281980&t=0)** - [Instructor] One of the more fun features on websites from the early 2000s was a Currently Listening widget. Here, we'll take that concept and use a block pattern that will allow you to embed a song on a blog post or in a widget area. Let's get started. First, we'll create our group, and we'll set the width to wide this time. We'll add our class, which we'll call Currently Listening, and then we'll add some information to it. So the first thing I will add is a heading. We'll say, Currently Listening. Then we'll add a separator, and we'll make this Thick, and we'll set it to White. And then we want to do the embed. Now, I'm going to do a SoundCloud embed, because that's a pretty open embeddable platform, but also, it just feels like a very 2000s sort of embed. Now, I've selected one of my favorite songs from a band I listened to a lot in the 2000s, which is Blink 182. They had a song called "Happy Days" a couple of years ago. So we'll grab this URL, and then we'll embed it right here. And you can see the embed worked properly. And then a linchpin of all of these little modules was also a Current Mood, or just Mood. So we'll say Current Mood, and it's a happy song.
>
> **[1:38](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/currently-listening-to-widget?u=76281980&t=98)** Well, it's called "Happy Days." So we'll say our current mood is Happy. So now we will set the color of this. If we're going for a true early-2000s sort of tone, this is going to be mostly black and gray. We'll add the center bit in there. Maybe a little bit of red. Right? Like what we see in the SoundCloud embed here. Yeah. That's not bad. And then we'll set the text color to white. We'll bold the Currently Listening, and we'll center this. Current Mood. We'll make that a little bit bigger, maybe a little bigger than that, and we'll center that as well. So now we have our Currently Listening widget. We'll also add some padding. Now, we don't need left and right padding so much, so we will separate this out. We want, let's say, 25 pixels at the top, 25 pixels at the bottom, maybe a little bit more. Let's say 40 pixels top and bottom. All right. And now we have our Currently Listening widget. So we'll grab this, copy it and encode it, escape it. Now we'll add it to our plugin. So we'll create a new section here called listening, get. We'll paste our encoded pattern,
>
> **[3:12](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/currently-listening-to-widget?u=76281980&t=192)** and then we will add another register, a block-pattern call here. So we'll call this one currently-listening, give it the same title, and then we'll change the content to listening. Now, this is not really columns or buttons. We'll just make this text. And then we'll say music, embed, mood.
>
> **[3:50](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/currently-listening-to-widget?u=76281980&t=230)** Okay, now, if you really want to kick it up a notch, you can target wp.block_group.currently-listening and make the font Comic Sans. That would be really bordering on early '90s. So I will leave that up to you. Okay, and now with our page reset, let's go to Patterns. We just added this as text. And here's our Currently Listening module, and it looks like the SoundCloud embed loaded properly.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Identifiers:** block_group (1)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hero section](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/hero-section?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/hero-section?u=76281980&t=0)** - [Instructor] An important aspect of many landing pages is a hero section. This is a large area that stands out, usually with a background image and a call to action. While the cover block gets us most of the way there, sometimes you're left wanting more. Enter the hero section block pattern. First, we're going to add a cover block. We're not going to add a separate group for this one because the cover block is a container block. So, we will just add the cover, we'll make sure that it's full width, and then we'll go to our media library, I've already uploaded an image that we can use. And then, we'll go to the settings and we'll add a couple of elements here. So, first, we want to set a minimum height. Now in the height selector, we can choose from a number of different measurements, including VH, which stands for Viewport Height, and this is a percentage of the visible area of the site. I'm going to set this to 70, I want it to be a most of the visible area of the site. Then, we can choose an overlay. I'm going to go with a little darker and make the opacity, again, pretty dark, we just want to see the image peeking out from behind the overlay. Next up, we want to set a font size and color. So, first of all, let's make this a heading. And then, we want it to be readable
>
> **[1:35](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/hero-section?u=76281980&t=95)** so let's set the text color to white. We will center this and we'll make it an H1. We'll bold it. All right, so now we have our headline, Build Your Own Block Patterns. We'll make this the full width, right? If we set it to wide width, that doesn't look too bad either. And then, we'll add some copy here. So, I will add the copy. Again, we want this to be visible so we'll set the text to white, we'll center this as well, and we'll bold this as well, just so it stands out. And, finally, we want to add our button. Or, our call to action, which is going to be a button. So, we'll set the button, Get Started Today, and we will make sure these buttons are justified center. And then, we want to set these buttons with the appropriate color. So, the text color is going to be white again, but for the background color, let's pick a color we haven't used, I like purple. So, we'll set this to purple. We can always set a gradient as well so if we want this to be kind of like a duotone purple, we can do that. Here, we can make it radial or linear. So, let's set this to two kind of shades of purple.
>
> **[3:11](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/hero-section?u=76281980&t=191)** And then, we'll set the gradient a little more here, I'll move this in kind of closer together to create a different kind of a gradient here. So, now we have white and white. And now everything is centered. So, we have our hero section. You can see our border does look a little bit different, so I'm not quite sure what control we have over the variations for each button. It looks like we can't set a hover state, that is a limitation of the Block Editor. So, we can make sure for our cover pattern that we do have a class called "hero section", which we could target the button if we'd like. And so, now we have our whole pattern, let's go ahead and copy this. We'll get it encoded, copy it, and then we will add it to our plugin. Adjust our code a little bit here, and then we'll add the hero. And then, we'll add another register block pattern section. We'll call this one hero. Title will be Hero Section,
>
> **[4:47](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/hero-section?u=76281980&t=287)** and then a cover block with text and a button for a CTA. Make sure to change the variable to hero. Categories, this could be text as well as header and then in the keywords, hero section, CTA, call to action. Okay, let's go ahead and save this, and see how it looks on our site. Okay, back on our canvas, let's go to the pattern's inserter, we'll go to Headers for this one and we have our hero section, it gets inserted and let's see how this one looks on the front end. If we scroll down, we could see that it's taking up a good bit. Now, our hover state is not very good. So, we are actually going to add some CSS to this. Let's do that. If we inspect the element, it's a block cover, and then it has our hero section class on it. So, we'll just grab wp-block-cover here, and we'll also check the hover state of the button, which we might have to force this. So, let's just double check.
>
> **[6:19](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/hero-section?u=76281980&t=379)** It's wp-block-button-link. So, in our CSS, Hero Section, so we'll add wp-block-cover.hero-section and then just to grab the right class again, this is wp-block-button a.wp-block-button_link
>
> **[6:48](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/hero-section?u=76281980&t=408)** and hover state. All right, so the first thing we'll do is set the border color and I'm going to see if we can make this transparent, and we'll add the important, and then we'll add color as white. And again, we'll add the important tag because the Block Editor is getting pretty specific here. So, let's add this and we'll see how it works. We'll refresh our page and much, much better here.

> [!info]- Semantic Content
>
> **CLI Commands:** make (10)
> **Definitions:** is a  (5), stands for (1)
> **UI Navigation:** go to (4), scroll down (1)
> **Env Vars:** cta (2), css (2)
> **Code Identifiers:** button_link (1)
> **Analogies:** kind of like (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Content upgrade](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/content-upgrade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/content-upgrade?u=76281980&t=0)** - [Instructor] One of the best ways to grow your email list is a content upgrade box based on the content. This block pattern will include a heading, some texts and an email signup form. And the best part is that you can change it based on the blog post or page. Now it's worth noting that this is the only block pattern with an external dependency. At this time, there is no form block in core, so we'll need a third party plugin. I recommend Ninja [Forms](../../Skills/Web%20Development/Forms.md) because it's free and easy to use, plus it integrates with just about every email service provider. So we'll go to plugins, add new. We'll search for Ninja Forms, and then we'll click install now, and activate. Once it's activated, we'll see a new forms area here. There's already a contact me form added, but I'm going to quickly add a simple opt-in form. This form really just needs to be an email address, so I'll click that. The actions will be success message, admin email and store submission. And then for the display settings, we'll remove title. We'll call this opt in and then we will publish it. Okay, once the form is published, let's go back to our pattern canvas and we'll create the opt-in. So first I'll create the group. We will make it wide,
>
> **[1:34](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/content-upgrade?u=76281980&t=94)** and we will assign it a class of opt-in. We'll add two columns, and we'll make this a 50/50 split. We'll set these columns too wide as well. And in the first column, we will add an image that I've already uploaded, and that's going to be the cover of a free PDF that you users can get called Gutenberg and full site editing checklists. So we have our image. So this is a pretty big image. Let's set the heights to 600 instead, and then we will center this. And then on the right hand side, we'll add some texts, launch easily with the block editor, and then we'll add the Ninja Form. Now, luckily Ninja Forms has block editor support. So we'll add the opt-in here. We're just asking for the email address. And now let's style this a little bit. So first let's make sure everything is aligned to the middle for our columns, for our group. Let's set a background gradient color. We'll go with black for this. And we'll add one in the middle. We'll call back to an earlier opt-in. Set the text to white.
>
> **[3:10](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/content-upgrade?u=76281980&t=190)** Now this is displaying a little strangely, but we'll see what happens when we look at this on the front end. So we shouldn't need to make any adjustments here, but we can if needed without CSS this time. We'll bold our heading and let's update this and just take a look to see. Perfect, so there's no predetermined styles for this particular opt-in. Now this is pretty big though. So let's actually set the opt in a little bit differently. We'll make this column instead of 50%, let's set it to 30% and then this column will set to 70% or so,
>
> **[4:04](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/content-upgrade?u=76281980&t=244)** and again, we'll make sure everything is aligned to the middle and we'll add some padding around the whole thing. Say 50 pixels, that should do the job. Let's update this and look at it one more time just to make sure everything looks okay. All right, fantastic. So we will take this block. Copy it, get it encoded. Copy that, move over to our plugin. We'll call this one opt-in, and then we'll scroll to the bottom of this increasingly long plugin. We'll copy the last register block pattern call, and we'll make the requisite changes opt in. We'll call this content upgrade, a two column content upgrade with email opt-in.
>
> **[5:11](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/content-upgrade?u=76281980&t=311)** Then we'll set the content to opt in for categories. We'll set this to columns and button, and then for keywords, CTA and call to action are good and opt-in and email.
>
> **[5:33](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/content-upgrade?u=76281980&t=333)** Okay, so let's save this and we'll take a look at it over on our website. Okay, back on our canvas. Let's look at the patterns. We'll go to columns and we have our call to action here, and our content upgrade here. Perfect, now, a couple of notes about connecting it to an ESP. This form as is will email the site administrator and log the submission in the [WordPress](../../Skills/Web%20Development/WordPress.md) admin. You'll need to connect to an ESP like MailChimp or ConvertKit to deliver the content upgrade, and in some cases that connection might cost some money. In other words, this is for display purposes only.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (4), [WordPress](../../Skills/Web%20Development/WordPress.md) (1)
> **CLI Commands:** make (8)
> **Env Vars:** esp (2), pdf (1), css (1), cta (1)
> **Definitions:** is a  (2), in other words (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** install (1), you'll need (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Refactoring

[↑ Back to Table of Contents](#table-of-contents)

#### [Adding your own block pattern category](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/adding-your-own-block-pattern-category?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/adding-your-own-block-pattern-category?u=76281980&t=0)** - [Instructor] With so many block patterns, it might be good for us to add a couple of our own categories for organization's sake. We'll add two, one for calls to action and one for all of our patterns. So first we'll need to add some code above the line that calls the block patterns. Since the block patterns will be using the categories. On line 33 of block-patterns.[PHP](../../Skills/Software%20Development/PHP.md), we'll add require_once and then inc/categories.php.
>
> **[0:36](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/adding-your-own-block-pattern-category?u=76281980&t=36)** We'll save that file and now in our inc folder, we'll add a new file called categories.php, and we'll add the following code. So we write our opening php tag, and then we'll create a function to register the block pattern categories. So lil_bp_register_block_categories, and then we'll register too CTA, and one just called [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning. So the first category, will be using register block pattern category for this. So register_block_pattern_category, and this accepts two arguments, a slug. So we'll call this one cta and then an array of properties. So we'll say array. And the only argument we'll be passing is the label. So we write label arrow, we use our X function again, and this one will be Calls to action. And then our namespace is lil-bp. And the comma here. And, so that's our first call. Then we'll copy this and add the LinkedIn learning call. So we call this lil, as the slug
>
> **[2:14](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/adding-your-own-block-pattern-category?u=76281980&t=134)** and the label will be LinkedIn Learning. We save this. And then the last thing that we need to do outside of our function is the add action. So add_action, and then init, and the name of our function. We save that, and now we can start adding our block patterns' two categories, but first let's do a little bit of a refactor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3)
> **CLI Commands:** php (4)
> **Code Identifiers:** require_once (1), lil_bp_register_block_categories (1), register_block_pattern_category (1), add_action (1)
> **File Paths:** block-patterns.php (1), inc/categories.php (1), categories.php (1)
> **Env Vars:** cta (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### [A slightly clever refactor](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/a-slightly-clever-refactor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/a-slightly-clever-refactor?u=76281980&t=0)** - [Instructor] We've added a lot of stuff to our plugin, so it's time for a bit of a refactor. We're going to group all the content into one file, create an array of block patterns so we can have a simple loop for all the pattern registration, add the new categories to the block patterns and then test everything. Let's get started. So the first thing we'll do in ink is create a new file called patterns-content.[PHP](../../Skills/Software%20Development/PHP.md). And that is where all of our pattern's variables will live. So we'll just copy these starting at line four going to line 14. And then we will paste them with the opening php tag into patterns-content.php. And then we'll bump all of these over. And remove any errant lines that might cause weird errors. We'll save that and then in patterns.php inside the function call, we will use include to grab patterns-content.php. We're doing this inside the function call because this is variables and we don't want to run into any scoping errors. Now, the next thing we're going to do is copy all of the register_block_pattern properties, slugs and properties, and add them to an associative array
>
> **[1:34](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/a-slightly-clever-refactor?u=76281980&t=94)** where the key is the slug and the value is the array of properties. This will ensure that all of our patterns are added with a single looped call to register_block_pattern. So I'll copy the first call here. I will create a new array called patterns. And then I will paste the first call. I will delete the comma and the new line. I'll add the arrow. And we also want to add the lil category to all of our block patterns. So we'll be doing that too. For the calls to action and opt-ins, we're ll also be adding the cta category. So let's go through and do a couple and then we'll jump to the end. So I'm going to grab the cta, we can delete these register_block_pattern calls as we get rid of them. I'll paste the cta pattern, remove the comma and the arrow. And then under categories, I'll add cta and lil. We got to make sure that we add them to the categories and not the keywords. All right, now we'll do the pricing-table. Remove the comma and the new line, add the arrow, and then add the lil.
>
> **[3:09](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/a-slightly-clever-refactor?u=76281980&t=189)** Guess we could also get away with saying that this is a call to action but we won't do that.
>
> **[3:22](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/a-slightly-clever-refactor?u=76281980&t=202)** All right, we're just about done. I want to point out the last two will include the cta category, as well as the lil category. So that was the hero section. Make sure we create the association here. And then we'll do the same for the last one, optin.
>
> **[3:53](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/a-slightly-clever-refactor?u=76281980&t=233)** And then we'll add a comma to the last one just in case we add more. We'll add the semicolon. So now we have our full array of patterns broken into groups of associations where the slug is the key and the value is the array of properties. And again, the reason we want to do this is because everything is neat and tidy in one array and to register our block patterns, all we need is a foreach loop. So we'll say foreach patterns as the key will be slug and the value will be props and then in the foreach loop, we just need one line, register_block_pattern, slug and props. So now we don't need to modify this at all when we add a new block pattern. We can add it in the format we have in the array. So let's save this and now add it to our [WordPress](../../Skills/Web%20Development/WordPress.md) site, and see how everything looks. With our plugin uploaded, let's go ahead and check out our block inserter. We can go to patterns and we see two new categories here. One is [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and this includes all of our block patterns. Looks good. And then there's the calls to action panel. Now, there's some weird jumping here.
>
> **[5:28](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/a-slightly-clever-refactor?u=76281980&t=328)** I notice that if I take Chrome out of full screen mode that jumping stops so it must be just the height is just strange enough in this panel. But things are looking good here too. And with that, we have created a great plugin with a block patterns library for us to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (5), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** php (5), make (2)
> **File Paths:** patterns-content.php (3), patterns.php (1)
> **Code Identifiers:** register_block_pattern (4)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-block-patterns-in-wordpress/next-steps?u=76281980&t=0)** - [Joe] Congratulations. You've gotten a good look at block patterns and have even created your own library of patterns to use. You can always continue to add your own and even submit some to the block patterns directory at [wordpress.org](https://wordpress.org). If you want to learn more about the block editor, you can check out our [WordPress](../../Skills/Web%20Development/WordPress.md) learning path, become a block developer with the Developing Blocks with Gutenberg course, or even learn all about full-site editing with the Full-Site Editing courses in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. Finally, I'd love to hear from you what block patterns you've come up with. You can always find me on Twitter @JCasabona and you can always see what else I'm up to over at [casabona.org](https://casabona.org). Thanks so much for watching. Until next time, get out there and build something.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [WordPress](../../Skills/Web%20Development/WordPress.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **URLs:** [wordpress.org](https://wordpress.org) (1), [casabona.org](https://casabona.org) (1)
> **CLI Commands:** find (1)
> **Speakers:** - [joe] (1)


## Instructor

- [Joe Casabona](../../Instructors/Web%20Development/Joe%20Casabona.md)

## Resources

- Exercise files available

## Skills Covered

- Wordpress Development

## Path Context

### In [Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)
← [HTML Essential Training](HTML%20Essential%20Training.md) | **6 of 10** | [WordPress- Accessibility](WordPress-%20Accessibility.md) →

## Appears In

- [Getting Started with WordPress](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20with%20WordPress.md)

## Related Courses

_Courses sharing skills:_

- [WordPress- Staging a Site](WordPress-%20Staging%20a%20Site.md) — Wordpress Development
- [Building a WordPress Membership Site with Ecommerce](Building%20a%20WordPress%20Membership%20Site%20with%20Ecommerce.md) — Wordpress Development
- [Building a Headless WordPress Site with Gatsby](../Cybersecurity/Building%20a%20Headless%20WordPress%20Site%20with%20Gatsby.md) — Wordpress Development
- [WordPress- Everything about Plugins](../Cybersecurity/WordPress-%20Everything%20about%20Plugins.md) — Wordpress Development
- [WordPress Essential Training](WordPress%20Essential%20Training.md) — Wordpress Development

---

[↑ Back to top](#)