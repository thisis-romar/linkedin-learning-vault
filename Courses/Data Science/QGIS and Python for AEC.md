---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: qgis-and-python-for-aec
url: "https://www.linkedin.com/learning/qgis-and-python-for-aec"
duration_minutes: 138
duration: 2h 18m
level: Intermediate
updated: 7/30/2020
learners: 19120
skills:
  - Python (Programming Language)
  - AEC
  - Quantum GIS
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHm9q1H_lQ6Ug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1595962530536?e=2147483647&amp;v=beta&amp;t=LlCHhOnRDECiv4Fk8VdGq6p_KmJcm9CDpytSXq7bMJE"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in GIS]]'
prev_courses:
  - '[[InfraWorks and ArcGIS- AEC Collaboration]]'
next_courses:
  - '[[Foundations of Geographic Information Systems (GIS)]]'
path_nav: '[{"path":"Advance Your Skills in GIS","position":5,"total":9,"prev":"InfraWorks and ArcGIS- AEC Collaboration","next":"Foundations of Geographic Information Systems (GIS)"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/python-programming-language
  - skill/aec
  - skill/quantum-gis
status: not-started
created: 2026-04-21
---

![QGIS and Python for AEC](https://media.licdn.com/dms/image/v2/C560DAQHm9q1H_lQ6Ug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1595962530536?e=2147483647&amp;v=beta&amp;t=LlCHhOnRDECiv4Fk8VdGq6p_KmJcm9CDpytSXq7bMJE)

# QGIS and Python for AEC

> QGIS is an open-source tool for quickly visualizing and analyzing geospatial data for architecture, engineering, and construction (AEC). One way to make QGIS even more versatile and efficient is to add the power of Python. In this course, CAD and GIS consultant Gordon Luckett shows how to use Python scripting to automate and augment the QGIS toolset. It starts with an overview of Python programmin

> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec) | 2h 18m | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Gordon Luckett]]

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- AEC
- Quantum GIS

## Table of Contents

### Introduction

#### AEC with Python and QGIS
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/aec-with-python-and-qgis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/aec-with-python-and-qgis?u=76281980&t=0)** - [Gordon] Can AEC data from Revit, AutoCAD, and tool sets such as electrical and map 3D be brought into QGIS?
>
> **[0:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/aec-with-python-and-qgis?u=76281980&t=8)** Can you automate these processes?
>
> **[0:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/aec-with-python-and-qgis?u=76281980&t=11)** With QGIS in Python, you definitely can.
>
> **[0:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/aec-with-python-and-qgis?u=76281980&t=14)** If you can access your DWG and DXF files from your project, QGIS can automate the analysis and import with Python.
>
> **[0:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/aec-with-python-and-qgis?u=76281980&t=22)** I'm Gordon Luckett, CAD and GIS consultant and founder of Arrow Geomatics Inc.
>
> **[0:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/aec-with-python-and-qgis?u=76281980&t=27)** and I've been working with open source and commercial GIS programs for over 20 years.
>
> **[0:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/aec-with-python-and-qgis?u=76281980&t=32)** So, why not download QGIS and jump into Python scripting right away?
>
> **[0:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/aec-with-python-and-qgis?u=76281980&t=37)** Join me now in my LinkedIn learning course on QGIS Python for AEC.

> [!info]- Semantic Content
>
> **Env Vars:** qgis (5), aec (2), gis (2), dwg (1), dxf (1)
> **CLI Commands:** python (4)
> **Analogies:** such as (1)
> **Speakers:** - [gordon] (1)


### 1. Beginning Python

#### What is Python?
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=0)** - [Instructor] In this video, we're going to look at what is Python, and how does it relate to QGIS and AEC?
>
> **[0:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=8)** Well, first of all, Python is a way to create macros and plugins, especially within QGIS.
>
> **[0:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=14)** It's a script language for automating tasks, such as loading data, running analysis, even calculating areas.
>
> **[0:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=22)** Python does not get compiled. It stays as a text file.
>
> **[0:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=26)** You can open it up in Notepad.
>
> **[0:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=27)** For example, myPython.py is a text file that you can open up.
>
> **[0:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=32)** It never gets compiled. It's always readable.
>
> **[0:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=35)** It's very unique in that it uses spaces to understand looping and logic and if statements.
>
> **[0:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=40)** It uses spaces and tabs.
>
> **[0:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=42)** And that's how you know if something is inside of a logic loop or not, with a space.
>
> **[0:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=48)** Now Python is usually bundled with QGIS.
>
> **[0:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=51)** That means you can run Python after QGIS is installed.
>
> **[0:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=55)** Sometimes it's good to review your packages that are being installed when you use the advanced install with QGIS.
>
> **[1:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=63)** So don't install the standalone QGIS package if you're planning to use Python.
>
> **[1:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=68)** Use the advanced one, and make sure that all the Python libraries are being installed when you do that.
>
> **[1:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=74)** Here's some example of Python code, theMessage, that's variable, equals "Hello world."
>
> **[1:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=80)** And then if we want to print that message to the screen, you put print, two round parenthesis, and the message, and the Hello World appears.
>
> **[1:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=88)** Or if you want to calculate kilometers to miles, you can have a variable called kilometers, say 100.
>
> **[1:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=94)** The factor can equal 0.62137, and the miles would be that kilometers times the factor.
>
> **[1:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=102)** And then you print that miles to the screen, and you'll see 62.14 in that case, miles.
>
> **[1:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=109)** Python also has functions.
>
> **[1:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=111)** These functions, you can call it any time over and over again.
>
> **[1:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=115)** That's the nice thing about functions.
>
> **[1:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=116)** You can call a function many times, and you can call it anywhere you want.
>
> **[2:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=121)** So first of all, how do you define a function?
>
> **[2:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=124)** Well, to define a function, you put that little def, D-E-F, and then the name of the function.
>
> **[2:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=129)** In this case, I'm calling it getMiles.
>
> **[2:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=131)** And you need to pass something to getMiles.
>
> **[2:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=134)** In this case, I'm passing it the kilometers.
>
> **[2:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=137)** Then I create a factor of 0.62137, and then I calculate the miles.
>
> **[2:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=142)** From the kilometers, someone passes the function, multiply it by the factor.
>
> **[2:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=146)** And then I print the miles to the screen.
>
> **[2:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=149)** For example, I can now run getMiles by saying getMiles pass 100.
>
> **[2:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=155)** Now you notice that the getMiles 100 is now aligned with the def.
>
> **[2:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=161)** That means that function is over.
>
> **[2:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=163)** The function is defined by everything after the colon at the top and everything that's indented.
>
> **[2:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=170)** Once the indenting stops, that's the end of the function.
>
> **[2:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=173)** That's a really unique thing inside of Python.
>
> **[2:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=176)** Now for looping, it's the same thing.
>
> **[2:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=179)** So for example, I'm saying loop over x from a range of 10 to 20.
>
> **[3:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=185)** Now when I say that, loop over x from a range of 10 to 20, so x becomes 10, 11, 12, and so on.
>
> **[3:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=192)** I have a colon at the end.
>
> **[3:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=194)** And then everything indented after the colon are inside that loop.
>
> **[3:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=198)** But then I have another line in there that says now if x is greater than 16, do something.
>
> **[3:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=203)** So then I have another colon and another indent.
>
> **[3:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=207)** So therefore, everything after the if statement is indented again.
>
> **[3:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=211)** So therefore, we have two indents that represent one; the loop, and two; the if statement.
>
> **[3:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=218)** So in the end, as I loop over from 10 to 19, that's how that works, the 19, if x happens to be greater than 16, it'll print it to the screen. And guess what happens?
>
> **[3:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=228)** I get 17, 18, and 19 in this.
>
> **[3:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=231)** So that's how unique Python is with these indents.
>
> **[3:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=235)** And for the functions, you can see everything after the colon is indented there.
>
> **[4:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=240)** Or in the for loop or if statements, everything after the colon are indented there as well.
>
> **[4:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=245)** That's just very unique with Python.
>
> **[4:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=248)** Now how do I use Python with QGIS?
>
> **[4:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=251)** Well, here's a little gotcha.
>
> **[4:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=252)** And I want to talk about this right now.
>
> **[4:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=254)** When you first install QGIS, you may want to check this out.
>
> **[4:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=258)** This is in your system properties, and it's called an environment variable.
>
> **[4:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=264)** And it's a system variable that gets installed when you first install QGIS, it's the Python path.
>
> **[4:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=270)** This Python path is a list of directories to look for Python code and libraries.
>
> **[4:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=276)** Now normally you'd see things like the first two lines in the environment variable such as the Python37 and the Python37 lib, those are the two first ones.
>
> **[4:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=287)** But I had to actually add manually when I first installed QGIS, I had to add the apps QGIS Python, and I had to add the apps QGIS Python plugins.
>
> **[4:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=299)** Those two didn't exist.
>
> **[5:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=301)** In fact, I don't think I even had the site packages.
>
> **[5:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=304)** So I had to put the Python37 lib site packages.
>
> **[5:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=307)** Be very careful here that your environment variables are all populated.
>
> **[5:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=311)** And check this out before you begin this course that your environment variables have been set up after installing QGIS.
>
> **[5:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=320)** Now remember, these are all set up on Windows, and it may be very different on your Mac or your Linux box.
>
> **[5:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=327)** Now you can definitely test if this is all set up correctly.
>
> **[5:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=330)** All you have to do is run a command line, and type the word Python.
>
> **[5:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=334)** That should fire up Python right away.
>
> **[5:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=336)** So for example, I open up a command prompt, the CMD inside of Windows, and I type the word Python.
>
> **[5:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=342)** Right away it says I'm using Python 3.7.0.
>
> **[5:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=346)** And it tells me things like you can type help, or copyright, and so on.
>
> **[5:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=351)** Now the real test here is one line.
>
> **[5:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=354)** You just have to type import qgis.core.
>
> **[5:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=359)** If you can type that and you get no errors, then everything is set up well.
>
> **[6:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=365)** That means the QGIS core libraries are now available to that version of Python. You're good to go.
>
> **[6:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=372)** And this is a great test to make sure Python is up and running.
>
> **[6:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=376)** So you saw how to use basic Python code, but now we're just looking at some of the setup to make sure we can do more advanced Python, where we actually talk to QGIS.
>
> **[6:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=387)** What about AEC; architecture, engineering, and construction?
>
> **[6:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=391)** Now normally, those fields use Revit files, and DWGs, and civil drawings.
>
> **[6:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=397)** But for QGIS, we're going to really focus on DWG and DXF.
>
> **[6:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=403)** In fact, DXF is the way to get data in and out of QGIS right now.
>
> **[6:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=408)** We will have a video on importing DWGs.
>
> **[6:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=410)** But from a Python perspective, DXF is where it's at.
>
> **[6:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=415)** So we're going to focus on DWG and DXF import and export.
>
> **[6:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=419)** But we're going to learn about adding layers and working with layer definitions with Python with SHP files first.
>
> **[7:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=426)** So don't get discouraged if some of the earlier videos saw us using Python and SHP data.
>
> **[7:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=432)** We'll eventually get to the DWG and DXF soon.
>
> **[7:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=435)** And all that knowledge you learn about loading SHP files will work with your DWG, DXF.
>
> **[7:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=442)** So PyQGIS is ready to go.
>
> **[7:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/what-is-python?u=76281980&t=445)** And often you'll see Py for Python, QGIS referred to because they're bundled together.

> [!info]- Semantic Content
>
> **Env Vars:** qgis (18), dxf (6), dwg (4), shp (3), aec (2)
> **CLI Commands:** python (30), make (3)
> **Code Keywords:** function (8), case, (3), pass (2), def, (1), def. (1)
> **Prerequisites:** install (4), set up (4), before you begin (1), setup (1)
> **Code Identifiers:** getmiles (5), mypython (1), themessage (1)
> **Analogies:** for example (4), such as (2)
> **Versions:** 0.62137 (2), 62.14 (1), python 3 (1), 7.0 (1)
> **Definitions:** is a  (4), means that (1)

#### Using the Python console
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=0)** - [Instructor] In this video, we're going to look at the Python console inside of QGIS.
>
> **[0:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=5)** We're also going to run a few Python scripts just to try out the console.
>
> **[0:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=10)** First, we have to figure out how to turn on the console inside the QGIS interface.
>
> **[0:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=15)** There's a number of ways of doing it.
>
> **[0:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=17)** One, under plugins, you can choose Python console.
>
> **[0:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=21)** You can also toggle it on and off.
>
> **[0:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=24)** The other way to do it is using some of the icons.
>
> **[0:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=27)** In the menu, you can go Python console and toggle that on and off, or you can hold down the Control, the Alt and the P key, and that will turn the console on and off.
>
> **[0:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=41)** Next, let's add some data so we can play with it using Python.
>
> **[0:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=45)** So inside of our Exercise Files, 1 Beginning Python, DATA, let's drag and drop the BUILDINGS.shp file into our map.
>
> **[0:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=57)** The first thing you'll see is what sort of transformation or coordinate system we're going to use.
>
> **[1:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=62)** We're definitely going to choose the UTM zone 10 NAD83.
>
> **[1:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=68)** And there we are.
>
> **[1:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=70)** So you can see in the bottom corner, it's actually EPSG 26910.
>
> **[1:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=77)** So that's the UTM zone we're in.
>
> **[1:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=78)** So if I zoom in, you can see that we have buildings, there they are.
>
> **[1:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=83)** If I use the identify tool, I'll pick on one of the buildings and you can see that it has data such as type, number of floors, height and so on.
>
> **[1:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=91)** So I'll close the identify results.
>
> **[1:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=94)** And next we'll look at the Python console itself.
>
> **[1:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=98)** Before we do that, make sure that the buildings are highlighted, so that's the current layer that we're going to be using.
>
> **[1:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=104)** And what we're going to do is turn on the active layer or get the active layer using Python.
>
> **[1:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=110)** So we'll say layer, so this'll be a variable.
>
> **[1:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=113)** So that we'll just make up a variable, we don't have to dimension it as a string or anything like that in Python, I can just say this layer equals something.
>
> **[2:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=120)** So I'm going to capture those buildings as a variable called layer and from the interface, so iface, then I hit the period and that way, it gives me all the auto-complete of all the tools the iface has.
>
> **[2:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=136)** So the interface, so the one I actually want is activeLayer so I'll start typing again and you'll see activeLayer.
>
> **[2:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=146)** I don't even have to finish typing, I can actually just pick it in the drop down and activeLayer.
>
> **[2:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=151)** And then I can go round bracket, round bracket.
>
> **[2:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=155)** So I hit Enter.
>
> **[2:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=156)** So now you've seen that what I've typed down below next to those three greater than signs, I hit Enter and it appeared in the Python console, so this is my history in the top here.
>
> **[2:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=167)** So the bottom is the active area.
>
> **[2:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=169)** The upper area is the console showing what I've just typed.
>
> **[2:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=172)** It'll put the three greater than signs or chevrons next to what I've just entered.
>
> **[2:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=177)** You'll see those three there and then you'll see layer equals iface activeLayer.
>
> **[3:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=182)** But now that we have the layer, what can we do with it?
>
> **[3:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=186)** Well, let's make sure it worked properly.
>
> **[3:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=188)** Now, we didn't get an error so I assume it worked well, but let's just test it.
>
> **[3:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=192)** Let's get the name of that layer and make sure it's correct.
>
> **[3:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=195)** So if I go layer.name and again with the two round brackets and I hit Enter, so now we see the three greater than sides, the three chevrons layer.name, that's what I typed and without any sort of chevron or anything around it, you'll see the word buildings with a single quote around it.
>
> **[3:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=216)** So that is actually the name of the layer.
>
> **[3:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=218)** Yeah, it matches what's in my layers over here.
>
> **[3:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=220)** So you'll look in the layers area, you'll see buildings and you'll see in my Python console, buildings there as well.
>
> **[3:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=227)** Wasn't that great? So I can do that.
>
> **[3:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=229)** I can use the interface for other things.
>
> **[3:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=231)** For example, I can show the attribute table for this particular layer.
>
> **[3:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=235)** So if I go iface, so this iface is pretty handy and this time I'm going to say show.
>
> **[4:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=241)** Now there's a lot of shows popping up, but the one I want to do is show the attribute table.
>
> **[4:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=245)** So I'll go A, there it is, attribute table.
>
> **[4:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=249)** Now here's the interesting thing about Python, especially within the QGIS project that you'll see the iface is there and then because the show attribute table are basically three words squished together, you'll notice the first word show has a lower case S but then the A in attribute is upper case and the T in table is uppercase.
>
> **[4:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=270)** So this style is called camel case.
>
> **[4:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=274)** If you look above where it says activeLayer we did earlier where we said iface.activeLayer, the L is big, again, that's called camel case 'cause it's got a humpback like a camel because the middle words are upper case.
>
> **[4:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=289)** So now we have iface.showAttributeTable, show attribute table of what?
>
> **[4:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=294)** I have to put the layer that we captured.
>
> **[4:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=296)** And we know that the layer from above, there's buildings so basically what we're doing is saying in the interface, show the attribute table of buildings, so if I do that and I hit Enter, sure enough, there's the attribute table of all the buildings that we want to see.
>
> **[5:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=313)** So I'll close that up and now the next step would be to do something else like iface and maybe show the layer properties.
>
> **[5:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=324)** See again, it's camel case showLayerProperties, and what properties do you want to see of the current layer that we're looking at?
>
> **[5:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=333)** And I hit Enter and sure enough, I can change the colors.
>
> **[5:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=337)** So for example, I can do any color I want, hit OK, okay?
>
> **[5:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=343)** And I've turned it blue.
>
> **[5:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=344)** So I've used Python to not only get the active layer, which is buildings, I can do things like show the attributes, get its name and even change the properties such as the layer.
>
> **[5:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=355)** So the Python console is quite powerful, I can do all that sort of stuff using Python.
>
> **[6:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=360)** Now, if I want to clear this out, I can just hit the clear console, okay?
>
> **[6:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=366)** And I can run a command, now I don't have any commands to run, it's the same as me hitting Enter.
>
> **[6:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=372)** Now, there are some properties I can do such as show editor, and you can actually have a text file with all these pre-typed in which is great, which is part of having scripts, you can have pre-typed Python already to go so I'll just close that.
>
> **[6:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=387)** So toggle that on and off.
>
> **[6:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=389)** So we can actually load Pythons into their current session and actually rather than having to manually type in all this Python, we can load it when we want to.
>
> **[6:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=397)** There's other properties where the auto-complete can use all sorts of things such as the APIs.
>
> **[6:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=404)** So load preloaded APIs so that's great.
>
> **[6:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=407)** We can have all sorts of font colors if you don't like how big the font is down below, you can change the color and the console itself, you can have the auto-completion threshold meaning two characters so you have to start typing at least two things before it starts auto-complete because otherwise it gets really annoying, you type A and something fills in so two is pretty good.
>
> **[7:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=424)** In fact, if you find it too annoying with two characters, you can increase it to three or four, whatever you'd like, or even turn off auto-complete altogether.
>
> **[7:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=431)** That's some of the settings and there's also the help tools here that you can launch and it'll open up a browser and you could look at some of the help.
>
> **[7:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=438)** So with the Python console, you hit the Help button, you get all this active online QGIS help.
>
> **[7:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=445)** Okay, let's go back.
>
> **[7:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-python-console?u=76281980&t=446)** So now you've seen the Python console, how to toggle it on and off in many different ways, plugins with the menu button or holding down Control + Alt + P and you've seen all sorts of tools that are available within Python to control our interface and even to look at some of the layers.

