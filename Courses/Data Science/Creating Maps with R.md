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
created: 2026-04-29
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
  - Why create maps with R?
  - Base knowledge
  - GitHub repository and exercise files
- [**1. Mapping Fundamentals**](#1-mapping-fundamentals) (7 videos)
  - How to choose a map
  - Geo marker and scatter plots
  - Geo bubble charts
  - Choropleth: Shaded area maps
  - Hexbin maps or hexagonally binned choropleth
  - Dot density
  - Cartograms: Distorted area maps
- [**2. Processing GIS Data from Excel**](#2-processing-gis-data-from-excel) (5 videos)
  - Standardize country names with {countrycode}
  - Join shapefiles with data in Excel files
  - Convert addresses to coordinates with geocoding
  - Challenge: Geolocate all US state capitol buildings
  - Solution: Geolocate all US state capitol buildings
- [**3. Working with GIS Data Formats**](#3-working-with-gis-data-formats) (5 videos)
  - GIS data formats: Raster or vector
  - Vector GIS data: sf and sp
  - Work with sf datasets and the tidyverse
  - Challenge: Visualizing continent populations
  - Solution: Visualizing continent populations
- [**4. Static Maps with ggplot2**](#4-static-maps-with-ggplot2) (10 videos)
  - Use geom_sf to visualize geo locations
  - ggplot2 choropleth and continuous data
  - ggplot2 choropleth and discrete data
  - Label maps with ggrepel package
  - Zoom into regions with coords_sf()
  - Transform CRS with coord_sf()
  - Challenge: Label a geobubble chart of Germany's biggest cities
  - Solution: Label a geobubble chart of Germany's biggest cities
  - Challenge: Visualize state coastline length with choropleth
  - Solution: Visualize state coastline length with choropleth
- [**5. Interactive Maps with Leaflet**](#5-interactive-maps-with-leaflet) (10 videos)
  - The basics of using Leaflet
  - Use Leaflet to visualize geo locations
  - Add labels and pop-ups to Leaflet maps
  - Leaflet choropleth and continuous data
  - Leaflet choropleth and discontinuous data
  - Set a background color with leaflet.extras
  - Challenge: Add pop-up labels to a map of German cities
  - Solution: Add pop-up labels to a map of German cities
  - Challenge: Interactive choropleth of state coastline length
  - Solution: Interactive choropleth of state coastline length
- [**6. CRS, Projections, and Map Tiles**](#6-crs-projections-and-map-tiles) (4 videos)
  - Base maps and tiles
  - What are projections and CRS?
  - Geographics vs. projected CRS
  - How to choose CRS and use them with {sf}
- [**Conclusion**](#conclusion) (1 videos)
  - What else can you learn about creating maps in R?

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Why create maps with R?
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980&t=0)** - [Charlie] Hello, I'm Charlie and I work as a data visualization specialist, and I have to make lots of maps, lots of different kinds of maps and of different places around the world.
>
> **[0:10](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980&t=10)** I use R for every single step of my mapping workflow and for every single map that I make.
>
> **[0:16](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980&t=16)** This includes data cleaning and wrangling by combining together the sf package with the powerful Tidyverse ecosystem, all of which are cover in this course.
>
> **[0:26](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980&t=26)** I will also show you how to make easy-to-read static maps for ggplot2 and engaging interactive maps with the leaflet package.
>
> **[0:34](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980&t=34)** R is absolutely a fully-featured tool for doing GIS and working with geospatial data.
>
> **[0:39](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980&t=39)** And this course will make you feel confident in using R to make maps.
>
> **[0:43](https://www.linkedin.com/learning/creating-maps-with-r/why-create-maps-with-r?u=76281980&t=43)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Code Keywords:** static (1), let (1)
> **Env Vars:** gis (1)
> **Speakers:** - [charlie] (1)

#### Base knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=0)** - [Instructor] This course is focused on making maps with R.
>
> **[0:03](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=3)** We therefore assume a basic level of comfort with the R language and how to run R code in Rstudio.
>
> **[0:09](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=9)** This includes confidence in understanding what an assignment is and how to use functions.
>
> **[0:15](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=15)** You should be able to understand what this code does and what output to expect.
>
> **[0:20](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=20)** In addition to the basics of R, we assume you have a basic familiarity with the Tidyverse.
>
> **[0:25](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=25)** Specifically, we'll use the read_csv and read_excel functions for reading data into Rstudio.
>
> **[0:34](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=34)** We'll also be using the dplyr package for wrangling data.
>
> **[0:38](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=38)** You should be comfortable with functions like filter, groupd-by, and mutate.
>
> **[0:43](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=43)** If you're not familiar with these functions, you can still use this course to understand the process of making maps with R, but I recommend you can sort for dedicated Tidyverse course in the library if you've never used the Tidyverse before.
>
> **[0:57](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=57)** There's one last thing.
>
> **[0:58](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=58)** We implicitly assume you're comfortable with the pipe operator, this percentage, right angle bracket, percentage thing.
>
> **[1:05](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=65)** If you're not, then please do refer to the pipe introduction in our course catalog.
>
> **[1:11](https://www.linkedin.com/learning/creating-maps-with-r/base-knowledge?u=76281980&t=71)** Now that we've covered what you need to get going, it's time to dive right into the course.

> [!info]- Semantic Content
>
> **Code Identifiers:** read_csv (1), read_excel (1)
> **Speakers:** - [instructor] (1)

#### GitHub repository and exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=0)** - [Instructor] All of the exercise files for this course are available through this GitHub repository.
>
> **[0:05](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=5)** You do not need a GitHub account or any knowledge of how Git works to use these materials.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=11)** Say you're watching video 02_02 and want to access the download files.
>
> **[0:16](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=16)** You would go to this repository and click on the dropdown menu labeled Main.
>
> **[0:21](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=21)** You would then click here and type the video number, 02_02.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=27)** The branch ending with b is the beginning state of the exercise.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=31)** This is the one that you want if you want to follow along with me in the video.
>
> **[0:36](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=36)** The 02_02e branch contains the end state of the exercise.
>
> **[0:41](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=41)** It contains all of the code that I wrote during the video.
>
> **[0:45](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=45)** Some sections of the course do not have an end state, as there's no code written during the video, for instance, 01_02.
>
> **[0:54](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=54)** Let's select the 02_02b branch.
>
> **[0:58](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=58)** That loads the branch, and we then have to go to the green Code button, and click on Download ZIP.
>
> **[1:07](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=67)** This will download this entire branch with repository to your downloads folder.
>
> **[1:12](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=72)** You then want to unzip the ZIP.
>
> **[1:16](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=76)** And navigate inside to the folder with the same name as the video that you're watching, 02_02b.
>
> **[1:23](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=83)** And inside of there you will find a file with the extension .Rproj and the same name as the video.
>
> **[1:30](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=90)** You will need to double-click on this file, and this will open the project in RStudio.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/github-repository-and-exercise-files?u=76281980&t=96)** You can then click on the script in the Files tab and follow along with me in the video.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (2), dropdown (1), select the (1), double-click (1)
> **CLI Commands:** git (1), unzip (1), find (1)
> **Env Vars:** zip (2)
> **Tools:** github (2)
> **Code Keywords:** let (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 1. Mapping Fundamentals

> [↑ Back to Table of Contents](#table-of-contents)

#### How to choose a map
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=0)** - [Instructor] Visualizing geospatial data is a more complex process than visualizing what we might call normal or non geographic data.
>
> **[0:08](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=8)** Before we can choose which kind of map we want to make, we need to ask ourselves three questions.
>
> **[0:14](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=14)** Where is the data?
>
> **[0:15](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=15)** How does the data vary?
>
> **[0:17](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=17)** And where is the data geographically?
>
> **[0:20](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=20)** The first and third questions might sound the same but they really get to the heart of the complexity of making maps.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=27)** Your data might be provided in a form of street addresses.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=31)** Those might be nicely formatted addresses like this one in London, or they might be less precise addresses.
>
> **[0:37](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=37)** Street addresses are very messy human data sets because they vary wildly, dependent on your data source.
>
> **[0:44](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=44)** and the region that an address belongs to.
>
> **[0:47](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=47)** You'll need to use a geocoding service to convert these addresses into coordinates.
>
> **[0:53](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=53)** There are lots of different services available.
>
> **[0:56](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=56)** Google Maps is one of the eldest and most recognizable online mapping services.
>
> **[1:01](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=61)** And it also provides a freemium geocoding service.
>
> **[1:05](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=65)** There are also tools like LocationIQ that are specifically designed for geocoding purposes and provide limited, always free access.
>
> **[1:15](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=75)** It's important to acknowledge, it's not always possible to geocode street addresses.
>
> **[1:20](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=80)** This might be because a region isn't included in a geocoding service, or your address is in a format it doesn't recognize.
>
> **[1:28](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=88)** Instead of precise street addresses, your data might be in a form of named regions.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=93)** This might include countries or smaller regions within countries.
>
> **[1:37](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=97)** If this is the case, you'll need to obtain data sets that include borders for these regions.
>
> **[1:43](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=103)** Usually, you'll find these data sets as shapefiles.
>
> **[1:47](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=107)** But a thing about shapefiles is, they come in varying levels of detail.
>
> **[1:51](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=111)** These are two different maps that compare the accuracy of two different shapefiles obtained for Antarctica.
>
> **[1:58](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=118)** Your data might be about the journeys between locations, for instance, flights or other logistical routes.
>
> **[2:06](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=126)** To work with this kind of data, we need to compute something called a great circle.
>
> **[2:11](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=131)** We also need to decide the coarseness of these journeys.
>
> **[2:15](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=135)** These two maps compare international flights with differing levels of coarseness, which affects the smoothness of the lines in the data visualization.
>
> **[2:25](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=145)** Once we've been able to turn our data into geospatial data, we then need to ask, how does the data vary?
>
> **[2:32](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=152)** What can we use in our map to communicate variables to our audience?
>
> **[2:37](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=157)** Let's look at categorical variables in maps first.
>
> **[2:41](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=161)** When we're visualizing point data with maps, we have two different ways to encode categorical variables, using color, which is the most common and versatile choice.
>
> **[2:52](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=172)** Or we could vary the shape of points.
>
> **[2:55](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=175)** When it comes to visualizing regions, the only choice that we have is to encode categorical variables with a fill color.
>
> **[3:03](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=183)** This is known as a choropleth map.
>
> **[3:07](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=187)** Now let's take a look at continuous variable maps.
>
> **[3:10](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=190)** When it comes to point data, we have some flexibility.
>
> **[3:14](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=194)** Both size and fill color can be used for encoding continuous variables.
>
> **[3:19](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=199)** But when it comes to regions, our only choice for encoding continuous variables is to vary the fill color of each region.
>
> **[3:27](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=207)** But it is important to acknowledge, I'm very much talking about traditional mapping data visualizations in this video and in this course.
>
> **[3:36](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=216)** There's some really interesting custom database that you can build which hybridized maps and normal charts.
>
> **[3:43](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=223)** This is a wonderful example, visualizing seasonality in bee colony behavior in the US.
>
> **[3:50](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=230)** But it's important to understand that building these non-traditional charts requires more effort from you as the chart designer.
>
> **[3:58](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=238)** And it requires more effort from your readers.
>
> **[4:02](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=242)** We've taken a look at these first two questions, where are data and how do they vary?
>
> **[4:07](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=247)** Now let's talk about where data are geographically.
>
> **[4:11](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=251)** If I presented you with just this map, would you know where on earth we are looking?
>
> **[4:16](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=256)** Is there sufficient context in the map for you to know what you're looking at?
>
> **[4:21](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=261)** For most data visualizations, we can add a good title and that's enough to tell our readers what they're looking at.
>
> **[4:28](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=268)** But that's not always the case for maps.
>
> **[4:31](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=271)** Montenegro is a beautiful country, but it doesn't appear on the international stage that often.
>
> **[4:37](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=277)** It's quite likely that there are folks watching this video that won't know where Montenegro appears on earth.
>
> **[4:45](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=285)** Often, all that's necessary to give your map context is to show bordering regions, particularly for those regions with a coastline.
>
> **[4:55](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=295)** But gold standard for maps is to give continent wide context.
>
> **[4:59](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=299)** A reader seeing this map will understand the database shows the largest cities in Montenegro, and that this is a country on a Mediterranean coastline, near to the very distinctive coastline of Italy.
>
> **[5:14](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=314)** Alternatively, if you have the freedom to create interactive maps, you can give your readers the ability to explore and understand that chart.
>
> **[5:23](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=323)** These are the pivotal questions you need to ask when starting to build a map or you are thinking about how to visualize geospatial data.
>
> **[5:32](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-a-map?u=76281980&t=332)** Once you've answered these questions, the fun bit starts, choosing which kind of map you want to use to tell your stories.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), known as (1)
> **Code Keywords:** let (3), case, (1)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** you'll need (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Geo marker and scatter plots
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=0)** - [Narrator] This is a geo scatter plot.
>
> **[0:02](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=2)** It's almost identical scored to a geo marker plot.
>
> **[0:05](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=5)** Let's discuss the differences.
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=7)** Geo scatter plot show our locations or events appear on a map.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=11)** So these maps could be used to show their locations of cities or the epicenters of earthquakes.
>
> **[0:17](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=17)** In order to create a geo scatter plot, you need to obtain precise coordinates for all points to be shown on a map.
>
> **[0:25](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=25)** Wikipedia is a surprisingly reliable source of coordinates for a wide variety of locations and events.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=31)** You can look for the coordinates on a page in the top right hand corner.
>
> **[0:35](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=35)** Otherwise, you might be able to use the geocoding service to convert your addresses into geographic coordinates.
>
> **[0:41](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=41)** LocationIQ is usually my go-to choice for doing this.
>
> **[0:45](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=45)** Unfortunately, it's not always possible to find exact coordinates for all locations you are interested in.
>
> **[0:51](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=51)** In these cases, you cannot plot these data using a geo scatter plot.
>
> **[0:57](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=57)** The next best data visualization choice would be a choropleth where you tally the number of points known to exist within this specific region.
>
> **[1:05](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=65)** A geo marker plot is a special case of a geo scatter plot.
>
> **[1:09](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=69)** In this type of map it is only possible to show the locations of points.
>
> **[1:14](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=74)** It's not possible to compare locations with this map because all points are represented by the same tear drop shaped markers.
>
> **[1:23](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=83)** These maps were invented by online mapping services like Google maps, and so we tend to only see them where we can make interactive maps.
>
> **[1:30](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=90)** Here's an example of a geo market plot showing the five largest cities in Germany.
>
> **[1:34](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=94)** And when I click on one of these pointers it gives me additional information about the city but for more generic geo scatter plot it does allow us to show variation.
>
> **[1:44](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=104)** These plots are best suited for comparing locations with a categorical variable, for instance comparing which cities are capital cities and which aren't.
>
> **[1:54](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=114)** I recommend that if you want to compare locations or events via a continuous variable that you use geo bubble charts instead.
>
> **[2:03](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=123)** The ggrepel package makes it easy to add labels to static geo scatter plots, but avoid one in event to improve readability.
>
> **[2:11](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=131)** Interactive geo scatter plots have a kind of superpower compared to static versions of these maps.
>
> **[2:16](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=136)** If you have many locations you need to visualize you can have these automatically cluster.
>
> **[2:21](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=141)** So I'm visualizing here.
>
> **[2:23](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=143)** Many of the cities in the United States America.
>
> **[2:25](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=145)** And if I hover that over this cluster it shows me that there are 269 cities within this region.
>
> **[2:31](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=151)** And as I iteratively zoom in, we can see VSD cluster and then I can see individual city locations.
>
> **[2:39](https://www.linkedin.com/learning/creating-maps-with-r/geo-marker-and-scatter-plots?u=76281980&t=159)** Now I'll be honest that geo scatter and geo marker plots aren't a particularly exciting to build but the very easy to understand because most people will be familiar with using a service like Google maps to find a closest cafe or directions to a business.

> [!info]- Semantic Content
>
> **Code Keywords:** static (2), let (1), this. (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Env Vars:** vsd (1)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Geo bubble charts
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=0)** - [Instructor] This is a geo bubble chart.
>
> **[0:02](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=2)** Geo bubble charts are very similar to geo scatter plots in that they show where locations or events appear on a map.
>
> **[0:09](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=9)** But they differ in that the size of the points is used to encode a continuous variable.
>
> **[0:15](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=15)** Just as with geo scatter plots, you will need precise coordinates for all the locations that you wish to visualize.
>
> **[0:22](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=22)** Wikipedia is often a good source for locations for both events and locations.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=27)** Look in the top right-hand corner of the page for coordinates.
>
> **[0:32](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=32)** Once again, if you can't find coordinates for some points, they will need to be left out at the chart.
>
> **[0:37](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=37)** The next best data visualization choice would be a choropleth, where you can tally the number of points known to exist within a specific region.
>
> **[0:45](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=45)** Now, let's talk about how we vary the size of the bubbles in our charts.
>
> **[0:51](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=51)** Theoretically, we could choose to vary the bubbles by either radius or area, but the correct choice is always to vary your geo bubble charts by size.
>
> **[1:04](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=64)** When we vary bubbles by the radius, it exaggerates the difference between the largest and smallest bubbles.
>
> **[1:11](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=71)** Take a look at how the dot representing Berlin appears smaller than half the size of Salvador, and is absolutely tiny compared to Sao Paulo.
>
> **[1:21](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=81)** Whereas when we scaled the bubbles by area, it's much easier for the human visual perception system to compare the relative population sizes of these cities.
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=92)** It is possible to add a little bit more information to geo bubble charts without overwhelming your reader.
>
> **[1:39](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=99)** You can use fill color to encode additional categorical variables into your chart.
>
> **[1:45](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=105)** For instance, to differentiate between capital and non-capital cities.
>
> **[1:50](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=110)** It's also possible to use the ggrepel package to add labels to bubble charts.
>
> **[1:56](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=116)** It's often best to add as few labels as possible to your maps.
>
> **[2:00](https://www.linkedin.com/learning/creating-maps-with-r/geo-bubble-charts?u=76281980&t=120)** You might want to consider labeling just the smallest and largest bubbles to add context for your reader.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1), for instance (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Choropleth: Shaded area maps
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=0)** - [Presentator] This is a choropleth.
>
> **[0:03](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=3)** Choropleth should be used to visualize how geographic regions compare to one another.
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=7)** You can use choropleth to compare either categorical or continuous variables.
>
> **[0:13](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=13)** Before you can begin to create a choropleth you need to obtain shapefiles for your regions of interest.
>
> **[0:19](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=19)** Most countries have dedicated census bureaus or statistics offices that can be used to obtain shapefiles for both the country itself and its subdivisions.
>
> **[0:28](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=28)** For example, states, departments, or counties.
>
> **[0:32](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=32)** Wikipedia and the UN provide substantial pages you should be able to use to find this kind of data.
>
> **[0:39](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=39)** In some instances, you may be able to find R packages designed specifically for obtaining data from national census bureaus.
>
> **[0:48](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=48)** I'm personally aware of solutions for Australia, the US and UK, but there will be others too.
>
> **[0:55](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=55)** Here are some of the common issues you'll find when trying to obtain shapefiles.
>
> **[1:00](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=60)** Shapefiles have different resolutions.
>
> **[1:02](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=62)** When working with low resolution shapefiles your borders will look jagged and might not be fit for purpose.
>
> **[1:09](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=69)** But, the higher resolution your shapefiles, the slower your maps will render.
>
> **[1:14](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=74)** You'll want to find a balance between good enough and small enough data files.
>
> **[1:19](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=79)** You'll also come across shapefiles that appear to have entire subregions missing.
>
> **[1:25](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=85)** This is very common with maps of the UK because subregions are inconsistently called counties or unified authorities.
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=92)** If you are working with country data you are unfamiliar with, it will take longer to find appropriate shapefiles.
>
> **[1:39](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=99)** It's also common to discover that shapefiles are not available for all years or the most recent files may not yet be available from a census bureau.
>
> **[1:48](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=108)** Unfortunately, it's sometimes the case that shapefiles you need are simply not available.
>
> **[1:54](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=114)** In these circumstances, you can try to contact census bureaus or other experts directly.
>
> **[2:00](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=120)** However, if you can't find appropriate shapefiles you can't begin to create your choropleth.
>
> **[2:07](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=127)** If you are designing choropleth for categorical variables it's advisable to use a well designed color palette.
>
> **[2:13](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=133)** Like those you can find on [colorbrewer2.org](https://colorbrewer2.org).
>
> **[2:17](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=137)** If you do choose to use a custom color palette ensure to test how it will be seen by folks with colorblindness via a the colorblind R package.
>
> **[2:27](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=147)** When it comes to designing continuous choropleth, I would almost always recommend the viridis color palette.
>
> **[2:33](https://www.linkedin.com/learning/creating-maps-with-r/choropleth-shaded-area-maps?u=76281980&t=153)** It's both, perceptually uniform and can be read by readers with all forms of colorblindness.

> [!info]- Semantic Content
>
> **CLI Commands:** find (7)
> **URLs:** [colorbrewer2.org](https://colorbrewer2.org) (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presentator] (1)

#### Hexbin maps or hexagonally binned choropleth
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=1)** - This is a hexbin map.
>
> **[0:03](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=3)** More technically we could call them hexagonally binned choropleth.
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=7)** Hexbin maps are used to visualize the distribution of events or locations.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=11)** For instance, the locations of hireable bikes in a city, or where traffic accidents have occurred.
>
> **[0:18](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=18)** There are three things you need to create a hexbin map.
>
> **[0:22](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=22)** A set of exact coordinates for your events or locations.
>
> **[0:25](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=25)** And ideally, you need a large number of these for your maps to make sense.
>
> **[0:30](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=30)** Secondly, you need shape files for the region that your coordinates belong to.
>
> **[0:35](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=35)** That could be as small as the city's limits, or an entire country.
>
> **[0:39](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=39)** And finally, you'll need an algorithm for bidding your region into hexagons.
>
> **[0:45](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=45)** Before we proceed, it's important to look at why we sometimes need hexbin maps.
>
> **[0:50](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=50)** And specifically, we should ask, why not use scatter geo plots, if we have exact locations for our events?
>
> **[0:58](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=58)** Geo scatter plots only really work for a small number of data points.
>
> **[1:03](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=63)** If we were to plot all of the non-fatal traffic accidents in New York during 2020, as points, we would get this kind of map.
>
> **[1:12](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=72)** Which only really tells us, there's a massive variance in the density of points across the city.
>
> **[1:18](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=78)** It's difficult to really compare neighborhoods to neighborhoods.
>
> **[1:23](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=83)** So, a geo scatter plot is not going to help us.
>
> **[1:26](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=86)** Your next choice of chart might be a normal choropleth.
>
> **[1:29](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=89)** But for this kind of data, it's not the right choice.
>
> **[1:34](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=94)** Human geography is messy and very irregular.
>
> **[1:37](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=97)** Take a look at the zip codes of New York.
>
> **[1:40](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=100)** The relative areas vary by five orders of magnitude.
>
> **[1:44](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=104)** The size of the Richmond zip code completely dominates not only Staten Island, but almost every other zip code in New York City.
>
> **[1:54](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=114)** It's not always so dramatic a difference.
>
> **[1:57](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=117)** If we take a look at the boroughs of London, there's a smaller range in size, but now there's another feature to take account of.
>
> **[2:05](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=125)** The size of the bow clearly scales with the distance from the center of the city.
>
> **[2:12](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=132)** So, when we calculate how many traffic accidents or hireable bikes appear across cities, the larger areas end up soaking more points.
>
> **[2:21](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=141)** Whereas in areas with lots of small sub regions, like in Manhattan, affect sizes appear much smaller.
>
> **[2:29](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=149)** Now, when we directly compare the normal choropleth to a hexbin map, it is clear that the normal choropleth is hiding some very important information.
>
> **[2:39](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=159)** There really are a lot of accidents that take place in Manhattan.
>
> **[2:43](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=163)** Accidents are actually fairly uniformly distributed across Staten Island.
>
> **[2:48](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=168)** In fact, per square kilometer, Richmond might be safer than other zip codes in New York city.
>
> **[2:55](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=175)** So, why do we use hexbins to bin our areas?
>
> **[3:00](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=180)** It comes down to mathematics.
>
> **[3:02](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=182)** Some shapes are simply awful for tiling.
>
> **[3:05](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=185)** Circular binned choropleth are a complete non-starter.
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=189)** Hexagons are simply the best choice for creating good tilings of any kind of shape.
>
> **[3:15](https://www.linkedin.com/learning/creating-maps-with-r/hexbin-maps-or-hexagonally-binned-choropleth?u=76281980&t=195)** If you are interested in understanding the mathematics behind this, I have provided a link to an informative blog post that's written for a general audience.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), this, (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - this (1)

#### Dot density
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=0)** - This is a dot density map.
>
> **[0:03](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=3)** I really enjoy making dot density maps because they allow us to do two things at once.
>
> **[0:08](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=8)** Visualize both the distribution and density of populations or events across a region.
>
> **[0:14](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=14)** Before you can make a dot density map you need three things; shapefiles for the regions you are interested in visualizing. Counts of the number of events or individuals in each of those regions.
>
> **[0:26](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=26)** And finally, you'll need an algorithm for randomly placing points in each of these regions.
>
> **[0:33](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=33)** So what's the benefit of creating a dot density map over normal Choropleth?
>
> **[0:39](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=39)** This is a faceted choropleth showing the age distribution of individuals living in Texas.
>
> **[0:45](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=45)** It's a really great looking map, but it doesn't tell us anything about how populated these counties are relative to one another.
>
> **[0:53](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=53)** With Choropleth, we can only see population proportions.
>
> **[0:58](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=58)** This is the benefit of dot density maps.
>
> **[1:01](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=61)** We can instantly visualize where the major cities are.
>
> **[1:04](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=64)** There's a band of highly populated counties running diagonally through central Texas.
>
> **[1:10](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=70)** It's also easier to compare to relative populations of each of the counties.
>
> **[1:15](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=75)** Some counties like Bexar on the south the map have a very young population when compared to the more middle aged county of Brazos in the Northeast.
>
> **[1:25](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=85)** But there is a danger in using dot density maps.
>
> **[1:28](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=88)** They're more rarely seen than other type of maps and therefore they can be easy to misunderstand by some readers.
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=95)** For instance, dots absolutely do not represent actual locations.
>
> **[1:41](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=101)** I've zoomed in, in this map on Kerr county to show how the dot density algorithm has placed points.
>
> **[1:47](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=107)** And it's clear that people's homes don't match up with where buildings are shown on this map.
>
> **[1:54](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=114)** It's also important to understand that dot density maps can be resource-intensive to make.
>
> **[2:00](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=120)** When I made the dot density maps of an individual state it still took several minutes to generate the map.
>
> **[2:06](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=126)** Even though I was taking advantage of parallel computing.
>
> **[2:11](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=131)** Dot density maps like this one showing the population density of racial groups from the 2020 census across the entire United States are very beautiful.
>
> **[2:21](https://www.linkedin.com/learning/creating-maps-with-r/dot-density?u=76281980&t=141)** But it took a lot of computing time and data visualization expertise to build a map that was easy to read and understand.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - this (1)

#### Cartograms: Distorted area maps
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=0)** - [Instructor] This is a cartogram.
>
> **[0:02](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=2)** Cartograms are really interesting and attention-grabbing maps.
>
> **[0:06](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=6)** In these charts, the areas of regions are distorted to communicate a continuous variable.
>
> **[0:12](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=12)** We need just two things to make cartograms, shape files for the regions, and an algorithm for distorting region size.
>
> **[0:21](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=21)** I've actually shown you rare version of a cartogram.
>
> **[0:23](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=23)** I've created a hybrid between a cartogram and a choropleth where fill color encodes the same information as the area distortion.
>
> **[0:32](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=32)** But usually, cartograms will be shown without legend or fill color.
>
> **[0:37](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=37)** There's also an alternative cartogram algorithm where regions are proportionally shrunk instead of grown.
>
> **[0:44](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=44)** So why would we go and use a fancy algorithm to create a cartogram instead of using a normal choropleth?
>
> **[0:52](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=52)** Cartograms do a good job of highlighting small regions with comparatively large values, which could be difficult to spot in choropleth.
>
> **[1:01](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=61)** But the most important property of a cartogram is that they're very dramatic.
>
> **[1:06](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=66)** However, it's very difficult to quantitatively compare regions in the cartograms.
>
> **[1:11](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=71)** For instance, it would be hard to figure out which country is most or least distorted in this map.
>
> **[1:19](https://www.linkedin.com/learning/creating-maps-with-r/cartograms-distorted-area-maps?u=76281980&t=79)** For this reason, I recommend using cartograms to grab your reader's attention but to use more quantitative maps to tell specific stories.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 2. Processing GIS Data from Excel

> [↑ Back to Table of Contents](#table-of-contents)

#### Standardize country names with {countrycode}
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=0)** - [Instructor] Country names are very messy and complicated for perfect examples of human datasets.
>
> **[0:06](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=6)** The names that we use depend on who we are, who we're speaking to, and what we are doing with the country names.
>
> **[0:12](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=12)** Let's look at five example countries.
>
> **[0:15](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=15)** The USA is a very easy example to look at.
>
> **[0:18](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=18)** It's often abbreviated to USA or US.
>
> **[0:22](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=22)** But there are multiple ways we could expand that acronym to simply United States or United States of America.
>
> **[0:30](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=30)** Next, we come to official versus common use names.
>
> **[0:33](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=33)** Often, we think we know the name of a country, for instance France, but officially, it's the French Republic.
>
> **[0:41](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=41)** And that's not the end of things, even for official names.
>
> **[0:44](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=44)** These have abbreviations, too.
>
> **[0:46](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=46)** For instance, Germany might be recorded as Fed. Rep. Germany instead of the official name Federal Republic of Germany.
>
> **[0:54](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=54)** The simplest way around these complications is to use internationally recognized codes for country names.
>
> **[1:00](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=60)** But there are at least eight widely used international country coding systems in use today.
>
> **[1:07](https://www.linkedin.com/learning/creating-maps-with-r/standardize-country-names-with-countrycode?u=76281980&t=67)** Thankfully, an R package called countrycode provides a programmatic approach to disambiguate country names and converting backwards and forwards to country codes.

> [!info]- Semantic Content
>
> **Env Vars:** usa (2)
> **Analogies:** for instance (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Join shapefiles with data in Excel files
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=0)** - [Speaker] When building maps and working with geospatial data, it's extremely common to find yourself needing to combine together shape files and data living inside of Excel files.
>
> **[0:10](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=10)** Joining these data sets is achieved with the joint functions from the tidy R package.
>
> **[0:15](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=15)** If you're completely new to the idea of joining data sets, then I recommend the tidyexplain package that provides GIFs that explain how each of the joins work.
>
> **[0:26](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=26)** We're also going to make use of the countrycode package to facilitate joining our two data sets together.
>
> **[0:34](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=34)** I'd like you to open the standardizing country names to R script in the O2_O2b project.
>
> **[0:39](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=39)** And let's start running the code.
>
> **[0:42](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=42)** Lines 1 through 5, we're going to load our packages.
>
> **[0:45](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=45)** Line nine, we're going to read in our shape files.
>
> **[0:49](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=49)** And line 11, we will read in our Excel file.
>
> **[0:52](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=52)** We now want to join these two datasets together so that we get an SF object.
>
> **[0:58](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=58)** To do so, we must start with our SF object.
>
> **[1:02](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=62)** So, I will take world_sf and pipe it into a left join and provide country population.
>
> **[1:12](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=72)** Now, when we run this code, we get an error.
>
> **[1:15](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=75)** We're told that X and Y have no common variables.
>
> **[1:18](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=78)** Let's print the two objects to the console so we can understand what's happening.
>
> **[1:25](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=85)** In the world_sf dataset, the name of each country is stored in the name column, whereas in a country population dataset, the name of the country is stored in the country_name column.
>
> **[1:40](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=100)** We need to tell left join how to match these columns together.
>
> **[1:46](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=106)** We do so with the by argument.
>
> **[1:49](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=109)** So, by is equal to and we provide a vector of matching column names.
>
> **[1:55](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=115)** So we will do name is match together with country_name.
>
> **[2:02](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=122)** And when we run that code, it successfully joins our two data sets together.
>
> **[2:07](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=127)** And you can see, we have an SF object.
>
> **[2:10](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=130)** Let us store that as world_gdp so we can visualize the code by running the code I provided you on lines 40 through 30.
>
> **[2:23](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=143)** Now, there are many missing values in our map, and this is because of mismatching country names between the two data sets.
>
> **[2:31](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=151)** This is the Excel file from the R studio project that we are using.
>
> **[2:35](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=155)** And I've highlighted in red, those country names which do not match the shape files.
>
> **[2:41](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=161)** To demonstrate how to use the country code package, let's copy Commonwealth of Australia to the clipboard.
>
> **[2:47](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=167)** And we're going to use the country code function.
>
> **[2:52](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=172)** In the first argument, we specify our source variable.
>
> **[2:55](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=175)** So, what we're working with originally, which is Commonwealth of Australia, the second argument is where we specify the origin format, in this case it's country name.
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=189)** And then we need to specify the destination format, which is the three letter code for the country.
>
> **[3:16](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=196)** So, we use iso3c and if we run that code, we can see that Commonwealth of Australia gets converted into AUS.
>
> **[3:25](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=205)** Now let's add this three letter code to the country population dataset.
>
> **[3:30](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=210)** To do so, I'll add a few new lines.
>
> **[3:35](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=215)** We'll take country population, pipe it into mutate.
>
> **[3:41](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=221)** We'll create a column called iso_a3.
>
> **[3:46](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=226)** Country code, country name column, specify again that that is the country name format.
>
> **[3:56](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=236)** And we want to output that as iso3c.
>
> **[4:00](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=240)** And if we run that code, we can see we get a new column called iso_a3 with a three letter code for each country.
>
> **[4:09](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=249)** Let's update the definition for country population.
>
> **[4:16](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=256)** And now when it comes to our join, we no longer want to join by the name columns.
>
> **[4:20](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=260)** We want to join by iso_a3.
>
> **[4:23](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=263)** Now that column is stored in both data sets, but to be explicit, I'm going to type it into here.
>
> **[4:30](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=270)** So iso_a3 and iso_a3.
>
> **[4:37](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=277)** We'll rerun that code and we also need to rerun all of our data visualization code.
>
> **[4:46](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=286)** And now there are many fewer NA values in our map.
>
> **[4:50](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=290)** There are still some countries in our map with NA values.
>
> **[4:54](https://www.linkedin.com/learning/creating-maps-with-r/join-shapefiles-with-data-in-excel-files?u=76281980&t=294)** This is because there are some countries in the shape files data set, which were simply not included in the Excel file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (1)
> **Code Identifiers:** world_sf (2), country_name (2), world_gdp (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** aus (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [speaker] (1)

#### Convert addresses to coordinates with geocoding
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=0)** - [Instructor] Geocoding is the process of converting human language street addresses into coordinates we can use to create maps.
>
> **[0:08](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=8)** In the 02_03_b branch of the project repo, there's an Excel file that contains addresses of businesses and places that I've worked across the world.
>
> **[0:18](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=18)** We'll be converting all of these into coordinates with R.
>
> **[0:21](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=21)** Notice how it has varying levels of detail for the different locations.
>
> **[0:26](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=26)** Most of the locations I've given are specific places, like row five, Oxford University's IT department.
>
> **[0:33](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=33)** But I've also given very non-specific addresses, like on line six, where I'm simply specifying Birmingham City, in Birmingham, in the UK.
>
> **[0:43](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=43)** We'll see that geocoding can work for addresses with these differing levels of precision.
>
> **[0:49](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=49)** There are several different R packages that provide geocoding services.
>
> **[0:53](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=53)** I would strongly recommend that you go with the tidygeocoder package, as it's designed to work easily with the tidyverse.
>
> **[1:00](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=60)** It also provides access to several different geocoding services, including my favorite free-to-use service, LocationIQ.
>
> **[1:09](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=69)** LocationIQ is a freemium service that provides a free tier, which doesn't require you to give them your billing details.
>
> **[1:16](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=76)** This is really awesome because you know that you won't accidentally get billed for going over an API limit, which can easily happen with alternative geocoding services.
>
> **[1:28](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=88)** So let's start by signing up to the service.
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=92)** We need to provide our email address, a name, and what we're going to be doing with the service.
>
> **[1:37](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=97)** So let's say Data Enrichment or Analytics.
>
> **[1:42](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=102)** We, of course, need to prove that we're not robots.
>
> **[1:47](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=107)** And once we've done that, we click on Sign Up.
>
> **[1:51](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=111)** As usual with these services, you've been sent a confirmation link, and you need to click a link in that email.
>
> **[1:57](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=117)** I'm going to do that off-camera.
>
> **[2:00](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=120)** There's one more marketing question that you are asked when you click that link, and that's what you're going to be using the service for, so we're going to be doing Forward Geocoding, which is going from addresses to coordinates.
>
> **[2:11](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=131)** Reverse Geocoding is going from coordinates to addresses.
>
> **[2:16](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=136)** And I'm not going to give a country name, because this is for tutorial, so we'll click Get Started.
>
> **[2:24](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=144)** And, that signup complete, it then takes you to the Manage Your API Access Tokens page, which is where we obtain our API token.
>
> **[2:34](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=154)** So I need you to click on Show Token, and copy this to your clipboard.
>
> **[2:40](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=160)** Now let's go over to R Studio.
>
> **[2:42](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=162)** I'd like you to open the geocoding.R script in the 02_03_b project, and let's load the packages on lines one through six.
>
> **[2:53](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=173)** Before dealing with the data set itself, let's look at how to geocode a single address with the tidygeocoder package.
>
> **[3:02](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=182)** To do so, we used the function geo, and I'm going to give the address 58 West Street, abbreviated as much as possible to "w St," and apartment 33A, New York.
>
> **[3:19](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=199)** And if we run that code, the tidygeocoder is going to use the default geocoding service Nominatim, and attempt to geocode it.
>
> **[3:28](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=208)** And we can see it hasn't geocoded successfully, because our lat and long columns contain NA values.
>
> **[3:36](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=216)** In order to set up tidygeocoder to use the LocationIQ API details that we've just signed up for, we need to provide a package with our API key.
>
> **[3:46](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=226)** The package looks inside the .Renviron file for API keys.
>
> **[3:51](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=231)** The easiest way to manipulate our environment files is with the usethis package.
>
> **[3:58](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=238)** So in our console, let's type usethis, colon, colon, edit_r, environ.
>
> **[4:06](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=246)** And if we run that code, it's going to open the .Renviron file.
>
> **[4:12](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=252)** Now the tidygeocoder package is looking for specifically named key, specifically LOCATIONIQ_API_KEY.
>
> **[4:23](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=263)** Then we type an equals and open quotation, and we paste in our API key from before.
>
> **[4:31](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=271)** It's crucial that, when editing the .Renviron file, we add an empty line at the end of the file.
>
> **[4:38](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=278)** The file will not work without an empty line.
>
> **[4:41](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=281)** So let's go back over to R Studio, and add an empty line at the end of the file, and save it.
>
> **[4:51](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=291)** Also note that the usethis package is really helpful, and it tells us that we must restart R for changes to take effect.
>
> **[4:59](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=299)** So we'll go to Session, Restart R.
>
> **[5:04](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=304)** And that means we have a completely new session, and we need to reload our packages.
>
> **[5:09](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=309)** So I'll close out .Renviron file, I'll run lines one through six.
>
> **[5:16](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=316)** And now I want to re-use the geo function, but I want to specify the LocationIQ geocoder instead of Nominatim.
>
> **[5:24](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=324)** So we use the argument, method = "iq".
>
> **[5:30](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=330)** And we can see that LocationIQ is able to successfully geocode this very abbreviated address.
>
> **[5:37](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=337)** Okay, so now we've seen it work for one address.
>
> **[5:40](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=340)** Let's use the package to geocode all the addresses in our Excel file.
>
> **[5:45](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=345)** We'll read in our Excel file on lines 11 through 13, and then let's take international_addresses.
>
> **[5:53](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=353)** And let's pipe that into the function geocode.
>
> **[5:59](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=359)** We then need to provide the different components of our address, so street is going to be populated by the street_address column, city by the city column, postalcode is going to be populated by the post_code column, and country is going to be populated by the country column.
>
> **[6:26](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=386)** And we will also use, method = "iq."
>
> **[6:32](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=392)** Now let's store this as an object, so that we are not wasting our API calls.
>
> **[6:38](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=398)** So let's call this, addresses_geocoded.
>
> **[6:45](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=405)** And now let's run that code.
>
> **[6:47](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=407)** And it takes a little bit of time for all the addresses to be sent over to LocationIQ.
>
> **[6:53](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=413)** Let's print the object to the console.
>
> **[6:57](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=417)** And it certainly looks like all of those columns, at least the ones that we can see, have got latitude coordinates, so they've been successfully geocoded.
>
> **[7:07](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=427)** However, while we've geocoded the data, we don't have an SF object.
>
> **[7:12](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=432)** So let's take addresses_geocoded, pipe it into st_as_sf, specify the coords as "long" and "lat."
>
> **[7:27](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=447)** We'll specify, crs = 4326.
>
> **[7:31](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=451)** We'll verify this code works by running it.
>
> **[7:35](https://www.linkedin.com/learning/creating-maps-with-r/convert-addresses-to-coordinates-with-geocoding?u=76281980&t=455)** So now we have an SF object, and let's pipe this into the mapview function, so that we can visualize our geocoded addresses.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (4), for, (2), require (1), this, (1)
> **Env Vars:** api (8), locationiq_api_key (1)
> **Code Identifiers:** addresses_geocoded (2), international_addresses (1), street_address (1), post_code (1), st_as_sf (1)
> **UI Navigation:** click on (2), open the (2), go to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Geolocate all US state capitol buildings
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/challenge-geolocate-all-us-state-capitol-buildings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-geolocate-all-us-state-capitol-buildings?u=76281980&t=0)** - [Instructor] For this challenge, I would like you to geocode the addresses for all 50 state capitals of the USA.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/challenge-geolocate-all-us-state-capitol-buildings?u=76281980&t=11)** You will need to complete all stages of the data wrangling task from beginning to end.
>
> **[0:16](https://www.linkedin.com/learning/creating-maps-with-r/challenge-geolocate-all-us-state-capitol-buildings?u=76281980&t=16)** This means you'll need to import the data from the Excel file, geocode the addresses, convert your tibble into an SF object, and finally, visualize the state capitals with the mapview function from the mapview package.
>
> **[0:30](https://www.linkedin.com/learning/creating-maps-with-r/challenge-geolocate-all-us-state-capitol-buildings?u=76281980&t=30)** Please remember to use the 02_04b, our studio project that I've provided for this challenge.
>
> **[0:36](https://www.linkedin.com/learning/creating-maps-with-r/challenge-geolocate-all-us-state-capitol-buildings?u=76281980&t=36)** This will allow you to use relative file paths.
>
> **[0:39](https://www.linkedin.com/learning/creating-maps-with-r/challenge-geolocate-all-us-state-capitol-buildings?u=76281980&t=39)** I've also provided a script file with all of the necessary packages to complete this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), function (1)
> **Env Vars:** usa (1)
> **Best Practices:** remember to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Geolocate all US state capitol buildings
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=0)** - Okay, let's get started on this challenge of geocoding the state capitols of the USA.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=11)** So I'm going to load all of the packages and we need to read in our data file.
>
> **[0:16](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=16)** So I'll create a variable name, capital buildings, and we'll use the function read underscore excel.
>
> **[0:25](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=25)** We'll open a quotation mark and I'll press the tab key so I can see the file tree and our select our xlsx file and let's run back out.
>
> **[0:36](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=36)** Now let's print this to the console so we can see what the data set looks like.
>
> **[0:40](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=40)** And we've got three columns, capitol name, address capitol, that's the street address, and we have state.
>
> **[0:46](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=46)** So we've got all the information we need in theory to geocode this.
>
> **[0:50](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=50)** So, let's create a new object called capitol buildings geocoded, and we'll take our existing tibble, capitol buildings, and we'll pipe it into the function geocode.
>
> **[1:07](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=67)** Now we need to provide the components of the address that we have.
>
> **[1:11](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=71)** So the street argument is going to be populated by address capitol.
>
> **[1:19](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=79)** And state is going to be populated by the state column.
>
> **[1:23](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=83)** And we're also going to specify the method as IQ.
>
> **[1:27](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=87)** That should be an equal sign.
>
> **[1:30](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=90)** So that's going to use the LocationIQ geocoding service and we can see in the console, indeed that's happening.
>
> **[1:37](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=97)** It takes a little bit of time for this to happen, as we're using 50 addresses.
>
> **[1:42](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=102)** Now that's finished.
>
> **[1:43](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=103)** We haven't been told we've got any errors but let's check that all of our data makes sense.
>
> **[1:48](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=108)** So let's get capitol buildings geocoded and print it to the console.
>
> **[1:53](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=113)** And let's filter for those rows where longitude is N/A.
>
> **[1:58](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=118)** That will tell us about any capitols which haven't been successfully geocoded.
>
> **[2:03](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=123)** So I'll do filter is dot N/A on the long column, and find no rows that contain N/A values in longitude.
>
> **[2:11](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=131)** So all of these addresses have been successfully geocoded.
>
> **[2:15](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=135)** But, we still have a tibble object.
>
> **[2:17](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=137)** We need to convert this into an SF object so we can visualize it with the map view package.
>
> **[2:23](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=143)** So we'll take capitol buildings geocoded, we'll pipe it into st as sf.
>
> **[2:32](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=152)** We'll tell the st as sf function which columns contain our coordinates.
>
> **[2:38](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=158)** So that's the longitude column and the latitude column.
>
> **[2:43](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=163)** And we also need to provide a coordinate reference system and we'll use four three two six, which is our default.
>
> **[2:50](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=170)** So I'll run that code, and we can see that we now have a simple feature collection containing our data.
>
> **[2:57](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=177)** And that's all we need to pipe this into map view.
>
> **[3:03](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=183)** And there we can see all of the state capitols of the US.
>
> **[3:06](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=186)** It's worthwhile pointing out at this point that the LocationIQ package has used the street address and the state to understand that this address is inside the United States of America.
>
> **[3:17](https://www.linkedin.com/learning/creating-maps-with-r/solution-geolocate-all-us-state-capitol-buildings?u=76281980&t=197)** If you had less precise data, you would also want to specify the country for each row.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (3), this. (1), default. (1)
> **CLI Commands:** find (1)
> **Env Vars:** usa (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Working with GIS Data Formats

> [↑ Back to Table of Contents](#table-of-contents)

#### GIS data formats: Raster or vector
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=0)** - [Instructor] GIS data comes in two completely different flavors, vector or raster.
>
> **[0:06](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=6)** You need a completely different workflow for vector and raster GIS data sets.
>
> **[0:10](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=10)** Fundamentally, they're stored in different formats, which means different file types.
>
> **[0:15](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=15)** You need to analyze or wrangle these data sets differently, which means different R packages.
>
> **[0:21](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=21)** And finally you'll use completely different data visualizations to communicate information about these data types.
>
> **[0:29](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=29)** There are three things I need you to take away with this video.
>
> **[0:32](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=32)** An understanding of why rater and vector data sets are different.
>
> **[0:37](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=37)** An ability to tell when data has to be vector or raster.
>
> **[0:41](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=41)** And finally, you'll need to be able to understand which type of data you have.
>
> **[0:46](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=46)** So we can better understand the formats.
>
> **[0:48](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=48)** Let's imagine two cell towers or radio masks and how to range of these towers overlap.
>
> **[0:55](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=55)** This problem can be represented in either vector or raster world.
>
> **[1:00](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=60)** In the vector GIS world, the range of our masks is the perfect circle.
>
> **[1:04](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=64)** This means that we can also precisely calculate the area that they overlap.
>
> **[1:09](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=69)** Similar to how a Venn diagram works.
>
> **[1:13](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=73)** Whereas in a raster world, everything is represented as a grid.
>
> **[1:17](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=77)** This means that calculating overlaps always results in an overestimate of the true area.
>
> **[1:24](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=84)** Vector GIS data sets are composed of points and or lines.
>
> **[1:28](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=88)** We use vector GIS to represent precise locations and use them for creating geo scatter plots.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=96)** We also need to use vector GIS data sets to create choropleth, as the only way to represent country or any geospatial boundary is with a smooth line.
>
> **[1:46](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=106)** Now let's think about raster GIS data sets.
>
> **[1:49](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=109)** Data is always represented as a grid but not necessarily a rectangular grid.
>
> **[1:55](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=115)** Raster data is a consequence of how the data was first collected.
>
> **[2:00](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=120)** Satellite imagery is a perfect example, very sensitive cameras image.
>
> **[2:05](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=125)** The surface of the earth and a data quality is directly related to the resolution of the original image captured.
>
> **[2:13](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=133)** Weather data is also rasterized because we can only measure weather conditions across a grid of weather stations.
>
> **[2:20](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=140)** We then interpolate values between these measurement points.
>
> **[2:24](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=144)** For the majority of folks wanting to make maps the data sets, it's vector GIS data that you'll be working with, and that you're required to make your data visualizations.
>
> **[2:33](https://www.linkedin.com/learning/creating-maps-with-r/gis-data-formats-raster-or-vector?u=76281980&t=153)** Raster data can be considered specialized as it's almost always collected by specialized implementation.

> [!info]- Semantic Content
>
> **Env Vars:** gis (8)
> **Definitions:** means that (2), is a  (2)
> **Code Keywords:** let (2), finally, (1)
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), similar to (1)
> **Prerequisites:** you'll need (1), required to (1)
> **Speakers:** - [instructor] (1)

#### Vector GIS data: sf and sp
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=0)** - [Instructor] When it comes to working with vector GIS data in R, there are two packages of note, sf and sp.
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=7)** The sp package is now considered out of date and is to some extents being retired in 2023.
>
> **[0:14](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=14)** I would strongly recommend against writing new code that uses the sp package.
>
> **[0:19](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=19)** The sf package is designed by the r-spatial team to provide a complete suite of tools for importing, wrangling, and manipulating vector GIS data.
>
> **[0:29](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=29)** It's also designed to consume and convert sp objects, allowing you to make use of old code that uses sp and to write new code using sf.
>
> **[0:39](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=39)** Sf is also Tidyverse friendly, meaning it can be used with functions from both dplyr and tidyr.
>
> **[0:46](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=46)** Sf objects are data frame with additional geometry attributes.
>
> **[0:51](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=51)** This means that sf objects can be wrangled almost exactly like a regular data frame, including mutating, joining, and filtering.
>
> **[1:00](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=60)** It's also really easy to visualize sf objects with the ggplot2 package in pretty much the same way as you would work with a normal data frame.
>
> **[1:09](https://www.linkedin.com/learning/creating-maps-with-r/vector-gis-data-sf-and-sp?u=76281980&t=69)** Finally, the sf package all also provides functions for doing geometric calculations, for instance, calculating overlaps or finding shared borders in corepath.

> [!info]- Semantic Content
>
> **Env Vars:** gis (2)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Work with sf datasets and the tidyverse
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=0)** - Let's demonstrate how we can use sf objects with the tidiverse.
>
> **[0:04](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=4)** I'll start by loading my packages on lines one through three and I'm going to read in some shape files on line five using the read sf function.
>
> **[0:14](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=14)** And if I take this object and print it to the console we can see it's a simple feature collection.
>
> **[0:19](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=19)** We've several columns and we've got a region column division and the state name column are three columns.
>
> **[0:25](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=25)** I want to highlight.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=27)** And we're also going to import a CSV file that contains populations for each state.
>
> **[0:32](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=32)** So for one line seven, and I print this object to a console you can see that we've got the column state and population.
>
> **[0:40](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=40)** Now I want to join these two data sets together.
>
> **[0:43](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=43)** And so I'm going to create a new object to contain this joined data set called 'US state pop'.
>
> **[0:51](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=51)** And whenever we are joining sf objects we must start with an sf object first.
>
> **[0:56](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=56)** So we'll take US states, I'll pipe it into the function, left join, and we're going to join it together with state population.
>
> **[1:06](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=66)** Now we've already seen that the state name column is differently named in each data set.
>
> **[1:11](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=71)** So we need to provide for by-argument.
>
> **[1:14](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=74)** So I say, by is equal to name and state.
>
> **[1:21](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=81)** And now if I put this object to the console, you can see with our simple future collection and on a far right of the data set, our population column has been appended.
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=92)** Now, if we wanted to, we could select specific columns from this data set.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=96)** So I could say US state pop. and let's select out just the name column and the population column.
>
> **[1:46](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=106)** And we can also filter sf objects.
>
> **[1:49](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=109)** So if I wanted to filter for states with a population of less than 1 million I'd pipe this into filter, I'd specify population.
>
> **[2:00](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=120)** It's less than one, E six And that will return me just those states with a population of less than 1 million.
>
> **[2:11](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=131)** Now I might also want to summarize my data set by region.
>
> **[2:15](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=135)** Let's say that I wanted to calculate the total population per region.
>
> **[2:20](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=140)** I'll create a new object to store this data set.
>
> **[2:23](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=143)** So let's call this US region population, and we would take US state pop.
>
> **[2:33](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=153)** And we'd pipe this into the function group by and we'll group by region.
>
> **[2:38](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=158)** Just want to show you how this works.
>
> **[2:40](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=160)** So if I run only this code, missing out the assignment you can see our simple feature collection now contains our groups and there are five regions in the data set.
>
> **[2:51](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=171)** Now, what I want to do is I want to use the summarized function to create a new column called 'region population', and we'll use the function 'some' on the population column, and now I'll run that code.
>
> **[3:06](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=186)** It takes a little bit of time for this code to work because what sf is going to do is it's, is it's going to combine all of the states into a multi polygon.
>
> **[3:17](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=197)** Now that's finished.
>
> **[3:18](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=198)** I'll print this to the console and you can see indeed a simple feature collection now only has five features.
>
> **[3:25](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=205)** The first four of which have non NA region populations.
>
> **[3:29](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=209)** Let's take this data sets and let's pipe it into the map view function.
>
> **[3:35](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=215)** And we'll specify the Z call argument as region population.
>
> **[3:40](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=220)** And that will create us a very basic corepath showing us our region population.
>
> **[3:45](https://www.linkedin.com/learning/creating-maps-with-r/work-with-sf-datasets-and-the-tidyverse?u=76281980&t=225)** And this is how we use sf objects with the tidiverse, in almost the same way as we would with a normal tip.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (6)
> **Env Vars:** csv (1)
> **Speakers:** - let (1)

#### Challenge: Visualizing continent populations
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualizing-continent-populations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualizing-continent-populations?u=76281980&t=0)** - [Instructor] For this challenge, I want you to demonstrate your knowledge of both the sf and Tidyverse packages to join together an sf object with another tibble.
>
> **[0:13](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualizing-continent-populations?u=76281980&t=13)** I'd like you to then filter Antarctica out of a dataset and calculate the total population per continent using group_by().
>
> **[0:20](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualizing-continent-populations?u=76281980&t=20)** And finally, I'd like you to use mapview to visualize the dataset using the new continent population column that you created with the summarized function.
>
> **[0:30](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualizing-continent-populations?u=76281980&t=30)** To help you complete this challenge, I've provided you a partial script in 03_04b project.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), function (1)
> **Code Identifiers:** group_by (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Visualizing continent populations
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=0)** - [Instructor] Let's get started by solving this challenge by loading our packages and reading in our data set.
>
> **[0:10](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=10)** So I'm going to run lines one through seven, and I want to print these two objects to the console so I can see what they look like.
>
> **[0:18](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=18)** World_sf has got two continents, name and continent, and the country population has got the column's name and pop_est.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=27)** So I want to join these two data sets together.
>
> **[0:30](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=30)** So I'll take world_sf, I'll pipe that into the function left_join.
>
> **[0:36](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=36)** Remembering when joining together sf_objects for tables, we always start with the sf_object, and then I'll provide the country population table.
>
> **[0:46](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=46)** Now because both of these data sets contain the same column name for country name we don't need to provide for by argument.
>
> **[0:53](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=53)** We can see this joins together so that we've got the name, continent and pop_est column.
>
> **[0:59](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=59)** Now let's pipe for into filter because I wanted you to remove Antarctica.
>
> **[1:04](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=64)** I'll start by extracting, just vivo with Antarctica by using name equal, equal Antarctica.
>
> **[1:14](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=74)** So that gives me just that there and I can negate this condition with an exclamation mark here.
>
> **[1:20](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=80)** So that's going to filter out only that though where name is equal to Antarctica.
>
> **[1:26](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=86)** Now I want you to calculate the continent population.
>
> **[1:30](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=90)** So we need to group this together using group by continent and we can see in a console we have our seven continents in the data set.
>
> **[1:40](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=100)** And we then going to pipe that into the summarized function.
>
> **[1:45](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=105)** And we're going to create a new column called continent population.
>
> **[1:52](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=112)** And we'll use the sum function on the pop_est column.
>
> **[1:58](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=118)** Now notice that the continent population for Africa is NA that's because there were some countries in Africa with NA values.
>
> **[2:06](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=126)** We can tell some to ignore NA values using the argument NA dot RM is equal to tree.
>
> **[2:15](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=135)** And if we rerun that now we do get an estimate for the constant population of Africa.
>
> **[2:21](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=141)** Now that we're happy with this let's store this as world pop and let's pipe this into map view
>
> **[2:32](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualizing-continent-populations?u=76281980&t=152)** so that we can get a visualization of our data set.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3)
> **Code Identifiers:** pop_est (3), world_sf (1), left_join (1), sf_objects (1), sf_object (1)
> **CLI Commands:** rm (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Static Maps with ggplot2

> [↑ Back to Table of Contents](#table-of-contents)

#### Use geom_sf to visualize geo locations
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=0)** - I'm going to show how to build both geo scatter plots and geo bubble charts with the ggplot2 package.
>
> **[0:05](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=5)** Specifically, we'll be looking at visualizing the cities in Brazil with a population of one million residents or more.
>
> **[0:12](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=12)** Let's go over to the 04_01b project, and I'd like you to open this script.
>
> **[0:20](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=20)** Let's load the packages on line 1 through 4.
>
> **[0:23](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=23)** Line 6 through 8, we're going to filter out Brazil from the country's one-oh-one-oh data set.
>
> **[0:28](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=28)** And online 10 through 13 we're going to filter out those cities in Brazil with a population of greater than one million.
>
> **[0:36](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=36)** And now, we're going to start our ggplot2 chart in the same way that we start all ggplot2 charts with the ggplot function.
>
> **[0:46](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=46)** We are then going to add geom_sf data is equal to brazil_sf.
>
> **[0:54](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=54)** Geom_sf knows how to visualize all of the different features that can be contained within an sf object.
>
> **[1:00](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=60)** In a case of brazil_sf, we can see the outline of Brazil.
>
> **[1:05](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=65)** The defaults for ggplot2, don't look that great for maps.
>
> **[1:08](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=68)** Let's change the fill color for Brazil to look something more like land.
>
> **[1:13](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=73)** So, we're going to add the argument fill is equal to dark olive green 3, which makes that look much more like land.
>
> **[1:24](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=84)** Now, I want to remove the X and the Y axis from the chart this kind of chart furniture isn't useful for most maps that you'll want to build.
>
> **[1:34](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=94)** So, we make use of theme void.
>
> **[1:38](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=98)** The next thing for us to do is to add our points to the map.
>
> **[1:42](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=102)** So, we're going to add another geom_sf layer.
>
> **[1:45](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=105)** I'll add a plus here, so we don't forget it.
>
> **[1:48](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=108)** And we'll go back inside the brackets, and we'll add data is equal to brazil_cities.
>
> **[1:56](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=116)** And now we can see our points on a map.
>
> **[1:58](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=118)** They're a little bit small.
>
> **[1:59](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=119)** So, let's increase the size of those points to 4.
>
> **[2:04](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=124)** Notice how in the south of Brazil, many of these points overlap one another.
>
> **[2:09](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=129)** We want to ensure that readers can see all of the cities in our map.
>
> **[2:14](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=134)** What we need to do is change the shape code used for our points.
>
> **[2:18](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=138)** This chart shows the most commonly used shape codes in ggplot2.
>
> **[2:23](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=143)** We want to shape that has both a fill color and an outline color.
>
> **[2:28](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=148)** The best option first is shape code 21.
>
> **[2:32](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=152)** So, let's go and add shape code.
>
> **[2:35](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=155)** So, we will add shape is equal to 21.
>
> **[2:40](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=160)** And now we have discs with a border and currently no fill color.
>
> **[2:45](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=165)** I want to change the fill color of these cities to be dependent on a capital column.
>
> **[2:50](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=170)** To do that we need to use the a-e-s function.
>
> **[2:55](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=175)** The a-e-s function stands for aesthetics, and it allows us to create bindings between columns in our data set and coordinate systems in our chart.
>
> **[3:06](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=186)** So, I'm going to specify fill is equal to capital and ggplot2 uses that column to create a new fill scale.
>
> **[3:14](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=194)** Unfortunately, our column is in numeric column and so what ggplot2 does is it creates a continuous fill scale.
>
> **[3:23](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=203)** This is going to be confusing for readers because the fill scale is supposed to show the single capital city and the cities, which aren't capitals.
>
> **[3:32](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=212)** So, we need to change this from a continuous variable to a discrete variable.
>
> **[3:37](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=217)** I'm going to use as.logical to do this.
>
> **[3:42](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=222)** As.logical and a closed bracket and we now have a much more sensible legend and color scale.
>
> **[3:50](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=230)** So, that's our geo scatter plot pretty much finished with I want to turn this into a geo bubble chart by changing the size of the points based on the population.
>
> **[4:01](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=241)** So, to do that, we need to remove the size argument from here and move it into a-e-s.
>
> **[4:09](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=249)** So, size is going to be dependent on the pop column.
>
> **[4:14](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=254)** Now, I feel in this map that the smallest cities are a little bit too small.
>
> **[4:19](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=259)** So, what I'm going to do is I'm going to modify the scale used for the size.
>
> **[4:25](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=265)** So, we're going to add scale, size, area.
>
> **[4:31](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=271)** We'll add a open and closed bracket and a plus we'll go back inside the brackets, and I'm going to set max size as 10,
>
> **[4:44](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=284)** and I think that just improves the scale of the points.
>
> **[4:47](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=287)** However, notice that we see many fewer points now because there are cities on top of one another.
>
> **[4:54](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=294)** What we need to do now is we need to change the order in which ggplot2 plots those points, and we do that by changing the order of the rows in the data set.
>
> **[5:05](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=305)** So, let's go up to Brazil cities, and let's append onto here a pipe and we're going to use the function "arrange" in the standing order of the population column.
>
> **[5:20](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=320)** I'll re-run this code and I'll weave in my ggplot2 code on line, 16 through 24, and now we can see our smaller points are on top of our larger points.
>
> **[5:33](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=333)** Now, I think this is a fairly good looking chart.
>
> **[5:36](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=336)** The only improvements I definitely recommend making would be to modify the appearance of the legend.
>
> **[5:42](https://www.linkedin.com/learning/creating-maps-with-r/use-geom-sf-to-visualize-geo-locations?u=76281980&t=342)** Because this is a mapping course and not a ggplot2 specific course, I've provided you pre-written code for doing this, which you will find in this script.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (4), this. (1), this, (1)
> **Code Identifiers:** geom_sf (2), brazil_sf (2), brazil_cities (1)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** make (1), find (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - i (1)

#### ggplot2 choropleth and continuous data
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=0)** - [Instructor] We're going to build this continuous variable choropleth using ggplot2.
>
> **[0:05](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=5)** To do so, I need you to load the script in your 0 4 0 2 B project, and let's start running our code.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=11)** Lines one through six, we're going to load our packages, and read in our data set and then lines eight through 11, we're going to join those two data sets together into one SF object.
>
> **[0:23](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=23)** Let's print it to the console so we can see what it looks like.
>
> **[0:26](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=26)** So, what we have is, we have the name of each of the boroughs of London.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=31)** We've got the geometry column, and we've got the value column here which is telling us how many residents left school at the age of 16 or under.
>
> **[0:40](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=40)** So, let's start building our ggplot2 chart with the function ggplot.
>
> **[0:47](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=47)** We used a plus operator to add a geom SF layer, and we'll specify that data is equal to London school leavers SF.
>
> **[0:58](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=58)** And what I want to do is I want to fill each of these boroughs dependent on the value column.
>
> **[1:03](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=63)** To do that, we need to use the AES function.
>
> **[1:07](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=67)** The AES function stands for aesthetics, and allows us to create mappings between coordinate systems in our chart, and the columns in our data set.
>
> **[1:17](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=77)** So, we'll type fill is equal to value.
>
> **[1:21](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=81)** Ggplot2 takes that numeric column, and uses it to create a continuous fill palette using the default fill palette color, which is dark blue to light blue.
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=92)** This is not the best option available to us.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=96)** I want to show you how to use the viridis color palette which should be your default choice for continuous variable choropleths.
>
> **[1:43](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=103)** To change the scale we need to add a plus, and we'll type scale_fill.
>
> **[1:50](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=110)** We can see there are lots of different options available to us.
>
> **[1:53](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=113)** The one we want is called scale fill viridis C.
>
> **[1:58](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=118)** There's also a bend and discreet version of this palette available as well.
>
> **[2:03](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=123)** So, that's a much better looking data visualization.
>
> **[2:06](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=126)** However, I want to highlight two features: In the middle here, there's a gray borough.
>
> **[2:13](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=133)** This is for the city of London, which has an NA value.
>
> **[2:16](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=136)** And that's because the city of London is different from other London boroughs, and there's no data recorded for this variable for the city of London.
>
> **[2:25](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=145)** It's likely that when you're creating choropleths you'll also have some regions that have NA values.
>
> **[2:31](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=151)** What I want to do is I want to change the color of the NA regions, and I want to add a legend item to the legends.
>
> **[2:39](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=159)** Before doing so, let's also improve the look of the fill legend.
>
> **[2:44](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=164)** At the moment, it's quite difficult to read the numbers 7 0 0 0 0.
>
> **[2:49](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=169)** Let's format those.
>
> **[2:52](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=172)** So, we're going to go inside a scale of fill of viridis C, where our labels is equal to scales, number, format.
>
> **[3:04](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=184)** The scales package contains lots of different functions used by ggplot2 for formatting scales.
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=189)** We're going to make use of number format and we'll change big mark to be a comma.
>
> **[3:17](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=197)** So, those are now much easier to read numbers.
>
> **[3:20](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=200)** Let's also customize the title.
>
> **[3:23](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=203)** So, we'll use the name argument, and we will title this School Leavers 16 or Under.
>
> **[3:35](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=215)** That's quite a wide title.
>
> **[3:37](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=217)** So, I'm going to add a new line here with backslash N, and that looks much better.
>
> **[3:45](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=225)** The last thing for us to do with the scale filler function is to change the NA value color.
>
> **[3:52](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=232)** So, I'll add NA.value is equal to pink.
>
> **[3:58](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=238)** In order to create a legend item for the NA values, we need to choose a synthetic aesthetic.
>
> **[4:05](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=245)** We need to choose an aesthetic which is not being otherwise used in our data set.
>
> **[4:10](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=250)** I'm going to make use of shape here.
>
> **[4:13](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=253)** So, I'm going to go inside of AES, I'll add a comma and shape is equal to city of London.
>
> **[4:21](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=261)** So, we can see we have a new legend item which is titled shape, and it's labeled city of London.
>
> **[4:28](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=268)** Currently, it's a gray rectangle.
>
> **[4:31](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=271)** We want to customize the appearance of this legend which means we need to use the guides function.
>
> **[4:38](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=278)** So, I'm going to add a plus, guides, and we're going to customize the shape legend.
>
> **[4:46](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=286)** So, we'll type shape is equal to guide legend.
>
> **[4:51](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=291)** We need to override the aesthetics with the override AES argument.
>
> **[4:58](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=298)** We provide a list of options.
>
> **[5:01](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=301)** So ,I'm going to specify the fill should be pink.
>
> **[5:05](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=305)** I'm using pink here simply because it's easy to see in comparison with the viridis color palette.
>
> **[5:11](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=311)** You could choose any color that you like.
>
> **[5:13](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=313)** Now, I also want to get rid of the title for that legend.
>
> **[5:17](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=317)** So, I'm going to go back inside of guide legend.
>
> **[5:20](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=320)** I'm going to specify title is equal to null, and that gets rid of the title.
>
> **[5:27](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=327)** It does also move those two legends around.
>
> **[5:30](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=330)** So, the order of the legends is specified by the title of the legends or by the order argument.
>
> **[5:38](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=338)** So, let's say that I want the city of London NA legend item to be at the bottom.
>
> **[5:43](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=343)** I'm going to add order is equal to two.
>
> **[5:49](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=349)** And, we're also going to add fill is equal to guide colorbar, order is equal to one.
>
> **[5:59](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=359)** And, now those legend items have been reordered.
>
> **[6:02](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=362)** The last thing for us to do for this choropleth is to make it look a little bit better.
>
> **[6:07](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=367)** It's got too much chart furniture on it.
>
> **[6:09](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=369)** We don't need the longitude and latitude displayed.
>
> **[6:12](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=372)** So, let's use theme void to tidy that up.
>
> **[6:18](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=378)** I also think that choropleth will look better without gray borders for your regions.
>
> **[6:24](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=384)** So, we're going to go back inside of geom SF up here, and I'm going to specify color is equal to white.
>
> **[6:32](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=392)** Those are quite thick lines.
>
> **[6:34](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=394)** So, we're going to use the size argument to drop that down to 0.2.
>
> **[6:40](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-continuous-data?u=76281980&t=400)** And that's how we build a continuous variable choropleth with an NA legend item.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (5), override (2)
> **Env Vars:** aes (4)
> **CLI Commands:** make (3)
> **Definitions:** stands for (1), is called (1)
> **Code Identifiers:** scale_fill (1)
> **Versions:** 0.2 (1)
> **Speakers:** - [instructor] (1)

