---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: drupal-9-essential-training-2-content-and-fields
url: "https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields"
duration_minutes: 60
duration: 1h
level: Beginner
updated: 3/10/2021
learners: 34057
skills:
  - Drupal
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGJ50LZ3TlHVA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614870855109?e=2147483647&amp;v=beta&amp;t=w4aVmMl1heWJrHGBtV4B-T6x8KjQQ6Cl65fVe6phuoY"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Build Your Drupal Skills]]'
prev_courses:
  - '[[Drupal 9 Essential Training 1 Introduction And Administration]]'
next_courses:
  - '[[Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules]]'
path_nav: '[{"path":"Build Your Drupal Skills","position":2,"total":6,"prev":"Drupal 9 Essential Training 1 Introduction And Administration","next":"Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/web-development
  - skill/drupal
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Drupal%209%20Essential%20Training-%202%20Content%20and%20Fields.md)

![Drupal 9 Essential Training: 2 Content and Fields](https://media.licdn.com/dms/image/v2/C4E0DAQGJ50LZ3TlHVA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1614870855109?e=2147483647&amp;v=beta&amp;t=w4aVmMl1heWJrHGBtV4B-T6x8KjQQ6Cl65fVe6phuoY)

# Drupal 9 Essential Training: 2 Content and Fields

> While content and fields don’t sound like the most exciting part of a website, these are absolutely core to the entire understanding of how to use a content management system like Drupal. In this course, Rod Martin gives an introduction to the idea of structured content and content types in Drupal. Rod demonstrates the importance of categorization by creating a number of different types, then adds

> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields) | 1h | Beginner | 34K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Introduction to the course
- [**1. Content Explained**](#1-content-explained) (8 videos)
  - Content explained
  - Adding an article
  - Adding a basic page
  - Editing a node
  - Using the WYSIWYG editor
  - Configuring text formats
  - Planning your content types
  - Creating content types
- [**2. Fields Explained**](#2-fields-explained) (6 videos)
  - Fields explained: Introduction and definitions
  - Adding fields to the business content type
  - Adding fields to the locations content type
  - Adding fields to the events content type
  - Modifying the article content type
  - Testing your content types

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to the course
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=0)** - Hi, and welcome to Drupal 9 Essential Training.
>
> **[0:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=5)** My name's Rod Martin.
>
> **[0:06](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=6)** I'm your instructor for this entire series.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=8)** In this course, we're going to cover content and fields.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=12)** Now, that doesn't sound like a lot, but in Drupal, it's absolutely core to your entire website.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=18)** We're going to introduce you to the idea of structured content and content types.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=23)** We'll create a number of content types and then, add fields that will hold the data for that content type.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=31)** We'll introduce you to Drupal's Wysiwyg editor and text formats, and we'll add content to each of the content types that we build.
>
> **[0:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/introduction-to-the-course?u=76281980&t=40)** All right, so let's dive into content and fields.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), let (1)
> **Speakers:** - hi (1)
> **Non-Speech:** (upbeat music) (1)


### 1. Content Explained