> [!info]- Semantic Content
>
> **CLI Commands:** python (20), make (4), find (1)
> **Code Keywords:** interface (6), let (6), case. (2), type, (1)
> **Env Vars:** qgis (4), utm (2), data (1), buildings (1), nad83 (1)
> **Code Identifiers:** activelayer (6), showattributetable (1), showlayerproperties (1)
> **UI Navigation:** toggle (4), in the menu (1), drag and drop (1)
> **Analogies:** such as (4), for example (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is called (1)

#### Creating your first Python script
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=0)** - [Instructor] In this video, we're going to automate some simple tasks using Python.
>
> **[0:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=5)** First, we'll do it manually.
>
> **[0:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=7)** When I start a brand new project, I usually set the coordinate system.
>
> **[0:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=10)** In this case, it's going to be UTM zone 10 NAD83.
>
> **[0:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=14)** So I picked on the coordinate system in the bottom corner, and I've already searched for it in the past, but if you're looking for it, can always type utm zone 10, and it will come up, or if you hit search, it'll come up.
>
> **[0:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=28)** But what we're looking for is the authority code EPSG:26910.
>
> **[0:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=35)** So, that's good to remember, that UTM zone 10 meters, NAD83 is that.
>
> **[0:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=41)** Now, you may be working in a different coordinate system, a different part of the planet, but this data that we're working with is in this area, of western Canada and the U.S., it's UTM zone 10, so we're going to use that.
>
> **[0:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=53)** So, I'm going to click OK.
>
> **[0:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=54)** And you'll see in the bottom corner that our coordinate system is now 26910.
>
> **[1:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=61)** It says use the ballpark coordinate system conversion if there happen to be any data in there, and that's fine, we'll close that.
>
> **[1:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=67)** The next we want to do is drag and drop in some data, so I'm actually going to bring in the roads center line shape, so I'll drag that in.
>
> **[1:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=76)** And there it appears, and it picks it a random color, so maybe I'll change it to black, so I'll just double-click on that layer and change the color to black.
>
> **[1:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=83)** So, we'll do that, we'll set it right down to black.
>
> **[1:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=86)** There we go!
>
> **[1:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=88)** Hit OK.
>
> **[1:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=89)** Apply.
>
> **[1:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=90)** And now we've got our coordinate system for our current project in 26910, and we have our road center lines, and they're black.
>
> **[1:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=98)** Now, how do we do this all through script?
>
> **[1:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=102)** So, let's just discard this project, and we'll start a brand new one.
>
> **[1:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=108)** You can see the EPSG is 4326, that's just lat and long, and what we're going to do is we're going to switch this using code.
>
> **[1:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=115)** So first of all, we want to use the Python dialogue box here.
>
> **[2:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=120)** Okay.
>
> **[2:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=121)** So, we want to set the project coordinate system.
>
> **[2:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=125)** So, there is a command inside of Python, and we're going to do this, and we're going to save it as we go.
>
> **[2:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=130)** So, what we're going to do is we're going to open up the Python console on the side, and the very first thing is we're going to use this console, so I'm going to move that over a little bit.
>
> **[2:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=142)** And we're going to try out the code in the console first, and then we're going to copy and paste it into this document so that we can do it again, and again.
>
> **[2:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=150)** So, the very first thing in my console is, and I'm just going to move a few things over so you can see a little better.
>
> **[2:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=157)** So, remember we're in a blank, brand new project, the coordinate system isn't even set, we haven't added any data, so the very first thing I want to do is add the coordinate system, so let's do that.
>
> **[2:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=171)** So, the first thing we do is we say QGISProject.
>
> **[2:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=176)** There we go, QGISProject, that's what we want to do.
>
> **[3:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=180)** We'll put .
>
> **[3:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=182)** and we're going to just take the current instance, you'll see right here there's instance, yeah instance.
>
> **[3:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=188)** We'll do that, put two round brackets, And then we're going to use a code called setCRS, so use that function.
>
> **[3:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=197)** And then we say what coordinate system.
>
> **[3:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=199)** Well, it's a QGIS coordinate system, so I'm going to go QgisCoordinateReferenceSystem,
>
> **[3:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=212)** and what was the number?
>
> **[3:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=214)** The number is 26910.
>
> **[3:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=217)** That's that UTM zone 10 NAD83, so there we are.
>
> **[3:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=222)** So now, that's the line, right there.
>
> **[3:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=224)** So, we save the QGIS project of this particular instance, so the current one right now, set the CRS, or coordinate system, using the QGIS coordinate references some number 26910.
>
> **[3:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=235)** So, when I hit Enter right now, watch what happens.
>
> **[3:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=237)** Oh, keep an eye on this in the bottom corner.
>
> **[3:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=239)** Right now it's set for 4326, once I hit Enter, you'll see the EPSG is now 26910.
>
> **[4:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=248)** How about that? It's been changed.
>
> **[4:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=250)** So, what I'm going to do is I'm just going to copy that line, not those little greater than signs, but just everything else.
>
> **[4:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=255)** We'll go to right-click and Copy.
>
> **[4:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=257)** And I'm going to paste that right into this new project over here.
>
> **[4:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=262)** So, we have a brand new project, I put my cursor at the end, and hit Enter.
>
> **[4:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=266)** So before I go any further, I'm just going to save this.
>
> **[4:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=270)** And we put it on the Desktop, and we'll just call it load_layers.py.
>
> **[4:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=278)** And I've done this one already, so it said overwrite, but basically that's what you're going to have.
>
> **[4:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=282)** So, it says correctly saved, so we basically have a py, py is a Python script file.
>
> **[4:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=288)** Whenever you see a .py, that means there's Python inside of it.
>
> **[4:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=291)** These are text files, you can read them, open 'em up in Notepad if you want.
>
> **[4:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=295)** But we have this little window here inside of QGIS where we can edit and look at it.
>
> **[4:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=299)** So, we're going to do the same thing again, we're going to bring in that layer called CENTERLINE.
>
> **[5:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=305)** So, these ROAD_CENTERLINES shape.
>
> **[5:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=308)** So we want to add this layer right here, ROAD_CENTERLINES.shp.
>
> **[5:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=313)** Okay.
>
> **[5:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=315)** So, here's what we're going to do, first we need to make a variable, we'll just call it layer.
>
> **[5:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=320)** And we'll say that layer equals interface, so the current interface.
>
> **[5:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=325)** And we're going to add a vector layer.
>
> **[5:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=330)** That's a nice function that we can use.
>
> **[5:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=332)** And the path will be depending on where you installed your data sets, mine happens to be on the desktop.
>
> **[5:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=338)** So, I'm going to go c:, and I'll go \\, so we're going to use double backslashes for all our slashes, and the reason we do that is just because it's a way of escaping them, because otherwise they trigger all sorts of other kind of code and that sort of thing, because they become escape characters, so what we want to do is make sure we have double backslashes so it's treated as a single, that's just a little trick, especially when you're doing code like this.
>
> **[6:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=363)** So, make sure double backslashes for filenames, it's under my user, which is Gordon Luckett, and then it's actually \\ on the Desktop.
>
> **[6:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=374)** And it's under Exercise Files, so it's kind of long, Exercise Files, \\ again.
>
> **[6:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=382)** Oh, I forgot a double backslash, let's go back and make sure it's double right there.
>
> **[6:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=386)** Okay.
>
> **[6:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=387)** Exercise Files, and it's under 1 Beginning Python,
>
> **[6:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=398)** and \\ again.
>
> **[6:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=400)** And data.
>
> **[6:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=402)** Okay, now what was the name of the file?
>
> **[6:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=405)** It was called ROAD_CENTERLINES, so we'll make sure that's in there.
>
> **[6:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=410)** ROAD_CENTERLINES.shp" let's just make sure that's true.
>
> **[6:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=418)** ROAD_CENTERLINES.shp, yeah got that correct, that's the right path.
>
> **[7:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=423)** I could have copied and paste the path, but we just typed it in for this case just so you know what it is.
>
> **[7:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=428)** Okay, the next thing we need to add is what it's going to be called, and we're going to just put in quotes, we're going to just call it Roads.
>
> **[7:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=435)** Make sure it's showing up, yeah there's Roads, in case you can see it.
>
> **[7:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=438)** We're adding a vector layer, that's the path where it is.
>
> **[7:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=442)** We're going to call that layer, it's going to show up under layers called Roads.
>
> **[7:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=445)** And the inits, we're going to use OGR, because OGR is the tool used for adding shape files, because these are shape files.
>
> **[7:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=454)** And we'll be looking at other files because this isn't a AEC, so Architectural Electrical and Civil.
>
> **[7:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=460)** We're going to be looking at different types of data such as DWGs later on.
>
> **[7:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=465)** But right now I'm just using some basic shape files to get us started with Python.
>
> **[7:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=469)** But we're going to move into DWGs, because that's usually what you do within an architectural, and that sort of thing.
>
> **[7:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=474)** But right now we're using the shape files, so yes, we've got the path as shape, the name of it's going to show up in the layers, and that is OGR.
>
> **[8:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=481)** And all I have to do now is hit Enter and it should appear.
>
> **[8:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=487)** There we go!
>
> **[8:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=488)** There's the roads for CENTERLINE right there.
>
> **[8:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=489)** So, what I'm going to do is I'm going to copy again that whole long line that I just typed in, meticulously I might add, 'cause it was quite a long path.
>
> **[8:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=498)** So, we'll put it right here.
>
> **[8:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=499)** So, now we've got two lines.
>
> **[8:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=501)** We've got the QGIS setting the coordinate system, and then we've got this layer right here that we've added.
>
> **[8:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=508)** Okay, so I'll make sure I put Enter.
>
> **[8:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=510)** And remember to hit the save button so the load_layers.py is on your desktop, it's saved.
>
> **[8:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=518)** And we've got two things.
>
> **[8:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=519)** The third thing I want to do is take that ugly orange color and change this back to black.
>
> **[8:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=525)** So, those are the three things we want to do.
>
> **[8:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=527)** So, we have this layer, but I want to change it to black.
>
> **[8:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=532)** So first of all, I've got to get the symbol, so what I'm going to do is I'm just going to say layer, which is the name of the layer, and we're going to go renderer.
>
> **[9:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=541)** The renderer is basically what QGIS uses to make whatever color, or symbol or whatever, of that particular layer.
>
> **[9:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=549)** So, we're going to take the layer in its renderer, and however it's rendered, like in this case it's that ugly orange color, you can see that, and we're going to get the symbol of that particular layer.
>
> **[9:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=560)** And then we're going to set the color of it.
>
> **[9:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=562)** In this case we're going to set it to a QColor, and we're going to call it black.
>
> **[9:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=570)** Just like that.
>
> **[9:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=572)** And there we are.
>
> **[9:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=573)** So, if I hit Enter at this point, that layer should turn black.
>
> **[9:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=578)** Oh, it didn't happen.
>
> **[9:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=580)** Guess what we have to do?
>
> **[9:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=581)** We have to trigger a repaint, that means basically refresh.
>
> **[9:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=586)** So, you'll notice the legend changed, but not the map itself.
>
> **[9:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=590)** So, one last thing to do, what we're going to do is we're going to tell this layer to refresh, or repaint.
>
> **[9:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=596)** So, I'm going to say trigger a repaint, not point, paint.
>
> **[10:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=602)** And again, we'll put that in there and hit Enter.
>
> **[10:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=606)** Aha!
>
> **[10:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=607)** So, now we've got a black layer and we repainted it.
>
> **[10:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=611)** It used to be that ugly orange color.
>
> **[10:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=613)** So, I'm going to take the first line, put it in right here, and then we'll get that repaint line and put it right below.
>
> **[10:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=623)** Now, you notice that's grayed out, as soon as I hit save, it's now a dark color, so now we have load_layers.py.
>
> **[10:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=631)** Now, we did it all manually, we did it through the Python console, so we have that load_layers.
>
> **[10:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=636)** So, let's try running this all the easy way.
>
> **[10:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=641)** So, what I'm going to do is I'm going to clear my Python console first of all.
>
> **[10:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=644)** And then I'm going to start a brand new project.
>
> **[10:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=647)** I'm going to discard whatever we're working on.
>
> **[10:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=650)** So again, it's reset, so although I have my Python console open, I'll just toggle that on and off to show you.
>
> **[10:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=658)** But you'll see the coordinate system is still at the bottom 4326.
>
> **[11:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=661)** I'll put the Python console.
>
> **[11:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=663)** But look what's held in memory, I didn't have to go and open it up.
>
> **[11:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=666)** Now, I could go browse to my desktop and grab the load_layers.py on my desktop, but it's already there.
>
> **[11:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=672)** This is great.
>
> **[11:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=673)** So, either I can start a new project and open this py, or if you notice, if I haven't closed out of QGIS, it's still sitting there, which is great.
>
> **[11:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=681)** So now if I want to use it, I just hit this Run Script.
>
> **[11:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=684)** Now, watch what happens when I run the script.
>
> **[11:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=688)** Not only does it add the new layer, not only does it name it what I want and set the coordinate system, it repaints it to black.
>
> **[11:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=695)** So, we've got a EPSG 26910, black layer, and we've got that layer added.
>
> **[11:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=701)** And you can do this for multiple layers.
>
> **[11:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=703)** This one layer, this add vector layer, we could copy and paste that and basically have a script that'll load all our basic layers.
>
> **[11:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=710)** Now, what use is a load_layers Python?
>
> **[11:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=713)** Well this is great, because what happens is you could set the coordinate system of any particular brand new project you're working on, and add some base layers that you always use.
>
> **[12:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=721)** Maybe the city outline, or a project outline of whatever you're working on.
>
> **[12:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=724)** So, if you have a project where you're working on a building site, or you're working on a particular neighborhood, you could have the outline of that and some of the roads, and that sort of thing, so that way every time you start a new project, you could have the coordinate system preset, all the layers that you wanted, now you can set the color, and have all this code at your finger tips.
>
> **[12:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=743)** So, you've seen from the Python console, copying and pasting as a Python file that's now on my desktop, and I can use it anytime I want.
>
> **[12:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/creating-your-first-python-script?u=76281980&t=752)** And now I've got this ability to reuse code over and over again, which is an extremely powerful tool within QGIS.

> [!info]- Semantic Content
>
> **Env Vars:** qgis (8), road_centerlines (5), utm (4), epsg (4), nad83 (3)
> **CLI Commands:** python (15), make (9)
> **Code Keywords:** let (5), function (2), this. (2), interface (2), case, (1)
> **Code Identifiers:** load_layers (6), setcrs (1)
> **UI Navigation:** drag and drop (1), double-click (1), go to (1), right-click (1), toggle (1)
> **File Paths:** load_layers.py (4)
> **Definitions:** is a  (3), is an  (1)
> **Exercise Files:** exercise files (3)

#### Saving your Python scripts
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=0)** - [Instructor] Next, we're going to record the process of buffering by capturing the Python that's created when you do that process.
>
> **[0:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=7)** So first we're going to create a brand new project.
>
> **[0:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=10)** Then we're going to drag and drop the road center lines from our desktop into our current session.
>
> **[0:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=16)** It's going to ask us what transformation to do.
>
> **[0:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=18)** We're going to pick the first one, UTM zone 10, click OK.
>
> **[0:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=22)** And there's our road center lines.
>
> **[0:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=24)** You'll notice in the bottom right corner, it says EPSG 26910.
>
> **[0:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=29)** That's the UTM coordinate system we're going to be using.
>
> **[0:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=33)** So first we need to do is go to the processing, toolbox, and we're going to search for buffer.
>
> **[0:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=43)** There, and under vector geometry, we double-click on buffer, and we're going to buffer these road center lines by three meters.
>
> **[0:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=51)** So I'll just change that to three meters.
>
> **[0:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=53)** I'll leave the segments the same.
>
> **[0:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=55)** I'll leave the round cap style and join style is round.
>
> **[0:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=59)** We're going to leave the minor limit as two meters.
>
> **[1:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=62)** I'm not going to dissolve the result.
>
> **[1:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=64)** By checking dissolved result, basically any buffers that touch will be merged into one big buffer.
>
> **[1:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=69)** We're going to have separate buffers for each segment of line.
>
> **[1:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=73)** Next we're going to leave the temporary layer alone, so it'll actually just create a temporary layer, won't create a file or anything, and we'll open up the output file when we're done.
>
> **[1:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=82)** So let's click run to create those three meter buffers, and I'll close this dialog box.
>
> **[1:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=88)** And if you zoom in, there's the three major buffers around each of the road center lines.
>
> **[1:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=96)** Now here's something very magical.
>
> **[1:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=99)** Under processing, we go to the history of our processing, and the most recent one, the one I just ran, I highlight it, and if you look down below, I've got some Python code here.
>
> **[1:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=111)** Basically what it did is it captured everything I did with the buffer, including where the file was, the three meter distance, and so on, even the temporary output, and put it into this Python page.
>
> **[2:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=123)** In fact, I can just grab all that Python, right-click, and go copy.
>
> **[2:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=129)** Close this, and we're going to use that to create a Python script to do that whenever we want to.
>
> **[2:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=135)** So let's do a couple of things.
>
> **[2:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=136)** First, I'm going to close the processing toolbox, and I'm going to create a brand new project.
>
> **[2:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=141)** Let's just discard everything, discard and start again.
>
> **[2:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=147)** We're going to drag and drop that road center line back into our project, we're going to click OK for the UTM.
>
> **[2:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=153)** So yes, it says EPSG 26910 at the bottom corner.
>
> **[2:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=157)** There's our road center lines.
>
> **[2:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=159)** Only this time, instead of running the processing tools under here, we're actually going to open up our Python console.
>
> **[2:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=167)** We're going to click on show editor, and we're going to paste what we just created into the editor.
>
> **[2:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=174)** Now there's a few things I want to do.
>
> **[2:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=176)** The first thing I want to do is put a carriage return, or press enter before it, and create a variable.
>
> **[3:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=182)** And this variable will become the buffer location.
>
> **[3:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=186)** And basically, I'm going to put the buffer location in the temp directory.
>
> **[3:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=189)** So I'll just say, C:\\temp, 'cause that's the folder I'm going to put in there, and I'll just call it mybuffer.shp file.
>
> **[3:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=198)** So that's what we're going to be creating.
>
> **[3:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=200)** So that's the destination is my buffer location.
>
> **[3:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=203)** The nice thing about Python is that I can put a carriage return or an enter right in the middle of my function just by putting a backslash and pressing enter.
>
> **[3:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=214)** So after each comma, I'm just going to put a backslash enter.
>
> **[3:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=219)** It'll make it much more readable on the line because I've got a small area I'm working with right now.
>
> **[3:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=224)** I can move it over a little bit.
>
> **[3:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=226)** So let's go to the end of that, and after that comma, I'm going to go backslash enter.
>
> **[3:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=232)** And after each column, I'm going to do that, just to make this readable.
>
> **[3:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=235)** Again, after the five segments, the end cap zero being round, join style zero being round as well.
>
> **[4:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=246)** And just after the miter limit of two and the dissolve false, and then the output.
>
> **[4:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=254)** I'm going to remove the temporary output and replace it with the buffer location right here.
>
> **[4:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=260)** So I'll copy that and paste that right here.
>
> **[4:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=263)** No single quotes around that.
>
> **[4:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=265)** So now what we have is I'm going to dump out this buffer into a file rather than just temporarily inside of my QGIS session.
>
> **[4:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=274)** So now I've got an actual file that's going to be created, mybuffer.shp, and it's called buffer location.
>
> **[4:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=280)** So again, we're going to use that road centerlines as our input with three meter buffers, five segments and so on.
>
> **[4:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=290)** And then finally, if I were to run this, it would not add to my current session.
>
> **[4:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=295)** Just before I go any further, I want to save this.
>
> **[4:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=298)** I'm going to hit save.
>
> **[4:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=299)** I'm going to just going to call it buffer.py on my desktop.
>
> **[5:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=303)** I already did this before, so it's there, but for you, you won't have this.
>
> **[5:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=306)** So just put buffer.py on your desktop and save it.
>
> **[5:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=310)** So now you've got buffer.py.
>
> **[5:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=313)** I'm just going to close that script we saved, and there we are.
>
> **[5:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=316)** So there's one more thing I need to do.
>
> **[5:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=318)** What I need to do is add this layer to my current map, because even though the script saves it as creating a buffer, it doesn't actually do the last step of adding it to your map.
>
> **[5:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=330)** You have to do that manually with Python.
>
> **[5:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=332)** So as we've seen before, we go iface, so that use the interface, and we're going to add a vector layer, and the layer will become the buffer location.
>
> **[5:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=346)** So there we go, the buffer location, you know, that temp file.
>
> **[5:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=349)** So once it's created, and I'm just going to add, because it'll use the file name in the legend anyway, so what I'm going to do is I'm going to add three M, meaning three meter buffers, just so you can see that it's a three meter buffer.
>
> **[6:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=362)** So I'll have buffer location, three meters.
>
> **[6:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=364)** That's just going to be part of the label that's created.
>
> **[6:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=367)** This is an OGR process.
>
> **[6:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=369)** Okay. So that's an open source OGR process.
>
> **[6:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=371)** Oh, don't forget to save your Python.
>
> **[6:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=374)** Okay. So let's run this Python now that the road centerlines are currently in our project.
>
> **[6:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=380)** We haven't done this before, so let's hit run script.
>
> **[6:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=384)** It runs, and sure enough, there's your three meter buffers, 'cause it's called mybuffer and 3m.
>
> **[6:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=391)** We zoom in, and there are our three meter buffers.
>
> **[6:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=394)** And if you look under your C drive, there's mybuffers under temp.
>
> **[6:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=398)** So we actually have a new file called mybuffer under the C temp file.
>
> **[6:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=402)** We've actually processed this.
>
> **[6:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=404)** We now have a new layer added manually using Python, and we have a Python page for adding it.
>
> **[6:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/saving-your-python-scripts?u=76281980&t=409)** So you see the power of being able to capture, any of the processing we do in the processing toolbox can be captured in the history, and then you can just copy and paste it into a Python page and reuse that process over and over again and customize it the way you want to.

