---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: css-print-style-sheets
url: "https://www.linkedin.com/learning/css-print-style-sheets"
duration_minutes: 112
duration: 1h 52m
level: Intermediate
updated: 5/6/2025
learners: 8181
skills:
  - Cascading Style Sheets (CSS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGWqNJbTO18sA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1601574383805?e=2147483647&amp;v=beta&amp;t=rccYxxCmoHKwh9H3jMkJCC91RXUgowUd0n9aNsAXNWQ"
linkedin_topic: Web Development
learning_paths:
  - Learn CSS
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-04-20
---

![CSS: Print Style Sheets](https://media.licdn.com/dms/image/v2/C4E0DAQGWqNJbTO18sA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1601574383805?e=2147483647&amp;v=beta&amp;t=rccYxxCmoHKwh9H3jMkJCC91RXUgowUd0n9aNsAXNWQ)

# CSS: Print Style Sheets

> CSS makes it easy to create compelling online experiences, but style sheets also work for pages off the screen. The need for print persists and site developers should know how to create not just workable but appealing print results. Learn why print style sheets are important and how they can help improve the user experience for your website, in this course with veteran web designer and teacher Jen

> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets) | 1h 52m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Jen Kramer]]

## Resources

- Exercise files available

## Skills Covered

- Cascading Style Sheets (CSS)

## Table of Contents

### Introduction

#### Welcome to CSS print style sheets
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=0)** - Sometimes printing a webpage is exactly the right thing to do.
>
> **[0:04](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=4)** We print airline boarding passes, all kinds of forms, long articles, tips and tricks to hang on the wall, and so much more.
>
> **[0:12](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=12)** How can we make the most of print styling in our CSS?
>
> **[0:16](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=16)** Hi, I'm Jen Kramer, and I've been teaching and designing websites for 25 years.
>
> **[0:21](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=21)** In this course, I'll walk you through three big topics.
>
> **[0:25](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=25)** We'll look at print from a standard CSS perspective.
>
> **[0:28](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=28)** How exactly does the cascade work with styles for screen, print, or all devices, including the browser defaults.
>
> **[0:37](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=37)** Next, we'll move on to some best practices for print styling, including creating content exclusively for screen or for print.
>
> **[0:45](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=45)** Finally, we'll look at taking our formatting to the next level for print, exploring the best that print styling has to offer.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=53)** So if you're ready, let's get started with CSS print style sheets.

> [!info]- Semantic Content
>
> **Env Vars:** css (3)
> **Code Keywords:** finally, (1), let (1)
> **CLI Commands:** make (1)
> **Speakers:** - sometimes (1)


### 1. Mechanics of Print-Based CSS

#### Print style sheets and media queries
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=0)** - [Instructor] This first chapter of the course, we'll focus on some of the mechanics of creating CSS for print including the syntax of setting up print style sheets and understanding the cascade and inheritance where different media are involved.
>
> **[0:13](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=13)** So let's get started with a quick overview of comparing and contrasting print style sheets and print media queries.
>
> **[0:21](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=21)** The first way to include print styles in your website, and probably still the most popular is including an external linked document that refers to printing styles.
>
> **[0:32](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=32)** The code looks like this.
>
> **[0:34](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=34)** This is probably already similar to what you do with your screen styles.
>
> **[0:38](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=38)** With the addition of a media equals print on the end of the line.
>
> **[0:43](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=43)** Second and much less popular, you could embed your print styles in the head of your HTML document using code like this.
>
> **[0:51](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=51)** In general embedded styles should be avoided.
>
> **[0:54](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=54)** They apply only to the page in which they're located so they're harder to maintain across your website.
>
> **[1:00](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=60)** However, if you had a set of styles that applied only to this page, this might be a reasonable approach.
>
> **[1:08](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=68)** Finally, you could manage your print styles through a media query possibly in the same document that your other styles appear.
>
> **[1:15](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=75)** So which is better?
>
> **[1:17](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=77)** And when should you use each?
>
> **[1:20](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=80)** As always it depends.
>
> **[1:22](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=82)** With an external style sheet some people may find this harder to remember to maintain with ongoing changes to a website.
>
> **[1:29](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=89)** However, the separate document may be clearer to site maintainers about what media controls which styles.
>
> **[1:36](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=96)** Finally, since this is a separate document it takes an extra call to the server to load it which may impact overall performance of your site.
>
> **[1:45](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=105)** For media queries, since they would be included in an existing style sheet they are less likely to be overlooked.
>
> **[1:52](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=112)** However, it may also be less clear where exactly those styles are applied but the biggest difference and the one that's most powerful is that by specifying media in a media query, you can combine this test with others.
>
> **[2:07](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=127)** For example, if someone wanted to print a document from a phone, you might want to condition printing based on width, aspect ratio, orientation, media or all of these.
>
> **[2:18](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=138)** We'll examine ways to combine multiple tests in a media query for print later in the course.
>
> **[2:24](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=144)** If you want to learn more about how media queries can be used in complex ways to sell your document be sure to check out my course, CSS Advanced Media Queries available in the library.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), finally, (2), let (1)
> **Env Vars:** css (2), html (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Creating a print style sheet and linking it to your document
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=0)** - [Instructor] Let's get started with print styling by creating an external print style sheet document and linking it to our HTML.
>
> **[0:08](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=8)** So, the editor that I'm using here is VS Code, it's available from Microsoft.
>
> **[0:14](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=14)** It's free.
>
> **[0:15](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=15)** I've gone ahead and installed it on my computer and I have my exercise files that are open.
>
> **[0:21](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=21)** These are on my desktop and I've opened up my style sheet and my print dot html document.
>
> **[0:28](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=28)** You can always make this a little smaller or disappear just by clicking this button right here gives you a little more room for the code.
>
> **[0:36](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=36)** And let's start by looking at the code and I'm going to start at line number eight right here.
>
> **[0:41](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=41)** So obviously this is the link, HTML that links to our style sheet document shown over here on the right side of the screen.
>
> **[0:51](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=51)** As you can see with this particular line of code there is no media attribute inside of line number eight.
>
> **[0:58](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=58)** The media attribute indicates what media is appropriate for use with this style sheet.
>
> **[1:04](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=64)** And by default there's only four values.
>
> **[1:06](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=66)** Those include screen, print, all or oral as it sound.
>
> **[1:12](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=72)** And we won't talk about oral at all today but we'll talk about screen, print and all.
>
> **[1:17](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=77)** When there's no media that is indicated here in this line of code, it is a style sheet applies to all media.
>
> **[1:27](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=87)** So, basically we have a document here right now and it's set up in a way that probably a lot of people are doing development right now.
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=94)** It is an all purpose style sheet.
>
> **[1:36](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=96)** So if we go ahead and just pop this inside of a web browser real quick and this is Chrome and take a look at it.
>
> **[1:43](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=103)** I'm sorry, It's really, really ugly but this makes all of the points that I need to make very, very quickly.
>
> **[1:50](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=110)** And so obviously this is the way it looks on the screen.
>
> **[1:53](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=113)** If I try to print this, it's pretty simple to do in Chrome.
>
> **[1:56](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=116)** Go to the three dots over on the right side of the screen, choose print and it should give you a print preview of that particular document.
>
> **[2:06](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=126)** And as you can see here, it is going to print with a white background and yellow text.
>
> **[2:11](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=131)** Now why a white background?
>
> **[2:13](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=133)** Because we've specified a blue background on our current document.
>
> **[2:17](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=137)** Well, there must be some sort of default style sheet or some type of style sheets somewhere along the way that is overriding that blue background and making it white for print but it is not doing the same for the text.
>
> **[2:29](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=149)** It could be that we actually want colored text to print out but yellow is probably a really poor choice for a document of this length.
>
> **[2:38](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=158)** So let's go ahead and set up our first print style sheet using an external print style sheet.
>
> **[2:43](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=163)** It'll take us just a second to write and test.
>
> **[2:46](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=166)** So if we go back into the VS Code, what I'm going to do is over here on my styles dot CSS I'm just going to go file, save as and I'm going to call this print dot CSS indicating this is my print style sheet.
>
> **[3:02](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=182)** Then I can just go ahead and put in the overrides that I want for my particular document.
>
> **[3:07](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=187)** So I don't necessarily want to override my font family at this point, but the background colors got to go.
>
> **[3:14](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=194)** Let's say it's white instead of dark blue.
>
> **[3:18](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=198)** And as for the article all that stuff is gray but for the color for the text I would like that to be black.
>
> **[3:27](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=207)** Fantastic.
>
> **[3:28](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=208)** Go ahead and save that.
>
> **[3:30](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=210)** And then let's go ahead and apply this to our document.
>
> **[3:33](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=213)** I can just copy the line of code.
>
> **[3:35](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=215)** They're online eight in the HTML, paste in a new version of it here on line nine.
>
> **[3:41](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=221)** Let's change the styles dot CSS to print dot CSS.
>
> **[3:47](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=227)** Rel equals style sheet and then we need to add to this, our media equals quote, print.
>
> **[3:54](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=234)** Just like that.
>
> **[3:56](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=236)** And if we save our HTML, we can return to our Chrome document here, refresh the page and go back to print again.
>
> **[4:07](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=247)** And you'll see here in our print preview that now we have a nice white background with black text.
>
> **[4:14](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=254)** And so obviously our regular document on the screen does not look like that.
>
> **[4:19](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=259)** It looks great though on print and that is the way you might go about making an external print style sheet for your project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), override (1)
> **Env Vars:** html (4), css (4)
> **CLI Commands:** make (2)
> **Tools:** vs code (2)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### Creating a print media query
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=0)** - Now that you know how to set up an external print style sheet, let's set up a print based media query.
>
> **[0:07](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=7)** This is exactly the same HTML and CSS that we worked with in the previous video, ugly webpage, very very simple.
>
> **[0:15](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=15)** And as you can see here right now, whether it's our linked style sheet or over here in the style sheet document itself, there are no media queries that are present here in this document.
>
> **[0:26](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=26)** You're probably familiar with media queries if you've done any kind of responsive design, you typically set up media queries with values like mean width or max width or combination of those in order to make your screen respond to various different device sizes.
>
> **[0:42](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=42)** We're going to use media queries with the actual media in media queries.
>
> **[0:47](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=47)** And by default, there are styles here are set to all so effectively we do have a media query in place around the styles that we have now, it's kind of pointless but I'm going to put it in for you anyway.
>
> **[0:59](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=59)** It would look like this media all and it would end of course after our last style.
>
> **[1:09](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=69)** So you can think of this as the media query around your styles as they currently exist, these are applying to all different types of devices.
>
> **[1:17](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=77)** So to make a media query for print, as you might not be surprised to know, it's just media print.
>
> **[1:26](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=86)** And then inside of this, we can put in whatever we want to change.
>
> **[1:30](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=90)** So here body, will have a background color of white and our article will have a color of black.
>
> **[1:44](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=104)** So that's pretty much all we need to do to set up a basic print based media query.
>
> **[1:50](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=110)** If we go ahead and take a quick peek at this inside of our web browser, here we are in Chrome just go ahead and refresh our webpage.
>
> **[1:59](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=119)** And when I come over here to the three dots and I say print, there is the black and white version of this document that you would expect to see given our print media query styles that are set up.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (5)
> **Code Keywords:** let (1), default, (1), this, (1)
> **CLI Commands:** make (2)
> **Env Vars:** html (1), css (1)
> **Cross-References:** previous video (1)
> **Speakers:** - now (1)

#### Previewing print style sheets without printing
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=0)** - [Instructor] There are several ways to test your print styles without having to actually print your webpage.
>
> **[0:06](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=6)** The methodologies vary slightly between Windows and Mac, and they may vary across browsers as well.
>
> **[0:14](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=14)** I'm going to focus on Firefox and Chrome.
>
> **[0:16](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=16)** The methodologies for Safari and Edge are going to be similar to what I show you here with Firefox and Chrome.
>
> **[0:24](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=24)** So let's start with Chrome, which has an easy way of printing the page.
>
> **[0:28](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=28)** Not so easy looking at it in developer tools.
>
> **[0:31](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=31)** So the first way to do this you've actually already seen me do, this is the webpage we have been working on in all its glory.
>
> **[0:39](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=39)** And if we go to our three-dot button over here on the right side of the screen and simply choose Print, this will go ahead and give us a preview of what the page will look like here on the screen.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=53)** And you can go ahead and scroll down.
>
> **[0:55](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=55)** You can output this as a PDF, if that's something that would be helpful to you.
>
> **[0:59](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=59)** It's pretty much going to look just like this.
>
> **[1:01](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=61)** You, in some cases, can change your orientation between portrait and landscape and see any kind of differences that might be there in this particular format.
>
> **[1:12](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=72)** So that's way number one.
>
> **[1:14](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=74)** Way number two is with Chrome Developer Tools, and to get there and do that, you're going to go to View, then Developer, and then Developer Tools.
>
> **[1:28](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=88)** Now, when you open up Developer Tools, by default, it's going to show up on the bottom of your screen in Chrome.
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=93)** I have reoriented my Developer Tools to show up on the left side of the screen.
>
> **[1:37](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=97)** Yours may be in a similar kind of position.
>
> **[1:41](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=101)** You're going to want to go here to the three dots at the top of your Developer Tools and you're going to want to go to More Tools and then you're going to want to go to Rendering right here.
>
> **[1:55](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=115)** This is going to open up the rendering panel down here at the bottom of your web browser and you'll want to scroll down and you'll see Emulate CSS Media Type.
>
> **[2:06](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=126)** And right now it's set to no emulation.
>
> **[2:09](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=129)** We're going to switch it to print.
>
> **[2:11](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=131)** And what that will do is switch over to the print style sheet.
>
> **[2:15](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=135)** So as you see here, that is what's displaying on the screen.
>
> **[2:19](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=139)** That's a lot of buttons to click in order to see the print view of your screen.
>
> **[2:23](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=143)** And as you're going to find out as we go further into the course, sometimes this emulation does not necessarily work all that well due to the cascade.
>
> **[2:34](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=154)** And we'll talk more about that in some future videos.
>
> **[2:38](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=158)** Let's take a quick peek at Firefox as well.
>
> **[2:41](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=161)** Here is Firefox and, unlike Chrome, Firefox has a printing option here under File.
>
> **[2:49](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=169)** It has both a Page Setup and a Print option.
>
> **[2:52](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=172)** Chrome only has a Print option under File.
>
> **[2:55](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=175)** So when you go to your page setup, you want to first make sure that you are printing and your orientation is in portrait mode.
>
> **[3:02](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=182)** Just like that.
>
> **[3:03](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=183)** Go ahead and say "okay."
>
> **[3:05](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=185)** And then under File, Print, you do not have the preview that you had in Chrome.
>
> **[3:13](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=193)** So what you're going to need to do here with Firefox is you're going to need to look at this in PDF format.
>
> **[3:20](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=200)** And it's possible you Windows people, you might have a print preview that the Mac people here do not.
>
> **[3:25](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=205)** If you have a print preview just like you just saw in Chrome, that's amazing.
>
> **[3:30](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=210)** I would totally recommend using that.
>
> **[3:32](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=212)** But for Mac people, what we have to do is turn this into a PDF.
>
> **[3:36](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=216)** And so down here in the lower left-hand corner, you can save it directly out as a PDF, in which case you then need to find software to open that PDF and view it, or you can save right into Preview.
>
> **[3:49](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=229)** Preview comes with all Mac computers.
>
> **[3:52](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=232)** It will allow you to view a PDF file.
>
> **[3:55](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=235)** So basically Open in Preview will save it as a PDF and open it in Preview for you all in one step.
>
> **[4:02](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=242)** It's a little more efficient.
>
> **[4:03](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=243)** So that's the one I usually use here with Firefox.
>
> **[4:06](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=246)** Go ahead and choose that.
>
> **[4:08](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=248)** And the Preview program will open up and you can view the way this would look on print.
>
> **[4:15](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=255)** And bonus points to those of you who noticed that the Firefox rendition of this page is slightly different than what you saw on Chrome.
>
> **[4:23](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=263)** Firefox also has Developer Tools and we can preview this webpage using those Developer Tools.
>
> **[4:29](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=269)** Pretty straightforward to do that.
>
> **[4:31](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=271)** We're going to go to Tools, Web Developer, Toggle Tools.
>
> **[4:36](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=276)** And that will go ahead and turn on our Web Developer tools inside of Firefox.
>
> **[4:41](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=281)** Over here in the sort of middle panel, you will find a little button that looks like this.
>
> **[4:48](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=288)** And as you'll see, the tool tip there, which may be too small for you to read, it says, "Toggle print media simulation for the page."
>
> **[4:55](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=295)** Go ahead and click that.
>
> **[4:57](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=297)** And it will go ahead and toggle on your print style sheet and display that for you on the page.
>
> **[5:02](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=302)** So way easier than Chrome to actually access that print format here inside of your Developer Tools in Firefox.
>
> **[5:10](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=310)** So which method is best?
>
> **[5:14](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=314)** Should we be looking at the file print methodology of our webpages, or should we be looking at them through Developer Tools?
>
> **[5:22](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=322)** Well this Developer Tool rendering is a really convenient way to take a quick peek at how things look, especially if you already have the Web Developer tool pallet open.
>
> **[5:31](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=331)** However, for the most accurate results, especially when we get to some of the new properties later in the course, you probably want to preview the printout or make a PDF.
>
> **[5:40](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=340)** You should also be aware that when previewing print style sheets with your dev tools, it can be limiting on Chrome and Firefox.
>
> **[5:48](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=348)** Your print styles may not preview the way you expect using these tools.
>
> **[5:52](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=352)** And I'll say more about that in some coming videos.