> [↑ Back to Table of Contents](#table-of-contents)

#### Content explained
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=3)** - Well as you may have realized Drupal is a content management system.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=8)** (laughs) I've said that a few times now.
>
> **[0:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=10)** And with any content management system, the first thing, the most important thing is content.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=18)** So in this section, I want to talk about Content Explained.
>
> **[0:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=21)** Just as a reminder, here's where we are in our site building workflow.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=26)** Content comes first, and this is Content Explained.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=30)** All right, well, you may remember from the introduction as well that I said Drupal uses a structured data approach.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=37)** So what do I mean by that?
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=38)** Well, other content management systems just give you a title and a body like you see on the screen.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=44)** And what they force you to do is put a title in and then push everything into the body, which is great, if you never need it to do anything else with it.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=55)** So I have an old client of mine from many years ago that uses another CMS where that's exactly what they did.
>
> **[1:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=63)** They have a series of several thousand podcasts.
>
> **[1:07](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=67)** And so they embedded the MP3 file into the body along with the transcript into the body, along with the publication date into the body, and actually even some key words right into the body.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=81)** Well, the problem with that was several years after they started doing this, they said they wanted to create an email newsletter automatically from the daily podcast.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=92)** Well, the problem is everything was in one field in the database.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=99)** So I had to write a several 100 line page P Scrip to pass out all of the various pieces out of the one field and split it up, so it could be formatted into a nice email.
>
> **[1:52](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=112)** Wow, what a headache.
>
> **[1:54](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=114)** The only saving grace was that every single podcast had been formatted pretty much the same way.
>
> **[2:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=121)** If that had been Drupal, it would have taken almost no time at all.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=125)** And unstructured data approach is fine right up until you need, well, you need to display the data differently or you need to organize it differently or you need to filter pages and blocks differently.
>
> **[2:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=138)** Well, as soon as that happens you realize you can't.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=142)** And so Drupal from the very beginning takes the approach that all of the information is going to be housed in individual fields so that those fields can be used to organize, display, filter, and sort pages and blocks any way you need.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=160)** So this is an illustration I've used many times.
>
> **[2:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=163)** This is a screenshot from the best movie ever made, from the site [IMDb.com](https://IMDb.com).
>
> **[2:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=169)** Now [IMDb.com](https://IMDb.com) is not a Drupal site, it could be, but it is a terrific way to illustrate my point.
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=176)** So what you're seeing on the screen is all of the information from "The Princess Bride" node "The Princess Bride" the title, 1987 the release year and then we've got a whole bunch of information here, parental rating, runtime, movie genre, release date.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=196)** We've got a movie poster, a video probably the trailer.
>
> **[3:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=201)** We've got a little bit of the body IE the film description.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=206)** And then we've got some of the people that are in the movie and those are links of course, to the actors in the movie.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=213)** So here again, this is Robin Wright.
>
> **[3:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=215)** This is another set of categorization in this case it's what she's good at her bio and then her birth date.
>
> **[3:45](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=225)** Well, here's the problem.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=226)** Let's say we jam all of this into the body and make it pretty with some really advanced HTML and CSS.
>
> **[3:54](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=234)** And your boss comes along and says now I need a landing page on the new website that has all of the movies from 1987 that were rated PG in the adventure category.
>
> **[4:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=251)** And you go, "Oh, well, we never talked about that.
>
> **[4:16](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=256)** "That's going to take me hours "because I have to scroll through every movie "find the movies and create the landing page from scratch "no matter what CMS I'm using."
>
> **[4:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=265)** But if you're using Drupal, well, you say, "Yep, boss that's going to take probably about an hour maybe two."
>
> **[4:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=273)** And 10 minutes later you're done because if you're using a structured data approach this information is in its own field.
>
> **[4:44](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=284)** This information is in its own field.
>
> **[4:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=286)** This information is in its own field.
>
> **[4:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=289)** So is this, so is this, so is this, so is this so are all of these in their own fields.
>
> **[4:57](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=297)** Now that's a movie content type but an actor is different, right?
>
> **[5:02](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=302)** An actor doesn't have a parental rating although probably some of them should, but they do have instead of movies genres, they've got well things they do well.
>
> **[5:15](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=315)** Instead of a movie poster you've got a bio poster and a video, and a body and a birth date instead of a release date.
>
> **[5:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=324)** And so you can't have one content type that matches all of the different kinds of content you might have on your site.
>
> **[5:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=332)** In this case, we're going to have at least two an actor content type that is connected via an entity reference field to my movie content type.
>
> **[5:44](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=344)** In this case, "The Princess Bride".
>
> **[5:47](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=347)** Now you just can't do this with the other content management systems out there at least not out of the box, but Drupal was built this way and it has an inherent advantage because of it.
>
> **[6:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=361)** So if your content editors are used to shoving everything in the body field and making it pretty with some HTML and CSS, now that you're moving to Drupal this is something you're going to stop doing in order to take advantage of all of the amazing things.
>
> **[6:17](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=377)** And I really mean that all the amazing things Drupal has to offer.
>
> **[6:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=382)** So custom content types in Drupal structure the data entered and control the display down to the smallest field.
>
> **[6:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=390)** You need new content types when, the information that you're trying to send out is different, when unique fields are needed and when display needs are different.
>
> **[6:41](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=401)** And you're going to see that all through the rest of this course and how that works out.
>
> **[6:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=406)** When you're planning your content types you want to plan them so that your content editors or creators feel comfortable entering all of the data.
>
> **[6:55](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=415)** You want to plan them so they hold the data well, and that visitors to your site will be able to find the information filtered and sorted the way they need.
>
> **[7:06](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=426)** All right, so custom content types, you shouldn't do Drupal without it, and I would even suggest you can't do Drupal without it.
>
> **[7:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/content-explained?u=76281980&t=438)** And so that's the focus of this section Content Explained.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (4), case, (2), pass (1), let (1), type. (1)
> **Env Vars:** cms (2), html (2), css (2), mp3 (1)
> **CLI Commands:** find (2), node (1), make (1)
> **Definitions:** is a  (3), is an  (1)
> **URLs:** [imdb.com](https://imdb.com) (2)
> **Speakers:** - well (1)

#### Adding an article
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=3)** - [Instructor] All right, now that we understand a little bit more about content types and structured data, let's go ahead and add another article.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=12)** We'll make this one, the Welcome to Drupalville article.
>
> **[0:15](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=15)** Hover over Content, Add content, and click on Article.
>
> **[0:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=21)** Go ahead and put Welcome to Drupalville in for the title.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=26)** Now, for the bulk of this course we're going to use Lorem Ipsum text in a body field like this.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=31)** So you've got some options.
>
> **[0:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=33)** [Lipsom.com](https://Lipsom.com), [baconipsum.com](https://baconipsum.com).
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=36)** There's even a [vegetarianipsum.com](https://vegetarianipsum.com).
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=39)** (chuckles) Whatever one you want to use go ahead and grab some lorem ipsum text.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=44)** You might as well leave that tab open so you can come back and get some more, or copy and paste some text into a text file that you can just copy and paste back into Drupal.
>
> **[0:56](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=56)** I'm going to paste that in.
>
> **[0:58](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=58)** I'm going to add a couple of tags here.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=60)** Welcome and Drupalville.
>
> **[1:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=64)** Again, tags here are for categories.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=66)** We'll talk more about that shortly.
>
> **[1:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=68)** And go ahead and add an image.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=70)** You can choose any image you want.
>
> **[1:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=72)** I have a picture of my hometown from the air so I'm going to use that.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=76)** But I'm going to call it Drupalville from the air.
>
> **[1:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=79)** Again, alternate text is required.
>
> **[1:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=83)** Now, over here on the right-hand side you're going to see the publication settings.
>
> **[1:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=87)** We have a revision log message.
>
> **[1:29](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=89)** I encourage you to always add log messages to your versions of your notes.
>
> **[1:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=95)** Menu settings.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=96)** We're not going to provide a menu link.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=99)** Comments settings.
>
> **[1:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=100)** By default article allow for comments.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=103)** We'll leave that on for now.
>
> **[1:45](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=105)** URL alias.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=106)** Again, Drupal will always do that for you.
>
> **[1:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=109)** I encourage you to let Drupal do its thing.
>
> **[1:52](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=112)** Authoring information.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=113)** And then finally, promotion options.
>
> **[1:56](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=116)** Articles are promoted to the front page by default.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=119)** We'll leave that the way it is.
>
> **[2:02](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=122)** So again, note here in the article content type we have a title, body, tags, image and it's going to be promoted to the front page by default.
>
> **[2:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=131)** Go ahead and click Save.
>
> **[2:15](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=135)** And here's your Welcome to Drupalville article.
>
> **[2:17](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=137)** This is a picture of my hometown from the air and I've got my text.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=142)** The text wraps around the image in this case because that's what this particular theme will do.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=149)** You'll note, I have a View tab, an Edit tab, Delete, and Revisions tab.
>
> **[2:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=155)** When I'm an anonymous user or someone just visiting the site, of course these tabs are not visible.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=160)** If I click on the Home button, you'll note that my two article nodes are listed on the homepage by publication date order in what's called a teaser display.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=172)** The teaser display for the article content type includes the title, the submission information, a smaller version of the image which is created automatically.
>
> **[3:02](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=182)** And we'll talk more about that.
>
> **[3:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=184)** An production to the text, the tags, a read more, and add new comment link.
>
> **[3:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=191)** Every time you add a new node of the article content type, if you don't uncheck that promote to the front page, well then these nodes will be on your front page until of course you do something different with your front page.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=206)** Clicking on either of these tags is going to take me to a taxonomy term page.
>
> **[3:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=211)** I.e. a group of nodes that have been tagged with that particular word.
>
> **[3:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=215)** In this case, welcome.
>
> **[3:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=217)** Any node that was sharing the welcome tag would appear here in a similar way it appears on the homepage.
>
> **[3:44](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=224)** So that's the article content type.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-an-article?u=76281980&t=226)** It has specific fields and a specific purpose on your site.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default. (2), this. (1), finally, (1), delete (1)
> **CLI Commands:** node (2), make (1)
> **URLs:** [lipsom.com](https://lipsom.com) (1), [baconipsum.com](https://baconipsum.com) (1), [vegetarianipsum.com](https://vegetarianipsum.com) (1)
> **UI Navigation:** click on (2)
> **Analogies:** picture (2)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### Adding a basic page
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=3)** - [Instructor] As I mentioned, there are two content types that come with Drupal out of the box.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=8)** If you hover over Content and Add Content, you'll see that the article content type is one and we just completed an article called, "Welcome to Drupalville."
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=18)** Let's go ahead and create a basic page, and we'll note the differences between the two content types.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=24)** Go ahead and click Basic Page and you'll see that there's no image field, there are no tags, and on the publication settings, they are not promoted to the front page.
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=39)** So unless you add a basic page to a menu or create a view to display it in some other way, well then basic pages will never be found.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=49)** The typical use for a basic page content type is a static page that doesn't change very much and doesn't require any other fields to hold any other structured data.
>
> **[1:00](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=60)** So basically, yes, you're going to just put a title and then put everything into the body.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=66)** So, a typical example of this might be an About Us page.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=70)** So let's go ahead and put About Drupalville.
>
> **[1:15](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=75)** Once again, paste your Lorem Ipsum text in, and in this case, let's go ahead and add this node to a menu.
>
> **[1:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=85)** Go ahead and click Provide a Menu Link.
>
> **[1:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=87)** You'll note that the title is taken from the title of the node.
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=91)** The parent item is main navigation.
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=93)** So this means it's going to show up in the main nav and it has a weight of zero.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=98)** Now weight is where something shows up in a list.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=103)** A negative number floats to the top, a positive number sinks to the bottom.
>
> **[1:47](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=107)** It's kind of like your golf score.
>
> **[1:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=109)** If you want to win the PGA, well, you're going to have a negative score.
>
> **[1:54](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=114)** In this case, we're going to leave it at zero because we're going to adjust that later.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=119)** All right, go ahead and click Save.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=124)** You'll see my About Drupalville node, which is of the basic page content type and I have a menu about Drupalville, of course in the wrong order, but we'll fix that in just a moment.
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=136)** So the basic page content type, a title, a body, and it doesn't show up anywhere unless you create a menu.
>
> **[2:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-a-basic-page?u=76281980&t=144)** It's a great for static pages that don't change very much, such as the About page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), static (2), case, (2), require (1), type, (1)
> **CLI Commands:** node (3)
> **Analogies:** kind of like (1), such as (1)
> **Env Vars:** pga (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Editing a node
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=3)** - [Instructor] Editing a node is really simple.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=7)** Click on content and you're going to see the three nodes that we've created so far in our course.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=13)** We have two nodes of the article content type and a node of the basic page content type.
>
> **[0:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=21)** And you'll know that I'm using the word node and content type and identifying the different content types.
>
> **[0:26](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=26)** This is the correct way to refer to these pages on a Drupal website.
>
> **[0:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=32)** They're nodes of a particular content type.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=35)** Bottom line, you can call them pages as well because they have content but there's so much more to a page in Drupal than just the content item.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=44)** So again as I mentioned, it's simple to edit a node in Drupal.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=49)** Go ahead on the "About Drupalville" node that we just created, click the edit link.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=55)** It's going to bring you back to this very familiar window where now you're on the edit tab and you can make any changes you want such as adding a couple more paragraphs and more.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=70)** And as I mentioned earlier, I'm going to encourage you each time you make a revision to a node that you add something to the log files and I'll show you why in just a moment.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=80)** Added a couple of paragraphs, go ahead and put something in there.
>
> **[1:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=84)** Added a couple of paragraphs to the node and click save.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=90)** When you edit a node, it creates a new version.
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=93)** Go ahead and click on "About Drupalville" again and then click on revisions.
>
> **[1:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=99)** You'll note that the original note is here and the new version of the node that I just created with my quick little note in there is the current revision.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=111)** If I want to revert back to the original, well I just click revert and revert and now Drupal creates another new version of the node which is the same as the first version and it lets me know that it's a copy of that version.
>
> **[2:06](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=126)** Once again, I can revert back to my changes simply by reverting the one that I changed originally.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=132)** And now I have four versions.
>
> **[2:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=134)** You'll want to make sure because of the way that versioning works that you do add in good notes inside of the note log.
>
> **[2:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=143)** So clicking back on content again and go ahead and choose "Welcome to Drupalville".
>
> **[2:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=151)** And the same thing applies.
>
> **[2:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=153)** Edit.
>
> **[2:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=155)** I can make changes, Drupal will create a new version of it for me and save all of those changes.
>
> **[2:42](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/editing-a-node?u=76281980&t=162)** So editing your node's really, really simple to do.