> [!info]- Semantic Content
>
> **CLI Commands:** python (13), make (2)
> **Code Keywords:** let (6), this. (3), this, (2), return, (1), function (1)
> **Env Vars:** utm (3), epsg (2), ogr (2), qgis (1)
> **UI Navigation:** go to (3), drag and drop (2), double-click (1), right-click (1), click on (1)
> **File Paths:** buffer.py (3)
> **Definitions:** is an  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)


### 2. Managing Layers and Projects with Python

#### Working with projects
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=0)** - [Instructor] In this video, we're going to use Python to modify projects.
>
> **[0:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=4)** We're going to open a project, modify it, and save it as a new project file.
>
> **[0:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=10)** First, let's open up a blank session of QGIS.
>
> **[0:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=14)** You'll notice I have no projects open.
>
> **[0:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=16)** We're going to go to plugins Python Console.
>
> **[0:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=20)** Make sure we have the editor open and we're going to browse to the first file that's found in our Managing Layers and Projects with Python, PYTHON.
>
> **[0:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=30)** And the first one is open project.
>
> **[0:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=33)** We're going to use a Python script to open a preexisting project.
>
> **[0:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=37)** You may have to change the code a little bit to make sure that it points to the right project.
>
> **[0:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=42)** The first thing we do is create a project object called QgsProject.instance.
>
> **[0:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=47)** We're creating an instance or instantiating the project so that we can modify it in different ways.
>
> **[0:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=54)** The first thing we do is use a QgsProject.instance.
>
> **[0:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=58)** Then we use that project object to read in the file.
>
> **[1:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=62)** The file we're reading in is called streetlight_map.qgz or QGZ.
>
> **[1:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=71)** You may have to change this path because right now it looks that my users, Gordon Lockett, my name, desktop, and the exercise files.
>
> **[1:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=80)** This where I unzip the exercise files from the website.
>
> **[1:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=85)** So depending on where you extracted, and I recommend putting them on your desktop, put your exercise files there, and then you'll have to modify this path.
>
> **[1:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=93)** Once you're clear that this path is correct, go ahead and execute this.
>
> **[1:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=99)** So run scripts, you'll see up above, we've got a brand new project open it's called streetlight_map.
>
> **[1:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=106)** And of course, if you look in your layers, you'll see that it only has one layer, streetlights.
>
> **[1:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=111)** In this case, they're city streetlights with various types.
>
> **[1:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=115)** So for example, I've got high-pressure sodium induction and so on.
>
> **[2:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=121)** The next thing we're going to do is add a brand new layer to this project.
>
> **[2:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=124)** So let's open up another Python script in the same folder.
>
> **[2:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=128)** This time we're going to open up load layers Python that's also in that script directory.
>
> **[2:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=133)** This is a little more complex because first, we have to get the layer, but you've seen this before.
>
> **[2:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=138)** Within the interface, we're going to add a vector layer and the vector layer is in our exercise files.
>
> **[2:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=144)** Again, you may have to change the path because it's looking at my exercise files and it's going into the same directory, Managing Layers and Projects with Python.
>
> **[2:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=154)** And the subdirectory is called data and there's a road_centerlines.shapefile.
>
> **[2:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=159)** And we're going to tack on roads to the end and it's an OGR datatype.
>
> **[2:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=163)** So that's what the layer is.
>
> **[2:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=165)** Then we have to go to the current render or the map and modify the symbols and set the color to black.
>
> **[2:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=173)** So we're going to change that layer we add to black color and repaint the screen.
>
> **[2:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=178)** So let's run and see how that works.
>
> **[3:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=181)** So sure enough, the layer was added from that shapefile.
>
> **[3:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=185)** We changed the color of the symbol to black because you can see the roads are black.
>
> **[3:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=189)** If I zoom in you can see that.
>
> **[3:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=191)** And the layer we triggered a repaint, meaning we told it to manually refresh the screen so you can see that the color is now black.
>
> **[3:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=200)** All right, let's do the third part.
>
> **[3:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=202)** The third code we're going to run is where we save this existing project that we're working on as a separate file.
>
> **[3:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=209)** So let's open up the third py.
>
> **[3:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=211)** This one is save_project.py.
>
> **[3:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=215)** Now it has two lines in it.
>
> **[3:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=217)** The first one we say project.write.
>
> **[3:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=220)** And this project is actually predefined in a previous file.
>
> **[3:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=224)** If I were to run this on its own, that project doesn't know what it is.
>
> **[3:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=228)** If we go back to open project, you can see that I define project as the current QgsProject.instance.
>
> **[3:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=237)** I'm actually referring to it in a completely different Python file, but because I'm running them in order and that project is in memory, I can run this.
>
> **[4:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=246)** If I didn't, I'd have to take that same line of code right here from the first one from the open project.py, copy it, paste it in here so this becomes a standalone Python script.
>
> **[4:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=257)** But because I ran it already, I'm actually reusing that project.
>
> **[4:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=261)** So we say project.write.
>
> **[4:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=263)** I'm putting it directly to my desktop and I'm going to call it streetlight_map_new.
>
> **[4:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=270)** The second line is interesting because it gets the instance of the current project and actually I could just say project in this case.
>
> **[4:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=277)** In fact if I just type project and we can do that.
>
> **[4:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=282)** I don't have to re-instantiate it because there it is above.
>
> **[4:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=285)** What that does is actually unloads the current project and makes no projects open in QGIS at this moment.
>
> **[4:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=291)** So let's go ahead and try that.
>
> **[4:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=295)** So not only did it save that streetlight map new to my desktop, it also says project clear.
>
> **[5:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=302)** So if I were to try to open up that project, I go to my desktop.
>
> **[5:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=306)** You can see that streetlight_map_new is there and I can open it up directly and there it is.
>
> **[5:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=312)** With the road centerlines added and the streetlights and the new name.
>
> **[5:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-projects?u=76281980&t=316)** So with these three pieces of code, the opening a project, adding layers, and saving the project, I was able to modify and open and close an existing project within QGIS.

> [!info]- Semantic Content
>
> **CLI Commands:** python (10), make (2), unzip (1)
> **Code Keywords:** let (6), this. (2), case, (1), interface (1), case. (1)
> **Code Identifiers:** streetlight_map (2), streetlight_map_new (2), road_centerlines (1), save_project (1)
> **Env Vars:** qgis (3), python (1), qgz (1), ogr (1)
> **Exercise Files:** exercise files (5)
> **UI Navigation:** go to (3)
> **Definitions:** is called (2), is a  (1)
> **File Paths:** save_project.py (1), project.py (1)

#### Working with layers
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=0)** - [Instructor] Next we're going to focus on adding raster and vector layers using Python.
>
> **[0:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=5)** First, let's open up our Python console inside of a brand new project.
>
> **[0:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=11)** Make sure your editor is available and also clear your console.
>
> **[0:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=16)** So the first file we're going to open up is the add vector Python file.
>
> **[0:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=22)** This is found under Python in your 2 managing layers and projects with Python.
>
> **[0:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=26)** Let's open up that Python file and you'll notice it's very simple.
>
> **[0:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=31)** Basically it's a variable called layer that is the interface and the method we're calling is addVectorLayer and the vector layer we're adding is a shape file again, and it's easements and this easements shape file is found under data in your 2 managing layers and projects with Python sub-folder.
>
> **[0:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=52)** Now these easements or right of ways, that's why I'm calling it ROW right of way or easement, they're interchangeable in this particular case, and this type of layer is an OGR, so it's vector format.
>
> **[1:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=65)** So to add this to the current map, I'll hit Run Script.
>
> **[1:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=70)** Now the first thing that pops up is y-coordinate system.
>
> **[1:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=73)** So I'm going to choose UTM zone 10.
>
> **[1:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=77)** Now, if I change the coordinate system of the current map to EPSG 26910, I would not have been prompted to change it but now that it's been set, we don't have to worry about changing it again, it's there.
>
> **[1:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=89)** So now let's use Python to add a raster layer.
>
> **[1:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=93)** So I've got the ROW easements.
>
> **[1:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=96)** So open up another script, in this case, in the same folder, add_raster.py.
>
> **[1:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=103)** Again, super simple, it's just the layer, interface, add raster this time.
>
> **[1:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=110)** The vector said add vector layer, the raster says add raster layer.
>
> **[1:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=115)** So you see simple as that, that's the method.
>
> **[1:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=118)** Again, we're going to put the path of where it is.
>
> **[2:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=121)** This case, it's a nanaimo ECW, so that's the city.
>
> **[2:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=126)** That's what city this is, Nanaimo and it's an ECW file, Enhanced Compressed Wavelet.
>
> **[2:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=132)** The reason I'm using that format in this course, rather than a TIFF or a JPEG or any other is it just happens to be a well compressed file so I get a lot of image in a small footprint and its file sizes aren't very big.
>
> **[2:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=144)** That's the only reason I'm using them.
>
> **[2:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=146)** We could use TIFF or JPEG or geotiff or whatever you'd like to use or MrSID, in this case, I just chose that type 'cause it's small.
>
> **[2:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=154)** Okay and you'll notice there's not three parameters like there's with vector, there's only one.
>
> **[2:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=159)** There's the aerials, that's what it's going to show in the legend and there's no comma, anything else?
>
> **[2:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=166)** Like the other one has OGR so the add vector layer has OGR whereas this case, the raster doesn't have anything else, it's only got two parameters.
>
> **[2:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=175)** Okay so let's add this Nanaimo ECW to the map by hitting Run Script.
>
> **[3:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=181)** And there they are, the one ECW file just appeared.
>
> **[3:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=185)** There it is, if I zoom right in, you can see, it's an aerial photo, okay?
>
> **[3:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=193)** Now it's on top of the right of way so you can't see it.
>
> **[3:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=197)** So I have to actually move these around like this to see it.
>
> **[3:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=201)** So now I've moved the right of ways and legend, I've just dragged and dropped and now it's in there.
>
> **[3:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=206)** Now I'm going to show you in a minute, how to add it so it's actually at the bottom of the list instead of at the top of the list, because each time you use Python to add a new layer, it's going to put it to the top of the layer list, meaning the top of the display order.
>
> **[3:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=219)** So the next Python I'm going to show you not only inserts a raster layer, but it puts it at the very top.
>
> **[3:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=226)** So let's look at that.
>
> **[3:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=227)** So let's open up our Python.
>
> **[3:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=230)** This time, we're going to add an XYZ or XYZ, okay?
>
> **[3:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=235)** So the XYZ happens to be this open street map that's actually in our browser window.
>
> **[4:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=242)** So I could double click on that and add that, or I can use the Python to do the same.
>
> **[4:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=248)** The most important thing about the parameters of the XYZ is it's not looking for a particular folder, but it's looking for a URL.
>
> **[4:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=257)** So the URL is type XYZ and one of the parameters is URL there's the open street map URL.
>
> **[4:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=265)** And you'll see the Z or Z-max and Z-min, there we are.
>
> **[4:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=270)** And then the layer is a QGS raster layer, the parameters above it's an open street map, that's the title.
>
> **[4:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=278)** So we've got three, we've got the parameters, which is the path, OSM is just going to be what's in the legend and it's a web service, basically web mapping service, that's what WMS stands for.
>
> **[4:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=290)** So it's a type of raster layer.
>
> **[4:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=292)** Then what we're going to say is in this particular project, in this instance, so in this one that's going on up here, we're going to instantiate this particular map up here, we're going to add a layer that one above and the second parameter is false.
>
> **[5:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=307)** So what that means is it's not going to refresh, it's not going to show up yet, it's not even going to show in the legend because we're not done yet.
>
> **[5:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=315)** So that false basically says, okay, we've added to the map, but you're not going to see it yet.
>
> **[5:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=319)** First, we want to get a hold of the layer tree or what the layer list is in this widget over here.
>
> **[5:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=326)** So we go into the interface, we get the layer tree canvas bridge, basically the link between what's going on in here and what's on the map, on the canvas and we're going to get the root group.
>
> **[5:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=336)** Now the root group is basically what is the base group inside of this (indistinct) the layers, because you can have other groups in here.
>
> **[5:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=344)** If I right click, I can say add group and put another group in there and that's not the root group, that's group one, but all we're worried about right now is I'm just going to remove that group, is the root one so the base list here.
>
> **[5:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=356)** And then we're going to say, okay, for that layer tree, this list here, we're going to insert a child node, meaning we're going to insert an item in the legend and where are we going to insert it?
>
> **[6:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=367)** Minus one, that's code to say doesn't matter where anything else is inserted, put this beneath everything else, minus one at the very bottom of the list.
>
> **[6:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=376)** And what are we adding?
>
> **[6:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=377)** Well, we're adding to the QGS layer tree, the layer up here, that raster and it should appear.
>
> **[6:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=383)** So let's see what happens if we run this.
>
> **[6:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=385)** If I go Run Script, in the background underneath everything, the open street map, OSM is now available and it's underneath everything else because it was inserted at minus one.
>
> **[6:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=400)** Okay, so now how would we do this with anything else?
>
> **[6:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=404)** Well, let's remove all three of these layers for now.
>
> **[6:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=407)** I'm just going to right click, remove layer.
>
> **[6:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=410)** Yes, remove it and remove the aerials.
>
> **[6:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=412)** Right click, remove layer. Great.
>
> **[6:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=415)** And finally, the OSM that we just did, remove layer.
>
> **[7:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=420)** Okay, all three are gone.
>
> **[7:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=422)** What I'm going to do is I'm going to copy all the code from add XYZ and I'm going to paste it beneath the layer in add raster.
>
> **[7:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=434)** The first thing I'm going to do is I'm going to change the params to be the path of the ECW that I want.
>
> **[7:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=442)** So I'm just going to highlight all that right to the end of the quote, scroll all the way over, right to the ECW, copy that and paste it as the parameters.
>
> **[7:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=452)** Done. Next, I'm going to delete that layer.
>
> **[7:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=455)** So this is looking pretty close to the add XYZ one, the only difference is I'm going to change the WMS parameter right here to nothing.
>
> **[7:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=467)** And I'm also going to change the name to this to aerials there.
>
> **[7:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=472)** So I've changed three things, I've changed the parameters to the path of the ECW.
>
> **[7:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=477)** I dropped the third parameter of the raster layer and I changed the name of the legend, that's it.
>
> **[8:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=483)** So now, these two almost look identical.
>
> **[8:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=486)** So the XYZ one, it has a path and a WMS, whereas the raster has the actual path of the file whereas the XYZ has a URL.
>
> **[8:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=498)** The other thing I've changed is I've renamed the layer and dropped the WMS, otherwise it's identical.
>
> **[8:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=505)** Now, if I were to run this right now, watch what happens.
>
> **[8:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=507)** Actually, let's add the vector first, so you can see.
>
> **[8:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=511)** So the ROW easements come in.
>
> **[8:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=513)** Now, I'm going to flip over to add raster.
>
> **[8:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=516)** Now the raster is underneath because I'm using the same technique as the XYZ.
>
> **[8:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=523)** By the way, this works for all of them.
>
> **[8:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=525)** This works for anything.
>
> **[8:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=527)** I could add this exact sort of process except the QGS raster layer, I change that to vector layer and everything else would work for the adding vector.
>
> **[8:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=536)** So this is a great technique to make sure any layers you're adding get dropped to the bottom because by default, they float to the very top.
>
> **[9:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=543)** And this is a really neat way to do that, to modify the legend order when you're adding layers.
>
> **[9:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/working-with-layers?u=76281980&t=549)** So as you've seen, we've had vector, raster, XYZ, as well as controlled where it was inserted, the top or the bottom of the layer list.

