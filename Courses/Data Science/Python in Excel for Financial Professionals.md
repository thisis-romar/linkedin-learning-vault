---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-in-excel-for-financial-professionals
url: "https://www.linkedin.com/learning/python-in-excel-for-financial-professionals"
duration_minutes: 48
duration: 48m
level: Intermediate
updated: 4/9/2024
learners: 82631
skills:
  - Python (Programming Language)
  - Data Analysis
  - Microsoft Excel
  - Data Visualization
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFrdzeuV1gobA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712350718189?e=2147483647&amp;v=beta&amp;t=eF5s1m3cK3jl7KCh87QxTGWrFD_5AW29iXOCeikkVK4"
linkedin_topic: Data Science
learning_paths:
  - '[[Python for Data Professionals in Finance]]'
prev_courses:
  - '[[Getting Started with Python for Finance]]'
next_courses:
  - '[[Advanced Python in Excel for Finance- A Hands-On Approach]]'
path_nav: '[{"path":"Python for Data Professionals in Finance","position":2,"total":5,"prev":"Getting Started with Python for Finance","next":"Advanced Python in Excel for Finance- A Hands-On Approach"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-analysis
  - skill/microsoft-excel
  - skill/data-visualization
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20in%20Excel%20for%20Financial%20Professionals.md)

