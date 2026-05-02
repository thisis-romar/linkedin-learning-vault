---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-qgis-2
url: "https://www.linkedin.com/learning/learning-qgis-2"
duration_minutes: 177
duration: 2h 57m
level: Beginner
updated: 10/25/2019
learners: 48995
skills:
  - Quantum GIS
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEldakfVX9iVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1571245488991?e=2147483647&amp;v=beta&amp;t=rTT_uEDzJfQoByh_-Ezxzq8qKrSvgrceUNAc69rZrWs"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Skills in GIS]]'
prev_courses:
  - '[[ArcGIS Pro Essential Training]]'
next_courses:
  - '[[InfraWorks and ArcGIS- AEC Collaboration]]'
path_nav: '[{"path":"Advance Your Skills in GIS","position":3,"total":9,"prev":"ArcGIS Pro Essential Training","next":"InfraWorks and ArcGIS- AEC Collaboration"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/quantum-gis
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Learning%20QGIS.md)

![Learning QGIS](https://media.licdn.com/dms/image/v2/C4E0DAQEldakfVX9iVw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1571245488991?e=2147483647&amp;v=beta&amp;t=rTT_uEDzJfQoByh_-Ezxzq8qKrSvgrceUNAc69rZrWs)

# Learning QGIS

> Enrich your GIS data and make more effective maps with QGIS. Gordon Luckett shows how to get QGIS up and running on your computer and create both 2D and 3D maps with vector and raster data. Plus, learn how to stylize maps, get more insights from data with overlays and heat maps, and publish results with powerful Python-driven plugins for QGIS.

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2) | 2h 57m | Beginner | 49K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Exploring the powerful world of QGIS](#exploring-the-powerful-world-of-qgis)
- [**1. Understanding and Installing QGIS**](#1-understanding-and-installing-qgis) (4 videos)
  - [Installing QGIS](#installing-qgis)
  - [Understanding the types of QGIS installs](#understanding-the-types-of-qgis-installs)
  - [Overview of QGIS features, part 1](#overview-of-qgis-features-part-1)
  - [Overview of QGIS features, part 2](#overview-of-qgis-features-part-2)
- [**2. Vector Data with QGIS**](#2-vector-data-with-qgis) (3 videos)
  - [Types of vector data in QGIS](#types-of-vector-data-in-qgis)
  - [Add shapefiles to QGIS](#add-shapefiles-to-qgis)
  - [Add WFS data to QGIS](#add-wfs-data-to-qgis)
- [**3. Raster Data with QGIS**](#3-raster-data-with-qgis) (5 videos)
  - [Types of raster data in QGIS](#types-of-raster-data-in-qgis)
  - [Add ECW data](#add-ecw-data)
  - [Add WMS data](#add-wms-data)
  - [Add DEM data](#add-dem-data)
  - [Creating contour lines from DEM](#creating-contour-lines-from-dem)
- [**4. 3D Maps**](#4-3d-maps) (3 videos)
  - [Creating 3D maps](#creating-3d-maps)
  - [3D configuration and elevation](#3d-configuration-and-elevation)
  - [3D animations](#3d-animations)
- [**5. Styling Data**](#5-styling-data) (6 videos)
  - [Point layers](#point-layers)
  - [Polyline layers](#polyline-layers)
  - [Polygon layers](#polygon-layers)
  - [Thematic layers, part 1](#thematic-layers-part-1)
  - [Thematic layers, part 2](#thematic-layers-part-2)
  - [DEM layers](#dem-layers)
- [**6. Labeling Features**](#6-labeling-features) (2 videos)
  - [Label vector data, part 1](#label-vector-data-part-1)
  - [Label vector data, part 2](#label-vector-data-part-2)
- [**7. Changing Default Properties**](#7-changing-default-properties) (2 videos)
  - [Project properties, part 1](#project-properties-part-1)
  - [Project properties, part 2](#project-properties-part-2)
- [**8. Printing with Print Layout**](#8-printing-with-print-layout) (2 videos)
  - [Adding maps](#adding-maps)
  - [Adding elements](#adding-elements)
- [**9. Creating New Data**](#9-creating-new-data) (4 videos)
  - [Creating new vector vata](#creating-new-vector-vata)
  - [Exporting layers to shapefiles](#exporting-layers-to-shapefiles)
  - [Adding data from Excel (CSV)](#adding-data-from-excel-csv)
  - [Editing existing data](#editing-existing-data)
- [**10. Using Advanced Tools**](#10-using-advanced-tools) (3 videos)
  - [Overlay two vector layers](#overlay-two-vector-layers)
  - [Create a heatmap from points](#create-a-heatmap-from-points)
  - [Create centroids from polygons](#create-centroids-from-polygons)
- [**11. Using Plugins**](#11-using-plugins) (2 videos)
  - [Adding and using Street View plugin](#adding-and-using-street-view-plugin)
  - [Adding and using qgis2web plugin](#adding-and-using-qgis2web-plugin)
- [**12. Python in QGIS**](#12-python-in-qgis) (2 videos)
  - [Using the Python Console](#using-the-python-console)
  - [Create a Python script](#create-a-python-script)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Exploring the powerful world of QGIS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/exploring-the-powerful-world-of-qgis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/exploring-the-powerful-world-of-qgis?u=76281980&t=0)** - [Instructor] Nowhere else will you find an enterprise mapping system that does everything most commercial packages can do for absolutely free.
>
> **[0:07](https://www.linkedin.com/learning/learning-qgis-2/exploring-the-powerful-world-of-qgis?u=76281980&t=7)** We're going to deep dive into all the amazing GIS and mapping tools that QGIS has to offer.
>
> **[0:13](https://www.linkedin.com/learning/learning-qgis-2/exploring-the-powerful-world-of-qgis?u=76281980&t=13)** I'm Gordon Luckett, CAD and GIS consultant and founder of Arrow Geomatics, Inc., and I have been working with opensource and commercial GIS programs for over 20 years.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/exploring-the-powerful-world-of-qgis?u=76281980&t=22)** Don't settle for using GIS trial versions.
>
> **[0:25](https://www.linkedin.com/learning/learning-qgis-2/exploring-the-powerful-world-of-qgis?u=76281980&t=25)** Jump right into mapping using opensource GIS.
>
> **[0:28](https://www.linkedin.com/learning/learning-qgis-2/exploring-the-powerful-world-of-qgis?u=76281980&t=28)** So join me in my LinkedIn Learning course Learning QGIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** gis (5), [[LinkedIn]] (1)
> **Env Vars:** gis (5), qgis (2), cad (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding and Installing QGIS

[↑ Back to Table of Contents](#table-of-contents)

#### Installing QGIS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=0)** - [Instructor] In this video, we will download the QGIS installer and ensure we install the appropriate components to run QGIS on our computer.
>
> **[0:07](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=7)** In this case, we're going to install the Windows edition.
>
> **[0:10](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=10)** So simply go to the download site for QGIS, again it's 3.8.3 Zanzibar edition.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=15)** So we'll click on the 64 bit.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=18)** Most computers nowadays are 64 bit, but if you have an older computer you can still run the 32 bit edition.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=24)** Again, there's older versions as version 3.4 or if you're running a macOS you can download it from here or Linux and so on.
>
> **[0:32](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=32)** In this case we're going to install version 3.8 64 bit.
>
> **[0:35](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=35)** So we're going to download it.
>
> **[0:37](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=37)** Once it's downloaded, you can just double click on the file, say yes to install, Zanzibar in my case, and we'll get prompted.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=44)** And it's very easy set up in this case, so I hit Next, I Agree.
>
> **[0:48](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=48)** It's going to put it under Program Files, QGIS 3.8.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=51)** You can choose to install all the data sets.
>
> **[0:54](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=54)** In this case I'm not going to bother installing.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=56)** It comes with North Carolina, South Dakota, and Alaska.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=59)** I'm not going to install any of those data sets.
>
> **[1:01](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=61)** I'm just going to install the product.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=63)** Click Install and it installs all the different DLLs and required programs to get your QGIS up and running and just click Finish to complete the install.
>
> **[1:17](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=77)** Now if you look in your C, Program Files, QGIS 3.8, you'll see that's where it was installed.
>
> **[1:25](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=85)** You'll see all the applications inside there.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=88)** Now to launch it, you can simply go to your Start and look at your Program Files.
>
> **[1:33](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=93)** It should be under QGIS.
>
> **[1:34](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=94)** You scroll down to Q and there's QGIS 3.8 and we can pick on, oh there's two, so let's pick on that one.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=102)** It should just install the QGIS 3.8, not all the other products.
>
> **[1:46](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=106)** And there we are.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=107)** We're inside of the QGIS project, brand new project, and it's installed properly.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/installing-qgis-2?u=76281980&t=111)** And so, now that we've installed QGIS we are ready to explore all the amazing GIS features and functionality that QGIS has to offer and it's installed on your PC, so you're ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), [[Windows]] (1), [[Linux]] (1), hit (1), next (1)
> **Env Vars:** qgis (12), gis (1)
> **Prerequisites:** install (10), set up (1)
> **Versions:** 3.8 (4), version 3 (2), 3.8.3 (1)
> **UI Navigation:** go to (2), click on (2), scroll down (1)
> **Code Identifiers:** macos (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Understanding the types of QGIS installs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=0)** - [Instructor] Since QGIS can be installed on many platforms, and is bundled with many types of software, it is important to understand the options for installing prior to installing on your own computer.
>
> **[0:10](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=10)** We will review the flavors of install and what software can be installed.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=14)** So, if we go to the download page for QGIS, and at the time we've recorded this, we're using the QGIS 3.8.3 Zanzibar release.
>
> **[0:23](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=23)** Now, some of the installation downloads we have, we have a download for Windows.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=27)** You'll see that there's the OSGeo4W Network installer, both 64-bit and 32-bit, as well as the stand-alone versions.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=36)** Now, the difference between the network installer and the stand-alone versions is that the stand-alone version usually just installs QGIS by itself whereas the network installer gives us an option for all sorts of opensource software to install, such as SAGA and GRASS, as well as all the OGR tools that are for translation of files and so on.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=56)** But in this case, I installed the Standalone Install Version 3.8 64-bit on a Windows box.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=63)** Now we also have some more stable versions such as the 3.4 version, we have downloads for Mac, downloads for Linux and BSD.
>
> **[1:12](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=72)** There's even a download for Android.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=73)** If you download any of these, you can always come back and reinstall.
>
> **[1:17](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=77)** In this case we did the standalone installer, so you download that, it'll come down and you can install it that way.
>
> **[1:23](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=83)** I'll just close that message.
>
> **[1:24](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=84)** Now, the standalone version is definitely the easiest way to install, but you may be missing out on a lot of really great tools that come with the network installer, just remember that.
>
> **[1:34](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=94)** Now, if you are using a Mac, there are installs for Mac that you can download.
>
> **[1:39](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=99)** You may require some other formats and other installers to get it up and running, but I've had really good luck with this installer on my Mac, my MacBook Pro, so it's been great.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=109)** The Linux versions were great as well.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=111)** I've had it installed on my Ubuntu for a while, it works really well.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=115)** I haven't tried BSD and the Android is really neat that way you can actually open up QGS projects on your Android device.
>
> **[2:01](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=121)** Unfortunately, there's none for your iPhone yet.
>
> **[2:04](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=124)** But this is a really great product to be installing.
>
> **[2:07](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=127)** It's amazing that you have all these different OSs and you can run QGIS is on them.
>
> **[2:12](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=132)** I mean so many platforms are supported with QGIS even Android, you'll have to narrow down the installer you want to use.
>
> **[2:17](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=137)** Once you consider all these versions of QGIS, the platform, and various software you may want to install, you're actually ready to install and that's what I'm doing now.
>
> **[2:25](https://www.linkedin.com/learning/learning-qgis-2/understanding-the-types-of-qgis-installs?u=76281980&t=145)** I'm going to download this, and install it, and then we can use QGIS on our Windows desktop.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (4), [[Windows]] (3), [[Linux]] (2), [[Ubuntu]] (1), product (1)
> **Env Vars:** qgis (8), bsd (2), saga (1), grass (1), ogr (1)
> **Prerequisites:** install (8)
> **Versions:** 3.8.3 (1), version 3 (1), 3.4 (1)
> **Analogies:** such as (2)
> **Code Identifiers:** iphone (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Overview of QGIS features, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=0)** - [Instructor] Understanding the components of QGIS Help to guide you through the install process and use of the product.
>
> **[0:06](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=6)** We will explore all of the components of QGIS for data collection, analysis, mapping and sharing in data.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=12)** Let's do a quick overview of what QGIS has to offer now.
>
> **[0:16](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=16)** When I first open QGIS I like to create favorites.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=20)** Favorites help me locate my files when I need them.
>
> **[0:23](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=23)** In this case I made a favorite that goes directly to my exercise files on my desktop.
>
> **[0:28](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=28)** That way I can go to the files and folders in my exercise files when I need them.
>
> **[0:32](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=32)** If you don't see favorites or you don't see your browser simply go View Panels, and check the browser check box.
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=41)** That way the browser panel will appear.
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=43)** So I created a new favorites.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=44)** So I go into my favorites and look inside my exercise files.
>
> **[0:48](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=48)** You'll see I have CVS, RASTER, shape.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=50)** If I expand shape you'll see a number of shapefiles inside of there, for example bike routes.
>
> **[0:55](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=55)** If I right click on Bike Routes and click Layer Properties, you will see three tabs.
>
> **[1:01](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=61)** The first one is metadata.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=63)** Metadata is basically information about data.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=66)** In this case, the layer properties of the bike routes show me where the path of the file is, what kind of storage it is, meaning an ESRI shapefile.
>
> **[1:14](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=74)** You will see what geometry it is, a line, and also the coordinate system In this case it's a UTM Zone 10 in meters.
>
> **[1:22](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=82)** And that is the EPS G code 26910.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=86)** That's a very powerful code.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=88)** It allows you to know what the coordinate system of this file is.
>
> **[1:31](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=91)** The reason we know that is because in the file folder, in the shapefile, in the bike routes, there's a PRJ file.
>
> **[1:39](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=99)** If I look at the PRJ file, you will see a project code of UTM_Zone10_983.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=109)** And QGIS is using that PRJ file to tell you where that file is in the world.
>
> **[1:54](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=114)** It's a coordinate system.
>
> **[1:56](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=116)** If you don't have a PRJ file, you will have to manually tell the shapefile when you add it to your QGIS project what it is.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=123)** And if you wanted to preview it, you can click on preview and zoom in and out, have a look.
>
> **[2:07](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=127)** Also you can look at the attributes.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=129)** That's the data or the textual data that comes with each shapefile.
>
> **[2:13](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=133)** And you can see there's a street name and a surface and so on.
>
> **[2:17](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=137)** We can do the same with parcels.
>
> **[2:18](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=138)** So if I right click in parcels and look at the layer properties, again you will see that it's in the same coordinate system to see that it's a polygon this time or a multi-polygon.
>
> **[2:27](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=147)** If I preview it you can see all the parcels.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=149)** And again the attributes are different.
>
> **[2:31](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=151)** So in this case it's a parcel, is the type, and a house number and street name and so on.
>
> **[2:37](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=157)** So those are some of our metadata inside of our browser.
>
> **[2:40](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=160)** Let's close up the favorites and look at the different types of data we have to connect to.
>
> **[2:45](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=165)** We can connect to an open source GEO package, those are packages that bundled up.
>
> **[2:49](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=169)** You can actually create those in QGIS.
>
> **[2:52](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=172)** A spatial-like database, a postGIS database, MSSQL, that's actually Microsoft SQL server, spatial data and the Oracle one, again, is that Oracle spacial data.
>
> **[3:04](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=184)** In fact even if you store spacial data in another GIS such as esraGIS, you can actually connect to that special data directly using MSSQL or Oracle.
>
> **[3:13](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=193)** You can connect to Db2 as well.
>
> **[3:16](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=196)** And then we all have the open web services such as WMS and WMTS.
>
> **[3:21](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=201)** For WMS I have Toporama, so if we look at the layer properties, I actually have Toporama; you can see the URL there.
>
> **[3:28](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=208)** You can see the coordinate system.
>
> **[3:30](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=210)** It's in a Canada atlas projected and we can preview that and look at what the WMS looks like.
>
> **[3:36](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=216)** There it is there.
>
> **[3:36](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=216)** It's coming from the Canadian natural resources.
>
> **[3:39](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=219)** Okay, so that's the WMS.
>
> **[3:41](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=221)** We also have XYZ tiles such as Openstreetmap.
>
> **[3:44](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=224)** Let's look at those layer properties.
>
> **[3:47](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=227)** You can see that it's coming from www.[theopenstreetmap.org](https://theopenstreetmap.org).
>
> **[3:50](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=230)** And if we hit preview, there it is.
>
> **[3:51](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=231)** It's the whole world.
>
> **[3:52](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=232)** We can actually add that to our map later.
>
> **[3:55](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=235)** And we have the other WCS and WFS as well.
>
> **[3:58](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=238)** Some interesting connections are The ArcGISMapServer and the ArcGISFeatureServer.
>
> **[4:04](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=244)** That means if you've got the URL of a public ArcGIS server that's hosting map services or feature services, you can connect to them and actually have them brought into your QGIS project.
>
> **[4:16](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-1-2?u=76281980&t=256)** As well, there's the open source GeoNode server, and you can also pull in data from there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (11), [[Metadata]] (3), database (2), product (1), [[Zoom]] (1)
> **Env Vars:** qgis (8), prj (4), wms (4), mssql (2), url (2)
> **Analogies:** such as (3), for example (1)
> **UI Navigation:** click on (2), go to (1)
> **Exercise Files:** exercise files (3)
> **Code Identifiers:** postgis (1), esragis (1)
> **URLs:** [theopenstreetmap.org](https://theopenstreetmap.org) (1)
> **Prerequisites:** install (1)

#### Overview of QGIS features, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=1)** - [Instructor] So if I wanted to bring some of this data into my current map, I'll go back to my favorites, and I'll bring in the buildings and hit okay.
>
> **[0:11](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=11)** It's asking about coordinate system, and you notice when I dragged and dropped that, it prompted about coordinate system in the bottom right corner.
>
> **[0:19](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=19)** Now it says EPSG 26910.
>
> **[0:23](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=23)** That means it's in the UTM Zone 10 meters; it's already assigned the project to the first file I dragged in, or the first geospatial data I've put in my map, so now the default map is in that UTM zone.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=36)** Let's bring in our parcels as well, drag and drop, and they appear.
>
> **[0:40](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=40)** Now, on the layers area, you'll see parcels above buildings.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=44)** If you don't see layers, again go view, panels, and check the layers, and that way, we can bring in the layers panel.
>
> **[0:52](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=52)** Oh, let's put the buildings above parcels, because parcels were obscuring the buildings.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=56)** So if I zoom in, I'm just using my mouse, there's a wheel on my mouse as I roll in and roll out.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=63)** You can also use the zoom tools at the top, so you can hit zoom in and make a window.
>
> **[1:08](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=68)** Again, I like using the wheel of my mouse, rolling back and forth, can zoom out manually as well, like that, or use your pan hand, like that, if you click your wheel mouse or the middle button on your mouse, you can pan as well anytime.
>
> **[1:23](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=83)** Okay, so my parcels are quite dark, so I'm going to double click on parcels and just change the color from that dark brown to a really light color, maybe move towards this end of the spectrum, maybe make it really light.
>
> **[1:37](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=97)** Okay, like that.
>
> **[1:39](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=99)** Hit apply.
>
> **[1:40](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=100)** That's better, it's almost gray.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=102)** Maybe even a baby blue.
>
> **[1:44](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=104)** So there we are, we've changed our map.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=107)** So something else I'd like to do is actually bring in some air photos, so if I drag and drop one of these ECW's, that's enhanced compressed wavelet, it doesn't know what coordinate system it's in, so I'm actually going to pick one here.
>
> **[1:59](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=119)** Let's see here what we're going to pick.
>
> **[2:01](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=121)** Let's hit okay.
>
> **[2:02](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=122)** No, it still doesn't know where it is.
>
> **[2:04](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=124)** Let's zoom out.
>
> **[2:06](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=126)** And there it is, so I'm going to actually override the coordinate system, 'cause it doesn't know where it is.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=131)** Move it above, and I right click on the properties, and sure enough, it thinks it's in EPSG 4326.
>
> **[2:18](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=138)** I'm actually going to put it to what the project is in, it's actually UTM, so if I hit okay, there it appears in the right location, right where I need it.
>
> **[2:26](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=146)** So often you'll find with air photos, RASTER, that sort of thing, you may have to go back in and set the coordinate system afterwards again, just make sure the source coordinate system is set correctly, so it appears, and maybe I'll move that down.
>
> **[2:40](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=160)** Now what's really neat with this map is, I now have all these tools at my disposal.
>
> **[2:45](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=165)** I have air photos, I've got parcels and so on.
>
> **[2:49](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=169)** Now if I wanted to edit something, I could do that easily, so let's just highlight parcels.
>
> **[2:54](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=174)** I'll toggle editing, and I'll actually pick on an object, so there's this one right here, and you'll see the little Xs, and each one of those little Xs of this parcel are nodes I can modify.
>
> **[3:05](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=185)** I actually can pick on a node and move it around, if I wanted to.
>
> **[3:09](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=189)** I'm not going to do that, but what I'm going to do is look at the attributes, so I can actually modify the attributes as well, so you'll see this is a water lease.
>
> **[3:18](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=198)** The house number's zero, actually, no, I'm going to change it to zero, you see it changed to red, so I hit okay.
>
> **[3:23](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=203)** And now if I actually toggle my editing, it'll prompt me, should I save it?
>
> **[3:28](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=208)** Yes.
>
> **[3:29](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=209)** And now if I use my identify tool and pick on that, you'll see the house number that I've changed in my identify results pane is now zero, and so on.
>
> **[3:39](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=219)** So let's toggle editing again, and this time I'm actually going to draw a brand new parcel, so I'll just draw one here.
>
> **[3:48](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=228)** 'Kay.
>
> **[3:52](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=232)** And I right click to finish, and I'll just say it's a junk layer.
>
> **[3:58](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=238)** I hit okay, and it appears.
>
> **[4:01](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=241)** Once I finish toggling editing, I can save it, and there it is inside my file.
>
> **[4:05](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=245)** And if I want to toggle editing again, I can highlight it, and actually let's highlight this one, and I'm just going to delete it, and then I'll toggle editing again and save it.
>
> **[4:16](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=256)** So there you go.
>
> **[4:16](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=256)** So I can easily edit or create new features, or even delete features, and that's actually editing that live shape file that we were looking at.
>
> **[4:25](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=265)** And this could be any kind of data.
>
> **[4:27](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=267)** It could be SQL Server, it could be Oracle, and so on; in this case, we're using shape files.
>
> **[4:31](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=271)** So let's look at some other things we can do.
>
> **[4:33](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=273)** Now, I can actually insert a 3D map view that basically takes our current map and renders it in a 3D window.
>
> **[4:42](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=282)** Now, initially, it loads in two dimensions, so it'll just put in our aerial photo, our parcels, and our buildings in a two dimensional map, but if I use that wheel mouse again, I can actually press it and roll around and zoom in and out, and actually look at this in three dimensions, and use this three dimensional map.
>
> **[5:02](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=302)** Now if I had three dimensional data to add, such as 3D parcels and so on, or 3D extruded buildings, I can add that to this map, or even a digital elevation model, I can contour it to the 3D map.
>
> **[5:15](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=315)** Now these are some pretty powerful things.
>
> **[5:16](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=316)** We can edit data, we can create very pretty maps, we can make maps in three dimensions.
>
> **[5:22](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=322)** We can also publish this, so if we wanted to make a brand new, printable map, or maybe put this out into a PDF, under project I'd simply just say a new print layout, and I'll just say printing, and what I can do is I can add items.
>
> **[5:38](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=338)** I can add the map to my current session, or the 3D map to my current session like this.
>
> **[5:42](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=342)** I can add all sorts of things like a new north arrow, move that around.
>
> **[5:47](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=347)** I can add items such as scale bar, put that across the bottom here.
>
> **[5:52](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=352)** I can even put in a brand new legend, so I can put the legend over here, and there we go.
>
> **[5:57](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=357)** So we can see that, and I can plot this to PDF or to the plotter and so on, so it's very powerful.
>
> **[6:03](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=363)** We have so many things at our disposal, such as all the data we can connect to, all the editing tools we have, all the live services we can connect to, and even a 3D maps.
>
> **[6:14](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=374)** There's all sorts of other things, such as RASTER analysis we can do, as well as databases we can connect to.
>
> **[6:20](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=380)** It just gives us a whole plethora of things we can do with QGIS.
>
> **[6:25](https://www.linkedin.com/learning/learning-qgis-2/overview-of-qgis-features-part-2?u=76281980&t=385)** You've learned about all the key components of QGIS, and what tools you have at your disposal to create data, maps, and to share your information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), hit (7), [[Zoom]] (6), node (1), prompt (1)
> **Env Vars:** utm (3), epsg (2), raster (2), pdf (2), qgis (2)
> **UI Navigation:** toggle (5), drag and drop (2), click on (2)
> **CLI Commands:** make (5), find (1), node (1)
> **Analogies:** such as (4)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Vector Data with QGIS

[↑ Back to Table of Contents](#table-of-contents)

#### Types of vector data in QGIS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=0)** - [Instructor] Vector data, meaning data such as points, lines, and polygons are extremely important to QGIS.
>
> **[0:06](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=6)** The bulk of your work will be done using this kind of data.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=9)** Now, to add that kind of data, we can use the layer, add layer, add vector layer.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=15)** To add a vector layer, we can choose a file, a directory, a database, or a protocol.
>
> **[0:21](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=21)** File, we can browse to any file we want.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=24)** So some of the files we can choose are things like ZIP files from GDAL, arch info coverage, that's an old one, DNA, again, another old one, DXF files exported from AutoCAT, comma separated value CSVs which you can open in Excel, all the shape files, personal geo database, we can look at other types of shape files, two types here, because on is an open search version, we have all sorts of geo JSON files, geo packages, GORSS, even KML which is from Google, map info, all sorts of files all the way down to topple JSON and so on.
>
> **[1:04](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=64)** We can even grab a KML, for example, I can add a KML at any time I want.
>
> **[1:09](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=69)** Now for directory, we have different types.
>
> **[1:11](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=71)** We have open file geo database, which is more of a directory control, so file geo databases are basically directories, they're not single files like a shape file.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=81)** US Census, binary coverages, the old binary coverages we can pick on that directory.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=86)** Now the database, this is very powerful because what we can do is we can connect directly to Oracle Spatial, or points from ODBC, or an ESRI personal geo database, MS SQL, so that's Microsoft's SQL server is there's a column in there with geography and geometry data types, postgres SQL, we can go in there, again, if there's geometry data types, as well as my SQL.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=107)** If any of those databases, anything from Oracle to my SQL has spatial data as a column type, we can use that to pull it into our QGIS project.
>
> **[1:57](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=117)** Finally, there's a protocol where we can go to a URL to pull in data, so you can use the HTTP, Google Cloud Storage, or whatever point or particular file, or go directly to a geo JSON.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=128)** So a geo JSON file, basically is text file that's structured in such a way that we can bring in data.
>
> **[2:13](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=133)** So I can actually go to this URL, so it's nanimo.ca, crime reporting, API, incidence, dot geo JSON, so that's basically a geo JSON file that's streaming directly from their server, giving us all the updated incidence of crime in the area.
>
> **[2:31](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=151)** So if I put that in, choosing type geo JSON right now, and I click add, what will this do is go off to their server and pull that geo JSON data in and then I close the vector manager and there we are.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=164)** So I used the identify tool here, I can pick on any of these points, or multiple in that case, and let's have a look in our identify results, and you can see that where's the date and time it happened, you can also see the occurrence type, mischief under 5,000, that particular crime, it's a property crime, what location, it's blocked out the actual address, but you know what street it's on, and what hundred block, and so on and what neighborhood it's in.
>
> **[3:11](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=191)** So basically, this geo JSON file is coming down from their server directly, so our vector data, you've seen other types of vector data where we can actually go to our shape files, and drag and drop, say, buildings, and that's a vector data.
>
> **[3:26](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=206)** So that, too, can be added, but sometimes you need to use the layer, add layer, add vector layer, especially when it's coming from a protocol or database, or a directory.
>
> **[3:39](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=219)** It's easier to drag and drop, but sometimes you have to use directory, database, or protocol to get your data into the QGIS project.
>
> **[3:48](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=228)** So once you have your data, you've got it, it's vector data, that's how you add it, and there's a wide array of supported vector types.
>
> **[3:54](https://www.linkedin.com/learning/learning-qgis-2/types-of-vector-data-in-qgis?u=76281980&t=234)** Everything from shape files, SQL lite, and this all makes QGIS a very useful tool for mapping the analysis of this vector data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (17), [[JSON]] (9), database (7), [[SQL]] (5), [[Databases]] (2)
> **Env Vars:** json (9), sql (6), qgis (4), kml (3), url (2)
> **UI Navigation:** go to (3), drag and drop (2)
> **Analogies:** such as (1), for example (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Add shapefiles to QGIS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=0)** - [Narrator] The shapefile is a common GIS format.
>
> **[0:03](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=3)** It was created way back in 1994, by Esri, to be used with a product called Arcview.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=9)** It is still used very extensively, even though it's being phased out eventually, but it's still being used by most GISs including the Esri suite of products.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=18)** And it's used here, inside of QGIS.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=22)** Now we have multiple ways of adding shapefiles to our current session.
>
> **[0:26](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=26)** I can certainly use the browser to browse to a shapefile, and drag and drop it in.
>
> **[0:31](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=31)** For example, if I wanted to bring in the intersections, I can drag them in.
>
> **[0:35](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=35)** Click okay.
>
> **[0:37](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=37)** Or, I can drag and drop parcels.
>
> **[0:40](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=40)** Now, there's another way to bring them into my session.
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=43)** Under layer, I can click add layer.
>
> **[0:45](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=45)** Add vector layer.
>
> **[0:48](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=48)** Here I can pick a file.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=51)** And manually browse to where the shapefiles are located.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=56)** So in this case, I can bring in the easements dot shapefile.
>
> **[1:02](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=62)** Now you can rearrange the layers.
>
> **[1:04](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=64)** These are shapefiles, again.
>
> **[1:05](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=65)** I'm going to put the intersections above the easements.
>
> **[1:09](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=69)** There we go.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=70)** And you can see, here are all the vector layers.
>
> **[1:14](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=74)** So, points, polygons.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=76)** Let's add another one.
>
> **[1:17](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=77)** Perhaps we'll bring in lines.
>
> **[1:19](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=79)** Such as the road center lines.
>
> **[1:20](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=80)** Let's bring that in.
>
> **[1:22](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=82)** And what I'd like to do, is I'm dragging and dropping in the layers area, I always like to put points at the top of the list.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=88)** The layers show the display order, so I like to drag the points to the top of the list and the polygons underneath, with the line work in the middle.
>
> **[1:37](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=97)** So, normally, when you look at my legend, you'll see polygons at the bottom, lines around the middle, and points on top, that way nothing's obscured.
>
> **[1:45](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=105)** So you can see the intersections are on top of the road center lines.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=109)** And nothing's obscured by the polygons.
>
> **[1:52](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=112)** If you want to obscure, partially, you can always make a polygon, sort of transparent or semi-transparent, or something like that.
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=120)** Now remember, if I save this QGIS project, this data is not stored in the QGIS project.
>
> **[2:06](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=126)** It's still stored within the shapefile.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=129)** The QGIS project just keeps track of the color, how it looks, basically the order of the layers in the legend, and where those files are stored.
>
> **[2:19](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=139)** So if I've dragged and dropped the road center lines from my desktop exercise files, it'll remember when I open this project again, that's where those shapefiles are.
>
> **[2:28](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=148)** So if you move those shapefiles or delete them, they'll be missing from your project the next time.
>
> **[2:33](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=153)** Because they're not imported, they're just pointing to where those files are.
>
> **[2:37](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=157)** So keep that in mind when using shapefiles, that you need to know where they are, and that project needs to find them.
>
> **[2:43](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=163)** Now remember, shapefiles, I'm just going to look at the directory where they're held right now.
>
> **[2:47](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=167)** So we're going to go into exercise files data shape.
>
> **[2:50](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=170)** Now in here, you'll notice the shapefile isn't a single file at all.
>
> **[2:54](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=174)** It's actually made up of lots of things.
>
> **[2:56](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=176)** For example, the bike routes, there's a dot shapefile, which is what we're seeing inside a QGIS, but there's other files too.
>
> **[3:03](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=183)** There's an SHX, which is an index file.
>
> **[3:05](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=185)** That keeps track of the bikers, and sort of sorts them so they show up a lot faster.
>
> **[3:10](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=190)** There's also a DBF file, which is a D based file, which you can actually open up in DB reader.
>
> **[3:16](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=196)** Excel used to be able to look at this directly, actually.
>
> **[3:19](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=199)** And then there's the PRJ file, which actually keeps track of the coordinate system.
>
> **[3:23](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=203)** So it knows where in the world that bike route is.
>
> **[3:27](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=207)** So if is it in UTM, is in it latlong, and so on.
>
> **[3:30](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=210)** So that keeps track of everything.
>
> **[3:32](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=212)** So a shapefile isn't always just one file, it's usually multiple files.
>
> **[3:36](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=216)** So be sure when you're dragging and dropping, that you're grabbing the dot shapfile and not anything else.
>
> **[3:41](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=221)** So for example, if I were to drag and drop this shapefile into my current session, they should appear now.
>
> **[3:47](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=227)** Now I have bike routes appearing in my drawing.
>
> **[3:51](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=231)** So let's turn off a few of these layers so you can see.
>
> **[3:54](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=234)** Now there's the bike route.
>
> **[3:56](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=236)** So you can see them inside my drawing.
>
> **[3:58](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=238)** Now I dragged and dropped them.
>
> **[3:59](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=239)** Now if I save the project right now, again, all the bike routes and all these other shapefiles, are pointing to a particular file.
>
> **[4:05](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=245)** And if you leave your mouse over top of any of those layers, it'll tell you exactly what coordinate system it's in.
>
> **[4:10](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=250)** For example, the easements here, they're in EPSG 26, nine, 10.
>
> **[4:14](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=254)** That's UTM zone 10, meters.
>
> **[4:17](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=257)** And it also tells me what directory it's in.
>
> **[4:20](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=260)** It's in my desktop.
>
> **[4:21](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=261)** In my exercise files, under data shape easements.
>
> **[4:24](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=264)** So that's where they are.
>
> **[4:25](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=265)** So again, remember that every project, you're just pointing to data, you're not necessarily embedding that data inside the project.
>
> **[4:35](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=275)** You're just pointing to it.
>
> **[4:36](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=276)** So if that data goes missing, or changes in anyway through a third party, it's going to change inside your project.
>
> **[4:42](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=282)** Now, dragging and dropping shape files worked just as well as connecting directly.
>
> **[4:46](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=286)** So when you save your map, since the data's not imported, remember that, the map only keeps track of the path to these shape files.
>
> **[4:53](https://www.linkedin.com/learning/learning-qgis-2/add-shapefiles-to-qgis?u=76281980&t=293)** Regardless of how you attach them, if they move, the map may no longer show them as a layer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), gis (1), product (1), [[Microsoft Products|Products]] (1), next (1)
> **Env Vars:** qgis (5), utm (2), gis (1), shx (1), dbf (1)
> **Analogies:** for example (4), such as (1)
> **UI Navigation:** drag and drop (3)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [narrator] (1)

#### Add WFS data to QGIS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=0)** - [Instructor] Another type of vector data is the WFS, or Web Feature Services.
>
> **[0:05](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=5)** This is an open geospatial consortium interface that streams vector data from a service directly into your map.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=12)** Using a URL, you can pull that data right into QGIS.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=15)** Let's get set up first.
>
> **[0:17](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=17)** Under your XYZ tiles, you should be able to just drag and drop your open street map in.
>
> **[0:23](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=23)** Now the area we're interested in is Hawaii, so we're going to zoom in and just center on Hawaii in your map.
>
> **[0:31](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=31)** Now we're going to open up a browser and go to the Hawaii government site.
>
> **[0:37](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=37)** It's called geoportal.[hawaii.gov/search](https://hawaii.gov/search).
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=41)** And the first thing we're going to add are roads.
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=43)** So we're going to type roads, and we'll get the roads for Maui, so if we pick on roads, Maui, county.
>
> **[0:53](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=53)** And under APIs, we're going to pick on WFS.
>
> **[0:58](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=58)** They have a number here, they have WMS, which is raster, WFS, which is vector, geoservice, and a GEOJSON feed.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=66)** In this case, we're going to grab the WFS link, copy that, and we're going to go to the WFS link in your browser and right click and say new connection.
>
> **[1:17](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=77)** We'll just call this Hawaii roads.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=81)** We'll paste the URL in and click OK.
>
> **[1:25](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=85)** Now if we expand our WFS, Hawaii roads, we can bring in all the county roads or Maui roads.
>
> **[1:33](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=93)** So I'm just going to drag Maui roads in, click OK, and you'll see all the roads filling in for Maui.
>
> **[1:46](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=106)** There we are.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=107)** Let's go back to that site and look up contours.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=110)** So we're going to go back and do a search again, so I'll just hit back, and type contours.
>
> **[1:58](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=118)** And we have all sorts of elevation contours.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=123)** And actually, we're going to get this one here, Kahoolawe, I hope I'm pronouncing that right, elevation contours 100 feet.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=131)** There we are, we're going to pick that one.
>
> **[2:13](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=133)** Again we're going to go to the APIs and copy the WFS.
>
> **[2:19](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=139)** Okay, let's go back into QGIS, and we're going to just right click on WFS and say new connection, and we'll just say contours.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=152)** We're going to paste that URL in there, click OK, expand the contours, and I'm going to drag and drop that one in there.
>
> **[2:42](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=162)** Now the contours are quite big.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=164)** So it may take a while to load, it loaded quite quickly there, I'm actually going to bring in Lanai ones as well just to show you.
>
> **[2:55](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=175)** That should take a lot longer, because it's a much bigger area, takes a lot longer to load all those contours.
>
> **[3:03](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=183)** And here they come.
>
> **[3:04](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=184)** So all this data is coming from a WFS server.
>
> **[3:08](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=188)** So that means they're vectors.
>
> **[3:10](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=190)** We can change the colors, we can go in, for example of the Lanai, I can double click on here and if I wanted to change the color from orange to maybe a red color I could do that and hit OK, and you can totally change it.
>
> **[3:25](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=205)** Now you can't do this with the WMS layers 'cause they're raster and what you see is what you get, they're pre-authored, whereas this is vector data and I can actually look at this and I can right click on, say, the Maui roads, and look at the attribute table and see the attributes from each of the roads as it loads, so it's actually querying the server, getting all the attributes for the Maui roads.
>
> **[3:47](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=227)** So it's not just graphics that we're getting, we're getting the attributes and the vectors, and I can actually pick on one and zoom to it, which is amazing.
>
> **[3:56](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=236)** So now we have this ability to zoom into that one street and zoom right in and highlight it, that one little place right there.
>
> **[4:03](https://www.linkedin.com/learning/learning-qgis-2/add-wfs-data-to-qgis?u=76281980&t=243)** So as you can see, once you add WFS data, if the data updates on the server, QGIS will actually see this data right away because it's streaming from the WFS server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Zoom]] (4), [[Search]] (2), hit (2), web (1)
> **Env Vars:** wfs (11), url (3), qgis (3), wms (2), xyz (1)
> **UI Navigation:** click on (3), drag and drop (2), go to (2)
> **URLs:** [hawaii.gov](https://hawaii.gov) (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)


### 3. Raster Data with QGIS

[↑ Back to Table of Contents](#table-of-contents)

#### Types of raster data in QGIS
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=0)** - [Instructor] Raster data is data that is image based.
>
> **[0:03](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=3)** It's different than vector data, which is points, lines, and polygons.
>
> **[0:07](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=7)** Now, we can add various types of raster data to QGIS including digital elevation models and orthophotos.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=14)** How do we add it?
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=15)** If it was a file, we could drag and drop it from the browser.
>
> **[0:19](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=19)** For example, if I go in to my raster folder I can drag and drop an ECW directly into my map.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=27)** Alternatively, you can go layer, add layer, add raster layer.
>
> **[0:33](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=33)** Here, you can browse through a file and there's a lot of files we can choose from.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=38)** Everything from ASCI and ARC, ARC info, binary, and export files, autoCAD driver... Oh, just a note on the autoCAD driver, the DWG has to be pretty old, it had to be 2000 version or older.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=50)** It's kind of an older version.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=51)** So, if you want to bring an autoCAD into QGI's, you have to save it as a very old version, but it'll be brought in as a raster.
>
> **[0:58](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=58)** That means you can't turn layers on and off.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=59)** It's just basically an image in the background.
>
> **[1:02](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=62)** We also have all sorts of things like elevations, ERDAS compressed wavelets.
>
> **[1:07](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=67)** That's ECW, that's what we're going to be using later.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=70)** Also, JPEG 2000's, all sorts of ERS for ER Mapper.
>
> **[1:15](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=75)** There's so many different... GeoTIFFs, the nice thing about GeoTIFFs is they have the elevations inside, so you can do a 3D model with GeoTIFFs, which is great.
>
> **[1:23](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=83)** We have all sorts of different types from IDRISI to DEM, all sorts of things like that.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=88)** All the way down to the SAGA binary grids and all sorts of USGS DEM's as well .
>
> **[1:34](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=94)** So, we have all these options, so we can add them that way or we could just pick on the browser and add it and click add.
>
> **[1:41](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=101)** So, there's two different ways of adding files to your current map, so either if by dragging and dropping or by using the layer, add layer, and choosing raster.
>
> **[1:52](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=112)** And, we have all those different raster files.
>
> **[1:54](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=114)** Also, we have protocol.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=115)** Now, the nice thing about protocol is that if you've got rasters in the associated georeferencing files, and that's what I should talk about right now is georeferencing files.
>
> **[2:04](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=124)** Most files have an associated georeferencing.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=128)** That means, within the file, for example on ECW or file like a TIF file, T-I-F, they may have a world file, TFW.
>
> **[2:17](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=137)** This file or georeferencing allows you to insert the image in the right location in the world.
>
> **[2:24](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=144)** Otherwise, you may have to use other tools.
>
> **[2:27](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=147)** So, if you look under the raster drop down, we have things like align rasters and analysis.
>
> **[2:33](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=153)** The align rasters basically says if you take a photograph, say you learned out of a window and took a photograph of the ground, you could actually manually locate or georeference that image on the ground in the map.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=164)** And, you could use that tool, align rasters.
>
> **[2:46](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=166)** Then there's all sorts of projections and warping and merging of raster images and even extraction.
>
> **[2:53](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=173)** You can clip it and create contours, even convert it to other types.
>
> **[2:56](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=176)** So, there's all sorts of tools we have at our disposal within QGIS.
>
> **[3:01](https://www.linkedin.com/learning/learning-qgis-2/types-of-raster-data-in-qgis?u=76281980&t=181)** But, understanding these various types of raster that you can use, really helps you to plan what kind of files you'll be using within your project and how to manipulate them and use them in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[AutoCAD]] (3), [[Wavelets]] (1)
> **Env Vars:** ecw (3), qgis (2), arc (2), dem (2), asci (1)
> **Code Identifiers:** autocad (3)
> **Analogies:** for example (2)
> **UI Navigation:** drag and drop (1)
> **Speakers:** - [instructor] (1)

#### Add ECW data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=0)** - [Narrator] The ECW, or enhanced compressed wavelet, is an image format that is much smaller than images such as TIF or JPEG.
>
> **[0:07](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=7)** Using these smaller ECW formats will increase the overall performance of your map and take up much less room on your hard drive.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=15)** Let's add one now.
>
> **[0:16](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=16)** So before I even start, what's really important is to set my project coordinate system.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=22)** Right now if you look down in the bottom right hand corner, it says EPSG 4326, but I know that my raster, or my aerial photos, are actually in EPSG 26910, which is UTM zone 10 north in meters.
>
> **[0:39](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=39)** So I'm going to select that instead and hit OK.
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=43)** So now you should see down in the bottom right-hand corner the EPSG 26910, perfect, we're ready to add raster.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=50)** So then I'm going to go into the raster and drag and drop one of the ECWs.
>
> **[0:55](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=55)** Now it says it wants to transform it into something else.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=59)** What I'm going to do is just hit OK, and we'll do that for all three.
>
> **[1:05](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=65)** Oh, now that particular one was defaulting to EPSG 4326.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=70)** Let's do that for all three.
>
> **[1:12](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=72)** Again it's defaulting to 4326, which is lat long.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=76)** Now I know for a fact all four of these images are actually in UTM zone 10.
>
> **[1:23](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=83)** So let's zoom into the layer and we should see all these layers, they're all put together, but it may not know what coordinate system it is.
>
> **[1:33](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=93)** So what I'm going to do is, I'm going to right-click each one and I'm going to go into Properties, and click on Source.
>
> **[1:39](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=99)** Now see, by default it set to EPSG 4326.
>
> **[1:43](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=103)** Let's pick the project coordinate system, let's pick the EPSG 26910 and hit Apply.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=110)** We're going to do that with each one.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=111)** Oh, you notice it disappeared.
>
> **[1:53](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=113)** Let's do that again.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=115)** Under Properties, DPSG, OK.
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=120)** Again Properties, all right.
>
> **[2:04](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=124)** And the last one again.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=129)** Now here's the funny thing that would happen.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=131)** When I dragged and dropped the very first ECW it took the default coordinate system, which was, because I just hit OK, EPSG 4326.
>
> **[2:20](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=140)** So it reset my current coordinate system to the first ECW drag and drop, which thought it was in 4326, which is lat long.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=149)** So let's flip this back to the UTM zone and hit OK.
>
> **[2:34](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=154)** Ah, there's all my imagery.
>
> **[2:36](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=156)** All my ECWs are now available.
>
> **[2:39](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=159)** Now remember, these aren't inside this project.
>
> **[2:42](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=162)** These four images are actually just stored in that RASTER folder, in my exercise files.
>
> **[2:48](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=168)** So if I delete the ECW file it will be deleted and probably give me a little error here inside my layer list.
>
> **[2:55](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=175)** So you have to be careful with that.
>
> **[2:56](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=176)** Now these images can be other types.
>
> **[2:59](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=179)** They can be TIF or JPEG or any other type of typical imagery that you want.
>
> **[3:05](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=185)** Now these work.
>
> **[3:06](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=186)** They know where they are because inside the ECW they've been geo-referenced, meaning they've been put in the right location.
>
> **[3:12](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=192)** So if you ever insert an image and it doesn't know where it should be or the coordinate system is incorrect, it may show up in the middle of the ocean somewhere.
>
> **[3:23](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=203)** Just to give you an idea of where this is in the world I'm actually going to go into my other layers here.
>
> **[3:28](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=208)** I'll go to the XYZ Tiles and just put in the OpenStreetMap in the background and I'll hit OK.
>
> **[3:37](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=217)** And there you go, the OpenStreetMap, oh one of the images are below it, so I'll drag the OpenStreetMap to the bottom so it's, so now you can see where all four of them are in the overall area here.
>
> **[3:49](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=229)** So you can see that's part of the city of Nanaimo on the water.
>
> **[3:54](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=234)** There they are.
>
> **[3:55](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=235)** And they're all in the right location.
>
> **[3:57](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=237)** Now if I change my coordinate system from that EPSG back to the lat long, so I'll do a search for LL, I think it's 84, no, that wasn't it.
>
> **[4:11](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=251)** Let's just do lat long.
>
> **[4:16](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=256)** There it is, EPSG 4326, OK.
>
> **[4:20](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=260)** So now, it's in a user-defined but basically it's the 4326.
>
> **[4:24](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=264)** Let's do that again.
>
> **[4:26](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=266)** That's better, 4326, hit OK.
>
> **[4:30](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=270)** Oh it's the same.
>
> **[4:31](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=271)** That user-defined one is 4326.
>
> **[4:33](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=273)** Now the map is quite squished as you can see because in the raster has been re-projected.
>
> **[4:40](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=280)** Now here's the bad part about re-projecting your raster.
>
> **[4:43](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=283)** Even though it fits really nicely, the cars look odd because the image has been stretched and twisted to fit in that coordinate system.
>
> **[4:53](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=293)** The image always looks best in the coordinate system it was originally flown in or the photo has been taken.
>
> **[4:58](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=298)** So if I switch this back to the UTM version, let's see if we have that list in here, oh it's listed down here, UTM, there it is, zone 10, and we hit Apply, now the images look much better, much more crisp.
>
> **[5:17](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=317)** Things aren't stretched and twisted because this is the original coordinate system this areal photo was taken in.
>
> **[5:23](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=323)** So that's great.
>
> **[5:25](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=325)** Now in the future, if you have trouble adding these ECWs, I know they're rare, sometimes you see TIF files or JPEGs, but I do like these ECWs cause they do compress quite small.
>
> **[5:36](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=336)** Now if you trouble adding them to your QGIS project you may need to install the ERDAS ECW JPEG 2000 SDK from Hexagon Geospatial.
>
> **[5:46](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=346)** Now you can go to Hexagon Geospatial and download the SDK and then restart QGIS and it'll show up.
>
> **[5:53](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=353)** I'm not having any trouble here so I guess those drivers were installed correctly when I installed this version of QGIS so they're there.
>
> **[6:00](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=360)** But if you have any trouble you can do that.
>
> **[6:02](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=362)** Also if you want to convert your ECWs you could convert things like TIF to ECW using tools such as gdal.
>
> **[6:09](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=369)** You can use the gdal_translate tool or use third-party tools such as Safe Software's FME or anything like that.
>
> **[6:16](https://www.linkedin.com/learning/learning-qgis-2/add-ecw-data?u=76281980&t=376)** So those are great tools for creating these ECWs and I do like them cause they are quite small.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (8), [[Zoom]] (1), [[Search]] (1)
> **Env Vars:** epsg (9), ecw (8), utm (5), tif (4), jpeg (3)
> **UI Navigation:** drag and drop (2), go to (2), right-click (1), click on (1)
> **Analogies:** such as (3)
> **Exercise Files:** exercise files (1), download the (1)
> **Code Identifiers:** gdal_translate (1)
> **Definitions:** is an  (1)
> **Warnings:** be careful (1)

#### Add WMS data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=0)** - [Instructor] Web Map Services, WMS, is a web-based protocol that serves up maps.
>
> **[0:05](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=5)** Some of the layers could be originally in vector, but then received as raster.
>
> **[0:10](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=10)** The WMS service will stream these tiles of images, such as PNG or JPEG, directly from the server into your QGIS client.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=18)** These layers can be printed, or re-projected within QGIS.
>
> **[0:21](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=21)** We're going to try one now.
>
> **[0:23](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=23)** The one we're going to use is the NRCan Toporama, its a great name, but it's basically a topographic map of Canada.
>
> **[0:32](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=32)** The URL, it's this big long one up here, it's the wms.ess-ws.nrcan.gc.ca/wms/toporama_en.
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=43)** Now, that's the basic URL but you also need to pass the "SERVICES=WFS" and you also have to say the "REQUEST" is "GetCapabilties", so I'm just going to copy that.
>
> **[0:53](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=53)** And, if you are looking for a particular URL to the Toporama, just type NRCan Toporama and you'll get all sorts of links to this so you don't have to type it all in.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=63)** But, I've got it here in the browser.
>
> **[1:05](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=65)** So, I'm going to go back to QGIS.
>
> **[1:07](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=67)** There's going to be a link in your browser, WMS/WMTS.
>
> **[1:11](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=71)** So, we're going to right click and say New Connection.
>
> **[1:14](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=74)** The name of it, I'm just going to call it Toporama.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=78)** And, I could put in brackets NRCan so, which just stands for Natural Resources Canada, that's a federal body.
>
> **[1:25](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=85)** Okay, so URL, I'll pasta that in there and I click OK.
>
> **[1:29](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=89)** There's the Toporama NRCan, so let's expand that.
>
> **[1:34](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=94)** Now, here's the neat thing about this.
>
> **[1:36](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=96)** I can either bring in the entire map or break it down into pieces.
>
> **[1:41](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=101)** So, if I drag and drop that WMS Toporama into my map, I'll get the entire mapping system.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=107)** So, you'll see everything from ferry segments all the way down to expressways and highways.
>
> **[1:53](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=113)** Now, I can zoom right in and have a look.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=115)** And, as you see is, as I zoom, the maps are being rendered on the server even though it's originally vector, their coming back as raster.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=123)** So, that's why we're talking about this under an idea of raster because even though the core data back at the server may be shape files or anything like that, all we're getting are tiles of images.
>
> **[2:16](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=136)** Now, as you can see, all these layers here are coming back as one big image.
>
> **[2:21](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=141)** Now, let's just add a single layer.
>
> **[2:23](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=143)** So, for example, I can bring in the limits.
>
> **[2:27](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=147)** So, I drag and drop limits in.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=149)** Oh, it's not letting me bring that limits in, so let's try something else.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=152)** Let's bring in railway this time.
>
> **[2:36](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=156)** Oh, it says the image is flawed but, here we are, we're still able to see it.
>
> **[2:41](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=161)** So, there's other things on top of the limits.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=164)** Let's turn off limits so they're out of the way and now you can see railway.
>
> **[2:48](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=168)** So, we can break it down into separate layers or we can bring in the whole map.
>
> **[2:53](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=173)** So, I'm just going to remove those separate layer and the limits, I'll remove those.
>
> **[2:59](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=179)** And, the Toporama loves to be whole.
>
> **[3:02](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=182)** So, as you can see, I can bring in the Toporama in one big layer and view it this way.
>
> **[3:08](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=188)** So, those are your options with WMS, you can either have the entire map as it was authored or bring in all the different sublayers that make up that map.
>
> **[3:17](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=197)** Now, WMS data is a great way to get maps from another server.
>
> **[3:21](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=201)** The data can be single layers or whole maps as you've seen.
>
> **[3:25](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=205)** Sometimes the performance may be limited by the power of the source server, meaning their server, or the network connection.
>
> **[3:32](https://www.linkedin.com/learning/learning-qgis-2/add-wms-data?u=76281980&t=212)** But, this is by far the easiest way to get an external QGIS data into your map.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), web (2), [[Zoom]] (2), power (1)
> **Env Vars:** wms (6), qgis (4), url (4), png (1), jpeg (1)
> **Definitions:** is a  (2), stands for (1)
> **UI Navigation:** drag and drop (2)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** toporama_en (1)
> **Cross-References:** go back to (1)

#### Add DEM data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=1)** - [Instructor] A Digital Elevation Model, or DEM file, is considered a raster file but it really contains points at regular intervals that, most importantly, have elevations at each of those points.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=12)** Let's add two DEM files to our project.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=15)** Under raster, I'm going to drag and drop the first DEM.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=20)** Hit okay and the second DEM.
>
> **[0:23](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=23)** There we are.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=24)** So we have two DEM files listed and basically what happens is it's color coding each of the elevations based on a random color from zero to four, 65 on one, 213 in the other.
>
> **[0:37](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=37)** What we're going to do is we're going to actually blend these two.
>
> **[0:40](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=40)** Let's style them, first of all, so they look similar.
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=43)** The first thing I'm going to do is I'm going to double-click on the first one and just go into symbology and see how it says single band gray, that's fine.
>
> **[0:52](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=52)** From zero to 465.
>
> **[0:53](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=53)** I'm actually going to lower that down and just cap it at 313.
>
> **[0:57](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=57)** I'll hit apply and okay.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=59)** And I'll do the same for the other one.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=60)** Zero to 313.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=63)** So what that's doing is basically capping the upper style from zero being black to 313 being the highest in terms of elevation.
>
> **[1:12](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=72)** And that's in meters, so that's almost 1000 feet in this example.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=76)** So that's what we're seeing here.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=78)** The black is mostly water.
>
> **[1:20](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=80)** So let's flip it around so that water is just white background and the high points are a little darker.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=86)** All we have to do is go in here and change the gradient from black to white.
>
> **[1:31](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=91)** White to black, hit okay.
>
> **[1:34](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=94)** And there we are.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=95)** And we'll do the same for the other one.
>
> **[1:36](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=96)** So we'll go from white to black.
>
> **[1:38](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=98)** So all I'm doing is changing the symbology and some of the ranges.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=102)** So what it's doing is it's color coding every pixel based on a color of its elevation.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=107)** And that's how we're getting all those different tones.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=109)** So there we are.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=110)** We can see both seamlessly.
>
> **[1:52](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=112)** They've got the same kind of color ranges.
>
> **[1:54](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=114)** You can see these really faint island out here in the water in the Georgia Strait.
>
> **[1:59](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=119)** That's the body of water here.
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=120)** And again, this is an island.
>
> **[2:02](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=122)** You can see the rivers coming in.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=123)** They really stand out in this DEM image.
>
> **[2:06](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=126)** Now these DEM images come from all sorts of places.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=129)** Often, when you have air photographs taken, a DEM or liDAR is also cast at the same time so you can get elevations at each point.
>
> **[2:18](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=138)** And you generate a .DEM file.
>
> **[2:20](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=140)** That's what these are, .DEM files.
>
> **[2:23](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=143)** Or they can generate LAS files, liDAR.
>
> **[2:25](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=145)** And you can create DEM from them.
>
> **[2:27](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=147)** And then you can bring them into a product like this.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=149)** Or some products can actually generate DEM files from the ortho imagery, so you don't even need liDAR.
>
> **[2:36](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=156)** You can get really high accuracy DEM imagery rendered from a 3D image.
>
> **[2:41](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=161)** You send your drone out, take multiple pictures, you can process it and actually get 3D DEMs from that.
>
> **[2:47](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=167)** So there's multiple ways of getting these DEM files.
>
> **[2:49](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=169)** But here we are, we have them in our drawing.
>
> **[2:52](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=172)** So these DEM files give us a lot of context and give you an idea of elevations and how high things are.
>
> **[2:58](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=178)** And again, the dark parts are where the high elevations are and the white is where the water is, in this case.
>
> **[3:03](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=183)** So we could use these for analysis, visualization, and then we have a 2D map but here we are looking at 3D data in a two-dimensional way.
>
> **[3:13](https://www.linkedin.com/learning/learning-qgis-2/add-dem-data?u=76281980&t=193)** It's a really powerful way of seeing three dimensions in 2D.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (3), product (1), [[Microsoft Products|Products]] (1), data (1)
> **Env Vars:** dem (15), las (1)
> **Code Identifiers:** lidar (3)
> **UI Navigation:** drag and drop (1), double-click (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Creating contour lines from DEM
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=0)** - [Instructor] If you already have a digital elevation model or DEM attached to your QGIS map, you can create contour lines from them.
>
> **[0:07](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=7)** A contour line is a polyline that usually base on an elevation along a particular path.
>
> **[0:13](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=13)** For example, you can have a continuous contour line that represents 20 feet above sea level.
>
> **[0:19](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=19)** Let's try that now.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=20)** In my raster folder, I'm going to drag and drop the east and west raster.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=24)** Click OK.
>
> **[0:25](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=25)** And the west.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=27)** Now that we have east and west DEMs, we haven't styled it yet, so we're going to take these two east and west DEMs and create contour lines with them.
>
> **[0:37](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=37)** So, under Raster, Extraction, we'll choose Contour.
>
> **[0:42](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=42)** So the first one, what we're going to do is the west version, so that demw.
>
> **[0:48](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=48)** We're going to change the interval to five meters.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=51)** So right now, it was default at 10 meters, but that's too spread out.
>
> **[0:55](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=55)** I want five meters.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=56)** We go as low as one or less, but what happens is as we increase the contour lines, what happens is our files get really big.
>
> **[1:04](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=64)** So for this example, I'm just going to use five meter intervals, but you can use as low as you wish.
>
> **[1:09](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=69)** 'Kay, so we're going to save it to the desktop, and we're going to save it to a file, and on the Desktop, we're going to call it contours_west, and it says Save as type.
>
> **[1:22](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=82)** We're going to choose shapefiles.
>
> **[1:24](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=84)** We have all sorts of options for saving these vector data, but in this case, we're going to make a contours_west.shp.
>
> **[1:30](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=90)** Hit Save.
>
> **[1:32](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=92)** So everything's correct.
>
> **[1:33](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=93)** We have Band 1, that's all we have.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=95)** We have a five meter intervals.
>
> **[1:38](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=98)** The column that's going to contain the elevation will be called elev as in elevation.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=102)** You can change that, but right now, I'm leaving it default.
>
> **[1:45](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=105)** So, there'll be a column in the shapefile with our elevations in it.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=109)** And you'll see that the console is running a program called gdal_contour.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=115)** That's an executable installed when we installed QGIS, so it's actually running this.
>
> **[1:59](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=119)** We can paste this into batch file and run it as often as want it.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=123)** As soon as a DEM comes into the directory, you can run it and batch it out all sorts of shapefiles that way.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=129)** But I'm just going to hit Run and hit Close.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=131)** And you'll see that the west contours are now complete.
>
> **[2:15](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=135)** There they are.
>
> **[2:16](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=136)** For the west DEM, we now have a layer called Contours.
>
> **[2:19](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=139)** And we should do the east one now, so let's do that again.
>
> **[2:22](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=142)** So under Raster, Extraction, Contour, make sure the input later is east.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=149)** And again, we're going to say five meter intervals.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=152)** Leave the elevation column alone.
>
> **[2:35](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=155)** We're going to save it to a file called, Save to File on the Desktop, change it to SHP, and we'll call it contours_east.
>
> **[2:46](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=166)** Hit Save.
>
> **[2:47](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=167)** Again, you can see the gdal_contour executable down there.
>
> **[2:50](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=170)** Again, I can paste that into a batch file and run it, but in this case, I'm just going to hit Run, and it will create that contours_east shapefile.
>
> **[2:57](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=177)** When it's done, you can hit Close.
>
> **[2:59](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=179)** And there we are.
>
> **[3:00](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=180)** We have the two east and west contour lines.
>
> **[3:04](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=184)** And if I were to pick on one, I'll use the Info tool.
>
> **[3:07](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=187)** There we are, Info tool, and pick on any of those lines, and select many there.
>
> **[3:13](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=193)** Let's pick on an individual one instead.
>
> **[3:15](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=195)** How about that one right there?
>
> **[3:18](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=198)** Or one beside it.
>
> **[3:19](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=199)** There we are.
>
> **[3:20](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=200)** That one shows the elevation as 25 meters high and the ID is that.
>
> **[3:24](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=204)** That's pretty much all the data that we have, an ID and an elevation when we created that.
>
> **[3:29](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=209)** So we have two shapefiles.
>
> **[3:30](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=210)** We have two different parts: east and west.
>
> **[3:33](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=213)** It would be better when creating contours, that we merge them into one big shapefile.
>
> **[3:38](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=218)** So to do that, we can go to Vector, Data Management Tools, Merge Vector Layers.
>
> **[3:45](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=225)** So let's browse.
>
> **[3:46](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=226)** We're going to pick Contours and Contours.
>
> **[3:48](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=228)** Those are the two different layers with those shapefiles.
>
> **[3:52](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=232)** So hit OK.
>
> **[3:54](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=234)** Just going to use the default, EPSG 4326.
>
> **[3:59](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=239)** And the layer we're going to create, we're going to say Save to File, and we're just going to call it contours, and it's going to be a shapefile.
>
> **[4:07](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=247)** So, instead of having contours east and west, we're just going to have one big one called contours, and we'll hit Save.
>
> **[4:13](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=253)** And we'll hit Run.
>
> **[4:18](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=258)** And now you'll see, there's a Merged layer with both.
>
> **[4:22](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=262)** I'll turn off the other two.
>
> **[4:24](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=264)** We'll zoom in.
>
> **[4:27](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=267)** Use the Info tool and you can see that we now have a shapefile with an elevation and an ID and what layer it comes from and even the original path of where it came from 'cause it shows that we have the path merged from the first one.
>
> **[4:42](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=282)** And there we are.
>
> **[4:44](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=284)** So, we now have contour lines from two DEM files that we added to our QGIS project.
>
> **[4:49](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=289)** Although, we only created the shapefile in this video, we could've chosen any kind of vector files: KML, DXF, JSON.
>
> **[4:57](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=297)** But some formats do not support attributes such as elevation field, so be careful what format you choose.
>
> **[5:03](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=303)** In this case, I think we chose well.
>
> **[5:05](https://www.linkedin.com/learning/learning-qgis-2/creating-contour-lines-from-dem?u=76281980&t=305)** We use the shapefile and we have this great merged contour lines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (9), data (3), management (1), [[Zoom]] (1), [[JSON]] (1)
> **Env Vars:** dem (4), qgis (3), shp (1), epsg (1), kml (1)
> **Code Identifiers:** contours_west (2), gdal_contour (2), contours_east (2)
> **CLI Commands:** make (2)
> **UI Navigation:** drag and drop (1), go to (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)


### 4. 3D Maps

[↑ Back to Table of Contents](#table-of-contents)

#### Creating 3D maps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=0)** - One of the newest features in QGIS is the ability to make 3D maps but first we have to start with a 2D map, so let's do that now.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=9)** If we drag and drop the building shape file Okay and the parcel shape file Let's make sure the buildings are above parcel's and maybe I'll just make the parcel a little more transparent.
>
> **[0:25](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=25)** There we are.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=27)** There we go.
>
> **[0:28](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=28)** Little better.
>
> **[0:29](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=29)** So now we have buildings over top of parcels.
>
> **[0:33](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=33)** Now, this is only viewed in 2 dimensions.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=36)** But, to view it in 3 dimensions, we simply have to add a new 3 dimensional map.
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=41)** So under view, we can click new 3D map view.
>
> **[0:46](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=46)** So what's happening now in this small window, is it's loading the 2 dimensional map into this frame.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=51)** Now we can make this as big or as small as we want so I'm going to stretch it so it's a lot bigger.
>
> **[0:57](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=57)** There we go.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=59)** And as you can see it's the exact same map in 2 dimensions.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=63)** But we can do things like change the extent, so first of all it's the button we have to zoom full so we can zoom to the extent of the 2 dimensional map still, we're in 2 dimensions.
>
> **[1:12](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=72)** We have the identify tool, it's the same exact identify tool in the 2D map and we have animations we can toggle on and off.
>
> **[1:19](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=79)** We also have save the current map as an image so it just saves a snapshot of what we're looking at to a file.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=86)** And then we have some options in here that we can change 3D configuration.
>
> **[1:29](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=89)** So right now we want to navigate this a little bit.
>
> **[1:32](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=92)** I'm going to try to zoom in to downtown, so let this zoom in a little bit.
>
> **[1:38](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=98)** Actually down to the waterfront.
>
> **[1:41](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=101)** I'm just using my pan and my wheel mouse rolling in and out in order to change the view of this 3D map.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=110)** Now, it's not quite 3D yet so what I'm going to do is I'm going to press the middle button and drag backwards.
>
> **[1:56](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=116)** So, I'm pressing the middle button and dragging backwards to tilt the view.
>
> **[2:01](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=121)** So now I can do that and I'm moving around.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=123)** So you can see were on about a 45 degree angle.
>
> **[2:05](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=125)** Now, I can actually rotate it back and forth by holding down the middle button and moving my mouse.
>
> **[2:12](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=132)** So now we are basically looking westward at about a 45 degree angle from the waterfront here.
>
> **[2:20](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=140)** So that's a very interesting thing about the 2D map, is that it's still flat but we can look at it from an angle.
>
> **[2:27](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=147)** Once we have some 3 dimensional data added to this current session, it'll really stand out.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=152)** So let's do that now.
>
> **[2:33](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=153)** There's something we can do with these buildings to make them really pop out.
>
> **[2:38](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=158)** Now, I just docked that 3D map at the top.
>
> **[2:41](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=161)** There it is.
>
> **[2:43](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=163)** So what I'm going to do is I'm going to style the buildings.
>
> **[2:47](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=167)** So, we'll just double click on that.
>
> **[2:49](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=169)** And how we're going to style the buildings is with the little area inside the building symbology called 3D view.
>
> **[2:57](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=177)** So I'll show you that again.
>
> **[2:58](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=178)** I'm just going to close that dialogue.
>
> **[2:59](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=179)** I'm going to double click on buildings in the layers, click on 3D view, and you see where it says no symbols?
>
> **[3:05](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=185)** We're going to change that to single symbol and we're going to change the extrusion.
>
> **[3:11](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=191)** So, basically I can make them all the same height, I can just type in a number in here and they'll all be 10 meters high if I hit apply right now all the buildings extrude 10 meters high.
>
> **[3:22](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=202)** But, I don't want to do that.
>
> **[3:23](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=203)** I'm going to put that back to 0 and hit apply.
>
> **[3:26](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=206)** What I'd rather do is use the height of the building which is actually recorded in the shape file.
>
> **[3:32](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=212)** So, you'll see a little icon here called data define override, you click on that and where it says field type int, we can pick height which is a double.
>
> **[3:42](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=222)** Now, if I hit apply, all the buildings that have a height column populated will be extruded.
>
> **[3:49](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=229)** The reason it's black is because the ambient is set to that color.
>
> **[3:53](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=233)** So let's make a lighter color.
>
> **[3:54](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=234)** Maybe closer to the brown that it was so if I basically pick something like that or pick a different color here.
>
> **[4:01](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=241)** There we go.
>
> **[4:03](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=243)** Something a little different.
>
> **[4:04](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=244)** Not so black.
>
> **[4:05](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=245)** So we do that and hit apply.
>
> **[4:08](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=248)** You'll see there different tone.
>
> **[4:09](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=249)** So I'll hit okay and now you can see in our 3D map even though our 2D map isn't much different in terms of what we see, our 3D map because I changed the properties so I'll go back into the properties again click on 3D view and you can see I've used the extrusion and I'm using the height of the buidling.
>
> **[4:30](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=270)** I changed the ambient to a different color so that when it's extruded it's not black and I hit okay and then now I've got the buildings automatically distributed in 3D so I can see them and they really pop out and you can tell some of them are orange meaning they don't have any data and that sort of thing.
>
> **[4:47](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=287)** Now, this is using actual heights.
>
> **[4:49](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=289)** There's no reason why we couldn't do this with property values or crime impacts in certain areas, or so on.
>
> **[4:55](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=295)** This is just literally using the height of elevations and meters but this could be any kind of extrusion to give a real powerful view of your current map.
>
> **[5:04](https://www.linkedin.com/learning/learning-qgis-2/creating-3d-maps?u=76281980&t=304)** This is the best part of using 3D maps in QGIS, is the ability to visualize your data in a completely different way then you could if you were just using 2D.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (6), [[Zoom]] (4), data (4)
> **CLI Commands:** make (7)
> **UI Navigation:** click on (5), drag and drop (1), toggle (1)
> **Env Vars:** qgis (2)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### 3D configuration and elevation
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=0)** - [Instructor] One of the most striking effects you can add to your 3D map is the terrain.
>
> **[0:05](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=5)** When you add the terrain to your map, it drapes all the 2D layers on top of it.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=9)** Let's create a 2D map first.
>
> **[0:11](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=11)** So, I'll add the BIKE_ROUTES.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=14)** We'll hit OK.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=15)** We'll add BUILDINGS.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=18)** And we can also bring in the ROAD_CENTERLINES.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=22)** Make sure the BUILDINGS are on top.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=24)** We may also want to bring in some of the raster files, so I'm going to highlight under RASTER, then drag the four ECWs into the current map.
>
> **[0:32](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=32)** Now, they don't know what coordinate system they're in, so I'm going to right-click on each one, make sure they're set to UTM zone 10, done.
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=41)** Properties.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=44)** Zone 10.
>
> **[0:46](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=46)** And I'll just do that one for each one.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=50)** And finally, the last one.
>
> **[0:52](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=52)** There we go.
>
> **[0:53](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=53)** And there's the four.
>
> **[0:54](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=54)** We'll put the ROAD_CENTERLINES above the rasters as well and the BIKE_ROUTES above the ROAD_CENTERLINES.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=60)** There we are.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=60)** So now, we have a map with the four raster sheets or the four aerial photographs.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=66)** We have BIKE_ROUTES on here as a sort of green and the ROAD_CENTERLINES, maybe I'll make them stand out a little bit.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=73)** I'll go into the Symbology and just make them red really quickly here.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=78)** There we go, and hit OK.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=81)** So now, you can see the BIKE_ROUTES are kind of that yellow color and the ROAD_CENTERLINES are red, and the BUILDINGS are kind of pink, and we've got the aerial photos.
>
> **[1:30](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=90)** So, let's then insert a 3D map, so we'll just go to View, New 3D Map View.
>
> **[1:37](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=97)** So basically, it's the 3D map that we already created in behind.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=102)** So, can even dock it right up here, and there it is.
>
> **[1:45](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=105)** And we'll try to focus in on the raster area.
>
> **[1:48](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=108)** So, let's just do it around the waterfront.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=111)** And we want to look at this in three-dimensions, so I'm just going to press my middle button on my mouse, roll it around a little bit, and we don't see too much here.
>
> **[2:01](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=121)** It's still all 2D data.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=123)** Well, the one thing we can do is up here in the menu in the toolbar, for the 3D map, we can configure the underlying data.
>
> **[2:12](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=132)** So if we pick on 3D Configuration, we have some options here.
>
> **[2:16](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=136)** One of the first things we can do is adjust the camera field view.
>
> **[2:19](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=139)** For degrees, the default's at 45, but we can change that.
>
> **[2:24](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=144)** And we have the terrain, which is really important.
>
> **[2:26](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=146)** The terrain, by default, is flat in this case, but we have two other options.
>
> **[2:31](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=151)** We have a DEM, so if you added a GeoTIFF with elevations or if you've got the DEM files, you could use that layer to derive the contours or the terrain.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=164)** Let's just use the online one that's built in and we'll hit OK.
>
> **[2:49](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=169)** And what's happening now, it's actually going out to the web and pulling in the contours of this area.
>
> **[2:58](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=178)** And you can see, it's a little bit hilly.
>
> **[3:01](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=181)** And you can see everything being draped overtop, so you can see the BIKE_ROUTES and the ROAD_CENTERLINES and the BUILDINGS being draped overtop of the curved landscape.
>
> **[3:11](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=191)** And you can see, that's a bit of hill coming up from the water right there.
>
> **[3:14](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=194)** You can see that one if I tilt a little bit more, but it's kind of hard to see.
>
> **[3:19](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=199)** So, we can do some other really interesting things.
>
> **[3:21](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=201)** We can exaggerate this hilliness.
>
> **[3:23](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=203)** So, what you can do is you can go back into the configuration and the vertical scale is one.
>
> **[3:29](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=209)** That means, there's no exaggeration.
>
> **[3:31](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=211)** But we can exaggerate it to five and that can really make this pop.
>
> **[3:36](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=216)** So let's pick OK.
>
> **[3:38](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=218)** It's going to redraw and now, it's exaggerated.
>
> **[3:42](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=222)** The whole region looks a lot hillier than it actually is.
>
> **[3:46](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=226)** Honestly, it's not that hilly there.
>
> **[3:48](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=228)** Although, if you're on your bicycle, it may feel that way.
>
> **[3:50](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=230)** But, this is a very exaggerated view of what it actually looks like 'cause this is times five.
>
> **[3:59](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=239)** It means five times higher than it actually is.
>
> **[4:01](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=241)** So, what we've done is we've just draped this overtop, even the raster, and it's exaggerated how hilly it is.
>
> **[4:09](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=249)** We can even go one step further.
>
> **[4:10](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=250)** Let's make it times 10.
>
> **[4:11](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=251)** So go back in here.
>
> **[4:13](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=253)** In vertical scale, let's set that to 10, and hit OK.
>
> **[4:18](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=258)** Now, watch this.
>
> **[4:19](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=259)** This is really hilly now.
>
> **[4:21](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=261)** It's like, you're in the Himalayas.
>
> **[4:23](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=263)** And we'll just zoom out a little just to really show how much exaggeration there is.
>
> **[4:29](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=269)** That's amazing.
>
> **[4:30](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=270)** Look how hilly that is.
>
> **[4:32](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=272)** Definitely, not that hilly right there.
>
> **[4:35](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=275)** But even the background where there's no raster, you can see how exaggerated it is.
>
> **[4:39](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=279)** Now, this can really help visualization in terms of impact of how hilly things are or not hilly, and really gives your map a lot of ways of visualizing the same data.
>
> **[4:51](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=291)** So, let's set that back to scale of one.
>
> **[4:55](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=295)** See what that looks like.
>
> **[4:59](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=299)** Goes back down.
>
> **[5:00](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=300)** Now, it still has some elevation.
>
> **[5:03](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=303)** As you can see, it's not a totally flat surface.
>
> **[5:05](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=305)** You can see that things are draped over the hillside.
>
> **[5:08](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=308)** Let's go back in.
>
> **[5:09](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=309)** So, I'm using the online version.
>
> **[5:11](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=311)** If I wanted to use the actually DEM, I'll just hit Cancel.
>
> **[5:15](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=315)** I think this is the west one I need, so I'll get the demw, drag that in.
>
> **[5:20](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=320)** Let's make sure it's there.
>
> **[5:21](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=321)** I don't see it.
>
> **[5:22](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=322)** I shall drag it into my 2D map.
>
> **[5:24](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=324)** That's where it will appear.
>
> **[5:25](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=325)** And sure enough, there it is in the background.
>
> **[5:28](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=328)** I'm actually going to turn it off.
>
> **[5:29](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=329)** I don't need it turned on to use it in my visualization.
>
> **[5:33](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=333)** I can just use it as a background layer.
>
> **[5:35](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=335)** So if I go back into my 3D Configuration, instead of using the online one, I can use DEM raster layer, and it automatically picked the DEM or if I had other imagery.
>
> **[5:44](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=344)** So, it's looking at these other ECWs.
>
> **[5:47](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=347)** Now these don't have elevations inside; only this one does.
>
> **[5:51](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=351)** But if I had a GeoTIFF, I can use that as well.
>
> **[5:53](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=353)** Okay, so now, we're using just the DEM.
>
> **[5:56](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=356)** In this case, we're only going to be contouring the area that is affected by that DEM, so what happens is you will not see any sort of elevation change on any data that falls outside of that DEM file.
>
> **[6:11](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=371)** If I turn that on really quickly, you can see the extents.
>
> **[6:14](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=374)** So, if I go even further west, eventually, there be no draping.
>
> **[6:23](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=383)** It just sort of falls off the edge of the planet.
>
> **[6:25](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=385)** So, I'm going to turn that off again, and you can see, the draping doesn't affect that any longer.
>
> **[6:30](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=390)** So, there you are.
>
> **[6:32](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=392)** So, the best part is that even if you don't have a DEM for your whole area, you can always switch back to the online version and get at least some of the elevations.
>
> **[6:42](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=402)** Now, of course, you can change your terrain, and change the ambient and all the various shininess and that sort of thing of your terrain, but for the most part, this is very powerful, and you can show the zoom level labels and the bounding boxes of each of the tiles, and so on, and even the camera view center like that.
>
> **[7:00](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=420)** So you can turn on, show you where, and as you pan your map, you can see the view center, and that's handy for understanding your visualization, so when you pivot, you know you're pivoting about that red dot.
>
> **[7:09](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=429)** So, that's kind of handy for visualization.
>
> **[7:11](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=431)** You can see where you're centering your map on, and then you can pan and zoom and see where your center is.
>
> **[7:17](https://www.linkedin.com/learning/learning-qgis-2/3d-configuration-and-elevation?u=76281980&t=437)** So that's some of the most amazing parts about being able to use the 3D Configuration to bring in either online or your own DEMs for draping and for looking at the various elevations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (5), data (4), [[Zoom]] (3), web (1)
> **Env Vars:** dem (9), road_centerlines (6), bike_routes (5), buildings (4), raster (1)
> **CLI Commands:** make (7)
> **UI Navigation:** right-click (1), go to (1), in the menu (1), in the toolbar (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Prerequisites:** configure (1)

#### 3D animations
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=0)** - [Instructor] One of the best ways to tell a story with a 3D map in QGIS is to use animations.
>
> **[0:05](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=5)** Let's put a map together first and then create an animation in our 3D map.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=9)** So let's add road centerlines, hit okay, parcels and buildings.
>
> **[0:17](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=17)** Let's move the road centerlines up, make them red.
>
> **[0:21](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=21)** There we are, perfect.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=24)** The parcels we're going to make them transparent or semi-transparent, maybe around 20%, that looks good.
>
> **[0:29](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=29)** And the buildings, what we're going to do is we're going to go to the 3D view and we're going to extrude them using the elevations.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=36)** So we'll go to height, so it's going to extrude to the height and we'll hit okay and oh, one more thing for the extrusion let's make the ambient color, maybe like a grey color, there we are okay.
>
> **[0:48](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=48)** So we're ready for our 3D map.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=50)** All we have to do is say view, new 3D map and we'll dock that up here, so there's our 3D map.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=59)** So let's just go down to the waterfront here and rotate our map a little bit so you can see the buildings that are in three dimensions and there we are.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=73)** Now, let's look at animations.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=76)** Now if I click the animations button you'll see at the bottom there's keyframes, a plus, minus, there's are some editing tools, even a save and export.
>
> **[1:24](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=84)** So, first of all, let's hit the play button.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=86)** What it does is with a about three-second interval it will zoom out, actually it's five seconds, so in a five-second interval, it'll start at the beginning where we're looking at and just pan out, that's all it's doing.
>
> **[1:39](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=99)** So that's the default from the current view and it pans out quite a bit.
>
> **[1:43](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=103)** So let's start with that, so this is going to be our key view so let's just hit zero, and that'll be where we start.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=110)** Where we want to end up is number five.
>
> **[1:54](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=114)** So let's actually move number five, while that's selected, number five is right there.
>
> **[1:58](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=118)** What we're going to do is we're going to move just a little bit out and zoom into maybe this part of the neighborhood so we're not too far from that building that we started with.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=128)** And we'll tilt it back and we're out a little bit.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=131)** So let's just hit play now, you see we start here, and then we just swing out a little bit, there.
>
> **[2:19](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=139)** Now I want to add the third location, and maybe a bit more north of the city.
>
> **[2:23](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=143)** So I'm what I'm going to do is hit plus and I'll say it's at the eight-second mark, click okay, and while eight seconds is selected, I'm going to just zoom out a little bit out here, and then maybe zoom out a little bit and tilts it up just a little bit there.
>
> **[2:39](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=159)** So now if we hit play, you'll see we started the building at the five-second mark, we go to the second location, and then we'll zoom all the way out at the eight second mark, all the way out.
>
> **[2:50](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=170)** We can continue and I can keep hitting pluses and adding different sort of waypoints along, and that will be saved in my projects but if I hit save right now it's saved as part of this map, so you have one animation per map.
>
> **[3:02](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=182)** So if I want a different animation I'd have to insert a new 3D map and create an animation for that map.
>
> **[3:07](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=187)** Now at any time I can click on the five seconds, and you can see I can delete it or I can edit the keyframe and change the seconds of where that actually is located.
>
> **[3:16](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=196)** So rather than five seconds, it could show up at the four-second mark instead.
>
> **[3:19](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=199)** So now you'll see there's the four seconds instead of eight.
>
> **[3:23](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=203)** So I've sort of shifted it so I can go like that.
>
> **[3:26](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=206)** So you can see instead of zero, five, and eight it's now zero, four and eight because you can just edit that waypoint at any point, which is great.
>
> **[3:36](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=216)** The final thing I can do with these animations is hit save.
>
> **[3:39](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=219)** So if I export that I can put on my desktop and it'll put a series of images so basically if we use the default 30 frames per second.
>
> **[3:49](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=229)** That means for every second of video, it's going to capture the map 30 seconds, so we can have dozens and dozens, if not thousands of JPGs for a longer video and we have output width and pixels and height and pixels, we can make this as wide and narrow as you want.
>
> **[4:05](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=245)** Now the nice thing about that is you have all these different JPG that you could share, and you can give a person a image at any point in the video, or you could take all these images and create an AVI.
>
> **[4:16](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=256)** What I'd like to use is the product called HandBrake.
>
> **[4:20](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=260)** HandBrake is a open-source tool for converting say one kind of image to another or one video to another video type.
>
> **[4:27](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=267)** And in our case, I've got a whole whack of JPG that I need to turn into an AVI or an MPEG that I want to share with someone as a video that's what you could use something like that and there's a lot of tools out there this is just one of my favorites in this regard.
>
> **[4:42](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=282)** So let's go back to QGIS and cancel there.
>
> **[4:44](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=284)** And so now we have the ability not only to view our map in 3D and save as part of the project, but we can run an animation and view how that's going to look and export that so anyone can view it even if they don't have QGIS and this tells a very powerful story in our 3D maps.
>
> **[5:01](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=301)** The only downside is we don't have that same animation for 2D, but that's okay we can just keep using our 3D maps, or we can even generate a animation using only 2D.
>
> **[5:12](https://www.linkedin.com/learning/learning-qgis-2/3d-animations?u=76281980&t=312)** So QGIS is quite powerful in that way for making animations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (9), [[Zoom]] (5), product (1), open-source (1)
> **Env Vars:** qgis (4), jpg (2), avi (2), mpeg (1)
> **CLI Commands:** make (4)
> **UI Navigation:** go to (3), click on (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Styling Data

[↑ Back to Table of Contents](#table-of-contents)

#### Point layers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=0)** - [Narrator] Point layers can be used to show locations or assets that do not have an area or length.
>
> **[0:05](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=5)** Often points such as valves, manholes, city locations can be seen on the map.
>
> **[0:10](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=10)** They can be shown as simple points or advanced symbols such as a detailed fire hydrant symbol.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=15)** Let's add fire hydrants to our current map.
>
> **[0:17](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=17)** So open a new map or project and we're going to drag and drop the apprentices.shape file into our session.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=24)** Click okay and we'll see apprentices meaning all the different components that make up the waterlines, including water hydrants.
>
> **[0:31](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=31)** So the first thing we need to do is filter out only the water hydrants.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=36)** So double click on the apprentices, pick on source, pick on query builder.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=44)** We're going to filter the type, so I double click on type, click on equals and then we're just going to pick all to give all the different types that are available.
>
> **[0:54](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=54)** The type we want is a public hydrant.
>
> **[0:58](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=58)** Private hydrants are just hydrants on private property, public hydrants are owned by the city.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=63)** So we'll double click on public hydrant.
>
> **[1:05](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=65)** We have type equals public hydrant.
>
> **[1:07](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=67)** Click okay and okay.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=70)** So we've filtered out the apprentices to public hydrants.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=73)** So let's rename that.
>
> **[1:15](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=75)** Rename the layer and we'll just call it public hydrants.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=81)** There we are.
>
> **[1:22](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=82)** Now they're just round circles so we can change them, so they look more like fire hydrants.
>
> **[1:27](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=87)** Again, double click on public hydrants, go to symbology and we do have some built-in symbols there's dots and that sort of thing.
>
> **[1:37](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=97)** We can pick on simple marker and you can see they're squares and diamonds, and stars and that sort of thing, on the simple marker.
>
> **[1:44](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=104)** In the dropdown we can not choose other things such as font markers.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=109)** In here we can pick any font.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=111)** So for example, I can scroll down to wingdings or webdings and pick any symbol from the wingdings as a symbol.
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=120)** So if I picked say character four, clicked okay, now all my fire hydrants look like that particular font from webdings.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=129)** Let's go back in let's change this to an SVG marker.
>
> **[2:13](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=133)** SVG is basically clip art.
>
> **[2:15](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=135)** It's a vector format.
>
> **[2:17](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=137)** So there are some that come with QGIS, there's whole bunch here.
>
> **[2:21](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=141)** They have arrows and accomodation and so on, but we're going to use one that we've got in our directory.
>
> **[2:27](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=147)** So I'm going to hit browse, select file.
>
> **[2:30](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=150)** Now we have two choices here.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=152)** We can select the file or embed the file.
>
> **[2:34](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=154)** The difference is the file is connected to our project and if you change the file, it'll change the logo or the symbol of our hydrants.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=164)** If we embed it, that way the file is actually part of our project and if that file is missing or changed it does not affect our current project.
>
> **[2:53](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=173)** In this case, I'm going to directly select the file and if that file changes in any way, it'll actually affect my project.
>
> **[2:59](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=179)** In the shape directory under water there's a hydrant SVG.
>
> **[3:03](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=183)** Again, SVG is the file format and it's a vector format.
>
> **[3:08](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=188)** So let's just click okay and there are the hydrants and they show up and they look like tiny little hydrants.
>
> **[3:14](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=194)** So let's zoom in.
>
> **[3:15](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=195)** Oh, they stay tiny no matter how far I zoom, they're tiny, tiny hydrants.
>
> **[3:20](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=200)** So let's go back in and look at that.
>
> **[3:21](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=201)** So what's happening is they're two millimeters on the screen.
>
> **[3:26](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=206)** So I could actually use pixels, I could say they're two pixels on the screen.
>
> **[3:29](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=209)** I hit apply, they're even smaller.
>
> **[3:32](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=212)** I could say maybe they're like eight pixels and they're a little bit bigger.
>
> **[3:38](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=218)** So what happens is they always stay the same size.
>
> **[3:41](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=221)** So even if I zoom in, they're still tiny.
>
> **[3:43](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=223)** Now if I want to lock them into a particular size, I can go back in and change my units to map units.
>
> **[3:50](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=230)** Now the difference between those other units and map units, it's the difference between what's measured on the ground as if you're taking a tape measure outside and measuring on the ground versus what's on your current computer screen.
>
> **[4:03](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=243)** So map units are separate than any of the other units because it's exactly what's on the ground.
>
> **[4:08](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=248)** The map units in this particular projection system are EPSG:26910 that's a UTM meters.
>
> **[4:15](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=255)** So the unit says map units is meters.
>
> **[4:18](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=258)** So this is eight meters high.
>
> **[4:20](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=260)** So if I hit okay and I zoomed in, they'd actually be eight meters high.
>
> **[4:25](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=265)** They're a little too tiny, so I'm going to go back in and make them maybe 20 meters high.
>
> **[4:30](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=270)** So let's go 20, make them a lot bigger.
>
> **[4:33](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=273)** There we are.
>
> **[4:34](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=274)** So if we zoom into these fire hydrants, I can actually zoom right in and there's a fire hydrant.
>
> **[4:39](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=279)** Just to show you that they are 20 meters high, I'm going to use the ruler tool up here.
>
> **[4:45](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=285)** I'm going to measure from the top of the hydrant to the bottom and you'll see it's about 17, so it's almost 20 meters, but basically that symbol might be a little bigger.
>
> **[4:57](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=297)** So there we go.
>
> **[4:58](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=298)** So you could see that they are 20 meters high on the ground and that looks great.
>
> **[5:02](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=302)** Well, let's give it some context.
>
> **[5:03](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=303)** So what I'm going to do is I'm going to bring in the pipes just to see how they look next to the pipe.
>
> **[5:08](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=308)** So, drag those in and then we zoom in and we can see those hydrants aren't too bad, that 20 meters is a pretty good visualization.
>
> **[5:16](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=316)** I'm going to drag the pipes underneath and sure enough, 20 meters on the ground looks really good.
>
> **[5:22](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=322)** So basically what we have here is a symbol that's a clip art, SVG is basically clip art, that we're using.
>
> **[5:31](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=331)** We're locking it to the width of 20 meters map units on the ground.
>
> **[5:35](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=335)** So that's the symbol size, if we were to measure that.
>
> **[5:39](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=339)** Now these are square, so width and height are both 20 so we can adjust that.
>
> **[5:43](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=343)** They might be a little big for some, so I'll maybe make it 16, hit okay and that's a little better.
>
> **[5:49](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=349)** There we are.
>
> **[5:49](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=349)** We've got our clip art symbols inside of our QGIS project.
>
> **[5:53](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=353)** Now adding points to the map can cause a lot of clutter.
>
> **[5:56](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=356)** So by locking down these scales, it really helps clean up your map.
>
> **[6:00](https://www.linkedin.com/learning/learning-qgis-2/point-layers?u=76281980&t=360)** Regardless of point type, layers can be styled using these built-in symbols, fonts, or your own SVGs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (6), hit (4), next (1)
> **UI Navigation:** click on (5), select the (2), drag and drop (1), go to (1), dropdown (1)
> **Env Vars:** svg (5), qgis (2), epsg (1), utm (1)
> **CLI Commands:** make (4)
> **Analogies:** such as (3), for example (1)
> **Definitions:** is a  (3)
> **Ports:** :26910 (1)
> **Speakers:** - [narrator] (1)

#### Polyline layers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=0)** - [Instructor] Lime layers such as roads and pipe can be styled as simply as a solid line to as complex a line made up of a combination of various line types.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=9)** We're going to try that now.
>
> **[0:11](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=11)** Lets add the roadcenterlines.shp file to our current session.
>
> **[0:16](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=16)** Click okay and by default, the road center lines came in with a arbitrary color, in this case, red.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=22)** So if we double click on road center lines, we can go in and change the colors.
>
> **[0:26](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=26)** So under symbology, you can see it was red.
>
> **[0:28](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=28)** Lets change that to black.
>
> **[0:31](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=31)** So I'll just switch that to black, hit apply and you can see that our road center lines are now black.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=38)** Lets go back in and we'll change the width of the black to say 0.8 and then we'll hit okay and it's a little bit fatter.
>
> **[0:47](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=47)** You can see the lines are a lot fatter now.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=50)** Now you'll notice that where they meet each other, sometimes you get some overlap and hooking so lets go back in and fix that.
>
> **[0:57](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=57)** Some neat tools we can use if we pick on simple line, the drawing style instead of bevel, we can have round.
>
> **[1:04](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=64)** If we hit apply, in the background you can see where they meet a little bit better and the cap style meaning at the end of the line instead of just being a square block, we can round it out.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=73)** So if you notice underneath, there's a square edge to this end of this road segment but now if I hit apply, it's become round.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=81)** So now I have these nice round edges where all the road segments touch.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=86)** Lets go back in and make this a little more interesting.
>
> **[1:29](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=89)** Right now, we have one simple line added to our current symbol.
>
> **[1:33](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=93)** If we hit the plus sign, we add a secondary simple line.
>
> **[1:37](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=97)** I'm going to change this color to yellow so I'll get a more yellow color and hit apply.
>
> **[1:43](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=103)** So now you see in the background, I've got a black underneath with this yellow line on top.
>
> **[1:48](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=108)** Lets continue that.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=110)** Go back in, pick on that yellow line.
>
> **[1:53](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=113)** That's thin but instead of being a solid line, lets make it a dash line.
>
> **[1:58](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=118)** And again we'll do the bevel, round bevel and a round cap style, hit apply.
>
> **[2:05](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=125)** Now you can see that our road center lines look like little paved roads with a dash line in the middle.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=131)** Quite interesting.
>
> **[2:12](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=132)** What's hard to see even as we zoom in, they just get smaller and smaller.
>
> **[2:17](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=137)** Lets lock them in place to see how they would look.
>
> **[2:20](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=140)** So we go in here.
>
> **[2:21](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=141)** Right now, it says a millimeter, they're 0.8 millimeters.
>
> **[2:24](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=144)** So lets pick on the simple line.
>
> **[2:26](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=146)** It says 0.8 millimeters for that black simple line.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=149)** Lets change the units.
>
> **[2:31](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=151)** So instead of being millimeters, we use map units which are meters and make that 10 meters across.
>
> **[2:38](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=158)** Lets hit apply.
>
> **[2:39](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=159)** And then we'll pick on the dashed yellow line and change it from millimeters to meters as well and we'll make it one meter across.
>
> **[2:47](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=167)** Hit apply.
>
> **[2:48](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=168)** Now when we zoom out, it just looks like black lines but as we zoom in, you'll see the road is actually 10 meters wide.
>
> **[2:56](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=176)** So if I do a measure tool, you can see here.
>
> **[2:59](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=179)** I'll just use measure and go between the width of the line.
>
> **[3:02](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=182)** You see it's about 10 meters across.
>
> **[3:06](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=186)** And if I really zoom in and measure the dash line, it's about one meter across.
>
> **[3:15](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=195)** So we'll just close that.
>
> **[3:19](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=199)** And close that.
>
> **[3:21](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=201)** Okay, lets go back into our road center lines and now that we've seen that we've got a simple line one meter across and we've got another simple line that's 10 meters across, that's locked in.
>
> **[3:32](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=212)** So there's our road center lines.
>
> **[3:35](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=215)** Lets add the pipes.
>
> **[3:37](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=217)** So I'm going to add the pipes, these are water pipes.
>
> **[3:40](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=220)** Again, they came in a default color which in this case happens to be kind of an orangy color.
>
> **[3:44](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=224)** So lets fix that.
>
> **[3:45](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=225)** Well first of all, we're going to rename this layer.
>
> **[3:48](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=228)** We're going to call it water mains.
>
> **[3:53](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=233)** And we're not actually seeing the water mains, we're seeing all the pipe so we need to filter that.
>
> **[3:58](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=238)** So lets go back into water mains, we'll double click on it, pick on source and we're going to filter.
>
> **[4:03](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=243)** So in the query builder, we're going to get the type.
>
> **[4:06](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=246)** Double click on type so it appears down below, click on equals and then click all to get all the water pipes.
>
> **[4:14](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=254)** Now what we're going to use is primary supply.
>
> **[4:16](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=256)** The primary supply are the water mains for the city so if I double click on primary supply, you'll see type equals primary supply.
>
> **[4:23](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=263)** If I hit okay and okay so I'll just close that.
>
> **[4:28](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=268)** Now you can see the orange lines.
>
> **[4:30](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=270)** I'll pick on them.
>
> **[4:33](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=273)** That is primary supply type, okay.
>
> **[4:36](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=276)** There's a diameter 900 millimeters.
>
> **[4:38](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=278)** So lets change the color to blue.
>
> **[4:40](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=280)** So I'll go back into water mains, pick on symbology.
>
> **[4:44](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=284)** Right now, its an orangy color so lets go in there and make it more of a darker blue color cause it is a water main, hit apply and okay.
>
> **[4:52](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=292)** So now our map shows that we've got water mains filtered by primary supply.
>
> **[4:59](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=299)** There they are coming through the city.
>
> **[5:01](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=301)** And as we zoom in, you can see the roads have been styled by multiple types.
>
> **[5:06](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=306)** Again, we smooth them, we've rounded the caps so that you know when the end of the street is actually round.
>
> **[5:12](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=312)** Same with the lines within the dash line are round as well.
>
> **[5:15](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=315)** We've changed the styles in there and also we've filtered out the water mains from the pipe so that we can add that.
>
> **[5:21](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=321)** Now if we wanted to add the other types of pipe, we can add the pipes again, do another filter and bring them in.
>
> **[5:27](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=327)** So we can actually break it out by all the different types of separate layers that we can toggle on and off.
>
> **[5:33](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=333)** So quite powerful.
>
> **[5:34](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=334)** Also through the use of filtering, you could render the line work you need to see.
>
> **[5:39](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=339)** Those line based layers can be added even if they all come from the exact same shape file.
>
> **[5:43](https://www.linkedin.com/learning/learning-qgis-2/polyline-layers?u=76281980&t=343)** With a creative use of styles and transparency, cartographic styling can be used to add your polylines to your map effectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (11), [[Zoom]] (5)
> **UI Navigation:** click on (5), toggle (1)
> **CLI Commands:** make (5)
> **Versions:** 0.8 (3)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Polygon layers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=0)** - Polygon layers have both lines, the edges of the polygon, and fills, the color inside of the polygon.
>
> **[0:06](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=6)** Exploring the edge and fills can help add these types of layers to your map without hiding other layers underneath.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=12)** Let's try that now.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=14)** We're going to add buildings.shp, click okay, and parcels to our current map.
>
> **[0:21](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=21)** Make sure that the buildings are above the parcels by dragging and dropping.
>
> **[0:26](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=26)** There we go.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=27)** And they came in with some default colors.
>
> **[0:30](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=30)** To give some context we're going to bring one of these ECWs in.
>
> **[0:33](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=33)** Let's bring the 553A ECW.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=36)** So we'll drag and drop that in.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=38)** It doesn't know what coordinates it's in so let's right click on it and go properties and set the source to that UTM Zone 10.
>
> **[0:45](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=45)** There it is.
>
> **[0:46](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=46)** Hit okay and there it is, it's downtown.
>
> **[0:49](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=49)** Okay, make sure the parcels are above it.
>
> **[0:52](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=52)** So make sure the raster's underneath parcels and buildings.
>
> **[0:55](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=55)** And we'll zoom in and there we have it.
>
> **[0:58](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=58)** We've got an image, we've got parcels, and we have buildings.
>
> **[1:02](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=62)** Everything's in the right location.
>
> **[1:04](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=64)** Now things don't look great yet.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=66)** So first of all, let's change our buildings.
>
> **[1:09](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=69)** So let's go into buildings.
>
> **[1:11](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=71)** We're going to make it a gray color so you can pick gray 3 fill or you can pick it in a drop down and pick a gray color.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=78)** We'll do that and let's pick on a simple fill.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=81)** And then now for the solid line around it, we're going to make the solid line a different color.
>
> **[1:27](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=87)** So we're going to pick maybe a lighter gray.
>
> **[1:32](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=92)** Maybe even a white.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=95)** Let's go over here and pick a white color.
>
> **[1:40](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=100)** Let's see here.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=102)** White, that's what we want.
>
> **[1:45](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=105)** There.
>
> **[1:46](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=106)** Okay.
>
> **[1:48](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=108)** So hit apply.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=109)** So now we have gray buildings with a white outline.
>
> **[1:52](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=112)** Okay, that's what we wanted.
>
> **[1:54](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=114)** That's great, okay.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=115)** Gray buildings, white outline.
>
> **[1:57](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=117)** Now we need to look at where parcels overlap the raster layer.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=123)** Because sometimes the values get lost because it's a black line on a very dark raster.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=128)** So you want to be able to create these parcels so that you can see partially through it.
>
> **[2:12](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=132)** So we're going to make it 50% transparent.
>
> **[2:14](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=134)** And also make the edges show up whether it's over top of the raster or air photo or it's elsewhere on the map.
>
> **[2:21](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=141)** To do that we have to make the layer have a bit of a halo.
>
> **[2:25](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=145)** So to do a halo, first of all, we need to do our transparency.
>
> **[2:28](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=148)** So let's set it to 50% transparent.
>
> **[2:31](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=151)** Hit apply.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=152)** And you can see now that the parcels are transparent, you can see through it.
>
> **[2:37](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=157)** But we still don't have that halo yet, we just have transparency.
>
> **[2:40](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=160)** We have black lines around everything.
>
> **[2:42](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=162)** So the black lines really show up with the white background.
>
> **[2:46](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=166)** But over top of the raster sometimes it's kind of difficult to see.
>
> **[2:49](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=169)** So we're going to put a halo on those edges.
>
> **[2:52](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=172)** So let's go back into Parcels, click on the simple fill, and actually what we're going to do is we're going to hit + and add a second simple fill.
>
> **[3:00](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=180)** We're going to make sure it's below the other one.
>
> **[3:03](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=183)** And for the fill color, we're actually going to say transparent fill.
>
> **[3:07](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=187)** So there's going to be no fill color whatsoever.
>
> **[3:10](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=190)** Now the stroke color.
>
> **[3:11](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=191)** We're going to pick yellow.
>
> **[3:12](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=192)** So something bright yellow, there's a yellow.
>
> **[3:15](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=195)** And we're going to make the width .5.
>
> **[3:18](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=198)** So it's fatter than the one on the main part of the image.
>
> **[3:22](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=202)** So what we have now is, regardless of where the parcel is over the image, the edges have a bit of a halo.
>
> **[3:29](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=209)** So on the white lines, the dark lines show up well.
>
> **[3:33](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=213)** And then over top of the raster, the haloing, the yellow haloing appears.
>
> **[3:39](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=219)** We're going to make that haloing a little bit wider so you can really see it.
>
> **[3:42](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=222)** So I'll click on the simple fill.
>
> **[3:44](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=224)** Rather than having .5, I'll put .8.
>
> **[3:47](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=227)** Hit apply.
>
> **[3:49](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=229)** And now you'll see there's a bit of a yellow halo that goes around the edges of all the parcels.
>
> **[3:54](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=234)** What that gives us is ability to really distinguish where the edge of the parcels are over top both the air photos and on the regular map where there isn't any air photos.
>
> **[4:05](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=245)** Now the nice thing is because we made the buildings gray with a white outline, most of the buildings fall on top of a parcel.
>
> **[4:13](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=253)** So even if it sits on top of a yellow transparent parcel or a yellow transparent parcel that has white underneath, we still have buildings that really pop and we can see the edges because they're white.
>
> **[4:24](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=264)** And they really contrast with what they're over top of.
>
> **[4:27](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=267)** So that's a very powerful way to be able to bring a raster in but see the polygons over top very clearly, whether or not the polygons are on the raster or not.
>
> **[4:36](https://www.linkedin.com/learning/learning-qgis-2/polygon-layers?u=76281980&t=276)** So using these creative styles help us to author our maps so that we don't obscure anything underneath or lose the data because there's a raster or not a raster on top.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (5), [[Zoom]] (1), data (1)
> **CLI Commands:** make (11)
> **UI Navigation:** click on (3), drag and drop (1)
> **Env Vars:** ecw (1), utm (1)
> **Speakers:** - polygon (1)

#### Thematic layers, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=0)** - [Instructor] Filtering layers is an effective way to show only the data you need to see.
>
> **[0:04](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=4)** But if you have more than one or two filters that you want to add, using thematic tools would be way more effective.
>
> **[0:10](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=10)** Let's try that in our map now.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=12)** Let's drag and drop this PIPES shp into our current session.
>
> **[0:16](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=16)** Click OK.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=18)** There are our water pipes for the whole city.
>
> **[0:21](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=21)** Now we're going to theme this by the type.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=24)** So we're going to rename this layer to PIPES by Type.
>
> **[0:32](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=32)** Double click on it.
>
> **[0:34](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=34)** Go into Symbology.
>
> **[0:35](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=35)** And instead of a single symbol, we're going to choose Categorized.
>
> **[0:40](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=40)** The column we're going to use to categorize it will be called type, and we're going to hit Classify.
>
> **[0:49](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=49)** And click OK.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=50)** So now we have PIPES by Type, Fire Lines, Hydrant Leads, Primary Distribution, Primary Supply.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=59)** We may want to change Primary Supply because those are all the mains, so I want to make that slightly bigger by going 0.5.
>
> **[1:08](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=68)** Now, did you see what I did there?
>
> **[1:09](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=69)** If I click on Primary Supply directly, I can go into the style of that one themed sub-section.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=76)** Or if I double click on PIPES by Type I can see all the different themes, and then I can drill down into Primary Supply as a secondary click.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=86)** So if I double click on that again, I get the same dialog box I did by double clicking in the layers.
>
> **[1:32](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=92)** So you have two ways of getting to the style.
>
> **[1:36](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=96)** So for example, the Primary Distribution, I can just double click on that and change the colors or change the style at any time.
>
> **[1:45](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=105)** And then hit OK.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=107)** I can double click PIPES by Type and get into the style from there.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=111)** That's a very effective and powerful way of changing your themes.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=115)** In fact, you can even uncheck some of the themes.
>
> **[1:58](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=118)** This is one of the great parts of QGIS is the ability to theme your layers and then individually turn off and on those sub-themes within your thematic layers.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=128)** Let's turn off PIPES by Type.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=131)** We're going to drag PIPES in again.
>
> **[2:13](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=133)** This time, we're going to rename it to PIPES by Diameter.
>
> **[2:22](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=142)** Now, these pipes are metric.
>
> **[2:24](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=144)** They're in millimeters.
>
> **[2:25](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=145)** So let's go into the PIPES by Diameter.
>
> **[2:28](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=148)** We're going to change it to Graduated.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=152)** So we use categorized before because we use individual texts.
>
> **[2:36](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=156)** Like, we said fire line and hydrant lead, but because we're using numbers, we're going to use graduated.
>
> **[2:41](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=161)** So that means the numbers can be graduated between this range and that range, for example.
>
> **[2:46](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=166)** The column we're going to use is Diameter.
>
> **[2:49](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=169)** And we're going to just have a color ramp.
>
> **[2:52](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=172)** And we may just want to use blues that way we don't have random colors like we did by the type.
>
> **[2:58](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=178)** We can have blue color ramp.
>
> **[3:00](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=180)** So the smallest one will be the lightest color.
>
> **[3:02](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=182)** Now I have five classes by default, but I can reduce that to four classes.
>
> **[3:08](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=188)** And there's all the ranges.
>
> **[3:09](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=189)** So basically, the first range goes from 25 millimeters to 318.
>
> **[3:13](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=193)** So it sort of gives you that sort of range.
>
> **[3:15](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=195)** And I can change those values by double clicking and say, make it to 300 and so on and it will change from there.
>
> **[3:21](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=201)** So 300 to 600, say.
>
> **[3:23](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=203)** And if you notice, when I change the upper value, it automatically switches the lower value of the next line.
>
> **[3:30](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=210)** So for example, that says 906 and it says 906.25 there.
>
> **[3:34](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=214)** So if I double click and change 906 to 900, you'll see that 900 appears at the last line.
>
> **[3:41](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=221)** So that's very good within QGIS that it keeps track of your ranges.
>
> **[3:45](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=225)** Now let's hit OK.
>
> **[3:48](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=228)** And now we can see PIPEs by Diameter, and we can toggle those on and off.
>
> **[3:53](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=233)** And that might be a little too light, so let's change the color, maybe make it a little darker.
>
> **[3:59](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=239)** There we go, hit OK.
>
> **[4:01](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=241)** That's better.
>
> **[4:02](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=242)** So now we can see the ranges of the various pipes.
>
> **[4:06](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-1?u=76281980&t=246)** So we have PIPES by Diameter and PIPES by Type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (4), data (1), next (1)
> **Env Vars:** pipes (11), qgis (2)
> **UI Navigation:** click on (5), drag and drop (1), toggle (1)
> **CLI Commands:** make (3)
> **Analogies:** for example (3)
> **Versions:** 0.5 (1), 906.25 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Thematic layers, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=0)** - [Instructor] Let's create a combination of both.
>
> **[0:03](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=3)** I'm going to create a third thematic with the same pipes layer.
>
> **[0:06](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=6)** So I'm going to drag it in, we're going to just call it Pipes.
>
> **[0:11](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=11)** We're going to double-click on it.
>
> **[0:13](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=13)** In this case, we're going to use a categorized symbol, so we're actually going to choose on Type.
>
> **[0:19](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=19)** And we're going to just use random colors.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=22)** And we'll say Classify, it'll bring in all the different types there are.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=27)** You'll notice that there's one says All Other Values.
>
> **[0:30](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=30)** That means if there's any data in there that are not classified or don't have a type, they'll just be gray.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=36)** So let's hit OK.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=38)** And now we'll see the classified.
>
> **[0:39](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=39)** Now this is no different than Pipes by Classification or by Type.
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=43)** But let's go back in and change the diameter.
>
> **[0:46](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=46)** So what I can do, I can change the symbol type.
>
> **[0:49](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=49)** And where it says Width, I can change the units to map units, so whatever the width is, is going to be units on the ground, so this is .26 meters doesn't make as much sense.
>
> **[1:01](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=61)** I'm going to change this to a field type Diameter.
>
> **[1:05](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=65)** So I'm going to actually drive the width on the ground to the diameter.
>
> **[1:09](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=69)** So we'll hit OK.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=70)** Now remember these are in meters, so when I hit OK, wow.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=73)** So these are quite huge.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=76)** It shows that this diameter of each segment is quite wide.
>
> **[1:20](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=80)** Now here's the issue.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=81)** The diameters are in millimeters, but the widths on the ground are in meters.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=86)** So what happens is we're putting really wide meters when the diameter is only 300 millimeters.
>
> **[1:32](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=92)** So let's divide this by 100.
>
> **[1:34](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=94)** In order to do that, we'll go back into the definition, go into the symbol change, and we'll pick on that Width again.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=102)** Instead of using a field, we're going to actually go edit and we'll have an expression.
>
> **[1:48](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=108)** So there's the diameter.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=109)** That's the column and the shape file we're using to make the widths.
>
> **[1:52](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=112)** So if we do something as simple as divided by 100, just put the division symbol and type 100, and hit OK.
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=120)** And OK, and OK.
>
> **[2:02](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=122)** And now, the thicknesses are matching quite nicely.
>
> **[2:07](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=127)** Now you notice each segment sort of has a blocky look to it.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=131)** So let's smooth that out because we want our themes to look quite nice.
>
> **[2:14](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=134)** So I'll do one more step.
>
> **[2:16](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=136)** We'll go back into Pipes.
>
> **[2:18](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=138)** Go back in to change the style.
>
> **[2:20](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=140)** Pick on the simple line, and what we're going to do, the joint style we're going to round it, and the cap style we're going to round it as well.
>
> **[2:27](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=147)** So hit OK, Apply, and OK.
>
> **[2:30](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=150)** And now, we have much smoother transitions between the various sizes and the different pieces of pipe, which is quite powerful.
>
> **[2:39](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=159)** So you've seen here that we've got Pipes by Diameter, Pipes by Types, and Pipes by Type and Rendered by Diameter, driven by the actual diameter of the pipe to units on the ground.
>
> **[2:52](https://www.linkedin.com/learning/learning-qgis-2/thematic-layers-part-2?u=76281980&t=172)** One advantage the QGIS has is that the thematic layers not only rapidly render the layer into many colors and styles based on the column, each individual theme can be toggled on and off.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (5), data (1)
> **CLI Commands:** make (2)
> **Env Vars:** qgis (1)
> **UI Navigation:** double-click (1)
> **Speakers:** - [instructor] (1)

#### DEM layers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=0)** - [Narrator] Digital elevation models use the default gray scale when added to QGIS.
>
> **[0:05](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=5)** There's an infinite array of colors and palettes we can use to make those dems look much more appealing.
>
> **[0:10](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=10)** Let's add a couple dems now.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=12)** So in the raster folder, we're going to bring in the east and west dems.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=15)** Just drag them into a new project, click okay.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=18)** And bring in the west, there we are.
>
> **[0:21](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=21)** There's the east and the west dem files.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=24)** So let's just double click on the demw, that's the west one.
>
> **[0:28](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=28)** We can change from single ban gray to single ban pseudo color.
>
> **[0:32](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=32)** And if I just use any of these built in color ramps, like reds for example, and hit apply, you can see that we can use red colors to style that dem.
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=43)** We'll go back in and try something else, maybe the magma.
>
> **[0:47](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=47)** And again, you can see the various colors of that dem.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=51)** Let's use something that looks a little more like a natural digital elevation model.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=56)** In this case, we're going to create a new color ramp.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=59)** So we're going to bring in the CPT city.
>
> **[1:02](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=62)** And we're going to browse through all these different ramps.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=66)** Now these are premade ramps that give colors to dems.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=70)** And we can use any of these color ramps.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=73)** Now the one I like is the topography.
>
> **[1:15](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=75)** It's the SD dash a.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=76)** That's the one we're going to use.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=78)** And we're going to click okay.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=81)** And you can see it's filled it in all the way through.
>
> **[1:25](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=85)** So, we can see the minimum is zero.
>
> **[1:27](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=87)** The maximum is 465.
>
> **[1:29](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=89)** And if I hit okay, there's the colors.
>
> **[1:33](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=93)** So, I don't like that green for the water, so I'm going to go back in here, and double click on the green.
>
> **[1:40](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=100)** And just make it a white color.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=102)** We'll hit okay.
>
> **[1:43](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=103)** And you'll see the value of zero is a white color.
>
> **[1:46](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=106)** So that's a lot better.
>
> **[1:48](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=108)** So now we can see that.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=109)** Let's change this a little bit.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=111)** Now both of these sort of cap out at 313, so I'm going to change the color ramp from 465 to 313.
>
> **[1:58](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=118)** And then hit apply.
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=120)** Oh, now I've reset my water, so let's go back in, make sure my water is white again.
>
> **[2:05](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=125)** Let's do that.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=128)** And as you can see, I'm doing some tweaking.
>
> **[2:10](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=130)** I can tweak the different elevations, you can see all the different elevation ranges.
>
> **[2:14](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=134)** And every label is basically a range of elevations, or a particular elevation, and given that elevation a color.
>
> **[2:21](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=141)** I've made the range from zero to 313.
>
> **[2:23](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=143)** Hit apply, and there you go.
>
> **[2:25](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=145)** So, you can see the high elevations are white, and the low elevations are green.
>
> **[2:30](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=150)** And then the white is the background water.
>
> **[2:33](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=153)** And I could actually change that to like a blue if we wanted to.
>
> **[2:36](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=156)** Let's do the same with the eastern one.
>
> **[2:38](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=158)** So the first thing we're going to do is go in, and switch from single ban gray to pseudo color.
>
> **[2:43](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=163)** Again, we're going to pick the color ramp that we want.
>
> **[2:46](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=166)** At our fingertips, we don't have that one again, so we're going to go back in and create a new one, which is basically picking the same one we just picked before, which is under the topography SD dash a.
>
> **[2:58](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=178)** Hit okay.
>
> **[2:59](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=179)** And change the max to 313.
>
> **[3:02](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=182)** And hit okay.
>
> **[3:05](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=185)** And now they line up pretty nicely.
>
> **[3:06](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=186)** Oh, but our waters got that green color again, so let's go back in there, change that zero to white.
>
> **[3:14](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=194)** And hit okay.
>
> **[3:16](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=196)** So there you go, we have both east and west dems color coded as a dem should be, with elevation.
>
> **[3:23](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=203)** So white and dark colors are the higher elevations, green are the lower elevations.
>
> **[3:29](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=209)** Now we could experiment a little more, like I could change that white to maybe a little blue.
>
> **[3:34](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=214)** A really light blue color.
>
> **[3:35](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=215)** Maybe like water, like that.
>
> **[3:39](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=219)** And see what that looks like.
>
> **[3:41](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=221)** And that sort of gives you the idea that's the water.
>
> **[3:43](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=223)** So if we can take that same blue color, like that one right there, okay, and we'll apply that to the other map.
>
> **[3:54](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=234)** So maybe a blue color right about there.
>
> **[3:56](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=236)** I could copy the html notation and get it perfect.
>
> **[4:00](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=240)** Actually, that's exactly what I'm going to do.
>
> **[4:02](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=242)** I'm going to go to the first one, grab that color, grab the html notation, copy it, and go back to the western one.
>
> **[4:11](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=251)** Go back to blue, and paste it right in there.
>
> **[4:13](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=253)** And that way, the water is the same color right across the board.
>
> **[4:18](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=258)** So, sometimes it may take some trial and error to get the style you need with a dem for your area.
>
> **[4:24](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=264)** With our area, there was a lot of elevations at sea level, so the range would be tricky.
>
> **[4:29](https://www.linkedin.com/learning/learning-qgis-2/dem-layers?u=76281980&t=269)** Don't be afraid to experiment with your dems to get them to look their best.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (8), [[HTML]] (2)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (2), go to (1)
> **Env Vars:** qgis (1), cpt (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 6. Labeling Features

[↑ Back to Table of Contents](#table-of-contents)

#### Label vector data, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=0)** - [Instructor] Any vector layer can be labeled using its attached attributes.
>
> **[0:03](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=3)** The labels can be tied to a point, line, or any polygon feature.
>
> **[0:08](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=8)** First, let's add the street center lines to our current map.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=12)** Okay, so here's the street center lines.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=14)** I'll change the color so they're black, so they're easy to see, go to symbology, color, I'll just pick a black color.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=22)** There we go.
>
> **[0:23](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=23)** And I want to label them.
>
> **[0:25](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=25)** So the first thing I do is go back into the style.
>
> **[0:28](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=28)** I pick on Labels.
>
> **[0:29](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=29)** Where it says no labels in the drop-down, I'm going to choose single labels.
>
> **[0:33](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=33)** And label with, these are the columns in the shape file that I have to choose from.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=38)** Everything from street name, to length, to road ID.
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=41)** But we're going to use street name, and I'm not going to change anything else, I'm just going to hit okay.
>
> **[0:46](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=46)** And right away, it's labeling all the street segments with the street name.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=51)** Let's make some changes.
>
> **[0:53](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=53)** Some of the placement we can change is from parallel, to horizontal, to curved.
>
> **[0:58](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=58)** Well first of all, let's look at horizontal, and hit Apply.
>
> **[1:02](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=62)** In the background, every piece of text is horizontal on the screen.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=66)** If we pick curved and hit apply, this will actually curve the text around the line work.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=73)** So even when, for example, here on the screen, let me just hit okay, and pan.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=78)** You can see Mill Street is arcing around that curve of the line.
>
> **[1:23](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=83)** So it's actually showing up and curving it around.
>
> **[1:25](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=85)** Now if I go back to the placement, and I go back to parallel and I hit okay, you notice Mill Street is straight, and Barnsby is underneath.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=95)** But if I go back to the placement, and go back to curved, it's a much nicer style for labeling line work.
>
> **[1:44](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=104)** Okay, let's add the raster.
>
> **[1:46](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=106)** So we'll bring in a raster image.
>
> **[1:48](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=108)** Drag and drop it in.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=110)** It thinks it's in EPSG-4326, it's actually in UTM, so I'm going to double-click on it, change the source to the NAD83 UTM and hit OK, and there it is, and make sure it's behind the road center lines.
>
> **[2:06](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=126)** Now the text is hard to see because it's black, and we've got raster there, so let's go back into road center lines and see what we can do about that.
>
> **[2:14](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=134)** The first thing I would do is put a buffer around it, like a halo.
>
> **[2:18](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=138)** So if I go to Buffer and I hit check, Draw Text Buffer, it's just going to say one, and I put 100% opacity, and it's round, so let's hit OK, and now there's a white halo around all the text.
>
> **[2:31](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=151)** Now when it's over top of the air photo, it's real easy to see, and when it's on the white part of the map it's easy enough to see because the black is seen and the halo doesn't even show up.
>
> **[2:41](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=161)** But what's really great about that is regardless of whether it's on a white background or a raster background, the text is real easy to be seen.
>
> **[2:48](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=168)** Now the halo may be a little too big in this case, so I'm going to go back in and make that halo a little bit smaller, instead of one maybe I'll try point six.
>
> **[2:58](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=178)** That's a little better, not so halo-y, I guess.
>
> **[3:01](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=181)** So there we are, we've actually got a line work here that's arcing, that you can see every piece of line is labeled, the street center lines have all the labels on them, and we're ready to go.
>
> **[3:12](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=192)** Well, let's add the parcels now.
>
> **[3:14](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=194)** So we're going to drag and drop parcel shape into our map, again make sure it's above the raster, and it is, and we're going to make them a hollow parcel, so we're going to go into parcels, go into symbology, and where the color, we're going to get the drop down color and we're actually going to change it to, no, I'm actually not going to change the color, I'm going to pick on simple fill, and I'm going to change the fill color to transparent fill.
>
> **[3:39](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=219)** There we are.
>
> **[3:41](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=221)** Now all our parcels are hollow.
>
> **[3:43](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=223)** We can see the outlines, but they have a transparent inside, so even on the map, you can see that they're transparent.
>
> **[3:51](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=231)** We may want to do something like put a halo around the linework as well, so let's look at that.
>
> **[3:56](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=236)** So if we go into the symbology, I may add an additional linework, so I'll pick simple fill again, this time I'm going to move it down, I'm going to change the fill color as well, actually we're going to make it transparent fill, and then change this line color itself to something like a yellow, or actually maybe let's make it white, and I'll make it slightly bigger than the other one, point five.
>
> **[4:23](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=263)** So hit Apply, so now you see that all the linework for all the parcels have a white halo around them, as well as the text for the linework for the road segments.
>
> **[4:37](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=277)** So they really pop, when you see it over top the aerial photograph.
>
> **[4:41](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=281)** So that's great, so now we can see that the parcels are available, you can see them with the white background or over the aerial photograph, you could see the parcels, now I want to label each of these parcels themselves with the house number.
>
> **[4:53](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=293)** So let's go back into parcels, and we're going to go into labels, and where it says no labels, we're going to say single labels, and instead of street name we're going to pick house number.
>
> **[5:03](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=303)** In this case it's HOUSENUMBE, without the R.
>
> **[5:06](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=306)** Okay, let's just hit OK, and there are all the house numbers for every single parcel.
>
> **[5:13](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=313)** Now they're a little bit cluttered, so we may want to make them a lot smaller.
>
> **[5:18](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=318)** Let's do that, let's go back into parcels, and instead of them staying the same size, what we're going to do is we're going to change the point size to actually map units, which in this particular map it's in meters, your map may be in feet, but it's map units, so whatever that is.
>
> **[5:34](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=334)** So this case it's going to be 10 meters on the ground if you were to measure it.
>
> **[5:39](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=339)** So let's look at what that looks like if I hit OK.
>
> **[5:42](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=342)** Well, it's kind of big, may work for some parcels but some parcels are quite small and may not fit in there very well.
>
> **[5:49](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=349)** So what we want to do is make that slightly smaller.
>
> **[5:52](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=352)** So what we'll do is go back into parcels and maybe make it about a seven.
>
> **[5:56](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=356)** We'll see how that looks.
>
> **[5:58](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=358)** I hit Apply in the background, and sure enough, and what it's good to do is pan around, see if you can find the smallest parcel that is labeled, and if the text will fit in the tiniest parcel then you're pretty good to go.
>
> **[6:10](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=370)** So there might be little buildings here that may be a problem, we may want to label those separately or we can shrink this down a little bit more.
>
> **[6:18](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=378)** So let's do that, let's make this instead of a seven, let's make it all the way down to a four.
>
> **[6:25](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-1?u=76281980&t=385)** There we go, and it fits in most of these parcels.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (12), parallel (2), feature (1)
> **CLI Commands:** make (13), find (1)
> **Env Vars:** utm (2), epsg (1), nad83 (1), housenumbe (1)
> **UI Navigation:** go to (2), drag and drop (2), double-click (1)
> **Cross-References:** go back to (4)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Label vector data, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=1)** - [Instructor] It's still difficult to see those labels inside of each of the parcels on top of the raster.
>
> **[0:07](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=7)** So even though we've made the text really small and it fits inside each of the parcels, we can't see it when it's overtop of the aerial photograph.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=14)** So we're going to have to fix that.
>
> **[0:16](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=16)** So what we have to do is make a buffer, or halo.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=18)** So we're going to pick on buffer under the labels, we're going to draw a text buffer and hit apply.
>
> **[0:25](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=25)** Now that's still a little big so what I'm going to do is I'm going to change it to .5 and see how that looks.
>
> **[0:29](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=29)** Hit apply, and okay.
>
> **[0:32](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=32)** So that's a lot better, now we can see the text inside of each of the parcels on our map.
>
> **[0:37](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=37)** Now some of them, they're aligned a little funny because it's over to one side, it looks like it's left justified, and why it's labeling that way is the geographic center of an object is also called a centroid.
>
> **[0:52](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=52)** That's the dead-center of any of these polygons that were labeling, and it's also the dead-center of a line, or anything else.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=60)** Now because the centroid is what drives the label points we may want to move those labels around the centroid.
>
> **[1:07](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=67)** Luckily, the label text, if we go into parcels and we look at placement we can see that it's stuck around the centroid.
>
> **[1:15](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=75)** Now we can also say use the offset from centroid so we can actually go to one side.
>
> **[1:22](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=82)** Or we could just label the perimeter.
>
> **[1:24](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=84)** So if I do that and hit apply the text will be stuck right on the perimeter, so you'll notice that the house number is on one of the perimeters of the line, right, so we can say above or below or you can have orientation dependent.
>
> **[1:39](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=99)** So that is using the line of the polygon to label.
>
> **[1:43](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=103)** Now we don't want to do that.
>
> **[1:45](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=105)** Now we can also do offset from centroid.
>
> **[1:48](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=108)** So here's our quadrant, there's the centroid dead-center, that's what we usually are used to.
>
> **[1:53](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=113)** So if i hit apply you can see in the background all the text is right in the middle of the centroid.
>
> **[1:58](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=118)** Now maybe I want it to one side of the centroid a little bit and I can pick on that one and if I hit apply you'll see it's slightly offset to one side.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=128)** So that means that's where the text is, and that's exactly where I want the text actually in this case.
>
> **[2:12](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=132)** It's slightly offset to one side, and we'll hit okay.
>
> **[2:17](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=137)** Now what if we don't want just the text in there, we also want the actual full address?
>
> **[2:23](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=143)** So we can put that inside here and label each of these polygons with the full address.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=149)** So let's go back into parcels and try that out.
>
> **[2:31](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=151)** So we saw the placement, yes we've got it offset from centroid, we've got it just off to the left of it.
>
> **[2:37](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=157)** We have a buffer, .5 buffer, make a nice halo.
>
> **[2:40](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=160)** We've got the text actually labeled, it's in four meters on the ground.
>
> **[2:45](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=165)** But the actual value of the house number is here.
>
> **[2:48](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=168)** We can build a bit of logic here so that we can catenate the house number with the street name.
>
> **[2:55](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=175)** So if we pick that epsilon symbol and we can see in the expression dialogue box, house number, that's one of the columns.
>
> **[3:02](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=182)** So I can add it to something else.
>
> **[3:04](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=184)** So what I'm going to do is I'm going to hit a plus sign and I have to put this in single quotes, so the first single quote, then a backslash, N, in single quotes.
>
> **[3:12](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=192)** So what I'm doing is I'm actually adding a carriage return or a next line after the house number in the label.
>
> **[3:20](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=200)** So the next thing I want to do is put a plus, so what I'm going to do is I'm going to actually get a field and the field I want is the street name.
>
> **[3:27](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=207)** So I'm going to double-click on street name and now we have house number, plus a carriage return, plus street name.
>
> **[3:34](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=214)** And see the output preview?
>
> **[3:36](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=216)** It'll show you 1519 Chalfant Road, right there.
>
> **[3:40](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=220)** So if I hit okay, hit apply, and now you can see all the labels.
>
> **[3:46](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=226)** Now the problem we see here is that because we're offset from the centroid, we're not sure where those addresses are for because it's quite a long word.
>
> **[3:55](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=235)** So we may have to go back to the placement and go back inside the centroid, and we can even force it inside the polygon itself.
>
> **[4:03](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=243)** So let's do that, there we go.
>
> **[4:06](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=246)** Now we've got labels inside each of these polygons.
>
> **[4:09](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=249)** Now again some of them are pretty small and they're overlapping, so we can go inside here and change the font one more time.
>
> **[4:17](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=257)** So let's go back into the text and change the size to maybe three, it's getting quite small at this point.
>
> **[4:24](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=264)** But at least it's fitting inside most of these polygons that we can see.
>
> **[4:28](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=268)** So what we have is we have labeled our street segments and we've also labeled the inside of all the parcels.
>
> **[4:35](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=275)** The nice thing is by putting that halo or that buffer around the text, it's very visible, regardless of what's in the background, whether it's in the white space.
>
> **[4:44](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=284)** Here's a classic example, you can see that 123 Pryde Avenue, the 123 is overtop of the air photograph and the Pryde Avenue is on white.
>
> **[4:52](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=292)** But because we have that buffer, that halo, it's really visible here.
>
> **[4:57](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=297)** Now we can use techniques such as scale limits to turn off the labels when we zoom way out because as you can see, as we zoom way out, it gets very busy in some cases.
>
> **[5:06](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=306)** We have all these tiny little labels.
>
> **[5:08](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=308)** So let's go back into parcels and we're going to change the scale at which these are placed.
>
> **[5:16](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=316)** So we click on rendering and we can say scale dependent visibility.
>
> **[5:21](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=321)** So the upper scale, I'm just going to make 2500, I'm going to type it in there, so if you zoom out past 1 to 2500 they'll disappear.
>
> **[5:29](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=329)** So let's do that, and you'll notice that all our text for the parcels disappear because we're at about two sixth of one to 6000.
>
> **[5:37](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=337)** But if we zoom in to about one to 2500 the text comes back.
>
> **[5:41](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=341)** I'll zoom back out, it's less cluttered now.
>
> **[5:44](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=344)** We have the street names, but we don't get the text of inside each of the parcels 'til we zoom right in.
>
> **[5:49](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=349)** And that makes sense because it would be difficult to see when we zoom out.
>
> **[5:53](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=353)** So we've got this scale-dependent text that will only show up when we really, really need it, like at one to 2500 for these parcels.
>
> **[6:01](https://www.linkedin.com/learning/learning-qgis-2/label-vector-data-part-2?u=76281980&t=361)** So using these techniques such as scale limits, map versus point units, buffers to make that halo, you can make the text very legible regardless of what scale we're using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (9), [[Zoom]] (7), next (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (5)
> **UI Navigation:** go to (1), double-click (1), click on (1)
> **Analogies:** such as (2)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 7. Changing Default Properties

[↑ Back to Table of Contents](#table-of-contents)

#### Project properties, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=0)** - [Instructor] The project properties within your project or QGIS file said items such as name, background color and possibly some of the most important option is setting the coordinate system of your project, but you could also set that within the interface.
>
> **[0:13](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=13)** Let's look at some of the project properties.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=15)** Well, before we begin and we have to make a project.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=18)** So, let's add a couple layers maybe the parcels and hit OK and the buildings.
>
> **[0:25](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=25)** And let's just save our project, so, we'll go Project, Save and we'll just put it to our desktop and just call it nanaimo, N-A-N-A-I-M-O, nanaimo.
>
> **[0:37](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=37)** And so, we now have a project called nanaimo and let's go into the project properties, so, Project, Properties.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=44)** Under the General, we can see where the file is stored.
>
> **[0:48](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=48)** The project home is basically the default place where to find all the files that make up this project.
>
> **[0:54](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=54)** So, we could use the same desktop folder or we could even use our project like the exercise files data and we could use that as our default project home.
>
> **[1:04](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=64)** We should give this project a title, I'll put it City of Nanaimo, BC, Canada.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=73)** So if I hit OK, you'll see our project name is now City of Nanaimo, BC, Canada, so I hit Save.
>
> **[1:19](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=79)** Let's go back to our properties.
>
> **[1:22](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=82)** Now, we also have a selection color we can pick any color we want.
>
> **[1:25](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=85)** Right now, it's yellow.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=86)** So, if I go back and I pick Select, you'll see... Let's pick that again, parcels, turns yellow.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=95)** There we are, let's select it.
>
> **[1:36](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=96)** But in our properties, we can change any color we want.
>
> **[1:40](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=100)** So, you can choose yellow, red, pink, whatever you like.
>
> **[1:44](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=104)** Now, remember I think red is a normal identified button.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=107)** Is that color so you want something different than the identified color.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=111)** So, in this case, yellow works pretty well.
>
> **[1:53](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=113)** Now, for those of you who work with a lot water or islands you can also change your background color to something like blue.
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=120)** When we hit OK, the background is blue.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=123)** Now, that's okay for some of this map, because some of it is water, but the rest is land, so that doesn't make sense.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=129)** So let's go back into our properties and change it to something else or back to the default color.
>
> **[2:15](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=135)** Some of you may come from a CAD background and most to your background is black.
>
> **[2:20](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=140)** So, if you're from a CAD background, you can always make the background black like that.
>
> **[2:25](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=145)** That is remember when printing it maybe an issue, so let's go back and make this a properties, white background, there we go and so on.
>
> **[2:34](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=154)** So, let's just hit Apply to make sure the background is white.
>
> **[2:37](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=157)** So, some of the measurements we can have in the Elipsoid, so that when we're measuring, it's not just on a flat earth, it's curved, so, our measurements much more accurate.
>
> **[2:45](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=165)** So, right now, it's default as GRS 1980, but you can change that to anything else in our list.
>
> **[2:50](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=170)** And the default units from measurement are meters and square meters which make sense, because we're using a UTM coordinate system.
>
> **[2:57](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=177)** If you look in the bottom corner of our project, it's EPSG:26910 which is UTM zone 10 meters.
>
> **[3:05](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=185)** So, using these distances, your default measurements make sense, but you can always change it, so your default measurements can be in feet or anything else, it's kilometers, nautical miles and so on.
>
> **[3:16](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=196)** In the coordinate display we can set it to the map units which are in meters or you can put in degrees and minute, seconds whatever works for you.
>
> **[3:24](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=204)** Now, when we look at our map, let's go back out again, and we can see that we have a set of scales here that pre-defined, they come with QGIS.
>
> **[3:33](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=213)** But maybe we want to always use the same one, so that's one to 25,000.
>
> **[3:37](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=217)** Maybe have some custom scales we want to add.
>
> **[3:39](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=219)** So, in going back into the properties and use project defined scales and we can add them.
>
> **[3:44](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=224)** So, we can start with wanted say 500 and then we can add want to say 2,500, I'll do 5,000, I'll do it for you, 5,000, 10,000, 25,000 and maybe 50 just to make sure we get everything.
>
> **[4:12](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=252)** There we are.
>
> **[4:13](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=253)** So, now, if I hit OK, we look our drop-downs, we've only got the scales listed here that we constantly use.
>
> **[4:21](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=261)** So, we don't have that big, long list that comes by default.
>
> **[4:25](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=265)** With QGIS we have just the ones that are used within our project.
>
> **[4:29](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=269)** So, we can jump to all those different scales, there we are.
>
> **[4:33](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=273)** Let's go back to the project properties.
>
> **[4:37](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=277)** Now, the Metadata is generated, some of it automatically for example of the title and my name and the date, but you can fill all these and I actually recommend all your projects plus match Metadata as you can into it.
>
> **[4:48](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=288)** Basically, list all the different keyword and so on.
>
> **[4:51](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=291)** It will make it easier for you to maintain your data and understand what your data is.
>
> **[4:55](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=295)** This is something I would recommend doing in all your projects.
>
> **[4:58](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=298)** In QGIS is making sure you keep your Metadata up to date.
>
> **[5:02](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=302)** Now, in CRS you can overwrite it say for no projection, just default to one particular coordinate system or you can overwrite it and do a coordinate conversion datum transformation.
>
> **[5:12](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-1?u=76281980&t=312)** By default, this is using the UTM that even shows a highlight in the dialogue box here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (6), data (3), [[Metadata]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** qgis (4), utm (3), cad (2), grs (1), epsg (1)
> **CLI Commands:** make (10), find (1)
> **Cross-References:** go back to (2)
> **Analogies:** such as (1), for example (1)
> **Ports:** :26910 (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### Project properties, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=1)** - [Instructor] When you add new layers, for example, in our project I just dragged in the parcels and buildings and assigned them a particular color, but we can actually change the default symbol so that when you add something with a particular fill we can actually give it a default color.
>
> **[0:16](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=16)** So for example, the fill is a gradient.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=18)** Let's hit okay, and next time I add something that has polygons in it, so maybe I can bring in, see if I've got something else.
>
> **[0:26](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=26)** Oh I'll just bring in the buildings again, and you'll see that these buildings are using that interesting color gradient that I made as default.
>
> **[0:34](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=34)** So you can go back into your project properties and change your default styles so every time you add a style it doesn't necessarily have to be a random one picked by QGIS, but it'll actually just take the one that you said it should be.
>
> **[0:47](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=47)** You can really customize this.
>
> **[0:49](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=49)** Use the style manager, changing color around, and so on for all your various default symbols.
>
> **[0:54](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=54)** So right now my fill's simple white so now if I add the buildings again, I'll just add it one more time.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=60)** Now it's just a solid white color.
>
> **[1:02](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=62)** Okay, let's go back into our properties.
>
> **[1:05](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=65)** Just one thing I want to go back to.
>
> **[1:08](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=68)** Under General, there's a very important drop-down box here under save paths and I just skipped over this and I think we need to go back and talk about this a little bit.
>
> **[1:17](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=77)** The save paths, meaning where the files that are being referenced by your project.
>
> **[1:23](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=83)** So right now they're relative.
>
> **[1:25](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=85)** That means if I'm using the NIMO that's on my desktop, it thinks there's a directory underneath it called exercise files and in there under data.
>
> **[1:34](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=94)** So if I were to move this project somewhere it would lose track of where those files are 'cause it's relative to where the project is.
>
> **[1:41](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=101)** If I use absolute they're hard-coded and then if I ever move them or if I move this project anywhere, I have to go through and all my attached data I have to reassign.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=110)** So be very careful.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=111)** I like relative paths and that way I bundle up the data and the project together in the same folders that they were created in and keep things very easy.
>
> **[2:01](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=121)** This would be a challenge if you put your QGIS projects in one drive, say Q drive, and you put your data on the S drive, then relative paths make no sense.
>
> **[2:10](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=130)** You should have absolute paths.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=131)** Just keep that in mind, depending on where you put your projects to where you put your data.
>
> **[2:16](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=136)** I just wanted to swing back to that.
>
> **[2:19](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=139)** Here's all the data sources currently.
>
> **[2:21](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=141)** You saw that I dragged three different buildings in the parcels.
>
> **[2:24](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=144)** They're identifiable so I can pick on them.
>
> **[2:26](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=146)** You can change it read only so there's no editing.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=149)** You can make them searchable so you can find things inside of them.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=152)** And you can make them required in the project.
>
> **[2:35](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=155)** Under relations, relations are basically joins.
>
> **[2:38](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=158)** What you can do is if you have more than on layer... I'll just show, add relation.
>
> **[2:42](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=162)** You could make a join between one layer and another.
>
> **[2:45](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=165)** It could even just be an attribute.
>
> **[2:48](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=168)** Basically you could take your parcels and link them to zoning or take your parcels and link them to some big database that keeps track of all the dog licenses and so on.
>
> **[2:58](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=178)** And you can make that relationship between two different tables within the relations.
>
> **[3:02](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=182)** So that's what this is for.
>
> **[3:03](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=183)** It's for mapping two different data sources together.
>
> **[3:06](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=186)** There's a set of variables that come with QGIS and a lot of these are set by default.
>
> **[3:12](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=192)** But you can also look at the QGIS site and see any more project variables that are set.
>
> **[3:18](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=198)** And a lot of these variables are set by the metadata in the general tabs.
>
> **[3:22](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=202)** They're actually stored in your variables as well.
>
> **[3:25](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=205)** So they're inside there.
>
> **[3:26](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=206)** Now for those of you who are savvy with Python, you can set up a series of macros so whenever you open up the project, whether you open it, save it, or close it, you can do all sorts of Python.
>
> **[3:37](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=217)** So that's a neat thing about the macros.
>
> **[3:39](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=219)** Finally, within the project properties, is the QGIS server.
>
> **[3:42](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=222)** QGIS server is not installed with QGIS.
>
> **[3:45](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=225)** It is an enterprise software.
>
> **[3:47](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=227)** It is definitely open source, and you install it on a server and the server can be anywhere in the cloud or it could be on your Windows server.
>
> **[3:55](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=235)** And what it does is it allows you to publish data from your QGIS project up to the server so that everyone can see it.
>
> **[4:02](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=242)** So we have all the settings and service capabilities within the QGIS server.
>
> **[4:07](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=247)** There's too many to go over right now but just so you know that there is a QGIS server out there and that this is where you go to configure that to connect your project to the QGIS server.
>
> **[4:18](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=258)** The project properties are stored within your QGIS project, within the QGIS file itself.
>
> **[4:22](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=262)** And will be there the next time you open your project.
>
> **[4:25](https://www.linkedin.com/learning/learning-qgis-2/project-properties-part-2?u=76281980&t=265)** Now you may wish to create an empty standard project with all your settings already pre-made, so that any future project you start has all the data, the coordinate systems, and the relative paths all set for you going forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), next (2), [[Python (Programming Language)|Python]] (2), hit (1), database (1)
> **Env Vars:** qgis (13), nimo (1)
> **CLI Commands:** make (5), python (2), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** set up (1), install (1), configure (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)


### 8. Printing with Print Layout

[↑ Back to Table of Contents](#table-of-contents)

#### Adding maps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=0)** - [Instructor] The quickest way to print or plot your map in QGIS is through the Print Layout.
>
> **[0:04](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=4)** Adding maps to the Print Layout is the only requirement prior to printing.
>
> **[0:08](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=8)** You also need to set up the layout to use your desired page.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=12)** Let's make a quick map.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=14)** I'm just going to add the Buildings and the Parcels.
>
> **[0:16](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=16)** Okay.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=18)** Just a simple map with both.
>
> **[0:21](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=21)** Make sure the Buildings are on top.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=24)** And we're going to use this as a Map.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=27)** So we're going to go Project, New Print Layout.
>
> **[0:30](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=30)** We're going to call it My First Plot.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=36)** And here's My First Plot.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=38)** There's nothing in it right now.
>
> **[0:40](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=40)** It's in Landscape, but we need to add an item.
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=43)** So the first item we need to add is the map itself, so click Add Map and draw a window of where that map will be on the page.
>
> **[0:53](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=53)** And there's the map.
>
> **[0:55](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=55)** Now, if you don't like the look of it, or you want to change the map, you can always go back and alter the map any time.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=60)** So I'm going to flip back and change the parcels to a lighter color.
>
> **[1:12](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=72)** And make the buildings gray.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=78)** Let's go back to our layout, and you see, as soon as I clicked on it, it refreshed.
>
> **[1:24](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=84)** So there's our map.
>
> **[1:25](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=85)** Now if we want to actually change the layout of this, we could actually go into the item properties here and click on the Interactively Edit Map Extend.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=95)** So when I click on that, I can then go into the map and adjust it using my wheel mouse, zoom in and out, and adjust the map accordingly.
>
> **[1:46](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=106)** So now I've got the map laid out.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=107)** If I want to plot this, I can go to Layout and Print.
>
> **[1:54](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=114)** And whatever printer you have as available, you can print.
>
> **[1:57](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=117)** Now you can change all the properties, so if we go to Layout, and we go to Page Setup, we can change from letter to whatever page size we want--portrait or landscape, and so on.
>
> **[2:10](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=130)** And that's all there is to plotting the map itself.
>
> **[2:13](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=133)** Now, if you wanted to add a 3D map to this, you'd have to go back to our project, under View, New 3D Map... Maybe dock it up here while it's rendering.
>
> **[2:31](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=151)** Even adjust it.
>
> **[2:37](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=157)** I may even want to put the terrain to online.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=164)** I'll go back to our layout, and we can Add Item, Add 3D Map, and maybe draw it right here.
>
> **[2:54](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=174)** What I did was, in the Scene Settings, it said there is no scene, so I clicked on Copy Settings from a 3D View.
>
> **[3:01](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=181)** Then I took the 3D View of the current map, and now it's loading in our browser.
>
> **[3:05](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=185)** Once it shows, we can then plot it.
>
> **[3:10](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=190)** There it is.
>
> **[3:11](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=191)** Again, now I can go Layout, Print, and my printout will show this map, plus the 3D map in the corner.
>
> **[3:19](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=199)** So multiple maps can be plotted at different scales.
>
> **[3:22](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=202)** Rotation of the scales is inherited by the current map, but can be altered after the fact.
>
> **[3:26](https://www.linkedin.com/learning/learning-qgis-2/adding-maps?u=76281980&t=206)** Each print layout is saved within the current project, so you can have it each time you open the project and reprint as often as you need to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **UI Navigation:** go to (3), click on (2), open the (1)
> **CLI Commands:** make (3)
> **Cross-References:** go back to (3)
> **Prerequisites:** set up (1), setup (1)
> **Env Vars:** qgis (1)
> **Speakers:** - [instructor] (1)

#### Adding elements
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=0)** - [Narrator] Inserting elements such as scale bars and legends make a print layout a powerful map making tool.
>
> **[0:05](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=5)** Custom elements such HTML iframes and images can also be added.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=9)** Let's create a new print layout now.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=12)** In my project, click new print layout.
>
> **[0:17](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=17)** We'll call it map layout.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=20)** First thing we're going to do is add an item, a map.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=22)** So let's draw the map here, it'll use the default map in the background with the same scale.
>
> **[0:28](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=28)** And we may want to make that a little bigger, and I can actually zoom in a little, so what we can do is in the item properties, there's a button here called interactively edit map extent.
>
> **[0:37](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=37)** And we can certainly do that.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=38)** And that allows me to zoom and pan within my print layout.
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=41)** So let's set this up so it looks like that.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=44)** There we go.
>
> **[0:45](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=45)** And then we'll stop interactively using that.
>
> **[0:48](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=48)** The next thing I want to add is the legend.
>
> **[0:52](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=52)** So I'll put the legend right here.
>
> **[0:55](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=55)** So you can see we've got buildings, parcels, and air photo.
>
> **[0:58](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=58)** And we can modify the symbols on the left and so on.
>
> **[1:02](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=62)** We can put them on the right if we'd like.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=63)** I like it on the left as well.
>
> **[1:05](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=65)** You can put a title, and just say layers.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=70)** We may also need a scale bar, so go add item, scale bar, and we'll draw one right here beside the layers.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=78)** Now by default, it's showing two segments.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=81)** Right, two.
>
> **[1:22](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=82)** So let's add maybe four, give you an idea.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=86)** There's a nice scale bar.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=88)** We can say single box, double box.
>
> **[1:31](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=91)** We can make line ticks.
>
> **[1:33](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=93)** Then make the line ticks up.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=95)** Just make it straight numeric.
>
> **[1:37](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=97)** But I'm going to put a double box in just like that.
>
> **[1:40](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=100)** Okay.
>
> **[1:41](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=101)** The next thing I want to add is a north arrow, so I'll add a north arrow.
>
> **[1:45](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=105)** We use the default, we'll just put it right here.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=109)** There we go.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=109)** So we have a north arrow.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=110)** If we were to rotate our map, that north arrow would change.
>
> **[1:53](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=113)** We change our scale.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=115)** The scale bar will change, so let's interactively change our map a little bit.
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=120)** You can see our scale bar moving.
>
> **[2:01](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=121)** We may have to adjust accordingly.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=123)** Okay.
>
> **[2:04](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=124)** So now I'm going to interactively add that.
>
> **[2:06](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=126)** We have a lot of other items.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=128)** We can add another 3D map, we can insert a picture, we can add a label, another north arrow, we could draw a shape, we can draw an arrow, and we can add a polygon.
>
> **[2:19](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=139)** We can put straight html into our page.
>
> **[2:22](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=142)** What I'm going to do right now is I'm actually going to add an attribute table, so I'm going to draw an attribute table right here.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=149)** And by default, it's actually looking at the buildings.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=152)** Now what I want to do, is I want to limit this grid of data of these buildings to just show the buildings on the current map.
>
> **[2:40](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=160)** So if I say check only features within the map, I'll check that.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=164)** And I'll link it to the map one which is currently there.
>
> **[2:47](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=167)** You'll notice that only the buildings that are listed.
>
> **[2:49](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=169)** Now let's flip this over to the parcels.
>
> **[2:52](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=172)** Now it's a lot bigger diagram, so I may have to make it a little bit smaller and rearrange.
>
> **[2:56](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=176)** We can limit the columns and the attributes we want to see, so we can actually say, y'know, we don't want to see the, let's go through and see the different, like, status.
>
> **[3:06](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=186)** We can get rid of status.
>
> **[3:08](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=188)** And we can get rid of zoning and so on.
>
> **[3:11](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=191)** Let's get rid of all these extra zonings here.
>
> **[3:14](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=194)** We'll just remove those.
>
> **[3:16](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=196)** Remove that one.
>
> **[3:20](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=200)** Zoning four.
>
> **[3:22](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=202)** And zoning two.
>
> **[3:25](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=205)** Let's see if that helps.
>
> **[3:26](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=206)** Yes, it's a lot narrower.
>
> **[3:28](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=208)** There's no zoning listed in here, so let's go back into attributes and get rid of that last zoning.
>
> **[3:33](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=213)** There we go.
>
> **[3:35](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=215)** And it's almost fitting on our page.
>
> **[3:38](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=218)** So we could get rid of maybe another layer.
>
> **[3:41](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=221)** We can get rid of accuracy.
>
> **[3:43](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=223)** Let's go back into attributes.
>
> **[3:45](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=225)** Find accuracy, get rid of that by hitting the minus sign.
>
> **[3:48](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=228)** Okay, perfect.
>
> **[3:50](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=230)** So now we only have the features, or the parcels on our current map listed in this long list right here.
>
> **[3:59](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=239)** So, we have the parcels that are currently in our view.
>
> **[4:02](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=242)** We have the data that's attached to them.
>
> **[4:05](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=245)** We have layers, we have a north arrow and a scale bar.
>
> **[4:09](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=249)** And I could again, add html and draw shapes.
>
> **[4:13](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=253)** I can even draw an ellipse if I wanted to right here and put whatever I'd like in there, and modify our map.
>
> **[4:19](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=259)** And then we can plot it.
>
> **[4:20](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=260)** So, we can make all sorts of notes and heads up displays, and plot this if this was going to a council meeting, or you're plotting it to give to someone in the field, you'd have this ability to do that.
>
> **[4:31](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=271)** You could save this map layout and plot it whenever you want if the data updates.
>
> **[4:35](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=275)** So to does the data in this map.
>
> **[4:37](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=277)** So, combining maps and elements within a print layout makes a striking presentation.
>
> **[4:42](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=282)** Now as you've seen, GS data does not tell the whole story.
>
> **[4:45](https://www.linkedin.com/learning/learning-qgis-2/adding-elements?u=76281980&t=285)** These labels, legends, and images add a lot of value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[HTML]] (3), [[Zoom]] (2), next (2)
> **CLI Commands:** make (7), find (1)
> **Analogies:** such as (1), just like (1), picture (1)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Warnings:** heads up (1)
> **Speakers:** - [narrator] (1)


### 9. Creating New Data

[↑ Back to Table of Contents](#table-of-contents)

#### Creating new vector vata
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=0)** - [Instructor] Creating data from scratch is one of the best features of QGIS.
>
> **[0:04](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=4)** It is easy to create a new layer and digitize data to that layer.
>
> **[0:08](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=8)** The first layer we're going to create is actually a pothole layer, and we're going to create a ShapeFile and add pothole points to it.
>
> **[0:15](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=15)** So under layer, we'll go create layer, new ShapeFile layer.
>
> **[0:21](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=21)** The file name will just be called potholes.
>
> **[0:26](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=26)** We may have to browse to where we want to put that.
>
> **[0:28](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=28)** I'll just put it on the Desktop.
>
> **[0:31](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=31)** It'll be points, we have points, multipoints, lines, and polygons, in this case it'll just be a point.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=38)** It'll have three or four fields so we're going to remove that ID1.
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=41)** We're actually going to call it PH ID, as in pothole, and it will be a whole number, and then we'll add it.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=50)** The next one will be pothole type, and that will be text data, make it about 80, add that.
>
> **[1:01](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=61)** And we're going to do pothole date, so we're going to record what dates the pothole was recorded, we'll add that.
>
> **[1:08](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=68)** And finally, we'll do the pothole name, so basically who gathered the data that day, and that will be text data, again, 80, add that.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=78)** So now we have a potholes.shapefile with four columns: PH ID, which is the pothole ID, it's an integer, which is a whole number, a PH type, which is what kind of pothole is it, is it a crack, is it a big hole, so on, PH date, so that's the pothole date, so when was this pothole recognized and recorded, and finally, PH name, who found the pothole, was it me, was it you, and so on.
>
> **[1:44](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=104)** So, we're going to hit OK and that will automatically create the potholes.shapefile and add that to our map.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=111)** Now you can see there's potholes, little green dots, but there's not on our map yet, we have to digitize it.
>
> **[1:56](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=116)** So we'll highlight potholes, we'll click the toggle editing, and then right beside that, there's an add point feature.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=123)** So let's put a pothole right here in the middle of the intersection, and we get a dialogue box pops up, we'll say it's pothole number one.
>
> **[2:13](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=133)** The pothole type, we'll just say it's a big, big hole, and the date was -- in the dropdown I can pick the date, it was today, and the name was myself, Gordon.
>
> **[2:26](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=146)** There we go, we click OK.
>
> **[2:28](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=148)** Let's draw another one.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=149)** So again I'll go up here, editing, pick another one, it's down the street right here, and that's number two, and it's a crack, and the date, again, was today, I'll just pick it, and the name is myself as well, Gordon.
>
> **[2:47](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=167)** So there's the second one, you see them appear.
>
> **[2:48](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=168)** Now to stop editing, you just have to click the toggle editing button and hit save, and now this ShapeFile has potholes in it.
>
> **[2:57](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=177)** We can use to identify and pick on it, and see the values.
>
> **[3:03](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=183)** And you see the pothole ID one, big hole, what date it was, and who did it.
>
> **[3:07](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=187)** So now we have a ShapeFile that we can add to our project whenever we want and edit potholes and continue to draw this data.
>
> **[3:14](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=194)** Okay, let's add another one.
>
> **[3:15](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=195)** The next thing I want to add is the areas for garbage pickup.
>
> **[3:19](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=199)** So I'm going to create a new layer, so create layer, new ShapeFile again.
>
> **[3:25](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=205)** We could use the SpatiaLite or GeoPackage layer, but in this case, we're going to use ShapeFile layer.
>
> **[3:30](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=210)** The file name, we're just going to call it garbage, and we'll put in on the Desktop for sure, garbage.shape, there we are, and we'll remove the default ID, and we're just going to call it garbage, so first one is going to be GB ID, and that's going to be a whole number integer, we'll add that.
>
> **[3:53](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=233)** The next one will be the zone, and that will be a text data, and it could be 10, that's fine, that's zone, so A, B, C, we're going to have different zones, and finally, we're going to have the garbage day day, so what day of the week it is, so I'll make that 20 'cause I'll put Wednesday and so on, so I'll add that.
>
> **[4:17](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=257)** So we have ID, what zone we're in and what day we're in, we'll hit OK -- oh, before we go, we got to make sure this is a polygon, make sure we catch that, had to be a geometry of polygon.
>
> **[4:28](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=268)** If I left it, I'd create a point layer of garbage and I want a polygon layer, so make sure the geometry type is set to polygon.
>
> **[4:36](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=276)** So, let's click OK, and now we have a garbage polygons.
>
> **[4:40](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=280)** Now, there's nothing on the map yet, but what I'll do is I'll enable editing, and then I can use the add polygon feature, and this whole area right here, their pickup is on Mondays, and I'll just right-click to complete, and this is number one, it's zone A, and their day is Monday, 'kay?
>
> **[5:06](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=306)** We can draw another zone, let's pick another one, so we'll draw again from here over to here.
>
> **[5:22](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=322)** Right-click to finish, this is two, they're zone B, and their day is Tuesday.
>
> **[5:31](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=331)** There's the two polygons for the garbage pickup, and I'll stop editing and save it back to the ShapeFile.
>
> **[5:38](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=338)** And you know, we could also go into the garbage and change the transparency, I'll make it 20 so we can see through those garbage zones, and we can even label the garbage zones so we know what they are.
>
> **[5:47](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=347)** So we can go to labels and add a single label and we can use the day of the week, there we go, we see Monday and Tuesday and there we are.
>
> **[5:57](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=357)** So, once you create your own layers in your project, you can share them or add spatial data as you wish.
>
> **[6:03](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=363)** So, we have two new layers, we have a polygon layer, which is garbage zone pickup, and we have potholes that are point, and we can also add a multipoint and also lines.
>
> **[6:13](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=373)** So the sky's the limit in terms of all the different ShapeFiles you can add, and all the different data types you can add, and you can add as many columns as you wish, and track all your information and add it to your project.
>
> **[6:24](https://www.linkedin.com/learning/learning-qgis-2/creating-new-vector-vata?u=76281980&t=384)** Even if you don't have a ShapeFile, you can create one from scratch, that's the power of QGIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), next (3), hit (3), feature (2), power (1)
> **CLI Commands:** make (6)
> **UI Navigation:** toggle (2), right-click (2), dropdown (1), go to (1)
> **Env Vars:** qgis (2), id1 (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Exporting layers to shapefiles
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=0)** - Since QGIS can connect to many data sources including Oracle, SQL Server, Post-GIS, and shape files, you may want to make your data more transportable.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=9)** Exporting any vector layer to shape enables you to move that data around that may have been inside a database, such as HostGIS or SQL Server.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=18)** Also, you can filter any vector data and export that as a subset of the data to a shape file as well.
>
> **[0:23](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=23)** Let's do that.
>
> **[0:25](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=25)** In my pipes layer, I'm going to double-click on it and filter it.
>
> **[0:29](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=29)** So under Source, I'm going to go to Query Builder, I'm going to bring Type in where it's like, oh, only want one like, so I'll delete that, and we're going to query all the types.
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=41)** Now, I really just want to get all the supply lines.
>
> **[0:45](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=45)** Now there's multiple that say supply, so what we can do is we can put a single quote, a percent sign, which is a wild card, so it means it can begin with anything, and put the word "supply", and then a single quote.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=60)** So what this means is any word that ends with the word "supply", it doesn't matter what's in front of it, but ends in "supply" will be filtered.
>
> **[1:08](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=68)** So now if I hit OK, only the secondary and primary supply lines will be appearing on my map.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=76)** These are supply lines.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=76)** I'm actually going to rename this.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=81)** And just put supply lines.
>
> **[1:26](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=86)** There we go.
>
> **[1:27](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=87)** Now, our data's filtered.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=88)** That means not only just the graphics but also the attributes.
>
> **[1:31](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=91)** If I right-click and look at attributes, I'll only have all the supply types.
>
> **[1:38](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=98)** I scroll right to the bottom, you'll only see there's 849 pipes, but they're all forms of supply.
>
> **[1:45](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=105)** So let's close that.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=107)** By the way, also notice, since we're filtering, there's a little filter symbol right there, so ready to go.
>
> **[1:53](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=113)** Now let's export this as a shape file.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=115)** So we just right-click, and then what we're going to do is we're going to export, and save features as.
>
> **[2:05](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=125)** Now we have a lot of options.
>
> **[2:07](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=127)** We can export as a geo package, shape file, BNA, and so on, Geo JSON, Map Info, Spatial Light, all sorts of file formats.
>
> **[2:17](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=137)** In this case, we're going to pick Shape File.
>
> **[2:20](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=140)** The file is going to be called Supply Lines, let's browse to the Desktop.
>
> **[2:30](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=150)** We'll save it.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=152)** Make sure the coordinates systems, the 983 UTMs on 10, that's fine.
>
> **[2:36](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=156)** And I'm going to leave the defaults all the way down, and I'm going to click OK.
>
> **[2:42](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=162)** By default, the add saved file to map is there, so when I export this shape file, it'll automatically add the shape file to my current map.
>
> **[2:49](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=169)** So I'll click OK, and there's my new supply lines.
>
> **[2:52](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=172)** Let's remove the filter off the pipes.
>
> **[2:56](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=176)** So what we'll do is we'll go to Query Builder, clear it, hit OK, and OK, and I'll get rid of the renaming that again.
>
> **[3:03](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=183)** I'm going to rename that layer back to pipes just because it's all the pipes now.
>
> **[3:10](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=190)** There we go.
>
> **[3:11](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=191)** So now we have a shape file called Supply Lines, and an original shape file called Pipes.
>
> **[3:17](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=197)** So we now have a subset of the data filtered out from the original.
>
> **[3:22](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=202)** Now, this is great because we can filter anything and export it.
>
> **[3:27](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=207)** Our original data was a shape file, but it could've been anything.
>
> **[3:30](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=210)** It could've been Oracle, it could've been a Post-GRIS database, it could've been anything.
>
> **[3:35](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=215)** But in this case, we've just done a subset of a shape file, and created a new shape file.
>
> **[3:40](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=220)** The nice thing about the shape file is I can zip it up and email it to someone or share it on the network.
>
> **[3:45](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=225)** It's extremely portable.
>
> **[3:47](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=227)** Shape files contain both graphics and attributes.
>
> **[3:50](https://www.linkedin.com/learning/learning-qgis-2/exporting-layers-to-shapefiles?u=76281980&t=230)** The attributes are stored in an old Dbase DBF file, but the advantage of using these files is that shape files are extremely portable, and that's what we're looking for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), [[Microsoft Word|Word]] (3), [[Microsoft SQL Server|Sql server]] (2), database (2), hit (2)
> **Env Vars:** sql (2), qgis (1), gis (1), bna (1), json (1)
> **UI Navigation:** go to (2), right-click (2), double-click (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), it's like (1)
> **Definitions:** is a  (1)
> **Speakers:** - since (1)

#### Adding data from Excel (CSV)
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=0)** - [Instructor] Often, data does not come in a GIS format.
>
> **[0:03](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=3)** CSV files, or comma-separated values, can contain the X and Y or latitude and longitude, however.
>
> **[0:10](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=10)** They can be created from an export from another GIS or even from a GPS device.
>
> **[0:16](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=16)** Let's look at one now.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=18)** Here's the incidents.csv.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=20)** I'll open that up in Excel.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=22)** Inside the file, it gives all sorts of data about the information and the incidents that happened.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=27)** The thing that is most important to us is the latitude and longitude.
>
> **[0:32](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=32)** We can use these points or these numbers to create points inside of QGIS.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=36)** Let's close up Excel.
>
> **[0:39](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=39)** Go back into QGIS.
>
> **[0:40](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=40)** In the background, I've just added an OpenStreetMap layer from the XYZ Tiles, just to give us some context.
>
> **[0:47](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=47)** Next I'll go into Layer, Add Layer, and I'm going to add it from the Delimited Text Layer.
>
> **[0:54](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=54)** This is where I'm going to actually look at that text file and use the X and Y columns to put dots on the map.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=60)** The first thing I need to do is browse to the file.
>
> **[1:02](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=62)** So, there it is, incidents.csv.
>
> **[1:04](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=64)** I'll click Open.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=66)** It's a CSV, comma-separated values.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=70)** Now, under the Geometry definition, which is very important, we need to pick the X field and a Y field, the X being the longitude and the Y being the latitude.
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=81)** The Coordinate System should be EPSG:4326.
>
> **[1:24](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=84)** That's great.
>
> **[1:25](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=85)** And if we click Add, it should put points on our map.
>
> **[1:29](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=89)** Let's close the Data Source.
>
> **[1:31](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=91)** So, what you're seeing here are points coming directly from that Excel or CSV file being drawn on the map.
>
> **[1:38](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=98)** And we can even use some of the subdata to see what's inside.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=102)** First of all, I'm going to use the Identity tool.
>
> **[1:44](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=104)** Pick on one of these dots, and you can see, sure enough, there's data.
>
> **[1:48](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=108)** That particular point is a theft from motor vehicle under 5,000.
>
> **[1:52](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=112)** Property crime and its location, and there's the latitude and longitude.
>
> **[1:56](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=116)** Let's theme this so we can see what kind of crimes are occurring.
>
> **[1:59](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=119)** So, right click on Incidents and go Properties.
>
> **[2:02](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=122)** We'll go into Symbology, and we're going to change it from Single Symbol to Categorized, and we'll base it on the crime type.
>
> **[2:13](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=133)** And hit Classify, and there they are.
>
> **[2:16](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=136)** We'll hit OK.
>
> **[2:17](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=137)** And now we've color-coded all the points according to whether it's break and enter, mischief, shoplifting, theft from a motor vehicle, or theft of a motor vehicle, plain old theft, and anything else.
>
> **[2:28](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=148)** So all those crimes are now as dots in the map.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=152)** Again, it's streaming directly from that CSV file.
>
> **[2:35](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=155)** It's not necessarily a GIS file, but because there's X and Y, latitude and longitude, probably exported from a GPS unit, we now have those locations all over the city.
>
> **[2:46](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=166)** Now, since CSV files cannot be edited, you may wish to export them as a shapefile.
>
> **[2:51](https://www.linkedin.com/learning/learning-qgis-2/adding-data-from-excel-csv?u=76281980&t=171)** Alternatively you can open the CSV directly in Excel and edit the attributes, or X and Y, and then refresh that layer in QGIS when you're done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (4), [[Microsoft Excel|Excel]] (4), gis (3), hit (2), next (1)
> **Env Vars:** csv (6), gis (3), qgis (3), gps (2), xyz (1)
> **File Paths:** incidents.csv (2)
> **UI Navigation:** click on (1), open the (1)
> **Ports:** :4326 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Editing existing data
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=0)** - [Instructor] Existing GIS data, both attributes and graphics, can be easily edited in QGIS.
>
> **[0:05](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=5)** The graphics, depending on pointliner polygon type, can be drawn directly in the map.
>
> **[0:10](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=10)** The attributes can be edited by a form.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=12)** By modifying the layer properties, you can change the way the form prompts you for information.
>
> **[0:17](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=17)** Let's look at the editing now.
>
> **[0:19](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=19)** I'm going to highlight the parcel's layer, and I'm going to toggle the editing tool.
>
> **[0:24](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=24)** Let's pick on a parcel, I'm going to pick on this one, and make sure I'm in editing mode so that just was a identify; this time I'm going to use the select features.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=36)** There it is.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=36)** And you can see all the notes as little Xs.
>
> **[0:40](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=40)** And I can actually modify this slightly.
>
> **[0:42](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=42)** So what I'm going to do is I'm going to use the modify vertex tool and I can move this around and resize this, using the vertex tool.
>
> **[0:53](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=53)** So basically what I'm doing is I'm grabbing the vertices and moving them around to modify that.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=59)** So I'm going to stop that editing.
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=63)** I'm just going to discard.
>
> **[1:04](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=64)** I don't need to save that.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=66)** Okay, let's edit that again.
>
> **[1:08](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=68)** This time make sure I'm using the select object.
>
> **[1:11](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=71)** I can hit the delete button and the whole object will be deleted.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=76)** So I'm going to toggle my editing again, I'm going to discard that.
>
> **[1:19](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=79)** So you can pick on the vertices, move them around using the vertices tool, you can highlight the object and completely delete it.
>
> **[1:27](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=87)** We can also create a brand new item from scratch, so I can actually draw a brand new parcel here.
>
> **[1:34](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=94)** Right click to start, and again, I get all the feature attributes of the parcel.
>
> **[1:38](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=98)** So from the very top, I can do type, house number, and so on.
>
> **[1:42](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=102)** Now all of these fields, they just want me to type in, but there's a lot of risk of error.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=107)** I can type anything I want; I can put any street name I want.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=110)** I want a lookup, so I have a drop down list of exactly what I need.
>
> **[1:54](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=114)** So I'm just going to cancel out of here, and go back into the parcels and work on getting those drop down, or domains, inside of each of those features.
>
> **[2:04](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=124)** So if I go into the parcels, and I go into the attributes, and I pick on type, now I can modify the type, so, again, it's in the attributes and if I pick on type, I can change the widget type of how I'm going to edit it.
>
> **[2:18](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=138)** Right now, it's a text edit.
>
> **[2:19](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=139)** But I can actually change that to a value map.
>
> **[2:23](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=143)** That means I can basically have a drop down list, a value map, of all the data that I need.
>
> **[2:28](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=148)** Now I can load it from a particular layer, or if I had a .csv file with all the different values I wanted, but in this case I'm going to actually use the shapefile itself.
>
> **[2:37](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=157)** So I'm going to load it from the parcels itself, it's going to look at itself, and find out what sort of fields are in the type.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=164)** The description will be the same.
>
> **[2:46](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=166)** I'm going to use type and type for the descriptions, so the drop down will be the same.
>
> **[2:50](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=170)** And there might be nulls, or maybe we don't want nulls.
>
> **[2:53](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=173)** So I won't insert that.
>
> **[2:55](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=175)** So click OK.
>
> **[2:57](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=177)** And apply.
>
> **[2:58](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=178)** So now, this layer, if I were to draw a brand new parcel, right click to start, you'll see under my type, I can say airspace, building, and so on.
>
> **[3:09](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=189)** There's no risk of typing the wrong thing in my types during data entry.
>
> **[3:15](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=195)** So during the data entry process, I now have a drop down that really controls everything.
>
> **[3:20](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=200)** So let's do that with maybe the house number, and perhaps the zoning one.
>
> **[3:24](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=204)** Let's go back and change that.
>
> **[3:25](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=205)** So, two more things I want to do is change the street name to a value map, again.
>
> **[3:32](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=212)** We're going to load data from layer, pick itself, parcels.
>
> **[3:36](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=216)** The value is going to be the street name, and the description's going to be the street name, as well.
>
> **[3:43](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=223)** There we go.
>
> **[3:44](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=224)** And we'll hit OK, and hit OK.
>
> **[3:47](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=227)** So let's try drawing one again.
>
> **[3:50](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=230)** So we've got two different items now.
>
> **[3:53](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=233)** We've got the type drop down, so we can pick anything we want, oh, and street name!
>
> **[3:58](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=238)** We now have a distinct list of street names, all the way down, alphabetically.
>
> **[4:02](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=242)** And you can jump down to H, or K.
>
> **[4:05](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=245)** I'm actually pressing that on the keyboard.
>
> **[4:07](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=247)** If I press W it jumps to Ws, or L, and so on.
>
> **[4:12](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=252)** So I can actually jump to the right street name.
>
> **[4:15](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=255)** Now in a bigger city with more street names, this might become a little cumbersome, but the nice thing is, again, using your keyboard you can jump to whatever, I, I can jump to the Is, and so on.
>
> **[4:25](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=265)** Okay, let's cancel out and do the zoning as well.
>
> **[4:27](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=267)** So I'm going to go back into parcels, go under properties, pick on zoning one, for example.
>
> **[4:33](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=273)** Again, change from text edit to value map.
>
> **[4:36](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=276)** And I'm going to load from the layer, again, parcels, and zoning one will be zoning one, and zoning one will be the description value, and we'll hit OK, apply, and OK, and again we're going to draw, again and look at what the drop down domains give us, again, type, street name, and scroll down to zoning, and sure enough in the zoning, I can pick the zoning designations.
>
> **[5:01](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=301)** There they all are, one big long list.
>
> **[5:03](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=303)** So we can do that.
>
> **[5:04](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=304)** So that's very powerful.
>
> **[5:06](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=306)** Let's go back in one more time, and look at this layer definitions.
>
> **[5:10](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=310)** Now, I don't have any, but, if I had a date field, I could change the text edit from a text edit to a datetime, so, for example, if I decided to make accuracy a datetime, it's not, that's not what it is, but just for an example here, and I wanted to draw a new parcel.
>
> **[5:27](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=327)** Now if you see accuracy, I actually get a calendar pops up.
>
> **[5:30](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=330)** So not only do I have drop downs, I can actually put in a calendar if the widget type is set to datetime.
>
> **[5:38](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=338)** And we can do color, so if I had a particular color, I could pick color, or classification, or checkbox, or what have you.
>
> **[5:45](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=345)** I like colors, because then we got, OK, and we'll draw again just to show you accuracy.
>
> **[5:49](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=349)** Now, obviously, accuracy is not a color, but there you go, you get the color wheel.
>
> **[5:53](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=353)** And you could actually pick all these different colors into the database, and it'll actually probably put the hex code in there and so on.
>
> **[5:59](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=359)** So let's cancel out of that.
>
> **[6:01](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=361)** Now I'm going to fix that, because accuracy's definitely not a color, so we'll go back in there and put it back to just a text edit.
>
> **[6:07](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=367)** Okay, that's back to normal.
>
> **[6:09](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=369)** Now all those settings are stored within the layer within the project.
>
> **[6:13](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=373)** If I drag a new parcels in, all those amazing settings and domains and lookups are gone when I do that.
>
> **[6:19](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=379)** So just so you know, during the editing process, you want to change some of those features, how they work, and all those attributes, you have to do it in the layer definition itself.
>
> **[6:27](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=387)** So QGIS makes editing data very simple by giving you the ability to modify the forms.
>
> **[6:33](https://www.linkedin.com/learning/learning-qgis-2/editing-existing-data?u=76281980&t=393)** Know that the way the data form is shown is based on the project, and will not behave in the same way if you add that GIS data to a new project, or even to a new layer, for that matter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8), hit (4), gis (2), [[Vertex]] (2), feature (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** gis (2), qgis (2)
> **UI Navigation:** toggle (2), scroll down (1), checkbox (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 10. Using Advanced Tools

[↑ Back to Table of Contents](#table-of-contents)

#### Overlay two vector layers
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=0)** - [Instructor] There are many types of overlay analysis including intersection or union, which graphically combine or join vector based layers.
>
> **[0:08](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=8)** Within QGIS there are many ways to perform these geospatial analysis.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=12)** In this case, we're going to overlay buildings with parcels so that the zoning attributes of the parcels will be transferred over to the buildings.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=20)** So under Vector, we have Geoprocessing Tools such as Buffer, Clip, and so on.
>
> **[0:25](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=25)** These tools all create brand new geographic objects that may be clipped or added to from the original files.
>
> **[0:33](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=33)** What we're going to do is take the original buildings footprints as they are without modifying them but attach attributes from the parcels according to the overlay analysis.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=44)** That's a different tool.
>
> **[0:45](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=45)** Under Data Management Tools, we have a tool called Join Attributes by Location.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=50)** So let's try that now.
>
> **[0:52](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=52)** The input layer will definitely be buildings 'cause that's what we want in the end.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=56)** We want the building footprint.
>
> **[0:58](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=58)** But we want to take some of the attributes from the parcels.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=60)** So the join layer will be parcels and we'll choose intersects.
>
> **[1:04](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=64)** The fields we're going to use we're going to browse and the only two fields we want from the parcels are the zoning one and zoning one description.
>
> **[1:12](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=72)** We'll click OK.
>
> **[1:14](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=74)** There's two types of joins.
>
> **[1:15](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=75)** There's a separate feature for each located feature.
>
> **[1:19](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=79)** That means if a building straddles a parcel with multiple zoning designations it'll create two separate buildings both with a different zoning.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=88)** We don't want that.
>
> **[1:29](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=89)** We want it to basically grab the first zoning designation that that building has on top of that parcel and do that.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=95)** So we're going to do a one to one.
>
> **[1:37](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=97)** And we're going to discard any records that cannot be joined.
>
> **[1:41](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=101)** We're not going to put any join field prefixes.
>
> **[1:43](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=103)** Like I could put parcel_zoning one.
>
> **[1:46](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=106)** I don't need to do that.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=107)** The layer I'll create, I'm going to create a file.
>
> **[1:50](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=110)** I'm just going to put that on the desktop.
>
> **[1:52](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=112)** And I'm going to call it buildings zoning so we know what it is.
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=120)** And then we're going to pick run.
>
> **[2:05](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=125)** So this algorithm may take awhile.
>
> **[2:07](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=127)** We'll let it process.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=129)** And now the overlay is complete.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=131)** So we can close this dialog box.
>
> **[2:14](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=134)** And I'll turn off the original buildings and we'll look at the new buildings that we just created.
>
> **[2:19](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=139)** So if I actually pick on it using the Identity tool we can see that these buildings have all the original data that already was there but now it has the zoning one and zoning one description.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=149)** So all the buildings are the same geometries but they have two new columns now joined together.
>
> **[2:35](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=155)** Which is fantastic and that's what that join layer is, basically coming from the building zoning layer.
>
> **[2:40](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=160)** So we have that at our fingertips.
>
> **[2:42](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=162)** So when we look at all the Geoprocessing Tools from Buffer, to Clip, to Union, to the Data Management Tools of merging the layers together and Join Attributes by Location, we have so many.
>
> **[2:53](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=173)** There's a vast array of analysis tools at your fingertips.
>
> **[2:55](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=175)** You can process your data in many, many ways.
>
> **[2:58](https://www.linkedin.com/learning/learning-qgis-2/overlay-two-vector-layers?u=76281980&t=178)** Now this will elevate your data from what is, to what can be.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), management (2), feature (2)
> **Code Identifiers:** parcel_zoning (1)
> **Env Vars:** qgis (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Create a heatmap from points
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=0)** - [Instructor] A heat map is a way to show the intensity of points over a given area.
>
> **[0:04](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=4)** It's a way of making sense of a large amount of point data within your map.
>
> **[0:08](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=8)** First, let's add some points to our current map.
>
> **[0:11](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=11)** Under Layer, Add Layer, Add Vector Layer.
>
> **[0:17](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=17)** Click on Delimited Text.
>
> **[0:19](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=19)** Browse to the incidents.csv, make sure that the X field is longitude, or long, and the Y is lat, or latitude.
>
> **[0:30](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=30)** It is in 4326, lat/long 84.
>
> **[0:34](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=34)** And we'll click Add.
>
> **[0:35](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=35)** Close, and there's all our points that make up all the crime incidents for this city.
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=41)** So, what we'd like to do is make a heat map out of this.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=44)** Now, the nice thing about GQIS is that you can just style your point layer, to turn it into a heat map dynamically.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=50)** So, let's just double-click on Incidents.
>
> **[0:52](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=52)** And the first thing we're going to do is we're going to change the symbol definition from Single symbol to Heat map.
>
> **[0:59](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=59)** Once you do that, the color ramp defaults to a white to black, sort of, range, and a radius of 10, so, 10 millimeters, on the screen.
>
> **[1:08](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=68)** So, let's just hit OK.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=70)** And, the first thing we see is that the background is obscured by the heat map, but we can see these dark spots, that's where there's a lot of crime.
>
> **[1:19](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=79)** But, it really doesn't have context, because we can't see through the heat map.
>
> **[1:23](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=83)** So let's go back into that layer, we're going to pick on the color ramp, and we're going to edit the color ramp.
>
> **[1:29](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=89)** First thing we're going to do is, going to change color one, to be transparent, so now it's transparent, color one's transparent.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=95)** Click OK, hit OK.
>
> **[1:37](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=97)** And now, we can see right through that heat map, we can see that there's two dark zones, there's one right downtown, and one in the North, here.
>
> **[1:44](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=104)** So, black isn't really the best for really making heat maps pop, so let's use red, that's one of my favorite colors.
>
> **[1:51](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=111)** So, we're going to use a red color ramp, so we'll pick Reds, and I'll hit OK.
>
> **[1:56](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=116)** And look what happens, the background is obscured again.
>
> **[1:59](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=119)** So, how do we fix it?
>
> **[2:00](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=120)** Easy, we just go back in, go to the color ramp, edit the color ramp, and again, take color one and make it transparent.
>
> **[2:07](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=127)** Now, hit OK.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=129)** And, there we are, we've got a heat map of all the crime incidents of Nanaimo.
>
> **[2:15](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=135)** Okay, so, if we zoom in, we can see that the heat map changes, and we can get real localized heat maps here, so you can see it's almost right downtown, you can see by the ferries, where most of the crimes are.
>
> **[2:25](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=145)** If we zoom out, we see there's a North area here, where there's a bulk of crimes around this area.
>
> **[2:30](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=150)** Right there, so, that's right by the mall, okay, so we've got several high-density areas of crime for the city.
>
> **[2:36](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=156)** Now, it changes as I zoom in and out, it, sort of, locked to how the screen is.
>
> **[2:40](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=160)** And, the reason that is, is in the definitions, I'll go back in here, and you'll see, the radius is 10 millimeters on the screen.
>
> **[2:47](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=167)** So that means, the heat map rendering will change according to what scale I'm in as I zoom in, 10 millimeters on the screen represents a whole different thing.
>
> **[2:55](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=175)** So, what if we want to lock it down to something more realistic, so it stays the same, like, number of feet, or meters?
>
> **[3:03](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=183)** So, the way to do that we have to use map units.
>
> **[3:05](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=185)** And our current map is in, EPSG, 26910, which is UTM zone 10.
>
> **[3:11](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=191)** So we're in meters already, so I'm going to set this to a radius of, say, 200 meters and see what that looks like.
>
> **[3:17](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=197)** Map units, of course, and hit OK.
>
> **[3:20](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=200)** 200 meters on the ground, is pretty tight.
>
> **[3:22](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=202)** It's good for like, zooming right in to downtown, or right down by the ferry, but you know, you don't have a really effective use of 200, so let's go back in and maybe make this, 500 meters on the ground.
>
> **[3:33](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=213)** That's how they clump all the points together, by a radius of 500 meters on the ground.
>
> **[3:38](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=218)** And this could be in feet, if you are using a projection that's using feet, such as State Plane, or something like that.
>
> **[3:44](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=224)** So, let's hit OK, 500 meters.
>
> **[3:46](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=226)** Ah, that's much better.
>
> **[3:47](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=227)** Now, you'll notice that as I zoom in and out, it doesn't change, it stays the same, the 500 meters is shown on the map, regardless of my scale.
>
> **[3:57](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=237)** So, it's locked down, so I have two options, I could lock it down so that it's always 500 meters, or we can go back to the original, where we can go back to regular millimeters, and that was 10, let's go back to 10 millimeters, which was the original.
>
> **[4:10](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=250)** So, we have two ways of doing that.
>
> **[4:12](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=252)** Now in order to share this, you could either take a screen-capture or capture the screen, we could save the project and give this project to someone as long as we gave them the CSV file, we could right-click and export the incidents as a shapefile, and give someone the shapefile and tell them, make a heat map out of it.
>
> **[4:27](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=267)** Or, we could even export this, as a layer, so that someone can, let's go, Export, and they can Save the Layer Definition File, so you still have to give them the CSV file, and that layer definition file, so you don't have to give them the whole project, you can just give them the individual layer, to do that.
>
> **[4:42](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=282)** So, we can have a number of ways of sharing a heat map.
>
> **[4:45](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=285)** But either way, you can always share your map through plotting, through the project, or through the layer definition.
>
> **[4:52](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=292)** So this heat map was dynamically created by using the point layer.
>
> **[4:56](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=296)** So you can do this, any point layer, at any time.
>
> **[4:58](https://www.linkedin.com/learning/learning-qgis-2/create-a-heatmap-from-points?u=76281980&t=298)** That's one of the big pluses with QGIS, is the ability to make heat maps from any point layer inside your QGIS map.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** hit (6), [[Zoom]] (5), data (1)
> **CLI Commands:** make (7)
> **Env Vars:** csv (2), qgis (2), gqis (1), epsg (1), utm (1)
> **UI Navigation:** click on (1), double-click (1), go to (1), right-click (1)
> **Cross-References:** go back to (3)
> **File Paths:** incidents.csv (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Create centroids from polygons
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=0)** - [Instructor] The geometric center of an object is the centroid.
>
> **[0:03](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=3)** Centroid points are useful for labeling features since they already contain the attributes of the parent geometry.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=9)** With centroid points, you can then move them around to make a more effective location for that label.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=14)** Let's add the parcels to our current map.
>
> **[0:16](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=16)** I'll drag and drop the parcel's shape in.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=18)** I'm going to alter the transparency to about 25%.
>
> **[0:26](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=26)** There we are, there's our parcels.
>
> **[0:28](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=28)** And I'm going to add centroids to this.
>
> **[0:30](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=30)** I'm actually going to generate a brand new layer and a brand new file that contain the points that are the centroids of each of these parcels.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=38)** Under Vector, Geometry Tools, we're going to choose Centroids.
>
> **[0:42](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=42)** It already picks parcels and you can see what coordinate system it's in.
>
> **[0:47](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=47)** We're going to change the centroid layer.
>
> **[0:49](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=49)** We're going to save it to file.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=51)** Just put it on our desktop.
>
> **[0:52](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=52)** We'll just call it Parcel Centroids.
>
> **[0:57](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=57)** Like that.
>
> **[0:58](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=58)** It'll create a brand new shape file on the desktop called Parcel Centroids and it'll also add it to the map once it's run.
>
> **[1:05](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=65)** It's going to go through all the parcels and put a dot in the middle of every single parcel as it processes it.
>
> **[1:11](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=71)** Okay, let's close that.
>
> **[1:12](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=72)** And all those green dots represent the centroids.
>
> **[1:16](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=76)** Let's zoom in.
>
> **[1:19](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=79)** We can see inside of every polygon, there's a dot.
>
> **[1:24](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=84)** Now we could use these dots for labeling.
>
> **[1:27](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=87)** Now we can label the parcels themselves but we can also use the centroids for labeling.
>
> **[1:31](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=91)** Let's go into Centroids, go to Symbology.
>
> **[1:36](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=96)** We're going to say no symbols for the dots but then we're going to move over to Labels and add a single label.
>
> **[1:44](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=104)** We're going to choose zoning one as the label.
>
> **[1:48](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=108)** Hit OK.
>
> **[1:49](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=109)** And let's just zoom in and have a look at what zoning one labels look like.
>
> **[1:55](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=115)** There they are.
>
> **[1:56](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=116)** Can see all the zoning.
>
> **[1:58](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=118)** It's a separate layer now.
>
> **[1:59](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=119)** I can probably rename the centroids to a new name.
>
> **[2:04](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=124)** We're going to rename it Zoning Labels.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=129)** Now one thing I want to show, is on this little island here in the middle, Protection Island.
>
> **[2:14](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=134)** We're going to zoom in and view where the labels are.
>
> **[2:21](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=141)** The park, in the background here, Captain Morgan Park is actually PRC1 that's the zoning designation but it's shown right in the middle of this other parcel.
>
> **[2:31](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=151)** The reason that is, is because the geometric center of Captain Morgan Park actually falls inside of that one parcel.
>
> **[2:38](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=158)** In order to fix that, we have to move that label.
>
> **[2:41](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=161)** Let's just make sure the Zoning Labels are highlighted.
>
> **[2:44](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=164)** We're going to toggle editing.
>
> **[2:47](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=167)** We'll pick on that label.
>
> **[2:51](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=171)** There we are.
>
> **[2:52](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=172)** Had to catch the centroid.
>
> **[2:54](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=174)** Then we can move it.
>
> **[3:00](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=180)** There we go.
>
> **[3:01](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=181)** I grabbed this centroid and moved it in the middle of Captain Morgan Park using the vertex editing tool.
>
> **[3:06](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=186)** All I had to do was toggle the editing, pick on the vertex and drag it into the middle of Captain Morgan Park.
>
> **[3:13](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=193)** I'm going to toggle my editing again.
>
> **[3:15](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=195)** Save it.
>
> **[3:17](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=197)** Now the labels located right in the middle of Captain Morgan Park, it's no longer in the middle of that parcel.
>
> **[3:22](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=202)** That's where it should be.
>
> **[3:23](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=203)** Now I have zoning labels based on the data coming from parcels but their independent layer, that I can actually modify and move those labels, that's the fastest way to make labels that are separate from the original.
>
> **[3:35](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=215)** Now if anything changes, you're goin' have to regenerate them and maybe move them around but there are alternatives to that.
>
> **[3:42](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=222)** You could also do something like this.
>
> **[3:43](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=223)** Where you go into your Properties and we can do Relations.
>
> **[3:48](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=228)** And what we can do is connect the centroids or zoning labels to the parcels and actually derive through the link.
>
> **[3:58](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=238)** Basically, we could use say the GID between both centroid and the parcels because both the zoning labels and the parcels have the same primary keys cause they're identical.
>
> **[4:09](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=249)** What we could do is create a join between them and that way, we can update the labels based on the core parcels and not from the labels themselves.
>
> **[4:19](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=259)** That way we can actually keep all our data up to date.
>
> **[4:22](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=262)** That's an alternative or you could just recreate the centroids whenever you need to.
>
> **[4:27](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=267)** The options are endless inside of QGIS.
>
> **[4:30](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=270)** For some GISes, the centroid is required to create topology.
>
> **[4:33](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=273)** Now topology is another name for a relationship between objects on your map, but in our case we didn't use the centroid for any kind of topology.
>
> **[4:42](https://www.linkedin.com/learning/learning-qgis-2/create-centroids-from-polygons?u=76281980&t=282)** Our goal here, was just to have effective labeling for our polygons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (3), [[Vertex]] (2), data (2), hit (1)
> **UI Navigation:** toggle (3), drag and drop (1), go to (1)
> **CLI Commands:** make (3)
> **Env Vars:** prc1 (1), gid (1), qgis (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 11. Using Plugins

[↑ Back to Table of Contents](#table-of-contents)

#### Adding and using Street View plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=0)** Plugins for QGIS are written in Python.
>
> **[0:03](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=3)** Python is an advanced programming language that is built into QGIS and is used to customize and develop QGIS plugins.
>
> **[0:10](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=10)** The Street View plugin enables you click anywhere in the map, and automatically open a browser window to see that Google Street View at that location you just clicked.
>
> **[0:18](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=18)** Let's add that plugin now.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=20)** Under Plugins, we'll pick "Manage and Install Plugins" and we'll get a list of all the available plugins that we have.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=27)** If we click on "Not Installed," we can see which ones aren't installed, or in the ones that are.
>
> **[0:32](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=32)** So you can see, there's only a small subset of all the plugins that are available that are currently installed right now.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=38)** So let's go back to "All," I'll type "street view".
>
> **[0:43](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=43)** And you'll see there are two Street View plugins.
>
> **[0:46](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=46)** There's a "go2streetview" and "Street View".
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=50)** We're going to install just the Street View one.
>
> **[0:53](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=53)** The reason we're going to use that one is it doesn't require the Google API key.
>
> **[0:58](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=58)** When you have very tight integration between your product and Google Street View, Google requires a Google API key so that you can integrate that better.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=66)** But the Street View plugin doesn't require that.
>
> **[1:09](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=69)** So let's install that.
>
> **[1:11](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=71)** Close.
>
> **[1:12](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=72)** If we go back to "Plugins" you'll see there's a new "StreetView" menu item.
>
> **[1:15](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=75)** As well, is on your toolbar, you'll see a new StreetView icon.
>
> **[1:20](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=80)** So we're going to click that, and pick anywhere in your map.
>
> **[1:23](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=83)** I'll pick a highway.
>
> **[1:24](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=84)** And sure enough, Google Street View opens.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=88)** Let's go back.
>
> **[1:29](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=89)** Maybe I'll zoom into where the ferry terminal is.
>
> **[1:33](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=93)** I'm going to pick on the Street View guy again, and pick, and I'll zoom in to the coast.
>
> **[1:45](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=105)** Going back to QGIS.
>
> **[1:46](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=106)** So if I want to uninstall this plugin, I can go to "Plugins", "Manage and Install", Pick on "Street View", and click "Uninstall".
>
> **[1:57](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=117)** And the icon will disappear from my toolbars and from my menu if I close this.
>
> **[2:02](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=122)** Look under Plugins, it's gone.
>
> **[2:05](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=125)** So, Google Street View is a licensed product from Google.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=128)** If you want to find more plugins for QGIS, or make your own that integrate with the Google Street View, you're definitely going to require a Google Maps API key.
>
> **[2:17](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-street-view-plugin?u=76281980&t=137)** But this simple Google plugin was great because we didn't need a Google API key, and it showed us how effective some of these Python plugins can be in QGIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (12), api (4), [[Python (Programming Language)|Python]] (3), product (2), [[Zoom]] (2)
> **Env Vars:** qgis (6), api (4)
> **CLI Commands:** python (3), find (1), make (1)
> **Prerequisites:** install (4)
> **Cross-References:** go back to (2)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **Tools:** terminal (1)