> [!info]- Semantic Content
>
> **Tools:** firefox (12), safari (1)
> **UI Navigation:** go to (6), toggle (3), scroll down (2)
> **Env Vars:** pdf (8), css (1)
> **Code Keywords:** let (2), this. (2), switch (2), default, (1), type. (1)
> **CLI Commands:** find (3), make (2)
> **Analogies:** just like (3), similar to (1)
> **Prerequisites:** setup (2)
> **Cross-References:** later in (1)

#### The pitfalls of using dev tools for previewing printing
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=0)** - [Instructor] Let's briefly return to this ugly webpage, the way it came out of the box at the beginning of this chapter.
>
> **[0:06](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=6)** In other words there's no specific print styles that are declared just yet.
>
> **[0:10](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=10)** Right now this webpage has some basic styling in place, but nowhere on here, is there any media specified.
>
> **[0:17](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=17)** There's no media here on line eight in our linking HTML to our style sheet document.
>
> **[0:23](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=23)** There's no media declared anywhere via media query inside of our CSS.
>
> **[0:29](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=29)** If we go ahead and display this in a web browser, here we go, here it is in Firefox.
>
> **[0:35](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=35)** And if we go to file print and we go ahead and open this up in preview as a PDF, you'll see here that I've got a white page with yellow text.
>
> **[0:49](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=49)** So why is this?
>
> **[0:51](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=51)** There is some kind of overriding style sheet somewhere along the way when I send this over to print, that is making the background white instead of blue, which is a really great thing but it doesn't have a default text color.
>
> **[1:06](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=66)** So the text is going to use this ugly yellow from the default style sheet.
>
> **[1:12](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=72)** Other styles are carrying through as well like the font family, as you can see here, and maybe some of the margin stuff is carrying through at some level.
>
> **[1:21](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=81)** So, now if I go back to previewing this page here with Firefox and I'm going to use the developer print button right here so I can switch this over to print view.
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=93)** If I go ahead and click that button, I am clicking it.
>
> **[1:37](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=97)** There it is, it's clicked.
>
> **[1:39](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=99)** It's unclicked, you'll see that the page isn't changing at all.
>
> **[1:44](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=104)** When I viewed it as a PDF, the background turned white but here there's no change at all.
>
> **[1:49](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=109)** So why is that?
>
> **[1:50](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=110)** Well, first of all, the dev tools are looking at the style sheet that has no media declaration.
>
> **[1:58](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=118)** Remember the style sheet has no media declaration in it, there's no print media queries anywhere.
>
> **[2:04](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=124)** So when we click the print media simulation button in Firefox the dev tools don't make any changes at all based on this author CSS.
>
> **[2:16](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=136)** However when we go to print the page via the print dialogue box, even if we go to PDF, at least on my computer and with my installed options the background color is turned off for me.
>
> **[2:27](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=147)** You might see something different depending on what operating system and what you're using for printing.
>
> **[2:32](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=152)** So in this particular situation you can't necessarily see all of the facets of the type of styling applied for printing with dev tools.
>
> **[2:42](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=162)** So be really careful when you make use of them, they're really convenient, but depending on how your page and your computer environment are set up, it may not tell the whole story about printing.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (3), css (2), html (1)
> **Tools:** firefox (3)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), switch (1)
> **Definitions:** in other words (1), is a  (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)

#### Understanding screen, print, aural, and the cascade
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=0)** - [Instructor] In working with CSS, you've heard a ton about the cascade and which styles override what as part of that process.
>
> **[0:07](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=7)** However, it's unlikely you've looked at media types in isolation as part of that process.
>
> **[0:13](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=13)** So let's do that in this video.
>
> **[0:16](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=16)** The files I have, up here, are the same ugly Web page we've been looking at.
>
> **[0:20](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=20)** I promise this is the last segment with an ugly Web page.
>
> **[0:25](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=25)** As I've pointed out to you before, notice over here, on line 8, there is no media type on this style sheet link in the head of the document.
>
> **[0:33](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=33)** There's also no media query with the media type inside of the CSS.
>
> **[0:38](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=38)** Therefore, these styles are for all media types.
>
> **[0:42](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=42)** When we try to print, you'll see the yellow printing probably with a white background thanks to the browser taking out the dark blue background for print, as you've seen in previous videos.
>
> **[0:52](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=52)** Let's go on ahead and set the style sheet for screen media only.
>
> **[0:56](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=56)** The easiest way to do that, we can do that right here, in the external style sheet, and simply say media equals quote screen.
>
> **[1:04](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=64)** And if we go on ahead and save that, I'm going to go to my Web browser and refresh my page, and I'm going to to on ahead and print this via PDF in Preview.
>
> **[1:20](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=80)** So as you take a look at this page here, you might notice that this looks like an unstyled Web page, doesn't it?
>
> **[1:27](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=87)** There is no font specified, here.
>
> **[1:30](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=90)** The text is black instead of yellow, as you've seen, previously.
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=93)** And it's a serif font, it's a default Times-New Roman.
>
> **[1:37](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=97)** Why is that?
>
> **[1:39](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=99)** Well, that is because we set our styles to be for screen only.
>
> **[1:44](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=104)** And sure enough, it'll print just fine, but it's going to print as a default unstyled Web page inside of your Web browser.
>
> **[1:53](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=113)** Let's see that same effect here, with browser tools.
>
> **[1:56](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=116)** So if I go to Tools, Web Developer, Toggle Tools, and click my little button here, you'll see that same exact process happening here, as I click this button.
>
> **[2:09](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=129)** So this didn't work before, when our styles were set to all because it was all media.
>
> **[2:14](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=134)** Those were the same styles for screen and for print.
>
> **[2:18](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=138)** The Web Developer Tools were doing exactly what you told it to do.
>
> **[2:21](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=141)** Now that you have those styles set for screen only, when you click the button here, to show the print styling, it switches over to the print styles and there aren't any, so it looks like an unstyled Web page.
>
> **[2:34](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=154)** So let's go back to our code, here.
>
> **[2:37](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=157)** Let me show you how to do the same thing rather than doing it here, inside of our external style sheet.
>
> **[2:42](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=162)** You can just take that out.
>
> **[2:43](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=163)** Over here, in our style sheet, you can do exactly the same kind of thing by putting a media query around all this.
>
> **[2:52](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=172)** And we'll say at media screen.
>
> **[2:59](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=179)** Save that.
>
> **[3:00](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=180)** That would be exactly the same way it is, and effectively the same thing as having it associated with your external style sheet.
>
> **[3:08](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=188)** Now, but what about the cascade?
>
> **[3:10](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=190)** So let's go on ahead and try this.
>
> **[3:13](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=193)** If we have set this to all, and then before this, I'm going to go ahead and set up a couple of other styles.
>
> **[3:23](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=203)** I'm going to say at media screen and I'm going to say article, color white.
>
> **[3:31](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=211)** So if it's on the screen, it's going to have white text.
>
> **[3:35](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=215)** And then at media print, and article will have the color red.
>
> **[3:45](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=225)** So if this happens to go to print, we're going to have red text on the screen.
>
> **[3:50](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=230)** And then for all media which is coming after all of this, the text color will be yellow.
>
> **[3:57](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=237)** So this is your time to vote.
>
> **[3:59](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=239)** Go ahead and think about this for a minute.
>
> **[4:01](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=241)** If I go ahead and view this Web page now, on my screen, what color is the type?
>
> **[4:07](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=247)** And what color is the type when I go to print?
>
> **[4:12](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=252)** I'm going to go ahead and save both of these documents and then we can go back here, to Firefox.
>
> **[4:18](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=258)** I'm going to refresh my page.
>
> **[4:21](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=261)** And then we can go ahead and turn on our print tools.
>
> **[4:27](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=267)** And you see here, I'm clicking my button, toggling back and forth between these and nothing is happening.
>
> **[4:33](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=273)** Why is that?
>
> **[4:34](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=274)** Well, at media all comes after the screen or the print styles here, that we just placed above all of this, and so the color here, in the article overrides everything that comes before it.
>
> **[4:47](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=287)** So let's rearrange real quick.
>
> **[4:49](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=289)** If we go ahead and take those two and we put them after, so now, before, we have yellow.
>
> **[4:57](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=297)** We have white for the screen and red for print.
>
> **[5:00](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=300)** What color will the text be now, on the screen?
>
> **[5:03](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=303)** What color will be the text for print?
>
> **[5:06](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=306)** Go on ahead and think about that for a second.
>
> **[5:09](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=309)** And then let's go back to our Web page.
>
> **[5:11](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=311)** Refresh the page.
>
> **[5:13](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=313)** And right now, I've go the print style sheet toggled on, so you see we have red text.
>
> **[5:19](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=319)** And if I toggle that off, we have white text.
>
> **[5:22](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=322)** And obviously, if I do this the longer way, if I go to File, Print, and I do this as an opening and print preview, I will see the red text but with a white background rather than the blue background.
>
> **[5:36](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=336)** So as you would expect, where all else is equal in the cascade with selector specificity, the order in the style sheet does, in fact, matter.
>
> **[5:45](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=345)** As you might also expect, this same type of example holds true if you look at a separate external style sheets and listing them in the order of the head in your HTML document.
>
> **[5:55](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=355)** So if we go back into our code and I had a print style sheet here, and I wanted to list it after, your print style sheet should come here, after your style sheet for all of your styles you would list your print style sheet after it so that your cascade work correctly.
>
> **[6:14](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=374)** So as always, order does matter.
>
> **[6:16](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=376)** I recommend writing a generic all style sheet and then overriding whatever is needed for a print style sheet.
>
> **[6:22](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=382)** If you have separate screen and print style sheets, then you will completely style your document twice: once for screen and then, once for print.
>
> **[6:32](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=392)** All is a great setting so that's the way we're going to approach styles in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (3), this. (2), override (1)
> **UI Navigation:** go to (5), toggle (2)
> **Env Vars:** css (2), pdf (1), html (1)
> **Cross-References:** go back to (2)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Best Practices for Print-Based Styling

