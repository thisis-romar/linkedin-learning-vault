---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: advanced-analysis-using-python-in-excel-copilot
url: "https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot"
duration_minutes: 18
duration: 18m
level: Intermediate
updated: 9/20/2024
learners: 45318
skills:
  - Python (Programming Language)
  - Microsoft Excel
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEMwz5GY4Vb5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726771013304?e=2147483647&amp;v=beta&amp;t=yOQG5dp9yHEBzueeJdAyqzAUVToujDeFi18clqksaWA"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Python in Excel Skills]]'
prev_courses:
  - '[[Advanced Python in Excel- Machine Learning]]'
path_nav: '[{"path":"Advance Your Python in Excel Skills","position":7,"total":7,"prev":"Advanced Python in Excel- Machine Learning","next":null}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/microsoft-excel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Advanced%20Analysis%20Using%20Python%20in%20Excel%20Copilot.md)

![Advanced Analysis Using Python in Excel Copilot](https://media.licdn.com/dms/image/v2/D560DAQEMwz5GY4Vb5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726771013304?e=2147483647&amp;v=beta&amp;t=yOQG5dp9yHEBzueeJdAyqzAUVToujDeFi18clqksaWA)

# Advanced Analysis Using Python in Excel Copilot

> The advanced analysis capabilities of Copilot in Excel allow you to leverage the power of the Microsoft Copilot generative AI assistant to build Python code and solutions right within Excel. With Python and Excel Copilot, you can ask questions about your data in a conversational manner, allowing you to shape outputs and insights to meet your specific needs. Join instructor Scott Simpson in this qu

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot) | 18m | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Advanced analysis using Python in Excel Copilot](#advanced-analysis-using-python-in-excel-copilot)
  - [Using Python in Excel](#using-python-in-excel)
- [**1. Advanced Analysis**](#1-advanced-analysis) (3 videos)
  - [Using advanced analysis](#using-advanced-analysis)
  - [Analyzing real-world data](#analyzing-real-world-data)
  - [Transforming and plotting geodata](#transforming-and-plotting-geodata)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Advanced analysis using Python in Excel Copilot](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/advanced-analysis-using-python-in-excel-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/advanced-analysis-using-python-in-excel-copilot?u=76281980&t=0)** - [Scott] The ability to use [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] gives us enormous flexibility to work with our data using the best tools in the field, and now, we can leverage the power of [[Microsoft Copilot|Copilot]], [[Microsoft]]'s [[Generative AI]] assistant to build Python solutions for us right within Excel. Advanced analysis using Python and Excel Copilot lets us ask Copilot questions about our data in a conversational way, and allows us to shape the solutions, outputs, and insights to meet our needs. I'm Scott Simpson, and I hope you'll join me for this quick introduction to the Advanced Analysis capabilities of Excel Copilot. We'll see how this feature uses Python to generate insights, create interesting and useful plots, and understand and analyze tabular data. This feature is available in a limited preview at the time that I'm recording this, and should be rolling out more widely in the future. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Excel|Excel]] (4), [[Microsoft Copilot|Copilot]] (4), [[Microsoft]] (1), [[Generative AI]] (1)
> **CLI Commands:** python (4)
> **Speakers:** - [scott] (1)

#### [Using Python in Excel](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/using-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/using-python-in-excel?u=76281980&t=0)** - [Instructor] Before we move on to using advanced analysis to generate [[Python (Programming Language)|Python]] code for us, let's take a few minutes exploring how Python in [[Microsoft Excel|Excel]] works just to get started. Python in Excel is a feature that's available to [[Microsoft 365]] subscribers, and it allows us to use Python inside of Excel. This feature is made possible by an Anaconda Python environment running in the cloud, and that environment has many popular [[Data Science]] and machine learning libraries already installed. That's things like Matplotlib, Scikit-learn, NumPy, SciPy, [[Pandas (Software)|Pandas]], Seaborn and more. We'll access these libraries, and write our Python code in a Python cell, which we can create anywhere on the Excel grid by typing =py(). We can edit our Python code right in that cell using the editor bar, or we can find formulas in the ribbon, and find the Python section, and open up a Python editor on the side of our window to see more code. at once. Python in Excel can reference values in the Excel workbook using the Excel function. When we use this to refer to a range, we'll get a data frame in Python. And if we use it to refer to one cell, we'll get that individual value to use in Python. Python in Excel can't reach out to the file system or to the internet, so we'll need to provide the data that we want to use it with either manually by opening a file and adding that to the sheet or by importing data through [[Microsoft Power Query|Power Query]] or other means within Excel. I have a workbook here with some basic data, and a few Python cells. You can download this from the exercise files area for this course. Let's spend just a moment working with
>
> **[1:34](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/using-python-in-excel?u=76281980&t=94)** the Python in Excel feature, so we're familiar with it when we start exploring advanced analysis. I have a table of values here representing X and Y, and then down below, I have an area to input a value, and display an expected value Y based on the input value X. Here in this cell, which is a Python cell, I have a few lines of Python code using Scikit-learn to perform [[Linear Regression]] in order to predict my value. Let's take a look at that. I'll click on the cell. Go to formulas. Find the Python section and click editor. Here is my Python code. This Python code runs whenever I update a cell in the sheet. Though I can turn that off, and only perform calculation manually when I need to, here in the ribbon, under formulas, calculation and calculation options. I'll leave mine on automatic though. This code result s in a variable called predicted Y, and here in this Python cell at B9, I've called that variable to display its value. The code here in D1, also plots these points using Matplotlib, and Seaborn to show the existing data, and the predicted data. The result of this piece of code is an image. So I'll right-click this cell, and indicate that I want to show this as a plot over the cells. And if I update a value here, everything recalculates and redraws.
>
> **[3:07](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/using-python-in-excel?u=76281980&t=187)** These python cells are evaluated in row major order from top to bottom, left to right. So the variable that I defined here in this cell is available to be used to the right or below it, which is why I can use it down here. Okay. That's a really brief introduction to how the Python in Excel feature works, and if you're curious to learn more about the basics of this, be sure to take a look at the Python in Excel courses here on [[LinkedIn]] Learning. Let's move on now to exploring advanced analysis using Python in Excel [[Microsoft Copilot|Copilot]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (26), [[Microsoft Excel|Excel]] (13), [[Microsoft 365]] (1), [[Data Science]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (26), find (3)
> **UI Navigation:** click on (1), go to (1), right-click (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** anaconda (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. Advanced Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Using advanced analysis](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/using-advanced-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/using-advanced-analysis?u=76281980&t=0)** - [Instructor] [[Microsoft Copilot|Copilot]] is [[Microsoft]]'s [[Generative AI]] assistant. And as a Copilot Pro subscriber, we can use it inside of [[Microsoft Excel|Excel]] to provide tips and insights and to analyze our data. Today, I'm happy to be able to show you a forthcoming feature of Excel Copilot called "Advanced analysis," which allows Copilot to generate [[Python (Programming Language)|Python]] code to help us analyze our data. Using Advanced analysis, Excel Copilot will be able to recognize data in tables in my workbook. So it starts out with that useful context, and we can ask natural language questions about that range of data. Advanced analysis will use our data and prompts that we provide to generate Python code that responds to our requests. I have a workbook here with some sushi dishes and their prices and ratings. Let's use this data to explore how Advanced analysis works. Here's my data, and we can see a few different columns of information here. To find the Advanced analysis feature, I'll open my Home ribbon, and find the Copilot button, and click it. Here, I have the Advanced analysis button, which I can see offers deeper analysis using Python. I'll click this. And I can see the prompt that it sends to Copilot, it says, "Get deeper analysis results using Python." The response is an offer to start Advanced analysis, which will create a new sheet for the results, automatically write and insert Python formulas, and answer our prompt in multiple messages. I'll click to start advanced analysis.
>
> **[1:42](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/using-advanced-analysis?u=76281980&t=102)** Once Copilot has considered my data, a few things happen, we see Copilot's work as it goes, and we'll see the results in our analysis sheet once it's satisfied with what it's done. Here's my result sheet, and notice that it's not only created a dataframe to start out here, but it's also giving me some suggestions of what I can do with this data, that's useful. Let's start out with a prompt here in the Copilot area. I'll ask, "Plot the relationship between price and rating, including the regression." Copilot thinks for a little while, and then we'll start seeing what it's doing. We see each step in rationale. And when it's done, the result is recorded in our worksheet here. If we'd like to, we can take a look at what it's come up with and see how it's generated this plot and added the regression line I asked for. I can also see that it's added confidence intervals in this case. I'll scroll up a little bit here. After I provided my prompt, Copilot gave me a response. This response shares its strategy. After that, we'll see the Python code that Copilot generated. For more details, we can click Show explanation. Copilot has provided comments in the code. And down at the bottom, it's provided an explanation. Then Copilot tells us which cell it inserted the code in, and in this case, the result of the code is a plot. Finally, Copilot provides me a summary.
>
> **[3:15](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/using-advanced-analysis?u=76281980&t=195)** What you see may be a little different than what I have because a large language model may respond differently in different circumstances, but this is what I wanted to see here. It looks like I have a fairly strong correlation here. The more expensive items are rated more highly, interesting. But let's go a step further and see what other kinds of relationships we might find. Let's cluster these ratings into sensible groupings. I'll do that by providing the prompt, "Perform [[k-means clustering]]." Notice that I don't have to tell Copilot what I'm talking about. It already has the context of the data that I'm working with, and it knows what libraries and features are available in Python and Excel. So it can build Python code that does what we're asking based on both of those things. The result of my prompt is an elbow plot where I can see which number of clusters is optimal, and it looks like three in this case. Or it can just tell advanced analysis to use the optimal number of clusters, and it can recognize what that means and does what it needs to do. The result of this prompt is a dataframe. If I need to perform further analysis, that could be useful. Or if I want to actually see what these look like, I'll write, "Plot these clusters."
>
> **[4:39](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/using-advanced-analysis?u=76281980&t=279)** And then I see my plot here with the clusters marked with different colors. Throughout this process, my requests have been translated into headers in this sheet here, and the step-by-step results are saved as Python cells, so I can come back to the sheet even if I'm not using Copilot, and run each Python cell again to get the same results. Or I could share this document with someone else who has Python and Excel enabled, and they'll be able to reproduce these results as well. Next, let's take a look at using some real-world data to try out some other capabilities of Advanced analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (18), [[Python (Programming Language)|Python]] (11), [[Microsoft Excel|Excel]] (5), [[Microsoft]] (1), [[Generative AI]] (1)
> **CLI Commands:** python (11), find (3)
> **Definitions:** is an  (2), is a  (2)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing real-world data](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/analyzing-real-world-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/analyzing-real-world-data?u=76281980&t=0)** - [Instructor] To explore real-world data using advanced analysis, I'll be using a dataset of electric vehicle data from the US state of Washington. This data is available from [data.gov](https://data.gov) as a CSV. I'll download that. And I'll open it in [[Microsoft Excel|Excel]]. In order to use advanced analysis, the auto save feature needs to be enabled, and for that to happen, we need for this file to be an Excel file. So I'll save it as that.
>
> **[0:45](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/analyzing-real-world-data?u=76281980&t=45)** I will open my Home ribbon and find the [[Microsoft Copilot|Copilot]] button and click it. And then I'll move into Advanced analysis for this workbook.
>
> **[1:03](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/analyzing-real-world-data?u=76281980&t=63)** Let's explore this data a little bit and ask a fairly basic question like, "What are the top five most popular models of car?"
>
> **[1:14](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/analyzing-real-world-data?u=76281980&t=74)** Copilot shows its work and returns a data frame with the five most popular models. It also displays it here in the chat. That's something we could also do with Excel by itself. But what's important here is that Copilot is using [[Python (Programming Language)|Python]] and its understanding of our data to build a data frame and use the Python methods for working with the data frame to return our results. Let's have Copilot examine the trend of electric vehicle registrations over the years.
>
> **[1:48](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/analyzing-real-world-data?u=76281980&t=108)** Here we see that it's created a plot and placed it in our working document. This plot is showing the model year along the x-axis and the number of registrations for each model year on the y-axis. So it looks like so far, the 2023 model year, regardless of which make or model, has been the most popular by far. But we don't have all of the data for 2024's registrations yet, so after 2023, our data is less reliable. And of course at this point there aren't that many 2025 model year cars being registered yet, so that looks like it's going to zero, but in reality it probably isn't. So let's add some limits to our plot and divide out the types of EVs so we can look at the difference between battery electric and plug-in hybrids. I'll type, Examine the trend of electric vehicle registrations from 2013-2023. Include analysis for each type of electric vehicle." Here we're relying on Copilot's understanding of our data.
>
> **[2:49](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/analyzing-real-world-data?u=76281980&t=169)** That's interesting. Battery electric is becoming a lot more popular. I bet I know why that is, but let's write another prompt to explore the popular models. I will type, "Examine the trend of registrations for the five most popular battery electric vehicles between 2013 and 2023."
>
> **[3:13](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/analyzing-real-world-data?u=76281980&t=193)** All right, now we can see why battery electric vehicles became so much more popular in the recent model years. There's a couple of models that really pushed that number up. We've been having a conversation with Copilot here about our data, allowing us to ask questions and then change our focus as we go. So we can ask about something we've already done to make changes or to pivot to a different direction. For example, I'll type, "Make the series lines thicker and remove the grid lines." In this case, I'm talking about the plot itself, not the data. And with a result, we can see that advanced analysis still knows what we're talking about. Remember, our prompts are being run through a large language model that knows about our data and knows about the Python and Excel set of libraries and features. If we had time series data, for example, we could use advanced analysis to predict future values and we'd get tables or charts of predicted data based on what we asked. We can ask for confidence intervals, and we can ask for data to be clustered should our dataset have interesting properties that would make those approaches useful. Next, let's turn to working with a different kind of information to see what advanced analysis can do with that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6), [[Microsoft Excel|Excel]] (4), [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** make (4), python (3), find (1)
> **Analogies:** for example (2)
> **URLs:** [data.gov](https://data.gov) (1)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)

#### [Transforming and plotting geodata](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/transforming-and-plotting-geodata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/transforming-and-plotting-geodata?u=76281980&t=0)** - [Instructor] In this dataset, the locations of each registration are provided in a text field that combines both the longitude and latitude, along with some other information. Usually, though, we'll want our data to be a latitude first and longitude second, and in the field we have, these values are reversed. So let's ask [[Microsoft Copilot|Copilot]] to extract and transform the number values we're looking for in the way we want to use them from this single string field. I'll move back to my Analysis, and then I'll click into Advanced Analysis. I'll type, "Convert the values in the vehicle location field to latitude and longitude values. The longitude appears first in the vehicle location field and the latitude appears second."
>
> **[0:48](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/transforming-and-plotting-geodata?u=76281980&t=48)** This has given Advanced Analysis enough information to interpret the values in this field, and it adds a new data frame to our context, and I can see the preview of the transformation here. Now the longitude and latitude for each entry are separate values that we'll be able to work with more easily. Let's plot this and see what this information looks like. I'll type, "Plot the locations of vehicles separated by type."
>
> **[1:17](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/transforming-and-plotting-geodata?u=76281980&t=77)** There's a plot of the location associated with each registration. I can see the shape of the United States here, and that's pretty cool, but we can use information that Copilot has to help narrow this down. Let's look at the locations just within the state of Washington. I'll type, "Restrict the plot to only those points within the boundary box of the US state of Washington." And here I see my result. Copilot knows about the approximate bounding box of where Washington is separately from the dataset that we've given it here. I can scroll up here and find the [[Python (Programming Language)|Python]] code, and I can see that Copilot provided these values. So, with Copilot's help, we've added some information that lets us better visualize the distribution of electric vehicles in one state. Let's take a look at this data in a little bit of a different way. I'll type, "Describe the areas of highest density."
>
> **[2:18](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/transforming-and-plotting-geodata?u=76281980&t=138)** Once again, we can see that Copilot maintains the context of what we're talking about. It's working with just the points inside the bounding box of Washington. It's generated a heat map for us, and perhaps, unsurprisingly, we can see that the greater Seattle area has the highest density of electric vehicles, though there are some other interesting clusters as well, like Spokane and the Vancouver, Portland area. This was all generated with Python, and we've transformed real-world data that would've been a little tricky to use otherwise into a variety of useful insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), find (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/next-steps?u=76281980&t=0)** - Advanced analysis with [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] [[Microsoft Copilot|Copilot]] gives us the ability to use [[Generative AI]] to work with Python, to analyze and display our data in Excel. As with any generative AI or large language model, the responses you see may differ from what I have here, and it's always important to check the results to make sure they're doing what you expect. Sometimes advanced analysis will generate code that isn't valid, or it will try to use a library that isn't included in the Python and Excel feature. Because it reads its own output, the feature will try to correct itself, but if after a few attempts it can't get it right, it'll let us know and it will need to ask in a different way. It can be useful to specifically ask advanced analysis to use Python in your prompt. In my experience, it didn't stray away from using Python, but if it does, that's one way to get back into Python solutions. If you ask regular Excel Copilot to use Python, it'll recommend using advanced analysis if that's available to you. When writing prompts, try to use existing field names and avoid ambiguity. Recognize that it's applying Python Statistical libraries based on what it thinks it needs to do. So if you know the name of a specific action you want to take, or a specific kind of analysis you want, be sure to ask for that by name. And remember that the conversation maintains the context, so you can ask follow-up questions and advanced analysis, we'll know what you're talking about. You can start a new topic if you want to change the focus of the conversation too. Using Copilot can help speed up a lot of Python analysis related tasks, and it helps us generate plots quickly
>
> **[1:33](https://www.linkedin.com/learning/advanced-analysis-using-python-in-excel-copilot/next-steps?u=76281980&t=93)** without having to know the details of the powerful analysis or plotting libraries that are available to us. If you have access to this feature, spend some time working with your own data to see what insights Copilot can find. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (9), [[Microsoft Excel|Excel]] (4), [[Microsoft Copilot|Copilot]] (4), [[Generative AI]] (2)
> **CLI Commands:** python (9), make (1), find (1)
> **Speakers:** - advanced (1)


## Instructor

- [[Scott Simpson]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Microsoft Excel

## Path Context

### In [[Advance Your Python in Excel Skills]]
← [[Advanced Python in Excel- Machine Learning]] | **7 of 7**

## Appears In

- [[Advance Your Python in Excel Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Microsoft Excel
- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Microsoft Excel
- [[Python in Excel- Data Outputs in Custom Data Visualizations and Algorithms]] — Python (Programming Language), Microsoft Excel
- [[Python in Excel- Working with pandas DataFrames]] — Python (Programming Language), Microsoft Excel
- [[Python In Excel Getting Started With Data Analysis]] — Python (Programming Language), Microsoft Excel

---

[↑ Back to top](#)