> [!info]- Semantic Content
>
> **CLI Commands:** node (11), make (4)
> **UI Navigation:** click on (3)
> **Code Keywords:** type. (2)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Using the WYSIWYG editor
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=3)** - [Instructor] In this video, I want to talk to you about the WYSIWYG Editor.
>
> **[0:06](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=6)** Now, WYSIWYG stands for, what you see is what you get.
>
> **[0:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=10)** And that's pretty true in Drupal 9.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=13)** So I'm in my first Drupal Node, feel free to open that up and follow along.
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=18)** If you've used any kind of HTML editor before you're probably pretty familiar with the WYSIWYG Editor.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=24)** Drupal uses CKEditor and has several different toolbars depending on the text format that you are using.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=31)** Here in basic HTML, which is the default.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=35)** You have the ability to bold, italicize create a link, unlink, unordered list, ordered list, block quote, insert a standalone image, change the format from paragraph to heading two or three or four or five.
>
> **[0:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=49)** And of course view the source.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=51)** The key thing to remember here with the basic HTML format is that you cannot embed advanced HTML.
>
> **[0:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=59)** Drupal will strip it out.
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=61)** This is the kind of text format you want to use for your, say, junior content editors.
>
> **[1:07](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=67)** We're going to cover text formats in an upcoming video.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=70)** For now go ahead and select some text, make it bold, make some of the texts italic.
>
> **[1:17](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=77)** You get the idea, you select the text and you click the button.
>
> **[1:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=82)** To create a link I can highlight a word or a paragraph and click the create link button and I'll need to know the URL.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=90)** You should never put the full domain link of another node in here, simply because if you are working on say a test server and then push it to production, the links will break.
>
> **[1:42](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=102)** We're going to fix that in just a little bit with another module.
>
> **[1:47](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=107)** All right, I'm going to just hit enter there and make an unordered list.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=113)** It's as simple as that.
>
> **[1:55](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=115)** Typically what I do is I paste all of the text in and then come back and format it.
>
> **[2:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=121)** You can paste from Word in Drupal 9.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=125)** That said, it's usually not a good idea because Word has all kinds of stuff in it.
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=132)** And if you try and paste a table or an image those things will definitely get stripped out.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=139)** And hit enter again here and do an ordered list.
>
> **[2:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=145)** You get the idea pretty simple to do.
>
> **[2:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=147)** One of the good things about a WYSIWYG Editor is the ability kind of change up or divide up your node or content area with some headings.
>
> **[2:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=157)** And again, this is really simple in Drupal 9, highlight the text you want to head, make a header, change normal to heading two or heading three.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=168)** Heading two is just a little bit bigger than heading three.
>
> **[2:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=171)** And again, I'm going to unbolt that but it's still going to be in nice large text.
>
> **[2:57](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=177)** If I wanted to make another heading here I'm going to make it so it's in its own paragraph, highlight the text and change that to a heading three as well.
>
> **[3:06](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=186)** If I look at the source you're going to see a heading three, a paragraph tag, a heading three, there's my unordered list, a paragraph and the ordered list that I have.
>
> **[3:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=198)** You can edit this in here if you know a little bit of HTML.
>
> **[3:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=202)** But again you cannot just paste advanced HTML like tables, divs, when you are using the basic HTML text format.
>
> **[3:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=213)** So the three options I have are basic, restricted and full HTML.
>
> **[3:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=217)** Restricted is almost no HTML.
>
> **[3:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=220)** If I change to full HTML, it's going to say, hey, changing this is going to permanently remove content that is not allowed in the text format.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=226)** Save your changes.
>
> **[3:47](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=227)** Now I have a little bit more in the toolbar.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=230)** Strike through superscript, subscript, remove formatting.
>
> **[3:56](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=236)** insert a horizontal line.
>
> **[3:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=239)** Once again, still have my heading tags.
>
> **[4:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=243)** I can click and observe the various HTML elements and of course again I can view the source.
>
> **[4:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=250)** With full HTML turned on I can embed some advanced HTML, like JavaScript, tables and classes to my tags and all kinds of things.
>
> **[4:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=261)** So if you need to do any of that then you'll definitely want to make sure you are working in full HTML.
>
> **[4:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=267)** Now here is the thing, if I switch back to basic HTML it is going to strip out any of that advanced HTML that I've added.
>
> **[4:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=277)** That also means if you've used the advanced HTML text format and a junior editor who doesn't have access to that format edits your node at a later time and saves it.
>
> **[4:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=289)** Well, then all of your advanced HTML will be deleted as well.
>
> **[4:54](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=294)** So this is something you are going to need to really think through, if you have multiple editors working on your site.
>
> **[5:00](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=300)** All right, two more icons here that we haven't touched yet.
>
> **[5:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=304)** Block quote is a simple function that does exactly what it sounds.
>
> **[5:07](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=307)** This look and feel will change depending on the theme that you are using.
>
> **[5:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=312)** And then finally insert image, which is going to be a stand alone image that you can't use anywhere else.
>
> **[5:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=319)** You can align it, none, left, center or right and you can add a caption.
>
> **[5:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=327)** And it's in the body field.
>
> **[5:29](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=329)** So I can't actually do anything with it later.
>
> **[5:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=332)** We'll talk more about that when we get to views.
>
> **[5:34](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=334)** All right, I'm going to hit save.
>
> **[5:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=336)** And here's my first Drupal Node.
>
> **[5:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=338)** You'll notice there's the image field, the body field, there's the block quote that I added, there's that picture of the girl with her dog, there's the heading three and more.
>
> **[5:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=351)** So the WYSIWYG Editor is really helpful and enables me to quickly add formatting and other elements to my nodes.
>
> **[5:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/using-the-wysiwyg-editor?u=76281980&t=359)** Remember if you mess something up you always have version control to go back to a previous version of a node.