#### Best practices for styling for print
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=0)** - [Narrator] You're probably familiar with many best practices for styling webpages for the screen.
>
> **[0:05](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=5)** For example, you might be using a San Serif font for optimal readability.
>
> **[0:10](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=10)** You might test with different devices to make sure the text is sized appropriately.
>
> **[0:15](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=15)** But what about print?
>
> **[0:16](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=16)** Well, if you anticipate your webpages will be printed, then you must think about styling in those situations as well.
>
> **[0:24](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=24)** First, what kinds of pages are generally printed?
>
> **[0:27](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=27)** If you're working with a lengthy article, a complex form, some kind of ticket or receipt, a recipe or other information that's typically available in book or paper format, you might find that people will want to print that information from your website.
>
> **[0:42](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=42)** It may not be that every page on your site needs a full battery of tests for the printed format.
>
> **[0:49](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=49)** Second, what information are they most interested in printing?
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=53)** Chances are that you would like the page to be clearly labeled with your company name and the website address.
>
> **[1:00](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=60)** Even if your user isn't interested in that information.
>
> **[1:03](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=63)** Your user is most interested in the main content and probably not so interested in printing extraneous advertising, navigation bars, fat footer layouts and similar elements.
>
> **[1:16](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=76)** Consider what information might benefit from being printed, but in a different format.
>
> **[1:21](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=81)** For example, links are great inside of a web page, but they're not clickable on paper.
>
> **[1:27](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=87)** What if you spelled out the URL for the link next to its appearance on the webpage?
>
> **[1:32](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=92)** And are all of those beautiful graphics on the site needed in a printout or could they be repurposed for a different format?
>
> **[1:41](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=101)** Finally, when considering format, let's revisit some of the basic formatting on your website.
>
> **[1:47](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=107)** Is a layout change needed?
>
> **[1:49](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=109)** Should we swap a font for the San Serif to a Serif instead?
>
> **[1:53](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=113)** How's the text size?
>
> **[1:55](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=115)** Does it need a bump up or a bump down in size when going to print?
>
> **[1:59](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=119)** What about the color?
>
> **[2:00](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=120)** It's possible the user will print to a black and white printer rather than a color printer.
>
> **[2:05](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=125)** Is the page readable and understandable in black and white?
>
> **[2:09](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=129)** We'll consider all of these parameters as well as a few others while working through this course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** finally, (1), let (1)
> **Analogies:** for example (2)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Touring your example page
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=0)** - [Tutor] Now that we've got those technical fundamentals out of the way about how to make a print style sheet and link it up to your document, let's go on to a more attractive webpage.
>
> **[0:10](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=10)** So this is the document we're going to work with here in chapter two.
>
> **[0:13](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=13)** This document is called blog dot HTML, and let's just run through real quick what we have going on here.
>
> **[0:20](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=20)** Over here in the HTML, you'll see that we have font awesome is included here, we have some Google fonts and we have a, of course, our custom style sheet, which is displayed over here on the side.
>
> **[0:32](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=32)** Down in the main body of the HTML, we have a header with a logo, we have a navigation bar, and then we have a longer article.
>
> **[0:40](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=40)** That's going to go on for some time.
>
> **[0:43](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=43)** We have a very big picture associated with this.
>
> **[0:45](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=45)** This is the HTML picture tag here on line 41.
>
> **[0:49](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=49)** You'll see that we have three different versions of this image inside of our picture tag, including one for tablet sized devices.
>
> **[0:57](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=57)** We have one for larger sized devices like desktops, and then we have a default image tag here.
>
> **[1:04](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=64)** And then it goes on and on and on, talking about various kinds of exercises, it's a long article.
>
> **[1:10](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=70)** And then we also have a sidebar in place here.
>
> **[1:12](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=72)** This has got a little bit of advertising associated with it, and it's got our commitment to quality in place here.
>
> **[1:20](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=80)** And then down here on the bottom, we have a footer.
>
> **[1:22](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=82)** The footer has all kinds of social media links, as you would expect, as well as a disclaimer.
>
> **[1:28](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=88)** In our HTML, the way this is set up is that, first of all, we're going to use boarder box sizing, which is a great practice to do with your style sheets right out of the box, so to speak.
>
> **[1:39](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=99)** This of course is going to calculate your box sizing a little bit differently.
>
> **[1:44](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=104)** It consolidates your border width, your padding and the width of the content itself into a single measurement called width.
>
> **[1:52](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=112)** As we scroll on down here, this colon root thing here is a pseudo class that is responsible for setting up a bunch of variables that we'll use in our document.
>
> **[2:02](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=122)** If you wanted to learn more about this, I have a course on that exact topic.
>
> **[2:07](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=127)** It's called CSS variables and fluid layouts, and it's available in the library.
>
> **[2:12](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=132)** It'll walk you through exactly how to set up variables and calc, which is the calculations that I have going on here for our type scale.
>
> **[2:19](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=139)** Talk through all of that in detail in that course.
>
> **[2:22](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=142)** So as we scroll on down here, you see we have some headings, other various kinds of styling, there's nothing here that you probably haven't seen before, except for maybe that variable and calculator stuff.
>
> **[2:33](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=153)** You'll see we have media queries as we get down here a little bit further.
>
> **[2:36](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=156)** Those of course are responsible for changing our default styling, which is the mobile styling outside the media query.
>
> **[2:43](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=163)** This first break point here has to do with tablets, and then we have one for desktops.
>
> **[2:49](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=169)** We do go to a grid based layout as you'll see here, there's our grid template columns and so forth, associated with that.
>
> **[2:56](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=176)** All right, so let's do a quick peek at this inside of the web browser.
>
> **[3:00](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=180)** And so here we are looking at this in Chrome, and we're obviously at full dimensions here.
>
> **[3:06](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=186)** You can see what the webpage looks like.
>
> **[3:09](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=189)** And as I start to make this webpage a little bit smaller in size, we'll go ahead and see those break points in action.
>
> **[3:19](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=199)** So as we make it smaller and smaller, there's our first break point.
>
> **[3:23](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=203)** And you see that we have things stacking down here on the bottom, and we'll go down to our mobile dimension, where you'll see, go from bottom to top.
>
> **[3:35](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=215)** Okay, so if we go on ahead and we preview this with printing, three dots, print, this is Chrome, we can go ahead and see what this looks like.
>
> **[3:44](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=224)** So we have basically the mobile styles that seem to be coming through here for Chrome.
>
> **[3:49](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=229)** I have a centered logo at the top of the page.
>
> **[3:52](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=232)** Here's my nav bar, here's our text.
>
> **[3:55](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=235)** We have an image taking up a lot of that page.
>
> **[3:57](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=237)** We're going to go on for some time.
>
> **[3:59](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=239)** Then we've got our, these big images, they take up a lot of room on a page, and a big black bar down here on the bottom and so forth.
>
> **[4:07](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=247)** So that's what our webpage is going to look like in Chrome.
>
> **[4:11](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=251)** I also want to show this to you in Firefox, cause the print version in Firefox is different than what we have here in Chrome.
>
> **[4:17](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=257)** So if I switch on over and show you the page in Chrome, if I ran through the media queries, they all work the same way.
>
> **[4:23](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=263)** The screen looks fine, but when I go to file print, and I'm going to go to open in preview, you'll see here, first of all, the logo isn't centered.
>
> **[4:35](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=275)** So this is not using the mobile styles that you saw previously over on Chrome.
>
> **[4:40](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=280)** Firefox is doing something very different here with its print styles.
>
> **[4:44](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=284)** So as we scroll on down the page here, there's that big picture.
>
> **[4:48](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=288)** Here's all the text, it goes on and on and on.
>
> **[4:50](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=290)** And then down here we have these two items side by side, more like a tablet sort of layout, what we have going on here, as opposed to Chrome, which is displaying things more in a mobile layout.
>
> **[5:03](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=303)** But again, we haven't specified anything for print, so these printers and browsers are just doing the best they can with what they have.
>
> **[5:11](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=311)** And then down here in its own separate page are the social media icons and so forth.
>
> **[5:16](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=316)** So both of these take up about five pages of paper to print this list of exercises, and the exercises themselves, well, we can probably get these onto one page, maybe into one and a half if we try.
>
> **[5:32](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=332)** And so we're going to be walking through that here as we go through the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), this, (1), switch (1), try. (1)
> **Env Vars:** html (5), css (1)
> **Analogies:** picture (4)
> **CLI Commands:** make (3)
> **Tools:** firefox (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (2)

#### Hiding irrelevant information for print
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=0)** - [Instructor] Now that you know what this page looks like, let's consider why people might want to print this page.
>
> **[0:06](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=6)** Well, it has a list of these exercises on it.
>
> **[0:11](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=11)** And a printout would make this really easy to hang on a cubicle wall.
>
> **[0:14](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=14)** The exercises would be the most important thing on this page for our user.
>
> **[0:19](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=19)** H+sport though might have other ideas of what's important.
>
> **[0:24](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=24)** They probably want their branding in the form of this logo up here on the top of the page.
>
> **[0:29](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=29)** They might want the links to their social media which are down here at the very bottom of the page.
>
> **[0:35](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=35)** And they might like the suggestion of these other products over here.
>
> **[0:39](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=39)** They might really want people to remember their mineral water or their quality guarantee.
>
> **[0:44](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=44)** As always, we need to balance the needs of H+sport with the website users so that we get a printout that works for everybody.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=53)** One of the first changes that we can make to our page, making this page really great for print is to think about what should be printed and what should not.
>
> **[1:02](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=62)** We're going to start here because all of the other adjustments will revolve around our revised print layout which will be simpler than what we have on screen.
>
> **[1:11](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=71)** So what shouldn't be printed?
>
> **[1:13](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=73)** Anything that's not going to help H+sport or the user in a printed format.
>
> **[1:19](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=79)** So that's what you need to think about as you start to think about what will print.
>
> **[1:23](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=83)** First of all, this navigation bar does nobody any good anywhere.
>
> **[1:27](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=87)** You can't click it once it goes to print.
>
> **[1:29](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=89)** So we should get rid of that.
>
> **[1:32](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=92)** Next, this picture here, she is lovely.
>
> **[1:35](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=95)** But honestly people are probably not printing things out for her and she doesn't necessarily add anything in printed format.
>
> **[1:42](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=102)** She's great for increasing engagement here on the screen, but in printed format, we're really just interested in the exercises.
>
> **[1:50](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=110)** So she should probably go.
>
> **[1:52](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=112)** Depending on what goes in the right column, you may want to get rid of it altogether.
>
> **[1:57](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=117)** If it's like Google Ads or other kinds of advertising or links to other pages, that might be stuff you want to get rid of.
>
> **[2:04](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=124)** In this particular case, it's possible that H+sport really wants to keep that stuff but we need to reformat it.
>
> **[2:12](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=132)** And then down here in the bottom in the footer, the disclaimer may be really, really important.
>
> **[2:17](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=137)** The social media links would be great but in a different format.
>
> **[2:23](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=143)** They're meaningless when they're printed like that.
>
> **[2:25](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=145)** Well wonderful we have Twitter, Facebook, Pinterest, and Instagram, but unless we know the link associated with those, a printout of those icons doesn't do us any good.
>
> **[2:35](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=155)** So we might want to think about reformatting those.
>
> **[2:38](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=158)** So let's go ahead and write some code to do exactly that.
>
> **[2:41](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=161)** We'll start with, go ahead and this is the HTML and the CSS.
>
> **[2:46](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=166)** I just gave you a tour of that in the previous video.
>
> **[2:49](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=169)** I'm going to scroll all the way down to the bottom of our CSS.
>
> **[2:52](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=172)** And this is where we're going to start adding a bunch of styles.
>
> **[2:55](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=175)** So here, I'm going to set up our @media print.
>
> **[3:01](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=181)** And I'm going to do this with media queries.
>
> **[3:04](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=184)** It tends to be what people prefer to do.
>
> **[3:06](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=186)** Plus later on, we can leverage these media queries with some additional parameters and make print styles that are simply not possible with an external style sheet.
>
> **[3:17](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=197)** I'll cover that a little bit later on.
>
> **[3:20](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=200)** So here, what we want to do is we want to say our navbar and our article image.
>
> **[3:28](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=208)** We're simply going to tell them to display, none.
>
> **[3:32](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=212)** That's all we need to do.
>
> **[3:34](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=214)** So when we go to print, don't display the navbar.
>
> **[3:37](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=217)** Don't display the article image.
>
> **[3:39](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=219)** Go ahead and save that.
>
> **[3:41](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=221)** Let's take a quick peek at our webpage.
>
> **[3:42](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=222)** If we go ahead and refresh it, you should never see any change at all, what's going on here on the screen.
>
> **[3:48](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=228)** But when we go to print, this is Chrome, so three dots go to print.
>
> **[3:54](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=234)** Now you can see already the page is looking better.
>
> **[3:57](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=237)** We don't have that big honkin' picture in the way.
>
> **[3:59](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=239)** And we don't have that navbar up here at the top of the page either.
>
> **[4:04](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=244)** Now some of you are familiar with responsive design and would say but display, none is a big, no, no.
>
> **[4:10](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=250)** Absolutely true, when you're working on the web and you're concerned about data transfer or performance and that kind of thing.
>
> **[4:17](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=257)** However, in the print environment you're printing across a USB cable or a wifi connection not on a mobile signal.
>
> **[4:25](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=265)** Data transfer speeds and performance aren't necessarily an issue in this type of environment.
>
> **[4:29](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=269)** So display, none is a perfectly acceptable in the context of let's boil this page down to exactly what it is that we want to print.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1)
> **Env Vars:** css (2), html (1), usb (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Analogies:** picture (2), it's like (1)
> **Definitions:** is a  (2)
> **Cross-References:** previous video (1)
> **Best Practices:** you should never (1)

#### Changing webpage layouts for print
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=0)** - Next step here in our H+ Sport website. As you know, we have mobile layouts here in our CSS.
>
> **[0:07](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=7)** We have tablet layouts in the CSS, and we have desktop layouts in the CSS, but we do not have any print layouts in our CSS.
>
> **[0:17](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=17)** We should probably have some print layouts earlier in the course, we looked at this webpage in both Firefox and Chrome, and we noticed a lot of differences between those.
>
> **[0:27](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=27)** So, one of the things that we probably ought to do is specify a layout in the print format so that we would get consistent printing across their various types of web browsers.
>
> **[0:38](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=38)** Generally speaking, we're going to want our boxes to stack on top of each other one after the other in the source order of the HTML.
>
> **[0:45](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=45)** Basically we want the mobile view of the webpage before we applied our tablet and desktop media queries.
>
> **[0:52](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=52)** Chrome is kind of doing that Firefox, not so much, but it's a really really super easy thing to fix, and basically all we need to do.
>
> **[1:01](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=61)** If you take a look at our code here, we have our content where we've displayed grid here.
>
> **[1:08](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=68)** We have a little bit further in our tablet, media query.
>
> **[1:12](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=72)** You'll see that we have our sidebars displaying in this grid.
>
> **[1:15](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=75)** Our footer is displaying in this grid, and of course, all these elements by default, they're all block-level layouts.
>
> **[1:21](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=81)** So, all we need to do here in our print styles, we don't need to mess around with grid.
>
> **[1:26](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=86)** We don't need to mess around with Flexbox.
>
> **[1:28](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=88)** If we'd been using Flexbox for layouts, it's really simple.
>
> **[1:31](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=91)** All we have to do is just say sidebar, footerClass, and our content, all though guys, we just want to display block.
>
> **[1:43](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=103)** That's pretty much it.
>
> **[1:44](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=104)** We're just going to reset them from where they'd been displaying as grid back to display as block.
>
> **[1:49](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=109)** So that things function basically as they had in the mobile format of the page.
>
> **[1:54](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=114)** So let's go ahead and save that, and if we go to our webpage and we refresh, and then if you go on ahead and do our print preview and take a look at this webpage, you'll see that everything here is stacking on top of each other.
>
> **[2:14](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=134)** Exactly as you would expect to have happen, we still have a lot of work to do on this page, but at least everything is stacked on top of each other to start with, and if you look at this in Firefox, it looks more or less the same.
>
> **[2:28](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=148)** The logo is over on the left side instead of in the middle of the page but other than that, pretty much everything stacks on top of each other there as well.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), html (1)
> **Code Keywords:** super (1), default, (1), function (1), let (1)
> **Tools:** firefox (3)
> **Code Identifiers:** footerclass (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** go to (1)
> **Speakers:** - next (1)

#### Overriding styles intended for screen display
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=0)** - Next up, let's consider styling for the rest of our printed page by modifying the CSS we already have in place for our fonts.
>
> **[0:07](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=7)** And let's make this work a little bit better for print.
>
> **[0:10](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=10)** We'll also modify some other elements along the way here, as well.
>
> **[0:13](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=13)** As you can see here in this print preview in Chrome, we have a lot of pages of stuff.
>
> **[0:19](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=19)** It looks like even if we didn't deal with the sidebar just yet, we have like two pages of these exercises.
>
> **[0:28](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=28)** The font looks a little bit big for a printed page.
>
> **[0:30](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=30)** Kind of horsey, actually.
>
> **[0:32](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=32)** And so we might want to reduce that size.
>
> **[0:36](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=36)** And of course, this is also a sans serif font, which is great for screen reading, but we might prefer to have a serif font for printing, where serif fonts are typically used.
>
> **[0:48](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=48)** So there's some changes that we probably ought to make here to make this page a little bit more readable for print-style sheets.
>
> **[0:56](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=56)** So let's go ahead and take a look at that.
>
> **[0:59](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=59)** Get out of that and hop back on into our editor.
>
> **[1:04](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=64)** So, first of all, let's go ahead and pick a different font for our webpage.
>
> **[1:10](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=70)** Right now that's declared way up on top of this style sheet in the body tag.
>
> **[1:16](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=76)** So we can just re-declare it here.
>
> **[1:19](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=79)** And what I'm going to say is our font family is, let's say, Georgia, Times New Roman, Times and so forth, mostly because I like Georgia better than Times.
>
> **[1:30](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=90)** It's a nice default font.
>
> **[1:32](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=92)** Obviously you could load in a Google font if you want, but of course, that's going to add to your overall page weight for a print style.
>
> **[1:41](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=101)** So I am just going to use Georgia which should be on most people's computers.
>
> **[1:46](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=106)** Second of all, let's think about our font size.
>
> **[1:49](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=109)** Now our font size is handled way up here at the top.
>
> **[1:52](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=112)** And I have here a declaration that sets a base font size and a type scale.
>
> **[1:59](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=119)** And we're using calc here to create all of our different type sizes for our different tags, like our various heading tags, as well as the paragraph will go ahead and take that base font size by default.
>
> **[2:14](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=134)** And that gets declared a little bit later here in the style sheet.
>
> **[2:17](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=137)** We've also tied in to this some margin sizes associated with that.
>
> **[2:22](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=142)** And then the paragraphs and the (indistinct) all have a base font size.
>
> **[2:25](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=145)** So it's really easy to restyle our type size for print.
>
> **[2:32](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=152)** All we have to do is just change the values of a couple of variables.
>
> **[2:36](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=156)** And once again, this technique is described in detail in my course "[[CSS- Variables and Fluid Layouts]]," which is available in the library.
>
> **[2:44](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=164)** So I'm just going to... all I need to do here inside of my print style is just change the value of these variables.
>
> **[2:52](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=172)** So I'm going to re-declare the root pseudo class, and to that I will give this a base font size, it's my variable name, of 0.8 ems.
>
> **[3:08](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=188)** And I'm going to give this a type scale of 1.25.
>
> **[3:14](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=194)** So that is actually, all I have to do is just that.
>
> **[3:16](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=196)** It's going to go ahead and reformat all of those types sizes, all of those margins and so forth.
>
> **[3:22](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=202)** It'll all reformat right off of this one declaration here, just redefining the values of these variables.
>
> **[3:28](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=208)** It's a very, very cool technique.
>
> **[3:30](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=210)** Next up, as you might've noticed in Chrome, the logo prints at the top center of our document.
>
> **[3:38](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=218)** In Firefox, it prints over on the left.
>
> **[3:40](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=220)** Let's just make that consistent.
>
> **[3:42](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=222)** So this will be header.
>
> **[3:45](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=225)** And we can just say text align left.
>
> **[3:48](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=228)** Pretty easy.
>
> **[3:51](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=231)** Now, in terms of these aside images over here, scroll on down for a little bit until we get on down here to our sidebar.
>
> **[4:00](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=240)** So we have this picture here with our various images associated with that, and the little bit of text that's here underneath, and we have that twice.
>
> **[4:08](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=248)** We have two of these different asides that are here, and one of the things that you might want to do, right now the image is stacked on top of the text and it doesn't necessarily work all that well in print.
>
> **[4:21](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=261)** Can't quite tell what text goes with the pictures and the pictures are enormous.
>
> **[4:26](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=266)** So let's make that association a little bit clearer.
>
> **[4:29](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=269)** And I'm just going to use an old technique here which is floating.
>
> **[4:33](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=273)** And so all I'm going to do here is this: I'm going to start by setting up my image to float.
>
> **[4:40](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=280)** And so we can do a couple of things.
>
> **[4:42](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=282)** We can set a max height of 0.5 inches.
>
> **[4:47](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=287)** Oh my goodness!
>
> **[4:48](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=288)** I'm actually using inches.
>
> **[4:50](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=290)** And that probably made some heads explode but inches are a legitimate thing to use inside of a print style sheet, where the world, at least in the United States, in printing, revolves around inches.
>
> **[5:01](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=301)** Other legitimate units of measure, if you're in other parts of the world, would be centimeters or millimeters.
>
> **[5:07](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=307)** Those would also be legitimate to use here.
>
> **[5:10](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=310)** So I'm actually just going to set the max height of my images.
>
> **[5:13](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=313)** This of course is going to affect all of the images on the page, and we'll make them all about a half an inch tall, and then I'm going to float them because floating is something that's going to be at least supported by most of the printing for most printers and most browsers.
>
> **[5:31](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=331)** And we can go ahead and set a nice margin around those images.
>
> **[5:35](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=335)** Once again, I'm going to use inches.
>
> **[5:38](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=338)** 0.25 inches 0.25 inches and zero.
>
> **[5:44](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=344)** Okay, so that'll give us a little bit of room around the image.
>
> **[5:47](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=347)** Now, if you float, you need to clear.
>
> **[5:50](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=350)** So we're going to clear on our aside.
>
> **[5:54](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=354)** I'm also going to clear on the content itself.
>
> **[6:01](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=361)** And the content is a div that goes all the way around our article and the asides.
>
> **[6:08](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=368)** And the reason why I'm clearing there is because the way I have this style written right now, that image up here in the header, right here on line 16, that is going to be floated and we need to make sure that it is cleared adequately.
>
> **[6:22](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=382)** It'll work fine.
>
> **[6:23](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=383)** Well, the nav bar, of course, we're hiding on print.
>
> **[6:26](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=386)** So the element that follows that floated element would be our div with our class of content.
>
> **[6:33](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=393)** So we're going to clear there to make sure that this all formats well.
>
> **[6:38](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=398)** So if we go on ahead and save that.
>
> **[6:40](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=400)** Just a couple of other quick things I want to add and then we can take a peek in the browser.
>
> **[6:45](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=405)** For my heading, h1 here, I'm going to set the margin on the top to auto.
>
> **[6:53](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=413)** I don't want it to use this style that I had set previously in my screen.
>
> **[6:59](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=419)** It gives me too big of a gap between the logo on the top and the title of the article.
>
> **[7:03](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=423)** So I'm just going to let that do the standard h1 size and in the footer, by the way, there's a big black bar that appears in the bottom of the printout.
>
> **[7:13](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=433)** That comes from a border that I put on it on the bottom.
>
> **[7:19](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=439)** So I'm just going to turn off that border.
>
> **[7:22](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=442)** All right.
>
> **[7:23](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=443)** If you go on ahead and save all those styles, let's go on back to our webpage and refresh.
>
> **[7:28](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=448)** Absolutely nothing has changed here on the screen, which is a wonderful thing.
>
> **[7:34](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=454)** Now we can go ahead and go over here to print.
>
> **[7:38](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=458)** And if we look at that, look how much better this page looks already.
>
> **[7:41](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=461)** So our logo is pushed over here to the left, and under that we have, very consistently, we have a lovely sans serif font that's controlling everything that's here on the page.
>
> **[7:53](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=473)** It's all Georgia.
>
> **[7:54](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=474)** The spacing looks good here and so forth.
>
> **[7:57](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=477)** And because we have cleared our various floats, we can see we have our little images here next to our text.
>
> **[8:02](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=482)** Doesn't that look great?
>
> **[8:04](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=484)** And our footer down here on the bottom: still have a little bit more work to do, but just overriding some of those default screen styles, or styles that were really intended for screen carrying over into print, this is a great way to clean up your webpage using CSS, you're already familiar with, and really improve the look of that print out.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), default. (1), class, (1), this: (1)
> **CLI Commands:** make (8)
> **Versions:** 0.25 (2), 0.8 (1), 1.25 (1), 0.5 (1)
> **Env Vars:** css (3)
> **Definitions:** is a  (3)
> **Tools:** firefox (1)
> **Analogies:** picture (1)
> **Speakers:** - next (1)