> [!info]- Semantic Content
>
> **Env Vars:** xyz (11), ecw (7), url (5), wms (4), row (3)
> **Code Keywords:** let (9), case, (5), interface (3), else, (2), super (1)
> **CLI Commands:** python (12), make (2), node (1), go run (1)
> **Definitions:** is a  (4), is an  (1), stands for (1)
> **Code Identifiers:** addvectorlayer (1), add_raster (1)
> **File Paths:** add_raster.py (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Setting the CRS
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=0)** - [Narrator] In this video, we're going to set the coordinate system, of our current project.
>
> **[0:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=5)** First, let's open up the Python file under Python.
>
> **[0:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=10)** We're going to set CRS dot PY.
>
> **[0:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=13)** That's going to be the name of the Python file we open.
>
> **[0:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=16)** It's quite simple.
>
> **[0:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=18)** We set a variable called CRS, which gets a coordinate reference system, which is two, six, nine, 10.
>
> **[0:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=25)** That's a UTM zone 10, NAD 83.
>
> **[0:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=30)** So that's what that code is.
>
> **[0:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=31)** I happen to know that's the code and because I know that, then I can say, get the instance of the current project and set the CRS to that one up there.
>
> **[0:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=40)** So if we hit run right now, you'll see in the bottom corner of your project that it says EPSG four three two six that's lat-long 84.
>
> **[0:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=49)** But if I hit run, you'll see immediately it changes the two, six, nine, 10.
>
> **[0:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=54)** I know that's the code for that particular coordinate system.
>
> **[0:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=57)** You may not always know what the code is.
>
> **[1:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=60)** So if we actually open up the folder, where our shape files are held, often, there's a PRJ file that is stored in there, that contains well-known text, that's WKT well-known text.
>
> **[1:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=77)** In there, this well-known text has a full coordinate system, all spelled out for you, so that you can see exactly what coordinates system it is as a text file.
>
> **[1:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=89)** And you can actually copy and paste that.
>
> **[1:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=91)** So let's actually run a Python where we use well-known text.
>
> **[1:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=95)** So let's open up the other Python set, CRS, WKT well-known text.
>
> **[1:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=103)** Let's open that up and sure enough, I've got WKT equal, so it's just a string.
>
> **[1:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=110)** It's just a variable I'm setting.
>
> **[1:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=112)** And then I say the CRS equals the coordinate reference system instead of putting the two six, nine, 10 in, I'm putting that big long, well known texts that came from the PRJ file in there and then I set the instance and basically I can run this.
>
> **[2:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=128)** Now you didn't see anything happen.
>
> **[2:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=130)** So what I'm going to do is I'm going to start a new project, discard what I just did and because I still have the Python console open in my new project, you'll see that it's EPSG four three two six.
>
> **[2:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=141)** I can run this again.
>
> **[2:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=143)** And sure enough, that big long, well-known text I took from the PRJ file, I pasted it in here.
>
> **[2:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=149)** I ran it as a CRS variable saying the QGPS coordinates reference system and there's WKT above and then I signed it to my current session.
>
> **[2:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=158)** And that's why it says EPSG 26, nine, 10.
>
> **[2:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=161)** That is the same thing as the other one, two, six, nine, 10, or that big long text file.
>
> **[2:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=168)** Now, where do all these come from?
>
> **[2:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=170)** Now there's a website that I like to use, called [spatialreference.org](https://spatialreference.org).
>
> **[2:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=177)** Now [spatialreference.org](https://spatialreference.org), keeps track of all these standards for the EPSG coordinate system.
>
> **[3:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=184)** So I looked up the 26, nine, 10 under the [spatialreference.org](https://spatialreference.org).
>
> **[3:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=189)** And there it is, there's a definition.
>
> **[3:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=191)** There's the number.
>
> **[3:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=192)** And we have all these different formats to look at it.
>
> **[3:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=195)** We have the OGC well-known texts there it is there that's basically what we copied and pasted.
>
> **[3:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=201)** We can also look at the PRJ file and it'll download a PRJ file for that.
>
> **[3:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=206)** We could look at the ESRI well-known text and that's almost identical only sometimes as there's slight differences.
>
> **[3:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=215)** And there's another format.
>
> **[3:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=217)** Proj four or project four.
>
> **[3:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=220)** This one is a lot smaller, but again gives us the same definition you could see it's UTM zone 10, the datum is NAD 83, GRS80 ellipsoid.
>
> **[3:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=231)** Okay, I'm going to go back.
>
> **[3:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=232)** So basically you could look up all sorts of coordinate systems on this particular [spatialreference.org](https://spatialreference.org) and get them.
>
> **[3:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=239)** So if I took that PRJ file and I grabbed that text, I can make another file.
>
> **[4:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=244)** So let's open up another Python file, set CRS PRJ four, dot PY.
>
> **[4:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=253)** There's that PRJ texts that we just saw inside the spatial reference set of work.
>
> **[4:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=259)** So the first one we do is set that as a variable, we grabbed the CRS reference system and then we have a code create from proj four.
>
> **[4:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=268)** So what we're going to do is take the CRS and the proj four variable and crate the CRS from proj four.
>
> **[4:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=275)** And then we can set the coordinate system based on that little tiny string.
>
> **[4:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=280)** So I'm going to just start a new project again, discard what's going on.
>
> **[4:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=284)** You'll see this reset back to EPSG four three two six at the bottom and then let's run the set CRS proj four.
>
> **[4:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=293)** There again, this PRJ four, that UTM zone 10 GRS80 ellipsoid NAD83, is now EPSG two, six, nine, 10.
>
> **[5:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=304)** So use our three different ways for setting the coordinate system.
>
> **[5:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=307)** One with the EPSG code, two with a well known text and three with the proj four code.
>
> **[5:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/setting-the-crs?u=76281980&t=315)** We've seen three different ways of setting the coordinate system of our project, using Python.

> [!info]- Semantic Content
>
> **Env Vars:** crs (11), prj (9), epsg (7), wkt (4), utm (3)
> **CLI Commands:** python (8), make (1)
> **Code Keywords:** let (6), this. (1)
> **URLs:** [spatialreference.org](https://spatialreference.org) (4)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Adding and creating layer definitions
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=0)** - [Instructor] In this video, we use Python to load and save layer definition files.
>
> **[0:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=5)** Let's add a new shape file to an empty project right now.
>
> **[0:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=10)** The one we're going to use is ROAD_CENTRLINES found under 2 Managing Layers and Projects with Python.
>
> **[0:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=15)** I'm just going to drag and drop that into a brand new project.
>
> **[0:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=18)** I'm going to choose the very first option here for a coordinate system.
>
> **[0:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=21)** The UTM zone 10 North.
>
> **[0:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=23)** So by default, QGIS assigns a random color.
>
> **[0:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=27)** In this case, green.
>
> **[0:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=28)** I'm going to change this color to red.
>
> **[0:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=31)** So let's double-click on that layer.
>
> **[0:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=33)** And under Symbology, I'm going to choose a more red color, there we are.
>
> **[0:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=38)** And hit OK.
>
> **[0:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=39)** So now I have a red layer called ROAD_CENTERLINES.
>
> **[0:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=42)** And I could rename this, so maybe I want to rename the layer.
>
> **[0:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=46)** I'll call it My Roads like that.
>
> **[0:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=51)** Now at any point I can save this layer by exporting it to a layer definition file.
>
> **[0:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=57)** Layer definition files are great.
>
> **[0:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=59)** What they are, they're individual files that keep track of the layer name, where the data is, what color it is, all that sort of stuff.
>
> **[1:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=67)** It's basically a mini map that stores just one layer.
>
> **[1:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=71)** The beautiful thing about that is you can add those layers to any project.
>
> **[1:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=75)** Whether the project already exists or you're starting a new project.
>
> **[1:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=79)** And you can put them on the network so anyone else can use them.
>
> **[1:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=83)** This is a very effective way to manage standards.
>
> **[1:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=86)** Now, this isn't just unique to QGIS.
>
> **[1:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=89)** Other GISs, such as ArcMap and ArcGIS Pro also have this.
>
> **[1:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=93)** As does AutoCAD Map and so on.
>
> **[1:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=96)** So regardless of the GIS are using, these layer definition files are fantastic.
>
> **[1:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=100)** Now they're not compatible between GISs so the layer definition file that we create here in QGIS only works in QGIS.
>
> **[1:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=106)** Let's save this one.
>
> **[1:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=108)** So My Roads I'm just going to put on the desktop, and I'll just call it My Roads.
>
> **[1:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=114)** And you'll see the extension is a qlr.
>
> **[1:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=118)** That's a layer definition right there.
>
> **[1:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=119)** It's basically a QGIS layer.
>
> **[2:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=121)** So qlr.
>
> **[2:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=122)** So My Roads.
>
> **[2:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=123)** Now if I start a brand new project and discard this one, discard.
>
> **[2:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=127)** And I go to my desktop.
>
> **[2:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=130)** I can drag and drop My Roads qlr into my project.
>
> **[2:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=135)** And you'll see, there's My Roads named just like I named it.
>
> **[2:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=139)** It's red, just like we changed.
>
> **[2:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=142)** And if I look at the properties of the information you can see it still points to the ROAD_CENTERLINES shape.
>
> **[2:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=148)** So this mini-map, this qlr file is available to me.
>
> **[2:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=153)** Let's look at how we would load qlr files using Python.
>
> **[2:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=158)** So under the plugins, Go to plugin console.
>
> **[2:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=162)** And then we're going to open up the editor and browse to the Python code.
>
> **[2:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=168)** Under 2 Managing Layers and Projects with Python, Python.
>
> **[2:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=172)** And this one, we're going to to add layer definitions.
>
> **[2:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=174)** So we're going to add an existing qlr file to our project.
>
> **[2:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=179)** So the very first thing we do is get an instance of our project QGS project instance.
>
> **[3:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=184)** So now that we have it, we can get the layer tree root.
>
> **[3:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=187)** Well, you'll notice in the code, it says QgsProject instance.
>
> **[3:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=190)** Well it didn't we get that up here?
>
> **[3:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=192)** Yes.
>
> **[3:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=192)** So if we want, we can actually change that code right there to the word instance.
>
> **[3:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=197)** There we go.
>
> **[3:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=198)** So we have an instance here, and then we say in this project, get the layer tree roots.
>
> **[3:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=203)** So this little pane here called Layers, it'll get the root list of layers in there.
>
> **[3:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=208)** So now that we have the root list of layers, we can use that to add a new layer to it.
>
> **[3:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=214)** So where is the layer?
>
> **[3:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=216)** The layer is actually in the Desktop, Exercise Files.
>
> **[3:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=220)** Managing Layers and Projects with Python, data.
>
> **[3:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=222)** And there's an EASEMENTS qlr file that we're going to to add.
>
> **[3:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=226)** This is great because now we have a qrl file.
>
> **[3:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=230)** We have an instance in a group.
>
> **[3:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=231)** If we have those three things, we could use Python to add it.
>
> **[3:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=234)** So we get the layer definition.
>
> **[3:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=236)** Then we say loadLayerDefinition.
>
> **[3:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=239)** We grabbed the path of where the qlr file is.
>
> **[4:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=242)** We get the instance of the project where the new layer definition's going to go, and it's going to just go on the root group.
>
> **[4:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=249)** So if I hit run right now.
>
> **[4:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=251)** So it ran it.
>
> **[4:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=253)** You'll see there's EASEMENTS has been added.
>
> **[4:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=256)** If I zoom in, you can see it's already been modified.
>
> **[4:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=261)** It's a different color.
>
> **[4:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=262)** If I were to drag and drop EASEMENTS in it would give a random color.
>
> **[4:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=265)** If I actually go into the EASEMENTS definition.
>
> **[4:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=267)** You'll see in the Symbology, the opacity is actually 50%.
>
> **[4:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=271)** So that's already been pre-authored.
>
> **[4:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=273)** And that's great.
>
> **[4:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=274)** So basically the layer styles and all those sorts of things can be standardized and saved as these layer definitions that I could even add using Python.
>
> **[4:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=284)** How do we save a layer using Python?
>
> **[4:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=286)** Okay, let's start a brand new project.
>
> **[4:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=289)** We'll discard everything.
>
> **[4:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=290)** And I'm going to add those ROAD_CENTERLINES again, and again, UTM, that's fine.
>
> **[4:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=295)** And I'm going to change the color to maybe a darker red, like that.
>
> **[5:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=301)** Okay.
>
> **[5:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=302)** And I'm going to leave the name alone.
>
> **[5:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=304)** ROAD_CENTERLINES this time.
>
> **[5:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=306)** Next we're going to open up another Python file.
>
> **[5:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=308)** And this time it's called save_layer_definition.py.
>
> **[5:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=313)** So in this save_layer_definition, we're going to use Python to save a qlr rather than loading one.
>
> **[5:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=319)** So this will save one.
>
> **[5:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=321)** So we'll get the instance, myInstance, in this case.
>
> **[5:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=324)** And then we use myInstance to get the ROAD_CENTERLINES.
>
> **[5:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=328)** Now it's saying get the map layers by name.
>
> **[5:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=331)** And then we put square bracket, zero square bracket.
>
> **[5:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=335)** What that means is in this current project, there might be multiple layers called ROAD_CENTERLINES.
>
> **[5:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=341)** So this gets the very first one.
>
> **[5:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=343)** That's what the bracket zero bracket.
>
> **[5:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=344)** Get the very first layer in my project called ROAD_CENTERLINES.
>
> **[5:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=348)** Once you have this layer that's in the project called ROAD_CENTERLINES.
>
> **[5:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=354)** Then we go into the layer list over here and grab the layer tree root.
>
> **[5:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=358)** So that's all the layers in this list.
>
> **[6:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=360)** Well, here's the neat thing.
>
> **[6:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=362)** Once we have that single layer, it has a unique ID.
>
> **[6:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=366)** So that means that we've got the right layer.
>
> **[6:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=369)** Let's get it's unique ID, road_layer.id.
>
> **[6:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=373)** And then find which one that is defined inside the tree root.
>
> **[6:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=378)** So rather than saying get the layers in the legend by name and get the first one it comes across.
>
> **[6:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=384)** We actually get the unique ID from the layers in the global project road_layer and use that to get the perfect one from our layer list.
>
> **[6:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=393)** So we actually have two layers.
>
> **[6:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=395)** We have the global layer that's in our project.
>
> **[6:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=397)** And then we have the layer that actually is listed in our layer list here.
>
> **[6:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=402)** The reason they're different is one represents the layer and all the graphics inside the project.
>
> **[6:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=409)** Where as this little myLayer just represents the layer definition itself.
>
> **[6:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=413)** Meaning what color is it?
>
> **[6:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=415)** What's its name?
>
> **[6:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=417)** What is its projection system?
>
> **[6:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=419)** All that sort of stuff is stored in this myLayer versus everything stored in the road_layer.
>
> **[7:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=426)** So we need that very specific root myLayer so that we can get the color and all that sort of thing to save it as a qlr file.
>
> **[7:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=434)** So how do we save it as a layer definition?
>
> **[7:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=436)** Well we go QgsLayerDefinition, exportLayerDefinition.
>
> **[7:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=441)** And it needs a few things.
>
> **[7:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=443)** It needs the location we're going to save it.
>
> **[7:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=444)** I'm just going to to put it on my desktop as test.
>
> **[7:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=447)** So these red road center lines will be stored as a qlr file on my desktop.
>
> **[7:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=451)** Just call it test.
>
> **[7:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=452)** And in square brackets again because you can pass multiple definitions here.
>
> **[7:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=458)** I'm only passing one.
>
> **[7:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=459)** In square brackets I'm passing myLayer.
>
> **[7:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=462)** Remember myLayer is the definition in the legend here, not the global one.
>
> **[7:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=468)** So I'm passing the legend definition, myLayer.
>
> **[7:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=471)** Because that contains all the great information like its color and so on.
>
> **[7:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=475)** So it uses that to stuff all that information into the qlr file.
>
> **[8:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=480)** Well let's run this.
>
> **[8:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=481)** Again, remember I'm putting it in my desktop, my name, you'll have to change this path if you want it put in the right place.
>
> **[8:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=489)** Okay let's run it.
>
> **[8:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=492)** And sure enough, it exported.
>
> **[8:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=494)** So I've had no errors or anything like that.
>
> **[8:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=497)** So if I start a brand new project, discard.
>
> **[8:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=499)** I can go to my desktop and just minimize that.
>
> **[8:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=505)** And grab the test qrl that I just made.
>
> **[8:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=509)** Go back into QGS.
>
> **[8:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=512)** Here we are.
>
> **[8:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=513)** Drag and drop it in.
>
> **[8:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=514)** And sure enough, there's the ROAD_CENTERLINES that we just created as test qlr.
>
> **[8:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=519)** Now remember once the qlr file's loaded, there's no longer connection to the original file.
>
> **[8:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=526)** It's been absorbed into my project.
>
> **[8:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=528)** And if I change that qlr file in any way, it won't reflect my current project.
>
> **[8:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=532)** I'd have to drag that layer in again, to get the change.
>
> **[8:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=535)** 'Cause it doesn't tie back.
>
> **[8:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=537)** It's only going to to import the settings.
>
> **[8:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=539)** It's not going to tie back to the settings.
>
> **[9:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=542)** So that's a very important distinction.
>
> **[9:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=544)** So you saw inside of QGIS, how to a layer definition that already exists.
>
> **[9:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-and-creating-layer-definitions?u=76281980&t=550)** And how to save one from scratch that's already been made inside the map using Python.

> [!info]- Semantic Content
>
> **Env Vars:** road_centerlines (9), qgis (6), easements (4), utm (2), qgs (2)
> **Code Keywords:** let (8), this. (2), default, (1), case, (1), this, (1)
> **Code Identifiers:** mylayer (6), road_layer (3), save_layer_definition (2), myinstance (2), loadlayerdefinition (1)
> **CLI Commands:** python (13), find (1)
> **UI Navigation:** drag and drop (4), go to (3), double-click (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** just like (2), such as (1)
> **File Paths:** save_layer_definition.py (1)


### 3. Geometry Handling

#### Getting WKT from data
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=0)** - [Narrator] In this video, we're going to add a shapefile to our project and extract the graphics or the entities out as well-known text.
>
> **[0:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=9)** Well-known text is very powerful.
>
> **[0:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=11)** I've recently used well-known texts to transfer graphics from Oracle to MySQL, for example, with a simple SQL call.
>
> **[0:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=19)** That's how powerful well-known text is.
>
> **[0:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=22)** So let's do that.
>
> **[0:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=23)** The first thing we're going to do, is go to our exercise files under geometry handling, data, and drag and drop city limit into a new project.
>
> **[0:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=33)** Let's do that now.
>
> **[0:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=34)** And pick the first coordinate system, UTM zone 10.
>
> **[0:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=39)** There it is.
>
> **[0:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=40)** You should see in the bottom right hand corner, EPSG 269110.
>
> **[0:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=46)** That's great.
>
> **[0:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=46)** And this is the city limits.
>
> **[0:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=48)** So if we pick on it, it's a single polygon.
>
> **[0:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=52)** You'll see that the PC name is Nanaimo.
>
> **[0:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=56)** It's a polypolygon or a multipolygon because it has a hole inside of it.
>
> **[1:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=60)** There's a place where there's no polygon in the middle of the city limits.
>
> **[1:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=66)** So I'll just close the identify results.
>
> **[1:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=70)** Next let's open up the Python code.
>
> **[1:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=73)** So hit browse for open script.
>
> **[1:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=76)** And the script we're going to open is called getGeometryWKT.py.
>
> **[1:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=81)** Let's open that up in the bottom.
>
> **[1:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=83)** So we should have that inside of our console at the bottom of the screen.
>
> **[1:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=87)** The very first thing we're going to do is create a variable called layer.
>
> **[1:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=91)** And we're going to get the instance of the current project, and grab the map layer by name.
>
> **[1:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=96)** In this case city limit.
>
> **[1:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=98)** Now, again, the trick is with the square bracket in the zero, that allows me to get the first city limit that I can it comes across in the layer list.
>
> **[1:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=108)** There's only one, so that's fine.
>
> **[1:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=110)** But sometimes your projects may have multiple city limits.
>
> **[1:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=114)** We're just saying, grab the first one, zero, that's the first one.
>
> **[1:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=117)** So once we have the layer, we're going to grab all the features on this layer.
>
> **[2:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=122)** So get the layer, get all the features and use a QGIS feature requests.
>
> **[2:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=127)** So basically we're just going to say, give me all the graphics on this layer.
>
> **[2:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=132)** Now, in this case, we're lucky it's only one graphic.
>
> **[2:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=135)** It's one big multipolygon.
>
> **[2:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=138)** That's it, just one single record.
>
> **[2:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=140)** But we're going to loop over all the features.
>
> **[2:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=143)** So this is a loop for looping over the graphics in the list of features.
>
> **[2:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=148)** So for every feature we highlight, we have a variable called F.
>
> **[2:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=153)** So you'll see there's four fn features and then a colon.
>
> **[2:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=156)** And then everything beneath that is indented.
>
> **[2:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=159)** That means it'll loop over each of those things.
>
> **[2:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=162)** So now that we have F, we're going to say the geometry is the features, geometry property.
>
> **[2:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=170)** That's why it says geometry bracket, bracket, and the name will be the attribute called PC name.
>
> **[2:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=176)** So you can see right away, we've got two ways getting at the data inside this particular layer, we have the geometry itself, that's the geom, and then a particular attribute.
>
> **[3:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=187)** One of the columns in the shapefile.
>
> **[3:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=189)** And this one is called a PC name.
>
> **[3:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=191)** So now I've got two columns, a geometry and the PC name at my disposal.
>
> **[3:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=197)** So I'm just going to print it out to the console.
>
> **[3:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=199)** I'm going to print the name of what we selected, probably just in the Nanaimo, we saw that, I'm going to put the area of the geometry, so it'll calculate the area, It'll calculate the length of the perimeter, It's going to show well-known texts.
>
> **[3:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=214)** So what I'm saying is show the geometry with a little function called AsWKT.
>
> **[3:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=220)** That's a function that'll show it as a polygon or a multipolygon in a big long text file.
>
> **[3:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=226)** Finally, I'm going to use a little function called centroids.
>
> **[3:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=229)** So it'll actually get the geographic center of that.
>
> **[3:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=232)** And it will also spit that out as a well-known text.
>
> **[3:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=236)** Well, let's run this and see how this works.
>
> **[3:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=237)** So if I hit run script, I'm going to scroll up, just to see where we started.
>
> **[4:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=243)** All the way past all those red numbers.
>
> **[4:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=244)** The first thing it did is print it the name, which is Nanaimo.
>
> **[4:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=248)** Yes, that's what the PC name is.
>
> **[4:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=251)** As one of the properties, the area in square meters, is there, right down to the micrometer.
>
> **[4:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=257)** So we need to round that eventually, but there we are.
>
> **[4:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=260)** And we have the perimeters well, and it's also in meters.
>
> **[4:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=263)** And then we can see that this is a multipolygon.
>
> **[4:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=266)** That's the type it is.
>
> **[4:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=267)** That's what the well-known text is showing.
>
> **[4:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=269)** And it shows the X and the Y, and a comma X, and a Y and a comma and so on, it continues through for the first polygon.
>
> **[4:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=279)** And as we scroll down, it's quite complicated cause it's a multipolygon, it's made up of a hole as well as you saw before.
>
> **[4:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=286)** And I keep going all the way through, scroll down.
>
> **[4:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=290)** You can see there's just a lot of coordinates that make up this multipolygon.
>
> **[4:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=294)** Now at the very end, you'll see the second item, which is actually centroid.
>
> **[4:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=299)** Now all centroids are usually points.
>
> **[5:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=302)** So a point is simple, it's got an X and a Y, and that's all there is, that's the point.
>
> **[5:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=308)** So that's the centroid, that is the X and Y in the 26910 coordinate system, this is all in UTM meters.
>
> **[5:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=316)** It's probably about right in the middle of that polygon.
>
> **[5:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=321)** So now you can see, we have well-known texts of the centroid, all this data for well-known text of the polygon.
>
> **[5:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=329)** And we also have the perimeter and the area of the geometry, as well as we extracted one of the columns inside of the shapefile out to the screen.
>
> **[5:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=339)** Now you can see even with a single feature, we have a lot of data we can extract.
>
> **[5:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/getting-wkt-from-data?u=76281980&t=344)** So using Python, you can get the well-known text not only of the geometry, but also of the centroid.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (3), case, (1), fn (1), finally, (1)
> **Env Vars:** utm (2), sql (1), epsg (1), qgis (1)
> **UI Navigation:** scroll down (2), go to (1), drag and drop (1), scroll up (1)
> **CLI Commands:** python (2), mysql (1), make (1)
> **Definitions:** is called (2), is a  (2)
> **File Paths:** getgeometrywkt.py (1)
> **Code Identifiers:** getgeometrywkt (1)
> **Cross-References:** as you saw (1)

#### Exporting geometry
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=0)** - [Gordon] Next, we're going to use Python to export data directly from the geometry out into a CSV file which can be viewed in Excel.
>
> **[0:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=9)** Actually, not only are we exporting the job entry but all the data inside the file, in this case a shape file.
>
> **[0:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=15)** So first, let's bring in the file we're going to export, intersections.shape.
>
> **[0:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=20)** So let's drag and drop that into our current session.
>
> **[0:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=23)** And we'll use the very first one, UTM zone 10.
>
> **[0:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=26)** You'll know you picked the right one because it should say at the bottom of the screen, 26910, in the bottom right-hand corner.
>
> **[0:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=32)** There it is.
>
> **[0:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=33)** If you want to see some of this data, we'll look on the Identify and pick on one of the items.
>
> **[0:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=38)** You could see that each of these intersections say whether it's a traffic light, what street number it's on, and intersection and so on.
>
> **[0:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=45)** And we could look at each one and all the different data.
>
> **[0:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=48)** So for example, this is a dead-end street intersection, and so on.
>
> **[0:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=53)** Let's close Identify Results and clear our selection.
>
> **[0:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=57)** Next, we're going to go into the Python console and if not already open, use a show editor.
>
> **[1:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=62)** We'll browse for a file and open up the script.
>
> **[1:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=66)** The script we're going to look at is export_csv.py.
>
> **[1:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=71)** Again, that's under Geometry Handling, Python.
>
> **[1:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=75)** So, it's actually a simple process.
>
> **[1:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=77)** So let's open this up.
>
> **[1:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=80)** The first thing we're going to do is get the name of the layer.
>
> **[1:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=82)** The layer is called Intersections.
>
> **[1:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=84)** So we go to the instance of the project, map the layers by name, which is Intersections.
>
> **[1:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=90)** And we're going to use bracket zero bracket 'cause we're going to grab the first layer called Intersections.
>
> **[1:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=96)** In this case, we just started the project.
>
> **[1:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=98)** There's only one but we have to put which one we want to use.
>
> **[1:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=101)** So we're going to take the very first one, the zero.
>
> **[1:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=103)** We're going to define where we're going to put our CSV file.
>
> **[1:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=106)** So we're just going to put it on the desktop.
>
> **[1:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=108)** Now this may change depending on your install.
>
> **[1:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=111)** You may be using a Mac or Linux or you may have installed a different username.
>
> **[1:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=116)** In this case, my username is Gordon Luckett.
>
> **[1:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=118)** So that's my desktop.
>
> **[2:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=120)** So I'm going to put a WKT CSV desktop.
>
> **[2:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=123)** Now that I have those two things set up, I have my layer.
>
> **[2:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=128)** I've got my CSV location.
>
> **[2:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=129)** I'm going to use the Vector File Writer tool.
>
> **[2:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=133)** And we're going to write as vector format.
>
> **[2:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=135)** So we have QGS File Writer.
>
> **[2:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=137)** We're going to write as a vector.
>
> **[2:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=139)** The first one is layer. So that's Intersections.
>
> **[2:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=141)** That's what we're exporting.
>
> **[2:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=143)** The second item is a CSV file.
>
> **[2:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=146)** That's the path to the CSV file we're saving, which will be on the desktop.
>
> **[2:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=150)** We're going to use UTF eight.
>
> **[2:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=152)** That's the encoding for the text.
>
> **[2:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=154)** We're just going to use the layers coordinate system.
>
> **[2:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=156)** So the layer.csv.
>
> **[2:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=159)** The layer is the intersections.
>
> **[2:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=160)** We're going to use the layer.crs or coordinate system of intersections.
>
> **[2:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=166)** We're going to export it as a CSV type and we're going to leave all the other options alone except one extra thing we're going to do.
>
> **[2:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=175)** We're going to say export the geometry as X-Y-Zed or X-Y-Z so that we get new columns with an X and a Y inside of it, inside the Excel sheet.
>
> **[3:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=185)** So otherwise, if we didn't do that, it may show up as a well-known text or something like that.
>
> **[3:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=190)** But in this case, we're going to go ahead and run this.
>
> **[3:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=193)** It's going to take all the entities here as well as get the X and Y and put it into a CSV.
>
> **[3:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=199)** So let's go ahead and run this.
>
> **[3:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=202)** We didn't get any feedback. It's fine.
>
> **[3:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=204)** So let's minimize this and you should see a well-known text.csv.
>
> **[3:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=209)** So let's open that up and we'll just edit it with Notepad in this case.
>
> **[3:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=213)** And sure enough, there's the X, Y and Zed or Z.
>
> **[3:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=217)** There's no elevations on this data.
>
> **[3:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=219)** So you'll only see the X and Y and you'll see all the other columns, like type, street, and so on.
>
> **[3:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=226)** And there's all the data exported from QGIS.
>
> **[3:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=230)** So that's great, so we've got a simple tool with three lines to take a point layer and export it out to a format that anyone with Notepad or Excel can see.
>
> **[4:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=241)** So as you can see, using the QGIS File Writer and the Write As Vector Format, and take any layer and write that out to a CSV file.
>
> **[4:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=250)** And it doesn't even have to be points.
>
> **[4:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=252)** It could be polygons and so on.
>
> **[4:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/exporting-geometry?u=76281980&t=253)** But Python is powerful enough to take data inside your map and put it into a format anyone could read.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (3), this. (2), export, (1), case. (1)
> **Env Vars:** csv (9), qgis (2), utm (1), wkt (1), qgs (1)
> **CLI Commands:** python (4)
> **File Paths:** export_csv.py (1), layer.csv (1), text.csv (1)
> **Definitions:** is a  (2), is called (1)
> **UI Navigation:** drag and drop (1), go to (1)
> **Prerequisites:** install (1), set up (1)
> **Code Identifiers:** export_csv (1)

#### Filtering geometry
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=0)** - [Instructor] Next we're going to use Python to query a subset of the data so that we can report on that smaller area.
>
> **[0:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=8)** So first, we're going to bring in the water pipes into our current session.
>
> **[0:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=13)** Use the very first coordinate system, the UTM. Click OK.
>
> **[0:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=16)** Just to confirm, look down in the bottom right corner.
>
> **[0:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=19)** If you see EPSG 26910, we're okay.
>
> **[0:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=23)** If not, pick on the EPSG 26910 and change it to that.
>
> **[0:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=28)** Let's see here.
>
> **[0:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=28)** So here's all our water pipes.
>
> **[0:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=30)** I'm going to use the identify tool and have a look at one of these pipes.
>
> **[0:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=34)** You can see that we've got all sorts of things like the type and the material, and whether it's potable, and so on.
>
> **[0:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=39)** So I'm going to clear the identify results.
>
> **[0:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=42)** What I want to do is I want to query a subset of the pipes here.
>
> **[0:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=47)** If someone had sent me a polygon, asking how many pipes are in that particular area, it's actually downtown.
>
> **[0:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=54)** And how many are there?
>
> **[0:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=56)** So how long are they, and how many are there?
>
> **[0:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=58)** So let's do that.
>
> **[0:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=59)** So let's open up inside our Python console.
>
> **[1:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=62)** We'll open up the filter by polygon, and see how we would do that.
>
> **[1:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=67)** So I'm just going to make this a lot bigger so we can see the code inside.
>
> **[1:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=71)** The polygon they sent was basically a series of X,Y coordinates, X,Y, comma X,Y, comma X,Y, comma X,Y.
>
> **[1:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=82)** So what that means is that I've got coordinates that define a polygon of downtown.
>
> **[1:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=88)** Now this format is called well-known text.
>
> **[1:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=91)** That's why you see a polygon followed by two open parentheses and then close at the end.
>
> **[1:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=97)** You can see that, and then it's all in a string.
>
> **[1:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=99)** So the very first thing I do with this polygon is I convert it into a QGIS geometry type, and that's fairly easy.
>
> **[1:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=108)** Basically, I make a variable called G for geometry, and I say for the QGIS geometry type, convert it from well-known text.
>
> **[1:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=118)** And that's what I'm doing.
>
> **[1:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=118)** I'm saying G will be a polygon from the well-known text.
>
> **[2:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=124)** That's what the WKT is from above.
>
> **[2:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=126)** Now, I have this G.
>
> **[2:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=128)** G represents the geometry of interest, the area of interest that I want.
>
> **[2:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=132)** That's what that polygon looks like.
>
> **[2:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=135)** Now that we have the polygon of interest, let's get the layer we're working with.
>
> **[2:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=139)** In this case, it's the one we already dragged and dropped in, the water pipes.
>
> **[2:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=144)** So we get the instance of the project.
>
> **[2:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=146)** We get the map layers by name, water pipes.
>
> **[2:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=149)** We'll get the very first one we come across.
>
> **[2:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=151)** That's the square bracket, zero.
>
> **[2:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=153)** Very first one on the list, seen that before, and then we're going to get all the features on that layer.
>
> **[2:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=160)** So we basically say take the features from the water pipes layer and get them all.
>
> **[2:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=165)** Don't filter here, there is a way to filter based on attributes inside the QGIS feature requests, but I'm not doing that.
>
> **[2:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=172)** I'm not filtering based on attributes.
>
> **[2:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=174)** I'm going to be doing some spatial queries, so I'm just going to leave that alone for now.
>
> **[2:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=178)** There are ways to use the QGIS feature requests to do spatial queries, but we're going to focus on the geometry for now.
>
> **[3:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=186)** So what sort of information do I want?
>
> **[3:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=188)** Oh, I want the total length of pipe within the downtown and the total number of pipe segments.
>
> **[3:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=193)** Great, so I've created two variables and I set them to zero.
>
> **[3:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=197)** Now let's loop over all the features and see if they fall inside that polygon.
>
> **[3:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=202)** So the very first thing I do is say for F and features, so get all the features that I asked for in the water pipes and start looping over it.
>
> **[3:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=209)** Now we know it's going to loop over as long as the Python is indented.
>
> **[3:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=213)** You see there where it's indented?
>
> **[3:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=215)** Even here it's indented after an if statement.
>
> **[3:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=217)** So that means it's only going to loop for the indented part.
>
> **[3:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=221)** Once the code goes back right up against the edge here, that's the end of the loop.
>
> **[3:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=226)** So we're not going to do that.
>
> **[3:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=226)** So we're going to loop over all the features, and there's quite a few, so we're going to loop over them.
>
> **[3:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=232)** We'll get the geometry of each piece of pipe, and then here's the interesting part.
>
> **[3:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=236)** We say if, we have an if statement here, if the geometry of that piece of pipe intersects with that big polygon that someone asked me in the well-known text, do something.
>
> **[4:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=249)** If it does something, then the total length equals the total length plus the current length of pipe.
>
> **[4:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=256)** So the very first time through, the total length will equal zero plus the new length of pipe.
>
> **[4:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=261)** And it will do this as long as that piece of pipe falls inside the polygon, or at least intersects the polygon.
>
> **[4:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=268)** And then we also say the total pipe equals the total pipe plus one.
>
> **[4:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=272)** So we're going to add up how many pieces fall inside that polygon, and then when we're all done, the print statement down at the bottom, which will show up in the Python console here, I'll move that over so we can see it a little better.
>
> **[4:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=285)** They'll show up in the Python console.
>
> **[4:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=287)** We're going to get two items from this analysis.
>
> **[4:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=289)** We'll get the total length of pipe.
>
> **[4:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=291)** So you'll see the total of the pipe is, and the total length will show up here.
>
> **[4:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=294)** And then the total pipe segments, the total count.
>
> **[4:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=297)** So we'll know how many pieces fall inside that polygon that we've made up here.
>
> **[5:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=301)** Well, let's run this and see how that works.
>
> **[5:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=303)** So let's run the script, takes a moment, but then you see that the total length of pipe, 8,353 meters and a half.
>
> **[5:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=314)** And then your total, if there's 348 segments.
>
> **[5:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=317)** Again, this polygon, you can't see it here, is actually just in the downtown, and it covers 348 pieces of pipe.
>
> **[5:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=323)** Now, what if I wanted to round this?
>
> **[5:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=325)** And the great thing about Python is you can use all sorts of math tools, so in front of the total length, I can do something simple like this.
>
> **[5:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=331)** I can go round, in the autocomplete says round, number, and the number of digits.
>
> **[5:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=336)** So I'll put a comma and say, I want to only round it to one digit.
>
> **[5:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=339)** Now let's run this again.
>
> **[5:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=341)** I'll hit run script.
>
> **[5:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=345)** Invalid. Oh, I forgot a bracket.
>
> **[5:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=346)** See, it's very good at giving me invalid syntax because I'm doing a print and I need two brackets on the end or two round parentheses.
>
> **[5:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=353)** Let's run that again.
>
> **[5:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=355)** And there we go. It's 853.
>
> **[5:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=358)** Let's move that over a bit, point six.
>
> **[6:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=360)** 8,353 meters, 0.6 meters. Okay.
>
> **[6:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=365)** That's because I use the round, that's almost eight kilometers, 8.3 kilometers of pipe.
>
> **[6:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=370)** That's how long those pipes are that take up for that area, that's defined by the well-known text.
>
> **[6:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=376)** So you can see using a polygon, as we loop over each feature, we can do an analysis such as intersects between the polygon of interest and each piece of pipe that may fall within it.
>
> **[6:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/filtering-geometry?u=76281980&t=390)** This is a very powerful way to use Python to do analysis of utilities inside QGIS.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), type, (2), case, (1), if, (1), this. (1)
> **CLI Commands:** python (7), make (2)
> **Env Vars:** qgis (5), epsg (2), utm (1), wkt (1)
> **Definitions:** is a  (2), is called (1)
> **Versions:** 0.6 (1), 8.3 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Drawing new geometry
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=0)** - [Instructor] In this video, we're going to use Python to draw points, lines, and polygons into our map.
>
> **[0:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=7)** So first let's add a city limit shapefile to give us some context of where these new polygons and lines are going to be drawn.
>
> **[0:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=15)** The city limit here that I just dragged and dropped, I may make it more transparent in my symbology.
>
> **[0:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=20)** So I'm going to set the opacity to about 25%.
>
> **[0:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=26)** There we go. So it's not so dominant.
>
> **[0:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=28)** So I dragged and dropped city limit and I made the opacity about 25%.
>
> **[0:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=32)** This sets me up so that when I draw features it's not dominated by this polygon in the background but I wanted the city limits in the background so I can see where I am and also to show that I'm still in this same EPSG:26910 coordinate system.
>
> **[0:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=48)** First let's draw a point.
>
> **[0:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=50)** So in the Python console, and move this over a little bit, I'm going to open the drawPoint.py file found under the Python under 3 Geometry Handling.
>
> **[1:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=62)** Let's go ahead and open that up.
>
> **[1:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=64)** And I'm going to make this a little bit bigger so we can see what we're doing.
>
> **[1:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=67)** The very first thing I do is actually draw a point using well-known text.
>
> **[1:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=72)** It's very clear to see what it is because you could see that it's a point and two round brackets or parentheses, and then the X and the Y of the point location.
>
> **[1:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=83)** Now I know these coordinates were actually drawn using UTM so those are in meters.
>
> **[1:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=88)** Now this could be a latitude, longitude or longitude, latitude, depending, but in this case I'm using the same coordinate system that the city limits are in.
>
> **[1:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=97)** Then I get the geometry of that point.
>
> **[1:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=100)** I say QgsGeometry from the well-known text above create that point.
>
> **[1:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=107)** So G now becomes a geometry, a point geometry, that I can use in my map.
>
> **[1:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=114)** Before I go any further I actually have to draw a layer.
>
> **[1:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=117)** Now I have two ways of drawing this.
>
> **[1:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=119)** I could put this permanently into a new layer, such as an existing shapefile or something, but in this case I'm just going to put a layer in memory, sort of a sketch area.
>
> **[2:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=129)** And to do that, I say the point layer is a new vector layer and there's a really neat syntax for letting them know that not only is this going to be a new point layer, but I'm going to tell what coordinate system it is with a little hashtag.
>
> **[2:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=145)** The hashtag or the question mark parameter allows me to say that the EPSG:26910 is the coordinate's reference system.
>
> **[2:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=155)** So now that when I create a brand new layer, it'll know what coordinates system it's in.
>
> **[2:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=159)** I'm going to call it Point Layer and the third item here says memory.
>
> **[2:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=165)** So this is in the memory of my current session that means when I close, it'll be gone.
>
> **[2:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=170)** It's a temporary layer that I'm creating.
>
> **[2:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=172)** This is just for creating a new layer for like a scratch pad that I can use.
>
> **[2:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=177)** The next thing I do is create a data provider, so pr, provider.
>
> **[3:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=181)** Once I have the data provider I can add things to it like geometries and columns and that sort of thing.
>
> **[3:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=186)** Now I'm not adding any columns, I'm not creating any IDs or other types of columns, I could do that at this point, but I'm only interested in the geometry.
>
> **[3:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=196)** So I'm going to say the feature or feat is a Qgs feature and then I'm going to add a geometry to that feature.
>
> **[3:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=202)** So I'm creating a feature that goes on that point layer and I'm going to set the geometry to G, that's up there.
>
> **[3:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=211)** So I'm going to say, create a new feature, a Qgs feature, and set the geometry to G.
>
> **[3:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=216)** So now I have this feature.
>
> **[3:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=218)** It's not on the layer yet, but I have a feature.
>
> **[3:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=221)** But then I could say, okay, take the data provider and add that feature to it.
>
> **[3:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=228)** Just be very careful here when you add the features, it's a list, so you have to put them in square brackets.
>
> **[3:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=236)** So if you were to put feat in there without the square brackets you'd get an error.
>
> **[4:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=240)** So we're going to say to the data provider, add the feature.
>
> **[4:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=244)** And then we say the point layer update the extent so it refreshes everything and then we add to the current project that layer called point layer.
>
> **[4:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=255)** So let's run this and see how this all works.
>
> **[4:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=258)** So we hit Run Script and sure enough there's our new point layer.
>
> **[4:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=265)** Now that's a temporary layer and it has no data.
>
> **[4:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=268)** So for example, if I pick on it and try to identify features for that, you'll see there's no data in the Identify Results 'cause I didn't add any, it's just the geometry.
>
> **[4:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=278)** Now, if I wanted to run this again, what I could do is I could change the location.
>
> **[4:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=283)** For example, maybe I want to put this a little bit higher, maybe up to 90, so put it quite a few meters above it and I run this again.
>
> **[4:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=290)** What will happen is that I'll create a whole other point layer and put the location quite a few meters above.
>
> **[4:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=299)** Let's do it a third time.
>
> **[5:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=300)** This time I'll make it quite a bit.
>
> **[5:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=302)** I'll make it, let's say 990 and then run it again.
>
> **[5:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=305)** I'll get a third layer drawn and I'll get a third point drawn even higher up.
>
> **[5:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=312)** So each time I do that.
>
> **[5:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=313)** So I could have code in there to check to make sure that there's not an existing point layer and remove it.
>
> **[5:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=318)** But right now this code gets the point and well-known text, creates a geometry, it gets the point layer creates a data provider, takes the feature, sets the geometry, adds the features to the provider and then updates the extent and adds that to the layer.
>
> **[5:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=338)** So it's a very powerful way of adding points to your map.
>
> **[5:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=343)** Let's start a brand new project.
>
> **[5:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=346)** Yes, I will discard this, close that Python.
>
> **[5:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=351)** So let's start again.
>
> **[5:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=352)** We'll add the Sydney limit again for context, again hit OK for UTM and it's still quite bright so I'm just going to, again, tweak the opacity down to about 25.
>
> **[6:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=365)** There we go.
>
> **[6:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=367)** That's fine.
>
> **[6:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=368)** And this time we're going to open another Python file and we're going to add, drawLine.py.
>
> **[6:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=375)** Now this is almost identical to the add the point but this time the well-known text shows a line string.
>
> **[6:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=382)** So we've got X and Y and then the end X and Y.
>
> **[6:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=385)** So it's a straight line.
>
> **[6:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=387)** And then we get the geometry, we create a line there.
>
> **[6:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=390)** This time It's a line string, not a point.
>
> **[6:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=393)** Now that line string, you noticed the type of layer it is line string matches the exact wording of the well-known text.
>
> **[6:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=402)** Again, I'm using these parameters saying what court system it's in.
>
> **[6:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=407)** It's going to create a temporary layer called line layer in memory.
>
> **[6:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=411)** I get the data provider, I add a new feature, I set the geometry to that feature, I add that feature to the data provider and then I update the line layer extents and then I add that line layer to the instance.
>
> **[7:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=428)** Let's run that and see what that looks like.
>
> **[7:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=431)** And sure enough, there's a line layer.
>
> **[7:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=435)** I'm not going to clear out this time, I'm going to open up the drawPolygon directly now Python.
>
> **[7:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=444)** So let's look at that.
>
> **[7:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=445)** And again, this is almost identical to the last two you saw, except we're using the well-known text as a polygon and the type of layer it is is a polygon.
>
> **[7:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=457)** You saw before that the well-known text was a line string and the vector layer was a line string whereas this polygon, the only difference is we have a polygon well-known text and polygon vector layer.
>
> **[7:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=470)** Again, the EPSG is still 26910.
>
> **[7:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=473)** The one thing about well-known texts with polygons you'll notice the polygons always have two parenthesis at the beginning and ending of the polygon.
>
> **[8:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=480)** So if you look at the very end there's two as well.
>
> **[8:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=483)** Whereas point and lines only have one.
>
> **[8:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=485)** It's an interesting thing to note.
>
> **[8:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=487)** Okay, so we're going to put this on the polygon layer in memory again.
>
> **[8:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=492)** Again, we get the polygon data provider, we create the feature, we set the geometry of the feature, we add features to the data provider, remember, square brackets, we update the extents and then we add the polygon layer.
>
> **[8:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=504)** Let's run that now.
>
> **[8:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=506)** There we are.
>
> **[8:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=508)** So now you can see we've got the polyline there, the polygon layer.
>
> **[8:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=513)** In fact, just for fun, I'm going to open up the drawPoint again.
>
> **[8:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=518)** There it is, and run that as well.
>
> **[8:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=520)** And there's the point.
>
> **[8:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=521)** So now you can see I've got a point layer, a polygon layer and a line layer all using Python.
>
> **[8:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/drawing-new-geometry?u=76281980&t=528)** Almost identical techniques, the only difference is I'm just changing the well-known text and the different types of temporary layers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (1), this, (1)
> **CLI Commands:** python (7), make (5)
> **Env Vars:** epsg (3), utm (2)
> **Code Identifiers:** drawpoint (2), drawline (1), drawpolygon (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), such as (1)
> **File Paths:** drawpoint.py (1), drawline.py (1)
> **Ports:** :26910 (2)