> [!info]- Semantic Content
>
> **Env Vars:** html (18), wysiwyg (5), url (1)
> **CLI Commands:** make (7), node (6)
> **Code Keywords:** for, (1), default. (1), break. (1), module (1), switch (1)
> **UI Navigation:** select the (1), in the toolbar (1)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** go back to (1)
> **Analogies:** picture (1)
> **Best Practices:** you should never (1)

#### Configuring text formats
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=3)** - [Instructor] As I mentioned in the video on the WYSIWYG editor, Drupal offers three text formats out of the box, Basic HTML, Restricted HTML, and Full HTML.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=14)** Basic HTML gives you what it sounds like, basic HTML elements, like bold, italic, a link, unordered list, ordered list, et cetera.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=24)** And as a reminder, full HTML gives you more of the options here as well as the ability to insert a table, insert a horizontal line, see the blocks that are being used in the node, and then of course add advanced HTML, like classes and more, to your nodes.
>
> **[0:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=48)** Now, as a reminder, we talked about this during our discussion on structured data.
>
> **[0:53](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=53)** You don't want to put everything in the body that should be in its own field.
>
> **[0:58](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=58)** Enough said about that.
>
> **[0:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=59)** All right, these text formats are editable, and you can have as many as you need, and they're governed by the Drupal permission system, which we're going to get into in a little while.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=70)** So for instance, if you had a junior content editor or a summer intern, you might want to give them basic HTML, so all they can do is what's here in the toolbar.
>
> **[1:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=82)** But for your advanced editors, you might want to give them full control and full access over all of the text formats that you've got.
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=91)** So head over to Configuration, Content Authoring, and Text Formats and Editors, please.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=98)** And here are the three that we've highlighted.
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=101)** And then, of course, there's a fourth plain text one.
>
> **[1:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=106)** Go ahead and click on Configure full HTML.
>
> **[1:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=110)** Now, there's a lot in here.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=111)** And at this point, only administrators can use full HTML, and that's why you could switch to it.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=119)** There are more available buttons that you can just simply click, and drag, and drop,
>
> **[2:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=132)** and, of course, rearrange.
>
> **[2:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=134)** You can add new groups, and, of course, you can add new functionality, like the Media Manager.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=142)** I'm going to select Media, click and drag that icon, so now I can insert things from the Media Manager, not just upload default images.
>
> **[2:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=152)** We're going to come back to this to add a special link icon to our toolbar.
>
> **[2:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=160)** Scrolling down, with the full HTML editor, there is no limit to the HTML tags that you can add, so you'll need to be careful.
>
> **[2:52](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=172)** Align images, captions, restrict images to this site.
>
> **[2:56](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=176)** So again, that's not turned on.
>
> **[2:58](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=178)** You'll need to select the Embed Media link here if indeed you want to make this Media icon work.
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=188)** And you'll note down here that you can restrict the media types that can be embedded in the body.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=194)** Now, once again, we're going to be adding media fields to all of our content types, so this isn't as necessary, simply because that's where we'll be adding our media.
>
> **[3:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=205)** But it's a great update to make.
>
> **[3:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=207)** Click Save Configuration, and let's edit the basic HTML, and do the same thing with the Media icon.
>
> **[3:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=217)** Click and drag to the Media block, scroll down, and embed media.
>
> **[3:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=226)** Now, you'll also see that this is going to limit the allowed HTML tags.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=230)** That's what separates basic from full, and it's an important distinction to make.
>
> **[3:55](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=235)** You absolutely want to restrict the HTML for junior editors.
>
> **[4:00](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=240)** If you wanted to add other things that they could add in here, well, then you could add the HTML tags in here, and they would be able to add that HTML, say, in the view source, or if you added another button up here.
>
> **[4:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=259)** So editing your text formats, even creating brand new ones, is done here through Configuration.
>
> **[4:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=265)** And once you set this up, those new options will be available to your content editors.
>
> **[4:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=271)** So if I click Content, Add Content, and let's say Basic Page, we won't save this, but now you'll notice that I'm in the basic HTML, and there's my media insert link, and I can insert any media that's on my site.
>
> **[4:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/configuring-text-formats?u=76281980&t=286)** Terrific.

> [!info]- Semantic Content
>
> **Env Vars:** html (18), wysiwyg (1)
> **Code Keywords:** let (2), while. (1), switch (1), this, (1)
> **UI Navigation:** in the toolbar (1), click on (1), switch to (1), select the (1), scroll down (1)
> **CLI Commands:** make (3), node (1)
> **Prerequisites:** you'll need (2), configure (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for instance (1)
> **Warnings:** be careful (1)

#### Planning your content types
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980&t=3)** - [Instructor] So you might remember from our planning session that we're going to build four content types together.
>
> **[0:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980&t=8)** The news content type, which is just an update to the article content type to show that you can actually change and edit a pre-existing content type, adding fields, removing fields and creating new ways to use it.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980&t=24)** A business directory with a name, description, a category for the business, an address that converts into a Google Map, a phone number, web address, featured video and file downloads.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980&t=35)** The location content type which is going to be connected to our events content type, a name, description, category.
>
> **[0:42](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980&t=42)** The amenities that the location has, the address of course, a video and file downloads field.
>
> **[0:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980&t=48)** And then finally the events content type, name, description, a location which ties into obviously our locations, category again a taxonomy, date and time, video and file downloads.
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980&t=61)** Now I realize these content types are kind of incomplete.
>
> **[1:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/planning-your-content-types?u=76281980&t=64)** The thing to remember is when you do your initial content audit, you're always looking for the kinds of content that will be on the site and then create the content types that you need to correctly house the data.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (4)
> **Speakers:** - [instructor] (1)