#### Adding and using qgis2web plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=0)** - [Instructor] Two of the most popular open source JAVA script mapping libraries are Open Layers and Leaflet JS.
>
> **[0:06](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=6)** Using the qgis2web plugin, we can publish our map to a webpage and leverage either one of these libraries.
>
> **[0:13](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=13)** First, let's make a map.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=14)** I'm just going to drag and drop the parcels into my current map and I'm going to change the colors of the parcel layer.
>
> **[0:22](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=22)** I'll just make it a slightly lighter brown.
>
> **[0:25](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=25)** There we go.
>
> **[0:27](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=27)** That's a lot better, okay.
>
> **[0:29](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=29)** So we have our parcels and we have our open street map in the background.
>
> **[0:33](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=33)** So let's install the plugin that is qgis2web.
>
> **[0:36](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=36)** So in our search, I'll type qgis2web.
>
> **[0:40](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=40)** There it is.
>
> **[0:41](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=41)** So I'll pick on qgis2web.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=44)** And click install plugin.
>
> **[0:47](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=47)** Once it's installed, we can close the plugins dialogue box.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=51)** And you'll see under plugins, there's no new items.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=56)** However, in our toolbar, we have a button now called Create Web Map.
>
> **[1:01](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=61)** So if we click that button, we have a preview of our map.
>
> **[1:05](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=65)** Let's make this dialogue box a little bigger so we can see.
>
> **[1:10](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=70)** There we go.
>
> **[1:11](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=71)** We can see the various data, layers, and groups.
>
> **[1:14](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=74)** We have two layers: PARCELS and OpenStreetMap.
>
> **[1:18](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=78)** In terms of PARCELS, it says, is it visible?
>
> **[1:21](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=81)** Are there labels for all this data?
>
> **[1:24](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=84)** So we could actually say, put a label in there or not, and so on.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=88)** So I'm just going to leave the defaults for now.
>
> **[1:30](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=90)** Also, you'll notice at the bottom of the screen we have open layers or leaflet.
>
> **[1:34](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=94)** Let's just hit update preview to see what this map would look like in open layers.
>
> **[1:39](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=99)** The initial preview may take a while because it's basically taking the vector data of all these parcels and turning it into JSON, or GeoJSON.
>
> **[1:47](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=107)** Because when it publishes it to the web it's going to put a static JSON file on the web.
>
> **[1:52](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=112)** The resulting files coming from this plugin are basically HTML files and GeoJSON.
>
> **[1:59](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=119)** We can bundle those up and put them on any web server we want.
>
> **[2:02](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=122)** But basically it just saves it locally on our drive and then we can move it when it's all complete.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=128)** So now we can see what the map will look like in open layers.
>
> **[2:11](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=131)** So if I click on leaflet, and click update preview, now we can see what it would look like inside of leaflet.
>
> **[2:20](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=140)** Okay, we even have tool tips on each of the parcels.
>
> **[2:23](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=143)** So let's go to Appearance.
>
> **[2:25](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=145)** We could add a address search tool, we could add a layers list, maybe collapsed.
>
> **[2:30](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=150)** We can put a layer search and so on.
>
> **[2:32](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=152)** And we can alter the appearance of this map.
>
> **[2:35](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=155)** During the export, it'll say, export to folder.
>
> **[2:37](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=157)** And I'll just use the default.
>
> **[2:38](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=158)** You can put it anywhere you want, maybe on your desktop.
>
> **[2:41](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=161)** We're going to maintain the precision.
>
> **[2:43](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=163)** We can make it even smaller by minifying the GeoJSON.
>
> **[2:45](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=165)** So basically when it takes these vector layers, depends what they are originally, they could be .shp files or Oracle, but it'll take all that vectoring and minify it.
>
> **[2:56](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=176)** Minifying means squishes and gets rid of all the white space out of the GeoJSON file, making it quite small.
>
> **[3:01](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=181)** And then other setting and basically do a preview on start-up.
>
> **[3:05](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=185)** So let's just go ahead and export this.
>
> **[3:07](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=187)** So let's go back here and click export.
>
> **[3:09](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=189)** And what it will do is create the leaflet map, export all the libraries, put the CSS in there, export the parcels to JSON.
>
> **[3:17](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=197)** If we had other layers, it'll export those parcels or those layers, to JSON as well, like the parcels.
>
> **[3:25](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=205)** Once it's done processing, it'll open up the index HTML page and attempt directory.
>
> **[3:30](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=210)** But you can put this anywhere you want.
>
> **[3:32](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=212)** Once you've published this, you could go to that directory and take the entire folder and publish it to the web.
>
> **[3:37](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=217)** So now we are inside of a browser with all the data available to us.
>
> **[3:42](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=222)** We can zoom in and out.
>
> **[3:44](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=224)** Pick on a parcel.
>
> **[3:47](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=227)** And we have the data at our fingertips.
>
> **[3:52](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=232)** And this data can be published at any time.
>
> **[3:54](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=234)** Now this is by far one of my favorite tools for quickly publishing your map to the web.
>
> **[3:59](https://www.linkedin.com/learning/learning-qgis-2/adding-and-using-qgis2web-plugin?u=76281980&t=239)** Note, if your data changes in any way, you'll have to republish your data using the qgis2web tool in order to see all the data because this is just a snapshot of your data today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), web (6), [[JSON]] (4), [[Search]] (3), [[HTML]] (2)
> **Env Vars:** json (4), parcels (2), html (2), java (1), css (1)
> **CLI Commands:** make (4)
> **UI Navigation:** drag and drop (1), click on (1), go to (1)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1)