#### ggplot2 choropleth and discrete data
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=0)** - [Instructor] We're going to use ggplot2 to create a choropleth of a discrete variable, specifically the most popular pets that aren't cats or dogs in each of the states in a contiguous United States.
>
> **[0:12](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=12)** To start this map, I'd like you to open the script in the 04_03b project.
>
> **[0:16](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=16)** And let's go through the code.
>
> **[0:18](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=18)** We're going to load our packages on lines 1 through 5, line 7 through 8, we'll read in our dataset, lines 10 through 15, we're going to filter for the contiguous United States of America, and finally on line 17 through 19, we're going to join our two datasets together into one SF object.
>
> **[0:37](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=37)** I'm also providing custom colors for each of the pets, which I define on lines 21 through 28.
>
> **[0:44](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=44)** Let's give ourselves some space with some new lines.
>
> **[0:47](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=47)** And I'll scroll down.
>
> **[0:48](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=48)** And let's start our map off with the function ggplot.
>
> **[0:54](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=54)** And we'll add a geom_sf layer, with the argument data is equal to US most popular pets.
>
> **[1:02](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=62)** And that's the start of our choropleth.
>
> **[1:04](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=64)** We need to fill in each of the states with the most popular pet from the pet column.
>
> **[1:09](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=69)** To do that, we use the AES function.
>
> **[1:12](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=72)** So add AES and I will specify that our fill aesthetic should be populated by the pet column.
>
> **[1:20](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=80)** Ggplot2 uses our character column to create a discreet scale.
>
> **[1:24](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=84)** Notice at the bottom of our scale is an NA value.
>
> **[1:27](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=87)** However, when we look at our map, it doesn't look like there are any states with NA values.
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=92)** So let's look into this by taking a look at our dataset.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=96)** I'll get US most popular pets.
>
> **[1:39](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=99)** I'll pipe into filter is the NA pet.
>
> **[1:44](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=104)** And there's one observation in our dataset with NA values, and that's the District of Columbia, or more commonly known as Washington, D.C.
>
> **[1:53](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=113)** Data wasn't collected for this region, however, in our static map at this level of zoom, it's not really possible for a reader to see Washington, D.C.
>
> **[2:04](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=124)** So we need to make a choice about our legend.
>
> **[2:07](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=127)** Is it more confusing for our reader to see NA in the legend, but not to see District of Colombia in a map?
>
> **[2:15](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=135)** Or should we include NA because there are NA values?
>
> **[2:19](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=139)** I would recommend that if your readers can't see NA values in the data visualization, that you remove them from the legend.
>
> **[2:26](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=146)** So we're going to filter these values out of the dataset.
>
> **[2:30](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=150)** We'll do that by negating our condition with an exclamation mark.
>
> **[2:34](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=154)** So that's going to give us all rows where pet is not NA, and we'll update our definition of US most popular pets.
>
> **[2:42](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=162)** And now if I rerun our ggplot2 code, line 33 through 35, we now see our choropleth with no NA values.
>
> **[2:50](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=170)** I would now like to use the custom colors that I've designed.
>
> **[2:54](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=174)** So I'm going to use the plus operator, and I'm going to go and choose scale underscore fill manual.
>
> **[3:03](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=183)** What this allows us to do is to provide a named vector of colors for the options in our fill column.
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=189)** So I'm going to provide values is equal to colors pets.
>
> **[3:16](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=196)** And now that's using my custom color palette.
>
> **[3:18](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=198)** However, notice for the order of the legend isn't the order in which observations appear in the dataset.
>
> **[3:25](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=205)** Hamster is at the top of the legend, but hamster is only the most popular pet in one state.
>
> **[3:31](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=211)** The most popular pet is guinea pig.
>
> **[3:33](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=213)** So what we need to do is we need to find out the order of observations in the pet column.
>
> **[3:39](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=219)** There are lots of different ways to solve this problem.
>
> **[3:42](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=222)** I'm going to use the count function for this.
>
> **[3:45](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=225)** Let's scroll to the top of our script, just under lines 8, I'll add a few new lines, and I'm going to take most popular pets, pipe it into count.
>
> **[3:56](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=236)** So we'll count by the pet column and I'll use the argument sort is equal to true.
>
> **[4:02](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=242)** And that gives me a tuple with the pets ordered from most popular to least popular.
>
> **[4:08](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=248)** I now want to extract this column as a vector which I do with the pull function.
>
> **[4:15](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=255)** So well pull out pet.
>
> **[4:17](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=257)** And that is now a vector, guinea pig all the way through to hamster.
>
> **[4:21](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=261)** Let's store this as order pets popularity.
>
> **[4:33](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=273)** And now what I want to do is I want to reorder the colors pets list by this vector.
>
> **[4:41](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=281)** We'll do that with a little bit of base R code.
>
> **[4:44](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=284)** So I'll go down here.
>
> **[4:45](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=285)** I'll take colors pets.
>
> **[4:48](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=288)** I'll use square brackets.
>
> **[4:50](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=290)** And I'll provide my vector order pet popularity.
>
> **[4:54](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=294)** So that's going to rearrange that list by our vector.
>
> **[4:58](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=298)** Let's update colors pets.
>
> **[5:02](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=302)** let's rerun our code on lines 40 through 43.
>
> **[5:06](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=306)** And now we can see that our legend is ordered by the popularity of pets, for guinea pig at the top and hamster at the bottom.
>
> **[5:14](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=314)** The only thing for us to do now is to tidy up our choropleth a little bit.
>
> **[5:18](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=318)** So I'm going to change the borders of the states to white by setting color is equal to white.
>
> **[5:26](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=326)** I'll reduce the width of these lines with the size argument.
>
> **[5:30](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=330)** I'll go for 0.2.
>
> **[5:33](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=333)** We can see that improves the map quite a little bit.
>
> **[5:36](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=336)** I'm also going to add a title to the legend.
>
> **[5:39](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=339)** So I'll add name, most popular pet.
>
> **[5:48](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=348)** And I'm also going to add theme void to throw away the chart furniture.
>
> **[5:56](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=356)** And that's how we create a choropleth of discreet variable, remembering that sometimes, NA values might appear in our data that you can't see in a static map.
>
> **[6:07](https://www.linkedin.com/learning/creating-maps-with-r/ggplot2-choropleth-and-discrete-data?u=76281980&t=367)** In an interactive map where users can zoom in and out, we should leave those NA values in the legend.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (4), static (2), this. (1), throw (1)
> **File Paths:** d.c (2)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** aes (2)
> **Definitions:** is an  (1), known as (1)
> **Code Identifiers:** geom_sf (1)
> **Versions:** 0.2 (1)
> **UI Navigation:** scroll down (1)

#### Label maps with ggrepel package
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=0)** - [Instructor] The ggrepel package is an awesome extension for labeling ggplot2 charts.
>
> **[0:06](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=6)** Unfortunately it doesn't yet work with sf objects.
>
> **[0:09](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=9)** So if we want to label our maps, we need to do a little bit of work to convert sf objects into data frames or tibbles.
>
> **[0:17](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=17)** To demonstrate how this works, we're going to add labels to this Geo bubble chart of the larger cities in Brazil.
>
> **[0:24](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=24)** I'd like you to load the script in the 04_04b project, and let's start running the code.
>
> **[0:30](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=30)** So lines 14 through one we're going to load our packages and define our data sets and then I'll make the environment smaller, so we can see our data visualization code on lines 19 through 37.
>
> **[0:43](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=43)** So that's our geo bubble chart that we're going to add our labels too.
>
> **[0:47](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=47)** The first thing we need to do is load the ggrepel package.
>
> **[0:50](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=50)** So I'll scroll the top of the script once more.
>
> **[0:53](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=53)** I'll type library ggrepel, and I'll run that code to load the package.
>
> **[0:59](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=59)** Now I'm going to introduce you to two functions, st_drop_geometry and st_coordinates.
>
> **[1:06](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=66)** So if I take brazil_cities and I pipe this into st_drop_geometry that removes the sf component of an sf object and it leaves me with just the data frame or the tibble.
>
> **[1:19](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=79)** If it's a tibble inside the sf object.
>
> **[1:22](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=82)** And then the second function we need is st_coordinates.
>
> **[1:26](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=86)** So we'll take brazil_cities, and we'll pipe that into st_coordinates.
>
> **[1:34](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=94)** And that returns us to coordinates in two columns, X and Y.
>
> **[1:38](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=98)** And we need to combine these two data sets together.
>
> **[1:41](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=101)** So let's take brazil_cities, pipe it into st_drop_geometry, pipe that into bind_cols, and we'll provide st_coordinates brazil_cities.
>
> **[2:00](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=120)** And that gives us a data frame with everything we want.
>
> **[2:03](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=123)** It's got the columns with the information and the coordinates in columns X and Y.
>
> **[2:08](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=128)** So let's store this as brazil_cities_df.
>
> **[2:16](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=136)** We don't need this code anymore.
>
> **[2:17](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=137)** So I'll delete it, use with ggrepel.
>
> **[2:22](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=142)** So we're going to add our ggrepel layer at the end of line 27.
>
> **[2:27](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=147)** So I'm going to add geom_label_repel.
>
> **[2:32](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=152)** I'm going to specify the data set as brazil_cities_df.
>
> **[2:40](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=160)** We need to specify our aesthetics and mappings between our coordinate systems and the coordinates in the chart.
>
> **[2:46](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=166)** So we'll say that X is equal to capital X Y is equal to capital Y, label is equal to name, and let's not forget to add a plus at the end of our geom_label_repel line.
>
> **[3:04](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=184)** And let's see how our map looks.
>
> **[3:06](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=186)** Ggrepel does a fairly good job of labeling the points but the labels are still quite congested.
>
> **[3:12](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=192)** This is because geom_label_repel doesn't currently know how big the points are.
>
> **[3:17](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=197)** We can change this by adding point size to the aesthetics.
>
> **[3:21](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=201)** So we'll go inside of here.
>
> **[3:23](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=203)** We'll add point size and we need to rescale this by the scale size factor.
>
> **[3:31](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=211)** So we'll use a function from the Scales Package, rescale and we'll rescale pop from one to 10 and that does a better job of labeling the map.
>
> **[3:46](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=226)** However, I would argue that there are potentially too many labels in this map.
>
> **[3:51](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=231)** We might want to label only the largest and a smaller city.
>
> **[3:55](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=235)** So let me show you how to do that.
>
> **[3:58](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=238)** What I'm going to do is I'm going to extract both the first and last column from the brazil_city_df data set.
>
> **[4:05](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=245)** So I'll pipe this into slice and we'll give it the vector one and the function N which calculate the number of rows in the dataset.
>
> **[4:14](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=254)** So that will give us the nth row, the last row.
>
> **[4:17](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=257)** So I'll rerun that code and I'll rerun all of the data visualization code.
>
> **[4:22](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=262)** And now we can see, we have labels just for the larger city and the smallest city.
>
> **[4:27](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=267)** While ggrepel does quite a good job on its own.
>
> **[4:30](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=270)** You might want to nudge point yourself.
>
> **[4:33](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=273)** You can do that with the nudge X and nudge Y function.
>
> **[4:36](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=276)** So I'm going to add a slight nudge X.
>
> **[4:40](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=280)** So I'll add another argument to geom_label_repel outside of aes, and I'm going to specify nudge X and I'm going to give it a vector, C, minus five, and five.
>
> **[4:54](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=294)** So the first data set is going to be nudged minus five and a second five.
>
> **[4:59](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=299)** I really enjoy using the ggrepel package to label both my ggplot2 charts and the maps that I make with ggplot2.
>
> **[5:07](https://www.linkedin.com/learning/creating-maps-with-r/label-maps-with-ggrepel-package?u=76281980&t=307)** It does do a pretty good job on its own but it also allows you to nudge things just a little bit with nudge X and nudge Y.

> [!info]- Semantic Content
>
> **Code Identifiers:** st_coordinates (4), brazil_cities (4), geom_label_repel (4), st_drop_geometry (3), brazil_cities_df (2)
> **Code Keywords:** let (6), function (4), delete (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Zoom into regions with coords_sf()
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=0)** - Sometimes we want to zoom into a map to focus on specific features.
>
> **[0:04](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=4)** For instance, in this map of hospitals in Oregon, it's clear that highest density of hospitals is in the Northwest.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=11)** And specifically in Multnomah County.
>
> **[0:13](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=13)** When we build interactive maps with packages like leaflet it's really easy for the reader to zoom into a region.
>
> **[0:19](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=19)** But when we use ggplot2 to create static maps this process requires some thought.
>
> **[0:25](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=25)** We could try to filter our data set to show only the border for Multnomah but that removes some important context from the map.
>
> **[0:32](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=32)** So we need a way to zoom into the map by specifying limits for the X and Y coordinates.
>
> **[0:38](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=38)** Let's load up the script in your 0 4 0 5 B project and start running our code line 7 through 1.
>
> **[0:45](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=45)** We're going to load our packages.
>
> **[0:47](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=47)** And we're also going to obtain shaped files for the counties of Oregon.
>
> **[0:51](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=51)** Takes a couple of seconds to download these onto your machine.
>
> **[0:57](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=57)** And then lines 9 through 12, we're going to read in the hospital location data set and convert it to an SF object.
>
> **[1:05](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=65)** Finally lines 15 through 22, we're going to create our map of all of the hospitals in Oregon.
>
> **[1:12](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=72)** We want to obtain the bounding box for Multnomah.
>
> **[1:15](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=75)** So that's the square that encapsulates Multnomah County.
>
> **[1:18](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=78)** We can do that with the ST BBbox function.
>
> **[1:22](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=82)** So let's take Oregon SF we'll pipe into filter and filter out name is equal to Multnomah and we'll then pipe that into ST BBbox.
>
> **[1:38](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=98)** A new object that's returned gives us the coordinates of the rectangle.
>
> **[1:42](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=102)** The xmin ymin xmax and ymax values.
>
> **[1:46](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=106)** Now I want to store this as a variable so we can reuse it.
>
> **[1:50](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=110)** I'll call it BBbox Multnomah.
>
> **[1:55](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=115)** But I want to show that this object isn't a named list.
>
> **[1:58](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=118)** If I type BBbox Multnomah, and in a dollar I can't access xmin or any of the other values.
>
> **[2:06](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=126)** So I'm going to turn this into a list by piping it into as dot list.
>
> **[2:14](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=134)** And now if I type a dollar after it, I can easily extract the name components of the bounding box.
>
> **[2:20](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=140)** And we can use this, which you do part two.
>
> **[2:22](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=142)** So I will copy all of our visualization code up here.
>
> **[2:27](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=147)** I'll paste it down here.
>
> **[2:29](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=149)** And what I'm going to do is I'm going to change the bounds of coord SF.
>
> **[2:35](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=155)** So we'll add coord SF here, coord SF.
>
> **[2:43](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=163)** We'll add a plus.
>
> **[2:44](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=164)** So I don't forget it.
>
> **[2:46](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=166)** And we'll specify xlim as C BBbox Multnomah xmin
>
> **[2:58](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=178)** and xmax and we'll do exactly the same for ylim
>
> **[3:19](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=199)** and we'll run that visualization code.
>
> **[3:22](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=202)** And now you can see that we've zoomed in on Multnomah.
>
> **[3:25](https://www.linkedin.com/learning/creating-maps-with-r/zoom-into-regions-with-coords-sf?u=76281980&t=205)** We're not only seeing Multnomah County itself but we're also seeing counties that touch it so we can see more of the coastline and give us context for where we are in the state of Oregon.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), static (1), function (1), this, (1)
> **Analogies:** for instance (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - sometimes (1)

#### Transform CRS with coord_sf()
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=0)** - [Instructor] Sometimes when you create a map duty plot two your immediate reaction will be some level of confusion.
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=7)** The frequency of his confusion is directly correlated with how often you're visualizing countries or other data sets that span the international dateline or 180 degree meridian line.
>
> **[0:19](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=19)** To fix these issues and make meaningful Gigi product two maps you'll need to use a different coordinate preference system.
>
> **[0:26](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=26)** To demonstrate this, let's look at the New Zealand R script in the 0406B project.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=31)** I'll load our packages and our data sets by running lines one through 16 and line 18 through 24, we're going to build a geo bubble chart of the largest cities in New Zealand.
>
> **[0:43](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=43)** And we can see, this is very confusing to read.
>
> **[0:46](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=46)** We have some in New Zealand at far right hand side of our visualization and some of it on the far left.
>
> **[0:52](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=52)** What we need is a CRS designed for this data set.
>
> **[0:55](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=55)** And specifically we want this CRS designed by the New Zealand government which I found on the EPSG IO website.
>
> **[1:03](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=63)** I'm going to copy the EPSG code 2193 to my clipboard so I can use it over in our studio.
>
> **[1:10](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=70)** To change the coordinate reference system, we need to add a plus and add the function cohort SF and then we can specify the CRS argument.
>
> **[1:21](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=81)** And because our CRS has an EPSG code we can provide just for code.
>
> **[1:25](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=85)** And now if we rerun our code we get a much more meaningful visualization because our data is no longer spanning two sides of our data visualization.
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=95)** However, it's still a little bit difficult to read.
>
> **[1:37](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=97)** There are lots of small islands in New Zealand.
>
> **[1:39](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=99)** We can remove those using a function from the R map shaper package.
>
> **[1:44](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=104)** So let's go up here and we'll do library R map shaper.
>
> **[1:50](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=110)** And what we're going to do is we're going to wrap New Zealand SF in the function, MS Filter islands, and brackets around that data set.
>
> **[2:03](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=123)** And then we'll add a second argument, 1E8 and we'll rerun that.
>
> **[2:12](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=132)** And that's going to filter out islands which are smaller than one times 10 to the eight meters square.
>
> **[2:18](https://www.linkedin.com/learning/creating-maps-with-r/transform-crs-with-coord-sf?u=76281980&t=138)** And now we've got a much better looking data visualization of the larger cities in New Zealand.

> [!info]- Semantic Content
>
> **Env Vars:** crs (4), epsg (3)
> **Code Keywords:** function (3), let (2), this, (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Label a geobubble chart of Germany's biggest cities
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/challenge-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=0)** - [Instructor] For this challenge, I would like you to use {ggplot2} to create a geo bubble chart showing the five largest cities in Germany.
>
> **[0:12](https://www.linkedin.com/learning/creating-maps-with-r/challenge-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=12)** I'd also like you to use the {ggrepel} package to label both the smallest and largest city.
>
> **[0:18](https://www.linkedin.com/learning/creating-maps-with-r/challenge-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=18)** I'd like you to format the legend labels to read 3 million instead of 3 and 6 zeroes following.
>
> **[0:25](https://www.linkedin.com/learning/creating-maps-with-r/challenge-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=25)** And I would also like you to set the capital city to gold and all other cities to purple.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Label a geobubble chart of Germany's biggest cities
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=0)** (techno music)
>
> **[0:04](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=4)** - Let's start solving this challenge by running the code that I've already given you.
>
> **[0:08](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=8)** So, let's run lines 15 through 1.
>
> **[0:12](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=12)** It's going to load our packages and define our data sets and then line 18 through 21, I'm starting off the visualization.
>
> **[0:19](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=19)** We've just border of Germany.
>
> **[0:21](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=21)** So, let's add our German cities with geom_sf, add a plus, so I don't forget it.
>
> **[0:28](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=28)** Go back inside of brackets, and add data is equal to germany_cities.
>
> **[0:35](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=35)** So that makes us a geo scatter plot but we want this to be a geo bubble chart, so let's add aes, size is going to be equal to the pop column.
>
> **[0:47](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=47)** And so now that's a geo bubble chart.
>
> **[0:50](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=50)** Our next part of the challenge is to label for cities in a map.
>
> **[0:54](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=54)** So we're going to use the "ggrepel" package for that.
>
> **[0:57](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=57)** But remember, ggrepel doesn't know how to work with SF objects, so, we need to turn Germany cities into a data frame.
>
> **[1:06](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=66)** We start that process by taking germany_cities and piping it into st_drop_geometry.
>
> **[1:15](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=75)** That's going to drop the geometry component of the SF object, and then we need to bind it together, using bind_cols with the st_coordinates of our germany_cities object.
>
> **[1:30](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=90)** And now that gives us a data frame with all the information that we need for geom_label_repel.
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=95)** So, let's store that as germany_cities_df and we'll add another layer geom_label_repel, I'll a plus at the end.
>
> **[1:49](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=109)** And we'll add data is equal to germany_cities_df.
>
> **[1:53](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=113)** We need to specify our aesthetics, So x is going to be capital X, y is going to be capital Y, and label is going to be equal to pop.
>
> **[2:04](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=124)** That's not what the label should be (laughs), the label should be the name of the city.
>
> **[2:08](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=128)** So, we'll go with name.
>
> **[2:12](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=132)** There we go.
>
> **[2:13](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=133)** Now, I did say I wanted to label only the largest and the smallest city.
>
> **[2:18](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=138)** So we're going to go back to germany_cities_df, and we're going to use slice to slice off just the first row and our last row with the function N.
>
> **[2:29](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=149)** So I'll rerun lines 17 through 20 and 22 through 31.
>
> **[2:35](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=155)** There we go.
>
> **[2:36](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=156)** So now I've got just Berlin and Frankfurt loaded.
>
> **[2:39](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=159)** The next part of the challenge was to improve the labels in the size legend.
>
> **[2:45](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=165)** So, I wanted to remove all those zeros and format this as 3 million.
>
> **[2:50](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=170)** So, I'm going to go and get scale_size_area, I'll add a plus at the end, and then I'm going to use labels and we'll use a function from the "scales" package called number_format.
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=189)** And we'll rescale the numbers by 1E-6.
>
> **[3:14](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=194)** And if I run that code, we can see we get 3.0 instead of three and all those zeros.
>
> **[3:20](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=200)** So now let's add a suffix... of " Million".
>
> **[3:26](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=206)** And now the last thing for us to do is to change the color of our points.
>
> **[3:32](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=212)** So, I'm going to go into geom_sf and I'm going to change the shape to 21.
>
> **[3:42](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=222)** So that's going to give each of the cities both a border and a fill color.
>
> **[3:48](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=228)** So, I'm going to go inside of aes and I'll add fill is equal to capital Because capital is a numeric column, it's creating us a continuous fill scale, which doesn't make sense for this data.
>
> **[4:04](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=244)** So we're going to use as.logical around capital.
>
> **[4:11](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=251)** There we go.
>
> **[4:12](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=252)** And we're going to go into here and we'll change the fill scale as well.
>
> **[4:17](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=257)** So I'll use scale_fill_manual, add a plus again, and inside of here, we're going to specify our values.
>
> **[4:28](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=268)** So I'm going to say that, "TRUE" should be gold for the capitol city, and "FALSE" should be purple for all the other cities.
>
> **[4:42](https://www.linkedin.com/learning/creating-maps-with-r/solution-label-a-geobubble-chart-of-germany-s-biggest-cities?u=76281980&t=282)** And that's our map.

> [!info]- Semantic Content
>
> **Code Identifiers:** germany_cities (3), germany_cities_df (3), geom_sf (2), geom_label_repel (2), st_drop_geometry (1)
> **Code Keywords:** let (6), function (2)
> **Env Vars:** true (1), false (1)
> **CLI Commands:** make (1)
> **Versions:** 3.0 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)

#### Challenge: Visualize state coastline length with choropleth
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualize-state-coastline-length-with-choropleth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualize-state-coastline-length-with-choropleth?u=76281980&t=0)** - [Narrator] For this challenge, I would like you to use ggplot2 to create a continuous variable choropleth, showing a number of kilometers of coastline for each state in a continuous United States of America.
>
> **[0:16](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualize-state-coastline-length-with-choropleth?u=76281980&t=16)** I'd like you to use the vividest color palette for the fill scale.
>
> **[0:19](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualize-state-coastline-length-with-choropleth?u=76281980&t=19)** And I would like you to also improve the readability of the legend by adding commas between the thousand mark.
>
> **[0:26](https://www.linkedin.com/learning/creating-maps-with-r/challenge-visualize-state-coastline-length-with-choropleth?u=76281980&t=26)** Finally, I would like you to add a legend item for the NA regions using a synthetic aesthetic.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Visualize state coastline length with choropleth
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=0)** - [Instructor] Okay, so let's start solving this challenge by opening the script in the 04_10b project.
>
> **[0:10](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=10)** Going to load my packages on lines one through five.
>
> **[0:14](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=14)** Line seven through 12, we're going to obtain shape files for the contiguous United States.
>
> **[0:20](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=20)** Line 15 we'll read in a dataset.
>
> **[0:23](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=23)** Lines 17 through 19, we're going to join those two data sets together.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=27)** I just want to print this to the console so you can see it's an SF object.
>
> **[0:32](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=32)** And there's a column called KM of coastline that tells us how many kilometers of coastline each state has.
>
> **[0:38](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=38)** And notice many of the states have NA values.
>
> **[0:42](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=42)** So I've started our data visualization off, on lines 22 through 24.
>
> **[0:47](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=47)** But what we want to do is turn this into an actual choropleth, by varying the color of each of the regions.
>
> **[0:53](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=53)** So I'm going to add a comma, AES, fill is equal to KM of coastline.
>
> **[1:04](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=64)** And what ggplot2 does, is it sees our numeric column and it creates a default continuous fill scale, using dark blue to light blue.
>
> **[1:13](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=73)** It's not the best scale in the world.
>
> **[1:15](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=75)** The scale that I wanted you to use in a challenge and that I recommend that you use for all continuous variable choropleth is viridis, which we're going to add here.
>
> **[1:25](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=85)** So scale, fill, viridis, and we'll go with viridis C for continuous.
>
> **[1:31](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=91)** We'll make sure to put a plus at the end of line 25.
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=95)** And now if we run that code we've solved the first part of the challenge.
>
> **[1:39](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=99)** The second part of the challenge is to improve the formatting of the labels in the legend, which we'll do with the same scale fill function.
>
> **[1:47](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=107)** So we're going to add labels and we need to use a function from the scales package called number format.
>
> **[1:57](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=117)** And we're going to set big dot mark is equal to comma, and that solves the second part of our challenge.
>
> **[2:05](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=125)** Our legend is now much easier to read.
>
> **[2:08](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=128)** What I want to do now, is color the NA regions pink and to add a legend item for those NA values.
>
> **[2:15](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=135)** So, I'll change the color of the regions first by adding NA dot value is equal to pink, and now we need to add a synthetic aesthetic for new legend item to appear.
>
> **[2:29](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=149)** So I'll go inside of AES, I'll add a comma, and we'll use the shape aesthetic for our synthetic aesthetic and I'll call this zero KM of coastline.
>
> **[2:43](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=163)** That's quite long.
>
> **[2:44](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=164)** So let's add a new line here with back slash N.
>
> **[2:51](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=171)** Okay.
>
> **[2:52](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=172)** So now I want to customize the appearance of a synthetic aesthetic, which we do with the guides function.
>
> **[2:59](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=179)** So I'm going to add guides here with a plus at the end, so I don't forget it.
>
> **[3:04](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=184)** And we're going to go and affect the shape guide.
>
> **[3:08](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=188)** So shape equals guide, legend, and we'll use override AES to override the scale that ggplot2 is using.
>
> **[3:20](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=200)** We'll provide it with a list, and we'll say that the fill should be equal to pink.
>
> **[3:25](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=205)** Now, I also want to get rid of the title for that legend.
>
> **[3:29](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=209)** So I'm going to add title is equal to null.
>
> **[3:33](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=213)** I think that this looks better if the NA legend is the bottom.
>
> **[3:38](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=218)** So what we need to do, is we need to specify the order.
>
> **[3:42](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=222)** So we say order two, but the order argument only works if it's provided for all scales.
>
> **[3:49](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=229)** So, I'll go back inside the guides, and I'll specify fill is equal to guide color bar because I want to keep the continuous color bar, and I'm going to set order is equal to one.
>
> **[4:03](https://www.linkedin.com/learning/creating-maps-with-r/solution-visualize-state-coastline-length-with-choropleth?u=76281980&t=243)** And that's how we can create a continuous variable choropleth, and add a synthetic variable for an NA legend item.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), override (2)
> **Env Vars:** aes (3)
> **Best Practices:** make sure to (1), don't forget (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Interactive Maps with Leaflet

> [↑ Back to Table of Contents](#table-of-contents)

#### The basics of using Leaflet
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=0)** - [Narrator] Leaflet is an awesome R package that allows us to build interactive maps using just R code.
>
> **[0:05](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=5)** How is this possible?
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=7)** Well, the Leaflet package is an example of an HTML widget package.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=11)** HTML widget packages wrap JavaScript libraries, in this case Leaflet, and allow us to use those JavaScript libraries writing only R code.
>
> **[0:20](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=20)** The interactive maps that you build with Leaflet can be inserted into R Markdown documents, and into Shiny apps.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=27)** If you want to learn more about HTML widgets in general, then I have a course dedicated to this topic, that covers Leaflet and four other HTML widget packages.
>
> **[0:36](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=36)** But let's look at the basics of using Leaflet.
>
> **[0:38](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=38)** So I've opened the script in the "05_01b Project", and I'm going to run the code on Line 7, through 1.
>
> **[0:46](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=46)** And we'll start our Leaflet map with the Leaflet function, which gives us a gray rectangle with plus and minus buttons for zooming into our map when we add additional layers.
>
> **[0:56](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=56)** And the first layer I'm going to add, is with the "addProviderTiles" function.
>
> **[1:02](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=62)** This function allows me to add basemaps.
>
> **[1:04](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=64)** All of the basemaps are available inside of the "providers" object.
>
> **[1:08](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=68)** So if we type "providers" and "$", we see these named "provider" tiles.
>
> **[1:14](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=74)** This website allows you to interactively compare the different basemaps available.
>
> **[1:18](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=78)** I've zoomed in on my home city of Bristol, with the default "OpenStreetMap.Mapnik".
>
> **[1:24](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=84)** And I just wanted to compare two different basemaps.
>
> **[1:28](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=88)** "Thunderforest.Transport", which shows the human information for transport links in a city.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=93)** If I scroll down to "Thunderforest.Landscape", that's going to include additional physical geometry in the form of contour lines.
>
> **[1:41](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=101)** So now I'm back inside of R studio.
>
> **[1:44](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=104)** Let's go and use one of the Shapefiles from Esri.
>
> **[1:48](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=108)** I'm going to use "WorldPhysical".
>
> **[1:52](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=112)** There, we've got basemaps added to our map.
>
> **[1:54](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=114)** What I want to do now is, I want to add the outlines of the countries in the "world_sf" dataset.
>
> **[2:00](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=120)** So.
>
> **[2:01](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=121)** We'll pipe this, into "addPolygons".
>
> **[2:05](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=125)** Data is equal to "world_sf".
>
> **[2:09](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=129)** Now the defaults for Leaflet are fairly ugly.
>
> **[2:11](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=131)** The lines in a map are too thick, and the colors aren't great, but we're focusing on the basics of using the package here.
>
> **[2:19](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=139)** I wanted to show you how we would access columns in our dataset.
>
> **[2:22](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=142)** So let's say I wanted to label each of the countries, when I hover over the country.
>
> **[2:27](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=147)** I'm going to add the argument "label", and I'm going to give the name of the column, "name".
>
> **[2:35](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=155)** And I get an error message, "object 'name' not found".
>
> **[2:39](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=159)** This is because in a Leaflet package, we do not use naked column names.
>
> **[2:43](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=163)** We need to use tildes.
>
> **[2:45](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=165)** So if I put a tilde here, and now I hover it over Antarctica, you can see I get a label.
>
> **[2:51](https://www.linkedin.com/learning/creating-maps-with-r/the-basics-of-using-leaflet?u=76281980&t=171)** And that's everything that you need to know in order to start using the Leaflet package.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), this, (1)
> **Code Identifiers:** world_sf (2), addprovidertiles (1), addpolygons (1)
> **Env Vars:** html (4)
> **Definitions:** is an  (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### Use Leaflet to visualize geo locations
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=0)** - Let's use leaflet to visualize geolocation using the script in the 05_02b project.
>
> **[0:06](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=6)** I'm going to run lines 15 through to one.
>
> **[0:09](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=9)** So that's going to load our packages and define our two data sets.
>
> **[0:13](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=13)** And line 17 through 23, I've started our map off, which is going to include just a border for Brazil.
>
> **[0:22](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=22)** Let's start with a geo marker plot.
>
> **[0:24](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=24)** So let's add a pipe at the end of line 23, and we'll type addMarkers.
>
> **[0:30](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=30)** We'll add the data argument, and we will provide brazil_cities.
>
> **[0:37](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=37)** And that adds our locations as teardrop icons that you'll be familiar with from services like Google Maps.
>
> **[0:44](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=44)** There's not much that we can do to customize these maps, so let's swap this geo marker plot for geo scatter plot by changing addMarkers into addCircleMarkers.
>
> **[0:56](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=56)** So these circles both have a fill color and they have a border as well.
>
> **[1:01](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=61)** Let's change the width of the border, which is currently quite wide, by adding the argument, weight is equal to one.
>
> **[1:10](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=70)** Let's change the fill color to be purple, and the border color to be black.
>
> **[1:20](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=80)** The default opacity for all layers and leaflet is set really quite low.
>
> **[1:24](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=84)** So let's increase that with the argument, fillOpacity.
>
> **[1:30](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=90)** Now, many of these cities overlap with one another.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=93)** In a static map created with ggplot2, we could use the ggrepel package to label these cities.
>
> **[1:39](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=99)** But because this is an interactive map, we could add labels to these cities.
>
> **[1:43](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=103)** So let's add the argument, label is equal to.
>
> **[1:48](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=108)** And we want to access the name, column for the Brazil city's data set.
>
> **[1:53](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=113)** So we type a tilda and then name.
>
> **[1:56](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=116)** Now, when we hover over each of these circles, it tells us which city we're in.
>
> **[2:01](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=121)** And if we zoom in, it gives us a much better idea of where each of these cities is.
>
> **[2:07](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=127)** Now, what I'd like to do is I'd like to color the cities depending on whether they're the capital city or not.
>
> **[2:12](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=132)** Let's take a look at the data set first.
>
> **[2:15](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=135)** So if I print brazil_cities to the console, then we can see there's a column called capital, which is either zero or one.
>
> **[2:24](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=144)** It's quite hard in a leaflet package itself to customize how zero and one appears.
>
> **[2:30](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=150)** So let's, in a data set, create a new column that contains either Capital City or City.
>
> **[2:36](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=156)** So add a few more lines here, and I'll get brazil_cities.
>
> **[2:42](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=162)** I'll pipe it into mutate for creating new columns, and we'll create a column called city_type.
>
> **[2:48](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=168)** And we'll use the function ifelse.
>
> **[2:51](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=171)** So if capital is equal to one, then we're going to have Capital City in a column; otherwise, just City.
>
> **[3:01](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=181)** And if I print that to the console, you can see that we've got City in a city_type column except for row six, which is the Capital City.
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=189)** So let's update our definition for brazil_cities.
>
> **[3:16](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=196)** And we now need to create a palette for our city color.
>
> **[3:20](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=200)** So let's call that pal_city_type.
>
> **[3:25](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=205)** And we'll use the function, colorfactor.
>
> **[3:28](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=208)** And in the first argument, we need to specify our palette.
>
> **[3:32](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=212)** So I want gold for the Capital City, and purple for all other cities.
>
> **[3:38](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=218)** And in the second argument, we specify the domain for our palette, the possible values.
>
> **[3:43](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=223)** And in this instance, I'm going to give those values here as a vector Capital City and City.
>
> **[3:53](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=233)** I'll run that code on line 20.
>
> **[3:56](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=236)** Then, we'll go down to line 31 and replace the string purple with ~pal_city_type and the city_type column.
>
> **[4:07](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=247)** Now, we need to add a legend to this geo scatter plot.
>
> **[4:10](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=250)** So let's go to the end of our chart code, add another pipe, and type addLegend.
>
> **[4:18](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=258)** Data is equal to brazil_cities.
>
> **[4:23](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=263)** Pal is equal to pal_city_type.
>
> **[4:28](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=268)** And the values column is ~city_type.
>
> **[4:33](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=273)** So that adds us a legend.
>
> **[4:35](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=275)** Now the legend, just like the markers, have low default opacity.
>
> **[4:39](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=279)** So I'll go into here and add opacity is equal to one.
>
> **[4:44](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=284)** Now, we might want to try to create a geo bubble chart with leaflet, but I'm going to show you that it doesn't work very well.
>
> **[4:51](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=291)** So I'm going to go to line 34, and I'm going to add the argument, radius is equal to.
>
> **[4:57](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=297)** Now, I'll add a comma so I don't forget it.
>
> **[5:00](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=300)** And then we're going to use a tilda, and we will use a function from the scales package called rescale.
>
> **[5:08](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=308)** So we will attempt to rescale the pop column to be between one and 10.
>
> **[5:14](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=314)** And we can see that this appears to have worked.
>
> **[5:17](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=317)** So the cities do vary in size now, but with an interactive map, users are going to want to zoom in.
>
> **[5:23](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=323)** And as they zoom in, the ratios of the size of these bubbles changes.
>
> **[5:28](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=328)** So unfortunately, with an interactive map built with leaflet, we can't create a geo bubble chart.
>
> **[5:34](https://www.linkedin.com/learning/creating-maps-with-r/use-leaflet-to-visualize-geo-locations?u=76281980&t=334)** However, as you've seen, it's fairly easy to create both geo marker and geo scatter plots.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (3), static (1)
> **Code Identifiers:** brazil_cities (5), city_type (4), pal_city_type (3), addmarkers (2), addcirclemarkers (1)
> **UI Navigation:** go to (2)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - let (1)

#### Add labels and pop-ups to Leaflet maps
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=0)** - [Instructor] Interactive maps are really awesome because they allow us to provide additional information to readers when they interact with the map.
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=7)** In a leaflet package we have two different ways to add this kind of information with labels and popups.
>
> **[0:14](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=14)** Labels appear when a user hovers their cursor over a feature in a map, whereas popups show when a user deliberately clicks a feature in a map.
>
> **[0:22](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=22)** These kinds of interactions were all built decades before touchscreen devices were even a consideration.
>
> **[0:28](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=28)** Today, we need to think about how the interactive maps we build will work on mobile devices.
>
> **[0:34](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=34)** There simply is no difference on a touchscreen between hovering or clicking a map.
>
> **[0:39](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=39)** The simplest advice I can give you is to avoid combining both labels and popups in the same leaflet map.
>
> **[0:47](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=47)** It's also important to note that you can only customize the appearance of popups with HTML.
>
> **[0:52](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=52)** It's not possible to do so with hover labels in the leaflet package.
>
> **[0:57](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=57)** Let's open the script in the 05_03b project and let's run everything from lines 36 all the way through to line one.
>
> **[1:07](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=67)** That's going to load our package, define our two data sets and create this geo scatter plot.
>
> **[1:13](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=73)** So the first thing that I want to do is I want to show you how to add a label.
>
> **[1:17](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=77)** So I'm going to go inside of add circle markers, I'll add the argument label and then a leaflet package if we want to access a column from our data set we need to use a tilde.
>
> **[1:30](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=90)** So I would type ~name and now when I hover over these cities it tells me the name of the city.
>
> **[1:39](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=99)** But what I would like to do is add a popup that shows me both the name and the population of the city.
>
> **[1:45](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=105)** So what we're going to do is create a user defined function for building our label.
>
> **[1:50](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=110)** So let's add a few lines here at line 19 and we'll create a function called label_city_pop, we'll use the function function and we'll specify our two arguments, so that's going to be city name and population.
>
> **[2:11](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=131)** And then in the body of our function we're going to start using the function paste and we'll start by simply pasting together city_name and population.
>
> **[2:28](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=148)** I'll define my function by running the code from lines 21 through 25, let's go down to line 40 and replace label with popup.
>
> **[2:41](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=161)** We'll provide the name of our function label_city_pop, the city name column, which is name and a population column which is pop.
>
> **[2:53](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=173)** And now if I click on one of these cities, I can see the name of the city and the population.
>
> **[2:58](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=178)** I'm going customize this so it looks more attractive and more informative to the reader.
>
> **[3:03](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=183)** So the first thing I'm going to do is to add a new line in our popup.
>
> **[3:08](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=188)** So I'll going into here and I'll add a couple of new lines so it's easier to read the code, but they're not necessary for the code to work.
>
> **[3:17](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=197)** And what I'm going to do is I'm going to insert HTML tag br which stands for a line break, I'll redefine my function and let's rerun our map and now we've got the city name and population on separate lines.
>
> **[3:35](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=215)** Let's tidy this up a little bit more.
>
> **[3:38](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=218)** So let's add a comma here and we're going to type city with a colon and before here, we'll add a comma and we'll type population.
>
> **[3:52](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=232)** I'll redefine my function and rerun the code for the charts.
>
> **[3:57](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=237)** Now it's quite nice to make city and population bold and this also allows me to demonstrate we can use any HTML we like in a popup.
>
> **[4:05](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=245)** So I'm going to go here and add the b tag and the corresponding close and b tag here.
>
> **[4:12](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=252)** I'll do that for population as well, I'll redefine the function and I'll rerun our visualization code.
>
> **[4:25](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=265)** Okay, the last thing for us to do with this popup is to format the number.
>
> **[4:30](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=270)** It's quite hard to interpret this number, so let's use the number function from the scales package.
>
> **[4:36](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=276)** So go back into line 25, we'll type scales::number,
>
> **[4:44](https://www.linkedin.com/learning/creating-maps-with-r/add-labels-and-pop-ups-to-leaflet-maps?u=76281980&t=284)** add a closing bracket here and what we're going to do is we're going to do a big_mark comma, I'll redefine the function and run all of the visualization code again and now we've got a much easier to read popup.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), let (8), break, (1)
> **Code Identifiers:** label_city_pop (2), city_name (1), big_mark (1)
> **Env Vars:** html (3)
> **UI Navigation:** open the (1), click on (1)
> **CLI Commands:** make (1)
> **Definitions:** stands for (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Leaflet choropleth and continuous data
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=0)** - Let's use leaflet to create a continuous variable core cliff using the script in 0 5 0 4 B project.
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=7)** We'll start by running all of the code from lines 12 through to 1.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=11)** So that's going to load our packages reading our two data sets and join them together with left join and that's on line 15 start our leaflet map.
>
> **[0:20](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=20)** As we always do with the function leaflet.
>
> **[0:24](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=24)** We'll pipe that into add polygons.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=27)** We'll specify the data argument and we'll provide London school leavers SF.
>
> **[0:37](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=37)** Now we get an error message.
>
> **[0:38](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=38)** When we do this, it says SF layer is not long lat data and our map definitely doesn't look like London.
>
> **[0:44](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=44)** This is because in leaflet we can only visualize SF objects that are in geographic coordinate reference systems.
>
> **[0:51](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=51)** Let's see what the issue is here by printing out object to a console.
>
> **[0:58](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=58)** So if I scroll up in a console, you can see this is in a projected CRS, not a geographic CRS.
>
> **[1:05](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=65)** So we're going to add a pipe here and a function ST Transform. We specify CRS 4, 3, 2, 6, we'll rerun that code.
>
> **[1:16](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=76)** And now if I print this object to a console you can see this is now in a geodetic or geographic CRS.
>
> **[1:24](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=84)** This means that our map will now work.
>
> **[1:26](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=86)** So our run line 16 through 17 and we can see the distinctive shape of London.
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=92)** Let's tidy this map up a little bit by changing the width of the lines.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=96)** So I'll add weight as equal to one and I'll specify the color is equal to black.
>
> **[1:44](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=104)** I now want to create a pallet for my core plef.
>
> **[1:47](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=107)** So let's add a few lines here and let's create a pallet called pal school leavers.
>
> **[1:57](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=117)** And if I start typing color you can see there are four functions from the leaflet package, color bin, factor, numeric and quantile all four of these except for factor can be used for numeric variables and all have the same syntax.
>
> **[2:12](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=132)** So you can experiment with all three of these.
>
> **[2:14](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=134)** I'm going to go with color numeric.
>
> **[2:17](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=137)** And in a first argument, we need to specify our pallet.
>
> **[2:20](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=140)** I'm going to recommend that we use the viridis pallet.
>
> **[2:24](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=144)** And in a second argument, we need to specify the range of values that can exist within our Pallet. The easiest way to do that is to take our data set, London school leavers SF, and to type a dollar and the name of the column value.
>
> **[2:41](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=161)** Now, if I define our pallet on line 16, and let's go to line 22 add a comma, let's add fill, color is equal to Tilda because we're going to be accessing named columns from our data set.
>
> **[2:56](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=176)** Pal school leavers value Fees are very washed out colors.
>
> **[3:02](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=182)** So let's increase the fill opacity.
>
> **[3:06](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=186)** So fill opacity is equal to one.
>
> **[3:11](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=191)** And I want you to notice in the middle of this map, there's one gray boer.
>
> **[3:16](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=196)** This is the city of London and it's unlike all of the Boers in London.
>
> **[3:20](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=200)** This data, the number school leavers under the age of 16 has not been recorded for this Boer.
>
> **[3:26](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=206)** You'll often find this in maps that you are producing but you have NA regions, and you'll want to ensure that they are colored and labeled appropriately.
>
> **[3:36](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=216)** So what we need to do is we need to go back into our palette and specify an NA value color.
>
> **[3:43](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=223)** So let's go here and let's add NA dot color.
>
> **[3:49](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=229)** I'll add a new line here.
>
> **[3:50](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=230)** So it's easier to see, and let's color that pink.
>
> **[3:55](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=235)** I'll rerun that code, and I'll rerun line 20 for 25.
>
> **[4:00](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=240)** And now we can see our pink region here.
>
> **[4:03](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=243)** Now, what I want to do is I want to add a legend to this map so that readers will actually know what these colors mean.
>
> **[4:09](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=249)** So let's add a pipe at the end of line 25.
>
> **[4:12](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=252)** We'll add, add legend.
>
> **[4:15](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=255)** We need to specify the data set.
>
> **[4:18](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=258)** So that's London school leavers SF again.
>
> **[4:21](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=261)** We need to specify the pallet, which is pal school leavers.
>
> **[4:29](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=269)** The value argument is the column from which we're going to extract values.
>
> **[4:33](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=273)** So that's going to be the value column and let's run that code.
>
> **[4:40](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=280)** And we can see that we have ourselves a fairly meaningful legend.
>
> **[4:45](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=285)** Now the colors are washed out again.
>
> **[4:46](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=286)** So let's increase opacity.
>
> **[4:48](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=288)** So we're going to go to opacity one and also the title of this legend could be improved.
>
> **[4:55](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=295)** So let's change that to title school leavers 16 or under, and let's also change for NA items.
>
> **[5:07](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=307)** So instead of NA, it's going to say city of London or it could say data not recorded.
>
> **[5:12](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=312)** Let's go and add the argument, NA dot label, City of London.
>
> **[5:21](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=321)** And unfortunately, leaflet does this thing where if the NA item doesn't look very attractive, it line breaks in a really inconvenient way.
>
> **[5:29](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=329)** So what I've provided for you is some HDML to fix this in order to use this HDML, we need to store our leaflet map as an object.
>
> **[5:39](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=339)** So let's call this, I've got the name of it here.
>
> **[5:42](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=342)** I'll copy that to the clipboard.
>
> **[5:44](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=344)** I'll paste it here and add the assignment to operator.
>
> **[5:48](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=348)** I'll run that code.
>
> **[5:50](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=350)** And now if we run these four lines of code we now have our NA legend item added to the bottom of our legend and it's just much easier for readers to understand what's happening in that legend.
>
> **[6:04](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=364)** And remember that you can experiment with the different types of numeric palettes.
>
> **[6:08](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-continuous-data?u=76281980&t=368)** So if you wanted to change this to color bin then I could simply swap this to color bin and rerun all of the code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), function (2), this, (2)
> **Env Vars:** crs (4), hdml (2)
> **UI Navigation:** scroll up (1), go to (1)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Speakers:** - let (1)

