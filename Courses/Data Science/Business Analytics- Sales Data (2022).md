---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: business-analytics-sales-data-2022
url: "https://www.linkedin.com/learning/business-analytics-sales-data-2022"
duration_minutes: 51
duration: 51m
level: Beginner
updated: 2/11/2022
learners: 120391
skills:
  - Business Analytics
  - Sales Analysis
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFni2WiXwJ-qg/learning-public-crop_675_1200/B4EZoYGJT1GoAc-/0/1761340856365?e=2147483647&amp;v=beta&amp;t=Ukun8HOs0BT99Hy8770JHn_wMa1RoLuBAEVsebVH0OI"
linkedin_topic: Data Science
learning_paths:
  - '[[Get Ahead in Business Analytics and Analysis]]'
prev_courses:
  - '[[Business Analytics- Marketing Data (2022)]]'
path_nav: '[{"path":"Get Ahead in Business Analytics and Analysis","position":19,"total":19,"prev":"Business Analytics- Marketing Data (2022)","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/business-analytics
  - skill/sales-analysis
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Business%20Analytics-%20Sales%20Data%20(2022).md)

![Business Analytics: Sales Data (2022)](https://media.licdn.com/dms/image/v2/D4E0DAQFni2WiXwJ-qg/learning-public-crop_675_1200/B4EZoYGJT1GoAc-/0/1761340856365?e=2147483647&amp;v=beta&amp;t=Ukun8HOs0BT99Hy8770JHn_wMa1RoLuBAEVsebVH0OI)

# Business Analytics: Sales Data (2022)

> Your job is far from over after you close a deal. The sales that are happening at your organization can tell you much more than just how much revenue you earned. In this focused course from John David Ariansen, learn how to harness your sales data to create actionable insights that can help your organization get more leads, close more deals, and ultimately grow your book of business. Discover the 

> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-sales-data-2022) | 51m | Beginner | 120K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Generating sales insights](#generating-sales-insights)
- [**1. Sales Data 101**](#1-sales-data-101) (5 videos)
  - [Tools to track sales data](#tools-to-track-sales-data)
  - [Common challenges](#common-challenges)
  - [Sales metrics to study](#sales-metrics-to-study)
  - [Using data source maps](#using-data-source-maps)
  - [How data is structured](#how-data-is-structured)
- [**2. Effective Sales Analysis**](#2-effective-sales-analysis) (6 videos)
  - [Tools for studying your data](#tools-for-studying-your-data)
  - [Building a PivotChart in Excel](#building-a-pivotchart-in-excel)
  - [Data visualization basics](#data-visualization-basics)
  - [Sales dashboard](#sales-dashboard)
  - [Reporting infrastructure](#reporting-infrastructure)
  - [Sales and marketing dashboard](#sales-and-marketing-dashboard)
- [**3. Types of Sales Analysis**](#3-types-of-sales-analysis) (4 videos)
  - [Type of sales analysis](#type-of-sales-analysis)
  - [Identifying seasonality](#identifying-seasonality)
  - [Categorical analysis](#categorical-analysis)
  - [Regional analysis](#regional-analysis)
- [**4. Tools to Analyze Sales Data**](#4-tools-to-analyze-sales-data) (3 videos)
  - [Sales analysis with Google Analytics](#sales-analysis-with-google-analytics)
  - [Sales analysis with Tableau](#sales-analysis-with-tableau)
  - [Sales analysis with Power BI](#sales-analysis-with-power-bi)
- [**5. Additional Resources**](#5-additional-resources) (3 videos)
  - [Tableau forums](#tableau-forums)
  - [Utilizing Reddit](#utilizing-reddit)
  - [Watching YouTube](#watching-youtube)
- [**Conclusion**](#conclusion) (1 videos)
  - [Time to analyze](#time-to-analyze)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Generating sales insights](https://www.linkedin.com/learning/business-analytics-sales-data-2022/generating-sales-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/generating-sales-insights?u=76281980&t=0)** - As you make sales in your organization, you're generating a ton of data, and this data can tell you a lot, especially about your customers, from what they like, to when they're likely to buy and even where they shop. Now, it's one thing to capture this data, but the true power lies in how you process, analyze, and generate insights from your sales data. And that's what this course is all about. My name is [[John the Ripper|John]] David Ariansen, and I'm the co-founder of Silvertone Analytics. I also run the "How to Get an Analytics Job" podcast, where I've interviewed over 100 experts throughout the years. And in this course, I want to share how you can use your sales data to supercharge your business. I'll share the basics of analytics best practices, like [[Data Governance]] and how to make data-informed decisions. Then I'll show you how to track your sales data effectively so you have a rich set of data that you can mine for insights. By the end of this course, you'll be ready to leverage your sales data to make better data-informed decisions. So if you're ready, then let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (1), [[Data Governance]] (1)
> **CLI Commands:** make (3)
> **Speakers:** - as (1)


### 1. Sales Data 101

[↑ Back to Table of Contents](#table-of-contents)

#### [Tools to track sales data](https://www.linkedin.com/learning/business-analytics-sales-data-2022/tools-to-track-sales-data-14574754?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/tools-to-track-sales-data-14574754?u=76281980&t=0)** - [Instructor] If you can study your sales data, then you can identify trends that will lead you to better decisions. But before you can do this, you need to ensure that you're tracking your sales data effectively. There are three great data sources that can help you lay the foundations for sales analytics. First, the most basic and easiest form of tracking sales data involves using credit card payment processing companies like Stripe, Clover, and Square. These tools will accomplish tracking what and when a product was bought, the level of discount among other data points automatically. You can take this one step further with a little bit of a manual setup to include category, location, price point, and many other detailed data points. Using these platforms empowers you to simply download the transaction history into [[Microsoft Excel|Excel]] and start doing some analysis. This data gives you the ability to study your transactions history at the aggregate level, and uncover trends across your whole customer base. For example, you may find that one product is outselling all the other [[Microsoft Products|products]] and you are getting a huge amount of traction on just this one product line. If you have a larger organization or your customers are likely to buy on a repeated basis, you may want to start using a customer relationship management tool or a CRM tool such as Salesforce. It's usually much easier to resell to an existing customer
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-sales-data-2022/tools-to-track-sales-data-14574754?u=76281980&t=93)** than find a brand new one. Now, setting up a CRM is a lot more complicated than just implementing a payment processing software. You need to think hard about what aspects of your customers that you want to track. With Salesforce, you can track purchase history, customer interactions, lead source, industry, buying behavior and customer demographics. All these data points can help you evaluate which of your customers are ready to purchase from you again. And finally, we have an even more advanced way of tracking sales through [[Google]] Analytics. When implemented correctly, Google Analytics enables you to see what marketing campaigns, channels and webpages are leading to sales. Now, Google Analytics can also show you demographic data such as age and location. The setup for Google Analytics can be a little bit tricky. So you may want to hire an expert to handle the implementation. But once you get it up and running, it's a very powerful tool. For example, you need to track goal conversions. But before you can do that you need to define what your goals are for your organization. Some goal conversions could downloads or email signups. You really need to think through what customer actions are valuable for you and your organization. Are you using any of these data sources to track your sales trends? Well, if not, there's never been a better time than now to start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Microsoft Excel|Excel]] (1), [[Microsoft Products|Products]] (1)
> **Analogies:** for example (2), such as (2)
> **CLI Commands:** find (2)
> **Env Vars:** crm (2)
> **Prerequisites:** setup (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Common challenges](https://www.linkedin.com/learning/business-analytics-sales-data-2022/common-challenges-14576735?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/common-challenges-14576735?u=76281980&t=0)** - [Instructor] Data can be messy. I see it all the time in my consulting practice. An organization will want to conduct an analysis but then suddenly realize that they've not been collecting the data necessary for the project. This is where [[Data Governance]] comes into play. Data governance is a process of collecting data effectively and storing it in a way that you can use later for analysis. Data governance shows up differently for different sized organizations. First, you want to ensure that you're effectively tracking each transaction. This enables you to study what was purchased. Time of purchase, channel, location, and category. All these point points will become very valuable when it comes time to do analysis. Ironically, if you are a smaller business, then you probably won't have a hard time tracking your sales transactions. You can simply use a payment processing system like Stripe or Square, which will collect all your sales data automatically. All you need to do is download the raw data file into [[Microsoft Excel|Excel]], and then you're off to the races to do your analysis. If you're a larger business, you may be selling multiple types of product lines to various different types of customers. This can become very complex, very quickly. My recommendation to you, if you fall into this camp is to be very clear about how you track your data and potentially implement a customer relationship management tool like Salesforce. In this platform, you can track when purchases were made, but also data points like industry, buyer persona,
>
> **[1:35](https://www.linkedin.com/learning/business-analytics-sales-data-2022/common-challenges-14576735?u=76281980&t=95)** days to close, and the channel that the lead came through. Next, you want to track demographic information about your customers if it's possible. If you're a small business, a simple survey asked upon checkout on your website will do the trick. This is effective, if you're an [[E-Commerce]] store and not doing in-person sales. On the other hand, larger organizations will probably be using a CRM system and might have an in-person sales team. Just make sure your sales team is proactively tracking as much data as possible. Last be mindful of potential [[Data Quality]] issues. A common type of data quality issue is data duplication. This is when your sales are being counted twice. This could skew the final recommendations that you come up with after you're done with your analysis. Sometimes this can come from a mistake in the [[Data Collection]] process or when an analyst needs to join two data sources together. One way to help solve this challenge is to have an employee really own the role of data governance administrator, but also document how the data flows. Another type of data quality issue is corrupted data, or data that's incorrectly gathered. The most common form of this data quality issue is due to human error, resulting from manual data entry. For example, if your sales team is using Salesforce you'll want to have the lead source data point as a dropdown menu, instead of having the sales rep manually type in that data point. I've now walked you through some of the common challenges of working with data.
>
> **[3:08](https://www.linkedin.com/learning/business-analytics-sales-data-2022/common-challenges-14576735?u=76281980&t=188)** Is your organization struggling with any of these issues?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Governance]] (4), [[Data Quality]] (4), [[Microsoft Excel|Excel]] (1), [[E-Commerce]] (1), [[Data Collection]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** crm (1)
> **UI Navigation:** dropdown (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Sales metrics to study](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-metrics-to-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-metrics-to-study?u=76281980&t=0)** - [Instructor] Total dollar amount of sales is by far the most important metric to track for sales analytics. This is the big key performance indicator. But total sales dollars alone will not offer you much in the way of rich insights. Tracking sales data effectively involves you tracking the most important dimensions of total dollars sold. Which dimensions are important depend on the decisions you're trying to better inform. These decisions can be broken down into what, when, where, how, and why? Let's take a look at the metrics that can help you answer each of these questions about your sales. First, let's focus on what? To answer this question, I would prioritize tracking which product is being sold and breaking them down into categories or assortments. This is especially important if you have very different lines of business. For example, one of my clients sold [[Hardware]], but varying different types of hardware, screws, kitchen appliances, utilities, marine accessories, just to name a few. In situations like these, it makes sense to segment your sales. Marine hardware sales will have a vastly different trend than kitchen hardware, and diving deep and studying these two different assortments separately can really unlock a treasure trove of insight. Second, to address when sales are occurring, I would ensure that my [[Data Collection]] process includes a time dimension or when the purchase occurred. This can really help your organization
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-metrics-to-study?u=76281980&t=94)** target your audience in an effective way, both informing the marketing and sales for the best time to reach out to potential customers. In addition, to helping the supply chain team estimate demand and stocking [[Microsoft Products|products]] accordingly. Next, we have the question of where? To address this question, I would track purchase location. This will help your organization in a similar way to tracking time. It can really help focus your sales efforts so that you are only reaching out to those customers who fall into the demographic area where you're having a lot of sales. Fourth, we have the question of who, which is a little bit trickier than the other dimensions, as you may need to create a customer survey to get this information. This could manifest as a quick three question survey. For example, what's your age, gender, and state? If you collect this at every purchase point, you now have the ability to build out a basic data-informed buyer persona. This buyer persona can really help you focus both your sales and marketing efforts. And last, we have how? Understanding the method of purchase can help you understand how to target your customers more effectively. Your business may be doing 90% of your sales online. So if this is the case, does it really make sense to open up a new physical location? It may be much wiser to invest that capital in digital advertising. So are you tracking all the right dimensions of your sales data?
>
> **[3:06](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-metrics-to-study?u=76281980&t=186)** I hope this video has given you an idea of how rich your sales data can be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (4), [[Data Collection]] (1), [[Microsoft Products|Products]] (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using data source maps](https://www.linkedin.com/learning/business-analytics-sales-data-2022/using-data-source-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/using-data-source-maps?u=76281980&t=0)** - [Narrator] Your organization is generating a lot of data. This data is coming from sales, costs, psychographic and marketing data sources. It's really important to understand how sales data plugs into this broader structure. Sales is arguably your most valuable data source, as the money coming in from these sales is the lifeblood to your organization. Here is a map of how all your data sources are related. Sales data is on the top left and the main goal with this data source is to find ways to scale up sales. Sales and marketing data sources are very closely related. As a solid marketing effort will very quickly help you increase sales, understanding what posts and campaigns are getting the most traction in terms of clicks, likes, comments and shares can help you understand what's making noise out on the marketplace. You really should listen to this signal, as this signal gives you an idea which of your [[Microsoft Products|products]] are in hot markets. Next, we have cost data sources. Combining sales and cost data sources can help you understand which of your products have the highest margin. Another way to look at this is if I could make one more sale across all of my assortments, which would benefit my organization the most? If you want to take it to the next level, you could then layer in marketing, cost and sales data sources together to focus your organization even further. The idea here is that you want to focus on high-margin products that are in very hot markets.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-sales-data-2022/using-data-source-maps?u=76281980&t=94)** Finally, we have psychographic data. This is often collected through surveys and it helps you understand how your customers feel about your product. Identifying the major flaws with your product, and then fixing those issues, will help you grow your sales. Oftentimes, consumers look at price and review rating when they are looking to make their final purchase decision. This is especially true when they're making online purchases. On the bottom half of the map, we have external data sources. A common form of an external data source is competitive intelligence. And this will help you identify which of your products have a competitive edge out on the marketplace. This is a great way to identify where you should spend your sales and marketing efforts. In this video, I gave you a broad context of the data that is influencing your sales. Are there any data points in this map that are missing for your organization?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (4)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2)
> **Speakers:** - [narrator] (1)

#### [How data is structured](https://www.linkedin.com/learning/business-analytics-sales-data-2022/how-data-is-structured-14572810?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/how-data-is-structured-14572810?u=76281980&t=0)** - [Instructor] Your organization is probably creating a ton of data, then storing that data in [[Microsoft Excel|Excel]] or some sort of database. In this video, I'll explain how your data needs to be structured so that you can successfully analyze it. Simply put, your data needs to be deep rather than wide. I've worked with some extremely wide datasets that have had over 1,000 columns. This was a nightmare to try to make sense of, but on the other end of the spectrum, I've worked with some really shallow datasets. If your data only has eight rows, then you're not able to derive any useful insights from studying that dataset. You just don't have enough data points to conduct a deep analysis. Now let's see this in action. I've created these two different datasets in Excel just to illustrate the point I'm making. So we have dataset one, which is in Columns A through C, and then dataset two, which is A through the [[Representational State Transfer (REST)|rest]] of the alphabet. When I mean you need deep datasets rather than wide, I'm talking about this kind of a dataset here. In the second dataset, you have each week as a separate column and this is just not the proper way to structure data if you want to use a data visualization tool. Instead, you need to roll all of the weeks into one single column, like you see in Column C. This enables you to study sales across each of the weeks. And then, since we have Assortment in Column A, then you can start to parse out differences of weekly sales from Assortment A to Assortment B. Now you understand how data needs to be structured
>
> **[1:36](https://www.linkedin.com/learning/business-analytics-sales-data-2022/how-data-is-structured-14572810?u=76281980&t=96)** so that you can conduct some deep analysis. This is the first step before you can visualize your insights, and ultimately, drive your strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Effective Sales Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Tools for studying your data](https://www.linkedin.com/learning/business-analytics-sales-data-2022/tools-for-studying-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/tools-for-studying-your-data?u=76281980&t=0)** - [Narrator] Demand for analytic skills has skyrocketed in recent years, but you don't need to be an expert to mine your sales data for insights. There have been some major developments and tools to support all these analysis that make the task so much easier than ever before. [[Microsoft Excel|Excel]] is by far the most popular data analysis tool out on the market. With just a few hours of practice and study, you can learn how to leverage this tool to find valuable insights in your data. Excel was the tool we used in my master's program to learn the basics of analytics. You can build charts, graphs, and [[Infographics]] right inside this powerful tool. If you wanted to get even more advanced, you can build optimization and predictive models in Excel as well. But if you're new to analytics, descriptive analytics will have a huge impact with very little in terms of time and energy invested. One of the quickest way to learn how to slice your data and find insights is a function called a Pivot Chart. This allows you to build at infographics with just a few clicks of the mouse. Learning this functionality is a breeze, especially if you know the right questions to ask about your data. Next, you have data visualization tools like [[Tableau]] and [[Microsoft Power BI|Power BI]] that build off the same functionality of a pivot chart, but take it to a whole new level. In fact, both Tableau and Power BI can hook directly into Excel and allow you to build extremely powerful visualizations. One of the values of working with data visualization tools is that they afford you the ability to build [[Dashboards]].
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-sales-data-2022/tools-for-studying-your-data?u=76281980&t=94)** A dashboard is a collection of data visualizations that are oftentimes interactive. This gives you the ability to drill down into your data with just the click of a mouse. Dashboards fall under the umbrella of reporting infrastructure. This means that once you've done the work of identifying your key metrics, an effective dashboard will allow you to monitor changes in these metrics which can really inform your decision making process. It gives you the ability to intervene when your key metrics are trending downward. And on the flip side, when your key metrics are trending up, you can drill down into your data and figure out why. These kinds of insights can have a huge impact on how you run your organization. Are you using any of these tools? There are a ton of free helpful resources that can help you learn this skillset. Now is a great time to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Infographics]] (2), [[Tableau]] (2), [[Microsoft Power BI|Power bi]] (2), [[Dashboards]] (2)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [narrator] (1)

#### [Building a PivotChart in Excel](https://www.linkedin.com/learning/business-analytics-sales-data-2022/building-a-pivotchart-in-excel-14576740?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/building-a-pivotchart-in-excel-14576740?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]] is the most popular data analysis tool that's currently out on the marketplace. But there's so many features within Excel that you could get lost rather quickly. In this video, we're going to focus on pivot charts, as they are a mechanism that allow you to very quickly slice through your data and build [[Infographics]] that visualize the underlying trends. Now let's take a look at how easy it is for you to slice through your own data. I'm going to be using the sales data Excel file from the course exercise files. Feel free to pause the video now and pull up this file. Taking a look at the sales data file, you'll see Item Number ID, Average Inventory on Hand, In-Stock Percentage, Sales And Dollar Amount, and Week ID as the column headers. In this exercise, we're mainly going to focus on Sales and Week ID, but it's a good idea if you're building out a pivot chart to highlight the entire data set. So to do that, let's click over to cell A1, hold shift control, select the right arrow button, and then click the down arrow button. So now we've highlighted the entire data set. Next, select Insert, Pivot Chart, and this will pull up the Create Pivot Chart dialog box. You can have that range selected and then hit OK. Now you're looking at the pivot chart interface. You can see all of the different fields you have here that you can select. Then you have the option to add filters,
>
> **[1:32](https://www.linkedin.com/learning/business-analytics-sales-data-2022/building-a-pivotchart-in-excel-14576740?u=76281980&t=92)** legend, axis, and values. So let's click on Sales and add that to Value. And then we can drag Week ID to axis. Now you can see 2017, 18, and 2019 sales. This is a bar chart, though, which is not really the optimal way to visualize time series data. A line graph will be much more appropriate here. So to change the chart type, all you have to do is right-click, and then select Change Chart Type. And we can very simply change it to a line chart. Hit OK. So there you go. With just a few clicks of the mouse, you've now created a visualization. Are there any trends that you'd like to analyze within your own sales data? Now you have a tool to do so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Infographics]] (1)
> **UI Navigation:** select the (1), click on (1), right-click (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data visualization basics](https://www.linkedin.com/learning/business-analytics-sales-data-2022/data-visualization-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/data-visualization-basics?u=76281980&t=0)** - [Instructor] Your sales data most likely lives in an [[Microsoft Excel|Excel]] spreadsheet or a database of some kind. It's nice that you have it stored, but what value are you getting out of your data if you just keep it in its data source? Can you find any trends there, just looking through rows and rows of numbers? Unless you're some kind of genius, probably not. This is where data visualization comes into play. Now the term is somewhat self-explanatory. Data visualization is the presentation of quantitative information in graphical form. The analogy that I like to make is that data visualization is like making picture books for adults. You probably don't have the time or inclination to dive for hours through all of your data sources. An effective data visualization turns this huge amount of information into a visual format that tells a narrative, not unlike a kid's picture book. Data visualization has some fundamental concepts underlying it. The first fundamental is to keep your visualizations simple. I know we often see beautiful and elaborate data visualizations all over social media, but for you and your business, I don't think you should use those kind of visualizations. You need to keep it simple and functional. The next principle is to focus on the important metrics. You will often have way more data than you'll ever use, but don't let that distract you. You need to focus on the metrics that really matter to you. Usually these are very simple metrics,
>
> **[1:32](https://www.linkedin.com/learning/business-analytics-sales-data-2022/data-visualization-basics?u=76281980&t=92)** such as sales or unit cost. It's great that you're getting a ton of views on your new video, but if it's leading to zero additional sales or leads, the views are just a vanity metric. Vanity metrics are data points that make us feel like we're making progress, when, in actuality, we're not. The third fundamental is to use the right visualization to uncover the trend. For example, if you wanted to look at sales over time, you probably shouldn't use a pie chart. In this situation, a line graph would be a much more effective way to visualize this situation. The right visualization is not just limited to type of graph. This expands into other aspects of visualization, such as color. You want to use colors sparingly, though. You want to use just enough to bring attention to the key facts. If you have 35 assortments in your organization, chances are that you don't want a different color for each assortment. A much more effective use of color would be to have a bar chart change color if a certain metric drops below a threshold. For example, if your in-stock rate drops below 80%, you could have that item highlighted in red, while all the other items remain a standard color. This video was a short primer on data visualization. If you would like additional information, you should check out books such as "[[Storytelling]] with Data" for some data vis theory; or if you want a more business-focused lens, "The Big Book of [[Dashboards]],"
>
> **[3:05](https://www.linkedin.com/learning/business-analytics-sales-data-2022/data-visualization-basics?u=76281980&t=185)** which will walk you through effective and ineffective dashboards set in a real-world business setting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (2), [[Microsoft Excel|Excel]] (1), [[Storytelling]] (1)
> **Analogies:** such as (3), picture (2), for example (2)
> **CLI Commands:** make (2), find (1)
> **Speakers:** - [instructor] (1)

#### [Sales dashboard](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-dashboard-14572808?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-dashboard-14572808?u=76281980&t=0)** - [Instructor] An effective sales dashboard can really come in handy when you're trying to make strategic decisions for your organization. In this video, I'll walk you through my approach to building an effective sales dashboard. First, you need to identify your key performance indicators. I put these indicators along the top of the dashboard because these are the most important data points and they will help you quickly understand your performance. KPIs can change from organization to organization, but the ones I typically include for my clients are total sales, average sale price, also known as deal size, and number of customers. Next, you need to identify the key trends that you want to understand. An effective sales dashboard will visualize these trends. The three kinds of analysis that I typically visualize on sales [[Dashboards]] are sales by month, to identify seasonality, sales by category, and also, sales by geography. The last thing that you should note about an effective sales dashboard is that it's interactive. This enables the end user to very quickly uncover insights. Now let's see this in action on a sample sales dashboard. So here, you can see a sample dashboard mocked up. We have our KPIs along the top and sales by category, sales by geography, and here, we included age and gender, so demographics data instead of sales by month. Now let's highlight the interactive component of this dashboard.
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-dashboard-14572808?u=76281980&t=93)** For example, if we click on any one of these categories, all of the [[Representational State Transfer (REST)|rest]] of the dashboard will change. So let's check out furniture. If we click on this box here, all of the different visualizations change. What I want to note though is that the average sale price has just shot through the roof. If we drill back out of furniture, we can see it's an average of 17 on aggregate, but drilling down just in furniture alone, it shoots up to $100 of an average deal size. This means that we're getting a huge return on each additional sale from this category. So this can help you drive your [[Sales Strategy]]. It sounds like increasing furniture category sales would be a great idea. I've now shown you an interactive dashboard in action. I hope this has sparked your imagination and got you thinking about how you could use a dashboard to grow your own business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Sales Strategy]] (1)
> **UI Navigation:** click on (2)
> **Definitions:** known as (1), means that (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Reporting infrastructure](https://www.linkedin.com/learning/business-analytics-sales-data-2022/reporting-infrastructure-14573803?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/reporting-infrastructure-14573803?u=76281980&t=0)** - [Instructor] Reporting is common in most large businesses, but some smaller businesses have successfully built strong reporting systems as well. In fact, some tools like Salesforce come with a basic reporting package. This is a great starting point, but taking your reporting to the next level can have some huge benefit it to your organization. First, a solid reporting infrastructure gives you a broad 5,000-foot view of your organization. This is really valuable, as you might get lost in the weeds and lose sight of the broader image of what's going on in your organization. Seeing things from this perspective helps you conceptualize things like demand planning. If you can identify when your [[Microsoft Products|products]] are being sold, then you know how much to produce at different points of the year. This same concept can be applied to where you're selling as well. This will help you run your organization much more smoothly. Next, a solid reporting infrastructure gives you the opportunity optimize your organization. Building off the last example, if you have high sales in the Southeast, but hardly any sales on the West Coast, this should be reflected in how you're stocking your products. Maybe you should move some of your excess inventories out of warehouses in the West Coast to the Southeast, where they won't be sitting and a accruing high inventory holding cost. Last, a reporting infrastructure can help you make more strategic decisions. For example, if you're selling products high on the weekend, then this is most likely a great time to advertise.
>
> **[1:36](https://www.linkedin.com/learning/business-analytics-sales-data-2022/reporting-infrastructure-14573803?u=76281980&t=96)** Your customers are voting with their dollar, and you need to be listening. An effective reporting system can help you identify these kinds of trends, which can help supercharge your sales and marketing efforts. Building an effective reporting system can be challenging depending on the data sources and the quality of data at your disposal. Keep the benefits outlined in this video in mind if you hit some roadblocks because a reporting infrastructure is going to be well worth the investment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Sales and marketing dashboard](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-and-marketing-dashboard-14574763?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-and-marketing-dashboard-14574763?u=76281980&t=0)** - [Instructor] If you're using your website to generate leads for your business, then you should also be studying your marketing efforts to better understand what ultimately is driving your revenue. This dashboard breaks down both sales and marketing. In this example, the organization is using their marketing to drive prospecting rather than a typical sales outreach. So, instead of cold calls, they're using sessions or website visits to make the initial contact with potential customers. Then instead of setting an appointment by phone, the user fills out a signup form on the website. Then once the user has filled out a signup form, a salesperson reaches out to them by phone to set an appointment. A sales pipeline is very much driven by marketing in this example. You can see we have our KPIs of Total Sessions, Goal Completions, Deals Won, and Total Revenue in the KPIs box. Next, we have sessions by week, so you can see how sessions and goal completions are tracking over time. This dashboard helps the manager understand which marketing efforts are working. You can see Channel along the bottom left of the screen. We have Direct, Organic Search, Paid Search, Referral, and Social. And it looks like Direct traffic is causing the highest conversion rate. So that means that's a great lead source. Next, along the top, you have a sales pipeline. We have Sessions, Leads, In Pipeline, which those are the ones that are currently being called on by phone. And then finally, we have Customers. Next, we have a geo map. This can help the manager understand where the leads
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-and-marketing-dashboard-14574763?u=76281980&t=94)** are coming from. This gives the manager an opportunity to geo target specific areas. And finally, we have a breakdown of prospect performance. This gives the manager insight into the quality of the leads. It looks like quite a bit of the prospects are no shows, which means that maybe we aren't reaching out to the right demographic in this example. This dashboard gives you perspective into both sales and marketing which are very closely linked. Are both your sales marketing moving in the same direction?

> [!info]- Semantic Content
>
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. Types of Sales Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Type of sales analysis](https://www.linkedin.com/learning/business-analytics-sales-data-2022/type-of-sales-analysis-14574759?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/type-of-sales-analysis-14574759?u=76281980&t=0)** - [Instructor] The kind of [[Sales Analysis]] that you can conduct really depends on the dimensions that are in your data sources. The dimensions you track depend on the systems you have in place to properly collect data. In this video, I will walk through some of the common types of analysis that you can conduct with properly tracked sales data. First, you have categorical analysis, which means that you need to be able to tie back your sales transactions to a product category or assortment. Usually, with this type of analysis, a simple bar chart is a good starting point. That way you can see how your different types of [[Microsoft Products|products]] are selling. If you wanted to get more advanced, you could create a stacked bar chart that looks at categorical sales, but is divided into different colors or specific features. Second, you can look at sales by geography. The most common way to visualize this data is through a geo map. There are different kinds of heat maps typically used. You could have a color gradient showing the different states, for example, or you could have a bubble map, where the size of the bubble reflects the dollar amount. If you wanted to compare the top five states, you could also create a bar chart. This is more effective if you're looking to compare state by state. If you wanted to find where in the country your items are selling well, then you should probably use a geo map. Third, we have time series data. This can be really effective
>
> **[1:32](https://www.linkedin.com/learning/business-analytics-sales-data-2022/type-of-sales-analysis-14574759?u=76281980&t=92)** at helping you identify seasonality in your sales cycle. This kind of analysis usually utilizes a line graph. Now, to bring this all together, you can build out a sales KPI dashboard. KPI is short for key performance indicator. Once you define your KPIs, you can then see how different dimensions of your data are affecting performance. This is where you can drill down and spot opportunities. This can help you identify a high selling month, or state, or assortment. These insights can be very useful when sitting down to plan your organization's [[Sales Strategy]]. A sales dashboard is usually a combination of KPI indicators and data visualizations that focus on various aspects of your sales data set. Are there any types of sales analysis that I mentioned in this video that your organization is currently not utilizing?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sales Analysis]] (2), [[Microsoft Products|Products]] (1), [[Sales Strategy]] (1)
> **Env Vars:** kpi (3)
> **Definitions:** means that (1), is a  (1), short for (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Identifying seasonality](https://www.linkedin.com/learning/business-analytics-sales-data-2022/identifying-seasonality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/identifying-seasonality?u=76281980&t=0)** - [Instructor] Understanding when your sales are high and when your sales are low can help you make better strategic decisions, like when to run an ad campaign or when you should be scaling back how much you're stocking in your stores. The classic example that I was taught in business school is with snowboards and ice cream cones. This is a very simplistic example, but how do you think their demand is different? If you think people are buying a lot of ice cream in the dead of winter, well, maybe you live somewhere warm like Florida, but for the [[Representational State Transfer (REST)|rest]] of us, it gets cold during the winter and people generally don't want to buy cold desserts during that time period. It's very easy to identify seasonality with a PivotChart. Now, I'm going to use the Sales_Data [[Microsoft Excel|Excel]] file from the course exercise files to demonstrate how you can quickly use a PivotChart to identify seasonality. The first step is to select cell A1. Hold down shift and control, hit the right arrow button and then the down arrow button. Once you've got the entire dataset selected, then select Insert, PivotChart, and the Create a PivotChart dialog box will appear. And since you've already highlighted the dataset, that range will be selected. Next, hit OK. Now, the PivotChart interface will pop up. We can very quickly drag sales into values, and week ID into the axis. When you drag week ID to axis,
>
> **[1:32](https://www.linkedin.com/learning/business-analytics-sales-data-2022/identifying-seasonality?u=76281980&t=92)** it's going to aggregate your sales data into years. This is not what we want for seasonality. This is a good way of identifying if your sales are trending up or down on a yearly basis, but to identify seasonality, you need to aggregate your sales to the monthly level. We can very quickly alleviate this problem by selecting years under axis and dragging it out of the dialogue box, and the same for quarters. Now, we can identify each individual monthly sales. Next, a bar chart is probably not the ideal way to visualize this dataset. We can use a line chart to very quickly identify changes from month to month. The next step is to right-click on the chart and select change chart type. We can very quickly select line and then hit OK. And now, we've identified some seasonality. It looks like things peak in March, and things are pretty low in October. These are some very important insights that you can use to drive your [[Sales Strategy]] moving forward. Now you know how to quickly build out a PivotChart that identify seasonality within your sales dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Excel|Excel]] (1), [[Sales Strategy]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** right-click (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Categorical analysis](https://www.linkedin.com/learning/business-analytics-sales-data-2022/categorical-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/categorical-analysis?u=76281980&t=0)** - [Instructor] Categorical analysis is a very powerful tool at your disposal. It helps you identify which items, categories, or assortments are performing well. The well-performing items are a great place to start your [[Sales Strategy]] 'cause these are the items that are performing well out on the marketplace. This means that you've hit on something. In this video, I'm going to show you how to create a PivotChart in [[Microsoft Excel|Excel]] that will help you identify which of your items are performing well. I'm using the exercise file from this course. So feel free to open up that file and follow right along. The first step is to select Cell A1, then hold down Shift + Ctrl and hit the right arrow and the down arrow. Once the entire dataset is selected, then toggle to the Insert tab and select PivotChart. Since we've highlighted the entire data set, this range will appear in the Create PivotChart dialogue box. So all you have to do is hit OK. Next, the PivotChart interface will appear. You can drag sales dollars into Values and Item Number ID into Axis. Now, this is a very busy chart, but you can now see which items are performing well. The next step I would take from here would be to eliminate the low-performing items and we can very quickly do that by selecting this dropdown menu here. Then we can select filter values and then Top 10. So we want the Top 10 items by Sum of Sales. Then select OK.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-sales-data-2022/categorical-analysis?u=76281980&t=94)** Now this is much easier to interpret and it's not so busy. From a formatting standpoint, I would much rather see a stacked bar chart than a horizontal one. So we can very quickly eliminate this problem by right-clicking on the chart and then select Change Chart Type. And then we can select a stacked bar chart. Then hit OK. Now, there is one more step that I would like to take and then I feel like you have a pretty good visualization for your top-performing items. And that would be to sort item ID by total sales. All you have to do is toggle to this dropdown menu again and then select More Sort Options. And then we can do Ascending A to Z and instead of number ID, we can select Sum of Sales and hit OK. So now you can quickly identify which of your items are performing well. So now you have a visualization that can very quickly tell you where you need to prioritize your sales and marketing efforts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sales Strategy]] (1), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** toggle (2), dropdown (2)
> **Definitions:** is a  (2), means that (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Regional analysis](https://www.linkedin.com/learning/business-analytics-sales-data-2022/regional-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/regional-analysis?u=76281980&t=0)** - [Instructor] Studying geographical sales trends can be hugely valuable to your organization. It can take your national ad campaign that sells across the entire United States, and break it out into segments of regionally specific demographics that are really resonating with your product. I've opened up a fresh [[Tableau]] workbook so that we can see this in action. So I'm going to pull in Store Velocity, which is the number of sales per store. And we can look at State ID. Now currently, we're looking at a bar chart, which it can tell us the difference in sales from this state to this state, which is valuable. But ultimately, this is not giving us the data point that we want to see. So if we come over to the Show Me tab, we can click on this geographical map here and start to spot some very specific trends. I do like the fade from teal to darker blue, but I feel like if we change the color, all of a sudden the geographical trends are going to pop up a lot more. So if we simply come over to Color, Edit Colors, and change this from a fade to an orange-blue divergent, wow. All of a sudden we're seeing some target markets really pop up. So it looks like the Southeast is a really good niche, and the Northwest. So instead of spending an ad campaign that targets the entire United States, you can now break that into two different segments. And furthermore, it would be interesting to see
>
> **[1:35](https://www.linkedin.com/learning/business-analytics-sales-data-2022/regional-analysis?u=76281980&t=95)** if there are differences in taste and preferences up in these states versus these. Now you've seen this in action. Studying geographical sales trends can be hugely valuable to an organization. Do you think there might be any regional sales trends in your data?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tableau]] (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Tools to Analyze Sales Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Sales analysis with Google Analytics](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-analysis-with-google-analytics-14574760?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-analysis-with-google-analytics-14574760?u=76281980&t=0)** - [Instructor] If you're new to studying your sales data then [[Google]] Analytics is a great place to start. Especially if you're selling through an Ecommerce store I've gone ahead and connected to the demo account through Google Analytics so we walk through the interface together. Now I'm not going to go point by point as this interface is pretty detail intensive, but I'm going to hit some of the high notes. I'm currently on the homepage, which gives a high level breakdown of how your website has been performing over the last seven days. So the high level KPIs are users, revenue, conversion rate, and sessions. Now, if you want to get into some of the sales data you need to click on over to conversions and Ecommerce. Let's start with the overview. One thing to note about this overview page is that you can customize the date range you want to see. I've selected September one through November 15th, so we have a detailed sales data set to take a look at. Then you have have a breakdown of how your revenue and your Ecommerce conversion rate is performing over time. Then those high level KPIs of revenue, conversion rate, transaction, and average order value again. And here's where it starts to get a little bit interesting. So here's a breakdown of your marketing efforts. So you can see how your campaigns performed. Looks like they resulted in about 30 transactions, about $1,500 in revenue and an average order value of $45. Next, you can see how your [[Microsoft Products|products]] are performing.
>
> **[1:35](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-analysis-with-google-analytics-14574760?u=76281980&t=95)** You can see total product revenue here and then the percentage of total revenue. We can also drill down to product category and product brand. Unfortunately, with a demo account, there are no brand set up. So we won't toggle over to that page. Next is shopping behavior and this is where you have your funnel. You can see total sessions at the top of the funnel and sessions with product views, filtering down to sessions with add to cart, sessions with checkout, and then at the bottom of the funnel, sessions with transactions. Next let's check out product performance. Now this gives you a detailed breakdown about each one of your individual products is performing. So that's a very high level overview of Google Analytics. I just hit some of the points. But one thing to note here is that this is not a very interactive interface and it's honestly quite clunky. This is where data visualization can really come into play [[Tableau]] and [[Microsoft Power BI|Power BI]] can connect directly into Google Analytics. So you can start to build out your own interactive data visualizations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Microsoft Products|Products]] (2), [[Tableau]] (1), [[Microsoft Power BI|Power bi]] (1)
> **UI Navigation:** click on (1), toggle (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Sales analysis with Tableau](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-analysis-with-tableau-14579605?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-analysis-with-tableau-14579605?u=76281980&t=0)** - [Instructor] [[Tableau]] is a great tool for helping you make sense of your sales data. In this video, I'll walk you through how to build out an interactive visualization that can act somewhat like an app. This app will help your sales team understand who to target within each state. So here is a fresh Tableau workbook, and we have a data source of retail sales data. And this data includes age, state, and a bunch of other different dimensions. So what we're going to do is build out a stacked bar chart that can help your sales team understand what demographics are selling well within each state. So the first step is to pull in Age into the workspace, and then Gross Sales. Next, click the Show Me tab, and you can click the bar chart here. Now you can see the relationship between each of these age groups. Just from a formatting standpoint, I always like to sort by highest selling to lowest selling. It looks like 56 to 64 year olds is by far the highest selling age group. Next, we can pull in gender, and use that as a color to show the difference between male and female within each group. So all we have to do is drag Gender into Color, and now we can see the breakdown, female being pink and male being blue. We can select Entire View to get a better view of this bar chart. Now, this is where it can get really cool. We can drag in State as a filter
>
> **[1:35](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-analysis-with-tableau-14579605?u=76281980&t=95)** to help make this interactive. So let's drag State into Filter here. Select All. Hit OK. And we can hit this dropdown menu and select Show Filter. Next, let's hit this dropdown menu and click Single Value slider. So now you essentially have an app. So your sales representative in Florida now knows what are his good demographics to go after. It looks like they're only women over the age of 65 that are buying [[Microsoft Products|products]]. He can now use this information to structure his day. So now he knows that he doesn't need to make any calls to males that are over the age of 65. He can just weed out that whole demographic and spend his time much more wisely. Now you have an idea of the power of data visualization tools like Tableau. Are there any insights that your sales team could use to help guide how they spend their day?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tableau]] (3), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** dropdown (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Sales analysis with Power BI](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-analysis-with-power-bi-14572807?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-analysis-with-power-bi-14572807?u=76281980&t=0)** - [Narrator] [[Microsoft Power BI|Power BI]] is a very useful tool. If you're interested in conducting deep analysis into your sales trends, then you'll probably need to connect to multiple data sources at some point. Power BI's [[Data Modeling]] feature allows you to connect, combine, then analyze multiple data sources. So here's an example of when you're going to need to combine multiple data sources. In this example, we have sales data and we have location code here but you'll notice that there is no column for state. That column exists in a separate tab, called location information. And in this example, we're going to act as if each one of these tabs are a separate data source. Here's a peak at Power BI's interface. There are three main tabs that you need to know about. The first tab is a reports tab where you can visualize your data. The second tab is the data tab where you can connect to each individual data source. As you can see, I've connected to the main data source here and then location information. Now the third tab is the data model tab and this is where you can build out a data model that can combine multiple data sources together. You can see each of these boxes represent each of the data sources we've connected to and this link here is called a relationship. Let's dive a little bit deeper into this relationship. If we right click and select properties, we can see how these two data sources are now related. I've created a relationship that is many to one.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-sales-data-2022/sales-analysis-with-power-bi-14572807?u=76281980&t=94)** So there are multiple location codes in Excels Power BI and this location information data source is basically just a reference. So it has location code and then state tied to a specific location code. Now that we've built out this data model, we can now successfully create visualizations that span multiple data sources. Let's see this in action. If we click up to the reports tab, we now can pull in sales, which is in the main data source and state, which is in the secondary data source. So now we have sales by state, which would've been impossible unless we combined these two data sources together. Now you've seen how Power BI can build out a data model to combine multiple data sources. This is a powerful tool that will help you dive even deeper into your sales data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Power BI|Power bi]] (5), [[Data Modeling]] (1)
> **Definitions:** is a  (3), is called (1)
> **Speakers:** - [narrator] (1)


### 5. Additional Resources

[↑ Back to Table of Contents](#table-of-contents)

#### [Tableau forums](https://www.linkedin.com/learning/business-analytics-sales-data-2022/tableau-forums-14578686?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/tableau-forums-14578686?u=76281980&t=0)** - [Instructor] The [[Tableau]] Forums are a great place to learn about sales analytics. Even if your organization is not currently using Tableau, you can download the free version of Tableau called Tableau Public and start analyzing data on your own. I've used the Tableau Forums quite a bit over the years whenever I found myself stuck on a problem. They have a very robust community and are willing to help you solve Tableau and analytics-related problems. All you need to do is start a new conversation thread and the community members will respond to your post. Or if you're not so sure how to articulate your problem, you could search for the term [[Sales Analysis]] or a similar search term to see if someone else has asked a similar question. I've done just that in this example. So I typed in sales analysis and all the content has appeared. Let's click on this specific thread. So this person asks a very specific question and look at all of the respondents. I want to point out that a lot of the people who are responding are Tableau experts and they're just looking to give back to the community. So if you're looking to expand your sales analysis skillset, I would highly recommend you download the free version of Tableau Public and start digging around in your own sales data. And remember, if you ever get stuck, you can always reach out on the Tableau Forums.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tableau]] (9), [[Sales Analysis]] (3)
> **UI Navigation:** click on (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Utilizing Reddit](https://www.linkedin.com/learning/business-analytics-sales-data-2022/utilizing-reddit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/utilizing-reddit?u=76281980&t=0)** - [Instructor] Reddit is a great resource to learn more about [[Sales Analysis]] from experts that are currently out in the field. The [[Tableau]] in [[Microsoft Power BI|Power BI]] subreddits are a great tool that I've leaned on from time to time whenever I came across a problem that I wasn't quite sure how to solve. Now, Reddit is not only a good problem solving tool, though. It's also a great place to learn new ideas and concepts. I'm a data visualization expert, so I tend to stick to data visualization subreddits. That being said, there are a ton of analytics related communities where people are helping each other solve problems. I just searched for [[E-Commerce]] sales analysis in Reddit, and you can see all the results that have come up. Startup resources might be a great subreddit for you if you're just starting out. You can also head over to the For Hire subreddit if you're looking to hire someone to help you with a specific problem. Reddit is a huge platform with a ton of communities. Don't hesitate to reach out for help on this site. It's been a great resource for me over the years.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Sales Analysis]] (2), [[Tableau]] (1), [[Microsoft Power BI|Power bi]] (1), [[E-Commerce]] (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Watching YouTube](https://www.linkedin.com/learning/business-analytics-sales-data-2022/watching-youtube?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/watching-youtube?u=76281980&t=0)** - [Instructor] Most people think of YouTube as a place to watch entertainment videos. But it's actually an amazing place to expand your analytics knowledge. In fact, YouTube has become the second largest search engine right behind [[Google]]. Analytics content creators like myself have cut onto this trend and have started posting more and more educational content on YouTube as a result. Forums are a great way to learn about analytics, but I feel that YouTube takes that learning to a whole new level. Instead of reading text about ideas and concepts, I now can see them in action. On YouTube you can watch lectures, software tutorials and much much more. I've searched for sales analytics on YouTube and you can see there's lectures coming up, tutorials on specific software. This is just an amazing resource. And I would recommend you starting to dig into this, 'cause you may find some content creators that really resonate with what you're looking to learn. There are thousands and thousands of hours of YouTube content created every single day. So now is the time for you to start using YouTube as a resource, especially if you're looking to deepen your analytics knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Time to analyze](https://www.linkedin.com/learning/business-analytics-sales-data-2022/time-to-analyze?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-sales-data-2022/time-to-analyze?u=76281980&t=0)** - Congratulations on making it all the way through the course. What you can do now is follow me on [[LinkedIn]]. I post regularly all about analytics and even sales analytics, in particular. I also have a YouTube channel, where I live-stream my Greensboro College analytics lectures and my expert analytics interviews. On our "How to Get an Analytics Job" YouTube channel, we have over 100 hours worth of content, where you get to hear firsthand from senior analysts, analytics hiring managers and executives, both in and around the analytics industry. Thank you so much for checking out this course. Now, there's one specific video that I wanted to highlight, and it's this video right here. In this podcast episode, Danny Lauer, a senior product manager at Amazon, talks about what he looks for when he's hiring analysts, touches on the hiring process at Amazon, and even gives feedback to one of my students on their sales analytics dashboard that they built in [[Tableau]]. Check out this episode if you want to see a deep dive into how a true analytics expert thinks about analytics day to day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Tableau]] (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[John David Ariansen]]
- [[Madecraft]]

## Resources

- Exercise files available

## Skills Covered

- Business Analytics
- Sales Analysis

## Path Context

### In [[Get Ahead in Business Analytics and Analysis]]
← [[Business Analytics- Marketing Data (2022)]] | **19 of 19**

## Appears In

- [[Get Ahead in Business Analytics and Analysis]]

## Related Courses

_Courses sharing skills:_

- [[Financial Forecasting with Analytics Essential Training]] — Business Analytics
- [[Business Analytics- Forecasting with Exponential Smoothing]] — Business Analytics
- [[Business Analytics Foundations- Predictive, Prescriptive, and Experimental Analytics]] — Business Analytics
- [[Introduction To Business Analytics]] — Business Analytics
- [[Data Analytics for Business Professionals]] — Business Analytics

---

[↑ Back to top](#)