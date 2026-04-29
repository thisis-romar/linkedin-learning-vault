---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: excel-working-together-with-power-query-and-power-pivot
url: "https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot"
duration_minutes: 51
duration: 51m
level: Advanced
updated: 3/6/2023
learners: 11551
skills:
  - Microsoft Power Query
  - Microsoft Excel
  - PowerPivot
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFXhpiOALCbIg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678465355187?e=2147483647&amp;v=beta&amp;t=hNdr8S6uC6UbC_NBRRdFD79AjmI9mENRHcRJzk6qPGw"
linkedin_topic: Data Science
learning_paths:
  - '[[Master Advanced Excel Data & Analytics Skills]]'
prev_courses:
  - '[[Excel VBA- Process Modeling]]'
next_courses:
  - '[[Using Python with Excel]]'
path_nav: '[{"path":"Master Advanced Excel Data & Analytics Skills","position":3,"total":7,"prev":"Excel VBA- Process Modeling","next":"Using Python with Excel"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/microsoft-power-query
  - skill/microsoft-excel
  - skill/powerpivot
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Excel-%20Working%20Together%20with%20Power%20Query%20and%20Power%20Pivot.md)

![Excel: Working Together with Power Query and Power Pivot](https://media.licdn.com/dms/image/v2/C560DAQFXhpiOALCbIg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1678465355187?e=2147483647&amp;v=beta&amp;t=hNdr8S6uC6UbC_NBRRdFD79AjmI9mENRHcRJzk6qPGw)

# Excel: Working Together with Power Query and Power Pivot

> The Power Query and Power Pivot features in Microsoft Excel can make a powerful combination. Power Query enables you to discover, connect to, and import data, and Power Pivot lets you quickly model that data. In this concise course, Excel power user Joshua Rischin shows how to work seamlessly with Power Query and Power Pivot. Joshua walks step-by-step through using Power Query to select data, prep

> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot) | 51m | Advanced | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Understanding Power Query and Power Pivot]]** (1 videos)
- **[[#2. Using Power Query]]** (5 videos)
- **[[#3. Using Power Pivot]]** (6 videos)
- **[[#4. Using Power Query with Power Pivot]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting the most out of your data
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=0)** - [Josh] Excel continues to embrace the wonderful world of analytics.
>
> **[0:04](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=4)** It seems like almost every day a new feature is being released, making it increasingly easy for even the novice user to take data and turn it into a powerful story.
>
> **[0:16](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=16)** This story may be used to drive better performance or perhaps influence government policy setting.
>
> **[0:21](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=21)** In this course, I'm going to show you how to quickly import data into an Excel workbook and then seamlessly reshape it using a query.
>
> **[0:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=31)** And by the way, with Excel's Power Query feature, you can easily achieve this without having to write a single line of code.
>
> **[0:39](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=39)** We'll then cover how to merge different data sources together by creating a data model using Excel's Power Pivot.
>
> **[0:46](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=46)** And finally, I'll show you how to take data from your model and turn it into an interactive visualization using some of Excel's powerful inbuilt tools.
>
> **[0:56](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=56)** I'm Josh Rischin and I've been working with Excel for more than 20 years now, and I'm super passionate about helping individuals and enterprises make more evidence-based decisions by unlocking the value of their data.
>
> **[1:11](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=71)** Now, I'm sure you're itching to get started.
>
> **[1:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/getting-the-most-out-of-your-data?u=76281980&t=73)** So, come and join me on this LinkedIn Learning journey as we explore how to work together with Excel's Power Query and Power Pivot.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), super (1)
> **CLI Commands:** make (1)
> **Speakers:** - [josh] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=0)** - [Instructor] Throughout this course, you'll notice that I'm using a desktop version of Excel.
>
> **[0:04](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=4)** If you are too but are working with say an older version of Excel, then you may see a compatibility warning pop up when using some of the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=14)** If this happens, then simply go ahead and click on Close, and you're good to go.
>
> **[0:19](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=19)** It's also worth mentioning that at the time of recording, the Excel add-ins that I demonstrate in this course, that is Power Pivot and Power Query, were only available in the Desktop version of Excel.
>
> **[0:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=31)** Unfortunately, these features were not available on the Mac release of the software.
>
> **[0:37](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=37)** Both Power Query and Power Pivot are available in the subscription version of Excel.
>
> **[0:42](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=42)** That is in Office 365 or Microsoft 365.
>
> **[0:46](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=46)** They're also both available in Excel 2019.
>
> **[0:49](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=49)** Now the availability in previous versions of Excel varies.
>
> **[0:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/what-you-should-know?u=76281980&t=53)** So I encourage you to check support.[office.com](https://office.com) for more details.

> [!info]- Semantic Content
>
> **URLs:** [office.com](https://office.com) (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding Power Query and Power Pivot

> [[#Table of Contents|↑ Back to Table of Contents]]

#### How Power Query and Power Pivot work together
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=0)** - Previously just a simple spreadsheeting product, Excel now provides a seamless and complete end-to-end solution from source data to actionable insights via the generation of powerful reports.
>
> **[0:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=13)** Now, in this course, we're going to specifically look at two amazing features, Power Query and Power Pivot.
>
> **[0:21](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=21)** They're designed to complement each other.
>
> **[0:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=23)** But before we take a look at how this happens, let's just take a step back and look at these two features separately.
>
> **[0:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=31)** Firstly, let's take a look at Power Query, which is also known as Get and Transform.
>
> **[0:37](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=37)** Power Query is a data discovery tool.
>
> **[0:40](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=40)** We can take source data from a huge range of both static and live data feeds, and we can then massage it into any view we may choose.
>
> **[0:50](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=50)** We can merge different data sources together.
>
> **[0:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=53)** We can extract custom views, we can even Unpivot data, and then go ahead and share our data with other users and all of this, using a code-free process known as Queries.
>
> **[1:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=68)** Now let's go ahead and take a look at Power Pivot.
>
> **[1:12](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=72)** Power Pivot is a fantastic way of enhancing your experience through something called a data model.
>
> **[1:19](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=79)** A data model allows you to establish links between tables, just like a relational database.
>
> **[1:25](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=85)** We can also create custom calculations, define KPIs, and then evaluate our experience using Excel's native Pivot Tables and Pivot Charts, and all of this without having to write complex formulas and look ups.
>
> **[1:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=101)** So how does Power Query and Power Pivot work together then, you might be wondering.
>
> **[1:48](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=108)** Well, it's as simple as this.
>
> **[1:50](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=110)** Power Query is a data-staging process, or in most simple terms, getting your data ready for action.
>
> **[1:58](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=118)** Power Pivot then consumes the data you've prepared and enhances it further, thus preparing it for analysis using Excel's standard features.
>
> **[2:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=129)** And then the fun begins.
>
> **[2:11](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=131)** As you start to analyze your data, you will no doubt come across several scenarios that will impact your work.
>
> **[2:18](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=138)** This will include things such as new source data, changes to a query, adding a relationship and that kind of thing.
>
> **[2:26](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=146)** If you've set your work up correctly, making these changes is a breeze and will be dynamically and automatically reflected throughout your work.
>
> **[2:37](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=157)** And all this without having to perform any manual changes such as copying and pasting.
>
> **[2:43](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=163)** Now I'm sure you're really keen to get started with all of this.
>
> **[2:46](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/how-power-query-and-power-pivot-work-together?u=76281980&t=166)** So let's go ahead and get straight into it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (2), static (1), this, (1)
> **Definitions:** is a  (4), known as (2)
> **Analogies:** such as (2), just like (1)
> **Speakers:** - previously (1)


### 2. Using Power Query

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Select your data
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=0)** - Okay, it's probably stating the obvious that before using power query or power pivot, we need data.
>
> **[0:07](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=7)** Now there's an ever growing number of methods and data sources that are available to use in Excel.
>
> **[0:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=13)** If we click on data here and then click on the dropdown next to get data, you can see the vast range of options that we have to select, but to make it easier to understand the concepts of power query and power pivot, I'm actually just going to go ahead and select from file and from tech slash CSV.
>
> **[0:32](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=32)** And I'm going to open this local CSV file called EV sales for King County.
>
> **[0:38](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=38)** You'll find this file in your exercise file pack.
>
> **[0:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=41)** Now this file contains data from the Washington State Department of Licensing on electric vehicle sales since 2010.
>
> **[0:49](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=49)** Now to make it a little bit easier, I edited this file to only retain data for the King County.
>
> **[0:55](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=55)** Let's go ahead and select the data and then click on import.
>
> **[1:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=60)** Now there's quite a fair bit of data here, so it may take a little while to open up the preview window.
>
> **[1:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=65)** Well, you might be lucky and it appears in just a couple of moments.
>
> **[1:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=68)** We have some default options at the very top here, we can then choose to transform the data before we even import it, but we can always come back to this later on.
>
> **[1:16](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=76)** So I tend to just go ahead and click on load.
>
> **[1:20](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=80)** Now there's roughly 150,000 rows of data that's been imported.
>
> **[1:25](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=85)** So we may just need to be patient at this stage.
>
> **[1:29](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=89)** And as you can see in just a couple of moments, the data has been included in our Excel file.
>
> **[1:35](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=95)** If we click on the data menu option here and then click on existing connections, you'll see that the connection has been identified in Excel.
>
> **[1:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=104)** And at some stage down the track, we'll be able to update these data and it will automatically flow through into our workbook.
>
> **[1:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=111)** Let's go ahead and click on cancel.
>
> **[1:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=113)** And the last thing I tend to do at this stage is give the worksheet a more meaningful name, such as say, data and let's hit enter on the keyboard.
>
> **[2:02](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=122)** And just like that you've connected to a data source using power query.
>
> **[2:06](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/select-your-data?u=76281980&t=126)** You are now ready to start doing some pretty cool stuff with your data.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), dropdown (1), select the (1)
> **Code Keywords:** let (3), import. (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** csv (2)
> **Analogies:** such as (1), just like (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - okay (1)

#### Prepare your query
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=0)** - The best way to prepare our data is to set up something called a query.
>
> **[0:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=5)** A query applies steps or mashes up our data, making it easier to analyze down the track.
>
> **[0:11](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=11)** Let's head over to the Query Menu Option here, and then go ahead and select Edit.
>
> **[0:17](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=17)** Clicking this button opens up the Power Query Editor window, and you'll notice Excel's attempt at determining the data type for each column, such as the DOL transaction date here, which is the Department of Licensing transaction date.
>
> **[0:32](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=32)** The calendar icon here identifies that we're working with a date field.
>
> **[0:38](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=38)** When using the query editor, it's only a preview.
>
> **[0:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=41)** So any edits that we make here don't actually impact the underlying source data, which is the CSV file.
>
> **[0:48](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=48)** And in fact, when we run the query, it's only applying changes in our Excel data model, not the CSV data that we connected to earlier.
>
> **[0:59](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=59)** Have a look on the right hand side here under Query Settings.
>
> **[1:03](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=63)** You'll see that we already have some applied steps, but how'd this happen?
>
> **[1:07](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=67)** We've only just imported the data.
>
> **[1:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=69)** Well, when we actually imported our data a little bit earlier, Excel automatically created the start of a query for us.
>
> **[1:18](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=78)** How neat is that?
>
> **[1:19](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-your-query?u=76281980&t=79)** Let's now take a look at some cool ways that we can cleanse and prepare our data, making it ready to be used for analytical purposes.

> [!info]- Semantic Content
>
> **Env Vars:** csv (2), dol (1)
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)

#### Use a query to cleanse data
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=0)** - [Instructor] Before we start using our data for analytical purposes, we really should clean it up first.
>
> **[0:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=5)** Now, cleaning it up can mean many different things, everything from say changing column headings to splitting columns and that kind of thing.
>
> **[0:15](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=15)** But how about we explore this a little bit further using a couple of examples.
>
> **[0:19](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=19)** To make it easier to understand these concepts, make sure that you have the Excel file open for this movie, and then go ahead and click on query and then select edit, which opens the query editor.
>
> **[0:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=31)** Now remember, when using the query editor here, it's only a preview.
>
> **[0:36](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=36)** So any changes that we make don't actually impact the underlying data, which is the CSV file that we have linked to.
>
> **[0:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=44)** Under home here, you'll see that we have quite a few different options here for editing and transforming our data.
>
> **[0:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=51)** But what we're going to do is select transform to bring up some more advanced options.
>
> **[0:56](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=56)** Now let's start by removing a few columns that we don't actually need in our data.
>
> **[1:01](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=61)** For example, the VIN, which is the Vehicle Identification Number, is something that isn't really going to add a huge amount of value when it comes time to analyzing our data.
>
> **[1:11](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=71)** So I'm simply going to select the column and have a look off to the right under applied steps as I hit delete under the keyboard.
>
> **[1:20](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=80)** You'll see that a new applied step called Removed Columns has been included.
>
> **[1:25](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=85)** Now it actually hasn't deleted the column from our underlying data, I only removed it from our preview here in the query editor.
>
> **[1:33](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=93)** So let's say that we've made a mistake and we actually do want to include this column, simply click on the X next to Remove Columns.
>
> **[1:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=101)** And you'll see that the VIN has reappeared once more.
>
> **[1:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=104)** But I actually do want to remove this column.
>
> **[1:46](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=106)** So I'm going to select it once more and then hit delete on the keyboard.
>
> **[1:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=113)** And the applied step has been added once more.
>
> **[1:56](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=116)** Now let's have a look at the sale price here.
>
> **[1:59](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=119)** Once again, this is something that I don't think is going to add a huge amount of value because it appears to be incomplete.
>
> **[2:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=125)** My guess is it wasn't a mandatory field at the point of data collection.
>
> **[2:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=129)** So I'm simply going to select this column as well.
>
> **[2:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=133)** Hit delete on the keyboard.
>
> **[2:16](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=136)** Now you may wish to remove some other columns here because not all of them are going to add value when it comes time to analyzing the data.
>
> **[2:24](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=144)** Now, the last thing that you may wish to do here is change some of the column headings, for example, the DOL transaction date, I don't think is going to help a huge amount.
>
> **[2:34](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=154)** I think it would look a lot cleaner if we just had transaction date.
>
> **[2:38](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=158)** DOL just stands for the Department of Licensing.
>
> **[2:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=161)** And I think we can simply remove this acronym by hitting delete on the keyboard and then hitting enter.
>
> **[2:48](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=168)** And you'll see that a new applied step has been added off to the right called Renamed Columns.
>
> **[2:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=173)** Okay, to execute this query now, simply click on home and then select close and load.
>
> **[3:01](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=181)** Now we have over a hundred thousand rows of data here, so it may take a little while to load, so be patient.
>
> **[3:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=188)** But once done, you will notice that all of the query steps have been applied.
>
> **[3:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=193)** The columns that we deleted, you can't see here.
>
> **[3:17](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=197)** And the transaction date that had DOL before has been removed and it just says transaction date.
>
> **[3:24](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=204)** At this point, I suggest that you save your work.
>
> **[3:27](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=207)** The brilliant part about all of this is Excel has saved these steps.
>
> **[3:32](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=212)** And so the more records that we have, for example, if they're added to our source data, seeing them appear here is as simple as hitting refresh, but don't worry.
>
> **[3:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/use-a-query-to-cleanse-data?u=76281980&t=221)** We'll go ahead and cover this further in another video.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), let (3)
> **Env Vars:** dol (3), vin (2), csv (1)
> **UI Navigation:** click on (3), select the (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (3)
> **Definitions:** stands for (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Enhance your query
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=0)** - [Instructor] Once you've cleansed your data, did you know that there are tons of ways to enhance your query, making it even easier to analyze later on?
>
> **[0:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=8)** Let's explore a few.
>
> **[0:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=9)** Make sure that the Excel file for this video is open.
>
> **[0:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=13)** And then go ahead and click on Query, and then Edit to open up the query editor.
>
> **[0:18](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=18)** What you'll notice here is that for every transaction, there's a make and a model.
>
> **[0:24](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=24)** For example, we have the Nissan Leaf.
>
> **[0:28](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=28)** Now, I like to make it clear at a glance, which one you switch.
>
> **[0:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=31)** So take a look at this neat feature.
>
> **[0:34](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=34)** Let's go ahead and select the Make column, and go ahead and click on Transform.
>
> **[0:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=41)** Now let's click on Format and then select Upper Case.
>
> **[0:46](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=46)** You'll see that all of the makes have been changed from title case to upper case.
>
> **[0:52](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=52)** And you'll see that the applied step has been created off to the right called upper case text.
>
> **[0:59](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=59)** Now let's go ahead and look at the very first column, which is the clean alternative fuel vehicle type.
>
> **[1:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=65)** If we click on the dropdown box here, which is the filter, you'll see that we only have two different values in this column.
>
> **[1:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=74)** One being the battery electric vehicle, and the other being the plugin hybrid electric vehicle.
>
> **[1:20](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=80)** Now, I don't know about you, but I don't really think that the acronyms in brackets add much value here.
>
> **[1:27](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=87)** So how about we create a query step to remove them?
>
> **[1:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=91)** To do this, just simply make sure that the column is selected, and then go ahead and click on the dropdown box next to Extract.
>
> **[1:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=101)** And then we're going to select Text before delimiter.
>
> **[1:46](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=106)** And when the dialog box appears, simply type in a space, and then open brackets, and then click on OK.
>
> **[1:55](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=115)** And have a look at what happens.
>
> **[1:57](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=117)** The acronyms that we had in brackets have been removed and you'll see that a new applied step across to the right has been created, called the Extracted text before delimiter.
>
> **[2:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=128)** And lastly, how about we go ahead and go create a new column that merges the make with the model?
>
> **[2:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=134)** This is sometimes referred to as a concatenation.
>
> **[2:18](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=138)** And the reason that we do this is we might just want to analyze the make and model as one column later on.
>
> **[2:24](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=144)** To do this, let's go ahead and click on Add column, and then select Add custom column, which is this button right here.
>
> **[2:33](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=153)** When the dialog box appears, let's go ahead and give it a more meaningful name than custom.
>
> **[2:39](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=159)** We'll call it, say, make forward slash model.
>
> **[2:43](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=163)** And then I'm just going to hit Delete on the keyboard to get rid of the default text that was there.
>
> **[2:48](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=168)** And under the custom column formula, I need to do something that allows these different fields to be joined together.
>
> **[2:55](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=175)** So simply double click on Make, and then type ampersand, double inverted commas, colon, space, and you'll see that we have some custom texts that has been added in the middle.
>
> **[3:12](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=192)** After the second double quotation, let's just click on ampersand, and then double click on model, and then go ahead and click on OK.
>
> **[3:24](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=204)** And have a look at what happens here.
>
> **[3:25](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=205)** A new column has been created, which has both the make and the model.
>
> **[3:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=211)** How neat is that?
>
> **[3:33](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=213)** Now let's go ahead and click on Home, then click on Close and Load.
>
> **[3:38](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=218)** Now, it may take a couple of moments, because we have just over 150,000 rows of data.
>
> **[3:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=224)** So be patient.
>
> **[3:46](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=226)** But in just a couple of moments, the query that we have prepared has been applied to all of our data, including the new column that we've created, which is a concatenation of the make and the model.
>
> **[3:58](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=238)** You'll see it all the way off to the right here.
>
> **[4:01](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=241)** What you have just learned is how to make a few enhancements to your query.
>
> **[4:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=245)** There are a ton more that you can do.
>
> **[4:07](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/enhance-your-query?u=76281980&t=247)** So I suggest you take the time to play around with a few more.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (13), dropdown (2), select the (1)
> **Code Keywords:** let (8), case. (2), this, (2), switch (1), type. (1)
> **CLI Commands:** make (12)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Prepare data for Power Pivot
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=0)** - [Instructor] Once your data has been cleansed and prepared using Power Query, I find that it's best to analyze it using Power Pivot.
>
> **[0:07](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=7)** Power Pivot is designed to work seamlessly with Power Query, and preparing your data to be used in Power Pivot is a piece of cake.
>
> **[0:16](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=16)** But before we get too excited and carried away here, there's just a couple of small steps we need to take care of first.
>
> **[0:22](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=22)** I suggest that you have the Excel file for this video open.
>
> **[0:26](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=26)** You'll see that what we have is a Power Query that's been prepared earlier.
>
> **[0:30](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=30)** If we select Query and then click on Edit, the Power Query Editor window will open, and straightaway you can see that it's a relatively sophisticated query because we have quite a few applied steps.
>
> **[0:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=44)** Okay, let's go ahead and close and load the query.
>
> **[0:47](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=47)** And this won't take too long because we haven't actually made any changes.
>
> **[0:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=51)** Okay, to use Power Pivot, you need to make sure that you can see the Power Pivot menu option.
>
> **[0:57](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=57)** As you can see, it doesn't appear here because I've removed it for this video.
>
> **[1:02](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=62)** Let's go ahead and right click anywhere at the very top here.
>
> **[1:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=65)** Any of the menus will bring up this step.
>
> **[1:07](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=67)** Once you've right clicked, select Customize this Ribbon, and under Customize this Ribbon main tabs, you should be able to say Power Pivot here.
>
> **[1:17](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=77)** Let's go ahead and select the tick next to Power Pivot, and then click on OK.
>
> **[1:22](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=82)** And if we select Power Pivot now, you'll see that various menu options have appeared.
>
> **[1:28](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=88)** Once you can see these options, well then, guess what.
>
> **[1:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/prepare-data-for-power-pivot?u=76281980&t=91)** Just like that, Excel is ready to integrate your Power Query with Power Pivot.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **UI Navigation:** click on (2), select the (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 3. Using Power Pivot

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Create your data model
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=0)** - [Instructor] Let's say that you've created an Excel file and have connected with a data source using Power Query.
>
> **[0:06](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=6)** Now assume that you're ready to analyze your data and have decided that Power Pivot is the way to go, given it's seamless integration with Excel's Power Query.
>
> **[0:16](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=16)** With Excel now set up and ready with Power Pivot, the first step is to create a data model.
>
> **[0:22](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=22)** To do this, navigate to the Power Pivot menu and then just go ahead and click on Manage.
>
> **[0:28](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=28)** This opens up the Power Pivot data model window.
>
> **[0:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=31)** But before we go any further, we need to make sure that we are connected with the right data source.
>
> **[0:37](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=37)** As you can see here, under existing connections, we don't have a Power Pivot data connection yet.
>
> **[0:42](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=42)** We do have a workbook connection which is the query that we created a little bit earlier, but we need a Power Pivot data connection before we can start to use its full features.
>
> **[0:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=51)** So let's go ahead and click on Close.
>
> **[0:54](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=54)** And this step is really important.
>
> **[0:56](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=56)** Rather than connecting with raw data, we must connect with the Power Query that we created a little bit earlier.
>
> **[1:04](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=64)** So we're not going to connect with this data source here, not directly; we're going to create a link to it.
>
> **[1:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=69)** So let's go ahead and select Query and then go ahead and click on Load To, and this is really important.
>
> **[1:18](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=78)** We want to make sure that we select Only Create Connection and then we want to select Add this data to the Data Model.
>
> **[1:26](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=86)** And now just go ahead and click on OK.
>
> **[1:29](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=89)** When the warning message pops up, just go ahead and click on OK.
>
> **[1:32](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=92)** It's just a default warning that Excel's letting us know that we may lose some data if we make any changes.
>
> **[1:39](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=99)** Now, it's a default warning and we can just go ahead and click on OK with confidence.
>
> **[1:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=104)** Now, be patient at this point because it may actually take a few moments to create the data model.
>
> **[1:49](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=109)** It's also connecting with about 150,000 rows of data.
>
> **[1:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=113)** Once complete, let's head over to the Power Pivot menu and then go ahead and select Manage.
>
> **[2:01](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=121)** And you'll see a preview of the data has been created, and this data looks similar to the Power Query.
>
> **[2:07](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=127)** Now, to double check that we've created a connection correctly, let's go ahead and click on Existing Connections once more.
>
> **[2:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=134)** And you'll now see that we have a Power Pivot data connection which is exactly what we expected to see.
>
> **[2:21](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=141)** It's important to note here that the connection is a query rather than just data.
>
> **[2:26](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=146)** This essentially means that we can make changes to the query down the track, and it will automatically flow through into the data model, but this is something that we'll come back to later on.
>
> **[2:36](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-your-data-model?u=76281980&t=156)** And just like that, you have now created a Power Pivot data model.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), navigate to (1)
> **Code Keywords:** let (5), this, (1)
> **CLI Commands:** make (4)
> **Warnings:** warning (3)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** similar to (1), just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Import additional data
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=0)** - [Instructor] To get the full value out of PowerPivot, we need to import another data source and link the two together using something called a relationship.
>
> **[0:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=8)** And we'll come to this in a moment.
>
> **[0:10](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=10)** You'll notice here on the worksheet called LOC type that we have a simple table with two columns, location and type.
>
> **[0:18](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=18)** The location is simply a list, a unique list of locations that match, or at least it should match what appears here in column K.
>
> **[0:29](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=29)** If we go back now to the worksheet called LOC type, you'll see that we have a second column, which is called type, and this is simply a classification that I've created myself.
>
> **[0:39](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=39)** And that's allowing me to tag the location as either being a city or a town.
>
> **[0:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=44)** And eventually when we've linked to these two together, we'll be able to do some fancy slicing and dicing of our data.
>
> **[0:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=51)** But before we can do that, we actually need to add this table into our data model.
>
> **[0:56](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=56)** And this is really simple.
>
> **[0:57](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=57)** Just go ahead and highlight columns A and B, select PowerPivot, and then go ahead and click on add to data model.
>
> **[1:07](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=67)** When the dialog box appears, make sure that my table has headers has been selected because you can see that we have headers here.
>
> **[1:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=74)** Go ahead and click on OK.
>
> **[1:17](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=77)** And in just a couple of moments, the new table has been added to our data model.
>
> **[1:22](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=82)** I suggest at this point changing the default name that has been created from table three to something a little bit more meaningful, such as location type, and then hit enter on the keyboard.
>
> **[1:35](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=95)** And after a couple of moments, what you'll be able to do is go ahead and click on diagram view.
>
> **[1:43](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=103)** And what you can see here is we now have two tables in our data model, the original query that we created earlier, and also the location type, which we just created then.
>
> **[1:54](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/import-additional-data?u=76281980&t=114)** You are now ready to link the two together using something called a relationship.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (4), type. (1), match, (1)
> **UI Navigation:** click on (3)
> **Env Vars:** loc (2)
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Build relationships
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=0)** - With the Excel exercise file for this video open, make sure that you have the Power Pivot data model open by selecting Power Pivot, and then clicking on Manage.
>
> **[0:11](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=11)** Now let's go ahead and click on Diagram View.
>
> **[0:15](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=15)** And you'll see what we have here, two data sources in our data model.
>
> **[0:19](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=19)** But before we can start making the most of Power Pivot's relational database features, we have to link these two tables together.
>
> **[0:27](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=27)** Why, you might be wondering?
>
> **[0:28](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=28)** Well, if we go back to the Data view here, what you'll notice is that we have a field called Type in the Location Type tab, but this field here doesn't appear anywhere in the EV Sales, but we want to include that field here somewhere so that we can do some deeper analysis later on.
>
> **[0:49](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=49)** Luckily, we have a common field that can link the two together.
>
> **[0:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=53)** And that's called City in this table called EV Sales.
>
> **[0:57](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=57)** We're going to use this field to link the two tables together.
>
> **[1:01](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=61)** In the Excel world, this is known as a lookup.
>
> **[1:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=65)** In Power Pivot, it's called a relationship.
>
> **[1:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=68)** And the brilliant part about it is we don't need to write any formulas.
>
> **[1:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=73)** I'll show you how.
>
> **[1:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=74)** Let's click on Diagram View.
>
> **[1:17](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=77)** And what you'll see is we have the two data sources.
>
> **[1:21](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=81)** What we want to do now is take the field called City and drag it over Location and let go of the mouse.
>
> **[1:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=91)** Now, don't worry.
>
> **[1:32](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=92)** Even though these fields are given different names, they actually contain the same data elements, and we have linked the two tables together.
>
> **[1:40](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=100)** Now, it's not overly easy to see this right now, but bear with me.
>
> **[1:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=104)** We'll get there soon.
>
> **[1:45](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/build-relationships?u=76281980&t=105)** And just like that, you have now created a relationship in Power Pivot.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **UI Navigation:** click on (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** known as (1)
> **Analogies:** just like (1)
> **Speakers:** - with (1)

#### Create lookups as new fields
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=0)** - [Instructor] Now that we've created a link between two data sources in PowerPivot, wouldn't it be wonderful to see this all come together in one view, one table?
>
> **[0:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=9)** Luckily this is incredibly easy using a feature in PowerPivot called custom calculations, or DAX, D-A-X, which stands for data analysis expressions.
>
> **[0:20](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=20)** Now DAX can be used for doing all sorts of fancy things with your data, such as creating new calculations, new views, and that kind of thing, and all this without having to write complex formulas.
>
> **[0:31](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=31)** I suggest you have the Excel file open for this video to follow along with me, and from the PowerPivot menu, go ahead and select manage.
>
> **[0:40](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=40)** This opens up the data model.
>
> **[0:42](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=42)** Once open, what you'll see is we have two tabs, one for the data source called EV sales, which is our raw data, and another called location type.
>
> **[0:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=53)** Now, if we go ahead and select diagram view, you'll see that we've actually created a relationship that's allowing us to link these two tables together.
>
> **[1:03](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=63)** And you'll see the green outline in each of the tables, and this shows the common identifier, the field that we're essentially using to link these two tables together.
>
> **[1:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=73)** Now let's go ahead and select data view, and what you can see here in the EV sales tab, as we scroll across to the right, we actually don't have the location type just yet.
>
> **[1:25](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=85)** We've created the relationship, but we don't yet have it in this table.
>
> **[1:29](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=89)** To create it, let's simply go ahead to the very first blank column, which is called add column.
>
> **[1:36](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=96)** And in the very first row, let's go ahead and create our very first DAX expression.
>
> **[1:42](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=102)** Let's type equals, then start typing the word related and open brackets.
>
> **[1:49](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=109)** PowerPivot is now smart enough to recognize the relationship that we created earlier, which is simply called location type, and then type.
>
> **[1:59](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=119)** So double-click on it, and then hit enter on the keyboard.
>
> **[2:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=125)** Whoa, how about that?
>
> **[2:06](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=126)** As you can see, in just one step, PowerPivot has added the location type to our master table.
>
> **[2:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=133)** At this point, what I'd like to do is give the column a more meaningful name, such as say, location type, and then hit enter on the keyboard.
>
> **[2:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/create-lookups-as-new-fields?u=76281980&t=143)** Now there's so much more that you can do using DAX expressions, but this should give you a taste for exactly what they're all about.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type. (2), type, (2)
> **Env Vars:** dax (4)
> **Definitions:** stands for (1), is called (1)
> **Analogies:** such as (2)
> **UI Navigation:** double-click (1)
> **Speakers:** - [instructor] (1)

