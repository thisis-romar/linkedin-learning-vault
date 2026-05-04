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
  - '[Advance Your Skills in GIS](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20GIS.md)'
prev_courses:
  - '[QGIS and Python for AEC](QGIS%20and%20Python%20for%20AEC.md)'
next_courses:
  - '[Learning ArcGIS Python Scripting](Learning%20ArcGIS%20Python%20Scripting.md)'
path_nav: '[{"path":"Advance Your Skills in GIS","position":6,"total":9,"prev":"QGIS and Python for AEC","next":"Learning ArcGIS Python Scripting"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/geographic-information-systems-gis
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/thinking-spatially?u=76281980&t=0)** If you're spending your days working behind a computer, chances are you're dealing with tons of digital information. Now, if any of that information concerns roads, rivers, buildings, trees, aquifers, coffee shops, or anything else that has a specific location on this earth, take my advice: you should be using a geographic information system to help you manage and analyze that data. GIS can help you get your job done faster and more accurately, and maybe even allow you to answer questions you've never been able to answer before. GIS software gives you the tools to create, modify, and manipulate data to tease out critical patterns and expose the way things interact with each other on the ground. I'm Jenny Harrison, founder of TeachMeGIS. Over the past 30 years, I've helped thousands of professionals around the world get productive with geospatial technologies. I've helped them learn to think spatially. In this course, I'll explain conceptually how GIS is used in various industries to solve complicated problems. I'll teach you the components of a GIS and show you where to find geospatial data. Finally, I'll get you to start thinking about adding GIS to your organization to make sure that you get the benefit of this incredible tool. By the end of this course, you'll be approaching problems differently by thinking spatially.

> [!info]- Semantic Content
>
> **Env Vars:** gis (5)
> **CLI Commands:** find (1), make (1)


### 1. Understanding GIS