#### Creating content types
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=3)** - [Instructor] When you're building a real site, typically you're going to create all the content types at the same time.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=9)** So that's what we're going to do.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=11)** All right, let's add our first content type.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=13)** Head over to structure, content types and add content type.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=19)** This screen is the first screen in a wizard that takes us through creating our content type.
>
> **[0:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=24)** Let's call this "Business Directory".
>
> **[0:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=27)** Now you'll notice as I typed, a machine name was added.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=31)** You cannot have a duplicate of any machine name across your entire Drupal site.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=37)** If you did, Drupal would let you know that you can't use that name and request that you change the machine name to one that doesn't exist in the database already.
>
> **[0:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=46)** If you click on edit, you're able to update those here but note it can only contain lowercase letters, numbers and underscores.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=54)** You cannot have spaces or uppercase letters or any special characters.
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=61)** All right, in the description field, go ahead and type "place to highlight all the businesses in Drupalville".
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=70)** Let's change the title field label to "Business Name".
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=76)** If you had any specific guidelines for actually submitting a business to the business directory, you would type them in here and your content editors would see that as they added a new business.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=92)** That's the submission form settings.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=94)** Click on publishing options and let's uncheck promoted to the front page but we'll keep published by default on.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=103)** So as soon as you clicked save, that's going to be published.
>
> **[1:47](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=107)** Don't worry, we're going to talk about workflows and how to have sophisticated workflows and leave create new revision checked.
>
> **[1:55](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=115)** It's always good to have version control turned on on any given content type.
>
> **[2:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=121)** Click on display settings and uncheck display author and date information, really doesn't matter who the author was for a business listing.
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=130)** And on menu settings, go ahead and uncheck main navigation.
>
> **[2:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=134)** Now this is something I typically do on every single content type that I ever create because I don't want to give content editors the ability to willy-nilly add nodes to my main menu.
>
> **[2:29](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=149)** That could become a recipe for disaster pretty quickly if we're not careful.
>
> **[2:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=156)** So rather than allowing content editors to add menus anywhere, I make sure a site builder, like you, can add the menus and create the menu structure that you need by manually managing the menu system or via views, which again, we'll cover shortly.
>
> **[2:54](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=174)** All right, click save and manage fields.
>
> **[2:57](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=177)** All right, let's add our location content type.
>
> **[3:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=181)** Click on structure, content types and add content type.
>
> **[3:07](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=187)** Call this "Locations", "Enter the various locations for events around Drupalville."
>
> **[3:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=199)** We'll change the title field label to "Name".
>
> **[3:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=202)** It's a location name.
>
> **[3:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=204)** We're going to do basically the same things for the settings here that we've done already.
>
> **[3:29](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=209)** Uncheck promoted to the front page, uncheck display author and date information and uncheck main navigation.
>
> **[3:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=218)** The location content type is going to be something that we really don't list anywhere except in relationship to events.
>
> **[3:45](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=225)** Click save and manage fields.
>
> **[3:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=228)** All right, let's add our event content type.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=230)** Now again, this one's going to be pretty incomplete but you'll get the idea and the fields that you can add are really whatever you want.
>
> **[3:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=239)** Head over to structure, content types and add content type.
>
> **[4:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=244)** Let's call this "Events".
>
> **[4:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=248)** "Enter the events from around Drupalville".
>
> **[4:17](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=257)** We'll change this to "Event Name".
>
> **[4:20](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=260)** Same settings as before.
>
> **[4:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=262)** Click on publishing options, uncheck promoted to the front page, click on display settings, uncheck display author and date information.
>
> **[4:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=271)** And honestly, the only time you probably want to have one of those is in a blog or say, the news content item.
>
> **[4:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=277)** And click on menu settings and once again, uncheck main navigation.
>
> **[4:42](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=282)** Click save and manage fields.
>
> **[4:45](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/creating-content-types?u=76281980&t=285)** And now we're ready to move on to actually adding fields to our content types.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), type. (8)
> **UI Navigation:** click on (7)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 2. Fields Explained

> [↑ Back to Table of Contents](#table-of-contents)

#### Fields explained: Introduction and definitions
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=3)** As we talked about in content explained, all of your data is stored in a set of fields.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=9)** Now you'll remember that we talked about the fact that if you just shove everything in the body, well, then you can't do layouts, you can't do filters and you can't sort by any of the information inside that field when it comes time to creating say landing pages of all the new businesses or all the news in a certain category.
>
> **[0:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=33)** And so we use fields.
>
> **[0:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=36)** And so here on the screen, you're looking at some of the fields we're going to create for our business content type.
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=43)** We're going to have a logo, an address, a website, a phone number, a category, a video and some downloadable files.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=51)** Once again, if we shove those in the body, well, then we are out of luck later on.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=57)** When our boss comes along and says, "Hey I need a new business directory listing.
>
> **[1:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=61)** Could you create a page that says "Show me all the businesses", sorted alphabetically in a particular category.
>
> **[1:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=68)** Owen, I want to see just the name of the business and the business video in this particular display."
>
> **[1:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=74)** Well, again, other CMS's just can't do that.
>
> **[1:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=78)** But Drupal does it incredibly well.
>
> **[1:20](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=80)** When we use fields correctly.
>
> **[1:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=83)** When you add a field and put content in the field, all of that data is stored in the database.
>
> **[1:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=90)** And so field types are pretty important.
>
> **[1:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=93)** When it's time to add new fields, here are the default field types that you can use.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=98)** Boolean, which is yes or no, comment field, a date field, email, link, timestamp, all different kinds of numbers and again in your planning you want to make sure you pick the right kind of number field.
>
> **[1:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=111)** You can't change that later on.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=113)** So a decimal field and an integer field two different things.
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=117)** A telephone number field, of course and then entity reference fields, content, file, image, media, taxonomy term, user, and other and then all kinds of text fields.
>
> **[2:09](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=129)** As you add new features to your site via contributed or custom modules well then, new field types may appear here depending on what you're trying to do.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/fields-explained-introduction-and-definitions?u=76281980&t=139)** All right, with that quick explanation then, let's go ahead and add the fields we need to our content types.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (1), let (1)
> **Cross-References:** we talked about (2)
> **CLI Commands:** make (1)
> **Env Vars:** cms (1)