#### Adding print-only information that is hidden from screens
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=0)** - [Lecturer] We may want to add some styles that are going to be visible for printonly.
>
> **[0:05](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=5)** And that might be associated with some content so that we have certain pieces of content that are going to print out only, but in the various screens that people might be using to look at the webpage, they aren't going to see this particular text.
>
> **[0:19](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=19)** And so in this example, these are of course your Exercise Files, notably in the Exercise Files folder for this particular segment, you want to take a look at Text for Exercise.
>
> **[0:32](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=32)** It's a Text file that's inside of that folder.
>
> **[0:35](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=35)** Go on ahead and open that up and I'm going to go ahead and just copy that a little bit of text right there real quick.
>
> **[0:42](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=42)** So we get that out of the way and see our code a little bit better.
>
> **[0:45](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=45)** That little bit of text there, is a link to this webpage online.
>
> **[0:50](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=50)** And what I'd like to have happen is to have that print up near the top of the document.
>
> **[0:55](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=55)** So if somebody makes it print out and they're looking at it later and they want to go back to the website, they know where to go.
>
> **[1:02](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=62)** So to do that, I am going to put that here in my HTML.
>
> **[1:07](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=67)** And right now this is going to go up here in the header I think, and the way I'm going to do that is I'm just going to make this a paragraph and I'm going to paste in that text right there.
>
> **[1:19](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=79)** Now, normally you might think Oh, let's wrap &lt;a&gt; tag around that so it's clickable.
>
> **[1:24](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=84)** Well, remember this is only going to be for print.
>
> **[1:26](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=86)** And if that's the case, then there's no point in making it clickable.
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=93)** Now, the other thing I'm going to add here inside of this paragraph, is a class and I'm going to set it to be printonly, because I only want this to show on the printed page.
>
> **[1:45](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=105)** So once that's here, then we can go ahead and add our CSS.
>
> **[1:50](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=110)** And there are two ways to do this.
>
> **[1:53](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=113)** So I'm going to show you both of those.
>
> **[1:56](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=116)** One way requires two styles, and another way is just going to work with one.
>
> **[2:03](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=123)** So after my media query here for the desktop, before my media query for print, I'm just going to go ahead and drop in this little bit of code right here just so you can see it.
>
> **[2:15](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=135)** Printonly is the name of my class.
>
> **[2:18](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=138)** And then in here, I'm going to say display: none.
>
> **[2:21](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=141)** So I'm outside of the media query.
>
> **[2:24](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=144)** So this will make sure that that line from paragraph will not display anywhere on basically any type of media right now, because this is outside of all of the media queries.
>
> **[2:36](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=156)** Then inside of the media query... And I'll just stick it here at the top so it's easy to see what's going on.
>
> **[2:43](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=163)** I'm going to say .printonly and here I'm going to say display: block.
>
> **[2:52](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=172)** So that's one way of doing it.
>
> **[2:54](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=174)** So I've not displayed it across all of the media.
>
> **[2:57](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=177)** And then I overwrite it for printonly and say display it as a block level element.
>
> **[3:02](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=182)** But we can make this even more efficient, go ahead and get rid of that.
>
> **[3:08](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=188)** And what I'm going to do here is for printonly, I'm going to put it in its own media query and it's going to be @media screen.
>
> **[3:17](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=197)** So here, now the display: none is good only for the screen.
>
> **[3:24](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=204)** We don't have to overwrite that style in print, because the display: none applies only to screen styles.
>
> **[3:32](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=212)** So therefore, our paragraph we'll go ahead and print.
>
> **[3:35](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=215)** So if you go on ahead and save your style sheet, we can refresh our webpage and take a quick peek at the printed version of it.
>
> **[3:46](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=226)** So there's that text right out up here.
>
> **[3:49](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=229)** Why is it appearing right here?
>
> **[3:50](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=230)** Next to this logo and you might be a little bothered by that.
>
> **[3:55](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=235)** Well, remember that that logo is floated.
>
> **[3:58](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=238)** We floated it in the previous video.
>
> **[4:01](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=241)** So if you don't want that floated that is easy to fix.
>
> **[4:07](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=247)** Right here inside of your print styles, you could say, printonly and then you could say, clear: both.
>
> **[4:16](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=256)** it's the element right after the floated element, So if you clear there, it should get itself out of the float and it'll appear underneath the logo.
>
> **[4:24](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=264)** So just go ahead and save that.
>
> **[4:27](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=267)** And we'll go back to our webpage refresh it again and take a look at the print again.
>
> **[4:34](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=274)** And now you'll see your line of text appears right underneath that logo.
>
> **[4:39](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=279)** So either one of those approaches is just fine.
>
> **[4:41](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=281)** You could have your media in terms of all set to display: none, and then have it display as a block inside of your print media query.
>
> **[4:50](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=290)** Or you could just make a screen media query where it's displayed none.
>
> **[4:54](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=294)** And then you don't have to worry about turning it back on when you go to print.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (1), case, (1), this. (1), class. (1)
> **Cross-References:** go back to (2), previous video (1)
> **Env Vars:** html (1), css (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [lecturer] (1)

#### Writing URLs after links and social media icons
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=0)** - Links are so foundational to websites, and I am sure you are very good at putting links into your webpages.
>
> **[0:08](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=8)** However, when you print a document out, we wind up with a bunch of colored texts with underlines that gets printed.
>
> **[0:15](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=15)** We don't necessarily see the URL for the pages associated with those links.
>
> **[0:22](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=22)** Wouldn't it be great if, when we printed out this particular document, we could see the URL associated with each link?
>
> **[0:32](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=32)** And especially when it comes to the social media icons that are down here towards the bottom of the page.
>
> **[0:41](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=41)** Down here we had these lovely links to all of the various H+ Sport social media, but when we print out the page right now, those icons are all just icons.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=53)** We have no idea where to go.
>
> **[0:55](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=55)** We know that H+ Sport has a Twitter account, but we don't know what their handle is.
>
> **[1:00](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=60)** So let's go to head and add some styles, so we'll actually make this happen.
>
> **[1:04](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=64)** You can do this with just CSS, you don't need Javascript.
>
> **[1:07](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=67)** So inside of my print styles, I'm just going to keep on adding here.
>
> **[1:11](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=71)** I'm going to scroll on down here to the bottom, and I'm going to put in some new styles here.
>
> **[1:17](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=77)** And so we need some funky selectors in order to make this happen consistently.
>
> **[1:22](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=82)** So I'm going to start with, of course it's an A tag, it has an href attribute inside of the square brackets.
>
> **[1:30](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=90)** Remember the square brackets here with just an attribute inside of them, but with no value, indicates that we're just testing for the presence of a href attribute.
>
> **[1:41](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=101)** We are not testing for its value.
>
> **[1:44](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=104)** And then we're going to use the pseudo element of after, so we want this style to occur after our link.
>
> **[1:54](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=114)** So that's what I mean by a funky selector.
>
> **[1:56](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=116)** I have a course called CSS selectors, it's available here in the library.
>
> **[2:01](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=121)** If you want to learn more about some of the wackiness associated with these less commonly used selectors.
>
> **[2:07](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=127)** But this is going to be so helpful for us.
>
> **[2:10](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=130)** Inside of this, we're going to use the content property, and we are going to type in this weirdo looking string.
>
> **[2:17](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=137)** So we're going to put in quotes with a space and a parenthesis, just like that.
>
> **[2:23](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=143)** And so that will print out after the link.
>
> **[2:26](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=146)** First of all a space and then a parenthesis, and then what we want is the actual value of our href attribute, right?
>
> **[2:36](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=156)** So we're going to say attrhref, so that is the notation that will go get the href value in that attribute in the html tag, and write it here in the content inside of one parenthesis, and then we should probably close that up, so we can just put in another one here on the other side.
>
> **[2:57](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=177)** So that is what that crazy line of code looks like.
>
> **[3:01](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=181)** And as it turns out, the font size is a little bit big when this happens, for whatever reason.
>
> **[3:07](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=187)** So I am going to say the font size will be the base font size.
>
> **[3:15](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=195)** Using my variables here.
>
> **[3:17](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=197)** Okay, so if we just do that much so far, if you go ahead and save that, and we take a look at the webpage, refresh, nothing has changed here.
>
> **[3:28](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=208)** So we just still have our icons, our links and stuff.
>
> **[3:32](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=212)** Nothing's showing here, but if we go to our print view, and scroll on down to the second page, there it all is, so you can see, for example, this is a fictitious company created by LinkedIn Corporation with a link to LinkedIn.
>
> **[3:46](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=226)** And you can see here that we have our various social media links with all of their links spelled out so nicely.
>
> **[3:53](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=233)** So that's really absolutely fabulous that we can put all of that information here on the page.
>
> **[3:59](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=239)** But now I can't really read these social media links.
>
> **[4:04](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=244)** That is a very confused looking little bunch of text right there.
>
> **[4:08](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=248)** So let's make some other changes to this as well.
>
> **[4:12](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=252)** So I'm going to add some additional styling.
>
> **[4:14](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=254)** If you notice, all of my social media links are inside of a div with a class of social, so I can distinguish between all of the links.
>
> **[4:23](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=263)** This is for every link that's on the webpage.
>
> **[4:25](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=265)** Now I can distinguish forth those links specifically, so for the social links, a href.
>
> **[4:35](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=275)** So if they have links, which they all do, then I'm going to do some other things.
>
> **[4:41](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=281)** Let's say display block and let's give them a bit of margin on the bottom.
>
> **[4:48](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=288)** Once again, I'm going to go to inches because it's print.
>
> **[4:52](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=292)** If you save that, and we go back to our style sheet, I cancel out of this, refresh my page, and go take a look at the print preview again.
>
> **[5:05](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=305)** You'll see down here towards the bottom, doesn't that look better?
>
> **[5:09](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=309)** Now that I've put them into block instead of inline, which is what a link is by default, now I can have each of these links on its own line, right next to its icon and I have a nice little bit of breathing room in between each of these.
>
> **[5:24](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=324)** The last thing that I want to do here with these social media references, they all have the parenthesis around them, and that's lovely pretty much for everywhere else in the document, but for these particular links, I'd actually like it to not have parenthesis.
>
> **[5:38](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=338)** So let's just reformat that as well.
>
> **[5:41](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=341)** So if we jump back here into our code, let's add one more style so social A href, and square brackets again after.
>
> **[5:53](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=353)** So this will be second and of course, more specific than the one that comes here on line 223, this particular declaration is going to take priority for the social media icons.
>
> **[6:04](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=364)** So here we'll say instead content, instead of the parenthesis, we'll say just simply a nice space right there between the quotes, and then right after that, attr href, just like that.
>
> **[6:21](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=381)** And if you save that and we get to go back to our webpage, refresh one more time, take a look at the print one more time.
>
> **[6:32](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=392)** So now you can see here this is much more readable without the parenthesis for all of our social media links.
>
> **[6:40](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=400)** So that's really going to add a lot to this particular printout; it's going to help H+ Sport because now people know where to go for their social media pages if this gets printed out, and it's going to help the user who may be interested in that information.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), if, (1), default, (1)
> **Env Vars:** url (2), css (2)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (3)
> **Analogies:** just like (2), for example (1)
> **Cross-References:** go back to (2)
> **Speakers:** - links (1)

