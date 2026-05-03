---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: creating-maps-with-r
url: "https://www.linkedin.com/learning/creating-maps-with-r"
duration_minutes: 151
duration: 2h 31m
level: Intermediate
updated: 9/23/2022
learners: 19120
skills:
  - Geographic Information Systems (GIS)
  - R (Programming Language)
  - Data Mapping
exercise_files: true
github: "https://github.com/LinkedInLearning/creating-maps-with-R-2825608"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGrpSQgWVw0eA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663712355561?e=2147483647&amp;v=beta&amp;t=6K3AomiKQEy1LJeCX_AXI84Xr2_ImE-gXazPs8PKfGY"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in R]]'
  - '[[Advance Your Skills in GIS]]'
prev_courses:
  - '[[R Tidyverse Applications]]'
  - '[[Learning MapGuide Open Source]]'
next_courses:
  - '[[Build Advanced Charts in R]]'
  - null
path_nav: '[{"path":"Advance Your Skills in R","position":7,"total":8,"prev":"R Tidyverse Applications","next":"Build Advanced Charts in R"},{"path":"Advance Your Skills in GIS","position":9,"total":9,"prev":"Learning MapGuide Open Source","next":null}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/geographic-information-systems-gis
  - skill/r-programming-language
  - skill/data-mapping
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Creating%20Maps%20with%20R.md)