### 4. Importing DWG and DXF

#### Manually importing DWG
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=0)** - [Instructor] In this video we're going to import a DWG into our project.
>
> **[0:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=5)** First pick Project, Import/Export, and choose Import Layers from DWG/DXF.
>
> **[0:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=15)** The very first thing we need to do is create a target package.
>
> **[0:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=19)** In the process of importing a DWG or DXF into our QGIS project, we need to create a GeoPackage.
>
> **[0:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=25)** This is storage to store all the data that comes in from the DWG such as lines, points, and polygons.
>
> **[0:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=33)** It's all stored within one particular file.
>
> **[0:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=36)** It's called a OSG GeoPackage.
>
> **[0:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=39)** These GeoPackages are great because you can transfer them from user to user and it keeps track of all the data within it.
>
> **[0:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=45)** So first of all let's create a brand new one.
>
> **[0:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=48)** The extension for the GeoPackage is gpkg and we're just going to call this one "import", import.qpkg and we're just going to put it on the desktop in this case.
>
> **[1:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=61)** So now that we have a target package where we're going to put the data importing from the DWG, we now have to set the CRS, the coordinate system.
>
> **[1:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=70)** So I'm going to hit Select CRS.
>
> **[1:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=72)** In this case I'm choosing the one I've used in the past, the NAT83/UTM zone 10.
>
> **[1:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=77)** For this particular map you can see there's a red zone in the map showing where this particular data is.
>
> **[1:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=83)** You can see it's on the west coast.
>
> **[1:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=85)** We can do that so we choose 2619 and hit OK.
>
> **[1:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=89)** So the first step we did was the target package, the second step was the CRS, that's done.
>
> **[1:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=94)** Now we have to pick the import.
>
> **[1:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=97)** So pick Import and browse to our desktop, go into the exercise files, in 4 Importing DWG, under data, we're going to import the PARCELS2013, NANAIMO_PARCELS2013.
>
> **[1:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=112)** The reason we're choosing 2013 is that I have saved this DWG in an AutoCAD 2013 format.
>
> **[2:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=120)** The reason I did that is at this time QGIS cannot import the most recent which is the 2018 format.
>
> **[2:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=128)** So I had to save one version back to 2013 in order to import this DWG.
>
> **[2:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=134)** So let's choose that.
>
> **[2:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=136)** Now one more thing, it's going to be importing all the entities so it goes through all the text, all the lines, all the blocks and so on.
>
> **[2:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=143)** As it does that you'll see the list of entities that are being processed in the top.
>
> **[2:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=148)** Now you can expand block references.
>
> **[2:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=150)** Now there's no blocks in this particular drawing, but if there were what it does is it basically is the same as hitting Explode Blocks.
>
> **[2:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=157)** Now the term "explode" is an AutoCAD term.
>
> **[2:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=160)** In this case we're sating expand block references.
>
> **[2:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=163)** What that means is it takes block, which is in GIS would just be a symbol, and explodes it into it's component parts.
>
> **[2:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=170)** Normally you'd want that block to stay a symbol or a point.
>
> **[2:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=174)** The other check box you'll see is Use curves.
>
> **[2:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=177)** That means use the arcs within the drawing.
>
> **[3:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=180)** So then we have to say what layers we want to import.
>
> **[3:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=183)** In this case we're going to bring in 0 and PARCELS.
>
> **[3:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=187)** Let's uncheck Defpoints, we don't want that but we want 0 and PARCELS, let's bring that in.
>
> **[3:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=193)** Because I think there are some text on the 0 layer.
>
> **[3:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=196)** Before I can hit OK I have to give a group so I'm just going to call this PARCELS.DWG.
>
> **[3:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=204)** So that will appear in my layer legend and 0 and PARCELS will show up.
>
> **[3:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=209)** So let's hit OK.
>
> **[3:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=212)** And there are my PARCELS.
>
> **[3:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=216)** And if you zoom in you can see the text.
>
> **[3:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=219)** Let's expand the group called PARCELS.DWG and you can see there's two layers.
>
> **[3:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=223)** Now I can rename that 0 to something like PID text like that.
>
> **[3:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=233)** 'Cause that's what it is, I just renamed that particular layer and then there's test underneath it.
>
> **[3:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=238)** Now absolutely this test is points that have been labeled so it looks really close to what's in the DWG itself.
>
> **[4:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=246)** And you can see they stay the same size as you zoom in.
>
> **[4:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=249)** In fact they disappear until you zoom and see that.
>
> **[4:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=251)** So each of these pieces of text, these PIDs, that's the PID for each object.
>
> **[4:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=256)** Now if I were to pick on any of these objects you can see, if I hit Identify, you can see the data about that, you can see that's a piece of text, what layer it's on and so on.
>
> **[4:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=270)** So it's extracting all the data from AutoCAD.
>
> **[4:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=273)** So if we pick on one of the lines as well, oh, let's make sure polylines are highlighted, there we are.
>
> **[4:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=280)** So you can see that I've picked the polyline, there it is, and you can see thickness, the visibility, transparency, the color from AutoCAD, the layer it was on and so on.
>
> **[4:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=292)** And whether it was a block or not.
>
> **[4:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=294)** You can even see the AutoCAD handle.
>
> **[4:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=296)** So that's very powerful.
>
> **[4:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=297)** So let's close Identify.
>
> **[5:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=300)** There you go so you saw that I picked, let's pick on texts again.
>
> **[5:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=303)** You can see there's the identify results with text.
>
> **[5:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=306)** Highlight polylines, click on the polyline, and there you are, you can see the data.
>
> **[5:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=310)** Now this data originally had object data.
>
> **[5:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=314)** Now object data is an AutoCAD map or a Civil 3D term.
>
> **[5:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=318)** I had to strip it away otherwise QGIS would not be able to import it.
>
> **[5:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=322)** So there's no object data on this, it's just basically a piece of text and a line imported from the DWG.
>
> **[5:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=328)** So remember the DWG has to be in 2013 and it does not have any object data on it.
>
> **[5:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=334)** Also, even though these P lines are closed they came in as a line and not as a polygon.
>
> **[5:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=343)** Later on we'll learn how to take these closed P lines and turn them into polygons within QGIS.
>
> **[5:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/manually-importing-dwg?u=76281980&t=348)** But this process of importing through the Project Import/Export is the only way currently to get DWGs into your project.

