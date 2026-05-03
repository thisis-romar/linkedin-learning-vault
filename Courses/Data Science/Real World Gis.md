---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: real-world-gis-22715766
url: "https://www.linkedin.com/learning/real-world-gis-22715766"
level: Intermediate
updated: 9/6/2023
learners: 60450
skills:
  - Geographic Information Systems (GIS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGmyUYEfnh5vA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1693588036922?e=2147483647&amp;v=beta&amp;t=f7I9DuMJME5dNBOED-PjQdm0jftIqeMAPfJoGrVt1zI"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in GIS]]'
next_courses:
  - '[[ArcGIS Pro Essential Training]]'
path_nav: '[{"path":"Advance Your Skills in GIS","position":1,"total":9,"prev":null,"next":"ArcGIS Pro Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/geographic-information-systems-gis
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Real%20World%20Gis.md)

![Real World Gis](https://media.licdn.com/dms/image/v2/D4E0DAQGmyUYEfnh5vA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1693588036922?e=2147483647&amp;v=beta&amp;t=f7I9DuMJME5dNBOED-PjQdm0jftIqeMAPfJoGrVt1zI)

# Real World Gis

> Geographic information systems, or GIS, is a way to approach mapping and spacial analysis using a computer environment. Learning GIS requires training in cartography, database management, and spatial analysis. But once you've built a solid foundation in the basics, how do you approach GIS challenges in the real world? In this course, Dr. Jason VanHorn helps you master practical, real-world GIS sce

> [LinkedIn Learning](https://www.linkedin.com/learning/real-world-gis-22715766) | Intermediate | 60K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Need help with your GIS projects?](#need-help-with-your-gis-projects)
  - [What you should know](#what-you-should-know)
- [**1. Got GIS Data?**](#1-got-gis-data) (10 videos)
  - [Where is the GIS data?](#where-is-the-gis-data)
  - [How to consider the scale of GIS data](#how-to-consider-the-scale-of-gis-data)
  - [What spatial data are already in ArcGIS?](#what-spatial-data-are-already-in-arcgis)
  - [How to get local and state GIS data](#how-to-get-local-and-state-gis-data)
  - [How to get the USA national map data](#how-to-get-the-usa-national-map-data)
  - [How to get census GIS data](#how-to-get-census-gis-data)
  - [How to get Earth Explorer data](#how-to-get-earth-explorer-data)
  - [How to bring hosted GIS data into ArcGIS](#how-to-bring-hosted-gis-data-into-arcgis)
  - [Challenge: Get GIS data for a specific geography](#challenge-get-gis-data-for-a-specific-geography)
  - [Solution: Get GIS data for a specific geography](#solution-get-gis-data-for-a-specific-geography)
- [**2. What Can Be Done with GIS Data?**](#2-what-can-be-done-with-gis-data) (6 videos)
  - [Understanding GIS data types](#understanding-gis-data-types)
  - [Mastering vector GIS data](#mastering-vector-gis-data)
  - [Mastering raster GIS data](#mastering-raster-gis-data)
  - [How to choose the right GIS data formats for Projects](#how-to-choose-the-right-gis-data-formats-for-projects)
  - [Challenge: Vectorization vs. rasterization](#challenge-vectorization-vs-rasterization)
  - [Solution: Vectorization vs. rasterization](#solution-vectorization-vs-rasterization)
- [**3. What Is Up with Projections?**](#3-what-is-up-with-projections) (6 videos)
  - [How to understand the latitude, longitude, and scale](#how-to-understand-the-latitude-longitude-and-scale)
  - [What is a developable surface?](#what-is-a-developable-surface)
  - [Using geoids, spheroids, and datums in GIS](#using-geoids-spheroids-and-datums-in-gis)
  - [Mastering projections in GIS](#mastering-projections-in-gis)
  - [Challenge: On-the-fly projection vs. project](#challenge-on-the-fly-projection-vs-project)
  - [Solution: On-the-fly projection vs. project](#solution-on-the-fly-projection-vs-project)
- [**4. How to Collect GIS Data in the Field?**](#4-how-to-collect-gis-data-in-the-field) (6 videos)
  - [Geospatial data collection basics](#geospatial-data-collection-basics)
  - [How to create a spatial database from coordinates](#how-to-create-a-spatial-database-from-coordinates)
  - [How to add scanned map data and drone imagery to a spatial database](#how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database)
  - [How to collect GIS data using ArcGIS Survey123](#how-to-collect-gis-data-using-arcgis-survey123)
  - [Challenge: Georeference master](#challenge-georeference-master)
  - [Solution: Georeference master](#solution-georeference-master)
- [**5. How to Master ArcGIS Online?**](#5-how-to-master-arcgis-online) (6 videos)
  - [What is ArcGIS Online?](#what-is-arcgis-online)
  - [How to bring data into ArcGIS Online](#how-to-bring-data-into-arcgis-online)
  - [How to build web maps from ArcGIS Pro](#how-to-build-web-maps-from-arcgis-pro)
  - [How to make an online mapping application](#how-to-make-an-online-mapping-application)
  - [Challenge: Make an online mapping application](#challenge-make-an-online-mapping-application)
  - [Solution: Make an online mapping application](#solution-make-an-online-mapping-application)
- [**6. How to Build a GIS Project from Scratch?**](#6-how-to-build-a-gis-project-from-scratch) (20 videos)
  - [Challenge: Get the GIS data](#challenge-get-the-gis-data)
  - [Solution: Get the GIS data](#solution-get-the-gis-data)
  - [Challenge: Visualize the GIS data](#challenge-visualize-the-gis-data)
  - [Solution: Visualize the GIS data](#solution-visualize-the-gis-data)
  - [Challenge: GIS attribute data exploration](#challenge-gis-attribute-data-exploration)
  - [Solution: GIS attribute data exploration](#solution-gis-attribute-data-exploration)
  - [Challenge: Isolate the GIS data](#challenge-isolate-the-gis-data)
  - [Solution: Isolate the GIS data](#solution-isolate-the-gis-data)
  - [Challenge: Construct new GIS data](#challenge-construct-new-gis-data)
  - [Solution: Construct new GIS data](#solution-construct-new-gis-data)
  - [Challenge: Analyze the GIS data](#challenge-analyze-the-gis-data)
  - [Solution: Analyze the GIS data](#solution-analyze-the-gis-data)
  - [Challenge: Import GIS data into a geodatabase](#challenge-import-gis-data-into-a-geodatabase)
  - [Solution: Import GIS data into a geodatabase](#solution-import-gis-data-into-a-geodatabase)
  - [Challenge: Convert GIS data](#challenge-convert-gis-data)
  - [Solution: Convert GIS data](#solution-convert-gis-data)
  - [Challenge: Make a web map](#challenge-make-a-web-map)
  - [Solution: Make a web map](#solution-make-a-web-map)
  - [Challenge: Make an online mapping application](#challenge-make-an-online-mapping-application)
  - [Solution: Make an online mapping application](#solution-make-an-online-mapping-application)
- [**7. How to Land a GIS job?**](#7-how-to-land-a-gis-job) (4 videos)
  - [What are the different types of GIS jobs?](#what-are-the-different-types-of-gis-jobs)
  - [Where can you find GIS jobs?](#where-can-you-find-gis-jobs)
  - [How can you master the GIS job interview? Part 1](#how-can-you-master-the-gis-job-interview-part-1)
  - [How can you master the GIS job interview? Part 2](#how-can-you-master-the-gis-job-interview-part-2)
- [**Conclusion**](#conclusion) (1 videos)
  - [What are your next steps in GIS?](#what-are-your-next-steps-in-gis)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Need help with your GIS projects?](https://www.linkedin.com/learning/real-world-gis-22715766/need-help-with-your-gis-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/need-help-with-your-gis-projects?u=76281980&t=0)** - Real world GIS projects are challenging and maybe you need some help. In this course, I will show you real world GIS practices with data, with map projections and also online mapping and we'll do that with ArcGIS and [[ArcGIS Pro]]. I'll show you best practices to collect data using Survey123 and how to build online web maps and mapping applications using [arcgis.com](https://arcgis.com). Hi there, I'm Dr. Jason VanHorn, professor of geography. I've been doing GIS for the last 30 years and I love helping students succeed in their professional work. So if you're ready to get started, join me at [[LinkedIn]] Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (1), [[LinkedIn]] (1)
> **Env Vars:** gis (3)
> **URLs:** [arcgis.com](https://arcgis.com) (1)
> **Speakers:** - real (1)

#### [What you should know](https://www.linkedin.com/learning/real-world-gis-22715766/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/what-you-should-know?u=76281980&t=0)** - [Instructor] There are no prerequisites in this course so if you're a beginner, you'll be able to [[Microsoft Excel|excel]]. I will show you both ArcGIS, ArcMap, and [[ArcGIS Pro]]. So some GIS experience in either will help you move faster through the course, but I try to assume everything is new, and there are exercise files with this course but you can use your own GIS data if you don't have access to them. The first chapter in this course is about getting GIS data, so you'll have many places to acquire data if you need it for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[ArcGIS Pro]] (1)
> **Env Vars:** gis (3)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. Got GIS Data?

[↑ Back to Table of Contents](#table-of-contents)

#### [Where is the GIS data?](https://www.linkedin.com/learning/real-world-gis-22715766/where-is-the-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/where-is-the-gis-data?u=76281980&t=0)** - [Instructor] Today, we are inundated with data. On our phones, televisions, and computers, we've become a data-driven society. Spatial geographic data are everywhere, yet the top question I get from students is where is the GIS data? In this chapter of real world GIS, I will introduce the topic of GIS data trends and introduce you to five GIS data locations to give you the knowledge of where to get GIS data, but also to equip you with tools to master the download aspects of GIS data portals that should be replicable on almost any GIS data portal site. So let's get started with some trends.

> [!info]- Semantic Content
>
> **Env Vars:** gis (7)
> **Speakers:** - [instructor] (1)

#### [How to consider the scale of GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-consider-the-scale-of-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-consider-the-scale-of-gis-data?u=76281980&t=0)** - [Instructor] GIS data come in different data [[Forms]]. But one thing consistent with all GIS data is scale. So you have to ask yourself what scale do you want your GIS data? Do you need it at a global or a national scale or more close to home like a regional or local scale? Answering that question will help you decide where to download your data. Global or national level data compare country to country, typically one statistic is calculated for each country and so we know how the country is doing based on some category. For example, here I've mapped child under nourishment by country all around the world from the World Bank dataset. Now this map is showing the most recently reported data for countries who have provided their data since 2010. And we can use this kind of map to compare and contrast each country that we have data for. Subnational GIS data drills down inside a country to give us data at a more regional scale. In the United States that would be state level data, which allow us to compare between states on some category. Here I've mapped by US state the percentage of people that have engaged with YouTube in the last 30 days. The easiest way I found to get national data is from country statistical offices
>
> **[1:36](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-consider-the-scale-of-gis-data?u=76281980&t=96)** like a census bureau or a national [[Statistics]] [[Microsoft Office|office]]. So if you need that kind of data, do online searches first for those places in the country of your choice. Now the other form of subnational data is much more local. We can drill down even further within a region or a state to get more local knowledge. Here, I've created the same data set of the percentage of people who have watched YouTube in the last month by county in my state of Michigan. And here is the same subnational GIS data but even more local within a city. So what scale do you want for GIS data? Do you need GIS data covering a global or a national level, or do you need it at a regional or a local scale? So considering this question will help you quickly determine where you will look for your GIS data needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Statistics]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** gis (8)
> **Cross-References:** in the last (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [What spatial data are already in ArcGIS?](https://www.linkedin.com/learning/real-world-gis-22715766/what-spatial-data-are-already-in-arcgis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/what-spatial-data-are-already-in-arcgis?u=76281980&t=0)** - [Instructor] When you purchase ArcGIS, typically Esri provides you with a data CD or a download of many different GIS base layers and themes. And that's what I'm showing you here. Inside these folders, we have a host of GIS data lots of GIS [[Databases]] and layers that have a ton of attribute data. And so you'll use this most often in your workflows and in your projects that you do daily. But there's more. Inside of ArcGIS, there are a couple of options to access data that I want to show you now. So here we are in Arc Map and if we click on file in the upper left here, we have a host of different options. The one we're interested in is ArcGIS online. When we click ArcGIS online, this window pane pops up and now we have access to a host of served GIS data all around the world. This data is served from ArcGIS servers. So we can search or we can browse GIS layers here. Let's go ahead and do a search for population density and see what we get. Okay, so we have a host of different kinds of options under population density and you might have different ones based on your searches. Here I have 2022 USA population density that comes up first. You can see we've got a description here
>
> **[1:33](https://www.linkedin.com/learning/real-world-gis-22715766/what-spatial-data-are-already-in-arcgis?u=76281980&t=93)** and we can get more details by clicking on this show details option. And we can add this very quickly by clicking on the add data option. You can also see that it's served by ESRI and the date here. So when I go ahead and click on add, a window pops up to prompt me to log in to my organizational ArcGIS online account. Now you can do this right now and access this particular layer. Some layers don't require you to do this. This happens to be a premium layer from Esri. So we need to log in to do that. Let me show you what that looks like in [[ArcGIS Pro]]. Here we are in ArcGIS Pro. And as you can see, I've already logged in here with my organizational account. So now I have access to all of the ArcGIS online data because of my organizational account. Here I've created a project called Data Options that you can see at the top. So what I'm going to do is click on catalog. When I open up the catalog pane window, we get the typical file folders that we're all used to in working with different GIS layers. But what we're interested in is portal. If we click on portal, because I've connected to my organizational account, now I have a whole bunch of options. Here I've clicked on the cloud icon, which is for ArcGIS online that same environment that you saw in ArcMap. Now let's do the same kind
>
> **[3:05](https://www.linkedin.com/learning/real-world-gis-22715766/what-spatial-data-are-already-in-arcgis?u=76281980&t=185)** of population density search and see what we get. So when we search for population density we get those same spatial layers that we got in ArcMap. If we hover over this 2022 USA population density, we can see that it's the same layer from Esri, the same date. And we can then access the path if we want to look at it in a browser or we can just grab it 'cause we are already logged into our organizational account and take a look at that data. So I'm grabbing it and pulling it right into the data map frame right here. Okay, now we have the data served for us right here in our window and we are viewing the state layer. You can see that's the spatial scale that we're at. If we [[Zoom]] down, we can see an adjust. A new spatial layer is now the county layer. And let's go ahead and expand here in our contents pane to look at the legend. So working with this kind of data can really enhance our workflow in our daily operations and projects that we engage in in GIS. There is one additional data product that I'd like to mention that's available inside of ArcGIS Pro. If you have the data license then you have access to the business analysis tool. It's an extension within ArcGIS Pro. And you can find that under the analysis and business analysis tab. Here you can find a whole host of amazing and extraordinarily useful powerful data. You can find business facility locations
>
> **[4:42](https://www.linkedin.com/learning/real-world-gis-22715766/what-spatial-data-are-already-in-arcgis?u=76281980&t=282)** or you can find a whole host of different kinds of data, population, business, education, et cetera. So if you have this extension, it can be very very helpful for your daily workflows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (4), [[Databases]] (1), [[Zoom]] (1)
> **Env Vars:** gis (7), usa (2), esri (1)
> **CLI Commands:** find (4), cd (1)
> **UI Navigation:** click on (4)
> **Speakers:** - [instructor] (1)

#### [How to get local and state GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-local-and-state-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-local-and-state-gis-data?u=76281980&t=0)** - [Instructor] So we have determined we need local GIS Data. So let me show you how to get it. If you live or work in an urban area, there could be a local GIS [[Microsoft Office|office]] that has data and it might even host it online. My university work is in Grand Rapids, Michigan, so let me show you what I do in my town. Let me do a search for Grand Rapids GIS Data. When you do a search like this, you might get some different results, but we're going to click on the first option here, GR Data. Here is a Grand Rapids GIS Data Portal. Let's go ahead and click on open data and do a search for bus stop. Okay, here you can see we have five different results. We're interested in the top one Grand Rapids bus stops. Now that I've clicked that we have access to this data set and we can download it. If I click on the download option right here, I get several different kinds of download files that are available. Most likely we're going to choose the shape file for our GIS work. In the same way, let's do a regional search by US state. Since I'm in the state of Michigan, let's do that. I'm going to do a search for Michigan GIS Data. Again, your results might be a little different, but here I've got Michigan GIS Open Data site and that's what I'm interested in. So just like my town has a GIS Portal, so does the state of Michigan.
>
> **[1:35](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-local-and-state-gis-data?u=76281980&t=95)** Here, we can search for the same kind of GIS Data. One of the ways we could approach searching for GIS Data is by browsing. Here, if I scroll down in this open GIS Data Portal for the state of Michigan, you can see the different kinds of themes that are available for our spatial layers. Let's go ahead and click on environment. It looks like here we have 68 different results. Based on the time when you take this course, you might have different results, but one of the very favorite layers that is served by the state of Michigan that I used often is this land cover circa 1800 spatial layer. If we click on the link, then it loads the spatial layer and we have access to do the same thing that we did with the bus stop data. We can click on the download option here on the left and then we can choose the shape file and download that to our computer to use in GIS. More and more cities and regions are releasing GIS Data and, in fact, some counties in the United States have figured out that one of the best ways to increase population and attract jobs is to streamline property development using GIS. So take a look at what options you have locally and in your state or in your region.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Env Vars:** gis (14)
> **UI Navigation:** click on (6), scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [How to get the USA national map data](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-the-usa-national-map-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-the-usa-national-map-data?u=76281980&t=0)** - [Presenter] So you've determined you need National GIS Data. So let me show you how to get it. Many countries have established National GIS Data infrastructure programs and most have an official national map that has different GIS layers. In the United States, we call that the National Map. So here in my search engine, I'm going to search for National Map and we are interested in the National Map Viewer. So let's click on the second link here and we're going to launch now the National Map Viewer. Notice this National Map viewer has many different controls on the top in the GIS framework but we are interested in a data download. So let's click on data download in the upper-left. The USGS who maintained the national map in the United States has built this separate portal for downloading data and one day, it might be merged as one site altogether. On this second site, we have a similar interface to GIS with content layers on the left and a data viewer on the right To show you how to download data, let's pick imagery of my campus. Notice here on the left, we have an imagery option. I will go ahead and check box that option. Scroll down here so you can see a little bit more of it. Now notice that we have a data extent which says varies 'cause we can pick lots of different places in the United States to download imagery from. And then under file format,
>
> **[1:33](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-the-usa-national-map-data?u=76281980&t=93)** we only have one kind of file format and that's JPEG 2000. Now this is a nice format for us because JPEG 2000 can preserve coordinate data in the corners of the imagery we download. So it comes as geo-referenced. Now on the right, in this map interface, we could search by an address or we could choose to upload a shape file here on the left or upload a KML. Our goal is to find a geography we're interested in and then download imagery of that geography. So here, I will go ahead and type in my address of the university where I'm at right now and we'll get this result. So here's the geography that we're interested in. Now what we need to do now that we have our geography set is click on search [[Microsoft Products|products]] in the upper-left here. It looks like there is one image connected with the search address I used. If I click on the footprint option and I [[Zoom]] out a little bit, you can see the footprint of the geography where this image resides. It basically gives you the aerial extent of the image. Okay, let's uncheck footprint and now we're back to the same location we were before. We have two options for download. We could first add to cart with this option here and when we click on add to cart, now it's added in our cart and we can use this tab then to do the download. This is more complicated for sure because it requires you to do a batch download with the
>
> **[3:09](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-the-usa-national-map-data?u=76281980&t=189)** you get instructions right here. So what I like to do back on this products tab is to choose to download the link here. You can click on download link and then we'll automatically download for you into your downloads folder or wherever you have your downloads going from your browser. Then you can open it up in your GIS software and utilize it. One thing to remember is the nature of these sites, they are meant to always be under maintenance. So data is often updated and the design of the interface is also changing too. So be patient if things change on you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Zoom]] (1)
> **Env Vars:** gis (6), jpeg (2), usgs (1), kml (1)
> **UI Navigation:** click on (6), scroll down (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [How to get census GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-census-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-census-gis-data?u=76281980&t=0)** - [Instructor] So we need census GIS data. Now, most countries have a national census by law, and here in the United States, we have a census every 10 years since 1790. Census bureaus today have an almost embarrassment of data richness, so it's very easy to get overwhelmed by the amount of data on these sites. Here on [census.gov](https://census.gov), we want to download our GIS data. Now, typically, I find among all the data sites where I download GIS data, this site changes the most in between visits. So if it looks slightly different than what you see on the video, what you're most interested to find is the category "Geography." Here, I can find that under Topics and Geography. On the Geography page is where you'll find your GIS data layers. If we scroll down, we can find mapping files, and here they are. In this case, we have TIGER/Line Shapefiles, Cartographic Boundary Files, which are KML layers, and TIGER/Line Geodatabases. TIGER stands for Topologically Integrated Geographic Encoding and Referencing system. I know it's a mouthful, but it is the geographic system used by the U.S. Census Bureau. I think the most challenging aspect of dealing with the Census Bureau website and downloading the data is that you first have to download the geographic layers and then you have to download the data layers
>
> **[1:34](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-census-gis-data?u=76281980&t=94)** and you have to join them in ArcGIS. So first, let's get the geographic files by clicking on, in this example, TIGER/Line Shapefiles. So here on the TIGER/Line Shapefile page, I will choose a year. Let's pick 2022. And then I'll pick the web interface. Now I have to choose the kind of geography that I want. I usually will download either state level or county level data or sub-county level data either as census tracks. Within those are block groups, and within those are blocks, and you can find census data at all of those geographic levels. For this example, I'm going to choose Block Groups, and I'll choose Submit, and now what I have to do is I have to choose the actual state that I'm interested in. In this case, let's go ahead and pick the state I'm in, Michigan, so I find Michigan, and now I click on Download. Okay, now we have downloaded all of the block groups for the state of Michigan, but they're just the geographic file. Now we need to go get the data from the Census Bureau at those geographic levels, and then we can join it within our GIS. The data are typically available on data.[census.gov](https://census.gov). We can do a search for the table data that we're interested in, or in this case, we can just browse. So I'll choose Explore Tables. Now, in this webpage, we can see on the left, we have different filters,
>
> **[3:07](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-census-gis-data?u=76281980&t=187)** and in this case, we're going to filter by the geographic level we're interested in. In the middle are the tables, and we also have a preview of the table on the right. So let's go ahead and filter by those block groups. I will choose Geography and then block group, and here, I will choose the state that I'm interested in, Michigan, and now I will choose All Block Groups within Michigan. Now that I've set that filter, all of the data that I try and find in this web interface will be filtered based on that level of geography. So now I'll click on All, and now I will choose whatever kind of table data that I'm interested. I could do a search, or in this case, let's use this for the example, P1 level data, which is total population by the geography we're interested in. To download this data, I simply click on Download Table Data at the top of the column. I choose the thing that I want, in this case, P1, and then I click on Download. Now I have to confirm what level I want since there are multiple data [[Microsoft Products|products]] linked to P1. In this case, I can't get the 2020 census, but I can get the 2010 census, so I will select that for the Summary File, which is what I want. Now I'll click on the DOWNLOAD.CSV and download it. Great, so now we've collected the geographic file and the data file, and that's how you download data from the Census Bureau.
>
> **[4:40](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-census-gis-data?u=76281980&t=280)** Now we can unzip those files and do a join within [[ArcGIS Pro]], and we can then use those files to visualize our geographic entities, in this case, total population by block group in the state of Michigan.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[ArcGIS Pro]] (1)
> **Env Vars:** gis (5), tiger (5), kml (1), download (1), csv (1)
> **CLI Commands:** find (8), unzip (1)
> **UI Navigation:** click on (5), scroll down (1)
> **URLs:** [census.gov](https://census.gov) (2)
> **Exercise Files:** download the (2)
> **File Paths:** download.csv (1)
> **Definitions:** stands for (1)

#### [How to get Earth Explorer data](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980&t=0)** - [Instructor] Many countries have remote sensing satellite or aerial photography, and sometimes it's incorporated into national maps or part of a regional effort among countries like in Europe. Here in the United States, we have a few of those sites. So let me show you Earth Explorer. If you're in a country that cannot access this data site, just watch and learn what to expect for similar sites you might have access to. Here we are at earthexplorer.[usgs.gov](https://usgs.gov). This website is a one-stop shop for all things remote sensing, satellite imagery, and aerial photography. There is a vast amount of data on this site for us to download. Of course, we have a similar layout to the GIS environment that we're used to with layer controls on the left and a map data view on the right. Here in the upper right is a login place and I'm currently logged in so you'll need to have an account with the USGS to download data on this site. Now let me draw your attention back to the left side of this screen and here's where we'll spend most of our time. Notice here at the top of the pane, we have four tabs. We have search criteria, data sets, additional criteria, and results. The process to download data steps through each of these tabs. So let me show you how it works. The search criteria allows you to search a place
>
> **[1:37](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980&t=97)** and narrow down the geography that you're interested in so that when we move on to the data sets, everything is bounded by that geography that you've selected. And there are lots of ways to set the geography. First here under the geocoder, we can choose to search by features, here we could type in a feature name, we could search by the state, or we could even choose this dropdown that has lots of different features in it as well. Additionally, we could set it by a polygon or a circle or a predefined area, and we can use actual coordinates here to do that. The last option here is the date range, and we can even limit based on cloud cover that's in the image itself but there's many more ways, we could even choose here under the geocoding method, an address or a place, or if we know the path and row of the satellite, we can set that too. You can even upload your own KML layer or your shape file to bound the geography that you're interested in. For this example, let's go ahead and use my location of the university where I'm at and we'll set that as our parameter for our geography. So I'll do that and now I'll have to select the location. And there we've done it. So now we've set a location here, a geography, so that now when we go onto the data sets, all of the results from the data sets that we select will appear only in this area and it only will be bounded by this geography.
>
> **[3:14](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980&t=194)** Okay, let's move on to the data sets now, and let me show you that. This is the location where we will set all of the data that we want. We can choose any kinds of data here that we want. We can select one kind of data set or multiple data sets. Notice we have a collapsible option here where we can actually see a lot of the different kinds of data sets that are within these titles. And there's a lot here. So let me show you how to navigate through all of this. So here in aerial imagery, we have lots of different data sets available to us and when we checkbox them, then they are set as one of the data sets that we're interested in collecting or looking at for the results. Notice, when I checkbox this, we now have available to us additional criteria and results, but if I uncheck it, then those are grayed out and they're no longer available. So this is how we can set the data sets we're interested to download. Now also you have different icons linked to each one of the data sets. So if we click this icon for the collection info, then we get another page that's loaded that shows us the details about that particular data set. In this case, area photography. And it looks like the data range is from 1937 to 2014, at a dots per inch resolution of 400 to 1,000. And it looks like there are over 6.5 million photographs available in this data set.
>
> **[4:50](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980&t=290)** And so it's pretty overwhelming. But if you're interested in this data, then of course you can download it. So if we were to select this option, then our results would all be bounded based on this geography that I've selected here. It's really impressive. So let's take a look at some of the other options here. I'll uncheck that and collapse that. We have the AVHRR data which is our 1.1 global view of dataset. We have different kinds of commercial satellites that are available like the IKONOS or OrbView. We also have declassified data. So three levels of 1996, 2002, and 2013 when declassified data was provided on this website. So if you want to take a look at kind of what that looks like, these are the CORONA, ARGON, and LANYARD flights from 1960 to 1972. So you can step through and see that there are many different images available from that timeframe from, let's see, six feet to 460 feet resolution of flights for classified data. Now if you want to access this particular site, that's fine, and you can download the data, but it does have a cost. So for example, you know, looking at the [[Metadata]] here, you can see that to scan this, it's $30 per frame. So I have actually purchased some of the different images on this particular data set.
>
> **[6:22](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980&t=382)** So I've paid $30 per frame. This is for my research efforts and publication. So when anyone ever purchases a particular image in this data set it automatically becomes available to the public. Although there are thousands and thousands of images in this data set, thousands of them have already been purchased and are available, I think upwards to 25,000 at this point that are publicly available. So you might actually get lucky by finding your geography if you're interested in this data set without having to pay for it because it's already been paid for. Alright, let's go back here to Earth Explorer and take a look at some more of the data sets. We have a global digital elevation model with the GTOPO30 set. We also have other kinds of satellite data that's available to us at different kind of hyperspectral resolutions. We have even land cover and the whole Landsat series right here. And so we can look at Landsat Legacy data. So if we're interested in maybe Landsat one through five or even the thematic mapper or even Landsat seven, the enhanced thematic mapper, Landsat seven data, we can get that data and we can also access our current Landsat data as well. Here we could maybe grab Landsat eight or nine data. So lots and lots of data. A remarkable collection that's available through Landsat.
>
> **[7:56](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980&t=476)** Again, a global dataset. We also have radar, somewhat limited, but we do have radar data available to us. We even have some point cloud LAS Lidar data if you're familiar with that kind of data set. It's a high resolution Lidar data set. This is available all through the UAS portal here and even some vegetation options. So we have the normalized differential vegetation index which measures the quality of vegetation and we have a global data set for that so that you can download that. So we have lots and lots of available data that's available on Earth Explorer. So let's go ahead and choose an option here. We'll go ahead and grab Landsat data and we'll do Landsat collection two level one. Let's do Landsat eight and nine. So now I've selected that data set and now here I'm going to be bounded by this geography. So we should only get Landsat eight and nine data that's based in this geography. Alright, now let's go back to this next tab here, the additional criteria tab. All right. Now here based on the dataset this is where you'll see additional criteria. So each dataset basically defines what additional criteria are available. In this case with Landsat eight and nine, I have lots of different criteria that I could set. For example, if I'm interested in setting specific paths
>
> **[9:30](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980&t=570)** or specific rows that are available in the actual satellite itself, I can set day or night options if I just want those kinds of images that are at that particular time or other kinds of parameters. So here we can actually define additional criteria and in this case, I'm just going to leave it default. I don't need any additional criteria. I just want everything that is Landsat eight and nine and available for this geography. So to do that, I simply just click on the Results tab and now it steps through and it finds all of the images that are available for me. In this case for this geography, for this satellite, I have 561 options. When you do this, inevitably it will be different because there's always new data being added or removed and processed on this website. So be ready for different kinds of numbers. Okay, so let's take a look at the results. In this very first one, it looks like this is Landsat eight and it was acquired on this particular date of June 21st, 2023. The path number and the row number are 2022 and see here 30, so 22 and 30. And so when I click on the little footprint icon, it shows me that this is the footprint. So the idea is that this particular satellite is orbiting Earth and its path is at 22 and its row is at 30.
>
> **[11:06](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980&t=666)** So every image that's in Landsat eight for path 22 and 30 will be this geography that we're seeing here in terms of the footprint, this 185 by 185 kilometer footprint. We can also uncheck this and see it. We can check a couple of them to see what they are. So this is the next path over at 21 and same row 30. And so here you can see that these two different paths actually cover the geography that I'm interested in. So I might be interested to get both of these kinds of images because they cover the area that I'm interested in and they expand beyond that. So if I'm interested in those other places too, I have these images available for me. So let me show you a couple of other controls that are available for each of these images. I utilize this metadata browser to help me know some more of the metadata. You get a preview of the image and then you get all of the parameters related to the image. Typically what I'll do is if I'm unfamiliar with a data set, I'll use this to find out what the resolution is in the image. In this case, it looks like we have a panchromatic image available at 15 by 15 meters and then the [[Representational State Transfer (REST)|rest]] is at 30 meters by 30 meters. We also can find the projection information here. It's set in the WGS84 ellipsoid. So we can utilize this metadata option to help us know more about the image itself.
>
> **[12:41](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-get-earth-explorer-data?u=76281980&t=761)** And last is just simply to add the data to download option. So if I click on this, now it's added into my cart and I can select it. Now, sometimes you'll get additional options like what we have here, and that is per satellite type. So in this case, this Landsat eight series is giving us many different kinds of downloads. And so I'll collect this GeoTIFF, for example, I'll click it download and then it actually downloads for me right then and there. Sometimes it will actually go into a cart, and then you'll have to do a bulk download. It can be a little more cumbersome to do this process but if you're downloading many, many images from this website from different data sets, a bulk download might be the best option for you. One consideration for students that I recommend is that they have a high speed internet connection because they're downloading data from this website and it can become very intensive. So make sure that you have plenty of room on your hard drive that you're using when you download data from this site. Well have fun exploring this site. I spend many hours looking at the data sets on this site and exploring all of the different options that are available to me and it's such a wonderful, wonderful data provider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** gis (1), usgs (1), kml (1), avhrr (1), ikonos (1)
> **UI Navigation:** click on (3), checkbox (2), dropdown (1), select the (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **Versions:** 6.5 (1), 1.1 (1)
> **URLs:** [usgs.gov](https://usgs.gov) (1)

#### [How to bring hosted GIS data into ArcGIS](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-bring-hosted-gis-data-into-arcgis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-bring-hosted-gis-data-into-arcgis?u=76281980&t=0)** - [Instructor] All of the GIS data sites we've looked at so far are basically download data portals, but there are other options. ArcGIS servers use [[Representational State Transfer (REST)|REST]] endpoint protocols through a browser to serve GIS data. So let's access one together and see how that works to bring it into [[ArcGIS Pro]]. Here, I'm going to do a search for National Map REST service. And now click on the first option. And here we are at a landing page for the National Map run by the USGS. Here are all the different data layers that are available to us. So let's pick one of them. How about we check out other feature data and let's download Scanned Topo Maps of the US, so the contour maps of the United States. What I'm interested in is the REST service URL. I'll click on this REST service. And here on the landing page is the data access portal for the REST service. What I need is the URL. So I will copy that here and we will bring that in to ArcGIS Pro. Okay, so I've loaded ArcGIS Pro and now what we're interested in is to add this data. So here under the dropdown for add data, I'm going to choose data from Path. Here, we're going to add in that URL that I just copied. So now I'll just paste it here.
>
> **[1:33](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-bring-hosted-gis-data-into-arcgis?u=76281980&t=93)** And we want this served as a web service. So I'll click on Add. And now let's [[Zoom]] in and take a look to see what kind of data we've gotten. It's got here to the west of the United States and there are our Topo sheets they have loaded in. And as we zoom in and drill down, they will refresh and become clearer and maybe even at different resolutions. And so here we are. Great. Looks awesome. So this is how you can grab a URL from a REST service protocol and bring it in to ArcGIS Pro and use it for your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (6), [[ArcGIS Pro]] (4), [[Zoom]] (2)
> **Env Vars:** rest (6), url (4), gis (2), usgs (1)
> **UI Navigation:** click on (3), dropdown (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Get GIS data for a specific geography](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-get-gis-data-for-a-specific-geography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-get-gis-data-for-a-specific-geography?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-get-gis-data-for-a-specific-geography?u=76281980&t=5)** - [Instructor] All right, let's try a challenge together. I want you to go get GIS data for a specific geography. So your goal is to go to a GIS data portal, to download the GIS data, and then to visualize it in ArcGIS. This should take you not much more than 10 minutes.

> [!info]- Semantic Content
>
> **Env Vars:** gis (3)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Get GIS data for a specific geography](https://www.linkedin.com/learning/real-world-gis-22715766/solution-get-gis-data-for-a-specific-geography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-get-gis-data-for-a-specific-geography?u=76281980&t=0)** - [Instructor] All right, here is my solution to getting GIS Data for a Specific Geography. I thought it would be cool to take a look at Lake Michigan. So here I am at GIS Open data at the state of Michigan that we visited before. Let's type in Lake Michigan and see what we get. Ooh, Lake Michigan Bathymetric Contours. Let's go for that. Awesome, now I'm going to download it. So I'll click on Download and let's search for Shapefile. That's good. And we will download this. Now let me go ahead and unzip the data and then visualize that in [[ArcGIS Pro]]. Extract, (indistinct). Okay, here I've opened up ArcGIS Pro. Let's go to the Catalog. Here are the contours. Pull them over, and I don't really like that color, so I'm going to right click here in the contents on the symbol and choose the color that I'm most interested in. There we go, awesome.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (2)
> **Env Vars:** gis (2)
> **UI Navigation:** click on (1), go to (1)
> **CLI Commands:** unzip (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. What Can Be Done with GIS Data?

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding GIS data types](https://www.linkedin.com/learning/real-world-gis-22715766/understanding-gis-data-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/understanding-gis-data-types?u=76281980&t=0)** - [Instructor] GIS data typically tries to represent reality. The re-presentation or representation of places as points or polygons or images acts as a metaphor for reality, and as the mapmaker or cartographer, you have the variety of symbology available to you in ArcMap and [[ArcGIS Pro]] to visualize and enable design options for your data. There are two main GIS data types. Vector data refers mostly to data represented as points or lines or polygons, while raster data is made up of rows and columns or grids and pixels and is most commonly thought of as imagery. I'll discuss both later in this course. The data types have developed since the advent of the 1960s emergence of GIS in Canada, in England, and the United States, and through the work of several people in analytical cartography, vector data and raster data types became the dominant vocabulary. With the advent of the personal computer in the 1980s, ESRI focus was on software [[Application Development]] of ArcInfo. According to the ESRI website, they first developed ArcInfo in 1982 for microcomputers, and by 1986, a PC version was available and distributed. ArcInfo is a command-line based software package that handles both vector and raster geographic data, and it's been the industry standard tool
>
> **[1:34](https://www.linkedin.com/learning/real-world-gis-22715766/understanding-gis-data-types?u=76281980&t=94)** since its implementation, even though other competitors do exist. In contrast to ArcInfo, a much less exhaustive ESRI software package called ArcView was released in the early 1990s. Although not as comprehensive as ArcInfo, ArcView has a major advantage over its big brother, a graphical user interface. It's with this graphical user interface that ArcView has become one of the most popular GIS packages worldwide. In late 1999, ArcView 8 was released, which is better known under its new name, ArcGIS, which is an umbrella term for all the components of ArcGIS. ESRI combined many of the features of ArcInfo into a redesigned graphical user interface to produce an all-in-one GIS system. We call our current software ArcView 10.8 or ArcGIS 10.8, and some just call it ArcMap 10.8. ArcGIS Pro was released in 2015. It is a powerful and complex GIS software. Built on the concepts and experience of ArcView, ArcGIS Pro takes advantage of current computing technology. It is 64-bit enabled and has 2D and 3D mapping capabilities, and is tightly coupled to the the [arcgis.com](https://arcgis.com) online environment, tapping into the wider ESRI software ecosystem. ESRI has introduced different vector data models
>
> **[3:08](https://www.linkedin.com/learning/real-world-gis-22715766/understanding-gis-data-types?u=76281980&t=188)** with ArcInfo, ArcView, and ArcGIS while expanding data options for raster data, so let's dive into those now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (3), [[Application Development]] (1)
> **Env Vars:** gis (6), esri (6)
> **Versions:** 10.8 (3)
> **Definitions:** is a  (2), is an  (1)
> **URLs:** [arcgis.com](https://arcgis.com) (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [Mastering vector GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-vector-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-vector-gis-data?u=76281980&t=0)** - [Instructor] Esri has released two vector data models for GIS users, let's go through each. So you are a master of vector GIS data. Vector GIS data in ArcGIS and [[ArcGIS Pro]] is either in the georelational or the geodatabase model. The georelational vector data model is structured with a separate file system of associated files and is non-object-oriented. Common georelational files are coverages and shapefiles. Now the second model is the geodatabase model which has a contained file system and is object oriented and most readily associated with the geodatabase file. You will find both of these vector [[Data Structures]] are widely present in the available data that you can download. The coverage vector data model was introduced with Arcinfo and just like the software sounds, arc describes geometry objects like points, lines and polygons, whereas info describes attribute information about the arcs. If coverage data has points of cities we might see those points on a map and then be able to query any of their attributes. The coverage data model contains the point information of the location and the attribute information of the relation to the point. So let's take a look at the coverage file together. Any coverage file will have a common file extension in a .cov, and here in [[Windows]] I've navigated to the exercise file of the coverage,
>
> **[1:35](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-vector-gis-data?u=76281980&t=95)** so we can see a complex file structure associated with one coverage. The initial design of the coverage layer has multiple files associated with it. Esri software understands this file structure and is able to read the different associated files you see here to produce the vector results. So individually, most of these files themselves are difficult to understand but if we open them up in something like ArcMap then they will appear as a single file structure. So let me show you that now. Okay, here I am in ArcGIS, and if I go to my catalog here you can see that same file, that coverage file, it appears as one file, and here are the different components. The annotation layer, the arc layer, the label, polygon, and tic layers, all associated with this coverage file. Again, there are two kinds of georelational vector data formats. There are coverages and then there are shapefiles. And shapefiles work in a similar way as coverages do. The shapefile was introduced in ArcView in the early 1990s, and just like the coverage file it has several files associated with it together that will visualize a geographic feature. So let's pop into ArcGIS Pro and take a look. So I will add the cardiographic boundary file that we downloaded earlier from the Census Bureau of the block groups, and you can find this in the exercise folder called shapefile. Here in ArcGIS Pro, I've started a new project
>
> **[3:10](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-vector-gis-data?u=76281980&t=190)** and I'm adding the shapefile from the exercise folder. So let's add that block group layer from Michigan. All right, here we go, great. And if I open this up in the catalog, notice that if I hover over this file it shows this property as a shapefile. Now here's a single file, right? But if we pop over to Windows we'll see all of the files associated with this. Let's do that now. Okay, so here in my Windows environment, in this case the shapefile is made up of several files and all of these files together constitute a shapefile. It's good practice in GIS to copy vector data from one drive to another drive using the Esri software instead of Windows to guarantee that you get all the associated files in the georelational vector data model. Let's turn our attention now to the geodatabase model. Introduced in ArcView 8 or ArcGIS 8, the geodatabase model is a contained file system and a true relational database with all the advantages associated with [[Database Management]]. Instead of a flat file system, the geodatabase stores the geography as objects. So you can apply structured query language or [[SQL]] functions and operators on the geodatabase. Esri's first model started with the personal geodatabase which was based on the [[Microsoft]] Jet database engine.
>
> **[4:44](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-vector-gis-data?u=76281980&t=284)** The personal geodatabase has a two gigabyte storage limit. It is being phased out by Microsoft and its not an option in ArcGIS Pro, which leaves us with the wonderful file geodatabase, and exclusive to ArcGIS Pro, the mobile geodatabase. The geodatabase vocabulary is simple, geodatabases have two main aspects, feature data sets and feature classes. Feature sets house a series of feature classes that share the same geographic projection. I'll cover projections elsewhere in this course. However, there can be standalone feature classes that do not share the same projection. There is no limit to the number of feature classes that you can have within a geodatabase, as a standalone or within a feature dataset. And you can even put raster data within a geodatabase. So let's take a look at that now. Now let's take a look at the geodatabase in ArcMap. Again, I'll start with a fresh document here, and you'll find this data in the exercise folder for geodatabase. When we open up our catalog and navigate to that geodatabase, you'll see the data that I want, in this case, landuse_Ontario. Inside landuse_Ontario geodatabase we have one feature class called LandUse_Polygons. Now, if we pop over to the Windows environment, looking at this same file in the Windows environment we see that it has several files associated with it
>
> **[6:20](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-vector-gis-data?u=76281980&t=380)** but they're all under one particular folder and that is landuse_Ontario.gdb, see, here we go, and there we are. And in this Windows environment the files make no real sense to us under this folder, however, conveniently the geodatabase structure makes it very easy to share because it's all within one folder. All we have to do is simply grab this folder, zip it and send it off to a friend or colleague and they will have the whole geodatabase. Now, let's pop back into ArcMap and look at the particulars. Here in ArcMap I'm going to add that feature class to our table of contents to visualize it here in the data view. So here are our Ontario LandUse_Polygons in ArcMap. Later in the course I'll show you how to create a geodatabase and set it up with feature data sets and feature classes. But now let's just take a look at the attribute table associated with this layer. We right click on the layer and we choose to open the attribute table. There are two things I want you to see. First, this shape column here, this is where all the geometric data is stored. And so when you see Polygon listed here Polygon is actually an object that's stored in this column row by row. And now let me expand this a little bit so we can see the entire data table, great. Also, when we have a geodatabase created,
>
> **[7:55](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-vector-gis-data?u=76281980&t=475)** if it's a polygon layer, shape length and shape area are added as columns in the data. The units here are associated with the geographic units related to the projection. In this case, they really are meaningless to us because this file is simply geographic coordinates of latitude and longitude. If we projected this with a map projection in imperial or metric units, the results then would be meaningful. And I've already done this for us. So let's take a look at that data in the exercise folder. Here, I've started a fresh instance of ArcMap, and here and the catalog we have the projected data that we're interested in. So let me grab it and pull it in here, great. Now, if we take a look at the attribute table and we look at those same columns of shape length and shape area, they're meaningful to us. In this case I can take a look at the projection information and find out what the details are related to this particular layer. Here under the source tab, I can find out what kind of units we're dealing with, in this case meters, and so that's what we have here under shape length and shape area. Okay, now let's wrap up by taking a look at the mobile geodatabase. Here we are in ArcGIS Pro, so now let's take a look at the mobile geodatabase which has been made available since Arc GIS Pro 2.7 and above. If I go over here to the catalog
>
> **[9:31](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-vector-gis-data?u=76281980&t=571)** and I right click on my data folder, I can choose new and mobile geodatabase to create a mobile geodatabase within this project. I can expand this, and now we have our new mobile geodatabase. The mobile geodatabase is built upon open source SQLite which means it has the advantages of being viewable by third party SQL software, being open source so that there's no licensing concerns, and with global use of SQLite as the preferred mobile app database engine, the mobile geodatabase has become Esri's recommended choice for geodatabase types. So now let's transition and take a look at Raster data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7), [[ArcGIS Pro]] (6), [[SQL]] (2), [[Microsoft]] (2), [[Data Structures]] (1)
> **Env Vars:** gis (5), sql (2)
> **CLI Commands:** find (5), make (1)
> **UI Navigation:** click on (2), go to (1), navigate to (1), open the (1)
> **Analogies:** just like (2)
> **Best Practices:** good practice (1), recommended (1)
> **Versions:** 2.7 (1)
> **Cross-References:** later in (1)

#### [Mastering raster GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-raster-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-raster-gis-data?u=76281980&t=0)** - [Narrator] Mastering raster GIS data fundamentals will enable advanced analysis and cartography. And unlike complicated vector [[Data Structures]], the raster data model has a simple and elegant structure. To begin, I want to show you the kinds of raster data supported in ArcGIS and [[ArcGIS Pro]]. So let's do a quick internet search with Esri's great help feature. On the slide here, I have the search terms quickly to find what we need to use if you're using ArcGIS Help or if you're using the ArcGIS Pro Help. I'm going to use Esri's internet help now with ArcGIS Pro. Okay, I've done a search for ArcGIS Pro Help, and here I am. And now I'll copy in that term raster file formats and do a search. And we'll choose raster file formats. So here on this page are the vast number of raster data file formats that ArcGIS Pro can read in. And many of these are also available in ArcGIS. You can see this page is very, very extensive. So there are many kinds of raster data file formats that are available to us within ArcGIS Pro. Now let's discuss the different elements of the raster data model itself. The raster data model is elegant, and although there are many different file extensions, there is a common file structure across those extensions.
>
> **[1:37](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-raster-gis-data?u=76281980&t=97)** First, raster data has a grid system of rows and columns and within those rows and columns we have cells or pixels, and each pixel has a single digital number. It could be an integer or it could be a decimal number such as a floating point number. A raster can also be geo-referenced and some rasters have multiple bands. This is especially the case when we have spectral imagery. There is a considerable amount of raster data available and different types of raster data can be grouped into categories. We have satellite imagery, and we've already explored that with Earth Explorer. We also have digital elevation models and digital orthophoto quads. We have digital raster graphics, which are rasterized versions of toposheets. And finally, imagery or graphics that are scanned files are raster data. Now let's open up ArcGIS Pro and explore the raster data model together. Here we are in ArcGIS Pro. In the exercise file folder you can open up the basin_bb raster. I'll go ahead and grab that now from catalog under the Raster_DEM folder and the_basin_bb. This raster is a digital elevation model in Big Bend, Texas, which I downloaded from the Texas GIS government website. In the contents here you can see the values
>
> **[3:11](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-raster-gis-data?u=76281980&t=191)** showing the elevation from high to low. When we right click on the layer itself and open up the properties, we can see more details. Under the source tab and raster information we can begin to see those details. Notice here we have 412 columns and 468 rows. It also has one band and the resolution pixel size is 30 by 30. If we scroll down here, we can find more details under spatial reference. In this case, it appears that we have a linear unit of meters, so that means that our pixels are 30 meter by 30 meter pixels. Now let's go ahead and close this, and if we want to adjust the symbology here, we can right click on this layer and choose symbology. Now, in the window pane for symbology we can choose all kinds of options that are available to us to visualize this particular layer. Now we also have some options in the contents itself. So if I go back over here to the contents and I right click on the actual numbers themselves, then you can see I get this very handy dropdown menu which is exactly what you just saw in the symbology window pane. But conveniently, we can also choose to have a text view. If I click here on show names, then what happens is we get to actually see
>
> **[4:45](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-raster-gis-data?u=76281980&t=285)** these color ramps with their names themselves. And in this case, we have many different options. We're dealing with a digital elevation model, a DEM, so lots of options related to elevation. So here is a nice, elegant elevation DEM model that's built with a nice symbology for us. So if you ever forget how to access the symbology, you can always right click on the layer and choose symbology from the options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (8), [[Data Structures]] (1)
> **UI Navigation:** click on (4), scroll down (1), dropdown (1)
> **Definitions:** is a  (4), means that (1)
> **Env Vars:** gis (2), dem (2)
> **CLI Commands:** find (2)
> **Code Identifiers:** basin_bb (1), the_basin_bb (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** such as (1)

#### [How to choose the right GIS data formats for Projects](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-choose-the-right-gis-data-formats-for-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-choose-the-right-gis-data-formats-for-projects?u=76281980&t=0)** - [Instructor] Should you do your projects in vector or raster data formats? Typically, I find that real world GIS projects will incorporate both vector and raster data. One of the most powerful qualities of Arc GIS and Arc GIS Pro is the ability to convert and analyze vector and raster data. Let's take a look at some of the kinds of geography in both the vector and the raster formats and some decisions about what format might be best. Here I've created an example for us in Arc GIS Pro. I've downloaded a local raster digital elevation model of a park I like to visit on Lake Michigan's Shore. Here you can see an overhead view of the dune system and where the point is located is the terminus of a boardwalk that I like to go to. Now, I've often wondered what is the ideal trail direction that we might build a new trail from that boardwalk end all the way to the Lakeshore beyond the woods? Well, Arc GIS and Arc GIS Pro can do this analysis for us through a cost allocation analysis. So I used toolbox to build a trail that finds the best route from that point that minimizes the change in elevation and maximizes the most direct route to the Lakeshore. Let's turn off the composite of the dunes and here is the digital elevation model that I used.
>
> **[1:35](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-choose-the-right-gis-data-formats-for-projects?u=76281980&t=95)** Now, the cost path result looks like this. Notice that the trail is presently a raster and there could be very good reasons to keep the trail line in the raster form. If we wanted to do other kinds of raster analysis such as many of the things that are available in spatial analyst toolbox. For example, we could combine the trail with a slope raster to see which parts of the trail has the most slope. Of course, raster lines like this have some symbology constraints since it's locked into the raster grid. If I [[Zoom]] out, the line practically just disappears. But if we wanted to convert this line to a polyline, a vector entity, then we could actually have the ability to thicken and scale it and change the colors. Well, Arc GIS and Arc GIS Pro can do this for us. So let me show you how to convert it. Under the analysis tab, if we go to tools, it'll open up here, the geo processing pane and one of my favorite tools is the search tool. Here, I'm going to type raster to polyline and there we go, raster to polyline. So now I have this geo processing tool to be able to convert this raster line into an actual polyline. Let me do that now. Okay, so now we have our polyline. That is not a raster, and of course we can change
>
> **[3:08](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-choose-the-right-gis-data-formats-for-projects?u=76281980&t=188)** the symbology very easily. We can zoom in and zoom out and see it really nicely. Let's compare however the results between the polyline and the original raster line. Here I've zoomed in and now I'm going to zoom in just a little bit more. And you can see here in the bluish color, the raster pixels and then the yellow line that's underneath there. So there are some discrepancies between the raster view and this vector view. They're very close. But what if you gave these plans to a trail developer? Which one would you want to use to create the real trail either the raster or the vector? We can't really know unless we actually walk this landscape and see the potential lines and what other factors might be important in building the new trail. But I want you to be aware that these discrepancies exist when you convert from one form to another. So we have to be aware that when we do this vectorization or even the opposite approach going from vector to raster called rasterization that we might lose some spatial precision and that can affect our future analyses. If there are spatial errors, they might propagate through our entire analysis and that could lead to significant problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (4)
> **Env Vars:** gis (8)
> **UI Navigation:** go to (2)
> **Analogies:** such as (1), for example (1)
> **Warnings:** be aware (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Vectorization vs. rasterization](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-vectorization-vs-rasterization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-vectorization-vs-rasterization?u=76281980&t=0)** - [Instructor] Now let's do a challenge together. In this challenge, your goal is to download a shapefile or a feature class, and then we want to convert it from vector to raster. And last, I want you to evaluate the results and compare and contrast what you see with the vector and the raster output. In total, you should take about 15 minutes or less to complete this challenge.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Vectorization vs. rasterization](https://www.linkedin.com/learning/real-world-gis-22715766/solution-vectorization-vs-rasterization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-vectorization-vs-rasterization?u=76281980&t=0)** - [Instructor] Now, let me show you the solution I came up with. I'm interested in exploring the possibility of the size of my city, and so I'm going to download a vector data set of the boundaries of my city limits here on the GRData website that I've shown you in a previous part of this course. Here I'll click on the city of Grand Rapids Limits and then I will search for shape file. There we go, download, here we are, and now unzip this, and then I'll bring it into [[ArcGIS Pro]], and then we will convert it from vector to raster and evaluate it together. Okay, here I've added the layer in ArcGIS Pro. It's a vector data, and now my goal is to convert it to a raster data set and then compare how the boundaries are compared to the raster. Here, we'll go into analysis and tools for the bioprocessing. In this case, you might not know how to convert from vector to raster, so let's do that by search. I will choose Polygon to raster and see what comes up. All right, polygon to raster is the first tool and so let's go ahead and step through. I'll choose the city of Grand Rapids polygon. In this case, I'm interested perhaps in the shape of the files so let's choose shape and let's go ahead and do that.
>
> **[1:36](https://www.linkedin.com/learning/real-world-gis-22715766/solution-vectorization-vs-rasterization?u=76281980&t=96)** Now, we could choose to change the cell size. In this case, I'll go ahead and leave it default, but based on the kind of units that you have, you might choose to change this cell size. In this case, this particular layer is unprojected. It's just geographic coordinates, and so this latitude and longitude coordinate information isn't very meaningful to me, but in my analysis, what I'm most interested in is just the lineup of the raster and the vector before I would convert them into projected layers to actually do an analysis of their areas. Okay, the polygon to raster is complete. Now, let's go ahead and take a look by zooming in to check our results and it looks like there is some discrepancy. Right here, you can see that the raster layer actually extends beyond the polygon layer, and so if we follow the line, we can see some other areas where the overlap isn't precise and so when we're converting from vector to raster or raster to vector, we need to again be aware of these possibilities, so good job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (2)
> **CLI Commands:** unzip (1)
> **UI Navigation:** click on (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 3. What Is Up with Projections?

[↑ Back to Table of Contents](#table-of-contents)

#### [How to understand the latitude, longitude, and scale](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-understand-the-latitude-longitude-and-scale?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-understand-the-latitude-longitude-and-scale?u=76281980&t=0)** - [Instructor] To understand projections, we first start with the concepts of graticule and Scale. A graticule is just a geographic grid system. Here we are in [[ArcGIS Pro]] and I've added different layers main graticule lines, and graticule. You'll find both of these shape files in the grid folder for this chapter in the exercise files. Now, the graticule is a reference system and we use that to locate places on earth, as a refresher. Remember that you can find any place on the graticule of latitude and longitude in the form of coordinate pairs. We measure away from two reference lines the equator at zero degrees latitude and the prime meridian at zero degrees longitude. We measure away from these lines and we're able to find location based on latitude and longitude of any place on earth. And we typically think of this system in terms of degrees, minutes, and seconds, or DMS. For example, if we wanted to locate a feature like the Eiffel Tower in Paris, we could describe its location using latitude and longitude. So let's go ahead and use the locate tool and [[Zoom]] into that location. Here I'm going to click on locate and I'll type in Eiffel Tower and we will find the Eiffel Tower together. At the bottom of your screen here in the scene window you can see that we have the degrees right here and we can actually change them to degrees,
>
> **[1:34](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-understand-the-latitude-longitude-and-scale?u=76281980&t=94)** minutes and seconds. So let's do that. So here we have the degrees, minutes, and seconds for this location that we have just found the Eiffel Tower in Paris. Since the granule covers the whole earth we can identify any place again with this system. Now the DMS format is handy, but it becomes somewhat cumbersome when we have to add in degrees and minutes and seconds symbology, and sometimes in things like a spreadsheet or even a search tool, to eliminate the need for these symbols we can convert the latitude and longitudes reported in degrees, minutes, and seconds to an easier form called decimal degrees or DD. A simple conversion can be made between degrees, minutes and seconds, and DD, and you may know how to do this already, but if not, let me show you a simple explanation using the Eiffel Tower location. Here I've created a slide that shows this process, to convert from degrees, minutes, and seconds to decimal degrees. I'm going to use the Eiffel Tower Latitude here, 48 degrees 51 minutes, and 29.952 seconds north. First, we'll convert the seconds since there are 60 seconds in each minute. We'll start with those. In this case, we have 29.952 seconds and we're going to divide that by 60 and this gives us the result of 51.4992. Now we'll take that and convert that by 60
>
> **[3:11](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-understand-the-latitude-longitude-and-scale?u=76281980&t=191)** and that gives us the result of 0.85832. Now for the third step all we have to do is drop the degree sign and add the number of degrees in this case, 48. So our result is 48.85832. The last step is to check the compass direction for North and East directions. We have a positive symbol that's assigned for any direction that is south or west of the equator or the prime meridian. We have a negative sign. In this example of the Eiffel Tower. We have 48 degrees north so we have a plus sign or no sign at all which assumes that it's a positive number. So here, when we consider the degrees, minutes and seconds of the Eiffel Tower latitude it converts to a decimal number of 48.85832. A very convenient number for us to use. Back here in Arcgis Pro. If you right click on any of the features that you've searched for in the scene window, and choose what's here. You can get the DD coordinate pairs of any place on Earth. So here, if I scroll down you can see those very things, the X and the Y. So that is an easy way to begin building your own locational database of features around Earth. Now, before we move on I want to mention the concept of scale. So let me zoom out to Earth in its full form here.
>
> **[4:47](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-understand-the-latitude-longitude-and-scale?u=76281980&t=287)** We'll zoom to layer. Very good. Okay, now, if we've zoomed out to Earth here we have a representation of Earth as a globe. In essence, this digital globe has reduced in size from the real Earth. So if we look at the scale of this globe maybe it's one to 145 million. It would mean that for every one unit on this globe it represents 145 million units on Earth. So literally one inch on this globe would represent 145 million inches on Earth, along with the graticule. The idea of scale or reduction is one of the key components of understanding projections. Here, the Earth has been reduced in scale or reduced in size to be manageable, be produced as a map.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (3), [[ArcGIS Pro]] (2)
> **Versions:** 29.952 (2), 48.85832 (2), 51.4992 (1), 0.85832 (1)
> **CLI Commands:** find (4)
> **UI Navigation:** click on (2), scroll down (1)
> **Env Vars:** dms (2)
> **Definitions:** is a  (1), is an  (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [What is a developable surface?](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-a-developable-surface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-a-developable-surface?u=76281980&t=0)** - [Instructor] Mastering projections is required in real-world GIS, so let's build your understanding of developable surfaces. The concept of a geographic projection involves taking a three-dimensional Earth and putting it on a two-dimensional format, such as a piece of paper or a computer screen, or some-other two dimensional medium. Borden Dent in 1999 defines projections as "The systematic arrangement of the Earth's meridians and parallels onto a plane surface." From the previous video where I introduced the concept of a graticule, along with reduction in scale of Earth, we can use a mathematical transformation to put the 3D Earth onto a 2D surface. To do this, it is most easily visualized in the form of a developable surface. You can think of a developable surface just as a 2D object that you can manipulate by bending or moving. Maybe like a piece of paper. Although technically 3D, it's basically can function as a 2D object. So let's assume two things. First, our piece of paper can fit around a globe like this, and secondly, our globe has see-through lines or graticule lines on it. Now if we wrap the paper around the see-through globe at the equator in the form of a cylinder where it touches only the equator, and we put a light source inside our globe, we would see the graticule lines projected onto the paper.
>
> **[1:38](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-a-developable-surface?u=76281980&t=98)** And if we could imprint those lines onto the paper permanently, and then unroll the cylinder and place it on a table, where it was flat, we could say we've just created a cylindrical projection of the Earth. The scale of the globe will be the same on the paper, but only precisely the same where the paper touched the globe, in this case, at the equator. So in this example, we would say that scale is true along the equator, and is distorted away from that line at zero degrees latitude. There are three main developable surfaces, the cylinder, the cone, and the plane, or the as azimuthal surface. The shapes of these kinds of surfaces produce projections linked to their name. Thus, we have cylindrical projections, conic projections, and azimuthal projections. We can move the developable surface around the globe too, to produce different [[Forms]] or projections. The transverse projection or the oblique angle projection are examples. Now, wherever the developable surface touches the globe, it is tangent to the globe, so we call that the standard line, and that's where scale is true. We could also create two standard lines if we made our developable surface cut right through the globe itself. In this example, notice the cone is actually cutting through the Earth at two spots. We call this case the secant case
>
> **[3:10](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-a-developable-surface?u=76281980&t=190)** instead of the tangent case. The secant case is when there are two lines of scale that are true. Whenever we create a projection away from the standard line or lines, there is distortion. In the last video of this section, I will cover distortion, and I will show you different projections with the Tissot's indicatrix circles.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **Cross-References:** previous video (1), in the last (1)
> **Env Vars:** gis (1)
> **Definitions:** we call this (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using geoids, spheroids, and datums in GIS](https://www.linkedin.com/learning/real-world-gis-22715766/using-geoids-spheroids-and-datums-in-gis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/using-geoids-spheroids-and-datums-in-gis?u=76281980&t=0)** - [Narrator] Now let's explore the concepts of Geoids, Spheroids, and Datums. The earth is irregular in shape because of its rotation and its geology, so it has undulations and irregularity, even though it's round in shape. Geodetic scientists have tried to model the surface of the earth and they have created the geoid, which is an irregular oval or egg-shaped surface that tries to approximate the surface of the Earth. The geoid, offers a nice, smoother surface to work with when trying to model the earth, especially in a computerized environment, but because the geoid is also an irregular shape it's difficult to use in a mathematical sense for modeling earth. Therefore, geodetic scientists have used the ellipsoid to approximate the geoid, so the ellipsoid approximates the geoid, which approximates the surface of the Earth. The ellipsoid is a very easy model to use, to model the curvature of the Earth and this can be done easily using the concept of the semi major axis and the semi minor axis. If we adjust either one of these axes, then earth is adjusted and we can then model the earth and its curvature to try and determine the real distances between places, especially over large geographies like continents. The model of Earth we choose to model a particular location then becomes very important.
>
> **[1:34](https://www.linkedin.com/learning/real-world-gis-22715766/using-geoids-spheroids-and-datums-in-gis?u=76281980&t=94)** We can adjust the semi major and semi minor axes to change the curvature. What this means is that different countries around the world choose different ellipsoids to map their locations because it best represents the curvature of the Earth at their location. In addition to this concept of the ellipsoid we have the datum. Datums are simply a reference system of points, systematically put onto an ellipsoid. Essentially, you can think of this as a series of points that are interconnected or maybe form triangles. An example of this can be seen from my travels at the Hoover Dam. Here I found the USGS datum marker on the Hoover Dam. This benchmark location serves as a reference location for surveys. Often locations and elevations are reported on these kinds of markers. Now, some significant datums have been created in the United States. The 1927 North American Datum, or NAD27 is an example. This particular datum uses the Clark 1866 ellipsoid, and this is a convenient way to describe a semi-major and semi-minor axis, often ellipsoids are attributed to a person who created them, or the location that best describes where they were created. Using benchmarks across the United States like the one I showed you at the Hoover Dam, but starting in Manhattan, Kansas the United States was measured in terms
>
> **[3:08](https://www.linkedin.com/learning/real-world-gis-22715766/using-geoids-spheroids-and-datums-in-gis?u=76281980&t=188)** of distance to those benchmarks and their elevations. In a moment, we'll see these measurements didn't quite get as precise as we'd like. Now, an updated version of NAD27 is NAD83, the North American Datum of 1983, and that utilized satellite technology. In this case, the GRS80 spheroid was used, and here are the particulars about the semi major and semi minor axis for that particular ellipsoid. And it's not so important to know these particular distances from a GIS practitioner standpoint, but it is important to know that the semi major and semi minor axis can be adjusted, which then results in the adjustment of the curvature of the earth of the model of your geography, in this case, the North American continent. The last common datum that I'd like to talk about is the WGS84 or World Geodetic System of 1984. In this case, the GRS80 spheroid is adjusted very, very slightly, which results in a nice global sphere or ellipsoid that is used on almost every GPS handheld device or receiver and smartphone. Also, the coordinate system of latitude and longitude that you find on your most popular mapping applications often are reported using the particular WGS84 ellipsoid. If you were to choose a different datum such as NAD27, and you reported latitude and longitude for NAD27,
>
> **[4:45](https://www.linkedin.com/learning/real-world-gis-22715766/using-geoids-spheroids-and-datums-in-gis?u=76281980&t=285)** those locations would be different than they would be reported for WGS84 because it's a different model of the earth. Now, to get an idea how this datum shift occurs, let's look at the NAD27 compared to the NAD83 results. Notice here near the center of the United States, the accuracy is pretty good comparing these two, but as we extend to the coast, to the west and to the east the datum shift between 27 and 83 is pretty significant where in some places we're well over 100 meters off. With the advancement in satellite technology, we've been able to increase our accuracy and precision of coordinate location. So now that we've explored the graticule, the developable surface, geoids, spheroids, and datums, let's go ahead and take a look at all of these things together using the Indicatric circles.

> [!info]- Semantic Content
>
> **Env Vars:** nad27 (5), wgs84 (3), nad83 (2), grs80 (2), usgs (1)
> **Definitions:** is an  (2), is a  (2)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Mastering projections in GIS](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-projections-in-gis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-projections-in-gis?u=76281980&t=0)** - [Instructor] In previous videos I've shown you the graticule scale or reduction of earth, developable surfaces, ellipsoids, geoids and datums. So now let's master projections in GIS. First, it's important to consider that when we go from 3D Earth to a 2D medium we have distortion. Projections help us compensate for distortion by allowing us to preserve some element. For example, equivalent projections preserve areas. So if you're mapping a map of population density, you'll want to preserve your area because you're looking at people per area. An equivalent projection would be a good choice. Another option would be a conformal projection, which preserves angles. When you preserve angles, a byproduct is that the shape of things is preserved. We'll talk about that in just a minute. Another category to consider is the compromise projection. Although it doesn't preserve area or angle, it tries to minimize distortion overall. And usually our global projections are compromised projections. There are two other aspects that we might preserve, such as direction and distance. However, maps that preserve angles cannot preserve areas and maps that preserve areas cannot preserve angles. So we have to choose either an equivalent, conformal or some other type of projection. So what does it mean to preserve angles in a map projection? Well, let's start here with our longitude lines.
>
> **[1:37](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-projections-in-gis?u=76281980&t=97)** In this case, I have 48 degrees and 49 degrees respectively. Now, if we draw a line across these two longitude lines, such as this, and we measure the angles such as A and B and then we find that A equals B, that means that our vector or our rhumb line or loxodrome is consistent across the lines of longitude. And if this is the case, then the angle is preserved and the byproduct is that the shape of things will be preserved in our map, so we have a conformal map. One of the best ways that we can understand this idea of distortion is through the use of Tissot's indicatrix circles. The symbol representing a point on a reference globe with a unit radius is called a Tissot's indicatrix. So let's look at that in our globe together within [[ArcGIS Pro]]. Here within ArcGIS Pro, I've added the layer for indicatrix circles and you'll find this in the Tissot's indicatrix folder within the exercise files of this chapter. Here you can see the indicatrix circles are applied on the globe and as I move it around you can see the different circles are available. The unit circles don't change but as we move around the globe you can see they adjust to become the size and the shape based on our globe. Now these unit circles are really
>
> **[3:09](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-projections-in-gis?u=76281980&t=189)** helpful to us to understand distortion. So here I've mapped that on a 2D surface and notice what's happening here. Along the equator in this map, we have unit circles that don't change. The indicatrix circles are the same size and the same shape, but on the north and the south they actually change size and shape. And so that is an indication that there is distortion in the north and the south of this particular map projection. So how does this work? Notice in this graph we have two axes. We have area and we have angles. Now, we will start in the upper left box and compare that to the others. So on a map, if we have these kinds of circles and then other ones that are maybe like in the upper right, there's no change in the shape between the upper left and the upper right, but definitely a change in area. So that means that area changes, therefore angle is preserved because the shape is preserved. Now if we look at other examples, such as starting in the upper left and going to the lower left box, there's no change in area, but there is change in shape. So this kind of projection would be an equal area projection, an equivalent projection because area is preserved. The last option is to compare the upper left and the lower right box, and the upper left
>
> **[4:43](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-projections-in-gis?u=76281980&t=283)** compared to the lower right means that both the area and the shape or the angle changes. In this case, neither one of these aspects is preserving that kind of projection. So back here in ARC Pro, that's exactly what we have here. We see that this circle is not the same shape and is not the same area, so this map is not an equivalent map nor a conformal map because it's not preserving area and it's not preserving angle. Okay, here we are back in ArcGIS Pro, and what I'm going to do is adjust the projection so that we can see the Tissot's indicatrix circles and what results based on the kind of projection. All I'm going to do is change the data frame properties here. So I'm going to right click on map one, go to properties, the coordinate systems tab, and here I will adjust the projection. So we're going to adjust it from this category called Projected Coordinate System. In this case, let's start with Albers equal area. Let's see here, scroll down, and there we go. So let's use North America, Albers equal area, and let's use not the conic but- There we go. North American Albers equal area conic projection. All right, so now let's think about this. Before we click on this, what's going to happen to the Tissot's indicatrix circles
>
> **[6:16](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-projections-in-gis?u=76281980&t=376)** based on the graph that you just saw? What should happen is that area is preserved. So the size of the circles should be basically the same but the shape is going to get distorted. So let's check it out it. I hit okay, and there we go. So it looks like here the area is preserved in these circles. Even this one out here is probably the same as this even though it's very difficult to tell. So in this projection, it's an equal area projection. And so the Tissot's indicatrix circles can help us understand what kind of distortion is happening in our map. Let's change this to be a conformal map projection. So let's go with maybe this one, Lambert. So North American Lambert conformal conic map. So what would you expect here? You would expect that the area isn't preserved so the size of these circles are small and large but they are going to be circles. So let's see what happens. All right, I hit okay and in fact, that's the case. So we've got some really big circles and some small circles but the circles are preserved. The shape of thing is preserved, but the area is distorted, so we have a conformal map. Awesome. Okay, now let me show you some compromise projections on a global scale. So we'll go back to properties and take a look at, in this case, not continents but let's go ahead and go with the world.
>
> **[7:51](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-projections-in-gis?u=76281980&t=471)** And so let's choose world and let's start out with maybe the cube projection. And now it loads. There we go. And so here you can see that the world is just a cube. So if we were to take these and fold them up we could actually make a little cube. So as you can see here, the distortion isn't perfect but it's also not too bad, right? Based on the particular location that we have set this map projection at, we actually have pretty good you know, properties related to shape and size of things. So this cubic view of earth is a really neat projection. Let's take a look at another one. Here I'm going to choose properties and in this case let's look at oh, Goode's world atlas views. So Goode's homolosine land view. So here it's kind of the orange peel idea of a projection. Again, another compromise projection. That's pretty powerful, right? We don't have a big adjustment in the size of the Tissot's indicatrix circles in terms of their shape and their size but a very nice compromise overall, a beautiful projection. Now let's take a look at Mercator's projection. So we'll go here and we will scroll down to the Mercator projection, the infamous Mercator projection that many of you are familiar with. Okay, here we go.
>
> **[9:23](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-projections-in-gis?u=76281980&t=563)** So the famous Mercator projection is a conformal projection. In this case, angle is preserved, the shape of things is preserved, but area is exaggerated dramatically especially to the north and the south. Of course, Greenland in real life is not nearly as big as the southern cone of South America, but in the Mercator projection, Greenland appears huge because it's near the poles. And also take a look at Antarctica. It looks like it's a giant land mass, when in fact it's much, much smaller than this. And let's go ahead and choose one last projection to take a look at. Let's choose the Robinson projection, after Doctor Arthur Robinson. Okay, so this is a wonderful global projection that is a compromise projection. Here you can see a global picture where distortion is kept at a minimum with the view of these Tissot indicatrix circles. So all of these adjustments have been on the fly. We haven't made any permanent adjustment to the Tissot's indicatrix circles. So that brings me to this concept of what happens if we put another layer into the contents pane that we have here. What should happen is that the layer on the fly will adjust to whatever projection we have. Here we have the Robinson projection
>
> **[10:55](https://www.linkedin.com/learning/real-world-gis-22715766/mastering-projections-in-gis?u=76281980&t=655)** and I'll add a new layer, the state of Michigan block groups that we grabbed and downloaded from the Census Bureau earlier in this course. So here I'll add data and I will choose to add those block groups. There we go. And they were added right here, the state of Michigan. And look it conformed exactly right at the angle there of the Robinson projection based on where it is in the world. It will conform on the fly. But to permanently change a map projection from one projection to another, you'll need to use the toolbox. So let me show you that now. Here under tools and geoprocessing, we click on toolboxes and we can go down to [[Data Management]] tools, projections and transformations and then we can actually project one layer from one kind of projection into another kind of projection permanently. So if you're doing real world GIS, that means that you should be putting your layers into the same projection if you're conducting an analysis. So let's do a challenge around that idea.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (3), [[Data Management]] (1)
> **Definitions:** means that (4), is a  (4), is called (1), is an  (1)
> **UI Navigation:** click on (3), scroll down (2), go to (1)
> **Analogies:** such as (4), for example (1), picture (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** gis (2), arc (1)
> **Cross-References:** go back to (1), earlier in (1)
> **Exercise Files:** exercise files (1)

#### [Challenge: On-the-fly projection vs. project](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-on-the-fly-projection-vs-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-on-the-fly-projection-vs-project?u=76281980&t=0)** (upbeat futuristic music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-on-the-fly-projection-vs-project?u=76281980&t=5)** - [Instructor] Now let's try a challenge together with on-the-fly projection versus a projected map. The goal here is first to get a projected vector layer. I'll let you get that, maybe get one from a local context of where you are in the world. Then project the layer into a new projection. And then what I'd like you to do is compare and contrast it with the on-the-fly views available in ArcGIS. This should take you approximately 15 minutes or less. So let's see what you can do.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat futuristic music) (1)

#### [Solution: On-the-fly projection vs. project](https://www.linkedin.com/learning/real-world-gis-22715766/solution-on-the-fly-projection-vs-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-on-the-fly-projection-vs-project?u=76281980&t=0)** - [Instructor] Now let's take a look at my solution for on-the-fly projection versus a projected map. For this example, I'm going to go ahead and use the block group layer that we used earlier and downloaded from the Census Bureau. So let me go ahead and load that. And now what we'll do is we'll take a look at the map projection properties of this layer. So here I'm going to right click on the layer and choose properties. In the Source area we can choose on Spatial Reference and get the information we want. In this case, I see that we have a geographic coordinate system projection and it's NAD '83. So any layer that I bring into the contents pane will automatically conform to this geographic coordinate system of NAD '83. So now what I'm going to do is project this layer into a new projection. I'll hit Cancel. We'll go over here to Analysis and Tools to get the geo processing toolbox open. And now I will choose under Projections and Transformations to project. I'll go ahead and put in my block group layer. I'll go ahead and accept this default name that has the name, _project. And in this case I have to choose the output coordinate system. So I'll click on this globe and now what I'll do is I'll choose a projected coordinate system. In this case, I'm interested
>
> **[1:34](https://www.linkedin.com/learning/real-world-gis-22715766/solution-on-the-fly-projection-vs-project?u=76281980&t=94)** in the state of Michigan and projecting it well. So what I'm going to do is I'm going to use the UTM coordinate system. In this case, I know that the UTM coordinate system Zone 16 is where the state of Michigan resides. So here I'm going to scroll down to North 16 and I'll hit OK. Now what's happening here is that it's going to project this layer into the UTM Zone 16 transformation, and I'll hit Run. And there we go. And we get some results here. So now this layer is now projected. Alright, here's the thing, is it any different? Well, let's change this color and see. We'll right click here and maybe make it a greenish color. Okay. And so there it is. I can turn it on and off. Looks exactly the same, doesn't it? Because this projected layer on the fly is adjusting to this one. If we create a new map document then we should be able to see the difference. Here I'll choose New Map and what I'll do is I'll pull the layer, this projected layer, into this new map, and watch how it looks. Here we go into this new map. There we go. And now it looks very nice, doesn't it? It's completely projected into the UTM projection. And so here, if I compare these two results, this one and this one, you can see this one has a squished kind of Michigan that is elongated east and west,
>
> **[3:09](https://www.linkedin.com/learning/real-world-gis-22715766/solution-on-the-fly-projection-vs-project?u=76281980&t=189)** where this is nicely projected here. And so as we compare and contrast then, on the fly projection compared to a projected view, that gives us the ability to understand a little bit more of what's happening within our contents pane itself.

> [!info]- Semantic Content
>
> **Env Vars:** utm (4), nad (2)
> **UI Navigation:** click on (2), scroll down (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. How to Collect GIS Data in the Field?

[↑ Back to Table of Contents](#table-of-contents)

#### [Geospatial data collection basics](https://www.linkedin.com/learning/real-world-gis-22715766/geospatial-data-collection-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/geospatial-data-collection-basics?u=76281980&t=0)** - [Narrator] When we consider the challenges associated with the geospatial [[Data Collection]] process, there are a few things you need to plan for to successfully complete your project. Time and cost are variables that we're most interested in and they have sub components. So let's break down each and dive deeper. In the planning process, time is one of the key considerations, and you can think of time as not only including the total amount of time it takes to complete the data collection, but also the cost in person hours to collect it. Time takes on a variety of [[Forms]] because of the interconnectedness of time to machines via persons. And although it's difficult to plan for, the malfunction of machines and the data collection process always increases the total time, and it happens to me all the time. Planning for computer failures, GPS issues required software updates, IT schedules for maintenance and personnel schedules, they all play a key fixture in the total time calculation. For my projects, I usually build in a 15% buffer into the total time needed to complete a project based on these variables that are often difficult to assess. Now, for longer projects that take more than two or three weeks, that only include a handful of people or maybe just myself, I usually will call my IT department to see what updates they are planning, especially for the [[Hardware]] updates that are coming. Now, cost is the other variable to consider
>
> **[1:35](https://www.linkedin.com/learning/real-world-gis-22715766/geospatial-data-collection-basics?u=76281980&t=95)** in the planning process. Usually cost is associated with person hours paid in the collection process, but it also includes the hardware and the software costs, especially those that might need upgraded or purchased. And certainly I recommend knowing the data collectors and their skills if the project involves complicated data collection, especially if high levels of accuracy is essential to the output data. Now, if it's not possible to know them, then it's key to train the most skillful of your team members to transfer the instructions to the data collectors, and skilled transfer translates to cost, and as you know, the more skilled the data collectors are the more you'll be paying them to do the work. Therefore, when creating cost benefit analysis, I'm a little more conservative when it comes to the calculated cost and I usually include a 3% to even sometimes 5% extra cost buffer so that I'm able to give a more realistic estimate of the final cost.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (4), [[Hardware]] (2), [[Forms]] (1)
> **Env Vars:** gps (1)
> **Speakers:** - [narrator] (1)

#### [How to create a spatial database from coordinates](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-create-a-spatial-database-from-coordinates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-create-a-spatial-database-from-coordinates?u=76281980&t=0)** - [Instructor] One of the easiest ways to collect geospatial data, is from the world of online maps. Let me show you two examples, first, with [[Google]] and then with online base maps, from Esri inside of [[ArcGIS Pro]]. So here we are in Google Maps, and let's build a geospatial database together. Now we could start here and choose any geography that we want, but the goal is to collect geospatial data here, and build a table of that to build an entire data set. So here's how we're going to do that. Here I've selected London for our location and I'm going to [[Zoom]] in, let's say to the Tower Bridge. Yeah, let's go here. And what I'm interested in is the actual location of this particular feature. So what I can do is I can right click on the Tower Bridge, and you see immediately some details we want, right. Here we have the latitude and the longitude, reported as decimal degrees, 51.5 and negative 0.07. Again, the longitude is negative, which tells us it is west of the prime meridian. Remember the positive and the negative that we've covered already in this course, related to the coordinates. Now in the case of Google, these coordinates are being reported as WG 84 ellipsoid, and they use a projection, a web mercator auxiliary projection, to display their maps. So all we're doing,
>
> **[1:34](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-create-a-spatial-database-from-coordinates?u=76281980&t=94)** is we're copying this location information, I can select it, and now it's copied to the clipboard. You could also right click and choose what's here. And when you do that, you also get this convenient little popup that has that data as well. So now we're going to build that spatial data that I've copied from Google Maps. Here I'm using [[Microsoft Excel|Excel]]. You could use Google Sheets or any other kind of spreadsheet software. We are going to export this as an Excel spreadsheet so that I can show you what that looks like, bringing it in to ArcGIS Pro. To set up the spatial database, I'm going to start here in this first column and row and I'm going to choose ID and then I'll type lat and I'll type lon, and we'll put these kinds of features into these cells. Here, I'm going to start with zero one as my first ID. We want every single row to have a unique ID or every single feature to have a unique ID. And now what I'll do is I'll just simply copy and paste those coordinates that I grabbed from Google Maps and put them here and then in their individual columns. Alright, so here I'm going to take the latitude and I'm going to put it here. And now I'm going to take the longitude and I'll put it in the appropriate cell. Great, and now I'm done with this. I can delete it. Now, I could add in more details. We can add in as many attributes here as we want. Maybe we'll just call this name and we'll call this the Tower Bridge.
>
> **[3:07](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-create-a-spatial-database-from-coordinates?u=76281980&t=187)** Okay, so I'm going to collect three more features and build this spatial database. So let me show you that now. So here are the features that I've collected. Now let's bring them into ArcGIS Pro. First, I have to save this as an Excel spreadsheet and then I'll open up ArcGIS Pro and bring it in. Okay, here I am in ArcGIS Pro. Now I've put this file on my desktop. So let's connect first that folder. Here, I'll open up catalog, I will right click. I will choose to add the folder and I'm going to choose my desktop. And now I should see the Excel spreadsheet. And there it is, London coordinate Excel spreadsheet. So now let's deal with this Excel spreadsheet and bring it in here to ArcGIS. Now, in the past, previous versions, could bring in Excel spreadsheet, but with the current versions of ArcGIS 10.8 and here in ArcGIS Pro, we need to use a tool to convert the Excel spreadsheet into a GIS friendly table inside of a geo-database. So what I'm going to do, is I'm going to save my spreadsheet inside of a geo-database essentially converting it into a GIS friendly table. To do that, we go into the geo processing tab and find the tools that we need. We can find that under analysis and tools, which will pop up this geo processing pane here. And what we're interested in is the conversion options.
>
> **[4:40](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-create-a-spatial-database-from-coordinates?u=76281980&t=280)** So here under the conversion tools, I have an Excel tool. I open that and I can move from Excel to table. And that's what we want to do. So now I'll open up that pane and let it populate. And what we'll do is we'll add in our details. First, let's pull in the Excel spreadsheet from the desktop.
>
> **[5:05](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-create-a-spatial-database-from-coordinates?u=76281980&t=305)** Next, let's check to see where this file is actually being written to on the hard drive. If we hover over this, we can see the location where this is going in. Notice it has a geo-database location. All of our conversions from Excel spreadsheets have to go in to a geo-database and that's what's happening here. So if you want it to go into a different geo-database outside of this project, or different [[Databases]] that you've created within a project, you'll need to designate that here, in the Output Table location. We'll go ahead and use the default for this project of create spatial database geo-database. The last thing we do is set the actual sheet. Perhaps your spreadsheet has multiple sheets in it. In this case we just have the one sheet with our coordinates and now we can convert it into a GIS friendly table by clicking run. Great, it's complete. And now we can see it here in the content's pane. And let's take a look at it. I'm going to right click and choose to open the attribute table. So now we have a GIS friendly table. Before we move on, let's verify that our latitude and our longitude columns are actually numeric and not text. So if we hover over them, we can see this type is a double and this type is a double as well. So both of these are numeric and we're ready to go. So now we have a GIS friendly table. Let's give these coordinates actual points. To do that, we can right click here
>
> **[6:40](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-create-a-spatial-database-from-coordinates?u=76281980&t=400)** on the attribute table and choose display XY data. Now our X field will be our longitude and our Y field will always be our latitude. And in this case our coordinate system, we collected this data in WGS84, so that is correct as well. So I'll click okay. And now a shape file or a feature class in this case, because it's inside of a geo-database, is created of those places that we collected. Now let me show you how to do this within ArcGIS Pro itself. Before we used Google Maps to collect this information and then put it in an Excel spreadsheet. But here I want to show you how to actually do this, right within ArcGIS Pro. So let me go ahead and close the attribute table. And now what we'll do is we'll zoom in here, to the Tower Bridge area. Great, now what we're really interested in, is coordinate information. So what you can do within a base map like this, is you can actually, in the data frame, right click and choose what's here. And now you get the information about that within the ArcGIS Pro environment. And here is the latitude and the longitude right here, as reported in decimal degrees. And so we can actually take this data and put it right into an Excel spreadsheet. In fact, if you right click on a feature, you can copy the coordinates straight up, and even convert the coordinates to certain different kinds of [[Forms]] like decimal degrees, degrees, minutes and seconds
>
> **[8:15](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-create-a-spatial-database-from-coordinates?u=76281980&t=495)** or even UTM coordinates if you need to. And so this is a very nice quick way to just use ArcGIS Pro to do the same kind of database creation that I showed you in Google Maps. This means you can essentially build a geospatial database of almost anything in the world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (14), [[ArcGIS Pro]] (10), [[Google]] (8), [[Zoom]] (2), [[Databases]] (1)
> **Env Vars:** gis (5), wgs84 (1), utm (1)
> **Versions:** 51.5 (1), 0.07 (1), 10.8 (1)
> **UI Navigation:** click on (2), open the (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Prerequisites:** set up (1), you'll need (1)
> **Speakers:** - [instructor] (1)

#### [How to add scanned map data and drone imagery to a spatial database](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=0)** - [Instructor] Another way to collect and create geospatial data is to pull it out of scan maps or drone imagery. First, let me show you how to use ArcMap to geo-reference a scan and then to use Arc GIS Pro to geo-reference drone imagery. In ArcMap, let's open the geo-reference map document from the exercise files in the folder called "Geo Referencing Scan Map." Here I'm going to grab georeference.mxd and pull it into my data view. What I'm showing you here are the Western property boundary points of my university. These will be our reference points or our control points for this geo-reference registration. I've also scanned a historic image of my campus map. Now let's bring that in from the exercise folders as well. It's called "Plan A." Here I'm going to grab plan A and pull it into the data view. Immediately we're told that it has an unknown spatial reference. We expect that because it's just a scan and has no geography like the Calvin boundary points does. What we want to do is we want to bring in the scan over our boundary points and then begin to make minor adjustments. To do that, we need to use the geo-referencing toolbar. You can find the toolbars under Customize and Toolbars and then select the toolbar you're interested in, or you can right-click out here in ArcMap and get a shortcut to the toolbars.
>
> **[1:32](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=92)** So let's choose the geo-referencing toolbar. Conveniently plan A is already here in the geo-referencing toolbar so let's go ahead and use the dropdown to choose Fit To Display to pull the plan A over the Calvin boundary locations. Now what we want to do is geo-reference our scan. To do that, we'll go to the geo-referencing toolbar and choose the Add Control Points. I'll left-click this, and now I can begin to add the control points. Here I'm going to always go from scan to control points. In this case, I'm going to [[Zoom]] into this area and get a closer view. I'm going to use my mouse scroll, press down on it to get the pan and pan this way to view those. Now if we want to adjust this scan so that it's transparent, we can go and right-click on this layer, choose the properties, choose the display tab and then adjust the transparency. In this case, I'll make it 40% transparent, great. Now I'll make a small pan here, and I will choose to use the scan to control point method. Great, now let's pan across to the other side and do some more of these points. Great.
>
> **[3:06](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=186)** And last here, we'll go up and see. Oh, that one's pretty good. How about this one? Again, always scan to control. There we go. If you want to see the progress of the points that you've set, or if you have problems with warping which occurs sometimes when you're dealing with this registration process, you can always open up this link view table here and you can always delete or remove any one of these points in your process. You just simply select it and then hit Delete. So we've set four points so far, and we have a first order polynomial that's available to us, but if we add more points, we'll have additional polynomials available, like a second order and even maybe a third order. The more points that we have, the more adjustments that can be made. First order polynomials or a fine transformations allow you to scale and rotate and move and translate your different scan elements to match the geography. But second order allows you to bend and warp that scan even more. We also have a total root means squared error number right here, an RMS error. And typically if this is lower toward one or towards zero, you're matching the scan to the real geography in a better fit. So the more points that we add,
>
> **[4:39](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=279)** this will adjust our RMS error. Often the visual inspection is good enough, but sometimes we need to get up to maybe 50 or 60 actual control connections or links to geo-reference our image correctly so that it has a really good geography. In this case, I'll go ahead and close my link table, and let's go ahead and update the geo-referencing. I'll zoom out here just so we can see this process. Now, right now, our scan has no geography, but it's matched up to these control points that do have a geography. So since this is selected, and I have it in the right location, under the geo-referencing, I'm going to choose to update geo-referencing for plan A. So I'll left-click here, and now in plan A, it should have the same geographic coordinate system as Calvin boundary points. So let's check it out. I'm going to right-click on plan A, choose Properties, go to the source tab. Let's build the [[Statistics]] real quick. And now here you can see as I scroll down and instead of saying unknown for the spatial reference, it's actually the Michigan south coordinate system. The same as Calvin boundary points is. So that's very, very cool because we have now taken a scan and given it a geography. Now what we can do is we can actually take the features here and build them, right? We can actually digitize some of these features
>
> **[6:13](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=373)** of our historic map and then we have them as actual features. So let's go ahead and do that. So essentially what we're trying to do is we're building a geo database of these different features. Here we're going to start with the library. So how do we do that? We're going to build this in a feature data set within a geo database. So here I've already created a geo database called "Calvin Features Geo Database." If you don't know how to do that, just simply right-click on your working folder and choose to make a new file geo database. And now I've already got a feature in there called "water," but since I'm dealing with buildings, let's create a new feature class called "buildings." I'll right-click on the geo database, choose New, Feature Class, and let's build buildings. So here I'm going to type in "buildings," and the alias can be the same thing, buildings. It's a polygon feature. Now hit Next, and in this case, I have the appropriate coordinate system, but if you didn't have that, let's just say it wasn't in there for you, you could always go to the layers, and you'll see it there, because these layers have the coordinate system in it, and here it is. So I'm going to choose Next and Next, Next, and finish this up, great. Now I'm ready to go ahead and digitize my building layer. To do that, I'm going to choose the create features option while editing. Right now, there's nothing there. Okay, so we're going to right-click
>
> **[7:47](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=467)** and choose the editor toolbar and start editing. I'll start editing, and I'm interested in editing the buildings, so I'll select that and choose Okay. And now we're ready to actually digitize these buildings. I'll right-click here and open up the attribute table and make it a little smaller for us so we can see that process, great. Now going back to create features, I have my options there because I'm editing. I'll select buildings and polygon, and now I can set a point and move to the next part of that point, set that one, that one there, there, and I'll double click to complete the polygon. And now I've set the library, and here it is in the attribute table. If I wanted to add more details to the attribute table, I could have when I created the feature class, such as maybe name or something like that. Or we could add that in after we're editing. So let's do that. Stop editing, save your edits. Here we'll add in a new field. We'll call this "Name." Set it as text. There we go. And now we'll start editing again. Buildings, hit Okay, and now we'll call this the library. Great, and now I'll stop editing and save my edits. Yes, now we have it. We've digitized this feature from this scan,
>
> **[9:21](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=561)** and it has a geography too. If I right-click on buildings and choose Properties, you can see that in fact it has a coordinate system. So let's test this out. What we're going to do is we're going to insert a new data frame. I'll go ahead and remove my attribute table. I'm going to grab the Calvin College ortho photo and pull it in. There's my campus, and now I'm going to actually grab this building and pull it down and see where it is. There it is, and so let's see how good we did. Well, this is the library of my present campus, and this is the historic map location right here. So pretty good. So that's how you actually build a geospatial database from a scan that has no geographic reference. We've given it a geographic reference, and we've pulled out some data from it. Now, you can also follow this method to geo-reference aerial imagery that you might have in your project. Let's do an example in Arc GIS Pro together. Now, let's say you've collected some drone imagery, and you don't have any good software to geo-reference and extract the data from it. So let's use Arc GIS Pro to handle it. Here in Arc GIS Pro, we're going to open up the exercise files from the folder of this chapter. In this case it's called "Georeferencing Drone Image." What we need to do is drag this drone image here, and let me show it to you.
>
> **[10:54](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=654)** Immediately we see that it has an unknown coordinate system, and, of course, we expect that because we want to geo-reference it. I'm going to right-click on this drone image, and I'm going to choose to zoom to layer. So there's our beautiful drone image. In this case, this is North Hall where my geo department resides. So we want to geo-reference this drone image. To do that, we need control points or reference to do that. So we've also downloaded together in a previous part of this course the national map view of this location, a satellite view. Here it is in the geo-referencing drone image folder. So I'm going to start a new map, and then we're going to bring in that first. Here I'll choose new map, and we're going to set the new map's projection by just simply grabbing this file here. I'll drag it in, and now it should zoom to the location. Yep, there it is. Alright, so this is a satellite view. It's geo-referenced, ready to go. Let's go ahead and scroll into my campus. Here we go. And then to North Hall area, which is right there. There's North Hall. It's great to have a geographic context of the area that you're geo-referencing so that you can quickly do your work. Alright, now let's add the drone image to this table of contents as well. Here, I'll grab the drone image, and I'll pull it in
>
> **[12:28](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=748)** right above this national map satellite view. Of course, it's unknown coordinates. We expected that. To do the geo-referencing, we're going to choose at the top here Imagery. And then in the alignment group, you'll find a geo-reference tab. So I'm going to click on the geo-reference tab, and now I get this new ribbon right here. And in this case, since drone image is selected, I'm going to choose Fit To Display, and there we go. Now I can quickly see immediately it's not aligned. So let's rotate the thing. I'll click on rotate here, and then I'll grab this and just rotate it about. Very good. Now I'm going to click on Add Control Points, and it will set the image as rotated. And now I can't really see through this image to be able to geo-reference it. So I'm going to click on Raster Layer here at the top, and I'm going to change my transparency. In this case, maybe 40%. Great. Now we're ready to actually add the control points. I'll go back to geo-reference, and I can see that my ad control points is already selected. And now what I'm going to do is I'm going to actually just go from scan to map, right? From this case, from the drone image to the reference control. Sometimes it's helpful to actually turn off the image
>
> **[14:03](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=843)** just to get your bearings. In this case, here is North Hall. And so I'm going to turn this back on. And there we go. Alright, now I'm going to go from my drone image here. I'm going turn this off, and I'm going to put it right here. And now turn this back on, and it's moved. Now I'm going to continue and do a few more points here. And that's looking pretty good right away. Okay, here we go. Let's go from here to here, and from here to here. And you can see how the image is warping slightly. So we want to try and distribute our control points throughout the image if possible. And sometimes, it's just not possible. Alright, I'm pretty happy with that result there. And now what we need to do is update our geo-reference. If you're happy with the affine transformation, then you can go ahead and save this. If you want to adjust it though, you can right here under transformation. So if I choose to second order polynomial, it'll stretch it. And third order requires 10. It stretches it in a different way. So let's go ahead and accept affine transformation. So all we have to do is click on Save,
>
> **[15:38](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-add-scanned-map-data-and-drone-imagery-to-a-spatial-database?u=76281980&t=938)** and now this drone image is saved and geo-referenced. We should be able to check that from the properties. I'll right-click here and choose Properties. And I'll choose the source tab and spatial reference. And now you can see that it actually has a reference system. Okay, there we go. Now I'll close the geo-referencing toolbar, and now I can zoom in to my image after changing its transparency. Let's just make it zero now. There we go, and I could turn that off. Alright, and now I could begin to digitize these different elements of the rooftop for my project. To do the digitizing, we simply choose Edit, and then we could begin to create and modify our features or add in a feature class just like we did in ArcMap and begin to sketch those features so that our employees can find the right places on the roof to make inspections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (5), [[Statistics]] (1)
> **UI Navigation:** right-click (10), click on (5), go to (3), open the (1), select the (1)
> **CLI Commands:** make (7), find (3)
> **Env Vars:** gis (4), rms (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** such as (1), just like (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [How to collect GIS data using ArcGIS Survey123](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-collect-gis-data-using-arcgis-survey123?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-collect-gis-data-using-arcgis-survey123?u=76281980&t=0)** - [Instructor] One of the most exciting software [[Microsoft Products|products]] developed by Esri is Survey123. This software is a powerful tool for collecting data in the field, but what is more powerful are the tools that let you build a survey instrument before you send your teams out to collect the data. I want to show you how to use it for [[Data Collection]] and mapping. Survey123 is an online Esri site where you can construct a survey for data collection. So, if the job requires you to collect data in the field, you can design what Esri calls a survey instrument on your computer. You set all the parameters for the data collection process like a map and all the fields for attributes of the things that you're collecting. For those using Trimble GPS devices and software, it's like a data dictionary concept. You have to have a smart device and download the Survey123 app onto it. And once you've done that, you log into Survey123 on your smart device app, download the survey instrument you created on your computer, and then you can start collecting data in the field with it. It's awesome. Since the smart device has a GPS receiver on it, you can get location data usually within about three meters accuracy. Now, if you need higher precision accuracy then you'll need to use formal high precision GPS or total station instruments, which may or may not be able to use Survey123. So, let's check that out together now. Here I am at the Survey123 website.
>
> **[1:36](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-collect-gis-data-using-arcgis-survey123?u=76281980&t=96)** You will need to have an organizational account to log in. Students at schools typically have this already set up for them, which is the same login that you'll use for [[ArcGIS Pro]]. If you don't have a login, sit back and let me show you what's possible and then you can decide if it's the best solution for your business. Now, what we're going to do is start out with a new survey. So, here at the top I'm going to choose new survey and I'll choose blank survey. Now, let's create a project together. Let's say that we're documenting trash cleanup on the coastal dunes and we want our dunes cleaned up for lots of reasons, but we also want to write a grant to support our coastal cleanup, so our map and [[Statistics]] of trash locations on the dunes will help support that effort. So, I'm going to use this interactive web designer here on Survey123 to build our survey instrument. On the left is our survey and on the right are tools for building the survey. Esri is regularly improving the tools so if you have a slightly different tool set, don't be surprised. Basically, you have a text option, numbers, dates, and time fields, fields for choosing things about features, location instruments, and organizational survey structure options for creating multiple pages. Lots of different things here. Let's first begin with a title. This is a project title, so here let's name our project Data Collection for Dune Trash. And we can populate this tags here,
>
> **[3:12](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-collect-gis-data-using-arcgis-survey123?u=76281980&t=192)** so let's do dunes, trash. And now we can add a summary, Survey for collecting dune trash. Great, we hit OK. And now, what we're going to do is give our survey a title, so that's set right here. And let's go ahead, let's set it as Dune Survey for Trash, Dune Survey for Trash. Great, I'm going to go ahead and make it center aligned. Now, our survey has a title. Now, let's go ahead and start by giving some instructions to our data collectors. So, let's go ahead and back to Add, and here we're going to just simply add a note. In this case here at the bottom, I'm going to just choose a Note, and here I'm going to just say instructions for data collectors and a little bit of description here. Great, now all of the data collectors will get this information at the very top of the survey. We could, of course, move it down below other parameters or sections, but we're just going to keep it at the top. Now, let's build more components to our survey. Here I want to add in things like date and time. I'm interested in when the data collection happens, of course, I want to know what kind of trash we're collecting, that will be helpful for our grant, and other things like maybe pictures or notes.
>
> **[4:46](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-collect-gis-data-using-arcgis-survey123?u=76281980&t=286)** And certainly we want to put in a map because we want to be able to say where the data trash was located. Okay, so let's build those things together here. First, I'm going to start with a date and a time, so I'll add that. Immediately it pops down, here I'm going to just simply put that as the title, Date & Time. And in this case, I just want my data collectors to give me the date and time, give date and time, thanks. And I could add in other kinds of things here, I could submit a specific kind of date and time like today or specify some other kind of date and time. And I could even use a calculation in this to limit maybe even the range of things so we could put in validation options. In this case, I'm just going to go ahead and leave that as completed and add my next component. So, now that I've got the date and the time, the next thing I really want is the kind of trash that's being collected. So, here I'm going to choose under Choice, Dropdown. Now, here, what I want to do is give a title again to this part of the survey. So, here is what kind of trash do we have? All right, and now here we're going to add in our choices. Let's say we're interested in plastic and we're interested in cigarettes, and then maybe other.
>
> **[6:22](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-collect-gis-data-using-arcgis-survey123?u=76281980&t=382)** And we're going to specify either here other or just allow other. In this case we'll go ahead and choose to allow the other and we'll delete this so that then our survey collectors or our data collectors can add in the details if they want to of what is the other. Now, we may require this question, and in this case I'm going to make sure that's required. And then, you see an asterisk here that is added to the survey. All right, let's keep going, let's add some more. So, here we're going to add an optional picture. So, here under Media and files, I choose Image, and here we're just going to add in some instruction at the top, so Optional Picture. And here, please take a picture with your phone. And now, what will happen is the app is able to connect to your phone, your smart device that you're using in the field as long as you give it permission to use that camera. And in this case, I just want one picture. I think one's enough, and so we're good there. Let's add more. In this case, let's go ahead and add in the map. So, here I'm going to go down to Location and choose Map, and now it's added here. Now, by default the map just starts at a global view, but we can specify different places that we might want. In this case, I'm going to go ahead and [[Zoom]] down to the geography
>
> **[7:57](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-collect-gis-data-using-arcgis-survey123?u=76281980&t=477)** that my data collectors are actually going to be working in so that that is their default view when they start their project out in the field. So, here we're going to go to the West Michigan Dunes, and we are going to start right there. All right, so now that is the location that my survey instrument will point to, all right, when it loads for my data collectors. Now, there are other things we could set in here. We're going to collect points and so we'll add a label at the top, map location of trash, and some instructions here for our data collectors. Great, and we can also change other things, we can change the base map if we want. That looks all good. And last, I like to leave another option available just in case my data collectors are out there in the field and they want to give me more information. So, I'm going to choose a singleline text, and in this case just a little bit of something else in case they want to give that to us, any optional things to say? Here, please provide additional details if necessary. Great, so now we can go ahead and use this as our survey. Let me scroll here and you can see our complete survey.
>
> **[9:31](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-collect-gis-data-using-arcgis-survey123?u=76281980&t=571)** So, now all we need to do is save the survey, so I'm going to click on Save, and now the survey is saved. And now, if you have access to this particular survey, you will see it when you download your app. I can make it available to anyone in my organization or anyone in a group that I create. And now, each time someone uses this survey, they can log a point for trash with the details. So, to deploy this survey so it's accessible to everyone that you want it to be, first you have to publish it and then you choose the Collaboration button, so let's do that now. In the lower right I'll choose to Publish, and I'm happy with these changes, so let's go ahead and publish it. Now that it's published, now we set the collaboration components. So, here we'll click on Collaborate and here is where we set the parameters for sharing our survey. We can make this open to any one right here with the public, or members of your organization, or you can set specific groups to share this with. Here is the link to the survey itself, and so you can use this link to access this on a web browser if you want to open that up on your smart device if you don't have the app downloaded on your phone. So, let's go ahead and select members of my organization for this example so that it's kind of behind a firewall. But if you're doing a project that's citizen science related, then you can make it for everyone.
>
> **[11:04](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-collect-gis-data-using-arcgis-survey123?u=76281980&t=664)** And I guess the last thing that I usually do is instead of allowing the survey to be opened directly in the browser, I actually restricted to be opened in the app itself and only in the app itself. The reason that I do this is because I send many research teams out into the field that have limited or even no connectivity internet-wise. And so, this app allows you to collect data offline and then upload it when you're connected. So, that way when my teams are out on the dunes and they can't get mobile data, they're not limited. And that is an excellent opportunity then for collection of data when you're not connected to the internet. So, now go ahead and save this. and when your data is being collected by your folks in the field, then everything will appear here under the Data tab. So, right now we have no records, but if we're using this survey, you'll see here all of the data coming in, preview geographically, and you can see each one of the records and search all of those. You can export your data into ArcGIS or ArcGIS Pro and really get into the nitty gritty of spatial analysis. ArcGIS Survey123 is a very powerful software for data collection in the field, and I hope that you'll be able to jump in and start doing your own data collection with this powerful tool from Esri.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Collection]] (7), [[ArcGIS Pro]] (2), [[Microsoft Products|Products]] (1), [[Statistics]] (1), [[Zoom]] (1)
> **CLI Commands:** make (5)
> **Definitions:** is a  (3), is an  (2)
> **Analogies:** picture (4), it's like (1)
> **UI Navigation:** click on (2), dropdown (1), go to (1)
> **Env Vars:** gps (3)
> **Exercise Files:** download the (2)
> **Prerequisites:** you'll need (1), set up (1)

#### [Challenge: Georeference master](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-georeference-master?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-georeference-master?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-georeference-master?u=76281980&t=5)** - [Instructor] Now let's try a challenge together in georeferencing. The goal here is to get a scan of a map. Now, you can use your own scanned map or you can use the one I provide for you in the Exercise folder for this chapter of Washington D.C. from 1874. Now, in this challenge, you'll need to georeference your map scan and then I want you to check how well you did. In total, it should take you no more than 30 minutes approximately to complete this exercise.

> [!info]- Semantic Content
>
> **File Paths:** d.c (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Georeference master](https://www.linkedin.com/learning/real-world-gis-22715766/solution-georeference-master?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-georeference-master?u=76281980&t=0)** - [Speaker] Now let's take a look at the approach I take in solving this georeferencing challenge of the scan of Washington DC in 1874. Here we are in Arc GIS Pro, and I've already connected to my working folder. Here you have this in the exercise file folders in this chapter under challenge and georeferencing so that you can use the Washington DC 1874 scan as well. First, what I'm going to do is change the base map to be something that I want to use, like open street map. There we go. Now I'm going to [[Zoom]] down to Washington DC to the area of interest related to our 1874 scan. Okay, that's pretty good. Now what I'm going to do is bring in my scan. Here I'll just grab it straight from the catalog and pull it right atop of open street map. Great. Now we're immediately alerted that there's an unknown coordinate system. No surprise to us, because the scan doesn't have a geography yet. Now when you take a look at this particular scan there are different kinds of features such as Georgetown and the Washington Monument and things like that. So now we're really ready to bring it in. So to do that, we have to select it and then we go to imagery and georeference. And now I'll go ahead and fit to display. There it is.
>
> **[1:31](https://www.linkedin.com/learning/real-world-gis-22715766/solution-georeference-master?u=76281980&t=91)** Now it looks like the orientation isn't quite right, so let's choose to rotate that and get it about let's say about right there. Excellent. Now I'm going to choose to add control points. Here in this map I'm going to pick familiar features that are available in both places such as the Washington Monument here. So I'll click on Washington Monument here, and now what I can do is turn this off, and actually move over to the Washington Monument. So, here we go. And there we go. Washington Monument. Okay, now when we turn this back on, our scan has moved over. Great. Now we just need to find a few more places of interest. So let's go ahead and use this one right here, and the scan and always going to the map. In this case, it is Foggy Bottom. All right, here we go. Great. How are we doing? Now let's go ahead and choose the raster layer and make this a little transparent, so that we can see through it. We can make it really transparent, but not doing too bad so far. Take a look at that. Wow, a lot of land actually there in the south. The West Potomac Park and National Mall area Tidal Basin. That's all been kind of reclaimed area hasn't it, since 1874.
>
> **[3:03](https://www.linkedin.com/learning/real-world-gis-22715766/solution-georeference-master?u=76281980&t=183)** So utilizing this kind of transparency option really helps us see some historic maps and kind of current day patterns as well. All right, let's add in some more. Let's see, national capital's looking pretty good. Let's see here. How about the street alignment? Not too bad, not too bad at all. Let's try and get one from over in this area right up here. All right, and we'll go ahead and make this opaque and now Rhode Island and New Jersey. All right, there we go. So about right here, all right. So here we'll do Rhode Island and New Jersey and we'll use this corner here. And now we will use this corner right there. Great. And now we've got a pretty good alignment. Let's take a look at the [[Representational State Transfer (REST)|rest]] of our map. All right. So now we have a really cool historic view of Washington DC. We're not quite there yet. Not quite done yet, but we're almost there. Okay, so now let's go back to georeference. And now what we can do is save and when we save then Washington DC 1874 scan jpeg here will actually have a projection link to it. So let's click on save. And now we'll close our georeferencing. And now we'll take a look and see if it took.
>
> **[4:38](https://www.linkedin.com/learning/real-world-gis-22715766/solution-georeference-master?u=76281980&t=278)** Properties and source and spatial reference. And so now we have the web Mercator projection linked to this JPEG scan. And now let's test it out. So what we're going to do is we're going to insert a new map just to test this. So new map, and let's go ahead and choose imagery hybrid as our base map. So here we'll change the base map to imagery hybrid. There we go. Let's zoom down to Washington DC area, see what we get. All right. Now I'm going to bring in that jpeg straight into this map. I'll grab it here. I'll hover over map one and then I'll drop it in map one. And there we go. Let's see if it's oriented correctly. Looks like it is. We can go to the raster layer and actually change the transparency and see how good it is. Hey, not too bad, not too bad at all. Let's zoom into some places that we might know. Let's see here. Okay, there's the White House and we'll have a regular. And there we go. So this is how I solved the georeferencing challenge of this particular scan of Washington DC in 1874.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** go to (2), click on (2)
> **Env Vars:** gis (1), jpeg (1)
> **Analogies:** such as (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [speaker] (1)


### 5. How to Master ArcGIS Online?

[↑ Back to Table of Contents](#table-of-contents)

#### [What is ArcGIS Online?](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-arcgis-online?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-arcgis-online?u=76281980&t=0)** - [Jason] ArcGIS Online is an environment that allows you to map, store, and distribute spatial data, as well as build compelling computer web mapping applications. Here we are at [arcgis.com](https://arcgis.com). There is a subscription-based [arcgis.com](https://arcgis.com) that allows you to develop ArcGIS server like map services and geoprocessing applications as well as access premium served data. Now, the subscription-based license approach is run through an organizational account, but companies can also install it on a local intranet and host it internally. If that's the case, it's called ArcGIS portal. Now, let's go ahead and sign in to [arcgis.com](https://arcgis.com) and explore this environment together. In the upper right, you can choose to sign in and what we're going to do is use my public account to see all the things that are possible. If you don't have an Esri global account, then you go ahead and register and you can follow along with me here. I'm going to log into the personal account so you can replicate everything I do. Registering with your global account gives you about two gigabytes of space on [arcgis.com](https://arcgis.com), which is very generous for uploading spatial data. [arcgis.com](https://arcgis.com) can host data, display spatial layers on an interactive map, and give you tools to build your own web mapping applications. Let's first look at what you can do with your data.
>
> **[1:35](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-arcgis-online?u=76281980&t=95)** I'm going to click on Content here at the top. My Content is the [[Data Management]] part of [arcgis.com](https://arcgis.com). Notice, I have several layers of data that I'm using here and we have lots of different kinds of data. We can search for our data right here. We can look on our folders and use them right here. We can even filter by the kinds of data that we have or places and dates created. Lots of ways to sort and access our data. You can even upload vector data and host web maps and applications here. There are some limits, however, to raster data, especially with public accounts. Also, there are other data constraints like limiting the size of comma delimited files, CSV files, to 250 data rows for public accounts compared to 4,000 with organizational accounts. Usually, this can be overcome by uploading a few different layers. If you have more than 250 records in your dataset, you can just split up your layers into multiple shapefiles or feature classes. Now let's take a look at the map. You can choose the traditional 2D interactive map by choosing Map at the top or you can build 3D scenes with Scene at the top. Let's go ahead and click on Map for this example. Here is the map interface, and it looks similar to the software environment with the table of contents on the left and a map interface on the right.
>
> **[3:10](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-arcgis-online?u=76281980&t=190)** Notice, organizational tools are on the left side of the screen and map tools are on the right. So let's make a quick map together so you can see what's possible. First, let's change the basemap. Here on the left, I'm going to go to the Basemap icon. Click it, and now we're going to choose any one of these many, many basemaps. In this case, I choose Imagery Hybrid. Notice the service is very fast because the data had been tiled for the end user at all spatial scales. We can also add data. Here on the Add data option, we can actually add all kinds of data. There are five options for us. We can browse layers. We can add a layer from a URL. We can add layers from files that you upload. You can create a Sketch layer and you can even add media layers. Presently, free ArcGIS Online accounts have limitations on adding raster data, but perhaps in the future, or even now that you're watching this and doing this on [arcgis.com](https://arcgis.com), Esri will have made it possible for you to upload and utilize raster data. Otherwise, you'll need to use an organizational account. If we go ahead and choose to Browse layer, the first option, now we can search for different layers that are being served by ArcGIS servers around the world. We can choose the content that we've already created or we can choose ArcGIS Online for all of this served data.
>
> **[4:47](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-arcgis-online?u=76281980&t=287)** Let's do a quick search and type in Earthquakes. Many layers are produced. Here, we can take a look at this first one and look at the icon. Notice that this is an Authoritative layer recommended by Esri and that it's part of the Living Atlas, which is an Esri curated content of several different kinds of spatial layers. A very, very powerful spatial dataset, the Living Atlas. Well, what we could do is we could choose to add this layer to our map. So let's click on Add, and now we have it added to our map. Now that it's been added, we can [[Zoom]] in or zoom out to this particular spatial layer. We have, of course, a timeline that's given in this layer so it's time-enabled. Because it's part of the Living Atlas, it has a few more aspects to it than what we might get with a regular layer that's not part of the Living Atlas. We can also move our slider here to see the different kinds of earthquakes that are happenin' or have happened globally. And so if we expand here, we can see all earthquakes from these different years and the ranges of the years. All right, so many earthquakes here. By using this quick feature to search for layers and browse for them, we can have access to all kinds of amazing spatial data layers that are served on ArcGIS servers around the world. If we wanted to, we could go through and add other layers such as from URLs.
>
> **[6:22](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-arcgis-online?u=76281980&t=382)** Remember the map service [[Representational State Transfer (REST)|REST]] endpoints that I talked about in a previous chapter dealing with the national map and getting data? Well here we could click on this and add the URLs from those REST endpoint services, or if we wanted to upload our own shapefiles or feature classes, we could do that right here. So now let's go ahead and just save this map as it is and then we'll take a look and view it in the Contents part. So here I'm going to left-click on Save and save this as a new map. Here we're going to call it Earthquakes. And we'll just do the same thing here and we'll save. Now we have saved this in the Contents part of ArcGIS Online, let's go take a look at it. Here I'm going to choose on Content, and there it is. I have created a web map. In this case, the web map is only at my level of sharing. If I left-click on this, I could open it up to the public. Otherwise, right now, I'm the only owner and the only one that can access this particular web map. Now if I click on this, it takes me to a landing page. Here is the landing page, and from this landing page, I can add in more details related to the [[Metadata]] of this particular web map that I've created, or I could even add a new web app,
>
> **[7:58](https://www.linkedin.com/learning/real-world-gis-22715766/what-is-arcgis-online?u=76281980&t=478)** so I could create a web app straight from this web map and I'll teach you how to do that in a later video. For now, what I want you to know is that [arcgis.com](https://arcgis.com) is a real game changer for interactive spatial data and is a powerful, powerful tool growing stronger in resources every day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Data Management]] (1), [[Metadata]] (1)
> **URLs:** [arcgis.com](https://arcgis.com) (8)
> **UI Navigation:** click on (7), go to (1)
> **Definitions:** is an  (3), is a  (3)
> **Env Vars:** rest (2), csv (1), url (1)
> **Prerequisites:** install (1), you'll need (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous chapter (1)

#### [How to bring data into ArcGIS Online](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-bring-data-into-arcgis-online?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-bring-data-into-arcgis-online?u=76281980&t=0)** - [Instructor] Let's bring in some data to [arcgis.com](https://arcgis.com) together. I'll use a .CSV file for our map data, and you can find this in the exercise files for this chapter. You can see in the upper right that I'm logged in and I have a new map started. The .CSV file has been downloaded and includes all the alternative fuel locations in the United States as of July, 2021 that I got from the US government website [data.gov](https://data.gov). I've isolated only those locations in Michigan. Now when we load the data into our map interface first we'll start with the parameters related to that data. So let's do that now, here in the upper left I will left click on add, and then add layer from file. Now we're prompted to drag and drop our file into this window or search for it right here. Here I have navigated in the [[Windows]] environment to my file so I'll grab it and drag it down. First we deal with the fields. Here you can see the field name, the display name which you can change, and the type of field that it is. For those that are text, they are strings and for any numeric numbers, they're either an integer or a single or a double. In this case, I'm pretty happy with all the details related to the dataset. So let's go ahead and click on next. Now we have to tell [arcgis.com](https://arcgis.com).
>
> **[1:36](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-bring-data-into-arcgis-online?u=76281980&t=96)** What are the location fields for latitude and longitude? Conveniently, in our dataset, they're already labeled with those labels. So now we can click on next. Now we can update the title, the tag, and the summary related to this particular dataset. In this example, I will go ahead and leave the title but remove the underscores and now add in the tags for Michigan and also for alternative fuel, alt fuel. And now in the summary, I will do the same thing Michigan Alternative Fuel locations. And now I can click on create and add to map. And now we've mapped the .CSV locations in this dataset for the state of Michigan. In the upper left, you can see the layer. Let's go ahead and click on the options, which is the ellipsis three dots here. If I left click, it opens up some options for me. Let's show the table data first. Notice here we have 1,151 records in our data set but public accounts can only visualize at any one time 250 of them organizational accounts can actually show up to 4,000 rows. So although we have that many in our record we might not be able to see all of them at one time. Now, let's just do some simple things here for our cartography of our web map.
>
> **[3:09](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-bring-data-into-arcgis-online?u=76281980&t=189)** Let's adjust the size and the color of our symbols. In this case, on the right here under symbology for this layer, I'll choose edit layer style. And now I'll scroll down here and I'll choose here under single symbol, the style options. Here I'll click on the pencil icon to edit this symbology. In this case, I'm going to make the size of the symbols about 10 pixels, and I'll make the color by clicking here. The fill color a different color such as an orange-ish color. So let's move it here a little bit. There we go. Now click right here and I'll choose done. And now I click on done and everything has changed. Now let's see exactly what are we mapping here under the filter option. I'll left click and see if there's any filters. In this case, it doesn't look like there are any filters, so I'll add an expression. In this case here we have fuel type code is and now I can choose the options here. I can choose electric or E 85. I can choose some sort of value for the alternative fuel option. In this case, I'm going to go ahead and go back to electric. And now what I'll do is I'll choose save. And now I'm going to [[Zoom]] down into Grand Rapids where I am and take a look and see what we've got here. It looks like we have two different pockets actually, of hotspots. We have a downtown area, and then
>
> **[4:42](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-bring-data-into-arcgis-online?u=76281980&t=282)** along this 28th street stretch here in Grand Rapids it looks like there's a lot of alternative fuel options for electric cars. So let's go ahead and save our web map right here just like this in this kind of view at this scale for the next steps. So to do that, here in the left side you can see the little folder icon with the dot on it. I'll left, click that and choose to save as. And now we can fill in our details for this web map and then we can click on save. So now that web map is saved in the contents portion of our public account. So think of the data that you have access to on the various websites that I've shown you in the early chapter of this course. What kinds of interactive maps can you make? And now let me show you how to take this data and bring it into [[ArcGIS Pro]] to create a web map just like this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Zoom]] (1), [[ArcGIS Pro]] (1)
> **UI Navigation:** click on (8), drag and drop (1), scroll down (1)
> **CLI Commands:** make (3), find (1)
> **URLs:** [arcgis.com](https://arcgis.com) (2), [data.gov](https://data.gov) (1)
> **Env Vars:** csv (3)
> **Analogies:** just like (2), such as (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)

#### [How to build web maps from ArcGIS Pro](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=0)** - [Instructor] You can create powerful and effective web maps right inside of [[ArcGIS Pro]] because of the synergy of the software ecosystem created by Esri. So let's jump in and make a web map together using ArcGIS Pro, export that to [arcgis.com](https://arcgis.com), and then view it together. Here, you can see I've opened up ArcGIS Pro, and we are going to use the CSV file that I downloaded from [data.gov](https://data.gov), the alternative fuel station locations for the state of Michigan. Here, I'm going to go ahead and grab this from our exercise file folder in this chapter and drag it into my Contents pane. Now, this is just a table, so we want it to be a point feature so we can display it in a geography. I'll right click on the CSV and choose to display XY data. Okay, great, now I'm going to change the name of the output feature class. Note that this is going to be inside of a geodatabase in the project I've created here called WebMapping. So I'm going to put my cursor in here, back it up a little bit, and I'm going to call it POINTS. I'll make it all caps. There we go. Now it has the longitude of the X field, and latitude is Y. That's correct, and we're using WGS '84. So let's click OK. And now we can see our data locations as points, and we immediately see a problem. At least one of the points from the [data.gov](https://data.gov) dataset
>
> **[1:35](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=95)** is over here in the state of Minnesota, so not Michigan. So let's dive deeper and find out what's going on. I'll hover over this point, and I'll left-click it. Well, it looks like a real place to me. It's says Traverse City Light and Power. It looks like the address is inside the state of Michigan. Let's take a look at the latitude and the longitude. I'll scroll down here, and the latitude is 44 degrees north. Ah, there we go. The longitude should not be negative 92, or 92 degrees west, but Traverse City sits around 85 degrees west, so that should say a negative 85 and then decimal numbers. So we need to fix this. I'm going to scroll back up here and note this record number, 1150, in this dataset right here. That's the row number. And in this case, I'm going to select this business, and I'm going to copy it. I'll just right-click and copy. Now I'll go up to the Locate feature, and I'm going to paste that. We'll unpin this and go back to Locate. Paste this right here, hit Enter, and hopefully we'll find it. Okay, great. There it is. Traverse City Light and Power, it looks like the same address. So it looks like we've found this location. I'll right click here and choose What's here? And now I'll scroll down and take a look and see what we get. All right, there is our correct longitude
>
> **[3:08](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=188)** for this particular place. So now I'm going to go ahead and copy this by selecting and Copy. Now, if we go into the table of the actual layer itself and update this, the table will be updated, but our geography will not. I'll [[Zoom]] to this layer. And so essentially what will happen is the table will get updated, but this geography will not. So we need to go and edit this first and then do another Display XY Data. So if I open up this particular layer, I'll choose Open, and now we'll scroll down to our record of interest, 1150. There we go. Here it is. And we move over to longitude. What we'd like to do is we'd like to go ahead and get into this cell and actually update it, but double-clicking doesn't do anything. And that's because text files, [[Microsoft Excel|Excel]] files, and CSV files are considered read-only in ArcGIS Pro. So you have two options. First, you could go outside of ArcGIS Pro, edit the CSV data file, and update it in a spreadsheet software, and then bring it back into ArcGIS Pro. Or second, you can just stay here and make this a GIS-friendly table, which is what I want to do. So we first need to convert this to a GIS-friendly table. We do that through the tools. So I'll go to Analysis, and Tools, and bring up my Geoprocessing pane. Now I'll click on the toolboxes.
>
> **[4:43](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=283)** And in this case, we want to convert it, So we'll go to Conversion Tools. Now, in this example, I know where we're going. We're going to go to To Geodatabase. Here, I'll expand that and go down here to Table To Geodatabase. This is the tool we can use to convert this CSV directly inside of ArcGIS Pro to a GIS-friendly table. So our input is the same CSV. Here, we'll choose the CSV. And now, our Output Geodatabase, We want to go ahead and point to a folder that we want to use. So here we're inside the project folder called WebMapping, but I'll go ahead and create a new folder in here, and I'll just call it UPDATED and go with that. And now I'm going to click OK. And what will happen is we will have then this table going into this UPDATED folder. It will create what's called a DBF file. So let's go ahead and run. And now let's view it together here in the catalog. I'll go ahead and go into my WebMapping folder, my UPDATED folder I just created, and there is my DBF. Now, note, it is very similar to this name right here. This is a .csv, but this is actually _csv.dbf. so you can very easily get confused. So don't get confused. So since this is a friendly GIS table, we can actually edit this before we display XY data. Let's grab it and pull it into the table of contents here.
>
> **[6:18](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=378)** I'm going to right-click, open the thing up, and now we'll scroll down to the same record, 1150. Here it is, and now I'm going to go ahead and go to the Latitude and Longitude columns here. There we go, and now double-click into here, and I will paste it and hit Enter. And so now this dataset has been updated with the correct longitude for that particular feature. Great. Now I'm going to clear my selection. Make sure that everything is unselected. I'm going to right-click on my DBF file that's been updated and choose to display XY data. Now I'll go ahead and name this one something different too. In this case, I'll call it UPDATED. And we'll make it all caps too. Great, Longitude, Latitude, WGS '84. All looks good. Hit OK. And now I'll go ahead and remove this or downsize it here. Oops, there we go. Close that, and close that. Great, and now I will uncheck this previous one we created, and there we go. Now you can see that that point is no longer in the state of Minnesota but is actually over here in Traverse City. Great, so now I'm going to zoom to this layer, and this is the layer that we're going to use to build our web map. Now, before we do that, let's clean up some of this data. Let's really make this a nice web map here before we export it outside of ArcGIS Pro.
>
> **[7:54](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=474)** Let's deal with the symbology first. Here, I'm going to right-click on my layer, and I'm going to choose Symbology. Now, in the previous video, I showed you how to navigate inside of [arcgis.com](https://arcgis.com) and pull data in and visualize it. With this particular dataset, we made it a single symbol, and we gave it some colors and a certain size. Let's do something different here. Let's build an auto-generated heat map for this data. So here in the symbology, I'm going to use the dropdown, and I'm going to choose Heat Map. Now, we can adjust the parameters here, and immediately we see that it looks like there are many alternative fuel location stations over here in the Detroit area and the Lansing area, and over here in West Michigan, in the Grand Rapids area. If we wanted to adjust any of the symbology here, we could do that. I like this. Let's keep the radius the same. And we'll go ahead and utilize this. And the last thing that I think we really need to do is update this long, complicated layer title. So let's go ahead and update that quickly. We can update it in a couple of different ways. Since it's selected, if I left-click inside of it, I'm automatically going to have a cursor, and then I can deal with it. We can also go to the properties and adjust it there. And I don't think we really need this layer here, so I'm going to right-click on it and choose to remove. And I'm going to remove these two data tables as well so that they do not get published with this particular web map.
>
> **[9:30](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=570)** Okay, I think we're ready to put this onto [arcgis.com](https://arcgis.com) and view it as a web map. Let's go ahead and position exactly the way that we want this geography to be viewed. There we go. And now what I'll do is I'll go to the Share option. Up here, I'll click on Share. And inside the Share as group is what we're interested in. Of course, what you see is that the web map right now is grayed out, and that's because this feature requires you to be logged in to [arcgis.com](https://arcgis.com). But it requires you to have an organizational account. Now, I know many of you watching this video can do what I'm doing, but for those of you who don't have an organizational account and can't publish this to a web map, you'll just have to watch how to do this so that when you do have an organizational account, you'll be able to replicate what I show you here. Okay, so now that I've logged in, you can see now my Web Map icon is active. Now, when I click on it, the pane for publishing the web map becomes active as well. I can see that, and also you can see some details that we need to fill in that are similar to what you saw previously on [arcgis.com](https://arcgis.com). I'm going to update my title with a more meaningful title here, and now the summary. It's also good to include the data source,
>
> **[11:04](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=664)** and I'll do that here. And for tags, these are more like keywords, so Alt Fuel should do it, and United States. And now let me scroll down to see the other parameters that are here. Now, this is a folder location where you can place inside of [arcgis.com](https://arcgis.com), if you have a file folder structure already there, whatever you want. In terms of the location of where this web map will be, remember, you're going to write this directly to [arcgis.com](https://arcgis.com) inside your Contents location, your [[Data Management]] area on [arcgis.com](https://arcgis.com). And so you could use the dropdown here to choose a particular folder. You could also do it inside of a new folder. So I've got an Alt Fuel folder, so I'm going to put it inside that Alt Fuel folder. And last is sharing. You can choose to share with the public, which would be Everyone, or within the particular organization that you have. If you make yours just within the organization, then it's going to be private and only available to those in your organization. You could also make it private just to you as well. You don't have to click either one of these. And then it will just be available only to you. For this example, I'll go ahead and choose Everyone and so that it's shared publicly. You can also, if you're part of a group, choose a particular group that you're a part of inside of your organization.
>
> **[12:37](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=757)** Now, certainly, the most important step here is the Analyze button. You want to always analyze first to see if there are any problems with your web map setup. And so if there are potential problems, you'll be alerted to them here. Issues that are identified as high severity will need to be dealt with before you can publish your web map. It works similarly to the ArcGIS Server Analyze tool, if you've used that. I've done this so many times over the years, I usually know how to fix these issues quickly. But if you aren't experienced, you might have to spend some extra time doing more investigation and study in the help sections of ArcGIS Pro online. So the Analyze tool identified a couple of issues for us, which is great for me to show you how to fix them. First, there is a map projection issue. It looks like the different layers within the contents have different projections, and so we need to deal with that. We have a couple of options. We could remove the two different web base map service layers here so that we can simply be in one projection, or we could change the projection of the alternate fuel location layer to be that of the base maps. So let's go ahead and do that. Let's update the Michigan Alt Fuel Locations to be the same as the base maps. So first I'll find out what is the projection
>
> **[14:12](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=852)** connected to the base map by going into the property of one of these served layers. Here, I'll right-click and choose Properties. And now I can go into the Source tab and Spatial Reference. I see that the projection is the Mercator Web Auxiliary Sphere, and I cover projections in an earlier chapter in this course. So if you skipped ahead and need a refresher, go back and check that out. Okay, so now I can hit Cancel and go back into my Geoprocessing pane. In this case, I'll just hit the Back button and get into the toolboxes again. So you might not know what folder that you need. In this case, you're probably lost. So let's go ahead and find projections. I'll just type in Project, and now we can find the Project. It's inside the Data Management Tools, but sometimes it's very difficult to find it. So here's the tool that we want, because we want to take this Michigan Alt Fuel Location file and actually change its projection permanently using Project. Okay, I'll double click on Project here. And now I can go ahead and pull in this layer. And if I want to go ahead and change the feature class name, I can. For this example, we'll go ahead and keep it that. So now I can put in the output coordinate system. I'll click on the little globe. I'll choose my layers. In this case, I'll select the one that it is, and I'll hit OK, and now I can run. And what will happen is this layer will now be re-projected
>
> **[15:48](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=948)** into the auxiliary sphere. Great, now I can go ahead and remove this particular layer because we no longer need it. And we have this projected layer. We can double-check to make sure that that is the actual projection. And in this case, we've got the Source tab and Spatial Reference, and we have the same projection now. Now I can go back here and click on Analyze, and it should clean up this problem. Okay, so we still have an issue. So let's double-check and make sure that this particular layer also is the same projection. We see that it is. So perhaps the data frame itself is the problem. We'll choose the properties of the data frame and take a look at that particular coordinate system. And there it is. It's WGS '84. So although we have everything in the same projection here, our data frame is not in the same projection. So I'm going to scroll up here, choose the layers, and adjust the data frame itself to be the same projection. Awesome, so now if we click on Analyze, it should clean it up. And now you can see that it's gone. So we've dealt with that one problem. Now let's deal with the other. It looks like we have an assignment problem with unique IDs. So what I'm going to do is I'm going to right-click on the problem and see if there's a solution. It looks like I can open the properties and assign the IDs, or I can choose to auto-assign these.
>
> **[17:24](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=1044)** That is the faster method. So I'm going to do that, auto-assign the IDs sequentially. Now, when I did that, you can see the green check mark that's put here on this particular problem, but it also says a status of Re-analyze. Again, we have to re-analyze, or just analyze again, to see it go away. Here I'll click on Analyze. Sweet, and now we have no more issues. So now we can click on Share, and our web map will be published to [arcgis.com](https://arcgis.com). All right, so let's click on Share. Great, now the web map is created, and I'm going to click on Manage the web map to launch a browser so we can see our work. So right now, we're logged out, but if we logged in, we could update aspects on this page. But for now, let's look at the results in the Map Viewer. I'll just click on Open Map Viewer. All right, so right away, we see the visualization looks a little different than what we made in ArcGIS Pro, but it's pretty close. Since I'm going to do updates on this map and save my work, I do need to log into my organizational account. So I'll do that quickly here. So it looks like here we only have this one layer published. There isn't anything else, so we're good to go. Our data tables are not here or anything else, just this layer. So if I want to see the table here, I can show the table. And now we can see that we've got the 1,151 records
>
> **[19:01](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-build-web-maps-from-arcgis-pro?u=76281980&t=1141)** that are from this dataset. I'll close that. And now let's deal with some symbology. Over here, we're going to open up the Edit layer style. And in this case, I want to deal with the style options related to my heat map. Now I'm going to scroll down here, and I might adjust some of these sliders here just to make them a little different, just to give a little more cool visualization here. There we go. That's cool. Now I'll go ahead and save my web map over here under the Save option. Now, since it's already a web map itself, if I just click on Save, it'll save this with the new adjustments that I've made. So this is now a web map that we have created in ArcGIS Pro and exported here to [arcgis.com](https://arcgis.com), remarkable. Next, I want to show you how to pull this web map into a mapping application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (11), cursor (2), [[Zoom]] (2), [[Data Management]] (2), [[Microsoft Excel|Excel]] (1)
> **UI Navigation:** click on (14), right-click (7), scroll down (6), go to (6), open the (2)
> **Env Vars:** csv (7), gis (4), updated (4), wgs (3), dbf (3)
> **CLI Commands:** make (11), find (6)
> **URLs:** [arcgis.com](https://arcgis.com) (10), [data.gov](https://data.gov) (2)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (1), previous video (1)
> **Analogies:** similar to (2)

#### [How to make an online mapping application](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-make-an-online-mapping-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-make-an-online-mapping-application?u=76281980&t=0)** - [Instructor] Web maps are awesome. And there are constructs for web mapping applications. Web mapping applications are accessible through a browser and they are contained environments that you create and control to give a professional, sleek look to your interactive maps online. So here I am inside contents from my organizational account on [arcgis.com](https://arcgis.com). Here you can see I've got my web map right here. I've got a feature layer served, and I also have a service definition, which gives structure to my online map. Now first, if I click on feature layer, it launches a new page, and I can scroll down here to the bottom and grab the URL of this particular feature. I'll copy that. And now if I just go up to [rgis.com](https://rgis.com), the map feature, and I choose to open up here a layer directly from a URL, add layer from URL, I can just simply paste that feature class URL and choose add to map. And now you can see I've got the same layer that I've served previously and it's loaded again. So that's how we copied the [[Representational State Transfer (REST)|rest]] service endpoint directly from the URL for that feature class that we created. Of course, I want to update some of the symbology here before I would save it and all of those things. So let's go back to the contents.
>
> **[1:33](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-make-an-online-mapping-application?u=76281980&t=93)** I'll use the upper left here and choose content. And I'll go ahead and leave this. We don't need to save it. Okay, so back here in contents, you can see right away that these two layers are public, with the globe icon. So both the web map itself and the feature layer are public. That's very important for our web mapping applications. We want to build web mapping applications that are available to everyone. And so if you do make them private, then you have to consider a login is the only option to be able to see that web mapping application, and that will be for mostly people in your organization to see that result. So by making things public, you will not force your users that visit your site to log into [arcgis.com](https://arcgis.com). Now, there are a couple of ways to confer a web map into an application. You can simply select it and choose to create an app right here, or you go onto the landing page for the actual map itself and choose it there. So here I could create web app. So let's just do it here, and I'll use the dropdown and I'll choose instant apps. And now by scrolling down, you can see there are a lot of different templates related to this option, instant apps. I'll just go with the basic one for this example. So I'll click on basic and choose.
>
> **[3:07](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-make-an-online-mapping-application?u=76281980&t=187)** I do go deep with my students in the classroom at my university with many of the templates here, including story maps. Now I'm happy with these details so I'll click on Create app. Now we can step through the wizard and deal with each one of these panes and suggestions for updates. And so we can do all those changes. We can adjust any aspect that we want in these settings. We can change the theme and layout. Let's do that real quick to maybe a dark theme. And if I scroll down, there are other options that I can include or I can pull different elements to different parts of this web map itself. I can configure basically everything for the look and the feel. I can click here to go back to these different places. If I want to update the about section, if I want to include some header information, like this is at my particular business location or other kinds of things, I can do all these details. So I could click on interactivity, for example, and we could perhaps offer the layer list to our users, so that they can check box them on or off. In this case, I only have one layer, so it really doesn't make a difference. But these are the kinds of things that you can do. It's very impressive. So when we're ready, we're going to click on publish. Let's do that now so that you can see the result. I'll confirm that and now it will go through the steps to publish this app. Now, if we want to make edits beyond this, we can at any time,
>
> **[4:39](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-make-an-online-mapping-application?u=76281980&t=279)** you're never locked in just doing this process and using the Wizard. Now I'll go ahead and launch it, and it will open up a new window for us with just the web mapping application. Now you can see we have a wrapper all the way around this web map itself. It has a nice, sleek interface, it has a nice home button up here, and some dropdowns here with our different layers. We can do a search, we can view different things like this right here. This is our particular layer we're actually using here, right? We can turn it off, turn it on. So if we have lots of layers in our web mapping application by doing some of these options that we selected previously, we're giving our end user the ability to interact in our map. Of course, they can go all around our map, and in fact, they can [[Zoom]] out all the way to the world, right? And they can click on the home button and go right back to the view that we want them to see. And what I want you to note is that this is the URL to your application. So it is different than this web map itself, right? Here is the web map landing page. It has a different URL than this application. Again, you could take any web maps that you create and build applications around them to give this wonderful, professional, sleek interface to the work that you do. With so many templates and options for designing web mapping applications, Esri has truly built something special here
>
> **[6:12](https://www.linkedin.com/learning/real-world-gis-22715766/how-to-make-an-online-mapping-application?u=76281980&t=372)** in the synergy of moving between [[ArcGIS Pro]] and [arcgis.com](https://arcgis.com). So I hope you'll enjoy your next steps in building map applications which is my next challenge to you in the challenge video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Zoom]] (1), [[ArcGIS Pro]] (1)
> **UI Navigation:** click on (6), scroll down (2), dropdown (1)
> **Env Vars:** url (7)
> **URLs:** [arcgis.com](https://arcgis.com) (3), [rgis.com](https://rgis.com) (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)

#### [Challenge: Make an online mapping application](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-make-an-online-mapping-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-make-an-online-mapping-application?u=76281980&t=0)** (enlightening music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-make-an-online-mapping-application?u=76281980&t=5)** - [Instructor] Now let's see if you can make an online mapping application. Your goal here is to build a web map using the 2D map on [Arcgis.com](https://Arcgis.com). You should build a web map application then from that web map and then share it with the world. It might take you a little more time. So you should be able to complete this exercise in about 45 minutes or less.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **URLs:** [arcgis.com](https://arcgis.com) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (enlightening music) (1)

#### [Solution: Make an online mapping application](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application?u=76281980&t=0)** - [Jason] Let me show you how I made an online mapping application. Of course, your steps are probably a little different than mine, but hopefully we've both ended up at the same destination, a built mapping application online. First I need some data. So here I've gone to GRData, my local Grand Rapids, GIS Data depot, and I'm going to search for neighborhoods because I'm interested in building a mapping application around neighborhoods in my city. So let me search here for neighborhoods and there we go. City of Grand Rapids neighborhood areas. That looks promising. Okay, I can download the data site. This is exactly what I'm looking for. This is wonderful. Okay, I have a CSV, a KML a shapefile and a GeoJSON option. Let me go ahead and download the Shapefile. Alright, there it is. Now let me pop over here to my already logged in [arcgis.com](https://arcgis.com) presence. You can see in the upper right, I've already logged into my public profile and we have a map interface. Let's try and add that Shapefile that I downloaded. In the upper left here, I'll choose the add button and add layer from file. Here you can see the supported file types are CSV, GeoJSON and KML. Unfortunately, we do not have an option for the Shapefile here. Either, there's a limitation in this map interface
>
> **[1:35](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application?u=76281980&t=95)** or my public account is the limiter. But on the city of Grand Rapids GR data site I did have an option for that neighborhood file as a GeoJSON and a KML. Let me go grab one of those. In this case, I'll choose the GeoJSON file which is a [[JavaScript]] file that contains spatial data and attribute data. So I'll download that and now I'll go back to my map interface, navigate to it. There it is, and choose to open. Great, now I'm going to adjust the title. I don't like these underscores here, especially if they're going to be in my map interface, and also if there are going to be in my mapping application. I don't want that to be the case. I want it to look nice and clear and crisp. Here, I'll add in a tag, so that we have keywords in our mapping application. And I'll add a summary. Great, it looks like we've filled in everything. And now I'll click on create an add to map. Wonderful, now I can see the neighborhoods in Grand Rapids Michigan, in my map. Now I'm interested in something a little more complicated than this. In this case, we just have one color linked to the different neighborhoods.
>
> **[2:59](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application?u=76281980&t=179)** - I want to see if first I can sort by the different kinds of names. So I'm going to show the table data first. And great, there's a column called NEBRH, and it looks like that has all of the names. Yep, of the different neighborhoods. So that is what I'm interested in for the symbology styling. So here I'm going to choose to edit the layer style, and next I will choose the field that I want to use for this style. In this case, it's that same NEBRH. Now click on add, and the style gets updated with this qualitative data here. And now all of the different names are listed. But it does look like there's another category that's pretty large, so let me adjust that. Here, I'm going to go to Style options. And it looks like here I've got some options, I've got several different categories, and I also have values that I have here for my different neighborhoods. So it looks like 30 of them are here but I'm interested in adding in a couple more. Not all of them, just a few more. So I'm interested in adding Heritage Hill, and let's choose Midtown. Let's choose Ottawa Hills and we'll choose Roosevelt Park. So I'm going to move those four up with this group option here to the Untitled group.
>
> **[4:33](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application?u=76281980&t=273)** And now they appear here in this particular group and they also appear here now in my legend. So we can adjust and change all of these if we wanted to. We could select them. All right, we can choose all of these if we wanted to move them all up. So let me show you what that looks like. It does get a little overwhelming if we start adding in all of these, but let's go ahead and do it, just for the sake of our mapping application here. So first of course, you know we're building a web map and that web map is the basis for our mapping application. Okay, move to group and the Untitled group. Now they're all there. And we have this multicolored pattern of all of the neighborhoods in Grand Rapids. Now I want to give titles to these neighborhoods on my map itself. So over here you can just hover over these different options and you'll see that we have a labels option here. So I'll click on that. And now I want to enable the labels and add a label class. So I'm going to click on add a label class, and now I can select the field that I want to be the label field. In this case, I want the names to be the label field so that's already selected for me and I could adjust other aspects of the label. But this looks pretty good, so I'm happy with that. I'll go ahead and close that. And now let me do one more thing. Let's see.
>
> **[6:04](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application?u=76281980&t=364)** Let's click on one of these neighborhoods and see what we get in our popup. Okay, that looks really ugly. (chuckling) So let's go ahead and deal with the popup itself. Over here, you can see if we just hover over these we have a popups option. So I'll click on that one. Popups are enabled, so we could turn 'em off if we wanted to, but not in this case. This case, I'm going to actually deal with the fields itself. So I'm going to click on Fields list. And here I'm interested in maybe removing a lot of these fields. They are really kind of unnecessary. Let's go ahead and remove this one and this one, let's keep email. Let's get rid of this one, this one and let's make the name there and we'll include phone number just in case it's in the dataset itself, but we want to move the name up above. So I'm going to drag it up above. And so now it's adjusted in the actual popup. And we've kind of cleaned up the popup. Looks a lot nicer like this. Alright, so now we're good there. Okay, I think I've got my web map basically the way that I want it to look. I've got the geography set here. I've got the different colors set for the symbology. I have my labels and I have my popups so I'm pretty happy with this. Let's go ahead and save this web map. Over here on the left with the folder icon, I'm going to choose to save as. Now here I'm going to adjust the title,
>
> **[7:38](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application?u=76281980&t=458)** I'm going to change the folder, add tags and summary. Here, the title will be GR Neighborhoods. I'm going to change my folder to something I've already created called 2023 GR Neighborhoods. The tag here again will be Grand Rapids and Michigan.
>
> **[8:04](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application?u=76281980&t=484)** And now I'll save this web map. Excellent, now we want to build a mapping application around this web map. To do that, I'm going to go back to my contents and go from there. In the upper left, I'll click here and choose content. And now I'll go to my GR neighborhoods folder, where my web map is located. Here, I'm going to choose to create an app and I'll choose instant apps. In this case, I'm going to scroll down and look for the basic option. There it is, I'll choose that. And here I'm going to give a title to my application itself and some tags, and I'm going to save it in that same folder. And I'm going to create my app. Okay, so now I have an empty web map application. Now I need to add the web map that I created before into this application environment. So here I'll go ahead and choose the map, by choosing step one, I'll select a map or scene. And in this case here is my GR neighborhoods that I created. So I will select that, and there it is. Now I'm going to [[Zoom]] in just a little bit more to this particular Zoom level. That looks good to me. Now I'll choose next, and I'm at step two. In this case, I like these options available.
>
> **[9:37](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application?u=76281980&t=577)** I'll choose next for step three. The defaults look good to me and I'll choose next for step four. In this case, I'm not a big fan of the light theme, I like the dark theme more, as you can see in my browser here even, so I'll choose the dark theme for this mapping application. And let's see what other options are here, if I'm interested in changing any of them. They look pretty good to me. So now I'm pretty happy with this, I'll go ahead and choose to publish it and now I'll launch it. Awesome, here's my mapping application. It looks very, very slick. Here, I can choose the legend and I can see all of the different neighborhoods within my city, fantastic. And now I can take this URL up here and copy it, and send it off through an email to many of my friends and colleagues, so that they can actually interact with my map application here. So this was a quick way to build a mapping application and hopefully you've been successful to build one too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[JavaScript]] (1)
> **UI Navigation:** click on (7), go to (2), navigate to (1), select the (1), scroll down (1)
> **Env Vars:** kml (3), csv (2), nebrh (2), gis (1), url (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** download the (2)
> **Speakers:** - [jason] (1), - i (1)
> **CLI Commands:** make (1)
> **URLs:** [arcgis.com](https://arcgis.com) (1)


### 6. How to Build a GIS Project from Scratch?

[↑ Back to Table of Contents](#table-of-contents)

#### [Challenge: Get the GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-get-the-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-get-the-gis-data?u=76281980&t=0)** - [Instructor] Now let's do a project together from start to finish. I will challenge you with a series of steps and then I will show you the solution I came up with. I will show you both in ArcGIS and [[ArcGIS Pro]]. This first challenge is to get the GIS data. Here, I want you to focus on a search of GIS data in the city of Chicago, Illinois and I want you to try and download a text file like a CSV or an [[Microsoft Excel|Excel]] spreadsheet and make sure that in that data there's location such as latitude and longitude. And this challenge should take you about 15 minutes or less.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** gis (2), csv (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Get the GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/solution-get-the-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-get-the-gis-data?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/solution-get-the-gis-data?u=76281980&t=5)** - [Instructor] Now, let me show you my solution for finding GIS data for the city of Chicago, Illinois. Here in my browser, I did a search for Chicago GIS, and I'm going to choose this first option here. [[Geographic Information Systems (GIS)|Geographic Information Systems]]. Here is the landing site for the city of Chicago and their GIS environment. If your page looks different that's probably because they've updated it more recently. I'm going to scroll down here and see a variety of options. In this case, I'm interested in geospatial data, so I'll click here. And now I have the GIS data portal for the city of Chicago. Let's go ahead and scroll down here. And let's see, maybe, let's take a look at senior centers. Let's view that. Alright, now we want to be able to get the data in a table format. So we have CSV table data here, but do we have latitude and longitude? So I'll scroll down. Ah, columns in this dataset. Okay, it looks like we have addresses here, but we do not have latitude and longitude. And so that is a problem. So we do not want to download this dataset for the project. Let me go back and see if there are any others. Let's see here. Ah, okay. Libraries would be an interesting project to do. The location of libraries within the city of Chicago. So let's click on that. Ah, this looks promising.
>
> **[1:37](https://www.linkedin.com/learning/real-world-gis-22715766/solution-get-the-gis-data?u=76281980&t=97)** It's already visualized for us. So let's take a look at the export options. Okay, it looks like we have a CSV here. So it's likely that this particular dataset has the latitude and longitude because we're already seeing it here in the map view. So I'm going to click on CSV and download that data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Geographic Information Systems (GIS)|Geographic information systems]] (1)
> **Env Vars:** gis (4), csv (3)
> **UI Navigation:** scroll down (3), click on (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Challenge: Visualize the GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-visualize-the-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-visualize-the-gis-data?u=76281980&t=0)** - [Instructor] Now that you have successfully downloaded your GIS data from the city of Chicago, let's go ahead and visualize that data in the software. Here you're going to bring that into either ArcGIS or [[ArcGIS Pro]], and I'll show you both, and I want you to visualize that table data. This challenge should take you approximately 15 minutes or less.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (1)
> **Env Vars:** gis (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Visualize the GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/solution-visualize-the-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-visualize-the-gis-data?u=76281980&t=0)** - [Speaker] Now that we've downloaded our GIS data let's visualize it and let me show you what I did. First, we need to take a look at our data and make sure that our latitude and longitudes are inside that data set. So here I'm in [[Google]] Sheets and I'm going to open that CSV up and investigate it. Here I'll go to file and import and upload. Here I'll go down and grab this file by showing in the folder, and now I'll pull it in here to import it. Great, it looks like in the location column we have latitude and longitude, but we need to separate those and split them. So, I'm going to create a latitude and a longitude column and now I'm going to actually split these so that we have isolated latitude and isolated longitude. Here, I'll just go into this and start copying and pasting and making sure that everything is nice and clean and ready to go. Sometimes it is a painstaking process to create the geospatial data sets that you want. So I'll go ahead and complete this now. Okay, here I've copied over all of the latitude and longitude values in the dataset, and we're ready to go. So let's save this data by changing the title and then downloading it onto our computer.
>
> **[1:37](https://www.linkedin.com/learning/real-world-gis-22715766/solution-visualize-the-gis-data?u=76281980&t=97)** Okay, here we are in Arc Map. Let's go ahead and get the CSV and bring it into our table of contents. Here I'm going to grab that file that we just downloaded and created. And I'll open it up in my table of contents. Now I need to visualize it, so I'm going to right click on it and I'll choose display X Y data. In this case, I have longitude and latitude set correctly in the fields and no coordinate system set. So I'm going to go ahead and give it a WGS 84 coordinate system for the latitude and longitude values. To do that, I'll click on edit and just WGS 84 is a geographic coordinate system under the world folder. And so I'll scroll down here and choose WGS 84 and hit okay. And now I hit okay. And that is okay. We don't have an object field. It will be created for us. There we go. Now let's verify that we are actually in the right geography. What I like to do here is just pull in a base map and verify that we are actually in the right place in the world. So I'm going to use my dropdown and add a base map. In this case, I'll go ahead and add imagery with labels. Now this should appear in Chicago area. So let's see if it's right. Great. It looks like the data has loaded into the Chicago region and so we have successfully visualized this data from the CSV in Arc Map. Now let me show you Arc GIS Pro.
>
> **[3:11](https://www.linkedin.com/learning/real-world-gis-22715766/solution-visualize-the-gis-data?u=76281980&t=191)** Here we are in Arc GIS Pro, and now I'm going to do the same thing in the catalog. I'll grab this CSV and bring it into the contents pane. And now I'm going to right click on it and choose display X Y data just like we did before. In this case, my longitude and my latitude are set correctly and it also populated WGS 84 for me automatically. I'll click okay, and here we are. It visualizes it correctly in the right geography. Awesome work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Env Vars:** csv (4), wgs (4), gis (3)
> **UI Navigation:** click on (3), go to (1), scroll down (1), dropdown (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [speaker] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: GIS attribute data exploration](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-gis-attribute-data-exploration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-gis-attribute-data-exploration?u=76281980&t=0)** - [Instructor] Now let's take a look at the GIS attribute data itself within the GIS environment. Your goal here is to explore the attribute table and decide on a subset of the data that's interesting to you. This challenge should take you no more than five minutes.

> [!info]- Semantic Content
>
> **Env Vars:** gis (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: GIS attribute data exploration](https://www.linkedin.com/learning/real-world-gis-22715766/solution-gis-attribute-data-exploration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-gis-attribute-data-exploration?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/solution-gis-attribute-data-exploration?u=76281980&t=5)** - [Instructor] Now, let me show you my solution to the data exploration of the attribute table. First, let's start with ArcMap. Let's go ahead and open the attribute table for the spatial layer that we created of the libraries. I'll right click and choose open attribute table. Now, our goal is simply to look and see the data, and choose a subset of the data that's interesting to us. I'm going to scroll over here, and it looks like under the hours of operation there are differences. So let me visualize these, and see the different categories that exist. One of the easiest ways to do that is through symbology. So here I'll close the attribute table, and I'll right click on the layer and choose properties. Now, under the symbology tab, I can change the categories and adjust the field that we're interested in, here, hours of operation. And now I'll choose to add all values. And now I can see all of the variations that exist in the data related to hours of operation. In this case, it looks like there are different variations where the library itself opens around noon on Tuesdays. And so here we have the counts, it looks like three, two, 33, so a total of 38 different libraries out of 81. So nearly half of them open at noon on Tuesdays, whereas the other ones open earlier on Tuesdays.
>
> **[1:40](https://www.linkedin.com/learning/real-world-gis-22715766/solution-gis-attribute-data-exploration?u=76281980&t=100)** So I think that's what I'm going to focus on, those that open later on Tuesdays in the library system of Chicago. So let's jump over to ArcPro and take a look at this. Now, let's do the same thing. Let's go ahead and isolate, by symbology, those very hours of operation. I will right click here and choose symbology. Now, under the symbology pane, instead of single symbol, we're looking for categories. In this case, we want unique values. So here I've changed to unique values, and now I'll adjust the field name, hours of operation, and here they are. Now, I have visualized all of the different variations. And we're going to focus on the same subset of libraries that open at noon on Tuesdays, compared to those that open earlier.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (1), click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Challenge: Isolate the GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-isolate-the-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-isolate-the-gis-data?u=76281980&t=0)** - [Instructor] Now I want you to isolate the GIS data that you are interested in. I want you to visualize some subset of the GIS data itself. In this case, it should take you no more than five minutes.

> [!info]- Semantic Content
>
> **Env Vars:** gis (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Isolate the GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/solution-isolate-the-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-isolate-the-gis-data?u=76281980&t=0)** - [Instructor] Now let me show you my solution to isolating the GIS data. Here I am in ArcMap, and I want to focus on the layer we've created first. If I hover over it, notice it says events at the end of this line. This is an events layer, which is like a temporary layer in ArcMap. And so it does have limitations. If we want to isolate the data in this example, I want to pull out all of those libraries that open at noon on Tuesdays. To do that, I need to make a selection. But if I choose Selection up here, they're all grayed out, and that's because this is an events layer. It needs to be a permanent layer, like a shapefile. So let's make it a shapefile. To do that, it's simple. I'm going to right click on the layer and choose Data and Export Data. Now I want to export all of my features, and in this case, I'm working inside of the project folder that I've created. But you might not be there. So you should open up the file folder for browsing and navigate to the location and the folder that you want to put this file in. In this case, I have it set as a shapefile, but it might be a personal geodatabase or a database feature class. So I want you to choose Shapefile. In this case, I'm going to rename my layer. And I have no spaces in my file name.
>
> **[1:34](https://www.linkedin.com/learning/real-world-gis-22715766/solution-isolate-the-gis-data?u=76281980&t=94)** That's an important feature in ArcMap. And now I'll go ahead and choose Save. And OK. And now I will add this data to the map. Great. Now that I have this as a shapefile, I can make selections. And sure enough, there it is. Now we will select by attributes. So I'll click that. And now we want to build a query for our selection. In this case, we're interested in hours of operation. And now double click on Hours of Operation and it goes down here into this select box. And now I want to choose equals, and now Get Unique Values. Now scrolling through this list, it looks like I only have one option, and that is this here. I'll double click it. These are the libraries that open at noon on Tuesdays. So I think in the previous video I said we had about 38. So actually we have less than that because we only have one category here. So now I'll choose OK. Now I've isolated only those libraries that open on Tuesday at noon. Now let's do the same thing in [[ArcGIS Pro]]. In this case, let's look at the layer. It is not an events layer, so in this case we can go ahead and choose the Select By Attributes and it will be available to us. But we have to build a query again. So here we're going to choose New Selection,
>
> **[3:08](https://www.linkedin.com/learning/real-world-gis-22715766/solution-isolate-the-gis-data?u=76281980&t=188)** and now we have to build the query. So, first, let's choose the field that we're interested in, and that's Hours of Operation. And we set it equal to. And now the options within there. Now we can expand this box to make it a little easier for us to see. Here we go. And when we move down, we can hover over and see the complete category. So this is the one we want, and now I can hit Apply. And OK. And now we have isolated those libraries in ArcGIS Pro that only open at noon on Tuesdays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (2)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (2), navigate to (1)
> **Definitions:** is an  (2)
> **Env Vars:** gis (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: Construct new GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-construct-new-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-construct-new-gis-data?u=76281980&t=0)** (light electronic music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-construct-new-gis-data?u=76281980&t=5)** - [Instructor] In this next challenge, I want you to create new GIS data. Your goal here is from your selection, to create a new data subset of this data and to do it as a shapefile. It should take you no more than five minutes to do this.

> [!info]- Semantic Content
>
> **Env Vars:** gis (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light electronic music) (1)

#### [Solution: Construct new GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/solution-construct-new-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-construct-new-gis-data?u=76281980&t=0)** (upbeat pulsating music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/solution-construct-new-gis-data?u=76281980&t=5)** - [Instructor] Now let me show you how I constructed some new GIS data from our selection. First, we'll start here in ArcMap. You can see that we have a selection. This is the subset of our data, and these are all the libraries that open at noon on Tuesdays. However, we need to make sure that this selection is from this library Chicago layer. Here at the top of the table of contents, I have a list by selection. So I'll click that, and we can see that 37 features are selected from the Libraries_Chicago layer. So it looks like we're pretty good. Now we'll go back to the layers list here and I'm going to right click on Libraries_Chicago. Because we have all of these data selected, and choose data, and export data. Now, I'm going to export the selected features. Not all features, but selected features. And I'm going to do that right inside of my project folder. So here we are, and I'm going to rename this file. And I'm going to make sure that it's a shape file among these options. Now I'll hit "Save" and "OK." and I want to add this exported data to the map. So I'll say yes. And now we've created a subset for libraries that only open at noon on Tuesdays. So let's work with that. Now let me show you how to do that in [[ArcGIS Pro]]. So here we are in ArcGIS Pro and Esri has not changed much with this particular feature. So here we have our subset already selected
>
> **[1:42](https://www.linkedin.com/learning/real-world-gis-22715766/solution-construct-new-gis-data?u=76281980&t=102)** from LibrariesChicagoLibraries layer, and now we're going to right click on it, and choose data, and export that data. In this case, we're exporting features. Now a little warning comes up and tells us that we have a selection. "The input has a selection. Records to be processed: 37." This is great. So we can always know within the ArcGIS Pro environment, whether we have a selection or not, because of this warning. And I'll go ahead and rename this field. Now notice that this is inside of a geo database. So we actually have a feature class here instead of a shape file. And I'll have to name it something else because we have a competing file in that same folder. So I've named it Libraries Noon Open Tuesdays Chicago. And I'll go ahead and hit "Okay," and it will create the feature class for me. Now, I asked you in this challenge to create a shape file. So let's take the next step and create the shape file, just so I can show you how to convert it from a shape file back to a geo database environment here in ArcGIS Pro. So we're going to use the conversion tools in our toolbox. I'll click on "Analysis" and "Tools." And here in the Geoprocessing tools, I could do a search or I could use the toolboxes. Here we're going to choose our conversion tools, and we're going to scroll down to the bottom to shape file. Here we're going to choose "Feature Class To Shapefile." And now I'll take that same layer
>
> **[3:17](https://www.linkedin.com/learning/real-world-gis-22715766/solution-construct-new-gis-data?u=76281980&t=197)** and I'll create it as a shape file. So you can see here, it does the exact same thing. We're just taking the "Feature Class To Shapefile." And so we could have done the previous step and then converted the whole thing to an actual shape file. Or we can just do it straight up from here and create it. So now you know how to do both of those things. I'm going to choose the output folder. In this case, I'm going to go up one level, and select the folder itself. Here we go. All right, so here we have our input. It's going to go into this project folder here and it's going to be a shape file. I'll click "Run." And now when we go to the catalog, we can see that. Here inside my folder, I'm going to right click, I'm going to refresh. And there it is. There's my shape file that I just created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (4)
> **UI Navigation:** click on (3), scroll down (1), select the (1), go to (1)
> **CLI Commands:** make (2)
> **Warnings:** warning (2)
> **Env Vars:** gis (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat pulsating music) (1)

#### [Challenge: Analyze the GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-analyze-the-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-analyze-the-gis-data?u=76281980&t=0)** (light music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-analyze-the-gis-data?u=76281980&t=5)** - [Instructor] Now let's analyze the GIS data. Your goal is to look at descriptive [[Statistics]] of your subset or your larger set and I want you to generate something meaningful from the results. This will look different for all of us because we've all downloaded different GIS data and have different results. This should take you no more than 10 minutes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Env Vars:** gis (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)

#### [Solution: Analyze the GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/solution-analyze-the-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-analyze-the-gis-data?u=76281980&t=0)** - [Instructor] And now let me show you what I did to analyze the GIS data. Here we are in ARC Map. Let's start there. Now, you may have gone over here to Arc Toolbox and looked for descriptive [[Statistics]] or some sort of summary [[Statistical Analysis]] and that would've been great. I'm going to go ahead and open up the attribute table of this particular layer. Here's my subset of libraries that open at noon on Tuesdays. Notice right now we have 37 of them that do this from our larger subset here. If I open this attribute table, we can see it's 81. So 37 of 81 are open on Tuesdays at noon. I'll go back here with a tab to my subset. Since we're dealing with descriptive statistics we need to have a new numeric field to look at that data. In this case, let's just pick zip code. If I right click on zip code, I can choose statistics at the top of the column. Here I can get a variety of simple descriptive statistics like count, minimum, maximum, sum, et cetera. Now, this isn't very meaningful to us except for the count. Well, I'm really just interested in one question and that is within these zip codes, do we have any repeats? Is there more than one library open on Tuesdays at noon in a zip code? So I'm going to right click
>
> **[1:32](https://www.linkedin.com/learning/real-world-gis-22715766/solution-analyze-the-gis-data?u=76281980&t=92)** and I'm going to sort by ascending and it looks like immediately I see that 60608 has two. And let's see if there are any others. If I'm going to scroll down here, it looks like 60623 has a repeat and anything else. 60632 has a repeat and it looks like that's all. So it looks like three of our zip codes have two libraries that open at noon on Tuesdays. And so let's go ahead and just view those by doing a selection. Here, I'm going to turn off this layer and I'm going to turn off this layer so that we only have our subset layer open. That's the only one we have. And let's go ahead and make this just a little bit bigger and easier to see. I'll make this red and we'll make that 12. Great. Now let's go back to the attribute table and view those particular zip codes and select them. Here, I've got my zip codes already arranged the way I had them before. I'm going to use the control key and left click for those selections. All right, and now I'll close the attribute table and we can see those selections. So these six libraries are open on Tuesday at noon and there are two of them in the zip codes.
>
> **[3:07](https://www.linkedin.com/learning/real-world-gis-22715766/solution-analyze-the-gis-data?u=76281980&t=187)** All of the [[Representational State Transfer (REST)|rest]] of the zip codes there's only one library that does this. So if we wanted to extend this analysis further we could bring in something like census data and take a look at the populations in these places where these libraries are. Or we could do a distance analysis and take a look at the average distance of walking, for example of the population to some of these libraries. So now let me show you how to do some of this in Arc GIS Pro. Arc GIS Pro of course works in a similar way. So here I can open up the attribute table by right clicking and choosing attribute table and here I can do the same kind of sorting. I can choose to sort this ascending and I can also right click and choose statistics and then we can get some output based on the actual numeric data. Of course, the graph and the pane look a little different than Arc Map, but it's the same concept.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (5), [[Statistical Analysis]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** gis (3), arc (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (1), scroll down (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: Import GIS data into a geodatabase](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-import-gis-data-into-a-geodatabase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-import-gis-data-into-a-geodatabase?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-import-gis-data-into-a-geodatabase?u=76281980&t=5)** - [Instructor] Now, let's import your GIS data into a geodatabase. To do that, I want you to first create a new geodatabase. Then I want you to import your layers into that geodatabase, either a final geodatabase or a mobile one. This should take you no longer than 10 minutes.

> [!info]- Semantic Content
>
> **Env Vars:** gis (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Import GIS data into a geodatabase](https://www.linkedin.com/learning/real-world-gis-22715766/solution-import-gis-data-into-a-geodatabase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-import-gis-data-into-a-geodatabase?u=76281980&t=0)** - [Instructor] So let me show you what I've done to import my GIS layers into a geodatabase. So, continuing our project here in ArcMap, I'm going to go ahead and clear all of the selections first. Just right click and choose selection and clear selected features. Now I'll double check and make sure nothing is selected. In this case, I do have a selected feature in Libraries_Chicago, so let me clean that up, too. Here, I'll right click. Yep, there it is. I turned on the layer, so we'll go selection and clear selected features. All right. I do this primarily because when you select features in ArcMap and then you export, you just export those selected features typically, and so I want to make sure when we import these into a geodatabase that I'm importing everything. So now let's go to the catalog and create our file geodatabase. Here in catalog, I'll select the folder that I'm interested in using. In this case, I'll use my project folder. I'll right click and I'll choose new, file geodatabase. Now I need to name it, so I can either click into it and name it, since it's already selected, or I can right click here and choose to rename. And I hit enter, and now my file geodatabase has been created. Now I want to populate it with my layers that I've created. So to do that, I'm going to right click and I choose import.
>
> **[1:37](https://www.linkedin.com/learning/real-world-gis-22715766/solution-import-gis-data-into-a-geodatabase?u=76281980&t=97)** In this case, I could choose to import each one individually or I could do multiple into this geodatabase. Since I have a few layers, let's choose multiple. Now you can see we have an input features option, a box that will show all of our layers that we want to import, and here is our geodatabase and the path we're using. So here I'm going to use the dropdown just to choose the layers that I want. This one, this one, and this one. Now what's going to happen are all of these layers are going to be inserted into the geodatabase. When I click OK, it'll run. Okay, great. The process is complete, we have a green check mark here, so we're good to go. Now let's take a look at our result in catalog. So here, I'll open up the expansion, and there they are. Now we have created feature classes inside this geodatabase. Now let's do the same thing in [[ArcGIS Pro]]. Okay, let me go ahead and clean up some of this. We'll close this, and here we'll close our table and our graph. Great. So here inside my project, Project_Start_to_Finish, I already have a geodatabase created. Here it is. Whenever you create a project in ArcGIS Pro, a geodatabase is automatically created in the folder structure in your My Documents location
>
> **[3:11](https://www.linkedin.com/learning/real-world-gis-22715766/solution-import-gis-data-into-a-geodatabase?u=76281980&t=191)** on your hard drive. Unless you've changed that location, it will always be here by default, so it's helpful to give meaningful names to your projects instead of just default names. So here, I'm interested in importing these layers into this geodatabase. Notice that we already have layers in there, and that's because every time we created a new dataset over here, it automatically went into our geodatabase, so we already have these data layers inside of the geodatabase. So, almost by default, we have that scenario. Remember, we had to actually go and export to a shape file just to get this layer down here. So, isn't that so awesome, that everything is already done for us in terms of geodatabases? But we might want to create a mobile geodatabase. Here you can see I hover over this geodatabase, and it is just a file geodatabase. So if you want to take advantage of the structure that is available through a mobile geodatabase which is being utilized globally as an open source approach, especially for our [[Databases]] available in mobile technologies, then you can do that here. I recommend right in the project folder to right click and choose new, and here you can choose mobile geodatabase.
>
> **[4:49](https://www.linkedin.com/learning/real-world-gis-22715766/solution-import-gis-data-into-a-geodatabase?u=76281980&t=289)** And there we go, and now let's name it that. Great. There we go. Now it's empty and we will go ahead and populate it with these layers. Now, one of the cool things is, we can copy each one of these into the mobile geodatabase. So I'll copy and now I'll right click and choose paste, and now it's pasted right in there. And the other one. Great. Now I can rename them if I want, and I have this mobile geodatabase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (2), [[Databases]] (1)
> **UI Navigation:** go to (1), select the (1), dropdown (1)
> **CLI Commands:** make (2)
> **Env Vars:** gis (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: Convert GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-convert-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-convert-gis-data?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-convert-gis-data?u=76281980&t=5)** - [Instructor] Now let's convert your GIS data. In this challenge, I want you to convert your feature class layers into a new projection. And I would like you to use the state plane or the UTM 16 north projection if you're following along with me using the same dataset for Chicago. If you're using some other geography around the world, then try and find a projection that's connected to that kind of geography. This should take you approximately 10 minutes.

> [!info]- Semantic Content
>
> **Env Vars:** gis (1), utm (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Convert GIS data](https://www.linkedin.com/learning/real-world-gis-22715766/solution-convert-gis-data?u=76281980)

#### [Challenge: Make a web map](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-make-a-web-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-make-a-web-map?u=76281980&t=0)** - Now let me challenge you to make a web map on [arcgis.com](https://arcgis.com). I want you to create a web map of your project, and you can choose any or all of your layers for your web map and set up the symbology for each of your layers. In this case, it may take you up to 60 minutes depending upon the sophistication of your web map.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **URLs:** [arcgis.com](https://arcgis.com) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - now (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Make a web map](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-a-web-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-a-web-map?u=76281980&t=0)** - [Instructor] Now let me show you my solution to making a web map from this project. Okay, here we are in [arcgis.com](https://arcgis.com). You can see in the upper right that I've logged in to my public account. Remember that when we want to add layers from a file that we do have some limitations. We have support for CSVs, GeoJSONs, and KMLs. So in this case, if you're working with ArcMap, then probably we're going to need to bring in the CSV file or manipulate the CSV file to be exactly the way that some of our shape files were or our feature classes with something like adjusting for the particular places that are open on Tuesday at noon, for example. Or if we're working with [[ArcGIS Pro]], then we could convert it to a GeoJSON or KML. So let's do that right now. Okay, here I am in ArcGIS Pro, I'm going to go to Geoprocessing, and now I don't know where to go. Let's just say that we don't know. We're going to work in Conversion Tools and deal with this [[JSON]] folder here. Let's just do a search just so we can see how that looks. So let's just say we're going to export to a JSON file. Alright, so now what we find are some of the options and let's see, let's scroll down here and there we go. Feature To JSON.
>
> **[1:36](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-a-web-map?u=76281980&t=96)** So here, I'll click on it. And now we can actually convert those mobile, geodatabase feature dataset layers into a GeoJSON. So here I'm going to go ahead and choose to grab these particular layers or I can open them up straight from the mobile geodatabase and not the Contents pane. So here, I'll go inside here into the mobile geodatabase, my GEO DataSet, and grab these. Here I'll choose OK. And now I'm going to choose to output to GeoJSON. And in this case, I have the option to project to WGS 84 or to leave it as state plane coordinate system for the state of Michigan. In this case, I choose to project to WGS 84 for this example, to make it easy for the Web Mercator Auxiliary Sphere to be created in [arcgis.com](https://arcgis.com). Okay, it's complete. Now let's take a look at our result. Back here in [arcgis.com](https://arcgis.com), I'll click on Your device and navigate to find that GeoJSON that I just exported, here, I'll click this. Okay, so here we are. I'm going to select the GeoJSON and choose Open. And now I have to follow the same kind of procedures as before when creating a web map and deal with some of these elements. So let me do that now and click Create and add to map. Awesome.
>
> **[3:07](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-a-web-map?u=76281980&t=187)** Now we can see the results of our visualization here in [arcgis.com](https://arcgis.com) outside of the environments of the software. So now we can adjust any of the parameters and edit the styles that we want. Here, I'm going to just do some minor adjustments and let's just check and see if we've got some options for different symbologies. All right, I like this one here, the little book icon. Let's do that and I'll click Done and Done. And now I'm going to [[Zoom]] in one level and let's adjust the base map here. Over here on the left, let's adjust it to Imagery with the Hybrid view. No, I don't really like that one. Let's try the Dark Gray Canvas. There we go. That looks pretty good. And now let's add some labels. Here, I'm going to add the feature class and we'll just add the name of the library here. Great. And now I think we're ready to go. I'm going to go ahead and save this work. Here on the far left, choose Save as and now I'll save it and Save. Alright, we have successfully now created a web map.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[ArcGIS Pro]] (2), [[Zoom]] (1)
> **Env Vars:** json (3), csv (2), wgs (2), kml (1), geo (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1), navigate to (1), select the (1)
> **URLs:** [arcgis.com](https://arcgis.com) (4)
> **CLI Commands:** find (2), make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: Make an online mapping application](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-make-an-online-mapping-application-22807278?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/challenge-make-an-online-mapping-application-22807278?u=76281980&t=0)** - [Instructor] And now let's complete our challenge by making an online mapping application. I want you to use your web map and select the basic mapping application template. And when you build your map application, I want you to share it with someone so that they can see your awesome cartography online. This should take you approximately 30 minutes.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Make an online mapping application](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application-22814205?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application-22814205?u=76281980&t=0)** - [Instructor] And now let me show you how I made my online mapping application. Back here in [arcgis.com](https://arcgis.com), I'm going to click here in the upper left and choose Content. And here, I'll create a new app. In this case, I'll choose Instant Apps. And now I need to scroll down to find the Basic template, and I'll choose it. And now I'll populate the details and create the app. Now I'll give it the geography from the work I previously did. Here, I'll select Map and choose the map or scene. There we go. Select this map, and now step through the wizard, and adjust any of the parameters that I want. And I like this in the Dark mode. And now I publish. Confirm. Awesome. Now that it's published, I'm going to launch it and take a look. Oh yeah, I'm very happy with this result. It looks great. So now you can select this URL and share it with a friend. And now you've stepped through an entire project procedure from start to finish. Congratulations, this is no small feat. It's one of the major goals that I have in each one of my classes, but especially
>
> **[1:33](https://www.linkedin.com/learning/real-world-gis-22715766/solution-make-an-online-mapping-application-22814205?u=76281980&t=93)** in my Introduction to GIS class at the university. Having students successfully complete a project is a major accomplishment, and so I celebrate with you. Congratulations.

> [!info]- Semantic Content
>
> **Env Vars:** url (1), gis (1)
> **CLI Commands:** find (1)
> **URLs:** [arcgis.com](https://arcgis.com) (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. How to Land a GIS job?

[↑ Back to Table of Contents](#table-of-contents)

#### [What are the different types of GIS jobs?](https://www.linkedin.com/learning/real-world-gis-22715766/what-are-the-different-types-of-gis-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/what-are-the-different-types-of-gis-jobs?u=76281980&t=0)** - [Instructor] So what are the kinds of GIS jobs out there? Well, we can typically organize GIS positions as either an analyst position, developer or database manager, and, of course, all of these areas will overlap with one another. When looking for GIS jobs, usually the advertisement specifies the expectations linked to one of these three, and although it's good to have experience in all three, getting depth in one will really help you gain greater potential toward job promotion. Most GIS graduate programs will prepare you well in all of these areas. Sometimes employers do not know exactly what they need and so it's important to be able to describe back to them in both their terms and your terms what you can offer them with your level of GIS expertise. You might not consider yourself an expert, but it is likely that you do have expert knowledge in GIS, especially if you've gone through this course. Now, let's take a look together at these positions and I want you to think about where you are in this model. The analyst position typically is one where GIS experts are using GIS to analyze landscape, demographics or maybe spatially located phenomena for business purposes. You can think of it as doing the science of GIS. For example, land suitability analysis is typically GIS analyst procedures for businesses to make decisions on where to put their next location. For example, if we had a fictitious business,
>
> **[1:34](https://www.linkedin.com/learning/real-world-gis-22715766/what-are-the-different-types-of-gis-jobs?u=76281980&t=94)** let's call it make a lot of pants, and they were collecting zip codes from their customers during a three week span at the checkout aisle, which allowed them to collect geospatial locations of all their customers, then they could use that knowledge and build a social and demographic analysis combining average household size with maybe census data to analyze where all of their customers were living and build an entire social and demographic profile of their whole customer base and then they would use that to place their next door. Of course, market analysis like this is much more sophisticated, but it does give you an example of what an analyst would do. As a GIS developer, the business expectations from the employer is not only that you will provide analysis, but that you'll also develop applications that allow users, internal and external to the company, to have the ability to visualize and analyze data on a map interface. If you're currently in school working on GIS or looking to change jobs into GIS, building applications is the easiest way to demonstrate your skills. You will also be called on to develop GIS Workflows that others can use, whether it's a GIS modeling workflow where you have to develop step-by-step procedures about GIS inputs to give a specific kind of GIS output or perhaps the development of a more sophisticated cardiographic product such as an Atlas series or a set of base maps
>
> **[3:08](https://www.linkedin.com/learning/real-world-gis-22715766/what-are-the-different-types-of-gis-jobs?u=76281980&t=188)** for your business, GIS Workflow development is likely to be an expectation. In this course, I've shown you how to build compelling web maps and then how to deploy web mapping applications. You've also learned how to access GIS data from a variety of places, pull it into your software and make it ready for mapping. As you develop your GIS skills more, you'll continue to develop new and richer GIS Workflows. Finally, the database manager position best describes your abilities to handle data and server details. Positions in this type of GIS job require deeper IT and CS development, and often they are considered positions in [[Data Stewardship]]. In my experience thus far, many of these positions are held by students with degrees in geography or and computer science, and sometimes those computer scientists have learned just some GIS. However, the more powerful scenario is someone who's able to do both deeply. Many [[Data Science]] majors take GIS with me and I also have computer science faculty teaching directly in my GIS program at the university. After all, [[Geographic Information Systems (GIS)|geographic information systems]] is a subset of information system technology so there is a great potential for exchange between computer scientists and geographers like myself. Focusing training usually in a geography department while at the university, is likely to allow you the greatest flexibility in employment but more it will give you the ability to expertly supervise the whole process of GIS development,
>
> **[4:45](https://www.linkedin.com/learning/real-world-gis-22715766/what-are-the-different-types-of-gis-jobs?u=76281980&t=285)** analysis and maintenance. Usually, my students are strongest in the areas having a solid understanding of programming and [[Python (Programming Language)|Python]] coding, and in our studio for [[Statistical Analysis]]. This training becomes even more important for those wanting to do development work using GIS servers. It is important to know that some job requirements exclude you because of lack of experience. However, most employers will recognize paid internships and years in graduate school as time of experience. Whatever your GIS interests, it's important that you're able to document your experiences on a resume and bring knowledge and enthusiasm to the interview. The best words of wisdom I can impart is to prepare, prepare and prepare some more before you interview.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Stewardship]] (1), [[Data Science]] (1), [[Geographic Information Systems (GIS)|Geographic information systems]] (1), [[Python (Programming Language)|Python]] (1), [[Statistical Analysis]] (1)
> **Env Vars:** gis (28)
> **CLI Commands:** make (3), python (1)
> **Analogies:** for example (2), think of it as (1), such as (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Where can you find GIS jobs?](https://www.linkedin.com/learning/real-world-gis-22715766/where-can-you-find-gis-jobs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/where-can-you-find-gis-jobs?u=76281980&t=0)** - [Instructor] Now, let's talk about jobs. Of course, you're thinking about searches locally for GIS jobs but don't discount the place that you might want to be too because I always encourage my students that they'll find a larger number of jobs if they're willing to be mobile or to work remotely. Now, if you're interested in local or regional public government GIS positions, these are only usually advertised on local government websites so you'd have to do a search with that approach. I encourage my students from the USA to take a look at jobs through this website, [usajobs.gov](https://usajobs.gov). Here, you can type in GIS and find all sorts of positions. In this case, we have 104 jobs all related to GIS and of course they are at the entry to senior position and you can find all kinds of different places where you might fit. Private jobs are usually advertised in GIS portals with a quick [[Google]] search in an engine for GIS job portals or GIS employment will usually lend you a whole host of pages related to finding jobs in GIS. Now, one of the best resources that I found that I can't recommend highly enough to my students is [[LinkedIn]]. I encourage all of my students to dedicate time to filling out their LinkedIn profile and start making connections. You know at least one person on LinkedIn and that's me
>
> **[1:35](https://www.linkedin.com/learning/real-world-gis-22715766/where-can-you-find-gis-jobs?u=76281980&t=95)** so you can get started connecting today. Fill out your profile and complete it and then you can use the Jobs portal right here. Click on Jobs and it is spectacular. You can find all kinds of jobs here. Let's just search for GIS and see what comes up. Great, 41,000 plus GIS jobs in the United States alone. So many of my students have landed the perfect job by using LinkedIn Jobs and although I have no plans to leave my current work as a professor of geography, I do see the jobs recommended by LinkedIn are actually really good and I can confirm that nearly every time I have jobs posted in my LinkedIn inbox, there are at least a couple that really do appeal to me. So it tells me that the job portal here in LinkedIn is connecting well to match my interests, skills and knowledge base with real jobs that would interest me that are out there. So use this resource because it's very powerful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (7), [[Google]] (1)
> **Env Vars:** gis (10), usa (1)
> **CLI Commands:** find (4)
> **URLs:** [usajobs.gov](https://usajobs.gov) (1)
> **UI Navigation:** click on (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [How can you master the GIS job interview? Part 1](https://www.linkedin.com/learning/real-world-gis-22715766/how-can-you-master-the-gis-job-interview-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-can-you-master-the-gis-job-interview-part-1?u=76281980&t=0)** - [Instructor] So it's interview time. Let's take a look at general interview questions. Good preparation for an interview can win you the job. I don't know how many of my former students, but it has been a lot, have said to me that once they got into the interview, they felt they were able to win it based on their preparation. Anticipating the question or questions is one of the main ways to [[Microsoft Excel|excel]] in the interview process. Preparation will give you more confidence, ability to answer hard questions, which will come, and help you articulate what you know in an effective and efficient manner. You should go into the interview dressed appropriately. One of the best ways to impress your potential employer is to convince them in the interview that you can do the job. This is done by demonstrating through proven work that you are the best qualified. Now let's take a look at some general questions. If it's possible to know who's doing the [[Interviewing]], you should find that out and then take a look at their profile on the website of the company. If you're giving a presentation, make sure that it's flawless. They've given you an interview, and you only get this one chance, so make the most of it. In addition, you should be able to articulate a challenging past experience you've had and how you overcame it. So think about what that might be for you. And be able to describe how you've worked independently and done so successfully, as well as worked in a group setting. Everyone is telling me that companies want proven people who can work in groups,
>
> **[1:33](https://www.linkedin.com/learning/real-world-gis-22715766/how-can-you-master-the-gis-job-interview-part-1?u=76281980&t=93)** so give some extra time to preparation of this question. Also, be able to articulate your strengths and weaknesses. It's likely they'll ask this question. Try to think about how your weaknesses might be turned into strengths. An example of that might be that you've had an experience in one specific area in GIS but want to expand your knowledge to other areas, and this job will do that. You've taken a weakness of your lack of experience and turned it into a strength by connecting it with the work of the company. That is a great way to approach your weaknesses and strengths. Know the goals of the company and how GIS fits into that mission or how it might fit into that mission. Spend the time to get to know the company and what it does. Look at its websites and social media presence. Be able to articulate also why you're interested in working at that company, and connect it to their mission in the interview process. And if you don't understand something, ask for clarification. I always tell my students to ask at least one question in the interview. This is a time for you to get to know them and them to get to know you, so ask questions. And smile. Friends, smile. It will settle you down and make you less nervous. Now, if you can articulate answers to these general questions, you will not only be prepared and confident; you'll be able to impress a potential employer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Interviewing]] (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** gis (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [How can you master the GIS job interview? Part 2](https://www.linkedin.com/learning/real-world-gis-22715766/how-can-you-master-the-gis-job-interview-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/how-can-you-master-the-gis-job-interview-part-2?u=76281980&t=0)** - [Narrator] Now let's take a look at the specifics for the GIS job interview. You should prepare and review what you know and be ready to summarize what you've done in GIS. They have your resume, so that is what they'll be working off of most likely unless they've asked you to submit other details like a portfolio or answers to questions. If you don't have a portfolio all ready to go, you should get one together. I have mine in both a digital and a paper form. Make it look organized and clear, however, and put it together beforehand. Try to be specific and point out in that process the projects that you've worked on. Now, you should try and write down questions that you would ask about GIS if you were the one hiring in their place and then try to answer them. Anticipate the interview questions as best you can. You should be ready to articulate your GIS skills in about a minute. I know this is hard, but do it. Practice it, because they will ask for them. Your resume will say what GIS software you are trained in, but you should be ready to let them know what you can use, including the extensions you know if you know them, like Business Analyst or Network Analyst, for example, in the Esri software. Also, you should be able to describe the projects and the training that you've had and be prepared to show them an online demonstration or a paper map or report of your work. Now don't force it in the interview,
>
> **[1:34](https://www.linkedin.com/learning/real-world-gis-22715766/how-can-you-master-the-gis-job-interview-part-2?u=76281980&t=94)** but be ready to show them what you've done if they ask. Proving the success of your work goes a long way. If the company is using a certain GIS data set, you should learn it. If they ask about something like OpenStreetMap or you know that they're using a specific kind of GPS unit, then you should learn about that if you don't know about it. Don't come into the interview without that knowledge. Check on their website to see these kinds of details. Do your homework to win this job. Also, you should be able to describe your programming skills but friends, do this honestly. They might challenge you on it. If you have no experience, then start getting some by watching courses on [linkedin.com](https://linkedin.com) for programming languages that the GIS industry uses, for example. In the Esri software, it's primarily using [[Python (Programming Language)|Python]] for scripting, but if you don't actually know Python, then don't say that you do. We teach Python and Python scripting and GIS at my university and there's a clear difference. Python is a full programming language while Python scripting and GIS is using Python code to run GID toolbox operations. If the company needs someone who can code in Python, then be specific about what you know. Honesty truly is the best policy and be ready to state what you think you can deliver in the form of GIS skills to the company. Be able to give them answers about your timeliness
>
> **[3:08](https://www.linkedin.com/learning/real-world-gis-22715766/how-can-you-master-the-gis-job-interview-part-2?u=76281980&t=188)** on completion of projects and general approaches to GIS work. I encourage my students to remember these three P's, you bring a positive attitude, you have patience teaching troubleshooting for others, and GIS has power to transform their business. Positive attitude, patience, and power, those are compelling to a business. And try to anticipate questions about how GIS will benefit the company even more. It's a good idea to think about how to describe the ways you continue to learn about GIS and how you interact with the GIS community to learn more. Seriously, this gives potential employers confidence about your continuing education in GIS and how it'll benefit the company. You know that GIS software is always changing, so you should be able to say in the interview how you handle learning something that's always changing. Lastly, you need to tell them how these projects that you've completed have been done independently or successfully in group environments. Showcase that you can work alone and in groups with colleagues. Now if you can answer these specifics, you will convince your employer of your worth. The other candidates won't stand a chance because of your preparation and execution. Now go get that job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[LinkedIn]] (1)
> **Env Vars:** gis (17), gps (1), gid (1)
> **CLI Commands:** python (8), make (1)
> **Analogies:** for example (2)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What are your next steps in GIS?](https://www.linkedin.com/learning/real-world-gis-22715766/what-are-your-next-steps-in-gis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/real-world-gis-22715766/what-are-your-next-steps-in-gis?u=76281980&t=0)** - Together, we've explored GIS data, map projections, and online web mapping, and you've learned how to do this through ArcGIS and [[ArcGIS Pro]], and you've even completed a project from start to finish. Great work. As you continue your next steps in GIS, continue seeking new opportunities here at [[LinkedIn]] Learning and beyond, and thank you for joining me for Real World GIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ArcGIS Pro]] (1), [[LinkedIn]] (1)
> **Env Vars:** gis (3)
> **Speakers:** - together (1)


## Resources

- Exercise files available

## Skills Covered

- Geographic Information Systems (GIS)

## Path Context

### In [[Advance Your Skills in GIS]]
**1 of 9** | [[ArcGIS Pro Essential Training]] →

## Appears In

- [[Advance Your Skills in GIS]]

## Related Courses

_Courses sharing skills:_

- [[Foundations of Geographic Information Systems (GIS)]] — Geographic Information Systems (GIS)
- [[Creating Maps with R]] — Geographic Information Systems (GIS)

---

[↑ Back to top](#)