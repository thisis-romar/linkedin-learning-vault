---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: using-stark-for-accessible-design-projects
url: "https://www.linkedin.com/learning/using-stark-for-accessible-design-projects"
duration_minutes: 64
duration: 1h 4m
level: Intermediate
updated: 7/15/2024
learners: 13935
skills:
  - Digital Accessibility
  - Stark (Accessibility Software)
  - Accessible Design
exercise_files: true
github: "https://github.com/LinkedInLearning/using-stark-for-accessible-design-projects-3809042"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEwq_86Hrjgag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721061371788?e=2147483647&amp;v=beta&amp;t=7XvTKMORh2MasviBtdGNxTILbVpwOTr_xWt9XWEkbL8"
linkedin_topic: Web Development
learning_paths:
  - '[[Build for Digital Accessibility]]'
prev_courses:
  - '[[React- Components, Context, and Accessibility]]'
path_nav: '[{"path":"Build for Digital Accessibility","position":12,"total":12,"prev":"React- Components, Context, and Accessibility","next":null}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/digital-accessibility
  - skill/stark-accessibility-software
  - skill/accessible-design
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Using%20Stark%20for%20Accessible%20Design%20Projects.md)

![Using Stark for Accessible Design Projects](https://media.licdn.com/dms/image/v2/D4D0DAQEwq_86Hrjgag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721061371788?e=2147483647&amp;v=beta&amp;t=7XvTKMORh2MasviBtdGNxTILbVpwOTr_xWt9XWEkbL8)

# Using Stark for Accessible Design Projects

> In this course, expert Tom Green introduces designers and visual professionals to Stark, a utility for checking the accessibility compliance of design projects. Explore the basics of the Stark application and the WCAG 2 accessibility guidelines. Learn how to test your designs for visual and functional accessibility, and find out how to use the AI sidekick to help prepare your designs for being bui

> [LinkedIn Learning](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects) | 1h 4m | Intermediate | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Accessible design with Stark](#accessible-design-with-stark)
  - [Software changes](#software-changes)
- [**1. Installing the Stark Web Tools**](#1-installing-the-stark-web-tools) (2 videos)
  - [Install the Stark browser extension](#install-the-stark-browser-extension)
  - [What are the WCAG 2.0 guidelines?](#what-are-the-wcag-20-guidelines)
- [**2. Using Stark**](#2-using-stark) (11 videos)
  - [Conducting a WCAG audit](#conducting-a-wcag-audit)
  - [Using the contrast checker](#using-the-contrast-checker)
  - [Using the type checker](#using-the-type-checker)
  - [Using the ALT text tool](#using-the-alt-text-tool)
  - [Checking touch targets](#checking-touch-targets)
  - [Setting and correcting focus order](#setting-and-correcting-focus-order)
  - [Stark Landmarks](#stark-landmarks)
  - [Using the Vision Simulator](#using-the-vision-simulator)
  - [Using the Headings tool](#using-the-headings-tool)
  - [Using Sidekick](#using-sidekick)
  - [Automatic monitoring](#automatic-monitoring)
- [**3. Stark for Teams and Enterprises**](#3-stark-for-teams-and-enterprises) (6 videos)
  - [Using the Stark dashboard](#using-the-stark-dashboard)
  - [Connecting to GitHub](#connecting-to-github)
  - [Connecting to a URL](#connecting-to-a-url)
  - [Connecting to Figma](#connecting-to-figma)
  - [Stark Compliance Center overview](#stark-compliance-center-overview)
  - [Using the Stark Web tools through a browser's Inspect panel](#using-the-stark-web-tools-through-a-browsers-inspect-panel)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessible design with Stark](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/accessible-design-with-stark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/accessible-design-with-stark?u=76281980&t=0)** - [Tom] Well, hello there. My name is Tom Green, and welcome to Using [[Stark (Accessibility Software)|Stark]] for [[Accessible Design]]. In what seems like the blink of an eye, Stark has become a de facto standard when it comes to [[Accessibility for Web Design]]. For those of you familiar with Stark's tools for [[Figma (Software)|Figma]], Sketch, [[Adobe XD]], and other applications, the Stark web tools are pretty well the same. The main difference is you can do the checks in the browser. For example, I will be opening sites using their URLs and showing how to check for contrast issues, [[Typography]] issues, missing alt text, and so on. We will also look at the WCAG audit feature designed to catch accessibility issues tied to the site and the underlying [[HTML]] that violates the WCAG standards. In this course, I'm also going to cover the Stark Dashboard and Compliance Center that are ideal for teams and enterprises. By the end of this course, you too will see why Stark has become a de facto standard and how the wizards at Stark are working with you, your team, and your enterprise to ensure your work is accessible to all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (7), [[Accessible Design]] (1), [[Web Design]] (1), [[Figma (Software)|Figma]] (1), [[Adobe XD]] (1)
> **Env Vars:** wcag (2), html (1)
> **Tools:** figma (1)
> **Analogies:** for example (1)
> **Speakers:** - [tom] (1)

#### [Software changes](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/software-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/software-changes?u=76281980&t=0)** - [Instructor] One of the joys of being a [[LinkedIn]] Learning author is that on occasion, we get to interact with the people behind the software. As I was developing this course, the [[Stark (Accessibility Software)|Stark]] wizards made it abundantly clear to me that Stark had no intention of adding features when they get around to it. Instead, it was made abundantly clear to me that Stark embraces change and to expect it. Imagine my surprise when, after the day I recorded this course, Stark revamped its web tools UI, thus, you may be looking at your version of the Stark UI and thinking the one used in this course doesn't look anything like yours. You would be correct. The tools are all there; just in different places, not to mention the fact a new tool has been added to the lineup. What they have done, as you can see, is to categorize the tools by purpose, testing and inspecting. In many respects, this change makes the tool set even more intuitive. Instead of the list used in this course, you now know exactly what the tools do. There is also a new tool, automatic monitoring, which is a pretty neat addition to the lineup, and I'll go through it in Chapter 2. With that out of the way, let's start using Stark for [[Accessible Design]] projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (6), [[LinkedIn]] (1), [[Accessible Design]] (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 1. Installing the Stark Web Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Install the Stark browser extension](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/install-in-the-stark-browser-exension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/install-in-the-stark-browser-exension?u=76281980&t=0)** - [Narrator] To get started using [[Stark (Accessibility Software)|Stark]]'s accessibility toolset, you'll need to have a Stark account, which you can get at [getstark.co](https://getstark.co). As you can see, there are four plans available. The free account, right here, is fairly limited. The premium account is ideal for those who don't necessarily need to collaborate. If you work with a design team, the business account is ideal, especially for those teams where members don't need access to [[Figma (Software)|Figma]] or other design tools, such as the designer to developer handoff. The enterprise account, down at the bottom here, is aimed at dealing with enterprise-wide efforts to bring the entire organization into compliance alongside not just accessible software [[Microsoft Products|products]], but with a company-wide accessibility posture and policy. I should also add, Stark is aggressively updating their tools and services on a regular basis. For example, this course contains a video utilizing the Sidekick Figma plugin, which is not part of the web tools. The reason is, this AI tool was upgraded between the time I included Sidekick in my course, [[Accessibility and Inclusion with Figma]], last year, and today. As such, we here at [[LinkedIn]] Learning are committed to staying current with Stark, and we'll be regularly updating this course and the Figma course as things change.
>
> **[1:34](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/install-in-the-stark-browser-exension?u=76281980&t=94)** Once the account has been created, you can add the extension to Chrome, Safari, [[Microsoft]] Edge, and other browsers. And you can find it in your browsers list of extensions, which is right here. When the extension is installed, open the extension, log into your Stark account, and you are good to go. Before we start digging into the tools, it is important to understand what the WCAG is, and why Stark is so closely aligned with their standards. I'll talk about that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (6), [[Figma (Software)|Figma]] (4), [[Microsoft Products|Products]] (1), [[LinkedIn]] (1), [[Microsoft]] (1)
> **Tools:** figma (4), safari (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** you'll need (1), before we start (1)
> **CLI Commands:** find (1)
> **URLs:** [getstark.co](https://getstark.co) (1)
> **Env Vars:** wcag (1)
> **Cross-References:** in the next (1)

#### [What are the WCAG 2.0 guidelines?](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/what-are-the-wcag-2-guidelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/what-are-the-wcag-2-guidelines?u=76281980&t=0)** - [Instructor] In this video, I want to talk about the Web Content Accessibility Guidelines, which were developed by the W3C, an organization which sets the standard for [[Web Development]]. The WCAG is a volunteer group of individuals tasked with creating the guidelines followed by the industry to address accessibility when it comes to [[Web Design]] and coding. The WCAG is focused on four guiding principles, Perceivable, Operable, Understandable, and Robust. These are also the four principles around which [[Stark (Accessibility Software)|Stark]] has aligned itself. If you're interested in learning more about these principles, point your browser to this page and go through them. They're quite extensive and quite detailed. How tightly aligned is Stark to the WCAG principles? As you use the tools, Stark will show you not only which standard is being checked, but will also provide you with three or more suggestions you can use to come into alignment. For example, this webpage is being checked for contrast issues. The WCAG has three criterion for contrast and accessibility. They are A, AA, and AAA, and as you can see here, AA and AAA are being used. And what you need to aim for is AA, and Stark is suggesting how to do it.
>
> **[1:35](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/what-are-the-wcag-2-guidelines?u=76281980&t=95)** For those of you wondering about AAA, this implies strict adherence to complying to this standard is based more upon corporate policy than a firm rule. The numbers beside each category tell you the contrast ratio needed to fall into compliance, and as you can see down below here, Stark also suggests colors that will achieve that goal. It is important to keep in mind these are suggestions. As designers, you might choose different colors to achieve compliance or use your [[Design Systems]] colors. The bottom line, the WCAG Standards are broad, and having an intimate knowledge of them and how to bring your work into compliance with them is difficult, at best. Stark is your guide through the WCAG Standards and provides you with the information you need to bring your work into compliance with those standards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (6), [[Web Development]] (1), [[Web Design]] (1), [[Design Systems]] (1)
> **Env Vars:** wcag (6), aaa (3), w3c (1)
> **Documentation:** w3c (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Using Stark

[↑ Back to Table of Contents](#table-of-contents)

#### [Conducting a WCAG audit](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/conducting-a-wcag-audit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/conducting-a-wcag-audit?u=76281980&t=0)** - [Instructor] In this chapter, we're going to explore all of the tools. And most of the tools are right here in your extension. So if I click it, there it is. And the first thing we're going to run is the WCAG Audit, which will run through the entire site and point out the areas that don't conform to the WCAG standard. This site, Explore California, on the surface looks pretty good. What you need to be aware of is there is a fundamental difference between a page or site looking good and a page or site being accessible. And to run the audit, all I have to do is just click this button, it goes through it, and it becomes immediately apparent, there are a lot of accessibility issues. Now, a couple of things you might want to be aware of. You can choose which version of the WCAG standard to run. You can see they're all here. And the current one is 2.2. As pointed out earlier, if you are a sole proprietor or team member, always go with the AA check. And if you're in a situation where the corporate policy is strict adherence to WCAG standards, then do the AAA check. I should also add, as I pointed out, the current version of the WCAG guidelines is version 2.2, published in October '23.
>
> **[1:35](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/conducting-a-wcag-audit?u=76281980&t=95)** Now, this standard is a living document, meaning the guidelines will be updated, and you can fully expect start to change as the standards are updated. The first area you see here is a global result. And as you can see, there are 28 violations, which is the number of elements in the site that didn't pass the checks. Potentials doesn't tell me there are violations that could be violations. This does not mean they should be ignored. What you are being told is there are 11 elements that require a code check or further manual check because they couldn't automatically be confirmed as compliant or noncompliant. Finally, the good news is there's 308 elements that pass the check. And these three buttons: violations, potentials, and passed filter the results. The first violation shown is asking you to ensure the video has some form of captions associated with it. It shows you the code block and identifies underneath the code block which specific WCAG standard is being violated. If you scroll through the list, it is common to wonder where's the element in question. A great example would be this one pointing out contrast.
>
> **[3:12](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/conducting-a-wcag-audit?u=76281980&t=192)** If I select it, you can see that it is selected up there in the Tours area and identified. And at the bottom there is a Generate Report button. If you're working in a team-based environment composed of designers, developers, QA managers, and other members of a UX team, generating a report and circulating it to those who should be made aware of the issues puts everyone in the loop. To generate a report, All you need to do is just click it. It's going to ask you where to put it. And if I open it, you can see it's an [[HTML]] document that tells you the name of the site, where it's located, when it was scanned, and all those issues are listed. And you get direct link to them. My suggestion is to get into the habit of generating a WCAG audit report to identify the noncompliance issues. And as you deal with them, run another report to ensure they've all been brought into compliance. And we'll start with the contrast checker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Env Vars:** wcag (7), aaa (1), html (1)
> **Definitions:** is a  (4)
> **Versions:** 2.2 (1), version 2 (1)
> **Warnings:** be aware (2)
> **Speakers:** - [instructor] (1)

#### [Using the contrast checker](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-contrast-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-contrast-checker?u=76281980&t=0)** - [Instructor] There was a time back in the early 2000s when gray text on a dark gray background was regarded as just way cool. It may have been, but it was impossible to read, and when it came to being aware of accessibility, cool always won out. Thankfully, that has all changed. And [[Stark (Accessibility Software)|Stark]]'s Contrast Checker is designed to bring contrast issues up to the current WCAG standard. So what I have open here is the Explore California site. And if you take a look at it, and I'll just give you a quick scroll through it, you would assume there are no contrast issues because the text is all quite readable against all of the backgrounds, or the text is large enough to read. This would be a bad assumption, because that assumption is subjective. You are making the call based on what you see. Instead, let's run it through the Contrast Checker. So I'm just going to click the Contrast Checker. And you can see that it fails on all levels. Now, this is the whole page. And in fact, this is not the way to do a Contrast Check with Stark. Here's what you do. I'm going to select an element, the Tours element here. And you can see, it fails. The color chips you see below are suggestions of replacement colors for the foreground element, which would be the [[Microsoft Word|word]] Tours, and the background element, the gray behind them.
>
> **[1:36](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-contrast-checker?u=76281980&t=96)** And if I select this gray here and go over to the black, you can see that it's applied. And if I apply the suggestion, it's applied to all of those elements that have that color issue. Now, you're wondering about those Xs in the text area underneath. They tell you those are colors that you really can't use. And the other thing it is telling you is that the Tours element falls into compliance. Now, just be aware, it is checking all of the elements and applying the suggestions throughout. Don't let this bother you. You also may be thinking, "Well, Stark just changed the design. Isn't that fantastic?" No, it didn't. It is showing you the result of your choices. All you need to do is just refresh the page. So I'll just press the return key, and the page is refreshed and I reopen Stark. So we'll get Stark open and Contrast, select Tours. Now, another thing you can do here is you can use the Color Picker or the Eye Dropper to choose a color in the Color Picker, or select it in the Color Picker and choose a color. So let's go with this. Yeah, we'll go with this blue here. And we'll apply the suggestion. And you can see, it passes.
>
> **[3:11](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-contrast-checker?u=76281980&t=191)** But it's just for that one element. The other question you may be asking is, "What is this number here?" This is the suggested contrast ratio. Anything above 4.5 to one will pass. And you can see that the suggestion or the change is 6.47 to one, so that is passing the test. Now, the great thing about this is, you can either use the colors suggested or use the Eye Dropper tool to play what I call what if games, just to see what colors work. So there you have it, using Stark's Contrast Checker to ensure compliance with the contrast standard laid out by the WCAG.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (6), [[Microsoft Word|Word]] (1)
> **Env Vars:** wcag (2)
> **Versions:** 4.5 (1), 6.47 (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Using the type checker](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-type-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-type-checker?u=76281980&t=0)** - [Instructor] I have spent years visiting websites, and I can tell you many of them drive me up a wall, across the ceiling, and down the other wall because of poor [[Typography]]. The issues range from font choice to leading and practically everything in between. The most common issue is text blocks where the text is so small it is neither readable nor legible. [[Stark (Accessibility Software)|Stark]] contains a typography tool that doesn't do what the name implies, solve typography issues, but it does address a major accessibility issue. What the Typography Checker does is to highlight improper font sizes and alignment. By that I mean it will point out text that may be too small to be legible or alignment that affects readability. Even though the text contrast may pass, it may still be too small to be legible. This is important because, as I used to tell my students, if the text is not legible and readable, you have prevented the user from access to understanding. So let's get started. I currently have the Orange Valley Community Arts Association site open, and there really doesn't seem to be much here that bothers me. The text is all readable and legible and is broken into discrete, easily understandable blocks. That would be a mistake.
>
> **[1:33](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-type-checker?u=76281980&t=93)** If I open the Typography Checker, I suddenly discover I have some issues. The really great thing about the Typography Checker is it annotates each piece of text that is problematic. Now, typography is one area where Stark and the WCAG are not in lockstep. The reason being, there is no WCAG standard for typography. Instead, Stark follows the generally accepted best practices when it comes to typography, which is 12 pixels for body text and 16 for large text, such as subheads and heads. If I select this first item here, the issue is the font size is too small. In fact, this is an issue if I scroll through all of the errors. Another issue that may crop up is alignment. Justified text is not a best practice, and if text were justified, it too would be highlighted. Now, what you can do here is you can click on the plus sign here, and you notice it bumps the point size of the text. If I pull it down, it will go down, and I can say apply the suggestion, and it's good to go. Just be aware this change is non-destructive.
>
> **[3:07](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-type-checker?u=76281980&t=187)** It is Stark telling you, "Here's what the text would look like." It does not change the [[HTML]]. To return to the original version, refresh the page. One final note. If the style for your text is hardwired into the site's styles library or design system, you may have to make the change there. So there you have it, Stark's Typography Checker, a quick way to discover font size and alignment issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Typography]] (10), [[Stark (Accessibility Software)|Stark]] (5), [[HTML]] (1)
> **Env Vars:** wcag (2), html (1)
> **UI Navigation:** open the (1), click on (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Warnings:** be aware (1)

#### [Using the ALT text tool](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-alt-text-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-alt-text-tool?u=76281980&t=0)** - [Instructor] Missing alt-text is a significant accessibility issue. Not only can screen readers not understand the image, but should the image fail to load, the alt-text will be the stand in. So let's see how this works and what better example to use that a photography site. When I check for alt text, I just click it and it immediately zips through this page and finds all the issues. And you can see that this image here labeled as to-do means it has no alt-text. What we have here though is the alt-text associated with these images down here. So it's pretty good. So with this image, what it's saying is it's the background image. There nothing describing what the boardwalk is. So what you do is you select Generate Alt-Text, and this is where it gets really interesting. As it's thinking, it comes up with some suggestions. And the first suggestion is a closeup of a gray background with a gradient, well, yeah, okay, fine. But you notice there are two more suggestions because this is one of three. So we'll take a look at that one, nope, nope. Now, the other thing you can do is just go back into the [[HTML]] and write in the alt-text, or if it started [[Figma (Software)|Figma]], do the alt-text there using the [[Stark (Accessibility Software)|Stark]] tools.
>
> **[1:35](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-alt-text-tool?u=76281980&t=95)** Now, you get two choices with a suggestion. If you choose copy it as code, which can then be handed over to the development team, or you can just copy it and use it elsewhere. So there you have it, checking for alt-text in the browser. What is really neat is how Stark not only suggests all-text, but also gives you the option of copying the code or the text for circulation to the team, and it gives you possible solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (2), [[HTML]] (1), [[Figma (Software)|Figma]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** html (1)
> **Tools:** figma (1)
> **Speakers:** - [instructor] (1)

#### [Checking touch targets](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/checking-touch-targets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/checking-touch-targets?u=76281980&t=0)** - [Instructor] Nothing irritates me more than tapping on a button or link on my phone and nothing happens. This inevitably requires me to [[Zoom]] in on the offending element and then tap it to get where I want to go. The Touch Targets tool in [[Stark (Accessibility Software)|Stark]] quickly identifies the offenders and asks you to make adjustments. Why are touch targets important? There are a number of reasons and all are based around the user. They're helpful for users with mobility, dexterity, and fine motor disabilities. Other users to keep in mind are users with one hand or maybe even use a part of their finger or fingers. This tool is also useful for those with low vision who have difficulty seeing the interactive element. So, if I go through the touch targets here (keyboard clicking) and I'm just going to move it over, you can see that there are a number of issues on this site. And a prime offender is right here. These icons. The standard size should be at least 48 by 48 pixels, not 40 by 40, with at least eight to 10 pixels of space between them. If we move over here to the text input boxes, if we move over here to the text input boxes, number six, you can see that they're annotated, they're the wrong size. When it comes to these elements, a minimum height is based on the device.
>
> **[1:34](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/checking-touch-targets?u=76281980&t=94)** For iOS, the value is 44 pixels, and here it's 32. And for [[Android]] it is 48 pixels, here it is 32. If you are unsure, go with the larger Android spec. Even the big red login button fails. It needs to be at least 48 pixels high. So, if I go to number nine, you can see there we are again. What you can't do is move the button into compliance using this tool. Instead, you need to head back to the design file and make the adjustments there. If you are using [[Figma (Software)|Figma]], the touch target tool in the Stark plugin will help you meet this specification.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (2), [[Android]] (2), [[Zoom]] (1), [[Figma (Software)|Figma]] (1)
> **CLI Commands:** make (2)
> **Documentation:** spec (1), specification (1)
> **Code Identifiers:** ios (1)
> **Tools:** figma (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Setting and correcting focus order](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/setting-and-correcting-focus-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/setting-and-correcting-focus-order?u=76281980&t=0)** - [Instructor] In this video, we are going to use the Focus Order tool. What this tool does is accommodate those users who use the keyboard, commonly the Tab key or other methods to navigate through a screen or webpage. As you can see, this tool annotates the design and the numbers indicate the order in which a user would navigate through the page as the Tab key is pressed. The focus order for this page is a little bit disjointed. For example, the first one up here is the Nav, and the second one is Join Us, and the third one right here, More Info, is right down here in this Current Show. If you find the focus order illogical, this tool won't let you make the changes. Instead, you need to head back to the [[Figma (Software)|Figma]] document or other file and make the change there using the [[Stark (Accessibility Software)|Stark]] plugin in Figma or write in the [[HTML]]. I am not going to review how that works. I would suggest instead you head over to my Accessibility and Inclusion course on [[LinkedIn]] Learning right here where I dig into how to set the focus order using these Stark tools inside of Figma.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (3), [[Stark (Accessibility Software)|Stark]] (2), [[HTML]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** figma (3)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Stark Landmarks](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/stark-landmarks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/stark-landmarks?u=76281980&t=0)** - [Narrator] In this exercise, we're going to use the landmarks tool to find a page's landmarks and decide if they follow a logical flow. What landmarks do is to annotate each section of the design with the appropriate label. The benefit to adding landmarks is to make your developer's life easier because your developer is not put into the frustrating situation of guessing [[Microsoft Word|word]] landmarks and their appropriate attributes are to be placed in the [[HTML]]. Even more important than the developer, landmarks permit users who use screen readers to navigate through a page or screen. Nothing is more frustrating to those users than to be constantly tapping through all of the various elements before reaching what they are looking for. And if I run the Landmarks tool, you can see the page is broken into a number of landmarks. These landmarks are labels that can be added using the [[Stark (Accessibility Software)|Stark]] plugin for [[Figma (Software)|Figma]]. Screen readers use landmarks to get around inside pages that are longer complex. They also define regions of a page, and landmarks are especially useful if given an accessible name. One of the more interesting aspects of this tool is it will show you the specific area of the page that contains a landmark. For instance, if you scroll through this page,
>
> **[1:36](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/stark-landmarks?u=76281980&t=96)** you're not going to see a landmark called Maine. So if I click on it, you can see that whole area grows bigger. Another example is down here, in the Aside. Now I'm not too sure where that is. So let's find it. And you can see it's this whole section in here. And if I want to see what the section is, you can see that the section refers to the text under Meet Audrey who is over here. What you can gather from this is screen readers will look for landmarks like Aside that I showed you, which contains three landmark sections and go through each of them. And a screen reader will see the Aside as a complimentary landmark or region of the page, and will then navigate among the three sections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[HTML]] (1), [[Stark (Accessibility Software)|Stark]] (1), [[Figma (Software)|Figma]] (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** html (1)
> **Tools:** figma (1)
> **UI Navigation:** click on (1)
> **Definitions:** refers to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Using the Vision Simulator](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-vision-simulator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-vision-simulator?u=76281980&t=0)** - [Instructor] In this exercise, we're going to look at the Vision Simulator tool. And what better site to explore this tool than a photography site? This tool's primary focus is to sensitize you to how various users with specific vision issues will perceive your screens or page, and the keyword is perceive. So let's open it up. And you can see that the simulations are broken into two groups, Color Blind and Other. The first is how users affected with a form of colorblindness will perceive colors in your work. The second grouping simulates what users with a variety of vision issues will experience. So let's go through them. The first four are colorblind simulations. And we're not only going to look at how the images are perceived, but how that red text is also perceived. So we'll start with Protanopia, and you notice the distinct change in the images. This condition affects the perception of reds and greens. You can see that in the images, and if I roll over this image, notice the [[Microsoft Word|word]] "more" practically disappears. Things really change when Tritanopia is selected. This condition affects the ability to distinguish between blues and greens. Images will take on a reddish color cast.
>
> **[1:34](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-vision-simulator?u=76281980&t=94)** With Achromatopia, everything becomes gray scale. And for images, this really is not a huge issue. Where it does become an issue is the word "more." Because it now it poses a contrast issue. Moving down to the vision simulators, there are going to be all kinds of changes. So Blurred is what we expect. Ghosting almost resembles double-sided. Yellowing looks like color grading has been applied. Loss of Contrast looks like a gray mat has been overlaid over the entire site. Tunnel vision, as you can see, you can move around, and see what it looks like for people with tunnel vision. And Bright Light looks like the luminance color value of the page has been seriously increased. So there you have it, the Vision Simulator. A quick way to become aware of how users with vision problems will perceive your work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **Speakers:** - [instructor] (1)

#### [Using the Headings tool](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-headings-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-headings-tools?u=76281980&t=0)** - [Instructor] The final tool in the [[Stark (Accessibility Software)|Stark]] web tools lineup is the Headings tool. Its purpose is to show you the text hierarchy in your page, H1, H2, H3, whatever. This tool scoots through the [[HTML]], identifies the headings and shows you where they are. The advantage to you as a designer is to see if the headings have been applied as expected. It also provides you with an opportunity to make some decisions. And let's see what I'm talking about. So, I'm going to select the Headings tool, and you can see that all the headings are annotated. And I've got the [[Microsoft Word|word]] DELICATE here, and I'm trying to figure out, well, is it this delicate or that delicate? Well, you kind of know it's that, but if there's confusion, you just select it and you can see that it sort of gets bigger and is brought to your attention. And you'll notice it has an H3 attribute, and you may decide, okay, fine. Maybe you want to bump it up to an H2, your call. Now for Premium Quality Olive Oils right there, you may decide the H2 attribute is a bit lost and might need to be changed in the HTML, the CSS or the design system. All of these are decisions that you're going to need to make by yourself, and you can do it in conjunction with your development team or with the design team. But there you have it, the Headings tool,
>
> **[1:34](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-headings-tools?u=76281980&t=94)** a tool designed to give you a look at how the headings hierarchy works or doesn't work when it comes to accessible UX design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Stark (Accessibility Software)|Stark]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** html (2), delicate (1), css (1)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using Sidekick](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-sidekick?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-sidekick?u=76281980&t=0)** - [Instructor] One of the slickest additions to the [[Stark (Accessibility Software)|Stark]] plugin tools for [[Figma (Software)|Figma]] is an updated version of Sidekick. The wizards at Stark have added an AI capability to this plugin that, to be honest, is designed to deal with accessibility issues with a single click. I also might add, this is an AI solution that actually demonstrates the promise of AI as a workflow accelerant. To this point, you may be thinking my walking you through each of the tools to isolate accessibility issues is rather time-consuming. No longer. Sidekick in Figma zips through the selected art board, not the entire collection of art boards, and flags all of the issues on the selected art board. Before you start accusing me of wasting your time by putting Sidekick at the end of this, I did it deliberately. Sidekick flags the issues and then suggests possible solutions. Accepting the suggestions is up to you. So let's run this art board through Sidekick. So I'm going to select the art board, go over to my plugins, going to choose Stark. If you've used Sidekick in the past, you may notice it's not there. It is. Sidekick is now run by clicking the Auto Scan & Fix button right here. So let's do it.
>
> **[1:34](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-sidekick?u=76281980&t=94)** And it goes zipping through it. And it tells you there are 24 accessibility issues, three potential accessibility issues, and only 33 elements passed. All of these issues relate only to this art board. Now, this feature was added during the latest Stark update. In the past, Sidekick would present you with an extremely long list of issues tied to all of the art boards in the project and all of the confusion that came along with the list. As you can see, the issues are broken into the categories, and they follow the Stark tools. So let's deal with this first one, Favorite. Now, as soon as you select it, you notice Stark immediately zooms into where the issue is. And you can see that, again, you can see that it fails miserably. It it is supposed to have a contrast ratio of 4.5 to 1, and it's sitting at 2.01 to 1. Now, you can choose to address the issue or you can choose to ignore it. Now, what I can do is change the color of the text, which is in this bottom row here, to black, and it immediately moves into compliance. Now I have two choices. I can apply it to the layer or I can apply it to all instances of this element
>
> **[3:08](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-sidekick?u=76281980&t=188)** where gray text is over that pink background. So I'm going to apply it to the layer. I should also add, if that text color was tied to a remote color library, you can now access that library in the Color Picker. This is a huge improvement if your colors are tied to a design system. Okay, let's choose another one. And All Trails. So where's that? Oh, as you can see, it's too small, and there are two instances of it. So basically all I have to do is bump the text size. So I just bump it up to 12, and now I'm in compliance. Looks good, nothing to suggest. Well, what the heck? Let's apply it to all of them. And there we go. Now, writing alt text can be a huge issue. And you'll notice that I have 13 issues with alt text, and that can be intimidating. So what we're going to do is we're going to select the alt text, and we'll just go with the first one. And what you do is you select the alt text, and Stark's AI magic goes through all of the images and adds the alt text. In fact, in certain instances, you'll be presented with two or more suggestions or the suggestion. And each one can be edited or you can review each one and click the Apply Suggestions button,
>
> **[4:41](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-sidekick?u=76281980&t=281)** and your alt text issue is no longer an issue. Let's go back. Let's take a look at the potentials. And it looks like there are some issues with the art board and some text issues. We need to add some focus order, and we need to add some landmarks. And it looks like there are a couple of headings that haven't been annotated either. So what passed? Click through them. And you're taken right to it and told, "No issue here." Bottom line with Sidekick? It is an extremely efficient way of applying the Stark toolset to an art board or frame. Though it will flag the problem and offer suggestions, it would not hurt to know how to use the suggested tool to solve the issue discovered by Sidekick.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (8), [[Figma (Software)|Figma]] (2)
> **Definitions:** is an  (3), is a  (1)
> **UI Navigation:** select the (3)
> **Versions:** 4.5 (1), 2.01 (1)
> **Tools:** figma (2)
> **Speakers:** - [instructor] (1)

#### [Automatic monitoring](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/automatic-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/automatic-monitoring?u=76281980&t=0)** - The latest addition to the [[Stark (Accessibility Software)|Stark]] Web tools is automatic monitoring, and it has a really interesting purpose. And you can see that it's new because it is just that, new. So, when you select it, you're asked to turn it on. So when you turn it on, you are taken to your Stark dashboard where you can then add this project to a team project or create a brand new one, and then go to work. And what will happen is, is as you make changes to the project and deal with the accessibility issues, a graph will show the progress of the issues as they are resolved. In fact, the number of issues will start to decrease, and you will also be told the date that that change was made. Now, I'm going to get into dealing with the dashboard and projects in the next chapter, and I'll see you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - the (1)


### 3. Stark for Teams and Enterprises

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the Stark dashboard](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-stark-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-stark-dashboard?u=76281980&t=0)** - [Presenter] In this video, we are going to look at how to set up a team project in the [[Stark (Accessibility Software)|Stark]] dashboard. Before we get going, just be aware this feature is available through the Premium, Business, and Enterprise plans. The main difference between Premium and the other two is adding a project to a team project is only available through the Business and Enterprise plants. To access your dashboard, you need to log into your Stark account through the browser. Stark makes it a painless process when you first open the dashboard, because they have a complete onboarding sequence. I'll just go through it here, 'cause I've already set up a team. So it's going to ask you to install Stark and [[Figma (Software)|Figma]], you're going to need Stark for your browser. If you're going to be using Figma files, by the way, you're going to need to do that. You can take a report from the web tools and share it and then you create a new project and add an asset and then you create team members. There's another really neat feature of the dashboard, which is right here, make the most of Stark. There are a ton of tutorials, a really great overview of the WCAG. There is a collection of free resources, articles and websites on inclusive design in the library and of course you can access the documentation. So let's get started. And the first thing I need to do is go to my project dashboard
>
> **[1:34](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-stark-dashboard?u=76281980&t=94)** and you notice there are two types of projects here, team projects and private projects. And again, as I said, team projects are available through the Premium, Business, and Enterprise plans. But to add members to a team project, you need to have either the Business or the Enterprise plan. For those of you that have neither, you can work with a private project. So the first thing I want to do is go to a team project and I'm going to manage my team. To add a teammate, you click this big button up here, add teammates, and they're going to ask you to add an email address, so I'm just going to add an email address here. This is a fake email I use for this purpose and I can add multiple addresses or even I can throw them all into a CSV file and upload that. And then the invite gets sent and I can close this and you can see that it's pending. Now if this gentleman has a Stark account, they can accept the invite and they're now added to the team. You can also review the team members by just adding a name or showing all the team members, showing all the administrators, that would be me, who the contributors are, who's inactive, and what invites are pending. And once you've added the teammate,
>
> **[3:07](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-stark-dashboard?u=76281980&t=187)** you can create a project. So I'm going to go to the project dashboard and I'm going to create a project. Now creating a project works just as well for the team projects as it does for the private projects. Just remember, private projects can't have a team. So to create a project, all I need to do is just type in, "Swiss," and it will be, "Tour Switzerland."
>
> **[3:44](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-stark-dashboard?u=76281980&t=224)** And the project is created and I can now import a Figma file. So here's how you import a Figma file. I'm going to have the file open in Figma and you come over to the share link here or the share button, click it and you just copy the link to your clipboard and return back to Stark and paste it. You can import a [[GitHub]] repository and I'm going to get into that in a separate video, 'cause it's a little bit more complicated, but I can also scan a URL. So I'm going to bring in Explore California. So I just copy the URL, paste it in and the first thing I want to do is import the Figma file. So it's going to get it and it's only got one page, so I'm going to import it and it tells me there are all kinds of issues and I want to put this URL in here for the Explore California and I can scan that and it's in.
>
> **[5:08](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-stark-dashboard?u=76281980&t=308)** So what's happening here is it's scanning the [[HTML]], looking for violations and this usually takes a little bit, but eventually what will happen is you will see there will be a number of violations, there they are, a number of potential violations and what has passed. Now the team settings is really quite interesting, because here you can connect to a ticketing system and this is only available for the Enterprise accounts and click it and you can quickly connect to one of the systems presented in your organization's system. So there we go, here comes the list, right there. I'm just going to close that. So there you go, they're sort of working with the dashboard, we're going to get deep, deep, deep into it later throughout this chapter. But this gives you a really good overview of how to use the dashboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (8), [[Figma (Software)|Figma]] (6), [[GitHub]] (1), [[HTML]] (1)
> **Tools:** figma (6), github (1)
> **Env Vars:** url (3), wcag (1), csv (1), html (1)
> **UI Navigation:** go to (3), open the (1)
> **Prerequisites:** set up (2), install (1), you need to have (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)

#### [Connecting to GitHub](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-github?u=76281980&t=0)** - [Narrator] Being able to review a [[Figma (Software)|Figma]] project or URL using the [[Stark (Accessibility Software)|Stark]] Web Tools is a huge productivity boost. You may also have noticed you can connect [[GitHub]] repositories to the dashboard. This recent addition to the Stark lineup is ideal for developers. Connect to a repository and Stark will scan the code, not the design, looking for and identifying accessibility issues. Connecting Stark to a GitHub repository is well out of the scope of this course, but you can find how to do it right here on the Stark site. Once you have the GitHub connection, you can access the repository through the Stark dashboard. The process starts, of course, by creating a project which I've done here. Once the project is created, you come down to the import GitHub repository area and click it. And the first question you're going to be asked is to name your organization. And I've named it [[LinkedIn]] Learning. So what I'm going to do is click this button to connect to the organization, and this it will show me the link to the repository. So I'm going to connect it to the project. Away you go. And what Stark is doing is looking for errors based on the WCAG 2 audit process in Stark.
>
> **[1:36](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-github?u=76281980&t=96)** Where this process differs from the others is the code and the repo is scanned. And as you see, because of this code, Stark is telling you this takes a bit longer. When the scan is done, we see there are five violations. To review the violations, click the view reports button. And if I scroll down, you can see that it's broken down by the WCAG standard, and my first one tells me there is no ALT text associated with an image. And what you can do is click the create ticket button, and what it will do is tell you the error is there. It is attached to the project in the repository, which means the issue can be dealt with immediately or during the next sprint or update. So there you have it, connecting GitHub to Stark, which will scan the code rather than the design. The great aspect of this is tickets are attached to the project and they outline the coded issue, but also what the issue is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (10), [[GitHub]] (5), [[Figma (Software)|Figma]] (1), [[LinkedIn]] (1)
> **Tools:** github (5), figma (1)
> **Env Vars:** wcag (2), url (1), alt (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Connecting to a URL](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-a-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-a-url?u=76281980&t=0)** - [Instructor] As you are learning, your [[Stark (Accessibility Software)|Stark]] dashboard is a rather robust way of not only identifying accessibility issues, but also tracking progress as they're identified. So, what we're going to do is just sort of go through a project process with a URL. So, first thing I want to do is create a project. And I'm going to give it a name, which is Explore California. And the description is Trip Planner for California.
>
> **[0:42](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-a-url?u=76281980&t=42)** And you create the project. And now what I want to do is scan a URL. So, I'm going to add an URL to this one. And the URL we're going to add is good old Explore California. Open up the scan URLs. And you can see that you can upload a CSV file with multiple URLs or even an XML sitemap. And you can determine whether the site that you're going to requires authentication, or even advanced page authentication, your call. We're just going to go simple here. So, we're going to paste it. And we're going to tell the dashboard, scan the URL.
>
> **[1:34](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-a-url?u=76281980&t=94)** And you can see that it is scanning the code. And it will tell us how many violations, potential violations, and checks have passed. Well, we've got 25 violations. Well, let's see what they are. So, we're going to view the report. And this first one, of course, there's no transcript for a video file. So, you can create a ticket for it. And submit that to the development team. And if we come up to the top here, there's a graph. The graph tracks progress. Right now, it is showing 49 issues. As the issues are resolved, the graph will show a reduction in the number of issues and the date when the issues were resolved. This is a great way of tracking progress. Stark also gives you the ability to download a report, which is especially handy if you don't have a ticketing capability. An [[HTML]] document, as you saw earlier, is created, which can then be shared with the design or development team. So, there you have it. Using the Stark dashboard to review URLs, identify issues, and to either submit a ticket or create an HTML-based report,
>
> **[3:08](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-a-url?u=76281980&t=188)** which shows the issues. Another great feature is right here, this little graph, which allows you to track the progress right in the dashboard. One final point. It is up to you whether to retain the project in the dashboard or remove it when all issues have been resolved to everyone's satisfaction. And the quickest way of doing that is to click on go back. And in this little pop down here, you can delete the project. I should also add projects without a link to [[Figma (Software)|Figma]], [[GitHub]], or a URL will not be deleted. So, there you have it. Using Stark with a URL. Now, let's look at how to work with Figma files, and we'll get to that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (4), [[HTML]] (2), [[Figma (Software)|Figma]] (2), [[GitHub]] (1)
> **Env Vars:** url (7), html (2), csv (1), xml (1)
> **Tools:** figma (2), github (1)
> **Cross-References:** as you saw (1), in the next (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Connecting to Figma](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-figma?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-figma?u=76281980&t=0)** - [Instructor] As [[Figma (Software)|Figma]] has risen to become the standard UX [[Prototyping]] application, [[Stark (Accessibility Software)|Stark]] through its Figma plugin has grown with it. Prior to the introduction of the dashboard, the plugin could only be used in an open Figma file and the changes made within Figma. The dashboard changes this in a rather interesting manner. The first thing you need to know is you must be logged into Figma. If you aren't, Stark will prompt you to do so. Now what I've done is I've imported a Figma file called Stark, and I want to take a look at the report, and this is how it all works. So you view the report, and I notice that I've got some contrast issues, so more suggestions. Okay. And what it will do is it'll open the file, it'll select the element that's in question, and then what you do is you open the Stark plugin, and we know it's a contrast issue. And there it is. So you can now make some changes to the layer, or if this is a common element throughout, you can apply it to all of the elements that have been caught. Okay, I'm going to go back to Stark. The other thing you can do, as you notice is if you're in a team environment,
>
> **[1:32](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/connecting-to-figma?u=76281980&t=92)** then you can create a ticket, and that will be sent to the dev crew saying, hey look, there's a contrast issue with this element, and you might want to take a look at fixing it. One final point, the insights chart right at the top lets you track the progress of you or your teams addressing the accessibility violations noted in the report. And as they are resolved, this will come down. On top of that, the day it's resolved will also show up. So there you have it, applying the Stark tools to a Figma file. Just keep in mind, you must log into your Figma account to do this, and Stark uses the URL in Figma share mode to scan the file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Figma (Software)|Figma]] (9), [[Stark (Accessibility Software)|Stark]] (7), [[Prototyping]] (1)
> **Tools:** figma (9)
> **UI Navigation:** open the (2), select the (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### [Stark Compliance Center overview](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/stark-compliance-center-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/stark-compliance-center-overview?u=76281980&t=0)** - [Instructor] This course is focused on the tools and how they can be used by designers and developers to address accessibility issues. There's one major piece of the accessibility process that is often overlooked: it is ensuring the accessibility issues addressed fall into line with a corporate accessibility policy that includes compliance with government regulations such as those in the EU, Canada, the US, and Australia. Needless to say, this process can get complex. Considering the fact close to 96% of the web is inaccessible, one can infer that clearly articulated corporate accessibility policies are at best more in the realm of statement than policy. Ask companies to articulate their security and [[Privacy]] policies and you can be confident those policies are clearly documented. Generally, they can't articulate their accessibility policies. This is where one of the more powerful tools in the [[Stark (Accessibility Software)|Stark]] lineup comes into play. Recognizing all of these issues, the Stark Compliance Center is designed to help organizations develop an accessibility policy that is just as complete as their security and privacy policies. The Compliance Center as shown here, is only available to enterprise accounts or as an add-on for business plans for obvious reasons.
>
> **[1:36](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/stark-compliance-center-overview?u=76281980&t=96)** The most critical component of the Compliance Center is what you don't see. It is based on the Stark accessibility framework, which allows you to both set and monitor the progress of your organization's accessibility policy. In very broad terms, the process to create an organizational accessibility policy is based on three important areas: customer experience, culture, and compliance. The Compliance Center will help your organization create the policy that touches on those three areas. As I scroll through the Compliance Center, you will see there are eight distinct areas: policy and government, people and culture, standards and posture, training and awareness, tools and procurement, [[Product Development]] lifestyle, marketing, communications and [[Content Creation]], and [[Continuous Monitoring]]. And each one has a set of what Stark calls controls. This is a control to enable an organization to proactively develop an accessibility policy. This policy development is a complex process, but the Compliance Center smooths it out by not only identifying the area to be covered, but also includes the classic business practice of asking "By whom?" and "When?" and then tracking the progress.
>
> **[3:10](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/stark-compliance-center-overview?u=76281980&t=190)** This first area, of course, is policy in government, and this process obviously starts with asking, "Who will take charge of the accessibility statement?" and then requiring that statement called evidence to be uploaded for review or posted to a URL for review. For example, I've created an accessibility document and I'm just going to upload the file. It's on the desktop, and it's telling you, "Okay, that file has been uploaded." And if I go back, you will see a green check mark telling me it is complete and within the scope of this process. When I return to the Compliance Center, everyone with access to the center can see that 3% of the framework has been completed and that four controls, one, two, three, four, are still outstanding. Those with access can then access the document and make edits or changes, and as these changes are made by the owner or to the document, they will be timestamped for audit purposes. From there, Stark helps you walk through the process of outlining the controls needed to bring policy and governance into compliance with both the organization's intent
>
> **[4:45](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/stark-compliance-center-overview?u=76281980&t=285)** and governmental requirements in all markets where the organization operates. In today's global market, an accessibility policy is no longer a nice to have. It is a must-have. By proactively and constantly managing an organization's accessibility policy, you are now able to deliver on a global basis fully accessible [[Microsoft Products|products]] and services that continually adapt to changing governmental regulation and most important of all, the needs of those who will access your products and services. I don't disagree. This can be a time consuming process, but Stark's Compliance Center answers that first question we all have: "Where do we start?"

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (6), [[Privacy]] (2), [[Microsoft Products|Products]] (2), [[Product Development]] (1), [[Content Creation]] (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Using the Stark Web tools through a browser's Inspect panel](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-stark-web-tools-through-a-browser-s-inspect-panel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/using-the-stark-web-tools-through-a-browser-s-inspect-panel?u=76281980&t=0)** - [Instructor] In this video, we're going to look at another tool developers will find to be very handy. As you may or may not know, developers tend to open a site and inspect the code right in the browser. Now, not only can developers inspect the code right in the browser, they can also launch [[Stark (Accessibility Software)|Stark]] in the inspect panel and not only see where the issues are found in the design, but also in the code block in question. Here's how. I have the Explore California site open here in Chrome, and if I right click on the page and choose Inspect, I can see the design over here, and of course the code is over there. To run this through Stark, what I do is I come over here to this forward icon, click it, choose the Stark accessibility tools, and you can see that it opens up an audit. So the first thing I want to do, of course, is start the audit. And if I go through the report, I can see all the violations, and if I click on a violation, you can see it highlights the code block or the line of code where the issue is located. I think developers will find this to be a rather interesting little feature. To move this from a nice to know feature into something developers can use to address the violations, come up here, generate a report, and what happens is, is an [[HTML]] file is created, which can then become a great reference source for use by the development team.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (3), [[HTML]] (1)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (2)
> **Env Vars:** html (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/next-steps?u=76281980&t=0)** - Well, here we are at the end of the course and you're probably wondering where can we go from here? Well, there's a lot you can learn about accessibility here at [[LinkedIn]] Learning. Let's start with a course I did, [[Accessibility and Inclusion with Figma]], and what it has is just a complete rundown on how to use the [[Stark (Accessibility Software)|Stark]] plugins for [[Figma (Software)|Figma]]. If you want to learn about [[Accessibility for Web Design]], then Derek Featherstone, who I regard as one of the world experts on the subject of accessibility, has a great course here at LinkedIn Learning, [[Accessibility for Web Design]]. It is complete. And a lot of the topics I covered in this course are gone into in great depth, and by the end of it, you really should have an idea of how accessibility is so important when it comes to [[Web Design]]. Derek has another course, this course by Derek UX Foundation's Accessibility is just a tremendous, tremendous overview of the whole process of working with accessibility in UX, and I think it will be a great course for you to sort of poke around and understand exactly how accessibility is applied in UX design. I'm going to end by saying Stark is one company that is dedicated to making the UX world aware of accessibility
>
> **[1:40](https://www.linkedin.com/learning/using-stark-for-accessible-design-projects/next-steps?u=76281980&t=100)** and helping you become aware of it. They are going to be aggressive, and this course is probably going to be updated on a regular basis because this Stark team is constantly, constantly, constantly adding updates. I hope you are now aware of just how powerful Stark is and how complete a tool set it is when it comes to making sure that our UX and web work is accessible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Stark (Accessibility Software)|Stark]] (4), [[Web Design]] (3), [[LinkedIn]] (2), [[Figma (Software)|Figma]] (2)
> **Tools:** figma (2)
> **Speakers:** - well (1)


## Instructor

- [[Tom Green]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/using-stark-for-accessible-design-projects-3809042)

## Skills Covered

- Digital Accessibility
- Stark (Accessibility Software)
- Accessible Design

## Path Context

### In [[Build for Digital Accessibility]]
← [[React- Components, Context, and Accessibility]] | **12 of 12**

## Appears In

- [[Build for Digital Accessibility]]

## Related Courses

_Courses sharing skills:_

- [[WordPress- Accessibility]] — Digital Accessibility
- [[React- Accessibility]] — Accessible Design
- [[Auditing Design Systems for Accessibility]] — Digital Accessibility
- [[React- Components, Context, and Accessibility]] — Digital Accessibility
- [[Microsoft Office Accessibility for Beginners]] — Digital Accessibility

---

[↑ Back to top](#)