#### Analyze data using PivotTables
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=0)** - [Instructor] Now that you've created a Data Model using Power Pivot and this being linked to a Power Query that you created earlier, let's start to take a look at what the data is actually telling us.
>
> **[0:11](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=11)** Using some of Excels standard inbuilt features.
>
> **[0:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=14)** Now, there are quite a few options that we could use here, but I'd like to use PivotTables as a starting point.
>
> **[0:20](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=20)** To do this, go ahead and click on Insert, then go ahead and select PivotTable.
>
> **[0:27](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=27)** It's really important at this stage that we make sure that the Ready button is selected next to Use this workbook's Data Model.
>
> **[0:34](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=34)** And instead of selecting the Existing Worksheet for the PivotTable, let's go ahead and select a New Worksheet and then click on, OK.
>
> **[0:42](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=42)** And what you'll see here is the backbone of a PivotTable, under the PivotTable Fields, you'll see quite a few different options.
>
> **[0:50](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=50)** The very first one here is actually the Query that we created earlier, and then the three tables that follow, are the tables from our data model.
>
> **[1:01](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=61)** I strongly suggest that you use these because any modifications that you make to your Input data using the Query, and ultimately then through Power Pivot will be reflected here.
>
> **[1:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=73)** I'll show you what I mean, let's go ahead and click on the EV Sales Table and scroll down and make sure that you can find the field called Transaction Year, drag the Transaction Year into the Rows section.
>
> **[1:29](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=89)** Now let's go back to the PivotTable Fields and scroll down until you find the Location type, which will be right at the end.
>
> **[1:37](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=97)** Let's go ahead and drag these field and put it under Columns.
>
> **[1:42](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=102)** Now because we want a count of these results, it doesn't really matter which field we use, but I'm going to select one called Vehicle Primary Use, and I'm going to drag these into the Values section and Count should appear automatically.
>
> **[1:59](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=119)** Okay, now let's go ahead and clean these table up a little bit.
>
> **[2:03](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=123)** The first thing that I'm going to do is change the Tab name from Sheet2, to say Pivot, and then hit Enter on the keyboard.
>
> **[2:12](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=132)** The next thing that I'm going to do is change the format of the numbers here from being essentially unformatted to being in Comma Format.
>
> **[2:24](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=144)** And I'm going to reduce that these to zero decimal places.
>
> **[2:28](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=148)** Okay, now let's go ahead and hide any blank records for the location type.
>
> **[2:33](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=153)** As you can see, see there aren't too many here.
>
> **[2:35](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=155)** If they were a lot, I thought be quite concerned about the quality of the data, but we don't have that many, so I feel quite comfortable in hiding them.
>
> **[2:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=164)** There are actually a few ways to do this, but yeah, I found that the most robust way is to click on the Dropdown Box here next to Column Labels, then select a Label Filter and select Does Not Equal and then just go ahead and click on OK and you'll notice that the blanks aren't visible anymore.
>
> **[3:03](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=183)** The last thing that we may wish to do is to add a filter to this table.
>
> **[3:07](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=187)** Let's say that I'm only concerned about new electric vehicles sales rather than all.
>
> **[3:12](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=192)** Let's go ahead and find the field under PivotTable Fields called New or Used Vehicle.
>
> **[3:19](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=199)** Let's just go ahead and drag that into filters here.
>
> **[3:24](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=204)** And then in column B, let's go ahead and select the Dropdown Box, click on the Plus so that we can see everything and click on New, then select, OK.
>
> **[3:36](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=216)** What's you're now looking at is a summary of new electric vehicle sales per year separated between City and Town for the King County of Washington.
>
> **[3:47](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivottables?u=76281980&t=227)** Now this Lens looks pretty good to me and it's ready to be enhanced, even further using some Powerful Charts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (2), type, (1), type. (1), new, (1)
> **UI Navigation:** click on (7), scroll down (2), dropdown (2), select the (1)
> **CLI Commands:** make (3), find (3)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Analyze data using PivotCharts
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=0)** - Data in a table is pretty cool, but nothing speaks louder than when this data is presented in a chart.
>
> **[0:07](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=7)** It's far more engaging this way.
>
> **[0:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=9)** So let's go ahead and do it.
>
> **[0:11](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=11)** Make sure that the Excel file for this video is open and that you're on the pivot worksheet.
>
> **[0:17](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=17)** Excel makes it dead easy to create a chart from an existing pivot table, such as this one.
>
> **[0:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=23)** And we do this using something called a pivot chart.
>
> **[0:26](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=26)** Make sure that the pivot table is selected, well that you've clicked anyway in the pivot table and then select pivot table analyze and then pivot chart.
>
> **[0:36](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=36)** Excel knows automatically how to go at what chart it thinks we want to create.
>
> **[0:40](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=40)** Sometimes this magic works perfectly, but on this occasion, I actually want to select an area chart, and then the second option here, which is called a stacked area.
>
> **[0:50](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=50)** And then go ahead and click on okay.
>
> **[0:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=53)** As you can see in just a matter of moments, the chart has been created.
>
> **[0:57](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=57)** What I'm going to do now is move the chart and resize it just so that I can see a little bit more of the data.
>
> **[1:06](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=66)** Now, as you can see the final year here, which is 2020, it looks a little bit strange.
>
> **[1:11](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=71)** Now there wasn't a sudden decreasing EV sales.
>
> **[1:15](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=75)** This is simply because at the time that we took our data snapshot, it was early on in the year 2020, we didn't have a complete year.
>
> **[1:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=83)** Now you could always leave it like this, but I think that the optics look much better if we're working with complete years only.
>
> **[1:30](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=90)** So let's go ahead and click on the dropdown box next to row labels, and simply de-select the 2020 and then click on okay.
>
> **[1:43](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=103)** What you can see now at a glance is the trend of new EV sales in King County, Washington since 2010.
>
> **[1:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=111)** And as you can see there's been a steady increasing sales in pretty much every year, right up until 2018.
>
> **[1:58](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=118)** There was a small decrease in 2019.
>
> **[2:02](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=122)** Now, as you can see both town and city sales have increased, but it's a little bit difficult to see whether one has increased by more than the other.
>
> **[2:11](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=131)** So how about we go ahead and change the chart type to a 100% stacked area.
>
> **[2:18](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=138)** This will make it easier to see the percentage of sales.
>
> **[2:21](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=141)** Select change chart type, select 100% stacked area, and then go ahead and click on okay.
>
> **[2:29](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=149)** Straightaway what we can see is that the percentage of new EV sales that is as a percentage of the total in each year has been relatively stable since 2012 with perhaps a very slight increase in city sales in recent years.
>
> **[2:46](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=166)** Oh, and did you know that we can easily see these percentages in our pivot table instead of the rule sales figures?
>
> **[2:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=173)** Simply go ahead and right click on any of the numbers, select value field settings, click on show values as, and under the dropdown box here, we want to select percentage of row total.
>
> **[3:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=188)** And then click on okay.
>
> **[3:10](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=190)** And just like magic the percentages appear instead of the rule sales figures.
>
> **[3:15](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=195)** And just like that you have now created a powerful pivot chart using an existing pivot table.
>
> **[3:21](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/analyze-data-using-pivotcharts?u=76281980&t=201)** How easy was that?

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), dropdown (2), select the (1)
> **Code Keywords:** let (2), this, (1), type, (1)
> **CLI Commands:** make (3)
> **Analogies:** just like (2), such as (1)
> **Definitions:** is called (1)
> **Speakers:** - data (1)


