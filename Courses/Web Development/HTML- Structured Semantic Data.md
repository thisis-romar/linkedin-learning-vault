---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: html-structured-semantic-data
url: "https://www.linkedin.com/learning/html-structured-semantic-data"
duration_minutes: 93
duration: 1h 33m
level: Advanced
updated: 1/31/2024
learners: 11845
skills:
  - HTML
  - Semantic Markup
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQG5-RNXkFb0aw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707244976799?e=2147483647&amp;v=beta&amp;t=SSeom6RBaEaeCE_WtszcOYXOcsJOH4o14QTfVljaUbQ"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills in HTML]]'
prev_courses:
  - '[[Learning Web Audio and Video]]'
next_courses:
  - '[[Developing for Web Performance]]'
path_nav: '[{"path":"Advance Your Skills in HTML","position":10,"total":11,"prev":"Learning Web Audio and Video","next":"Developing for Web Performance"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/html
  - skill/semantic-markup
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/HTML-%20Structured%20Semantic%20Data.md)

![HTML: Structured Semantic Data](https://media.licdn.com/dms/image/v2/D4D0DAQG5-RNXkFb0aw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707244976799?e=2147483647&amp;v=beta&amp;t=SSeom6RBaEaeCE_WtszcOYXOcsJOH4o14QTfVljaUbQ)

# HTML: Structured Semantic Data

> Web development focuses on creating highly visual content, but many crawlers ignore the layouts and imagery that give human readers context. To aid Google Search and other bots, you can use structured semantic data. This invisible but critical metadata determines how your sites appear online and can help boost your search rankings. In this course, Jen Kramer shows how to add data structured for ma

> [LinkedIn Learning](https://www.linkedin.com/learning/html-structured-semantic-data) | 1h 33m | Advanced | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Appreciating the value of the semantic web](#appreciating-the-value-of-the-semantic-web)
  - [Introducing schema.org, a standardized way of describing items](#introducing-schemaorg-a-standardized-way-of-describing-items)
  - [Comparing JSON-LD, RDFa, and microdata for implementing data schemes](#comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes)
- [**1. Implementing Data Schemes with Microdata**](#1-implementing-data-schemes-with-microdata) (8 videos)
  - [Using itemscope and itemtype to add meaning](#using-itemscope-and-itemtype-to-add-meaning)
  - [Adding itemprop to expand on meaning](#adding-itemprop-to-expand-on-meaning)
  - [Embedding schemas in schemas](#embedding-schemas-in-schemas)
  - [Using the meta tag for information that cannot be marked up](#using-the-meta-tag-for-information-that-cannot-be-marked-up)
  - [Using the Structured Data Markup Helper for microdata](#using-the-structured-data-markup-helper-for-microdata)
  - [Testing your microdata markup with the Structured Data Testing Tool](#testing-your-microdata-markup-with-the-structured-data-testing-tool)
  - [Challenge: Marking up a document with microdata](#challenge-marking-up-a-document-with-microdata)
  - [Solution: Marking up a document with microdata](#solution-marking-up-a-document-with-microdata)
- [**2. Working with JSON-LD**](#2-working-with-json-ld) (5 videos)
  - [Writing JSON-LD by hand](#writing-json-ld-by-hand)
  - [Working with the Structured Data Markup Helper](#working-with-the-structured-data-markup-helper)
  - [Testing our JSON-LD code with the Structured Data Testing Tool](#testing-our-json-ld-code-with-the-structured-data-testing-tool)
  - [Challenge: Marking up a document with JSON-LD](#challenge-marking-up-a-document-with-json-ld)
  - [Solution: Marking up a document with JSON-LD](#solution-marking-up-a-document-with-json-ld)
- [**3. Structured Data Examples**](#3-structured-data-examples) (5 videos)
  - [Understanding rich search results from Google](#understanding-rich-search-results-from-google)
  - [Writing JSON-LD code for rich search results with a recipe](#writing-json-ld-code-for-rich-search-results-with-a-recipe)
  - [Testing and previewing the rich results code](#testing-and-previewing-the-rich-results-code)
  - [Challenge: Rich search results for courses](#challenge-rich-search-results-for-courses)
  - [Solution: Rich search results for courses](#solution-rich-search-results-for-courses)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Appreciating the value of the semantic web](https://www.linkedin.com/learning/html-structured-semantic-data/appreciating-the-value-of-the-semantic-web-23000145?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/appreciating-the-value-of-the-semantic-web-23000145?u=76281980&t=0)** - Semantic data makes your content accessible to more humans and robots, and isn't that what you want in the first place?
>
> **[0:08](https://www.linkedin.com/learning/html-structured-semantic-data/appreciating-the-value-of-the-semantic-web-23000145?u=76281980&t=8)** Once you've learned how to properly work with structured data, creating attractive and interesting listings in search results, and in applications like [[Google]] Maps is within your reach.
>
> **[0:18](https://www.linkedin.com/learning/html-structured-semantic-data/appreciating-the-value-of-the-semantic-web-23000145?u=76281980&t=18)** In this course, we'll dive into micro data and [[JSON]] LD to better organize your website's content, so it can be easily read by search engines and other AI.
>
> **[0:29](https://www.linkedin.com/learning/html-structured-semantic-data/appreciating-the-value-of-the-semantic-web-23000145?u=76281980&t=29)** I'm Jen Kramer, an educator and web developer, and I've been organizing websites for many years.
>
> **[0:36](https://www.linkedin.com/learning/html-structured-semantic-data/appreciating-the-value-of-the-semantic-web-23000145?u=76281980&t=36)** So if you're ready, let's get started with [[HTML]] structured semantic data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[JSON]] (1), [[HTML]] (1)
> **Env Vars:** json (1), html (1)
> **Speakers:** - semantic (1)

#### [Introducing schema.org, a standardized way of describing items](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=0)** - There are two halves to the structured data problem.
>
> **[0:03](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=3)** The first issue is that we need to clearly define the structure of our data.
>
> **[0:08](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=8)** Once we know that, and we have that all standardized, then we can discuss how we will convey that standard via markup and programming.
>
> **[0:18](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=18)** So let's address that first problem.
>
> **[0:20](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=20)** How do we clearly define the structure of our data?
>
> **[0:25](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=25)** Fortunately, there is one centralized solution for this, regardless of how we mark up the structure and that's through a website called [schema.org](https://schema.org).
>
> **[0:34](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=34)** This is that particular website.
>
> **[0:36](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=36)** You're welcome to open this up in your own browser and take a look at the website.
>
> **[0:41](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=41)** Chances are, you might wind up going to the schemas link up here on the top.
>
> **[0:44](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=44)** This will give you the option of browsing through a variety of types of works that are here on this website.
>
> **[0:52](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=52)** So you can take a look at any of those, or of course you can go up to your search and you can type in a search parameter and find a thing in particular.
>
> **[1:02](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=62)** Let's just jump right here to the recipe, which is a commonly used type of creative work.
>
> **[1:08](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=68)** So this is a series of properties here that are specific to the recipe.
>
> **[1:13](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=73)** They're right here at the top.
>
> **[1:14](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=74)** And so you'll see here that a recipe has properties here that you would expect, like how long does it take to cook or how do you cook it or what kind of recipe is it and what are its ingredients?
>
> **[1:27](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=87)** These are properties that really are specific to a recipe.
>
> **[1:31](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=91)** While it's possible you won't have all of those properties in your recipe, they're available for your use.
>
> **[1:37](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=97)** Now you might be thinking about other things that pertain to a recipe as well, that are not listed here at the very top of the schema.
>
> **[1:44](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=104)** Things like, what is the name of this recipe or who created this recipe?
>
> **[1:49](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=109)** That type of thing.
>
> **[1:51](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=111)** Well, a recipe doesn't stand alone in the world.
>
> **[1:54](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=114)** It inherits properties from other less defined properties, and that structure is described here in the breadcrumb.
>
> **[2:01](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=121)** So as you see here, a recipe is derived from a work called how to, How to is derived from a creative work.
>
> **[2:09](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=129)** And that is derived from a thing.
>
> **[2:12](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=132)** Even though we're talking about a recipe, all of the properties that are associated with things, creative works, and how tos are available to us to use a recipe.
>
> **[2:21](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=141)** So let's take a quick peek at the creative work to see what's listed there.
>
> **[2:26](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=146)** So this is a listing of all of the properties that are here for a Creative Work and not all of these are going to apply to our recipe.
>
> **[2:35](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=155)** For example, most recipes don't have an abstract.
>
> **[2:40](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=160)** That is something that may apply to other types of creative works, but it probably doesn't apply to a recipe.
>
> **[2:46](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=166)** It is, however, available to you if you wanted to have an abstract about your recipe.
>
> **[2:51](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=171)** If you scroll down a little bit further though, you'll notice that author is one of the properties associated with a creative work and recipes certainly have authors.
>
> **[3:05](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=185)** So that might be something that you'd want to leverage.
>
> **[3:07](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=187)** Likewise, an award is something associated with a creative work that might also apply to a recipe.
>
> **[3:14](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=194)** So these are things that you might want to have available to you if you were listing a recipe.
>
> **[3:22](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=202)** So while you're choosing a schema to describe whatever it is you want to describe in the same type of way, you have the option of building on that generic item, like a creative work, and then layering on more properties specific to that type of item.
>
> **[3:35](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=215)** All of these properties are available to you for describing that item.
>
> **[3:39](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=219)** [schema.org](https://schema.org) is a centralized method for describing just about anything.
>
> **[3:44](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=224)** However, there are several ways to implement this scheme and we'll discuss that in the next video.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4)
> **URLs:** [schema.org](https://schema.org) (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - there (1)

#### [Comparing JSON-LD, RDFa, and microdata for implementing data schemes](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=0)** - [Presenter] Once you have a data scheme identified from [schema.org](https://schema.org) now you need to communicate that scheme through some type of programming.
>
> **[0:08](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=8)** There are several ways to do this.
>
> **[0:10](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=10)** As mentioned on the [schema.org](https://schema.org) homepage, three methods are RDFa, microdata and [[JSON]]-LD.
>
> **[0:22](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=22)** Fundamentally, these are three different ways of solving the same problem, they identify elements of a data scheme described at [schema.org](https://schema.org) website.
>
> **[0:32](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=32)** However, how they do this and their acceptance by search engines varies.
>
> **[0:38](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=38)** Let's take a quick peek at these methodologies.
>
> **[0:42](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=42)** Our RDFa and microdata are very similar and that they are incorporated into the [[HTML]] markup of the webpage via attributes.
>
> **[0:52](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=52)** JSON-LD stands for the [[JavaScript]] Object Notation for Linked Data.
>
> **[0:58](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=58)** Like all JavaScript, it's embedded in the webpage using script tags or it's linked as a separate file.
>
> **[1:08](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=68)** Next, let's compare the syntax of microdata and RDFa.
>
> **[1:12](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=72)** So on the left, I'm showing you microdata as it would be displayed in a very simple sentence, welcome to Harvard University.
>
> **[1:20](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=80)** You'd probably mark that up using a paragraph tag and as you can see here, we're using some attributes to describe the schema.
>
> **[1:28](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=88)** So in the case of microdata, we're going to use the full URL to the [schema.org](https://schema.org) webpage that describes a college or a university, that's in the item type attribute.
>
> **[1:38](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=98)** The item scope indicates that this is the scope, the paragraph tag is the scope of the sentence and that's as far as that schema should apply.
>
> **[1:47](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=107)** Inside of the sentence, we have a span tag in place and the item prop attribute is used to apply the name property from that schema to the words Harvard University which of course is the name of the university that we're talking about.
>
> **[2:03](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=123)** On the RDFa side of this, you'll see exactly the same kind of code in play here, we're still working with [schema.org](https://schema.org), we're still talking about a college or university but the names of the attributes here are slightly different.
>
> **[2:17](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=137)** Instead of item type, we use vocab, instead of item prop, we're going to use just property.
>
> **[2:23](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=143)** So as you can see the concept here of integrating these types of markup via HTML attributes is the same but the actual syntax itself is slightly different.
>
> **[2:35](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=155)** Now, as for JSON-LD, this of course is a JavaScript based syntax and so we have separate HTML from the actual JSON-LD portion of this.
>
> **[2:46](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=166)** So the HTML is very simple, you just spell that out as a paragraph, Welcome to Harvard University and in the JSON-LD, you're going to use your script tags, you do need to include the type attribute in this particular case and the value of that is application/ld+json as shown here.
>
> **[3:04](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=184)** It's an object of course so we're going to list a series of properties and values that correspond to the way that JSON-LD works.
>
> **[3:12](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=192)** It's exactly the same information that we saw before with RDFa or with microdata but it's just written yet again in a different way here.
>
> **[3:22](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=202)** So which one should you use, what's best?
>
> **[3:26](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=206)** These days it seems the [[Google]] prefers JSON-LD fourth search results and it's currently a W3C candidate recommendation as of this recording with the latest update in April, 2020.
>
> **[3:39](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=219)** Microdata is integrated into HTML five.
>
> **[3:43](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=223)** So it's part of the HTML five specification.
>
> **[3:47](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=227)** RDFa is also a W3C candidate recommendation however, its latest version that I was able to find comes from 2015.
>
> **[3:58](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=238)** So it's not as in a rapid development as JSON-LD is, let's take a quick look at the positives and negatives of each of these approaches, starting with JSON-LD.
>
> **[4:10](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=250)** So as I mentioned, Google really likes JSON-LD, it's got a big following.
>
> **[4:16](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=256)** As you saw, JSON-LD is written in JavaScript so it's inside of a script tag or in a separate JavaScript file.
>
> **[4:25](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=265)** And it can only identify information on the page in general.
>
> **[4:29](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=269)** In that earlier example I showed, we knew the page was talking about Harvard University from the JSON-LD but we didn't know exactly where on the page Harvard University was discussed.
>
> **[4:41](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=281)** An advantage of JSON-LD is that it can be added as an afterthought to existing pages.
>
> **[4:46](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=286)** You don't need to change your page markup, just add the script tag to the document and you're ready to go.
>
> **[4:54](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=294)** However, one of the big disadvantages of working with JSON-LD is the need to repeat yourself even though the webpage already spells out basic information, you have to repeat all of that information a second time in the JSON-LD script.
>
> **[5:10](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=310)** Next, let's look at RDFa and microdata.
>
> **[5:14](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=314)** Microdata and RDF go inside of the HTML markup itself as attributes describing the content inside of certain tags.
>
> **[5:23](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=323)** Here, we know that Harvard University is being discussed and we know exactly where as well and those are big advantages.
>
> **[5:32](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=332)** Furthermore, no information needs to be repeated.
>
> **[5:35](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=335)** We type it once it's taged and that we're done, we don't have to type it all in again, the way we do with JSON-LD.
>
> **[5:44](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=344)** However, the disadvantage is kind of the same as the advantage.
>
> **[5:48](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=348)** The code is going inside of the HTML markup itself.
>
> **[5:52](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=352)** If you're building a page from scratch, writing your own HTML, it's relatively straight forward to add this stuff.
>
> **[5:58](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=358)** However, if you're using some kind of no code tool or a [[Content Management]] system or if you're not a coder, it would be difficult to add this type of markup.
>
> **[6:08](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=368)** It's much easier to add the JSON-LD as an afterthought for the page 'cause that can be added by our programmer or you can use one of Google's tools to add it.
>
> **[6:19](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=379)** So which methods should you use?
>
> **[6:21](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=381)** There are strong advantages and disadvantages to each of these methodologies.
>
> **[6:25](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=385)** However, consider that you don't have to stick with just one approach.
>
> **[6:29](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=389)** Google recommends that you start with JSON-LD, then use micro data to cover with JSON-LD Kant.
>
> **[6:36](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=396)** As you'll see in chapter three, Google has some tools available to help you write JSON-LD but they aren't comprehensive for all types of data.
>
> **[6:45](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=405)** So this recommendation makes sense.
>
> **[6:48](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=408)** In this course, I'll cover microdata and JSON-LD, why these two methods?
>
> **[6:53](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=413)** Remember that microdata is part of HTML five and Google really likes JSON-LD whereas RDFa seems to be in less active development.
>
> **[7:04](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=424)** As you can see from my example, though, the principles that are used for microdata and RDFa are really similar.
>
> **[7:11](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=431)** If you know how to use one, you should be able to pick the other one up fairly easily.
>
> **[7:16](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=436)** It's just a few syntax differences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (23), [[HTML]] (10), [[Google]] (6), [[JavaScript]] (5), [[Content Management]] (1)
> **Env Vars:** json (22), html (10), w3c (2), url (1), rdf (1)
> **URLs:** [schema.org](https://schema.org) (5)
> **Documentation:** w3c (2), specification (1)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** as you saw (1)
> **Speakers:** - [presenter] (1)


### 1. Implementing Data Schemes with Microdata

[↑ Back to Table of Contents](#table-of-contents)

#### [Using itemscope and itemtype to add meaning](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=0)** - [Narrator] Now that you know where to go to get information about the type of data, and how that data is going to be characterized.
>
> **[0:07](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=7)** Let's start to talk about the other half of the problem, which is how we're going to express this in code.
>
> **[0:13](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=13)** And the first way we're going to do this is with microdata.
>
> **[0:17](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=17)** Microdata is just one of the several ways that we could be expressing this information.
>
> **[0:23](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=23)** And it's part of the [[HTML]] five specification.
>
> **[0:27](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=27)** So let's go on ahead and get started here inside of your exercise files folder for chapter one, we have this starter file.
>
> **[0:35](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=35)** And if you just take a look at that really quickly, I haven't given you any CSS, I haven't given you any [[JavaScript]], I've just kept this very simple and focused on this little bit of HTML.
>
> **[0:47](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=47)** So as you read through this, you'll notice pretty quickly that this is about Nadia's garden restaurant.
>
> **[0:52](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=52)** And that obviously the type of data that we're talking about here is a restaurant, so the first thing that we want to do is go on over to our [schema.org](https://schema.org) website.
>
> **[1:03](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=63)** And we're going to start by doing a search for a restaurant, go ahead and click on the restaurant [schema.org](https://schema.org) type at the top.
>
> **[1:16](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=76)** And as you see here, this is describing information about the restaurant, as derived from a food establishment, a local business, an organization and a thing.
>
> **[1:28](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=88)** So this is clearly what we're going to leverage as part of our webpage, but before we can start plugging in all of these properties and assigning them values and so forth, we have to actually tell our webpage that we are going to be working with this restaurant schema.
>
> **[1:45](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=105)** So there's two things that we're going to need in order to do this.
>
> **[1:48](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=108)** Most notably is going to be this URL right here for this particular webpage.
>
> **[1:53](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=113)** So [schema.org/Restaurant](https://schema.org/Restaurant) with a capital R, I'm going to go ahead and copy that.
>
> **[1:59](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=119)** And then I'm going to go back to my code.
>
> **[2:03](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=123)** So now what I need to do is indicate which portion of this webpage is going to be about the Nadia's garden restaurant.
>
> **[2:10](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=130)** Well, it happens to be pretty much all of it.
>
> **[2:13](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=133)** So what I'm going to do here is I'm going to add a div tag, why div?
>
> **[2:18](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=138)** Because this is just a big wrapper around all of this information.
>
> **[2:22](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=142)** We're not going to try to convey anything semantically via the HTML with this tag in particular, go ahead and in dent all of that.
>
> **[2:31](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=151)** And then inside of this div tag, we're going to add two things.
>
> **[2:35](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=155)** So the first one is we're simply going to say items scope, just that [[Microsoft Word|word]].
>
> **[2:42](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=162)** It is an attribute, it has no value to it.
>
> **[2:45](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=165)** And item scope refers to the portion of the document, which will use the scheme.
>
> **[2:49](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=169)** So obviously this is the portion of the document it's going to use the scheme what scheme are we talking about?
>
> **[2:55](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=175)** Well, that would be specified via the item type attribute and its value is going to be the URL that we copied.
>
> **[3:06](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=186)** So that's pretty much all you have to do to get started with this, indicate which portion of the document is going to be affected by this particular schema in this case, the entire document, more or less.
>
> **[3:18](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=198)** And then you're going to add the item scope attribute, and then item type which will have a value of the schema that you're using, and it's in the form of a URL for the [schema.org](https://schema.org) website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JavaScript]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** html (3), url (3), css (1)
> **URLs:** [schema.org](https://schema.org) (4)
> **Definitions:** is a  (1), is an  (1), refers to (1)
> **Exercise Files:** exercise files (1), starter file (1)
> **Cross-References:** go back to (1)
> **Documentation:** specification (1)
> **Speakers:** - [narrator] (1)

#### [Adding itemprop to expand on meaning](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=0)** - [Narrator] Now that we've established the scheme in the document and the scope it's going to cover, let's start to add the item properties that will more specifically describe what's up with this particular restaurant.
>
> **[0:11](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=11)** So just taking a quick peek back here@[schema.org/restaurant](https://schema.org/restaurant).
>
> **[0:17](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=17)** This is the information here that in theory pertains to the restaurant and just wanted to orient you a little bit further to this page.
>
> **[0:25](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=25)** Rather than flipping back and forth between my code and this web page.
>
> **[0:29](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=29)** I'm just going to orient you to some of the properties we're going to use in our code just to show you that they exist here first.
>
> **[0:36](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=36)** And then I'm going to to go through exactly how to code those in place here.
>
> **[0:41](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=41)** So note that we have in our restaurant here, we inherit some properties here from our food establishment.
>
> **[0:47](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=47)** The things like we have a menu, that's a wonderful thing, we're going to need to do that.
>
> **[0:52](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=52)** We might have a star rating, for example, that's something that might be of interest to us, as we scroll back here from local business, things like our opening hours will wind up being really important, or the currencies that we accept or payments or price range, then you have to go back to the organization to find things like our address, all right.
>
> **[1:14](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=74)** And you have to go back even further.
>
> **[1:20](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=80)** Here's the properties replace, there's another address here, the physical address of the item.
>
> **[1:25](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=85)** And then you have to go back even further.
>
> **[1:30](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=90)** All the way back to the thing to find things like a description, or an image, or even the name.
>
> **[1:39](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=99)** Name ones, that being something from the thing.
>
> **[1:41](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=101)** Finally, at the bottom of the restaurant schema page, you'll find some really helpful information down here at the bottom.
>
> **[1:49](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=109)** This is going to give you examples of restaurant listings that are here and it'll show you then how does that information look marked up with microdata with RDFa and with [[JSON]]-LD.
>
> **[2:03](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=123)** So, this is useful to take a look at down here at the bottom as you start to puzzle through your own work.
>
> **[2:10](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=130)** So now what I'm going to do here is go back to my code, and let's go ahead and start putting in some of the properties that we're going to incorporate.
>
> **[2:20](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=140)** The way you go about doing this is pretty straightforward.
>
> **[2:22](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=142)** So for example, here in my h1, this is clearly the name of the restaurant.
>
> **[2:27](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=147)** It's Nadia's Garden Restaurant.
>
> **[2:29](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=149)** so here we can add the name property from our schema.
>
> **[2:33](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=153)** And the way we'll do that is simply say, itemprop equals and then quote, "name", just like that.
>
> **[2:41](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=161)** And I've put it right here inside of the h1 tag, and the value of that name property is the contents of that h1 tag.
>
> **[2:49](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=169)** On the [schema.org](https://schema.org) website, you will see instances where they've added a div tags or span tags to mark up some of this information, but you can absolutely incorporate this with [[HTML]] as well.
>
> **[3:02](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=182)** If you read here in the next paragraph that sounds like a description of the restaurant.
>
> **[3:06](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=186)** So let's go ahead and tag that as such item prop equals, quote, "description".
>
> **[3:12](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=192)** And remember, again, I'm not making these things up, these are all coming from the schema for the restaurant.
>
> **[3:19](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=199)** Some of these things we're going to have to deal with in a little bit later, this invitation down here to join us for dinner, for example.
>
> **[3:26](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=206)** And with that, we open for dinner promptly.
>
> **[3:28](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=208)** That's interesting information.
>
> **[3:30](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=210)** But I'm not going to deal with that just yet.
>
> **[3:32](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=212)** Do note that I have semantically marked up this HTML as best I can with just HTML tags.
>
> **[3:39](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=219)** So I'm using the time tag here to indicate that 5:30pm is in fact 1730 in 24 hour format.
>
> **[3:47](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=227)** When I get down here to the menu, there is an item property for this as well.
>
> **[3:52](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=232)** And we can say that the, itemprop equals quote, "hasMenu".
>
> **[4:00](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=240)** That's the property that we're looking for here.
>
> **[4:03](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=243)** And if you take a look at that specification, ultimately, this information may wind up on [[Google]] in a search engine listing result and so forth.
>
> **[4:11](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=251)** So even though it's proper to code this with a relative URL, normally when putting together a web page.
>
> **[4:19](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=259)** What we want to do in this type of situation where we're going to potentially use this link to point to our menu online, we actually want to code this with an absolute URL.
>
> **[4:30](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=270)** So I'm going to put in http www.[nadias-garden.com/menu.html](https://nadias-garden.com/menu.html).
>
> **[4:42](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=282)** And that's the fake absolute URL to that particular website.
>
> **[4:47](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=287)** You may think that just including the address tag here is enough to flag this information as an address.
>
> **[4:53](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=293)** But we have lots of properties for each of these items individually because of course we have a street address here.
>
> **[4:59](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=299)** We have an email address here and we have a phone number.
>
> **[5:02](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=302)** And all of these things are individual items.
>
> **[5:05](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=305)** So let's go through those one at a time.
>
> **[5:08](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=308)** The actual address in terms of the physical address is marked up with its own item property here.
>
> **[5:14](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=314)** So I'm going to use a span tag to indicate that and this would be itemprop equals address.
>
> **[5:27](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=327)** And we'll close that span just after the zip-code here.
>
> **[5:32](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=332)** Then of course, we have an email address that's here.
>
> **[5:35](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=335)** We'll go ahead and drop in the itemprop equals capital email.
>
> **[5:44](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=344)** Again, you'll want to pay attention to that capitalization and so forth in the schema for this.
>
> **[5:49](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=349)** And then there's some odd things that may happen along the way as well.
>
> **[5:52](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=352)** So here we have a phone number and as you see here this is coated with TEL.
>
> **[5:59](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=359)** TEL is for mobile devices it makes this link clickable on a mobile device that you would be able to take that number and put it straight into the phone.
>
> **[6:06](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=366)** In order to flag this as a phone number, we have to both indicate that is a phone number via the itemprop attribute.
>
> **[6:16](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=376)** And then we're also going to have to give it content.
>
> **[6:19](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=379)** So, I'll show you how to do that.
>
> **[6:22](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=382)** We're going to give this an itemprop of telephone.
>
> **[6:28](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=388)** And then we're going to give it content of one, two, three, four, five, six, seven, eight ,nine.
>
> **[6:38](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=398)** In other words, in international format, generally speaking, no dashes, no spaces, you have to start with a country code which is indicated by that plus sign and the United States our country code is one so that is what happens in that particular situation.
>
> **[6:55](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=415)** So in general, if there needs to be a standardized format for a value, like a date, or time or a phone number, you're going to find that this content attribute winds up being required for most other kinds of properties, like the name and the description and so forth the content of the HTML, where that item property is indicated is generally sufficient to convey the information via the schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[JSON]] (1), [[Google]] (1)
> **Env Vars:** html (4), url (3), tel (2), json (1)
> **CLI Commands:** find (4)
> **Analogies:** for example (3), just like (1)
> **URLs:** [schema.org](https://schema.org) (2), [nadias-garden.com](https://nadias-garden.com) (1)
> **Cross-References:** go back to (2), in the next (1)
> **Definitions:** is an  (1), is a  (1), in other words (1)
> **Warnings:** note that (2)

#### [Embedding schemas in schemas](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=0)** - [Instructor] I'm back here on the [schema.org](https://schema.org) website for our restaurant, and if you scroll down just a little bit into this, under organization you'll see that address is one of the items that might be associated with our particular restaurant, you'll notice right immediately after that, it gives us two options, either it's a postal address or it's text, and as you know, the address that we had for our restaurant is pretty complex, it had a physical address, which is made up of a street address It has a city, a state and a zip code all associated with it, and so you might be wondering if you can call out those pieces of data individually?
>
> **[0:42](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=42)** And that is absolutely true, if you click on postal address right here from this schema, this will take you to a special schema for a postal address, and here you'll see that we have the ability to code for example, a post [[Microsoft Office|office]] box number or street address, or it can give us a country, It can give us a region, all that type of information may be very helpful to us in marking up our address a little bit more fully.
>
> **[1:09](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=69)** So in other words, what we're going to do now is, even though I already have my code set up, to indicate that it's an address, we're now going to put a schema inside of a schema, so if you go ahead and open up your exercise files, and then scroll on down here, just a little bit to the address portion of your [[HTML]], which is down around line 17, at the moment, we have a span tag going around, the address, 6410 Via Real Carpinteria California, and, that is indicating that this is our address, well now what we're going to do is we're going to indicate that the kind of address that we have here is a postal address, so we're just going to add to this more schemas, so right directly inside of the same span tag,
>
> **[1:58](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=118)** it still goes around the address, and that's exactly what we need it to do, we'll go ahead and add the following, once again, another item scope, and then an item type, equals, and in this case, we're going to take the one from our postal address, so we'll go ahead and copy our [schema.org](https://schema.org) postal address URL, and then we'll go ahead and paste that right here into our code.
>
> **[2:29](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=149)** Now, what we'll need to do is use a bunch of other span tags, to indicate the parts of our address, so here we'll put in a span tag, with an item prop, of, street address,
>
> **[2:50](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=170)** and that is the 6410 Via Real, close that span tag.
>
> **[2:59](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=179)** Then, the next next one is going to be our address locality, If you read the description for this cause it sounds a little bit weird, the address locality pretty much corresponds to a city or town or something like that.
>
> **[3:16](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=196)** So address locality, and then that will be Carpinteria, and we can end our span tag, and then of course, California, that's a state, so that requires its own tag, again, if you read the documentation, it's described as an address region, which would probably correspond roughly to a state in the United States.
>
> **[3:50](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=230)** So there's California, and then finally, we have the zip code, which many countries called the postal code and then happens to be our item property here, so we'll have a separate span tag for that.
>
> **[4:09](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=249)** So that's our postal code, then we need to end the span here, for the postal code, and the other span here for our address at the top, and that should be everything that we need in order to make this work correctly, If you were to view this page in a web browser, you would find that Carpinteria, California 93013, will still display all on the same line, remember that span is an inline tag, meaning that its width is only as wide as its content, and that it doesn't wrap on to a separate line they way a block element does, so what will happen is, you'll have Carpinteria, California 93013 all right next to each other very evenly on the page, that's why we're using span tags
>
> **[4:58](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=298)** instead of div tags in this particular instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[HTML]] (1)
> **Definitions:** in other words (1), is a  (1), is an  (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [schema.org](https://schema.org) (2)
> **Env Vars:** html (1), url (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise files (1)

#### [Using the meta tag for information that cannot be marked up](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=0)** - [Instructor] Let's continue on with the same example, that we've been working with, the Nadia's Garden Restaurant listing.
>
> **[0:07](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=7)** And we're going to look at line 14 in this particular situation.
>
> **[0:13](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=13)** So this says that we opened for dinner promptly at 5:30 PM, Tuesday through Sunday.
>
> **[0:18](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=18)** We know what that means is humans, the restaurant is going to open at 5:30 PM every night but Monday a closing hour isn't specified because some restaurants close when things seem slow, rather than closing according to our regular schedule.
>
> **[0:32](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=32)** You may be wondering why the time is flagged here but not the days of the week, the [[HTML]] time tag is designed for very specific dates and times on the calendar, not general ranges like those written here.
>
> **[0:45](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=45)** We aren't stating that the restaurant is open December 1st to January 23rd, for example, therefore this time tag isn't used for marking up the days of the week in this particular scenario.
>
> **[0:56](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=56)** But, what about microdata?
>
> **[0:59](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=59)** How do we Mark up a situation like this?
>
> **[1:01](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=61)** Well, if you go and take a look at the restaurant schema, you'll see that there's an opening hours property, this property may be used for date ranges and time ranges, both, unlike the time tag which is very specific.
>
> **[1:15](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=75)** The opening hours property requires dates and times to be listed in a specific format to be machine readable, however, we humans like to write our dates and times in all kinds of crazy formats.
>
> **[1:26](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=86)** Therefore with this property, we don't generally leave the contents of the tag to be the value of the opening hours property, So here we need to state the value in a very specific format, generally within the tag itself.
>
> **[1:40](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=100)** Sometimes that works really, really great, so for example, I already have the time tag in use here, showing that the restaurant opens at 5:30 PM.
>
> **[1:48](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=108)** What if I just go on ahead and add to this right here, the item prop equals opening hours?
>
> **[1:59](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=119)** So that's fabulous, so in this particular case, the value of the datetime attribute is parsed as the value for the opening hours and the value of the datetime attribute for the time tag, it's doing double duty here.
>
> **[2:12](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=132)** But when we talk about the days of the week, Tuesday through Sunday, the time tag has very specific times associated with it, it can do dates or hours, but it can't do a general range like Tuesday through Sunday, which is why those days of the week are not included in the time tag.
>
> **[2:31](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=151)** So let's take a look at our schema and see if we have some other options are available to us here.
>
> **[2:37](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=157)** If you go back to your restaurant schema and you scroll down just a little bit of the way here, you'll find that the opening hour schema, which I've already referenced, and it's going to spell it exactly how these various dates and times need to work.
>
> **[2:54](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=174)** For example, that the times need to be in 24 hour format, and that we have certain two letter combinations for calling out the days of the week.
>
> **[3:02](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=182)** If you click on this, you're going to go to a page where it's going to give you even more information and of course, some examples down here on the bottom.
>
> **[3:10](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=190)** Now, one of the things I'd like to point out to you is that, it shows here in the third bullet that we have an example of time equals item prop of opening hours, and then using that datetime attribute, it's actually called out Tuesday, Thursday and then, the time's here for Tuesdays and Thursdays four to 8:00 PM.
>
> **[3:30](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=210)** This will actually fail validation, if you do things this way.
>
> **[3:34](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=214)** And that's because this is not a proper use of the datetime attribute.
>
> **[3:40](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=220)** So the time tag really can't be used in this kind of context, one solution would be to fall back on your span tag or your div tag, and you'll see that in use here in these examples, if you take a look under the microdata, here's the span tag and use for your opening hours, that's one way of doing this, but there's a second solution as well, and that is this, under the microdata here, for example, number two, you'll find that it's actually making use of meta tags.
>
> **[4:12](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=252)** Well, meta tags typically appear in the head of the document, this is a weird situation where the meta tags will actually occur in the body, so in this particular situation, just like all your other meta tags that you already know about, these are not going to display on the website itself, however, it will convey this information behind the scenes.
>
> **[4:32](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=272)** So let's try using one of these meta tags for our information here in our document.
>
> **[4:39](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=279)** So we come back to our code here, so this meta tag can go anywhere inside of the div here, the div that we have online 10, where we mentioned the item scope, item type, anywhere inside of this is fine for this particular meta tag, just to more clearly associate that meta tag with the content, I'm just going to stick it right here, just after where that mentioned happens, and I'm going to say meta, item prop equals quote, opening hours, and then the content will be, Tu through Su, those are some of the abbreviations you can look again in the [schema.org](https://schema.org) website to find out what all the two letter abbreviations are for the days of the week.
>
> **[5:25](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=325)** And then I'm going to say something like 1730 to, let's say 2200, and that would be 10 o'clock at night.
>
> **[5:34](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=334)** The reason why I picked that is because, perhaps, Nadia's Garden Restaurant has a policy of being open to at least 10 o'clock, or it could be 9:30, whatever it happens to be, you'll have to check with the restaurant.
>
> **[5:45](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=345)** But if you're going to use the opening hours schema, in this way, you need to give both, an opening and a closing time, so that's why I've put that in place there.
>
> **[5:55](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=355)** So this meta tag is great, when you have something that's behind the scenes that you don't necessarily want to display on the page, or when the situation is complicated enough that this tag makes sense.
>
> **[6:05](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=365)** I think I'm going to remove the item prop from my time tag here, just go ahead and get rid of that, and that will avoid any further confusion.
>
> **[6:15](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=375)** Now that time tag is strictly devoted to the semantics while the meta tag is strictly devoted to the microdata, this separation is going to make this page a little bit easier to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Ports:** :30 (4), :00 (1)
> **Analogies:** for example (4), just like (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** scroll down (1), click on (1), go to (1)
> **Cross-References:** go back to (1), we mentioned (1)
> **URLs:** [schema.org](https://schema.org) (1)
> **Env Vars:** html (1)

#### [Using the Structured Data Markup Helper for microdata](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=0)** - Some of you may know that [[Google]] offers a Markup Helper, which will write some of this Microdata Markup for you.
>
> **[0:07](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=7)** However, there's some drawbacks to this approach.
>
> **[0:09](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=9)** Let's take a quick peek at this Markup Helper and see how it works.
>
> **[0:13](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=13)** In your exercise files, folders, 0105, in the begin folder, go to the file inside called Markup.[[HTML]].
>
> **[0:22](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=22)** This is our original HTML Markup from the start of the chapter.
>
> **[0:26](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=26)** Let's go ahead and highlight it.
>
> **[0:27](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=27)** And we'll copy it.
>
> **[0:30](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=30)** And then let's go ahead and take a look at our Markup Helper.
>
> **[0:35](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=35)** So this is the Google Structured Data Markup Helper.
>
> **[0:39](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=39)** Notice here that there's two options, one is for a website, the other is here for email.
>
> **[0:44](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=44)** I'm going to talk about the website.
>
> **[0:46](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=46)** And here we can go ahead and choose the type of information we're talking about.
>
> **[0:51](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=51)** In this case, it's a restaurant so going ahead and scroll down to restaurants.
>
> **[0:56](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=56)** The first thing you'll notice about the Structured Data Markup Helper is that now not every kind of information is listed here.
>
> **[1:03](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=63)** And there's only a handful of things that are listed here.
>
> **[1:06](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=66)** And of course, the point of the Structured Data Markup Helper is to help you structure your data specifically for Google search results, not necessarily for other types of technologies that might be interested in Structured Data.
>
> **[1:20](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=80)** But since Google is one of the main motivating factors for Structured Data, this may still be helpful to you.
>
> **[1:26](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=86)** So you could post a URL of the webpage that you're working with, but we don't have that.
>
> **[1:33](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=93)** So we'll just go to the HTML tab here.
>
> **[1:35](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=95)** We'll go ahead and paste in our HTML as it currently exists.
>
> **[1:40](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=100)** And then we'll click the button at the bottom that says Start Tagging.
>
> **[1:45](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=105)** Once our web page is loaded, it'll display the way it is.
>
> **[1:48](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=108)** Remember, there's no CSS associated with this.
>
> **[1:51](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=111)** So it's a really ugly webpage, but it makes for a very simple example.
>
> **[1:56](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=116)** And now what we can do is we can start tagging our data just as it says here by highlighting the text or an image.
>
> **[2:07](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=127)** So just click and drag in order to select something like the name.
>
> **[2:12](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=132)** And of course, this is the name.
>
> **[2:14](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=134)** So we'll just go ahead and choose Name from the list here.
>
> **[2:17](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=137)** We have other things that we can just click on here.
>
> **[2:20](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=140)** For example, if I click and drag on the phone number here, that's our phone.
>
> **[2:30](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=150)** This one here is our email address, street address.
>
> **[2:43](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=163)** Notice that it's giving us the same breakdown that we already went ahead and classified ourselves by Pand, so state, our postal code, zip code.
>
> **[2:57](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=177)** This is our menu URL.
>
> **[2:59](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=179)** And we go.
>
> **[3:01](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=181)** Take this and say that's our day of the week.
>
> **[3:06](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=186)** Opening hours, day of the week.
>
> **[3:09](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=189)** And we could select this and say opening hours, opening time, date time auto-detect, notice that we also have an option of specifying something more complicated.
>
> **[3:20](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=200)** In this case, we're going to go ahead and specify the opening time.
>
> **[3:24](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=204)** Now notice over here on the side as I went ahead and clicked and dragged and tagged things over here, that so far this has been generating exactly what I've specified as values for these things.
>
> **[3:37](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=217)** So we can go through and check this.
>
> **[3:38](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=218)** So there's a name, we have an image, we have a telephone number and email, street address, et cetera, menu URL.
>
> **[3:48](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=228)** Notice that the menu URL here, because in an earlier video, I fixed this to point to an absolute URL, here, I have still just the relative URL that you might normally Using building a website, notice that Google has filled this in as an absolute URL.
>
> **[4:04](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=244)** And of course, this link will never work.
>
> **[4:07](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=247)** [Googleusercontent.com/menu.html](https://Googleusercontent.com/menu.html), just take note of that.
>
> **[4:11](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=251)** And notice here that our opening time has generated an error.
>
> **[4:16](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=256)** It says here, this tag does not appear to be an opening time.
>
> **[4:20](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=260)** Remember in our previous video that we handled the concept of our days of the week in our opening time via a meta tag, and it's possible to do the same kind of thing here.
>
> **[4:30](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=270)** So we can unlink this, what we have to do is click on the X, go ahead and click on the X for both of those things.
>
> **[4:38](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=278)** And if you scroll on down here, there's an Add Missing Tags item way down at the bottom here.
>
> **[4:45](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=285)** And so we can go ahead and add this and we can choose an opening hours, day of the week.
>
> **[4:54](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=294)** And then we can enter our value of Tu-Su, that's Tuesday through Sunday.
>
> **[5:00](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=300)** And then we can add another once again opening hours.
>
> **[5:04](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=304)** And it will be our opening time specifically.
>
> **[5:08](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=308)** And it will be a date time type of thing.
>
> **[5:11](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=311)** And here we can say it's 17.30.
>
> **[5:15](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=315)** Remember that the times have to be in 24 hour format, it can't be 5:30 p.m.
>
> **[5:21](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=321)** Go ahead and say Save.
>
> **[5:24](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=324)** And those will be added here.
>
> **[5:25](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=325)** And we still have an error here.
>
> **[5:28](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=328)** And it may be looking for a day, a month, a year and a closing time.
>
> **[5:33](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=333)** These are when exactly did the restaurant open.
>
> **[5:37](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=337)** And so you can continue to tweak this.
>
> **[5:40](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=340)** And again, a lot of these so called errors that are happening here are things that have to do with Google and what it expects for listing this restaurant in places like Google Maps, for example, or listing it in search results.
>
> **[5:54](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=354)** So an error isn't necessarily an error in how you have formed the schema, it's an error from Google's perspective in how you would be listing this information in one of their services.
>
> **[6:10](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=370)** So now we could go ahead and say Create HTML.
>
> **[6:14](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=374)** And this is going to generate our Markup.
>
> **[6:18](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=378)** In this case, it's done it as [[JSON]]-LD, which I'll talk about later in the course.
>
> **[6:22](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=382)** You can switch this to Microdata up here on the top, and it will go ahead and give you this HTML now output in the Microdata format.
>
> **[6:37](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=397)** So down here, notice that our time is still generating an error, even though we know that we put it in a valid format initially.
>
> **[6:46](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=406)** Google prefers a date attached to it.
>
> **[6:48](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=408)** So we could give it one maybe the date that these hours took effect.
>
> **[6:52](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=412)** So it gives you right here, "Please insert a valid date right here".
>
> **[6:57](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=417)** And we could go ahead and edit this in the HTML once we go ahead and get that out of here.
>
> **[7:02](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=422)** Notice also that our Markup is pretty different from what we've generated before, with all the spam tags that you see here.
>
> **[7:10](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=430)** That isn't because Google knows more than we do, which might be your first thought, oh, Google actually knows what it's doing and put all these spam tags in here.
>
> **[7:17](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=437)** In fact, there are many errors in this Markup that I'm going to address in the next video.
>
> **[7:22](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=442)** For now, go on ahead and click this Download button up here on the top and download this document for our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (11), [[HTML]] (8), [[JSON]] (1)
> **Env Vars:** url (7), html (6), css (1), json (1)
> **UI Navigation:** click on (3), go to (2), scroll down (1)
> **Cross-References:** previous video (1), later in (1), in the next (1), next video (1)
> **File Paths:** markup.html (1), googleusercontent.com/menu.html (1)
> **Analogies:** for example (2)
> **URLs:** [googleusercontent.com](https://googleusercontent.com) (1)
> **Ports:** :30 (1)

#### [Testing your microdata markup with the Structured Data Testing Tool](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=0)** - [Instructor] Now that we have our markup completed, there's two tests we should run.
>
> **[0:04](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=4)** The first is always validate your [[HTML]] markup to make sure it's correctly formed.
>
> **[0:08](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=8)** Especially after adding all of these extra tags to the document, it's really easy to mis-nest some tags or make a syntax error.
>
> **[0:15](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=15)** So we need to run it through first that validator, and then we're going to try running this through [[Google]]'s Structured Data Testing Tool to see how we did with our microdata markup.
>
> **[0:26](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=26)** In your exercise files folder for 01-06, I've given you two files in that begin folder.
>
> **[0:32](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=32)** One is index.html.
>
> **[0:34](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=34)** This is the document we have been coding by hand with our microdata, and the other one is markup.html.
>
> **[0:41](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=41)** This is the one we just got from Google's Structured Data Testing Tool, that HTML that it wrote for us.
>
> **[0:48](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=48)** So let's start with index.html.
>
> **[0:50](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=50)** Going ahead, and I'm going to highlight my whole HTML document and copy it, and then I'm going to go to my validator, which is at validator.[w3.org](https://w3.org), and we can validate by direct input, which is the best way to do this since we don't actually have this as a website at the moment online somewhere.
>
> **[1:14](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=74)** So we'll just go ahead and paste in our HTML, and then we'll run a check on it.
>
> **[1:19](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=79)** And mine indicates that it has validated correctly and there's no errors or warnings.
>
> **[1:24](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=84)** That's what you want to see.
>
> **[1:25](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=85)** If your code has some errors in it, of course you should go back and fix those before moving on.
>
> **[1:31](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=91)** Once you have that done and you know that your markup is good and well-formed, then you can go to Google's Structured Data Testing Tool.
>
> **[1:40](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=100)** And at this particular point, we are going to go ahead and test our structured data.
>
> **[1:45](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=105)** We're not going to [[Fetch]] it from a URL, because once again, we still have been put this online, but we can put in our code snippets.
>
> **[1:52](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=112)** So just paste that same HTML in place one more time, and say run test.
>
> **[1:58](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=118)** So Google is rendering the results over here on the side.
>
> **[2:01](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=121)** This is in [[JSON]] LD format, which I'm going to talk about extensively in the next chapter.
>
> **[2:06](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=126)** The important thing here is that it says that there's one error and two warnings down here on the bottom, so let's look closely at that.
>
> **[2:14](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=134)** While everything else looks like it rendered correctly, if you read through all of the values and so forth, it's giving us an error about an image and warnings about price range and serves cuisine fields, which we did not include.
>
> **[2:28](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=148)** Where does that come from?
>
> **[2:30](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=150)** If you look at that restaurant schema again on [schema.org](https://schema.org), you won't find any fields that are marked as absolutely required or absolutely not required, so why does Google have this information here?
>
> **[2:43](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=163)** Well, this is what Google is expecting for this restaurant schema.
>
> **[2:48](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=168)** The fact that the image, price range, and serves cuisines fields are not included is an issue with Google, not with the code that you wrote or with the schema itself.
>
> **[2:59](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=179)** Now you need to ask yourself about your goal.
>
> **[3:01](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=181)** Is it to get an enhanced listing in Google or one of Google's [[Microsoft Products|products]], like Google Maps, for example, or is it to satisfy some other search engine?
>
> **[3:11](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=191)** So we'll talk more about enhanced listings later in the course, but if it's to satisfy Google in some way, then we definitely need to add these items to our page.
>
> **[3:22](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=202)** If you don't want the content to show, as with the price range or the serves cuisines, we can always add these as metatags.
>
> **[3:30](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=210)** And remember, one is very much an error.
>
> **[3:32](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=212)** Google sees that as a big problem.
>
> **[3:34](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=214)** Price range, it serves cuisines, it sees as warnings, as lesser problems, but if you think about restaurant listings you might have seen on Google Maps or elsewhere in the Google universe, you'll probably recall that there's usually a picture of the restaurant or a picture of food, and it usually tells you something about price range and the kinds of cuisine that it serves.
>
> **[3:54](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=234)** So if we go back to our HTML here, let me turn on my [[Microsoft Word|word]] wrap, then we can go ahead and add this information, and you'd be welcome, of course, to add a few sentences here that would indicate the type of cuisine, and so forth, or you can keep this simple and just add this as metatags.
>
> **[4:13](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=253)** Make sure, of course, that those metatags appear somewhere inside of the div that starts here on line 10 and ends on line 26.
>
> **[4:20](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=260)** So I'm just going to put it here just after the address.
>
> **[4:23](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=263)** So this is going to be meta itemprop="priceRange" and the content will equal some number of dollar sign, whether it's an expensive or inexpensive restaurant.
>
> **[4:37](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=277)** Then we can put in, again, meta itemprop="servesCuisine"
>
> **[4:46](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=286)** and of course, the content is American.
>
> **[4:55](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=295)** And then finally, the meta itemprop="image" and this image can be, as I said, a picture of food.
>
> **[5:03](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=303)** It can be a picture of the restaurant.
>
> **[5:05](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=305)** It could be a picture of the logo.
>
> **[5:07](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=307)** It just sort of depends on what you want people to see as they are looking in the Google universe.
>
> **[5:14](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=314)** Now, chances are if this is in Google Maps, you might really want a lovely picture of the restaurant or a picture of the food, but I'm just going to reference a logo and remember that that URL should once again be an absolute URL, because Google might be pulling this off the internet from somewhere rather than relatively within your page structure.
>
> **[5:32](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=332)** So we're going to say content="www.[nadias-garden.com/logo.png](https://nadias-garden.com/logo.png)"
>
> **[5:45](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=345)** or whatever it happens to be.
>
> **[5:47](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=347)** So once you've gone ahead and made these changes, you can go ahead, highlight everything again, copy it, and go back to your Structured Data Testing Tool, erase what you had, put in something new, click the validate button here again, and now it should go through with no errors and no warnings.
>
> **[6:09](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=369)** So that's the process for how you would work through this with the code that you already wrote.
>
> **[6:14](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=374)** What about what comes out of Google's markup tool?
>
> **[6:17](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=377)** What happens with that?
>
> **[6:19](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=379)** So let's take a quick peek at that.
>
> **[6:21](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=381)** Once again, go ahead and open up markup.html.
>
> **[6:25](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=385)** This is the markup that Google gave us.
>
> **[6:27](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=387)** I haven't made any changes to it at all.
>
> **[6:30](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=390)** We're just going to go ahead and highlight all of it, copy it, and then we'll switch back to, first of all, our HTML validator.
>
> **[6:40](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=400)** We'll drop in the code that Google wrote and then say check.
>
> **[6:44](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=404)** And the very first thing that you'll notice is that Google writes terrible HTML, and so what's going on there?
>
> **[6:50](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=410)** Well, as it says here at the beginning, it's very upset because H1 is not allowed as a child of span.
>
> **[6:56](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=416)** Remember, span is an inline element.
>
> **[6:59](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=419)** H1 is a block-level element.
>
> **[7:02](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=422)** You cannot have block-level elements nested inside of inline elements.
>
> **[7:07](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=427)** So Google wrote bad code right from the beginning.
>
> **[7:10](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=430)** So you're going to have to change this very first tag here that happens just after body.
>
> **[7:15](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=435)** It says here, it starts with a span of item scope, item type.
>
> **[7:19](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=439)** We're going to need to change that to a div, and then of course, the very last /span in the document, change that to a div as well, /div, and then say check again,
>
> **[8:12](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=492)** price range, and serves cuisines.
>
> **[8:17](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=497)** the requirements from the testing tool, which I find fascinating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (22), [[HTML]] (12), [[Fetch]] (1), [[JSON]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** html (8), url (3), json (1)
> **Analogies:** picture (7), for example (1)
> **CLI Commands:** make (3), find (2)
> **File Paths:** index.html (2), markup.html (2)
> **Cross-References:** go back to (2), in the next (1), later in (1)
> **URLs:** [w3.org](https://w3.org) (1), [schema.org](https://schema.org) (1), [nadias-garden.com](https://nadias-garden.com) (1)
> **Definitions:** is an  (2), is a  (1)

#### [Challenge: Marking up a document with microdata](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=5)** - [Instructor] With all that fabulous information about microdata, it's time for a challenge.
>
> **[0:11](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=11)** So in this particular challenge, I've given you an [[HTML]] document describing a bottle of Two Trees Olive Oil, The Delicate Flavor, and what I'd like for you to do is to mark up this document with the appropriate microdata.
>
> **[0:25](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=25)** Some things you want to think about as you work through this challenge.
>
> **[0:28](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=28)** First of all, you're going to want to identify the main schema from [schema.org](https://schema.org).
>
> **[0:34](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=34)** How would you describe a bottle of olive oil?
>
> **[0:37](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=37)** You're going to need to go to [schema.org](https://schema.org) and figure out what would be the right schema for that.
>
> **[0:43](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=43)** You also want to think about any embedded schema that you might need to address.
>
> **[0:47](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=47)** So once you've found the schema you want to use, you might want to take a look at that schema and see if there's any items where there's more that you want to think about.
>
> **[0:55](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=55)** So for example, in the examples that I just went through with you, you had an opening hours schema that was embedded inside of the restaurant schema that we went through.
>
> **[1:07](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=67)** Once you've completed the markup according to what's specified on [schema.org](https://schema.org), I recommend that you check that markup using the Structured Data Testing Tool.
>
> **[1:17](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=77)** And, of course, you can always validate with the W3C validator as well to make sure that your HTML is valid.
>
> **[1:24](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=84)** And then, of course, to make sure that your structured data is correct.
>
> **[1:29](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=89)** In the next video, I will walk you through my answer to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **URLs:** [schema.org](https://schema.org) (3)
> **Env Vars:** html (2), w3c (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Documentation:** w3c (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Solution: Marking up a document with microdata](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=0)** - [Instructor] Now how'd you do with that challenge?
>
> **[0:08](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=8)** Well, hopefully you started with thinking about that bottle of olive oil and you identified it as a product and this is the schema here for a product with all of its various characteristics that are described here.
>
> **[0:24](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=24)** As you read through this, one of the things that you might have encountered as part of a product is a thing called an aggregate offer, which is actually nested under offer, and an aggregate offer is a way of dealing with pricing for your product, and so as you see here there's a high price and a low price and then maybe you only have a certain number of things that are available and so that is incorporated here as well.
>
> **[0:50](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=50)** It also incorporates things like payment methods and again, things like aggregate ratings and categories and so forth, so these were the two schemas that I picked out to go with this bottle of olive oil and once I had that in mind I went ahead and started to incorporate information into my document as follows, so first of all, this whole webpage described a product, so I wrapped a div around the whole thing, of course with the item scope plus the item type of the [schema.org/product](https://schema.org/product).
>
> **[1:27](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=87)** Then I'm going to describe Two Trees Olive Oil as my brand and organic extra virgin olive oils as a category.
>
> **[1:35](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=95)** We have sort of an introductory sentence here that isn't necessarily categorized and then after that we have the actual name of this product which is delicate.
>
> **[1:43](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=103)** It's part of the organic extra virgin olive oils.
>
> **[1:46](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=106)** I've included here an image.
>
> **[1:48](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=108)** Remember to put in the full URL if you're going to associate the item prop with it which I did in this particular situation.
>
> **[1:56](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=116)** Then I have a brief description of that and then down here inside of the details tag here, I've included an SKU.
>
> **[2:06](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=126)** Those are the specific numbers that go with these kinds of [[Microsoft Products|products]], and then here's my offers, which comes from the product and then of course the aggregate offer offers more detail for this so that I've included that structure here as well, which includes a price currency of U.S. dollars and then the low price of $24.50.
>
> **[2:28](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=148)** I don't have a high price here because this is not on sale.
>
> **[2:32](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=152)** This is its regular price of $24.50 and so that's why I went ahead and just went with low price in this particular situation.
>
> **[2:40](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=160)** If you run this through the markup checker you'll find that all goes well here and this is properly structured and so forth, so that is the answer that I had for this particular problem.
>
> **[2:53](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=173)** It's completely possible that your answer was a little bit different.
>
> **[2:57](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=177)** As long as you can justify what it is that you're trying to communicate, I think you're in a pretty good place and especially if you can get it past the markup checker.
>
> **[3:06](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=186)** That's always one of the key things, making sure it validates and make sure the markup checker is able to understand what it is you're trying to convey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** url (1), sku (1)
> **Versions:** 24.50 (2)
> **Definitions:** is a  (2)
> **URLs:** [schema.org](https://schema.org) (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 2. Working with JSON-LD

[↑ Back to Table of Contents](#table-of-contents)

#### [Writing JSON-LD by hand](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=0)** - [Instructor] [[Google]]'s preferred methodology for structured data is through [[JSON]]-LD.
>
> **[0:05](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=5)** Not only is this information useful for webpages, it's becoming important for home devices like Alexa and Google Home.
>
> **[0:13](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=13)** Even if you're not a [[JavaScript]] person, writing the JSON-LD document is a relatively straightforward thing to do.
>
> **[0:19](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=19)** In this video, I'll get you started writing it by hand.
>
> **[0:22](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=22)** But there's also tools that will write the code for you.
>
> **[0:25](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=25)** And I'll cover those in later videos.
>
> **[0:27](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=27)** First of all, let's get our JSON-LD into the web page.
>
> **[0:31](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=31)** This form of JavaScript may be embedded in the head of your document, or just before the slash body tag.
>
> **[0:38](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=38)** Either is fine, but it should not be linked to a file, as you might do for other JavaScript in your document, why?
>
> **[0:46](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=46)** Because the JSON-LD is specific to this page only.
>
> **[0:52](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=52)** In other words, if you have 100 pages on your website, and you want every page to have structured data, then you'd have to embed a JSON-LD script on every one of those hundred pages individually, It's not possible to have a single central JSON-LD document and then link to it from other pages as you might want to do with other JavaScript, the contents different on every page.
>
> **[1:14](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=74)** So to get started, open up the Nadia dot [[HTML]] file from the begin folder, in folder 02-01 in your Exercise Files folder.
>
> **[1:24](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=84)** This is the same starting document we worked with in the previous chapter on microdata.
>
> **[1:29](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=89)** Let's also take a quick peek at, our restaurant schema @[schema.org](https://schema.org).
>
> **[1:36](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=96)** All of the same data we wanted to include with microdata will want to include with JSON-LD.
>
> **[1:42](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=102)** The difference is merely in how we write the markup.
>
> **[1:45](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=105)** We'll include exactly the same information that we did before.
>
> **[1:49](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=109)** Fastest way to get started is just to scroll to the very bottom of this page, and let's look at example number two.
>
> **[1:57](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=117)** click on the JSON-LD tab and his will give you some sample opening code.
>
> **[2:05](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=125)** So we're going to go ahead and copy this markup here as a starting point, just go ahead and copy that.
>
> **[2:12](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=132)** And then we're going to paste this right here into the head of the document.
>
> **[2:15](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=135)** If you prefer to paste it just above the body tag, that's fine also.
>
> **[2:21](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=141)** I like the head since this is data that's describing the document just like the meta tags do in this particular situation.
>
> **[2:29](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=149)** So obviously, this is not the information for Nadia, let's go ahead and make some changes to this and we can add some additional information as well.
>
> **[2:38](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=158)** Note that this starts with the @context property here it's telling you, it's going to go to [schema.org](https://schema.org) and look for the restaurant type in order to derive the information that's inside of this piece of code.
>
> **[2:53](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=173)** It'll give us a name.
>
> **[2:54](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=174)** We'll have to type that out.
>
> **[2:57](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=177)** Nadia's Garden Restaurant, we may not want to include some of these things.
>
> **[3:05](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=185)** If you wanted to include a description, you could certainly copy and paste that on in like just to demonstrate here, you can also get rid of things, you can add things as well.
>
> **[3:14](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=194)** The order here, as always, is not really all that important.
>
> **[3:19](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=199)** I'm going to add an email, just make sure that you follow the same sort of syntax that you see on other lines here.
>
> **[3:25](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=205)** So email in quotes, followed by a colon.
>
> **[3:28](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=208)** And then inside of that "nadiasgardenrestaurant@[gmail.com](https://gmail.com)",
>
> **[3:38](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=218)** And then make sure you put a comma after each one of these except for the very last one.
>
> **[3:43](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=223)** For opening hours, we're going to have Tu-Su Tuesday to Sunday, and then we can have a time and this will be something like 17:30 to whatever it was I said before 2200 we can have a phone number 1234567890.
>
> **[4:10](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=250)** And of course, we have a menu.
>
> **[4:13](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=253)** This menu is got a different URL.
>
> **[4:16](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=256)** It's [nadias-garden.com/menu.html](https://nadias-garden.com/menu.html).
>
> **[4:25](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=265)** And then there's some things that we know were missing because we saw when we ran our information through the structured data markup tool and the testing tool in the microdata chapter, we know that Google looks for things like the serves cuisine and that type of information as well.
>
> **[4:44](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=284)** So you can add that if you wish, just remember to put a comma.
>
> **[4:48](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=288)** And so we could say serves cuisine American.
>
> **[4:58](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=298)** No comma after the very last one In the list of these and of course, this isn't a complete list of all the properties, but this is enough to get you started with how you would go about coding your own JSON-LD file.
>
> **[5:10](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=310)** You can see the form that the syntax is taking, and you can see how to choose Properties and values from the [schema.org](https://schema.org) website.
>
> **[5:17](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=317)** So it's exactly the same information that we had coded in our microdata documents before.
>
> **[5:25](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=325)** This time, though, we're just writing it in a different type of programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (9), [[JavaScript]] (4), [[Google]] (3), [[HTML]] (2)
> **Env Vars:** json (9), url (1)
> **URLs:** [schema.org](https://schema.org) (3), [gmail.com](https://gmail.com) (1), [nadias-garden.com](https://nadias-garden.com) (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (1), in other words (1)
> **File Paths:** nadias-garden.com/menu.html (1)
> **Ports:** :30 (1)

#### [Working with the Structured Data Markup Helper](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=0)** - [Instructor] In the previous video, I showed you how to write just a tiny little bit of [[JSON]]-LD.
>
> **[0:05](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=5)** There's a lot more that we need to add to this particular bunch of script and the fastest way to do this is most likely using [[Google]]'s Structured Data Markup Helper, and you could continue to write this code by hand, but I think most of you are probably going to take that route as you put together this information in your document, so let's go on ahead and open up your exercise file, this nadia.[[HTML]] in the 02-03 folder.
>
> **[0:32](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=32)** We're just going to go ahead and highlight everything, and copy it, and we're going to go to Google's Structured Data Markup Helper.
>
> **[0:41](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=41)** Just as you saw before with microdata, this works the same kind of way, we're going to say this is a Restaurant under Website here, there is an Email tab as well, then we're going to go to the HTML tab and paste in the code for our web page.
>
> **[0:54](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=54)** If we actually had this online, you could do a URL instead.
>
> **[0:58](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=58)** And then scroll down just a little further, click Start Tagging, and interestingly, Google does not read that JSON-LD and start to fill in data over here as it did with our microdata.
>
> **[1:10](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=70)** In this particular situation, we're just going to have to go ahead and tag things on our own.
>
> **[1:14](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=74)** So once again, we'll go on ahead and just highlight and tag, so here's a name, here's a description, although description isn't one of our options, we can tag things like our phone number over here, so our telephone, we can tag an email address, we can tag our street address, and then this would of course be our locality, and our state, and our zip code or postal code, remember this is going to wind up being our menu URL, and remember that Google will see that incorrectly,
>
> **[2:04](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=124)** we haven't fixed that to be an absolute path to that particular page, so Google will substitute its own [googleusercontent.com](https://googleusercontent.com) in front of that.
>
> **[2:14](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=134)** Now we have the benefit of knowing that there were some other tags in here that Google throws an error about once we start to validate this, so we can go on ahead and add some of the additional missing tags that may not show up necessarily right here inside of our text.
>
> **[2:29](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=149)** So scroll down to the bottom over here on the right, click on add missing tags, and we're going to add a bunch of things.
>
> **[2:34](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=154)** So first of all, we're going to add an image, and that'll go [nadias-garden.com/logo.png](https://nadias-garden.com/logo.png).
>
> **[2:49](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=169)** We're going to add the Cuisine of type American.
>
> **[2:56](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=176)** We can add our opening hours for the days of the week, and that will be Tu to Su, Tuesday to Sunday.
>
> **[3:06](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=186)** Add our opening hours, opening time, and that would be 17:30, and our closing time would be 22:00.
>
> **[3:25](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=205)** So once you've gone ahead and done all of that, you can go ahead and say Save.
>
> **[3:29](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=209)** Notice that this Google tool is only allowing us to add properties that Google thinks are important.
>
> **[3:34](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=214)** Notably, these are the properties that are used in Google's enhanced listings, which we'll talk more about in chapter three.
>
> **[3:40](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=220)** Even though price range seems to be important, it's not an option for a restaurant with this particular tool, even though they have thrown it as an error in the past, I find that really interesting.
>
> **[3:51](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=231)** Anyway, once the these are all entered, we can then go to the markup, so what we're going to do here is just click on the CREATE HTML up here on the top, and this will go ahead and give you the JSON-LD markup right exactly like this, and we can go on ahead and copy that, and I'm going to go back to my HTML document here, and we can go ahead and just get rid of what we had before, paste in this new information instead, and then you probably are going to need to edit this a little bit, so down here on the bottom, these are the opening and closing times, remember Google seemed to want some sort of start date for this, and since it's 2020 right now, we could probably just leave it there as July 27 2015, although we probably want to make sure
>
> **[4:40](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=280)** we have the right starting time and closing time, 22:00.
>
> **[4:49](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=289)** Feel free to change those however you want.
>
> **[4:52](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=292)** Now when I actually run this information here through Google's structured data testing tool, which I'll do in the next video, we already know that it's going to throw a few errors for us, notably for things like a price range, which I couldn't add with the tool I was just using, so it's still going to get mad that it's not there.
>
> **[5:12](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=312)** So we can go ahead and just add some of these additional things manually.
>
> **[5:16](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=316)** Once again, you can put this anywhere, but now that I have this in a more complicated format, you want to watch for where the various curly brackets are, so for example here with address, note that that address information starts here on line 17 and ends on 23, inside of that is additional information about that address.
>
> **[5:36](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=336)** Likewise here for the opening hours, we have some information that starts here on line 26 and doesn't end until line 34.
>
> **[5:43](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=343)** So you can add this additional information about price range anywhere you want, just be careful that you watch those curly brackets.
>
> **[5:50](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=350)** So I'm going to put it right here, just after the email where it's simple, and this will be priceRange, and that value will be two dollar signs, and don't forget the comma after it.
>
> **[6:05](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=365)** Okay, so now that all that code is in place, go ahead and save that, and then we can test this with the Structured Data Testing Tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (11), [[HTML]] (4), [[JSON]] (3)
> **Env Vars:** json (3), html (3), url (2), create (1)
> **UI Navigation:** go to (2), scroll down (2), click on (2)
> **Cross-References:** previous video (1), as you saw (1), go back to (1), in the next (1)
> **Ports:** :00 (2), :30 (1)
> **CLI Commands:** find (1), make (1)
> **URLs:** [googleusercontent.com](https://googleusercontent.com) (1), [nadias-garden.com](https://nadias-garden.com) (1)
> **Definitions:** is a  (1), is an  (1)

#### [Testing our JSON-LD code with the Structured Data Testing Tool](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=0)** - [Instructor] Now that we've gone ahead and used the markup tool to get our [[JSON]] LD written the next thing always to do is to test it and make sure that it's working correctly for [[Google]].
>
> **[0:10](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=10)** And so if you go on ahead and open up your exercise file for this chapter go on ahead and highlight everything, copy, and we're going to go back again to the Google Structured Data Testing Tool.
>
> **[0:25](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=25)** And when you arrive here it's going to ask you for a URL.
>
> **[0:27](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=27)** We don't have one 'cause we haven't put it on the web, but we can put in a code snippet instead.
>
> **[0:32](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=32)** Go on ahead and paste your [[HTML]] here and then say run test.
>
> **[0:37](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=37)** And what's going to happen is that it will go on ahead and basically give you back the same JSON LD you already have written.
>
> **[0:46](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=46)** It will make sure that you've written this correctly.
>
> **[0:49](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=49)** So why would you go about doing this even if Google went ahead and wrote most of your code in the JSON LD?
>
> **[0:55](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=55)** Well remember we went ahead and added some additional stuff to this like a price range.
>
> **[1:01](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=61)** Maybe we put in a comma when we shouldn't have or we forgot to include a comma.
>
> **[1:06](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=66)** There's all kinds of little syntax things that can happen.
>
> **[1:09](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=69)** You could lose track of the nesting in your curly brackets.
>
> **[1:12](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=72)** So still running this error checking is going to be helpful even when Google writes this code for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[JSON]] (3), [[HTML]] (1)
> **Env Vars:** json (3), url (1), html (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Marking up a document with JSON-LD](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=0)** - [Instructor] So, now that we've gone ahead and talked about [[JSON]]-LD, it's time for you to give this a try on your own.
>
> **[0:12](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=12)** And so it's time for another challenge here, this time dealing with JSON-LD Markup.
>
> **[0:17](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=17)** Once again, I've given you the Two Trees Olive Oil, bottle of olive oil and I'd like you to go on ahead and markup this web page with JSON-LD.
>
> **[0:29](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=29)** Whatever that appropriate code happens to be.
>
> **[0:32](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=32)** As you start to think about this problem, there's as always a series of steps you should go through.
>
> **[0:37](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=37)** First of all, you should be identifying the main schema for this web page and any embedded schemas that might be needed in order to put this together.
>
> **[0:46](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=46)** If you went ahead and did the microdata challenge, you already know the answer to this question.
>
> **[0:51](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=51)** But if you didn't do the microdata challenge, this will be new to you, so think about the right schema for describing a bottle of olive oil and then maybe any embedded schemas that are going to help you along the way.
>
> **[1:03](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=63)** Then you're going to need to write your JSON-LD and there's a bunch of ways I showed ya how to do that.
>
> **[1:08](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=68)** You could write it from scratch, straight out of your head, using the syntax that you learned in this chapter if you're a programmer that might be an easy thing to do or you could go to the bottom of the page on the [schema.org](https://schema.org) website, where there's examples presented for JSON-LD of various types.
>
> **[1:27](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=87)** Find an example that's close to what you want, paste that in your document and edit it accordingly or you could work with [[Google]]'s Structured Data Markup Helper and use that to identify the various pieces of code that you need to have.
>
> **[1:41](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=101)** Then finally, as always, even if you use Google's Structured Data Markup Helper, make sure you check your markup using the Structured Data Testing Tool to make sure that you've selected everything that's important, everything Google wants to see in the document and just to double check and make sure everything's all in place.
>
> **[2:02](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=122)** I will show you my answer in the next video.
>
> **[2:04](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=124)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[Google]] (3)
> **Env Vars:** json (5)
> **CLI Commands:** make (3), find (1)
> **URLs:** [schema.org](https://schema.org) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Marking up a document with JSON-LD](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=0)** - [Instructor] So, how did you do with that challenge?
>
> **[0:08](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=8)** Hopefully that wasn't too difficult, particularly if you'd already created the answer to the microdata challenge, it should have been relatively straight-forward.
>
> **[0:16](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=16)** So, this is my answer.
>
> **[0:19](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=19)** In the head of my document, I've gone ahead and included my [[JSON]]-LD and it looks just like this, as follows.
>
> **[0:26](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=26)** So, first of all, of course, we went to [Schema.org](https://Schema.org), and I'm using the product schema in order to describe a bottle of olive oil.
>
> **[0:35](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=35)** I've given it a category of "Organic Extra Virgin Olive Oil," with a name of "Delicate," which is the flavor of this particular olive oil.
>
> **[0:43](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=43)** I've given a path to an image, remember to make sure that that's an absolute link because this type of stuff is used by places like [[Google]] and they are not within your own website, so, don't use your relative URLs here.
>
> **[0:59](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=59)** Description came straight off this web page, along with the SKU, the product number.
>
> **[1:04](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=64)** It's all there.
>
> **[1:06](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=66)** The embedded schema that I needed was the "Offers" schema, and inside of that we called this an aggregate offer to set our price currency as a U.S. dollar and the low price as 24.50.
>
> **[1:21](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=81)** So, that was the basic information that I included here in the challenge.
>
> **[1:25](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=85)** Obviously there's a gillion other characteristics to describe a product, you may have some other ones that were included in here, or you may have taken a slightly different approach to that.
>
> **[1:35](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=95)** There's nothing that says that those other approaches are wrong.
>
> **[1:38](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=98)** So, great job with this challenge and lets move on to the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Google]] (1)
> **Env Vars:** json (1), sku (1)
> **CLI Commands:** make (1)
> **URLs:** [schema.org](https://schema.org) (1)
> **Versions:** 24.50 (1)
> **Cross-References:** next chapter (1)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)


### 3. Structured Data Examples

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding rich search results from Google](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=0)** - [Narrator] In your time using [[Google]], you've likely found some interesting looking listings in the search results.
>
> **[0:06](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=6)** For example, if I search Google for versatile cake frosting, I get these beautiful results here.
>
> **[0:13](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=13)** Wouldn't it be great to have your recipe listed here as well?
>
> **[0:18](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=18)** That can totally happen.
>
> **[0:20](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=20)** You just need to know the secret source to make it happen.
>
> **[0:23](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=23)** And that's using Google's rich results.
>
> **[0:27](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=27)** And the way you make that happen is right here on this website.
>
> **[0:32](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=32)** This is the Google Developers website and it has some information about various types of results you can have here inside of the search gallery.
>
> **[0:42](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=42)** So go ahead and scroll through this and see the kinds of search results you can have.
>
> **[0:47](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=47)** Everything from articles and books, to simple things like breadcrumbs, reviews, events, fact checks, very, very important.
>
> **[0:59](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=59)** How to, like how to tie a tie as it shows here.
>
> **[1:03](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=63)** Job postings, listings for local business, and so forth.
>
> **[1:07](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=67)** And no surprise, there's one down here for recipes as well.
>
> **[1:13](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=73)** Here in Google's documentation, Google will explain how they want a webpage marked up with a structured data so you can generate an enhanced listing in the search results.
>
> **[1:23](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=83)** As always, Google doesn't promise results just because you mark up your page correctly.
>
> **[1:28](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=88)** They will show the enhanced listing only according to their algorithm for the right type of search to the right kind of user.
>
> **[1:37](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=97)** And of course, if you click on the 'get started' button here, this is going to put you into a page with more information about say recipe search results, the kind of enhancements that are possible, some examples, and then the types of structured data that are required in order to make this work correctly.
>
> **[1:55](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=115)** Speaking of cake frosting, I've got a recipe right here that we can practice marking on.
>
> **[2:00](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=120)** Let's get started with that.
>
> **[2:01](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=121)** So you can see how this process works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (7)
> **CLI Commands:** make (3)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Writing JSON-LD code for rich search results with a recipe](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=0)** - [Instructor] Let's start experimenting with [[Google]]'s structured data formula by working with a recipe.
>
> **[0:06](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=6)** This page explains what we need to know about the recipe formula.
>
> **[0:11](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=11)** First it explains how the results might look with Google Search and with Google Images, so that's up here on the top.
>
> **[0:18](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=18)** Here's some search results, here's something on Google images and how that might wind up looking there.
>
> **[0:25](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=25)** It'll give us some options for some other enhancements here.
>
> **[0:28](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=28)** And then down here it starts to give us some examples.
>
> **[0:31](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=31)** And the question will be how you would like your search results displayed, and on which devices.
>
> **[0:37](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=37)** So, the very first option here is a guided recipe that's eligible for display on Google Search.
>
> **[0:44](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=44)** And as a guided recipe on the Assistant, so that is probably what we're going to want to do.
>
> **[0:51](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=51)** You can try it out in the rich results test, I'm going to go through that in another video.
>
> **[0:55](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=55)** But let's start here with Show me the example, and if you go ahead and click that, it's going to give you a bit of code here of stuff that's typical to include in this type of thing.
>
> **[1:06](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=66)** So, this is a recipe for party coffee cake.
>
> **[1:09](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=69)** You'll see here that it has a bunch of images, it has an author, it's got some instructions down here.
>
> **[1:16](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=76)** So, this is a great starting point, we know exactly the kind of information that we want to include.
>
> **[1:21](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=81)** So, what I'm going to do is I'm just going to copy this whole script tag right here, from that <script> tag down to the </script> tag, we'll go ahead and copy that.
>
> **[1:32](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=92)** And then we'll go ahead and open up in your exercise files, in Chapter 3, number two, we're going to open up recipe.[[HTML]].
>
> **[1:40](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=100)** And up here in the head of the document, we can go ahead and paste in all of that [[JSON]] LD that you just copied.
>
> **[1:48](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=108)** If you take a look at the [[Representational State Transfer (REST)|rest]] of that webpage, down here on the bottom, you'll see that this is the recipe for Versatile Cake Frosting from Topsy Turvy Cake Design, and you can see all of the information that's down here on the bottom.
>
> **[2:00](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=120)** So, somehow we need to repurpose this information into JSON-LD, so let's go on ahead and go through that now.
>
> **[2:10](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=130)** So, once again, always, you can start with [schema.org](https://schema.org), and you can have a look at recipe to see what kind of properties are available.
>
> **[2:18](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=138)** Remember that Google doesn't necessarily represent all of the possible properties, it represents the ones that it happens to be using in its search results.
>
> **[2:28](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=148)** So, in our case, we're going to change the name from Party Coffee Cake to Versatile Cake Frosting.
>
> **[2:35](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=155)** And then you can list a whole series of images.
>
> **[2:38](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=158)** So, as you see here, this is an array, if you're familiar with that term.
>
> **[2:43](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=163)** This is a series of photos that might be present for that particular example, but in our case we have only one.
>
> **[2:50](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=170)** So, if that's the case, you can just get rid of those square brackets and that list of URLs and just substitute in the regular old quotes.
>
> **[2:57](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=177)** And this URL I actually have given to you, and that's in your exercise files folder.
>
> **[3:04](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=184)** And it's kind of long.
>
> **[3:06](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=186)** So, here it is, let's just go on ahead and copy that URL.
>
> **[3:11](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=191)** And we can paste that on in place here.
>
> **[3:14](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=194)** We can list our author.
>
> **[3:18](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=198)** And that would be Audrey Tospy.
>
> **[3:22](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=202)** You can have a date published, I'm just going to leave it as is, we could even make it 2020.
>
> **[3:29](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=209)** And then for the description, well you can just scroll on down here and start copying.
>
> **[3:34](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=214)** This looks like a description right here, this first paragraph on line 116.
>
> **[3:38](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=218)** Go ahead and copy that.
>
> **[3:41](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=221)** And then you can paste it up here in the description.
>
> **[3:46](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=226)** These items here are the prep time, the cook time, and the total time, and it happens to be down in here.
>
> **[3:57](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=237)** If you read a little bit, you'll see here, we need to refrigerate for 20 minutes before we frost our cupcakes, and how long is this going to take to make and so forth.
>
> **[4:05](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=245)** So, you can go on ahead and alter these things.
>
> **[4:08](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=248)** So, let's say that the prep time is ten minutes, probably about 10 minutes to mix it together.
>
> **[4:14](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=254)** Then it has to sit for 20 minutes before you use it.
>
> **[4:16](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=256)** Add those two things together, you get 30 minutes, so that would be the total time.
>
> **[4:23](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=263)** You can list your keywords here, frosting for a cake.
>
> **[4:31](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=271)** And we probably don't need coffee.
>
> **[4:34](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=274)** The recipe yield is described down here in our recipe.
>
> **[4:39](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=279)** As it says here, it'll frost about two dozen cupcakes, or one 8-inch two-layer cake.
>
> **[4:44](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=284)** So, back up here, instead of just saying 10, we can say 24 cupcakes or one 8-inch two-layer round cake.
>
> **[5:05](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=305)** Our recipe category is Dessert.
>
> **[5:07](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=307)** It's American.
>
> **[5:09](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=309)** And then maybe we don't have any nutrition information, so we can go ahead and get rid of that.
>
> **[5:16](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=316)** For ingredients, these are the ones that we have just right on down here.
>
> **[5:21](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=321)** The butter, the powdered sugar, the extract, and the buttermilk.
>
> **[5:25](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=325)** So, we can go ahead and type that in.
>
> **[5:32](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=332)** Okay, then we're onto the recipe instructions.
>
> **[5:34](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=334)** And if you refer to the recipe below, you'll see that this is a HowToStep, and it's pretty straight forward.
>
> **[5:41](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=341)** This is just frosting, it's basically you mix it together, and refrigerate it, and you're more or less done.
>
> **[5:46](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=346)** So, we may not need all of the items that are in here.
>
> **[5:48](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=348)** So, right now we have step names like, we're preheating it, what is the text that goes with that.
>
> **[5:55](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=355)** Maybe there's a specific URL that goes with it, or a specific image.
>
> **[5:58](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=358)** We actually don't need any of those things, we just need the HowToStep, and we need some text.
>
> **[6:03](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=363)** So, I'm going to go ahead and edit this just to reflect that.
>
> **[6:11](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=371)** Don't forget to remove that last comma.
>
> **[6:13](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=373)** And then instead here, we can just copy, "Mix all ingredients together in a medium-size glass bowl until well incorporated."
>
> **[6:22](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=382)** We'll just copy that.
>
> **[6:25](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=385)** And paste that in as our first step.
>
> **[6:29](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=389)** Our second step is going to be essentially the same thing, once again, just the text.
>
> **[6:38](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=398)** And we can go ahead and once again copy that information from down here in the recipe.
>
> **[6:49](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=409)** The remaining HowToSteps that you see here, we don't actually need at all, so we can go ahead and start getting rid of those.
>
> **[6:56](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=416)** So, we'll just go on ahead and delete these.
>
> **[7:02](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=422)** And remember, anytime you're around the last one, remove that closing comma.
>
> **[7:07](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=427)** So, our recipe instructions, there's only two instructions, and the last one does not have a comma after it.
>
> **[7:13](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=433)** Finally, we can have an aggregate rating here, and I'm just going to leave those values in here.
>
> **[7:18](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=438)** So, this tells you that we have 18 people have given it an aggregate rating of five, probably like five stars.
>
> **[7:25](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=445)** And then after that, there's all kinds of additional information here.
>
> **[7:29](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=449)** We can have an expiration of the video information that we have here, but we actually don't have a video, so we'll just go on ahead and get rid of that.
>
> **[7:39](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=459)** And that means that this aggregate rating is the last item here, so make sure you get rid of the comma here as well.
>
> **[7:49](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=469)** Then you want to double check your curly brackets, make sure that those lineup, so we have an opening curly bracket here, a closing curly bracket down here.
>
> **[7:57](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=477)** VS Code, the editor that I'm using here makes this pretty easy to do.
>
> **[8:01](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=481)** And that will help make sure that you haven't mistakenly removed any of those closing curly brackets along the way.
>
> **[8:07](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=487)** Well, there you go, that's the process of getting your content, in this case a simple recipe, a good way to start getting it into JSON-LD format.
>
> **[8:16](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=496)** And as you know, now that we've done the markup, the next thing to do is to check that markup using some kind of markup checker, and see how this is going to display.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (6), [[JSON]] (3), [[HTML]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (5), is an  (1), means that (1)
> **Env Vars:** json (3), url (3)
> **CLI Commands:** make (5)
> **Exercise Files:** exercise files (2)
> **File Paths:** recipe.html (1)
> **URLs:** [schema.org](https://schema.org) (1)
> **Tools:** vs code (1)

#### [Testing and previewing the rich results code](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=0)** - [Instructor] Okay.
>
> **[0:01](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=1)** Now that we have our first pass at the recipe markup here in place let's see how we did with our rich results.
>
> **[0:09](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=9)** This is a different type of test that I haven't showed you before.
>
> **[0:12](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=12)** The point of using [[JSON]]-LD and marking up this particular recipe was to give us some fabulous looking search results.
>
> **[0:21](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=21)** And, so we've gone ahead and followed that formula here.
>
> **[0:25](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=25)** Now we want to see how that's going to look like as a preview.
>
> **[0:28](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=28)** So, if you go on ahead and open up your Exercise Files folder.
>
> **[0:32](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=32)** Open up folder number three under chapter three.
>
> **[0:35](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=35)** And the recipe as we currently have it.
>
> **[0:38](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=38)** Go on ahead and select all of the [[HTML]] and copy it.
>
> **[0:42](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=42)** Then we're going to come to the [[Google]] rich results test.
>
> **[0:47](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=47)** This is going to indicate whether your page is supporting rich results.
>
> **[0:51](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=51)** And what they mean by supporting... What they really mean is it going to display it correctly.
>
> **[0:57](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=57)** So, once again you have a choice of a URL or you have the choice of Code.
>
> **[1:03](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=63)** Let's go on ahead and go to Code.
>
> **[1:05](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=65)** We can go ahead and put our Code in place.
>
> **[1:08](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=68)** Let's go on ahead and change this to the Googlebot desktop.
>
> **[1:11](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=71)** You do have a choice here between the desktop and the smartphone.
>
> **[1:15](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=75)** And you'd probably be best choosing both of those.
>
> **[1:17](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=77)** But since we've been looking at this on the desktop so far.
>
> **[1:20](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=80)** Let's continue looking at it that way.
>
> **[1:23](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=83)** And then we're going to go ahead and say "Test Code".
>
> **[1:28](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=88)** This is going to go ahead and load the HTML that we've put in place.
>
> **[1:32](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=92)** It's going to retrieve things like images and so forth.
>
> **[1:35](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=95)** And then it will go ahead and show you whether this is eligible for rich search results or not.
>
> **[1:41](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=101)** Because we started with JSON-LD information for a recipe, it's more likely that it's going to be quote, "Eligible for rich results".
>
> **[1:50](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=110)** Notice that Google is not going to detect other types of data that you might want to include here.
>
> **[1:55](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=115)** So, it's not going to notice things like, Microdata or anything else.
>
> **[2:00](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=120)** So this has noticed a couple of things here for us.
>
> **[2:02](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=122)** It's going to show us a preview of the results.
>
> **[2:05](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=125)** We can go ahead and take a preview.
>
> **[2:07](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=127)** You'll see the little bit of the picture.
>
> **[2:09](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=129)** We're just seeing the top of the bowl there.
>
> **[2:11](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=131)** Not the whole entire bowl.
>
> **[2:13](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=133)** And we'll that it's versatile cake frosting.
>
> **[2:16](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=136)** There's that ranking of five out of 18 people who reviewed it.
>
> **[2:19](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=139)** 30 minutes total.
>
> **[2:21](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=141)** And this going to be what it's going to look like.
>
> **[2:23](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=143)** So that's going to show you what it looks like on the phone.
>
> **[2:26](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=146)** This is a second search result.
>
> **[2:33](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=153)** This result looks very much like the first one.
>
> **[2:36](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=156)** Then we also have the result for the Google Assistant.
>
> **[2:39](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=159)** What is this going to look like?
>
> **[2:41](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=161)** Looks like this.
>
> **[2:42](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=162)** Here's the guidance, ingredients and the guidance steps.
>
> **[2:46](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=166)** Again, as a result of the Google Search Assistant.
>
> **[2:51](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=171)** A couple of things you might have noticed there, this doesn't look like our picture does it.
>
> **[2:57](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=177)** And sometimes you'll see things like your site title here.
>
> **[3:00](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=180)** This isn't an indication that you've failed to tag something.
>
> **[3:04](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=184)** If you poke around in the documentation, you'll find where it describes that sometimes the image isn't correct or it's using a placeholder in this particular situation.
>
> **[3:14](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=194)** It also will use those placeholder titles for expediency.
>
> **[3:17](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=197)** Google will get that information correct from the webpage title when it actually does appear in the search engine.
>
> **[3:23](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=203)** So if we go and head back to the results preview here.
>
> **[3:27](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=207)** This is also going to flag some other things for us.
>
> **[3:29](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=209)** It will tell us that we have two warnings.
>
> **[3:31](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=211)** And it will tell us that we are missing nutrition.
>
> **[3:34](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=214)** And we're missing a video.
>
> **[3:35](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=215)** That's absolutely true.
>
> **[3:36](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=216)** We did not input that information.
>
> **[3:39](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=219)** And in fact, I don't think we even had it.
>
> **[3:41](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=221)** So, if you have that information you could of course include it.
>
> **[3:44](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=224)** But if you don't, Google will give you a warning.
>
> **[3:46](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=226)** But it's no big deal.
>
> **[3:48](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=228)** Okay.
>
> **[3:49](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=229)** And then here it's reflecting all of the other information that we put in for that document.
>
> **[3:54](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=234)** It will also give you a review snippet here.
>
> **[3:56](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=236)** This is the aggregate rating specifically.
>
> **[3:58](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=238)** Remember we had that set to a value of five out of 18 possible ratings.
>
> **[4:04](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=244)** So this is the information that the Google rich results test will give you.
>
> **[4:10](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=250)** Once again, it will give you both information that it's read from your JSON-LD.
>
> **[4:16](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=256)** It will also give you some visual results.
>
> **[4:19](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=259)** They're not always absolutely perfect.
>
> **[4:21](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=261)** But they're pretty good and they'll give you a good sense of how you're search results are going to look once the site is spidered and included in Google.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (8), [[JSON]] (3), [[HTML]] (2)
> **Env Vars:** json (3), html (2), url (1)
> **Definitions:** is a  (2)
> **Analogies:** picture (2)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### [Challenge: Rich search results for courses](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=0)** - [Instructor] One final challenge here for you in this course and that of course has to do with rich search results.
>
> **[0:13](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=13)** So let's see if you can figure out how to get a course listing up in [[Google]] with the appropriate rich search result formatting.
>
> **[0:25](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=25)** So how might you go about approaching this particular problem?
>
> **[0:28](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=28)** There is a starter [[HTML]] file in your exercise files.
>
> **[0:31](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=31)** Make sure you take a look at that.
>
> **[0:33](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=33)** Then what you're going to have to do is look at that course and find the structured data type definition for the course.
>
> **[0:39](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=39)** So make sure you look at the Google documentation and find what it has to offer for a course.
>
> **[0:46](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=46)** Then you're going to want to copy the sample [[JSON]]-LD, drop that into your HTML document, edit it appropriately, and make sure that the data that's there is matching the course data that you are working with.
>
> **[1:01](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=61)** And then finally, you're going to want to verify your listing with the rich results test website.
>
> **[1:07](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=67)** So make sure you run it through that website so that you have what you are expecting.
>
> **[1:13](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=73)** So I will go through my answer with you in the next video.
>
> **[1:17](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=77)** Good luck figuring out how to get a course in the rich search result format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[HTML]] (2), [[JSON]] (1)
> **CLI Commands:** make (4), find (2)
> **Env Vars:** html (2), json (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Rich search results for courses](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=0)** - [Instructor] All right, so how'd you do with the rich search results challenge?
>
> **[0:10](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=10)** So, hopefully you started here, inside of the [[Google]] documentation, and you found the reference here for a course.
>
> **[0:19](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=19)** And you took a look at this information, it gave you some starter, introductory code here, that you could just copy and paste into your [[HTML]] document that I gave you in your exercise files folder, and you could start to make changes to that.
>
> **[0:35](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=35)** Notice that there are some guidelines here.
>
> **[0:38](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=38)** Google in particular, with these courses, is very strict about what they want to see in terms of a course.
>
> **[0:44](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=44)** They don't want you doing a whole lot of promotional phrases, or pricing, and so forth, inside of those course descriptions.
>
> **[0:51](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=51)** And a couple of other things that might trip you up, as it starts to describe your required and recommended properties here, one of the things in the description is that it has a display limit of 60 characters, so you have to make sure you read the documentation super carefully, just to be sure that you are getting everything out of this to get the best, rich search result possible.
>
> **[1:16](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=76)** So once you've gone ahead and done that, this is what my text wound up looking like here.
>
> **[1:22](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=82)** So inside of my [[JSON]]-LD, this was [schema.org](https://schema.org), a type of course, the name, all this information came from the stuff down here below, the name is [[Crafting Meaningful HTML]], which is another course that you can watch with me here at [[LinkedIn]] Learning.
>
> **[1:38](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=98)** And then the description is just simply, "Learn to structure documents with semantic HTML," which I wrote based on the, obviously, much longer description that I have here, inside of this course, so you'd have to shorten that up a little bit.
>
> **[1:52](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=112)** The provider is an embedded schema here, so a little bit more information about them: of course, this is an organization, the name of that is LinkedIn Learning, and this is a link to the course itself.
>
> **[2:06](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=126)** So this is the way I wound up making my course look, and if we come back to the website and run it through the rich results test, I've just gone ahead and pasted in that code for you, it will tell you that the page is eligible for rich results.
>
> **[2:22](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=142)** It will go on and kind of list off all of those values here, exactly as I mentioned to you before, and if you preview the results, this is the way it might wind up looking here inside of Google.
>
> **[2:36](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=156)** Note that it does say right here, "Your rich card title here.
>
> **[2:41](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=161)** "[[Crafting Meaningful HTML]]."
>
> **[2:44](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=164)** That does not necessarily mean that you have done something wrong.
>
> **[2:48](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=168)** Remember, again, with this particular rich results test environment, sometimes it puts in placeholder text instead of the text from your web page.
>
> **[2:57](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=177)** So just because you see your rich card title here, doesn't necessarily mean you've done anything wrong with your markup.
>
> **[3:04](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=184)** And we can only preview this one in a smart phone.
>
> **[3:08](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=188)** Sometimes there's some other devices available, but in the case of this course, this is all we had available to us to test.
>
> **[3:15](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=195)** So, hopefully that course listing worked out well for you, you get the idea of how those rich search results work, and you'll be able to put that to work for pretty much any kind of search result that's out there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Google]] (3), [[LinkedIn]] (2), [[JSON]] (1)
> **Env Vars:** html (4), json (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** make (2)
> **URLs:** [schema.org](https://schema.org) (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise files (1)
> **Best Practices:** recommended (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980&t=0)** - [Instructor] Hey everybody it's Jen Cramer.
>
> **[0:02](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980&t=2)** Thank you so much for watching my course about web semantics and structured data.
>
> **[0:09](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980&t=9)** If you're interested in taking some other courses with me that may also be of interest I have a couple of recommendations for you.
>
> **[0:16](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980&t=16)** So if you are watching information about structured data and web semantics, chances are you're interested in meaningful [[HTML]] as well.
>
> **[0:24](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980&t=24)** And I have a course that's for you called [[Crafting Meaningful HTML]] which will talk about all of the wild and wonderful HTML tags that are out there that can bring extra meaning to your document.
>
> **[0:38](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980&t=38)** I also have a course called HTML tables that's a deep dive about HTML tables including ways to make them accessible and meaningful to search engines and accessibility [[Microsoft Products|products]].
>
> **[0:50](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980&t=50)** And finally if you're just interested in search engines in general, if you're interested in marketing and content and other aspects of your website beyond the code you might be interested in my series called the accidental web designer where I have little short bursts of information that'll give you some high level quick bits of information about those types of topics.
>
> **[1:14](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980&t=74)** Thanks again so much for watching, I appreciate it, and I hope to see you again in another course soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (5), [[Microsoft Products|Products]] (1)
> **Env Vars:** html (5)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Jen Kramer]]

## Resources

- Exercise files available

## Skills Covered

- HTML
- Semantic Markup

## Path Context

### In [[Advance Your Skills in HTML]]
← [[Learning Web Audio and Video]] | **10 of 11** | [[Developing for Web Performance]] →

## Appears In

- [[Advance Your Skills in HTML]]

## Related Courses

_Courses sharing skills:_

- [[Building Great Forms with HTML and CSS]] — HTML
- [[HTML & CSS- Creating Forms]] — HTML
- [[HTML- Metadata in the Head]] — HTML
- [[HTML- Tables]] — HTML
- [[HTML- Images and Figures]] — HTML

---

[↑ Back to top](#)