> [!info]- Semantic Content
>
> **Env Vars:** dwg (13), parcels (6), qgis (4), crs (3), dxf (2)
> **Code Keywords:** let (9), import. (3), export, (1), case. (1), this, (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Using Python to import DXF
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=0)** - [Instructor] In this video, we're going to use Python to load a DXF directly into our QJS project.
>
> **[0:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=6)** Unlike DWGs that needs to be translated, DXF's can be brought in directly, usually based on entity type, such as point line and polygon.
>
> **[0:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=15)** We're going to bring in the nanaimo buildings 2013 DXF file.
>
> **[0:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=20)** But first we need to open up the Python console and open up the Python file.
>
> **[0:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=25)** It's found under exercise files importing DWGDXF Python.
>
> **[0:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=30)** So let's choose load dxf.py.
>
> **[0:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=34)** It should appear down in your Python console.
>
> **[0:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=37)** The first thing we need to do is set the DXF variable.
>
> **[0:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=41)** I just made it up, it could be anything you wish, but I'm calling it DXF in this case, and I have a full path to my desktop to my exercise files for importing DWGDXF under the data folder, and it's called nanaimo buildings 2013 DXF.
>
> **[0:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=57)** You can see that in my browser up above.
>
> **[1:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=60)** You'll notice that I have double backslashes between each of the paths for windows, and it's also on my C drive.
>
> **[1:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=67)** You may have installed the data somewhere else.
>
> **[1:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=69)** So be sure to change that path.
>
> **[1:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=72)** Most layers in QGIS are defined by their geometry type, point lines, polygons, raster, and so on.
>
> **[1:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=78)** And that is the same when you're adding a DXF to your project.
>
> **[1:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=82)** So you can only add that DXF per layer type.
>
> **[1:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=86)** So we can connect to the same DXF three or four times if it has points, lines and polygons within it.
>
> **[1:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=92)** This particular DXF only has buildings, and they are line strings.
>
> **[1:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=97)** They're close line strings, but they're line strings.
>
> **[1:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=100)** So you'll see in the DXF info you have pipe, layer name equals entities, which 99% of time it is, and pipe geometry type is line string.
>
> **[1:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=108)** My options are polygon and point as well, but in this case, it's a line string.
>
> **[1:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=113)** Let's bring this together.
>
> **[1:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=115)** I add a brand new layer using the QGS vector layer.
>
> **[1:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=118)** I combine using a plus sign the DXF and the DXF info.
>
> **[2:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=123)** So that becomes the first part of my vector layer.
>
> **[2:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=126)** I'll add it as a building's layer, it'll show up in my layers as buildings.
>
> **[2:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=130)** And is it LGR data connection, that's the kind of connection to vector types, such as DXF or shape and so on.
>
> **[2:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=137)** Before I actually add that to the project, I want to make sure my coordinate system is set for that particular layer.
>
> **[2:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=144)** So I get the existing layer coordinate system.
>
> **[2:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=147)** And it may be blank in this case, but at least I have an instance of it by saying get the layers CRS.
>
> **[2:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=154)** Then I basically create a new CRS or definition as two, six, nine, 10.
>
> **[2:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=161)** That's the UTM zone 10 that I've been using all along.
>
> **[2:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=164)** And then I set that layer CRS from that ID.
>
> **[2:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=169)** And therefore, when I go to add this layer, it knows what coordinate system it's in.
>
> **[2:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=174)** Now, if you don't do these three lines, line five, six and seven, you'll add the layer and it won't know what coordinate system it's in, it'll assume the current project coordinate system.
>
> **[3:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=184)** And that case, you can look down here, it's four, three, two, six, which is lat long 84.
>
> **[3:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=190)** The final step is get an instance of the project and add a layer called layer.
>
> **[3:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=195)** It's how we define the DXF layer above.
>
> **[3:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=198)** So let's run the script and see what happens.
>
> **[3:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=203)** So it's going off reading the OGR, setting the coordinate system, and loading the data.
>
> **[3:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=208)** So if I zoom into my project, you'll see all the buildings for nanaimo there they are, make sure I've highlighted that layer, pick on identify.
>
> **[3:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=220)** And there we are.
>
> **[3:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=221)** You can see it's on the layer called buildings.
>
> **[3:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=223)** It's none paper space, and so on.
>
> **[3:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=226)** I have an entity handle.
>
> **[3:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=228)** I don't have any text and you could tell it's an ACDB polygon.
>
> **[3:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=231)** That's the code inside of AutoCAD to tell you what kind of object that particular line is.
>
> **[3:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=237)** Okay, let's call this the identify.
>
> **[4:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=240)** And there we are.
>
> **[4:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=241)** So you've seen using Python, we can directly attach DXF files into our project without any sort of translation.
>
> **[4:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=251)** All we have to define is, where the file is, what the layer name is, all it's entities or the geometry type is for this particular layer, line string, then we add it to the map, set the coordinate system, and then add it to the instance.
>
> **[4:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=265)** And you'll see your buildings coming in directly from a DXF.
>
> **[4:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-python-to-import-dxf?u=76281980&t=269)** So we're actually using AutoCAD DXF files to render graphics inside of your QGIS project.

