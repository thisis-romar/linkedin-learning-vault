---
type: course
slug: developing-for-web-performance
url: "https://www.linkedin.com/learning/developing-for-web-performance"
duration_minutes: 145
duration: 2h 25m
level: Advanced
updated: 4/2/2021
learners: 10984
skills:
  - Web Application Development
exercise_files: false
tags:
  - course
  - topic/web-development
  - topic/network-and-system-administration
  - topic/software-development
  - skill/web-application-development
status: not-started
created: 2026-04-17
---

# Developing for Web Performance

> Performance matters! Faster websites have been shown to increase visitor retention, loyalty, and satisfaction, especially on mobile. In this course, discover how to develop websites and applications with performance in mind. Since the cause of most slowdowns is the communication between the browser and the server—the realm of HTTP—senior staff instructor Morten Rand-Hendriksen goes over the HTTP/2

> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance) | 2h 25m | Advanced | 11K learners

## Instructor

- [[Morten Rand-Hendriksen]]

## Skills Covered

- Web Application Development

## Table of Contents

### Introduction

#### What is performance and why is it so important?
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=0)** - [Morten] See if you recognize the situation.
>
> **[0:02](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=2)** You go to a website or click a link, and the website and the images and the video just take forever to load.
>
> **[0:14](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=14)** Sound familiar?
>
> **[0:15](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=15)** What you're experiencing is a website with poor performance.
>
> **[0:18](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=18)** And that feeling of frustration you get even just thinking about this experience is tied to this performance.
>
> **[0:25](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=25)** It is no longer enough for your web creations to work.
>
> **[0:28](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=28)** They have to work fast, and that's what performance measures.
>
> **[0:33](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=33)** In this course, I'll introduce you to the core principles of performance and show you how to develop websites and applications with performance in mind.
>
> **[0:41](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=41)** We'll look at common performance issues, what causes them, and how to solve them, and you'll get a solid understanding of how the web works and why performance is such a huge issue.
>
> **[0:51](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=51)** Developing for performance results in your sites performing at their best, both figuratively and technically, and I'm here to show you how to get it right.
>
> **[0:59](https://www.linkedin.com/learning/developing-for-web-performance/what-is-performance-and-why-is-it-so-important?u=76281980&t=59)** So let's get cracking.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [morten] (1)


### 1. Web Performance: An Introduction

#### What is web performance and optimization?
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=0)** - Web performance is a term describing how fast a website or web application is perceived to be.
>
> **[0:07](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=7)** Good web performance means the site loads quickly and the user can interact with the components quickly.
>
> **[0:13](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=13)** This is measured with metrics like first contentful paint, first meaningful paint, time to interactive, max potential first input delay and so on.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=23)** Web performance has become a central focus for web developers and web services for several reasons.
>
> **[0:29](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=29)** Web applications are becoming more and more complex.
>
> **[0:32](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=32)** With that complexity comes increased file sizes, users of the web expect things to work faster and more effectively.
>
> **[0:41](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=41)** There is extreme disparity in web services, both nationally and internationally with some people having blazing fast unlimited broadband internet providers through fiber optic cables while others access the same internet through spotty 2G networks would severe bandwidth restrictions.
>
> **[0:59](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=59)** And finally, there's a large variance in devices and software used to access the web.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=64)** From top of the line ultra high resolution computers to old low power feature phones and nonstandard devices like smart TVs and handheld gaming platforms.
>
> **[1:15](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=75)** To be successful, websites and applications need to be fast and efficient for all users no matter what combination of these conditions they're working under.
>
> **[1:25](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=85)** To make that happen we use performance optimizations to make our services as fast as possible to get the most important pieces of the services to the user as fast as possible.
>
> **[1:37](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=97)** The MDN web docs breaks down by performance optimization into four major areas.
>
> **[1:42](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=102)** Number one, reducing overall load time.
>
> **[1:45](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=105)** This is done by compressing and minifying all files, reducing the number of file and other HTTP requests sent back and forth between the server and the user agent, employing advanced loading and caching techniques and conditionally serving the user with only what they need when they actually need it.
>
> **[2:04](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=124)** Number two, making the site usable as soon as possible.
>
> **[2:08](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=128)** This is done by loading critical components first to give the user initial content and functionality and then deferring less important features for later using lazy loading to request and display content only when the user gets to or interacts with it.
>
> **[2:23](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=143)** And by pre-loading features, the user is likely to interact with next.
>
> **[2:27](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=147)** Number three, smoothness and interactivity.
>
> **[2:30](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=150)** This is about improving the perceived performance of a site through skeleton interfaces, visual loaders and clear indication that something is happening and things are going to work soon.
>
> **[2:41](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=161)** And finally, number four, performance measurements.
>
> **[2:45](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=165)** We use tools and metrics to monitor performance and validate up my station efforts.
>
> **[2:50](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=170)** The best method for improving and optimizing the performance of a website or app depends on a wide variety of factors.
>
> **[2:56](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=176)** So the best approach for this task is to do as much as possible within reasonable limits.
>
> **[3:02](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=182)** In other words, this is not a do everything otherwise you're doing something wrong type scenario.
>
> **[3:07](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=187)** It's rather a do what you can and not everything will fit your needs type scenario.
>
> **[3:13](https://www.linkedin.com/learning/developing-for-web-performance/what-is-web-performance-and-optimization?u=76281980&t=193)** Keep that in mind as we move through the course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (2)
> **Env Vars:** mdn (1), http (1)
> **Definitions:** is a  (1), in other words (1)
> **Documentation:** mdn (1)
> **Speakers:** - web (1)

#### How do we measure performance?
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=0)** - [Narrator] Most aspects of my performance can be measured in a consistent way for comparison and analysis and iteration.
>
> **[0:06](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=6)** There are a myriad of tools out there for this purpose including tools built into your browser and online tools you can use either for free or for a fee.
>
> **[0:14](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=14)** Different tools give you different types of feedback.
>
> **[0:17](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=17)** And because they exist in different locations on different stacks and provide different types of services, they also give you slightly different results compared to one another.
>
> **[0:26](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=26)** For this reason, the best practice is to use several different performance monitoring tools collect the data from all of them, and then compare, contrast and analyze when possible.
>
> **[0:36](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=36)** These tools fall into two main categories, browser tools and hosted third party tools.
>
> **[0:41](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=41)** Let's look at the browser tools first.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=44)** There are two main types of tools here.
>
> **[0:46](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=46)** The first one exists inside the Chrome browser.
>
> **[0:50](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=50)** If you open the developer tools for Chrome and go to the far right hand side of the developer tools, there's a button called Lighthouse.
>
> **[0:56](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=56)** This tool generates a performance report for your site and it also gives you a long list of suggestions on how to improve the performance of your site.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=64)** It also tests for other things, progressive web apps, best practices, accessibility and SEO.
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=70)** And you can choose whether you want to test on a mobile device or a desktop device.
>
> **[1:13](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=73)** If you choose mobile, then the browser will mimic a mobile device.
>
> **[1:17](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=77)** So small screens, slower load times and all that.
>
> **[1:20](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=80)** So I'm going to generate a report just to see what's going on on this site that I'm running right now.
>
> **[1:25](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=85)** This is a site that lives somewhere on the web but you can also run Lighthouse on a locally hosted site on your computer, if you want to.
>
> **[1:32](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=92)** What I get in response here is a performance score of 84.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=96)** This is good, but not great.
>
> **[1:39](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=99)** Ideally, I want to get as close as possible to 100.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=101)** I want it to at least be in the green, so over 90.
>
> **[1:45](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=105)** To fix that, I can now scroll down and see what's slowing my site down.
>
> **[1:48](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=108)** Well, first off, I can see there are some issues.
>
> **[1:50](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=110)** First, Contentful paint is too slow.
>
> **[1:53](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=113)** Largest Contentful paint is too slow and there's too much cumulative layout shift.
>
> **[1:58](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=118)** Meaning things are moving too much around as the pages loaded.
>
> **[2:01](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=121)** Scrolling further down, we get a list here of opportunities and diagnosis.
>
> **[2:07](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=127)** So the opportunities here include eliminate render blocking resources.
>
> **[2:11](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=131)** If I open that, you can see the render blocking resource in question is Google fonts.
>
> **[2:16](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=136)** And we'll talk a lot about web fonts and optimization later.
>
> **[2:19](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=139)** And one of the things that we'll deal with is exactly this type of problem where the web font is blocking the rendering of the page.
>
> **[2:26](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=146)** You can also see it's as serve images in next gen formats.
>
> **[2:29](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=149)** And if we open up, it'll say image formats like JPEG 2000, JPEG XR and web P off provide better compression than PNGs and JPEGs.
>
> **[2:38](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=158)** We'll also talk about image formats and how to optimize for different image formats later on in the course.
>
> **[2:45](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=165)** And finally, at the bottom here, we have remove unused JavaScripts.
>
> **[2:48](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=168)** And that just means somewhere in the sites, there's JavaScript being loaded that isn't being used which is a waste of resources.
>
> **[2:56](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=176)** So the Lighthouse report is really good at seeing at a glance where the performance enhancements of your site can be.
>
> **[3:01](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=181)** And it gives you good recommendations on what to do.
>
> **[3:04](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=184)** If you want to dig further into exactly what is going on in your site, you can also run the network monitor.
>
> **[3:10](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=190)** You open the network monitor, make sure you click disable cash so that you are downloading the site from scratch.
>
> **[3:16](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=196)** And then you just reload the page.
>
> **[3:18](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=198)** What you get here is a waterfall of every single resource that's being downloaded from the site.
>
> **[3:23](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=203)** And you can see right away how it's being downloaded.
>
> **[3:26](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=206)** On this case, the site is running HTTP two, meaning it's multiplexing and loading resources as fast as they become available.
>
> **[3:33](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=213)** And you can see here, that it takes quite a bit of time for everything to load.
>
> **[3:37](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=217)** For example, we have this file here called vendor JS.
>
> **[3:40](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=220)** Now this is the file that Lighthouse said has a lot of unused code and you can see it takes quite a while to load.
>
> **[3:47](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=227)** And there's a lot of execution going on here too.
>
> **[3:50](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=230)** Further down, we have main JS.
>
> **[3:52](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=232)** If you hover over any of these, you get a breakdown of how long it takes for queuing, how long it was stalled, how long it took for the request to be sent and how much wait time happened before it came back, how long it take to download.
>
> **[4:04](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=244)** So here you see, for example, it took 237.99 milliseconds between the request was sent to the server and the response came back and then the actual download was only 1.49 milliseconds.
>
> **[4:17](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=257)** If we look at the top one here, this is the HTML document.
>
> **[4:21](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=261)** You can also see, there is a very slow start on the server.
>
> **[4:24](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=264)** So the server waited for 1.48 milliseconds before anything happened.
>
> **[4:29](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=269)** And then we waited 151 milliseconds before the file actually got downloaded.
>
> **[4:34](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=274)** So the total execution of this was 153.9 milliseconds which is a very long time.
>
> **[4:40](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=280)** That means that the server that is running on is not all that fast.
>
> **[4:44](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=284)** If you go in and go even deeper into what's going on, you can also go to the performance monitor.
>
> **[4:49](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=289)** Now the performance monitor tells you about how the scripts and everything else in the site are actually performing.
>
> **[4:55](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=295)** So this falls a little bit outside of the scope of this course, but it's worth knowing about because it gives you a lot of details about what's going on in your site.
>
> **[5:02](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=302)** Again, to run it, you need to go over here, clear everything and then click on start profiling and reload page.
>
> **[5:09](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=309)** Now the page will be reloaded into the browser and the profiler starts.
>
> **[5:13](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=313)** Now, the profiler is a fairly advanced tool and you can use it to do things like profile existing behaviors.
>
> **[5:19](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=319)** You can go in and mess around with a site and then see what is happening.
>
> **[5:22](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=322)** But what you get here is now very detailed information about how the page is loaded and what kind of activity happens as this loads.
>
> **[5:29](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=329)** As you can see, there's 20 milliseconds for loading then 83 for scripting, and 38 for rendering and 12 for painting.
>
> **[5:36](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=336)** And you can see here on the breakdown exactly when different things happen and what is happening and so on.
>
> **[5:41](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=341)** So there's a lot of information here.
>
> **[5:43](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=343)** Lighthouse exists in Chrome network monitor and performance monitor exists in all modern browsers, including Firefox, Edge and so on.
>
> **[5:52](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=352)** The second category of performance monitoring tools is hosted third party tools.
>
> **[5:58](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=358)** The most used example here is page speed insights.
>
> **[6:02](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=362)** Now, if we go to page speed insights, you'll notice it looks exactly the same as Lighthouse.
>
> **[6:06](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=366)** Just that it's on the web.
>
> **[6:08](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=368)** That's because it is.
>
> **[6:09](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=369)** The difference is Lighthouse runs on your computer page speed insights runs on some server that Google has.
>
> **[6:16](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=376)** So you get slightly different data and you get slightly more reliable data because it's also compared to other data that they have.
>
> **[6:22](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=382)** But this is a way you can run a Lighthouse on any website even if you don't have Chrome and you get the same type of breakdown, same type of tips and everything else.
>
> **[6:32](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=392)** One cool thing is the page speed insights, screenshots are not relined on the browser window.
>
> **[6:39](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=399)** You may have noticed in my Lighthouse output here, that the screenshots are based on the size of my browser window.
>
> **[6:45](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=405)** So right now we're just getting the hamburger menu.
>
> **[6:48](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=408)** Well, in page speed insights, you get the actual screens.
>
> **[6:50](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=410)** You can see what's going on.
>
> **[6:52](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=412)** Another popular tool is the web page test website.
>
> **[6:56](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=416)** Again, here you just enter the website you want to test and you get a report and return and you get a full breakdown of the waterfall.
>
> **[7:03](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=423)** You get different runs so you can run the same site against different browsers, different configurations, different locations, to see how it differs.
>
> **[7:11](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=431)** So the difference between run one and run two here is run one is the first load, run two as the cashed load.
>
> **[7:16](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=436)** So the website is already being cashed inside the system and you'll get a ton of information.
>
> **[7:21](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=441)** Regardless of what testing procedure you use, browser tools, hosted third party tools or something else, the actual test results always include page speed scores and other details.
>
> **[7:33](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=453)** They also show you key indicators describing the user experience most important of which are first paint, the time it takes before the user sees changes happening in the browser, Largest Contentful Paint.
>
> **[7:45](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=465)** the time it takes before the user sees content, so text images, something else in the browser.
>
> **[7:50](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=470)** First Meaningful Paint, the time it takes before the user sees content that is actually meaningful.
>
> **[7:56](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=476)** So when above the full content and web fonts are loaded and the user can derive meaning from what they are seeing.
>
> **[8:03](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=483)** And finally, Time To Interactive, the time it takes before the content has finished loading and the UI can be interacted with so the user can actually click on buttons, fill forms or do whatever else is going to happen on the site.
>
> **[8:15](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=495)** The longer it takes for a site to hit each of these points, the higher the chance of the user either getting annoyed or abandoning the user experience altogether.
>
> **[8:24](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=504)** As an example, I'm sure you've experienced visiting a site on your computer or mobile device and experiencing not being able to click on a button or interact with an input field.
>
> **[8:33](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=513)** In that circumstance, you're still waiting for TTI or Time To Interactive.
>
> **[8:38](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=518)** And that waits can be extremely infuriating.
>
> **[8:41](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=521)** When it comes to reliable automated testing, Lighthouse is currently the industry standard and it's even integrated in other hosted solutions like GTMetrics and page speed insights.
>
> **[8:52](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=532)** Lighthouse also gives you other important feedback like accessibility testing and recommendations on more performance JavaScript libraries and so on.
>
> **[9:00](https://www.linkedin.com/learning/developing-for-web-performance/how-do-we-measure-performance?u=76281980&t=540)** So for ongoing testing during development, Lighthouse is by far the quickest and most reliable route.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (3), open the (2), scroll down (1)
> **Definitions:** is a  (8), means that (1)
> **Code Keywords:** finally, (2), let (1), case, (1), else. (1), else, (1)
> **Env Vars:** jpeg (2), seo (1), http (1), html (1), tti (1)
> **Versions:** 237.99 (1), 1.49 (1), 1.48 (1), 153.9 (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Tools:** firefox (1)

#### Why does performance matter?
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=0)** - [Instructor] Performance has become a key metric for the success of websites and apps.
>
> **[0:04](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=4)** So much, in fact, Google uses performance metrics to rank sites in their search engine.
>
> **[0:10](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=10)** Poorly performing sites get lower ranking.
>
> **[0:13](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=13)** But search engine preference is not the main reason you should focus on performance.
>
> **[0:19](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=19)** The end user, the human beings visiting your website, is the real reason.
>
> **[0:25](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=25)** Almost all performance optimizations and best practices center around either reducing the size of data sent to the user, or speeding up the user experience by simplifying tasks and improving code quality.
>
> **[0:38](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=38)** Both of these reasons have to do with our duty of care to the end user.
>
> **[0:42](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=42)** All we know about the person visiting our site or app is that they want to interact with it.
>
> **[0:47](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=47)** We don't know where they are, what type of connection or device or software they're using, or anything else about them.
>
> **[0:53](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=53)** Providing each of these people with the most optimized performance possible ensures they get the information or interaction they're looking for with the least amount of time spent, with the least friction, and with the least impact on whatever slow connection or data caps they are working under.
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=70)** I like to think of web performance like car performance, while it's technically possible to build a car out of concrete and steel and lead and tow a giant grand piano behind it, its performance would be awful because of the weight, and the user would pay for that poor performance every time they fueled up.
>
> **[1:30](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=90)** This is one reason why cars are made as light as possible unless there's a specific reason not to.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=96)** A pickup, for example, might be designed for towing heavy loads, so it will be heavier because there's a reason to make it heavier.
>
> **[1:43](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=103)** On the web, we often accidentally make our websites out of the code version of concrete and steel and lead.
>
> **[1:50](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=110)** Huge images, unoptimized script, and uncompressed code bundles.
>
> **[1:55](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=115)** And that's because they work fine on our computers in our own development environments, so they should work fine on the web as well.
>
> **[2:03](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=123)** But the price for this lack of performance is paid by the end user.
>
> **[2:07](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=127)** Performance optimizations and best practices ensure we build our sites as light and nimble as possible so the user gets the best user experience possible.
>
> **[2:17](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=137)** And as a bonus, our sites get better ranking on Google and good user experience improves what we call organic sharing, meaning people enjoying using our sites and then telling other people about it.
>
> **[2:31](https://www.linkedin.com/learning/developing-for-web-performance/why-does-performance-matter?u=76281980&t=151)** In short, good performance is better for your visitors, better for you because you don't have to pay as much for your hosting, better for your Google rankings, and finally, better for the environment.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Web Performance Basics

#### How browsers render content
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=0)** - [Instructor] To understand performance optimization, you first need a solid understanding of how typing something into the address bar of a browser results in the page being rendered in the viewport.
>
> **[0:09](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=9)** So let's follow our requests to some [site.com](https://site.com) all the way from the initial request to the final results.
>
> **[0:17](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=17)** It all starts with the browser sending a request for some [site.com](https://site.com) to its ISP, that's the internet service provider for the current internet connection the browser is connected to, that could be your regular internet provider, if you're in your house or an office, or it could be your cell phone provider, if you're using your mobile phone, the ISP then sends the request immediately to a DNS domain name service.
>
> **[0:42](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=42)** This is effectively a phone book for the web, associating the host name or URL.
>
> **[0:47](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=47)** So Universal Resource Identifier in our case, some [site.com](https://site.com) with an IP address the actual location of that service.
>
> **[0:56](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=56)** This by the way, is how you can move a domain name from one server to another, and why it takes a while to do so.
>
> **[1:03](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=63)** You're really just changing the entry in the domain name service to say this site with this name now lives up this new address.
>
> **[1:11](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=71)** And the reason why it takes a while is because the domain name service has to be updated.
>
> **[1:15](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=75)** And then that update has to be distributed all across the web.
>
> **[1:18](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=78)** Anyway, this DNS lookup is done for each unique hostname.
>
> **[1:23](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=83)** So if the site you're requesting is using externally hosted fonts, or JavaScript libraries, or images, or videos or other services, this DNS lookup happens for each of those different services.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=96)** Anytime there's a new domain name, a new DNS lookup have to take effect.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=101)** This is the first major performance bottleneck.
>
> **[1:44](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=104)** To do away with some of this performance overhead, the domain name to IP address association will probably be cached at numerous different steps, your ISP will cached as information, it will also likely be cached in your router and on your computer.
>
> **[2:00](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=120)** That way when you send a request to the same domain you requested before, instead of having to go through the whole DNS lookup again, we're just pulling a cache from somewhere closer to the computer, but that also means if the DNS has changed in the meantime, you'll get an incorrect address pointing and things won't work as expected.
>
> **[2:18](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=138)** Once the IP address is established, the browser and server now perform what's called a TCP handshake, where they exchange identity keys and other information to establish a temporary connection and working relationship.
>
> **[2:31](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=151)** It is quite literally, hello, I am browser.
>
> **[2:34](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=154)** Hi, I'm server.
>
> **[2:36](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=156)** Hi server, I have a request.
>
> **[2:38](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=158)** Okay, go ahead browser I am ready to serve.
>
> **[2:41](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=161)** This is also where the type of connection is determined this is there's a regular HTTP connection or is it an encrypted HTTPS connection?
>
> **[2:50](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=170)** If the latter, encryption keys are exchanged and if both the browser and the server support it, the transaction is updated from HTTP 1.1 to HTTP two, which provides substantial performance enhancements, We now have a connection and everything is ready to go.
>
> **[3:07](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=187)** At this point, the browser sends an HTTP GET request for the resource it's looking for.
>
> **[3:13](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=193)** This initial GET request will be for whatever the default file on the server location is, typically index.html or index.php or index.js or something similar to that.
>
> **[3:24](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=204)** The time it takes for the browser to finally receive the first byte of the actual page it's looking for, is measured in time to first byte or TTFB, the first true performance measurement.
>
> **[3:38](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=218)** The first piece of data called the packet that the browser receives is always 14 kilobytes, then the packet size doubles with every new transfer.
>
> **[3:48](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=228)** That means if you want something to happen right away, you need to cram it into those first 14 kilobytes.
>
> **[3:55](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=235)** The browser now gets a file an HTML document, and it starts reading it from top to bottom and then parsing that data.
>
> **[4:02](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=242)** This means the HTML is turned into a DOM tree, the CSS is turned into a CSSOM tree and object model for the CSS of the page, which makes it possible for the browser to render the CSS for JavaScript to interact with it.
>
> **[4:15](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=255)** And ask the document is parsed, the browser also loads in any external assets as they are encountered.
>
> **[4:22](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=262)** That means anytime it encounters a new CSS file, or reference to anything else, it'll send a new request, the server responds by sending the request back, then it gets placed into the system, and the browser starts rendering that as well.
>
> **[4:35](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=275)** In the case of JavaScript, though, the browser stops everything else and waits for the file to be fully downloaded.
>
> **[4:42](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=282)** Why? Because there's a good chance of JavaScript wants to make changes to either the DOM or the CSSOM or both.
>
> **[4:50](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=290)** This is what's known as render blocking, whatever rendering was happening, stops and is literally blocked for as long as the browser is waiting for the JavaScript to be fully loaded and then fully executed.
>
> **[5:01](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=301)** Once all of this parsing is done, the rendering can begin in earnest and here the browser combines the DOM and CSSOM to style, layout, paint and composite the document in the viewport.
>
> **[5:14](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=314)** This is the process that actually creates what you see in the browser.
>
> **[5:18](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=318)** The metric time to first Contentful paint refers to how long it takes for all of this to happen and this step to start taking place, as you can see there is a lot going on behind the scenes when a website or app is loaded into the browser.
>
> **[5:34](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=334)** And this breakdown is a severely simplified version of true events.
>
> **[5:38](https://www.linkedin.com/learning/developing-for-web-performance/how-browsers-render-content?u=76281980&t=338)** What's important for our purposes is to remember what's actually happening, that way we can identify bottlenecks and add performance enhancements to get past them as quickly as possible.

> [!info]- Semantic Content
>
> **Env Vars:** dns (6), http (4), css (4), isp (3), dom (3)
> **Code Keywords:** let (1), case, (1), for. (1), for, (1), else, (1)
> **Definitions:** is a  (2), known as (1), refers to (1)
> **File Paths:** index.html (1), index.php (1), index.js (1)
> **URLs:** [site.com](https://site.com) (3)
> **CLI Commands:** php (1), make (1)
> **API Endpoints:** get  (2)
> **Versions:** 1.1 (1)

#### HTTP/2 and multiplexing
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=0)** - [Instructor] Browsers and servers use the HTTP protocol to talk to each other, and send and receive files and data.
>
> **[0:07](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=7)** In fact, every interaction happening between the browser and the server is an HTTP transaction over this protocol.
>
> **[0:14](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=14)** When you interact with content on the web today, you're using one of two different versions of the HTTP protocol, either the old HTTP/1.1 or the more modern HTTP/2.
>
> **[0:25](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=25)** Which protocol version is in use has a significant impact on the performance of the site.
>
> **[0:30](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=30)** Let me explain.
>
> **[0:31](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=31)** In HTTP/1.1, all files requested by the browser are loaded synchronously, one after the other.
>
> **[0:38](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=38)** So a typical HTML page with two style sheets, a couple of images, and some JavaScript would require the browser to first load the HTML document, then the CSS files, then the JavaScript files, and finally the image files one after the other.
>
> **[0:53](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=53)** This is slow, inefficient, and a recipe for terrible performance.
>
> **[0:59](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=59)** To work around this obvious issue, browsers cheat by opening up to six parallel connections to the server to pull down data.
>
> **[1:07](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=67)** However, this creates what's known as head of line blocking, where the first file, the HTML file, holds back the rest of the files from downloading.
>
> **[1:17](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=77)** It also puts enormous strain on the internet connection and the infrastructure, both the browser and the server, because you're now operating with six connections instead of one single connection.
>
> **[1:27](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=87)** In HTTP/2, we have what's known as multiplexing.
>
> **[1:31](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=91)** The browser can download many separate files at the same time over one connection, and each download is independent of the others.
>
> **[1:39](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=99)** That means with HTTP/2, the browser can start downloading a new asset as soon as it's encountered, and the whole process happens significantly faster.
>
> **[1:49](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=109)** Now, for HTTP to work, a few key conditions need to be met.
>
> **[1:53](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=113)** Number one, the server must support HTTP/2.
>
> **[1:56](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=116)** Now most servers do, but it's worth checking.
>
> **[1:59](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=119)** Number two, the browser must also support HTTP/2.
>
> **[2:03](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=123)** All modern browsers do, but again, it's worth checking if you're working with really old infrastructure.
>
> **[2:08](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=128)** And number three, the connection must be encrypted over HTTPS.
>
> **[2:13](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=133)** If any of these conditions are not met, the connection automatically falls back to HTTP/1.1.
>
> **[2:20](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=140)** So bottom line, for instant performance improvements with minimal work, get an SSL certificate for your domain.
>
> **[2:27](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=147)** They're available for free from services like Let's Encrypt and ensure your server supports HTTP/2.
>
> **[2:33](https://www.linkedin.com/learning/developing-for-web-performance/http-2-and-multiplexing?u=76281980&t=153)** As a bonus, your site traffic is encrypted out of the gate, which means safer browsing for your visitors and higher ranking on Google and everywhere else.

> [!info]- Semantic Content
>
> **Env Vars:** http (13), html (3), css (1), https (1), ssl (1)
> **Code Keywords:** let (2), require (1), else. (1)
> **Versions:** 1.1 (3)
> **Definitions:** known as (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### Bottlenecks
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=0)** - [Instructor] Knowing where performance bottlenecks appear in the pipeline between your service and the visitor's browser is key to performance optimization, so let's map them out.
>
> **[0:08](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=8)** Keep in mind here, this is going to be different from site to site and service to service.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=12)** You need to investigate your particular circumstances to identify which bottlenecks cause performance issues for you.
>
> **[0:18](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=18)** Starting all the way at the source, the server itself can contribute to poor performance.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=23)** How fast the server processor is, how much memory it has, what types of storage it uses, what else is happening on the server if it's a shared server... All of these things can have a significant performance impact, especially on sites with a lot of traffic.
>
> **[0:36](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=36)** The server connection and bandwidth also has an impact on performance.
>
> **[0:40](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=40)** Slower connections or congested shared connections lead to poor performance.
>
> **[0:45](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=45)** To address server-based performance issues, make sure you scale your server to the traffic you expect to get, explore dynamic cloud solutions that open up extra servers when necessary, and make sure the server has enough bandwidth and capability to handle your expected traffic.
>
> **[1:01](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=61)** On the code end, you can also optimize what you store on the server for best performance by compressing all your files as much as possible and reducing the number of HTTP requests sent to the server initially.
>
> **[1:12](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=72)** For high traffic sites and sites with a global audience, another best practice is to use a CDN, a content delivery network, to deliver files to users.
>
> **[1:21](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=81)** Here, the files are cached on multiple servers, and the user is served from whatever server is closest to and fastest for them.
>
> **[1:29](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=89)** The next bottleneck is the connection made between the browser and the servers hosting the files necessary to render the page.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=96)** For each of these connections, that whole DNS and TCP handshake loop needs to take place, which slows down the whole process.
>
> **[1:44](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=104)** To address these connection issues, you can tell the browser to do a DNS prefetch and pre-connect to servers you know will eventually be connected with.
>
> **[1:53](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=113)** You can preload content immediately, rather than wait for the browser to find out it needs it.
>
> **[1:58](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=118)** And you can even tell the server to use server push to automatically push files to the browser before the request is even made.
>
> **[2:05](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=125)** You can also consider pre-caching assets you know the user will need in the future, so the files are already in the cache of the browser by the time the user requests them.
>
> **[2:14](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=134)** Speaking of files, how many files are downloaded and in what order those files are downloaded has an impact on performance, but not always in the way you'd expect.
>
> **[2:24](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=144)** In the days of HTTP1, an obvious step to improving performance wants to reduce the number of files requested from the server as much as possible.
>
> **[2:32](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=152)** That's because of those six open connections and the synchronous loading and the head of line blocking and all that.
>
> **[2:38](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=158)** With HTTP2 and multiplexing, none of this is an issue anymore, and this loading of JS and CSS bundles is no longer a best practice because the browser can and will download multiple files simultaneously.
>
> **[2:52](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=172)** As a result, it may be a lot faster to serve up CSS and JavaScript in several smaller modular files than one big bundle.
>
> **[3:01](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=181)** This more modern approach goes against common doctrine for both CSS and JavaScript and requires working against the standard features and code bundlers, but it is slowly gaining traction because of the obvious performance benefits.
>
> **[3:15](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=195)** Additionally, there's the question of when the files are requested and in what order?
>
> **[3:20](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=200)** Using Async and defer when loading JavaScript and loading critical CSS and then deferring the rest of the CSS can greatly enhance the perceived performance of a site.
>
> **[3:31](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=211)** Now, this level of optimization requires careful analysis and testing, so we'll talk a lot about it later in the course.
>
> **[3:37](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=217)** All of this said, by far the biggest bottleneck for any modern site or service is images.
>
> **[3:44](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=224)** The more images, the more data needs to be transferred, the worst the performance gets.
>
> **[3:49](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=229)** There are a lot of things you can do to improve image performance: optimizing images to reduce their file size, using responsive images markup, lazy loading images so they're only loaded when the browser actually needs them, and most obviously, but hardly ever talked about, using less images or not using images at all.
>
> **[4:07](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=247)** We'll talk about all of that later in the course as well because it's such a huge and important topic for performance optimization.
>
> **[4:14](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=254)** On the topic of optimization, all files, from HTML to CSS to JavaScript, and images and everything else can and should be compressed and optimized as much as possible to make the physical data transfer as small as possible.
>
> **[4:27](https://www.linkedin.com/learning/developing-for-web-performance/bottlenecks?u=76281980&t=267)** So, yeah, there are many bottlenecks in this transaction, which means there are many opportunities for performance optimization.

> [!info]- Semantic Content
>
> **Env Vars:** css (6), dns (2), http (1), cdn (1), tcp (1)
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** let (1), async (1)
> **Cross-References:** later in (2)
> **Best Practices:** best practice (2)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Caching
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=0)** - [Instructor] A tried and true method for performance optimization is caching or storing of assets.
>
> **[0:05](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=5)** This can be done at three main levels in the transaction between the browser and the server.
>
> **[0:10](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=10)** On the server, on the CDN or in the browser itself.
>
> **[0:14](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=14)** Your caching strategy will depend on how your site or service works, and how the infrastructure of your host or CDN works.
>
> **[0:20](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=20)** Here are the basics for all three of these levels.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=23)** If you're running a site or service relying on server-side rendering, meaning each page or view is generated on the fly by the server when it is requested, caching may provide a huge performance boost.
>
> **[0:34](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=34)** This scenario includes pretty much all established content management systems like WordPress, Drupal, Joomla!
>
> **[0:40](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=40)** Magento and so on.
>
> **[0:42](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=42)** By enabling caching, the server no longer has to render the page every time the page is requested.
>
> **[0:48](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=48)** Instead when the page is rendered, a snapshot of that page is created and then stored in the server cache.
>
> **[0:54](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=54)** The next time a visitor then comes to the site, there'll be handed at this stored cached snapshot instead of a freshly rendered page.
>
> **[1:02](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=62)** That way the server doesn't have to rerender the page for every single visitor.
>
> **[1:05](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=65)** This by the way is why so-called static site generators have become so popular in the web dev community.
>
> **[1:11](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=71)** They produce pre-rendered cacheable static pages out of the box, and bypass the entire CMS service side rendering problem.
>
> **[1:19](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=79)** The challenge with this type of caching for these types of services is they often have dynamic features like common sections.
>
> **[1:25](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=85)** So every time a new comment is added, the cache needs to be cleared, and then the page has to be regenerated.
>
> **[1:31](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=91)** Even so, caching should be enabled for all sites relying on server-side rendering because performance benefits are so significant.
>
> **[1:40](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=100)** The next step is CDN caching.
>
> **[1:43](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=103)** CDNs are effectively external caching services for sites.
>
> **[1:47](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=107)** In their most basic configuration, they will serve cast versions of a site or service to the viewer, but CDNs can also do a lot more including what's known as edge computing.
>
> **[1:58](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=118)** Here, the rendering of a site is done by the CDN at the point of contact with the visitor.
>
> **[2:04](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=124)** So instead of the server rendering the page and delivering cache snapshot to the CDN, the CDN renders the page when requested and then caches it itself.
>
> **[2:13](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=133)** This edge approach works well with modern static site generators like Gatsby and all JavaScript based site generators and frameworks because they serve up static assets by default, and are built to work in this modern web architecture.
>
> **[2:27](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=147)** Once that connection is made between the server and the CDN of the browser, and all files are being sent to the browser, we get to the last caching step, storing assets in the browser for future use.
>
> **[2:38](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=158)** There are two main things we can do here.
>
> **[2:40](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=160)** One, store existing assets.
>
> **[2:42](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=162)** So if the visitor returns to the site it already has all the information cached in the browser and two, push files to the browser early so by the time the browser requests the file, the files that are already sitting in the cache.
>
> **[2:55](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=175)** All browsers do some level of caching automatically.
>
> **[2:58](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=178)** That's why you find yourself needing to refresh your browser multiple times or even go to incognito mode or clear the cache when you're developing a site to see the most recent changes.
>
> **[3:07](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=187)** The browser will always cache CSS and JavaScript and image files unless explicitly told not to.
>
> **[3:13](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=193)** And we can then instruct the browser on exactly how we want to handle caching of our assets.
>
> **[3:18](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=198)** For assets that are unlikely to change such as main style sheets, JavaScript, and other images, long caches makes sense.
>
> **[3:25](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=205)** For assets that are likely to change over time, short cache durations, or no cashing at all may make more sense.
>
> **[3:32](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=212)** To ensure new and updated assets always make it to the visitor.
>
> **[3:36](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=216)** We can use cache busting strategies like appending automatic hashes to file names or something else.
>
> **[3:42](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=222)** Or we can rely on the server itself to document the file name on file date for each file, and then do the caching automatically.
>
> **[3:51](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=231)** There is one more benefits to caching that is rarely talked about but it's really important.
>
> **[3:56](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=236)** Thanks to multiplexing.
>
> **[3:57](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=237)** You can now split up CSS and JavaScript files into smaller modules.
>
> **[4:01](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=241)** And that means when you update something in CSS or JavaScript, instead of having to recache an entire style sheet for an entire site, you're just recaching the module that has that update.
>
> **[4:12](https://www.linkedin.com/learning/developing-for-web-performance/caching?u=76281980&t=252)** That goes for CSS and JavaScript and takes full advantage of all this caching that's happening at every step in the process.

> [!info]- Semantic Content
>
> **Env Vars:** cdn (7), css (4), cms (1)
> **Code Keywords:** static (4), default, (1), else. (1), module (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### The PRPL pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=0)** - [Instructor] There's a useful mnemonic device you can use to remember how to achieve the best possible performance for your website or application.
>
> **[0:07](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=7)** PRPL, or P-R-P-L, referring to the PRPL pattern.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=12)** This is an acronym that stands for push or preload the most important resources, render the initial route as soon as possible, pre-cache remaining assets, and lazy load other routes and non-critical assets.
>
> **[0:27](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=27)** This pattern has become the industry standard benchmark for web performance for two main reasons.
>
> **[0:32](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=32)** It was developed by the leading industry experts on performance and it just makes sense.
>
> **[0:38](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=38)** If we push or preload important resources to the browser using server push for the initial load and service workers in the next round, the application will run faster.
>
> **[0:48](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=48)** If we render the initial route as soon as possible by serving the browser with critical CSS and JavaScript, the perceived performance of the application will be improved.
>
> **[0:58](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=58)** If we pre-cache remaining assets so they are available when the browser needs them, the application performance will be dramatically improved.
>
> **[1:05](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=65)** And finally, if we lazy load all non-critical assets so they only load when they are actually needed, we reduce the time to initial load and save the visitor from wasting their bandwidth on assets they will never use.
>
> **[1:19](https://www.linkedin.com/learning/developing-for-web-performance/the-prpl-pattern?u=76281980&t=79)** As you make your way through this course, keep the PRPL pattern in mind because almost everything that we're going to cover fits into one of these steps, push our preload, render, pre-cache, and lazy load.

> [!info]- Semantic Content
>
> **Env Vars:** prpl (3), css (1)
> **Definitions:** is an  (1), stands for (1)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 3. Creating a Performance Budget

#### What is a performance budget?
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=0)** - [Instructor] The number one metric that determines the performance of your site or app is its weight.
>
> **[0:05](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=5)** How many total bytes of data need to travel from the internet to the browser for things to load and work properly.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=12)** Reduce the page weight, improve performance.
>
> **[0:15](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=15)** A performance budget is a tool you can use to define limits for each metric that may impact performance of the site.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=23)** A performance budget may include limits on the total page weight, total image weight, number of HTTP requests, maximum number of fonts or images or external assets, et cetera.
>
> **[0:34](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=34)** The purpose of a performance budget is to give everyone who works on a project a defined goal to work towards.
>
> **[0:40](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=40)** Stay within the budget and everything is fine.
>
> **[0:43](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=43)** Go over the budget and decisions need to be made.
>
> **[0:45](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=45)** Performance budgets turn real-life user experience into a usable metric even before a single user has touched the site you're building.
>
> **[0:54](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=54)** It gives you a metric to measure every new feature against and a tool to use when hard decisions need to be made.
>
> **[1:00](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=60)** It's called a performance budget because it works the same way any the other budget works.
>
> **[1:05](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=65)** Let's say you set the initial load maximum weight of a site to 250 kilobytes.
>
> **[1:11](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=71)** That means the user should have something to see and interact with in the first 250 kilobytes that are loaded.
>
> **[1:18](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=78)** If you add an image and the load goes over 250 kilobytes, you either have to optimize this image further to bring the total down or remove some other feature like a web font or remove the image altogether.
>
> **[1:31](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=91)** The one thing you can't do because you have a performance budget is go over that budget.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=96)** Performance budgets are quickly becoming the industry standard for during development for performance and for this reason, we now have tools that we can integrate into our build processes.
>
> **[1:45](https://www.linkedin.com/learning/developing-for-web-performance/what-is-a-performance-budget?u=76281980&t=105)** They include things like Webpack's performance options, which you can get directly inside Webpack and Lighthouse's light wallet, which gives you the ability to test your builds against the performance budget at any time to get flags anytime your images are too big or your JavaScript is too big or your CSS is too big or anything else.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), else. (1)
> **Env Vars:** http (1), css (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating a realistic performance budget
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=0)** - Maybe the most important part of creating a performance budget is making it realistic and data driven.
>
> **[0:06](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=6)** A performance budget that is too light will never be taken seriously.
>
> **[0:09](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=9)** And a performance budget that is not based on real data and analysis has little practical value.
>
> **[0:15](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=15)** To get started on a performance budget of your own here are some best practice metrics recommended by industry leaders, including researchers at Google.
>
> **[0:22](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=22)** Make sure that your site meets a speed index under three seconds.
>
> **[0:27](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=27)** That time to interactive is under five seconds, that the largest contentful paint is under one second, that the max potential first input delay is under 130 microseconds, that the maximum size of the Gzipped JavaScript bundle is under 170k, that the total bundle size is under 250k and that all of this happens on a low powered feature phone on 3G.
>
> **[0:53](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=53)** Now these performance budget metrics are severe and really difficult to hit.
>
> **[0:58](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=58)** They're also the metrics being used by tools like Lighthouse to test for performance.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=64)** So how do you go about creating a realistic performance budget for your own site or your own app?
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=70)** Here's some tips.
>
> **[1:11](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=71)** When developing performance budget it's common to create different budgets for different scenarios and serve different solutions to different users.
>
> **[1:19](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=79)** This all centers around getting the sites to the user as fast as possible and not wasting any of the user's bandwidth or data caps.
>
> **[1:26](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=86)** In practical terms creating a performance budget typically starts by doing a performance audits of your own project and also any relevant competitors.
>
> **[1:35](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=95)** Your goal will always be to beat your competitor on performance.
>
> **[1:39](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=99)** Next, set some reasonable goals that you can meet with some work.
>
> **[1:43](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=103)** This could be bringing the speed index down under three seconds or reducing the total page size or hitting largest contentful paint under one second or a combination of some or all of these features.
>
> **[1:55](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=115)** Then test the production version of your projects against these metrics to see where you currently stand.
>
> **[2:02](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=122)** And when you do that, make sure you use one of these third party testing providers because then we can test it from different locations in the world using different server configurations and browser configurations and everything else.
>
> **[2:12](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=132)** The answer to these tests will almost always be way over budget at first.
>
> **[2:18](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=138)** In that case, do a closer inspection to find out where the bottlenecks and performance hogs are so that you can deal with them.
>
> **[2:24](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=144)** Once you have relevant competitor information, baseline performance metrics for your own project and the recommendations I introduced at the top of this movie, you can map out your own performance budget and start working with it.
>
> **[2:37](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=157)** One important thing to keep in mind as you start this work, performance budgets are individual to each project and there is no one size fits all here.
>
> **[2:46](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=166)** Your project may require a higher budget than what is recommended, and that's fine as long as you don't use that higher budget as an excuse to waste the user's time and data cap.
>
> **[2:57](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=177)** Also remember that performance budgets can change over time.
>
> **[3:01](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=181)** As your project evolves new features may need to be considered or new performance tools or best practices may come into play to help you drag that budget down.
>
> **[3:11](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=191)** If, and when you decide to change the performance budget try to always change it for the better.
>
> **[3:16](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=196)** Bring your metrics down to make the site more performance, any increase in a performance budget means increased load time and cost for the end users.
>
> **[3:24](https://www.linkedin.com/learning/developing-for-web-performance/creating-a-realistic-performance-budget?u=76281980&t=204)** So any increase requires a very good reason.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** else. (1), case, (1), require (1), if, (1)
> **Best Practices:** recommended (2), best practice (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - maybe (1)

#### Common culprits and performance hogs
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=0)** - [Instructor] Measuring your project up against the performance budget for the first time it's normal to discover you are way over budget and there's a lot of things you can do to improve the performance.
>
> **[0:09](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=9)** There are typically three main areas which stand out as significant performance culprits, images, JavaScript bundles and external web fonts.
>
> **[0:18](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=18)** And we can use Lighthouse for a performance evaluation and then get a report that tells us about these obvious issues so we can deal with them immediately.
>
> **[0:25](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=25)** Let me show you an example of this.
>
> **[0:27](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=27)** So I have an incognito version of Chrome here, I'll paste in the URL to a domain that has a site on it.
>
> **[0:34](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=34)** You'll notice this one is HTTP not HTTPS meaning I'm getting an HTTP 1.1 request here, which does not have multiplexing.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=44)** Now loading the site, it appears to be running pretty fast.
>
> **[0:47](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=47)** So let's see what happens if I go and run Lighthouse.
>
> **[0:50](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=50)** So I'll just run to generate a report, send the requests, do a bunch of analysis and then some data comes back, and what we get is a performance score of 93 which is pretty good for the site.
>
> **[1:05](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=65)** You'll see that the green is between 90 and 100.
>
> **[1:09](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=69)** Scrolling down, there are still some opportunities for improvement that are being flagged by Lighthouse, properly sized images, meaning we are serving large images when we should actually be serving smaller ones.
>
> **[1:20](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=80)** If we open this, you can see there are some suggestions on how much we could save by just reducing the image sizes.
>
> **[1:26](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=86)** We'll talk about that later on in the chapter on image optimization.
>
> **[1:29](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=89)** There's also eliminate render blocking resources.
>
> **[1:33](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=93)** This is when we are using files that are stopping rendering from happening that are unnecessarily large, in this case, it's the main style sheet.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=101)** So the style sheet is not as optimal as it can be.
>
> **[1:45](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=105)** To solve this we can do what's known as critical CSS rendering where we place the important CSS that needs to be rendered in the top of the page, inside the HTML documents, and then we defer the rest of the CSS for later loading we'll also talk about that later on in the course.
>
> **[2:00](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=120)** Then we have serve images in next-gen formats I mean swapping from existing formats to something like WebP, and we have use HTTP/2 which is adding an HTTPS certificate and then taking advantage of multiplexing to serve the falls.
>
> **[2:18](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=138)** So this is useful but to truly see what is actually going on, we need to dig one step further and that's using the network monitor.
>
> **[2:26](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=146)** So here I'll check disabled cache and reload the page so you can see the waterfall being built.
>
> **[2:31](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=151)** Now, because we are now getting a site through HTTP/1, it means that we are not getting multiplexing which is why this waterfall is stretched so much as it is.
>
> **[2:42](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=162)** This by the way is also where you see that whole six connections opening thing happening that some of the files are being deferred in loading.
>
> **[2:49](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=169)** So, obviously here we have six connections and then we scroll down then we have six more connections and so on.
>
> **[2:56](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=176)** This waterfall will show me information about all the things that are happening between the server and the browser.
>
> **[3:01](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=181)** So if I hover over this first item here which is the HTML document itself, we see some of the things we've talked about previous in the course.
>
> **[3:08](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=188)** So, we have the DNS lookup, how much time that took.
>
> **[3:12](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=192)** Then we have the initial connection this is the TCP handshake and everything else, that's just a server on the browser talking to each other for the first time.
>
> **[3:19](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=199)** Then the request is sent, then we wait.
>
> **[3:21](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=201)** So time to first byte for this file is 149 milliseconds and then finally the download happens.
>
> **[3:28](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=208)** So the green bar here, is when nothing is happening.
>
> **[3:31](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=211)** This is the time it takes from the request to be sent all the way to the server and then the data to come all the way back to the browser again.
>
> **[3:38](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=218)** And if we look at this breakdown we see there's a lot of green meaning the server's really slow.
>
> **[3:44](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=224)** That might just be because the server is far away, or it might be because the service actually slow.
>
> **[3:49](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=229)** And obvious solution to this would be to introduce a CDN into the mix because a CDN would always have a shorter time to first byte then whatever server we're using here.
>
> **[3:59](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=239)** So this immediately tells us, "Hey there are opportunities for performance improvements."
>
> **[4:04](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=244)** The other thing we see is there are a ton of assets being loaded here.
>
> **[4:06](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=246)** You can see there's all these images flaxseed oil and iron and everything else.
>
> **[4:11](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=251)** and if I go scroll on this page, eventually we'll get to those images, but they're really far down on the page.
>
> **[4:18](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=258)** So all of these images should be deferred in the loading as much as possible, and ideally they shouldn't actually be loaded into the browser at all, unless I scroll down to them because we're wasting resources.
>
> **[4:29](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=269)** For that we can use lazy loading and that lazy loading also applies to both CSS and JavaScript.
>
> **[4:35](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=275)** We can intentionally not load content into the browser, and not waste the user's data if we don't think the user will get to it and then just trigger it once the user scrolls close to that content.
>
> **[4:46](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=286)** That way we're not loading all of this stuff into the browser that you see here, unless it's actually necessary.
>
> **[4:53](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=293)** Seeing a waterfall like this makes it immediately apparent why performance optimizations like deferring scripts, and lazy loading images and putting in place proper font loading strategies, make a huge difference.
>
> **[5:04](https://www.linkedin.com/learning/developing-for-web-performance/common-culprits-and-performance-hogs?u=76281980&t=304)** And you also see why adding something like a CDN into your process, gives you immediate performance enhancements.

> [!info]- Semantic Content
>
> **Env Vars:** http (4), css (4), cdn (3), https (2), html (2)
> **Code Keywords:** let (2), this. (1), this, (1), case, (1), else, (1)
> **Definitions:** is a  (1), known as (1), means that (1)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** make (1)
> **Versions:** 1.1 (1)
> **Speakers:** - [instructor] (1)


### 4. Optimizing Images

#### Images are the leading cause of the slow web
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=0)** - [Instructor] I cannot stress this enough.
>
> **[0:02](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=2)** Images are the leading cause of the slow web.
>
> **[0:05](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=5)** According to stats gathered by the HTTP Archive, images contribute twice as much to the weight of the average webpage as the next culprit, which is JavaScript.
>
> **[0:15](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=15)** To be direct, the stats on images and their impact on the web are quite damning, as you can see both in the 2020 HTTP Archive Web Almanac and in their ongoing tracking of page weight.
>
> **[0:27](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=27)** Why do images have such a huge impact on page weight and performance?
>
> **[0:31](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=31)** The answer is pretty obvious in this example site here.
>
> **[0:34](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=34)** The web is a visual medium and big, high resolution images spanning the full width of the viewport make for big, high resolution visual appeal.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=44)** Images also play a significant role in successful communication, and one of the huge benefits of the web is how it enables us to share images with other people.
>
> **[0:53](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=53)** We have two conflicting needs here.
>
> **[0:55](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=55)** We want to post high quality images online, but also want our websites and apps to be performant, and images are the main reason they are not.
>
> **[1:05](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=65)** So how do we solve this conundrum?
>
> **[1:07](https://www.linkedin.com/learning/developing-for-web-performance/images-are-the-leading-cause-of-the-slow-web?u=76281980&t=67)** The answer is with a multi-pronged approach, ranging from compression to careful selection of image formats, to how we mark up and load images in our applications.

> [!info]- Semantic Content
>
> **Env Vars:** http (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Image quality matters
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=0)** - [Instructor] Before we look at the technical aspects of optimizing images for the web, let me show you something I found very surprising when I first learned it.
>
> **[0:07](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=7)** The quality of the images you see in web applications make a significant impact on performance.
>
> **[0:13](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=13)** And when I say quality here, I'm not talking about the resolution fidelity of the image.
>
> **[0:18](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=18)** I'm talking about actual photographic quality.
>
> **[0:21](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=21)** You see, image performance is all about how much data is contained within an image and how easy it is to compress that data.
>
> **[0:28](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=28)** The more complex the image, the larger the data set necessary to display it and the more difficult it is to compress.
>
> **[0:35](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=35)** This idea requires a practical example.
>
> **[0:37](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=37)** So I took my camera and I went and took a couple of pictures of some toys that my kid was playing with.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=44)** So here is one picture.
>
> **[0:45](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=45)** This is taken with an aperture value of f/16.
>
> **[0:49](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=49)** So there's quite a lot of depth of field in the image.
>
> **[0:52](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=52)** And this is another image.
>
> **[0:54](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=54)** It's the exact same camera settings.
>
> **[0:56](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=56)** The only thing that's changed is that I reduced the aperture.
>
> **[0:59](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=59)** So I brought the aperture down to 1.4.
>
> **[1:03](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=63)** The difference between these two images, it's very obvious when you see them side by side.
>
> **[1:07](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=67)** In one image there's a lot of depth of field, so you can see a lot of the details clearly.
>
> **[1:12](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=72)** While on the other image, there's very little depth of field or shallow depth of field.
>
> **[1:16](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=76)** And as a result, the characters in the front are in focus but everything else is being blurred.
>
> **[1:20](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=80)** For performance, this difference is significant.
>
> **[1:24](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=84)** Let me show you what I mean.
>
> **[1:25](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=85)** These are the files you're looking at in Photoshop right now.
>
> **[1:28](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=88)** So hard is the image that has a deep depth of field.
>
> **[1:32](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=92)** Soft is the one that has very little items in focus.
>
> **[1:35](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=95)** And right off my camera, you can already see there's a size difference between these two files.
>
> **[1:40](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=100)** So the one with a lot of detail has 1100 kilobytes.
>
> **[1:45](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=105)** The one with the less detail has 900 kilobytes.
>
> **[1:47](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=107)** Then if we go into Photoshop and just say export as and then go and mess around with the settings here, we can grab the image, which in this case is nine megabytes.
>
> **[1:58](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=118)** And then change the quality of the image here by like pulling it down to maybe 75%.
>
> **[2:04](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=124)** And as a result over here, you see the size of the file is automatically reduced to 1.8 megabytes.
>
> **[2:10](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=130)** If you wonder if that reduces the quality of the image, you can go and look at it.
>
> **[2:14](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=134)** So we'll zoom in to a hundred percent here and then you can see them side by side.
>
> **[2:19](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=139)** This image over here, this one is 1.8 megabytes.
>
> **[2:23](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=143)** This one is nine megabytes.
>
> **[2:25](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=145)** Can you see the difference?
>
> **[2:26](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=146)** I can't see the difference.
>
> **[2:28](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=148)** There's almost no difference here, but there is a compression difference.
>
> **[2:31](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=151)** So the size difference is significant.
>
> **[2:34](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=154)** Now I've already done this to show you what's happening.
>
> **[2:36](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=156)** So here, I think I've reduced the quality to 85% for each of them.
>
> **[2:42](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=162)** And then we have the first hard image reduced in quality by Photoshop.
>
> **[2:47](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=167)** By compressing it using Photoshop, we got it down to 3.9 megabytes from 11 megabytes.
>
> **[2:52](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=172)** And with a soft image, we got it down from 9.9 megabytes to 2.5 megabytes.
>
> **[2:57](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=177)** So there's a huge data saving in just re-saving the file in Photoshop with slightly lower quality.
>
> **[3:03](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=183)** Then I took one more step.
>
> **[3:05](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=185)** There's a service called Squoosh that you can either use online or you can download into your development app and use in your build process that will try to compress your image files as much as possible.
>
> **[3:15](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=195)** This is drag and drop.
>
> **[3:16](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=196)** So if I take this image here, the soft Photoshop compressed version which is at 2.5 megabytes, and just dump it into Squoosh, then I can optimize it further.
>
> **[3:25](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=205)** And here again, you get a side-by-side so you can see what the difference is.
>
> **[3:30](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=210)** And right now the quality is set to 75 and look at this performance saving here, 87%.
>
> **[3:36](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=216)** So from 2.5 megabytes, it now says my file will be 335 kilobytes, which is an enormous difference.
>
> **[3:44](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=224)** And with Squoosh, I can then play around with the settings.
>
> **[3:47](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=227)** I can bring the quality way, way down to see what'll that look like.
>
> **[3:51](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=231)** I'm pretty sure it's going to look bad.
>
> **[3:53](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=233)** It is, this was too much, but you can play around with it and say like 75 is fine.
>
> **[3:59](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=239)** Like 75 is so little difference that it is negligible and no one will ever notice it.
>
> **[4:05](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=245)** Meaning instead of serving up 9.9 megabytes or 2.5 megabytes, I'm serving up 328 kilobytes.
>
> **[4:13](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=253)** But what I want to draw our attention to is the difference in the photos themselves.
>
> **[4:17](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=257)** The file with more detail will always be bigger.
>
> **[4:19](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=259)** So here we have 575 versus 328 for the exact same photo.
>
> **[4:24](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=264)** Again, the only difference here is the depth of field.
>
> **[4:28](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=268)** Shallow depth of field means better performance.
>
> **[4:32](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=272)** So the reason I said this has to do with image quality is for many types of photography including products, headshots, documentary, and others a shallower depth of field is preferred.
>
> **[4:44](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=284)** And a well-trained photographer will know instinctively to bring down that depth of field to improve the image.
>
> **[4:51](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=291)** This improvement then also has a meaningful performance improvement.
>
> **[4:55](https://www.linkedin.com/learning/developing-for-web-performance/image-quality-matters?u=76281980&t=295)** So in all honesty you can actually argue taking a photo class or hiring a professional photographer should be part of your web performance strategy.

> [!info]- Semantic Content
>
> **Versions:** 2.5 (4), 1.8 (2), 9.9 (2), 1.4 (1), 3.9 (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** drag and drop (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### The image scaling hack
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=0)** - [Narrator] If you're looking to shave every possible bit of data off your image files, I have a neat little hack for you.
>
> **[0:06](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=6)** It turns out upscaling a photo by one hundred and fifteen percent on Photoshop, and some other advanced photo editors preserves image quality well enough that humans can't tell the difference even when looking at the images side-by-side.
>
> **[0:19](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=19)** In other words, if you know the max size of your image you can first downscale the image by eighty-seven percent to reduce complexity, and then upscale the results to one hundred and fifteen percent to get an image that's the same size but has significantly less complexity, without anyone noticing.
>
> **[0:37](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=37)** And with less complexity comes performance gains.
>
> **[0:41](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=41)** Let me show you what I mean.
>
> **[0:42](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=42)** So here we have that image I talked about in the previous movie, the one with a lot of, with very shallow depth of field that is already performing quite well.
>
> **[0:49](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=49)** Now this is a huge image.
>
> **[0:51](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=51)** You can see it's zoomed into twenty-five percent right now if I keep zooming here, this is at a hundred percent.
>
> **[0:56](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=56)** So this is an unreasonably large image for the web but I'm using it on purpose because it's a very large file.
>
> **[1:02](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=62)** So we can see the compression really well.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=64)** All right, what I want to do here to improve the performance of the image is go to image size and reduce the size of the image.
>
> **[1:11](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=71)** So I'll go with the percent, and reduce it to eighty-seven percent.
>
> **[1:16](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=76)** Now Photoshop will take away pixels and simplify the image to scale it down and reduce the complexity of the image and the process.
>
> **[1:24](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=84)** The downside is now the image is slightly smaller than it was before, So I'll go back to image again, image size, and then go one hundred and fifteen instead, one hundred and fifteen percent.
>
> **[1:35](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=95)** Like I said, in the beginning, if you upscale an image to one hundred and fifteen percent, no discernible quality is lost.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=101)** So that means I now have the same size image but the quality and the detail and the image is slightly reduced by Photoshop.
>
> **[1:49](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=109)** Now I can save this image using the same settings as before.
>
> **[1:52](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=112)** So I'll go to export, export as, I can go to quality and set it to eighty percent.
>
> **[2:00](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=120)** Let's see, eighty percent, export image out, and I want to place it inside the scaling folders, so, soft scale PS and save.
>
> **[2:13](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=133)** Then you can see here that the soft scale PS, the file, is one point seven megabytes, whereas the soft PS, so the one that was before the scaling was done is two point five.
>
> **[2:24](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=144)** Then I can go to squoosh, and upload this soft scale PS file to squoosh, set the same compression settings, so seventy-five percent.
>
> **[2:33](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=153)** Here, I get a file of three hundred and eighteen kilobytes that I can download and move over into my folder here.
>
> **[2:41](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=161)** And you can see here the squoosh difference is only, what is it, like fourteen kilobytes?
>
> **[2:46](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=166)** But, it's still a significant performance enhancement.
>
> **[2:49](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=169)** So like I said, if you want to squeeze as much performance as possible out of your images, a weird hack like this, reducing the size of each image by eight-seven percent, and then upscaling it by one hundred and fifteen percent, will actually impact the performance of the image as well.
>
> **[3:04](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=184)** And if you put these images side by side you will not be able to tell the difference because the difference is on a computer level it's not on a human readable level.
>
> **[3:13](https://www.linkedin.com/learning/developing-for-web-performance/the-image-scaling-hack?u=76281980&t=193)** So there's performance enhancement in pretty much everything you do with images including how you scale them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), export, (1), this, (1)
> **UI Navigation:** go to (3)
> **Definitions:** in other words (1), is a  (1), is an  (1)
> **Speakers:** - [narrator] (1)

#### Image format options
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=0)** - The image format or file type you choose for your images will have a direct impact on performance.
>
> **[0:05](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=5)** The web supports several different image formats and one of the key steps to optimizing your images for performance is choosing which format to use for which images and graphics.
>
> **[0:15](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=15)** On the web we generally use one of five formats JPEG, PNG, GIF, SVG, and webP so let's go through them see how they work and when we should use them.
>
> **[0:25](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=25)** The JPEG file format was created to optimize photos and other images with complex color gradients.
>
> **[0:31](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=31)** When saving a JPEG you can set the optimization level you want to achieve from lossless meaning no detail is lost to extremely lossy meaning your image will look a lot like a pin by numbers painting.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=44)** That's because the JPEG compression works by finding pixels or areas of pixels that look roughly the same and then redefining them as the same color.
>
> **[0:53](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=53)** The more compression you have the less complex the gradients will get.
>
> **[0:57](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=57)** In an application like Photoshop you can choose the optimization level on a scale from either one to 12, where one is extremely lossy and 12 is lossless or on a percentage scale between one which is extremely lossy and 100% where all details is preserved.
>
> **[1:12](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=72)** A general rule for photos is compression between eight and 10 is not noticeable for human eyes and in most cases for the web you can bring the compression all the way down to around 75% without losing any discernible detail.
>
> **[1:25](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=85)** Use JPEG anytime you have a photo or a graphic with complex color gradients and you can't use webP.
>
> **[1:32](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=92)** PNG is primarily a lossless bitmap image format for high quality computer generated images.
>
> **[1:39](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=99)** The more detail an image in a PNG has the larger the file will get because it's mapping out all the pixels within that image.
>
> **[1:46](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=106)** An important feature of PNG is unlike a JPEG a PNG can have a transparent alpha layer.
>
> **[1:53](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=113)** When you see a transparent image or graphic on the web it's usually a PNG.
>
> **[1:58](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=118)** So use PNG, anytime you have a computer generated graphic or an image with transparency and when there's a lot of detail you cannot lose.
>
> **[2:06](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=126)** PNG is not recommended for regular photos as the file size will generally be significantly larger than the equivalent JPEG or webP GIF is a 256 color graphic format supporting both images and animations.
>
> **[2:21](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=141)** Way way back in the beginning of the web GIFs were often used for simple graphics.
>
> **[2:26](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=146)** Then they fell out of favor for JPEG and PNG because they are better image formats.
>
> **[2:32](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=152)** And then finally GIFs made their triumphant return as animated GIFs in social media memes.
>
> **[2:38](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=158)** GIF images provide a very small file size due to their small color gamut but that comes at the cost of image quality.
>
> **[2:47](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=167)** GIF images have almost no colored depth they only have 256 colors to work with that's usually why they're used for only tiny, tiny tiny graphics.
>
> **[2:55](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=175)** For this reasons, they are best used for very simple graphics.
>
> **[3:00](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=180)** Animated GIFs on the other hand can become very large very quickly because you are mapping out every single frame in the animation and these create huge performance issues so much in fact, that social media companies when you say you're sharing an animated GIF you're actually sharing a video.
>
> **[3:17](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=197)** Twitter for example, convert all animated GIFs that are uploaded into standard video files and then share those video files instead of the animated GIF.
>
> **[3:26](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=206)** In most cases, if you're considering using a GIF an SVG is a better option.
>
> **[3:31](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=211)** If you're considering an animated GIF a proper video is always preferred from a performance perspective.
>
> **[3:38](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=218)** SVG or Scalable Vector Graphics is a file format that's been around since the late 1990's but only really made its way onto the web in the late 2010s.
>
> **[3:48](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=228)** Unlike all the other formats which all describe pixels in some way SVG is a web native graphics format describing lines and curves and shapes and allowing the browser to paint the graphics in real time.
>
> **[4:00](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=240)** The major benefit of SVG is encapsulated in the name itself.
>
> **[4:04](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=244)** SVGs are scalable, meaning the graphic will look good at any size, all the way from tiny to extremely large.
>
> **[4:13](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=253)** The lines will always be clean because they're generated on the fly by the browser that makes them extremely versatile.
>
> **[4:20](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=260)** And because SVG is a markup language you can declare an SVG in code once and then style it using standard CSS and then reuse it as many times as you'd like in one document.
>
> **[4:32](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=272)** Use SVG anytime you have a computer generated graphic that may need to be scaled, that'd be a icon, a logo or a graph or any other graphic that needs to be responsive.
>
> **[4:42](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=282)** Finally, we have webP, this is a brand new lossless and lossy image format with transparency that was created specifically for the web.
>
> **[4:52](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=292)** It aims to be a replacement for JPEG and provides the same or better compression with the addition of transparency and faster rendering.
>
> **[5:00](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=300)** According to standardized testing webP lossless images are 26% smaller than PNGs while lossy images are up to 34% smaller than JPEG.
>
> **[5:11](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=311)** WebP is supported by all modern browsers but have zero support in older browsers so using them right now requires a fallback using an older image format.
>
> **[5:20](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=320)** This is typically done using the picture element and some CDNs will also automatically serve webP to browsers that can support it.
>
> **[5:27](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=327)** Use webP for images and computer graphics if you know your audience is using newer browsers.
>
> **[5:33](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=333)** If you need to support older browsers provide fallbacks to either JPEG or PNG.
>
> **[5:38](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=338)** Knowing all this what format should you use?
>
> **[5:42](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=342)** Well, it's simple with this list, for photos use webP with a JPEG fallback or if you can't use webP use JPEG.
>
> **[5:50](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=350)** For a complex computer graphics use either PNG or webP or JPEG.
>
> **[5:56](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=356)** Here's good idea to save all three and then see which one is smaller, for graphics with transparency use PNG or webP for scalable computer graphics icons, graphs or anything else that it's drawn with lines and shapes, use SVG and in all cases avoid animated GIFs if at all possible.
>
> **[6:16](https://www.linkedin.com/learning/developing-for-web-performance/image-format-options?u=76281980&t=376)** Use a video anytime you want any kind of animation that's encapsulated in image.

> [!info]- Semantic Content
>
> **Env Vars:** jpeg (14), png (12), svg (9), gif (8), css (1)
> **Code Identifiers:** webp (11)
> **Definitions:** is a  (6)
> **Code Keywords:** let (1), finally, (1)
> **Analogies:** for example (1), picture (1)
> **Best Practices:** general rule (1), recommended (1)
> **Speakers:** - the (1)

#### Manual image optimization
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=0)** - [Instructor] Whichever image format you choose, the performance of every single image can and should be improved with some manual image optimization.
>
> **[0:08](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=8)** First, decide on the maximum visible size the image will have in the layout.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=12)** Even so-called full-bleed images that span across the entire width of the viewport should have a maximum width because some people have extremely wide monitors, and it makes no sense to display a full-width image on them because it'll take up the entire viewport.
>
> **[0:28](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=28)** A good rule of thumb here is no image should ever be displayed wider than a full HD monitor, so 1,920 pixels.
>
> **[0:36](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=36)** This is already a huge image, and in almost every case it is, at the most, going to fill in the entire monitor.
>
> **[0:43](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=43)** But if you're going full-bleed, this will give you what you want, and you don't need to go any higher.
>
> **[0:49](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=49)** To avoid anyone complaining about the image stretching beyond 1,920 pixels if they have one of those giant monitors, make sure you also restrict the display width of that image to 1,920 pixels, and then center align it.
>
> **[1:02](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=62)** That way if the monitor is abnormally large, then the image will sit in the center, and you will get margins on the right and left-hand side.
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=70)** And, yes, I know someone will say, "But you should really serve up a 2X image too for high-resolution monitors."
>
> **[1:17](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=77)** That's a fair point if you are intentionally serving up high-resolution images and are trying to display high-resolution images.
>
> **[1:24](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=84)** But for most cases when you're working on the web, you're just showing an image.
>
> **[1:27](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=87)** And unless the user is seeing a high-resolution image versus a regular resolution image side by side, they will not be able to tell the difference.
>
> **[1:35](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=95)** So serve up 1,920-pixel images to the full width of the monitor.
>
> **[1:39](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=99)** And even if people are on a 4X monitor, it'll still look great, and they will only ever know if you then do a comparison with something else.
>
> **[1:47](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=107)** 1,920 pixels is fine for almost every circumstance.
>
> **[1:51](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=111)** And for reference, my current maximum width for all images in all projects is 1,200 pixels.
>
> **[1:58](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=118)** Anything bigger than that is too much of a performance hit in my opinion.
>
> **[2:02](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=122)** But that's my opinion.
>
> **[2:04](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=124)** It's entirely up to you.
>
> **[2:05](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=125)** My recommendation is never go over 1,920.
>
> **[2:09](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=129)** Once you've settled on a width for an image, scale your image to fit that size.
>
> **[2:13](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=133)** That means if your image is displayed in content and the maximum width is 800 pixels, save the image at 800 pixels.
>
> **[2:21](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=141)** There is no good reason to serve up an image that's larger than the displayed size because the displayed size is the displayed size.
>
> **[2:28](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=148)** And, yes, the same thing I previously said about 2X images applies here.
>
> **[2:32](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=152)** You can if you want to also serve up a 1,600-pixel image to give you the 2X resolution, but like I said, the only time people notice it is if you do a side-by-side comparison, so it might just be a waste of bits.
>
> **[2:45](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=165)** If you're using JPG or WebP, experiment with compression ratios.
>
> **[2:49](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=169)** For JPG, you can usually get away with a number around 75 to 80%.
>
> **[2:54](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=174)** And I always try to get as low as possible.
>
> **[2:57](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=177)** The main difference between 75% and 100% in terms of the image quality is the lower the compression ratio gets, the higher the number of artifacts you see in subtle gradients like a blue sky.
>
> **[3:10](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=190)** The good news is when you're doing compression in Photoshop or in Sqoosh or in some other tool, you can actually see the artifacts as you're previewing the compression, so you can quickly find that compression point that works for your specific image.
>
> **[3:23](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=203)** And if you've already scaled your image down to the size you're going to display it, you'll also notice that a lot of these artifacts will not really be noticeable at all.
>
> **[3:32](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=212)** Try to get this number as low as possible.
>
> **[3:34](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=214)** A good rule of thumb is somewhere around 75%, and you should usually be fine.
>
> **[3:39](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=219)** If you're using a PNG, make sure you only enable transparency if the image is actually transparent.
>
> **[3:45](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=225)** Otherwise, you're just wasting data for no good reason.
>
> **[3:48](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=228)** The same thing applies to WebP.
>
> **[3:50](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=230)** If you're using an SVG, make sure the SVG is as simple as possible by eliminating any anchor points or shapes or anything else you don't need.
>
> **[3:59](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=239)** It's a very good idea to run every SVG through some sort of SVG compressor, just to make sure that everything is as simple as possible.
>
> **[4:07](https://www.linkedin.com/learning/developing-for-web-performance/manual-image-optimization?u=76281980&t=247)** And finally, if you're working with a complex computer-generated graphic and you can't use an SVG, try saving it both as a WebP, as a JPG, and as a PNG, and then pick whichever file is the smallest after compression because depending on the graphic, you might get either one of these three being the best option.

> [!info]- Semantic Content
>
> **Env Vars:** svg (5), jpg (3), png (2)
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** else. (1), finally, (1)
> **Best Practices:** rule of thumb (2)
> **Speakers:** - [instructor] (1)

#### Automated image optimization
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=0)** - [Instructor] Photoshop and other image editing tools provide some level of compression.
>
> **[0:04](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=4)** But to fully optimize images for web performance, you need to run them through a tool dedicated to this purpose.
>
> **[0:11](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=11)** There are many such tools available.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=12)** And all of them can be plugged into your custom build process to automate image optimization according to your specifications.
>
> **[0:19](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=19)** The question then is, what tool to use?
>
> **[0:22](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=22)** Here are three options.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=23)** First, for industry standard image optimization, Imagemin is a good choice.
>
> **[0:29](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=29)** You can use it to build a custom optimization function in Node.js.
>
> **[0:32](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=32)** Use the CLI to optimize all images in a specified folder.
>
> **[0:37](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=37)** Or add automated image optimization into your preferred build process using gold or grunt or web pack or whatever it is you're using.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=44)** Out of the box, the Imagemin CLI and provides lossless compression for JPEG, PNGs, and GIFs.
>
> **[0:50](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=50)** If you want to, and you probably should you can change this by adding dedicated lossy compression for each of them using plug-ins.
>
> **[0:58](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=58)** You have Imagemin Moz JPEG for JPEGs.
>
> **[1:01](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=61)** Imagemin PNG Kwant four PNGs and Imagemin web P for webP.
>
> **[1:08](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=68)** Let me show you how Imagenmin works.
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=70)** Here I've set up a very basic example using image node and I'm pulling a set of JPEGs and PNGs from a folder that sits outside this project.
>
> **[1:18](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=78)** All I want to do is grab each of these images, run them through Imagemin, to optimize them, and then place them in this min image folder inside my project.
>
> **[1:28](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=88)** To do that, I pull in Imagemin, Imagemin MAs JPEG for JPEGs and Imagemin PNG quad for P and G.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=96)** Then I set up an async function and call in Imagemin to apply it to each of the images in the folder.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=101)** And here you can see I'm grabbing all the images.
>
> **[1:43](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=103)** So I'm getting both JPEGs and PNGs.
>
> **[1:46](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=106)** Then I set the destination which is going to be this min image folder.
>
> **[1:49](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=109)** And I call into two plugins I wanted to use and Imagemin Moz peg for JPEGs.
>
> **[1:54](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=114)** I've also set the quality here to 80% and imageminPNGquant.
>
> **[1:58](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=118)** I'm just using it as is.
>
> **[1:59](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=119)** So these will give me lossy compression for both JPEGs and PNGs.
>
> **[2:05](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=125)** Now, all I have to do to get this to work is run this node script so I'll say node ing-nodes.JS run the script.
>
> **[2:15](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=135)** So I get some feedback here telling me what files were compressed.
>
> **[2:19](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=139)** And then over in the folder, you now see I have a series of compressed files.
>
> **[2:24](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=144)** To see the actual effect of running Imagemin on these files.
>
> **[2:27](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=147)** I can show you the files side-by-side in my file Explorer here.
>
> **[2:31](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=151)** So over on the far left hand side I have the original images.
>
> **[2:35](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=155)** Now these images were already optimized in Photoshop.
>
> **[2:38](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=158)** So what you're seeing is further optimization added by Imagemin.
>
> **[2:41](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=161)** So for example, belle-callouts the first P and G here was 26 K.
>
> **[2:46](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=166)** Now it's 12 K the biggest JPEG I had this redwoods.JPEG was 1.5 megabytes, now it's 632 kilobytes.
>
> **[2:55](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=175)** If you see how Imagemin makes dramatic optimizations on these images without really changing the quality of the image itself.
>
> **[3:03](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=183)** Is this why you need to use Imagemin or some other tool like it?
>
> **[3:06](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=186)** In addition to using Photoshop, to compress your images.
>
> **[3:09](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=189)** There's one more cool feature about Imagemin.
>
> **[3:12](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=192)** If you want to change the format of any image you can use Imagemin to do so.
>
> **[3:16](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=196)** So let's say you have a bunch of JPEGs and you want to transform them into webP.
>
> **[3:20](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=200)** You can do that automatically using Imagemin.
>
> **[3:23](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=203)** In fact, you can do that automatically using all the tools I'm showing you here.
>
> **[3:26](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=206)** If you want to be on the bleeding edge of inventory optimization, you can check out Squoosh.
>
> **[3:31](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=211)** Like Imagemin Squoosh uses various compression algorithms to optimize images.
>
> **[3:36](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=216)** And it has an experimental CLI you can use to automate that process.
>
> **[3:40](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=220)** Now I should highlight this is experimental.
>
> **[3:43](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=223)** And when I was playing around with it, I got it to work but I also managed to crash it.
>
> **[3:47](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=227)** So it's not fully there yet.
>
> **[3:49](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=229)** However, if you want to push all the way to the bleeding edge, you can totally use this.
>
> **[3:53](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=233)** Like Imagemin, Squoosh will also convert your images to other formats.
>
> **[3:58](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=238)** So if you have a bunch of JPEGs and PNGs and you want to convert them to webP, Squoosh will do that and optimize your webP images for you all at the same time.
>
> **[4:07](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=247)** The challenge with Squoosh is it's slower than Imagemin by quite a bit, but it promises better compression.
>
> **[4:14](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=254)** It also has a convenient drag and drop online service.
>
> **[4:17](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=257)** The one you're seeing here.
>
> **[4:18](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=258)** So if you need to just quickly optimize a single image or if you want to see how the quality changes when you do optimizations, you can just drop the image here.
>
> **[4:26](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=266)** You saw me use this previously in the course so I won't do another demo here.
>
> **[4:30](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=270)** All right.
>
> **[4:31](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=271)** So Imagemin and Squoosh do the same thing.
>
> **[4:32](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=272)** They both minimize the size of the images but what if you want to do more?
>
> **[4:37](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=277)** In that case, you should check out sharp which provides a whole suite of tools for image optimization, transformation and modification.
>
> **[4:45](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=285)** With sharp, you can modify the size, appearance, orientation and other features of your images automatically.
>
> **[4:51](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=291)** And you can also do advanced things like create multiple different versions of a single image.
>
> **[4:56](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=296)** This is especially useful.
>
> **[4:57](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=297)** If you aim to use responsive images markup which of course you should always do.
>
> **[5:02](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=302)** Let me show you an example of this as well.
>
> **[5:04](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=304)** In this example, I'm using the same original images that I've referred to previously.
>
> **[5:08](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=308)** They're sitting outside this folder but there's just a series of JPEGs and PNGs.
>
> **[5:13](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=313)** Then I've set up a sharp script to convert the images into different image sizes so that I have all the different image sizes I need for responsive images.
>
> **[5:22](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=322)** Here, I'm calling in sharp.
>
> **[5:23](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=323)** And then I'm also calling in some basic node function so that I can work with the file system.
>
> **[5:29](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=329)** I'm also setting up the source directory which is where the images come from and the target directory which is where the images are going to go.
>
> **[5:35](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=335)** Then for each of the files that are retrieved using this function I use sharp on the file.
>
> **[5:41](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=341)** And then I say resize and define the width of the image.
>
> **[5:44](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=344)** And here you can see when I scroll down I have different widths.
>
> **[5:46](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=346)** So 320 pixels, 640 pixels, 960 pixels and 1200 pixels.
>
> **[5:52](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=352)** The idea is with sharp I can now grab one image and output five different sizes.
>
> **[5:57](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=357)** And then I grabbed the file name, appended an extra extension to it.
>
> **[6:01](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=361)** So in this case file name dash small and then the extension that would either be a JPEG or PNG then file name medium, file name large, and so on.
>
> **[6:09](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=369)** So let's see what happens when I run sharp on the same images.
>
> **[6:15](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=375)** This function will now generate five images per image.
>
> **[6:18](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=378)** So you can see here I have for the belle-callout image I have large, medium, small, XL.
>
> **[6:23](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=383)** And then for Oscar call-out large, medium, small, XL.
>
> **[6:27](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=387)** And so on.
>
> **[6:27](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=387)** Sorry, did I say five?
>
> **[6:28](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=388)** I'm meant four, of course I'm getting four versions.
>
> **[6:31](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=391)** Going to my file Explorer.
>
> **[6:32](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=392)** You can also see the sizes of these images.
>
> **[6:35](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=395)** So here we have belle-callout this is the original image.
>
> **[6:38](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=398)** And then over here we have bell-callout small, medium, large and extra large.
>
> **[6:43](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=403)** Now what you'll notice right away is these images seem bigger in file size than the original image.
>
> **[6:49](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=409)** That's because this image is actually really small.
>
> **[6:52](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=412)** So what I've done is used sharp to make a much bigger version of the same image which quite frankly is just stretching the pixels.
>
> **[6:58](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=418)** It's not ideal, but it shows what's going on.
>
> **[7:01](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=421)** What it also shows is that even though sharp does optimization it doesn't do optimization as well as Imagemin.
>
> **[7:08](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=428)** So when I use sharp I use sharp first to generate my images.
>
> **[7:12](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=432)** And then I use Imagemin afterwards to minify those generated images.
>
> **[7:17](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=437)** That way I get the advantage of automating image sizing and automating the optimization of the images.
>
> **[7:23](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=443)** You can also extend sharp by adding additional image optimization but quite frankly the job is done better by Imagemin.
>
> **[7:30](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=450)** So you should just put Imagemin your tool chain.
>
> **[7:33](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=453)** This gives you three options to work with.
>
> **[7:35](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=455)** My recommendation is to use Imagemin all the time.
>
> **[7:38](https://www.linkedin.com/learning/developing-for-web-performance/automated-image-optimization?u=76281980&t=458)** Use sharp, maybe if you need to do conversions and checkout Squoosh just to see how it works because in the future I expect that Squoosh will become the new default.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (4), async (1), this. (1), case, (1)
> **Env Vars:** jpeg (6), cli (3), png (3)
> **CLI Commands:** node (5), make (1)
> **Code Identifiers:** webp (4), imageminpngquant (1)
> **Prerequisites:** set up (3)
> **File Paths:** node.js (1), ing-nodes.js (1)
> **UI Navigation:** drag and drop (1), scroll down (1)
> **Versions:** 1.5 (1)

#### Responsive images
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=0)** - Even a fully optimized image can slow down the performance of your site if it's delivered to the wrong browser at the wrong time.
>
> **[0:07](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=7)** This is the problem Responsive Images Markup is meant to solve.
>
> **[0:10](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=10)** Here's a quick intro to Responsive Images.
>
> **[0:13](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=13)** Using a standard image elements, the same image file is delivered to all browsers regardless of how big the displayed image is.
>
> **[0:20](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=20)** That means if you want to deliver a full bleed 1,920 pixel wide image to full width desktop browsers.
>
> **[0:27](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=27)** That same 1,920 pixel wide image will also be delivered to a 320 pixel wide feature phone.
>
> **[0:34](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=34)** Which is not great for performance on that phone.
>
> **[0:37](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=37)** To solve this issue, we have to responsive images attributes.
>
> **[0:40](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=40)** Source sets and sizes.
>
> **[0:43](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=43)** Source sets allows you to provide a literal sets or list of image sources for the browser to choose from.
>
> **[0:50](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=50)** So in addition to providing the default source attribute, you also provide a source set attribute holding a list of different sized image files.
>
> **[0:59](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=59)** For each of these files, you'll annotate them with the URI to the location of the image file.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=64)** And then a W value indicating the total pixel width of each of these images.
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=70)** So in this case, I have four different images.
>
> **[1:12](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=72)** The first one is 320 pixel wide.
>
> **[1:15](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=75)** The second one is 600 pixel wide.
>
> **[1:17](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=77)** The third one is 1200 pixel wide.
>
> **[1:18](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=78)** And the fourth one is 1,920 pixel wide.
>
> **[1:22](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=82)** Now when the browser finds the image element, it checks its own viewport width and finds the image with the width that is the closest matched upwards.
>
> **[1:30](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=90)** So in our example, if the viewport of the browser is 800 pixels wide.
>
> **[1:34](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=94)** The browser will pick the 1200 pixel wide image because it is the closest size upwards.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=101)** 600 is too small for the browser, but 1200 is the closest to 800 you can find right now.
>
> **[1:47](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=107)** And it gets even more interesting.
>
> **[1:49](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=109)** If you then choose to scale up the viewport by just scaling up the browser window.
>
> **[1:54](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=114)** The browser will automatically pull down larger versions of the image to fill in the space if it's necessary.
>
> **[2:00](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=120)** So that means if you are opening the browser on a small window and then scale the browser up, you could actually end up downloading several different versions of the image.
>
> **[2:08](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=128)** But this is not normal user behavior.
>
> **[2:10](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=130)** It just shows you that this is a dynamic loading capability that the browser now has built in.
>
> **[2:15](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=135)** But the important thing now is, by carefully planning your image sizes you can now deliver appropriately sized image files to all browsers and all devices.
>
> **[2:25](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=145)** So, a 320 pixel wide feature phone gets a 320 pixel wide image.
>
> **[2:30](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=150)** While a 30 inch 4K desktop monitor gets a 1,920 pixel wide image all with the same markup.
>
> **[2:38](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=158)** There's one problem though.
>
> **[2:39](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=159)** Source set alone always conforms to the full width of the viewport.
>
> **[2:43](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=163)** But, for most of your images, the actual displayed width of the image is determined using CSS and media queries.
>
> **[2:51](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=171)** And you rarely display all your images as full width in the browser.
>
> **[2:55](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=175)** To address this, we have the sizes attribute.
>
> **[2:59](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=179)** Sizes holds a list of media queries and corresponding width to save.
>
> **[3:03](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=183)** For this image, if the viewport is 1200 pixels or wider, the actual width this image will be displayed at will always be 1200 pixels.
>
> **[3:14](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=194)** The browser will then serve up the image closest matching 1200 pixels.
>
> **[3:18](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=198)** The reason why I'm still providing the 1920 pixel image here is to provide a higher resolution image to higher resolution displays.
>
> **[3:27](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=207)** The 100 VW at the end of the size of the attribute says, for all other conditions, meaning screen widths under 1200 pixels.
>
> **[3:35](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=215)** The image is always full width because this is a responsive layout.
>
> **[3:39](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=219)** This means you can use the sizes attribute to define clearly the displayed seismic image at any width using regular CSS media queries.
>
> **[3:49](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=229)** This is especially important when you have a design where an image has a max size smaller than the viewport width.
>
> **[3:55](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=235)** Which is almost every single image on the web.
>
> **[3:59](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=239)** Which brings up an important question.
>
> **[4:01](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=241)** How do we know what image sizes to target?
>
> **[4:04](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=244)** Figuring out what image sizes to provide has become a very complex science and it can be a bit overwhelming.
>
> **[4:10](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=250)** You can even offload it to external services that we'll figure it out for you.
>
> **[4:15](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=255)** So let me give you a good baseline to go with.
>
> **[4:17](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=257)** Because if you just use common sense you can apply a pretty straightforward process.
>
> **[4:22](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=262)** First off, always provide an image for the smallest possible width.
>
> **[4:27](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=267)** The smallest possible with for pretty much any possible screen is 320 pixels.
>
> **[4:32](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=272)** So your smallest image should be 320 pixels wide.
>
> **[4:36](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=276)** Second, cap out your widest possible image at 1,920 pixels and set the max with of all images to 1,920 pixels so that the images don't scale beyond this intrinsic size.
>
> **[4:49](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=289)** Yes, that means very large monitors won't get those beautiful full bleed images.
>
> **[4:55](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=295)** But frankly, very large monitors shouldn't get full bleed images because it looks weird and takes up the entire available space.
>
> **[5:04](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=304)** Third, your design will almost always have a standard max width for in content images.
>
> **[5:10](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=310)** So they stay in line with the rest of the layout.
>
> **[5:13](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=313)** Whatever this max with is create an image size to match it.
>
> **[5:16](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=316)** Because then your images will always fit within the content width.
>
> **[5:20](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=320)** Number four, if your design has natural break points that significantly change the display of images.
>
> **[5:26](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=326)** Make image sizes to match these break points.
>
> **[5:29](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=329)** And finally, all in all, you should end up with around four or five image sizes.
>
> **[5:34](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=334)** This will cover almost any scenario.
>
> **[5:37](https://www.linkedin.com/learning/developing-for-web-performance/responsive-images?u=76281980&t=337)** And anything more becomes unnecessarily complex for very little benefit.

> [!info]- Semantic Content
>
> **Code Keywords:** from. (1), case, (1), this, (1), let (1), finally, (1)
> **Env Vars:** css (2), uri (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Speakers:** - even (1)

#### Lazy-loading images
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=0)** - [Instructor] What if I told you the absolute biggest, most impactful performance optimization you can implement with images is to just not load the images at all?
>
> **[0:09](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=9)** Sounds like not what you want, right?
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=12)** Actually, it's exactly what you want.
>
> **[0:15](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=15)** Let me explain.
>
> **[0:16](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=16)** Say you have a standard web page.
>
> **[0:18](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=18)** There is a header and maybe a featured image and then some content and some images and videos, and maybe an iframe or something else.
>
> **[0:25](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=25)** When the browser loads this page, it loads in all of the images, even if the user never scrolls and never gets to see them.
>
> **[0:32](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=32)** Or rather, that's how it used to work until very recently.
>
> **[0:37](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=37)** Loading images, videos, and iframes the user never scrolls to has always been a major performance issue on the web.
>
> **[0:43](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=43)** We're simply wasting data that we shouldn't be wasting.
>
> **[0:47](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=47)** To deal with this issue, developers started adding lazy loading JavaScript libraries that would wait for the user to scroll close to an element before the image was loaded by the browser so that instead of loading all the images on a page, only the images the user would actually get to see inside the viewport were loaded by the browser.
>
> **[1:06](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=66)** This developer pattern became so popular that it became what we colloquially call a cow path, and once that was well enough established, developers at Google decided this should probably be part of the web platform.
>
> **[1:19](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=79)** So now, native lazy loading is either active in or soon to be active in all modern browsers.
>
> **[1:26](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=86)** This is a huge step forward for performance.
>
> **[1:29](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=89)** This new lazy loading can be activated on all images, videos and iframes telling the browser to defer loading of these assets until they come within a calculated distance from the viewport.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=101)** That distance is calculated by the browser to attempt to provide enough time to actually get and display the asset before the user sees it.
>
> **[1:49](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=109)** Native lazy loading is activated using the loading attribute on the element in question.
>
> **[1:54](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=114)** There are two relevant values to choose from here.
>
> **[1:57](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=117)** Lazy, meaning the asset is loaded only when it's close to the viewport, and eager, meaning the asset is loaded immediately, even if it's nowhere near the viewport.
>
> **[2:08](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=128)** There's also a fallback here called auto, but it's not yet in the specification and it's not supported by all browsers who have implemented this feature.
>
> **[2:15](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=135)** So it's not recommended to use auto.
>
> **[2:17](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=137)** Instead, use either lazy or eager on all your images.
>
> **[2:21](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=141)** Now, this loading attribute is also non-destructive, meaning older browsers who do not understand this attribute will simply ignore it and load all the assets as it would normally do.
>
> **[2:31](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=151)** The loading attribute is something you should add to all of your projects right now because it makes a huge difference on performance and it is non-destructive.
>
> **[2:40](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=160)** If you want lazy loading support in older browsers as well, you can use a JavaScript solution like lazysizes, which has an extension plugin called native loading, which serves up the JavaScript solution only to browsers that do not support the loading attribute and the new built in lazy loading feature.
>
> **[2:58](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-images?u=76281980&t=178)** But lazy load all your images, all your videos, and all your iframes because in the future that will be the default.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), else. (1), default. (1)
> **Definitions:** is a  (2)
> **Documentation:** specification (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 5. Markup and Content

#### Automated optimization of JavaScript and CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=0)** - [Instructor] Web developers face an interesting conundrum.
>
> **[0:03](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=3)** To write code that is understandable and maintainable, it has to make sense to us humans, but the machines we write the code for don't care about human readability at all.
>
> **[0:14](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=14)** They want highly optimized code, ideally so optimized it becomes unreadable for humans.
>
> **[0:19](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=19)** This is especially true when it comes to web optimization.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=23)** The code we write is optimized for humans, but if we want the code to be as fast as possible and to be performant, it needs to be rewritten for size and effectiveness, and that makes it unreadable for us humans.
>
> **[0:37](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=37)** The good news is we now have tools to do this job for us in the form of code minimizers, packagers, bundlers, and more.
>
> **[0:45](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=45)** To use these tools effectively, though, they need to be part of a build process with two or more pronged development environments.
>
> **[0:52](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=52)** At minimum, you'll need a development track where the human readable code is stored and a production track where the highly optimized and compressed machine-readable code is stored.
>
> **[1:02](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=62)** In this build tool, the two main focus areas are JavaScript and CSS because these are the two types of code we can optimize the most.
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=70)** As JavaScript has transformed from adding a sprinkling of effects on top of HTML and CSS to becoming the de facto development language for the modern web, JavaScript weight has become a real performance issue.
>
> **[1:23](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=83)** JavaScript is now the second largest contributor to performance bloat, and much of this bloat is caused by popular frameworks, like React.
>
> **[1:32](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=92)** And it's not just the size of JavaScript bundles that cause performance issues.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=96)** The rendering and operation of JavaScript can also slow down both initial load times and ongoing functionality, which impacts perceived and actual performance.
>
> **[1:46](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=106)** How and when we compress, bundle, load, modularize, and execute JavaScript is becoming more and more important to improving performance.
>
> **[1:56](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=116)** The same can be said for CSS.
>
> **[1:58](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=118)** Gone are the days when we could serve up a gigantic style sheet for an entire site.
>
> **[2:03](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=123)** Modular and inline CSS, progressive loading, and other performance techniques are now essential to ensure the style of a site or application doesn't slow down its delivery.
>
> **[2:14](https://www.linkedin.com/learning/developing-for-web-performance/automated-optimization-of-javascript-and-css?u=76281980&t=134)** In this chapter, we'll take a closer look at how to optimize both JavaScript and CSS for performance while maintaining a functional and human readable development environment.

> [!info]- Semantic Content
>
> **Env Vars:** css (5), html (1)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### JavaScript bundling vs. modules
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=0)** - At the very beginning of this course I talked about HTTP/2 and multiplexing, the ability of the browser to pull down many files at the same time rather than one file after the other.
>
> **[0:11](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=11)** This new ability is challenging how we think about serving JavaScript to the browser.
>
> **[0:16](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=16)** So bear with me here.
>
> **[0:18](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=18)** As websites and applications started relying more and more on JavaScript and front-end frameworks like react.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=23)** Developers ran into a significant performance issue with the old HTTP 1.1 protocol.
>
> **[0:30](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=30)** Big JavaScript applications with a lot of different files and components, created major rendering roadblocks because the browser would stop rendering until all the files were downloaded and all those files came one after the other.
>
> **[0:43](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=43)** To solve this problem, developers started bundling all of their JavaScript into one single file.
>
> **[0:49](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=49)** With a single file, there was no issue with waiting for files to load or for files loading in the wrong order or anything like that.
>
> **[0:57](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=57)** But, those files got very big, very fast, which replaced one performance issue with another.
>
> **[1:05](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=65)** From a technical perspective these original problems are in the past.
>
> **[1:09](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=69)** Thanks to HTTP/2 and multiplexing.
>
> **[1:12](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=72)** In reality, they're still very much present, because although the technology has moved on, the tool chain and development practices have not, but they're starting to.
>
> **[1:23](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=83)** Here's the thing, this whole idea of bundling all JavaScript into one big file, makes no sense on the modern web.
>
> **[1:29](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=89)** First of all, we now have multiplexing.
>
> **[1:31](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=91)** Second of all.
>
> **[1:32](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=92)** The modern web platform supports JavaScript modules, separate JavaScript files that export and import objects functions, and other primitives from each other.
>
> **[1:42](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=102)** Just a few years ago, such modules had to be transformed into larger JavaScript bundles to work using a tool like bundler.
>
> **[1:49](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=109)** Today, that's no longer necessary.
>
> **[1:51](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=111)** That changes everything about how we think about loading JavaScript.
>
> **[1:56](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=116)** If we ignore all the frameworks and build tools and everything else for a second and just look at the concept of JavaScript loading, here's what should be happening from a performance perspective.
>
> **[2:06](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=126)** On initial load any critical JavaScript necessary to get the app framework up and running and displaying something above the fold should be loaded.
>
> **[2:14](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=134)** Once that's done.
>
> **[2:16](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=136)** And the user has something to look at, any necessary JavaScript modules for functionality should be loaded.
>
> **[2:21](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=141)** And from here on out, the browsers should progressively load JavaScript modules only when they become relevant.
>
> **[2:28](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=148)** Because the user scrolls to where they are, or click a button or do something else to trigger an interaction that requires more JavaScript.
>
> **[2:36](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=156)** In other words, JavaScript functionality should be modularized as much as possible and split into dedicated files.
>
> **[2:44](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=164)** There are several immediate benefits to this approach.
>
> **[2:47](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=167)** First off, this is how modern web applications are already built.
>
> **[2:51](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=171)** React, uses components.
>
> **[2:53](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=173)** JavaScript modules are the exact same thing.
>
> **[2:56](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=176)** Except they run on the web platform itself and you don't need a bundler to make them work.
>
> **[3:01](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=181)** Number two, modularization makes ongoing development easier because it provides clear separation of concerns.
>
> **[3:08](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=188)** Number three, modularizing, JavaScript and loading modules only when they are needed, brings significant performance benefits on initial load.
>
> **[3:16](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=196)** And number four, modularization means updating some feature in a JavaScript app does not require the browser to download the entire app bundle again.
>
> **[3:26](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=206)** It just needs to download the updated module file with its features, which is way smaller.
>
> **[3:32](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=212)** The good news is we're starting to see build tools take advantage of this new feature in the web platform, and use JavaScript modules for this purpose.
>
> **[3:40](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=220)** That includes snowpack, parcel, roll up, even webpack.
>
> **[3:44](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=224)** Existing build tools like webpack, also support this approach through code splitting.
>
> **[3:49](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=229)** So does this mean JavaScript bundling will become a thing of the past?
>
> **[3:53](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=233)** No, I don't think so.
>
> **[3:54](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=234)** It does mean the days of serving up one huge app bundle for all our JavaScript is over though.
>
> **[4:01](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=241)** Instead we can now more carefully design a loading strategy for our JavaScript for optimal performance.
>
> **[4:07](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=247)** And that's done using the breakdown I provided earlier.
>
> **[4:10](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=250)** First, critical JavaScript, then necessary functionality, and then lazy load the rest.
>
> **[4:15](https://www.linkedin.com/learning/developing-for-web-performance/javascript-bundling-vs-modules?u=76281980&t=255)** I'll talk a lot more about lazy loading JavaScript a little later on in the course.

> [!info]- Semantic Content
>
> **Env Vars:** http (3)
> **Code Keywords:** require (1), module (1)
> **Exercise Files:** download the (2)
> **CLI Commands:** make (1)
> **Versions:** 1.1 (1)
> **Definitions:** in other words (1)
> **Speakers:** - at (1)

#### JavaScript loading: Async and defer
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=0)** - [Instructor] When and how the browser loads each JavaScript file it encounters has a significant impact on both performance and functionality.
>
> **[0:07](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=7)** For this reason, we have the async and defer keywords which instruct the browser to either load JavaScript files asynchronously while rendering takes place, and then execute them as soon as they're available, or to load the files asynchronously and defer execution until the DOM rendering is done.
>
> **[0:24](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=24)** Let's take a closer look at these two keywords and how they work.
>
> **[0:27](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=27)** When the browser is presented with JavaScript, either inline or from an external file, it immediately stops its rendering process because there's a good chance the JavaScript will impact the HTML or CSS or both in some way.
>
> **[0:39](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=39)** This is what's referred to as render blocking.
>
> **[0:41](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=41)** And with big JavaScript files, it can cause significant issues because everything stops until the JavaScript is fully loaded and executed.
>
> **[0:47](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=47)** Additionally, JavaScript functionality often relies on DOM elements already being present in the browser.
>
> **[0:54](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=54)** And since the browser reads the HTML document from the top down, if the JavaScript is executed before the DOM elements it targets are rendered, errors occur.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=64)** This means whenever we load JavaScript we have to consider several things.
>
> **[1:08](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=68)** When should the JavaScript be loaded?
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=70)** When should the JavaScript be executed?
>
> **[1:12](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=72)** And does the JavaScript need to be loaded and executed immediately or can it be deferred to later?
>
> **[1:17](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=77)** Think about this, if we add JavaScript to the head of an HTML document, it will always load and execute as soon as the browser encounters it, which is always before the body is rendered out.
>
> **[1:29](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=89)** This will always cause render blocking.
>
> **[1:32](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=92)** And there are very few scenarios where this is preferred.
>
> **[1:35](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=95)** In fact, I've asked JavaScript developers and experts on social media, and nobody has been able to come up with any practical example with render blocking being intentional.
>
> **[1:45](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=105)** Traditionally, to prevent this render blocking JavaScript has been added to the very bottom of the body element, but this is a hack and it's a bad one.
>
> **[1:53](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=113)** What happens now is the entire page will be loaded before the JavaScript is even loaded which just adds to the performance problems.
>
> **[2:00](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=120)** This is not an ideal solution.
>
> **[2:03](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=123)** The core problem is that the script tag, out of the box, causes parsing to be paused.
>
> **[2:08](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=128)** It causes render blocking because as soon as the browser encounters a reference to JavaScript, it'll stop doing anything, download the entire script, then execute the script, and then go back to rendering.
>
> **[2:20](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=140)** This is the problem.
>
> **[2:22](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=142)** The async and defer keywords change this behavior.
>
> **[2:25](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=145)** When we add async to the script tag, the browser will load the JavaScript asynchronously meaning it loads alongside the HTML parsing process.
>
> **[2:34](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=154)** When the script is fully loaded the browser stops the rendering of the HTML until the script is executed and then it continues.
>
> **[2:42](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=162)** Already we're seeing a significant performance enhancement because the parsing isn't paused while the script is being downloaded.
>
> **[2:49](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=169)** Oh, and a quick sidebar here.
>
> **[2:51](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=171)** The name asynchronous confused me until I got a good explanation, so I'm going to pass it on to you.
>
> **[2:56](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=176)** In JavaScript and other programming languages, a synchronous event means one event happens after another, in a chain.
>
> **[3:04](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=184)** Asynchronous means the events happen independently of one another and one event doesn't have to wait for another to complete before it takes place.
>
> **[3:11](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=191)** In the case of async JavaScript loading the loading is asynchronous, while the execution is synchronous.
>
> **[3:19](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=199)** Bottom line, use async anytime you're loading JavaScript and you don't need to wait for the whole DOM to be created first.
>
> **[3:26](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=206)** In other words, async should now be the default for all JavaScript loading.
>
> **[3:31](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=211)** Defer is slightly different.
>
> **[3:34](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=214)** We're still loading the script asynchronously when the browser encounters it without render blocking.
>
> **[3:39](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=219)** And then we literally defer the execution of the JavaScript until the HTML parsing is complete.
>
> **[3:45](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=225)** This is effectively the same as placing the script tag at the end of the body element, except the script is loaded asynchronously, and is therefore much better for performance because we don't render out the entire HTML and then go download the JavaScript.
>
> **[3:59](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=239)** The JavaScript is already downloaded.
>
> **[4:02](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=242)** So the basic rule of thumb here is use async as the default and use defer if you need to wait for the whole DOM to be loaded before executing the JavaScript or if the JavaScript can wait.
>
> **[4:12](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=252)** So here is your performance focused JavaScript loading best practices.
>
> **[4:16](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=256)** Number one, call JavaScript by placing the script tag in the head.
>
> **[4:20](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=260)** This is opposite of what we've been doing for the past several decades so it takes some getting used to.
>
> **[4:25](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=265)** Number two, use async as the default loading strategy.
>
> **[4:29](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=269)** Anytime you load JavaScript in the head, always put async on there unless you have a reason to use defer.
>
> **[4:35](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=275)** Number three, defer any scripts that need the DOM to be fully built or scripts that you can defer because they don't need to execute right away.
>
> **[4:43](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=283)** Number four, if you have a very good reason, and again, I can't think of one for render blocking, load your script in the head without async or defer.
>
> **[4:52](https://www.linkedin.com/learning/developing-for-web-performance/javascript-loading-async-and-defer?u=76281980&t=292)** And finally, if and only if, you need to support older browsers and you can't allow the browser to wait for things, load your script in the footer the old way and take the performance hit.

> [!info]- Semantic Content
>
> **Code Keywords:** async (10), let (1), this, (1), pass (1), finally, (1)
> **Env Vars:** html (7), dom (6), css (1)
> **Exercise Files:** download the (2)
> **Definitions:** is a  (1), in other words (1)
> **Cross-References:** go back to (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Lazy-loading JavaScript modules with import()
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=0)** - [Instructor] Earlier in the course, I talked about lazy loading images and other media assets to improve performance by only loading them into the browser if the user got to them well, we can sort of use that same idea to lazy load JavaScript modules and their associated assets only when they're interacted with and needed.
>
> **[0:17](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=17)** This is achieved using the import statements in JavaScript and it's best explained through a practical example.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=23)** So I built a very, very basic example.
>
> **[0:27](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=27)** Let's say I have an app and the app has a button.
>
> **[0:30](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=30)** When I click on that button a gallery pops up showing some images, I guess that this is a very basic example.
>
> **[0:37](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=37)** Now, imagine this button here is something far more complex some advanced JavaScript feature like a dynamic gallery or a shopping cart or an advanced form or something that could require a lot of JavaScript or maybe even a lot of data like an image or a video or something like that.
>
> **[0:55](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=55)** The straightforward way of making this effect would be to just load everything into the browser and then hide the features that you want to appear.
>
> **[1:03](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=63)** That way when the user clicks on the button the content is revealed and things work as expected.
>
> **[1:09](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=69)** But what if this feature is something only some users will interact with like a shopping cart or product details for a product page or a form or something else.
>
> **[1:19](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=79)** If the user doesn't interact with it we really shouldn't be loading the JavaScript and all these extra assets into the browser at all.
>
> **[1:26](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=86)** We should be saving the user's bandwidth if we can.
>
> **[1:29](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=89)** That's where lazy loading JavaScript with the import statement comes in.
>
> **[1:33](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=93)** If we jump to the code for this example you'll see in index dot HTML, I'm calling in a single file called script dot JS sits over here and script dot JS, just monitors the button, and then says if we click on the button, then do something.
>
> **[1:47](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=107)** When the user clicks on the button this import statement is used to import the module in an external file on the fly.
>
> **[1:56](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=116)** The module sits in this file called module JS.
>
> **[2:00](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=120)** It's called gallery and it's export it all the way down here at the bottom export default gallery.
>
> **[2:06](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=126)** That's why the import statement works.
>
> **[2:08](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=128)** Now, this module is really basic.
>
> **[2:10](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=130)** All it's doing is creating a section element then putting some HTML content inside it.
>
> **[2:15](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=135)** And that HTML content is a set of figures that call different images.
>
> **[2:20](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=140)** And this is why we're downloading all these images.
>
> **[2:23](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=143)** If you look a little bit closer at the actual code and script dot JS, you'll see we're using a promise here we're saying import module JS.
>
> **[2:30](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=150)** So that imports the entire module JS file.
>
> **[2:33](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=153)** Then once that file is imported go to the object that was imported and find the default of the object, that would be the default export down here export default gallery.
>
> **[2:45](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=165)** In this setup, I call that default gallery and then I call gallery as a function.
>
> **[2:51](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=171)** Let's look at what's actually happening in the browser.
>
> **[2:53](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=173)** So in Firefox I'll inspect elements and open the network monitor and I'll reload and you'll notice at the top, we're loading in the HTML document the style sheet and script dot JS.
>
> **[3:05](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=185)** Now watch what happens when I click the button.
>
> **[3:08](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=188)** All of a sudden we get new stuff down here in the network monitor.
>
> **[3:11](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=191)** Now we've imported module JS.
>
> **[3:13](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=193)** That was the module file and module JS then calls in the images Belle, Oscar, Sergeant and Spring.
>
> **[3:21](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=201)** That means I'm not just lazy loading in the JavaScript.
>
> **[3:23](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=203)** I'm also lazy loading in the images only when the user interacts with them this is kind of the whole point.
>
> **[3:29](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=209)** We're now conditionally loading JavaScript and other associated assets only if the user interacts with them.
>
> **[3:35](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=215)** Now, there are two different methods for lazy loading JavaScript modules like this the promise I just showed you here and we can also use an async await function.
>
> **[3:44](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=224)** So if I comment out this and scroll down a little bit I've set up the same example using async await here we set up an async immediately invoked function expression.
>
> **[3:55](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=235)** Then inside the async we say await import meaning the browser will now sit and wait until the import is completed.
>
> **[4:02](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=242)** Then grab the default and set it to a gallery.
>
> **[4:05](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=245)** So we get the gallery expert and then run gallery as before.
>
> **[4:09](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=249)** If I save this, go back to the browser and reload and click the button.
>
> **[4:12](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=252)** You'll see it works exactly the same way.
>
> **[4:14](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=254)** These are just two different approaches to doing the exact same thing.
>
> **[4:17](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=257)** Now, the cool thing about this whole concept is we can use this with any JavaScript module including external JavaScript modules.
>
> **[4:26](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=266)** So if you have an external third party library on a CDN somewhere something like the rough library, for example and that library offers a JavaScript module often referred to as an ESM module you can call it in using the same approach.
>
> **[4:41](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=281)** That's the last example I've set up here.
>
> **[4:42](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=282)** So if I uncommon this, we can take a look at what happens again we set up an async immediately invoked function expression.
>
> **[4:51](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=291)** Then we call in advanced JS.
>
> **[4:54](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=294)** We grab the function inside that's called drawboxes I mean run drawboxes, advanced JS then in turn, sets up an async function.
>
> **[5:03](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=303)** And this async function goes and imports a package from a CDN called rough.
>
> **[5:09](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=309)** Rough allows us to draw roughly shaped shapes for prototyping purposes.
>
> **[5:15](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=315)** And this example starts to indicate why it's important to use this lazy loading approach.
>
> **[5:20](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=320)** Because here we have a lot of JavaScript.
>
> **[5:22](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=322)** There's a lot of settings.
>
> **[5:23](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=323)** There's a lot of stuff going on and we're importing a large external library to make it work.
>
> **[5:28](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=328)** And this should really only happen in the browser if the user's actually going to interact with it.
>
> **[5:32](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=332)** So we also have two imports now we have first import of advanced JS and then advanced JS in turn imports another file so we're chaining the imports.
>
> **[5:42](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=342)** Let's see what happens when I run this in the browser.
>
> **[5:44](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=344)** If I first just click on the button we get this rough drawing of some boxes.
>
> **[5:48](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=348)** This is what the rough library does.
>
> **[5:50](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=350)** It allows me to make hand drawn boxes in the browser.
>
> **[5:53](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=353)** Now, if we look at the inspector again, go to network and reload, you'll see the same thing as before happens.
>
> **[6:00](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=360)** First, we load in style script and the HTML document.
>
> **[6:04](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=364)** And then when I click the button, we load another stuff.
>
> **[6:06](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=366)** Only this time we're first loading in advanced JS, and then advanced JS is loading in rough dot ESM dot JS from this external library.
>
> **[6:15](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=375)** And that means I'm not chaining my events, lazy loading in JavaScript and getting everything to work conditionally on the user's behavior.
>
> **[6:23](https://www.linkedin.com/learning/developing-for-web-performance/lazy-loading-javascript-modules-with-import?u=76281980&t=383)** So I'm saving the user a ton of data and only pushing content to the browser when it's needed.

> [!info]- Semantic Content
>
> **Code Keywords:** module (12), function (7), async (7), let (3), await (3)
> **Env Vars:** html (5), cdn (2), esm (2)
> **UI Navigation:** click on (3), go to (2), open the (1), scroll down (1)
> **Prerequisites:** set up (4), setup (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** earlier in (1), go back to (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)

#### Minifying and uglifying JavaScript
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=0)** - JavaScript is code written by humans for computers.
>
> **[0:04](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=4)** And as I've mentioned before, while we humans need human readable code, with lots of white space, and indentation, and comments, computers do not.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=12)** For this reason.
>
> **[0:13](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=13)** When we ship code to the browser, we can optimize that code for performance by removing all the white space and comments, and long variable and function names, and basically rewrite everything and turn it into highly optimized human unreadable code.
>
> **[0:28](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=28)** For this, we use code monifiers, and uglyfires and mangloes called soul, because of how they rewrite our beautiful code, into an ugly mangled computer mess.
>
> **[0:38](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=38)** There are lots of JavaScript magnifiers to choose from, and all major bunglers, including webpack, rollup, parcel, et cetera, ship with magnifiers built in.
>
> **[0:47](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=47)** The two most popular magnifiers are ugliyph JS, and terser.
>
> **[0:53](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=53)** Though terser has started to pull ahead, because it produces smaller code and works better.
>
> **[0:58](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=58)** These monifiers all work the same way.
>
> **[1:00](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=60)** You input handwritten, beautifully laid out Java script, and outcomes are dramatically monified and uglified and mangled version of that code, in a new file placed somewhere in your production stack.
>
> **[1:12](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=72)** Both uglify and terser have default settings that work for most purposes.
>
> **[1:18](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=78)** And you can also set up advanced configurations where you can control pretty much every aspect of how the code should be monified.
>
> **[1:25](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=85)** Now, let me show you how this works in practice give you an idea of how to get started.
>
> **[1:29](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=89)** If you're working in a project that is not using a JavaScript bundler, you can slot one of these monifiers or mangoloes into your process anywhere you like.
>
> **[1:38](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=98)** So in this example, I've set up a very straightforward gold file that uses gold to run the process.
>
> **[1:44](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=104)** And then I've slotted in terser to minify my JS.
>
> **[1:47](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=107)** Nothing else that's happening is just to show you exactly how this works.
>
> **[1:51](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=111)** What I wanted to do here is grab all the JavaScript files from the source folder and the JS folder under there, and then run a through P terser and place it into my build folder.
>
> **[2:00](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=120)** So right now my build folder JS has nothing in it.
>
> **[2:04](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=124)** The gold function looks like this.
>
> **[2:06](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=126)** I grabbed the source.
>
> **[2:07](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=127)** So that's source JS and then all the JS files.
>
> **[2:10](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=130)** And I piped them through terser.
>
> **[2:12](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=132)** I haven't done any customizations to how terser works.
>
> **[2:14](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=134)** I'm just using it in its default settings.
>
> **[2:17](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=137)** And then the resulting file gets piped into the build JS folder over here.
>
> **[2:22](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=142)** To run this I opened my command line and say gulp JS just to run the JS function.
>
> **[2:28](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=148)** Now each of the JavaScript files are run through terser and outcomes, the same files up here, but now they're in the build folder.
>
> **[2:35](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=155)** I'll just show you, I'm not cheating.
>
> **[2:36](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=156)** Let's look at the files here.
>
> **[2:38](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=158)** So I'll grab advanced JS.
>
> **[2:39](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=159)** That's the relatively large JavaScript file.
>
> **[2:41](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=161)** You'll see When we look at it, there's a lot of formatting, and indentation, and white space, and a lot of long names, and things that are happening.
>
> **[2:51](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=171)** Now, let's look at advanced JS after it's gone through terser.
>
> **[2:55](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=175)** The entire file is now on one line, and you'll notice some weird things.
>
> **[2:59](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=179)** The export module name remains the same because we were using it as a module and we need to grab that module and use it elsewhere.
>
> **[3:05](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=185)** And tesser is smart enough to figure that out.
>
> **[3:07](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=187)** So it's like, I'm not going to change this module name because it's being exported and will be used elsewhere.
>
> **[3:12](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=192)** But, all the other variable and function, names have been changed.
>
> **[3:16](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=196)** So if I scroll in here, you should see, let's see, here we have a variable called L.
>
> **[3:23](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=203)** If we look at the original file, over here, there's nothing called L.
>
> **[3:28](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=208)** And you can see that even more extremely, if we go into let's see module JS, see here, constant N.
>
> **[3:34](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=214)** So what happens now is teaser will take anything it can shorten like long variable names or function names or anything else, and reduce them down to the smallest possible thing, which is a single character.
>
> **[3:47](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=227)** Which makes the function pretty much unreadable to us humans.
>
> **[3:51](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=231)** But at the same time, it makes the function much much smaller for the computer.
>
> **[3:55](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=235)** That means smaller file size, and also faster execution times.
>
> **[3:59](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=239)** That's the whole point.
>
> **[4:01](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=241)** So if you're using a bungler of any kind, roll up, webpack something else it'll automatically minify and mangle your JS for you.
>
> **[4:09](https://www.linkedin.com/learning/developing-for-web-performance/minifying-and-uglifying-javascript?u=76281980&t=249)** If you're setting up your own custom build process and you're not using a Bungler, make sure to add terser or uglify, although I've would suggest using Teaser into your build process, so that all of your JavaScript is compressed and mangled as much as possible to make it as small as possible because that gives you better performance.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (5), module (5), this, (1), from, (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (2)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - javascript (1)

#### Critical CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=0)** - [Instructor] Perceived performance plays a major role in improving the user experience and for websites and apps, the number one measure of perceived performance is how fast something loads in the view port of the browser.
>
> **[0:11](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=11)** That means the goal is to load the content above the fold, meaning in the user's view port as quickly as possible and then load the rest afterwards, so the user has the experience of the site loading faster than it's actually loading.
>
> **[0:25](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=25)** One major blocker to this is CSS itself.
>
> **[0:28](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=28)** For a page to render, all the CSS has to be fully loaded because CSS is a cascade and the rule sets at the bottom of a style sheet may well impact the rules that's higher up.
>
> **[0:37](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=37)** If we serve the browser with a huge style sheet with all the styles for the page, it takes a long time to load that style sheet on this content and the performance suffers.
>
> **[0:47](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=47)** To get around this problem, developers have come up with a clever hack called critical CSS.
>
> **[0:52](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=52)** It works like this.
>
> **[0:53](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=53)** First, inline any styles impacting the content above the fold in the HTML document itself as a style tag in the head.
>
> **[1:02](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=62)** Then lazy load and defer the rest of the CSS, using a clever JavaScript trick, so it only loads when the page is fully loaded.
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=70)** This works because the inline styles are loaded ahead of the dom elements and the document and therefore render right away, while the rest of the CSS is applied after the document load is complete.
>
> **[1:22](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=82)** The problem of course is figuring out what styles should be inlined as critical CSS and then automating the process, so you don't have to manually copy and paste code every time you update something.
>
> **[1:32](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=92)** Fortunately, web performance expert, Addy Osmani, has solved this problem for us in the form of a tool called critical.
>
> **[1:39](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=99)** It can run on its own or in existing tool chains and build processes, including Webpack, grunt and gulp.
>
> **[1:46](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=106)** And it does all the heavy lifting for us.
>
> **[1:47](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=107)** Reads the HTML and CSS figures out what rule sets should be inlined automatically inlines that CSS into the HTML document, separates out the non-critical CSS into a step separate style sheet and then lazy loads on the first and non-critical CSS.
>
> **[2:04](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=124)** Because this tool is built into the tool chain, it can be set up to take place at every build, so you don't have to keep tabs on what styles are critical.
>
> **[2:13](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=133)** This tool also has a ton of options, so you can fully customize exactly what happens within the critical CSS, both what happens to the index file or the HTML file.
>
> **[2:23](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=143)** What happens to the CSS, the view port you're targeting, all this stuff can be configured.
>
> **[2:28](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=148)** Let me show you how this works in practice.
>
> **[2:30](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=150)** So here I've taken an example from previously in the course.
>
> **[2:33](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=153)** It doesn't really matter what the example is cause we're just looking at how the index file and the style sheet has changed.
>
> **[2:39](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=159)** So out of the gates, we have a standard index document where the calls for a style sheet.
>
> **[2:44](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=164)** Style sheet is here.
>
> **[2:46](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=166)** It's relatively large.
>
> **[2:47](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=167)** I've added in a style reset, the CSS remedy at the top just so that we have extra styles that can be deferred.
>
> **[2:54](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=174)** And then finally we have the gulp file.
>
> **[2:57](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=177)** I'm using gulp here because gulp is a standard tool a lot of people use for build processes.
>
> **[3:01](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=181)** But I'm also using it because critical is used as is in gulps.
>
> **[3:05](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=185)** There's no critical plugin for gulp, you just use critical as-is.
>
> **[3:09](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=189)** So this example that I'm showing you could be used in any setup, not just gulp.
>
> **[3:13](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=193)** Alright, let's take a look at how this all fits together.
>
> **[3:16](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=196)** First, I call in critical and it's generate method.
>
> **[3:19](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=199)** This is what actually generates the critical CSS for us.
>
> **[3:22](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=202)** I set the inline property to true, saying I want to inline the CSS because you can choose to place the critical CSS in a separate style sheet if you want to.
>
> **[3:32](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=212)** Then I define the base.
>
> **[3:33](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=213)** This is the base folder my build would live in.
>
> **[3:36](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=216)** That will be the build folder up here.
>
> **[3:37](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=217)** The source is the HTML file that we'll be injecting content into.
>
> **[3:42](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=222)** And this is also the source that critical we'll use as it renders out a page to figure out which CSS is going to be critical.
>
> **[3:49](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=229)** So this is currently pointing at source index dot HTML, which is the original index.
>
> **[3:54](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=234)** Then I define how I want to output the results to the file.
>
> **[3:57](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=237)** And here I've set up three targets.
>
> **[4:00](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=240)** The first target is CSS.
>
> **[4:01](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=241)** What happens when critical runs is it'll figure out which styles need to be in line and critical and then it places it in its own style sheet for further use.
>
> **[4:11](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=251)** So that's what's defined here in the first property critical and I've just given it the name critical CSS.
>
> **[4:17](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=257)** The next entry is HTML.
>
> **[4:19](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=259)** This is the output that critical will create.
>
> **[4:21](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=261)** So after it's processed everything, it'll create a new HTML document for us.
>
> **[4:26](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=266)** And I call that document, index.HTML.
>
> **[4:28](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=268)** It'll land in the build folder.
>
> **[4:30](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=270)** And finally, uncritical defines the style sheet that will contain uncritical CSS.
>
> **[4:35](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=275)** Everything we don't need for above the fold.
>
> **[4:38](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=278)** That's placed in its own style sheet and I've called that style sheet, uncritical CSS.
>
> **[4:42](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=282)** You can change any of these names to whatever you want.
>
> **[4:44](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=284)** It'll still work the same way.
>
> **[4:46](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=286)** Then at the bottom here, I've sent minified to true just so all the CSS has minified and optimized.
>
> **[4:51](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=291)** And then finally, I've defined the width and height of the view port we're testing against.
>
> **[4:56](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=296)** Because what happens when you run critical is critical actually spin up a browser and then display the contents in the browser in a defined view port size that we've defined.
>
> **[5:06](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=306)** And then look at what CSS is affecting the content inside that view port and split that out into this critical CSS file.
>
> **[5:13](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=313)** The view port that I'm targeting is the smallest possible mobile device.
>
> **[5:17](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=317)** This is a feature phone on a slow network.
>
> **[5:19](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=319)** So 320 width, 480 height.
>
> **[5:22](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=322)** You can set this value to anything you want, but I'm choosing to target the smallest phone because that's where you'll see the most performance impact.
>
> **[5:29](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=329)** Like I said, there are a lot of options here.
>
> **[5:31](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=331)** You can play around with them.
>
> **[5:32](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=332)** There's a huge list of options on GitHub that you can go through.
>
> **[5:35](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=335)** There are also some examples of how to configure different types of environments.
>
> **[5:39](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=339)** All right, let's see what happens when I actually run this.
>
> **[5:42](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=342)** So I'll go into my console and just say, gulp, a cryptic call CSS.
>
> **[5:47](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=347)** This process takes a bit of time because a browser needs to be spun up and everything needs to happen.
>
> **[5:53](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=353)** But because I have such a simple example, the time isn't all that important.
>
> **[5:58](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=358)** So once critical CSS has finished, you'll notice I have some new files up here in the build folder.
>
> **[6:03](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=363)** So let's take a look at them.
>
> **[6:05](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=365)** First, I have index.HTML.
>
> **[6:07](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=367)** Now, look closely here and you'll see there's some changes.
>
> **[6:10](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=370)** We have a new style element.
>
> **[6:13](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=373)** And inside that style element, we have a ton of CSS.
>
> **[6:16](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=376)** So this is all the inline CSS that was created by critical.
>
> **[6:19](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=379)** You can see it's minified and it's injected directly in, so that everything is working properly.
>
> **[6:24](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=384)** This is the critical inline CSS that will run before the dom's even built.
>
> **[6:29](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=389)** So this will then define the content that's above the fold.
>
> **[6:32](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=392)** Then below we have our link elements, but the link element now points at uncritical CSS.
>
> **[6:38](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=398)** And you'll notice the media property is set to print.
>
> **[6:42](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=402)** This is the JavaScript trick I was talking about.
>
> **[6:44](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=404)** So what happens now is a regular browser will identify itself as screen.
>
> **[6:48](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=408)** For that reason, this style sheet will not be loaded because it's set to only load for print.
>
> **[6:54](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=414)** Meaning when you're actually printing something.
>
> **[6:56](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=416)** Then, on load, which is an event that is triggered when the page is fully loaded, would change this media to all instead.
>
> **[7:04](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=424)** And at that point, once everything else is done, this extra style sheet will be loaded.
>
> **[7:09](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=429)** We'll talk more about this approach on a couple of other approaches for differing loading of CSS later, but that's what's happening here.
>
> **[7:16](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=436)** We're inlining the critical CSS and then deferring loading of the uncritical CSS until other things have completed.
>
> **[7:23](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=443)** There are two more files in my build now.
>
> **[7:24](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=444)** I have critical CSS, which is the same critical CSS that's been in line is just sitting here in case we want to refer to it.
>
> **[7:31](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=451)** And then uncritical CSS, which is a modified version of all the CSS in the original style sheet that has not been put in the critical CSS.
>
> **[7:39](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=459)** So as you can see, this build process now automatically does all the work for me.
>
> **[7:43](https://www.linkedin.com/learning/developing-for-web-performance/critical-css?u=76281980&t=463)** And as I build out this project, change my HTML, change my CSS, change other things, this process will ensure that I always inline the correct critical CSS.

> [!info]- Semantic Content
>
> **Env Vars:** css (41), html (11)
> **Code Keywords:** let (4), this. (2), finally, (2)
> **Definitions:** is a  (5), is an  (1)
> **Prerequisites:** set up (2), setup (1), configure (1)
> **File Paths:** index.html (2)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Deferring noncritical CSS
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=0)** - [Instructor] To see how much of your JavaScript and CSS and other code is loaded unnecessarily into the browser, you can use the coverage view in the browser dev tools.
>
> **[0:08](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=8)** You get to it by opening the dev tools, opening the settings here and going to more tools and coverage.
>
> **[0:15](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=15)** When you open coverage, you need to reload the page and you get a visualization, immediately, of how much of the code is not being used.
>
> **[0:22](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=22)** So anything in red here is not being used.
>
> **[0:24](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=24)** And you can see right away that this JavaScript file has a lot of unused code and my main styles sheet also has a lot of unused code.
>
> **[0:32](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=32)** If you then click on any of these code files, you can see a full breakdown of exactly which rules are in play and which rules are not in play.
>
> **[0:40](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=40)** If you see anything marked in red, here, it's a rule that is not currently being used on the page.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=44)** This is what Critical does, it runs this type of process and then identifies which rules are being used and which rules are not being used, but in the view port, and then it picks and chooses.
>
> **[0:54](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=54)** There're also other automated tools you can use to further cull the CSS you're not using and the JavaScript you're not using.
>
> **[1:00](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=60)** But it's a bit of a challenge when you're working with one giant style sheet.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=64)** Because if you have one giant style sheet, it often applies to multiple different pages, you need to compare all of these pages and do a bunch of work.
>
> **[1:10](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=70)** A better solution would be if we could modularize our CSS and split the CSS into smaller components and then load them only if they are needed.
>
> **[1:18](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=78)** And one way we can do that is by deferring loading of CSS until something happens.
>
> **[1:24](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=84)** Now, you already saw an example of that in Critical.
>
> **[1:27](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=87)** You'll remember when we used Critical, the Critical CSS was in lined and then the rest of the styles were put in this uncritical CSS file and deferred.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=96)** So, here's a different way of doing the same thing.
>
> **[1:39](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=99)** What happens here is we set the rel preload and as style attributes into the link element, to tell the browser to preload this style sheet when there's processing available, meaning the loading is delayed to avoid render blocking.
>
> **[1:54](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=114)** Then the on load attribute fires when the CSS is fully loaded and sets the rel attributes to style sheet so the browser recognizes it and renders it.
>
> **[2:03](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=123)** But this non script element at the bottom is a fall back for browsers that don't have JavaScript, and in that case, they will just immediately load the style sheet.
>
> **[2:11](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=131)** There's also a bleeding edge way of doing this using the disabled attribute, that you see here.
>
> **[2:17](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=137)** This style sheet will not be loaded by the browser at all until the disabled attribute is removed or set defaults.
>
> **[2:24](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=144)** You can then set up a JavaScript function to change the disabled attribute if, and only if, some event occurs.
>
> **[2:30](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=150)** And that event could be activating a gallery or triggering a JavaScript or triggering some external function and only then will the browser go to the internet, pull down the style sheet, and mount it in the browser.
>
> **[2:43](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=163)** This means we can now split up our style sheet in many different pieces and then progressively load them, only when it makes sense to do so in the browser using standard html.
>
> **[2:52](https://www.linkedin.com/learning/developing-for-web-performance/deferring-noncritical-css?u=76281980&t=172)** This is really cool and it makes performance of CSS much more powerful.

> [!info]- Semantic Content
>
> **Env Vars:** css (9)
> **Code Keywords:** function (2), if, (2), case, (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Component-based CSS loading
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=0)** - [Instructor] There's another trick you can use to further improve the performance of CSS handling.
>
> **[0:04](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=4)** This is not really a hack, it's a feature that was introduced in most browsers all the way back in 2016, but it's not a well-known feature.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=12)** That convention is to load all your link elements pointing at style sheets in the head of a document, but that's not a requirement.
>
> **[0:20](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=20)** You can, if you want to, load a link element anywhere inside the body and you get incremental CSS rendering automatically.
>
> **[0:29](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=29)** And the great thing is this actually works in older browsers as well, all the way back to the beginning.
>
> **[0:35](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=35)** Only difference is they just ignore this incremental loading part and load everything at the same time.
>
> **[0:40](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=40)** This approach feels a bit weird because it's not how we usually do things, but it has benefits both for perceived performance and for development, especially when you start combining them with the things we talked about in a previous movie with deferring loading of CSS.
>
> **[0:55](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=55)** Loading style sheets in body means you can have each component load its own style sheets on the fly.
>
> **[1:02](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=62)** That way the component brings its own styles to the table and you don't have to load any styles you don't need.
>
> **[1:08](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=68)** This makes for much cleaner and more manageable code and it falls in line with modern component-based development practices.
>
> **[1:15](https://www.linkedin.com/learning/developing-for-web-performance/component-based-css-loading?u=76281980&t=75)** It's not the biggest performance win, but it's absolutely worth considering and it also changes the way we think about how we serve styles to the browser in a really interesting way.

> [!info]- Semantic Content
>
> **Env Vars:** css (3)
> **Cross-References:** we talked about (1)
> **Speakers:** - [instructor] (1)


### 6. Web Fonts

#### Web fonts can be major performance hogs
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980&t=0)** - [Instructor] Web fonts have provided a significant contribution to the aesthetic functionality and communication success of the web.
>
> **[0:06](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980&t=6)** The modern web would not be where it is today without the ability to display text using custom fonts.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980&t=12)** However, web fonts are also a major performance hog for several reasons.
>
> **[0:17](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980&t=17)** First, web fonts require their own style sheets or style declarations to work, which adds to the CSS weight.
>
> **[0:24](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980&t=24)** Second, web fonts require their own font files, one file for each individual font weight or style.
>
> **[0:30](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980&t=30)** If you use several styles of font, think weights, italics, et cetera, you need several font files, and all of these files often live on external services, like Google Fonts.
>
> **[0:41](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980&t=41)** While web fonts make our texts more visually appealing, they also cause some significant user experience problems with weird names, like FOUT or flash of unstyled text, or FOIT, flash of invisible text.
>
> **[0:55](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980&t=55)** If you choose to use custom web fonts, and most projects do, then web font optimization becomes an important part of your performance plan.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-can-be-major-performance-hogs?u=76281980&t=64)** So in this chapter, we'll take a deeper dive.

