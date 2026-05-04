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
  - '[Advance Your Skills in HTML](../../Paths/Web%20Development/Learning%20Paths/Advance%20Your%20Skills%20in%20HTML.md)'
prev_courses:
  - '[Learning Web Audio and Video](Learning%20Web%20Audio%20and%20Video.md)'
next_courses:
  - '[Developing for Web Performance](Developing%20for%20Web%20Performance.md)'
path_nav: '[{"path":"Advance Your Skills in HTML","position":10,"total":11,"prev":"Learning Web Audio and Video","next":"Developing for Web Performance"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/html
  - skill/semantic-markup
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/appreciating-the-value-of-the-semantic-web-23000145?u=76281980&t=0)** - Semantic data makes your content accessible to more humans and robots, and isn't that what you want in the first place? Once you've learned how to properly work with structured data, creating attractive and interesting listings in search results, and in applications like [Google](../../Glossary/Service/Google.md) Maps is within your reach. In this course, we'll dive into micro data and [JSON](../../Skills/Web%20Development/JSON.md) LD to better organize your website's content, so it can be easily read by search engines and other AI. I'm Jen Kramer, an educator and web developer, and I've been organizing websites for many years. So if you're ready, let's get started with [HTML](../../Skills/Web%20Development/HTML.md) structured semantic data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** json (1), html (1)
> **Speakers:** - semantic (1)