#### Adding fields to the business content type
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=3)** - [Instructor] Now that we understand a little bit more about fields and what they do, we're going to add our fields to our business content type first.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=11)** Let's remind ourselves so the fields we're actually going to add.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=14)** Our title is a name we'll update the label for the body-field to be description.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=19)** We're going to add a logo some categorization using taxonomy will do that last.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=25)** An address field that will actually turn into a Google map, a phone number, a website address and then a featured video and file downloads fields.
>
> **[0:34](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=34)** And we're going to add those to all four of our content types to give our visitors some consistency in what they can do on any given content type.
>
> **[0:44](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=44)** Head over to Structure, Content Types, Business Directory, and Manage fields.
>
> **[0:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=50)** And you'll notice we have a body field built in, let's go ahead and edit that label.
>
> **[0:56](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=56)** Click Edit on the operations button over here and change the label for the word body to business description.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=66)** You'll notice I'm using pretty descriptive labels here and that becomes important later on when we actually try and find some of these fields again.
>
> **[1:16](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=76)** If you want it to require the business description, you could simply put a check mark in here.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=81)** Click Save settings and before we move on, let's just talk about this page for a minute.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=88)** I'm on the Manage fields tab in the content type called Business Directory.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=92)** If I click Edit, it would take me back to that first screen that we worked on, Manage fields allows me to add and manage the fields.
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=101)** Manage form display is how I order the fields for content editors to see and Manage display is how we order the fields for our end users or visitors to see.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=113)** We'll talk a lot more about that in the layout explain section.
>
> **[1:57](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=117)** For now, click back on Manage fields and let's add a new field.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=124)** Click Add field and here we can add a new field or reuse an existing field.
>
> **[2:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=131)** If you click down on that, you'll notice that there are related files, related videos, tags, and images.
>
> **[2:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=139)** We're going to use the field image for this field.
>
> **[2:22](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=142)** Go ahead and click on Field Image and change the label to Business Logo.
>
> **[2:28](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=148)** Now there's a reason I'm not using say the media manager here.
>
> **[2:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=152)** I don't want to clutter up my digital asset management system with a bunch of logos that really only go in one place.
>
> **[2:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=159)** Click Save and continue, Upload a logo supplied by the business is a good help text for our editors.
>
> **[2:55](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=175)** You'll note that we can use PNG GIF, JPG, or JPEGs and we're able to update the file directory where these images will be stored.
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=185)** Go ahead and change that to images/business-logos don't have the preceding or trailing slash.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=194)** With the image field, you can say how big the picture can be, how small the picture can be and the maximum upload size.
>
> **[3:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=203)** Typically the only one I worry about here is minimum image resolution because I never want to have to scale up an image in order for it to be used on my site.
>
> **[3:34](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=214)** We'll skip that for now but remember, this might be important for your particular application.
>
> **[3:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=220)** We always Enable the All text and we make the all text required.
>
> **[3:45](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=225)** Click Save settings.
>
> **[3:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=228)** So now we have a business scription and a business logo.
>
> **[3:53](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=233)** Let's add the address field, click Add field and we're going to select a Text field.
>
> **[4:00](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=240)** Now there's a reason we're going to select a plain text field here.
>
> **[4:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=245)** That's because we're going to use the simple Google map model to change this address field into an actual Google map.
>
> **[4:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=252)** Click and select the text plane field and we'll call this Business Address click Save and continue and Save Field settings and Save settings.
>
> **[4:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=272)** Click Add field, and this time let's add a link to their external website.
>
> **[4:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=280)** So choose the link field, call this Business Website, we'll limit it to one and again you can put some help text in here for a content editor.
>
> **[4:55](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=295)** We're going to make this external links only that way, our site knows that this is always going to go off of our site and we will allow the link text to be optional.
>
> **[5:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=308)** And what that means is, if we put texts in the link text, that's what will show up.
>
> **[5:13](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=313)** If we don't, it'll just give us the URL, click Save settings.
>
> **[5:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=321)** You might remember in the introduction to the administration area, that when you click on extend you can turn modules on and off.
>
> **[5:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=330)** Go ahead and click on Extend because we need to turn on a module that's not actually turned on by default.
>
> **[5:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=338)** Click on Core and Administration and Experimental and scroll down and you'll find the Telephone module.
>
> **[5:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=348)** It's not turned on by default, but it defines a field type for telephone numbers.
>
> **[5:52](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=352)** Go ahead and put a check mark in there, scroll down and click install.
>
> **[5:58](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=358)** Whenever you want to add a new feature to your Drupal site, well, there's probably a module for that.
>
> **[6:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=364)** Let's head back over to Structure, Content Types, Business Directory, and Manage fields.
>
> **[6:13](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=373)** Click, Add field and select the field type, and now you'll see telephone number listed under the number section.
>
> **[6:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=383)** Go ahead and click on Telephone number and we'll call this Business Phone.
>
> **[6:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=391)** Again noticing the machine name here is field_business_phone, click Save and continue.
>
> **[6:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=399)** We'll limit it to one, click Save settings and now we have a phone field.
>
> **[6:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-business-content-type?u=76281980&t=410)** We're going to add these last two fields Featured Video and File Downloads when we get to the section called media explained.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (3), module (3), type. (1), require (1)
> **UI Navigation:** click on (5), select the (2), scroll down (2)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** png (1), gif (1), jpg (1), url (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (2)
> **Code Identifiers:** field_business_phone (1)
> **Warnings:** note that (1)

#### Adding fields to the locations content type
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=3)** - [Instructor] Let's just have a reminder, what field we're going to add here.
>
> **[0:07](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=7)** We're going to have the name, description.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=9)** We're going to add two taxonomies, which we'll do in a little bit, but we'll have a simple address field and the video and file downloads fields, all right?
>
> **[0:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=18)** So we'll update the label for our body and add these three fields and we'll be done very quickly.
>
> **[0:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=25)** Head over to structure, content types, locations and manage fields.
>
> **[0:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=31)** Click the edit button for the body field.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=35)** Let's edit the label for body and put location description
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=43)** and click save settings.
>
> **[0:45](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=45)** Let's add the address field in, click add field, select a field type.
>
> **[0:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=51)** And once again, we're going to use text plane because we're going to convert this into a Google Map.
>
> **[0:57](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=57)** Location address, click save and continue.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=62)** Save field settings and save settings.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-locations-content-type?u=76281980&t=70)** And that's all we can do until the chapters on taxonomy explained and media explained, we'll be back to finish this up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (1), continue (1)
> **Speakers:** - [instructor] (1)