> [!info]- Semantic Content
>
> **Env Vars:** dxf (18), crs (3), dwgdxf (2), qgis (2), qjs (1)
> **Code Keywords:** let (4), case, (4), type, (2), else. (1), type. (1)
> **CLI Commands:** python (6), make (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** such as (2)
> **File Paths:** dxf.py (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Converting lines to polygons with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=0)** - [Instructor] Next, we're going to look at how to convert polylines into polygons.
>
> **[0:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=6)** After importing DXF or DWGs into your project, you'll find that even in closed P lines, now a closed p-line is a polyline that closes in on itself, is treated at a polyline and not as a polygon, even though AutoCad users often refer to polygons by the closed p-line object.
>
> **[0:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=27)** So in our Importing DWG/DXF folder, right at the root of that, we have a geopackage called Important_Complete.
>
> **[0:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=37)** In there, we have some polylines.
>
> **[0:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=40)** Just drag and drop that into a new project.
>
> **[0:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=44)** You'll notice right away you'll have polylines showing up.
>
> **[0:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=47)** It's the downtown area of Parcels.
>
> **[0:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=50)** And you'll see the coordinates system automatically changed to EP62910, so we're in the right coordinates system.
>
> **[0:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=56)** This is in meters.
>
> **[0:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=58)** And this is the downtown section of the city.
>
> **[1:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=60)** What I want to do is to be able to convert these polylines into polygons.
>
> **[1:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=66)** So I'm going to actually take this polylines that are coming from that geopackage and create a brand new shape file of closed polygons rather than having these closed p-lines.
>
> **[1:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=76)** So let's open up inside our PYTHON console under Importing DWGDXF in the PYTHON folder, we have a Lines to Polygons PY file.
>
> **[1:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=86)** Let's open that up.
>
> **[1:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=88)** I'm just going to move this over so we can see it a little better.
>
> **[1:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=91)** So you'll see right here I put import processing, that's the processing engine.
>
> **[1:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=96)** You may not need this.
>
> **[1:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=98)** I've added it just in case because I think the processing is automatically added, that library, but I just wanted to be sure.
>
> **[1:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=105)** We'll take that out after just to check if it's required or not, but I like to get into the habit now if I'm going to be doing processing and using processing engines to bring in that library into my PYTHON.
>
> **[1:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=116)** Okay, so then we say, the polylines will be inside of the import complete geopackage, and the layer name is polylines.
>
> **[2:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=126)** Now, where did this big long string come from?
>
> **[2:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=128)** Well actually, if you right-click on the polylines and look at its properties and go into the information, you can see the source right here.
>
> **[2:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=136)** I could actually copy and paste the source of those polylines.
>
> **[2:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=139)** You could see the full path of where the geopackage is, and you'll see a pipe, that's an up and down bar, and then the layer name that equals polylines.
>
> **[2:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=148)** And that's how I got that.
>
> **[2:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=149)** So you can copy that.
>
> **[2:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=150)** But the only difference is I have to put double backslashes or forward slashes to escape any of those characters so I can fully get that path.
>
> **[2:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=159)** Now where am I going to put the polygons when I'm done?
>
> **[2:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=161)** I'm going to put them right on my desktop.
>
> **[2:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=163)** So here's the path to my desktop, yours obviously will be different.
>
> **[2:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=167)** And then I'll just call it parcels.shp.
>
> **[2:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=169)** And that'll just put that on my desktop.
>
> **[2:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=171)** And then well I get to actually run a process.
>
> **[2:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=173)** The process is called the lines to polygon tool.
>
> **[2:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=177)** Now this exists under processing, so if I go to Vector, Geometry Tools, there actually is a Lines To Polygons tool right here.
>
> **[3:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=186)** That's what that is, Lines To Polygons.
>
> **[3:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=188)** And then I could look at the input.
>
> **[3:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=190)** All input is the polylines up above.
>
> **[3:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=192)** And the output will be the polygons right there to the shape file.
>
> **[3:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=196)** And then once that's processed, I want to add that Parcel layer, the polygon shape file, to my current session.
>
> **[3:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=203)** So let's try this out.
>
> **[3:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=204)** We're going to run this script and see what happens.
>
> **[3:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=207)** So it does the processing, does the analysis, and then adds that new Parcels layer.
>
> **[3:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=213)** So that Parcels you can see if I hover, it's on my desktop, it's Parcels shape, if I used identify tool I'll highlight that layer and use identify, and I pick on one of these Parcels.
>
> **[3:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=226)** You can see, oh there's a few, let's zoom in and just pick on one.
>
> **[3:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=229)** There's one there.
>
> **[3:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=230)** And you can see, yup, the layer is Parcels it's got all the data that came from the imported DWG.
>
> **[3:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=236)** But now I have this shape file with all these columns in it and all sorts of information about that shape file that came from AutoCad.
>
> **[4:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=244)** So I've done the full cycle.
>
> **[4:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=245)** I've imported DWG data into this geopackage, then using this processing tool, I converted those closed p-lines, I'll turn off the Parcel so you can see that and highlight them, these closed p-lines into polygons using this tool, and then I added that new polygon shape file back into my project.
>
> **[4:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=267)** So at this point, I could save my project or so on.
>
> **[4:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=270)** Now, this is an excellent way to have the full cycle from DWG imported into my project and then take those closed p-lines and make them into proper polygons.
>
> **[4:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/converting-lines-to-polygons-with-python?u=76281980&t=281)** And I'm doing all this with PYTHON.

> [!info]- Semantic Content
>
> **Env Vars:** dwg (4), python (4), dxf (2), ep62910 (1), dwgdxf (1)
> **CLI Commands:** python (4), find (1), make (1)
> **Code Keywords:** let (4), this. (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **UI Navigation:** drag and drop (1), right-click (1), go to (1)
> **Speakers:** - [instructor] (1)


### 5. Creating Plugins

#### Installing Plugin Builder
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=0)** - [Instructor] In this video, we're going to install the plugin builder as a plugin into our QGIS project.
>
> **[0:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=6)** So, let's go into Plugins.
>
> **[0:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=8)** Manage and Install Plugins.
>
> **[0:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=11)** And search for plugin builder, so just type at the top, plugin builder, and you should see Plugin Builder 3.
>
> **[0:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=20)** If you don't see it, let's just clear that.
>
> **[0:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=22)** Make sure you go to All, not Installed, 'cause this will just show what is installed right now, but if you click on All and type plugin builder, you should see Plugin Builder 3.
>
> **[0:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=35)** Highlight that and choose Install Plugin.
>
> **[0:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=40)** So, once it's installed, it should show up under the plugins.
>
> **[0:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=47)** There.
>
> **[0:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=48)** When it's plugged in, you'll see Uninstall Plugin, or Reinstall Plugin.
>
> **[0:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=51)** That means Plugin Builder 3 is now installed, so let's close that.
>
> **[0:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=55)** If we look under Plugins you'll see Plugin Builder, and we can actually open it up.
>
> **[1:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=61)** And there, that just shows that it's actually installed and working correctly.
>
> **[1:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=65)** Now, where did this plugin go when we installed it?
>
> **[1:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=68)** Well, we can find out where the plugins go simply by going into Settings, User Profiles, and Open Active Profile Folder.
>
> **[1:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=78)** So, actually it's going into my Users, my profile, Gordon Luckett, AppData, which is a secret folder inside of Windows.
>
> **[1:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=87)** Normally if you go there you won't see that, but if you type AppData it will appear.
>
> **[1:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=92)** Then you'll see QGIS, QGIS3, profiles, default.
>
> **[1:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=97)** Now, where the plugins go are under another directory called python, so let's go in there.
>
> **[1:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=102)** So, now we're getting pretty deep now.
>
> **[1:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=105)** And one more step is plugins, and you'll see, sure enough, there's the pluginbuilder3.
>
> **[1:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=111)** And inside there you'll see all the files that make up a plugin.
>
> **[1:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=116)** And most of these are just the UI, so the interface, as well as the actual file itself, the dialogue python, you'll see a lot of python in there.
>
> **[2:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=128)** What's interesting is there's an icon.png, that in the background is the icon, let's go back and look at that.
>
> **[2:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=135)** Under Plugins, that icon PNG is that little hammer right there, so we can change that if we want to by changing the icon in that sub-folder.
>
> **[2:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=144)** But that's how you install a plugin, and the plugin builder itself.
>
> **[2:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=149)** So, we've successfully installed the Plugin Builder, version 3, and we're going to be using this in the next video to build a template of a plugin.
>
> **[2:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/installing-plugin-builder?u=76281980&t=158)** So, this is the best way to create plugins because it actually writes all the code you need, then it's up to you to fill in all the Python code to make an effective plugin.

> [!info]- Semantic Content
>
> **CLI Commands:** python (4), make (3), find (1)
> **Code Keywords:** let (5), default. (1), interface (1)
> **Env Vars:** qgis (2), qgis3 (1), png (1)
> **Prerequisites:** install (4)
> **UI Navigation:** go to (1), click on (1)
> **Versions:** version 3 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)

#### Using the Plugin Builder
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=0)** - [Narrator] Next we're going to use the plugin builder, to build the shell, of our plugin that we're going to be building later on.
>
> **[0:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=6)** So first let's go under plugins, plugin builder, and plugin builder.
>
> **[0:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=12)** And there's a plugin builder three, two, one.
>
> **[0:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=15)** The class name, we're just going to call it save DXF.
>
> **[0:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=19)** So what this plugin is going to do eventually, is be able to choose from a dropdown list of the current layers in your project, choose one, and then be able to save it as a DXF file.
>
> **[0:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=31)** So that layer can be exported individually as a DXF file, so that you could open it within the QGIS project, or any other products such as AutoCAD.
>
> **[0:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=42)** So I'm going to call this class name and plugin name both, save DXF with an underscore.
>
> **[0:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=49)** And I'll just say this DXF exports a layer to DXF.
>
> **[0:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=58)** And I'll just call it, save DXF, keep it.
>
> **[1:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=60)** Consistent all the way through.
>
> **[1:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=62)** We'll leave the version 01, that's fine.
>
> **[1:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=65)** Minimum QGIS, yes this was written for three, the company, I'll just say LinkedIn learning, and well, you can contact me at, contact@[carrowgeo.com](https://carrowgeo.com) That's my email.
>
> **[1:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=81)** And so the first page is good.
>
> **[1:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=82)** So basically the class has saved DXF.
>
> **[1:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=85)** The plugin name is, save DXF.
>
> **[1:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=87)** We've got a module and description.
>
> **[1:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=89)** That's great, we've got, save DXF we've got the author, email address.
>
> **[1:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=93)** Let's go next.
>
> **[1:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=95)** This is just a about page that pops open.
>
> **[1:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=99)** So we could just say, this plugin allows you to choose a layer in your QGIS project, and export it as a DXF file.
>
> **[1:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=117)** There we go.
>
> **[1:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=118)** So that's the about, click next.
>
> **[2:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=123)** We have three templates, a tool button with a dialogue box, a tool button with a docking widget, or just a processing provider.
>
> **[2:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=130)** So it actually does the process.
>
> **[2:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=132)** We're going to use the first template, which is the tool button with a dialog box.
>
> **[2:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=137)** The item will say, export layer to DXF.
>
> **[2:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=144)** That will be the item that you'll see in the menu, but what menu should it be under?
>
> **[2:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=148)** Should it be under the plugins?
>
> **[2:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=149)** You can see plugins at the top, or under database, or roster, or vector or web.
>
> **[2:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=155)** We're going to actually choose vector dropdown box, under the QGIS project inside the interface, so you'll be able to get to export layer to DXF under the vector dropdown.
>
> **[2:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=165)** That's where this plugin will be put when it's set up.
>
> **[2:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=169)** Okay, so we know where it's going to be put, under vector, we know what is called, export layer to DXF.
>
> **[2:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=175)** Let's go next.
>
> **[2:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=177)** And sure, put in all the scripts and helps and all that in.
>
> **[3:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=180)** We'll just leave all that together, and we'll leave the internationalization in their, help and all the unit tests.
>
> **[3:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=186)** It'll create folders and files for all of those things.
>
> **[3:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=189)** I'm going to leave the bug tracker repository and leave that all alone.
>
> **[3:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=193)** I'll leave the tags.
>
> **[3:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=194)** Probably could add more tags here, but I'm just going to leave all these bug trackers, repositories, all these just default for now, and then we'll go next.
>
> **[3:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=203)** And where's it going to be saved?
>
> **[3:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=205)** Well, I'm just going to put it on my desktop for now, it'll be put into a folder called save DXF, and from there we can move it to the plugins folder and install it later.
>
> **[3:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=215)** But right now I'm only interested in building this empty shell of a plugin.
>
> **[3:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=220)** So let's do that.
>
> **[3:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=221)** Let's hit generate.
>
> **[3:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=225)** You may get this error.
>
> **[3:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=227)** It says, unable to compile into a QRC file.
>
> **[3:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=231)** Now what that does, it turns a Python into a QRC.
>
> **[3:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=233)** Now this is a file, the QRC keeps track of all the files, and their relative paths within the project.
>
> **[4:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=240)** We're going to in the next video, manually compile this QRC, this resources QRC, because it couldn't find the compiler.
>
> **[4:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=248)** We're going to manually create a batch file, to make this resources QRC so that we can build our plugin.
>
> **[4:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=254)** So don't worry about this command right now.
>
> **[4:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=257)** We don't have all the data set up, and all the compilers set up.
>
> **[4:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=260)** We're going to do that in the next video, but for now, we'll hit okay.
>
> **[4:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=264)** And here's the results.
>
> **[4:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=266)** You'll see that the DXF was created in the, save DXF.
>
> **[4:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=270)** You can see that, this is where you'll put the plugins eventually under your user, your app data roaming QGIS, QGIS 3, profiles default Python plugins.
>
> **[4:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=282)** Eventually we'll copy the save DXF to that directory, when it's time to start building it, and customizing it.
>
> **[4:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=288)** But for now, let's leave it on the desktop where we'll be altering it.
>
> **[4:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=292)** Okay, so we click, Okay.
>
> **[4:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=293)** And now if we look at our desktop, we should have a new folder called save DXF, and there it is.
>
> **[5:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=300)** Now the most important files in the save DXF.
>
> **[5:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=304)** The first thing is the icon.
>
> **[5:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=306)** So normally this is this a little 24 by 24 pixel file or 23 by 24 in this case, and the default, I'm just going to open that up and show you, whenever you build a plugin using this tool, it'll put a little plug.
>
> **[5:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=320)** Now, we don't want to use that one.
>
> **[5:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=321)** So what I'm going to do, is I'm going to go into our exercise files, we're going to go and creating plugins, and I'm going to copy and paste the icon, which looks like this.
>
> **[5:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=332)** It's just a little DXF icon.
>
> **[5:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=335)** And we're going to copy and paste that, into our brand new save DXF folder.
>
> **[5:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=340)** Just paste that in there, replace the file in there.
>
> **[5:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=343)** So it'll replace that yellow icon, with a customized icon that we had from our exercise files, creating plugins.
>
> **[5:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=350)** That's the first thing I want to do.
>
> **[5:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=352)** And then I just want to point out, that there's the save DXF dialogue base UI, and then there's the save DXF PY.
>
> **[6:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=362)** So these two files, the base UI and the PY, are the ones we'll be using to customize the interface later on.
>
> **[6:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=371)** So we'll be using the UI and we'll be using the PY later, but we're going to have to compile the resources QRC, in order to get this going.
>
> **[6:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=380)** So we'll wait to the next video.
>
> **[6:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-the-plugin-builder?u=76281980&t=381)** We'll create a batch file to generate the QRC, and then we can start customizing.

> [!info]- Semantic Content
>
> **Env Vars:** dxf (24), qrc (8), qgis (6)
> **Code Keywords:** let (6), interface (2), module (1), case, (1), default, (1)
> **CLI Commands:** python (2), find (1), make (1)
> **UI Navigation:** dropdown (3), in the menu (1)
> **Prerequisites:** set up (3), install (1)
> **Cross-References:** in the next (2), next video (1)
> **Exercise Files:** exercise files (2), template (1)
> **Definitions:** is called (1), is a  (1)

#### Create a batch file to load Python bindings
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=0)** - [Instructor] In this video we're going to modify the plugin template that we created in the last video.
>
> **[0:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=5)** We're going to modify the save.dxf, that's on your desktop.
>
> **[0:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=10)** And we're going to compile the resources.qrc file into a Python file.
>
> **[0:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=17)** After we run the batch file, we will end up with a resources.py file that's what's going to happen.
>
> **[0:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=23)** So let's do that.
>
> **[0:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=24)** So first of all, let's go into exercise files, go under five, creating plugins and under batch, there's a make resources.bat.
>
> **[0:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=35)** Let's copy that.
>
> **[0:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=38)** And then we'll paste it into the save.dxf folder.
>
> **[0:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=44)** Okay. Now let's go into the save.dxf folder.
>
> **[0:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=47)** Remember this was created by using the plugin builder, and now we have the make resources.bat.
>
> **[0:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=54)** Let's look at that file just right click and go edit.
>
> **[0:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=57)** I'm using notepad, just plain old notepad to look at this.
>
> **[1:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=60)** And so we have echo off, so it doesn't spit out to the dos window and we're setting three batch files.
>
> **[1:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=67)** The first one is the OSGeo4 environment bat.
>
> **[1:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=71)** The other one is Qt5 that's for doing the interface dialogue and the Python three environment bat.
>
> **[1:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=77)** This is where I found them on my desktop.
>
> **[1:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=81)** Your environments may be set somewhere else.
>
> **[1:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=83)** I know these three files are there because, I'm just going to minimize this.
>
> **[1:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=88)** And I'm going to go to my C drive and look under the OSGeo4W64.
>
> **[1:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=95)** This is where my QGIS has been installed.
>
> **[1:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=99)** So for example, if I look under apps, I should see QGIS, Qt5 and Python 37.
>
> **[1:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=107)** This is the version of Python for the version of QGIS I'm using.
>
> **[1:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=112)** So I'm using Python three at least QGIS and Qt5.
>
> **[1:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=116)** Now, if you look at your batch file, it's looking under the bin.
>
> **[1:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=119)** So let's go up a directory.
>
> **[2:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=122)** If you look on OSGeo4W64 bin, there are those three batch files, the O4W, so let's jump down to O there it is. The environment bat.
>
> **[2:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=134)** There should be a Qt1 as well.
>
> **[2:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=139)** And there it is Qt5 environment bat.
>
> **[2:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=142)** And finally, there's a py3 which is Python three bat, there we go.
>
> **[2:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=149)** So now that I've located all three of those batch files, this will set up the environment so that I can compile this.
>
> **[2:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=156)** When we first created this plugin using the plugin builder, we were given a warning saying that the resources.qrc could not be compiled that's because we didn't have all the environment variables setup, but with this simple batch file, we're able to set up all those environment variables and then we could actually compile it using that pyrcc5 compiler to convert the QRC file into a PY file.
>
> **[3:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=182)** Okay, so we've copied that make resources.bat into the save.dxf.
>
> **[3:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=187)** The next step is to use the command line to run it.
>
> **[3:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=191)** So we go CMD, command prompt, and we'll go CD desktop, which means change directories, change directory to the desktop, and then CD, change directory, save_dxf.
>
> **[3:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=208)** And I'm just going to list what's in their DIR.
>
> **[3:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=210)** You can see that the make resources.bat files there.
>
> **[3:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=215)** So all we have to do is run that.
>
> **[3:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=216)** So we just type, make_resources.bat, and it's run.
>
> **[3:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=225)** It's actually run that PYRCC5 and it's created the .py file.
>
> **[3:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=230)** So now if we go into that folder, you'll see that the resources.py files there.
>
> **[3:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=236)** If I look at that notepad, you can see that it's been compiled and there's data in here.
>
> **[4:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=244)** And also if you look at the date time it was just built it's the newest file in there.
>
> **[4:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=248)** So now that I've got everything ready, I've got a resources.py.
>
> **[4:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/create-a-batch-file-to-load-python-bindings?u=76281980&t=252)** I can now install this save.dxf plugin into QGIS, and we'll look at that at the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (3), interface (1), else. (1), finally, (1)
> **CLI Commands:** python (6), make (4), cd (2)
> **Env Vars:** qgis (5), o4w (1), qrc (1), cmd (1), dir (1)
> **Prerequisites:** set up (2), setup (1), install (1)
> **File Paths:** resources.py (3)
> **Code Identifiers:** save_dxf (1), make_resources (1)
> **Cross-References:** in the last (1), next video (1)
> **Tools:** command line (1), command prompt (1)

