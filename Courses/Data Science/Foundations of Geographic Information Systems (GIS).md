---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: foundations-of-geographic-information-systems-gis-25669115
url: "https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115"
duration_minutes: 48
duration: 48m
level: Beginner
updated: 5/1/2025
learners: 48995
skills:
  - Geographic Information Systems (GIS)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFpq7UNi-fgQQ/learning-public-crop_675_1200/B4EZZaM0imHMAY-/0/1745270033295?e=2147483647&amp;v=beta&amp;t=XUOoN9iNLq8rpoh_JIUZIguL7qfqvpfXyMLsb6gskIE"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in GIS]]'
prev_courses:
  - '[[QGIS and Python for AEC]]'
next_courses:
  - '[[Learning ArcGIS Python Scripting]]'
path_nav: '[{"path":"Advance Your Skills in GIS","position":6,"total":9,"prev":"QGIS and Python for AEC","next":"Learning ArcGIS Python Scripting"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/geographic-information-systems-gis
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Foundations%20of%20Geographic%20Information%20Systems%20(GIS).md)

![Foundations of Geographic Information Systems (GIS)](https://media.licdn.com/dms/image/v2/D4E0DAQFpq7UNi-fgQQ/learning-public-crop_675_1200/B4EZZaM0imHMAY-/0/1745270033295?e=2147483647&amp;v=beta&amp;t=XUOoN9iNLq8rpoh_JIUZIguL7qfqvpfXyMLsb6gskIE)

# Foundations of Geographic Information Systems (GIS)

> Millions of organizations around the world are using Geographic Information Systems (GIS) to make maps that communicate, perform analysis, share information, and solve challenging problems. In this course, Jennifer Harrison, President of TeachMeGIS and a consultant in the GIS field for nearly 30 years, shows you the value of using GIS to solve problems and helps you to master its intricacies. Jenn

> [LinkedIn Learning](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115) | 48m | Beginner | 49K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Thinking spatially](#thinking-spatially)
- [**1. Understanding GIS**](#1-understanding-gis) (5 videos)
  - [Solving spatial problems](#solving-spatial-problems)
  - [Finding and accessing GIS](#finding-and-accessing-gis)
  - [Recreating the world on a map](#recreating-the-world-on-a-map)
  - [Specifying location](#specifying-location)
  - [Essential map comprehension](#essential-map-comprehension)
- [**2. GIS Core Concepts**](#2-gis-core-concepts) (5 videos)
  - [More than digital maps](#more-than-digital-maps)
  - [Identifying GIS layer components](#identifying-gis-layer-components)
  - [Describing attribute tables](#describing-attribute-tables)
  - [Using raster datasets](#using-raster-datasets)
  - [Creating 3D models with LiDAR](#creating-3d-models-with-lidar)
- [**3. Geospatial Analysis**](#3-geospatial-analysis) (3 videos)
  - [Asking a map questions](#asking-a-map-questions)
  - [Evaluating spatial relationships](#evaluating-spatial-relationships)
  - [Analysis with imagery and surfaces](#analysis-with-imagery-and-surfaces)
- [**4. Spatial Data Sources**](#4-spatial-data-sources) (2 videos)
  - [Identifying GIS data sources](#identifying-gis-data-sources)
  - [Creating your own GIS data](#creating-your-own-gis-data)
- [**5. GIS as a Spatial Platform**](#5-gis-as-a-spatial-platform) (2 videos)
  - [Enterprise-level GIS](#enterprise-level-gis)
  - [Mobile and web GIS](#mobile-and-web-gis)
- [**Conclusion**](#conclusion) (1 videos)
  - [Putting it to practice](#putting-it-to-practice)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Thinking spatially](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=0)** If you're spending your days working behind a computer, chances are you're dealing with tons of digital information.
>
> **[0:07](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=7)** Now, if any of that information concerns roads, rivers, buildings, trees, aquifers, coffee shops, or anything else that has a specific location on this earth, take my advice: you should be using a geographic information system to help you manage and analyze that data.
>
> **[0:25](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=25)** GIS can help you get your job done faster and more accurately, and maybe even allow you to answer questions you've never been able to answer before.
>
> **[0:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=35)** GIS software gives you the tools to create, modify, and manipulate data to tease out critical patterns and expose the way things interact with each other on the ground.
>
> **[0:47](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=47)** I'm Jenny Harrison, founder of TeachMeGIS. Over the past 30 years, I've helped thousands of professionals around the world get productive with geospatial technologies.
>
> **[0:57](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=57)** I've helped them learn to think spatially.
>
> **[1:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=60)** In this course, I'll explain conceptually how GIS is used in various industries to solve complicated problems.
>
> **[1:08](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=68)** I'll teach you the components of a GIS and show you where to find geospatial data.
>
> **[1:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=74)** Finally, I'll get you to start thinking about adding GIS to your organization to make sure that you get the benefit of this incredible tool.
>
> **[1:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=81)** By the end of this course, you'll be approaching problems differently by thinking spatially.

> [!info]- Semantic Content
>
> **Env Vars:** gis (5)
> **CLI Commands:** find (1), make (1)


### 1. Understanding GIS

[↑ Back to Table of Contents](#table-of-contents)

#### [Solving spatial problems](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=0)** Have you ever thought about the amount of information your brain collects as you travel to work in the morning?
>
> **[0:06](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=6)** Everything you see, feel, hear?
>
> **[0:09](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=9)** Is this in a school zone? Are the roads rough?
>
> **[0:13](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=13)** Are there sidewalks?
>
> **[0:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=14)** How many cars are on the street with you?
>
> **[0:17](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=17)** Is there an interesting shop you want to come back to later?
>
> **[0:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=20)** Is there any construction going on?
>
> **[0:22](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=22)** Now, suppose that you could collect all that information that you observe and put it into a database for engineers, planners, designers, and other citizens like yourself to use to make better decisions.
>
> **[0:36](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=36)** You could put that information in lists, stored in spreadsheets or [[Databases]], like a list of all the shops on your route to work.
>
> **[0:45](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=45)** But think about how much more powerful that data would be if it was on a map so that everyone could see exactly where each of these things occur and how they interact with each other.
>
> **[0:55](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=55)** For example, since you know how many cars are on the road and where the shops are, marketers could say, how many cars passed that shop each day?
>
> **[1:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=64)** Maybe I should put an ad on the radio so they can hear it when they drive in.
>
> **[1:09](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=69)** When you think of data this way, you're thinking spatially.
>
> **[1:12](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=72)** You may have seen a simple example of this with just a few layers of data, if you've used a navigation app on your phone or in your car, but this is a bit different from a GIS.
>
> **[1:23](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=83)** A GIS stacks up lots and lots of layers of spatial data and gives us a framework for gathering, managing, and analyzing that data.
>
> **[1:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=93)** Because GIS understands location and has a database attached to the map layers, it can help answer very complicated questions quickly.
>
> **[1:43](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=103)** Thinking about the road you travel in the morning, again, you can ask, what makes up the foundation of this road that's cracked so badly?
>
> **[1:52](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=112)** Which construction company built it?
>
> **[1:54](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=114)** How many people would be impacted when you have to close it down for repairs?
>
> **[1:59](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=119)** And the cool thing is that GIS can do this for any data, not just roads.
>
> **[2:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=124)** To manage and analyze a tremendous amount of different kinds of data in your daily work, I want you to start thinking about what data you have that has a spatial component.
>
> **[2:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=135)** If there are some, which I'm sure there are, get that data into a GIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Env Vars:** gis (5)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Finding and accessing GIS](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=0)** GIS software lets you put your own world, the data that's important to your organization onto the map.
>
> **[0:08](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=8)** Put simply, you can access GIS through web maps and apps, or through desktop software, which can be set up as part of an enterprise platform.
>
> **[0:19](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=19)** Geospatial-enabled devices can feed location and services back to your maps.
>
> **[0:24](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=24)** Suppose you work for a company that has offices, warehouses, and factories all over the world, you could create a GIS-based web app for the company.
>
> **[0:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=35)** Everyone sees the complete set of data about the company's staff and facilities, and the maps are updated in real time as new data is entered.
>
> **[0:45](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=45)** Most companies using GIS have a desktop GIS software to create and manage their geospatial data and to create a system of record to keep historic versions.
>
> **[0:56](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=56)** A desktop GIS software is much more powerful, allowing for the management of huge data sets for machine-intensive spatial analysis.
>
> **[1:05](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=65)** The Esri desktop software is called [[ArcGIS Pro]].
>
> **[1:09](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=69)** ArcGIS Pro is usually installed as part of an enterprise GIS.
>
> **[1:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=74)** There are many software companies helping users create web maps such as Esri, [[Google]], and [[Microsoft]].
>
> **[1:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=81)** You can get a public account for Esri's ArcGIS Online web mapping platform at [arcgis.com](https://arcgis.com) and try your hand at making a GIS-based map an app.
>
> **[1:31](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=91)** It's free for you to explore and learn, just not for commercial work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (2), [[Google]] (1), [[Microsoft]] (1)
> **Env Vars:** gis (8)
> **URLs:** [arcgis.com](https://arcgis.com) (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### [Recreating the world on a map](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=0)** To get a clear understanding of GIS, think about how the world can be recreated in a database.
>
> **[0:06](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=6)** That's done by converting the parts of your world, everything on it, above it, and in it.
>
> **[0:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=14)** A GIS is really just a model of the world created by stacking together layers of points, lines, and polygons.
>
> **[0:22](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=22)** A simple model is drawn in two dimensions, but a more sophisticated model can be drawn in three dimensions showing the height of buildings and other structures.
>
> **[0:32](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=32)** It's the spatial relationship between these shapes that allows you to ask questions of your GIS.
>
> **[0:39](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=39)** Think about a GIS that a local police department uses for public safety.
>
> **[0:43](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=43)** In it, every street would be drawn as a simple line right down the middle of the street.
>
> **[0:50](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=50)** This line is called a street feature.
>
> **[0:53](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=53)** Every stoplight would be drawn as a point.
>
> **[0:56](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=56)** How about police stations?
>
> **[0:58](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=58)** Probably a polygon would be drawn that shows the shape of the building on the ground.
>
> **[1:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=63)** There might also be a layer of polygons that represents land parcels, local parks, or school campuses.
>
> **[1:11](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=71)** And the land parcel polygons together would be stored in a geodatabase feature class or in an older file type called a shape file feature class.
>
> **[1:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=81)** Both are used quite commonly.
>
> **[1:24](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=84)** These streets could also be stored as a geospatial web service, making it easy for web and mobile maps to access them.
>
> **[1:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=93)** Everything relevant to public safety would be represented by feature classes of points, lines, and polygons.
>
> **[1:39](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=99)** Being able to analyze data spatially allows you to report what's happened in the past, analyze the conditions that might've caused what happened, investigate ways to change those conditions and model how these changes might affect future outcomes.
>
> **[1:55](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=115)** Suppose you notice more than the usual number of car crashes at an intersection in your rural county last month.
>
> **[2:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=123)** You know that grass near that intersection gets really high and sometimes causes visibility issues.
>
> **[2:09](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=129)** You can overlay the county's mowing schedule with the streets on your GIS map and see that the area around this intersection has not been mowed this spring, and you know there's been a lot of rain.
>
> **[2:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=141)** You can request the mowing schedule be adjusted and possibly save lives with that simple change.
>
> **[2:27](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=147)** Now that you know what the issue is, you can ask GIS to find other busy intersections that haven't been mowed and ask the mowers to prioritize those intersections.
>
> **[2:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=157)** Here's a GIS map that shows how mowing is managed in San Antonio, Texas.
>
> **[2:43](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=163)** When I click on any of the areas, I see what the mowing schedules are for this year, and because this data exists as GIS data on the web, the local police department can probably get access to it and add it to their GIS.
>
> **[2:57](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=177)** Now that you know how GIS models the world, take a minute to consider what are the points, lines, and polygons that make up your work world.

> [!info]- Semantic Content
>
> **Env Vars:** gis (10)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is called (1)

#### [Specifying location](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=0)** The magic behind [[Geographic Information Systems (GIS)|geographic information systems]], the thing that makes it is that every point, line, and polygon put into a GIS is tied to a real-world location on the Earth.
>
> **[0:12](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=12)** Some things sit on top of the Earth like a cell tower.
>
> **[0:16](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=16)** Other things sit underground like a sewer line or the bottom of an oil well, but they all have coordinates that specify their location.
>
> **[0:25](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=25)** The best-known system for specifying location is the one that uses latitude and longitude.
>
> **[0:31](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=31)** This is called the geographic coordinate system.
>
> **[0:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=34)** Latitude and longitude are great for mapping location on a three-dimensional sphere or ellipse like a globe, but on a flat two-dimensional map, a different system is used to designate locations.
>
> **[0:48](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=48)** These are projected coordinate systems.
>
> **[0:51](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=51)** These systems allow you to flatten out the Earth onto a screen or a piece of paper, specifying location and distances in either feet or meters.
>
> **[1:01](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=61)** To get you thinking about how the world is mapped, I want to discuss latitude and longitude.
>
> **[1:05](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=65)** If you get excited about GIS and want to get started, you'll need to learn about projected coordinate systems, too.
>
> **[1:12](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=72)** Since you might not have had to think about latitude and longitude since primary school, I'll review a few terms.
>
> **[1:18](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=78)** A degree is a measure of an angle and the length along the surface of the Earth opposite that angle.
>
> **[1:27](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=87)** A sphere, like the Earth, is divided up into 360 degrees of latitude, measuring distances north and south of the equator.
>
> **[1:36](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=96)** And longitude measuring distances east and west of the prime meridian.
>
> **[1:43](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=103)** Coordinates are written as degrees, minutes, seconds, called DMS, or in decimal degrees.
>
> **[1:51](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=111)** The longitude is usually specified first.
>
> **[1:55](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=115)** Every point, every historic oak tree, every manhole cover, every fire hydrant knows its latitude and longitude.
>
> **[2:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=123)** It knows because when it was originally put into the GIS, its location was collected by someone going to it with a GPS unit, or maybe it was drawn over a digital aerial photo.
>
> **[2:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=135)** The coordinate pair is stored with the data.
>
> **[2:19](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=139)** If the data is 3D-enabled, you'll find a third coordinate elevation, which is the height above sea level.
>
> **[2:27](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=147)** Now for lines, every line is simply a series of points called vertices, and each [[Vertex]] knows its latitude and longitude.
>
> **[2:36](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=156)** A polygon is a line that encloses an area.
>
> **[2:39](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=159)** Think of a city park, or a designated wetlands area.
>
> **[2:43](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=163)** They're made up of a series of points connected into a line, and a line starts and stops at the same point.
>
> **[2:50](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=170)** So you get a fully enclosed area.
>
> **[2:53](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=173)** Each point knows its latitude and longitude, and if it's a 3D dataset, its elevation.
>
> **[2:59](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=179)** The GIS can do spatial analysis for you.
>
> **[3:02](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=182)** It can look at how things touch and intersect and how close things are to each other, and each one of these features will have data behind them.
>
> **[3:11](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=191)** Now that you understand a little about the coordinates behind a GIS map, why don't you see if you can find the latitude and longitude coordinates of where you are right now?
>
> **[3:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=200)** Just open a browser and go to [[[Google]].com/maps](https://google.com/maps).
>
> **[3:25](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=205)** Type in your address, right-click on the map, and you'll know exactly where you are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Geographic Information Systems (GIS)|Geographic information systems]] (1), [[Vertex]] (1), [[Google]] (1)
> **Env Vars:** gis (5), dms (1), gps (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), right-click (1)
> **URLs:** [google.com](https://google.com) (1)
> **Prerequisites:** you'll need (1)

#### [Essential map comprehension](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=0)** You may be used to looking at navigational maps on your phone, but it's rare to have to really understand the fine details on those maps.
>
> **[0:09](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=9)** I mean, generally, I just listen to know when I have to turn and in which direction.
>
> **[0:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=14)** But when looking at a GIS map, it's important to understand a bit about map reading and map comprehension.
>
> **[0:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=21)** So I'm going to go over a few essentials.
>
> **[0:24](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=24)** First, every map should have a legend or a table of contents that explains the layers on the map and explains the colors and symbols that were used for each layer.
>
> **[0:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=35)** So the first thing you should do when you look at a GIS map, or any map for that matter, is to look for a legend so that you can understand what the colors and symbols on the map mean.
>
> **[0:45](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=45)** The next important thing to understand about the map is what part of the world this map is showing.
>
> **[0:50](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=50)** It might be easy to tell because the title of the map might mention the study area, or you might recognize the name of a major road on the map.
>
> **[0:59](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=59)** Another thing you have to understand are directions on a map.
>
> **[1:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=63)** Usually, maps are created so that north is up and south is down.
>
> **[1:07](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=67)** This is not always the case though, so you have to look for a north arrow to orient yourself on the map.
>
> **[1:13](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=73)** If there's no north arrow, look for the meridians, the lines of longitude, they converge at the poles and always point north and south.
>
> **[1:23](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=83)** Finally, you need to look for the map scale so that you can understand the size of things on the map.
>
> **[1:29](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=89)** Look for a scale bar or scale text.
>
> **[1:32](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=92)** The scale text is easy to understand.
>
> **[1:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=94)** Measure one centimeter on the map and that will be three kilometers on the ground.
>
> **[1:39](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=99)** But that's only true if the map is drawn at the original scale that the map author intended, which is often not the case when looking at a digital map.
>
> **[1:48](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=108)** So most maps nowadays have a scale bar instead.
>
> **[1:52](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=112)** The scale bar is unitless.
>
> **[1:54](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=114)** You put a ruler on the map and measure the distance between two points.
>
> **[1:57](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=117)** Say it comes out to three centimeters.
>
> **[1:59](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=119)** Then you put the ruler against the scale to see how long three centimeters is on the ground.
>
> **[2:05](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=125)** The next time you're presented with a map, look for the legend, the north arrow, the coordinates, and the scale bar to make sure you're interpreting the map correctly.

> [!info]- Semantic Content
>
> **Env Vars:** gis (2)
> **CLI Commands:** make (1)


### 2. GIS Core Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [More than digital maps](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=0)** GIS is more than just a digital map.
>
> **[0:02](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=2)** It's a powerful resource that can be used to get tremendously more value out of your data.
>
> **[0:08](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=8)** In this lesson, I want to get you in a position to use GIS for more than just mapping.
>
> **[0:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=14)** If your company owns a chain of coffee shops, GIS can show you a map of each location.
>
> **[0:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=20)** By creating and managing spatial data, GIS can also keep track of all the data related to your coffee shops, the property boundaries and footprint, parking lots and parking spaces, even the vegetation around the buildings.
>
> **[0:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=35)** You can add new coffee shops or change the details of a shop at any time in your GIS.
>
> **[0:41](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=41)** Beyond mapping and creating spatial data, GIS is great for spatial document management.
>
> **[0:48](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=48)** A GIS will allow you to connect all your reports, charts, photos, presentations, and basically anything related to each store to the coffee shop location on the map.
>
> **[1:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=60)** I mean, you can look at the map, click on the coffee shop, and see all the annual reports: the tax documents, the leasing agreements, any documents related to the store.
>
> **[1:12](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=72)** You don't have to go figure out where they are on your network or in [[SharePoint]].
>
> **[1:16](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=76)** Finally, I want to highlight spatial analysis.
>
> **[1:19](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=79)** That's the big one.
>
> **[1:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=81)** It's what makes GIS, well, GIS.
>
> **[1:25](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=85)** In your GIS map of coffee shops, the data behind the layers could include the year the building was built, whether it was owned or leased, the sales from last year, the average number of customers each year, and even the number of parking spots.
>
> **[1:40](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=100)** Or you could query, like show me all the coffee shops that had sales, say over $500,000 last year.
>
> **[1:48](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=108)** You could add other data to your map like census blocks with demographic data, including education level, age, and average income of the people living nearby.
>
> **[1:59](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=119)** Using the spatial analysis tools in your GIS, you could look at the census blocks within a quarter mile of each of those great performing coffee shops and find out what sort of neighborhood results in a successful coffee shop.
>
> **[2:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=134)** You could also overlay your coffee shops with school district boundaries in case you wanted to run a promotion with the schools or floodplain maps in case you want to see if any of your properties are at a higher risk of flooding to see if you should invest in flood insurance.
>
> **[2:30](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=150)** That's what GIS does.
>
> **[2:32](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=152)** It lets you pull together all of these different data types to help you make better decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SharePoint]] (1)
> **Env Vars:** gis (12)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** click on (1)

#### [Identifying GIS layer components](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=0)** GIS map layers are the building blocks of a GIS.
>
> **[0:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=3)** Layers allow a single GIS dataset, like a set of polygons representing buildings to be displayed many different ways.
>
> **[0:12](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=12)** I can show the [[Microsoft Office|office]] buildings in my city color-coded by the number of square feet available to rent and the property appraisers can display the buildings color-coded by the value, and the fire department can color-code them based on whether or not they have sprinkler systems.
>
> **[0:27](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=27)** When a new building is added, everyone just opens their map and the new building is there, using each person's chosen color scheme.
>
> **[0:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=37)** A single dataset can be displayed many different ways based on the attributes.
>
> **[0:42](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=42)** This is one of the key elements of a GIS.
>
> **[0:45](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=45)** Let me clarify a bit of terminology.
>
> **[0:48](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=48)** There's a GIS layer and there's an actual GIS dataset.
>
> **[0:52](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=52)** They're different but they go together.
>
> **[0:54](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=54)** A GIS dataset consists of geometry: points, lines, or polygons tied to a real-world location plus the data behind it.
>
> **[1:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=64)** This type of data is called a feature class.
>
> **[1:07](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=67)** A GIS layer defines the display properties for this feature class.
>
> **[1:13](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=73)** The symbol, is it a dashed line or a solid line?
>
> **[1:17](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=77)** The color and the filters that narrow down the data.
>
> **[1:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=80)** The cool thing is that you can have one feature class, one dataset that's displayed dozens of different ways depending on what aspect of the data interests you. Let me give you an example.
>
> **[1:31](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=91)** Suppose you work for your state's bridge maintenance group and you create a GIS feature class that holds the bridges for your state.
>
> **[1:39](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=99)** You can store so much information about these bridges in your GIS: the name of the bridge, the construction type: cantilever or truss bridge, for example.
>
> **[1:50](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=110)** Weight limits: can a fully loaded semi go over it or firetruck?
>
> **[1:54](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=114)** The age of the bridge and even the number of vehicles that cross the bridge on an average day.
>
> **[1:58](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=118)** All of this information can be stored in the GIS with this bridge feature class.
>
> **[2:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=124)** And then each person in your organization can create a layer to display the data based on what's of interest to them.
>
> **[2:11](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=131)** The bridge maintenance team can display the bridges based on the age of the bridge, the roughness of the pavement, or the average daily traffic so they could plan for when bridges will need to be replaced or upgraded in the next budget year.
>
> **[2:25](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=145)** The emergency management office can display the bridges by height to determine which ones might flood if the river rises.
>
> **[2:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=153)** A local fire department can also use the data and display the bridges based on weight limits so they can analyze their routes to fires to avoid bridges that cannot support the weight of their trucks.
>
> **[2:45](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=165)** So you see you have one actual feature class, one actual data set that could have dozens of layers associated with it.
>
> **[2:54](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=174)** The magic is that if those bridge points get updated, a new bridge is built, or a bridge is repaired, the bridge maintenance team will automatically see the new bridge on their map.
>
> **[3:05](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=185)** The emergency management team will see the bridge colored by its new height and the fire department will see it on their map as well symbolized by weight limit, so they'll know if this new bridge will support their trucks.
>
> **[3:17](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=197)** GIS feature classes are little packets, chockfull of information about a particular set of structures that you are responsible for on Earth. Using GIS software, you can manipulate that data for display and analysis to get exactly the answers that you need and everyone can be seeing the same dataset, one version of the truth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2)
> **Env Vars:** gis (13)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)

#### [Describing attribute tables](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=0)** A GIS is so much more than just a map.
>
> **[0:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=4)** Every layer in a GIS carries with it an attribute table, which is a database full of information.
>
> **[0:11](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=11)** An attribute is any bit of information about a feature on a map.
>
> **[0:16](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=16)** What's the name of this hospital?
>
> **[0:18](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=18)** What's the total area of this piece of land?
>
> **[0:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=21)** There are a few attributes that every modern GIS dataset automatically has.
>
> **[0:25](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=25)** The length of every line and the area of every polygon.
>
> **[0:30](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=30)** Those are calculated automatically.
>
> **[0:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=33)** All the other attributes that you see in a GIS dataset were added by some human or collected by some device.
>
> **[0:41](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=41)** Let me show you the attributes in a GIS map.
>
> **[0:45](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=45)** This is a map that shows land records in Linn County, Iowa, right in the heartland of the United States.
>
> **[0:52](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=52)** You can open the legend to see what layers are on the map.
>
> **[0:55](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=55)** Notice that the yellow lines are parcels and the orange lines are subdivision boundaries. Most GIS maps have a search tool.
>
> **[1:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=64)** You can usually search for an address, a city, a state, a country, or a well-known location like a courthouse.
>
> **[1:11](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=71)** I'll search for the Lin County Courthouse.
>
> **[1:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=75)** Once it's typed in, the map will [[Zoom]] into the courthouse right here on this little island.
>
> **[1:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=80)** When you click on the courthouse polygon, you get to see the attributes of this piece of land.
>
> **[1:26](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=86)** So this is the data behind the map that I've been telling you about.
>
> **[1:30](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=90)** You can see who owns the land and lots of other information.
>
> **[1:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=93)** Notice there's a land valuation and tax information in here, too.
>
> **[1:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=97)** It's all blank because this is a government building, but let's check the property across the river from the courthouse.
>
> **[1:45](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=105)** When you click on it to see who owns it, you can scroll down and see its land value and how much tax is due, and lots of other information about this piece of land.
>
> **[1:54](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=114)** This button at the bottom lets you open all the tables for all the layers on the map and filter the data or search for what interests you.
>
> **[2:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=123)** See, there are attribute tables for each of the layers on the map: parcels, subdivisions, everything.
>
> **[2:10](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=130)** It's filtered right now to only show data for the area that it's zoomed to.
>
> **[2:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=135)** Suppose I'm a lawyer and I want to open a new [[Microsoft Office|office]] near the courthouse.
>
> **[2:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=141)** Let me see if there are any properties that I could get for less than $100,000 in this area.
>
> **[2:26](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=146)** I'll run a quick filter that chooses all the records where the value is less than 100,000.
>
> **[2:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=153)** You can see how many records are selected down in the lower left corner of the table.
>
> **[2:38](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=158)** By double-clicking one, you can see where it is on the map and even see a photo of the property.
>
> **[2:44](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=164)** So you can see the attributes are fully integrated into the GIS.
>
> **[2:48](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=168)** The map is tied to the tables and the tables are tied to the maps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** gis (7)
> **UI Navigation:** click on (2), open the (1), scroll down (1)
> **Definitions:** is a  (3)

#### [Using raster datasets](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=0)** Did you know that there are over 2,000 active satellites orbiting the Earth every day?
>
> **[0:05](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=5)** Some of these satellites go around the Earth once every 12 hours, and some do it in just 90 minutes.
>
> **[0:12](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=12)** They're all collecting information about the Earth's surface, taking pictures, and making measurements.
>
> **[0:19](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=19)** A lot of this data can be added directly into a GIS.
>
> **[0:23](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=23)** In addition to satellites, government agencies and private companies are flying airplanes and drones with [[Data Collection]] devices attached.
>
> **[0:32](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=32)** These vehicles fly much closer to the ground and collect very detailed pictures.
>
> **[0:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=37)** They also measure the heights of buildings and trees, determine the location of power lines, and collect information about vegetation health.
>
> **[0:46](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=46)** This data is called remotely sensed data.
>
> **[0:49](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=49)** Many remotely sensed data sets are stored as raster data.
>
> **[0:53](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=53)** Raster data sets are made up of a bunch of pixels, just like you see when you [[Zoom]] in really close on a picture you've taken with your camera.
>
> **[1:01](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=61)** The remotely sensed imagery can be used as a base map in your GIS, so you can see where houses, roads, and forests are.
>
> **[1:10](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=70)** You can also do analysis with these images. You see, each pixel in one of these photos actually holds the spectral reflectance of a spot on the Earth.
>
> **[1:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=80)** The spectral reflectance describes the amount of light of different colors being reflected from the Earth.
>
> **[1:26](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=86)** Most commonly you look at red, green, and blue light, which are visible bands of light that human eyes can see.
>
> **[1:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=93)** When you mix red, green, and blue light, you get what's called a true color image.
>
> **[1:39](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=99)** What makes this remotely sense data more interesting, though, is that the satellites, airplanes, and drones can carry special equipment that record wavelengths of light that the human eye can't see, like infrared light.
>
> **[1:53](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=113)** Infrared light is particularly interesting, especially when looking at agriculture and forests because rapidly growing healthy vegetation reflects a lot of infrared light.
>
> **[2:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=124)** While weak or sick vegetation reflects very little infrared light.
>
> **[2:09](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=129)** Water and wet areas also reflect a very little.
>
> **[2:12](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=132)** By looking at an infrared image, you can analyze the health of crops, the extent of wetlands, and the level of infestation of pests in a forest.
>
> **[2:23](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=143)** You can use the spectral reflectance of pixel to develop a signature for various vegetation types.
>
> **[2:30](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=150)** This signature can be used to predict where you might find a particular type of vegetation.
>
> **[2:36](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=156)** For example, if you say, I know this pixel is a stand of pine trees infected by disease, and here's the reflectance signature for infected pine trees.
>
> **[2:47](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=167)** Then show me where the other stands of infected pine trees are in this huge forest.
>
> **[2:52](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=172)** And you don't have to be a NASA scientist to do this.
>
> **[2:56](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=176)** The data is there.
>
> **[2:58](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=178)** It's collected by lots of government agencies and shared with the public, and the software helps you with the science.
>
> **[3:05](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=185)** Photos are not the only type of raster.
>
> **[3:08](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=188)** Elevation rasters, which can be used to derive slope and aspect information, can be used to determine the best location for solar panels or the best place to plant corn.
>
> **[3:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=200)** Noise pollution, air pollution, and light pollution are other examples.
>
> **[3:26](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=206)** These types of rasters are often created from point data.
>
> **[3:29](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=209)** The software interpolate between the points and estimates what the value is in areas where you don't have data.
>
> **[3:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=217)** It's very powerful.
>
> **[3:38](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=218)** Want to see some of these raster data sets?
>
> **[3:40](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=220)** Check out the United States Geological Survey's National Map Viewer, and turn on the land cover layer or the imperviousness layer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (1), [[Zoom]] (1)
> **Env Vars:** gis (2), nasa (1)
> **Analogies:** just like (1), picture (1), for example (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** find (1)

#### [Creating 3D models with LiDAR](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=0)** Can GIS maps be 3D? Absolutely.
>
> **[0:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=3)** There are 3D base maps, and you can drape your own data over those base maps.
>
> **[0:08](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=8)** The 3D part is nice for visualization, but it also lets us do analysis like predicting which areas can be seen from the third floor of a building or figuring out the best location for a cell tower.
>
> **[0:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=21)** Here's a 3D map of a village in Southern Belize.
>
> **[0:24](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=24)** I'll show it to you in [[ArcGIS Pro]], a desktop GIS software.
>
> **[0:29](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=29)** We could use this 3D data to figure out which areas are flat enough and have enough sun exposure for successful agriculture.
>
> **[0:38](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=38)** Here's another of a river valley where a dam was recently built.
>
> **[0:43](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=43)** These are basic maps with just the free elevation data that comes with the software, but there's a technology available now called Light Detection and Ranging, or Lidar that allows for quick and relatively inexpensive collection of very high-resolution elevation data. It can also collect the height of things sitting on the earth like trees, power poles, and buildings.
>
> **[1:08](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=68)** Bring this data into a GIS and you can get a complete 3D model of the area.
>
> **[1:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=74)** Interestingly, these [[Data Collection]] devices can be put on the top of a car to map a neighborhood or even attached to a tripod and set inside a building to map the interior of the building.
>
> **[1:26](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=86)** One of the exciting uses of this Lidar technology right now is flying over dense forests to discover hidden secrets underneath.
>
> **[1:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=94)** The thing is, these Lidar devices shoot out so many pulses of light.
>
> **[1:38](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=98)** Some get reflected by the leaves, but some make it through the spaces between the leaves and hit the ground.
>
> **[1:44](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=104)** It's like an x-ray of the forest.
>
> **[1:47](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=107)** The Lidar picks up the shapes of structures that have been hidden under forests for hundreds of years.
>
> **[1:53](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=113)** Today, Lidar is being used in big cities to create 3D models, the basis for digital twins of entire cities, the buildings, the power lines, the stoplights, everything.
>
> **[2:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=124)** This incredible technology has really changed the world of mapping by allowing you relatively quickly to get a complete 3D model of the world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (1), [[Data Collection]] (1)
> **Env Vars:** gis (3)
> **CLI Commands:** make (1)
> **Analogies:** it's like (1)


### 3. Geospatial Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Asking a map questions](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=0)** Need to know where the water lines are that haven't been inspected lately?
>
> **[0:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=4)** Where are all the buildings in the city that are in a floodplain?
>
> **[0:07](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=7)** Just ask your GIS to show you.
>
> **[0:10](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=10)** A GIS lets you pick through huge stacks of data to quickly answer complex questions. You ask a map a question by running a query.
>
> **[0:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=21)** GIS software supports [[Database Queries]] using the structured query language or [[SQL]]: a standard language that's been used for decades.
>
> **[0:30](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=30)** When you query a standard database, you get a list of records returned.
>
> **[0:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=35)** When you query a geospatial database, you get the results displayed on a map instead of just in a list of records.
>
> **[0:42](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=42)** Let me show you an example of how GIS queries are used.
>
> **[0:46](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=46)** Look at this map that shows all of the oil and gas wells in the U.S. state of Louisiana.
>
> **[0:52](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=52)** There are nearly 200,000 wells in the state.
>
> **[0:55](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=55)** Some are still active, but many are old and no longer used.
>
> **[1:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=60)** Suppose you wanted to find out how many of those wells are actually still producing oil.
>
> **[1:06](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=66)** First, look at the table to see what column holds the well type.
>
> **[1:10](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=70)** You can see how many wells are in this dataset by looking here in the lower left corner of the table.
>
> **[1:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=75)** Then run a query that says, select all the wells where the well status is producing well oil.
>
> **[1:26](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=86)** You can see how many wells are still producing and see the number of selected records.
>
> **[1:31](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=91)** You can ask more detailed questions, too.
>
> **[1:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=94)** How many of these wells were drilled before 1940?
>
> **[1:40](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=100)** How many wells drilled before 1940 went deeper than one mile, 5,280 feet?
>
> **[1:48](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=108)** How many wells drilled before 1940 that went deeper than a mile were successful in finding oil? And where are these wells?
>
> **[1:58](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=118)** You can also really simplify the data by turning off all the features that don't meet your criteria. You can, for example, show only the wells in Louisiana that were drilled deeper than four miles.
>
> **[2:11](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=131)** That's 21,120 feet.
>
> **[2:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=134)** That really lets you narrow down a huge dataset to see just what you need to find that proverbial needle in a haystack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Database Queries]] (1), [[SQL]] (1)
> **Env Vars:** gis (4), sql (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)

#### [Evaluating spatial relationships](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=0)** If you want to know how many six-inch water lines are in your city, query a database.
>
> **[0:06](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=6)** If you want to know where the six-inch water lines are that are in danger of corroding from running through highly acidic soils, ask a GIS.
>
> **[0:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=15)** Because location is a part of every GIS data set, your GIS knows what things are near each other, what things intersect, and even which polygons contain which points on the ground.
>
> **[0:27](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=27)** So in the case of water lines, what you'd really be doing is giving your GIS a water line and a soils layer and asking the GIS to find all the water lines that intersect the acidic soil polygons.
>
> **[0:41](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=41)** Intersects are one of the many spatial relationships that GIS is able to understand, such as within a distance of, contains, are contained by, and shares a boundary with.
>
> **[0:55](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=55)** Let me show you a map of Louisville, Kentucky.
>
> **[0:58](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=58)** It's got fire district polygons on it.
>
> **[1:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=60)** And when you [[Zoom]] in, you can see there are address points.
>
> **[1:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=64)** Suppose the fire chief wants to know how many homes and businesses the department is responsible for protecting.
>
> **[1:11](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=71)** That's a simple "are contained by" question for GIS.
>
> **[1:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=75)** Select all the address points that are contained by my fire district.
>
> **[1:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=81)** Now suppose there's going to be construction on one of the streets in Louisville.
>
> **[1:25](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=85)** I'll say it's Preston Street.
>
> **[1:26](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=86)** The fire department might want to know how many homes and businesses are near Preston Street, which they might have trouble getting to because of the construction.
>
> **[1:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=95)** So you could run a query to select all the address points that are within a distance of 500 feet from Preston Street.
>
> **[1:42](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=102)** But Preston Street is a long street and runs outside of your district.
>
> **[1:47](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=107)** So you could then run a spatial query to say, out of all these Preston Street addresses, just pick the ones that are in my fire district.
>
> **[1:55](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=115)** And then you could open the table and see a list of all the addresses that would be affected by the construction in your district, and you could further query to see if any of those addresses are hospitals or schools.
>
> **[2:07](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=127)** These address points are created and maintained by emergency response organizations around the world.
>
> **[2:14](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=134)** There are also data vendors who sell address points with demographic data behind them.
>
> **[2:19](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=139)** So you can do queries like, which addresses are within one kilometer of my grocery store because I want to send them coupons.
>
> **[2:27](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=147)** Spatial analysis gives you a new way to explore your data, to pull out valuable information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Env Vars:** gis (7)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** open the (1)
> **Analogies:** such as (1)

#### [Analysis with imagery and surfaces](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=0)** The data collected from satellites, airplanes, and drones can give you incredible insights into what's going on down here on Earth.
>
> **[0:09](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=9)** And those images and data are constantly collected and delivered in formats that GIS can read.
>
> **[0:16](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=16)** It can be used to look at huge swaths of the Earth, like predicting the growth pattern of a wildfire, and also for more localized studies like where do I need to add more soil to level out this land?
>
> **[0:29](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=29)** Other kinds of raster data sets like the depth of the oceans can be created by GIS software from point measures.
>
> **[0:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=37)** For example, if I have a hundred rain gauges across the city, I can ask my GIS to create a rainfall raster, a continuous surface which estimates what the rainfall amount was in areas where there were no gauges.
>
> **[0:52](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=52)** GIS software and apps have tools for analyzing raster data that are really easy to use because much of the science is built into the tool.
>
> **[1:02](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=62)** Construction designers can use elevation data for line-of-sight studies.
>
> **[1:07](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=67)** For example, I know of a company that needed to install a petroleum storage tank in Colorado, and they wanted to make sure the tank was not visible from the road.
>
> **[1:17](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=77)** Using GIS, the company was able to place the tank where existing berms and little hills in the area would obscure it.
>
> **[1:23](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=83)** This line-of-sight concept is also used to plan the location of cell towers and imagine what the view would be from the third floor of a new building.
>
> **[1:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=93)** Impervious surfaces, surfaces like parking lots and roads that water can't soak through are a significant factor in urban flooding and pollution runoff.
>
> **[1:43](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=103)** Using remotely sensed imagery in a GIS, you can calculate the percentage of impervious surfaces in an industrial complex and use that information to recommend installing retention ponds or green space to alleviate some of the risks.
>
> **[1:59](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=119)** Engineers, architects, and planners often need to do cut-fill analysis.
>
> **[2:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=124)** Suppose you're about to build a new hospital on a big piece of land, but the ground is sloped.
>
> **[2:09](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=129)** A cut-fill analysis will tell you how much land you need to remove from one area and how much land you need to add everywhere else to level out the land.
>
> **[2:18](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=138)** GIS makes this relatively easy.
>
> **[2:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=141)** The best part of doing analysis with raster data is that so much of this data is already available for free from government agencies.
>
> **[2:29](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=149)** So the GIS software has the tools that know the science and the data is readily available.
>
> **[2:36](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=156)** You just have to put the two together and you can start solving spatial problems with raster data.

> [!info]- Semantic Content
>
> **Env Vars:** gis (8)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)


### 4. Spatial Data Sources

[↑ Back to Table of Contents](#table-of-contents)

#### [Identifying GIS data sources](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=0)** Government agencies, private data vendors, and even nonprofits have been sharing GIS data for decades.
>
> **[0:07](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=7)** Using freely available, trusted data is how you populate a brand-new GIS.
>
> **[0:13](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=13)** Much of that data is shared out on a data hub.
>
> **[0:16](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=16)** A hub is the central part of a wheel from which the spokes rotate.
>
> **[0:22](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=22)** The term is now used to describe the effective center of activity or the center of a network.
>
> **[0:28](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=28)** The GIS data world has a hub like that, the ArcGIS Open Data Hub.
>
> **[0:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=33)** That's where you start when you're looking for GIS data.
>
> **[0:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=37)** Governments and other organizations all over the world have shared their GIS data out in this open data hub.
>
> **[0:44](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=44)** Want to get GIS data that shows the location of all the cemeteries in Texas?
>
> **[0:49](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=49)** Search the data hub for Texas Cemeteries and either download the data or just copy the URL and add it to your map as a service.
>
> **[0:58](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=58)** Now, not every organization shares their data in the ArcGIS Hub.
>
> **[1:01](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=61)** Many prefer to share it with you directly from their own hub or even just on their website. In the United States, there are several federal government agencies that share GIS data.
>
> **[1:13](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=73)** You can get elevation data and aerial photos, plus surface geology and soils data for the entire U.S.
>
> **[1:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=80)** from the U.S. Geological Survey.
>
> **[1:23](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=83)** The U.S. Forest Service, Fish and Wildlife, Department of Environment, and the National Oceanographic and Atmospheric Agency, NOAA, all share GIS data.
>
> **[1:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=95)** There are many others.
>
> **[1:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=97)** You can find the federal data on data.[geoplatform.gov](https://geoplatform.gov).
>
> **[1:41](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=101)** Pretty much anything you want.
>
> **[1:43](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=103)** Just use a search engine to search for the location and GIS data.
>
> **[1:50](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=110)** Nonprofits and university research centers share GIS data.
>
> **[1:54](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=114)** Even local governments from huge cities like London, New York City, and Bangalore to very small towns all share their GIS data out online.
>
> **[2:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=124)** Much of it is free.
>
> **[2:05](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=125)** Occasionally, there's a small charge to cover the cost of getting the data together for you.
>
> **[2:10](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=130)** And if you can't find the data that you need in one of these locations, there are lots of data vendors who sell GIS data.
>
> **[2:17](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=137)** And finally, if you can't find the data you need already out there somewhere, you can make your own.
>
> **[2:22](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=142)** You can draw it in on the screen, you can collect it with GPS devices, have surveyors collect it, trace it off aerial photos, or import it from your CAD software.
>
> **[2:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=154)** GIS data is easy to get, so there's no reason to wait.
>
> **[2:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=157)** You can get started with GIS quickly.

> [!info]- Semantic Content
>
> **Env Vars:** gis (14), url (1), noaa (1), gps (1), cad (1)
> **CLI Commands:** find (3), make (1)
> **URLs:** [geoplatform.gov](https://geoplatform.gov) (1)
> **Exercise Files:** download the (1)

#### [Creating your own GIS data](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=0)** Suppose you have the task of creating a GIS for an industrial complex.
>
> **[0:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=4)** How would you get data for it?
>
> **[0:07](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=7)** Well, most GIS software comes with a built-in base map of aerial imagery.
>
> **[0:12](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=12)** So when you open your GIS for the first time, you just turn on the base map, you search for your facilities address, and [[Zoom]] in until you can see it.
>
> **[0:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=21)** Now the imagery that comes with the software might be a few years old, so if you've had many recent changes at your facility, you might hire a drone pilot or an aerial photo company to acquire newer imagery.
>
> **[0:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=34)** Now, to add your specific data, you would start with the most prominent features in your complex, like the buildings and parking lots.
>
> **[0:42](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=42)** You could trace these off aerial photos if they existed when the photo was taken.
>
> **[0:47](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=47)** Or if you have original plans or blueprints of these structures in a CAD format, that's Computer-Aided Design software like [[AutoCAD]] or MicroStation, then you could import these files.
>
> **[1:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=60)** If all you have are paper versions of these blueprints, that's okay too.
>
> **[1:04](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=64)** You can scan them and trace them right into your GIS.
>
> **[1:08](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=68)** You could even hire a surveyor to go out and survey the facility.
>
> **[1:13](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=73)** Which of these methods you choose depends on how much time you have, how much money you have, and exactly how accurate you need to be with your locations.
>
> **[1:22](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=82)** Now about getting all the other things from your facility into the map: stop signs, fire hydrants, fences, trees, if your aerial photos are detailed enough, you might be able to draw them in from the photos, but more than likely you're going to need to go out and GPS these locations.
>
> **[1:40](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=100)** You can do this with an app on your phone or a tablet, but the phone will need to be Bluetooth to an actual GPS receiver device to get accurate locations.
>
> **[1:49](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=109)** The GPS in your phone isn't good enough for GIS mapping.
>
> **[1:53](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=113)** You can buy a GPS receiver relatively inexpensively, or you may be able to rent one for a few days.
>
> **[2:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=120)** So you'll go out in the yard and you'll walk up to the fire hydrant, put the phone or device right over it, push a button on the app, and the location gets recorded. While you're out there, you can enter information about the hydrant, like what color is it, how many connections it has, its condition, and maybe even the manufacturer if you want.
>
> **[2:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=140)** There are devices in the world that send data to GIS, like traffic cameras and weather stations, as well as tools in GIS to automatically create data like drawing a 10-meter buffer around the water line to show a right of way.
>
> **[2:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=154)** There are lots of ways to get GIS data into your GIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1), [[AutoCAD]] (1)
> **Env Vars:** gis (9), gps (4), cad (1)


### 5. GIS as a Spatial Platform

[↑ Back to Table of Contents](#table-of-contents)

#### [Enterprise-level GIS](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=0)** A GIS can be as simple as one person using one software on one computer, but more commonly, GIS maps, data, and tools are shared across an entire organization, allowing everyone to see the same data.
>
> **[0:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=15)** This is called Enterprise IS.
>
> **[0:17](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=17)** This allows for one version of the truth across the entire organization.
>
> **[0:22](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=22)** Let me describe a hypothetical enterprise GIS for a local city government.
>
> **[0:27](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=27)** Local governments have a lot of departments responsible for all aspects of running a city.
>
> **[0:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=33)** All of these departments can see the same data displayed in maps that are relevant to their work.
>
> **[0:39](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=39)** The way this works is that the city staff use desktop software to create, manage, and analyze the GIS data, which is stored in an enterprise geodatabase.
>
> **[0:50](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=50)** GIS staff then published that data through the server as web services stored in a web portal. Management, field crews, and anyone who needs to access the GIS data through a mobile phone or a tablet accesses these web services. Some of that data can also be shared out to the public through web and mobile apps like [[Dashboards]] and story maps.
>
> **[1:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=75)** Engineers and planners can look at maps in powerful desktop software.
>
> **[1:20](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=80)** They can manage repairs and strategize future growth.
>
> **[1:24](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=84)** Field crews who are inspecting and repairing water lines can access maps of the lines on a mobile device while out in the field.
>
> **[1:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=93)** Fire chiefs can see a map of where all the calls for service were last month and see which fire hydrants have been inspected this year.
>
> **[1:41](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=101)** An enterprise GIS provides maps, data, and geospatial apps across an entire organization so that everyone sees the same data at the same time, and the data only has to be created and maintained by one group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (1)
> **Env Vars:** gis (7)
> **Definitions:** is called (1)

#### [Mobile and web GIS](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=0)** GIS data can be pushed to mobile devices and web apps for the benefit of managers and field crew who are not always sitting at a desktop computer.
>
> **[0:09](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=9)** After watching this lesson, you'll be able to list a variety of ways that mobile and web GIS applications are used.
>
> **[0:16](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=16)** There's so many different doors that can get you to GIS data.
>
> **[0:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=21)** Let me show you a few examples.
>
> **[0:23](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=23)** GIS [[Dashboards]] are web apps that have a map or two at their center, and a series of charts and [[Statistics]] around the map that give details about what's going on in the area.
>
> **[0:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=35)** This dashboard shows the pavement quality compared to traffic volumes in Tallahassee, Florida.
>
> **[0:41](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=41)** I can change the traffic count indicator on the left to say 20,000, and then both maps would update to show only roads that have traffic volumes of over 20,000 cars per day.
>
> **[0:54](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=54)** All of the charts would update too to show the data for just those roads.
>
> **[0:59](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=59)** Another way that you might see GIS data on the web is through a story map.
>
> **[1:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=63)** A story map combines maps with a storyline, text, photos, graphics, charts, reports, and other supporting details to give the full story of a situation.
>
> **[1:15](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=75)** They can be used for fun like mapping a recent vacation, but can be used for very serious work as well, like explaining safety procedures around a facility, showing the impact of a recent hazardous material spill, or showing the public alternative routes during a parade or a festival.
>
> **[1:33](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=93)** Here's an example of a story map used to share information about a Healthy Parks initiative in Travis County, Texas.
>
> **[1:41](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=101)** And here's another one explaining the extent of opioid use in Tennessee.
>
> **[1:46](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=106)** Custom web applications can be built, many without even writing code.
>
> **[1:53](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=113)** There are applications that have these sets of widgets that you can move around to configure exactly the app you want, such as this City of London GIS app.
>
> **[2:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=123)** And what's important is that these maps can be configured to hit the same web services that are used by the internal city staff, meaning there's no need to create and maintain several copies of the data or worry about pushing the updates to all the maps and apps that are being used.
>
> **[2:21](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=141)** This is live up-to-date data.
>
> **[2:23](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=143)** If you have the time, take a look at your local government's website to see if they have any GIS apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (1), [[Statistics]] (1)
> **Env Vars:** gis (7)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Putting it to practice](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=0)** Well, that's all I have to tell you right now about GIS.
>
> **[0:03](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=3)** There's lots more, of course.
>
> **[0:05](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=5)** But congratulations, you've made it to the end of this course.
>
> **[0:08](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=8)** Thanks for watching.
>
> **[0:10](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=10)** Now that you understand what GIS is and its strengths, I hope I've gotten you thinking about how to integrate GIS into your daily tasks and thinking about how geospatial technologies can help you pull more out of your data by adding that spatial component.
>
> **[0:26](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=26)** It's easy to get started with GIS. If you're looking for where to start, I suggest taking a look at ArcGIS. If you'd like to give it a try, you can go to [arcgis.com](https://arcgis.com) and get a free public account to explore other people's maps and even create your own GIS maps.
>
> **[0:43](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=43)** There's lots of free data to get started with.
>
> **[0:46](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=46)** There's also an ArcGIS home use license, which gives you both web GIS and desktop software.
>
> **[0:53](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=53)** It's available for a small annual fee.
>
> **[0:56](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=56)** And I hope you'll connect with me on [[LinkedIn]] and follow the TeachMeGIS site.
>
> **[1:01](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=61)** Also, check out the TeachMeGIS YouTube site for GIS tips and tricks.
>
> **[1:07](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=67)** I'm excited for you to start your geospatial adventure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Env Vars:** gis (7)
> **URLs:** [arcgis.com](https://arcgis.com) (1)
> **UI Navigation:** go to (1)


## Instructor

- [[Jennifer Harrison]]
- [[Madecraft]]

## Skills Covered

- Geographic Information Systems (GIS)

## Path Context

### In [[Advance Your Skills in GIS]]
← [[QGIS and Python for AEC]] | **6 of 9** | [[Learning ArcGIS Python Scripting]] →

## Appears In

- [[Advance Your Skills in GIS]]

## Related Courses

_Courses sharing skills:_

- [[Real World Gis]] — Geographic Information Systems (GIS)
- [[Creating Maps with R]] — Geographic Information Systems (GIS)

---

[↑ Back to top](#)