#### Adding fields to the events content type
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=3)** - [Instructor] In this video, we're going to update our events content type and add all of the fields that we need.
>
> **[0:09](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=9)** Let's remind ourselves of the fields we're adding to the event content type.
>
> **[0:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=12)** We'll update the body field and name a description.
>
> **[0:15](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=15)** We'll add an entity reference field for the location content type.
>
> **[0:20](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=20)** We're going to add some categorization via taxonomy.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=23)** A date and time field, a video and file downloads field and a price and link field.
>
> **[0:29](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=29)** If you're not already there, head over to structure, content types, events, and manage fields.
>
> **[0:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=37)** Let's update the body label.
>
> **[0:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=39)** Click edit, change the label to event description and save settings.
>
> **[0:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=50)** And once again, I'm not making any of these fields required, you can certainly make them required if you want.
>
> **[0:56](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=56)** Let's add a date field, click add field and choose date.
>
> **[1:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=65)** This is the event date field, go ahead and click save and continue.
>
> **[1:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=71)** Now in this case, we're going to use date and time.
>
> **[1:15](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=75)** That's a pretty good idea for an event.
>
> **[1:17](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=77)** Click save field settings, enter the start date and time for the event.
>
> **[1:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=87)** Something I've not mentioned, you can have a default for every single field.
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=91)** Sometimes it works really well, sometimes it just doesn't apply.
>
> **[1:34](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=94)** If we wanted to have say today as the default date for any event, well, you just choose current date as the default date.
>
> **[1:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=103)** If you wanted to make it relative, well, then you could make it say plus three days and it would choose a date three days from here.
>
> **[1:53](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=113)** They're not necessary, but sometimes they can be helpful.
>
> **[1:56](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=116)** Click save settings.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=119)** We need a way to connect our event to the location.
>
> **[2:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=124)** So click add field, and this is going to be another reference field.
>
> **[2:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=128)** Now we've been entering media and in Drupal 7 they were called entity reference fields and they still are.
>
> **[2:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=134)** These are the other entities on our sites and now I'm referencing those entities.
>
> **[2:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=141)** Click on content for this one, because we want to link our events to locations.
>
> **[2:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=145)** (keys clacking) Event location.
>
> **[2:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=150)** Click save and continue.
>
> **[2:34](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=154)** The item of to reference is content, now you'll notice that there's just a ton that you can reference here.
>
> **[2:41](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=161)** We're going to keep it really simple because we're just referencing the locations, but understand that you can reference all kinds of things in entity reference fields.
>
> **[2:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=171)** We're going to assume that one event is at one location, click save field settings, and in the help text select the location for this event.
>
> **[3:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=188)** Of course, the content type that we're referencing is locations.
>
> **[3:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=194)** Now, this is going to be an auto-complete widget, I love these things.
>
> **[3:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=198)** You just type the letter that is in any one of your locations, all of the locations with that letter will show up and you just select one.
>
> **[3:26](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=206)** So that's what we're going to use, quick save settings.
>
> **[3:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=210)** So two more fields to go, a pricing field and a link field.
>
> **[3:34](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=214)** All right, once again click add field and select the field type.
>
> **[3:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=219)** Now, pricing is tricky.
>
> **[3:41](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=221)** Pricing can be a decimal or an integer depending on whether you want dollars and cents, and this brings up something that's really important in field type selection.
>
> **[3:52](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=232)** You cannot change the type of field it is, once you have data in there.
>
> **[3:57](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=237)** You would have to delete the field completely, and recreate the field with the new field type.
>
> **[4:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=244)** So in your planning, make sure the field types that you select are correct the first time.
>
> **[4:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=251)** This is also why we test with dummy data, which we'll do in a little bit.
>
> **[4:15](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=255)** Because sometimes the implications of a choice don't show up until you're actually using it, all right.
>
> **[4:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=261)** So for this one, let's pick a decimal even though we may or may not use it.
>
> **[4:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=267)** We'll call this event price, click save and continue.
>
> **[4:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=271)** The precision is 10 digits with two digits to the right of the decimal, this is going to allow us to have dollars and cents.
>
> **[4:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=280)** Now, of course, some events would have more than one price but we'll keep it simple, click save field settings.
>
> **[4:47](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=287)** You can have a minimum and a maximum, so let's put the minimum at zero because we aren't going to pay people to come to our events and let's add a dollar and a space to the prefix or beginning of the display for our field.
>
> **[5:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=303)** All right, click save settings.
>
> **[5:07](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=307)** Last field, click add field.
>
> **[5:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=311)** This time, choose a link.
>
> **[5:13](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=313)** This is going to be the link to the event website.
>
> **[5:18](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=318)** Event website, limited to one.
>
> **[5:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=324)** We'll leave it as either an internal or external link, you just never know, we might have a page on our site about a particular event and we'll leave the link text optional, click save settings.
>
> **[5:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=336)** All right.
>
> **[5:37](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=337)** Except for our categorization with taxonomy, our content type is ready to go.
>
> **[5:42](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=342)** All right, all that's left now is the categorization via our taxonomy, we'll cover that in taxonomy explained.
>
> **[5:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/adding-fields-to-the-events-content-type?u=76281980&t=348)** And then our video and file downloads fields that we'll cover in media explained.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), type. (4), continue (3), case, (1), delete (1)
> **CLI Commands:** make (4)
> **UI Navigation:** select the (2), click on (1)
> **Speakers:** - [instructor] (1)