### 4. Using Power Query with Power Pivot

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Scenario 1: Refresh source data
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=0)** - [Instructor] The data that we have sourced for our analysis here is a CSV file of electric vehicle sales from the Washington State Department of Licensing.
>
> **[0:10](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=10)** Now, we've taken quite a simple snapshot at a point in time, but the reality is over time, this data will be added to as new transactions are recorded.
>
> **[0:20](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=20)** So how does this impact our model, you might be wondering.
>
> **[0:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=23)** Well, if we set things up correctly, any changes to the source data should be easily reflected in your work simply by refreshing the source data.
>
> **[0:32](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=32)** Let's go ahead and see how this works.
>
> **[0:34](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=34)** Make sure that you click on the data tab and then go ahead and click on queries and connections.
>
> **[0:40](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=40)** And you'll see that a new pane has opened over on the right-hand side.
>
> **[0:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=44)** Let's hover over the query, and what you'll see is a pop-up appear.
>
> **[0:49](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=49)** As you can see under data sources, we have a CSV file, which is the EV sales that we imported a little bit earlier.
>
> **[0:57](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=57)** The file location will be wherever you've downloaded the exercise file pack to, most likely your desktop.
>
> **[1:04](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=64)** Now I'm just going to go ahead and close out of this view.
>
> **[1:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=68)** Now, we don't have time to walk through the entire process of how to download a new CSV file, but let's say that you've decided to download a new file from the Washington State Department of Licensing and have placed it into the same folder where the existing CSV exists.
>
> **[1:25](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=85)** To make sure that the new data flows through into your model, under queries and connections here, simply right-click on the query.
>
> **[1:37](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=97)** And then go ahead and click on refresh.
>
> **[1:40](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=100)** And in a few moments, the new or updated data will appear.
>
> **[1:45](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=105)** Now, be patient, as it may take some time for the new data to load.
>
> **[1:50](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=110)** As you can see, it's finding all the rows, in this case about 156,000 of them, and in a few moments that will be complete.
>
> **[1:59](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=119)** Now, to make sure that the new data flows through into all of your reports, under the data tab, simply click on refresh all, which is this icon here.
>
> **[2:10](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=130)** And again, be patient, as this may take a couple of moments.
>
> **[2:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=134)** And finally, if you don't want the hassle of having to manually do this in the future every time that the source data changes, simply go ahead and right-click on the query, and then go ahead and click on properties.
>
> **[2:28](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=148)** You'll see here that we have a few options that we can change under the refresh control.
>
> **[2:33](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=153)** Now, take the time to play around with some of the options here, but me personally, I like to leave the default options.
>
> **[2:40](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=160)** But did you know that if you go ahead and select refresh data when opening this file, that from now on your model will be updated with any new source data automatically every time you open up the file, and this includes any pivot tables and pivot charts that are feeding off your power pivot data model, too.
>
> **[2:59](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-1-refresh-source-data?u=76281980&t=179)** So why not go ahead and check it out for yourself?

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), right-click (2)
> **Code Keywords:** let (3), finally, (1)
> **Env Vars:** csv (4)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### Scenario 2: Updating queries
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=0)** - Sometimes it's only when you start to analyze your data that you notice that something isn't quite right.
>
> **[0:06](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=6)** This may be a problem with the actual source data, or it could be something as simple as needing to update the query.
>
> **[0:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=13)** The brilliant part about power query is, making a change to an existing query is extremely simple.
>
> **[0:20](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=20)** And with power query and power pivot designed to seamlessly work together, any changes to reports and charts update automatically.
>
> **[0:29](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=29)** Let's go ahead and take a look at the pivot worksheet.
>
> **[0:34](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=34)** If we click on the drop down box next to row labels, you'll notice that we've manually excluded one of the years from our data, which is the year 2020.
>
> **[0:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=44)** We did this because at the time we took our snapshot of data, it was an incomplete year and it was making the charts look a little bit strange.
>
> **[0:52](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=52)** Now, if this was the only chart we were to ever produce in our model, then this would be okay.
>
> **[0:58](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=58)** But over time, I'll guarantee you, that will only add to this with even more charts and reports.
>
> **[1:03](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=63)** I mean, imagine having to manually filter out 2020 from every single report.
>
> **[1:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=69)** Luckily there's a simple solution to all this and that's to update our query.
>
> **[1:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=74)** But before we go ahead and do that, let's just add 2020 back into our chart.
>
> **[1:20](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=80)** And then go ahead and click on, Okay.
>
> **[1:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=83)** Now let's go to the data worksheet and go ahead and select query, and then edit.
>
> **[1:33](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=93)** This opens up the query editor window.
>
> **[1:36](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=96)** Now to restrict the years coming through into our data table.
>
> **[1:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=101)** Let's go ahead and add another step from the transaction year column, which is just here.
>
> **[1:47](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=107)** Let's click on the dropdown box And under number filter.
>
> **[1:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=113)** Let's go ahead and select less than.
>
> **[1:59](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=119)** And type in the year 2020, and then go ahead and click on, Okay.
>
> **[2:06](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=126)** And what you'll notice is a new applied step has been added called filtered rows.
>
> **[2:12](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=132)** We filtered out 2020.
>
> **[2:15](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=135)** Now let's go ahead and click on close and load.
>
> **[2:18](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=138)** Be patient at this stage, as this step may take a couple of moments to process.
>
> **[2:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=143)** Now let's go ahead and click on the pivot worksheet once more.
>
> **[2:29](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=149)** select data from the menu options and then click on refresh all.
>
> **[2:34](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=154)** Now be super patient once more, as this step may take a few moments.
>
> **[2:39](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=159)** Excel is doing some serious crunching of data here, and once complete you'll notice that the year 2020 has disappeared.
>
> **[2:48](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=168)** Now it's actually been cleared from the data behind our reports, which we can see by simply clicking on the data worksheet.
>
> **[2:56](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=176)** And then let's click on the dropdown box next to transaction year and scroll down.
>
> **[3:02](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=182)** As you can see the year 2020 doesn't appear.
>
> **[3:06](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=186)** Now, don't worry It's still in the actual source data.
>
> **[3:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=189)** We've just removed it from our query, which means that wine appear` in our reports anymore.
>
> **[3:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-2-updating-queries?u=76281980&t=194)** And just like that, you've made a simple change to a query that will automatically flow through now to all of your reports, as well as every new report and chart that you prepare from now on.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), dropdown (2), go to (1), scroll down (1)
> **Code Keywords:** let (9), super (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** imagine (1), just like (1)
> **Speakers:** - sometimes (1)

#### Scenario 3: New reports
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=0)** - [Tutor] In my opinion, nothing highlights the value of a well designed and built Power Pivot and Power Query data model, than creating new reports. Why?
>
> **[0:10](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=10)** Because if this is done correctly, it should only take a minute or so to create a new report using your data.
>
> **[0:16](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=16)** Let's see how.
>
> **[0:17](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=17)** With the Excel file for this video open, head over to the pivot worksheet.
>
> **[0:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=23)** What you're looking at here is a report from a data model that we've already prepared.
>
> **[0:27](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=27)** And it's showing electric vehicle sales from the Washington State Department of Licensing.
>
> **[0:34](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=34)** This report shows new sales by location type.
>
> **[0:38](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=38)** But what if I want to see annual sales by say, make and model a vehicle.
>
> **[0:43](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=43)** Go ahead and click on a blank cell anywhere in this worksheet, and then go to insert, and then select pivot chart.
>
> **[0:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=51)** What's the most important thing to do here, is select use these workbooks existing data model, and go ahead and select new worksheet.
>
> **[1:01](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=61)** Let's go ahead and click on OK now.
>
> **[1:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=65)** Under EV sales here for King County, I'm just going to drag the transaction year and put it under axis.
>
> **[1:15](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=75)** I'm then going to select new or used vehicle, and I'm going to drag that to filters.
>
> **[1:22](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=82)** I'm now going to select electric vehicle fee paid, and drag that to values.
>
> **[1:30](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=90)** And finally, I'm going to drag the make and model which appears at the bottom here to legend.
>
> **[1:39](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=99)** Now let's go ahead and change the chart type by right clicking on it, selecting change chart type.
>
> **[1:48](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=108)** And on this occasion I just want a simple line chart.
>
> **[1:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=113)** Now click on OK.
>
> **[1:56](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=116)** Let's go ahead and change the sheet name to say, make and model.
>
> **[2:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=125)** Now let's move and resize the chart so that we can see a lot more of the data.
>
> **[2:14](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=134)** Finally, let's go ahead and filter on new car sales only, so as to not skew our analysis with used car sales.
>
> **[2:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=143)** To do this, click on the drop down box, expand all and go ahead and just select new and then click on OK.
>
> **[2:33](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=153)** And just like that, we've built a trend analysis of new vehicle sales by make and model.
>
> **[2:40](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=160)** Check out that large spike here in 2018 and 2019.
>
> **[2:44](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=164)** If we go ahead and click on one of the data points, what you'll notice here is that we're looking at the sales of the Tesla Model three.
>
> **[2:53](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=173)** As you can see, we've had some huge sales in 2018 and 2019.
>
> **[2:58](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=178)** If you like, you can go ahead and expand this analysis by looking at just town sales, for example, from the location type.
>
> **[3:06](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=186)** Now there's loads more things that you can do here.
>
> **[3:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=189)** And the best part is, you can actually break the source data in this view.
>
> **[3:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=193)** So why not have a play around?
>
> **[3:15](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-3-new-reports?u=76281980&t=195)** You'll never know what interesting insights you may discover.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), type. (3), finally, (2), this, (1)
> **UI Navigation:** click on (6), go to (1)
> **CLI Commands:** make (4)
> **Analogies:** just like (1), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [tutor] (1)