[↑ Back to Table of Contents](#table-of-contents)

#### [Solving spatial problems](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=0)** Have you ever thought about the amount of information your brain collects as you travel to work in the morning? Everything you see, feel, hear? Is this in a school zone? Are the roads rough? Are there sidewalks? How many cars are on the street with you? Is there an interesting shop you want to come back to later? Is there any construction going on? Now, suppose that you could collect all that information that you observe and put it into a database for engineers, planners, designers, and other citizens like yourself to use to make better decisions. You could put that information in lists, stored in spreadsheets or [Databases](../../Skills/Software%20Development/Databases.md), like a list of all the shops on your route to work. But think about how much more powerful that data would be if it was on a map so that everyone could see exactly where each of these things occur and how they interact with each other. For example, since you know how many cars are on the road and where the shops are, marketers could say, how many cars passed that shop each day? Maybe I should put an ad on the radio so they can hear it when they drive in. When you think of data this way, you're thinking spatially. You may have seen a simple example of this with just a few layers of data, if you've used a navigation app on your phone or in your car, but this is a bit different from a GIS. A GIS stacks up lots and lots of layers of spatial data and gives us a framework for gathering, managing, and analyzing that data. Because GIS understands location and has a database attached to the map
>
> **[1:38](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/solving-spatial-problems?u=76281980&t=98)** layers, it can help answer very complicated questions quickly. Thinking about the road you travel in the morning, again, you can ask, what makes up the foundation of this road that's cracked so badly? Which construction company built it? How many people would be impacted when you have to close it down for repairs? And the cool thing is that GIS can do this for any data, not just roads. To manage and analyze a tremendous amount of different kinds of data in your daily work, I want you to start thinking about what data you have that has a spatial component. If there are some, which I'm sure there are, get that data into a GIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** gis (5)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Finding and accessing GIS](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=0)** GIS software lets you put your own world, the data that's important to your organization onto the map. Put simply, you can access GIS through web maps and apps, or through desktop software, which can be set up as part of an enterprise platform. Geospatial-enabled devices can feed location and services back to your maps. Suppose you work for a company that has offices, warehouses, and factories all over the world, you could create a GIS-based web app for the company. Everyone sees the complete set of data about the company's staff and facilities, and the maps are updated in real time as new data is entered. Most companies using GIS have a desktop GIS software to create and manage their geospatial data and to create a system of record to keep historic versions. A desktop GIS software is much more powerful, allowing for the management of huge data sets for machine-intensive spatial analysis. The Esri desktop software is called [ArcGIS Pro](../../Skills/Data%20Science/ArcGIS%20Pro.md). ArcGIS Pro is usually installed as part of an enterprise GIS. There are many software companies helping users create web maps such as Esri, [Google](../../Glossary/Service/Google.md), and [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). You can get a public account for Esri's ArcGIS Online web mapping platform at [arcgis.com](https://arcgis.com) and try your hand at making a GIS-based map an app. It's free for you to explore and learn,
>
> **[1:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/finding-and-accessing-gis?u=76281980&t=94)** just not for commercial work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ArcGIS Pro](../../Skills/Data%20Science/ArcGIS%20Pro.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** gis (8)
> **URLs:** [arcgis.com](https://arcgis.com) (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### [Recreating the world on a map](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=0)** To get a clear understanding of GIS, think about how the world can be recreated in a database. That's done by converting the parts of your world, everything on it, above it, and in it. A GIS is really just a model of the world created by stacking together layers of points, lines, and polygons. A simple model is drawn in two dimensions, but a more sophisticated model can be drawn in three dimensions showing the height of buildings and other structures. It's the spatial relationship between these shapes that allows you to ask questions of your GIS. Think about a GIS that a local police department uses for public safety. In it, every street would be drawn as a simple line right down the middle of the street. This line is called a street feature. Every stoplight would be drawn as a point. How about police stations? Probably a polygon would be drawn that shows the shape of the building on the ground. There might also be a layer of polygons that represents land parcels, local parks, or school campuses. And the land parcel polygons together would be stored in a geodatabase feature class or in an older file type called a shape file feature class. Both are used quite commonly. These streets could also be stored as a geospatial web service, making it easy for web and mobile maps to access them. Everything relevant to public safety would be represented by feature classes of
>
> **[1:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/recreating-the-world-on-a-map?u=76281980&t=97)** points, lines, and polygons. Being able to analyze data spatially allows you to report what's happened in the past, analyze the conditions that might've caused what happened, investigate ways to change those conditions and model how these changes might affect future outcomes. Suppose you notice more than the usual number of car crashes at an intersection in your rural county last month. You know that grass near that intersection gets really high and sometimes causes visibility issues. You can overlay the county's mowing schedule with the streets on your GIS map and see that the area around this intersection has not been mowed this spring, and you know there's been a lot of rain. You can request the mowing schedule be adjusted and possibly save lives with that simple change. Now that you know what the issue is, you can ask GIS to find other busy intersections that haven't been mowed and ask the mowers to prioritize those intersections. Here's a GIS map that shows how mowing is managed in San Antonio, Texas. When I click on any of the areas, I see what the mowing schedules are for this year, and because this data exists as GIS data on the web, the local police department can probably get access to it and add it to their GIS. Now that you know how GIS models the world, take a minute to consider what are the points, lines, and polygons that make up your work world.

> [!info]- Semantic Content
>
> **Env Vars:** gis (10)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is called (1)

#### [Specifying location](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=0)** The magic behind [geographic information systems](../../Skills/Data%20Science/Geographic%20Information%20Systems%20(GIS).md), the thing that makes it is that every point, line, and polygon put into a GIS is tied to a real-world location on the Earth. Some things sit on top of the Earth like a cell tower. Other things sit underground like a sewer line or the bottom of an oil well, but they all have coordinates that specify their location. The best-known system for specifying location is the one that uses latitude and longitude. This is called the geographic coordinate system. Latitude and longitude are great for mapping location on a three-dimensional sphere or ellipse like a globe, but on a flat two-dimensional map, a different system is used to designate locations. These are projected coordinate systems. These systems allow you to flatten out the Earth onto a screen or a piece of paper, specifying location and distances in either feet or meters. To get you thinking about how the world is mapped, I want to discuss latitude and longitude. If you get excited about GIS and want to get started, you'll need to learn about projected coordinate systems, too. Since you might not have had to think about latitude and longitude since primary school, I'll review a few terms. A degree is a measure of an angle and the length along the surface of the Earth opposite that angle. A sphere, like the Earth, is divided up into 360 degrees of latitude, measuring distances north and south of the equator.
>
> **[1:36](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=96)** And longitude measuring distances east and west of the prime meridian. Coordinates are written as degrees, minutes, seconds, called DMS, or in decimal degrees. The longitude is usually specified first. Every point, every historic oak tree, every manhole cover, every fire hydrant knows its latitude and longitude. It knows because when it was originally put into the GIS, its location was collected by someone going to it with a GPS unit, or maybe it was drawn over a digital aerial photo. The coordinate pair is stored with the data. If the data is 3D-enabled, you'll find a third coordinate elevation, which is the height above sea level. Now for lines, every line is simply a series of points called vertices, and each [Vertex](../../Skills/Software%20Development/Vertex.md) knows its latitude and longitude. A polygon is a line that encloses an area. Think of a city park, or a designated wetlands area. They're made up of a series of points connected into a line, and a line starts and stops at the same point. So you get a fully enclosed area. Each point knows its latitude and longitude, and if it's a 3D dataset, its elevation. The GIS can do spatial analysis for you. It can look at how things touch and intersect and how close things are to each other, and each one of these features will have data behind them.
>
> **[3:11](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/specifying-location?u=76281980&t=191)** Now that you understand a little about the coordinates behind a GIS map, why don't you see if you can find the latitude and longitude coordinates of where you are right now? Just open a browser and go to [google.com/maps](https://google.com/maps). Type in your address, right-click on the map, and you'll know exactly where you are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Geographic information systems](../../Skills/Data%20Science/Geographic%20Information%20Systems%20(GIS).md) (1), [Vertex](../../Skills/Software%20Development/Vertex.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** gis (5), dms (1), gps (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), right-click (1)
> **URLs:** [google.com](https://google.com) (1)
> **Prerequisites:** you'll need (1)

#### [Essential map comprehension](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=0)** You may be used to looking at navigational maps on your phone, but it's rare to have to really understand the fine details on those maps. I mean, generally, I just listen to know when I have to turn and in which direction. But when looking at a GIS map, it's important to understand a bit about map reading and map comprehension. So I'm going to go over a few essentials. First, every map should have a legend or a table of contents that explains the layers on the map and explains the colors and symbols that were used for each layer. So the first thing you should do when you look at a GIS map, or any map for that matter, is to look for a legend so that you can understand what the colors and symbols on the map mean. The next important thing to understand about the map is what part of the world this map is showing. It might be easy to tell because the title of the map might mention the study area, or you might recognize the name of a major road on the map. Another thing you have to understand are directions on a map. Usually, maps are created so that north is up and south is down. This is not always the case though, so you have to look for a north arrow to orient yourself on the map. If there's no north arrow, look for the meridians, the lines of longitude, they converge at the poles and always point north and south. Finally, you need to look for the map scale so that you can understand the size of things on the map. Look for a scale bar or scale text. The scale text is easy to understand.
>
> **[1:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/essential-map-comprehension?u=76281980&t=94)** Measure one centimeter on the map and that will be three kilometers on the ground. But that's only true if the map is drawn at the original scale that the map author intended, which is often not the case when looking at a digital map. So most maps nowadays have a scale bar instead. The scale bar is unitless. You put a ruler on the map and measure the distance between two points. Say it comes out to three centimeters. Then you put the ruler against the scale to see how long three centimeters is on the ground. The next time you're presented with a map, look for the legend, the north arrow, the coordinates, and the scale bar to make sure you're interpreting the map correctly.

> [!info]- Semantic Content
>
> **Env Vars:** gis (2)
> **CLI Commands:** make (1)


### 2. GIS Core Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [More than digital maps](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=0)** GIS is more than just a digital map. It's a powerful resource that can be used to get tremendously more value out of your data. In this lesson, I want to get you in a position to use GIS for more than just mapping. If your company owns a chain of coffee shops, GIS can show you a map of each location. By creating and managing spatial data, GIS can also keep track of all the data related to your coffee shops, the property boundaries and footprint, parking lots and parking spaces, even the vegetation around the buildings. You can add new coffee shops or change the details of a shop at any time in your GIS. Beyond mapping and creating spatial data, GIS is great for spatial document management. A GIS will allow you to connect all your reports, charts, photos, presentations, and basically anything related to each store to the coffee shop location on the map. I mean, you can look at the map, click on the coffee shop, and see all the annual reports: the tax documents, the leasing agreements, any documents related to the store. You don't have to go figure out where they are on your network or in [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md). Finally, I want to highlight spatial analysis. That's the big one. It's what makes GIS, well, GIS. In your GIS map of coffee shops, the data behind the layers could include the year the building was built, whether it was owned or leased, the sales from last year,
>
> **[1:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/more-than-digital-maps?u=76281980&t=95)** the average number of customers each year, and even the number of parking spots. Or you could query, like show me all the coffee shops that had sales, say over $500,000 last year. You could add other data to your map like census blocks with demographic data, including education level, age, and average income of the people living nearby. Using the spatial analysis tools in your GIS, you could look at the census blocks within a quarter mile of each of those great performing coffee shops and find out what sort of neighborhood results in a successful coffee shop. You could also overlay your coffee shops with school district boundaries in case you wanted to run a promotion with the schools or floodplain maps in case you want to see if any of your properties are at a higher risk of flooding to see if you should invest in flood insurance. That's what GIS does. It lets you pull together all of these different data types to help you make better decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SharePoint](../../Skills/Cloud%20Computing/SharePoint.md) (1)
> **Env Vars:** gis (12)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** click on (1)

#### [Identifying GIS layer components](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=0)** GIS map layers are the building blocks of a GIS. Layers allow a single GIS dataset, like a set of polygons representing buildings to be displayed many different ways. I can show the [office](../../Skills/Web%20Development/Microsoft%20Office.md) buildings in my city color-coded by the number of square feet available to rent and the property appraisers can display the buildings color-coded by the value, and the fire department can color-code them based on whether or not they have sprinkler systems. When a new building is added, everyone just opens their map and the new building is there, using each person's chosen color scheme. A single dataset can be displayed many different ways based on the attributes. This is one of the key elements of a GIS. Let me clarify a bit of terminology. There's a GIS layer and there's an actual GIS dataset. They're different but they go together. A GIS dataset consists of geometry: points, lines, or polygons tied to a real-world location plus the data behind it. This type of data is called a feature class. A GIS layer defines the display properties for this feature class. The symbol, is it a dashed line or a solid line? The color and the filters that narrow down the data. The cool thing is that you can have one feature class, one dataset that's displayed dozens of different ways depending on what aspect of the data interests you. Let me give you an example. Suppose you work for your state's bridge maintenance group and you create a GIS
>
> **[1:36](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=96)** feature class that holds the bridges for your state. You can store so much information about these bridges in your GIS: the name of the bridge, the construction type: cantilever or truss bridge, for example. Weight limits: can a fully loaded semi go over it or firetruck? The age of the bridge and even the number of vehicles that cross the bridge on an average day. All of this information can be stored in the GIS with this bridge feature class. And then each person in your organization can create a layer to display the data based on what's of interest to them. The bridge maintenance team can display the bridges based on the age of the bridge, the roughness of the pavement, or the average daily traffic so they could plan for when bridges will need to be replaced or upgraded in the next budget year. The emergency management office can display the bridges by height to determine which ones might flood if the river rises. A local fire department can also use the data and display the bridges based on weight limits so they can analyze their routes to fires to avoid bridges that cannot support the weight of their trucks. So you see you have one actual feature class, one actual data set that could have dozens of layers associated with it. The magic is that if those bridge points get updated, a new bridge is built, or a bridge is repaired, the bridge maintenance team will automatically see the new bridge on their map. The emergency management team will see the bridge colored by its new height and the fire department will see it on their map as well symbolized by weight limit,
>
> **[3:13](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-layer-components?u=76281980&t=193)** so they'll know if this new bridge will support their trucks. GIS feature classes are little packets, chockfull of information about a particular set of structures that you are responsible for on Earth. Using GIS software, you can manipulate that data for display and analysis to get exactly the answers that you need and everyone can be seeing the same dataset, one version of the truth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2)
> **Env Vars:** gis (13)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)

#### [Describing attribute tables](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=0)** A GIS is so much more than just a map. Every layer in a GIS carries with it an attribute table, which is a database full of information. An attribute is any bit of information about a feature on a map. What's the name of this hospital? What's the total area of this piece of land? There are a few attributes that every modern GIS dataset automatically has. The length of every line and the area of every polygon. Those are calculated automatically. All the other attributes that you see in a GIS dataset were added by some human or collected by some device. Let me show you the attributes in a GIS map. This is a map that shows land records in Linn County, Iowa, right in the heartland of the United States. You can open the legend to see what layers are on the map. Notice that the yellow lines are parcels and the orange lines are subdivision boundaries. Most GIS maps have a search tool. You can usually search for an address, a city, a state, a country, or a well-known location like a courthouse. I'll search for the Lin County Courthouse. Once it's typed in, the map will [Zoom](../../Skills/Software%20Development/Zoom.md) into the courthouse right here on this little island. When you click on the courthouse polygon, you get to see the attributes of this piece of land. So this is the data behind the map that I've been telling you about. You can see who owns the land and lots of other information. Notice there's a land valuation and tax information in here, too.
>
> **[1:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/describing-attribute-tables?u=76281980&t=97)** It's all blank because this is a government building, but let's check the property across the river from the courthouse. When you click on it to see who owns it, you can scroll down and see its land value and how much tax is due, and lots of other information about this piece of land. This button at the bottom lets you open all the tables for all the layers on the map and filter the data or search for what interests you. See, there are attribute tables for each of the layers on the map: parcels, subdivisions, everything. It's filtered right now to only show data for the area that it's zoomed to. Suppose I'm a lawyer and I want to open a new [office](../../Skills/Web%20Development/Microsoft%20Office.md) near the courthouse. Let me see if there are any properties that I could get for less than $100,000 in this area. I'll run a quick filter that chooses all the records where the value is less than 100,000. You can see how many records are selected down in the lower left corner of the table. By double-clicking one, you can see where it is on the map and even see a photo of the property. So you can see the attributes are fully integrated into the GIS. The map is tied to the tables and the tables are tied to the maps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** gis (7)
> **UI Navigation:** click on (2), open the (1), scroll down (1)
> **Definitions:** is a  (3)

#### [Using raster datasets](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=0)** Did you know that there are over 2,000 active satellites orbiting the Earth every day? Some of these satellites go around the Earth once every 12 hours, and some do it in just 90 minutes. They're all collecting information about the Earth's surface, taking pictures, and making measurements. A lot of this data can be added directly into a GIS. In addition to satellites, government agencies and private companies are flying airplanes and drones with [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) devices attached. These vehicles fly much closer to the ground and collect very detailed pictures. They also measure the heights of buildings and trees, determine the location of power lines, and collect information about vegetation health. This data is called remotely sensed data. Many remotely sensed data sets are stored as raster data. Raster data sets are made up of a bunch of pixels, just like you see when you [Zoom](../../Skills/Software%20Development/Zoom.md) in really close on a picture you've taken with your camera. The remotely sensed imagery can be used as a base map in your GIS, so you can see where houses, roads, and forests are. You can also do analysis with these images. You see, each pixel in one of these photos actually holds the spectral reflectance of a spot on the Earth. The spectral reflectance describes the amount of light of different colors being reflected from the Earth. Most commonly you look at red, green, and blue light, which are visible bands of light that human eyes can see. When you mix red, green, and blue light,
>
> **[1:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=95)** you get what's called a true color image. What makes this remotely sense data more interesting, though, is that the satellites, airplanes, and drones can carry special equipment that record wavelengths of light that the human eye can't see, like infrared light. Infrared light is particularly interesting, especially when looking at agriculture and forests because rapidly growing healthy vegetation reflects a lot of infrared light. While weak or sick vegetation reflects very little infrared light. Water and wet areas also reflect a very little. By looking at an infrared image, you can analyze the health of crops, the extent of wetlands, and the level of infestation of pests in a forest. You can use the spectral reflectance of pixel to develop a signature for various vegetation types. This signature can be used to predict where you might find a particular type of vegetation. For example, if you say, I know this pixel is a stand of pine trees infected by disease, and here's the reflectance signature for infected pine trees. Then show me where the other stands of infected pine trees are in this huge forest. And you don't have to be a NASA scientist to do this. The data is there. It's collected by lots of government agencies and shared with the public, and the software helps you with the science. Photos are not the only type of raster.
>
> **[3:08](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/using-raster-datasets?u=76281980&t=188)** Elevation rasters, which can be used to derive slope and aspect information, can be used to determine the best location for solar panels or the best place to plant corn. Noise pollution, air pollution, and light pollution are other examples. These types of rasters are often created from point data. The software interpolate between the points and estimates what the value is in areas where you don't have data. It's very powerful. Want to see some of these raster data sets? Check out the United States Geological Survey's National Map Viewer, and turn on the land cover layer or the imperviousness layer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Env Vars:** gis (2), nasa (1)
> **Analogies:** just like (1), picture (1), for example (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** find (1)

#### [Creating 3D models with LiDAR](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=0)** Can GIS maps be 3D? Absolutely. There are 3D base maps, and you can drape your own data over those base maps. The 3D part is nice for visualization, but it also lets us do analysis like predicting which areas can be seen from the third floor of a building or figuring out the best location for a cell tower. Here's a 3D map of a village in Southern Belize. I'll show it to you in [ArcGIS Pro](../../Skills/Data%20Science/ArcGIS%20Pro.md), a desktop GIS software. We could use this 3D data to figure out which areas are flat enough and have enough sun exposure for successful agriculture. Here's another of a river valley where a dam was recently built. These are basic maps with just the free elevation data that comes with the software, but there's a technology available now called Light Detection and Ranging, or Lidar that allows for quick and relatively inexpensive collection of very high-resolution elevation data. It can also collect the height of things sitting on the earth like trees, power poles, and buildings. Bring this data into a GIS and you can get a complete 3D model of the area. Interestingly, these [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) devices can be put on the top of a car to map a neighborhood or even attached to a tripod and set inside a building to map the interior of the building. One of the exciting uses of this Lidar technology right now is flying over dense forests to discover hidden secrets underneath.
>
> **[1:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-3d-models-with-lidar?u=76281980&t=94)** The thing is, these Lidar devices shoot out so many pulses of light. Some get reflected by the leaves, but some make it through the spaces between the leaves and hit the ground. It's like an x-ray of the forest. The Lidar picks up the shapes of structures that have been hidden under forests for hundreds of years. Today, Lidar is being used in big cities to create 3D models, the basis for digital twins of entire cities, the buildings, the power lines, the stoplights, everything. This incredible technology has really changed the world of mapping by allowing you relatively quickly to get a complete 3D model of the world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [ArcGIS Pro](../../Skills/Data%20Science/ArcGIS%20Pro.md) (1), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1)
> **Env Vars:** gis (3)
> **CLI Commands:** make (1)
> **Analogies:** it's like (1)


### 3. Geospatial Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Asking a map questions](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=0)** Need to know where the water lines are that haven't been inspected lately? Where are all the buildings in the city that are in a floodplain? Just ask your GIS to show you. A GIS lets you pick through huge stacks of data to quickly answer complex questions. You ask a map a question by running a query. GIS software supports [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) using the structured query language or [SQL](../../Skills/Data%20Science/SQL.md): a standard language that's been used for decades. When you query a standard database, you get a list of records returned. When you query a geospatial database, you get the results displayed on a map instead of just in a list of records. Let me show you an example of how GIS queries are used. Look at this map that shows all of the oil and gas wells in the U.S. state of Louisiana. There are nearly 200,000 wells in the state. Some are still active, but many are old and no longer used. Suppose you wanted to find out how many of those wells are actually still producing oil. First, look at the table to see what column holds the well type. You can see how many wells are in this dataset by looking here in the lower left corner of the table. Then run a query that says, select all the wells where the well status is producing well oil. You can see how many wells are still producing and see the number of selected records. You can ask more detailed questions, too.
>
> **[1:34](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/asking-a-map-questions?u=76281980&t=94)** How many of these wells were drilled before 1940? How many wells drilled before 1940 went deeper than one mile, 5,280 feet? How many wells drilled before 1940 that went deeper than a mile were successful in finding oil? And where are these wells? You can also really simplify the data by turning off all the features that don't meet your criteria. You can, for example, show only the wells in Louisiana that were drilled deeper than four miles. That's 21,120 feet. That really lets you narrow down a huge dataset to see just what you need to find that proverbial needle in a haystack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** gis (4), sql (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)

#### [Evaluating spatial relationships](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=0)** If you want to know how many six-inch water lines are in your city, query a database. If you want to know where the six-inch water lines are that are in danger of corroding from running through highly acidic soils, ask a GIS. Because location is a part of every GIS data set, your GIS knows what things are near each other, what things intersect, and even which polygons contain which points on the ground. So in the case of water lines, what you'd really be doing is giving your GIS a water line and a soils layer and asking the GIS to find all the water lines that intersect the acidic soil polygons. Intersects are one of the many spatial relationships that GIS is able to understand, such as within a distance of, contains, are contained by, and shares a boundary with. Let me show you a map of Louisville, Kentucky. It's got fire district polygons on it. And when you [Zoom](../../Skills/Software%20Development/Zoom.md) in, you can see there are address points. Suppose the fire chief wants to know how many homes and businesses the department is responsible for protecting. That's a simple "are contained by" question for GIS. Select all the address points that are contained by my fire district. Now suppose there's going to be construction on one of the streets in Louisville. I'll say it's Preston Street. The fire department might want to know how many homes and businesses are near Preston Street, which they might have trouble getting to because of the construction.
>
> **[1:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/evaluating-spatial-relationships?u=76281980&t=95)** So you could run a query to select all the address points that are within a distance of 500 feet from Preston Street. But Preston Street is a long street and runs outside of your district. So you could then run a spatial query to say, out of all these Preston Street addresses, just pick the ones that are in my fire district. And then you could open the table and see a list of all the addresses that would be affected by the construction in your district, and you could further query to see if any of those addresses are hospitals or schools. These address points are created and maintained by emergency response organizations around the world. There are also data vendors who sell address points with demographic data behind them. So you can do queries like, which addresses are within one kilometer of my grocery store because I want to send them coupons. Spatial analysis gives you a new way to explore your data, to pull out valuable information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Env Vars:** gis (7)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** open the (1)
> **Analogies:** such as (1)

#### [Analysis with imagery and surfaces](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=0)** The data collected from satellites, airplanes, and drones can give you incredible insights into what's going on down here on Earth. And those images and data are constantly collected and delivered in formats that GIS can read. It can be used to look at huge swaths of the Earth, like predicting the growth pattern of a wildfire, and also for more localized studies like where do I need to add more soil to level out this land? Other kinds of raster data sets like the depth of the oceans can be created by GIS software from point measures. For example, if I have a hundred rain gauges across the city, I can ask my GIS to create a rainfall raster, a continuous surface which estimates what the rainfall amount was in areas where there were no gauges. GIS software and apps have tools for analyzing raster data that are really easy to use because much of the science is built into the tool. Construction designers can use elevation data for line-of-sight studies. For example, I know of a company that needed to install a petroleum storage tank in Colorado, and they wanted to make sure the tank was not visible from the road. Using GIS, the company was able to place the tank where existing berms and little hills in the area would obscure it. This line-of-sight concept is also used to plan the location of cell towers and imagine what the view would be from the third floor of a new building. Impervious surfaces,
>
> **[1:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/analysis-with-imagery-and-surfaces?u=76281980&t=95)** surfaces like parking lots and roads that water can't soak through are a significant factor in urban flooding and pollution runoff. Using remotely sensed imagery in a GIS, you can calculate the percentage of impervious surfaces in an industrial complex and use that information to recommend installing retention ponds or green space to alleviate some of the risks. Engineers, architects, and planners often need to do cut-fill analysis. Suppose you're about to build a new hospital on a big piece of land, but the ground is sloped. A cut-fill analysis will tell you how much land you need to remove from one area and how much land you need to add everywhere else to level out the land. GIS makes this relatively easy. The best part of doing analysis with raster data is that so much of this data is already available for free from government agencies. So the GIS software has the tools that know the science and the data is readily available. You just have to put the two together and you can start solving spatial problems with raster data.

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
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=0)** Government agencies, private data vendors, and even nonprofits have been sharing GIS data for decades. Using freely available, trusted data is how you populate a brand-new GIS. Much of that data is shared out on a data hub. A hub is the central part of a wheel from which the spokes rotate. The term is now used to describe the effective center of activity or the center of a network. The GIS data world has a hub like that, the ArcGIS Open Data Hub. That's where you start when you're looking for GIS data. Governments and other organizations all over the world have shared their GIS data out in this open data hub. Want to get GIS data that shows the location of all the cemeteries in Texas? Search the data hub for Texas Cemeteries and either download the data or just copy the URL and add it to your map as a service. Now, not every organization shares their data in the ArcGIS Hub. Many prefer to share it with you directly from their own hub or even just on their website. In the United States, there are several federal government agencies that share GIS data. You can get elevation data and aerial photos, plus surface geology and soils data for the entire U.S. from the U.S. Geological Survey. The U.S. Forest Service, Fish and Wildlife, Department of Environment, and the National Oceanographic and Atmospheric Agency, NOAA, all share GIS data.
>
> **[1:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/identifying-gis-data-sources?u=76281980&t=95)** There are many others. You can find the federal data on data.[geoplatform.gov](https://geoplatform.gov). Pretty much anything you want. Just use a search engine to search for the location and GIS data. Nonprofits and university research centers share GIS data. Even local governments from huge cities like London, New York City, and Bangalore to very small towns all share their GIS data out online. Much of it is free. Occasionally, there's a small charge to cover the cost of getting the data together for you. And if you can't find the data that you need in one of these locations, there are lots of data vendors who sell GIS data. And finally, if you can't find the data you need already out there somewhere, you can make your own. You can draw it in on the screen, you can collect it with GPS devices, have surveyors collect it, trace it off aerial photos, or import it from your CAD software. GIS data is easy to get, so there's no reason to wait. You can get started with GIS quickly.

> [!info]- Semantic Content
>
> **Env Vars:** gis (14), url (1), noaa (1), gps (1), cad (1)
> **CLI Commands:** find (3), make (1)
> **URLs:** [geoplatform.gov](https://geoplatform.gov) (1)
> **Exercise Files:** download the (1)

#### [Creating your own GIS data](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=0)** Suppose you have the task of creating a GIS for an industrial complex. How would you get data for it? Well, most GIS software comes with a built-in base map of aerial imagery. So when you open your GIS for the first time, you just turn on the base map, you search for your facilities address, and [Zoom](../../Skills/Software%20Development/Zoom.md) in until you can see it. Now the imagery that comes with the software might be a few years old, so if you've had many recent changes at your facility, you might hire a drone pilot or an aerial photo company to acquire newer imagery. Now, to add your specific data, you would start with the most prominent features in your complex, like the buildings and parking lots. You could trace these off aerial photos if they existed when the photo was taken. Or if you have original plans or blueprints of these structures in a CAD format, that's Computer-Aided Design software like [AutoCAD](../../Skills/Software%20Development/AutoCAD.md) or MicroStation, then you could import these files. If all you have are paper versions of these blueprints, that's okay too. You can scan them and trace them right into your GIS. You could even hire a surveyor to go out and survey the facility. Which of these methods you choose depends on how much time you have, how much money you have, and exactly how accurate you need to be with your locations. Now about getting all the other things from your facility into the map: stop signs, fire hydrants, fences, trees, if your aerial photos are detailed enough, you might be able to draw them in from the photos,
>
> **[1:35](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/creating-your-own-gis-data?u=76281980&t=95)** but more than likely you're going to need to go out and GPS these locations. You can do this with an app on your phone or a tablet, but the phone will need to be Bluetooth to an actual GPS receiver device to get accurate locations. The GPS in your phone isn't good enough for GIS mapping. You can buy a GPS receiver relatively inexpensively, or you may be able to rent one for a few days. So you'll go out in the yard and you'll walk up to the fire hydrant, put the phone or device right over it, push a button on the app, and the location gets recorded. While you're out there, you can enter information about the hydrant, like what color is it, how many connections it has, its condition, and maybe even the manufacturer if you want. There are devices in the world that send data to GIS, like traffic cameras and weather stations, as well as tools in GIS to automatically create data like drawing a 10-meter buffer around the water line to show a right of way. There are lots of ways to get GIS data into your GIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [AutoCAD](../../Skills/Software%20Development/AutoCAD.md) (1)
> **Env Vars:** gis (9), gps (4), cad (1)


### 5. GIS as a Spatial Platform

[↑ Back to Table of Contents](#table-of-contents)

#### [Enterprise-level GIS](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=0)** A GIS can be as simple as one person using one software on one computer, but more commonly, GIS maps, data, and tools are shared across an entire organization, allowing everyone to see the same data. This is called Enterprise IS. This allows for one version of the truth across the entire organization. Let me describe a hypothetical enterprise GIS for a local city government. Local governments have a lot of departments responsible for all aspects of running a city. All of these departments can see the same data displayed in maps that are relevant to their work. The way this works is that the city staff use desktop software to create, manage, and analyze the GIS data, which is stored in an enterprise geodatabase. GIS staff then published that data through the server as web services stored in a web portal. Management, field crews, and anyone who needs to access the GIS data through a mobile phone or a tablet accesses these web services. Some of that data can also be shared out to the public through web and mobile apps like [Dashboards](../../Skills/Data%20Science/Dashboards.md) and story maps. Engineers and planners can look at maps in powerful desktop software. They can manage repairs and strategize future growth. Field crews who are inspecting and repairing water lines can access maps of the lines on a mobile device while out in the field. Fire chiefs can see a map of where all the calls for service were last month and
>
> **[1:38](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/enterprise-level-gis?u=76281980&t=98)** see which fire hydrants have been inspected this year. An enterprise GIS provides maps, data, and geospatial apps across an entire organization so that everyone sees the same data at the same time, and the data only has to be created and maintained by one group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Env Vars:** gis (7)
> **Definitions:** is called (1)

#### [Mobile and web GIS](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=0)** GIS data can be pushed to mobile devices and web apps for the benefit of managers and field crew who are not always sitting at a desktop computer. After watching this lesson, you'll be able to list a variety of ways that mobile and web GIS applications are used. There's so many different doors that can get you to GIS data. Let me show you a few examples. GIS [Dashboards](../../Skills/Data%20Science/Dashboards.md) are web apps that have a map or two at their center, and a series of charts and [Statistics](../../Skills/Data%20Science/Statistics.md) around the map that give details about what's going on in the area. This dashboard shows the pavement quality compared to traffic volumes in Tallahassee, Florida. I can change the traffic count indicator on the left to say 20,000, and then both maps would update to show only roads that have traffic volumes of over 20,000 cars per day. All of the charts would update too to show the data for just those roads. Another way that you might see GIS data on the web is through a story map. A story map combines maps with a storyline, text, photos, graphics, charts, reports, and other supporting details to give the full story of a situation. They can be used for fun like mapping a recent vacation, but can be used for very serious work as well, like explaining safety procedures around a facility, showing the impact of a recent hazardous material spill, or showing the public alternative routes during a parade or a festival. Here's an example of a story map used to share information about a Healthy Parks
>
> **[1:37](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/mobile-and-web-gis?u=76281980&t=97)** initiative in Travis County, Texas. And here's another one explaining the extent of opioid use in Tennessee. Custom web applications can be built, many without even writing code. There are applications that have these sets of widgets that you can move around to configure exactly the app you want, such as this City of London GIS app. And what's important is that these maps can be configured to hit the same web services that are used by the internal city staff, meaning there's no need to create and maintain several copies of the data or worry about pushing the updates to all the maps and apps that are being used. This is live up-to-date data. If you have the time, take a look at your local government's website to see if they have any GIS apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** gis (7)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Putting it to practice](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundations-of-geographic-information-systems-gis-25669115/putting-it-to-practice?u=76281980&t=0)** Well, that's all I have to tell you right now about GIS. There's lots more, of course. But congratulations, you've made it to the end of this course. Thanks for watching. Now that you understand what GIS is and its strengths, I hope I've gotten you thinking about how to integrate GIS into your daily tasks and thinking about how geospatial technologies can help you pull more out of your data by adding that spatial component. It's easy to get started with GIS. If you're looking for where to start, I suggest taking a look at ArcGIS. If you'd like to give it a try, you can go to [arcgis.com](https://arcgis.com) and get a free public account to explore other people's maps and even create your own GIS maps. There's lots of free data to get started with. There's also an ArcGIS home use license, which gives you both web GIS and desktop software. It's available for a small annual fee. And I hope you'll connect with me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and follow the TeachMeGIS site. Also, check out the TeachMeGIS YouTube site for GIS tips and tricks. I'm excited for you to start your geospatial adventure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** gis (7)
> **URLs:** [arcgis.com](https://arcgis.com) (1)
> **UI Navigation:** go to (1)


## Instructor

- [Jennifer Harrison](../../Instructors/Data%20Science/Jennifer%20Harrison.md)
- [Madecraft](../../Instructors/Data%20Science/Madecraft.md)

## Skills Covered

- Geographic Information Systems (GIS)

## Path Context

### In [Advance Your Skills in GIS](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20GIS.md)
← [QGIS and Python for AEC](QGIS%20and%20Python%20for%20AEC.md) | **6 of 9** | [Learning ArcGIS Python Scripting](Learning%20ArcGIS%20Python%20Scripting.md) →

## Appears In

- [Advance Your Skills in GIS](../../Paths/Data%20Science/Learning%20Paths/Advance%20Your%20Skills%20in%20GIS.md)

## Related Courses

_Courses sharing skills:_

- [Real World Gis](Real%20World%20Gis.md) — Geographic Information Systems (GIS)
- [Creating Maps with R](Creating%20Maps%20with%20R.md) — Geographic Information Systems (GIS)

---

[↑ Back to top](#)