#### Modifying the article content type
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=3)** - [Instructor] All right, so finally, let's update the article content type to reflect the fact that we want to use it as a news and press release style content type.
>
> **[0:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=14)** I've left this one to the end because I wanted to get us used to creating content types.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=19)** But now we're going to see that we can actually change a content type, adding new fields, taking fields away and making it do what we want.
>
> **[0:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=27)** All right, let's dive in.
>
> **[0:29](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=29)** Now you might remember we already have a couple of articles, that's not going to be a problem.
>
> **[0:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=33)** So head over to Structure, Content Types, and Article, and Manage Fields.
>
> **[0:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=40)** Now you remember we already have a title, a body, comments which we'll leave, image, and tags.
>
> **[0:47](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=47)** And I just want to to talk briefly about tags.
>
> **[0:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=50)** As you remember, we added tags to our first two article nodes.
>
> **[0:55](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=55)** If I click on one of the tags, it takes me to a page that's actually a taxonomy landing page with the 10 most recent nodes tagged with that word.
>
> **[1:06](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=66)** The problem with tags and taxonomy is this, the way it's set up in the article content type, we can add a new tag anytime we want simply just by adding a comma and then another tag.
>
> **[1:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=81)** When I click Save, my article has one another tag.
>
> **[1:27](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=87)** And that's terrific.
>
> **[1:28](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=88)** It makes it really easy to categorize our, in this case, article content.
>
> **[1:32](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=92)** The problem is what happens when you have a typo.
>
> **[1:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=95)** And this happens all too frequently.
>
> **[1:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=98)** If I click edit again and type welcome, W- E- L- O- C- M- E
>
> **[1:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=108)** and click Save, I have a new tag that was intended to be welcome but unfortunately, it's now a new category in my taxonomy system.
>
> **[2:00](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=120)** 99 times out of 100, I advise people to not use tags.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=125)** The only exception for me would be if you're the only person managing the content on your site and that you have a really good handle on what kind of tags you want to use.
>
> **[2:16](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=136)** This is an open taxonomy, I prefer a closed taxonomy where we predefine the terms that someone can use and then allow them to select from that.
>
> **[2:26](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=146)** You can have an unlimited number of terms in your taxonomy, so the sheer number isn't the issue.
>
> **[2:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=153)** Really the only issue here is typos.
>
> **[2:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=156)** I know of a number of different, even large enterprise clients that had to rip out all of the tags because of the number of typos that had been made over time and completely redo this.
>
> **[2:48](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=168)** So we're going to actually delete the tag field.
>
> **[2:51](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=171)** Head to Structure, Content Types, Article, and Manage Fields.
>
> **[2:57](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=177)** On the edit button for the tags field, click the down triangle and then click Delete.
>
> **[3:04](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=184)** Simple as that.
>
> **[3:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=185)** Now if I go back to my site, you'll note that the tags are gone and if I click Edit, well, the tag field has disappeared.
>
> **[3:13](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=193)** The tags are still there.
>
> **[3:15](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=195)** We're just not going to use them.
>
> **[3:16](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=196)** And when we get to taxonomy explained we're going to add two vocabularies to this article content type that allows to number one, differentiate between news and press releases and secondly, add all of those references or categories back to our article content type.
>
> **[3:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/modifying-the-article-content-type?u=76281980&t=216)** And that's all we're going to do for now to round out this section in our course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (2), type, (2), delete (2), finally, (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Testing your content types
> [LinkedIn Learning](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=3)** - [Instructor] In this video we're going to add one node to each of the three content types we created in the previous steps.
>
> **[0:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=11)** We're going to do this just to get our content started.
>
> **[0:13](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=13)** We'll be adding a lot more content in just a little bit.
>
> **[0:17](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=17)** I've said content now several times.
>
> **[0:19](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=19)** So let's go ahead and click, Add content.
>
> **[0:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=23)** Let's choose the Business Directory and you'll see here are the fields that we added.
>
> **[0:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=30)** Our title is Business Name, we changed the body field to Business Description.
>
> **[0:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=35)** We have the Logo field, the Business Address field.
>
> **[0:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=38)** We have the Business Website field and the Business Phone field.
>
> **[0:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=43)** Now we're going to be adding more fields to all of these content types as we continue on in our explanation of building content.
>
> **[0:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=50)** But let's go ahead and add our first business.
>
> **[0:54](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=54)** Since this is an OSTraining video series, well, we're going to add, OSTraining as our first business.
>
> **[1:02](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=62)** The business description, we teach people how to build great websites with Drupal.
>
> **[1:07](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=67)** Let's add a logo.
>
> **[1:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=70)** You can download the genuine OSTraining logo from the link on the screen, or you can grab something off of Google.
>
> **[1:17](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=77)** This is the OSTraining Mascot.
>
> **[1:24](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=84)** Business address, I'm just going to grab a real address from the city of Cincinnati, I live near there.
>
> **[1:29](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=89)** I play hockey and Cincinnati.
>
> **[1:31](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=91)** So I'm going to grab the address for where the Cincinnati cyclings play hockey.
>
> **[1:36](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=96)** So to make this work for when we add the module later it does need to be a real address.
>
> **[1:41](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=101)** Feel free to put your own address in here, it doesn't really matter.
>
> **[1:45](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=105)** The web address for OSTraining, well, that's easy.
>
> **[1:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=109)** [OSTraining.com](https://OSTraining.com) and we'll put in Official Website and the business phone for OSTraining, I'm not sure what it is.
>
> **[1:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=119)** So let's just put in the typical fake all fives.
>
> **[2:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=125)** All right, go ahead and click Save.
>
> **[2:10](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=130)** So as a reminder, Drupal outputs all of the fields in a content type, in the order of the display that we set up, usually with the label already printed.
>
> **[2:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=141)** Now we can update that and we will later on but out of the box, this is what Drupal does.
>
> **[2:26](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=146)** There's the title, the body, the business logo, the business address, the business website and the business phone.
>
> **[2:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=153)** You'll note that the website URL was replaced with the text that we put in there.
>
> **[2:39](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=159)** And that's the business directory content type.
>
> **[2:42](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=162)** Well, we'll do a lot more with that coming up soon.
>
> **[2:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=166)** Let's go ahead and add our first location.
>
> **[2:49](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=169)** Click Content, Add content and Locations.
>
> **[2:53](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=173)** I'm going to use heritage bank center again if you want to use a local venue, that's terrific.
>
> **[2:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=179)** A great venue for large crowds including hockey and concerts.
>
> **[3:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=191)** And once again the location addresses for me, 100 Broadway, Cincinnati Ohio 45202, click Save.
>
> **[3:21](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=201)** And there's our first location node.
>
> **[3:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=205)** Let's head to Content, Add content and Event.
>
> **[3:30](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=210)** And let's have an event where we're teaching people Drupal at the heritage center.
>
> **[3:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=215)** Drupal course 101.
>
> **[3:38](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=218)** This course will teach you everything you need to know about Drupal.
>
> **[3:45](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=225)** Feel free to put some lorm ipsum text in there if you'd like as well.
>
> **[3:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=230)** Now you'll remember we've added some other fields here event date.
>
> **[3:54](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=234)** So I'm in Safari, which is going to ask me to input a date in four digit year, two digit month, two digit day.
>
> **[4:02](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=242)** Interestingly, Safari and most other browsers are a little bit different.
>
> **[4:07](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=247)** You'll note here in Chrome, I have a pop-up calendar which doesn't appear in Safari.
>
> **[4:12](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=252)** This is just one of those browser things and I can select a date.
>
> **[4:17](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=257)** And in Chrome, it's two digit month, two digit day, four digit year, which is reversed.
>
> **[4:23](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=263)** So again, probably want to use Chrome if you're going to be using a date or time field.
>
> **[4:29](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=269)** So I'm just going to continue in Chrome, I'm going to pick the end of the month, September 30th at 8:00 AM.
>
> **[4:40](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=280)** All I did was type an eight, a zero a zero and an A and the time was formatted for me.
>
> **[4:47](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=287)** The event location is an auto-complete widget.
>
> **[4:50](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=290)** I love these.
>
> **[4:52](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=292)** All I have to do is type any letter in a location and all of the locations that contain that letter.
>
> **[4:58](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=298)** Well, they'll show up.
>
> **[4:59](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=299)** I select it and there it is.
>
> **[5:01](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=301)** It's connected.
>
> **[5:02](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=302)** Now this number eight here is the node ID that is probably going to be different for you, it doesn't matter.
>
> **[5:08](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=308)** Nobody will ever see the node ID.
>
> **[5:11](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=311)** Event price, well, I'm going to put $100 for the event price and you'll notice here in Chrome I've got little arrows that will add or delete pennies at a time.
>
> **[5:25](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=325)** The event website is [https://ostraining.com/Drupal](https://ostraining.com/Drupal).
>
> **[5:33](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=333)** That web address doesn't exist, but that's okay for now.
>
> **[5:35](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=335)** And we'll say, this is the course website, click Save.
>
> **[5:43](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=343)** And now you'll see we have a new event.
>
> **[5:46](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=346)** Once again, our fields listed in the order that we have them in the display and all of the labels are showing.
>
> **[5:53](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=353)** Again, you'll notice that entity reference labels are different Bartek, that's something we can fix with our theming.
>
> **[6:00](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=360)** Event price and event website.
>
> **[6:05](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=365)** Well, terrific, we've added a node in each of our three new content types and of course, we already have a couple of nodes in the article content type.
>
> **[6:14](https://www.linkedin.com/learning/drupal-9-essential-training-2-content-and-fields/testing-your-content-types?u=76281980&t=374)** And when we deleted the tag field the nodes were automatically updated.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), continue (2), type. (2), module (1), type, (1)
> **CLI Commands:** node (5), make (1)
> **Tools:** safari (3)
> **URLs:** [ostraining.com](https://ostraining.com) (1), [https://ostraining.com/drupal](https://ostraining.com/drupal) (1)
> **Definitions:** is an  (2)
> **Ports:** :00 (1)
> **Env Vars:** url (1)
> **Cross-References:** coming up (1)


## Instructor

- [[OSTraining]]
- [[Rod Martin]]

## Skills Covered

- Drupal

## Path Context

### In [[Build Your Drupal Skills]]
← [[Drupal 9 Essential Training 1 Introduction And Administration]] | **2 of 6** | [[Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules]] →

## Appears In

- [[Build Your Drupal Skills]]

## Related Courses

_Courses sharing skills:_

- [[Drupal 9 Essential Training- 6 Finishing the Design]] — Drupal
- [[Drupal 9 Essential Training- 5 Layout]] — Drupal
- [[Drupal 9 Essential Training- 4 Users and Themes]] — Drupal
- [[Drupal 9 Essential Training- 3 Taxonomy, Media, and Modules]] — Drupal
- [[Drupal 9 Essential Training 1 Introduction And Administration]] — Drupal

---

[↑ Back to top](#)