#### Complex media queries for print and page orientation
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=0)** - [Narrator] Because we've been putting our print styles inside of a media query, we can test for more than one parameter when setting up our media query.
>
> **[0:11](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=11)** We don't have to just test for print, we could also test for orientation of the screen, we could test for min-width or max-width, we could test for aspect ratios.
>
> **[0:21](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=21)** There's a ton of stuff anything that you test with a media query you can combine here with print.
>
> **[0:29](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=29)** If you want more information about how these more complex media queries work and what kind of parameters are available, be sure to take a look at my other course which is called CSS Advanced Media Queries which is available in the library.
>
> **[0:42](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=42)** I'll talk to you a lot about this.
>
> **[0:44](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=44)** For now what I'm going to do, I'm going to scroll down past all of the styles that I have written so far.
>
> **[0:50](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=50)** To the very bottom of my CSS Document.
>
> **[0:52](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=52)** And I'm just going to set up a little test media query here.
>
> **[0:56](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=56)** So @media print.
>
> **[0:59](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=59)** And because this is a way we do this, if we are going to test for it has to be the media print and we want to test for something else.
>
> **[1:07](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=67)** Let's also test for orientation of landscape.
>
> **[1:12](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=72)** And then we're just going to say body color red.
>
> **[1:19](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=79)** Not going to be pretty but it will be obvious when that particular style gets implemented.
>
> **[1:25](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=85)** So lets go on ahead and just do that so far then we're going to test in Chrome and Firefox.
>
> **[1:31](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=91)** We're going to do a lot of this back and forth kind of stuff here as we test these media queries.
>
> **[1:36](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=96)** So if we go to Firefox first, going ahead and refresh here, I'm going to go to file print.
>
> **[1:43](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=103)** Make sure that you are in portrait orientation and we're going to open this in preview or save as PDF.
>
> **[1:53](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=113)** And you see here, well that didn't work.
>
> **[1:56](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=116)** That's a good thing.
>
> **[1:57](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=117)** Because remember in media queries, when we say orientation of portrait or orientation of landscape, what that is referring to is a portrait screen would be longer than it is wide.
>
> **[2:10](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=130)** A landscape screen would be wider than it is tall.
>
> **[2:13](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=133)** It actually has nothing to do with the orientation of the phone itself or a tablet.
>
> **[2:18](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=138)** It has to do with the widths of the various screen dimensions.
>
> **[2:22](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=142)** So obviously this didn't work here inside of Firefox.
>
> **[2:26](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=146)** We can do a quick test here.
>
> **[2:28](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=148)** If we go to file print one more time, and this time I'm going to switch it to landscape view and we'll go ahead and preview that one more time.
>
> **[2:39](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=159)** And of course that did work.
>
> **[2:41](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=161)** So now we've got red text here because I happened to be printing it in landscape instead of in portrait.
>
> **[2:48](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=168)** So that's pretty cool.
>
> **[2:49](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=169)** That would mean that you could actually style things differently depending on people's paper orientation in their printer.
>
> **[2:57](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=177)** So let's check and see how that works inside of Chrome.
>
> **[3:00](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=180)** So if we go to Chrome, refresh our page, and we'll go over here to file print.
>
> **[3:05](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=185)** It's even easier here to test this.
>
> **[3:09](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=189)** So this is portrait layout.
>
> **[3:10](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=190)** You'll see here, it's showing the red text.
>
> **[3:13](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=193)** So it didn't exactly work inside of Chrome and if we go to our layout of landscape, then that is also red text.
>
> **[3:21](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=201)** So, well it's a lovely idea.
>
> **[3:23](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=203)** It works really well on Firefox, not so much on Chrome.
>
> **[3:28](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=208)** Alright, let's try something else.
>
> **[3:30](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=210)** So one of the other things that you could do here would be instead of a orientation query, you could do a min-width.
>
> **[3:40](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=220)** You might think well, okay so if Firefox and Chrome are having difficulty understanding portrait and landscape, maybe I could just set it minimum width.
>
> **[3:50](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=230)** And if we hit that minimum width then we could apply these particular styles.
>
> **[3:55](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=235)** So if we said something like, a minimum width of 6.5 inches, once again, it's print.
>
> **[4:02](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=242)** So we could use inches as a unit of measure here, let's go ahead and try out that media query across our various browsers.
>
> **[4:12](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=252)** So I'm starting here in Chrome.
>
> **[4:14](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=254)** If you go ahead and refresh, and then print.
>
> **[4:20](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=260)** So clearly it's not working here in portrait mode.
>
> **[4:24](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=264)** If I switch over to landscape, then it does work.
>
> **[4:28](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=268)** So Chrome is happier here with a specific minimum width as opposed to the more generic portrait versus landscape.
>
> **[4:37](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=277)** And let's go on ahead and do the same test here for Firefox.
>
> **[4:42](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=282)** If we go on ahead and refresh our page and then go to file print.
>
> **[4:48](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=288)** We're going to do this in portrait mode first.
>
> **[4:53](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=293)** Make our PDF.
>
> **[4:56](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=296)** There it is, it's red here in portrait mode.
>
> **[5:00](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=300)** Which doesn't bode well for landscape, but we'll give it a shot.
>
> **[5:06](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=306)** So file print one more time and I'm going to switch it to landscape.
>
> **[5:10](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=310)** Open it in preview again.
>
> **[5:13](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=313)** And so that's red text in both of those.
>
> **[5:16](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=316)** So as you can see here there's lots to test when it comes to using these complex media queries inside of these various browsers at this point in time.
>
> **[5:28](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=328)** You're just going to have to got through and set up your media query.
>
> **[5:31](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=331)** Do something simple like I did.
>
> **[5:33](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=333)** Make the text red because that's really obvious if it's working or it's not working.
>
> **[5:37](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=337)** And then go through and work on your various settings and see what you can do.
>
> **[5:43](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=343)** It would be really helpful in for some web pages if you wound up being able to apply different styles if it was printing in landscape mode versus portrait mode.
>
> **[5:52](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=352)** And I'm sure with enough fibling here you could find a set of media queries that would do exactly that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (3), this. (2), else. (2), this, (1)
> **UI Navigation:** go to (6), scroll down (1)
> **Tools:** firefox (6)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** css (2), pdf (2)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (2)
> **Versions:** 6.5 (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=0)** - [Instructor] Now that you have a sense of how to prepare a webpage for print using basic CSS you already know, let's apply that to a new page.
>
> **[0:15](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=15)** In your exercise files folder, there's a page here from Red30Tech.
>
> **[0:20](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=20)** You want to set this up for print style so that it looks as good as you can get knowing what you know so far.
>
> **[0:27](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=27)** So let's just take a quick peek at this webpage.
>
> **[0:30](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=30)** So as you see, you have a lovely navbar up here at the top.
>
> **[0:33](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=33)** We have a logo, we have a big, beautiful image at the top of the page, we have all of this text here talking about artificial intelligence and the future of AI technology, and a sidebar talking about careers in artificial intelligence.
>
> **[0:48](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=48)** And of course, it's fully responsive.
>
> **[0:51](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=51)** So if we start to resize our webpage, let's go ahead and scroll that down a little bit, you can see here that our box is going to jump down here underneath of our text.
>
> **[1:05](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=65)** And if we squash this down a little bit further, that is the way that our webpage is going to wind up looking here.
>
> **[1:12](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=72)** So that is there on Chrome, and let's just take a quick peek at how this looks on print.
>
> **[1:20](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=80)** So if you print preview the page, put it back to portrait here.
>
> **[1:24](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=84)** You can see there's the navbar up there on the top, the logo, the big picture, and then all of the text here and the sidebar down there on the bottom and the text down here in the footer.
>
> **[1:36](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=96)** So, want you to give some thought as to how you might repurpose this so that it can look as good as possible for print.
>
> **[1:44](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=104)** So first of all, think about what items need to be printed and what can be skipped, what needs to be restyled for optimum printing, is this font size big enough to read and print, or is it too big, and what about the images that are here on this page?
>
> **[2:02](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=122)** So give that all some thought, and I will show you my answer in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Env Vars:** css (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=0)** - [Instructor] So, how'd you do with that challenge?
>
> **[0:09](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=9)** There's certainly a lot of stuff to think about and a lot of things to process based on that last chapter, and of course, there are only about a bajillion different answers to the question of how we could restyle this page to make it look better for print.
>
> **[0:24](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=24)** But I'll go ahead and share with you my answer, and maybe you've got some similar ideas or maybe you've done something a little different.
>
> **[0:31](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=31)** So let's talk about the HTML first.
>
> **[0:33](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=33)** I don't think I made any major changes to this HTML here at all.
>
> **[0:38](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=38)** As we scroll all the way down the page down to the footer, just to be a little different, down here in the footer, I did add a little bit of text here, for more information, visit our website at [red30tech.com](https://red30tech.com), and I set that up to be a print only style.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=53)** So I went ahead and leveraged that, and then of course I put in the matching display only on the screen style over here in the CSS.
>
> **[1:02](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=62)** Then inside of my print styles, I went ahead and resized my print down to a smaller size, switched it to Georgia, did a lot of similar things that I did with the previous round of styling.
>
> **[1:16](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=76)** A couple of things I did that are different, rather than not displaying the picture at all, this time I went ahead and did this line of code here on 193.
>
> **[1:26](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=86)** So I set the grayscale on the printer to one.
>
> **[1:31](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=91)** So this is the CSS filter property, you are able to apply a CSS filter to your images, in this case, a grayscale filter, and what I've done is I have, that has a gradient on it from zero to one.
>
> **[1:47](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=107)** And depending on which number you pick between zero and one, it will get rid of a certain amount of color information.
>
> **[1:54](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=114)** In this case, all of it.
>
> **[1:56](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=116)** So it'll be a black and white photo.
>
> **[1:59](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=119)** We've got the trick here of displaying our content as block, so we turned off the grid layout.
>
> **[2:05](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=125)** I went ahead and put in the writing out of the links on the page, changed some stuff in terms of colors and so forth.
>
> **[2:13](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=133)** So that's pretty much what I did here for the styling.
>
> **[2:18](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=138)** If we go on ahead and take a look at this inside of Chrome, if you go on ahead and refresh our page and then take a look at it in print format, so here you go.
>
> **[2:27](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=147)** So in this particular situation, I've got my picture here.
>
> **[2:31](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=151)** It's going to be printed, but it's going to be printed in black and white, and I could have easily applied that same color to the logo if I wanted.
>
> **[2:41](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=161)** Definitely a thing you could do.
>
> **[2:43](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=163)** And then the big problem, of course, was that aside that we had, that it was a dark aside, the footer was dark.
>
> **[2:49](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=169)** So I went ahead and changed a whole bunch of colors.
>
> **[2:51](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=171)** I still wanted to highlight that aside as a separate thing, but rather than doing that through making the background dark and the text light, which just takes a lot of printer ink, I just set a nice little border around it and rounded the corners, just like I had the corners rounded on the webpage.
>
> **[3:09](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=189)** So that still does a nice job of setting off that text here and making it clear it's separate from the rest of the document without taking up all of the printer ink.
>
> **[3:21](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=201)** Now we still have some work to do here on this.
>
> **[3:23](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=203)** If you take a look at the flow of the document and so forth, maybe you would like the page break to happen in a different spot.
>
> **[3:31](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=211)** Maybe you'd like some control over the margins on this webpage.
>
> **[3:34](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=214)** There's a bunch of other things that we can do with this document that are based on some new properties you might know, and we will look at all of that in the next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** css (3), html (2)
> **Code Keywords:** case, (2), let (1), this. (1)
> **Analogies:** picture (2), just like (1)
> **CLI Commands:** make (1)
> **URLs:** [red30tech.com](https://red30tech.com) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Beautiful Formatting for Print

#### Understanding paged media and CSS fragmentation properties
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=0)** - [Instructor] To this point in the course, we've worked with CSS properties that you might already know well.
>
> **[0:05](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=5)** These properties are used in print and in screen styling.
>
> **[0:09](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=9)** For example; font sizes, the display property, margin and padding and so forth.
>
> **[0:15](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=15)** Now we're moving into styling that's often considered more for the print realm.
>
> **[0:20](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=20)** However, many of these properties have some specific screen applications as well.
>
> **[0:26](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=26)** First, we'll take a look at some of the properties from the CSS Paged Media realm.
>
> **[0:32](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=32)** As it says here on the MDN, the Mozilla Developer Network website.
>
> **[0:37](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=37)** Paged Media defines how page switches are handled.
>
> **[0:40](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=40)** In other words, these are styles specifically for Paged Media, and that would be print.
>
> **[0:46](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=46)** Some of these properties are well supported.
>
> **[0:49](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=49)** Like the page break properties that you see listed here, whereas others like the page at-rule, this one right here is relatively poorly supported.
>
> **[1:00](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=60)** And we'll also take a look at some of these pseudo-classes here later in the course.
>
> **[1:06](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=66)** Next we'll look at some properties from the CSS Fragmentation realm.
>
> **[1:11](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=71)** MDN defines this as CSS that defines how content is displayed when it is broken or fragmented across multiple pages, regions, or columns.
>
> **[1:24](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=84)** Notice that big difference with these fragmentation properties.
>
> **[1:28](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=88)** They are for styling content that might break across pages or columns.
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=94)** These regions here that's still really experimental and I'm not going to address the regions in the course.
>
> **[1:39](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=99)** We'll talk about pages and columns though.
>
> **[1:42](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=102)** In other words, these properties have a wider scope, than the Paged Media properties, which specifically refer to pages.
>
> **[1:51](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=111)** Some of the properties here CSS Fragmentation, like these break properties; break after, break before, break inside, behave similarly to the page break properties in a print context.
>
> **[2:04](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=124)** But browser support varies.
>
> **[2:06](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=126)** Break properties may be used with columns as well.
>
> **[2:09](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=129)** While the page break properties are just for pages as the name implies.
>
> **[2:15](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=135)** Browser support is a super key factor to keep in mind as we look at these properties in this chapter.
>
> **[2:22](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=142)** Unfortunately, many of the properties I'm about to discuss are spotty with browser support.
>
> **[2:27](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=147)** You might choose properties based on what browsers are supported, as opposed to what is most current.
>
> **[2:34](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=154)** So for example, let's look at page break before here on the website.
>
> **[2:39](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=159)** Can I [use.com](https://use.com)?
>
> **[2:41](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=161)** It's a great website that reports, what CSS properties are compatible with which browser.
>
> **[2:46](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=166)** Now the CSS page break before property comes from CSS 2.1.
>
> **[2:51](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=171)** And it's generally well supported as you can see here, including in Internet Explorer six through 10.
>
> **[2:57](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=177)** Obviously CSS two was published a long time ago, but if we look at the break property in terms of break before we have a bunch of different possibilities here.
>
> **[3:09](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=189)** So the remember the first one here is for CSS regions, that's experimental and it's not supported anywhere.
>
> **[3:16](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=196)** That is not the one we're going to be talking about.
>
> **[3:18](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=198)** Make sure that you're reading the right thing.
>
> **[3:20](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=200)** So this is the one here for break before in Paged Media.
>
> **[3:24](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=204)** That is the context that we'll be using it in this course.
>
> **[3:27](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=207)** And you see here that Internet Explorer six to nine does not support break before it only supports page break before.
>
> **[3:35](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=215)** Hopefully you still don't have to support IE six to nine, but I know many of you still do and so that might impact what it is that you wind up using.
>
> **[3:45](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=225)** And then of course, we also have break before here in the context of multi-column layout and notice that that is not supported in Safari, although it's supported in other browsers.
>
> **[3:55](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=235)** So this is just something that you're going to have to keep in mind as we go through this part of the course, I'll show you a lot of can I use, as we talk about these various properties and with that in mind, let's dive into looking at these individual properties in our code.

> [!info]- Semantic Content
>
> **Env Vars:** css (10), mdn (2)
> **Code Keywords:** let (2), super (1)
> **Definitions:** in other words (2), is a  (1)
> **Documentation:** mdn (2)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **URLs:** [use.com](https://use.com) (1)

#### Setting printing page breaks
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=0)** - [Instructor] Let's start by examining the various kinds of page breaks that are available to us as well as the break properties.
>
> **[0:07](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=7)** Remember page break properties like before and after and inside are all part of the page media spec.
>
> **[0:15](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=15)** They're all for print, and the break properties can be used for columns as well as for pages.
>
> **[0:22](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=22)** And so we're going to switch to a different example for this chapter.
>
> **[0:26](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=26)** You'll recognize this from the challenge at the end of chapter two.
>
> **[0:29](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=29)** This is the Red30 website, and this is the way it looks right now on screen.
>
> **[0:35](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=35)** If we take a look at this on print real quick, you'll see this is the way it's looking here inside of Chrome.
>
> **[0:43](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=43)** Very nice; I've hidden the picture here, and as you scroll down, we have this "Careers in Artificial Intelligence" right now.
>
> **[0:51](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=51)** That is a box and that box is breaking across this page break, and we probably would like to have that box all on one page or another.
>
> **[1:01](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=61)** So we might give some thought as to how we're going to do that.
>
> **[1:05](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=65)** It is possible to specify where exactly a page break will occur when printing.
>
> **[1:09](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=69)** And there's two ways to do that.
>
> **[1:11](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=71)** One is with the page break properties, and the other is with the break properties.
>
> **[1:15](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=75)** I'm going to show you a little bit of both of those.
>
> **[1:18](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=78)** So let's go and write some code to make that happen.
>
> **[1:22](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=82)** So if we jump back into our Visual Studio code here, I'm going to scroll all the way on down to my print properties, and I'm just going to keep on adding to the bottom of these print properties.
>
> **[1:32](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=92)** So right here after the very last one, which is the footer print property, I'm going to just go ahead and drop in a paragraph here and say page-break-after: always; So that is one of our possible values for page break after, which is always put a break after a paragraph.
>
> **[1:54](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=114)** And hopefully, you immediately think that sounds a little excessive.
>
> **[1:59](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=119)** You'd be correct, but let's go ahead and take a look at it anyway.
>
> **[2:04](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=124)** So if we go on ahead and refresh our webpage and then take a quick peek at it on print, sure enough, after every paragraph, we now have a page break.
>
> **[2:17](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=137)** Fabulous.
>
> **[2:20](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=140)** Okay, even inside of our big box here, that was a paragraph, and so it's on one page.
>
> **[2:26](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=146)** Our border just stretches on into the next page, woo, for quite awhile, apparently.
>
> **[2:31](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=151)** And then we finally get to the end of it here.
>
> **[2:34](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=154)** Well, this is kind of silly.
>
> **[2:35](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=155)** You would never do this in real life.
>
> **[2:37](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=157)** But that's the general idea of how that property works.
>
> **[2:40](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=160)** So if we go back, then, to make this a little bit more realistic, one, you probably don't want to do this through HTML tag styles the way that I was just doing here.
>
> **[2:50](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=170)** A class is probably a way that makes this a little bit more flexible, because you're never really quite sure where you want a page break to occur, so let's go on ahead and make a class called breakafter.
>
> **[3:03](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=183)** And that's going to be the page-break-after: always; and then we can apply that break after, how about after the article?
>
> **[3:11](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=191)** So after the article is through, we want to break there, and that would put our box on a page by itself, so I would just simply place this class of breakafter right on the article tag.
>
> **[3:26](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=206)** Just like this: class=breakafter so in other words, in theory, it's going to go ahead and print my whole article here and then when I reach the end of the article, the page break is going to occur right here.
>
> **[3:41](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=221)** Let's see if that actually happens.
>
> **[3:44](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=224)** So, if we go on ahead and refresh our webpage one more time, and go to our print view, sure enough, there's our text, then there's a break, and then we have our box on the next page.
>
> **[3:57](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=237)** So this is one possible solution to this problem.
>
> **[4:00](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=240)** Another way that we could do this is by using a different value.
>
> **[4:05](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=245)** And I'm going to show you that now.
>
> **[4:08](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=248)** So, I'm just going to quick remove that class that I put here in the article, and instead, I'm going to write a different class here.
>
> **[4:18](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=258)** I'm going to call this one breakavoid.
>
> **[4:22](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=262)** And this one, I'm going to say break-inside: avoid; which is another common value here for the break properties.
>
> **[4:34](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=274)** Always avoid are two of the most commonly used ones.
>
> **[4:39](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=279)** So basically, I'm saying inside of the box, I'd like to avoid a page break, so if I use that instead, then when I get to my div with the class of aside, I'm just going to give this a second class as well: breakavoid, so in other words, I want to try not to break up this box and specifically this div with the class of aside and breakavoid, so let's see what that does for us.
>
> **[5:04](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=304)** I'll save our CSS.
>
> **[5:08](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=308)** Refresh the page.
>
> **[5:10](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=310)** And then go on ahead and print one more time.
>
> **[5:14](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=314)** And you see here, that has exactly the same result, so since I've said avoid putting a break inside of this part of the page, the printer has automatically moved this on to the next screen.
>
> **[5:26](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=326)** So either one of these approaches would work in the case of the particular example, so these are things you might want to think about.
>
> **[5:34](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=334)** Do you want a break?
>
> **[5:35](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=335)** Make your breaks before a certain box on your page, after that box, or do you want to prevent breaks from happening inside a box, or do you actually want the breaks to happen inside of the box?
>
> **[5:45](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=345)** Lots and lots of options with these various properties and values.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), break, (3), switch (1), break. (1), this: (1)
> **CLI Commands:** make (4)
> **UI Navigation:** switch to (1), scroll down (1), go to (1)
> **Definitions:** in other words (2), is a  (1)
> **Env Vars:** html (1), css (1)
> **Analogies:** picture (1), just like (1)
> **Documentation:** spec (1)
> **Tools:** visual studio (1)