#### Scenario 4: New source data
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=0)** - [Instructor] Earlier in this chapter, we discussed the process for refreshing source data but we didn't actually have any new data in our CSV file.
>
> **[0:10](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=10)** So how about we work through a real world scenario where the data has changed?
>
> **[0:16](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=16)** Just make sure that you have 04_04 NewData open to follow along with me.
>
> **[0:22](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=22)** Okay. If we now jump into File Explorer, specifically the exercise file pack that you downloaded earlier, you'll notice that there's a second CSV file called EV sales (King county) Chapter 4.
>
> **[0:39](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=39)** This file contains approximately three years more data than the original file that we've been working with throughout this course hence why the file size is so much larger.
>
> **[0:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=51)** In order for our model to point to this new data set, there's a couple of options but by far the easiest way is to go ahead and delete the original CSV file which is at the very bottom of the list here.
>
> **[1:05](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=65)** And then let's edit the file name of the updated CSV file to remove the text at the end of the file that says Chapter 4.
>
> **[1:16](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=76)** And let's make sure we get rid of the space after the brackets too.
>
> **[1:22](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=82)** Next, let's go ahead and jump back to the Excel file. And from the data menu here, click on Queries and Connections, and you'll notice that a pane opens to the right hand side of the screen.
>
> **[1:38](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=98)** From here, all we need to do is click on the refresh icon to the right hand side of the CSV file source.
>
> **[1:48](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=108)** And as you do, go ahead and watch the number of rows loaded change.
>
> **[1:55](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=115)** Excel is now importing the latest data from the CSV file.
>
> **[2:03](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=123)** And be patient here as this process might take a few moments.
>
> **[2:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=128)** And there you have it. You'll notice that the number of rows jumped from roughly 156,000 to over 340,000.
>
> **[2:16](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-4-new-source-data?u=76281980&t=136)** Great work. You've just updated the source data.

