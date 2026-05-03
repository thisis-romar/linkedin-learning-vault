---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-angular-and-django-apps
url: "https://www.linkedin.com/learning/building-angular-and-django-apps"
duration_minutes: 106
duration: 1h 46m
level: Intermediate
updated: 12/3/2019
learners: 5617
skills:
  - Django
  - Web Application Development
  - Angular
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGVtfwcWDH7KQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1575394470621?e=2147483647&amp;v=beta&amp;t=adn4n41zaetFct8IFAhdjepVQVAWVULVGNplj-ALfAE"
linkedin_topic: Web Development
learning_paths:
  - '[[Advance Your Skills as a Django Developer]]'
prev_courses:
  - '[[Building React And Django Apps]]'
next_courses:
  - '[[Building RESTful Web APIs with Django]]'
path_nav: '[{"path":"Advance Your Skills as a Django Developer","position":2,"total":6,"prev":"Building React And Django Apps","next":"Building RESTful Web APIs with Django"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/django
  - skill/web-application-development
  - skill/angular
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/Building%20Angular%20and%20Django%20Apps.md)

![Building Angular and Django Apps](https://media.licdn.com/dms/image/v2/C560DAQGVtfwcWDH7KQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1575394470621?e=2147483647&amp;v=beta&amp;t=adn4n41zaetFct8IFAhdjepVQVAWVULVGNplj-ALfAE)

# Building Angular and Django Apps

> Put your Angular and Django REST knowledge to the test. In this course, join Rudolf Olah as he delves into the intricacies of pairing the two frameworks to build dynamic web applications. Throughout the course, Rudolf demonstrates how to wire together the two frameworks, add pagination, secure, and test your applications. Discover how to prepare your Angular code for production, communicate betwee

> [LinkedIn Learning](https://www.linkedin.com/learning/building-angular-and-django-apps) | 1h 46m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Create a full-stack Angular app with the Django REST framework](#create-a-full-stack-angular-app-with-the-django-rest-framework)
  - [What you should know](#what-you-should-know)
  - [Demo project overview](#demo-project-overview)
- [**1. Django and Angular Preparation**](#1-django-and-angular-preparation) (3 videos)
  - [Running the Angular and Django development servers](#running-the-angular-and-django-development-servers)
  - [Compiling Angular Code](#compiling-angular-code)
  - [Serving Angular Code Through Django static files](#serving-angular-code-through-django-static-files)
- [**2. Forms with Angular and Django**](#2-forms-with-angular-and-django) (5 videos)
  - [Creating models with the Django REST framework](#creating-models-with-the-django-rest-framework)
  - [Creating a ViewSet with Django](#creating-a-viewset-with-django)
  - [Creating a REST API service with Angular](#creating-a-rest-api-service-with-angular)
  - [Creating a basic form as an Angular component](#creating-a-basic-form-as-an-angular-component)
  - [Connecting an Angular component to a service](#connecting-an-angular-component-to-a-service)
- [**3. Front-End Design and Layout with Angular**](#3-front-end-design-and-layout-with-angular) (5 videos)
  - [Form layout with Angular Material](#form-layout-with-angular-material)
  - [Date/time selection with a Calendar in Angular](#datetime-selection-with-a-calendar-in-angular)
  - [Displaying a data table with Angular Material table](#displaying-a-data-table-with-angular-material-table)
  - [Displaying a pop-up dialog box with Angular](#displaying-a-pop-up-dialog-box-with-angular)
  - [Displaying more information with Angular](#displaying-more-information-with-angular)
- [**4. Authentication with Django and Angular**](#4-authentication-with-django-and-angular) (6 videos)
  - [Setting up Authentication with Django OAuth Toolkit](#setting-up-authentication-with-django-oauth-toolkit)
  - [Using scopes with Django OAuth Toolkit for permissions](#using-scopes-with-django-oauth-toolkit-for-permissions)
  - [Registering a new OAuth application with Django OAuth Toolkit](#registering-a-new-oauth-application-with-django-oauth-toolkit)
  - [Logging in and authentication with Angular and HttpClient](#logging-in-and-authentication-with-angular-and-httpclient)
  - [Using OAuth headers with Angular and HttpClient](#using-oauth-headers-with-angular-and-httpclient)
  - [Authentication storage with Angular](#authentication-storage-with-angular)
- [**5. Filtering and Pagination with Django and Angular**](#5-filtering-and-pagination-with-django-and-angular) (8 videos)
  - [Checking permissions with Django](#checking-permissions-with-django)
  - [Deleting an item using Angular and Django](#deleting-an-item-using-angular-and-django)
  - [Partially updating an item using Angular](#partially-updating-an-item-using-angular)
  - [Pagination with Django](#pagination-with-django)
  - [Pagination with Angular](#pagination-with-angular)
  - [Filtering with Django](#filtering-with-django)
  - [Filtering with Angular](#filtering-with-angular)
  - [Animations in Angular](#animations-in-angular)
- [**6. Testing Angular**](#6-testing-angular) (5 videos)
  - [Unit testing a component](#unit-testing-a-component)
  - [Unit testing a service](#unit-testing-a-service)
  - [Unit testing a controller](#unit-testing-a-controller)
  - [End-to-end testing the form submission process](#end-to-end-testing-the-form-submission-process)
  - [End-to-end testing the filtered data table](#end-to-end-testing-the-filtered-data-table)
- [**7. Testing Django**](#7-testing-django) (3 videos)
  - [Unit testing authentication](#unit-testing-authentication)
  - [Unit testing permission checks](#unit-testing-permission-checks)
  - [Unit testing validation for the REST API](#unit-testing-validation-for-the-rest-api)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a full-stack Angular app with the Django REST framework](https://www.linkedin.com/learning/building-angular-and-django-apps/create-a-full-stack-angular-app-with-the-django-rest-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/create-a-full-stack-angular-app-with-the-django-rest-framework?u=76281980&t=0)** - [Instructor] Learning [[Angular]] is a rewarding experience and gives you the skills to become a full stacked developer. By working with [[Representational State Transfer (REST)|rest]] APIs through [[Django]] and [[Python (Programming Language)|Python]], you can build fully-featured front-end interfaces with Angular. You'll use Angular's built-in HTTP client to communicate between the front end and the back end server. Angular Material allows you to display data in tables, show pop ups, and use a grid layout to make the front end easy to use and awesome. Angular Animations are also covered to give some life to your front end interface. Then, we'll make our app production ready with Oauth authentication, unit tests, and end-to-end tests. Hi, I'm Rudolf. I've been optimizing developer feedback loops for the past 10 years. Join me in my [[LinkedIn]] Learning course to create a full stack app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5), [[Representational State Transfer (REST)|Rest]] (1), [[Django]] (1), [[Python (Programming Language)|Python]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** http (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/building-angular-and-django-apps/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course you will need to know some [[Python (Programming Language)|Python]], you can check out the book "Learn Python the Hard Way" or the [[LinkedIn]] Learning Course Learning Python Two. There's also the LinkedIn Learning Course for learning [[Django]]. And [[Building RESTful Web APIs with Django]]. And you will also need to know some [[JavaScript]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[LinkedIn]] (2), [[Django]] (2), [[JavaScript]] (1)
> **CLI Commands:** python (3)
> **Speakers:** - [instructor] (1)

#### [Demo project overview](https://www.linkedin.com/learning/building-angular-and-django-apps/demo-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/demo-project-overview?u=76281980&t=0)** - [Instructor] We have already installed some libraries for you to use with [[Django]]. Django the web framework of course, and Django [[Representational State Transfer (REST)|REST]] framework for creating REST APIs. And we've also installed Django-filter for filtering querysets and models and the Django OAuth Toolkit for OAuth2 authentication. On the front-end we have installed the following modules, [[Angular]], Angular Router and Angular Material for Material Design components, and Protractor for [[End-to-end Testing]] of Angular apps. We have already built some parts of the project for you as well. We have already built a Django model for packages and a few components in Angular for displaying those packages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (6), [[Angular]] (5), [[Representational State Transfer (REST)|Rest]] (2), [[End-to-end Testing]] (1)
> **Env Vars:** rest (2)
> **Speakers:** - [instructor] (1)


### 1. Django and Angular Preparation

[↑ Back to Table of Contents](#table-of-contents)

#### [Running the Angular and Django development servers](https://www.linkedin.com/learning/building-angular-and-django-apps/running-the-angular-and-django-development-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/running-the-angular-and-django-development-servers?u=76281980&t=0)** - [Instructor] While we are developing our [[Django]] [[Representational State Transfer (REST)|rest]] API backend and [[Angular]] front end, we will need to run the development [[Web Servers]] for each of them. On the back end we will need to run the Django command which is manage.py runserver. And on the angular front end we're going to need to run ng serve which will launch the front end server and will automatically watch files and recompile and reload the Angular web app. To view the Django admin and any Rest API endpoints, we can navigate to localhost on port 8000.
>
> **[0:42](https://www.linkedin.com/learning/building-angular-and-django-apps/running-the-angular-and-django-development-servers?u=76281980&t=42)** To view the Angular front end, we can go to localhost on port 4200.
>
> **[0:53](https://www.linkedin.com/learning/building-angular-and-django-apps/running-the-angular-and-django-development-servers?u=76281980&t=53)** The Angular development server is configured in the proxy conf [[JSON]] file to proxy any requests made to /api and /oauth directly to the Django web server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5), [[Django]] (4), [[Representational State Transfer (REST)|Rest]] (2), [[Web Servers]] (1), [[JSON]] (1)
> **Env Vars:** api (2), json (1)
> **Ports:** port 8000 (1), port 4200 (1)
> **UI Navigation:** navigate to (1), go to (1)
> **File Paths:** manage.py (1)
> **Speakers:** - [instructor] (1)

#### [Compiling Angular Code](https://www.linkedin.com/learning/building-angular-and-django-apps/compiling-angular-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/compiling-angular-code?u=76281980&t=0)** - [Announcer] We can use the [[Angular]] command-line interface to compile the code for production. All we need to do is run this command. The dash dash prod is important because it enables production mode in Angular, and turns on compiler features that will lower file sizes, remove some debugging utilities and improve performance. In the angular.[[JSON]] configuration file, you can see certain options are turned on for production compilation, such as sourceMap is false, extractCss is true, aot, Ahead-of-Time is true, and so on. Let's see what files were produced as part of the build.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[JSON]] (1)
> **Code Identifiers:** sourcemap (1), extractcss (1)
> **File Paths:** angular.json (1)
> **Analogies:** such as (1)
> **Speakers:** - [announcer] (1)

#### [Serving Angular Code Through Django static files](https://www.linkedin.com/learning/building-angular-and-django-apps/serving-angular-code-through-django-static-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/serving-angular-code-through-django-static-files?u=76281980&t=0)** - [Instructor] Now that we have the compiled version of our [[Angular]] app, we need to add a setting to the [[Django]] backend called front end root which will point to the path where it can be found. In the URLs configuration of Django, we add a new regular expression URL. It will point all URLs to the front end directory that we defined in the settings file. Now we run the Django web server, and let's go to local host at port 8000 index.[[HTML]] and we can see that the compiled angular app has loaded up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (3), [[Angular]] (2), [[HTML]] (1)
> **File Paths:** index.html (1)
> **Ports:** port 8000 (1)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 2. Forms with Angular and Django

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating models with the Django REST framework](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-models-with-the-django-rest-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-models-with-the-django-rest-framework?u=76281980&t=0)** - [Instructor] We need to create an API view for creating new tour packages. The package model already exists. Tour packages contain an ID, a category, a name, promotional text, a price, a rating, such as easy, medium, or difficult, a tour length and when the tour starts. Before we create the API view, we need to create a serializer for the package model. We create a new sub-class of the model serializer. And we create a meta-class, where the model is set to package. And we will serialize all fields. Now in the views we can create a package API view. By using the generic create API view. The queryset will point to all package objects. And the serializer class will be our package serializer. Then in the URL configuration we need to add a URL matcher that will point to this package create view. An API view on packages will point to the package create view.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), url (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating a ViewSet with Django](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-viewset-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-viewset-with-django?u=76281980&t=0)** - [[Django]] [[Representational State Transfer (REST)|REST]] Framework provides an easy way to grade common operations for models and objects in a REST API. Typically, for any object exposed by the API, we will want to be able to create, update, delete, retrieve them, or retrieve a list of them. ViewSets provide that functionality. It's very straightforward to create, and we will be replacing our existing PackageCreateView with a new viewset. First we import viewsets from Django REST Framework, and then we replace PackageCreateView with PackageViewSet, which is a subclass. The queryset remains the same. It points to all packages. And the serializer class is the PackageSerializer. Now in the URLs configuration, we have to remove the PackageCreateView, and we're going to be altering the URL so that multiple models can be exposed by this API. We're going to include URLs from the router. And we're going to register the PackageViewSet.
>
> **[1:24](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-viewset-with-django?u=76281980&t=84)** Then we can run the Django server. And then view the API, and we can see a nice list of packages. We can retrieve one of them, and we have a form to update it and to create it. And we also have the ability through Django REST Framework viewsets to delete this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (4), [[Representational State Transfer (REST)|Rest]] (4)
> **Env Vars:** rest (4), api (4), url (1)
> **Definitions:** is a  (1)
> **Speakers:** - django (1)

#### [Creating a REST API service with Angular](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-rest-api-service-with-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-rest-api-service-with-angular?u=76281980&t=0)** - [Instructor] With the [[Django]] server running with the back end [[Representational State Transfer (REST)|rest]] API code for creating a package, we can implement the http call we need in the front end [[Angular]] app. We're going to be creating the rest API service class, which is injectable, which means it can be injected anywhere in the Angular app as a dependency. In the constructor we declare the dependency of the rest API service as the http client and we are going to have some common options for making any http call. Right now we just return an empty object, but later on we'll be filling this with an O off token. And now we can implement the create tour method of rest API service. It accepts one parameter which is the tour package data. And then we're going to extract a few of the fields because we have to transform them before we send them to the back end server. We're going to return the promise that is returned from calling http post and the URL is our api v1 packages URL.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-rest-api-service-with-angular?u=76281980&t=95)** And the post data that we're sending over will be the start date of the tour, however we need to transform it to match the Django rest framework format for dates.
>
> **[1:52](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-rest-api-service-with-angular?u=76281980&t=112)** And we also need to transform the tour length. Instead of camel case, Django rest framework will accept an underscored field name.
>
> **[2:07](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-rest-api-service-with-angular?u=76281980&t=127)** And the rest of the data is the same. We also need to pass in our common options to the http call and that's all there is to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (7), [[Django]] (3), [[Angular]] (2)
> **Env Vars:** api (4), url (2)
> **Speakers:** - [instructor] (1)

#### [Creating a basic form as an Angular component](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-basic-form-as-an-angular-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-basic-form-as-an-angular-component?u=76281980&t=0)** - [Instructor] Let's create a form component so that users can create new tour packages. We import the form control and the form group from [[Angular]] [[Forms]], which provides a way to construct reactive forms that use two-way data bind. In our create tour form component, we add two instance variables, package form, which is a form group, and one input to the component, which is id, the id of an existing package. In the constructor, we're going to be depending on the tour package controller. And in the lifecycle on Angular component, this constructor is called once, to inject this dependency. In contrast, the ngOnInit method is called every time the component is initialized and injected into the DOM. So we're going to set up the default values for the package form, by creating a new form group, we set up the id, and the default is zero to indicate it's a new package. And then, we're going to set up the other fields, the category,
>
> **[1:34](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-basic-form-as-an-angular-component?u=76281980&t=94)** which has a default value of tour, the name, it's tour package, the promo, a tour length, the price, the rating, and start. This is a [[Java]] script data object. We also have a place holder save method that will be called whenever we click the save button. Now let's update the [[HTML]] template for the create tour form. We're going to create the form and then bind the form group to the package form. Then we create our first field using Angular material form fields. It uses an Angular material label and our input will be a text with the form control name set to name, and we are using the Angular material input style as well. And again, we're going to do this for the other fields. We have category,
>
> **[3:14](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-basic-form-as-an-angular-component?u=76281980&t=194)** we have the length of the tour, we have the price. There's also the field where a promotional description can be entered. And the tour starts on a particular date. The next field after this will be a radio group. We start with the label, which is challenge rating, and then we use Angular material radio group here. The value is bound to the package form controls rating value. And then we create our radio buttons. Again using the material input style, value is easy, and we create two more of these radio buttons for medium difficulty and hard difficulty. After this, we can add the cancel button, and the save button. And we bind the save button to our place holder save method and the label for this button will change depending on
>
> **[4:53](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-basic-form-as-an-angular-component?u=76281980&t=293)** whether the package form has an id set. Below, we also are displaying a summary preview and a full preview of the tour package, so that whoever is creating this tour package can see how it will look like to potential customers. We just need to bind the tour package values to the raw values from the form. We're doing the same as well for the other component here. And now we're ready to style this component. We can start by setting up the layout with flex, and the direction is row, and it will wrap. And the form will have a flex basis of 70%. The preview will be 30%, and we're going to add some padding around the labels. Now let's launch our dev server and do the same for Angular. Now we go to the browser, and we go to the create page, and we can see that the default values are there, and that we have a 70% to 30% flex layout arrangement
>
> **[6:31](https://www.linkedin.com/learning/building-angular-and-django-apps/creating-a-basic-form-as-an-angular-component?u=76281980&t=391)** of the form and the preview, and we have some styling as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[Forms]] (2), [[Java]] (1), [[HTML]] (1)
> **Definitions:** is a  (2), is called (2)
> **Prerequisites:** set up (3)
> **UI Navigation:** go to (2)
> **Code Identifiers:** ngoninit (1)
> **Env Vars:** dom (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Connecting an Angular component to a service](https://www.linkedin.com/learning/building-angular-and-django-apps/connecting-an-angular-component-to-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/connecting-an-angular-component-to-a-service?u=76281980&t=0)** - [Instructor] We now need to fill in the controller which will manage the logic of our app. The controller makes it easier for us to rate unit test because it introduces a lair between the components and the [[Representational State Transfer (REST)|rest]] APIs service calls which are more tedious to mark. We have the dependency on the restApiService, and in the save method of the controller, we are accepting tourPackageData, and then we will be calling the createTour method of the restApiService with that data. Now, in the createTourPackage component, we have to update the placeholder save method, to first extract the tourPackageData from the packageForm using getRawValue, and then we have to call the controller save method, and we will subscribe to the observable returned, and then after successfully saving the new package, we're going to update the ID on the form to match the newly created packages ID. Now, let's run the dev servers. And now let's try creating a new package
>
> **[1:37](https://www.linkedin.com/learning/building-angular-and-django-apps/connecting-an-angular-component-to-a-service?u=76281980&t=97)** in the browser. We'll click Create. Now we can see that the button has changed. And now, we can check the [[Django]] admin, and we can see that the Hello California package was created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Django]] (1)
> **Code Identifiers:** restapiservice (2), tourpackagedata (2), createtour (1), createtourpackage (1), packageform (1)
> **Speakers:** - [instructor] (1)


### 3. Front-End Design and Layout with Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [Form layout with Angular Material](https://www.linkedin.com/learning/building-angular-and-django-apps/form-layout-with-angular-material?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/form-layout-with-angular-material?u=76281980&t=0)** - [Instructor] [[Angular]] Material Grids have two components to them, the mat grid list and the mat grid tile. These are some of the input attributes that they have. Now we open up our create tour form component, and we're going to be using the grid to lay out the form. We start with the mat grid list, there are going to be five columns, the row height will be 20vh, which is vertical height units, and we close the element here.
>
> **[0:46](https://www.linkedin.com/learning/building-angular-and-django-apps/form-layout-with-angular-material?u=76281980&t=46)** Indent everything. And then we create a tile for the first field here. And then we're going to create another tile for the next form field. We're going to do the same for a few more fields. For the start form field and the challenge rating form fields, we're going to be creating just one tile, but this tile will have a column span of two, and it'll wrap both of these fields. And below that, we have our two buttons, the cancel and the create or update button. And so we will be wrapping those up as well in a tile that spans three columns. And we're also going to set up the class name here. And so these two buttons will be beside the challenge rating and the starts date form fields because the total number of columns is five and the last two tiles here have a column span of two and three. Let's run the dev servers in the browser.
>
> **[2:24](https://www.linkedin.com/learning/building-angular-and-django-apps/form-layout-with-angular-material?u=76281980&t=144)** We can go to the create packages page, and we can see that the layout has changed. And each tile has a column span of one, and then we have the start date and then challenge rating which are column span of two. And finally we have the buttons which are in a grid tile spanning three columns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Date/time selection with a Calendar in Angular](https://www.linkedin.com/learning/building-angular-and-django-apps/date-time-selection-with-a-calendar-in-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/date-time-selection-with-a-calendar-in-angular?u=76281980&t=0)** - [Instructor] The material datepicker has an interesting architecture. It lets you choose what type of date and time objects it will use. The two options are NativeDateModule and MomentDateModule. Native uses the data objects built into the browser, while moment uses the moment.js library. We're going to be using the NativeDateModule. We open up the create-tour-form-component and go to the Starts On field, and the start date will be using the matDatepicker, which will point to the Starts On datepicker. And then we're going to actually create the toggle button for the datepicker. And again it will be pointing to the Starts On datepicker.
>
> **[1:04](https://www.linkedin.com/learning/building-angular-and-django-apps/date-time-selection-with-a-calendar-in-angular?u=76281980&t=64)** And now we create the actual datepicker, and the Starts On datepicker is the element reference here. And that's all there is to it. Let's run the dev servers, and let's see how it looks in the browser. As you can see the date formatting has changed, and we're able to use the datepicker toggle to open up the datepicker. Now we can change it to a previous date, or we can change it to our current date.

> [!info]- Semantic Content
>
> **UI Navigation:** toggle (2), go to (1)
> **File Paths:** moment.js (1)
> **Code Identifiers:** matdatepicker (1)
> **Speakers:** - [instructor] (1)

#### [Displaying a data table with Angular Material table](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-a-data-table-with-angular-material-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-a-data-table-with-angular-material-table?u=76281980&t=0)** - [Instructor] In the tour package list component, we're going to construct a table using [[Angular]] material components. The data source for the table is the packages variable. And now, we're going to define the column definitions. Create an NG container. And then we use mat column def, and this is for the name column. So the name field of each package. So we define the header, and we need to use mat header cell def. And then we're going to define the value that will be displayed within this cell for this column. We call it element. And then we're going to provide a link to the update page for the package. And we're displaying the element name. And then we define the column definition for the price field. And it's similar to the name field definition.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-a-data-table-with-angular-material-table?u=76281980&t=96)** And we're going to be piping the price through the currency filter. And then we define another column for the tour link. And we have the header cell for this column as well. And the actual cell for the column will look like this. And now we're going to define another column. And this one will be containing actions that we can take on each package. So in the header, we just have the label actions, and then for each cell for each package, we're going to be displaying a button with a router link to edit the package. We're also going to have a button for deleting a package. And we bind the click event to delete tour and element, which is the package. So now we've defined the columns and the headers for each column, and how each column's cell will be displayed.
>
> **[3:12](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-a-data-table-with-angular-material-table?u=76281980&t=192)** We also need to define the header row with mat header row and star mat header row def. So the header row will list all the columns that will be displayed, which we will store in the display columns variable in our component. And then we define how each row will look like, and the columns that will be displayed. What's powerful about this is that you can customize how your table looks like, you don't have to use the traditional table elements. Now in the tour package list component code, we have to define display columns, which is a array of strings. And we will be displaying the name, the price, the tour length field, and we have our actions that we can take on each package. We're going to define a list of tour packages. These are the packages that will be displayed in the rows of the table. And then we have the total number of packages. We need to also define what happens when a page is changed. So when we want to actually load the data,
>
> **[4:47](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-a-data-table-with-angular-material-table?u=76281980&t=287)** so we call tour package controller list, we subscribe to the results of the HTP call that will be made to our Janga [[Representational State Transfer (REST)|rest]] server. We're expecting a tour package page. So we set packages to the page results, and we set the total packages to the page count. And now, whenever this component is injected into the dom, we will be calling change page so that we can load some package data into it. We'll also need to define the delete tour action, and right now, we're just going to use a placeholder that accepts the tour package argument. Let's run our deb server. And now in the browser, we can see how this looks like. So we see that the lists of packages are being loaded from the server. We have our edit and our delete actions, and we have four columns. And as we scroll down, we can see that each row is displayed in a particular way. And we can click edit to edit the particular package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** htp (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Displaying a pop-up dialog box with Angular](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-a-pop-up-dialog-box-with-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-a-pop-up-dialog-box-with-angular?u=76281980&t=0)** - [Instructor] To use the pre-built terms of use component in a pop up dialogue, we need to declare it as an entry component in the module. Unlike boostrapped components, entry components are not launched immediately. In the create tour form, we're going to import the mat dialogue service from [[Angular]] material and import the terms of use component.
>
> **[0:39](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-a-pop-up-dialog-box-with-angular?u=76281980&t=39)** In the constructor we're going to declare the mat dialogue as a dependency. And then we're going to scroll down to the bottom of the file to the save method and we're going to update it so that the dialogue opens up its terms of use component. And the configuration option we're going to provide is that the height of the dialogue will be 70% of the screen and the width will be 30% of the screen. We have the dialogue reference and we're going to use that to set up an action after the dialogue has closed. We subscribe to this observable and the result and if the result is true, that means we should save the package data. So, we're going to use our previous code that we used for saving this data through the controller and we're just going to move it up here. And of course, if there is no result, or the result is equal to nul or undefined, we're not going to be saving this data. For this to work, we need to update the terms of use component. We need to set the no button to return no value on close using mat dialogue close
>
> **[2:16](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-a-pop-up-dialog-box-with-angular?u=76281980&t=136)** and the same thing has to be done for the yes button except here we say true. So, result will be equal to true when we click yes and close this dialogue. Let's try running this. We're going to be creating a new package here. And when we click create the pop up appears, we click no, nothing is saved. We click create, click yes, and the button is changed because we did save the package now. And that's how you show a pop up dialogue with angular.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Displaying more information with Angular](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-more-information-with-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-more-information-with-angular?u=76281980&t=0)** - [Instructor] We're going to create the tour length filter by using the chip components from [[Angular]] material. Start with a div, and we have tour length to filter by. And then we use the mat chip list component, and within it, we use a mat chip. We bind selected to the value of the tour length, and we bind the click event so that when we click on this one, it will display all tours that are available. And then, we're going to define a mat chip that's only selected when the tour length is equal to one. And when we click on this one, it will filter by a tour length of one. We're going to do the same for filtering by a tour length of two, and three days. In the component code, we have to define the tour length variable. And it starts off as null, which means all packages should show up and then, we define the
>
> **[1:34](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-more-information-with-angular?u=76281980&t=94)** filter by tour length method that we were calling whenever a mat chip was clicked. So we store that value and then we reload the page. Let's see how this works in the browser, by running the dev servers and going to the packages page in our app. We can see the packages are loading up, and we can see our chips here. One day chip, two days, three days filter. Of course, when we click all, it's also selected. Now let's do something about the edit and delete buttons. We should add an explanation there using a material tool tip. We can do that by updating to our package list, scroll down to where the action buttons are defined. We find the edit button, and we're going to say mat tool tip is equal to update this tour package's information, and the positioning of this tool tip will be before the element. And so it will appear right beside it, and for the delete button, we'll also add a nice tool tip, and the position for this tool tip
>
> **[3:13](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-more-information-with-angular?u=76281980&t=193)** will be above the element. As long as we're adding explanations, we should also add something to the create tour form. We're going to import the mat snack bar, and snack bars are little pop ups that show up whenever an action is performed. We're going to add that underneath dialog in the constructor, and then when we go to the save method of create tour form, we're going to update what happens after we close the dialog, and after we save. After successfully saving a new package, we're going to open up the snack bar and it's going to display a short message with the name and id of the package that was saved, and it will have a dismiss button, but it will also disappear on its own after 2500 milliseconds, or 2.5 seconds. And we also check, after closing the dialog, and we did not try to save, we're also going to show a snack bar. And this one will just say could not save,
>
> **[4:50](https://www.linkedin.com/learning/building-angular-and-django-apps/displaying-more-information-with-angular?u=76281980&t=290)** have a dismiss button, and their duration this time will be 5 seconds. So let's see how this looks in the browser. We see the list of items, we have our chips here. And then we have a tool tip right beside the edit button. And we have another tool tip appearing above the delete button, and when we click edit, we try and create a new package. If we click no in the dialog, the snack bar could not save appears, and we can click dismiss. When we try and create and click yes, and successfully is created, we see the snack bar show up with a small message.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (1)
> **UI Navigation:** click on (2), scroll down (1), go to (1)
> **CLI Commands:** find (1)
> **Versions:** 2.5 (1)
> **Speakers:** - [instructor] (1)


### 4. Authentication with Django and Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up Authentication with Django OAuth Toolkit](https://www.linkedin.com/learning/building-angular-and-django-apps/setting-up-authentication-with-django-oauth-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/setting-up-authentication-with-django-oauth-toolkit?u=76281980&t=0)** - [Instructor] Our app is designed for administrators and tour operators to use. This means we're going to need authentication. [[Django]] OAUTH Tool Kit provides an easy way to add OAUTH token based authentication. We need to update the middleware setting in our settings pi file. And we add oauth2_provider.middleware. And then we need to find the authentication backend setting. We're going to remove the no authentication backend that we've been using. And we're going to insert an oauth2_provider.backend.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-django-apps/setting-up-authentication-with-django-oauth-toolkit?u=76281980&t=45)** We must configure the oauth2 provider, specifically the backend class because we are going to be using [[JSON]] data payloads with this [[Representational State Transfer (REST)|rest]] API server. And then we have to configure Django rest framework to no longer use the no authentication backend and instead to use the oauth2_provider rest framework specific oauth2 authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Django]] (2), [[JSON]] (1)
> **Env Vars:** oauth (2), json (1), api (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Using scopes with Django OAuth Toolkit for permissions](https://www.linkedin.com/learning/building-angular-and-django-apps/using-scopes-with-django-oauth-toolkit-for-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/using-scopes-with-django-oauth-toolkit-for-permissions?u=76281980&t=0)** - [Instructor] To add more nuance to permissions, we can use scopes with [[Django]] OAuth Toolkit. We add the scopes to oauth2_provider in the settings file. (keys tapping) And we can define a Read scope, (keys tapping) a Write scope, (keys tapping) a scope for accessing groups, (keys tapping) and we have a tour package model so we can define a Packages scope. (keys tapping) Now in our API views, we're going to have to import (keys tapping) oauth2_provider permissions, (keys tapping) specifically for rest_framework. And the R TokenHasReadWriteScope. And TokenHasScope. Now in our PackageViewSet, we're going to add these permission_classes. We're going to have TokenHasScope and (mouse clicking TokenHasReadWriteScope. And the required scope to access these packages is the Packages scope. So whenever an API request goes to the PackageViewSet, it will need to be made with an OAuth Token that has the ReadWrite and Packages scopes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1)
> **Code Identifiers:** rest_framework (1), permission_classes (1)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)

#### [Registering a new OAuth application with Django OAuth Toolkit](https://www.linkedin.com/learning/building-angular-and-django-apps/registering-a-new-oauth-application-with-django-oauth-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/registering-a-new-oauth-application-with-django-oauth-toolkit?u=76281980&t=0)** - [Instructor] Now that we have oauth tool kit as authentication backend and middleware for [[Django]]. We have to register a new application through the admin interface, we can launch the Django server, go to the browser, and login to the Django admin. We can go to Django Oauth Toolkit Applications. Click Add Application. A client ID is already generated, along with a client secret these are what you'd need to authenticate any requests made to the API server. We're going to set the client type as confidential and authorization grant type as resource owner password based. And we're just going to name this as example frontend.
>
> **[0:53](https://www.linkedin.com/learning/building-angular-and-django-apps/registering-a-new-oauth-application-with-django-oauth-toolkit?u=76281980&t=53)** So we already have an existing application and it is used by our [[Angular]] app to make requests to the API server. So it already has a client ID, the client type is confidential, and we already have the client secret. You can also create oauth applications that do not have usernames and passwords by using a different authorization grant type such as authorization code, client credentials, or implicit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (4), [[Angular]] (1)
> **Env Vars:** api (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Logging in and authentication with Angular and HttpClient](https://www.linkedin.com/learning/building-angular-and-django-apps/logging-in-and-authentication-with-angular-and-httpclient?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/logging-in-and-authentication-with-angular-and-httpclient?u=76281980&t=0)** - [Instructor] We have OAuth authentication set up on the [[Django]] backend, so now we'll be able to make login requests to the server through [[Angular]] and a [[Representational State Transfer (REST)|REST]] API class. We're going to be keeping track of whether or not the user is logged in or not, and we're going to keep track of their OAuth access token. And we need our logout method first. You will just set loggedIn to false and clear the accessToken. And then we can begin our login method where we provide a username and password, and then create the HttpHeaders we'll be using when making the request. We set up the data we'll be posting in order to get our access token. grant_type is password, username and password are provided, the client_id is an existing one, and the client_secret already exists as well, and then the scope will be read, write, and packages. Then we make the HTTP request to the /oauth/token/ endpoint on our Django REST server with the data and the headers, and then we subscribe to the result of this.
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-django-apps/logging-in-and-authentication-with-angular-and-httpclient?u=76281980&t=96)** The response will be an OAuthLoginResponse. This means that the user has been able to log in and that we have an access token for future requests to the API. However, if there is an error, we're going to make sure that they're logged out. Now, in the app component, we can build up a login form. We need a username, and that's a FormControl, and the default value will be admin. And the password will be another FormControl with no value in it. The constructor for app component will now rely on restApiService. And we need a login method. And when a user tries to log in, we'll send the login request with the form field values that they provided. And we also have a logout method so that they can click a button later on and log themselves out. In the app.component template, we can hide all the information that a non-logged in user should not be able to see, so we check if the user is logged in through the restApiService.
>
> **[3:10](https://www.linkedin.com/learning/building-angular-and-django-apps/logging-in-and-authentication-with-angular-and-httpclient?u=76281980&t=190)** If they're not, we show the login form. We move this down here. So all the navigation links and any other data will be hidden behind a login form, which will be defined in this template. We have our first field, which is the Username field, it is an input box, and its formControl is bound to the username formControl variable that we set up before. And we do the same thing for the password. And after that, we have our login button. And when we click on it, we'll call in the login method. And in our navigation links above, we're also going to have our logout button.
>
> **[4:27](https://www.linkedin.com/learning/building-angular-and-django-apps/logging-in-and-authentication-with-angular-and-httpclient?u=76281980&t=267)** And when clicking, it will call logout. Now we can run the Django server and the Angular dev server. And we can check the results in the browser by going to the homepage, and we see that there's a login form now. We type in our username and password, which is the same, we click login, and now we can see that we're logged in. And again, we can log out and we're back to the login form.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (3), [[Angular]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Code Identifiers:** restapiservice (2), formcontrol (2), loggedin (1), accesstoken (1), grant_type (1)
> **Env Vars:** rest (2), api (2), http (1)
> **Definitions:** is an  (3), means that (1)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (3)
> **Exercise Files:** template (2)
> **UI Navigation:** click on (1)

#### [Using OAuth headers with Angular and HttpClient](https://www.linkedin.com/learning/building-angular-and-django-apps/using-oauth-headers-with-angular-and-httpclient?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/using-oauth-headers-with-angular-and-httpclient?u=76281980&t=0)** - [Instructor] Now that we can login, we need to reuse the Oauth access token in all of our [[Representational State Transfer (REST)|rest]] API requests. We can update the common options method in the rest API service class to populate the HTTP client headers. When the user is logged out, we can return an empty header. However, when the user is logged in, the headers will include the authorization header,
>
> **[0:42](https://www.linkedin.com/learning/building-angular-and-django-apps/using-oauth-headers-with-angular-and-httpclient?u=76281980&t=42)** which will be bearer with the access token attached.
>
> **[0:50](https://www.linkedin.com/learning/building-angular-and-django-apps/using-oauth-headers-with-angular-and-httpclient?u=76281980&t=50)** Now let's run the [[Django]] dev server and [[Angular]]'s dev server
>
> **[1:02](https://www.linkedin.com/learning/building-angular-and-django-apps/using-oauth-headers-with-angular-and-httpclient?u=76281980&t=62)** and let's see how this looks in the browser. We login with our admin user and password. And now we can see the data loading up because the Oauth token from our logged in user is attached to every API request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Django]] (1), [[Angular]] (1)
> **Env Vars:** api (3), http (1)
> **Speakers:** - [instructor] (1)

#### [Authentication storage with Angular](https://www.linkedin.com/learning/building-angular-and-django-apps/authentication-storage-with-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/authentication-storage-with-angular?u=76281980&t=0)** - To make things easier on us as we write our app, we can use HTML5 local storage to store the access token for later use. When we initialize the [[Representational State Transfer (REST)|rest]] API service, we can check for an existing access token and retrieve it from local storage. Then, we can update the login status if the access token is set. We also need to update the login method so that when a user successfully logs in we make sure to store the access token in local storage.
>
> **[0:43](https://www.linkedin.com/learning/building-angular-and-django-apps/authentication-storage-with-angular?u=76281980&t=43)** Now lets try this out. Let's run the dev servers and we check the browser, we open up the dev tools and go to application and then local storage and we see there's nothing stored yet. We login as a user when the password for this user is the same. We login and we can see an access token has been created. And with admin, we can do the same thing. And we can see that the access token has been updated and stored in local storage. If you want to clear the local storage you're welcome to do that by clicking clear storage in the dev tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** html5 (1), api (1)
> **UI Navigation:** go to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - to (1)


### 5. Filtering and Pagination with Django and Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [Checking permissions with Django](https://www.linkedin.com/learning/building-angular-and-django-apps/checking-permissions-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/checking-permissions-with-django?u=76281980&t=0)** - [Instructor] To add permission checking per object, we can use the base filter back in from [[Django]] [[Representational State Transfer (REST)|rest]] framework. We can also use our pre-existing package permission model from API models. And now we can start writing our filter. That's a sub class of base filter backend. And we are overwriting the filter query set method. And the query set will be filtered through the check permission method.
>
> **[0:44](https://www.linkedin.com/learning/building-angular-and-django-apps/checking-permissions-with-django?u=76281980&t=44)** And the query set will be ordered by the ID in ascending order. Now let's define check permission. So if the requesting user is not defined, we're not going to return any packages, because they haven't logged in. However, if the requesting user is the admin,
>
> **[1:18](https://www.linkedin.com/learning/building-angular-and-django-apps/checking-permissions-with-django?u=76281980&t=78)** we're just going to return all packages. Now it's the case where a user's specific packages have to be returned. So we get the package IDs, and then we have our own package IDs, so the requesting user's package IDs, and we use package permission and filter by whether or not the user's an owner of the particular package, making sure the package ID is accessible to them and we're setting the user to the request user. Going to extract that list of package IDs, and then we return a filtered query set where the package ID must be in own package IDs. Now we can add this filter to the filter back ins, and we can watch the dev server. Now let's see how this looks in the browser. We go to local host 4200, where our [[Angular]] app is, we log in as user A, and the password is the same.
>
> **[2:53](https://www.linkedin.com/learning/building-angular-and-django-apps/checking-permissions-with-django?u=76281980&t=173)** And as you can see in the list of packages returned, we can only see packages that have user A in the name. They do not have access to any other packages that do not belong to them. Let's try logging out. And then logging back in as the admin user. As you can see, an admin user has access to all packages from all users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Angular]] (1)
> **Env Vars:** api (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Deleting an item using Angular and Django](https://www.linkedin.com/learning/building-angular-and-django-apps/deleting-an-item-using-angular-and-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/deleting-an-item-using-angular-and-django?u=76281980&t=0)** - [Instructor] To delete an item, we need to send an http request from [[Angular]] to [[Django]]. Let's update the [[Representational State Transfer (REST)|rest]] API service to make that call in a delete tour method. Go to the bottom of rest API service, and we create delete tour, it accepts an ID, and then it's going to return the result of calling http client delete and its point to api v1 slash packages with the package ID that we want to delete and then we provide the olof token in the headers.
>
> **[0:45](https://www.linkedin.com/learning/building-angular-and-django-apps/deleting-an-item-using-angular-and-django?u=76281980&t=45)** Now in the tour package controller, we also need to implement a delete method. This one however will take a tour package. We're expecting that it will have an ID in that object and we're going to return the result of calling rest API service, delete tour, the tour package ID. Our tour package list component already has found the delete buttons for each package in the list to delete tour. So all we have to do is fill it in. We can call tour package controller delete and pass in the tour package. And then we subscribe, so that after deleting we update the list of tour packages. And that's it. Let's try running this in the browser. Run the dev servers. And we go to the web app. We log in as admin. And then you can see a nice list of packages. So let's delete the first one that we see. It reloads, we'll delete another one, and the list reloads and we can see we've deleted two items.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Angular]] (1), [[Django]] (1)
> **Env Vars:** api (3)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Partially updating an item using Angular](https://www.linkedin.com/learning/building-angular-and-django-apps/partially-updating-an-item-using-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/partially-updating-an-item-using-angular?u=76281980&t=0)** - We're able to create new tour packages, list them, and delete them and now it would be nice to be able to update them as well. So in the [[Representational State Transfer (REST)|rest]]-api.service we're going to add a new method called updateTour. It's going to take tourPackageData as a parameter. And then we're going to start constructing this API request by extracting some of the data we need to transform before we send it over. And then we're going to call http.put and the URL will be /api/v1/packages. Because we're updating an existing package, we can use the ID that were given in the tour package data. And now the data we're going to send will be the start date, formatted in a specific way,
>
> **[1:03](https://www.linkedin.com/learning/building-angular-and-django-apps/partially-updating-an-item-using-angular?u=76281980&t=63)** and the tour_length needs to be renamed, and then we pass in the rest of the data. We also need the commonOptions that we use, which would include the oauth token that we need to make this request. Now, in tour-package-controller, we're going to update the save method so that we can update an existing TourPackage. We're going to check if the TourPackage ID is greater than zero, which means it has an ID which exists, and then we're going to return the result of calling updateTour. Now, to reuse the create-tour-form, we're going to need to start by importing ActivatedRoute from @[[Angular]]/router, and we're going to be using that in the constructor, and when we initialize this component, we're going to be checking the route parameters to see if an ID has been set. So extract the ID from the parameter map, and if there is no ID set, we just return.
>
> **[2:39](https://www.linkedin.com/learning/building-angular-and-django-apps/partially-updating-an-item-using-angular?u=76281980&t=159)** Otherwise, we set the ID of the component and then we call the controller method Get to get existing data for an existing package. We subscribe to this, and then again we have to transform the data a little bit,
>
> **[3:10](https://www.linkedin.com/learning/building-angular-and-django-apps/partially-updating-an-item-using-angular?u=76281980&t=190)** and then we can update the package form by setting the value to tourLength, with the proper casing,
>
> **[3:23](https://www.linkedin.com/learning/building-angular-and-django-apps/partially-updating-an-item-using-angular?u=76281980&t=203)** and the rest of the data. Let's run the dev servers. In the browser, we'll go to the app, we'll log in, we'll see existing packages, and we'll be able to click on them, and see the existing package data load up. So we can change the category of this package from Restaurants to Hiking, click update, click Yes, and we can see the package has been saved. If we go back to the list and then click Edit again, we'll see that the saved data has loaded up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Angular]] (1)
> **Code Identifiers:** updatetour (2), tourpackagedata (1), tour_length (1), commonoptions (1), tourlength (1)
> **Env Vars:** api (1), url (1)
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** make (1)
> **API Endpoints:** /api/v1/packages (1)
> **Cross-References:** go back to (1)
> **Speakers:** - we (1)

#### [Pagination with Django](https://www.linkedin.com/learning/building-angular-and-django-apps/pagination-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/pagination-with-django?u=76281980&t=0)** - [Instructor] On the front end we have the full list of tour packages showing up. However, with [[Django]] rest_framework, we can add some pagination to reduce load on the server and the database and to show a smaller amount of packages at a time. So we import PageNumberPagination and then we create a sub class PackagePagination, which is a subclass of PageNumberPagination, and then all we have to do is set the size which will be 10. So 10 packages will be returned from the API, and we just have to update the view set in order to make that happen. So we set the class to PackagePagination class and that's it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Django]] (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** rest_framework (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Pagination with Angular](https://www.linkedin.com/learning/building-angular-and-django-apps/pagination-with-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/pagination-with-angular?u=76281980&t=0)** - [Instructor] To add Pagination to the front end we add the [[Angular]] material match paginator component to the tour package list page. We're going to add it after the table. And the length is the total number of packages. The page index is the current page we're on. And this is zero based. The page size is 10 to match what we have on the Jenga side. And we're actually going to hide this page size and then we're also going to show the first and last buttons which will allow us to skip to the first page or to the last page. And we're going to bind on the page event and whenever a page is changed, we update the page idex and then we call change page to actually reload the list of packages. The paginator is set up in the component template but now we need to set up the value for page index. As I mentioned, it is zero based and when we call change page, we're going to need to adjust that for the Jenga pagination. And when we call the controller list method we'll be passing in the page that we want and we're going to have to update
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-django-apps/pagination-with-angular?u=76281980&t=95)** the tour package controller, the list method to actually accept that parameter and we call it page index. It is a number type and a default value is one. And again, we're passing it through to the [[Representational State Transfer (REST)|rest]] API service. Now, in the rest API service we can update the list tours method. Again, we have a page index parameter. And in options we can set up the HTTP request parameters. And on the Jenga side it's called page. And we can actually be more specific here when calling the HTTP client get method, we can pass in to our package page and it will typecast all the responses into a tour package page interface type. This is just a neat feature that Angular provides through HTTP client and typescript. And it allows you to type check the responses from HTTP calls. So, we're going to extract the results and count from the page. And now we can run the dev servers. We can load up the web app. We can log in as admin.
>
> **[3:11](https://www.linkedin.com/learning/building-angular-and-django-apps/pagination-with-angular?u=76281980&t=191)** And we can see the pagination is working, we have 10 results. Go to the next page, another page loads, go to the last page so we can see where we previously added new tour packages at the end. And we can also go back to the first page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** http (4), api (2)
> **Prerequisites:** set up (3)
> **UI Navigation:** go to (2)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Filtering with Django](https://www.linkedin.com/learning/building-angular-and-django-apps/filtering-with-django?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/filtering-with-django?u=76281980&t=0)** - [Instructor] We already implemented a filter on the [[Django]] side for checking permissions of whether or not a user can access or write to a particular package. Now, we want an additional filter. Going to add that after the previous filter. Going to call it TourLengthFilterBackend. It's also a subclass of BaseFilterBackend. And, again, we override the filter_queryset method. And we are going to extract the tour length value from the query params.
>
> **[0:46](https://www.linkedin.com/learning/building-angular-and-django-apps/filtering-with-django?u=76281980&t=46)** And if it is set, we're going to return the queryset.filtered by the tour length. Otherwise, we just return the query set as it was. And then we add the FilterBackend here to the PackageViewSet FilterBackends list. And now, we can run our dev server. We can test this out with a curl command. First, we need to log in with our prefilled-in log-in information. Going to post to the oauth token endpoint. So we now have an access token that we can use to make further requests. We set the authorization header to use that access token. And we're going to be getting the list of packages from our API endpoint. But we're going to filter it by the tour length. So we just added this filter, and now, we're going to actually use it as part of the query parameters here. And just to make the output of the [[JSON]] a little nicer. Going to use [[Python (Programming Language)|Python]], json.tool,
>
> **[2:22](https://www.linkedin.com/learning/building-angular-and-django-apps/filtering-with-django?u=76281980&t=142)** and we only want to see the first 50 lines of that. So, as you can see, we have 38 items returned, and the tour length is equal to one, and so the filter is working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Django]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), curl (1), python (1)
> **Env Vars:** api (1), json (1)
> **Code Identifiers:** filter_queryset (1)
> **Speakers:** - [instructor] (1)

#### [Filtering with Angular](https://www.linkedin.com/learning/building-angular-and-django-apps/filtering-with-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/filtering-with-angular?u=76281980&t=0)** - [Instructor] In the list of tour packages, we have a filter for filtering by tour length. When a chip filter is clicked, it updates the value and then calls change page. So we want to pass in that tour length value to the tour package controller list method. And then in the tour package controller, we update it so that it can pass the tour length on to the list tours method of the [[Representational State Transfer (REST)|rest]] API service. And then we update the rest API service and note that we are using question mark as part of the pipe signature here for the variable. Because the tour length can be null as well, it doesn't have to be defined, so that we can return a list of all tours. So now if the tour length is defined, we can update the query parameters we sent to the server to include the tour length. That's all there is to it. Let's check it out in the browser. First we run the dev servers and then we load up the web app. We can log in as user_c and the password is the same as the username here. So we see all packages, 166 of them. Switch to two days, there's 42. And then we switch to three days and we can see that the tour length
>
> **[1:33](https://www.linkedin.com/learning/building-angular-and-django-apps/filtering-with-angular?u=76281980&t=93)** is exactly three days.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** api (2)
> **UI Navigation:** switch to (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Animations in Angular](https://www.linkedin.com/learning/building-angular-and-django-apps/animations-in-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/animations-in-angular?u=76281980&t=0)** - [Instructor] [[Angular]] provides a set of functions that are a mini-language to make it easier to manage different animations and transitions between different states and styles for elements and groups of elements. This is an overview of the key animation functions we'll be using. We have trigger for creating a group of states and transitions on an element. We have transition to signify the transition from one state to another. Query, for searching elements to apply styles to. And style will create styles for the transition between one state to another. And animate will allow us to create key frame animations. Now, we start by importing the animation functions that we'll be using. We import from Angular Animations. Then, as part of the component decorator, we're going to create the animations list. This is where we define a trigger for the table data. And we're going to be animating the transition between the loading of the data for the table and when the data has been loaded. And then we set up a query to look for the table body element. And it will initially have a style
>
> **[1:33](https://www.linkedin.com/learning/building-angular-and-django-apps/animations-in-angular?u=76281980&t=93)** where the opacity is zero, so it will not appear on the screen. And then, we set optional to true because the table body element itself may not be in the DOM, so this query would return nothing. And after that, we again query for the table body element, but this time we're going to apply an animation that lasts 1.5 seconds, and it will transition the style, the opacity, from zero to one. And again, we have this configuration for the query and that's how we set up a trigger, a transition, a query, and the animation that happens between one style to another. Now we have to set up the trigger variable that we'll be using to store the state. So we scroll down to after the page index variable and define a new one, loading data, and the state can be loaded or loading. And the initial state is loaded. Now we have to modify change page, as soon as we're going to be loading new data. We say that loading data is in the process of loading, that's the current state. After we have updated the results, we can say that loading data
>
> **[3:09](https://www.linkedin.com/learning/building-angular-and-django-apps/animations-in-angular?u=76281980&t=189)** is in a new state, the loaded state. In the tour package list template, we have to go down to the table, and after the data source, we're going to be binding the table data trigger to loading data. So the animation trigger will be checking the value of loading data and use that for the state transitions. Now let's run the dev servers, and in the browser, we load up the web app. We can log in as another user. The user name and password are the same, and we can see that the animation is being triggered. So when we change the filter, we can again see that the state is changing from loading to loaded state and during that transition, we're animating the list. Now let's do something a little bit more complex with key frames. So on the filter chip components that we have, we're going to be animating those. So we scroll up to the animations list that we have for in the component decorator, up to our package list. And we're going to create this new trigger called filter selected. And in the transition between loading and loaded
>
> **[4:47](https://www.linkedin.com/learning/building-angular-and-django-apps/animations-in-angular?u=76281980&t=287)** we're going to query for the mat chip selected element. And the initial style we're applying is transform origin and then transform rotate zero. And we have optional is true as the configuration for the query. Now we add our second query, again, for that chip selected. And in this list, we're going to have multiple animations. So these are the key frames. So the first one is animate, and it will last for 125 milliseconds in a linear way. And the style we're applying is transform, rotate 12 degrees. After that we animate and for 250 milliseconds, with a different type of easing, ease in out instead of linear, we're going to apply another transform, and this one rotates in the other direction. And finally, we're going to rotate back to zero.
>
> **[6:25](https://www.linkedin.com/learning/building-angular-and-django-apps/animations-in-angular?u=76281980&t=385)** So we'll just copy and paste the first one. It'll last 125 milliseconds, and the rotation will be back to zero. And for the query, we again provide optional is true because mat chip selected may not be loaded into DOM at the moment, and that's how we set up the filter selected animation. And we already have loading data to store the state from loading and loaded. And in the tour package list component, we can scroll up to the filter, the mat chip list, and add our filter selected animation trigger and use loading data. So if we go back to the browser, we already have the Angular dev server running. We can click on one of these filters and see the animations at work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3)
> **UI Navigation:** scroll up (2), scroll down (1), click on (1)
> **Prerequisites:** set up (4)
> **Env Vars:** dom (2)
> **CLI Commands:** make (1)
> **Versions:** 1.5 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)


### 6. Testing Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [Unit testing a component](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-component?u=76281980&t=0)** - [Instructor] And now we're going to be [[Unit Testing]] an [[Angular]] component. We already have a test suite and two tests that we have to fill out. So, let's begin by setting up the test fixture, which is a component fixture with the tour package list component. And then, the component itself and because the component relies on a controller, we need to create a mock controller, and it's a jasmine spy object for the tour package controller. And now, before each test, we're going to be setting up the mock controller by creating a spy objects and we will be spying on two methods. Delete and list. The test bed is also being configured before every test. We will need to add a new provider which provides the tour package controller, I uses the value of the mock controller. After that, it's safe for us to create the fixture. And then, we get the reference to the fixture component instance that was created, that was drawn out in component.
>
> **[1:35](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-component?u=76281980&t=95)** And now we can fill out the first test. We setup a fake page of results that will be returned from the list method. And there's only one tour package in it and it will be our example tour package. So, in this test we're expecting that we're going to be loading a list of tour packages from the [[Representational State Transfer (REST)|REST]] API. So, the component will be calling the controller which will call the REST API. But in our case, we are mocking that out so that we don't hit the REST API directly, we mock out the list method in the controller and we return this page of results. We call fixture dot detect changes which will initiate the life cycle of the Angular component. And if you recall, this tour package list component will immediately try and [[Fetch]] a page of tour packages to be displayed. So after this, we expect that the controller, list method, has been called. We also expect that the component packages will contain the example package that we have and we also expect
>
> **[3:11](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-component?u=76281980&t=191)** that list to have a length of one. So, there's exactly one tour package returned as a result. In the next test, we're going to be trying to delete a tour and expecting that after we delete one of these packages, the package list will be reloaded. So, we setup the page of results that will be returned and we expect no tour packages from the REST API. We update our mock controller so when the delete method is called with this particular tour package, we're going to be returning a value of null. And then, the mock controller list method will return a value of page. Now that we have this set up, we can call component dot delete tour with our tour package and we expect that the mock controller delete method has been called. And then right after, we expect that the list method was called so that the data has been reloaded and we expect the component's variables to be updated. In particular, packages should not contain
>
> **[4:51](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-component?u=76281980&t=291)** the test data we have. And now, let's run this on the command line. To run unit test in Angular, all you need to do is ng test. After compiling, it launches Karma which launches the Chrome window to actually run the tests and we can see that our tests are passing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (4), [[Angular]] (3), [[Unit Testing]] (1), [[Fetch]] (1)
> **Env Vars:** rest (4), api (4)
> **Prerequisites:** setup (2), set up (1)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Unit testing a service](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-service?u=76281980&t=0)** - [Instructor] Now we're going to be testing on [[Angular]] service, the [[Representational State Transfer (REST)|rest]] API service. We begin by creating it here, and before every test, we're going to be initializing that service. Going to call test bed and get rest API service.
>
> **[0:28](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-service?u=76281980&t=28)** And after every test, we're going to be calling the http testing controller verifying method.
>
> **[0:46](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-service?u=76281980&t=46)** The first test we're filling in will be the pagination of the tour packages list. So we will be using page index of two. And here's some test data that will be returned. And then we call the rest API service list tours method, with the page index and then subscribe to the result of that, and we expect the page to equal the test data. Since we are testing a rest API service, it will be using http client to actually make http requests. So we need to set up the request that we're expecting using the http testing controller. We expect one call to this particular API endpoint and we expect it to be made with this URL, and this query parameter. We expect that the request method will be equal to get.
>
> **[2:07](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-service?u=76281980&t=127)** And then we actually flush the request with the given test data. In the next unit test here, we're confirming that a tour package is being returned when an ID is given. So we call service.gettour, with some ID that matches the ID in the test data, and we call subscribe. We're getting a tour package back from this method. And then we are extracting the tour length because if you recall, the tour length on the [[Django]] side is underscored while on the Angular side here it's in camel case. So we extract the data from the test data, and then we're going to be expecting that the tour we received, when making the http called, will have a tour length that equals what we have in the test data. And we also expect that the tour data, the rest of it, will match what we have in the test data. So again, we have to set up a request, that we're expecting this URL to be hit
>
> **[3:49](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-service?u=76281980&t=229)** and we are expecting that the method is a get method as well, and then we're flushing the data. And the last unit test here, we're deleting a tour package so when we call delete tour, we subscribe in, we don't really need to check anything here, but we do have to set up the request that will be made. We're expecting the packages URL to be hit
>
> **[4:28](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-service?u=76281980&t=268)** and we're expecting that the method will equal delete method because we are deleting a package. So now when we flush data, it's just an empty object because nothing needs to happen so we're just confirming that the rest API service is making the call to the correct URL with the correct request method. Now let's run the test. All the tests are running and all the tests passed. And if you look here, we have the rest API service and all three unit tests are passing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (7), [[Angular]] (2), [[Django]] (1)
> **Env Vars:** api (7), url (4)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Unit testing a controller](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-controller?u=76281980&t=0)** - Now we're going to be testing the TourPackageController. The controller sits between between our components and the RestApiService. When we unit test it, we are testing that it's using the RestApiService correctly. So we have the... mockService and the controller. We're going to configure the mockService with a jasmine spy object. And we're mocking out the createTour... updateTour... listTours... and a few other methods here. Then we go down to the providers, configuration of the test bed, and then we add... the RestApiService as something we will be mocking out. And we also add the TourPackageController itself because... before every test we'll also be injecting the TourPackageController.
>
> **[1:28](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-controller?u=76281980&t=88)** And storing that after it's been initialized.
>
> **[1:38](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-controller?u=76281980&t=98)** Now the first unit test we're filling in around line 34 we'll call the "tour package getTour method" from the RestApiService. So we're going to have the controller, we're going to call it "get," and we're providing a package ID of one. And after we make this call, we expect that the mockService.getTour method has been called. And has been called with a specific argument. In the next test, we're trying to save a tour. So that means we are controlling controller.save, we're providing some defaults, and we are expecting that the mockService was called. And we expect it to be called with a particular set of arguments here. Just the defaultEmptyTourPackage. In the delete test, we're going to be doing something similar we'll call delete. We're passing in a particular package ID. And then we expect the mockService to be called, and we expect it again to be called with a particular argument. And the reason we're doing this is because if any of these tests fail, that means that the controller
>
> **[3:12](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-a-controller?u=76281980&t=192)** will not hit the RestApi, which means that back end server will not be used. So this just confirms that everything is flowing through in the right way. So our last test here is for listing TourPackages. We call it controller.list, and we expect that the mockService... was called... with page one and no argument. So this is when the default arguments are applied. We're requesting the first page of tours, and we're not filtering them. However, if we call list with three, being the third page, and five, being a tour length of exactly five days, we expect that the mockService was also called with exactly those arguments. Let's run the tests. If you have more logic in your controller class, you can add more tests to test that logic and any corner cases.

> [!info]- Semantic Content
>
> **Code Identifiers:** mockservice (7), gettour (2), createtour (1), updatetour (1), listtours (1)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)
> **Speakers:** - now (1)

#### [End-to-end testing the form submission process](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-form-submission-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-form-submission-process?u=76281980&t=0)** - [Instructor] Now we can write an end-to-end test to test the form submission process. We have two convenience functions already written. The first is enter text, which will find an input element, clear the value in it, and then send some keys and type a new value in it, and we also have enter form data, which uses enter text, but it looks for a form control, an [[Angular]] form control. And after all of our tests are run, we're going to be able to print out the logs from the browser and this is very helpful in debugging, because the test runner is separate from the browser. And now, before all of our tests are run, we're going to make sure that the browser has gone to the base URL to our web app. And then we're going to be entering text into the username input field, and we're going to be logging in, so that we don't have to do that in each test run. We do it once at the beginning and each test will already be logged in. And we use this selector, find the login button, and then we click on it.
>
> **[1:34](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-form-submission-process?u=76281980&t=94)** And now we can write our end-to-end test. We're going to start by looking for the create link in the navigation bar, and then clicking on it to get to the form submission page. We're going to be checking the page heading. And we expect that the page heading is equal to create tour package. And then we're going to be getting the existing value of the tour package name. Looking for the form control whose name is name, and we expect that the input field's value is equal to the default we had, which was tour package. And then we're going to overwrite that with new tour package. And we're expecting that the value has changed to new tour package, to match what we've written in. And we can continue filling out the [[Representational State Transfer (REST)|rest]] of the form.
>
> **[3:11](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-form-submission-process?u=76281980&t=191)** We're going to set the category as testing. This makes it easy for us to see during testing or on a production site that this new tour package was created by an automated end-to-end test script. Then we enter tour length. And notice that we're entering a string instead of a number, and the same is true for the price. And then our final field is promo, and we'll put test there as well. We're expecting that the create button is on the page. And we're going to be clicking on that button. And then we're looking for the yes button from the popup dialog. I'm going to click yes. And then after we do that, we're going to tell the browser to sleep so that it can send the HTTP request. And now the create button should no longer be present.
>
> **[4:40](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-form-submission-process?u=76281980&t=280)** It should be replaced by an update button, which is present. So that means the object has been created, we have an ID that we're no longer creating. We'll be updating that package. On the command line, we run the Janga server, and then we run the end-to-end tests. You can see all the tests are running. They ran very quickly. And it was a success. We were able to submit the form and create a new item. But just to be sure, we can check the Janga admin. Type in local host admin API package. We're logged in, and there it is. Our new tour package with the testing category has been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** url (1), http (1), api (1)
> **Tools:** command line (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [End-to-end testing the filtered data table](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-filtered-data-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-filtered-data-table?u=76281980&t=0)** - [Instructor] We're going to be taking a slightly different approach with this next end to end test. We have a utility function called screenshot, which will take a screenshot in the browser, and write it to a file. First we're going to be clicking on the list button,
>
> **[0:25](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-filtered-data-table?u=76281980&t=25)** and we're going to be checking the page heading, and we expect that the page heading is equal to tours available and then we're going to be waiting 1000 milliseconds and then taking a screenshot of the initial list of tours that are loaded. We're expecting that the mat chips
>
> **[1:08](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-filtered-data-table?u=76281980&t=68)** that we're using are on the page. We're looking for the one day tour length filter chip and we expect it to be present. We also expect the two days filter to be present as well. And then we're going to be clicking on that two days filter,
>
> **[1:44](https://www.linkedin.com/learning/building-angular-and-django-apps/end-to-end-testing-the-filtered-data-table?u=76281980&t=104)** and we have to await for that click and then we're going to be awaiting for 1000 milliseconds, or one second, for the browser to load up all the data after making the http request to our [[Representational State Transfer (REST)|rest]] API service. And then we're going to be taking another screenshot, called filtered list. Now we can run our dev servers. And the end to end test. You can see that the browser waited a little longer for all the test data to load up. And now we can see the initial list. So we have tour lengths of one day and four days. In the filtered list screenshot, we can see that the two days tour length filter has been selected. We can also clearly see that all the packages in the list have a tour length of two days.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)


### 7. Testing Django

[↑ Back to Table of Contents](#table-of-contents)

#### [Unit testing authentication](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-authentication?u=76281980&t=0)** - [Instructor] So, when we're testing our oauth authentication for this [[Representational State Transfer (REST)|rest]] API, we're going to need to create an access token for the user. And set the expiration time in future and maybe 60 minutes in the future. And then we hae to create the token using the access token model from Jenga oauth tool kit. Create it for this specific user and the scope will be all the scopes that we need. The token value itself will just look like test. It'll have the user ID in it along with a unique value the time stamp of the expiration time. And then the application will be the oauth2 application that already exists in the database that we've been using with [[Angular]]. And it expires at the token expiration time. Now we can return this newly created token. We also need to define a method for setting up the auth header.
>
> **[1:33](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-authentication?u=76281980&t=93)** So, given a token, we're going to be creating an authentication header with HTTP authorization and it'll be set to the bearer with the token value. There's already a test here for package view set, which will test that only logged in users can view packages. So, right now we expect a 401 error because we haven't provided any oauth token when making this request to the API. So, let's create a new user. And then create an access token for them. And then we're going to be making a request to the API. And we're going to be passing in the auth header with the given token. And because we have included the oauth token and it is a valid token, we expect a 200 response. However, when we adjust the scope of the token to be only packages to remove the read and write scopes, and then save that token, and we make that request again,
>
> **[3:08](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-authentication?u=76281980&t=188)** we're going to be expecting that the response status code is a 403. Because not all of the required scopes are there. We go to the command line and we run the Jenga test script.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Angular]] (1)
> **Env Vars:** api (3), http (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Unit testing permission checks](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-permission-checks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-permission-checks?u=76281980&t=0)** - [Instructor] Now we have to test more specific permission checking. We have some packages and users already set up. Let's set up the package permissions so that each package belongs to one and only one user. We use the package permission model to do that. It has a method called set can write and we're going to be passing in the user, and they can write to their own package and we're going to do the same for the other user, who can write to the other package. In the test directly below, on line 61, we're testing to confirm that this assertion is true, that each user can only write to their own package. And now we're going to be testing the permissions through the API. Make a client get call, to a specific package, and we do it with the user who owns that package. So we expect that the response status code will be a 200, that the user can access their own package. The next test is making sure that they can't access another package. So we have something similar here,
>
> **[1:36](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-permission-checks?u=76281980&t=96)** but instead of package, we'll have other package. Set up the authentication headers here, auth user, and we are expecting a 404. However, for the other user, we're expecting a 200. They should be able to access their own package as well. So other user can access other package, and user can only access package, but not access other package. Let's run this test.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Unit testing validation for the REST API](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-validation-for-the-rest-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-validation-for-the-rest-api?u=76281980&t=0)** - [Instructor] We're going to write a test to ensure that validation of form fields is working correctly. First we create a user. And then we create the off header by creating an access token for this user. And then we set up the form data. The start date will be in the incorrect format. So when we post this data to try and create a new package,
>
> **[0:40](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-validation-for-the-rest-api?u=76281980&t=40)** we should get a 400 status code.
>
> **[0:49](https://www.linkedin.com/learning/building-angular-and-django-apps/unit-testing-validation-for-the-rest-api?u=76281980&t=49)** And then we'll check the regex of the error message that we received for start. And we expect it to tell us that it is the wrong format. When we adjust the format of the start date in the form data, we're going to be expecting a 201 status code, meaning that the package was created successfully. Let's run the test. Cool.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-angular-and-django-apps/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-angular-and-django-apps/next-steps?u=76281980&t=0)** - [Rudolf] Thanks for watching this course. The next steps you can take are to watch another [[LinkedIn]] Learning course, "[[Angular]]: Material Design," or you can check out how to make cool animations with Angular in "Angular: Animations." Or, become a [[Django]] developer with the learning path "Become a Django Developer." Thanks again for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Django]] (2), [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [rudolf] (1)


## Instructor

- [[Rudolf Olah]]

## Resources

- Exercise files available

## Skills Covered

- Django
- Web Application Development
- Angular

## Path Context

### In [[Advance Your Skills as a Django Developer]]
← [[Building React And Django Apps]] | **2 of 6** | [[Building RESTful Web APIs with Django]] →

## Appears In

- [[Advance Your Skills as a Django Developer]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Django Project- Build High-Traffic Websites with Django]] — Django
- [[Securing Django Applications]] — Django
- [[Building a Paid Membership Site with Django]] — Django
- [[Building RESTful Web APIs with Django]] — Django
- [[Building React And Django Apps]] — Django

---

[↑ Back to top](#)