#### Install plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=0)** - [Instructor] Next, we're going to install the save_dxf plugin that we made in the previous video into QGIS.
>
> **[0:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=8)** Now, right now, it's just an empty plugin, but we want to install it so that we have a place to enter our code later and also see the icon show up inside the QGIS project.
>
> **[0:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=18)** The fastest way to do this is to take it from the desktop and put it into the plugins folder.
>
> **[0:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=24)** Let's highlight the save_dxf folder on the desktop, right-click and choose copy.
>
> **[0:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=30)** Open up QGIS.
>
> **[0:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=33)** Under settings, go to user profiles, open active profile folder.
>
> **[0:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=39)** That will get us really close to where we want to put the plugins.
>
> **[0:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=43)** Once we're inside the profiles default, we go into Python, plugins, and then, in this folder, in the plugins folder, we right-click and paste that save_dxf plugin.
>
> **[0:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=58)** Let's minimize that.
>
> **[1:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=60)** Now it won't automatically show up in our projects, so we may want to close QGIS and then reopen it and that save_dxf plugin should appear.
>
> **[1:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=74)** Now let's go under plugins, go under manage and install plugins and look for our save_dxf.
>
> **[1:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=86)** I can actually just do a search.
>
> **[1:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=88)** Save.
>
> **[1:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=89)** There it is.
>
> **[1:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=90)** There's our icon, that DXF icon.
>
> **[1:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=92)** So if we check that and hit close, you'll see that there's the icon export layer to DXF.
>
> **[1:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=99)** It should also be under export layer to DXF under save_dxf under vector.
>
> **[1:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=105)** Look at that.
>
> **[1:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=106)** So I have two places.
>
> **[1:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=107)** Now if I click on this, let's look what appears.
>
> **[1:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=109)** It's just a simple dialogue box with no coding behind.
>
> **[1:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=113)** That's all it is.
>
> **[1:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=114)** It's just save_dxf.
>
> **[1:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=116)** No coding behind.
>
> **[1:57](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=117)** You click OK, nothing happens.
>
> **[2:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=120)** Our next video, we'll show you how to use the QT designer to change this interface, put some drop-downs to get the layers and the map, and also, to browse to where we can put the DXF.
>
> **[2:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=132)** If we're going to save a DXF, we're going to need a drop down list of all the layers, and we're going to need a path to where to save that DXF when we want to save it.
>
> **[2:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=141)** So we've got to build that interface.
>
> **[2:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/install-plugin?u=76281980&t=143)** So we'll do that in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** dxf (6), qgis (4)
> **Code Keywords:** let (4), interface (2), default, (1), this, (1)
> **Code Identifiers:** save_dxf (7)
> **UI Navigation:** right-click (2), go to (1), click on (1)
> **Cross-References:** previous video (1), next video (1), in the next (1)
> **Prerequisites:** install (3)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Using Qt Designer
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=0)** - [Instructor] In this video we're going to use Qt Designer to design the interface of a plugin that we've already installed.
>
> **[0:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=7)** The DXF plugin, Export layer to DXF or save DXF has nothing in it right now.
>
> **[0:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=13)** But we're going to change that by using the Qt Designer.
>
> **[0:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=18)** To open up Qt Designer we just simply type qt space in our search, and Qt Designer with QGIS 3.12.3 or three, one two three custom widgets.
>
> **[0:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=29)** Let's open that up.
>
> **[0:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=30)** This was installed when I installed QCGIS.
>
> **[0:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=33)** If this is not already installed make sure you use the advance install when install QCGIS so that this Qt Designer is already installed.
>
> **[0:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=42)** From the new form we're actually just going to pick Open.
>
> **[0:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=46)** We're going to browse to a pre-existing form.
>
> **[0:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=49)** Now, it opens under my user profiles.
>
> **[0:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=52)** So the first thing I need to do is type "app data".
>
> **[0:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=54)** That's a secret folder on Windows where I can find where my plugins are installed.
>
> **[1:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=60)** So under my name, I've got to app data.
>
> **[1:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=63)** We'll go into roaming.
>
> **[1:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=64)** Go into QCGIS.
>
> **[1:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=67)** QCIGIS3.
>
> **[1:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=69)** Profiles.
>
> **[1:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=70)** Default.
>
> **[1:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=73)** Python.
>
> **[1:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=74)** Plugins.
>
> **[1:15](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=75)** Wow, that's really deep!
>
> **[1:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=77)** But that's where we are.
>
> **[1:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=79)** We're under users, Gordon Lockett, or wherever your user desktop is, app data, roaming, QCGIS, QCGIS3, profiles, default, python, plugins.
>
> **[1:30](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=90)** Phew!
>
> **[1:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=91)** Okay, so the plugin we're using is called the saved dxf.
>
> **[1:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=95)** That's the one we did in previous videos.
>
> **[1:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=97)** Go into that, and the only dot UI file that's in that folder is the save dxf dialogue base ey.
>
> **[1:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=103)** Let's open that up in Qt Designer.
>
> **[1:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=106)** There's our very simple dialogue box.
>
> **[1:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=108)** Now we need to add a few things in here.
>
> **[1:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=111)** The first thing we need to do is put in a drop down box.
>
> **[1:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=114)** So what we're going to do is bring in a combo box, and this combo box will have the list of all the layers.
>
> **[2:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=122)** So I'm just going to make it a little bit bigger so we can read all of the layers.
>
> **[2:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=126)** And this is going to be called comboBox.
>
> **[2:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=130)** See the objectName.
>
> **[2:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=131)** I'm not going to bother changing that because the code we're going to add later refers to comboBox.
>
> **[2:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=137)** Now, normally you'd call it comboBox layer or comboBox1 or so on, but I'm just going to use the default names that come in this exercise.
>
> **[2:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=144)** I'm also going to put in a label.
>
> **[2:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=146)** So, let's just put a quick little label in here.
>
> **[2:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=149)** Let's scroll down to Labels.
>
> **[2:37](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=157)** There we are!
>
> **[2:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=158)** And I'm just going to make this a little bit bigger.
>
> **[2:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=161)** And the text I'll put in there, I'll just say "Choose Layer".
>
> **[2:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=166)** Just like that!
>
> **[2:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=167)** So, this combo box will have a drop down list of all the layers in the current map.
>
> **[2:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=174)** Now we have to figure out where we're putting the DXF that we're going to export.
>
> **[2:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=179)** Okay, so here's a great tool that we can use.
>
> **[3:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=182)** It's called the QCGIS file widget.
>
> **[3:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=186)** So we're going to add the QCGIS file widget, we're going to drag and drop it in here like this.
>
> **[3:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=191)** Again, we'll make it about the same width as the layer drop down above.
>
> **[3:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=196)** There it is, QCGIS file widget.
>
> **[3:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=198)** I'm not going to rename it.
>
> **[3:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=199)** That's the object name.
>
> **[3:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=201)** And I'm going to scroll down and some things I'm going to change about it.
>
> **[3:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=205)** The first thing I want to do is change the filter.
>
> **[3:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=209)** I'm going to make sure that it only uses DXF files.
>
> **[3:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=212)** So, we'll go *.DXF.
>
> **[3:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=216)** So that's going to be the filter of this dialogue box.
>
> **[3:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=220)** The second thing I'm going to do is change the storage mode.
>
> **[3:47](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=227)** It's not getting a file, it's actually saving a file.
>
> **[3:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=231)** So those are the only two things I need to change on the QCGIS widget.
>
> **[3:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=236)** First of all, that it filters by DXF.
>
> **[3:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=238)** And second, that this tool's for saving files, not getting files 'cause this is an output.
>
> **[4:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=244)** This is where we're going to be saving a file.
>
> **[4:06](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=246)** And then, I'm going to put another label in, right here.
>
> **[4:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=251)** And I'll just say "DXF Location".
>
> **[4:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=256)** There we go.
>
> **[4:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=257)** Make that a little bit bigger so you can read it.
>
> **[4:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=261)** And that's it, that's my dialogue box.
>
> **[4:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=263)** I mean, I can go in and change it, change the overall dialogue box, and what it should show overall.
>
> **[4:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=269)** I can change colors, all sorts of things, but I'm just making this as simple as I can.
>
> **[4:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=273)** Basically we have Choose a Layer.
>
> **[4:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=275)** We'll have a comboBox that will populate later with Python with a list of layers in the drawing.
>
> **[4:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=280)** And then we're going to use the DXF location, we're going to browse and put the DXF somewhere.
>
> **[4:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=285)** That's all we need to do.
>
> **[4:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=286)** So, to save this, all we have to do is hit Save, and close Qt Designer.
>
> **[4:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=293)** Now if I go into my project and I just hit the DXF, it still has the old dialogue box.
>
> **[5:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=300)** So what I have to do is close QCGIS to refresh, open QCGIS again.
>
> **[5:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=307)** And if I open up the Load DXF or Export Layer to DXF you'll see an empty dialogue box.
>
> **[5:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=314)** Now it's quite small, it's cut off my labels.
>
> **[5:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=318)** I can make them smaller or make the dialogue box bigger, but you get the idea.
>
> **[5:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=321)** So we'll have a drop down here, and a browse to where the DXF should be and so on.
>
> **[5:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=328)** But there's no code in behind so this actually doesn't do anything yet.
>
> **[5:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=331)** It doesn't get the layers yet.
>
> **[5:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=332)** It doesn't have the DXF location.
>
> **[5:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=334)** If I click OK, absolutely nothing happens.
>
> **[5:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/using-qt-designer?u=76281980&t=336)** Our next video will show how to put code in behind that dialogue box.

> [!info]- Semantic Content
>
> **Env Vars:** dxf (15), qcgis (10), qgis (1), qcigis3 (1), qcgis3 (1)
> **CLI Commands:** make (8), python (3), find (1)
> **Code Keywords:** let (4), interface (1), default. (1), default, (1), export. (1)
> **Code Identifiers:** combobox (4), objectname (1), combobox1 (1)
> **UI Navigation:** scroll down (2), drag and drop (1)
> **Definitions:** is called (1), refers to (1), is an  (1)
> **Prerequisites:** install (2)
> **Versions:** 3.12.3 (1)

#### Adding Python to Plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=0)** - Next we're going to add Python code to our plugin so that we can actually export dxfs using QGIS.
>
> **[0:10](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=10)** Where we're going to save the code is in the save_dxf.py file that's located under the Appdata/Roaming/QGIS/QGIS3/profiles'default, /pythonplugins/save.dxf Phew, quite long, isn't it?
>
> **[0:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=25)** So, the save dxf.py, let's open that up.
>
> **[0:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=29)** Now, the only thing I have installed right now is notepads.
>
> **[0:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=32)** So I'll be using notepad.
>
> **[0:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=34)** Some people use notepad plus plus, I like that as well, but I'm just going to use notepad in this example and the code we're going to be adding to this save_dx.py is found on your Exercise Files/5 Creating Plugin and in the Python folder, I've got three text files.
>
> **[0:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=51)** One is called imports, one is called low dropdown and one is saveasdxf.
>
> **[0:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=56)** So, the very first one we need to add is the import.
>
> **[0:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=59)** So, if we go ahead and open up that text file, so I'm going to put them right beside each other so we can see.
>
> **[1:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=65)** We have this imports.
>
> **[1:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=67)** We have to add two libraries that we need to add to our Python.
>
> **[1:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=71)** The first library is the QGIS core library, and then the GIS gui library.
>
> **[1:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=78)** From the core, we're going to add the project in the vector file writer, and from the gui, we're going to use the message bar to let people know that everything imported write.
>
> **[1:27](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=87)** So let's copy these two lines.
>
> **[1:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=89)** The from QGS core and the from QGS gui, just copy that, and I have a note in there that says place it beneath the QGIS, QT widgets import action.
>
> **[1:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=101)** So that's right here.
>
> **[1:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=103)** If you notice inside the save_dxf.py file, I said, put it under the import Q accents.
>
> **[1:51](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=111)** So let's just hit enter right there and paste those two lines.
>
> **[1:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=115)** So, now I have those two lines inserted.
>
> **[1:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=118)** Those are the libraries I'm going to need.
>
> **[2:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=120)** Okay, good.
>
> **[2:01](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=121)** That's our first step.
>
> **[2:02](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=122)** We can close the imports text file.
>
> **[2:05](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=125)** Let's go back into the 5 Creating Plugins/Python folder.
>
> **[2:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=129)** The next item we're going to do is load the drop down.
>
> **[2:12](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=132)** So, this is three lines that we use to populate the dropdown box with all the layers currently in QGIS.
>
> **[2:20](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=140)** So, let's take these three lines.
>
> **[2:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=142)** So, the first one is clear the combo box.
>
> **[2:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=144)** Now, remember when we created the gui and QT designer, we left the combo box as its default, which is combo box.
>
> **[2:33](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=153)** If you renamed it for any reason, you're going to have to change it here.
>
> **[2:36](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=156)** But in this case, since we decided to just leave the defaults alone, the combo box is called combo box.
>
> **[2:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=163)** That's what we're doing.
>
> **[2:44](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=164)** So, first thing we do is take the combo box and clear the contents of it, so it's blank.
>
> **[2:49](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=169)** Then we get the list of layers in the QGS project.
>
> **[2:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=172)** So we use the QGS project, grab an instance, get the layer root.
>
> **[2:56](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=176)** So, basically that looks at the legend and get all the children, meaning all the different layers.
>
> **[3:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=183)** And then what we do is we loop over each of those layers.
>
> **[3:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=187)** So, we go get the layer name for each layer and layers and add those items to the combo box.
>
> **[3:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=193)** These three lines clear the combo box, grabs the list of layers from the current map and populates the dropdown box with it.
>
> **[3:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=201)** That's all it does.
>
> **[3:22](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=202)** And remember, again, combo box is all we call it.
>
> **[3:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=206)** If you renamed it for any reason, you've got to change it here.
>
> **[3:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=208)** So, let's copy those three lines.
>
> **[3:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=211)** And then it says, note, place above the show, the dialogue in the def run (self) function, okay.
>
> **[3:39](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=219)** So, what happens is when this py runs, there's a function in here called def run.
>
> **[3:48](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=228)** The def run, basically that's a function that runs when we run the dialogue box.
>
> **[3:54](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=234)** So, what we want to do is put these three lines where?
>
> **[3:58](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=238)** Above the show the dialogue.
>
> **[4:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=240)** Oh, there it is, right there above the show the dialogue.
>
> **[4:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=243)** So let's just paste them in right above the show dialogue.
>
> **[4:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=247)** So there's the three lines, one, two, three.
>
> **[4:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=251)** So we have the clear the dialogue box.
>
> **[4:14](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=254)** then we have get the layers and then we populate the layers into the combo box by looping over each layer in the list of layers from above, and we put the name in the combo box.
>
> **[4:26](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=266)** So, now remember it has to be indented correctly because if you don't indent it as part of this run, it breaks out of the flow.
>
> **[4:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=275)** So, what's very important with Python is that these indents mean a lot.
>
> **[4:41](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=281)** The spacing means a lot.
>
> **[4:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=283)** For example, there's an if statement here and then there's a colon, and then these two items here, are called underneath that if statement and then the indent goes away.
>
> **[4:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=293)** That means the if statements is over.
>
> **[4:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=295)** So, the same thing with this function called run.
>
> **[4:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=299)** Basically it says everything that's indented underneath that run is part of that function.
>
> **[5:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=304)** So it's very important that it's indented perfectly with the rest of this function.
>
> **[5:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=309)** So now we've got it when it first runs it'll clear the combo box, grab it the layers in the current project and populate them.
>
> **[5:16](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=316)** Okay, excellent.
>
> **[5:17](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=317)** So, we can close the load_dropdown.txt.
>
> **[5:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=321)** The last item is the actual process of saving the dxf as a file.
>
> **[5:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=328)** So, let's open up that text file, and this actually has quite a few lines in it.
>
> **[5:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=334)** And it's part of the, if result.
>
> **[5:35](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=335)** Now, if I flip back here, you could see if result, that means if something happens, if okay, was pressed, it says, do something useful.
>
> **[5:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=343)** Those three lines will be place with what's up here because you see the pass, that's what we're going to replace inside the if result.
>
> **[5:50](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=350)** And remember, it's going to be indented like I said.
>
> **[5:52](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=352)** So, what happens here?
>
> **[5:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=353)** Well, first of all, I grab the file name from the mQGS file widget and we get the file path up above.
>
> **[6:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=360)** So, what happens is when I pick on the widget as a user, I'm going to say where to put the dxf file and I'm going to get that full path and save it as a file name.
>
> **[6:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=368)** And then what I'm going to do is I'm going to see what's selected in the combo box, up at the top, get the current index, and then the selected layer will be the layers list.
>
> **[6:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=378)** And then we're going to save the selected one in that dropdown, so that we have the layers function up above.
>
> **[6:24](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=384)** So we have the list of layers, but then we're going to say whatever one that's selected, get that layer.
>
> **[6:29](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=389)** So now that we've got the layer and the file name, then we can actually write as a vector format.
>
> **[6:34](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=394)** So we'll say the selected layer up above from the combo box, the file name dxf, we'll say utf-8, that's how it's encoded.
>
> **[6:42](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=402)** The crs is going to be whatever selected layer is.
>
> **[6:45](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=405)** We're going to export it as a dxf and we're going to skip all the attributes because the dxf is mostly just line work anyway.
>
> **[6:53](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=413)** So, we're going to skip that.
>
> **[6:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=415)** And then when that processes, we're going to actually do one more thing.
>
> **[6:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=419)** We're going to go into the interface and go into the message bar and put a little successful note saying, it's been saved and here's where it saved to.
>
> **[7:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=429)** And so, let's take those and the pass as well.
>
> **[7:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=431)** So we'll take all those lines, copy them and replace it inside the, if result, just hit paste right in there.
>
> **[7:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=439)** And notice it's all lined up within the if statement, and in fact, the pass is the last thing of the file.
>
> **[7:25](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=445)** So let's hit file save.
>
> **[7:28](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=448)** So, basically that's all the code we need.
>
> **[7:31](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=451)** Starting from the top, we added the core and the gui libraries, then midway inside of the run, we populated the combo box with all the layers in the current project and finally, when they click, okay, we get the file name, get the selected layer in the dropdown box and then we write it as a dxf, and finally we say success and put a little note in there.
>
> **[7:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=479)** So make sure this is save and now we'll try it all out.
>
> **[8:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=483)** Let's open up QGIS.
>
> **[8:04](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=484)** Actually it was already open, so I'm going to close it and reopen it.
>
> **[8:08](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=488)** You have to do that after changing the code.
>
> **[8:11](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=491)** So, now that the code has been changed and everything's updated, the save_dxf files is saved.
>
> **[8:18](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=498)** So, I'm going to close that and I'm going to close all the files that we have open, and the first thing I'm going to do is go under 5 Creating Plugins, go in the data, and I'm going to add two layers to my map, the bike routes, and yes, it's UTM zone 10, I'm going to pick the very first one, and I'm going to throw in the truck routes as well.
>
> **[8:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=520)** Maybe, I'll make the truck routes a black color.
>
> **[8:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=523)** So I'll go into the styles.
>
> **[8:46](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=526)** Let's make my dialog box a little bigger here, so we can see that, there we are, and I'll make that maybe black color.
>
> **[8:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=539)** Okay.
>
> **[9:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=540)** Hit okay, so you'll see that the bike routes are orange and the truck routes are black, there we are.
>
> **[9:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=547)** So let's run our tool dxf and look at automatically in the dropdown box has the two layers, as you know with the Python it's getting all the children inside the layers, so bike routes and truck routes.
>
> **[9:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=559)** So I'm going to export the truck routes.
>
> **[9:21](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=561)** And it's going to ask for dxf location, I'm just going to put it on the desktop, so I'll browse to the desktop and I'll just call it truck.dxf and hit save.
>
> **[9:32](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=572)** And you'll see that truck.dxf will be saved from the truck routes and I'll hit Okay.
>
> **[9:38](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=578)** And you'll see yeah, saved.
>
> **[9:40](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=580)** There it is in the menu bar up there, it showed where it is.
>
> **[9:43](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=583)** And just to prove a point that it's there, I'm just going to start a new project, discard the old one, and I'm going to drag and drop from my desktop, that truck.dxf to show you that it was successful.
>
> **[9:55](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=595)** And sure enough, there's the truck routes as a dxf file.
>
> **[9:59](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=599)** So, you've seen successfully adding all the Python code to a preexisting empty plugin that's stored already on the project.
>
> **[10:09](https://www.linkedin.com/learning/qgis-and-python-for-aec/adding-python-to-plugin?u=76281980&t=609)** Now, to distribute this, you can simply take that whole directory and give it to someone else who's using QGIS and you've successfully created a working Python plugin that exports dxf files.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (7), pass (3), default, (2), import. (1)
> **Env Vars:** qgis (7), qgs (4), qgis3 (1), gis (1), utm (1)
> **CLI Commands:** python (8), make (4)
> **UI Navigation:** dropdown (6), in the menu (1), drag and drop (1)
> **Code Identifiers:** save_dxf (3), save_dx (1), load_dropdown (1), mqgs (1)
> **File Paths:** save_dxf.py (2), dxf.py (1), save_dx.py (1), load_dropdown.txt (1)
> **Definitions:** is called (3)
> **Exercise Files:** exercise files (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/qgis-and-python-for-aec/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/qgis-and-python-for-aec/next-steps?u=76281980&t=0)** - [Gordon] Thank you for taking QGIS Python for AEC.
>
> **[0:03](https://www.linkedin.com/learning/qgis-and-python-for-aec/next-steps?u=76281980&t=3)** We touched on a lot of GIS and programming concepts.
>
> **[0:07](https://www.linkedin.com/learning/qgis-and-python-for-aec/next-steps?u=76281980&t=7)** If you'd like to dig deeper into QGIS, search the LinkedIn Learning site for more QGIS course.
>
> **[0:13](https://www.linkedin.com/learning/qgis-and-python-for-aec/next-steps?u=76281980&t=13)** For more on Python, search for courses that include Python or fundamentals of programming.
>
> **[0:19](https://www.linkedin.com/learning/qgis-and-python-for-aec/next-steps?u=76281980&t=19)** I hope you enjoyed taking this course as much as I did teaching it.
>
> **[0:23](https://www.linkedin.com/learning/qgis-and-python-for-aec/next-steps?u=76281980&t=23)** Stay tuned for more courses.

> [!info]- Semantic Content
>
> **Env Vars:** qgis (3), aec (1), gis (1)
> **CLI Commands:** python (3)
> **Speakers:** - [gordon] (1)


## Path Context

### In [[Advance Your Skills in GIS]]
← [[InfraWorks and ArcGIS- AEC Collaboration]] | **5 of 9** | [[Foundations of Geographic Information Systems (GIS)]] →

## Appears In

- [[Advance Your Skills in GIS]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[Learning QGIS]] — Quantum GIS
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)