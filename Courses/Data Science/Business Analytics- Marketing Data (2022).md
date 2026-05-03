---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: business-analytics-marketing-data-2022
url: "https://www.linkedin.com/learning/business-analytics-marketing-data-2022"
duration_minutes: 34
duration: 34m
level: Beginner
updated: 2/2/2022
learners: 120391
skills:
  - Marketing Analytics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHCjNKkew5HHg/learning-public-crop_675_1200/B4EZoYWZyJGcAY-/0/1761345117651?e=2147483647&amp;v=beta&amp;t=HB1Sf0Ztr8xP5kXFtbRL2rboUUFTDWJNhZm3UkpkNPQ"
linkedin_topic: Data Science
learning_paths:
  - '[[Get Ahead in Business Analytics and Analysis]]'
prev_courses:
  - '[[Requirements Elicitation for Business Analysis- Stakeholder Conversations]]'
next_courses:
  - '[[Business Analytics- Sales Data (2022)]]'
path_nav: '[{"path":"Get Ahead in Business Analytics and Analysis","position":18,"total":19,"prev":"Requirements Elicitation for Business Analysis- Stakeholder Conversations","next":"Business Analytics- Sales Data (2022)"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/marketing-analytics
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Business%20Analytics-%20Marketing%20Data%20(2022).md)