> [!info]- Semantic Content
>
> **Env Vars:** css (1), fout (1), foit (1)
> **Code Keywords:** require (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Optimizing third-party web font delivery
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=0)** - [Instructor] Let's look at how to optimize fonts from a third party source like Google Fonts first.
>
> **[0:05](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=5)** Even though these fonts are delivered from some of the fastest servers and services on the web, they still cause negative performance effects.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=12)** If you're using fonts from say, Google Fonts, your site will be slower than if you were using fonts that were hosted in your local environment.
>
> **[0:20](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=20)** So, how do we go about ensuring the best possible performance for fonts we have relatively little control over?
>
> **[0:25](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=25)** Well, here are some current best practices.
>
> **[0:28](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=28)** First, pick only the fonts weights and styles you're actually going to use.
>
> **[0:33](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=33)** As what you're seeing here, even though we have a ton of weights available, I'm only going to pick the styles I'm actually using in my layout.
>
> **[0:40](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=40)** The good news is when these weights are added in Google Fonts, they're added using a comma separated list.
>
> **[0:47](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=47)** So as you work with your project, you can start by adding just one style.
>
> **[0:50](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=50)** And then as you see you need more, you just add in the styles you need and then you'll only have the styles you need.
>
> **[0:55](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=55)** Second, when using multiple font families, combine the requests so you only send one HTTP request to the service.
>
> **[1:02](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=62)** Instead of sending separate requests, just string them along.
>
> **[1:05](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=65)** If you define several different fonts inside Google Fonts, it'll automatically string them all into one request for you.
>
> **[1:11](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=71)** Third, use resource hints to pre-fetch the Google Font API and pre-connect to the service that hosts the font files for you.
>
> **[1:19](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=79)** I'll show you how that works in a second.
>
> **[1:21](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=81)** Fourth, add &display=swap to the end of your request.
>
> **[1:26](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=86)** This adds the display swap property to the add font face CSS rules, which are generated by Google Fonts.
>
> **[1:32](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=92)** And they tell the browser to use whatever font it has available first and then swap to the custom web font, when that web font has been downloaded.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=101)** This eliminates the risk of a flash of visible text.
>
> **[1:44](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=104)** And finally, in the rare case when you're using a font to display a specific word or sentence and nothing else, maybe a company name or heading or something similar, you can actually pass that custom text along with your request to Google Fonts and Google fonts will only return the glyphs for that text and nothing else.
>
> **[2:04](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=124)** So let's look at this code.
>
> **[2:05](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=125)** What does the optimal font loading from Google Fonts look like?
>
> **[2:09](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=129)** We start off with a DNS prefetch.
>
> **[2:13](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=133)** This tells the browser, hey, you are going to need to gain access to [fontsgoogleapis.com](https://fontsgoogleapis.com) at some point, so going get that DNS information right away even before I request it.
>
> **[2:23](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=143)** This adds a tiny improvement to the DNS fetch that you need to do anytime you give requests, anything from a different source.
>
> **[2:31](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=151)** Second, we preconnect to fonts.[gstatic.com](https://gstatic.com).
>
> **[2:35](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=155)** This is where all the font files themselves are stored.
>
> **[2:39](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=159)** And this preconnect allows the browser to open a connection before these files are requested.
>
> **[2:44](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=164)** These files will only be requested once the style sheet is fully loaded and having this preconnect in place means there's already an open pipe leading to that server that we can pull data from.
>
> **[2:54](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=174)** I've also added cross origin here because this is not the same domain that we're pulling the rest of the site from.
>
> **[2:59](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=179)** And this allows the browser to validate the content and not create conflicts because data's coming from different sources.
>
> **[3:07](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=187)** Finally, we have the call to the CSS itself.
>
> **[3:10](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=190)** And with Google Fonts, the CSS is auto-generated based on our request.
>
> **[3:13](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=193)** So here we're asking for the Roboto font family with 400, 400 italicized and 700.
>
> **[3:20](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=200)** Now inside this request, I am first specifying which font family and font weights and styles I want.
>
> **[3:26](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=206)** Then I say, add &display=swap, which adds the display swap property to the CSS.
>
> **[3:31](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=211)** And that, way the browser will know to swap out the system font for this custom font once the custom font is fully installed.
>
> **[3:39](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=219)** This setup here is the set up you should use any time you're loading fonts from Google Fonts.
>
> **[3:43](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=223)** This is the best practice and this will give you the best performance possible from Google Fonts.
>
> **[3:49](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=229)** Anything else won't make any difference.
>
> **[3:51](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-third-party-web-font-delivery?u=76281980&t=231)** And if you take any of these pieces away, it'll make the performance slightly slower.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (2), from. (2), else, (1), pass (1)
> **Env Vars:** css (4), dns (3), http (1), api (1)
> **CLI Commands:** make (2)
> **URLs:** [fontsgoogleapis.com](https://fontsgoogleapis.com) (1), [gstatic.com](https://gstatic.com) (1)
> **Prerequisites:** setup (1), set up (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Optimizing self-hosted web font delivery
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=0)** - [Instructor] The most significant performance hit you get from using a third-party web font is that it's coming from a third party and requires a separate connection.
>
> **[0:07](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=7)** That means self-hosting your web fonts eliminates this problem which gives you an automatic performance boost.
>
> **[0:13](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=13)** So this is what you should always try to do, self-host your fonts.
>
> **[0:17](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=17)** When you self-host your web fonts, you can take advantage of a whole range of performance optimization we've already talked about including pre-loading the font style sheets or even in-lining them in critical CSS and setting font display swap as a standard.
>
> **[0:30](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=30)** You can also further control how the web fonts are loaded using JavaScript and hooking into the browser's font loading API, though this is still experimental technology.
>
> **[0:39](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=39)** So your mileage will vary as they say.
>
> **[0:42](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=42)** The cool thing is most open web fonts that you find on services like Google fonts are also available for downloads.
>
> **[0:48](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=48)** You can incorporate them and self host them in your own projects.
>
> **[0:51](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=51)** Here's an example.
>
> **[0:52](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=52)** If I go to Google fonts and look for Playfair Display, there's a button right here, download family that will allow me to download the entire font family onto my computer and place it into my project.
>
> **[1:02](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=62)** That way I'm no longer relying on Google fonts API, I can just host my fonts directly.
>
> **[1:08](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=68)** Here's what that looks like.
>
> **[1:09](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=69)** So I've downloaded Playfair Display.
>
> **[1:11](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=71)** It sits here under fonts folder.
>
> **[1:14](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=74)** Inside Playfair Display I have a read me text.
>
> **[1:16](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=76)** I have the variable font files and I also have the static font files, if I wanted to fall back to a static font.
>
> **[1:22](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=82)** To get this new custom font to work I've created a new style sheet for it called font style.CSS.
>
> **[1:28](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=88)** You can choose to create a custom style sheet for each of your fonts, or just incorporate these rules into your regular style sheet.
>
> **[1:35](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=95)** It's entirely up to you.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=96)** If you're using critical CSS, it'll figure all this out anyway.
>
> **[1:39](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=99)** But for our purposes, I've split it out.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=101)** So here I've created two add font face rules.
>
> **[1:45](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=105)** These are the rules that define each of the fonts and I've set these rules up for performance by setting font display to swap.
>
> **[1:52](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=112)** That way the browser will load a default font until we get the full new custom font loaded in properly and then the font is swapped.
>
> **[2:01](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=121)** You can also set font as play to other values but the best practice scenario here is pretty much always to set it to swap.
>
> **[2:08](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=128)** There's one more thing you can do to further improve the performance of this custom font even when it's hosted on your own site.
>
> **[2:14](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=134)** You notice how the custom font actually works.
>
> **[2:16](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=136)** We pull in the style sheet that declares the add font face rule and then that add font phase rule points out a file.
>
> **[2:24](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=144)** So in this case, Playfair Display italic variable font weight TTF.
>
> **[2:28](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=148)** All right, so that means first we load the CSS.
>
> **[2:32](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=152)** Then we load the font file.
>
> **[2:33](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=153)** And in our case, we're loading two font files.
>
> **[2:36](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=156)** Which creates a synchronous chain.
>
> **[2:39](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=159)** We can bypass that synchronous chain using preload.
>
> **[2:43](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=163)** So if we set up link rel preload as font and point at a font type, we can tell the browser, Hey I know that you are going to need this file.
>
> **[2:54](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=174)** So I want you to preload it into the cache, and then when the file is called from the CSS you already have it.
>
> **[2:59](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=179)** So you make the loading of this file asynchronous, even though it is technically a synchronous loading.
>
> **[3:06](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=186)** That's done in index.HTML.
>
> **[3:08](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=188)** So here we have those two files being preloaded.
>
> **[3:11](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=191)** And that means as the browser starts from the top and starts reading this document, it starts pre-loading the font files before it even knows they exist and they need to be used because the style sheet that calls in the fonts are down here.
>
> **[3:23](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=203)** This actually creates a significant performance boost but only if you really need to have the font files there.
>
> **[3:30](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=210)** So if you want the custom fonts to kick in right away you preload these font files in and then you'll get that performance enhancement.
>
> **[3:38](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=218)** However, it does give you also a performance hit because you are now downloading two extra files that the browser wouldn't otherwise download this quickly.
>
> **[3:45](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=225)** So, you know, you have to balance these things and figure out what matters the most to you.
>
> **[3:50](https://www.linkedin.com/learning/developing-for-web-performance/optimizing-self-hosted-web-font-delivery?u=76281980&t=230)** Getting the page to load fast or getting the fonts on the page to load fast.

> [!info]- Semantic Content
>
> **Code Keywords:** self (4), static (2), case, (2), type, (1)
> **Env Vars:** css (5), api (2), ttf (1), html (1)
> **File Paths:** style.css (1), index.html (1)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** you should always (1), best practice (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Definitions:** is called (1)

#### Variable fonts to the rescue?
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=0)** - [Instructor] In the previous example where I self hosted Playfair Display, I mentioned when I downloaded this whole font family from Google, I got both the variable version and the static version, and this has a significant impact on performance.
>
> **[0:14](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=14)** To understand why we need to understand how fonts work.
>
> **[0:16](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=16)** So let me briefly explain.
>
> **[0:18](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=18)** When you go to Google fonts or anywhere else to use a custom font, you can select which styles you want to use.
>
> **[0:24](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=24)** So you can say I once the regular 400 and I also want italic 400 and I want, let's see semi bold 600 and then bold 700.
>
> **[0:35](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=35)** And as I do this, I'll get a list of different font files that are downloaded.
>
> **[0:40](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=40)** And you'll notice that here we have regular 400, 400 italics, 600.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=44)** These files correspond with the files that are sitting here inside the static folder.
>
> **[0:48](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=48)** So if I want different weights and styles of fonts, in the past, I had to then download one font file for each of the weights.
>
> **[0:56](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=56)** So regular and then medium itallic and medium and italic.
>
> **[1:01](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=61)** And like you have to have a single file for each style and that means to more variations of fonts you are displaying on a page, the more files you are downloading, and this becomes very unperformant really fast.
>
> **[1:12](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=72)** To get around this problem, designers will then choose to use only one font weights and only one font styles that you only get two files.
>
> **[1:19](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=79)** But that's unnecessarily restrictive for designers.
>
> **[1:23](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=83)** This is why we now have variable fonts and variable fonts have really interesting.
>
> **[1:28](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=88)** So if I go to Playfair Display, you'll notice this is a variable font.
>
> **[1:32](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=92)** And if I scroll down to the bottom of this page here, there's a display showing me how I can vary this font.
>
> **[1:38](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=98)** A variable font, unlike a static font, is a font that describes to the browser how it should be rendered.
>
> **[1:44](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=104)** So I can set a variable between say 400 and 900 that impacts the weight of the font and then I can pick any number between 400 and 900.
>
> **[1:54](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=114)** And the same font file will then generate different widths.
>
> **[1:58](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=118)** And this gives designers way more options in terms of how heavy or thick they want this font to be.
>
> **[2:05](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=125)** And it also means instead of downloading many different files for these different weights, we download a single file that allows for all of these weights.
>
> **[2:13](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=133)** The way that these fonts are set up is typically that there's two files.
>
> **[2:17](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=137)** There's one for italic variable and one for regular variable.
>
> **[2:20](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=140)** So you still need those two files, but it also means you only need two files, not five or six or seven or eight, depending on how many weights you have.
>
> **[2:28](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=148)** Variable fonts are still a relatively new technology but it's gaining popularity really fast and it's supported across the deck on all modern browsers.
>
> **[2:37](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=157)** If you are curious about variable fonts and how to use them in your projects, the first thing you should do is go to a source like Google Fonts and check show only variable fonts.
>
> **[2:46](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=166)** So you get the fonts that have variable versions and you'll notice there are a ton of them already and there's more coming online pretty much every day.
>
> **[2:53](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=173)** The second thing you can do is go check out my course on variable fonts in our library because there's a lot more to say about variable fonts.
>
> **[3:00](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=180)** They're incredibly powerful, and you can do some things with them that you previously couldn't do with fonts.
>
> **[3:05](https://www.linkedin.com/learning/developing-for-web-performance/variable-fonts-to-the-rescue?u=76281980&t=185)** And getting a solid understanding of how they've work will also help you deal with performance issues around your fonts.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3), let (2), self (1), this, (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Web fonts on a performance budget
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=0)** - [Instructor] At the start of the course, we talked about performance budgets and I mentioned web fonts can have a significant negative impact on any performance budget.
>
> **[0:07](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=7)** Now that you know how web fonts load and work, I hope you see why.
>
> **[0:11](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=11)** The question then is how do we deal with web fonts if we have a tight performance budget?
>
> **[0:17](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=17)** Here are some suggestions and recommendations.
>
> **[0:20](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=20)** First of all, decide if you need to use a web font at all.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=23)** If you have a tight performance budget, it's worth the effort to investigate system fonts as alternatives.
>
> **[0:28](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=28)** Browsers have a lot more system fonts available now and many of them are quite nice.
>
> **[0:33](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=33)** You'll actually notice a lot of online services are just using a system fonts instead of web fonts because of the performance benefits.
>
> **[0:40](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=40)** If you need to use a web font, make sure you limit the number of font families you use.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=44)** Ideally, you should only use one, or an anything more than two really needs a pretty good reason.
>
> **[0:50](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=50)** Remember, every new font family you add has a direct impact on your performance because every new font family means a new set of font files that need to be downloaded.
>
> **[0:59](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=59)** When picking a web font, make sure you limit the character set of the font to only what you need.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=64)** This reduces the file size for the font file.
>
> **[1:07](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=67)** If you go through a font service, you'll quickly notice you can extend the character set by adding Cyrillic characters, or Asian characters of various different kinds.
>
> **[1:16](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=76)** If you do so, you need to do it because you need those characters, otherwise you're just downloading font files you'll never use.
>
> **[1:22](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=82)** To hit the initial performance budget, you may want to defer loading of the web font using the critical CSS strategy we covered earlier.
>
> **[1:30](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=90)** This seems counterintuitive because it will cause the font to change when this new style sheet is eventually loaded in the browser, but if performance is your top priority, it may be necessary.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=101)** If you go down this path, make sure your fallback font matches your web font closely and remember, it's not a huge issue if you do this because the reloading of the font, or the swap of the font, will only happen on first load.
>
> **[1:55](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=115)** Once the browser has already downloaded the font, it'll sit in the browser cache, so the next page the user navigates to will already have the right font, and if they go away from the site and come back to it later, a couple of days or something like that, they'll still have the same cache, they'll still have the custom font in the cache.
>
> **[2:12](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=132)** And that brings me to the final point.
>
> **[2:13](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=133)** Make sure your web fonts are cached for future use.
>
> **[2:16](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=136)** Font files are automatically cached by the browser and you can extend the life of the cached fonts because they rarely get changed.
>
> **[2:24](https://www.linkedin.com/learning/developing-for-web-performance/web-fonts-on-a-performance-budget?u=76281980&t=144)** This ensures the browser doesn't need to re-download font files every time a page reloads.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Cross-References:** we talked about (1), we covered (1)
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)