![Creating Maps with R](https://media.licdn.com/dms/image/v2/C560DAQGrpSQgWVw0eA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663712355561?e=2147483647&amp;v=beta&amp;t=6K3AomiKQEy1LJeCX_AXI84Xr2_ImE-gXazPs8PKfGY)

# Creating Maps with R

> If you need to learn more about creating maps with R, this beginner-friendly course introduces an end-to-end mapping workflow and shows you how to import your data directly from Excel to create both static and interactive maps. Instructor Charlie Joey Hadley explains mapping fundamentals, like geo markers, scatter plots, hexbin maps, cartograms, and more. Charlie walks you through processing GIS d

> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r) | 2h 31m | Intermediate | 19K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Why create maps with R?](#why-create-maps-with-r)
  - [Base knowledge](#base-knowledge)
  - [GitHub repository and exercise files](#github-repository-and-exercise-files)
- [**1. Mapping Fundamentals**](#1-mapping-fundamentals) (7 videos)
  - [How to choose a map](#how-to-choose-a-map)
  - [Geo marker and scatter plots](#geo-marker-and-scatter-plots)
  - [Geo bubble charts](#geo-bubble-charts)
  - [Choropleth: Shaded area maps](#choropleth-shaded-area-maps)
  - [Hexbin maps or hexagonally binned choropleth](#hexbin-maps-or-hexagonally-binned-choropleth)
  - [Dot density](#dot-density)
  - [Cartograms: Distorted area maps](#cartograms-distorted-area-maps)
- [**2. Processing GIS Data from Excel**](#2-processing-gis-data-from-excel) (5 videos)
  - [Standardize country names with {countrycode}](#standardize-country-names-with-countrycode)
  - [Join shapefiles with data in Excel files](#join-shapefiles-with-data-in-excel-files)
  - [Convert addresses to coordinates with geocoding](#convert-addresses-to-coordinates-with-geocoding)
  - [Challenge: Geolocate all US state capitol buildings](#challenge-geolocate-all-us-state-capitol-buildings)
  - [Solution: Geolocate all US state capitol buildings](#solution-geolocate-all-us-state-capitol-buildings)
- [**3. Working with GIS Data Formats**](#3-working-with-gis-data-formats) (5 videos)
  - [GIS data formats: Raster or vector](#gis-data-formats-raster-or-vector)
  - [Vector GIS data: sf and sp](#vector-gis-data-sf-and-sp)
  - [Work with sf datasets and the tidyverse](#work-with-sf-datasets-and-the-tidyverse)
  - [Challenge: Visualizing continent populations](#challenge-visualizing-continent-populations)
  - [Solution: Visualizing continent populations](#solution-visualizing-continent-populations)
- [**4. Static Maps with ggplot2**](#4-static-maps-with-ggplot2) (10 videos)
  - [Use geom_sf to visualize geo locations](#use-geom_sf-to-visualize-geo-locations)
  - [ggplot2 choropleth and continuous data](#ggplot2-choropleth-and-continuous-data)
  - [ggplot2 choropleth and discrete data](#ggplot2-choropleth-and-discrete-data)
  - [Label maps with ggrepel package](#label-maps-with-ggrepel-package)
  - [Zoom into regions with coords_sf()](#zoom-into-regions-with-coords_sf)
  - [Transform CRS with coord_sf()](#transform-crs-with-coord_sf)
  - [Challenge: Label a geobubble chart of Germany's biggest cities](#challenge-label-a-geobubble-chart-of-germanys-biggest-cities)
  - [Solution: Label a geobubble chart of Germany's biggest cities](#solution-label-a-geobubble-chart-of-germanys-biggest-cities)
  - [Challenge: Visualize state coastline length with choropleth](#challenge-visualize-state-coastline-length-with-choropleth)
  - [Solution: Visualize state coastline length with choropleth](#solution-visualize-state-coastline-length-with-choropleth)
- [**5. Interactive Maps with Leaflet**](#5-interactive-maps-with-leaflet) (10 videos)
  - [The basics of using Leaflet](#the-basics-of-using-leaflet)
  - [Use Leaflet to visualize geo locations](#use-leaflet-to-visualize-geo-locations)
  - [Add labels and pop-ups to Leaflet maps](#add-labels-and-pop-ups-to-leaflet-maps)
  - [Leaflet choropleth and continuous data](#leaflet-choropleth-and-continuous-data)
  - [Leaflet choropleth and discontinuous data](#leaflet-choropleth-and-discontinuous-data)
  - [Set a background color with leaflet.extras](#set-a-background-color-with-leafletextras)
  - [Challenge: Add pop-up labels to a map of German cities](#challenge-add-pop-up-labels-to-a-map-of-german-cities)
  - [Solution: Add pop-up labels to a map of German cities](#solution-add-pop-up-labels-to-a-map-of-german-cities)
  - [Challenge: Interactive choropleth of state coastline length](#challenge-interactive-choropleth-of-state-coastline-length)
  - [Solution: Interactive choropleth of state coastline length](#solution-interactive-choropleth-of-state-coastline-length)
- [**6. CRS, Projections, and Map Tiles**](#6-crs-projections-and-map-tiles) (4 videos)
  - [Base maps and tiles](#base-maps-and-tiles)
  - [What are projections and CRS?](#what-are-projections-and-crs)
  - [Geographics vs. projected CRS](#geographics-vs-projected-crs)
  - [How to choose CRS and use them with {sf}](#how-to-choose-crs-and-use-them-with-sf)
- [**Conclusion**](#conclusion) (1 videos)
  - [What else can you learn about creating maps in R?](#what-else-can-you-learn-about-creating-maps-in-r)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why create maps with R?](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980&t=0)** - [Charlie] Hello, I'm Charlie and I work as a data visualization specialist, and I have to make lots of maps, lots of different kinds of maps and of different places around the world. I use R for every single step of my mapping workflow and for every single map that I make. This includes [[Data Cleaning]] and wrangling by combining together the sf package with the powerful Tidyverse ecosystem, all of which are cover in this course. I will also show you how to make easy-to-read static maps for ggplot2 and engaging interactive maps with the leaflet package. R is absolutely a fully-featured tool for doing GIS and working with geospatial data. And this course will make you feel confident in using R to make maps. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Cleaning]] (1)
> **CLI Commands:** make (5)
> **Env Vars:** gis (1)
> **Speakers:** - [charlie] (1)

#### [Base knowledge](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=0)** - [Instructor] This course is focused on making maps with R. We therefore assume a basic level of comfort with the R language and how to run R code in [[RStudio]]. This includes confidence in understanding what an assignment is and how to use functions. You should be able to understand what this code does and what output to expect. In addition to the basics of R, we assume you have a basic familiarity with the Tidyverse. Specifically, we'll use the read_csv and read_excel functions for reading data into Rstudio. We'll also be using the dplyr package for wrangling data. You should be comfortable with functions like filter, groupd-by, and mutate. If you're not familiar with these functions, you can still use this course to understand the process of making maps with R, but I recommend you can sort for dedicated Tidyverse course in the library if you've never used the Tidyverse before. There's one last thing. We implicitly assume you're comfortable with the pipe operator, this percentage, right angle bracket, percentage thing. If you're not, then please do refer to the pipe introduction in our course catalog. Now that we've covered what you need to get going, it's time to dive right into the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (2)
> **Code Identifiers:** read_csv (1), read_excel (1)
> **Speakers:** - [instructor] (1)

#### [GitHub repository and exercise files](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=0)** - [Instructor] All of the exercise files for this course are available through this [[GitHub]] repository. You do not need a GitHub account or any knowledge of how [[Git]] works to use these materials. Say you're watching video 02_02 and want to access the download files. You would go to this repository and click on the dropdown menu labeled Main. You would then click here and type the video number, 02_02. The branch ending with b is the beginning state of the exercise. This is the one that you want if you want to follow along with me in the video. The 02_02e branch contains the end state of the exercise. It contains all of the code that I wrote during the video. Some sections of the course do not have an end state, as there's no code written during the video, for instance, 01_02. Let's select the 02_02b branch. That loads the branch, and we then have to go to the green Code button, and click on Download ZIP. This will download this entire branch with repository to your downloads folder. You then want to unzip the ZIP. And navigate inside to the folder with the same name as the video that you're watching, 02_02b. And inside of there you will find a file with the extension .Rproj and the same name as the video. You will need to double-click on this file, and this will open the project in [[RStudio]].
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=96)** You can then click on the script in the Files tab and follow along with me in the video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Git]] (1), [[RStudio]] (1)
> **UI Navigation:** click on (3), go to (2), dropdown (1), select the (1), double-click (1)
> **CLI Commands:** git (1), unzip (1), find (1)
> **Env Vars:** zip (2)
> **Tools:** github (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 1. Mapping Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [How to choose a map](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=0)** - [Instructor] Visualizing geospatial data is a more complex process than visualizing what we might call normal or non geographic data. Before we can choose which kind of map we want to make, we need to ask ourselves three questions. Where is the data? How does the data vary? And where is the data geographically? The first and third questions might sound the same but they really get to the heart of the complexity of making maps. Your data might be provided in a form of street addresses. Those might be nicely formatted addresses like this one in London, or they might be less precise addresses. Street addresses are very messy human data sets because they vary wildly, dependent on your data source. and the region that an address belongs to. You'll need to use a geocoding service to convert these addresses into coordinates. There are lots of different services available. [[Google]] Maps is one of the eldest and most recognizable online mapping services. And it also provides a freemium geocoding service. There are also tools like LocationIQ that are specifically designed for geocoding purposes and provide limited, always free access. It's important to acknowledge, it's not always possible to geocode street addresses. This might be because a region isn't included in a geocoding service, or your address is in a format it doesn't recognize. Instead of precise street addresses, your data might be in a form of named regions.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=93)** This might include countries or smaller regions within countries. If this is the case, you'll need to obtain data sets that include borders for these regions. Usually, you'll find these data sets as shapefiles. But a thing about shapefiles is, they come in varying levels of detail. These are two different maps that compare the accuracy of two different shapefiles obtained for Antarctica. Your data might be about the journeys between locations, for instance, flights or other logistical routes. To work with this kind of data, we need to compute something called a great circle. We also need to decide the coarseness of these journeys. These two maps compare international flights with differing levels of coarseness, which affects the smoothness of the lines in the data visualization. Once we've been able to turn our data into geospatial data, we then need to ask, how does the data vary? What can we use in our map to communicate variables to our audience? Let's look at categorical variables in maps first. When we're visualizing point data with maps, we have two different ways to encode categorical variables, using color, which is the most common and versatile choice. Or we could vary the shape of points. When it comes to visualizing regions, the only choice that we have is to encode categorical variables with a fill color. This is known as a choropleth map.
>
> **[3:07](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=187)** Now let's take a look at continuous variable maps. When it comes to point data, we have some flexibility. Both size and fill color can be used for encoding continuous variables. But when it comes to regions, our only choice for encoding continuous variables is to vary the fill color of each region. But it is important to acknowledge, I'm very much talking about traditional mapping data visualizations in this video and in this course. There's some really interesting custom database that you can build which hybridized maps and normal charts. This is a wonderful example, visualizing seasonality in bee colony behavior in the US. But it's important to understand that building these non-traditional charts requires more effort from you as the chart designer. And it requires more effort from your readers. We've taken a look at these first two questions, where are data and how do they vary? Now let's talk about where data are geographically. If I presented you with just this map, would you know where on earth we are looking? Is there sufficient context in the map for you to know what you're looking at? For most data visualizations, we can add a good title and that's enough to tell our readers what they're looking at. But that's not always the case for maps. Montenegro is a beautiful country, but it doesn't appear on the international stage that often. It's quite likely that there are folks watching this video
>
> **[4:40](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=280)** that won't know where Montenegro appears on earth. Often, all that's necessary to give your map context is to show bordering regions, particularly for those regions with a coastline. But gold standard for maps is to give continent wide context. A reader seeing this map will understand the database shows the largest cities in Montenegro, and that this is a country on a Mediterranean coastline, near to the very distinctive coastline of Italy. Alternatively, if you have the freedom to create interactive maps, you can give your readers the ability to explore and understand that chart. These are the pivotal questions you need to ask when starting to build a map or you are thinking about how to visualize geospatial data. Once you've answered these questions, the fun bit starts, choosing which kind of map you want to use to tell your stories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Definitions:** is a  (4), known as (1)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** you'll need (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Geo marker and scatter plots](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=0)** - [Narrator] This is a geo scatter plot. It's almost identical scored to a geo marker plot. Let's discuss the differences. Geo scatter plot show our locations or events appear on a map. So these maps could be used to show their locations of cities or the epicenters of earthquakes. In order to create a geo scatter plot, you need to obtain precise coordinates for all points to be shown on a map. Wikipedia is a surprisingly reliable source of coordinates for a wide variety of locations and events. You can look for the coordinates on a page in the top right hand corner. Otherwise, you might be able to use the geocoding service to convert your addresses into geographic coordinates. LocationIQ is usually my go-to choice for doing this. Unfortunately, it's not always possible to find exact coordinates for all locations you are interested in. In these cases, you cannot plot these data using a geo scatter plot. The next best data visualization choice would be a choropleth where you tally the number of points known to exist within this specific region. A geo marker plot is a special case of a geo scatter plot. In this type of map it is only possible to show the locations of points. It's not possible to compare locations with this map because all points are represented by the same tear drop shaped markers. These maps were invented by online mapping services like [[Google]] maps, and so we tend to only see them where we can make interactive maps. Here's an example of a geo market plot showing
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=92)** the five largest cities in Germany. And when I click on one of these pointers it gives me additional information about the city but for more generic geo scatter plot it does allow us to show variation. These plots are best suited for comparing locations with a categorical variable, for instance comparing which cities are capital cities and which aren't. I recommend that if you want to compare locations or events via a continuous variable that you use geo bubble charts instead. The ggrepel package makes it easy to add labels to static geo scatter plots, but avoid one in event to improve readability. Interactive geo scatter plots have a kind of superpower compared to static versions of these maps. If you have many locations you need to visualize you can have these automatically cluster. So I'm visualizing here. Many of the cities in the United States America. And if I hover that over this cluster it shows me that there are 269 cities within this region. And as I iteratively [[Zoom]] in, we can see VSD cluster and then I can see individual city locations. Now I'll be honest that geo scatter and geo marker plots aren't a particularly exciting to build but the very easy to understand because most people will be familiar with using a service like Google maps to find a closest cafe or directions to a business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Zoom]] (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Env Vars:** vsd (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Geo bubble charts](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=0)** - [Instructor] This is a geo bubble chart. Geo bubble charts are very similar to geo scatter plots in that they show where locations or events appear on a map. But they differ in that the size of the points is used to encode a continuous variable. Just as with geo scatter plots, you will need precise coordinates for all the locations that you wish to visualize. Wikipedia is often a good source for locations for both events and locations. Look in the top right-hand corner of the page for coordinates. Once again, if you can't find coordinates for some points, they will need to be left out at the chart. The next best data visualization choice would be a choropleth, where you can tally the number of points known to exist within a specific region. Now, let's talk about how we vary the size of the bubbles in our charts. Theoretically, we could choose to vary the bubbles by either radius or area, but the correct choice is always to vary your geo bubble charts by size. When we vary bubbles by the radius, it exaggerates the difference between the largest and smallest bubbles. Take a look at how the dot representing Berlin appears smaller than half the size of Salvador, and is absolutely tiny compared to Sao Paulo. Whereas when we scaled the bubbles by area, it's much easier for the human visual perception system to compare the relative population sizes of these cities. It is possible to add a little bit more information
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=95)** to geo bubble charts without overwhelming your reader. You can use fill color to encode additional categorical variables into your chart. For instance, to differentiate between capital and non-capital cities. It's also possible to use the ggrepel package to add labels to bubble charts. It's often best to add as few labels as possible to your maps. You might want to consider labeling just the smallest and largest bubbles to add context for your reader.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1), for instance (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Choropleth: Shaded area maps](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=0)** - [Presentator] This is a choropleth. Choropleth should be used to visualize how geographic regions compare to one another. You can use choropleth to compare either categorical or continuous variables. Before you can begin to create a choropleth you need to obtain shapefiles for your regions of interest. Most countries have dedicated census bureaus or [[Statistics]] offices that can be used to obtain shapefiles for both the country itself and its subdivisions. For example, states, departments, or counties. Wikipedia and the UN provide substantial pages you should be able to use to find this kind of data. In some instances, you may be able to find R packages designed specifically for obtaining data from national census bureaus. I'm personally aware of solutions for Australia, the US and UK, but there will be others too. Here are some of the common issues you'll find when trying to obtain shapefiles. Shapefiles have different resolutions. When working with low resolution shapefiles your borders will look jagged and might not be fit for purpose. But, the higher resolution your shapefiles, the slower your maps will render. You'll want to find a balance between good enough and small enough data files. You'll also come across shapefiles that appear to have entire subregions missing. This is very common with maps of the UK because subregions are inconsistently called counties or unified authorities. If you are working with country data
>
> **[1:34](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=94)** you are unfamiliar with, it will take longer to find appropriate shapefiles. It's also common to discover that shapefiles are not available for all years or the most recent files may not yet be available from a census bureau. Unfortunately, it's sometimes the case that shapefiles you need are simply not available. In these circumstances, you can try to contact census bureaus or other experts directly. However, if you can't find appropriate shapefiles you can't begin to create your choropleth. If you are designing choropleth for categorical variables it's advisable to use a well designed color palette. Like those you can find on [colorbrewer2.org](https://colorbrewer2.org). If you do choose to use a custom color palette ensure to test how it will be seen by folks with colorblindness via a the colorblind R package. When it comes to designing continuous choropleth, I would almost always recommend the viridis color palette. It's both, perceptually uniform and can be read by readers with all [[Forms]] of colorblindness.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Forms]] (1)
> **CLI Commands:** find (7)
> **URLs:** [colorbrewer2.org](https://colorbrewer2.org) (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presentator] (1)

#### [Hexbin maps or hexagonally binned choropleth](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=1)** - This is a hexbin map. More technically we could call them hexagonally binned choropleth. Hexbin maps are used to visualize the distribution of events or locations. For instance, the locations of hireable bikes in a city, or where traffic accidents have occurred. There are three things you need to create a hexbin map. A set of exact coordinates for your events or locations. And ideally, you need a large number of these for your maps to make sense. Secondly, you need shape files for the region that your coordinates belong to. That could be as small as the city's limits, or an entire country. And finally, you'll need an algorithm for bidding your region into hexagons. Before we proceed, it's important to look at why we sometimes need hexbin maps. And specifically, we should ask, why not use scatter geo plots, if we have exact locations for our events? Geo scatter plots only really work for a small number of data points. If we were to plot all of the non-fatal traffic accidents in New York during 2020, as points, we would get this kind of map. Which only really tells us, there's a massive variance in the density of points across the city. It's difficult to really compare neighborhoods to neighborhoods. So, a geo scatter plot is not going to help us. Your next choice of chart might be a normal choropleth. But for this kind of data, it's not the right choice. Human geography is messy and very irregular.
>
> **[1:37](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=97)** Take a look at the zip codes of New York. The relative areas vary by five orders of magnitude. The size of the Richmond zip code completely dominates not only Staten Island, but almost every other zip code in New York City. It's not always so dramatic a difference. If we take a look at the boroughs of London, there's a smaller range in size, but now there's another feature to take account of. The size of the bow clearly scales with the distance from the center of the city. So, when we calculate how many traffic accidents or hireable bikes appear across cities, the larger areas end up soaking more points. Whereas in areas with lots of small sub regions, like in Manhattan, affect sizes appear much smaller. Now, when we directly compare the normal choropleth to a hexbin map, it is clear that the normal choropleth is hiding some very important information. There really are a lot of accidents that take place in Manhattan. Accidents are actually fairly uniformly distributed across Staten Island. In fact, per square kilometer, Richmond might be safer than other zip codes in New York city. So, why do we use hexbins to bin our areas? It comes down to mathematics. Some shapes are simply awful for tiling. Circular binned choropleth are a complete non-starter. Hexagons are simply the best choice
>
> **[3:12](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=192)** for creating good tilings of any kind of shape. If you are interested in understanding the mathematics behind this, I have provided a link to an informative blog post that's written for a general audience.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - this (1)

#### [Dot density](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=0)** - This is a dot density map. I really enjoy making dot density maps because they allow us to do two things at once. Visualize both the distribution and density of populations or events across a region. Before you can make a dot density map you need three things; shapefiles for the regions you are interested in visualizing. Counts of the number of events or individuals in each of those regions. And finally, you'll need an algorithm for randomly placing points in each of these regions. So what's the benefit of creating a dot density map over normal Choropleth? This is a faceted choropleth showing the age distribution of individuals living in Texas. It's a really great looking map, but it doesn't tell us anything about how populated these counties are relative to one another. With Choropleth, we can only see population proportions. This is the benefit of dot density maps. We can instantly visualize where the major cities are. There's a band of highly populated counties running diagonally through central Texas. It's also easier to compare to relative populations of each of the counties. Some counties like Bexar on the south the map have a very young population when compared to the more middle aged county of Brazos in the Northeast. But there is a danger in using dot density maps. They're more rarely seen than other type of maps and therefore they can be easy to misunderstand by some readers.
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=95)** For instance, dots absolutely do not represent actual locations. I've zoomed in, in this map on Kerr county to show how the dot density algorithm has placed points. And it's clear that people's homes don't match up with where buildings are shown on this map. It's also important to understand that dot density maps can be resource-intensive to make. When I made the dot density maps of an individual state it still took several minutes to generate the map. Even though I was taking advantage of parallel computing. Dot density maps like this one showing the population density of racial groups from the 2020 census across the entire United States are very beautiful. But it took a lot of computing time and data visualization expertise to build a map that was easy to read and understand.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - this (1)

#### [Cartograms: Distorted area maps](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=0)** - [Instructor] This is a cartogram. Cartograms are really interesting and attention-grabbing maps. In these charts, the areas of regions are distorted to communicate a continuous variable. We need just two things to make cartograms, shape files for the regions, and an algorithm for distorting region size. I've actually shown you rare version of a cartogram. I've created a hybrid between a cartogram and a choropleth where fill color encodes the same information as the area distortion. But usually, cartograms will be shown without legend or fill color. There's also an alternative cartogram algorithm where regions are proportionally shrunk instead of grown. So why would we go and use a fancy algorithm to create a cartogram instead of using a normal choropleth? Cartograms do a good job of highlighting small regions with comparatively large values, which could be difficult to spot in choropleth. But the most important property of a cartogram is that they're very dramatic. However, it's very difficult to quantitatively compare regions in the cartograms. For instance, it would be hard to figure out which country is most or least distorted in this map. For this reason, I recommend using cartograms to grab your reader's attention but to use more quantitative maps to tell specific stories.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 2. Processing GIS Data from Excel

[↑ Back to Table of Contents](#table-of-contents)

#### [Standardize country names with {countrycode}](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=0)** - [Instructor] Country names are very messy and complicated for perfect examples of human datasets. The names that we use depend on who we are, who we're speaking to, and what we are doing with the country names. Let's look at five example countries. The USA is a very easy example to look at. It's often abbreviated to USA or US. But there are multiple ways we could expand that acronym to simply United States or United States of America. Next, we come to official versus common use names. Often, we think we know the name of a country, for instance France, but officially, it's the French Republic. And that's not the end of things, even for official names. These have abbreviations, too. For instance, Germany might be recorded as Fed. Rep. Germany instead of the official name Federal Republic of Germany. The simplest way around these complications is to use internationally recognized codes for country names. But there are at least eight widely used international country coding systems in use today. Thankfully, an R package called countrycode provides a programmatic approach to disambiguate country names and converting backwards and forwards to country codes.

> [!info]- Semantic Content
>
> **Env Vars:** usa (2)
> **Analogies:** for instance (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Join shapefiles with data in Excel files](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=0)** - [Speaker] When building maps and working with geospatial data, it's extremely common to find yourself needing to combine together shape files and data living inside of [[Microsoft Excel|Excel]] files. Joining these data sets is achieved with the joint functions from the tidy R package. If you're completely new to the idea of joining data sets, then I recommend the tidyexplain package that provides GIFs that explain how each of the joins work. We're also going to make use of the countrycode package to facilitate joining our two data sets together. I'd like you to open the standardizing country names to R script in the O2_O2b project. And let's start running the code. Lines 1 through 5, we're going to load our packages. Line nine, we're going to read in our shape files. And line 11, we will read in our Excel file. We now want to join these two datasets together so that we get an SF object. To do so, we must start with our SF object. So, I will take world_sf and pipe it into a left join and provide country population. Now, when we run this code, we get an error. We're told that X and Y have no common variables. Let's print the two objects to the console so we can understand what's happening. In the world_sf dataset, the name of each country is stored in the name column, whereas in a country population dataset,
>
> **[1:34](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=94)** the name of the country is stored in the country_name column. We need to tell left join how to match these columns together. We do so with the by argument. So, by is equal to and we provide a vector of matching column names. So we will do name is match together with country_name. And when we run that code, it successfully joins our two data sets together. And you can see, we have an SF object. Let us store that as world_gdp so we can visualize the code by running the code I provided you on lines 40 through 30. Now, there are many missing values in our map, and this is because of mismatching country names between the two data sets. This is the Excel file from the R studio project that we are using. And I've highlighted in red, those country names which do not match the shape files. To demonstrate how to use the country code package, let's copy Commonwealth of Australia to the clipboard. And we're going to use the country code function. In the first argument, we specify our source variable. So, what we're working with originally, which is Commonwealth of Australia, the second argument is where we specify the origin format, in this case it's country name. And then we need to specify the destination format,
>
> **[3:12](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=192)** which is the three letter code for the country. So, we use iso3c and if we run that code, we can see that Commonwealth of Australia gets converted into AUS. Now let's add this three letter code to the country population dataset. To do so, I'll add a few new lines. We'll take country population, pipe it into mutate. We'll create a column called iso_a3. Country code, country name column, specify again that that is the country name format. And we want to output that as iso3c. And if we run that code, we can see we get a new column called iso_a3 with a three letter code for each country. Let's update the definition for country population. And now when it comes to our join, we no longer want to join by the name columns. We want to join by iso_a3. Now that column is stored in both data sets, but to be explicit, I'm going to type it into here. So iso_a3 and iso_a3. We'll rerun that code and we also need to rerun all of our data visualization code. And now there are many fewer NA values in our map.
>
> **[4:50](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=290)** There are still some countries in our map with NA values. This is because there are some countries in the shape files data set, which were simply not included in the Excel file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4)
> **Code Identifiers:** world_sf (2), country_name (2), world_gdp (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** aus (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [speaker] (1)

#### [Convert addresses to coordinates with geocoding](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=0)** - [Instructor] Geocoding is the process of converting human language street addresses into coordinates we can use to create maps. In the 02_03_b branch of the project repo, there's an [[Microsoft Excel|Excel]] file that contains addresses of businesses and places that I've worked across the world. We'll be converting all of these into coordinates with R. Notice how it has varying levels of detail for the different locations. Most of the locations I've given are specific places, like row five, Oxford University's IT department. But I've also given very non-specific addresses, like on line six, where I'm simply specifying Birmingham City, in Birmingham, in the UK. We'll see that geocoding can work for addresses with these differing levels of precision. There are several different R packages that provide geocoding services. I would strongly recommend that you go with the tidygeocoder package, as it's designed to work easily with the tidyverse. It also provides access to several different geocoding services, including my favorite free-to-use service, LocationIQ. LocationIQ is a freemium service that provides a free tier, which doesn't require you to give them your billing details. This is really awesome because you know that you won't accidentally get billed for going over an API limit, which can easily happen with alternative geocoding services. So let's start by signing up to the service. We need to provide our email address,
>
> **[1:34](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=94)** a name, and what we're going to be doing with the service. So let's say Data Enrichment or Analytics. We, of course, need to prove that we're not robots. And once we've done that, we click on Sign Up. As usual with these services, you've been sent a confirmation link, and you need to click a link in that email. I'm going to do that off-camera. There's one more marketing question that you are asked when you click that link, and that's what you're going to be using the service for, so we're going to be doing Forward Geocoding, which is going from addresses to coordinates. Reverse Geocoding is going from coordinates to addresses. And I'm not going to give a country name, because this is for tutorial, so we'll click Get Started. And, that signup complete, it then takes you to the Manage Your API Access [[Tokens]] page, which is where we obtain our API token. So I need you to click on Show Token, and copy this to your clipboard. Now let's go over to R Studio. I'd like you to open the geocoding.R script in the 02_03_b project, and let's load the packages on lines one through six. Before dealing with the data set itself, let's look at how to geocode a single address with the tidygeocoder package. To do so, we used the function geo, and I'm going to give the address 58 West Street,
>
> **[3:10](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=190)** abbreviated as much as possible to "w St," and apartment 33A, New York. And if we run that code, the tidygeocoder is going to use the default geocoding service Nominatim, and attempt to geocode it. And we can see it hasn't geocoded successfully, because our lat and long columns contain NA values. In order to set up tidygeocoder to use the LocationIQ API details that we've just signed up for, we need to provide a package with our API key. The package looks inside the .Renviron file for API keys. The easiest way to manipulate our environment files is with the usethis package. So in our console, let's type usethis, colon, colon, edit_r, environ. And if we run that code, it's going to open the .Renviron file. Now the tidygeocoder package is looking for specifically named key, specifically LOCATIONIQ_API_KEY. Then we type an equals and open quotation, and we paste in our API key from before. It's crucial that, when editing the .Renviron file, we add an empty line at the end of the file. The file will not work without an empty line. So let's go back over to R Studio, and add an empty line
>
> **[4:46](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=286)** at the end of the file, and save it. Also note that the usethis package is really helpful, and it tells us that we must restart R for changes to take effect. So we'll go to Session, Restart R. And that means we have a completely new session, and we need to reload our packages. So I'll close out .Renviron file, I'll run lines one through six. And now I want to re-use the geo function, but I want to specify the LocationIQ geocoder instead of Nominatim. So we use the argument, method = "iq". And we can see that LocationIQ is able to successfully geocode this very abbreviated address. Okay, so now we've seen it work for one address. Let's use the package to geocode all the addresses in our Excel file. We'll read in our Excel file on lines 11 through 13, and then let's take international_addresses. And let's pipe that into the function geocode. We then need to provide the different components of our address, so street is going to be populated by the street_address column, city by the city column, postalcode is going to be populated by the post_code column, and country is going to be populated by the country column.
>
> **[6:26](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=386)** And we will also use, method = "iq." Now let's store this as an object, so that we are not wasting our API calls. So let's call this, addresses_geocoded. And now let's run that code. And it takes a little bit of time for all the addresses to be sent over to LocationIQ. Let's print the object to the console. And it certainly looks like all of those columns, at least the ones that we can see, have got latitude coordinates, so they've been successfully geocoded. However, while we've geocoded the data, we don't have an SF object. So let's take addresses_geocoded, pipe it into st_as_sf, specify the coords as "long" and "lat." We'll specify, crs = 4326. We'll verify this code works by running it. So now we have an SF object, and let's pipe this into the mapview function, so that we can visualize our geocoded addresses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Tokens]] (1)
> **Env Vars:** api (8), locationiq_api_key (1)
> **Code Identifiers:** addresses_geocoded (2), international_addresses (1), street_address (1), post_code (1), st_as_sf (1)
> **UI Navigation:** click on (2), open the (2), go to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Geolocate all US state capitol buildings](https://www.linkedin.com/learning/creating-maps-with-r/challenge-geolocate-all-us-state-capitol-buildings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-geolocate-all-us-state-capitol-buildings?u=76281980&t=0)** - [Instructor] For this challenge, I would like you to geocode the addresses for all 50 state capitals of the USA. You will need to complete all stages of the [[Data Wrangling]] task from beginning to end. This means you'll need to import the data from the [[Microsoft Excel|Excel]] file, geocode the addresses, convert your tibble into an SF object, and finally, visualize the state capitals with the mapview function from the mapview package. Please remember to use the 02_04b, our studio project that I've provided for this challenge. This will allow you to use relative file paths. I've also provided a script file with all of the necessary packages to complete this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Wrangling]] (1), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** usa (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Geolocate all US state capitol buildings](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=0)** - Okay, let's get started on this challenge of geocoding the state capitols of the USA. So I'm going to load all of the packages and we need to read in our data file. So I'll create a variable name, capital buildings, and we'll use the function read underscore [[Microsoft Excel|excel]]. We'll open a quotation mark and I'll press the tab key so I can see the file tree and our select our xlsx file and let's run back out. Now let's print this to the console so we can see what the data set looks like. And we've got three columns, capitol name, address capitol, that's the street address, and we have state. So we've got all the information we need in theory to geocode this. So, let's create a new object called capitol buildings geocoded, and we'll take our existing tibble, capitol buildings, and we'll pipe it into the function geocode. Now we need to provide the components of the address that we have. So the street argument is going to be populated by address capitol. And state is going to be populated by the state column. And we're also going to specify the method as IQ. That should be an equal sign. So that's going to use the LocationIQ geocoding service
>
> **[1:34](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=94)** and we can see in the console, indeed that's happening. It takes a little bit of time for this to happen, as we're using 50 addresses. Now that's finished. We haven't been told we've got any errors but let's check that all of our data makes sense. So let's get capitol buildings geocoded and print it to the console. And let's filter for those rows where longitude is N/A. That will tell us about any capitols which haven't been successfully geocoded. So I'll do filter is dot N/A on the long column, and find no rows that contain N/A values in longitude. So all of these addresses have been successfully geocoded. But, we still have a tibble object. We need to convert this into an SF object so we can visualize it with the map view package. So we'll take capitol buildings geocoded, we'll pipe it into st as sf. We'll tell the st as sf function which columns contain our coordinates. So that's the longitude column and the latitude column. And we also need to provide a coordinate reference system and we'll use four three two six, which is our default. So I'll run that code, and we can see that we now have a simple feature collection containing our data. And that's all we need to pipe this into map view. And there we can see all of the state capitols of the US. It's worthwhile pointing out at this point
>
> **[3:08](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=188)** that the LocationIQ package has used the street address and the state to understand that this address is inside the United States of America. If you had less precise data, you would also want to specify the country for each row.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** usa (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Working with GIS Data Formats

[↑ Back to Table of Contents](#table-of-contents)

#### [GIS data formats: Raster or vector](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=0)** - [Instructor] GIS data comes in two completely different flavors, vector or raster. You need a completely different workflow for vector and raster GIS data sets. Fundamentally, they're stored in different formats, which means different file types. You need to analyze or wrangle these data sets differently, which means different R packages. And finally you'll use completely different data visualizations to communicate information about these data types. There are three things I need you to take away with this video. An understanding of why rater and vector data sets are different. An ability to tell when data has to be vector or raster. And finally, you'll need to be able to understand which type of data you have. So we can better understand the formats. Let's imagine two cell towers or radio masks and how to range of these towers overlap. This problem can be represented in either vector or raster world. In the vector GIS world, the range of our masks is the perfect circle. This means that we can also precisely calculate the area that they overlap. Similar to how a Venn diagram works. Whereas in a raster world, everything is represented as a grid. This means that calculating overlaps always results in an overestimate of the true area. Vector GIS data sets are composed of points and or lines. We use vector GIS to represent precise locations and use them for creating geo scatter plots.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=96)** We also need to use vector GIS data sets to create choropleth, as the only way to represent country or any geospatial boundary is with a smooth line. Now let's think about raster GIS data sets. Data is always represented as a grid but not necessarily a rectangular grid. Raster data is a consequence of how the data was first collected. Satellite imagery is a perfect example, very sensitive cameras image. The surface of the earth and a [[Data Quality]] is directly related to the resolution of the original image captured. Weather data is also rasterized because we can only measure weather conditions across a grid of weather stations. We then interpolate values between these measurement points. For the majority of folks wanting to make maps the data sets, it's vector GIS data that you'll be working with, and that you're required to make your data visualizations. Raster data can be considered specialized as it's almost always collected by specialized implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (1)
> **Env Vars:** gis (8)
> **Definitions:** means that (2), is a  (2)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), similar to (1)
> **Prerequisites:** you'll need (1), required to (1)
> **Speakers:** - [instructor] (1)

#### [Vector GIS data: sf and sp](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=0)** - [Instructor] When it comes to working with vector GIS data in R, there are two packages of note, sf and sp. The sp package is now considered out of date and is to some extents being retired in 2023. I would strongly recommend against writing new code that uses the sp package. The sf package is designed by the r-spatial team to provide a complete suite of tools for importing, wrangling, and manipulating vector GIS data. It's also designed to consume and convert sp objects, allowing you to make use of old code that uses sp and to write new code using sf. Sf is also Tidyverse friendly, meaning it can be used with functions from both dplyr and tidyr. Sf objects are data frame with additional geometry attributes. This means that sf objects can be wrangled almost exactly like a regular data frame, including mutating, joining, and filtering. It's also really easy to visualize sf objects with the ggplot2 package in pretty much the same way as you would work with a normal data frame. Finally, the sf package all also provides functions for doing geometric calculations, for instance, calculating overlaps or finding shared borders in corepath.

> [!info]- Semantic Content
>
> **Env Vars:** gis (2)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Work with sf datasets and the tidyverse](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=0)** - Let's demonstrate how we can use sf objects with the tidiverse. I'll start by loading my packages on lines one through three and I'm going to read in some shape files on line five using the read sf function. And if I take this object and print it to the console we can see it's a simple feature collection. We've several columns and we've got a region column division and the state name column are three columns. I want to highlight. And we're also going to import a CSV file that contains populations for each state. So for one line seven, and I print this object to a console you can see that we've got the column state and population. Now I want to join these two data sets together. And so I'm going to create a new object to contain this joined data set called 'US state pop'. And whenever we are joining sf objects we must start with an sf object first. So we'll take US states, I'll pipe it into the function, left join, and we're going to join it together with state population. Now we've already seen that the state name column is differently named in each data set. So we need to provide for by-argument. So I say, by is equal to name and state. And now if I put this object to the console, you can see with our simple future collection and on a far right of the data set, our population column has been appended. Now, if we wanted to,
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=92)** we could select specific columns from this data set. So I could say US state pop. and let's select out just the name column and the population column. And we can also filter sf objects. So if I wanted to filter for states with a population of less than 1 million I'd pipe this into filter, I'd specify population. It's less than one, E six And that will return me just those states with a population of less than 1 million. Now I might also want to summarize my data set by region. Let's say that I wanted to calculate the total population per region. I'll create a new object to store this data set. So let's call this US region population, and we would take US state pop. And we'd pipe this into the function group by and we'll group by region. Just want to show you how this works. So if I run only this code, missing out the assignment you can see our simple feature collection now contains our groups and there are five regions in the data set. Now, what I want to do is I want to use the summarized function to create a new column called 'region population', and we'll use the function 'some' on the population column, and now I'll run that code.
>
> **[3:06](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=186)** It takes a little bit of time for this code to work because what sf is going to do is it's, is it's going to combine all of the states into a multi polygon. Now that's finished. I'll print this to the console and you can see indeed a simple feature collection now only has five features. The first four of which have non NA region populations. Let's take this data sets and let's pipe it into the map view function. And we'll specify the Z call argument as region population. And that will create us a very basic corepath showing us our region population. And this is how we use sf objects with the tidiverse, in almost the same way as we would with a normal tip.

> [!info]- Semantic Content
>
> **Env Vars:** csv (1)
> **Speakers:** - let (1)

#### [Challenge: Visualizing continent populations](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualizing-continent-populations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualizing-continent-populations?u=76281980&t=0)** - [Instructor] For this challenge, I want you to demonstrate your knowledge of both the sf and Tidyverse packages to join together an sf object with another tibble. I'd like you to then filter Antarctica out of a dataset and calculate the total population per continent using group_by(). And finally, I'd like you to use mapview to visualize the dataset using the new continent population column that you created with the summarized function. To help you complete this challenge, I've provided you a partial script in 03_04b project.

> [!info]- Semantic Content
>
> **Code Identifiers:** group_by (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Visualizing continent populations](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=0)** - [Instructor] Let's get started by solving this challenge by loading our packages and reading in our data set. So I'm going to run lines one through seven, and I want to print these two objects to the console so I can see what they look like. World_sf has got two continents, name and continent, and the country population has got the column's name and pop_est. So I want to join these two data sets together. So I'll take world_sf, I'll pipe that into the function left_join. Remembering when joining together sf_objects for tables, we always start with the sf_object, and then I'll provide the country population table. Now because both of these data sets contain the same column name for country name we don't need to provide for by argument. We can see this joins together so that we've got the name, continent and pop_est column. Now let's pipe for into filter because I wanted you to remove Antarctica. I'll start by extracting, just vivo with Antarctica by using name equal, equal Antarctica. So that gives me just that there and I can negate this condition with an exclamation mark here. So that's going to filter out only that though where name is equal to Antarctica. Now I want you to calculate the continent population. So we need to group this together using group by continent
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=96)** and we can see in a console we have our seven continents in the data set. And we then going to pipe that into the summarized function. And we're going to create a new column called continent population. And we'll use the sum function on the pop_est column. Now notice that the continent population for Africa is NA that's because there were some countries in Africa with NA values. We can tell some to ignore NA values using the argument NA dot RM is equal to tree. And if we rerun that now we do get an estimate for the constant population of Africa. Now that we're happy with this let's store this as world pop and let's pipe this into map view
>
> **[2:32](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=152)** so that we can get a visualization of our data set.

> [!info]- Semantic Content
>
> **Code Identifiers:** pop_est (3), world_sf (1), left_join (1), sf_objects (1), sf_object (1)
> **CLI Commands:** rm (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Static Maps with ggplot2

[↑ Back to Table of Contents](#table-of-contents)

#### [Use geom_sf to visualize geo locations](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=0)** - I'm going to show how to build both geo scatter plots and geo bubble charts with the ggplot2 package. Specifically, we'll be looking at visualizing the cities in Brazil with a population of one million residents or more. Let's go over to the 04_01b project, and I'd like you to open this script. Let's load the packages on line 1 through 4. Line 6 through 8, we're going to filter out Brazil from the country's one-oh-one-oh data set. And online 10 through 13 we're going to filter out those cities in Brazil with a population of greater than one million. And now, we're going to start our ggplot2 chart in the same way that we start all ggplot2 charts with the ggplot function. We are then going to add geom_sf data is equal to brazil_sf. Geom_sf knows how to visualize all of the different features that can be contained within an sf object. In a case of brazil_sf, we can see the outline of Brazil. The defaults for ggplot2, don't look that great for maps. Let's change the fill color for Brazil to look something more like land. So, we're going to add the argument fill is equal to dark olive green 3, which makes that look much more like land. Now, I want to remove the X and the Y axis from the chart this kind of chart furniture isn't useful for most maps that you'll want to build. So, we make use of theme void.
>
> **[1:38](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=98)** The next thing for us to do is to add our points to the map. So, we're going to add another geom_sf layer. I'll add a plus here, so we don't forget it. And we'll go back inside the brackets, and we'll add data is equal to brazil_cities. And now we can see our points on a map. They're a little bit small. So, let's increase the size of those points to 4. Notice how in the south of Brazil, many of these points overlap one another. We want to ensure that readers can see all of the cities in our map. What we need to do is change the shape code used for our points. This chart shows the most commonly used shape codes in ggplot2. We want to shape that has both a fill color and an outline color. The best option first is shape code 21. So, let's go and add shape code. So, we will add shape is equal to 21. And now we have discs with a border and currently no fill color. I want to change the fill color of these cities to be dependent on a capital column. To do that we need to use the a-e-s function. The a-e-s function stands for aesthetics, and it allows us to create bindings between columns in our data set and coordinate systems in our chart. So, I'm going to specify fill is equal to capital and ggplot2 uses that column
>
> **[3:12](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=192)** to create a new fill scale. Unfortunately, our column is in numeric column and so what ggplot2 does is it creates a continuous fill scale. This is going to be confusing for readers because the fill scale is supposed to show the single capital city and the cities, which aren't capitals. So, we need to change this from a continuous variable to a discrete variable. I'm going to use as.logical to do this. As.logical and a closed bracket and we now have a much more sensible legend and color scale. So, that's our geo scatter plot pretty much finished with I want to turn this into a geo bubble chart by changing the size of the points based on the population. So, to do that, we need to remove the size argument from here and move it into a-e-s. So, size is going to be dependent on the pop column. Now, I feel in this map that the smallest cities are a little bit too small. So, what I'm going to do is I'm going to modify the scale used for the size. So, we're going to add scale, size, area. We'll add a open and closed bracket and a plus we'll go back inside the brackets, and I'm going to set max size as 10,
>
> **[4:44](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=284)** and I think that just improves the scale of the points. However, notice that we see many fewer points now because there are cities on top of one another. What we need to do now is we need to change the order in which ggplot2 plots those points, and we do that by changing the order of the rows in the data set. So, let's go up to Brazil cities, and let's append onto here a pipe and we're going to use the function "arrange" in the standing order of the population column. I'll re-run this code and I'll weave in my ggplot2 code on line, 16 through 24, and now we can see our smaller points are on top of our larger points. Now, I think this is a fairly good looking chart. The only improvements I definitely recommend making would be to modify the appearance of the legend. Because this is a mapping course and not a ggplot2 specific course, I've provided you pre-written code for doing this, which you will find in this script.

> [!info]- Semantic Content
>
> **Code Identifiers:** geom_sf (2), brazil_sf (2), brazil_cities (1)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** make (1), find (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - i (1)

#### [ggplot2 choropleth and continuous data](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=0)** - [Instructor] We're going to build this continuous variable choropleth using ggplot2. To do so, I need you to load the script in your 0 4 0 2 B project, and let's start running our code. Lines one through six, we're going to load our packages, and read in our data set and then lines eight through 11, we're going to join those two data sets together into one SF object. Let's print it to the console so we can see what it looks like. So, what we have is, we have the name of each of the boroughs of London. We've got the geometry column, and we've got the value column here which is telling us how many residents left school at the age of 16 or under. So, let's start building our ggplot2 chart with the function ggplot. We used a plus operator to add a geom SF layer, and we'll specify that data is equal to London school leavers SF. And what I want to do is I want to fill each of these boroughs dependent on the value column. To do that, we need to use the AES function. The AES function stands for aesthetics, and allows us to create mappings between coordinate systems in our chart, and the columns in our data set. So, we'll type fill is equal to value. Ggplot2 takes that numeric column, and uses it to create a continuous fill palette using the default fill palette color, which is dark blue to light blue. This is not the best option available to us.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=96)** I want to show you how to use the viridis color palette which should be your default choice for continuous variable choropleths. To change the scale we need to add a plus, and we'll type scale_fill. We can see there are lots of different options available to us. The one we want is called scale fill viridis C. There's also a bend and discreet version of this palette available as well. So, that's a much better looking data visualization. However, I want to highlight two features: In the middle here, there's a gray borough. This is for the city of London, which has an NA value. And that's because the city of London is different from other London boroughs, and there's no data recorded for this variable for the city of London. It's likely that when you're creating choropleths you'll also have some regions that have NA values. What I want to do is I want to change the color of the NA regions, and I want to add a legend item to the legends. Before doing so, let's also improve the look of the fill legend. At the moment, it's quite difficult to read the numbers 7 0 0 0 0. Let's format those. So, we're going to go inside a scale of fill of viridis C, where our labels is equal to scales, number, format. The scales package contains lots of different functions used by ggplot2 for formatting scales.
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=189)** We're going to make use of number format and we'll change big mark to be a comma. So, those are now much easier to read numbers. Let's also customize the title. So, we'll use the name argument, and we will title this School Leavers 16 or Under. That's quite a wide title. So, I'm going to add a new line here with backslash N, and that looks much better. The last thing for us to do with the scale filler function is to change the NA value color. So, I'll add NA.value is equal to pink. In order to create a legend item for the NA values, we need to choose a synthetic aesthetic. We need to choose an aesthetic which is not being otherwise used in our data set. I'm going to make use of shape here. So, I'm going to go inside of AES, I'll add a comma and shape is equal to city of London. So, we can see we have a new legend item which is titled shape, and it's labeled city of London. Currently, it's a gray rectangle. We want to customize the appearance of this legend which means we need to use the guides function. So, I'm going to add a plus, guides, and we're going to customize the shape legend.
>
> **[4:46](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=286)** So, we'll type shape is equal to guide legend. We need to override the aesthetics with the override AES argument. We provide a list of options. So ,I'm going to specify the fill should be pink. I'm using pink here simply because it's easy to see in comparison with the viridis color palette. You could choose any color that you like. Now, I also want to get rid of the title for that legend. So, I'm going to go back inside of guide legend. I'm going to specify title is equal to null, and that gets rid of the title. It does also move those two legends around. So, the order of the legends is specified by the title of the legends or by the order argument. So, let's say that I want the city of London NA legend item to be at the bottom. I'm going to add order is equal to two. And, we're also going to add fill is equal to guide colorbar, order is equal to one. And, now those legend items have been reordered. The last thing for us to do for this choropleth is to make it look a little bit better. It's got too much chart furniture on it. We don't need the longitude and latitude displayed. So, let's use theme void to tidy that up. I also think that choropleth will look better
>
> **[6:20](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=380)** without gray borders for your regions. So, we're going to go back inside of geom SF up here, and I'm going to specify color is equal to white. Those are quite thick lines. So, we're going to use the size argument to drop that down to 0.2. And that's how we build a continuous variable choropleth with an NA legend item.

> [!info]- Semantic Content
>
> **Env Vars:** aes (4)
> **CLI Commands:** make (3)
> **Definitions:** stands for (1), is called (1)
> **Code Identifiers:** scale_fill (1)
> **Versions:** 0.2 (1)
> **Speakers:** - [instructor] (1)

#### [ggplot2 choropleth and discrete data](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=0)** - [Instructor] We're going to use ggplot2 to create a choropleth of a discrete variable, specifically the most popular pets that aren't cats or dogs in each of the states in a contiguous United States. To start this map, I'd like you to open the script in the 04_03b project. And let's go through the code. We're going to load our packages on lines 1 through 5, line 7 through 8, we'll read in our dataset, lines 10 through 15, we're going to filter for the contiguous United States of America, and finally on line 17 through 19, we're going to join our two datasets together into one SF object. I'm also providing custom colors for each of the pets, which I define on lines 21 through 28. Let's give ourselves some space with some new lines. And I'll scroll down. And let's start our map off with the function ggplot. And we'll add a geom_sf layer, with the argument data is equal to US most popular pets. And that's the start of our choropleth. We need to fill in each of the states with the most popular pet from the pet column. To do that, we use the AES function. So add AES and I will specify that our fill aesthetic should be populated by the pet column. Ggplot2 uses our character column to create a discreet scale. Notice at the bottom of our scale is an NA value. However, when we look at our map, it doesn't look like there are any states with NA values. So let's look into this by taking a look at our dataset.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=96)** I'll get US most popular pets. I'll pipe into filter is the NA pet. And there's one observation in our dataset with NA values, and that's the District of Columbia, or more commonly known as Washington, D.C. Data wasn't collected for this region, however, in our static map at this level of [[Zoom]], it's not really possible for a reader to see Washington, D.C. So we need to make a choice about our legend. Is it more confusing for our reader to see NA in the legend, but not to see District of Colombia in a map? Or should we include NA because there are NA values? I would recommend that if your readers can't see NA values in the data visualization, that you remove them from the legend. So we're going to filter these values out of the dataset. We'll do that by negating our condition with an exclamation mark. So that's going to give us all rows where pet is not NA, and we'll update our definition of US most popular pets. And now if I rerun our ggplot2 code, line 33 through 35, we now see our choropleth with no NA values. I would now like to use the custom colors that I've designed. So I'm going to use the plus operator, and I'm going to go and choose scale underscore fill manual. What this allows us to do is to provide a named vector of colors for the options in our fill column. So I'm going to provide values is equal to colors pets.
>
> **[3:16](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=196)** And now that's using my custom color palette. However, notice for the order of the legend isn't the order in which observations appear in the dataset. Hamster is at the top of the legend, but hamster is only the most popular pet in one state. The most popular pet is guinea pig. So what we need to do is we need to find out the order of observations in the pet column. There are lots of different ways to solve this problem. I'm going to use the count function for this. Let's scroll to the top of our script, just under lines 8, I'll add a few new lines, and I'm going to take most popular pets, pipe it into count. So we'll count by the pet column and I'll use the argument sort is equal to true. And that gives me a tuple with the pets ordered from most popular to least popular. I now want to extract this column as a vector which I do with the pull function. So well pull out pet. And that is now a vector, guinea pig all the way through to hamster. Let's store this as order pets popularity.
>
> **[4:33](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=273)** And now what I want to do is I want to reorder the colors pets list by this vector. We'll do that with a little bit of base R code. So I'll go down here. I'll take colors pets. I'll use square brackets. And I'll provide my vector order pet popularity. So that's going to rearrange that list by our vector. Let's update colors pets. let's rerun our code on lines 40 through 43. And now we can see that our legend is ordered by the popularity of pets, for guinea pig at the top and hamster at the bottom. The only thing for us to do now is to tidy up our choropleth a little bit. So I'm going to change the borders of the states to white by setting color is equal to white. I'll reduce the width of these lines with the size argument. I'll go for 0.2. We can see that improves the map quite a little bit. I'm also going to add a title to the legend. So I'll add name, most popular pet. And I'm also going to add theme void to throw away the chart furniture. And that's how we create a choropleth of discreet variable, remembering that sometimes, NA values might appear in our data that you can't see in a static map.
>
> **[6:07](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=367)** In an interactive map where users can zoom in and out, we should leave those NA values in the legend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2)
> **File Paths:** d.c (2)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** aes (2)
> **Definitions:** is an  (1), known as (1)
> **Code Identifiers:** geom_sf (1)
> **Versions:** 0.2 (1)
> **UI Navigation:** scroll down (1)

#### [Label maps with ggrepel package](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=0)** - [Instructor] The ggrepel package is an awesome extension for labeling ggplot2 charts. Unfortunately it doesn't yet work with sf objects. So if we want to label our maps, we need to do a little bit of work to convert sf objects into data frames or tibbles. To demonstrate how this works, we're going to add labels to this Geo bubble chart of the larger cities in Brazil. I'd like you to load the script in the 04_04b project, and let's start running the code. So lines 14 through one we're going to load our packages and define our data sets and then I'll make the environment smaller, so we can see our data visualization code on lines 19 through 37. So that's our geo bubble chart that we're going to add our labels too. The first thing we need to do is load the ggrepel package. So I'll scroll the top of the script once more. I'll type library ggrepel, and I'll run that code to load the package. Now I'm going to introduce you to two functions, st_drop_geometry and st_coordinates. So if I take brazil_cities and I pipe this into st_drop_geometry that removes the sf component of an sf object and it leaves me with just the data frame or the tibble. If it's a tibble inside the sf object. And then the second function we need is st_coordinates. So we'll take brazil_cities, and we'll pipe that into st_coordinates. And that returns us
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=95)** to coordinates in two columns, X and Y. And we need to combine these two data sets together. So let's take brazil_cities, pipe it into st_drop_geometry, pipe that into bind_cols, and we'll provide st_coordinates brazil_cities. And that gives us a data frame with everything we want. It's got the columns with the information and the coordinates in columns X and Y. So let's store this as brazil_cities_df. We don't need this code anymore. So I'll delete it, use with ggrepel. So we're going to add our ggrepel layer at the end of line 27. So I'm going to add geom_label_repel. I'm going to specify the data set as brazil_cities_df. We need to specify our aesthetics and mappings between our coordinate systems and the coordinates in the chart. So we'll say that X is equal to capital X Y is equal to capital Y, label is equal to name, and let's not forget to add a plus at the end of our geom_label_repel line. And let's see how our map looks. Ggrepel does a fairly good job of labeling the points
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=189)** but the labels are still quite congested. This is because geom_label_repel doesn't currently know how big the points are. We can change this by adding point size to the aesthetics. So we'll go inside of here. We'll add point size and we need to rescale this by the scale size factor. So we'll use a function from the Scales Package, rescale and we'll rescale pop from one to 10 and that does a better job of labeling the map. However, I would argue that there are potentially too many labels in this map. We might want to label only the largest and a smaller city. So let me show you how to do that. What I'm going to do is I'm going to extract both the first and last column from the brazil_city_df data set. So I'll pipe this into slice and we'll give it the vector one and the function N which calculate the number of rows in the dataset. So that will give us the nth row, the last row. So I'll rerun that code and I'll rerun all of the data visualization code. And now we can see, we have labels just for the larger city and the smallest city. While ggrepel does quite a good job on its own. You might want to nudge point yourself. You can do that with the nudge X and nudge Y function. So I'm going to add a slight nudge X. So I'll add another argument to geom_label_repel
>
> **[4:42](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=282)** outside of aes, and I'm going to specify nudge X and I'm going to give it a vector, C, minus five, and five. So the first data set is going to be nudged minus five and a second five. I really enjoy using the ggrepel package to label both my ggplot2 charts and the maps that I make with ggplot2. It does do a pretty good job on its own but it also allows you to nudge things just a little bit with nudge X and nudge Y.

> [!info]- Semantic Content
>
> **Code Identifiers:** st_coordinates (4), brazil_cities (4), geom_label_repel (4), st_drop_geometry (3), brazil_cities_df (2)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Zoom into regions with coords_sf()](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=0)** - Sometimes we want to [[Zoom]] into a map to focus on specific features. For instance, in this map of hospitals in Oregon, it's clear that highest density of hospitals is in the Northwest. And specifically in Multnomah County. When we build interactive maps with packages like leaflet it's really easy for the reader to zoom into a region. But when we use ggplot2 to create static maps this process requires some thought. We could try to filter our data set to show only the border for Multnomah but that removes some important context from the map. So we need a way to zoom into the map by specifying limits for the X and Y coordinates. Let's load up the script in your 0 4 0 5 B project and start running our code line 7 through 1. We're going to load our packages. And we're also going to obtain shaped files for the counties of Oregon. Takes a couple of seconds to download these onto your machine. And then lines 9 through 12, we're going to read in the hospital location data set and convert it to an SF object. Finally lines 15 through 22, we're going to create our map of all of the hospitals in Oregon. We want to obtain the bounding box for Multnomah. So that's the square that encapsulates Multnomah County. We can do that with the ST BBbox function. So let's take Oregon SF we'll pipe into filter and filter out name is equal to Multnomah and we'll then pipe that into ST BBbox.
>
> **[1:38](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=98)** A new object that's returned gives us the coordinates of the rectangle. The xmin ymin xmax and ymax values. Now I want to store this as a variable so we can reuse it. I'll call it BBbox Multnomah. But I want to show that this object isn't a named list. If I type BBbox Multnomah, and in a dollar I can't access xmin or any of the other values. So I'm going to turn this into a list by piping it into as dot list. And now if I type a dollar after it, I can easily extract the name components of the bounding box. And we can use this, which you do part two. So I will copy all of our visualization code up here. I'll paste it down here. And what I'm going to do is I'm going to change the bounds of coord SF. So we'll add coord SF here, coord SF. We'll add a plus. So I don't forget it. And we'll specify xlim as C BBbox Multnomah xmin
>
> **[2:58](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=178)** and xmax and we'll do exactly the same for ylim
>
> **[3:19](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=199)** and we'll run that visualization code. And now you can see that we've zoomed in on Multnomah. We're not only seeing Multnomah County itself but we're also seeing counties that touch it so we can see more of the coastline and give us context for where we are in the state of Oregon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (3)
> **Analogies:** for instance (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - sometimes (1)

#### [Transform CRS with coord_sf()](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=0)** - [Instructor] Sometimes when you create a map duty plot two your immediate reaction will be some level of confusion. The frequency of his confusion is directly correlated with how often you're visualizing countries or other data sets that span the international dateline or 180 degree meridian line. To fix these issues and make meaningful Gigi product two maps you'll need to use a different coordinate preference system. To demonstrate this, let's look at the New Zealand R script in the 0406B project. I'll load our packages and our data sets by running lines one through 16 and line 18 through 24, we're going to build a geo bubble chart of the largest cities in New Zealand. And we can see, this is very confusing to read. We have some in New Zealand at far right hand side of our visualization and some of it on the far left. What we need is a CRS designed for this data set. And specifically we want this CRS designed by the New Zealand government which I found on the EPSG IO website. I'm going to copy the EPSG code 2193 to my clipboard so I can use it over in our studio. To change the coordinate reference system, we need to add a plus and add the function cohort SF and then we can specify the CRS argument. And because our CRS has an EPSG code we can provide just for code. And now if we rerun our code we get a much more meaningful visualization because our data is no longer spanning two sides of our data visualization.
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=95)** However, it's still a little bit difficult to read. There are lots of small islands in New Zealand. We can remove those using a function from the R map shaper package. So let's go up here and we'll do library R map shaper. And what we're going to do is we're going to wrap New Zealand SF in the function, MS Filter islands, and brackets around that data set. And then we'll add a second argument, 1E8 and we'll rerun that. And that's going to filter out islands which are smaller than one times 10 to the eight meters square. And now we've got a much better looking data visualization of the larger cities in New Zealand.

> [!info]- Semantic Content
>
> **Env Vars:** crs (4), epsg (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Label a geobubble chart of Germany's biggest cities](https://www.linkedin.com/learning/creating-maps-with-r/challenge-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=0)** - [Instructor] For this challenge, I would like you to use {ggplot2} to create a geo bubble chart showing the five largest cities in Germany. I'd also like you to use the {ggrepel} package to label both the smallest and largest city. I'd like you to format the legend labels to read 3 million instead of 3 and 6 zeroes following. And I would also like you to set the capital city to gold and all other cities to purple.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Label a geobubble chart of Germany's biggest cities](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=0)** (techno music)
>
> **[0:04](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=4)** - Let's start solving this challenge by running the code that I've already given you. So, let's run lines 15 through 1. It's going to load our packages and define our data sets and then line 18 through 21, I'm starting off the visualization. We've just border of Germany. So, let's add our German cities with geom_sf, add a plus, so I don't forget it. Go back inside of brackets, and add data is equal to germany_cities. So that makes us a geo scatter plot but we want this to be a geo bubble chart, so let's add aes, size is going to be equal to the pop column. And so now that's a geo bubble chart. Our next part of the challenge is to label for cities in a map. So we're going to use the "ggrepel" package for that. But remember, ggrepel doesn't know how to work with SF objects, so, we need to turn Germany cities into a data frame. We start that process by taking germany_cities and piping it into st_drop_geometry. That's going to drop the geometry component of the SF object, and then we need to bind it together, using bind_cols with the st_coordinates of our germany_cities object. And now that gives us a data frame with all the information that we need for geom_label_repel. So, let's store that as germany_cities_df
>
> **[1:41](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=101)** and we'll add another layer geom_label_repel, I'll a plus at the end. And we'll add data is equal to germany_cities_df. We need to specify our aesthetics, So x is going to be capital X, y is going to be capital Y, and label is going to be equal to pop. That's not what the label should be (laughs), the label should be the name of the city. So, we'll go with name. There we go. Now, I did say I wanted to label only the largest and the smallest city. So we're going to go back to germany_cities_df, and we're going to use slice to slice off just the first row and our last row with the function N. So I'll rerun lines 17 through 20 and 22 through 31. There we go. So now I've got just Berlin and Frankfurt loaded. The next part of the challenge was to improve the labels in the size legend. So, I wanted to remove all those zeros and format this as 3 million. So, I'm going to go and get scale_size_area, I'll add a plus at the end, and then I'm going to use labels and we'll use a function from the "scales" package called number_format. And we'll rescale the numbers by 1E-6. And if I run that code, we can see
>
> **[3:16](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=196)** we get 3.0 instead of three and all those zeros. So now let's add a suffix... of " Million". And now the last thing for us to do is to change the color of our points. So, I'm going to go into geom_sf and I'm going to change the shape to 21. So that's going to give each of the cities both a border and a fill color. So, I'm going to go inside of aes and I'll add fill is equal to capital Because capital is a numeric column, it's creating us a continuous fill scale, which doesn't make sense for this data. So we're going to use as.logical around capital. There we go. And we're going to go into here and we'll change the fill scale as well. So I'll use scale_fill_manual, add a plus again, and inside of here, we're going to specify our values. So I'm going to say that, "TRUE" should be gold for the capitol city, and "FALSE" should be purple for all the other cities. And that's our map.

> [!info]- Semantic Content
>
> **Code Identifiers:** germany_cities (3), germany_cities_df (3), geom_sf (2), geom_label_repel (2), st_drop_geometry (1)
> **Env Vars:** true (1), false (1)
> **CLI Commands:** make (1)
> **Versions:** 3.0 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - let (1)

#### [Challenge: Visualize state coastline length with choropleth](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualize-state-coastline-length-with-choropleth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualize-state-coastline-length-with-choropleth?u=76281980&t=0)** - [Narrator] For this challenge, I would like you to use ggplot2 to create a continuous variable choropleth, showing a number of kilometers of coastline for each state in a continuous United States of America. I'd like you to use the vividest color palette for the fill scale. And I would like you to also improve the readability of the legend by adding commas between the thousand mark. Finally, I would like you to add a legend item for the NA regions using a synthetic aesthetic.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Visualize state coastline length with choropleth](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=0)** - [Instructor] Okay, so let's start solving this challenge by opening the script in the 04_10b project. Going to load my packages on lines one through five. Line seven through 12, we're going to obtain shape files for the contiguous United States. Line 15 we'll read in a dataset. Lines 17 through 19, we're going to join those two data sets together. I just want to print this to the console so you can see it's an SF object. And there's a column called KM of coastline that tells us how many kilometers of coastline each state has. And notice many of the states have NA values. So I've started our data visualization off, on lines 22 through 24. But what we want to do is turn this into an actual choropleth, by varying the color of each of the regions. So I'm going to add a comma, AES, fill is equal to KM of coastline. And what ggplot2 does, is it sees our numeric column and it creates a default continuous fill scale, using dark blue to light blue. It's not the best scale in the world. The scale that I wanted you to use in a challenge and that I recommend that you use for all continuous variable choropleth is viridis, which we're going to add here. So scale, fill, viridis, and we'll go with viridis C for continuous. We'll make sure to put a plus at the end of line 25.
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=95)** And now if we run that code we've solved the first part of the challenge. The second part of the challenge is to improve the formatting of the labels in the legend, which we'll do with the same scale fill function. So we're going to add labels and we need to use a function from the scales package called number format. And we're going to set big dot mark is equal to comma, and that solves the second part of our challenge. Our legend is now much easier to read. What I want to do now, is color the NA regions pink and to add a legend item for those NA values. So, I'll change the color of the regions first by adding NA dot value is equal to pink, and now we need to add a synthetic aesthetic for new legend item to appear. So I'll go inside of AES, I'll add a comma, and we'll use the shape aesthetic for our synthetic aesthetic and I'll call this zero KM of coastline. That's quite long. So let's add a new line here with back slash N. Okay. So now I want to customize the appearance of a synthetic aesthetic, which we do with the guides function. So I'm going to add guides here with a plus at the end, so I don't forget it. And we're going to go and affect the shape guide. So shape equals guide, legend,
>
> **[3:13](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=193)** and we'll use override AES to override the scale that ggplot2 is using. We'll provide it with a list, and we'll say that the fill should be equal to pink. Now, I also want to get rid of the title for that legend. So I'm going to add title is equal to null. I think that this looks better if the NA legend is the bottom. So what we need to do, is we need to specify the order. So we say order two, but the order argument only works if it's provided for all scales. So, I'll go back inside the guides, and I'll specify fill is equal to guide color bar because I want to keep the continuous color bar, and I'm going to set order is equal to one. And that's how we can create a continuous variable choropleth, and add a synthetic variable for an NA legend item.

> [!info]- Semantic Content
>
> **Env Vars:** aes (3)
> **Best Practices:** make sure to (1), don't forget (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Interactive Maps with Leaflet

[↑ Back to Table of Contents](#table-of-contents)

#### [The basics of using Leaflet](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=0)** - [Narrator] Leaflet is an awesome R package that allows us to build interactive maps using just R code. How is this possible? Well, the Leaflet package is an example of an [[HTML]] widget package. HTML widget packages wrap [[JavaScript]] libraries, in this case Leaflet, and allow us to use those JavaScript libraries writing only R code. The interactive maps that you build with Leaflet can be inserted into R Markdown documents, and into Shiny apps. If you want to learn more about HTML widgets in general, then I have a course dedicated to this topic, that covers Leaflet and four other HTML widget packages. But let's look at the basics of using Leaflet. So I've opened the script in the "05_01b Project", and I'm going to run the code on Line 7, through 1. And we'll start our Leaflet map with the Leaflet function, which gives us a gray rectangle with plus and minus buttons for zooming into our map when we add additional layers. And the first layer I'm going to add, is with the "addProviderTiles" function. This function allows me to add basemaps. All of the basemaps are available inside of the "providers" object. So if we type "providers" and "$", we see these named "provider" tiles. This website allows you to interactively compare the different basemaps available. I've zoomed in on my home city of Bristol, with the default "OpenStreetMap.Mapnik". And I just wanted to compare two different basemaps. "Thunderforest.Transport", which shows the human information for transport links in a city.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=93)** If I scroll down to "Thunderforest.Landscape", that's going to include additional physical geometry in the form of contour lines. So now I'm back inside of R studio. Let's go and use one of the Shapefiles from Esri. I'm going to use "WorldPhysical". There, we've got basemaps added to our map. What I want to do now is, I want to add the outlines of the countries in the "world_sf" dataset. So. We'll pipe this, into "addPolygons". Data is equal to "world_sf". Now the defaults for Leaflet are fairly ugly. The lines in a map are too thick, and the colors aren't great, but we're focusing on the basics of using the package here. I wanted to show you how we would access columns in our dataset. So let's say I wanted to label each of the countries, when I hover over the country. I'm going to add the argument "label", and I'm going to give the name of the column, "name". And I get an error message, "object 'name' not found". This is because in a Leaflet package, we do not use naked column names. We need to use tildes. So if I put a tilde here, and now I hover it over Antarctica, you can see I get a label. And that's everything that you need to know in order to start using the Leaflet package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[JavaScript]] (2)
> **Code Identifiers:** world_sf (2), addprovidertiles (1), addpolygons (1)
> **Env Vars:** html (4)
> **Definitions:** is an  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### [Use Leaflet to visualize geo locations](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=0)** - Let's use leaflet to visualize geolocation using the script in the 05_02b project. I'm going to run lines 15 through to one. So that's going to load our packages and define our two data sets. And line 17 through 23, I've started our map off, which is going to include just a border for Brazil. Let's start with a geo marker plot. So let's add a pipe at the end of line 23, and we'll type addMarkers. We'll add the data argument, and we will provide brazil_cities. And that adds our locations as teardrop icons that you'll be familiar with from services like [[Google]] Maps. There's not much that we can do to customize these maps, so let's swap this geo marker plot for geo scatter plot by changing addMarkers into addCircleMarkers. So these circles both have a fill color and they have a border as well. Let's change the width of the border, which is currently quite wide, by adding the argument, weight is equal to one. Let's change the fill color to be purple, and the border color to be black. The default opacity for all layers and leaflet is set really quite low. So let's increase that with the argument, fillOpacity. Now, many of these cities overlap with one another.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=93)** In a static map created with ggplot2, we could use the ggrepel package to label these cities. But because this is an interactive map, we could add labels to these cities. So let's add the argument, label is equal to. And we want to access the name, column for the Brazil city's data set. So we type a tilda and then name. Now, when we hover over each of these circles, it tells us which city we're in. And if we [[Zoom]] in, it gives us a much better idea of where each of these cities is. Now, what I'd like to do is I'd like to color the cities depending on whether they're the capital city or not. Let's take a look at the data set first. So if I print brazil_cities to the console, then we can see there's a column called capital, which is either zero or one. It's quite hard in a leaflet package itself to customize how zero and one appears. So let's, in a data set, create a new column that contains either Capital City or City. So add a few more lines here, and I'll get brazil_cities. I'll pipe it into mutate for creating new columns, and we'll create a column called city_type. And we'll use the function ifelse. So if capital is equal to one, then we're going to have Capital City in a column; otherwise, just City. And if I print that to the console, you can see that we've got City in a city_type column
>
> **[3:06](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=186)** except for row six, which is the Capital City. So let's update our definition for brazil_cities. And we now need to create a palette for our city color. So let's call that pal_city_type. And we'll use the function, colorfactor. And in the first argument, we need to specify our palette. So I want gold for the Capital City, and purple for all other cities. And in the second argument, we specify the domain for our palette, the possible values. And in this instance, I'm going to give those values here as a vector Capital City and City. I'll run that code on line 20. Then, we'll go down to line 31 and replace the string purple with ~pal_city_type and the city_type column. Now, we need to add a legend to this geo scatter plot. So let's go to the end of our chart code, add another pipe, and type addLegend. Data is equal to brazil_cities. Pal is equal to pal_city_type. And the values column is ~city_type. So that adds us a legend. Now the legend, just like the markers, have low default opacity.
>
> **[4:39](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=279)** So I'll go into here and add opacity is equal to one. Now, we might want to try to create a geo bubble chart with leaflet, but I'm going to show you that it doesn't work very well. So I'm going to go to line 34, and I'm going to add the argument, radius is equal to. Now, I'll add a comma so I don't forget it. And then we're going to use a tilda, and we will use a function from the scales package called rescale. So we will attempt to rescale the pop column to be between one and 10. And we can see that this appears to have worked. So the cities do vary in size now, but with an interactive map, users are going to want to zoom in. And as they zoom in, the ratios of the size of these bubbles changes. So unfortunately, with an interactive map built with leaflet, we can't create a geo bubble chart. However, as you've seen, it's fairly easy to create both geo marker and geo scatter plots.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (3), [[Google]] (1)
> **Code Identifiers:** brazil_cities (5), city_type (4), pal_city_type (3), addmarkers (2), addcirclemarkers (1)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - let (1)

#### [Add labels and pop-ups to Leaflet maps](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=0)** - [Instructor] Interactive maps are really awesome because they allow us to provide additional information to readers when they interact with the map. In a leaflet package we have two different ways to add this kind of information with labels and popups. Labels appear when a user hovers their [[Cursor]] over a feature in a map, whereas popups show when a user deliberately clicks a feature in a map. These kinds of interactions were all built decades before touchscreen devices were even a consideration. Today, we need to think about how the interactive maps we build will work on mobile devices. There simply is no difference on a touchscreen between hovering or clicking a map. The simplest advice I can give you is to avoid combining both labels and popups in the same leaflet map. It's also important to note that you can only customize the appearance of popups with [[HTML]]. It's not possible to do so with hover labels in the leaflet package. Let's open the script in the 05_03b project and let's run everything from lines 36 all the way through to line one. That's going to load our package, define our two data sets and create this geo scatter plot. So the first thing that I want to do is I want to show you how to add a label. So I'm going to go inside of add circle markers, I'll add the argument label and then a leaflet package if we want to access a column from our data set we need to use a tilde. So I would type ~name and now when I hover over these cities
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=96)** it tells me the name of the city. But what I would like to do is add a popup that shows me both the name and the population of the city. So what we're going to do is create a user defined function for building our label. So let's add a few lines here at line 19 and we'll create a function called label_city_pop, we'll use the function function and we'll specify our two arguments, so that's going to be city name and population. And then in the body of our function we're going to start using the function paste and we'll start by simply pasting together city_name and population.
>
> **[2:28](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=148)** I'll define my function by running the code from lines 21 through 25, let's go down to line 40 and replace label with popup. We'll provide the name of our function label_city_pop, the city name column, which is name and a population column which is pop. And now if I click on one of these cities, I can see the name of the city and the population. I'm going customize this so it looks more attractive and more informative to the reader. So the first thing I'm going to do is to add a new line in our popup. So I'll going into here and I'll add a couple of new lines so it's easier to read the code, but they're not necessary for the code to work. And what I'm going to do is I'm going to insert HTML tag br which stands for a line break, I'll redefine my function and let's rerun our map and now we've got the city name and population on separate lines. Let's tidy this up a little bit more. So let's add a comma here and we're going to type city with a colon and before here, we'll add a comma and we'll type population. I'll redefine my function and rerun the code for the charts. Now it's quite nice to make city and population bold and this also allows me to demonstrate
>
> **[4:01](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=241)** we can use any HTML we like in a popup. So I'm going to go here and add the b tag and the corresponding close and b tag here. I'll do that for population as well, I'll redefine the function and I'll rerun our visualization code. Okay, the last thing for us to do with this popup is to format the number. It's quite hard to interpret this number, so let's use the number function from the scales package. So go back into line 25, we'll type scales::number,
>
> **[4:44](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=284)** add a closing bracket here and what we're going to do is we're going to do a big_mark comma, I'll redefine the function and run all of the visualization code again and now we've got a much easier to read popup.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3)
> **Code Identifiers:** label_city_pop (2), city_name (1), big_mark (1)
> **Env Vars:** html (3)
> **UI Navigation:** open the (1), click on (1)
> **CLI Commands:** make (1)
> **Definitions:** stands for (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Leaflet choropleth and continuous data](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=0)** - Let's use leaflet to create a continuous variable core cliff using the script in 0 5 0 4 B project. We'll start by running all of the code from lines 12 through to 1. So that's going to load our packages reading our two data sets and join them together with left join and that's on line 15 start our leaflet map. As we always do with the function leaflet. We'll pipe that into add polygons. We'll specify the data argument and we'll provide London school leavers SF. Now we get an error message. When we do this, it says SF layer is not long lat data and our map definitely doesn't look like London. This is because in leaflet we can only visualize SF objects that are in geographic coordinate reference systems. Let's see what the issue is here by printing out object to a console. So if I scroll up in a console, you can see this is in a projected CRS, not a geographic CRS. So we're going to add a pipe here and a function ST Transform. We specify CRS 4, 3, 2, 6, we'll rerun that code. And now if I print this object to a console you can see this is now in a geodetic or geographic CRS. This means that our map will now work. So our run line 16 through 17 and we can see the distinctive shape of London. Let's tidy this map up a little bit
>
> **[1:34](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=94)** by changing the width of the lines. So I'll add weight as equal to one and I'll specify the color is equal to black. I now want to create a pallet for my core plef. So let's add a few lines here and let's create a pallet called pal school leavers. And if I start typing color you can see there are four functions from the leaflet package, color bin, factor, numeric and quantile all four of these except for factor can be used for numeric variables and all have the same syntax. So you can experiment with all three of these. I'm going to go with color numeric. And in a first argument, we need to specify our pallet. I'm going to recommend that we use the viridis pallet. And in a second argument, we need to specify the range of values that can exist within our Pallet. The easiest way to do that is to take our data set, London school leavers SF, and to type a dollar and the name of the column value. Now, if I define our pallet on line 16, and let's go to line 22 add a comma, let's add fill, color is equal to Tilda because we're going to be accessing named columns from our data set. Pal school leavers value Fees are very washed out colors. So let's increase the fill opacity. So fill opacity is equal to one.
>
> **[3:11](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=191)** And I want you to notice in the middle of this map, there's one gray boer. This is the city of London and it's unlike all of the Boers in London. This data, the number school leavers under the age of 16 has not been recorded for this Boer. You'll often find this in maps that you are producing but you have NA regions, and you'll want to ensure that they are colored and labeled appropriately. So what we need to do is we need to go back into our palette and specify an NA value color. So let's go here and let's add NA dot color. I'll add a new line here. So it's easier to see, and let's color that pink. I'll rerun that code, and I'll rerun line 20 for 25. And now we can see our pink region here. Now, what I want to do is I want to add a legend to this map so that readers will actually know what these colors mean. So let's add a pipe at the end of line 25. We'll add, add legend. We need to specify the data set. So that's London school leavers SF again. We need to specify the pallet, which is pal school leavers. The value argument is the column from which we're going to extract values. So that's going to be the value column and let's run that code. And we can see that we have ourselves a fairly meaningful legend. Now the colors are washed out again.
>
> **[4:46](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=286)** So let's increase opacity. So we're going to go to opacity one and also the title of this legend could be improved. So let's change that to title school leavers 16 or under, and let's also change for NA items. So instead of NA, it's going to say city of London or it could say data not recorded. Let's go and add the argument, NA dot label, City of London. And unfortunately, leaflet does this thing where if the NA item doesn't look very attractive, it line breaks in a really inconvenient way. So what I've provided for you is some HDML to fix this in order to use this HDML, we need to store our leaflet map as an object. So let's call this, I've got the name of it here. I'll copy that to the clipboard. I'll paste it here and add the assignment to operator. I'll run that code. And now if we run these four lines of code we now have our NA legend item added to the bottom of our legend and it's just much easier for readers to understand what's happening in that legend. And remember that you can experiment with the different types of numeric palettes. So if you wanted to change this to color bin then I could simply swap this to color bin and rerun all of the code.

> [!info]- Semantic Content
>
> **Env Vars:** crs (4), hdml (2)
> **UI Navigation:** scroll up (1), go to (1)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Speakers:** - let (1)

#### [Leaflet choropleth and discontinuous data](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=0)** - Let's use Leaflet to create choropleth of discreet variables using the script in the O-5-O-5-B project. Let's start by running the script from lines 20 through to 1. So that's going to load our packages. It's going to obtain ship files for the contiguous United States and it's going to join those together on line 18 through 20. Then lines 22 through 29, I'm defining a custom color palette using a named vector and lines 31 through 33 I've started off our choropleth. So if I run that code we get the outline of the contiguous United States. Now I'm going to improve this map right away by changing the width of the lines. So I'll add weight is equal to one and now I need to create a fill pallet for my choropleth. So I'll add a couple of new lines here and let's create my pallet. So I'll call it pal popular pet and I'll use the function color factor. Color factor allows us to provide named palettes. And it also allows us to create our own custom palettes using named factors. So let's give colors pets here and I'll add a comma and we need to add the domain argument. This is the range for allowable values for the pallet and the easiest way to fill this is to use for dataset U.S. most popular pets, dollar, and the name of the column. So that's the pet column.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=93)** So let's run line 32 and let's go down to line 38 and let's add fill color is equal to tilde pal popular pet pet.
>
> **[1:48](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=108)** So these colors very washed out. So we'll improve that by adding the argument fill opacity is equal to one and let's also add a legend to this map. So I'll use add legend, specify the data set as U.S. most popular pets. Will add a new argument, pal is equal to, and the name of the palette. So that's pal popular pet and then values is equal to tilde and the name of the column. Now the opacity for the legend is also set quite low. So let's set that as one. So opacity is equal to one. So now we have a choropleth with our legend. Now the legend is ordered alphabetically. So it goes from bearded dragon down to sugar glider. And then the NA value is appended at the end of the legend. It'll be much easier you to read if this legend ordered the pets from most to least popular. So guinea pig should be at the top and hamster should be at the bottom. To do that I'm going to make use of the count function. So let's go to the top of our script and add a couple of new lines here. Let's take most popular pets pipe it into the count function. We'll count the pet column and we'll add the sort is equal to true argument. So that's going to sort our data set for most to least popular pet.
>
> **[3:20](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=200)** And I want to extract out that column as a vector using the pole function. So that's now the most popular pets as a vector. Let's store that as order popular pets. Now I need to make use of this vector in two places. I need to reorder my column in a data set and I also need to reorder the colors in my named vector. So to do the first part of that, to reorder my column I need to go down to line 25, add a pipe and we'll use the function mutate. We'll mutate the pet column with fact re level. So we'll re level the existing pet column by the order, popular pets vector. So I'll run that code again and let's go down here. I'll add another new line. I'll take colors, pets and then I'll use square brackets to reorder this named vector by the vector order, popular pets. So that's now ordered from guinea pig through to hamster. We'll update our definition for color pets. And now we'll rerun all of our code from line to 51 through to 39. And now our legend has been reordered for most popular to least popular pet. Now we do still have this NA item in our legends. And at the moment it doesn't look
>
> **[4:53](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=293)** like there are any regions that have NA values. However, the benefit of a leaflet map is we can [[Zoom]] in. So if I zoom in on the East Coast here we can see there is an NA region, which is the District of Columbia or more commonly known as Washington DC. So what we could do is we could change the color for this NA item so we could make it we could make it dark blue, maybe. So if I go into color factor and I'll add NA color is equal to dark blue, and if I want to change the legend item then I would go down into here I'll add a comma and I would type NA dot label. So now I've got a choice. I could label this as data not recorded or I could label it as the District of Columbia so that readers know that the NA region is the District of Columbia. I think the most sensible option for this map is to go with data, not recorded. And that's how we can use Leaflet to create a choropleth of a discrete variable with NA values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2)
> **CLI Commands:** make (4)
> **Definitions:** is an  (1), known as (1)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)

#### [Set a background color with leaflet.extras](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=0)** - Oftentimes when building leaflet maps, you'll want to change the background, color of your map. I've run the script in the 0506B project and it's generated me this fairly good looking, core plef of the US showing me the most popular pets, but aren't "dogs" or "cats" in each state, but the background color is "gray", and it doesn't look very attractive. If we want to change the background color of a leaflet map we need to make use of, the leaflet extras package. So I'm going to show you how to do that. First of all, we need to load a package. So we'll go to the top, and we'll call library leaflet dot extras. So that's going to load a package, and now we need to go down here, to the end of our leaflet code. And we'll pipe this into the function set map widget style. and then we provide for style argument. We can give it a list of values. and what we are going to provide is background is equal to and let's go for light blue. So we might want to make it look like the background is the ocean or we might want to change this to white. We now have the flexibility to do that. Thanks to the leaflet dot extras package for leaflet dot extras package also include several other functions for customizing and tweaking your maps.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Speakers:** - oftentimes (1)

#### [Challenge: Add pop-up labels to a map of German cities](https://www.linkedin.com/learning/creating-maps-with-r/challenge-add-pop-up-labels-to-a-map-of-german-cities?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/creating-maps-with-r/challenge-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=5)** - [Instructor] For this challenge, I would like you to use leaflet to create a geo scatter plot showing the five largest cities in Germany. I'd like you to fill the capital city as gold and all other cities as purple. I'd also like you to add a pop-up to each of the circle markers, such that it shows both the city and the population. Please ensure that the population number is formatted as shown in this slide. And finally, I'd like you to add a white background to the map using the leaflet.extras package.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Solution: Add pop-up labels to a map of German cities](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=0)** - Let's start solving this challenge by opening the popup geoscatter dot R script in the 05_08b project. And let's run the code from line 15 through to 1. So that's going to load our packages and define our two data sets. And I've started off our map on line 17 through 24. So this is already a geoscatter plot. The first thing that I want to do is I want to modify the fill color of each of the cities dependent on whether it's the capital or not. Let's print germany_cities to the console so we can see what we're dealing with. And we've got a column capital with either one or zero. It's quite hard to customize how this appears in the leaflet map itself. It's much easier to wrangle our code first. So let's go here and add a few lines and I'm going to take germany_cities. I'll pipe it into the function mutate and we'll create a new column called city_type which is what we'll use to change the fill of our circle markers. So we will use ifelse so if capital is equal to one, then we want to populate that column with Capital City, otherwise City. So if I run that code lines 18 and 19 we can see our new column there, city_type. So let's update our definition for germany_cities.
>
> **[1:37](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=97)** And now we want to create a fill pallet. So I'll add a few more lines and we'll create a pallet called pal_city_type. And because we are dealing with a discrete column we use colorFactor, and we're going to specify our pallet here. So, gold for the Capital City and purple for all the other cities. Now in the second argument, we specify our domain, the range of allowable values, and to ensure that gold and purple have a correct way round, let's actually type this out. So let's type out Capital City and City. I'll run that code on line 21. And now let's go into our visualization code on line 31, and let's change fillColor to be equal to tilde pal_city_type. And then the city_type column. If I run that code, you can now see the fill color is being used, but as always, the opacity is set really low. So let's change fillOpacity to be equal to one. That's great. And now let's add a legend so that this color is meaningful. So I'll add a pipe, addlegend data is equal to germany_cities, pal is equal to pal_city_type Values are equal to tilde city_type
>
> **[3:11](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=191)** and let's set the opacity as one while we're here as well. Okay. So that's the first part of our challenge solved. The next step of our challenge was to add a popup. So let's create a function for that. So let's here create popup_city_pop and we're going to create a user-defined function with the arguments, city and population. And let's start out by using just paste. So we're going to put in the city name, we're going to put in a line break which is the <br> [[HTML]] tag, and then population. Okay. So let's run line 31 through 23 and let's go into our addCircleMarkers, add a comma and popup is equal to tilde popup_city_pop.
>
> **[4:09](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=249)** We're going to take the name column and the pop column. And if I run that code now and I click on Berlin then we can see the city name and the population. Okay. So let's add city and population as labels here. So I'm going to go back to line 26 and I'm going to add a comma, and before it we'll place <b> for bold, City colon and we'll close the tag. And what I'll do is I'll copy what I've written on line 26 and paste it on line 28 and swap City for population.
>
> **[4:53](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=293)** Okay. Let's rerun that code and all the visualization code as well. And now let's click on Berlin again and that's almost our popup finished. The last thing for us to do is to format that number. So we're going to go to line 28 and we're going to use a function from the scales package called number and we'll set big dot mark is equal to comma. Let's run line 31, all of our visualization code again and now let's check our popup. And that looks exactly how I wanted it to look. So the last step of the challenge was to add a white background with the leaflet dot extras package. So let's scroll to the top of the script and let's load the package library leaflet dot extras. We'll run that code, we'll go to the bottom of our script, we'll pipe, our map into setMapWidgetStyle style is equal to list, background is equal to white. And that's how we solved the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Code Identifiers:** germany_cities (4), city_type (4), pal_city_type (3), popup_city_pop (2), colorfactor (1)
> **UI Navigation:** click on (2), go to (2)
> **Env Vars:** html (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: Interactive choropleth of state coastline length](https://www.linkedin.com/learning/creating-maps-with-r/challenge-interactive-choropleth-of-state-coastline-length?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-interactive-choropleth-of-state-coastline-length?u=76281980&t=0)** - [Instructor] For this challenge, I would like you to use leaflet to create a continuous variable choropleth showing the kilometers of coastline for each of the states in a contiguous United States. I'd like you to use the viridis color palette for your choropleth and I would like you to highlight those states with zero coastline in pink and to add an appropriate label in the legend. I'd like you to also add a pop-up to the states that shows the state name and the coastline formatted in kilometers. I would like you to set the background color of the map to white and please use the provided CSS to fix the legend.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Interactive choropleth of state coastline length](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=0)** - Okay, let's solve this challenge by opening the script in 0510B and let's run the code line 20 through one. So that's going to load our packages, obtain shape files for the contiguous United States, and join those together with our state coastline data set line 19, we've left joint. Then line 23 through 24, I've started off our choropleth so that creates us a map showing us the contiguous United States. Let's improve this right away by changing the weight of the lines to one, and we'll change the color to white as well. Our next step is to create a pallet for our map so let's add a couple of new lines here and let's create a pallet called pal coastline kilometer and we're going to use the function color numeric for this and the first argument will specify our pallet. Vifidis, vifidis, and our domain is going to be US coastline dollar KM of coastline. So let's run line 23 and let's add this pallet to our map by adding fill, color is equal to tilde, pal coastline kilometer, and then the name our column again, which is KM of coastline. So as usual just creates a very washed out choropleth, we want to increase the opacity of our colors so let's add the argument, fill, opacity is equal to one,
>
> **[1:39](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=99)** and that looks much better. Now let's add a legend for our choropleth. So we'll pipe this into add legend, specify the data argument again. The pallet as pal, underscore, coastline KM. Our values argument as the columns, that's KM of coastline. And we already know that opacity of that is going to be washed out as well so let's set that to opacity is equal to one. So the next part for challenge was to highlight those states without any coastline. So to do that, we are going to change the color of NA values on line 23. So let's add a comma, add a new line, NA dot color is equal to pink. Let's run that code and let's go to the legend and let's add NA dot label is equal to zero coastline. Now the legend does not look very attractive. In fact, it's quite hard to read, and this is because of the known bug and the leaflet package. I've provided you a fix for this on lines 40 and 41. I'm going to make use of this fix when I finish the next two parts of the challenge, which is to add a popup and to change the background color of the map. So to add a popup we need to create a user defined function. So let's go here, add a couple of lines and we'll create a function called popup state coastline. And our two arguments are going to be
>
> **[3:14](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=194)** state name and coastline KM. And in the body of our function we're going to use the function paste and we'll paste together state name with the BR HDML tag which stands for line break, and then coastline kilometer. So we'll define our function by burning line 35 and let's add that to our visualization code. So we'll add popup is equal to tilde, popup state coastline and we'll provide our two column names. So a name column contains our state name and the kilometers of coastline is in KM of coastline. So now if I click on Washington, we can see that we have a popup. Our next challenge is to format that kilometer number to be round kilometers. So let's go to line 32 and we'll make use of a function from the scales package called number. And what that allows us to do is it allows us to add a suffix so we can add KM for kilometers as a suffix and we can also change our accuracy to an accuracy of one. Let's redefine our function by running line 35. Let's rerun our visualization code and now we can see that in our popup for Washington the kilometers are formatted much more nicely. So the last stage of the popup is to add
>
> **[4:49](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=289)** the state and coastline label. So let's go here, add a comma, and I'm going to add the HDML tag B, and the closing HDML tag B for bold. I'll add state colon there and let's copy this and let's paste it here. And let's label this coastline length. So let's redefine our function on line 35 and let's rerun our visualization code line 37. And now if I click on Washington, we have a much more nicely formatted popup. Now the next step of the challenge was to set a white background, which we do with the leaflet dot extras package. So we scroll to the top of the script and we add library, leaflet dot extras. We run that code and let's go down here and we'll pipe this into set map widget style. We'll add the style argument, a list, and we'll set our background to be white. So now this leaflet map is ready to provide to the HDML fix I've provided. So let's call this map LF coastline. Let's run all of that code and now let's run the code 58, though 54. And now that is a fairly good looking continuous variable choropleth built with leaflet.

> [!info]- Semantic Content
>
> **Env Vars:** hdml (4)
> **UI Navigation:** go to (2), click on (2)
> **CLI Commands:** make (2)
> **Definitions:** stands for (1), is a  (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### 6. CRS, Projections, and Map Tiles

[↑ Back to Table of Contents](#table-of-contents)

#### [Base maps and tiles](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=0)** - Base maps are often an extremely important part of mapping. Base maps are different representations of the surface of the Earth, but they're often wildly different to one another. They can contain physical and/or geopolitical information. You might have a completely physical base map, comprised of satellite imagery. Or, you might have computed physical characteristics like contour lines or relief map. When we think about geopolitical information on maps, we're talking about very human information. This is going to include country borders and sub-regions, like counties or boroughs. It will also include transport routes like roads, train lines, or potentially other logistic routes. These maps therefore contain names for regions and places. It's very important to acknowledge when talking about geopolitical information, that there are hundreds of disputed international territories, names for territories, and the localization of labels and maps, can also be contentious. When making maps you will need to make decisions, particularly when it comes to using base maps. Discuss these issues with your colleagues, clients, and cultural experts. Map tiles, an awesome feature with interactive maps where many base maps are combined together to create an effect where users can [[Zoom]] and pan around a map seamlessly. You'll have experienced these map tiles when using a mapping service like [[Google]] Maps or Apple Maps. When it comes to using base maps for {ggplot2},
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=93)** we don't have the ability to use map tiles, because the maps are static. Before 2018, I would recommend {ggmaps} package as it allowed us to use Google Maps' excellent base maps for free. However, today you will need to give your billing details over to Google to use {ggmaps}. So instead I recommend using a {ggspatial} package which can be used entirely for free. Let's look at how to add base maps to {ggplot2} with the base maps {ggplot2} script from the 06_01b project. I want you to run all of this code. So from line 35, all the way through to line 1. It's going to load our packages and it's going to build us up a geobubble chart of Brazil, to which I want to add base maps. So, I need to first load the {ggspatial} package. So I'll add library(ggspatial), and then, let's start off with a new version of our map to begin with. So I'll take ggplot() and then I will add annotation_map_tile(). This is because I want the map tiles at the bottom most layer of the map. So they're the first thing that we add to the {ggplot2} chart. Now, never then just these two lines of code because {ggspatial} will attempt to download map towers for the whole globe. And it will take a long time and it's not worthwhile. What we need to do is we need to provide another geom_sf layer, so that annotation_map_tile() knows which map tiles to download.
>
> **[3:07](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=187)** So let's grab this code here. So I'll copy this and I will paste it here. So if I run lines 18 through to 21 we get a fairly weird map now. So we've got base maps around Brazil but Brazil is filled in green. So let's change that fill to transparent and rerun that code. Now, {ggspatial} tries not to download too many base maps. So it sets the zoom a little bit higher than it should be. So let's change this to zoom = 4. You can see in a console for zoom level chosen was 3. So we're just increasing this by one, and now we can see really useful base maps for our map. So, let's grab this code now and let's replace our original geom_sf layer of brazil_sf. Don't forget to add a + here, and now, let's run lines 23 and that's going to build all of our visualization. So now we can see a geobubble chart built with {ggplot2} using base maps from {ggspatial}. When it comes to using map towers with {leaflet} things are much easier. There are lots more options available. There are tens of different base maps designed to work with {leaflet}, but some of them do require you to register for an API key. You'll know if they do, because there'll be watermarks on the map asking you to register for an API key. Let's demonstrate how to use map towers
>
> **[4:41](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=281)** with {leaflet} by opening the base maps with leaflet script, and let's run the whole thing. So let's go for line 37 through to line 1, and we can see that this creates us a geobubble chart using {leaflet} without any base maps. So let's add base maps. I'm going to go here and create a new {leaflet} map. So I'll start with the leaflet function and we will pipe this into the function addProviderTiles(), and then all of the different providers available to us are provided in the providers object. So we type providers and then a $. And this shows the name of all of the map tiles available to us. Let's search for this satelliteDay data set from here. So if I run line 21, that's going to create me a map of the world using this satellite imagery. Now let's grab this addPolygons layer from here and add a pipe, and if I run line 28, that's going to zoom in on Brazil. And now we've got the same weird thing as before where we've got base maps but Brazil is now filled in green. So let's change fillOpacity to 0. And now we've got a meaningful map. So again, I can copy these lines and replace lines 38 through 32 in my map. And now if I run line 31, we're going to get a geobubble chart using {leaflet} that includes base maps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (5), [[Google]] (3)
> **Code Identifiers:** annotation_map_tile (2), geom_sf (2), brazil_sf (1), addprovidertiles (1), satelliteday (1)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - base (1)

#### [What are projections and CRS?](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=0)** - [Instructor] Let's start off by asking a question. Which of these maps is correct? Which one best represents the earth and tells the most truth? There are significant differences between these three maps. In map one, it appears that Greenland is much larger than the content of Africa, but that is not reflected in map two or three. The actual answer to this question is simple, but understanding why is complicated. All three of these maps are wrong in very different ways. In fact, it's a fundamental feature of making maps. Flattening a sphere's surface from 3D into 2D will always, mathematically, distort features. This is pretty much the standard map of the world that you'll see online. The one where Greenland looks much larger than the continent of Africa. It uses the Web Mercator projection and was popularized by [[Google]] Maps because it worked really well for maps of the USA. And originally, the Google Maps product was focused on customers in the USA. This animated GIF demonstrates how the Web Mercator projection distorts the area of countries. The distortion increases as we move further away from the equator, either north or south. And that's why Greenland and Antarctica looks so huge. We can essentially use the phrase projection and the acronym CRS interchangeably. A CRS gives the technical definitions for how a projection actually projects the surface of the earth into 2D.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=93)** You might ask, how many CRS are there? Well there are least 9,906 different CRS in active use around the world. But sometimes we actually need to build custom new projections on the fly when we have very specific needs. So how do we keep track of all these different projections? The most commonly used map projections have EPSG codes, from the European Petroleum Survey Group. For instance, the most widely used CRS in the world is the World Geodetic System 1984. But that's a horrendous thing to have to type. So it's more commonly known via it's code, 4326. A second example is EPSG code 27700. Which is the British National Grid projection, designed by the British Ordinance Survey Group for extremely accurate mapping of the UK. The only one of these CRS codes that I recommend that you memorize is 4326. It should be your default choice for most data visualization purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **Env Vars:** crs (6), usa (2), epsg (2), gif (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Geographics vs. projected CRS](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=0)** - [Instructor] There are fundamentally two different types of map projections in existence, projected CRS and geographic CRS. If we want to do geometric calculations, like calculating areas or distances between points, then we need to ensure that our data is stored in a projected CRS. Whereas if we want to create a data visualization of GIS data, we need to use a geographic CRS. It's important to understand the difference between how coordinates are stored in each type of projection. In a geographic CRS, points are stored in pairs of longitude and latitude coordinates, which means the distances between points is measured in degrees. However, in a projected CRS, the coordinates are a Cartesian geometry with pairs of X and Y coordinates. This means that the distance between points are measured in physical units like meters. And that is why projected CRS are necessary for geometric calculations. It's important to be careful about not misusing geographic CRS. This map should be displaying circles centered on cities, but instead, we see gradually more distorted ellipses as we move away from the equator. That's because the circles were computed in a geographic CRS instead of a projected CRS. Fortunately, the sf package does have our back. It will warn you that your datasets are currently using longitude, latitude coordinates when using geo computation functions like st_buffer.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=96)** You just need to remember that longitude, latitude means geographic CRS, but you still need to be careful when you've identified that you need a projected CRS for geo computations. Remember that all projections distort the Earth's surface in some way. We can split projected CRS into three broad categories. Conformal CRS, which are bad at maintaining area, but very good for maintaining shape and rotation. Equal area CRS, which do a good job of maintaining shape and area, but do strongly distort rotation. And finally, equidistant projections, which do distort shapes, but are good when you need to do calculations dependent on consistent area and rotation. The mathematics objections can become overwhelming, but for the most part, we can ignore these complexities if our goal is to simply visualize spatial data.

> [!info]- Semantic Content
>
> **Env Vars:** crs (15), gis (1)
> **Warnings:** be careful (2)
> **Code Identifiers:** st_buffer (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [How to choose CRS and use them with {sf}](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=0)** - [Instructors] When choosing CRS, you need to ask yourself a question. Are you just wanting to make a map or do you need to compute something? If all you need to do is map your data, then 99% of the time all you need is EPSG code 4326. If you need to compute something, you'll need to choose a projected CRS that completely covers your data and preserves your features of interest. When searching for a projected CRS, the first place I'd recommend would be National Mapping Agencies. Most countries have a National Mapping Agency that publishes a country specific coordinate reference system that will work very well for data sets that are completely contained within a single country's borders. Wikipedia has a fairly extensive list of these agencies. The next place I would recommend searching would be the EPSG to IO website. This contains over 5,000 different CRS that cover all sorts of different regions, including oceanographic regions. My final recommendation would be to use the [ProjectionWizard.org](https://ProjectionWizard.org) website to create a custom CRS for your data. Let's use this script in the 06_04b project to go through this process. So, I'm going to run lines 15 through one. It's going to load our packages, define our two data sets, and create a map of the quakes data set in Australia and New Zealand. We can see that some of these earthquakes are covered by New Zealand. If we were only interested in those quakes in the side of New Zealand,
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=92)** we could go and find the CRS for New Zealand. The mapping agency website for New Zealand has a page dedicated to projections and you can see the official projection is called NZGD 2000. If we go to [epsg.io](https://epsg.io) and we search for NZGD 2000, then we can see that this actually does have an EPSG code that we can use, 4959. So, for one to two, we could transform our data into this projection. What we would do is we would take quakes 4326, we would pipe it into ST Transform, and we would add the argument CRS 4959. We would run that code, and if we scroll to the top of the SF object, we can see that this has been reprojected into NZGD 2000. However, this is only going to satisfy those earthquakes, which are covered by New Zealand. So, the next step I would recommend is going to [projectionwizard.org](https://projectionwizard.org), and this allows you to interactively choose an area for your CRS. So, let's select the area that the earthquakes' appearing. So, I'll move this rectangle down here and you can see down here there's a map that zooms in on that area. I can also [[Zoom]] in like this, and so I could say I'm only interested in this region. Once we've selected our region of interest, we can choose which distortion property we want to preserve, if we want equal area conformal or equidistant projections.
>
> **[3:08](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=188)** This website then creates us a WKT representation of a CRS, which you obtain by clicking on the WKT link. You will need to copy the entirety of this into your clipboard and head over to our studio. We might want to use this CRS multiple times. So, let's store this as CRS_quakes. Let's paste our clipboard in and we can see that our string contains double quotes. So, let's put a single quote at the beginning of our string and a single quote at the end of our string. Let's then run that code on line 30. So, that's now going to store that object in our environment, and now, what we can do is we can take our data set, which is currently quakes 4326 and pipe it into ST Transform. CRS is equal to CRS quakes. And if we scroll up, we can see that we are in a projected CRS, which is called Projwiz_Custom Albers. So, that name comes from here. If we wanted to we could provide a more useful name for this CRS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Env Vars:** crs (14), epsg (3), nzgd (3), wkt (2)
> **URLs:** [projectionwizard.org](https://projectionwizard.org) (2), [epsg.io](https://epsg.io) (1)
> **UI Navigation:** go to (1), select the (1), scroll up (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is called (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructors] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What else can you learn about creating maps in R?](https://www.linkedin.com/learning/creating-maps-with-r/what-else-can-you-learn-about-creating-maps-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/what-else-can-you-learn-about-creating-maps-in-r?u=76281980&t=0)** - [Charlie] Okay, thanks for joining me for this mapping with our course. My goal was to get you feeling confident with using both ggplot2 and leaflet for creating static and interactive maps. You also had to learn a little bit about GIS Theory and you should now feel well-equipped to wrangle addresses, shape files, and other location data by combining together the sf package with the Tidyverse. If you're interested in creating [[Dashboards]] that contain interactive maps, I'd highly recommend checking out my course on Building Shiny Apps. If you're looking for more experience with a Tidyverse, then please do check out my dedicated course, Introducing the Tidyverse and the Concepts of Tidy Data. Thanks again, and please do feel free to follow me on Twitter, @charliejhadley, to learn more about all mapping and data visualization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (1)
> **Env Vars:** gis (1)
> **Speakers:** - [charlie] (1)


## Instructor

- [[Charlie Joey Hadley]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/creating-maps-with-R-2825608)

## Skills Covered

- Geographic Information Systems (GIS)
- R (Programming Language)
- Data Mapping

## Path Context

### In [[Advance Your Skills in R]]
← [[R Tidyverse Applications]] | **7 of 8** | [[Build Advanced Charts in R]] →

### In [[Advance Your Skills in GIS]]
← [[Learning MapGuide Open Source]] | **9 of 9**

## Appears In

- [[Advance Your Skills in R]]
- [[Advance Your Skills in GIS]]

## Related Courses

_Courses sharing skills:_

- [[Foundations of Geographic Information Systems (GIS)]] — Geographic Information Systems (GIS)
- [[Real World Gis]] — Geographic Information Systems (GIS)
- [[Build Advanced Charts in R]] — R (Programming Language)
- [[R Tidyverse Applications]] — R (Programming Language)
- [[Learning the R Tidyverse]] — R (Programming Language)

---

[↑ Back to top](#)