#### Creating columns within longer documents
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=0)** - [Instructor] If you take a look at the exercise files for this video, drop it in a browser, and then go on ahead and pull up a print preview here.
>
> **[0:08](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=8)** You'll notice that I have taken out the page break from the previous video.
>
> **[0:12](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=12)** And because I'd like to look at something else, another way that we could address this problem of this box that splits over a couple of pages the way it does here.
>
> **[0:22](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=22)** So we could probably shorten up this text that's up here on the top of the page using CSS columns.
>
> **[0:29](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=29)** So CSS columns are a property that are useful for both screen and print media.
>
> **[0:34](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=34)** And if you're really happy with the way your screen is looking maybe it's just something you want to apply to print.
>
> **[0:41](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=41)** Maybe you want to have columns for print, but not on the screen itself.
>
> **[0:45](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=45)** So let me show you how the columns work.
>
> **[0:48](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=48)** It's a really fast thing to apply and then you'll see the impact here in the printed area.
>
> **[0:54](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=54)** So go ahead and cancel out of that and we'll jump back into VS code here.
>
> **[1:01](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=61)** And I am going to scroll on down to roughly line 202 in my CSS.
>
> **[1:08](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=68)** Right here, where I have this article with a margin bottom of zero and I'm simply going to add into the property called columns two, that's it.
>
> **[1:18](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=78)** So that is all that you need to do to create two columns of text.
>
> **[1:22](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=82)** And since we've put this inside of our print media query that will be available for print only.
>
> **[1:29](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=89)** So if we go on ahead and save this and refresh our webpage once again real quick and then take a look at it in print format, you'll see here that we have a lovely two column layout and that has made this very compact.
>
> **[1:47](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=107)** Notice that the box here has pulled up really nicely onto that first page.
>
> **[1:51](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=111)** All we have now on the second page is our disclaimer.
>
> **[1:55](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=115)** So columns are a great way of shortening up your text when printing and they're also very easy to read because of the short line lengths associated with the columns.
>
> **[2:07](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=127)** Now by default the browser, as you can see here, went ahead and made these of equal widths but notice that this applies to the whole article.
>
> **[2:15](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=135)** So the title, which is this Technology Forecasts Artificial Intelligence is over just the first column.
>
> **[2:23](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=143)** And you see the second column and the height is up there, right with that H1.
>
> **[2:28](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=148)** So what if you wanted to have this H1, the title of the whole piece stretching all the way across all the columns but you wanted to have the text in columns underneath of it.
>
> **[2:38](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=158)** How might you go about doing that type of thing?
>
> **[2:41](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=161)** Well, so we can do that if you'd like to give that a whirl.
>
> **[2:44](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=164)** So here in our HTML, we added that column declaration to the article tag.
>
> **[2:51](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=171)** And we have no real way of separating the H1 from the rest of the document based on the HTML that we have here at the moment.
>
> **[2:58](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=178)** But what we could do is just after that H1 we could drop in a div with a class of say something like article body, since this is the body of that article, and then scroll down forever until the end of the article and then we could close the div.
>
> **[3:20](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=200)** And then of course we'll need to make a corresponding style for this.
>
> **[3:24](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=204)** So just after that article declaration here, so around line 205, 206, I'm going to add my article body and I'm going to set the columns to two here and pull that off of the article.
>
> **[3:43](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=223)** So now the columns property is applied to just that div.
>
> **[3:46](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=226)** That div only contains the paragraphs and the subheadings and so forth, not the H1 that goes across the whole article.
>
> **[3:53](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=233)** So if we test that now inside of Chrome, go on ahead and refresh the page, and we do a print preview, so there you go.
>
> **[4:03](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=243)** Now you see Technology Forecasts Artificial Intelligence stretching very nicely all the way across the top of the page and then we have two nice even columns here underneath.
>
> **[4:12](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=252)** That looks really good.
>
> **[4:13](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=253)** So that would be a lovely way of formatting this as well.
>
> **[4:17](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=257)** Notice too, that, that div that I just added, because I have a style associated with it for print, but not for screen, the screen layout has been not impacted at all by the additional div that was put in.
>
> **[4:32](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=272)** So keep that in mind as you add potentially more markup to help support your print styles.
>
> **[4:39](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=279)** Back to that print view again real quick, there's probably a little bit more that you could do here to clean this up a little bit more like give some more space around the H1 or style the H1 a little bit differently.
>
> **[4:51](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=291)** Maybe you could put a nice little subtle line under it, a little bit of margin, something like that, but the general shape here is what I wanted to communicate to you and you can get a sense of how these columns can really help improve the quality of the printed product that you generate for your web pages.