### 7. Optimizing Delivery

#### Compress data with Gzip and Brotli
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=0)** - [Instructor] The last step in the performance optimization process centers around optimizing the delivery of assets from your server to the visitor.
>
> **[0:08](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=8)** That's what we'll cover in this chapter starting with compression.
>
> **[0:11](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=11)** Even after all the optimization and minification we've done so far, we can still compress the assets we're serving to the visitor even more using Gzip and Brotli compression.
>
> **[0:22](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=22)** This can be done automatically, manually or both.
>
> **[0:25](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=25)** It all depends on the services you're using and how much effort you're willing to put into compression.
>
> **[0:30](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=30)** There are two main compression types we use here and they have slightly different properties.
>
> **[0:35](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=35)** Gzip is a tried and true standard for web compression.
>
> **[0:39](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=39)** It's widely supported, effective, and can be automated on the server and done on the fly.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=44)** In fact, most web hosts and CDNs actually Gzip your content automatically because it saves them money.
>
> **[0:51](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=51)** So that performance usually comes without you having to do anything.
>
> **[0:55](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=55)** Brotli is a newer entry into the compression space and it does a significantly better job at compression.
>
> **[1:01](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=61)** The downside is Brotli compression takes a lot longer and it's more resource intensive.
>
> **[1:07](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=67)** And when I say a lot longer, I mean a lot longer than Gzip.
>
> **[1:11](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=71)** For this reason, most servers and CDNs do not allow you to do automatic Brotli compression.
>
> **[1:17](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=77)** So if you want to use Brotli, you have to compress your files before they are provided to the servers.
>
> **[1:23](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=83)** You have to do that compression manually, upload the compressed files and then set the server to recognize these compressed files.
>
> **[1:30](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=90)** Compressing your assets manually using Brotli or Gzip can be automated in your tool chain or build process using dedicated tools for your preferred compression algorithm.
>
> **[1:39](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=99)** And it's pretty straight forward.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=101)** And it's just slots into the tool chain along everything else you're doing.
>
> **[1:44](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=104)** If you want to control how your server handles compression, and there's a good chance you do, the team at HTML5 Boilerplate has created baseline configuration files you can use to put together a compression scheme to fit your needs.
>
> **[1:56](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=116)** Here there are examples from many different server types including Apache, Google App Engine, Internet Information Services, Lightpd, Ngix, and Node.js.
>
> **[2:06](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=126)** Let me show you an example from Ngix.
>
> **[2:09](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=129)** These are the settings for automatic compression for Gzip.
>
> **[2:12](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=132)** That means when you upload files into the server, the Ngix system will automatically start compressing all of these files down so that the server serves up compressed falls automatically.
>
> **[2:23](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=143)** You activate this by enabling Gzip compression, you set Gzip to on.
>
> **[2:27](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=147)** Then you can set the compression level and other settings.
>
> **[2:30](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=150)** And finally, you can provide a list of the Gzip types you want to compress.
>
> **[2:35](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=155)** So these are all the file types you want the server to automatically compress.
>
> **[2:39](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=159)** If your host does not already do this, and it's something you need to check before you do anything, but if it doesn't do this, I recommend turning on Gzip for most of your file types, because it will reduce the size of the files that are sent and it'll improve performance.
>
> **[2:53](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=173)** You may also want to consider setting up Brotli compression, but here, like I said, you have to do the compression yourself and upload the compressed files to the server.
>
> **[3:02](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=182)** The way you do that in Ngix is by setting Brotli static to on.
>
> **[3:06](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=186)** You can actually also set Gzip static to on if you want to.
>
> **[3:09](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=189)** Already compress your files before you send them up.
>
> **[3:12](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=192)** But generally speaking, we only do this with Brotli.
>
> **[3:15](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=195)** Once you activate Brotli compression on the server, you can upload Brotli compressed files to the server and it'll automatically pass them on to the browser for you.
>
> **[3:23](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=203)** Now, this is important, before you dive into any custom server configuration, check out the documentation for your host and your CDN to make sure you're not doing work they're already doing automatically.
>
> **[3:35](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=215)** If in doubt, contact your providers directly and ask about their compression schemes.
>
> **[3:40](https://www.linkedin.com/learning/developing-for-web-performance/compress-data-with-gzip-and-brotli?u=76281980&t=220)** Chances are they're already using heavy compression on your assets and you can just optimize your build process to fit into their compression scheme instead of setting up everything yourself.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), static (2), let (1), finally, (1), pass (1)
> **CLI Commands:** apache (1), node (1), make (1)
> **Env Vars:** html5 (1), cdn (1)
> **Definitions:** is a  (2)
> **File Paths:** node.js (1)
> **Documentation:** the documentation (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)

#### Server push
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=0)** - [Instructor] One of the big promises of the HTTP 2 protocol was the introduction of server push, allowing the server to literally push assets to the client before those assets were requested.
>
> **[0:11](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=11)** Here's the idea.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=12)** Traditionally, when a request for a web page goes to the server, the server returns the web page, the HTML document, and the browser starts rendering that HTML document and discovers that, "Hey, I need a CSS file."
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=23)** So it sends another request to the server and the server returns the CSS file.
>
> **[0:28](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=28)** Then the browser discovers, it also needs a JavaScript file and another request is sent to the server and another file is sent back from the server, and all of this takes a long time.
>
> **[0:36](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=36)** Server push allows you to configure the server to say, "If you're requesting this HTML document, "I know you'll also need this CSS file "and this JavaScript file, so I'll send them along as well."
>
> **[0:48](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=48)** And a request for one file results in three files being returned.
>
> **[0:52](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=52)** When the browser discovers it needs the CSS and JavaScript file in this circumstance, they are already in the browser cache.
>
> **[0:58](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=58)** Server push is typically configured using the link HTTP header, and it looks like this.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=64)** You say link and then you define the file you want.
>
> **[1:07](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=67)** You set relationship to preload as, and then the type of file it is, style or image or whatever it is, and then the file will automatically be preloaded.
>
> **[1:16](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=76)** Same with images, you define the image, rel=preload; as=image.
>
> **[1:20](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=80)** When the HTTP request is sent in this circumstance the link header has a list of these assets to be pushed.
>
> **[1:26](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=86)** And this is where things get a little bit sticky.
>
> **[1:29](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=89)** To use server push, you have to be able to manipulate the HTTP headers in the document, and this is not done using HTML.
>
> **[1:36](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=96)** It has to be done at the server level.
>
> **[1:38](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=98)** If you're using good old fashioned PHP, you can easily manipulate the headers on the fly because your pages are generated on the server.
>
> **[1:45](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=105)** But for static site generators, for example, this gets a lot more complicated.
>
> **[1:49](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=109)** You have to configure the server to know which files should call which other files to be pushed, and it becomes a huge logic chain that you need to set up.
>
> **[1:57](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=117)** Additionally, you have to be very specific about what resources you're pushing to the client to avoid pushing too much or pushing irrelevant content to them.
>
> **[2:06](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=126)** So there are performance benefits here, but they come at quite a lot of development cost and they can also easily open the door to accidentally pushing too much content to the client.
>
> **[2:17](https://www.linkedin.com/learning/developing-for-web-performance/server-push?u=76281980&t=137)** The bottom line is you can absolutely use server push in modern applications and you should do so in situations where it's needed, but even a basic example of how to do this in a modern application falls well outside the scope of this course because the approach is tied to the server infrastructure in use.

> [!info]- Semantic Content
>
> **Env Vars:** http (4), html (4), css (4), php (1)
> **Prerequisites:** configure (2), set up (1)
> **Code Keywords:** this. (1), static (1)
> **CLI Commands:** php (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Preloading vs. prefetch
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=0)** - [Instructor] When we know the browser will need an asset, we can preload that asset into the browser cache before the browser needs it.
>
> **[0:07](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=7)** You've already seen an example of how this is done when we've worked with web fonts.
>
> **[0:10](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=10)** Here's that example one more time.
>
> **[0:12](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=12)** What happens when the browser encounters this preload link element is this element now gets priority loading and is stored in the cache.
>
> **[0:20](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=20)** This is important to note because it means you have to be careful about what you preload.
>
> **[0:24](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=24)** Preloading is quite literally jumping the normal loading queue, so it should only be used for critical resources you know you'll need right away.
>
> **[0:32](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=32)** For everything else, images, non-critical styles, non-critical JavaScript, et cetera, the browser will load them when they become relevant and we should not preload them.
>
> **[0:41](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=41)** When preloading assets, like scripts or fonts or links or images, make sure you set the as attribute to describe what this asset is.
>
> **[0:49](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=49)** If you don't do this, you get a performance hit just by how the browser works.
>
> **[0:53](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=53)** There's also prefetch, which is slightly different.
>
> **[0:56](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=56)** Prefetch is used anytime you want the browser to load a resource which you believe will be used in the future.
>
> **[1:03](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=63)** For example, the next page in a sequence, like a shopping cart, or if you have some JavaScript you know someone will eventually need, but it's not going to be triggered until later in the process.
>
> **[1:14](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=74)** While preload has priority, prefetch has low priority because it assumes this asset will be used sometime in the future.
>
> **[1:22](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=82)** In this example, I'm prefetching an image.
>
> **[1:24](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=84)** You can also use prefetch to prefetch an actual page in your site or something else if you want to.
>
> **[1:29](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=89)** Be careful about what you prefetch because here you're actively making the browser download content it does not need yet and will not use immediately.
>
> **[1:38](https://www.linkedin.com/learning/developing-for-web-performance/preloading-vs-prefetch?u=76281980&t=98)** Prefetch should only be used for assets which will most likely be used by the visitor in the future, and when in doubt, just don't do any of this at all and leave the browser to do its job the way it's supposed to be done.

> [!info]- Semantic Content
>
> **Code Keywords:** else, (1), this, (1)
> **Warnings:** be careful (2)
> **CLI Commands:** make (1)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Browser caching
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=0)** - [Instructor] Every file the browser receives in response to a request will be stored by the browser in its cache for later retrieval.
>
> **[0:06](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=6)** This ensures you don't have to re-download the style sheet and JavaScript and images and everything else every time you navigate to a page you've already visited.
>
> **[0:14](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=14)** You can control the caching of all of these assets on your site to either prolong or shorten the time an asset is cached, depending on your needs.
>
> **[0:22](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=22)** The recommendation is to try to cache assets in the user's browser for as long as possible unless you have a good reason not to.
>
> **[0:30](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=30)** In most server configurations, you can specify the caching strategy for individual file types.
>
> **[0:35](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=35)** In the server config examples provided by the HTML5 Boilerplate Team, you can get Boilerplate code for all of this as in this example for Nginx.
>
> **[0:45](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=45)** Here, you can see we have a list of all the different file types.
>
> **[0:48](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=48)** We have default caching length, we have no content caching length, we have CSS caching length of one year.
>
> **[0:55](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=55)** There are all these different types of content and you can sift through and find the types of content you want to cache and set the length of each of these caches.
>
> **[1:04](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=64)** What you'll notice when you go through this is for the most part, you want to have very long caches, like a year or at least a month, but for certain types of assets, maybe assets that will change a lot over time, you may want to reduce that length down or you may even want to set it to zero because this needs to be updated all the time.
>
> **[1:21](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=81)** All this said, if you're using a CDN, chances are there's already a caching strategy in place set by the CDN based on what makes the most sense for the CDN.
>
> **[1:31](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=91)** And what makes the most sense for the CDN will almost always make the most sense for you as well because they care deeply about performance, since performance is how they make their money.
>
> **[1:41](https://www.linkedin.com/learning/developing-for-web-performance/browser-caching?u=76281980&t=101)** So, as with compression, investigate the existing caching strategies for your host and your CDN before embarking on advanced customization and aim to build on the defaults they provide rather than building something from scratch.

> [!info]- Semantic Content
>
> **Env Vars:** cdn (5), html5 (1), css (1)
> **CLI Commands:** make (2), nginx (1), find (1)
> **Exercise Files:** boilerplate (2), download the (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### CDNs
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=0)** - [Instructor] No matter what type of site or service, or app you're running, leveraging a CDN will have a significant positive impact on your performance.
>
> **[0:08](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=8)** These services are built specifically to improve the performance of your sites and have added benefits, including closer delivery distances to your visitors, protection from spam and DDoS attacks and advanced automated optimizations you often can't do yourself.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=23)** A CDN is a content delivery network connected to your hosting server.
>
> **[0:28](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=28)** Without a CDN, every visitor has to get files from your server, with a CDN, the CDN grabs a copy of your site, caches it and distributes it to all of its distributed servers, and the visitor gets a copy from whatever CDN server is closest to them, that way, the user gets much faster access to your site and the load on your hosting provider is far less severe.
>
> **[0:52](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=52)** Many CDNs also automate some of the optimizations we've covered in this course.
>
> **[0:57](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=57)** As an example, Cloudflare, a popular CDN can be configured to automatically generate and save WebP versions of all images on your site, and then serve it to browsers supporting that image format.
>
> **[1:09](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=69)** This is done on the fly and without you having to generate WebP yourself.
>
> **[1:13](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=73)** In fact, right in the documentation it tells you not to generate WebP to ensure that older browsers get images in a format they understand.
>
> **[1:22](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=82)** The CDN just does a better job at converting WebP than you can do.
>
> **[1:26](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=86)** CDNs provide significant performance benefits for you, and also offload a lot of traffic from your web host.
>
> **[1:33](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=93)** So many web hosts now provide simple one-click setups for CDNs, or even automatically add your sites to a CDN.
>
> **[1:40](https://www.linkedin.com/learning/developing-for-web-performance/cdns?u=76281980&t=100)** In short, adding a CDN to your website or web app is an essential part of your performance strategy, and learning how to take full advantage of all the features your chosen CDN has to offer, including image optimization and cash management and automated compression, and all of that stuff, will further improve the performance score of your site.

> [!info]- Semantic Content
>
> **Env Vars:** cdn (11)
> **Definitions:** is a  (1), is an  (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Thank you
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-for-web-performance/thank-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-for-web-performance/thank-you?u=76281980&t=0)** - [Morten] That's it, you reached the end of the course, and by now, you should have a solid understanding of how to improve the performance of whatever web project you're working on.
>
> **[0:08](https://www.linkedin.com/learning/developing-for-web-performance/thank-you?u=76281980&t=8)** Like I said in the beginning, this course provided an overview of performance issues and how to solve them.
>
> **[0:14](https://www.linkedin.com/learning/developing-for-web-performance/thank-you?u=76281980&t=14)** Now I'm challenging you to dig into your own project, and start applying these performance best practices and tools to make it as performant as possible.
>
> **[0:23](https://www.linkedin.com/learning/developing-for-web-performance/thank-you?u=76281980&t=23)** Web performance is a rapidly evolving field, and there are a ton of resources out there to get up-to-date information.
>
> **[0:29](https://www.linkedin.com/learning/developing-for-web-performance/thank-you?u=76281980&t=29)** The two I always consult are the performance sections of [web.dev](https://web.dev) and the MDN Web Docs.
>
> **[0:37](https://www.linkedin.com/learning/developing-for-web-performance/thank-you?u=76281980&t=37)** As you work through your own performance issues, I recommend checking out these resources to get up-to-date information.
>
> **[0:44](https://www.linkedin.com/learning/developing-for-web-performance/thank-you?u=76281980&t=44)** Now all that's left for me to say is (speaks Swedish), go build a more performant web, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), go build (1)
> **URLs:** [web.dev](https://web.dev) (1)
> **Env Vars:** mdn (1)
> **Cross-References:** in the next (1)
> **Documentation:** mdn (1)
> **Definitions:** is a  (1)
> **Speakers:** - [morten] (1)


## Path Context

### In [[Advance Your Skills in HTML]]
← [[HTML- Structured Semantic Data]] | **11 of 11**

### In [[Become a JavaScript Developer]]
← [[HTML Essential Training]] | **10 of 13** | [[JSON Essential Training]] →

## Appears In

- [[Advance Your Skills in HTML]]
- [[Become a JavaScript Developer]]

## Related Courses

_Courses sharing skills:_

- [[Building Angular and Django Apps]] — Web Application Development
- [[Express Essentials- Build Powerful Web Apps with Node.js]] — Web Application Development
- [[Search Techniques for Web Developers]] — Web Application Development
