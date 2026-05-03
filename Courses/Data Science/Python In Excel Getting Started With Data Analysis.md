---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-in-excel-getting-started-with-data-analysis
url: "https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis"
level: Intermediate
updated: 3/12/2024
learners: 21748
skills:
  - Python (Programming Language)
  - Data Analysis
  - Microsoft Excel
exercise_files: true
github: "https://github.com/LinkedInLearning/python-in-excel-quick-start-4551222"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFxadV7_oR6xw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709943037883?e=2147483647&amp;v=beta&amp;t=CYezBfgHHhzDam6YkSstly2wAtly4oWOfgaKXw_Yh7w"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Python in Excel Skills]]'
next_courses:
  - '[[Python in Excel- Working with pandas DataFrames]]'
path_nav: '[{"path":"Advance Your Python in Excel Skills","position":1,"total":7,"prev":null,"next":"Python in Excel- Working with pandas DataFrames"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/python-programming-language
  - skill/data-analysis
  - skill/microsoft-excel
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Python%20In%20Excel%20Getting%20Started%20With%20Data%20Analysis.md)

![Python In Excel Getting Started With Data Analysis](https://media.licdn.com/dms/image/v2/D4D0DAQFxadV7_oR6xw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709943037883?e=2147483647&amp;v=beta&amp;t=CYezBfgHHhzDam6YkSstly2wAtly4oWOfgaKXw_Yh7w)

# Python In Excel Getting Started With Data Analysis

> Are you looking to take a deeper dive into the key features and functions of Python in Excel? This hands-on course covers the basics of working with data using Python in Excel including data structures, DataFrames, functions, and more. Join instructor and industry expert Joe Marini as he prepares you to get more out of these two leading technologies by wielding their respective strengths in tandem

> [LinkedIn Learning](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis) | Intermediate | 22K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Two great technologies together at last](#two-great-technologies-together-at-last)
  - [What you should know](#what-you-should-know)
  - [Getting set up](#getting-set-up)
- [**1. The Basics**](#1-the-basics) (7 videos)
  - [A simple example](#a-simple-example)
  - [Python vs. Excel data types](#python-vs-excel-data-types)
  - [The xl() function](#the-xl-function)
  - [Understanding row-order execution](#understanding-row-order-execution)
  - [Debugging](#debugging)
  - [Challenge: Basics](#challenge-basics)
  - [Solution: Basics](#solution-basics)
- [**2. Working with Data**](#2-working-with-data) (6 videos)
  - [Introduction to DataFrames](#introduction-to-dataframes)
  - [Exploring DataFrame content](#exploring-dataframe-content)
  - [Manipulating DataFrames](#manipulating-dataframes)
  - [Interoperating with Python](#interoperating-with-python)
  - [Challenge: DataFrames](#challenge-dataframes)
  - [Solution: DataFrames](#solution-dataframes)
- [**3. Practical Python-in-Excel Examples**](#3-practical-python-in-excel-examples) (5 videos)
  - [Fixing dates with dateutil](#fixing-dates-with-dateutil)
  - [Generate a random sequence](#generate-a-random-sequence)
  - [Scatter plot with Seaborn](#scatter-plot-with-seaborn)
  - [Create a Gantt chart](#create-a-gantt-chart)
  - [Extract data with regular expressions](#extract-data-with-regular-expressions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Two great technologies together at last](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/two-great-technologies-together-at-last?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/two-great-technologies-together-at-last?u=76281980&t=0)** - Are you an [[Microsoft Excel|Excel]] user that works with other data professionals, or a data scientist that shares information with Excel users? Well, I have some great news for you. You can now combine the power of [[Python (Programming Language)|Python]] with the ease of Excel and take your [[Data Processing]] to a new level, and collaborate with a wider range of data engineers and scientists with ease. Hi, I'm Joe Marini. I've been building software professionally for some of the best-known companies in Silicon Valley for more than 35 years. In this course, we're going to see how to perform the kinds of data operations that used to require dedicated programming experience. Python is one of the most popular programming languages in the world, and now it's available for Excel users. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Python (Programming Language)|Python]] (2), [[Data Processing]] (1)
> **CLI Commands:** python (2)
> **Speakers:** - are (1)

#### [What you should know](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/what-you-should-know?u=76281980&t=0)** - [Instructor] There are a few things that you should already know in order to get the most out of this course. First, although this is an introductory course to using [[Python (Programming Language)|Python]] within [[Microsoft Excel|Excel]], it is not intended to be an introduction to Excel or Python themselves. I'm going to assume that you are already familiar with the very basics of Python programming. You don't need to be an expert, but you do have to understand concepts such as using variables, working with basic [[Data Structures]] like lists and objects, writing functions, and so on. If you need to get up to speed with Python, I suggest watching the "Learning Python" course first. In addition, I'm also going to assume that you're already familiar with using Excel. And again, you don't have to be an expert, but knowing how to work with tables and cells, write formulas, and work with other basic Excel features is expected. If you need to brush up on your Excel knowledge, then I suggest checking out "Excel Essential Training" here in the library. When you're comfortable with these subjects, then you are ready to proceed with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Python (Programming Language)|Python]] (5), [[Data Structures]] (1)
> **CLI Commands:** python (5)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Getting set up](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/getting-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/getting-set-up?u=76281980&t=0)** - [Joe] At the time this course is being recorded, the [[Python (Programming Language)|Python]] feature is only enabled for [[Microsoft Excel|Excel]] on [[Windows]]. [[Microsoft]] has indicated that it will be available for other platforms in the future, and by the time you're watching this, that might have already happened. In your version of Excel, go to the Formulas panel and see if there is a Python section. It should look something like this. If there is, then the feature should be enabled for you. If not, you may need to enable it for your Microsoft account. You can follow the instructions at this link in the Microsoft documentation to learn how to enable Python for your version of Excel if it is available. For this course, I've provided example files that you can use to follow along with each video. You can find the examples for this course in the associated [[GitHub]] repository, which is located at this link. The examples are organized according to the chapter number in the course. So let's go ahead and take a look inside what are the chapters. And each example has both a finished and a starting state. I'm going to use the starting state in each video to build towards the finished state. So, if you want to follow along with me, then you can use those files to do so. You can also just use the finished examples to see how the code works for yourself and try out different experiments. How you use the examples is entirely up to you. You can download these examples to your computer. Let's go back to the homepage. So to download these examples to your computer, click on the Code button here, select the Local tab, and then click on this right here, Download ZIP. So download these examples to your computer,
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/getting-set-up?u=76281980&t=94)** unzip them, and place them where they are easy to access, and then you're ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Excel|Excel]] (3), [[Microsoft]] (3), [[Windows]] (1), [[GitHub]] (1)
> **CLI Commands:** python (3), find (1), unzip (1)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Env Vars:** zip (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [joe] (1)


### 1. The Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [A simple example](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/a-simple-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/a-simple-example?u=76281980&t=0)** - [Instructor] Let's begin with some simple examples to see how we can use [[Python (Programming Language)|Python]] within our [[Microsoft Excel|Excel]] worksheet. And before we do that, let's get familiar with the Python tools that are in Excel. So here in Excel, I have my workbook opened, named basics_start, and that's in chapter 1 of the exercise files. So first I'm going to select the formulas section here in the Excel ribbon, and you can see that I have an area labeled Python. So there's a button that allows me to insert Python code into a cell or to try out one of the prebuilt samples. And we'll get back to that a little bit later. There's also a button labeled diagnostics, and if I click on it, you can see that a side panel opens and this is where you can debug and track down errors in your Python code, right? Let's go ahead and close that. We'll learn about that a little bit later in the course as well. This button is labeled initialization, and if I click on this, you can see I get another side panel. And this shows me the current initialization code for the Python runtime environment. And as you can see, Excel already includes several popular and useful Python libraries by default, such as NumPy and [[Pandas (Software)|Pandas]] for [[Data Science]], we've got matplotlib and seaborn for graphing and so on. Now at the moment, this initialization code is read-only. You can't directly modify the content of this panel, but you can include additional Python libraries in your workbooks and we'll see how to do that later. All right, let's close that. There's another button labeled reset,
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/a-simple-example?u=76281980&t=93)** and this button lets me reset either the global variables for the current workbook or the entire Python runtime environment, and this will trigger a recalculation. Okay, let's try writing some code. So there are a couple of ways to insert Python code into a cell, and one way is here in the formula section as we just saw, right? We can click the insert Python button to create a Python cell. The other way to do it is to to directly type into a cell. I'm going to write equals as if I was going to use a regular Python formula, but in this case I'm going to write PY and then open parentheses. And when I do that you can see that the cell visually switches to indicate that this is now a Python cell. So once we've created a Python cell, we can enter our Python code directly into the cell. And I find that it's usually helpful to resize the formula bar to make multiple lines of code visible and easier to edit. So you can see that I've resized my formula bar here from the regular one line up to about eh, maybe five or six lines or so. So let's just enter a simple expression to start with. I'll write 5+6 and when I'm editing code in Python, the enter key will just give me a new line in my Python code, unlike in other cells where the enter key commits the changes to the cell content. So to commit the change to the cell, I need to type control + enter. So I'll do that. And when I do that, you saw that little flash
>
> **[3:05](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/a-simple-example?u=76281980&t=185)** of the little busy message there because the Python code was executing, and now you can see that the result in the cell is 11, which is the result of 5+6. Now, I don't need to explicitly return anything from the Python code, and that is because the result of the last operation is automatically used as the cell value. Alright, let's try something else. I'm going to combine a string with a number and I'm going to define a Python variable as well. So let's click here in cell C5 and once again I'll write equals PY, open parentheses, and now I'll write some code. I'll define a variable named S, and I'll set that to the value of hello world. So this is going to be a string variable, and then I'll write S + and then a colon plus, and I'll call the len function, which gives me the length of something in Python, and I'll do length of S. Now, when I commit this code by typing control + enter, you see I get an error, the cell changes to the pound Python exclamation string, and then if I click on the diagnostics button, we can see that there's an error. I can also click on the little warning icon next to the cell here. And if I do that, I can choose show error message and it shows me the error. And in this case, we can see that the diagnostics panel is telling me that the error is that I can only concatenate strings to each other, not a string and an integer number.
>
> **[4:40](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/a-simple-example?u=76281980&t=280)** Well, okay, that's simple enough to fix. Let's just convert the result of the length call to a string, right? Let's dismiss that. And I'll surround this call to length with a call to stir, which will convert that number into a string. And once again, I'll control + enter to commit. Alright And when I do that, the error goes away. I can go ahead and clear out my diagnostics panel and close it. And we have, as our cell value is the hello world string and the string length separated by a colon character. Now, you've probably noticed that these Python code cells have a little stack icon in them. This icon is a visual indicator that they are Python cells. We're going to learn a little bit more about this later in the course, but if I click on the little dropdown next to the formula bar on one of these cells, right, this little guy right here, you can see that I can control the value type of that cell. I can either choose to have that cell be represented as a Python object, which it currently is, or as an Excel value. So for the moment, I'm going to change our first expression example to an Excel value. And you can see that when I do that, the Python icon disappears. It's still a Python cell, but it's being treated as a native Excel value. So of course I can also use the values of other cells in my Python code. So let's multiply the results of the first expression by two and then store the result inside the value of cell C7. So to do that, I have to have a way
>
> **[6:17](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/a-simple-example?u=76281980&t=377)** of accessing cell values from within my Python code. So there's a function named XL that lets me do this, and we will learn more about this function later in the course. But for the moment, just follow along with me. I'm going to write equals py, open parentheses, and then I'm going to write my expression as two times. And then I can either write the XL function and then access the value of C, looks like 3. You can see that C3 highlights when I do this or if I don't want to type it directly, I can just click inside my Python editor and then click on the cell that I want. And you can see that I get the same result and when I commit the change, sure enough, you can see that the result is now 22. Alright, so one more example to show, I can refer to Python variables that I've defined in other cells. So let's take the string that I defined in cell C5 So remember I made this variable called S, and I'm going to convert it to uppercase and we'll put the result in cell C9 So let's go ahead and click in C9. Once again, I'll make a Python cell and I'm just going to simply write s. and I'm going to call the upper function, which converts the string in the S variable to uppercase. And so when I commit this change, you can see that the result is that the value of the string is now being displayed in uppercase. So just from this short introduction, you can see how easy it is to use Python code within Excel and operate on Excel values from within that Python code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (35), [[Microsoft Excel|Excel]] (10), [[Pandas (Software)|Pandas]] (1), [[Data Science]] (1)
> **CLI Commands:** python (35), make (2), find (1)
> **UI Navigation:** click on (6), select the (1), dropdown (1)
> **Prerequisites:** initialization (3)
> **Cross-References:** later in (2)
> **Code Identifiers:** basics_start (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Python vs. Excel data types](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/python-vs-excel-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/python-vs-excel-data-types?u=76281980&t=0)** - [Instructor] Let's take a closer look at how [[Python (Programming Language)|Python]] and [[Microsoft Excel|Excel]] values relate to each other. So here in my workbook, named PyExcel_start from chapter one, I have some cells with different types of data in them. So you can see here at the top, I've got a string, an integer, a floating point, a Boolean, and even a date. So if we look at each of the cells that contain the data, we can see that each cell's value is the result of an expression using a native Python data type. The last one here is a Python date object. And you can see that I imported the Python datetime module in order to create it. Now, the reason that Excel is able to understand each of these individual native Python types is because they each only represent one single value. But Python can represent more complex data types than just single values. So for example, if we scroll down a little bit, you can see that I've got a Python variable here in C13 that represents a list of values. And you can see that Excel is representing this as a Python list in the cell. Now, to be able to work with the data in this list, I have to convert the cell to be an Excel data type. So let's select the cell and then choose from the dropdown next to the formula bar, we'll convert this to an Excel value. And when I do that, you can see that Excel expands the list to show all the values. If I click on the first cell, you can see that it is still in fact a Python cell,
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/python-vs-excel-data-types?u=76281980&t=94)** but the values are now being treated as Excel values and I can operate on each one of these individually. This also works with other list like data types such as tuples and sets. So here in C18 I have a tuple, which is a fancy way of saying collection of unrelated data types in a single object. And I can just expand that into an Excel value and that works. And the same thing with a set which only contains unique values. So here you can see that in my list, I've got a bunch of duplicated numbers, but when I convert that to a set and then I expand that into an Excel value, only the unique values are retained. So this even works with dictionaries. So here in E13, let's add a Python dictionary object. So I'm going to create a dictionary object named person, and I'll give it some properties like a first name and a last name and an age. And let's close that off. Alright, so when I commit this code and execute it, you can see that Excel displays this as a Python dictionary. And if I try to convert this to an Excel value, it just stays as a dictionary because Excel doesn't know how to introspect complex Python dictionary objects just on its own. But I can operate on the properties of the object using .notation.
>
> **[3:08](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/python-vs-excel-data-types?u=76281980&t=188)** So let's click into G13 and I'll write =E13. And when I do that, you can see that Excel is able to read the properties of the Python object and then display them in this dropdown. So I can refer to them in my Excel formulas, just like I can any other complex Excel object. So I can do the same thing with age. Oh, whoops, I'm going to put a equal sign in front of that. There we go. And so this way I can access the data inside the Python object, but get this, it gets even better. I can even operate on images like this. So let's scroll down and let's convert these back into Python objects to reduce some of the visual clutter. So here in cell C21, let's create some Python code that builds an image programmatically. So from the PIL, which is the pillow image library that is included with our Python environment, I'm going to import the image and image draw modules, and then I'm going to create a new image. So I'll have a variable named IMG, and then I'll write image.new. So I'll create a new image and I'll set the mode to be an RGB image. And I'll give it a size. I'll make it 300 by 100 and I'll give it a color and I'll make that an RGB triplet of 153, 153, and 255.
>
> **[4:42](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/python-vs-excel-data-types?u=76281980&t=282)** So now I've created my image and now I have to actually draw the image into an image context. So I'll create an image context and then I'll call image draw.draw to draw my image into my context. And then just for fun, let's use the context's text function to put a text string on top of my image and we'll put the string Hello World. And we'll give the text a fill color of white. Okay. And then remember, I have to return a value that's going to be used in the cell because the text function doesn't really return anything. I'll just simply return the finished image so that Excel can put that into my cell. All right, let's go ahead and control enter to commit this code. And you can see that when I do that, I get an image object in my cell. And sure enough, if I click on my little stack icon here, I can see a preview of my image. So it's purplish background with some white text. What I'm going to do is convert that to an Excel value. And when I do that, you can see that Excel gives me a very small picture in my cell. But what I'm going to do is right click and choose Picture in Cell from the sub menu and choose create reference. So that now gives me a reference to that cell that I can use anywhere in my worksheet. But wait, it gets even better. Let's have some fun. Let's change the code so that instead of being a hard-coded reference to Hello World,
>
> **[6:18](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/python-vs-excel-data-types?u=76281980&t=378)** we're actually going to use the value from the C5 cell.
>
> **[6:26](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/python-vs-excel-data-types?u=76281980&t=386)** And you can see that when I do that, now I'm referencing the value that's up here in C5. It says this is a string. It sure enough, it's using that value. And if I change the value that's in here, let's change this Python code to say something else. Just for fun, let's go back to Hello World again and let's commit. And when we scroll back down, you can see that now the image is updated with our new string. So as you work with Python within Excel, you'll find yourself using these kinds of data conversions quite often.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (19), [[Microsoft Excel|Excel]] (19)
> **CLI Commands:** python (19), make (2), find (1)
> **Env Vars:** e13 (2), rgb (2), c13 (1), c18 (1), g13 (1)
> **UI Navigation:** scroll down (2), dropdown (2), click on (2), select the (1)
> **Analogies:** picture (2), for example (1), just like (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [The xl() function](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/the-xl-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/the-xl-function?u=76281980&t=0)** - [Instructor] We've used the xl function a couple of times now. So let's take a closer look at how it works. I've opened my xl_start workbook here in [[Microsoft Excel|Excel]], and you can see I have some cells with data already in them. The xl function is what gives us access to the contents of our workbook cells within our [[Python (Programming Language)|Python]] code. So for example, I can use the xl function to combine the contents of cells D4 and D6 quite easily. Let's do that here in E6 I'll make a Python cell and I'll write my function xl, and I'll use cell D6, and I'll add that with a space. And then I'll use the str function because the value in cell D4 is an integer, so we have to convert that to a string in Python before we can add it to an existing string. So I'll cast the value of xl's D4 cell to a string. And when I do that, you can see that after a few moments, we have the result here in E6. So we've got Hello World combined with the value of 42. However, I can also operate on named cells. So if I change the name of cell D4 up here in the cell editor, I'll change this to TheAnswerToEverything, which of course, 42 is.
>
> **[1:35](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/the-xl-function?u=76281980&t=95)** And now I can update my code to work on that named cell. So instead of calling my function on D4, I'll simply change this to TheAnswerToEverything. And we'll commit that, and you can see that I have the same result as you would expect. So the function also works with regular cell notation the way you would expect it to in Excel. So for example, here in my list of values, I've got a range of values from D9 down to D14. And what I want to do is multiply the values in this range by this multiplier here in E8, and what I can do is make a formula for the first row. Once again, I'll do this in Python, and I'll set this to be xl of, and I'll use cell D9 times xl, and I'll refer to cell E8. Okay, and I'll commit that. And sure enough, it works. 100 X 1.5 is in fact 150, but watch what happens when I use the little drag handle thingy to extend my formula all the way down. Oh, that's not anywhere close to what I was expecting, right? And the reason that's happening is because the formula is auto-advancing both of the cell accessors, which is what you'd expect. So what I need to do is use a dollar sign character to indicate that the E8 cell doesn't need to advance. So I'll change this to $E$8. And we'll commit that.
>
> **[3:13](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/the-xl-function?u=76281980&t=193)** And now I'll just go ahead, and you can see that now that I've changed it to be the dollar sign notation, now I'm getting the values that I expected. Of course, the xl function also works with two-dimensional selections. So let's scroll down a little bit. So here, I have a table of values, and what I'm going to do here in G16 is create a Python cell. And now I'm going to drag select the contents of my table. And you can see that when I do that, Excel automatically figures out that my table has header values. You can see it's setting headers=True here. If it doesn't automatically do this for some reason and your table does have headers, you can just go ahead and manually add this. And it uses the name of the table if there is one assigned. And if you look in the name manager or if you click on the dropdown here, well, actually let me just go ahead and commit this first, you can see that if I click on my name manager, I actually have a table name, which is TeamScores. So it's using the name of the table here. And so now I've got a selection in this cell, which is a Python object. And when I commit the change, Python creates a [[Pandas (Software)|Pandas]] DataFrame to represent the content of that table. Now if you're already familiar with the Pandas library, then you're probably getting a little bit excited right now, right? Because this means you can use all of your favorite DataFrame features right here in Excel. If you're not familiar with DataFrames, and don't worry, I'm going to cover those a little later in the course, but let me give you a little peek at what they can do. So first, if I click on this little Python stack icon
>
> **[4:47](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/the-xl-function?u=76281980&t=287)** in the cell, you can see that I get a hover preview of the DataFrame data. And you might be thinking to yourself, "Well, what's the big deal? That's just a table and I've already got a table." Well, but DataFrames have lots of great features built in. So as we saw in a previous video, I can convert the cell into an xl value. And when I do that, I get my table of data. But of course, since this is a Python data structure, I can use Python code to operate on it. So let's go into the Python code, and let's create a variable to represent this DataFrame. So I'll assign the result of my xl function to this df variable, which is now going to be my DataFrame. And then I'm going to call df.describe, which is a Pandas function. And when I commit this code, now you can see that I get my DataFrame stats right here in Excel so I can operate them. So I've got my count, which is four values. I have statistical values, like mean and standard deviation. I've got max and min values and so on. So there's much more to using data frames than this, as we will see later in the course, but the key point to remember here is that the xl function is the bridge between using your Excel data within the Python environment and vice versa.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[Microsoft Excel|Excel]] (6), [[Pandas (Software)|Pandas]] (3)
> **CLI Commands:** python (12), make (2)
> **UI Navigation:** click on (3), scroll down (1), select the (1), dropdown (1)
> **Cross-References:** later in (2), as we saw (1), previous video (1)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** d14 (1), g16 (1)
> **Analogies:** for example (2)
> **Code Identifiers:** xl_start (1)

#### [Understanding row-order execution](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/understanding-row-order-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/understanding-row-order-execution?u=76281980&t=0)** - [Instructor] Now that we've seen how to create and refer to variables in [[Python (Programming Language)|Python]], there's an important rule that you need to understand regarding how [[Microsoft Excel|Excel]] makes those variables accessible. So let's consider a worksheet with a Python cell in it that declares a variable named s that contains a string. So here, I've got my RowOrder_start example file open, and in C5, I have a Python cell with a variable named s that refers to this string. Once I've defined this variable, I can refer to that variable in all of the cells that follow the cell where it's defined, all of these cells going forward, as well as all of the cells that come in the row after that row. And that's because Excel uses what is called row order execution from left to right, unless you're using a right to left language, in which case it would be the other way around. So I can refer to the s variable defined in C5 later on in the sheet. So for example, in G6, I can do something like this, I can write =py, and then I can call s.upper. And when I commit that, sure enough, you can see that the string is there in the cell. But if I try to use the s variable prior to C5, I'll get an error. So for example, let's click in C4, and let's make a python cell, and I'll just refer to the s variable. And you can see that when I do that,
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/understanding-row-order-execution?u=76281980&t=92)** I get an error, because it says name s is not defined. The other thing you have to remember is that Python also lets you re-declare variables. This is a feature of Python, it has nothing to do with Excel. So you need to be careful about using the same variable name later on in the worksheet or the entire workbook. So for example, here in C8, I've defined s, or rather, I've redefined s to contain a different value, in this case, the integer number 200. So if I use s again in G8 for example, let's make a Python cell here, refer to s. And now, s is 200, because I've redefined it, you can see I'm getting the new value. So there's a couple of ways that you can help prevent errors from happening. One way is justifying all your variables and import your modules as early as possible, such as for example, in cell A1. Now, of course, there might be reasons you might not want to do this, so another approach might be to create a separate worksheet for your variable definitions and any other Python modules you decide to import. So for example, I can make a new worksheet, and I'll call this Init. And I'll move Init to be before Sheet1, and I'll put that at the very beginning of the workbook. And then, right here in cell A1, I can just simply define my Python variable. So in this case, I'll write =py,
>
> **[3:07](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/understanding-row-order-execution?u=76281980&t=187)** and I'll just redefine s to be Hello World. And the other thing that you might want to do, this is a little bit of a trick that I do sometimes, you might want to put a literal string at the end of the cell to serve as a kind of programming comment, so you know what the cell is doing. So what I'm going to do is I'm going to write in a string, "Initialize s." And when I commit that, you can see that what appears in the cell is the last string that I put into the Python code, because that's the last expression that gets evaluated. s is still defined, you don't have to worry about that, but visually, what happens is my little supposed, you know, comment that I put in my cell. All right, so let's commit that, and let's go back to my worksheet. And when I go back to my worksheet, you can see that I can now just refer to the s variable, because I've defined it in a previous worksheet. You can see that I'm no longer getting an error in C4, because I've defined the string in the previous worksheet. So now, all of the following worksheets have access to it, and so, that error is now gone. So the easiest way to remember this rule is that variables can be used from the point where they are defined going forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (10), [[Microsoft Excel|Excel]] (3)
> **CLI Commands:** python (10), make (3)
> **Analogies:** for example (6), such as (1)
> **Definitions:** is a  (2), refers to (1), is called (1)
> **Cross-References:** go back to (2)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Debugging](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/debugging?u=76281980&t=0)** - [Instructor] There's an old saying in [[Software Development]] or, you know, I don't know, maybe I just made it up, but it goes something like this. Where there's code, there's bound to be bugs. We've advanced far enough that it's time to take a look at some of the features in [[Microsoft Excel|Excel]] that you can use to debug and troubleshoot your code. So I've opened my Debug workbook here in Chapter 1. And let's take a look at some of the error conditions you might encounter while working with [[Python (Programming Language)|Python]] in Excel. If you see the [[Microsoft Word|word]] #SPILL! in the cell, it's happening because the value in the cell is being interrupted by another cell. So in this case, I have a list of Python values, and when I try to convert that to an Excel value, those values in the list would normally fill the cells below this one. However, the cell below has a string in it, so that's interrupting the output of my Python cell. And you notice that when I select my cell here, I get a little warning icon. And when I expand that menu, I get some more information about the error. In addition to telling me what the error is, which is that the spill range isn't blank, I can select the cell that's causing the spill interruption. So it says Select Obstructing Cells, and now I can do something about it. Let's keep going. The #PYTHON! error is displayed when there's an error in the Python code itself. So let's put some Python code in B6 that I know is going to cause an error. So I'll just simply write a plus the integer 5. And when I commit the code,
>
> **[1:36](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/debugging?u=76281980&t=96)** you can see, sure enough, I get a Python error, and I can use the Diagnostics panel to see what's going on. So let's bring the Diagnostics panel up. And you can see I'm getting more information about my problem here. And, once again, I can also use the little warning icon to get more information about the error by selecting the Show Error Message item. The Diagnostics window shows me all of the problems in the current workbook, along with the cell that's causing each problem. Now, at the moment, there isn't yet a way to set any break points or interactively debug your code, but you can use the print statement to send information to the Diagnostics window. Let's do this. Let's go ahead and remove the previous problem. And let's enter another piece of code in B8 that I know is going to cause a problem. So I'll make this into a Python cell, and I'll have a couple of variables. I'll make x equal to 10, and y is equal to 0. And then I'll divide x by y. And when I commit this, obviously that's a division by zero error. And, sure enough, you can see that the Diagnostics window tells me that. But one of the things I can do, which is really nice, is I can use the print statement. So if I add print in here, and I'm going to use a Python f string to do this. I'm going to write out the values of x, and that's going to be x, and y is going to be the value of y.
>
> **[3:10](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/debugging?u=76281980&t=190)** So let's commit the code again. And now you can see that, in addition to the error message, I'm getting this print output right here that shows me some useful debugging information in the Diagnostics panel. All right, let's keep going. There's a couple of other error messages that you should be familiar with, and these don't necessarily indicate errors within your code. The #CONNECT! error indicates that Excel is having trouble accessing the Python cloud service. So, remember, Python in Excel actually executes on [[Microsoft]]'s cloud. So if you see this error message, it means that the service can't be reached for some reason. The #BUSY! message is not necessarily an error, it just briefly appears when the Python service is executing the code before a result is returned. And if you see a None or NoneType value, that means that the result of the Python code in the cell does not return a value. So, for example, if I create a Python cell here, and I use the import statement to import a Python module, let's say I import the math module, you can see that when I commit this cell, I get this value of None. So the math module has been imported, but because the import statement doesn't return a value, I'm getting this None result. So what I usually do, and we kind of saw an example of this in a previous video, I usually, in cases where I get a NoneType back, I put a literal string at the end of the code, and I put some kind of comment in there
>
> **[4:45](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/debugging?u=76281980&t=285)** just so I know what the cell is doing. So, for example, I'll write import the math module. And now when I commit that, you can see that the result is that the string is being returned, and so at least I know what's going on in there. The import still executes, that's fine, but now I have a clearer idea of what's going on because it acts sort of like a comment within my code that I can see in my worksheet. So these tips should help you debug your code and troubleshoot any problems that you run into.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (15), [[Microsoft Excel|Excel]] (5), [[Software Development]] (1), [[Microsoft Word|Word]] (1), [[Microsoft]] (1)
> **CLI Commands:** python (15), make (2)
> **Env Vars:** spill (1), python (1), connect (1), busy (1)
> **Warnings:** troubleshoot (2), warning (2)
> **Definitions:** means that (2)
> **Analogies:** for example (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** select the (1)

#### [Challenge: Basics](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/challenge-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/challenge-basics?u=76281980&t=0)** - [Instructor] Okay, let's try a simple programming challenge using what we've learned so far in this chapter. We're going to use [[Python (Programming Language)|Python]] to combine the contents of two cells, and then put the result in a third cell, and then calculate some data about that content and put it in a fourth cell. So I'm going to show you my solution working here in [[Microsoft Excel|Excel]], and then you can give it a try. So this is the challenge underscore finished workbook that contains my completed code. You should try the challenge in the underscore start version of the workbook. So here's what we're going to do. I've got two cells labeled string one and string two, and you can see that in the result cell, the two strings are concatenated together in reverse order, separated by a comma, and are converted to lowercase. And then in the length cell, I'm calculating the length of the result string. So if I try changing some of these values, you can see that the result is changing, right? So in each case, we have the second string, then a comma, then the first string, and then the length of the result string. All right, so now it's your turn. Using the starting point in the chapter one of the Excel folder, try your own solution out, and then I'll be back to explain my code so you can compare it to yours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Basics](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-basics?u=76281980&t=0)** (bright curious music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-basics?u=76281980&t=5)** - [Instructor] Let's take a look at my solution to this challenge. So remember that we needed to write some [[Python (Programming Language)|Python]] code to take the two values from separate cells, combine them together in reverse order, separated by a comma, and convert it to lowercase, and also calculate the length of the string. So my solutions code uses the [[Microsoft Excel|Excel]] function. So you can see here I've got my two source cells right here. And then my code uses the Excel function to retrieve the values from the two string cells. So I get the value from C5, and the value from B5, combine them in the reverse order, so C5 comes first, then the comma, then the B5. And then, I use the lower function to convert the string to lowercase. Also, notice that I'm enclosing my calls to XL with the Python stir function, because you can't concatenate different data types unless they are both strings. So let's watch what happens. So if I make cell two here 400, you can see that that works. But if I go into my code and I take off the call to stir from both of my cells, right? Let's just take it off of both, and now let's commit the code. You can see that when I do that, I get an error. And the error is because you can't combine integer values directly with string values. You have to convert them to strings first.
>
> **[1:40](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-basics?u=76281980&t=100)** So that's a little bit of a gotcha there. Let's go ahead and put that back in. So I'll put str back in, on both of these guys.
>
> **[1:52](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-basics?u=76281980&t=112)** And put it on this one as well. And, let's commit that code. Okay, and let's close our diagnostics. All right, so then I use the Python lower function to convert the string to lowercase. And the result of that function is then automatically returned to Excel as the value for that cell. So for the length cell, my code uses the built-in length function. And again, that's built in to Python. That is just part of the standard Python language. And it uses the existing string variable from the previous cell. So remember in the previous cell, I'm creating a variable named S to hold the result. So not only can I use it to convert to lowercase, but I can then reuse that value in a later cell to calculate the length. All right, so hopefully you were able to get something similar working. So how does your solution compare to mine? Now it's not important that your code be the same as mine. There's usually multiple ways of solving any given programming problem. Just take a moment to compare your code to mine and note the similarities and differences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Microsoft Excel|Excel]] (3)
> **CLI Commands:** python (5), make (1)
> **Warnings:** gotcha (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright curious music) (1)


### 2. Working with Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to DataFrames](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/introduction-to-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/introduction-to-dataframes?u=76281980&t=0)** - [Instructor] So far, we've seen how to work with basic [[Python (Programming Language)|Python]] code in our workbooks, and how to access content in workbooks using the XL function to get data into our Python logic. In this chapter, we're going to learn more about working with data using Python, and we're going to start by examining the [[Pandas (Software)|pandas]] DataFrame. If you're already familiar with the basics of DataFrames, you can feel free to skip over this video. A DataFrame is essentially a two-dimensional tabular data structure provided by the pandas library. They are very similar to the data tables that [[Microsoft Excel|Excel]] already provides, but they have a lot of built-in features that make them very well suited for performing data operations. Each row in a DataFrame represents an individual set of data content, while each column represents a variable or a feature of that data. Each column has a unique name, and rows are accessed by an integer index value. DataFrames make it really easy to access and manipulate their data content, and they support a wide range of data-related operations above and beyond what you can easily do in Excel. They're a bit more complex to use compared to Excel data tables, but as you'll see later in the chapter, the DataFrame API is relatively simple to learn and use. DataFrames can be created in a variety of ways, including programmatically. So, for example, if I have an object with some properties, each of which is a list of data values, I can easily turn that into a DataFrame just by passing that object to the DataFrame constructor, and I can easily perform operations such as sorting the data on a particular column.
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/introduction-to-dataframes?u=76281980&t=94)** This will result in a DataFrame where each of the column names maps to the properties in the object, and each row corresponds to the data in the lists that the properties refer to. Once I have my data in a DataFrame, I can perform all kinds of operation on it. I can sort the data on multiple columns. I can use the group-by-function to group data by a given column. The query function lets me query the data within a DataFrame using expressions. I can filter the data using the filter function. I can apply arbitrary functions to the data in my DataFrame by using the apply function. And you can see in this case, I'm applying the stir.lower function to each of the cities in the city column. I can even merge DataFrames together by using the merge function. We're going to see examples of some of these as we go through the chapter, but I hope this gives you a sense of how powerful and useful DataFrames can be when combined with the features of Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Python (Programming Language)|Python]] (3), [[Pandas (Software)|Pandas]] (2)
> **CLI Commands:** python (3), make (2)
> **Analogies:** similar to (1), for example (1), such as (1)
> **Env Vars:** api (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Exploring DataFrame content](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/exploring-dataframe-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/exploring-dataframe-content?u=76281980&t=0)** - [Instructor] So now that we've learned a little bit about what dataframes are, let's take a look at how we can explore their content once we've created them in [[Microsoft Excel|Excel]]. So I have my example file, Dfexplore_start open from chapter two, and you can see that here in cell A1, I have created a dataframe using the data in the Scores worksheet, which is this worksheet down here. It has a bunch of scores across different subjects and across multiple regions. So you can see I'm using the Excel function to load that data from that worksheet. And I've got headers=True because it has headers. And then I have this string at the bottom of the cell just so I know what that cell is actually doing. We've already seen earlier in the course how to use the describe function to get information about the dataframe content. So let me just add that in here for reference. So I'll create a [[Python (Programming Language)|Python]] cell, and I'll write scores.describe, and let's go ahead and commit that. You can see that that creates a dataframe and I'll just expand that to an Excel value. So the describe function gives me an overview of the content of the dataset, but there are other ways I can explore the content, so let's take a look at some of those. The Shape property tells me how many columns and rows there are in a dataframe. So let's create a Python cell, and I'll just write scores.shape, and this is a property, not a function,
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/exploring-dataframe-content?u=76281980&t=93)** so I'll just go ahead and commit that. And we can see that that gives me a tuple. And we'll expand this, and it tells me that there are 44 rows and 4 columns. So similar to the shape, I can get the size of the dataframe, which is the number of rows times the number of columns. So I'll do that here. And that's going to be scores.size, again, that's a property, and you can see that sure enough, 44 times 4 is 176. I can get details about the columns themselves, such as their names by using the Columns property. So in cell E18, let's go ahead and create a Python cell and I'll write scores.columns. And then I'm going to get the values for the columns, and that will give me an array. And when I expand that, we can see that my columns are region, right, that's the title, and I've got... So there's Region, Music, Science, and History. And sure enough, if we look at the sheet, we've got Region, music, Science, and History, okay, so that matches up. The D types field tells me about the data types that are contained within the dataframe. So here in H13, let's write scores.dtypes, and that's a series, so let's expand that. And we can see that each of my columns has a data type. So Region is an object,
>
> **[3:06](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/exploring-dataframe-content?u=76281980&t=186)** which is pretty much a string. And then Music, Science, and History are all floating point numbers, and that matches up with the data that we have. And then I can use the Info method to learn about the data within the dataframe, which is kind of similar to the describe function. So here, let's go ahead and write scores.info. And that's a function, so we have to call it like this. And you see that it returns on None type, so it looks like it didn't do anything. But if we open up the Diagnostics panel, we'll see that the info function actually printed out the information to the Diagnostics panel. So it doesn't actually return information to the cell, it just uses the print function. And remember from earlier in the course, we talked about how the print function sends information directly to diagnostics. Okay, so these functions tell me about the structure of the dataframe, but I can also explore the content itself pretty easily. Let's scroll down a little bit. All right, so I'll click here in D24. So for example, I can calculate the mean, min, and max of any given data series. So here in D24, let's put in scores, and then I'm going to access the History series, and I'm going to get the mean, okay? Let's go ahead and calculate that. You know what, I'm going to comment out this cell right there, so it stops printing things to my diagnostics, all right? Okay, so we have the mean of the history series, let's copy that, and whoops.
>
> **[4:41](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/exploring-dataframe-content?u=76281980&t=281)** And I'll just put another cell in here and I'll paste. And in this case, we'll call the max function. All right, the max is 5, and let's paste one more time. And oh, whoops, I can make a Python cell first, there we go. Let's paste and let's change this to min. All right, and you can see that's 1.8. So I'm calculating the mean, max, and min individually for any given column. I can also calculate any one of these for more than one column at the same time. So let's click into G24, and I'm going to make a Python cell. And what I'm going to write here is I'll use these scores data, and I'm going to pass in a list of multiple column names. So I'm going to call "Music", and "Science", and "History". And what I'm going to do is get the median for all three of those at once. So when I commit that, you can see that that gives us a series. Let's go ahead and expand that to an Excel value. And now I get the median for all three of those columns at once. I can use the head and tail functions to look at the first and last few rows in the dataframe. So here in D29, let's create a Python cell, and I'll write scores.head.
>
> **[6:15](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/exploring-dataframe-content?u=76281980&t=375)** And I'm going to look at the first five rows, let's commit that. And then in H29, I'll do the same thing, I'll write scores.tail, same thing, five rows. And then let's expand each of these. Let's expand that one. And now I'm looking at the first and last five rows in the dataframe. All right, let's look at two more examples. I can get a list of all the unique values in a given column by using the unique function. So let's click into D36 and let's create a Python cell. And for the Region series in the scores table, let's call the unique function, and that will give me an array. And if I expand that, you can see that these are all the unique values that are in that column. And we can see that there are four of those. And I can use a function called value counts to see how many values there are for each of the columns or for any one column I want to focus on. So here in F36, let's create a Python cell. And once again, for the region, let's call value_counts(). And we'll commit that, and that gives me a series. And now you can see that for each of the regions, right,
>
> **[7:50](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/exploring-dataframe-content?u=76281980&t=470)** I've got region 1, 4, 3, and 2, I can see how many data values are assigned to each of those categories. So you can see how easy it is to inspect a dataframe and its content just by using the functions provided by the [[Pandas (Software)|Pandas]] library. Of course, in practice, you'll want to manipulate the data in addition to viewing it, and we'll see how to do that in a separate video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Microsoft Excel|Excel]] (4), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (8), make (2)
> **Env Vars:** d24 (2), e18 (1), h13 (1), g24 (1), d29 (1)
> **Analogies:** similar to (2), such as (1), for example (1)
> **Cross-References:** earlier in (2), we talked about (1)
> **Definitions:** is a  (1), is an  (1)
> **Code Identifiers:** value_counts (1)
> **Versions:** 1.8 (1)

#### [Manipulating DataFrames](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/manipulating-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/manipulating-dataframes?u=76281980&t=0)** - [Presenter] The data contained within dataframes can be manipulated in very flexible and powerful ways, and we'll see a few examples of how to do that in this video. So I have the start version of my DFmanipulate example file from Chapter 2 here in [[Microsoft Excel|Excel]], and I want to point out a couple of things. So here in my bands data table, so I've got two tables. One has data about various musical groups from different genres and different years in which they were founded, and then the other contains information about how many members are in each group, so two separate data tables. And if we go back to my main worksheet, you can see that in cell A1, I've already created two dataframes, one for each table. So bands1 contains the genre and founding years, and bands2 contains the member count for each band. So what I would like to do first is have one dataframe that represents the combined data of both tables. So to do that, I can merge the two dataframes together. So let's add the code for that. Now, there's a couple of ways to do this, but I'm going to use the merge function to merge bands2 into bands1. So I'm going to take this table and merge it into this one. And when that process happens, [[Pandas (Software)|pandas]] will match up the group name because that's common to both tables and then add the Members column to the singular table we're going to create. So let's go ahead and do that.
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/manipulating-dataframes?u=76281980&t=92)** I'll make a [[Python (Programming Language)|Python]] cell and I'm going to create a new dataframe called bands, and I'm going to write bands1, that's the first table. I'm going to call the merge function, and I'm going to merge in bands2. Let's go ahead and commit that. And you can see that that produces a new dataframe, so let's go ahead and convert that to an Excel value. And now, we can see that the data has been combined to form one table. So we have the genre and founding year along with the members, and it corresponds to each one of the bands in the Group column. So now that the data is combined, let's sort the resulting table and I'm going to create a two-dimensional sort. The first sort will be on the Genre column in ascending alphabetical order, and then the founding year in descending order. And I'm going to do that here in G4. So let's go ahead and create a Python cell, and I'll make a new dataframe called sortedbands. And I'm going to call bands, which is the dataframe I just created, I'm going to call sort_values. And inside the sort_values function, I'll write by, and I'm going to pass in a list of what I want to sort on. So first, I'm going to sort on Genre, and then I'm going to sort on Year, and then I have to specify whether I want ascending to be true or false. So I'm going to call the ascending argument, and, once again, that's going to be a list
>
> **[3:07](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/manipulating-dataframes?u=76281980&t=187)** that corresponds to each of those columns. So I'm going to pass in True for the first column for genre and False for the second one. So let's go ahead and commit that. And you can see that there's my new dataframe, so let's expand that. All right, and you can see that the table is now sorted on those two columns. So the genre is now sorted in ascending alphabetical order, starting with Alternative rock going all the way down to Rock, and then within each genre, I've got the founding year going in descending order. So where things really start to get interesting is in how you can query the content of dataframes. They're almost like little mini [[Databases]] that you can execute queries on, so let's try out a few. So first, let's use the query function to retrieve bands from the Alternative rock genre that have more than four members in them. So here in L4, I'll make a Python cell and I'll write bandsq is equal to, so I'm going to create a new dataframe. I'm going to write bands.query, so I'm going to use the query function, and then inside of this string, I'm simply going to pass in my query text. So I'm going to look for "Genre == 'Alternative rock' with a lowercase R, just make sure you do that correctly, and Members >= 4. And when I run that code, alright, there's my dataframe,
>
> **[4:44](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/manipulating-dataframes?u=76281980&t=284)** let's go ahead and expand that. And you can see, all right, I've got a few bands here, four of them, so these four bands all have four or more members from the Alternative rock genre. So let's try another way of running the query. So for this case, I'm going to use the brackets syntax, which is another way that pandas lets me query dataframes. And I'm going to look for bands whose genre is either Pop or Rock by using the isin function. So once again, I'll create a pandas dataframe, and this time I'm just going to write an expression. I'm not going to make a new dataframe. So on the bands dataframe that I already have, I'm going to call bands once again, and inside these brackets I'm going to pass in the term Genre. So this gives me the ability to query directly without calling the query function. I'm just passing in as the argument to the brackets what I want to look for. So I'm going to look for genres and I'm going to use the isin function, and that's a function. And then inside that function, what I need to do is pass in a tuple of values that I want to look for. So I'm going to look for Pop, and I'm going to look for Rock. Oh, I've got a little bit of a syntax error. This bracket here needs to go all the way at the end. There we go. Okay. So now, the expression I'm passing in
>
> **[6:17](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/manipulating-dataframes?u=76281980&t=377)** inside the bands brackets, this is kind of like calling the query function, but I'm just giving it an expression inside the brackets; it's functionally the same thing. So let's go ahead and commit that. Alright, new dataframe. And sure enough, you see I have my bands and some of them are in Pop and some are in Rock. Alright, let's do one more query example, and, once again, I'm going to use the brackets syntax to do this. So down here in L21, I'm going to create a new Python cell. And for this query, I want to find all bands whose name starts with the [[Microsoft Word|word]] The. So I'm going to write bands, and then inside bands I'm going to pass in, inside a function expression, I'm going to write bands. And I'm going to look at the Group column, and what I'm going to do is get the string representation of that column, and then I'm going to call the startswith function to look for the word The. So this expression gives me the string representation of the group name, and then on that string I'm going to call startswith, and if the name starts with The, then the query hits for that particular value. So let's commit. And let's expand that. And sure enough, we have all the groups whose name starts with The.
>
> **[7:51](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/manipulating-dataframes?u=76281980&t=471)** All right, so I hope it gives you a sense of how easy it is to query and extract data from dataframes, but we're not done quite yet. For one last example, let's look at using the apply function to work on dataframe content. So the apply function does what it says. It lets me apply a function to either an entire dataframe or just the contents of a particular column. So, for example, I can convert all of the band names to uppercase by applying the upper function in the string class to each item. So let's do this on the sortedbands table that we made earlier. So once again, I'll make a Python cell and I'm going to write sortedbands, and I want to operate on the Group column equals, and I'm going to call sortedbands["Group"], and I'm going to use the apply function. So I'm going to apply str.upper to each item in the Group column, and then when I do that, I'm going to return the sortedbands dataframe so that my cell will have a result. All right, so let's go ahead and commit this. So this will iterate over each item in the Group column, call stir.upper on each item, and then replace the existing item. So when I run this, you can see I get my dataframe. Let's go ahead and expand it.
>
> **[9:25](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/manipulating-dataframes?u=76281980&t=565)** And, oh look, now all of my band names have been made uppercase. So this is just a small sampling of the ways you can manipulate dataframes, and I'm sure you can imagine the possibilities of combining these capabilities with Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[Microsoft Excel|Excel]] (3), [[Pandas (Software)|Pandas]] (3), [[Microsoft Word|Word]] (2), [[Databases]] (1)
> **CLI Commands:** make (6), python (5), find (1)
> **Analogies:** kind of like (1), for example (1), imagine (1)
> **Code Identifiers:** sort_values (2)
> **Env Vars:** l21 (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [presenter] (1)

#### [Interoperating with Python](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/interoperating-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/interoperating-with-python?u=76281980&t=0)** - [Instructor] You've probably realized by now that an important part of working with data frames involves interoperating with [[Python (Programming Language)|Python]]. So there's going to be times when you'll want to convert data frame types either directly to Python as well as from Python to data frames. And some of the Python libraries available in the [[Microsoft Excel|Excel]] environment do work directly on data frames, such as the graphing libraries, but many of the others require native Python data types. So in this example, I'll demonstrate some of the ways that [[Pandas (Software)|Pandas]] make this possible. So let's start by creating a data frame. And here in the bands data tab, we have the same bands data that we saw in a previous example. So let's go ahead and create the data frame. So in cell, let's see, I'll scroll back all the way over here. So here in cell B3, you can see that I've got my Excel function and I'm using the bands data to create a data frame to represent the data that we're going to be working with. And so I've already got that data frame, and if we expand it out, alright, you can see that here's our bands data that we're going to be working with. So you can convert a data frame directly to a Python dictionary by using the to dict function. So here in F3, let's try that out. All right, my Python cell, and I'll make a variable named bands dict, and I'll call bands dot to dict.
>
> **[1:37](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/interoperating-with-python?u=76281980&t=97)** All right. And when I run that, you can see that I get a dictionary Python object, and I can now access that data using regular Python code. So for example, here in my cell here in F7, let's go ahead and make a Python cell and I can write bands dict, and I can access the group, and I'll access item zero in that group. You can see that gives me The Beatles. And sure enough, they are item zero in that dictionary, and I can do the same thing with the year. So let's create a Python cell and I'll write bands dict. In this case, I'll access the year of band zero, which should be 1960, it looks like. Yep, sure enough, there it is. I can also create a data frame series to a Python list by using the to list function. And this comes in handy when you need to pass data from a data frame into a Python function that requires a list. So here in I3, let's make a Python cell. And what I'm going to do is use the to list function. So I'll write band list, I'll make a variable named band list, and I'll set that equal to. So on bands, I'm going to get the group column, and I'm going to convert that column to a list using the to list function.
>
> **[3:12](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/interoperating-with-python?u=76281980&t=192)** That gives me a list. Let's get a little bit fancy. Now that I actually have this in a list format, I can do Python native code. For example, I can write band list dot sort. And then when I do that, I'll return the band list to my cell. Alright, so there's my list. Lets go and expand that. And now you can see that my list is sorted. So Pandas actually supports some pretty sophisticated conversion types. For example, I can directly convert a data frame straight to [[JSON]] by using the to JSON function. So let's go ahead and try that out. So in this cell, let's make a Python cell. I'm going to write band list to, make a new variable, and I'll write bands. And that's just the entire data frame. And I'll call to JSON on it. And now you can see that sure enough, I've converted my entire data frame into a JSON data object. Alright, so that's converting to Python. Now let's take a look at converting data the other way, going from Python types into Pandas. So I'll switch over to my from Python tab, and I'm going to start by creating a data frame from a Python list of values. So let's go ahead and click in cell B3. And I'm going to uncomment this line of code. So I have a list of data values in integers, and what I'm going to do is create a data frame
>
> **[4:46](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/interoperating-with-python?u=76281980&t=286)** from this list. So I'll make a variable called DF1. And on the Pandas library, which remember, PD is created by the initialization code for the Python environment. I'm going to call the data frame constructor, and I'll pass in my data, which is the list, and then I'm going to give it a name for what I want to use for the columns. So I'm going to pass in a list. I've only got one, right? So I'll just call that numbers, and then close off that function call. So let's run that. And sure enough, I have a new data frame with a column label for numbers. I can also create data frames directly from dictionary objects. So once again, let's go click into G3, and I'm going to uncomment the code in this cell. And this cell defines a list that contains lists that map language names to their file extensions. And so to create the data frame, I can just use the Pandas data frame constructor and pass in the dictionary. So I'll make a new variable called DF2, and then once again, I'll use the data frame constructor, and I'll pass in my dictionary. Let's go ahead and run that. And you can see the resulting data frame, right? So I've got my languages mapped to my file extensions. Alright, let's get a little bit fancy and let's use the Python zip function
>
> **[6:20](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/interoperating-with-python?u=76281980&t=380)** to combine two different lists and supply column names. So I'm going to click into cell G9 and you can see I've got two lists. I'm going to uncomment both of these. And what I'm going to do is use the zip function to combine those two lists into one. So I'll have my result and that's going to be equal to calling zip, which will combine langs with exts. And then I'll create the data frame using the result along with some names for the columns. So I'll make a new variable called DF3. And once again I'll call the data frame constructor, and I'll pass in my result, and I'll create columns. And the columns are going to be languages and extensions. Alright, let's go ahead and run that. And now you can see I have the same result as before, only now I have column names. So these kinds of conversions will become fairly routine as you make use of the, you know, 400 Python libraries that are available to you in the Excel Python runtime.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (24), [[Pandas (Software)|Pandas]] (5), [[JSON]] (4), [[Microsoft Excel|Excel]] (3)
> **CLI Commands:** python (24), make (11)
> **Env Vars:** json (4), df1 (1), df2 (1), df3 (1)
> **Analogies:** for example (3), such as (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: DataFrames](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/challenge-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/challenge-dataframes?u=76281980&t=0)** - [Instructor] All right, let's try another programming challenge. So for this challenge, we're going to take what we've learned in this chapter and complete three separate features. So I'll show you my version of the completed challenge, so you can see what your results should look like. So here in my Challenge_finished workbook, this is the finished version, you should be working in Challenge_start. So in the BandsData tab, okay, we have the table of the same data about musical groups that we've been using in the chapter. And if we go back to my Sheet1, you can see I've already created a DataFrame for that data here in cell B2, right? So I'm loading the data from the bands table. So using that data, for the first part of the challenge, you're going to calculate the number of bands that are in each musical genre. And you can see that result here, right? You can see that for each one of the genres that we have listed, the number of bands that are in that genre in the table is represented. The next part of the challenge will involve implementing a search feature. So you can see here in cell F4, I can enter a text string, and then my code will find the band names that contain that string. So right now, it's starting off with the [[Microsoft Word|word]] The, and you can see that all the bands that have The in the title are being listed. Let me try a different string, I'll change this to ay. And you can see that each band name that has ay somewhere in the name is being listed.
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/challenge-dataframes?u=76281980&t=94)** Let's try one more, let's try es. And you can see that, okay, Beatles, Stones, Eagles, and Guns N' Roses, they all have es in them. And then if I leave this blank, if I don't put in a search term, then all of the bands are returned, okay? So that's the search feature. And then the third part of the challenge will involve replacing the number of band members with a text string. So if the number of members in a band is two or fewer, the string will be small, if it is larger than two, but less than or equal to four, it will be medium, and then greater than four will be large. So you're going to replace the number with medium, small, or large in the column, and then put that DataFrame here in the result. So go ahead, try out those challenges using the start version of the Challenge workbook in the chapter 2 folder, and I'll be back to explain my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: DataFrames](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-dataframes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-dataframes?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-dataframes?u=76281980&t=5)** - [Instructor] All right, let's take a look at the code I used to solve these challenges. So for the first challenge, we needed to calculate the number of bands that were in each musical genre. So this can be calculated directly using the Value Counts function. So I just used the Value Counts function on the band's DataFrame that I've created, and you can see that that returns the number of values for each one of the different genres that I've passed in as the argument here to Value Counts. So that's pretty straightforward. For the second part of the challenge, we needed to implement a Text Search function. So the value in cell F4 is the term we needed to search for within the name of each band. And remember, if the value is empty, we return all the bands. So let's take a look at that code. And I'll expand this out so we can see it. So my code uses the [[Microsoft Excel|Excel]] function to get the search term from the cell F4. So if that cell is empty and the value is none, then I just return all of the bands in the DataFrame. Otherwise, I execute a query on the group by getting the string value of each item and then checking to see if it contains the value in F4. And remember that we saw how to execute these kinds of queries in the video on manipulating DataFrame content. So I'm not using the Query function here, I'm using the form of the query where I just simply pass in the condition
>
> **[1:38](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-dataframes?u=76281980&t=98)** directly into the Bands DataFrame between the two brackets. Okay. So then my code just returns the result variable, depending on whether there was a value to search for. All right. So let's put that back down here. The last part of the challenge was where we needed to replace the number of band members with a string value, which would either be small, medium, or large, depending on the number of members. So let's go ahead and take a look at my solution here. So my code uses the Apply function. So here you can see, I'm calling Apply on the Bands DataFrame, and I'm taking the result of the Apply function and just assigning it directly to the Members column. So I'm doing an in-place replacement of the values that are already in the Members column. And the function I'm applying is called Count to String, and that's this function right here, all right? So the value that gets passed in is going to be the number. So if we look at the Bands' data, we see that each value in Members is a number. So the argument to my Count to String function is going to be that number. So if X is less than or equal to two, I return Small. I return Medium if it's between two and inclusive of four. Otherwise, I return Large. And then I just replace that data in the Members column and then I return the DataFrame so that it can be placed into the cell.
>
> **[3:13](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/solution-dataframes?u=76281980&t=193)** All right, that's pretty much it. Now remember, it's not important that your code matches mine. Like I said before, there's almost always multiple ways to solve any given programming problem. What's important is that you compare your code to mine and learn from the differences. Look, maybe you found an even better way to solve the challenges than I did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Definitions:** is called (1), is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)


### 3. Practical Python-in-Excel Examples

[↑ Back to Table of Contents](#table-of-contents)

#### [Fixing dates with dateutil](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/fixing-dates-with-dateutil?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/fixing-dates-with-dateutil?u=76281980&t=0)** - [Instructor] At this point, we've learned how to include [[Python (Programming Language)|Python]] code in our [[Microsoft Excel|Excel]] workbooks, parse data between the Python and Excel environments, and work with data frames and other [[Data Structures]]. In this chapter, we're going to take a look at how to apply what we've learned to some practical examples that demonstrate how to use Python to address some common challenges when working with data in Excel. The Anaconda based Python environment that Excel uses already includes more than 400 Python modules that you can make use of in your workbooks and we'll see how to use some of them in this chapter. Alright, so case in point, let's start with a problem that vexes almost everybody at some point, working with date and time information. Here in my dateutil_start worksheet, you can see that I have a set of strings that each represents a date, but they're all in different formats. What I would like to do is get them to be in an Excel date format so I can work on them natively. And fortunately we have a library to do this for us. It's called the dateutil library. And let's take a look at that in the browser. So fortunately, the dateutil library is already included in the Anaconda environment where Excel executes the Python code. And you can learn more about the dateutil library at this link. What I'm most interested in is the parse function, so let's scroll down to the parse examples. The parse function can take a variety of date formats in a string and intelligently parse it into a real native Python date. So what I'm going to do is import this dateutil library into my worksheet and then make use of the code
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/fixing-dates-with-dateutil?u=76281980&t=93)** to fix this problem that I have. So let's jump back over to Excel. Here in Excel, you can see in cell A1 I'm importing the dateutil parser and I'm importing all of the code in that module. And then I have a little string here at the bottom of the cell that just reminds me what this code is doing. Alright, so what I'm going to do is down here in my result area, I'm going to create a Python cell, so there we go, and then I'm going to create a data frame to hold the dates that I want to convert. So I'll create a data frame variable, and then I'm going to just drag select these cells and then that gives me my data frame. And sure enough, there's my data frame. You can see that when I commit the code. Alright, let's go back into the cell and keep writing our code. So I need to get the contents of the first column of the data frame as a data series. So I'm going to write dates_col is equal to, and I'm going to get the first column from the data frame and this will allow me to work on the dates as if using a native Python list. Now I need to iterate over all the dates and convert them into Python date objects and then return that as a list. So I'm going to write result is equal to, and I'm going to use a list comprehension for this. So I'm going to call the parse function, which is again, it's part of the date util library that I've imported. So I'm going to write parse S for each string that is in the dates column,
>
> **[3:09](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/fixing-dates-with-dateutil?u=76281980&t=189)** in dates column. All right, so let's go ahead and commit that code. And you can see that when I run this code, the result that's being returned is now a list because I've put it inside these square brackets. So now I have a list of all the converted dates. So let's go ahead and convert that to an Excel value. And now you can see that all of my date strings have been converted into Excel dates in the same proper format. And I can apply any date format that I want using the format options. So for example, let's go ahead and select these right here. And I've got a date, but of course I can change the date, I can make it a short date, I can make it a long date. So now that it's in native Excel format, I can format it however I want. And what's cool is I can now perform date operations using native Excel functions. So let's do this. Let's calculate how many days until New Year's day of the following year using the Excel days function. So here in column D I'm going to write equals, and I'm going to use the built-in Excel function for days and I'm going to put in the 1st of January of 2025, and I'm going to use the value in B11 for that. Alright, so then I'll hit return and you can see that it calculates for 10. And let's just go ahead and drag select, use the little autofill drag select thingy, and now you can see that we are calculating the number of days until the next new year's day
>
> **[4:45](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/fixing-dates-with-dateutil?u=76281980&t=285)** for each one of the Excel dates that we've calculated. There we go. Easy solution using Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (15), [[Python (Programming Language)|Python]] (11), [[Data Structures]] (1)
> **CLI Commands:** python (11), make (4)
> **Code Identifiers:** dateutil_start (1), dates_col (1)
> **Tools:** anaconda (2)
> **Env Vars:** b11 (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Generate a random sequence](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/generate-a-random-sequence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/generate-a-random-sequence?u=76281980&t=0)** - [Instructor] Creating a random sample from a set of data is a common [[Data Science]] operation. And it's very easy to accomplish using [[Python (Programming Language)|Python]], together with [[Microsoft Excel|Excel]]. So here in my random underscore start example file from chapter three, I have a tab named BandsData, that contains information about a variety of musical groups, from different genres and years in which they were founded. And we saw this at a previous video earlier in the course. So what I'm going to do is I'm going to write some code to create different kinds of random samples from this data set using Python. So here in my first tab, you can see I've created a data frame. And the data frame is basically all of the bands in the BandsData tab, right? So I've got all of the bands data table, and I've got headers set to true, because my table has headers. So I've already created the data frame. And once I've done that, we can try operating on some random samples. So let's try something simple first. Let's select one random band from the entire list. So here in B5, I'm going to create a Python cell. And I'm going to write bands. And then I'm going to use the sample function, which is built into panda's data frames, to just select one random item. So when I run that, you can see that that gives me a data frame result. And let's expand that into a Excel data. And you can see that when I run that, we can see the selected band. In this case, it's the Beatles. And I can run it again. So let's just go ahead, and I'll just
>
> **[1:33](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/generate-a-random-sequence?u=76281980&t=93)** change the code and change it back. Recommit, and you can see them getting a random sample each time. Now of course, sometimes, you'll want to select multiple random items. So for our next example, let's choose 10 random bands, and put the result into B10. Now to do that, I just need to tell Python how many items I want to select. So here I'll create a Python cell. And this time I'll write bands.sample, and I'll pass in the number 10. All right, that gives me a data frame. And sure enough, you can see that it's now choosing 10 random bands from the entire list. Now, if you only want to sample a specific column within the data frame, you can use the sample function on that particular data series. So for our next example, all right, let's scroll down. So for our next sample, let's choose 10 random bands, but only use the band name. So I'll make a Python cell, and I'll write bands. And this time I'm going to, in square brackets, use the group column, and then I'll call sample on the column, and I'll choose the same 10 items. And you can see that that gives me a series. And I'll expand that. And now I'm getting 10 random items, but just the band name. Okay, so just one more example. Let's combine our sample function with the query function that we learned about earlier, to limit the dataset that we choose from. So, for example, suppose I want to choose
>
> **[3:07](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/generate-a-random-sequence?u=76281980&t=187)** five random bands, but only from specific genres. I'm going to limit the source data by first writing a query. So here in my cell I'll create a Python cell and I'll write bands, and I'll call it bands filt, because I'm going to filter the list. And I'm going to use the query function that we learned about a little bit earlier. And I'm going to query on the genre being equal to rock, or genre being equal to alternative rock.
>
> **[3:44](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/generate-a-random-sequence?u=76281980&t=224)** And that's a lowercase r, just to make sure that you're getting it correct. And then, once I've created my filtered list, I'll sample from that filtered set. So I'm going to write bands equals bands_filt.sample, and I'll just choose five this time. All right, so let's run that. There's my data frame. Convert that to Excel. And, you can see the results are being selected from only those two genres.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Microsoft Excel|Excel]] (3), [[Data Science]] (1)
> **CLI Commands:** python (7), make (2)
> **Cross-References:** previous video (1), earlier in (1)
> **Code Identifiers:** bands_filt (1)
> **Env Vars:** b10 (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Scatter plot with Seaborn](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/scatter-plot-with-seaborn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/scatter-plot-with-seaborn?u=76281980&t=0)** - [Instructor] In this example, we're going to use the Seaborn library to create a scatter plot. Seaborn is a data visualization library, and you can find more information about it at this link here. I'm going to click on the Gallery link on this page. And you can see in the Example Gallery that this is pretty comprehensive. There's a lot of different ways to visualize data using this library. Seaborn is one of the modules that is included in the [[Python (Programming Language)|Python]] Initialization in [[Microsoft Excel|Excel]]. So let's jump back over to Excel. And if I go to the Formulas tab and I click on the Initialization button, you can see that Seaborn is included right here. So Seaborn is imported as sns. So here in my workbook, I have two tabs. In the BandsData tab, I have a table that contains information about a variety of musical groups. Their name, the year they were founded, their genre, and how many members that they have. So let's use the Seaborn library to create a scatter plot that visualizes this data. Let's go back to the Plotting tab. You can see I've already created a DataFrame, and the DataFrame references the data in the bands table. And I'm going to set the Seaborn color theme to a white chart with a grid. So I'll start off by calling the set theme function on Seaborn, and we'll set the style to white grid. And then I'm going to use the Matplotlib library
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/scatter-plot-with-seaborn?u=76281980&t=94)** to create a figure and axis for the chart. Seaborne will be used to actually create the chart itself, but Matplotlib will give me some base stuff that I need. So I'm going to create a figure and an axis, and I'll use plt, that's the Matplotlib, and I'll call subplots and I'll make the figure size and I'll give it a 8 by 8 size. So to make the chart easier to read, I'm going to rotate the x-axis by 90 degrees. And then I'll make the grid lines in the chart thin so that they don't overwhelm the data. So on the axis I just created, I'm going to set the tick_params and the axis is going to be the x-axis and I'll set the rotation to be 90. And then the grid, I'll make the line width equal to 0.25. And then I just need to use the scatter plot function from the Seaborn library. So let's just call sns.scatterplot and the x is going to be the genre. The y-axis will be the group name, and the data is going to be the bands DataFrame that I just created. And then the ax parameter will be set to the axis I just created. Alright, so let's go ahead and commit that and we'll wait for Python to execute. Okay. And you can see that the result is a Python image. So I'll go ahead and convert this to an Excel value.
>
> **[3:10](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/scatter-plot-with-seaborn?u=76281980&t=190)** And there's my little teeny graph that's there in the cell. So I'm going to right-click and for Picture in Cell, I'll create the reference. And now you can see that I've got my scatter plot. Alright, let's go ahead and make that a bit smaller. Now this is a pretty good start, but my graph is only showing the band names along with their genres. We also have information about their members and the year that they were founded. So I want to incorporate that into the graph somehow. What I'm going to do is go back to my code and I'm going to add a couple of parameters to my scatter plot. So what I'm going to do is scroll down to where I make the plot. So I'm going to have the size of the circle in the plot represent how many members the band has. So I'll do that by writing size equals, and then I'll make that the members column in the DataFrame. And then the hue of the circle is going to be the year in which they were founded. So that's the year column in the DataFrame. So let's go ahead and commit that change. Okay, so now you can see that our graph is updated. I'll just put this back down there again. Alright, so now I have a legend up here in the upper right, it shows me the year and the years going from 1960 up to 2010. And we can see that the size of the circle increases with the number of band members. So if we scroll down, we can see here's the little one member bands, and then we've got some larger circles. And you can see that the color changes based upon the decade that the band was founded.
>
> **[4:43](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/scatter-plot-with-seaborn?u=76281980&t=283)** And we did all of that in what, six lines of Python code. That's pretty cool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[Microsoft Excel|Excel]] (3)
> **CLI Commands:** make (7), python (4), find (1)
> **UI Navigation:** click on (2), scroll down (2), go to (1), right-click (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (2)
> **Prerequisites:** initialization (2)
> **Code Identifiers:** tick_params (1)
> **Versions:** 0.25 (1)

#### [Create a Gantt chart](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/create-a-gantt-chart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/create-a-gantt-chart?u=76281980&t=0)** - [Instructor] [[Microsoft Excel|Excel]] has a lot of great chart types that it can create, but one of the ones that's missing and not built in is the Gantt chart. A Gantt chart is a horizontal bar chart that visually represents a project schedule over time. It's a pretty common project management tool that is often used for planning, scheduling, and monitoring the process of a project. So let's build one of these using Excel and [[Python (Programming Language)|Python]]. So here in my worksheet you can see that I have a table that represents a project I'm working on, and there are several milestones with associated dates. So I'm going to begin by making a data frame that represents the data in my project table, and we know how to do that already. So I'll make a Python cell here in B11, and then I'm going to write DF equals, and that's going to give me my data frame. And I'm going to select the data rows of the table but not the title part. So let's go ahead and commit that. And that gives me my data frame. Let's resize the formula bar a bit more to see some more code. Now, as I mentioned earlier, there's no built-in chart type for a Gantt chart. So I'm going to use the Matplotlib library in order to make the chart. So if we look at the Initialization tab in the formulas, we can see that matplotlib.pyplot is already included as PLT. So we can just go ahead and use it. Now, it's a bit beyond the scope of this course to go deep into all the features of Matplotlib, So I'm just going to demonstrate how to make the chart and then let you read up on the library's features
>
> **[1:34](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/create-a-gantt-chart?u=76281980&t=94)** at your own leisure. So I want the vertical or the y-axis to represent the steps in the project, and the x-axis to represent the dates. So first I have to create the chart figure and a single bar axis to represent the Gantt chart lines. So here my Python code will do that. Alright, fig and ax. And I'm going use the subplots function in Matplotlib to do this. Alright, and then I'm going to, on the axis, I'm going to set the y ticks to the range of the length of my data frame. And yeah, one more parentheses. Okay, so now I've got a chart that's going to be as big as the range I've got in my dates. Now I need to create a horizontal bar for each one of the tasks. I'm going to create a for loop that iterates over each element in the data frame. So I'll write for i in the range of the length of my data frame. And what I'm going to do is create a task. And task is going to be my data frame going to access the task column. and I'm going to index into that column to get the particular task in the loop. And then the length of that task, I'm going to access the end column
>
> **[3:13](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/create-a-gantt-chart?u=76281980&t=193)** at that index. And I'll subtract off the value of, oh, whoops, I have to close that bracket right there. There we go. So to get the length, I have to subtract the start from the end. So I'll subtract off the start value at that index. And then I'm going to create a horizontal bar for that task of that length. And then I'm going to specify that the left of the bar starts at the start value at that index. And I'm going to specify a color for the bar. And I'm going to say that the color is going to be, well, let's choose a color. Let's choose light coral. So then once I've done that, I just need to show the chart. So I'm going to call the show function on my plot. All right, so let's go ahead and commit that code. All right, that gives me an image, okay? So I'm going to go ahead and change that to an Excel value. And there's my little chart. Let's go ahead and create a reference. All right, and now you can see I've got my Gantt chart here in my Excel file. So now we've created a new chart type that Excel doesn't natively support, but you can see that there's some problems to fix, right? So first, notice that the x-axis is not the actual dates: it's a set of integer numbers.
>
> **[4:45](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/create-a-gantt-chart?u=76281980&t=285)** And that's because when we subtract, let's go up in the code here and take a closer look, when we subtract off the start from the end, we're going to get back an integer data type. So we have to fix that formatting. And also, I'd like to be able to set the labels for the axes of the chart, and I'd like to be able to incorporate the title of the project into the chart. So let's fix all of these issues. So first, let's add the labels to the x- and the y-axes. So I'm going to do that here. All right, let's call ax.set_xlabel. And we're going to make that dates. And then let's set the y label to task.
>
> **[5:37](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/create-a-gantt-chart?u=76281980&t=337)** And then let's set the chart title. So I'm going to use the Excel function here to reference the cell that contains the title so I can easily customize the label of my chart. So I'll write ax.set_title. Whoops. There we go, set_title. And I'm just going to click on this cell right here. That gives me Excel B3. All right, so let's go ahead and commit those changes. Okay, so you can see that the chart looks a little bit better, right? So if I change the value here in B3 to my work schedule, you can see that the title of the chart also updated. That's kind of nice. All right, so now let's fix the dates. I need to format these numbers as actual dates. So let's fix that. I'm going to go into the code, and let's go back up to the top. And I'm going to write import matplotlib.dates as,
>
> **[6:36](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/create-a-gantt-chart?u=76281980&t=396)** and I'll just import that as a short name that I can use called mdates. So now that I've imported the dates module, I can fix the way that those dates are being represented. So first, what I need to do is set the formatter of the x-axis to be a date formatter that I just imported. So I'm going to write ax.xaxis., and I'm going to call set_major_formatter. And my formatter is going to be, I'm going to reference the mdates module here, and I'm going to use the date formatter. And the date formatter is going to format my dates, and I'm going to pass it a character code called %D, uppercase D. So that's going to give me a date form writing. Well, you'll see it in a second. So when I commit this change, okay, so now you can see that we have actual dates down here on the x-axis, but we can do better. Let's rotate the labels a little bit to make them a little easier to read. And I'll do that down here, right before I show the plot. I'll write plt.xticks, and I'm going to set the rotation equal to minus 25 degrees. Alright, let's commit that change. Alright, so now you can see that we have a pretty nice looking Gantt chart in Excel all thanks to Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (8), [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** make (5), python (4)
> **Code Identifiers:** set_title (2), set_xlabel (1), set_major_formatter (1)
> **Env Vars:** b11 (1), plt (1)
> **UI Navigation:** select the (1), click on (1)
> **Definitions:** is a  (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Extract data with regular expressions](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/extract-data-with-regular-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/extract-data-with-regular-expressions?u=76281980&t=0)** - [Instructor] This example really demonstrates the power that [[Python (Programming Language)|Python]] brings to the [[Microsoft Excel|Excel]] environment. Anyone who's ever worked with data has probably encountered a situation where the information is not exactly in the perfect form where you can easily process it. So for this example, I have a set of strings that can contain North American phone numbers. And you can imagine this data came from any one of a number of sources, right? Some freeform input field or something like that. And what I want to do is extract the phone number from each string and then format it in a specific, consistent way. But there's two problems. First, you can see that the phone numbers are embedded inside random text strings, right? It's not just the regular phone number by itself. There's a text string, and the phone number is somewhere within it, either at the beginning or the end, or somewhere in the middle. And second, you can also see the phone numbers don't follow a predictable format. So this one here has a country code and uses dashes, right? This one uses periods with no country code. This one has the area code in parentheses with a space. This one has no spaces, just one dash. And in fact, it's got two phone numbers, not just one. This one here has no phone number at all. So the data is in a very unpredictable format. So this is exactly the kind of problem that a Python technology, well, it's not really a Python technology, but Python supports it, called regular expressions, are well suited to resolve. Now, it's beyond the scope of this course
>
> **[1:32](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/extract-data-with-regular-expressions?u=76281980&t=92)** to go into deep detail about how regular expressions work. Essentially, a regular expression, or a RegEx, as it's often called, enables you to define a pattern that can then be applied to pieces of text to see if the text contains instances of that pattern. So here in cell A1, I've imported the re Python module, which again, it's part of the standard Python library that's included in the Anaconda runtime environment that Excel has access to. And it contains the code I need to work with regular expressions. In cell A2, I have two Python functions. So let me scroll this area down a little bit so we can see what's happening. The extract_nums function takes a text string as an argument and then applies this regular expression pattern to it. Now, this pattern contains a set of codes that define various ways that North American phone numbers might be formatted. Each phone number that is found, and there might be more than one in each string is then passed up here to the format phone number function. That function takes a phone number in the raw format that was found in the original text, and then reformats it into a consistent representation, right? So let's try this out. What I'm going to do, let's make this a little bit smaller, Okay, what I'm going to do is create a dataframe to hold all of the text strings.
>
> **[3:08](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/extract-data-with-regular-expressions?u=76281980&t=188)** And I'm going to do that here. So I'll create a Python cell, and I'll write df =, and I'm just going to drag select my phone numbers. Okay, so now I have a dataframe. So once I have the dataframe in place, what I'm going to do... Actually, you know what? I'm going to move that dataframe over here. Let's move that dataframe to column C. There we go, okay, so now I have a dataframe that holds all of my raw text input. And I'm going to use the apply function that we learned about earlier in the course to apply the extract_nums function to each item in the dataframe. So I'll write num_df, I'll create a variable, so I'm going to create a subset of the dataframe that I'm using to hold my strings, and I'm going to operate on the first column, well, there's only one column, so it's a column index 0, and I'm going to apply my extract_nums logic to that column, and then I'm going to convert that column into a Python list. And we saw how to do this earlier in the course as well. So I'll write .to_list. And so when I run this, you can see... Oh, let me go ahead and extract to a value. So you can see, oh, let me move all this down. There we go, okay. So when I run this, you can see that each phone number is being detected in the source text and reformatted in my output column. Now, that example uses a dataframe,
>
> **[4:42](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/extract-data-with-regular-expressions?u=76281980&t=282)** but I can also just use Python code directly on individual cells. So let's copy and paste the example strings into another region. So I'm going to copy all of these guys here and let's paste them down here into B12. And now in the C12 cell, I'm just going to go ahead and call the extract_nums function directly with the cell value that I want to test. So I'm going to write = PY, and I'm going to write extract_nums. And in this case, I'm going to be using this cell and I'll commit that change. Okay, and there is the same result. And now I can just drag select and auto-fill the cells all the way down. And you can see that I'm getting the same result as when I use the dataframe. So just by using one of those built-in Python modules, I was able to solve a pretty thorny data extraction and formatting problem using, eh, about a dozen lines of Python code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[Microsoft Excel|Excel]] (2)
> **CLI Commands:** python (12), make (1)
> **Code Identifiers:** extract_nums (5), num_df (1), to_list (1)
> **Env Vars:** b12 (1), c12 (1)
> **Cross-References:** earlier in (2)
> **Tools:** anaconda (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-in-excel-getting-started-with-data-analysis/next-steps?u=76281980&t=0)** - [Joe] Thanks so much for watching this course. I hope you enjoyed learning along with me about the [[Python (Programming Language)|Python]] features in [[Microsoft Excel|Excel]]. Combining the power of Python with the features of Excel is sure to unlock whole new levels of productivity for people who work with data. There are plenty of resources available here in the online library for both Python and Excel to help you continually improve your skills in both. I'm really excited about the possibilities that this combination opens up, and I hope you are too. I'll see you again in another one of my courses soon. Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Excel|Excel]] (3)
> **CLI Commands:** python (3)
> **Speakers:** - [joe] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-in-excel-quick-start-4551222)

## Skills Covered

- Python (Programming Language)
- Data Analysis
- Microsoft Excel

## Path Context

### In [[Advance Your Python in Excel Skills]]
**1 of 7** | [[Python in Excel- Working with pandas DataFrames]] →

## Appears In

- [[Advance Your Python in Excel Skills]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Data Analysis and Visualization]] — Python (Programming Language), Data Analysis, Microsoft Excel
- [[Python in Excel for Financial Professionals]] — Python (Programming Language), Data Analysis, Microsoft Excel
- [[Complete Guide to Excel Statistics with Copilot]] — Data Analysis, Microsoft Excel
- [[Python Data Analysis (2020)]] — Python (Programming Language), Data Analysis
- [[Advanced Analysis Using Python in Excel Copilot]] — Python (Programming Language), Microsoft Excel

---

[↑ Back to top](#)