> [!info]- Semantic Content
>
> **Env Vars:** css (3), html (2)
> **Code Keywords:** else, (1), let (1), this. (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Tools:** vs code (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Adding hyphenation
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=0)** - [Instructor] If you've read any materials printed on paper lately, like a book, a magazine, or a newspaper, you will undoubtedly see hyphenated words at the ends of lines of text.
>
> **[0:09](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=9)** It's possible to add hyphens on the web, as well.
>
> **[0:12](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=12)** And it's even really easy to do, at least for English.
>
> **[0:15](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=15)** The property is called hyphens.
>
> **[0:17](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=17)** It's described here on the Mozilla Developer Network, MDN.
>
> **[0:21](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=21)** And unfortunately, the browser support leaves something to be desired if you want to write your webpage in a language other than English.
>
> **[0:28](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=28)** So this of course is [caniuse.com](https://caniuse.com), and as you can here as of this recording about 96.5% of users have access to this, but unprefixed is only 77%, so I will show you how to write the prefixed code here for writing hyphens.
>
> **[0:47](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=47)** And this first box at the top of the page has to do with English, so this is how hyphens would be put in for that.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=53)** But, of course, there are other languages that are out there, so if I just scroll on down in the order that they appear, for example, here with Czech, we have support for it in Safari, but no other browser here in, I'm not sure what Latin is, but here we go, it's only available in Firefox.
>
> **[1:11](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=71)** Here we have Dutch, it's available in Firefox and Safari.
>
> **[1:15](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=75)** Welsh is available only in Firefox.
>
> **[1:18](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=78)** So, you see the pattern here.
>
> **[1:19](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=79)** It's often Firefox, Safari, or both of those.
>
> **[1:24](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=84)** And so, the way this works of course is that there's some kind of dictionary that the browser's referring to to determine where to set the various hyphens, and that is a great thing if you're using English, not so great for other various languages.
>
> **[1:39](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=99)** So if we go back here to the MDN webpage, you'll see here, the property is called hyphens.
>
> **[1:44](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=104)** It has three possible properties.
>
> **[1:46](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=106)** So, auto means that it's going to automatically set those hyphens as you see here, extra, hyphen, ordinarily.
>
> **[1:54](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=114)** And so, with English again, that's pretty simple, it'll set those for you.
>
> **[1:59](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=119)** None, of course, means that it won't set any hyphens at all.
>
> **[2:04](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=124)** Manual, it means that you're going to have to code your own break points for these particular hyphens.
>
> **[2:11](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=131)** And if you scroll on down here, a little further down in the document, it'll tell you how this works.
>
> **[2:18](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=138)** There's two kinds of possible hyphens.
>
> **[2:20](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=140)** The hard hyphen character will always hyphenate that word every single time, whether a hyphen is needed or not.
>
> **[2:28](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=148)** The shy version, as it says, invisible, soft hyphen, shy means that this is a character you'll actually put in your text, and if a hyphenation is needed at that point, then the hyphen will display; otherwise, it is ignored.
>
> **[2:47](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=167)** So clearly, if you were going to leverage something like these manual hyphens or the soft hyphens, that is probably something you would do on the backend, setting up all those hyphens.
>
> **[2:57](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=177)** You're probably not going to do manually in a HTML webpage.
>
> **[3:01](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=181)** That would take an amazing amount of time in order to set that up and make it responsive and all the rest of that.
>
> **[3:07](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=187)** So auto is the value that we ultimately want here for our hyphens.
>
> **[3:12](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=192)** And by the way, of course, this works on screen and on print.
>
> **[3:15](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=195)** So why not set it up for everything?
>
> **[3:18](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=198)** So, let's go ahead and jump on into our code.
>
> **[3:21](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=201)** I'm going to set this up for both screen and print.
>
> **[3:23](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=203)** I'm going to go ahead and put it on the body tag here, and I'll show you exactly how to write this.
>
> **[3:28](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=208)** So this is --webkit-hyphens: auto is our value.
>
> **[3:36](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=216)** In other words, use the builtin dictionary.
>
> **[3:39](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=219)** - -moz-hyphens, also auto, and a hyphens: auto.
>
> **[3:49](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=229)** That's basically it.
>
> **[3:50](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=230)** So if you go on ahead and save your webpage, and then we'll come on back to our website and scroll down because I put it in the screen for the all area of my style sheet, where both screen and print are being affected.
>
> **[4:06](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=246)** You'll see here, we already have some hyphens showing up here on my screen page.
>
> **[4:12](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=252)** And of course, when I go to print, you will see some hyphens that show up here as well.
>
> **[4:19](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=259)** These columns look perhaps a little bit more square than they did before when we did not have hyphens in place.
>
> **[4:26](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=266)** It makes this gap a little bit more distinct and obvious when the hyphens are there, because it's more likely that these line links are similar between these various paragraphs of information.
>
> **[4:37](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=277)** So that's how you set up hyphens.
>
> **[4:39](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=279)** You can use them just on print or just on screen or in both locations.
>
> **[4:44](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=284)** That is all a matter of your own preferences and your own design work.
>
> **[4:48](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=288)** One final note about hyphens.
>
> **[4:50](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=290)** This is a progressive enhancement to your website.
>
> **[4:53](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=293)** If your browser is supporting it, then fantastic.
>
> **[4:56](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=296)** That means you get the hyphens in the screen or in the print, but if it's not supported, it's not really a big deal.
>
> **[5:02](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=302)** You just aren't going to see the hyphens, but the page is still going to be usable and readable without them.
>
> **[5:08](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=308)** The rag is just on the right hand side of all these paragraphs is called the rag.
>
> **[5:12](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=312)** It's going to be a little bit more raggedy if you don't have the hyphens in place.
>
> **[5:16](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=316)** So there really isn't any excuse not to turn on the hyphens on your web page if you're going to have a lot of text for printing.

> [!info]- Semantic Content
>
> **Definitions:** means that (4), is called (3), is a  (3), in other words (1)
> **Tools:** firefox (4), safari (3)
> **Code Keywords:** this, (1), let (1), this. (1)
> **Env Vars:** mdn (2), html (1)
> **Documentation:** mdn (2)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** make (1)
> **URLs:** [caniuse.com](https://caniuse.com) (1)

#### Controlling widows and orphans
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=0)** - [Instructor] These aren't the widows and orphans that you were thinking about.
>
> **[0:04](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=4)** These are CSS fragmentation widows and orphans, which have their own unique definition.
>
> **[0:10](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=10)** In this context, an orphan is the number of lines that appear at the bottom of a page, region or column, while widows are the lines that appear at the top of a page, region or column.
>
> **[0:21](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=21)** In other words, they're lines.
>
> **[0:22](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=22)** They're not just words.
>
> **[0:24](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=24)** As previously discussed, regions are experimental.
>
> **[0:28](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=28)** So mostly we're just considering widows and orphans with pages or with columns.
>
> **[0:33](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=33)** As Dudley Story has said, "Orphans are left alone at the beginning, "whereas widows are left alone at the end."
>
> **[0:40](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=40)** So that might help you remember which goes where.
>
> **[0:45](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=45)** In terms of browser support, every browser but Firefox supports widows and orphans.
>
> **[0:51](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=51)** But fortunately, like hyphens, widows and orphans are a progressive enhancement.
>
> **[0:56](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=56)** Firefox users won't enjoy the benefit, but other browsers will.
>
> **[1:00](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=60)** There's no downside to using widows and orphans.
>
> **[1:04](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=64)** Let's take a look at our webpage as it currently stands.
>
> **[1:08](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=68)** If we go ahead and go to our print view here, we actually have widows that are showing up right here.
>
> **[1:15](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=75)** So at the top of our second column, we have two lines of text here that are hanging out up here at the top.
>
> **[1:22](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=82)** It looks a little bit odd perhaps and that is the concept of a widow right there.
>
> **[1:28](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=88)** That's what that is.
>
> **[1:31](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=91)** By default, widows and orphans are set to a value of two.
>
> **[1:35](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=95)** So in other words, two lines.
>
> **[1:36](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=96)** That's what we have there right now.
>
> **[1:38](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=98)** And that's what's going on with our default settings.
>
> **[1:41](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=101)** But of course, we can increase that number, or obviously decrease that number.
>
> **[1:46](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=106)** Although decreasing the number might make the problem worse.
>
> **[1:50](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=110)** So you probably want to increase it from two, if that is an issue on your webpage.
>
> **[1:56](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=116)** So let's go ahead and take a look at our code.
>
> **[1:59](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=119)** And if we scroll on down the page here to our print styles, I'm just going to keep adding to this.
>
> **[2:06](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=126)** We're going to go to around line 205 to our article again.
>
> **[2:10](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=130)** The article is, of course, the container for that particular bunch of text that's showing up there on the print.
>
> **[2:17](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=137)** And what I'm going to do here is I'm going to put in widows three.
>
> **[2:22](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=142)** So in other words, there has to be at least three lines of text at the top of the next column, or the top of the next page, in order for that page break to happen where it does.
>
> **[2:34](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=154)** If there are less than three, then a page break will occur before that.
>
> **[2:38](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=158)** And we'll have more text, in theory, at the top of the page instead.
>
> **[2:43](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=163)** Orphans are going to work the same way except it's the bottom of the page.
>
> **[2:46](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=166)** So if you go ahead and make that change there in your CSS, let's take a look at our webpage again.
>
> **[2:56](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=176)** Go on ahead and refresh and view this in print.
>
> **[3:01](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=181)** You'll see that now our widows have pushed on down here to the bottom of the column.
>
> **[3:06](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=186)** Now it just so happens to be that we have a title up here at the top of the next column.
>
> **[3:11](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=191)** We probably want to do something more with the formatting up here to make this a little bit clearer, but we have solved our widow problem.
>
> **[3:18](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=198)** Unfortunately, we introduce a new problem here with our box splitting over our screen again, but there's a lot of things that we could apply to this to make this work.
>
> **[3:27](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=207)** Since we are going to be printing this disclaimer and footer down here on the bottom, you could always put in one of those page breaks, or breaks, as we did in a previous video and make this whole box move on down to the second page.
>
> **[3:39](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=219)** That would definitely solve that particular problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** let (3), default, (1), this. (1)
> **Definitions:** in other words (3), is an  (1)
> **Env Vars:** css (2)
> **Tools:** firefox (2)
> **UI Navigation:** go to (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Using @page to create page margins
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=0)** - [Instructor] The last group of properties I want to talk about is the @page property.
>
> **[0:05](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=5)** And some of this is well supported and some of it isn't supported at all.
>
> **[0:09](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=9)** So in this video, I'm going to talk about the @page that is supported.
>
> **[0:13](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=13)** In the next video, it's going to to be about the @page that is not supported, but is incredibly cool and you should keep an eye on.
>
> **[0:20](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=20)** So we'll start here with @page and it's support.
>
> **[0:24](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=24)** This is, of course, can I use?
>
> **[0:26](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=26)** And if you take a quick look here at @page, generally speaking, it's supported, except in Safari.
>
> **[0:34](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=34)** So this is yet another progressive enhancement, though.
>
> **[0:38](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=38)** It's going to work.
>
> **[0:39](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=39)** If you have it available, it's great.
>
> **[0:41](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=41)** If you don't, it's really not that big a tragedy.
>
> **[0:43](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=43)** Basically @page is going to allow you to set printing margins for your page within your document.
>
> **[0:50](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=50)** And that's pretty much all that's going to be supported at this time.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=53)** So as you scroll on through here, there's a thing called Page Margin Boxes.
>
> **[0:57](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=57)** That is not supported by anything.
>
> **[0:59](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=59)** Size is something I'll talk about in the next video.
>
> **[1:02](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=62)** That's not supported.
>
> **[1:03](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=63)** Neither is Bleed or Marks.
>
> **[1:05](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=65)** I'm going to talk about all of those in the next video, but the page, in terms of setting the margin per page or the page dimensions, that's what I'm going to cover now.
>
> **[1:14](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=74)** As you can see here, no support at all in Safari, and it's a little buggy in Internet Explorer and in Firefox, but once again, it's a progressive enhancement.
>
> **[1:25](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=85)** So you can certainly give it a shot.
>
> **[1:28](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=88)** So just to remind you what our website looks like so far, here is our webpage at this point in time.
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=94)** If we go on ahead and do a print preview of this, this is the way the page is looking at the moment.
>
> **[1:39](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=99)** You can see, we have a little bit of a margin here on either side, and this is likely a default that gets set by the web browser itself.
>
> **[1:48](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=108)** So if we go into our code and once again, I'm going to scroll all the way down to the end of my document, which is the print media query.
>
> **[1:56](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=116)** I'm going to add this to the very end of the print media query.
>
> **[2:00](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=120)** All you have to do is say something like @page, just like that.
>
> **[2:04](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=124)** And then inside of this, I'm going to say margin is 0.5 inches.
>
> **[2:10](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=130)** So give me a half inch on all four sides of my page.
>
> **[2:14](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=134)** If you go ahead and drop that in and save it, then we can go to our web browser, refresh the page, take a look.
>
> **[2:27](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=147)** And this has actually moved a little bit.
>
> **[2:29](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=149)** You see, we have a couple of extra lines that are going on to the next screen.
>
> **[2:33](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=153)** So here we now have a half inch around the entire document here on this page.
>
> **[2:41](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=161)** So that's lovely if you want to have the same amount of margin on each side, and just like every other margin property, you could specify different margins differently, if you wish.
>
> **[2:51](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=171)** But that would be applied to every page in your document.
>
> **[2:55](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=175)** So if you said, "Margin left one inch," the left margin of every page in your printout would have a one-inch margin on it.
>
> **[3:03](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=183)** Now, what if you wanted to have some extra space on one side of the page, one side of the physical page, but maybe so that you could put in some holes in it and stick it into a notebook that you might refer to later.
>
> **[3:17](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=197)** You would actually want to have a fat margin on the left margin of one page.
>
> **[3:23](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=203)** Maybe you want to double-side print it.
>
> **[3:25](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=205)** So when you flip the page over, you want that fat margin over on the right side of the page.
>
> **[3:30](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=210)** Is that possible?
>
> **[3:31](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=211)** Well, fortunately it is.
>
> **[3:33](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=213)** Let me show you how you can set that up as well.
>
> **[3:36](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=216)** So here I'm going to do this with some ridiculous size margins here, just so you can get a real sense of how this works.
>
> **[3:43](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=223)** I'm going to use the pseudo classes left and right.
>
> **[3:48](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=228)** Those pseudo classes are only used in the context of @page.
>
> **[3:52](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=232)** So if I say @page and then space, colon left.
>
> **[3:58](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=238)** That's the way you set this up, and we'll give it a margin on the right of two inches and then @page right, we're going to give it a margin on the left of two inches.
>
> **[4:17](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=257)** Okay.
>
> **[4:18](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=258)** So what is this going to do that's different than say, if I just spelled out a left or a right margin here in @page?
>
> **[4:25](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=265)** Well @page is going to apply this to every page.
>
> **[4:28](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=268)** These are going to apply it to pages as in a book.
>
> **[4:32](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=272)** So if we go on ahead and refresh our webpage and then view our printed format here, you'll see that our first page has a nice fat margin over here.
>
> **[4:46](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=286)** So again, you could use a three-hole punch on this page to prepare it for a notebook.
>
> **[4:52](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=292)** And if you were printing double-sided, then this page would print behind that one.
>
> **[4:58](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=298)** And these two margins here would match up exactly so, so that you would be able to do a whole punch and you would not punch through any text on either side of the page.
>
> **[5:09](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=309)** So that is the benefit of the left and the right pseudo classes.
>
> **[5:13](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=313)** The blank pseudo class is not well supported at this point in time, but that would pretty much describe how you can add interesting margins using the @page property.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (1)
> **Cross-References:** in the next (3)
> **Tools:** safari (2), firefox (1)
> **Analogies:** just like (2)
> **Versions:** 0.5 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Coming soon: Additional @page properties
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=0)** - [Instructor] There ae several additional @page properties that are coming to CSS soon.
>
> **[0:05](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=5)** At this point, none of these properties are supported in any web browser, unfortunately, and they are all experimental.
>
> **[0:12](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=12)** However, it's worth tracking what's coming up soon.
>
> **[0:14](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=14)** All of the properties discussed here would be listed inside of an @page declaration in your CSS.
>
> **[0:22](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=22)** Before we start, let's define a few quick terms commonly used in printing.
>
> **[0:26](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=26)** First up, there's a printable area.
>
> **[0:29](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=29)** That's this area here inside of this black line.
>
> **[0:32](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=32)** Anything inside of here is safe.
>
> **[0:34](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=34)** You can be sure that this information will be printed and included on whatever you're printing.
>
> **[0:40](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=40)** The space in between this box and these lines on the outside is called the bleed.
>
> **[0:45](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=45)** If you want to print something that goes all the way to the edge of the paper, you can figure your item to be printed within the bleed.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=53)** This part may be trimmed off but it ensures that the ink goes to the edge of the page.
>
> **[0:59](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=59)** These marks on the edge of the box are the crop marks.
>
> **[1:03](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=63)** These help the printer know exactly where the paper should be cut, and finally, these marks up here are various types of cross marks.
>
> **[1:11](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=71)** These have to do with registering colors when printing.
>
> **[1:14](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=74)** They're also used in processes like die cutting, embossing, or foil stamping.
>
> **[1:18](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=78)** With those terms defined, let's look at these new @page properties that leverage these printing conventions.
>
> **[1:26](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=86)** First up, the size property is useful for establishing a printable area and its orientation when printed.
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=93)** Right now, this is flexible between browsers as you've seen.
>
> **[1:36](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=96)** However, this would give us some clear expectations between browsers.
>
> **[1:41](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=101)** You could set a size as portrait or landscape.
>
> **[1:45](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=105)** Portrait is taller than wide, and landscape is wider than tall.
>
> **[1:49](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=109)** Doesn't have anything to do with the orientation of the device.
>
> **[1:53](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=113)** You could also set a single value, and if you do that, it's going to be interpreted as a square.
>
> **[2:00](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=120)** You can set two values, which are interpreted as the width and the height.
>
> **[2:06](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=126)** There's also some keywords you can use like letter, legal, ledger, A4, or other standards, and you can combine those keywords with other values like portrait or landscape or some sort of dimension.
>
> **[2:20](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=140)** Next, let's look at the marks property.
>
> **[2:23](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=143)** Marks: crop; will place crop marks at an appropriate spot outside of the page box as defined by the size property.
>
> **[2:32](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=152)** Marks: cross; will place a cross mark for alignment purposes somewhere outside of the page box.
>
> **[2:39](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=159)** And of course, marks: crop cross; will print both types of marks.
>
> **[2:46](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=166)** Let's look at the bleed property.
>
> **[2:48](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=168)** Remember, bleed is the area between the page box defined by the size property and the crop marks defined by the marks property.
>
> **[2:57](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=177)** Bleed has a length associated with it.
>
> **[3:00](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=180)** By default, that amount is six points as determined by the auto property and if the crop marks are turned on.
>
> **[3:09](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=189)** You can also provide a length value.
>
> **[3:11](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=191)** Bleed is a valid property only if crop marks are enabled.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1), default, (1)
> **Env Vars:** css (2)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** coming up (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=0)** - [Instructor] With all of these interesting CSS Fragmentation and CSS Paged Media Properties introduced it's time to apply them.
>
> **[0:14](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=14)** Here's that H plus sport page again see if you can apply some of the styling elements we've worked with in this chapter including page breaks or other breaks, columns, hyphenation, widow and orphan control and add page margins to make a great looking printed page.
>
> **[0:32](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=32)** As an added bonus, see if you can get the entire page to print in black and white including the images that are supposed to print.
>
> **[0:41](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=41)** I've left in all of the styling that we put in, in chapter two.
>
> **[0:46](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=46)** And if you just take a quick look at this page in printer format.
>
> **[0:50](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=50)** You'll see you're already in pretty good shape.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=53)** So we've got lots of texts on the page.
>
> **[0:55](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=55)** It's all in Sara fonts.
>
> **[0:58](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=58)** We've hidden the things that need to be hidden.
>
> **[1:01](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=61)** So it's not looking all that bad at the moment, but, think about the new concepts that you've learned in this chapter and see how you'd apply them to this particular page.
>
> **[1:11](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=71)** I'll show you my answer in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=0)** - [Narrator] So how'd you do with that challenge?
>
> **[0:09](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=9)** Hopefully it went okay for you.
>
> **[0:11](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=11)** I incorporated a whole lot of stuff into this webpage and it's looking so much better in print.
>
> **[0:17](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=17)** So let's go through all my changes and then we'll take a look at it inside of the browser.
>
> **[0:21](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=21)** So, first of all, I went ahead and turned on my hyphens.
>
> **[0:23](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=23)** I put it on the body tag, hyphens are inherited so that by putting it here on the body tag, my hyphen should carry all the way through my document, which is great, that's exactly what I wanted.
>
> **[0:35](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=35)** And then that was actually outside of my print media query.
>
> **[0:40](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=40)** Once we get to my print media query, everything else is inside of that.
>
> **[0:44](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=44)** So the very first thing that I did is h1, h2, h3, and my links have all been set to a black color.
>
> **[0:53](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=53)** Of course they were all sort of gold before I had said that one of the extra challenges in this project was to make it all black and white, and this was still displaying as gold.
>
> **[1:02](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=62)** So I went ahead and turned all that off, there we go, now it's displaying black.
>
> **[1:06](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=66)** Scroll down a little bit further, the images were still in color.
>
> **[1:11](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=71)** It's just those two images from the sidebar that were in question here.
>
> **[1:15](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=75)** The other image, the main image in the article I've hidden earlier.
>
> **[1:19](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=79)** So here I just added my filter gray scale from the CSS filters, that'll make those little images black and white for printing purposes.
>
> **[1:28](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=88)** So that was added, and then down here, I've added a whole bunch of stuff at the very end of my print media query.
>
> **[1:37](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=97)** So I created a breakafter and a breakavoid class, but I wound up only using the breakavoid class.
>
> **[1:43](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=103)** And I put that in a div around the chair rolls section of this article.
>
> **[1:48](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=108)** And the reason why I did that was, there was a weird break that was going on somewhere here with the chair rolls between one page and another and so by wrapping the div here, I'm making sure that chair rolls stays together, I believe if I recall correctly, it had the heading and then the paragraph, and then the bullets wrapped onto another page, it seemed like all that stuff should go together as a unit.
>
> **[2:10](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=130)** So now with this breakavoid in place, that will happen.
>
> **[2:14](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=134)** I've also added a margin here of 0.75 inches.
>
> **[2:20](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=140)** So it will have lots of breathing room when we print it.
>
> **[2:23](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=143)** I put my article in two columns and I also turned off some margin on my sidebar to tighten up some space a little bit.
>
> **[2:31](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=151)** So if we go ahead and take a look at that inside of our web browser, there's no change of course to the way the page looks on screen, just as has been true for the whole course.
>
> **[2:41](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=161)** But if we go on ahead and go to Print, you'll see here that I have, my exercises are all here.
>
> **[2:48](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=168)** My chair rolls has been kept together as a unit.
>
> **[2:51](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=171)** It's not rolling onto another page, which is really great.
>
> **[2:54](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=174)** I think that was a problem in Firefox.
>
> **[2:57](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=177)** And we can take look at our images here, they're displaying in black and white as coded, and this information is all together here on this page.
>
> **[3:07](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=187)** So that's the way it looks in Chrome.
>
> **[3:11](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=191)** Let's also take a quick peek at our page inside of Firefox as well.
>
> **[3:15](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=195)** If we go to File, Print, make sure you're printing into portrait mode, and then we're going to go to Open in Preview.
>
> **[3:28](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=208)** And here's the way this page looks here.
>
> **[3:31](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=211)** So you can see there's my logo, here's my text.
>
> **[3:35](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=215)** All of that, I remember I mentioned chair rolls, I had to put that together.
>
> **[3:40](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=220)** It looked like a fit really nicely in Chrome, but as you see here in Firefox, you can imagine that the chair rolls here probably showed up at the bottom of this column, a couple of lines, a little too much for widow and orphan control.
>
> **[3:52](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=232)** So in this case, I just used a page break to make sure that chair rolls came out together on the second page.
>
> **[3:59](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=239)** And then we have our information about the mineral water and the commitment to quality, and then all of our disclaimers and social media links.
>
> **[4:08](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=248)** So that's the way this page wound up looking in Firefox.
>
> **[4:13](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=253)** Your answers may have been somewhat different than mine, that doesn't make them wrong.
>
> **[4:17](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=257)** Remember that there's about a bajillion different ways you can style a webpage or style something up for print, maybe you had a different approach that worked even better than what I did here.
>
> **[4:28](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=268)** And that's all great.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** let (2), class, (1), class. (1), case, (1)
> **Tools:** firefox (4)
> **UI Navigation:** go to (3), scroll down (1)
> **Env Vars:** css (1)
> **Versions:** 0.75 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=0)** - Hey everybody, it's Jen Cranmer.
>
> **[0:02](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=2)** Thanks so much for watching CSS Print Style Sheets.
>
> **[0:05](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=5)** I hope you learn some new techniques that you'll use in your next project.
>
> **[0:10](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=10)** If you liked me here, you'll like me in some of my other courses as well.
>
> **[0:14](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=14)** In this course, we touched on using media queries for print styling.
>
> **[0:18](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=18)** Did you know that media queries can also be used for color detection, aspect ratio and more?
>
> **[0:24](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=24)** Check out advanced CSS media queries to learn more about the media in media queries.
>
> **[0:30](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=30)** How much do you know about inheritance in CSS?
>
> **[0:33](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=33)** How do you calculate specificity and how does the cascade really work?
>
> **[0:38](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=38)** Find out more in my course [[CSS- Inheritance, Specificity, and the Cascade]].
>
> **[0:44](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=44)** Finally, how well do you know all of the wonderful kinds of CSS selectors available?
>
> **[0:50](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=50)** From your basic element or descendant selector to the newest pseudo classes like has, where and is, I've got you covered in CSS Selectors.
>
> **[0:59](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=59)** Thanks again for watching, and I'll see you in another course soon.

> [!info]- Semantic Content
>
> **Env Vars:** css (6)
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - hey (1)


## Path Context

### In [[Learn CSS]]
← [[CSS Layouts- From Float to Flexbox and Grid]] | **12 of 12**

## Appears In

- [[Learn CSS]]

## Related Courses

_Courses sharing skills:_

- [[Making Sense of the CSS Box Model]] — Cascading Style Sheets (CSS)
- [[React- Building Styles with CSS Modules]] — Cascading Style Sheets (CSS)
- [[Cutting-Edge CSS]] — Cascading Style Sheets (CSS)
- [[Building Great Forms with HTML and CSS]] — Cascading Style Sheets (CSS)
- [[HTML & CSS- Creating Forms]] — Cascading Style Sheets (CSS)

---

[↑ Back to top](#)