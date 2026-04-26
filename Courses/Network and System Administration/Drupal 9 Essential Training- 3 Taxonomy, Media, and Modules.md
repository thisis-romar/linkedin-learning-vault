---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: drupal-9-essential-training-3-taxonomy-media-and-modules
url: "https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules"
duration_minutes: 94
duration: 1h 34m
level: Beginner
updated: 3/11/2021
learners: 34057
skills:
  - Drupal
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHrnj1mzUv0yQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615309549607?e=2147483647&amp;v=beta&amp;t=LFJN9ehKypPI2ewoVwXSdTROggkpH4T9jEWTMNswCb8"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Build Your Drupal Skills]]'
prev_courses:
  - '[[Drupal 9 Essential Training- 2 Content and Fields]]'
next_courses:
  - '[[Drupal 9 Essential Training- 4 Users and Themes]]'
path_nav: '[{"path":"Build Your Drupal Skills","position":3,"total":6,"prev":"Drupal 9 Essential Training- 2 Content and Fields","next":"Drupal 9 Essential Training- 4 Users and Themes"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/web-development
  - skill/drupal
status: not-started
created: 2026-04-21
---

![Drupal 9 Essential Training: 3 Taxonomy, Media, and Modules](https://media.licdn.com/dms/image/v2/C4E0DAQHrnj1mzUv0yQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1615309549607?e=2147483647&amp;v=beta&amp;t=LFJN9ehKypPI2ewoVwXSdTROggkpH4T9jEWTMNswCb8)

# Drupal 9 Essential Training: 3 Taxonomy, Media, and Modules

> In this installment of the Drupal 9 Essential Training series, instructor Rod Martin covers three important aspects of the Drupal content management system. First, he tackles taxonomy, which in Drupalspeak means categories. As Rod explains, if you want to categorize your content, the best way is to use the extremely flexible taxonomies in Drupal 9. Next, he covers media, and shows how to build an 

> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules) | 1h 34m | Beginner | 34K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[OSTraining]]
- [[Rod Martin]]

## Skills Covered

- Drupal

## Table of Contents

### Introduction

#### Introduction to the course
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=0)** - Hi, and welcome to the Drupal 9 Essential Training.
>
> **[0:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=5)** My name's Rod Martin, I'm the instructor for this series, and in this course, we're going to cover taxonomy, media, and modules.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=13)** All three of these are really critical to a successful Drupal site build.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=19)** Taxonomy is categorization and we'll dive into that in depth in the coming videos.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=25)** The new media manager in Drupal 9 is exceptional.
>
> **[0:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=29)** At the end of this course, we'll show you how to build an entire digital asset management system with the media module.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=37)** And then finally, modules.
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=39)** Well, what are modules in Drupal?
>
> **[0:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=41)** Well, I'm going to explain that to you in greater depth, but let me just say this.
>
> **[0:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=46)** Out of the box, Drupal can do an awful lot of things, but sometimes when you need a new feature, well, you'll turn to a module, and there are literally thousands of add-on modules available for Drupal.
>
> **[0:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/introduction-to-the-course?u=76281980&t=59)** All right, with that brief introduction let's dive into taxonomy, media, and modules.

> [!info]- Semantic Content
>
> **Code Keywords:** module (2), let (2), finally, (1), this. (1)
> **Speakers:** - hi (1)
> **Non-Speech:** (upbeat music) (1)


### 1. Taxonomy Explained

#### Taxonomy explained
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=3)** - [Instructor] I've been using Drupal since Drupal 5.
>
> **[0:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=6)** Though I skipped Drupal 6 'cause I wasn't much of a fan, Drupal 7 came along in January 2011, and I was hooked again.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=14)** But in all that time, I struggled to understand taxonomies.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=18)** I don't know why, I just had a thing.
>
> **[0:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=21)** So I bought a book.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=23)** It cost $99.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=25)** Let me save you $99.
>
> **[0:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=27)** Are you ready?
>
> **[0:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=29)** Taxonomy is categories.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=31)** That's all it is.
>
> **[0:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=33)** In Drupal, if you want to categorize your content, well, the best way to do it is by using taxonomies, and here's why.
>
> **[0:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=41)** Taxonomies relate content together.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=44)** They can create groups for list displays, provide an RSS feed per term.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=49)** Taxonomies are unbelievably flexible in Drupal 9 because as an entity, of course, you can add fields to a taxonomy term, like a media field.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=60)** So, an image or a video and more, and we'll do that in upcoming exercises.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=66)** So, with Drupal, there is a default taxonomy, and it's the tagging system in the article content type.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=73)** These are user defined, and they're great for tagging blogs.
>
> **[1:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=78)** But I can't encourage you enough.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=80)** If you're building an enterprise site or a site that other content editors will use, I strongly recommend that you do not use the tagging system, but that you create what I call a closed taxonomy.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=94)** A closed taxonomy is one where you as the site builder define all of the terms or categories that an editor can choose from, and then they get to choose from them.
>
> **[1:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=104)** They don't get to add their own.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=106)** And there's a solid reason for this, because it's just so easy to add new tags, including typos, and it can become a real mess.
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=117)** So taxonomy's are made up of two parts, vocabularies and terms.
>
> **[2:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=123)** The vocabulary is the main category.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=125)** So in this case, we're going to categorize our businesses on our site.
>
> **[2:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=129)** And the terms for our vocabulary in the business category taxonomy are Training, Site Building, Theming, Module Development and Migrations.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=138)** Similarly, we might have an events vocabulary for our event content type.
>
> **[2:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=144)** And these terms or categories might be, might be After Hour Party, Drupal Picnic, DrupalCamp, DrupalCon, Training and more.
>
> **[2:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=154)** Whenever you use a taxonomy to correctly categorize your content, well then, creating landing pages is done automatically for you, and you can style those with Layout Builder.
>
> **[2:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=167)** Filtering your views or your landing pages, because you're used taxonomy again, is really simple.
>
> **[2:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=174)** Even creating a block with related content, in this case, OSTraining is in the training category, and so are these businesses.
>
> **[3:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=184)** We'll show you how to do that.
>
> **[3:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=186)** So taxonomy is much more than just a dropdown when it comes to categorizing your content.
>
> **[3:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=192)** And I can't encourage you enough to really check this out.
>
> **[3:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/taxonomy-explained?u=76281980&t=195)** In the upcoming exercises, we're going to make great use of taxonomies to categorize all of our content.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (2), case, (2), let (1), from, (1), this, (1)
> **CLI Commands:** make (1)
> **Env Vars:** rss (1)
> **UI Navigation:** dropdown (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Adding vocabularies and terms, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=3)** - [Instructor] All right, now that we understand what taxonomy is and what it does and what it can do, let's go ahead and add the taxonomies we need for all of our content types.
>
> **[0:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=15)** Again, typically, in my planning, I would know what taxonomies I need and I would do this in one step.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=23)** So let's take a look at our taxonomy plan really quickly.
>
> **[0:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=27)** We need a taxonomy with two terms, news and press release in order to identify the kind of node it is in the article content type.
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=36)** And we need a vocabulary with terms that replace tags.
>
> **[0:40](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=40)** We need a vocabulary that's going to categorize all of our businesses.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=45)** We need a taxonomy to categorize our locations and add amenities.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=51)** Now, this could easily just be a checkbox field but by creating it with a taxonomy, we can allow our visitors to choose a category and then choose the amenities that they might be looking for.
>
> **[1:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=65)** And then finally, events, we need a taxonomy to categorize the kinds of events we have.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=73)** All right, let's dive in, head over to Structure, Taxonomy and Add vocabulary.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=80)** Let's set up the taxonomy for our article content type first.
>
> **[1:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=83)** This one is really simple.
>
> **[1:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=85)** We'll call this Article Type.
>
> **[1:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=89)** And in the description, News or Press Release.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=94)** Click Save.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=96)** And it's going to take us to the Add term page.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=99)** Let's go ahead and do those two terms.
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=101)** Click Add term and in this case, it's just going to be News.
>
> **[1:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=105)** Save, and Press Release.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=111)** Save, and that's it.
>
> **[1:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=114)** In the breadcrumbs, the easiest way to get back to the beginning is just click Taxonomy.
>
> **[1:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=118)** Or you can click in the star to put that into your shortcuts.
>
> **[2:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=123)** All right, let's add our second article taxonomy.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=125)** Click Add vocabulary.
>
> **[2:08](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=128)** And this is going to be Article Keywords.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=132)** I like the term Keywords for this because that's kind of what they are.
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=136)** Click Save.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=138)** On the Article Keywords line, go ahead and click Add terms and let's go ahead and just add five or six terms of the kinds of article keywords we might want to use.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=149)** Click Add term and let's call this Training.
>
> **[2:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=154)** So we might have press releases or news about training.
>
> **[2:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=158)** Click Save.
>
> **[2:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=161)** And that's going to bring us straight back to the Add term page, again, a really helpful feature.
>
> **[2:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=167)** We might have news or press releases about Drupal Releases.
>
> **[2:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=174)** And let's just add some text here in the body.
>
> **[2:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=177)** Any time Drupal gets an update, you'll hear about it first in Drupalville.
>
> **[3:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=191)** Click Save.
>
> **[3:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=193)** Another potential category or keyword for our news and press releases is News from the OSTraining Blog.
>
> **[3:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=203)** People.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=206)** This could be a news or press release about Drupal People.
>
> **[3:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=209)** And let's add one more.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=213)** Drupal Security.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=216)** All right.
>
> **[3:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=218)** Now, clicking back on Taxonomy, and now clicking on list terms for article keywords and there we have our article keywords.
>
> **[3:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=227)** So releases, security, news, oops, let's add that one.
>
> **[3:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=233)** That should be News from the OSTraining Blog.
>
> **[3:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=237)** Sorry about that.
>
> **[3:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=238)** People and Training.
>
> **[4:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=241)** You can add as many keywords here as you might want to use.
>
> **[4:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=245)** All right.
>
> **[4:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=246)** Click on Taxonomy again and let's add the vocabulary for the business directory.
>
> **[4:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=255)** Click Add vocabulary and we're going to call this Business Categories.
>
> **[4:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=265)** Click Save.
>
> **[4:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=268)** And let's add some terms.
>
> **[4:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=270)** Now, in any typical town, you might have all kinds of different businesses: construction, real estate, and more.
>
> **[4:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=278)** We're going to stick with Drupal kinds of businesses, so in this case, we're going to have a Drupal business that specializes in site building.
>
> **[4:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=294)** And theming.
>
> **[4:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=299)** And module development.
>
> **[5:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=305)** Training.
>
> **[5:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=310)** Migrations.
>
> **[5:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=314)** Now, I went pretty quickly there.
>
> **[5:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=316)** Let me click back on Taxonomy and click on list terms.
>
> **[5:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=319)** Here they are, Migration, Module Development, Site Building, Theming, and Training.
>
> **[5:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=324)** Now, as you might remember from the introduction, we can reorganize these any way we want.
>
> **[5:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=329)** So I'm going to put them in order and there we are, I'm going to click Save and so now that'll be Training, Site Building, Theming, Module Development, and Migrations.
>
> **[5:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=342)** And once again, we can add as many as we need here.
>
> **[5:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=347)** Click on Taxonomy in your shortcuts again or up in the breadcrumbs and so far, we've added article keywords, article type and business categories.
>
> **[5:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=356)** In the next video, we'll continue and add the rest of the vocabularies and the terms that we'll need to properly categorize and filter our content and content lists.
>
> **[7:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=421)** All right, now that we understand what taxonomy is and what it does and what it can do, let's go ahead and add the taxonomies we need for all of our content types.
>
> **[7:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=433)** Again, typically, in my planning, I would know what taxonomies I need and I would do this in one step.
>
> **[7:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=441)** So let's take a look at our taxonomy plan really quickly.
>
> **[7:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=445)** We need a taxonomy with two terms, news and press release in order to identify the kind of node it is in the article content type.
>
> **[7:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=454)** And we need a vocabulary with terms that replace tags.
>
> **[7:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=458)** We need a vocabulary that's going to categorize all of our businesses.
>
> **[7:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=463)** We need a taxonomy to categorize our locations and add amenities.
>
> **[7:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=469)** Now, this could easily just be a checkbox field but by creating it with a taxonomy, we can allow our visitors to choose a category and then choose the amenities that they might be looking for.
>
> **[8:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=482)** And then finally, events, we need a taxonomy to categorize the kinds of events we have.
>
> **[8:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=490)** All right, let's dive in, head over to Structure, Taxonomy and Add vocabulary.
>
> **[8:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=497)** Let's set up the taxonomy for our article content type first.
>
> **[8:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=500)** This one is really simple.
>
> **[8:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=502)** We'll call this Article Type.
>
> **[8:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=507)** And in the description, News or Press Release.
>
> **[8:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=511)** Click Save.
>
> **[8:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=514)** And it's going to take us to the Add term page.
>
> **[8:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=516)** Let's go ahead and do those two terms.
>
> **[8:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=518)** Click Add term and in this case, it's just going to be News.
>
> **[8:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=523)** Save, and Press Release.
>
> **[8:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=529)** Save, and that's it.
>
> **[8:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=531)** In the breadcrumbs, the easiest way to get back to the beginning is just click Taxonomy.
>
> **[8:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=535)** Or you can click in the star to put that into your shortcuts.
>
> **[9:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=540)** All right, let's add our second article taxonomy.
>
> **[9:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=543)** Click Add vocabulary.
>
> **[9:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=545)** And this is going to be Article Keywords.
>
> **[9:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=549)** I like the term Keywords for this because that's kind of what they are.
>
> **[9:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=554)** Click Save.
>
> **[9:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=555)** On the Article Keywords line, go ahead and click Add terms and let's go ahead and just add five or six terms of the kinds of article keywords we might want to use.
>
> **[9:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=566)** Click Add term and let's call this Training.
>
> **[9:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=572)** So we might have press releases or news about training.
>
> **[9:35](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=575)** Click Save.
>
> **[9:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=578)** And that's going to bring us straight back to the Add term page, again, a really helpful feature.
>
> **[9:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=584)** We might have news or press releases about Drupal Releases.
>
> **[9:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=591)** And let's just add some text here in the body.
>
> **[9:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=594)** Any time Drupal gets an update, you'll hear about it first in Drupalville.
>
> **[10:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=609)** Click Save.
>
> **[10:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=610)** Another potential category or keyword for our news and press releases is News from the OSTraining Blog.
>
> **[10:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=620)** People.
>
> **[10:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=623)** This could be a news or press release about Drupal People.
>
> **[10:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=626)** And let's add one more.
>
> **[10:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=630)** Drupal Security.
>
> **[10:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=633)** All right.
>
> **[10:35](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=635)** Now, clicking back on Taxonomy, and now clicking on list terms for article keywords and there we have our article keywords.
>
> **[10:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=645)** So releases, security, news, oops, let's add that one.
>
> **[10:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=650)** That should be News from the OSTraining Blog.
>
> **[10:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=654)** Sorry about that.
>
> **[10:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=655)** People and Training.
>
> **[10:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=658)** You can add as many keywords here as you might want to use.
>
> **[11:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=662)** All right.
>
> **[11:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=663)** Click on Taxonomy again and let's add the vocabulary for the business directory.
>
> **[11:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=672)** Click Add vocabulary and we're going to call this Business Categories.
>
> **[11:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=682)** Click Save.
>
> **[11:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=685)** And let's add some terms.
>
> **[11:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=687)** Now, in any typical town, you might have all kinds of different businesses: construction, real estate, and more.
>
> **[11:35](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=695)** We're going to stick with Drupal kinds of businesses, so in this case, we're going to have a Drupal business that specializes in site building.
>
> **[11:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=711)** And theming.
>
> **[11:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=716)** And module development.
>
> **[12:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=723)** Training.
>
> **[12:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=727)** Migrations.
>
> **[12:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=731)** Now, I went pretty quickly there.
>
> **[12:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=733)** Let me click back on Taxonomy and click on list terms.
>
> **[12:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=737)** Here they are, Migration, Module Development, Site Building, Theming, and Training.
>
> **[12:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=741)** Now, as you might remember from the introduction, we can reorganize these any way we want.
>
> **[12:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=746)** So I'm going to put them in order and there we are, I'm going to click Save and so now that'll be Training, Site Building, Theming, Module Development, and Migrations.
>
> **[12:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=759)** And once again, we can add as many as we need here.
>
> **[12:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=764)** Click on Taxonomy in your shortcuts again or up in the breadcrumbs and so far, we've added article keywords, article type and business categories.
>
> **[12:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-1?u=76281980&t=773)** In the next video, we'll continue and add the rest of the vocabularies and the terms that we'll need to properly categorize and filter our content and content lists.

