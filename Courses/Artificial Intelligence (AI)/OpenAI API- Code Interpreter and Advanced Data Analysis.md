---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: openai-api-code-interpreter-and-advanced-data-analysis
url: "https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis"
duration_minutes: 42
duration: 42m
level: Intermediate
updated: 2/12/2024
learners: 14050
skills:
  - OpenAI API
  - Data Analysis
  - OpenAI Products
  - Code Interpretation
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-code-interpreter-and-advanced-data-analysis-3832218/tree/main"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGU7FDolKX0xA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707435191976?e=2147483647&amp;v=beta&amp;t=nHNaLRO8Jw4KGD3WH_4WlKRxgntCe9YqGMZJNInt2P4"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with the OpenAI API]]'
prev_courses:
  - '[[OpenAI API- Moderation]]'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":10,"total":10,"prev":"OpenAI API- Moderation","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/data-analysis
  - skill/openai-products
  - skill/code-interpretation
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/OpenAI%20API-%20Code%20Interpreter%20and%20Advanced%20Data%20Analysis.md)

![OpenAI API: Code Interpreter and Advanced Data Analysis](https://media.licdn.com/dms/image/v2/D560DAQGU7FDolKX0xA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707435191976?e=2147483647&amp;v=beta&amp;t=nHNaLRO8Jw4KGD3WH_4WlKRxgntCe9YqGMZJNInt2P4)

# OpenAI API: Code Interpreter and Advanced Data Analysis

> The OpenAI Code Interpreter seamlessly blends Python programming with AI-assisted development. Join instructor Kesha Williams as she introduces the features, functionalities, and integration potential of this new model and how it fits into the wider OpenAI ecosystem.The course guides you through how to enable the tool in various environments, including the ChatGPT UI and the Assistants API. Explor

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis) | 42m | Intermediate | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Introduction to Code Interpreter and Advanced Data Analysis](#introduction-to-code-interpreter-and-advanced-data-analysis)
- [**1. Understanding the OpenAI Advanced Data Analysis and Code Interpreter**](#1-understanding-the-openai-advanced-data-analysis-and-code-interpreter) (2 videos)
  - [Explore Advanced Data Analysis features and capabilities](#explore-advanced-data-analysis-features-and-capabilities)
  - [Understand the Code Interpreter Tool via the Assistants API](#understand-the-code-interpreter-tool-via-the-assistants-api)
- [**2. Using the OpenAI Advanced Data Analysis with ChatGPT**](#2-using-the-openai-advanced-data-analysis-with-chatgpt) (2 videos)
  - [Conduct data analysis via the ChatGPT UI](#conduct-data-analysis-via-the-chatgpt-ui)
  - [Perform data visualization via the ChatGPT UI](#perform-data-visualization-via-the-chatgpt-ui)
- [**3. Accessing the Code Interpreter Tool from the Assistants API**](#3-accessing-the-code-interpreter-tool-from-the-assistants-api) (3 videos)
  - [Generate and apply Python code](#generate-and-apply-python-code)
  - [Review and optimize Python code](#review-and-optimize-python-code)
  - [Troubleshoot using logs](#troubleshoot-using-logs)
- [**4. Exploring Pricing and Limitations**](#4-exploring-pricing-and-limitations) (2 videos)
  - [Estimate pricing](#estimate-pricing)
  - [Understand limitations](#understand-limitations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Your Advanced Data Analysis and Code Interpreter journey](#your-advanced-data-analysis-and-code-interpreter-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Code Interpreter and Advanced Data Analysis](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/introduction-to-code-interpreter-and-advanced-data-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/introduction-to-code-interpreter-and-advanced-data-analysis?u=76281980&t=0)** - [Williams] Open AI's code interpreter and advanced data analysis features make it easy to analyze information from documents like PDFs and [[Microsoft Excel|Excel]] files, and use it to generate new content and insights. With code interpreter, you can create and optimize [[Python (Programming Language)|Python]] code to speed up your [[Application Development]] process. In this course, I'll show you how to perform data analysis, visualization, and code generation, all while teaching you troubleshooting using logs. I'm Kesha Williams, and I've helped hundreds of thousands of people harness the power of AI tools and machine learning technologies, and I'd love to help you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Python (Programming Language)|Python]] (1), [[Application Development]] (1)
> **CLI Commands:** make (1), python (1)
> **Speakers:** - [williams] (1)


### 1. Understanding the OpenAI Advanced Data Analysis and Code Interpreter

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore Advanced Data Analysis features and capabilities](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/explore-advanced-data-analysis-features-and-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/explore-advanced-data-analysis-features-and-capabilities?u=76281980&t=0)** - [Narrator] Are you ready to learn about one of the most exciting features of [[ChatGPT]], the Advanced Data Analysis tool, formerly known as Code Interpreter? Advanced Data Analysis is a way to upload different types of documents and talk to them using natural language through ChatGPT. It's pretty amazing. You can upload documents and files, analyze the data to create new insights, transform and clean data, extract specific information, create data visualizations using charts, and more. The process is straightforward. Upload your file, write your prompt, then [[Python (Programming Language)|Python]] code is generated and executed behind the scenes in a sandbox environment to perform the task, and then a response is provided. If the response comes with a downloadable file, it's easy to download the results seamlessly. You can view the Python code using the view analysis feature within the ChatGPT UI. There's also a copy code feature to copy and run the code in your environment after installing the necessary modules or libraries, of course. Several file types are supported. PDF, text, [[Microsoft PowerPoint|PowerPoint]], [[Microsoft Word|Word]], [[Microsoft Excel|Excel]], CSV. Imagine using Advanced Data Analysis
>
> **[1:35](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/explore-advanced-data-analysis-features-and-capabilities?u=76281980&t=95)** to generate PowerPoint slides. OpenAI continually works to expand the range of supported document types, so I'm sure this list will grow over time. Your files are retained while the conversation is active and for three hours after your conversation is paused. After that time, they are deleted. Advanced Data Analysis is currently only available to paid subscribers, which includes users of ChatGPT Plus or ChatGPT Enterprise. The tool is integrated into the ChatGPT UI and does not need to be explicitly enabled. As we discussed, you simply upload a file, like an Excel spreadsheet, and type your prompt and ChatGPT handles the [[Representational State Transfer (REST)|rest]]. Now that you understand how the Advanced Data Analysis tool works, let's look at the Code Interpreter tool available via the Assistants API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (7), [[Python (Programming Language)|Python]] (2), [[Microsoft PowerPoint|Powerpoint]] (2), [[Microsoft Excel|Excel]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** pdf (1), csv (1), api (1)
> **CLI Commands:** python (2)
> **Definitions:** known as (1), is a  (1)
> **Cross-References:** we discussed (1)
> **Exercise Files:** download the (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [Understand the Code Interpreter Tool via the Assistants API](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/understand-the-code-interpreter-tool-via-the-assistants-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/understand-the-code-interpreter-tool-via-the-assistants-api?u=76281980&t=0)** - [Instructor] Let's look at how to gain API level access to the tool behind the advanced data analysis feature. The Assistants API allows developers to build AI assistants within their application. The API removes the need to manage conversation history and adds access to several OpenAI-hosted tools like code interpreter, knowledge retrieval, function calling, and supported files. While this course does not go deep into the Assistants API, we'll cover enough of it so that you understand how to access the code interpreter tool using the API. The code Interpreter tool writes and executes [[Python (Programming Language)|Python]] code in a sandbox environment, behind the scenes when needed to answer your questions. The code interpreter tool is accessible to anyone with an OpenAI account, no need to be a paid subscriber. Several text file types are supported along with image file formats. Additionally, tar files are supported. What I really like about the code interpreter tool is that it can read and generate files and produce graphics like charts, just like the data analysis tool, but you can control it programmatically through code, which is a developer's dream. Let's look at the flow. First, you'll create an assistant through code. Assistants can call open AI models
>
> **[1:36](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/understand-the-code-interpreter-tool-via-the-assistants-api?u=76281980&t=96)** with specific instructions. Next, you'll start a thread, which is a conversation between the user and the assistant. You create a thread once, and simply append messages as your users reply, threads store the conversation history for you. Next, you'll create a run which invokes an assistant on a thread, kicking off the conversation. The process is straightforward. I can't wait to show you the flow and Python code. Now that you understand how to access the code interpreter tool via the Assistants API, let's see how to use the advanced data analysis tool in the real world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Env Vars:** api (6)
> **CLI Commands:** python (2), tar (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 2. Using the OpenAI Advanced Data Analysis with ChatGPT

[↑ Back to Table of Contents](#table-of-contents)

#### [Conduct data analysis via the ChatGPT UI](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/conduct-data-analysis-via-the-chatgpt-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/conduct-data-analysis-via-the-chatgpt-ui?u=76281980&t=0)** - [Instructor] Are you ready to use an [[Microsoft Excel|Excel]] spreadsheet to see the Advanced Data Analysis tool in action? Let's look at our Excel spreadsheet. Customer_Feedback_Product_Ratings. This data is from an [[E-Commerce]] company that wants to analyze customer feedback and product ratings. This data includes customer details, product information, purchase dates, rating scores, and customer comments. Let's describe each specific data point. First, there's the customer ID, which is the unique identifier for each customer. Here, we see 1001, 1002, 1003, and so on. Next, we have the name of the customer, first and last names. Here we have Alice Smith, Bob Johnson, Charlie Brown, et cetera. Next we have the age group, which is the age group of the customer, 26 to 35, 18 to 25, 46 to 55. Next up, we have the product ID, which is a unique identifier for each product. In this case, 2345, here, 7896, 5643, and so on. Next, we have the product category, which is the category of the product, so [[Electronics]], apparel, home goods, books, beauty [[Microsoft Products|products]], electronics, and so forth. And then we have the purchase date, which is the date the product was purchased.
>
> **[1:34](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/conduct-data-analysis-via-the-chatgpt-ui?u=76281980&t=94)** Here, 6-15-2021, 8-21-2021. Next, we have the rating, which is the customer rating for the product on a scale of one to five. In this case, 4, 3, 5, 2, 1, and so on. And in the last column, we have the comment, which is a short-text feedback provided by the customer. Here in this example, satisfied, could be better, excellent, not as expected, disappointed, loved it. If you notice, the data is ill-formatted, with all of the values appearing in a single column, which will make this hard to process. We'll use the Advanced Data Analysis feature to help clean up this file. Let's go there now. The first step is to upload the file, which I've already done. It typically takes a moment for the file to be uploaded, but once it's uploaded, we'll send in our prompt. Here, I send in, "Can you properly format this CSV file?" Notice that I'm passing in an Excel file, but telling [[ChatGPT]] it's a CSV. Let's see how it handles this. Initially, there is an error reading the file. You'll see it here. It says Error analyzing. To see the error, you click on this down arrow to see the [[Python (Programming Language)|Python]] that was generated and executed in the sandbox environment.
>
> **[3:08](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/conduct-data-analysis-via-the-chatgpt-ui?u=76281980&t=188)** You'll notice that it's just a code snippet, but ChatGPT appears to be using the [[Pandas (Software)|pandas]] Python module, which is a common [[Data Science]] library for reading and manipulating data using a data frame. Let's close this and look at the response. Notice here, ChatGPT says, "The data appears to be in binary format, meaning it's not a CSV, but rather Excel." It goes through the process to do the necessary conversions. Here it says, "I will now attempt to read it properly as an Excel file, and then convert it into a properly-formatted CSV file to view the analysis and bring up the Python code." Click on this, and you'll see the Python code that was generated and executed and also the result. Let's scroll down. Now, here, it catches that the data was ill-formatted. It says, "The Excel file has been successfully read, but it seems to be interpreted as a single column with comma-separated values." And so ChatGPT went through the process to convert the single column into multiple columns and into separate fields. If we view the analysis, we see the code that it executed, and we also see the result. In this section, it gives us a preview of the first few rows, which is very helpful to see
>
> **[4:41](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/conduct-data-analysis-via-the-chatgpt-ui?u=76281980&t=281)** that the file is now formatted correctly, with each value in the appropriate column. Let's scroll down. Here, ChatGPT asks us if we would like it to save this formatted data as a new file. My answer is yes. It then provides the link for me to download the properly formatted file, which I did. I downloaded it locally simply by clicking on the link. The next prompt that I send in is, "Can you describe the data?" After a few attempts, it's successful. Notice here the first error attempt, the second error attempt, the third error attempt, and then it finally works. It describes our data perfectly. It has the customer ID. It gives us the total of unique values. It gives us the name with the total unique values, telling us a certain name appears twice. For age group, it tells us that 18 through 25 is the most frequent. And it goes on and describes the remaining columns. I then ask a question, "Are there any missing values?" And it tells us that the dataset does not have any missing values. With just a few natural language prompts, we're able to analyze the data in an Excel spreadsheet that we upload. That's pretty amazing.
>
> **[6:14](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/conduct-data-analysis-via-the-chatgpt-ui?u=76281980&t=374)** Now that you understand how to conduct data analysis, let's see how to perform data visualization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (7), [[ChatGPT]] (5), [[Python (Programming Language)|Python]] (4), [[Electronics]] (2), [[E-Commerce]] (1)
> **CLI Commands:** python (4), make (1)
> **Env Vars:** csv (4)
> **UI Navigation:** click on (2), scroll down (2)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** in the last (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Perform data visualization via the ChatGPT UI](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/perform-data-visualization-via-the-chatgpt-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/perform-data-visualization-via-the-chatgpt-ui?u=76281980&t=0)** - [Instructor] I can't wait to show you how easy it is to visualize data using the advanced data analysis feature. We'll use the feature to analyze rating distributions, understand customer preferences across different product categories, and extract insights from customer comments. I've uploaded the same customer feedback product ratings file from the last lesson and performed basic data analysis similar to what we did before. Let's scroll down to the new data visualization section. The first natural language prompt is, can you plot the average rating by product category which produces this plot? The graph provides a visual representation of how customers rate different product categories on average. You can click this arrow to see the [[Python (Programming Language)|Python]] code generated and executed by [[ChatGPT]] in its sandbox environment. The Python code can also be copied and executed in your environment. Let's close this and go to the next prompt. This prompt is, can you plot which month has the highest ratings? Here is the plot showing the average ratings by month. The graph illustrates which months have the highest average customer ratings. This visual can help in understanding any seasonal trends or patterns and customer satisfaction. The next prompt,
>
> **[1:36](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/perform-data-visualization-via-the-chatgpt-ui?u=76281980&t=96)** what other insights can you draw from the data? ChatGPT provides a list that can be used to better understand customer behavior and product performance. It recommends customer demographics and preferences, product performance, feedback analysis, trends over time, correlation between ratings and feedback, repeated customers and seasonal trends. It asks if I would like to do a detailed analysis on any of the recommended aspects. And yes, of course I do. Let's have ChatGPT analyze customer demographics and preferences, and it generates this lovely heat map. The heat map here illustrates customer preferences segmented by age group and product category based on the number of ratings provided. Each cell indicates the count of ratings for a specific product category within a particular age group. This visualization helps in understanding which product categories are more popular among different age groups. And let's scroll down. Next we'll have ChatGPT analyze product performance. The bar chart shows the product performance by category based on the average ratings received. Each bar represents a product category, and its length indicates the average rating
>
> **[3:11](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/perform-data-visualization-via-the-chatgpt-ui?u=76281980&t=191)** for that category. This visualization provides a clear view of which product categories are performing well in terms of customer satisfaction and which might need improvement. Next, we analyze trends in average customer ratings over time, and then we wrap up with a heat map of seasonal trends down here at the bottom. The advanced data analysis tool generates charts with ease. Now that you understand how to conduct analysis via the ChatGPT UI, let's look at accessing the same power programmatically using the Assistants API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[Python (Programming Language)|Python]] (2)
> **UI Navigation:** scroll down (2), go to (1)
> **CLI Commands:** python (2)
> **Env Vars:** api (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 3. Accessing the Code Interpreter Tool from the Assistants API

[↑ Back to Table of Contents](#table-of-contents)

#### [Generate and apply Python code](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/generate-and-apply-python-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/generate-and-apply-python-code?u=76281980&t=0)** - [Instructor] You already know that the code interpreter tool is integrated with the broader assistance API framework. Let's see it in action in this Jupyter Notebook containing our [[Python (Programming Language)|Python]] code. We use OpenAI's Python SDK for our code example to interact with the assistance API. I've executed all of the cells in this notebook already to save time. Let's scroll down. The first step is to generate an API key to authenticate to the API and then configure your application code to use it. Before generating a key, you'll need to sign up for an OpenAI account, which you can do so by going to [OpenAI.com](https://OpenAI.com) and clicking sign up. Remember, you want to treat your API key the way you would treat a password and keep it secure. The first step is to install the necessary libraries. I've installed these libraries already so I won't run the code again. Next, we import the OpenAI, OS and time modules. The OpenAI module provides access to the [[OpenAI API]]. The OS module provides access to operating system dependent functionality, and we'll use it to access the API key stored as an environment variable in an external environment file. Next, we are loading the environment file here, and let's scroll down to cell two. Then we read the API key from the environment variable
>
> **[1:37](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/generate-and-apply-python-code?u=76281980&t=97)** and initialize the client with it, which we will use to authenticate to the API. We've designed the code to be modular with reusable code defined in helper functions. Now, as a reminder, when using the assistance API, the flow is first you create an assistant, then you create a thread, and then you create a run to execute that assistant. Let's look at our helper functions in more detail. The upload file function takes a file from our local machine and uploads it to the OpenAI servers so that it's accessible to the assistance API. Our next helper function is the create assistant function, which creates the assistant bypassing in the name, in this case coding bot, the instructions, the model, the specific tool, in this case code interpreter, and the ID of the file that we uploaded. The next helper function is the query assistant function, and this starts the thread to manage the conversation between the user and the assistant. Next up, we have the run function here in cell six, which starts the conversation session. The while loop here continues the session while the user's request is being processed. Once the user's request is fulfilled,
>
> **[3:11](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/generate-and-apply-python-code?u=76281980&t=191)** the status will be completed, and at that point, we break out of the loop. Then we retrieve the messages and we return those from the function. Let's scroll down here in cell seven. The first step is to use the upload file function to upload our formatted customer feedback product ratings file. If you recall, the data provides customer feedback and ratings on several [[Microsoft Products|products]]. Next, here in cell eight, we create the assistant and then print the ID. Here in cell 10, we define the user query and the query is can you create a heatmap image that illustrates the seasonal trends in average customer ratings segmented by month and year, supply the heatmap image as a downloadable file, also supply any Python code you generate as a downloadable file. I expect two downloadable files. Notice here, we are passing in the assistant ID and the user query to our query assistant function. Then we start the conversation using the run function. Once the user query is fulfilled, the messages are returned and printed out here in cell 11. It's pretty hard to read this output, so in cell 12, I'm looping and printing out the messages,
>
> **[4:47](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/generate-and-apply-python-code?u=76281980&t=287)** each message individually, so that it's easier to read and this just shows the flow of what's happening behind the scenes with the code interpreter tool. Notice the tool generates two downloadable files, heatmap_code.py, a Python file, and heatmap_customer_ratings.png, an image file. Let's scroll down to cell 13. This code retrieves and stores the two file IDs so that the files can be downloaded using the files' API. Here I'm printing the image file ID, and then the code file ID. 16, I'm getting the file name, and then in cell 17, I'm downloading the file locally to code.py, and let's navigate to that file. This is the Python code that was generated by the code interpreter tool in the sandbox environment. You can see the code uses Python [[Data Science]] libraries, [[Pandas (Software)|pandas]], seaborne, matplotlib to generate the heatmap image, and you can just look at the code that was generated. The code is nicely commented so you understand what's going on. It's loading the file, it's parsing the date, it's extracting the year and the month, calculating the average ratings, creating the heatmap, setting the labels in title, and then saving the image.
>
> **[6:20](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/generate-and-apply-python-code?u=76281980&t=380)** Let's navigate back to our Jupyter Notebook and scroll down to cell 20. Here we're using the image module to display the heatmap image inline. Here's a look at the generated heatmap. The last section cleans up the generated files along with the assistant and the thread, and there you have it. Now let's look at using the code interpreter tool to review and optimize existing Python code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[OpenAI API]] (1), [[Microsoft Products|Products]] (1), [[Data Science]] (1), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** api (12), sdk (1)
> **CLI Commands:** python (7)
> **UI Navigation:** scroll down (5), navigate to (1)
> **Prerequisites:** configure (1), you'll need (1), install (1)
> **File Paths:** heatmap_code.py (1), code.py (1)
> **Code Identifiers:** heatmap_code (1), heatmap_customer_ratings (1)
> **Tools:** jupyter (2)

#### [Review and optimize Python code](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/review-and-optimize-python-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/review-and-optimize-python-code?u=76281980&t=0)** - [Instructor] Let's see the power of the code interpreter tool to review and optimize your [[Python (Programming Language)|Python]] code. You've seen these first few cells already in the prior lesson, so I won't go through them again in detail. We're installing and importing the necessary libraries and authenticating to the API using the API key. You're also familiar with the four helper functions: upload_file, create_assistant, query_assistant, and run.
>
> **[0:34](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/review-and-optimize-python-code?u=76281980&t=34)** So let's scroll down. We really start the process here by uploading the Python code that we want reviewed. Let's take a look at this file. It's called code_to_improve, and it's the code that we'll upload and give to the code interpreter tool to review and optimize, identify bugs, and even explain what the code is doing. The code is pretty simple. There is a calculate_average function that calculates the average of a group of numbers. Here on lines 9 and 10, this is the example usage where an array of numbers is created and passed to the function. The response is printed. Very simple. When you look at the code, do you think it can be improved? Let's find out. Navigate back to our Jupyter Notebook. Here in cell 92, the file is uploaded. In cell 93, an assistant is created. Scroll down to cell 95, a thread is created by passing in the user query. In this case, our query is, can you improve, optimize, and remove bugs from this Python code? Supply the improved Python code as a downloadable file. Also explain what the code is doing. Here, we pass to the query_assistant the assistant_id and the user_query.
>
> **[2:09](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/review-and-optimize-python-code?u=76281980&t=129)** Scroll down to cell 96. We start the conversation session by invoking the run function. Here, we're printing the messages and let's scroll down to cell 97 where we'll loop and print out the messages in a more human readable format. This shows what's happening behind the scenes with the code interpreter tool. Notice here it made the improved code available for download. Let's back up though and look at the flow. First, it tells us it added type hints to the function signature for clarity. Next, it tells us it used the built-in sum function to calculate the sum of the number list. Here, it checked for an empty list and will return 0.0 accordingly to avoid the zero division error. In real world scenarios, you might want to handle the empty list case differently. This is all just feedback from [[ChatGPT]]. Next, it placed the example code usage within this guard so that it won't execute when the module is imported. It added a try-except block, and let's scroll down. This section here is actually describing what the code is doing. It tells us it initializes the total sum to zero. Then it iterates over each number,
>
> **[3:44](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/review-and-optimize-python-code?u=76281980&t=224)** adding the value to the total sum. After the loop, it calculates the average and then it returns the calculated average. This behind the scenes look shows us the changes that ChatGPT made and then it also describes what it's doing. It's very helpful output. And let's scroll down to the next block. Here in cell 99, we are retrieving the file_id and the file_path so that we can download the improved code file using the files API, and we do that here in cell 102 and it's saved locally as improved_code.py. Let's navigate to the improved code. This is the original code, and then we have our improved code here. You'll see that this is an improvement over the original code. We talked through the changes that ChatGPT made. I really like the addition of the error handling, which is absolutely necessary. When you look at these improvements, which improvement did you like the best? Now that you know how to optimize existing Python code, let's look at ways to troubleshoot issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[ChatGPT]] (3)
> **Code Identifiers:** query_assistant (2), upload_file (1), create_assistant (1), code_to_improve (1), calculate_average (1)
> **UI Navigation:** scroll down (6), navigate to (1)
> **CLI Commands:** python (5), find (1)
> **Env Vars:** api (3)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** improved_code.py (1)
> **Versions:** 0.0 (1)

#### [Troubleshoot using logs](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/troubleshoot-using-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/troubleshoot-using-logs?u=76281980&t=0)** - [Instructor] You've seen how to use the code interpreter tool and the advanced data analysis features, but how do you troubleshoot when issues occur? Let's go there. Here in our Jupyter Notebook, you've seen the first few cells already in prior lessons, so I won't go through them again in detail. We're installing and importing the necessary libraries and authenticating to the API using an API key. You're also familiar with the four helper functions, upload_file, create_assistant, query_assistant, and run. However, I do want to show you the instruction to the model and the create_assistant function is different. Let's read it. Generate a file always. You are an expert travel agent. When given a list of cities, you plot those cities on a map and make the map image available for download. If you write [[Python (Programming Language)|Python]] code, also make the file available for download. Here we name it, it's the same name we use before Coding Bot, the same model. We're using the code interpreter tool, and then we'll pass in the file_id for the file that we upload. All right, let's scroll down. We did add two new helper functions, one to download the file and the second get_code_interpreter_logs, to retrieve the logs from a specific thread and run_id.
>
> **[1:39](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/troubleshoot-using-logs?u=76281980&t=99)** Here there's a loop that iterates over each step in the run, printing the code input and output logs. There's also a check here to ensure the step is from the code interpreter tool before printing it out. This conversation session with code interpreter aims to read a list of places I've visited from an [[Microsoft Excel|Excel]] spreadsheet and plot them on a world map. The name of the Excel spreadsheet is visits, and let's go to that file now. The spreadsheet is very straightforward. It shows a list of places I've visited. It shows the city and the associated country. So I've had the pleasure of visiting a lot of fun places and I'm looking to add more places this year. Let's go back to the Jupyter Notebook. Here in cell 249, we upload the file, in cell 250, here we create the assistant. In 251, we are printing the id of the assistant, and here we have a user_query in cell 252, plot the given list of cities on the image of a world map using red pins. The plot can be estimates and doesn't need to be 100% accurate. Provide the file id of the image available for download. Here we create our thread using the query_assistant function,
>
> **[3:12](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/troubleshoot-using-logs?u=76281980&t=192)** and then we kick off the run using the run function here in cell 253. I'm printing out the messages and it just gives you an idea of what's happening behind the scenes. You'll notice here on this line that there is a downloadable PNG image called world_map_cities, and let's just look at a few of the messages here. The code interpreter tool reconstructed the original Excel file, read its contents, which contain a list of cities, and then it proceeded to attempt to plot the cities on the image of a world map. First, it generated a basic world map and then attempted to plot the cities as red points. Scroll down, it ran into a few issues. It tried to correct it, and it did, and then it continued and it plotted them saying that it's estimates. This is what I told it, that it's estimates and it doesn't need to be 100% accurate. It looks like it worked through a few issues and was successful. So let's scroll down. I've downloaded the image and after downloading, I'm using the Image module to display the image in line. And here is what was generated, an approximate location of cities. You'll notice that the locations are just approximate, but it's a great start.
>
> **[4:46](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/troubleshoot-using-logs?u=76281980&t=286)** If we were to execute this code again, a different map would be generated. Now let's scroll down and review the logs. This is what we can use for troubleshooting should issues arise. So let's take a look at the logs that are printed out. Now, this first section here, the code input, shows the generated Python code and it imports the necessary [[Data Science]] libraries. It creates a geo data frame for the cities. It plots the world map, and it saves the plot to an image file. Here, world_map_cities.png. This next section here shows the process to translate the Excel data to a readable format for [[Data Processing]], and there's a lot of logs, but if you look here, you'll notice the output shows the cities and the countries that need to be mapped. Let's scroll down. It's inspecting the XML files that it created. It's using [[Pandas (Software)|pandas]] to read the XML files, and here we have our code output log. We also have our code input log for the next attempt. It's listing all the files in the extracted directory. It's reading the Excel files,
>
> **[6:20](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/troubleshoot-using-logs?u=76281980&t=380)** it's trying to read the different points. Again, let's scroll down. Notice here, it ran into an error. Let's scroll down. It always attempts to correct whatever error that it encounters. Here we have more output logs. There was a file not found error. Scroll through, and again, this shows everything that's going on behind the scenes, the specific errors that it encounters and how it overcomes those errors. As you read through the troubleshooting logs, you may uncover error messages that will cause you to go back and recreate your data or update your data or tweak your prompt. In this case, the code interpreter tool was able to self-correct and correct all of the issues on its own in order to produce the map. Let's scroll down. At the end, we clean up the assistant and the thread. Now that you understand how to troubleshoot using input and output logs, let's look at pricing to help you plan and budget your projects more effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Python (Programming Language)|Python]] (2), [[Data Science]] (1), [[Data Processing]] (1), [[Pandas (Software)|Pandas]] (1)
> **Code Identifiers:** create_assistant (2), query_assistant (2), world_map_cities (2), upload_file (1), file_id (1)
> **UI Navigation:** scroll down (8), go to (1)
> **Env Vars:** api (2), xml (2), png (1)
> **CLI Commands:** make (2), python (2)
> **Tools:** jupyter (2)
> **Warnings:** troubleshoot (2)
> **Cross-References:** go back to (1)


### 4. Exploring Pricing and Limitations

[↑ Back to Table of Contents](#table-of-contents)

#### [Estimate pricing](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/estimate-pricing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/estimate-pricing?u=76281980&t=0)** - [Instructor] Let's look at ways to estimate the usage costs for advanced data analysis and the code interpreter tool. [[ChatGPT]] Plus and ChatGPT Enterprise provide unlimited access to the advanced data analysis feature. ChatGPT plus is $20 a month as of January, 2024. For pricing on ChatGPT Enterprise, you'll need to contact OpenAI support. Now let's talk about the price for the code interpreter tool from the assistance API. Code interpreter is charged at 0.03 cents per session. A session is based on a thread. If your assistant calls the code interpreter tool simultaneously in two different threads, you're charged for two threads, three for three, and so on. Each session is active for one hour. You can interact with that session multiple times, only paying once. This means you can keep giving instructions to code interpreter in the same thread for up to one hour without incurring additional charges. You do not pay for files attached to the assistant or message when used with code interpreter. Don't forget about the standard per token fee when using OpenAI's models. Let's discuss how that intersects with messages, threads, and the assistance API. While you only send a single new message to a thread,
>
> **[1:36](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/estimate-pricing?u=76281980&t=96)** all past messages are stored server side, and used with every interaction with the backend model. This means the entire conversation history is passed to the model on each interaction, so you're paying for all the [[Tokens]] during each exchange every time. Remember this when you are estimating the price, tokens accumulate over time every time you add a new message. Now that you understand pricing, let's look at some of the limitations and operational boundaries of the tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4), [[Tokens]] (2)
> **Env Vars:** api (2)
> **Versions:** 0.03 (1)
> **Best Practices:** don't forget (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Understand limitations](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/understand-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/understand-limitations?u=76281980&t=0)** - [Instructor] Let's discuss a few Code Interpreter and Advanced Data Analysis tool limitations. The Advanced Data Analysis feature within the [[ChatGPT]] UI has a context window. The context window is the amount of text the model can consider at one time when generating a response. This includes your prompts, the model's previous responses, and any other information within the conversation thread. The current context window is 32,000 [[Tokens]]. When the context window is filled, the model may start to forget the earlier parts of the conversation. As of January 2024, up to 10 documents can be uploaded, with a file size limitation of 500 megabytes per file. For the Code Interpreter tool, there are limitations based on the Assistants API and limitations within the tool itself. The Assistants API will manage the context window for you so that you never exceed the length. Let's discuss some limitations now. We discussed the various file formats supported. The current size limitation for those files is 512 megabytes per file. You can attach 20 files per assistant. In addition to the 512 megabyte file size limit, each file can contain only 2 million tokens. Assistant or message creation will fail if any attached files exceed the token limit.
>
> **[1:36](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/understand-limitations?u=76281980&t=96)** The Code Interpreter tool is powerful, but also has limitations. It can handle a wide range of tasks, but is restricted in execution time. In internet access, it has none, and certain advanced or highly specialized computational tasks. The environment is designed with [[Privacy]] and security in mind. It does not store personal data beyond the session and cannot interact with external systems or [[Databases]]. The tool also has a limited set of pre-installed [[Python (Programming Language)|Python]] packages. A few popular packages include Data Analysis and Manipulation, Machine Learning, and Data Visualization. It also supports other common [[Natural Language Processing (NLP)|natural language processing]], web scraping and network, [[Deep Learning]], [[Image Processing]], audio processing, file formatting, database, [[Web Development]], and more. Now that you understand the limitations of the Code Interpreter tool, let's talk about your Advanced Data Analysis and Code Interpreter tool journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[ChatGPT]] (1), [[Privacy]] (1), [[Databases]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** api (2)
> **CLI Commands:** python (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your Advanced Data Analysis and Code Interpreter journey](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/your-advanced-data-analysis-and-code-interpreter-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-code-interpreter-and-advanced-data-analysis/your-advanced-data-analysis-and-code-interpreter-journey?u=76281980&t=0)** - [Kesha] Congratulations on reaching the end of the course. You should feel proud of what you've accomplished. Thank you for going on this journey with me, to learn about the advanced data analysis feature, and the code interpreter tool. During our time together, you've learned all about the power of the advanced data analysis feature to conduct data analysis and perform data visualizations. We also explored the code interpreter tool via the assistance API to generate and optimize [[Python (Programming Language)|Python]] code. If you haven't pulled down the code examples, I encourage you to deepen your understanding, and retain your newfound knowledge through hands-on exploration. You can also continue learning by watching my other courses, Building a Project with a [[ChatGPT]] API, [[Artificial Intelligence Foundations]] Machine Learning, and other courses in the [[OpenAI API]] series. I've enjoyed our time together. Please follow me on [[LinkedIn]] so that we can stay connected. I enjoy speaking on the topic of AI, and machine learning, so please consider me for your upcoming conference or event. Now go and transform the world. I'm Kesha Williams, and I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[ChatGPT]] (1), [[Artificial Intelligence Foundations]] (1), [[OpenAI API]] (1), [[LinkedIn]] (1)
> **Env Vars:** api (3)
> **CLI Commands:** python (1)
> **Speakers:** - [kesha] (1)


## Instructor

- [[Kesha Williams]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-code-interpreter-and-advanced-data-analysis-3832218/tree/main)

## Skills Covered

- OpenAI API
- Data Analysis
- OpenAI Products
- Code Interpretation
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your Skills with the OpenAI API]]
← [[OpenAI API- Moderation]] | **10 of 10**

## Appears In

- [[Develop Your Skills with the OpenAI API]]

## Related Courses

_Courses sharing skills:_

- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Image Generation with DALL-E]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [[OpenAI API- Fine-Tuning]] — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)