#### Leaflet choropleth and discontinuous data
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=0)** - Let's use Leaflet to create choropleth of discreet variables using the script in the O-5-O-5-B project.
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=7)** Let's start by running the script from lines 20 through to 1.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=11)** So that's going to load our packages.
>
> **[0:14](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=14)** It's going to obtain ship files for the contiguous United States and it's going to join those together on line 18 through 20.
>
> **[0:22](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=22)** Then lines 22 through 29, I'm defining a custom color palette using a named vector and lines 31 through 33 I've started off our choropleth.
>
> **[0:34](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=34)** So if I run that code we get the outline of the contiguous United States.
>
> **[0:39](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=39)** Now I'm going to improve this map right away by changing the width of the lines.
>
> **[0:44](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=44)** So I'll add weight is equal to one and now I need to create a fill pallet for my choropleth.
>
> **[0:51](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=51)** So I'll add a couple of new lines here and let's create my pallet.
>
> **[0:56](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=56)** So I'll call it pal popular pet and I'll use the function color factor.
>
> **[1:06](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=66)** Color factor allows us to provide named palettes.
>
> **[1:08](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=68)** And it also allows us to create our own custom palettes using named factors.
>
> **[1:13](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=73)** So let's give colors pets here and I'll add a comma and we need to add the domain argument.
>
> **[1:20](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=80)** This is the range for allowable values for the pallet and the easiest way to fill this is to use for dataset U.S. most popular pets, dollar, and the name of the column.
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=92)** So that's the pet column.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=93)** So let's run line 32 and let's go down to line 38 and let's add fill color is equal to tilde pal popular pet pet.
>
> **[1:48](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=108)** So these colors very washed out.
>
> **[1:49](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=109)** So we'll improve that by adding the argument fill opacity is equal to one and let's also add a legend to this map.
>
> **[2:00](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=120)** So I'll use add legend, specify the data set as U.S. most popular pets.
>
> **[2:07](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=127)** Will add a new argument, pal is equal to, and the name of the palette.
>
> **[2:13](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=133)** So that's pal popular pet and then values is equal to tilde and the name of the column.
>
> **[2:23](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=143)** Now the opacity for the legend is also set quite low.
>
> **[2:25](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=145)** So let's set that as one.
>
> **[2:28](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=148)** So opacity is equal to one.
>
> **[2:32](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=152)** So now we have a choropleth with our legend.
>
> **[2:35](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=155)** Now the legend is ordered alphabetically.
>
> **[2:37](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=157)** So it goes from bearded dragon down to sugar glider.
>
> **[2:39](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=159)** And then the NA value is appended at the end of the legend.
>
> **[2:44](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=164)** It'll be much easier you to read if this legend ordered the pets from most to least popular.
>
> **[2:50](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=170)** So guinea pig should be at the top and hamster should be at the bottom.
>
> **[2:54](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=174)** To do that I'm going to make use of the count function.
>
> **[2:57](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=177)** So let's go to the top of our script and add a couple of new lines here.
>
> **[3:03](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=183)** Let's take most popular pets pipe it into the count function.
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=189)** We'll count the pet column and we'll add the sort is equal to true argument.
>
> **[3:16](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=196)** So that's going to sort our data set for most to least popular pet.
>
> **[3:20](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=200)** And I want to extract out that column as a vector using the pole function.
>
> **[3:26](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=206)** So that's now the most popular pets as a vector.
>
> **[3:29](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=209)** Let's store that as order popular pets.
>
> **[3:36](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=216)** Now I need to make use of this vector in two places.
>
> **[3:39](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=219)** I need to reorder my column in a data set and I also need to reorder the colors in my named vector.
>
> **[3:47](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=227)** So to do the first part of that, to reorder my column I need to go down to line 25, add a pipe and we'll use the function mutate.
>
> **[3:59](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=239)** We'll mutate the pet column with fact re level.
>
> **[4:04](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=244)** So we'll re level the existing pet column by the order, popular pets vector.
>
> **[4:11](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=251)** So I'll run that code again and let's go down here.
>
> **[4:16](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=256)** I'll add another new line.
>
> **[4:18](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=258)** I'll take colors, pets and then I'll use square brackets to reorder this named vector by the vector order, popular pets.
>
> **[4:29](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=269)** So that's now ordered from guinea pig through to hamster.
>
> **[4:32](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=272)** We'll update our definition for color pets.
>
> **[4:35](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=275)** And now we'll rerun all of our code from line to 51 through to 39.
>
> **[4:42](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=282)** And now our legend has been reordered for most popular to least popular pet.
>
> **[4:48](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=288)** Now we do still have this NA item in our legends.
>
> **[4:52](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=292)** And at the moment it doesn't look like there are any regions that have NA values.
>
> **[4:56](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=296)** However, the benefit of a leaflet map is we can zoom in.
>
> **[5:00](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=300)** So if I zoom in on the East Coast here we can see there is an NA region, which is the District of Columbia or more commonly known as Washington DC.
>
> **[5:10](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=310)** So what we could do is we could change the color for this NA item so we could make it we could make it dark blue, maybe.
>
> **[5:18](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=318)** So if I go into color factor and I'll add NA color is equal to dark blue, and if I want to change the legend item then I would go down into here I'll add a comma and I would type NA dot label.
>
> **[5:37](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=337)** So now I've got a choice.
>
> **[5:38](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=338)** I could label this as data not recorded or I could label it as the District of Columbia so that readers know that the NA region is the District of Columbia.
>
> **[5:49](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=349)** I think the most sensible option for this map is to go with data, not recorded.
>
> **[5:56](https://www.linkedin.com/learning/creating-maps-with-r/leaflet-choropleth-and-discontinuous-data?u=76281980&t=356)** And that's how we can use Leaflet to create a choropleth of a discrete variable with NA values.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (5)
> **CLI Commands:** make (4)
> **Definitions:** is an  (1), known as (1)
> **UI Navigation:** go to (1)
> **Speakers:** - let (1)

#### Set a background color with leaflet.extras
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=0)** - Oftentimes when building leaflet maps, you'll want to change the background, color of your map.
>
> **[0:05](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=5)** I've run the script in the 0506B project and it's generated me this fairly good looking, core plef of the US showing me the most popular pets, but aren't "dogs" or "cats" in each state, but the background color is "gray", and it doesn't look very attractive.
>
> **[0:23](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=23)** If we want to change the background color of a leaflet map we need to make use of, the leaflet extras package.
>
> **[0:30](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=30)** So I'm going to show you how to do that.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=31)** First of all, we need to load a package.
>
> **[0:34](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=34)** So we'll go to the top, and we'll call library leaflet dot extras.
>
> **[0:40](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=40)** So that's going to load a package, and now we need to go down here, to the end of our leaflet code.
>
> **[0:46](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=46)** And we'll pipe this into the function set map widget style.
>
> **[0:53](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=53)** and then we provide for style argument.
>
> **[0:56](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=56)** We can give it a list of values.
>
> **[0:58](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=58)** and what we are going to provide is background is equal to and let's go for light blue.
>
> **[1:05](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=65)** So we might want to make it look like the background is the ocean or we might want to change this to white.
>
> **[1:13](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=73)** We now have the flexibility to do that.
>
> **[1:15](https://www.linkedin.com/learning/creating-maps-with-r/set-a-background-color-with-leaflet-extras?u=76281980&t=75)** Thanks to the leaflet dot extras package for leaflet dot extras package also include several other functions for customizing and tweaking your maps.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** function (1), let (1)
> **UI Navigation:** go to (1)
> **Speakers:** - oftentimes (1)

#### Challenge: Add pop-up labels to a map of German cities
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/challenge-add-pop-up-labels-to-a-map-of-german-cities?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/creating-maps-with-r/challenge-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=5)** - [Instructor] For this challenge, I would like you to use leaflet to create a geo scatter plot showing the five largest cities in Germany.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/challenge-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=11)** I'd like you to fill the capital city as gold and all other cities as purple.
>
> **[0:16](https://www.linkedin.com/learning/creating-maps-with-r/challenge-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=16)** I'd also like you to add a pop-up to each of the circle markers, such that it shows both the city and the population.
>
> **[0:23](https://www.linkedin.com/learning/creating-maps-with-r/challenge-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=23)** Please ensure that the population number is formatted as shown in this slide.
>
> **[0:28](https://www.linkedin.com/learning/creating-maps-with-r/challenge-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=28)** And finally, I'd like you to add a white background to the map using the leaflet.extras package.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Solution: Add pop-up labels to a map of German cities
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=0)** - Let's start solving this challenge by opening the popup geoscatter dot R script in the 05_08b project.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=11)** And let's run the code from line 15 through to 1.
>
> **[0:15](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=15)** So that's going to load our packages and define our two data sets.
>
> **[0:19](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=19)** And I've started off our map on line 17 through 24.
>
> **[0:24](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=24)** So this is already a geoscatter plot.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=27)** The first thing that I want to do is I want to modify the fill color of each of the cities dependent on whether it's the capital or not.
>
> **[0:35](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=35)** Let's print germany_cities to the console so we can see what we're dealing with.
>
> **[0:40](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=40)** And we've got a column capital with either one or zero.
>
> **[0:44](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=44)** It's quite hard to customize how this appears in the leaflet map itself.
>
> **[0:49](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=49)** It's much easier to wrangle our code first.
>
> **[0:52](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=52)** So let's go here and add a few lines and I'm going to take germany_cities.
>
> **[1:02](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=62)** I'll pipe it into the function mutate and we'll create a new column called city_type which is what we'll use to change the fill of our circle markers.
>
> **[1:12](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=72)** So we will use ifelse so if capital is equal to one, then we want to populate that column with Capital City, otherwise City.
>
> **[1:26](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=86)** So if I run that code lines 18 and 19 we can see our new column there, city_type.
>
> **[1:32](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=92)** So let's update our definition for germany_cities.
>
> **[1:37](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=97)** And now we want to create a fill pallet.
>
> **[1:39](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=99)** So I'll add a few more lines and we'll create a pallet called pal_city_type.
>
> **[1:48](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=108)** And because we are dealing with a discrete column we use colorFactor, and we're going to specify our pallet here.
>
> **[1:56](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=116)** So, gold for the Capital City and purple for all the other cities.
>
> **[2:02](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=122)** Now in the second argument, we specify our domain, the range of allowable values, and to ensure that gold and purple have a correct way round, let's actually type this out.
>
> **[2:12](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=132)** So let's type out Capital City and City.
>
> **[2:17](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=137)** I'll run that code on line 21.
>
> **[2:20](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=140)** And now let's go into our visualization code on line 31, and let's change fillColor to be equal to tilde pal_city_type.
>
> **[2:32](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=152)** And then the city_type column.
>
> **[2:34](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=154)** If I run that code, you can now see the fill color is being used, but as always, the opacity is set really low.
>
> **[2:42](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=162)** So let's change fillOpacity to be equal to one.
>
> **[2:47](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=167)** That's great.
>
> **[2:48](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=168)** And now let's add a legend so that this color is meaningful.
>
> **[2:53](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=173)** So I'll add a pipe, addlegend data is equal to germany_cities, pal is equal to pal_city_type Values are equal to tilde city_type and let's set the opacity as one while we're here as well.
>
> **[3:15](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=195)** Okay. So that's the first part of our challenge solved.
>
> **[3:18](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=198)** The next step of our challenge was to add a popup.
>
> **[3:21](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=201)** So let's create a function for that.
>
> **[3:24](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=204)** So let's here create popup_city_pop and we're going to create a user-defined function with the arguments, city and population.
>
> **[3:37](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=217)** And let's start out by using just paste.
>
> **[3:41](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=221)** So we're going to put in the city name, we're going to put in a line break which is the <br> HTML tag, and then population.
>
> **[3:53](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=233)** Okay. So let's run line 31 through 23 and let's go into our addCircleMarkers, add a comma and popup is equal to tilde popup_city_pop.
>
> **[4:09](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=249)** We're going to take the name column and the pop column.
>
> **[4:12](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=252)** And if I run that code now and I click on Berlin then we can see the city name and the population.
>
> **[4:20](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=260)** Okay. So let's add city and population as labels here.
>
> **[4:25](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=265)** So I'm going to go back to line 26 and I'm going to add a comma, and before it we'll place <b> for bold, City colon and we'll close the tag.
>
> **[4:40](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=280)** And what I'll do is I'll copy what I've written on line 26 and paste it on line 28 and swap City for population.
>
> **[4:53](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=293)** Okay. Let's rerun that code and all the visualization code as well.
>
> **[4:58](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=298)** And now let's click on Berlin again and that's almost our popup finished.
>
> **[5:03](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=303)** The last thing for us to do is to format that number.
>
> **[5:07](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=307)** So we're going to go to line 28 and we're going to use a function from the scales package called number and we'll set big dot mark is equal to comma.
>
> **[5:19](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=319)** Let's run line 31, all of our visualization code again and now let's check our popup.
>
> **[5:26](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=326)** And that looks exactly how I wanted it to look.
>
> **[5:30](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=330)** So the last step of the challenge was to add a white background with the leaflet dot extras package.
>
> **[5:36](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=336)** So let's scroll to the top of the script and let's load the package library leaflet dot extras.
>
> **[5:45](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=345)** We'll run that code, we'll go to the bottom of our script, we'll pipe, our map into setMapWidgetStyle style is equal to list, background is equal to white.
>
> **[6:01](https://www.linkedin.com/learning/creating-maps-with-r/solution-add-pop-up-labels-to-a-map-of-german-cities?u=76281980&t=361)** And that's how we solved the challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), function (4)
> **Code Identifiers:** germany_cities (4), city_type (4), pal_city_type (3), popup_city_pop (2), colorfactor (1)
> **UI Navigation:** click on (2), go to (2)
> **Env Vars:** html (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### Challenge: Interactive choropleth of state coastline length
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/challenge-interactive-choropleth-of-state-coastline-length?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/challenge-interactive-choropleth-of-state-coastline-length?u=76281980&t=0)** - [Instructor] For this challenge, I would like you to use leaflet to create a continuous variable choropleth showing the kilometers of coastline for each of the states in a contiguous United States.
>
> **[0:13](https://www.linkedin.com/learning/creating-maps-with-r/challenge-interactive-choropleth-of-state-coastline-length?u=76281980&t=13)** I'd like you to use the viridis color palette for your choropleth and I would like you to highlight those states with zero coastline in pink and to add an appropriate label in the legend.
>
> **[0:24](https://www.linkedin.com/learning/creating-maps-with-r/challenge-interactive-choropleth-of-state-coastline-length?u=76281980&t=24)** I'd like you to also add a pop-up to the states that shows the state name and the coastline formatted in kilometers.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/challenge-interactive-choropleth-of-state-coastline-length?u=76281980&t=31)** I would like you to set the background color of the map to white and please use the provided CSS to fix the legend.

> [!info]- Semantic Content
>
> **Env Vars:** css (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Interactive choropleth of state coastline length
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=0)** - Okay, let's solve this challenge by opening the script in 0510B and let's run the code line 20 through one.
>
> **[0:12](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=12)** So that's going to load our packages, obtain shape files for the contiguous United States, and join those together with our state coastline data set line 19, we've left joint.
>
> **[0:22](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=22)** Then line 23 through 24, I've started off our choropleth so that creates us a map showing us the contiguous United States.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=31)** Let's improve this right away by changing the weight of the lines to one, and we'll change the color to white as well.
>
> **[0:40](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=40)** Our next step is to create a pallet for our map so let's add a couple of new lines here and let's create a pallet called pal coastline kilometer and we're going to use the function color numeric for this and the first argument will specify our pallet.
>
> **[0:58](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=58)** Vifidis, vifidis, and our domain is going to be US coastline dollar KM of coastline.
>
> **[1:09](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=69)** So let's run line 23 and let's add this pallet to our map by adding fill, color is equal to tilde, pal coastline kilometer, and then the name our column again, which is KM of coastline.
>
> **[1:26](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=86)** So as usual just creates a very washed out choropleth, we want to increase the opacity of our colors so let's add the argument, fill, opacity is equal to one, and that looks much better.
>
> **[1:40](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=100)** Now let's add a legend for our choropleth.
>
> **[1:44](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=104)** So we'll pipe this into add legend, specify the data argument again.
>
> **[1:53](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=113)** The pallet as pal, underscore, coastline KM.
>
> **[1:59](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=119)** Our values argument as the columns, that's KM of coastline.
>
> **[2:05](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=125)** And we already know that opacity of that is going to be washed out as well so let's set that to opacity is equal to one.
>
> **[2:12](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=132)** So the next part for challenge was to highlight those states without any coastline.
>
> **[2:16](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=136)** So to do that, we are going to change the color of NA values on line 23. So let's add a comma, add a new line, NA dot color is equal to pink.
>
> **[2:28](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=148)** Let's run that code and let's go to the legend and let's add NA dot label is equal to zero coastline.
>
> **[2:39](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=159)** Now the legend does not look very attractive.
>
> **[2:41](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=161)** In fact, it's quite hard to read, and this is because of the known bug and the leaflet package.
>
> **[2:46](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=166)** I've provided you a fix for this on lines 40 and 41.
>
> **[2:50](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=170)** I'm going to make use of this fix when I finish the next two parts of the challenge, which is to add a popup and to change the background color of the map.
>
> **[2:59](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=179)** So to add a popup we need to create a user defined function.
>
> **[3:03](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=183)** So let's go here, add a couple of lines and we'll create a function called popup state coastline.
>
> **[3:12](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=192)** And our two arguments are going to be state name and coastline KM.
>
> **[3:19](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=199)** And in the body of our function we're going to use the function paste and we'll paste together state name with the BR HDML tag which stands for line break, and then coastline kilometer.
>
> **[3:35](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=215)** So we'll define our function by burning line 35 and let's add that to our visualization code.
>
> **[3:42](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=222)** So we'll add popup is equal to tilde, popup state coastline and we'll provide our two column names.
>
> **[3:52](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=232)** So a name column contains our state name and the kilometers of coastline is in KM of coastline.
>
> **[4:01](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=241)** So now if I click on Washington, we can see that we have a popup.
>
> **[4:06](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=246)** Our next challenge is to format that kilometer number to be round kilometers.
>
> **[4:11](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=251)** So let's go to line 32 and we'll make use of a function from the scales package called number.
>
> **[4:19](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=259)** And what that allows us to do is it allows us to add a suffix so we can add KM for kilometers as a suffix and we can also change our accuracy to an accuracy of one.
>
> **[4:32](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=272)** Let's redefine our function by running line 35.
>
> **[4:35](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=275)** Let's rerun our visualization code and now we can see that in our popup for Washington the kilometers are formatted much more nicely.
>
> **[4:46](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=286)** So the last stage of the popup is to add the state and coastline label.
>
> **[4:51](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=291)** So let's go here, add a comma, and I'm going to add the HDML tag B, and the closing HDML tag B for bold.
>
> **[5:01](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=301)** I'll add state colon there and let's copy this and let's paste it here.
>
> **[5:10](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=310)** And let's label this coastline length.
>
> **[5:13](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=313)** So let's redefine our function on line 35 and let's rerun our visualization code line 37.
>
> **[5:21](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=321)** And now if I click on Washington, we have a much more nicely formatted popup.
>
> **[5:25](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=325)** Now the next step of the challenge was to set a white background, which we do with the leaflet dot extras package.
>
> **[5:32](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=332)** So we scroll to the top of the script and we add library, leaflet dot extras.
>
> **[5:41](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=341)** We run that code and let's go down here and we'll pipe this into set map widget style.
>
> **[5:49](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=349)** We'll add the style argument, a list, and we'll set our background to be white.
>
> **[5:57](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=357)** So now this leaflet map is ready to provide to the HDML fix I've provided.
>
> **[6:02](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=362)** So let's call this map LF coastline.
>
> **[6:07](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=367)** Let's run all of that code and now let's run the code 58, though 54.
>
> **[6:14](https://www.linkedin.com/learning/creating-maps-with-r/solution-interactive-choropleth-of-state-coastline-length?u=76281980&t=374)** And now that is a fairly good looking continuous variable choropleth built with leaflet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (29), function (9), break, (1)
> **Env Vars:** hdml (4)
> **UI Navigation:** go to (2), click on (2)
> **CLI Commands:** make (2)
> **Definitions:** stands for (1), is a  (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### 6. CRS, Projections, and Map Tiles

> [↑ Back to Table of Contents](#table-of-contents)

#### Base maps and tiles
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=0)** - Base maps are often an extremely important part of mapping.
>
> **[0:04](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=4)** Base maps are different representations of the surface of the Earth, but they're often wildly different to one another.
>
> **[0:11](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=11)** They can contain physical and/or geopolitical information.
>
> **[0:16](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=16)** You might have a completely physical base map, comprised of satellite imagery.
>
> **[0:21](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=21)** Or, you might have computed physical characteristics like contour lines or relief map.
>
> **[0:27](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=27)** When we think about geopolitical information on maps, we're talking about very human information.
>
> **[0:32](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=32)** This is going to include country borders and sub-regions, like counties or boroughs.
>
> **[0:37](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=37)** It will also include transport routes like roads, train lines, or potentially other logistic routes.
>
> **[0:44](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=44)** These maps therefore contain names for regions and places.
>
> **[0:49](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=49)** It's very important to acknowledge when talking about geopolitical information, that there are hundreds of disputed international territories, names for territories, and the localization of labels and maps, can also be contentious.
>
> **[1:03](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=63)** When making maps you will need to make decisions, particularly when it comes to using base maps.
>
> **[1:08](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=68)** Discuss these issues with your colleagues, clients, and cultural experts.
>
> **[1:14](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=74)** Map tiles, an awesome feature with interactive maps where many base maps are combined together to create an effect where users can zoom and pan around a map seamlessly.
>
> **[1:25](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=85)** You'll have experienced these map tiles when using a mapping service like Google Maps or Apple Maps.
>
> **[1:31](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=91)** When it comes to using base maps for {ggplot2}, we don't have the ability to use map tiles, because the maps are static.
>
> **[1:38](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=98)** Before 2018, I would recommend {ggmaps} package as it allowed us to use Google Maps' excellent base maps for free.
>
> **[1:46](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=106)** However, today you will need to give your billing details over to Google to use {ggmaps}.
>
> **[1:51](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=111)** So instead I recommend using a {ggspatial} package which can be used entirely for free.
>
> **[1:58](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=118)** Let's look at how to add base maps to {ggplot2} with the base maps {ggplot2} script from the 06_01b project.
>
> **[2:05](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=125)** I want you to run all of this code.
>
> **[2:07](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=127)** So from line 35, all the way through to line 1.
>
> **[2:12](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=132)** It's going to load our packages and it's going to build us up a geobubble chart of Brazil, to which I want to add base maps.
>
> **[2:19](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=139)** So, I need to first load the {ggspatial} package.
>
> **[2:23](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=143)** So I'll add library(ggspatial), and then, let's start off with a new version of our map to begin with.
>
> **[2:31](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=151)** So I'll take ggplot() and then I will add annotation_map_tile().
>
> **[2:39](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=159)** This is because I want the map tiles at the bottom most layer of the map.
>
> **[2:43](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=163)** So they're the first thing that we add to the {ggplot2} chart.
>
> **[2:47](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=167)** Now, never then just these two lines of code because {ggspatial} will attempt to download map towers for the whole globe.
>
> **[2:54](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=174)** And it will take a long time and it's not worthwhile.
>
> **[2:57](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=177)** What we need to do is we need to provide another geom_sf layer, so that annotation_map_tile() knows which map tiles to download.
>
> **[3:07](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=187)** So let's grab this code here.
>
> **[3:09](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=189)** So I'll copy this and I will paste it here.
>
> **[3:14](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=194)** So if I run lines 18 through to 21 we get a fairly weird map now.
>
> **[3:20](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=200)** So we've got base maps around Brazil but Brazil is filled in green.
>
> **[3:25](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=205)** So let's change that fill to transparent and rerun that code.
>
> **[3:33](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=213)** Now, {ggspatial} tries not to download too many base maps.
>
> **[3:37](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=217)** So it sets the zoom a little bit higher than it should be.
>
> **[3:41](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=221)** So let's change this to zoom = 4.
>
> **[3:45](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=225)** You can see in a console for zoom level chosen was 3.
>
> **[3:48](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=228)** So we're just increasing this by one, and now we can see really useful base maps for our map.
>
> **[3:56](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=236)** So, let's grab this code now and let's replace our original geom_sf layer of brazil_sf.
>
> **[4:06](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=246)** Don't forget to add a + here, and now, let's run lines 23 and that's going to build all of our visualization.
>
> **[4:13](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=253)** So now we can see a geobubble chart built with {ggplot2} using base maps from {ggspatial}.
>
> **[4:20](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=260)** When it comes to using map towers with {leaflet} things are much easier.
>
> **[4:23](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=263)** There are lots more options available.
>
> **[4:25](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=265)** There are tens of different base maps designed to work with {leaflet}, but some of them do require you to register for an API key.
>
> **[4:32](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=272)** You'll know if they do, because there'll be watermarks on the map asking you to register for an API key.
>
> **[4:39](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=279)** Let's demonstrate how to use map towers with {leaflet} by opening the base maps with leaflet script, and let's run the whole thing.
>
> **[4:47](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=287)** So let's go for line 37 through to line 1, and we can see that this creates us a geobubble chart using {leaflet} without any base maps.
>
> **[4:57](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=297)** So let's add base maps.
>
> **[5:00](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=300)** I'm going to go here and create a new {leaflet} map.
>
> **[5:03](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=303)** So I'll start with the leaflet function and we will pipe this into the function addProviderTiles(), and then all of the different providers available to us are provided in the providers object.
>
> **[5:16](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=316)** So we type providers and then a $.
>
> **[5:19](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=319)** And this shows the name of all of the map tiles available to us.
>
> **[5:24](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=324)** Let's search for this satelliteDay data set from here.
>
> **[5:29](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=329)** So if I run line 21, that's going to create me a map of the world using this satellite imagery.
>
> **[5:36](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=336)** Now let's grab this addPolygons layer from here and add a pipe, and if I run line 28, that's going to zoom in on Brazil.
>
> **[5:47](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=347)** And now we've got the same weird thing as before where we've got base maps but Brazil is now filled in green.
>
> **[5:54](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=354)** So let's change fillOpacity to 0.
>
> **[5:59](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=359)** And now we've got a meaningful map.
>
> **[6:00](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=360)** So again, I can copy these lines and replace lines 38 through 32 in my map.
>
> **[6:09](https://www.linkedin.com/learning/creating-maps-with-r/base-maps-and-tiles?u=76281980&t=369)** And now if I run line 31, we're going to get a geobubble chart using {leaflet} that includes base maps.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), function (2), for { (1), static (1), from { (1)
> **Code Identifiers:** annotation_map_tile (2), geom_sf (2), brazil_sf (1), addprovidertiles (1), satelliteday (1)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - base (1)

#### What are projections and CRS?
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=0)** - [Instructor] Let's start off by asking a question.
>
> **[0:02](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=2)** Which of these maps is correct?
>
> **[0:05](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=5)** Which one best represents the earth and tells the most truth?
>
> **[0:09](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=9)** There are significant differences between these three maps.
>
> **[0:13](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=13)** In map one, it appears that Greenland is much larger than the content of Africa, but that is not reflected in map two or three.
>
> **[0:21](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=21)** The actual answer to this question is simple, but understanding why is complicated.
>
> **[0:26](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=26)** All three of these maps are wrong in very different ways.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=31)** In fact, it's a fundamental feature of making maps.
>
> **[0:34](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=34)** Flattening a sphere's surface from 3D into 2D will always, mathematically, distort features.
>
> **[0:41](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=41)** This is pretty much the standard map of the world that you'll see online.
>
> **[0:45](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=45)** The one where Greenland looks much larger than the continent of Africa.
>
> **[0:49](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=49)** It uses the Web Mercator projection and was popularized by Google Maps because it worked really well for maps of the USA.
>
> **[0:57](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=57)** And originally, the Google Maps product was focused on customers in the USA.
>
> **[1:02](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=62)** This animated GIF demonstrates how the Web Mercator projection distorts the area of countries.
>
> **[1:09](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=69)** The distortion increases as we move further away from the equator, either north or south.
>
> **[1:14](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=74)** And that's why Greenland and Antarctica looks so huge.
>
> **[1:18](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=78)** We can essentially use the phrase projection and the acronym CRS interchangeably.
>
> **[1:24](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=84)** A CRS gives the technical definitions for how a projection actually projects the surface of the earth into 2D.
>
> **[1:33](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=93)** You might ask, how many CRS are there?
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=95)** Well there are least 9,906 different CRS in active use around the world.
>
> **[1:42](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=102)** But sometimes we actually need to build custom new projections on the fly when we have very specific needs.
>
> **[1:48](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=108)** So how do we keep track of all these different projections?
>
> **[1:52](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=112)** The most commonly used map projections have EPSG codes, from the European Petroleum Survey Group.
>
> **[1:59](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=119)** For instance, the most widely used CRS in the world is the World Geodetic System 1984.
>
> **[2:05](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=125)** But that's a horrendous thing to have to type.
>
> **[2:08](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=128)** So it's more commonly known via it's code, 4326.
>
> **[2:13](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=133)** A second example is EPSG code 27700.
>
> **[2:17](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=137)** Which is the British National Grid projection, designed by the British Ordinance Survey Group for extremely accurate mapping of the UK.
>
> **[2:26](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=146)** The only one of these CRS codes that I recommend that you memorize is 4326.
>
> **[2:31](https://www.linkedin.com/learning/creating-maps-with-r/what-are-projections-and-crs?u=76281980&t=151)** It should be your default choice for most data visualization purposes.

> [!info]- Semantic Content
>
> **Env Vars:** crs (6), usa (2), epsg (2), gif (1)
> **Code Keywords:** let (1), type. (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Geographics vs. projected CRS
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=0)** - [Instructor] There are fundamentally two different types of map projections in existence, projected CRS and geographic CRS.
>
> **[0:08](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=8)** If we want to do geometric calculations, like calculating areas or distances between points, then we need to ensure that our data is stored in a projected CRS.
>
> **[0:18](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=18)** Whereas if we want to create a data visualization of GIS data, we need to use a geographic CRS.
>
> **[0:25](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=25)** It's important to understand the difference between how coordinates are stored in each type of projection.
>
> **[0:31](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=31)** In a geographic CRS, points are stored in pairs of longitude and latitude coordinates, which means the distances between points is measured in degrees.
>
> **[0:41](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=41)** However, in a projected CRS, the coordinates are a Cartesian geometry with pairs of X and Y coordinates.
>
> **[0:49](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=49)** This means that the distance between points are measured in physical units like meters.
>
> **[0:55](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=55)** And that is why projected CRS are necessary for geometric calculations.
>
> **[1:01](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=61)** It's important to be careful about not misusing geographic CRS.
>
> **[1:06](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=66)** This map should be displaying circles centered on cities, but instead, we see gradually more distorted ellipses as we move away from the equator.
>
> **[1:16](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=76)** That's because the circles were computed in a geographic CRS instead of a projected CRS.
>
> **[1:23](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=83)** Fortunately, the sf package does have our back.
>
> **[1:27](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=87)** It will warn you that your datasets are currently using longitude, latitude coordinates when using geo computation functions like st_buffer.
>
> **[1:36](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=96)** You just need to remember that longitude, latitude means geographic CRS, but you still need to be careful when you've identified that you need a projected CRS for geo computations.
>
> **[1:49](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=109)** Remember that all projections distort the Earth's surface in some way.
>
> **[1:54](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=114)** We can split projected CRS into three broad categories.
>
> **[1:58](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=118)** Conformal CRS, which are bad at maintaining area, but very good for maintaining shape and rotation.
>
> **[2:05](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=125)** Equal area CRS, which do a good job of maintaining shape and area, but do strongly distort rotation.
>
> **[2:13](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=133)** And finally, equidistant projections, which do distort shapes, but are good when you need to do calculations dependent on consistent area and rotation.
>
> **[2:22](https://www.linkedin.com/learning/creating-maps-with-r/geographics-vs-projected-crs?u=76281980&t=142)** The mathematics objections can become overwhelming, but for the most part, we can ignore these complexities if our goal is to simply visualize spatial data.

> [!info]- Semantic Content
>
> **Env Vars:** crs (15), gis (1)
> **Warnings:** be careful (2)
> **Code Keywords:** finally, (1)
> **Code Identifiers:** st_buffer (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### How to choose CRS and use them with {sf}
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=0)** - [Instructors] When choosing CRS, you need to ask yourself a question.
>
> **[0:03](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=3)** Are you just wanting to make a map or do you need to compute something?
>
> **[0:07](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=7)** If all you need to do is map your data, then 99% of the time all you need is EPSG code 4326.
>
> **[0:15](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=15)** If you need to compute something, you'll need to choose a projected CRS that completely covers your data and preserves your features of interest.
>
> **[0:24](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=24)** When searching for a projected CRS, the first place I'd recommend would be National Mapping Agencies.
>
> **[0:30](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=30)** Most countries have a National Mapping Agency that publishes a country specific coordinate reference system that will work very well for data sets that are completely contained within a single country's borders.
>
> **[0:43](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=43)** Wikipedia has a fairly extensive list of these agencies.
>
> **[0:47](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=47)** The next place I would recommend searching would be the EPSG to IO website.
>
> **[0:52](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=52)** This contains over 5,000 different CRS that cover all sorts of different regions, including oceanographic regions.
>
> **[0:59](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=59)** My final recommendation would be to use the [ProjectionWizard.org](https://ProjectionWizard.org) website to create a custom CRS for your data.
>
> **[1:07](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=67)** Let's use this script in the 06_04b project to go through this process.
>
> **[1:12](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=72)** So, I'm going to run lines 15 through one.
>
> **[1:16](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=76)** It's going to load our packages, define our two data sets, and create a map of the quakes data set in Australia and New Zealand.
>
> **[1:24](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=84)** We can see that some of these earthquakes are covered by New Zealand.
>
> **[1:28](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=88)** If we were only interested in those quakes in the side of New Zealand, we could go and find the CRS for New Zealand.
>
> **[1:35](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=95)** The mapping agency website for New Zealand has a page dedicated to projections and you can see the official projection is called NZGD 2000.
>
> **[1:47](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=107)** If we go to [epsg.io](https://epsg.io) and we search for NZGD 2000, then we can see that this actually does have an EPSG code that we can use, 4959.
>
> **[1:59](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=119)** So, for one to two, we could transform our data into this projection.
>
> **[2:03](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=123)** What we would do is we would take quakes 4326, we would pipe it into ST Transform, and we would add the argument CRS 4959.
>
> **[2:17](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=137)** We would run that code, and if we scroll to the top of the SF object, we can see that this has been reprojected into NZGD 2000.
>
> **[2:26](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=146)** However, this is only going to satisfy those earthquakes, which are covered by New Zealand.
>
> **[2:32](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=152)** So, the next step I would recommend is going to [projectionwizard.org](https://projectionwizard.org), and this allows you to interactively choose an area for your CRS.
>
> **[2:41](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=161)** So, let's select the area that the earthquakes' appearing.
>
> **[2:45](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=165)** So, I'll move this rectangle down here and you can see down here there's a map that zooms in on that area.
>
> **[2:51](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=171)** I can also zoom in like this, and so I could say I'm only interested in this region.
>
> **[2:58](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=178)** Once we've selected our region of interest, we can choose which distortion property we want to preserve, if we want equal area conformal or equidistant projections.
>
> **[3:08](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=188)** This website then creates us a WKT representation of a CRS, which you obtain by clicking on the WKT link.
>
> **[3:20](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=200)** You will need to copy the entirety of this into your clipboard and head over to our studio.
>
> **[3:28](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=208)** We might want to use this CRS multiple times.
>
> **[3:31](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=211)** So, let's store this as CRS_quakes.
>
> **[3:36](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=216)** Let's paste our clipboard in and we can see that our string contains double quotes.
>
> **[3:41](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=221)** So, let's put a single quote at the beginning of our string and a single quote at the end of our string.
>
> **[3:48](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=228)** Let's then run that code on line 30.
>
> **[3:51](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=231)** So, that's now going to store that object in our environment, and now, what we can do is we can take our data set, which is currently quakes 4326 and pipe it into ST Transform.
>
> **[4:05](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=245)** CRS is equal to CRS quakes.
>
> **[4:10](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=250)** And if we scroll up, we can see that we are in a projected CRS, which is called Projwiz_Custom Albers.
>
> **[4:17](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=257)** So, that name comes from here.
>
> **[4:18](https://www.linkedin.com/learning/creating-maps-with-r/how-to-choose-crs-and-use-them-with-sf?u=76281980&t=258)** If we wanted to we could provide a more useful name for this CRS.

> [!info]- Semantic Content
>
> **Env Vars:** crs (14), epsg (3), nzgd (3), wkt (2)
> **Code Keywords:** let (6), this, (1)
> **URLs:** [projectionwizard.org](https://projectionwizard.org) (2), [epsg.io](https://epsg.io) (1)
> **UI Navigation:** go to (1), select the (1), scroll up (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is called (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructors] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### What else can you learn about creating maps in R?
> [LinkedIn Learning](https://www.linkedin.com/learning/creating-maps-with-r/what-else-can-you-learn-about-creating-maps-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/creating-maps-with-r/what-else-can-you-learn-about-creating-maps-in-r?u=76281980&t=0)** - [Charlie] Okay, thanks for joining me for this mapping with our course.
>
> **[0:04](https://www.linkedin.com/learning/creating-maps-with-r/what-else-can-you-learn-about-creating-maps-in-r?u=76281980&t=4)** My goal was to get you feeling confident with using both ggplot2 and leaflet for creating static and interactive maps.
>
> **[0:12](https://www.linkedin.com/learning/creating-maps-with-r/what-else-can-you-learn-about-creating-maps-in-r?u=76281980&t=12)** You also had to learn a little bit about GIS Theory and you should now feel well-equipped to wrangle addresses, shape files, and other location data by combining together the sf package with the Tidyverse.
>
> **[0:24](https://www.linkedin.com/learning/creating-maps-with-r/what-else-can-you-learn-about-creating-maps-in-r?u=76281980&t=24)** If you're interested in creating dashboards that contain interactive maps, I'd highly recommend checking out my course on Building Shiny Apps.
>
> **[0:33](https://www.linkedin.com/learning/creating-maps-with-r/what-else-can-you-learn-about-creating-maps-in-r?u=76281980&t=33)** If you're looking for more experience with a Tidyverse, then please do check out my dedicated course, Introducing the Tidyverse and the Concepts of Tidy Data.
>
> **[0:42](https://www.linkedin.com/learning/creating-maps-with-r/what-else-can-you-learn-about-creating-maps-in-r?u=76281980&t=42)** Thanks again, and please do feel free to follow me on Twitter, @charliejhadley, to learn more about all mapping and data visualization.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1)
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