![Business Analytics: Marketing Data (2022)](https://media.licdn.com/dms/image/v2/D4E0DAQHCjNKkew5HHg/learning-public-crop_675_1200/B4EZoYWZyJGcAY-/0/1761345117651?e=2147483647&amp;v=beta&amp;t=HB1Sf0Ztr8xP5kXFtbRL2rboUUFTDWJNhZm3UkpkNPQ)

# Business Analytics: Marketing Data (2022)

> The sales data at your organization can tell you more than how much revenue you earned. The information you’re generating can be used to produce powerful insights for your entire organization. In this focused course from John David Ariansen, you can learn how to use business analytics tools and techniques to harness your sales data and help your organization get more leads, close more deals, and u

> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-marketing-data-2022) | 34m | Beginner | 120K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Gaining marketing insights](#gaining-marketing-insights)
- [**1. Intro to Marketing Data**](#1-intro-to-marketing-data) (4 videos)
  - [The value of data](#the-value-of-data)
  - [Common challenges](#common-challenges)
  - [Data source map](#data-source-map)
  - [Types of analysis](#types-of-analysis)
- [**2. Marketing Data Metrics and Goals**](#2-marketing-data-metrics-and-goals) (3 videos)
  - [Tools for studying your data](#tools-for-studying-your-data)
  - [Metrics to track](#metrics-to-track)
  - [Goals in Google Analytics](#goals-in-google-analytics)
- [**3. Utilizing Data Visualization**](#3-utilizing-data-visualization) (3 videos)
  - [Data visualization basics](#data-visualization-basics)
  - [Reporting infrastructure](#reporting-infrastructure)
  - [Marketing dashboard](#marketing-dashboard)
- [**4. Evaluating Your Marketing**](#4-evaluating-your-marketing) (4 videos)
  - [Key performance indicators](#key-performance-indicators)
  - [Click-through rates](#click-through-rates)
  - [Open rates](#open-rates)
  - [Finding insights in dashboards](#finding-insights-in-dashboards)
- [**5. Resources for Business Analytics**](#5-resources-for-business-analytics) (3 videos)
  - [Engaging with community forums](#engaging-with-community-forums)
  - [Utilizing Reddit](#utilizing-reddit)
  - [Watching YouTube](#watching-youtube)
- [**Conclusion**](#conclusion) (1 videos)
  - [Time to analyze](#time-to-analyze)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Gaining marketing insights](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/gaining-marketing-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/gaining-marketing-insights?u=76281980&t=0)** - As you run your marketing campaigns for your organization, you're generating a ton of data, and that data can tell you a lot about your customers, from what messages they respond to, to when they're likely to buy, to even where they shop. Now, it's one thing to capture this data, but the true power lies in how you process, analyze, and generate insights from your marketing efforts, and that's what this course is all about. My name is [[John the Ripper|John]] David Ariansen, and I'm the co-founder of Silvertone Analytics. I also host the How to Get an Analytics Job podcast, where we've interviewed over 100 experts in the analytics space. And in this course, I'm going to share how you can use your marketing data to supercharge your business. I'll share the basics of analytics best practices like [[Data Governance]], and how to make data-informed decisions. Then, I'll show you how to track your marketing data effectively. This ensures that you're going to have a rich set of data that you can mine for insight. By the end of this course, you'll be ready to leverage your marketing data to make better decisions and close more deals. So if you're ready, then let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (1), [[Data Governance]] (1)
> **CLI Commands:** make (2)
> **Speakers:** - as (1)


### 1. Intro to Marketing Data

[↑ Back to Table of Contents](#table-of-contents)

#### [The value of data](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/the-value-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/the-value-of-data?u=76281980&t=0)** - Marketing data helps you understand where you're resonating out on the marketplace. Things like clicks, likes, opens, and shares are a clear signal of what is and what is not working. If you're actively listening to the signal, then you have the ability to hone in on your potential customer base. This signal can inform multiple facets of marketing. First, studying marketing data can greatly inform your marketing message. For example, when one [[Email Marketing]] campaign gets significantly more traction than another, that's a clear signal that one campaign has a solid message and the other isn't speaking in a way that moves your customer base. Secondly, marketing data can help you understand which channels to use. Starting out, you should probably try a lot of different marketing channels. But as time goes on, you'll start to focus your marketing on the channels that provide the biggest return. For my consulting business, [[Facebook]] ads didn't move the needle much, but [[LinkedIn]] ads had a much better return. And third, you can use data to inform when and where you are targeting your audience. If your customer base is mainly in the US, you probably don't want to pay for ads that run at 4:00 a.m. unless you are targeting insomniacs or extremely early risers. To illustrate how you can leverage marketing data, let me tell you about a recent consulting project that I worked on. I segmented the top-performing email campaigns and the worst performing email campaigns, and then studied the differences.
>
> **[1:32](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/the-value-of-data?u=76281980&t=92)** The most compelling insight was that I found the emails with the subject lines of 25% or less of a discount were opened at a rate three times higher than those with 75% or higher of a discount. This helped the management team validate a long-held assumption that their consumers were not buying on price, they were buying on prestige. How are you targeting your customers? Is it data-driven? It very well may be time for you to dive deep into your data for insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Email Marketing]] (1), [[Facebook]] (1), [[LinkedIn]] (1)
> **Ports:** :00 (1)
> **Analogies:** for example (1)
> **Speakers:** - marketing (1)

#### [Common challenges](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/common-challenges-14531767?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/common-challenges-14531767?u=76281980&t=0)** - [Narrator] Your marketing data can get pretty complex rather quickly. In this video, I will explain some of the common challenges and ensuring that your marketing data is being tracked effectively and stored in a way that you can use later for analysis. First, you need to understand what a goal conversion is and how you can track this. [[Google]] Analytics is the strongest tool in terms of tracking marketing data. It helps you understand how potential customers are interacting with your website. The aspects of Google Analytics that makes things complicated are goals. These are specific events that a potential customer completes, such as an email signup or a form completion, that you set up for Google Analytics. These goals are your website's KPIs. And depending on what kind of website you have, there are different kinds of goals that are appropriate. This is why creating goals cannot be automated. Second, you need to be able to tie all your marketing data sources together. This helps you get a full picture of what's going on within your marketing efforts. It's important that your marketing data doesn't live in its own silo. You need to understand which of your marketing efforts are not only having an impact in terms of likes, views, and comments, but also what's driving sales. You can get this job done by using data visualization tools like [[Tableau]] or [[Microsoft Power BI|Power BI]]. They allow you to connect to multiple data sources and create visualizations that span these different data sources.
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/common-challenges-14531767?u=76281980&t=93)** Now you know two common challenges that can get in the way of harnessing your marketing data. Understanding the problem is the first step in getting it solved. You may want to hire an expert to address these two issues if your organization is struggling in these areas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Tableau]] (1), [[Microsoft Power BI|Power bi]] (1)
> **Analogies:** such as (1), picture (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Data source map](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/data-source-map-14529792?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/data-source-map-14529792?u=76281980&t=0)** - [Instructor] If your organization is doing a good job of tracking data, then there will be a lot of moving parts. Not only in terms of different data sources, but these data sources may show up in different types of data. Some may show up in [[Microsoft Excel|Excel]], while others may show up in a [[SQL]] database. I created this map to simplify the system. You can see marketing data in the top-left of the map underneath sales data. Marketing data is an internal data source. This means that the responsibility of collecting this data ultimately falls on your shoulders. The overall goal with this data source is to optimize your marketing efforts, or in other words, you want to grow your marketing footprint. Studying sales data can help you uncover which of your offerings are performing well out in the marketplace. These hot offerings are probably a good place to start in terms of marketing, as they are already out there making waves in the marketplace. You can also study when and where sales are occurring to help guide your marketing campaigns and find the best place and time to market specific offerings. Psychographic data can really help inform how you put together your marketing message. A simple survey can uncover what parts of your offering are really hitting the mark. For example, if your customers are raving about a specific feature, you should have that feature front and center in your marketing message. Psychographic data can also help focus your marketing on the demographics that really like
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/data-source-map-14529792?u=76281980&t=93)** a specific product or service. This will help boost your return on investment for your marketing efforts. Finally, you have external data sources which can help focus your marketing even further. For example, a common form of external data sources is competitive intelligence. You can find out which of your direct competitors' product or service has a low review. These are low-hanging fruit in terms of competition. You can target these specific offerings and really dominate the marketplace. You can also buy consumer reports. This will help you uncover trends out in the marketplace. Recognizing these trends will help you put the right product in front of the right audience. Now you can start to picture how various data sources can be leveraged to grow your marketing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[SQL]] (1)
> **Definitions:** is an  (1), means that (1), in other words (1)
> **Analogies:** for example (2), picture (1)
> **CLI Commands:** find (2)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Types of analysis](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/types-of-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/types-of-analysis?u=76281980&t=0)** - [Instructor] Analytics is a pretty broad catchall term, but there are three specific types that you should know about: descriptive, predictive and prescriptive. Each of these types build off the previous type of analysis that came before. First, we have descriptive analytics. This type of analytics is by far the most common. It looks back at your historical trends to shed light on what's working, and it mostly leverages internal data sources that your organization is actively creating, such as sales or marketing data. The second type of analytics is predictive. This phase is quite a bit more sophisticated than descriptive, as it leans on more advanced [[Forms]] of calculations to get the job done, such as [[Linear Regression]] modeling. This phase builds off of descriptive analytics in that you need solid data sources with a lot of data to create an effective predictive model. Last we have prescriptive analytics, and this form takes [[Predictive Analytics]] even further by not only predicting the future but also providing a recommendation on how you can capitalize on these potential future recurrences. This process is often referred to as creating an optimization model. In this course, we will be focusing mainly on descriptive analytics. I wanted to define and outline all three stages so that you can better navigate the analytics space. If you were very new to collecting data, then you probably should not spend too much time focusing on predictive or prescriptive.
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/types-of-analysis?u=76281980&t=93)** That being said, the concepts covered in this video will give you a future vision of what your organization's analytics might look like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Linear Regression]] (1), [[Predictive Analytics]] (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Marketing Data Metrics and Goals

[↑ Back to Table of Contents](#table-of-contents)

#### [Tools for studying your data](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/tools-for-studying-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/tools-for-studying-your-data?u=76281980&t=0)** - [Instructor] If you've got great [[Data Governance]] in place, your marketing data will start to pose new challenges to you. As you scale up the amount of data you're collecting, analyzing this data becomes much more of a challenge. Luckily, there are a few tools out on the market that will help make this task a whole lot more manageable. First, you have [[Microsoft Excel|Excel]]. Excel is by far the most popular data analysis tool out on the market. It is very easy to learn, but at the same time, provides a rich set of capabilities. You could learn how to create a PivotChart in no time at all and start slicing through your data for insights. On the other hand, if you wanted to take more time to learn the tool, you could learn the coding language, VBA, and start creating automated scripts that will run in the background and conduct your analysis. Excel is powerful enough to pull off descriptive analytics with no problem at all. You can create charts, find specific insights about your data, create optimization models, and also combine data sources together through a VLOOKUP function. Next, we have data visualization tools such as [[Tableau]] or [[Microsoft Power BI|Power BI]]. They build off the same functionality of a PivotChart, but add in the capability of extremely powerful data visualizations. Data visualization is the process of turning raw data into [[Infographics]] that clearly demonstrate trends within your data sources. You can even combine multiple data visualizations together to create a dashboard.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/tools-for-studying-your-data?u=76281980&t=94)** A dashboard is a collection of data visualizations that are oftentimes interactive. This gives you the ability to drill down into your data with just a click of a mouse. [[Dashboards]] fall under the umbrella of reporting infrastructure. This means that once you've done the work of identifying your key metrics, an effective dashboard will allow you to monitor changes in these metrics, which can really inform your [[Decision-Making]] process. It gives you the ability to intervene when your key metrics just aren't trending the way that you want. On the flip side, when your key metrics are trending up, you can drill down into your data and figure out why and exacerbate these trends. These kinds of insights can have a huge impact on how you run your organization. I've created quite a few dashboards that hook directly into my client's [[Google]] Analytics account with Tableau, and I can very quickly build them a dashboard that looks into revenue and sessions by location, channel, webpage, gender and other demographics. This kind of a dashboard can really help them understand why they need to focus on their marketing efforts. Are you currently using any of these tools? There are a ton of resources online. So now might be the perfect time for you to dig in deep and start taking your analysis to the next level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Tableau]] (2), [[Dashboards]] (2), [[Data Governance]] (1), [[Microsoft Power BI|Power bi]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** vba (1), vlookup (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Metrics to track](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/metrics-to-track?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/metrics-to-track?u=76281980&t=0)** - [Instructor] Can you quickly tell me which aspects of your marketing are really hitting the mark and which aspects need some work? Marketing can be tough. This is especially true if you're starting out with a brand new ad campaign or if you're expanding into a new market. Effectively tracking and studying your data can help you quickly make sense of the marketing landscape for your product or service. There are three main kinds of marketing data that you should be tracking and studying. First, we have website data. Now you may be thinking this is a little outside of the scope of [[Marketing Analytics]], but I'd argue that your website is your strongest marketing tool. You can track what landing pages are converting, which blog posts are getting the most traction and even see when your customer base is likely to buy by studying when your website is getting the most traction. Second, we have social media data. This can help you see where your messaging is getting the most traction by studying likes, comments and shares on your different social media posts. I actually use social media to help validate which course I should publish. Finally, we have [[Lead Generation]] data. This kind of data is kind of like your marketing engine. You need a certain amount of leads to generate a certain amount of sales. Common lead generation data sources are paid advertisements and [[Email Marketing]] data. The goal here is that you want to maximize your ROI on both your time and dollars spent on marketing.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/metrics-to-track?u=76281980&t=94)** Are you tracking all three kinds of marketing data effectively? I hope this video has given you some ideas on how you can leverage your marketing data to improve your [[Decision-Making]] process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Lead Generation]] (2), [[Marketing Analytics]] (1), [[Email Marketing]] (1), [[Decision-Making]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** roi (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Goals in Google Analytics](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/goals-in-google-analytics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/goals-in-google-analytics?u=76281980&t=0)** - [Instructor] Why does your organization have a website? Is there a specific goal you're looking to achieve? This is the most important question you need to consider when you are trying to figure out how to track your goals in [[Google]] Analytics. Generally speaking, there are three kinds of websites, ecommerce, [[Lead Generation]], and content websites. Depending on which of these three broad categories you fall under, this will affect what kind of goals you are tracking. The first kind of a goal is a destination goal. These kinds of goals are common with ecommerce websites, because they help you understand which buyer paths are really effective. They also help you understand details about who is landing on your checkout page. For example, you can see how many people are arriving, when they are coming, and what they are bringing to checkout. These details can help you make a strategic decision about your marketing efforts. The second kind of a goal is an engagement goal. This is when you track engagement metrics, such as time on page, number of page visits, and the actions your potential customers are taking on your website. These kinds of goals can be really valuable to lead generation websites, as they can help you understand what's getting your potential customers clicking around your website, so future marketing efforts can be better informed. Finally, you have event goals. This tracks when a visitor on your website takes some sort of action,
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/goals-in-google-analytics?u=76281980&t=93)** which could include watching a video, sharing a post on social media, or clicking on an ad. These kinds of goals can help you get a better understanding on your content-based website. Your website may not fit cleanly into the three categories I previously mentioned. For example, your ecommerce store might have a blog related to the type of product that you sell, but this video gives you a very high level understanding of Google Analytics goals and when to use each. Are you tracking your goals correctly?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Lead Generation]] (2)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. Utilizing Data Visualization

[↑ Back to Table of Contents](#table-of-contents)

#### [Data visualization basics](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/data-visualization-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/data-visualization-basics?u=76281980&t=0)** - [Instructor] Data visualization is a powerful tool that helps you uncover insights. Just looking at the numbers in a spreadsheet will not provide you very much value, especially when you're looking to make better data-informed decisions. In this video, I'll walk you through some of the basic concepts to keep in mind when you're visualizing your data. You could spend hours and hours learning all the specifics of a tool like [[Microsoft Power BI|Power BI]] or [[Tableau]], but if you're not making useful [[Dashboards]], all that effort is for nothing. Oftentimes, I see analysts losing the forest for the trees. This is why understanding data visualization is so important. Data visualization has a few fundamental concepts underlying it. The first fundamental is to keep your data visualizations simple. I know we often see beautiful and elaborate data visualizations all over [[LinkedIn]], but for you and your business, you should keep things simple. The next principle is to focus on the important metrics. You'll often have way more data than you will ever use, but don't let that get you distracted. You need to focus on the metrics that really matter to you and your organization. Usually, these are simple metrics like sales and unit costs. It's great that you might be getting a ton of views on your new video, but if it's leading to zero additional sales or leads, then this is just a vanity metric. Vanity metrics are data points that make us feel like we're making progress when we actually are not. The third fundamental is to use the right visualization
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/data-visualization-basics?u=76281980&t=94)** to uncover the trend. There are a few visualizations that have a very specific use. For example, a geo map is a very useful way to see how your data is related spatially. Understanding this will help you know where to focus your sales and marketing efforts. It can also help you plan your inventory more effectively. Another example of a specific visualization having a common use case is a line graph. Line graphs are a great way to show metrics over time. This can really come in handy when you're trying to plan your marketing campaigns. If you have a very seasonal sales trend, this insight should inform when you're spending your marketing dollars. This video was a very short primer on data visualization. If you would like additional information, you should check out the book "[[Storytelling]] with Data" for some data visualization theory. Or if you want a more business-focused book, "The Big Book of Dashboards" is a great resource.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (2), [[Microsoft Power BI|Power bi]] (1), [[Tableau]] (1), [[LinkedIn]] (1), [[Storytelling]] (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Reporting infrastructure](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/reporting-infrastructure-14526897?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/reporting-infrastructure-14526897?u=76281980&t=0)** - [Narrator] Building a reporting infrastructure empowers you to not only track your key metrics, but also quickly drill down into your data when you spot trends. These trends can be positive. "Why is this new marketing campaign so successful?" Or negative. "My website traffic has severely dropped this month." If you have a solid reporting infrastructure in place, you can start to unpack the why of these types of questions. In this video, I will walk you through the core benefits of implementing a reporting infrastructure. First, a solid reporting infrastructure gives you a broad view of your organization. This is really valuable as you might lose sight of the bigger picture in your day-to-day grind. There may be certain trends at the aggregate level that you really need to be clued in on. Looking at an individual ad campaign can provide some insight, but looking at all your ad campaigns together can help you identify patterns, and you can leverage these patterns. For instance, certain topics may be getting more of a reaction from your audience than others. Second, a solid reporting infrastructure gives you the opportunity to optimize your operation. Seeing things from this broader perspective helps you conceptualize what's working and what's not working with your marketing efforts. And last, a reporting infrastructure can help you make better decisions. For example, if you're selling [[Microsoft Products|products]] high on the weekend, then this is most likely a great time for you to advertise.
>
> **[1:37](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/reporting-infrastructure-14526897?u=76281980&t=97)** Your customers are kind of voting with their dollars and you really should be listening. An effective reporting system will help you identify these kinds of trends, which can help supercharge your marketing efforts. Now, you may be doing some ad hoc analysis, and that's great, but I'd argue a one-off report is not going to give you the fully developed picture of your organization, not quite like a reporting infrastructure can. Is it time for you to invest in a reporting infrastructure?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Analogies:** picture (2), for instance (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Marketing dashboard](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/marketing-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/marketing-dashboard?u=76281980&t=0)** - [Narrator] [[Google]] Analytics is a great platform to track your website data. If you're like most businesses, then your website is one of your greatest marketing tools. And it's is a very good idea to understand the trends of how potential customers are interacting with your website. Unfortunately, the native data analysis functionality within Google Analytics is not very robust. This is why it's a great idea to connect the data stored in Google Analytics to a data visualization tool like [[Tableau]] or [[Microsoft Power BI|Power BI]]. Here's an example of what you can do with the data inside Google Analytics. This is a Tableau dashboard. I've connected Tableau directly into a Google Analytics instance. This dashboard looks at sessions and revenue by device, geography, channel traffic source and time. On top of being able to see the data visualized in a way that uncovers insights, you now also have the ability to drill down further into the data. This can help you uncover insights and trends. You can click on the various visualizations in this dashboard, and they will filter the data based on what you clicked on. For example, if we click on mobile, we can see this entire map filtered by just sales and sessions by mobile device. And what's interesting is the trends within North Carolina. So if we drill back out, we can see that North Carolina's doing quite a bit of revenue,
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/marketing-dashboard?u=76281980&t=94)** but unfortunately not on mobile. This is a very potent insight for you to understand, because it's not a good idea to target those consumers in North Carolina with mobile ads. But on the flip side, if we drill down on desktop, we can see that quite a bit of North Carolinians are purchasing via their desktop device. I wanted to walk through this dashboard and one very specific use case so that you can get an idea of what's possible. With a very effective dashboard, you can uncover trends with just a few clicks of the mouse. Are there any specific trends that you'd like to understand about your organization?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (5), [[Tableau]] (3), [[Microsoft Power BI|Power bi]] (1)
> **Definitions:** is a  (4)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 4. Evaluating Your Marketing

[↑ Back to Table of Contents](#table-of-contents)

#### [Key performance indicators](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/key-performance-indicators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/key-performance-indicators?u=76281980&t=0)** - [Instructor] [[Email Marketing]] campaigns generate a ton of data. In this video, we're going to study a sample email marketing data source. We're going to connect that data source to [[Tableau]] and then analyze the three main KPIs which are total emails sent, open rate, and click through rate. Right now we're looking at a fresh Tableau workbook. We aren't connected to any data source. So the first step is for us to pull in some data. If you click connect to data here, you'll have the option to choose which types of files you want to connect to. And this example, the raw data source is an [[Microsoft Excel|Excel]] file. So click [[Microsoft Excel]]. And here we are at a sample email data, click open. Now we are at the data connection screen, and there's only one tab that's really relevant for this use case, and we're going to pull in email campaigns report. So once we've connected to that data source, it allows you to preview all the data points, which everything looks pretty good. Next, we can click sheet one and we're ready to do our analysis. So if you'll remember, the KPIs are total sent, click through rate, and open rate. We can go ahead and pull those KPIs into the workspace. So if we pull total sent in open rate, and click through rate. We now have a KPI chart that shows some of the basic KPIs. But you'll notice something about these rate columns. Unfortunately, they're not formatted correctly.
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/key-performance-indicators?u=76281980&t=93)** It doesn't make sense that a rate is 231 and that's because the aggregation is off. We need to change the aggregation from sum to average, we can do the same for click through rate. Now, zeros, aren't looking so good and that's because we need to format this box so that they show up as percentages. Next we can right click format, select fields and change these percentages. So there you go. Now you have your KPIs visualized correctly. Now, if we want to take this one step further, we can add an interactive component to this. We can use customer list as a filter. We select all, we'll have the opportunity to toggle. Next, we need to select show filter and let's change this to a value slider. So now we can see all of the different lists and how they're performing. The last step is I think we should name this sheet appropriately. Let's call this KPI indicators. So now you've seen how easy it is for someone to connect to a raw email marketing data source and turn it into something that's useful and generating insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Email Marketing]] (2), [[Tableau]] (2), [[Microsoft Excel|Excel]] (1), [[Microsoft Excel]] (1)
> **Env Vars:** kpi (2)
> **CLI Commands:** make (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Click-through rates](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/click-through-rates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/click-through-rates?u=76281980&t=0)** - [Narrator] One effective way of understanding how your customers are interacting with your emails is by studying the unique clicks. In this video, we're going to walk through a very simple case study and look at different customer segments and how they are interacting with [[Email Marketing]] campaigns. Currently I am on a blank [[Tableau]] worksheet and we've connected to an email marketing data source. So the first step is to double-click on Customer List. And the second step is just to pull in Total Unique Clicks. Now, this text table is somewhat useful. You can see each individual customer list and how many clicks it's generating. But I would argue that this is sub-optimal from a visual analytics standpoint. With just a click of the mouse, we can turn this into a visualization that really pops. So if we come over to the Show Me tab and select treemap, we now can see the relationship amongst these different lists. In my opinion, it sounds like we should be sending more email marketing campaigns to this target demographic group because we just don't have very many unique clicks here. One last step, let's change this from Sheet 2 to Unique Clicks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Email Marketing]] (3), [[Tableau]] (1)
> **UI Navigation:** double-click (1)
> **Speakers:** - [narrator] (1)

#### [Open rates](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/open-rates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/open-rates?u=76281980&t=0)** - [Instructor] If you've done a great job at tracking the different types of campaigns that you're running for your [[Email Marketing]] efforts, then you can very quickly study them using [[Tableau]]. I am on a blank Tableau worksheet here, and I connected to some raw sample email marketing data. So, what we're going to study is this email campaign type. And we're going to look at the open rate across the different types of campaigns. All we need to do is double click on Campaign Type, and we can click on Open Rate. Now, we need to format these numbers because they are all added together instead of being averaged so, now, we can very quickly change the aggregation from Sum to Average. And one more step in terms of formatting is that we should probably change this from a decimal to a percentage, so we can right-click Format, and change these fields to being formatted as a percentage. Now, I don't personally like a text box. I think you can't really tell the difference between these percentages too well. So let's change this from a text box to a stacked bar chart. And now let's change it to Entire View. And one more step, let's change the campaign type to Color. So now, we can see the different campaigns and how they are performing in terms of an open rate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Email Marketing]] (2), [[Tableau]] (2)
> **UI Navigation:** click on (2), right-click (1)
> **Speakers:** - [instructor] (1)

#### [Finding insights in dashboards](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/finding-insights-in-dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/finding-insights-in-dashboards?u=76281980&t=0)** - [Instructor] A dashboard is a great way of finding insights in your data. In this video, we're going to combine multiple data visualizations related to [[Email Marketing]] and build out an email marketing dashboard. I'm looking at a [[Tableau]] workbook that has three individual sheets, and each one of these is a visualization looking at an email marketing dataset. The first step is to click the New Dashboard tab. Now we have our workspace here where we can build out our dashboard and the individual sheets that we have to choose from. So let's pull some of these sheets into the workspace. So now we have a very basic dashboard. But let's format it a little bit better because we have all this white space that's not being taken advantage of. Let's drag Customer List down here, Campaign Type, and Total Unique Clicks. So now we're starting to use a whole lot more of the workspace. We want these visualizations as big as we possibly can get them. Now to make this interactive, what we can do is click on one of these individual visualizations and click this Filter tab right here. Now what this is doing is it's enabling us to now filter the entire dashboard based on type of campaign. So now we can see how the Awareness Email Campaigns are performing. We can see the Total Unique Clicks and then the KPIs up here. This is a very effective tool
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/finding-insights-in-dashboards?u=76281980&t=93)** when you're working with huge amounts of email marketing data. So now you've seen a very brief walkthrough of someone creating a dashboard with email marketing data. With just a few clicks of the mouse, you can start to build out your own interactive [[Dashboards]] as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Email Marketing]] (5), [[Tableau]] (1), [[Dashboards]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 5. Resources for Business Analytics

[↑ Back to Table of Contents](#table-of-contents)

#### [Engaging with community forums](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/engaging-with-community-forums?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/engaging-with-community-forums?u=76281980&t=0)** - [Instructor] The [[Tableau]] Forums are a great place to learn about [[Marketing Analytics]]. Even if your organization is not currently using Tableau, you can download the free version of Tableau, called Tableau Public, and start analyzing your own data. I've used the Tableau Forums quite a bit over the years, whenever I found myself stuck on a problem. They have a very robust community and are very willing to help you solve Tableau and analytics related problems. All you need to do is start a new conversation thread and community members will respond to your posts, or if you're not so sure on how to articulate your problem, you could simply search for marketing analysis and see what comes up. Now that we've searched for marketing analysis, we can see all of the different conversation threads that have popped up. Let's click on this one. You can see this is quite a detailed question, and it looks like someone has actually answered it correctly. Here's the correct answer, and you can see all of the other people who have responded. So if you're looking to expand your marketing analytics skillset, I would highly recommend you download the free version of Tableau, Tableau Public, and start digging around in your own marketing data. And, remember, if you ever get stuck, you can always reach out for help on the Community Forums.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tableau]] (8), [[Marketing Analytics]] (2)
> **Exercise Files:** download the (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Utilizing Reddit](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/utilizing-reddit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/utilizing-reddit?u=76281980&t=0)** - [Instructor] Reddit is a great resource to learn more about marketing analysis from experts that are currently out in the field. The [[Tableau]] and [[Microsoft Power BI|Power BI]] subreddits are a great tool that I've leaned on from time to time whenever I came across a problem that I wasn't quite sure how to solve. Now, Reddit is not only a good problem-solving tool, though. It's also a great place to learn new ideas and concepts. I'm a visualization expert, so I tend to stick to data visualization-related sub-Reddits. That being said, there are a ton of analytics related communities where people are helping each other out. The r/marketing sub-Reddit is a huge community with 216,000 members. I just typed in analysis into the search tool, and now you can see all the results that came up. This is an interesting post. It's a guide to learning more about customer data. There are all kinds of free resources like this on Reddit. They can help deepen your marketing analysis mindset. Reddit is a huge platform with a ton of communities. Don't hesitate to reach out for help on this site. It's been a great resource for me over the years.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tableau]] (1), [[Microsoft Power BI|Power bi]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Watching YouTube](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/watching-youtube?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/watching-youtube?u=76281980&t=0)** - [Instructor] Most people think of YouTube as a place to watch entertainment videos, but it's actually an amazing place to expand your [[Marketing Analytics]] knowledge. In fact, YouTube has become the second largest search engine, right behind [[Google]]. Analytics content creators like myself have really caught onto this trend and started posting more and more educational content on YouTube as a result. Now, forums are a great way to learn about analytics, but I feel that YouTube takes this learning to a whole new level. Instead of reading text about ideas and concepts, I now can see them in action. On YouTube, you can watch lectures, software tutorials, and so much more. I've searched for marketing analytics in the YouTube search bar and let's take a look at the results. So we have a lecture here. We have even more lectures. It looks like this might be a channel for you to check out, so Analytics University, and there's even some software tutorials. There are thousands and thousands of hours of YouTube content created every single day. If you're looking to deepen your analytics knowledge, I would highly recommend you start using YouTube as a resource.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Marketing Analytics]] (2), [[Google]] (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Time to analyze](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/time-to-analyze?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-marketing-data-2022/time-to-analyze?u=76281980&t=0)** - Congratulations on making it all the way through the course. What you can do now is follow me here on [[LinkedIn]]. I post regularly all about analytics and even [[Marketing Analytics]], in particular. I also have a YouTube channel where I livestream my Greensboro College analytics lectures and also interview analytics experts. On our, How to Get an Analytics Job YouTube channel, we've interviewed over 100 experts where you can hear firsthand from senior analysts, analytics hiring managers, and executives, both in and around the analytics industry. Thank you so much for taking this course. There's one specific video that I wanted to highlight, and it's actually this episode right here. In this podcast episode, Aash Viswanathan, a former LinkedIn data scientist turned analytics expert, talks about his career journey, interesting marketing analytics concepts, such as attribution, and even gives feedback to one of my students who built out a marketing analytics dashboard in [[Microsoft Power BI|Power BI]]. Check out this episode if you want to see a deep dive and how a true expert thinks about marketing analytics day-to-day. Good luck on your journey into the world of marketing analytics, and I'm sure you're going to do great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Marketing Analytics]] (5), [[LinkedIn]] (2), [[Microsoft Power BI|Power bi]] (1)
> **Analogies:** such as (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[John David Ariansen]]
- [[Madecraft]]

## Resources

- Exercise files available

## Skills Covered

- Marketing Analytics

## Path Context

### In [[Get Ahead in Business Analytics and Analysis]]
← [[Requirements Elicitation for Business Analysis- Stakeholder Conversations]] | **18 of 19** | [[Business Analytics- Sales Data (2022)]] →

## Appears In

- [[Get Ahead in Business Analytics and Analysis]]

## Related Courses

_Courses sharing skills:_

- [[Marketing Analytics Foundations]] — Marketing Analytics
- [[Marketing Analytics- Setting and Measuring KPIs]] — Marketing Analytics
- [[Marketing Foundations- Analytics (2021)]] — Marketing Analytics

---

[↑ Back to top](#)