### 12. Python in QGIS

[↑ Back to Table of Contents](#table-of-contents)

#### Using the Python Console
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=0)** - [Instructor] Python is a powerful way to access the QGIS API.
>
> **[0:04](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=4)** Automating tasks, such as adding and removing layers, filtering data, or even exporting information, can be done using Python with QGIS.
>
> **[0:12](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=12)** Let's get our map set up first.
>
> **[0:14](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=14)** I'm going to add the parcels to my current map, and then I'm going to open up the Python console, There's two ways to do that.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=20)** You can go under plugins, and pick the Python console, or alternatively, there's a Python console toggle button in the toolbar.
>
> **[0:29](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=29)** The Python console basically gives you two areas, an area where you can type in commands and the area that shows what you've been entering.
>
> **[0:37](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=37)** We can type any command we want here, so what we can do with these commands, for example, say I wanted to get the active layer.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=44)** So, first of all, I'm going to highlight parcels, and say the layer is in my interface, my active layer.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=56)** As you can see, as I was typing, it was giving me auto complete.
>
> **[1:00](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=60)** So if I wanted to see more things, so if I type layer.name, it'll give me the current layer's name.
>
> **[1:09](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=69)** As you can see with my auto complete, you can see what sort of things I can do.
>
> **[1:13](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=73)** Let's do this, iface, which is interface, show attribute table, so I can pick that, you have to finish the command, but what attribute table we're going to show of the current layer, which are the parcels, so if I hit enter now, the attribute table appears.
>
> **[1:35](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=95)** It's quite powerful.
>
> **[1:36](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=96)** So let's do something else with Python.
>
> **[1:38](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=98)** So if I want to loop over the fields in the parcels, I can go like this, I can go for field in layer.fields, so what I'm doing is I'm going to loop over all the field names and then I put a colon at the end and hit enter, it's waiting for me to finish the command.
>
> **[1:57](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=117)** I'm going to go tab and then I'm going to say, print the field name.
>
> **[2:06](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=126)** And I hit enter, and there's all the field names.
>
> **[2:09](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=129)** So within the Python console, I can type and test and look at Python.
>
> **[2:14](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=134)** As I work through it, I can understand what sort of tools work, it will give me feedback right away as I write code, I can just enter it in, it's not a permanent thing, it's just a command line for testing and learning Python, it's great for that.
>
> **[2:28](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=148)** There's other commands up here, where you could clear the console, you can run the command, you can show the editor.
>
> **[2:34](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=154)** So there's actually an editor where you can open Python .py files and edit them, and you can close that.
>
> **[2:40](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=160)** We were just using the command line directly, and there's some other settings we can set, and even some help for the console.
>
> **[2:46](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=166)** Now other help you'd want, is if you want to look at the API you could go to the QGIS API documentation at [qgis.org/api](https://qgis.org/api), this will give you all the different API's that we're using, so you're wondering where I got all of these commands from, they're from here, they came from the [qgis.org](https://qgis.org) site.
>
> **[3:04](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=184)** So go back to QGIS and we can actually close the Python console.
>
> **[3:08](https://www.linkedin.com/learning/learning-qgis-2/using-the-python-console?u=76281980&t=188)** The Python console is the best way to test code, learn how to use Python, and to view what the underlying data is within QGIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (14), api (5), hit (3), data (2)
> **CLI Commands:** python (14)
> **Env Vars:** qgis (5), api (4)
> **UI Navigation:** toggle (1), in the toolbar (1), go to (1)
> **URLs:** [qgis.org](https://qgis.org) (2)
> **Tools:** command line (2)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** go back to (1)

#### Create a Python script
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=0)** Scripting with QGIS is a great way to perform repeatable tasks and steps without having to manually perform them over and over again.
>
> **[0:08](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=8)** Using Python, we can import and export, perform an analysis, even create reports.
>
> **[0:13](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=13)** We will use Python to export a point layer into a text file, or CSV, that we can open in applications such as Excel.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=20)** Let's try that now.
>
> **[0:21](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=21)** First, I'm going to start a new project and I'm going to bring in the intersections shape file.
>
> **[0:26](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=26)** They're basically points of all the intersections in my city.
>
> **[0:29](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=29)** Once I have that, I'm going to write a little bit of Python inside the Python console.
>
> **[0:34](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=34)** The first thing I'm going to do is bring in the layer list.
>
> **[0:38](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=38)** So I'm going to have the layer list equals current project, the instance, and I'm going to grab the maps layers by name.
>
> **[0:44](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=44)** So it'll grab all the layers that are called intersections.
>
> **[0:47](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=47)** In this case, there's only one, so I'll do that.
>
> **[0:50](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=50)** Now I have the layer list.
>
> **[0:51](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=51)** Now of that, I could have multiple.
>
> **[0:54](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=54)** So what I'm going to do is get the first one.
>
> **[0:56](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=56)** So, in the layer list, I'm going to get the first one, which is zero, so my layer intersections will be called "layer".
>
> **[1:03](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=63)** The next thing I'm going to do, I need to export that layer out to a text file.
>
> **[1:06](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=66)** So the beginning of this will be a QGIS vector file-writer.
>
> **[1:12](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=72)** And I'm going to write it out as a vector format.
>
> **[1:15](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=75)** So I'm going to grab that layer, that intersections layer, and I'm going to write it out to my user profile, which will be my C-users, Gordon Luckett, I'm going to take that and concatenate it with a well-known text.
>
> **[1:28](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=88)** So, what I've done here is I've written a vector format, based on that layer, I've concatenated my user profile to my desktop, and wrote a file called "wkt.csv".
>
> **[1:40](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=100)** The format's UTF-8, I'm using the layer's coordinate system, which is UTM, it's going to be a CSV format, and I'm going to dump it all out as geometry, as X-Y-Z.
>
> **[1:52](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=112)** And I've done it manually.
>
> **[1:54](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=114)** So if I were to go to my desktop, I can see there's the CSV file.
>
> **[1:59](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=119)** And if I open that up in Excel... Let's close that.
>
> **[2:03](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=123)** Here we are.
>
> **[2:04](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=124)** You can see I've dumped out X, Y, and Z, and there's all zeroes.
>
> **[2:08](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=128)** And then we've got the columns from the shape file that we originally had.
>
> **[2:12](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=132)** So, basically, what we've done is we've converted a shape file into a text file using Python.
>
> **[2:18](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=138)** So I'm going to close that again, and I'm actually going to delete it.
>
> **[2:23](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=143)** Now, I've done all this at the console level.
>
> **[2:26](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=146)** So, basically, I forced it in a command.
>
> **[2:29](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=149)** But what if I wanted to run it again?
>
> **[2:30](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=150)** I'd have to do arrow-up and find that command again like I did earlier.
>
> **[2:34](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=154)** So what I'm going to do is I'm going to copy and paste this code into the editor.
>
> **[2:39](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=159)** So the first thing I'm going to do is I'm going to scroll over, and get the very first item, which was the layer list.
>
> **[2:45](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=165)** So I'm going to highlight what I just typed in a minute ago, and put it at the top of this file.
>
> **[2:51](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=171)** So we have the layer list, get the project, get the current instance, and get all the maps that are called intersections.
>
> **[2:59](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=179)** Done.
>
> **[3:00](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=180)** The second item is I need to get the individual layer from that list, and there's only one, so I'm going to say layer zero.
>
> **[3:08](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=188)** In that layer list, it's the first one, which is zero.
>
> **[3:11](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=191)** And finally, I'm going to get the vector writer, and write all this code out to the user profile, like that, and I'll add the rest to the bottom, so we can see this on two lines.
>
> **[3:27](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=207)** Here we go.
>
> **[3:28](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=208)** So what we have, I'll just scroll this over.
>
> **[3:30](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=210)** We have a file, it says layerList equals that, layer is layerList[0], and then we're using the QGIS vector-writer, we're going to write it as a vector from that layer, we're going to concatenate my user profile to my desktop, so on my desktop you'll have "well known text" dot CSV in UTF-8 formatting, using the current layer's coordinate system, it's a CSV file, and we're going to dump out the geometry as X, Y, Z.
>
> **[3:58](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=238)** Now, before I run this, I'm actually going to save it.
>
> **[4:01](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=241)** And you can just save this to your desktop.
>
> **[4:04](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=244)** And we'll call it "INTERSECTION_EXPORT.py" You'll notice most Python files will have the extension ".py" So we'll have "INTERSECTION_EXPORT.py".
>
> **[4:19](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=259)** Let's save it.
>
> **[4:20](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=260)** Now we can run it.
>
> **[4:22](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=262)** So if we run it again, it'll work.
>
> **[4:24](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=264)** We go back to our desktop.
>
> **[4:26](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=266)** You'll see, there's the well known text is back again.
>
> **[4:29](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=269)** And I can actually load and run this PY whenever I want to inside the console.
>
> **[4:35](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=275)** Inside this editor box I can load that file at any point and save it and run it over and over and I can export that whenever I'd like to.
>
> **[4:43](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=283)** So, using Python, I have a dot PY file that I can either load into my project when I want to, or run it to export these as a text file whenever I want to.
>
> **[4:53](https://www.linkedin.com/learning/learning-qgis-2/create-a-python-script?u=76281980&t=293)** Creating a library of these Python scripts for anyone at your organization to use will enable business and GIS logic to be documented and easily accessed within QGIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (8), [[Microsoft Excel|Excel]] (2), [[Scripting]] (1), next (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** csv (5), qgis (4), utf (2), intersection_export (2), utm (1)
> **CLI Commands:** python (8), find (1)
> **File Paths:** intersection_export.py (2), wkt.csv (1)
> **Code Identifiers:** layerlist (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-qgis-2/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-qgis-2/next-steps?u=76281980&t=0)** - [Gordon] Thank you for taking Learning QGIS.
>
> **[0:02](https://www.linkedin.com/learning/learning-qgis-2/next-steps?u=76281980&t=2)** We touched in a lot of GIS concepts, so why not search the LinkedIn Learning site for more courses on QGIS.
>
> **[0:09](https://www.linkedin.com/learning/learning-qgis-2/next-steps?u=76281980&t=9)** Also, if you're interested in learning more about the API for Python with QGIS, why not go to [qgis.org/api](https://qgis.org/api) for more information.
>
> **[0:20](https://www.linkedin.com/learning/learning-qgis-2/next-steps?u=76281980&t=20)** I hope you enjoyed this course as much as I did teaching it.
>
> **[0:23](https://www.linkedin.com/learning/learning-qgis-2/next-steps?u=76281980&t=23)** Stay tuned for more courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** api (2), gis (1), [[Search]] (1), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** qgis (3), gis (1), api (1)
> **CLI Commands:** python (1)
> **URLs:** [qgis.org](https://qgis.org) (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [gordon] (1)


## Instructor

- [[Gordon Luckett]]

## Resources

- Exercise files available

## Skills Covered

- Quantum GIS

## Path Context

### In [[Advance Your Skills in GIS]]
← [[ArcGIS Pro Essential Training]] | **3 of 9** | [[InfraWorks and ArcGIS- AEC Collaboration]] →

## Appears In

- [[Advance Your Skills in GIS]]

## Related Courses

_Courses sharing skills:_

- [[QGIS and Python for AEC]] — Quantum GIS

---

[↑ Back to top](#)