> [!info]- Semantic Content
>
> **Env Vars:** csv (6)
> **Code Keywords:** let (3), delete (1)
> **CLI Commands:** make (2)
> **Cross-References:** earlier in (1), we discussed (1)
> **UI Navigation:** click on (2)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### Scenario 5: Finessing reports
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=0)** - [Instructor] With the 04_05 FinesseReports Excel file open go ahead and click on Data and then Queries and Connections.
>
> **[0:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=13)** And when the pane opens to the right hand side of the screen, go ahead and click on the refresh icon.
>
> **[0:20](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=20)** This just makes sure that we are working with the latest source data.
>
> **[0:27](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=27)** We need to pause at this point whilst this processes. It will take a little while but you should see the number of rows increase to roughly 343,000.
>
> **[0:41](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=41)** Great. The new source data has loaded. However, if we now go ahead and click on the pivot worksheet here, which contains our reports, you'll notice that we're still looking at the old data set which finishes in 2019. Now I know for a fact that this new data set contains data right up to 2022. So something's going on.
>
> **[1:09](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=69)** You see, when we refreshed the source data just a few moments ago, we didn't actually refresh the pivot reports. This needs to be undertaken as a separate step.
>
> **[1:23](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=83)** So let's go ahead and click somewhere in the pivot table and from the pivot table analyze menu that appears at the top, go ahead and select Refresh All. This updates all the charts and tables in our model.
>
> **[1:37](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=97)** And again, you'll need to be patient as this processes. Now it might not look like anything has changed and that's because we need to perform one last step. When we first created this report, we applied a filter on the year.
>
> **[1:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=111)** Let's actually go ahead and remove this by clicking on the dropdown box next to row labels here and then clicking on clear filter from transaction year. And you'll see that the table and chart have been updated to reflect the most recent year's worth of data. Awesome.
>
> **[2:12](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=132)** However, on reflection, this data doesn't really do it for me.
>
> **[2:19](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=139)** Certainly not in this view. Seeing the percentage split of city versus town EV sales is kind of useful, but I think seeing the raw numbers would be much better.
>
> **[2:33](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=153)** So let's go ahead and change the pivot chart type from 100% stacked area to just a stacked area chart and click on OK. Lastly, we need to change the values type from percentage of row total to no calculation. To do this, let's go ahead and click on the dropdown box next to count of vehicle sales. Then select value field settings and from show values as, let's change from percentage of row total to no calculation and then click on OK.
>
> **[3:08](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=188)** And this chart is really taking shape now. But how about we go ahead and change the number style to comma with zero decimal places.
>
> **[3:22](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/scenario-5-finessing-reports?u=76281980&t=202)** I'm just selecting the data fields here, clicking on the comma option here and then decreasing to zero decimal places. Now, I don't know about you, but I feel like this view is much more insightful.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (1)
> **UI Navigation:** click on (4), dropdown (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=0)** - [Joshua] Thank you so much for taking the time to watch this course.
>
> **[0:03](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=3)** What you have just learned is only a brief introduction on how using Excel's Power Query together with Power Pivot can harness the value of your data.
>
> **[0:13](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=13)** Now, new Excel features are being released all the time.
>
> **[0:17](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=17)** And so I strongly suggest that you keep abreast of what's changing in this space.
>
> **[0:21](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=21)** The one resource that I do recommend for this is to become part of Microsoft's Office Insider program.
>
> **[0:28](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=28)** By joining this program, you'll become an integral part of this growing collaborative community and, better yet, get ahead of the game by receiving early access to new features.
>
> **[0:40](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=40)** And to truly reinforce your learnings from this course, I strongly suggest you try creating your own data model from scratch, using some high quality source data that you can find.
>
> **[0:51](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=51)** Why not see what you can find on the open data network?
>
> **[0:55](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=55)** And finally, I encourage you to connect with me on LinkedIn.
>
> **[0:58](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=58)** I'd truly love to hear your feedback on this course.
>
> **[1:02](https://www.linkedin.com/learning/excel-working-together-with-power-query-and-power-pivot/next-steps?u=76281980&t=62)** Thanks again for watching.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** finally, (1)
> **Speakers:** - [joshua] (1)


## Instructor

- [[Joshua Rischin]]

## Resources

- Exercise files available

## Skills Covered

- Microsoft Power Query
- Microsoft Excel
- PowerPivot

## Path Context

### In [[Master Advanced Excel Data & Analytics Skills]]
← [[Excel VBA- Process Modeling]] | **3 of 7** | [[Using Python with Excel]] →

## Appears In

- [[Master Advanced Excel Data & Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Excel- Power Query for Beginners]] — Microsoft Excel, Microsoft Power Query
- [[Excel- Filtering Data for Beginners]] — Microsoft Excel
- [[Excel- Tracking Data Easily and Efficiently]] — Microsoft Excel
- [[Excel for Business Analysts]] — Microsoft Excel
- [[Complete Guide to Excel Statistics with Copilot]] — Microsoft Excel

---

[↑ Back to top](#)