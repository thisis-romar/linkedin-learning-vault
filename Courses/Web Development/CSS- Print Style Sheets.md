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
  - '[Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)'
prev_courses:
  - '[CSS Layouts- From Float to Flexbox and Grid](CSS%20Layouts-%20From%20Float%20to%20Flexbox%20and%20Grid.md)'
path_nav: '[{"path":"Learn CSS","position":12,"total":12,"prev":"CSS Layouts- From Float to Flexbox and Grid","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/cascading-style-sheets-css
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/CSS-%20Print%20Style%20Sheets.md)

![CSS: Print Style Sheets](https://media.licdn.com/dms/image/v2/C4E0DAQGWqNJbTO18sA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1601574383805?e=2147483647&amp;v=beta&amp;t=rccYxxCmoHKwh9H3jMkJCC91RXUgowUd0n9aNsAXNWQ)

# CSS: Print Style Sheets

> CSS makes it easy to create compelling online experiences, but style sheets also work for pages off the screen. The need for print persists and site developers should know how to create not just workable but appealing print results. Learn why print style sheets are important and how they can help improve the user experience for your website, in this course with veteran web designer and teacher Jen

> [LinkedIn Learning](https://www.linkedin.com/learning/css-print-style-sheets) | 1h 52m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome to CSS print style sheets](#welcome-to-css-print-style-sheets)
- [**1. Mechanics of Print-Based CSS**](#1-mechanics-of-print-based-css) (6 videos)
  - [Print style sheets and media queries](#print-style-sheets-and-media-queries)
  - [Creating a print style sheet and linking it to your document](#creating-a-print-style-sheet-and-linking-it-to-your-document)
  - [Creating a print media query](#creating-a-print-media-query)
  - [Previewing print style sheets without printing](#previewing-print-style-sheets-without-printing)
  - [The pitfalls of using dev tools for previewing printing](#the-pitfalls-of-using-dev-tools-for-previewing-printing)
  - [Understanding screen, print, aural, and the cascade](#understanding-screen-print-aural-and-the-cascade)
- [**2. Best Practices for Print-Based Styling**](#2-best-practices-for-print-based-styling) (10 videos)
  - [Best practices for styling for print](#best-practices-for-styling-for-print)
  - [Touring your example page](#touring-your-example-page)
  - [Hiding irrelevant information for print](#hiding-irrelevant-information-for-print)
  - [Changing webpage layouts for print](#changing-webpage-layouts-for-print)
  - [Overriding styles intended for screen display](#overriding-styles-intended-for-screen-display)
  - [Adding print-only information that is hidden from screens](#adding-print-only-information-that-is-hidden-from-screens)
  - [Writing URLs after links and social media icons](#writing-urls-after-links-and-social-media-icons)
  - [Complex media queries for print and page orientation](#complex-media-queries-for-print-and-page-orientation)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**3. Beautiful Formatting for Print**](#3-beautiful-formatting-for-print) (9 videos)
  - [Understanding paged media and CSS fragmentation properties](#understanding-paged-media-and-css-fragmentation-properties)
  - [Setting printing page breaks](#setting-printing-page-breaks)
  - [Creating columns within longer documents](#creating-columns-within-longer-documents)
  - [Adding hyphenation](#adding-hyphenation)
  - [Controlling widows and orphans](#controlling-widows-and-orphans)
  - [Using @page to create page margins](#using-page-to-create-page-margins)
  - [Coming soon: Additional @page properties](#coming-soon-additional-page-properties)
  - [Challenge](#challenge)
  - [Solution](#solution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to CSS print style sheets](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/welcome?u=76281980&t=0)** - Sometimes printing a webpage is exactly the right thing to do. We print airline boarding passes, all kinds of [Forms](../../Skills/Web%20Development/Forms.md), long articles, tips and tricks to hang on the wall, and so much more. How can we make the most of print styling in our CSS? Hi, I'm Jen Kramer, and I've been teaching and designing websites for 25 years. In this course, I'll walk you through three big topics. We'll look at print from a standard CSS perspective. How exactly does the cascade work with styles for screen, print, or all devices, including the browser defaults. Next, we'll move on to some best practices for print styling, including creating content exclusively for screen or for print. Finally, we'll look at taking our formatting to the next level for print, exploring the best that print styling has to offer. So if you're ready, let's get started with CSS print style sheets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** css (3)
> **CLI Commands:** make (1)
> **Speakers:** - sometimes (1)


### 1. Mechanics of Print-Based CSS

[↑ Back to Table of Contents](#table-of-contents)

#### [Print style sheets and media queries](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=0)** - [Instructor] This first chapter of the course, we'll focus on some of the mechanics of creating CSS for print including the syntax of setting up print style sheets and understanding the cascade and inheritance where different media are involved. So let's get started with a quick overview of comparing and contrasting print style sheets and print media queries. The first way to include print styles in your website, and probably still the most popular is including an external linked document that refers to printing styles. The code looks like this. This is probably already similar to what you do with your screen styles. With the addition of a media equals print on the end of the line. Second and much less popular, you could embed your print styles in the head of your [HTML](../../Skills/Web%20Development/HTML.md) document using code like this. In general embedded styles should be avoided. They apply only to the page in which they're located so they're harder to maintain across your website. However, if you had a set of styles that applied only to this page, this might be a reasonable approach. Finally, you could manage your print styles through a media query possibly in the same document that your other styles appear. So which is better? And when should you use each? As always it depends. With an external style sheet some people may find this harder to remember to maintain with ongoing changes to a website. However, the separate document may be clearer to site maintainers about what media
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/print-style-sheets-and-media-queries?u=76281980&t=94)** controls which styles. Finally, since this is a separate document it takes an extra call to the server to load it which may impact overall performance of your site. For media queries, since they would be included in an existing style sheet they are less likely to be overlooked. However, it may also be less clear where exactly those styles are applied but the biggest difference and the one that's most powerful is that by specifying media in a media query, you can combine this test with others. For example, if someone wanted to print a document from a phone, you might want to condition printing based on width, aspect ratio, orientation, media or all of these. We'll examine ways to combine multiple tests in a media query for print later in the course. If you want to learn more about how media queries can be used in complex ways to sell your document be sure to check out my course, CSS Advanced Media Queries available in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (2), html (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Creating a print style sheet and linking it to your document](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=0)** - [Instructor] Let's get started with print styling by creating an external print style sheet document and linking it to our [HTML](../../Skills/Web%20Development/HTML.md). So, the editor that I'm using here is VS Code, it's available from [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). It's free. I've gone ahead and installed it on my computer and I have my exercise files that are open. These are on my desktop and I've opened up my style sheet and my print dot html document. You can always make this a little smaller or disappear just by clicking this button right here gives you a little more room for the code. And let's start by looking at the code and I'm going to start at line number eight right here. So obviously this is the link, HTML that links to our style sheet document shown over here on the right side of the screen. As you can see with this particular line of code there is no media attribute inside of line number eight. The media attribute indicates what media is appropriate for use with this style sheet. And by default there's only four values. Those include screen, print, all or oral as it sound. And we won't talk about oral at all today but we'll talk about screen, print and all. When there's no media that is indicated here in this line of code, it is a style sheet applies to all media. So, basically we have a document here right now and it's set up in a way that probably a lot of people
>
> **[1:32](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=92)** are doing development right now. It is an all purpose style sheet. So if we go ahead and just pop this inside of a web browser real quick and this is Chrome and take a look at it. I'm sorry, It's really, really ugly but this makes all of the points that I need to make very, very quickly. And so obviously this is the way it looks on the screen. If I try to print this, it's pretty simple to do in Chrome. Go to the three dots over on the right side of the screen, choose print and it should give you a print preview of that particular document. And as you can see here, it is going to print with a white background and yellow text. Now why a white background? Because we've specified a blue background on our current document. Well, there must be some sort of default style sheet or some type of style sheets somewhere along the way that is overriding that blue background and making it white for print but it is not doing the same for the text. It could be that we actually want colored text to print out but yellow is probably a really poor choice for a document of this length. So let's go ahead and set up our first print style sheet using an external print style sheet. It'll take us just a second to write and test. So if we go back into the VS Code, what I'm going to do is over here on my styles dot CSS I'm just going to go file, save as and I'm going to call this print dot CSS indicating this is my print style sheet. Then I can just go ahead and put in the overrides that I want for my particular document.
>
> **[3:07](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-style-sheet-and-linking-it-to-your-document?u=76281980&t=187)** So I don't necessarily want to override my font family at this point, but the background colors got to go. Let's say it's white instead of dark blue. And as for the article all that stuff is gray but for the color for the text I would like that to be black. Fantastic. Go ahead and save that. And then let's go ahead and apply this to our document. I can just copy the line of code. They're online eight in the HTML, paste in a new version of it here on line nine. Let's change the styles dot CSS to print dot CSS. Rel equals style sheet and then we need to add to this, our media equals quote, print. Just like that. And if we save our HTML, we can return to our Chrome document here, refresh the page and go back to print again. And you'll see here in our print preview that now we have a nice white background with black text. And so obviously our regular document on the screen does not look like that. It looks great though on print and that is the way you might go about making an external print style sheet for your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** html (4), css (4)
> **CLI Commands:** make (2)
> **Tools:** vs code (2)
> **Definitions:** is a  (1), is an  (1)
> **Prerequisites:** set up (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Creating a print media query](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=0)** - Now that you know how to set up an external print style sheet, let's set up a print based media query. This is exactly the same [HTML](../../Skills/Web%20Development/HTML.md) and CSS that we worked with in the previous video, ugly webpage, very very simple. And as you can see here right now, whether it's our linked style sheet or over here in the style sheet document itself, there are no media queries that are present here in this document. You're probably familiar with media queries if you've done any kind of responsive design, you typically set up media queries with values like mean width or max width or combination of those in order to make your screen respond to various different device sizes. We're going to use media queries with the actual media in media queries. And by default, there are styles here are set to all so effectively we do have a media query in place around the styles that we have now, it's kind of pointless but I'm going to put it in for you anyway. It would look like this media all and it would end of course after our last style. So you can think of this as the media query around your styles as they currently exist, these are applying to all different types of devices. So to make a media query for print, as you might not be surprised to know, it's just media print. And then inside of this, we can put in whatever we want to change. So here body, will have a background color of white
>
> **[1:37](https://www.linkedin.com/learning/css-print-style-sheets/creating-a-print-media-query?u=76281980&t=97)** and our article will have a color of black. So that's pretty much all we need to do to set up a basic print based media query. If we go ahead and take a quick peek at this inside of our web browser, here we are in Chrome just go ahead and refresh our webpage. And when I come over here to the three dots and I say print, there is the black and white version of this document that you would expect to see given our print media query styles that are set up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Prerequisites:** set up (5)
> **CLI Commands:** make (2)
> **Env Vars:** html (1), css (1)
> **Cross-References:** previous video (1)
> **Speakers:** - now (1)

#### [Previewing print style sheets without printing](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=0)** - [Instructor] There are several ways to test your print styles without having to actually print your webpage. The methodologies vary slightly between [Windows](../../Glossary/Service/Windows.md) and Mac, and they may vary across browsers as well. I'm going to focus on Firefox and Chrome. The methodologies for Safari and Edge are going to be similar to what I show you here with Firefox and Chrome. So let's start with Chrome, which has an easy way of printing the page. Not so easy looking at it in developer tools. So the first way to do this you've actually already seen me do, this is the webpage we have been working on in all its glory. And if we go to our three-dot button over here on the right side of the screen and simply choose Print, this will go ahead and give us a preview of what the page will look like here on the screen. And you can go ahead and scroll down. You can output this as a PDF, if that's something that would be helpful to you. It's pretty much going to look just like this. You, in some cases, can change your orientation between portrait and landscape and see any kind of differences that might be there in this particular format. So that's way number one. Way number two is with Chrome Developer Tools, and to get there and do that, you're going to go to View, then Developer, and then Developer Tools. Now, when you open up Developer Tools, by default, it's going to show up on the bottom of your screen in Chrome.
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=93)** I have reoriented my Developer Tools to show up on the left side of the screen. Yours may be in a similar kind of position. You're going to want to go here to the three dots at the top of your Developer Tools and you're going to want to go to More Tools and then you're going to want to go to Rendering right here. This is going to open up the rendering panel down here at the bottom of your web browser and you'll want to scroll down and you'll see Emulate CSS Media Type. And right now it's set to no emulation. We're going to switch it to print. And what that will do is switch over to the print style sheet. So as you see here, that is what's displaying on the screen. That's a lot of buttons to click in order to see the print view of your screen. And as you're going to find out as we go further into the course, sometimes this emulation does not necessarily work all that well due to the cascade. And we'll talk more about that in some future videos. Let's take a quick peek at Firefox as well. Here is Firefox and, unlike Chrome, Firefox has a printing option here under File. It has both a Page Setup and a Print option. Chrome only has a Print option under File. So when you go to your page setup, you want to first make sure that you are printing and your orientation is in portrait mode. Just like that. Go ahead and say "okay." And then under File, Print,
>
> **[3:10](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=190)** you do not have the preview that you had in Chrome. So what you're going to need to do here with Firefox is you're going to need to look at this in PDF format. And it's possible you Windows people, you might have a print preview that the Mac people here do not. If you have a print preview just like you just saw in Chrome, that's amazing. I would totally recommend using that. But for Mac people, what we have to do is turn this into a PDF. And so down here in the lower left-hand corner, you can save it directly out as a PDF, in which case you then need to find software to open that PDF and view it, or you can save right into Preview. Preview comes with all Mac computers. It will allow you to view a PDF file. So basically Open in Preview will save it as a PDF and open it in Preview for you all in one step. It's a little more efficient. So that's the one I usually use here with Firefox. Go ahead and choose that. And the Preview program will open up and you can view the way this would look on print. And bonus points to those of you who noticed that the Firefox rendition of this page is slightly different than what you saw on Chrome. Firefox also has Developer Tools and we can preview this webpage using those Developer Tools. Pretty straightforward to do that. We're going to go to Tools, Web Developer, Toggle Tools. And that will go ahead and turn on our Web Developer tools inside of Firefox. Over here in the sort of middle panel,
>
> **[4:46](https://www.linkedin.com/learning/css-print-style-sheets/previewing-print-style-sheets-without-printing?u=76281980&t=286)** you will find a little button that looks like this. And as you'll see, the tool tip there, which may be too small for you to read, it says, "Toggle print media [Simulation](../../Skills/Hardware/Simulation.md) for the page." Go ahead and click that. And it will go ahead and toggle on your print style sheet and display that for you on the page. So way easier than Chrome to actually access that print format here inside of your Developer Tools in Firefox. So which method is best? Should we be looking at the file print methodology of our webpages, or should we be looking at them through Developer Tools? Well this Developer Tool rendering is a really convenient way to take a quick peek at how things look, especially if you already have the Web Developer tool pallet open. However, for the most accurate results, especially when we get to some of the new properties later in the course, you probably want to preview the printout or make a PDF. You should also be aware that when previewing print style sheets with your dev tools, it can be limiting on Chrome and Firefox. Your print styles may not preview the way you expect using these tools. And I'll say more about that in some coming videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Simulation](../../Skills/Hardware/Simulation.md) (1)
> **Tools:** firefox (12), safari (1)
> **UI Navigation:** go to (6), toggle (3), scroll down (2)
> **Env Vars:** pdf (8), css (1)
> **CLI Commands:** find (3), make (2)
> **Analogies:** just like (3), similar to (1)
> **Prerequisites:** setup (2)
> **Cross-References:** later in (1)

#### [The pitfalls of using dev tools for previewing printing](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=0)** - [Instructor] Let's briefly return to this ugly webpage, the way it came out of the box at the beginning of this chapter. In other words there's no specific print styles that are declared just yet. Right now this webpage has some basic styling in place, but nowhere on here, is there any media specified. There's no media here on line eight in our linking [HTML](../../Skills/Web%20Development/HTML.md) to our style sheet document. There's no media declared anywhere via media query inside of our CSS. If we go ahead and display this in a web browser, here we go, here it is in Firefox. And if we go to file print and we go ahead and open this up in preview as a PDF, you'll see here that I've got a white page with yellow text. So why is this? There is some kind of overriding style sheet somewhere along the way when I send this over to print, that is making the background white instead of blue, which is a really great thing but it doesn't have a default text color. So the text is going to use this ugly yellow from the default style sheet. Other styles are carrying through as well like the font family, as you can see here, and maybe some of the margin stuff is carrying through at some level. So, now if I go back to previewing this page here with Firefox and I'm going to use the developer print button right here so I can switch this over to print view.
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/the-pitfalls-of-using-dev-tools-for-previewing-printing?u=76281980&t=93)** If I go ahead and click that button, I am clicking it. There it is, it's clicked. It's unclicked, you'll see that the page isn't changing at all. When I viewed it as a PDF, the background turned white but here there's no change at all. So why is that? Well, first of all, the dev tools are looking at the style sheet that has no media declaration. Remember the style sheet has no media declaration in it, there's no print media queries anywhere. So when we click the print media [Simulation](../../Skills/Hardware/Simulation.md) button in Firefox the dev tools don't make any changes at all based on this author CSS. However when we go to print the page via the print dialogue box, even if we go to PDF, at least on my computer and with my installed options the background color is turned off for me. You might see something different depending on what operating system and what you're using for printing. So in this particular situation you can't necessarily see all of the facets of the type of styling applied for printing with dev tools. So be really careful when you make use of them, they're really convenient, but depending on how your page and your computer environment are set up, it may not tell the whole story about printing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [Simulation](../../Skills/Hardware/Simulation.md) (1)
> **Env Vars:** pdf (3), css (2), html (1)
> **Tools:** firefox (3)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1), is a  (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)

#### [Understanding screen, print, aural, and the cascade](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=0)** - [Instructor] In working with CSS, you've heard a ton about the cascade and which styles override what as part of that process. However, it's unlikely you've looked at media types in isolation as part of that process. So let's do that in this video. The files I have, up here, are the same ugly Web page we've been looking at. I promise this is the last segment with an ugly Web page. As I've pointed out to you before, notice over here, on line 8, there is no media type on this style sheet link in the head of the document. There's also no media query with the media type inside of the CSS. Therefore, these styles are for all media types. When we try to print, you'll see the yellow printing probably with a white background thanks to the browser taking out the dark blue background for print, as you've seen in previous videos. Let's go on ahead and set the style sheet for screen media only. The easiest way to do that, we can do that right here, in the external style sheet, and simply say media equals quote screen. And if we go on ahead and save that, I'm going to go to my Web browser and refresh my page, and I'm going to to on ahead and print this via PDF in Preview. So as you take a look at this page here, you might notice that this looks like an unstyled Web page, doesn't it? There is no font specified, here. The text is black instead of yellow, as you've seen, previously.
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=93)** And it's a serif font, it's a default Times-New Roman. Why is that? Well, that is because we set our styles to be for screen only. And sure enough, it'll print just fine, but it's going to print as a default unstyled Web page inside of your Web browser. Let's see that same effect here, with browser tools. So if I go to Tools, Web Developer, Toggle Tools, and click my little button here, you'll see that same exact process happening here, as I click this button. So this didn't work before, when our styles were set to all because it was all media. Those were the same styles for screen and for print. The Web Developer Tools were doing exactly what you told it to do. Now that you have those styles set for screen only, when you click the button here, to show the print styling, it switches over to the print styles and there aren't any, so it looks like an unstyled Web page. So let's go back to our code, here. Let me show you how to do the same thing rather than doing it here, inside of our external style sheet. You can just take that out. Over here, in our style sheet, you can do exactly the same kind of thing by putting a media query around all this. And we'll say at media screen. Save that. That would be exactly the same way it is, and effectively the same thing as having it associated with your external style sheet.
>
> **[3:08](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=188)** Now, but what about the cascade? So let's go on ahead and try this. If we have set this to all, and then before this, I'm going to go ahead and set up a couple of other styles. I'm going to say at media screen and I'm going to say article, color white. So if it's on the screen, it's going to have white text. And then at media print, and article will have the color red. So if this happens to go to print, we're going to have red text on the screen. And then for all media which is coming after all of this, the text color will be yellow. So this is your time to vote. Go ahead and think about this for a minute. If I go ahead and view this Web page now, on my screen, what color is the type? And what color is the type when I go to print? I'm going to go ahead and save both of these documents and then we can go back here, to Firefox. I'm going to refresh my page. And then we can go ahead and turn on our print tools. And you see here, I'm clicking my button, toggling back and forth between these and nothing is happening. Why is that? Well, at media all comes after the screen or the print styles here, that we just placed
>
> **[4:41](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=281)** above all of this, and so the color here, in the article overrides everything that comes before it. So let's rearrange real quick. If we go ahead and take those two and we put them after, so now, before, we have yellow. We have white for the screen and red for print. What color will the text be now, on the screen? What color will be the text for print? Go on ahead and think about that for a second. And then let's go back to our Web page. Refresh the page. And right now, I've go the print style sheet toggled on, so you see we have red text. And if I toggle that off, we have white text. And obviously, if I do this the longer way, if I go to File, Print, and I do this as an opening and print preview, I will see the red text but with a white background rather than the blue background. So as you would expect, where all else is equal in the cascade with selector specificity, the order in the style sheet does, in fact, matter. As you might also expect, this same type of example holds true if you look at a separate external style sheets and listing them in the order of the head in your [HTML](../../Skills/Web%20Development/HTML.md) document. So if we go back into our code and I had a print style sheet here, and I wanted to list it after, your print style sheet should come here, after your style sheet for all of your styles you would list your print style sheet after it so that your cascade work correctly.
>
> **[6:14](https://www.linkedin.com/learning/css-print-style-sheets/understanding-screen-print-aural-and-the-cascade?u=76281980&t=374)** So as always, order does matter. I recommend writing a generic all style sheet and then overriding whatever is needed for a print style sheet. If you have separate screen and print style sheets, then you will completely style your document twice: once for screen and then, once for print. All is a great setting so that's the way we're going to approach styles in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **UI Navigation:** go to (5), toggle (2)
> **Env Vars:** css (2), pdf (1), html (1)
> **Cross-References:** go back to (2)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Best Practices for Print-Based Styling

[↑ Back to Table of Contents](#table-of-contents)

#### [Best practices for styling for print](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=0)** - [Narrator] You're probably familiar with many best practices for styling webpages for the screen. For example, you might be using a San Serif font for optimal readability. You might test with different devices to make sure the text is sized appropriately. But what about print? Well, if you anticipate your webpages will be printed, then you must think about styling in those situations as well. First, what kinds of pages are generally printed? If you're working with a lengthy article, a complex form, some kind of ticket or receipt, a recipe or other information that's typically available in book or paper format, you might find that people will want to print that information from your website. It may not be that every page on your site needs a full battery of tests for the printed format. Second, what information are they most interested in printing? Chances are that you would like the page to be clearly labeled with your company name and the website address. Even if your user isn't interested in that information. Your user is most interested in the main content and probably not so interested in printing extraneous advertising, navigation bars, fat footer layouts and similar elements. Consider what information might benefit from being printed, but in a different format. For example, links are great inside of a web page, but they're not clickable on paper. What if you spelled out the URL for the link next to its appearance on the webpage? And are all of those beautiful graphics on the site
>
> **[1:35](https://www.linkedin.com/learning/css-print-style-sheets/best-practices-for-styling-for-print?u=76281980&t=95)** needed in a printout or could they be repurposed for a different format? Finally, when considering format, let's revisit some of the basic formatting on your website. Is a layout change needed? Should we swap a font for the San Serif to a Serif instead? How's the text size? Does it need a bump up or a bump down in size when going to print? What about the color? It's possible the user will print to a black and white printer rather than a color printer. Is the page readable and understandable in black and white? We'll consider all of these parameters as well as a few others while working through this course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Analogies:** for example (2)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Touring your example page](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=0)** - [Tutor] Now that we've got those technical fundamentals out of the way about how to make a print style sheet and link it up to your document, let's go on to a more attractive webpage. So this is the document we're going to work with here in chapter two. This document is called blog dot [HTML](../../Skills/Web%20Development/HTML.md), and let's just run through real quick what we have going on here. Over here in the HTML, you'll see that we have font awesome is included here, we have some [Google](../../Glossary/Service/Google.md) fonts and we have a, of course, our custom style sheet, which is displayed over here on the side. Down in the main body of the HTML, we have a header with a logo, we have a navigation bar, and then we have a longer article. That's going to go on for some time. We have a very big picture associated with this. This is the HTML picture tag here on line 41. You'll see that we have three different versions of this image inside of our picture tag, including one for tablet sized devices. We have one for larger sized devices like desktops, and then we have a default image tag here. And then it goes on and on and on, talking about various kinds of exercises, it's a long article. And then we also have a sidebar in place here. This has got a little bit of advertising associated with it, and it's got our commitment to quality in place here. And then down here on the bottom, we have a footer. The footer has all kinds of social media links, as you would expect, as well as a disclaimer. In our HTML, the way this is set up is that, first of all, we're going to use boarder box sizing,
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=93)** which is a great practice to do with your style sheets right out of the box, so to speak. This of course is going to calculate your box sizing a little bit differently. It consolidates your border width, your padding and the width of the content itself into a single measurement called width. As we scroll on down here, this colon root thing here is a pseudo class that is responsible for setting up a bunch of variables that we'll use in our document. If you wanted to learn more about this, I have a course on that exact topic. It's called CSS variables and fluid layouts, and it's available in the library. It'll walk you through exactly how to set up variables and calc, which is the calculations that I have going on here for our type scale. Talk through all of that in detail in that course. So as we scroll on down here, you see we have some headings, other various kinds of styling, there's nothing here that you probably haven't seen before, except for maybe that variable and calculator stuff. You'll see we have media queries as we get down here a little bit further. Those of course are responsible for changing our default styling, which is the mobile styling outside the media query. This first break point here has to do with tablets, and then we have one for desktops. We do go to a grid based layout as you'll see here, there's our grid template columns and so forth, associated with that. All right, so let's do a quick peek at this inside of the web browser. And so here we are looking at this in Chrome, and we're obviously at full dimensions here. You can see what the webpage looks like.
>
> **[3:09](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=189)** And as I start to make this webpage a little bit smaller in size, we'll go ahead and see those break points in action. So as we make it smaller and smaller, there's our first break point. And you see that we have things stacking down here on the bottom, and we'll go down to our mobile dimension, where you'll see, go from bottom to top. Okay, so if we go on ahead and we preview this with printing, three dots, print, this is Chrome, we can go ahead and see what this looks like. So we have basically the mobile styles that seem to be coming through here for Chrome. I have a centered logo at the top of the page. Here's my nav bar, here's our text. We have an image taking up a lot of that page. We're going to go on for some time. Then we've got our, these big images, they take up a lot of room on a page, and a big black bar down here on the bottom and so forth. So that's what our webpage is going to look like in Chrome. I also want to show this to you in Firefox, cause the print version in Firefox is different than what we have here in Chrome. So if I switch on over and show you the page in Chrome, if I ran through the media queries, they all work the same way. The screen looks fine, but when I go to file print, and I'm going to go to open in preview, you'll see here, first of all, the logo isn't centered. So this is not using the mobile styles that you saw previously over on Chrome. Firefox is doing something very different here
>
> **[4:43](https://www.linkedin.com/learning/css-print-style-sheets/touring-your-example-page?u=76281980&t=283)** with its print styles. So as we scroll on down the page here, there's that big picture. Here's all the text, it goes on and on and on. And then down here we have these two items side by side, more like a tablet sort of layout, what we have going on here, as opposed to Chrome, which is displaying things more in a mobile layout. But again, we haven't specified anything for print, so these printers and browsers are just doing the best they can with what they have. And then down here in its own separate page are the social media icons and so forth. So both of these take up about five pages of paper to print this list of exercises, and the exercises themselves, well, we can probably get these onto one page, maybe into one and a half if we try. And so we're going to be walking through that here as we go through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** html (5), css (1)
> **Analogies:** picture (4)
> **CLI Commands:** make (3)
> **Tools:** firefox (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (2)

#### [Hiding irrelevant information for print](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=0)** - [Instructor] Now that you know what this page looks like, let's consider why people might want to print this page. Well, it has a list of these exercises on it. And a printout would make this really easy to hang on a cubicle wall. The exercises would be the most important thing on this page for our user. H+sport though might have other ideas of what's important. They probably want their branding in the form of this logo up here on the top of the page. They might want the links to their social media which are down here at the very bottom of the page. And they might like the suggestion of these other [products](../../Skills/Software%20Development/Microsoft%20Products.md) over here. They might really want people to remember their mineral water or their quality guarantee. As always, we need to balance the needs of H+sport with the website users so that we get a printout that works for everybody. One of the first changes that we can make to our page, making this page really great for print is to think about what should be printed and what should not. We're going to start here because all of the other adjustments will revolve around our revised print layout which will be simpler than what we have on screen. So what shouldn't be printed? Anything that's not going to help H+sport or the user in a printed format. So that's what you need to think about as you start to think about what will print. First of all, this navigation bar does nobody any good anywhere. You can't click it once it goes to print. So we should get rid of that. Next, this picture here, she is lovely.
>
> **[1:35](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=95)** But honestly people are probably not printing things out for her and she doesn't necessarily add anything in printed format. She's great for increasing engagement here on the screen, but in printed format, we're really just interested in the exercises. So she should probably go. Depending on what goes in the right column, you may want to get rid of it altogether. If it's like [Google](../../Glossary/Service/Google.md) Ads or other kinds of advertising or links to other pages, that might be stuff you want to get rid of. In this particular case, it's possible that H+sport really wants to keep that stuff but we need to reformat it. And then down here in the bottom in the footer, the disclaimer may be really, really important. The social media links would be great but in a different format. They're meaningless when they're printed like that. Well wonderful we have Twitter, [Facebook](../../Glossary/Service/Facebook.md), Pinterest, and [Instagram](../../Glossary/Service/Instagram.md), but unless we know the link associated with those, a printout of those icons doesn't do us any good. So we might want to think about reformatting those. So let's go ahead and write some code to do exactly that. We'll start with, go ahead and this is the [HTML](../../Skills/Web%20Development/HTML.md) and the CSS. I just gave you a tour of that in the previous video. I'm going to scroll all the way down to the bottom of our CSS. And this is where we're going to start adding a bunch of styles. So here, I'm going to set up our @media print. And I'm going to do this with media queries. It tends to be what people prefer to do. Plus later on, we can leverage these media queries
>
> **[3:08](https://www.linkedin.com/learning/css-print-style-sheets/hiding-irrelevant-information-for-print?u=76281980&t=188)** with some additional parameters and make print styles that are simply not possible with an external style sheet. I'll cover that a little bit later on. So here, what we want to do is we want to say our navbar and our article image. We're simply going to tell them to display, none. That's all we need to do. So when we go to print, don't display the navbar. Don't display the article image. Go ahead and save that. Let's take a quick peek at our webpage. If we go ahead and refresh it, you should never see any change at all, what's going on here on the screen. But when we go to print, this is Chrome, so three dots go to print. Now you can see already the page is looking better. We don't have that big honkin' picture in the way. And we don't have that navbar up here at the top of the page either. Now some of you are familiar with responsive design and would say but display, none is a big, no, no. Absolutely true, when you're working on the web and you're concerned about data transfer or performance and that kind of thing. However, in the print environment you're printing across a USB cable or a [wifi](../../Glossary/Standard/Wi-Fi.md) connection not on a mobile signal. Data transfer speeds and performance aren't necessarily an issue in this type of environment. So display, none is a perfectly acceptable in the context of let's boil this page down to exactly what it is that we want to print.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1), [Instagram](../../Glossary/Service/Instagram.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (2), html (1), usb (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Analogies:** picture (2), it's like (1)
> **Definitions:** is a  (2)
> **Cross-References:** previous video (1)
> **Best Practices:** you should never (1)

#### [Changing webpage layouts for print](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=0)** - Next step here in our H+ Sport website. As you know, we have mobile layouts here in our CSS. We have tablet layouts in the CSS, and we have desktop layouts in the CSS, but we do not have any print layouts in our CSS. We should probably have some print layouts earlier in the course, we looked at this webpage in both Firefox and Chrome, and we noticed a lot of differences between those. So, one of the things that we probably ought to do is specify a layout in the print format so that we would get consistent printing across their various types of web browsers. Generally speaking, we're going to want our boxes to stack on top of each other one after the other in the source order of the [HTML](../../Skills/Web%20Development/HTML.md). Basically we want the mobile view of the webpage before we applied our tablet and desktop media queries. Chrome is kind of doing that Firefox, not so much, but it's a really really super easy thing to fix, and basically all we need to do. If you take a look at our code here, we have our content where we've displayed grid here. We have a little bit further in our tablet, media query. You'll see that we have our sidebars displaying in this grid. Our footer is displaying in this grid, and of course, all these elements by default, they're all block-level layouts. So, all we need to do here in our print styles, we don't need to mess around with grid. We don't need to mess around with Flexbox. If we'd been using Flexbox for layouts, it's really simple.
>
> **[1:31](https://www.linkedin.com/learning/css-print-style-sheets/changing-webpage-layouts-for-print?u=76281980&t=91)** All we have to do is just say sidebar, footerClass, and our content, all though guys, we just want to display block. That's pretty much it. We're just going to reset them from where they'd been displaying as grid back to display as block. So that things function basically as they had in the mobile format of the page. So let's go ahead and save that, and if we go to our webpage and we refresh, and then if you go on ahead and do our print preview and take a look at this webpage, you'll see that everything here is stacking on top of each other. Exactly as you would expect to have happen, we still have a lot of work to do on this page, but at least everything is stacked on top of each other to start with, and if you look at this in Firefox, it looks more or less the same. The logo is over on the left side instead of in the middle of the page but other than that, pretty much everything stacks on top of each other there as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** css (4), html (1)
> **Tools:** firefox (3)
> **Code Identifiers:** footerclass (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** go to (1)
> **Speakers:** - next (1)

#### [Overriding styles intended for screen display](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=0)** - Next up, let's consider styling for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of our printed page by modifying the CSS we already have in place for our fonts. And let's make this work a little bit better for print. We'll also modify some other elements along the way here, as well. As you can see here in this print preview in Chrome, we have a lot of pages of stuff. It looks like even if we didn't deal with the sidebar just yet, we have like two pages of these exercises. The font looks a little bit big for a printed page. Kind of horsey, actually. And so we might want to reduce that size. And of course, this is also a sans serif font, which is great for screen reading, but we might prefer to have a serif font for printing, where serif fonts are typically used. So there's some changes that we probably ought to make here to make this page a little bit more readable for print-style sheets. So let's go ahead and take a look at that. Get out of that and hop back on into our editor. So, first of all, let's go ahead and pick a different font for our webpage. Right now that's declared way up on top of this style sheet in the body tag. So we can just re-declare it here. And what I'm going to say is our font family is, let's say, Georgia, Times New Roman, Times and so forth, mostly because I like Georgia better than Times. It's a nice default font.
>
> **[1:32](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=92)** Obviously you could load in a [Google](../../Glossary/Service/Google.md) font if you want, but of course, that's going to add to your overall page weight for a print style. So I am just going to use Georgia which should be on most people's computers. Second of all, let's think about our font size. Now our font size is handled way up here at the top. And I have here a declaration that sets a base font size and a type scale. And we're using calc here to create all of our different type sizes for our different tags, like our various heading tags, as well as the paragraph will go ahead and take that base font size by default. And that gets declared a little bit later here in the style sheet. We've also tied in to this some margin sizes associated with that. And then the paragraphs and the (indistinct) all have a base font size. So it's really easy to restyle our type size for print. All we have to do is just change the values of a couple of variables. And once again, this technique is described in detail in my course "[CSS- Variables and Fluid Layouts](CSS-%20Variables%20and%20Fluid%20Layouts.md)," which is available in the library. So I'm just going to... all I need to do here inside of my print style is just change the value of these variables. So I'm going to re-declare the root pseudo class, and to that I will give this a base font size, it's my variable name, of 0.8 ems.
>
> **[3:08](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=188)** And I'm going to give this a type scale of 1.25. So that is actually, all I have to do is just that. It's going to go ahead and reformat all of those types sizes, all of those margins and so forth. It'll all reformat right off of this one declaration here, just redefining the values of these variables. It's a very, very cool technique. Next up, as you might've noticed in Chrome, the logo prints at the top center of our document. In Firefox, it prints over on the left. Let's just make that consistent. So this will be header. And we can just say text align left. Pretty easy. Now, in terms of these aside images over here, scroll on down for a little bit until we get on down here to our sidebar. So we have this picture here with our various images associated with that, and the little bit of text that's here underneath, and we have that twice. We have two of these different asides that are here, and one of the things that you might want to do, right now the image is stacked on top of the text and it doesn't necessarily work all that well in print. Can't quite tell what text goes with the pictures and the pictures are enormous. So let's make that association a little bit clearer. And I'm just going to use an old technique here which is floating. And so all I'm going to do here is this: I'm going to start by setting up my image to float. And so we can do a couple of things.
>
> **[4:42](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=282)** We can set a max height of 0.5 inches. Oh my goodness! I'm actually using inches. And that probably made some heads explode but inches are a legitimate thing to use inside of a print style sheet, where the world, at least in the United States, in printing, revolves around inches. Other legitimate units of measure, if you're in other parts of the world, would be centimeters or millimeters. Those would also be legitimate to use here. So I'm actually just going to set the max height of my images. This of course is going to affect all of the images on the page, and we'll make them all about a half an inch tall, and then I'm going to float them because floating is something that's going to be at least supported by most of the printing for most printers and most browsers. And we can go ahead and set a nice margin around those images. Once again, I'm going to use inches. 0.25 inches 0.25 inches and zero. Okay, so that'll give us a little bit of room around the image. Now, if you float, you need to clear. So we're going to clear on our aside. I'm also going to clear on the content itself. And the content is a div that goes all the way around our article and the asides. And the reason why I'm clearing there is because the way I have this style written right now, that image up here in the header,
>
> **[6:16](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=376)** right here on line 16, that is going to be floated and we need to make sure that it is cleared adequately. It'll work fine. Well, the nav bar, of course, we're hiding on print. So the element that follows that floated element would be our div with our class of content. So we're going to clear there to make sure that this all formats well. So if we go on ahead and save that. Just a couple of other quick things I want to add and then we can take a peek in the browser. For my heading, h1 here, I'm going to set the margin on the top to auto. I don't want it to use this style that I had set previously in my screen. It gives me too big of a gap between the logo on the top and the title of the article. So I'm just going to let that do the standard h1 size and in the footer, by the way, there's a big black bar that appears in the bottom of the printout. That comes from a border that I put on it on the bottom. So I'm just going to turn off that border. All right. If you go on ahead and save all those styles, let's go on back to our webpage and refresh. Absolutely nothing has changed here on the screen, which is a wonderful thing. Now we can go ahead and go over here to print. And if we look at that, look how much better this page looks already. So our logo is pushed over here to the left, and under that we have, very consistently, we have a lovely sans serif font
>
> **[7:51](https://www.linkedin.com/learning/css-print-style-sheets/overriding-styles-intended-for-screen-display?u=76281980&t=471)** that's controlling everything that's here on the page. It's all Georgia. The spacing looks good here and so forth. And because we have cleared our various floats, we can see we have our little images here next to our text. Doesn't that look great? And our footer down here on the bottom: still have a little bit more work to do, but just overriding some of those default screen styles, or styles that were really intended for screen carrying over into print, this is a great way to clean up your webpage using CSS, you're already familiar with, and really improve the look of that print out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** make (8)
> **Versions:** 0.25 (2), 0.8 (1), 1.25 (1), 0.5 (1)
> **Env Vars:** css (3)
> **Definitions:** is a  (3)
> **Tools:** firefox (1)
> **Analogies:** picture (1)
> **Speakers:** - next (1)

#### [Adding print-only information that is hidden from screens](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=0)** - [Lecturer] We may want to add some styles that are going to be visible for printonly. And that might be associated with some content so that we have certain pieces of content that are going to print out only, but in the various screens that people might be using to look at the webpage, they aren't going to see this particular text. And so in this example, these are of course your Exercise Files, notably in the Exercise Files folder for this particular segment, you want to take a look at Text for Exercise. It's a Text file that's inside of that folder. Go on ahead and open that up and I'm going to go ahead and just copy that a little bit of text right there real quick. So we get that out of the way and see our code a little bit better. That little bit of text there, is a link to this webpage online. And what I'd like to have happen is to have that print up near the top of the document. So if somebody makes it print out and they're looking at it later and they want to go back to the website, they know where to go. So to do that, I am going to put that here in my [HTML](../../Skills/Web%20Development/HTML.md). And right now this is going to go up here in the header I think, and the way I'm going to do that is I'm just going to make this a paragraph and I'm going to paste in that text right there. Now, normally you might think Oh, let's wrap &lt;a&gt; tag around that so it's clickable. Well, remember this is only going to be for print. And if that's the case, then there's no point in making it clickable. Now, the other thing I'm going to add here
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=94)** inside of this paragraph, is a class and I'm going to set it to be printonly, because I only want this to show on the printed page. So once that's here, then we can go ahead and add our CSS. And there are two ways to do this. So I'm going to show you both of those. One way requires two styles, and another way is just going to work with one. So after my media query here for the desktop, before my media query for print, I'm just going to go ahead and drop in this little bit of code right here just so you can see it. Printonly is the name of my class. And then in here, I'm going to say display: none. So I'm outside of the media query. So this will make sure that that line from paragraph will not display anywhere on basically any type of media right now, because this is outside of all of the media queries. Then inside of the media query... And I'll just stick it here at the top so it's easy to see what's going on. I'm going to say .printonly and here I'm going to say display: block. So that's one way of doing it. So I've not displayed it across all of the media. And then I overwrite it for printonly and say display it as a block level element. But we can make this even more efficient, go ahead and get rid of that.
>
> **[3:08](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=188)** And what I'm going to do here is for printonly, I'm going to put it in its own media query and it's going to be @media screen. So here, now the display: none is good only for the screen. We don't have to overwrite that style in print, because the display: none applies only to screen styles. So therefore, our paragraph we'll go ahead and print. So if you go on ahead and save your style sheet, we can refresh our webpage and take a quick peek at the printed version of it. So there's that text right out up here. Why is it appearing right here? Next to this logo and you might be a little bothered by that. Well, remember that that logo is floated. We floated it in the previous video. So if you don't want that floated that is easy to fix. Right here inside of your print styles, you could say, printonly and then you could say, clear: both. it's the element right after the floated element, So if you clear there, it should get itself out of the float and it'll appear underneath the logo. So just go ahead and save that. And we'll go back to our webpage refresh it again and take a look at the print again. And now you'll see your line of text appears right underneath that logo. So either one of those approaches is just fine.
>
> **[4:41](https://www.linkedin.com/learning/css-print-style-sheets/adding-print-only-information-that-is-hidden-from-screens?u=76281980&t=281)** You could have your media in terms of all set to display: none, and then have it display as a block inside of your print media query. Or you could just make a screen media query where it's displayed none. And then you don't have to worry about turning it back on when you go to print.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2), previous video (1)
> **Env Vars:** html (1), css (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [lecturer] (1)

#### [Writing URLs after links and social media icons](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=0)** - Links are so foundational to websites, and I am sure you are very good at putting links into your webpages. However, when you print a document out, we wind up with a bunch of colored texts with underlines that gets printed. We don't necessarily see the URL for the pages associated with those links. Wouldn't it be great if, when we printed out this particular document, we could see the URL associated with each link? And especially when it comes to the social media icons that are down here towards the bottom of the page. Down here we had these lovely links to all of the various H+ Sport social media, but when we print out the page right now, those icons are all just icons. We have no idea where to go. We know that H+ Sport has a Twitter account, but we don't know what their handle is. So let's go to head and add some styles, so we'll actually make this happen. You can do this with just CSS, you don't need [JavaScript](../../Skills/Software%20Development/JavaScript.md). So inside of my print styles, I'm just going to keep on adding here. I'm going to scroll on down here to the bottom, and I'm going to put in some new styles here. And so we need some funky selectors in order to make this happen consistently. So I'm going to start with, of course it's an A tag, it has an href attribute inside of the square brackets. Remember the square brackets here with just an attribute inside of them,
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=94)** but with no value, indicates that we're just testing for the presence of a href attribute. We are not testing for its value. And then we're going to use the pseudo element of after, so we want this style to occur after our link. So that's what I mean by a funky selector. I have a course called CSS selectors, it's available here in the library. If you want to learn more about some of the wackiness associated with these less commonly used selectors. But this is going to be so helpful for us. Inside of this, we're going to use the content property, and we are going to type in this weirdo looking string. So we're going to put in quotes with a space and a parenthesis, just like that. And so that will print out after the link. First of all a space and then a parenthesis, and then what we want is the actual value of our href attribute, right? So we're going to say attrhref, so that is the notation that will go get the href value in that attribute in the [HTML](../../Skills/Web%20Development/HTML.md) tag, and write it here in the content inside of one parenthesis, and then we should probably close that up, so we can just put in another one here on the other side. So that is what that crazy line of code looks like. And as it turns out, the font size is a little bit big when this happens, for whatever reason.
>
> **[3:07](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=187)** So I am going to say the font size will be the base font size. Using my variables here. Okay, so if we just do that much so far, if you go ahead and save that, and we take a look at the webpage, refresh, nothing has changed here. So we just still have our icons, our links and stuff. Nothing's showing here, but if we go to our print view, and scroll on down to the second page, there it all is, so you can see, for example, this is a fictitious company created by [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Corporation with a link to LinkedIn. And you can see here that we have our various social media links with all of their links spelled out so nicely. So that's really absolutely fabulous that we can put all of that information here on the page. But now I can't really read these social media links. That is a very confused looking little bunch of text right there. So let's make some other changes to this as well. So I'm going to add some additional styling. If you notice, all of my social media links are inside of a div with a class of social, so I can distinguish between all of the links. This is for every link that's on the webpage. Now I can distinguish forth those links specifically, so for the social links, a href. So if they have links, which they all do, then I'm going to do some other things.
>
> **[4:41](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=281)** Let's say display block and let's give them a bit of margin on the bottom. Once again, I'm going to go to inches because it's print. If you save that, and we go back to our style sheet, I cancel out of this, refresh my page, and go take a look at the print preview again. You'll see down here towards the bottom, doesn't that look better? Now that I've put them into block instead of inline, which is what a link is by default, now I can have each of these links on its own line, right next to its icon and I have a nice little bit of breathing room in between each of these. The last thing that I want to do here with these social media references, they all have the parenthesis around them, and that's lovely pretty much for everywhere else in the document, but for these particular links, I'd actually like it to not have parenthesis. So let's just reformat that as well. So if we jump back here into our code, let's add one more style so social A href, and square brackets again after. So this will be second and of course, more specific than the one that comes here on line 223, this particular declaration is going to take priority for the social media icons. So here we'll say instead content, instead of the parenthesis, we'll say just simply a nice space right there between the quotes, and then right after that, attr href, just like that.
>
> **[6:21](https://www.linkedin.com/learning/css-print-style-sheets/writing-urls-after-links-and-social-media-icons?u=76281980&t=381)** And if you save that and we get to go back to our webpage, refresh one more time, take a look at the print one more time. So now you can see here this is much more readable without the parenthesis for all of our social media links. So that's really going to add a lot to this particular printout; it's going to help H+ Sport because now people know where to go for their social media pages if this gets printed out, and it's going to help the user who may be interested in that information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** url (2), css (2)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (3)
> **Analogies:** just like (2), for example (1)
> **Cross-References:** go back to (2)
> **Speakers:** - links (1)

#### [Complex media queries for print and page orientation](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=0)** - [Narrator] Because we've been putting our print styles inside of a media query, we can test for more than one parameter when setting up our media query. We don't have to just test for print, we could also test for orientation of the screen, we could test for min-width or max-width, we could test for aspect ratios. There's a ton of stuff anything that you test with a media query you can combine here with print. If you want more information about how these more complex media queries work and what kind of parameters are available, be sure to take a look at my other course which is called CSS Advanced Media Queries which is available in the library. I'll talk to you a lot about this. For now what I'm going to do, I'm going to scroll down past all of the styles that I have written so far. To the very bottom of my CSS Document. And I'm just going to set up a little test media query here. So @media print. And because this is a way we do this, if we are going to test for it has to be the media print and we want to test for something else. Let's also test for orientation of landscape. And then we're just going to say body color red. Not going to be pretty but it will be obvious when that particular style gets implemented. So lets go on ahead and just do that so far then we're going to test in Chrome and Firefox. We're going to do a lot of this back and forth
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=93)** kind of stuff here as we test these media queries. So if we go to Firefox first, going ahead and refresh here, I'm going to go to file print. Make sure that you are in portrait orientation and we're going to open this in preview or save as PDF. And you see here, well that didn't work. That's a good thing. Because remember in media queries, when we say orientation of portrait or orientation of landscape, what that is referring to is a portrait screen would be longer than it is wide. A landscape screen would be wider than it is tall. It actually has nothing to do with the orientation of the phone itself or a tablet. It has to do with the widths of the various screen dimensions. So obviously this didn't work here inside of Firefox. We can do a quick test here. If we go to file print one more time, and this time I'm going to switch it to landscape view and we'll go ahead and preview that one more time. And of course that did work. So now we've got red text here because I happened to be printing it in landscape instead of in portrait. So that's pretty cool. That would mean that you could actually style things differently depending on people's paper orientation in their printer. So let's check and see how that works inside of Chrome. So if we go to Chrome, refresh our page, and we'll go over here to file print.
>
> **[3:05](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=185)** It's even easier here to test this. So this is portrait layout. You'll see here, it's showing the red text. So it didn't exactly work inside of Chrome and if we go to our layout of landscape, then that is also red text. So, well it's a lovely idea. It works really well on Firefox, not so much on Chrome. Alright, let's try something else. So one of the other things that you could do here would be instead of a orientation query, you could do a min-width. You might think well, okay so if Firefox and Chrome are having difficulty understanding portrait and landscape, maybe I could just set it minimum width. And if we hit that minimum width then we could apply these particular styles. So if we said something like, a minimum width of 6.5 inches, once again, it's print. So we could use inches as a unit of measure here, let's go ahead and try out that media query across our various browsers. So I'm starting here in Chrome. If you go ahead and refresh, and then print. So clearly it's not working here in portrait mode. If I switch over to landscape, then it does work. So Chrome is happier here with a specific minimum width as opposed to the more generic portrait versus landscape. And let's go on ahead and do the same test here for Firefox.
>
> **[4:42](https://www.linkedin.com/learning/css-print-style-sheets/complex-media-queries-for-print-and-page-orientation?u=76281980&t=282)** If we go on ahead and refresh our page and then go to file print. We're going to do this in portrait mode first. Make our PDF. There it is, it's red here in portrait mode. Which doesn't bode well for landscape, but we'll give it a shot. So file print one more time and I'm going to switch it to landscape. Open it in preview again. And so that's red text in both of those. So as you can see here there's lots to test when it comes to using these complex media queries inside of these various browsers at this point in time. You're just going to have to got through and set up your media query. Do something simple like I did. Make the text red because that's really obvious if it's working or it's not working. And then go through and work on your various settings and see what you can do. It would be really helpful in for some web pages if you wound up being able to apply different styles if it was printing in landscape mode versus portrait mode. And I'm sure with enough fibling here you could find a set of media queries that would do exactly that.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (6), scroll down (1)
> **Tools:** firefox (6)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** css (2), pdf (2)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** set up (2)
> **Versions:** 6.5 (1)
> **Speakers:** - [narrator] (1)

#### [Challenge](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=0)** - [Instructor] Now that you have a sense of how to prepare a webpage for print using basic CSS you already know, let's apply that to a new page. In your exercise files folder, there's a page here from Red30Tech. You want to set this up for print style so that it looks as good as you can get knowing what you know so far. So let's just take a quick peek at this webpage. So as you see, you have a lovely navbar up here at the top. We have a logo, we have a big, beautiful image at the top of the page, we have all of this text here talking about [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and the future of AI technology, and a sidebar talking about careers in artificial intelligence. And of course, it's fully responsive. So if we start to resize our webpage, let's go ahead and scroll that down a little bit, you can see here that our box is going to jump down here underneath of our text. And if we squash this down a little bit further, that is the way that our webpage is going to wind up looking here. So that is there on Chrome, and let's just take a quick peek at how this looks on print. So if you print preview the page, put it back to portrait here. You can see there's the navbar up there on the top, the logo, the big picture, and then all of the text here and the sidebar down there on the bottom and the text down here in the footer.
>
> **[1:36](https://www.linkedin.com/learning/css-print-style-sheets/challenge?u=76281980&t=96)** So, want you to give some thought as to how you might repurpose this so that it can look as good as possible for print. So first of all, think about what items need to be printed and what can be skipped, what needs to be restyled for optimum printing, is this font size big enough to read and print, or is it too big, and what about the images that are here on this page? So give that all some thought, and I will show you my answer in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (2)
> **Env Vars:** css (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=0)** - [Instructor] So, how'd you do with that challenge? There's certainly a lot of stuff to think about and a lot of things to process based on that last chapter, and of course, there are only about a bajillion different answers to the question of how we could restyle this page to make it look better for print. But I'll go ahead and share with you my answer, and maybe you've got some similar ideas or maybe you've done something a little different. So let's talk about the [HTML](../../Skills/Web%20Development/HTML.md) first. I don't think I made any major changes to this HTML here at all. As we scroll all the way down the page down to the footer, just to be a little different, down here in the footer, I did add a little bit of text here, for more information, visit our website at [red30tech.com](https://red30tech.com), and I set that up to be a print only style. So I went ahead and leveraged that, and then of course I put in the matching display only on the screen style over here in the CSS. Then inside of my print styles, I went ahead and resized my print down to a smaller size, switched it to Georgia, did a lot of similar things that I did with the previous round of styling. A couple of things I did that are different, rather than not displaying the picture at all, this time I went ahead and did this line of code here on 193. So I set the grayscale on the printer to one. So this is the CSS filter property,
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=94)** you are able to apply a CSS filter to your images, in this case, a grayscale filter, and what I've done is I have, that has a gradient on it from zero to one. And depending on which number you pick between zero and one, it will get rid of a certain amount of color information. In this case, all of it. So it'll be a black and white photo. We've got the trick here of displaying our content as block, so we turned off the grid layout. I went ahead and put in the writing out of the links on the page, changed some stuff in terms of colors and so forth. So that's pretty much what I did here for the styling. If we go on ahead and take a look at this inside of Chrome, if you go on ahead and refresh our page and then take a look at it in print format, so here you go. So in this particular situation, I've got my picture here. It's going to be printed, but it's going to be printed in black and white, and I could have easily applied that same color to the logo if I wanted. Definitely a thing you could do. And then the big problem, of course, was that aside that we had, that it was a dark aside, the footer was dark. So I went ahead and changed a whole bunch of colors. I still wanted to highlight that aside as a separate thing, but rather than doing that through making the background dark and the text light, which just takes a lot of printer ink, I just set a nice little border around it and rounded the corners, just like I had the corners rounded
>
> **[3:08](https://www.linkedin.com/learning/css-print-style-sheets/solution-2?u=76281980&t=188)** on the webpage. So that still does a nice job of setting off that text here and making it clear it's separate from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the document without taking up all of the printer ink. Now we still have some work to do here on this. If you take a look at the flow of the document and so forth, maybe you would like the page break to happen in a different spot. Maybe you'd like some control over the margins on this webpage. There's a bunch of other things that we can do with this document that are based on some new properties you might know, and we will look at all of that in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** css (3), html (2)
> **Analogies:** picture (2), just like (1)
> **CLI Commands:** make (1)
> **URLs:** [red30tech.com](https://red30tech.com) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Beautiful Formatting for Print

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding paged media and CSS fragmentation properties](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=0)** - [Instructor] To this point in the course, we've worked with CSS properties that you might already know well. These properties are used in print and in screen styling. For example; font sizes, the display property, margin and padding and so forth. Now we're moving into styling that's often considered more for the print realm. However, many of these properties have some specific screen applications as well. First, we'll take a look at some of the properties from the CSS Paged Media realm. As it says here on the MDN, the Mozilla Developer Network website. Paged Media defines how page switches are handled. In other words, these are styles specifically for Paged Media, and that would be print. Some of these properties are well supported. Like the page break properties that you see listed here, whereas others like the page at-rule, this one right here is relatively poorly supported. And we'll also take a look at some of these pseudo-classes here later in the course. Next we'll look at some properties from the CSS Fragmentation realm. MDN defines this as CSS that defines how content is displayed when it is broken or fragmented across multiple pages, regions, or columns. Notice that big difference with these fragmentation properties. They are for styling content that might break across pages or columns.
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=94)** These regions here that's still really experimental and I'm not going to address the regions in the course. We'll talk about pages and columns though. In other words, these properties have a wider scope, than the Paged Media properties, which specifically refer to pages. Some of the properties here CSS Fragmentation, like these break properties; break after, break before, break inside, behave similarly to the page break properties in a print context. But browser support varies. Break properties may be used with columns as well. While the page break properties are just for pages as the name implies. Browser support is a super key factor to keep in mind as we look at these properties in this chapter. Unfortunately, many of the properties I'm about to discuss are spotty with browser support. You might choose properties based on what browsers are supported, as opposed to what is most current. So for example, let's look at page break before here on the website. Can I [use.com](https://use.com)? It's a great website that reports, what CSS properties are compatible with which browser. Now the CSS page break before property comes from CSS 2.1. And it's generally well supported as you can see here, including in Internet Explorer six through 10. Obviously CSS two was published a long time ago, but if we look at the break property in terms of break before
>
> **[3:06](https://www.linkedin.com/learning/css-print-style-sheets/understanding-paged-media-and-css-fragmentation-properties?u=76281980&t=186)** we have a bunch of different possibilities here. So the remember the first one here is for CSS regions, that's experimental and it's not supported anywhere. That is not the one we're going to be talking about. Make sure that you're reading the right thing. So this is the one here for break before in Paged Media. That is the context that we'll be using it in this course. And you see here that Internet Explorer six to nine does not support break before it only supports page break before. Hopefully you still don't have to support IE six to nine, but I know many of you still do and so that might impact what it is that you wind up using. And then of course, we also have break before here in the context of multi-column layout and notice that that is not supported in Safari, although it's supported in other browsers. So this is just something that you're going to have to keep in mind as we go through this part of the course, I'll show you a lot of can I use, as we talk about these various properties and with that in mind, let's dive into looking at these individual properties in our code.

> [!info]- Semantic Content
>
> **Env Vars:** css (10), mdn (2)
> **Definitions:** in other words (2), is a  (1)
> **Documentation:** mdn (2)
> **Analogies:** for example (2)
> **Warnings:** keep in mind (2)
> **CLI Commands:** make (1)
> **URLs:** [use.com](https://use.com) (1)
> **Versions:** 2.1 (1)

#### [Setting printing page breaks](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=0)** - [Instructor] Let's start by examining the various kinds of page breaks that are available to us as well as the break properties. Remember page break properties like before and after and inside are all part of the page media spec. They're all for print, and the break properties can be used for columns as well as for pages. And so we're going to switch to a different example for this chapter. You'll recognize this from the challenge at the end of chapter two. This is the Red30 website, and this is the way it looks right now on screen. If we take a look at this on print real quick, you'll see this is the way it's looking here inside of Chrome. Very nice; I've hidden the picture here, and as you scroll down, we have this "Careers in [Artificial Intelligence](../../Topics/Artificial%20Intelligence%20(AI).md)" right now. That is a box and that box is breaking across this page break, and we probably would like to have that box all on one page or another. So we might give some thought as to how we're going to do that. It is possible to specify where exactly a page break will occur when printing. And there's two ways to do that. One is with the page break properties, and the other is with the break properties. I'm going to show you a little bit of both of those. So let's go and write some code to make that happen. So if we jump back into our Visual Studio code here, I'm going to scroll all the way on down to my print properties, and I'm just going to keep on adding to the bottom of these print properties.
>
> **[1:32](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=92)** So right here after the very last one, which is the footer print property, I'm going to just go ahead and drop in a paragraph here and say page-break-after: always; So that is one of our possible values for page break after, which is always put a break after a paragraph. And hopefully, you immediately think that sounds a little excessive. You'd be correct, but let's go ahead and take a look at it anyway. So if we go on ahead and refresh our webpage and then take a quick peek at it on print, sure enough, after every paragraph, we now have a page break. Fabulous. Okay, even inside of our big box here, that was a paragraph, and so it's on one page. Our border just stretches on into the next page, woo, for quite awhile, apparently. And then we finally get to the end of it here. Well, this is kind of silly. You would never do this in real life. But that's the general idea of how that property works. So if we go back, then, to make this a little bit more realistic, one, you probably don't want to do this through [HTML](../../Skills/Web%20Development/HTML.md) tag styles the way that I was just doing here. A class is probably a way that makes this a little bit more flexible, because you're never really quite sure where you want a page break to occur, so let's go on ahead and make a class called breakafter. And that's going to be the page-break-after: always;
>
> **[3:06](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=186)** and then we can apply that break after, how about after the article? So after the article is through, we want to break there, and that would put our box on a page by itself, so I would just simply place this class of breakafter right on the article tag. Just like this: class=breakafter so in other words, in theory, it's going to go ahead and print my whole article here and then when I reach the end of the article, the page break is going to occur right here. Let's see if that actually happens. So, if we go on ahead and refresh our webpage one more time, and go to our print view, sure enough, there's our text, then there's a break, and then we have our box on the next page. So this is one possible solution to this problem. Another way that we could do this is by using a different value. And I'm going to show you that now. So, I'm just going to quick remove that class that I put here in the article, and instead, I'm going to write a different class here. I'm going to call this one breakavoid. And this one, I'm going to say break-inside: avoid; which is another common value here for the break properties. Always avoid are two of the most commonly used ones. So basically, I'm saying inside of the box,
>
> **[4:41](https://www.linkedin.com/learning/css-print-style-sheets/setting-printing-page-breaks?u=76281980&t=281)** I'd like to avoid a page break, so if I use that instead, then when I get to my div with the class of aside, I'm just going to give this a second class as well: breakavoid, so in other words, I want to try not to break up this box and specifically this div with the class of aside and breakavoid, so let's see what that does for us. I'll save our CSS. Refresh the page. And then go on ahead and print one more time. And you see here, that has exactly the same result, so since I've said avoid putting a break inside of this part of the page, the printer has automatically moved this on to the next screen. So either one of these approaches would work in the case of the particular example, so these are things you might want to think about. Do you want a break? Make your breaks before a certain box on your page, after that box, or do you want to prevent breaks from happening inside a box, or do you actually want the breaks to happen inside of the box? Lots and lots of options with these various properties and values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** make (4)
> **UI Navigation:** switch to (1), scroll down (1), go to (1)
> **Definitions:** in other words (2), is a  (1)
> **Env Vars:** html (1), css (1)
> **Analogies:** picture (1), just like (1)
> **Documentation:** spec (1)
> **Tools:** visual studio (1)

#### [Creating columns within longer documents](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=0)** - [Instructor] If you take a look at the exercise files for this video, drop it in a browser, and then go on ahead and pull up a print preview here. You'll notice that I have taken out the page break from the previous video. And because I'd like to look at something else, another way that we could address this problem of this box that splits over a couple of pages the way it does here. So we could probably shorten up this text that's up here on the top of the page using CSS columns. So CSS columns are a property that are useful for both screen and print media. And if you're really happy with the way your screen is looking maybe it's just something you want to apply to print. Maybe you want to have columns for print, but not on the screen itself. So let me show you how the columns work. It's a really fast thing to apply and then you'll see the impact here in the printed area. So go ahead and cancel out of that and we'll jump back into VS code here. And I am going to scroll on down to roughly line 202 in my CSS. Right here, where I have this article with a margin bottom of zero and I'm simply going to add into the property called columns two, that's it. So that is all that you need to do to create two columns of text. And since we've put this inside of our print media query that will be available for print only. So if we go on ahead and save this and refresh our webpage once again real quick
>
> **[1:35](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=95)** and then take a look at it in print format, you'll see here that we have a lovely two column layout and that has made this very compact. Notice that the box here has pulled up really nicely onto that first page. All we have now on the second page is our disclaimer. So columns are a great way of shortening up your text when printing and they're also very easy to read because of the short line lengths associated with the columns. Now by default the browser, as you can see here, went ahead and made these of equal widths but notice that this applies to the whole article. So the title, which is this Technology Forecasts [Artificial Intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) is over just the first column. And you see the second column and the height is up there, right with that H1. So what if you wanted to have this H1, the title of the whole piece stretching all the way across all the columns but you wanted to have the text in columns underneath of it. How might you go about doing that type of thing? Well, so we can do that if you'd like to give that a whirl. So here in our [HTML](../../Skills/Web%20Development/HTML.md), we added that column declaration to the article tag. And we have no real way of separating the H1 from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the document based on the HTML that we have here at the moment. But what we could do is just after that H1 we could drop in a div with a class of say something like article body, since this is the body of that article,
>
> **[3:10](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=190)** and then scroll down forever until the end of the article and then we could close the div. And then of course we'll need to make a corresponding style for this. So just after that article declaration here, so around line 205, 206, I'm going to add my article body and I'm going to set the columns to two here and pull that off of the article. So now the columns property is applied to just that div. That div only contains the paragraphs and the subheadings and so forth, not the H1 that goes across the whole article. So if we test that now inside of Chrome, go on ahead and refresh the page, and we do a print preview, so there you go. Now you see Technology Forecasts Artificial Intelligence stretching very nicely all the way across the top of the page and then we have two nice even columns here underneath. That looks really good. So that would be a lovely way of formatting this as well. Notice too, that, that div that I just added, because I have a style associated with it for print, but not for screen, the screen layout has been not impacted at all by the additional div that was put in. So keep that in mind as you add potentially more markup to help support your print styles. Back to that print view again real quick, there's probably a little bit more that you could do here
>
> **[4:45](https://www.linkedin.com/learning/css-print-style-sheets/creating-columns-within-longer-documents?u=76281980&t=285)** to clean this up a little bit more like give some more space around the H1 or style the H1 a little bit differently. Maybe you could put a nice little subtle line under it, a little bit of margin, something like that, but the general shape here is what I wanted to communicate to you and you can get a sense of how these columns can really help improve the quality of the printed product that you generate for your web pages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** css (3), html (2)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Tools:** vs code (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Adding hyphenation](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=0)** - [Instructor] If you've read any materials printed on paper lately, like a book, a magazine, or a newspaper, you will undoubtedly see hyphenated words at the ends of lines of text. It's possible to add hyphens on the web, as well. And it's even really easy to do, at least for English. The property is called hyphens. It's described here on the Mozilla Developer Network, MDN. And unfortunately, the browser support leaves something to be desired if you want to write your webpage in a language other than English. So this of course is [caniuse.com](https://caniuse.com), and as you can here as of this recording about 96.5% of users have access to this, but unprefixed is only 77%, so I will show you how to write the prefixed code here for writing hyphens. And this first box at the top of the page has to do with English, so this is how hyphens would be put in for that. But, of course, there are other languages that are out there, so if I just scroll on down in the order that they appear, for example, here with Czech, we have support for it in Safari, but no other browser here in, I'm not sure what Latin is, but here we go, it's only available in Firefox. Here we have Dutch, it's available in Firefox and Safari. Welsh is available only in Firefox. So, you see the pattern here. It's often Firefox, Safari, or both of those. And so, the way this works of course is that there's some kind of dictionary that the browser's referring to to determine where to set the various hyphens,
>
> **[1:33](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=93)** and that is a great thing if you're using English, not so great for other various languages. So if we go back here to the MDN webpage, you'll see here, the property is called hyphens. It has three possible properties. So, auto means that it's going to automatically set those hyphens as you see here, extra, hyphen, ordinarily. And so, with English again, that's pretty simple, it'll set those for you. None, of course, means that it won't set any hyphens at all. Manual, it means that you're going to have to code your own break points for these particular hyphens. And if you scroll on down here, a little further down in the document, it'll tell you how this works. There's two kinds of possible hyphens. The hard hyphen character will always hyphenate that [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) every single time, whether a hyphen is needed or not. The shy version, as it says, invisible, soft hyphen, shy means that this is a character you'll actually put in your text, and if a hyphenation is needed at that point, then the hyphen will display; otherwise, it is ignored. So clearly, if you were going to leverage something like these manual hyphens or the soft hyphens, that is probably something you would do on the backend, setting up all those hyphens. You're probably not going to do manually in a [HTML](../../Skills/Web%20Development/HTML.md) webpage. That would take an amazing amount of time in order to set that up and make it responsive
>
> **[3:05](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=185)** and all the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of that. So auto is the value that we ultimately want here for our hyphens. And by the way, of course, this works on screen and on print. So why not set it up for everything? So, let's go ahead and jump on into our code. I'm going to set this up for both screen and print. I'm going to go ahead and put it on the body tag here, and I'll show you exactly how to write this. So this is --webkit-hyphens: auto is our value. In other words, use the builtin dictionary.
>
> **[3:39](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=219)** - -moz-hyphens, also auto, and a hyphens: auto. That's basically it. So if you go on ahead and save your webpage, and then we'll come on back to our website and scroll down because I put it in the screen for the all area of my style sheet, where both screen and print are being affected. You'll see here, we already have some hyphens showing up here on my screen page. And of course, when I go to print, you will see some hyphens that show up here as well. These columns look perhaps a little bit more square than they did before when we did not have hyphens in place. It makes this gap a little bit more distinct and obvious when the hyphens are there, because it's more likely that these line links are similar between these various paragraphs of information. So that's how you set up hyphens. You can use them just on print or just on screen or in both locations. That is all a matter of your own preferences and your own design work. One final note about hyphens. This is a progressive enhancement to your website. If your browser is supporting it, then fantastic. That means you get the hyphens in the screen or in the print, but if it's not supported, it's not really a big deal. You just aren't going to see the hyphens, but the page is still going to be usable and readable without them. The rag is just on the right hand side of all these paragraphs is called the rag.
>
> **[5:12](https://www.linkedin.com/learning/css-print-style-sheets/adding-hyphenation?u=76281980&t=312)** It's going to be a little bit more raggedy if you don't have the hyphens in place. So there really isn't any excuse not to turn on the hyphens on your web page if you're going to have a lot of text for printing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** means that (4), is called (3), is a  (3), in other words (1)
> **Tools:** firefox (4), safari (3)
> **Env Vars:** mdn (2), html (1)
> **Documentation:** mdn (2)
> **UI Navigation:** scroll down (1), go to (1)
> **CLI Commands:** make (1)
> **URLs:** [caniuse.com](https://caniuse.com) (1)

#### [Controlling widows and orphans](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=0)** - [Instructor] These aren't the widows and orphans that you were thinking about. These are CSS fragmentation widows and orphans, which have their own unique definition. In this context, an orphan is the number of lines that appear at the bottom of a page, region or column, while widows are the lines that appear at the top of a page, region or column. In other words, they're lines. They're not just words. As previously discussed, regions are experimental. So mostly we're just considering widows and orphans with pages or with columns. As Dudley Story has said, "Orphans are left alone at the beginning, "whereas widows are left alone at the end." So that might help you remember which goes where. In terms of browser support, every browser but Firefox supports widows and orphans. But fortunately, like hyphens, widows and orphans are a progressive enhancement. Firefox users won't enjoy the benefit, but other browsers will. There's no downside to using widows and orphans. Let's take a look at our webpage as it currently stands. If we go ahead and go to our print view here, we actually have widows that are showing up right here. So at the top of our second column, we have two lines of text here that are hanging out up here at the top. It looks a little bit odd perhaps and that is the concept of a widow right there. That's what that is. By default, widows and orphans are set to a value of two.
>
> **[1:35](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=95)** So in other words, two lines. That's what we have there right now. And that's what's going on with our default settings. But of course, we can increase that number, or obviously decrease that number. Although decreasing the number might make the problem worse. So you probably want to increase it from two, if that is an issue on your webpage. So let's go ahead and take a look at our code. And if we scroll on down the page here to our print styles, I'm just going to keep adding to this. We're going to go to around line 205 to our article again. The article is, of course, the container for that particular bunch of text that's showing up there on the print. And what I'm going to do here is I'm going to put in widows three. So in other words, there has to be at least three lines of text at the top of the next column, or the top of the next page, in order for that page break to happen where it does. If there are less than three, then a page break will occur before that. And we'll have more text, in theory, at the top of the page instead. Orphans are going to work the same way except it's the bottom of the page. So if you go ahead and make that change there in your CSS, let's take a look at our webpage again. Go on ahead and refresh and view this in print. You'll see that now our widows have pushed on down here to the bottom of the column. Now it just so happens to be
>
> **[3:07](https://www.linkedin.com/learning/css-print-style-sheets/controlling-widows-and-orphans?u=76281980&t=187)** that we have a title up here at the top of the next column. We probably want to do something more with the formatting up here to make this a little bit clearer, but we have solved our widow problem. Unfortunately, we introduce a new problem here with our box splitting over our screen again, but there's a lot of things that we could apply to this to make this work. Since we are going to be printing this disclaimer and footer down here on the bottom, you could always put in one of those page breaks, or breaks, as we did in a previous video and make this whole box move on down to the second page. That would definitely solve that particular problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Definitions:** in other words (3), is an  (1)
> **Env Vars:** css (2)
> **Tools:** firefox (2)
> **UI Navigation:** go to (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Using @page to create page margins](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=0)** - [Instructor] The last group of properties I want to talk about is the @page property. And some of this is well supported and some of it isn't supported at all. So in this video, I'm going to talk about the @page that is supported. In the next video, it's going to to be about the @page that is not supported, but is incredibly cool and you should keep an eye on. So we'll start here with @page and it's support. This is, of course, can I use? And if you take a quick look here at @page, generally speaking, it's supported, except in Safari. So this is yet another progressive enhancement, though. It's going to work. If you have it available, it's great. If you don't, it's really not that big a tragedy. Basically @page is going to allow you to set printing margins for your page within your document. And that's pretty much all that's going to be supported at this time. So as you scroll on through here, there's a thing called Page Margin Boxes. That is not supported by anything. Size is something I'll talk about in the next video. That's not supported. Neither is Bleed or Marks. I'm going to talk about all of those in the next video, but the page, in terms of setting the margin per page or the page dimensions, that's what I'm going to cover now. As you can see here, no support at all in Safari, and it's a little buggy in Internet Explorer and in Firefox, but once again, it's a progressive enhancement. So you can certainly give it a shot. So just to remind you what our website looks like so far, here is our webpage at this point in time.
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=94)** If we go on ahead and do a print preview of this, this is the way the page is looking at the moment. You can see, we have a little bit of a margin here on either side, and this is likely a default that gets set by the web browser itself. So if we go into our code and once again, I'm going to scroll all the way down to the end of my document, which is the print media query. I'm going to add this to the very end of the print media query. All you have to do is say something like @page, just like that. And then inside of this, I'm going to say margin is 0.5 inches. So give me a half inch on all four sides of my page. If you go ahead and drop that in and save it, then we can go to our web browser, refresh the page, take a look. And this has actually moved a little bit. You see, we have a couple of extra lines that are going on to the next screen. So here we now have a half inch around the entire document here on this page. So that's lovely if you want to have the same amount of margin on each side, and just like every other margin property, you could specify different margins differently, if you wish. But that would be applied to every page in your document. So if you said, "Margin left one inch," the left margin of every page in your printout would have a one-inch margin on it. Now, what if you wanted to have some extra space on one side of the page, one side of the physical page,
>
> **[3:10](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=190)** but maybe so that you could put in some holes in it and stick it into a notebook that you might refer to later. You would actually want to have a fat margin on the left margin of one page. Maybe you want to double-side print it. So when you flip the page over, you want that fat margin over on the right side of the page. Is that possible? Well, fortunately it is. Let me show you how you can set that up as well. So here I'm going to do this with some ridiculous size margins here, just so you can get a real sense of how this works. I'm going to use the pseudo classes left and right. Those pseudo classes are only used in the context of @page. So if I say @page and then space, colon left. That's the way you set this up, and we'll give it a margin on the right of two inches and then @page right, we're going to give it a margin on the left of two inches. Okay. So what is this going to do that's different than say, if I just spelled out a left or a right margin here in @page? Well @page is going to apply this to every page. These are going to apply it to pages as in a book. So if we go on ahead and refresh our webpage and then view our printed format here, you'll see that our first page
>
> **[4:45](https://www.linkedin.com/learning/css-print-style-sheets/using-page-to-create-page-margins?u=76281980&t=285)** has a nice fat margin over here. So again, you could use a three-hole punch on this page to prepare it for a notebook. And if you were printing double-sided, then this page would print behind that one. And these two margins here would match up exactly so, so that you would be able to do a whole punch and you would not punch through any text on either side of the page. So that is the benefit of the left and the right pseudo classes. The blank pseudo class is not well supported at this point in time, but that would pretty much describe how you can add interesting margins using the @page property.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (3)
> **Tools:** safari (2), firefox (1)
> **Analogies:** just like (2)
> **Versions:** 0.5 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Coming soon: Additional @page properties](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=0)** - [Instructor] There ae several additional @page properties that are coming to CSS soon. At this point, none of these properties are supported in any web browser, unfortunately, and they are all experimental. However, it's worth tracking what's coming up soon. All of the properties discussed here would be listed inside of an @page declaration in your CSS. Before we start, let's define a few quick terms commonly used in printing. First up, there's a printable area. That's this area here inside of this black line. Anything inside of here is safe. You can be sure that this information will be printed and included on whatever you're printing. The space in between this box and these lines on the outside is called the bleed. If you want to print something that goes all the way to the edge of the paper, you can figure your item to be printed within the bleed. This part may be trimmed off but it ensures that the ink goes to the edge of the page. These marks on the edge of the box are the crop marks. These help the printer know exactly where the paper should be cut, and finally, these marks up here are various types of cross marks. These have to do with registering colors when printing. They're also used in processes like die cutting, embossing, or foil stamping. With those terms defined, let's look at these new @page properties that leverage these printing conventions. First up, the size property is useful for establishing a printable area and its orientation when printed. Right now, this is flexible between browsers as you've seen.
>
> **[1:36](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=96)** However, this would give us some clear expectations between browsers. You could set a size as portrait or landscape. Portrait is taller than wide, and landscape is wider than tall. Doesn't have anything to do with the orientation of the device. You could also set a single value, and if you do that, it's going to be interpreted as a square. You can set two values, which are interpreted as the width and the height. There's also some keywords you can use like letter, legal, ledger, A4, or other standards, and you can combine those keywords with other values like portrait or landscape or some sort of dimension. Next, let's look at the marks property. Marks: crop; will place crop marks at an appropriate spot outside of the page box as defined by the size property. Marks: cross; will place a cross mark for alignment purposes somewhere outside of the page box. And of course, marks: crop cross; will print both types of marks. Let's look at the bleed property. Remember, bleed is the area between the page box defined by the size property and the crop marks defined by the marks property. Bleed has a length associated with it. By default, that amount is six points as determined by the auto property and if the crop marks are turned on. You can also provide a length value.
>
> **[3:11](https://www.linkedin.com/learning/css-print-style-sheets/coming-soon-additional-page-properties?u=76281980&t=191)** Bleed is a valid property only if crop marks are enabled.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** coming up (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### [Challenge](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/challenge-2?u=76281980&t=0)** - [Instructor] With all of these interesting CSS Fragmentation and CSS Paged Media Properties introduced it's time to apply them. Here's that H plus sport page again see if you can apply some of the styling elements we've worked with in this chapter including page breaks or other breaks, columns, hyphenation, widow and orphan control and add page margins to make a great looking printed page. As an added bonus, see if you can get the entire page to print in black and white including the images that are supposed to print. I've left in all of the styling that we put in, in chapter two. And if you just take a quick look at this page in printer format. You'll see you're already in pretty good shape. So we've got lots of texts on the page. It's all in Sara fonts. We've hidden the things that need to be hidden. So it's not looking all that bad at the moment, but, think about the new concepts that you've learned in this chapter and see how you'd apply them to this particular page. I'll show you my answer in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** css (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=0)** - [Narrator] So how'd you do with that challenge? Hopefully it went okay for you. I incorporated a whole lot of stuff into this webpage and it's looking so much better in print. So let's go through all my changes and then we'll take a look at it inside of the browser. So, first of all, I went ahead and turned on my hyphens. I put it on the body tag, hyphens are inherited so that by putting it here on the body tag, my hyphen should carry all the way through my document, which is great, that's exactly what I wanted. And then that was actually outside of my print media query. Once we get to my print media query, everything else is inside of that. So the very first thing that I did is h1, h2, h3, and my links have all been set to a black color. Of course they were all sort of gold before I had said that one of the extra challenges in this project was to make it all black and white, and this was still displaying as gold. So I went ahead and turned all that off, there we go, now it's displaying black. Scroll down a little bit further, the images were still in color. It's just those two images from the sidebar that were in question here. The other image, the main image in the article I've hidden earlier. So here I just added my filter gray scale from the CSS filters, that'll make those little images black and white for printing purposes. So that was added, and then down here, I've added a whole bunch of stuff
>
> **[1:34](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=94)** at the very end of my print media query. So I created a breakafter and a breakavoid class, but I wound up only using the breakavoid class. And I put that in a div around the chair rolls section of this article. And the reason why I did that was, there was a weird break that was going on somewhere here with the chair rolls between one page and another and so by wrapping the div here, I'm making sure that chair rolls stays together, I believe if I recall correctly, it had the heading and then the paragraph, and then the bullets wrapped onto another page, it seemed like all that stuff should go together as a unit. So now with this breakavoid in place, that will happen. I've also added a margin here of 0.75 inches. So it will have lots of breathing room when we print it. I put my article in two columns and I also turned off some margin on my sidebar to tighten up some space a little bit. So if we go ahead and take a look at that inside of our web browser, there's no change of course to the way the page looks on screen, just as has been true for the whole course. But if we go on ahead and go to Print, you'll see here that I have, my exercises are all here. My chair rolls has been kept together as a unit. It's not rolling onto another page, which is really great. I think that was a problem in Firefox. And we can take look at our images here, they're displaying in black and white as coded, and this information is all together here on this page. So that's the way it looks in Chrome.
>
> **[3:11](https://www.linkedin.com/learning/css-print-style-sheets/solution?u=76281980&t=191)** Let's also take a quick peek at our page inside of Firefox as well. If we go to File, Print, make sure you're printing into portrait mode, and then we're going to go to Open in Preview. And here's the way this page looks here. So you can see there's my logo, here's my text. All of that, I remember I mentioned chair rolls, I had to put that together. It looked like a fit really nicely in Chrome, but as you see here in Firefox, you can imagine that the chair rolls here probably showed up at the bottom of this column, a couple of lines, a little too much for widow and orphan control. So in this case, I just used a page break to make sure that chair rolls came out together on the second page. And then we have our information about the mineral water and the commitment to quality, and then all of our disclaimers and social media links. So that's the way this page wound up looking in Firefox. Your answers may have been somewhat different than mine, that doesn't make them wrong. Remember that there's about a bajillion different ways you can style a webpage or style something up for print, maybe you had a different approach that worked even better than what I did here. And that's all great.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Tools:** firefox (4)
> **UI Navigation:** go to (3), scroll down (1)
> **Env Vars:** css (1)
> **Versions:** 0.75 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/css-print-style-sheets/next-steps-25762079?u=76281980&t=0)** - Hey everybody, it's Jen Cranmer. Thanks so much for watching CSS Print Style Sheets. I hope you learn some new techniques that you'll use in your next project. If you liked me here, you'll like me in some of my other courses as well. In this course, we touched on using media queries for print styling. Did you know that media queries can also be used for color detection, aspect ratio and more? Check out advanced CSS media queries to learn more about the media in media queries. How much do you know about inheritance in CSS? How do you calculate specificity and how does the cascade really work? Find out more in my course [CSS- Inheritance, Specificity, and the Cascade](CSS-%20Inheritance%2C%20Specificity%2C%20and%20the%20Cascade.md). Finally, how well do you know all of the wonderful kinds of CSS selectors available? From your basic element or descendant selector to the newest pseudo classes like has, where and is, I've got you covered in CSS Selectors. Thanks again for watching, and I'll see you in another course soon.

> [!info]- Semantic Content
>
> **Env Vars:** css (6)
> **CLI Commands:** find (1)
> **Speakers:** - hey (1)


## Instructor

- [Jen Kramer](../../Instructors/Web%20Development/Jen%20Kramer.md)

## Resources

- Exercise files available

## Skills Covered

- Cascading Style Sheets (CSS)

## Path Context

### In [Learn CSS](../../Paths/Web%20Development/Learning%20Paths/Learn%20CSS.md)
← [CSS Layouts- From Float to Flexbox and Grid](CSS%20Layouts-%20From%20Float%20to%20Flexbox%20and%20Grid.md) | **12 of 12**

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