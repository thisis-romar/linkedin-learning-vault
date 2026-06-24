---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: css-selectors-2
url: "https://www.linkedin.com/learning/css-selectors-2"
duration_minutes: 139
duration: 2h 19m
level: Intermediate
updated: 2/2/2024
learners: 8181
skills:
  - Cascading Style Sheets (CSS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFAl58bn8cZRQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660585110453?e=2147483647&amp;v=beta&amp;t=Flj-NtLzxO4jsf1_MdAMNHrmKmgbMKey_NnmXoYi_pk"
linkedin_topic: Web Development
learning_paths:
  - '[Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)'
prev_courses:
  - '[CSS Essential Training (2023)](CSS%20Essential%20Training%20(2023).md)'
next_courses:
  - '[CSS- Inheritance, Specificity, and the Cascade](CSS-%20Inheritance%2C%20Specificity%2C%20and%20the%20Cascade.md)'
path_nav: '[{"path":"Learn CSS","position":3,"total":12,"prev":"CSS Essential Training (2023)","next":"CSS- Inheritance, Specificity, and the Cascade"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/CSS-%20Selectors.md)

![CSS: Selectors](https://media.licdn.com/dms/image/v2/C4E0DAQFAl58bn8cZRQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660585110453?e=2147483647&amp;v=beta&amp;t=Flj-NtLzxO4jsf1_MdAMNHrmKmgbMKey_NnmXoYi_pk)

# CSS: Selectors

> Project Answer questions about CSS selectors at the end of each chapter. Discover how to effectively leverage the power of selectors to select the elements you want to style without adding classes, changing HTML, or getting overly specific with your selectors. In this course, instructor Jen Kramer demonstrates how to pinpoint specific parts (and groups of parts) in an HTML document using the power

> [LinkedIn Learning](https://www.linkedin.com/learning/css-selectors-2) | 2h 19m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The power of selectors](#the-power-of-selectors)
- [**1. Review of Basic CSS**](#1-review-of-basic-css) (4 videos)
  - [CSS terminology](#css-terminology)
  - [Type selectors, classes, and IDs](#type-selectors-classes-and-ids)
  - [Selector lists](#selector-lists)
  - [Compound selectors](#compound-selectors)
- [**2. Combinator Selectors**](#2-combinator-selectors) (5 videos)
  - [The HTML family tree: Parents, children, ancestor, descendant, and siblings](#the-html-family-tree-parents-children-ancestor-descendant-and-siblings)
  - [Descendant selectors](#descendant-selectors)
  - [Parent-child selectors](#parent-child-selectors)
  - [Adjacent and general sibling selectors](#adjacent-and-general-sibling-selectors)
  - [Reading and writing selectors](#reading-and-writing-selectors)
- [**3. Attribute Selectors**](#3-attribute-selectors) (4 videos)
  - [Simple attribute selectors](#simple-attribute-selectors)
  - [Exact and partial attribute value selectors](#exact-and-partial-attribute-value-selectors)
  - [Beginning, ending, and arbitrary substring attribute value selectors](#beginning-ending-and-arbitrary-substring-attribute-value-selectors)
  - [Cool attribute selector tricks](#cool-attribute-selector-tricks)
- [**4. Pseudo-classes for document structures**](#4-pseudo-classes-for-document-structures) (4 videos)
  - [Understanding only selectors, :only-child, :only-of-type](#understanding-only-selectors-only-child-only-of-type)
  - [Understanding first and last selectors, :first-child, :first-of-type, :last-child, :last-of-type](#understanding-first-and-last-selectors-first-child-first-of-type-last-child-last-of-type)
  - [Understanding nth selectors – :nth-child, :nth-of-type, :nth-last-child, :nth-last-of-type](#understanding-nth-selectors-nth-child-nth-of-type-nth-last-child-nth-last-of-type)
  - [:root and :empty](#root-and-empty)
- [**5. Pseudo-classes for links**](#5-pseudo-classes-for-links) (4 videos)
  - [Basic link states: :link, :visited, :hover, :active](#basic-link-states-link-visited-hover-active)
  - [:any-link for combining link states](#any-link-for-combining-link-states)
  - [Pseudo-classes for in-page navigation, :target](#pseudo-classes-for-in-page-navigation-target)
  - [Accessibility pseudo-classes: :focus, :focus-within](#accessibility-pseudo-classes-focus-focus-within)
- [**6. Pseudo-classes for forms**](#6-pseudo-classes-for-forms) (5 videos)
  - [Form controls: :required and :optional; :enabled and :disabled](#form-controls-required-and-optional-enabled-and-disabled)
  - [Form controls: :read-only and :read-write](#form-controls-read-only-and-read-write)
  - [Form control states: :indeterminate, :default, :checked](#form-control-states-indeterminate-default-checked)
  - [Text fields: :autofill, :placeholder-shown](#text-fields-autofill-placeholder-shown)
  - [Error checking: :valid, :invalid, :in-range, :out-of-range](#error-checking-valid-invalid-in-range-out-of-range)
- [**7. Additional pseudo-classes, pseudo-elements, and the universal selector**](#7-additional-pseudo-classes-pseudo-elements-and-the-universal-selector) (5 videos)
  - [Comparing is() and where()](#comparing-is-and-where)
  - [Understanding :not](#understanding-not)
  - [:has()](#has)
  - [Meet the pseudo-elements ::before, ::after, ::first-line, ::first-letter](#meet-the-pseudo-elements-before-after-first-line-first-letter)
  - [*, the universal selector](#the-universal-selector)
- [**8. Choosing Selectors**](#8-choosing-selectors) (3 videos)
  - [CSS selectors and browser support](#css-selectors-and-browser-support)
  - [Why can't I use CSS classes exclusively? Selectors best practices](#why-cant-i-use-css-classes-exclusively-selectors-best-practices)
  - [Impact of CSS selectors on performance](#impact-of-css-selectors-on-performance)
- [**Conclusion**](#conclusion) (1 videos)
  - [Additional CSS practice](#additional-css-practice)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The power of selectors](https://www.linkedin.com/learning/css-selectors-2/the-power-of-selectors-23420115?u=76281980)


### 1. Review of Basic CSS

[↑ Back to Table of Contents](#table-of-contents)

#### [CSS terminology](https://www.linkedin.com/learning/css-selectors-2/css-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/css-terminology?u=76281980&t=0)** - [Instructor] Before we get too far into discussing selectors, you might be wondering what exactly a selector is and you might wonder about the other parts of a CSS declaration. This terminology is very helpful for a course like this, so let's get clear about what the parts of a CSS declaration are called. First, there is the selector itself. This is anything that comes before the curly brackets in your CSS. Here, this is an element. It's an [HTML](../../Skills/Web%20Development/HTML.md) tag that's being called in your CSS. And in this case, it's the article tag. Sometimes it's really simple, like a class or an ID. Here, we have the class of myclass. Sometimes there are several selectors separated by commas or sometimes you have a descendant selector like this one. The selector indicates that this is a test. If your code has a paragraph descended from a class of myclass, then the styling inside the curly brackets will apply. The declaration is a single line within the curly brackets. Font-size 1.2rem is one declaration. Line-spacing 2 is another declaration. There may be many declarations within a CSS style or they may be as few as one. A declaration block is everything inside of the curly brackets. That would include all of the individual declarations. So essentially, a CSS style is made up of a selector plus a declaration block.
>
> **[1:34](https://www.linkedin.com/learning/css-selectors-2/css-terminology?u=76281980&t=94)** A declaration block is made up of many individual declarations. And what exactly makes up each declaration? There are two sides to a declaration. The left side is the property. This includes items like font-size, line-spacing, animation, grid template area, justify content, linear gradient, and so many others. The right side of the declaration is a value. Each property has certain permitted values. For example, font-size is expecting a number with a unit of measure like m, rem, pixel, point, millimeter, centimeter, percent, or inches. Other properties have very specific prescribed values. The float property, for example, could have values of left, right, or none, and nothing else would be correct. Sometimes you'll hear the combination of property and value referred to as a property-value pair. That's the same thing as a declaration in CSS. However, property-value pair is a term that comes to us from programming, where it's used in several programming languages. Since this is a pairing of a property and a value, it applies here as well. Property-value pair and declaration can be used interchangeably. With these terms in mind, let's do a quick review of some CSS selector types you already know and love.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (8), html (1)
> **Definitions:** is a  (5), is an  (1)
> **Analogies:** for example (2)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Type selectors, classes, and IDs](https://www.linkedin.com/learning/css-selectors-2/type-selectors-classes-and-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/type-selectors-classes-and-ids?u=76281980&t=0)** - [Instructor] You're already familiar with a few kinds of selectors as you join this course. You've encountered elements, classes, and IDs before. Let's quickly review each type of selector and its use. The element selector means that our selector is some type of [HTML](../../Skills/Web%20Development/HTML.md) element. Paragraphs, articles, sections, footers, headers, headings, lists, links, and so much more. We simply type in the name of the element and that is the selector for it. Element selectors are the least specific in the CSS cascade. That makes elements a great choice for writing generic code that should govern the style for most of your webpage, using other selectors to override these default values. A class is a style that can be used in many different cases on the same webpage. It's more specific than an element, meaning that it can override an element styling easily. Classes always start with a period in your style sheet and they are called via the attribute of class in your HTML. An ID is a style that can be used once per page only. It is the most specific of all of the simple selectors, potentially overriding styling set by classes and elements. Unfortunately, since an ID is an identifier, it can only be used once per page on your website. If you need to reuse your styling, you'll want to use an element or a class to do so. IDs always start with a hashtag or a pound sign in your style sheet
>
> **[1:33](https://www.linkedin.com/learning/css-selectors-2/type-selectors-classes-and-ids?u=76281980&t=93)** and they are called via the attribute of ID in your HTML. Here's a quick table of information to review. HTML elements are less specific and great for generic styling. Classes are used for specific situations, potentially several times per page, and are more specific than elements. IDs are the most specific selector of all, but they can only be used once per page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4)
> **Env Vars:** html (4), css (1)
> **Definitions:** is a  (2), means that (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Selector lists](https://www.linkedin.com/learning/css-selectors-2/selector-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/selector-lists?u=76281980&t=0)** - [Instructor] Finally, it's likely you're already familiar with group selectors. These are selectors that are separated by commas, but with only one set of styles. In this example we have an H1, an H2, and an H3 listed here as our selector separated by commas. This is read as for all H1s, H2s, or H3s style in the following way. Any one of these [HTML](../../Skills/Web%20Development/HTML.md) elements will be styled in the same way. You can think of this as an or statement in programming. The styles apply for all of these HTML elements. Group selectors aren't limited to elements though. You can mix the selector types as this example shows. Here we're applying one set of styling to a class and to an ID. A common mistake made when working with group selectors is to assume that the styling carries through to other elements in the group. Consider this example. Here we have a selector where all unvisited links descended from a class of warning have a certain style, but what if we want to include visited links descended from a class of warning as well? Many beginners would write the selector like this, which reads for all unvisited links descended from a class of warning and for all visited links apply these styles. That means all the links, whether or not they're descended from a class of warning, would be included in that visited style. That means that all visited links, whether or not they're descended from a class of warning,
>
> **[1:34](https://www.linkedin.com/learning/css-selectors-2/selector-lists?u=76281980&t=94)** would be included with the style. To include just those links in visited or unvisited states descended from a class of warning, you'll need to restate the warning class each time. Remember that each selector is evaluated independently in between the commas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Warnings:** warning (7), common mistake (1)
> **Env Vars:** html (2)
> **Definitions:** means that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Compound selectors](https://www.linkedin.com/learning/css-selectors-2/compound-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/compound-selectors?u=76281980&t=0)** - [Instructor] It's possible to combine selectors in all kinds of interesting ways. We'll cover many of these ways in the course, but the first way I'd like to discuss is what's called a compound selector. So if you take a look here at this code pen, you'll notice over here in our [HTML](../../Skills/Web%20Development/HTML.md) we have both a paragraph and a unordered list that have a class of myclass. They both have red text inside of them in the display down here on the bottom. What if I only wanted to have the paragraph appear red, while the ul appeared blue? So with a CSS class that I have here right now that's not going to be possible because anything with a class of myclass will be red. However, if I go in ahead and put that HTML element in front of the myclass selector, in other words let's just say p.myclass, then only the paragraph will wind up being red in this case. And that is because this selector is saying that for all paragraphs that have that class of myclass do the following things. Likewise, we could say ul.myclass, and then the color would be blue. And that way we could go ahead and select those things separately even though they are using the same class name. The concept of a compound selector applies to IDs as well. Even though IDs can only appear once per page, you can use this same trick with them.
>
> **[1:33](https://www.linkedin.com/learning/css-selectors-2/compound-selectors?u=76281980&t=93)** That may actually help you style an ID one way on one page, and a different way on another page. So, for example here, I could say p and then myid,
>
> **[1:49](https://www.linkedin.com/learning/css-selectors-2/compound-selectors?u=76281980&t=109)** and let's just say that the background color is yellow, but if I had another style right after that, let's say the article with my ID, maybe it has a background color of orange. Notice that nothing changes on this page because our article in line one of the html does not have an ID of myid assigned to it. So that particular style there on line 10 in the CSS wouldn't apply. Note also that since we've added more elements to our selectors, these selectors have a higher specificity and will take priority over any classes and IDs that appear by themselves. So if later on, for example, I wanted to simply say myclass color orange, that would simply be overridden by the styles that appear earlier in the document because these styles here, the p of myclass and the ul of myclass, are more specific than the CSS selector that we have down here at the bottom. We could continue to add to this, and that will apply to both the paragraph and the ul. We haven't talked about the font weight in those earlier styles, so this font weight of bold will simply be added to the styles that we have from earlier in our document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3)
> **Env Vars:** css (3), html (2)
> **Cross-References:** earlier in (2)
> **Analogies:** for example (2)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)


### 2. Combinator Selectors

[↑ Back to Table of Contents](#table-of-contents)

#### [The HTML family tree: Parents, children, ancestor, descendant, and siblings](https://www.linkedin.com/learning/css-selectors-2/the-html-family-tree-parents-children-ancestor-descendant-and-siblings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/the-html-family-tree-parents-children-ancestor-descendant-and-siblings?u=76281980&t=0)** - [Instructor] Just as with real world families, [HTML](../../Skills/Web%20Development/HTML.md) has a family tree, there are ancestors and descendants, parents and children, and even a few siblings along the way. You may not have thought about family relationships in HTML before, so let's look at this a little bit more closely before moving on to selectors that take advantage of family relationships. Let's start by considering this piece of HTML, to keep the example simple, we'll start with just the body tag. It's frequently, but not always, these elements that are contained within the body that we're concerned with selecting. Let's map out how this bit of code might look if it were configured as a flow chart. Body is the tag that starts it all, it's the tag from which all of the other tags originate. So it's shown at the top of our chart. Now look at our HTML and think about where the children of the body are located. There are two children of the body, a section and an aside, children are directly descended from their parents with no additional tags in between. We could portray this relationship in a hierarchical tree like this, body is the parent, while section and aside are the children. Next, let's look deeper at the section. Where are its children? Do those children have children? Focusing just on the section portion of our code, the section has three children, an h1, a paragraph, and another paragraph. Note that that second paragraph
>
> **[1:33](https://www.linkedin.com/learning/css-selectors-2/the-html-family-tree-parents-children-ancestor-descendant-and-siblings?u=76281980&t=93)** has a child of its own, an A tag. If we draw this in a family tree representation, it might look like this diagram here. Now you try it for the aside portion of the tree. Identify the parent and the children, do those children have children? Hopefully your answer looks like this, the aside is the parent with the h2 and the ul as the children. The ul has two more children, the two li tags and the one li has another child, a strong tag. Now I've added the aside family tree to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of our family tree here. Once the HTML is drawn this way, we can easily start to describe the relationships between the tags. For example, what's the relationship between the h1 and these two paragraphs? Right, they're siblings, they're at the same level in the family tree with the same parent, the section tag. How about the relationship between this li and the strong tag? The li is the parent and strong is the child. So what's the relationship between the body tag and this li? The body is an ancestor while the li is a descendant. We could spell it out as great-grandparent to great-grandchild, but in programming, once we get too far beyond parent and child, we stop keeping track of the levels. Ancestor and descendant is perfectly fine. Finally, how about the relationship
>
> **[3:05](https://www.linkedin.com/learning/css-selectors-2/the-html-family-tree-parents-children-ancestor-descendant-and-siblings?u=76281980&t=185)** between the section tag and the h2? Well, we might describe them as aunt and niece, or uncle and nephew, but those aren't really relationships in HTML, in fact, these two tags are unrelated, there is no inheritance between the tags specifically. Understanding no relationships can be just as important as understanding the relationship in CSS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** html (6), css (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Descendant selectors](https://www.linkedin.com/learning/css-selectors-2/descendant-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/descendant-selectors?u=76281980&t=0)** - [Instructor] Consider this piece of [HTML](../../Skills/Web%20Development/HTML.md). It's very, very similar to what you just saw in the HTML family tree discussion. Now, what I'd like to do, is I'd like to style the link in the paragraph without styling the link that's in the list. Sure, the easiest thing to do here would be to drop in a class, and then style the class, but before long, classes would take over our document. Also, on occasion, you don't have access to the HTML to change it. That can be true with parts of [content management systems](../../Skills/Web%20Development/Content%20Management%20Systems%20(CMS).md) like [WordPress](../../Skills/Web%20Development/WordPress.md) or [Drupal](../../Skills/Web%20Development/Drupal.md). If that's the case, how can I style the link in the paragraph without affecting the link in the list? So, typically the way we'd style a link is simply say, a, and then we'd say something like color: red, but that of course is going to style both of our links, and turn them both red. So, how do I get just the one in the paragraph? Well, a descendant selector is a very simple way of doing this. Remember that a descendant is simply indicates that it is descendant from something. It doesn't necessarily mean a parent-child, or a grandparent relationship, or anything else. It's just somewhere in its ancestry, this relationship exists. So, simply by putting the paragraph tag in front of my a tag, I can go ahead and select that second paragraph link, without selecting the list link. Likewise I could write a style just for the list link.
>
> **[1:33](https://www.linkedin.com/learning/css-selectors-2/descendant-selectors?u=76281980&t=93)** We could say something like ul a color: orange, and that's going to work. You might be wondering why I picked ul. I didn't have to, I could have done a number of things in this situation. I could have easily said aside a. That would do exactly the same thing. Or I could say, li a. That would also do the same thing, because the aside, the ul, and the li, are all ancestors as compared to that link that is inside of that unordered list. What is the best choice? Well, that can sort of depend on the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your document, and what else you need to style in here. In this particular example, it's really immaterial, as to which one of those tags I pick, but it could make a difference in a longer and more complex document. So, this type of selector is called the descendant selector. Descendants are separated by spaces, indicating that one element is descendant from the other. Notice that we're not specifying whether it's parent, child, or a more distant relationship in this case. Also notice, that in each of these cases, we're going to read our selectors from right to left, but we write them from left to right. The last element here, is the element that's affected by what we're doing, in this case the link. Then we specify an ancestor of that link, whatever it happens to be. So, I could say the paragraph, I could say the section, that would also work here.
>
> **[3:07](https://www.linkedin.com/learning/css-selectors-2/descendant-selectors?u=76281980&t=187)** And then you would proceed to read this as all links contained within a section, or descended from a section, all links descended from a list item. So, this is the concept of the descendant selector. You've probably used these a lot in your CSS prior to watching this course, but that isn't in fact what you are doing here. So you're indicating that there is an ancestor-descendant relationship, but the number of levels between those elements could be many, or it could be very few.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [Content management systems](../../Skills/Web%20Development/Content%20Management%20Systems%20(CMS).md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Drupal](../../Skills/Web%20Development/Drupal.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** html (3), css (1)
> **Definitions:** is a  (1), is called (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Parent-child selectors](https://www.linkedin.com/learning/css-selectors-2/parent-child-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/parent-child-selectors?u=76281980&t=0)** - [Instructor] Parent-Child Selectors are very handy if you want to get the child element of a given parent. The Descendant Selector selects all of the descendants that match a given selector, but the Parent-Child Selector selects only this specific variety. So in this example, I've given you some [HTML](../../Skills/Web%20Development/HTML.md) here where we have an article, inside of the article we do have an aside as well as some paragraphs and some headings and so forth. And what I would like to do is select only the paragraphs in the article, not the paragraphs in the aside. So I could write, start by writing some kind of selector like this, article p, color, red now that's going to select all of the paragraphs in the document, why is that? Well, look at the relationship that we have here, clearly this paragraph on line three is part of that article, but also the one here on line six, this is also descended from article. The parent of this paragraph is the aside, the parent of the aside is the article and so this style applies to all of the paragraphs in the document. And if I said simply aside p, then that will wind up selecting the paragraph, the single paragraph that I have in the aside but my paragraphs that are in the article wind up not being selected. So how do I select just those paragraphs that are in the article but not in the aside?
>
> **[1:34](https://www.linkedin.com/learning/css-selectors-2/parent-child-selectors?u=76281980&t=94)** So fortunately there's a pretty simple way of doing this, we can simply say article, and then you're going to use the greater than sign to indicate this relationship between the article and the paragraph, so in other words, these paragraphs are directly children of the article. So we get the paragraph here that's on line three, we also get the paragraph that's here on line eight. The paragraph on line six, the one inside of the aside is not selected because it's in the aside and it's not a direct child of the article. Parent-Child Selectors can be part of a larger, more complicated selector as well, for example, you could combine the Parent-Child Selector with the Descendant Selector. So remember once again that you're writing these from left to right but you read them from right to left. So let's say for example, that I'd like to select this first strong tag here on line six. Just the strong tag that's right here, I don't want to select any of the other strong tags that are in this document, so there is a second strong tag in line six, there's also one out here in line eight, I just want to select this first one here in line six, how could I go about doing that? Well, a great way to do that would be simply to say p and then strong color blue, so that's going to select any strong tags that are children of the paragraph and in this case, that would apply
>
> **[3:10](https://www.linkedin.com/learning/css-selectors-2/parent-child-selectors?u=76281980&t=190)** to the one here in line six, which is a child of that paragraph, but also the one here in line eight. So now I need to get more specific about that, I'm really looking for the ones that are inside of the aside, I could simply put an aside in front of this and now I have only that single strong selected in this particular case. So once again, with this Selector, aside p and then this Parent-Child indicator and strong, how do we actually read this? We read this as any strong tags that are children of a paragraph, that are descended from an aside.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** for example (2)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### [Adjacent and general sibling selectors](https://www.linkedin.com/learning/css-selectors-2/adjacent-and-general-sibling-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/adjacent-and-general-sibling-selectors?u=76281980&t=0)** - [Female Narrator] Siblings. Those annoying creatures you had to share parents with. Well, they are all over the place in [HTML](../../Skills/Web%20Development/HTML.md) and fortunately, we have two ways of talking about siblings. First of all we have adjacent siblings, these are siblings that are directly next to each other, not separated by anything at all. So to show you an example of this, lets take a look at the children of the article in this example. In this case we have an h1 here in line two, we have a p in line three, we have an aside in line four and another p down here on line eight, in that specific order. And so that order is going to matter if we're talking about the adjacent siblings. So lets take a look at how the adjacent sibling selector will work in this particular situation. So let's say that I want to select this very first paragraph on this page and only that one. So I'm going to try h1 plus p, color green. So this will select only the paragraph on line three because that is the one that is immediately adjacent to the h1, notice that of the other paragraphs here in this document light up. A general sibling is one that shares a parent but they aren't necessarily right next to each other. So if I change this selector from a plus sign to a tilde, that's that funny little squiggle
>
> **[1:37](https://www.linkedin.com/learning/css-selectors-2/adjacent-and-general-sibling-selectors?u=76281980&t=97)** on top of the key generally to the left of your number one key, that's the tilde, that is going to select any paragraphs that are a sibling to the h1. In this case it will select two paragraphs, so the very first on line three but also the one in line eight, that comes later in this document. So the general sibling and the adjacent sibling can become very helpful in choosing specific siblings as we work in our documents, lets look at another example of this. So if I say for example, aside plus p, color orange, we'll wind up getting the very last paragraph in this particular document, because we have the aside here on line four in our HTML, remember this h2 An paragraph, these are all inside of the aside and then we have a paragraph here in line eight which is immediately adjacent to the aside tag and so that line turns orange. Now momentarily it was green. In fact if I take that style out again it goes back to being green. So why is it now orange? Because this selector is later in our CSS document and it has equal specificity to the one that was listed before and so now it is going to take on the orange color because it is later in the document.
>
> **[3:14](https://www.linkedin.com/learning/css-selectors-2/adjacent-and-general-sibling-selectors?u=76281980&t=194)** We could also change this aside to the tilde, general sibling selector, notice that nothing changes here and that is somewhat confusing because as you'll see we do have this paragraph in line three and the aside, those are also siblings, so why didn't the third paragraph turn that orange color as well? The reason why is, you can only go one direction in CSS which is later and later into the document. You can't go early into the document. So when we use this type of selector, we're looking for the aside and we're looking for paragraphs that come after it, whether those paragraphs are adjacent or whether they are general siblings. So that is a very important consideration when working with sibling text. Always look for the siblings later in the document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Env Vars:** html (2), css (2)
> **Cross-References:** later in (4)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [female (1)

#### [Reading and writing selectors](https://www.linkedin.com/learning/css-selectors-2/reading-and-writing-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/reading-and-writing-selectors?u=76281980&t=0)** - [Instructor] Several times in this chapter, I have mentioned writing selectors from left to right but reading them from right to left. What on earth am I talking about? When reading and understanding a selector, especially a complex selector with several components start at the last item in the selector and expand from there. For example in this selector we start with a, then we're going to move to p, and finally we'll go to the class of warning. So in other words this selects any a element, descended from a p element, that is a child of any element with a class of warning. However, when we write selectors we're going to start at the outside, getting more and more specific as we move inwards. Being able to read selectors is the first step in understanding them well. For example, consider these two selectors which are commonly confused. Note that the first selector has no space, while the second selector does have a space in the middle. If you practice reading these from right to left you'll see that that first selector will select any a element in an unvisited state. Whereas the second element, those are actually two separate items. So it's any element whose target has not been visited, descended from the a element. For example, that might be a span tag inside of an a tag would be an example of some [HTML](../../Skills/Web%20Development/HTML.md) that might match that. Sometimes describing a selector
>
> **[1:34](https://www.linkedin.com/learning/css-selectors-2/reading-and-writing-selectors?u=76281980&t=94)** in this way will help you understand its meaning and whether that selector is relevant to your current problem. By practicing reading selectors in this way, your understanding of selectors will get better quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Analogies:** for example (3)
> **Warnings:** warning (2), note that (1)
> **Definitions:** in other words (1), is a  (1)
> **Env Vars:** html (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 3. Attribute Selectors

[↑ Back to Table of Contents](#table-of-contents)

#### [Simple attribute selectors](https://www.linkedin.com/learning/css-selectors-2/simple-attribute-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/simple-attribute-selectors?u=76281980&t=0)** - [Instructor] You're very aware, that you can create selections in your CSS with classes, IDs, and [HTML](../../Skills/Web%20Development/HTML.md) elements. You can specify family relationships between these as well. All of that's terrific, but did you know you can also select anything with attributes. Think of HTML attributes as adjectives. They're designed to describe a given HTML element a little bit further. For example, consider this anchor tag here on line six. It does so much linking to other pages, or within a page, it can also serve as an anchor, but this 'a' tag all by itself here does absolutely nothing. The 'a' tag is nothing without its attributes. So to this, we can go ahead and add some attributes. One of those popular, href. So just putting that in will link us back to the top of the page, and then maybe we also want to add a title attribute here. Back to top. The title attribute will show up as a tool tip in many browsers. When you roll over the link, you'll wind up getting a little tool tip that comes up, depending on what browser you're working with. So what if I want to style just this to top link, but not the other link that's here in this document. How can I select just the to top link down there at the bottom? Well fortunately there is an attribute selector that will allow us to do this. Attribute selectors all start with square angle bracket, punctuation, and then inside of that,
>
> **[1:35](https://www.linkedin.com/learning/css-selectors-2/simple-attribute-selectors?u=76281980&t=95)** I'm simply going to put the world title. So this particular selector is simply going to test for the presence or the absence of this particular attribute. It doesn't matter what's inside the title tag, or how specific it gets. You can simply test to see if it's there or it's not. And if it is there, then let's have it do something. So we'll go ahead and make that red. Now, what if I added a title to a paragraph?
>
> **[2:07](https://www.linkedin.com/learning/css-selectors-2/simple-attribute-selectors?u=76281980&t=127)** So in this particular case, this attribute selector is making the color red, now applies to both the 'a' tag at the bottom, the back to top link that we had, and it's going to apply to this paragraph as well, because both of these have a title attribute, even though the values are very different. So what I would recommend a lot of the time, as you work with these attribute selectors, is to make them specific to a certain tag. So I'm simply going to put an 'a' in front of this, and so now this selector will apply to the 'a' tag specifically, and the 'a' tags that happen to have a title attribute of any value associated with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3)
> **Env Vars:** html (3), css (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Exact and partial attribute value selectors](https://www.linkedin.com/learning/css-selectors-2/exact-and-partial-attribute-value-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/exact-and-partial-attribute-value-selectors?u=76281980&t=0)** - [Instructor] We've determined that we can test for the presence or absence of an attribute. But what if we want to select all or part of an attribute's value? Fortunately, we have two selectors designed to do that, the exact and the partial attribute selectors which I'll go through here. So here we have an unordered list where you're working with the title attribute, and we have a whole bunch of random words in the title attribute, and we would like to make some selections from that. So let's just start by trying to select the items that contain the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) first. So the first kind of attribute selector I'd like to talk about is the exact attribute selector. So here we'll simply say title equals first. So this is going to test for an exact match that the title attribute has a value of first and nothing else. If we go ahead and say color red that will select only the first bullet item on that list and no other because that is the exact match. However, we could go on and say also title tilde equals, and that tilde key once again is up by the number one on your keyboard, it's the little squiggle, and here we can say first as well, and then color blue. So in this case, this will select both the list item on line two and the list item on line three.
>
> **[1:35](https://www.linkedin.com/learning/css-selectors-2/exact-and-partial-attribute-value-selectors?u=76281980&t=95)** The reason why is because both of those contain the word first while the other list items do not. Now you might have noticed that the first list item was previously red, now it's blue, why is that happening? Well, here we've got once again two selectors that have exactly the same specificity to them in a certain order. The second one is overwriting the first. If we simply switch the order here, we'll wind up with the first list item being red, and the second one being blue. Both of those list items would have started blue but since we have this second attribute selector that overrides the first, that's why that first list item is now red. We can do something similar here with the word fifth. So we can simply say title equals fifth, and before I put in any values here, think about which one of these list items is going to be selected. Yep, that's just the last one. Then we can do the same thing here again, title tilde equals fifth. Now which ones of these is going to be selected? Think about that for a minute. Correct.
>
> **[3:06](https://www.linkedin.com/learning/css-selectors-2/exact-and-partial-attribute-value-selectors?u=76281980&t=186)** List item number three and five. So these are two attribute selectors that'll be very helpful in your work. The exact attribute selector will exactly select exactly what you're looking for, whereas the partial attribute selector will look for a word contained within that attribute somewhere.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Beginning, ending, and arbitrary substring attribute value selectors](https://www.linkedin.com/learning/css-selectors-2/beginning-ending-and-arbitrary-substring-attribute-value-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/beginning-ending-and-arbitrary-substring-attribute-value-selectors?u=76281980&t=0)** - [Instructor] Now that you know how to test for a full value in an attribute selector or individual words in that value, how might you test for a few letters as a value in an attribute selector? So, fortunately, we do have beginning, ending, and arbitrary substring attributes to help with that. Let's go on ahead and put 'em all in action right here. So, first of all, we have over here once again the same sort of unordered list. And what I'd like to do first is select all of the title attributes that start with the letters FI. And so the way we're going to go about doing that is, as always, square brackets and then the title and then the upper caret, the one above the number six, equals, and then FI. So we'll go ahead and make that color: red. So that's going to select both first and fifth, because both of those have the letters FI that start the value of that attribute selector. So that's the beginning substring attribute value selector. Next, let's go on ahead and look at the ending. So once again, the title here and this would be now $=th. So any of these attributes that end with the letters TH. And just to be different, let's set a border: 1px solid blue.
>
> **[1:38](https://www.linkedin.com/learning/css-selectors-2/beginning-ending-and-arbitrary-substring-attribute-value-selectors?u=76281980&t=98)** And so that will pick both the third item, the fourth item, and the fifth item, because all of those end with TH. And then finally, we have the arbitrary substring attribute value selector, which is really helpful. It's the one that I usually use, because it's easier to remember than those other two and it's usually effective enough for what you want to do. So here let's say title*=fi. And let's say background-color: black, color: white. So this is going to choose many of the values here and that is because the string FI appears in many places here. It appears in first, it appears in fifth, so basically everything is selected here except for the fourth list item, because somewhere in that title attribute, the string FI appears somewhere in that string. So these are kind of arbitrary, with these funky little characters here before that equals sign. And it's a really great party trick, where you can select these things based on parts of attributes. But you might be wondering whether this has any application in real life? Well, fortunately, there are some amazing things you can do with these attribute selectors and I'm going to tell you all about that in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Cool attribute selector tricks](https://www.linkedin.com/learning/css-selectors-2/cool-attribute-selector-tricks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-selectors-2/cool-attribute-selector-tricks?u=76281980&t=1)** - [Instructor] If you've been in [Web Design](../../Skills/Web%20Development/Web%20Design.md) and development for any period of time, you've wound up working in a system like [WordPress](../../Skills/Web%20Development/WordPress.md), [Drupal](../../Skills/Web%20Development/Drupal.md), Squarespace, or something similar, your client is responsible for putting in links to PDFs or links that go off-site. Maybe you have asked them to designate those links that go to a PDF via an icon or off-site via some type of text after the link. Clients never remember to do this, and it always gets out of date. How cool would it be to set up some code that does this automatically, so your client will never have to worry about it again? So let's go ahead and take a look at this example, where I have two links here that are both going off-site, and I'm going to show you two tricks that you can use to designate that these links go off-site, two different ways of programming this. So one methodology that you could use would be this. I am going to select all of my a tags and those are going to have an href where somewhere in that string, will be something like http, that will be an indicator that these are the links that go off-site, because those links always start with http, or https, both of which would be selected by the selector. Then what I'm going to do is I am going to set a background and what I'm going to do is, over here in this comment in the [HTML](../../Skills/Web%20Development/HTML.md), I have a URL you can use here for an icon that'll indicate
>
> **[1:37](https://www.linkedin.com/learning/css-selectors-2/cool-attribute-selector-tricks?u=76281980&t=97)** that these links go off-site. This is from Wikipedia, and this is the icon that they used to indicate that links go off-site, rather than within their site. We're going to just borrow it using this URL here, just for test purposes. In an ideal world, you would have this image uploaded somewhere on your server, when you access it through some kind of URL that way, rather than taking it from Wikipedia. So here in my background, I'm going to say the URL is going to have this kind of value, and then I'm going to say that it'll also have a no-repeat, because we only want it once, and I'm going to align it to the right side of the icon, so you can see here down on the bottom that the icon is starting to show through behind the letters that I have here, so that placed the background image and it shoved it all the way to the right side of the link. But in order to really see that clearly, we need a little bit of space, so I'm also want to add padding on the right of say 14 pixels, and how do I know 14 pixels is good? Well, this is a 12 by 12 pixel icon, we want a little bit of breathing room in between the links and the icon, this is a great way of doing that. So this is one possibility for coding those links. Another way that you could do this would be simply to use the beginning substring selector, and if you wanted, depending on the style of links that you have, it could start with https. In this case, both of my links do start with that string,
>
> **[3:10](https://www.linkedin.com/learning/css-selectors-2/cool-attribute-selector-tricks?u=76281980&t=190)** it could wind up still being http. That will also select exactly the same thing. So this is one methodology that you can use to indicate links that go off-site. Another way you could do something like this would be to say exactly the same kind of selector, and you're going to use the after pseudo-element and after, I'll be talking about a little bit at later on in the course, but this is going to select any portion after that particular link, and then we can add to this content whatever it is that we want to have go there. That will add that text goes offsite after the link. And in this case, it's putting it after the link before the icon, so that is another way that you could go about approaching this, so for example, you could use the string PDF if it's a PDF file, that would be something else that you could do. So these attribute selectors are super helpful for selecting things and styling them in a way that your clients are going to forget about but you would like to have that applied uniformly across your website. Best way to do that is to lock it all up in some kind of CSS style and this is a really cool trick. You should try it on your next website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Design](../../Skills/Web%20Development/Web%20Design.md) (1), [WordPress](../../Skills/Web%20Development/WordPress.md) (1), [Drupal](../../Skills/Web%20Development/Drupal.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** url (4), pdf (3), html (1), css (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Pseudo-classes for document structures

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding only selectors, :only-child, :only-of-type](https://www.linkedin.com/learning/css-selectors-2/understanding-only-selectors-only-child-only-of-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/understanding-only-selectors-only-child-only-of-type?u=76281980&t=0)** - [Instructor] The next topic is the only selectors, including only child and only of type. Let's talk about the easy one first. That is the only child selector. Just like in real life, an only child is one without siblings of that particular type. So let's go ahead and take a look at an example of this. We have here in line number eight, we have a strong tag here that's all by itself. It is an only child. Also, if you take a look here in line six, this strong tag at the end of the sentence is an only child also. It is a child of the M tag which is surrounding that. So if we go ahead and write a strong colon only child, we wind up getting both of those things selected. That's the definition of an only child. There it is. Only of type is a little bit different. So that indicates that there may be several siblings, but there's only one of this particular type. So an example of that is here in the aside, the aside actually has two children, it has an H2 and it has a paragraph. But the H2 is the only one of its type because the other sibling is a paragraph. So if we go ahead and we select H2 only of type and we make that one blue.
>
> **[1:32](https://www.linkedin.com/learning/css-selectors-2/understanding-only-selectors-only-child-only-of-type?u=76281980&t=92)** So that selector, H2 only of type, will select that H2. It is the only sibling of that type within the aside tag. The same thing can be said for that paragraph. Only of type and if we make that green, so P only of type is going to pick the paragraph inside of the aside and only that paragraph because it is the only child of the aside that is the type of paragraph. So this distinction between the only children and the only of type is one that we're going to see several times in a row here as we look at more pseudo classes. It's a subtle distinction, but it's really important as you select things in your document to understand the difference between an only child and the only one of a certain type.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** make (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Understanding first and last selectors, :first-child, :first-of-type, :last-child, :last-of-type](https://www.linkedin.com/learning/css-selectors-2/understanding-first-and-last-selectors-first-child-first-of-type-last-child-last-of-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/understanding-first-and-last-selectors-first-child-first-of-type-last-child-last-of-type?u=76281980&t=0)** [Instructor] Now that you understand the differences between an only child and an only of type, it won't come as a surprise that there are more of these types of selectors, including first child and first of type, as well as last child and last of type. First child and last child do exactly what you'd expect. They select the first child or the last child in a group of siblings. Remember, in this case, we're looking for the same type of element. So let's just look at the list portion of the [HTML](../../Skills/Web%20Development/HTML.md) here, where we have a whole series of these list items and I can simply write some styles for that. I can say li:first-child, color: red, and that will make the first one red. If I say li:last-child, color:blue, that will make the last child blue. So, that's pretty straightforward. As always, the of-type selectors, first of type, last of type, tend to be a little bit more difficult to understand conceptually, so let's just take a quick peek at how those might be selecting things in this document. If I say p:first-of-type, border: 1px solid red, we'll wind up getting the paragraph here which starts off our article. This is the paragraph, here on line number 10.
>
> **[1:35](https://www.linkedin.com/learning/css-selectors-2/understanding-first-and-last-selectors-first-child-first-of-type-last-child-last-of-type?u=76281980&t=95)** Then we get a paragraph here, this is the one on line number 13. The reason these two lines are selected is that they are the first of their type to be a paragraph within these particular elements. The paragraph here on line 10 is the first paragraph of its type inside of that article, and the paragraph here on line 13 is the first of its type within the aside. We can change that to a last of type. Notice here, what we have selected this time, is the aside paragraph on line 13 which was the same one that was selected before with the first of type. It is the only of type, in fact, and so paragraph of only of type, first of type and last of type, all of those would select that paragraph on line 13. And, of course, it's going to select the paragraph down here on line 16, which is the very last paragraph in the article. Hopefully, you're noticing that it's possible to be the first, last and only type, just like you can be the first, last and only child. If you wind up selecting something unexpectedly, often it's just one of these situations where it's an only selector that's being picked up by one of the first or the last selectors. How we get a first or last, but not an only? Fortunately, there's a way to solve that problem, and we'll discuss that with the not selector coming up shortly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (2)
> **Env Vars:** html (1)
> **Cross-References:** coming up (1)
> **Analogies:** just like (1)

#### [Understanding nth selectors – :nth-child, :nth-of-type, :nth-last-child, :nth-last-of-type](https://www.linkedin.com/learning/css-selectors-2/understanding-nth-selectors-nth-child-nth-of-type-nth-last-child-nth-last-of-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/understanding-nth-selectors-nth-child-nth-of-type-nth-last-child-nth-last-of-type?u=76281980&t=0)** - [Instructor] In the last two videos, you've learned to select the first, last or only child, and the first, last or only of a type. I'm sure you're shocked, shocked, to know that you can also select any other item you wish. For example, you want every third item? Every fifth item, starting with the second? These can all be coded with the nth selectors, including nth-child, nth-of-type, nth-last-child and nth-last-of-type. Let's just focus on nth-child for the moment, because once you understand how one of these nth selectors work, you'll pretty quickly get them all. First of all, an nth-child selector must take an argument to describe what number n is equal to. Let's start with the easy one, which is with key words. So, if I simply say li:nth-child even, just like that,
>
> **[1:01](https://www.linkedin.com/learning/css-selectors-2/understanding-nth-selectors-nth-child-nth-of-type-nth-last-child-nth-last-of-type?u=76281980&t=61)** and say color: orange. What I will get is the even numbered list items will wind up being orange. And fortunately, even is defined in human terms, so it is in fact numbers two, four and six, not in engineering terms, where it would actually, the counting would start with zero. You can also change that key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) to odd, and that would, of course, shift to the first item, and every other one from there. So, that's super easy, super useful, especially if you combined that, say, with a background-color, you can imagine, perhaps, a table being striped. That would be a very easy way to go about doing that. Now, what if we want to select just one of these items among all of these? That is also very easy to do. All we have to do is select a number. So, if I just say number six, this will select the sixth item here on my list. And we can just type in any of these numbers and it will go ahead and select that item here on the list. With a single number like this, that will not repeat, so this is absolutely the eighth item on the list, and it will not repeat again when we get to the sixteenth item on the list. But finally, and this is where it gets a little bit more interesting, what if I wanted every third item, but I also wanted to select items one, four, seven and ten? How would I go about writing that? Well, this is going to wind up being written in a form that looks like algebra, but it is not.
>
> **[2:39](https://www.linkedin.com/learning/css-selectors-2/understanding-nth-selectors-nth-child-nth-of-type-nth-last-child-nth-last-of-type?u=76281980&t=159)** And it's going to look something like this, 3n plus one. And if you look at that and think that that's algebra, I don't blame you at all, but what this is actually saying is the following: 3n means take every third item here on our list and the plus one indicates start with the first item. We could also change that pretty easily, so I could say, let's say start with the sixth item, and then select ever third item after that. So, don't try to do algebra when you see algebra, just remember that this is in a weird sort of formula that means start with a certain number and select every number thereafter. Now, let's consider a very close cousin to nth-child, which would be nth-last-child. And if we set this to be 3n, say, plus six, what that would wind up saying is we're going to count from the bottom of the list and go up. So, in this case we're going to count up to the sixth item, one, two, three, four, five, six, here we are, and then every third child after that is going to go ahead and get that styling. So, when you're working with nth-last-child or nth-last of type, you're going to need to count from the bottom, when you're working with nth-child or nth-of-type, you count from the top and go down. Those are basically the two big differences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** for example (1), just like (1), imagine (1)
> **UI Navigation:** select the (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [:root and :empty](https://www.linkedin.com/learning/css-selectors-2/root-and-empty?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/root-and-empty?u=76281980&t=0)** - [Instructor] Next up are a few pseudo-classes that are a little odd, that aren't used very often, but they may still be of interest to you. First of all, let's talk about the root pseudo-class. So root is used for setting up the root of the document, and that's pretty much it. In the [HTML](../../Skills/Web%20Development/HTML.md) and CSS world, the document root is the HTML tag itself, and quite frankly we usually just use the body tag. However, pseudo-classes do have a higher level of specificity than the HTML element does in your CSS, and so anything put in root would win over anything put in the body tag or the HTML tag. And second of all, the root pseudo-class is going to allow you to access the shadow DOM, if that winds up being something you want to do with [JavaScript](../../Skills/Software%20Development/JavaScript.md). So, sometimes that can get you to a different place. The root element is actually becoming really commonly popular with CSS variables, also called CSS custom properties. And I'll show you how you set up something like this. So, here in my CSS I have a body tag where I've called out a font family. Then I have a container tag, with some styling associated with it. In this case I'm laying these out with CSS grid. And then I have another cell here, which also, I repeated the same value twice, here I've used 1rem here for padding, here I've used 1rem for grid-gap. That's a good candidate for some kind of variable. And, so I can simply set that up here, if I put it in the root of my document.
>
> **[1:36](https://www.linkedin.com/learning/css-selectors-2/root-and-empty?u=76281980&t=96)** In fact I can just get rid of the body tag here, we'll put the font family there. And I can define my CSS custom property, also called the CSS variable, right here. Call it whatever you want. And those variables are defined by putting a double dash in front of them, then when you want to call the variable, so down here in my document, where I want to call this for my grid-gap, I would say var, double dash, standard-size.
>
> **[2:15](https://www.linkedin.com/learning/css-selectors-2/root-and-empty?u=76281980&t=135)** And so that would allow that standard size to be used again and again. I could make one change and all of these things would be affected. So, that's one common use for root now. Any of these variables that you put up here in root, would then be available basically globally to your document. So you would be able to call these variables wherever you wanted in your document, since everything is descended from root. The second pseudo-class I'd like to talk about is the empty pseudo-class. And this is useful for when you have a tag that exists, but it has no content and no whitespace in it. So you might run into the situation where you want to style an empty tag when working with Javascript, where you might be writing some kind of value in between the tags, or with some sort of back end programming language like [PHP](../../Skills/Software%20Development/PHP.md) or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) where you're going to do the same kind of thing. If you're just working with HTML and CSS it's unlikely you'll work with the empty tag, but it's good to know it exists anyway. It also has a few little weird things associated with it. So, if I simply say div:empty, and then a background-color of gold, what this is going to do is it's going to select the cell here that I have in line three, even though I have a comment in this there's no whitespace, this is considered to be an empty paragraph, and in fact of course the same thing would be true if I simply had the div there with nothing in it at all. But a comment is permitted as well
>
> **[3:50](https://www.linkedin.com/learning/css-selectors-2/root-and-empty?u=76281980&t=230)** as long as there's no whitespace around it. Notice that here in line four, this is also an empty cell, it technically has no content, but it does have whitespace in addition to that comment, and so therefore that is not selected by that empty selector. So root is going to be more useful as we move into the world with CSS custom properties, also known as variables. And empty is something that you might be interested in using if you are doing a lot of work with Javascript where you're writing content in between HTML tags on your web page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [PHP](../../Skills/Software%20Development/PHP.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** css (10), html (6), dom (1), php (1)
> **CLI Commands:** make (1), php (1), python (1)
> **Definitions:** known as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Pseudo-classes for links

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic link states: :link, :visited, :hover, :active](https://www.linkedin.com/learning/css-selectors-2/basic-link-states-link-visited-hover-active?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/basic-link-states-link-visited-hover-active?u=76281980&t=0)** - [Instructor] This next chapter focuses on pseudo-classes that affect links on the page. We'll start with four pseudo-classes you've probably encountered already, but you may not know in-depth. Here we have a series of links on the page. The way most people style the links on their page these days is as follows. We'll have two styles to do this. One is simply the A, in other words, all of the states of the link are going to be green and bold, with the exception of hover, which comes after this, and this will have a text decoration of none. In other words, all links are going to be green and bold, but when we hover over them, the link underline will disappear. That's really quick and convenient, for sure. However, what if you're building a page with lots of links? How does a user keep track of which links they've visited and which they haven't? Well, it is possible to style all link states individually. This used to be way more common in the web's past, but it's still possible to do today. The pseudo-classes of links visited in active are the original pseudo-classes available since the first version of CSS in 1996. Hover was added a few years later after it was introduced first in Internet Explorer, and then added to the CSS specification. And these four standard states for styling links have to be listed in order. So let's go through these one at a time. First of all, we have the pseudo-class of link. This styles links that are unvisited.
>
> **[1:34](https://www.linkedin.com/learning/css-selectors-2/basic-link-states-link-visited-hover-active?u=76281980&t=94)** And as soon as you put this style in place, you may discover that some of the links over there that are displayed in that window are going to turn purple. You're not seeing it here in my window, because I am running this in guest mode, so it does not know my browser history and these link colors are not changing. But you, if you have visited [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), or [Google](../../Glossary/Service/Google.md) lately, you may see one or several purple links that appear. That's because you visited those pages before. We can, of course, customize that by saying a:visited, which is the next link you have to put in, and this will have a color of, let's say brown. And some of these links, if you have visited them, you will now see them, instead of purple, they will look brown. Again, you won't see it in my window because I am running in guest mode. After that comes our hover state. And then after that comes a:active. And this one, and we can just say color of pink, this one is interesting because this is the state that you get after the link is clicked, but before it loads. And this used to be, of course, an important state back in dial-up days when we would click the link and expect to wait a period of time before the next page loaded, so we'd want to know that we actually had clicked the link. Today, the active state is not necessarily all that helpful,
>
> **[3:10](https://www.linkedin.com/learning/css-selectors-2/basic-link-states-link-visited-hover-active?u=76281980&t=190)** but this is where it goes. So to remember this order of these four basic link states, you want to think about LV, LV, HA. That is the order. And one of the ways you can remember this is to live, L, I, capital V, E, happy, capital H, capital A, P, P, Y. And that will remind you of the order of these particular links. Another state that's useful for links is the focus state. I'm going to talk more about the focus state and its importance to accessibility in a later video. So that is a brief summary of some of our links and their styling states. The focus state, of course, is part of this as well. It would normally fit here between visited and hover. And we'd encourage you to try out your links in your own [CodePen](../../Glossary/Tool/CodePen.md), outside of the guest environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Google](../../Glossary/Service/Google.md) (1), [CodePen](../../Glossary/Tool/CodePen.md) (1)
> **Definitions:** in other words (2), is a  (1)
> **Env Vars:** css (2)
> **Cross-References:** next chapter (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### [:any-link for combining link states](https://www.linkedin.com/learning/css-selectors-2/any-link-for-combining-link-states?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-selectors-2/any-link-for-combining-link-states?u=76281980&t=1)** - [Educator] AnyLink is a very recent addition to our pseudo class choices. In this case, the AnyLink pseudo class selects, well, any link in the unvisited or the visited state. We can add AnyLink after a, and we'll see the same results as we do without this pseudo class. So this is the same example, we had it from the previous video. You'll see here that we have our standard link state here with just a. I'm going to put after this colon any hyphen link. And so this is going to change the styling of these links to be green and bold in the visited or the unvisited state. In other words, this is styling, the unvisited links, which is the link pseudo class or visited links, which is the visited pseudo class. Combine them together into this single pseudo class here. In order to make your styling work correctly, you will want to put a hover after this in order to add any hover effects. So when is this AnyLink going to become useful? If you need to raise the specificity of your link state, adding the AnyLink pseudo class may help with that specificity in the cascade. Other than that, it's not clear how this is an improvement over the standard method of using a and a hover selectors for styling links.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), in other words (1), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [educator] (1)

#### [Pseudo-classes for in-page navigation, :target](https://www.linkedin.com/learning/css-selectors-2/pseudo-classes-for-in-page-navigation-target?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/pseudo-classes-for-in-page-navigation-target?u=76281980&t=0)** - [Instructor] The next selector I'd like to tell you about is the target selector. And initially I thought the target selector had to do with a target in a link, like target equals blank. But actually the target has to do with navigation bars that are going to navigate you within a given page. So here what I have is a little bit of [HTML](../../Skills/Web%20Development/HTML.md) where I have a table of contents and maybe I have a really long article of some kind and this is going to be able to skip me down to the various parts of the article. As we scroll down you'll see that I have some headings that are calling for part one and part two. So by styling target over here, we simply just say target and the background color of gold. What this is going to do is nothing that's immediately obvious here in the display of this webpage, but when I do click on my part one here, it will highlight that particular part of the article and the same here for part two. That's kind of nice when you have a page like this where it's kind of short or you have several links in the document, you're not sure if all the links are working because sometimes your window is a little bit longer to skip you down, especially on a desktop environment like this, and you're testing these links, you need a way of knowing whether those links are working or not,
>
> **[1:32](https://www.linkedin.com/learning/css-selectors-2/pseudo-classes-for-in-page-navigation-target?u=76281980&t=92)** even if the page itself isn't moving up and down. And so this target will show you visually where you are in the document from this table of contents. So that is the whole purpose for the target pseudo class and that's how you use it here in a document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Accessibility pseudo-classes: :focus, :focus-within](https://www.linkedin.com/learning/css-selectors-2/accessibility-pseudo-classes-focus-focus-within?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-selectors-2/accessibility-pseudo-classes-focus-focus-within?u=76281980&t=1)** - [Instructor] Next let's examine the pseudo classes that are all about accessibility on your webpages, including focus and focus-within, First let's focus on focus. Click anywhere within this [CodePen](../../Glossary/Tool/CodePen.md) display window to select it and then start tabbing using your tab key. This blue outline that you see is the browser default styling, and it's super important for accessibility concerns. It's great in the state that it's in, but if you want to style it further you can do that with the focus state for your links. This updates our old LVHA method for styling to LVHA or Lord Vader, Former Handle Anakin. So I'll type that out in here for you. So now it is LVFHA, Lord Vader, Former Handle Anakin.
>
> **[1:03](https://www.linkedin.com/learning/css-selectors-2/accessibility-pseudo-classes-focus-focus-within?u=76281980&t=63)** All right. So if we're going to work with any link as we are here, that of course is our link in our visited state. So focus is going to come right here. So we'll say a:focus. Then we can say our outline will be, let's say five pixel double purple. Now because I've put this on a focus, this is going to affect my links at the top but not necessarily my form field. So let's see that in action. Once again, click over here inside of the CodePen display window and then click the tab key on your computer. So there's that five pixel double purple outline. But when I get to the form fields, it's still just blue. If we leave off the a here and just set it up to be focused in general, once again clicking over here in the display window and tabbing, then you'll see that same effect on your form fields as well. And of course, if we wanted to just affect the form fields we could say something like input:focus, and that would not affect the links but it would affect the form fields. This last one, of course it doesn't affect because that is text area, not an input. So we'd have to actually double our selector here to say input focused and textarea:focus in order to select that as well. Next, let's look at focus-within.
>
> **[2:37](https://www.linkedin.com/learning/css-selectors-2/accessibility-pseudo-classes-focus-focus-within?u=76281980&t=157)** As I tab down this page from the links to the form, it's possible to make the form highlight. In other words, when I'm within an area of tabbable links or within the form elements, we can make another change within that area. Let's see how that works. So what I'm going to do here is after my styling here on the page, I'm going to add ul:focus-within.
>
> **[3:11](https://www.linkedin.com/learning/css-selectors-2/accessibility-pseudo-classes-focus-focus-within?u=76281980&t=191)** And I'm going to set the background color to be yellow. So this works because up here at the top of my page I have an unordered list of links. And so now what I'm saying is when there is a focus inside of that area, we are going to make the background color of the UL yellow, not the background of the link. So once again, if I click inside of this area and I start tabbing, you can see the entire UL area now lights up as yellow. We can do the same thing with the fields here on the form, form:focus-within, and we can say background-color orange. So as I am tabbing through my regular links, they were in a yellow area. And when I get to the form now I have a customized prompt here and I have a background color of orange. So we can make some pretty major changes here presumably for accessibility reasons. Now, of course, all of the caveats apply here. Just because we have just changed our focus and our focus-within states, does that mean we have increased accessibility of this page? Well, I think there's probably argument that we have not but you definitely need to test this. Just because you can make these changes doesn't mean you should make these changes. It certainly doesn't mean I've chosen the right colors
>
> **[4:44](https://www.linkedin.com/learning/css-selectors-2/accessibility-pseudo-classes-focus-focus-within?u=76281980&t=284)** for this. I have not analyzed these colors to make sure they are accessibility compliant. As always you want to make sure that whatever you are adding here is helpful to people who are navigating on keyboards. The best way to do that is to actually test with real users. And of course you can also research for best practices on these types of styles. But for now you know that they exist, that these are possible changes that you might make. If you are encountering accessibility concerns within [Forms](../../Skills/Web%20Development/Forms.md) and with links, this may be something to help out your keyboard users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CodePen](../../Glossary/Tool/CodePen.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **CLI Commands:** make (9)
> **Env Vars:** lvha (2), lvfha (1)
> **Definitions:** in other words (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Pseudo-classes for forms

[↑ Back to Table of Contents](#table-of-contents)

#### [Form controls: :required and :optional; :enabled and :disabled](https://www.linkedin.com/learning/css-selectors-2/form-controls-required-and-optional-enabled-and-disabled?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-selectors-2/form-controls-required-and-optional-enabled-and-disabled?u=76281980&t=1)** - When working with [Forms](../../Skills/Web%20Development/Forms.md), there are some new pseudo-classes that may help you greatly in your work, including enabled and disabled, and required and optional. But before we start this, let's look at our [HTML](../../Skills/Web%20Development/HTML.md), always a good place to start. This is a form, as you can see here on the page. Let's just look at this HTML, because there's a number of things in here you may not be familiar with. We start our form, we have our heading, we have some paragraphs. We also have a paragraph here that note it has the attribute of contenteditable. This would allow you to edit this paragraph right there on the page. It's not going to save anywhere, but you can, in fact, edit this text on the page. I'm going to show you how that works in a later video in this chapter. Then we're going to have a series of rows. These rows are for styling purposes. We have labels associated with those, this is for accessibility purposes. And we have an input field here that has, first of all, this is a type of text, so we just typed text into it, and it is required, you can see here by this attribute. I'm going to talk more about what that means in just a moment as soon as we get through the HTML. Then we've got our next row. We have an email blank here. That email is set to disabled, the disabled attribute. And as you can see here, that email field is in fact disabled, we can't click in it and do anything with it. We also have a input type of tel for phone numbers. And then we have a series of radio buttons.
>
> **[1:39](https://www.linkedin.com/learning/css-selectors-2/form-controls-required-and-optional-enabled-and-disabled?u=76281980&t=99)** The first radio button is chosen by default to the morning option, because it is checked. You can see the checked attribute here on line 19. Then we have a select dropdown here, and we have a text area at the bottom with a spin on it, notice that the text area is set to be read only, it has a readonly attribute inside of it. And this contains some text, which you are not going to be able to edit. You can click inside this box, but you can't type inside this box. So that may be something you haven't seen before. We also have a checkbox at the end of this. It is checked by default. And then, of course, we have our button for submitting the form. Notice that the form itself doesn't do anything. There's nothing here inside of the form tag, the form does not submit, there's no backend processing script on it, there's no [JavaScript](../../Skills/Software%20Development/JavaScript.md) associated with this at all, there's nothing in the JavaScript box. So this is strictly an HTML and CSS example of a form for styling purposes. So HTML 5 has this new required attribute that I mention here on line seven. This attribute is a nice way of identifying required elements and we can use it for styling purposes. It's also really important for accessibility reasons, so that those who are using assistive technology understand which fields are required because you have flagged them with the required attributes.
>
> **[3:11](https://www.linkedin.com/learning/css-selectors-2/form-controls-required-and-optional-enabled-and-disabled?u=76281980&t=191)** So even though it's not going to do anything for your programming, it may help for accessibility, and it will help for styling. So let us see how we can use this required attribute in our styling on this page. And I'm going to start by going here into my CSS box, and I'm going to use the required pseudo-class. Required. And I'm going to do this really simple. I'm just going to say outline is two pixels, solid red. And, surprisingly, haha not, it is going to highlight the name field here because this is the one that we have required. And we are using the outline property here, rather than the border property, because the outline property will match more of these form fields. So if I switch this from required to optional, I know you're going to be super surprised by this, the optional fields are all of the other ones. So this selector is now selecting email, phone number, all of the radio buttons, the select dropdown, the text area, the checkbox, and the button. It may be hard to see that on the button, so we're going to switch this over to blue really quickly just to show you that, in fact, there is a border around that button as well. Now, likewise, you can also work with enabled and disabled. So I have used the required attribute here on line seven,
>
> **[4:45](https://www.linkedin.com/learning/css-selectors-2/form-controls-required-and-optional-enabled-and-disabled?u=76281980&t=285)** we saw how that worked. Well, I have the disabled attribute that's set here on line 11. So let's see how this works as well. If I ask for disabled fields, this is going to put a box around the email blank because we have set that to be disabled with the disabled attribute here on line 11. If I ask which ones are enabled, then it will select basically all of the other elements that are here on the page. So basically everything else is currently enabled. So once again, this is not useful necessarily for programming purposes. You may be able to do something with JavaScript and use this as an attribute selector for doing something with your code, but this is not building in any kind of error-checking or checking for enabled and disabled fields programmatically speaking. This is really oriented towards accessibility and towards styling. So be aware that this exists, it may help you in styling your forms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3), [Forms](../../Skills/Web%20Development/Forms.md) (2)
> **Env Vars:** html (5), css (2)
> **UI Navigation:** dropdown (2), checkbox (2)
> **Definitions:** is a  (4)
> **Prerequisites:** before we start (1), required to (1)
> **Warnings:** be aware (1)
> **Speakers:** - when (1)

#### [Form controls: :read-only and :read-write](https://www.linkedin.com/learning/css-selectors-2/form-controls-read-only-and-read-write?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-selectors-2/form-controls-read-only-and-read-write?u=76281980&t=1)** - [Instructor] Next up, let's look at the read only and read write CSS sudo classes. Read only is about the information on your page that's well, read only. Read write is about the information that can be changed on your page. Looking at this page, you may think you know what's read only and what's read write but let's dig into it a little more because it's a little more complex than you might think. First, let's look at our [HTML](../../Skills/Web%20Development/HTML.md). Here on line four in the HTML, this paragraph has the content editable attribute set. And this indicates that the paragraph may be changed on the page. Those changes aren't saved, and you're going to need something in order to make those changes permanent. But just to show you, I changed the text. So I just clicked right there inside of the display area and typed something new in that particular paragraph. Notice the HTML doesn't change but the display value here on the page has changed. Likewise, down here on line 40, you'll see that we have a text area which has set to read only. Normally, you can type in a text area box, but with the read only attribute set, it's displaying the content but not anything that can be changed. So if I type inside the box here, all I can do is highlight the text. I can't add anything there on the page.
>
> **[1:34](https://www.linkedin.com/learning/css-selectors-2/form-controls-read-only-and-read-write?u=76281980&t=94)** I would have to add here, adding things, in order to actually have that show up inside of the text box. So that text box is read only. These content editable and read only attributes aren't terribly useful in an HTML, CSS only environment. You're definitely going to need [JavaScript](../../Skills/Software%20Development/JavaScript.md) to make these interactive or make these into toggle states, but they are useful for styling purposes. So let's see what happens when we work with those. So let's start with read write, 'cause this one's a little bit easier to understand. I'm going to put in the read write selector and we'll select everything on this page that can be read and written. And I'm going to start with the outline property, two pixels, solid red. And we can also do something like set a background color to yellow. So as you might expect, the fields for your name and the phone number are indeed read write, because this is a form and these are areas where you can type these values in place. Email is not selected because the email field is currently disabled. As you see here, on line 11 in our HTML, that is a disabled field so it is not able to be written to that. And as we already said, the text area is not selected
>
> **[3:07](https://www.linkedin.com/learning/css-selectors-2/form-controls-read-only-and-read-write?u=76281980&t=187)** because we've set that to read only. So this is selecting fields that we can type in and edit the content as well. And that is not just form fields but also any HTML element that has that content editable attribute on it. So what do you think would happen if I change read write to read-only? Think about that for a second and think about what you might expect to be selected in that case. Oh my goodness. Look at my page now. I have just set pretty much everything here on the page to read only. That's because the body element is read only and the divs are read only, the form itself is read only. There is a lot there that is read only, if you think about it. So we need to make our selectors a little bit more specific. So rather than just read only, let's say the form and we'll put a space in between so these are all of the descendants. So now at least, we're not selecting the body anymore but you can see here, we're still probably selecting those divs. We're still selecting a bunch of other things. So let's say form div read only. And that digs us in a little bit further. And this is showing us that the labels are read only. And the email blank here is read only as well as the select. But things that we know are read only are not selected.
>
> **[4:40](https://www.linkedin.com/learning/css-selectors-2/form-controls-read-only-and-read-write?u=76281980&t=280)** So like the text area, or the radio buttons. Those are not selected. Why not? Well, the reason why has to be with specificity in the cascade. Those have some more specific styling on them that are closer to their particular elements inside of the browser style sheet that is beating whatever we put here in the author style sheet. So we're going to need to expand the selector so that we can select more things. So if we said form div read only, which gets some of them, we'll also have to say text area read only. And then we can say something like input and then use our attribute selector with a type of radio. So that would get our radio buttons. And those would be read only. Then we should be able to see truly the elements inside of this form that are read only in a sense that we would actually care about. Yes, it is true that the divs are read only but we really don't care about that so much. We're probably far more interested in what's going on here with the actual fields in this form themselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (6), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** html (6), css (2)
> **CLI Commands:** make (4), sudo (1)
> **Definitions:** is a  (3)
> **UI Navigation:** toggle (1)
> **Speakers:** - [instructor] (1)

#### [Form control states: :indeterminate, :default, :checked](https://www.linkedin.com/learning/css-selectors-2/form-control-states-indeterminate-default-checked?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-selectors-2/form-control-states-indeterminate-default-checked?u=76281980&t=1)** - [Instructor] Although they might not look like it, the form control states of indeterminate, checked, and default, go together. Let's look at how these select different elements on the page. First, let's start with checked because it's fairly straightforward. The checked pseudo-class indicates that something is checked as in the chosen radio button or the check box. Remember that here in our [HTML](../../Skills/Web%20Development/HTML.md), we have used the checked attribute to check our radio button and I've added an extra check box down here on the form. So we have one checkbox that is checked by default and a second check box that is not checked. So let us try that checked pseudo-class and see what happens. So if I say checked. And we'll style it up with an outline of two pixels, solid red, this is going to select our checked items that are here on the page. So that's going to select the checked radio button and the checked check box. And as you know, this is because we have this checked attribute set here. What happens if I change the form and check on a different radio button? Well, that checked value, as far as the browser is concerned, is moving around on the page even though the HTML isn't changing. And that is something you can capture with something like [JavaScript](../../Skills/Software%20Development/JavaScript.md).
>
> **[1:34](https://www.linkedin.com/learning/css-selectors-2/form-control-states-indeterminate-default-checked?u=76281980&t=94)** Likewise, here, with the check boxes on the bottom, depending on which one I have checked off it will apply the appropriate style in that way. Now, what if I wanted to select just the radio buttons or just the check boxes? Well, we can write a style for that, too, using our trusty attribute selectors. So we could say our type is checkbox, checked. So when our check boxes are checked, we could say something like, outline 10 pixels, double purple. And so now that check box there for, "I agree to terms and conditions" has got a really big purple border on it which is different than the more subtle red border on the radio button. Next let's look at the default pseudo-class for styling which will also indicate the selection of these inputs but with a twist. Here in my CSS, I'm going to comment out the checked part here. And now I'm going to add this new default pseudo-class. And we are going to set this up to have an outline style of five pixels dotted green. So this is going to select our checked elements just as we just saw with a checked pseudo-class but it also selects the Submit button. Why is that?
>
> **[3:07](https://www.linkedin.com/learning/css-selectors-2/form-control-states-indeterminate-default-checked?u=76281980&t=187)** Because the first button element in a form with a type of Submit is considered the default. If there's multiple buttons with no type of Submit present, then the first button will usually get the default state. So let's just test that really quickly. If I go up here into my HTML, I have a button right here with a type of Submit. I'm just going to copy that code. And I am going to put a second Submit button right here next to it. So the first one is the one that's selected not the second one. And if I change this to let's say a Reset button, not that I'm recommending this because users really hate this. But let's just say we had a Reset button here, as well. Even though the Reset button is first, the Submit button is selected as the default button because it is the one that has that value of Submit associated with it. So that's the difference between default and checked. Finally, let's look at indeterminate. There is an indeterminate state for radio buttons and check boxes. As you know, radio buttons are either checked or they're unchecked. However, when they're present in a group, the group may have a selection available or it may be indeterminate, as in no buttons are checked anywhere in that group. So let's see how that works. So I am going to add to this an indeterminate style and let's just comment out the default here.
>
> **[4:46](https://www.linkedin.com/learning/css-selectors-2/form-control-states-indeterminate-default-checked?u=76281980&t=286)** And for this indeterminate style, I am going to say the outline will be two pixels, solid, deep pink. Notice that nothing is selected by default. And that is because our radio button group has one of these buttons that is selected. So it is checked. The value of Morning is checked. The value of Mid-day and Night is unchecked, it's not checked. But if I go back to my radio button group here and I remove the attribute of checked from Morning. So none of these are checked by default and I haven't selected something on the page. Then the indeterminate state comes into effect. And so now all three of the radio buttons are selected because we haven't made a choice within that radio group. The moment I choose something within that radio group that is no longer the case and that selection will go away. Now, check boxes also have an indeterminate state but unfortunately it's not really super useful. This state can only be set with JavaScript. Check boxes are usually designed with two values in mind like true and false or checked and unchecked. So a third value typically isn't needed with a check box but it is available, and you'll need to use JavaScript in order to access it. So those are the differences then between checked, default, and indeterminate. A checked value simply is checked or unchecked.
>
> **[6:21](https://www.linkedin.com/learning/css-selectors-2/form-control-states-indeterminate-default-checked?u=76281980&t=381)** The default value is something that is often checked on the page by default, but it also refers to the buttons that have to submit the form. Those also have a default value. And indeterminate has to do with radio groups that don't have a checked button on them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (3)
> **Env Vars:** html (3), css (1)
> **UI Navigation:** checkbox (2), select the (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Text fields: :autofill, :placeholder-shown](https://www.linkedin.com/learning/css-selectors-2/text-fields-autofill-placeholder-shown?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/css-selectors-2/text-fields-autofill-placeholder-shown?u=76281980&t=2)** - [Instructor] Next up, let's explore autofill and placeholder shown. First, we need to get some of this information in our [HTML](../../Skills/Web%20Development/HTML.md), so let's start there. I made a few modifications to the HTML in this form already, first here, on line number 10, you'll notice that I have added auto complete equals name. This attribute indicates what kind of information we want in this field. The browser often makes a guess at the data, but we can more finely tune it. For now, I've asked for name, which is going to gimme the first and last names in this field. Be sure to check the docs for all of the auto complete possible values as there are several dozen, and just to demonstrate this for you, when I click inside of the name field, you'll see that I get the auto complete option here, for this field. It's asking for my name and it will show my first and last name here in the name field, and it also happens to be that it's filling in my email address and my phone number, probably because some form somewhere on the web I filled out that had that combination of information and the browser has remembered it. Now, just to show you, there are lots of different values here. This is in MDN. This is the auto complete attribute documentation. I gave you a link in the head of the HTML in that code pen. And you can see here that there are a bunch of values. The first one that you may be interested in is the off value and the off value means that auto complete does not come up.
>
> **[1:41](https://www.linkedin.com/learning/css-selectors-2/text-fields-autofill-placeholder-shown?u=76281980&t=101)** There may be reasons that you want to do that. Notice that there are notes about security and such with that, but off is how you would turn that off if you wanted it off for your form, and of course on would turn it on, but just as an example, let's just look at the name portion of this. So, name, as we saw is first and last name, but you can also have your given name, the first name. You can have the family name, which is the last name. You've got various honorifics in terms of prefixes and suffixes and nicknames. You've got email addresses and usernames, and we can go on and on here. We get down to credit card information. This is where it will access whatever credit card information you may have saved inside of your browser. So, that will access that way. You can access all kinds of information about birth dates and as you see here, it just goes on and on and on about what can be autofilled. So, there are also some examples here in the MDN documentation. I'm just going to focus on name because that's a pretty easy one that's pretty straightforward. Just to finish up really quickly with the other HTML changes that I made here, notice on line 14, previously, I had the email field as disabled. I have enabled it simply by removing the disabled attribute that was here before. And then, finally, for the phone number, I added a placeholder. So, see here that we have a placeholder with a format asking for a format for a phone number. Clearly, it's looking for a US based phone number and that is what is going on here in the placeholder. So, now, let's go through how we can use auto complete
>
> **[3:19](https://www.linkedin.com/learning/css-selectors-2/text-fields-autofill-placeholder-shown?u=76281980&t=199)** and placeholder for styling purposes. And so, to start with, let's do placeholder because that is a pretty simple one. The pseudo class is placeholder hyphen shown. In other words, if the placeholder is still here, like somebody has forgotten to fill it in, maybe they looked at that field and there was placeholder text in place and they didn't realize that they should be filling in their own information. That's what this placeholder shown thing is. So, we could set an outline on it of two pixels, solid red and a background color of yellow. And so, that, of course, is going to highlight our phone number field here. But if I click in the phone number box and I start to type in some kind of number, maybe something from auto complete, notice that now that there is information in the placeholder box, that the styling for placeholder shown no longer applies. So, if I get rid of that particular number, then we'll go back to that red and yellow styling that I put in place. So, that's straightforward. Let's try autofill next. So, this is going to indicate which fields or fields were autofilled by the browser. And one of the things you might have noticed already is when I choose something from my autofill list, this automatically makes my fields blue in background,
>
> **[4:53](https://www.linkedin.com/learning/css-selectors-2/text-fields-autofill-placeholder-shown?u=76281980&t=293)** here inside of my Chrome browser for Mac. I've tried this on Firefox as well, and in Firefox, these are yellow. So, the color of the background may vary depending on your browser. Maybe it has no color at all. Doesn't seem like we have any kind of consistent colors. So, we can indicate what fields have been autofilled by simply adding autofill. And then, we can say our outline is going to be five pixels, dotted, hot pink. And so, currently, none of the fields have been autofilled. Let's combine this with changing some of the values on our form field. So, right now our auto complete was set to name. And as you saw here, this gives me the option of filling in Jen Kramer. If I change this to say, given name, given hyphen name, now when I click on that list here, I have the option of just Jen. And if I change it to family name and I click on this blank, now I have the option of Kramer. So, it just depends on what you have here for auto complete as to what will show up. So, let's just say, I want just my last name. When I choose that here, this is going to fill in, in this case, my email and my phone number as well, and now I also have that five pixel dotted, hot pink outline around those fields to indicate that they were autofilled. So, that is what the autofill styling does for you
>
> **[6:27](https://www.linkedin.com/learning/css-selectors-2/text-fields-autofill-placeholder-shown?u=76281980&t=387)** here in your browser. You will find that it is hard to change the background color of the autofill fields. So, if I wanted to say my background, hyphen color is something like yellow, it will actually not work here, in this particular case, it will still be blue. And that is because the browser styling is very specific in this regard, and it's becomes difficult to override it inside of the cascade, but that is what you need here for styling any of your auto field fields and for any fields that still have a placeholder shown inside of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4)
> **Env Vars:** html (4), mdn (2)
> **Cross-References:** as we saw (1), go back to (1), as you saw (1)
> **Documentation:** mdn (2), the docs (1)
> **Definitions:** means that (1), is a  (1), in other words (1)
> **Tools:** firefox (2)
> **UI Navigation:** click on (2)
> **CLI Commands:** find (1)

#### [Error checking: :valid, :invalid, :in-range, :out-of-range](https://www.linkedin.com/learning/css-selectors-2/error-checking-valid-invalid-in-range-out-of-range?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/css-selectors-2/error-checking-valid-invalid-in-range-out-of-range?u=76281980&t=2)** - [Instructor] To wrap up our section, mostly on [Forms](../../Skills/Web%20Development/Forms.md), let's look at some error checking. Now, spoiler alert. There is no true error checking with only [HTML](../../Skills/Web%20Development/HTML.md) and CSS. Error checking on forms must come from [JavaScript](../../Skills/Software%20Development/JavaScript.md) before submission, or you can check errors server side after submission with a variety of approaches. Or you can do both. We however, will do no real error checking with this form. However, just because we're not submitting data, or really checking for errors doesn't mean we can't apply styling. HTML and CSS may indeed check to see if requirements are met in a very limited way. In other words, HTML and CSS may indicate that requirements are met or not, but it will not enforce meeting those requirements, like preventing a form submission. It is enough to apply some styling, but it's not enough for true form validation. So with those caveats out of the way, let's look at valid and invalid. The easiest thing to do is to apply these styles to the page. We'll start with valid. If we put a five-pixel, solid green outline around valid elements, you'll see here that most these elements are considered to be valid. The one that is not is your name. Why? Well remember that it is required, and it currently has no value. That probably makes it invalid. So let's add an invalid style to this.
>
> **[1:36](https://www.linkedin.com/learning/css-selectors-2/error-checking-valid-invalid-in-range-out-of-range?u=76281980&t=96)** And we'll set its outline to five pixels, dotted red.
>
> **[1:44](https://www.linkedin.com/learning/css-selectors-2/error-checking-valid-invalid-in-range-out-of-range?u=76281980&t=104)** And interestingly, we get two outlines here. We get one that we thought we might get around the name field because of course, it has no value so it's currently red. But why is there a red outline here around the form? Well, the form has not been filled out correctly because the required field has not been completed. And that is why the form is currently invalid as well. If I start to put my name in here, then it becomes a valid field, and the form itself is valid as well. In theory, we could submit this. But let's explore a little bit further though. My email blank is collecting a type of email, which means that the browser is looking for something in an email format. So if I start to enter something like 12345, it's going to indicate that this is a bad email address because of course, that doesn't look like an email address. But if I put in an @ sign, and another character, let's say the number one, then it is perfectly happy. And so this must be what it's looking at in terms of validation. It's got an @ sign. It's got at least one character after the @, so it's good enough. It must be an email address, even though clearly, that is not an email address. So it can test for that type of thing there. The phone number field will not validate because there are so many different formats for phone numbers around the world. So no matter what I put in here in the phone number field, including letters, it's going to be just fine
>
> **[3:21](https://www.linkedin.com/learning/css-selectors-2/error-checking-valid-invalid-in-range-out-of-range?u=76281980&t=201)** with whatever I have here. Now, the more interesting part is what happens in the field here that I added for this video, which is called, "How many cookies would you like?" "Enter a number between zero and 10." This is a number field. When we scroll on down here, you'll see that I've added a number field. It's an input type of number. And it has the placeholder text there in place. Enter a number between zero and 10. It has a minimum of zero and a max of 10. When we roll our mouse over it here, at least in Chrome, we wind up with these up and down arrows. And if we start incrementing these numbers, it will go up to 10, but no higher. And notice as I hit the down arrows, it will go down to zero, but no lower. Without the min and max values on the number field, you could potentially scroll outside of that range. However, this does not prevent you from putting in a number that you type in place. So here, I put in the number 20. I'd like 20 cookies please. And that is invalid because, of course, it is out of range. So we need to make sure that our numbers stay in range, like five. So that is considered to be valid. But what if I said 5.5? Well, that is considered to be invalid, but it is within range, isn't it? That is within the range that I gave it. So it is possible for something to be in the range, but invalid in terms of error checking.
>
> **[4:59](https://www.linkedin.com/learning/css-selectors-2/error-checking-valid-invalid-in-range-out-of-range?u=76281980&t=299)** And fortunately, we have some additional pseudo-classes for looking at that. So let's add to our list of pseudo-classes here beyond just valid and invalid. Let's also look at in-range and out-of-range. So if it's in-range, we want to have an outline of three pixels dashed brown.
>
> **[5:24](https://www.linkedin.com/learning/css-selectors-2/error-checking-valid-invalid-in-range-out-of-range?u=76281980&t=324)** And if it is out-of-range, then we're going to give it an outline of 10 pixels, double navy. Okay. So currently, we have a situation where we have a field that is invalid, but in-range. And since we're working with just the outline property here because in range comes later in the document than invalid, We have the three-pixel, dashed brown property being applied to this. So if I switch this back to five, this is currently in-range. It's also valid. It won't turn into a green outline because of course, valid occurs earlier here in the style sheet. But if I was to change this to 50, that's of course, out of range, and now I get the styling appropriately. So to see that both of these things are styled at the same time, so here within invalid, I could add something like a background color, ground color of yellow. And so this would become additive. Right now, the entire form is invalid. So that is actually not very helpful, but we could make this a bit more specific by putting an input in front of it. So just the field that is invalid will wind up taking on these characteristics. So currently, this is out-of-range and it's invalid. This is now a more specific selector.
>
> **[7:00](https://www.linkedin.com/learning/css-selectors-2/error-checking-valid-invalid-in-range-out-of-range?u=76281980&t=420)** Because this has the input with it, in addition to the pseudo-class, whereas out-of-range has only the pseudo-class. So now we have to sort of even these up. So I'm going to put an input in front of out-of-range, and an input in front of in-range, and an input in front of valid. Now we're not looking at the form anymore. We're just pretty much looking at this field. So the reason that the number 50 makes the background yellow with the double blue border on it is because it is invalid. That gives us yellow, and it's out of range, which gives us the outline. And if I go to a valid number, that yellow background goes away. So it is presumably valid and it is also in-range. So you can combine these selectors to make sure that you understand exactly the various types of properties that you have going on inside of your form, at least from an HTML and CSS perspective. This may be particularly helpful if you're debugging something. These may be really useful classes for that, but of course, you could use them in all types of different ways when working with your forms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [Forms](../../Skills/Web%20Development/Forms.md) (3), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** html (4), css (4)
> **Definitions:** is a  (2), in other words (1), means that (1), is called (1)
> **CLI Commands:** make (3)
> **Versions:** 5.5 (1)
> **Cross-References:** later in (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 7. Additional pseudo-classes, pseudo-elements, and the universal selector

[↑ Back to Table of Contents](#table-of-contents)

#### [Comparing is() and where()](https://www.linkedin.com/learning/css-selectors-2/comparing-is-and-where?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/css-selectors-2/comparing-is-and-where?u=76281980&t=2)** - [Instructor] Next, we have some hot off the presses selectors that are now widely supported by modern browsers. Let's start by looking at is and where. These two pseudo-classes are closely related, but they differ in specificity. So as before we get into the pseudo-classes, let's start with our [HTML](../../Skills/Web%20Development/HTML.md). If you take a look at what we have going on here for our HTML, we have an h1 here outside of everything, just the very top of the document. We then have an article. Inside of this article, we have an h2, a paragraph with a class of intro, an h3, and another paragraph after that. And if you just sort of fold this up in place, that's the article. We have a section that follows that same pattern. We have h2 and h3, and we have two paragraphs. And we have an aside, h2, h3, and a couple of paragraphs. So the HTML is pretty similar for all of these parts of the web page. And you can see that they're spelled out here in this document. Now, let's revisit groups of selectors. So here in this document, let's say I want to select all h1, h2, and h3 elements to have a font-family of Arial. So I would say something like h1, h2, h3, and then I would say font-family of Arial, Helvetica, sans-serif. And shockingly, all of them turned Arial. So that works great.
>
> **[1:35](https://www.linkedin.com/learning/css-selectors-2/comparing-is-and-where?u=76281980&t=95)** Now I'd like to set the h2 and h3 in the article to have a green underline. So then I would normally write this type of selector, article h2, article h3, and then we'd do something, like border-bottom, 2px solid green. And we'd wind up with an underline under the h2 and the h3. And that's great. If that's all, as far as you're going to go, you are in good shape here. But what happens as things expand, and you want to add an aside to this? What happens if you want to add other selectors? Well, remember that, of course, you can't just simply send something like h1, .intro because that select all of the h1s and all of the intros in the document. We'd have to continue to be specific with article. So the article H1, we don't actually have one of those. An article intro, we do have one of those. And if I want to apply the styling now to the aside, then I have to put in all of those as well. This gets really, really long. It's a pain in the neck to read. And if I make a mistake in my code, then we really have an issue. So for example, let's just say, I said article h3 pseudoclass. In other words, we want to select all h3s
>
> **[3:10](https://www.linkedin.com/learning/css-selectors-2/comparing-is-and-where?u=76281980&t=190)** with a pseudo-class of pseudoclass, that doesn't exist. And you'll notice here that my styling has just completely fallen apart. Even though article h2, article h3, and article h1 are all valid selectors, because there is no pseudo-class of pseudoclass, the whole thing fails, and we get no styling out of that particular item on the page. So you are unfamiliar with CSS, and you make a lot of errors like this, that could become very frustrating for you. Why isn't this working? Well, you wrote some bad code, that's why it's not working. But it should work, it seems like it should work for the things that are crafted correctly, but it just doesn't. So this is the problem that is and where wind up solving for us. In this particular case, let's say, I just want to select those headings. Once again, inside of my article, I could say article, and then the is pseudo-class, it has parentheses, and then I can just list h1, h2, and h3. So this is going to select all h1, h2, and h3s inside of the article. Remember, our h1 is not in the article, so it isn't applied. And it will put those border-bottoms in here for us automatically. We can add to this classes, of course. We could say intro, that will add there as well. So this will also honor any mistakes we make in our code.
>
> **[4:46](https://www.linkedin.com/learning/css-selectors-2/comparing-is-and-where?u=76281980&t=286)** So if I had, again, my h3 with this pseudoclass on it, that of course we know doesn't work, but notice that my styling stays intact, even though that is just a bogus thing. It doesn't mean anything at all. We can also expand on this too. What if I decide that I want to have this same kind of styling applied to the aside? Well, then here on my article, I can add to this, is and I could say, article, aside.
>
> **[5:22](https://www.linkedin.com/learning/css-selectors-2/comparing-is-and-where?u=76281980&t=322)** And then is, all of these other things. So now, it's going to apply my green border to the h2, and the h3, and the aside because that is what is there. It doesn't have an intro. And, of course, it doesn't have a pseudo-class of pseudoclass. So that is the problem that the is selector solves. Anytime you have these big groups of things, it will very easily make this more readable, and it will come up with all of the combinations for you automatically, and apply them here in your document. So now, where does where come into this? It's in the specificity. I cover specificity and detail in my course, CSS, inheritance, specificity, and the cascade, which is available in the library. But you know, a little bit about this already. You know that ids beat classes, and classes beat type or element selectors, and that kind of thing. Is and where are pseudo-classes, but they are exceptions to the calculation process. In this case, we don't count is and where themselves in the specificity calculation. For is, we count the selector with the highest specificity within the parenthesis. In this case, we count the article or the aside, not both, in the first argument, and the h3 pseudo-class in the second argument, because these two have the highest specificity.
>
> **[6:57](https://www.linkedin.com/learning/css-selectors-2/comparing-is-and-where?u=76281980&t=417)** This is despite the pseudoclass, not even existing. And so the specificity number for this will wind up being zero, 'cause there's no IDs, one, because there's one pseudo-class, and two, because we're talking about two elements, the h3 here, and either the article or aside over here. Now, with where, it's counted like the universal selector, and that there is no specificity anywhere. Don't count the where pseudo-class itself, and don't count anything inside of the parenthesis. So let's see that in action here. Here at the top, I have h1, h2, and h3, and this has a specificity of 0-0-1. One element, right? We just have a group of them, but it's one element. This has a higher specificity here coming second. To this, I am going to add a font-family of Courier, monospace. And so now that is applying to all of these items with the border-bottom, it's overriding the styling that came before it in the document, which also has a lower specificity. But now, if I change, let's say, this second one here from is to where, nothing is going to change on the page just yet
>
> **[8:30](https://www.linkedin.com/learning/css-selectors-2/comparing-is-and-where?u=76281980&t=510)** because now we have equal specificity between these two. This would wind up being, we're going to ignore everything here inside of where, we only pay attention to what's in is. And so the specificity here is now 0-0-1. And so now we play into the order of the cascade. So this is Courier because it comes second. If I took this initial declaration here and put it after, we'll wind up with Arial, applying to all of the things here on the page, except for my intro, which takes on the Courier font. So we know that that's working, but it's being overridden because Arial comes later in the document for the various headings. And if we change this even further to where for both of these, now it's specificity would be 0-0-0. And the styling that is applying here is because the intro class has no inherent styling to it, so the courier style is going to take precedence over times, which is the default browser style. And the border-bottom goes on all of these things because we don't have it called out anywhere in our browser style sheet or in our author style sheet, so we see it applied here immediately. So this is how you can wind up manipulating specificity using is and where, in addition to solving this problem of these group selectors. One of the exciting possibilities for working with where
>
> **[10:03](https://www.linkedin.com/learning/css-selectors-2/comparing-is-and-where?u=76281980&t=603)** is any sort of defaults that you want to set at the top of your document, you can set them with very, very low specificity using the wear selector, that may wind up being really helpful for various types of [Design Systems](../../Skills/Web%20Development/Design%20Systems.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (3), [Design Systems](../../Skills/Web%20Development/Design%20Systems.md) (1)
> **Env Vars:** html (3), css (2)
> **CLI Commands:** make (4)
> **Cross-References:** later in (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Understanding :not](https://www.linkedin.com/learning/css-selectors-2/understanding-not?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/understanding-not?u=76281980&t=0)** - [Instructor] The not sudo class is super, super handy. It's going to allow you to select things which do not meet a certain criteria. For example, here on this web page, you'll notice that we have two images. One of these images is coded correctly in the [HTML](../../Skills/Web%20Development/HTML.md) in that it has its alt tag. But the second image does not have its alt tag. So let's say you're debugging your site and you need to quickly identify which of your images does not have an alt tag. We can write a wonderful selector to do that. In this case we're going to say, for all of the image tags, let's not select those that are missing. Basically we're saying the ones that do not have the alt attribute. We don't need to test for a value, we just want to test for a presence or absence of that alt attribute. Five pixels, solid orange border around those images. And if we go ahead and do that, you'll see here we have selected the one kitten picture that is indeed missing its alt tag. So this is very helpful for debugging, now I know which ones I need to go through and go back and add alt tags to. But there's other ways that you can use this not selector as well. For example if you have some form fields that are not disabled or links that do not go off site, or perhaps a paragraph that does not have a certain class.
>
> **[1:34](https://www.linkedin.com/learning/css-selectors-2/understanding-not?u=76281980&t=94)** So you'll notice here in the second part of my HTML I have a series of paragraphs that most of them have a class of not demo, but one of these paragraphs does not have that particular class. So we can simply write a selector to do that. So once again, this is going to be p:not and then inside of the parenthesis, you can put in whatever you want to test for. And it's basically going to test for the presence or absence of that thing. You can write a full selector in here. In the first example there I used an attribute selector. You could write a complex descendant selector or any of the parent child selectors, or anything like this. Just a plain old class, notdemo. And what do we want to do with those, color red. And so the one paragraph that does not have that class of notdemo winds up being red. All of the other paragraphs do not take that particular style. So not might look a little bit confusing at first, remember it's the opposite of whatever it is that you're selecting, but again, it can be really helpful for debugging purposes, it can also be helpful for selecting one of those sort of edge cases where you want something that does not meet a certain criteria.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2)
> **Analogies:** for example (2), picture (1)
> **Env Vars:** html (2)
> **CLI Commands:** sudo (1)
> **Speakers:** - [instructor] (1)

#### [:has()](https://www.linkedin.com/learning/css-selectors-2/has?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/css-selectors-2/has?u=76281980&t=1)** - [Instructor] Has is the very first CSS selector that has more to do with parents than with children. It's a useful selector for looking for patterns in code and then styling appropriately. Here I have a very simple page with a list of places you might want to visit the next time you're in the Boston area, where I live. I've applied some very simple styling here to this list but imagine this was part of a larger page, we have this list, but the formatting isn't awesome. Particularly if the page is really wide, we have a lot of room available on the right side of the screen, wouldn't it be nice if we could take advantage of it? There are things that we can do with media queries and screen sizes. For example, if the screen is more than a thousand pixels wide let's set this up to have three columns of bullets, but what happens as the list grows or shrinks? What if I wind up with only a few bullets? There's still going to go to three columns because of my media query, what we really need is a way to make formatting conditional on the number of bullets, not the width of the screen. We can also do both if the screen is so wide and we have some number of bullets then make them into some number of columns. So let's see how that works. I'm going to revisit the nth-child selector we learned about earlier. And if I said li nth-child of nine, color red,
>
> **[1:41](https://www.linkedin.com/learning/css-selectors-2/has?u=76281980&t=101)** as we have talked about before it's kind of a silly selector. Why on earth would we want to make the ninth bullet red? How do we know what's there? How do we know that this is an important thing to make red? But that selector, while not useful in that format becomes super helpful when we combine it with has. So what I'm going to do now is I'm going to say if the ul has an li nth-child of nine,
>
> **[2:14](https://www.linkedin.com/learning/css-selectors-2/has?u=76281980&t=134)** then make the color red, now, all of these are red. So what's going on here? Well, what has happened is that the ul is gotten a property here, the color of red, and it's inherited in all of the bullet points that are here. If I add a border to this, a border of let's say two pixels, solid blue, you'll see that that goes all the way around that particular list and so what's happening here is we've selected the ul, we've asked for, if this UL happens to have a ninth child then we want all of the bullets to be red and put a border on it. Okay, well, that's not, again, not terribly a useful thing to do, but we could change our property here and make this way more useful. So let us change these properties and instead let's use the columns property and say two. So in other words, if there are at least nine children, make two columns. That becomes super helpful now, right? Because now we know we have some number, it makes sense to turn them into columns or we could change this around. We could say, let's say we have six children, we're going to have two columns but if we have nine children, let's have three. So we can just copy this styling rule here and paste it after, change this to nine, then we want to have three columns.
>
> **[3:49](https://www.linkedin.com/learning/css-selectors-2/has?u=76281980&t=229)** And so it just reformats for it, isn't that great? So it's making better use of our page and the space that's available to us. And that's great when our window is really wide like this but of course this doesn't have a media query on it, so as the screen gets narrow, we are not changing the number of columns because we are hinging on how many bullets we have generating how many columns we are producing and so that's not ideal either. We'd probably need to add some break points to this, so let's add a few media queries to really polish this up. So if I said @media min-width of 600px,
>
> **[4:37](https://www.linkedin.com/learning/css-selectors-2/has?u=76281980&t=277)** so if it's at least 600 pixels wide then we're going to make it have two columns, if there's at least six items here in that particular list and then @media min-width of 900px,
>
> **[5:01](https://www.linkedin.com/learning/css-selectors-2/has?u=76281980&t=301)** so if we're at least 900 pixels wide then we're going to have three columns. So both conditions have to be met before we wind up with these columns here in place. All right, and let me just format that real quick. Here's the formatting. So now what we have is when we're in a small screen, here we are below 600 pixels, you can see that we have a single column of bullet points and as I get larger past 600, but before 900 I wind up with two columns of bullet points and then when I get to a really big screen at 900 pixels or larger then I wind up with three columns of bullet points. So this is a pretty incredible trick when you think about it, we don't have to use flex box, we don't have to use grid. It's a very, very clean solution. We're just working with the has sudo class and we're working with a couple of media queries to make this happen. So what's the downside? Well, as of this recording, the has sudo class is supported in Safari and that is all at the moment. I have this working in Chrome because there is a flag you can set in Chrome for [Web Development](../../Topics/Web%20Development.md) and it will allow some of these experimental features to run in it. So be sure you turn on that Chrome flag in order to see has in action if you are watching this close to July of 2022. We expect that this is going to wind up rolling out
>
> **[6:38](https://www.linkedin.com/learning/css-selectors-2/has?u=76281980&t=398)** hopefully sometime this year to all of the other browsers, it's worth noting the power of this approach here when you're combining has with your media queries. So now we can do tests, not only on screen resolutions with media queries, but we can also do tests on what kind of content do we have inside of our webpages which can trigger various styling properties as well. So this is a really powerful methodology, it's going to impact a lot with responsive design going forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Development](../../Topics/Web%20Development.md) (1)
> **CLI Commands:** make (9), sudo (2)
> **Definitions:** is a  (4), is an  (1), in other words (1)
> **Analogies:** imagine (1), for example (1)
> **Env Vars:** css (1)
> **Tools:** safari (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Meet the pseudo-elements ::before, ::after, ::first-line, ::first-letter](https://www.linkedin.com/learning/css-selectors-2/meet-the-pseudo-elements-before-after-first-line-first-letter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/meet-the-pseudo-elements-before-after-first-line-first-letter?u=76281980&t=0)** - [Instructor] Pseudo-elements look like pseudo-classes but they're much lower in specificity, more like an [HTML](../../Skills/Web%20Development/HTML.md) element selector. They change a part of a selected element but not the whole element as most selectors do. Some pseudo-elements are written in two [Forms](../../Skills/Web%20Development/Forms.md) of syntax and specifically the four I cover here are affected by this. There are pseudo-elements that were introduced in CSS two where they were written with a single colon so they look like pseudo-classes. But in CSS three they changed the pseudo-element syntax to two colons so you don't have to remember whether a pseudo-element supports one or two colons. Just be safe and write 'em all with two colons going forward. There are several pseudo-elements available to you but I'm going to focus on the four with the best support and that are probably the most used. And so the first one I want to talk about is the first letter construct. And so first letter will take the first letter, say of this paragraph, and style it in some special way. And the effect that you get is something like the opening chapter of a book where you have the first letter of the first paragraph in some kind of wacky style. And so you can replicate that here on a webpage with this. So here's a way that you might write such a style. We'd say for the paragraph, for the first of type, remember that in this case I have an H two and then a paragraph so your paragraph may not be the first child.
>
> **[1:33](https://www.linkedin.com/learning/css-selectors-2/meet-the-pseudo-elements-before-after-first-line-first-letter?u=76281980&t=93)** First of type is probably a better way to select it. And then the first letter we want to do some kind of crazy styling. So what I'm going to do here is I'll set my font size to 5 rems. I'll float it left so that way it will wrap around here a little bit. We'll give it a little bit of margin. And then I'm going to set this font family to a [Google](../../Glossary/Service/Google.md) font that I picked out and linked to up here on the top called Faster One.
>
> **[2:18](https://www.linkedin.com/learning/css-selectors-2/meet-the-pseudo-elements-before-after-first-line-first-letter?u=76281980&t=138)** And I can make my font style italic, give it even more of that racing tilt. And then give it a color. And oh wait, I just made a mistake here on line 10. I've got a space where I shouldn't. Let's fix that. Oh, so much better. So there we go, a very cool letter starting off my text here in this particular paragraph. So that's a really nice effect that you can put to use in perhaps long passages of text on your website. Now, this is very flexible. This case we've applied it to just the first letter of the document, probably where it makes the most sense. We could also change this to the first line of the document and, as you see here, we have a really wild sort of effect. Probably don't need the float here anymore. There's probably some other tweaks that we can make here in order to make that effective. But one of the important things is that this is very flexible, the first line of the document. So I can change my max width here. Right now it's set to 900 pixels. If I change it to 600 or even 300 this is going to reformat accordingly. So it's always the first line regardless of the screen size. So I'll go ahead and put it back to 900. A second really important pseudo-element is the before and after pseudo-elements. In the Chateau Dame for a given HTML tag you can select that just the way we've been talking about throughout this course. But there's actually a little bit of element before and after the actual element
>
> **[3:51](https://www.linkedin.com/learning/css-selectors-2/meet-the-pseudo-elements-before-after-first-line-first-letter?u=76281980&t=231)** that's usually accessed through [JavaScript](../../Skills/Software%20Development/JavaScript.md). but you can also access through this particular pseudo-element. So in this case, I showed this trick a little bit earlier but I'll repeat it here, let's say that for any of the links in my document here, that link to a PDF, I'd like to identify those and put the letters PDF after that particular link just so that people know when they click on it they're going to wind up looking at a PDF. I don't know about you but I get really annoyed when I'm on my phone and I click a link and it starts to download a PDF. If I knew it was a PDF I would've never clicked on it. So a way you can go about doing that would simply be to say the H ref attribute selector and if it's going to end with PDF or dot PDF and then double colon after. We can simply say add the content of probably a space and then PDF, just like that. And so now your read more link has that PDF text right after it. Obviously if you wanted to change after to before shockingly that PDF would show up first before the read more link. Probably want to put a space there. So these are the pseudo-elements. Remember that the pseudo-elements are changing a part of an existing element, not the entire element but part of that existing element, either the first letter of the first line or before and after.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Google](../../Glossary/Service/Google.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** pdf (10), html (2), css (2)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [*, the universal selector](https://www.linkedin.com/learning/css-selectors-2/the-universal-selector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/the-universal-selector?u=76281980&t=0)** - [Instructor] Finally, neither a pseudo class nor a pseudo element, we have the universal selector. It's designated by a star. And as that star suggests, it's going to select everything matching a certain criteria. So, one of the things that I have done through the years is I've often set up the body tag here with some default styling for the document. Like a font family or a font size, those kinds of things. One of the things you might be tempted to do immediately is to change your body tag to the star selector. And boom, absolutely nothing changes here in the way this webpage looks. It has simply selected everything in the document and applied those font families. So what would be the difference between using the body tag and using the star tag? Well the problem is, you're using the wrong declaration here for testing the star value. So the difference is, in the case of the body tag, everything is inheriting that font family. But in the case of the star, you are explicitly declaring this font family on every element on the document. And a great way to think about this is, let me change this back to body, and let's just add a border to this. So border, five pixels solid red. So there's my red border that goes all the way around my body. You only see that once because border is a property that is not inherited by it's children. But if I change this body tag now to a star,
>
> **[1:37](https://www.linkedin.com/learning/css-selectors-2/the-universal-selector?u=76281980&t=97)** you now see a border around every single element on the webpage because you said every element should have a border. So it's explicitly declared in this way. And that is the big difference between the body tag versus the universal selector. So this kind of situation I recommend sticking with the body tag. However, the universal selector can be super helpful when we take a look at the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of my code here. So here I have a container and as you see in my [HTML](../../Skills/Web%20Development/HTML.md) the container goes all the way around the outside of this document where you'd expect it to be. I've set this up to display as grid and I've set it up with three columns. So there they are on the page. Now what if I wanted to give all of these columns a background color? And do it really quickly and easily. Well if you take a look here, I have my div with a class of container, then I have a div with a bunch of stuff in it, and after that div ends here on line seven then I have just two paragraphs that are responsible for these other columns. Remember with grid, the key to understanding grid is parents and children, the grid container and the grid items and whatever those children are of where you declare the grid, they become the big containers for your columns and your grid. So I could write a really fancy selector here to give everything a background color and not add a thing to my HTML. All I'd have to say is simply is .container and then use the parent child selector
>
> **[3:09](https://www.linkedin.com/learning/css-selectors-2/the-universal-selector?u=76281980&t=189)** with the universal selector. Then I could say background color of gold and I could give it some padding, 1rem and maybe I could give it a border radius of 0.5rem. And there you go. You wind up with all of these boxes that are here on this webpage. The weird thing that you're seeing here with the heights might be bothering you a little bit, a lot of that is having to do with the margins that are associated over here on the webpage, especially with this H1 that are not present here with our paragraph or with their image by themselves, and so that's why they are slightly different heights in this particular example. So that is the universal selector and how you can use it in a way that may be proofed to be really helpful in styling your next webpage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 8. Choosing Selectors

[↑ Back to Table of Contents](#table-of-contents)

#### [CSS selectors and browser support](https://www.linkedin.com/learning/css-selectors-2/css-selectors-and-browser-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/css-selectors-and-browser-support?u=76281980&t=0)** - [Instructor] Generally speaking, the selectors I've discussed in this course are well supported by all modern browsers. But what if you need to support an older browser? First of all, you have to determine whether the selector you want to use is in fact supported by the browsers that you need to support. And if you're wondering about that, [caniuse.com](https://caniuse.com) is a great resource for determining what is supported where. As you see on this page, right in the center of the box, at the fine flashing cursor, all you need to do is type in what you're looking for. So if I try the universal selector, for example, this is going to pull up the match to that and then this is, happens to be a CSS 2.1 selector, so a whole bunch of stuff here like first-child, link, visited, active, hover, focus. Bunch of stuff we talked about, the attribute selectors are all covered under CSS 2.1 and as you see here across the board, they are well supported by all of the browsers except for Internet Explorer 6 and since that is from 2001, chances are you are not supporting IE6 anymore. So you're in good shape for those kinds of things. Some of the other selectors are CSS 3, so if we said, for example, the empty selector, which might've been of interest to you, some of these older browsers will have a few more issues. So for example, once again, IE6 is an issue, IE7 and 8, which were released more than 10 years at this point are the problem children in that particular case. But other than that,
>
> **[1:32](https://www.linkedin.com/learning/css-selectors-2/css-selectors-and-browser-support?u=76281980&t=92)** they are well supported by other browsers here. So if you're not familiar with Can I Use, this is a great website for determining what features are supported by which browsers. Combine that with whatever browsers you need to support for your project and then you'll get a really good sense of what kind of CSS you can write and feel pretty good about it being supported.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1)
> **Env Vars:** css (4), ie6 (2), ie7 (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (3)
> **Versions:** 2.1 (2)
> **URLs:** [caniuse.com](https://caniuse.com) (1)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)

#### [Why can't I use CSS classes exclusively? Selectors best practices](https://www.linkedin.com/learning/css-selectors-2/why-can-t-i-use-css-classes-exclusively-selectors-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/why-can-t-i-use-css-classes-exclusively-selectors-best-practices?u=76281980&t=0)** - [Instructor] Now that you know all of these fabulous ways to make selectors, what should you do? Should you try out all of them or should you just throw up classes everywhere you go? It might seem easier especially to a beginner to use classes for all of your styles everywhere. Let's look at some best practices in CSS selector choice. Generally speaking in CSS, less is more. Simple selectors with the least amount of specificity for what you are trying to select is what you want to use. Classes everywhere means cluttering up your [HTML](../../Skills/Web%20Development/HTML.md) with potentially unneeded CSS classes reducing code reusability. And with every selector at the same level of specificity, all of your styles may fight with each other frequently. The big C in CSS stands for Cascade and when combined with inheritance, this is your friend. It makes styling simple, easy to override styles with other options under different conditions. If every selector is the same specificity, such as when everything is styled with the class, it's hard to read a style sheet and under how a given element will look. To make your style sheets more readable, leverage a few of these tips. Start with generic HTML elements to style the base of your document. For example, declare your font family for most of your document in the body tag and override any changes later in the document as needed. Descendant selectors are easy to understand, tremendously powerful and there're the default selector
>
> **[1:34](https://www.linkedin.com/learning/css-selectors-2/why-can-t-i-use-css-classes-exclusively-selectors-best-practices?u=76281980&t=94)** in much of CSS. Use these to fine tune any styling in your document as a first option. Remember the parent-child, general sibling and adjacent sibling selectors is options that can fine tune the more generic descendant selector even further. Pseudo classes help to style states while pseudo elements style within an element. Don't forget about these powerful selectors. In some cases, styling these selectors may save you from having to do more complicated state change programming in [JavaScript](../../Skills/Software%20Development/JavaScript.md). In general, most developers are avoiding IDs for CSS styling these days. IDs are perfectly legitimate attributes for JavaScript, HTML navigation or in form construction but using an ID for CSS purposes is generally not used much these days. Since an ID can only be used once per page, it tends to be limiting for CSS purposes. Furthermore, the increased ID specificity may 'cause interesting bugs and conflicts in your styling. Finally it bears repeating, less is more and keep those selectors simple. Needlessly cluttering a selector with extra HTML elements, classes and so forth just makes the selector overly specific. You want to make sure that that selector is specific enough to select what you want and no more than that. This will make CSS maintenance easier, more straight forward and keep your code simple to read.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (4), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Env Vars:** css (9), html (4)
> **CLI Commands:** make (4)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** later in (1)
> **Definitions:** stands for (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Impact of CSS selectors on performance](https://www.linkedin.com/learning/css-selectors-2/impact-of-css-selectors-on-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/impact-of-css-selectors-on-performance?u=76281980&t=0)** - [Instructor] Finally, you might be wondering about the impact of selectors on performance of your website. There has been some discussion online about how a complicated selector might slow down the performance of your webpage. Fortunately, I'm happy to say that the consensus among those who optimize sites for performance is that CSS selectors aren't really something to worry that much about. The size of your CSS file and its load time is a much greater cause for concern than the execution time of each selector. If you hear about CSS selector performance as a reason to go with all classes in your styling, this is often an excuse for not understanding some of the different types of selectors or how to read them. Encourage your colleague to watch this course so they can come up to speed with the latest selectors.

> [!info]- Semantic Content
>
> **Env Vars:** css (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Additional CSS practice](https://www.linkedin.com/learning/css-selectors-2/additional-css-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-selectors-2/additional-css-practice?u=76281980&t=0)** - [Jen] Hey, this is Jen. Thank you so much for watching this course. I really appreciate you taking the time to learn more about CSS selectors. If you'd like to learn more, my two favorite CSS websites are the Mozilla developer network and CSS-Tricks. You can always count on those two resources for having the latest information about CSS. If you're looking for more practice with CSS selectors, we have a longer CSS quiz that's available to you here on the course on some platforms, and that will walk you through a whole bunch of example questions and give you immediate feedback about whether you got the answers right or wrong. Thank you so much again, and see you in another course sometime soon.

> [!info]- Semantic Content
>
> **Env Vars:** css (6)
> **Speakers:** - [jen] (1)


## Instructor

- [Jen Kramer](../../Instructors/Web%20Development/Jen%20Kramer.md)

## Resources

- Exercise files available

## Skills Covered

- Cascading Style Sheets (CSS)

## Path Context

### In [Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)
← [CSS Essential Training (2023)](CSS%20Essential%20Training%20(2023).md) | **3 of 12** | [CSS- Inheritance, Specificity, and the Cascade](CSS-%20Inheritance%2C%20Specificity%2C%20and%20the%20Cascade.md) →

## Appears In

- [Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)

## Related Courses

_Courses sharing skills:_

- [Making Sense of the CSS Box Model](Making%20Sense%20of%20the%20CSS%20Box%20Model.md) — Cascading Style Sheets (CSS)
- [React- Building Styles with CSS Modules](React-%20Building%20Styles%20with%20CSS%20Modules.md) — Cascading Style Sheets (CSS)
- [Cutting-Edge CSS](../Software%20Development/Cutting-Edge%20CSS.md) — Cascading Style Sheets (CSS)
- [Building Great Forms with HTML and CSS](Building%20Great%20Forms%20with%20HTML%20and%20CSS.md) — Cascading Style Sheets (CSS)
- [HTML & CSS- Creating Forms](HTML%20%26%20CSS-%20Creating%20Forms.md) — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)