![Python in Excel for Financial Professionals](https://media.licdn.com/dms/image/v2/D560DAQFrdzeuV1gobA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712350718189?e=2147483647&amp;v=beta&amp;t=eF5s1m3cK3jl7KCh87QxTGWrFD_5AW29iXOCeikkVK4)

# Python in Excel for Financial Professionals

> Now that Microsoft announced the integration of Python within Excel, finance professionals need to learn how to leverage this integration for data analytics, automation, and ways to improve their work. In this course, finance analytics manager Christian Martinez guides you through ways to use data analytics to enhance your analytical and modeling abilities.

> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals) | 48m | Intermediate | 83K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Welcome to Python in Excel](#welcome-to-python-in-excel)
  - [What you should know](#what-you-should-know)
  - [Introduction to Python in Excel](#introduction-to-python-in-excel)
- [**1. Getting Started with Python in Excel**](#1-getting-started-with-python-in-excel) (6 videos)
  - [Integration of Python in Excel](#integration-of-python-in-excel)
  - [Installation](#installation)
  - [Introduction to basic Python functions](#introduction-to-basic-python-functions)
  - [How to use your data with Python in Excel](#how-to-use-your-data-with-python-in-excel)
  - [Challenge: Load three financial statements](#challenge-load-three-financial-statements)
  - [Solution: Load three financial statements](#solution-load-three-financial-statements)
- [**2. Financial Modeling**](#2-financial-modeling) (7 videos)
  - [Discounted cash flow, part 1](#discounted-cash-flow-part-1)
  - [Discounted cash flow, part 2](#discounted-cash-flow-part-2)
  - [Forecasting](#forecasting)
  - [Budgeting](#budgeting)
  - [Other financial models](#other-financial-models)
  - [Challenge: Forecast sales for Company ABC](#challenge-forecast-sales-for-company-abc)
  - [Solution: Forecast sales for Company ABC](#solution-forecast-sales-for-company-abc)
- [**3. Automation**](#3-automation) (4 videos)
  - [Automate consolidation of data](#automate-consolidation-of-data)
  - [Automate cleaning data](#automate-cleaning-data)
  - [Challenge: Automation](#challenge-automation)
  - [Solution: Automation](#solution-automation)
- [**4. Data Visualization**](#4-data-visualization) (4 videos)
  - [Basic charts and graphs for finance](#basic-charts-and-graphs-for-finance)
  - [Advanced charts and graphs for finance](#advanced-charts-and-graphs-for-finance)
  - [Challenge: Create five graphs](#challenge-create-five-graphs)
  - [Solution: Create five graphs](#solution-create-five-graphs)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to Python in Excel](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/welcome-to-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/welcome-to-python-in-excel?u=76281980&t=0)** (pleasant music)
>
> **[0:01](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/welcome-to-python-in-excel?u=76281980&t=1)** - [Christian] Did you know that [[Python (Programming Language)|Python]] can supercharge your [[Financial Analysis]] in [[Microsoft Excel|Excel]]? Do you want to harness the power of Python within Excel to streamline financial tasks, save time, and gain a competitive edge in your career? I'm excited to introduce you to a course that will transform the way you work with [[Financial Data]] in Excel. The biggest benefit you will gain from my course is the ability to leverage Python's capabilities to automate complex financial calculations, perform data analysis, and create interactive financial models in Excel. I'm Christian Martinez, assistant finance analytics manager with over eight years of experience at the intersection of finance and technology. So let's start this exciting journey together. (pleasant music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Python (Programming Language)|Python]] (3), [[Financial Analysis]] (1), [[Financial Data]] (1)
> **CLI Commands:** python (3)
> **Non-Speech:** (pleasant music) (2)
> **Speakers:** - [christian] (1)

#### [What you should know](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/what-you-should-know?u=76281980&t=0)** - [Instructor] If you want to get the most out of this course, you should have a basic knowledge of [[Microsoft Excel|Excel]]. You will be learning how to integrate [[Python (Programming Language)|Python]] to Excel, so familiarity with Excel will be beneficial. Additionally, a fundamental understanding of finance concepts, whether it's from investment [[Banking]], accounting, or FP&A, will be really useful. While not mandatory, having this background will help you to understand the financial applications of Python more effectively. There is an exercise file under Related to This Course where you can download the Excel file with the practical applications of this course. Now you're ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Python (Programming Language)|Python]] (2), [[Banking]] (1)
> **CLI Commands:** python (2)
> **Exercise Files:** exercise file (1), download the (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to Python in Excel](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/introduction-to-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/introduction-to-python-in-excel?u=76281980&t=1)** - [Instructor] [[Python (Programming Language)|Python]] is a versatile, high-level programming language known for its simplicity and readability. It's like a powerful Swiss Army knife for [[Financial Analysis]]. With Python, you can automate tasks, analyze data, create financial models, and much more. It's a language that is easy to learn and widely used in various industries, including finance, and now, it's available directly in [[Microsoft Excel|Excel]]. Now, you might be wondering, "Why should I, a finance professional, learn Python?" Well, Python can supercharge your financial analysis and reporting. It allows you to work with large datasets, perform complex calculations, and build robust financial models. Python's libraries, like [[Pandas (Software)|pandas]] and NumPy are tailor-made for data analysis, making it an ideal choice for financial analysis. Learning Python can save you valuable time by automating repetitive tasks, reducing the risk of errors, and providing [[Real-Time]] insights into [[Financial Data]]. So if you are looking to stay competitive and excel in your finance career, learning Python is a smart move. In this course, you will learn how Python can empower you in the finance world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Financial Analysis]] (3), [[Microsoft Excel|Excel]] (2), [[Pandas (Software)|Pandas]] (1), [[Real-Time]] (1)
> **CLI Commands:** python (8)
> **Definitions:** is a  (2)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Python in Excel

[↑ Back to Table of Contents](#table-of-contents)

#### [Integration of Python in Excel](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/integration-of-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/integration-of-python-in-excel?u=76281980&t=1)** - [Instructor] Remember the time when you had to manually sift through heaps of data in [[Microsoft Excel|Excel]], feeling lost in the endless rows and columns? What if I told you there's a way to make Excel smarter, faster, and more powerful? That's where [[Python (Programming Language)|Python]] comes in, transforming Excel from a simple spreadsheet tool into a dynamic data powerhouse. Let's explore how. Python is like a magic wand for Excel. It simplifies complex tasks, automate repetitive ones, and unlocks advanced data analysis capabilities. First, let's get Python and Excel to talk to each other. You'll need to check that you're using [[Microsoft 365]] Insider Version of Excel and that you're signed up for Beta Channel. This will allow you to have Insert Python within the formula bar in your Excel file. Python in Excel brings a new level of precision to DCF models, automate cashflow projections, adjust discount rates, and instantly update valuation models. Move beyond Excel limitations in [[Forecasting]], Python lets you incorporate complex [[Algorithms]] for more reliable financial forecasts, it's like having a crystal ball that actually works. Budgeting doesn't have to be a chore, Python helps automate the aggregation of data, apply budget constraints, and analyze variances. This turns budgeting from a task
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/integration-of-python-in-excel?u=76281980&t=93)** into a strategic tool to full business partnering. Juggling multiple data sources. Python automates the consolidation and cleaning of [[Financial Data]], ensuring accuracy and saving hours of manual work. Transform your data into insights with powerful visualizations, from basic financial charts to advanced interactive [[Dashboards]], Python enhances your ability to present data in Excel. So you have just seen how integrating Python with Excel opens up a new realm of possibilities. Start experimenting with simple scripts and see how they transform your Excel experience. Embrace this power duo and make your data analysis smarter, faster, and more efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (12), [[Python (Programming Language)|Python]] (10), [[Microsoft 365]] (1), [[Forecasting]] (1), [[Algorithms]] (1)
> **CLI Commands:** python (10), make (2)
> **Env Vars:** dcf (1)
> **Analogies:** it's like (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Installation](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/installation?u=76281980&t=0)** - [Instructor] So how to unlock this new realm of magic, combining that analysis and visualization directly in [[Microsoft Excel|Excel]]. With the [[Python (Programming Language)|Python]] in Excel feature, you can now write Python code within an Excel workbook. Currently this exciting feature is rolling out to members of the [[Microsoft 365]] program. If you're an Insider but don't see it yet, keep your [[Microsoft Office|Office]] updated. All consumer and enterprise Microsoft 365 users can access this feature. For now, it's available exclusively on Excel for [[Windows]], with plans to expand to other platforms. I'll guide you through the simple steps to install Python in Excel. So open up Excel, and navigate to File and then Account. Click on Join Microsoft 365 Insider. In the Join box, select Microsoft 365 Insider and choose the beta channel. Click Update now. A restart of Excel may be necessary to complete the installation. After installing the latest Insider build, go to the Formulas tab in the ribbon and click on Insert Python. In the dialogue box, select the Try and Preview button. Alternatively, you can use =py, and then you're set up and ready to start using Python in Excel. Python calculations run in [[Microsoft]] Cloud
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/installation?u=76281980&t=96)** with a standard Python version. The feature includes core Python libraries provided by Anaconda, ensuring a secure, a standardized environment. To use Python in Excel an internet connection is required. With Python now accessible in Excel, you are ready to start integrating advanced data analysis into your financial workflows. Remember, this feature is a powerful addition to your financial toolkit, offering a new dimension of efficiency into your data handling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (10), [[Python (Programming Language)|Python]] (10), [[Microsoft 365]] (4), [[Microsoft Office|Office]] (1), [[Windows]] (1)
> **CLI Commands:** python (10)
> **UI Navigation:** click on (2), navigate to (1), go to (1), select the (1)
> **Prerequisites:** install (1), set up (1)
> **Tools:** anaconda (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to basic Python functions](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/introduction-to-basic-python-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/introduction-to-basic-python-functions?u=76281980&t=0)** - [Instructor] Have you ever wished for a more powerful set of tools to handle your financial tasks in [[Microsoft Excel|Excel]]? With [[Python (Programming Language)|Python]] is like having an advanced data analytics toolkit for your Excel spreadsheet. So what is Python? Python is a versatile program language known for its simplicity and power. It's like Excel's more sophisticated cousin, capable of handling large data sets, automating tasks, and performing complex calculations. Think of Python libraries as collections of specialized functions, each designed to simplify different aspects of your work. One of them is NumPy. NumPy makes handling numbers a breeze. It's perfect for performing mathematical operations, especially on large data sets. So imagine doing complex calculations in Excel, but faster and more efficiently. The second one is [[Pandas (Software)|pandas]]. Pandas is your go-to for [[Data Manipulation]] and analysis. It's like having a powerful [[Data Processing]] and cleaning tool, turning raw data into meaningful insights with just a few lines of code. Then we have Matplotlib. With this one, you can create graphs and charts, and it allows you to visualize data in ways that Excel can't from simple line charts to complex interactive plots. Finally, we have scikit-learn, which is your key to machine learning.
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/introduction-to-basic-python-functions?u=76281980&t=95)** This library is ideal for [[Predictive Modeling]] and complex [[Statistical Analysis]], opening up new possibilities in risk assessment and [[Financial Forecasting]]. This was an overview about libraries. Each of these libraries offers unique capabilities to enhance your [[Financial Analysis]]. So I encourage you to explore these tools, experiment with simple scripts, and witness the transformation in your financial tasks. Now to start using Python, remember you can insert a Python cell using the Python section within formulas or by doing equal PY, and then open your bracket. In here, you will have a multi-line editor where you can write your code. You can toggle between the cell and the formula bar with CTRL F2, and also expand the bar either by doing this or with control shift + U for a broader view. Remember that Python cells and Excel work together. And they're evaluated in row major order. So left to right, top to bottom. So set up imports or variables in one cell, and then you can use them in order. Remember, Python cells are evaluated based on their positions.
>
> **[3:07](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/introduction-to-basic-python-functions?u=76281980&t=187)** With these fundamentals, you are now ready to integrate Python into your Excel workflows, bringing enhanced capabilities to your financial analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10), [[Microsoft Excel|Excel]] (7), [[Pandas (Software)|Pandas]] (2), [[Financial Analysis]] (2), [[Data Manipulation]] (1)
> **CLI Commands:** python (10)
> **Analogies:** it's like (2), imagine (1)
> **Env Vars:** ctrl (1)
> **UI Navigation:** toggle (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [How to use your data with Python in Excel](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/how-to-use-your-data-with-python-in-excel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/how-to-use-your-data-with-python-in-excel?u=76281980&t=0)** - [Instructor] Imagine enhancing your financial models in [[Microsoft Excel|Excel]], not just with the tools available in Excel, but with the power of [[Python (Programming Language)|Python]]. I will show you how to use the Excel data directly in Python, combining the familiarity of Excel with the robust capabilities of Python. While Python can operate independently, its real power in finance comes from integrating it with Excel data. Whether it's a single cell or a range, Python can utilize this data. This is done using the Excel function within Python cells. Let's say that you have [[Financial Data]] in an Excel cell. You can create a Python variable like this. Choose a cell or a range. An Excel will automatically add the Excel function with the reference. This direct link means your Python code always uses the most current data. When the Excel data changes, your Python calculations update automatically. This dynamic link ensures your financial models are always up-to-date, whether it's for [[Real-Time]] market data analysis, or evolving financial forecasts. For more complex data, like a set of [[Financial Statements]], you can select a range in Excel.
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/how-to-use-your-data-with-python-in-excel?u=76281980&t=94)** Python recognizes this as a data frame, a powerful structure for data analysis. This integration simplifies working with large datasets, like portfolio returns or economic indicators, and Python extends beyond the Excel grid. You can use [[Microsoft Power Query|Power Query]] to import various data from multiple sources like [[Microsoft SQL Server|SQL server]], [[Microsoft Azure|Azure]], or CSV files. Once imported into Excel, this data can be directly used in Python, allowing for sophisticated analysis of diverse financial datasets. Now, you have seen how Python can interact with Excel, bringing a new dimension to your [[Financial Analysis]], whether it's for complex [[Financial Modeling]], data consolidation, or advanced analytics, this powerful combination is set to revolutionize the way you work with financial data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (14), [[Python (Programming Language)|Python]] (13), [[Financial Data]] (2), [[Real-Time]] (1), [[Financial Statements]] (1)
> **CLI Commands:** python (13)
> **Env Vars:** sql (1), csv (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Load three financial statements](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-load-three-financial-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-load-three-financial-statements?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-load-three-financial-statements?u=76281980&t=5)** - [Instructor] In this challenge, you will put your [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] skills to the test by loading three [[Financial Statements]]: the balance sheet, the income statement, and cash flow statement, into Python. You will then perform some basic analysis of these financial statements. Your task is to use the balance sheet, income statement, and cash flow as exercise files. You will need to convert these three items into [[Pandas (Software)|pandas]] data frames. Then, you will need to calculate three financial ratios, such as the gross profit margin, operating profit margin, and debt-to-equity ratio, using Python in Excel. Your goal is to get an Excel tab with the three financial statements loaded as data frames and the three ratios calculated. Now, pause the video, take on the challenge, and when you are ready, proceed to the solution video for guidance on how to tackle this task. It should take you around five minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Excel|Excel]] (3), [[Financial Statements]] (3), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (3)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Load three financial statements](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-load-three-financial-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-load-three-financial-statements?u=76281980&t=0)** (energetic electronic music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-load-three-financial-statements?u=76281980&t=5)** - [Instructor] Welcome back. I hope you had a chance to tackle the challenge. Now let's go through the solution. First, let's look at the data. The first step that we need to do was to convert these three items into [[Pandas (Software)|Pandas]] data frames. After that, we will need to calculate the three key financial ratios, gross profit margin, operating profit margin, and debt-to-equity ratio using [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]]. Remember, there may be alternative methods to achieve the same result, so feel free to explore different approaches that suit your preferences. Congratulations on completing this challenge. You have just taken a significant step towards mastering Python in Excel. Keep practicing and applying your skills and you will continue to excel in your finance career.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Python (Programming Language)|Python]] (2), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic electronic music) (1)


### 2. Financial Modeling

[↑ Back to Table of Contents](#table-of-contents)

#### [Discounted cash flow, part 1](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/discounted-cash-flow-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/discounted-cash-flow-part-1?u=76281980&t=0)** - [Instructor] Have you ever wondered how finance professionals determine the value of an investment or a company? One key method is a discounted cashflow or DCF analysis. In this first part of our two-part series, we will unravel the fundamentals of the DCF model, laying the groundwork for you to master this essential tool in [[Financial Analysis]] using [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]]. At its core, a DCF model is a method used to estimate the value of an investment based on its expected future cash flows. Central to DCF is a concept of the time value of money, which posits that a dollar today is worth more than a dollar tomorrow. This principle is vital because it means that future cash flows must be discounted to reflect their decreased value over time. A DCF model typically includes several components. The first one, it's a future cashflow projection. This estimates of the money a business will generate in the future. The second one is a discounted rate. This is the rate used to discount future cash flows back to their present value. And the third one is the terminal value. This is an estimate of a company's value at the end of the forecast period.
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/discounted-cash-flow-part-1?u=76281980&t=96)** Understanding these components is crucial for building a solid VCF model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Analysis]] (1), [[Python (Programming Language)|Python]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** dcf (5), vcf (1)
> **Definitions:** is a  (4), means that (1), is an  (1)
> **CLI Commands:** python (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Discounted cash flow, part 2](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/discounted-cash-flow-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/discounted-cash-flow-part-2?u=76281980&t=1)** - [Instructor] In the previous video, we established the foundation of a discounted cashflow model. So now let's bridge theory with a practical application. Understanding this code will introduce you to the power of [[Python (Programming Language)|Python]] using a simple example, and also we'll show you how to combine [[Microsoft Excel|Excel]] data and Python. To illustrate, we use an example with forecasted cash flows of 100, 150, 200, 250 and 300. A WAAC of 15%, and a perpetual growth rate of 3%. Running the calculate DCF function with these inputs gives us the DCF value of the investment. Our Python function, calculate dcf basically takes three arguments. The first is the data frame, the second one is a WAAC and the third one is the growth rate. This function is designed to compute the present value of forecasted cash flows, terminal value, and ultimately the total DCF value. The function begins by initializing the present value to zero. Then it iterates over each cashflow, discounted back to its present value using this formula. Then the terminal value represent the value
>
> **[1:39](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/discounted-cash-flow-part-2?u=76281980&t=99)** of the investment beyond the forecasted period. It's calculated using this formula. The total DCF value is the sum of the present value and the present value of the terminal value. This figure represents the total estimated value of the investment. With this practical insights into calculating a DCF using Python, you are now ready to apply this model in your [[Financial Analysis]]. Experiment with different cash flow projections, growth rates, and see how they influence the DCF value. Remember, if the DCF value is higher, it suggests that investment is undervalued and potentially a good buy. Conversely, if the DCF value is lower, it might be overvalued. Inter preparing these values correctly is key to making wise investment decisions. Use them as a guide, but always consider the broader economic and market context in your decision making process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Excel|Excel]] (1), [[Financial Analysis]] (1)
> **Env Vars:** dcf (8), waac (2)
> **CLI Commands:** python (4)
> **Tools:** terminal (3)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Forecasting](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/forecasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/forecasting?u=76281980&t=0)** - [Instructor] Do you ever feel like you need a crystal ball to predict your company's financial future? Well, guess what? With [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]], you are pretty close to having one. Think of [[Financial Forecasting]] as a way to tell your company's future using numbers. You are looking at past sales, expenses and market data to predict what might happen next. But first things first, let's make sure that Python and Excel are in talking terms. If you have followed my previous videos, you should have Python set up in Excel already. So let's start by pulling your [[Financial Data]] into Excel. This could be your sales history or expense reports. For us, we will be using sales data. Now, let's choose a model that fits our story. Are you looking at simple trends? Then [[Linear Regression]] could work, but if you are dealing with more complex seasonal changes, maybe you will need to consider a more advanced model like ARIMA or other machine learning [[Algorithms]]. For us, we will use linear regression. So we start by importing our helpers, our libraries, [[Pandas (Software)|pandas]] for [[Data Manipulation]],
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/forecasting?u=76281980&t=94)** NumPy, for numerical operations, and linear regression from Scikit-Learn for our [[Forecasting]] model. Also, Matplotlib for plotting our results and DayTime to handle dates. In here, we're creating a data frame, name sales. This is your actual sales over time. The Excel function grabs this data from Excel, making sure we include headers for easy reference. Next, we create a data range for the next 30 days. This will be used to predict future cells. Think of it as marking calendar dates for our sales forecast. We need then to transform our dates into a numerical format for regression. That's where np.arange comes in, creating a sequence representing each day in our sales data. Now, time to put our linear regression model to work. We fit the model to our historical sales, and this is where Python learns from past trends to predict the future. With our model ready, we now predict sales for the upcoming 30 days. We create a new range for these days and let our model forecast the sales figures.
>
> **[3:10](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/forecasting?u=76281980&t=190)** We then combine our forecasted data with the actual sales data into one same data frame. This allows us to compare our predictions with real numbers. And, finally, we plot our sales data and forecast on a graph. It's time to take a good look at the results. What's the story that they are telling? Are sales going up? Charts and graphs are like pictures for your data story. So use Python's tool to create visuals that make your forecast easy to understand and share. It's all about simplifying complexity. Remember that a forecast is just as good as its last update, so keep improving it. Now you are ready to start playing around with Python in Excel for your financial forecasts. It's like piecing together a puzzle where the piece of your company is your company's financial future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (7), [[Python (Programming Language)|Python]] (6), [[Linear Regression]] (4), [[Financial Forecasting]] (1), [[Financial Data]] (1)
> **CLI Commands:** python (6), make (2)
> **Analogies:** think of it as (1), it's like (1)
> **Env Vars:** arima (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Budgeting](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/budgeting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/budgeting?u=76281980&t=0)** - [Instructor] Picture this, you're about to tackle the annual budgeting process, but instead of the usual spreadsheet headaches, you have [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] as your ally. In this session, we'll explore how Python can streamline budgeting, transforming what's often a activities task into a smoother, more efficient process. Python when integrated with Excel supercharges the traditional budgeting process. It helps automate repetitive tasks, handle complex calculations, and brings in data analysis capabilities that are beyond basic Excel functions. Start by setting up your Excel workbook with historical [[Financial Data]], departmental budgets, and any other relevant financial information. This is your raw material that Python will help mold. Use Python to automatically pull in and aggregate data from various sheets or sources. No more manual copy pasting. Python scripts can summarize, categorize, and consolidate financial data, setting the stage for accurate budgeting. With Python, you can create complex budgeting models that would be too difficult in Excel alone. In instance, you can script Python to allocate funds based on departmental performance or projected needs. And go beyond static budgeting.
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/budgeting?u=76281980&t=96)** Use Python to implement predictive models like heat maps to visualize correlations on expenses and revenues. This can help in setting more realistic and dynamic budgets. Visualize your budget data using Pythons libraries like bundle lib. Create interactive charts and graphs that provide clear insights into your [[Financial Planning]] making it easier to present and understand. Budgeting, isn't a one-time activity, so use Python to continuously update and refine your budget as new data comes in, or as business condition change. Now you have seen how Python can revolutionize budgeting in Excel, so why not give it a try for your next budget cycle? Embrace this technology to make budgeting less of a chore and more of a strategic tool for your business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[Microsoft Excel|Excel]] (6), [[Financial Data]] (2), [[Financial Planning]] (1)
> **CLI Commands:** python (11), make (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Other financial models](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/other-financial-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/other-financial-models?u=76281980&t=1)** - [Narrator] Ready to take your [[Financial Modeling]] to new heights? In this video, we're going to dive into some of the more advanced financial models like Monte Carlo simulations and option pricing models. And we will be doing all of this using [[Python (Programming Language)|Python]] right inside [[Microsoft Excel|Excel]]. We're stepping beyond basic [[Forecasting]] and budgeting. Advanced models like Monte Carlo simulations and option pricing models can provide deeper insights and help manage risks in sophisticated financial scenarios. Monte Carlo simulations use randomness to predict outcomes. In finance this can mean simulating thousands of potential scenarios for market prices. With Python in Excel, you can script these simulations, analyzing a wide range of outcomes to inform better decision making. Options are complex financial instruments. Pricing them accurately requires advanced models like the Black Scholes model. Python Computational Power allows you to implement these models in Excel, enabling you to calculate option prices, Greeks, and other important metrics. Use Python libraries, such as NumPy, for numerical calculations, and [[Pandas (Software)|Pandas]] for data handling to implement these models. Once you run your simulations or pricing models,
>
> **[1:38](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/other-financial-models?u=76281980&t=98)** use Python's matplotlib. to visualize the outcome. This could mean plotting [[Probability]] distributions, or investment returns, or graphing option payoff diagrams. These models are just the tip of the iceberg. As you become more comfortable with Python in Excel, you can explore other complex models like, risk assessment frameworks, [[Predictive Analytics]], and more. You have just opened the door to some of the most sophisticated tools in [[Financial Analysis]]. Start experimenting with these advanced models in Python and Excel. The more you explore, the more proficient you will become. Turning complex data into actionable financial insights.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Microsoft Excel|Excel]] (5), [[Financial Modeling]] (1), [[Forecasting]] (1), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (7)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Forecast sales for Company ABC](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-forecast-sales-for-company-abc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-forecast-sales-for-company-abc?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-forecast-sales-for-company-abc?u=76281980&t=5)** - [Instructor] In this challenge, you will forecast the sales of a company. Sales [[Forecasting]] is a critical aspect of [[Financial Planning]], and your ability to predict future revenues is essential for decision making. You will be using the attached file as input data. Your task is to use the attached 12 months data and load it into a [[Pandas (Software)|pandas]] data frame. Then, you need to create a simple [[Linear Regression]] algorithm to forecast the next 12 months. And finally, you need to present your sales forecast. The goal is to get an [[Microsoft Excel|Excel]] tab with the forecast of the next 12 months. Now pause the video, take on the challenge, and when you are ready, proceed to the solution video for guidance on how to tackle this task. It should take you around 10 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1), [[Financial Planning]] (1), [[Pandas (Software)|Pandas]] (1), [[Linear Regression]] (1), [[Microsoft Excel|Excel]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Forecast sales for Company ABC](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-forecast-sales-for-company-abc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-forecast-sales-for-company-abc?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-forecast-sales-for-company-abc?u=76281980&t=5)** - [Instructor] Welcome back. I hope you enjoyed working on the sales [[Forecasting]] challenge. Now, let's walk through the solution. First, we use the attached 12 months data and load it into a [[Pandas (Software)|pandas]] data frame. After that, we created a [[Linear Regression]] algorithm to forecast the next 12 months. We fit the model and we forecast the next 12 months of sales. Finally, we're creating a dataframe for the forecasted and we plot the results using matplotlib. Remember, there may be alternative methods to achieve the same result, so feel free to explore different approaches that suit your preferences, and congratulations on completing this challenge. Now you have the skill to forecast sales using [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1), [[Pandas (Software)|Pandas]] (1), [[Linear Regression]] (1), [[Python (Programming Language)|Python]] (1), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [Automate consolidation of data](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/automate-consolidation-of-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/automate-consolidation-of-data?u=76281980&t=0)** - [Christian] Does consolidating [[Financial Data]] from different sources into [[Microsoft Excel|Excel]] feels like a [[Jigsaw]] puzzle? What if you could automate this process, ensuring accuracy, and saving a lot of time? In this video, I will show you how to use [[Python (Programming Language)|Python]] in Excel to automate data consolidation. Typically, consolidating financial data involves manual importing files, copying data, and ensuring everything lines up correctly. It's time consuming and prone to errors, which is where Python steps in to save the day. Start by identifying all of the data sources. This could be different Excel files, CSVs, or even data pulled from [[Databases]] on the web. The goal is to bring them all together in one place. Use Python to write scripts that automatically import data from the sources into Excel. Python libraries, like [[Pandas (Software)|pandas]], are perfect for reading various file formats and handling data efficiently. Once your data is imported, you will likely need to clean and transform it to fit your needs. Python can automate tasks, like fill in missing values, correcting formulas, and aligning data from different sources. With Python, you can create a script that takes all of this clean data and consolidates it into a master sheet in Excel. This unified view is what makes reporting
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/automate-consolidation-of-data?u=76281980&t=95)** and analysis much easier. Picture this, you have one set of data in the NSB data frame containing sales values by country, and another set in the business unit data frame with budget information. Now, how do you combine these two to see the full picture? The Python code NSV merge is your magic wand here. It's a function from the pandas library designed to merge two data sets together. In this code, we're using NSV left merge in order to combine both data frames. After running this code, you'll have a new data frame that combines the sales and budget data by country. It's a more complete dataset that lets you analyze sales performance against the budget for each country. This technique is incredibly powerful. You can merge different types of financial data, like sales and budget expenses, to get a holistic view, aiding in better decision making and analysis. So there you have it, a quick, but powerful way to merge data using Python in Excel. Give it a try with your datasets. Experiment with different types of mergers, and see how it transform your data analysis capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Microsoft Excel|Excel]] (6), [[Financial Data]] (3), [[Pandas (Software)|Pandas]] (2), [[Jigsaw]] (1)
> **CLI Commands:** python (8)
> **Env Vars:** nsv (2), nsb (1)
> **Analogies:** picture (2)
> **Speakers:** - [christian] (1)

#### [Automate cleaning data](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/automate-cleaning-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/automate-cleaning-data?u=76281980&t=1)** - [Instructor] Ever feel bogged down by the tedious task of cleaning [[Financial Data]]? What if you could automate the entire process? Ensuring your data is not only accurate, but ready for analysis in no time? Welcome to your guide on using [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] to transform the way you handle [[Data Cleaning]]. In finance, data cleaning might include tasks like standardizing date formats, dealing with missing values, correcting anomalies, or aligning data from different sources, Python shines in automating these tasks. Use libraries, like [[Pandas (Software)|pandas]], for their powerful [[Data Manipulation]] capabilities. You can write scripts to automate tasks like removing duplicates, fill in missing values or converting data types. Financial data has its quirks. Customize your Python scripts to cater to specific needs, like recognizing different currency formats or adjusting for financial periods. Beyond cleaning, your Python scripts can help maintain [[Data Quality]]. They can validate data against known ranges or formats, and flag any data that seems out of place. Once cleaned, the data can be easily integrated into your Excel sheets ready for analysis. This integration is seamless, keeping your workflow smooth and interrupted.
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/automate-cleaning-data?u=76281980&t=95)** Automated data cleaning not only saves time, but also enhances the reliability of your [[Financial Analysis]]. It's like having a diligent assistant who ensures your data is always in top shape. With the power of Python in Excel, you are now equipped to tackle data cleaning in a more efficient way. You will soon find that clean data is just a script away.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Data Cleaning]] (4), [[Microsoft Excel|Excel]] (3), [[Financial Data]] (2), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (5), find (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Automation](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-automation?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-automation?u=76281980&t=5)** - [Instructor] In this challenge, you will automate a simple finance task. The goal is to automate the cleaning of the table and clean the data using a [[Python (Programming Language)|Python]] script. Your task is to identify problems in the data, standardize the date format, handle cells with missing values and without lower values. Your goal is to produce a clean dataset with a Python script. It should take you around 10 minutes, so post your video now and good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Automation](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-automation?u=76281980&t=0)** (quirky music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-automation?u=76281980&t=5)** - [Instructor] Welcome back. I hope you enjoyed working on the Sales [[Data Cleaning]] Challenge. Now let's walk you through the solution. First, you would need to identify the problems on the dirty data, such as missing values, outliers, or different type formats. Then, it is time to use [[Python (Programming Language)|Python]]. In this formula, I first imported the necessary libraries, like [[Pandas (Software)|Pandas]] and NumPy. Then, I loaded my data into a data frame. I started by standardizing the date format, then created a formula to handle missing values and outliers. And finally, I just showed my new, clean data frame. Remember, there may be alternative methods to achieve the same result, so feel free to explore different approaches that suit your preferences. Congratulations on completing this challenge. Now you have the skill to clean data automatically using Python in [[Microsoft Excel|Excel]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Data Cleaning]] (1), [[Pandas (Software)|Pandas]] (1), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** python (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (quirky music) (1)


### 4. Data Visualization

[↑ Back to Table of Contents](#table-of-contents)

#### [Basic charts and graphs for finance](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/basic-charts-and-graphs-for-finance?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/basic-charts-and-graphs-for-finance?u=76281980&t=1)** - [Instructor] Imagine turning complex [[Financial Data]] into clear, compelling visual stories. That's the power of data visualization, and it's essential for effectively communicating financial insights. In this video, you will learn how to use [[Python (Programming Language)|Python]] within [[Microsoft Excel|Excel]] to create basic, yet impactful, charts and graphs. So let's transform numbers into visuals that speak volumes. Visuals like charts and graphs transform raw data into an understandable format, making it easier to identify trends, patterns, and outliers. This is crucial for financial decision making and presentations. The type of chart that you choose should align with your financial data and what you want to communicate. For sales strengths, a line graph might be the best. For budget allocations, perhaps a pie chart. Begin by importing your financial data into Python, using Excel as your data source. [[Pandas (Software)|Pandas]] can be particularly helpful for this, allowing you to manipulate and prepare your data for visualization. Matplotlib is Python's go-to library for creating charts and graphs. Start by plotting your data with commands specific to the plot type of chart that you are creating, be a line, bar, pie, or scatterplot. Add titles, labels, legends, and customize colors
>
> **[1:38](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/basic-charts-and-graphs-for-finance?u=76281980&t=98)** to make your chart clear and engaging. Remember, the goal is to make your data as easy to understand as possible. For example, in this code begins with a sample dataset. So we have a list of three assets, asset A, B, and D. In this part of the code, we're using Matplotlib to create a bar plot. The first line, plt.figure, we're determining the size of the graph. Then we're giving Matplotlib the instruction to create a bar chart with the data of assets and returns and the colors blue, green, and purple. Then we're giving the title, Returns on Different Assets, the X label and the Y label. Once your chart is ready in Python, you can display it within Excel. This integration allows you to leverage Python's advanced visualization in the familiar Excel environment. These charts can now be used in financial reports, presentations, or [[Dashboards]], providing stakeholders with clear visual insights into financial performance and forecasts. So experiment with different types of visualizations to find the most effective ways to tell your financial story.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Microsoft Excel|Excel]] (4), [[Financial Data]] (3), [[Pandas (Software)|Pandas]] (1), [[Dashboards]] (1)
> **CLI Commands:** python (5), make (2), find (1)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Advanced charts and graphs for finance](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/advanced-charts-and-graphs-for-finance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/advanced-charts-and-graphs-for-finance?u=76281980&t=0)** - [Instructor] Ready to take your data visualization game up a notch? In this video, we're going beyond basic charts and going into advanced graphing techniques using [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]]. It's all about turning those complex financial insights into visuals that are not just clear and precise, but also tell a compelling story. Complex [[Financial Data]] often requires more than just a simple line or bar chart. Advanced visualizations like heat maps, candlestick charts, or interactive [[Dashboards]] can provide deeper insights, especially when dealing with market trends, risk analysis, or portfolio performance. Heat maps can be particularly useful in finance for visualizing risk across different assets or market segments. With Python, you can create a heat map that clearly shows areas of high risk and low risk, helping in [[Decision-Making]] processes. To create a heat map, we will be using this code. The code starts with importing Matplotlib and NumPy. Matplotlib is used for creating the heat map, while NumPy is useful for handling numerical operations and data arrays. In this line, I'm showing the imshow function to create this heat map.
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/advanced-charts-and-graphs-for-finance?u=76281980&t=94)** Then, with this interpolation nearest, I'm ensuring that the colors in the heat map don't blend into each other too much, keeping each cell's value distinct. The plt.colorbar adds a color bar to the side of the heat map, which acts as a reference here. This bar helps viewers understand that the colors in the heat map represent in terms of data values. Finally, this plt.title creates the title of the heat map, and the show showcases the actual heat map in Excel. Now that you have a grip on this code, try using it with your financial data sets. Heat maps or other charts like these can be incredibly insightful for spotting trends, correlations, or anomalies in complex data sets. Once your advanced charts are ready, integrate them into Excel sheets or [[Microsoft PowerPoint|PowerPoint]] presentations. These visuals will make your financial reports and presentations more engaging and informative.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Python (Programming Language)|Python]] (2), [[Financial Data]] (2), [[Dashboards]] (1), [[Decision-Making]] (1)
> **CLI Commands:** python (2), make (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Create five graphs](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-create-five-graphs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/challenge-create-five-graphs?u=76281980&t=0)** - [Instructor] In this challenge, you'll create four different visualizations. The goal is to have four data visualizations for the attached dataset created by a [[Python (Programming Language)|Python]] script. Your task is to create these graphs, a line chart, which can be used to track the historical performance of our financial metric over time. A bar chart, which is great for comparing [[Financial Data]] across different categories. An area chart that is similar to a line chart, but provides a visual representation of cumulative values. And a histogram that is helpful for understanding the distribution of data. Your goal is to produce the four graphs using Python code. It should take you around 10 minutes, so good luck. And pause the video now before going into the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Financial Data]] (1)
> **CLI Commands:** python (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Create five graphs](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-create-five-graphs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/solution-create-five-graphs?u=76281980&t=0)** - [Instructor] Welcome back. I hope you enjoy working on [[Financial Data]] visualization. Now, let's walk you through the solution. In this part, we have the four different graphs that we're asking you to create. The line chart, the bar chart, the area chart and the histogram. Each of the codes to creating these graph charts are here, and they look very similar to each other. First, we're importing matplotlib and then [[Pandas (Software)|pandas]]. We use the data provided and we create the charts using matplotlib functions. Similarly in the others, we set up the stage by importing the libraries, then creating the dataframe, and finally creating the actual chart. For the area chart and the histogram, the process was very similar. Remember, there may be alternative methods to achieve the same result. So feel free to explore different approaches that suit your preferences. Congratulations on completing this challenge. Now you have the skill to create data visualizations automatically using [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Data]] (1), [[Pandas (Software)|Pandas]] (1), [[Python (Programming Language)|Python]] (1), [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** python (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-for-financial-professionals/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on completing this course on [[Python (Programming Language)|Python]] in [[Microsoft Excel|Excel]] for finance professionals. You have taken a significant step toward becoming a more proficient and efficient finance expert. Throughout the course, we have covered essential topics such as integrating Python in Excel, automating financial tasks, analyzing large datasets, and creating engaging [[Financial Data]] visualizations. You have gained the skills needed to boost your productivity and make data-driven decisions in your finance role. But our journey doesn't have to end here. If you're hungry for more knowledge, consider exploring additional courses here on [[LinkedIn]] Learning. You can go deeper into Python for finance, explore [[Algorithmic Trading]], or even enhance your [[Data Science]] skills. The world of finance and technology is ever evolving and continuous learning will keep you ahead of the curve. Keep growing, keep exploring, and keep excelling in your finance career. Thank you for joining me and best of luck in all of your financial endeavors. Don't hesitate to reach out to me on LinkedIn if you have questions about finance analytics, Python, or automation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Excel|Excel]] (2), [[LinkedIn]] (2), [[Financial Data]] (1), [[Algorithmic Trading]] (1)
> **CLI Commands:** python (4), make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Christian Martinez]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Data Analysis
- Microsoft Excel
- Data Visualization

## Path Context

### In [[Python for Data Professionals in Finance]]
← [[Getting Started with Python for Finance]] | **2 of 5** | [[Advanced Python in Excel for Finance- A Hands-On Approach]] →

## Appears In

- [[Python for Data Professionals in Finance]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Data Analysis, Data Visualization
- [[Python in Excel- Data Outputs in Custom Data Visualizations and Algorithms]] — Python (Programming Language), Data Visualization, Microsoft Excel
- [[Python In Excel Getting Started With Data Analysis]] — Python (Programming Language), Data Analysis, Microsoft Excel
- [[Complete Guide to Excel Statistics with Copilot]] — Data Analysis, Microsoft Excel
- [[Python Data Analysis (2020)]] — Python (Programming Language), Data Analysis

---

[↑ Back to top](#)