#### [Introducing schema.org, a standardized way of describing items](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=0)** - There are two halves to the structured data problem. The first issue is that we need to clearly define the structure of our data. Once we know that, and we have that all standardized, then we can discuss how we will convey that standard via markup and programming. So let's address that first problem. How do we clearly define the structure of our data? Fortunately, there is one centralized solution for this, regardless of how we mark up the structure and that's through a website called [schema.org](https://schema.org). This is that particular website. You're welcome to open this up in your own browser and take a look at the website. Chances are, you might wind up going to the schemas link up here on the top. This will give you the option of browsing through a variety of types of works that are here on this website. So you can take a look at any of those, or of course you can go up to your search and you can type in a search parameter and find a thing in particular. Let's just jump right here to the recipe, which is a commonly used type of creative work. So this is a series of properties here that are specific to the recipe. They're right here at the top. And so you'll see here that a recipe has properties here that you would expect, like how long does it take to cook or how do you cook it or what kind of recipe is it and what are its ingredients? These are properties that really are specific to a recipe. While it's possible you won't have all of those properties
>
> **[1:34](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=94)** in your recipe, they're available for your use. Now you might be thinking about other things that pertain to a recipe as well, that are not listed here at the very top of the schema. Things like, what is the name of this recipe or who created this recipe? That type of thing. Well, a recipe doesn't stand alone in the world. It inherits properties from other less defined properties, and that structure is described here in the breadcrumb. So as you see here, a recipe is derived from a work called how to, How to is derived from a creative work. And that is derived from a thing. Even though we're talking about a recipe, all of the properties that are associated with things, creative works, and how tos are available to us to use a recipe. So let's take a quick peek at the creative work to see what's listed there. So this is a listing of all of the properties that are here for a Creative Work and not all of these are going to apply to our recipe. For example, most recipes don't have an abstract. That is something that may apply to other types of creative works, but it probably doesn't apply to a recipe. It is, however, available to you if you wanted to have an abstract about your recipe. If you scroll down a little bit further though, you'll notice that author is one of the properties associated with a creative work and recipes certainly have authors. So that might be something that you'd want to leverage.
>
> **[3:07](https://www.linkedin.com/learning/html-structured-semantic-data/introducing-schema-org-a-standardized-way-of-describing-items?u=76281980&t=187)** Likewise, an award is something associated with a creative work that might also apply to a recipe. So these are things that you might want to have available to you if you were listing a recipe. So while you're choosing a schema to describe whatever it is you want to describe in the same type of way, you have the option of building on that generic item, like a creative work, and then layering on more properties specific to that type of item. All of these properties are available to you for describing that item. [schema.org](https://schema.org) is a centralized method for describing just about anything. However, there are several ways to implement this scheme and we'll discuss that in the next video.

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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=0)** - [Presenter] Once you have a data scheme identified from [schema.org](https://schema.org) now you need to communicate that scheme through some type of programming. There are several ways to do this. As mentioned on the [schema.org](https://schema.org) homepage, three methods are RDFa, microdata and [JSON](../../Skills/Web%20Development/JSON.md)-LD. Fundamentally, these are three different ways of solving the same problem, they identify elements of a data scheme described at [schema.org](https://schema.org) website. However, how they do this and their acceptance by search engines varies. Let's take a quick peek at these methodologies. Our RDFa and microdata are very similar and that they are incorporated into the [HTML](../../Skills/Web%20Development/HTML.md) markup of the webpage via attributes. JSON-LD stands for the [JavaScript](../../Skills/Software%20Development/JavaScript.md) Object Notation for Linked Data. Like all JavaScript, it's embedded in the webpage using script tags or it's linked as a separate file. Next, let's compare the syntax of microdata and RDFa. So on the left, I'm showing you microdata as it would be displayed in a very simple sentence, welcome to Harvard University. You'd probably mark that up using a paragraph tag and as you can see here, we're using some attributes to describe the schema. So in the case of microdata, we're going to use the full URL to the [schema.org](https://schema.org) webpage
>
> **[1:34](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=94)** that describes a college or a university, that's in the item type attribute. The item scope indicates that this is the scope, the paragraph tag is the scope of the sentence and that's as far as that schema should apply. Inside of the sentence, we have a span tag in place and the item prop attribute is used to apply the name property from that schema to the words Harvard University which of course is the name of the university that we're talking about. On the RDFa side of this, you'll see exactly the same kind of code in play here, we're still working with [schema.org](https://schema.org), we're still talking about a college or university but the names of the attributes here are slightly different. Instead of item type, we use vocab, instead of item prop, we're going to use just property. So as you can see the concept here of integrating these types of markup via HTML attributes is the same but the actual syntax itself is slightly different. Now, as for JSON-LD, this of course is a JavaScript based syntax and so we have separate HTML from the actual JSON-LD portion of this. So the HTML is very simple, you just spell that out as a paragraph, Welcome to Harvard University and in the JSON-LD, you're going to use your script tags, you do need to include the type attribute in this particular case and the value of that is application/ld+json as shown here. It's an object of course so we're going to list a series of properties and values that correspond
>
> **[3:10](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=190)** to the way that JSON-LD works. It's exactly the same information that we saw before with RDFa or with microdata but it's just written yet again in a different way here. So which one should you use, what's best? These days it seems the [Google](../../Glossary/Service/Google.md) prefers JSON-LD fourth search results and it's currently a W3C candidate recommendation as of this recording with the latest update in April, 2020. Microdata is integrated into HTML five. So it's part of the HTML five specification. RDFa is also a W3C candidate recommendation however, its latest version that I was able to find comes from 2015. So it's not as in a rapid development as JSON-LD is, let's take a quick look at the positives and negatives of each of these approaches, starting with JSON-LD. So as I mentioned, Google really likes JSON-LD, it's got a big following. As you saw, JSON-LD is written in JavaScript so it's inside of a script tag or in a separate JavaScript file. And it can only identify information on the page in general. In that earlier example I showed, we knew the page was talking about Harvard University from the JSON-LD but we didn't know exactly where on the page Harvard University was discussed. An advantage of JSON-LD is that it can be added
>
> **[4:44](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=284)** as an afterthought to existing pages. You don't need to change your page markup, just add the script tag to the document and you're ready to go. However, one of the big disadvantages of working with JSON-LD is the need to repeat yourself even though the webpage already spells out basic information, you have to repeat all of that information a second time in the JSON-LD script. Next, let's look at RDFa and microdata. Microdata and RDF go inside of the HTML markup itself as attributes describing the content inside of certain tags. Here, we know that Harvard University is being discussed and we know exactly where as well and those are big advantages. Furthermore, no information needs to be repeated. We type it once it's taged and that we're done, we don't have to type it all in again, the way we do with JSON-LD. However, the disadvantage is kind of the same as the advantage. The code is going inside of the HTML markup itself. If you're building a page from scratch, writing your own HTML, it's relatively straight forward to add this stuff. However, if you're using some kind of no code tool or a [Content Management](../../Skills/Web%20Development/Content%20Management.md) system or if you're not a coder, it would be difficult to add this type of markup. It's much easier to add the JSON-LD as an afterthought for the page 'cause that can be added by our programmer or you can use one of Google's tools to add it.
>
> **[6:19](https://www.linkedin.com/learning/html-structured-semantic-data/comparing-json-ld-rdfa-and-microdata-for-implementing-data-schemes?u=76281980&t=379)** So which methods should you use? There are strong advantages and disadvantages to each of these methodologies. However, consider that you don't have to stick with just one approach. Google recommends that you start with JSON-LD, then use micro data to cover with JSON-LD Kant. As you'll see in chapter three, Google has some tools available to help you write JSON-LD but they aren't comprehensive for all types of data. So this recommendation makes sense. In this course, I'll cover microdata and JSON-LD, why these two methods? Remember that microdata is part of HTML five and Google really likes JSON-LD whereas RDFa seems to be in less active development. As you can see from my example, though, the principles that are used for microdata and RDFa are really similar. If you know how to use one, you should be able to pick the other one up fairly easily. It's just a few syntax differences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (23), [HTML](../../Skills/Web%20Development/HTML.md) (10), [Google](../../Glossary/Service/Google.md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (5), [Content Management](../../Skills/Web%20Development/Content%20Management.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=0)** - [Narrator] Now that you know where to go to get information about the type of data, and how that data is going to be characterized. Let's start to talk about the other half of the problem, which is how we're going to express this in code. And the first way we're going to do this is with microdata. Microdata is just one of the several ways that we could be expressing this information. And it's part of the [HTML](../../Skills/Web%20Development/HTML.md) five specification. So let's go on ahead and get started here inside of your exercise files folder for chapter one, we have this starter file. And if you just take a look at that really quickly, I haven't given you any CSS, I haven't given you any [JavaScript](../../Skills/Software%20Development/JavaScript.md), I've just kept this very simple and focused on this little bit of HTML. So as you read through this, you'll notice pretty quickly that this is about Nadia's garden restaurant. And that obviously the type of data that we're talking about here is a restaurant, so the first thing that we want to do is go on over to our [schema.org](https://schema.org) website. And we're going to start by doing a search for a restaurant, go ahead and click on the restaurant [schema.org](https://schema.org) type at the top. And as you see here, this is describing information about the restaurant, as derived from a food establishment, a local business, an organization and a thing. So this is clearly what we're going to leverage as part of our webpage,
>
> **[1:34](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=94)** but before we can start plugging in all of these properties and assigning them values and so forth, we have to actually tell our webpage that we are going to be working with this restaurant schema. So there's two things that we're going to need in order to do this. Most notably is going to be this URL right here for this particular webpage. So [schema.org/Restaurant](https://schema.org/Restaurant) with a capital R, I'm going to go ahead and copy that. And then I'm going to go back to my code. So now what I need to do is indicate which portion of this webpage is going to be about the Nadia's garden restaurant. Well, it happens to be pretty much all of it. So what I'm going to do here is I'm going to add a div tag, why div? Because this is just a big wrapper around all of this information. We're not going to try to convey anything semantically via the HTML with this tag in particular, go ahead and in dent all of that. And then inside of this div tag, we're going to add two things. So the first one is we're simply going to say items scope, just that [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). It is an attribute, it has no value to it. And item scope refers to the portion of the document, which will use the scheme. So obviously this is the portion of the document it's going to use the scheme what scheme are we talking about? Well, that would be specified via the item type attribute and its value is going to be the URL that we copied. So that's pretty much all you have to do
>
> **[3:08](https://www.linkedin.com/learning/html-structured-semantic-data/using-itemscope-and-itemtype-to-add-meaning?u=76281980&t=188)** to get started with this, indicate which portion of the document is going to be affected by this particular schema in this case, the entire document, more or less. And then you're going to add the item scope attribute, and then item type which will have a value of the schema that you're using, and it's in the form of a URL for the [schema.org](https://schema.org) website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=0)** - [Narrator] Now that we've established the scheme in the document and the scope it's going to cover, let's start to add the item properties that will more specifically describe what's up with this particular restaurant. So just taking a quick peek back here@[schema.org/restaurant](https://schema.org/restaurant). This is the information here that in theory pertains to the restaurant and just wanted to orient you a little bit further to this page. Rather than flipping back and forth between my code and this web page. I'm just going to orient you to some of the properties we're going to use in our code just to show you that they exist here first. And then I'm going to to go through exactly how to code those in place here. So note that we have in our restaurant here, we inherit some properties here from our food establishment. The things like we have a menu, that's a wonderful thing, we're going to need to do that. We might have a star rating, for example, that's something that might be of interest to us, as we scroll back here from local business, things like our opening hours will wind up being really important, or the currencies that we accept or payments or price range, then you have to go back to the organization to find things like our address, all right. And you have to go back even further. Here's the properties replace, there's another address here, the physical address of the item. And then you have to go back even further. All the way back to the thing to find things like a description,
>
> **[1:35](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=95)** or an image, or even the name. Name ones, that being something from the thing. Finally, at the bottom of the restaurant schema page, you'll find some really helpful information down here at the bottom. This is going to give you examples of restaurant listings that are here and it'll show you then how does that information look marked up with microdata with RDFa and with [JSON](../../Skills/Web%20Development/JSON.md)-LD. So, this is useful to take a look at down here at the bottom as you start to puzzle through your own work. So now what I'm going to do here is go back to my code, and let's go ahead and start putting in some of the properties that we're going to incorporate. The way you go about doing this is pretty straightforward. So for example, here in my h1, this is clearly the name of the restaurant. It's Nadia's Garden Restaurant. so here we can add the name property from our schema. And the way we'll do that is simply say, itemprop equals and then quote, "name", just like that. And I've put it right here inside of the h1 tag, and the value of that name property is the contents of that h1 tag. On the [schema.org](https://schema.org) website, you will see instances where they've added a div tags or span tags to mark up some of this information, but you can absolutely incorporate this with [HTML](../../Skills/Web%20Development/HTML.md) as well. If you read here in the next paragraph that sounds like a description of the restaurant. So let's go ahead and tag
>
> **[3:07](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=187)** that as such item prop equals, quote, "description". And remember, again, I'm not making these things up, these are all coming from the schema for the restaurant. Some of these things we're going to have to deal with in a little bit later, this invitation down here to join us for dinner, for example. And with that, we open for dinner promptly. That's interesting information. But I'm not going to deal with that just yet. Do note that I have semantically marked up this HTML as best I can with just HTML tags. So I'm using the time tag here to indicate that 5:30pm is in fact 1730 in 24 hour format. When I get down here to the menu, there is an item property for this as well. And we can say that the, itemprop equals quote, "hasMenu". That's the property that we're looking for here. And if you take a look at that specification, ultimately, this information may wind up on [Google](../../Glossary/Service/Google.md) in a search engine listing result and so forth. So even though it's proper to code this with a relative URL, normally when putting together a web page. What we want to do in this type of situation where we're going to potentially use this link to point to our menu online, we actually want to code this with an absolute URL. So I'm going to put in http www.[nadias-garden.com/menu.html](https://nadias-garden.com/menu.html). And that's the fake absolute URL to that particular website.
>
> **[4:47](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=287)** You may think that just including the address tag here is enough to flag this information as an address. But we have lots of properties for each of these items individually because of course we have a street address here. We have an email address here and we have a phone number. And all of these things are individual items. So let's go through those one at a time. The actual address in terms of the physical address is marked up with its own item property here. So I'm going to use a span tag to indicate that and this would be itemprop equals address.
>
> **[5:27](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=327)** And we'll close that span just after the zip-code here. Then of course, we have an email address that's here. We'll go ahead and drop in the itemprop equals capital email. Again, you'll want to pay attention to that capitalization and so forth in the schema for this. And then there's some odd things that may happen along the way as well. So here we have a phone number and as you see here this is coated with TEL. TEL is for mobile devices it makes this link clickable on a mobile device that you would be able to take that number and put it straight into the phone. In order to flag this as a phone number, we have to both indicate that is a phone number via the itemprop attribute. And then we're also going to have to give it content. So, I'll show you how to do that. We're going to give this an itemprop of telephone. And then we're going to give it content of one, two, three, four, five, six, seven, eight ,nine. In other words, in international format, generally speaking, no dashes, no spaces, you have to start with a country code which is indicated by that plus sign and the United States our country code is one so that is what happens in that particular situation. So in general, if there needs to be a standardized format for a value, like a date,
>
> **[7:00](https://www.linkedin.com/learning/html-structured-semantic-data/adding-itemprop-to-expand-on-meaning?u=76281980&t=420)** or time or a phone number, you're going to find that this content attribute winds up being required for most other kinds of properties, like the name and the description and so forth the content of the HTML, where that item property is indicated is generally sufficient to convey the information via the schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Google](../../Glossary/Service/Google.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=0)** - [Instructor] I'm back here on the [schema.org](https://schema.org) website for our restaurant, and if you scroll down just a little bit into this, under organization you'll see that address is one of the items that might be associated with our particular restaurant, you'll notice right immediately after that, it gives us two options, either it's a postal address or it's text, and as you know, the address that we had for our restaurant is pretty complex, it had a physical address, which is made up of a street address It has a city, a state and a zip code all associated with it, and so you might be wondering if you can call out those pieces of data individually? And that is absolutely true, if you click on postal address right here from this schema, this will take you to a special schema for a postal address, and here you'll see that we have the ability to code for example, a post [office](../../Skills/Web%20Development/Microsoft%20Office.md) box number or street address, or it can give us a country, It can give us a region, all that type of information may be very helpful to us in marking up our address a little bit more fully. So in other words, what we're going to do now is, even though I already have my code set up, to indicate that it's an address, we're now going to put a schema inside of a schema, so if you go ahead and open up your exercise files, and then scroll on down here, just a little bit to the address portion of your [HTML](../../Skills/Web%20Development/HTML.md), which is down around line 17,
>
> **[1:33](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=93)** at the moment, we have a span tag going around, the address, 6410 Via Real Carpinteria California, and, that is indicating that this is our address, well now what we're going to do is we're going to indicate that the kind of address that we have here is a postal address, so we're just going to add to this more schemas, so right directly inside of the same span tag, it still goes around the address, and that's exactly what we need it to do, we'll go ahead and add the following, once again, another item scope, and then an item type, equals, and in this case, we're going to take the one from our postal address, so we'll go ahead and copy our [schema.org](https://schema.org) postal address URL, and then we'll go ahead and paste that right here into our code. Now, what we'll need to do is use a bunch of other span tags, to indicate the parts of our address, so here we'll put in a span tag, with an item prop, of, street address,
>
> **[2:50](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=170)** and that is the 6410 Via Real, close that span tag. Then, the next next one is going to be our address locality, If you read the description for this cause it sounds a little bit weird, the address locality pretty much corresponds to a city or town or something like that. So address locality, and then that will be Carpinteria, and we can end our span tag, and then of course, California, that's a state, so that requires its own tag, again, if you read the documentation, it's described as an address region, which would probably correspond roughly to a state in the United States. So there's California, and then finally, we have the zip code, which many countries called the postal code and then happens to be our item property here, so we'll have a separate span tag for that. So that's our postal code, then we need to end the span here, for the postal code, and the other span here for our address at the top, and that should be everything that we need
>
> **[4:25](https://www.linkedin.com/learning/html-structured-semantic-data/embedding-schemas-in-schemas?u=76281980&t=265)** in order to make this work correctly, If you were to view this page in a web browser, you would find that Carpinteria, California 93013, will still display all on the same line, remember that span is an inline tag, meaning that its width is only as wide as its content, and that it doesn't wrap on to a separate line they way a block element does, so what will happen is, you'll have Carpinteria, California 93013 all right next to each other very evenly on the page, that's why we're using span tags instead of div tags in this particular instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=0)** - [Instructor] Let's continue on with the same example, that we've been working with, the Nadia's Garden Restaurant listing. And we're going to look at line 14 in this particular situation. So this says that we opened for dinner promptly at 5:30 PM, Tuesday through Sunday. We know what that means is humans, the restaurant is going to open at 5:30 PM every night but Monday a closing hour isn't specified because some restaurants close when things seem slow, rather than closing according to our regular schedule. You may be wondering why the time is flagged here but not the days of the week, the [HTML](../../Skills/Web%20Development/HTML.md) time tag is designed for very specific dates and times on the calendar, not general ranges like those written here. We aren't stating that the restaurant is open December 1st to January 23rd, for example, therefore this time tag isn't used for marking up the days of the week in this particular scenario. But, what about microdata? How do we Mark up a situation like this? Well, if you go and take a look at the restaurant schema, you'll see that there's an opening hours property, this property may be used for date ranges and time ranges, both, unlike the time tag which is very specific. The opening hours property requires dates and times to be listed in a specific format to be machine readable, however, we humans like to write our dates and times in all kinds of crazy formats. Therefore with this property, we don't generally leave the contents of the tag to be the value of the opening hours property,
>
> **[1:34](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=94)** So here we need to state the value in a very specific format, generally within the tag itself. Sometimes that works really, really great, so for example, I already have the time tag in use here, showing that the restaurant opens at 5:30 PM. What if I just go on ahead and add to this right here, the item prop equals opening hours? So that's fabulous, so in this particular case, the value of the datetime attribute is parsed as the value for the opening hours and the value of the datetime attribute for the time tag, it's doing double duty here. But when we talk about the days of the week, Tuesday through Sunday, the time tag has very specific times associated with it, it can do dates or hours, but it can't do a general range like Tuesday through Sunday, which is why those days of the week are not included in the time tag. So let's take a look at our schema and see if we have some other options are available to us here. If you go back to your restaurant schema and you scroll down just a little bit of the way here, you'll find that the opening hour schema, which I've already referenced, and it's going to spell it exactly how these various dates and times need to work. For example, that the times need to be in 24 hour format, and that we have certain two letter combinations for calling out the days of the week. If you click on this, you're going to go to a page where it's going to give you even more information
>
> **[3:06](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=186)** and of course, some examples down here on the bottom. Now, one of the things I'd like to point out to you is that, it shows here in the third bullet that we have an example of time equals item prop of opening hours, and then using that datetime attribute, it's actually called out Tuesday, Thursday and then, the time's here for Tuesdays and Thursdays four to 8:00 PM. This will actually fail validation, if you do things this way. And that's because this is not a proper use of the datetime attribute. So the time tag really can't be used in this kind of context, one solution would be to fall back on your span tag or your div tag, and you'll see that in use here in these examples, if you take a look under the microdata, here's the span tag and use for your opening hours, that's one way of doing this, but there's a second solution as well, and that is this, under the microdata here, for example, number two, you'll find that it's actually making use of meta tags. Well, meta tags typically appear in the head of the document, this is a weird situation where the meta tags will actually occur in the body, so in this particular situation, just like all your other meta tags that you already know about, these are not going to display on the website itself, however, it will convey this information behind the scenes. So let's try using one of these meta tags for our information here in our document. So we come back to our code here,
>
> **[4:41](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=281)** so this meta tag can go anywhere inside of the div here, the div that we have online 10, where we mentioned the item scope, item type, anywhere inside of this is fine for this particular meta tag, just to more clearly associate that meta tag with the content, I'm just going to stick it right here, just after where that mentioned happens, and I'm going to say meta, item prop equals quote, opening hours, and then the content will be, Tu through Su, those are some of the abbreviations you can look again in the [schema.org](https://schema.org) website to find out what all the two letter abbreviations are for the days of the week. And then I'm going to say something like 1730 to, let's say 2200, and that would be 10 o'clock at night. The reason why I picked that is because, perhaps, Nadia's Garden Restaurant has a policy of being open to at least 10 o'clock, or it could be 9:30, whatever it happens to be, you'll have to check with the restaurant. But if you're going to use the opening hours schema, in this way, you need to give both, an opening and a closing time, so that's why I've put that in place there. So this meta tag is great, when you have something that's behind the scenes that you don't necessarily want to display on the page, or when the situation is complicated enough that this tag makes sense. I think I'm going to remove the item prop from my time tag here, just go ahead and get rid of that, and that will avoid any further confusion.
>
> **[6:15](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-meta-tag-for-information-that-cannot-be-marked-up?u=76281980&t=375)** Now that time tag is strictly devoted to the semantics while the meta tag is strictly devoted to the microdata, this separation is going to make this page a little bit easier to understand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=0)** - Some of you may know that [Google](../../Glossary/Service/Google.md) offers a Markup Helper, which will write some of this Microdata Markup for you. However, there's some drawbacks to this approach. Let's take a quick peek at this Markup Helper and see how it works. In your exercise files, folders, 0105, in the begin folder, go to the file inside called Markup.[HTML](../../Skills/Web%20Development/HTML.md). This is our original HTML Markup from the start of the chapter. Let's go ahead and highlight it. And we'll copy it. And then let's go ahead and take a look at our Markup Helper. So this is the Google Structured Data Markup Helper. Notice here that there's two options, one is for a website, the other is here for email. I'm going to talk about the website. And here we can go ahead and choose the type of information we're talking about. In this case, it's a restaurant so going ahead and scroll down to restaurants. The first thing you'll notice about the Structured Data Markup Helper is that now not every kind of information is listed here. And there's only a handful of things that are listed here. And of course, the point of the Structured Data Markup Helper is to help you structure your data specifically for Google search results, not necessarily for other types of technologies that might be interested in Structured Data. But since Google is one of the main motivating factors for Structured Data, this may still be helpful to you. So you could post a URL of the webpage that you're working with, but we don't have that.
>
> **[1:33](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=93)** So we'll just go to the HTML tab here. We'll go ahead and paste in our HTML as it currently exists. And then we'll click the button at the bottom that says Start Tagging. Once our web page is loaded, it'll display the way it is. Remember, there's no CSS associated with this. So it's a really ugly webpage, but it makes for a very simple example. And now what we can do is we can start tagging our data just as it says here by highlighting the text or an image.
>
> **[2:07](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=127)** So just click and drag in order to select something like the name. And of course, this is the name. So we'll just go ahead and choose Name from the list here. We have other things that we can just click on here. For example, if I click and drag on the phone number here, that's our phone. This one here is our email address, street address.
>
> **[2:43](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=163)** Notice that it's giving us the same breakdown that we already went ahead and classified ourselves by Pand, so state, our postal code, zip code.
>
> **[2:57](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=177)** This is our menu URL. And we go. Take this and say that's our day of the week. Opening hours, day of the week. And we could select this and say opening hours, opening time, date time auto-detect, notice that we also have an option of specifying something more complicated. In this case, we're going to go ahead and specify the opening time. Now notice over here on the side as I went ahead and clicked and dragged and tagged things over here, that so far this has been generating exactly what I've specified as values for these things. So we can go through and check this. So there's a name, we have an image, we have a telephone number and email, street address, et cetera, menu URL. Notice that the menu URL here, because in an earlier video, I fixed this to point to an absolute URL, here, I have still just the relative URL that you might normally Using building a website, notice that Google has filled this in as an absolute URL. And of course, this link will never work. [Googleusercontent.com/menu.html](https://Googleusercontent.com/menu.html), just take note of that. And notice here that our opening time has generated an error. It says here, this tag does not appear to be an opening time. Remember in our previous video that we handled the concept of our days of the week in our opening time via a meta tag, and it's possible to do the same kind of thing here.
>
> **[4:30](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=270)** So we can unlink this, what we have to do is click on the X, go ahead and click on the X for both of those things. And if you scroll on down here, there's an Add Missing Tags item way down at the bottom here. And so we can go ahead and add this and we can choose an opening hours, day of the week. And then we can enter our value of Tu-Su, that's Tuesday through Sunday. And then we can add another once again opening hours. And it will be our opening time specifically. And it will be a date time type of thing. And here we can say it's 17.30. Remember that the times have to be in 24 hour format, it can't be 5:30 p.m. Go ahead and say Save. And those will be added here. And we still have an error here. And it may be looking for a day, a month, a year and a closing time. These are when exactly did the restaurant open. And so you can continue to tweak this. And again, a lot of these so called errors that are happening here are things that have to do with Google and what it expects for listing this restaurant in places like Google Maps, for example, or listing it in search results. So an error isn't necessarily an error in how you have formed the schema, it's an error from Google's perspective
>
> **[6:03](https://www.linkedin.com/learning/html-structured-semantic-data/using-the-structured-data-markup-helper-for-microdata?u=76281980&t=363)** in how you would be listing this information in one of their services. So now we could go ahead and say Create HTML. And this is going to generate our Markup. In this case, it's done it as [JSON](../../Skills/Web%20Development/JSON.md)-LD, which I'll talk about later in the course. You can switch this to Microdata up here on the top, and it will go ahead and give you this HTML now output in the Microdata format. So down here, notice that our time is still generating an error, even though we know that we put it in a valid format initially. Google prefers a date attached to it. So we could give it one maybe the date that these hours took effect. So it gives you right here, "Please insert a valid date right here". And we could go ahead and edit this in the HTML once we go ahead and get that out of here. Notice also that our Markup is pretty different from what we've generated before, with all the spam tags that you see here. That isn't because Google knows more than we do, which might be your first thought, oh, Google actually knows what it's doing and put all these spam tags in here. In fact, there are many errors in this Markup that I'm going to address in the next video. For now, go on ahead and click this Download button up here on the top and download this document for our next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (11), [HTML](../../Skills/Web%20Development/HTML.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=0)** - [Instructor] Now that we have our markup completed, there's two tests we should run. The first is always validate your [HTML](../../Skills/Web%20Development/HTML.md) markup to make sure it's correctly formed. Especially after adding all of these extra tags to the document, it's really easy to mis-nest some tags or make a syntax error. So we need to run it through first that validator, and then we're going to try running this through [Google](../../Glossary/Service/Google.md)'s Structured Data Testing Tool to see how we did with our microdata markup. In your exercise files folder for 01-06, I've given you two files in that begin folder. One is index.html. This is the document we have been coding by hand with our microdata, and the other one is markup.html. This is the one we just got from Google's Structured Data Testing Tool, that HTML that it wrote for us. So let's start with index.html. Going ahead, and I'm going to highlight my whole HTML document and copy it, and then I'm going to go to my validator, which is at validator.[w3.org](https://w3.org), and we can validate by direct input, which is the best way to do this since we don't actually have this as a website at the moment online somewhere. So we'll just go ahead and paste in our HTML, and then we'll run a check on it. And mine indicates that it has validated correctly and there's no errors or warnings. That's what you want to see. If your code has some errors in it, of course you should go back and fix those before moving on. Once you have that done
>
> **[1:32](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=92)** and you know that your markup is good and well-formed, then you can go to Google's Structured Data Testing Tool. And at this particular point, we are going to go ahead and test our structured data. We're not going to [Fetch](../../Skills/Web%20Development/Fetch.md) it from a URL, because once again, we still have been put this online, but we can put in our code snippets. So just paste that same HTML in place one more time, and say run test. So Google is rendering the results over here on the side. This is in [JSON](../../Skills/Web%20Development/JSON.md) LD format, which I'm going to talk about extensively in the next chapter. The important thing here is that it says that there's one error and two warnings down here on the bottom, so let's look closely at that. While everything else looks like it rendered correctly, if you read through all of the values and so forth, it's giving us an error about an image and warnings about price range and serves cuisine fields, which we did not include. Where does that come from? If you look at that restaurant schema again on [schema.org](https://schema.org), you won't find any fields that are marked as absolutely required or absolutely not required, so why does Google have this information here? Well, this is what Google is expecting for this restaurant schema. The fact that the image, price range, and serves cuisines fields are not included is an issue with Google, not with the code that you wrote or with the schema itself. Now you need to ask yourself about your goal. Is it to get an enhanced listing in Google or one of Google's [products](../../Skills/Software%20Development/Microsoft%20Products.md), like Google Maps, for example,
>
> **[3:07](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=187)** or is it to satisfy some other search engine? So we'll talk more about enhanced listings later in the course, but if it's to satisfy Google in some way, then we definitely need to add these items to our page. If you don't want the content to show, as with the price range or the serves cuisines, we can always add these as metatags. And remember, one is very much an error. Google sees that as a big problem. Price range, it serves cuisines, it sees as warnings, as lesser problems, but if you think about restaurant listings you might have seen on Google Maps or elsewhere in the Google universe, you'll probably recall that there's usually a picture of the restaurant or a picture of food, and it usually tells you something about price range and the kinds of cuisine that it serves. So if we go back to our HTML here, let me turn on my [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) wrap, then we can go ahead and add this information, and you'd be welcome, of course, to add a few sentences here that would indicate the type of cuisine, and so forth, or you can keep this simple and just add this as metatags. Make sure, of course, that those metatags appear somewhere inside of the div that starts here on line 10 and ends on line 26. So I'm just going to put it here just after the address. So this is going to be meta itemprop="priceRange" and the content will equal some number of dollar sign, whether it's an expensive or inexpensive restaurant. Then we can put in, again, meta itemprop="servesCuisine"
>
> **[4:46](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=286)** and of course, the content is American.
>
> **[4:55](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=295)** And then finally, the meta itemprop="image" and this image can be, as I said, a picture of food. It can be a picture of the restaurant. It could be a picture of the logo. It just sort of depends on what you want people to see as they are looking in the Google universe. Now, chances are if this is in Google Maps, you might really want a lovely picture of the restaurant or a picture of the food, but I'm just going to reference a logo and remember that that URL should once again be an absolute URL, because Google might be pulling this off the internet from somewhere rather than relatively within your page structure. So we're going to say content="www.[nadias-garden.com/logo.png](https://nadias-garden.com/logo.png)"
>
> **[5:45](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=345)** or whatever it happens to be. So once you've gone ahead and made these changes, you can go ahead, highlight everything again, copy it, and go back to your Structured Data Testing Tool, erase what you had, put in something new, click the validate button here again, and now it should go through with no errors and no warnings. So that's the process for how you would work through this with the code that you already wrote. What about what comes out of Google's markup tool? What happens with that? So let's take a quick peek at that. Once again, go ahead and open up markup.html. This is the markup that Google gave us. I haven't made any changes to it at all. We're just going to go ahead and highlight all of it, copy it, and then we'll switch back to, first of all, our HTML validator. We'll drop in the code that Google wrote and then say check. And the very first thing that you'll notice is that Google writes terrible HTML, and so what's going on there? Well, as it says here at the beginning, it's very upset because H1 is not allowed as a child of span. Remember, span is an inline element. H1 is a block-level element. You cannot have block-level elements nested inside of inline elements. So Google wrote bad code right from the beginning. So you're going to have to change this very first tag here that happens just after body. It says here,
>
> **[7:16](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=436)** it starts with a span of item scope, item type. We're going to need to change that to a div, and then of course, the very last /span in the document, change that to a div as well, /div, and then say check again,
>
> **[8:12](https://www.linkedin.com/learning/html-structured-semantic-data/testing-your-microdata-markup-with-the-structured-data-testing-tool?u=76281980&t=492)** price range, and serves cuisines. the requirements from the testing tool, which I find fascinating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (22), [HTML](../../Skills/Web%20Development/HTML.md) (12), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
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
> **[0:05](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-microdata?u=76281980&t=5)** - [Instructor] With all that fabulous information about microdata, it's time for a challenge. So in this particular challenge, I've given you an [HTML](../../Skills/Web%20Development/HTML.md) document describing a bottle of Two Trees Olive Oil, The Delicate Flavor, and what I'd like for you to do is to mark up this document with the appropriate microdata. Some things you want to think about as you work through this challenge. First of all, you're going to want to identify the main schema from [schema.org](https://schema.org). How would you describe a bottle of olive oil? You're going to need to go to [schema.org](https://schema.org) and figure out what would be the right schema for that. You also want to think about any embedded schema that you might need to address. So once you've found the schema you want to use, you might want to take a look at that schema and see if there's any items where there's more that you want to think about. So for example, in the examples that I just went through with you, you had an opening hours schema that was embedded inside of the restaurant schema that we went through. Once you've completed the markup according to what's specified on [schema.org](https://schema.org), I recommend that you check that markup using the Structured Data Testing Tool. And, of course, you can always validate with the W3C validator as well to make sure that your HTML is valid. And then, of course, to make sure that your structured data is correct. In the next video, I will walk you through my answer to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=0)** - [Instructor] Now how'd you do with that challenge? Well, hopefully you started with thinking about that bottle of olive oil and you identified it as a product and this is the schema here for a product with all of its various characteristics that are described here. As you read through this, one of the things that you might have encountered as part of a product is a thing called an aggregate offer, which is actually nested under offer, and an aggregate offer is a way of dealing with pricing for your product, and so as you see here there's a high price and a low price and then maybe you only have a certain number of things that are available and so that is incorporated here as well. It also incorporates things like payment methods and again, things like aggregate ratings and categories and so forth, so these were the two schemas that I picked out to go with this bottle of olive oil and once I had that in mind I went ahead and started to incorporate information into my document as follows, so first of all, this whole webpage described a product, so I wrapped a div around the whole thing, of course with the item scope plus the item type of the [schema.org/product](https://schema.org/product). Then I'm going to describe Two Trees Olive Oil as my brand and organic extra virgin olive oils as a category.
>
> **[1:35](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=95)** We have sort of an introductory sentence here that isn't necessarily categorized and then after that we have the actual name of this product which is delicate. It's part of the organic extra virgin olive oils. I've included here an image. Remember to put in the full URL if you're going to associate the item prop with it which I did in this particular situation. Then I have a brief description of that and then down here inside of the details tag here, I've included an SKU. Those are the specific numbers that go with these kinds of [products](../../Skills/Software%20Development/Microsoft%20Products.md), and then here's my offers, which comes from the product and then of course the aggregate offer offers more detail for this so that I've included that structure here as well, which includes a price currency of U.S. dollars and then the low price of $24.50. I don't have a high price here because this is not on sale. This is its regular price of $24.50 and so that's why I went ahead and just went with low price in this particular situation. If you run this through the markup checker you'll find that all goes well here and this is properly structured and so forth, so that is the answer that I had for this particular problem. It's completely possible that your answer was a little bit different. As long as you can justify what it is that you're trying to communicate, I think you're in a pretty good place and especially if you can get it past the markup checker. That's always one of the key things,
>
> **[3:08](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-microdata?u=76281980&t=188)** making sure it validates and make sure the markup checker is able to understand what it is you're trying to convey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=0)** - [Instructor] [Google](../../Glossary/Service/Google.md)'s preferred methodology for structured data is through [JSON](../../Skills/Web%20Development/JSON.md)-LD. Not only is this information useful for webpages, it's becoming important for home devices like Alexa and Google Home. Even if you're not a [JavaScript](../../Skills/Software%20Development/JavaScript.md) person, writing the JSON-LD document is a relatively straightforward thing to do. In this video, I'll get you started writing it by hand. But there's also tools that will write the code for you. And I'll cover those in later videos. First of all, let's get our JSON-LD into the web page. This form of JavaScript may be embedded in the head of your document, or just before the slash body tag. Either is fine, but it should not be linked to a file, as you might do for other JavaScript in your document, why? Because the JSON-LD is specific to this page only. In other words, if you have 100 pages on your website, and you want every page to have structured data, then you'd have to embed a JSON-LD script on every one of those hundred pages individually, It's not possible to have a single central JSON-LD document and then link to it from other pages as you might want to do with other JavaScript, the contents different on every page. So to get started, open up the Nadia dot [HTML](../../Skills/Web%20Development/HTML.md) file from the begin folder, in folder 02-01 in your Exercise Files folder. This is the same starting document we worked with in the previous chapter on microdata. Let's also take a quick peek at, our restaurant schema @[schema.org](https://schema.org).
>
> **[1:36](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=96)** All of the same data we wanted to include with microdata will want to include with JSON-LD. The difference is merely in how we write the markup. We'll include exactly the same information that we did before. Fastest way to get started is just to scroll to the very bottom of this page, and let's look at example number two. click on the JSON-LD tab and his will give you some sample opening code. So we're going to go ahead and copy this markup here as a starting point, just go ahead and copy that. And then we're going to paste this right here into the head of the document. If you prefer to paste it just above the body tag, that's fine also. I like the head since this is data that's describing the document just like the meta tags do in this particular situation. So obviously, this is not the information for Nadia, let's go ahead and make some changes to this and we can add some additional information as well. Note that this starts with the @context property here it's telling you, it's going to go to [schema.org](https://schema.org) and look for the restaurant type in order to derive the information that's inside of this piece of code. It'll give us a name. We'll have to type that out. Nadia's Garden Restaurant, we may not want to include some of these things. If you wanted to include a description, you could certainly copy and paste that on in
>
> **[3:09](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=189)** like just to demonstrate here, you can also get rid of things, you can add things as well. The order here, as always, is not really all that important. I'm going to add an email, just make sure that you follow the same sort of syntax that you see on other lines here. So email in quotes, followed by a colon. And then inside of that "nadiasgardenrestaurant@[gmail.com](https://gmail.com)",
>
> **[3:38](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=218)** And then make sure you put a comma after each one of these except for the very last one. For opening hours, we're going to have Tu-Su Tuesday to Sunday, and then we can have a time and this will be something like 17:30 to whatever it was I said before 2200 we can have a phone number 1234567890. And of course, we have a menu. This menu is got a different URL. It's [nadias-garden.com/menu.html](https://nadias-garden.com/menu.html).
>
> **[4:25](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-by-hand?u=76281980&t=265)** And then there's some things that we know were missing because we saw when we ran our information through the structured data markup tool and the testing tool in the microdata chapter, we know that Google looks for things like the serves cuisine and that type of information as well. So you can add that if you wish, just remember to put a comma. And so we could say serves cuisine American. No comma after the very last one In the list of these and of course, this isn't a complete list of all the properties, but this is enough to get you started with how you would go about coding your own JSON-LD file. You can see the form that the syntax is taking, and you can see how to choose Properties and values from the [schema.org](https://schema.org) website. So it's exactly the same information that we had coded in our microdata documents before. This time, though, we're just writing it in a different type of programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (9), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (4), [Google](../../Glossary/Service/Google.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=0)** - [Instructor] In the previous video, I showed you how to write just a tiny little bit of [JSON](../../Skills/Web%20Development/JSON.md)-LD. There's a lot more that we need to add to this particular bunch of script and the fastest way to do this is most likely using [Google](../../Glossary/Service/Google.md)'s Structured Data Markup Helper, and you could continue to write this code by hand, but I think most of you are probably going to take that route as you put together this information in your document, so let's go on ahead and open up your exercise file, this nadia.[HTML](../../Skills/Web%20Development/HTML.md) in the 02-03 folder. We're just going to go ahead and highlight everything, and copy it, and we're going to go to Google's Structured Data Markup Helper. Just as you saw before with microdata, this works the same kind of way, we're going to say this is a Restaurant under Website here, there is an Email tab as well, then we're going to go to the HTML tab and paste in the code for our web page. If we actually had this online, you could do a URL instead. And then scroll down just a little further, click Start Tagging, and interestingly, Google does not read that JSON-LD and start to fill in data over here as it did with our microdata. In this particular situation, we're just going to have to go ahead and tag things on our own. So once again, we'll go on ahead and just highlight and tag, so here's a name, here's a description, although description isn't one of our options, we can tag things like our phone number over here, so our telephone, we can tag an email address,
>
> **[1:38](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=98)** we can tag our street address, and then this would of course be our locality, and our state, and our zip code or postal code, remember this is going to wind up being our menu URL, and remember that Google will see that incorrectly, we haven't fixed that to be an absolute path to that particular page, so Google will substitute its own [googleusercontent.com](https://googleusercontent.com) in front of that. Now we have the benefit of knowing that there were some other tags in here that Google throws an error about once we start to validate this, so we can go on ahead and add some of the additional missing tags that may not show up necessarily right here inside of our text. So scroll down to the bottom over here on the right, click on add missing tags, and we're going to add a bunch of things. So first of all, we're going to add an image, and that'll go [nadias-garden.com/logo.png](https://nadias-garden.com/logo.png).
>
> **[2:49](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=169)** We're going to add the Cuisine of type American. We can add our opening hours for the days of the week, and that will be Tu to Su, Tuesday to Sunday. Add our opening hours, opening time, and that would be 17:30, and our closing time would be 22:00. So once you've gone ahead and done all of that, you can go ahead and say Save. Notice that this Google tool is only allowing us to add properties that Google thinks are important. Notably, these are the properties that are used in Google's enhanced listings, which we'll talk more about in chapter three. Even though price range seems to be important, it's not an option for a restaurant with this particular tool, even though they have thrown it as an error in the past, I find that really interesting. Anyway, once the these are all entered, we can then go to the markup, so what we're going to do here is just click on the CREATE HTML up here on the top, and this will go ahead and give you the JSON-LD markup right exactly like this, and we can go on ahead and copy that, and I'm going to go back to my HTML document here, and we can go ahead and just get rid of what we had before, paste in this new information instead, and then you probably are going to need
>
> **[4:22](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=262)** to edit this a little bit, so down here on the bottom, these are the opening and closing times, remember Google seemed to want some sort of start date for this, and since it's 2020 right now, we could probably just leave it there as July 27 2015, although we probably want to make sure we have the right starting time and closing time, 22:00. Feel free to change those however you want. Now when I actually run this information here through Google's structured data testing tool, which I'll do in the next video, we already know that it's going to throw a few errors for us, notably for things like a price range, which I couldn't add with the tool I was just using, so it's still going to get mad that it's not there. So we can go ahead and just add some of these additional things manually. Once again, you can put this anywhere, but now that I have this in a more complicated format, you want to watch for where the various curly brackets are, so for example here with address, note that that address information starts here on line 17 and ends on 23, inside of that is additional information about that address. Likewise here for the opening hours, we have some information that starts here on line 26 and doesn't end until line 34. So you can add this additional information about price range anywhere you want, just be careful that you watch those curly brackets. So I'm going to put it right here, just after the email where it's simple, and this will be priceRange,
>
> **[5:59](https://www.linkedin.com/learning/html-structured-semantic-data/working-with-the-structured-data-markup-helper?u=76281980&t=359)** and that value will be two dollar signs, and don't forget the comma after it. Okay, so now that all that code is in place, go ahead and save that, and then we can test this with the Structured Data Testing Tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (11), [HTML](../../Skills/Web%20Development/HTML.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (3)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/testing-our-json-ld-code-with-the-structured-data-testing-tool?u=76281980&t=0)** - [Instructor] Now that we've gone ahead and used the markup tool to get our [JSON](../../Skills/Web%20Development/JSON.md) LD written the next thing always to do is to test it and make sure that it's working correctly for [Google](../../Glossary/Service/Google.md). And so if you go on ahead and open up your exercise file for this chapter go on ahead and highlight everything, copy, and we're going to go back again to the Google Structured Data Testing Tool. And when you arrive here it's going to ask you for a URL. We don't have one 'cause we haven't put it on the web, but we can put in a code snippet instead. Go on ahead and paste your [HTML](../../Skills/Web%20Development/HTML.md) here and then say run test. And what's going to happen is that it will go on ahead and basically give you back the same JSON LD you already have written. It will make sure that you've written this correctly. So why would you go about doing this even if Google went ahead and wrote most of your code in the JSON LD? Well remember we went ahead and added some additional stuff to this like a price range. Maybe we put in a comma when we shouldn't have or we forgot to include a comma. There's all kinds of little syntax things that can happen. You could lose track of the nesting in your curly brackets. So still running this error checking is going to be helpful even when Google writes this code for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** json (3), url (1), html (1)
> **CLI Commands:** make (2)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Marking up a document with JSON-LD](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=0)** - [Instructor] So, now that we've gone ahead and talked about [JSON](../../Skills/Web%20Development/JSON.md)-LD, it's time for you to give this a try on your own. And so it's time for another challenge here, this time dealing with JSON-LD Markup. Once again, I've given you the Two Trees Olive Oil, bottle of olive oil and I'd like you to go on ahead and markup this web page with JSON-LD. Whatever that appropriate code happens to be. As you start to think about this problem, there's as always a series of steps you should go through. First of all, you should be identifying the main schema for this web page and any embedded schemas that might be needed in order to put this together. If you went ahead and did the microdata challenge, you already know the answer to this question. But if you didn't do the microdata challenge, this will be new to you, so think about the right schema for describing a bottle of olive oil and then maybe any embedded schemas that are going to help you along the way. Then you're going to need to write your JSON-LD and there's a bunch of ways I showed ya how to do that. You could write it from scratch, straight out of your head, using the syntax that you learned in this chapter if you're a programmer that might be an easy thing to do or you could go to the bottom of the page on the [schema.org](https://schema.org) website, where there's examples presented for JSON-LD of various types. Find an example that's close to what you want, paste that in your document and edit it accordingly or you could work with
>
> **[1:33](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-marking-up-a-document-with-json-ld?u=76281980&t=93)** [Google](../../Glossary/Service/Google.md)'s Structured Data Markup Helper and use that to identify the various pieces of code that you need to have. Then finally, as always, even if you use Google's Structured Data Markup Helper, make sure you check your markup using the Structured Data Testing Tool to make sure that you've selected everything that's important, everything Google wants to see in the document and just to double check and make sure everything's all in place. I will show you my answer in the next video. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Google](../../Glossary/Service/Google.md) (3)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=0)** - [Instructor] So, how did you do with that challenge? Hopefully that wasn't too difficult, particularly if you'd already created the answer to the microdata challenge, it should have been relatively straight-forward. So, this is my answer. In the head of my document, I've gone ahead and included my [JSON](../../Skills/Web%20Development/JSON.md)-LD and it looks just like this, as follows. So, first of all, of course, we went to [Schema.org](https://Schema.org), and I'm using the product schema in order to describe a bottle of olive oil. I've given it a category of "Organic Extra Virgin Olive Oil," with a name of "Delicate," which is the flavor of this particular olive oil. I've given a path to an image, remember to make sure that that's an absolute link because this type of stuff is used by places like [Google](../../Glossary/Service/Google.md) and they are not within your own website, so, don't use your relative URLs here. Description came straight off this web page, along with the SKU, the product number. It's all there. The embedded schema that I needed was the "Offers" schema, and inside of that we called this an aggregate offer to set our price currency as a U.S. dollar and the low price as 24.50. So, that was the basic information that I included here in the challenge. Obviously there's a gillion other characteristics to describe a product, you may have some other ones that were included in here, or you may have taken a slightly different approach to that.
>
> **[1:35](https://www.linkedin.com/learning/html-structured-semantic-data/solution-marking-up-a-document-with-json-ld?u=76281980&t=95)** There's nothing that says that those other approaches are wrong. So, great job with this challenge and lets move on to the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1), [Google](../../Glossary/Service/Google.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=0)** - [Narrator] In your time using [Google](../../Glossary/Service/Google.md), you've likely found some interesting looking listings in the search results. For example, if I search Google for versatile cake frosting, I get these beautiful results here. Wouldn't it be great to have your recipe listed here as well? That can totally happen. You just need to know the secret source to make it happen. And that's using Google's rich results. And the way you make that happen is right here on this website. This is the Google Developers website and it has some information about various types of results you can have here inside of the search gallery. So go ahead and scroll through this and see the kinds of search results you can have. Everything from articles and books, to simple things like breadcrumbs, reviews, events, fact checks, very, very important. How to, like how to tie a tie as it shows here. Job postings, listings for local business, and so forth. And no surprise, there's one down here for recipes as well. Here in Google's documentation, Google will explain how they want a webpage marked up with a structured data so you can generate an enhanced listing in the search results. As always, Google doesn't promise results just because you mark up your page correctly. They will show the enhanced listing only according to their algorithm
>
> **[1:32](https://www.linkedin.com/learning/html-structured-semantic-data/understanding-rich-search-results-from-google?u=76281980&t=92)** for the right type of search to the right kind of user. And of course, if you click on the 'get started' button here, this is going to put you into a page with more information about say recipe search results, the kind of enhancements that are possible, some examples, and then the types of structured data that are required in order to make this work correctly. Speaking of cake frosting, I've got a recipe right here that we can practice marking on. Let's get started with that. So you can see how this process works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (7)
> **CLI Commands:** make (3)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Writing JSON-LD code for rich search results with a recipe](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=0)** - [Instructor] Let's start experimenting with [Google](../../Glossary/Service/Google.md)'s structured data formula by working with a recipe. This page explains what we need to know about the recipe formula. First it explains how the results might look with Google Search and with Google Images, so that's up here on the top. Here's some search results, here's something on Google images and how that might wind up looking there. It'll give us some options for some other enhancements here. And then down here it starts to give us some examples. And the question will be how you would like your search results displayed, and on which devices. So, the very first option here is a guided recipe that's eligible for display on Google Search. And as a guided recipe on the Assistant, so that is probably what we're going to want to do. You can try it out in the rich results test, I'm going to go through that in another video. But let's start here with Show me the example, and if you go ahead and click that, it's going to give you a bit of code here of stuff that's typical to include in this type of thing. So, this is a recipe for party coffee cake. You'll see here that it has a bunch of images, it has an author, it's got some instructions down here. So, this is a great starting point, we know exactly the kind of information that we want to include. So, what I'm going to do is I'm just going to copy this whole script tag right here, from that <script> tag down to the </script> tag, we'll go ahead and copy that. And then we'll go ahead and open up
>
> **[1:34](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=94)** in your exercise files, in Chapter 3, number two, we're going to open up recipe.[HTML](../../Skills/Web%20Development/HTML.md). And up here in the head of the document, we can go ahead and paste in all of that [JSON](../../Skills/Web%20Development/JSON.md) LD that you just copied. If you take a look at the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of that webpage, down here on the bottom, you'll see that this is the recipe for Versatile Cake Frosting from Topsy Turvy Cake Design, and you can see all of the information that's down here on the bottom. So, somehow we need to repurpose this information into JSON-LD, so let's go on ahead and go through that now. So, once again, always, you can start with [schema.org](https://schema.org), and you can have a look at recipe to see what kind of properties are available. Remember that Google doesn't necessarily represent all of the possible properties, it represents the ones that it happens to be using in its search results. So, in our case, we're going to change the name from Party Coffee Cake to Versatile Cake Frosting. And then you can list a whole series of images. So, as you see here, this is an array, if you're familiar with that term. This is a series of photos that might be present for that particular example, but in our case we have only one. So, if that's the case, you can just get rid of those square brackets and that list of URLs and just substitute in the regular old quotes. And this URL I actually have given to you, and that's in your exercise files folder. And it's kind of long. So, here it is, let's just go on ahead and copy that URL.
>
> **[3:11](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=191)** And we can paste that on in place here. We can list our author. And that would be Audrey Tospy. You can have a date published, I'm just going to leave it as is, we could even make it 2020. And then for the description, well you can just scroll on down here and start copying. This looks like a description right here, this first paragraph on line 116. Go ahead and copy that. And then you can paste it up here in the description. These items here are the prep time, the cook time, and the total time, and it happens to be down in here. If you read a little bit, you'll see here, we need to refrigerate for 20 minutes before we frost our cupcakes, and how long is this going to take to make and so forth. So, you can go on ahead and alter these things. So, let's say that the prep time is ten minutes, probably about 10 minutes to mix it together. Then it has to sit for 20 minutes before you use it. Add those two things together, you get 30 minutes, so that would be the total time. You can list your keywords here, frosting for a cake. And we probably don't need coffee. The recipe yield is described down here in our recipe. As it says here, it'll frost about two dozen cupcakes, or one 8-inch two-layer cake. So, back up here,
>
> **[4:49](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=289)** instead of just saying 10, we can say 24 cupcakes or one 8-inch two-layer round cake. Our recipe category is Dessert. It's American. And then maybe we don't have any nutrition information, so we can go ahead and get rid of that. For ingredients, these are the ones that we have just right on down here. The butter, the powdered sugar, the extract, and the buttermilk. So, we can go ahead and type that in. Okay, then we're onto the recipe instructions. And if you refer to the recipe below, you'll see that this is a HowToStep, and it's pretty straight forward. This is just frosting, it's basically you mix it together, and refrigerate it, and you're more or less done. So, we may not need all of the items that are in here. So, right now we have step names like, we're preheating it, what is the text that goes with that. Maybe there's a specific URL that goes with it, or a specific image. We actually don't need any of those things, we just need the HowToStep, and we need some text. So, I'm going to go ahead and edit this just to reflect that. Don't forget to remove that last comma. And then instead here, we can just copy, "Mix all ingredients together in a medium-size glass bowl until well incorporated."
>
> **[6:22](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=382)** We'll just copy that. And paste that in as our first step. Our second step is going to be essentially the same thing, once again, just the text. And we can go ahead and once again copy that information from down here in the recipe. The remaining HowToSteps that you see here, we don't actually need at all, so we can go ahead and start getting rid of those. So, we'll just go on ahead and delete these. And remember, anytime you're around the last one, remove that closing comma. So, our recipe instructions, there's only two instructions, and the last one does not have a comma after it. Finally, we can have an aggregate rating here, and I'm just going to leave those values in here. So, this tells you that we have 18 people have given it an aggregate rating of five, probably like five stars. And then after that, there's all kinds of additional information here. We can have an expiration of the video information that we have here, but we actually don't have a video, so we'll just go on ahead and get rid of that. And that means that this aggregate rating is the last item here, so make sure you get rid of the comma here as well. Then you want to double check your curly brackets, make sure that those lineup, so we have an opening curly bracket here,
>
> **[7:55](https://www.linkedin.com/learning/html-structured-semantic-data/writing-json-ld-code-for-rich-search-results-with-a-recipe?u=76281980&t=475)** a closing curly bracket down here. VS Code, the editor that I'm using here makes this pretty easy to do. And that will help make sure that you haven't mistakenly removed any of those closing curly brackets along the way. Well, there you go, that's the process of getting your content, in this case a simple recipe, a good way to start getting it into JSON-LD format. And as you know, now that we've done the markup, the next thing to do is to check that markup using some kind of markup checker, and see how this is going to display.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=0)** - [Instructor] Okay. Now that we have our first pass at the recipe markup here in place let's see how we did with our rich results. This is a different type of test that I haven't showed you before. The point of using [JSON](../../Skills/Web%20Development/JSON.md)-LD and marking up this particular recipe was to give us some fabulous looking search results. And, so we've gone ahead and followed that formula here. Now we want to see how that's going to look like as a preview. So, if you go on ahead and open up your Exercise Files folder. Open up folder number three under chapter three. And the recipe as we currently have it. Go on ahead and select all of the [HTML](../../Skills/Web%20Development/HTML.md) and copy it. Then we're going to come to the [Google](../../Glossary/Service/Google.md) rich results test. This is going to indicate whether your page is supporting rich results. And what they mean by supporting... What they really mean is it going to display it correctly. So, once again you have a choice of a URL or you have the choice of Code. Let's go on ahead and go to Code. We can go ahead and put our Code in place. Let's go on ahead and change this to the Googlebot desktop. You do have a choice here between the desktop and the smartphone. And you'd probably be best choosing both of those. But since we've been looking at this on the desktop so far. Let's continue looking at it that way. And then we're going to go ahead and say "Test Code". This is going to go ahead and load the HTML that we've put in place. It's going to retrieve things like images and so forth.
>
> **[1:35](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=95)** And then it will go ahead and show you whether this is eligible for rich search results or not. Because we started with JSON-LD information for a recipe, it's more likely that it's going to be quote, "Eligible for rich results". Notice that Google is not going to detect other types of data that you might want to include here. So, it's not going to notice things like, Microdata or anything else. So this has noticed a couple of things here for us. It's going to show us a preview of the results. We can go ahead and take a preview. You'll see the little bit of the picture. We're just seeing the top of the bowl there. Not the whole entire bowl. And we'll that it's versatile cake frosting. There's that ranking of five out of 18 people who reviewed it. 30 minutes total. And this going to be what it's going to look like. So that's going to show you what it looks like on the phone. This is a second search result. This result looks very much like the first one. Then we also have the result for the Google Assistant. What is this going to look like? Looks like this. Here's the guidance, ingredients and the guidance steps. Again, as a result of the Google Search Assistant. A couple of things you might have noticed there, this doesn't look like our picture does it. And sometimes you'll see things like your site title here. This isn't an indication that you've failed to tag something. If you poke around in the documentation, you'll find where it describes that sometimes
>
> **[3:09](https://www.linkedin.com/learning/html-structured-semantic-data/testing-and-previewing-the-rich-results-code?u=76281980&t=189)** the image isn't correct or it's using a placeholder in this particular situation. It also will use those placeholder titles for expediency. Google will get that information correct from the webpage title when it actually does appear in the search engine. So if we go and head back to the results preview here. This is also going to flag some other things for us. It will tell us that we have two warnings. And it will tell us that we are missing nutrition. And we're missing a video. That's absolutely true. We did not input that information. And in fact, I don't think we even had it. So, if you have that information you could of course include it. But if you don't, Google will give you a warning. But it's no big deal. Okay. And then here it's reflecting all of the other information that we put in for that document. It will also give you a review snippet here. This is the aggregate rating specifically. Remember we had that set to a value of five out of 18 possible ratings. So this is the information that the Google rich results test will give you. Once again, it will give you both information that it's read from your JSON-LD. It will also give you some visual results. They're not always absolutely perfect. But they're pretty good and they'll give you a good sense of how you're search results are going to look once the site is spidered and included in Google.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (8), [JSON](../../Skills/Web%20Development/JSON.md) (3), [HTML](../../Skills/Web%20Development/HTML.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/challenge-rich-search-results-for-courses?u=76281980&t=0)** - [Instructor] One final challenge here for you in this course and that of course has to do with rich search results. So let's see if you can figure out how to get a course listing up in [Google](../../Glossary/Service/Google.md) with the appropriate rich search result formatting. So how might you go about approaching this particular problem? There is a starter [HTML](../../Skills/Web%20Development/HTML.md) file in your exercise files. Make sure you take a look at that. Then what you're going to have to do is look at that course and find the structured data type definition for the course. So make sure you look at the Google documentation and find what it has to offer for a course. Then you're going to want to copy the sample [JSON](../../Skills/Web%20Development/JSON.md)-LD, drop that into your HTML document, edit it appropriately, and make sure that the data that's there is matching the course data that you are working with. And then finally, you're going to want to verify your listing with the rich results test website. So make sure you run it through that website so that you have what you are expecting. So I will go through my answer with you in the next video. Good luck figuring out how to get a course in the rich search result format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=0)** - [Instructor] All right, so how'd you do with the rich search results challenge? So, hopefully you started here, inside of the [Google](../../Glossary/Service/Google.md) documentation, and you found the reference here for a course. And you took a look at this information, it gave you some starter, introductory code here, that you could just copy and paste into your [HTML](../../Skills/Web%20Development/HTML.md) document that I gave you in your exercise files folder, and you could start to make changes to that. Notice that there are some guidelines here. Google in particular, with these courses, is very strict about what they want to see in terms of a course. They don't want you doing a whole lot of promotional phrases, or pricing, and so forth, inside of those course descriptions. And a couple of other things that might trip you up, as it starts to describe your required and recommended properties here, one of the things in the description is that it has a display limit of 60 characters, so you have to make sure you read the documentation super carefully, just to be sure that you are getting everything out of this to get the best, rich search result possible. So once you've gone ahead and done that, this is what my text wound up looking like here. So inside of my [JSON](../../Skills/Web%20Development/JSON.md)-LD, this was [schema.org](https://schema.org), a type of course, the name, all this information came from the stuff down here below, the name is [Crafting Meaningful HTML](Crafting%20Meaningful%20HTML.md),
>
> **[1:35](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=95)** which is another course that you can watch with me here at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. And then the description is just simply, "Learn to structure documents with semantic HTML," which I wrote based on the, obviously, much longer description that I have here, inside of this course, so you'd have to shorten that up a little bit. The provider is an embedded schema here, so a little bit more information about them: of course, this is an organization, the name of that is LinkedIn Learning, and this is a link to the course itself. So this is the way I wound up making my course look, and if we come back to the website and run it through the rich results test, I've just gone ahead and pasted in that code for you, it will tell you that the page is eligible for rich results. It will go on and kind of list off all of those values here, exactly as I mentioned to you before, and if you preview the results, this is the way it might wind up looking here inside of Google. Note that it does say right here, "Your rich card title here. "[Crafting Meaningful HTML](Crafting%20Meaningful%20HTML.md)." That does not necessarily mean that you have done something wrong. Remember, again, with this particular rich results test environment, sometimes it puts in placeholder text instead of the text from your web page. So just because you see your rich card title here, doesn't necessarily mean you've done anything wrong with your markup. And we can only preview this one in a smart phone. Sometimes there's some other devices available,
>
> **[3:10](https://www.linkedin.com/learning/html-structured-semantic-data/solution-rich-search-results-for-courses?u=76281980&t=190)** but in the case of this course, this is all we had available to us to test. So, hopefully that course listing worked out well for you, you get the idea of how those rich search results work, and you'll be able to put that to work for pretty much any kind of search result that's out there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [Google](../../Glossary/Service/Google.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/html-structured-semantic-data/next-steps?u=76281980&t=0)** - [Instructor] Hey everybody it's Jen Cramer. Thank you so much for watching my course about web semantics and structured data. If you're interested in taking some other courses with me that may also be of interest I have a couple of recommendations for you. So if you are watching information about structured data and web semantics, chances are you're interested in meaningful [HTML](../../Skills/Web%20Development/HTML.md) as well. And I have a course that's for you called [Crafting Meaningful HTML](Crafting%20Meaningful%20HTML.md) which will talk about all of the wild and wonderful HTML tags that are out there that can bring extra meaning to your document. I also have a course called HTML tables that's a deep dive about HTML tables including ways to make them accessible and meaningful to search engines and accessibility [products](../../Skills/Software%20Development/Microsoft%20Products.md). And finally if you're just interested in search engines in general, if you're interested in marketing and content and other aspects of your website beyond the code you might be interested in my series called the accidental web designer where I have little short bursts of information that'll give you some high level quick bits of information about those types of topics. Thanks again so much for watching, I appreciate it, and I hope to see you again in another course soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** html (5)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Jen Kramer](../../Instructors/Web%20Development/Jen%20Kramer.md)

## Resources

- Exercise files available

## Skills Covered

- HTML
- Semantic Markup

## Path Context

### In [Advance Your Skills in HTML](../../Paths/Web%20Development/Learning%20Paths/Advance%20Your%20Skills%20in%20HTML.md)
← [Learning Web Audio and Video](Learning%20Web%20Audio%20and%20Video.md) | **10 of 11** | [Developing for Web Performance](Developing%20for%20Web%20Performance.md) →

## Appears In

- [Advance Your Skills in HTML](../../Paths/Web%20Development/Learning%20Paths/Advance%20Your%20Skills%20in%20HTML.md)

## Related Courses

_Courses sharing skills:_

- [Building Great Forms with HTML and CSS](Building%20Great%20Forms%20with%20HTML%20and%20CSS.md) — HTML
- [HTML & CSS- Creating Forms](HTML%20%26%20CSS-%20Creating%20Forms.md) — HTML
- [HTML- Metadata in the Head](HTML-%20Metadata%20in%20the%20Head.md) — HTML
- [HTML- Tables](HTML-%20Tables.md) — HTML
- [HTML- Images and Figures](HTML-%20Images%20and%20Figures.md) — HTML

---

[↑ Back to top](#)