> [!info]- Semantic Content
>
> **Code Keywords:** let (28), module (6), type. (4), case, (4), for. (2)
> **UI Navigation:** click on (6), checkbox (2)
> **CLI Commands:** node (2)
> **Cross-References:** in the next (2)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Adding vocabularies and terms, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=3)** - [Instructor] All right, so we have our first three vocabularies set with all the terms that we need.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=9)** Let's add the vocabulary for our locations.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=12)** Click add vocabulary.
>
> **[0:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=15)** We'll call this locations and let's add some terms.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=24)** So our location categories could be any kind of venue that we might have.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=30)** Let's add an arena, park, a meeting hall, a training room, a library and finally convention center.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=51)** All right.
>
> **[0:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=53)** Let's click back on taxonomy again and click on our terms for locations, arena, convention center, library, meeting hall, park and training.
>
> **[1:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=63)** Excellent.
>
> **[1:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=63)** We need one more taxonomy for locations and that's amenities.
>
> **[1:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=67)** Click on taxonomy, add vocabulary and let's add amenities.
>
> **[1:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=75)** So amenities at a location could be anything.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=79)** The number of amenities are up to your imagination and let's add five amenities, tables and chairs, click save.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=92)** Sound equipment, food service, internet access and charging stations.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=113)** Again, you can have as many terms as you need.
>
> **[1:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=118)** Clicking back on taxonomy and the breadcrumbs and checking out our amenities.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=125)** There they are.
>
> **[2:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=127)** All right, we have one last vocabulary to add.
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=130)** Let's click on taxonomy again and click add vocabulary.
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=136)** And this is for events.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=138)** So we're going to call this our events categories and let's add terms.
>
> **[2:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=145)** So our event categories again could be anything.
>
> **[2:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=148)** We'll do DrupalCon just in case DrupalCon ever comes to DrupalVille.
>
> **[2:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=158)** There are DrupalCamps all over the world.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=160)** These are smaller regional meetings and learning opportunities for Drupal.
>
> **[2:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=165)** Click save.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=168)** Training obviously, click save.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=172)** After hours, Drupal party and of course ever present Drupal picnic, (laughs) click save.
>
> **[3:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=186)** Once again, we could go and add just a ton more of those.
>
> **[3:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=191)** Our event categories are listed so.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=194)** All` right.
>
> **[3:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=195)** We've added our vocabulary and our terms.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-vocabularies-and-terms-part-2?u=76281980&t=199)** Let's go ahead and add the fields we need to our content types in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9)
> **UI Navigation:** click on (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Adding taxonomy fields
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=3)** - [Instructor] All right, now that we have our taxonomies all set, we need to add an entity reference field for the taxonomies that we've added.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=11)** And actually, this is pretty simple.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=13)** You've already added a bunch of fields and once you've done one or two, well, then this becomes second nature.
>
> **[0:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=20)** Let's start with the article content type.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=23)** Click Manage fields and click Add field.
>
> **[0:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=28)** We're going to select for all of these fields a taxonomy term reference field because we've added terms to vocabularies in our taxonomy.
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=39)** This first one is going to be Article Type.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=44)** Click Save and continue.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=47)** We'll limit it at one because for this particular one, it's either news or press release.
>
> **[0:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=52)** Click Save field settings and choose the Article Type vocabulary.
>
> **[0:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=58)** Now, one word of caution here.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=60)** We're not going to check referenced entities if they don't already exists simply because that provides the tagging widget capabilities and that's specifically what we're trying to avoid.
>
> **[1:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=71)** All right, click Save settings.
>
> **[1:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=75)** Now, because this taxonomy only has two options, news or press release, the easiest way to set this up isn't necessarily the autocomplete widget that we've used already.
>
> **[1:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=86)** Click on Manage form display, scroll down to the bottom for Article Type and change the autocomplete widget to a select list.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=94)** That's just probably the easiest thing to do.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=97)** We'll also drag that to the top, making sure that a content editor makes that choice right away as soon as they start a new article.
>
> **[1:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=105)** Click Save.
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=108)** Now we'll talk more about managing form display in just a little bit but basically what it is is the order of the fields on this page are the order that the fields appear for a content editor when they're adding or editing a node.
>
> **[2:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=123)** All right, click Manage fields tab again and click Add field.
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=130)** Select the Taxonomy term field again and this is Article Keywords.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=138)** Click Save and continue.
>
> **[2:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=141)** We'll leave this as unlimited.
>
> **[2:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=143)** That way, multiple keywords can be chosen for any given article.
>
> **[2:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=150)** And we'll choose the Article Keywords.
>
> **[2:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=153)** Click Save settings.
>
> **[2:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=156)** And let's update that form display as well.
>
> **[2:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=159)** Click Manage form display and let's change autocomplete to check boxes and radio buttons.
>
> **[2:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=166)** The reason I'm using this one, of course, is because it's really hard to select more than one thing on a select list.
>
> **[2:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=174)** Click Save.
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=176)** All right.
>
> **[2:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=179)** Let's add the field to our location.
>
> **[3:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=182)** Click on Structure, Content types, and let's add the field to our Business Directory.
>
> **[3:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=190)** Click Manage fields and you'll remember the taxonomy for this is Business Category.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=196)** Click Add field.
>
> **[3:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=198)** Select a field type.
>
> **[3:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=200)** Taxonomy term.
>
> **[3:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=205)** Business Category.
>
> **[3:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=208)** Click Save and continue.
>
> **[3:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=210)** We'll limit it to one.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=213)** Save field settings and choose Business Categories.
>
> **[3:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=218)** For this one, we'll just leave it as the autocomplete widget.
>
> **[3:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=221)** Click Save settings.
>
> **[3:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=225)** All right.
>
> **[3:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=227)** Back to Structure, Content types, Events and Manage fields.
>
> **[3:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=234)** Now, you'll remember that we had an event category taxonomy as well, so click Add field.
>
> **[4:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=241)** Taxonomy term.
>
> **[4:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=246)** Event Category.
>
> **[4:08](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=248)** Save and continue.
>
> **[4:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=251)** We'll limit it to one.
>
> **[4:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=252)** Click Save field settings.
>
> **[4:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=255)** And choose Events Categories.
>
> **[4:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=260)** Click Save settings.
>
> **[4:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=264)** Let's change this to a select list.
>
> **[4:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=267)** Click Manage form display and on the Event Category dropdown, change this to a select list.
>
> **[4:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=276)** That way we're trying out all three different kinds of field widgets.
>
> **[4:40](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=280)** Click Save.
>
> **[4:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=283)** Now, Structure, Content types, and finally, Location, Manage fields.
>
> **[4:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=289)** And we have two taxonomies to add here.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=292)** Click Add field.
>
> **[4:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=294)** Select a field type, once again, Taxonomy term and you'll remember our locations content type had a category and amenities.
>
> **[5:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=303)** So Location Category.
>
> **[5:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=307)** Save and continue.
>
> **[5:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=310)** We'll leave it at one.
>
> **[5:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=311)** Save field settings and Locations.
>
> **[5:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=318)** Click Save settings.
>
> **[5:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=322)** And then finally, amenities.
>
> **[5:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=324)** Add field, select a field type, click Taxonomy term.
>
> **[5:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=331)** Location amenities.
>
> **[5:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=334)** Save and continue.
>
> **[5:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=337)** We'll change this to unlimited because obviously, a location can have more than one.
>
> **[5:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=342)** Save field settings.
>
> **[5:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=346)** And select amenities.
>
> **[5:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=348)** Now again, let me just remind you, I've not made any fields required throughout this entire exercise so far.
>
> **[5:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=354)** Part of planning out your content types, of course, is knowing what fields must be filled out in order for a node to be complete.
>
> **[6:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=364)** Once again, we're going to update this to check boxes.
>
> **[6:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=367)** Click Save settings.
>
> **[6:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=369)** Head over to Manage form display.
>
> **[6:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=373)** And let's change the location amenities to check boxes and radio buttons.
>
> **[6:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=379)** Click Save.
>
> **[6:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=383)** Now, again, I went a little quickly through that exercise.
>
> **[6:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-taxonomy-fields?u=76281980&t=386)** If you missed anything, just go back, rewind, pause and make sure that you get all of those fields added to your content types.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), continue (6), type. (3), finally, (2), type, (2)
> **UI Navigation:** click on (2), scroll down (1), select the (1), dropdown (1)
> **CLI Commands:** node (2), make (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Updating your content
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=3)** - [Instructor] Now that we've got our taxonomy fields added, let's update the current nodes that we have.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=9)** I'm going to hit Business Directory first.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=12)** Scroll down and choose a category.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=14)** Type letter A, choose Training.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=18)** That makes sense for OSTraining, and click Save.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=22)** If you look at the node, you'll see Training under the Business Category and it's a taxonomy.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=30)** And if you click on it, you'll see that the URL is /taxonomy/term, whatever the term ID is and we have a landing page with all of the nodes that have been tagged with Training in the teaser format.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=47)** We'll fix this in a bit.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=51)** Back to Content.
>
> **[0:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=53)** Let's click on Events, the Drupal Course 101.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=57)** Scroll down and click on the Event Category and choose Training again as the Event Category and you'll see that this is a taxonomy but it's now a select list instead of an autocomplete widget.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=70)** Go ahead and click Save.
>
> **[1:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=73)** Let's click on our location, which is Heritage Bank Center.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=76)** Click Edit.
>
> **[1:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=77)** And in the Location Category, it's a very large venue, so go ahead and choose Convention Center.
>
> **[1:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=85)** Charging stations, food service, it doesn't have internet access, it has sound equipment and it has tables and chairs.
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=93)** Once again, these are both taxonomies.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=96)** One is an autocomplete widget, one is a checkbox.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=99)** Click Save.
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=101)** Finally, go ahead and choose our article node, Welcome to Drupalville.
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=108)** And up here at the top, we have an Article Type.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=111)** Choose News and scroll down and choose some article keywords here.
>
> **[1:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=118)** Drupal Releases and News from the OSTraining Blog.
>
> **[2:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=123)** Click Save.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=125)** All right, we've updated one node from each of the content types with the relevant taxonomy.
>
> **[2:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=133)** Once again, showing you how a taxonomy works, we now have, for instance, on our Heritage Bank Center, the location category is the Convention Center and if I click on that, it will show me all of the Convention Centers in Drupalville.
>
> **[2:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=148)** And if I click on charging stations, it's going to show me all of the venues in Drupalville that have charging stations.
>
> **[2:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-your-content?u=76281980&t=156)** It's a terrific advantage to use taxonomy for all of these kinds of categorization.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), scroll down (3), checkbox (1)
> **Code Keywords:** let (3), finally, (1), type. (1)
> **CLI Commands:** node (3)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** url (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 2. Media Explained

#### The Drupal media manager
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=3)** - [Instructor] One of the greatest advances for Drupal 9 is the media module.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=8)** Now media, as I mentioned earlier in the introduction, is an entity just like content, taxonomy, blocks, and more.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=18)** We turned on the media module earlier in the course, and you might remember that we have five kinds of media available for our Drupal website, audio, documents, images, remote video, which is YouTube or Vimeo, and locally hosted video.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=35)** Once we add media to our site, we'll have them available to us in any media field that we add.
>
> **[0:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=41)** Here on the content menu on the media tab, here are some of the media items that you might upload and you're free to upload any kinds of media for this class that you want.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=51)** Here's the OSTips Drupal Scheduler Module remote video media item that we'll do in an upcoming video.
>
> **[0:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=59)** Just by pasting in the video URL from YouTube, it goes out and gets the thumbnail, the description, and allows us to embed it in our site.
>
> **[1:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=69)** One of the other things we'll do in this course is we'll create a digital asset management system using the media module, and Drupal is incredibly flexible when it comes to this.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=80)** Once again, I can filter by any type and see all of the remote videos that I've connected to my Drupal site, whether they be YouTube or Vimeo.
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=91)** One of the things I've begun suggesting to many of the training clients that I have is that you now use the media fields pretty much exclusively instead of the image upload fields, Because of course, all of these images that I upload are now completely reusable anywhere in my site.
>
> **[1:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=112)** The other thing to remember is that because media is an entity, I can add fields to any media type and this is how we'll build our digital asset management system later in the course.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/the-drupal-media-manager?u=76281980&t=124)** All right, with that introduction to the media entity, let's go ahead and add some media fields to our content types.

> [!info]- Semantic Content
>
> **Code Keywords:** module (4), this. (1), let (1)
> **Cross-References:** earlier in (2), later in (1)
> **Definitions:** is an  (2)
> **Env Vars:** url (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Adding media fields to content types
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=3)** - [Instructor] We turned the media module on in one of our very early exercises.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=7)** Let's go ahead and update our content types to include some media fields.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=12)** Now, to be fair, we're going to do exactly the same, so I'm going to go through this fairly quickly.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=19)** Click on Structure, Content types, Article and Manage fields.
>
> **[0:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=27)** Click Add field.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=30)** And choose the Media reference field.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=37)** And we're going to call this News Video.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=42)** Click Save and continue.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=45)** We'll leave it at one because we're going to embed a YouTube video.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=51)** Select the YouTube or Vimeo video you want to highlight.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=54)** You can add one to the Media Manager from here.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=57)** Again, just a reminder, it's always good to provide good help text for your content editors.
>
> **[1:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=63)** Choose remote video.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=66)** Once again, we're not going to create referenced entities.
>
> **[1:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=69)** We don't need to do that with the media entity.
>
> **[1:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=72)** Scroll down and click Save settings.
>
> **[1:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=75)** So we're going to add one video field and a media document field that allows for three files to be uploaded.
>
> **[1:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=83)** Click Add field.
>
> **[1:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=85)** Once again, choose Media.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=90)** News Files.
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=91)** Click Save and continue.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=94)** Let's change this to three, then click Save field settings.
>
> **[1:40](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=100)** Choose document this time, so PDF, document, docx, PowerPoint, Keynote, you get the idea.
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=108)** And you'll note we have three remaining.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=111)** Click Save settings.
>
> **[1:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=114)** All right, so we've updated the article content type.
>
> **[1:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=118)** Click on Manage form display.
>
> **[2:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=120)** And pull Published all the way down to the bottom and click Save.
>
> **[2:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=127)** Now let's see what that does.
>
> **[2:08](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=128)** If we hit Add content, Article, you'll notice that our Publish button is down at the bottom and our other fields are at the top.
>
> **[2:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=137)** Go to Structure, Content types, Business Directory, and Manage fields and go ahead and repeat what we just did.
>
> **[2:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=146)** Add field, Media, we'll call this Featured Business Video.
>
> **[2:35](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=155)** Save and continue.
>
> **[2:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=158)** Save field settings.
>
> **[2:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=162)** Remote video.
>
> **[2:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=165)** Save settings.
>
> **[2:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=167)** Now duplicate the file one that we did in the last content type.
>
> **[2:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=170)** Click Add field.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=172)** Media.
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=176)** We'll call this Business Files.
>
> **[3:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=181)** Limit it to three, click Save settings.
>
> **[3:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=184)** And choose document.
>
> **[3:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=187)** And Save settings.
>
> **[3:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=190)** Once again, let's go and repeat that for the last two content types.
>
> **[3:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=195)** Structure, Content types, Events, and Manage fields.
>
> **[3:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=201)** Add field.
>
> **[3:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=203)** Media.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=206)** Event Video, this is kind of maybe a video from last year's event.
>
> **[3:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=210)** Click Save and continue.
>
> **[3:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=212)** Limit it to one, Save field settings and choose remote video.
>
> **[3:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=219)** Click Save settings.
>
> **[3:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=222)** Finally, Add field, Media.
>
> **[3:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=229)** Event Downloads.
>
> **[3:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=232)** Save and continue.
>
> **[3:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=235)** Once again, change that to three, Save field settings, and choose document.
>
> **[4:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=241)** Click Save settings.
>
> **[4:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=247)** Finally, Structure, Content types and Locations and Manage fields.
>
> **[4:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=254)** Click Add field.
>
> **[4:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=257)** Media.
>
> **[4:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=259)** And the label is Location Video.
>
> **[4:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=264)** Save and continue.
>
> **[4:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=266)** Save field settings and choose remote video.
>
> **[4:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=272)** Now, there's a reason we're duplicating these fields and the reason is that many, many times, you'll want a video field and some file download fields on any number of given content types and that's what we're doing here.
>
> **[4:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=287)** I'm seeing this on a top of the enterprise sites that I've been training on in the last six months as people have moved from Drupal 7 to 8 and now Drupal 9.
>
> **[5:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=301)** Click Add field.
>
> **[5:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=303)** Media.
>
> **[5:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=307)** Location File Downloads.
>
> **[5:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=311)** Save and continue.
>
> **[5:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=314)** Change it to three, Save field settings and document.
>
> **[5:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=321)** Click Save settings.
>
> **[5:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-media-fields-to-content-types?u=76281980&t=325)** All right, you'll remember from the plan we discussed earlier, we've now completed all of the fields for our content types for news, the business directory, location and events.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (7), let (4), type. (2), finally, (2), module (1)
> **UI Navigation:** click on (2), select the (1), scroll down (1), go to (1)
> **Cross-References:** in the last (2), we discussed (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)

#### Updating content with media
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=0)** - [Instructor] The YouTube videos you've chosen to our Media Manager.
>
> **[0:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=4)** Click Add media and as you'll remember, we have five different kinds of media.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=9)** Go ahead and click Remote video.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=12)** And paste the URL in for your first video.
>
> **[0:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=16)** Click Save.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=19)** As we know, Drupal's going to run out, grab the thumbnail and the title.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=23)** This is one of my favorite videos to just sit and code to.
>
> **[0:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=28)** It's kind of like classical piano.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=30)** All right, go ahead and add one more video.
>
> **[0:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=34)** Click Add media and this time, I'm going to paste in a Vimeo video.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=38)** This is a video I shot with my drone in my backyard last winter when there was a lot of ice on the trees.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=45)** I called it Winter Day.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=47)** And now we have three remote videos.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=49)** We're going to add that last one that you've selected as we update one of our nodes.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=55)** Go ahead and click Add media and click on Document.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=60)** And update any document from your hard drive.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=62)** This can be a txt file, rtf, doc, docx, PowerPoint, PowerPoint x, Excel spreadsheets, pdf, odf, odg, odp, ods, odt, fodt, fods, fodp, fodg, a keynote, numbers or pages file.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=81)** So the nice thing with Drupal, they pretty much give you every option.
>
> **[1:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=85)** Now, this is editable, of course.
>
> **[1:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=87)** If you only ever wanted a document field to upload PDFs, you could eliminate all of those allowed types and again, we'll do that as we look at our digital asset management system.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=97)** Find a document on your hard drive and go head and upload it.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=103)** All right, so now we have two PDFs and three videos.
>
> **[1:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=109)** Of course, you can add all of your media in this way and it will always be listed here.
>
> **[1:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=116)** All right, let's go ahead and update our nodes.
>
> **[2:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=120)** Click on Content, and let's add one file and one video to Welcome to Drupalville.
>
> **[2:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=127)** Click Edit.
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=130)** Scroll down and click Add media for our news video and choose one of your videos and click Insert.
>
> **[2:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=141)** It's as simple as that.
>
> **[2:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=143)** Now, we have three PDFs that we can add to any of our current nodes.
>
> **[2:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=148)** Click Add media.
>
> **[2:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=150)** Go ahead and choose both and click Insert selected.
>
> **[2:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=157)** We'll leave this one at two.
>
> **[2:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=158)** Go ahead and click Save.
>
> **[2:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=162)** Now when we look at Welcome to Drupalville, and we'll scroll down, you'll notice that our comment is a little bit out of order.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=168)** We'll fix that right away.
>
> **[2:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=170)** You'll also see here's our video and our file downloads.
>
> **[2:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=174)** Now, these haven't been styled by CSS or anything yet but you'll note that they're in our nodes and I can click and play the video right within my website.
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=185)** How terrific is that.
>
> **[3:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=187)** This happens to be the Vimeo video and so you're not seeing any kind of YouTube settings there.
>
> **[3:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=193)** All right, let's go ahead and fix this.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=194)** Structure, Content types, Article and Manage display.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=199)** Manage form display is what your editors see, Manage display is what you see as a visitor.
>
> **[3:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=204)** Click Manage display, click and drag comments down to the very bottom.
>
> **[3:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=210)** And click Save.
>
> **[3:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=214)** Head back to Site.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=216)** And there we are, the comments are now down below the node itself.
>
> **[3:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=221)** Terrific.
>
> **[3:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=222)** All right, let's go ahead and update our business.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=226)** Click Content, and let's find OSTraining, our business directory, and click Edit.
>
> **[3:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=235)** Scroll down and you'll remember, I've already inserted a OSTraining video there, so I'm going to click Add media and I'm going to insert the Drupal Scheduler module.
>
> **[4:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=244)** Click Insert.
>
> **[4:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=246)** Again pick any video that you've already inserted into the media library and this time, I'm just going to add one of the files.
>
> **[4:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=258)** And you'll notice I have two items remaining for a total of three.
>
> **[4:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=261)** Click Save.
>
> **[4:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=265)** Taking a look at the node, there you go.
>
> **[4:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=269)** This is going to be the standard look and feel until we update the CSS.
>
> **[4:35](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=275)** Click on Content.
>
> **[4:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=278)** Now let's go ahead and add some media on the fly with this one.
>
> **[4:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=283)** Click on the node that you created in the locations content type.
>
> **[4:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=288)** And click Edit.
>
> **[4:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=290)** Again, just showing you a couple of different ways to maneuver around your site.
>
> **[4:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=294)** Scroll down and let's add media.
>
> **[4:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=297)** Now, you'll note that I've got three, like you do, but I also can add them on the fly.
>
> **[5:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=304)** So go ahead and embed that last YouTube link that you selected earlier.
>
> **[5:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=309)** I'm a huge Star Trek geek, and I thought this scene from Star Trek Picard is probably one of my favorite of all times, so I'm definitely using this clip, Saying Goodbye to Data.
>
> **[5:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=323)** Insert selected.
>
> **[5:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=326)** So either through the Media Manager or on the fly, you can add new media to your nodes.
>
> **[5:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=333)** Once again, add media for our file downloads and you can do the same thing here, add a PDF on the fly by choosing the file and clicking Save.
>
> **[5:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=347)** And then inserting it.
>
> **[5:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=349)** So managing your media either through the Media Manager on the fly is actually pretty simple.
>
> **[5:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=354)** Click Save and now in our Heritage Bank Center, you can see the video and the file.
>
> **[6:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=361)** All right.
>
> **[6:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=363)** Click Content one more time.
>
> **[6:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=365)** Let's add a video and a PDF to Drupal Course 101 in the events content type.
>
> **[6:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=371)** Click Edit.
>
> **[6:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=373)** Once again, you'll see the same two fields.
>
> **[6:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=376)** Just go ahead and choose any of the videos you've already inserted into your Media Manager and choose one of the PDFs.
>
> **[6:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=386)** Click Save.
>
> **[6:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=390)** So as I mentioned earlier, this is something I'm seeing on a lot of enterprise sites where they give you a video field and a PDF field or some kind of document field just in case that any of the content requires one of those things.
>
> **[6:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/updating-content-with-media?u=76281980&t=404)** It doesn't hurt to have empty fields because they just don't show up if you don't put anything in them but having the option is really tremendous.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), type. (2), this. (1), module (1)
> **UI Navigation:** click on (4), scroll down (4)
> **Env Vars:** pdf (3), css (2), url (1)
> **CLI Commands:** node (3), find (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (2)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### 3. Modules Explained

#### Modules explained
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=3)** - [Instructor] In this video, I want to talk to you about modules.
>
> **[0:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=6)** Modules in Drupal add features.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=9)** If you want your Drupal site to do X, well then, there's probably a module for that.
>
> **[0:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=16)** In the Drupal ecosystem, there are three kinds of modules.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=19)** Core, the ones that come with Drupal.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=22)** Contributed, the ones you can find at [drupal.org](https://drupal.org) that people from all over the world have created and uploaded.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=31)** And then finally, custom.
>
> **[0:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=32)** Custom modules are beyond the scope of this course, but generally speaking, custom modules are required when either core or contributed can't get the job done for you.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=42)** When you first install Drupal, you'll see a whole set of modules.
>
> **[0:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=46)** Some are turned on, some are left off.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=49)** So if you wanted a form, well, you just put a check mark in there, scroll down, and click Install.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=55)** So these are considered core modules and they add all kinds of functionality to your Drupal site like a date field, a file field, an image field, a link field, a telephone field, and more.
>
> **[1:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=69)** When you can't get the job done with just the core modules, well then, there are contributed modules.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=76)** Modules in Drupal are free.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=79)** That's right, unlike other content management systems, you never pay for a module that you download from [drupal.org](https://drupal.org).
>
> **[1:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=86)** And this is one of the great things about Drupal.
>
> **[1:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=89)** Thousands and thousands of developers from all over the world contribute free projects or modules to Drupal all the time.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=98)** I'm here at [drupal.org/project/modules](https://drupal.org/project/modules).
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=103)** And the first thing you need to remember is that Drupal modules only work with the version of Drupal that they're written for.
>
> **[1:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=109)** So when I click on Works with, Any, well, Drupal 10, 9, 8, 7, 6, 5, yes, even Drupal 4 still, and I select Drupal 9.
>
> **[2:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=120)** I'll leave all of the rest of these at the defaults.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=124)** And you'll note it's going to be sorted by most installed or most popular modules.
>
> **[2:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=129)** I get this question all the time.
>
> **[2:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=131)** Rod, what's your favorite 10 modules?
>
> **[2:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=133)** Well, I just tell people go to [drupal.org/project/modules](https://drupal.org/project/modules), select the version of Drupal that you're looking for, and click Search.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=142)** There are 4,124 modules for Drupal 9 at the time of this recording.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=149)** That's a lot of features that you can add to your Drupal site.
>
> **[2:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=154)** As I scroll down, you're going to see, again, the most popular ones.
>
> **[2:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=157)** Token, Admin Toolbar, which we've already installed, Chaos Tools, Metatag, Redirect, a fantastic module, Paragraphs, Entity Reference Revisions, and so on.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=172)** All right, once again, modules add features.
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=176)** So I'm going to head over here to Admin Toolbar and let's take a look at the typical project page and talk about how we find good modules.
>
> **[3:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=187)** Well, the first thing you're going to look for when you land on a project page, assuming you've filtered by the version of Drupal that you're working on, is the date released and the last date updated and who the maintainers are for this particular module.
>
> **[3:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=204)** You'll notice that E-M-E or eme is the originator of Admin Toolbar.
>
> **[3:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=210)** The first commit was four years ago and the Admin Toolbar was created by Wilfrid Roze.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=216)** He's a Drupal developer over in France and he's contributed to a few projects.
>
> **[3:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=223)** You can look up anybody's profile at [drupal.org](https://drupal.org).
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=226)** Other people have helped out, and you'll see this all the time.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=230)** The person who generally starts a module or a project isn't usually the only person that works on it.
>
> **[3:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=236)** As other things get added to it, as bugs get squished, well, other people jump in and help.
>
> **[4:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=242)** This is the beauty of Drupal and really no other CMS in the world does it quite like this.
>
> **[4:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=247)** None of these people get paid.
>
> **[4:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=249)** Modules are absolutely free.
>
> **[4:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=252)** Scrolling down a little bit, you'll continue to see description information.
>
> **[4:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=257)** Sometimes you'll see complementary modules.
>
> **[4:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=260)** You'll sometimes see other required modules, information about other versions, development status, and more.
>
> **[4:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=267)** Back over here on the right, you'll see the issue queue, the bug report, and any documentation if there's external documentation for it.
>
> **[4:35](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=275)** Other resources, the license, a demo, and translations and other projects that extend this.
>
> **[4:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=283)** Again, this will change depending on the module and then any development notes.
>
> **[4:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=288)** The really important part is down here at the bottom, under Project Information.
>
> **[4:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=293)** The category is Administration.
>
> **[4:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=295)** Now, I almost never look up Drupal modules in their categories.
>
> **[5:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=301)** It's just not the best way to find them.
>
> **[5:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=303)** I'll talk about that in just a second.
>
> **[5:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=306)** At the time of this recording, 198,000 websites report using this module.
>
> **[5:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=312)** Now, that is going to be grossly under-reported.
>
> **[5:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=315)** Not all Drupal sites report the modules that they have installed on their site.
>
> **[5:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=321)** So this is an indicator.
>
> **[5:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=324)** If this said 10 sites use this module, well, that's probably something to make you a little nervous.
>
> **[5:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=329)** You'll note that this module is ready for Drupal 9.
>
> **[5:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=332)** It is covered by the security advisory policy, and you generally want to see that.
>
> **[5:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=337)** The most important part here is in the Download section.
>
> **[5:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=341)** You'll see three colors here, green, yellow, and red.
>
> **[5:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=345)** Green means, well, go.
>
> **[5:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=346)** It's the typical traffic light.
>
> **[5:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=348)** This version of the module is recommended by the project's maintainer for Drupal 8.8 and above or 9 and above.
>
> **[5:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=358)** You can download the zip, the tar, or as you saw earlier, you can just copy the link or copy the link location.
>
> **[6:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=366)** Finally, you can see all the releases for a particular module by clicking on that link, and all project pages will include that link.
>
> **[6:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=375)** All right.
>
> **[6:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=376)** I promise to tell you how I find great modules.
>
> **[6:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=379)** Honestly, Google is your friend.
>
> **[6:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=382)** So when I want to find a module that's going to schedule node publication, I just type Drupal schedule nodes.
>
> **[6:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=389)** And the very first thing that pops up is the Scheduler module, which we're going to install.
>
> **[6:35](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=395)** So here, Google is your friend.
>
> **[6:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=398)** If I did want to look at the modules via the categories, well, here's the dropdown here.
>
> **[6:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=403)** And again, as you can see, there are many, many categories.
>
> **[6:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=407)** To be honest, I just find that difficult to navigate, but it's fun to check out.
>
> **[6:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=413)** So when you're looking for features for your Drupal website, well, you're going to look for a contributed module.
>
> **[7:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=420)** The only place you'll look for a contributed module is at [drupal.org](https://drupal.org).
>
> **[7:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=424)** And so if you're directed anywhere else, I'm going to encourage you to be very careful there.
>
> **[7:08](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=428)** There is a fairly decent level of security about modules at Drupal.
>
> **[7:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=433)** Drupal discourages contributed modules that are pretty much identical, unlike other content management systems.
>
> **[7:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/modules-explained?u=76281980&t=438)** And so when you need a new feature on your Drupal website, come to [drupal.org/project/modules](https://drupal.org/project/modules).

> [!info]- Semantic Content
>
> **Code Keywords:** module (15), finally, (2), this. (2), for. (1), for, (1)
> **CLI Commands:** find (6), make (1), tar (1), node (1)
> **URLs:** [drupal.org](https://drupal.org) (7)
> **UI Navigation:** scroll down (2), click on (1), go to (1), select the (1), dropdown (1)
> **Prerequisites:** install (3)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** cms (1)
> **Versions:** 8.8 (1)

#### Scheduling content
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=3)** - [Instructor] In this video we're going to start exploring, installing different modules.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=7)** Now, you remember from our modules explain video that you always need to make sure that your module works with the version of Drupal you're working with.
>
> **[0:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=17)** So whenever you're searching here at [Drupal.org](https://Drupal.org), you want to make sure that you change that to Drupal 9.
>
> **[0:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=22)** When you click search here as I mentioned, it'll always take you to the most popular modules for any given version of Drupal.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=31)** Head over to [drupal.org/project/scheduler](https://drupal.org/project/scheduler).
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=37)** The scheduler module, gives content editors the ability to schedule nodes to be published and unpublished at specific dates and times in the future.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=45)** Once again, we always double check that the module we're interested in works with Drupal 9.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=51)** And this is the key right here where it says requires Drupal eight or above or nine and above and it's green, so it's ready to go.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=62)** It's the recommended version by the projects maintainer.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=66)** And if they're using the automated test, you'll see the results down here.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=70)** As I mentioned in the introduction there are four ways to install a module in Drupal.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=76)** In this video, we're going to stick with the standard approach.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=81)** So hover over the zip or the tar, right-click and copy the link on the zip file and head back over to our site.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=90)** Hover on extend and click install new module.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=94)** And paste from a URL.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=97)** Now again if this doesn't work for you, on a PC with Dev Desktop just go ahead and upload the file, click install.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=106)** Go ahead and click enable newly added modules and you're going to scroll down.
>
> **[1:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=114)** Down under other and you'll see scheduler and scheduler rules integration.
>
> **[2:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=122)** Now the next question people ask is well, which ones do I install?
>
> **[2:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=126)** Because some modules actually have five, six or seven entries here under the other or their own tab.
>
> **[2:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=133)** Well, you need to read the documentation for that.
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=136)** In our example today, all we need is the scheduler module.
>
> **[2:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=140)** So go ahead and put a check mark in there and click install.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=149)** And there we are.
>
> **[2:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=151)** Now, if I scroll back down under other and click on the down caret, there's a link to help, permissions and configure.
>
> **[2:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=159)** And you'll note that this module requires system, date-time, field, node, text, filter, user and views modules to be enabled.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=168)** And those are always enabled by default by the way.
>
> **[2:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=171)** And it's required by the schedule rules integration which we're not going to use.
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=176)** Go ahead and click on configure.
>
> **[2:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=179)** And this actually takes us to configuration, content authoring and scheduler.
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=185)** If you want users to only specify a date and the time is irrelevant, well, you can put a check mark in here.
>
> **[3:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=192)** I find that most people want to put the date and time in so I usually leave that alone and on the lightweight cron tab.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=199)** So cron in any website is, something that runs in the background at a given specific time period.
>
> **[3:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=208)** And so cron needs to be set up if you're using your own web host for this, this is something you need to do.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=216)** Head over to structure, content types and let's manage the article content type.
>
> **[3:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=222)** So just click on the word article.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=226)** And for every content type.
>
> **[3:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=228)** Now you're going to see a new entry here called scheduler where we can enable publishing and unpublishing on any given content type.
>
> **[3:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=238)** So let's do that for the article content type.
>
> **[4:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=240)** We'll enable scheduling.
>
> **[4:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=243)** You'll note that it says, change the content creation time to match the scheduled publishing time.
>
> **[4:08](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=248)** You can do that.
>
> **[4:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=251)** You can make it so it requires a scheduled publishing.
>
> **[4:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=255)** We won't do that because we want to leave it with the ability to just be published if we click save.
>
> **[4:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=262)** It can create a new revision on publishing.
>
> **[4:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=266)** And if you click on advanced options, it's going to ask what do you want to do if the editor chooses a date in the past?
>
> **[4:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=272)** You can display an error message, publish the content immediately after saving or schedule the content for publication on the next cron run.
>
> **[4:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=284)** Let's go ahead and click enable unpublishing and it'll enable scheduled unpublishing for the content type.
>
> **[4:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=291)** So now I can publish it on demand and unpublish it on demand.
>
> **[4:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=296)** And finally, since we've enabled these options, we have options under the node edit page.
>
> **[5:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=303)** Where do I want this information to be found?
>
> **[5:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=306)** In the vertical tab which will be over here on the right-hand side or in a separate field set at the bottom of the node.
>
> **[5:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=313)** I kind of like it over on the right-hand side.
>
> **[5:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=315)** So we're going to leave that as it is.
>
> **[5:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=318)** All right, save content type.
>
> **[5:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=323)** So this is a particularly helpful module.
>
> **[5:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=325)** I install it on a lot of Drupal sites that I use.
>
> **[5:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=328)** Head over to content and let's edit our welcome to Drupalville node which is the article content type, click edit.
>
> **[5:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=338)** And you'll now see a dropdown called scheduling options.
>
> **[5:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=342)** By leaving it blank, it's going to be scheduled as soon as we hit publish.
>
> **[5:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=346)** But now I can update it and give it a publication date.
>
> **[5:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=349)** Now, again, I'm in Safari.
>
> **[5:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=352)** If I was in Chrome, I would have a little calendar icon here.
>
> **[5:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=355)** You'll see the format for your browser here.
>
> **[5:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=359)** So by adding this module, we've added some tremendous functionality to our Drupal website.
>
> **[6:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=367)** If I wanted to have the scheduling on all of my content types, well I would just go to each content type, click on the name of the content type and enable or disable scheduler as I want.
>
> **[6:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/scheduling-content?u=76281980&t=381)** Tremendous value from a contributed module.

> [!info]- Semantic Content
>
> **Code Keywords:** module (10), type. (6), let (4), type, (2), this, (1)
> **CLI Commands:** node (4), make (3), tar (1), find (1)
> **UI Navigation:** click on (5), right-click (1), scroll down (1), dropdown (1), go to (1)
> **Prerequisites:** install (6), configure (2), set up (1)
> **URLs:** [drupal.org](https://drupal.org) (2)
> **Warnings:** note that (2)
> **Env Vars:** url (1)
> **Documentation:** the documentation (1)

#### Inserting a Google Map
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=3)** - [Instructor] In this video, we're going to install another module but before we do, I just want to remind you of our site building workflow.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=9)** We're here under the second section where we're building out our content types and adding fields.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=14)** Some of the modules we're installing affect the fields that we need.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=18)** Some like the scheduler module we just installed affect the publication of our nodes.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=24)** And some of the modules are going to add complete feature sets to our Drupal site.
>
> **[0:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=29)** Well in this video, we're going to install a module that's going to affect one of the fields that we have in our locations content type.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=37)** You'll remember we added a location address field and made it a plain text field.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=44)** And so we're going to grab a module that's actually going to convert this to a Google Map.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=49)** Head over to [drupal.org/project/simple_gmap](https://drupal.org/project/simple_gmap).
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=54)** And one of the reasons I really like this module is because I don't need a Google Maps API key which costs money.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=62)** Now on larger enterprise sites we don't care but on my personal blog I don't really want to have to pay money for an API key.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=70)** So what this is going to do is it actually changes the manage display of the field into a Google Map.
>
> **[1:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=82)** All right, once again scrolling down, we're going to make sure that yes it's available for Drupal nine and you'll note the new release numbers.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=90)** If you've been around Drupal at all, typically this would have been 9.x-, something like this in Drupal seven.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=99)** What a lot of developers are doing now is they're using more typical release numbers say 3.0.0 to reflect that the project is available for multiple versions of Drupal.
>
> **[1:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=112)** So this requires Drupal eight and above or nine and above and as it notes, changing to semantic versioning in the wake of D9's release.
>
> **[2:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=121)** Alright, so we have copied the link location.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=125)** If you're on a PC, you've downloaded the link, we're going to go ahead and download the zip file and I'm going to click on extend and install new module, choose the file and install and enable.
>
> **[2:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=147)** Scrolling down, you're going to find this under field types.
>
> **[2:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=150)** Now, if you don't want to search, you can just type simple and there it is under field types, simple Google Maps.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=160)** Put a check mark in there, let's take a look at the dropdown here.
>
> **[2:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=165)** The machine name is simple_gmap version three and it requires field, text, filter, user and system.
>
> **[2:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=170)** Of course, those are all turned on by default.
>
> **[2:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=173)** Click install.
>
> **[2:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=177)** Now once again, it's imperative that you read the documentation for any module that you're downloading.
>
> **[3:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=184)** This has no documentation guides so all the documentation is here in the middle of the page for simple_gmaps.
>
> **[3:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=192)** The way this works is really simple.
>
> **[3:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=195)** Head over to structure, content types, locations and manage display.
>
> **[3:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=202)** As a reminder manage display is the settings that dictate how your site visitors see your particular content.
>
> **[3:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=210)** So here's our location address.
>
> **[3:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=212)** It's a plain text field.
>
> **[3:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=214)** We going to hide the label and click on plain text and you'll see Google Map from one line address.
>
> **[3:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=224)** And as soon as you do that there's some settings here, a dynamic map, it's an iframe, zoom level is 14, click on the gear.
>
> **[3:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=235)** You can change these settings right here.
>
> **[3:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=239)** Embedded dynamic map or a static map, the width and height of the map, I'm going to go to 600 by 300.
>
> **[4:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=246)** That's a nice big map.
>
> **[4:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=249)** We'll leave the title empty for the iframe.
>
> **[4:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=254)** If you're on a retina display and you're using the static map, you can double the size if you change this value.
>
> **[4:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=263)** You can link to the map and of course change the zoom level and include the original address.
>
> **[4:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=273)** Go ahead, update those settings for your site.
>
> **[4:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=276)** So dynamic 600, 300, no link to the map, include the original address and click update.
>
> **[4:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=288)** Now we'll need to save.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=292)** There we are.
>
> **[4:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=293)** Now head back over, click on content and let's click on our location node that we entered earlier.
>
> **[5:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=301)** And there's our map, brilliantly displayed and it still shows the actual address field as well which is really terrific.
>
> **[5:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/inserting-a-google-map?u=76281980&t=312)** So a simple module that does one thing, it takes a an address and a text field and embeds a Google Map for us right in our website.

> [!info]- Semantic Content
>
> **Code Keywords:** module (8), let (2), static (2), type. (1), default. (1)
> **UI Navigation:** click on (5), dropdown (1), go to (1)
> **Prerequisites:** install (5)
> **CLI Commands:** make (1), find (1), node (1)
> **Code Identifiers:** simple_gmap (2), simple_gmaps (1)
> **Env Vars:** api (2)
> **Documentation:** the documentation (2)
> **Exercise Files:** download the (1), zip file (1)

#### Adding internal linking to the WYSIWYG editor
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=3)** - [Instructor] One of the questions I get virtually every time I teach a course and I mean every time, how do I insert an internal link into the body field that and how do I open external links in a new window?
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=18)** Well, this is a pretty common problem and to be honest, I'm kind of surprised that Drupal hasn't put something that fixes this in core.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=26)** Well, fortunately there are two modules that help us in this regard, head over to [drupal.org/project/Linkit](https://drupal.org/project/Linkit).
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=37)** Linkit is a module that takes the link in Ckeditor and converts it to be either an internal or an external link.
>
> **[0:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=46)** Linking internally is really important and so the ability to be able to link in the body field is really helpful.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=55)** So once again, you can read the documentation here.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=60)** There is an advanced link module that will also insert an icon into Ckeditor, we're not going to worry about that one but if you scroll down, you'll note that this particular module is still in beta for Drupal nine.
>
> **[1:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=77)** So in this case, we're going to install the beta, however on a production site, you're going to want to test it thoroughly before you actually do so.
>
> **[1:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=86)** So you'll note there's two betas here, a beta one with the new semantic numbering system and that's the one we're going to install as well as Drupal eight and Drupal seven versions.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=99)** Once again remember, you must use a version of a module that works for your version of Drupal and in this case version 8.8 or above or version nine or above.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=111)** So we're going to install this particular module the really old fashioned way.
>
> **[1:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=116)** Could you go ahead and download the file please.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=119)** Head back over to dev desktop or if you're using a Drupal site at a web host you'll need to open Cpanel and go to file manager or open up an FTP program, we need to upload this file directly to our modules folder.
>
> **[2:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=133)** So you'll see the second line down is local code.
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=136)** Go ahead and click on that.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=138)** And again, if you're hosting on a public domain somewhere go ahead and log in with your FTP settings and inside the file folders, you're going to see core modules, profile sites, themes and vendor.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=149)** This is the file and folder structure for a Drupal nine site.
>
> **[2:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=153)** All of the modules that we're uploading are in the modules folder.
>
> **[2:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=157)** So this is where we're going to put that file we just downloaded.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=160)** Go ahead and open your downloads folder, click and drag the Linkit 6.0.0-beta1.zip file into your modules folder and go ahead and unzip it.
>
> **[2:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=173)** And there we are.
>
> **[2:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=175)** You can delete that link at file, if you're on a web host somewhere pause the video until you're logged into your file manager and go ahead and upload that and then decompress the zip file.
>
> **[3:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=186)** Head back over to your site and click extend and you should see the Linkit module under user interface.
>
> **[3:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=197)** Go ahead and click install.
>
> **[3:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=203)** So this is going to update our Ckeditor link button to now use both internal and external links, until now it was just a text field where you inserted the link.
>
> **[3:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=212)** Now that it's installed, if we click on the down triangle and click configure, we'll see that there are profiles.
>
> **[3:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=219)** You can define new profiles, we're going to go with the standard default one here and we really don't need to do anything here.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=226)** However, we do need to update Ckeditor.
>
> **[3:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=229)** So configuration, content authoring, text formats and editors please and click configure for basic HTML since that's the default, we'll just do this one.
>
> **[4:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=240)** Now you'll see, here a Drupal link plug-in setting, click on that and go ahead and make Linkit enabled and select the default profile.
>
> **[4:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=254)** Turning this on enables certain filters, Linkit URL converter.
>
> **[4:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=260)** It's going to update the links inserted by Linkit to point to entity URL aliases.
>
> **[4:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=266)** And you'll note down at the bottom Linkit URL converter is now enabled.
>
> **[4:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=271)** All right, save configuration.
>
> **[4:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=274)** Now you need to do that for full HTML as well if you want this to work.
>
> **[4:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=278)** Head over to content and click on Drupal course and double click on the word Drupal and click the link icon.
>
> **[4:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=289)** Now you're going to notice that this has been updated.
>
> **[4:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=293)** This before was just a field and I would have had to have put the full link to wherever I wanted it to go.
>
> **[5:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=300)** Now it works for internal and external links.
>
> **[5:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=303)** So if I type an a, there are all the nodes that have an a in them and you'll note it insert the path without my site name in it which is what we want.
>
> **[5:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=315)** Go ahead and click save.
>
> **[5:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=317)** And now that's a link to that node on my Drupal website.
>
> **[5:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=322)** If I go ahead and save, take a look at it and click on it it's going to immediately take me over to that node.
>
> **[5:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=333)** So that's the Linkit module and it's really terrific.
>
> **[5:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=336)** Now we're going to add another module here in the next video that's going to allow us to open links in a new tab or a new window and it's called the Extlink module.
>
> **[5:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/adding-internal-linking-to-the-wysiwyg-editor?u=76281980&t=348)** These two work together really well.

> [!info]- Semantic Content
>
> **Code Keywords:** module (9), case, (1), public (1), delete (1), interface (1)
> **UI Navigation:** click on (6), scroll down (1), go to (1), select the (1)
> **Env Vars:** url (3), ftp (2), html (2)
> **Prerequisites:** install (4), configure (2), you'll need (1)
> **CLI Commands:** node (2), unzip (1), make (1)
> **Exercise Files:** zip file (2), download the (1)
> **Definitions:** is a  (2), is an  (1)
> **Versions:** version 8 (1), 6.0.0 (1)

#### Open external links in a new tab or window
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=3)** - [Instructor] So we have the linkit module working in our CKEditor.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=7)** When you click to make something into a link, it now uses either an internal or an external URL but that doesn't solve the problem that I actually mentioned earlier.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=19)** The fact that there's no way to open links in new tabs or new windows.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=25)** And frankly, you should never allow an external link to take somebody away from your site.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=30)** You should always open them up in a new tab or window.
>
> **[0:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=33)** Well, there are several modules that kind of manage some of this for us.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=38)** The external links module works with linkit in a really nice way.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=42)** So we're going to download this one and install it.
>
> **[0:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=46)** All right, now we have installed modules via the file upload, via the copy and paste URL and by manually uploading the project files into our modules directory.
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=61)** This next way is using Composer and by far, this is the preferred way with Drupal 9.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=70)** Composer is something you need to install on your web host and it's installed for us in Acquia Dev Desktop but it manages Drupal and all the dependencies and libraries that Drupal needs.
>
> **[1:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=82)** And moving forward with Drupal 9, Composer is the preferred way to manage all of those things.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=88)** So take a look at the documentation here at [Drupal.org](https://Drupal.org) at the link on the screen to learn more about how to use Composer.
>
> **[1:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=97)** It's not difficult but you will need to be able to run Composer on your system.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=103)** So now we have it built into Dev Desktop today.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=106)** If you're using your own web host or a different system and you don't have Composer installed, you may not be able to install the module the way we're going to do it, so go ahead and install the module the way we've done it in previous videos.
>
> **[2:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=120)** All right, the first thing we need to do is get the machine name for the project we want to install and that's in the URL.
>
> **[2:08](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=128)** Extlink.
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=130)** All right.
>
> **[2:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=131)** Head over to Dev Desktop and make sure your current site is highlighted and click the little terminal icon window.
>
> **[2:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=137)** That's going to open a terminal window and it's going to look something like this.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=142)** Again, I'm on a Mac.
>
> **[2:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=143)** Don't worry about it if it doesn't look exactly the same but you'll see in the path, the root of your Drupal website.
>
> **[2:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=150)** You don't need to go anywhere, you don't need to change directories in order to make this work.
>
> **[2:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=154)** All right, I'm going to clear my screen just so we can start from scratch here.
>
> **[2:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=158)** If you're on your public web host and you want to know if you have Composer installed, just type composer.
>
> **[2:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=164)** And you should see this kind of an output.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=168)** All right, let's install the module.
>
> **[2:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=170)** Now, the first time you run Composer on any site, this takes quite a bit of time, so you're probably going to want to pause the video.
>
> **[2:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=177)** All right, the command is composer require drupal/extlink
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=185)** and so what this is going to do, it's going to go out, find the latest version of extlink and try and install it.
>
> **[3:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=193)** If is a Drupal 9 version, then it will install.
>
> **[3:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=197)** If it's not, it won't.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=199)** If we had tried to use Composer on the linkit module, it would have failed because the latest one that's in the green, recommended by the project's maintainer is for Drupal 8 only.
>
> **[3:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=212)** There is a command to download the latest version, whether it's a beta or not, and that's explained on the Drupal Composer documentation page we looked at a moment ago.
>
> **[3:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=222)** All right, hit Enter.
>
> **[3:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=224)** So as I mentioned, this is going to take quite a bit of time the very first time Composer runs on your site.
>
> **[3:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=231)** So go ahead and pause the video and come back when you get the success message.
>
> **[4:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=240)** So that probably took quite a bit of time the first time it runs.
>
> **[4:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=244)** Composer has to download a whole lot of dependencies and run a whole lot of checks.
>
> **[4:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=249)** The next time you run Composer to install a module, it will go much more quickly.
>
> **[4:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=255)** All right, head back over to your site and click on Extend and filter by ext and you should see external links.
>
> **[4:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=264)** Go ahead and put a check mark in there and click install.
>
> **[4:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=273)** Let's just take a quick peek again at the project itself.
>
> **[4:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=277)** The machine name is extlink, the version is 8x-1.3, which is fine because it does work on Drupal 8 or 9 and if I click Configure, it's going to take me over to admin, config, user interface, extlink.
>
> **[4:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=295)** So again, Configuration, User interface, External links.
>
> **[5:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=300)** Right, we have a bunch of options here.
>
> **[5:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=302)** You can replace the normal image links with Font Awesome icons if you want.
>
> **[5:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=309)** And the big one here is we want to open external links in a new tab or window and we won't alter links with the default target value of self.
>
> **[5:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=321)** So go ahead and put a check mark in there as well.
>
> **[5:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=325)** If you want to display a popup warning when an external link is clicked, this drives me crazy as an end user but some sites require it, well then, you'll just put a check mark there.
>
> **[5:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=336)** Go ahead and click Save configuration.
>
> **[5:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=339)** Now let's see if this is working.
>
> **[5:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=342)** Head back over to your site, click on Content and go to your locations content type node and you'll now see that external link that's going to go to Google has that little icon next to it and if I click, it's going to open in a new tab or window.
>
> **[5:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=359)** Excellent.
>
> **[6:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=360)** If I go back to content and I click on Drupal Course 101, you'll note that there's the course website.
>
> **[6:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=369)** It's got that little icon and if I click on it, congratulations, there's nothing I need to do there, it opens it up in a new window.
>
> **[6:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=376)** What about links that I add in the body?
>
> **[6:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=378)** Well, go ahead and click Edit and you'll remember, our Drupal link is internal.
>
> **[6:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=383)** Let's add an external link just to make sure.
>
> **[6:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=390)** Click on the link icon and type in the fully qualified domain.
>
> **[6:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=397)** Click Save.
>
> **[6:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=399)** And Save and now [google.com](https://google.com) opens in a new tab as it should.
>
> **[6:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=404)** But my internal link does not.
>
> **[6:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=408)** Fantastic.
>
> **[6:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=410)** So linkit and extlink together, two great modules, that give you that basic functionality that probably ought to be in Drupal Core but isn't.
>
> **[7:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/open-external-links-in-a-new-tab-or-window?u=76281980&t=421)** So thank you to two great contributed modules.

> [!info]- Semantic Content
>
> **CLI Commands:** composer (15), make (4), find (1), node (1)
> **Code Keywords:** module (7), let (4), require (2), interface (2), this. (1)
> **Prerequisites:** install (10), configure (1)
> **UI Navigation:** click on (5), go to (2)
> **Env Vars:** url (3)
> **Best Practices:** you should never (1), you should always (1), recommended (1)
> **URLs:** [drupal.org](https://drupal.org) (1), [google.com](https://google.com) (1)
> **Tools:** terminal (2)

#### Paths: Installing Pathauto, Token, and CTools
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=3)** - [Instructor] So far we've installed some modules that make changes to fields, that make changes to links, that add brand new functionality to our content types.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=14)** As I mentioned in my modules explain video, if you have a question about whether Drupal can do something, the answer is well, yeah, probably there's a module for that.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=26)** There are 10s of 1000s of Drupal modules that do whatever you need.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=31)** In this next exercise, we're going to add three modules that work together to give us human friendly URLs on our website.
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=39)** If we head back to the site building workflow for just a moment, we're finishing up modules explain and we're about to add the paths to our content.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=47)** In other words, converting /node/noteID, which could be 3,721 to a human friendly URL, which is going to be more like /news/newsaboutDrupal.
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=61)** And so, we're at that point in the site building workflow.
>
> **[1:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=64)** We're going to install three modules and then set up our Pathauto patterns.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=70)** So the Pathauto module is what comes to the rescue.
>
> **[1:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=74)** Pathauto was started by a guy named Dave Reed.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=76)** He's terrific.
>
> **[1:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=78)** And Dave's been involved in, well, a few different projects through the years.
>
> **[1:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=84)** He's contributed a tremendous amount to the Drupal project.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=88)** And you're going to see people like that throughout [drupal.org](https://drupal.org).
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=93)** One of the big things to look for when you're looking at Drupal projects is dependencies.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=98)** So Pathauto requires Token and Ctools.
>
> **[1:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=102)** I know that says Drupal 8.
>
> **[1:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=104)** But if you scroll down to the bottom, this release 8.x-1.8 works with Drupal 8.8 or above or nine and above.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=113)** So this is the one we actually want.
>
> **[1:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=116)** So, I'm going to let you install these three modules any way you want.
>
> **[2:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=121)** I'm going to install Pathauto via Composer.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=124)** Head back to my terminal window Composer require Drupal Pathauto.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=135)** And once again, this is going to take just a few moments.
>
> **[2:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=148)** Now, one of the reasons you want to use Composer is you'll note that Composer automatically installed the two other modules that Pathauto requires, Token and Ctools.
>
> **[2:42](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=162)** How cool is that?
>
> **[2:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=163)** So in one command, I've included everything I need to get this up and running.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=168)** Now, if you didn't use Composer, go ahead and install Token and Ctools as well.
>
> **[2:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=174)** And the easiest way to do that is once you've done Pathauto, come here and click on Token, which is at [drupal.org/project/Token](https://drupal.org/project/Token).
>
> **[3:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=184)** And then go back one page and click on Ctools and install Ctools.
>
> **[3:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=190)** Now Chaos Tools is an amazing set of libraries designed originally by Merlin of chaos.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=196)** His name is Earl Miles.
>
> **[3:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=198)** He's kind of like Dave Reed.
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=199)** He's been around forever and contributed to just about everything.
>
> **[3:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=204)** Three terrific models from two terrific developers.
>
> **[3:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=208)** All right.
>
> **[3:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=209)** Once you have those three modules installed, and it doesn't matter what order you did it in, you can't turn them on independently.
>
> **[3:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=217)** Click on Extend again.
>
> **[3:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=219)** And you're going to minimize core and administration.
>
> **[3:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=223)** You're going to enable Chaos Tools.
>
> **[3:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=225)** You're not going to enable the experimental modules.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=230)** You're going to scroll down and find Pathauto and Token.
>
> **[3:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=237)** These are the three modules we need.
>
> **[3:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=239)** Token, Pathauto and Chaos Tools.
>
> **[4:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=245)** Go ahead and click Install.
>
> **[4:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/paths-installing-pathauto-token-and-ctools?u=76281980&t=247)** And in the next video, we'll configure our Pathauto patterns.

> [!info]- Semantic Content
>
> **CLI Commands:** composer (5), make (2), node (1), find (1)
> **Prerequisites:** install (6), set up (1), configure (1)
> **UI Navigation:** click on (3), scroll down (2)
> **Code Keywords:** module (2), let (1), require (1)
> **Code Identifiers:** noteid (1), newsaboutdrupal (1)
> **URLs:** [drupal.org](https://drupal.org) (2)
> **Versions:** 1.8 (1), 8.8 (1)
> **Definitions:** in other words (1), is an  (1)

#### Configuring Pathauto
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=3)** - [Instructor] Right now that we have chaos tools pathauto and token installed, let's go ahead and set up the patterns for our human friendly URLs.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=12)** Head over to configuration search and metadata and click on URL aliases.
>
> **[0:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=20)** URL aliases are generally speaking done by default in Drupal.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=24)** And I'm going to encourage you, unless you have a really good reason, you should not change the URL aliase of a node.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=31)** Now that does differ a little bit with landing pages but just remember you can't have two nodes on your site with exactly the same path, all right.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=38)** What this is going to do is allow us to set up patterns for all of our content types.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=44)** So for instance, an event is not going to be node/32 is going to be events/and the title of the node.
>
> **[0:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=53)** So that's the pattern we're going to set up, all right.
>
> **[0:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=56)** Click add pathauto pattern, choose content.
>
> **[1:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=63)** We'll start with the article content type, and the pattern is going to be news/the title.
>
> **[1:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=71)** Well now, how do I know what the token is for title?
>
> **[1:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=74)** Click browse available tokens and you'll remember that content are nodes.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=81)** So click on notes and you're going to scroll down until you find title, node:title.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=94)** So this is a token and Drupal knows just about everything about your site and puts a lot of things into these things called tokens.
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=101)** Just click on it and you'll see square bracket, node:title.
>
> **[1:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=107)** In the label field, go ahead and put article because that's the content type and click save.
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=117)** Now to make this work, we need to generate the new URLs.
>
> **[2:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=122)** Click on bulk generate, choose content and choose update.
>
> **[2:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=131)** That generated two URL aliases well, because we have two article nodes.
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=136)** And hover over the Drupal icon and flush your cache, URL aliases are kept in cache in Drupal so we need to flush that in order to make it work.
>
> **[2:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=147)** Now, if you're not already there, click on content and head down to welcome to Drupaiville and you'll see right there in the bottom left corner /news/welcome-Drupaiville.
>
> **[2:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=159)** If I hover over my first Drupal node, well done it's/news/1my-first-triple-node, well done.
>
> **[2:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=167)** All right, let's go ahead and add the path patterns for our other three content types.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=172)** Configuration, search and metadata and URL aliases.
>
> **[3:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=180)** Here's a list of our newly generated aliases, so you'll always be able to come back here and see what they are.
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=188)** Click on patterns, add pathauto pattern, select content again and this time we'll type business-directory/ and then once again, [Node:title].
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=206)** Now you can click on browse available tokens if you want, it's the business directory and the label, we'll just call it again, business directory, click save.
>
> **[3:41](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=221)** Let's create the next pattern and then we'll generate them all at the same time.
>
> **[3:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=224)** Click add pathauto pattern, content, event/node:title, put a check, Mark and events and the label is events.
>
> **[4:00](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=240)** Click save.
>
> **[4:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=244)** Add path auto pattern, content, location/node:title with a square brackets around it and choose locations.
>
> **[4:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=257)** The label is locations and click save, all right.
>
> **[4:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=264)** We can do the same thing for the basic page.
>
> **[4:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=267)** Now, when you use a content type for multiple things the pattern gets a little trickier.
>
> **[4:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=273)** We're going to use the basic page for static pages and for landing pages later on when we look at layout builder so we can either update it now or update it later let's go ahead and update the basic page.
>
> **[4:45](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=285)** So once again, choose content.
>
> **[4:47](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=287)** We'll just call that page and then node:title and choose basic page with a label of page.
>
> **[4:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=297)** Now, before I leave this page note that we can set up patterns for media taxonomy terms and users.
>
> **[5:06](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=306)** So right now our taxonomy turn landing pages are my [site.com/taxonomy/term/id](https://site.com/taxonomy/term/id).
>
> **[5:11](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=311)** So that could be 30 or 31 or whatever.
>
> **[5:16](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=316)** So this would be something you want to go ahead and do for all of the pattern types on your site.
>
> **[5:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=323)** Click save, all right.
>
> **[5:25](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=325)** Click on bulk generate, click content and click update.
>
> **[5:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=332)** Now this is not something you want to do on your production site, it's really going to mess up your production URLs.
>
> **[5:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=339)** That's why we do it here in the site building workflow we install the module and we create the path patterns for all of our content types before we ever get to adding a whole lot of content.
>
> **[5:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=352)** So flush your cache and click on content.
>
> **[6:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=361)** And you'll see all of our nodes have the new URL structure.
>
> **[6:09](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=369)** If you ever do need to know the node ID for any given reason, hover over the edit tab and you'll see in the bottom left corner.
>
> **[6:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=377)** this is node ID number nine, and I'll show you why that's important in an upcoming video.
>
> **[6:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/configuring-pathauto?u=76281980&t=384)** Well, congratulations, you've installed a whole bunch of models that add a whole bunch of features to your triple website.

> [!info]- Semantic Content
>
> **CLI Commands:** node (13), make (2), find (1)
> **UI Navigation:** click on (9), scroll down (1)
> **Code Keywords:** let (4), type, (1), static (1), module (1)
> **Env Vars:** url (7)
> **Prerequisites:** set up (4), install (1)
> **URLs:** [site.com](https://site.com) (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)

#### Installing Devel
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=3)** - [Instructor] So we've installed a bunch of modules that are doing a bunch of different things.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=7)** There's one more module we need to install in order to prepare for the next section in the course.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=13)** Head over to [drupal.org/project/devel](https://drupal.org/project/devel).
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=18)** Now you'll remember from our site building workflow that we're not going to add content until the very end, but that doesn't mean that we don't need content in order to actually work on the next set of tasks.
>
> **[0:32](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=32)** We need content for workflows, We need content for blocks, and we definitely need content for layout builder and views.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=38)** So we're going to add a bunch of fake content using the module Devel that can add content, taxonomies, menus, all kinds of helpful information to our site, and then delete it with just a few clicks.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=55)** The Devel module does a lot more than that, but we're basically going to use it for that purpose during this course.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=62)** Now, as we scroll down, you'll note that as of June 23rd, 2020, Version 4.0.0 works with Drupal 8.8 and above and Drupal 9 and above.
>
> **[1:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=74)** So go ahead and install this module using the method that you prefer to use, and that could be downloading it and uploading it or downloading it and uploading it directly to the folder directory or using Composer.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=88)** I'm going to go ahead and use Composer.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=90)** So again, the command is composer require drupal/devel.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=98)** And it's automatically going to look for the most recent version of Devel that works with Drupal 9 and install.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=113)** And you'll notice from my screen that there were a number of dependencies that needed to be installed, and so Composer took care of those for me.
>
> **[2:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=121)** Now you might also be wondering, man, that takes a lot longer than just doing it manually.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=125)** Well, again, the advantage of Composer is that it always takes care of any dependencies that your site and your modules require.
>
> **[2:13](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=133)** All right, heading back over to the site, I'm going to click on extend and scroll down to Development.
>
> **[2:24](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=144)** And there are three modules here, Devel, Devel Generate, and Web Profiler.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=149)** Web Profiler is a really neat module that will set up a toolbar at the bottom here that just shows you just a ton about what's going on on your site.
>
> **[2:36](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=156)** It does slow your site down a little bit, so we're going to leave it turned off.
>
> **[2:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=159)** Go ahead and put a check mark in Devel and Devel Generate, please.
>
> **[2:43](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=163)** Scroll down and click Install.
>
> **[2:51](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=171)** Now, Devel is a module you absolutely do not want to leave on your production server.
>
> **[3:02](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=182)** With Devel, somebody could delete your entire content from your site in four clicks.
>
> **[3:10](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=190)** That's pretty scary.
>
> **[3:12](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=192)** Plus Devel adds a quite a bit of overhead to your Drupal website, so you just don't want to leave it on your production server.
>
> **[3:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=200)** All right, Configuration, Development, and Devel generate, please.
>
> **[3:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=207)** There's also a menu called Generate here, which is the same thing.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=213)** You can generate content, media, menus, terms, users, and vocabularies.
>
> **[3:39](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=219)** So Devel gives us tremendous help in testing out all of the functionality of our site without taking a lot of time to actually enter real content.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=230)** You want to run tests with fake content just in case you need to make some pretty major changes to the structure of, say, a content type.
>
> **[3:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=237)** All right, so let's go ahead and generate content.
>
> **[4:05](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=245)** Once again, if you're on a Windows-based machine and you set up a video field with the media manager, Devel will most likely fail.
>
> **[4:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=254)** You're still able to add content manually, so go ahead and pause the video and add a few nodes.
>
> **[4:20](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=260)** Let's generate articles, business directories, events, and locations.
>
> **[4:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=267)** Go ahead and choose those four.
>
> **[4:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=271)** We'll generate 50 nodes and you'll note here, I can delete all content in these content types before generating new content.
>
> **[4:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=278)** So if I chose all, said zero, put a check mark in here, and clicked Generate, literally four clicks, well, I've just deleted all the content on your site.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=292)** So once again, do not leave this on your production server.
>
> **[4:57](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=297)** So if we generate 50 nodes, that's going to be about 12 nodes per content type, that should be fine.
>
> **[5:04](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=304)** The other thing is let's change the maximum number of words and titles to two, please because it's going to use lorem ipsum text and that gets pretty long.
>
> **[5:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=314)** Go ahead, scroll down, and click Generate.
>
> **[5:18](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=318)** And there we are.
>
> **[5:19](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=319)** Now because we had the scheduler module installed, it randomly chose some nodes to publish and unpublish at particular dates and times.
>
> **[5:27](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=327)** Not a problem.
>
> **[5:28](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=328)** Click Content.
>
> **[5:31](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=331)** And you're going to see just a bunch of new nodes here.
>
> **[5:35](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=335)** Fantastic.
>
> **[5:37](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=337)** And if we click on any of them, just go ahead and click on one of your business directory nodes, you're going to see a lot of lorem ipsum text, a business logo, the business address.
>
> **[5:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=349)** Now, unfortunately devel can't go out and generate real addresses, so it puts fake addresses in, which of course, wrecks our map, but that's all right.
>
> **[5:59](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=359)** We can update a few later on.
>
> **[6:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=361)** It puts in a fake website address, a fake phone number, selects one of the categories, and chooses a video from our media manager and up to three PDFs.
>
> **[6:14](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=374)** And again, Devel will reuse a PDF, that's no problem.
>
> **[6:17](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=377)** We're talking more about functionality and format than actual content at this point.
>
> **[6:23](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=383)** If I click back on my homepage, I should see nodes that have been promoted to the front page by default.
>
> **[6:30](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=390)** And if I click on Content again, and let's take a quick peak at an article.
>
> **[6:38](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=398)** This one is obviously scheduled to be published, 'cause it's in the pink.
>
> **[6:44](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=404)** It's a news article and the keyword is Drupal Releases.
>
> **[6:49](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=409)** If I click on News, here is my taxonomy with a very messed up teaser layout.
>
> **[6:54](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=414)** We can fix that later.
>
> **[6:56](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=416)** So there we are.
>
> **[6:58](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=418)** So Devel, I've never built a site without Devel.
>
> **[7:01](https://www.linkedin.com/learning/drupal-9-essential-training-3-taxonomy-media-and-modules/installing-devel?u=76281980&t=421)** It gives you so much help in generating some fake content really quickly.

> [!info]- Semantic Content
>
> **Code Keywords:** module (7), let (4), delete (3), require (2), type. (1)
> **UI Navigation:** click on (5), scroll down (4)
> **CLI Commands:** composer (5), make (1)
> **Prerequisites:** install (4), set up (2)
> **Versions:** version 4 (1), 0.0 (1), 8.8 (1)
> **Definitions:** is a  (2)
> **URLs:** [drupal.org](https://drupal.org) (1)
> **Env Vars:** pdf (1)


## Path Context

### In [[Build Your Drupal Skills]]
← [[Drupal 9 Essential Training- 2 Content and Fields]] | **3 of 6** | [[Drupal 9 Essential Training- 4 Users and Themes]] →

## Appears In

- [[Build Your Drupal Skills]]

## Related Courses

_Courses sharing skills:_

- [[Drupal 9 Essential Training- 6 Finishing the Design]] — Drupal
- [[Drupal 9 Essential Training- 5 Layout]] — Drupal
- [[Drupal 9 Essential Training- 4 Users and Themes]] — Drupal
- [[Drupal 9 Essential Training- 2 Content and Fields]] — Drupal
- [[Drupal 9 Essential Training 1 Introduction And Administration]] — Drupal

---

[↑ Back to top](#)